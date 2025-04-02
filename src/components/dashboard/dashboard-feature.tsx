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
    "QJHTosREnY7QYLsqiFaejcJYMMnh3hfn6o5wRphDcxPEeg3WHLwtS26mVaQmE3RPKYQztUFmPsLKkNtgZzrP482"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yr8BmtxWM4YREbzAhHbWricqcv49WjnB6PxzXNAguxWnZzwLXENTy3dTZ8CsgDskTLhZWx8Nn6T6d8ptToQhjGV",
  "key1": "2erfNjzJEGJ6shWZjL8sAQKxEA3Xg1iLJ1TPTPwKnEPSwDnAA3z4DgvBYFrnGvAFGqprG4oThrpJuvasaDVFiQGK",
  "key2": "5BxwuwePKYc2yRroRBUa9YF3HVPYMjPt9uJ5DeGnFBx6KoU3wRoE8Q3vyfBUkUHWvFNPjR1Z6rk99ZtE4iU4K7JB",
  "key3": "2siNoXWt4dSMKyjdFecRb8xiCtKVyok8mMBzRFy5rpminZD7bUNMTotouaAEDxjVsryULeSe1ZwXnHJs6Sev3Mou",
  "key4": "4q328UBzM2zkMiKw5oWVrVGYiVvjqDwLPG2qkxzPCF8eciTGx6io59VwupgpMAfhXYGdfYgtYwqNqTX8uy2EWZr4",
  "key5": "2tEHmiVhR1GcscCUK6Vhj5ch1pKd5irY4pEErEq56jmUrNQBPQrQVUwoY58vuRCKLBkvvNG93vS4QWHswBcoCDaY",
  "key6": "3jZ6VFmVuSx6gUbNRo4kqPceEfGJ6W9s3y5XCoXDp5LQfraaRpGc2XbYnxya5EfrAcFD7tnzZ95wYKtKWR8yzqLS",
  "key7": "4a5Gv35MjjLm2y9pXbMV1k4rsjaeNUqX3QHokvfrjkpBRGtMBtbpwZhLpwMnEBMS8vfFQoHJQdY9n5dp1PhDGYa5",
  "key8": "239Z4JoKrXNMvfbaUfwvDtzzZ1RBicEb4HYZbruYZmVTncHCZLUyGFBJX8JEL2ipm7tQbkVCpsvEamHJx1dsjqQd",
  "key9": "k2EbDfTnpf8XG6XpiSFr2sdVRonRXwMr5GQxuM4JsLRNA9xpzZ1zCYGZDBp6WFmCpE2RJdran3dhTzMpKNmpSdW",
  "key10": "2CYiDZmzcEisF5gUBxSPoeU5BYU5JCUVnVYRM8zBfPs8nvy62mTSypj1Pn4QeTDWJ8nD1QC6EcAGUgZESPqtXQcw",
  "key11": "4ZbNQFJLFHsnHSUu1e2NygDDt44uknejEDDvaAWnWoqWqvC6eF8P3ArQ8dfjxBkSbGdeu3YKxgsrwexRstWK5Eoh",
  "key12": "5EHuGA4gKfHPZzCSyz9ph37F3SVntwUFUuBxjqUG5tpShkCVTFcFL2bTQmKHW7Tykcjb1GWRRoNnegCtvzLELjPP",
  "key13": "56hoZ8vU9RhHniLetLed6cFFqDkb6524tQt7pnu8t3JMbUFdn64bB5kMVFBhfZnuuV22Smf789PetQvoRG4ywVJh",
  "key14": "5EgMw2AK12KLNkR5LCZdXEw9j7DJTnu1XrE5RrEitchHQkbMX7FDv4TyXrQckxTPhQyJKEMbFPdDPfAtggjocSb3",
  "key15": "5ADzukTbPn8wpqj1zt7S8MxJAAk6j3hbs7sUzUyryqB6f6StCe9NVo9MjxxCxrpSJW28YaLfsBvSgXKQLT3UPbXX",
  "key16": "5BA7e7PheVCnJ29QaHiCbTZfCMMAmm46G5ToMxriMUvmgyjtgBTVPYKutbtS3jRUwB7zgMJFPvQEH2rwu1LXcJ3s",
  "key17": "2CCFdmtHZMKkrMBC7XdiiEp6Quc7F1EydEb2qN6uBKpBC7ZbcW57ZpaUnnp2pxUwadNWyTenHAAHYc3vf4YVranq",
  "key18": "2h21afXKNrJiDzvaEPnAYH3eS5kqmio4uwLWnCrqkmroccXaqkzNCFe54kzTGptHfQmp6YSuN4GLDd9HFFLTQYmb",
  "key19": "2gCwwicxqLuJZ2av1PC2RvWVAGkocmAtuEhMMR12hE7fLz3Wdt3CM13Pw8nc2BndY3JDi5j4qC4mmbTDoHreKU9K",
  "key20": "3JXqTScwNWi7dLKmv1cg3sTzAiBRu28uEpoCQm4dt1Ljxc6PBhJWhEgjuWtHLG9qtmgkLyBAgrkDdAtU6DyT1DDn",
  "key21": "JxsSiPdJy2y1XAVgMh1RuyVpCxGcmMKft1qEjGVkMWRxjExW2RRKvi6bHCoZyWGvtRBKuzNJ6Tb3KQ4vnmxN39a",
  "key22": "5LrXK4HDDoYbd6udPHDuKYuv5aebvzZecM5FCTGV9dhuB2Jtn1pNNYHdHcS23D8xuaB5cCW6ggmbWGpL2pHpfScD",
  "key23": "2XZJyLaHDbVCRXh8zPxXp212TmcsyvKAw3MDjtSVpnFD71y8uNyVBEHsi3x1BzAKSBZQwMuEwEAjvpoUJDUP987R",
  "key24": "4V887r3BtSxR4BVYmGjEK7jLYrAECnh4jZH8iWCyxnWXEvfgmxxdYgP7jVsZRoR8sRwZ2ujkQnHKQwdUhb45DgnN",
  "key25": "4ajebqaUaCNhSDuojiVbffwdCxnEuBZcTzW1fivxdwEQzXSoimmkdZGq3A7JwNADrKYyvveXqxHGfM18wMbqUhww",
  "key26": "126ndGh2PMUestHUNhnUoybHxxbTqWZbzFUAUTfnd73iyPvn3ctHVahEUWUt1iQVruRzGEkz3eGgM5otHhELnNy",
  "key27": "5hdrnHUdkqRmcWCFn35dETuKJWBg9B8GmsCenABe1qsNnTymdwKZ4CC7R6bB5Sz5FYaQ6igyxMnfUayBwD7bqKvH",
  "key28": "2AWmpPnKmVLhx9Pw3JyPCcNWiPP2gPF9pMFRqyZgcEt4h37eB7K8Km9o4aXo5CGPZbzd1JG6XKXiEbpGrcjZ9Unj",
  "key29": "YVdoYhE9vTEHhZtbuA4hvUGnbyeM5DiDZ1AK6RRZ1Mb5A342Fq4Q7rqiV6HbsEWJKBnSyDCzmMmitUWpF7ZugyZ",
  "key30": "4wBi2jhRMbwkU7eXgXC6MYUPivFCvRXQV7KJp12ZQFpQx4JYaiYTV9Rxbhi2De5gRTwMDnygm5U8aqmDS3kQx6o1",
  "key31": "46TEjgFtwagSJFYmRfVBoaAj3nApPS2HFunx1m2yFNtGGKiDUzS8oHoE5BBbiZMe8jXpz3hydybLTGhHJqvj3xyb",
  "key32": "4qUhCaUCWnPtjP9XMTgFEMtvJ9nf1E8iicY6RTkkuBu4moZBemC3gW6WVx4KKMiadP4bcp74bWhGytTMPCFvFUxE",
  "key33": "3wFYHBxKvZh4qYydeUP4iLzim6Ni3fMopfjSYn7bVpdPFq23n6SxbU1DuXC3u9j7Gna8WBDsKHSgTqEBo35HEKiG",
  "key34": "38hKFKomdCPNxScd96bCXmkirQqrDQZmJLcz4unXv29MZrBeZL6oY5iEb2pBiVqQsUkN3FXdSqyUV7f1CLsRLgFg",
  "key35": "5hcRH44SnNEJpePYPQpP4HDuz5UVnwpgC7djg2YmXABCqK4EdpGt7usW8Z8KUfkkf2whez73mb3edrGCfpEKHR5",
  "key36": "4PZFV5gM27FytqMsk9hS4rfWGSpybhwdRKVhJxchDcf7HtWCF2MC89BFq4WEkoYmzUkCPVkFBCHAwvKGVLCbkpkY",
  "key37": "3hFbr9jGJJJWxtUFZhdMyNfEk2byoD7nawndGhP6XzP9UgZWT5VMvJtKpDC7SjBRZxHDQn53AqDdoHGYuQPfYkpu",
  "key38": "37GByvFmBDwcsawuQDC4U2qoJK9eKUv9AY7QUWd4nc5EBQfKMwB4Ez3kAUFPn5QLjrAqPE9ED9wp9nAuCbu3DHc9",
  "key39": "zFTLVCpGPnAyCNjQYaTb1o3zZ5b2Myss3ZiMWFXdTTg467dszdZxnVUqb39f9TnGsrRWTd5942wLtdguPHuWUus",
  "key40": "5gqT4BaqMQiobdPW5WFbZE6oTKrJH8huPpUnvPnnHz6n7YsrQxhLJdHPNcDRpR5hRJuifqTfceuHbC5SY9Mxrx9N",
  "key41": "2eFeYfARTbZxaKdnhRxcymKwpA5qqTpZeRhSP4mUHqem1HKtt5X9Vcga7jGwJSofTcWpVCoVokQ29b3Bfew5isBE"
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
