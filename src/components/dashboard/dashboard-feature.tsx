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
    "2KhYoKx2XMMb87ujmW3aszEpCdF7TaL9kxEhzDGELcKj9BaeT2UNaQ1ooeH5mqTdmdEyQmvrHmBv53W6Hafw4tBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pXyzYapNhcrdvRkVeTGMkuqLCbGSSwSAo1hS6SWBRQcweMRbWrrYyDr7aoMqYxP6Pz7UBtRaudetLjN67qvJ9YK",
  "key1": "2YkzpTeMdCMV8ap4Sp2HQ9qxt8GTncTehJ4L3LV772GuayZM1n5M2w7gUm1KMZT1cjidgz3hunttYyzN575mWqS5",
  "key2": "4RzHhBYsC1trx2sngy4g1eT5t7JgDFmBBhD1yPJF3Aoa6kpMYYbCCd5PSACiaWdZNuM83b5dt8s95T8EDjguQ75R",
  "key3": "2ZiNFMJe4nwYgKjCEWMrkP1DaT8HKGij28DF9VQAm63SDnWrxBHbQxVYT5h8hdfii9NTkisu1W6hcDZm6TqHD67C",
  "key4": "4FEtohEmCkWS1AFJWvV1HrXt3b1YxCUMSuBdTTqREbhF9vKuEgx8PJSYfufo6T3TVnaGUfoPAmKNTsvPgfDHCDCH",
  "key5": "abDd6gfNqTR2JEMCFNag7h32hKKEJCECBcFf3rYuFGQyFPCxyZcuvspzW7xQrVuHm5GiTDHZyxKia5cmcbWbfzK",
  "key6": "4Bgdx8QtMWt6SXg6APdKdvKMvte8rhWMr6NEoQjqt5C5eV1fMExbL7jQp2rtFwM6hDaJTyxw8CA5AimEtpbBH2ri",
  "key7": "4zF9okqeAwn1Xe9pr1qD9t8esV1P8b5WxTVMDdhu5dVLEkmEErvkH3U9Q9EfA4tY2FHhHc1MG1pxoaSTYjMyE7Vc",
  "key8": "2cJkTPuTeKXMdpkjRXvGAWj9orVMdx4Z9z2cxqn1neaCPmyHTjbjHCPG6k2oeHBxggDRqQg71jqpQ14BNzpQHv8H",
  "key9": "2Yib6i83Sf13vW76g9Fa8seYXLwiVmTnPCFx75BKSpWB5NkALFEah2NTsTE11wUfYa3dedZY7CmE1sdURsbAVL9v",
  "key10": "3WtntAgtRegZ3Xhvnms9zV91icinVxADQCneqPx2F1mjWmUWk6DM5i6h628nvjxE8Pw5NSEjuMNMNuF447Ggh5Aj",
  "key11": "pspJ8P84j9bgFsTeHetgmV48KoVEhrSVkdWes7bchaPd5UcbWqpEwHi8DckpbJB37kpHkAyq1EeTSh6QT8wkkCn",
  "key12": "2ftkiqFkHAhADutFAes1iC3PjDWWJuahZjCLEHo1nTy7zP48fkXGcNorXrD1f6VVXoCC6G22edyBmoMWTFZQ5aZF",
  "key13": "3atQTZGmGbU3rA6svVpE7R2XkVJ4KcdWqTdQQtuCNQr1eSNCw3EPJia56ng8XvGVYVFnHisHvKak4syjKmjk9muM",
  "key14": "5VV3BPzbSTBP9o2MzyQHTCaSoabCUA5gacqVBVrxdoMpjZdq33o4sGiPTCZzfKz16BDiNN8b6MkZ8gmWmFaYT1FX",
  "key15": "3XiNvh9CyMbgnkknyh2jxQQkSY95KanW6JjiKg7hU27B6RMv1nnv5JFEdW8xLf7gKP2YJocnHzsQ9kD6JhXLudGC",
  "key16": "5LsgHfnsXao9bSM7PP14JaDPwQRx9aUzxskiZU8LwVdf2YmdoSGZp5u4wU5z76sTCK4NarhkPXX999cWrsYdR9ow",
  "key17": "xdk1R3XDkEC1WKQzQyvVfAJBmTDRtaUAhr3D4iNNZJj2KW38moaMQZMBVQJ9u1qQTMZeWtjtiZsNYcEc6yKAmwV",
  "key18": "2qyKXfBWvmny7zeeWbhnQYBwETNP2fUP5K3AasoXAyuxcWztLypkCnrZH75M5yRS7nvwMEWggmTuT8A1zzQZKEky",
  "key19": "WxEMEHaGcoPySbqZ9s4ECFrSanjLc8v5iETuSiGuhdxbWhHpa2XgW3FEqULSu3KRV6kUZ97614CMLoPEj3NR31j",
  "key20": "3NaSiSPzPFMSqcoYJqugX7E4zT1pwk4jxXvWBfj6PL5QQCgEriwgdWCcEhAK16uxCAK6Nk1YzadSayATLBJSPVut",
  "key21": "2c4qFYFKV6i49yPzTDgBxJThNTqA8vWi5PRY85Ut265z3F8mUoTk6AhZmpxXLeLxYLZCGenezAU2PDMW7gxHHbMA",
  "key22": "4u6i45re8LtEg3UJkekSqMf4X3sgumywrozuLEGpCzkJmzfiRyXzzyKTXjdN3c1hksvKhxSDvA7V8TpZj8FxNtSB",
  "key23": "zxnduXrQENfZGtkxL3yEtbWUFBoR9KcmNsumxTXLzA1VHTxuzRfq6RSK2bPeMmBkvoQEyzda1rpx9w6yrM2vSea",
  "key24": "2NBeHBMjWZdhv5gFtW5o7vRqHE2iwzXBtdfArejyN3QH5bnk5D96VVUPYYo8WSxULxgR8ewJR2MvaW7kRrN6SwXe",
  "key25": "Ufc4WKCeMyUZNfZbHjiabmFFByUYfcsgss3VeAB1zniiHrJdEG4sLFnCNPemdhorMPbyteMWhVgneP1iYMVaH2m",
  "key26": "4uUxLKqEmDYaS1jpMhpCVoLx2Uvn6kzS6uMwgR87eAR1k94uLu9Uqb3vutfQbhvmb7hjRgBoShA8xfDbSqDEsa7u",
  "key27": "35Ky5ChQT1H7A5sYBgmKHha7b68b5kdMJKvzX3xtCJqxt1vcBn5oqcH2bKmTL7KZyNXgaTnLeT19WvEed59Ln3V5",
  "key28": "2Di53imoVLMNLVjdihUcMzSqGr8djUKquCLh7dnY4anW1Juj5nKn225RzidypHAFH8FgAdB4xQKoaoemyMSQNAoK",
  "key29": "JA9vEByQfqN3XwHNWSitGeLc6BYv44ybwJDLnFWWE5eWpm2QLzCKiSpjqTWWpUk36dqJn4UxCKX8VHn2ByC8JS3",
  "key30": "2Y76L1Jtg3iWucsE7JPtVdJPWyxyiUSSP1MEaT7deQUNPXhGTxNnicBFLz7F9VynRV8e1FUzh5h3DFhjHjcad1vn",
  "key31": "2QfNwzcftCdCs9PxeccY3gpof5pvSnD72SyNztKYQYBiDKwhnm6i5e158zNk5AEkm8nQgH5P9yvahPHk9XoRAiBe",
  "key32": "5Lehs8z4QwUH4BbtokeYw2F1CHtDzcYYX4jqxizxp2VFztWKVehJmGiq3VqDyz37QcR2h54vjCcB63WyiZYBFHPR",
  "key33": "oMfCK9nrFQCD9pegdpqzwzox2LBxb7qV7grE4V4W5fkH77eFsNuuJZ4Gdi7s8AtUKXvYYLd2NycJ2XgBgMfAciE",
  "key34": "qFZDbwXWHw1VSQ8Xuk8p8CJqvd2BFaZt4w7RJ8VUeZiPNyjjCbhrZ3wjxxVCJVLQRVW8Y6j8J5xjcficLKq6VS2",
  "key35": "2mvdp3YyoGkP8fqYKvVWELQRHfaBCRWLDkEt2WjJBRFTn5USoB61zdNknBFZyiKqHVa2BQVYxNAi74AVPRF1hkui",
  "key36": "38qwKZD72LdLNgJuBCbaaaXEUQTBy5hzfkzcKFVosSQ5VB5dHdNmEeWQGG8G2sL1MEKsZn1nebqrZF3vNJBt4cVU",
  "key37": "SnAaCwScZFKCd5bT53tRmia24MhMGRTKs7cvHUwX797TJ182piq2QWv3KgRCgzTeGNLuk3GCzSj1WkdrP2ytsSV",
  "key38": "482pdnRbDZCrZUK4tvAWDKGT3QMR1jZx1Xjjj1G45QqWTTo41XzyKMJdBYWaapRHdGMr2e7cM7gE5tXuLzJyWMqe",
  "key39": "2nYr7dRoNGU7PTTMJkDCX4Y8wRMy3qG79mSQnWE15E6dStGkJizWJMuj7bHAhYmsPsNFo4q3fELY4cYZdwv8scw8",
  "key40": "26iTmhTRJdKHMUqCaWYtnvjtaoLWR4MsoGvRZnDt8yYu6LkyUS3UL3SE41AN5aucGdpbHkVMDAoN2YHiwNbTgwYL",
  "key41": "3ThUctLpdXmzGshi84GGFy3PcvuyCF8ReaExYwVAXdhpCVCNH6SXH4QjSfL4QLAkoeL36Qc4X4vASGKnQdKBRoXb"
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
