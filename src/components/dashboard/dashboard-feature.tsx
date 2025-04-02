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
    "4hmoeUJ5CNMUsjQnumrdzmfocnshdMbG7FdqoCZRp1WcRLEdP7ZNaauWtkbTcSGCv1VX7Lfo9Z3orcGyx2DxjaSa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AmGLJ6dLAz1r8m3kqNtE52Be9SqEnKcHErfvhKkshfkHeTgPtrJb1xYbTgATbBbpSd3iuoFEDj1hPw1NPWozuEG",
  "key1": "g9EcUdeUSC5fX5TQ8CQgsuZ5ZNHMGsA37iikZ8QkJXTJfvs2qdjQnivdbVvEdWvLrdAZ92D11tA73XsSRy7zeoV",
  "key2": "2FnH8qpiJMspcXB8Qd1XZ5tzTGi5SMQCGLvXHG1H1UHjbP3pBYxJdQp8baA7Tydc1aKeXLJgH3b25JPZkY9qRHR9",
  "key3": "mibmwmxRyYv8jQTTnykoiFEKXhqMht5sRf8znsX1gz5naqu1XJi8fhNCamB2bN4FqPQBWjpSQchCjy4uXBtoASb",
  "key4": "3UDyREFhT4Qn1zooT3msrWZ6JHCGn5FScTJ53Lm42mLo8zwCN6vMN7nMYcQ7WZjQpG6xwkDVWY27oRM4Y3wdiFXA",
  "key5": "wS9eYt8mMToa2AwMP7Y1nUZrS1QX64v2ERDXiDQhnDHJ8Z5Nn4TCu1hsK7AoxxpjW6xfrEYTAYaM6fWD4VW4f8K",
  "key6": "3NHsayY58mETBnAtB2FUQLohku8FZrCwmXPzmN6iAMnyf6puYCHYXR1qi3qpXuRufCmkhrYsMsNUuz9cKo6kQSse",
  "key7": "5w3jNPaAAzxP8Rb1e5uGg1wPYosq4oN5LiULVzbqdppeDWMVCXnAvqwMbVtfzUHkFtAqQJvErKf4bGpfpgdKaCvc",
  "key8": "5b5z3oK9q7Fctps8AX7AoEdwUdSXxf1QfGt2Ve7BXFHApndA7zENXnQUQj2j4JGvWh5urJszzaJfTEMZffAGxBUD",
  "key9": "2tnJguWdK6oJ3fRfoeZAhzQAbtixfNphVEcrpHeRUxoYGXc3zLvQc7mytWo3u9isozvjPxKBvg2yRj9N6jf7jS5d",
  "key10": "fhLXoZq74MeqybSpGPHNYsmMjbyq1o3kqWvnHWFo92bsR8x4sFmhPr7JBHSfAoAoZdNKEq37Vy3W1piMA9eKa3D",
  "key11": "2AU8vLQZtDmK6dCiqZ4yEeBk4SH3hiCkt8dU6pBqtbNeUhDbfAtD1WzVHD8nbgTejgRPu7iah3teYGYQq4Ke8CYG",
  "key12": "48uXDGRNBsiezckE1AEDgmSk4enrkgU5LUZY2XA9cJYMWc1CEuwU5vBq6LjgXMmYDiMDmWex6CpqS4oeymi7cCMR",
  "key13": "4nD1KGMxr3ZtbSW8smpbU9Mm9pP76eKvxFy1s7XFLfmBbvKnppogoUe6Zy2VZe5d8JkfcwEtmjwWDjcjbmUN44Z",
  "key14": "5cwr4Jg6jdwRxLc7umBRLaJUkKVxpDWjCZoXKgtWjrkVGYHciY7z3QFvEHTVcF6Sy9YEMbJ15eJsi6UVrkKZxmxc",
  "key15": "3c166r7BefYg26Y87kz9d6Kn7fDQMBZTviQn2NtFm7reLj1GTEnegRhntNFmrjoCfKgH8k7baPXNV8hPQ9C9oKwV",
  "key16": "5ahJWiqt4Xns9uFXC79wgvhayHCVEpVDFxezopB3JdaHnHjZfN4tNVvB3pX1XmPRiFFrR4fWTXhQkWJQL7GPBWmV",
  "key17": "yUWHi5xBMT1eUzfB5udjrdueiNTHqtSjT1jGxrnB6fE2cyDih8aBak14usvydwSsp59iHwFp6ZUfS5WjTGySF8F",
  "key18": "67gZwrjjEw2Zia8LsfZrTSD5qGbHP5xX5ttmef82YsT7CcK8mmqC2282HMTBVkW4a2e7Rg7aHVPtbJhLWNx9gdh7",
  "key19": "3Xoga8sdxE3axEwBuGFBV6kA1SdCA4Ms2zBSyxRAYV6ZWKrSw79debE42c4oSQVui6HvQsjrv3bdPSK4WQZsRbu3",
  "key20": "2qSKxDrkJsyDm91Fgtgq9HpoyoWYGAkg63Xj6oL6wRgPPa23EUKUiP8HHi8Tmcay2uZ9Zz6u4kwu48BYCy2rWKEC",
  "key21": "2ZwjcRJsesLdjvDdcZvvck1WUv7fVCFePX1Mp8BfZGUCcA6S2Mug6TEVgGjPRYMWGhHWBT2uJFhmcwAoQS5b8F7q",
  "key22": "2wQSjDhcGsa697739wxRMo3UYfjqiGVkyRmBLusDCHp59yFQE78jrfG3i7vQ93HNwskmM3R5QvXYwFRapA9qzf3G",
  "key23": "MF5HT9Hb2vXN7vkyLiiwgsATT14WaQQKKn5LXowS8xjNXmEMQ44imWcA4GGvmFJxR6DeT1ERaapSyc6y1cQMLLz",
  "key24": "3RztyVhvYPBttSrqqc6c8rzejn78vGWjesLy5owooWkqGiaP5K5D31d919brPxAVwynhS5z5AuuVP9uZVhwnMKj9",
  "key25": "4GpEiGTNYimv6qZMVSQNiEBGqYwBhBD7c9h1zKjnNqoXC7JcXbo8nwnouvQJBW52tB6A8gxAPrsQZrvH9sFCT9rE"
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
