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
    "67Ht89b96NAQgbrTr9qm9Wf4f3rwVfScx2TtjFLGCnMwHWYAxaJPq278fpa6DN8nfv9PqtTuzQgi3JfNV6qsFdcv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bhz68Pdx3ENqyit1PBM2Zkow7FFjB2TwQa9zz2h1mDZgQtFdVKwKndmWp1UEDMA2Px2udZ9Jz87YAZGj2RDhU9j",
  "key1": "5jW4dAsZ4wNkJvDTqq2oC7k7p87FuFVHCX2kU9JY27ESmJEVWa3A4gmbwjm2hiBx4A4T63miZ4JXVRmu1mBKYNtg",
  "key2": "NqJJj67NreKsLeqmcsh8tSiRUB86HFLBA8Pm2iGxCYp2Jr9xdprmy69Jh16ATMnhgYfJJv7pTSYAezs9k4Dtran",
  "key3": "4KYpK1c9ZAXVjYervMhc2wp3xMThaN4nsNmthLPqsnkLHFauwif7dM23GeLTCTmY7ezMbGT1NuasX9tWav7nbrmi",
  "key4": "5qTnqDNEw1J3LBBiAxjPainwpCmC3ZVPJnXBe9jS6E6rKh73ouK4c66icCxgFH4CjtZMiUkeCHYBhG4b7tHc117y",
  "key5": "5mLTQs6Veu3DTnpCumB46GmKGKhqsEFWa2g6G2TuJxYDHF2WPJ8gqnzxSzGyY4QhMdK9BdaQxThJ8mp6DF9WebsS",
  "key6": "4CqutjPfYYsBG4V4RyJw82Ac1Vrotq7ubsruT8wxsKcW7Yp8XMWtmwxbyJ1eCboeEzLt4J4cy4RnQGEGHfzfLPFD",
  "key7": "3DWLTXUVc3w5UvSL5CmY9fPh3sAmEZMfmgPbUGiQH4fqMqSD3n94Pxctxd7waK8zsCFfkUG7uhA4HJGGGgL4nHz3",
  "key8": "5wiZygZKuShQJyqhJF7p3vW4zX8CD14cs9aZyhh71agTnNbdiYff1eZc2SsV3Pn1mR6KsZRQtLTWAsGDrcjDGiMA",
  "key9": "UNjvHwnaDgx6vCDUA77BRyzYhQvqpUt2QS8VeNAdsEPxs1Vic4heAsPo7nPHKFMQ2r9gsQJfnaN6eG2jGefF2zZ",
  "key10": "55FpiviMni39QXK8aBkq1KfUTN48NsZwPxTcfWdBLJQXJNXTcQJqWi5a8kY9wJd281jzNLw4y1ca996hFZWt2Dpn",
  "key11": "b69sURptJHzvA52mbx8JWgApHgHiZjSzMfrHzyCmuWDMgUY7qib66G68trNWZUbgyXcX3YuketKxwcRRN1GVtJ9",
  "key12": "5FiJAFBhNXA1mv6d9PRSaj6kt7REC1JEw3DrbXvuCr5taFbQBvjGZvgRY2xZiVB4yk4hHuW73ufG7mpUpegkwskz",
  "key13": "2vZsGe9PiLhJE6FS8psc7fn2TfY1Zj2KAggs9fEfmc4n62rXdLZpsuAxXwW5hrWqN71BnSkhPmGcMSFnJyBEzxcx",
  "key14": "kP9YZWm8BBHrqZEodSWcsTdvTRme5o2Dpcn1C99gXYyJx6vYret7cod914N8WwkKMjNPP9QiQiHcHyDZsJeHsLK",
  "key15": "2FudyQ9cwUAUaDQwAceeq84Xv4d7E8ozYKcKfXYRiNdyWJAYcN3N1g6ak9qq7ixu4ct12i4sVq3xawyrWuUuKtC6",
  "key16": "5fuYc9Y794NVhH3XoX6AUMBjCaZQShkur53joj4ca2MXEG1JDF4tH7mRK1tnqHWATn4NYLEWHdQhwuHP5opC5uqi",
  "key17": "23gCGQwGz7NHm9SoHKhhbfmiBL9SAitPc5FTDCCfW87WML2hYFKvJ8xVHSALucYPNrEtw92Ju11voZjPrw1fihjg",
  "key18": "3uKUezokjTgxgWYte7q4Q7Ee5cc6fpPRKMygu4XDoX5Axp2Av9gaCKKGc2az5JvjuVbwsKYxdiF2YVDYSkZQPZAb",
  "key19": "ATt6QmTErvmq2j8eWh9uCPrguirjmae7cRhSG5Xj28J9YgsSQF3zCQcCFEcWtcaSA3E2jVY5cSqPRW1UjWXLXBh",
  "key20": "25BmXdZ4ZR5kmAnjNWkn1tTCFxgy3EduTKr4cU7GbALii4exisKixG89MCuoHTvgvM5xWXEmQwbvYi7eTkEj5bYL",
  "key21": "54i2KBnAaPmgTsVmsR6CNo6Uc6iLLGGaGdMNwFCy7JoYebQYuBbzr3gVKyLnJasFS7PMmuYijWW3onhu4QFs8Wan",
  "key22": "5JiMUJMJva3fPh12ykb59tXzaeLtztRsQfhX6WPxZkGBuqghhismsjmLjeooCQhusb13oP4MKzTJeaV81c75C5Ts",
  "key23": "4HyRG4xMbGiMfADUygTJdHjfUBmG8eTDHQ7H6af9SmH4MSMcTWQCghbQ2b1YEV5aZZnR3bTceWhzwaQ4hkTcWUPU",
  "key24": "LkzoLJsQFy31ycKxRAiex8QUrEtqxsUSRkgXC9M7B98FLNviRd9zZsyZskJx2L3wfZUoxaa5nGsLBM1bnnaJaw8",
  "key25": "5Qa8CRnE4syymLX5CZAZrSm3sVL3c4NLrc7rizyWZDPJsnP9AkAdKZoiDKiENA6JWjshdU5tWXbmcSeukoCoHVK9",
  "key26": "3uF4Pp8GNFYqrSs34ViZyqBEugdCLc8nvDWqKZFrgYi4W4u4R5pghSsSxJVVRDARLBHoF4UZbeedhkf5gyBwtdva",
  "key27": "4gsMHPb1vkAhFEaMMC75KXDGyaukzq6BTvvw9NVyahBfTY7tXGhvvhqsF5Cc3fzyRAcsKfeik7Ty2dKZGP8zz1qX",
  "key28": "5XYsq9EvRUXyUBwAJFM2thKCh3eMnXmmX3ZsB5yCTe5UAqoMqSjoJJ1CVx7GC3kGCLiZf5Dz8YKumhDg348bCnJy",
  "key29": "3RCaBJNbbTqdJTxwvyfWPXwrC48U4pTAZe1EuwRWeH7BUrZ1q9PWceZCJ2rGzC4KUtQZEpjqDLKMvGubQEM2VX8D",
  "key30": "5c6WJFaG65XYcJLLQDf6wb5piMYRiSB3MgEqemd8ieBS3gR7sCbcrsTw74ymoazG7mDtsGdyaRZJZNXAraFXSbND",
  "key31": "2Gw3ajRtWKab77MAmrxpQxo1Fad8tHM83Ahf5V8RGMTQeLqiwUSvaBAZ2ffjoRgUMoMyrE57LjLtK2yHYPZ7SQ6x",
  "key32": "452X7uWpkA8g7xircL9TJ1eCWybR7Y335h7roFM1RMM6LqX5VQrwNqDLrmUc7nubXyS8ztbqdNqrqva7cuR6uCUd",
  "key33": "4evSQBTpLAGKFunRK1BN3wHDXALW6hwbg5S867X8stcoBmGdnLAx8PRNYXcydka9R9qipoyTZtWJBh3kMBSa9fH",
  "key34": "jRmYEtSG9Legrnxc8rTFq5HJ5Gang2XvAgPprU2r36n4D6rHXvJn6LszUstmoAwAFdyJq7QBXKShSRpHTzkEHx4",
  "key35": "Kq5kjSnWhXdg7f5roZnT4UxjNz3GKG3FfQpB2NN14MW15z7P33U5nUefJ3GBihQPt3qgjX4xyqQJykupDyxrDvG",
  "key36": "4qMBca1Q8pQtQ2oh979raLRzLdSNBuwNTRvbGHa7a6T33s3StE31Zjnu1XzEG7B2mBPtf3tCpRvQQ9zhuitYzfQv",
  "key37": "5Z13AB946aH7wqZ6nG3kW9v9JE3VD3jth596gkhcy7R97d5hKj5hENfyyk6H9w7K5nANQ9s7MYs8qEJCHEHvAi4R",
  "key38": "5AKgVqEscErxYrXJ1QJcziR7koQedpPZgge8Ray6sMsR6MEcfNovJ7AikjAckbTjEnepzuZ9NaGMFp5RihRrZbfc",
  "key39": "24UpwTtjpTKyNXDfSZPvtELuXjJsRrVDnKpZfFeTZpMhKBthVWhhX8h1j7dmY2owkNPzrAV6ZqfdhmEbByKcG1QR",
  "key40": "2P3PgN2Toj7DkWz8jhuAxrW8ArmEThxJP9TC2Cb2tHZoGb5i2fj2e2Le4gdYSuQ2twsfaVghTA1KRhmzp7kCRHr2",
  "key41": "q2CDF3rqaNxsjivK2xJNn9Byyp6TXAfwsjDHqqWBitR6SJoXuQDapu6ypHCzVA3b3aPaNsQJCQXB1nmFY6Gjy35"
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
