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
    "S1pL57PchEQ7nwNx7ZbV9tmA52M5vhVy5ZkSyobt7Skhghgr7tPvoVFyJsLWcpaeBSnd75vn9vx7eqWEG86NJwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vFMzRx4tbRnpZfRjqgV5SaMdYRBpLAXGpBEF4XrJcKeFGrLY6txnpRTh2UYAa1XcEDuQ4obJze1hzpfM9b3ViyT",
  "key1": "mMnvpZ7kpdLiNBNbEEFb2i8mdBC8LDGzJXLwho1hjFLj87CwLmx9cv1Jou62RngyVGxnP9M1MZTNKkNppgXweTM",
  "key2": "dPfyh2D3WaBoC6NaGjv7Eo6WVHz8V8irPFuS6o7uU4nXd9VVUFFWMPEtLkRiiVfQidNkxqBSNfX7vVjzj1a9eVR",
  "key3": "3nVioUYM7kyXopqdEcSX5WEciyTBUWd8DsZjDRg94g5tBQRiSDSFK9MRGDgHxCSTzr1aqYsuHxo3AeTRmniHUQsk",
  "key4": "4doYPfA7FXzP95Uce6PcHuZZDP26SwLqvGPemyhUrxEij79pG1vj55Wj6u2rV32vm2Ly4jf79eE58awYAE9hH57D",
  "key5": "4aWtp2MgjKZmpbpy92Gs7W3GbPqxcw115S13PsjyKn7gRvhCCgvNibL618tSStDZr23sGHbcbqu8HoXSH1s3BLrx",
  "key6": "3v1zcaQJKLRGmN5wj7c4nbCg4LHNAVe8cu3Kp1hRYZFCdaao8CNhqw3yHMAKatUUnybZxMKvNXk9faeKJWrnWZGf",
  "key7": "279X5apYrXxrMtiGRJToXdPJS1ca8BofzaMxGxwhbaBYDn8FXTSvo6XUxGE6vMC2oqARde9yJGXN7SPoJZU1yUXs",
  "key8": "3RnU53FqDSCBA52HkQvESmXyBfP6nEqCwk9XJQU7cETgRGe4QF2Kx77kc7wPkxdJKheN5ZeQGYmYy3We9vvQ5vnV",
  "key9": "5gU6RoBD1RyGJqTWTSWAeVkPYhti1jUqdGWi5kaeQJ9K29SwXgmWJKGbDAxFtuDccaq9TPL6a2zUKuYo4jDN87Qv",
  "key10": "38ukkh5TqFXKSbe12fweETrtB7YWRA1YwGC6i3GWKjhgjxQGGAV7LM3yMwYLbT4ACSqXPBdQUTgvdfDN8JRtrmhK",
  "key11": "3yrS2SQvBDRZGSWakw7sM3GagR16ie8bsgWUTSrC4AnaFmJDZhxMzNUyohLZZy7WN5A3ocwPkkdiuhKW1RSyAJHg",
  "key12": "3ZWDHbEo3f4PjmisTEz8Cyn79sJ4Ydkwe3PARAJuwNY7yAyccvL2ixfnnuBx8RHu8UgkAmCowLYDztDmZCuQVMN4",
  "key13": "QDcEqWLBDns8Cab4jT2F2knm2mVuo8f4NzE3mwARd4bYqJK7kBE9fnjSUCt9Sr7zx6Hes3uRXw18MaQdWwtvAnQ",
  "key14": "3RKz4ZnPfZ8dLzSki6j83is6KTbyadoJrqXBDez6SZoSvbE2v6HpueyArAp2Jrb6MCV8sdpYMygiWDLNLL7pzCn5",
  "key15": "4yfNDY89gfYRWCtoNdrPtZR2yL4PxSzYx4thjcbPkgfWCHrwMcvEgcZzsuuUFGm329uYxJqNzAcnXFgFLGbpBWM2",
  "key16": "599eTxWcssh7qDu9S1LpfeiRi7aCi1Yhq7oedukNEVT3YhgCWKxqXQLZHjpK5Vodv3v2jdmZd48QZtuSd32oVTwE",
  "key17": "RZsnu7h5czssuC4pzyHxxATaH2i7weM9vzjH9GZDejcQP9zZnkHicgUGM1E1L5YjxRnq4gwrJeqPVYLqM89QLgc",
  "key18": "2oDjd26s7MpAFbrbTVNianEnMox9tihdnZ3Cb4CQ4x4g6SUxUU5eyS4NVTanN3par6XxP81shQm7qNkAMbmJoBzR",
  "key19": "54FELFpA1PMAY6XaAg5wfyT53JqMRyrShj1kPnm5b29Jt9GYS3xkZiWf25KpYchwnwCVhfgMPxek5h4EBzACxXnV",
  "key20": "4Eha4Fowaigw6FMR47u5Jz7oFj3Megd7FgSeSWzQCk9JuJ6zba3wX4n91YJm48eJkY9gspQ6xe7hWVx5iLjuU1tW",
  "key21": "5Ard8Y6yP7TbcAhKJKyAKYzMuJfWTt5an3R79VRLZYcyLPkdd3yHeJKFiWa9LFyMpATSXX6gpVJJhV5iD1mwBQ6a",
  "key22": "5MyqZtKMyc5tLNz52MjMNzQArxSaAdgYwbz8iiHen1Y1Wp6y6LC2ZbSKG1saxPvjaSbqrRLg8NRsyjUgHZ1GAskx",
  "key23": "5jm68ySWKHPJuKNzyqYLgd1dsdpQSRzuTN6k8XWkB8E6TCJXNB7GehWAFax5LswKyv6dXk8sP4CMXuiABRkjri1T",
  "key24": "4TfMT5auhLL34TwwiRN6uF7a7qcfi2N2v5Ssjzez1hqc8AbqapNvGbUqi1fhHR3DE28VHvMhtpEWVkgpzuGYeoei",
  "key25": "5rSQLMQCpXAxZgyJujartGmeBqi8B8766xkXDPZ4YpAz3dr3YBbY4Qr6niAsjXnbV1WSUH72ADgWMdQSPTkLAqoU",
  "key26": "3T5GHF5X2DjyB8VQminwar5GrjSs6ocSLpGMhoZtzDqpuctG9AawrTYzBJhKEppDPMp8Nx8VZpbiTHXpHQi5CLYb",
  "key27": "56GbB9WvAutvkG9nH3cpkPUNY2eLYnV6FnSNAEiDvJHCdfp86FCTK9u9utAJ4HfH5KKtsh8eLzsQHgvXNVXQN65m",
  "key28": "2bjsT3uRA2i1y3gBHRF8XYMDopUHgmDpPfNFA7w4BuXcYwKAxP5F5rjGLEn96SmYd7kNjBHghmVNMTxTcaR1FRCt",
  "key29": "5DEXyUh4x19DMf22foczLrvZuzQgCFVWnzH8c9sGywQrkqbirHvJ23mbzWLpi8X8bQBJ1fYaCLWmUDzLUn6bvZvs"
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
