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
    "4bt8qmYPNx4n29tXZTQJSgnqMiJgHAcNFWMFpgCGVyjY2eQfwEJHtJQkziHMrGMKoRrgGSh6N1DyPjbkj43hyJma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UgnyTPE7PvSgCGKGdPmQbbgWi9u7Xb4FEQUde77uXhdwvuxypjp5XzE6UW8svEBek4qNcsiib1UCHY759MoLeT7",
  "key1": "vLpHQ8p2k5mM4esUS1bJxAVcoXNo3xZNGGMkDaa2KMNUs9MJb1eHnNq4SBszAJNFL263ZfS3jbibUhQkMZowDL2",
  "key2": "3ooFwSbzL8uFrgeqXGAveCvbTEzrHoB4L6ekMCEwffxRgiPwkjjp8ef6WU18QcghiLmr3bDYTHUQRiMcJ7efgS9e",
  "key3": "2BiZ7HQW8yV54Po9h6KmArAPjC8NcZKw31WGPFaEJYaDXvRePA58WS3hiVr3sLRJ9tzHFT537o7NY2BsTrE8tVoE",
  "key4": "Cv82G5VFNmZQMsv2CqzmFrk5DoURcXeoaJ6DfLgkqPXTPPrPHG9DgLsG9o448J6CYNMBAZdvPZjTQSYW1KniWTk",
  "key5": "5q4xiALPn8aXDf7VDPL9EgD6sk9zvNZNo5eKV3sKYgGJxA8tkQjmoazyKVA38nq6uzqTAW4byTwHmjkfgvpb3EVa",
  "key6": "5vE5QgE3W6ty6xAJvkShnqmRudRVpvWPQu1cYEAd7rL9dD9kv2wDGNTuvB8hXHhGWkZ9remN1dxfmrmCi2jUPWeX",
  "key7": "5DNaru4BFHNe1j5iTbBTDggXbuN3e7thxifhgHmVbbnaQtPoLfa8jTCgPHT4pEPKLq2G3rVxNmL94R3vGV5yTQMt",
  "key8": "5CwJqLeyb1WrLH7hebxsc9wUC4zyYAN9wJykqVcazfX8aGze3qkwwiaaSRqHAdamHzJPUNADFH635QGAcrstXQJF",
  "key9": "2w7n2fDGF3cgtJxKSQjeXQjPpN4YzY6g6TWWPzfjh11seszz2mCRadsoVSFrtawmAPF5fSUD1LKzUUxray9941iM",
  "key10": "5dyMnaDJRaNcrdQdj7RPyKePkPhJdTAidinF3GHuhrBJybUbdmjL96RhXy28kkTTD3n8suNWFZkHXU1uAegLjnxV",
  "key11": "2f5AsU3U6NchETEKpr4236M66WdFrS1vR4YpnS1i172aQ3BXffArvpjvRkwia9AVYvwEUwZ7RPbtoa6k5WPvbnbp",
  "key12": "2Z8ShnTXw4Tj18NYw8dyhdCRjt7ps9VgMQTmVUCwRUnM52zX1G3nvSodh9iomRQyvw5yHzVxDfyQ5pABAmfPWo3f",
  "key13": "JXPdrVsomhz6hPHSzCG6dJZV8WtARDxDuKZdfRSS4m4EFVA75Vk3Hv1pEPEhXmoKkf7Yq5MUdRUuWbQde9Agpxy",
  "key14": "39ZMjNrJfmb6bDaMDuUqiRGFhygyr5MGiYzo1Z6LFeEDRg85V38bxFAQdtKvMQAJMqaWF3jMShU3dSNJCzXYGPri",
  "key15": "4Scjh4xmWgkYYJTV4JyDp2em8sYqWzL8XiKG8v5qDfjSoJzxESZDjJACkJMGHEotYz4QkKMYAaCRLsWje6ZwXaBi",
  "key16": "2tYHn5SBjDedGv1n69BEURwUf9KWDUQfp6z1xtW7hdYfrdvZxvi5k3JftP4V9WkNGVgqvoGCBgYnveP1Wxq4qbuB",
  "key17": "31D5tNKpYDxn6XgKsXREuGPRCBMLAWfupC6Jru1A8DXiZG8EYYKo7HR4oDZgD4Qnu2ejrs38gZhzYCB7cdBMy7fR",
  "key18": "5VUAzSLYXwbU114JHYbm5tW78AthkV9jPcYRRFrX716JX455YQdS98au7GszBqmKoEL3LgDxj12DLBhLp1oEVZt9",
  "key19": "5jvQzVjYxXvu3Y6xZuPVcHSg8Z2KBpJwPBUCrsHHxQ8vfttkztRvtwn1xAhyvtkGxjCKnqLV2q9MpTSYwGuNKwkV",
  "key20": "5RBwBLg47k9XTuh7SRQg2GMuvziYBCSYLkaefELV6mkKwoq5V1ZGLo8UAkbtA7U9HyBD79d7gu8FtxhTWmMZ64Cy",
  "key21": "3Fud4oT8PRAsSXHWojLNC9SJLxPHfoSQ5Nxc6RTvbpJGWbWKykHoG2T1zJq3c3CnRQHAXK4kw557UWKWwqUynzGY",
  "key22": "36fvrgryEbbbxWd8gjuzXtEwWDuQShq6QbfZho615DsXH1feBbCgSeS3Du9VZW4sQQj6SrXuJxqa4QSXoaFfseG7",
  "key23": "3bPba2nNAWSXNK2ioHf78qm9hyHqafi517SWJrtSe3rYJrVNQkeizUGPnrDgKVuTc72RpUUEbnxB3Thn1iwsKqwu",
  "key24": "SjBF1LnFcui7TWoBArF3jneuL2XBNMJ6VJrGKkiuNuY9Rrf7jy9x8Gk1f1fkgfbveBr9771wtp182WBSZ5UfUN4"
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
