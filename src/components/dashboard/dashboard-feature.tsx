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
    "4Y2aYPKgP92Ha7pygdjCw96Gr63cWFTV5iWd2jVLmAXfDYjtsvqirSLYHgjwHgUFmA2mfL8vCJjGbsyPHKEHBUCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43uHja6fxhEAzpSsetv4q5HCPCJsaQVN3FnrAYdd2ZXqBf9LcnvyeSbKhrqSvBMLNDUNPe1Ni2EcmrqPWmiiiyzA",
  "key1": "5KQeQ3ojZipMt8SgtBZ4cMfcuNkJTkK6HrLFCs7gMMte9PYMTu4Si1Ad4GXbmc7S8Fr5dT1ZLXYg5nU8hM7qb6Ch",
  "key2": "5B4HfEeuxRtkQxpMMgU8LmLJCQk8A8urMwpV4PD969ZN8wcWhqxKEARQWh7Qnih2RTN2WLPCUtZbqCUndXF6RVGD",
  "key3": "2571yGiLbyMYNxhbmXrPjDSH8jGMk1yb27JyA49mnB2Qcd4wmVgwkR8HrghLP6KLuqbrKiCW99pvcHLrVr5qwtHZ",
  "key4": "4tFYMCYTcpAKo26LMrpb45ypFHkAERkKExHGguSLcPyffpWVNcdnYLwXXR1JwYC96Uixj6kQJZEHMhEACjyxwaqA",
  "key5": "4DsGa8LfozG5yiJ2X5We5dkutmTyEvGyfQE92stniheR11qBJs68qmNjz5oQcnNfS2apeotYm1s16StezS6CGXSy",
  "key6": "MxrwDScN5jQQt96o94yTn36NtyKt5NfSNWcxkWuyHzgfYREgWQydNjbH47JL2btftbUzUR5bBCuferPsk3wqmBD",
  "key7": "5RnWtt4FsizQU9xZ8WhZr89hqnZegKxgka89S5eg94r7aN3QS7FtswGAzbeqqeSfKhgFbRw8ahKtoFj3WFg4twnL",
  "key8": "21BdnDoJTv8gAiQJ943kR3w76hshEt2uh8Pb96j1WnoEvkkvPiWuXNQ5tNwB5d8hVyKke27r8FBXRMP1x9GmHRXn",
  "key9": "3LGz97kXaU2oKC22gFUrf5a169DiLqRnu3NtntEGWJEmeYfTP7ah8SP9DPfy837JbR6C8ch5TvW9BraUgkDkAuXn",
  "key10": "44DaLeoAU6sVCn5W4CF8J3rfFLRZ8NHCqwNKE4392j6f1ynidsyChtQgskVJAeCc9PZeks9DDyY7oV5trG9V28Za",
  "key11": "sE7EqQuroZzxkdDtTFtZRop5QmEXgzTLkaTPkLh3eqePJ371kUEGFFc7UxbuYHiaUha7YY5oJesCkAXhCxxmEu8",
  "key12": "2rwdAW1dwNFR3SpFyoPsmKegD63ioTMxSEetcPMQnPPSMGaF2osfrQrRLE5MAKYTyneeR7nPYqsKmB21RSnfioAa",
  "key13": "2B8tiDHNHGE9uMMpaep9yiG7noQMJdve9E8cLKkG3Rgq7WoNzbeiJFNJXDCCxRj1t9MusQpXAo74DTfW9C4VnvWR",
  "key14": "cpnwuYJd4Xzciz7uc86JqHuhaCzyA1henAZfo529GeeaJ4p1g6FaxC6vJGuzKjjn2vt5ExBLriH2RhEz3WK46GF",
  "key15": "3BoXktMhKUmCD2mGBCPPwFsKbEMZ349bouVubis42eUkDN3WpexgdgyeVikoQzavFzJDgMndym4HvTDJUArWgNtu",
  "key16": "53CSTNoQyYSmR6ERQVFp7WDnqDziaY5EcNiiyUD9tHKvFtHvA7JcdGcCANLcj5HSKh3VDUVKcLGsUhTW2ZNk2sX9",
  "key17": "5YhoW64v4huA9AUUhf7w6MiyAEWN9SRvJGDXHXdkYk6HnT53VNo2xsWJ2uUsNMoWH3zFN7HinXkWqNxGttYgcVP5",
  "key18": "92XgvD7BV2Y7EDQ8eSrw7aYBbLk5Q4jxWbSqvH4ue5WTpWEJGod5Jth1HwakKy3KVWi3eDZS7hYzw7F46LKvm7y",
  "key19": "3UhR9CgP5orWpmSvvUpLTFiiHGdeao6jdUKqHTedsPUB7zTKNu6dQNy5MNCYT5P6bu4BfvKZEpdNwP7Ub1249Exb",
  "key20": "339HHFeVkM2sM3ggKnwANHUEZHgXvR6V3haHhDHiaiX6uYPFvi2w9MKrMhGWmU9BZwd7ndsvsF6rp51KmDYjDPus",
  "key21": "HpQ36puujZYHnUva5C59bAHqnCmKnYG2hANyZVbmVL4QjGi9VHUU1W2Yka7YUUegtHzeo3gAhaMPFwbbYyV3xQ3",
  "key22": "2zKjx6rUo1FLeGqx7F8C66Wy2GWBTux39okqzL5WEXDcJJaEKL3WyQCr4DKF6mkbQnKePj5rLcHFJ6UsL3jNedUF",
  "key23": "s7MrzPKd9sFPQZRoPSPhq8BjU4SmoBTzzURDpFwd75FiyR1hpf2zCCp9QesnxxQjcX36r22HYsPQVP1ojfBdfmc",
  "key24": "ijutBNJ3xvTHwHfHwP8FHpr9sxkVUXW6n74SnzybuMMP1vqLtt1k8BQSdZNftRLQ2yV7TS5FqbVJH2QEonEcZ5W",
  "key25": "3jjqEAvUWiA6eNvaTCs5Vksj7U4rMXDYEQ5K43gDwqsukBW7ewmrickZQJbLadxCpghrbGcx15AUJ5GufMmypXBW",
  "key26": "2zyofqzTYJ6RSzeWCnnN9ADnHuWuSe6w1nnnqx1t3iG32iqZCiLEpvuSnjy4EqcXzVqq4Lrq35Sp1Qvo1yZfD58N"
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
