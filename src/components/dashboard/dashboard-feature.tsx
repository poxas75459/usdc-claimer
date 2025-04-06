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
    "YeBNLdkUBiTLHtZdKwWmMDz45TjTa1fQkyex9xpUbZnNVfP3Jevz4RwJ5QuT89CVtPTSbdVNG26VNKCkgyLKdfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KiJxjNtuRNfuSLjob5AcNtLZJKEDo4uiXnfgCHMmaj89Sm9Q4FED9qKVg5vbkZHUsQY1KH5JBvYjcakesgXhznA",
  "key1": "49qtePW2gzMja2YAX8Q8LpATAfWWR7X2DyPz4dVVBdsJdyL5uxb6x1hmAhXW1yKRyk9TvNnKyP4T2hKd3bhCKjjM",
  "key2": "41vXiokWqvzM1gPgSGMM8opVyksEDzPfQT8LqZVqV6AsyshHkjum9HsXSLyHf1UbZHfJrMvvCcHEzXFXG6GTz1gQ",
  "key3": "dXdLF6FQRG7qZ1Mp316UUNWjg1jgiEjLYcgZAmSpkdtHTKeJ2tWPJVcBHhgonQcqQQuSognX4SwxS68hefK7dRD",
  "key4": "525xrCsin2QQV1iqRs27HTHwvrZLE5sFPfmdWEz1H1jDb5z7x95ZHBWMrzmLvokVbkrAFrEynvjGYbGzk7SbcSQr",
  "key5": "3Sibn75iYRfiRuctdSG6t1nXaf4oTbqUNdarD79HkFeR3u7xCX8XD8UUU6Vhw1oE8uK641xSNqU4Y84rFsz9wUh7",
  "key6": "5cbaaDrJe2Eh6A392oBx4RGAamyLHDQEQjcwHQ33QAMjTSE1n31KwodhBiWjKyHbrZF3YnUJF64BeHepRzFpxZTm",
  "key7": "3jKDH7fkjpDfqS2HrwAH4g6xjpr5TbpzfCKjxeHEH2ytvZV4UhPwsMzw7ehXim4DRoBjHVmNtx9hCMc4LP5AFDMy",
  "key8": "593ufYya21zPdD8RvciEzDpGJTHMq5KUVn2L5A3HZbve4LDysTRTcJdd5Js5jfQ7Cowde2JR94AViKjVMEH6fkga",
  "key9": "4EpEsh6NAeMnvD3ggiS3C7UbCG5MM61YX8o3kKdxdUXGbyEWdzDAEwCgQYULcQLC636bLUJQbZFeMbAcZvgmCzQp",
  "key10": "5HRFRwYEX2EZezCUG8BajF4CFmhsb4wFpF2RtQHx5gBtLT3pKzZVsyWfTC4xr6ShYpKFSqyp7jv7cbH2U1M7TQKr",
  "key11": "4Bvj73CadESBQx8PKuHarzQEFuyLqXy1KLjruF2dtdLZ9MLjNtMGpNqWGA6V7esHyiPXpdWrkfisVWgj7vcLtRM",
  "key12": "4PhVA4vB777YHjW2oYAnWmKcqw5YS9TDS9iKUTxoK3rt1Y2cSdfsBotfRnd7SAxzxWpYofqSBZLgbdHTkYc4itXr",
  "key13": "5ZDpU4B6sbRmv1sx4qsuHXqT8QadAEYbVPm147V7ikd5ffgL9pc1ipTsbNpJKQdWaysT2remSKGCXUNKJKrjcC3D",
  "key14": "2hUfJRxeoKB7Aof5zEuuZGoKRPaAHE2Cvq3Qpbb1FNSrmSWuj1vnMv1GcEEdtZJ8p4wqZJSLuXYSKkvYznPaJspj",
  "key15": "4bGD8kevTyB9Sz5o3SWiXimGpf7US6Vt1WEA8BdDFrEMH542dREBPUgTh9hJw9FK8LHjc3udqNC7fNwsWS8AJ17z",
  "key16": "2orXTPN3zF3BzpysDGM1HuqCcnMEF6YsJTiCt4tS1ao3JjtBJhHj6iCidXXhL7MGiQfj5kpChgHZVVv1xafLbXXQ",
  "key17": "3JJMo4x1KuYyBahVrhBP6VS2oQFwYXDERjGLynbRPVEkTSRWKTTM6ebN5X6oEpQJ7S5tMoMqaVdJhcqRaXWwojSW",
  "key18": "5zBLzeJpWFC3Y3xqXEirkJgXLVWQzrYgLxz5S6BS5N49WMsKpQpy3miU9M3FqRf9nn8JssZ8Yu4R3sEQUS5yJw1o",
  "key19": "4nzDHhwdNux9N4bPYU727CuQ7TrUUTf2tjnno9QwnFt6QJn7D93MAocXBiRdYBq3rkWbLiPv4WiJHUEHjsHsFAf8",
  "key20": "y3NWLJJyoWzyFBHzqwunkjXMnZxKPdbRm5peYyPZoDDsguC9GZYHV5ttqBUhKNSSkvPo8ZiyFjfk2sDzBKfWXt3",
  "key21": "66xBtTvjenEuf8s5AcRogY7vhECyTq6jrhNhRA3bwW8BKiF8aLLH9XLdPzQ1TxMDs8EzoCyUQpsZyBE5aBtJPE6e",
  "key22": "2ZoHkPt5Lk2DoEkGV8cLSXhgcy4Jykr5gj78jgthAisoEgxqzDEC3akncQjNcFaRV7x7xfRWvR3kC5LCBVFG7TEt",
  "key23": "4dysfJDmkCyiwrwjRtFJ2cHkZ3UqM214Fvo56n2kSZihxVBZeBWjott7yv8yBChHHv2SQRqrZS4KVGcu8YLMwU4D",
  "key24": "8uZgMf7kkhepeKQ6u3HNgyd7Liks3Wni5kextMCdYHN8HiyvvrB8MYZnDDCr9FMYpF18FShdjxjNfsJQCN97Rzb",
  "key25": "2bCGqtXzUKch9HjEt32Zg1znYsMRcoUZn9REfwggKQSv6PgNW8TwVime9zLSjiFrrrM6XCDLMLv9RCwH3Gi9vtyQ",
  "key26": "2HLjZyyWJPck3J6qot1oU4LoMFhfnCRtz7QGGGX229MSn88hE9KM3afcYHAs6xDH6RvWoUXzCSuQqMv5dzirq8pC",
  "key27": "GEdUk1aoDkc5PnMoxQJGudxbbGRxDw9uhPMjhcFjy86jMCWp1zYNXpFbuHsE8ejhrsrwmwEnX1kWgxuZKH9VHfE",
  "key28": "2iMQ1o4bSVVRgr8VdTwhNU4znQU6V96ZAMB7Wt7doRPwC7usuEiMiuzKoDWxXoz4qL6MQodHbPBeR6pi2ofCQAei",
  "key29": "2UdBfzGX418S5Fz9j2a7MRH8afh9a7VhM2UiL2hnsWo7xJKVsqGiimU5aGfxBznMQEoiTZtAMYMr3dnVCgXmevNj",
  "key30": "2hccxGzV3Uiysgq3bASxqJjwQzYEgKVdqpPbzvaw58f5aZ9zgdgGhh17KC4VUMSQeeph84yijDGeV8mT7YQhtGuh",
  "key31": "4zc1H4gTak6mbPW5swaLdAMDwgAe9bRW481Jm12mYZvN3uNFtAHi1FvYvHR9STSh54x3MJVDxq97ddUbkSXSLCGx",
  "key32": "2R7Ha1G4oqsbnHfwMcRyQwo4ntNHT9tsb4FwswCjKWm264p8mqnwbv3qYjf1ZWW3hNquhAso8btvbUtTf9KGcZCc",
  "key33": "42U1rFXiMRwxTm53SaZydcoqy743CuaH3KxArapAgpfZTxJhCVDptTpFC9yRzqqmeyHx1gESdvJYuWfeLKs9khME",
  "key34": "2coRJkoSxRPyfZzKisgNmq86Pc9Bz7gSURyL7mR8T2xpL8Sgb6pDpsHHPY98vp8ZmtqxEQLHF5vfjQTk6dEJVQLo",
  "key35": "3MG872UuWQ5nwU9xaLz5enbkoteL1SgdhXin2M9GQ45XNm3q8Xc6UWt7Za2EB5QgDstTx91i5CDRWxpDZLXyZ7My",
  "key36": "4FgnNCTEkiZuTXUvfMXPYQV73mm7D8Uf3p7Wx4EjtY8BbgfZk3NCzvgFpYijKcoewWS4cEZqkVyR2Avi26Hm3Dce",
  "key37": "22mGQDCNf8YQ5euf7LnhgbNt6YSmqgmK3B7D8JtAd7jvjQgtt4qaoK94VVADM49FBaGexXD99pcDeSfpUjsf2Pc5",
  "key38": "2xWgZW3NxMBPXgnfjyRNNKsdDgh4G9YWnZcQiDbEuvhtwkPFgH1RFzEboSncRirfnsmBAUyWH43CQ1Zpu7pdTQHC",
  "key39": "4i92NqyBmDFnaL2y8XW7e3YqrBmerkHpp7Lwbd9tsjRkDv1xxTUE17JNLCMvNgCkNug6NFqqjV1oHh14UFgzpEeY",
  "key40": "5i75ZMBj98XnJQs1zGFNyA6hdZuyxRbGvA4e9xX4dwYA1oedF3c3eyu6pHQi8aeSQG9tuWgz7WQi9XxDkeZA6AZF",
  "key41": "5d5qdovw1woQjDAwVNBoFrm3gDTT9FvNWdWh27U9qM1iFt55HcEq1AcgHBZJJGtHysa4nX8DGuw5G22JjhF67bJv",
  "key42": "EPUgWhSsBZtSq4dvALR8svQLnT24yjT9p1vF6JpqiJkpzzY5fLWhGHszD3ftFTVsCWqRiMkgXWPWoovR21TvqDq",
  "key43": "3QRKAKgNuJkZ4ys4z2nJN1tgmpVySeixbK92qzzK1zjnJa3noXx1wPiNVxdCgwF84TyfJFK9tb7hTmaucUPVKsZk",
  "key44": "5zkuwHsHG33capB8rfjJy64enmvGu3KdZdzKSEvfk3ETVwWrpAz88gLbvyFThvVWhQVcUwbAvdCaoT4yKLhYJUSo",
  "key45": "4EsUhgLjbVGvs9SR8rCHrBmBv3q82yny8vGyEWootjo7ioKpTrvstQ8mg7XSFxrVRdVYhFNTNtLE4H477RzY1tmW",
  "key46": "4TszTsWRH1CA3KKzbAHrFjBhcfnKxwU1TarZffysokCSL1t9XeyUDLmWPV2rjmDqNWVyteWUiuiGoNW3FfzgoarU",
  "key47": "3AHS6hdHGuHgTyA47rfmD2so5cQ6b1EEErFiyzqWSJy4e22Dz9kyXJDgPxVAFJgAMmbzn4HCHbBQYjeJehrfUWPU",
  "key48": "2DE1jNiK3ocqbTRnEo5T4m2r9i95FHgmrDNTQkiYKPgAZ3xcffHyajhfLDcudRW6RvapLhiViRfccY3Vx4Zmm6sd",
  "key49": "44RgPndm9aaDgcDE32Ps2ivnM8BUN1Ro821WPZ8iaVkLuRA6bZ4rH9rWFJHXwDyg269JuukZ1pJDXSaDgzQ3wx5v"
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
