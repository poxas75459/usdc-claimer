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
    "2KGy8ugfoP7Lyvs6hvbiPxJGg2TuYF7zTYupR1pec2DRMJ1isk4kcmwEXJhmXBvi39nYgHCy5WYrGJDQLbMRaxRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gw2paVbkxA4HHdEDXBTUcLq6TANhyY29gHdFJ9D2ERpTVqFYV68nkMyx84KLZYhmAQ51UEQJqkVL5VsTKsCtE3P",
  "key1": "4MfMBGADkLNAwvVpMFq2pS3UMhk3qGTWGLS9QcCd4dbZafi8jNBrxE9e9mbjR7hqsCaeFABdYqwoGdTRKGMR9PHM",
  "key2": "5nyCc7H46dSAd8t8YtjdR5Y6ZJZwAsWkodfVn5Luj2xYUrs8QHPmuz3X16wGQGTd9WoRd7hS1r1yVVtu7D5EsFdo",
  "key3": "5wAMT3JzB2Rp9xBcB7qj7VszXpoDTxqXUeUKfs2dYgZ1ChgBGQqDPFoNrqyjapmc9YDL5n1PtZhvJMChgB1vVLti",
  "key4": "qUQpEKzEyxMZCrmyRk3uWhzQaMnQFYNnHWN1pVqhpf3zHypeRn8EeThRcNPbyY79Jz3PFyGTbW6kE9j6EQZgvkM",
  "key5": "3AUrhYEpRoEDuEpAkgcs5toLbbBsPiuDuJGM58xycB3v1eXz4kNaqYaLtXx2jqWAQkTD9rG9YumPFVugjmVJPuPH",
  "key6": "4ZEwERPT5U5qUHUhXuoyRsQQ5r8CFe4Dcw2igjfohNW4J4vf4X5GWjdnJNnjwAAapguVzcE43jy7CThJr9WZntST",
  "key7": "3h6qjnsh5WF2j1GoXAy7c1i5Du8nqJcxT1nUC2PGCuLVBVh3faVWxkni3PyD4emVjqbp4kiZ2MC8tW9U9r6AG5FP",
  "key8": "3q7grKQe7pAASV1Vpkgw4B7RSi6GcmGLJkqHGhoNKNto9sQgK2mcnWcrrwLY5X4pZ5NskA5uXhLBeTNYzfYiTzRE",
  "key9": "5GPAbGMiVdYxNBedZpr2hSyuW826gEBySmYTsPX3gWk3oPzprdpntve9SQcjz7Mep69ARAbF8H5oDjDHRTT55UMv",
  "key10": "3kpXMN7u23wopDg4T7CwBamgoegvRt42g7jWgv6xivoTiiK2RdCLfXmJgQi1pvaq3Gob1mvFkwnxWR6F7r2ay8ri",
  "key11": "6FeqDWNNhK6PPTaUPk4ztoJBFuCCoj5KKHqZCnGaCdQWAEp49BtsDaNxNUpZAXoMt2V46kLGcrh3ivCe75wWFJw",
  "key12": "5Zus1py3YkFJdqsYP9LMatTnkmdGXBohC7xsZcYxRmFBTdagUr1jfgKD28QdAM9JbSbW9DzWGThF13aHyXSmbPq8",
  "key13": "4A91MP8AW2RnLpYdibBPAtgZthLMTH48Rex7f9foTq1WG64Z82PTLBRz2rxQaD29bPSuWpXEwnoqUgLwucKbibeT",
  "key14": "Xzm8QxiYpAB5sBTE7n5BbSZKj4qnNKqJDSaE5iA2wgzAYQSUiSfjdzCdgiYfZqKPHeo5RE7AeTaH7z62avQmjNA",
  "key15": "6sL6hMfPCQ6TFGdfy98Y54ZE4hj8mVMYs4xGNHrN42WgXTLKEZHns8BNvUhQjKxmB31gP9K3ui72jsXe9Y87e55",
  "key16": "5XKHyvajcN1JtzAk9fSzqEvQ8ZDXYfQgfVEvXhaGgQ3pDW8PtYo4TJNwn1p2ecZgvmYErCvjD3hE9Vm4r2wBHRUV",
  "key17": "4wS81hzMfDDtMg3f2xbGfBuRQZGvMjurGoXkV9z44XshdKsddDhKHrCyNEL9SLh8uCj4HtfLMrs9zeNCg8jcqA9E",
  "key18": "4sArtd3jnzHxDidzT6sJAPoTU9ihasCoZcnqDDWD6pqFf4tC9WdeKXtwKdwzYFf1HALNxrgBy7p3zws3mNZF8o8s",
  "key19": "3tcip388nt95dsbMvt3dVEA9iBzSi73t57G26hP74VuLj19T6CUeYJF4DVLMMKMQo2DgFbnnYU7hn3opxBTZ3i8P",
  "key20": "23oGJf4sJH5MTgZe4QNtS2HdTbLtLTHJgEvFArE6Lp6J3zMsG8dXVJxNiveCxdRKUjN4p2hdKPm25bH3VDrT4HwY",
  "key21": "TBRmjnMHCzgfDEyR39S26pL4nBg5btrfG5gKFU9qwoZaeWzPwKzoeHBPB8weM1ak748XiRSEZukjEAjPMQ2Hce1",
  "key22": "3HfpqHu2faYj6VgBrENTPGHVu7oXYRTfmfHtEGAerbQf5BSZgCH4RtA5mjKecDMAHBFH2SZsm5daycqpt4WjpkWv",
  "key23": "47h8jkBQ2AatUBv5EsdvryEfmZW1dZicj5QM4eX3HJhgM8NPsh69sWx3nJcEcguJsucK4Dxxu3ZSmFd2SKjzYCND",
  "key24": "kRAjpdtADsGuMoLGoh7WBByBo4VEp6Wgzcu9rwN9cMn77twPPtddHZ93se63CBZRXgxsKRtWNDL8mP9o84DPTeX",
  "key25": "bN4vkeLju4pS36Q84me5y2QjvForTyRnzH6PSeUFyD3JkJc4XTwFhuxuCokwZgf33YoK3JSxdpbDDNjsf3e7YH6",
  "key26": "2fjPTCnDYCxjpZhctEk4NcURqXJxb4mC3Vw7VNDYoVVs6pzn8ZzDGxGVb72X9RMyJT2Gj1sBJ54xwvgoJ3BUxj7f",
  "key27": "2Y4BH5VsjKHbPqkeJhJpCyE9sTxDjehViBJzK3o7Yjm6SqgoLjDwVjEFt8sGV3GjemAtNRoN3riVLtLmDRNNdb9m",
  "key28": "ouwjymFTD291SWkeAqrsd9sxdRne8nrJ62WzXTGfoUVcYd6qoEuD4d5AqpmgzTSNQqcbEzH7kdF8Pj3hViTanLN",
  "key29": "3VyPnLgteuRHcMcHGfxV6u5V2XLSB4gLf4tdEvPMw2DGgYN9mGL6b48dsaYswrhgauQQnagGhfqSktYzoWRHLtv",
  "key30": "CFyt9BCzRZ2vDX9ziM5YgHbPTYdSE9RdNWKQThyKd2yGmTodNDb22Q3xzB7MFEJeuTKGpnUowxMZpKUAJBwp1bH",
  "key31": "hMi67TaTrm13SHgNaG6cpbz7uvuBBGufNCoUPYdGqRFLHxwZtb3QoHU74U76HtAaGU2oZQ7VZp3JqzeVsX38ALs",
  "key32": "5Ee2bwEkmbcSmY94EG5XH1UM5Me3V5JbJ16eePjSSvAAFJAdd5EfjVM1Lc7AL5hSSWJ8Uye5C3fLsk8xLM9i5BTk",
  "key33": "qYGohFX38WDwBq2Sk4FuMXrpWzHm7t3Dtabfiid94BHoLDa2Lo7gUDy8kaAPwgJa2r6PJK5iJJZJp9pgG8DARS4",
  "key34": "2pnnmPz3w9CLe42CEebS3BrMs9DedCYv2dhHT2gF6L2GEPN98KsbetbkRhgJKoNiEGVDt5aNwioT2TKWfcuKENx2",
  "key35": "4tVdTsjdLZyQstFMxYD9sTPbRpM2hCUW7awSwbmrGNiYasTE72BoyWCPxHboCnceNjqedhp8RwneAxLuVUPUshLw",
  "key36": "3qC9JGgbzVyDUwktrGhUmA7x6kxQX4yadHLaMYyJ7qBG6FSvXKVBZwBGxtfuBx3JNbqhMajULTeqQCvsbqGfswNY",
  "key37": "6547Lak6q1VuG1vpdhjendb14DBR4YANa3cNxquxijqksjZujmcya3vwuY5PZdiD8CbsEs5jJ9tpwFgBtckt92tE",
  "key38": "2fpuMshRfQ8C3sZJbFZGdoQNBYYLriM2UEak2w1h4ydAsh1HeTFz6Ptdtb8GBxTkQB9rH5DSDPrM8TdRNSntzoRK",
  "key39": "4nCDCLqXjSFNXfJC8rVjRqR4Zw4gsGwNhorBHeXd5TDXHeSC8EsekQ7YLeBA4ULKUG7QHmcgU64ng8JcHHctRxZ6",
  "key40": "XLqjdGhjtbqSaTmHS61q72xhf3QieHkV6oSSWzyZCDUkLc9sTvM2vo6NukuauQ82CYjpBMBBW4isatHzsrRQCfm",
  "key41": "2yZaCMUzvXTVqyUczfxSeMT6pv2VGmiAeaBxhW43xssWBGLkrwE5FU9eyWs1NgmYU9hmLCSSGQ9jcPLxGeaHePb",
  "key42": "rH2R2iPvudmg8CDn6iwJChP5U6Ws5kzcy8UN5cprBYtVtqfs6LkuFP7KacgUw5TSocstq6fepZrTDB4KWseXrRx",
  "key43": "2ibjFNMRBorrpVdf7MPSkvFHfBZhP5T7LDEjiWpMKuBD4zGZ5eMVwRa9uks4ryt6hMBrjZbZ2VTktETJp5Np4KiK",
  "key44": "65ovTvdtVFdjYxvzsqBnLmvbZ3L3S9FRUM7Mtn2Zt1D9tNR6uZ8FSzjKvxQUytogTXy4caKPYRjyHavYhqqnZKKb",
  "key45": "3djxAguoXe3QVEJhdKnq72vRBNvVm4bJS9uT9uRuZQHZ74hNwQivGL6n5VC5FRhvUAwGuqfZ1biecwAtnGz2jTB4",
  "key46": "3X1VoaXg6RpgmTRp7eAC5ANm8VPQ4G2CPZmiEiAcYLmSrSwYmsjpbN7T6CpXE6yuKtLChwozqHhYgsAZQrkvdGRa",
  "key47": "3AdcQP92ZNQ43qAUDHwy6HWy8vkfHpD5k6rcRJUWTLFYWwxZjpC6sFCB83HXm9wP1jdeqDGNFymQr1UXncKXZua1",
  "key48": "34MCqLx1HcpqQuAiC8C415yJTnWsr5gsaDux82cj1ggNiimUSJ2M2KZaaWoo4pF8hAejwLLa8owHo8AEhNdJ4mKu"
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
