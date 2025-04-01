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
    "28NpvGg4Jkfpuxeb6HLfrWqBpaM5ayNh4fggY4czuTBdHSnH4a67NiPAUEBeZp4r6VGsYjwjc1C8WY9SmYcUNxDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KpuQkGNQrwUyi4VW677LjwtiGfLy7waNH34Hd6khhpckfXgWWLaQBREYTRc1BRwgkB7rV3PFfg67TB9fUSCHq5A",
  "key1": "4kj1H1ab1KgWwvnfCcryHXaFaxpWd6CFKK4Ef8kuAaFzygBT3TL4UvTtYJyAW2VB4FNXdbPEygSqkjdu3cCEYWLF",
  "key2": "pTPsCwLjB24N4gHnWxCFFVxCJFPQLMCRNr1F9u7xppjG2xs1KzzXoYJgCd4eJJQL6Ur2gcF8eZHRt87GAdUaYee",
  "key3": "1L4f3w91JsEjEatH1L3hYePuFX6AwRBxhpcn9VcBcRQSuoqSWuoXQ7fgcR3oMG2XMqgQLWKu8wVLqhiiq7wBnRr",
  "key4": "3tMGkcG5SrscayPKm23XZLSPkW7hRu4LWSQqGBbEBaoUsPpgVvJW9nkbVEoxnknVu9RLKpDHwCQpbpZdiLKsnfJu",
  "key5": "sFf7xFSztQpdoPxBCFRw3mW59tXUtRHLmQRq5RqrEB8kg2txEydh2RprDiCmVMwgN5gSBXwKAAF8q9hanbu24dg",
  "key6": "5vPnpdcQFnKh4tqgEdKQUTZV4199YBDf9oNeynWwZhSGmRMN5WuMfLwaeqbBbo8mYTenP7nbdr3F8ccWJGK1xTav",
  "key7": "5ZXKA3HQoYz2bohsh3Q6hauQ4eGzZdFh6FR2VLaf5zegenYhDaxkczqje8TBmBmVteqb8nBeGbJRmHuFvQLZzXN3",
  "key8": "5TeXdfxLPGeGy6tdamyYvk3Hf3YfE3FVveWnA7Zg9ZJiz2E9wqrudtyNCeqpQ1Et9YYJyZ8p6vDC7jEnPC6Evxpd",
  "key9": "31UUsiaXtrbU1kt9K7EHgUgpyw83RPjqzJCxZZCyeZ3ZgLQ4GU87dhsQGaJHDzhQP5T9yiknn6o2SASLf1zK9qtb",
  "key10": "4aJUS94L7UG4WWDFaZjs1dw3LsdVnumcguUCW1XeCDh7wromqeDe6suxwrNMfxcgPMfuXxFRo84vVQEqgdZGNA5V",
  "key11": "2xJqbcTSAqBmtuvZpeZLWo66dxseAGZStGkbhrYTqAh7uVdnTaaS9GaVof4CTDXuk7ERkke8ruZkucZJF6XatF8m",
  "key12": "bTAAmQzHYm1JNqZttcC4oGkarC23MRYyC7ipDbM3gvSsjF5MFvx5n6mYKRr257Uw3qUJafC1ZWgapCuRbct1Tpi",
  "key13": "5aFjdpiRANSLTvQ4qStFpSShG1E1gMnSWW5iY19RbX8n2frgds747YBsTdhnnTNz2uYerT1Sd8fpLgJo8AjZf6MJ",
  "key14": "2AaiSwiAsfQK6UqpVsjvaLmKgfFkCMCimwNjhcbT9at38R5s29bAhCmSqMx4Lzhkb6QqsGUdtkQLuT6dsuFomTbg",
  "key15": "AEQ7aZ4QNXpEfz3Yg78iqrFJLa8g4sRVcSpzkxyV4xNfpHLZAqP2JzKyb93ZPvqww2EXCfkK1Newyiwg86fF2CX",
  "key16": "3MEeUCtCJ6ChFsz2rqtiwuuVnyyJ5mGWG4Z9M2DLAVkHNBNjfQdzouwkGcMTtvkm2WThRC3wWrRSrsL5daG88cLP",
  "key17": "24CSvxj9DE45MGcjcpH5D9YKvJA9tLDsYg3mK7PiRuVkt2SKJtZSTNRTmZ5ucJTuSKcMmoJuJgTt4pTGX3R1o9sb",
  "key18": "5V7ZWtfTFwDFXLE9TPxAZKJ883z7C4goUocyLvEtnnVX3CTUzxmZvdk6MT267DN1Ev72C38fvJdvjKkvqoGvxSAU",
  "key19": "5wBnWiM7fVcPYQ4NupyR75DahcnAANLHFBYATpjrARWmqCSSK3MT6uVqj7dzbUT6uwHiGcAmmLY6qJvz5kD6v6Ud",
  "key20": "5koh3uGFUv5A3PKtWnLX9JWt5bk9TuHCU1DaQegepPk8H9SZ7NnnAKnEJ3Br3dBGBNmAmJFSMavki53wPKLv6Juk",
  "key21": "2qJW6G4wm9Y78AJd3R1fZ5oA88c9z3DG2ksKVaXDgF5wSGwNy4NVcL7Y1RgSgsd8XAQgoYufZcBJrrr87MDCQEA4",
  "key22": "3m8mTvcFXGE3YjLsDwbt9pSUyeyAL382XWLLwP74heR13HD3qpJYZknJppQnTAzin2HDgH2czcjS96x7gQff4Ghi",
  "key23": "KcWZRBEuJxvhUbDwmzmGWHE1uBdM2c5oHCZuZz2JKQJ7kxuvvCvWGLWeedokScXYXrvqqdvJb7reYus7GZsxrPB",
  "key24": "SQ59eN8Vvpa4btoA22iGD4jNR6e3wKQ195g5PB81VorS8wGHX4QKULAo8eZMjVS8FqhUwywsLFPpKxxGBN8fT5m",
  "key25": "2uqRJrJADLmh215HKLuEqiTotmKAmHWZgXp1otURK1wQ1zLDiK6hMKxYJDkFPDh8jp6LFqZv7WWR5w69ZhUTqJ1g",
  "key26": "5RMUNe3hNyopcuu7VbBjriAQGoTXkK142LLef55X6ckr83kThuCXRCYGafprejQfAiu5yYy1nZ4Wy54fe9DmWiuy",
  "key27": "5KtHY8xSA86dgFNPLyjGsjetLNSzZnmhfre18FTXjByWPsgj7VVW8Z9Q69eHBWpkszJKCoupRUeasGtDmAbKfTLi",
  "key28": "61EhZpPkLm9BLUWHZboqZSkq4uduLs4h1juXmWUDNdq5CRKzYJt2poJXqodEJT8q8o3aG57XGCNQEcNrbpQdAQgg",
  "key29": "64ZqcMRvtfoe2umocsu7VUuu1SzTrRoeW84CE7NxsB7L61cqvpAJUNXTPEgMHZ49G1D4q87ub5ZxC2kUujxd3g7x",
  "key30": "2GB6Ts7dBMczGpimwmrqmZemWDJP789aYHyZ2Ca3uUXapouYH9FCjsMXFNqn3sXS8NEBY23nMJLNT1fyVKoQ8RXA",
  "key31": "JDJ4JqPmeKeLT7bba3aMtJRzK8vX3CG4QMc1jheh2CF4aj7Ag7S95b2SRPZo465GEHsJW5HDuHz4kk1xD15t3Y1",
  "key32": "33MCe2yGE1PHiEcqLZXdbA7PXycvaFrEiPC7aJwEP5UMrTjP42aArr23uNwjnXpLfRKb8cqKs7wngYNMVm5Fs6fp",
  "key33": "2b5FZYmfowVvKSd6bXxFhexeLBVxnMUGcHXEfMctLYVSViFDUJjXwXhbw8gRiSSfEVQNVbsSWFLBkrvVKurka59n",
  "key34": "3SyhV8HfTidnTPUH9v7432db62PmVem2mYu5Eht34W5hcYvCyJnKyxuUshzGMMWw8oNzmcRdHYVzvFx5aBMHTDr9",
  "key35": "Sso3SXaicwp6icLybr5Xc9ngtkPrfXYwHxGkokxChgZjPkZWZR8xyYG9o5TunrGoKfZrq8eP313gMUC2V9Ltg9Z"
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
