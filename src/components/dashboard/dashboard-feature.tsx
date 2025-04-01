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
    "5p7bVfqCoVrW9B2rngVT1GydpoLMroPMvKosuaPAdg5r6CD4x5Wz2oBcozRKfVij1cB5i9fvHC8B4fg5KxfJT6ER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dQMHRiTuwjgUxayqNwbQ4t4RmniJLA32u7CxZwaGSdskcKatyqaEDSaGQgc7gYh5YY1dkV4znwRQhj2wQipZbq9",
  "key1": "2ZeqqUXGzLfxYgmd6Z66kLibgx3YCKfoqK9XmWgzvHFHdZTYQoXpXRv8ShFhV44ekN8zGhYL3kuB9c7nu82zswtW",
  "key2": "4X8H6es6vSiZHZCxdEuR1HKqQurGP2aJwmuU8dcpbDitA4Z7huyceE792f2ZY7vaw2Xj9xhfBq2b5XQECeGJinqb",
  "key3": "2kdd8YdigKcrFwLLXv56XgdHqQTv71RYizwuXDLoZGhuTk1PyrSArmy4SB364UVD578pA4ccwap9PM3QbRNxS78M",
  "key4": "2rQFp1zCsfWV2dQadm9dxtmuKTrHFT2NSpNrY9y8uCMeN2p3wMfVphvfHNztxfbAQ9SGnFNTvuRaJm1DxkWRiu8X",
  "key5": "GtZWthPER6TeQiK42Sh6d8jW84YxKRKX7YWnYvL414TRUYvSr3DXECeaHrq82aNzCKGGkDTeVP1xJDg9qhsZGmf",
  "key6": "XcusKr35NHzSyn2C4MmgiG9HRFg6hqo7d4VPBzZXbgyuLcbMKTyMg6tfUfGujk1JiSZEkbpX9oUULuKnd7esJJy",
  "key7": "h3QRwrrBK3fj5W2siEZWBa41V55Vwt9SNVbc9qRGaYNa7cyhKu6UTsQEsX4foDzXouZksoZRNYCcyiwGXT2P3sD",
  "key8": "2mj9ZvRKjQawczAGf9QcxnAoAAZNcEvNWhsS7ahRHXb1z7sW4VgbngnzFSRaJDRaGRYyiYtqoC8rGAzUSus4mh5M",
  "key9": "2193Rzq2ym1ZGUQBxhD8hEFShz5C9C9Dop7UnWP3eWcJJGci7S8CKtRk6jD3zgFwQb9mN2BH1fAyHMKHGFFJ2qou",
  "key10": "UZZBNgeDm5GKCDNZxbmtUrb61gMNivUp8bFX7LEWCRJQ7iPPd7qxyrQWVYqngukXRtpsewUrb9C4uFfsBLQhxi3",
  "key11": "32LJfuxUKJjvqLHpdFjjHXem2VggWFy44kSzFt1tbchxmjzyQ3BLJd9jxr7VS8gtcBRmTP6SSgoM9mSR38cGEYhB",
  "key12": "4pSjFZz1xmkg8Yiw2jRLg9MWVPdybntxGChpqXb81r2jHVURshRdr8q65eemTLorBjnve3qghv86jSrx3EMTphPB",
  "key13": "4DdSQsF6C7GdnNQHMU4uTRt19ySDsHf7dyuKzYNWum1tfafZsX5fTr8yNt1DUdMdgsJ6yfbwxnjjYJ1YhCCmV3kM",
  "key14": "PmrWFPB25NEbjDcZLxL65DMCytd8qnFUW9Wbi2MU67Bh54K28tKnxUYc3RoPReaNjauHCnad3ZqVTtd2teEEsk2",
  "key15": "bNqWaq1jjpU6Uk1ZwdkfnUDWwu8c7cw1PqeGVJwbf1KXV1865RweRatXszZw5pwg3e8VgxWDJ7FcuP6eeGqL15L",
  "key16": "2XThoEMuzzjAEJbytLsU64xcMdaKmtTCgifFemH9fLzWuCmfhThM1qdCxdSejfjkwtss4pAB7vF6s8jrE3g7kLY7",
  "key17": "4FgM2X2fbePdremz6Gq1k5d1yCHtpVnpY3aZiv81vFizS6sLBNPATTT9cCWTQBx66FZwLeE6ZiJ7AYDXRrmBLkGJ",
  "key18": "4fm6xoKG5uyG72R4EStVum3JVtGe97fVWMSuexo1MkhTQJQSNhVViR1YgGiWNbTYVGsCLL9we6VJpjzJzNJbMxx3",
  "key19": "quYHY4n4gs9F5wg9AKTkHqUhyTijitkhUuquXuzKLC8nQWFvTJ1EFmFNB4znaXvRZ724qePxrUrdrUkbGKbYkUD",
  "key20": "3QpZEvSQvMa4sijyuDtDgxnrgyhFiY2jNDWCobDg2Dyb7cqrUuzFV6nNvBrWzjbJUZ8z1bDWuHmpa53boY3h6BFw",
  "key21": "3RHypYrrw6GzWvvwsuEM2UKwdFPcxcjGLFEkxKLhXf49SaEfMGVaMfwdv8siyXeoQVKHkcTXM8fy5wepkJrS33f4",
  "key22": "5ZsBJJGGmwjR62FdkLAybrDJk51ZNXiNQ617gJq2CMAfsqunqCZ9wXfsk6jFJGyw9uFq47faQREzNuDnbreQLgKt",
  "key23": "Kdhq7yKqTwRsKYLcppbArqqKPcGDKiNL9QK1f7iZ3w84ZCDF1qVJUwGktWhxuq6i16C7DYqLCpVHBJ9jKTDbfzF",
  "key24": "5FW9rRKhUEEk9V3PDRBT11MRdzxbdjn16LKfsejzChKCTcc5L7JGbn1cgYiYTC4t59Fs91Xp8egyT5N4SmpS1LJQ",
  "key25": "2T37YwfnPewVxuxn4Rvg33AtjXcf6NYAGjKZsb1d7Nbhb6sUAdofqbmCt84Be8rQSK7CJ2xMWZ4SVG6RMnvFinv2",
  "key26": "2rPcwNADmeYVT6hoHAihGprdQiscwf8uJQdxY3FaTHbi4TVNXDpNtGJ8dh6ChgfJG68Nt2WeqvPp8fn1N6T39nvR",
  "key27": "5g1raM9kf897k47rjAm1Q9yT3aDhYe8ZQN8uLQptznN6KTQR42VYjXbcbymEQxCGZwAGQ2cnmb3dzNHkNgzdHEd4",
  "key28": "494aC9BvEsjLt5VARLsu2ErsGkr38gP4GCBHXicL8X7YGLGGJD7h5mwQUacjDoqXW4Nwp79v3NsLdnEYcwAfeF48",
  "key29": "2qGipQwGJMabyj36dmqhzsNuHwJ791EKBvUvtYRcSbdsLuLnLggejxNvMrjVb4piW2sxYVSo9bsh5NAL5h1zcMLj",
  "key30": "3HVqe8kmeETyzKzkXM1WdDfXa1x2ZK7caBoVyiTyLvYwF72LeaBn1WxfXCkvXk3vkbZQtoy9MHFSuv1LjfborwA7",
  "key31": "5f7QFcPy6AQXm1dMFnMQoHEFfmYqQBwyrCad4m4pHNbY2k2CemCU78avzvrxfkrNZBotC9QcTVmbqLAELPa6J7xn",
  "key32": "5pSnadyv6Ld7fS3WgrEEygyhqKxp7XNEAF6PHcokZJXAZfiwLZxWnwj6FqAKW1wsiYm1KAXYzcjWKxukmpxYX71j",
  "key33": "BsauaL21okCwebhzMh5ZZV5cK3Ek163XyBP1dh9ha7ADqEsjgv11JMBHMrmC8SMSvEkb3oNr3SqseQ4yXXdAYAb",
  "key34": "675KbgY8mjam5EZCdEftC5mWYoEHk86HvDqChgcCRpBfPN6DskKoQeJz4mmGByKJ7FkLkPpkmSrBDwSLSYCYhwXW",
  "key35": "5taEtsQV9ZtjyvfCYE6jkYCrjdzN7PmwUDVDARiZK8CFY1mitKMAYtFumdyoUfpN2C5UzBgN76FrobkrquQ2Um6N",
  "key36": "2wfTzReRNTD5egqhzSNKWppuoS9PRmBZAX3u7ip7vsaBu4iXmGGUzbn9bwvVC5TZBVUXPRE8riGJ4sAmoo1Ahh6c",
  "key37": "4tmkZWAKYXsWaqYNgt6asjD3sFNwPaTK1Fy4njVj1pwq7A1tFCaeDw8YJbY3r6JNkjQtBMJPPbvnAbhNyzM4UWPg",
  "key38": "35zFuFHF1aJsN4hgaWN4zppb5sFLUBU5ygkD2FdUWTs6K9yJ8ApWGHw8wsqDdyhNwqMNGMXVLKoyoGSMMZMnPMmh",
  "key39": "5KtQRoeWnjvWRHJkMshpurk7BgCMnPiJ9cvaWWnCpMEbKkhZuAcbLCPNYr5YgoP4S28drsZKJdTHr7N2Y3473C31",
  "key40": "S2g27nhtvvDbaaVoNueWomLr8BU8TU39ujn8bLFENTWY1JyBKx6rTtsMR9Nx3pGghgyN89Jg6W7bbzRPoEKFSZX",
  "key41": "VqNTM3XxNuwpPTqzyVyH7xRdwgYsRUhG8KsUKw5bFcvqGTJd54fbSYdXrtoybtFQTKU7bU6uHGeH6anhqa1vogk",
  "key42": "YwoaceHptohfhFM1tMMZ1p27GPHteSeCT2SZK9wrGcsyi7XgorywzWXu81jbJ97PWmVBe64ai2PKWpAJvx8fjqn"
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
