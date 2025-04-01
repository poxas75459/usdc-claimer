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
    "2k6z1SRDHFaEiWtNXZ2eDNVxt7ESR3Xozr4Ch8134UykD8Sg5MHSeU4N3Rwm94vwkXDvo7YnPnRpn4LWytDnFp7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iCz8NjxS4V8XUhn77xMkZTj1iDgSnEQ6V6tdv8Fu5eVuqxSEXCnXpz8xnhtBY7aQMAF13N8A1rc3TxunQsJXpY",
  "key1": "25MQtNLsYtFcrMAmo9yvNMJEeGBf3redULfCN6rAV6eqWEA3Ar9Q8NXQzd3EELmfnKNeioT7oWyVych6Ebwp2rvX",
  "key2": "2thPd7aPLoYrxdQk9dDHd25JKdmTZ2ezQfGfpatDSmdsxeuA9wMTyQ2GfH24GXTm8K52u48aPeUJrk5VF8AcwVXw",
  "key3": "4bKgHKGrMJUfSjd1M6bGkMAUHFRWogZn9KEprc9JJFBqY2xnUa9dJHEBE2axNMTMzsAJKR7a8N7tdYEAWAQYrRtR",
  "key4": "b9ointj2EHGUQrQK1tsEGz5uNuJXTRZGV5CAXXjiRJSRwtsYxt8Kqi3pYDRqMks8EAUPXyDAqB47Wzn2hcWc9NR",
  "key5": "5AtVtfSo88vK6AQ8DwT6w89uBwJ4zSLWG7biFSFgEqb8znpKCvTv8NQ6W9DSUQJC1HTndvPu14uw37Qo6iN3wamW",
  "key6": "t4VH3AytU18uL4cjq8v4f7X237N1Q6hwJ7qsjvex3cbKHHVzKUC35uCWuRpNXinjQC8oui7RSy98x2DSxncSSYs",
  "key7": "GCUepvotNR4haFnDFCiDxGbVhnH36ACaXjB534cSzSJ1beSdM4DQ1Ho26vge5MnhkMYj3Eq8fUbJFPbkcJ8DQDu",
  "key8": "2Gie9kNFrCboL2NhhAdJHnT7aBx2RYiAvBFVzAJiMm8wzZxJ4hFtugJ5mrdtA5Zk6zJ1GvwHDtBPXS9WgYpyc1nq",
  "key9": "5vhMMk7GZN32XrVL9Xy3X5JmJAgwf7E87huwyJLVZ9CQcCux8XoW8a9VugVEfxe91dnFVsbGPWbrcN1RfZ416ukB",
  "key10": "54N4s8KuhaXWHgSGvgN1YNCm5Z2TiAYBoTueCDJ8c4HEcvHpqPFmH2nnyYxvhk5tX4XXV9uiPUoRv4SCek7aGsXb",
  "key11": "5ZmBCBGgj4vm4y8Uy6NeZmKGHo7hBcx2291TDQcKSH5WAaRC4zwFc4qXJzxQgXsAZYDhzYiRzjCaSq2zHvccjryL",
  "key12": "4RG1TAQYVAbgvi45HsnEGjedHfiMXVsER6nzd7S4eCDkpV6tyALEJnNtZds3eWHjYmzg1N8mwTmgbA2HPRqjEFzH",
  "key13": "3jg9F492jammXu1EhdAhdyKr9xejmn6KvW7cMteZfTvAUj6LdkW8bZWAcHiCMWSKCQBVK2FT9dnwPiuFaHihtqbg",
  "key14": "3MUfQMXgkhRzroG9WF5CyfhysXRT9LWuxS9v46o1R6WjTHyDRDY3rCqGVHYVStzQHZ2WQoVkzUKVSh6339gnxDnk",
  "key15": "5TmUnvaKwJUeJuVVxU8Qkpad6PhwP9kTZ6pS42KmTfpmcFFT2yWryyy2Nh4iEiRRREzjPfmxjNHYYBwvdLhiTNR9",
  "key16": "4mDB4b7JyKVhMNpxGPdJuKAHX9FxyiHcsFDfoUn7PZbLxNkDr5ndvanu3j39xviabn4aHnTvYQL31pfEgfXCjoBf",
  "key17": "2afygxHrQ5PXEnk4DtrVR6hUttF83vD2yoE5MKYgPWRWLwbcQBnVzDY9vdiFt3JUQVoj6Z7ehtm8UctXpUyP5m4F",
  "key18": "rDefdCAMxezXKgZuBM7sb2Y7JAEAFCi9ZPoW2wCUpsUKrZpdzF6c7JavJXnAs9TTpB4jqmAVTggQNQr1Rkv6h3e",
  "key19": "5SYWs2v8dnUMvGfkNNzLd8RdqJxbd3nCgAwYSe3vphbyKgk8SF4bR1zsfY1FFkg5ZYzBWg7QL5Q8VjnZu6Q92Lya",
  "key20": "5rwCpLMAA9nze7eu4RGhZ15D46c4khB2TcaKLinAmT5Kn8VHaNPFfV4NCEQXviFKwag5E1WSPei4k7QCo8qoHrJM",
  "key21": "4hepSfvNQrfwZdStTQ4HkuicGpmXgXBMXvxhQ3xh1Ln6XqXuMsa6tSmCWcwoKMkHbjEgGuHEtqfRMAe5T8BrPGBp",
  "key22": "4j7xqCHSWkh5PUAtScgppuPv2aagv3a5Zry5UTGfX8bnAGLn4wq5TkjQr6EdjyxWkca2ZBRjYddTn2wXjtkfq9zW",
  "key23": "5dUiWNUTFyFsVHVUX7swVTdUzHQLoX2tECmCREuBNbUQpfupEgdk3wW2F26Ans2CeruppA8HpyEnvuRkEVoZmoSg",
  "key24": "3oykFzw6ANbQYFnad3qZCSAAgMFZfSK7RD36C3LHTpTBkUksinvjMchHQRndzxJXvqTSaCgPboxU2MLLTJGWkgCS",
  "key25": "4AqiGz6aMvB5spwkFfiTHV8UEXhvZuZ9V5b6JcwiN8rNPoJbQDN2aeinoR6yKzvoGLUQ2BX8TAd5vyPnQMG8yScN"
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
