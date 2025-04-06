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
    "2YZ2VtbZb6VF7YUiko6EtskT157T6PgK8aKZEtVqMYLxcbPWnUdiLRWZ5xSigcxU88oqXgwikcTKdUg1bNNokzKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kyWgnrDe4fWLY5HHUjzeuUVY5o5kNtrDjCRz12apTAwzfEihFvn4xT8qCd52Mkxa1dPHUkZzRRxJSXGzYmVdZop",
  "key1": "dDVpKUX9tGtGKSx7R1KyzbM5V5vNnqrZGwSr2CeV3Eoy3nCBWzm7Xzgc4AK4s5PxU2MGsjh79Nf7miAHTnZCKv4",
  "key2": "ctsqZf9NHtgkZDr3YbeJTkVD7PQdgkatPay13jVNYYiBLhDTxwEsZqUjeHCArvPy2JWMcLLUag6oGHgeoadRx9C",
  "key3": "54R1zgPfVxY9L5nS6d7norx6G7NAwbQKPtD11peExoiCLj2FaJtKZtABBvX3gzgPEqm1e2NZfFLSpZMNfYxiYQvT",
  "key4": "4JntTpesgXQJ8GirUFcqunWreLKAAwxL37t1xjRnHmkJpEwsyaYfFDbZrf5zKRxMcwC9tKcAPY4rABRymKBTFiDu",
  "key5": "5fLKPaEnpCgh3q92nnaUFf5JGr8DFt1KYDvnppToUv5BkssrCujPmdZBFY2oFizEArsBR3z7enwnWkokxLMiHexw",
  "key6": "2NiwbNCwDRikXDyc6v368CZGBDjtrgZYhxmVb2dmuKHVNrUcBLyH5jKcK16jThhKGaSiANvyS4NausAQj1cKeJF8",
  "key7": "2SriwnU5Ne32V8iAAL7UsDQ4Extw2fuWEN2brhdviuyJnxxhmuAsTdtqtHXU8fzCP1QHz1MSTCateccT9XuEwCgE",
  "key8": "2ncwfeTGvoKrrUrZTednyaCc3cEXiX21ptDyAwBSmzYoZvCKq5Tcf9ek4NsMqVFcsqtBVT5aZJXvV1bS7RXRCyMW",
  "key9": "2kLBupVkx1TfnbcoqyAYPo2pNLJ5QxZ9EbyEtjUTKCcnSHb5FoEQEQSroAwLgcPKhFPqR4WPf41HZss4NDp5hqV8",
  "key10": "4mJ7698iAFLqvCwgwB5omKwiE26F34ZDPwh9C8UJCebUsrDbFS5NvVUX3EPaBo6tX2WVoCMsTRxDGRmMVtnPjgFe",
  "key11": "24XkToLtk7K4aTEfffpiAZEvy2vGgHTjWXN2iFaGmFPnvyVAX8TtrQrFMRg52UojBRRX96HDeyTgTuEFJzNPyYjb",
  "key12": "5sSBosKudygZY3wF3fNWXaptcAxUmfLB8PXw6Am1MMgADYaDqopJ3dy2oEiToaDvzvjFzt1yBd461NZFXr8sRpXN",
  "key13": "5qrgpA2H5PtG66CEAqWW2gKS6ybd8DRM6SqtDifrN2JYfRX1WsTz4JuevkU2hYguLWgJBA1uhUhpgm4dfdTcrP4y",
  "key14": "BBQc61pTDXkNg17p9Sy26W2i3TyReFdZAHqwtxeWSv1bV18bugMAihbT7QL1jeG7tR52URxLDycYeKNkpymViQz",
  "key15": "5aRx1DYYfjzzXyuR4xE6kusLfKjJJf4f37bFrovevwPqHQGpH68mFYpfkfTCaqGfUBqTzisTcuxHMcjNwgY1Twgs",
  "key16": "4dxNaUhz4EWByuz1D4WEgY3MoiwA3tuab7nbCbhtWcyNc86DDd7bPXp4dT8F6yquxeHsHT1xFzzFZr4pB3gjTrKA",
  "key17": "2DN8gewQcSxEL9pvcBjzwdZozACKUbtmJrBnAZjhdPm2dvJPMbqsjkrzjaanGw9GgNKvDKL1S8BPeq1mteo5d4wR",
  "key18": "6EQpx37tUz3PAJHnfGU7YSgmhXtd1wgYVjZNCkQtcBdCzKDNhNGbWy6zGgtw9LW7rwNjbVJG8oBXg2amRMdbHXd",
  "key19": "4dZvMLBVJA4SfmoRfrXgqSRaNUSUU3hbVvpsbNi5J5XEN12ZXPDYK1fa1EiV5s1z2pKT3oH8N394817yksFYBDtm",
  "key20": "3WKv2Ut7XTZVmSfTk2ZxAxYmtaAPii6D4XHk7sdQ6xWVRZWQLXBJNZas4ot3uBdECoE1yVNEh9yXCoGgKaaW8S7j",
  "key21": "3A6eByhCGyH5WKzXmH7C5UiVy6eaqqnmqWU3CRDzNN86TNbyMemYd1gyegqvhyjMdtzpuy4nF5cTWySsHaU6LQKJ",
  "key22": "4pRHz9bY2hkY2KBqsTngSR6xjDhLzr4EjcAuVFAcSewh8eDVWiEavQCniEeJ1kjrPmcjLLRcrrz511KwoVqHWq8b",
  "key23": "2WU5TjhETWWE756HxnouNjZA7VPwZo9JLH31FRWKy6D6wZ3yJt4HutjC2u5euvpLAYxacR5H8Be587kwU66U5Cqp",
  "key24": "joaDdmqutZf8yunjKhsGW2sYM51zJDbriqcHxmkaNqdPi3YRbnAaFHXvGxYHGkCTcUfCdib5JETNmHFSQ4UE85c",
  "key25": "SnHCGVsWLu8goTi7eWwbhs9KxmFyMaV25YFviAiGTQtysLkj4ZMSxcbDgMQZi6pq4fpRwcH3qMmdhSuetayyojD"
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
