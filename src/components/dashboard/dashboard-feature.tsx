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
    "yD7rVec8cvi9VhFzqRxKUKbFnNfEaY5b9Lc3GGxUM8bu7KDVjahzYGBrQ6DAEWnNNPXjWoYCsHmZwKVEZyjgwMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DdvjPqmKVMgo6tV9iPXvgYKYNmaCxQCvdqrvQXqDGAf8cTpGwkf1H13ePBgt23NRaqKUPBT3msoE6T9jJ4AFbKc",
  "key1": "5TeRoEeEZysaMQ8HcTBS437yJUWYDV9t2LYFcPQZKR2FVLn65zBhYTak8ypxNZYjcsahyBCRp2cbpFE6L2PLfJ3D",
  "key2": "4ubCSCbDpqHH2GhcaxpWWtz7pZEctL6Zbqx2oBoogDX1QEnSBkM18v8fxSNw2X4ZpzmN5EqpxNqJE8ATrTP37AVK",
  "key3": "47ANHhMTQmeGz6FZEorvs2Kk4Wr5o3Er2bYtrgMrtzqe22tnE9AsFh8JS6p3UigLv5nizUEZ3ymmSBbxZCFRy2eT",
  "key4": "3Fp3uehf6koZwswKZjfwmPJdMKgkXQqCELQBFurLKs1Z9WwXBLoFNY2DtizAMR8seUfVXBb23FRogEyUtj7RpfUs",
  "key5": "s3yJvw56i9C5PRHGWikNemAL5GmpWmf9gTWKWRu8hu1vmz2yuniF8CGbiLAxxeQbAT2eZvrXfgxHNDrad7qvvj1",
  "key6": "2bBCnZy8HtUfSaemc2HpFiaf6xhYgLPQiALzcR8gNyN9LPQFq8sddDfVFxi4uQ5wgSbxXtUX4M4GJXQsjHFLCTym",
  "key7": "5FF9vPf2oj3yjfKRKx1JCF8RDUEPgK9UjhE95wytPgoeYJbxgAqqb3b8BX9XbQAFmZYsGgNhP25nwaz7pB2CjvHz",
  "key8": "NgkR9oYSD5oqsQfWAR28KaMCzNPEbfDyt5ZM5ByU3ri5TCGQbuqFvFHXcWiph84egC1aY3DUJfMrijBNiP9n5c2",
  "key9": "2cbGfBLhhHofVB6P1FPqZYwWVwq78jeMQUat4vnDiYZkkx9RNHSsmXmaagbExEvMxKcbQNnNYkCLT6pN7NEtMEc8",
  "key10": "3K4HMtJ7XjanAkkTU7toAAWFxWkbPVfDqDKXo73HEBopkderSz3skQWt3YFqSb3CGjDqEfkr9UaAVdEG8bxH7z6s",
  "key11": "3Zawb1T7wA5J4HPg6d44PPSKtBrz24wbwy3nhGivacHXkZKP2FntaaZvKeFHJ1Hr9k1PggUv8r6t8XmiHk17SCkG",
  "key12": "3UvnP5XQSmgtin9dCNetDW2iDduU9pCSpjFVbxBxEjkHGwPtzzeUSBVvXoaarogSkr1tnntWQnmohzWMcke492XP",
  "key13": "3ahsD6F1S3SKYUG9BTppHpLD7BktKzVBSuzPkgnmNhj7TaqTnR1Eef6HNBXUCQ8hogufYKryAi4yLXqcxGGrTjbb",
  "key14": "4kFVVCaa8epQmcs7Y5imRyWZdueThkypRDyBxCtisuwPdJkSn2xjaRhruFXFcB5dLFrFRPdxbeTV4KfTiUAZD9dk",
  "key15": "2QQdi3KuyYVzWcpeJtQ2zSzxvqjmohbB8CNQEGpQLR3z69xWHohutpqr6j8eGt1sfu985CLauSBETAj72TuV8wMo",
  "key16": "4vP9gLTMSMC7VsqwFwvXTNEtVtEfR1xbqP7G6x1izY44EB7JK9mVVHFTtRNuHEoX7Hrsgr9GWweHcv3MCM8x8dNz",
  "key17": "pgoC2iBKwdPUZa11QoMzr5bvA1vgWzdVa9ycYfQjqQ2zjF1MX7TbMhfzjYwX4P48hXU6j5HwK7a22qT7sU32FyD",
  "key18": "3SazATzgZJP2H4iz1SLoURnh41WCA1558t7fSLirXWA8zoHyKbYM5CoJtqtVY61gMZLL3taXQRQ7uj2ebXyMfXAw",
  "key19": "3fU9rHCM3RsuK6ijjbcmFSj4cX7tT8SfrVftTgJKPNhtteUjN27eS9xCpwM7VxTFTXtBtcUHxxR6sMzMeSG2WoCe",
  "key20": "VvXqPifZLMTKxdiMLwkhz1PS77yrY2v5vyBauazzTXY3H46JLmdLtcWLnBN4eda6roscgR7iLLxQqTJ55VkKJSt",
  "key21": "5WdaTcEtWrDR7ryo8vWa978JpxgXDHi588EjtKWcWK1PcTqddaPTyZJjy22ppB1zBM2w1VjyzY2itZzEKTBoT9ff",
  "key22": "5ZTxSESmsVxQTxXJvMJCXQxQrG1q6JL3fSXGBFz7Xs5dzDhA6yvssW4QgHG2JigDZfssqWoa1dYi4fx3hq7keSzQ",
  "key23": "2CWjL2oZ1Detc9gaCe61jDeroyePrsKfbxcEUNDQqUjHqsuEZFnYaZXnZmDHgRNU6khoVGmeqWMTGnyRoBRkj2Bn",
  "key24": "46RvFUugJwmo6btksavFeS7FLmZi1on5FTYcxTx7R35KRf9GgRsKLpbhveLaeTCdfr57JQYxB4bpsGvu71LUAjtp",
  "key25": "qpHWGEgnZznoz1SfK1ecFzQKuaYzKpm7BUpb27sdx3fKZg5GFbUduYT1fuwgHFU3yCEPhHHraS32P3Fsajt1wYu",
  "key26": "3VqNaPWzSesvSXCzHVGHGRgy1KWz4xXzBjvkeSUb7dR6MeA7v32Eu65KHFEVXVi2Hq5XLhKmyBMiVyJpuuc47CKH",
  "key27": "27ZpVN3WwAf3xVH2NepU5su442n3b6XbeN1SBPEmsDbPCSY4Ugbrbv7Sfh6yNiyq8Qka8GuAFZRhaRfmaBHsubXV",
  "key28": "43GPxu128d9UP4gphzUJuLsAFMPbDvA8geWCguhzhErm6wf1FQc9s7PLYicsFrtCLCb6q69cmtubb7j7fnYLpyak",
  "key29": "2egZTgHCFF5v6SpMapkJYZ6AhhExNxvJP42kykZvx932j5VgmA8fkgQ6WeQHbzKvTPc6iqo2A6m5zfV6TgnNPLBn",
  "key30": "4ekndSGHWbBfukdGyUXVNenW23c1xKu2PHeJ9ztR8HDSCF7Ta53DMhomcJQVm1SmBx19N6GXippJnNgHsg39SNQe",
  "key31": "5sB8Vrn9j1CQMtSngSCgb7W7ZVNwkGChT4k8N6ahZNnoDiTRx9cNWUSTZ9d3WBssp118C7RsLoGM4M47p5o6auTe",
  "key32": "4buB7CUSGuRVZHmTnV8pWfRwDFus4M21Dq7yRqU44DPH5BrSrHuPYNYF7PTBS6Y1vBvm2ptZTvjCqtFjNwcMQGZo",
  "key33": "9QuEUnYnn5iYMd3TwNCybMJ5GHkF6YLMsiZb7q1ytSP1TvG2NyvsE1CUxM6wTBnvT8MXTLdqZSDJsVwAsJRJ6AB",
  "key34": "338s5UEYw9GNrewt18qJZKZ3i3U8gT4M593TkTLPaFwTUFXz6E28kjmSmozqLpjq7bv71xhQuGpRB9LfSJM1RY32"
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
