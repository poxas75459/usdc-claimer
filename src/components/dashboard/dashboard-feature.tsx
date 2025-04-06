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
    "ttQbSBHZ6Nwd1HcSMzZ1pTm9jtVWH5GbgfjJkTxPWLutnatMXW3B99hSYUnUo3t9cBchSKVJrqBLWwejafMcKTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cJXijgUcDbHjC44VYDJBbP9VMpKyaipDiSNSC1NhYaobsZx763cJE9wPrnKHgMYaf4ybCPNC1W3gZocCwEbUAbr",
  "key1": "2KMRVRk922nwDg4LHEpKrXAT2kV6fbBZVqmfLzdXfxUHT4E4K1kFfQm47NPPXrXX294Ltxs4USse19DJw2G8QyD2",
  "key2": "5cxm54onoTEvm8EdrWc5p1cBgL5dZpVBUB2aTod4abNto7FELH8yJrU9aY7fZNt8KgBxVTN7kpR7w7hzYJn9ZNwj",
  "key3": "2ucYdhXjWM4sJUAoNo7rQJ7un4UXpEczMWm5iwxz6zvjJNaEn7cna95LxGBBnfeLjLd8oPhugPaHdL953px6ubfA",
  "key4": "2NcUiuaR2V8wYgihuaGLzCBfkUNCFJwAJdwgjA5AL9wBEj69FLW4Zi1Dn74vbS4G7C8tEmdTudmkMeWtusw1z6dE",
  "key5": "4GWXfP6qdcz2v6ahpswwRctm7pYKoTdqrLpZZ8YENXcSzoQ1G8hMbYK1wT6n3FhTGvx57TjRUe7krKXesFTz4cPR",
  "key6": "4AXj9qKBjnoBsz2jBZapkdYRMHf3kkiDHK8E3bt2dpHZUxpCfs5dAyHttJy7zjygk43iLX79CBxiQTJsM8RcZEWs",
  "key7": "2k7s2MohYzjZTLRtTQXjyuUGxkcZgi2LXMmZStZfceBPGd4Bu4S8H8atoANjjNXK9oq9edi4SYzwAd4uYCM8ojd2",
  "key8": "51AURHBxtPP6wYcte7E4ENT3muWTrT3YbEAVLhorpa7vqjeviCVrkvLUu2L1C3QwsDvGAdKDpFa8Ci7WU5ynSDVB",
  "key9": "nDDqc8FcimzW5qeKiEGUqcxpWNjpNrb8ptm5AkttYS2YbG3EAnXaLimqJfb7iHVaqZY57mGeBckoHv4pgRDnBTq",
  "key10": "5xzxfq4DDYFJ8TBfAABrd1ncvKrZCtegiynsd7AA4nQxtWeYjf9L8PAUHmQtyGLZtsULokj26SA9Li2VmmJiptxX",
  "key11": "5dd3PSioSYS3riqWLSfEXSpw1Lf5F5xGPnZJVpYoRhHZhLvc6LHVZunmBJcV8Qum2u1zY1QGuuP9KQmZ7aya6VJK",
  "key12": "64CK3AZCaN3XDVQxwimksc8ecFoFAaVFZfVk57yoDyqwDgVd3KRzFjvg8jVkzhzW3Az6gFFPP9gx5ytJt4pNyRSS",
  "key13": "A4C4L3uTD2SEV1kfpCSQDCujw5ACcsRcpwjxvZwGJY9dMmNuxJuMeiMWHwdTCMeSLXx6Pfv47um3MrL2fCdo4Zb",
  "key14": "4eDoCCiHvz96P5DKyZu6hmDcvLUkvNKAw9dMStCVLfwLDWLZ7niJ1L9w8Ln5Tf1U8znNTEZSKaQuoNkSuVXK9imZ",
  "key15": "2NeSExPe2LUeiuh5UPE6izxyQfWSnH94jJm8bC6BopbNoe5jzktL5AA53Y9EB94Jtskpk6Fvwrx2QYfQroCs445k",
  "key16": "4xCVrSFVD9uVDuxnXgvNa2s3skSdh84cyv2g6wf4NwbFN4eFmX1SRFwLeRXswQt9QBAAwPWjg8rLjMKr15yUqRXa",
  "key17": "3JtN7fpE2yjvrVuXgcjgb5mW8896xHkBLGxGtx3LMpf5XUXvbSRDYoV9pMqpRPD6C6pJBG5iWSwJkfqUDcnZhr8b",
  "key18": "3Zj4wB67ZTYtKq49rZcsCxiuYUKyY6JJQvA1aScjHDrRoqs8sLzWMbk8qkc4uoR6FnZn7rMMpc2sGVRaPwwjQjxS",
  "key19": "2vagGBXY32eMSX8FAtMDyTHV3ELHRbEe94CjwyFU6fXNdEwJRdoZA2zVHxDqMKaxwFp2Ln1g36nesQgbXNeb7yDm",
  "key20": "3MFRtCq5suiWeiL2hnZUi6n4fL8NvVMBMn3Jibg2ZQqetPDuSfvSJhXbeFE9GuPfmTwXZ3MaiGkhXKLT7jaGirjk",
  "key21": "4LyZNwnmvcBF1cKYaBoiAft9K9ijK23VxgatnztqgWMK5iiDbrC1wL3yQBR7FsLuJCjpFpQJax8xBCCEkkvhyetw",
  "key22": "YUM8kg2DFKqwPQ5RAEiHvgFsDTn6qMjLF6TVo2CKqoRHudKs1R8XEATkRvKQ23XXDU4hhHH6NWpfgZv8AjauegZ",
  "key23": "2HxHD9VU4keYPgpCczCDcZKYL9TWpUvwEYarHqnouYpMrukNsmFNYveQyLikJk5Akj9of77dZy4msnEetPV1gWZF",
  "key24": "656GwiR6hwNcFuEcfn5ZSySmE3MUjApEKdHoTw6jv1ydrX5U5vngsJSLUctjzydPDBV4Qwc3AJevUHPhpa4CcCx",
  "key25": "53aShbJaUXxS3PdgpDPQpj3goTdhMbzNMBpcKFer65LtdG3gTpn5M9qyShyKhEbm1VuVuFLzf8Y1RWHngKgoCWJd",
  "key26": "yCaYETk7ni8dpiWZxHSicHvYM4DryS3Ryxd6HCriRqAuL7zGUgedcbksR348pyLH3eKrbjf4bN3KrkcLn63Xpyw",
  "key27": "64twRHKvxK9qKJAGwfmt3uH8WFSbHcEysJR3e3CCrHLJCTSrjT1J2FpZ1NkVNxhStC8CFsyisbvzxXBzTLexo594",
  "key28": "QNM6xySBoRBwoYnmqdBEZCEeA13NUgwsgLxtSsJVdgWv61fJQyV52hSEAgZZSGdUeW1TtXbw1MnmK8kZVQfwfpg",
  "key29": "anz3k7eWnN8ryb3RwcqJyJAf1XsJvmtVdGnoGrxt88w6HquzXJe2ZfKCmHhRKm84HwMwNNHjZ6G7QKoyT6xTRhA",
  "key30": "2euTba9QJxAVoQzzfbAfj8yCXX9h81YdZJ4hqyMviNKzJyV5LaMiRv3yg1DkuFjFMgK7hJzDZxJEzse6SvDZh1Dw",
  "key31": "653Jf9Th6sp5zoj8TnvUggdPABtPqpksdbus1uw2tQ8D8yUJDBbaTBvu7cBDcXvtw4Jqj2hBZ7jfbPjcGC4zb4Er",
  "key32": "oPUdVdVdb6SUQkTLLByMe4s6aob6WQYmiFHPaFWxQvvSVhZxbCU4m7NUWWApVwK1gn7vErUrPWNQxkmgsRoBv8r",
  "key33": "Y7fAXDzSfkcDBx6s7KufS4SwHm1oTN7eGfCz4DFEG2ZHkFGVtKj6qmJGHT4kLCzD9H2djgtLBwyZioXUEh56mQo",
  "key34": "2dS54ZZUqzsX22sLQNEFYsDXrc6gQ6Pc1xzADE5Xj4Qdh66WWkS5YGRYwJJE4RzLAK14uUHTqw8gRTAQyPVTVtCC",
  "key35": "61qJyrBZuNyx7u5nv3pbkTsK6KGS7UHyqVwA7WuzdKyspvaWpKWp31eUMUzFFsS1B92vZSNgzTuGifYvypTWgh48",
  "key36": "26cXXap8cPyVxSdQsGkTtP3pRTEcCPmMBQA6cSdKmF26W13CUVMKuvY9VNc5qYWMGULCuwjwvjLCmBuHCA9QhZBJ"
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
