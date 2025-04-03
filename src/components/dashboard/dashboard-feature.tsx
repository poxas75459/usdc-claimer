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
    "4kU3Lvg9cdT8k83LoTddsd7qTWqXFENvvnhSQHqUGhkEWMNNggNjFVWYWN3ZGSTAW9pMUV5PF68LHenRtjKu3Br3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bm5u8NecrbE653YCGHLxncGKgpUPDycpCMQeDt9jHuevwPGWHYkMbY6DKYBeCBtPXH4jUBBUHH4fPK6YTRWXfSw",
  "key1": "47rBPzNqsWHmY9MzvK46r8QkizAzQg9NFBofcURfNNf6QjH4Fk1w5QMqmwGJPfkrf2i22JEESwYPzjfMVtEe8uxM",
  "key2": "5wkcx3PR8PU5mSjSzxGqU2jYqtY5UHHD49j8on5zx6AwfzhzP83BnoqEXGZh9uSdfmUAaAejUomavTdq5iZMfA2h",
  "key3": "w3csynDrggp5EqmaabfBz6WoiVzBf6icJDZhLkNtuykAPufrbXvs6ThVJXJTNueHA3KTWngJtvobewiFA5RvWcd",
  "key4": "3jbVCZauy3u52MkQfpSJ23hNq7y6kKQ1AeT4axKrm47gQKxbTri8ymx3Hj26uwmVr9gbD1AGQ9FicgAUgp8ttQi1",
  "key5": "4Go2kHG3mcuSCzgGosutdPJ5poyPTHwE1bJNcH4cFjJzEvBpH1QTpx9RkfQXK16gShbjkQPZUPJSALVwzhXNipyj",
  "key6": "2jtVXytiqBBNnpV1UFHBXnukenD2yQSoejH7w5CCT2f3ToUbdJvdxoXyWVj2bQWKAMSVHFkm1vV1YuYyHdJYANZv",
  "key7": "2ucvYU4YpS39bjYinJAE9x6LkWMFQdbWCaNRRrU7iX4EyaD9j7rbEXkL6ztywrbS5sJ52Uxs54ycZKqeCyqPpXsf",
  "key8": "4hsWgYoDEHAaHMPkwGoJ44QtYCNGpBYc5Dk4SKEZCFRVwaUC6Wb8rvL63gfvVsfmKvAUcAvz4BuP8KPm1Ni9vdu5",
  "key9": "iUw5BURxvGrkZKJ4fbiG4eo1c7vhrjrbmyCthgVsw7UpD1KDAuuFN9obV9mgkSsEexaDT4fL2ZvvEyiaEWPNqUc",
  "key10": "5MUCDnQtDYP47ZHqiLKJ3TPnUiTJTejnZPDGWXJV9hkHi1jmGCcBh5b5RicRqRokgSm41jaqNnUEvPhsL1c39xKh",
  "key11": "38Gp8QoNtYYmrtX8rxvsmfCSd96cPTVqJb4x42ABEQmX8RXUW56jZj8PTaNc5BLYa6NzadDiJSEfumkhwwpUMWSn",
  "key12": "F5958zuTBb7XzZeVC1zAfNcQRV4ro7yCuPGrNxsVgTGh5WgQ4AquWTDXSRTKfGN3C38rzuRPwioyhPAJM62fnj6",
  "key13": "3iZ7CPDKhcbXhR2YzPDoFMpVRK1pioGdejorAGdyyaz1rMPFSfkrX2JFc9zJpui8DPHRLqAUD1gEFZjwfWz1ZW4R",
  "key14": "x5eE7ysdympZj9frPyXDJZ2qCqnzBL6AVkK7sBHa4JYs9VYRSEAUtJx96MkXJf3qvP4fqaCPZNKsNzcTZUQNtEv",
  "key15": "4R6GCRmuC8HC1Fbxq9Ze5yfzQQUZowbUMrx2niEdo9ZppRkdz94ezudCpEzoSMMjmJ4g61BRuqXniXkTiTBJ2eWR",
  "key16": "5pKPjBVSepZWR2gV9yfJBrB4PhhCAwqkDcFrDiTU27Ex6TUJH1a14cSs54sXBT4MbfB2Q8MEE7Jzm3xaMZfmzcQ1",
  "key17": "4LJo5KEsrQEMDAv8TEmxa9TB9UMuebzrpYksT9Y6SNEXrFGCVY6qSEoZ8j24L8LNaUryUrjFSJ26XBjKeSovSvLr",
  "key18": "4TcD6YeNAyy9fZjuo3y5pSHuD3ADMoEAXFHipbyxRUfE9dnLignU8nwQUo3gsNfnQfXEEE3u1RkadsagJz24TnxQ",
  "key19": "4hedRLk9WZ2KPW3dB6nonmiSdqCjecrsANvDpQ2eCUdvx4dfQCpd7oawFzxrBw3pMH3BiSELDZz4XCR75tb3JRug",
  "key20": "63PwgsBVfPLHMc5riV34nCzUUEfYnAiEYr9Mmu78wZCFUxnhU9PcWd8CYKqrHHHfj7ESSUNgX7pSmyBHrvVWM21r",
  "key21": "53mwxWeLhTYTZcoAfvJJVJpy7hy1yn6uPU8MKJJowHz3LTVSwoRKzDqpQ8jD3WJQTDY4BWppw4QDRvTN2iVe9THT",
  "key22": "MeFi7MDGHz7DKxu9L8qYE3RXfopmhv9dRXvNuX3QnwfGwasHSnEZ3qeJcfBpA5uzNieEQWmE9xpGe32GGKvNzXM",
  "key23": "msCkYE3Yh32sDdQfR4Z17NWKm793UKyUrGGYoWjmPXZ5XQM4XPJ3M62jUQkRq4kaEVhXeZuN74k74jqHmy6NzxP",
  "key24": "4Yu61vFDAfSehjCWFCJVMFGvhsyvwEJ7qrh8KfTJg4HihHrfStrcZzdozEbuscs8WCwdF9BfkZVVQWiJwUsAL2dS",
  "key25": "iEsWBmMPfHRPMH3iZ9WHV8P2N9yaA7LurwHZ2M7LX5poe8NTqfxh9hqfLNkNeU94KNU34BJvXWsBHs5GMGuWDPs",
  "key26": "5PycVxM4HttxWDhk539re9EuRndqmAZ72X1m2P3rF7G7rBL53uc9D7Anso4YMGf8fDE5GAAXw46sR2UHk35VSUew",
  "key27": "57Btngfnwt9Q42FZgfyPg9smumEiPKW31pW5pM19oPzuRbr8rRZqgtpipQuLBCgxvZND3chzkadAhVGpZwTwBha6",
  "key28": "34dGr8xE2bMZHsBrRYfhZxfWfwxrMLeu9ccnMWEozdHJJ68wmFQAqrvRDs8Fph2szvBY4i4a3giMyz846XcNX1yY",
  "key29": "2PzLz8jHfPBwKpYjGwdxQeyjtza7G8RgHaWuk2KUoQP1ekX4msQV82TED3ja9QQAstQLMraJYx7m4p4QS5AkPRMS",
  "key30": "389FM5wTntpKmKcAcb46M3nyCvd6wZYqNQHLtLaCxWnddKd3AKoJBf6uTTSf6i9EKhFbk8s5XKLSDPrySc9YDeZY",
  "key31": "3CkqJmRuQkawQAVtRZPpFTyzzuPa5TXLuiaAjUAHaTaQn9zn73sUEs9GaTQRXq2LAbkD9epvqDXtApkQ7KAkLUT5",
  "key32": "3HUN57d6yuT8Am6tFuEcDAr1xrPSpi7qASAyymiFi3n4ihNZQkBgx9DceMLrFzvhgGNsXFTZkEyFcR8Rq41QD3nQ",
  "key33": "5pV3RxnumvgAHr2kqSXFPoXsqK18JWAyWpYURyahjjXtjGMUTRympqAdTSD2Hp4M7A379YEg4ZzgEczzKNQSLZ9a",
  "key34": "byJB2YVCi1FnqgjRQJGzMjmQtaRrbDZrDz9xNTSKsg5vmsKqpWCS4XE4Tu2bJnSgTn92h1CzHi7nkdXanjE5EX9",
  "key35": "KKcxJM5QX9gFBbpN8KSEwexG9Gg4bvnRkxJWj4ni7h4bbpFkokSHK1KfZEi5wNTqnDqpydAYbhZMauiYRfm2Ni9",
  "key36": "4CQnMzMUV5MNp2uuQ3AC5EVXwk1rRS9AUBkxKqNio33DVeekWXV94ih1gAfJ3r8hnjyVuDEaZRUG2Fbj9y74Yxmk",
  "key37": "3qfzdAiQWnuQANCXpQWhuB3cMm9HokCP1zYm8gT4HQVF5t1UXeqTFCwibQcvqHnADWt94GfWbBtkKwi5bwm7T6j8",
  "key38": "zyJqjrRAGDoRUKimPEkdNkmxtEDE3XvC6Q84XmyKKzcgUGGEKZRqpqkWy1FuoFjSRvCVfJrB9HVR7Qa4ZeMQuZR",
  "key39": "2VdWrrXq9pwxQgroF2pCpjxe5hBjvZpkFqHgM4uLmEhZgxnvRNqXqnLPKWaCiZ5xXk6U8G8t9kvt8vDMVzJAsrvm",
  "key40": "vsghxCiTD86qwfgpyf5kC7FHoZdAig2rZLjSWQfLf98nVFHQoebKzgwCgD6GRtZxFbtuwRhDKceihymjwSNT5Kc",
  "key41": "2FkbWL5eH72vMzQ9tBWm2X7dMPfqpuE7iBZx1f6G2HLTaRfL8wzvycAMRHYcu3hts2zqQuM9R5URF855xmiJ1u1k",
  "key42": "63VxCAUaTZAvkBNW6D1tqmmbVH1N8FerY9j32RpUcz3TL2ff6oZ3tXvoe6xqsFUN1rEVQzpbN4qMjecRa7GruwYQ",
  "key43": "2LHCd9UN24GmXr2WTvHxgPjJ9fZ13kdvJ1LfbVcpqndfT9xieJNYuczRRZQTJ86kj6AHeM9XfK1eo2tQmhKDCy27"
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
