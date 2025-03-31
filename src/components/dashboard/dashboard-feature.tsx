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
    "2Z5ff6jJyFzurmEVjvL9F9SKesmYYbg4BkjZxuNf5uE3ytTHvDj2Ap4mXCbKRkfYyTBfdVQfi96JrgEM4ZqS4Kam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vcxX3nsUzCsyQXT6euQ3ghuTEQycAjkPS3DVfL4tucSM2iBT5jD7mL3u6QPrTBEt8Wp5UcZPuk5TWzBEjYsLb2T",
  "key1": "2cbKh6ph9KvxpK5NkB8XQVPMspGqfrHTGkqhVUJfE92USgoiSG7GLA43C24m5TuKyVDkbCmYMfpAHa2qaGeyFuN5",
  "key2": "2HUuh7e4MNoWRcR3WP8Fp5d9yJ7tSKk3XtvgR4JyebbFYiDGHqNY1S4ZTYcZM6cHMx7YW8ZWJecsqG5LPa7GAsJ1",
  "key3": "35qrDhRCi7LZctSR2XpTVmcgvg8QZ8YBTbHDwV69CsqvPBWj472Nhnqm9wcca6Z2qfy5TnDUs8Ds6uRLNxq1Y9dj",
  "key4": "3jcBg7WLNu7ZzzBB7vTpPysiPbJMbsAuP3rXjFyNCr87JHE6rRJc53hppJ1eziPBhMfH17Rr6YnQYBYDHLKG4pbB",
  "key5": "3LwWdcxBZh7nknfJLsrCRzsLsu4Erf8oMQGtZuBRLXAMGZ8EQ7crgvypyEWEEcj4sdwazH1np668VsvQRgrXfapZ",
  "key6": "5dC9nHT2krJ4tjyyQMbyXnvrNKdRNKAJHt441LyQ6VYesA1dfL4XWbPbwDdhWT1Gj9CoatVnHbEYygWTV3wnEHRc",
  "key7": "3HdRxMZyg49ohAeTDNRfwXq13fG9gTicfMJ9n8pqEie81WtiE8HwHumSz8CErKqXkZvoePkc1yZ46qFqsPsqKKP6",
  "key8": "5S4CHXwSV2fm5zPx8jdefDYJHieuqcz797ZRMS5TRdtRY7mxwGPFhHR9cxRM2RZfZv7hW38jY2WZoERLPPh7iqB",
  "key9": "5pF9zhWzFr7ubVS8xh8Qve1VpR5YEtKEfjy52BWcWArAbTqUMCcLJzu97cGgJcWn4h7aMrdWiudvwor8REqt2XfE",
  "key10": "dcEYn3e4VtkVesPWG4dTYtdvwfhqH5KnVHg4henTUspvPEWvr1KpNtyNcG7tyEuUC99eXTY9LTrZxQTPo5NzG3g",
  "key11": "5Zqj6dwMRo7ZDY67MSLAz7AB85aBiaGQeyJyCSd5FDvkCrStLLR7UovXjVLrksViQDrVWiWk2aL47QYkNVHNNoGZ",
  "key12": "3D2wuTF9gULZR93LKTvosijohJ4fwTFni88rK6M8Fa2jeKVdF2kfd88MzABizh4h6vembSq1ExxgCp2fJmRG5c42",
  "key13": "BBEA49BjHVhn7H2dyzWV8DB6zfm7T6eNssotYBVr3xNMQBBV6CaszceU6qvGAeobEhGomTjL9KuJEG1Coe8V3aG",
  "key14": "KpPyVrVc6L52tpN2pR8UZF55NcEQm4qodcjDBNKGnaRNrSFfdFK9pkPeHWjdFLbMgoST8KHQZ7jr1umb84M972u",
  "key15": "5TwMZPtaKhcrKbhexBTydoNeRdhY3FVyU7ayXHH1CAxEZDBYK9qvZtcRG2bqt6SrcpB1tYEShdPaibZ5SmyN6Tty",
  "key16": "4wW4X6L9GAMZftX9tgtUztkcbMjqX3h7hQGPCRyJ5S9JAjGxkUJa6F3ySiMURwh4SswnA29mBCMgvRYRGmbj6W6Q",
  "key17": "5u8DrSXP3QSMqmMi4h2LGE5aAT1yyibmMwYisTjBtxh1de6rcfaXKoX8f8E8dAGjJgoraCzhVe6f3xVQQfs18LTY",
  "key18": "nNTzd84QMUTe2MxGTEM3PMnvNuGJjTg7Hb6mxvTAVrGfQyxwZbx5ttSE6UUkv4bD6dV6QJFsVdQSLt5iPb8a6Nv",
  "key19": "P2rntk3377VAGFJbo8qDMNCKnYa1bX8nehe2CT4L3aU86ZGgNJfePjSa1uMZcbSBrT7pkV6HSggRws8waAdHLrX",
  "key20": "dbLJ3HJQAJf2e5KvPA5NjUBa9rQpJGEgiupccMS9Jss4oTBnJ7QW4ThKVyDcVpfrqBFWWKGBvaeiSci5pLvQqeL",
  "key21": "ZPxxwgEDDuveDvway3eh5LXcHXUCs6ihcVDwLsGiN1VFqbKa8oyEf3kS7SvkkzJFEgXBhW3bbFCeZibBveqhZzP",
  "key22": "4dyyRLJVvvEX5Q4VEEGKAsziKkRAQgTbZPsNE1gk9bxj2nHDnxSsvDCnWwtUrc8RRmWhqjKNJ1E8twovJMEQVrdb",
  "key23": "5ARXp9zFH69uK35JScbcwPks4v4BrStGCGuGVXSqTXLBXX6S6AUC1Uztzrx2adWF66L4RfbHG4Qocdr5GAEdR7Ek",
  "key24": "3McMiQEY5y5bcSLGxwAukhi1nPArXEdLSV72MN5oKsNGb2WBdUrf9TuU2tpoj2pW7HVmoUJdkpmZe9aL6ProNi39",
  "key25": "2shTnfVd8pHzoTyneiJhnz7LXZY88QyyoyNoujkbQRyKYHPJPhFx7iYVXwUxdiLCUpDvkF9LrWxTANLmU7XsdMxY",
  "key26": "JEy8FgUoA46LoTHi9FAYes4n85hSfzZn3vW4iY9jaK6YLmK1DMV5anPhxbzA7XJwiWvTXibpwnYTzv8PbBb1FhG",
  "key27": "4xBCYXDVS5xQVYF9pMQiTdS6WF6fap2nbp97AviA9PfGGvzfJEQZFmzN3nx3a6wZ2ZA3uqLknU2zdfuPHmGbyiKe",
  "key28": "nvGWuXeJkpVQR6Ec77b6UKxP3L2jidxf7tUyfTCJ2qwz7Bos8U5wzyeX185uag78oZGJSQYxe6F5nvaLDCPFGmr",
  "key29": "2SEyPLSQ2GAfbBjUArmaEDcNejKupmDdciC7cQSHyxhbMJYUnEL1ZntyiCWHp1nkwVVnSZmfNqRgxutg2i8SnGJa",
  "key30": "5HoKXejvLce7bpeT7BBhtJwMhj3vwT8v85akgWiGA2iAkNsFTxhfEVRhMwX1pCxkKCp1eS9LEvBR6pzGKXWPoJiA",
  "key31": "3jjpipLnwpdmtLVTHsHwBbv3Fyxx8x54QbsXUDK29BW5fLXjTegbVbX8YjeDDANMfVuVP9pKkuWe1WdfFXXtwP7r"
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
