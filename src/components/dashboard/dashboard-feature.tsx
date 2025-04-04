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
    "2xkUF1aWG9LmoqhxWtV1qqNv7sY5P7aoQqmrHnCRebUqB1RTuq7zBwfmBTeWjvnjUitdMUcsj6HcvQjwqwmvJGFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3feRFnUS6xJkfHCtqcb7h66RYohKdA7AAFVm86duqbzZMx2rzUVq524wGWLqxxnvKcmAAWHzoQzSya9h3WKNaDro",
  "key1": "5aXst4kGCM96j76WQxqnDXxVMjA3ENxLg7mdw5rVY4z6tgvABBVNBe3MB73QWVn3bEffwiHS92p1mdMrY3J4i4mM",
  "key2": "3KKu11wYxnZB3TKHBgaLNh1fVFFzhsT7CVNPQ6ur91Ki1Z53F2tfUWS8Eou6dWjNQBmYuNChsRd6F1szJ16RxJda",
  "key3": "3WkK2h8F6p9wmpysWGdut2cywXezQ9Brcibp6bsMm9LBqEFbeZAouvGtYJxdEZubdSEEVeyWbHM7kkn8ss3EMte8",
  "key4": "5E3viDEUcpsbuccDZygKr2kGBdzorYtoBTmjWBGZxwoQoFiKN2K9rSwHJky4dEiMh5rQNgNXvqRg86VA36VsJeVi",
  "key5": "2QQEDJHufBm673ExCJWkgWoB6dd6Y9KtxSBHJgs6TQLSfnziRNCRqrCLDD1bUnSfcFhpHXqqDtjYzmoWr9XsZCUf",
  "key6": "3TWvSCfTc5Jus675RCA9hN8u55uXDJ1J3oQZEevZ1VUWiAZmLbdKsVeVZ2KiQYpReueE3fTxByrQg3SRNGYn33UP",
  "key7": "4jZ9GeNGJfbmm5nW84yr8QdFwkxLfnTsGBww2iqWTBSkco1n94m5GzxbcxHP4wmDE73bxkTfspQ8Qrzq3qfctboP",
  "key8": "65r3b1NHcyKqZcN4idcSXKsbD6DsGDS9FDd38JX2hEqqy87P16PrBUCdu6upfiEcceezn87eM2h7Yi9xtkBcSjys",
  "key9": "55NGpKNd2bG3uNWW7XvmCoNG7VBwaV4MiqvHW5BzfbPNZNiemC2kntJoNnKYKVVsXuJ23bfotTPYgNhQToFwTRkX",
  "key10": "4wSXxVuAySRzvaiLBJR6YW791Rw5EdwJeLLr2ranLoGsze3mRnrbgHT92WmrJ74JSwyvXczTt4Zi7sy2bGJGSNuv",
  "key11": "ESQqHJwoM8aaeqawyFtvxTraE9gLsW4Ra7EmMhYBQhjd7zVbzEir3rJeRH4BEf8d2XQV5iegZzyTYR94ATYzHMQ",
  "key12": "f9nwwchwZM9V6LABy6iB43fogxfHut8JmwRmHWG4pH2QwhWAwJag1SjoWHjY9i2oQCqQgCBbRvN6iPjfKEYvSMK",
  "key13": "4A33qtiVbF4vHLAAzYARFk7rV1yXVuBXWNJWpaPkAES8h5GB144XNd1U6i2PdWnFR4HZrdgYr6V1RA6UXeWPCAWx",
  "key14": "59YQHseZDJh95D2hSm6deQodo7ERaVTNEfmDRSowDcK5VzV63Dy12FWSyc77mdWWY6SiXT3CdseK6icTqek5NCVc",
  "key15": "5XiJMVQb8dBrgciYvSYaTCmgj2nMCt2R1mQzPyqc4SVPAmLmhzpv9C54BP9smRYQRdvxYbuboMbGwyFFnUD9zTu",
  "key16": "FS5se1LAsUri6phqoQxq4YWUaBQVPpEWfzcW37Sb6fhuTGpHjwB6YihYXzuAS1Sv8u7A1yNYH9FgKi2AQTeHsMR",
  "key17": "5aEaMK1GTii8tzbZX1W5of1evfdAun3EFdnhDJsvnw4jHSDQfpqZmrXi7F3WqTtj8wtSYedHjc12VJEiuT5GURAs",
  "key18": "2fGTNJGdWcsePCdba7buuTs65L8EvsamVgh7em9wXyFtnGyVNACFnVyavXwPTckYn84fPkWy728So65TE8dhM9au",
  "key19": "4cm28en9eF6Tq7WhizCxc6E3zydECGXzExSz41y6nwyL8D4BLktkLkDPUtEMuZLh4QTNYr6S34TgEwbvTJ5HyYHm",
  "key20": "2RoosZYBQkUN3vAnjyrc2DjQ2B8ZmWM8omQkodvMouph7Jj3nQpqAG79ahQuSqXPHhn441Lbd8J2PagZKzgf7sox",
  "key21": "4cPb4BvAe9d9ENZgF7gj2i2GvVDcST9F66VXtBkba9d5B6tVw9tQNwwnpcPVJqWKVgi6MzkS2se4HiTPVwG29xRi",
  "key22": "5GPLb1LfeAPCMoWWJXrdPiSXgDtLb9ArxY9PwujEzD1GbjL5FBNDFMe17cGy8hNRPpcCoDAK3z3Hi711AVmaLSna",
  "key23": "619DS166QbPrMxjjTTxdV9wTwJCgvrYnGfrm78aUiCeJtDYAPdo5pDpLjDR8Xa21onppuYqBKcNAMqg7du9Zj1Mc",
  "key24": "5YsD35bcv317wxVHLKJFDdy5d3aSo7qwX2z49frpbMLAo5SHxypgUU29Jr4CrXtup8wTJXePpzdri2pjMHqRYuQp",
  "key25": "2zEh7xFSJEdWiJUGQL4MXKpffCmk7bxp2TyZdiXpgMp6vCcy7NNfgvmtXxXXXFgD9Hwq7aPavWJwD9d8nQJmXYUK",
  "key26": "xt7Pn9H2fXzubTSUbCxJP2cBSEnRC1N8HNPrL8tZMK6PSWMag9CusGPFvHziPh8tNZfhWDx8tYPZmTePYLT9EL8",
  "key27": "5vD5x6ywjB2yFfMAjXAP87aAStKTWhMZHh5iHjj2ANysUdAY3JYr3pufnVwvxjcktNmmqfqN5kFPosqsutd3iqQj",
  "key28": "3yj5xbpMR2kLimGVZrGiArNAgc7b54P6UBjoGtDCAXN4afSm2qdveoyDQvsUdWFM48tumk6G3V1b3XXSXudQUSE6",
  "key29": "4nmhaMwpmrver65yEBLGQGuLsixmuU8bhQNTH9bnspJSLeQmhyoNVHk8Q2Najncq8y5Q3tqWdRiDpLKLmtdM5Py6",
  "key30": "3zc82RSkEgH2hbWeEYFNnDX2YEvCTDW7eaCm8kcNvBptvmjCVxrVbpxksDB3nQqK5AAzQCEiSmLpMH8eQ7btsWoK",
  "key31": "3zNbzETbDzmLwHdSphwS6HcFqQZo4vEtPxcMsGD3aiVbBgs1LoyhmWDBjD9hQyWLvzfbtuZLqeejTvykaMHi2RbN",
  "key32": "5JFBWsqYmHdTpSffxAyTyVGTDhAj6P4gypwH823ShzRuNVykfTpZoUupBP2EFYhBtPFpBmATB1m9KMCzY516J4gA",
  "key33": "3kfZxpJDSNh7rojNgXJ27MrQyPA8jjsD3NvGG7kcGNaVJyWMg3zvGavEwNJsME9XGixbu34xRZkxKYYe5MnNrdgA",
  "key34": "5cPWGpr2i4KZwuAzrvdDzZtHPpP1Lhvk9eG9Vn18cBxs8Aurdr38kqpQPvHX39raQAbuWRasvCAV5EyeRdecJHsP",
  "key35": "2Ka69X8DuAdHVArrhAGwN8QYyR563fRSevg3aFmWxQv2cNR7AUr2tUy2ZGyhyWokm3zn9TVKpKit6M9NHV8BtjVc",
  "key36": "QWhFrFDjfUqTKw4CXnik4Ee4vMy4AqJTNRRdpVunArNAGK7An6okrK4h6fsTkPg5vVYugZ5rgwr4NsUJYy5gk9E",
  "key37": "5cauBungNVfDJHcWECh2KbgqTNC68gLuo1pc4i1NhdkJmQHV9NC9GvTdTdbeJn85LPnXFqCur39muew447FNbzV3",
  "key38": "L8vb3aQajrMMUL8h2LHphC7kQMmKAsR5mSbWHqBzwPMsdwjP8oDyZQf73Zpr42m2cVdAsuWFEsqht91T8oxEeFS",
  "key39": "qf7meNDJDDWs7HZSqmLTJG1SNMxc7yTorgf5pYKDxJgV7jGwVacfcc3JwuuTUZ94ApVwSBUXxpEvA54SRT7x1cj",
  "key40": "b4mihPyT55DB97S1M6wFhvPXjtk5njpAPiddULXm25tpqfvRKcgfrGbwpCcVCTUKhzXb1iu3Wg1wx9W3jG4FC7E"
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
