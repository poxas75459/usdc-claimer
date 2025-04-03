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
    "4mr3NwEuf67BivinnLWjAuJmGHX8w5XeRjziBjK6hMCADfBtMjgUikBicE2Lr18rKSTUk6zPPCtyU7jB2nKJ2f3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UrHhacDcqtBbJGLvBJRi89AhiuusJ73nAzE2BL8qKTBMNtJaagMkbaaqpWwWG78UQa2ecKzQGjZFB15QzPdZ9ay",
  "key1": "DmSZSSNC8fR9meMRQyMm5BPnbaruvz5DEbAr9gvbvBzSYwtFY13A15URaCPb8hr4fyCbh1aFxRPPGQciD4tNdKi",
  "key2": "5e493pme7SnwTdndQjszcKjqNKCJQ4UVGegQefQpbNLUMqZy4fyQHiQDGBhNsmA3noeJqvzLBLdodXpo94StgDxC",
  "key3": "2X6nVbKUZ8aCCEnpEqTqyjT83RdHV13ca2ugVMXJbgzZJGC3cJLyYknYFC6S9oUwuxnmKyaZLKRgsG4GGvn1Yrsk",
  "key4": "4YanPenZunHYTcQmJ4t6mJP2rUrSDWpBU5DrSnJ7WCGbqZjpqS87n5qUBDCmHzMKDWdMUJmgXY9PKqvneGnnG3am",
  "key5": "3Are2iMqY1SXoj2CLyXz2jWdGpoD2BDMwbG2fkXf5YDzRPssX4Tv3M8LxefeedSajWPx3wT6DeRHFXCb6s2cKvg",
  "key6": "3eA1QEPFZ8h81gCjQsMYssCdYkxy3MbxUocSqqzpXZajbzcroPwEr6YSJ6QjTRfynbVDpKdt24fxoEfF4qFfH6s5",
  "key7": "2EbuahqoQLqerWLgS1cGLB82k23ZUM1sCnmxqNgxaUHMhFxDPmJzigna4ypFSBCemCtPYTa6peYE2FgvnDVN34fM",
  "key8": "5Mt2CWaQf9kGaAATtVJfxqMEva2o1BUUi3F8o2UXUHJhVPtgLYTsKTnCcYz1WfiQa9YaPGWP4BQbQgiGZBM32DNs",
  "key9": "4KffQtg3kEPcUd6nFp97dZ7a7ErE8FJEShoreuM8Z9v6yXdxRshfqFY8d6TLQE8jLkAydyVQnVdnHV682yvumdGM",
  "key10": "46B7Egb9vo3uDxvguteJFBSRWskzeRQegDV83KPDJBxDYSVhE45eXd2Yh3Q1s1ueMzWktmeknKu11yf68UA4tW7U",
  "key11": "3aZEXP5jStEceaZSQDqeFHchxj72aUxrstiym3PqV68WWMWcFQSHPqBuGXEyHMELnPE4ddgpmXA61ehMF1VF6gLC",
  "key12": "3z1vWgYgYEoDiKdcgg1WiRRdsi7ekfhh4LzCdpLKRGBHTTmnL72B1S4mys7qQPNSXUsegTaFeos6WXAhUg8u6Dhf",
  "key13": "3Zk4ewAfz4KgowhaHPi7jkyRsKbxNGgSDZhWNcna7USTHbZUwRkkd1ZkxVn3cVJPwR3c3kmP18s5BfuQsgYfShnP",
  "key14": "27vhWjikfJsSRqzoXZbyqLL1k1ctszf8To1k3N1DDcZS1s62shJ84pb5iL4EFAF7wFge5BgsepGTBGNJCm9copC7",
  "key15": "4X7FsLHVaHuL7zAv2BM5U28BKXpcaeGJ7x2413Mv7SoBf6YwFjGe99P2mK7NetinrKYRkYuXRQxZH8dLyzxLEwhE",
  "key16": "51Xx79CssZwqJ2nmdiDyn6gQ5zBxCfXJ6T3fBKGnqrkm7xe3weHTkejVKqTwdSFWH5fAeU3f9MxAvKUckKVc3LfB",
  "key17": "4QCb1U6f7xfaBChjeR2v4PcLkWkSiQJAZF4vEY88oLSHSTdH8rcLeSehcr8W4Y4qkDFrE6w1C7oPLDQe6ezzCvii",
  "key18": "SVjYz6PYRNN6vt7r5fZXB4TaajtksnqRHs8SV8P3dp31GtNcBrxHcZiX2P8o4eHRu2o7hVLpaoQ8TyGHPtn9Qd2",
  "key19": "FGjf9uB9QJpRwvieBc7KFDc72SLGTebLiJpQDJWMg95Q4u9jPdUvCCfBrmXDePLt9nRvivCSPo64xvtqcWv6DNb",
  "key20": "3CbBAvmJjUK5kBih9ZmL2zkBTQnEaiWZQryZfvTtzEwmKTHxssxPqutT1deLuf97NE4aph4oDZuCT6sfhfANLAjx",
  "key21": "4nV2F1eP87UTdqN6UVxNUzfKGHXNyYkpT32mNhLmPoMakd8BEDYhmbfbbqfeDMh2z9KUqBK7PJiMkK4SxcnrPh9P",
  "key22": "4yWudoAiZSzHwGZWai8egtU1b5Qw8XgsxvbKKxXgjrAbPj5Ji3vC3ihBmKhJsQAYJRS3eUCKZfVQhDjZBX4Ntgi2",
  "key23": "4LVCqxhr1Zyg1AZiEDUHoAQrBweCeWUrFHY9g1Gp1Jw5TmAryXe2UzTMzAoLJ1DczWQohRkS3oESBvVdhgeAURfB",
  "key24": "4MNuQffPxyEjJ2kAg4LyJzHCE3Kx6VfKG2YssgPtN7hZTDnyhgf5D6D8Y3fMvA1eXSWkSc8ufsGD5CRdEs5xpvZn",
  "key25": "2H4SDUBTQx7cuY3sVNNcwHShFJJ19HiQr96XbpnsnvmsMdm4cAUgak7pPuML9D7w9BdBFDEnakeaLQQPhZrVadHt",
  "key26": "2fvqy4yrH6JBJZ32eo9xf7LxDAknq3YwWx5nMLnVe3BEUv6j72Yfm9h3ztFcHmCEbnymQNdP4n7g2D1nD67PkPj8",
  "key27": "2i9NdXLZZf7tzqJhWWkRwxiEApRou9LnkwbEZ2VQ8Chabvmp1st79o8Gk8gn4LoRSU7zsTMKeeBDPYfsE8eUCQw4",
  "key28": "25pAZ1jRCCpcHee1qEadnHGp37rK5GkGxANGGcd5HQfEnKDLgycfjEEY6A33stw1GU8sRgcaiFZLGYb8fgY5UreS",
  "key29": "4QMgcvVDt3BjXvm3tEbiqVP2yH5FSSAwiWtHr94ULaibxKD3wrfEw9WcunWCR7KMpxTL6fiBNyomFt1YCy1DT9hm",
  "key30": "2NwUsgnujkDp4GqNpoFZWkDteUb1QVLGPE145eEKsvktt1QzHn6sRMSzeN1sjHkZsnVPuUfTDnCT7qsyoY4D6A73",
  "key31": "5mRzwieLjWPuGXCxDsqJ4P7WJg6jz5aTAaAFwv3KaMpmUHuWrkZrvwrz6ZgFxcVnGBQKEY14aiP6CnZe4gFuTYrU",
  "key32": "3dMPGQMagBybrCMwTVJ78aH9uPtX6zSou8QyFa8d8FHYMgPZiajAChEpaH9z2sZWsYCEinGYkSsecFQtrEuLty1h",
  "key33": "4YGUbaYvQ5C15L3nPvsxzRjzDgakCfcg8oA7XPqaXs6QrtzARMsDamHa4o3xy1fMCBX8kGXNaZg4WEBPTugKg1B3",
  "key34": "v6ZcKaM8SuEqYzFfRorVfZrFfBJxe96DnpQ7oHdJ488Xhk2EE63hBnPGQ9NxVQuU1zxJVLfXUMapAQFYif1rarU",
  "key35": "qphqU5ZWJphGbCfJimEJCsPNFZEffRPGJsKUnPLXvFob8b5upp3qKKR6ba1ycjXC4fSfCDigCfpVMbRJbeXYcWP",
  "key36": "2Q8SrfdotPZXkXUX3U6Jw1pexofvzHqs2HMurqustzakLazs8HyKAqaaaHC6HGyPNKoF4jFbMAWr4rkFomzpEMsx",
  "key37": "29YrNwPhWV2mGVCgZE1RJ9hVHt77Tp25zFyB32rnhiHGtWpY2uKYEufLumhdv72yskadRdTHMJie6ah8NdmuaeLP",
  "key38": "2w11P84doUac4w6HQmm4BGsipk6ebjuDzjueCSjWApdhJVR1fMW1aUhmKzQ3wTKVaaeUaSex6wpjcCWDj7uSXmsk",
  "key39": "5Urz5xBogEyAYKoNrSfvtCVBeKfBxjSmD46q6wwFH9DptJENxJFXveg5ih132sQL2WKoBCCpu2qxdJMfqMCr8Vt7",
  "key40": "yFUQpCDTNDLsytpwhwNEeknDA14CdzoKnvyjqb3cS9XtMnagaN4wVgBh9tTNxmbYiEEyjUXeoK6ZKgLL7yJWd5T",
  "key41": "KeVPENWzNq8d6T5WswzbrpcZrpZ1iYJTtg8GvKCzQJ84nw1wuZmYZ4MvqruVfvrzyWbFqbDi8M7GiDCpbgSk8DA",
  "key42": "5NzY1b2z8DFMHKjyJbAyzDRCjJuHNzgaLkSSGNSJyuoNAQQ9ncAB5zv62nXw17PtZEKLZ9qLK6aNdbZ6SgskTFXs",
  "key43": "51qMqARf3zpWWwoas13bFR4SGupmMQsZUUsrYYmayZ2kmWQHDMd5Xp9Es3mRGhgyS8M3sJXyKQ4uJKxKoMXETNQr",
  "key44": "2QiQCM4syBQuZbfwaFH6QFyFsiHEjTKHC3jBUL4RW8sQ3hZ62gGxUAMi4F83T2fMwv8zubbx169LpRFmNx99t4cZ",
  "key45": "3xnJ65sogsc24m4VdmCKiU9ACeYg5XNcnCMANtMFBEgu91226ERuFzPCRtyDHFRmgciLHUL75pP3NmGF8muA3MDc",
  "key46": "441KNnmgwWq7cUaMTWswdvFzEpDtVvSfXVpnt9GcixzZfNVELCQoFoKdgCCJuUBqmDq7ZEv9uCYv6DAyxzvL6dPg"
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
