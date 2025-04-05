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
    "ujunHorgtM1C8oN2aSGAQkaQvnGQCX1xvCHvtpQYnfuKcG6fKaqWxFbRb7dSKHi2PepjodnzKG9hdpk6hAMK5RW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DUxVPzgEEr2c4TywkuZoD7zJHG94FyivSyZxv7MCWPhmZ9r7Qspnpa8wgVJjFuVmbg9pG7rBTXHrhXD1Bc3kiqP",
  "key1": "32N4ivur78DMxpRGmcucVPPkUWEaKWRnenHaSauqMaJ8Dd5CJGxwe4AY6W7H57wjgCFUHHPCiQtXCA8XmKMEVbKd",
  "key2": "4er6kKagmLw72UmJqryqp341W2eNb4A8y7SasdYdLXtEGJgdVkfehYYy3pewUFfx7tsCXRyQ35BsuxXW8G1MQb8Z",
  "key3": "4V3PF8zXpjBRxYLAGnVWL6Hi8hceE7W7miTRbsoBNmHj6hoD9hefhztfj2YiGxbcrAZx1NMs5KPaL3ZXR3bgmXEk",
  "key4": "3zrGLfEVag4RnKQtVydujQkGwHq2wZZ3xs21sBt3NnZ55JMeuxq4nqdtveV2gv8ZBmNncQGcbF3ifiRe7PR3B7Aj",
  "key5": "39vGxp58JEYdxCszWaR7mKvR9LXcwMFqX8WGwAg9dbJf8LF4b6AUVVdtDVHMunftgguELSfmBDv7uuR5Ms4kHcqC",
  "key6": "2hTsgwNKbsrFgdVbosMyCtKdsrNDAunHFcVsNdu98YyDYcFDp964dTXUWpTKd3bhNA6oYoC1cX3jbRkBYmwsNckp",
  "key7": "9mWxbsPRCCtUbL644zN9kx9V3SVbnKKSGEjZaZetw8DuDkUHNzTcFeYrWigfMAK9YMGJyptxaMNqyAUd8CgNmFS",
  "key8": "54hWZBkhiqNff1HMmzhrXAYxUWYHMkVBE98A8wtdmjTd1U8eiRTaiqL4buj9rCSF7mYq8LNXa75aBUVUsQTCU44m",
  "key9": "5ZLSxd8YqJbwDBQypEsrTbbtd152GtaDLe565dTPEou3ojrUhdck7w3TQm4LhAzvF7GBu2BsNqYgBAkx4ReZsS8P",
  "key10": "5fWUSV1U8idNAFZUyQKrvahtda34oeyDCHmQD98UYyK7TFecuEzyjixSq233WsnQ3AT4dAj7icVxBsEYR4q5Seub",
  "key11": "4G4MJm5STU3EuaoXEMZ4zy6jhPvgKkutvJRR1M2Ktu5XeQ8MFA4F73NEAV9Pgdec1LzcPjbbFrgPovKhMHaDgmaf",
  "key12": "p3gFSwpNa3pQMDViY2SnV8q34qTm8zEP6JScXgrYc7sDPgQebjnmYfKNS9JUKJs83LhVfbAsKfyztXJ1g4dhKph",
  "key13": "2a2STyEQPY5438CPuwjcgWMuaoAHMY4dSYuDq66fFLV4w5HeddnyCiqdtjLHerhdeMk3VQLUW3AGzTMZJtPsZR2B",
  "key14": "5Y5TziVUtmsa2Fwx5CYf7AdResRV9QiCjwEDWZbVKToFfrdsEMr48Nx1EKVMGH5EiXUKo1zX8SpvoM5AuHL6aZTE",
  "key15": "47JnMhiQbTcaGpCZzNjgB7uvDxHpThrQxjSVd2ZVCbGok13hJ5799keSpqXsC8f5LwGpYVV55ptLJKtArtfuhfiz",
  "key16": "5a3FrEeBLCbep3PpPCr1bTnuY65JSN7tCM62u4fHC6NhZUuiCtZBxYRYtjktDBL3UANt2SeA89Smicvtd269erYb",
  "key17": "4dBtPYw1Q8AaADnwEq4qaY8s4FmCemWY8gyC3CRvK9NdUxJ9LHF1Xq8E6t3BgJhEXo3iCDp92cgKXBa1fwDZm9X5",
  "key18": "5p9dgHbVywyyw8MFs6wb8S5LDnxSzEVYKBg9mvdfunzCH1jd5V4yGoMuZeNjEmazEfLK35LbTjvVaAQBFNEeJTav",
  "key19": "4ds8ZADWAfzGq6efaUmarFnoEUauiqW67GGxT7uQAAZUaj1C7Ph8Bmr3f78F4e46cJyGPeLqnWQzSFu6spgyeRJr",
  "key20": "5UWdfVPPUyHjiXExBp8uaGT3gPRoZY2dQjHBxoAnp1uVZ8bhCEGYkZyuQdvUfFPV3pVVvo6Ac3DW23dYPvS6LUZ9",
  "key21": "48cq6SkSgmY6DK4u9yQptFuxdjiDr6kea3DUqKRJ87noi9dZJ1VbfeWWAn6ZQRsNRwP2KJuBSfcmxmakxFSHJ8vR",
  "key22": "B3GNxHEwbYFwuZEshhxa9GByTdq1pjnXyNff17Kky7ef2VcD5nJepShzE4M4P4rE1rckdTDtqF22cxULMBs15ZD",
  "key23": "2pNJKozmtEtdxdUJqWxACWJeYthzUPAUHdiVvsqaqwXUpXQrsxH6p3gRLTCDyJC17zDwbFTR3wug27RttNEuwVHB",
  "key24": "25KR6cD4y7QimCKmFtBWU8PiXS3k1W52EbJpHRAVegsupXxC6PaavshMtEs8ziaC4ithYu8RkiNb4UQJptJhMxNW",
  "key25": "qpjRnWEJebdD34RJFGXig8bMb8U8nvWpHDUM6rKaWbD9WsZbFvNprADBFGBMe7MFDnzVvmH1ns838pqup2L6sX1",
  "key26": "4GomJGGqdJMX8RvWnnQaU3G7K3JqnUQwqwuxb9CcJMGuWSYxpBRVA6x5FCyVAs1Xa9YDxe65AghsL9PdXLUHudCL",
  "key27": "4Pg2dde4pLJtgBSEm6QuX4Qpbpxxws3MRUzuPFFrX3JQEdcXn4mEo6jpGZHEcnjBhwDwCbGDaiuFLnbQvv7Lmg3G",
  "key28": "59SJDRfDu6fK82g7xNNhqZVPfijdNw4N1J8FMfc16mczBmQro1KtbjbJUtCfy8ENo9Z2y6cxD3BSNhV7Eg929Jaa",
  "key29": "FPDW4g2Hzh99FeXFPr3TQwSKSyQXf3jtBurprwiTvAW8MK9FFeDNrLLLbuN2SrtNbuVLFFDDJkgWTNAwKjNjVK9",
  "key30": "5hg9wtD3SRK7ALquU6SHVtHUyX9g1rn5vhpLYJ42PPf7oFLyhsHDjSQyshD5HYP1ztN6tyRt6iKZ7R4c9t9NvmBT",
  "key31": "51AhtUwaMJzNqTDnKVvpALUteUi4HYrQvppQRP1oauf83SfFTgk26iHMUu6JKHjBXVhtWgwTRroZAAvoFbP2m6E1",
  "key32": "5ZSezb1pD294S3PcEvPjMBK9sqWqTjiGv52WKr2uvHnhu4Y2dVYZ3bD4vcfMmPmr9KH8UZjiXer4daLtgugNtkHv",
  "key33": "4cveieKGpHeNNaqA7ftv8SmKFLync3kp4iQHJurmwhePYtS19ECeERk1Fom8qoYQRW8HLQeTwYh3RsK8dajZHoRZ",
  "key34": "3sTY4FPBj3eHEfAa5eQXH9tDi6PwXHFfRJhmh5HsoyR3rqv3rreJxv2zM3bwwiRs4GnMZidoDjDH7hgZGZzBbK9Q",
  "key35": "5kZVdFbkPFi3mxAxyWYBsY59mTHLKnWevZyTNpXYqrK8sdLcoGGJcogYD9kG7S4dquBJNBB17xUxaQo8egB28Tmh",
  "key36": "5tatfk3X1pFDRR6yBbHDyu3RW3gw6xiZWP38zKykWa6kHc58QiJwCcXgW5HhyCcoNgqotvtUTSEXk9Jrk94L64vV",
  "key37": "4F6Wkb7sSrmubM3B1Kcj9SGHFhArNZ367CExovGQQkJ4J6iZiJFiRKSDhpxtTuWzxrYaKW4aJyXFdXKwdDEu7jQd",
  "key38": "46wRYWsGTyi2faEeqiQu3CDievLDwWTRy6UoEoCG6oSMG4AHkKtPUMScZJv1fqhssCR7FQJJQx8F9EYUzdpDVo8m",
  "key39": "5vnoQxLXxFoH3YdUW43zNhhEhBxXM3rezJmf46i5WR2h81gAK3p3ffRn81wG5iN6kGuX3CHxcmfJCKR4tWHnnNmn",
  "key40": "4RUXFwz89Ja6kcB5H5fwvE1TX9Dwff4QUytKwBe8jcUXucByZzNQTDBaUKAuUB5UGB3cvPJrkAxaTc2MfZwhuRVQ",
  "key41": "35q8gDqfBXsq9rU2NmSFPvnrEqksMrnfKwDd6wKtap5HHQUHXr7kXcUsoC8HkM67NY6x6gBQzF7AtCJS9N3ypM65",
  "key42": "29MjZtb9sPB2Gw3VP7YWKHwCBPuq7HhuidHiEgaQTPt8T1qUhZdWcj9kjMRq13WE7dHNhNGKMho6ZcTqLT7UEyqJ",
  "key43": "3Ja2WsgKrad6fdmDUfrjG9zxxcsZNBBSmk1151tyWntbad7myPy8t9Rm98PzXYojFK7WcMLJZYSHzDqf3tRHoLRC",
  "key44": "3YGj3gbi2PtrRuMYGX1eAnSiuri8mYdkwAHB7yeHMpU1KvPLYksqUnLsTzAcxSGtDsZfCnGS9eXg6P6Yqkg9vvoF",
  "key45": "2PuDEdWMdCAD3oKRU22kPoXb4LwXTG2ahrLYMx9jV6eU8PGMUo5FyZ7Vipw1qinXERj9D2q2rzcbuv3b1cXmUh17"
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
