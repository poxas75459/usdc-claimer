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
    "5W9Lh8G61ag5mh2zHRgJ8gYMe58fqLWaWQ2pNq4KtuV1CtMnhYtvn947QmzAAsTJCX4GCfQ9HJZBso4WEWqtmDBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jgq3jk3irw56P7mbytv8DzZYN26YsXKvvGinS8ApomgQebS9HELBG2n9SRqEPRMQT5jRWyPRpZdM9F1zTtpKXxc",
  "key1": "4Bq1bcwwLUXDuD2UpwnNNbYGACog1bCEe2jFzPBzYCHAibsD6sLh6uZSqgSP9AvdVbpEu8kkENJ1uSNutXLHJ1Ra",
  "key2": "rjyjRzAgpmRzpvf3sXC3LGCEa2ozaFXxDtKdAfEZdE5BqyRGtCfWcx81zM2EtLgCtNv6DPKML9XNhGpymVZmUwq",
  "key3": "2A42taVd3RdD8rGofPxCcVN6WQ5A4wTzcHWHSURVXEh7C9uUwdorGVqmQF9VfbY8LJUdipsLGBemDzcKDuMYbzjU",
  "key4": "5TvWrf11msLEnpPMMG4KCqsNDUcaNtfPzyhh3AjGYQKGvvia27YN6EpSaqh7AdxnBfc2xCsgATJ2ekCoPoUXPziL",
  "key5": "57izbfRsT7ecEUyEEXuXrceyuYm5a3HknfTiqa7eGuz6LsQvatPve7Yqy6SW5ybjLGhyvFFkcmozDXFh661NFrLK",
  "key6": "5nXfa8PZ3s4Td2XT1pQFEumWH3Djsi9ev387AxXtLTHRBnQLT3pruTxM4v42zcpNAw5b9YSbeGd7NwBNkKtXREnf",
  "key7": "42C2YfnSYHPYEeSmdw5D56E216nDUYmux9k1aWq17zpc9ySYUrzfHCsAikH3TVTNzL6s4MmHdYs3u611mYzabgYm",
  "key8": "1TBtE5N4ALz8Fo1DWGSKcBQNjiqkyKr5rhMUezoEkazZndKaCb79ZTS7xZnmGoKkgkegNSeBEL2XhmVKLFv1Dfv",
  "key9": "4ZF7tunSn2QWn2mcz2EK87vauaySo5YSweuNvUUCJAda45LAPCre6hzDnZWTAW4gGXuPFm5FXV5s2aNaqzS151eS",
  "key10": "3WsETDFPLqLSPbSovGhKqZJxmAStWCqAVhGSxbSZtotLwxfMSm9DzvXsti98yZVjN2KCekUUoDBWRXje6m6k5dY",
  "key11": "4GytTKss2zBiQr6kYT19uxGfFG963qKnnGnV8zQn7jHqZy4C6PPvjRLVRAwAFUuQCKnYxcuH4TdFti2XszjZfTjR",
  "key12": "44jwnFXkHrfkoKTxfm3hJnK6Egy6Ca1tUkns9thamwg33hDZwEkekouksxTZyPhk8zcWJjvcbZiG9L5C2ur9axo",
  "key13": "2hWWTHvNkYPbfKj1ugvv6nakH67nQ5yprUACQGzbaQhragZwSjDris8eHPnrdi8A4yW7Zm4Dyi4Pahc4nnWx9GcC",
  "key14": "2RSvtYPq23ZoUW7djngTKwteBAiobR3SEQnwbEBgSpMg3sszNSniXD65tP1m83UiQsN79uwMPe9pSiT8rscKVweS",
  "key15": "3R8bBX87VwmDUNRP1KFABXmDBYR8ZYZQP87g5HQqeGftwSEV3o8mXqeVdxsGQYScw4jDqn96YH9LfVnK1wkop8BA",
  "key16": "3T3bKGD98a3P5zTzVTiR8pJn3AnZMYtwCrtqspVLLUAFysTvGJBebsZLg6BX9FUoQYpacZBRdxBwVrqWpPnRMZiQ",
  "key17": "2rNR2SyhL4mPwRiYPSKS2iVTRBgsdW12FZCbfK4ySsELLi3XLB45xT1mAbEWbfxFw6efKiEoP9BngYEZmFMVkgGk",
  "key18": "5MgXqdBi3onu9gG4Z4hgTAjgMKM1Z4v2W9phX9hT4X3fGHvx5DTkDHCLBT9aAC8wD1jELoytCV6rRrfeqWrymxZK",
  "key19": "3PmcRWHVfarxR1et7jy2FD4B2auCeop4wX8KXQPsjaArqk4xjv6bAK6E5rBtd2wB3EpVygB4ss17CGaJ2y97rYVV",
  "key20": "4SoS5eGSb34uYPZjSf246ikg4b2ZHAJeDFpBtc5kdYQhz1k9mUrbL7TSkGXypdTXyk1hYaAP5tpgtvrfJUnBGLLA",
  "key21": "3QTNmLwDs41GgXEJNT418zpjN24EvNiNTqiwtakLKX8TCevNeSYbNHXL43vjHBNgoyR2GGD527VNrCye2uz43EK5",
  "key22": "453Vv2Lzdont8yABueLQTNReyY53yw95L4zo77RkLgNqdoB7mjy2VxqvhttTNoBMqcux9AV229SP5r8UJBkf28uG",
  "key23": "5q9pCNL5nWGshCDuL26Vbxe9hRxgNNCdgAycYPBdEYAnQAwSVb79nxyYgU2hth9CLHxBoFZ8oYEzsGT4Bt3GTXrU",
  "key24": "4YeST56JYy7ZZpye7P9hnV2fAJKYFCXUoYxALmdfyxZ7oNrs5zJhwqD4YZhHUt3ZhXVu3HCB5xPo5zALrihuG35",
  "key25": "3H8n65B516pQdkBkMXDQr3GuCn6cCRNRUU98r57Q6Tje6Z7EXakK6azTAHtW73sFSFCvSfYdxiUApxN98BqiP4RP",
  "key26": "Tu9uEj741w4keLcoFLpuvDkeFz1gpWyvWq2yaTuGRMEv4giQTdqbRg8y6oVZ2Pd41Fi4GCmWygGYhBsSvyy1pPo",
  "key27": "5R6CRiX9r3YpJ7dpB3osncd77bqZmnqG1tcG8CvM6artL4QS389nswXbR7f8UmeRPTKANVpa8deZkM8i4XTjHiRx",
  "key28": "fo9VKfmSHc1Y8nh7LAwAnrm4B8Xo6nY4464W676JRpgRDtEcbof93RcqT5dQEg4r9s6275om6MZ7RauKzMBFuzz",
  "key29": "36gqXGF27LDtPZ1Pme3yJoPVLU2MBbtaSQwsXEv7TGES6rH9cSZ5GaNkdww7Shntv5Y7Bpr4KLtu9pU714sxYtc",
  "key30": "3tfA6NMALn7A4iu985roeEmzqirYmByvn3db5VUVJoabJTnqMS9xmNJFfgiuPExRft7snxhpeK1dXsbrLvi9PHPQ",
  "key31": "4i9mR2GztwR39UuDZRh8hB7y2H1462LDMPdnJkhgeok9UufL7juWyTJHYLonucJuCW6XTgUwbZEQJ21NXeZkdNJn",
  "key32": "3nWVL78v7MMTtBQi5YWEPHsx7uAFVMZgWAKunwfWP9jsEiXVEmNZZ6PZWtifybViEnFembwmBBJPjhodGckHWHVg",
  "key33": "hGnX5VYWDicPcUDe6ixv4s5wM3sd6E2eER5ar3LJfBiWzK3ay33sAamFb9JTtoLWWTcVG5iRimL6TtTF7weoYmf"
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
