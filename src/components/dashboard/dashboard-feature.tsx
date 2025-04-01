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
    "322zAySMojYjCL2SK56vznsSPGB14ecZiVWie77JRcv3cNHjQhybt1oU8sbBPebhJFksEdTRAKWtyRVAwUJ7rVzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zj3QuFkVeQ6VACBn2cDDdHGf5XeuUai2VFP26etHGi7BYsvbzNHoNmzr8hxuim1Sx17KAbA4XN55WE1w3EFnXvs",
  "key1": "2rkoCLw4W23xh5SCadwpomiNgVANKFxHshwUM7oL6rqHSrJuCRBazNPgJZKBCxRn1Gx64WmkMJoN2sNSvaVicTLc",
  "key2": "ThUcn551vPcQoqnGWaEEnRqtpVWEaFvN9V3a6Ukq3Dccgufv3kksnt81jvP9AHyooEsVzuLUb3NQGMLBFgmG7dk",
  "key3": "BdxkGfUACJWQpyHTvg3niYydzgTBS6sjyvbf7akGFftxSHpNvqFDMek9dFBBmbcMTLawD5jFFJLSqHtR9kpFP8P",
  "key4": "31qvsLkznqSKQEEf2JJ2ZDutq16TjkixHqcSMx9L4FkJ5f6zTnxi8CM9GjEEKqqCvd6Y9maZV4sn11xGUot2qCcH",
  "key5": "9dfUDzqMvTQyA5v9M7KyUEUo9WhYqqSaBzNLtsW5vKZf98HwGZFpRgwd9Dc7xMJbvJqfUfar3MgMJCgQcv3fStS",
  "key6": "4c9EAG9PAX6i1V4WwMrN5f1iPi45VNF7NnqucGEiXeAQqYFqaHDudBSzA963xAxfeJUjZDysw7pbvzB8aUwdKr39",
  "key7": "2qRCxKvZk2N2CzAyPEUJA5egXH9N4rbg9HErQWRvSSmxMQfpZQgEpmxfTr9UbEvpauGy9dRpSjNHKqfDPpHXPhSM",
  "key8": "4o9YySsiHciWaANNYAqFagTykyrsUG8mJhTkBCGbi7dDHNY4HLv4EeNGr1dS63FVhJX3FpdxQL8dBzM3sAyDyCfv",
  "key9": "pb3UqQ12TuuY7tCTqoehLhz1GYdBCvxH9qLxfYNGauniQWgVJyT2QgX9WjpWAPbLJQ7Jmwz5Do3oFVkFxw1wwDh",
  "key10": "5UFf7cFGo6LZctFbj9uaZ7JT7SBWYro7xyewYQ4ae63wJtijWDhJhhRpL53VXaT6gvc95myXx1iNNZofGERzB2qP",
  "key11": "3md1RtaGAQRiseheNUeK7YhGRxMZmzqhqkX7ktChk8rwFY6huPS61jdo9kqa9v69JcHnAQUJUsQpfdK8BN5V8rEN",
  "key12": "5rHEMDJAY2KiQyv8e1Dc74nc6SRcM3oiLeTQs8PK5krzSk5HhCS9bdicakhYFiZ7ZvgMMJYCqKEhi3jcoF7quiuX",
  "key13": "52eStMFWGVhZTrz4YKQR3arBA45bTb8Kjx6v3JsqX99uRthBUimb2QEsyAam6tZP2EFPz4U87CPrRwweAEZyXEc1",
  "key14": "3k4tgkGeZJVovr1pw43CxXn6bXopfQyVzWuqg4QMoxJXXz8wyJVNWEX3AGVsFsQKz4HhexNBX7R7sMcgZGTAyzAG",
  "key15": "3irb8MNfi5QQsnw5eWsaQg8929NoeY6episxa83WnnGyiqYiYW2jZJ9hXAVq1dN3WUmEyQYeJj4QGTorCaRTt21W",
  "key16": "Kn7ubQSmJeNftkUxMoz8xgdbAqjXJzeWa91NhVJaUtg2on2kzxCSSxufndisQXADRrWzw5GUysggKy5Ng62WHr8",
  "key17": "K5Wmtfnjbm1M3A4oTRBwnnEggkQLUD3DprhTyYd4KXFw2YPfkcNU6zCzye8Y63B2Fo2SWubzGCTZkbNwMXa3HZQ",
  "key18": "25GMz4SKtfwbNcTdfJPP2jTumD2BVmy9dUBChvfzboNod2WWegHX6iiNqQeayPtNyRZtEECdEgkfrd8K5SDeNjk3",
  "key19": "4vXv6LABSFmzYtheMEmvymXE467rWT7HTvx9VzEVR9xgqP2RG9J2S9nuuhcuWWw5ogmcM2ztoBpFpmzaZ2eHspRh",
  "key20": "2BzEaE6RzQ2TBJ3xUyqnacTEes6tpCiwB1F4kQ3KDTP918eSALoqvYXJx5TfetnwfAZmHkmL8NrNr8hkZQfzvExB",
  "key21": "QsPuMfRz8Y3Gq6ncuqKCS4X117xp5DpAa9v3HZg74qJQEuzs9Prv5E4PKQ3FNXMuxYmMJAyHbTjfXvnG1DVwQeS",
  "key22": "3TgstnQieVPcrBnLcbqiHg3xRmv4DdvtrEAZEd9EP4qMBpm2rCERXJyQ4kLfMrhxmzWvXJ6HZPrKE2zX8ytP8H8w",
  "key23": "4CftUAPrxaqCbTqSPGZetBfCKTVhyxmQnLYiP9sWpwUJpTP3iwkKMKMutBzb9oC3Uov2qaa62nSiQuzFdEGJFGUZ",
  "key24": "66557pUdU8U8wtBX1AU8VzDpn5Smfb6tdgoCGwqcvrvophBsM8nKQQMhGm2o9hE4uVXyrfSDhExVkjXSuaJoRuVh",
  "key25": "45VLkB4M5AEPEfL3XDUvbnkfjm55CRJLN2w2prhJCjNNJZQU1AotAANTy9nHWAuRUWkyrmyBDtJFdxZYnuGr2dMf",
  "key26": "5Mp9v4YTixWyA5FqLnTtXh8hervqMcM5Yyk1e6yhc4kK9FCSe4Pn9acfdN3oe5HasgavzQ1MnXBYfRmNoeAJ1cc4"
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
