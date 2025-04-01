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
    "54DBuWFKpx1oYTm8QPAXaxcXFv6bbpnP2ADXDJ7a3APLP7imZnicoMbM4MsVA918WREu4QRdQxRhLTVm74oHkRN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NrPKejVB23163PEtze8xtPTGvfTgh6irk2AJfZ2hCpSFyqdZX5nKPjpURu1ZU7cXauYkBZDFdNpxaD1AERshoFF",
  "key1": "5yqPJGPyStMZF9PyDMQdFcRij2sSeqRjAVfpA2buhUwUzwwAJKGvQgsVVPZDqjEGZ7GRXXU3zk29L92u3RynzEth",
  "key2": "2FA1XJ7Bd3kHvGtgJn4MJf55DneyrwCCKervZrniZ1tvyBwzdCct3LdPMh5DR8F9PVU1ZEfiom3jux7PcwZrw2Zn",
  "key3": "2MTxUyF1guJzEUXW4WxQ4bRKyrBJnmkyuorQdq6kfDVBNRLJdmCEEUX1L97mNBoHgbkceys8JpS8iHmLi28c5ZyZ",
  "key4": "2YX6LVQKx8WDDvmxbzPX1wKiXSBexh2HEaeDXApxUukxFfJHWwyPVgUt5iCtd2mcV2ukT2kpj8SKAYZTZDgMQpRp",
  "key5": "4Z4BPs9T1ZwDSzwnpXT95Lt8VyXTBtqL4ZjqvDqDGr34DHrF3QqBCPCXV81RaxB5rqwXuPsUATf2jJJurSAWjFFL",
  "key6": "2kdKSaF6U8vgF9qqBUBPA2jLqoocfBTJfawdB32KENkAdfCnAW2m3rUcFp1yoAyC9vDMkRWvvsE4bV86oZncT2gF",
  "key7": "4cn6xUJFnmA1okJtMqDVr3RYnTa1Z5ssEr26YHDWfUXcSHND99poFnNnwY7e6deoXm9F4nukQgs3jRipVLDwhFdQ",
  "key8": "2BsewuUM2SUCbXbwZWXYNWoQLuXg2SSWdmQd7XLM4tnoTzJ2wrfQDKSAuYY43HWu3XzvZSUxU3rZMRnsPs4Asy3a",
  "key9": "5JzisA7mwiEaSBKLHPex7CGqv1ndTusfJiG4ezJHjLMZ76ZQHmFTQ9aKSpfNErxrixeZas38evodyDTD2vubXmL4",
  "key10": "4BA4Doe9R6ch7UeifbQyczuK9tveqeYFZ1qyGVAHrryNpDQRn9k9Js9awpQnto9kPtwECKmC7DnQKTEeJYckDGsf",
  "key11": "VhdRgSUJMj1oxJTfSq69EQrHAnQNSDaiXUfoQ4AKGJC5W7SeBfMY72v7eGoxmfgBBMReXkT5B27qAVnScUwKRJ6",
  "key12": "4gPjktfTkKwERVRkKP79txERAE8Bjb7ZsnFpYjKVa849bd31LDotsuFEdoo6vRU7oGW4vR45wNC5V2FYeSja15QT",
  "key13": "4gWRe4fvgkdYNXQZADQ9ak2d59zC7Yo1jgovyGQiD7FqGHFrYJRxj7SWPHnafUd56ymYdSHN5AtXEdKVqrKR64gU",
  "key14": "568WqgynRtECDZbtV57eDsgi3pVpRc2X37ad35e8dGjcGw2FdijutzYUYzVR1vqArjHP56twksRMxLKpEdaUtzZd",
  "key15": "2QYE2y3b5cjxUGqjAGjJHoxWPoB37vMSdrBSqpWssMpRb8Ysm5BCDSypMurtdQhE367U9YXr1pzGMBcCcB7bd9C5",
  "key16": "3mNjZ3fhzvAg96hqSQ14dTrUabSVajp9qTc3n9PaVpakyRmu7LHKXZbXW7uo3NZv2vqELeeXQf7jPEBNBCd9cxaz",
  "key17": "zSsCRJrB5eEkNGiqcsNXqBcG8Xaw1YtfEL3EAkFrHgmPXjw8iaFMvBBh1oh6avT9EvGVyCqe5L6R9G5ePC3niny",
  "key18": "uQ81XMe8HdzCWxdFibjZTYUJmb3PWuX8AWUfmyP9xr7pZsPNE5iZzQYtsas2VTR8nSEuHytu5vMdNonvqKNqoMe",
  "key19": "5f3JQuXoURznmgZYZCrK6Lin2otar7W6RZa2yezSMnnX12H2jhiKQBocGW34vejWXynNUDZrKPxrUoprD35NHckY",
  "key20": "5cXD9qRbgoqTAsMNHCkAZ1GeWGGUBLRzM476du3UxXPN6yL1VxxhygqBfVoz7VmQKpfWrVdJ8dfC2se7F1uThp3r",
  "key21": "2MWGS5YatuFbRiQiGtiL2QdBP7rNrYvfFbrWK7oRVFH2kxJFtAggwnLq2PXvBtwC4iA2vmgnzjhKdRCdPAWDyVso",
  "key22": "3XiCWVsdVuqBGayejjMFp14G5xRMYwW3BfM6aSMmCocZD13YwNSctpFA7jB6sTCJaAJEB7yczxqEnjF7Rmt2JeKW",
  "key23": "2tMMwTFpw6Mbm3TA8Jv3kQph8VxFkiWANJY6wsUdyReMSQ2QVm9QARXmeRjyLdXz5o5XZo1MqtHknF3SP8kxWxmN",
  "key24": "1nvTvG2svJP4LMnWuavPgD47G5XUfo8vaS9enAXchx2Xapjh76dn5ABAc9cECtj3tpG71mN5LddxcSnEUNY7jSR",
  "key25": "2DrBY4k25YzdhxWcz7uMTLgjXWsbYYafyBHivJCvWQ3cXjQyL5TLHbJqPFoNs4PcFvuy28D6oc9w57wpQBSqDZk3",
  "key26": "4KY7hPzquxMPioCau13uYthKz4fv6Q47DQAEuTQAKYTavSEYrniRyM8XfZB5vHuyobudWCa4APHWDzS5TK8Fz4jP",
  "key27": "vheYXb39CaEhXVy5NfC2MFhMPx8g7EV9EVFP85JEvE1Y9T1W9ShjxPQ2NfgxwDVgL5JgtrksFGq1Uy6ywjzaj4m",
  "key28": "3ezNWuu8UkZsxtaxMNHcW6gdEqfBVfgMAPnPmTvLTTUzFUKfYcdhpiiWMDtsF59VjTuiJxBNBjY3C2mANrDExLgV",
  "key29": "4KDc6N6RMs7gF7QQD6LBBxf7ur8k8xUGRBnWjkEHV7SXhBRgJacbXUEAuw7URSZFEapE2JnPFH3StiuDNmeDTzgc",
  "key30": "cdnn4jzDzZudsoQoSb5K2hKb8STLvEMkcTcqSJmBKSUTDd7SUQuZtDE1g4MqmCnp9wPdprXcWWL2tJZVPYg5PNq",
  "key31": "2t3VzMJRoVbJuFpseBxGD6vGpopNCfnvztAi9kCRLJbvRp1AXDwLkbYFrVGh59fuFwAsYHGawzxtsQbpFtqZpvoQ",
  "key32": "ciqgzU9kqctQj4UdJJrZKZzxBdHS1aS7XatJwVFWMWF9sDxUAdrThoicDQ8G2neqrPosmJKnC3vruQEvyQRkjrA",
  "key33": "4qafczUiBNQuFAFuhsedVJFAjDqQA6y2nD5mnndZyJT4pz23BTzAMNuwHLedovE3D44zJZ2DYPQNpogN6zdaeBfA",
  "key34": "4ASE2C8ghMymcqpccqZXf77oaYuL3EfSCcCQSKUDMQYNqhJmVbAJ2PJX44hZDF8jkeBV4UWSkwprQUJbubnoYzH6",
  "key35": "hmvXnXSv4hYmgtri4HGNgeR1eFTMExed6qwZoVsxSWhre6LK4hbntFzc3V7c6yfNUuZqeRnSqWVsFe1H2qwsbpg",
  "key36": "CPiZEjUvV2u8SWGG96cZvNhJ9FZyrA6aNFhBZBfzNSpUpW8SKkMvnauXbfKTV1X8tu8yb31UT8q7jKR5Njrm3L9",
  "key37": "T2Jst9yZMPji6N5TMAXxY2Ffhj4zXKe967MmyR2midVjLuqf8PK7udiMS9EWcKtQa8RBS49bVe7YQQZV3Aa1ZZH",
  "key38": "4i6ggmGMU3E9JfkuecrpKcog9qPB2j3Evdtd3Csj1HWYLP2JShVEtZ8DshZCvwx3qZH2KKvdoAWTYmVW5p6HQxft",
  "key39": "4TMn9TweRcJsqZFxj6nV9xT8BQyiVALdSZXFtrJXyFwV86NFvFDbwoLF4ZuACPi7yUTwMVf9Xsyu4csF7RTytMsU",
  "key40": "3RhKtWjKbNxKPbpv837XcL6FBocnWjF2AuXovmqthdYZThUmeXhFD2jqSL6krVHtYVUV7GFDswJ19SC12iotLi5L",
  "key41": "2K8FR9uMiv2HGiro6yvA3SBFArVkLhrtvUoT38FSSL3sxp52NtTc2F9XyYWPhWz7Nzsgdu6XNiHypD8DsSBFaRat",
  "key42": "3iuMwkSX9bfeAbwLCZgjQL9vESQBg8VZrRNHduNgMSuEpaMgtJfa1tUVxBR2eaxwcTm2Neso3DMb4gFSrXeQoUHw",
  "key43": "5aBHaSHSZmWgZVAiywQVT7r3GxqSkHFWKeyATPSseE8mFneExN61S1gTpB2GCTBo4T46aLXxiuzg3ny3A8wSo1gZ",
  "key44": "4XbpvkzGZivzgcXP4wriHg4fRj4pFhRjqaUxXncytwMgXGfksga4ewEkunkt3RejnCrUn9oC3Gb1zdqUNK2fhU5T",
  "key45": "2g8Aywb6tUPBCyKRBBwQBDpjCwijXKwQBizncXMBYweRBRp5i4TnpNccyKbJxf1mDGakGwL53hAcHAZFBTePpQH9",
  "key46": "5u7VFu3VrhZLnfMQZkwFgb1JupgnmvRpEiTfT9HzuhyD5Q6JicFK6hhEzSaxvV8XpbAZsu5UecupHQJ1My387jGV",
  "key47": "4KKULCiNHLezthjKENEBHF1YFkBFRFksUyBWgCyho8menTARx6TTN1nwqkgn9z7tU464C3Q7a9WdcKNMgGwBddfU",
  "key48": "3s7WfUxSwqLQZPq74RK5kdtMyLo1rxhPDxYkfDcrMNmWsrMLn8HWdCzgNWD3FeMAXhad8XE2MWXEeuoPnB1ouX9G"
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
