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
    "5K2duS33g75hgd9s3svBTU8wHVEEvv2TgdorKMFc7VGKZaxdLp3RQYWFBMMDYruNCfkzXwM1t3t19wPfWds4FFCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uo92oGkXR5EUy5hhNokpKybXAuG1WpekWVuPJA14adRtXicmCNyjrcvfxBRt66aoDAgontGLHt9CTuJfmmtmCbu",
  "key1": "3TYDUg1Tz4aJE1cEDr4RFKmqCK3PFry7QRkGY7rjPvosW1inqoZMiwongmqpaUo1wfBoPNdhb367Fwhd4TM67CSM",
  "key2": "4LZHMbrSPfNcZcbXZQWUt2gEW6jyz9QHyPCTQ5gh1BTGWcvnKLiNNUDwnaJrnLBAMwn4ETBCXoKRgjdhqtEgD4XE",
  "key3": "4LwdHJmSGkqXeDha1DieXe9jTJVeGcrZ8BNTbd7hmHAG6psauDcjQmRWo3fRxxpnBMyQ1NmAjen9GDaLFdHgvfFh",
  "key4": "5YXqpQdKBoaj663M7dhgo9PS31c4Tt9FWyC5BnypKeLPETz1sRCTnpzGrcLFGPtQfdvPyYB9hb9N4nzhHiG2rABt",
  "key5": "4XEzr6GafsFdxQwa8caHM8CoUKwBNuaEjJhbDdLW9smbhFtuCgKpVW1DcoQJihzUNGzNeZq5KoBfmUfW121xrgET",
  "key6": "3eErLVVzbhokjwS7nPCdosQZw3uRC77FMdo4dy1r8MXTUwvFnWy7NkbhaoNSFMcqhwpWUs49V7PZjY42VYoAR6in",
  "key7": "5G9z8YxhsFR7HZFkupFm6rbW3TZT8NFtxgPVYUmkGKNqj4Y78hH8HaLQhRRHCvd1Ai3Ph4JcjraZTGFJtxL5xxSz",
  "key8": "461UXVVHjDUBtPQmKYDLLqWubq4chzQ3U7zM69ZFDAy8BzqaR1qETGkiNRU4vB8irsnrFRWCrRUWqZXykTntSS5y",
  "key9": "3rp3u3zG4REY9Btn7s1Y3azksEPnyHj4NZ1vEEv1xTbw5K3yppSe981xfgDf34Yic9t3f5dMAhKMMtB8DCaGuzyY",
  "key10": "47bWfjVQ2BDxyfg1SrLkjMaGLJeEGevPqCaE1aj7vC8szHKSAanRZQKtzaXjkhxXQnKCXtdBLmZnY9SHBMTQoThR",
  "key11": "5hbhzbKvMSoFS5XCsZdrPQE3h36t5ssSNj6BZm8C3v1Df1q3quA2CquBfhKyjwNp9cSqpKy11Hu31EoUNJjEiw1f",
  "key12": "5HsWXjhMpYnhjsdmH4if9uFfC2wurYdLCVGvAKcSupb8srjwN8GHEgR7jTRw8N4fnK7MVqkXh8pjQjDJUJmK27gy",
  "key13": "f4W7uYznkviKsPSZVaop4qYiAb59LcEPJ6YPfgkUG1KF9t4irVkSGtvcKiYo6kMeHJrHFUT5CqpsVqv2mSL3sLF",
  "key14": "4nDs2hcdqr2Qy21z6atLnN4oes3Pspb66RnUFBdzJPrRyr5JG9PFhKhLrQEKnQViNAWkZR6u9NcUVu44BiAEfnTg",
  "key15": "5N4pG28tyoGHDpsfdXNfwvbP63124VKuCR57AGhpQyjErLCLdWJSWzKQnuMzUtkEQL6sLK5BmMtJTp5DCDHHiwNg",
  "key16": "uk2xnSJBrSXh23YxEBroffyf4MKLZByP9L7xoUptjpJzXnwpbRp6RZiuan85cM9wDgLumC7XFgLsY8NtiyiCY2b",
  "key17": "o7VWPBRES2MbQx9Bc7bbLKeYsEsWrTWmMKX3war8BDJXtWMDcQ4izryrJjwZGgTEURgcuu1Ru8LThjS4rEizNJT",
  "key18": "5HaLWEGtm58a9N15UL2XLUWAerrkN4NY5xKEMJFLg6kQf9iK23sAUPSkf6gPrgRP8WNCZToGdGNYfDvEEW2AKc9E",
  "key19": "5VC3KPZ6aFoRYqDMFBQQJFj24bujeRo18sSfEWNC5x1G744YV9Jze7UceWc1jF18mRWd3tyMEpxZ37RAvTRyNDvV",
  "key20": "3hAy8ieZedfUSu11qQBbVGtYBS766AGi787JBFE6Y3PaZzp8fgstapwa5YScLHMPhVuKAWxez4wUh5FW9j8rhtzz",
  "key21": "2hjr9qF9cgQZ5cnJ3yADot17AG85aPXbAUMhoXEemojH5mrNiCxT96KurdbBZEAmNst7qy1euMjMvSaNMumKycg9",
  "key22": "3kSjCDSxzjJ3QyCo8kqDENkfiYqJbzDmmMqdNFubbFXhvNnZk1m7aeWicLpRRCZcEgjMcCx9Pt7yApwwBe3C6Gm6",
  "key23": "3dTwbmaJkxARPdZPuryKj5muPtnffoWDVTDbwDmw6N12etHY3bKXAFqxazC3NbgVu6ZodTasAugVzWZ2e79CUGSN",
  "key24": "5emJRWrWf17CaYWu7fZKFEMWBMwPdna92B8f3oihNTANirA8SUvQ3FuL9QKZanvfNbUno7HiMjmL7Kru64x1nsQj",
  "key25": "3vt3zQkZPFrrAuyvViTfKe4vDMvaFFZETWe3dSeFDG43AhMtQviT9gSPaRro9HddWtY2evA7dJSQLWJ1dL5cv4bS",
  "key26": "3RgiCV4o3gTM17yagCyi429BPTi6B2dDvdAoUnbriQSuWwKABeWaosjqghsrMPT33FdMhrZDQh4Ltym89DEvfKp3",
  "key27": "5m6g7Lpb12yWF46xmDeBgGJR18dr9ocwTkTqM7mWiBxEx79eicSFGfxKHmaBrp91J7hi9MvZ5Ag2oo7VGyoWtyHj",
  "key28": "YwJe7BJfaSoi92eAy23gMFywM6uX71p4A4KLEZo4e7pMorJdu19yJpmQ6HyCBG8kKbKfaWqTrw4KEWZEdbQ2P6c",
  "key29": "MFAbSwV3aii2MLzaUpSYhxQEsrfGEHnGtVn7CiHk41WcUyJHJ9UTnhFf6KuFXGhAc2ZsjjY1Uer59WtGxnSyaNV",
  "key30": "2Zn1SXHXmvxPXQMbd9uemXqqbtgEBsmLUrm4oYgzUbMh5XKmHq7S42Qc5AJKAgf7YPmVHJ9EBaPv9av2gp3ZUBLW",
  "key31": "4fGC6XbKNmRtzCsfgpyTfvVnoYcdMewmDo9uAQe2ZaZHTkoRKXen1pDdbxhxAUiLXYzNcFaWa73NBfajfPkNX8nP",
  "key32": "5XbE572f8GYSQ2Lu1y7DmquCNZH9g6hbVUr7kySER7oiandsiAEeaMM5gwRp3R5nTT1pVwgWm2aMFgnQ39sEMiVG",
  "key33": "KLpr8i31SbpcgdSYNXNJdXw2BAHtxnCFG7HZaPyGEN6QboxAXqrq6f4QovPBpMTf3aN5a85TvsbLgLCiqTUp2Yw",
  "key34": "4YY9uamnRG1xDujm3Bo822fqcXij7zZR6k36HMJauwiy7ttFZPYKi66Cf7gcrmp1b7TfCuvuh2HtBCtpCCF1P8vX",
  "key35": "Z13cCwbeC6jTsHvZUbNBByp1bMKe8AndDrSj21LiXRztki2R3J44v6aYZE7bQaGtK6APNBHmgJKk4czTLbW93NE",
  "key36": "3ucMxygvhS6Nr1MWzJ28QHXQdrREnaKBVriTaDP8Fnj8n2GQEd9dpzcYjMCmWU19LKzEdwYQWVMn3kuzgWEwWKM9",
  "key37": "4KE3szAf4kGMcq4tnkxcehJnVXvBBD8X4ECw1Fq6Yt5RBbz9y8wMFiKaht9E48MQLufVeRWDCscGi4EMFELi9Rb2",
  "key38": "4QQnZuofAW5iB6spm7asDiZrNmn7ViMb1B4zUiWEFrZ5StEzkxZTdz8uxEoojXczRUaqL4YNdTw9kSWUcp4UnGZA"
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
