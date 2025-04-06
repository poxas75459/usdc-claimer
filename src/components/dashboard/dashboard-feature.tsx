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
    "5CHMysPihh5gxPBHJMy2UNhzsqCt9oZ7aCKLZP8NZcBxRXpJc59pBHsNKbHBofvFN5kKfejRpC6QSfaNeSXExCAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VpyTFnotDMBagsBPaNhqSyJGkySKA7oZF8d1swiJn14P6Mpc9FKFSAJaXKziV7FuQyz4bVvqWraGYBTKm1pCagV",
  "key1": "3RvD3YWKVBq7p3bxhBA2z6SetDa5gkoEiy4uM6whPTt4sHdfDckNDCafas82kU8kk8MWWdNDEP5mJCXeN7iowia9",
  "key2": "5oXw8zZiiMcQVhsQhw8E4jAAMzuwE3QnNpMFgmsZrHKyVbUShBqRc75quc4xqfPssJjsoYGQGyfqJKFgNfcjn1NM",
  "key3": "2YHi32BEbhhk9VDENdaXQUGCPardUwSSSWhgtpBY6uk2uFTQJFPBYeV7WdwZzJH6htCx8dHXGBf6B1fyWtouN5JH",
  "key4": "31RkpPhMMoswwgjmw4mHqrie5KAmoo7Lmjm3NoaiuYycvoBBNChs1GzvPVKkPFoPRQH1sx4MG9MxaGoHwXZaSggH",
  "key5": "4xZk1peMkcUYRq1hUPGjLoPYo5C9wkgyWXgF5NAfUmG9xMNQBqs6ECrTGgwu7urXK8E53EvSRsT6R5Mu6HSh8Lko",
  "key6": "5Ldc6gyzkdp7LM9R83bwazzTsvG5Bnoqu8XmW12sysd6bokgB9jbVe4AnVPueUEoBU9U2ujKorQ2MTS4HV8hxzDR",
  "key7": "4jsUWQnYmcQCcD3QXDcs4zgYZ28q35SuBhJycfC4m9ZhosthTfNwZ5svPqHi55wRk772jNi6YYGGrEVsqtkSgMVz",
  "key8": "MViK9dGsXikRur6bX7FfxiGdYDaeUEktHY7wq3mSkFezeWQE4CbCvzzCKCgR1QRJCC3FfQhXPTtpqMMJscWgXzU",
  "key9": "5opq52K2qffFukHQokRKEVc8HjYhZXWGq9xfdsf95ummKWXjuV3PoAkweoV8n4chFpVgdsd1RmEgSAKwshPSYw9z",
  "key10": "tXmR2tuSP1CgbN1kN4o1feuEhWXivbrtzQV2a8ytYGP1C61sy5TJ8NyxNpxE8YKJz6YH44PNT2DhbR7DMQBD3qA",
  "key11": "2gddqdKMdUbDBFK1ZjjQs5fxa4tvXzL4ByrRvBz8ywY51TbdBe58xMZcUhakVqWWajYk3R2nwhQuHhTxtD1iSrqs",
  "key12": "2sAE5kMvjb8ARQkxoq7dJzvSfRYSErLPg7P6oTrC1yfScFmNmpzDAjvdoysxYqUhayuH2tTJyEVcegbvyZZ3Yudj",
  "key13": "4Pqh9Jzvxuuc4set5Mg1QDU3PE8P8SM4n9s5wcFkSw5U6pzim39sX189Zzry7D3ndmvCVe6RE74saaGMU4JtGR8F",
  "key14": "3LpcDVPVh9VtJYtzUEEmTyAkPZz48oQkQvwcrQ3cTH2VbyCDRFQxTg2HLHp5NLUv4ziykP3UhYNwh1fR8XP9tAKQ",
  "key15": "4FZVmJGzpPpdVT8B7ENcR2nttToK4oys9jpWTznnnvyuruYXr8xauJWsohBTDFVAATUr1ZD3RcMJcSbGCiNCZdar",
  "key16": "2vTyGHYHxuGxdMEz1xix2Aw7kpQTYuFhxjhtUzaZ7iHs5oCPLS536wMrRf5NLRC44kyDmw7j21oJ2vm9zzKtt2AW",
  "key17": "3vG3aF6ts38kMhUfAd5oey8Nk8SKLaLca5GrA8BEKFT6WwKVKvua5FTzCne5FC9oG2QXKKxebvdvb6H7W3sCjuv5",
  "key18": "3rUYRiGACBoFbhTUE1MuZsuwgXATyycrP3TPmtczDVd6EpCj5ZWPaZ77CaB8Qk4phYLCzNdptBgvD5yDe9wNzNPT",
  "key19": "2Sxj7DpriGf6wTgvWu2mFrHwJ2K1DHhyCBGaHU5pVuX9XvjR6wSf4hBLGXBHcbd7CHL8UWRTo7s5NBX9gFFx9fD2",
  "key20": "U1rbbuo7ideRa6j1r6gaao5C8oUXjVbbJmRqUC9WfL9bDCEqeceohTMK4duyLbxQEzYxWdFh1poaAHT1Zx4NHCa",
  "key21": "XN5A8c9kfa4fhMeBkjVTX3bBEZarM8Fgrb1CVJKjzC9zBdgb66KHPcebf6VmjSJVMPdqXMKin5fydzxxrfxnYDw",
  "key22": "5VQGLC48jFHp4s9jWrc1oRZTNTbQggzvLHvHva7ha2aARmnwQqf2Zqqg1QC7GmsvzPe7oGbQNQL7L8SgFSH1w4jf",
  "key23": "4QMezFEwsJVCmLG4RG78aZLkaneQaWCDHAQsjmxK9BSPu9TkaExsAyb3DSvcVXKkjFZC5UWkYfyK5VgExDC7x3vx",
  "key24": "S1UoPp1Xt694m7NiTMSmV7dPct2czLnjpN4wbsNnjNgmwKwQouCZTJ93Hgx5paM4Mm5oLPfQJmnXmKUdc4CWQ9c",
  "key25": "n28JTqGj2atkfF958Fo8SfhAZo1KXxYTSTGYbUeegxV6mvRzru6c3L661zEmgFYCnMjLJha5k8BbpJ4sEtpEKod",
  "key26": "5dS7K9hFjemgMKuZjQL6nwEKdWFizDFvUZoNp1v7Ve8DHr8myYGRgtEnnPU3iJqfZuTtNT8kjCAhsBo2fjPucT3G",
  "key27": "3YPASgLBTbTHoFiwMuiQKk2ZgsDmaiUEMjSi9PJDwUGziaKaELUKTdopcVYMXKxjyhbKdTytC3X1voHFwvNbpAG8",
  "key28": "3vE4MNnW28WViMLYkxh5Nh4pNsbo5A4eZxhkSDAXucGNHrwY1UZ2Qee8ruLZm9Q2Ma4csy3oLg1cDykRSbptHdFf",
  "key29": "4tquCi5mHX1uHZeUUz3t9KKBaZjdzVgom2MKDnywaTCDUN6pBubTks7oLchBqeB9ctfCvQwzjqkcm8NK6F8ymLie",
  "key30": "2KL6wTsRF5QS8sqjZikrYsRdRT5Fjj4sYWPfZ2k3UH4NLqJ1B5AchDWSjb5twWyJoR5GFB1on14QHjihoX1dzyCD",
  "key31": "9Vst5Hw6z4EeZhCqmjYBm9sxs9Ri4xC3vqEmq9nLCPHHCephAT9fdYgsruNZAEBLaN6J2zdkzqRgyRNu7FqFQRE",
  "key32": "2et963DNxFzHxpMM2L3e5U15cNo4baVGtPYwDQ21qGZVb4EAqUVAys4uf9megsQufYyaXH5wPF3TJEvJXJ1riwYr",
  "key33": "399a2vUQM3KYAZzpZndyPp1WKktBCQvSiXx8kHRB65Xxx64bM8yGbM81xjhxe1hqnskM3aM8HrP9sed5tWzwgDPV",
  "key34": "gP1Dy1w2FW3eYtrWS6rm3XXKwwyK4f37J7tjkk86MkLYoGMiiuekYn2ybmYAybkYVpViGgBuFRZX17FA8dUKwef",
  "key35": "4S4rfofyKaYsSDBok4JySEZNfwAw73kwhKB4ksWfNGj4hpVvodFATsmh5GrDXGGtyqkHAztoDZXvKPZ281jqm7Zt"
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
