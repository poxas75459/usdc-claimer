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
    "4ZaroruCaWwjQJjAwZ43nxZNBPGRaTAwrDBV4NrHmL12WztwGGkZAFdbLZWixzcWTTDNgA5XU6ZmnSTJ8esyjKY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W9oZm6vMnZt6DWsKPBjh7qH25XFSTyajrygsFe4kbXpTXamwxtMV4GezrdbrnPPfntFJpSPhC9YVs8EHGigY11k",
  "key1": "46NXLE1BAkbLsYScY9mA6vBJmBXjbwkYbU3VTaBXSLTKY9CFdcXUgfhnwVmN7F2SQcpQLUpQqDVLLayZyV67qWYA",
  "key2": "45KNjXESE23iSHuX9mtqufFmtq1bZDktV9DHpUDw8WSDEgDUj7Fee6kg4pTMaezAD4tfSPFQgTHpQQdGqrbfXHns",
  "key3": "2HNnL2YLJwdvficvzr4QcTKpfj76YwDddRDkKTNMruv2S7BAqyvUrmrnucucxfP6hF4r887W32795x52ravYhajN",
  "key4": "5BiG7nNPREP8hki2F7VsM5dkQdb8QUkSdSMT67MHNkiiEf3vM3wbbSgrJs8HAGd2Tu2rtiswo9P2odfQUgDgrTNc",
  "key5": "38E9VFxhck8BJTeFVWeMvq2CKD8H8bLoUeAX2pWSRKQBfSGfmhskS49xnBGodB3h51fjMwi56MYzid2UdCp89Eim",
  "key6": "3ZN8KuXJm7dg2vpy5A9ht9Hd1YHvdtLRcFm5H6dYfEGwQMaK97k7MMNPnEWu7T1atrdSLs3xYwX9wj5cSz6m7pgW",
  "key7": "546tC4djZkBiRp6PJ5va6nKTzMYpT5dbUQczZZAUn2cM3yMvn7A61u9WeyyRtumdtgLZX2Xv7k6VamM9cHEk5cvs",
  "key8": "3xHayvdw9SyHtSFcacrgxRr5UhRf1V43ko1gUm9F7PPdBSGzoNx8HAj5SxLBPAXBk91QNYwJ6sDA3ws84BVybmJH",
  "key9": "5Dzuez9pp6b6KXHMdZ9hP3oGnKRsqdmiF5rKiETNvn7StZzBM5LCXHo8HXPfULKLwyeWjZR7TnxHqrfah3666R1S",
  "key10": "49m5biPthAqNmuAi98D6tyEkrNS26rKQG5oWHAdexmxXpiatEctJzvwtnVatTcBWU46e3CThoFG71mj38orj5CBa",
  "key11": "3jFvy6PPy3DQ24oNJCoLuDPB1KCtZcoJAkNNQasHN46cz6feCJQqe33md65LpuxWAe5J9sSQjmDkcnq14xCt4TD5",
  "key12": "3ivKGwy96pBpXe5UpWvutMMRXXGSY2SajWMNoTTNkcPLaAK9sVc6RjvNJaqEo4EgqFdKrjpr1D2aYjNSS9Dwyauf",
  "key13": "5E6B38qzFDmYsvPvffgXVSuoifFc8c6uGVB5nMyT7nJEzQ83TKAqdYtdVpv1h3v5ZkgjccYHpGZLX38VSvEi3LHu",
  "key14": "33Q8SCTizV7c2Wmh6U52NnUaibre5udx2qzrY4fisn2qXbxmDc6FUwna8wrz26wKLq9TW4g8TSzGSYCQvHyerNke",
  "key15": "3EjQ6p47wcdL2nFkT3TR4dFJSfpR9dHYNZEs1UsfRvqojqJi6kjTtVQJ66sh2GWiZTgaJe9jFofwf5yLT9QCAbmT",
  "key16": "3df4yV4qZgziYWs3MYraPcPXCNgkrdVit85TzzhcorCXmQYAxsoBt2AtCFRmddJ5YJxxAAvGkKft8ErzrtUrWVB9",
  "key17": "27VfHT1aTbZBJSvPuHeQyPJZtWaWstRu24zMQsy3XveGAY5qfiaJhzAxKhnpm8P46oBvmrCpt2q91ewisqMQQuGj",
  "key18": "4pnbWcmS61Xp6jM2tYUmzHpD5MGysMcxzQQcipJLYEEEnB9jez4uHUJFAna3djBSXzVeboMEYJSeDUSfT76fdLvq",
  "key19": "3isy44W9Fu7sLbWxPbGmV7UMgcu7DYRTjhKKC55UModev69j6BnsmC7ZGCPeN3rD5ZsAcLD7yFyLNiFLWd5dYhRf",
  "key20": "47qBTbbqBW2AFfhy4jisdu6jrb6BnppeXMZxzNaJ3wm8y1UqawW6GTZS4jLBrjEBBnT1CbFeP9j23E9qd93JtPqL",
  "key21": "5T8RVb4QNZnN7voncbtEqy4zeWQk17TeyoFFXGujNHHEx1kPLtZJ6pScziDxFkBjEQSd3Uehhqisgb4kBaShM5HP",
  "key22": "27eYWehbWWQT46NWncUMYWP3aHUVcB8SoUnQEnD4TMpcmczAGnhPkmHGVP1Fb3hxXXJEn4ZBXxn5GcWzxJ9AVHh2",
  "key23": "2jpeBgDKLBp5pv6zksj8tiasGv49c3Mxgad1T65Jnju6nHWLPiX26j8972eA9e9FVtAYCRMPSEi8wny7mtDXs8g5",
  "key24": "4mrddHs3GeXZViiqsuHPxq3BJnsw5cTFtoe1Nodz1qwUymwtn2c4e1DMwsAubRAvjhQaTpGpqaKYh6xiwJZQ9N6W",
  "key25": "3nNCLU6grLASqTdavVhwG9vqfAUs1vSyuUNqBo1HaExhZDD9umpXc937yQKZuYVWrFWV9XScm5XeZX2f6QBa47Yx",
  "key26": "qAQWTE42exHi9A7uU16uWC51ENJGrjgwKZPQLD2LTwuttC1m4ffRGJv8gjM57uJMwN894SSYMD4misGo9nDriJ7",
  "key27": "5ZbyVC6srYszkgy1uNf6EPQv9HmmPtJEewbmbN7SzEsRHG9xHbv2XYSAmwudpUQrFjYtJYfU4TTEiqhJ6VLLAgxf",
  "key28": "5q5JbqV7Dv3JXtFf4EmzwdtGzXmtXDuRBpWN685e4YU5c4StfhXmcRHC94CtS6Dm6Kzx6hjVj6G1hGoPX7ZRHp5Q",
  "key29": "SpWqVRxAwzycRXjSEkniuEwcYXJkYGeq2WcpKzvwwRNRAx7YZmtdKuhkv6uG9QYtEik6hkS1WnqX91fieihoruY",
  "key30": "5iyCfePRA4hxLYS4twgwRCBeyqv6zRmUZEtLQxepZK9ETzmcAf8rGtboPictRBXKnZ7X2qneHQAqV28jQUUnFmjh",
  "key31": "yfNhBew9x3xWp7tD1Rwjssk8dQz7dqDRQmwQn34UgYeN1wpRUxHGgXV92bq993RVFTYESDGyo9yd1pU5M4Kppbu",
  "key32": "5zcVtRntbnoN8d1cv13U5fkvup2WdSN1XxUuL4VxMrkpVpebQ9jJ6q9ybnvDLu2VWKJVfbWvTrvBRzJXx8Z1dxWh",
  "key33": "5vSotA21WRyQFynSxs5oKecmEF8x5ZuzEvkwSRbPDDtP9vfowSBGtxJ2T3ifkJvSsRg6d6f7fa1X57MQWq2J3J5G",
  "key34": "388pvZ7HkrzzhuLRRX7chYGTPwhpEBu81nAMS9YusZHh9vcUvi6EXRwJEhM3jhG1yZWYR2XB8W3J1EATRN2KXMUL",
  "key35": "4SSLqheN9dXKzSuxaArAsN8Qr8fFLB63auQYi6QtJ2HSLJToAqD2GxYWwGKTFp2aaPqQVpWn3fqfXLbQN2dhQWTd",
  "key36": "616HLbbzmC5r2ze9bbiaVzS4kTvaGKxsGagzaWmBPDy461Q4ZxBydnfCztKXsHeRUrzaxCtPs5S6DTUxJnX9ZDpP",
  "key37": "4ULKjznDh1vzcZyTBucgm7PccTMhxmuYDLgjnMhUAiqn1ZxfZzRdoTZChyYrVrNtwRjuPSyrv3ZcDGsrmxGrXZEn",
  "key38": "4CUHfcX8nsG6DTHJYFDnVG6tMaxjFtjfRGqKnP3MVxRvo6Enc7uuybRtKYaqa2qehcD5beZY4TYjmmujgVyKFhfw",
  "key39": "2iKDoMtfcuDejZEy4hsgFEjton1W7VZmt4mAkHhCsXn6h8JFkHPrfbFFe1aV12g3xdWyyuVFgcYRVa6EgWLTPwgz",
  "key40": "qakQKfzGDAQoXFJE3ZbKLTnWgn451phDFRgS9B9Z6BCxEjYdwNC68cLEP4SUXcgdJZfXM8dqXrhVdgK214UFNGg",
  "key41": "mHQ8YDFiR2udde59apyMisLLtRyhC5GxCrLHvK9V7AbzYPxRM47eHaTUg1ZKpq7j5j5XHi1m5v4RtMXhhtmrZbK",
  "key42": "2q725XEdNersdasNGGfj3mjtaHbfGVZwK5CgvdgxQdgLvuyAcHKSY3Gq6fhSMMHG3QDrfFXYrzhhU1z1YoqvQGJN",
  "key43": "UeUNqo8GHaeo7fCLPTpz2fp985zbTyL5Wkwe82rjUfqbafiV24yKKUzRp6J5CAEFtpaiJoihr3XhHnuAEgwyPn5",
  "key44": "3FD8QNhV3T7hNWjec6TgRLE76DzwA5ENyCfTMvt3dMtaKGMNkiwazYTj4PQYeE1Qf4BHUa4xLKBo9cFFey9Cg24J"
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
