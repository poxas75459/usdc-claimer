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
    "51wNor1kChY3egaNpxUeuhVpzzYso1xb2JPDrru1eLLQgeAhthFA2Mh656HXW7JP3D2pKS7U5ro1s3jGEdtUkqrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U6xqKMQYiK6LQ7tcmUFJaYrfaEQJJeyr47XMaA1PhFDCaHX5DM7e1aAHh2Q3ZtiQcsjnSRRZJ1hMXKJJDJH7KwQ",
  "key1": "2JP1QymMvZcUouLDwaeYmkWXZH6K83rQKHEJRS8jxXRSccWXRkvuM8p2ZQW93KNzJ6Hcj39hA3SeuV2QxXCEDRRc",
  "key2": "4ECxecg1NxERJJTn7P54onzxBA9ApTTGTywmMkjNwA36zJA3tpfpJbHGDrpT9NkL16JL32TwkNw45RLLM51uyf4i",
  "key3": "4cZkmKgAzSLTnRKnnkuT1uzjrnSrA21Wqtst3FCRyKRdmudJgpxxHpTBa6h1aHi6Tm8AFSWWg2GQ9WSpq6bvSEuS",
  "key4": "d7Zz8xnbqtGzFjgeVC6GZcVFAXcH2sTTJpc72FiuoS6VVAKeDqo1azi1t9T3kZ3NyNT1pPGhfnqCfCgUhmMAvNP",
  "key5": "3zERfr3nVF2d8AkgKTT79DQ7jTaC6X6jR242LqQu43FM84JoTSfuVp4dX4KLHBwm6TLPhe7wcFuNdvLdCFPFL8Xg",
  "key6": "4sS9uKXauEm46v2sHZsM2jCb9ETee5iX3ZcwLjc8jcpasNrcaHsnVwXdcyuQ4ZEccbzhkBE3H3Ci6ZmFkRXuRYev",
  "key7": "5hUtybURVStoEjXUsS3yzy3jn63uhigkGuu6XFVXW3hU7T9HytRWQsGuTi7cxGrzYdqCxf7Xn5LDdWSEAtTR9NPQ",
  "key8": "2nqeoByiaJSBVsTEiiyvJN8NDqmoPTJWGrRYpin6pv4EFCu5mY2swASEz3mxrkfEzvphquPwdx9Ugu94Kwz43HFZ",
  "key9": "4PvYMcKueckHaB9BAB3XkgwSU7fhSDAw6s4w7wMY2rxsUPtpxDQQ3nPNEPPRFz8GPtmyoSH4X4sNL9rBpa2EuESj",
  "key10": "4WJjq1LEdw23cCKNanYRuf1coqgnxpTbhqSUNQcR3mfwL5avFHoy3YYdx4XkfHQbqUqEihekxn6agHboeQ2SScD6",
  "key11": "4uwDCjmvZEPfy4F5ZDD2PRzEYK8ZaFcRsPiYM2wpGua56hVRkYj3WHhEZJzhAcg1mRF4169UacnBLgamQgM7VyEx",
  "key12": "4hcgxdWrdMvKi3CZoEQZRFwrmEmaKKLTWyoMKAyVFRmnGnzZ5PBSM9hmaXqBpRnTMNmzT7fM3QevaDHJRVwtqg7i",
  "key13": "2LzGYzpPRLbjZtjGW8WckXGbgdKypqVYGnMRK9QxZ1QJB6c5sBh9L59pDRg1NbuywJx83QaJZ6nbJPJV8pyevmGm",
  "key14": "w96H3Z4ygz4XMK5Ub7YY4ixPpyTy1iVVqU7bGx3LcspSrEbsSH6HJbL9QFqqEmtFXrXs9cK6ZBMLQVvwzUxkq6S",
  "key15": "5Shk72gkMAdyBV6QmF2qRkosafsnpHFoFehiy288njkKJ69y87ePAAhboFJGkADVs39qCbq7Wsj4BW2v4NwTRpSc",
  "key16": "2KQWbZbBMZpu1zVddhAgyJQT58aw8aJNBw48nDMHhk8jwFAh4RQMRjs2WP6CRpThuQgrKkZ6tuSnuo2Eu8DYVEzR",
  "key17": "5faLDZ28Tmz7ASSN9vDRC7Fer3RzEfXRDBtzCenv2avCPEw8iYisUay62tuPzUgG3mTtFwd1gYdV42dNMWycRmKT",
  "key18": "47fjncWmJbce66KRoUJrYXWWfF44djWxtkVDKS6D8DqujYPGSN53wZbbsYZnwH8QgZLqEeKQN4gzzsHwEnmHzt4s",
  "key19": "4HjBTHbhGQmyUnhY4GhSxr9P7AjVdSefhyuXwB3axhQ8W7qC5Fce3MDEue1BpiYAkaxX3vhE4abAtPVoHZH4fGQe",
  "key20": "4tH6TWoM8pTkeBvfguukxjhj18zqm8YZ8vdBE9qzF3o1W1ucSW88A3GhL6QSZYGRv4PGhqXnDEQqv3w6kLecFqi6",
  "key21": "2UY4znApMc78Mv8nkajRvWjahHzfzwnsEu6xv85PAS2YQJSizFUwHp8zTbnYbxCr47zDAR85oRZYWapoD4CHRoi1",
  "key22": "4Lz6pcAd3pjnqSRJLrG4ZnMHp4L2e9Hq6EmmJytsu4rdTasHnCoQjySGuBdhbEfBqUFei9RBN6vMpBnCWyCYsopD",
  "key23": "3NrRBkd4VxPK4y272gkC3S8ZTt6R71bQvRPJwjhM5ASRJ9A8Z8QDqVmzzAc4LEzgsFmVHHwnZrr6j69KYuPVeDpE",
  "key24": "4mBtC9c2gGYoqiP4xMWN1zFJVxDRV8NHbi8rT1uGUx5SCnRTVmTV6MwbJ59a8kDdnYedyR2nV1wPEpyBsz43QE2m",
  "key25": "3mgiTtdrPaPckxrDXUp7dvfKXMP8YhzTrnqTzXGvqb8FKvuwACBVCt1eQvHoaujE2pz6tgfrEEf3sWVtHoJZgwzk",
  "key26": "5w8K6T5FguL1zAUyTd1uAABoTuFahyfREunWdBmL15qne364j5P4HYn4FYn4fey7ahYJ8Asy3vesDt5iZ8FNR1Rd",
  "key27": "5ruBJRCqQnD6mLrZPzV4zxzYaSww6Y5iP4kMjpVnooRzMxXqd9pnnbB5Ekr2czT3Tpo9vqcAVbWQrncn1haSJ1Th",
  "key28": "4ysShvM5BSjgQ5QwyWqhE3SxUuChmeDpgUzcKzbw8qrNmSUPLM2bHY4ChuoT3g7zwQxgEKZqJek5AtWVpQiMHJmp",
  "key29": "4aFD1pMozx2Fs6YX4hm6bU6mTnj9SDkBaisP9ZM5knCdazhdaQ7kqkaiBPrwMLPmCQyqGBDT3oDAeSZPXexjigb2",
  "key30": "3RwyYR2UtxgRaZRH8m5koWygXwm1Fg2bqZLZmagzNnB2Fr5B282Kz6MF4YWSpq3fTPJjjzTAFomHwjrFfwwSgfch",
  "key31": "58nApF1NYJS25x778qrXMEaRnB74TuQgBKHBQrhHRF6kd59hiQSCF1vyyEZRPkD2ho987UMex7HKgWof3G1grKPi",
  "key32": "3hGpU5oS8GC7ooaDt2BHVKYT6kemeWiu4pyWi2H5y3dx9gs9KhJDYAWqPPhciRN2soczKXHgoPQG5eRn7zfvrQTj",
  "key33": "2c73onozgfwqB34imdSM5vhGycNi4aT4irbQtrVCmD4tpMqr7PvvWjR3orp3gU9EdsEHqej5ykNrmd1hDVvw8jnJ",
  "key34": "FeRxnReGEGnWu55YP3Hre6GQ8x5nmZfytUasRMrEQSXQX39iDkUQt3eMjUUdRWtZHzzT5L7LG1kNb3qLtJKz7zy",
  "key35": "XKZCDDka8sidjPfnFSqMHQUX97zXRFyGnTGu2eVc57f4nYUzoQ7eZnuxSaf6P3yyDmQafCFpaQAbyAbHdPmsSxP",
  "key36": "4rf6JGQKhz38UmhEJ7HX8NPjJnaPCZx9bmwYsHUWkdAT89powocmVgvQ84RUJsvrDHVpv5oLJd3uMMgdkiLVsnj3",
  "key37": "2sR6wk4T9tsK4J62cCyTLxBzk45a5TGUR9UdHWWmLVpikHVY515fJRahGucMx95HbiqmTMfsMfb1VRZreEpG7xQR",
  "key38": "3BrnCKLgpWWthwcUsqT3EFrXafjVPYN2vJVumphPVCYDGvEAp3hD4coG2BQVJnCwXysYEw1mvGYjjwMa4r6t8pCT",
  "key39": "5eTJnNXonUgYnNJ5vo7NWvTperedsy6PbAYYLmPP2F2rK4HRBaGTLFnYbDjyrRer6f7Bortmb9ASxhyCJj6EYFe6",
  "key40": "51A2m6RYCz48NmrE6Ch98oUCrGwE7wN8anMDZaVv53qAp1CWASjueb1Pbu5uQAAdEr184XvwFdBRdwEVM5GyxeS6",
  "key41": "4aQY4QB3kpwDhtrLm4PPedtWiaKYTmQdDuUm3LqgZEsGQ46mFdEa7VhjdZdUK1fDCEKzqt5u3F1csfWtTNJXFYnq",
  "key42": "5nqmYdsdhk5izPZ29EGuJeJuG99k88zjkJi3gMncNCc23oj2ouDuG7jaaV9U2wQgjEGHV4Wb5EJMrG71poCh2c3x",
  "key43": "jDU8QHdzQELRdYsKwefRyYNQJ6gmkkR3TcxQmcbToTrA3tqi5LDT4rAV6a1Yew5gCyPVF3fmoGNnQmyyc32LDgE",
  "key44": "2YC8WkWWpUaPijhyeKVYwdFmcbEXqBNEWKmqguqzHYPYSakiLEPi9nzLoea5EGpgeVsUy4Dt15yHb418wLHR3f7n",
  "key45": "4dSq2x9qiFiarvBVZ6cye5hMZ591pbEhnBVvbmMweP36bMmjSHBDqGvy2efktSieKoKk1C12hTD4NWdfUBWP4vV4",
  "key46": "2eHGrdBuZYJmwYJyPtt84UNS7HhvPPgHanoATHKmMWqkak9gJ8rRPfChaGuH2TTr3ZXkFpHhiyUVmZpzB7xrfB2K",
  "key47": "2esuHR6jWW8Do7YQ7e6yrjAmd5N9pHuz7jnBfjdkzUFdRatGsRUjvqiEwirG5X8NzbYYphELwbRo5ot4oxYDuShG",
  "key48": "4baH9T5xhY1t2aAEi2rHDCQp3fMAZkBadg7b3AHqEmMv4xhyNtioBrwUqJqWvg97e8y5mteJp4gAr6ALZ28tAVwE",
  "key49": "67cYqF3dMcZzx2sy6G27yYM2U3kTjqTTN47ku8upSJSQAZKtzrsHV8Z8m44oDiCd2WERmk4MdxR9viJSqwHPXZQG"
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
