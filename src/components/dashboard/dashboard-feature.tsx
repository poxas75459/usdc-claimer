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
    "3E7MQpXkpKWLfcjpiwRXb77QuAZWDe7Fp3tuNxtXGViyJk1vRBbqacbJSNHaop58xGjtPh3ihJqWDYH9DnrSFZGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E9haG6ttNFAjyY76P3biWjiEh1GnEWikiU4JrUQDUCqPE8vtQKbAHMwpCQ5M6ZuFKVQ9zdgamdvNhPq6ZrbbGdW",
  "key1": "4yx6agGAGGA5SBkAQwpQ1GCVy6z7F1wY2ridy7Paj6NqeWMReA5X4kLBGf6tYU3tuFEfykdNep4FJPJ2VdgydzKQ",
  "key2": "2wBC7u2YgMbETaffAg6Vzd3GMgf3u3HDUJY6Hm5ea7LLvrrCBRj1bqKegU6GnFVodRAoSHgQnkWp2kS42eGSxtFP",
  "key3": "2zynJBEbkPvnA9ukskC4G7gy7zmNNztjqSkJHsWRgAdfBkahjUNBZunFMN8Xannfbb5AV7NVANHtuEA49qhMPejW",
  "key4": "4bnM2ugexEdLp2UAwwoVbUhqXDvUkV9nz7qhVZfuwzH9Vygr8VKX4fWC69Q2n7FNnweAvSimcZgY9bVZXiQScK74",
  "key5": "45GQxaHimmx5TxY4ZJZx81qJNFBvNuwwoaXymVVM9n7n3DuLWfcAeWc1bFgFu4TeAsbmZ32djgb8QQgLHeJj2sUg",
  "key6": "4fg9dRpuLzfcC743s9dnGfBJM1hMzve2fQmAZx7yFK5xNPEufLrHSnFRshNRY1VsRuicouEaxqF43TdCxMgSQB5P",
  "key7": "3CUnaT58DMgVgYy7vYi9JsUwqvXFYMAAkEjpxjUVKVAr96QMn76zGYZzjn7gTa7Wh4199Xp9ya9eW7ppxXa6mEGK",
  "key8": "cfHFKk1peeQoaxDiSf6X4ieqJoJLYfk1HAFzUw4jd42N8daqSxdhLjBvcTW7QkmUDQKhwAXpimexDR1pp5ZcEUV",
  "key9": "i7M9Zpb5WzFimRh316RXSD1PKbvkBbQ986DJKZ62cY8nEb7x3uQzWhx8CBvf9p5gPAmzLR7CauTiEWm52ZMA9ii",
  "key10": "4XN6V8LXpmGDBEYtS8YtLNDMAW2Z9SacpyVuGvMxFf6PMhdbCBKCCM7L1G8NceFTdHFKgQEghuryD7CKzmDRPE4P",
  "key11": "5NA1wi76aynqBVexgT2bqQwzUqLUZHwbGMpVCjw7v3C2BXveb9Dq5zEyQpQ5srzQWMDcCZhtAc2b1edLLm5eyWjt",
  "key12": "24TDrZ76VyRRgpCiiszoAdn3dumhCWhG4eBmDabsVU1Fs4rrmDbZW8qn5yFe1aFpXizNkMmrwwdAN6BsTkkxLs8x",
  "key13": "6r7xV3qCof11kTdaMJndghHY3VvPstjoqymdE1qWDWXMtkLt4b4Gevz5sxbPjxo3JfZjjdYhst9tkrivGmkzpN8",
  "key14": "4pPksf3638dsEFihqsRYCpXePUE4crVkvaHk1HCCovxE6aTVaxJrW7GJWdNyikDa17h7rTC4BEafAuHEBJdTzBYi",
  "key15": "3hCRmd6JUH5QbnWcXjTJbfeLT32zAWf6wA8HjZS139AvuongpTwRkVW7weXLL9nbyjAEzznowDVv3P8V99Yfy9QD",
  "key16": "58RYgewy3WYUuzsx1chH1pb8BZZG1NmcMEaepFNp22xv5e95ehfWjUikvtqJGxutxrKMqcg4owFTgNPfjian38Lf",
  "key17": "LSDyFfFLrCpE74Hs4FDv5rjXAqMV6SZLKAZg9G6afQpYKUGeHxBuXcudYStPrAGtGbKrNUiyzFrxizR5hxRwarc",
  "key18": "4Kyjer2N1jPrNvaM2FoiTfKDXjzFmazmo8Br82K7UPNVD1pfFPnncNmcAvxX1eqZenr33NJCHsyMpg8a4fH6T9xb",
  "key19": "3qJuAMqdtXXCo8DLANu8cNwhBGNA6W2YQWo56CFFxdURwRVyhQGXe1LpoDZBDBjMT2586jFZy7Lwe3jVSdXVzJKC",
  "key20": "3S6mXnRekijWEbjDVZuy3x23cSSz4otyJtMxDtMFdV35uratEBQ5eypvnYbpzaoY5Uw1JDfPnophvMGYDFK6Q4Hp",
  "key21": "5bsUeU2etdDq46TfTHXQ3sCwwEYUN8gjtxMhaXmErPxgNVRSLMkhMyDgAdNiKg9uQCSmMGymuAbuPkRCL3wivkVa",
  "key22": "4fdzocnL8GhaBXUYa8fBjKxTtRfDNQUAgQkoq8nuhzJfPhFHrcaZStDcb1Qmxn6LvZWD6y2cLr2H8dasUgSayDyd",
  "key23": "9FBbxKc1rB5tLCUEvw11v3fB4ztLdGTKhpYnt94aeBJjVdfPDm8xuNUznEkc6BQZ8TiPbJiE9V5BbN3WDWjHek1",
  "key24": "3VQjLxdzfTTs6uYRuHX6Bbma5RiY2HJxYTrh7RFMR3qTDnYP5mDigDYXG1MhQq1ts2F4AxbtkpHBFFiQ2uwNRU2S",
  "key25": "2Cz5szTBQXpoaPo3JyusQ2GBAA344eDpqFi7wjzTVNjWJh3XSJreFHETCQBfUB1PLUyUwSVHW3hHW13gyTXnFfzC",
  "key26": "2yb11cMFB5avvGH2A57b9QTR8sPYhgVZcadNVynAKAEXF3BQzJV1hZgRv2BEWRQhrjhnXjBtAZcohamgYXuGxSf5",
  "key27": "29VH4kZ1ptq1cQPfwcEdP5qzFjn2c9fmoK6fzvQSZ5Q9JXsf9HMi6cX2JZFTZE4BbXnAuhfcbsVuA3qhmqStFSMU"
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
