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
    "2zGPDtf65wypqUxJSbCF1eG3eLZrH4nrEpAq7MaRT7HWEDRcUZ3aumM1imNyFyTN8eyUgp7JUpF1n9SpmLHSuoqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kyKu1FXFkHGDsW8gZGmkLQpGqEr3DB8j9SAoezYMnjCcv2i8TFeDV1Rhqp7KDBXVjQgQ1wJnWMRSvvqr3p4yx5g",
  "key1": "3tZuj3ZKjYDVJ1m6RJYTGGxV6oxyfPSxjNWJ8q9MEMBmdfFWLEiaphi1a2AvRm5fqbToevwYsK7mH7baopUVo1Le",
  "key2": "4b7VpFkt3qAPveaF1kQofpPtWbBJoDrC4oL7wzbYP9bwxb3TcXC5PoNzerJhTB29LABJLhYJz5rZ6z8cMkMUHeXZ",
  "key3": "2MNzc1jGDWRCBaawzN7GqSGm4nznBvUc1XDX7mtYT7rVgoZmAbmdFuAkUtw7EzSymm3H6CgJT8cUF5r3rdd1j4Se",
  "key4": "2YGFRR6jggFc218T8RxzALiyJEiqzoyCEqGdWjZPc9bUMxeMkXsaP8FHqnXnKq4frseZeaRkspHokzYGWewgJtjK",
  "key5": "3PJcBDD7Gcq9RHrhRHd3hHzaW888GcryFUhNmBMczkj1sEznrNdtZ7ZNTNczR5QQrUtat4Se8NYt5WygQCbznVbU",
  "key6": "5s7mFV4QDEyxMfY6EAjKyWin3h3ahMwjQva7nyTPrsNP3Q1Ua6q6RLnHZx8e52Ck763jdA7yTteyggitoNLkurVV",
  "key7": "2j77y8oMwSBRiu16A2cK6FzBZq2cs9zBzSfWEediyB8dRCN3efMBESWYix1a5b3KF9Jm6QJEmvFwLaZn4WMRB5Gm",
  "key8": "29YpRoKjs16e1hWLtXqjNeFjsTYBR9DncHBZTNUpJEKW5H7oRa2i5eKozW4Laxdq3qNcWr81msT9fU9CHfH6o3Ei",
  "key9": "C7CA98EmeUdPzhhZPxDK1u1UfteugvS16mFnWPZoxSjUtj1bjXRBbjhyadXS688PiGKiX7NSJbzvFrrnn9Z6uwJ",
  "key10": "4CDkjZ1Ft8u3vW4LURdx6D7d7vf8wRUHPiJmtqNe7CAXbKrLCXGMR8SFpYF5RYeJzCyTWQ5vpZLGjjnPJ4gTaRC6",
  "key11": "4tBUgE4ekgJAK5a5n1VrSa34kiDGqP4F1bgydUsvRU2hxFtNY5xEXfjUULqbtUrYwmzr3ty3rB8jztXTX7s7GNAb",
  "key12": "2LBkppE4V8Tg6SbpHrXJ8imjbydh2MS2BzVjYjsiXyeA3aDQttEwXXML52kwv6cP5Z8ZwSDZD6oHniUic8JJgXGR",
  "key13": "3QifS972w4j2TWCYYKm3KtqgnWHJjXG59Vhqqca7Pa7EbMvpa4t4nrhS9rmigk86nk2HUFHmMNPSGEnpiR5mjqeX",
  "key14": "4VwVz5YqnKQfYuSGBAdzbXtDuySg6DEcp4m3skDrWTFXrkSvXZp7i34RNSfijgAXRQxxuKzq2rLKC8Cpbp2rJns9",
  "key15": "5EHeVApTeeLvnBxnxDtEqhKgBEvTrFgHQ5h4ze3EXttwh85swoX51jXSs1Vkj1x7VXNTZBMrVpXn2yb52s9a8D6Y",
  "key16": "3Jxv6n8JmsjZHBnDkx74XxdJ7YVoJPAphLhcWZLXiYnyMvAtgfUHfpJrvDedLiVEPexvNPzWVgD8msJthU5Qyt9R",
  "key17": "5BriYSzpKFbkxYncv9ghC7n5bnxTquXpBxMcoprGgBqyx7sQgdRNii19ku9RfNzRf9f8yaG98nHCTb7qVqR9zFYM",
  "key18": "4j5LLG8bdXZ8zVaQuwrHg6bqAsFvSRzBMBrdMR8uA22BygCUk2CLqEj87CRDpYQ9BKVuQAubHAWAgj6Rh2w2oDkY",
  "key19": "5m6gJsyeWVmpD3hhQmiQGbtCR4jm2Kz7ZLguPzhRvDXtQpjus2hyTjVbQwpjvVL7gECwWPUySKKqm5QbNiNMQAi6",
  "key20": "2SozpaCFRtD3vW1pFvL2paggbAhixnrJ9mUPPa57qkqeCpTmGVkbk4uz5TkDRwVve384PeWTCpPAL6HT8s3tTT2H",
  "key21": "4uQxsCJiT1pczk7u3MumvW95sYvTTmZFj7KNyDTptuWs1sft5GzRXDDaZaTEQyCQrbFaFomjzPdJ8u1UzmFzVrgJ",
  "key22": "58G7mH93YdcALu5BKj9G7UCatSC4koNEQdwbzQyDUAdKubGs3ybmJ91ufwMno9ABCAHfM6NjQPCbnc27g9gtrSSt",
  "key23": "3dB6smBGvMhHEYLmzUUrxCLzLoLorNEFVgReLii7HpvSgAZjDdkgVq18Htre2CFyT7qPKoYEVWcgV7jVHFiCFUGM",
  "key24": "41T7LvyVpRmNYXyuDLdm1hma4xQTmmExWEv8qg9FdY6VoTNN4rWuQPg5iwencDXs2X9f3qrnJmT2tVUbRi5ZDzEs",
  "key25": "2z8nkXAfkBVTbfp1oD24BjWUW3htK3mciLpb2qPXEkrYFQKMQwQbcnHzNAQYquUFH7H4M4kLrPwrZd7JHebpFXg6",
  "key26": "3peLVmBcE4Yuo1ub7JJUd8cjAXHMW5M2sirtKw4tCBuJJiTw2YTkjXDMMGvi6ab7NJB5hzdfDWR9vjAZKxAeGKYW",
  "key27": "5tw4Lf3C9P8u5vVF4gvNV4oNoXEfK7Bm77un3mQ3GpokToU3GFGj43CdpfbUMbyDQbtf1qBVyXPdKzZjP6b5TEMh",
  "key28": "36bPjb57MdgACWQ3dGMTnLy2A5TgcNnmSFuEcGYkshd1bj1Cc6aegqUN9y6f25BbN26XVW5JHYu8tmmXH1UU72o7",
  "key29": "aZCq4566jHP9AEzdNgC4xZkYmPRG9uZt44Xnojp9GwWhr7MWBndYA3nRgpnMZN6yTtPiuhGDQXpYawEZQFvRxY1",
  "key30": "4sFskxCzysANL8bLydNSHA7yNTTFGwYH9bXAHvj6o1RWGiic7DZtwfcg35Bq8hP8Bo3xZPzS3c58DY2pjP7EJHx3",
  "key31": "65TuFjGQw3MPwTMCdeeemeURogKnz6Fi74j1WvWpmfcBhZVPtpehkAXpNrRK78CgPKJEVyvsqbZeUbbn4MkJYj1u",
  "key32": "5Hfs1ygCU9M2H11fxFay2fW7Lc6GCrQ7B1a4AAQobgh1tr572RohRZK3touNANd2SKDurRWfKrvHBQ8b496A6a2h",
  "key33": "5hCv4kfg84tvt9sZbdc7esmkwFuU2CQc7ri2iGcXgVPCW68WAnAXekLysmnLB1tRuJ6EcELzhoMNgM2Fo6tkJ4u9",
  "key34": "mmdCuPx5S7kdJcA6QTzwDRdBaoCxi5FUxwbHmkP9oyVyCihv1i69tkmSHA1gtH9o5jF9LvtoWfaYXdnaRXDGL34",
  "key35": "57MM5hd5PvyrRUEgSCSHm4vB9XRdLVEVCezwxB23qoFDDqhk4scewVkz1rsxrzmtD9zn64ZNZ6PMruYNZpwSzSeR",
  "key36": "4Mv9S2UuchAiqoncw7w5pGae7ZnkmEiWG1moeV8xnXF5FwMQJEaHg3YDfzRC2DaccERA7r4sgMZ9fkXMqxLWptko",
  "key37": "2S3S3AxaWxaaG2EcGP45Ad1oKeEewRUQJkgCLrMubv7fBT4vaKdhDzx37662DC2kWk2SsanFHWPGBLdNPSwQdztC",
  "key38": "3q7nfoYYNNUcEwV42iXfEaG3MnNPTJ1oeE5LAbVs1Je7eDR1hw1ZcfrVBiHXdDZb4VESG6dVM6Ej9HEsgRCXyFf7",
  "key39": "23joPbD7RdEhgbz3c2ktmvxhShqyCtH8nbCCM3zm5zAimpbFJiAKyJE6hcZeU42JACVAKjjpWp8V1eD3DUTcx9WB",
  "key40": "5ZHTogEaB5BNcAyiHWRwpMWZkxrtCxa9dkVQCQihEmof3Z7Zyet7UGXpNTx4Yh9rwM36PG18fXRLa2CtZTH6KKd8",
  "key41": "2WtASq5KD77shcsQcYjyh2MmrdVGKmG43jywRTyVYutoqZ6y1jBpHGVyDSWc6cofxAPkY9ALkr6PpxFf46AsvAUJ",
  "key42": "4E9jQ2RcvjsqYn8MtuRteXWEKd4NXxmrqWLgeSmEqx26SxryKkLrhsFHjwxj7pj5eShCeCsX5jh4avTz733BS2eH",
  "key43": "3BtPRwvzDsQru5UuY5AEx15cAhBBq3A4TxDeRZ4nQZV9WB6s2zwLaNQEvPUq7tgn9Gm6YXTTsCLThdGsTonoMEHk"
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
