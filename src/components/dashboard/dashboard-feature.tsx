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
    "4YCL2ZqcCarMgoaGqsg5ExQKhSQTMPTf8zGQXTJ8Z3Vm1QYrGe97z82QaxJGrx4JMtQ6uPaeWuGsF7GTetoMRJv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JjcfVN6fyZebYP8DcyP2co9qrBNzzBHsoeg7n7Xj9nm8vJKZ7RCMwqnu288HkYM3kWNsKgkkegbKvsHjkhAbgDi",
  "key1": "3n7W8Hypcth6kpNDsmsdjcKYsZ8PWBdJH2haNywrrDLR5QxfodqU8AZPiBUk65k4jJDVm3k5PhcrKTCNJcgEZsZQ",
  "key2": "67ghMTbwra77Pz1rs1ecHqJJiBhXMGJU3S5MaaHXFYUzNFvEzfSnVq7ufpLJowSLGnJykZ3QSBKvFPWAw46s5Ybx",
  "key3": "5MsZLMS2QSNbxZzTxXF6tCSvq3AaqisdRJL1LgyyNyvZhu1r3H3xWpexVDWJLcvLWCPFi2g64NR8qRjNs8J6em1j",
  "key4": "M7Sd9F5uCMDQWn4W7pwCAkdwLXpF6RsjCqGxgEFLwwXQ5BU7BPtLhJc7KaZWrg4KwS82PMf4ktxsytxn2jnEe2v",
  "key5": "o2UiaG6v8dDEpr1ks4frAe8dvbyMv6M1x1TN5u1RzkWn1i3uhNgALEmDuc9q86pRLHGLqViuaVMrQEjsPiJuXDG",
  "key6": "6sD7hjotGYNGyLUnkSDMiHegENG1JNL9QRggjUENL7eiQSSzxDRbUWhg2tg93bitFqGHoKSgE8Xn4nnudupYbUL",
  "key7": "2jh2Zn4YsySGD9p6emDrfgZnu5idFjM2N4yUeSzFetekbmWwEmYkfysk6L7bahGqFzmxjDG78toqUxmZ5urzVUgg",
  "key8": "5r9tYJ9rHATXp8eRoVgN65rz3zPse8mBfmMLZEapumyziSWxMNivdaGzhGDv9p1WcmAY8Fz5FhzF2TQvu61ArNDb",
  "key9": "3ajGCGYFJJakxGWRwnUvncxZYi3D3cjoeM4mv4j353May5PvHyu6jtiHN39Zm4Ao5wDDPVatPN8AGVzSWVPxFTBp",
  "key10": "25tWCv9zuYegDFZn9p9CJMkd2zo1rubVHGUKeEGQHroVsA8rm9QvLFGyPBZcEcwAURZYZiqo36wfL5hYkP28N8dX",
  "key11": "3Doj9H8NycMjCS6rSPnrYeSraNY9AUE9xswRnsgnNofjpcqcPzGpQxm1d4pzRstqkBARpXn8xBmgndU9yfgQ8kJm",
  "key12": "23FKyZWXViWc9xhX1SkjWHMxdHK7Ppv1LWF99eHgjHQ9bppTKGtZwoufwadd5iYAgGRW4npg888KtWwr6oaB8NdR",
  "key13": "UcPqYgHzZbFeJGVrdcR7Bz2s7xK6fFHwQmsnVVZA7pp1uG26QVavoY1Ya5R6ecT5UEGEDeczzodhRrEFTiNNbTv",
  "key14": "4VENvHYm6d7RdnAKHf3SXi8LvkHCkW3c8gRELUtnpFFH1wTvgUDKqJFQWc69GFCbxxGQ2n14o3N96tMYp6K13GfC",
  "key15": "4axnERjqRKts52M1bs4mcXDjPKKqBncL4VGfY8y7F65WhxRuur9a4niCxp9VcD4iAiMNuua8Bs9JUkjKqkvYko85",
  "key16": "5FpgA6RpBjMgrGMoDcjP8oBHNX8j9R6B3TPUTrubmZnRLzLZYxtqqoZu99WiVHPb5VMreZM8Hu244dWTurYvXYRe",
  "key17": "P1n8PmaBjdBHKZRh5emV6T3ysVqDbEBhtXLYvX9toKhQGLNSui8pK2LUMeCEuA9btkSETD88Tt7i3yLbX9xkeQZ",
  "key18": "58wTdBYZWaKi8jyVQrdox4ZAFqeT2HvUQ9eULpVSuNLuyNVRv1VW7KsoW7egENxFJDEi4n7wgFRVppqeqdE4Yq5x",
  "key19": "4MagjmrhB8WDUuzAW3rYNfY4jxbY9BsBXskWfdcSQrLvk4QWuw7U59P58hpZ4atyr2kbWeZcui6MxqwrzBpz8VSs",
  "key20": "etsMWp9WqBqqwXcucxdkEPpp2qCys3ToHBARSDkH2DchpMfN68Mo5fhZ7X7ustXBeqLhu3VqJPmP4HD1CTDfiag",
  "key21": "2kBGrzbAXu2hxEwtQpZ1FnPWZwm7hkAD68f9BQvgTkLbC3gcRdCiPUGHT6yXMF4kNQA81FYZyP3qboj7AU1Dgks4",
  "key22": "3MeQ5GUnRCpfFcGtnMDHdsc4V9KrJTHhffJLHrgkwgZisM68q5FCv9tbh9SagGnU2a8xJkXe8H7C4vDzzBTduAt3",
  "key23": "4mLzAma5AaEqcmDucu1dzvuKAyYLd39LWEV151ARKHG1JPuDFaNQaPu13UNWehDsbH9GNzgjAXYRrDTftcUi6Lpw",
  "key24": "49Fov1mGUM2kUqm6NN6c3XRNMTxByXoB87afEBrSaeQHuzYxhgxodSaL3X4jEUitkBL2MQkJ6683C3jASXBwNHUf",
  "key25": "5Ey4gfDDyEmuvsoX94TAKBi4UvJ9Rhu8dgKoYLbfz1asyUeBwpuaZdBzj4vmVLQjFJFSa6TLwHkFdnywMXyPtSS2",
  "key26": "2GS1rAQqKEUZSukRn3kCJcajP5BBw5s6k1ztLHAV41QN253aR6SQmVXMAb7GzDAAGaQfcC1ma9qQgHcYdFKfHX6b",
  "key27": "3BB783BqLcaEN5yTnXgVFmqyvoHnzrqJQ96HGoLmhEY5yhfH7EXmWUwk7r2gtiEfMYbai9jWQzrUHZwDctZJJqNp",
  "key28": "52XXkqFVv9LYNtz6tEGv8tLUf1Ec2WMZQ2Ey1DvY6WkpEmBAKwsfd2xbWk3FyYwJzX8xRNYWwR1xdobXwW67Undr",
  "key29": "D89cq1LeEuQbyYGcFNpKcjNBW8JC9qBCxHcD6whf3MQWf4GeZsHa8ZiSWBjnzTfNnAXs1BLsBce8Q9CU9gyfiHL",
  "key30": "268BGFvL84GpHWR92pBFEqrBFC5VPuUTFcajFEmZwFrTR6mgdSy6p9Ag3WxLzg3oyKXmRZpbSpNKeVkrLyLH8zQC",
  "key31": "4NHrc49tTMmbu84cEopjdevKpvPgpTNiVFMhVAT5PTHZeZnKfvtDgz3QU3THWih6Krc586o7cUZ7suXA9fGemKUw",
  "key32": "3GUU9HDoS5Qyd162jmrxyTUqMGYU6YcJzPjSRaXi7d7XRLUwgz5kFYJsmLd7K85xM5rUDornPGRwsSA2CW6ttETE",
  "key33": "4F75gQDpa8UzVv1yMMHUEWJMa5B998TZLMc5kcHNPi8oUnyVfz3husk9Sw7PHW9f7vZwguMnVRuNTEBhccku1svF",
  "key34": "APMZiuMRB3ptRC7J6GTwUoc16yxC6GLCubHuTJJx5Ei4aDGiUss5fkEiJ2gMmCLxKRUaderxf2KAjtgDZLNzrLK",
  "key35": "4Kqimii9Lk1FcYahc5F3KTrdyqkAUhXVHxvz8RUbQuaf9fdMSRcfT149jVTo7Wydaj2E38ev3XCtA266r3Drgdoj",
  "key36": "3iQvDxXjdVSoPoibLsMNakBgQJFWHw3nprgiEjR9k7bMREQhgVmEX5Faw7PcEANXtDMicvSbbuGwr8yE8ThZPW1o",
  "key37": "mV4iWDSdHgwet9u9YxFhLETuXZmiTekigwfZCaerucFWRSR8JR3ghy8CZrdV8YJv24uNu4cJqFvsoZWdszD4FCc"
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
