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
    "46pwTWyEDbJSbhQvtpM6LJ5uxxc4rPNKbtAcueKKBaVY9hpvkPKAHo146CLkpP9UdpUupXA3AMNqjmZtfQLwCpJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LmY3qi4ksjkyYzXj2Sh9DFmuv77reCGwdKZXMuQGpxR7sX8Ed9mA9d46hgv2x866MJqR6cRN9soceZh2hEzgfLc",
  "key1": "3DATHzVMftDUnTn9wuzh6s8MjqQbVz8f3cZ4ioyMQdkKgE3nhHSUFH6NKgK3q8rH71NtiEeq5K9nLE28gvb8pqRV",
  "key2": "2jrHremCL83GQT8a24nwzrV4C5C5T3JgyUa4MzE92tYvuwSqykxa1XgpQwQLYieNwB1Wb3whMxtCEEN8SWJFmaX3",
  "key3": "7yBoDQy39QS77SWupusspQV3nnmN1QQHvXR8fLSQeVVwRDL8LEw7rseDrWoBYrUQo83Ftb572NRENUKJJ7MkoR3",
  "key4": "2AzhaoLGEvDwYmTe76WYXDAdcUDmksQ28BcPMXYNonGHnd3CH4NmAfLQLxQimBfwuQzPRXMDbppZ2qucpGG6ttWu",
  "key5": "2iwhNZJbMeYDHCyQFWRzvJv5VFrrfXmKcF7CHaCdTM7hBT3rNj4fpkCiPpRvZxadKR4taW4Qrf4ipK4Y9Dt9FLv8",
  "key6": "2A1QTwT3VWXVKba9w2AqCizYpNJFiGb9GCPCMp3f9QAQ2vB5L67CJNj91f78EhDAj7QtQQ1AJbDkgwEfPExA8DKz",
  "key7": "3Ady1tbGuttiFQxDNVgfQeeYVHMKK4SEAKhj6WWwrHXvZuHTxASNnaqtBci1ew8SCPhcx74Pa1hzTwDXoiPCg2Ke",
  "key8": "5pGao3onwN1VdL6WTNgNNv1sWkwwE7fs6ZvCr7W1gYWrnMENkimMvTEkJBs3vCFEW9K5VgKbagnBjEtXgFg813xH",
  "key9": "4yS6PGZgqCYWjx8cekqdgAbBb2VqJL4QqWPsw1KED3yc4wkHvA4TFkgScc9eJWL4ganBsmZiNGAGfDmq41pmiDTZ",
  "key10": "4zDZHLGDo3PNkQnNnVEacDckcgbR4nPmegpkMpMQL5x51A1FHoeygtoJ8SXiyXj5jNtHmoJHxouoDR2P8t7onSqd",
  "key11": "3fHNgszBeK7gC7SZwZaWAUvxUTpL3aGyqTMmNiN1sQYRfNWwgjjCbqoX5Zpm3W5xTE1EDzxS3YX64jQy3gfEK8Aq",
  "key12": "5dJtWtyhu8TZDEKXvbkNERfuuMQWCiyrH7sg2ixoCL9ko6ta68jRcTyrVEYZPwLb4aZ3mmj113s6VEqfQ5cmLWsb",
  "key13": "3yJ4cMUJ9o5YnwznPhTm1QRUR4ZdhmmtwEfj3wF5VSr58Xu4C4j1squzD4CoVWp6xE8m9ZjqpJ2iZjGfrFijzCYi",
  "key14": "4bjzxs4mvbNN39ezZHfK1KgAiTu6TqMzdZ5MRysXrGoVxc5dFqHMzARuoN3yW7hdtpQ4JeZoWwLxWaGrbCYZBBCS",
  "key15": "474PBBFcx8rQYtB4ZkYzXMWWip172CRxhSRpVzYGeZhyDhQbJZH25kPfYxjJFGaKG2sECC8GgV682jArFvhSdT4x",
  "key16": "4vU9AjrNGMgVKCsYXeTpBQ9ZaJwJJLq37yiNXE6sBXFvun3CRei49dFbdUZ9kJpeEinzAsDQsAWQTDCfRSf4KqD3",
  "key17": "5B3KMS5sL1PG8F8szmVNJHTvVsKbwyLdng4aYDQhPz1DE6iyeRQYqerUvxM1uUqRLqsNcnb8jixchqVpuEusDnJL",
  "key18": "3GFGXJUpFgrFBmPDJKZ4AYTCgQpY2SoJuD92TSaKayqmZ8Ji4Vc6xChTn3QPwPp3P7MPiGR2fqcCqbXmo7xAaYG2",
  "key19": "4bD1CWRrUpfLEPbX3vcmu9LEzNVQxWkwXof9SSJDvzA5QUz649CyktkNNmHgFCJXPRcstAFnrGiW6UVdbgvKMrHC",
  "key20": "3rth9KsCustsaKQGtKYnZuvQi9fpPy6CPCzyKCau6f4NnbG57mL6L9ircFxzXtFpNfrjrPYmCP1PH3cxQLbNq9mb",
  "key21": "4Jd1aRhVef4BgmsgkudTMNgHo4w9i9cDKoixhcE3iBafKFR7Ya1J6kccP5kCebBGK9Py9RUXECWP6eQm9YGWzWcQ",
  "key22": "5RSTAQ6a994uca5dzx34hEbGdA8PnUvNYtXtpn46GMViQcaTC5Gs3y2FHGmESdX9h1gQzUTQwX23yhvMxhmcqPqY",
  "key23": "59GGvHqNqsqB5JaN5ALUukb3GrjK9wEeAaWw7xSciYwwwnC4cNFMV684EowdiScX3xRKTPfodmkxNJNtUfWJAFcq",
  "key24": "61JLgv6YDwX7CzxNyDcASQWWuMN1xHkv1Fk86akboDST7KPgdPzzLHxbi1QvsnV8zpPKBk9wowEeAPn754R4TLEt",
  "key25": "2i813AE6LHLCUko31bNbxXAtz4i9AgewN9jiaRwMmTQ9HHpeFTDFXf9pQHEAM8DP98GFFeUcRkQPnmBaFt6gtCbq",
  "key26": "3UqSiZCWbM6oqhwKR3GmaoEptNBHh8jFP6gKZe6PWh5Q7RrUo5FAjVqsodAZpZfuSv72jEQC8chQbSA7e7CWNf2Q",
  "key27": "5T4NMCUxCnBpeTwWwqd7jYGwpttMVXXALnSeLyGTG5GkzLsWziAEyt2UPH9Wy82qJFmisyjJZDzAZtm637LYgu3z"
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
