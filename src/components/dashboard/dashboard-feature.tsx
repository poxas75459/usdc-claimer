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
    "66mqdKYtQJmBx71rmRYd1hkXPjKXCD4RadZLPAjvvptMnNamYUQBVCs8gX1yDJeCxqwe25KjWRdVRTEKzZNjEUZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eTHckFYyQXLb5gC3U4xBeqfTE6NMzmYayoxmTWvUJ2y9DypPmpvAiLxsmZtX14irouDBSaSYPDPNuEaEeJR2JG2",
  "key1": "4crsB2kaJpuRVj5tZTwsR2VUxbQXmtnT2vcyYht8sKxZM9YyDGeTetYwnyAmgeGrLQdPMzGZ4NrjTWSFvcJDUgVo",
  "key2": "brVeQsCJMos3m1WVe3CQBvw1sspAuedKNUEDThvL8TK3yWDGTe3y2Gd4ioA4aYtyd5tzmeWCtD1Dgryr5Dj2GBx",
  "key3": "5tU5WyVoB8n9st8R8XYXJLJUrkYg1unDmgKuCFXA8DHKCs3XaDKfDgJfskYTHRmSSJQrR62Wp96aFsYhthy5be7n",
  "key4": "3THEowTpNcAzeQkpayGVMKHgYBrzgagwGNeBtdLs5PfbUanJJiu22cHG97nDNePGDoWd9LmgSwncXhKKk7AX6U2s",
  "key5": "2Wj87XKNjbntzBBffVwyb1oK3XCKz1VKRk96trUkWiJW47ehDLZhjxjXcNA1QEr1NVPgVzCyFeJBRV689ewuPXMA",
  "key6": "4PqkvLsvkUUJMvBPB5DGfA4untWrHzZXkETvsXTY8vqs9DD4h3JZKeVEiEgwaZSHzMH9JPijvEgST3TUTwbAK8Jv",
  "key7": "3MbFod1KmBmFyJ5dcRNSzzQmxNoRPVYLUpSPdp9C6bfLZuqWEuNKJFzScpiJQJvG4CgT7aWwyAyLfuGY7exwHSSt",
  "key8": "5EUZBvudupPo3XyGkJPsuQL8txagJPb5ZYoFhY26gdm596SFp52RkKEXbBi74JYQMiraDLh2VmAtvv883q2fkG45",
  "key9": "4rwdgxgZYr2xk1Uujn8JeLcuJdutw3JCBxF9wh2WdMQB4EFBA58bTvS2MeAHmae6UzJB62nSEXivVpHtLKHjwyK4",
  "key10": "5rUyp5ckBwU25Z2SgfsPBWMFhSAx9FtwRzsftU3duXWrsCASEQQ7znKuKP43YtTqDRtfuuVe8yiXpmQCibezXDBY",
  "key11": "4wn5dhZ2JmBoE6EBWZjQzrA5RXWzsfJXFpAXqQUhu4xhRjmDLXN4yDJzAcvo4G2QR6v87bzD9sZGSwYMcrmZGwaQ",
  "key12": "3SaTcRYz4Q5azHjQ9xjbVTeJtdgUWWuTtnaXoPgTHdnN7wYYfV9kF2V5NgTwbqCQAi5kKb415rMEJiLZABoZviSq",
  "key13": "3jfQ5fYqEMCzvqEFAai7nKZKFNmTAMmpj2yJf8BND5s8JLoCM6fh8gN2LpwTtPD2RomJq2VuSD7bNby93BZAm836",
  "key14": "5sDzS1bbyrkCUh3Uk1NubHrjuf2iVxAM669zgyPharH3VMYprhCoCAUSBKFxfKzVJ3yroQPbZVuAwLykSMMZGrZ",
  "key15": "3ufHMEiQrnTcaGwPQXzAezfeptYC4SSxx7TajhL6L81u7LTn4BB3hf8si7g2rUiUPLvao6hxPZcPM2y9Rm4W45yW",
  "key16": "5pvxBU3WeBmhPzqXxdATCrYooRsZowZxdAQ1rMFZpHvMB4EfGrxmpWhHAbGEmVHhwWURCgt9DBvVzvGDVgKPr3qm",
  "key17": "51jB15iLritrVbhXsWquMw9bLbFtcibWtnaZD9cXs2efBmCUNGRhiK4eHfNoEeeL16QfpayTXD9vjs9yQfjyGxz7",
  "key18": "3SNk5MiDuAciEp5BwbR1N92dBErqsEPm1xyxnXuGu44VJ7mJBDwV6uTpqRXKVHqPSTVjzjzcDCiz9wbLTiCGxzaK",
  "key19": "3ndvfH8jYruNP392w3VntXZ7jk481xYq6donC59VTnLyiXKf814hEPWVjMtyk3XH7U7Y227gPz1NZnJngmvg2TaP",
  "key20": "2i4UAvYViNcAbxt7K9qBWsNNZ4DJ2t8adXYKJmtczq4YU87d1xaQsKiaCZ8Roa81JgpoNgzS8SyY1AHTDwZ7ncJJ",
  "key21": "4mzYC9rtZn5Fe5d7hXA83G87PUkDiKvidSSQ3u7mkXRndDtd648YLxLuBJSSP13QgpGTqo5Qjz5DuQsNnyV1FtQM",
  "key22": "5VnmENtq1FpKUXdBhpJnVYYGcj9Zh7PyrcjEmMe2Hdb6A5pUT2FL9XR8q3YbN5DVZ74Js7PZUuGVtSFZbyRqRjjB",
  "key23": "HrGARkt3MKKVaVp94KdV2kAXd5qUtSBFyvRd5RjWmpiWN7Fq6kXRMRJh21hpgKHg1rB5boPjJaJ5WW54WbyUpJU",
  "key24": "3qvcuMVt4joZqsuFU6c3KJbr3t3qmcK4BhFJ1bwGeqs51eybRQhGjZNaj2JamJHdwy4eex5EtRHMaWmyGFf8LSZq"
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
