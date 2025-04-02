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
    "5c7AyJ2qqcLxyAbs88ztigBCN8W4eRiHbJuf5tXFUrvgiE9UGN9LsJ6QWXEGdP6X9Dot5M9iUV7tQ8dAMwHW8hym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NFEz36FBentn2FSHnpNtuZFMwRaLd4vVFGju99CWHn3ng7ZXPJ2G4Wf7T9TG9qaWYHheCBE75w6NbZ5aXuVrBgA",
  "key1": "3Ku6diGyf6aEph4xtSQNHBUhuXfyG1R6Kn5TYqd7qFkRMYaggSBGqeiqBz3d1FioAngrCMVZ4VkoMbM32MNYJcmA",
  "key2": "3js7eVqMoAboy8nAFMqNQpWmoqxVscDvjXCTyjhYB3unqScvhCdBK5E8SMyouixfeiEYKPpm4oTsXRNjxL1bLKLb",
  "key3": "z6wxSsxCoVTGfeLpLakWviv2AJrwQNAtQK1Z4216mc9mbjaZNLtnZASxQJrFYBgjhCKmUrfJJfDe1jWVTQsc9ob",
  "key4": "3wA6mQMboTU2YSwXuim9ydXEj4xTQ8uXx7o4n4WFyPYSSaiE7HAuorBqRPx2amGumjKEdtF7RdAQiBgbCe9wbn5w",
  "key5": "2zXP9u31FGTHaZKM1u23aEDZJLXow3sJTSE9fuKtNFDPKe2o7ouQfhimc8yW8MRCgAE637kSM4ErXRUohwrwUqNf",
  "key6": "5AX2aNuXjMrURBNwYSYzM73CzzKSEjLfZoD7ZQuGuQoEkEZiQ9cWKY7NFWzi2wR8TB3B94TemyPT6Q5yWkkwaTyV",
  "key7": "5wjppkSLbPbZJiXFkts8UijWp4LCVgYdfD37WGwrNHhKMrbXhYQQJj84f1PYJojsw6ak6VSxxeyxHfhtMoFL5ZBo",
  "key8": "2DHm6DZuBbv7ZzG7DFxSXx4e8ZVB7CHtjMWLuNoJdDkEm4Poz5dLvtFEHAwMgdZudjcTDUwvhSZxCpwGFGyWbaGZ",
  "key9": "5nwnZNWwTzkecrrZ94WQXtxd8ouPCvsJhPG3kpd7SF9WfgsrTkQquwj5LYQUhsaGLh9bQT9qGME4v5CuZfH8nG8Z",
  "key10": "6Zv8sbUqFgSNkYVioKsqf4v1yxn8NuVyEeFH7V4a1bHAKDHR64bcpAdZtDWSvwRkZqqo1aW7VDUL1PCwLWTtjFL",
  "key11": "2zF1daFqx6hYNcmjs2TWbyRsUnQsVedZoKuF8J2R7WBtTbGspUAsuE38UrzbkGB6ACSvGKbo5wqkrACpEsXfynLG",
  "key12": "3okFasXPQKPKcUTKnKg27KVDU9MFF1gUEvTTdfV3zcTNFwQgxKjBHPu3jjDW1WaWFYhbqvCo6t6U3FDFvF8LvwoN",
  "key13": "24wJjDyNi5b4mMKUR2QRthWoRjTgxzrsZr9WZqHjVfDq3VQVbSmQ26nUbAykcNbvVbYaqLtLVdGys4ihvbVFzumT",
  "key14": "3o8KcS6sFCmTSuBBQDbiwaP6g7GYxFnRuPYVodHK6hU7u6CmViwvNPWnj4LFC5aCA81r4mfTY2HDrZSank4g6hBL",
  "key15": "4LBdQTEsgniso2r1VAcDc3qaezUmCC7LnG986GgeN3MikQvwfgTMAwJhqWKLdLsxEnHibkZr9zmd9LukNdi9u8DH",
  "key16": "2GJPKTwnUp6AXzDJVidqu2iiQtFfUQrZen4XgxdjDChcDR5jwJMVLAXLQ5yD2DDPVPhPoPAGWPuC3Do4pqc4jsYs",
  "key17": "2Kw1C7vsu8S9diZth9cnxsMvMsGGNsu9S9DHqowfmunBP6LE8c3JBBNEHv76ZKsQ2hvfZVdEZQg5W46BwmxPFJYb",
  "key18": "3QahosLXsRiVrCrmy65HpmHgwXa44oJ5e8WBdksqoGN6foq8E52xXrDwPhC67Z9DMqnKVcDj7o63rp823J7s2cyk",
  "key19": "3NNW33YMo3rRPmbRXky4R4Fboh1RWedKDRPrBEyTCcmYAmaQYSHk8gccJtYxWFnjddeQautgc2aCN8nox9hvoG2V",
  "key20": "3n5GBvhowbq6eXj15SS87gdzGPvdRf2RpoPjG7Mn5oJjWDNFsJC4aPxiyZifQqfrPj73kJnrRKqnuLHVytomkuVd",
  "key21": "5GLEJ1KJq1gg3kq8JMsUZM75YrCA2FyFG7PuZmF1e4CZbcghJDJzRu13Y9fu69LKv7uJq9mFQ9Q7smMYEhyKyw1J",
  "key22": "5vPJe8VDd8TmyEtcB4rvmvCEPeePD21Ezw7WaASitARzi4Go4tJaPEhwcbepnDcaUSn4gjcDb8EUmXD5hAeckyLX",
  "key23": "4cLJJeWfutn4UJRtywPLyDTWPJbwfBhtU238inpfifwx9eeztD8dUM9sVCgP1QwLf7c79QtCZBYHXwAcAnbF6p1u",
  "key24": "53t7Zz8HDGsVhrJRvyf6bP6j2N3n4vmqpCaB4ErFwqWpjxbT3odYFuJpst9kuodFBAPgh1uyRGNQs4L1CSAbwhhZ",
  "key25": "pRSpiwwDNpsVyMRfSi8H9ab9xcCSgKuQ7ffGikdPydtwpzYYP7Nhpk7aMo73pUmediqoqhAxNi1RbHtC3nWnsMv",
  "key26": "2oXouMAHrXJWmnWTTp9vF6FjvzfGSvUmTPSsrXQcdR8NtTKpJbK1ThnWYq6hzLR3jqUUDYyGSAdz9dAwJxF9zhvx",
  "key27": "iKXMxJpepcUfr4ifiCMwhNtBiMCQH5SWP7PokxTZjYpYE7XsqrWVq4aTXxGNoTN1ezWEqgtTvMrLs1MkZyLj1Wf",
  "key28": "5VdssYqxAREjZr8uWQpwDjp7LabK3f12yNBXFY47mRSTDbKuFbGpoGEGY6f8LZs4MTAF1eHwGBP1JeQjJohkeFyw",
  "key29": "qAnPnZRXBsDYW4tre35L6jQWcizYuQh3MhKJW5nQL32VdcauEdLaM1BwLdjHJwVLYPZubqnwk85fbPqvvGBSfM7",
  "key30": "xxhRMFdimQ5d9aWNNYXCgYChXTrCfzVadukqCyRmRsacyY41LsVKywD11aq2YvKcxVgwCjz3RKW3TvyFM29GV69",
  "key31": "56hAQRym6UWkJjzGpghsetvus26UCZNkyVn4N3WbXHpoxtYL52rvC4zz51KkWykaKibUGjUBQbsYJYyGinkPyi1p",
  "key32": "14eugQJqweLwijy9GurZBGFJ73uD8iaXjJyLFFvV1o3LqNnv3MP1YPMpX1MwoGuwjUzSgDeJnoWL2G9SaJH8ewk",
  "key33": "2KTKhhGdnRFuxqxfFnkKwGkWWEjMc1yGPJFgkQShCVymporpDESHMqA86quZtdbTFMfNpq7Krmj3JMeWu5PXxiPg",
  "key34": "5wAk8Qn2ihckjFZhjN6unHqU4HEtoF7XHwiwzmSrNhnm4QfyZsa7aozhUiodyZj2V2kTQdpC8k56KW7Uk8yotYmc",
  "key35": "3NoEjjjomG2AswLJV9J9dkzALvG2W7dFGmNCb8py5Q7AAX39yUsmyJu6MQ2f3mgFBeUrT6bFq5ZukiQbFEzbxApJ",
  "key36": "3jZP4itJt8vwfBC85n9erqyTR2k9K8YCKW165LSb89i1wCukSbQrRRG2wG3d9Mwvoo3wRZ5kYV34x6evo5JdaPxV",
  "key37": "5FmzpTxcvx8n9PiFzdvKkxLpfWUGMCJSpC3NBuJTYz6i8McBzJdRrtAWFN7SpEyqDVq2yh1SnuCt4rn5LZJcsYTS"
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
