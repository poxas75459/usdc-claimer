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
    "581nHEHNn3CdneR5gyAYeHiirpAmc32BporZ9yu22A113MA6kP4x1guwrmKddVsViPrYiobdFjR8eVHGq6rZ3sxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AoR6rwmHkrun7VVh5sCb1Gx7pz8x6cjDsBvqtGVbVUmUFc8yii5zS47nef14HNkq9dzXMyqQQ8tQeqcaYpxZR2o",
  "key1": "bvKjuEMhM4M2RcRoLBvzVCB4r1WeJaD1f6TQvRf6cAkb1hS92nGbXGYgHRddUEmVH4zxebFzE1k2SJe8NyNBFHW",
  "key2": "2rGsoXBTVL2a2zHDMstf9gU98B9LCTXz3ytfviLR1L8VjoVwFCGVWgYQyaKJRniCTxSg8jc98ovz7uLXwQpqx7bg",
  "key3": "3XTSsYatNMjeH1GyfukZ95F1vDF4b4h3xz9ZXvuDiyz5P76bfGRSuDsdNL9XWpGxP1xdLR8nAeSF2RtMjGPZ9jZN",
  "key4": "baC3VMdM8W3uM2gUrk3ASNvnZezzn6hut4oBfcFxMa9TZvPwTTtZDYUn7F1eWai9pLJE2vBkHH18C1XAcvFXYve",
  "key5": "3fAWykWi1vzcACqEjA6cbHjFAjHEzGXG6jCNzjJMn3AmbqiDRxqPdL6gXuUeMNDEEcU2NaSmNsQJssGFGkSfrGs6",
  "key6": "5ksVAMexiFpa5LCqEUCZSKSbQANr6x2Qho2VmteXCbVFLMnpSaEvSTdhrpYTLoL1qnr2oa4s6AbqtJHZATG16ocA",
  "key7": "bcv8x6DXK7eXPPs78s41pgNWbgXWwP6yaKcfiSCqEHoJJRYyfYDHqZtXDnQaJo8LxWsLRedayGNYmLgVN7m5Xp4",
  "key8": "2LoE35CzZTMpaChrpQqFyaHphmQDBPE2mzzhD2AUeirYcQrK1eB1BKTBMQzkP4Qo11C7cNkeLnsQFeYigh9iT6u",
  "key9": "2PNz8srvpttG59o1tWbppDXFRnCDfcoz66T1UGpx6FGRSvwd9wjqAqx7AjiVSm6bu8ABLVbMaFo6Zia1CvqBok29",
  "key10": "4wRboW7uqyyMZhHe9dk2dziyASBG5gdwk8AEzZbPWJgAoJCJK53k7J6ncG1ULy3kscb1RuZyaxyrwRKvcMkoHgw8",
  "key11": "9X6vtK6Zeq3KNV6UkyicSUTnYg2pSfc13hqe8DXWxWTQWXn8j61WT9SF7n2eqQjpnFSk9ecEzAAzaqBifjBnx98",
  "key12": "wQZXSqmeCipAeXuaowC8VDQ2ndEyeVCC4yVmCYA24EcZMhSTjLP9pR1W3hqxnchoJrJziG3oE5xckJFLd6LYPEp",
  "key13": "2XckNo92mkoYaRanJBWrLsig7mAVRcqXDbXFhKpgrptwTWe5uLY8sNyuksDiAXYH2VjZcEFLf9Z6g91Rp3Cepoek",
  "key14": "57G7LtZWV1LH6MxTrKuMpWixyCUpb6gsaFKZcsafAWAJt81qfNoWcmopsz4Nq1M2BLGcJkAMot8CY4F97eev3xnK",
  "key15": "fdShzMeviYohGUtLniQPSYnoGGgyixbaRUKW1a3Dta5iw43nE23G9TVntJ4C8Lpd829PrY2jubL9FuaE5YKZG2X",
  "key16": "3JShYzMSLLcmrHAqsJFUtzgxwE5ZUJN7B94N2iski5scWhifn8G3T8rALtnEjcEvbEp6kPZmxvPPBaCNJC6QQnsf",
  "key17": "2j8JX1A265iX2F6MaHjEU3USocGuFpb9yU67b4rXbHAdhV4iQrwQL5zUtWX7tegU4B1riD74j6tJrXs7HUCX1mb3",
  "key18": "3iBrFsMDQMZT8JgxA33EX7hY4vBEzepESRQBnyBdJEfgJHuYid52Zb74v67CSNhg8xam5SW4fJkA9w98T3G1tGfz",
  "key19": "3fiQiUdej8PiCNhk2ofPE6wLgaGnWu131ZqiD3Tk1WaNwsejZkSKwbmCpukvubcfsuNJp3aqgRm4ys59KAYrrzg9",
  "key20": "4TvUbrqp4GUaKZzxdCxg8FS6nWuiV8RmGJkFScy42yjSFBJAD4rC6z3j9WscpL1gfsYT9wpYSGttSFUXYre5iGsw",
  "key21": "5vrKz9f39ogw7C5Dy7h24QjhAFH8ZmyF8GXQDYjGb3tohoKxdk2xrtWRRrKsEjyR8dK4KWc6HVxHxCC7x6bg9siy",
  "key22": "5YJihdSzLGSJ2ZfgX4imjbWBF22favn9bWQJ7G8H95caMRzPneTQ2UgP4PGs7JvJivN3qw6hrb7nnLsR9qRmuWaJ",
  "key23": "9BqAn1JqqkqG9AofEHEeaVD5VzrTkXUv1LBu8RRz4yFNpWQsu43vgfLvKMmbaZPejsavtVronqnK5kstob7K8or",
  "key24": "4LTePjQKwLX7ScciKH1P9wRDKv2LmGb39N6H86bfSupzHDjnndrE6LqeW8EgYDhqBKvhB1binUfytr4bnQMdpEpP",
  "key25": "5gPGPWtAAmGrisvwbep1ZMLXiU7EvFM6ALQp2hUpTV9mJN6DjZJYrEvdwJJMMd262yuiJ8f7fSnkyqfJW3Q89DX",
  "key26": "49o4Y2wru5mo53iksyTuNd2gdgwYYEjS8ZUSXqQjmtnDH7XaALAWhWfAt8gJhNjCrj8AaDZxR7sUoGoofX3V3T6e",
  "key27": "3qbF7d45w6qwLojWFp31V1E2BtK4LNJbrgEa3wCVvLGk74hvZ4eUzVKCNUJP1nWewQLQmwj9gqaX5rCu3JLf4Lb4",
  "key28": "3qbcRjUenKTaw5dsFHSkRQ4NXSncCFwZjVwSAt4vqLiE6ggitQ1qnZeN4ih7KiQHAmEf19i64WCk8y6tBcgq9hJT",
  "key29": "4WSMZaCecswstwQEdMbfEooQLbPmfPyAJ3xNRvZaYKRRfCH2Zrh6fanG6WrSJiKJk3MeKrZozTaHmYLd9hDj3c1f",
  "key30": "qQKfitWnZ7kqWBFxnwAEBE64ABBLEmAs3qNUs8anLL849N8dowGPXK7rCVbwCgAgsy3fdczZSUkADns6brvtgH1",
  "key31": "v8M9dJUXVmoJinsGAMFS8Xwm78m7o9fDtFa5fDsFf58PKMSyWRDV98eYG9HgsSa2CKR4jA8HWi1FFnwPjRtUmz2",
  "key32": "4wpbpYwinMQhU2XTZajACoHun72V66diWkF9FSY5BURQabTfvfuYEv3F3JVp7AhFokMS1gMMTYyMZQ88uH8oGRzK",
  "key33": "3DHwGvqCuokDDanyAepRV2stHuePwpabgfqKn1NH5ZUxzBULopsGfJmAjju2ntkXJdzKwLt7wxy17JR18hFQXQSP",
  "key34": "5dEFdnDJgB8M95MQxPgtAwA29N1fKq3XxVTz1sApQfydVFUXAzRzgXMM3fKPpMmuktrBz1pT8B7LHt4QFp9hhEa6",
  "key35": "3NeETqAXo4G6LJdk78rmGnpYT1aTcwEZZwfXwxmMTw8cpQPZtmx4ke6dwim3DFDXstcDsTobQKD1x4AMy45PYF8p",
  "key36": "3NBeo4YhGxuD4wb8NojvNSSG5orC6ZWYETUkStG2XbwXABLJukuFdXngXak3nqCruxrMPPJw1ovoi4CNGx7vjLku",
  "key37": "2sxeEZNGd1m5gDT4uAAfmFJutVJNmf8zCSJjvkj17zV3VwLvtCdiA8SEJS8R6BTJ6phcKgpxCBExiFMRTeX6jt86",
  "key38": "3UeAxdvUzVRGWjz5KJ9AmpK3JgLv718MpsbFx8Wxh3kB8FF6jRcvMaSJCjkQ3KNuojBb2AUBdNYruy2mTCUNQvCL",
  "key39": "3DxNReLiyqr2nn5jVshHJWtEtQDNQU1QKauEt57dYnSrhGZsozRRDNABqzDXbyrGhaHa9JTRJeGB59Hn3gBjDQHD",
  "key40": "uHdGC97Ha5gE5Pp4xJaxnCLLGJ8uzytJkNbEkUD1eyd2V5Fk7MaUrYUbowfS5rEMaN9n8QREVHHDYsdTzTjeJc8",
  "key41": "KCX6xqEmBUHKunmCzhPyzv6nayhwtfPt1646YdkbaRimoXmUCxfwQg6UiB5pH4sNWBbAahmBVNf2fJK82XGUY2N",
  "key42": "5SW7qqYNW784wRPP9CeyDuTEUzsRE4SuPK5TTwGKVck5JgbVDuqSSQsyss3ooEHkDdjS1GP5EUvq3jYoRbLnxt86",
  "key43": "41EWAnCtDMt1T8QGeP3ynkZpFftgXA7HQwqy18BsAzGNoqbrpjLGsrb6gXL33H8xABQrQhHezH9ShYzrnc4cqFJ",
  "key44": "2bxnZ3kAQwXY81qfZ7N6WbqNDfXhyPV7WK4qxY8cPSrCPZc5GpKSF3MQB6P8jEGkkoJS1AdLQbwUdn7cAEW38ZD8"
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
