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
    "4wemyjZ2VDCFU1T6NaFVJTS8DcWgj3AGZQP7Va6YSC7sA2t4rSEgrWjfNELH69a7Zt2d8xyJfh1E48d76ZyHsg6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DeK8AgjyPdYkt3J4DmtUJmaLTtvkWLrQsB9KDao9BRrDM1FzvsTr6gxNMrmmdCLEYpDcAsyojyhxXyM2L9hMHZ4",
  "key1": "5EG8FCeriXkf8NVRq14tzukm2KZJPoMJLjFSbBHbKkUg1vJimXTvkSpKDPgcV56TwcYuk9HquSjUG7UcPL4YhnVW",
  "key2": "66aEqs8uwkXidQJbTPCacJuNxgrW2vt5HvVbYGvfjBVeN5hWvmWDUvzGcNKGwprFAcLXeRbmiY9bW3aLS4VTgfyV",
  "key3": "4rhgUjE3dSFVJs4ecnkJs4rvkoyzVFqnSo2zv7zdNMkZ2Pj8tZxYAqjkNyBRFNfmpVnsKfyQnbTkBw55B3zP7WJM",
  "key4": "4sbC2T38WUxHdXukbMWNSpbp4g9b5EFNzTprGGSxJuhoJyHWFtY1nJj6AJJwxF5rcBQ6s7HvaCUZVLJESFKtFRvU",
  "key5": "4rgBMTVfuZXnLaCv8rxQsDWv1fZNd1nLU9iL3HiJixH6fCRC9UFjypfVU7ERizBvwaBSUa9dEAhh8KZecRnDwQ11",
  "key6": "2aXPCeBodrakkdAeJgLERR43BjjeqZv9WszkJat7Lf9yCdqbS3kLwteuep9UUTcrRYtmcc6funVsRS9FjZzkgiQB",
  "key7": "42Vxqz2Ep6o7DdaUXr4uKnFuQQXy477NyWKxWk8NH9wmB5hNG2nu9nAKFPw3gU7W2V69asp374VECAkAPSoTLH7q",
  "key8": "4ermKBhhnFbm7QkNXbb54wGMogLdkCWSgrsAeg844PbhU3fZeMyxS63UoPAFPGvwKJqEczpXWHVGuNkywrF65m39",
  "key9": "2N2BhMfwdPodDqcNozRsJ2xkNqDEeNJKPfqFFqgA93WMpQeCf4cSwbhM4LfAjVKLoxpzraxBam8qaPaB1Sg2BYPk",
  "key10": "2dCYyQNzKr1BQ8SFF18vW3P3TMgsr3LA6SbYf4rDnGmZTpLP77VaBpCFCd6mGa2nCYNN1x4qenUj2zu1231tqBAz",
  "key11": "5YBQcCEKKQcu5FevmCjCRRHq8bgX9rdBnitNy6dBcQ1ts45L2UcRyT4BE6cvD2PswHpeCazWjRHwZAPVZBtXvv8s",
  "key12": "rAa8J8GL1etYNnWAQbksLpv8gamG9sNE5FsZe8CrUyFVenKCqDchFz29mYUi8pT64aqm45pAEmN4bR1UShEAZni",
  "key13": "5yyppFkK7QgFGtwk9g2wSoUmaUH4GPMj8rpmu6sccQirkk2HZHMFwDrbpcBNRgmB75UUYaLSbN1HaS6b1WsbYmWS",
  "key14": "5vmBgYoNs7Qpy37ZiFrJa14JhUTyqw5FeGBTLBGBoTthBTqbPDLSijwk4zp6c2gP6YfGvPeSqYv7quxKUC4DDgsd",
  "key15": "m963jkCjeDDk4EVC3ePPgoArSkMnMsiNCHpmCHeo4P7XvvdEHamiv6KixP2JKCYTBvivc2HRubeGXnb9PeGd78Y",
  "key16": "2J71KeyAk5c6eApW2cXaeoH5g8oCRF4NhfMV7q3biowzh32eQxiWSPRcg9ocbh4ZCeQnJQiLdZHz7491QjPr68wy",
  "key17": "2gWkqCU5cVgKUDd9w7VG6f1XUJGvsqRxUX9qJzi7q8uLh4CByLvoYA9y3WejC3T2a1rhzeCAg1doEfPiD7jbtNfR",
  "key18": "3CAAT5thbvQnAM9cyogEfiUzGsRvD1WiDj2hSfURnB71W8DR2hWThY8vd4ijdDWkCy2wpGPdZUxhfb6joYRHMqYu",
  "key19": "5Z3HMkjFpUjqKPKBRdzGPdRPBvGWe3YdeBirMmZrVWiTtJzTbGqqHQjojDXhyea4q1S6mqP4vUPRoH2PjvS8zUnw",
  "key20": "4auVfAAyuzVoqdUks94uTTvnqmWn7foGda5gUx85ayMjqBjrtFoqda9guNewy1j5ZJYvaxJB8bPnoBsPzbEDPkHh",
  "key21": "4ZNTVyYmb8WuixX7pptm6WrFpy5fzhLgsU3M1StCzrDx1MyrBiAcwzFxEJoxmeEssb8QtYLu47cRrV93dwvHqyvE",
  "key22": "2DayqNUhhvqxfj2187RHjj9fPszr9ZV4SPGZqSEpnQxQiJcK9LXp1cP8QTqFJdg99ARbksF2ZzYrv3JxhuvBjRyh",
  "key23": "3guZVforT52gj3vqUQHf9GXC784CMWbZiGMBAd5G7pvkHaTxCDX8FLKwTTR1XgvRqk4Sf33JdVmdP2nvDpqCekA1",
  "key24": "iR4D6GrdQzbjWn9gHvfcATVNheSZFaMBWLcdqgxZCshpFBe2Ck3BwAqJLzZs8EnYRbM8irqVqw8ZVjf7SmjtfyS",
  "key25": "4LrKEie4h7nCtkQbmiYyMg6sJzcH6P5k9EiXdBpR1M5REykWkLtjhrfsn1oxw53ug5vjxmFzTGFu2Kgq2AE9172V",
  "key26": "3byn55rC79gyaQi3mYfD3cCaN7QNk2pTPqnLgimDnTJYG2voifWK86jysfg2WGErr1RMkAN8fqk8hp2Kr8ug3wYL",
  "key27": "35KZt69tbw9ZJQsyeNe8B252u5asGdKsUsDhPoic7cBSjPYZMN7kKzFjecs5Jgh8efKzFmD5vKkLCo28vmjG5h2D",
  "key28": "48vyPkA22dfbbAhsh586TaHzas4my8j3okugsQbL9rBnEdBM1P4BF6FxA9e5hDJ25nv37eZtgojYYMuJYkm7V7GS",
  "key29": "5ozyZanjQpHRZPGKfqyxYKQRb4iHe8HEgpqnHmUYwJ1JsH5z44uToCyvHdC4xne2a8mFFigwpgYpiNeuiMSCnQmt",
  "key30": "2byhzwj6M1dPhtXkVFoZAT4S3MaFNFNrjS7ZPTfXiQQWqYeV24er3SqEpoRFUm1fcjCvkNtQ4VkWdASut5Y8ukYU",
  "key31": "3omBtYUaCduhgQLyGeovzxDth5tSKrGBUHJkgTcQ5hK8tiUSnSvUGkcSMcxZmkTzp7hxK1U9pHL5kgiujMUBVNmU",
  "key32": "3ampXZV3WvKKxnngj4JtGwFaWrWYQfctpCHnzfx6VVBz1sgs2jxtzugkf8raAp2EGSe1ZkanEpR7zwQTc5J8jhv9",
  "key33": "4rGezCqC1XCyAUy5aH4hxvuKeNVkiuBc7NSXUfQxNqoVYsCdfvgkX2qYkSTgG7WYX2EtpvnTBjJ9r289TkohbRfi",
  "key34": "5d4aaXN7YG5a8aH3PUFtCEjsnWJ9KzMkFA9XMG1i3cvZQRCAExCzRU1aapUkBxLVvA7oAK6jQDd47HLzgEdpHvHA"
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
