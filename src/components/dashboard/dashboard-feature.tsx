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
    "42vSDpaeYt8fnM2dhJmTtUkeRwdshz8rkxMiDazGQQ66yLZdxGzBX6Xsv1bFfzcaca6VFCAU4Tez22Ptipoqda7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JSEyc6JKCB8L2BetA6r2FW5HakvxzWy75ZTmMegGMesKVfs4e2QsWNGehS7KJsLWdYQZDMGWVppC12DEhy4QnCF",
  "key1": "4QiRmqar6vR5ZoN2KYiuLmkTTK8yrkgk6AZM4JYPNF54Vj9Dgbrv8FerbZ9KaJsykjeBzqpPJbYp17rTognmEUG5",
  "key2": "4tfxiLhfia5jXBAmpZWCVzmNEpj4srJEYakfDAFe71CMz5i6UuYenLXx6ac3PzcjXfdA4NaTUukgDtZ1xVrd9X3D",
  "key3": "5iVCQ5CKuBTP6zExTNkcipGod1qedawbJQZVasxWKkMzexLsbzQVogiUaArfiMRroUrkZbWu6AbAazWo8bjMAr5w",
  "key4": "256Necsq8H1rrAL4asdoFn4hqb2SBSigD7w1u1hpnNwE4p9xeBaYy7CF2isyuWT1sR6Emy5oKufLw8wfjQ6R11ao",
  "key5": "4tYWBYrzYHf5HKQ9vFyr8WZaDdWvAoHsK68V1zTsfdWQ7Dc5Mapq3XhLnwVGyVANdqbTTYJZteX2k82113iX9Guk",
  "key6": "24GMr8uzJ15uU8qcY7UDeJUDTtGm15BsbR14PhdhnZN3XAyS4ox129Be7MmUeTUprz5F1axjHpuia5ktxJB7Ky5z",
  "key7": "53oDToTqwKS9TvRDfVoSpb5JsfDs78XmAFm3cQttDfjYu1ZgbTyKvouV3SoTF3R8AxW7hCEgGd22bguX3qbkJMax",
  "key8": "4EdSYxKP92upaniTFuBS2YTZhemh6NtvwhtBSAcos3ZCc7kkMXoKT8qwAs3evnw9siAFUP73Cd8B2jguYzuAceWT",
  "key9": "3qiTz4qGFgdWir9MRb7sgk1YYoD4XkwmRpfbZnoPStL1Lu78HK8JNxaL87k47bo6H3VvVrXtw2wYv5BG2GtpJbkW",
  "key10": "4FB5aCpnoGac19GzeqNqJm3EeC5Atj9zrkR843ahmQLsHG9Lug3yF8vdzBdwfQNuXueXXTwtGD2QgGXXqpP1EHtc",
  "key11": "5tbTG43CQ73uEKBkWFr1xyA9g8WcMBaBp4eHRNULUBDD9epdKXLGHYiYdCpphNjkT3Er6aL7ppdW8m4RzvbDE7ky",
  "key12": "5oaADtRrcjsYNPdBP55tX4bC5Fayyxm9Zbzft2mRoHbjFNNHrLg9PUeJsEw3tBgwuNaCx9X4nsK8djxGakYhmA5X",
  "key13": "zCNvX7sLW4EJhHdMvRejw9stdJPrTmqphismX8frcJ8aqo8nYrFoZPd9eLYGDgPqSKUWtYaqB4hWUD1r4w3yu54",
  "key14": "KQG15GuYpHqDKQ7fPZ75GjY2Bj4q36DrDUVJLsGNhecWxY1fGrv8gKeKgsBTn2WMHTw246LRv6h8R9AvxsA6kGk",
  "key15": "5EmeNhJidtM2Dk7hj7ZSqTK7q5A5cmtYgAfNUWaVnt42DtTidqdcksj8NhFati96dt4BgjmTa1Bdu6SA99WGwtP8",
  "key16": "3HbQpQMsZABYFSs2JnHfBMTFB7wi7XCKD8QoSJ2RXVJmSd226DXA61ZdP5pZQpxsMXgw7QCgChg2WgFSmKHixPbf",
  "key17": "2biWoUNAAsyAhDZf92pi4hBMKVCResfVUj7xFVFEs2YuUQSz6SKfCiFgcQjWEUknGB144X8tWrQ6EvWd5VXEfkq",
  "key18": "2eLhxyVnPF4CtFZMQfNccv1RFustJpeyiG3spDMtg6KSSnft9mtWsf5dKAhmHvPQcCtpZph7riHfUvzd5JZ5PfTv",
  "key19": "2zNjrawV5SxYqgUBnf9gtbqkaqbLHTS6HhGiH7CBGE7QELW1oY3VEcW1bQVbmMEPkvNKXBcMp5YmAw85pUYW3iZN",
  "key20": "2S6auTfXnPtWi7Au5wPug2eNioC4YVtkRTAZbTLdSz6MqRFj4PW2sVHFLKWmL56GdmJUA6TPxXbHJg2fqeEqELzn",
  "key21": "LvnYZ4zSdqocJk17b2hHysYr2di4ZeXvhxwWAKjbqFh3gi9WsN1VBAG6mNDJN3xo6xqKPyAFcjparkDq73jfbFT",
  "key22": "3gXptt7sAS2YgXokVsCCfPpoM22BzMyj68p61KnWYmiD2bbNTnpadp11W5Mvzmuo8v7bP9vTBNcmnVo53J2GjPhM",
  "key23": "5WN19zk3K7wjd48mjbsH2P5BvwJrnnkZu3HApH4cLQvamHPgyc8WabZarLrkZKTwnCX7SszArUEGNmproyLXWd6d",
  "key24": "aLmsDKfqKXbTFC3uKcYXaG197UuVVENbtGyLaPrvMBRkkMh88TXK7chxEW485P5rDEnG49PJh1vQKcTwypKA9fB",
  "key25": "2s5c1XtnknzC3wsLFMdFfC42YJyVjSZ59cUXP35k4QSuQ73VHqxfoQmqgsbdK7Apcxsf11D2uTEroPZrzi6bq2uG",
  "key26": "5L9VBi8SCGqM2Wy2gCdeBpYMHvS36FpaWS52arfKq1DFkFc4Pkj4pxiaNgTCqLwLNhJf3oLxUHpSEAoVipYy8ubQ",
  "key27": "4Bj8nfmMahZLWjcVWZB2c4CnuRK4GWeKPKCaWsshhqV7qW1L4HBSTWyb9Lpdsd2DQW22M3MueNPWDVZjC3VBA8Yy"
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
