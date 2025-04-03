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
    "3a3CznhKWSkhZRYH8qEJDnkD6pPwQSZWpeD4ZWKXQY46pAahSQVmC8TrkXgNn9zXrHJFj7femktA6X1pPSdhqNPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bd43Nj3nA7Ev1N3rWvoW3ysSuKs2ogNcGh2b619ASUHPVUNhrWAvnTKLfAJ4BeAzPhhLXgJViE7dBKnu53yPPYZ",
  "key1": "2CNTaF9ovF1NsTEvNxHqfQ9rEyzcoLKL12NroXqAqn7Vd5jo3MbP5NTmnD8MxnHUP6Fn92WgmX2sd6rQK9ugdrxC",
  "key2": "4NKyngtJcY2ZNnowNYLUJb89kVt6SZ6JKfMs8q15T8mtMh1fj8FDeCjt99EQdGjEqc2e41MmABXi2S8YtoHmQti2",
  "key3": "4LEqkorpYx6PFUPcGFxAXfu14PMrRoukauJmk7sqDr8DEe25s5TQo44KYLAgbK7YMWqK28EDCUYxpaQUWoNU2ePe",
  "key4": "RQjHMsGe9guBiNNBbNGDRx9iKuuBc82zs3D2bmy879gbTyY9robTxdQUriuSsuUk8ZPwQ83djv665nDK65haJfu",
  "key5": "yZUsp8wzfpwWT1VBy5ieAnFUZEaF9M36Ea7KhkmjQt7YF5gNEM7hjwBV9wjm4d3aPMJwAKyruN3oaytiAP4xL5q",
  "key6": "42EPy684UGkfsqgNQMgcbn6szRgxF2Svhuyt4NcFYmsUXuzdkokozbhxU7WaSfp1ThYELezn4H6Vs9v771UQQWhh",
  "key7": "2AA77BPfRdSmLLxbmvCNufqZX4AMoq3SjacGnUt2qhJn7srZLSDAhPjTd99p8YoiP5HsaNHkqSkFRuU5xZmPtKyZ",
  "key8": "uxBG9X5caUMyssN9bngHfPRemgKEgCmmXKFc8QJJ8wY27GMikPQikS37ZPSQB4p9k515BDpwGAMrAEeD4jFXctc",
  "key9": "xTzL8qNUU4QM38yLZSYAZJG6XJ7bjvJwdF9aQUch6WJTzhF2tqGtHRioLay9Pmi5iYp49MKCJxMCqpiZA6kwZPC",
  "key10": "3AtogeUiSP3vHQZ23ba4RRe67o4na79xrmTBCz6fMMLeLfxtyrT1UgB5fTnEqvA195r92JUSEvX27P5i9HtwbgKL",
  "key11": "67XQmhaqMhhhkXsJihfxXWg5CCpDuKzaFikuW359Lv6qcicUrmXUhmZSvQDfCRpMik5CwfK1aAwQXbL4yg9t6Lnf",
  "key12": "47vnXgFgZbtJpXaZ62VhuuduqADfkGXTr48jk3we1HqgEq3mkfiVyCcvhtJQe5uUJdyVwvHLY62ihhNPzs5M8S4u",
  "key13": "sEVF97v6b3FMJbzwpZijqP7MCfDjtuCbNUpqNiAuf5CC7EVAb4J6Je6wzUakkbBremJ97GBi8u29uituAkkVy6Q",
  "key14": "3Vy6BiTmrKWNgzLt912ir9vnsQ1ZJkqPpoWpUS7aichvSa6vWFF82pSAB4PpNQoYFAb3z29AFMB7VHGvrUjH6aXs",
  "key15": "4rQu5eJTXMkNV6xh4T2xeGj7XWteytqrBe4BFtjchZBuDRUnDQrgs6W9bVUrx9zGh2fQ9BhQtPFZYEuWr4auSJ9R",
  "key16": "2G3HPPL227sHkFrC15DbYWTfh2sLFuWNESvZFF9xboYratGDvwj8FEvFixbNqwqijbtCEacWfqWD2eQTu1zViosx",
  "key17": "323GCCrxVxXJGuJV5XABHNirJujwdvo649E88BuLCSyC9EWsFRs1RSd12dFrNFTJMT7oQarr7ThhK8Gq9A5m2iH2",
  "key18": "5AugSRSVZXM5Yhiw1LEGYxCiSbhJexDiVzgdCv6ago5b6EjzeNh8rzjrwAuHs7QzQ4MWJoGyQEa1yAAFaoxiasvG",
  "key19": "5ZMGMJWSJFwDoM7bqRRY7ZmmwKfZ13XwsMkpT6h2QrkZB6FfizsWtQpq2UjwsuufdGVvyiaTDrpVCURKQJvcrkRm",
  "key20": "3ByYtKCMkacdVXzA5FYo6dtMf7rcYr9Yf99wGESEWynwQ7YgcJh5YHXowJKQgs44aYNNGD9Ca7KZBECP4Dbey5Pe",
  "key21": "4YBfcMNNeEREuYCgDTDb4qVY42Wodbe566X6Wa3X6WZUwymhLCfZSfStEmxGvJmSv8VphauoJuvptnGW74qSbRhF",
  "key22": "ZXrSL7nVYQm9YuF9LtgG1ZYfaJMRSsoXZd4Qzr6TfUbsEJSFE6n1BYy6WDQVe3UUdJ7QCnBZCbD1vhAEQXPxVMt",
  "key23": "3U6BKjRJXDKpbmX1RQRrNdjjVRF6NfU3yFQ4dnPaJ9WW8Fodt5c3hpKkg4J6syZRXJtRKM9xxXrLvTwsMuHS7KVf",
  "key24": "4tjWyur6j5M3WAhPBEcEWitkFzhuDoiDwiJXz2R7CzFXNZH7XzRpxQRVqsQJGxZ3MsQYcGta65toeVfGUNEkxxYw"
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
