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
    "5x4tpVZU16y4mNK9SDYJcavc8NaoHu621LGpf9oFHdm5xK3y1A77FBSpdDXu2fSdRSBCM2bc2DQSXLaZZMZVR5MK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yr3Vjc11vEj6hMry2etXRG6nS15PRoCitCE3WuGj5v3BJRDCkPBGvb2ejbBqc8FBhZsuK6byyrX8rB9UAc2pCpJ",
  "key1": "57QeC4iC8uUMAHJQ6QnpoUNzKguUosipBKAFdCSXfaqB2CykmxJxHULtBFEs9jgrp23zZaeSB1aUmf1EMiJDZfPH",
  "key2": "5Kd8nuBnp1UmjkwZZck8jzkXMYkfyswi5ojzyDP84q2pBiVPyG6uhpjS6XjuS6G7vqAG4nbJfPEnyka8BNZHNkc8",
  "key3": "3mSiDJVLr1dGHUkc5wUQwp3GFYmoqZ2PfbemNK8PoTwWbP1RAMdsbGu7EMfexxJ2fk4Q3w67s7kub25Ae9sqzADo",
  "key4": "dBFFmcYfrrcXwAKn2auaWGLaEYYk9y3RGQ5Q5B5qzqh9QUYMVgEEChMEMpraqoXcKcJRSmNzn9q2ZMBqk6cLS57",
  "key5": "5QZg5pfxfpSUNaGsTucVvkocDsEjjJC4eg8grqEghzZr5QrNaGDRRgwczGnPaN25WKoWRxSxs7EWMZ6oy7D7fLpC",
  "key6": "4NaPZJXjaNoY3cZEkNRvUyTxxUotvRs781Tk7aA9XrpetXCqH3DACvmmWdPHqBZvatK3p426oVuvFcjjui3nMhtY",
  "key7": "64vnDgRNEFSNvkf5jfFyZi5FcZi9YJeVJcECebWUHkZPrKPW9NJb7rtqoS1LSz8Wgb9rVuDzrQyHm9LanActFA1B",
  "key8": "DJZTKVgByjTTFq2kxBRrDyxySSpE66p4FkMeaJhsFffwkWJZ1XJYJQG6DHaxMBeJZ9FgNqS7FkRKueuq5Ar1zG3",
  "key9": "59dYjqFngCE9zzi9QXpnw8qqSa4Q8AjcJqdTF3B7zNZX9TwQiTH7dLx3EXSQhj4jB8SajdYATqD5P4esZZqz6eWg",
  "key10": "4VyoDbYBC4oUH9mRPyX1YP3djfjxgUYKSvGJyDh2tXeMdYaSFq5r2Q1CP8w6WEQvdKc5LLL532f61aXsXDpPYaVq",
  "key11": "4VdQhQp7rcAnZJD4adSWor2m4uK7GgtcvP8NDjoWoeaE4AaRB6BqNpVR7zaMUF2RmURFfsHMv6FdnuK2QjkY7Voy",
  "key12": "5g5zHQoD9giRJVRP3ZcHz71Ci2Pn9DvuL3mqECcN7uZaTSZQbpV2c3DUmWUU7hja4jQDoS4PdCXNqcjVce9uCqXW",
  "key13": "3r9uHeFNVJCVSqiNJWXPpLibSde2zpuzsFcpVQEeXjt8GXMXCY7cwdTpdk3Ug9Yi11av57jwe4KAYJfdMPGSaFFg",
  "key14": "EZ3zSMwyJP5qbQVfSidB7RzqN4onf42p1rw1S2aWVawRZqvVbspnguZhTwmDY7H8XAvVoEKC3xwcdLwp47dZYqW",
  "key15": "3c4RLtYs4rsMGc6yiUsa9pYU7ivopY3LtFyNDwCdrpbz25yHsX7Z5xjimyRdERLcTxZvkZowtfyhPqyEM8qjXF5S",
  "key16": "5x7VjjvheeC3iozi3MRWmJxHHAVxUV2DQm3jFeMD14aWyebTQSzsmsBEkuhPpypU9ypXLA76oARmgNE7oZtaP7xP",
  "key17": "5DUGZy6x7qFvtNAsumj7zGtx4zfcWxrkicQ7L4dbV7RQM5UWhBzDSb3WKXgMkX8ZdX7SWEWM9fPAksQaADMJX32j",
  "key18": "5Qsx7xDD3hsDLfNncsJaWB7QaXBF9fc1JUqKfuvRQdEFXLUUdjWKso9fKoT2qYVqKpSQsqfJaNntfZ6tg9EwUuSn",
  "key19": "5wYY25Bgwdmq1qNH1tg98fBbK6bAp2sicNESWQ2DS1v1Dz6tYHed1C7omeejhscuGhLDS5xc6QLCLubx7iB7VX92",
  "key20": "3bWe6oaCg1HDWU5vfj8xTFavuu5PeQsRakYTGRe6vMufBNK1s9WcezybyFG4j4q4vW2XMiBV6gpv2HRfN4pnXAXx",
  "key21": "4ysfTi8SrCf4KaFJ4KU1Uh6WJ6P3NFRkVdoGkyQh9qKzdP4ejuL4eZZP4qYPFqrxBSV36gDdsWabzBmeD7Nw3yrX",
  "key22": "48WiL8PZSrUuN2FJ6gJAcvmHv8TfYXmvNxbKhU7iaLRw3vwZxBe3QyRFDA3jtTzvua7yDqkHH1DLS7QWsTTfizwa",
  "key23": "2Ai2DtcVR9mXTDdic8ST6CUhS1bpVppr4kEmf1iUYxaw9h72hwJk4DAKNDDpjRZWyk2oY6KTxUgpuPtfWHDcMqwE",
  "key24": "5ptNLVEUfrCL5YoJdbJYndVFPjSrG3h466iox2dFWFsEc9xjUS2BESvXuaHiciBucMUNpJRBmY8Bgn1vkcWMr3vs",
  "key25": "MAw4LY8UFCTHX1SUjou5miz3CQmPcaujxnaUXhWXNho1272A2Apn8L8r3skppRN73Y1tgHAxY56xYceBmdo1Zqb",
  "key26": "5exyJynb2oKDQCM6535Z6jsRMX5SdxiLuKKcXSn7pji24bTwaWpqtaMBVV9hRAK76dnun7TN42HEY54FHoL5st3B",
  "key27": "4q4fe3CcmaLpZheUVpxAT7g2MrE7kT4UZASp5E5Ara6vDHdJdUruq3VmB37dc9Kw2G7UMx4np7A7FqoXSr2qDytn",
  "key28": "24AdUnfad7WqCGoG4f2HZq7n1ux1XQ9r8tv4Mkd8siGPivAWTjxzWg8n6jRbohyr2RwT9RqfZjyTfoHZTPwuQGA9"
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
