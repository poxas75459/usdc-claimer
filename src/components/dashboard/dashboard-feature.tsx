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
    "4bLD4Dwmc4PM773NBbBs2NQhiLj1mPeES9Vqitty3qMCWG573m9fuxznNDeMeRoG4HPrutVW89uJ4hdmd4MZeUxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ssornVJMnmzX6UrNx8BuHX8WL16Mk4sdkWkBcrJMHTAhkEXLbVktveHd3FuNwVMjqTF25EkNmmh72z4EfBB6AZQ",
  "key1": "sCuvYmSRApK4xJfCgTEG6eH88FkhbhMJWDrWoWmwksBoeBJQiFY13H9BSU4dMPprvcTy8snqnSAWhYrysDVKqdT",
  "key2": "3b2wPud4m7KAonHYp374rme8vZn8ofLVEZASqMnK3WZJwPM1Vg6gu7BVMXvTaNKEAwdYMhtR9pLYH1aHYmQpA4Tk",
  "key3": "2varHEQKxxN5qJpD2AqFQCn9bnPyr84hZXkEP7BRnHKD8i8TxREjWsnrEjPttPzQQTpLEaPAhy3UPqFs3287QnSb",
  "key4": "2y8vrXCwkDgyEJ8ZmaZg8nJ6SuD1jTRZV9hCkeix96Z9KLZQWqabigW5ksJvLsGgWiDAjGBm9NEYKDWwa49WLbue",
  "key5": "4WnT98oyZwb9kGQPv4MCC6LaFSRytvg3QwRybYQV7L9HZqjz7wN81pGFpPH6JAQ9KnGcVjhG54jxKUe435tLkQuY",
  "key6": "2SYZEEvn29Wd8xspD519AiMgM2mQxBTc9pjvzdAUomhUEQchkwrcuhcg2CahqoMyAnrwNkM1ibkGo9sWMTc5fgkM",
  "key7": "toWrx6KduEpLXszWDzrfD1BYgsnyzCiK5CYrLbBt5Zf6oUaUCuMRWDEBwdETuxxFvZNnuUDzEg1yAi1VMeLcZuT",
  "key8": "JwiadBMxo4FmPbp6XhP8tQ5kfxm9B7CmVYLRxZCsbJKvEeFkBv4A61e8VaqTeBNSkY8fS2zKnGP9GLUUEj5bT8X",
  "key9": "3S5BKkprZQbx3zHruUac5ZGR3WUpLzSkKaYmGuSUxpEa2CTaT9H2748uor7eQcdqB7ZWA4wDW6h41uqwq3FPyc9C",
  "key10": "5fExZ61R1HDeKJJjqteYW35shgaYWR1AooH4S3LrnJ2xgEdn8esmJ9G4qEupYiQXyGyEGg5okhXmfvw5Uc3t1yq1",
  "key11": "53hWSRPmpsJA4PFYh4zRyRLv2fFB6HstPxHpgyq7xMfs8fWJ2qAtddivyG78WEJjuUpytkuhvGqv3SpaFk7bbaC5",
  "key12": "66hpqdSGZb5pAcV5WZtkTT4J5MGJTFvTn7CYkE5VUKFfnqE2inExg4tKQcXsFHJv8Yqsd9NvX7NwLTYJRnuWJ3Dr",
  "key13": "4MGV7bHmguMpnWt6kkGjXoaUpJGQMTkGsZHZeyTQd5dtXvbjfCoVMFvyFnAUJJ3GhXwVwG79azCuf18xq1YJkCKr",
  "key14": "3kTmqP3MtuT1o1nCxc1PnHuRGmTnwrXciLiEtgrVFmvXwK3bK67gQ848aDqaTzaha1kpYHhnfJJiVNEGE7VUfCAC",
  "key15": "3gcMziKk1d8HXb887Zd1M7oSF6BeJUNy8w32RCeN2CG1gZTK42dSXV6sNJLV3sHUF9NjN17aUU5pss8dat4t8ES3",
  "key16": "51U4CEzFRrFzpENtQoar8DHwJMA5wviySUt2kyTHiqFZpUULh2nHXwbTvsECQUg6VLdgdDCVkM3X2fk3koyqq76f",
  "key17": "2yUCERrdEpegPgZveG7xhRrHx4yW9xyQ1KDpSeCpgijRy3HGzGz1kUwxFqDVXx4u7e1PHwvUnF1fqnbiudNaXc32",
  "key18": "5Ddk9A98h2Livd5hFXuSmrRY8M5aMs1Z1hxU9ZDByiTuyxWHAmBzELEvThvdakAazbTu8LaPSuaevAKdvyNr1sXi",
  "key19": "5JNnQ8jF9UYqBQxnF4ZmqtYduWov7XFCGg3VNpFu7Ndihud18FM8nNkekVzyrUvQ4e2dkns2kAjvpKi9iDWx9Uuj",
  "key20": "5mcvLXGjombUtt3PqiaHWLf1GWcq3Znyq6DQjBsezk3ofZNE4ZiM5GgmXD2McDPCGDvX6eDt6P5AbREAwyvLPtJ8",
  "key21": "3QJDrmxE11Kd8hf361Beu2doj9PC9DMMamE3Zh1jueCvuQYVDpohuio8ZkQbWFpFjjiQeCg29vCre3UTMcjALFBQ",
  "key22": "5Bgt9wviPMnvPUz9CtD9HgdzQqBcsFjFrw8jg2KGDHKR2iCbxJG7zCBPYYfRdKxPZYFaohrRzeRdFJGXULwLxTFR",
  "key23": "58oTfmme2o86UC1bDkuzt58iRihJX7Bxit3LEjNxnmwSdqN3psRPvuv3qMz3YBQCm9wswSDSMnnTKrDEexwKLZQz",
  "key24": "pn4XHpJkCocFoaK3nBEZ3rJkP5Xyvu9fXvwh6JCekFVt4LZhkVHrS3Y7ixFCCvZThFffVRxMkCQaCjDA3iLRedX",
  "key25": "2dUdmWWRThKun9MdzAtb7uUHTSpg5JWhvCtRQqrF6hcsk6QdYgHpAXktcY6mgKYxLSc4EvJwPH8YRFm3ojWcGuTw",
  "key26": "5crpK2Pf4Qpvut6dAwUZaJD2SQwQKu22ymqB2KXg95zBy2LfWnx8cWk9RiZbUELfpfSe4gyj3x2EQh4sB3m194Kp",
  "key27": "PVimLiC2XxMuqkFcrwXSCaL3uxL44sfvKtwKos13JbW3aNkSJCg5iVGnd85inBdsXTpZCpFr27Wxm6VUFpMkWtr",
  "key28": "SDcZcjzmhm4tqqFivoJejg2D5RYeJZWrnWYyPCxtHQ1snMYQB6AQEXxKgGhNGsTNz72w3BuBAyuQpwTgGmEpYJe",
  "key29": "3aQ94oDnZHFfoXD4NqXAP5yiJqSdEEaQJbm4yffvteowuiG1ji2oiWHtRvBtMW6EdW3ufyPakZ5fNVoLN2uaNJww",
  "key30": "2o7rTwh4xKWWSd3qDLbkzoGoV6TvwvkixyqPX2ffJ4QNmXjrEmL4TXFEjAA95V3eoAHJCtkHw7NjGKA1ycg6Deeg",
  "key31": "5edcrw2xS8zsRLpRdegC5LzfXTgZ8hVdQRUZiu5mCGxh6e1JYASinLbg1AGG9uYC1xUqeXf1dZTm4T7rm9v4Ms8M",
  "key32": "3GMhScNskKP8fc4z9tTcCXJK1Hsqbq84Zo65B5sbX8z2oL4Z5MG3JuEEg3WAADDnhPS8e9v1jsJVQCUpj5nn77cx",
  "key33": "4zCL6vihZZs4t2jrDDQLUH1eQK1sekgoqDa9iJ2uFEhTmpBMK2J1Qnk5yRtafRLAo35UbKw24Pa2doSFsmAdyuKG",
  "key34": "4HNZD2EQT28wFGdm9Dmmyg2UJaThU9VkDj2Guhn6qDjFHjCghGD17vNZPeuRMKm6W48CcUsYTL88iUDSitWsQehx",
  "key35": "58HEHcEsWmv9UkGgqZGv6u1rCv3rn8xFEP3r4AtKUCfDsAZrDCJ1D219L2RZvqUzGyWjgeDyUwJQjwrWaHvdREpz",
  "key36": "8NYmmMt2J4vNwPF3cr9tuqqoYma5eAkDvHDyszAogYiFxff1LaKNVKyL3B3haYUDYBr4cRHWaSbqYE9wGG6vwAT",
  "key37": "5kwBpwRSF5N5oEQcf5Eh9gkW8dG3Kstv8M7eYtzfvm8Se8wQrkzg6N9DTebcVw9sfU7mpiBoiZ5LyTSRzRAn6skZ",
  "key38": "sTbS8HS2KYUpn1vHRpzAAp9H3AsMDDWHEc9a1e3hXFgGwdCdyvDr2TfufCJJijHcGKuAEViZFW8S5XR2D9bfcGH",
  "key39": "5X7VNxAJbaPQ41GsKGe9VgFrqPGmkcnG3DrUNyX6RghScWBQpxejt1vXJgEast6m7RgxY8P2aHZ6v6dAfkCuzqoq",
  "key40": "6q1qnZEPkqN6z2jF58cv78Erf6ZpZZt8dEZfVHPAvCq6tEWGa1dMhq9gGgfv4j8UfH95AqUuTfdHv2naJkQQZDB",
  "key41": "2GsrcCniuCiaEtK3GAHELtu7TNZcpcKd8NZn76HhwJ1x8zJgi1FcafUCqTDoqH6ycKNPfP4qpfkm13gDAaB1CNe7",
  "key42": "Eco4sqm2Gk5m3PE7YDDyswMCBdWiWnPqHG1UC8z1PcQjuCFZfEsmTqxAW47ZTW2xiYixjUfeg7rhJvu6GCLhUT8",
  "key43": "2HMg3kYiMZyZVfXeH5HzmudD5UEnxagNSERJtTxAki9fD2q9JHrqEq1b6c4jdvWL2KqTdfehm4cgFZYnVCepswgo",
  "key44": "57etijZJ2RpJUoaj1uHG96wrqbTj8PSv73xStzzY7hc1HowT69oUXx6aegWy5ogQCy97d3XywmNvGbgP3SmAQZeo",
  "key45": "2P6za1w6rmc3C7C4unuWVQgt6CQURpF19BeXNxoQGdiEWNHpCPkiyZ3SuTsiAsofykzzYhPNFTpAWGUhSEWBzxPF",
  "key46": "ANsmoY2awjBBX1V9bV1wo97aCwuJWcZd4Ek2EJjwvGiYGyi1e1McpAUPYdcL2fGSV8aELz6yhNRF8dRdGCgnRUx",
  "key47": "5CrNhixBmVqhXjCcVkm4WzsPFh5jYCtDPXwm3iPsF4etd77kPQY5cyTZ5h44qaGGPYE8J28oWyHR4yC1qVBkW5mV",
  "key48": "2PwCqK454rHPGtnb3Qughx7gm2XL9hUsFKszD3yMqjVf8Y5AKXqiMEVk7h4SgFhtcWPnZtKHP2LAgvTiXgrViaao"
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
