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
    "5kB2sLezDDkLp1Sckis4YyboNi26sN22j3HJB2bwJxnHWJAYhG1WE5MZke82E4wKSXPT19bKTKM8d4vNvnrxGsdm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LuFdxtsJtPbuBJhfmG2UW4qna8QxhRfp4cuk6JS3tnvLKcwzNYrfEgjud9UCdkbjn6JVapSM5cFxGpwwikbwAKV",
  "key1": "4iq1hph46YWwDCjJiso3v7bSgrF1kE159Hy2zgSRhCVq733j9Ssc3qHpaLjUFaXBru8bCtSX8Tfsrt8PJJwfTdPm",
  "key2": "4cy1UZcNFVGUmm9W2H6Cdj4ki5rdkp5yg3sVCPGds8w4xVAfpoWx1NBrxvWH4waVzynPQWdJZv1mNGipcytJutQM",
  "key3": "5EeHvH1cyD2a9ooF1qhqpF4pCZzsWPwhXhQTCp7hfgeJgdomgysUxPu9yFLHAFb4nUHqBUFdcymjy9trJhnEdhGz",
  "key4": "3vn3nbCx9LeSRAoY2gGoprhVL3KHRbsfuVX4uDbpEVQJAFq1PF4XHzJensokfiueXCA9eBaHsrGHTV5MwTqSx8wQ",
  "key5": "56euuL9tU834cUssbMLZxwaSJp7G2uUkK3wCpcwiTjPK3zctC8UyF1rc7vjabKQABRMLLjkWsoHLakJq827cU54p",
  "key6": "HbZaLwrdNxBnFDW9kyHbtAsZ3APT96DVFZYxPdHiCk2ZKk9Je5vbw3wSpiKJWr4X2dPxAPNBH8ARS25X1CPwvJR",
  "key7": "5w42Hr88arbCPQ5EAbXxGyvqPEHt5LRWpwsCK5aRPAt3VchUwgE9zzkdyHHqazj9HF2zCSehvmi2Z46TrqjJ3Ss1",
  "key8": "vKWNTZhnJ1wdajqQmswBqmLDmtnUkGjXk8mBW6iobq3i3t2atkmmW6184Yr8femtS1fjdPhtbJ2t14wCUHSQ72t",
  "key9": "2ZVGrATfBhS4KxtYBJnJCvdoQ2fsrrCyD3ZZv9QsUGbhGam4wraSHr55c6XeNdqbm3zWXPJnV4sWdikDctiuqNKJ",
  "key10": "4P7E1M8RyDDcLdcomtr1LkjfNuxtNTNcXiQq3oLDSTMNwXbCDRpDvNS4TkSaVv5TSSvSxKgJcmL4e4aGxBsFxABN",
  "key11": "3p2PLQYdErZfw6Ka37w7G7vnqGS9novvSLtTYqVMh4cfnkePPQKgmqmHxSFCa7YiYBVU52dWtcNXCijKirUxtUti",
  "key12": "3YDSCVd1jMBzwJNWkQRsCgGLBYUx7s1jLhxDsZnQEtifsMKyYuKF4uBPPECPXkse2ik4rjZHUZTnpZJbm7cTdeUA",
  "key13": "5Gio983P8zjCuDh7J3kPgLXu5yzegsujrgSHQCuyUdZTtYfW65Dr2VdGuGNEa1ZU6Sap8nQ6eUPDzGNRgFW5oPcf",
  "key14": "5QQfvwfKHXuHtPbKumGbYTfBkqvC2F1xeFighnZpxNgJsa7XD1AyXcVfBu1Bd8t2QXBYoPN3QzF9e8rR1hTjjmyQ",
  "key15": "EPsCEC4aBznVirYq3BESBuZPe6XqpNPFzf7RBM3XvBKZfqMN9xLYcjDcq2Mex7Yg6H7Th9jCfiu3o116oLBPY4f",
  "key16": "2Dd5GbQMs9qW9rzvfaVQh5gDBAyinHhTYYhUV3r6Be7zCBheueaioYUnvaaLGVdxorMEBJRLTQR3nRFWTNuNDNFi",
  "key17": "5bmUgPtrg7WDsLyN4GZa98AnqEiBpqRvuW8wHnL9J8yEXQvkU3aBzPiSc6n3gcuCvKpFMHa9KB9WbraDDZ7WQYan",
  "key18": "3GBweqVac4DZJtfkvGtobdmLQUhfZ3XTyHmUQirLtEE27wFgV17HED3LS2XFAe2N1P7w2mxodQKLVDdLTR5wwEa7",
  "key19": "4z1Ajj1vM7S8M2R1YFHuRSqj2tsZzoaL3UxJNA1mic1zbHdjTB74XThbaT9c5R8Q7p3TBcJ3B6ktWJneGdVTUze1",
  "key20": "4VkxQegB8FCkVgxTiduNjfWWrQS4JPzjpXNdAerk1UA6mYD5ayFjoMe8VTfwsiiuoKGFaZ95JELztK11p3jn3E5P",
  "key21": "5Zkp8AZu7q9MGvtGXw9djJUpJAbuxBuP21yUMdqtrw3Z1HjoTmr3ZbYJ5HG3SAQMme3qGKYsvrPHZK8ZiPyFv4bN",
  "key22": "5vLGwpqcS62zpDGuFmhbRG2fMa8D9oWT57Yk3PEQPxspP2upenAKPCBoepbkm7s1TLb2bWxfx3BgUjsNmuUvyF4i",
  "key23": "553pDt5ed7Xz78WinmSTerKb9jta4EP6QKHxHY7p1JrLLzQPC7Fxr6RXMHmKaxCEfHoEPzxyrHSWqsLwCgjLbeUY",
  "key24": "425f8qM2H1xBeME3RwZJfRTveHprCFQUDwFDfQ5JvWivhBhbonvMdRUytbEjtZvFqrjwcCgeb2wBYAyjuHd1untx",
  "key25": "4UHtgqEjRSPDTMNSnPqXLkRcRaTdkQxcFywAa6Ppa2Z7JDaeDFVPeDpwQeAPAMvyFLiA4yCiRwRVsW9jmtk8PUNo",
  "key26": "3qpy7HicUsUpZrUnKJQ7FCke9bSXpkuu4cLupd9iaLPeivogkMDV1fdvpvwmr9TNRWEamz8kpTPNFjgtYcLp1d3v",
  "key27": "2yuY6uSCGoMpthQhxogNMKPRo3tEZCYGpCzja8FSwLoTG2oc7VAkieHhugXabUiwNTeYc2bDSLdyuFTs1B6Q6SfA",
  "key28": "2Aj3vTqtcjqhdpU2pF38FDMvWskq6mZVmJXqKk9jn8BR7HCLWYz3XfuVFafTzqgJ1oJ4NeGyo2WFAoBCuNWGtmKx",
  "key29": "3hJxH7fJ68wRV1EmceBJoa9yc3ufGQg9KYCZqQtmrZFokhKAQAr6F4AZtuLwrNkygtarqifUyYfNw4GDRw1ohWkN",
  "key30": "2iFy1wtKAVDa2EjpAMZpWegjsYAMV6zXbVcNnWtipfM8MvCkKuQUpEWdEGrDPCrnNFBikxT9VonHStDxZHhLH1GV"
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
