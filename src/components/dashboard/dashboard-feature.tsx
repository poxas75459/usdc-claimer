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
    "6ibCxowSTBjAVAPegdLaDFwGeSrmGD6v4ta7mZ3ZjR93Q1ZCWkzLLLuhuVst6tKP2UMXxNNjcjErVt5pKE8U1rF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rCzuTk56pKCL3Rn8Wb26DE7c4DqTtMzhCx5iqX3eFKh7QJVTTK8g82EqxppkqkzxDA2WnXxGa6Zyts9JEBPdUs",
  "key1": "4W1k5svhdEVgDryTuZSjSGfcbaU1bpqw5PVi6PRkjY7qD8vH5UW3UqHDice1zNAHETyCkAeTrnzUT1ncgKv5c3aC",
  "key2": "4tshkZvV9FMMFbT4gKqcK7iScsH8iXNG9UM8B1ncRsQoQSVpMdGMsfQqW2ZT5k8LjuQrdBdypYwKcGTftjiaga7c",
  "key3": "5wqrcTmAZrdmS1xhmWe63YTE1tNgU1ZcjQeK948vhCZGi8oBRZy1HfLMPE2gmwUToyoY55ArivxsGYjnimWzSpqb",
  "key4": "nayehW7FA8VTEzyK4Ke4mx7MiK2ctJaDt2SLu9woGPLp5FUw6U6q6kvFF2VM4M4qhaC8NUGUD8u1budrR8ixUFF",
  "key5": "2fHgNZLQutDyGfToZwkCuyQi6LK2gkru5yNHcKQuKHCDsuMwSVFsBkFjsqfS6XTVfGLynWitt3D6bQMspDTKfRct",
  "key6": "41ULZiB54AQ8g5dMkottm5KcMpLGjhQZX41ebfx2EaCYB4A8wM6uSnPJP2j3sX6RMzwTBBWwKtUC1BxRJXhb8xbP",
  "key7": "62ZErBgCozqPzZMnSpRwC4XqqwbXo1MzUkcbqPPdTwC6YNMfg8854aENNkZZBR5sGuZgkvPxSixCqqCMymjU82hv",
  "key8": "CjCx5tVySxbvCDKQH5kdhPzzycdiQZ3fZNhjSwpgRBBdkau1FKTQ4M4aw1NLNhMMHet4KnC9Hy2EvwjKmkdGhZ3",
  "key9": "3bahJMr3zNMUQ9AFN4phq51wUFRMSj17aPbQFsU4fnePUNCRvvEvydJ1WkSup3HqQ7tNamL9iWzXmdRdSLnFxdBq",
  "key10": "4em7eLntGep1mkUfFFwy7rXXYKFQp8GDJ99faQbhU9SXoFc4snTBE8CRxGeQxtKJtUC5Xe7sNC41uUYJWquadaSX",
  "key11": "56ThJ9HwCLicuMnnaG1QRQUx6ucRHBrRP8dJx76gyDrEyBHGe1rfwFMRo8kHne7Tk1wUzB7MX8aZxqMFz5NkTJeK",
  "key12": "UpmtrXM9zq137eZegGFzajMHsnsaA1NB75PrWTitVu98ygeTM3Umj9Nwv2qzbpDhiZxUHBFZaeqmUhRBkDmJg2z",
  "key13": "3Ae7fX12oENU7AZNnW3SCvqvPPciAZYpLphN1ak6ihjD62S6htEYNECXnxhHZS2aj5tcRQhRrYgXWBPwwbn11LnH",
  "key14": "5u2jLmdwgsrMryzm2TpgkLzEprRivUcLsZfZxy8RdSKEif9UtPKS184J181weKfXenetFEuNrvjeJNyNqM2UBdR",
  "key15": "5p6LR3UjYRiMWoMP4nobuyGpxq6RxvT6hemtDm4dQvsP9a9D4mL3xaqP4A59f4P4kaAk9Wwy9LbAhVT4bkt7JhNp",
  "key16": "WsegCoXy5hHopVwuisUtirsqGeFBSxVLnfzSWvKskM9K5VueRza6DcJurv6sZ48ndwi8nykJgj4cfBY2iL5jv9M",
  "key17": "62Zn2ijihYTHDcnbfSV7Ae4c5EHdkwogMPg21yBhPHVJR2x5hoiHF8yUStbANxLwMaV6x1hL5iNGvAY5CFMffXdJ",
  "key18": "53LW8M5F5BWRmTdJja5CHWuE9b7ZCWd3ooCvwVaBX1ALL9zrJzHMzzr3DfjF5seQn5Dh8hDCqv1Zr4nsZhcwJHnd",
  "key19": "4GpDDdTNAuCFCD51GuR6dqVi2qgYQxFTXmgWoA4udTmq8QCSEBaYDkT2ApzuMFbaf1iuWK4PLfBcGPsK1PZWqH22",
  "key20": "545SBnw9w84RyWFCTRUCmshhtnEFdNSbT3MNmRhTNFAijQpD1oQ4w5S4mDNWJ4a9iv2sLQWf1P7ArgqJ5htQHXMt",
  "key21": "uMstHtr7chE4LaBNBWCrB5K1aB5tw1FrmcQV4B3f1ZUsPQC8AGguxvTAcyfvGPkv2Twyarh81tyUvy22h3Ch5NL",
  "key22": "5j5gtp56pdtcYLVptsuwaCuVdMq498gcd4cMTqbgoW93uhc2Da5AMjv7QiCC5aEbubCoVVtQiWT3ffoV96gohJaB",
  "key23": "1tVNTvx1X4AMWPV7Dupgmp7AMjo5WqUF2YPW8spqfkfcjh3VfLdFr3Tp5zrPHaJr57tuTq9nMaECizMk9azkKeS",
  "key24": "5PCgxMF8gh3FzUkPFf6xKJ4JQJr7EuREY23axQynnZ5pcRKYA5rUFjkH7TXe7DgwUwzpApDctq46mUeg8H71JRgc",
  "key25": "5ZRWZrucbu1sBdriKQzVQVAzeBWmnUhcD46RH6wHBkNSR4yrKcJ5cBEwq8EGPF7JowSkEBFVpzW9uVrbDLNkzZoS",
  "key26": "3ZogLmTbmbzxun5DDfFDFTZjLysvB2PHXYLGNVdmYBcffXZzwNq94MESGk2r93uceA7w8EPFjC2o8jY7GUd2yxyA",
  "key27": "WKgXgpaDZKhKz19NwSm1NNrwtMYHc4wdLS75mkANdLG57wDKxD2T9QLL7utDhCdn2VMw7iXDpCwvfSsTupzybVj",
  "key28": "5RiCdn3QJaJAphN4xauAuYu39kSxSPkbxnxMgBcrRSZBFS6SuRKSYhKtgTq7ZtZgS4pFEQyuC6kZfCq8niZ7T7Ks",
  "key29": "5DjMBcgmRMkU5wDmLkwY8AZ7UJrh7mUEn6pqqo9YFo9VqDHFr5QdTbfoD6ms37ac18Yt1RCNEuAFuPhzvDdVbHtc",
  "key30": "7QhEaqagQnCnbefSfhr59CMA7Dm9NKDZYMsA9iVkz5btJKBejg9T3xHAPg4BsLqq661ts7AkTqDaUWWaEYixXzu",
  "key31": "3EGktUVRUKEXMTheNoWj5o2okQzD1ot9kUN5vg4Y1ZR6FhMnTBC8diUVG3YQDnfJkja8njQ752sHn4Ccvz6DeyNF",
  "key32": "49NY5v1mLasKjx8UjnTgeVWmeXNfxyAtueLsh65yWYt6x8GMjUAwfkbVjHLvNbcanVx88LB7Ae1HAPDtkF9BqVPa",
  "key33": "b8yxfpNsSdTGWZs3iwrruKeErMo1nuCjUE5RFBrwLXVwkYPD5qe9x2DhNX8oCwsNxxyEADH3uLU1CbxqeQE7xtv",
  "key34": "3VENKhScm5retWALuyGBszmmfEoa7wKmxMV5Wi95d7GyzbY9XLMpaeW4BEeFEuFUvv7BJo9nq42SzenYXevae8qG",
  "key35": "5NBKojahHkP1tLxj9ZMgkYyD5RZnZBiU3wbSFsgodJaGHfRWgxgwBb92J4XG4KoQeYob6QQVDzDUYpEvzk86tijQ",
  "key36": "4FVdUPwrAeVc2K4BAYbkiCmavU7BFCpQ2HdT8NPhh5YgaZ3EvYQxuFWN6P97YZzZ6qWDByr9hdqXDUyeqoPT6U1y",
  "key37": "C8tQM9xHpr6Hj7SGis9aE7YXD61cFzjSrbhfjYXFizf5WQSF4Wm8WUkGDNhNmTJiPUUDoYaQ1BCP5ZNzNULGRBH",
  "key38": "9nz3Q6Lcs5s6c9G6kxQP5JL2dZXWC93KEBNTjbc94soyncUBipe2fK25kgyyV7gurBCuZLmJT6bksDDqYHLTsmm",
  "key39": "4jP5JWN5bpNmVNbv8fAQAvs1XSucW81ER2tA45CSnY3j3ALKPUojhN6qmqMiJesQMXnzYTgdj2eQrmdZtyqiVpCH",
  "key40": "3D4fH5D9Jq9sMooVmffd9jeFuhWjnVE5GCUtEhdrFPLr75gNuQcMzQVpk8gcUEGJaiWpuUvgMW5c14Z2jxGwefFj",
  "key41": "5oVZ5QG9kdipgHK9ytoSWqwPpA3kCk6SbkvN2YeJ9YEbkbAhidGRPu3kEKzwUkJ6khESGFH8UrZDeb4yMsAtskKY"
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
