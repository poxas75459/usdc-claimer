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
    "YbaKM4JEzb3qiyAgnGZxDpEucjb2zUYrvQFxJuEShLQzN83m1bQSRhxasjzWwoBtKnhTfLSdojzNW4yeuJ9RVov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KQoxUSjsSmtwhZ379Z8VjhGvD3QRWrf1XwpQQWyyYdUXzhFoCbcSS9FX82xoVvnivYVwqdVFf42AqUnqmdqKope",
  "key1": "5VhtsW5k4auYnCJVcU9Yz4waZwfpdpsPjJtqn7vKy21c2pB7Zuo7n9YG3UzvRw8swcmmJbZeVG3juNwTmi3b6nBF",
  "key2": "4YKETUeGzztyQPb8Dj571SRUVD7AnHXjKnmTF975QHXCsxhAguXQQzfvF8brgF3ymjptNwX4dCmQRYuhF4SfzqHR",
  "key3": "3SzDR6hXJA7wT1vRHKR49D7PDUBNNwBvw6k7aMTHUf2P7KEWB7sDaEVF9N4GwAQYGBsfHrBsVCTm7fTczTQHtEZj",
  "key4": "4rtzz1XPCi3pFdjrM7KKHxPQkVwZwcy2qYRGXn7Co1m2a8pff939gbMgGcX81T1UxzbuYe5Tg6oUCKQPM3M2TZpb",
  "key5": "54dvmBH7AoBjcJfxkyTWPowLRcFhfmgaTABYzkipW24ceyeiGinQCaVYF7BqSy4ph2YQiVatjp28czZkSswrBu7x",
  "key6": "W7y1WE7Ka63T7cnTx3hw5ij9oQUugeMeFJyxShrk7qfFbPTEfK5NXBXwuqu6fg6w919DmFE4cycX5F6YgTHz68r",
  "key7": "3fhUfvfrFhtS1xw4nmhYKK8gn8pFRenibnq3MpKqjNzuxJM4jwqQv7aCRueoZDRpmbLL4Smef3VAyJCbJUgDnTLv",
  "key8": "5NsPaiTrpe728nRcb7D6tGW36p3T4MUjGgGwztvdvXZjQ5TPepzqVXWFi6FyH3BS2kx7fMvXYZ6QfuH7aSj6WrB2",
  "key9": "21QZWC5xfszoe29KpFDFhm7imdps8ahAGdQeqa5CJDThy6UiRqkrXDZs2yBeFcACNVYHvdqaMKRzetSrkpSiEgWt",
  "key10": "3dvjRqz41hmrt5qQfab5oMJBd1MmXfN1SpbY8aaBHjsjNnpFTBq9qrNzyBV2Hqc1zrQnpXEt5RLzJFQAC2JCSt1m",
  "key11": "4gcTDNW8W7E1ogPeCFZ2nsTnNBLUxt6y9gtNySo9ynLyQ7Lh8hXKxNJjVyJTvuLnWzmKtrCX4do88m4JYrYvq5TF",
  "key12": "4QdSAJdphWw7sXfYpheoiXJfUxpknmy3jWncoXW826YFTYzJqpCiywwct8m1k7Awvr3YfficnpWom7vURhCwko21",
  "key13": "4AeGsu7EyuVodv5JNjXw2e8fH6xGJ2XZqGFmagTZJuF8PJMFnjg3ik8eW9pSiLB4SngFtqKdRnemTPxYS2CPJZdz",
  "key14": "aNWMM1ZPGAkDiBvCWZx7R96HEf1Knm6PPzfXKKxpZbm5qES3G3ENvcNEWQH5xrXQft17xPA5VdUZBHbvskEdiYD",
  "key15": "65hkkenEMorh93EniZsLJt2QKFoX7SGvMRnGF6JTmErtfN16mGCaCvB41wHjQsHXxzuCxW6qjMYVKp1rb5U5ZYt3",
  "key16": "3QVappkSL3fxmtsVonbfaGD5n4sb3mMocCtNMg8g3n9eiNp6QbRaPTQvoPWBKtuSeuKwJN2g7AiSTXTcqziezXij",
  "key17": "3bya67pRcgSHQXF3HM79R6FYsaaFoTbBevGd7sJReURTqzLBJqgUdMmrUPzZxS7CawW2FshLtRaLbUKBKVDramRJ",
  "key18": "5q1SZ6wq5yvmfRX58zp6YMoMDbRRbk28BsQbo3EGPorfKrnSyjDurnGz2QajsVg63s4hBsKUixBH3sJxvVf5fehe",
  "key19": "5vWrRcq2rvSxsDFeZEM9GYHX2uwnh21RChEfNHUvdjpwtNwknX9U58eDgKTjTgT1ZqFqKJcpj2brMm57Tyg7p1gU",
  "key20": "2DgihVJbYLaPmAzBMpejPH7bddJ1TxYNpSLczJeczE5oQDjeLnzEfPSJN8qpNrLGtTjWnKuCTd2UKqrMkjrpVRQK",
  "key21": "3mAG4PgExffisq7jS7Yo2nXCcycFyLSJW72pQNPJM2kZhipkdwcRqcfHmjMedCDsA2S6c3cGpU4hMT3ZLQXz58cR",
  "key22": "Uc2imTQU49d2hMCBZk7KFhTp3TEG7PZZmEwkYEyfkyKMgfWCcRbAH6wwtyGBKiWDULXjg1Qr6665F33j6vTRZ3C",
  "key23": "4QDLL4XrrB6pBjkgTufFVnnsY5H8F1WBYX2stjMvDyMtgwn22N61RKcgmQvniKGeTwwATfuFyXAtHZSrE44B8AUz",
  "key24": "3tHY3SRsJY6wFURTTa8Gr9HddsMmaVVTyjyWmQczX4zWhC5yHrDdn11exF7gjatDqdkpfzTH1iJddJbvARZxwVKd",
  "key25": "2ogHncuRAP2rUqK9a4uPQ7UaWwVT9n3Gvoho6L14QJrgaKd78qPi7oP4tq4NbkwYZi3dBsbfGvMq51qsGREeGm3w",
  "key26": "65FnhVUYFXfnk4Hs2k5SRPiJGUtq7to8bDSjDzCyDTsEPGavCQVyjEBKYMHmGXiVD3KkNRFUbVj4Nf84PcTacrLZ",
  "key27": "2syLY77jUxm3FU7j7o6zTfq9i88r88TfvqhaFgnrceSarRXDjo339AsZteg9UdSTtX79bKrPbTJkoEBipaUuTd4i",
  "key28": "YfPSDGZbmyf3HuNTVadNvYCmMTdohjy7AQDNCPor3BuRKJqEJnFaa6tyMvFmskUUu1gYUaqypXKnsWgcBDMtCUb",
  "key29": "YfjDZHgZQFJo9cpX5p3qixstKWpxrUHFnNv57HHfWKxErbu8CKrKQ7C2fdn5YNpxvNquBkoim7veDjcGhUi8UJG",
  "key30": "52oQGLiHPtSGkL9SWWjgpXLpSRbXZG9v8LANkBo7SpJaUM2qAWfBt2b7vndKdp5zAeLwQ8s3ZVrwLGEGhcCJqkyA",
  "key31": "5R6vWmgRAKBzYETpm91moB1v8Cif19DLqgL9U7xBT3radkPZ7MU524ZRg64PJ23cQDHfALpYhHMvHi3Zh1AzyV5B",
  "key32": "BP1ysRs8i4MBWKRHRDfFmPrHCrLHXs1VTCC7hu2EohH9DDxafHWRrJfVjkbGg6ZJLX4Sc4sEhM7DWbr7jBqKL2J",
  "key33": "3vopQTAqrGBR3gjiXGMzmrRmXqQuw7kyPJZr5Ra4HgSyhhd3JQYuFGeHC7DaTRTEC2cZmDCVdcNgWjf9WqqnnDTn",
  "key34": "2m3zamhgj34KKaej6hgRffRXxj9gGfTen3Xfmw5sgvTtqkcWXWR77FxgSraT2n3KSUpGZ71EYGyhBab5misnfyfT",
  "key35": "hbvTZGeDqsNZFd63uonGaRa5X7UiK9X9eYHR85PNbNzjhe8VbxgHLgJwumy5AZBKooFwefv8hQJaRvYBXUKgVPf",
  "key36": "5Fgyf2mpvpi2VP2ekSKfYZDiJZf8xABu4tnkWi4cj8qatF6Cz76nWzMPnj1MoeJDJenjP9rfeepQRd8w5GKwaUcF",
  "key37": "5Ei3GdYBEykiD3MRdQnqixCX2Z3gqzhDJAES17axbNmkuyKDMRn76YcjrrsDduUkdC7FBfuzmW6tBTpqVq4Df7gT",
  "key38": "4WtNrCjZubjngNJgL1BJcWtQnNRY2mJCbEHHnFBMcz7mb9yaKinUdZpiAm5cr8pn46mokszYvB9sWuNkC2u3uRPa"
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
