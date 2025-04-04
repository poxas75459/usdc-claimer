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
    "sY66c27q3RH8cPDwT1K1aeJDeF5dyfxku6i7Xdwne6pScja6W4QGEqQoqzpMFkaD9BRwdSTRU2HhsBabJZmWYcg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FL3Hdm4SsQ7xd7QFWBZ7CP6ivR1XHCaJz2dbePpT6FwFnqCXHbVtmq5UopJvc558CaPUm2RdEJYEzhzsML8xHq4",
  "key1": "35UErMyzUkckonekkcr2SPifyR1cS6TZUxtrYhSjV3nAhq5AGGBtPtNc9yhYheNS6KDabFy2dkjc685Wdf8BNdiq",
  "key2": "bQpt45iWDpfnFVYc7E3ihAbC7yvicZDQMqUahbVHbfiTMjAaxqiX6sCnZbEdUP9hAb7NRZGsntLtUdX2h9wCqQp",
  "key3": "5LFj2c5fMLXDXMMFrRokLkMYZuMTYxYGCnv1yH85zHJb6Q6qi2PvC4DCJ6o7157gZZTuxxwJU617FrGnSKfyHEdm",
  "key4": "54mq6wGqG4ZUmRoZ6t4nhBw1Nu52sa3QYJNiBgyVkS3N6nrCN7kqHFXj5g9MSgbYmcK38erzbi5EvC6SAR4vTJo1",
  "key5": "5vwy5xztZ4qu5bJBrhLMm5ReckwzDWaFiPngPuYmpugFLd54oCrVwkcTy7YxvfqeTft7ohXrf62FViHzseNnJiRJ",
  "key6": "2GCg4ZexSrtxcmjSVmfRkf2EzTXD937TAHn6P8pdZ9Qn7SW3dZEvkVHVzSShuwrMuemg55WCrJ7nieKDrATb3g4G",
  "key7": "4jSHThEjach16jp5FdB5Wrtyrkcy2MW6ATfEXTgbrkPA4BLRYhBa7y46nhxiCFGRWjjLci5jwrX6XHwhXSBVCCYv",
  "key8": "438CNkvXc7Feir3fTtNARX5dz4TVifjiZVhkdKUCWFTzD4DoqtdstNAoFz4vUy7bdbhVEqZwYsPT5foMXqmvJeDV",
  "key9": "3nHBMBJXbooi9DtsZUjQyQhpVHpouzdZigqyVV6BDq5JeJ1VNwTRtb4oCxtwHfsgKfsZT8BCCrFaQ4AwoaRr5KHE",
  "key10": "3pSU1aH25n4Z2dCrfswHYhpqfyYPSGVCtmhLBsSEBNvRBABPdR7Az5Rky2reaXSUGKtiiyY2n6q3fioeEYu6rW66",
  "key11": "5dg1CHXcJnx4Hc75NMVtzji67s9bFRXsquELHJ1aGKN6vTxeSyWgmfqo7crzv2FUdQKXmoRUUe79Gs9qtxcbJcnr",
  "key12": "5zVDYZcKcAZw1Smuh8swfxvLyaNWPzRS5K3fxkXockqjWEezEqzb6QaQVBggArSXEDHBi1X73TTE9PmJ6MWXMc42",
  "key13": "26HVqsWAMuG7Ytnxrr4FEJCibUEZD7DhVegM4Lk5X3C35uKHiPSYktbUGMG5HkjN7uHgKvqjKE2wp8PaE1JeqZ8d",
  "key14": "3hwd5qGeZAhCxAW5DWcEZZTTDb2wRZh11CuqXNVBp1wSiNjyzYFMgidiXLhCJBWMtjGUiXAN6X9K4bfbtgD7K5m3",
  "key15": "4nD8mguogBRdm8qhhjm2SYU9kxG1qc8GLUzehzZz8W6ZrYPz85MtFknxLugEx54oQ7ZFwncwcHKcGWCCKLvfUKou",
  "key16": "5xWTkC9rFMw5zzGH1NEGJRct9xyPLJKZHouTRPQ166GoPAjbubAApJBHNnyUpWRwZT91JHALqCdL1hzGUK13cQgM",
  "key17": "5pP8ZB33XDJjG8ht9JFaZSdvri5Mjrboj3hPeHZmNw99WypqoB4eVHszHhLw22JVJwCcwp1KJp2sebo7WCSs9XXS",
  "key18": "2yi9DrG9mLLmZwb5fNeoTaHuN9fjgzNJDgAeqBrfabnQnAte2RCgN4ZfUMGPMrPTGS53obd8ZgP9F6sJ4pWJPpMa",
  "key19": "dP3csmGW1RqWYqWcn8B9UQuhhk8CZj9HpCoMQgGe1UfsdTpEhNfbAdUFTeRU3xW8zj6UD5tvNL1f1RcY917P4pB",
  "key20": "mUb1VEYbqPrGg43QSkEfTWdNWrTgrynTQbvjQjmUsx7qWxfjpvyxjuwvCeBueQvn95GByMaVchF49pCTakUXHXG",
  "key21": "5i4bEf6ypz9D6NVtsHbYz3w9jFVqgWxTA5DdsqEwBdA2nPHYesW3187GE2ERDP7vE4JeakEPr33GeKcPonA4MxEb",
  "key22": "2SAYdmt6khEyuTw9w6YkVZjLHYFRAPcsMPfBfEmjvG9nKJgD71ScJdATVtbkkApafGfksY3VuuPBG3TWbuLx8RWx",
  "key23": "4UqtuvfyA3M5ZuhkBskjPhVeh5UYFTrHkZF6bnd6EMRXSqF1Sho9zZj9tMHrvtUJLWJ8zDvkzq2wYqdkYi47V3ka",
  "key24": "dmy7xTTkF6Dkjs6TLb8GH5q32ucFajT8UwDbnkbHb7ookiPioooYCP6WUTbeEzNmavpr4vLFFe2NWgpxHLYCTnQ",
  "key25": "5EFGRcQ8te8LSJs9DdBDLDhD2YD6cBGkUn8VyZv4f6jhxNF4Sg8WmfShjHkcgzEE8tEttgo4vnCKYMVWKstSbx7V",
  "key26": "54wzCxKQUN1sNmxhBH9xqmucxkVLTTmH6fUDNiEvY9zawmHNMAFiqKvxGnoHnm2De4PKkPjSawWMZK6A8cNg8xMm",
  "key27": "2yzxgFSd23KPHRKeHJqyx8E6wZQwVLUJF1aTovY8yJBMvueGeuK2dSELMwSjzXeay5RQofUc1omF8s4pqjFurteV",
  "key28": "4vWbwnr9QKmMJ6Ew4HC84xP3c5g2zRsqfbjEpL9PbNBWqgUm7vqx8xr3e7J4UaZcXySZu4uHkfFv8kmVqVAY8bec",
  "key29": "2n5QTEEDei9NkT1ccNoLywKfLAiRTeT19nhW4qmogDeWrwb1AJuwNxswGg7UZipHyLx4VSMZsxWbJTxs2oWhaPd9",
  "key30": "3H2ERqeVnb3aEjPT9jYZqaXVkPyA9RzoA9e4MFEziFSJ42GXF2RhP2MzL727usa9z2aKLrqUz6GjfWPJ9dpcDVHC",
  "key31": "4RFDjNuXNj7eL4ADkSUjvtZh6p4hanNepJbQ5v9CjNAoMK2KtFmm7rX7SCBLjo57SBvj1WaNBtqVdzF89zDVaFjU",
  "key32": "wwu2MNtRRkpARitb1fW4yxanLdjjUGdWdovbV23ZevX5qGBcmNvrQoiutcd9B62dkjcYyuXsq1syk7s3TSsGcJg",
  "key33": "4eSeQBkPwwcrdYP6vJteqPFqmkt7vi8vq2JLATYP8owfZR8P7a2hM53Mw2wkTk93hxfnRWfGpn6Nb7HWSps5Ttc7",
  "key34": "5LtTsY6cU4Mx7HmE9M6K43JFAaLH2Pnsz9x5QwQCdTZYW2GvQ7UAXDCVxMmZevY9jjNMig9p6PuFN6JNf5afo6jh",
  "key35": "gkJnV5Hr7hJRHyPdE6pi2686YsrtLsVZ8ZHe4DgYs1VD522ZfhSKb8ekUDPuALDzuaq6vTDeU4Qzb4LCvFDjcHb",
  "key36": "5v4CDh8HCfMCFtSW6qGXCyMMo4VHdWQoMZLANJo13mf8RMKQzKmnuMvC82SPHX2KoaLQ1QMoVixkVBgoftz43wFY",
  "key37": "3Pj1Uzn2jArqmj6tJGZMf9MUSRhBd2J4Q2djMAbsGEeiE1W736H3EH9YGcACFKgqemFwgrwprJsDsmLAnfpMhpoU",
  "key38": "2k24jAXQMg3qi6S331mgLqcMux1SNa73mCCxhB4Mb2iatZapZfAMfrKeMDphYDBZ4RdSKJYoJpF292Vu3gQGFFnW",
  "key39": "fzamWNR7W7AzZHdc8LeamuBEHQ4AqiMmyuV8ow6ANYSh3DQHHPL2GycdyCKHt7aA9BUBp1zVfXFeMHVtaPx7Sdy",
  "key40": "bFPGv1TKuBhsRzAsV6VJazFXELoFoeBfWvu9vNRyn1YeAcwbaAU1FKPqcJszNnJSXjDs3CKWya2G8ZaEtweghxp",
  "key41": "vpJv35V3pCkWxWu5AfZN6FCkbwgv4iHFMhYtHmoELmFJx4W28JyJbFbmuraAVWQGkcWefkqqrMBsi4BNELRXeVH",
  "key42": "2agxp5CQHiZjQs2kLitKKuzhyuNLXhzKvL22pHYcLzGEahbDzawpvnrQsWehzGArJcVyfq5yfCGnrrjGqRdzV42z",
  "key43": "oXGdqMzmVtWGBMbpVtWsmHHVykPLGRGvsg6PyUyyLtWXkBfNXb7x1MKZSNz6VhhPB7droudWwbDugkSssUwT9zc",
  "key44": "5vZaZzPT4vSY4WFQ8pky7dTi5urNnV7eJpEJ2ZScqr8GkdEUCAxErz2pRkxQGV9BXzESFuNDRtmMoQN89Xwqz4ss",
  "key45": "2Uw5isDzLWdjiXDvjX1HD76o4Cd3nz9iA5HB4w5uT6KrDnSK7CaBkcMk3JEKsNBnq36njwwieookHMgMz3gXrwUE",
  "key46": "3JGFmZdDbUzZZjopSXBcYJRVQCKgrbrnxzTENoAhYHPBwtAjUbggvEyPHqoNqMsbJamyNEZbwvptBsZQ3eLTBLvT",
  "key47": "3wFHt45KwST6auDitFxFHZM6YMdzQHjNU9vwS3ztt4J527x4pLbepJYNvSK18HXRpG39mC6Bd3FnrqyrYRZrBmYi",
  "key48": "eFndTMaoACoTq8PjWHrD98SMAK3Tx8hs9zNKXFTf89694AGZHBCJjfFqey82Vvwm1EcxkSrcGYpiWaC7F3SeYwo"
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
