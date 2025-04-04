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
    "5bj24AUiKyCSfGb489B6cHQZQ4H1iWSbSnGUzvvUSBPAuREnSxKBR9ykY63Xo9nEqRPPYPPYxiqMVNPNrtiPyTjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MFtgJYUbYQpnVb2wB7YoZxLshjukS9wq1yJzxe7aAMrgqekqT6iSSjTFq14EzGA8fhYxnbyynLEESxX2MFAzCzt",
  "key1": "5zDCfTFBnjMqyDhijbwYUmcSjVnrfCzqt1LYZVEoghdnmpmapvZ4bGVpgkBUp3ZhAK2Ch7ohTg7Sfsdd8r5N8pA1",
  "key2": "65cKUKB2rKFwkvrqRqihhkQzd6HEbRb1tyw87Gq7GHj3ZLr3daY8EMe8a7ifLc978sZH1fPxujh2twe7bi3DqqoF",
  "key3": "5ZWtm2P5PRwUoVkMRETGiFAxw9tQU63FNnArrfJPXdSpDMtAdvVg5ZyN9pQWnGjfqLMnGLKjQNgfuxi66fEx2H8e",
  "key4": "revyXDrTeHLBn26QgALi5eiYswasd4HErmzkcD8MyTmMEE3kN9PYzN3inr6JZdNegA5U3XkwqTMF7emmK5tr7jy",
  "key5": "9vUWoN1AcWYNVcGpAA7nqMY2fhnZng8qw2rMXD98VGgL6FNx8fKGUv262w7VYtMLQS2L5cS8Dxm4UUoXiL4Q5GE",
  "key6": "3FCSHwgTpwpDRVZHmoWhuh7GvCRrN97JsFcRmTKG27B6Kmt1ZHaSjYVBT78X73R7zp1xDqfKdBCq3VachY8wTHjB",
  "key7": "5sPpenN1R6bxPpMVKj3DzRUrCnFywfgaJJCQ8hKMsu9UjtaGsqnHwwzB2fkAFENG5KxB7pzfjfcfkazYojKAQjFi",
  "key8": "Tjq35MC1J7VeFknWXiGzuCH5bQsqKhH26KqZ2aK3MBiQC5FYNWdcEgEVuPZUMqWautwCFXkrUZB76CG6gR3ZtwT",
  "key9": "4ZTakprJ8XGurUvhBzfDJboHib7iUP22MDsxVAEgVwsdsgZZ2XdfA8CKYhkNAJgUruM3sSkrTUpXzYWW94FjWWar",
  "key10": "2fU2Rudu8NyC1ee2FvwkRCgTBpwAhqzZbV2k75jjkJehqQTZYeu8wA2wXtYsaTLRAAUHCcosrketPqrhn2RjJ5Dc",
  "key11": "23c5aP1LtG7qMKM1MSEGjevfHiZH5Ykdmn3gVhVW6uUDub3x5f33S2iw4qFnTiqVK7cPEiZZ5ZpKGSuSxGi5KYm3",
  "key12": "3F3jeXcNA9STskNYfhowqa5pCQj84Pr9MX4qrMHjTJP3mUMUtmYL9k2A1FW223rDHkS1ra5656cdkDshYvKr24Z9",
  "key13": "5D5CNaKNwMtPQZh2Hp9EM7buqPNL1zf7curh9CnNLpASzz3EuPDVKrFriHnp91fU4KpCq2a3ojPXLyenfg1PA4hU",
  "key14": "yNkidoo1AAQDDzPcYyxqtgFmU6TuaTAnb5TDt7gMSjuoZkpvHd3EYWwDPu2wEHU8L4qd6PE1XtnxvuZyTVuhF2P",
  "key15": "3okAdKfMpxoGrchK5XNKcM7irhuBeMKRjGJ2toHQ2GudkeknNfFxrFbBDjXccZfLanjSsRKmARDo3wate4w1f8e3",
  "key16": "3G81kmz25rYYbcJmG4HKfcgUxV3jnyBPQqyrLrnmhKLRywbrops2seyDwvg2kxyeKHe7JacmJu8jG1ZLaL5BPu6j",
  "key17": "65YLmUC5879scFzUiQKZRagsfL18pqGZ6Hh8nKB4fn7z1eSzCDuP6b1FUunmDwhd2wfVPRCuem1QJbi1g773Fz7p",
  "key18": "a2hS6mPnSzQeqKywCNbzjAcFMmaTpMXfDwpWY5xVnYLjzDrVoq5ddn81GGopoguSyzgKDo4tbfjmxArsrVkei9P",
  "key19": "vpWYTPgno2vgHwQ9DLBMWtaPVgA3g5NgVdxvhV6z45Q3zuQuzkCQNATH4kZapczjr1GzjWUCv9KbhVyk4vCuP9A",
  "key20": "5aVtKmAXF117ae6SkjdXMFQEXS4GcRB3sekMUYQzD1WPagkzwEZtw3guLz2RLVwoax99qgxsUxB6kqvNMFT1oHLv",
  "key21": "4aX9NurYqF5bMWHopz5XhVpCfqArzZ4fmn5JyhdvAQn8yBd8bU3yKDXjSZcg6DdMAoHBX15LnK5HokPaXW1VBqg2",
  "key22": "4HS1q1AQkcmruQdLDfVM4eEg9Y6samCXec2jESZC4VGvUGje699G8Mx7FjxRxxMQCnPRZ2CcNTqCj1q2bmrg4cJ1",
  "key23": "5My2hUGdRgPeFyNo6pujvRSzKGkDmcpiN7tebVhjCi4jq1PWxCsGzjJbW4Kjk2qigoqMjNnVy1msnw8YmhMiPW8T",
  "key24": "5UTc7rHUsfy9UXYp4xjKdVrUpiP96MCeTphGktgptafGr8qiqCGs6cjPHFVsHJPWubvWRRMu8bNqr9tndZZM9zsu",
  "key25": "3wpXu7okv9iYrSrTK8MiX5PqH9sVPdQ4gRMNUMX44nFojxatDGh9KDpR45St5wXFpun4m71vuesiK9QgVwx3THY5",
  "key26": "2xcSPL4jKmwHZHdiYwxSPBxkCZtXmjWJddFo2FSF7BN9naPMSkCcwJZZEeYLv8iWdr6Gx9hUedyBZap8PZirWc6r",
  "key27": "tC6dWzv2LmP31eBYpQJTqbimHwcbz9zWFfhRJvEaTRwNXmponv5gLmHMPUQDfAxKSt4dqhQ4HQipm1YETrdR89G",
  "key28": "52Xvpi5Cy2GJncFsitdvhyjB2etDaMTUqbUnVqN14LEnpMJXtByASaR5PmtE1hau2Am3RAWy8NeRHd7k3rbDbuwp",
  "key29": "23etYR7dEFW91iqwKT1qYSSzSyJ6ehX1zUA9wGo5bb1hwG6JeaShaVeQ7x4K9c3vT7jpsqXJEiFcp9Zvm4AKZtF4"
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
