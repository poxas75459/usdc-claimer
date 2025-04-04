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
    "5Jm2gkXcaBDLExk1x8q1qFKV1rwT42JYQLF665MyxX3RkQsxerLf5s8yX6TshxqJnvkZ23WGKSjRY3iDAMBovoes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eAgEF8S1ENJ6fSb2X8GU9htwyCAnN9h3kVczRefL4PeKEUh3diVY38bmpS5fTUQDvhXrEuCmANZdjfYerdS4NwT",
  "key1": "4S6i74NnRjk5NNZtkcqayeBTacnfaRN5XhfmKReqWYEsJJg3RvLKNnymGS7FMSKXSfAcxwi32PnKgc5rtUHP8poC",
  "key2": "58UJxSZ6UUDvcXCJhZEDGMzLNYqXF7M8yds9y4b2dWEGFUYoDav8KXufA23RCcAE2YsCDsgguJNKnFmEM2HxU7AV",
  "key3": "3KqXpXSR9Yeoamyr3gFiN1V6rjM2bbzBSFwAFUUVyCj1d7n5asJpaZxFunktiP3JeEbrtYfQGbFf8H6A9A4tP2rj",
  "key4": "4CpBtQHgDAa9r8Us9cyyxyd7zw9wgxUQAnGpnL9fgZZb3VvCF9842qHRFF46yo9kF4WMW7BMFtCHA4t3gASqehie",
  "key5": "xEirnq9jXBfDrhJ513urZzNJTHe7A8PgAKuvC7hBjYgr27UZ31cMT7kMakdHWRcT4gRX4e9S28r5oy1ZEkFqpuc",
  "key6": "2cNTrv7F5DvQjwekyvGtL6oQDZ9NoWSX2godrmQzkdqTDXwRJgVp3GRHC4UCZ4HjBERzUkfjS4tZFPN3qYHExXV7",
  "key7": "28oxkbMAeTYhLtKeW3ztTedW6dZv5Pn3a27FuAnughxppx9AeNgEbby9pTz6TqWrvyPGNFch8ZRjpFL2NcjPp6Tq",
  "key8": "5wTth39wHiAGEAYD5sWxMDG1vSkPtVWBn923xqNVWQQELpKgSLWEaD9EL3vUPbF266uwG2FiFYwvuVoVnoH1qPF",
  "key9": "2wvY6AE9wmbrYscPWVLMV1P1vChrsHdEkR3eraZFCtqfE8ekJqyHsf4d6LogaGinhjy4KtVSkeMDgS1rj3BZgzbq",
  "key10": "2JsQguH1GFg4WQyHQAecEbtvqBJsY77sPArJCjdMt4cvHqjBdGBdaPnXpJNxabG2Z7v6JgRnVQzLKACLqR9tMS89",
  "key11": "29yfx54JqB1nt3aVjuEMoWCguuuaE8vqzbDZdxTrJ6nGPUPnU9oEfmWMPrSZMLjY3srcbM7FFdxg5hJTJKbsfajC",
  "key12": "3kruThverJUxAQuN8qX9pFCjCEv6zDw1Pszu3k5WWw5ekmdLYqpzVhiLgCjqwByNiS5YPm1hXjTA5KuzUUrt6dMg",
  "key13": "3dDGhvtE8pvAzhHiruxCsQc9ZgrcjwjVYJ7P1YR4PSxXfTk6g8DyzhWPxgSGadjMR5zjkNu4tdCdXsmdCiEndnd8",
  "key14": "4KdMiMnGUrkZpK5Di9UbUvT9rbcZxy4WSktQYypt7bkL5e4e48X3HLdCWarhDw2mPyNezSkTwz2g1XqZC4jXkpj9",
  "key15": "2YQoidakJLNqJgBYUL8tXqeeUzVFdFrFPaQN7Eq78iHGZehU4VvNwz4cYnDN4Mw5rP8C2BZAxGZGn2H183S94Qdf",
  "key16": "xVLVJ8zurx7PoQPCaCsDDsfYZ21EYNt81GJX4eZBWBurouzHNrXWxu3fzqmzEpkPAanmNKDVZAVjPB7PfM4HNaX",
  "key17": "3zV1GKqGYphbzNRhyhZsNtyA1Jr2qXZeHTX1yi43QJpGyQNQ1ckSwL6JhSoqCDU83sMB1YvTatTzokK26A7HadMt",
  "key18": "5d6UEPHGAWMFdP4TUfaSVJA25wx6BYvLiMUX7U6YiP6otNNUxsFff33tqJ8GcmtNWGdyrXcVeqVZuE9Vp9Squdkd",
  "key19": "2qSrBbGDDe7cmkzCJn52eZE8zwqasCnh1s2RUo9GgBieH3ZxQXcdaiFDfwnhSsH9oVvUfRMJ4nrpqEasJ9LjUtyw",
  "key20": "5rfHjABTZyohGdoQsvMZmNt4A9TgYLFBeWJZr1FVHBkv3YGFYJobviEWqmoYUXu3MperDx2GLJ4Yg5nxx2PyPHjG",
  "key21": "5hxtaUSb1K7D1FHVBmP1kv3HdpLrAuG1xWrUC7tjPHeErjiNfTN3U5U6UrXAvNdbVGUoaBqzz7bKZRRFLks4LwRL",
  "key22": "5QjMW5KWNwqf1Jezntrw2VQQfvUW1PewobnDkBVB6xTyFYVUoecMVS6SXeQYDNe4YxdbjhF8cYPhWzYoQRPtSg98",
  "key23": "4JDJdcGgm5Sn81CvS9ZNVaiU87fa4Q7mvMWtznGwNwQa7xJWHintfLpVWCYidoAyGD6kJ24GgvxEDCv9yMuqwLNf",
  "key24": "5AXEcB2tsMf1Cfdf3vmQNtMhjRRLgDaBLV7acNGenWtVRAZ2R6Xfr8MpuiZiqbHw4wwas6PK2fyuqsh7MqfsNgAr",
  "key25": "2WSGRLHn1QotAdBLQ271EChpCggs67pi3JdyCfoLceBJZUnkX8i9g3An67G3fVyEhTNrksGbMacDsCFHbcUmB5YU",
  "key26": "3rzLbCuia7f7CoXMDDFDhwLtKKvjC78juBPXBErFgyskQyyRHfc1rsRZYrLHzf3QcJ2AqESGkT5jnFYzmH2smo9b",
  "key27": "4CWih236eiVSbJaWqBkywoGC1kerNhgqF4WhPJaH6bAc93nAqpXDgDv88qGBCga9jmeSfkWqAFDHQUgTKKy8Lp9h",
  "key28": "2SXCqponK5C8d33uADqHnNjGyZVYeX9bpv1Zh59xbXUpaBy6ZbPPGauBjezcPo93xpuVYNVmBdPo2XKt5ETpymwa"
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
