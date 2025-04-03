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
    "5hDCYjLANK6P546BRyHgmRYsSTbqZfgeP8rajqmSL7xgSZ1WTkqDpfszCmjhBxAWmH1gwMXYtKcvCpxnTdv5NxNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nd53SwJMJKc1cmmcCXrpnVUSrxBymfJitx3TqSA9hY21X2WDjf6hUhEyNQKpxSwjCMNXu72utZKiv4ELGnDjwSd",
  "key1": "5xHcqAnJ3mQ2rik7bYiPa5wmJn6gvoVkWA3LpPps5vEfSdMuta3YvMWFgD6bkC6FXLgEHRYTPw9vztyaM5TpgzDf",
  "key2": "5kvpmdnL9RwTYAYnUUoER3svWQt4VYtozDCbVHgEsmoQfESFHuzYxYEiSuAQVDTDeDXUo1JbLGs61Tf8NxpNqmwr",
  "key3": "2Cn2g3yYhk6js5Xaq8osi68dz4ypcnPuLALeS7UPBEyVWPdcV7x2sNgzr2oyNv9Sx1CJuCqWsSVG3w6xQj587UY1",
  "key4": "22Z71w5gzbH3bznTntWivoV7E6dH51PoNvociW6LLZtBPub4Cp1bf8cygz826ywrxcCBX9NPvspyBwaxkRw5tYiC",
  "key5": "4q6cWa2Bq2ediYo39d7AgRYyi46YpZb7GGQVtbDrcBSXZX5xyx4MkLGMaRTJt7xoSFJNDC7MRmgjVxJrcdCjvuzP",
  "key6": "2LTn3iA8bLJZYM5U6oU9RAgSNuBPwjwZUDrpmDWixRtu1NaEaQEhFrqzz8Vr5FX1fy5azzsfEkLHwC9yLcYZJGFQ",
  "key7": "4YhYz3Q32UMt9KdDSyJfzptSrmUY6sszv4SRzHp8R4njPTLwBFcB4JQKuZAqt2LqDKqMJStf8P5eAEf9D1HJU2C7",
  "key8": "5y5R88xJqjzwMNXss5UsqBeX4vSmRh1vmq9eveZVxeMfQenMBgaHG1LQ6JFVcyCFVZHek1DTNPgUi2K7eriruZyv",
  "key9": "57rZeqCctP2nHGWe8LG1HuEx8ojQaoXp8oWZrWdpwVbVWGh7oHKbpCzr1eVwYdHA5pvxfZrXUuuYZiuv9EChgUFy",
  "key10": "2hyw6kFDn9yFwU5GKWjyzAmdcbBAFgKw9b4JVtXdNPiuoLb8WUwxwNme938wzgt2ucecR9AjJQP2EGdBQjYgUCUK",
  "key11": "3U3UHHt5V64sopzLdStmWwCN91rX8sJfBDXNELAAFJzHw3W2oRqDZsCnGFBEg1NU9RJ6QCT1S9TF87LuXwTu3sc4",
  "key12": "5JEwZPtC9b7Nw8Zf1sACRHC2MoUR93LB57R7bgs3ExBi4jtfs8PV6fuPknTfYAiUEV1qDgPKAM8S4tetmSPxkRrW",
  "key13": "oEzEZjhKgpQ9rPx8Kf3bWtMmXwBVcwQR5EgcN7xQHAHUhHVQKLa3WQwSKko9qm8UVYaH2pLoRYGTXmGR6JDzuZZ",
  "key14": "3T5CaBB1uwGbeDVSe6fk1QS9SaRaBbJz2oiu2UqRvnsYP5CLmSAsP9Kn4M7K5pk388BDhzYuL9mVw7YwqCjiouw6",
  "key15": "2kdyf19YBEZEusTULvzHzWVgGT2cUgSCWrKAGQgtmLTVuheRBfPeJZFi33P3gDfMVNkgWFhyP6WPCDTe9etmCq98",
  "key16": "4t2Sd8RPGXw628pp8TWcddBDNu1cnvvWUrSuDC8UiLA7Phroa63xhvmjjhbpCzZSFM9xXiie9xKMvNQbotgAHfKo",
  "key17": "2n5xJMK32GV2C3T78mLH2r2LfFAZrytPrxZsXEF56xJnV8J9RGUEVgUwRRFBmQxvNr19o8zHJf2XzfvbJ33z2EwW",
  "key18": "k2qE8UV7a9q5v2pbKeN113zeYket7eRiJP96dWfMgLtwzgwEdwGTkv7R8L4DEV7AfEiiYzBfKFbUwaDunZecuXt",
  "key19": "2pj2rieLgQPnU9Zcv2b2Kr7BjgLqs6igbv4uyLCcx57msPPF2hVGdczywLi7MJBDJoL9Ra86q8dUgbX3t3sJ5YJx",
  "key20": "2QvcHCTt2NP2jpHSqxYy83Sv9f3rUo1r9HHsr9ZxPSXiyaqRxSo4CnSqwY9LM4LUVCB3AaoYNWnXKyrcsTW47g6d",
  "key21": "5a7TuZauMcXcTq57jxrU8A4Cfxcu5bzhEvvG6rWki3NRVmEzaKXduEsM49NxsNtjHpRqMeyddvYehUZS3nv997yv",
  "key22": "5hYBC51jHcw7wGPci7R2jMMB5srkj88og9Y45396VaGLEyZrV9S5MWMPMw4U6gW1k6b6jhz9YZp1KernhAHhmary",
  "key23": "4TfVGmRzv6Jorgbju6uxGfxS7RsR5WaQVxoDctyzx3Wo9LBApQih2S9meFC3yMgaPk751MP9i2stxDhL91i3XKSy",
  "key24": "2RpG6oBraaMjgEbT8xJTy4kjGRWxcWGwaF5XLvyEHVH19EtTjec2MQaVn2oXJawtmnAa2x8nvrF77DP9wq96pzVK",
  "key25": "5kWptx2eAeJo7bxWxEsZmcP5yVupVttza981Zt7pCd51HuciL65ZzNF7dqiJYBEkw2asP7Caqs6TC9AgTcGrw9fC",
  "key26": "FqGkRA8pV2Cx786344CEruGWCwKqBPqMfvnksztnBeerbjb81aS7pYoF9uZsQEMGC6PnbteCTsQrwTDoLangM1d",
  "key27": "338bJRkYGrtek7xSypQX6kFT7QWJH6Sews2Kr3WXHPbLQ6dfkDZhEfqJkp7dWSEAjZGU94WEGS6eRF6t355zAR5f",
  "key28": "JLa8NpCTargYvQ1F4atLefc6br8Wrv7Pp1arCNMRuK5G42ZDrTvANZF1R2SkvaCFQEGRsEjp3NjEcacLsqB1cK5",
  "key29": "5jrMcRvXetZr3n47VZhvEkMkRaC8KPodA6EjFJwxfJYuz9voP13vjTnZibrjcBbj3PLY5xxq9ErZftVbiykBpnMG",
  "key30": "52dmtS9hqDF3WHNUBKwL1YHUBYUgSuXGyA6JjfDGthgmesZBCM1M8bbAa2vYiSatPYSBzJhNMGucbpw31eDXMKC9",
  "key31": "2LsqoS9nWbBaxtm7BAVztAVRnSC5SMqcRP8NnqdqBmGoLEZd3jS3t6AFciH4RVgYcgd1LAkvY7EFuhsJLyWnNAAe",
  "key32": "5w6ecJ2M9NzaSr7QnVMVnPoTRGUq75PB2ECyUpKCzA5vA2fVhx9uasgWV3Ztfs89zd2G8THfa7RXkfM8Zaikb1mf",
  "key33": "5CyFDeudDUca6eru5g127yuU5T3Wn337prTZRquZ3AMUQeSVDBy6DavS88KiZdezKpeZwJt4FiguMva6ws6sNmU",
  "key34": "5x9XXbJgQZhDX6xVCRPJ7v7q27TSYKovkHH8hypv55CXmfaRwj1LfyJnduQH33rQXHHQ1ocYBoMDnr2aE3nR4qNr"
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
