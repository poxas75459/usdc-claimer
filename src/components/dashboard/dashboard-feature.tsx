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
    "4DdMmyxhQ2HL82wt8BAccHvDVhUPVQZbVuShjXcjkeewjyx3DKb7WbnTKYvLn3g8oKFuYcbi3kMQWstCPAHP3KGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tmvfJ6wTCfDpakdFq3L13eTZxpHdCkjcNq9uV6m6AdEb2uSusyWj5iZJThQ7dTKggoDP997LXhtobuveA4ns7F8",
  "key1": "2XvH4FQUaHSqc4N4zVKsidUg5UwL6f6VogtnVzwEQmYxo2ALVtXnHzpWbZiiUUnndxDDqRnCoooaYKJ6ZCDnbsJp",
  "key2": "ELF3dgo1ATdbYzo1d2r5HVwMWSBoZzqvPEGeCGnkckF9GJwRxdyoLVAsPFMiX9gKGtGJahpgM8iMZJ8t5KohGFi",
  "key3": "5VjfQ3gNeD2nNQtRi6HcixFCmELmFwJ9Mt6NXCu5VgSqZK7Nby2S4ijVvpsnSGPLcNEWzcLKS4fgzKys2dGECnkb",
  "key4": "3zaji2qJqCq1pWLrRPubNijauGCssuoUA1FbXviAgAgF26wtbZgqFuERZaKCNJoLz4ezKSPfeaGk11vCnyEo25TP",
  "key5": "5ViFGqwHWtnyRBtwk3pJcoGNUUTnLibsG51r3ccJu4X5SfvSpLA5XBoSFoADPNty9dykzBmHQsx3jNbW9N1ehMj8",
  "key6": "5sZMm2yRWCtz6rNXcrQp9sDgrgoyWgHQv3RWerq7Vx8sLiU3mYcmYuMjf3bkTL3P6Rv15j7L7A7NZBbYqcrcV1TR",
  "key7": "53cpV8urUGDzaYjWkBouVdBK3ATgqt1Y4UL5cprC8kMXm7YmbEARoiPquo6eab6jFZ6k6SBDr9vDxUysHyUdbJ86",
  "key8": "63j729uguvDytq33nFZShYJ1xyVbbW6i5MmN5KdaiTuCJ2mUVbP7s8GU1yLLoA8i3oJZC4e3nTexVfTQxtStZbsd",
  "key9": "qCfuTaJGTRadFfxbxxwRE4iKBtosi34xkwWiqp4ZaCRSsCV4jQGJX63QCHVsUEeVVdjgXgZWY6ooY7NCh5z2NMR",
  "key10": "5QjW8CUVYKU9psbqFPDeqjLv3mLLpT4JpwzevMYPqqyGeuqy7jKz3X463djenpLSofyzjQaiwPbHwkGnZVQ6hSKK",
  "key11": "2ocPzayS4FKgKHfz6uQgrzwmudzkLSoqGu2whHkMSKS2G3TdcZyLTrcgPyJkPNP4e7m1XPiE1faayAH5GCVf195d",
  "key12": "45SxYG2B1t2kAFVovmb9D3ryjVRKSGMTVfCimLRVaC7nWXU7fr3eyGN4Uck2iAdkzt8hvQbqirXReEXRTvPTZi5t",
  "key13": "5fGV5WBsRP8Uzn4JDSukoo9hQYiAbeudHs9ArDH2cTdYcCTmNCinrSTZeiN29W1wC14BxvKxP8uoXGV491a8jBhq",
  "key14": "41M89eBSJx7ZsM2W5RyM4kGyV8VE7G3z3psVEV5RQRAgfyojwU8JcrsTZdoJEkanmSbjYbvqKesCnEUFtAhZDwnt",
  "key15": "2DnMm3rpUWEHy7dLX1LtyNyjdU8MBfxNqA14JaXuC8Uk6mpcuHJPRCwjvHx6ZcN7axVuuiYVrmuc9Jr4VTmPA1Vg",
  "key16": "437uFfkwursVzd8WJ2U2TbhZPeSNiSfCkT4aMbEtiQCPzniawXPyhjm7ahUxkcKJ2V4WHExhbUpYu6SwakkcoczL",
  "key17": "27qZSLoUHT7B3t9xLFD3FRMJX8jhZfdFFQQbvtgbH1NQwCdq4xz4Qu9E5QWdSnZHw5Fytrzmt52Z2mHJweTsVWVg",
  "key18": "4mfMD9Q5zQwY2A7Yk1KdzHnLWX5TQwqgP8B9oBMevRLD4g3MwRmAJCbprTueuJi68m9JbDD8tuhKZXvAwkWE1VsK",
  "key19": "2FzYXBLdAkzQDLo1PnPEQUK2A7BTXGRmdo3PqQZmmwVPpCL7SxwxVyMG1J6bkBPp5vLRFJQQs7yCGR56mwB5L4Jp",
  "key20": "4uxfeWpTCB1FgBUHHV2PJ25JDu4xeM3Dz6WPJQHgL1ZdKZG6ebLfoNJbrEoRycQXckj1wwSkGVPJHxtG9eQCGn2s",
  "key21": "4fJXniUFyCZxLFbkqqwqA3TkQ2Jj5VGv9dr1Csh35wFikwpsBNcs1PHirB1yLJjyHh9SfyFvLZ5JueTw28G2JZjh",
  "key22": "2r4VQbKFiZfiKj8zBHVTvvn6qG43gK1KwwtTqbgJn6oshysqPAZj4EWS4DQTQcGedtYcw3PyPycAtfufpTVV3BXF",
  "key23": "Dcr7Lv64LPwFEpz6SVd5S3T6D5zG8LNaXpsLD78sxfz6SSq9rP4zSaxFeA867xbRJLq9F2LTxuhVrhVhDe6BKBM",
  "key24": "2BgBvMCqiYbi3B9mta7bgLgwdvxFKapTSnMmpN1YgfT8aHaE8H4ESZuEkryd5dy6yUMV99yFDWGLLzKevYkqmGvh",
  "key25": "3PPLqGMVRPUZvKQGBTZPVLbPuA8woyUvECP9MYiEGbjZWEsEjREGYkqUDzNvGjur8aA5UvqEQvjkbe4Ube4oP9PA",
  "key26": "3TQ2yscCSxn7Rv3isiuPYcJxXfdYwWd8GAxb8wGpG3CY2Y6PG2mvTdHskReCM16pcbQyuKv75r5r6Y2TDqi5Tx3U",
  "key27": "2M6fioygoYhRWo4yvF8vxNeAsnLK3SSRdDJv5bDE6ZvroTiHQx1YZsdtdUCUJpFM7KNAvzRz9kE1fnQ6bKDGTvkM",
  "key28": "4Ckw4iPVisdw3gfAmYC3ukYaXicm3kzjhhWynmUEhsQfB38camhHZqDh1sEo7yZbDgTm55rDafuFbB2qVfK9k6Yp",
  "key29": "4hfrrYYVsWVe4D3tPANbC2MXJ8wMxfScHczB7T6bNywAVyDPLCYApGjjaUhbcqeJRVg3CmBa1wbfaV8fasGkZnM",
  "key30": "2T7QiYsTnWrDrH8pu3efVRdjRSECqyGgJamsSmiSeNghtZM1QhK4chwdTtYMCvLQamhKzKooWaG9UXY75Z2yZGeN",
  "key31": "SuPpMuDMSZ2JGQB5AX2KP76dNKFBy7VaWCqab5f2AfKq5LpK642w49ro3TL2cnEhzSCSSJPC373hKoE9wZ9PgtV",
  "key32": "28G7WtWzE5jAdHp5cH7eWeTb3ZAfkEduhD9NTBe56iPFGVa9Sp7Ed9X9mxQPCk536BLv5RrijpRJj4zpCJemrh51",
  "key33": "2YsjEEkudZwo8RngxCsJZeYu5ATNhgjGKyWFFNUd5Pa76thDwTmpCFzcyWuNQgqtRMUvZmsbDfzsDe6Rb2n3hQRD",
  "key34": "48xQpi7xpMvxaecVun6J4NJXdJ5dY34yC87nodRnn5Mx9EvDfn59dVV7ceRqE94wGjnHP6PZMvvvopY7UN5zLvNB",
  "key35": "5vwApe8DafSCsiMUvC6nHj2sBgGQaAoAPNydFCzzShh7FuVdsvpG7JKk1Lan8hJgQH1Pnxm5v81mPTGm7MGwQSp7",
  "key36": "5GZ7LyEjRMw5i1FWPY86B5pNEC4fm7wQ63f4coLTfkkRNgTYCuxd7fXe2UACGBRwJg3zxdJrJqwYYvda5YGxizsz"
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
