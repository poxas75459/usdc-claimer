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
    "4Pjb5KZBHNCLZy1Yoz1JcfR3Nrc2wHeR3aGvUbkc6cnSgQcUR2mHxEkxwFovFLBkiKjE7BuUmnLznNWgzjVQP3Di"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38h3SQh6FefFNZpv9RscXN5vE9orzeMbNnkLsxKgqRjhWSRCna3hw8D2PEJcUe41Auga8s277gFBs2gvYzNjUEiw",
  "key1": "3dPmgWypanrADhxRCjTzmEXnHom5kmcwTkHpf38br5UjYjkRjXa7HVxWGfiTrmyJ9LwTHhX6nFtW9zorEJb3HVc4",
  "key2": "2L3MVcZRRKTfmaS5GP6vfJdkEEp34sFfMPQeK4JofjSVv7SK17JNVkDzscMogV3wCGd3ZDEf8NiMHdPaNRG6tRMB",
  "key3": "2hUyqndhLp1Gfgau4Lq4YBKRosrJEUTje5MH3Cwmqyc2ytXkNeyRHQXrKVckDePgei9wowLkm8syTzDLDQ2STTBQ",
  "key4": "ZJ4vTuJFSEKrbwByJSgZ5cyD6D5X45okRLt87hYBeJu1sJFRUPfCTV1KCkAmDsrtGpfTuuaAAnjvnUkh3PBJ6Wz",
  "key5": "3yedF6R7HarhrFS5c42LRRKhGD6WrDz9PHHXfpuJ8tLJifySdPWv3DXwc5xy47Qy2UL8CS4QFC42Jnzv8S3tkypY",
  "key6": "GdKoFmfoWfaSVhfXqFUwH95sXWG4dgK9ETpxwR4rLoEEJKYNFQXYyh2FTjLoJKwdu5PtJ6fJH7Y1RUJABXuv4oJ",
  "key7": "zBMsKcoKwd12j8k3DCcmsLxuqkpatxugJTvZhcXCgs5ZTk3Npnnp91v2r3amDKnDXLtU2qfaqeRZ5D69oz1AY1t",
  "key8": "5Eo1rSBQdN9zCKREj7KsSsLVkciECnK1ncpb4j4L2YwAt1ws2WGGxVzXZCzXtR5gbrU2P6fc3YSjGVPxhUqgxGsD",
  "key9": "219fEQiRDeHtUohpj1QqxZZozWjvTTd1iYeWUJfjpE9RxFXJqutzu7B4X24HATnAPAZ4XwMCWSuGbA1B3UQkbaEM",
  "key10": "gpS7TZFniecvDpFucjoDbuusVbTmHp6Sau2XscHy1Uz4uqCkCgrcYmQh3RApM8yX3oXKRHSMPQE88M9WbojkqYh",
  "key11": "5CpbCgQJsdrGd9Tw58RLmCEtiWy4cyDu7Aua9iYYUowMN1YU2BmPTK7k8FWttmgUvtStMGYEihMRfgGZXdJ4u7RZ",
  "key12": "2dV2J6jq66dM5WTd7rH5RUt3iMnzquH3byDfwXgowkn7u56TuqxS5EYaerfuFxmjbDFu2crb25Vn6X9nv6RJqxN3",
  "key13": "8brfKrxkajLR91nz1C7LHvCXUPfHptEJa6XEF2CW7DouXkd14RZdaPV77eeVmEprhyCRsCtrsVowuk5sswK2fBU",
  "key14": "5bLf3JxuyX1snjN5euTr9zpt48z5N3ZQK9YmqsSR913SiL5vMfSkh93VcvYyF7GVBDNx6G2yGez29H2rWzvy6o1R",
  "key15": "4oB73saEsi7ZYF7FJryL7n3hzmDUmj3YDeCseVf8RhHpzQNeH22jqc6d8hp9aVQaoFWb1v3HCcPmZjYewXvAufic",
  "key16": "5fP4VZ8Wc9Fa65Grnmqs3ZLrGw4fDA868YJANV2qEZMT7hJMQGqXACHcPThXjcRgeskWqJWu46ytHaCCyjmuAbrw",
  "key17": "63xbz8UHUBg3w7iUa67j95q51YSfP4rFXjUFE2DSGcTVL8eB2FmGt331RY4tjfYWZgndZWP8pF8LCG9ZrZdnNBn4",
  "key18": "3fYrPHdHvsk6smA2iTJVsjwKQatZgtppGorXkLrM1zEQ22s4rA6JUerW3ATiQU8fonSDuw367aombxAYPjSqbDwF",
  "key19": "4L7o9ziHu8Tww1i1UrqW5RhJFZt7W7KEMyT27FpYE7YcujeUhu5L771YY7eMn2PBM2ki7sVHCCZrDs112X8Cjm2k",
  "key20": "3iJUDTSMuxxwW21CcyH5Lzxb2b1kj8r6RonX1xLgSKB2yPvd4Cb8jW2MsNb96AZ3UCscB8PAjL6ivaZ15oS2mvcy",
  "key21": "PiGLZRAsh8LFk5FTw2To26sAdpPe7Cmw6ajZuAeom6DfSMxJUTgaS9p9PTnqNZQ3rXBYGwWSbMibWf3CJcVa3iw",
  "key22": "2nuhShYyMPe85yCSUZJjTaxwGQQVbRgsXWZF9dEE6yxdvpJRfShGPA9qyYL1XbtBsWMGCuzcNArEPHafDbEqWBy",
  "key23": "AxJcEAxpfbysFfdky1WgfzR8VkUedbqbsU68bFsVQqNMfQmQMbSmpWRDqYZ9nQ7hphdK7Xm7Upxm2wLpNKwJd7H",
  "key24": "4HrRRxMpAmNY6zoX6aUR1ND32WhWQjhQ4rMRRzLJgHC1X3BmPvFCXaxukctkKiA4E7a7HUkEhXRm9GPpgD4qdPhK",
  "key25": "28f6NRTN22TUz6EcgMpBnkYQzvHTGiVZM5gKA7TP4quWfWoybDHGmdCHyz4gY9YTxCABsuYJXGVWZgfHZZ12h9sa",
  "key26": "2LRbeya97z8GPLWLrQDGoRePhnKy28eCzSv9yZdrH1t24nFfYMx1cf3T2AFikQ8RSveJXY23FzZTCLHTcSe6Z3D8",
  "key27": "4TXw1LM9Lnt5vPAZiip8D9UMu7DDEMnzWvVkBwNbTFzp11JhL5ixhj1UZWjQJCC6fgzqy8uL4m2HWvSjY8RVYqbt",
  "key28": "TSSoPaMKqjvy9aQwFkHuNogePPtB96jyXGtZh9GLyycSEcnFLtBCF8y4Q6Q3b4D2AHKYu48XEaTF6ZvttHCDh7D",
  "key29": "2ocgfjuWzbQUXsf7oejGD28goCqisMafrcxBG11kxcM1bD2azUmgm4gskkFTNvixLJ7KCwEQzmqVGbCXxnq2U7Dk",
  "key30": "34iSvNRMcKvsQPd2UqRRT8fgK3xSrH3eUKtWeZnKNSjtGxzmnnpWVHD9X18K44KiBvzteaYVUHR6XzcJtdvdea4c",
  "key31": "2YyVHd9nisXdfHuZrPy5U2uX1QUk5NYjWcoptob6PmcK1uK5nKayUWdSFkWgyEXCyseUpQXNxsAJNyq3PKhcQ9Ru",
  "key32": "Bq3f7mLPEAxWzQnrQiRYG3zjJx7U3rWU7GZpcvhz4vTfWnSrRNAgXf2uvoPUxDCqh9WckqjVXvR1dor9pw38W2D",
  "key33": "42AguS4EkmD28mdZh4UJoMthbPVnSxgoe84H2PdK7ZRQnLGdK7KuoQhAGYmJqvLKpRvqwv1wvJQ4xF2rJBXMknsz",
  "key34": "5MMWwAxwNZCc3uRF9FtyWWneg9ahGJPpDCkRLWexUFwdNnsfdCsw8gMMqJ5yaTytGD7K2RmnASC6DmEx4CRc3Mud",
  "key35": "4b51c1eaJAChDaFVL7spmHqmA2MCeErAsfC77skDsY5VHnRVFjfezgCXDudmTqZswBzcBcRhAMJCtyhNR6hqth4L",
  "key36": "4Vy4GoJkgkc3QGwcYEKksgi4Wte5qzK6Pv8vq2zKybcNHrvSxixnTGBwSZn9zMMMi22rgtBmpH2sDytPgzkDPyKm",
  "key37": "4iDWGgXRUc1jMzVXcw95N9Nwb6UYa43NTj731HRnn9JeuCMC4fMwBULsyZGin3xU2RMbvFyxKYKaQdAonXxjkeez",
  "key38": "3pfjqsFtFL4Rih654aydq8YPnC2xHJwq6qCRkFFLgXHTScUynbLv8h8NmHqfdJjJtj9QQfmZLBoqztCWfGiGcXcL",
  "key39": "c84s2APUUPxv3o3rGtYps5Dwko6ipSCPcu7XWac5eMasWXk4YQiGEjD5fvioKvETcM269vSLSj2n49QBbWUEmbE",
  "key40": "5bSf81s2JV8o94ZEeNGB6gC1wWwARafHZi9Cx8AU9cZkiK54ervsRqh8CpCfMUdziQPARzrUyTwmh19MPUQQLVfm",
  "key41": "2QbeiNdiz57ghCXqi8LneDXpkpRwMCXbUXHYdYLLsq9KB9XCc8RStTh22xWb2GQA8fUsypwmZCqhGaXxpHaUb4ac",
  "key42": "29YjySCFbpNT1tePURxaSx5MzYVGvMPXbGnD73SHZSn7WBPyLQoYqgQPARk9b2WY2BDw8mTqh8L6MkEPFzgHtn3Q",
  "key43": "2853HLWA1L3Mx5UYmosQtUXdv7pbrLBDVvE6q9251mQ2wWpzrXmAQ9SDbZQztAGYQ12G48Z2fi77ZoHUxZFjRkkF",
  "key44": "wCfoFLw9r4Lx8AHCJJrCSP3naGzJwXNTwzDx7CM73JNrRpCAPQrmmZUyyQUYZ8Nx2FVMpXzv4M1XrTtZiEmU7Nu",
  "key45": "XBvVFN7pxFECtzb8BE9PKpFeaixRnAVacKi2yFi5Rf6wfMwtWx3rHdQtygFQr8bYkBu8kpzpoYAsGgbGQWohohy",
  "key46": "3adxuEDtofj78cAQDPTbZY3XgSBt6vHqUn7HQYPQaY5BdhPDgDxgPJFkEKpBpdsF6axZVweDUGVrr3UWjMquJLSA",
  "key47": "3yVFwNjweUzkA9dnPrfynrANS1S17ED6dmFNj499ZRKeT6DhgYLYQ6edcYX4YyNN6NyxeTuoqBbELALCm2TApsdn",
  "key48": "2Mt4Pw3Zkw8fUDFM2HC2gp56mzmtVdAxdBx49qYyzsagNQQkn7kycR4cWYHiG5nB8aL3mN2HALdEE6ijhMGVrTqa"
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
