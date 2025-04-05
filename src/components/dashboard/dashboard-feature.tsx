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
    "3894Dcip7otwFfUZQ5VK5QdWEeFHdYXXbYwpwYBfwjuBuCK88K9mfQRgpm9sEV2ZAuVYi6mouZ2VgQBVZsxZGM93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mJoTft72BSUZRkrCaGF8YQM6snJWYAbfZLXew7Ux1asrytyzommq89UHVswLXpsNcBfrKKrwUg75Q1DZr99sFdU",
  "key1": "34jVHQkGxGr3mK3ftQ7eULj2E7TpVU8xLR2h6qy7KRDRkjq9iAaj9VrcQAE2ctrjjrhZZXnQUMohNLLdpyt28REj",
  "key2": "3C8WHuR6EqLPBNUQpXdsizTVJn5wieCfMehJ2hcQUJssP7V8pUbt9Sy8jzYuJTzAtEWTn4r7RHTM5k1GtyosjA9C",
  "key3": "5DD6qxoNkyAfVtrrAnCuD3NfRbJzkmnbMuZ3neXEmFGmqE2fZt32MWYqHSPXLxUhAxuP3oi82PP7JJ5X7VzV14zR",
  "key4": "22hHZUUDi9R8MYaKH3pCGezNpJLzJtTr66kV3UAuBDfPtrDysBzjtmSqGW3mMfsiqZ4bsrvzFAuwBHP8GFz1Q2DT",
  "key5": "5MmkMRLBwrhX8v5nS3GnVbPBEbHVvznoLqz23SZytnzaUJU8pR6Bhsu3t2qLpjjd6AniiTGRyCpD5gE8cxmQMkxg",
  "key6": "5nyJ4NRBsESBM3JgsXqNJqvCHj9XR77D6fMZ9UENRR427cCWE247Y6TNZxij1kXGQst6Wmg6eyEMB1QA1c6bLbqM",
  "key7": "5BTNQrmBN5M1wB3Y8JiHauMbxdofWSK6xF6zR87MEg2JLsXnTPiFzCJGYs7BStZEfjntEqwC5VLomVhx4c3Gme4v",
  "key8": "2zY5jwNraSGAppxtvMesXgCe7hdw5qRKXceKQey7iMYU3YJpEsP45s8TyDii8GPRUKcVzmi1vDYuAEioT3JNg6bt",
  "key9": "3aMjRGwy3HCsPWtHYEUzn27JSFcBsGHFrAERDcDyqzyvkADzVu9iaD8NUq7wHQ1hgF9fRXKW2SbP93pRyYcshZ6v",
  "key10": "EYiGpreCBcQngDyw7stcxecDRuTP5g3LoK7C3xhCskw3nQU8MPf1JWtwVeHRwvyuwESa5tNwNJu9bLu8yVAe42f",
  "key11": "ELQKcD55zWyjZmeUPhssXPUvyBMUnSwpCSvimD5vutkYDbP9tZRnPojdAQDJ6ho6PRiSzU8XXFLb8qC1zXrfVMT",
  "key12": "2HhdMSoXzrgkaQQ4FdqrQJUK4V5Cmk3o8m2f8QYnRi42S2hZJzJsoEwSDa5VEusxFsEHWuMxmriGFWrTEFbgVqDV",
  "key13": "5Fa8nTrJ1vmo7f1nP2PvYt9F4WnKbkDdzm5KAxDPZ4oxiXGuKvkUCSjSrUqzA4JHopd6haqVFZFivcSEz6AnP16r",
  "key14": "3ZcrGQJn6aJhmWjropwX9RF3wQSX6HLNDB7fWsZxBXcAuBMTFjXRnYnFZUoF7ijopxhPqTtTiwBvTCNvQTXfEPn7",
  "key15": "3F9RfvUVe2AoBeufC6CFr7vMhuhFUWuwFDKYCofK7YKqaEgf3jwTgHkarHGkXvD1s7nZuTfw2QAhfJkN46scpcv3",
  "key16": "pBcoY2ViSctf1CzDsZnyqZgYmsga4BigqDNyxa7XFZbcu8tRmu29cxmCmj9Hz5QPdimYHUp7UnDjSGSuKT9RCAK",
  "key17": "hYsVSvcmtBNk31DW62BRxDc8YgVEratm43ZXm8Lb6uCWgYU4jgGvb4ijEnM3199PMGSQFS57h3XE2m2h7H5rU4m",
  "key18": "3qEU2deDMTywecukyC4z3Ayn3rQfjTBHpEex27aRfXh6Bcwz6E6Lw9CzU1jogu2b7xBTYdJiiQtBmQHEj2yLeznz",
  "key19": "5wg59BiLDp3iXZdAJsUpg9ADdQFQ3pbp6MpR2q1xReTqrUshmtDnmEc7CfboPKfxpD2zsyrt7RSWveYZ8f9WpUca",
  "key20": "3vjLaGdLDbtodfGichJwNKWVt6QwxiTversmfScBr1L37B1F7MfU25eVgiPbiL51jH7GQ7pZgH5UL7zS4rY29jRs",
  "key21": "35fAhxN9NJDaaA1mUt8LtGuVLhGj6FUnvjYdzJhr2PMRM2UqZvx4i4a6eqWFLDrJnxNB2pprHyWVtpLAbrrHXxqM",
  "key22": "2WKH4sxPFEofaUj6MYScG8Asj82t6xj69bW2392zxhiRaqMsAUSDLvnRE1vAb2g3vk3kcnoo25eHofY1oWCwT1Ud",
  "key23": "5K567myTqK5qipxm6Z8gxT6ksyh2vP3uHaH4RgyfUYmVzDddfPwX4AgWptKsqenccAQkP9xdrYsK78bWcuCH2K4c",
  "key24": "3EWVmeUsihy8zHyAFUehGFDcEcxZwaL58vCKtjhADzkeRjPEG7vnRGTY7b2VY1VPjZTdFkbiyGFh6zBedWbYhxQQ"
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
