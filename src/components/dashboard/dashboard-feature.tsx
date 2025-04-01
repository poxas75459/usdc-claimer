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
    "GpwvQ15LZ8zuV1eMrcxuTR9qqAyPQzNzzZz65RZ5izZmiET8bX6rHekUqPgg6ho4ZicqdaAwLByi28RLgXQjc5P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MDbFRjJSPZzL5FXpM92VJxV4HVbZFGZZhfPMZiFZ7EaDrn9Eg8ErwCgia5EC6LFgcUquXJ1z6dRBkyHmUH3L78e",
  "key1": "28o41mEZMi1XuuHSM5kAhcvCGWut8KL94koRwPaarwibcR6VQJndtFpC7ou5mFEJ154tJ9MHFrxWLWwf31VJSLux",
  "key2": "5EMx9BFkm8jUZDP9EQLJMckQ265h2CBCKX91DQcvkSLR6PY6XVz6hCynSF6KRAoPGd4PQFMZnrpjVQjqmUswFABD",
  "key3": "4TubwBjSNJUkScwfJxhaNUAA3eDJwtwnS8EHWA7jPCjqguMYGpBn8P9YvF16PAPngiunpwWiwMck9mdUKWSjrLey",
  "key4": "268zV5iEdDk66GcJyQEDr3vdYm8NzKb75f7jaekrbom48ypV3DFiSCLCx9DgbWwzcLEv77rhLsSndVgYZwcihrx5",
  "key5": "2RG4sRdx9fg4uLtjLykbQvfBCC5HUF5F7BU5CisR8uvdvRAUSenea3e3LiG6bKyEczR6MmzdFPQekfmaYkSe3BnZ",
  "key6": "3oNXvdqycUjpJTUiBSG4fVjgSkBxkuCVh7qmpAS6PkmX3WNhzxtn4oWB8fozKitwDu26nqZ4qQvbd1rAFcYuJ39p",
  "key7": "3eAo7mPDFBVpAtFaZFMBdHnykC5d3EE3nFkPGPUAZXap4KeVmjYRtGvHNyWVVJL4w7jgxb7Fj5hvvCfJAWzz9P2r",
  "key8": "5jhfzMXvZuVaJM7PHCuzcPYLx3thGQ9GsVQ4U9YkjU5B2P3JoyFZS24yYGHJNzLKLHNCQcuCm1otjERJeTc2wXX7",
  "key9": "5T3sAqMY3K65EY1u58fkLthTtwus56m4GAqPeWNkYxKXbA7RMrdUWvJ8ePTdUvnZaoVbza6GPomFnnq3M7bwjrmY",
  "key10": "39QM8R6VgR7N2RoD5uL93pvVCEwszcnTSYSPpYuf6omFKPBkU6RF5pHm7TGBVoYUeejYUtQsFz3j7qAzMykunsUa",
  "key11": "46PAcvv6jFKwvmzNdzjdGtHeas9Vc4JVKnWVBAQp3bBHmMxvJ5qwBTJDTFMrrCAGc4fh3kXQdspmrCt2k7zrypMo",
  "key12": "rg6qN99HozHtCmsoeP5ywRUKXfz9aS4C5GTcCwbtf3sPLUkGqKZpHgnNr6nm7DF8DMPLQ1V4cazLUBosujtANuq",
  "key13": "4QCYM5vGb1RkCZ3n3c5nXMSJWiE53J3eug5GVSwrrv1eCqhTCUsF6iYSdQMj1ax9Z57m3oQ9uSWvWmyJ594Qwees",
  "key14": "3x2Tg8etNnGKYFRrqbxvpKGwf6QUVnxjGe81n86AsEGw7fSgqCYyo4B3RKiLU3xi9HPu5Xq8bJn9eJppNtBg1PL7",
  "key15": "2Y2PgZt5bFA6TyBPPfVQPgU2dVsMto3JbcqevGsKUYUXhYAnzYgJ4rVuFJxxyd7UMa5naL8HqUiNiq1pXR2jCjQ5",
  "key16": "2HJEHR8GRKHs6rfLbfMtnbvaByQiZEQGNBM533rp1mM8CnMkRftutoyCYCMdnexmMGRVoVzCuC3oBaZqRgqVBGrX",
  "key17": "2wnMbD6vt3SWoCK5zMUE3VMu2rRAwRZ2MiYHmAYHb5SjnjRUkqyHBukw9Vexo2iCA6nhv7G9ws7WE6Upoxip18Mq",
  "key18": "3oDXdVZ4dimQYADq54JrQijnKbDGXaxS8DhdUEyj7jS6KdBc1yvt9Tk8YfokTSAtfWDwQ4eGWoKnSpv4ki2bqBgF",
  "key19": "2PHotPzWKAtwK5fcMXkUDRFjfBEpUGgMRiFNnNFfquDjThMNMXxMzzrPKz7ijydNNQ6o58fjt9icagAvJ72NJeDp",
  "key20": "5QzEqTBpXczHZFmm9jYJnXkSRfyp5zfDtUDMWa7qfYC1X6usAR4qAcBsNCJHyGUU31WCFXzJiADdZN9WGRpTnFJz",
  "key21": "4ykJmVw94wY4xsj53ERahFdw32YeEgrAYeCZut5cVT4b5T6GGjBKJKezL7M8q6aQifGxyWdeGvxCJP7N8sxHkTs2",
  "key22": "3aQaP8EZo1Qoem1Gp4aSWHLqKrxWqrACnzx1oSxP4Be2h3faswBqc4VEjRc51stsLrWXkBJUKA2ScBvsWsCnDvEj",
  "key23": "5Z7Soy5yrVzKKqN4pikiq9JvydFcWwYGVYAqnSr32xjwKY1B6YemTwzpLLcLtK1qksK9Wgy4h2Y3tWoto7RtcLME",
  "key24": "4uPSqbHgFdcCfiE7CuQNu4WPqiFgf8rUYi113GC6mr8mTjW449dziJ63qB6B51yh2EbEZYfRemFAN5iBKvCnuquM",
  "key25": "2vz5jedTQEGwxgMEmYSJFjXc8WSxfWDdXsVs2iLpSw17bJ6iaijM44eEXk2n3ZV22765esTYghy1hpogzUuMZF1o",
  "key26": "4CyjEBxfCD4Hwx1mxf4BS3prf6s8bgrSYFg7gu3uEM8kSVmVUkxwXxmQJrnR7TWbuFSAjzMiCa1WJ8s46vPdf6zS",
  "key27": "3SaoKDWsSyUXAZrcMDHRznXBzbG9aoUya4GMo4CGyY8HTsWMnqhpoSFkDuHRbdKoHYkYrjaocD5VannsKqoeQ358",
  "key28": "77cfvtgJQJaZKg8poUFhXtaa9jwbwP3CbmpPTLpLRDbhvaskVWRhZ5MUpDcjdEDKvgaiZGWLAy3qa7nQqpQCnCC",
  "key29": "5CQCZhsyqZcztSCLbsEotUtDM5N4BTjG7YCK5UPT6YzkcWHjJieaz3FJst5GAHzTXy5UV9yGEv6r5NUasu9FYiwz",
  "key30": "4NkehrKdhy8KbVsTbCzPhmqGnuv4QCLcPPAXmFRdKGEr9RAgYtkHrxEPhaGJeQRew9eNQeZaMaQjtrJ32Q8KW3xk",
  "key31": "uAqa5AeRzaEgE1tiMR8SjKyxQncBot7s3by5PhDuEr1NegNwHR8hqttVB6RLtq4NVao6NUVmbnGCRSKm2tCDqLA",
  "key32": "Z8vXT6BeGrkxL8tWfQkGqrXC7ieGxAcFcw2CDAoe3aZHHkwAS3GK5T2Hyrzfi3LCC9mqWzajnx7PMUPX7qeaFmf",
  "key33": "3CSzX5umHHvHCMhpo9G9xZgiWZ5Z7HSkNfZXNQrgWHY39tQHp4b9dpW1Nobm1agsxd8sLvTdCWxxo7GHRrhRSYZV",
  "key34": "5ruzeMLh61Zw2RHUioLm5Cn2VgwWBVFzvfEjift2sAftoxgFrJvfuEoQtN1cMQt5vDWQLPUU1oRhifsywe1h6oqQ",
  "key35": "66dj8EJGRvG56RMqjZvwhM8ZBSX7wLG8phJVSSLYuvY3vsoXA4vyHCDLkTE7btM28HmFQG637Wq8XPkDcWSL9xnk",
  "key36": "B2UvZ3pqiHP6RLsL1kVdQ2bovrEWtQpYFDLREjjKnkaWDnrTqvy5yE3TiBaZZAoeJz8h7oCNzjaRsGPTSEkKua8",
  "key37": "3q1mV4LW7qbXnLd7TYasKrs77acomJLFicYgJEs2JUrB5xmtW22pvmv9ycytecmhHgTPcEZ7notqE7SVR5yor4dy",
  "key38": "65jz6G5rA1QD22vXXtPRsUyvyUQyB923e7TuEXgQkj8wRP8Zg7t13jz2AonuF12JDbcEHh986TKVHXnmGxBeXrhw",
  "key39": "2mA5zaj8DoVjduzrKWgEvXGPyhnZgiJhtDqDU4xTfX6k9D8Bdto7GGHWoHNa9r1itZU84sL96ZpvQHqoJZfKnhcp",
  "key40": "4wsScZqiAG3JZST14HuLU1NR7CKCCzrB5ATNuwgLTauKJncXehSdxfeLHAyCda9Dt3yAWkM6akukARAi27UfZUMy",
  "key41": "4XrobcMQ2AVQwbvqwZ66WoTED56ktE8f65p8RH9Naeh8APyT4ZEywDUQwv64GFSCnF8v8sEFgJAC5AAX2PyXxFuM",
  "key42": "jezhfKJNrHVwbxfP2Jwov1Tkwd5p94QKEx5GonYUEbPHYScWLrjqCH8mKLu9y9z9Twe9wfKJir4ZKGjZxqTb6EC",
  "key43": "n51AzJndQEKrTmJwLJFNc6PU1W4RJgG4FQwQrSMs6PWW3QPUCkQ4Y3oTB9FzMfdiLb5waMCwQCinnEF52nxNneX",
  "key44": "4vXgviCZkjDJxfBAZEx4BqAshUkn4L3kRBjEtWswo9Cum3xaLUN9byPGzFp3wGuwPGiG1STce8kiiPk1g2C9B9dg",
  "key45": "4eA93LDXnZrA6mhEyJXY87vjHnoNJXX1WEiqWzMp1F7mTFhQgoh5tMED3kq6XnZtwfpb7SrZBXfKtEnM4Ns7F3fS"
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
