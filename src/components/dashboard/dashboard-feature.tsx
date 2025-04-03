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
    "2eQncDeauJbYsJL57BTZDBSgCzvckuV9on7ZATnZc6xKamsJpTvemkM7LvBBpZGcCihaaTMHD1Q5bRLasw5tZyed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "228Hmxot1seRTMzS3Mj8rAhRtHoyKsBERnCokYsHaNqcqQ65C3y2VrD1M3SJDFXmzjsrgu9yVGCCa1f4jUUUwxGa",
  "key1": "4hhWhnp8B3ffZEbyca3y3d7TMpisGVST2Adk8pELkYC9JUhVNu5VvpXDH47MMkLR3ohavLAGCGkCLbDTxry5rjfP",
  "key2": "5idcwbS2Q2u77AT6tQFdizt8u5Afz4KWtMQ8ME432rVSDjaZwuixBRfsoLXGSxf1kXmHrhvTnWnewscEVwRh3v34",
  "key3": "2K5e1fGSpqLQDtn3yNXW9P44CeQ2b2giDUsf1j3RZ3BkGUssWGHPLGJB5eZNfAscBCpT8XrAP3nZT74rEEb9eEJP",
  "key4": "59rCNgASZSqrZxfWdAWfR2CURc85QFs3u3N64A7PmYtV5EdTaeH8EJZ6hrWXApWSzGcejCk3WuQ9RsMnCbTe4XQ3",
  "key5": "4xNaN874D1ddW7ZtyGH6gN7Fp2JWLYPJ254rjKRry1fivsG4GNTx54Ur2KxWoqUxzMXqBfm8pzgZVyjzzwmHEX4L",
  "key6": "3qsd1mK4iQHPM1fFC6R2ahpCh6hN9fD4MbKFGV927ZnJpSdnaM8Z526zjAERAN9rnomWZGmEiRDdzF5H39a1x26h",
  "key7": "35RBL6yNrTM9DkanDkkxFVDreic2t81Xj6kV2CnhhSh5NgUrgHY7vUZv9uVu1KbT4mMbgg1LaGtSxLTLFNKGDahS",
  "key8": "4mFoof5eriJwFwfwVXMNivA8aWRQhfqYaguAC4bvfSz9A5A9LmLKGnEzsmU1nCTF7gi95nvAb2qSzJLoptEhGXeB",
  "key9": "2WDRNhZT9fzaHXswM1pHpDh9XuThUgTXUCEpaPMVt7dyMnVQztpbyUUGwuenNULkgt33GKSBuUo43CEW6UtfLZ6q",
  "key10": "52GhEYQd2Erth8pVyPgfyajRGzSvCFf3FPJNbG71NgLrZLBoE5KCuqZc6B6a3fYGw2C8SX4YCBsN7Zrt33PS5DF4",
  "key11": "wa4yENAQ1jhze6dRQUVSEofHaKD4wP6KD8upkjMk2QkVJPTVrbkQxhxSwrrwWSjNS3emsfxTLbn8gtocQbDdTMZ",
  "key12": "2TqN95HiTsacmnNGifuGBVgjNadf7PRXnczk2q755vC63zN2Ja1iPtwSfR92jQKGhWVAd3UxZpczQcPKJmV7DMWL",
  "key13": "4VVHxqUH11P5AH76eTmoMP452zowitTNV1VN6FWsdoUpHjACerBXY6rstyjscx5ihyge6MoVRrrFfrXZu5okB9js",
  "key14": "2AggKZ91RWHaggeftkwheAMy1Xyv7syGQFnHgig66iVMFtDNiKbTbctfp9an9sxwVJKAhQE7DfDjaWKK5CMVGn8j",
  "key15": "3rbQZceb36xs5XtX9S48Lm8ramDPMpzQGUwvwkqZzYNWAt8khoysvPh1rK75njLrBsXs3D2sC9L6kwYPs5xs8VbK",
  "key16": "42KJjyEUPzzMUTg1PAhWMxXBpbJfG1pdMiAUuGwN9CMi8MJW4kbYbEqFuJR9LJ7u8NjWZ7DwqVKYngcMgFtXDeus",
  "key17": "34tg8XKDPbHcJoMmj9NmbNzQWwwiSFjZGpaoCbktJqUr8wkZxBCz6cm1F7FGfBrfQhtfJLUc7ZYzH6by9v4tyPm9",
  "key18": "B5FxWWa1oZVjX85iFWpjiw6UDYdYHSHrjf1RhsdZRA4THyfjBi5RXciXZ6RhC72vYb4VdG85uYm9ViQTZPxeugh",
  "key19": "4yppiSoQYSFkQrKgA6a4aE9RYCx5CwfFU7c4Bv5haBQHkb6cBnL1P1JtCjxRBgWotmoHzcpKa5yxubWNXaj6oJCa",
  "key20": "NadQk5VvTfopPJar74YkM6HrPfwDof4ReKctsUxhGjyBFG2Rwi93jQizeMASJS3YpS1LDWiiFu1dNKk9397WVSu",
  "key21": "33S1mr2JUZbAtt57vhK8wa3PcFBR3DqRyq8ZbNVLcTjjhfXHNiS5a5payCLfGqpGh2kxUFsi2qeUUhKVPs44RCFV",
  "key22": "3TvEvgf7ZC5zC1ymB3kfH4akMZXCrYdPFEGumZ4PpCWGqvTfHBiQvZHWWddmYjZJ4ShnJrtr2NxY2EgPGjU5BY7z",
  "key23": "f7djyzxiAo6Xn8EpfAERnLnFckz8F7zKZiAYwvoYx4QzrCgUAVsTd8JeDsvN67QepGy4GnntbjjWQ9gmEZy3UeL",
  "key24": "5qRLGjeTGVkHE55MkLF6UBZL9h9hMtdhfEHrn1tPardiUFK91qSHo8KyQC2juvmSZwRRq32A9G8kf5qhC5JHXRe4",
  "key25": "CBMUfYg9nRCcUdDewpDUmqrXHEcVeF4J2wQJ88T72gQRKWZvj3eq3Q5ndosBUkXYrFoJTdpEmCgginMi3oHJ1fB",
  "key26": "a3X9fG6Y3HZ2J4diGeLSN6B1ZrzHEPhDPaKQrte9Fc91ypvAJcG2k65yJKmVoFQzCZeDZ9qnFfguupZy3xG7DxL",
  "key27": "26PyLdsYNvKEPK6nhAGxYMbTXMSnVa7YL4TdNFuzgT4FJtTFLcSwRNF5niJSzcdzfAq8pkH2RGiKkzeYDy5U5dz8",
  "key28": "2csPiV7RRytwtX1oFbJUk3PenU5JvUNevSwLZSTUHuoyaXLa4XVEKcY2qmhZ8u99hoWoYJt9Aipzixkr84rdYZn4",
  "key29": "3MXHfz3CbW12doygF91puh6rLcddE5j8vipUxmeuE2C4UiUCZrAX2eQT7BatQwRwa7e77Bivar2SrzqNb8m8CVNR",
  "key30": "66x4Vcyxn6SPFLMQRHNc2ieho6xXgx1Sb342m1HCHnT3XishLWRK3339xHLgyZAx5DDuob3vYnpPAChBGaWykHb7",
  "key31": "4RFfoka1XzTNutRi4VeWo6qicNYSziw76ojAxnwcKFxVoZ67yqSMVGQF5VHQc8fDyQ6AKWYtjVjhJZ3hSqQWP3Rt",
  "key32": "3SjuQueAKW6ozT75KHC7P2HHypcy51aRvrrMH5wLgmFQMt2Sy23eQp2m7FRnmfmAdJD6SFWNEmjyfSSr4EB4ZTE9",
  "key33": "485mERjtpwx518AtPmBWkCpX9MSSD1UryWsNfomDF1VqPvcaZDqHpirL8kXcm6BCKMxidCbKCdhMKD7iX2ozHQjk",
  "key34": "3S3UqPqzLbh2BjwWvtDxkLbiaUEh3BQWXf5sVDrNvViNMkETM6jQR7mQzYadyXX3Bd3y5QiaLymEiY84deWPqbG6",
  "key35": "5ydMX4pYS8zN4FyZ4uMGyt7fNDDGC92tR4bJJzRLwAMgesNDU5n6eUThy4EHpFcB2o8FgptqaTwRmtxZ4U4Qq617",
  "key36": "45YAU8gGvvjBVaHU6BrGHqxbqJ5CyfsGRt9t5D4rVPhSkNJWpcx14HHhZCbPbaqRcjUifBb26uuKaS7LubdPdg4y",
  "key37": "j2q23cnAhdU4odgi1FMsVLunx1CBxabyzm8BuJhrDJoYUZebASg68o9eUqrS7NjVi7XLyLhnSmi3vfQZe6Xn2uo",
  "key38": "mgtB5mT9NMrALQ5TpiGkYkmi2XCrDVVDAZCnrxUmBondkzCjGXbEaE6PK6WzWB7mhJT2GS3bjjqXYp18vgbKj1t",
  "key39": "2cjFjBfsWE1RFi7DHe98NxKy7Mi1FpsHWfQgdzP7Fr9AvTqF5k94YxXo3YByEkhbdYbY3bvzxJETiA5pSTjJg4Aj",
  "key40": "2MmBcQb4MxqPHuV5c6GngUdCMjaZHvavUFwYCZR5WeyPC6ZdduQJWpso1d7A65PJ7m5qWb1LrJjAq1QRE5T7TWyE",
  "key41": "5YkgFkQ2xHMRee8NkJoXDNu33ZJYNZ8XtMExu6QvdBtsYiioP1jLj3sfumXaYSPAdyFgPufd567xdHCq35DJ1jZu",
  "key42": "3cY1V3oG61kW15MUqAoPhS9Gh5eQB4WuesTExDtSpLSnfDkXtezTCaBchqTyE2U7p5ghy2Q9MqB6tRa5saH3HH22",
  "key43": "553EQHCJJsb6ZCi3TNJ5mPhqywXugiMi4Zf9MdfvQbThdCJodMoEqGKLihXLzg4fTCzn4crWrCkHGU6axetHj7Fo",
  "key44": "FSC1rVruZ36Mpz9Rf1GNWesZpv2iCibJfMDn7bLYQKTHG9ZynhWprXRFnpEYWVBDzPeVqj7ZfN5N3XgX5ds7mS8",
  "key45": "5EgFaT8tAb8qyC3SdwDySgNZyx1pvx3k9v5RLHjnzYPCSeVYae7EmtPYEdpf6eoaNPuyiKrJqykEeg5qLcpU86Ea",
  "key46": "4FDDSkq4tXt2jvhkuADdoq1DpfM2QkdX1eYNkKjadyCogmezdT1WZbrsPiJJMMpHdTrWTGL3MvPxXif1vG5skvXx",
  "key47": "3SuhVVZoY717PEKqRKLCF9BNDkwRPhAXS58GVz2poJQBXYdJb7iNyT2g6fxq8M6JGhewXqXae9wE5MCFZDKbbNGz",
  "key48": "679gXk12Mu3bQTA2MJJarkNxrihhBeLreG2tg2rWwsVEKKcA6UaCCMvmW6KL34urgP4A7myzkKHMmHELsuioRPbg",
  "key49": "41BfDXvvDxR7fyWTPWkkdEWXZyXMmpSr31JmcjZCZbfwFVqxPgf1oa6hByMGAqn2iaDR6auUjfZKrYCznV7Tv5ji"
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
