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
    "3YA9QieJHuUNZi83bNNH65k4MrVSDtRGa4xJ669JY8FBWd6qUpc5iUFeVY4TrnYk6kW6eZU6PRNSk92fA2TbB5Vg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KiiKeDMWiAknkM6i9rNERcCScpJuhr1574zeD1UFupLqmssNLRf7hU8GBpmtwwRJJ3Wcwy4S9t2kVMSPm3nhAe",
  "key1": "5cSrns339UL2fVmT1pFc6ePHwTzDgp3ywfQYudxvpy8Twtr4NHve4LwDjskKHpN4Kv5eU5uiNXA13Ddh7ZVSd93K",
  "key2": "H8szvnQhTtjsPcPtDf6xkh6UGywxx4zXjNMMBxGKMHgMJZ9SX7n5bPawN3ZpsmMkbvSJcavZcWJcjxS1mHMpXnh",
  "key3": "3pEoLCJi9M4NdHvbWoxW1vvKbTAZ2V7TF715k2iVA2iwJjkbAZJnwSGQCQs8uJ92tyvGHny6u9wh6WhPzpbzDRa2",
  "key4": "56kBFjLiPcFfnCGa5sKzHnh7Eqi2piMatVJzCSjXYoAADComDhzaLXbhAzQ8NankSVpBPsRDJzBUhvsWW1t6bYV3",
  "key5": "4Z572MA6kGcDYJ8kHjjSh8reAeVY4TL3qd3Z1EUHgoL4catpkrrxdfZnY6bVtiuurJRZYmX6Ec8unvy5Qy6GTcau",
  "key6": "3oQhbCrBNyxTngtWERAd1FFKdh9dWRsKtBKV1q2qKDgdGuCxnk4XxT9EvvLnzc1dJZwwEGKGBJ4gB48XTfMWT5Q2",
  "key7": "2BkXMGGJm9aAaVoCKc6xjzhmfWoTumwSeXd2att32CrGEeeaNrRtn81K6qynqzbALWtguBPGtGc39ZqBUwQvGotp",
  "key8": "4ZA25ZF8Sid9ZcuBBHgCurVkkhmRxWyZPifuCngUEpF94FQcf2uf1SdNuy2gxVdQxseicFcSvLuMnR25kWMBQafj",
  "key9": "CM66JP2ViqGb82W5b23p7ZRhNmiwxyNTnhLcCR9CWpc1mhZUK6Z5fHvm9emM4nT9vqQHSwUrCoqAF5PoT9wRnPd",
  "key10": "3qwMdgxAbZUhKcpm9Zb3ZCxnUtbNQozQpJhRNHEoCKQYFMXH7MhdYbobGcoZ6vLQ8EJr4qgyaXR41RJ7d3RRcHbT",
  "key11": "2EdegZWgwbs5f5ajafvS9a8xd5Mezo4zvy9aYyc5SH7B8jyLq4gHGXWRU2xYzVuq3dDYZVVxJr2f773Qe9mvttJL",
  "key12": "42tQtKUARKrJ1rLjnHFVXH6o6KJyHvi3SzKrj1zQpe5BMgRMhhzXfMR5ti2AxNmpX5q7mswr3pbfHNyFPQxXYnWN",
  "key13": "322Sq3QpTP1jkJFxreRmkfY5VzdtGwRzrTx6mkZiTkdxadUWgBZTsTBXmSupU16LSJ89koPCKk4NtJ2i48os8WRM",
  "key14": "3fm9M45YRuMY12PY5Z8VseNVYFXuwsvhwGY8ApgjRi9nAjxpojAHDFvPxH9yjABmFtdr94sz7jgwCc2ULnNr4bNx",
  "key15": "5DDzayyY7dUWPXtppwJhFu2vbC8voCXVDEEPdnhNHWM6wmSWHSnG3caATU4i8QL9wkE2VhRnPiKJtJNg3LoEyzpi",
  "key16": "3BwLLYz4NuuMoHU8b2o3unAneAk4Js73cJQUCuRNPYwTVMmz6b4pbBiVJt6NF8QTNM8zC57FjcmyrDyjZe73urCQ",
  "key17": "5oozCkdDEXeq3ZmvmbGhvJxsGdANGF1582bkbLyqK28uqUvaTG3Ea7jtzrH57ocQeugNGgKTjh9Tv8AibZD5Tv7B",
  "key18": "5pGijcf7LAGKVgDfVbQrwU4Fw1mWSjMNNsUPhLXaMAfkLK5L56BtFRMU9Ydx9Gwq9XcwynMGHRMajencWBRCUucV",
  "key19": "5BrLvGi9exAZh8BCy3EkPmnR2zGBzyaFEFHXriKMwVi7jZ3LLDZ2v4AP6mMaPqTkKFhuNWvv9AWsAKwzwohzjKCA",
  "key20": "m5R2RJ5qLBLC27ktcWk147W4E9ectqzahxX6xzXMAMC6Dce6kHQhGNYbrxDrWMBmNxMaciY2quadGCV2Key6LMK",
  "key21": "29csRvLgmgRaKxKPiYMTUGVtma87w8PcbPSMQFoiXG2okqpi4N9jjryEXj7byGn6dcw9Dcew6ydZtF5whhAkFmsk",
  "key22": "4CQZirkB64N2P659WnJfYkLUW4w5HoZSQQ6XZUFZGpfeC6HtWtzbwevjYA8DJS9ZweGHZUasfaQmKpx2Jq9yax4X",
  "key23": "41Sg2qnKf8GXh3iVErTqmSg9VQYnre2VPVvBZ4aNu8EEXzWnEBRP8eWHPzVcw18MczXDE9NJU2j6mZktxDuUP3mj",
  "key24": "3DH8U5B51zHSU5exCxXktWR7ZjBdRNuSTxnmhrZ4a3PX5viQ4KDgaJRhzZgfF7Mjc5nrS4f9vuv2DsGCQ47WAvZE",
  "key25": "2Qz8fSMzDLu795ksb2n9SrniG6PgjSrUnz56jTDVdtFt8DMjejtzVhh5tp6ssJeffLv78T4XCxFwKjxBZ9pMrm4W",
  "key26": "xhmHMiGZmGRNcsHa25zYvS3BEPk1EngwVZFtvVCzojSPtWtuvVjDREbdKc1UvwBhjUqFt513XmyVrz1PSpUvv5B",
  "key27": "2px1yM81EXF9kyPddHZBkng5sMAaEBN3ZQaa5qvLDRYn1azp2NnfMPbnochA2WbKxAGXFWarDqqVxqbR2tAZ2DHT",
  "key28": "4JqptKDtu3h3Yi1VfkiQQthKm5ZfmazaKtiufxdrbrwLhY6mvXAE6bmGL2kPgkTAafY4xNd3XUAT43aDBWmoE1hb",
  "key29": "dBZ9CYAp9aa7XEzWbsvAG6Pe8VBuR1MeEwov176gDr143Uc8nyWZNprYJFrQPEqDzKR7kyhKsKJZcVuC9zHm2Jr",
  "key30": "3TbSc6e4NiX63oPQsKQUqBHtcrwsGoooKErNqhpBtgkopH3pKgoMUoEtwMTXCFrs6uHXTK66KcPEkC94CSBP9tNd"
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
