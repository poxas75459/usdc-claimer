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
    "5w5mpHxDZD3ECmdNAfdRzWf7eJfaNejEqqmYrRAX74C8z6emrND8khhPTWRLZDC91UBDVvevcrHrazD3WjREqnxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mz8GbtqfNVMjDU4Srv9LSgb7HEuWXGjwoBSzDvpxS7m5rMKcrAvWrqkSosM5oHoyo7oLH9tsbCPjhNajaF8Fkej",
  "key1": "2LheDzDjT12phArGwNkSjvRGNTP26FCAPuRn6ixDAKPcxtJ6xtmbAhyoFvZpw4BQ556cEZr4dgJGDkMEuhVEZz7",
  "key2": "rzNPxAQ88GLhpxJ848snpFZszMygoTruzkWpLaFCtNE5KtnN2q7ibPf7iVVvxEdchidv3kaVVgCSCxKEUJQLHZu",
  "key3": "3VrZ7V4m511v5ffjPHDmj2b3rgr8mTcmrVuBgBXtqZvvkProkZ2M93kqQJuRMWjbuYTWZRFYEp72p2quGNbSTyox",
  "key4": "3GJt5vgz9Tgm3Rkcz631jidbo7Hh9ULCFj23DsSVsWXQGB5mKDgvfL24Lv34MqD4b9yXEJChyrxV7WjsYyjKskqL",
  "key5": "2PP1mEHj6vs4iStKTDFoSMdYmHueJRb1yv4PCU8awCX2MThqDmaByHwhNiYyeyk9iTX8bAjMLaupCPRQt5qsjhkd",
  "key6": "3KFrUCfaRaeipgRNJgajiSXMXJwf8v31HGRas6uX9nHad1nYw8pdpobjFGRzDJhV16pmdQCUxuLjF2QFh1Q3Hwqb",
  "key7": "2bvkknbDFZhLfd5oP2wdws6xEJ2i6LoDzjQVh22REgwgKYLoq1DU4WWK8bcxUJZ1De2AoeRezvvWiwmtUF7urtfj",
  "key8": "4u1yqKFPrjpkKKsJjPyRhhznRt9c5StpqtZfrQit1yvUe3RhLQB6ny6dRFUsBH2JgKMBmMQohygFagtGpWTmC8xZ",
  "key9": "3m7Kjo4KkrNGmB3Motvfb5njkKWDqzwwRNRMk7RM58AJHDjSPJyYE2tcnunSY7gopht6KuhjrRAuNrm1befhuVhK",
  "key10": "5zAFG5woQhYn6vzaMXp3zjYeoWG4m1g4Et3jsMWzfAUmmBRreerMMcqTZHmqorMQvUebAjSqohPdVeH6iArfkwrE",
  "key11": "365GwCyFNEsTsmrsYmKrhH347ifJRgKW8kYvphS5nn8FfNvXdtg8Kb4HjqBQB2gT1fxtySYD982EQVDGBUM3F1u3",
  "key12": "3crvCqWJsyHxRuG19UC1KwbsBptaaxkWzkivHM9LHz6eNUrZ8sfirXGA2pgCd5kA9VZCVabm5FeDX4qGviCAy8pG",
  "key13": "5uQ3f1expNq421HdoJxryn8unbJwkiS5r9gmdKVqjiVVY2g5BqAX6SCGzBEUQLmRT1vLLrSCRdNpHKMzdrY2P2v7",
  "key14": "2ausMKfgNfvGSPTD8MMiq9nNuA3rX7vFwo2mwoiw5CaZaETPiUv1HDmAbTpNg4L8tDGjWdzjw6vrjAmj93Y2FYVY",
  "key15": "5vDsC5FuTUwUfDiqs5UWJToav13182sCzZRJ9WVxi5rPQN3zchsjuNNhhS43PytF4V6APaJoLfUs8su3ceFVHQnm",
  "key16": "45XS2aNznW4k6xdedJSNVFsp5fEyBeGrvvP2DBheVM8KUFz6qvrVTmh8tYEScBMZnszdxShyKXU6nvU6fbZHFuW3",
  "key17": "5AJe998LiHKziF4woBrAG8oHV9oE9PdXkEG9JLPp4C9xPCvK96mH2YyRGZ8FXhqxKoYRnkWN26S3spq7GFw1q3oX",
  "key18": "3JPrYUtAKzjc1Kjrb3vFsRLSxtM8jJYhvvpsazQ7yR1jF5bcnq29qfeZMTY3u9PVhgywRaKu8MTkiJNDVbRMU3qR",
  "key19": "3cFKYPfANt3ADtgnMHajcFXeqo2WFDR4gwyxUcto11qjndV86Nm3Xxox8JjZRJ2uFGM2Wqi9Afif5DZ37SUksS3r",
  "key20": "2XQii7x9T8ikydHMoDX5ti9vZLpLFiV5dRZ9n7YpYTKwRnXKRULRw5aiV3MCWDCMDMwqATdUYjbnm8xujHHjSeb",
  "key21": "5ogepL6sugeuiWQwM3opSDCw8ZQcVfKNEbq2DvkiCLjw39x1c1BcGxZ2o16wCGZK5xz2Rh6agoDSazDPuVJDa2QE",
  "key22": "2CbzghwPb6YWE9XLs7wZAU9oUEMNKSTWfZHPkSeEnSFrDfTb6NEsmZWhYPcecjXWaT32QNr27jNHdAnR4d1T9d6D",
  "key23": "BEAbo8giyGYGKKPTTSKsB6kavzgrGWZEwEnPfWpwghUQhEpKmS7J3ng6uC2cKM6np3giDAYzamojqNjWbya8yVW",
  "key24": "3vXZJBU8wUpA74g47fc1Aibcy32tEC5PUKHjT9MAD7wEZkt68rG8L7mCRkzR7Uw8KFeFYhLNj1TbHPtLNZHB4tiR",
  "key25": "659QEh4ptjecw52hyh4fsbCGf2xF5GsGLMPyES4wLJAXN4mgyA2iXBDbq6fTSwkdjYcWvZQFAbah3W42UBfCS6L5"
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
