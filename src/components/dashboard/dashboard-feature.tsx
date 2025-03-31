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
    "55BkQMDMdiwE4q6LTQQSNaYFmim1VmKQBT9VjSHbnMov5Ct7cvQjFHxQKVTrNntpsF2Tmc5sCaeqLhnSACKBhwbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tKYyddpyX7uTpkC5uoYx5HbrHjp2CEzd6bp3YM1SZ43QjfVtPRdu2DCXeKxDNcwetJys8osTE8JW4H9H93oX4De",
  "key1": "3jJAHJ2wkwzR9S6ki2ZUiF4sP6dBS3qAoWN88DTafmwQU6cPrru2xAGRX78yEmYD1dD7Xy9w5WR2EJQHFBeZDL1x",
  "key2": "2tr7U2UY7PBT2yVS465NazabhU1bF6AEGWb2EqcSdfAPmqLBituyWD7D27nVLCGrPfMdDMQNEEpKjupK4T9QP7aX",
  "key3": "5CeSN3f5duyb7pa9cExrnrvRux3WLaeXYugx1wGotB3nRbjLpVi1Ba2J9GivYTMYtkzisuTd1yQ9yk7Z7tEAkS5u",
  "key4": "Wzz8jGRuedj1Yk5z8gaDMh2WG7YhwdPxA6B15NEgKpvHeJn1kBcb25Hh1rfnmRNaJ3QRwA4QXHoMpU8MruSAGRx",
  "key5": "5J4gJFBoTpfzEFH2ZMn1EhgZVSQjQt29pRsbxKgyoT6aVHpEftpRPMjKJeSyJLxBXESrgyUYWVUdjf1y9TCLJZHY",
  "key6": "31pdkwEPDLnyubph1v3Wp9fepunezHc1ezQFpYBSQUNzYevnUtsAH9H4c6c1uFonkYUvhew7kPHhy2wrmPu4UZnT",
  "key7": "2V6CyaaqX8SoX8WG5e1xtWYb71ZG3A6C7RDyJLJhPW9z41Ez6kLfR55pW2FpvqHvcveRDt6JCFR6YtC7LRVJ8pEK",
  "key8": "DbtQHGQtAYYZgLeaubf9PmzKqcVfSN1i9FyhfjiTUP35u7mLcTfkyYsg1mYo3SHSvVqUCzz7SQEGQcX7YwUS4pT",
  "key9": "jsBJAufV3ZoKY86vQczWapBZrKszB4pknyQrbpQjsqceWSUJQC3WXjNuafeJuqi59GaBhE6UGqRkRzm6DPYCCyu",
  "key10": "5vWABAEYicGULeZpfiLNw9cZ2uEdsNSv8VzTcNoxCGc43dD9VpnSHNqy4wHvpWxHBbQUBcvYfvrS4Hi1b33ANyu",
  "key11": "4Z4tmUpoqx3gbSTYTuqAEgnvCy5vqDkEkKU4Ke32KCJkX2CbG1YVF1gq3AdB4sNf18LhKV1g5yLrRaxLJdvTyyVh",
  "key12": "5xU5iK1nWa2Vi2tXVTpfUdEjuLasdWSvxmpNNnjsP36iGxH4iw2hLaL68pWLm2CMhciwAqfHm17WuRYVzwDHLpHd",
  "key13": "vAWRsJ59wNokbeABnzynD8kSQ85uJ2e5mY1PLVHiKsit4tdiZorseegJchfcPZPYiUwdRj3BBErhkBp7dhpf8W1",
  "key14": "5yM7fHxBz2egQyUQy6ehRUGNXczYx88M4CZaTeC1U5sbeRKka3VapNLAa67BYK5ErUEwCCfj4RLZhRZf9BEGnStL",
  "key15": "34VQcg3voKkcn3bod7dNqJWy2sVj4NE8Mg9Bd4yA9h7xakU9X7q5hhmfn2jw7puh2PcPorJxfcpyQJSH9enJh4Dv",
  "key16": "5XiV2LkXRU2tkJGdw5Sygg4E6hcL9Z9NKTkPePGVvd2XhbDM6mB7dsGEyEXVuNNr2ZZJM9eqD3CdWcHwzEpx7zPk",
  "key17": "36asVc75cSUpX6KRABuQYGCyCrpukMx549uejzbCy6Uju2d9kL3UrDQzhNzzJiCJzohxDh5Mj6yY8KRSuEKe7Bwb",
  "key18": "4WumVEEZtevG5xY6JUfydVJe1cPq8exppEVSDeSQRTat362wetmEN4LAcBS4oBp9qNdfBeHcA8rpuatoc7vzVq21",
  "key19": "2miA6rrSbUmFFdMzqFtYdBLybxs9bipZACM58QPqL7oZ83fHbvmoRhmB3V1mBsmqPWBFBiqrFZoKQPtehiNb5QbT",
  "key20": "2M14zxFiHbesDresw3HnxkWda2z6SgVTkfr3gVoML2fUzjRTsYsE7s3Px7iWAfcXhPtMzUsR7DEHaXkSgeWCogij",
  "key21": "kNoBwNQAiP62iKNFvMRMfhM1tDW4ZbW7LAyiTzERaHzWwtwX6cYddMRHLYiqXXukBGZ2mrmFMgAimoSb5Qx1t2t",
  "key22": "4296JFydkAtSSh61NE4yufULcwmQ9VvN53m6SZakU5e2J91TeL8YAWj93vpEgdzpJ5XUF12Y9pKvWt4fpvsUXSAm",
  "key23": "4ro6NPUnF1FrZkUaGkfaAt9PPcuoewM9YLskswFQUayJ7anP5yFt7syKmrZLPZrBBGNtfuYm9BcqpAjvgHr5zED9",
  "key24": "5dHvxWmjmnd68U5kAn6U6koZZLP5rxtBaJuRvx1oPsV2QkbkrSHwk3YqEM411mfuuMKjf4tUQnvUNRNwtw8YWwH5",
  "key25": "42B7QvKVGJxXstRpuX7bsxxRnpjJDEMUjSnmVzhDymH9yHcSn8rCUevgFVLx4HP8RQciyd9UdA74bazFGMh96mYE",
  "key26": "2BKtc8Dctip3o62hnAAFgn97PEMyc7j3wymwAiGP9bwgrVvh4AQ8sCMKZmAUisJ2FS5MmVsgPuGbNUMSSR264qzS",
  "key27": "28iDB5KNvhP68VCQeoTYWd6cEmmeWdS9zTbyBL8VnL5eEqzymEUZbiLzjjkqJnkqiTzo2HnjWvBBW713sDxPt3VV",
  "key28": "5BauFJFzjYLxKjZTcXWcB6fn1tJh6JSu9G2ypj1o6eCLniDzV7Ak1eY85bL6NMhDLLy9G8nXisXamHFgGdQc151g",
  "key29": "4ViCPVewbQkM3QFr7mLSPNiiUW3N5D6AS2dcC9EFsMRGmJdFuh7MBBmrj7xAa9HwiRSdp4c3gXDB22xM5Bpcfvqc",
  "key30": "2qPKeKRmkcLXqVTqcZn1zZtJK2f81pQcYvo7Lr6zPNDA5AYippHE3t1NNtgjw4D4qFLG7jgubMHSGD5TBUPNVwZH",
  "key31": "2cbQ1Wde7HPAtAda4jQA4XVk3p9nMMUqqg6KK9ZLzhuoWiLtH9LPuusGfevCeqx64T3R6MjPbU7d95kbQr4XCN2J",
  "key32": "5qM8vL39v7C5DGNPvkZvPpbz3vRAZdCXwdHXYuH5vS8qth6SqezdkwqqvSHpDHxi71g9bhiSDVtxJF5DhtkQufpj",
  "key33": "5v1imsrZLNsSyV9P78FHPKJ1azcgHFEHwCFQ8uCJd4ZxU2jivT6z23N7RcgEcUWXXSg3D6YxTKVTw1Xi1TUtccuq",
  "key34": "2w8gvx42DLMVrAxuatVJsbgzc3umSMjaBFzL33PpFfW5Sf9NCmxfRE5aqiheRfSg47jFBsCsPNn7tce9o3AKSZZs",
  "key35": "5nKKw6KkqVNKonJE3eruULYYWFRpRjzKDdb7csGdDEeywMyuKkZxkdug3NsYtE7h8dezQut3tF3wacEsGWo6BJ9i",
  "key36": "5Uw4yAtkj7oaTyYYwaVmzao7YBAYfgWfGF2uhboXzzb224mrtbxgM2k2isieME1Sc9WuPJsEWon3g8CKWXYbSbbc",
  "key37": "2QtuY2dET5GErYNzezSeJSvJ5k53itngNyjiM4nMKQdJyRpoE9hw2xPi9Kn2jXf2x9oCmMuopPi5b8PLsmx52MVz",
  "key38": "2BWLwAf5q1U8QKXvW3qLqyjbPFgEiLVmvBjC5U8NMsvNd4zXohEh3XXz3VK6Aw3zRETuEv4YUGqfWovTZY5MeLSS",
  "key39": "3kndWpkYN39eme6ha1hbEEJpATC58vqLRnZwLWxG8mZQZZS7aQCtbT9Rm19GcGBuWkgfnn1TrfpRV4Jhiko1fV3i",
  "key40": "CYrVdsfxXDbRtzYTMRgvqZJaPHnki8F7SgBCoGzqNTRmnWoaJjBqEiSaHLVyXeyjJihVFoMQtavyVXt6LQascxT",
  "key41": "EodsXpYQu1pDuquTAy2Xky6U93SQveMBKHbQsbHmgX3FDEMkNXoqeY17ABo4RpqjYTgr8Phxhjv3woCsumT9WPK",
  "key42": "4dgHVd7kz5b2nSFzA28QCwmoZDCTv7Bx1B3Q9tqip88JGMQy2HKhjq74H7kuykC8tfbB2z2p4ot6pTEHtr4CgYJe",
  "key43": "67QkCLsw5UoswSxYJNdkoQmjxcswR3h9KWBou8m98n1w7eVKBvd9SpE2ubqDSocAyG8zsut2sJynF5AGgHugp4oq",
  "key44": "4pKPW3gs53nToi61oqLkpvdrMWhhhvJASPhQyZwC55oKbpSPZHVVFfhuqJrPVmtFHaNgm6ufHEZsKz5H9wkBN97",
  "key45": "2MhUgVZHvaWG6ZAgaTRnFGbd2E9PbbNTfthkvBsh447JrdgT11ApiCohSwpCCAFN6JMQnnFq1HLyxiZBYzDBq1rd",
  "key46": "2p6PzYwMoHRQ4RsiCEMtCx11DjJo16ZWPdm61SGUZxtkED56GKAMKR72jJFhC1Svbp2hexaZWExRdWEPmUwqigsx",
  "key47": "Gu3uuQGFqDdcLbgbXxi4srxbWiG2z8NZ6BkdVHzG5ZoguNMqiiemFJLP7wcfpUtUDZmTVScHXQur1YxzpkgwAzS",
  "key48": "3MDtCGANAGB8Apvq59ifeM918LgQ56MZiiTCwbq3z9eVxciUfuqi8ykrmJEcqnhVEN8bRZcGxZbuMg7gTTDr6yXY",
  "key49": "vvDz7dcjNpXwgEXyipWdyaXD25giP8Fo949i9Tw3HVqabP2y2TEZQzyftd9t5ih23kx7s8dntGWoP42fTf5qbxP"
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
