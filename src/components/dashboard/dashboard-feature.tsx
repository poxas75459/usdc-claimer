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
    "gzNYtcwyPQ9P9W6fbUd9XPq1rejN3xLo9zWJhFwgjZafw9CKJ3ng5cvkQvzoNsBW2SV99AmSPcAdTPXKWihxoJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NsvQbpeC7AXWS2NF6dHtTJR3cMyhdZMA5ipbCe7JANzNXZGgQCZdom96MqGwwy1Lcv8cixsRJvpopmsLHHGu8Ab",
  "key1": "3d9sfH1BC29wxr5KztTRPPeRAoq9HUkbFob6Aqc2zcKoPzjm42YUj7s636bhUA79m62V17HDbxQaZo7TyqofZ795",
  "key2": "5uMSWBuNJ4dHQ8b65t5ac4bK96LCHzi3KeGMLbGUCMBGAZYBHXUYHMRqd7rHHuALELrueVughfFjqEfb73m1SuPp",
  "key3": "65chSNE1oGrSjgQQQvsGbyTx13Ekyf9YF1Gy6FdnKJG4m9sZ5xyrbZ8EF9RT79FnTZo1pQYmMrBp9iANM6sFL36M",
  "key4": "kCYNLeFZMhgMYZbAErxq5JStVFQoQhyKeLi4gXGNDaYwvu4BcZtGXZE852nTD2K7VGgC2VbJ7y9Cvpgy3unUsFV",
  "key5": "JkiQsyLKEjnkvhzZUgmuom8TMhBLQEeSKnm7HBgwbJkmnsW1G4WuyvY1LbVJnvPvxEifAsqa6JzBtTr5jk3epFM",
  "key6": "3hDQA4omCHiHKrRj54S9hMDKwmiy5QLGSWggoEgFfzHjtq1y6h3LJRGD1GVa58pxQdUA6EegBHjks86bXtZjYnGy",
  "key7": "HK3GznoasSeC6SW1CTYd1h6EhsY32ibcXMY2t3MQpcPWT7EK5z9TTBq44iH4m6yb3qZdoAa1RL1L39TC8p5PmXX",
  "key8": "4NBxh6rKSUMyBhsMkPNqmTJSbEeMCfz19cWW7h8nhZKRb64J8ukR29jj9VqeahqLocBmRqPwudgC8HLPwSLcMEQb",
  "key9": "4oaQWjVCwigCUzamwtcvwhb9cssFdq7JrH5MkE2Nm9udKTfMRZ7bWPeps4VNge7BFCitGGJj2X7S4BQAXnwG9RH7",
  "key10": "2xbDvjtM2eNHwUeYy8rrq5WefGwJbcKaAFn6mE1rEn3ULkFRGHrQteYS8Cy2GxGStmjQ4frPwkyXwH6czWDYJGMN",
  "key11": "5f1hbwts6mDW48SvyXtqi9NdbbfMPyY8H8dhDgSkvcTFHiXpiiKQg1FiNDuYg5qYDzjxpUdKBFpfZnrSv6vaDxqB",
  "key12": "Mh9WP97a1MrBjN5AYSpdrpkAr8U3mPLTZY48UXYutRLhLSXjq4Db2F5s2NXqnJmX5xzxbU1QU47HpE3bVAiHJaa",
  "key13": "2TqFcBuHRzV1p48JqtmQPrKw7PpfxR8SaUFi36L9ZJSTbBxjiyVfdpVGfUxCGjc28qQ7ZAjPJndDcLWRnvSh5Xrg",
  "key14": "2nZqgkXuVD6BgRQccW9TbeFZq6zgn8d7FqrCutrgq5BkwRSNwiP9aoSZ9mm5Sjvp2hssvEaQexLwQbzbDo9bnv5s",
  "key15": "26NU255mapk1EaHiozzgVnf7fc52Ln6DaZSKFMJhMPkKpcuMzQUJcY2Wz5YgKs7wUdUssKWDdWGgjMWfC4XJaArJ",
  "key16": "4rYaRvfttmxFmWf34rweEeRbSVrPFFjcECsHEL4iT72EHTv8A5ZYfUPJkjD62Yof6X82azzQN3KRSDm36UYQ23j5",
  "key17": "39JV8TuNH5WtSwCneY8Z44wcxMtpoJetuPinswct8DMMtr8s6Us7E9KMzVrnS3bMN4ogAgd1dKrdf28nu3mtaLbJ",
  "key18": "2fJBMwLBMkXqqmzezBdTHmCYWQCcWii9Nzjud5o7Lhqmhfkpjfm1bXkmLMEvmr5AhWPKEs7QvUtxoV1CiBfoSUFd",
  "key19": "4e4BKrwjMavmZwo2T4UYBRomAefA8Y3XBPWjYwhrk1x57ufC3b86YkC6e2YFBdw35MyBSyHoepj1itoD5rLBRnte",
  "key20": "4zkbvkZwGdkS5P1aN9Ey7hsDGGpunDhjXD7ujEyBBzbRQnfEkagFFX1hCx88Spw2DyS94sAjb3Cwfi6xWkzQd9i",
  "key21": "RC2kukyLGnCU5PUHzjxR19ymYbAVwwnfAJN6Tg58wsJJNY7aDzsh6jh3mqJt9Vfrkahim97FY9YJHKQSyNNsFWy",
  "key22": "5rPd5vettjazfMFhPAaBq3struJSDkKb6YsvQeHpsKrpaxXU4WS1K42346LcnyhvzFGe4bV27fawkx1mMwRZx7Jh",
  "key23": "2ZeugUfrmswuescGtbNavnfyaQRJfmkfC5AWCnrrQi5cB57jtU8mKJoDMVjdbQqZKPoH7ahLNr3ebSVV1uQcoenS",
  "key24": "4GTgWcGUCJa61wXe9wF7Z2RGAJQBRnh3wyxzREarzMZa4CYnAavw4RRTEQhxT12csyRaE63LNpMQ1VkVh6oEb3F"
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
