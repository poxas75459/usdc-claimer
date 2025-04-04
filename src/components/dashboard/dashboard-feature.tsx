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
    "A5aNEmjdCfzGQdyirbURH38xY3JdAgEACU5GrfU54dFemcF9eK474Ty24YN8JaZQcFciCvGV7NLEcZ6yrUF5X6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oWkZnAJbP9nifE5aGhBrpqptMGUcG59dCkynWEqVkBDhLVQZ8FtDF3xohgvBm6qufpApAWU93ojHaeHZYBa9Gqm",
  "key1": "5gMwHZBB7Uibv3PRuWYmSUM3K3Nb31ePm6LzM2oZgP96B6fUTfpBJsvfJbLMMymvS6ehn4fLw9XkUaa7SkcztKWd",
  "key2": "4pxBQvNRWhBY4JnAGtYVuzE66wvxYE73Hz476o5sE7hbxB72L8Va9XbKTTnzeiiHeiKUiEJkm9aNTJoWMeu8wp4C",
  "key3": "3gW4dfC3jkDz7j9Qy4KkorKUHdaWXMgfpauXjEd2gk21TmW3PcMGfjX2cyMQBc8Qqqruaz9D4Ah4nYTDo9QpPU18",
  "key4": "33n8A27JHA2pWTgXQiJsrBXEqL6RApoT1RamiRUE8wEZCxmzJeD9mNDGPM9GuX74XUzxFdXYfCTZ3jrxxZtuydF3",
  "key5": "3y1aqEtiCuoE5KCmVTQeNTXgrefxMVbuaZgVT5aks92Y8NJgJ9HKQhdGbBxTH9aS7Yrvg32RexK7jaTQrh7tEXmF",
  "key6": "WiiuQxv69tFS1SCJ2HRfeNngsgfLH8f9mi2PCZgSHBUYLf47efwpVzDACn1dy3XPh873LnFGQiw52KSnznGtSHy",
  "key7": "3aJcrGuFoAkSMv5CsZF9dKHuYmYsPHDqhw2iHJbhLJkH8NuMdTh5Jtde38LQCH3ScfuNCpU4bbDYf96xxFRQgCij",
  "key8": "4as48ZQ57K3rmpEMcThdgF5QrJLECBR9fxcwXLMSCsnibhpioUZ4MizcTmwqbtegSLLKBmkXsP43SMLPeSncvQZF",
  "key9": "41Wza7EtVMgbRGAx88y4eezqXgT9MgZwx63zo7rfPHkkCJnas2W4mjxQYYYJhfzMm2rW72or4CfJ9Pm2GjacwoYn",
  "key10": "3zn7kW95iU9FEgrjn8hpxMnz4QuAgaHqPsrnmZhXBnUBuY9shJCQibUTmM8rJ3oUyUsUjVUwpKotjvYacfDQq5Qk",
  "key11": "4s4Wc3pnSQXSceRmJfmVvFteSkN4tYsGmRHXUQQAHbYAhhEttXV27uVMmqqzcBeBhtVnjFUvgxxoLxkcYyvokjSd",
  "key12": "n7CNvdCev69Mr9grGReFCEd4Rx3crRyz7EJjSCHLuiphJB3miyuMV5V7vT46eAXQpRuMQCrRX4EdTbjSNW3N9AQ",
  "key13": "ksNKsPi45wrxVBRtVNbMSysoJZpBZeKHhLuxzhoWTTVowd7E84jWXTRhz89BB697QR4KjTYvhRpMuAc8rb1vnE3",
  "key14": "635sC4dDRBG7weGY9d6ViccVCthxJGh6b4AkgtHL7yBB7arqqzUUbTajp26yE6y2e8mrx3tkp2ij7pheuLteFD84",
  "key15": "3qwKs7LnvdMyDzJC83kYknHmNFk7HUAmD21iWqgvRfZDcV9ZUFpayZ4nmkCajxXRZD3dpu4AnyYu5PhDP7pk672w",
  "key16": "4c51xvUgMTjPbnBb6UwhqyNYi5YitjdAhBR9nixU7rQcPxFk8zYeXPpUvPiGMpffyidUH8dj9GzAhFQPbBnKRpjv",
  "key17": "5ZBJ4SEMqopudDa4iEnj81DJc4cdE66Mf9tRDr4Ht2cpGU4NQR5jPjwpzsmBfRgS8RSvznkpBmK88DkjxnSRAFMk",
  "key18": "2q3btDG4e3vsvUxywxaoqEtTtaomoCrsuyPWuHEDFJJm9iimESQmY1gYE9GECufToGbSE5zviPvH1WJBedGXdfYo",
  "key19": "5hKLtmLRKhghe2CTFPX7WjiizHK4yZFa2N87rTLjuMfDKidYHUq2xsBH2rCpNTh4xX9vwaqxDQnnTaugFip8ju5i",
  "key20": "2aMbP42HAv9JqxE35Le4Mz9QtDK5mkjxZKzxHJFpcQFsuXYu6zAM3LBqFLbCSWmo5ftjwS54SjFv1KmwNyyc8JVu",
  "key21": "7bAor9DUXVo9Qk9KKx7wBRsiNcVQ9DVC5rFA1R8sy7K72oMLHMPKiAoUTVTZpd5A4agGahHBs2qMQu2sdXeto8h",
  "key22": "5Cqze8WY9baH4NA4M9saB7afGi6RrgbTjJmPzymS55tyebKdoNo8vQHC3WxDdEhJZCMQtH8tgr3nQqJRA4QiB2pS",
  "key23": "4oDU9J51NQxjE4Nf4u9RNywSZ2wLKqxjWmF4JWKi1x1ZeSAxEMqPTh5fG8icK1NJ2BedvJamPkaeHXp9ALiXB7ii",
  "key24": "3Yjmr5u9e7Znrm9MNHcox3nBkrjJ3fMHNrwzpqKQfjVEwMkRQdqRY3rG6YT1Z2AmAUAYasZRSf8YkKVA5mhy6zN8",
  "key25": "45E2HbHwNBArEaD7yKEPAR2mUTaPy3JF3PspyuK4HYNuuuNmtR6JmxarBhjSR2nrurUgKvgrQisuVKHc3kxyzHts",
  "key26": "2N6jBAHPzySFAz4Qky85mebxqBj8mRvHCjz1M9xmT2ciizefv1MGmjyQuvtAh53NVzQA4wLtMdbnpiXJgsVq2LC8",
  "key27": "CXreu2USjqaCnQ1vp32BMbepij3DG1Swtj7PrCNH74yzsHkAtE8pQkKheCak4A959LenKBD5BhQaGfhMyA3Yf56",
  "key28": "5V9FTjCv3pNcD5F1nzrx1esTuYtVqJPxnUvbPDnw8GP8CJp1iBJjTDFgUwf1b3cxmq3uq68pbvmX6oXfexVNs34V",
  "key29": "33iBb249wd8spWkya4uH2j3TaMX8A9dK37LoSWHNDfG5zeVTsJ8NZRxZURf3rNea9oSRH6aQW4NiZDHFyqiCNpJW",
  "key30": "31TAF8PxSdzjeFr6wDAnXBoUe1GGcubuotHuhtxYXrnRr4UeejesA2f6NfrphhFxY4ujgHKpP28Thu2DkUW93C3U",
  "key31": "4cTLJfPHcQMegro4ZdpMJNie6CLe9NfdFDEQ9hftDN75tu7Mp2DYfSsHpdn3A8ciAb6wYLPU7itchTNSQomiPFcd",
  "key32": "3pX5VgAtZ2gVW1uMfQsEVg1GGv4QNHS9fyYBpiS6yjWRWp6bVnLzzohLJK86wRrw1qpLUfMBSh62CFx727VVpmPb",
  "key33": "xoYphRGrkVoLwgZx1i9mehFYLM7EMa7dbE2y6KUPRiwv2NH7dsmYPBq2UJLpPaaiPYQh76uUXrempCrbBtmNLZh",
  "key34": "3JjGLe528z9vDhd5aAVNtskumTHSqpMRUnfcndsnDcdyBGezGdXgYBAkqTrn4qjLTri8kBmR7nMkyrwoq23t9aT8",
  "key35": "5uP6quS3pmYoCzKAGd5Q3AAasySmovFLqsJKhgb7tvbKWGDN6Yp136VBjnFmxRVjXdWWupJLX2MRdi3D1ZYPDp16",
  "key36": "2TyK5MZBtienzFAxhicFjWcWTc7yTHMkQW25fEyRuewdiYUFSPZBc6qp5U7f7W7uEjt5Z5bM3qccLiV8yUEUYxRN",
  "key37": "386oYXXck9NT7egPrEPCQBWXJKoHd6GY64s9d8G1upyrRJQVd8YvquBAUNDy1U9dgoig5S9u8sRie7kE18r3eLC7",
  "key38": "2Hg18Qi7goPEpByNPvPw4FH2uRJiUT23Q4FEArjuv3FQ2N3EwihEkw2mRPewXCK2CJHasumNxAd2kZBsnCbj2x5v",
  "key39": "3swp79LggWyHczQgqS6m5YhXe84h4KhBjCmgLKichyF9AepNMouAGZqWcKqN9i8JZi1a7NhYTUUw8hLRMFgufkuH",
  "key40": "43Msu6rkit42viBzbHg6BNr6jQZbH56ysKoCAT5bYXqEHHKBPLVBh24mWL5rM6QhVKhoUiqiGPKij5HXwMfZj1RE",
  "key41": "4uPLgCaCJKjbJuDwBuHCcDeKheDGQeMnrcLZrL5rY3Z9TzzPSw4DuC3ZCUE4FqTgtjJDzSkJDe6xgk6Riw4eUAJJ",
  "key42": "2jrcrLGPxzc8e9Xv8tLnBkZ17cG7z5cswyLhAQCnWo2bGAQCYKM9u5JSvso6unztRtCVLaJkT29joP9oUS6MjGZK",
  "key43": "37Uuj36wZCajaBb7CZjrDNifgJKT6mrN8nupfxG2guJ7vu4C8GFkYvHxrCDknTR1UsUeAAnhadBjE26NyteaVZRp",
  "key44": "4NZ51cHgUTVz19kajMSfDJUxZbKC4Eqepnrcw3NGwR2M8bQpUJbQZPBahmtMqUe9Kx83MQcmGzVioGbfYy4QqbFV",
  "key45": "4xhBsZYpng6rqao9EAzL1HM3i6zi43bfZheugudtBWFwc7unjZ7LQrS5wvpTLt7C3FvBEPy3nLs5HLS72Wd9aecn",
  "key46": "5mJJ93sRXXP1ohtecbkMvaRno2ojL5gKJgd46fDmp49BC6ZMgMSxjbzM4fnLAz89inxKADdiKJB8mFwR2gZC66Gg",
  "key47": "5wopNakAr61L7vQ2KnF8hPGwdoex3R2piTLN5eFwVXn2vu6dDv9Kt5sR4xqE923FsmeuPnWcuJxYbeBDYY4QTmLR",
  "key48": "2BVHPGvZ14fAxEm2Pxbpk4PFNC1omW5cUNSULDT8u7CDzuA1UMAkvHYUBstS9pXsXNK5g4BPXDHxZ8gXZ1Vzx9xn",
  "key49": "2bd9iGFidR1ooo515MpYdBpzqNeZbGx431VacPqs9f5XnoRB2nRxwj4MFx9k4JEEGUDbdABMHkvDUbtUj5iFjaRm"
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
