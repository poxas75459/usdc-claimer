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
    "fRMi8ws3R6t2Ye7ypjryMNWXZA3t1XJfTmzo4RXfjUHC1c5rduCAjjkF3xv9Qm3eyuyRqLmQ4wDKf29joNuu1ti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QX6q33iWbPQsyC4k6ZYdCrQqoNG8fB4KL6qMsZ4mjn1XUPAkbDCzVtvDj3DuTCECaLUYaH4VkhitvVXo8ao7TGm",
  "key1": "374k11xumpwixK5FHFp9uhahQE5CJtFdxTwjLoe9PRkGJaHrt1qE3gQ4ZhnphtVDVmnb9sie5oEFLo2JxaVwyTzg",
  "key2": "XVDEPwVVXwGpHLS9X8E6UnicAvxUksEPMAogfU4atpGPZLiY1ZaKgE1TAtLxjy1v5w2Ku5bwEdfknZADnx1nbms",
  "key3": "3ZYTJocUiapWTuyDpYHpmvhn6NPyMvR8ffiH9Svq8hU8uBASgQ1DLSXTqMnoq6383E7jcdqSwAG5iAs6o8pAVT5s",
  "key4": "2aTpfgqFKDbrFdUV8uphi8TDin5w31fbM9DBUku1nYthZ47K73ZwKF4wTWQqDCAH1tHX6WfsgqRBDhzNQarFYvtg",
  "key5": "5whyXq8LbTvYQpxfZfQc4nFP6gvN1c2nZRrx2M7xhdMbEYrdmdKJnnrktpyUy7XFScQ1iRtphcxCjwLbimpJpy3o",
  "key6": "3hztgMHrXAJSCZDMAAMuZy9PtUNiEVfpdKxBzJfVq6CAbPa4zNi8t9aqA8ijXyg26qQYgCVuvdJEdfZVeGA8r9QS",
  "key7": "5rCryEuPH3XLhyfGabZ9wyamaHrt5zbamfZtxgNdCWptRqkSQDDy5GtwfBtRUqQmgGTygh34fbaBxjPfSguETo7Y",
  "key8": "4919c4UgMG2Ec1YSgGfjFbB5vGYkKn4YAC4u1784U9DBUr4fg12TVxzFLtRJXynMadz2Gj8i9zuS7hnKCxLtwngr",
  "key9": "hbqqkaiDoHRRrXpqfqfXE3ovUQnv8RpGQhFpfH1mmmde9e7HoJdHBFF2FXcQVXcEVBkf2aJUGW3px19MJCDi7p9",
  "key10": "4kbXsqTDjG99my55KCJDTdm5sxAQY4YnXJ9d36dPKWBqshsF4oMxTasvfAXTbewWWUvLt9skEupAh1ELGqj6Sf75",
  "key11": "5e388nQYkaBW6gyGkAcjtzgtWPNiB5ncUQYqtgEtVC3xddH4hRcFgLcqYmiWNVfNysxGMXyf1VUAnCKfHW5WVzcg",
  "key12": "ka2HG9syc7bMxeHGA3jYoEuxjGAURKKz1iHSyDyk9JNmgkJre7M7y6PG5wGC7WanyXbQSyHcYpQLV9dd7b2bqFc",
  "key13": "3ZqCh3N8GeaadQ5QNqV99LSWFD9H2c5QSAHMJ8j8YzcaoeJMhmo7i8JmFJkLL8yQA2kJhEW3XDnVaBJozbdeS53q",
  "key14": "2YiqRv5xWiu5tkU4K6vLJkaQCws2mdkCRU59NDW5HsQxmA26Zn3Nc1aawGTX4VcAmJWnmmCVEmtWDY7scBVpbX5L",
  "key15": "5HxkFVEeojkKEhLCoeNtsU3hSoY8CS4Q1V7gsaCCEeosZJfxaYJfXJQ1iscnkJca5K7twGF64KZJZkvTbNbn66iu",
  "key16": "5SNngHsqveZXAxfpnBnqajFuPoAPJKp5fK6haKoWXYqMv8Vk1GEubDvRe6mwAVk1vV25GknA8xUuRJnZuBcN3CUk",
  "key17": "4BkhYSUDnMchb2H279aohvSeUqZR8hTt5x4LeryhsXUU6KrS3fL6NE2TWzgomPUBfbaV1r4v1ttzVd1d4CHUR1rS",
  "key18": "5jb1p8WXZ9kmsdcsiJXDmwK8exz1vVbwB9JJbTTuw2ocubJevbcpn7vKBJQYy4LDBiJ4ihRP9dQnnau2PNBSMz7H",
  "key19": "464hW5yG726kHAdSSvnL8BfommiWpF9sFmcniZAu4GGaTrTeRXyJ1csDSw78forwndrv74KgZ6U95iuAYitssBDq",
  "key20": "28cMbAAXZq85ngvTGbaADQXKQCK4ZEk31TmCytfG2xTuu9518YA1j8i2FVWmYNJvjiVhXjVnHtF6ryMEATW46cLg",
  "key21": "TvXUVD9is1bFZbQNUwSrsQL5bzoQWcLZiE8trJwpVazBM5JdvzPk7WSvUfT6eJomcAWxnEhgiZJd9U68MNWxi29",
  "key22": "5tBcEd2v3P8j847YzZX5jCyreDphfP87gH93mny3VYNQBhJPLHTpeALMfuLcyzeASfiyYrXcKA8JWbf5qnB8eS3r",
  "key23": "2HA61Y62Mr4jPakEqJeEcBddWv63PShbBzQpmHFKMkqBZtANerNxbSNpcbmrwoP1Mjm1SD3LdwQPwuZdkLHhH8Ko",
  "key24": "RNZ22zo2QA6d6gitzkrjiNYhNNnhf7AGfckd3Z1nu9Wh3JqDqCyLBG2aBGZbEcQGu1d6ARBJVsFghstRXXrawLj",
  "key25": "2ZXvH43q336Q3gYYQb8fEa8G4YZEujNdEWXpX4sktB15gGhm3tyutDxaG7SpXfWhc2JBcAPrubnwhq7CwDc17oDu",
  "key26": "5GET33zAEwwoAGtPiiBn7MqrgVxitUAArEFq3XxC8orTvRSB8vwhw2yS1i43DRhSU5HyUGwLh5EjjRWyuMqxXQhT"
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
