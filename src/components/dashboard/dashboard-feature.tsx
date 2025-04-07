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
    "491GfBr2cYSsXmLECPnnR8XsDLoRiJAqFTjLJXps8p9Z7MjAoGicXk3uTba4gcJM3he8JDhnkPfq8Z7yK1jm3inN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42S6BvzC7R4ykibEVzhrP9d8x1VLERRq6yrkQcGrbawjKPZTfnD2HhMohBPiC3PrLnacmra2zfpHvRToFAmnrFat",
  "key1": "2zwXazkroUAZ4zcbWzuucwC8vbwjRUecTvUyAMPwaWgsbxAG1cNSXW9DRiyRzFrys4ktqFVsVqy7np65MYiVYTiw",
  "key2": "nbZMEFWE7j66bbrGRz3SMsMNdXu7buTUGbvUNS7MVaVnU1AY5kAxvnK3c7gAEL3FCxsG7h1XNEWyStJzE3wMgSi",
  "key3": "4K7TLBLEkg1YcGeBCiYoQui3Z2vXAXh4LjmtUaMidV99eRSqZ3vxjYFgMGewWmUDxBAQMVLSDyUBVEB3fT29mqd8",
  "key4": "38w39E4n7BfYspqfjHwrxQbWq74jF51KFL3ZYiLK4uGKVc3Eze9tJJNoBxbCuWiWJJNBydEazVhnuUrVMig22vva",
  "key5": "2nWXapYtDN9NnjJ1ugiJHNDn8gb4JhY7LknXnLgmZ4ejsiyvgBw4kmxBk7WimpKwp55ki7cBBVexZCbfLfNsM6tB",
  "key6": "4LuX7guSz7H4K3DyXNUxxjowzPqJDpJTXVZ5HL7z1Mrs2KneNtTJcfRjcuMd1bQmRD9oqSZkS1BwFyBq7qeBD9pS",
  "key7": "5w7tfZgURXZxmBsd1VANdvRWurPJQYqJXbwN8u3AAQBbDxhDuoMMLB8YXbBLj5dtRyJJyUV7xSYQcgoKNGRcGEAi",
  "key8": "66D3aSZ4Q6rPT2uRT4RyeXfV9tFoL24692CDH9a7i6q7B4feogTt4tFo6Vp4qRMnnbPvucG7qR8RWNZMWkrALJxo",
  "key9": "fC7e96kxpuKZWgiPwkGUZmtysN9LvrXvEjwbsT3U3SQz2zBjTJxDrKTPJ7kHGhhxaRZEHU5hykLYExDoGuByKqD",
  "key10": "5Mg381y2EFpfcZ21YZnUNZVyhZ7BsnjvPKmJtN8dTgWeKgyWSUeZ3rUDba55HJKv8fScMvw7qN344RLx8YfZZFtN",
  "key11": "499SfGR9Q2gTHgRaUaVhcyq4bH3wGcuuhTBNikrRAHqNNLqqL4GmNDrTNzp9BqMsfTvSsXSkfxPjTANjCnfQ8PYG",
  "key12": "3D3rG3iBPN9DSNhy7NxRrUEXmRHE8fwQcSk6qyUpTAWskzfqBzAFMGGQixWQKNLDqEhD8m3Nk2XSriD9KXz7Sn5f",
  "key13": "3tpShmWtyXPW23bnu8QyskAtaNQJKHuh32HDY3mhsoiUuacLga1qrDkYTzXx9ZD6m7mrH6oL8zoiNxA21KiW3oLY",
  "key14": "64RS3dKRAVGEb3Dy1jTsna2E4gTqasGwp3w5atg6JFn1LuYECztCdxmBw2QrndvX2UD9y1omsypVXZSCA47T9Lxz",
  "key15": "aiPfp8ZF5t1VhLPFq9Gb8HRq5EFFvtPj1SnSx8dY34BuyhhtvSLC5Cyqg5YrPogcWmnqZ5b2irUgW1V9xJK1pZx",
  "key16": "JNg4PwbKoZtJWpHitdv7aXJ5jUSibPcQhZPMa2HUXoH1sFLDMBA2BDMGZm2uv7SZ4k5z69vtcJkWqMjZDXzYQ7A",
  "key17": "2D1xeRf1QXnor8zbsGCJh3KJwkg1TYmqydKaCQPGLmFSbNVdFfPkJ819TuiGGCpNTJvTH3fTxFGiGZkV9DRBTv9f",
  "key18": "s6HCdbvKk5Dw64rTtpdMcrYKehDJeinCmvFRDHiK6UQEptJ7Je1BYFHmk8xJpsauT7pLs5rYFvgeCdKwr35B3Pz",
  "key19": "94Sc6bc56zZJ8JEPJjdmLNrecjMAu7wG6RgMqnMSuycGLLJKzPCYGj1wPWaJVHknkmxZbYXtpDHaHbk9SapQQF9",
  "key20": "5YTkcy38iqXHevUBvwvTLz5tvxmNKSVjRFtaR3a2SG22YmHmiacdyNtdkuenQLLwsvbEjzkDB1PJEGQLLqgjEFHM",
  "key21": "4J4MxWhFSdCJfTcP5KDRnGuoF9ViwLHpyQFsfwHhuFbhTUFoKWkFrHpMR4niws6x1MgSTEBA7pQ1agYMXVKqDWK7",
  "key22": "3YPzM2hAeicgMYvkNrx6wYF7nE2z5moPUfLsFq2Y3B6C4Nk66Wt1NxiwwK8bCeNUNGqiEcd3HCiMv3aAn551YL5P",
  "key23": "4FwBhB99WqBdNHD59xfr3NitTQ4nDV3GevtTfSsBpwUBpDtm1BYi24Ysutj22QDfgdePc4mLDdNsyqsK7vKR9cP4",
  "key24": "5o677PxDzM6CwEA3rxdgDwomEpZiLGEhnGL5Cnxiym9TwivwFLfYXZgeFVvqfj3KLgm4b5oM9u4PxKoFZUJCpr9h",
  "key25": "5SEQ5aGPx8HD25QcHWEVqw6hUNduWEJBEirr6tcbM269nopmf4j575vSKwqrxc4FFB6uGVB13osYLAQtD3Barrr1",
  "key26": "3dB3GNYYutToUPAYU5t6bnXq9XasrC7NywTjzZxeAjBNGQWZwgpqGeLCp88zJPvDyuYRJ3GJtyrhTyG9KpkbvoHJ",
  "key27": "RiP8ecNeuEBh6FmhQrPe2WdCY1Z5AeBtMHdSoFfzQuDMTQ1P3CZMY5T5SsiBdKNxbSv71eQSFsv2j5LqkXhEzRL",
  "key28": "3KA3CVX7vWseKMvbfCqL8qsQ6nUN8mzRk1M6ju5KvCXxbhQsHSPfcsSMsqdtCsCVPZcWMMegm6GfLTE3yNj9y829",
  "key29": "27yAgBWhi6GZNAMrPnKDhBwyjoy99fuFa7CKaUtfa34WB6XvSAtb9ox9Ha2TjJXSBkKa8coUSbhbMX6RLHuvyC92",
  "key30": "4aWkV3yVm44SiBbd3ugvaFbn62oXLSVp6S5WhVJTTACsd9qfdt3BGr9cVWfvBVV4N5qLGAFJogT3dEr2aSYhLWBf",
  "key31": "KpYMSpPWi5n6HwWsVvQmHTBSF8BVYuFnRu6cWod94WhVCrwzeiZRLmHSu5DsG3FnELGK6Ty6ThB88bbNwLQFz9K",
  "key32": "5LmW3sLuhAgMEhsUExeXCi6qzb5hZJkRhujTqMBLs432nG8Ux5FsE11GFZXgCLpgcLhHdhreAfD86Spf8b3VbX6K",
  "key33": "5GW3jZMT6iYpnGGWHXVJPwkdmZdaxraSCy8Hbs51GD6bxK4iG7abdygC2tRuKwLfpwHYpaFTdLQqzitTmwL2fttV",
  "key34": "5y525qKke76pAbesg5Sx1qiz3jTNPcVQ3ggy3euuZzRZ9AArMTG94j2PrR2jtMhRFQFFUe3LgkbkwTMQoDY6Q9FC",
  "key35": "4LNSipWTcema7y1PcemnLredTV36KNzdfS73THCjVWeiHBfskQ5JAb4fdVaQJi78JpKs4iYWtdWG4rf7beoKxjdm",
  "key36": "3FGkx8EMXX6SwJ2BSyeu4Vjk23AouqtXn7WqDDSp1sz4icBV7tXHruSDBYEenoVuyNVbj3T8GYcoRaTsNxWA4fcm",
  "key37": "66fb1shsegEFjGTp9FGFme4bF8hTBw76STmeBPmZYsizva4gLtyBS2rEzpaFY1zdkpDrXYrSwUriSutS6yQX9mXe",
  "key38": "4K1d9rVmYuxEoe5LrF7SeDU4Btry1omSzAAjKAx7agiFHj2DnKeRmFd39kyEi5nJ1fyBRSSv4uSoj4fFcakHW3KU",
  "key39": "3gTDShb83JWZ88DwmkuLrJrz8GiktJC8VmEQktGRuADSrSLnPKBD1FQPSQS9CZJoxRD1qrgABXHQ1phDZixjbR9L",
  "key40": "5MUSX3MPht88eqDxJtca4YXtr46GQyyuP8GhHLGF6ntNrBvbbB97Fy7qpXUaAdpgCaqwhArmR5AX4ZhpTMGWD6fa",
  "key41": "3GPtefMJHd4aBwrr1o3QU58HVV5YzHY3ZBwn2WhCFhJz8rdKxQhXq4KUtFQnAus3NmvcTQ7iNAsXqnAc7YnNyh7i",
  "key42": "4Hp9Rrq4dQP1DmrEs2fD8cYRGgQCDyya8pkCwTf2jLsxUcR6N1f39NqRAyEyFrY3a4L5QWXagwpU38RA3giV5Zcv",
  "key43": "35Eu786fX5tAghLC53PruDsNQzyc6cYRwCvYvtnWisTAqiVeCQdvcLs7U1i3XPoUu6rkpwHUS6mJkeypD6v8Jzca",
  "key44": "3W2wu2KyQ6a522Q5XnVYxQ5ViZmB1P38Wvvoe7W3V1xotKhUd6ThQYT6kW9ewx7ndGUqBS1zjnpEUBAaV9mBtr74",
  "key45": "2XGHcdArm6M2CxAZLD6Zkqskp4H5B6qRYTygyrhygVpAekqApiweTHy1cPKZNY12EKKmkYoX6WYq37918BnpGJuR",
  "key46": "2PQCyhKiZ7zkbYoQzU8YiK6b9cDtWXQvoPueJutB5DqBP2QSXnqJWMur1MA2ae9umrP1naNmMLVFyqJ8CgxwXysr",
  "key47": "5r3kbFa9M4Z98BJBrRiubhvJpCQeCu7L55XTZ3RFuZS3qaXcuCWirR7Q9sPWZJjNWa1rYVFEGhWK2HGfqQwwe4ro"
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
