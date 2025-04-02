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
    "2pu8pjQLmkkLVUPfGbhaeCDc55MVZDfRaVGhhH3jEvRHgBfjBKD3XexxHi3yc4yn8oB88NhQMFn8br9ZYYeM3LwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Aa3h4hJeS83wHuuDkaP5P9Mv2sov1uB9VLdeZK14UhwLoP2MCnXQS9nM32HfE72iTduk9WQF8AQAvE6mie8rB9s",
  "key1": "3Mk9LQE22KotTvhCzEqidaKqZFkhfYE8oZ4oSSfBu7mqw1zkr3DVnP6sqmNg5nvZsqs6vHuhPKY76cLT2gLHJ2YP",
  "key2": "33jsxcTMHjuKcpKgV4mEFsRWc36tTa2qfV6SRJXG48dXdJsfkhQiFfXaTWMUq1KW5KJV6kwPxXue83dDEHFDTb7L",
  "key3": "2tbQmKQDzKGCXsFpRRD3nW9UqaFF9gxh3AHgN69qhNtpHxsbLEWpzwr2nad1BuEPCMGVJd5uNzHbnJ43hKC8YHDh",
  "key4": "4bTbeDQpEhpVrBHkS1JojjfRuQC4WBhofADVi3mKAxVceGM7BBPULGEJa9vfc32HBTHt7tPmrFmVVqSbKoW9AGft",
  "key5": "4YEYgLxm5EErTFyf3yb3QBS7VbTWnuFUWaF3vnfLMh2eKAoGqfXSCQjekQAqbzNND5JHGBLyhr2xrpS9o43oHCzK",
  "key6": "38CKQUMFRekZR7tB8ZpxKNuAL6deZ8SDr2PGXTsXRxMN8bPy218Vz7np1HhGR4wTra94eFut8phjvSkC3kgK8QaH",
  "key7": "3Jnxt3decu24NsvPu8yPEXSnJa5MgNEJvEQ1PoMcZVZNav6iLrqG7x5FxE9RiVeV3KXV1Rahx7JZpiwHxT8F9Uxs",
  "key8": "3NxNjTQDBSEvP8QJbAm3FNG13bBnAVQ6SGo9JKcN48vFGKGWP8fhCB86TXDTHkKYXQvf4ZqdM2sW2DT7EwNQLQzk",
  "key9": "gqFz4oMnnvwhNrjweYzA98q1Wh2NCAGmkCjw3aPZG53zDoCm4NFhCMMRmYeEUAh7WuJi9xWMeHWS4GaozvYGiKN",
  "key10": "2hpXWU1D6opYYiTrWYJZpi59fGVRofNSnEJf1QHGGcxjJtRNnsJ137wk1B7DH3oXYtoNsocV2WLfbTbXtVR2Cbsi",
  "key11": "21AGKKVybdsKqJAUpX2RK9tvMSSXzrUETWWwQrt1gaQd7PVHuVcGqbngf3ra5nw7anRxEGx7BbABSUfoxRemjD81",
  "key12": "3r9m1rx4EjH8vLGaTE1h81js6Cues7QSyS41xP1YUUqnVVsjTRCsjtettrGWVTTmP327NKeJpqGNC1aFZwCxw6WS",
  "key13": "ZTkp5dYPJDhbw243fBfme3LoExp2fVZaHnKgpcDUj2oRMKCoXPTyu3Rf1jgcRFWfSWL45nbBafgwDFxTdAhnY6Y",
  "key14": "3Vnym8id6pgBoGvQHfTDWjGfCfFqgZKzQSicpYJU2qrAaEzcKMbRBiD8vsQ5RTRXMQbT8xew64jcLJwVbBMtfaXT",
  "key15": "5TfM9CmyAB9sd3usFgPuxr9BHzsRsdExWeLcS9US5pQLxLD1s6dAGdQNaExx3obm2tSH4Aa6ty4JsHCgs4373WNK",
  "key16": "BCaT7FS31nkUfjn6P2CoLzG5JMmSwcj6nmrwCuaC1hhEgFqWKELxqxwq2rJxm7ovQrL7zWJ6ihYyHLDbGyfsrDn",
  "key17": "2S3dqDeDp3MEkM9opXZevYncXHM7YRwYKHhX9cGzvqaaYxTE1tNGbfAiyBCwaiMUG3NaCL7FyZ28r53jDDd7aC5x",
  "key18": "zxGNkGpmLi8LY9BCmjShALukTAqR1ATeN9k8sSvnEJZsCr8eC2wLCoj2Q5jbtRmapqKsfc8eiFDRweHXScTHQg8",
  "key19": "5oLbr4fYWi1f2pcd53mUJb1P4Na2syr1XtMTr7FDU4txkHGJ1A4iTkBr9SeJ5hPr6Pr5xLAhnftUw4Wd9DiavkqR",
  "key20": "65SqyFqwaJjtqXuoF9nr7TqxABbLoWi7uiaBZkFL5GWECiFUuZMoepxAJn2fyNC2LDYcQ5JtDGMynVAyZyag5tZ5",
  "key21": "tRbduJhJVDrbGhb4PQ8AoU5WWTAj7MKJkA58kpQbFvcch37AczRKPRPjgSiSA6vViYzyVs1FHgjrMAEN5ANt8i1",
  "key22": "3qqe2vC5LonsDV41BavsNzLHUKxxgbmxH8a9CNTSgK64yfmiEvCAXWRjzK9hNPoC9jTPUhe6zU6aniLMtAX6CCM6",
  "key23": "4dur4TRi6cGaLEuNZ7yYw4fG9aboQT4gEoUekP3ikNxdiygbVnd5GpYi8wz63KD9RSMFSCjFwRDvCbL9w91Si8rZ",
  "key24": "4e3j82HALjxk7H9Nmsh2CZzjXwHiCoup6r7kk1JQJk44kbMHrymRwDXvZppoL9VuNPhtkrCWTctYJT68Rn8aneCz",
  "key25": "3CjM2UfvL2TcYmiNrJFRrxPT9UssUkCENyrLCLKbsnwoQ2zFRXqALGASgNNNT62UUqpgencH1Gt1jickSdJ12gdL",
  "key26": "5qvhBaKtHtxpM89rKF7bkBfTBhoJ5eGKwGHSGnEatcreYs9HxfAkaEz6g65XHZFZhXEts8ofoDvKSoxXcqq4iNGB",
  "key27": "58GW538tXowkDKGCjDfH7oJXKHXT15djkWnszdp9p2arpog7mg64KAxA1zVAwnJ4xoBZ2psey67gkEg2XPs5XZn4",
  "key28": "2kAweNEZQzgMLP5csKFdnU2mi8wf93vwjKpUnVt6gikQAAeJ4RSYCkCNF8Fi3VGVp6GpQBFX9xkXLj6JPUtjnium"
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
