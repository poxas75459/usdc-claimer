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
    "2DbiC2DY3TxRtW6TNp4tJh3nGxoCeGuSUxtKMENHnyhprzjpw5YiR3akzK5sDdQfAEyZXUXkri2mAPKDgXk1f8H5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F4q851sLbzCmJbSsTKhhuS4LiVuYbhwew3tzr4zXc1MSnRskuKqLBTKusgS786c9qLr26pQgjm5VQjez48acrcQ",
  "key1": "2NNhkrnHWTSXwjJZ5sNDszBFeCZy4byzVCREuEJeeXRkRA32nEgoqtMuqo1eXSrdnikVbtwFXEvYSWpetRefHSsM",
  "key2": "4iDJoV39yVXtetNjeJqFKEBWt6rJnfu9yM4igx8KUUymdkPJ4RL6AE3HHsfK9FnJbfbzrZFkCEKPrmJETF9fVvVb",
  "key3": "4eZXvVQisgbQKPUQWZhS6KKZrXkogqQND82iXKusFob4Yz87mPKZpvYYjquXwWa6xSmqJCUbVCyvnZhgcFp17R5d",
  "key4": "3SqEnAgQEirJPHpQZkzhfpsMYmWTivB7wmV7zgeXk9XLR7tRM4GByyb4aNVYPdnsm5kLUDb55tZpgSRrsjoggk5Z",
  "key5": "5tZm1uSwvw3EHXHpLdVFxzMYJhnoaDHuJPjde74sXxJJ8Toqh8z7fGowJMhTF62QKCdMoKDfsri1X6Q8UM57ersW",
  "key6": "3a6yMErV9jX4sH2WVjdYyQKKpEznhjHeyRSMHSkgrE6WiPQsVe21J1vmnUnFJ9kxdrp9Ry1J5VHT9vjCQo42z8Vo",
  "key7": "3K89TDgrVE3G2KdSguPUTHsWCsa7r2RekcFFtYKYoXn6inATB5f6RbirvfayHv9diaCKrKvtR6EjPSdBm46N4ak4",
  "key8": "3wqu88bAf6ciBZSRQ7iYGWh2N4NVYquvJ69dKhcYeobaocGND88DF4Zbc95ZrDNtj2uxAN28imcCyodJJaC6v5Ze",
  "key9": "BwjqsHHMNgzbZzcDDUtxsPa56V9qBarybkdvF6mhyutxFEE8Et7JzksKHqpB31wgbR9VBLfMP3wuRaWssXc2BWg",
  "key10": "4JPvgjNi4Rhxepirzqfy63WbwPhprQG9o13pwfFsA7SX9ZFRH2wpfuW8WxYjGYz9zsYRrGUZZXbDJhs1NwoxfgCV",
  "key11": "SDcSXvPVQpfuv2KZYU8HToKpT2LGTSusZ1VYup5oFgVrLYcHbjbH7UwMLYuSSMdMxvfRjQZVrUZ2Pks5MYknu3R",
  "key12": "4qTsmNATkMWkwCgdMGFGfqiJTq4Y6CsUZ4ebGR2VaxxqsXuySsHRrkAGLHWa4QRfLadgV3SgE6CjAvDHnGMXBY9C",
  "key13": "483pvGRVTkeKmNrRw4b23Hh932zSPxZB3mgaGiWUn91JKeHDw8NpyKv2vG817gqpyrGRh8p9UfnNnGqdceag9fxG",
  "key14": "3YDBTU3uKTSMrPS5mbBdiBxvLD4ppsUH1HhJjNWVqhNa1SRmQZGMBcEwuTn9An6iiHp3JUx6pQhyM7Dvi3zGD5Ud",
  "key15": "pGnshhDA3kT2tj37c81Noxnkpkx16snNrodT76mDbsCyfLjz7XCWNgadVz5NcKvLqv978yqMo1msFDk8xzAiVAK",
  "key16": "4Zyzvow6bbaMHLjwMfUUrsdMbS2AJzr2woDmPk4qoozcfKbRyScwm1f9wzJvPKo6a3DibYR4GeCaBfgbQ6jjc5rx",
  "key17": "r4Sw3AZEBXeH13WfJr1SWUBQZevUFBogqxjkd3hPf1iRSNgVStAh1ohdA1G37TsN1bq8wSgmrpKetjYfJr5PH8a",
  "key18": "4YJ9EHJMxP35qYrLhqK2gHuVUf3NvjJKHsefDbaYHNbPbAj7UBkju12qPv88PRdpJZftdeA4ycW1r6CsPeVEyC5s",
  "key19": "65MBF26ojmc61CiT6CQVV66Fv9psx2FJAWQhWDgsRikabkzcWzeg1eGvmzdbtiyoWVF2Qshjgn5TtMGPWWxGFN8k",
  "key20": "45bxYq68ktnBgQSyQ4cmk2s2HnGsb38JXBHjvDsRCrawhVM314j7fKfxE33TnY4wUynMg6VvC4q5B2Bpxo942EiM",
  "key21": "53TXxdp3Psritx17mVMvS3uNTYdaqjVPSU7DGnYm8xdXPHxdF4jNq1g8CibjPHygDan6Lka4PwheAh96xPPzaSx3",
  "key22": "4v2yjrfqKkoSgScDRDKqN8ucpCBLjaXx26pw6DLd35od67z15XMMPURjG8DwxYz6Zsq6pWJaUZaatVPFA5XmyHRd",
  "key23": "YX4QHTfRT5TwdGgkCWtTbcAHjXFUn3Ve1ojbCLufR63u5y3K2wz1hkVEik2UXsQdM26wdhMXPU9YCUATZnnPHEH",
  "key24": "5v8YA8XrN9C2SRbdQXUsGFRaDLpnjWogqDm8JdXhLkuHStFrsKsx8QN9g7dFn8LyQV97yxXEVWL5rTR7ub8ow9Hs"
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
