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
    "5efsSCmfj2arbXKvy42bCLYvoRmdwnSjxDNVNhKuDRUuEoUpwAUQUwJQnzavcrT7MMtTk9Z3k7Vx2p6Y5cCx8hQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53Ncg59mefH9WikNGSVxTZzHwpdyD4YxGFZoVNymCFFnqMB2HRw8PxUieHF6qs2io7T4ZwxHoao4rRJqZ4sfboip",
  "key1": "4911QdhT66FZRhye9dNcVxzXeVG2EuedXKn5MXjkV45Bu4Mm3uictZT6Uc7ipZ73QALw8iDXik7oRFrWuidb3fBK",
  "key2": "3HdyVwaiLHZpQmh7fempjFyWFce9NQF569nScuxs35AXEMySf57WPLGg2hQm4jFxP1kPT6jBHJ4DMZouVKtignMB",
  "key3": "2u9TB9UAkoobpfL5nrv2RoGpQcbtKUY64ZQwvRWb9CZpEQ1EH69cV51CGXwYG53vDq6L5xHabAMozsS7bFP3rGtk",
  "key4": "3VJbGDgbL9DGFxA86hNumHLLG9Ftn5Ho7TUp3eptPKEGD8PFjpk4NCU3fReK6X8wzAyx2H3hS7KmtXVSPesxxYMv",
  "key5": "4MTvdLH3bXJWK2ukDTMSxeX5wxQb5ansERHNQfMP2LNVhPETjW2nnL9gcxbLcp4vG7gmgt2WCQm9BUscibvmpUYR",
  "key6": "5jATyH2RC6UDnw2VDFWYNeSVCa37JcPuqicfnGY4hNJmncoVnxbdaGzByMRsgdVUBvdYcCvjvHuka1ZaToYQBkFR",
  "key7": "2VvWJzyhm63N9v5FbEG1qsgUH52zZanMsXSzb3x3XdfycsxjSphSHD5iN3kwGvdvbhQPP8ZdPYBde1ePhjQxJvbP",
  "key8": "3JcGWkNDDUYpYwC7H4cMFNjUtrYxdLAqqKTnnejQmJLEuhkZ46YpXrJhaUHpJpPCyUd4H6gmm7Vq5M8Jr3n8hC3L",
  "key9": "21D43yhqi5V8STAUJVNPsQ7AvRN85oZaCgJJ8rrsB5g35M9UT1P2oZv86rcHnM7UJppQVaRCnaAPpMrVQg8RqRYE",
  "key10": "5M6Hw29rFKTD1vDeUJBUiHyFiGMNTwmJQBvZkC2sxcqyKtUrRRMoVUJMKAG7zFQ9yvQUZUuefxAKPughecFR277c",
  "key11": "44EGpUK4ia7RFK6Z77GGRe69Us7X8DTJRPKYxRiMLAvTX5g1VhPLQy9kQdsupELETMQNn12kw8c89YNpHJrEL13b",
  "key12": "5Y1ZCmNpcewUkRVkG1wEswuyutp4raVRW94WE8VnvjCKeQ88mADRRDmVtydWEXnk9rs6Tji7DMtXmKTdS85pFZj6",
  "key13": "JVbpAahaChTE82Gi2bM87T4vuYnyAjcp7wQk5TnD11xbco9JbQiVnf2rC71AKQz4Xj1hMVJczrKP5KTiYasm68a",
  "key14": "4z5SmzzVuQuzU1p1FzXTWV8wPcSsSa5LqPDHvutjwsnkK2i56Av3Vpr7o2Fvo6gKJrGY1YRxSnM7vhjnpgeympPL",
  "key15": "58GR6qtQnzE59qFnw9REpXNVzvbmMn2EVZwB6cNvpF8Q8rXM31K9iUiCQRkSKLSVSnMfopxSL8iB16zm3peyG8WW",
  "key16": "rV2XLyKdQh1o5yDdBT1hGcV8zurUkhzWHLeusM84oRCbrY7C1cYzCkCUJQgy8BNPY71NwaaKn9mJfZKTS2hR5S1",
  "key17": "3wYNjw8Ehpmh5uSHoWqFntiwrhLSMXRuDYWmfgt5XjGtxrpH4ZxwtfH4hei6CLpgEU4V4wxN1TKoAKzq8NAoBbsz",
  "key18": "64JQHTmqXHfLZRks4xZVFdUtB3TkQB9Aw7enKepaTaD7JgZGquh7uJZeHnkubiQBRpsjBYj3G5knFruuQ3tgkkcZ",
  "key19": "3CjCWc3SVR3xuCMbvpuyngUYD1WDiaJ6BFRPEpRAAgvofxzd8HT5Jh9qdKdiN8kKbZcjtwTMW93y5KnD9FRtwFCm",
  "key20": "4PQebET3TYJPFm7CwCSB2ZpeCKMs8WRLHwRLBgYSy5zF6xFiPqNX3iZ88VApecyZxXhwTfEzNPoVpU2NLgePcNuq",
  "key21": "27F94aXLuTSMYXF473t9AmMzMzErazXrukXkY3RDwxhMCNxa6Xj2d69n3RW6YCohCWpJVKGmgsw6Ne4cF9YmmkSp",
  "key22": "3XTYGutZQFEvBgo6m2t6CfJMHeAysADqs1xD8bwSc9TgjyC98gm7Vs1xCx6wozydcADw6p9iVXL8nkgU6FtZnDVW",
  "key23": "4tKVrQyQYYC399ksgAkYV1VABaeQdt7b8kChvj31Pzh3XMGLhieHNZ6N7t4g8BcgpTuTcuKXhAJZskNEmWjAxubJ",
  "key24": "4ZJBkZtWL1h3CDxxmJLSuNgRfa3P5j28tT7aDN4eXAdtMdAoFcvTWZ1tFTBkRojXk9s7xvUrXjFaFnkWVaQEztFp",
  "key25": "3A889QoGdyafuSPqsifieuZJe8y3MeEALdVbEbfF7ipDaSVtzW2qhH9bpNabcNTXwQKa6YibViRgRhg9CY6BNMxh",
  "key26": "5PNhdQox2LAaqeucFwzWHwHX8qsHJXR7qDshEga3jCbi6G185HeSxsWUx3UXTL7UoLie8nCsz2UMLcjdxtfsbkA6",
  "key27": "67P3d1wBTigY3G56JE3KnhwDHmEF8feDHRkGqTouoZaEuRVACHRUgs9yqLouDF7Kawmi15RjuztZ75nYXyxcTPk9",
  "key28": "3AmmPTeHyM7px2K6kxYYSwZQckPqg2FWEKWU68jnwa6v2QtRwqFKistqjDKTxfjJhSDPXnuKo4AubQFC26KSDntv",
  "key29": "k7xv5RVoBKewkFLxEXxa5SCDpKfCKdkqGcc2WepuSdmpGn9KqPveFAcnUJurCC1UJ6TC1VT3TLifFuPXSgu95Q6",
  "key30": "dSAhGwR9Mvs9ycQNz8ixHphgfH8Pc8fRrDgeRWvmW5g7P42hXjhSNGQokMiLCw3XGZr3g6x3DnZ6Z9P7zBSxURj"
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
