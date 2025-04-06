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
    "5xLoUCMMNfd8TjYVsjWiAWUhGiaQLtPtYUPe4pGxpmeowScebcFnQBFXrrxP6ENL9pv83fqbQCy6uVeDeiuySktE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q3xE7Nd8dqYjm39tRtyE3vFmAZrNGW2HXewchQsE7RZZJZdj4UFjzxbGuY3i3pTQFCZmcjF24VmQwyRKdMvoWG3",
  "key1": "KKVFPbK3nhmRGogBUUiGfnECDbpVesPZj2bt3Y6Y4Tc6kbMbi2n9omVR4QiWikfZRnBAEp49gxyHZf3pGRT5Yw5",
  "key2": "4CrTWjz5RR7aLZoeC2XqYdX4RfxnDxJRHRjG8qjAnDPnv5qrSwChtguV3EcWQJTR47TAf8FD3TH8jLaWEdU6PbyU",
  "key3": "25dnX3xgRwLdkEtkrfZZzbr2iGXg8nhxhTV9177RM3qcyBeFSrM42GJtHHELrLwyw6J91UYDmG2rLUV7wKBV2xjF",
  "key4": "3m2ASXynVf5foL5wxnXTjzRd15ikGbyHkR2VTnDqqeHDi8SFhQuu1AmXt3z6txNLtXtKyq2HW9q98cG9DEvtstWY",
  "key5": "GVsqCJ4ooYxRGme9KYk7mbUY1rP9LKefhEMxYSoXPtd9FNR8nKfvzpq8DgtxbiovUmiDcjvtfcg5GMSLZLumiwH",
  "key6": "8ajmfEBL2Z9ZsU81LcPdVMBykiEeJDctq6GMDVRv2qzU5qtzY4Yq64kgEpBri3pbR1Aepexj3fyrdKUzQFQjxzD",
  "key7": "3DQJrqJyLhpskx4W6yKsEGLCVLKz928mH9wm2YQF7LaR3e6C56jquFACGhcbzhzp6nqu7PfdoygPSGAewUMK4baS",
  "key8": "5GCBatSAQ38aqHdmWgwTeojGRWNsf2B2gJoY5ZoAQD8oigLzSp4D8VrRZPNzyyo5z4qXVt527mSZcgypWbSP8R1w",
  "key9": "38F9gjjLFaUvJ12WHZB2iN3zqFxeSsGhiYDrju8y6LTrQCSqWKLEjDL9uJ8JzwJCR8xAm5FFrWJRbeg3xv47QTJU",
  "key10": "3VYqGD4sv2zyfGRHmxKeSLZkqCqXstRQ4Be6Q3d2f7S6Dh58vDWhgoaDnHwGVh92WcpDw4wKQXDADiepwkWvTjYG",
  "key11": "2da6wvUbyJjQN7RAzKAkqm6FaumyjeQj6dSnuxKqyFeny5F12MCATnhp1jDVL6qQuasCZN1dPC332THVBoQkxnVs",
  "key12": "2inAU3FcZqF7TbQcmKKTiA35Vepu4ChDjFYNkM9zzFHTs79xxjDzjZsbVifCXTFVSRV99PLSK6Vou38vJh31ViXP",
  "key13": "3CF3mTrtiqaqhCjfZZzM6U6xznnvNEVeeHnDEfKpFmxMZbp4Tc5PPoChi9DSgvMshiVGfzYAhFPtgtn9CdzmCWfe",
  "key14": "2oDyHWGQBMPJ5jHEE8uDMFq8y4orEMv8fGEb2fDRJoWYsbC1ukd3pt7fkN4fVjYkvPMdyrf16cLDPxqc5Pq7hbn2",
  "key15": "56RedAFaWQMarVtHwVWNp4caN4KqCkayVGRypUgh9YB9FFR77f6UnBFSEmjKeoUZBJuSR7mLZNyQNgYR9z1oAjFB",
  "key16": "5g2Uv4Jq4HE6Jy4SB3zt9RQ9MqyX8by6tbAtPA4M2jS8bbHZghQUAJ8zXTNQYSMRWCcNxDstqo7WQg2WCLZSDi7m",
  "key17": "3u3hAujpmBWUSR7c6QottDaKB4oc8BWsfSsQ85gG8cctT8YQmdyc7LN9BARhqjyqkfUBSULcf2GmbT2Yy7PbcpZY",
  "key18": "3AD7LN4s9KRgRy1Eb9gW3aN49TZskEDhRRQ5NFPWR1se92jMM5tVN5Aw1bJqiTLjsGhPAYgMovA1WL8UrGwnY9xw",
  "key19": "46oVHUxtLvqmiS88gafDS4FRbs7Bh1D6EZk8A9K6HzRG4MJUpvfdkLizmnh7x4GGPLP9EB27DWKPgB3nFCireNuc",
  "key20": "3bMfRB1JdXeZCUk75uDzqqRNhW6skU4r1usy183jHy9hEByT4725HhKuhhAyeWRbgM2CotPTRTfkXq68B5cDQTfV",
  "key21": "3KeMXy56KQcWBVCDys7uiohq8feNN5EHKyyGYXzU6ihezJ5BfVdbz9NvAAxBRak6WzoHr2yMcp8UhL23WwPbniyp",
  "key22": "mqPrQiTz25ZL2NTsneoyjT9RfCoJjAXpTRMn3TDrH5wPRBb3S9qkNAq1UXNWs6pf1kcZaHxm6puheLZ1ZqZFo4n",
  "key23": "67QZSYthK5MsmYzSFY2RSzPSz17ZaPLMyt1dtnkGspmn9wjHDEbyCGtYQdCndyRP1JH684ygW7fyC8DtbfQPjdnE",
  "key24": "4gQKgsqpjtNFWjRJq6yUTqvGxVEEEkDjg3JcNGVM36stSkwiaNQ1ACy5vmTmQWqQtsCXSEBSuhUqs5PL2662CFHS",
  "key25": "23zMWYyFLenbXLiPqsJRxYnbMBBTFhFLiNoCdU5HrkjvjLL5hN2udgD5LFsrVTvxZJ4MSVznhGWg8wVako2dGuma",
  "key26": "5ZRzeK2iDdcivuEJGwwLZLBrH4bbGzf26dxwgSDLKNsohRyKw5saPwDxcPxiHSptjczk2JerjcEbRyCSJ5tAYgPP",
  "key27": "FZPK1urTd2NPfmiuUjVv1YMzkKEX9MVGoc8nYDMnUiwoz3wYTSgxVaYt1hmn5dkaWMU6ky6r4XjAWBwYNrALhNu",
  "key28": "4UmVf8M5AFmdNUTGfKkP6Jf2zXkcHFuU5ZW4s456SzZ8NnCMzCJJBBYnPb3APzGBf6FyVjWz971GXudw7hM5CtgL"
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
