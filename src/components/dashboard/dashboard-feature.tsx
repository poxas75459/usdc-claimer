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
    "5RPktVBbMKjdKzF28Lm5cM2yQRNSGohhFYngwt3WorxaQ667TeHzBFwcm9RUQSzj6J1LpVKwnwgesgwkPmLacB8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CQFTxFeru5hBEnuVDEpGuEFfDkc6Zs1PsPEXVW4p9seXGSBk6w3DpWMRYwnv2JPoT6546RqsSvMpbqek1b3cBBx",
  "key1": "3TL1yFC89B4oPwD1mS1PMn92w5GxTxeUGt23aXowNke1ebiTcLSVudYeU6EhRT17ad24m7UV8XKbE5XLCep5iuNJ",
  "key2": "22z5Q369kmFTXtncjaXpSRajhH7YPsHc3Z2jQk1UKaUdY3gEmte93by9uoG8mvwntjoYfx9tpvo3ykYbZcWVv4eT",
  "key3": "BHLYF7RLVoy9MH8xu7t8GkuifcPs9f7U1zs7g76Lf6UeUdHi5NTCJzxNa1dgu91Sz4HNnCLbaKXA9qruxbwXznz",
  "key4": "2fZLaFTYyQN5PrMh1LDcVMYk8Zq3H1cvLTEYHzBq4xdESG3HFGmvJu2Z5cqYN5id2zf487YuLXKxvobjDWC5hPGJ",
  "key5": "PfFrGjsrYFsujbfBdKY35RNpYGLKf5StvibXuMvqMqYDooUB2F5nwuSDWJxVpgJ4HExwRceoJnwPUsBLNKRZN4a",
  "key6": "JRhQZPuBgqEmTSW2nRAgn8dcYYwKGHTHP5HZtDdNyrNdyQPrJxAhdepDYdh7EhrLMDajfCsr5PgM7Q3A85Yqdc9",
  "key7": "bVtn7EHRK1iA6v2Rn5j372cenZLxdUwcRcVjaEMLbaG5ge9rfEfDVtr1i3wan5oHvS99XsAVeooPqXeCczmaVrB",
  "key8": "2t1Vhqe4r7LBNG6Qv5XhzT9k4VKhVfx7YX152xtv3R2FShR4cvLiCYtsAsbMMuKC6komp4bGvBnQLuGZSFHcrMEE",
  "key9": "5mK6qwmeViksUfLnVtPUdHZdT19APLMDAsZwP1Nnvnni9639nAvhBkV9NmzgZA1iGw6W82MNksH42fWDsVVzqrag",
  "key10": "4j4JThYnFjBLEZc1pSfDijc2KjLkBTUGGjWPkztFMvbGwQSnAwT5NfjPHXrpRVMU5gTPKtFpbdQiJH1RA3DCXMA5",
  "key11": "4VsoUopo1eyehvoLr3EzZrJXv8hm2XaG5oZK5JSagpJVXcxxpw1XLosSCDujQdJUJj3hZk366ekRDy3y2ScKfzYE",
  "key12": "JsNPyLcqygJVYHqsNPoexSMPhJjJrCsPU2KZS8XxjL9pt5NGExRJn52stFz5NTWSdmzbKkFKdPXVJQD8KmV8g3r",
  "key13": "4ydsxJj1YLCdzXYgy37qT7XpAe2uJfo7ziXbxNi9DPddP499JppSViFYPgmBDJhwmr2B6eVpTb9Mjh8QCt6Jt9aD",
  "key14": "3AfdkJ6CEFZEXYSokqynp4aNxn1m6m5mbFWmJeGZMNvArVaUJRVNRoDc5DVhbN59f5uCX2KqhFWXZhMpiAJy1HSf",
  "key15": "3DC9xqcy31VH25oHBmL5fs3762j67yTUGU5Nd9rqKY1hfSXn6pdqWmHB25cAQ3SpERfeUBfRcshXCbKsmwx61V8L",
  "key16": "2MRAc383Jw8SeLjKoEvu9MkPuPKUWPPz1FLkBRjANjiqpA5diGzV87ktg2TCPaoU8PewdB9UwSvepm1xFJgBRbD2",
  "key17": "KqQMzWn8MPW1ogvc8eNQQUNdvKuLevX1p9wgPAJSVQWwhwg5j5xWt5no5PJDzdbKpa8Rhj5jF7RcoiTv4wxpJ8v",
  "key18": "3tACVku78NSBmLY9scSqgWGHCexZZHHTNzH4fx8N3WXe6KwqDVDHgoFggptt68pHuiwKmUNnSzEGADkSYqTL9fWp",
  "key19": "4GbFgVtKyZ5j79Fmi6D1ro3xswcQ8aNsJngqrYGHqkTPC7DCye5S1pKcu2rpp6owrxgLguzWHjcDpEAyVSVqywAP",
  "key20": "2wNpxwqNE7PuaTfpMtku225yZmrM6a94GFcXneMTosicxJch24SBrn3TB62zM2dBVG9aLDBHPsAup9g8EvGEuZ3n",
  "key21": "52uhmCmKNaTWU7JZRJ9fNtPoGAyBWTggMAm8RfrWXFq8NSMJ9Qc9YyYaxX2Uzg5PbkC7g8pXbn3bxuMfoojLYfvH",
  "key22": "3vbwAngNYRrXTcFWUdD65VsQix74dF9TbgnMsDQvQiZRi67EsEu65EjNS2HTTgeQSeZfe1pdQf7PYVNhCtWo8ya",
  "key23": "4s3mDqmTVDVQoSrvfX55Kcf9Y7pewaqQRSTVMmJLYcrDMDdKgZ9V7nnV366eiEQ1CvjXtSvddnv1o5opLm94X8CK",
  "key24": "FjMXusCojxA3Unf6oNFXh5CPdrKDa8Xtzg7rFef6FcJWANE6Mg4bmm1FkQXqA6LbKEWq1yo96TtPs2obe9ZEmh8",
  "key25": "3F32CyKA2uVKQ45ZzB2oohURJZfZEABLXAEDEx29sw9y5LawD6dtCDoQmAqRwtEBY3CCgDByvdmbfwiETwFb44im",
  "key26": "24umZ7ig3EzkfgWRKt2XUGwqymL2drmbGwLZj4BhE2AeMKYjfEnDZErb4ZbqpapiGBo4Zyqwf8KdX9tdHMF1HXZt",
  "key27": "QjAoc1HjgkEJ2scW2WbBvoMzP4qbqAqYZhYy5VdauQAJKoJ7ETZBEsG8sYB4NovNacgpg31Z4Kh4jV5wbCnJZnw",
  "key28": "nQZZzWPGU3FoytzZz1iCc82MJqxHbFDQqKv7wRzDRc68y8FTakZHxY4FrANfSzRGek3AacgRNvftwYGd3Nt8agK",
  "key29": "5vxXZUuCnSyd1XThfEJrYafqt8LZ5VNeMpobY45jSmKiEEQyHG7NFfttxQhHXs1yaa5buEzba7sXw7id6YVaayAb",
  "key30": "3aYeD7Be77iCaxr1S3bcGeMRkFcknjcbKR7EpRcCmKdDQ9iSUTNG9Ngqn8CNMGDz6kJMBhnYNzx2wiK28PqnQqq8",
  "key31": "679QLnE3w7NUSGiKwt4x7yhM1MQDXfoXMEELLP3674EhPah3Tx3C32bURsDhSD1M7zQnaeeenNHbvmJsRSPGm99C",
  "key32": "66KCzdnJMh8fEBZUGZjBocv1xWPxsd8UsKcDZXRm9xbuuoHsnJtCDgfyjxajcwUb4ju7pWk35qsccja6dD98FwMP",
  "key33": "4UP6hpVNoTVfZSGR9UTzPDUoAZNEJArERSaFjBPypmtbFyU2nv9HfFjpP85fsgST1aGxaQyFcwnhgnVPcZ43Uda",
  "key34": "5WS2BCFcsB4doFz6FDukeFb92p1j6g1M5uv9jV9pG75cJvbLE78MzDPw9DtqeJRZcvsooyH9aBXL2acXVy24DfNH",
  "key35": "65ZQtEhyugpZ6DFC6SgEMPMrHtXvHLqm6Dodv4SdgBsn52zPtmtu79vPWdtpRfyqnGWg7sGtCBE1FbYBFXDvcmWi",
  "key36": "kUYDre1RQrwhthB9m9MXQJKKYTsh1WQvykAhw4xe1Ct7ZBmRC2MEeA5FFEH2CExssf8xrcQMos5zgKowPf7DAZi",
  "key37": "7y35eVLUJUPfALcNwRaSzz4Fm3wBAVUsqFE88Zf8D47WUs7SrnGEhkS7rLYCj94diskok4NwXNWxz9xbZ8aKw3L",
  "key38": "5JbjSK1py3KkyCDjYr1hgFqpVWhTqfBG5fmk5LewUXHibGZ2mvfRL8qWeeVB4qu6NNuQc5JPWrEqZwejaDwxAdJP"
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
