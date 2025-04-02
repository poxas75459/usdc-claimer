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
    "2bqfUwdCyFMbQe1HyKD7DNRZnc9gHgipXcRhGtiBctUSeTV3dPYm5QHrRGAX69adQkaY17eeMkGzWxu4vLKMVqVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t3V3iZwrxaJgvULvF3PrtB7R3YhCtFuDdYpGGCEh1nx7dWxmfLcD4BT65uoD7cyZSJj39oqRWWLmHudXzPMsX8B",
  "key1": "3y6m7ZXftwmNSj1gfnZAd2pV3TZX1DMe8yvxSemHmqzScGLFH1RwzRXNm6CCL7zRSpCgBmuThqQmt4r2UDfmkjg2",
  "key2": "5VFZmLf54PjehaCEtzTuwJpbodQ8RucEK2njnCXU3ZjcZDQX23DfDUvbP8QYCbxWe5bDWnvBc4UtjnNnHwMcCkN4",
  "key3": "urfB71PCEMacHgdvqoQEDoWv9BKtnBoWawgu99kqY2oXRhp7wWpRaEbGZC1PZj9wb3fxFXvZp2VMbL9RJNPmadD",
  "key4": "GQoYmq4JFVHo2swrHWpGmB4uuZyYmTdcT3JWRoRvo45jKqyCTC2aiyXWVjCBPtDgf9uu6RTXCMYga7eqDp3Kbcv",
  "key5": "3y8jzyhirzsLxsq6Cz5uAQJoo841KdvmmfoffuvpZL9pmapVqqqGayw44cEvBehNGAqsaqKGDs6WibNHip1RsfE5",
  "key6": "5rc3HznBtLwP6zFrUpbSz49hdtQptAfYMuDbjUCewyQ5USpNBvpwHf3zzTToUF1moCvRhRJHcHkas2KwwPZKhGtA",
  "key7": "3Tsspb2kwA2kBoprAJFL52nZZVkxshWHG7cpf2mwqaBjHbjT4Fku1ZZ7p2Ydvz5Hjmew3ktdUArcnpJBACzoMwLv",
  "key8": "5FqcG1cSkQKBsVpho9tZcvBbJfi5KLXeLzWqCWFFfei9YRw3b9tT6pWLvrtXYsNbJ6ra1DFDvHHkA8auZN2M9MKp",
  "key9": "4PXwW6WkREhXUYphTbyFhX8xzGTKkfqU9zW36mUjuSZv2ExtBoimYdg6Mq6wgQ4mrMJRdyxYYfFhyGE7VFC9cuKG",
  "key10": "3tcYrcdDeEAR7HCH5RnJdtbJ2cPCA47jTK8SXxX97ujrgUTkuSXYxC6Wb94jfZ2BFnaDNxuYu3Qr5QFUa8GKtRvB",
  "key11": "2rnrF5eEbPA156XWj3mdNzqrXddWLPsCud6iBgds6BqPLgiz5uKicF7opKr6iUpH6jBtJVsLciQsVmfLSG1HD8bC",
  "key12": "4C6bqPaxPwZn13NuGSf9TaySo7FP6SvFNCWR2futUMySAHFUsPprjHjSPtnNj8H6FmkFEV2Nr9rBK8GETtnYzrLX",
  "key13": "enrYgxVoPCB8ZB1xaTtCR1kC8RA1TqK5StBstV26e58VEXwkRQ3jYX2ppgBmQkPz8pwCmdahbsSh7eMkX7W8RgE",
  "key14": "3AaG7L8EySzQAxPWMcLcSKVfiiaAQVwK3oyXNWAtEYsHwaCwxQB6KAVPMD4843jdaXEuhQayWm9ANqL3A4jzu5nJ",
  "key15": "4r98gayznyNsYdyevkBbnqD4pFwvE5fbYMakvuVHKcQdwWGkShFFbX8c1Y9HeS3FM9Jb9BwShWbC2rJhafh2NPD4",
  "key16": "2o1QyMnwEHyE8VA5snR8hzyJRAvnrHJxxWFfDAzJymWWt8y72MAEK7NntjpitjmB4hHkDWS9ZtpfP6KTGaQyDpxT",
  "key17": "2zM99W149Lu32dpGqcZuhJjQopZHsJKcGhV9fafPFCCFxougyndsifHKUNixp3KUuLdN4s1xepn4WjyNsc7msc1x",
  "key18": "26bCeafLPHgQBM4zKnih1AncLUkJkzDzHxEGzYt8FiEVo3w9sQkdUbVHaypUwQxAtyt9D8hHQqVGRt6yHwZa1WJD",
  "key19": "59HxkBWjbesTvh477RgQDxxRJAsJjnq6wgYzybGfLuLaA8bVa7EZ8NpKxdP62gcrh8wJtUPpZ46jbFBDfVfBw1tW",
  "key20": "5vFQMJS52GYLfzsSskLVGczsk9NAxU2WdEYQBLnu6zsZugiBvpCbrsszR1SuJ6iiMmrAJuEDi3xbDkmMuNiJsCda",
  "key21": "yX5tKPw6sYGS6AqRg31jucN5KT9BCyESB8gNbnfyLfdFvzv8JFLRHwkF2EUgqwt7pMXMCwE6NxkjJEiYsyFVA5c",
  "key22": "5xyd3xVSvwh8iGFprXW51YugAwUiQFxgSA76b1xpwjTd9VPsPYjS3BRvnFkAzmMhTv7UMYRqT92nUSJtcHk5hL1v",
  "key23": "2y5Q8Fig2WUKeMhFriYvtZyHsfWJvWn1V2CXiENfjAdHcbrTM1vmF2qLMALH69TcmT9QChNfm3Kii8wgBYcSHRRn",
  "key24": "3Hxf1PG8oNbZLN1hS98aPtKcuWEnvhG79UBXZCELXJjdaMUFqqGyTYSuDLHNCZfzN6SRwpqayjXyA2zWFKKMACf4",
  "key25": "3sfAGedrXWEbXEkuPuHU9bji91MrGFbPuqFge5cASYbony7y3FQMzfgjuUFVbskNLpnyCBBax9VmNWfAp7W8WkSB",
  "key26": "LyZ1q6vjZbbBHNviE2Wk2szPnPwvaGZdyjpCq6hLBYm13bTEStGzkvvcowCHu71q9Th8QKQpuKrkCqCqb9grT1L",
  "key27": "5vXM1TUZBtLvFekBSPT5xptrDZ1GwrbfTZgutDttTBMmDbH7ce3JTnqAJn4PETzMrfPiadmBeMoxzWyhhQ6fTQ1L",
  "key28": "2Cmxp5d8eq2NQG3CNemx4WZmpwb3fuKqegYV3ibav2uXC6VHbBFVNS3nNeC73Mr4AbCgaCFfbj2BcFPPXq6rc7GD",
  "key29": "5oZ9KKNQPuqzqs4E46FKosy2oNRjYU6db46psyXsvgPykvaM3fbVLGt3nBKSbes5fEQosm1kzWBaXbeZP7y3Zu1H",
  "key30": "qPuanbfJBH4qenP6PL8voebymc3UF3RfJSrTLAMNYgv9J3464WRASTD5zgdgdC5cGrGuTK6Mh8Sh4v7KS1pzij4",
  "key31": "zUJkio9c1QkFK6vco2e3GVBvPVw2Fxh4zx6Zt65TmAt5QmbpMDLCZBzr1QLNrKbVbzE8Gb1cg13nUUgXgAMhrvz",
  "key32": "24NP4fk7ssVQg1igQKea8bBFFhxE7iF3assSRWEGGwqWBeGFG2ydvq1zBWzb3u4Z951FrgFqe3egfaqoqKomJMWV",
  "key33": "2gFzoeSPgPbFy8pE9v1gktLYxLHb3XZbq9b3rit9wSsS4n4W6v5kyX5UxLS9zkS36TBJjjbSALKLEPuU1butwsh",
  "key34": "gNygNFq5dRKPAmEHdnGZB8Xh9WL3CSjVMEYcDyhu8Gs8jS8yRk8zXr9CX9v2x12h9dcuN13tf6r2nWjUDuTLRi5",
  "key35": "4zkUjR6tMs3Cz2dqCgewkpBgapWDGMzm2r6DC5vbMZS2i6J3maFZ5Y1rfFVBWgMwcEBkPnhBTWS1GBa4mXcZa3DZ",
  "key36": "58rE7yiSVRMrYEC6g4gcf72efk5euJUvWJwHb3mje6cUjRYRkJg57ouMjb1aZAL7uLWDHSUKNuEXDm4oyhH44wHm",
  "key37": "4hVaWfPUKoS9tcwP6TtFQ5t9XV26XyCRtEriU7SsMg4NnnFMuqMwLFoRpxDrRdkXQW21UPAWsdSJR7aRAVSwxDwH",
  "key38": "3UxtqWKrHTe5vTezPAfRbqARH1LmZpK4FxF5gGnPxoXQUj488KU1QfFamiYwqSZiFaL2Zbre95qxUPErxFaTjKtZ",
  "key39": "5JpNo68RaNk4xjMbcVmcetHVMupX7Yo6L3FqENgKJGpjMjLroPw14oGHfPLsLf7ReeFtzTwLMEMqCYjVwQsme6yV"
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
