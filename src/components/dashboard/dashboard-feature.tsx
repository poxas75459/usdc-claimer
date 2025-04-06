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
    "2YGh7mhKdSzkeR6EVtN9eaMooZHZzKJBVjrhrjiHUpydcuSJmGYUk6VHDqdFRrWNCpQiXNtcusc79KjXoLvABoGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BGbJtZiH7iTQPfqVuz1HRwkh2F2ZA2BjmQQiG9bgmdgEkpR93j2jQY6dSpnC1WBjiT2X6ZqHu5krvZcXiFRy3k2",
  "key1": "6QGqMDRasVVY8Hj2XZziAVQ3DS6fXKdc9STnX6J8hwZUn2rVRUdrqGdbQ3bCW5NMTbtE6kkLo9xdPUEkF21wymi",
  "key2": "fon654Sf7r8jye4wQXGtqK114tv67EuZdiLdwXLhqdRSc2tQCDPVuDKYxQBb2FkS1T5tPTnVya4EooKSofSKhUU",
  "key3": "5ck6ArTuWx7SvsqrbzbYxrHkZoc54vriYnazxk5jmtcCqfMBCQ1tcEhJfUM9uyRojudK2RGhzaaJ2Px4oGDvBJpz",
  "key4": "VUTWBvh17vh445XSZDwRQYDjdmW4sLqQfp6zF4U4WwRJF1ZYqyKokBUZ4kVssazgZc1pQnCRkVEXYq25JEGnmVW",
  "key5": "3AjAUkBFPhZrtianjUaPzbxtF19j24SeBKztYugPa9EESzoV6Byjp6AmdwanhqsGLquG7wSTf24AeFe6wib7xhsX",
  "key6": "Ck8PuDUKcMgyZWLyMXqTQKWZtgGsQvmJtnQeAoVtPxc512wcfBte9CqJbuDPjsnxTbjmqmPSk1GGzttaJNYp6fr",
  "key7": "2xedPDvLb759eP7HAYUFLVX66vGkcz7N6g5yanbpwfKFDZGsVMkRKkPvUrHQa1q9PkpVp48Xg97DHSnFiTDFkEa",
  "key8": "3CBsr3kjP8f5vAi1PMf1dutqibZDpvypHTmnSn3F9QXCEwRkcEjr2ZmrmMbY2mLNqPvF8iJNeRTn15Fz6qNXXm2F",
  "key9": "5aVPvf9vjQszPT8PiGW3Yf6HAJZ7WUKuPrnvYWMTosqZmm264D3HmqBwLwhVwtWWHhcQKDxLXqvn1boP2EueNgei",
  "key10": "4CQ77UU9jrTbLETMqq7cb2zKN8phCti33TEshS1fwfDxNTjGjMQdodTBztp1Mq7RQxtoGC4XMyTRPfuSk8sWhj3E",
  "key11": "2zKwcjsGmSVNY31d7a5mkDfrKsSqPJoWZrxdHpu97tiUX8NXwFoZXjqppBAzvicTBBaNnPVPPxNCuwqXMRqSgC3S",
  "key12": "oRzTbcA2T7F4eNKZbh8wdhZYLDUh3A4P12ymrbU1pwhqZqfSNN1kLmNYMbYSRxBzwoTyp5fXQ6NJDLWZqP6Df3b",
  "key13": "2RTDnT2BSHzsd1AhVi2fzP5D9WLCmtakrgbTuFMykXJAyccGY3DUfoToTpo26EeywTVVCfFzn8bnvN6bzqizECB6",
  "key14": "43bGZBdHbisuY9x7B8qvsKExdtbwqjTHmi3MWvf7ctF9c9R9zKjgqz9eNcTtLYLAFCRrnPrzF5bgi2P3Y5YBgrfY",
  "key15": "3aAARQ6Gdq1LqjnLRFz2HYogL3m59hiVGh77dr9nJWnTiyc4dSQth9s8mqwKJjV3agTgT49q8SvXfHvgdQyJLjty",
  "key16": "3FsNQFYvbEre42z4LMZnEKbY7XJ6qP9MmfcRxvumdMm7uxShpNJTPtGQAGkJV2wT8sQQkJaB2dSaVUBJGVQtfhiL",
  "key17": "3A157M6spS6dL38yYnabYieNgqbaj8C2e8Y8UKupAfq14ypsaag7RGGutz3JUX2k44k93pSz5sXe1PfeRgBYxzR7",
  "key18": "55RaZkRTcEpzkjPW1FK5TgYFmgBsnwudXALc9G5yqSADURv6YewUAatEfvgbGgJe2AS2PLtEmGD7MJpRZWCu9PcJ",
  "key19": "3zLwrGzDZHot1wYmGfWyXiks1wmKuHWG6ThEuj9FWbN3iJ7pmDq6RyJF4bhcNgoJNA9YQw6tjg4ZzcZ6psnReEmJ",
  "key20": "4T9Ec3DyujKxUGW3PJTxVnB9TEfgoGsEP8FQYEZJ78K9QPFC6CxkFengk8G15UbnAkz9RaF8R4b1s5NN62x2gm4b",
  "key21": "2BkfefyUvKqEssUcGbyqk9agsJ7tyhX8z8bizumhwsDjKx7dY5ZcB37N5EJqjs4qSXfMA7fTP4Wj7YcKcfP6pLfV",
  "key22": "3ewbdEqJoHQk6Uevn4FEveh86nwUenEsdDRB9MnUxW1Yc6rtvKgtyNKDki9Lm4fnfYnqYc7JohkH77zrHiTuWRA6",
  "key23": "37M47yCwy7tnWWVNSFsAUBtLpWANHDnTuTfSpJtYWKY15vbZrBvNfLu17X6dVsQe4HJGpEaBUhrfh87Nopt8zs65",
  "key24": "2rwvdnosZcZXZpGT84tfASkreZ3UX3wGxvWtdm8rhfMAAuxk9A2Hjyc9mmX1vFuNXMEPWHrJcqaZ6z3u1vSj1CqV",
  "key25": "dCY5ypgPosP6sYgWLyWTDAiRGJfP4WW7TcjtCGeswLsufkQ7D446nVsprZuyyVKK3bnQQGAxegqGcpK9xhqccZo",
  "key26": "2hARgogNVyzNtZVqJEbWrF5E8NwVGeTW7ndzpRt4ang8Tnbt4q2u21iiJSbdcMEvhCJbLSjGCg6kgw2XQ9dDpyoQ",
  "key27": "fp79GgAvM6JN6XPNrMwgwmBY5JvUe6gdXKfDNTErpCkBDxwVPMvRks3ge5Y7nSBcUrSYcww2KiFtiBN18CBrEpv",
  "key28": "3YQfUvK1JDZmT8Fzdceu7VcBkcxhwMMKMr8UEUJ5Y7r1T1LK1qcDmfAw74Td9cSKpPVrp8tFyPW3bFyN1771iQxg",
  "key29": "2jd1KgJy6SKKuPU3ELBMUaXMdHWQVNinXEGwi7SJsLavBVRW9faAfxWuEY29PQ1G4YwKwVkMVYxVwrxDqQDT5gz9",
  "key30": "2SduW6NNABEjpF3Uf3nSCZcAy3m27P33CcdAaBG96YHzFKWCBqZbGJzZ9Yf5Z4EhZXXsiRBtzgKviV7TuUK3Vz32"
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
