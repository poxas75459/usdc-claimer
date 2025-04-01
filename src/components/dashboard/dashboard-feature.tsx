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
    "hNXUJN4BkFieNDmhiLgJCZCjsVQF3eUSj6ziy6K6jaKi9Qs5F43y58LihUs61nFT2ppdF5uybQPi9mL7X9E7QKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sqkSpXXBMGzGFhhbmqfrT3ZFDQVkR3dCUD79XTm5LDgQm85b26vyAuMh4U82ELeNAQp8hnNGwStZQ3hKV53LNST",
  "key1": "2Msgzz6dS1hQQWBHDzyDfWia2WhbtXu8UBavhmPE1ymVzFtsWXSu75KqNNvdLcWBpL5Je9zSwjs6Veyq5yP78JGj",
  "key2": "2oJxf8BJPNUq6fc9dShcvDHmeUNLuWN2tESAdrBwLLfzy3hpHPMQXo4SJLiB9ir1CMkpqHvSrJVtKUsQWxDT3ViT",
  "key3": "WHnVf9uHrhLkCzeLemngh1MkBp39bUjj3JfTuWiqcnkFPGzQgNgF7fJg9h4YCeRZdgdYizvM4fM4iXA6wYE9WpA",
  "key4": "23noWvJfYcwC2jhWbSkqiqLT676sNXCmsLWWTtZ8Sbmk2FTXP2x4HKaJn9SyEtvRdsF4jrzYt1Gm8MQj1AJyj29e",
  "key5": "2tbdQiANFD4vjxqRtnrqFKxQkQJFogbTjVWpprEw8ZTzSnnZr9oWQhNaxABqBVkwzg8iD9ca4NJPaXFvwBVEijud",
  "key6": "478wcCPkbGCJ6Q38d2gkoZD5V7ukdxN5QUznJnTdGB37UGbud3DUwknfd1ykwox7snbe6n4ewaiyC14DXo2SteLs",
  "key7": "2Ta7DLiWPKsj8mmER1NLyvvKnBZYRreFmxcsdrRaSAo8CcUZYPm7FHXGZTyseeHqmy42Paw9fzP2PozrcAuxu3w7",
  "key8": "36bPCmMsH2UvWWLWxRoVPA9XzaAQPy5eYhmMf5KAXjG4yQJw1LZ2KGRAB8ydg4KYSPjFvMj4iCLuPLib2Ze9WReF",
  "key9": "2DotL8eLeUEbx6sjsGgBkMQvi3NSXNgSu8kJgER3MpHj9iXQzDtSNy7jKoVfLMDKPavX9H9Z65duo4TYYr3Nc3Nz",
  "key10": "iWYdwqxzEW8JUVTuaRRcCfZh5vUZeAZbMf6T7aqiU22cfSNdenENfkuZq1JLHTozRjNj2WEofCxZWaeRR34CT1Z",
  "key11": "3WpzQubHiKETdEyAXLYxTdjwuHvRtAgvWGBqKfCBUXjR9ucuyK6NgpznYR5ecUyKKPoXn3rSxo7gq58zMNepFbhA",
  "key12": "3fJWK6CZ8FTfCMvx6Pe5WtdfPsQ97U9fiB23kHerY4DLe1uSKGsXxujD1TD6XBTgw79P4NFDTe4aK3DMH249a74o",
  "key13": "kJ4vC6sC6QHxdVucGQKbgZQQVFM8PVqzBrEWLzAZfNoX84CG3pRgg9aaGxHeqeDMF4iLU87KsGL2oWx1UBtDzso",
  "key14": "rRzQr49ZKt53zdBcNdUhhXf1AcxqZpsAr7brgsyCSjyF98dWX81ssjtLinMnKb1fJBeFKnejQdwbGKQvc1BncT8",
  "key15": "5FPujF8wD5YPjW56iEkkQsxaatdTFR1heukzoFTtmN2T9iDdu8wrswbV1SHFoNFKFxGXG7atL4oWimecu92aXDJ",
  "key16": "5dB3mBtMrJVaQwVyHhkiDcYEnEpKA6DoGXa6AdPeg2zzRc1jsBDCr7vxo9oQJAxoRermYtJvuLLkaW9KVRmYkxmH",
  "key17": "4YD1McSkzgz5vKH4Lmacd7YeLJpdhXK6M6LmKhNhNStEuFXkyjHDjjyMMzYhfbxX4JkrF7jpXES3M2SGEozn1KnR",
  "key18": "4VMcVgd6earLxw2ueLWCJhiJNDjPqQuct1Rt977ME5F5VJts4nKWhHcpAkosx6rXEcyTynCwdjM3z9Z6J1oq4ced",
  "key19": "3ceFLLtgvC43RK6UqETsyvH2a4nP4QFmrEMCMhyJh1piM5dNoigCgBf3dyxzngow9rPRCyCFxf9BWmYxy3yT8Je2",
  "key20": "3Jm4jCv7qjxdnGFcZKTQvSXEcGbFAzijLqHSHrBn4DvUmWquC2kVMcwBV1aKkLYYjggCkxaHdU57s6E33tYESvim",
  "key21": "63ZekLr8ioE66r2SooAa2huhY8zjgyAXnjTcJY8jaF3TfJbJb38p1Cei4mEhHB8YdRRJBvvNpaFeSGokCbH7U5jw",
  "key22": "Wqnn41aVE5MJdHRP9bYBvVGnQjkYvTUQ5fqLgGthSij9aVefbtkXrNhaXT6T9rFFAgfP2dB184CKt3bjEofaFvC",
  "key23": "35yJX9dS58Yu5wWFhqBRfuHyrxeZtkTBboyopm3RWESSQAb2GcwJF5fLmMYxCEBxDVQK7k73V1uJZLi3i2kXMfFy",
  "key24": "487ugo72VKmrtvCNAfjy1xtxo6y2vca1Fzm7Ju9De5XuGTZvjvY49qCjsZ4o9rLLdV79NaHEpFpnjqgfDnKxQ8wr",
  "key25": "4owdt7seLxZsNNSCP6p49a2BNE7A39unhigCgsLBAarVNTj2d1TgBQPGkj3ofC5NHLJkUJ5JAiNgfm9nN9rDuDeS",
  "key26": "7DuDsY2kcgEiBtNmeVKvVXMNwV7jU2xUooKDDJNr5yLjnQJXgmf2tsPCEWffBVRBZdfaZVqi3xYviSj2LboUcPN",
  "key27": "4Htofp1ibw4xJv63KwQG8yhNkE8kLqXuyCRs6umnYhvvLKStjZWp7XTquCnFsyq7J2VkyMgJgUiVCFamNNB5ixvk",
  "key28": "46cBHUQx9m3BaZHvuw2uHGwywybnmsR1vgC6JcfCUmLSnkmKpgv7aCV4mgDs6Tw9LYEyz6Rh1FSTiaznicwwPtzT",
  "key29": "622uSCTNYrfseRjj5S3B8wtvGQ9n9mdAYU2PxoSQ9aduRn2CBZo81FhJd4PobQpqN1y27Duway5pDHpiYGT2S9g7",
  "key30": "uojRSXrcayYaGojyFMxraLs3z9TdGSux6zztfK2aJQkrbVPKP2ijCF2kswrNYRGSpwcCLpgK2shiVd23kG2iVew",
  "key31": "RXiPZ3y6PKFbW8kwB1naMMDP1Ym6wDXDB7peXA1XV7Qxo2SxMWm8qgEuAeD5BdzUigmP8nSEfG2KkifiCryDwr1",
  "key32": "323tBbWx3C4uRXKEmrMwuVumqDYugH9gw9EBY6Wwj57eJxS9nDvybxetHXb8A6rib1ismpCbhAJ9HfiubUXFpiWY",
  "key33": "2gp4CQWvPpG8fgdioPpfBkKhG6Q9m4YfqB4N8jWA611DBi9DaTGW3djMmHtziCLnuedCciYfcjLEVUiNXcdDB13f",
  "key34": "4rNWMgDS6Xw4yJio6VwshURfyrBJp7nFS6pWS6nNExJ1mPyVKEyXz5rbYKDpcN7zL4WiE2HRwVy6ZrfGw5GrXWfK",
  "key35": "2pdh8qCU2ZxC8DzSGaxKu2pfL2TFMm1KuctqiaH5xJMbRM2LuHnnXqGzGXti6erPQj4CxU7bF7gU9a7cjbgYXZAs",
  "key36": "4mpDbDGXTySFgprDsMYrNrdYbGmcSgbJEameBVJ5Gdi8gWqRpJoAvj8wqwsivi4akjSJWV46SgcwabSuG4UiMwMw",
  "key37": "4beuvHhQFHsaehogpAWA4Uaf79sMpi9X7JoXkVVLd7tLQtMgvsKDqcbsEBL92nw8Y4nc2yLLRcQLX85vncVtAThV",
  "key38": "4yEqN7nd8N4WAA4jctYjCz4QkmgRXgGdijqbgVc2ZtqpFMtBt3jcLjEQj9k83dz2J8SU1CFp7RXrdHVgpUH9DBAN",
  "key39": "5aWFT6ijdaecAZM4fMAysojorTUJsuQPG2hBnZnYguk3KzYp66E3T3jP8g13wtKX3SrroMcNLGMf8LRk5UWSMSMX",
  "key40": "4aVZ5xox4zdT94jMsoTTRKaFpffgGeCVyTdTUHYVbERqNUxvw76bMdrKL1yY6BkucETHuky3xPDQf1sZQBhq2gvs"
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
