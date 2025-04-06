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
    "3AdcMWEHMJ9UjcVVW6VSj3Yq6m11KhE8qeza3Kna5uwcXnsMJCFCdVpk8GqoTGcErCumcfmduXuU2JzSkVAfpLEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9f3URseDPD4bE3dfoEGQFYZNpPYNGWz7QanWcVwVWRdpENxA1BQkiriKa15rKvF3VMFZYjtvpMsJyQVNDDqyMgm",
  "key1": "ztzvHn656eTF4VTaVmBWy2ZdFK9Ub6CF3jXTXRzYFUopc4LFQwUxCjhvEN3kFzULsy5RfV6y9e626dNGcoSH3yT",
  "key2": "2a4ja2moL2xZYBHnivvzb6SGggBcS7E86kqh63jP1tyi5L6WN9Bzj6LVoVVDGRK7mtjLs4vXaJDPBYTsCk63YcF",
  "key3": "2kdwBevRjurfYSUuzxQUM2ZTNTBNmHqeFUAvAYkgFcN6BaPKjsQHFaZq1GHRh6yYFz6PbMHGJs3Mab8Rryz3iLMd",
  "key4": "5fmGsgoRjY2PuaEJuuBuFGnXLuioQGi2nZ3KPY9rewk1gVStMpjc9cCKkLYNKEWASDfn5DYz2gHgCoCKrBfp54y8",
  "key5": "4gbc13qq8ajo9iwBLZZL31X2guiR5tN6cxfcDdDRxHv8hhARBCJ58Xb5quqsAtWR7c22FstG1qDh92asuRwHuVfG",
  "key6": "3Nx1VcUUfeUQbmM1iPVxCKuxonn4cqUTssJitZzmpcLDz92577dS4CiwaNvtrgF6ePbHgV7sAmZMX2Fe1gTF5Jzk",
  "key7": "3FTB7PN9ZBNgK8MieGsXr1Gtcv673J5mR8bkeHztwzMPqwBAHc1bNebA2YgVkUGW7yQdqME3wFw26yBX2ijtj47g",
  "key8": "3cVPwx1acEH6VVH9haQmr6Dteg1BFhntorbxtPufmRNXTSa2rbEEEWcJMww4gYVtzLB9chsZLCq7fKLZqbZAR4k5",
  "key9": "4oY2sjQkFPKviXYDM47y5L9uN5AZFofLbgJ1QQaZpeza1DtuSLbHSCqBrxF6eWaDjyn8eBjcF6VkdZRuR5biuhkk",
  "key10": "2VQYUoWwxEQcAE3qd3eREBrBqEhJhpRLLaqwTPKE8q3LfB8iYzfTcHXUDR6Qr6B1kuAo8fJeD5rn9juZ65skPrio",
  "key11": "4yBy4rovD8FCCyUjF6pM9zcqjWYYkAWkLeNhshHfmNXRT2L8Lw9cBdSH5ycHVzw3Fwdjrb4yeG7N83F4w4bRXHzD",
  "key12": "4LTRD1duwYQ8QR6BFFFvkEpFkRLex1n8A7B9J5eBxMqNGFWMam5gG1qtjVUb73PNomXzWGqpzYwkGF1stCV7sPvo",
  "key13": "4ZE1uRDURSD68ts7PLJQwwnNdPjhHx4gPXrjKxKG1KN9MiexDwKsuwZE7EzL5Sp4KuXPURGWnNLtRXsWjkmL4sTX",
  "key14": "5dPARyatQkRxyw6hQNnLGNWP6RcNJTg5dvsc5xX24NeJGev9JEEUAGeUp9E8T46wkpZrDzcf4KY89x6mkeyP73Zy",
  "key15": "4aCUCi4MZMvrwfL8bWutCm4axSCJYDbteSCKsNye2YrDwM6hmAmDBPHBfxihVStQNtwVDGAoQyTiCGcUGVcjA39R",
  "key16": "4sZRbnKTVZ7sVSWUhdkHbg21dRr6Tq1Vm9NaUVKyVpyPdxHPuAEUJJwmALf2pHFyHoQmZn7PwSuaP5XwA2eSeAyt",
  "key17": "5Qr9AvzSnBUyurbu6T92tzhgCQDA7ceyChs8rkjU4twypb5ZrZH6PqZshjFWgsT2qYhZr38YaBKi328fU4NDeaEQ",
  "key18": "5E9JSbXjRrkjjQquBRXfwmxBzNYTBEJfYn31qe47tFjdAP5FnUa2Kqi2SCn3Ed6jZqG9g1a1ngSzuL12qHMdRZKy",
  "key19": "5n3CmSgWW8GF46N1qjha479upda6Pr3uWbUKHaYuPKcJPHP3KCAbBUoc6dK7hqztbcMgnjyJeDJasEmbXnQYm4K1",
  "key20": "3JJt9p2mcqLoX9T6dDU49Z2LF2255cLgyCuhL2t9BSaToRnawn9Y8Hb53NsAJKGota5xT6TYQhVEy7pMnTznEzrn",
  "key21": "23hNXWUPpHKeqa6w7ZKgSA5t7zsV8Jpx3vD6VNXrU1mN1YTgv3h56ruZnpJ1DkpchFQzqwVkt2gSvjuzXW4y8zi7",
  "key22": "U2o3wNQeqvMyoKvy8XBgSDJzo9mC7qQqztX4f4TwN5mKwchumhVuqpbzp9qmruavh17Z9V6YfJzZFM7413p6M3v",
  "key23": "QSK15BwLPfTC8eT5jxCZAcqRnX3ziciN1kSopxt3ttWjLKLNJDuVpBKPz8wqUAywe2MrYKUWJLq13HM9LGVexq5",
  "key24": "5KvT9pxiY3Bmg26fiYjkq7dWqvLpuZsec14vVXJgGa7pvLDSZ7z4haSqibQ1nW3ptCaQFECwngr21iMvd52MLLcX",
  "key25": "2j8C42H19YdGfnWimtmWinfsfK4k9qD3mSwLnK7mdiNd9kRREGEvyNMT7jbPv3gCAthqp6rmsiZu3Lkssfn8p37k",
  "key26": "4YZA9QEvTK3x89nUUg7R3i1T4wYm9q2TT5zPwpPJ8218FJUzvHyva65np2WgZASK2j8BXdtH3xV1DqhwWo53TxEE",
  "key27": "5FLyqPgnBtWsgxziciMs9vMdGPS1VS3oX42KF3DkRfLNz4CSrg3gMwPH1AgeuLKQCQivqQUTVasxNCpvsmN5NABv",
  "key28": "2MnBo8rwxuRFhXvu5heePpt6soMB8kpfeXw5wRczpcBmXbdkm4LyE8PhZWzZ72nPSfUJNLj1CiGYRDv81RLd3jA2"
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
