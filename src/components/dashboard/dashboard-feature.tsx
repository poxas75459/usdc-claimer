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
    "5RUkLrjyK6ohERSK714X1z7YBzwruek4PeKbBHAusoUUmswfmrwd6YKM55EqXJjhfj92ithYmGQvYJkFzGFyDpzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ysi7qdEqykd87bqsKMVnw5vsQh2gfVWNrfg5nLkFyQ8qzJdPBLaYNJg7cH9p2vqq8z1Jk12ztDLWdexGFvY8bNX",
  "key1": "3zDo21pMzHEAwbTNn7AjCqd4byU1t219fQH17Kb2TBSmQDZmmNEXM6RjkQykuW3tWhzdGvSrb4Wo8JmjsQq9sSCS",
  "key2": "5aof6w3NMWbAGmWJ6RasdGgarADLTxHbAJiqPJrXes7ZkwmKxCD4Jf9KcreB8RryPf8nK5tk75dxYRDmu3EiMrE5",
  "key3": "3LthScTRcYsJgMVFDf9oBj2fUjEiFWWEptsgQTQrhaip3uW9DB9LX2BPWKBfUkEY9njK3XUTfV1jXamvKVdcVDCk",
  "key4": "sfjDeMs8KTES3nbArEsmd9USSEjVX5k5RgSb4PLE73AMmMwrVQb9zaHYrNVZgsdx4FGgKabz8XZ7h4jRPEkWHrd",
  "key5": "3zhuUWZaUWzSZC91yX8hw43YhivhBP7r49zj6rcLRHFMLNzTgfpKpXRjvLRMHtWZ5B9kTydomW2PgCgQJWJS7HG7",
  "key6": "3RAhEVBm16J6hCFMuG4vhy9bvjhWDMee64tD3EpZBF8KYhSkBqVxKWkUSuFobFtFvUBzjx812TPph3ePNFAShTaH",
  "key7": "5wTyiBGGeTPEtyJsibfpcfvrgMP2HUintn4KxjpRneSQzzcQkAFxPDBsrqrfmu78buGkx3YYwxYJaKVjaazr2AZX",
  "key8": "44kaRX4kpXqs1ARSjfYzV5Gu6Wbx9V5wByibjFuYoCNsjU1b7HR5ataNaV4VAdDrir5rDMU4vyyCf8uBDWoTFUyF",
  "key9": "4wBNNxqDfssEFPzQ6tCPDCqsq6hG6H7GK9QxFM7a65waU1Ek8PsuhoWepG6RM8V82a266Btt1NzxVbhRmPaFAAao",
  "key10": "2d4waf1TQZwQAZYGQciMFTAht6ZbiQh8jyDRhhbuB43iAtwfE2kUeoNERhN7uMaS72ajQKdMspYHmfNTnbHWRhX3",
  "key11": "5BQWwDthFeRS3dZnzbLhUdQqo7SQtMpuh5tM9SsxU6wdPkG1oh6t95FDFY3rDcJHHnkBdW4V4WNbSZBjb8x3h7hd",
  "key12": "5Xc6UQrXQWtmfCLsRqp8s8QHWgSHwu7Xmp8RJxYM3q5NKtjf748pd4C8h83ZErqsQshqMWykxCjm9HiY3MjxPj5x",
  "key13": "2TBSsBxRTwpuLnSCgKHbdFBZu7J31nyxy9QtEBQB46LWcWdnjk4A76UuGY6HmbzdV7Rc9JQnaMoZvCWfaprT6awM",
  "key14": "4vL6imhqG9LV7WFUZDYhWRRk9eUGLfKyvJUf2YbQ2WSyKruMex4pczpr3JHDkp7kA6gXeadmHjFRZSmBnMaeAi41",
  "key15": "2jRMFK8Xqypv9FC5MtCeRPrv41cerSrQhvcABFm4FAfGvmA5FKyPRyAJEW2YRSLJm42pcuFwwgos1x38e5wXqJpN",
  "key16": "5BsEifVUVTQjXQfm3sfQuMpRAUfr9m3CZb8Z3fczXSdZFGDATmLWwJeqc8xUJJJfG5775XmjAG7QjTZkkDyXe7rH",
  "key17": "4k2ou37qK3hDjY6rBdo56CVkZ4hYk9XLPNaywiYWY3QhiZj6ocXzr1AYVd1Cah27bPeUL6QpXw6bgkEfY44FPqGp",
  "key18": "3xRbKgATUJjY68TrkMy3gsfbrxdDY7jvfdkrqER8zRgRJyBkGdbDg9REWgFK1mNMa2SEqZrSwnuApxxwTFR2Qxia",
  "key19": "4WujuY6tpFa2yo4Tj7AthDFKdDvj74DCh4Cppa9en5ap7x1RsLTxLB5kbTyDena4nvAJbcJEbfa432tiosf793hZ",
  "key20": "2J57DpeEQ3qufVRsUYL9DExACrqerexbyjWUYNobuqZgHfnrDZGeoenYXdVWAx1ZcWffHQNTyfDKBEXTXQTAjpG1",
  "key21": "63B43CbknNiUgMTuyfjxTGCHk2SJMQUxj8SQxeEiKqLMHEoEEg6NLAxnrM9WPTWueYy62cBJSSW7n9wCUwybYraV",
  "key22": "4MrCjsCJ8jhn49QGddFnQrSjkciG6ptnuo741y1mUqZS5kSq5CivsNiLUGWampk7pnpngboznSnAAJ9onYjFUx9N",
  "key23": "3j21fWR4CJBrTzKsFCHbwzoyFjefBYc4iBzKW9mwYvDVH8Zp4MFX1g2nKmMdEwPoS1byDP3dLQMyzmxqm3RrxWQD",
  "key24": "3EfDagMy9sZW6Cm6X5KLYjvmS3LY5yasKgi6P7ZmXfwDsnbyousc3hdbMxvsgGq31SWU3mTcBqkkkz2FdFJjFadY",
  "key25": "4s56h83u7BHECBQFwcSieohfpx1Wof91Wx8Bg7w8sgttNd1giHmc5sRQ6ZxJSK19eDBrPDu5WUQK2YXjbd8WEgzj",
  "key26": "heD2EwugQN3cDQ4omiHmgEYgz16BVQHomgua4X2j5Ra5V3UTgfRz3yCYtY5SHJU8M2N5ovYgk6XHqESCKmhvaVx",
  "key27": "2FzakBCAh1RrDZQcmK7aUbFeGRgQ3EbGLP5WbhG6LQzMY6SGy5dLFVg3G55115iF8VxDfvMquV9u5ge1C8QN3HbP",
  "key28": "2fv9jNHX6qhnwYrJd6Wfvjr6dbjae8qpPfg177L9Bcyqp1utut1wnL9ny1yctjwK7AdVTjXcz4Ak1cLT5XSJq25X",
  "key29": "XHQCeTdKntxgewHvYZsH6ZWu2Mogmn8AW5BfLoubeGwTrduKWxVKAoHXxVHwgtj8AuxG3YUWb6rhqVq8zPFRWWv",
  "key30": "5uwbhFTyCLaB9WGr9Boh2yD1gbB8KQcDsbeR5qcSZ96vqwmaFpRfa7eRGsjyhTFxCC2N28uM9c5wPnLtZzyiQoCk",
  "key31": "5ZYDXesqtH9NTvR9qGfKopehstVs8cVtSo16CX7dm538N7qvUATipuqeYwof2GtEEaDnPioB4qHUWfY41huHRa5A",
  "key32": "2se8TExCgmTUtaXBa79QyCfdqWBkR2AmSMTYyeWnE72R5Ma8UYKEY6V53Vkeje1ErwqbxnuZa96Z6YTYizqCRrKY",
  "key33": "YTJagMhSaK489Aq1QgpAnX5yrmiFzLjZ9CBKZhmgMGQ4pzkhCaQgHR7HjMRMwfqxJVfcEwvKtM7BrskXnBygADG",
  "key34": "3tn9oZ8mDrfRLXt3Kq33KnGezGKKVStGB9nS83h7UjxDNNaU7yTF5VZy4WWtTPEBVUiRsnmpiXtSC1hqUTKphA8f",
  "key35": "3u1ZBGbcwFquggRRHqF4ecBw8MYuKrSnQjikbxrGqdeVNZumDWp3SqmFf9fDQyd1g9k6eFbi93ECHiBkbHwGtQz9",
  "key36": "Xutgp45hh6WVcXzhzMTrVHZKMJPxqWbfejQG6DkrTWPbFsoXjm9pzvxHaL8Y7vCarJaQPdvmKAvPzkSSwBJq9ut",
  "key37": "4LM6qpWxZSPumcr8NXzkT9swqBe1yyZpaDR1Q78ixZbCRHSA1HppirPRj3EwPsN5kitA8GQPCErJRfmp6rWX4Wtu",
  "key38": "44t1qcN4cDy7i2h4iqkPqx4NEKgHwY7ajehFf6CXjLG84zm12H8Jf8DXXauYuDokFRWjzE9FU6uV63TxA8HSVaPi",
  "key39": "4gpSvNxRDYDvQwDfpD1r6fbDR1WmyppLJdM9oMxSY8n3B3sJjziB2w5GPA7XvtPfT8HSBNu6g8ZVwQ1RKshtUkXe",
  "key40": "4ThXkLetYbjmiVkKvLXVgPYGnDFSgm3BVX2pSs8g753A4DPxeLJndrmFzkRXM6KY9MtUvLe7J6B39oGCXJ9Lotxb"
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
