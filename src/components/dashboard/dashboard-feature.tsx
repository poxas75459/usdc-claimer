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
    "DBBMqbhXpDgCcMK2j5ppwR7ct8Lqs4ECqGYCa6QoTXV6i2SbQr8dj4NS9NmhAYemk9CU32vEaAA2dF8toyJqmww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UfvtUeRxXBBUEjSpJEV1tH2ohyxjAGPzjtp5nhBXCMESSqcjK2v7jWpnrwZFNcwtgiKz8FGrLHuWrLCJVhHYy8j",
  "key1": "4fqh1y8KzKN8ZUDsPHcguTdxistnJjJxTR1qujfZCUN6kNZjmMKhGGehwuwBWbSVisAnLMnGSWEWbkWcv2V2tunq",
  "key2": "2V3X38NdZHg71YJdYRBGKN2mEcCFnWTbCntPbY6bnvgzq9FbqDQ6zy1wBH8kgBiLrBLPEra4vgPgC1KDgj3Y5vDS",
  "key3": "28jbnmney5kNtruMiMRatGHct6ynwdoFg21AXWETjUeGLqKLwfraSdjp7inCXDQm94FcEWgpPHxWBRioqhpTvTk8",
  "key4": "xj4QLVPCt4BTf11sGr1ErNhigGRMDzNpLqRa9k5LYctkDJBuTRtr7MVBg6FqHocgmwBsvgx8ZNqHUzJpfEASm6b",
  "key5": "2eRGBqJopVckXVmZj9n2TRjZRxwu5pUHxLHm9Wp4867bJbAVV3Rrz1FcE96h65qrP3WByqDi7pbbrqGPNee7tXt2",
  "key6": "58e8rPr6z1grFfG2YNB8geRY7pB4bnL8dq5zaMDVgvdL6rMQcbfHfmkQabAf5F1PuJzcTp29C8kTceiSZRtLi2dV",
  "key7": "4uGzcTGzLgBK5ozZC4J4be1uboDTtsaTCHKdj1gg2JvWJxgvXQUk2g2BpenFvKjaCcSQVmd9DajSTft3eTkgmDdF",
  "key8": "43bvFLMYu8n2iPr4WTnNh4f78wyqXhMf3tCnJZNjL94SECruerWSwDJ1zhUdVGjFKqEWsmeBxeZfRQHTDpgwb1D2",
  "key9": "3Yk8RtRj5XHyFamNa3iLVeUwXnpt9W1Ykff4G6RzcQLZWvdcabBF7MwpGsSqZModTGGRZyJ7cz5qaB3bHNBxqCVC",
  "key10": "397a9Rous5AL25DJpVQLuqdw84Qr97aEHHNXNuqYSJAgdQP6mH7xcRixfFMC4qpzgaDbecifegJQBjmnyWgevp53",
  "key11": "5JXxHaMY3eKaTBKz1AJJNCmdWC8qkRHeneCErTHy9SMHNMadovD8whfeULxX6rtHfQWfboVuUPvjyFN8nSp7KUZm",
  "key12": "5uqKPhrnyzJSL2PZHjxN5zEJahEohBBdhGoDfcdZguZNCAUeuzFQsxaY7DvRBXNVRjnAo1cxZLtd1dLNiqjQb2UU",
  "key13": "7j1egEg1HddFJJvZgmYTeTRhDBrk8kvVtJPTWcsiomc8kitFwzYCL1CAP14LStvF13k8aXAWoR66q7huUJ4e6mp",
  "key14": "4xwzxYEWXfGcrkhqMMDx3ENzNEGj7Um5dYzso2LTNGdp5dbGMwET4ES64mSPxYq8oKu8BPmvH89hG7P2xdaRgGhw",
  "key15": "1Qdzo6gW9DQc8o6oVovnchPUsTVjgCmnePBzsxwV62F8TeYXCpVa2iDKE6dHHFsBHxsbTsc4WjaoYkyKF3eBN4H",
  "key16": "5LgHX8R1TpQYYRZMYtGZg92vX2wD4HzPdHrrderK1NMZ7EFx49rxoTYU3Hre4Yx71UVaoUSr4sqoXG4iNPQSYuy",
  "key17": "3X6e8Jei65J2J7ANtqavxgSoHRkRzTvQab2uP2un35BY9nHxiD81F6uLzxjf3HXL8hXwyvEAqxdDvQ9iHK8TJppH",
  "key18": "5kRbWQe4795wmmsQcoVNT6ck9GF3t76USCYST7WiVReXH8mDXodtkSz9pk57oABgBidoSux78TQKD5thTYBTrbaQ",
  "key19": "2RPTq16Q7KCPdAQfvMTGT5pwMBCKhM6bicLw4egMrrMdCuBJNAKM1uBPWUCsSP7oGBUBtezVKGD31q7wKzeRioJC",
  "key20": "4K5XX3sGijV4pgojB4Ag6KvhMb83NuKkpzDE5xksQh725E8zvE4GAZW9A6hpbWgs2QamW47hSk5DCYScnh76u2Ro",
  "key21": "56FCs79WpWZcjCqzW1ow9NZsccDifyGdBDMpVvwVocLd4TT2gjeXYGCx4FBAu3pdQGhWLeqNHrHqXTouH5nVbycn",
  "key22": "3pBbSm3p1x9yd9uEhbzRAKWkbCaVHYsBtwX2hxjq9JEAdAwq593pY3bMeRDysVU2YktELxJDFXgYyvkyXwAzREda",
  "key23": "VDsgtbkfFNtzvxme5pZCKvSuxBykp5EMcFxpiUb6E4GwanWLFcRXZU8cYi2VHT3AyUWqUc1TSmjvtTb7cqpWc6K",
  "key24": "cCSi5jGcsuggJXfjUK5Zz3BHT4izcH4Zju7nAeC4LV7se3mAAewS798VmTvGPEJF8Y4THYWtWCq4vXZoRJL7a7J"
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
