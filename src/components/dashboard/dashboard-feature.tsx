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
    "2pSthwEnJ6PHsgXix7Pwr531xyyMXMRWsR28G5J6vatnCtNKi77EG6fVaikys5gJ3svsdQA9NmaFo64EB4azJAhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZA85eKjFuvJvNXTXRB1Kgs5s3kngSXqMuv9gdHsuoY2du6vt3gTtmvv9RxbqhoxFFjceE5cELLR5L1T736SCGkQ",
  "key1": "53mZjSbobGuKXbikSovWgbq91xq66FGeGAHanSvbm9bMfQrVCobkZeutvuhqHFozE9hu1hXbSot1DtCdHanfeJ61",
  "key2": "4FQGTGpGr5MPH4pmg58qKpzfBj633Hrxd5Heky1aGxEEd5rH96nj4sPHqKTrQ1pZjuHU9QHmVVru3pQ38Dykanaa",
  "key3": "3bPwzVDxiSVzZ6DbNoTW7cFUsHKET8bctX9JXBGv1Jq1UeoQRN1BXJRzScdY198Z2i9q3KDrd35cMN3HwUg7kvbU",
  "key4": "2G8T6Uw7vGH2B3z8rzmxEJonhc3R3pwGe5JmzuksihktEj9tm3NN762aJC9yMNkpC4zWC9Wd7mKeTxfqLKYKwFin",
  "key5": "4xRw3vMjvEVWr59K3MVSeDxFmvGaxVb9APCFGZ8geVDnD91Hf28fhSik4e8RDU39tehpFo9ddmjQjV21vHNAjg3C",
  "key6": "67Vm8rXKVbtMoXtmCCrbqN72D6SFcaE6Epnhm3EQXVNN9UjZE3ne36uDnoRUfbRvtEhzKeGNPhGG1hQ4WFfYXrgY",
  "key7": "3hVzK5teMr8ukpSjyKugFnMtGJTfbV4WDA7iqEa49YHsVvF7runU41H6ZzbbGRfRgdQ6Ei8YWsopeBzzVheVXsFW",
  "key8": "5pvezdGZpWKLc3acxNrgubW4UhrdHEHdmpJ2TZhQt3WEStzYr19goMNgUsCFjCS3RLCmN2RzTrNjgrT7pJeWutdV",
  "key9": "2kxePd9MMXmH4Pdk5dKDboSVqXZZLu6skW2Eih3h4NJ2snSQfXqUP5nvGQAMwAMABviR1wKxEJcZVk373r2TM8yv",
  "key10": "chWxRQQYJq5yW3GYPq69akCkCGSkchekSGMGhaoC2CvERNMrvw4guUda956sRCm955X5oVyxt8ekQ7qDeJ7SQKS",
  "key11": "5jHXk24SfLfPhaBNrQPQ6YsXkgdTb8EhaPaZWrfGYs9whHB167vDQUwXVMw4kkr7VpXpXFcy3g7BD2qXbv6BTLJA",
  "key12": "4tQ5LbmJdBE1M2R5HvhQiT1TNSyPQ9VHM7wypChbDKrZ3YjhEs2hUwwzRUvT2WdfZ9j21YSHu5HgvdNdRMLCNdDT",
  "key13": "4RM6HXBqvMN8ZDg5jNbdhZ2pEVQFXPmvz4dTrhbBF5Gf3cEtFSyqaeyiufrh425mzhs3fSBG7qs52ZPAWKVRGG1H",
  "key14": "3ZA6iwS265gfKMyE781Yq96kAcEEBFkRpggsRDo9dQA3Ssu4ZAc8VjcGqX1tLrEKDk22rbRzE9ktr8tzYUmmpbL7",
  "key15": "8h4NB1EoFLXSj8NCmxR34qBaxQXpssG9P68w9BHcuw4YzwLD7vS2aFRJyZu7wuyxS74cB6rJNwGtNXoqFJhMGsP",
  "key16": "3G3Jx68hVnm97WpmKLJfDieRHF3byD6cpxXq3dvKxeqBUnjpHAB6m9HmRyv75kGZ7xoiofBowGePYEkqZSZkSvvs",
  "key17": "58exVvZuF1Y7MXW7bQjcr4XBWcQuaYb8UibfyE4LA2Co81vHCaSPVqZanw3wNc3UGdmp6w1sJhk6seN1zL5KEjYb",
  "key18": "5gR1biagRNr33qhrX1b3Q3e9pYW2gYYLa5dtLpkHJJ9wv8UPXpmjrR1jLpNaGCQEcoTpxQUFDHijKa5LBTd5526h",
  "key19": "4RxFGkRvkWrmk5nsUDbNCnGSg6P5qYEstbQNhqe1ifQjHbYSAGiei325RggbteXupkRSEgwHkftk8mXPJbFv8ss2",
  "key20": "ugL4FuJJJ79Db1C78askFpqq6qZtzBVJF7pALfUAnQm1vRudgVAK8yv1zPfFzzvJ83qHUbcFjnz74kWkj9NZoBF",
  "key21": "dA3wAyBhK4DSoKELcWmXCa9PXuosYtLX2NPxV4zqEazS4q9qPmYNZLJsbNbdxbDQXK95gsx9Qpxdbc8JD5PuJhp",
  "key22": "5XzZZVmQih43GYyZxBMNEhrACzHr17rVnNVrWzS6tMCQC6qkKvLdWXCFRxy5G2rUGocm3h7vMXaXs151NQ49awsS",
  "key23": "Fo6jXvfgQkarhPEYTfq3LyzJjMhC6VEqCyWK5afABTPpzjPwuiE7pFWySub2VMLuctKdwEdyTvNV974kqbiTPpQ",
  "key24": "3ws1LCbCKQSERNjP2TGGQ6SHuZeKFQLuh7rG1yg3Fyq8XtYpPMEgAXHNzdDKvRDPUbwhCrQqSyX8f9F2GsA4BPo8",
  "key25": "V9s9ZEGFskFBAJ2vwjNGrW5pTvFroneJSKhrVzLpcWkZfx3JsQ4woMMrz7jDN9ij1d9KttT4ezwbyQqZpPe1Zkb",
  "key26": "yr4ssaQsVLmxhzt72x8qNDYkLTk8cuSa4WQfxK75Z2Xv4QkT5byeoRqDXxMJUbFvRbLRcxzfoSdfxAGMLDnUb5W",
  "key27": "55Sk2F5cDPswE5uRoTqC3oo8s9kNxCSxGeL5JGkquZ57z4v65HsEykLRmVpJX5KAZireVCyqmu4p5LnN5AB4RL17",
  "key28": "Eq6WU7wWgR4TEqTrUKpvUt1UuddMhGpACPja1fLfzYu8TTbJ6R87wXBhguJuJ95zjqVe1DMHuCYAUvdaXpbsSYi",
  "key29": "2VY1RWTFcAH96Ra8wCqsq9LzE6n92oHhQxDSBkGcsMUPQGGra5hEqn4AWeWbKeD6uUH6nDnn7Hi4QVGkddCkzKm3",
  "key30": "5mBmVE9LCy2vzTGT5YNAxjJzjwooC7n676kdgu1wsbJa7oPSvgTMg3Q2WyK3o5tLyUFutT2gZvPJNr7VxFEJRTU4",
  "key31": "2uU1cBuEqguTxoYM9kCeRsVuX3gj2i91owTuGKVvjDfSfaUnd7GrJiBiJDzBE2TMLdnSWCQ3YfU2Z4XhRUNhB3zg"
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
