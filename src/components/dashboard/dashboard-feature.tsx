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
    "2tDMftBQmPx6fdzisvQEazGzcyLgwSnU1pa7Vvqsu47aUeMNRxr8VheTetRbu1EXdMQg1HVNiZYH9eP9wyX8P3oq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dJT5ykBgvzWt8TqLA8Hgt1uEZsuNwXvWYj8sSFx8e7JaUoDrsZ5Pj2ejXLFQnm4RaX1ngPu22Mu8dQhwdYNfddb",
  "key1": "3a3Sq6FKKrRkMJkm3ozxdoGWG5qyX3vUzs3tqFojZYLaY5Uhd7gN5g3uHzGTMXa2AfVtCVJA17zgDrHf2BsUC6Kt",
  "key2": "3aZNYkMsxfm9tTqCTR3xitZbZFRJ58mU9SYQ78Rf2qVoqeraXEMcZiaJ9bN4bNHgN5uiHK1qcb9x6TBE6qKitYWL",
  "key3": "2Yc4cLnwjb9q36eQbAvfro8AunRMAGpduM3XmacoALLGKtoE2vTedg1k6tpWmPTYim2erT8zWXehAiaXPu9mTYdr",
  "key4": "vpGFgAmLrqvHs6yRFEDe7mY6BY7MW97PaogyMXd7t4CaDdCMBZUxXNybj8UYycRr8ZqkKePV57tEgtaDtLGXetZ",
  "key5": "4b3JVVEo8oJtDJ4ZUDrsxeWDojpZXHFSba2FpsiiUHcSG8w6rq6KwDoY9kYqjxdbMiewhZ3yVWEwMQtW5JBJE8a4",
  "key6": "5LDU3iGEiTVKqx2pxcanmgaGi2Bt4YPHBvpRGkZ1XwLbqAKeYLKLg5EgLg4gMCNPtw6SoWfUisTfMprs84Cqs5mw",
  "key7": "2emEXtMuccfAP4tjcNAaGKPewt1MaBKdMXWcN2cLgKJBLHbSSMgitxDtct7cSQjY25b2hDtBjf2Qg39g8KWFabFA",
  "key8": "sN66ZjxLUyysY93x1Whi4rtEbMHF6eJZPejgzohFZKNJ9GeRn6CRkQ2GDcXzXpERr7VY1KmBSnbpvRUTvhLCgFg",
  "key9": "8bWAa3nVdEzypH6za3WVmCHg5DHSjMd7DCkPXKJHVK4ttbmctQFNXjxCWyeZXdvj9KkMkZfaetv9n7S51vjgG4K",
  "key10": "3q1e2iWitVyYe2ZgfXzm9YkCgm3XAuqF7bL9jKqHmvgYad9AB8uCi6rnpDRWrQfbkGMkad4wQSKqARZFci8zzZ2d",
  "key11": "38XHEZF82XXFvse9mGgpEr5Ub8cqDLpNdzDxnUsQWi8dik1VobcKqy9VGgGbb7aZiZcf6mGmfXb3P4BLgbXwpoeX",
  "key12": "5QeLEeXE36JyecwwTH6zMj1NLpnHFytWSef3wgFexD5HZn81cQE42qScVq7wLbTCwuPa3x4HZA81Dqb3yJqfGWN1",
  "key13": "5CvzwiasdeJHTFKP3NY4kzd3QrZAhk73tURdjsc6rwq4PeHFYDBiREaTTFvZ5DYFVWikqKywKaq5QZzW9PrbN9qD",
  "key14": "3YBP75BDbrzy4NrLcVqmiAGirPVhq4Gnh1D4wTRHXpAVhJ9twCeJwLMtmNbt38n7Ttwf5vQwWf6M2QtLt6EpX74o",
  "key15": "4EMp7TBrfdjfCfzHVWYgF5PSYL9Kr1VH9V43M9eUdB3BcaAb59mZ31PnEzcQESVd86UoWRThZKPirx3ZTVD2AN5g",
  "key16": "5veVf2ZetkFNpsJd3jWXsgZ244meKSidqCHvQ5bcWbabP9Bczvs6Extxpg2i3gUn9YSxZza8MQhx5TzAu2N6f8v1",
  "key17": "5YpXCJeWLD9ePEgW3ywQAfcuhJgVK2aLT7mNQzu5QRLdKnBAnWYqaArHnfUy3bfRAzn1FzPFjuSqJceCH35DHdak",
  "key18": "X3x7rfxcHnfhnQ242FHob9GDv7zQjUDKhApeprAYpEx1iGSZy7t24jJF5TostNnczbGbwaELz2Hz4xx7fCUtBra",
  "key19": "4VV9RYtQ3w2c8bUuggfD7EGMasSDtdg7FMfL5JminXe5uzQsZuamMmJV8VfWcZrADSr6NepXSg3Sfo18ubsRSqyf",
  "key20": "4DqTNTty9LtLx5yqbEHW7JUCigg8iX6CXSyWJ1LyLivHurVdSv1vos1oFopd1nYudThDvziEMfBwSE74Msq5GdJ1",
  "key21": "nGhTE9sgvxiAUEj5esLk1k4dRc9oGEbbKn3XjXRRLEDAfqA7Reu1zBa1x57ZzZAnkeUGwyE2BKBc3fm7Xc2PTda",
  "key22": "dJpiBuG7rSBr4U9m1iXaWACMNFzcvrRsxzmC8U2MT7cTxdoZfCQCEgzi71ST9ye6iTytt6enk4b216EchETDeys",
  "key23": "5dFmuJeH5kLmPQwV2NKVdu63wkX5BN4gi3d3dnTodYY7Pi7RdHV1Vpb5JxEUQu6fXFzdEd6Pv41WJUbqLuyt3uMm",
  "key24": "B98NnjTV6yEobze3UJ5gDoanXLVgpkr4bMoJrQjYn5wr3Tj8u7VZ33zCMDRPFHtG4JMaxWwtg6bGqXEFCF3n596",
  "key25": "4CH6zEtWFDpKZtyzFdvZzx75hNVbQU5kidNBUkEvkQP5dvM7aQLMJ4aC5ra8vB7r53A26qisDVV9xiYN2RH8dTjJ",
  "key26": "uVscAGxPQKuB4Gyb3ok8y9C3yhjxPdemjCbMk4nc8GoeGLYPtUQXJSLxccosYBEYXbojfYRvbsmegtdJDNbAeaq",
  "key27": "4v6rwnXRQmZFaLrswacLZiyvb6wrYEd6T4UEkByBjDiu1XzW32VBVNQhAPu62MXtGXzLfr74g8iYjNGK3tanfzVk",
  "key28": "3U2re4NGucnHqrayq2Zy4iCun2nCvhbX9H9B77PJkHEDqTCGgK8UYTmT4wjvn85dyfC1UYiBEPtisHM9ADx94j8o"
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
