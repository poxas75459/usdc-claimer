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
    "z5YzNuXDSAXiqcwoxcAgMx7jwJDHWtDKAEfn8jmue25nTaZBro4XnnE8TMdfrzyfjE783yegFWnRMPV6VLMmHmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eGmGK7RnR5QThj5zEUgMVkGVFJCtfTLtFMxovkCBhsYVLeJNE1aHuUyt3XFkcd8nQFBh4MAHB6jvD8FxxUGcSKB",
  "key1": "62EMUfFGmiGKFajDPweZuzmyWxCRJNTR2Sfq8MEzjgMqkJ82zF2TFXr7cKCGndSVahVnY9vYKXsi86kCsnAnJr8B",
  "key2": "2WRzmco7CEBx5k7JcfWgsqsjeaSoAeitxfzHARQJckZTqsZmWEjRywB3sVmfJq5yLovg1DzJK9B2Jz6cpALkkZ6v",
  "key3": "4HbsCNuqxDhEUUTf6erZ6uJ7BsfXQjJqTCUwvL48yPPjAYWSLvHaLvhMew6srCaZAAqJwqkgqoDKxSWCse1fBQx7",
  "key4": "5peco5PqgLYGJ4hdxw1ZfwArTTnS6CpHN2x7BwmmugP646UKmzZsQVBNF8DZiEVpLk22694Zno5JrRZJy4VDsA8a",
  "key5": "34dM2UtD2mnp981d5HiWPJ8Cpy1DhvaFkAwMiP36Fy45mcrH54au2qWrF1XYTxqTLpwZXWmJD918fdQSKoKAXraM",
  "key6": "4gymCjdb8i25fbkxNrXCGi2mTxRPTM5RM186bpBgAXauxYrbxeuDmzrKm51F5GC3sTMQWRayfxHTxgLPD4HT5SRn",
  "key7": "59fAqgfQ6CfZBfLmorxex5AapcxMMc7Z499zZ9KXEh3zVS6LjyHYMKZdDPecZxabm5ViPGLTbPDwjPih9MUCpBsk",
  "key8": "2UYpkvR6y7LPnjfDwUdJhkJYKxA6AVzLbzsTjdenEXPkiMpBRsryPZk8S9s3qpvfxMo2RtWDnpV5zGp5uTewn41m",
  "key9": "2qJZGHxFYNEbTKZtfYYnpa2oPzBGCf8vmGBZ1KrrK2iU3ykv5o6Wdj8L3i5m8R9WHEjdiDkf6vM6yDLJ81d3LjZb",
  "key10": "3szz44SWXfFUrpHdVeQD8ZoUiwkYzgabx7kE86jJ6ob7ZVUvLinqUooj1KfXSUuQwjk3XcZ33hJjBxUDDcepdCMd",
  "key11": "5TUsFr6ukW5hYbWegHsVxByN1h3jDoQ15uvPswq13rJ4kPkB5TTUHhL7WqQJMCp5CVuXP5xxHHthE1V4dXLAKpFS",
  "key12": "5ExMxKNHSQuWpZhqCRmouwapPqt1Rmw4for7Sw291QGSTQtBFdkQiLu3Nq7RyaX3Yojfy6zGCr5s3UFuMUikvQth",
  "key13": "qpzDHJiNFbAsCBjQPc9dME2isqJxez8v1use2ZdY9WYxUoXMYbmdtqgkGFBWskebrMbfP1r4fpe2msvHXULmxvv",
  "key14": "fCxo6UBUZVdaPgSGJNZhRYeC2t8g2bYRMcvKjLriR5HkEWDoUYXS1GoTNGQ8V9veF8JpMLkCYSdEQmF7zTMV8x1",
  "key15": "2MFo283h1yXnEhtLrrQnyJyNzr1TbUnX7KsUFdhvARpUgG7JctBdCnhfweTcojtjhdvQS5V62aimfAPqbo7MJrXQ",
  "key16": "52Lamo6HHyUTKv6frpvQBCxC3ospBjHUS3uv8X3bGoGJwYaDiPhahUiVa7e5gEviL6H7Whg9niCXWedZBV5CgtCJ",
  "key17": "5jgCUimQELxXJqPR2CpSbdrh9x5wutTakRsget2iXMbT8UyRiKwxijFtTrGJSFcjZRTHVsnnyRkXPcucYkgdVYFg",
  "key18": "2y2LLFqp2k8A3YCbe1HGhcqyLVaTEC8LPxDJe3UjNSfcbikwNrfwWYtuAbSTvC9JdKwKNqAXfZFoDP6xNswWfQP5",
  "key19": "2k9gFSjxLLxc7wS5nrGtziTWJPYiMZSwUZ6GqmEx7jNKAgSUGByLqjxtNk4dYUHStZkx2L9eketTJRqdWNEQWu6b",
  "key20": "2kwxVKLtnMuHfKxM8Pd8FH1qN8mQYEMnSJuKUknomKL8bohZtWuYPMuS4KBymwLMhBnDMxAWTiifwS6x7jLeuwxR",
  "key21": "2GyF2EH1ojZV3U878PfNTnfvVfbKeBfuxQyXPpDEAJ6tcuwMgc8cyuU2y98JJMp9TPszjZvqzykBbk1n3uwNWzh7",
  "key22": "4qEk8qkXVraG9nNWc8L8Xz7g8NGRLHTVDbbztMynp99j77pu1D7kQXqsjDxam6mua4XAGR3sGnqNZJU6z7imGK7i",
  "key23": "2CX7E3UenxpNWwsg5QJ48sefiyabKempeMxfajQq1NNLesufUjLdvUdH4eizadDMFFCnBzbfPQzb2oV7RPijscoZ",
  "key24": "2hUNYj26Qei8RaGLHx1MckTMwK692aSFqmqvuEZtvch5rdeTRSQwjBQV9BRcLvaZG4W4SSJVafD343ScSdXvFwYN",
  "key25": "PeQ7eD1ahQvFWGdn3MPsdZFEprkByjhYNcVK3UTbWhCBtEYSuVGhUpCstNfqVuTwSc7Hvv26TxbAcqzDwgRKUqd"
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
