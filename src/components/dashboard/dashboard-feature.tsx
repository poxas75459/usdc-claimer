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
    "3dozuamgbrswRTAEcZ7jcX5JB53tQkUakjDhMrLrDUxBqayziQdbt1QkG1FVcsdipZAaKdLGXZtaTZSL5QNjnCZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dxFSVxNrfXSvmuerot6RunyxCtWZe8sgKnj71zeV4BXjuQErVfvR9sqkHFCEc5F9Am2XzwjJWCBANimeyQUnFEM",
  "key1": "5d9UeU88cGUzEuA9fpa2CLPqBJFeJ58ofxU5BxVBpJHfUphEC9m6JaeNoaTaGTSsPmvyvW5C3v3WtLpx3KMHdGmT",
  "key2": "VVGJjQeaAmkDQcCKv9g44Pc5aFTg1cLKom7YzjSuiaeecMx4fVm5KxEHYye3eJMsGWDMFDQnEgWiERWS7vZtWFo",
  "key3": "1nH8nvUHxR5y8VGitXn9LfHrcHpndcnCdeeyKZesaxVZB3DcE7hUuij1skfBgn5mK6inzssr79ARvCVHNPWitTN",
  "key4": "5tjjMgjV6PLfBztiN7CT54cuhrbGGNCgBaqwQju2izzHe1gyDiq183SEu3oudRMidwk317jXW6b4CchcgViCPdkU",
  "key5": "9iSU9hyBEFnDHqH4D4n1NNGD85YVmA7cegxZbBcXESUwto371RUhguVcEF6gpLQWi418nqTJfxAKgCvEhWgScLY",
  "key6": "5LodHMLvKRqg7xnaD8VMk8E1rKGj99mXKNjjpMV4A1e1LHMdtTP1rzHt6cNChhcjPhUo3zXDb9ifBh2boay5QZa4",
  "key7": "5hGJMt5vAKppgnzoumGrPujb3gVgYk5ahRA3EkxpSMtGuodQLkLiNoNvkNd2UA6VKAQcKSYC3eXwzv9VrbhsaBNQ",
  "key8": "5cfFw9gQ59bi7NaqMpoMLYtvWHNDUXMQcbyQUiZpT6am6uncaVVT3xJs2cpwXu9KTQxokjJj657fEBq8sp5bUk5W",
  "key9": "5aa672hCNPGEW7z7ZJpyzkHHXPfoaAdpnZQ1RxXm6TZ1FxqwomViP5FCPRS7iSUzFwz6KEswfbJSbNfLpyiPZeMq",
  "key10": "4h3ojdKxuFztHcYjUWh2VYvukGPM5BMuP1xNpo6ZZC4i64493jaUWDAYKeVaJZEYAuSJZf2JtArMMCPNNycncJuG",
  "key11": "3RuYi24zjiJXMZKxYqiN44iU82SvaR6ehUvLYCBDfs4oPvPdt6ucrgspVzU93K9ofbVjoUN5yZkLw6hepk5aCUwU",
  "key12": "5gGfBNHtH8aSRBKLMmAPJfmK6oXx7xmQHvR4uifubPJfg7nQySFgCtjVjemcgZwtDiQm3PP61cgNkwNaDLFfS9yz",
  "key13": "3oPD1uxCNouWViU5KiBD5ezXcPCQgen26oFLciJDfccZ1YF9W2UVopb8wjAKfgeHSqsTdKQM2pyrbjUVuUnPxBk6",
  "key14": "66HfV8DtDoqsJ8joDLoCmgr944fHHkByy4qMsLBmj7t1tbS1aVbZ47KsGD93nvtM2KnP7YMYJwerD7boNNwwiqoR",
  "key15": "49kaDAMy7F1g6sZaNTxjd7qjtdTHVajcckKMMwmuC8RojrGWmoeqcq53ndnSyHJiskXU8JxhPHBVtq4hmjGksizB",
  "key16": "4UAaM9b9btuLP4kiasJAioNx8p42RPby4JzsBRiEZxHnvArmTnhFNB8noELFMQVijniuM191cGBeqgjUjQYS3S2G",
  "key17": "59AjVh7Qv8SZJXTpQndPZ3SAPXshdZipZu7BAzjLADqhZrGomVhMPHBtub9NyE6a3AybEVbAsjdWewgBquWnNCjQ",
  "key18": "5ertrXesQEhZ64phQTiPgtw3DJxFAqR5CAZvYXE3ZLzPQySfzcnnDAu3Fbfgtygyz7Zh4AjXUkH1nh1A2651YorD",
  "key19": "4yqM2DcoK9iHZAfqP4rFpapbRGNDYHd4KjVGFR5ifqduQ1Hs75n8MLj1G52A7nBNbZkM1FosPv3iifm4qyt6MZ3q",
  "key20": "5xjHtCfPn7f7ZS43S8JTTtrYxHc32cotNhWRb6QUHsYGFuHJ1gkWq5jY9X44Gj7Hqq34RTBNgJTyduwpqhbPSJbL",
  "key21": "2g8Uof5M9Z885m3ZKwznz3kChHKW3riS4hAh2qv2siAMEUrirGFmR45emLkRZeagjUKnoepB2Xwus6YEGhSTSaoa",
  "key22": "2wYn6TVNnv5ZjCSaWUDXcqLKvYuMfEKS7by26ZHjYxk1cdDStjE1TidHeCeYk52kHuRnju98XPcT6EVP5PR2ew3S",
  "key23": "LSkcgjBEk2US2hyPNmis4kT2r4FqL45JJ6BhvrKZEMub6rvrs1zSd8y53S6qvWB1TQmz8TiT2e3mHzdgqucZi4f",
  "key24": "3uxB4hair7ejT31jNPK58FHFKWjwARrta6vDesp6RPQxFdVipQy5zbcapPJZUSUVn6DEcECD717yZP2m2EpSzj2K",
  "key25": "2dS1dyZHSPax5htdfQPSawYM1HuanNJb9o7epnuzQvyjRAtMPTaAs4KgqDpmrYigwEVTRLWL4tE1CJ3QaBqxB637",
  "key26": "3997mYk8ofHoWkwZmr29KxbisbVt5FNp3QumUB1KiN3yzULfagyZCVDQc9MdPcqbsa5Th9jZkkoK4xXHmAbwW4Yb",
  "key27": "4JbHBPk7z4m1wbFddCaN9ZT8x5GcDdB1yman9TV5yRk1dnhX5ei4ehPF6rJL85nh2FE9z4PzkdDC2uBAEkscsv5A",
  "key28": "QuMeqD7NZkQEZvHmDYgVG3arwK1A9q91Tg9brfCpmh1q2xqoq8QSUu7LhQL5SjarcTAvURM9jSE5Y5cSsh3D35u",
  "key29": "459rgf1KLbo4gX3E6CWbcChBPGNvoXcTRzjR6EUYAyHQnEEb6dcbbDEXt2FeuH2RRNbBTDU8eaa4XfHkR9Nx3SHv",
  "key30": "3ZkaDG6CcabEeprQDEmYvX2T8QyWPAJ9brwmSkd9Xbta3eWQ8SmtJ262dFkMroug97Uf546NeNUEpcZfmheKpyoz",
  "key31": "3a2k1geA7m5tscbENGFEGN8JvXW4TMkyWMsSjuT8NdoyAeL1cVjQAkpSLv3uSjGarM1VTtCDPXkmVpVcp7u8U9RY",
  "key32": "cthhcArVZij4sNmYMXomNWHmYBjHbeu8xcUP6sbtCqnjJNmFM8R4LivEzHihZV1Eadk2KeKDrdoZ5w8oykBairm",
  "key33": "T8Z41L1iJgW5LzZJAx7VV56zK4qk5jkj6gvZzyAQK3ouPguvCen4Gpx7XkxWKDJgmadtWFK942u2ccj16LFC9r8",
  "key34": "2ZmEvbgFq9pdLyhEoKQ463zz2vAdPByEb8SypVUKN5hNrWwtWdXPRBVuzgb8FF9ceHKKtXvGfDJvswvMuMro36Um",
  "key35": "3vWxR3MNoK7jaqUj46SEPemu2isJu6MkWDbVXrvTWPE6YGkA6Z971v67EpES1Ui3dtFwv1kiW2TLDnxpYZFGCWy",
  "key36": "5tThsXQNfnPZ5BX4iFzvWgXFmhdHdGnUNeaSN1kG6HFgVqVDJYpcNZbt8UToHdFkaost4CGM6Ee9SwddRapid1gM"
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
