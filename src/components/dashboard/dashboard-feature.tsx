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
    "2di8RCHCDeZt6HAYPm1knJro9k27oL7ionPjDX8MTuWQLsUeQo7gVrLzbsD6xp4Yjnhj9PaqDXWrKmZsS9oNp8Z9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57vSVFxFxRn3nMnVGk6SA1aZVf88edhrUMTyiQ9LHnPn8EUqw9kjbvAuH4J2aJfYmhpAVmqhsr8s64zu2tWtA4fY",
  "key1": "J5YXjynYkxpPqA2DNLABzkm1oHJH9GZV7DgKHUVN2YWqfxzT3jZa2SYdaWVuBDAc8tacSSA4br8abMKpv3JqyHN",
  "key2": "3QNu8rjpHAyg9HVtetnk1XgxscU8DRXRyssuCqingztEJrPQQUazSesLjaSPi8yyo1GnwFNhJRzN9Yisf753HbBJ",
  "key3": "abmgfZVWExsr82RZ6wSQNJJyUUTFArwxngoPNJkGHL5PxfxzCPFatNfejkF2FkRkh7Z6ZKpv9VMJjoD6vW3iC2Q",
  "key4": "55j4f5YaG2VEX4h7rLmZARye21vwEZkosBu3HKsECBDtQcNqBHpuKb9dxEwUN4amppedMHtshEzxYmEfEAzgumkq",
  "key5": "3U9LKsfazd928jNXJm6LEowmbPcXFZ2ctT3WF5aKURD2WxHAnxMrBuDXZW4f9dEEC46dYW17SyMBtvC2yJYvbBCB",
  "key6": "4GfnxqueFuNT1vVBZCJyn9nXKhWhtmxwstZmnKXW3yywGcgUaMi2Q2y3rFVvVjURF4GiNg2dusbRVAq2WkPqShnM",
  "key7": "2JaVEzBvCfFrDWyV4a7CSycRdPEZnuGVcShQNTm4K3HpKTixjZQyatFj9mF2sGesetqogNjqJWcpNweDQFqVzExh",
  "key8": "41m5HYiP5ABjgwAMxqrpgTWCaVcyH25E4RyBRjpcgmoWxhi4w2fDQ5hbsbBgJZJEQ9C8HgfnKpgdCc4cQMuYDfXR",
  "key9": "3cwQJcw37Yvon6mhZFAaKmucjjmoyZ4tqkergrs3awJW1aNA5W8yCaDPk7XYrfoZ5TC9nBhdF9x2SVWRXQ9j5uGE",
  "key10": "u5PznKatZUSjdcEd7Ljk6471qwp57WbAe88Z8QfLL6aNu5R43uhmj5DX6ydfQNwKoKd6JLGFqHihDWp61TQUcPp",
  "key11": "xroQN2Ld8oibMpRDwVnrZ1ZWCf8mExu4w9fo9XzY6LRviGvAfH19gRb4k72kMKZGapkzrYcgwSGpVwfo9Xfw9QE",
  "key12": "5JD8pQEiVXyHVqbdV9S5XgtcD4hXeiQt5xrhasMCWJoUtchwXkthhtr7w1Uvsgacgmj5dhfZ344fXsHgVgGiffrU",
  "key13": "3AFyqxdhRhxvK1yvXJcSZsM4ADjeeV4wPcHmNfV1TjqWFnHXfrgfLpBER1SqyR5EvqVtVqxWCEQ1SoigrJZNkdk1",
  "key14": "2kjEeSWdjuYYpCY1fsF5yBWyh48HD4Xpvrx45Yhug6Ua9TVqK2yXY1Lmzo1pATQAZQnf2pjtxJ9RjjmDgdMxaeEc",
  "key15": "2nmHBSVHb6xxExaqHYx1R9C9dSGCNJ2imNJAksw9U2GV9hGwVMqXhFkSo3WkZy6RbgtLiRT28du7q7Vmdit26PCh",
  "key16": "4i2yyrf1UFDheskmvbpVSWxwrnvG8oo1xTQLcoXutaucTqRsr5VwzTXYB9SqCRw3vFEHW77Bz9R178DvBbWFCK9v",
  "key17": "3PsL3mdhgZRphgjyTbHSYukWMMdNZ63zSee4esEg66bBzR2qYN69y2dvcYS2w7SoRxEQXi5LQX1uMxuBKYarFnPj",
  "key18": "4TTaHdEnYjL6qxsygT99ReXBst14E6V6psEGAV6m8a4HH9AjfnC273X6cxapckgvyLwcevpiNzFP9V3nXuJYhmpS",
  "key19": "3pXpF2C6KFVS1EZ7LTixYfFuPbcumDExHdecAeqiQBibs9euHV4DLp1K4zaUcxs7cqg2mVb5A7ZzsvnJHunojiCB",
  "key20": "4nWkY7684GCncXbL3Aw9pQqK1DLv93NoL386fzueXJCb3jNsDJ5N7i3HV1zYqyf71t77JAhQDh6PbvMwwMJ1p4M2",
  "key21": "2cgtxsfujKzhxYdNNSsEfzbcxxDB4S3Su5dAAk2npq4F4bBrRpLDkA9iYmwTzDbsARJsvB2mb8yVxMfohW3AmQuB",
  "key22": "6g2vRfkjuP2Gr5DbDYCzT3hf5mUos3jgDXY2twzi9H2JeWrwfLSCSLKT7M6E2yX67WwiLUsJLZRomBGqqobDQeb",
  "key23": "2VcU52PErow9oreLci4nUCxKRucpQ8ZHV5StJLAkaZTY25xnG2ZDkSHWAgqw9TPS8CwwbceE2iuTkgJNf3i487Gc",
  "key24": "3Dpbzx9znW5m9KPfnbDrx1pZqAfWtm6Xi8YX5ETdJ2kJxwZTQ7QVP7YYUoHCmmmdT1iKssYy1N7qgWmdLp9KvCzZ",
  "key25": "5ZN9R7Aurr6BZtF9DZyq6TaAVBjB58XN1dQEUJQKLcH6oGyzq869puzo1z2x4NQYsDhrfSUsB8gLFwYSJrdFRw5r",
  "key26": "5rdsEx9wVFf6kwq1AHEv5apoQ3xqQ8Avr3L7ahC4WXKjwRbw7LW5wMck2iYVDi41TmPsZXhnad2q21ungoCVZNNo",
  "key27": "5q15BtGCeJvomac5D3VhGHUAzQRt2SkfL9yTGarewC9kiUXbyFMtbQkuxtcj4nPKouogSopq2mF82Ap1LLtKABv",
  "key28": "3sbA572eYV8rGgWW4NBbLtqnDS931Hqk4panV3QTD6r179gkrigqjQe7apm2qPfFSaA7cy2BHbtVFVDhAWcdDVC4",
  "key29": "54sv4Qt4ZKZB9yr84iymVKdadxUFx1t1NERGQwMcmJLPnJSSjqt2eWXFCMGGBa7qJCPu7SxyFwFDXgVRorb8r4ve",
  "key30": "4fVedtqzTpQAqJxE52AoQsMXaAB3y2aKoZVKJPMXmLNzf3sgwLCYqzv3t3kGKPBhBRJwrcB9qbfASdNNzacTayde"
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
