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
    "25SqHnVQBq6MRAN74Eex2GdgqZ36r1cRKzC1wcgLx5F7UA96NHkDSfybwaQXZ6nxR3AkmdYPi4woCF5WAvULPDJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fNVUBAhHtNQ8CSNadKAi57DgLCJ5x5xZ6EKgUyQzEqeRxQ1nhnHuD7gtd33dqmwgfE39U8Ske1xbrSz3XXhQTbD",
  "key1": "2Ah2LJGXQnrxQytbRjvUuBpnvQjEnPhxGRP6jfBd6bitqfbHjNKfqHrvezH52rjNN8fkN7LV21Pv9Bez7iuaJu1d",
  "key2": "4cAbQYZ2Z4vn3n4vWjLKwFiDAh2udxKtsMT4XDJMaSwsJF2QLyeqybUWdVMWxmfCCBQgtzH6FxYHTZnzqBFuSexd",
  "key3": "3PaxPQrJaD16DpWv2hGf7d4uAbbuKHaMbEdKmr5Zo2Ar1SRzirW22RtsXCKfuyeH4xG9xBSqSKqcwNCYQSXMJJUe",
  "key4": "2oKg7ERGp86uvaNvLcsEMv5FJU2BhHJzNAmbEM3ydzx2S5T6nwtBLELAyCkd3SNgRP7RDuaZBwLGNarScyVoN4ie",
  "key5": "2aM1bHKnKVbzHyLaqKkxMYSSSRbZJyWq3jbvASJ8sec21sxwtMUqm2k5H5paquVzHP61W5mN18S1wnCMhgwU28rA",
  "key6": "7JvbDzW3G7f5MfTHWYei8LjzzSY9Fk8wuPnheLrhGezK5kogU1WvRfA5vdKuun5CinuKUGGtXozKDPeEapC2EbR",
  "key7": "5Ehc7rNVCkZj3hyeRpdemTknVhFhYoWedCfYHzU8tMj3L3jw7Lvcndyh3M9o6GsZFidcsL7WTiu5HE9M18x7uDjK",
  "key8": "1a7aRENUq6C6BRL4kjrLx9PgaorSwx5biNPiiw57T82Q3VTXBHjUWx6yrVcbZXAjpCvAnCFMSzE8BV6w9MEZx3U",
  "key9": "2ckYxv5rB81SeZ6kSMG7h35Gz6A6DRvYdVmrKgCL3Bo2nGXmgZK3KdLF4H8zRMyA6fXpDVienqiHRzABP5Bj7eAd",
  "key10": "ncvhCi5HGRe9w7wR9muFBDC3iDY3gt7rPt9jpzQZRAkrortqESxPYo3J5RkVeGtXC965iXTobdSBp2HfrNx6aZq",
  "key11": "55kTFxcvy8bNS1R1Qhjhfbsqqrn9uyh3u4jUwBncj1WNZGx1FwBNJeZ9VDEyAEwhJ2BoPzzh7nZoQE1jzyP4pfag",
  "key12": "2jWvuJnKrFYmQZo42csweBnvoZZxvYQck3qPJ2fky576kgjqHpVnVpLmKP35TVVypbogRFdaQUit1sfBDob2UdRy",
  "key13": "4zfTUJtGSoaNsSEGxsigAZphfG6qJpqMmZhMFGFubXossRheL84aWa1pULWv39imBNhmf7284t4d4a2aYLyBdvz4",
  "key14": "5QuBNAfgvmzDNaa5tXtHTmsbTUk1q379gRGpyKrthkiEQeLHNKaSa14BLxda36adoRwstLPRu5JzmzoPodnoUSKo",
  "key15": "4CDwpNUJ2PsXV6XrPtb2LCtGc229o6mnqdfS3jhzfGmw5DF2rUHJGpPaPjer3WsLVhV8JskxNZZsdkRUkaviwkyG",
  "key16": "548rXzQSv1oB57L6nWwD3XFTaCzQeWMWtg1g1YD1cgTd4hKoP3z7yLTJZbpQY8SDPKL4dw2GvKnyVqhtLrkkutNW",
  "key17": "3UsQptDyPtLoycDBhH8swTeCsRYs2SxvBeCbiZAUTux19oi53nn84B7yADvQdRgP18925DbjrPegyqGTRFxtwXc6",
  "key18": "2g5bphb3HdMJYUTxH3i7jniDY1z5eAKL8UyyETcWPrCRNjNAzJWD1aYcJ9Kw48JoZtBeWfrm3TBn5PW4vZJmPmSd",
  "key19": "2iREniNnLbJNQKoyTAJEEfYtFVeMWoT7YT2PuKUvXgvR9uNMDSjfjDyVTtNDikzHEsPJniwNTFu8qJsZF9X8BJSg",
  "key20": "4yCCuPM2z3FG7FCk3SW8m9tpcUCeJULLqrPM5dtZk8WTacDuHsvkS2uCByK4vEWWemLSj9Q1CKaEjEDYYXDNyAft",
  "key21": "4AVFnAqGCDUp7ZKgxyvhXY949sXaqUd3hWPEHN5SpzsYNFcVoGEFHUrCN6osaJSbFVDs72jXE75vtTznWNXeTaVu",
  "key22": "GHHVdirzSLc8XbbGMi5Wf1mL2hsy2fczuJXN2z9Y9Zhn4y3Ko2okMu7hXuHbWX4Bqmw17L3dTCZ3a65qq4o12q4",
  "key23": "2z5ywsfsjJSfqWgdP1g7v3TYPDf5HTWHG6ABsNEwGjXDfHybJMjNi65E7uoDTVBZxcCMGHt7yYskevUZWWTz5ppU",
  "key24": "NyeisXjAzYZBbvKi9hAF1bXdrKxf4KTvt9YyTiDuk5ZYC5m6p1CTdYozGUP1MrbJeW8EeVzyWcttRZkCL71p9TM",
  "key25": "2Ekq3v4wbm9LZA3mXEmTTrkn6z6SfcGx9WPbuDA9kCsxJUNzMtnYWQjaZB3E4PnYRvRQx9KuGLMAMRgJVQ2AFjeb",
  "key26": "5CEkz8FaAGNVAq8xWv4gWCrsifXPBAdfdZXQsKYxWqcK2mZVGUru4N1jp6QGXnX4DpLoKYFDzNiqBJs9C5kWAp93",
  "key27": "5jCtpEdv2PUWR6qMSNi4qpKoTbyvc7QCMVjgacBNockNqJF6vCNMqjiVxHeqghCYsWkqVkLfp9YBxDUVsbLtoBQh",
  "key28": "52nmAikYFLVtUt2ZTJauSzP1xecr8UBM3n5LBFpkyMEmQUKRhB73n1KeudArr8Dd14QqjsyaKHKapWZQ9Lvyc5ch",
  "key29": "58NNA6nFRh8g7ZtDxzQizHgZNkCpwbBwbNJx1EwtuBxCxdW6y4FKTi7qoxAE86zDaSUG3zhcvz7nfRHLRsoDuuSN",
  "key30": "5ZuZ4JeLfK9wxLJrd54s5mK89G6VSaaRW9j9cwT7EaxAWopHqg2qDaFU29nsTQnBVm6owQyBubN9XtM3JtUSxa9R",
  "key31": "PHCyC92vJhJv2WDmLrbP7yTnaxUwWo9qQ4tfRnqbp3CjHdqBA4CC8ZQXREhg2LAkEBbk7MazSoLkBPvBVtaM9C6"
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
