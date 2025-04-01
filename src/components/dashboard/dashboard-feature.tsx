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
    "5B7eDJrs6SFJCwo2N8w9magS7jPdn6vJWe7AboFVdKyAfduDkV9sWQPnqkJ4R1fPpRH6iV2dwSS1wjGYVEfpESaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R9TWTXApypSUgmGUspgWoFrXUtz1YBDjATJUvA8kcco3f4s8wE7F8gUTXduC7i34dEsCNzXmxAQrKRTtbHaGH4v",
  "key1": "4sjNMawmNTBneruDuSmRWU2zMMNjo5rMrTeEcrZnwpF6sB8bFkk8jBoNwNXBMvFh8aYGf9Nw9ZESgLXhBapiYKXX",
  "key2": "5zwtQFVkXdXavF9EfptxXx8jn81i7N3aNf6y5G3wKtXh7HNsZsTfunH6mQr4sB1Jmobvg78SgovL3vDvbHE28zbv",
  "key3": "4N8SuGwfUfKZxQY9bW1Vuc9MXshQLRrrikzg69uhLs7wEZELeGxkMdvmsamcd1bA4sX3SDRQ6fne6p2kgeLHkqNe",
  "key4": "5Rciek5FomXnw9Hbk9qLzWkDBKx7nmct4sp6Uj3t6VbqcPDtU881cZF9gwBfzPTaYLb8kUw5Nm4fRDHd7WLkkdxs",
  "key5": "2YoFJGLfubtHU9PgqhRwf4Zmo6LtZ9TKTEg1Zf1SnYbPRawprqqqRJ7UtBERiE6Lv2rq7rFXvY6fgV5oisE98GZf",
  "key6": "2YnFeGuGnEZ61aboEVi26xaFBZrpNE1k5EJpNUZ43fVn7uR4VXLXQ9RWGBMhKm2G63iBgm7sUFfey146ntFqshEF",
  "key7": "2byBvRC6YRL2yxQX8rwRC3VXwd2t246jGsr4d37dKZBohVsY54eqD6JpMHStENf8vyrNp2wvd2Hoj8Yeo6tUa5N3",
  "key8": "51q1hwU5RQ3yCZQqe8BYCWzdsxYugY27gBKZEEjEwyR8m5Y8DddfF4KkV5sYM56fQd9r8dFnPhGJeXC8EwQvZBB",
  "key9": "3TXz7meWDVmqXKs3H5XGWF3Sf9Y2krHDbhYFM9yespdzGwb5SkVaXgLraKLLcnzgvdeNSP8PBkJgaJ3xNozBRD4p",
  "key10": "2DoMw34KJjqa2ewfDUKA29CAjWL2rKir1e6FxCHkQBkqRVFgs6PzEp3MK4akc8DVoCyZmYEknxsWvLd5bhMLpjRF",
  "key11": "411iMf4wzRXMoFzTMD7EwpzCA3R5aht2YKcYo7616HRm1PyTXqvBsUVGCPb9BbMsP7pC16xtMobJKNSycnAa7gWR",
  "key12": "3bfr7wef3RxvKvdiQRT7k55VZuAeirKaiHWX8JeJU8uuyezkxrSTWK7qFifNFDFZuXKLDFuYbuAK5SonHfsrPgj3",
  "key13": "5V9nUfbzpTknHmZzp4JJ1eJxnEuWar8vNkNyhpEq9CWrFju7eWEqzo4QBeQUfqeYP5jFnj6bL1jLhtvc4Pn65p7",
  "key14": "x2FBLXfs5FKzqj5uDdqrfETNTrnMLYsT73LDzTd6GpbXt8MYyE3jAX4EVhsntPC2Qt1viqXyWFYBBxoCTFZicaw",
  "key15": "338FGJdhx8B3nYcwEaAPJ1RPPngAXNEL4HMZ45rmEe38zAip4qY2j2qLBqcFwmpisJSWxbVC3ggWwdqkLdHHeVjf",
  "key16": "5nYByUus3XML8qu4aC5r434gyUG8aVViWW4zJiPo9ZjbJcKWkCwddZfrdCLH2z4RYbRrASMydhjyZgTh7Bvaihrv",
  "key17": "BjNjtq4k3tek4kH97LJ3fiB2jbM4hYu6Ki8Ad63bTrVe4GmXz9UxQzYfWnbmAaEHDRrCKZyrqskR4JLSBzYde9Y",
  "key18": "3CUm6xRRYGoEkHRv9kizVzMchY2sNMX4DvMrhbgAWcAxbcgte1rvtQ71roYbNVRBLWwbN9esNbWZsWWMQ82y5Cz6",
  "key19": "2FZKuaWzBEdXPEf95dfGTvfG7U2QF98q1RSM4A569d5c4s7tggaKe3xb1uQHEHqNJuGmibQahVKYpBhqtETbfQb1",
  "key20": "5SinhzkN9BJQSbdXNzEduBs6C6oPnMZSBMiS6KRkdnDAAjQsxh1GmU7arxeyjSbVvfXvsawwzqeU5hKWEV987Zgu",
  "key21": "2jSrQgi8SrPGsX1mp83u1HRggQy9Mq1emWZtxVoLsFabiSVrdCmxxTZBLmZvbiL5ecMXXqCBVhA3Sb2j7nvR9VFz",
  "key22": "jdXdC5MrvUo9GJ8LRfGDYJ82U4ubufhsRu9yJQZ7LRjXkWMwV85rce9HJJsnM5aDbY4jDPdcDM54JafWU7vg74e",
  "key23": "51CvbTDbYcABgsihr9CuGRMzrHFGiykXsCJAaSvNJgqYoiUD6Wra8UEBTFFMhVGp4Jp4795gcpsBWYuocbP7fMWs",
  "key24": "3ShBkM8BQy5ZcWZm6nzzwL9PPvoDeJoZcmjwfYp5WWFFveYvyURX1vHKZUTuMeMWXVNxGHK7UbRDcDoSqugNzLSQ",
  "key25": "44RfVKTvW3NWPvvW1SwgmqXQgFHGGDE1B5udyBNnG3FDZSYKhS93XxEHPGBNX3bULcF6hqLsXZquBnh9oZvoFK8q",
  "key26": "oVBFw9QqeKiEgDmSLKH3XyTxwpUedQKbUAL53p5bN3wvRaRD8kzDRzLPCezNsqfhSjdwwDZZEDCJvDYGT6AmmQV",
  "key27": "4AZc2BaXxMquQsw18a6iHi6B6tWd5snb7zv5bPajSST8upwbbnWY131nRKREPz5QMTnBXrELSpA8pDVzTxVaPwfq",
  "key28": "E6sz6Xac1f3VBTNQQxEjTkybW7Avmtt8D6LiLSsiKaTFWXBtsbSfXhKdaqNF3aNnAkZ412P7QHyJDEucGSbCWMi",
  "key29": "5HBt8CGQ3ZG9WnuHTFNiJzzy2yQs3mWQetaRdo1fqFGJHydzWyohzUa54ExRD4Pg78bK4245Edb6nsMxkLASAYHg",
  "key30": "3gwA36MJJnHywz9nqFAWhY1DPzuPXu5EWA8QfXgAfeGXjcbpRFB12ven8vdrwgwz7TCcjNr6Aej7Zh2WfKvS9FJ3",
  "key31": "5KqBfar5f4KCgBG8jpMQ9fL5gSh3cjct78ZZD21rFMGq9Yn9D9UEPLHpsvvDB8k1iSC2gcVtobnRoWqcPazy7Zjr",
  "key32": "66NVX6CpRMJkKiaEhHiii6mhU9HX1zhWEVYDStWySRzA6BEBHrgd212wiGxx1ntZHPB6B6YdQ6AaMKjz2nPh4gzF",
  "key33": "4ZRbi4rYGn8DzPETyj6Fh1ZQDfK4DhiMB6kxvzMhHqUZNiy7cNXh9oKN23erZoKFtMK1aFXUCfRL1BtBaRX6V4yv",
  "key34": "42Wydp8QarkG3pEJmt75svPjU6XT31Qef5rKsWcW7jJKm9QtJVN9tytR4Pqj2ShTm6yWFJqiFhUdvA2pLKbeYxnv",
  "key35": "5KFzuAYfb8oB6j6poLkR6cKw57JtwnfWRJXzsYvQ2nnhiKetDbp82kineuqFZxNqn1E6WYf3SGJVhNeQ63tfbivM"
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
