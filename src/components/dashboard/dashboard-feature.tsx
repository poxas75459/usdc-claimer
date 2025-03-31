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
    "615gjU8LA5FBL3EGxoBSCXToF9LC5jMyfRwkrNkQjm36wJSf6d6qLosHGWD5S9CgKM7NBhQJ6JzmJ85vURoVWjv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EPvKdcFFcStiuQJ8aifBwTVw5u7Kfixq7vJFdRv2Jtgo2YtKrmoN9ePcWJ2N8UsB6f9pxdYmTM8vLMZBAKHH95X",
  "key1": "4x5nFcjnKKpUT6XyrYhB41JZ6UAzcQUqwNSF8gR9Ca29FrU5qi9ZRCqgcNLN2sf28zwi6S37ZCzN5iyuaFuPSZi7",
  "key2": "2iWMvgY4HMWACAHoxRfRYYazbVd4pcmMP1QVV16596USpJ1cQWzD5JsQtsQz86ZYMQoUzixFHtTszRDKuJuHzFs",
  "key3": "274VsVh1onP1rTZJorGr3dLeNdYNHk1Vbe3GE2wK1Zt3EdCXB3w4bo2iutYjCNtLXNepQYu2Ks4YfiBTFxY93ywX",
  "key4": "rof6KCv8ttGjdpmex33V1YCyyudniELwi7FhYF3WC49dsuPEUN3bTHHvgdFS9rBY9mbk4MurTMdExHvgGzs7caE",
  "key5": "4dsGNZbXDxjvcNqiRmDustmDVdraWuU3t4t5Vuaq23nV59LmwwWmMiTp1eGfyhZpcgwaAsQhNsaukNt1eLXbGhBe",
  "key6": "5a3z7UhKiRKVx42mGPPNVHCfqUV4e5ALA9532AMAV4QgoaZBJi3CGRwJGBg35YNvCkGhjnjhfRVqAzy594fdYpPi",
  "key7": "XBnqC8sFPwpdQ8eia7WUGq9ANEmbi3wB5gbdGTjDGUMzhcavss8ogcgQ2chQ6ESu5bZ2DK8Tp6j9W4EAXobP7iF",
  "key8": "2QJ8YcMPP9tvKxDM2ekoQeqwniNFhZ2WBQasvBfTbQmZJcJzbfCxTJ4yxtodoBYabFth2CJovgSnx2rByLBGxCKS",
  "key9": "43ShBxWfDJXNt5mLhmS3DV5Cb6P37ScefJZnkAeyYPZ4NMDve9mutoWHNr4vwmAqqDwRFucPWB7wiB2W9A1Q8aob",
  "key10": "5Fo1X8SCkujKNsEDpk2MK2MEGV5Vy9hfHJiQowwLnzWoxXcNpPaAwgaFhGrRkzN5U313Ju8nzVdgTfVFZ4dsCLyj",
  "key11": "5SiKhLod2kMv6S4J9sp3NdVdsdYf4T7roLnHxtibg8izJEV8mmZJHypZLLXaQXYkbSEkBDhMqXkzWbTe5xZxw2hm",
  "key12": "ttoNDs9y9qKgkk4TexEWaHS5DcueBaFkpE4HQ2BA24zPu76n3REKkTtnoHmYQCFGp1FB6X8ocMMQgM2cfP8jL2p",
  "key13": "4ZRCMxr71CkCrz4XbofM6n8niSTALu5oS96Rw21NxxqSbCaV8upaVq85XNNTCBFb21mw7oMSN2szygNR3eckXMX3",
  "key14": "4N6MHY3pBwyR2bjhGib8dqwmGKNGJgQGBV1hBpDfBqEhZsk9aqimqFZopjbxA6VzAwhiUCCWSy5CYRFfbXS5a9Cg",
  "key15": "2TqdcWxk6jr1cvbP17dbXc93fWWu6n2mCbYZE5NfKgAzbQzXajFminLSXLZHCi6Yi5n13nhStpTJqADyFs5d9gWW",
  "key16": "3MyiU34twy7tVgwYT2y61wnoUZSF7WCtia9FuGY34Wyz9dj2GFchXMYCfYkRoTy4ZpWD9Hmq1gm4YYoGerNEvoV1",
  "key17": "2GnP7PyUtgjAC3MBnebqPugr4Hr4bKetBTJ83Fnhd66JnWgjnikRjsjwLqLXzdg4mV4oQ3PpAsbNZGpgt4kQVGyN",
  "key18": "2ojuAFM4BpJvfvDStSumUi6nrRK9CvZ5AavDEyu7NuVhEk7iLjMM2BmPZDqBc7H3EdMhzaxVuYToseSRDFbkdAd1",
  "key19": "NFjtkdpBwsxAKEDbHR891WbiMgVg3uvVzmTRVrzxnzbRZk6FK1C3RD9TtAABiAGrf1eSQqwHvsM1cakyNXMM8rL",
  "key20": "5zZdNWA6LqDxXdwBNcv99Suhr4ot8k3Rm6T4jrQcYggAgvb32HXJXBrCXhEGK45PufzYnhMjxDt8GkfzL5Rt6VwQ",
  "key21": "4wNb3bP34euDHJGGFTDikxrmTnxNbPTDBp2g5jodFWDyi3VH8KAjr2MQPSmrRMTXCtPzVQHdtsg9QyKRpfXfgSb",
  "key22": "2Mrf5y9NgAK3fBmv6EcxkEYCE3TnPftVv2ZeqcYCWyjXmKNgwv2SkcA9ra9GWYtEFBCXJ85suTWCoL3qeWsx5hwH",
  "key23": "4kX1tc45WzsFRAF7gJbcwpMcNMNfUcspKn4WMP9rGiXQCt8CS8ETqTvkBkwt2oWhC9rjxJ5Cm2KnMc2oBbLmiGaw",
  "key24": "4rh5sS3BZhd2bA9YcixWX9ACeLzSHZ7QAThD9VjGymsek1V7sfGQa1p1cvmGLJJvGtJSQZzciD848D8Vox3bUia6",
  "key25": "4EmyhPdhay28JYCu8jDYrDwfyju2hy16RjCBdYe5Afpw8WmaSxYRwdaZC7ST6HjWbSAK4X9NMRV9kbGSheBh2pWC",
  "key26": "5euT9AKAuYGpL3US82UJyxLAYMxgMrG3f4Db8XD98rd19ABLpixqRq98bjGCaMCZ8WCxgM526LLakX5j122PKEKj",
  "key27": "4WjTn2VRVj6J6fhQ5uTUKtffU9BiTc7n6heWaUDjWR3gvfmq7BxkQtBP71wnajj7YR2rwgYVWncDPCtnrmpG79x6",
  "key28": "3XFiHEYSnsdv2mb6zzsMsYfAERAeCuBqmPstNWDGQQQS9Y66oyU82Fon6LBe2LApLC4khNgBCK5TeZHzKu4BtMXm"
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
