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
    "5Hrn4i5XhsQNiaNqNeu6nmgsUGxf5txeFNoptbE5A1JiKFQ59Gehq1mmYyDtj4vS8voFwUfhKRqSNpQHLb34Mcrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44FpvJZhnVnS3k4P2173SAzp3q5F9N8S7wtkdH7sVMfDcpP3NXyzRFSbobowqSU7smPUYkru7AY5JPkeVXL6qqnb",
  "key1": "c1yTRXEGsqAtZzHJiyqgRTdXoWE3J6GxcN3DeskVScYFijjPDQ6Sqi9sY658FTQNn1uHJFkq1mt6PuMCJLigifg",
  "key2": "47ewjGim14R8gS1kRaC5GDJ1fX3hba9nYgDHrND5qECVznoDPdE3ut8NrbrDvtXBQhQ73okrqg7W5tnDqGgsj2Ym",
  "key3": "5bP1cpHnA9GgupYXc9TRXpzMfMekkWqHH65V62seK98vrh3fS9wdM52CbYPdEXVZNX5Ak57EG8wjYdZ9LU3DECsU",
  "key4": "2PTzA79pdPGEPQ4KGV2fADXCfVtZ8VFQM82RXLS18j3xywT1MasTcLDQwDhKLhDJyKw67g3ukgX2gqXZhnKhvdhk",
  "key5": "4xZLXoxR3C1ZcHLPzdvtxvHj8croqdbPFH2xyrtPcp8k4uJP9uDZMmY7opsWuTzZUFaKKspxXTAM6GwTDcqVdTD4",
  "key6": "67jTgUPhJc6zToCi4Qatcu6caPYWR9G3m2BEVRJJ7c689uuQ13yGMX94fy9T2caWFedF4Pb4fufovxTT7nUi6JKn",
  "key7": "2hA1G3ty66agXFWCM56pno2dhfnhzJWA8ciD3Nzuh4qBpiLdwm6WiD8UavdUa3Pt1zcffb74ZUiwJ7WFMAi5NwCP",
  "key8": "2Q7MjXeGRQKzzWE1QeNBS5Um4wFq37qJuCfGgfhfdpo7oEAFMTHwjMcQo7yB3jeWcs5vktbGs8XninYEkRiEYWDL",
  "key9": "2VAoSerkorFMMqqajPNW4jYRajwrDaUww2xfgivu7h5VRzD6UH5qLq7MkaqRQagUWHBHvJDEt73uFNN99jnbhXgk",
  "key10": "27SUJxqpuGbpyhzjMtY21rYKAfP1AqxVWGUysHtvp5DtmYqy58J3o79FFJcUuJiGiZNbjMMRPeRwfKqros2yNpi7",
  "key11": "3tCrApu4vfVTso3ipNBrPyfouHjCrUGFicYLPadUeegqYYJnt71jSCbfkUheZifJhGXgnu2B1289ZjhxKaeRADXc",
  "key12": "3fYJEYrejwtBKQ7PykxihbGDT4AQM75F2s43svcRTeAvdPWSJ4W47Q8bF6wdf4fPVzXZwQH1nuNZE1ULgriY9dXh",
  "key13": "2m4B5RcR6GQPJzxe8GR6QPYqEa2etEdpUwKy9kdv94i15cp8Tp1iWB1Mhu1yVdDtSTwPyczA7511jdGVVrJJSMcB",
  "key14": "5spuBNj6xsLgddBhraN94RMmKmDUJpqrBe2dWwRJ5CDTf8L7vu3wEJDeQwVbWXhTnte6usiZU59pcVzbprfaac7q",
  "key15": "3XUTSMMohdgAF4SZ3nkcVHZktT21Vm8feDnNQwJaUWsxWsKVcpxYFCyAa4JmrCtGMuBdpru3cHxdyLphrnTF9NXJ",
  "key16": "3iQvZA8c2rpjqShma91eqZZ78LAChxmVmrdtkuLCZpuP6dWKZcknMcApbB7CrYTKZfbSEQtje6ZfnV55tLsowhbt",
  "key17": "2mwnChRuQr5G8EXpNiAPaUzEU1Hnw1SCDNZC4p6wS8qRsgGGdy4eiNax8VHYPprGm9fXeUapBkiFi2H6AhXprxvp",
  "key18": "4QTMu7FteqcPcHxEjJABLUFzy1MkHpsEoRC3XFehg2zDbXBNBponAHwFE8iVsgbMt4Etk9eyZHLRBcqFLHKw8Ybp",
  "key19": "3yn54RMVZ82jN3htn5DQEZzjWUCQkCo1BtseiLg9Z9YU19vdVTTqa35nidYsRE9gXUS26wxLjM5EUNRfoJrJ84CF",
  "key20": "3MnasDq5RHVue3H2jkscDUSW28HtHEfpEtjfipEZacnhisaFbvo8XPcm6k9E2qYckRV1iJiGD5q1jFAMVH7eaB5g",
  "key21": "2v6bX99wYQWW1xSxUz3UnQs5ZTP8b5qvhjU81ukUjZr5zvSwFRNVmSVnBkd3VL8rgrTDxqgExtbTPqUyiiCZgyC9",
  "key22": "3tXEbYsP6WtJrpVeCwqGuLR9ymFDFiK28zhwtLCQof74euvwZag55QxiYZQtqdw1pxaTME36ncNgbfshdhJDaXda",
  "key23": "3LVH21WBLPoTxd4tDc1FuXg4uWKS7hfecLghKVUT5iBeRoMcPe9QgjPKpcpNCULQfwS2rSdprdFe1sDH7BDHHRo8",
  "key24": "2Kcr2pBKCUZ3PYaWzXDrbF73k4Qb1E2mJBwwsZjzbkBCzMau4mrvzBb4jDpVZksnQ58g7Nu3dUHmxtPFUVXwaVTH",
  "key25": "53uroT4USTYUnZDGaXCuw8nKzBedCRBYL9ySBUbjPZAs3WWj2b982r8aAEFJi8zsBLzinrXgZpaUBJzbRxQjNGNf",
  "key26": "9JUwxnE3r2eFp2nsaZ9Vez4ieS9G9RfgNny55mRa5oUqMyCS5MqU1bvAWPGG6uwkrNJex7Fp4TwpPrmuRoy9boi",
  "key27": "3RuFrXqQseCx8ibrQRs89Ve2TQ2Ev6BzbqFWzNJ5AAvEDjNhGFA4JP4X5p8DY6aNT8E99byDuWPPonuHRG9Fji8Q",
  "key28": "21DoKwUPQWUuecNWAtnJTcDfJwnJcBCR3igPRYVxRwqvCRKZXSW84iQBaFYFEp5KAcj5c7qNeAyCffw7YGEnBCZ3",
  "key29": "2YAnTeQZnsmHQDVeNh9fmSMZRSnoxhQTSP4Bamp6GtHTLaskZfzmC7SPRf7SxcH68VURbvn7G6oVK6xv1pi44Cyk",
  "key30": "2fpnjumVuJpR76xAaXCgrAVduegXF6fndRrBKMaggbCHam7AfDJwojBbZXrd5amsbRr1ke7TPAG7yzVpS3fxC7RZ",
  "key31": "ygi3cNpuypPdn745suhhYcDD83R95vpW3cGgMkFLekxGXko7JoEcSJ6mYLc3gFZx7nQgxJeQDmZcjakQdKtRoFR",
  "key32": "WLh3Ms7ayLLuJwojUttaNdCjgG39SyqYKjVy3637keUHs9DvWDXUKcGDPzD2fpF7FGdJpJChC1hmKXqrybpb4uW",
  "key33": "3X1EhrL5sYFvQfK4BKwabyWSxwx9eXNx2RRVmDjc4YNbKzDTrB55NtiNWTBfABtqezkYwAM5ep77d8pYGDFUQD8a",
  "key34": "2SqN74j1Fsuf75pzXBQnMgL8AnhQjNJcGN79taAF3dynauSCJ2GVZtyVYySfQjreDRJWqwfvzPxchtL76fnNGWFz",
  "key35": "3f7Ckc82x21XrXDv2Qj8s5FzvRPfv7f1e7RKStXDg8bpZfC4USDmE1jWtiij21cjZpUVhZV5Y8y6pLiZxknc8gEj",
  "key36": "2GP9ViRHaRiLkCf7gtEcw4KVmtQ7BRpSMM29TxkmdBJCGgHkJKsnZJx4SAub57yyJA5GEQSZAMaLoiUA2Z2y1T56",
  "key37": "41iALYB62hkGBAwz2edEpVak5xDxTVbJ3V9zbvQdVJDSMCZ1MFXgVmG2RJsqBX1wdhcb9wihvZqB4SHz3gUxXAwi",
  "key38": "5vC5zMhYMziwRhTJx6keZHJXJSHk9Yo97pGL31qXHjRWD4z8ETLTpEvmhWGpPfNmpAH8hzp297y3YTd1mxFi84pv",
  "key39": "5rtQUkW4prDMm9JJwtSMFVdQVMrvLAFLKp9CXqmUEsUUki9wNYu6fQWdxC4PEUJ7rn2dfzGcrhnZYKyrjm3bMhzJ",
  "key40": "3aLgLTymdhg3RfrkNFCUmNoV8psoRsBYs2Jxmh9ya9wVnZhG8dftQG1pw1sjyLPWv4hfKUpFdLucp9GfM4gfiNTb",
  "key41": "2zMnA93L8uTXFS69A5TdDgauFLJu7j1pzWS8zcHUThjXycKx5NvLZci3NigkeRZGoKdmvHWB4QWjvk6oAjXz8dmk",
  "key42": "3ZLM86vWnQff77PWnvUDvokw5XFk8uyBjcGgXXnPf4ENyneY6dBDWMJgea1HoS8b5FTqVKgo1MZxEYqtKmPUjBDo",
  "key43": "578vqn4j7K3yMLcsdo9wHMDoy2mMLoQdaDc9VQignx7CjcuT4R7L9GKFY9snDVaioWwCWy9v2SCCAxuvD21cFSuu",
  "key44": "3yh6UKuM67Xcn6XBcTizFAm4NEAa8kyRtHySpdENQ9k5PWxYoi2MEJW4Y3U6Gr5bm3GvEAsjByW5LwLdWDf3fqpu",
  "key45": "5TH7CYgCDXn53rS14b4DAJao2N5w3aL44KwWrR6Vi1YgbC4nrP5imjkxq7morWTUUNAF95hofNV7HwHsjPqahaUe",
  "key46": "26pAiXSP4PJrw94YqGxiNnQpwvhziUFVfVcy8Sa22r3gN3UH4a4hoJUofRS599vmZWWnG3H6jSdg7xR8JfnZ3XfX",
  "key47": "x2C7qYW8G8ip43fMPwtjDJqFWTeh4YQ3WkP2zM4yopVGNoGCLPQY25hXhNAwVeN8CtUGLaRPgAxNg5PDauY43N5",
  "key48": "3JxpLvRSQ62mBBLaEWuFbBaBdSQfJC7cXKjSCBoiLP7YNWfnf4CsP8vV9P4dyVk4qp2Ct9qF5zk8k5avqMhfR1Tp",
  "key49": "2zKsvum9UxZnfXSgzPj8Z27QHBwmxSkdic8q6pbo6ww6Shvj3ruD6x2EsCnnBiRWowS18FhnzkvYidGxdu62QePs"
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
