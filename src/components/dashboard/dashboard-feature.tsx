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
    "57cJtVTLFWMUYGW5ErRCH4mE548oHpYpJor4PvmAjdHJaUS9w3n5VsTjjYzfj8wV2ysBhJbg7g1PMyqXAa5CFdGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SHsrTKWZ4HvXSjJ9no9z7gf8kkMYurKUWr8YHM6hDKg4autAnXbmjnKC1etWF3THJ4iqCKj24LC87LAzPj8gqv1",
  "key1": "4z85UHLCzUJYemux2W2LAHYr3sXrSjUuBG1kCLzXo8mmfKa5YGaFS88TiyqeAP6CMC1XEjvnwA4pYuCGGBRGdyXh",
  "key2": "38hPUP7odvoUKWtGvaH2qN3KdeyCFZwxnkPVYQgxWQvZuzCi8YaeGr1juZaHanYdF3vRcDF2GLeXjEwtuJPBrEVx",
  "key3": "5PQi4iibjjZ9Qrr1BimCgcFSnnn15UJJgtAyfYa4naFJdBZm7PiWBuDzdjiGv5DAbwv5SKFnZHiQ3FnpP7AEwJp8",
  "key4": "4Z7eRqLkTZCkXUVqDcGBxFrPYfSX71UbEoSovQeRyp25LtxBCCrY23gNuuU5DVT7b3xpaLj9zAcqqao24L5YoPJG",
  "key5": "gX8gx3mMvcvZSv7G5YmJyn6f3GcRNtACfYxXpfXtBxW3P4azNuDkci21v29rfA5wjgkeG5bfwXt9ekoXSZZjw2o",
  "key6": "JgiM5D6KyWd2NbeTLb6Np262LmRgVVvucKXStkXwNPaCwD6CxVhwfrBPDT8zuAa1qSsf5fopaPzAY3cD2mpELkY",
  "key7": "3Y4qxK5QfTfng6aSns7z1Zms6AaSVwTJacNpc8BjSszLge9M2xkyNReBpYPmD4iHGWV6uFwyUhuUBnwjeAYLjfWv",
  "key8": "5iVZzDis6yS9L9VHvKuEB7y5zJuUaT3V9YbYra4jzQ7N89K4v84KoZakyfPWQonsLFFEFBnAkZamXkddLcVuKa14",
  "key9": "3T13KDP26mndLN8uqckwLWxvyqHrMjrzXyztaBrZk3KmEdgoDftW7CyiEP6br2G7rrX1eCC9yuyzBXuJSxBvf6Fe",
  "key10": "64aRcHpv3vBj534kBRjP9stwPpPcm3CDzQ7GJuKSjqzRZoyFd4F1ixCe3kPQ7nAPDkqtDDT2sf1ybTmj3f4gKY9V",
  "key11": "3UAWBfR6VtqLVcLTGA9FU336kAGEP8Rd4BejPmA3Bh5T6T18XxkcbDvyej6y59u1DJHgSZ34aLAkE2TxxJESwN7q",
  "key12": "54K5MQzLYsm31h3jPGdUXDHMq2H72VqjusApqCs6pRWu298t6CAZ2DyVJn5zedaVsbcsuinE8E5vmfPWz5WWsJTQ",
  "key13": "ZhqVPXSjCsUTnFqEuMx7Xr3AvJXXbcCGC6WtuPk1iLrUynHgJDy2BBeSqpKvNiawSd1LGfuCjJtdWU4dSrHe3wj",
  "key14": "sno6Bvc6MHDoFoWmdCCYxyjZFYKjaP8bWjB3YqjpAcvv6gBFWU7KWjnM8ay1XiyFUxEDUjciNxsYKU4tqHkDsaj",
  "key15": "2g8rcQW3aTAQ4aBJWBnwg5LxFxmwkkHspz5pNh5uFtJ5DF7GqNi9thaV5YnzXmCJJgP874N9hwkfy1iBtKh8G7ng",
  "key16": "2mK98dbPLvrm8ExayqVmtPR7S8BhmBqB51hUr1zXR9cGRdk4xK8YVYy88VyXHceWXGRyk41sxQECUaJbsVD3HRse",
  "key17": "5J3EPiCcctYybNdUnRm9a8E32mWQ199sU3bQamsxLg88QmmMn4Pxumt1uPvyn6ERjuBEBNRxEFrBy2SdZESNyKYu",
  "key18": "4eBkZTVe9rxZcJdTcaoHXHEjgL6kmn9TRMcTPeUTWze9PzLuypf5E8YooDddrHbjUcqmwBBzKXGrfkHE21CtXs3b",
  "key19": "4CaMLpf7wMRqHTPHZohMXGBciWMAtwDRbwWAzq4Zte4Cfe8BmNrNqzSDkVpAyPXKo5Y9qYTuYNipaZaX3UhiwMP4",
  "key20": "DebLE5DV36HVKoMZ4zsSM1dEZV55UkMBkp9XfjFcV3PBKnzfHC3DcbCrcJ9c1yvKzbwS4Vn9xDPoJEzHfJGbwz2",
  "key21": "r4RzX5kyNPWEqRRFFkPK9SrZNAEjWzfR5FHRHqiaViGdfjKKs2thbp7Zt9Q7EVRhbB9e3GfBraTzK4mZgwJVf72",
  "key22": "5rYcMs9nfx8iL3NKttGDLkGnaRW8z58fGn6SNQtqbzKWAtJiGyBZegVnHnWXiWTNWEbH6EGLexozQCnAyXUXH6zt",
  "key23": "4XuhPL97Byj8kA2734i2T67s1h7AzHfjDr83YYLSAHkohWCPT72QQ2w4rBYqHvhDZQLKucitgv3UAMKbhUZuC81",
  "key24": "5Rd4EygnKBL4Cd1gjMF9bc7iXCNLkMNw5vyQuCFFN7k28afwzhie24CVYg456i4tEpqJmd48ga5pWZj5fZwCrb6c",
  "key25": "2RV3eqGyxBNQ9DT9GrRDisVdw1VDgMYcei7SEM1S3ADF6nG9tG8vAn6Ly5TBGyczauqVjE7FJ5HeWJZ16YcMTDS",
  "key26": "A5ni5Q1CcDZWfStZKEpofrtdgEuh3RtbQyXrQwm8Rw43cnJUcTVaimviuV25hrdzk58fcWeCnHd7xU9VsdWRcUk",
  "key27": "2RZt4WMc868oSwpgBWzxiVDu5QLo2XReP2jmLsH51u4dkBFXSFq6pCXWNwy5vUNySZhZfYa9jjae9KysnmD8jFF1",
  "key28": "2u61g4xK91Csao1F54m4wuZji3s92dNZek5oRDjNRv2ZyDgcD9vb6o62cjp9ssRrZJMohGLr86wgT5i6BAPv9Fmy",
  "key29": "2Sqj5b5CcdkYintC3fnaqUUEYe3qx1aazPGQe5grjh5VQbw18xW2ceT3KySAv5vMZZcpk89gYQJjQFTjjuVDsQW7",
  "key30": "3obEqCpNgCnzmRAg6QEZjS9JkK76XrJ4i4hMmNDT8hraFCBPoajggpMtLAWkfuUr6eaUuP9HCi2NS38n9Qdqtwts",
  "key31": "5pDa7nWYgsfSmvWdmAqpjq3TvATo3gf7bZDcubQayCVzwEAqCCrhCkdhjvR9yfLLWfbZKpu3Bvm3V5HLwwK13dxB",
  "key32": "4Wfrds2HpDrWcS7Cyu58SzQSwVJcVHhyN66hc3j3aiSTvVDTfdPu73T3CQrQHTF7apXUNTwSE3csYJVaVaSxC4AP",
  "key33": "5KoMLvgzcYcbTJdNnzHrNjEHhXDpkzCakCmCzU1cMHDAY7QNUi7yBe3h7H2ecrn8ZHifTjqxSNsQymnDVam6CTCL",
  "key34": "ZEJvwci4o32Xsur1ZhbnHFZ9qheykUtinacLtAmgKchgHd1eHNoStw9mXHrqqiyjz3tBDiEFppaFCY8bRs2jpPD",
  "key35": "4Afw1sMLszqqj1dziKfV85ZkVb18vj2PqWeXEEXaTP4X4rBfaEfm1k8uHg85H7yFi8NWkfkRye9cfJTp5XDKcicv"
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
