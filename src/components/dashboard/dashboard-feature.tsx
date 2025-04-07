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
    "3oMZv1LVHGfsjgF3CzzLcmJpjMqrcToeyMbfGSTVhKSbmA8EKbGSGVVpXTKQyGAk5HeKsSaqYhH7Pd9eowLg6JVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LXthxy3TsRGt5BXdaSQhKrJRGfhaLzuEmt5iVWE3fr8d8ZVb39932LidMYMBM74oFNAXEhQESix2NpVgwSAUE68",
  "key1": "5R8nQiAn2FhAqwLA3mdYzYjb1wqwMrUxD2NhujmYBfoiFZ492rKfZXwpm59yp56S7JJcEz4UX2zAeAFVtUvRLt1Q",
  "key2": "42JEp1aZUaRksPnoH4hvU7ZEBrFKEwiHeVeB6AFQrEaUv6Gt59GCjk6Wh8niKJAwnSW8WVNZ64uJ2dr6UvFqwcr2",
  "key3": "hu85C84yRzQwm1qDeVDrQixVi5EtqTvQjDFzNB7bCQzU76aRfLGnhMKFXCRVy6v4Jbv6YY6VTm6S4dFN9qAauzv",
  "key4": "4bqpCSsrRNzPDVzoMNGhntoYY8hjDUbAmpTcUhRXM4wMcZwWSJY5EWFnq2s3Mj4rrJdDkKQ6dLNWvUJ5xNkqAFNh",
  "key5": "3wRYhs94QAPFQHEzo6jKgMM4im8EjSb1sepmvJXm1wPevM9VJZvQzBQbT5Mhg9Y3N3vZ6fMzzBkhZW3pi3nhschW",
  "key6": "MSAqkY4cUBBd8tZqfNbUKDRENDeg1AUdLTc6VSShcCm2QRTFooYGhMEqZo9ADewac5bjca6j8n2qrLSZoCv6eFq",
  "key7": "3NknUMe5SKUn7T841YoM5aFoi4JsdjwPBxxBC4gWKnoT1sGQokAVETAQFFptCq2BxT48vNpvEY7n4L82MumbKk58",
  "key8": "Mu7XnNcGC1bATPscxFvPQHQMxDkEoLT5mUwee9tddgQsygxHoYfRggLmXYgaABvN98bDA74uQLWxuuQrYzQSc9d",
  "key9": "5BkMu7cpi99w8gzwE8SVrqy8Qu7kZyVNB3WzDTgCwhFioJZuqg3GXRjzGNGXHUvJC6KQBVwu43JeNpqiK4dduSv5",
  "key10": "2Pgpz9oR6Ru64Qhk6yoe7fi8ZkXnYfNQHWeq6VQFbgKmdsGtTi8hNSFRuESAy4fuWAASJUrxvx832yiCoiApefrA",
  "key11": "5NYnHffUAiX677X7YChhXr4C1FUaoarTXzdPee6emFbNMNf8VPnTAHBt7qrxCZTnGJdK9VVi3Hf7GkkFcQNcgSxU",
  "key12": "5VpLhL2Bpc5bZ4kCywhjt9J7g88vWu7twNEm5e3fj3dZhgBkJvBDihy2H2z33XCXZTFUc5mUybT3DmAa63yicEkm",
  "key13": "4PRuf5DT8peMpVakXM4PmN4FRYGoqc7m3hryv3shq3WycK8af7FHSYBwJWDQt1Z3zkaDqZTcewT1pHtuY1s7Zm8L",
  "key14": "22FTJaeGEt8EWefrgxzJwbBgqDZqnDo6R6DbRx9jaPCC5vhqF4woDNq8CJA1Yt2wosmVUBMgid6rnnZPpjipUmpE",
  "key15": "4EnmNVWTPKvST1AyCkzq4BhsAtioVozoUJYqJP4vhXYiMr6zV3AcEHEQGKMLGEzuZGJAZa8PooRzj2TN1kTuYuuS",
  "key16": "55Vf8yTNYNyGEW9TZXUtsrNFVsSaeCj3ZheKTRnZv4YeBUqpTZ6Jrv9G5TS8vxKdpaauz2ad9Ki2cU4EgLaCrQya",
  "key17": "5dRDDkBxjjdtxmQZQwiAuXdxdz6o5EkJaMLyWQVHMKFu99eFs8SXXzeJU6P9g1vmf1VjU84XEF7eAfEW189XMeJV",
  "key18": "2mEoG233d87nqMTRtY6BRnFhyWUqmVqu3ZpzByMJ3EiCKYAEwuQBLYkE1eky95AVroUo53g2i4oNYvw9jQXHMjiQ",
  "key19": "4pE2RRmfKCuR5tEUAuhHnxN8TRtXfM8Jcs7Nk8d33puFKFtuJfcS91V1e3X43iDZXbqMgntJifnTgErWYT2S8QyE",
  "key20": "2QU2iikSwR77PRkrsCa6VodJj3R99JgjyFAm3ZCSTuy2Ph6ks5bLbcegucwTUC5uY2ZPfYbzW66DUc48DrcKgFqE",
  "key21": "Wf1oE4xsvaPtvNcorWgAxQ1ZvSW4Ftt67xFM7rKwoWrp48VTjj6jKvG2QotrzzZbbDbAAqnQmTBS9WwV3vW7ow8",
  "key22": "5UpB1F6zBcMP8w2hn3PFDUa4t7CaVs6dCxx8A1Xnsd8neh6XtScFggiLv4w5QgmW6GS52AHN5haJYAih2ioBwK2P",
  "key23": "2JyDovxmWd35mpacCDj9qqHhuobjuEAHRk1qydyJMPQzUkBW1rGZhK2mbdRavJhDuaoBeudywePH3J1FTBDkm6wN",
  "key24": "2ZnHsyQjS5kW5xWDbYZ9q7C7SZzuje3q9DLzGh5Lbon324ZJYLxxEtAFZwvWw9DCDN4BgRTSMeKSUZhoEGdBceea",
  "key25": "HLfwc7cyfFyRqQcZ36Ed3d6fceaym78P7iHWuHRy5TYjQp6nv6jhNskfP3HMWPvRQ6XUwajTW7XfNanZZcxes9u",
  "key26": "2BwECTVQvBwpYgNfkFW9oJ4quL8xrtjzERFiWiZUaWDe8YzNGTuzrquqc2y79cdA497u3dEvXgru7Xnd7ifE8aZ8",
  "key27": "2XKrp7CADoSRuphmHZQ4FHDKGneukjgGerba1MaKyfcjPtCrjaTsda3359vaig85mPgZqLrRnQvUMh3fuuVvgkSU",
  "key28": "5YNHuM3iVWcLyMMrE4RgahYJ64TiixhLN6rmWar3LMgY5W2jbgzxeuMVbjd7M1qRPRuEHJCf1hTKiisJTpUyw8Xc",
  "key29": "34i5QwU2aBAYoxuePm9UtZ1ESwwNbnbmVhoroPJED8KfV3rKwD2NkXpT78zL3rH9MudxGj4WaszkwjZyk9SZdp6k",
  "key30": "5YGEuUnBDk2A3h9YaxNZ3H8wo51G8nfK1NUjcm6D5csuuBxx7BZnucUkz984wRK7aSKkJ6jcTwNSk8fdVC39xjML",
  "key31": "5PxAoszdQTJnAU9CUbS8NvFQ3FLrSNF8yymCoh677c93xgJNrJW6CG5LNFm4s5D39hZrBnYK7LksRNxjxf7nhimf"
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
