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
    "4Y4Byh8Ba7U8Dccc6sYvYPMRxL66nfpoGpW21S55j8oHbTneqHZEpeductRmvw7TdpWmwuLBzGFzjN6RkAAq5PHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s1UHg58ztH8H7hkGjytVCjjn5jnHme5UgDg8a7xmD8m67kw8zvf7RjjhDqz3w47hrfVpLhRDWxR44GDA5BU7mty",
  "key1": "3pgn2h11sMpat2uT9HWGqYTAeg7UwMJejiXxESG5xae8jgUPqmzEq6TciMXjf5Pa7j41ZzKTVtZu4WTwA1EvFjcG",
  "key2": "5QiHr7nf6kKme7wShmhAGjwUmsWRS2Y4PKFUq4BUWkLYfMFgSsBHPqk4rVeWzMFgArvo4z1beYu6PeF7qvyvRrTW",
  "key3": "5Kfxg7Zv4U528mPDBQXbMtMKxSjBLnLhvkEqHskM3VkpfnLsRYQUmSDVif6bHaNJESXexDYKbNHHYUQ1CSdat9FU",
  "key4": "5pghkKsPDTyyoiHJ52ghmPAfQFse6GnUYMdackH6UYEEs2sy8bYCUkJJ9iTKN4jR1iCDc59KTigpeYn1shqYtTQZ",
  "key5": "5vSYYkEj4roDbS5bQ5ZTbs2MHUzrpsrRPCitML9JAbDQE3i7z84Ym3ucrrkPK4fFHvgthCGRkC2PiX1q9odK4pD9",
  "key6": "3EF94mfP9U3vHdwDbCLPQFomZjzYcVwrY9wjHiMTnDigFE5GpPevPLrjNFU7n2oDQiZQHAMy8HVJ61jDDLYCRacW",
  "key7": "xjDtFRFsCZdjRHRYJMqe1WMJsQGJf7jpij59voytrLiZNuv5faitReK2gkiiKrdPfvjPmFKpGXV7VfP7fAbiEMf",
  "key8": "277bKR75pjTAqbGbZp1mshgWBEnLAbcA419JYBiuyewCigT7WPqvT9eGkuPQUBgRZ9p3oEmZ77jdgkXLBRJxaUoG",
  "key9": "56RYUbe6X9VpJnJijJ4MGcqqJfR68oBRft8rZyYCKEHN3LBUkwjWtLQHLpG6Xd68MgZopgiwHd4vW6ipoUYEHN6J",
  "key10": "2f9wiMPbmrrmUZYmaPqMq7Km6dYFYRN6WUoUmobvGetxxPovCyTwfh8qjLT7EDx4vEfJWqRakco5wCDA4FZzPjrY",
  "key11": "3TtGTS8mTGWzNuMAjQAezptATcCh44QxifuCNWfrbabBNWWQVCuQntX5rAJF2BfDxN41kb5ZAwbWG8iU5DhANE8z",
  "key12": "4jKBNSVae4EzQFimTdj9gSADbVscDaWw7UUfk3ksnpTHPwQi4SAJiuJkaja5tDYdYKffBZo7qsAKTKfuKNN2svk9",
  "key13": "5xT5C6tMhYxazpME1p2AMSMLx3Ay318P4DRiYu1aVk1KTGjcRGxGhoWP6Q2siqm7RvGvn7fgHabbcYz9g3qpPdqJ",
  "key14": "4Eixeav528LjX45MbjaDt6qPiBMvoPyuAB5bpo5hcz7qyRdGug4fhaCAGm28X1rAx1cZwhLK2qCceGLXBePurMj7",
  "key15": "5Vo5hBC85xbnDHrVB9ENjGSML8EjPxE4asb3CAkniAYMGQHGsY9Rp4c3N2uX2ogj3fj3SWv7uybkDazRLTBUdbuB",
  "key16": "3MRBcY8Tuh21RCwxkwfUps4TNuF1Bt3Szp2irUsJNAANmHV6yHaGmTs2va37Ye6tYwSEpSDkb5gUXGxchnLiZCak",
  "key17": "5H8oB4iThtqqb1id795RtNYfZyTWsc26oD7FDuE5iiyYPSNrVvpx37gRXaKj7Uu9P4J4Yd5bfewcXqhgdy7bVTn1",
  "key18": "2yayqBbYwQLf8YVHJHHLey8SwQHnGDmpFmSoGkYjAQQ8gdb926NA26cGXzzV6S8Cr38VziMLbhsDVNrVChhaoYjn",
  "key19": "4L4XKB8HTKC2XAxX32XQcLUKQ3PeLFFj7qPrHnCdc4qpha5NDJAjGFXb3zvz7m25y3WHJTMB37X2LUoKaywhXjgE",
  "key20": "2Rcu8dMQTsCNiVDntPM7mq27XPE417XvnScekRM8kXVdphUBGYg8HW8FvJvWf6TMZfSgDgXk7caf7mbzdUDGqMFj",
  "key21": "46NPNnKAKTCinzVnwcW5nzH3JQekfyYSniNazj1xZjj3jDqpMo9cRAjsTDKAAgsqUUBhpMYY3YkksgSA5wEzsmJc",
  "key22": "5yR7CSBid7qk5dbUzeeoNAVDV67eK3DEBZFFHhyUdaHsT5Xzap7JdXsKdRgVFthEyZv6RxSHNbjoJH7bX2AZA2dG",
  "key23": "62o1uoQX8xkbunPzZCQTRfk8mczRuxS4qfJ7e1j2Gid19TaN4waUk7feSh6ihxQvgB9oTu51z1LUVGU2eD1n2Rvw",
  "key24": "3VQgJctbD22HzkvRWJS1vLmgsAqfDDgxrdKZe5ouN8b7Q5coL4uYAaTMr4zvjtK1cP4HjA47Pd6KMPTAojqazkxA",
  "key25": "FSmU43YMBEqYkgDTSESTFYuszuF9nJpCJevjqNFKA4m2DByKB8cm4mvEgqvPxYnvFDHtRCo8sGLySJh9SZSSap4",
  "key26": "42XK2zxjXcXQ9zx7ZYJDBBZbzAWx2FcThVqZFUVu757SAwJRRZTgRQALu33L7L3d72REoJT8zUpFQRa4dY1146XC",
  "key27": "Lgq7BH2zwZgnDryJHBxAEXgQRYgXWxR88P9EccvB4Z39NpgsSrm2HADwiLdJMMniayu1DJCwZb1CsbGM6yRvebU",
  "key28": "66WHsBpPp6izJ5evHqibiavq85ULWdVpWUmoL4tidcHW7Uhq1xJpY1spjzaoEt1V2u1vaveLPpsHeU3G7JtGgPDg",
  "key29": "531KJ3Up4UHavHgyRxJxte3iiuMzeXnKw4V75c8HLEBpuUWs41vjoXCXxQ31GEdunoD3QRDaQuQ9h5upnPnVur1M",
  "key30": "2rjgFAkKA8W3LKCZEecY9ZLQVQVNMombruxUs8hgvGdM4fDyqtHtHs7i6VhsWePX7nRdsApNMfok9DwU9V4XqjGq",
  "key31": "5Xm9kgqPUwwxRucR85vSqyEKAiVmDii6DE9AVmoGPLir9thux8XHH1qdQZnEKRz5KRFoBphT2URGBrqFarL1frMX",
  "key32": "e2zbyZVktMuWBngfaRzysB3nPYaEEHhyeXNy2r7HcGVQVAFZb5rmsp6uNN4oVLn5ARXgv8mZ5McKRLd3T5BCs8d",
  "key33": "Tpnab38JCkiuiB2sJk3NGRz1zaWxDnhk5TLwoPqBrjq4Z1yJCPDiXtT9qqrVKoxzkazYEP7yBwQb5xcXTKT8MXZ",
  "key34": "4kYNfoN63RTp2qXznK7QHtPtw2vx63EbgVRBg4ceGHE8YCijcbq19FWm7dD64QEArZCgvxNaCZVimqDNsFSFFNc9",
  "key35": "EHanBMxD2bVi9wLdjBbBmwmTRcZkmzA8vdjJzyHhre1fD52RdLXo3pmQGn1P7H1pWQNfTMGxoGbqNYZ6cYzsu5y",
  "key36": "3MfFCEjjps2SmNAZ8YoFZ2tyZYnTRJdUjc8eUKMJceFSxCkGoxM1zgAbAJKeHxSJDD6eExUu75bANikDN5X4uATQ",
  "key37": "3Ae57V8TsRF8BM29LdZpX7rYkCbQxCHmg41BGTZRSovGxSUdquTYzqMFzDa2AAPV7twUTrTkC6i53vzMWKD1TyfR",
  "key38": "5FWHAM7PsapKzXNXHFSBYZ252MoiMnGj1fmYcEoexPsbrU8TF5imcu5MAMKNde54xBGenTkUFy9NGmCxHQNcKAJF",
  "key39": "2DBFt8UvVasQcczTPEXLxELhU4Lryp9t4ixRMdHJV32KF6ZNC6d2nrD8H6YSPVSf9eXBo5Pi9rqtG9V4KBP2NyFz",
  "key40": "2LMqLc59uraaLpEV39f8hL8idKkQQR8BTWGFyHAyYpNcDzYMX9zgT3WS3oWqT4c9entedkFkxDZQmKwrcge5wQDb",
  "key41": "59tvC3d6vU5PLGkUpWm514Q5UvdE8BXJtuQMVj1fErEugtxxMLMekHhpv7XyZg7u5bWdLNTFwG8LkKyeX7jr7cj3",
  "key42": "2kurEn3rEveUAyx6DfEYoRyhU2M88RSv7dp4HjMBBxoHnShZis38MUBrcFVtkW6qHy4JgkrsxEVewwh7NvhjpzNN",
  "key43": "64BwkaMg54hpVJUoDfKYrSvhUNiSpXku2A2gwPHS7QkFjQofGdomAf4E1paA36gt2bWwPCte2hPuGRBnP79mzN5C",
  "key44": "4iihrRfrAQviKQo6bzzbeXQjVXsNLjKvhM7HuRmtkwzbuYN2FomZpBqBGS5UG5ioTponctSM4xAiy7efWYpKaSmG",
  "key45": "2UNzkVSKef66xb49ZbgoVJ646aZEjoZVoRqfT7zVjUfrA8x8qeSJSdrF55bJUd3opdgBjtibocoC69e74V6o6AxL",
  "key46": "qpJLiuSiKLa5Wc44iZP4g7nLWodbfz6ymbP3Fq8jbZKxhvcabfeE8CaNtxpCLsHDmevsmoyQwjK26Fh6dDUM4St",
  "key47": "21wM9EXBVkWw7hPHaueEnHdY6bJaavdd9vNbn3HDvZqXWQSRkHvX4hPai8noK19at4LQYaMuUrqFkZ7ju28brEh5"
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
