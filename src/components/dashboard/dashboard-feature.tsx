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
    "2J6o6Ad3FXgFP8XWi4jE3xzuzav3XtnDz9vfRVjptp5b7rjUWG7vsdKeNUrKtruyxA5UMp8gNb3hgyGuq3cMhEo5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YUP5f3VkVsGxxathMem3sy5jq1Un2C6gnegKR1WNmU24Uks6apKpCJ7WUZUBsTuKX4v7tFKaiHk8jZ9G43HzXb3",
  "key1": "3CHb53Zz2uCvVuyEujh4WiyRMnP4jNCcj9CKFirVCh2g5oDZ2za9qxg42RUxtiD14v7fgz5RsNfGvvTzKHEfYPH7",
  "key2": "rovyzaPCLMpU995pHxNTpZitcsyMmcmZE1yGcLz2zCw68tTP7BoabM5NGQjPvJfnzTZmNjfUMzzmtCRg57KZXu5",
  "key3": "4CvBQiy6GLazHkA7sGYVgwub6Hw1Ka9itZ1ikiTzYQNMUmF5qzT8uZX1CadxVk3XPa6KFQLp3sznhs9AvNN65rdJ",
  "key4": "5pbSKC2nYzbQzYpnLXYGdSDDyT3Unj4ZWWJYyDPA1TfAbpQnYGzKQa6q84xHtLWpv4uiRXyCVWg6neeSdV6fzDoZ",
  "key5": "2B8Nz3yniVxZf9Jsex1YnJ8kAbW6KFUt6mrKNkWovr5r51XqJzNWFoGtwtRqxhhroTJ1W9weihfAAr51FPiz6WT5",
  "key6": "2DeELLfMQpRAcZLqqSzKMBQkrwnmRygSmqLWPQsjT4XWcZ8j8a81ny3oDcQTkQd42aoj4vaHRLmZPoiNHU46VMj9",
  "key7": "2i7CpzEr5BBwmypMdPVmsgepnoucmMigW7Wzm2jU9aQYZhTT8seMAiwaqedJf1EhyZ2aoYLnuppkt3Rr35wQay61",
  "key8": "c8EREA7WfNDHgUgEdNMKQ2boVeH6TPUJSBD2vuXk539ipAXo4LaRx8GqNJfPqNUx2P5DsSYJ4JppjaDfPEHTYjk",
  "key9": "xGumCw9bu9SgtdUnvTJbYWckYaPMCzkN5Kg5BqqEpHitdFN4HanwuNFdXabT362xMRSQZck3iQaDBA3ec5h2e6a",
  "key10": "4tadZSz7S13Luha5qqgw71mqxPnTLsN2epfTAUAWn3ZBm6MYte1xfBs2ux3VtgWP1TcctQP94s8qAmt5dUKdTpCm",
  "key11": "5EnEZGqWLbx3Z3zSNfTc5HDVkNQeFQWRMXpjmSsTCod1L5Vk7HaUy7zAvfFK6zTxdVDCbm5Zpx772eiwkZHKpCSC",
  "key12": "25CP6mpwmJBJSaz4kpNb8C8eP27bXNeyLKRDA9q387HhdwsgpkxSaXYjy1a8LGa53or6LFRAq2yEUgewtXmSsQCu",
  "key13": "Sf831eeFwVtsBjsff8PuHqSME74AAxzSrAsHDd1ThN6MWYBQutaYmNMmHeyGT72fYABojLRZ4fLomefdL1z5xXq",
  "key14": "4WWm5PsUY97PPdBqsP64SdRUPk1pk76fwH4zk7hWdoTTM1wvKqex7dmaZGmiFhxh311NNF9bEd2NmGDAWSCHuKCS",
  "key15": "qRSg266qTsoN1gqtBUcpTzu4c7DoCGtJJicbRCknsTiv4HwCDAjyDV5WCQf6XZ4pXK7UWrhmkaxq553PR5iudrm",
  "key16": "3DjzmX6QBHkyQ1GmjTx2XJQrsKRHDificHjyJgrekMZBej6mq4c4UNUR964rWHijsyyLAvcBuYjQiebkwUwFx4hX",
  "key17": "2cEtx33VwQePBsEn4WfUumWX7Agf8WMebFnKo9vtKEkcSfmDSZ8pDCy3SQruRYybfdsH1UnorxsQVTzAYp6qiNyA",
  "key18": "4b1tfrQa35PJ6otaUkbioDp87j7RfMM7rf1h4kzcTrVdTtyGz4GsgGNgjBZYoX3yNQwFwtsTRN6wRXLEDhNrKARg",
  "key19": "2cEnLSCXpeZ6nLH9bKkCHRzRgcCQ1gHhveqpV4t3ppeCK41ad1ULVZdAV2bL8HxcigznfSU2bivC5oFWDMfDYYyR",
  "key20": "5hXyyYZVgAQZ6onsB96TmehQsLbSam28MUooAHxY9ycEDAkL4Xz6gntge4tXvm1GJpHAjxiE9H6TW6QQUybHpZ3X",
  "key21": "5rtrQgNyNnbCuf4ean7pynogWsJBcmkZ7RjfsaN5JD6kWFxPnPcJsgDGmGWvz6T1RiM3T9TxjgVc4Xh3c9rT1oAc",
  "key22": "zAZLBqx37FdmK3GvSayFFGEkQLDPwfxcxJhtWoEL2ihJrcN1g9kqhf11ZDACMBxbUYwzNwH2NkbnKTotzzk33RE",
  "key23": "2v4ooyPjLnKRCfqkT4QA2Fm4u33oHpLM5rEs1Va4uFpzitU7CmdXiPE3BePuF32seKWdrELTakmKeqeJY288D3zf",
  "key24": "5N8RquDS8GgFoWLjiZY64tCooQdvvBkpMKdUNqbF17zjEh1HhX6GRznEjuFz49EtQvp54iUa9u91gtckenQav5sM"
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
