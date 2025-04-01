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
    "2U6L1Hy7AjPotBq3YEvPm7uwSzeTtNDKuXd3U4zKVdroa23PcDGh1doywkAKVpr4YeGiWvo3UyVSZs8ivWWySfua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CjA88Rzx7xSpxEbK85QJvHmjjKNRoRyyX3J4uT7kGhbg6Y8JrrQF6SjKJY7XZuFZKAzUaeUDqTFCB37yhnBpRot",
  "key1": "5Jq3UhhBWheTmuhHxm4ERae6HKuiFt24DqH1so7dNYy1KzPyoU8BnFWaFWB2vXYreunv8MhfK8xwYHcnDXSDkCct",
  "key2": "4hx3hNnhES2qtf6bA6Y3tpaNC51ZcxbXV51RysPvyrodi5hU8bRpPJ5cf53FFQ6Q95umLGNgT9AcW1cUcyTzLKc1",
  "key3": "23QBYEDVTqsCWqGZV7N8Ufc52CXwvRUwJrmPyex3ovwCPJ6tfJA28qzzLETnY8jsDY9wE5ZM48QSp9sawsUg9oZX",
  "key4": "q2ZbKmGoQ8HuT4sdGTZKEyDYy5Tj83LfhrheKV3dWwQpWyr8bZz32BGkkyt449Uh91uzGKBt9xuCUrAFVeVpSUG",
  "key5": "3T2XrHBGCvSA1Pkegx4fHDDLnE41U82MnxM8WkAFs8ceEKUmw3s1vR9DLm222jZ5j94q84DS2TWd5tbz11qhexRf",
  "key6": "43ERPVQWiz4LGhpW4fVcKjZVR8r93MSSjUHjVV2nPY5P4ztCYCnTGzBZxYTNxj9H2Dp2jA9HQMHYsqTtrRjR1ju5",
  "key7": "4UieXQMvFTpnbticnAiWp97Xcxc6kWU81MaxfZEnNhSaBK6hgPcz45aZszz31ZKaNcvCyutdD3BniSWbBjmsHeBm",
  "key8": "4agueBmpq9pb447KdkEAA7j6mhvQmm8GxK2rxwNdsqcx5m2Yq5o7cfmJ5XVfNKU9UGHUhfH7aNJACLHwPrmBVNHd",
  "key9": "26zsAtMrmthMr7uVTcDfC29eVAEDvckGjZdkavrPjwF4GWNtW6rtY9iuxkrBwy9KqwzaYsSmQjnrLBe4SA1YLaMZ",
  "key10": "3V8PG8bgUP6vTeRvuMTVPYhM1V4cHALcJVyT1627nsvJW9FcFYJMnsuvovMzsVKJwu8GX5mj9SqCKv6EubVRzCKT",
  "key11": "Qd9HzAvgGjy4ci3gJcfic3Z1NMxjDxdSJ3vtj1cAmMAyVkTzTEauxJHJahXh9c4SxoyA3Cy9RSx28JR2jjhemKb",
  "key12": "5CLbVurnoKGu6LMZxoeYHf1Y2Fzgveh36FKG4q8duMNpydCU8o1fYx9fYoemXZYJbWVmndCjhGtU7gZjX5DDdqsD",
  "key13": "5adwd9n1GzBnyBUBFN5oBoZgZ5oUoNpRkoU59FRrEYBMGziMq7vifGiwRfoTgVNz4Yn1voj4jr4CxTkwCtkmDxiE",
  "key14": "315eADoCQgwfnzQjJgvCwwq1godXRzvM7mF5nKbEgXcivAVK7sPCtnvRk6sANUmjZrAkTieMGNswyQXCu16Rz7nY",
  "key15": "5BJboMBpsuP6RE7dVJDBBxuhSDkcFYua8S35doLWkvMJ8FybbMfhbtBxxrqF7LB8whAR4inRr7cCQ2B4J5MnNzBL",
  "key16": "2wxBsHwJ2AYfcaL1HyGb4BgfjWhe2AEim3NoeUvb1h94pQNUwSs6FNVcKCdrZzJ757ow4qTqdYdCquunNdXRZLxj",
  "key17": "2yovtyAscjr3X9BKPdnPuMmRLajdfA8D5HomYgHg4LNQTE4bthNWQb4wmxB4LnDWxLscCEx9DbLFBZG3nRAWwyix",
  "key18": "4cLjKaNLJ4b4xCfHgzkf6qkhwZUTyR6UEFTfgD91nEJLUo8Kd2M4W51uCHcoSGQosugSg8yuxwmWwcRg6LBaDX76",
  "key19": "3Kcwy3YXm3XfxM5KqrPydZKFPxqFuWHTkYjqhDXbUceuCgSgu8zvpUSSYzeyBRKYKVT7YyG2knf55vAtsEupFkJG",
  "key20": "4gHaeJqx6WDXDexvXuBRCA7xa7EaZVYZmYknj5nWxirsXEBTaY7SXCJeNmJ5TwnF8e531CnfkBwLcivvpHbNRN7z",
  "key21": "4PcPoQDvWYAr3rrM2yd7KqZtrKrFbh3wZiQcJfpp9CzzYTBMNZzLzRTeMxY6KtvbHEHMQ5FB2TofMrsm8cMxUMTD",
  "key22": "LfVaNRAH3bXCLqMNwx65dTEwFhJmvHwWyqCsTZsf3RCAyVk3dkA4LVRkxeoHCoPhFz9RJ5S63ZoUGpJPbnHM2Se",
  "key23": "4iL1N8SZxKW6eemSu55Mb5kL4QkmhRTqD7Utztg3yoTYJVhPtEVTghh6pwz8Wg2vHKmmdLKud6a7f4QDgTbGaf7W",
  "key24": "3GSXGobJVgm5B2xPQv8VwDcm6yzWYeHW9qHB8pLVuu5GPFMDoCVwTUeNQ35xkFfkvnDMgX5Ep14ahefNqERD2bkP",
  "key25": "4yaohJFWUeCH8DXyYfZ3br9RfryUp5DRiFYfD4wacGZaEQ7tBT2eBhfJLvErLNwGuDkKye4HG7QLoGNpZ91YFjoH",
  "key26": "Sw9g2Y2RjgdnAX384wcXBBVizd3GrZmiQvrr1wCE3gH8S8a8mEaVKPJUgJNTSLvbNBt6Rnzih5Wm363hqKJgB6K",
  "key27": "3TBxGzEKtjoRLPUz9VaffAvgspFmLzBX87WRj6CGWS4HhwsjLz89DF4FgGDhCdR1wgxzPBCN56ZAeYdmxajQXU8y",
  "key28": "44u5UfnTjRzf9G64oH25apyHLAkZa4de4ESZDyhXKm3FKve1nnYdrzZFtgFJDZRS9331d3vdZ69YhJzjw3Ch9UMv",
  "key29": "8wzNiQ4DUG94gsGstgc4t5zjUDSfa4ZRNvHMDUJkC3AbkcEyK1BwSbgyswqyVv5gDPn8yBCfTRCY8Uze2LrHjjc",
  "key30": "3ehwRUsU243nFqpcHGScqsZwuoExvrFzfvvAst5gdZ6N12MsmL21B9yenF6gA3jHYYPuZL59oH2uqwC7Cp15Y9Dt",
  "key31": "CNz71QRyzqKkRtcrFexs8VuFfw3SQKoGQ1skZWDfttr3Lv4828W77UbVcazJQ9VbmaiRS5wCJStRw4tAMwyteLM",
  "key32": "2VAzDf5LhuVS4jnjNvwGfLZ8HFDQZTaJSeTknHTBeoJVeYPtaxCckuDHzRtCwmdcTLSb29Ra6MnT6ikt1SxLcwt2",
  "key33": "4m7E2bCVdekinenGf8Tk9tWwiDCEzyDvRMhWoAc4G4dTUztpWwCp3gUzpck5UqwR3R1Bgq554by4wn6DZXYmchDR",
  "key34": "484eDH3PDN4hfnJwVS2DJGGaCmujMVUXATSuZNReK4eXgjaZF2Dpmv2Z9hwzNUvz8PKpEL7jHVyay8NCBBSGHJsX",
  "key35": "TDnLJKM9MoUXaaisteyt1Wo43yqz1xoKS27KBeTCuStz4EHM94jwHybzbfRUc9MLsXPhTemooPyTBfW2gNsMCRD",
  "key36": "5XDb41s8xrEp8RnkBWqZ7P8rkQW5EbxVHCdJs4mC24AMULZYX3KywZDL1Bbuj7QFETQj1aDo1Y3R3cSsUGk2hHqW",
  "key37": "2ig2chLu81hYaSNZF5pcSoNaUKHQg26yRcsfEKJj3bKQrN49tjJmBE7jfk7KpajpAwRWmmNYMPUw71ricbWrcCUo",
  "key38": "3UnUng8yr9gyTUjavneX2dsbEsNyWjS83cksFveYuYYD6iiTQTqpDHtgnfYc8cC69gviAWscPx7NJ1U8i2zuc2g",
  "key39": "3L3U8KU6ya4BTcA8JW9rW3K91MLH3f5JhKkG68wwHwJt2aqCFUByA89uxgY6Ex4VjLMDZjzsWsSCkYKcyZqRjQoZ",
  "key40": "2jDhUcxk1aTYpTvjua91Rk48HM5B9oo49vNb19KQ7V6PgECVQLRaJM6HDMBkRYzp6YgAfURjs8syM213nyyejkBo",
  "key41": "23Apoehz5257AczF2rmqCR3w5c9LYEYPC42xqSAEUndBpJLewiimXr2t6gtotbSKiGh5mhkkYiMQZahUdawYwCsm",
  "key42": "XdtmYCwzZZdEjAg1Az6pzDVxFRPmjv8Gb77T4GbunMximBp2mRYtBk4DAEHeeWi7BwMyaNa4HzkgcPz4M3YWXNL",
  "key43": "249oHRKUqhKcyhBJYdhxQRDnN973UKJkpm3ZRDvtn9naep6TS5gB9ZPDjKUcF3RtuGSuaSy9aMsn8koHcYBvsqMh"
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
