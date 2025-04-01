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
    "4eiWg3B6ZcEF6uFhtz6QBkv8Gano2JbZkGiL1etSaYecX1ERaCe5jDcFXGiuqDmeDKJ46Vdo6s9iGTjs7tyQzuXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vbUkUczWChFuCAhkARNnCu3eQCzEJ7hki172sJYJUzdLBZUpwm8Z3J97aZKUJ9a17C5zziEhQXpNq8y5CV2P4Vq",
  "key1": "3x9LtxiVwdN2FPDmr3h7SZaihtSThuyvTErWres7CfL4W7Z6qmszKpBLnx3AH6CfUZfJ9vwe43j3Yq5gkxeFHN9J",
  "key2": "25rStaEbSTgx2d2Pn4UHg8hsX1TxhJef9nfhhb7odsUmkgViE2ka3dRV7oNxkd1JdYmhL2bzMRq5J5FBYo2X4nLY",
  "key3": "3NwAKoq9tdv9HNRGpZyYF5HLnbJ86uZefiPa5afKzACNeS5MooWpyxVkZPYysg26cRpV9dRRkNtFrmqmbVztwuGD",
  "key4": "4pa9UCxWcGE3wbqVYdD3AVxT7Ttg3NsoVnRhWUeYLrHudHBhWkoSrUjKsXmqKM6FcUeq5fy1prNboGbvReGpQdLy",
  "key5": "3nwv4n5WdGqyz7hFzawNRgp7r6rZVQjTex9EKoNahLEynqpj29M295fwsxQvyHr2L7W7vyy3MZpMvSobPWG9tkrK",
  "key6": "59uPKMozQPBCSU2p4y3GtjQgQD2MjBtYZKxFKRrFoPDKhyHpmbKdyZdLMFKMwUbiC71vDp879gxvzASwwnCE8ajv",
  "key7": "5MYGb1HmmskVdgABWdsRS5vDmygd2LRdjhgY5w4ECg3xGfiz7T5uQ7M944Epwt9oiwAfAmoyDZLniittHPpoJrB",
  "key8": "2DDK2zPGiVa9VQpqmCERGPz8pZX7wksfZqAvVGzYLsEz9rtDPWxgzbA1XVcn5LMkniAAFmBhQJVd1sSngBMgznTr",
  "key9": "5axaDm321vMa2UihgoCmTC6osnd9rtwqE7PtDCP9Lm3QobhuBscxXg2Ce6VDGzKtxo7gaB46DVEg44z5EW7QrGzv",
  "key10": "5Qp5Bp44x3CQPk5RS8F6c8dForg3gwMGGLAyeBvBxhAW4QiowCUKeTs43xKdKcr9ajZG5yJQoSrPJiagQNxkUTeV",
  "key11": "iaH4b547Vcjzx1ggCSPzjzuTZt9wWWQmoXpkBPRNyXDrAEtjf8Dzirpr81cLe1ZVGG66k7293UkMasyk7ZhLNNM",
  "key12": "3fzeZaCjAo9ihEhGrGi3Nm9G9eVG1DGLmAmQgqouZFSu21fAxo1G4zFRARsLjNdRRsc7kgW47251tgim1tmcV7y",
  "key13": "5oe5ErvfnbikUBJ3wuuK6KP6VdZSj39VkDpj2koVtMUZSG15gs91atEa7aVGm6mE2R8Lt6HSMY2VhreUpdmeb8wT",
  "key14": "23bT147GLkrTcm7Vy3YsJh9SKzfwfBXSzdNGhsM1BgK8rRwkG8HXvWhUhdaFzEKxNfTLsh6XGJsLzhXWSkgnrQri",
  "key15": "UczCXJxa9SFM7tNY11GvEyk7yqYMcZWdeUoHLiM1yySy4GpFkiwfzmjpuAj8jRDCHnSjxdkgepXijWkX7kRcw29",
  "key16": "33m7X5TNwS81arhMbVy98U7ZWSeNQTwseXNwwF4FmcHHVDxzvmZVtEzcrXyLHE4X7uhN4QSJvaFQthwwFsGco7Fa",
  "key17": "4Uw82KB1eSdNVChhcrsGkovAWALrA9t8XgD2eC5QmUe3eYTDWEykRcceJ5cDHSNYmodgzK4kpfmSGETK8eVZqZQF",
  "key18": "v3d64uRaCvY2CnTFjUsJ4UZ4TVY8YMCe1w2QsSiJmV2ecCLNg55mm5JqKJUYEvrBLFk4YJueSnMdEBFEyZd6amZ",
  "key19": "5mzWCLEHnVH1DZN4W7y54PiscgqBrdgjhxUFkNo8N5MV3AzswH3JcwPF7ZUgY76ivuf9wEr428uWJBt3GV2dJ2EX",
  "key20": "thvRGDy9paERxYnoNFE4XDqCK8XTQw4v1KjdN51z1TZ87yGveniogYrsUr9z98d9KnY1AcN9KtMEMMcXKyREo3u",
  "key21": "4auoyLjE3TxzXjgK7UFCXrzqChrQM8nk8wiJuQtM3TnSvLpMAS6VakdavgZ5VwnWf9acD93kCvZrbiGRUR3dWTgX",
  "key22": "3vqMj1SWwLx29d3f92Mb5MqXbYk5txsBrdRdQbqLMmXkp1rzBWVw6B9pmVBRoqGZa2wY6FxwBgFRePTwhXyoUAe1",
  "key23": "Po5f9SeQzKXwCGS35zQhmJqN1mC7qrNsEVTGA3CGGum1uhHJmc6sQ11cf5EVQNoNfopWM7Jkwhy3vz2mMqtBNsh",
  "key24": "5eJ19cMgKZxmvB7m9t35qCrZYUt7rnSiPgsjjuwX7PeqQiWqWkMtYBT3pw5j6eEEv4HodCthxHQDnUJfuitS4wUv",
  "key25": "5uWvdpkfZa4GZW6md34rU2tgKoRn966sAqVAisHghQgaXqSkxa62ovhPcPmFnc27YXPFSMVozf3YkEZ4pxEW2evS",
  "key26": "4ER3qACmCVQ48p48AEKHRLFVAsMborTKsMTT8LToewkg9uEW3ESBRhVDFq2Z58oXh3yoDKXTJZBpy8M7ezqBwVG6",
  "key27": "4L5NkAb4k1YbP7DBAK6DyKCZXbDo95YpQzQ8aXTeM98hvH5C5qnXa44xtyKuxj8daNxzBZVckZYtCNco7dHnh59",
  "key28": "yakdMYRFyRcwGBV63k61e14DFnNErxpzXn9dJ3csZUwJFhN5bszsaAHTDu8MSVU5PpkeTi7iPk7EBhuLcFUGCp7",
  "key29": "3gzBp4nZMnQqHxQhmAftxFrJBzThiFVSmCQdMdVRYWx2bjRvmTpwPJfQqZpza4o2gfD4soDBaTsSsC7HjcfeuzFG",
  "key30": "5oTCWqsqAdpZEoZqi9vnsH2JjjEPSMLw7LwrF6nxC8GydnoMmEwijqCzNW6Ubtpy2EJZ1PDe5gQoMZdVXd42vZv9",
  "key31": "2GzPk9CBpQinfaafcgyKRQuXgha9Sa2Hd1MePr5u6V4GArQsMNWiLe9tTMxjrSbCS5xgV1YTcicgds2L3S3rUBmP",
  "key32": "5zLGcUJde2DX61BJwbZoKDpZr3Cf8PiYeNEFG1ZBNBSddX33NnFNDKa6NNkftkLWYYUm7dtK9eitzPc6JBLLpP7n",
  "key33": "2RenZP2KWmzcqaH2R8Qi3UFxRQP5Nq3pjD3pNzhURwY9DjpYRrTJFKeAGpc3wfNxvA4owAyUoTJ6emzieATNGRSx",
  "key34": "4es5VbW4gpamgnbXjfWhALANLpSAaGyU45BshiVHT39ytjWdGh5ctHinncMFKkSuJvpY2TUjRg6adnVHJUVwr3rQ",
  "key35": "4GkMnUhkZnpJkTpLmyES88vLv9FBKyabzaQ26RJmzCYZW96g2d5gTqMVHRB9yWAuyU9zzQHVanB3JRYTpzGu9QiC",
  "key36": "4NURcoxD2X9zYd6ZmzdFB2PNNFb6xjicjx2bLShdxWkUp7y7dsiDgdYjAgMynETAqygeH3f7tWZTa8aggtV2Srzs",
  "key37": "3JBxsVscFfT4qqtEgVMou32Kba9ktkZ4Zcf7JMvV19JxmU35kPgNLibxwGvZMqmFiXx8okfP8xBzkkmZPqyT6B5p",
  "key38": "bFpD5Kpg6mfttxAUVcnyTbkReF78JUPWTMnzx15preHnB8FfVupjwiveyExYinrote7NMvSKWMRquYXXGcTxzBa",
  "key39": "5ShRWjNJngVvYZNR2hXGpSuFc4coMEX4oFx5Nc8fLqw12ynpvR4APEnV6tDfNjh6a4KbLfzZv8qx8euue9wcqvXb",
  "key40": "4s6SHJXRvYVv33fVNj37fta19SBgx9VZRa6NLxYmZ6rvbccZEm5kVmruCZVqQdb4sA8a8BsFhhERHkcjjTnTA745"
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
