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
    "2iPWNbMBL6qzrFPT2H8jxgQo4m2mtiuSNCNhn9oScdn3TNVbHDiFQRt7wBLyx6mXtRgmwkJ3D69RbR8yfoZ7zoyz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Do5XfM1r3mdxAgs7hpouw9sdhVsR1eyWgmjEApYrZ5FWbT69rP4tBcgnxxrQFBMS6EgTqptuWhat9PQNk4TzRQC",
  "key1": "5z82wf4qVfFrtWsTowsKcuCLGGPD2ZzN8pBHiW96pFto2gcnGFTbG8qGjp2TUSZxNdksgfpcAtUGxLqsLav4WB7d",
  "key2": "2uJjE9UCwyq7e4keKU1qCL1VafBqXkwHu5N55fQPsHGi6KRu2uP9u1XFh2BdU2DBuFMu9myotw2NwZ61bPJh1HLX",
  "key3": "22CnSJfDAJu6cBb41s6u6YCdugPyFVH5ErwvdrcE4nZ8ssaHKXss5w52buvteHcUVkkSrfFrkmfDQdd55UxFGRLn",
  "key4": "2yJyz7Fc43JoBMs2hCtLpGhfiLsmYjWMzqRgeyuCQxjdx5KMc3SSQ6FtSc8sSj9G5BTGCUwaBsxaJzevzgZy6SB3",
  "key5": "5Dz9QwQFGQZGGQVZeZkghG5VfEDGA1CHSmZa22Y1AxuMGU7Zw1yRuh4JksJ1BWqJDmQaR5aXbRxL7bTh7CzKpmYE",
  "key6": "4vZg1cHnWJqDTHkpaycNjSZcU9ES9Af9RSM4HYDRdmqZQWArZ6vMkbz6yMGAcht13hsBhRkXaicHVErQYMeU3fJM",
  "key7": "4VLRU2rsVBidZz456nSYCRsUYfVxGhTD6touPzoNgHSSckpszXx5XfKGzk1kDktkDgyRuFxEc2GygTkuMx2GFCiN",
  "key8": "2P8WhHYRDUYej8ndzF7rVexStB2kzUzUxUuknWcShNR98wVDEz5soWG7adopK5VwiNC8zLKTgpGQnQhjGGahvUfT",
  "key9": "4aQce1TDEfny8HrnomGwZcUsjgptzHcqSEB75awg9XiiXZy6ZCH3ucV28b4ym5unssoLkZcgWFKhDzVvN7dsHLEL",
  "key10": "2aUMTuCLW8PEAprJzYd5KU9LMxUydNd8SQgUDaQnKJCuyqTm9zB5aFnpJNkgRHUsv8gtb8EkjiAZjTVpmoS5hLuo",
  "key11": "23j2fqoNcNczTERcGady55XNQiS6bvpxw9RvDJCCDne8cLGNCn5sFmkDKfRYccyNQHZYLS9pVSwkr3RNSnzDoiXe",
  "key12": "Tp47qphHaJYWWZa1YhWHcV5wuuB6CzUWqi8N1zTjwEqVVEdjPndT5DsCNLfzF4eEidsc9sXs1ApwH2HhLuwVCck",
  "key13": "4FXMLz77T3px6wo53EybHQWrEYf82YzfB58FnbAY6kVT6p9ruuz9Wcb3KqRCwK6TD6Qjs4rbXR3uzei7TnP1ujak",
  "key14": "4o1K2QCKcRWer4Uhp8h5Wn3R3noUGXyMQBBWHW6SVREuWahafYMxP8whUtXposRcTpJ3jpQcS3XitSwe25NgwX6g",
  "key15": "hJVFuaiZX1HyKKUyxbfCZ3XCCrZgXWSTbxhu9KPvXrkLqyhVZyyZTGe1pifP4xXDTZ8R6ybPj4CHjYWKaitksEr",
  "key16": "bPdzmrqcsXoKxQ1fcX4hewRUeVih8JNS8SKRm9eKSn4Km23dCEw3rChGTewJb8mArnL4EyEfZKYNFfMPqWAB942",
  "key17": "b9tjAnYV3Ep2e1x7hUAPwVZjVSiAtpLggqASWy7hR69FR9QyXFovJGqcrDRL63zeNxf6kqQAp4jP3t7XR6KgwRG",
  "key18": "61J619CDuvDMYcJPnyuXkSHFx7mVdjasUm56copfQoTDLdDhdq2Yb1EhJbWkPx4FA7HktstJX9ZpQt35qwLhbtcQ",
  "key19": "43N7wjxWF4BqyBsx6HNhYweDn64y88kMLF2nL1xG4pBm3W4gYz6a6EBM1vrxDJ9Lxj9pb5fSeYAkxH9mER69eCca",
  "key20": "phLSivWT5Q3m4ApS83u8B65QmrkMByZpQ416ke23xFcPXqzFU42AoygCaZgt3fxfUh1HkSvde47yjBz4AQ8fCDr",
  "key21": "6VjXbLB9Cc1mXeHQp6toBG2tmDUpd5rhLK5cpCbinPxhyEoqNMosZWjqNX2ETXYcWGshXZde5EAzGtqX2xYuhcA",
  "key22": "634LRp8sbcMShLgKEg9L4VKvp43gbkhqgSunWyKMnZYrSCLe1xaYcqReuc4hqinz6Fs3fwJyHibJDrcaviFoWbhZ",
  "key23": "5AGaA3RZHVhS7BDXvsr95nf8tY5cu19ENuyf77rLevYvjj3pVG3pfc5dtPWMorth86efmgwTnGfGSrFpfmGMGc3T",
  "key24": "5pos8cBHeG1wunmMWGrjCBJL5S7o8gE91RcnYCkz7TJ3ft1yVUUJBRGoDA9UZv4NXmzbkJikEF8DHMRXJuNmjUSV",
  "key25": "2FAr2TQnwzNwmiWGJN3GY9dDHuLvfcZJiApGQ1kiE2pgUcrVzbmezJjEYegb3xRJSdxp9QDiyzcJxVWB2XyScBb4",
  "key26": "5mLYy7A2i16ZjU8FAut6NShEkbNoRxjV4qhefoo9rptcUUmADq57nWoGh7P9zhUJ55x2Tawevh8j1MFeVRNGnFEV",
  "key27": "2ERqxnCDM7c2D8nEedt5cygzAvXPmLtfZiP89Dmhm3LpZ1K3En1hbuurqSJV8i4YRiTCuU5XUjyCwtSQtiQBT9dV"
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
