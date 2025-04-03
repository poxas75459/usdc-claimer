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
    "4x4zj37yLsV3w7DQaQ3LfMbrabaAnZTPBtq8Q3QvNEfxTeKD8MaFDR8NkXPVYYi9SzL4n1renurLxTuD7Tc1FULK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XaW3JZn68zMSprFALz1rkRX5RdP51XsvmGyQGRvoqjXrGDZy5nHWn4TfHGBqxM86wJjBLrcNUJ1BVQfUEWF3Hdc",
  "key1": "zmSyjaHGwKAaMF2DyHT44BT6oZj3w66dPwTGgwWogv4cYeXsgxkaNwoZWLnbyJi8D43vQxQ58P91FecbR7GY4DB",
  "key2": "3Ci1yVovw8Ubuz9LDcyZvSqjdAUAXvQg1C76Cx6JKpY5rZHFWcQPauSy5ApxVDQKxkJkT6qShpX8pkyrwst2Kk7q",
  "key3": "3ZUYYmyKqhDUe2pnKACHAT7xvVjpit1YTyyw83TahjbxuM7dUi3GVyMB6hu4L4N8nis3gsMyf3pt5WVrNqyogPra",
  "key4": "5BcwkoF9f1obAFgAoQfn9rGiCVXJGaearUZQnNMUUsTgt94ZAoDWfY1XZ6swoq4cdctRPzdShbuwuhQpCCzty1uE",
  "key5": "5eUr1oUrZJpJTe9jkeXQa2AngrWqke4EP4zuydYivDZw4pNPBFZNNfNTSZ6FChTZrX2vEVPj73Q7o8fhkm47HSgp",
  "key6": "2pfdgDoNE2vcFEzhCLM7zZ9nPP5HJ8UQ6Kk5QZvQQeZnyq9w2PTtnoyvkeKgNSFfiezu6sMW2HDMELeZurHek26s",
  "key7": "4Xj7nQdupdcdUPbpNZ1VdpSTYUCekprXKnRuCeAL4bU2VTZTTzysLh7wBZCXACBfRBUGD9KHB3tHz6JahjeLBjyG",
  "key8": "55dQgGTe7p6ZWNG1o1rb3ZYQEqxcJVpp7KEE34P1U1pg7bBdwVGs8LEdzqwfBEzbcV6oeRLEvE34ymQZJRxzFNAj",
  "key9": "4vDoGyni8rS9FXSgzSrHtTyFeVMQ65XDTFhdyop3RmevAHXGdPV1K9yzHSrw9o4jH85cT31Gqw7992GWTifhZGFK",
  "key10": "4fAzhs3typuUTKe6nB6ehkwCMbkUpWGcBmFyW4kErDHEhm6oyqRnPag7zAatEMVVrQ6ciB6vAaR3ZSswK8cLySde",
  "key11": "PavVuQt9TUG68zq61tWVigBvht6EoD4Qwdca3wrdhz8oT5imhfs2SFdCrP3snBHfo3KLhPg7t6NzkbVmGcjttXA",
  "key12": "BmroThs5whX2qTmygryechhXAK7Fd1iHG6SAgJbQnkZR8gUQaMzmtCXKLHG2JYbf6LnFmMGF1c9ormDpJyBVp4A",
  "key13": "3NMmjrEtCdjQoXoLMLHVosFYZsxXMZnrAdYmPcnc8x3j3cXukg1yzErRaF1uvM7EQksdjtxRop5z5idzNAeYZXbT",
  "key14": "2vHdMttx7EeLPLMgqFnUbpqHihPoSwga7z3v4LqFyxBW5y648rUqkdLdGpi9BgkN6Zvjgpvz5myMyALT6izLof2M",
  "key15": "xVjJH6A8KjErcd8uqeosgupNmcPcHsZ3WRaUDCetsJ36FzAMzCPyhiEizS3qejtpCgbZzQvE1WN1Cy9dEN3eKX6",
  "key16": "pjhoLhAxphGKQ5vufgndqmuJrJVf9xfZ2XQAp1T7BAShUo3avrhhd3Y2BdQFS5k21h3PgWcefPYixfJyWpTRGBn",
  "key17": "325VDEXEUxM7LGpC87Ld3a3xN16Q7vNyDAQW2HTznEcZdKNEZJMSBAds5oAQE23Qmb3TZynr9nnSzAycMgXxHjLe",
  "key18": "5T9aWnCHa7ga3Nzv3pfkQz67ovMgWYMxhcNTwSfFrNaZSdm2jy9iyJN7J4UweVv1q5p2Zgy7KcFx8hVVmeK9uGt3",
  "key19": "3tY4P7BaYiWG21WYfNk5tHVJV3FvcG3CtarA23XKGhWpfdQJ3pmAZjWXvuyheTu7gFqjwoTdaubLKj2s7wpzqQxp",
  "key20": "4DDuirHXgtM3Dhwq3Z5ZAe3msQccMWUf3yY7uMbyEJexCsAU1xmtN31rMUhdCJviRaWozCVndx4rAvjYV4jF6nvB",
  "key21": "4Qz7v6JMjzv8AMSU5rpXqW1nPZ8qf2aj3AraNqe15XhsVPdJbNYVKKwnYPXGjSei5ZJS8Xwhoh3yCM6Mu5rSq45b",
  "key22": "5KKNLLBYAdaYNN4nNjNR4yzXBJewsktvVQbeJ3pTRrkUbZAJj5eA99PSTJ2EwdPUGD3YvzwUBVjik37EGv5swK2x",
  "key23": "vVdcbmMRTkRkKxFaTF9aoRJ1gwZ6pmE5jXGFP3SJ3rSHXekJyWMHL59Gx22FvENmNWRumjFzpDqNRPkdbWpU5Hv",
  "key24": "5ytKWq3fyKjFh87HCEXAP72YiPPQWgnZTMQBZXQnJSccKWdiUoCtuWRdZWXVc8A5BZxAV86bCsidP2dJWEgFNhHZ",
  "key25": "2zjC2U2k3F8my9TX2NUKojt1iUSfYfc64adRdjkrLBENy2mjJZNg4A968erv1VGM9xRScwJ9kddqEea9Ti1mWbRs",
  "key26": "46bwm2ADmzP8kc61BsYobLiQjYSTybDcWfjzRiM648xJU2UHgAh8epUyEdDUsRLi8vwCqyLeSsApRaZ92DSnX7fj",
  "key27": "4Y79VVqbSHi26wnEZF2XqvTPJmG2CF3nfnzzstjN8UJzYttarbjaNJ3aW8iftvsPK8Ut25gM37YN3knfYk1LWw5S",
  "key28": "255hWotay4uEFFwum8a7B2LPoZN2bQDde5gMS4jymJMkGRTxxL1xxprCcrnvamo68w1Y1CLmbHZRdfEBCdPrEBRw",
  "key29": "2tkTD7x6HrCiF4Lf4ZvbWTLzAbJhQ98GHbDDH4F8Hs9qRrzZfddfsGBUpnvUFFFtzkDgLfX2k8RSQg9pmiFkGxX8",
  "key30": "3Y1paU7vJcZ6rvVvjDQj6FwyUNuEcz9diS4WBgT3hxUD6ZVVhktAEgc7z96qUbmojXfcbStN5jyWvYiYtFWLtXyb",
  "key31": "2UqSgJnh1xH2EcUwTgVpyNqmNTk5PgreouBhKigkVTEu23SFMeqpqGT7iLDUB99D6ZvEuFg85KyA1oUeERvg5oCf",
  "key32": "49y3xK6M7yo9svkYWyeweCcPShQ8eWj4hMuo7UkK5ChrVkrhR4A4DqEmGe4JNTYHm79m24j63fYW4S4X7pXgxtaP",
  "key33": "5dUEbqvqYDQRFqFXVFQcZfVGsiTyiu9ejyuAUro1a1pxDubcfYfpQXKLqwpfFoZmQr5Vso5eUWmUDjoj7eh7DCpv",
  "key34": "MhawCggp6nZpjFZvwReGnq3ejeSna83FqprEbZZeCRgSZQwXmvquv8KDYTYxmsmnEEBRe4aqYDbVkLYxYSyKJUo",
  "key35": "2fLTSA5Ug8tE3oY9b4kTYCZvJrRyn1v3cCRMRW7q4SuVyDTp7vEhXAQoUu3rs1v9uHdEZG26ut1NM1VJbcd4FT9q",
  "key36": "2hngWAACDJiRFDvLXPrjsdDw25fKvHji8mwcxDpuDcEQiENjvynEd3s6J2VWiaBTDe3T1SLi5ZkgWhXLqnPoyhyj",
  "key37": "3gMA2yVHgfRbLz5W2zJhYPStNpqvJhKuctbbGE44zgCDzv6KGgb5CA7CFuHEag5aEWHQp4PXPMqBTK3pHCgRdByM",
  "key38": "3sDHCCwTGw5qhzL7o5LjmAsDtbjYnjXPqiNKF5jjH4EFaAa1SzrgNY2For5MRzUSN7efgGYj7mio8RHPEr8zqYNy",
  "key39": "2uYyZp2rupnNFhQ3Cm7LJRF5QhsWqRfsD3EjTQZCYMzYpZCa8JNm4dNu5g1RbKvVkawJwoXPtJUxQaeECR21RXSo",
  "key40": "51igd3UaQfEcoSE5EyuXkANkaACixq941akwwqzLwGZiAs2qDQm4165JSVhAKyJmeVTuJe8VTiG2k1pLQn1AsbKF",
  "key41": "4b6b95MAmXnqUmP6Ms2x8cfSTKjs3t9Jn78URVwpJHrqGqNAzL4r53eTWieaxcHsEPycTJHaQ92iAe85fcv7Ta3J",
  "key42": "3ujLcJU2cEdJhg4cAyy3UHogk4fpBXU4RiktbR28iyGdY1JAkECqcB6tkxMdH9QffFoFtW7bnJooiyoo1pAGGgdU",
  "key43": "4UK1HCjcozJb52LEegcpx5Z1VEUMxU3RYK4xRaX23uCh1YrcFTojbVBWA8mG28Mkmfdp1oUW3ozTGzDY7tdhrNrH",
  "key44": "2c4Kw9jMP9jztLfYZma5vkvcwPYKjBweUfDSVPdaEsApKo4WX26i81N8LVx5DHpisQSLV928m3igDxKfg9fdseyv",
  "key45": "i48PLN7cMaPDYfaTkvtmhxeSE48DaC1cjVPxqo14TRPqccf2SEzp29wPjovdg8arVb5VQC2ku1gPpPUZUz9Uvv2",
  "key46": "3Frvoxi6vMuoPpHkvwzH1RkfwgZZ6toMgKFLMZ3R4kUDNdE7CvJueWrg4Psj9FufkZiw7GCQgrikhAZbiq1uxrrx"
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
