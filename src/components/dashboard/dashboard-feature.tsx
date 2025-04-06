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
    "37XPz7eWYJEhHWj1pFWpNMHDD35h71nQrEJZApdwpYLgA39QmtqEpSS3VyALbx9pJR7V7S2tVvQZL2AAoqt21VFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mnj5cU5Bsdnwk67rFc5LPw6Exo9HJ3r9tiUQJjcnk6JDkrB4HREi3ZgKwP73T12dHXNp5GVD1JvSp8WT5MYZpst",
  "key1": "1GqGnmVUDD5ydJHz3CWb5bUvYhiGvn1ZNRgN5NE8CG6wKVpcGFZD3Tcg1SmVfUu4pLYRRyGQE8h1hHmufGWrTht",
  "key2": "W1SUoah9wsQxqTp4xGDSsoptNSLXkTTs4yzsAjKWPSNvYrWyr2tPYnHp7KtTZhJ7urdRLrBPXLW1QukBSoZ5Gxf",
  "key3": "46xWA91Fv4oRQSZiHndKtmMQN5xTuAWdMbGFd77JoxXBKZtrAjg4aEihTx5o4Ze2sK48qDBmWZceGib3Hc7FvKoG",
  "key4": "3XWqXaU1uLYwrLoq4JrJF7tp7jHCDKii744YmRZGPNPmRqUgqci4rbxmdmqkoizS5dWo7skoo7dzurSfNTtnNk63",
  "key5": "5zamsRFGoC2B5zQxRLe9gxHL4YQbvwmJH2ZhhmMFxXU4H1ivq1i2uNVDvwxFLShDDwLevbJQj2kgfoQ5jjpoEUWT",
  "key6": "4u25hJKNmwJtEt8yNgvVHRDEZvbXAGNxw8mjRJdRhK4UyXJC1qxGjKGSyAubtWu6v45NnrXUZz1ouFANXJ6LXir4",
  "key7": "3mKCVRWYENojgiprogqRjt9Rv8xLNrw8P3GippJapxFkjRCVCsuifaatBk3Ckd2XfqAPMiWjEKMfJS3v49ZueUaf",
  "key8": "3Af2tmu4L3wZST4uv79Uh6tLs1o6mv4Yz5uS877kXHbexoPFeQJhtKKaDyqqkdxcB34Zq6oMddPAZrPjfRs6ivjn",
  "key9": "5awSd6FdpKpVJ8x4C1V2qtmY6RukBHHoRMgPhb4Pq6A6zKbW9xobdQe5EW47kW1aQeyjPJBPJXwc1zh8j3yQqY8Y",
  "key10": "2G2FdzpEMt1FN4tqeYMLCVzqWMGxj5mfW7FWY2YbUogp9fUuAPPLVDkbn8cJNVvf3mEtXfZwnsHxre4Bdcfaq8YP",
  "key11": "49xj7Ri2X6QduizBv7TFDV3xHySzdZnzvS6GgSWgc9wGAzzRFbzFdXKddCM1yzhNHtCwdeKsw9V3syicN27NY6fg",
  "key12": "2ZqFmKQtpHfwjpy5B4ADVKLCZTwbHKtkTvV35igFmQZ7niMy1sCbX6deX6kfJ8qjj2bQQSKC3TmsimyKDjjBRWL8",
  "key13": "4WnrrHsdc6KDnTDHLrbybAyHgVavg1n9z1tcXj4iVdws68THLQnmAtNxpM6pT5ffpPYPVQEuSd7XNbK4w1tf1bVH",
  "key14": "2ss6VMZvkC4QmwWaCyYV6XK46KKTdjqa8NBbe4bmjWpYeH7GqjGEX9MvXCkv28ZReyyMPpecfPeuGFCFSywsS7kG",
  "key15": "4Uf5J52VLpnNjr3w28ZYPAox8umkmqaABcgFJtEvBdjmYMsZCszgZr2uYSzQ2y6eGvkhq9rK2bQmrN368yhUhYPs",
  "key16": "3zenD2kfitkGEx9gx9Ri5LC3ohoGM1RjsMa5drEUDFKTczrDMbAaCh9Tur5SGgbpFaEcktNQrKktrhXvPBkziG1T",
  "key17": "5S2Pqr1DwwpquQBeX82ZA8kk8G673B3tUJ4mDv85ko7yGvNx5fPpXCpH2gc6yst8aU5hsMtBVm3Aw9njPvR72T32",
  "key18": "5QUxo5aU86es6vL4X4vhDyPWLNuQSEpDi2mMcHCQZq1wR5W9aL6XtHuz63MVpFvr3BxQN1zsEbL9DCyw5NmpKQ9b",
  "key19": "3FW9hPoU3VY5tL7p1BtLPR9eNzt9HUJRzybtspRR4mwWLjAW8J6yvZAxUpwZqssM57Nmt6RLd8Qxdhh7qbrACpNY",
  "key20": "2EnxegffgHdgKqqbH7HTEFdC7b1KirFPeq95pcXj3p9LySkNa1j8rQgB4REbtY92d4a5a6WynfmwWAo6FgUwVwi4",
  "key21": "yHqm44Cc2HX4RFYG2bRYpGtA8iC5VaKTgHuZ2dVgTL3WsDUQQ6DuYjtqyR5dT1v9SkBjL5eiBWdfcYbfTVQBVmY",
  "key22": "2TRREDyaundyeAwDYi4n1zhMCkoSjaYzdt77REaD5Udr87ce4D7EnmMAXhu8vsZrsRDJmoddtLtADCgsXsu3ftw9",
  "key23": "3VJ7ggmnJBcThR67GUc2TJRVtf4Z8QMxPNaYQkQ1Ub7pGj2Bm24phX9hgrNERjKMVwgMFYUWbfUa2PPMDdZC1sdS",
  "key24": "2sMPc8ksrG5yuQPYSxMhSSZ19H5iMfumgiaoumAGBNojbsHS54grJWUaS9LwQCcRKw37tPeyjKLtMh7SU86gRpaF",
  "key25": "3y418zvNTdNSMVeo8Fyq6EpirRL8zmiTR6zqAfbKVmGW5bxNWBZEMTEJQWUoespT5FpcHpQ23h7Tm1rgHB3FsVL1",
  "key26": "2senA1rcswDMEiiiSR8rWCUVpQyBGbRJkggHHijVGu2KBFut8BzFDVbPihhzzzM6BFg78QexQ6QJZDLkkLD8koLY",
  "key27": "VKuTat1zTtHAwraP83YGmSciNGEBbDdz3PF5CBE3LB7zC4AG1uqEbmcBkbCCaVv7V9pvx934B1ZSaAzA4A69u89",
  "key28": "2BREgP1J3q2hMzNcFqazHduYhjD8JC9AkNKP1SuVSrXDCpo9skMkUSR3iwhAEjyvw2PQdkwHBWz9zgkWE9gHjurs",
  "key29": "3ENzgUkQX9vkbgWokPbcmNZeekhmdMyyGS4jCnZM4vBfhRpwxsbWBv2eqsKZFQKT6MVGj4j9bmPo6fvnkYGrzMFt",
  "key30": "2ExN3yDLxuL9JCqxEGZZPK3fec9CYrWtCRmPs6p6QzAcmgt77xc4LJNSwq2bUpu5P4RmeokELQzMVsTiiGZewyAN",
  "key31": "3hVp1b7RegDhRrGa7r4G9hqyLNDg4cLjnQPudyxgD6ypPYX5mzzBrBQp4DkYzY7o9xZtpGSXvhYC5zMgeH1qA6aX",
  "key32": "5749Xc4n4AHDGjeoyN5DdzYZX8hhH5He6uR8DfGuPcQe4f49Wt7iPjF9YsHsmT6KwwzV5Ad7KqReiuKEE477XVRr",
  "key33": "5tv7feDJXV6JXXSjJy351BQCzNVvsxQrXGirUnyXxH4cT2jMeJmZdrn7cZbuHjYfFCFwwuzZ7wyTw6Gw5HWgCmMy",
  "key34": "5ftj1aGgBVcfkFb7Rnqg16TSaSQUrzDmWf6mCvg8mxfJejjLhdc8a6MiGwTMEtA1iaN66RzeCVo16txsqEcxUgef",
  "key35": "2WRRYQkaDKMw9k3MesPX7DhLD51W77jzSCDeo6yPBfrVmHyQoxvxN9fdfEDtSQ3MtXnQBMp8pqCaW5dLhEoJ9r7d",
  "key36": "FPMQFD51ex943mRS81NwPWFBCAFSgz1ic3fqUmkY2ep2MZfrzM2yaW8LtihvAj4Aa7HHn1Ue3goDwSdqFuhHwji"
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
