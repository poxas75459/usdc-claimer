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
    "3MQ7T6gfY2hkDmuJTppkY5TTrDdZBZRLi2xxtKRBu6v1BQteBtBDwXrTpjJ5oAQDnZJSBfzayxNgkvcYdUxpaJCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n9aFQzE9LptrCWL4wZw7oMyo7kUmoLhVJSLKDMXYdUFobcq7udSijEjUWDDQYm4waYMSZr4XTV99UFu813d7NGP",
  "key1": "2XGZ9SXqJQtyCh4hnvCJS1EXpMyJKsqKGzRrrsS5VFLi54ohLTPRJNctSvwU28hPqHEREVATRUzcUdsw9Eq4qAif",
  "key2": "2G9zb9dfYrzPMrR3iAnND5ZW8HzsXhYPCUi4y6P5LKue4xskF1xZRF7HhStd1HrA7CHR9NL9XB2YUkzS48UzaELV",
  "key3": "2TGu5gZJtiHzPYZgQHEq2RaUdnzkNF4k8uFgMuDj49jgb2mH2HrtPJYq8rSTWFCifTDGYKz9TRe2DamPrYjbB9ga",
  "key4": "4JFPWsZYPwMPvg6kh2nRoWZVSJpHXcj35F4YRbrFe9U8SD5eHqSGJrh9NrDPJEACbtMGJkyT4Yad86WiGRcFZRuA",
  "key5": "4er8n4uv9Vyn7j8oWySfKXoEtwsJUAacKDafAcPWH93uN7P158L9vsA4aSYGmpCsz25F6DWhGwgb8J5YzhicGrBN",
  "key6": "2VKVczRqofsTeAJU3bpBWZwaymM2J7Z8HETkWLj7zUf3VfrW1M7JhDTRA55QpnvjwgX9HZ8ttrrPDCavcai3Zt1G",
  "key7": "3D7ES6Cxq9QT8fE3ep33rHEi2uJxYYLxr6pwYPzAkFzfQKCYR14QhUaguZ69Sn26MCAEj7DrLwiR7YfgzHfo1viT",
  "key8": "3U1Knz4n1bh4o6GqJxkpmxghrpcWHZ4LQTW97MzjDvtCtAfNJ1tQVzFnDiRLuCgxyYta3FUP8baeJdkddhgRmagT",
  "key9": "26FBGvM1fXSm6K69icNpNoopcYL6wAFnenW9rNvV88pyqxC8vTvSGaSwwPZg9dCbyt8tbXzJzL67Bx1hi3iZzT8w",
  "key10": "64WfAk2mwroxapKmfKyTwhxK7NZ6UgiyUZsZQpB3tTpYjoDqYpg3BaXyN51FiNxukBvLeQ4LnpaXMWuuEHeUjViA",
  "key11": "Mv3NxzpqsthPuFK5DedMpVkZjQec3uqnrfZYLwrLmJrrBVWdR3cto6AizpwrTrQYfwzqgGZPn1q4sA9ExvhyKT2",
  "key12": "2rxcKoGf4HaryH28JiuV8zj5L9T3pTbcXrCycp7tk6eQ8bMnXS8u1tip3bEZ4MTUct3quDheTTi243ycTw7h5hZ5",
  "key13": "YCXqZpbhhTPXVhSqLq6wjdGohMMHx4ixuV6YoPggF7pA54433pdhXehrXAe4BJV6WjczrYyZNENGf8Ui6BHQwf5",
  "key14": "4hVEay8dMeZ3TAspdX3QbMf54vZTBY1KMTbKGo98t8EPLP5SA1qokfBM51RUbAVgRrYatNSDKyduWbPMFX86okDt",
  "key15": "54GRePqGzpD3ky5WYyXk2tJjvX4g4QQqHqoF1d2kRizhUw59vd2TA8qvVwcXpYH96bk4DGEja7u3BcCQEALUKNaZ",
  "key16": "3y8xgowwfXrzSejyw4CEn3s6F1sHLqBvqAFxPv22hkNRgnnWK1NsMB1KJ9wkJ9JnPubfnWeJtmBCkFK5qZ6GzrQ6",
  "key17": "4MFmhGqPkZKhhWKYqJkf8xMvPYCF1geAMYnEMNFaNJM4a7MEZGVyChTfdVpNJu7jfLnd22j3V4sEftbF23cbJ7Md",
  "key18": "NFCR3j1qW2MVmJhetDxtZXEy597kxETSZXmSwmHWBMKocHKJgnLbfWCZrpcqMMtkS29r5ccJ2Xi8FbWBibH9Lh1",
  "key19": "6Fd4tqG93FUYeVsKZTEgfm5kUp9ph5U1wD8rudTPbs6GU3CFdVXNJJkEe4HRvf7GoVQG2qLpQK9V9F7xipXFwmq",
  "key20": "4PQBENqwLu8UFShVYKuXwpd7kKbstE1qGSAWwr8kDfda2wq38XisKjo7LFuZuFx8TBxNXHenDq2BU4Uya1s9ZJtQ",
  "key21": "qwFUbK1mrcqjB2jhDAgoWFToYgvKin9VV8Wtsm6xQyo7cvMFTdrugS6BtGTuAFesNPsPABQA2EEjq2oSygA9jMR",
  "key22": "3FrB4QHBwVJUweGjkhi4Yr9EjiGiayXFqu17YY3reLTzc347jgbjrwLAvSLHKkwo4j3pCSg1TV5np2FaAkHQq2U3",
  "key23": "33hj3hxUTjaRiPsgFCNAT2Ey2VbeL2Nk7TWsavrFHZ7qQkXqNUXrCo4u9N7CntytUfTx7WLzQJA1hdkTRMQ1xU2D",
  "key24": "4ZxUNbdHmG9eWoBAJD4PVXpwQqKAMzAoS31N7YkcyeizHPMKBcd56B9iziPUM3QbP6u51xPM9s4xS6Qa5bk3q682",
  "key25": "bo4gWwu9jQNdcGD6yTP36AbUbcevunh1j5hAKdFAFBf7KSk6k5sF42AyiQXK8eTjnK9hAH6b9VD3aHU3KxLtSLQ",
  "key26": "4zTDH5QKg7xUCFCKcf4TmYXEtTYCpDXUhb5fSN7hP4LxiBYi1cA93HFc3hTUqJgtbMJf6xaYRg2gBaUtG71N6vRf",
  "key27": "5U1wKnPX9gTFsKSmMneJvCQ7k3JKg6v6D2CZuPjE2aZgvxaGJEmeBXmEH6X5rfVbgF332dAPqgVqb3j5bnYRjgtQ",
  "key28": "38zaBKE4D6Mh4Y9xusHKZGSZJQe5tRMjnf76NB5ku4zxjaRefajPub1bVukFbk6vH3466fSGznXDbDfxmQV9z3v7",
  "key29": "3eC4MweBdw2DDSpCjVJLSAsCRVMtSvCQWWqGLySJ4yAHNYTKMEPHwPoK8ikNPqdFTmavmzMcHqXZYwhaXtUe5kFQ"
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
