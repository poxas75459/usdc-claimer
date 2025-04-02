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
    "48jVmPJbFtyxee1GVfsjRozC8PgA6zPnfZPocqeCopR6abBxU7XyCt6CbHLM88CxSf6ey3hvjqsqk4vQA6WASg9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HTQVBTxLHja7a7jbTSmfkrRXUcvgbMVEzbz2LnsXAZmYUxh2ztSVmBeeSed7y5rozsP1yMfrgciA1SUjRbaUw5s",
  "key1": "5LCd6ZG2HKBgDnCduHfwffHzCi1WuUK1UEhvgud7hAdronzbdXRWrDMAFreX6Mm4eo2w6hGcAiaNumXFu7cjhBsR",
  "key2": "4dzg8cftqfs59pVhbjSa9Y5G6r3kxu3yDuLXGjaxiKH89dKkSzT98W9A9Sc3XUByjxs4S48fJfBx6vH6Vn8RsLZR",
  "key3": "5ypqmKq4JAdqPXVTuALiyufc5Uw1gPLjmWjjukd1hSWoG5aPCdeUf1LvnKeBFgALyhGgwgorDdfmDw8FnExiZ7sQ",
  "key4": "4yR5o8ijFuidoM7rSfTL8xarZjwUkCpKxFNuLAkEyiD9oXTJMJKFd8q11Z7jYheDEZMtPu1zw7kBvChkqDwmBhJs",
  "key5": "5gf3G227SCtqvRaosX6VPGjA3Wdqdfk3UmD9ss3awTjsroSTLCaXoR8hybecbG93KTNcfouXTTZNQ12P9q8wfh5x",
  "key6": "5b169qGSfdUY2VtuANcH8Qfq6PhJ5Hmgm8q1HJtwboHtiXW44GUvYkNu6xWfTmhW5h6b3kEEYexQPN8GVevkZVDc",
  "key7": "A7TfL2metwto8iW9YDmHTjt3HZjnTUStYXSShn4c1pp2zpejxzD2gcdtjwWu5sueNbLNw7Uyk8KGBCEGUeoCryv",
  "key8": "3RDpqhWLShEcAf2C4cSUfSiJQjLhhkCvaxgMADYtxKhBU6tmBxEJxgdwM9iP4FYUibhV1PXyDGKZcmoLaAj9UdQk",
  "key9": "39RPxzpL9WB1xraUnE4iQbSZY98VtaCTqoNybCpWE2KeVwB4fyXzCUhdzKos7RKuu3ESfaJh2voY8abueBBRdyjz",
  "key10": "48ZhWz3FSiALWrr1VYQzvEDxYNmdoWtT3aGenPRp5m97j2iPzoLDTdasMFExrZZ5CjXcvmCFyCUm4DFSUviYSF4s",
  "key11": "2BwSP7yq436GVhDYRNJ2rixNXjWpX7KuxTfdA4mpeEvdy8axDxMgWFBoVKxi7npXJfjNJNndLQCuef5JCrnzHp91",
  "key12": "4RCddBhtY5MaMiyNnyuxSH6ZUhUzhc7EdCRm3Xw7Lit4ZtLZjgNZTmuhDwbjS28DoBnrbtG7NKqbi8fMG1gBG9bi",
  "key13": "63ypQJpeFzD2vCJ8yQ8BSnGbPAGaCvTSQMrGcRz6EaeYyRqntoQpBvF5ecSVEGaTfpsgonraguWThZaHomy2LLcw",
  "key14": "2v1Z9RcyY6hb7QkptoY6YQqug7ryWyptL87P7tNmj4zMhMcVf6pvpUY7WnH9wH6aMA3USAgdLwKw2oHSvwZ7pXEa",
  "key15": "2jqBUzgZuDrKYZhzNtuGaohJgh3HSFRhYiEE8PSLfJxv5aKBQyJmnEP4MV4M8gfCbm9FPWG8Rs7nv4tKbmu4ksao",
  "key16": "anP5sh41jV8cBKrrwFbdCdN4SUyTTGr1fHU9dreyaDEiASnAjbNsV9Rn8shveZ9HxeCNATWaRM5cN3uQpH2Q8b6",
  "key17": "2Kkz5zZUpUjhEKTyveuUfHqS9TZjdWcgXc7c8ora8BG8nLpJ1ePgy5XzMnvdyKnp2amG2TWNDMd3usC7tBfWt6G7",
  "key18": "5axav8rXtZQRwdxxBbkWfhbougXqMXdSRDcAWk431uCUy1Hguzj1vigugMUNUFSvkCxyqGxDzujkiE1XmQxyVgLj",
  "key19": "4grm8cZ7fe7X5puEojcshBhhpw2vHPiXd6hHroFaV6aEBZbwaMNyhaKKbw4sKaPfMzNdzyuRG5vXkeG5yEhtvRBQ",
  "key20": "4j8SW9FxvYzJM48Dq9xxkb8EFTCG4rae1wjyBLRVP5bp8SzBQT1WLVz8jnymGZ7yLvBchaREpdz1Hkf1aFgvuqTr",
  "key21": "pk3yRZz27yhJDxsgmN7Wyr41T6dVUtBtrkRRbfA2xB6waeEp5sLhBxnf9hyrjKL87PHCNQCFFF8mEstCR4eBZ6o",
  "key22": "41hScTHsJhE86m6heJpf8JtEeC6pHbQvh7am9ubw6JsAKLjuQcYSx1FmTPz4BH6eMWY8EfeL7FaVMKdZ55HY4tMJ",
  "key23": "4wCSLu3KhfgxSBeSbV3NxvoAZHv8CbyXs6LX7JCFbC1YhjnzmgLYSpurQKyfDPAT6LgLxpopy34rEVUmoyLcaJXs",
  "key24": "2bu1fHZPiAfV96sLkSAsRud8vtwTmCSKtfghas1y7W2SLMAvrsQd7vSLxRtY1vXEwFYpztYt8rVwGrkYjW8AzyGH",
  "key25": "45HEFGoFKMBetmD32YwGkFTFz5dtzLnCqJ1ia3tnnyzz5z4u8EvafwsW7HoFG23WtDkHpb7oSYgsP6EDpHyCktdL",
  "key26": "4kpm3YTv6KP49K7A59fhdyo8x4xCHFTiE7Fv3FQH8UV5m5DBpGKanJ1iXhWCFYovKYGwK2eUHDRh6e9WGuykEigJ",
  "key27": "5Tf1hnCWnvYjBczBorf3kdhV3ZqwEN4bTpnD5K2mXTVf2EsWxMVQaoBYC49vDjRzAMGyEyf7t4ePdDWab8knY25j",
  "key28": "3MxJjns3SNad1QWFjn8jtU33gT5a5AiqanPdwi4cYGGMSZVqy6nYerjbLsMf5FxsxW4mGhdZKi38ffP2bx8c6DUQ",
  "key29": "4ZQhZXAazBJWh4tJQWAC5JjBEip8D6gu2mrLGGScAvBmEDd6iTH3CeZFNDcZMwmjxVVTkb7UxL5TDogDDadFPtDq",
  "key30": "3eBxxVFTmNByPvzveL6WJ5MP5dZ8tZJ41rq3uUvXCWjpaEse2UVZStGx5UnHWsR4gcRW2MbbNfhyKJHUkZqVsqPA",
  "key31": "mHR4HFNhoEcqPoN2g5N49b4vtrtBc59AvRoRi9zgXML6RQPpJs2R6bn3DAV1qshDrZxKMhwa3bdNFa4UNQRFZrB",
  "key32": "4VzH73SmubsGruaR9tz4xNbn3KFcumYydaDJTHjGBPcKLPTwjT98zr9vPNXUtwJ2SyPzwfhvG6sW9fzyaS5BYyjS",
  "key33": "5VG5SkB52GR6Ay8yYipD4AL7vmCEKa3LrXBRajw15V5VFzi2TKvH7qAYhSb9N3FGrYDrf1uF4J9GBNF4BEkrkWrm",
  "key34": "JpnhVASa9za6xav8UtGYRJyiPcFygpfwZtk3WFXm6et88rx44YJ2eENubc1Lt42psLToqsCHAzDi2FjE1xj3rS5",
  "key35": "2GD1Uq9CGTwGDCpFtV1daTT5fq3Sjc8KxbL428mAUassdcERtrdEexgcfnAwg3wqE5hReRqW8USYAyoqgVKSUcY9",
  "key36": "4riCnXfq8zha6oGd5rMEJfV9KvRoqgYBemC8EsfxVLK7iE2TVzxWWP2g4WtPD28SV41PCh1jBtf8Ge4dmRsuyHh9",
  "key37": "5kUMUMi6tuk68VzMMbhtj2bman2vtfYkFnXjXMUk8kG7F3BNKZewJDsvMWufMmtYyiUMoQdfEUCYS6dsq2chh3s",
  "key38": "4F1AzCzkBcfiY4S58nrUiB5ntb2BRzUxeaS7wLBTV3QKVCHdKmcHqnA7iJdyV9ApCXXojqVU28jQ827cQvrSZBs"
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
