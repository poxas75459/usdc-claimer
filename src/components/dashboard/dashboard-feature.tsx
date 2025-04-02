/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3RF96jwwEkenDNxUUNr1jvmjnLZTExGpCcoeiT7CBjaTCAwvTFrseF3anUy8kUEc69bCo5Nyym5z8xNpCUKtBgv4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UmxiiGD4D4MCmRaSyHgss5gZFfTDiqUsS6czHUw3gPXpMAtXB7kFiUFitPbP1zwo9QrcCmtXJk79PNft1NtxrnZ",
  "key1": "Dh1wNHNbWQYbpCkaV7zuFWgnbEoR5GRbwQ6Bd2CEpLVZE7SY9ynkXxb1mWgmizACwWJqnBXJUnbJDWr56s7KF9b",
  "key2": "3LmcBmJTGWvu3GKatEbs9QJRgeATfQMv65dShHTLFMWr3cqxfNsF8dnHc7iAB6jr95DhQ4BDTrBUMXn5ZXq547mm",
  "key3": "5QSYAYvUg88b6EfdPwVNMonUajHqf4DoCbBcBDjjiVkBAZJpvy6z3NfPaKdGXTVVu7PS7WQsbKy5qWThJqAPx8kN",
  "key4": "3BqmSfisqvJt8QBu8Gk2dHgWLFF8q3W33jkzVQ4PjKb2n7JC2LRN47wmZVx9VgGufw243QQrDh5SNKk7v1S4Qq1F",
  "key5": "4FzJVstJFzhxJt9NYX4QNmdDwPSagjy1FCTcUCvSBfk4vxK4HrsDE72gDCmEVy9Ran3XomGoQWBxUFoAAhFPiVeD",
  "key6": "8YoPKvaKm6vp3n7FwMDnNNZoktXz6SU3t8zdo3yV9nnbFKQVgtgGLFTDivJ3oAHaXPgu9t1XGadTxXbCCawbHqa",
  "key7": "2MVdREcEL76DxuepyAS9bWqYWW7K7PeqAAQAJJp5kML2jbjQ8L6ihQ5YjDCAJed7fzfQCNdhxS4Y6rfGzL2pDMmx",
  "key8": "415YCXocRE2mWbjEy66c1zAQtDeEC19DwXPnaYN9AfdC5w1yEMYTbTxXxcsxRsTwhy8wK9LADsQ8zSHXXME8dbaP",
  "key9": "3fsjKgQ8apj5YiX8tTbzdckjBJErbDBYz3cNXp55ioJ8nPraT9ZbVQKY7E5GVQhzAkavXAxdTD6cCwbJex5Q9jV3",
  "key10": "4Gx8nweoyU6zgofyqs8iVV8UN2NC7unNjZ2G3sWSE7pvfJTZi4eDbwUw7CP2Kd3qz4TBP9XxoZNHJBRJ4bxvDjLy",
  "key11": "yk8JTEgJQ2NhEtwk3usJRzsJWdUhLhxbABLvMzQAtKbeTYTBoKSNq1yUieW5PtUf3ppstJfdW5A7bFsHuEb2ku7",
  "key12": "5Gf9d68cKENGZoG81UhSLy5uoDhm1dN3GZsYYhtUCVVKzriANi36prgLGoncbAbjtDkczopVMoMUJWtKvf1S1uKJ",
  "key13": "2vnGnKZGxvrAFpHJECV8SnCHniEeLsRsQxKiqrkhT7dozkhdNGuMwd2oStfzJJuuNmFSKNdFp941HyJunCbEWkFN",
  "key14": "59axechqymujzvYugyLEAcpMXuyCQW3Kz9cPRVfW8MBVxg5YY8gTAGQFrSZErq8hzs6hbevzz3uoBU1fFjCArPhX",
  "key15": "3L3UzrqHaDeVudor9n3d1vynjMStjvMWe7f7tr7Ne8Ucg3cLQ4WTAS61P2A4bRvQPY44zym5bBULm3M4otnLqFLo",
  "key16": "42YbZy7FSM6jg7xv16cShSH3AoW9Wzzjw7bPqQf95QPxEx6ghH17R4DqGXbpqEueW1ReYR6sFCvzsuANRmzYVWcU",
  "key17": "4kGpo7NKrE2KVRHcfRN4xHH61Wy1LQga3No3kScSs56QJwXR2GivoYdFK1orRsFXmm3sgimMyA4SE67Y4ugVE1Af",
  "key18": "2HU7dNpNVGgqva7oeEFB1AYkm1soDkHBeeSwMeRm4L142rwoudG6JLrhqroJvPsZux8jUVL9hmG6a9RrZvRYxDmP",
  "key19": "5nnfHQray1ddPSJLFUTxFZL3KUJew8Hv6kXBQPj1A6wNBMW4NwCPi9BRsWmFfG5ftAUQMtzPvNx4kLLAFQUdZk3Z",
  "key20": "5P8RVyxNF63wgyUZKSZA4Btiw7TLnAekQv9taMj5qTU8L8cMJXwnfzxvKTCMMmVwqvJq38DronWKLiKBfrByUWk6",
  "key21": "3V9g1y3HYwXf9KH7efdnw67KmLry5Q9YNhZJEPyoD3wWXsGGUwcmeWvtsXTNS4p9wLT4ayUEpEAveezW6GVgAyhF",
  "key22": "eo5BYiLUHoc2KFNL8J2U5uM2u6WVs35M7WrYQtHcKiBSVgp1sWWQrKK9wtUzz1fMq6jNo21NJHR3NghiYMTpkM4",
  "key23": "4yjYDM9AYjkfoVKiaP8v4a6CVUVkvKqCsYEo4QUkyT79QdtfLYcGVsLh7UK2qK2xviiESEHLSo7h9KAighjyW8JR",
  "key24": "64QU6FCQjr6M4LRd3596iXQxckFAsazNL2X8eis3tpQh6sf1sJnm8Km2WAGMfrVNGEcZ8x1U3NcFMe2ndYvt6AVi",
  "key25": "5XiiQXwULnAy746SRJciWSxYhBDrsxsnFzDTFvGDePzaC2XQFyt2MkjEChGFkLj8kdZQGyKGnSRNX54mSRhz8k6a",
  "key26": "3Z1SG8djSoK53gJto8ncEKKUTa6CNLHBbDitB8aUWfHE6esCkxX48XhxUdyFxq1KLPq76Gi6rNLcKgZzS3UqqHSu",
  "key27": "2Mpj4Xo53x8kHwPARd4JANLExuVMf6D6dVexvXxxihGhL2YmAKand27qj9EDxF4AEYheK3BnVj8TKEPfizrKWdAy"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
