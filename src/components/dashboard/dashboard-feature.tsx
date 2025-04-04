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
    "4Fs2Q86J88546oYevmTNaZHYcopq1Uuij5F7wVxzvAfL8ByTLU2rWuUb1NoyCjoZVJ3ryG1HYyTiP7gPtNKFMkXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ev6xbrgZsN9vr6La6ss4HPnZEDLHhTpyKxT5LYNTR1pb41Adh9yAyWJ5pZkKmqzfnb5B4iGsHC5jcqRnYfNbdJC",
  "key1": "3DT1MhBW5tg5HQDxfb3ScpYbWMcV3doKFKPxUAomqNhnL6nYcotMarxP15qy8iaBaCFGBLfrkvANJqYHYmxJk41t",
  "key2": "Lcpkdw1Cuu8ne2saMKwZKPx6Uyey74oQEqjBs7S6vqo6Vv1mfB4QEk2WmGoDhMAWJKZcYqgF8fiXixPieEYw4Xq",
  "key3": "3V6UQvvM6TpexB7puHmQFddMqWrNcFgGKjNxHZYp8PsabVBM9Y7tQNZCaBXmShnJqW4HBBJkeLyjyFrHNLhhrBYB",
  "key4": "4FaXE7BxqRa6HnV4Rbci8kQGSKAd2zSvxobr6UiKKLYemehJwu5v4cS9TCvNDkyzV5oWLzEnuWvdoovZcw7ayNCe",
  "key5": "2feRTggAKJazoGQYs8onFnB7uVMRDRqKUDpHRRwcLGMjdN7UQ8JcQB9HNfv9WuHLWjNZJnjPU2emyXsC4kdmasn9",
  "key6": "4mWsiZwAHWBS7NG1YVr8nKJHoWWxQB1byFFbMDEWxQTXnJtiU74aQrLmU26HHWT31iQL6qW7FzxmpMqrNpvVJzCo",
  "key7": "uXPH88ZfuFYd3nBjguPJiAupA8maECLtinJj8LNZiCu5QmahduW1Xaq7UpGrjfhoDWH2HhCkFZBHnGt4KBqTy2h",
  "key8": "3czw9d9FC6aV57wGS8dpyBEWmrdddNfaXPE5QG1xVUYHavDfwuf72bCjWgq6oypLUQy9ZcCh87UZBSTgaomGh8GM",
  "key9": "fj5MorRrs1r1FSREoPAyaekdY6JrTZYhybTdQyqCeLXf3MqRnFH6J2zJe7DhmGgrdZmk3bohC3zXJVwmHCXeeCB",
  "key10": "4hGQxa7im1bvApqTNag8aGQuGpPDZZNCmpt5vWxbW4iXxpYomYiwXkVuCD77iPQzn1aH1LLzYkNpeRk6Y2KKjUQY",
  "key11": "5vfvGgCKYSsj9aTDG31vrGhPFKKETX5gnXnH1bot4nKvMS8iuJqPkfoWkQkNTAiYCkexRdbW3PH1aFNPLFtmw9Tp",
  "key12": "3YqpRTQ2BMGnVUAH3z91TWo3C4X7nbwP8LvYU3fh1KRr5YpZEoNLkGoSU4dao2PFAN7fUGHpVFxPHwvwRk3g2v7u",
  "key13": "NvxZnDm3jE9jKaiA7RPgaZYiPMMCqCbDdBMAUGkYpdUS6iwbxZoWLdAxpRihCALS2jBBZfBiZbTJZTUauFY5Xzx",
  "key14": "iHERQeSiSyZABrsCsTnAgwomLZVy7yJ3xzgBubVydjyJDBGag4oGH9Y53oFtjiupTcS6EdLfekd5fQ2zBKERRmf",
  "key15": "hrqbmFnhNHykGMzfC5ZGQFmEHTjtTs2HB7NnZksHq8znoTmCSdEqg4NeZJoXC99iWW7fmkUWy98eKKCpdCpYbVP",
  "key16": "3eyh2YkETUujNk8nMqSGq1ZRBzyriNLeHnTQUo9Q6rVHb4a8SJLzXga7QLoTMynG8pqgjnVkp2e6t1BKQB5ATpyg",
  "key17": "5iTTvUmWG7YZdK14PTMier1beqgv7LMWUUBqh8uzqeFiLsKLnmHVtMDHuJVMGNUaBoVG5V8zYcJ4e8g8ZTo198jr",
  "key18": "2HSwcDA8tqL2rK6jHgYp2rkosCfR9SA2VbCJQzgWNnUm4ygExdCuvsqsH9tBFToa3JUAtvUvZxu8ytGfthsfGnrC",
  "key19": "2Gmdt1pUCqF9y49MYz7RdFbPZGtku5oz18yfpQsorWnJGofJ3vkTZw6iVCe7xvmK93oDypjWJLneDi2TjMs4sKU1",
  "key20": "SMcCRV64E8AUKvdWbfMX45tCeAmF4Z6zVG5uCootdRyYRxPigcgsYcQazLEhZjAybDwMiNGBLP8bVVFiNr1CW1F",
  "key21": "2ms23ATCjGBbVTqxf5Y2h64xf52TdfvtmWGxxnWXxkUTEvkLRLvPxAEwcDCzRdC4TyXWavDHmEgYwB6P1mkgS3Tx",
  "key22": "4SZBGgtWFcYVFGpSG45W4vThJeLU5gEdSrbBm8YCEyviGs3az7fi7spUoPbmYgNgnpFsBbkMD1A2X1V7A9Uz8Zrz",
  "key23": "3ktsMGqXvA3GEPkxGGZN3rHzci1qM8BS8mAiBkcsrSFYjU6V1rYnViREiwq3rWJDGvhDiqH7TLspVZk1BRd5dJHV",
  "key24": "49nvtFCwM63kgX67jbZihi6aWpc9Lr8deVWwx5nyy7MsXrzxXwT6eA5uwUzJmNxv5teCDkprvE4ZLucTPaf28NMo",
  "key25": "4F95CqEjHNPjfGp3bQ58VetnymkcBG3zpzSvm9QyWs3hXopWK3exknWB4MSWTnJicWz1o96tfancYtnomQrQjmv5",
  "key26": "3q3K6yuvawd33YyrSPLmUMZgvuwG1MpfYo9trutFaBBqc1FDb8GUB7tpCakQxzdxfygLGuL9N6FLkpHVnei3LthG"
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
