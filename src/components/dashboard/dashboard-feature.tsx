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
    "38xkxNBLVhWDNABe1eRU7dTDGuLU7bRcAErAbgxHPoBgHuJgJnEGALBzyYkMDyja4LN7uCN2sTTbQ2cbNQoSjkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i2RXgkGgxVCCbhTNMZkp4o4rU5LVdwNJxCJA1UmBrWjnZQpMaURS4ZFMy2kwqkS4rpenA53meE1DXmSdY5iER3m",
  "key1": "2aDZ9AZbHRwrW4wihEswG7S3HecnaxjdZhHftG64Gw7sHxu9v8SeA2P9CejzbhyhcYuGJFe6MySxexC9BJmM1zet",
  "key2": "ZSmNmRG2RFTZo5cVZ1JGZinoWZBkGN8yDg1dn2ECxPZ16eA1RBiX5eKaaArPYHBYDPAs8rXB6Sbwf24VDqHsdLt",
  "key3": "4ijy8B63p4q1znk8SkdrFsMDpq9npiEUymL56xhYjNGtgTR4qT2V342migEG2Qsaq7MdEabTvwvKGH6Xd3ZJPaSm",
  "key4": "2Qr2rbBxuVpLs4GUQPfChyWbjEAojFj87QaKid5RypFdnXNUtmuDbDixjZdaBHQsNwLw3YEjyh43xj9J8T8NG13",
  "key5": "3LoHZtLmNETaocPJnVZGoERFQ9VFHSUfMRS5o4cbKKGW8bzTyDSNwNn5ZFwtNdND1qLM4tnvHckqAdzj9xLGYRJC",
  "key6": "2X7khBwuvav1DZBxnVyDZRV2wW58PW2VeChpwAoTXUxW5Vzn2t426DbqrERUWY1YfBSRMSa9FpT9VxTqj6bTqwqQ",
  "key7": "3Yz7rWPoSFPNuxeJdwrF4xPGiNqa1wbWWipfRKkf7Qyj54KF3esPhSVLdUDUnVGnqV7bpc9ZE7JZubuGhgNyPDRX",
  "key8": "4fn9aEGQjRdRuqAhCaWKosbsnsyLVsCLFzvm6n85SDfcYNSAFbzVHoeEapSnRhSdwdVcWcz7uBKZNpz2cGLZwepL",
  "key9": "5YxdZ73CWMffbZjsqP4VfxaNeN1a5yg9UjvnRaQaMJFjoYoMYmC4eRZXtwEaGvdeXKzs95NBN7cpwcM1aUKzR4Tp",
  "key10": "3EdUpwri6GdkZLAHNSfbvGDx4NY3qELHVsA6gxN5bHLeuowQcg1QgXZ4qSjqotjRyeiKE1Movspu5v6WLJWfZDuA",
  "key11": "2wozHpx86XcmmKHGpgqk8g3EVYrMBNMohgKLFQtiVbqoYUFWzBGV6X5WrF7wd3ozz5uJTubhJU6N8v5c8g3BWVWv",
  "key12": "59tSgasdWXhrrNqHsG9retiGdHs9165PDk6EN1t3BNYzWHsvEsGfWeorapV5USdMzSxtySwCgKyzstY9Pd1hdLZm",
  "key13": "SGSFfdTXGrEb3NM8RqMsRr1ARsKf1EnD5pVV6cb5kMH7cxTwL9Annh3zsP4LWxzKyPVjnRt1yn7CHozFotaXVpi",
  "key14": "34Lod2yCFa5WNhiQzhcMTVNfcDKYVRRZ8FGzVaAj53hZpzCLadsmbxa2Kovx1CFfp5QjhrnZiTihEK1t5xT23NXx",
  "key15": "3zVM9LqcVsTg763aAZzoTh2cPSyF3SBtD9jhbZdssqB2T4FYRm7iDULzmjgVYHdam7etDpiDWQQEFFfKxTkTgsJ5",
  "key16": "2h1BfmeoYBFV9VH4i7axrRrgPQNmqq8FTE2GmiUgz4BYwsJTYHHqWmAuRj2EcAwxydQdtJcCAHMPdSHfxCgDKNwV",
  "key17": "469SFn6kdCMLDkipsGG3yMMJjPfPLzfRKJgtsp9hbJXN5hQ9DdRpi4aB7gMvjGjMbhoTZuCdno3xmKsSt41RHmGD",
  "key18": "54DuVwbtmJj2xS9LrbdcCkZFQJiK6GiPmrqa8tZntRY8wPhNU85CyZBPTDcXew9y1apxBzv4LKTyBeHQrKUDuXoN",
  "key19": "578gGnZeyg4WffSuwn92J1pa53iDtvAXRMCjLz6DeWxe5rfB4aYbuLJ3iDxzxuq6LgEMbmEwNoqULNoFvQwsESUd",
  "key20": "SdNbkJn1Ardgkb3b4jNJETnCR7vhPtBup4hAdqJBVngQmYRX3Rs9XaovaLtV54hJLnHR3SmM15U4wwK9GKyTqRK",
  "key21": "54FH2AXvcZJ7rKUPVKKxGi5ojbZKfXRaSuRJUFFd4mJ9PosVthwnnZmJigAqDfZxy7DtqTzeTQSAMFuZLqnfPf4U",
  "key22": "5Ti6e6VicqSAGLJn4oEGfFkwZgj3zgxPdKhHEnFhJszCKxhgG1trxT4rqsJyYyrrEtFvbo7aZWL4ReKYDpuaHyex",
  "key23": "2yzZ2BF3wTU8TLnaEW5jtBXWUR5mBxZeWgrBy1SpbJ5Vk2Q9DcvSTN3nXvSczLSXDqrfxSmeZ7GrQnjBtQhQCHcG",
  "key24": "4s79d7e1m7suzKRvuN3ZDw2Rw8wq8SfQTmfEYzprFe6ZiEBPKvSSUgLbzjkS6ik3hVFgB34VDSgEcoq3TF9UDwp8",
  "key25": "43iedBFCjEdqJY44sE7XLN32iVKTwGUvX7uG1yXoz1EUHDJrQ9ZWfLMy7DzV68Z388cRGzRpHudGJ29H4oLz8hFm",
  "key26": "aWHiYdSD8uDSCtefh8RsgeSEqXYFZzBtMP8rKRBQz4LhVw9TdE1V2Y2FZnkauraZgvNax3jQ1Wgw81odxgu69Tz",
  "key27": "57vFi2HntmUYNLcYSvdUpzusS7khpu5UNT1cu4Qpd6Q1N5FyNKDhZMQMQHtH9v9P59bYhvYNEykn3tt2rAxFw6qe",
  "key28": "zaq3WXmz64UDxMb2dN876mcsfwRcbGDXiqzqTtL8pCReYQS6Yj1TwaSDM1XTjte3ZN4P87wEgvLcFA6TGV59yps",
  "key29": "2vScZ7nmGfy2ZsN77uW4MKKeScgzXkWNkdexAXZenaXR1LbYbpCb4ZSWsH328ssd82XAXUjLS57hfoStgqiCE6kF",
  "key30": "UGYb5Vhkjtv54hUZiWWkYiRGCGxKRzgVRufFZfPBchVKhTzCWy6uR8idLdBCfBodEg72g37htzipuuzHPEmdr2k",
  "key31": "5SKerN6Zwpnz431nyrFHwFutKpHbCR9xTNSYojzErMnWkBr2ff7tdGDtENMCr4qnDwYEVwVAPNiCTh4ssbRfZADF",
  "key32": "26V2CiLfbDtAHoSycTnLPNwbsXhjiLYJEL6VRczMA2w6saDFLtuGVWnyCyWkwc4BVoXA9YPuztK4QAo228eDwmf5",
  "key33": "RCgvApteBYhsaVfhXkXZbR8F6FvhqVHhB3Sgw6tR8TUBxWxSWyQreBYkxx9A8UWLxGbuVg6F6DCLJukZcLMqU2Q",
  "key34": "Wp5PREoaYGwHYvRf67CfStRGnWDLcjZ82fCzK726WdA7iDNGEv5hgp3nNv6JreLm4dqSMRdrZXV7U7DJ2gEsPsN",
  "key35": "48kULDAA7z84R6GHGqw7P1yfTPpTvDRGapphUwyzp6MArU2Bou3MDEAFKbyTQU57ukSecMi3HN115t6NG1x6nSQo",
  "key36": "4YG85JyT73K8FziMAK6FKfovo3mqpxUktVxiqowGzDfMTTbM9iEuqXTTEhTryrv6m4v6gsnNcPuEM5TE3AXhdufw",
  "key37": "3WQg8fLtznfn2u1TwaSUHFrNqfsPtdz79EBRBUV6oUq3maShruKifz4Dof1pwZS3uKFUa5wVce8Cm8ERqkPeLQVV",
  "key38": "2JgZ9nfTnEHT8GTb7HitH6F126M2knQEfVimxhWJ4fmsZPmKJYNV5VYGP3nor7MR2PQ6S4L6J9pJ85V4PBLzm6VW",
  "key39": "3mTfTrj9vA4X5A4eQx8z54P2AZqxWTunLzPcaFux3vmHvEPXbmEgCmeziKNKoymAaRTmjFVAUupVTZdaFd1BzVzX",
  "key40": "3kPpeS7pTVd142jkeSKfDuH5ZSE7K7ycwpka899cpsK7miLrwPyJiVFaWQcyGAKQg7r3e59LLf8YkYnpGuWbvRa8",
  "key41": "x5xkQWb8aLo1PuzXVgUxKmjETxP2PLaxJSmxSTV2RzkxqwJEfArBErDNVQFGREtwXLcoiPpxKKt9BUcHSit3U51",
  "key42": "5iA6wAydyhYKjs8yWLpmdCwW3WJV1yYQoPQ3xkUjtTykz4hiGWev17oEuzbfwCzzWpdsyMFjyuxLLtqfJx5XYw8R",
  "key43": "2RRTYvCJSY97587YzbQ1vrdketzfKPBaTu4kAMzHryMMeEy2pERN9hrHcZkGx3a8h3jxtaoJDjYrugU5hDDJntHq",
  "key44": "4wr5agkTpWizZ4eMF29VLij6ftKFBch1P4R9tNntVpAiGNYDNsUuC9or6NUiS5vPTNKWvULzeJxCBp9hui1uTWj4",
  "key45": "4Fw3v2xFT7D425Yri6cxeNFfXQt4YAccQpcXBJyo4Q1wrMSmQve2k11FnaVnV98Lb5aLg2s4bodxhWhonqvvsgWF"
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
