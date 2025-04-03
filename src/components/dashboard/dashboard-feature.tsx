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
    "ZevBWaRpvGbqQ3yGmp3h77ocWEe16R6tLabY2ByJdvpqcvMFRfURvHpZWvg1WgytPKrMRGUEUi4KUuXBQkxbLhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z29444FFJV6E6rpRjPtERdBNiKojhqaiduSct9PxDh8xQQeQi2AfMpXayZwusrTtWBeXtMMxaRWaxHoKyAwZBop",
  "key1": "4WpiJTKWG3uP8rnBbUGcJdT7yFNnhNAvgeThRn1FBVA1MeJNi6KPphBopiZfwUgqTkxT8dqxHcM1eS3N52WPxgSM",
  "key2": "5VQh4iHxMzYyx3vb5xX5YGweeJ6rMzyjtxPgXZHpZaPn4FngAFGEU9gFmbApxCNFJhuBwFWJWV2o2LU1mSx8QAWn",
  "key3": "3TtTiEpQG3pWgJvUqZfEaFFyaYRsw6nUs8Lb7AyNvrTqdyTZsiAbApmuwFkRjcrocpFAjh5Uchc3zPjJuCEAPodX",
  "key4": "3y3GRUwjkxa5oxerCAtceM3ckuMgwi9MEmjEcMcZvSQE9ixopXhbCrPRYRZrHStcocHMd1tNoCy2bf7efwXfDx4H",
  "key5": "3d2muZbVZ7ovaCUpVev8SqzF17WuRJ5vvvU36JoXez2g4WZthdo6tAj3FQQfBioLRN25ShwtTKSZwVZ7Ktgag98i",
  "key6": "3A5auzfu9ZSGVEmQ7yEXPNHtVbaexJEemxs3GfmcfUR3jJKZjriGWmWWVLfFArbQdW4aB4bLK4vLvu7VQTssdxnk",
  "key7": "3MJ1nEPCzQQcwRjYjLBS61Jy7MUpT5QPSbYVQHLqzcG9cT275297tJ1EspTZgE3Qu8vD8nz4PG6k8Gff3SvoaPPJ",
  "key8": "3FK8Vu65UuAbiojs2VaAmJXfbpFGbxW5cUzEiTaQsYAqweHovDc7FeJL7PFCgy5gdwDhTcGMgtp47xqMpowLEHmT",
  "key9": "3Dfwc26T2r74pZv2ueNDeqovvHrCdT2CFaBcT1r2SpmLHbY8HVcAMe8DhCiofS2T7RsyKsDavX8kSQqt44zzuMQ4",
  "key10": "5kaTh9JtdsJoFNF3FYpEsjp4Qoi11iNyvXJKHiDNnXmMio7kjbjZsmpw2NUgPLTecRsBYvc7zAY3A9YuPntDGFks",
  "key11": "2Vnb7fbgUdnBbABHYedbmfBqcQwXGpVcBD2qzuuDM9KmSETseJsw9dajs4tjEZzSHc5ixMrYQmjUAt58b39Jtorb",
  "key12": "5ur7ZQWxMYoc1LjedSAAF9MMwYKrYezjSEnTTjBQ4iR2tbWKaUAVcjv6TVgoqqTmqf5cecFhWAjrLmJM7ThmsAMR",
  "key13": "7Y1o8nUQ7P2XQEgtv2U8zQ7WnkrbtQTkFspmYULm3MjLrt5KJegwUPwCRb8eFPXaDFHtHMib4mg8okp6pPdKi85",
  "key14": "2xgFeMvTfdyiarBofvwXWPuBjHwww5XbTMZihomDrC7qMeyvvRWg99oubXg3ovjkoSZidcxwNSA46pBEySFi4gR7",
  "key15": "57Wzuvjq3TK2igjq53xaushRESHcLMaG66JVavsNWjZ1KwSgQaQWiUxfTc3q29ZYZeHaciab9L7XneZShVq9cZwd",
  "key16": "3oCPcCvWfVexdsiLgJGTjZxz8ELPq2KWv7KeHoXVmzNPxPjF5KrKMTiCwk7VuUtmZQ3njvajmPnfC7vZjPyo8m1A",
  "key17": "kAWka4hjctoa1sENqsfDsnqGfH8x63Stj7C1wrxPsg1DBZVEeZuRrsEHq5nBEwEpjKW3Vb3hDgfEnHyDUyx9xuT",
  "key18": "4WuSsTgk5xT2kq4QRN5jwKhBk3M8hjNr7AoLihTjmUx6MU2LiWN39KHiEgCVDoyvTCGi1jq95dXJo7AuHeubbJtA",
  "key19": "3g3fgTQpE2Dd3QC3rSiy7QYpUrKZs1pxwV1dLmWq3CyRbdYGSPEdqTDQuXU2MFJfRhc4ujxBaKuAZCrpXezN5BcY",
  "key20": "4mcUHZEH1bTYW26ceysZwcrS67FYZWuYNW6YyF3cvFfH4EB2C77AhB4Sa5zMbGF4BGY29dq6Q9La2DsMnPqMRxnu",
  "key21": "UMnBuQ9wXjrLfmef8Q4V9dmms6XEpt78mG49NBcVnXxpSy5GnZWpJPpgpPd2HwzfJ486t6T6QmSeFiaKJ8Hq4WP",
  "key22": "3jA5o7rYqMHhMRenbqWz3kfWQqVBfuGZ9ezGEvBdqvZdFBTKCx2E28k5NZQp2NNiREy6fLKpKSfVmjJcuEUvV6Ua",
  "key23": "5bm6HXGrP4FvF7ZDTejbRHFsEPamx5cXRPaMBDg9NTmY7zKPWB7QZfuAD8bpBEEFTJQmjkxMKFAJ98C7YnHUEnLM",
  "key24": "4jpiN66Wr87h5JUumyhWC5rtJEbdRmStjQDg8sUgFCy4RRy399Swh6jkJDHt7a2uMnJZjeQvG7oHZD5S2FkNxtBC",
  "key25": "2Sbti4KH7GjAD5ANgSGmJzBohwEesmN5HJoStGBjuudM1o4onUF8yEjQbg63KAWSbS8FvcYzdom2wuAonMtGSUME",
  "key26": "353pdiyZixBVYiHCRKxGDEhTXESFfgWs7pxSkPdb9MJfvTmRhmyXxEwiUsYdaEbnS8JgCezNPcGdGimXkm55xC8u",
  "key27": "4w4NMiMURhkcrKqz4sAZTBJJrBmPg7x9uFZ4Z3k6rwhhaJEMda8Vkc1bqDscR2X4m3YMgxi2fTCxUBnm3s1Px2sp",
  "key28": "23RUPkUkaVtQpuNFAQw25YcSaYsstSn9cmyzQWMUXLEqMt1wNZUwamSVqjJcMebPF88BNcvczA3SVHLudR8zFcT5"
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
