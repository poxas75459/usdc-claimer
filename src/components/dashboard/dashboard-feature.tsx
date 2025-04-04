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
    "3h8wgictnVkbrUpKmQxi2yktU7dKG9mtzCfcg4r9fE8SBQLFcd8RBwwpE3YX521aXZ7YRBXcbJWfQWjvmwmNsghD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JCuTGKzg3oSW5MFGwxvtFEYZLg6SBo4uuw9t2vA5gjiRtyjHYTEsodqyuBXP9PBV3miMgmtqh1BZSkEP2HgEnVg",
  "key1": "4wHgtuBxkQBoWw8XcSfD52GV5i11aaGZZajrcQgG7cnC1F2LeWrMEiJgoVjGSmk1ikvV4h2R48S8fLr6qBSHpto5",
  "key2": "2sbSE81gATJs2rSJGmgiv5NqACKLNaZzowsXe5wcu4xgRPtKD7hQv7nZTwrtrYFyKeGR3aTqtbeammUhwSfxqz9a",
  "key3": "3RnL6fxnwMmwWvM3Zt6FCP3ffWKgkbVNaBfi3o7C6SPUzYQ7KXbwCxigWb6gDGCc9qRWGudgPVrrWDEyg78Rys1P",
  "key4": "vWyVLkVaxXZXT5PzjeMDiyDVXJQudCzXKgE78KTnhXLf6vFcMvUosVqzDFqtTCb34o9YrBMwy8jJickD3SADd1B",
  "key5": "3oowo5AdUcThqBea7298hQhNdBpj9o3oh4Q1uYqWrZDemoUUGscGL1ZpZ3EqQxaDpi6FsoD4mybH3no4Uv5TDVGK",
  "key6": "4nyqZKUpFioNiYtBPbHsQPsuAxjDTEJE6QC7dRy6XsahBB5cbSZtvJYNZSZZTmeVv9fptQewzcnhjeoQBeERH1Cx",
  "key7": "2apkrLaJKzKxpbcMtC6dKgXX464NA1zKyRGScjfNSWqfzfJNvjEPmyP24K9xoiJf85DeBm3Pp2QQSPsLs79vvi86",
  "key8": "25635VWdDEG85L3HjLEE2VB1X5KeZuZ5nS6W8knG3zqpi9Z1eZDuaPd6r2BiyzrzWwAYUyh1QQhTeTBXApibDCDj",
  "key9": "2wfRg5UETQxg7LQgAQ8eSviVRTibukdTTW1QbGt2a3W44f1efJHpvyMnnzpK97KU5yUwAY6iTvGyHRwmWYfZwLfy",
  "key10": "35cACqtsEUpvb23yGseBtEh1JTBqu1KkGGtmZvq3sg3vS85PQRPz8SAXXZuDZww7c3ceD29eTDKeedkXMfqV6ciK",
  "key11": "5W6j7aEzvGVxk5SKtYmTbXzgivEw3Tx7AgNhJ1vhz9Aj1GLoGrGHenZamYgfbrrPicou5hMpp9ep9KXMe6kBAEsH",
  "key12": "5SsY1jJhaxntXVqgEbwiHK36796ApgnPiQNNS1TF2xEpcxrhJs89ewBEJtRexEbGwgpKNZacVqEwsUmESE2HyBaM",
  "key13": "3rKYYeikewzmTmHJdaC7wTd8r2i2Z25SVvssWwxvGWUqXkjWPvAEFRZwYkGHF9WBipkihw9iWmDn5ttBeDZcSgbJ",
  "key14": "3nyoRrDUHkyjN1gus5TkNWpao7iDL8z8FD9SeDiewSDQ23LhNhmKzQRvYUdNVHfhBmiZEkrRtVbqEfwhDkMWcWaF",
  "key15": "uttAr9yBB4RJcv9SkG6JVVXPLQ5TYTW511dkufP5NQDP8uBE2myZVZtCUj55kjNNSgJCjiv6jy4f6H6oa5cyURG",
  "key16": "5sncHALuHDSLxXDy9HU645QpYYC9tcFHAM4HaPKKLv8nocPFfkheGQSZfdTQbJVT82QtANvpUjc8FxGH3jC2jAfi",
  "key17": "3YiFWjJbcUqT2UJvb7j7CMPynn2vTR5JLiYDSxpG6rebVeQYSmQ2btWpoZNubY15aYhoFSCks5s9b9KgNGcNn5zZ",
  "key18": "4xf1FjCjTMmQwP8geWPWFqDgZUCAhThEN8FswAAGvyFYFxQ3jSX1oM7yH9iAdZrSGQZRtMCCW8foPDmiPUMkF6hL",
  "key19": "24Lwxv9Tb6krYjLw82vNSgyMg7wwwJgzYMWYN3YkRPUyyHbiKew1b2QJvhVV66S2yhDR4dZXstx2LNHoBtfzd4UV",
  "key20": "QaWnGcKPsMyPWzej8HwChvG1yLUL1PGqjcxrm8C5NK8ApAmxixxfN2iQBfZGihx32NLuZqv1zQ4mKuiYafeZ1a5",
  "key21": "3CWvUfEar9gduMDdDpoxNoS72a63i9if43vjeLFkKFVJdZBobhwCb8YgSABninjjPdiH5sA1Yc5ZwSfxyFErUmxe",
  "key22": "5jMW2CK2L9q93gh6RjYU5rMwiXnnHHRx8ucktE8hgzcbqWwQCyF9ebwUA3qXkkZzwfjJj2Aw9qWkM9nZMK2zJRCq",
  "key23": "65Pmp1bTfTJCgjun2GTXvRQ4CNxZukDzLF5ECSkh3GHCS4Y2MaLBKXx8fgRP6SnUFfGMQd4D6sF5qNxnjYqFh8FD",
  "key24": "4p1YBVJ1wXpxtjFoH4fbnwxjU3Gf2JgAUCV21Jr2JaYPUqyJLgYNyeQYon3YR5m8gGadxT7w6FYPAKDL7cvXBgYM",
  "key25": "pUAdWYLGcrfE6mkjs6EjiF9NznKYv9J56yVb51ApqW91aLD5x1d5pMZTXh2uwj8cbXVB2dcX1498d9iFSuFx3nS",
  "key26": "5D4VtjF9aYtUDitGw7XMYWqBt684B6W8mxmpMn895VQfD1yZJzYMn2ceY9kXG2iv322VpfKzpNgck4uLavMvbZS1",
  "key27": "2W3ALPer6eVnoemrTkF6hQKDfW4jCQxKToFD1AMZKMmSrMuSfdEcFQmM1hVW1b6VAVX2pqcPmktkPZon3oY7w4M7"
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
