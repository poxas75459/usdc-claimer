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
    "3fqC8yguoVwLyqvGuv61bvGRnukGUgQs1CG4QjsuSLj2SNERVkdavKgFVdL4jQncnPef723or8R3j1REsXzHAExU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y76vEKGdSVCYAv23bfcx7Wu4sLKX2ECQk8ghghvNeVQTEBw1BLpHW7AHYTzxqjxwGCqoj2BMbAunZTXSp8VrDug",
  "key1": "4wk5d43tikSmkcWAxHPH1ZSe9g9tizdz4UxcA1vPe3sVfWcHMMVy1Vx6YgSiYWc3uDAGPDodwEpJoYTwwLwgTsxm",
  "key2": "2Js2zA9EDRBJqNWs14p347hj3XmzCH4sUR1D6k1gbPvpAmRWQf7UQpN4p6xR5AP8oXqHo3bi8m8c8wowh56PHAZb",
  "key3": "TDTDY96rcSQJiQv3iw1bZHBTFxqoobpX39a7BDMr2A8GNvQRo2Tj88zPfBZDKKM2LpErTKCia2f5XsxEwtST4sV",
  "key4": "63iBTpByfXdDcFNEP2XBh3mW6VxLKdJg4rxJu1n82VxgWF6JEX3mATakhw1T8hkb9ahEuJsYAjJA62hcZkWm8JKU",
  "key5": "2UjSsdSK2pU4RuN8GQTJu7nscQ2qaFWoyKD6LDfbKPQBSZ2DbwGPHStUDp7ixzEx8DZMMZGxBtsUC6jTDisnJ3r5",
  "key6": "3jkztEZLLCe1YTbUUD7FpocaC7HXBErur1pDrj6DRxGrfHMtuMpG1YQxnziMHQ62nAqMvB7FNiYoSbGzQPGpEF4W",
  "key7": "3em3zfqkRRh38M9omizwHvgYFRg9KTo892Cc89vUSrQmEdvMMKyq8ikG2p3CLu5wcvyhvzDgkk95UY9gLUoaKJVA",
  "key8": "4rhBG14NiAJpNqJu4BEjhAKUJoDak29ofjZ5gGCt9p9wTWraC7XG6dooKuK3cS6fKfwrwAbyPvVU97MXnvu38KXs",
  "key9": "2HK9wLvfmVz8quYw8RFP9AtpQd9YdBxtycZfgtRZ5YoDhQX3F2SPVPCNVdweVM4tXEXZZatE2YvdvmazZRCKPKX7",
  "key10": "jWoKenxAWxRNRwQoFeF5hVvKghpC2wY9EQuw5Zvuq8z7hJBpLifbjM4qkPSkvwy18HWR9JpC7YCJqzpN8Xbjo2b",
  "key11": "66owikgLLrruoEbHNa3dbBHAjRqBspkURg3ism592PT18eKqccAGiAHh8VCw1HpsZzrg5DtwK3PWj9ZbXLVLFkqF",
  "key12": "4x1UwNrz5wRQVeDwLWwnGZeyBSoV2uKSYr1JXptCQiNGc9Rc3rkksj1ZnDcmmWRJ1Kq1Y2HpR9jQtJ8TrZtTzDb8",
  "key13": "5VMM1gtLHfyuozNSAHPp6FqoSXZb9rmyxwr4XQ3hvaGku3FG5NRYVyARY85XB5ymYQB419nAycWBmUbHhADZmpx7",
  "key14": "n9kLGbaagCP5J59CcmEXNsJZw11FCmubauHMHpv1JqCeRkcPFc5jhEmCQYgbXjSVqu8CG5T6nspZsYLP4Zy1CjE",
  "key15": "2rmP6Gu6g2aVDRmivWTfJSxY37AiyqKDko4pL1s6mcWMHTwNEqjC1DH6xvBQksiTkVj453arwDKMDqmT73vJPfx7",
  "key16": "4dWPkHisvtjQnK5KYvMPBTtES5kMzooHBQyXjkMZKrsYkoHMLFePtK46knYF2aLKQxhYrL4Ng9f9Dr5PmrZACaJg",
  "key17": "3CqUtGSKAX6QFrRo6JSVyo8RzeTmoHRhnKak1kj9fftesguSCYK6NCCxPcgkxSon6DdZLBtCxkokHcMvRhFxuWFE",
  "key18": "3mcxNLZq6hEGyyCjDbYH6262a4cVue49FkFLsxD92TXbynog6KP1PNZCiTSf1d7YCvABTcF2YtTt5BSH3VSRnW9h",
  "key19": "4gc3LcSd6nxc9kkQRoeJ7AFcFxXBQsEDNmqTNeF491pucCniAQLnzFyGDEYp2Z1hhb4Lj1hai5hjKTNrW7UngL6j",
  "key20": "5wd4KxDxXv9ZTWHGW7ub79DjEZ9c1fAENjZBZJxbZccG31np141CafekeqT1wscpA7FLJKcxjkXf65umrBjnSjpX",
  "key21": "4EFav8q75AN9SCeq253iNq8KxZd3moSYgRUM4wXQtXnNRjSPanpQyhjq9XvtLe9q6wx6fdfqArVPCXqZigfXzdNQ",
  "key22": "4sSgcq1jWJqPxwFzpuYD81nhmizE6o8Nur7wRCANxBcefHMXcP4a5S1EXZ8yCDnZt3rRuUqcGQRfGrroeVsGPuz",
  "key23": "C1esshWVSDVei9cJiug5BuJ9cpPdWuqYyb323yBb4oamWcxQdt4XJKSekhEKGaSwpWHuRcJ9XzhMKEVYMukkcUy",
  "key24": "4C5Ghj9L9gpEyajwi6KzXWY7MEoUgvZXbqJwJGpV67LLn5Nb6D5f5ViJyfWSWso54K1WXaJBKNxuSCVnR8bUCUZ8",
  "key25": "2gjZBJzHzkBfWik695AWC6k1Xr8axLa6phWa157hseHXdDLKgFhyrVsqyvUZvouuF4tgosmKgA7RMmXzXukphTWM",
  "key26": "3h1XXPocDRXMRSr9ToimT3XYqZ487ViQkcBB98SeZkuxXxH4gTpdxoT7EsDEgdDJQnaF4i1hZrfYrg6bJ8f1dzrH",
  "key27": "5QBSPdQBwMcuviFiUdkd2fNJb1k5jKetSDkLLzDZAAfAmHmEHjNLydrTGfyC9xiFQihptnoERK7Ah8QP7Mfcc2YK",
  "key28": "126SDpWCcf867vV9S3i7JPmK1ti7AsNCCr44geEys6pPXCYVTqCgxC4RLGggNqSjGnwmuVW5rETnZ4uuZN2Npet2",
  "key29": "5S6daqmcRHnu84JtmiykSjehpH843xDrPKoQpqak5721eYW6pL4NHk26nJ4PqPqAo1qRiETThTLoiWfWEAgxHcsU",
  "key30": "4pr8nCk8MzsHKFqX8BaSAQS47aEV7DYTssiNAsWsTbZFeyLXNntrtvsgdYEfV3S5E9F46N5EkcUVBLzXxSrJu9YT",
  "key31": "5ccRRJXA26D7KtakicwHyPVRRZ3sSiHBWXui5jk1MLDDxCWjDCyM5sELA7ycUUcdq7ch88j8oEWhKZ3WG6EyMP2e",
  "key32": "4TitBJNNaDqJ1tCRd9G7bxFA6hWEEdpxQy1E6xLFAZCGGnTsBCnWdJkXeJFAA24A5daVvHhdmFqx2gu7rtifkczu",
  "key33": "3emuneispshkfdVLaQ5zJbmA4tPuFB18ChH2ZqQtTUqmrKgMrWdsJUfXZRYJx4RxEccQBHNgvqTEh3UCqxfSCicA",
  "key34": "gJG7RcGegDKkFtz1Jb7nBQmXt2mafm4vU2j4uoDFLQHPqDfF1irZsQ7aos24RcYXRJaMJ9ZnjymrGzRyiuB75D3",
  "key35": "4SzQHyF5JnPVBHSWc5p3hUW39Rg27FFZKKxJJtHSky782388CzuJVM6p7SuT29WmTEcNrKy6j5W7QMSk3d8bUdir",
  "key36": "5qFiaUnFeEo3gCigzgM1MfndG83wdpqAUsekGDFgfWbe2tgVpB41cWVNagZQ3bztzCCHpEuBS6tBwTajBtLeqGa1",
  "key37": "4bZJf2b1jGREp7vF3rK1VT2Heg9jRXyFVJymajvWELX8p7hnt9DRhPLqG6hAQt5SagSAea65koeQENCaBm3mg91m",
  "key38": "BSEKt9xpWu6D8CEuMwgDgDBioL1VCchSbXCU9CrcSadxJ2CzDqUcUv6tYZyFK7WWQEgVy2SyGe6FdT1hXPD8u7b",
  "key39": "2QorQprMCdbyDxuZhfKtAHAkDaavDeJEbdc3pXG3WuRDbQeY6drWQr5WuvG9gfMGNB5Rq88FCnZDdTpSUg5zBrcZ",
  "key40": "2TtCGSKV2YgUESBYSo3YXnhTjU5zfvLEJnbGwAo3o8X14uwcK9ThnToJ62khMB2tbqo4z3z8BhyQA8icqrh3cQrH",
  "key41": "DBn433aVSmf9gymdechaPbuPtXgAwLyesr4icCuHduvNqGcYK75mnZkWd5e1eXaYs6Nkep2SkPVKhSu8TGGSFGT",
  "key42": "3RSrfBTHTD8EsXKnyUAULjdGTFMZntFKphWn91pTEFtTEv86hp6q4WqYLgcUQFaDrQHrc51hn87NC1Av2sD9y9tv",
  "key43": "22T8GBivuDTVWAJhmc6LZGX19mfJVZDXCiQA23FS6si1o9AnwovP9bYTZzVrzpjWS3sUC1aitAkuAwHjcCKDtvcw",
  "key44": "2ASk97jDdZYkWMx11CSkDPH4Nk3AVQox3FUwhwamEsTc11RZCzCcchdGJBB6MimNtznzurL5CyxJh4ghRCoSz4t2",
  "key45": "195ftCvxViYs7RJfJk4w25iNKRhHeV7JX2YfoCBGEDB1rNWWqYQjgYM8Z3cb43PRfGYnsN5gBiJMiiyGNfkNBpM"
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
