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
    "2TttKs5ujXQuvHgUsCbX398HqDgArdu7a6wKsmgcyLWbmy2NnYJLSTgCVTBm6XjL2hfWchZjao1geJquirXvXiTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xZmogKkHhZzHKXCVEaFpCqHuH4yan3RVcMsQzg43VFu3yaLaT29zeUEL3tBsc4vcjouB6Ta8YpgafhyYuLnP4YK",
  "key1": "5yVuhvaG5woGbKDqxfsKGLsEPykgCR4JKaosadS6hwangJjSfEbgJZ3ZafJsTrtTmG6sJfaEusJ7JZ8Aq9kLm37R",
  "key2": "2X3exJot5JZAAnRSARvJyrKfx5eVcgE2FsXmtXWXi5FiCFeVpixca6ZabxNKzEQdZZUa6uJNSx8q5wUXtnbGpb7W",
  "key3": "34Dpwco42nHQytoz7XsCAWuYtsG9T1NR4EkA5vJgnB23RzUUFBkZu5qjiw91ZxLFXaZcZ1xrrggyaWi3XoJfxJJM",
  "key4": "av5PcretTPBqPdrtPu3PbCcj4zPAe9kPDdXm4G1jGmokBUJgRsTE4EFXM2joCoWgzc2JiY9tfN3ndJ2dPX77w5C",
  "key5": "PV7TczVQTf7oqaL9SaCLXCzbGg8kXvqvkPD6Eh2zFhxK1248KAe9mVnJorThXdh7m5fi2mCYVhGLx44pGgP3UiN",
  "key6": "4Z29KTy5suaBGNuNTG2RKxpdYhGzwxxmqQLBhFTfBPmaADE9vpG9t5c2DCvDseLrykcqYHMp5Gh92KhCkSrzmUss",
  "key7": "3LEhMWL5unpMgpyKEtR4xyyi3hEUrNb6YJd4RzD16XCS4ExqkjBe3QpKWWF6fZFcg4o9wP445A2xPot2wmijSNAc",
  "key8": "5BSwb6J8rBts82de23S6bR3v1Wwhv7sdRJautKsjo6sudrLpdMEkqi215qxgSqbrLz8X1BuntcZouHBNgbkrTP37",
  "key9": "2vpHcG2y9EEc9dTMqBdZj671MW5pouJSWax2KQTRi8pLJNjamXLdGqR5TnxuDAdjzy72E7jXxBQ5UikcoJMa2Ep1",
  "key10": "3f4iK2oH7TvQvvq1YAP2UpTYqRF5HFa9Gav3Xi3vuR9bkybTvfjJ8hjqKvH97zsz7J2wTjoY2C4afHScvFuX94o5",
  "key11": "5sm84RXx3cRKDuvkpKWcrxxn6GqDx6SzEtJYVoBRRJHn5rUBWpJQwb7D7cErPS22aMFiiyQjAHTm8Udijm2Vukdt",
  "key12": "4NuBwZtXMzDqmHEsfq2NqrBbAttSP8mcBYZMojF8YfHTXF52CVWtSKwwNLp5k2kFqunxXEwWwFtQtDTr5FJXrGbR",
  "key13": "37oEeJxJmP73pPNwY4ryswM9bF8YME7ZWFdmk2UZrXzrDryeufrox4FrTjSnXyotrXhwqS68esUWMgcj4Yubmqfy",
  "key14": "4gYXWbdaK5meXrzrqmtPrGsnGdMATpGttHuLcqmuaGEjopdxRvoqfsYeJ1CTrXNvPdzbUrwALxdSwYyhP75R63Wi",
  "key15": "22PqEK2WyWYKRcgSYAQQoTy7wa2C5vnbjXvCNSnwWTRKZQxBmarc4PhCzkbMnn9fcFWXDJhUnVtb3YwrnXLUvfBA",
  "key16": "2bLwogTapAoTwjK9F9SU7h6QLa78VFgFZp9HpqYKKNjEYZTvP6FjbAwyG1RhxiSpVFYCiveZNFNufBnQPaUEGWsZ",
  "key17": "248gnS5sFqX1LMijeznyrvGmt1isfHF92aSuKAN19BNy798kuQ6hrWCvVpY5LHTLbPuMngT6oduQ7bUuqfSGTqp9",
  "key18": "8V2WyjoLaPcpn4SFFY1Y6tXqh818tTMVo1acoqr9L3rQRYmnRsPQVwWdRpEVzz1JSWN9k8y5HjhamT7NnE8qUbG",
  "key19": "2jgeb3DtKAaZuJtBBpd9UP4wFD4osK5mAizy3D6pn9cWJREsbJLMBdg5tLP4y8AUxD4X77iLVuA5NY9LDfcMG5BK",
  "key20": "3U6f1i74iDvDANVN1UEYbPqLZ3SKJgaQ1UxfMmW1Rs5QQjSTJDGXiDtnh8ueWp4DNo35Lz5C3E4kWhDWXuP43edR",
  "key21": "45VjssXriGBb565SNfBWhfQXugGcYftovPMDCPm6UWUfRWKnpczhGdvvK14yWbFKkQYTd3sBAs2GyJmp2ehojDsm",
  "key22": "5J78hKiJAHTLwwHkiLBXc66SbAoGYRJdYkH3w77SHqYvtBAZSCLZb972k1q7QsRAHCLQZPDsNvWa573y22ryoRT9",
  "key23": "2zbfBJgfwGUTg4fMgmiApQFmYamqxqcNLNsx2vhGZo4z23oi6ZjLfycK78xGC4NXmJ43Qz4yg5cxkXhXNUUcF7WJ",
  "key24": "3tuY8h1GmRZxywyWWXPNiT34ba5i66QqUjgcLN4avFqUtCC8jeZS56rrdDbHuE8zxVCvyQksPWxe6cf1bLWtg66w",
  "key25": "3F8cybNYqnUF5qWFsdHBdwEbYQM8myPycQERZKgfJu1A22v7zouCmJi9DwJgN7NafBUuVegna1su1opW4gi4VN9e",
  "key26": "2hA9wvcauBMHZuCaARrPGEJCPKQqkc5jJ1vFwh78nBT5nAyMYbyhTZC4uzSFEKRBSa7jv85dY8Sh4W9SSwSFs8qL",
  "key27": "3aZo2UQXY3M9moCrz1RiKGcwmVyp4WxSEkLQDVxULWqHzUhi4cnp1t8AS1ZE5tGLA131QCEo4edGDfXq8nT2EqDa",
  "key28": "51VFYkgUbKEXd4Kr4vyJFs6sa1dS9DK2NU6v5FXuHS5Cs7RiDEz1w1xPXnxG8JahRrUeqpYp24MUKcnMqfARfCoL",
  "key29": "3pPyDDTcjYGYeKPG81p9fQYamxh5hHtxppW2qtiB9mDQzQGZgMqmnSVAaukTgfMouaTJvo9uMS6u56JHTdG2VPQy",
  "key30": "3rBTzWmhMSM6ioBvXP8qk5cYVWmPoF2BdNkbDCnUdiXVHvCxfquaFj8jDiMH4t6hUCxMfY5uG368KBQmHmmaZSki",
  "key31": "2v6eLqKhTZ7i21FaAVf6Tu1rS6JJhHd6PfKuu8mBhmjvniv5p42q11G7DGuekotve8vXphHXHCv76RfqRYUYxEzy",
  "key32": "5wMiBNx2i6mW9T4Smqd4BXudgEc9kqg9JuHNVHQSrxdqQyxzKwDk4gcQkVQYZDKUoyBq4XyY4Tok7qoY1BAwPkPq",
  "key33": "5segn3zokCLDeN7P1brSG3JUAE3YNEgE3NitL297QpRQbsCdBmtGGRJJoExfGnS5dwTvmjTwZqvmJuvR4d5Fecir",
  "key34": "2VDaF7XLVHMVfijHS6ucSzUwifQtDZy5Mw6RHfBn5BnyB6fQvXa6epH5k2dYUwMtugj4Hgjzb399LwwaWtT5EhRb",
  "key35": "3jpTBSWec9TGpw2opSAhUGBxAJAWf7jwKBBiJdt1Az92FCiYfLW1apprmdJTojYYevu7X6SsG44RMkukVtYbdNHw",
  "key36": "3sZBQmnhAsMdAtnY3Lke7DtRcGyskKwsBB4qvYh6zNbttdURBBi9RPV7etCqM68njfeMCybzPCf5znxEabj4Uzoq",
  "key37": "4mNgZZd7JL4He8UBYi6g6cmHq1FCVvfv5jqUwaJ8HCr2rcPPhTyNxqpV9dDxSQAc7UMwcS4dVq8UueRfKhb35nE9"
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
