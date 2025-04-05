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
    "4a2oXgnRWFYxHAx7bcsdC1kzL6htffmH5G82oyLJCX7fH8CnFSYN8PEvAisK8SuRQWXV7hqptrGC23siX6TNBZ3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4reb7nkqPmtmgL8BcAXTahK9gpdGXNvL8mHS2uyLMY9mzd6WBHANae59DnDSDDJC5ZdpraZdaa1Vn3PVb2Sdv6rJ",
  "key1": "5WtoG2WTJ2yTG16NrS59iFMLN953UDUVxCvpJ65sgzAWUMHRf8m5yRqrGuSuNUSeSQA1DZztzwL3Kw6mGMsmCXHb",
  "key2": "61m3M67nzg1C8uxyfZ7i8pjeNVcnEM7poUBxzu74SSymMy7SJV1AGm9e9YxPb6xBo1zNFDpwYiNf99L58bT8qv3Q",
  "key3": "5XrzwmQN6jMoDZ93XPZPn7MnTvwD4BcNN2CYWJ3XPBnRsQjqeR7dWBvPspFzEjLdR8Fep7Mt8FAoVdm76m5eqbiP",
  "key4": "1oHYqjuxSZPoLzMW57QekkBaWDHcNdxeaCxeVgDVy6Y2B6EoyERzNbfKsLoEQYiqy4jFp89Xaivkx9gNuEVQtzP",
  "key5": "4CNjApE5KpK5Ua2BB8X49tPQhP7yE7JpL2PHngLiXHDNrrSPqvamJ4q7VG93k6FNQD6S1LgTwjSZog62kvA9mN6Q",
  "key6": "4cmGWhbZ8twDLnPxih7FiUGXG6yAkfM5TZkvS2iWQdYk9shtfhLtTDcBTTihkLQ3pbJN1Vgig2kHGrA52Je7neAU",
  "key7": "3NQYRbbcj8ESqhCB9jgH2Z5F6sxhevnUJbothbuDxPNjk39YUyYCVgLFnkqRApF4JQcifuBff2jNPiMjE3KyFRfg",
  "key8": "KLbjewz5FgP5x2g5TFW3uh24V5SbBiUvUjDDhJLXrqSiXeK33fWNo1zDQcHijAhyWH3tSfvbyLvxusjRKmsFwhN",
  "key9": "5Z2y6wMY8yE2dCmbbsuBBz2yBx51gQ3CqTnjjaPeoXXNbu2qdhoYoD5vjhPeAEF3dxocvi7MKAm9WpknSXVjJ5mQ",
  "key10": "47NWbMcNf9aFKthrbxVTwXyycpuZaHSaQ1TsANydD1cGKoRjN8AAMmCyNBr1Hx9cUaBXPjjmeikjVgBtXL7FYbjF",
  "key11": "4YaLU1P9wr4nyAcHBtjZG8py4ysGUDdqwFW5ua5C8u4oUBkuHche7wGPuHCEEqiBu7UBpqptZ3SNGjnGYeFvXuuH",
  "key12": "2JCvfqcBUUstzviL95t5xXAVMftR1rZcgpjXLuhc8rtDoTwSURBf4Z5fHfhQyiVhfCRXjRUvA9DVWcdVGNBKe7Dw",
  "key13": "ZGGipEnciLSqXNAsoSuqkADPMD6apbuxTjeCknsNfiGYtuYP7fzKsBQnqjxRtoTgo6JpKyTMNNxurkzsgBUXPC5",
  "key14": "23Pr6jJe5kmLc5db4T5WSrodd6EK1JD9PwVFNayFEMboroqSKBH2djkmA2vCQ3m3JitNoP5GUeaALoTvN2Rfe8ye",
  "key15": "ana22Pepb7dMqPsF2RU3BeQ7TLSXW2s58JJR42DJTqwWSh3ztBSeDpFzR5urvCap6ynwFC3oAuNpWDSdv89fy6t",
  "key16": "5GU8GPqpWpxS1twsaESy7ZUSwjseLL3X1u4xRZswL4mSbFVjCdkgPnDAwKYBgd62zYbwpgLtNJh17gLqYm1zcwsz",
  "key17": "jTr2KtQDq24mu3GCuyWY3AfKiYKwYhEYjuGNBgWX5no9GJEYuaZL9z7oH2wGScPZLatfDp2wtnw6UdwMbzpc8wZ",
  "key18": "4KjvUxKjHgSx1hNMGrvQJGDemW1WkVa3kFAuUQM9isyzRKWHtq6ExtkBzDQ36Cb6yfjA1URkMTX5XQtJf7dds38J",
  "key19": "gi95f71QdogCWTzZR54FAsn2qxgx7ovihkGNrmUpAWhWgXfFb6XkgWBY3i1ESvY8ryDFhCBM78MunZKN6u7eH17",
  "key20": "hgtKFVzKXPvbTaKV1PdQm21ovbWqFbGmUpN4Eh9RBqKKEhgHZM2EXzZCLJLpmcMaJHwD2RALQgbdixupGsYK9BC",
  "key21": "2yQvsPZ7BsSgNnHBL38zmCG3sNKTHcZYbArdKBoCE4dgx59YkZWwsJdtZPKtPbwNpC2ypGkvRLzeaUf9ACgKUgV3",
  "key22": "5KxRhDdWdURNZTmdw2noMrt4Q7uST7dBEfgitZQ7pWF7gXcdgocYkkEXTirmcDXdtBUo3fLHTbdMksLgNmvBQzVf",
  "key23": "5rYiYiVq4YtVCM5pv2FEWtLVYcNkASMo3HXXgwJCNVt7KVBCCP7H4JvZVXvA3ZZYkaDZzFmrPtMA1WW8dmAXP6NZ",
  "key24": "R8C1yaSRZaKdvceWVXeJZughLQEh5mXUNKF78aszRt3cjtfvLrSsro5Ndh36jqSDhaRjqFrMWuYN2wySFsQgJ5L",
  "key25": "5oMMu4pWyRdVErfDigZ9FCeE8YKAnM98YTXTgua1UTr1LMkt5VzRe4wdiVFFgbzLefdTp1vKRfiAn2FvRW2DwACd",
  "key26": "3hQnPfrLLWg3UbHSLHa3Xi2UNX2x3NnbnAz9yCXKVCsWz8re8jHdjZy1YzMzJQNoJeAAspeDEPMN58WozmdZTLt4",
  "key27": "2zRGn7qdUopgJTkRAVKHiQQHQQD1syghQg6E3xMXxLDDbvHgZfGtRBEFeYw4Ac7fm5wgw6Cph41f34hnUnE9EXAE",
  "key28": "2yzBKZ8KdbcRfFMd6hnxe5UWXfQKVobooKmkgjAPyHwbo5NHFi6kkGkq6EdFp2gQYXPvK1Guh49671synnsdt5DV",
  "key29": "2wUKHqBfiBvY3fxgAVEwy7vk69HzUUmDhZxiw2oeD1PGS5RcQ79YeTgnHfyzPbqrqHbfYG9WwLLHH4HZBLmnYiry",
  "key30": "5T6ihF7wEdqPBv26wwQvw2f2JAkPq17kCavS5wH75HMoCNSPQqJBSKdRMVK7HxhCfwrefMVrQS7uQSX9XFBbGKFc",
  "key31": "2ENcWEdFtweGi9D2EjNuYEBBD1Q31ZzWvYPF3YFHLofmReLkiUwn7UVDXbNzJV4LEybzbaTxi7vGheczmxGYWXyt",
  "key32": "DexKdyqEnPFC4fH3m6b3o7jcUebMUAeggxAim8CJ8pjN6PBkwwmbg8QXcqU2yUyyQ81Ksrpt8HsAayq7Yfc42Ua",
  "key33": "U56tuuwiD1tYzFK7WUXEwnht3gENCdwkQWBEFQANDKb7dZR6vnBkEGQ9ekGPKDzuwXkFhKt6H5EWfvJj1NDFdEu",
  "key34": "24z8AFcLxVPUnqJAZVqRoYvMHUQAVfwkbkCHCAAGK4CZ148Ti57QboqsCnrrCE6EVbxpypbgQvMe8PbGogs6XUD8",
  "key35": "3ZjoKfenh1YzZ4xE9qTZ2JNYZTWqYTN5wPWjX1SeFB4DFjuKnWQMuK48Q8mssGuq5dQBdYP35NHFYzrsrY95xQBr",
  "key36": "5QTYRKGy6MWHCd9h3kVivE28ZXx9pBjF8dTFm3rbN73oULi7DyekDrmwr3TM8xWgDvMZJTJYCooBegMFsFjwP1mj",
  "key37": "4rFYa75FKEzfdawSv3vfzcmZn2e5dp3ny24e5a8DFDARVFi9LbS5NUNpnxLLV1JtoLbbWKr8G8mLWPcHxMpYBkaH"
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
