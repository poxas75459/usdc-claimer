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
    "38oGsG5hG7aBrq3nK7vusgcQKZxmMtwaMVU6nVJd84PMyFBvNQVdpRSVusGnwee3CdAaM4ngLKLDmoaEUVg1MNiN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JPyPf2yTvLQY4rkZVgsxkzibjuyYsaHGbVcLnyutKPXdPL26pqMnFGqo34FcQSW8ahmm438zSpYEozvT9XxPjM8",
  "key1": "63AmLLVipcsctpZKYMCjRVLqEcygRC67eWgaHqiEdVe8BVUXADuZiMJ8dUU3BLthAAUYnWYPr65sj1JDDHxjMdpx",
  "key2": "7XgwowK1GLj32V8cjYdKXtuHuMmHooNLgAkKiNNkLBEXQcACi3LD3Dgvy1zATqAiRXsyfgg3HonVt2XdPfSUV77",
  "key3": "4jRZDcojNNFFXzRUi8NQedMjQoWuWPzMLoe3pyRxPXyLXbHaRTC5rLzvFUSMNMV8Zjc7Lu4ZhesgN3MQ7z3sWDTZ",
  "key4": "5KX6u5sHvvCtXXYvLqfHR2aBrbqHu1z66eZWaA4Xexu5FCRBSyrxKNLak5nNT11bAYHef4QXjJF6kZGoweBtQ6Wz",
  "key5": "21aXwipXVD3DF9mtbgUbsUecKokuQVDH2XzULWVYtFnxe6QtQcntLwD3S5W53UobNwpw4rNU3LwwZhzAKscPm7v6",
  "key6": "4heCeunkj4eCpuNQq9B5AbjA55b5B5wVksjLhMP1EBVC2q7PeuGbTHm1Nb4qA3wCHJR6kvo37x2MZn9yvJrbMs6m",
  "key7": "5Zfb4QCevLjGgyNA8LVk2rbjo1TopSTYcBaeUWNuKJzPMt18cuvSinWzqjCNyUgJWuAhmuezRyZ5XZthiXH3tfDe",
  "key8": "CKMFmv3ASapeLQnRF1eokLX5z6154FtkjstwVYu19UF4KGV1Zpo54KjUGNGZPZhQieg9CSqdUHeYhLYMww1x7JK",
  "key9": "2XbNnsMQ3ythNFC3CK67GUp6trsJNfsJyRxF1EmqChVK84LhUGZRqbCxWu7T97GW5jWA4CbYWBjw3cRZk1Fwu3LC",
  "key10": "28jPzer1Tqv7frs1WAhtS3JBsLxj6WuBkUryuQbn6jbw8dasnwc8oCwF5oBGTCqUVrUJ5HbEAdnrcm4A9qwLBAHy",
  "key11": "5x1ejkzrawdeLqo7qys8iQ5ApEFH1rMchCnb6ZyMUKjrBP6bF6WgFChENKRPVFAzwd7zqWCYoDg27HfFTiJv73FC",
  "key12": "2xXVPF7Lqri1WC7U5k6XZYq7C4aHCPGBe7KFKoHzEy74dFLFvW6wvnP7SwnYhzzXL44JQKEP1MEjxiM4CUsbFGmo",
  "key13": "61DTw3kbQMUt7e2YK4fVvKCEYd8TEH7xeaCS4GF8id1uKkWDJMq5MMCJNWEfeQroAH1G6zPhoTDreqqEcoF85bBN",
  "key14": "3o2Rkfq84f3pd6JQ98X19G8oZwxjMDv5BBguwCG2q6BR3DRmou5ZVGLHSNVbQvUu8HhtBBo7ZxeoYh6XLFinsMXw",
  "key15": "3WyGZnu8NfLj2p9m9FhHxcn3cdfYfc1nYF1HmQqRMXXaTWkqwrhHLs3G6CtedX9qtD6KPkMYNR4czFJVx3jJMt1k",
  "key16": "2nwmAUpNUBW7phSFJn1M4vmSarRpta5a3YvHk45ED6FpmSWuWhaw1DmXELEvNP6TNdV6vtQPewujaAc2aXJBjLRf",
  "key17": "5cq3dtM8fZt7VHi3NAHppr3ysDjC9hsry99boYwCCPoXAAiomszKGiResKj3GaEf5dxaftyBQqChRUG9BvjequpF",
  "key18": "2eyR1Font8wr8Cx7rBoCCeriA78tTJQN3i2T1fFYCyfgwQgoejTEfsvYFHmWPPCPbSGp57CJJEdoFmnG5xRM9xyd",
  "key19": "wfwML7UQJzsTqg2BTrqNVAc5JRao8GxB8prmPEBP9vnBRcLia19gRUBFe2DKAHYnD6zkRGmvPD3jYnW2ou76Nn7",
  "key20": "2pidbMtCSQ5Yd599vcnob1eFr3sXavAZZA2STuTCjq6CvhsHqBbGPjiECSofJ7cGQe6aPPbXx9J26jkTZa8Nzjga",
  "key21": "3e12vGQKzyGKTdTYm5svAmwSpF6tHhkT1HXTqDcvnNn2shBJ8cfufwkj5qgBJMjyC78DunQKvZmcqSupbL2HXAEL",
  "key22": "3dpott5jBkEd9maBB77JaaxdsjAtB3NeQ3AuLxrj7vxE6AgMS7zEoAHtes2UGGBgCMjYUxx1P1o1W4RbmNGhaKaV",
  "key23": "DFWWbTZBrCEJjenF535gSPeyHX8SkRfwWQHDCbn237uu1aJXKrMdokawAZzJib1XwYMWynWTqHGeZx9EE6WETUh",
  "key24": "5bbsuKeG59VCzU9LB4ophN1QM4rSN7QTweGYJGKNBvah2kPdDdLby51cTmgRNqpMme2je21Kg5Dzs68q7mcwEhro",
  "key25": "5bpE7f2BJ3a9fhNgY63tn56gaZ1b1zzu1eqMg1dsZSvwPcMWBENcZwUyFab4agXvzoZBQfk9Sp9EPhZ5jEVDyrNd",
  "key26": "5BLK8suZHGp8E45B53EBtBgD8aPgJ2oYMnASYZcqXfPxb2Uw3yJGAGiv1MehduNecDrczypSnQm88oKExhvqewBn",
  "key27": "xmdwCMMZfSxVhZZsyyv5Uv9ZJeNeFyGDweAwsfRZqz1rxHvuCzWY1Cf3R4sqqFyD1kDwHLM3nZm4GHT6nWAzCWD",
  "key28": "2ZziyqHjvUi1i5GqMjkccYqHsEqmwuVD9wP61bp8SdviKBTZk81fyzUazRNWZLwMgJzgpQUhG7hm8iEwTedMfChR",
  "key29": "KeDY4PUZ69kGM2zFNTvJwo9qVJZcov9LJMqvgytniWffFZrHqU75LeiLLkZiq9AhgNZNAGLbZ8DxCAQGgAqY7Ph",
  "key30": "qc1FcFiULt4QENmKB2oDvrTuuq83iacc87b5wXU2hvaB2mhxTQAevk8YK3vfhuinSPLwjZNmp4zhu9P628xnpb5",
  "key31": "4hXFdf8im8XTLKeQPu2fatpCiDWHSkGvGG93edTdC1UhBVFvb7WyYeXd54wmc1bNZyRoPyoZ8JVWrGMcfd45eWMM",
  "key32": "41YVgUMw7VaSjYUFuTRQUfPkcEXq2rUpDUNsggm594sq7fBWPDvcmNKPfTqsrpzikCLuG8qBabUCtaSbcHK82dcf",
  "key33": "44JwC787ahT2wKPTtdsTAJH3tBmnmdM3HR6655GGQLTdG143rRR8PNNu3GMG6J5awv3vkDZqN4jeaGo3CRKoCaDn",
  "key34": "2fi2kqDw9QB7TWhkc2Fp4zT7UhXxjibZKkCfCM9J73XfFfoUwEdsngLnTZBpcWGrearNWBdn33xEDyqyfEtzDQXy",
  "key35": "2butbY6TEcKmWBKW1cMfCUpQGQsmTyZZXq9zGDLsSrn81UiYXcUW3wErCYbJpBkwFM2xqQcaSm4Xz6yn3VF19RUS",
  "key36": "2LUr8zEhYXJPz7TLXzR2eTH6FFmKZ6VpbS6z12uwgEFxbKgNjedZmaNdqRDie7rNW53tsSjhf9wPke8Xq46oBgHm",
  "key37": "3PxXHMCrR3F9AYEeA8PhZJFFNJRRgDVAEMb6ocFn63t6C1AKsGb1c5LaRS46KHMn5oEuVMQi5CpFQ82rzWGUQHo4",
  "key38": "4s43VPPyPqzPhS8ZU75mWNpu3uXM9aZgHzmHmhhLt8ahsapwjgx6p1hPhTy5WtPWa9C4tnyCdshEWFx2EeWD2hzE",
  "key39": "14oLhR8YX3XCiepj2DASUxswWmghdVDunnjwCPS9ctzehZMsKiApSxGh2ya5Pj6eKb9mQJNTCrKeRRawh5s4ad4",
  "key40": "2VKQ4B3XsKQRA1xbwEdA8CwX5Pv9AKFa8p1gmwjeQ5y54h2f534i4c5m7FqbmUPMq5t2NeFZf7DAmNK5vkbyecPi",
  "key41": "3zumhHE1TATJkqNuZujLXnYDY2o7DNeKtknHbtLddL8Er16DDfCeoptoYU7kMAof1FTf9WvWWCU61hvtD1TFPtSD",
  "key42": "5hEutMViPWPxzqjte7JrsheWxZRbj4NFoBHpXTvF396BXu9x3to7z21MbDjBXKQg1JC4M6n2z3XtMmf5GgjDpGXF",
  "key43": "4E76qPUjciDXa29czrTWim7Bh1RUaCKrgcqHzaeZwnxgeMERYm3DHsbakfqSNSzFTwH3WLwq3xMq3n2ggsNyzGVk",
  "key44": "5VeMWtF7op4ezQum2KW6mMbKNJXyw9kmGw5LWns9RUssCoEnm36y2nBYTSZYe1U6xqLgCj3WXRahmXTSpYH8LLf9",
  "key45": "3e7rvZVaUcZBi4UyZzDhAVquWRR9bm8kSJQ34iBfRXke4CzRGhavN4utD4wMVMo1uTVxFKrrsrpGMTj8b1HFbrag"
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
