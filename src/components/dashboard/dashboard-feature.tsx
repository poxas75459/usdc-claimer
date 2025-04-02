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
    "36b3gTK8drLMtm6maSDe3vBqqokRDyZMCdXTzTTaLLT2R7Bb1S73r6XbgA3fEKtPXiuXhGTWBwjT6w5ngXPUpmuq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pzwRUAP68YPZAQnoz46JsQ64widdvZ9DKJYeoi58ikMr8cZdBXk66SomD3fYibeCNY8PuePuRy3opbybSYaiFwL",
  "key1": "4RxhTZwaHah3GixGiXYz2JZ57MZMkXCVMF6nMA5hUR3ik1ArdeAmBnGWuA2fTsoU74oRYm85ReC4H6GuuHxEkuJf",
  "key2": "2Tis1pEw9UfMkwU2VtEacrP6ihdxe8fFKNcQTPZkKA8v9RQfnDTSgiDVerXdiAHypg69dZXzqaT8NDeSBASk8AAE",
  "key3": "5k1BshSyB4SJJyxZJ4rRa7STYXVhfcggQeUXMbC9m5uGQA4Jwkm3ibETyJ9bVNBGrgMQfG4CKDcwFYsww9L4gqge",
  "key4": "fcuMpLjxqL8pKqcBJzRf6rgN1uJUwPPuE8f5K2RdxeMEcgqAqLBb3iwM8VzwATNu4DbmQNUGcXzqsGek5Crvp5P",
  "key5": "2ST64V3vr6H41aofBdSFDxr23KqJvXkx77U7tz3HbbM9skHCCcw4ykNHNTDZnkQMhMaaEPheom9G4zEGQ29z9wH2",
  "key6": "29MCq25EFwXXABM6TQLWkw6U4FhNeqf4p7v6bK2VUpCvuLRdQWMu72JgcjUWvXa879wHPkyWCNscD5tc5RU8CW5C",
  "key7": "2cax9eAHrfMGLsKzD9BZVeWowHc935SpZLer1tcsU754yX7yuABm1W6zmZaYQGFKgcwWUCUpp2QXXPPM6xZ99SBb",
  "key8": "4Bf5uAqKjLdptg683pDzFqqJEBt5JsvydqULxDmqEWG47CCeHW1i9KZHbD33VVZ5Gr4FWo3c8xeN2PYzZq6R5tyh",
  "key9": "2PRfMAKn1AQLkYsaeNGJy66mtGbXk2dHcpE46Y3BBdo3MUzngoSKw2prRpN3B9zqsxhUSremcnHQnoqGsLEi8aZK",
  "key10": "4rp9DEPmDa9josfhVqK2oTsx54ETcxKE9yoAQ8TbCH6naqjE6YWRDrN9kogxvqJFxRCpAzr2Hn5qHPUBoLKzpNJj",
  "key11": "2dY1zsi1DVMEAgLDTFwuGxegvhfDAN6oRyqGoFmXHfgkXMV36Q11bakQ1dVEnvXJNrfrfdDmaKfZp5RJhTGifF41",
  "key12": "3GG8mDbDeT9mbry5mxYTZkrKq4NLeDSh5Q7GzAXq2YroJR4KdYXf9c4tQvvy6NYiwJJ9RLhXFUxH3xJCrxiUNbob",
  "key13": "34rDLM3AffYTeoUg6hi2TwKfQ7BxXwE7kFacitrzGaHnwBRatLU9C9ggRDwNhj7QjvjVW6DfhUBWJokQCYvVX15a",
  "key14": "3unEym2gCmWWjJi2mh3nUqAma1j6X13x3FcvBp3b3YjeJVqiuGiDK6kvP8jFahpXZuU64bvA7hKdMhc3GbmxMuBt",
  "key15": "22oyhadFCeijmX8qiXEwbJCTP8dN8qMryujy4Kz7zovR2xWpr4xuFuSDn4b85ERsMEYv9HvM3C7prC5SLP6SMvav",
  "key16": "FUuDTUYoAvv9Jx13nmn1ougtbKR9rhTHRdSmWZMePEsD8iKJG9a4281YXkv2B4pUSaFQPik7S7tSK9YyDJdTCiu",
  "key17": "2tHrV7Pyb2rbcu5wPgx1vWFeWvfH4zxt39sxLcnvUbNtMoYdDAVQPrMwMKHbsYMDj425x8Fhq1KR14e3Wag1Z61i",
  "key18": "4gu3w5ZWCyiHyJZpwQu6B9H5KAozi9SmRBCdyDsrVSjnzWDuR6DRRqi66djnrp25YqJyx1sQ7cXx3AdWevj56Fyp",
  "key19": "27ctYdks1xHq98KkLiUucjTWto7dorNve6EnKDwiN9h16JFXE1KiCqTn8vnsqLVHbXQfVW9tdAVrzyWTxfDQ7cQ7",
  "key20": "2VdMaLDbJBGQPyJuYXniW52rqfDrk7SasgvSJS3NbhTK9oHacuChuiMFGqNMBL3poGu7PfK82nQKztuoM3y9Zm8r",
  "key21": "xrj9VSdDWf7rY54putpD8eg5m7DbWEeQN7ysKnUJyYncqp2iTnw6nhcVF5K9kLkG3UxyvsNFfnf3o9mAcCKWwUw",
  "key22": "5BqwK47hqMEworMxxwxB4NFydW3bCg6YMNyaGxSPcvsgujwcBXTjQK4SSqYSJfbCpYeqSkvZ145virUPpDA9DdzK",
  "key23": "2vdwTdLyzJogmwqZNVbnLTFuV8QnK7qB3zGwH1oKTA4FQ31qSREYrZK4aC4XZCKjm8T2gAGJwhHshJT44nxBrcGH",
  "key24": "2A8MP3gktDT8kfV4exJdtH46MEogfX9y75vnWuTRhHj5ZLzfCCGsGWti6kqoFLFfUaRhMdnq6L99WrSrBgQ6e3zF",
  "key25": "5q8uViKVMa42ebWnJ9ixLQCA4poufrDtgiHfnPdceucxTiDQGyZe7mTt1zHDC8fARd2LCVWDDnzkfH9ARJYBBZMP",
  "key26": "25vKHUti6RbizW5y5RP7CSKhBqTXjtHDfFJzj7FfpHYL58LEA7HxAiDw1dzhTUVefKMhwWt6HWbnutbYJd1t8hnu",
  "key27": "2b3uyhfmuT8m5BQMj9ez63nfhgaHkdhCkX26Fu6BHwrh7Kaz9RPRhv3iEXywcQxfuHpsWvfAYmHfaNFV7YTGiDBG",
  "key28": "4bmKaueq5fobcF1uY71KJgoyQmLbP2h198Qbko83Gy61wap6KZ6BA7f5xDxsYbU1YB1AFWWNfeFxPiwLb3BzHjPK"
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
