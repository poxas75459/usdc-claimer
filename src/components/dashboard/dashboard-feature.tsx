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
    "4XLSJWgE3dNfR9w9yvQdiWTRdZLhco2EtaSNDuwtmUD9Tg2bHSjDNehGTU1uPBrDYwbkADdwmw3E8ReQiWSiWkDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JqeHup54U4cZMUjWEAJ6iVkYpyE61MduN651LdJ6iCDG34Sbs2w1A2GsLqAU9Qe85JM8Rmc7Ya5A24BHWVXSmq8",
  "key1": "H9tj65CRj7aK3Fw63fansXj7fP2EEFTbuqMrduvyGpgpBgvEc8dGZYMYQWmy67UmPz1w5K1vd7dpjEtciU2NE4e",
  "key2": "5vwcM6BQnsJDkzkf9apQC7ZsrccZH31Ve5tV756vwF8DHKr3K3NxHbpfHFuHBn4vDmMP31uieoXCHDVPWHUVpKso",
  "key3": "4ET8J9S3x713Nq59opQJjtuqB4EwSP2QDFtDLN2t1FRhnK7eminUqr76o8JnqqYi766G48DznAriJLMg3b4tdKJL",
  "key4": "2NHhxPNSTq3PNF9TQ7TyrvhH9h4rvE1BjzwG4u2fZgyTNpMrtXgY8Q19tDU4xchFrXXzas3wPvARQP5fCwLLHHg7",
  "key5": "2NZ1bm2onEK5uoTkvkUDgQGfyVNdMBpyxpKNL6ZYEeZu8BSATWS59JDYqysxRMN9VSsMHzTGLsrHT9HeLaGS9URP",
  "key6": "3uoN344DYNFE2Kj5PtPjRJzFyBvzXtKgy1abrJs1RKCwwq3e2WK5FC8sbgxD53Puz9AyhsETFqLpcBgSGSLsKg8",
  "key7": "5rtdiho92kmmcAFVAWmVhsti4G49ot3kUgkRJ9wEPB9gEWHY5jihSNih7o6GQV4LhK7NEZA557JsiSMu2f16Mvt3",
  "key8": "61CYme1hrpN8kASwasujhgG7WUnHDkGVsRQg2qjxmU8DtZuK4Lxyc26jNcxxavGa1xWzdsxgpUstd5cwNc5ovugq",
  "key9": "36fum7gQHwNYJjsAXKqT1Mvuo9r5DsUXPRioycK6XxQ2uRvuc5dn195KnsCdeTpxzLbiquSRMCzBoiHh5iadGGD4",
  "key10": "KoxLGVjkptZzTwvrpHUaPbVwWhodC1NMgfDN2YkjB4fHvwNGeVoQ8BmeYFFQvGWf8dHC87cB1VE2wdemjttQZp7",
  "key11": "5fFo9H8KpyxmjvV6WpQjGsw7Aj3TqLYn6hyM2bBm8ptfu751VJmG1MH6t6hKBrCp3uhyhXKExv4ynEfZqXgJ91DX",
  "key12": "4Yr4iG4A5wMs2H9qXeL5GSmV3VoNTs94n9WsjFZCx2oqojihdHXNrZoXzoAGsJjnR1DeKFRei64GV2oLyMVtVWEt",
  "key13": "2qNS4TPNnSPG5z8pFCCTMkRmv2Kq8upRTWQExsmiTFUzQdYJQ8RPiubv4hze5fWqbRAFFMaBXZw3EHGBnyJPaRXp",
  "key14": "65EFotbejkpWjyzhLESbMKyiwZtD2t1qYCBQPxf4EXZZ5P4EUVBTeV98G2bnPLcAazX4AofTCTf17dg4DwFnesgS",
  "key15": "5fXfu7Rmo9sQTBEg9joEbTALDD7WhzAkzZ1KsF3QKW4AD7pE7n7Nzr2uuwd3eV8oB8R4tmDGuc21YyLAtbUJpt8L",
  "key16": "3MaaeegLG9D6UtojUrtrJMniVkHeZ1nTFdEwD89sQUZ3gRmJM13LNvPArehpJDfyszWq2iwy18Ff4PGLpekY16te",
  "key17": "3FiPthBs3KPJ9kKoYK5bb3dW6HEBZvaV4HnkCNcp6SzxqXBcVgMbCNHBLNXLiUa4n76dQMjmLGJakFUoXzdjaF8N",
  "key18": "54j5Bv35SWzSKVBcqxdqJBEAVpgBqUwURzpUcuFWVwnxGj3is4mGX8fymXduDftkw3omHTka8UfmZ7kHbfPdRt1Q",
  "key19": "525pFMdT6zVKYXvfq7dWEXLbJLR3h9m8aovjGX26x2XGYLWHXCzpTrFjM36z7VS5oiaiQZusk1dLtwMsAdyfVJvc",
  "key20": "3ZMxAGeY88Qz78L68RkA1zkV33sSRzo7htfj1SwKysQTuyo6dC3oKDabXyUVgJc3pNJ8b49HnbMBjipejSeGV4Tg",
  "key21": "3QNbh4R5nRYU35N5y51k2YX2xKYpGJC32bPusEtHqmShL5zQgrsK9niGcYx6XLxJ51B9M28SVfrcGLsUbEX6c6Hb",
  "key22": "4M7Sm2h5FUWcg7ioBTTr656t7WuDeu18WNWUQhHt5YuYd1G5BXEhBv4X16PtWjHJF2UyjyUFxeVNgU9AC2jvoNVG",
  "key23": "ApvUhKpkhcfH9DjbnGMxgQ2V2gm19jm7fAAdNwjDThrp4kWvssUqcnJAWdy7otUctZZffaFz1Unh6eehaj2g4kN",
  "key24": "4cWCrG9KAETAxHQVVB7TCDeLDnD9hFWs99jbgVEW23nwyovsWPfZjDoYULSMdpQkGHFm7RFwMaTNToBUkYon4J6u",
  "key25": "2pNasaqS8qhWdZrVQyCTcY4DD6Ntu1BfFD33f3T5oa9NrVKJATim2p1LQbm2i4ic3GMddPuueXi5imm6SBuJJwGR",
  "key26": "4pxWNCWGZbKhUDie2pQwEKiDJsg2KtjESYmEEk7heSBmub6Aiq5fPKhdYkyU3AUZ95uN4yd9XKHRDMdSk8ENQtRV",
  "key27": "2KpwWFGMeS12x7zJx3Qq5Hxf7yARyBvf5aee12EGPiHVzhbDA82FcNeZnJPNAoDP4NKvJsKkmbkwkpJcdzwxPo1Q",
  "key28": "4SruxcUD1CovtaGBMJUdC9ibKYUxW5U3EYuR1TrsYqg5PQn4BnQMCwLFNKizLVxNJy9R7vcvSjcUTc7Rk4yceiAU",
  "key29": "re3Dw2zwouSa8tnya6ka8q8NovRU5ukswYP9KbJEDYxErquSzr4vKMbkMD2RRGJj1owVc62g6uhQ3pb1Tmnq6pG",
  "key30": "5vnbkmmLprpGLAK4j94eYg5u25GRRNRiCJxHEFLYbe1d8UtiewtQGCu8z992od87o5grRoYB5cLdHMiauTAj4YPS",
  "key31": "4gQCGs97ukNh66urt3KSZG6AZ239nqbd5dsR5LHWmxJEbVA6kz8h2U1mdUXZMog6PihdWRVLigFC1PkRuZyFqwup",
  "key32": "5oitXuG1yrCP7w8LkLoTV37stSgz8XFK5Jo6TnSTuf142wAwugyWoscMe8RYHCGk8eNRrTcFr2TRzVf6uWsjCaQ3",
  "key33": "5gqk9v1UfP98eRJmiGrzjPZ9EGAzneypvtAqnDKWRdyozj292vPPX8CPw9nWkmRSJUtq5P8sBE5grit3o7czcQEq",
  "key34": "3fMdN6fa3WyqfCpBQQi4jYzRgpiHuBWesbXPzW8Hqp9bGRHznWqEQZrLwUjUozSRr3WGCcoPcSEdpZKdZKHKh4dT",
  "key35": "2DhkhCzC5xdMky4sRfigEgw1zjduMewbxxEVGEYjm5Rg1Ra2Psei2Z8T47m4QeBuCLdghAumAawsa921mK6P9duH",
  "key36": "3P92ZP84FSEocJq61FE9ej6Uottm17hXCVhw9mdxM4SegMSKjcVE8feBsGRPmQuCD4KScAtuYW61pE4BVdXaTWsZ",
  "key37": "5jLc5UXHfT7B7xp27PrSTJxsP6CgfJUpg9iEUzCmo7QrGXJ9vgLeV8C38bEug7ufKphexJGt9C7XfwmEcFvYdrAW",
  "key38": "5BjQgxp9mFUJQrdJWbt5FHvdYi2yAfGkRHdJt7pWqfH7XXtHhXChwGKABsnTrYTuX138mk3MQyChLXLofLejni3F"
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
