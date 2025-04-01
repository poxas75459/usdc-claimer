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
    "4KdFRMKamCJLAcHnk7ua7PvVBYgvvvKHiDPRmw3KSHFhFWucmNCmEBvGwn4oNx9HHUCZ6Egk28opScsuNy4wyZoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y2gLrcN1UKitE8sE9qZ1iUXsBvwX2xm9bMihebubB1xQ2UGFH9DTQ4eqMta5LxnsZVniDWou5zBMM66YMjyyczM",
  "key1": "3NhqwbdeU7m7cctTw3wbrnFEmH7oX2sgmZfiWeUtSSTnFcGPjnVp3a1WoS6gGHm9YYkAmkGBW3fE5FGExAV257Fr",
  "key2": "4Z9NtUCwRazAnMDK1J74jPUtku1RqN8zGN4n4JSTJkgCNdQusbhZX4daB11YwnrGoo52sUvAvA1jPF735LfViCiw",
  "key3": "3UYF3gqk51fL9wRNt8CpYeW1pb7GgW12Lh5V5xQn7F9Bg59yaCWCXv9xTkPDc7AEJQhDz2FyMEGTvgqfX6xrTusV",
  "key4": "4Vf9S8CqX8YhBgwMFaejtssRFp7uLiEbYX1J6Szw2ZQrtkK3nM3roQL9LK5tBY5Z5qyb8T59L9pMQw6Uh7NNVaCJ",
  "key5": "1XxzuPcAWKjAVAah69tiKfHXxZcmerLWeXXYYKXN186GKTMs2UD7mTGS4L8MvJP9GgY4SscwSi3QAwxevFmpaw2",
  "key6": "KPFNSyVdN1JP57GeApNZvmGFFNQ2BBZnhfVpk3h1ZeRtS7ZNa97Tqtx5iHW8dxVNU9F1Ly9dhXqvNzwCHskxxW2",
  "key7": "4GmQUkXZEC6jQD7FRBLBRGzgAC9diCZoA9NdcVmFEKQt4d14WhQGpSWjgqQCkbXQqhzJdSHdMrV7puk7m3eH3EdE",
  "key8": "2SVNKHUeyJrfMqtjjK1kNYHUPUf96De8BCno1hoYbPL8dneo2ykVr2B4QyiLgAY6dpMLPB6srJ4rPjQhcY8zhi45",
  "key9": "4j8kMtwEY5sm1cT4ZjsSLcHr36P4iwKpXhrRs9kgzXXJzgAju86urqiDnjSt3Mjc4XffmwejqHWrgjLXQB7ZuvAJ",
  "key10": "2qwfbdhzQCz6MD7rbu7qyJZbfWdTFgBT9znFfF5RdNAeQdjaaepuafN78vVehtEmGWJJGZERACMU4ohhVfSDjadj",
  "key11": "3LEj1oQannhJpg1ooh4ujGxMywxJYpp5P7fXEMSwFJApJG6H854FDUGzpPVFyMGGLSo3WgF796VFTSxT2UoMWwGC",
  "key12": "2T2gBJEuP2HFDfchbAvxSe917sbUHpXvAmjn85M2tG4pbBhMEuoevUmr9JEdsKr1MKpKvkwfxQvGHRXjNh1VKKUD",
  "key13": "37ST8GJK49fJjzbxGTrpue4RJwNBnxfqc3wBDe87tkQDfByJ1tjRsdxHT1DBjiw46HNFeERsEJRPAJpyRsnadtLh",
  "key14": "HX6EwZ1upCZaDv9ToXvhENzU21SqaYTTLF7qV33JtzpEtK7qskPW5nqJpzGNY5VjBPPv1oQ1iBsgbL82ppsdrnd",
  "key15": "38dufUL4mkHVdyNDq7C9yWPLWK5fAkHvDfFa8J7qY2Ez9NfUwDYNCngFvBuGJiiMe1jvzSxBvbwdP9EQXteDbUq2",
  "key16": "3KdqywUnrTDAGGQPaWGtZL7wCd9fmSKT5VS7jsM4NdG4AtMZYyMafT5XNL5boZeCqqf56iaGD5U2JREt5dEBhXQG",
  "key17": "scq91jpb4ATyMoyzE2nsMeW6GJHEpwyz4tRE6eczXV6c27YpbbxQB1swQvqqjAGveWAgcooHJHoXK9jhN1aDBvH",
  "key18": "4FvxvAj4eG6j72akwE4Shyi6p4xDxevFVN6BvmJRfDS39WPvTQqTEML2A7EfXpDkhGdaorz8Z9QtKkBRhZ9cpnwd",
  "key19": "2ZQ9sKiFeSKPUGbzPAA6qaa4KEBPH53fkmNdf3Ey2uJWJp1BgJ6Rgo4WPSgtwydLXstFbFtWDtkitADJcP6oy4qx",
  "key20": "61iFFyQEfBuVkGHcQPm3kEEASFe9Qj1fP4yVvi2qKQsZBibt9GNABApW9eKAuZ7Xa9nFannFqpZYMp1g71ddeoij",
  "key21": "4nsGcfss7UJjohJMsVNAqJyHHuevBY5z36JBacBpnfJSDfXFCMxu4Zk5JqFXfopSr6HQ2GFfzKQUkQjPsxyD9zZN",
  "key22": "4ojVCuyTpqXAt3P3KTiAfZjHm4yeud5m6XaQJUJFMBeS4HkN5ZrH15BTBP2F6i2gRUMhfAYty6ZhoPcr3AuLgoL5",
  "key23": "2PnV77RMDgwTP5QFZoHdn91e57fX6APdsRoGTNqrry2m9hMEx9B6MonVq289FGaX6nUjyUHCNp67XRWMBxWGZQNy",
  "key24": "5bs7cr9k6fq4NSx7j5hd1Vq1GJ6XWgP22s6NzmanMA3oSYckkchp4yG6tyuHMAr7Jrh8pBeru2v7kvXkvAZNemtc",
  "key25": "4Y8pSE37yvwxvBR6JthZDqkMTYMEJU1xX5RPqdHiuvuXBoHSFFt5sf4wV3kJFrVcCSjS1e3Bz7Ei2btJ1c71jPQo",
  "key26": "2mRGBWrdReTzmuD6brwcw1Yyc1ysXufd37HedXtGDxZQ3zkYoVsaRekygnrDWLiDLRPpTLW4LVHBbxAaxcKFegnf",
  "key27": "276n9cjJpnFcQBkDtd8GC995v8EPV5horsMDtakLEXR2TEZAvDKeqTbWVhAyVRwhaXZy7HzFd6nwYzHMvmGDFoZo",
  "key28": "fwoYmdBvGTFimLk9sHcKz5ZLdiS4w37vgkBrnqD3Mnxkdue8Cb8e14hf57AtM1SEEWaQXfN3ATduVYqijyUDRWt",
  "key29": "3mV2ETSneiqJN2W77xQbebvemTgjSHBNbhz2A3v1TdzM8yFJRr2Wiae2ap4UeWP4adaPoVVcDGgB8AvxyU9ogRTo",
  "key30": "Zuc1573SW8eqY1EPPmnmD2sfPP8zPXZtb1zARH8qoRg97kv384z6y5rVepA7LjyWg8HUcD6t6SVw4zN4mQrD2Dq",
  "key31": "3WibrmvVdiidnS6J3U6hBJKdsd6aMTWiNR7FVfQDYFgRJBZHJrKPupjKk1KSfWiuw3HxB1WhLet5AFdz2q5T4btZ",
  "key32": "4p3PxDhuYmBiv1qCGeTR91CHWk7vRLr7BJnS9Ngy2WSxxFePeFCuGKmAxtDbpydpzP9p1ZPV37HgAYHxTFkgqkGd",
  "key33": "21tdbksJ2ezRwZBKEVYiMh7hfaQChpipJYgRhcSPrgxrpbErHDAvT6VmxE39xQE4P135Voej7z23uEveupZQGkPp",
  "key34": "5wRmnucouJ2ujjE9h9DZWFAuuzFpijq9auQ6FguB4ZLpms3MdNLfj8GtqqbF9EUVUHcW5or6Vr4qeGzYxwysfAX8",
  "key35": "3VkoCaGvrGgirW8yxSjeh6vtFDV5Vgq1qHhxUebJ8oLrHC8dQ58vRT9bZTQMB4KkYuZeaB9fkgHxYbiceoNENHSg",
  "key36": "5Q5e4nBNpkrvyaTSBkLk1H9X6sgJuywAgrGLph5LdRfGVUBvLM5iHSKhxBBxskzwzpT2gwukZk653gasBeD3TrFb",
  "key37": "4zc3zwmdKke6cykyyAj2tFy4ZQu9zsvbZz931U71NQAdfGxJSj8jL81vP1FPPCdga7te1e7GgWQgnSG2xuvTBUdT",
  "key38": "wcpvN2wy8Xs5JG3qA8RbRjUr9JZrdjw95332vjd7PKgEcXrMANnRqUnnkYFR7ozoTT9oup1j48vebME8yFahjCh"
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
