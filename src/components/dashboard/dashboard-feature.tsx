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
    "Aw3TKSYQBSutGipJZkfRmN3ZzeM7E8tjLRh6Ah78Y9YydUj76nkK2gYzV7QSW614ETwTUUE6chX93UjKHHNR76W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sspWHQuktajLRanE7muh2kZbmmqer9WHbHpvsPt4Vq3L23TbSw4Tj8RMe7XvA1DrxLsrCqg9Mjrv4MS4PUTeNG4",
  "key1": "5uCTnft59biywpHkZjPNVJr4QYnKAYrxRD1u3sjkUXthh6SpnLXrWV26EubzrawKCzqEHaFnFj3RdqWLDXiQ6y9D",
  "key2": "57o7fgujMVbFQjvqcFqhzgLkAhEQMaczXfe7NQU7u8K59meHTjRG4WiEp4gW2qHjpoGHrLHZ99tbJjWnMAtayTnd",
  "key3": "5eoyxvCPGkc3rtS2M7X2r6UBXcok4kr6uRwVHWGPkPrmjWEf2wQ4iyUJognZ1PJUFPqGsAxMfokwuKxzRpJnTL1p",
  "key4": "3J34Tkfefbdy6h2WbWg8RAxA4pKfTZ8sPd9fpJ9ctAWRaHceyTDhXJcbHNDkTb3U5UNrSFj4f7EZVZZ3PVvnuVCt",
  "key5": "VbZnRtfpCPaTap6PT5W9kwvfSi3QDNx4vAW6wYSEqaah94QnaE5H7gSvouV1gN9V8eGasarDhv8Ls4ane9bdrVp",
  "key6": "37zumEQN8ykT6eNqQM2R68SqRxk5td4jVFBffRTTC8HXRHU6cQzgmMXUnHobSJgFiccahLdHpxpWyRFKSbW4859H",
  "key7": "4i5nEC3E5CAWGQAdbTCYme2ExR4Nzaf4m6MCVUWp7UXVCNFGubJdSPoSbCTBe6uxJj9hBhS8qoKLagMmfD6xyx41",
  "key8": "2yK11T91qwTGHf1cDvrZgPraSxjfwcCh5FY8YVVjDQJzj1utArxgTQ4TafDdrNdwsQsBmYePSVpJFsrwHJpBW5PY",
  "key9": "3Re9XvXqcEURVAKo6UgDK79uMS4yxhQ8C8xkEg7b9XUysiceurdjD23qyFPntysWRqFkddp5CQqJbTQEyQozFucG",
  "key10": "3LxLAAFT32vqKZ2y5QcTsukdfSigpYSkxeZMMhZV8tB432qe9YvzG3JeeHgcErTEV6ZfxrU3E1fTBUyQGWjHLnv7",
  "key11": "47upzP74jk8s8NBsWyQr9nipoQR8yvGb8SVAXmNohcbmgWHiYukYw2bGLMw2CLZSHnS8WbNZpRj4u6jbim62TxfU",
  "key12": "5YiJDfooCSsKjwiXxbiux59UnK57nZucxTMmwFjR77SuzkPW9CJbCujD6EEgfqm3c1Z8aWFXXvZ39MVist41ScYo",
  "key13": "62QsP8mNFj8HvLvWHcggGQyz8dimLwob8mxT7CDgaKhzrZ2gYtSrf5U2sDZEEahMyMZLNwcZPYz7NnCRD6Wjrdc9",
  "key14": "4196ViH6E8BRb5V8XWrpBK8n72e4U2BChMX12B4QPFA8htq55sveEPUouPEMEkEutfdiN36AzMws17WH5WcWhiVj",
  "key15": "4pzS7SfpbGm9R8CEoCZHHDEDVZao5xDDhi7jYbg2Toq4BAFu2ZeBLXpAc2mmbHZXSDeA4S2LBLYuUJno4cfVbGnT",
  "key16": "MAK3Dq9X2CKnoSZyKoCMY3XdXQv2tx1SNFwAh6M6Szqjx3GcVL4mJNX4AQYEedhXYUbZPqYxxJTkHBUGyPmQFeY",
  "key17": "48RqCrBxN5c5WUq1nhjR6biSKYA39hpUjfm2NWH8A6gzrRX1eabZn2buB63PLoe5Jn5tZDDXC8aQ3opTbEddBG8g",
  "key18": "3Azkvk172pqLnjcgwGkLazwHFXAD16YYB5ZJttebUkELB5H1eHMoZhDkY2FLXkiZTS8a33y9k7iYoATzyNu8wd1X",
  "key19": "2SsBqcnDz9n9PQ2oC13gZRQ5kSHLzFZAENbAJ4hvkFEjJA1ehpUZGnXSGs4fouwUqHQPwFwxYJbxAMwmdmsQiHDY",
  "key20": "3Yh2B1wXoKev314yhzCFvC3nyfskx1kDNhiTai6apRtPaLPVXfFvhhNNJgev555X1LM2c8qz2yUXTjLty62iqGeQ",
  "key21": "TLgKuLKyLN88vp8xRkTqy88vHYDV8BNq5J5bo2Hs3So26mK9uh4i74VvDaMfmnf8YwRFrh5N6XLxxRUZEk6T5Pc",
  "key22": "3ftrfUpjXFHRxpg69fvsn2H4obfLWJGMoMzVZzb3fzz6jgCgGTzDBgDUYTcxAEuGzMRHbTDZJVEK4JyLtdLrq8ro",
  "key23": "e7sKfaJryNry5uwrpB58JAyTjocWUXmhgRY9ZZ9kNWzo8E9xWXBjwrULx9nKCwKL3W4huAS4bR6saoGCrKusU8Q",
  "key24": "3gFYnzyvChz6A51fVz26ig3JwLP4WSWPD6YXzKxARGzgmpy87k6wTyDKz56sNtDAFq1QPVLNTFV8HGCfB4rL7UFQ",
  "key25": "2XxfVx6i8uHDMyjZ9DyoZVEDE2RLzu84hythmRvvSQwycJiVNGdZrMwM9g9PQVF4xQuUU2D7vVzgSBmxSwKMWaZR",
  "key26": "24oFTuBDUuoeLjVhhD3BQCQvyGqrDCEAkFVeCjTVDBEwoSkmZ4ovVzDQt6v77YWb9iVxxdHQLtk2yWhEWr2P5ZuJ",
  "key27": "5FNeiBox5zoSjDpadHwjSjKXGgxjwNp1VBUznQc38UMDXW7npUc6pjYUv6649PN2xPoXcYwTks8ZkGLBxg4Zw6fN",
  "key28": "35CCiRbPPbavgNh8fQky6Fw6aMwoJ9L1FT928s7de2HWbbfiiW2tLG84uBYgtqi7BHGyBWA4c2XzrzMqDwdbSDp8",
  "key29": "5esV1iBFSEBbXq84S86t5nDgLDiwDimM82vPY9RsgUb5BFpGaTubohre4uY6aFMsCHR6Vc5PZpquxuA4BhbJEK6z",
  "key30": "3W2amU4zvDV6CtQwvWVDiAhhriVShdh6rZrrnvgooNp6vJ516iTVEyV1e6oBR5vUaxGwby7xFwpAmewzj78ymMVy",
  "key31": "6aR73j28rrBbWWVRYJynpMQnNe3RRypVrENocBgJPWz6bZ2DnZ4iv4v3FG8oM9FcP4WKWcjG5UCzbkMoJ6RbuwT",
  "key32": "51jXWYzwNJTEX2cKturAGfHiKk9Uh9oN15n8M453ke9ca5XBtMw3V18kTuhAr1pn9qkcfbZpmPe9zBVKT6mYcsA1",
  "key33": "3AsJe4yDeK6pRPXEoShq72SuJZSKzTu85UKkycFnZAZK52hYqnPRJ2DpH5dXCg42py73MgtYcUFkruGo4cs3YGgC",
  "key34": "3PJ9pUReN7X7Vy3nWvSaTNVRP5nTQALMDGJWcDZfzC69E2DT599erWWkECNqtTMxqD7YALJ9cnP77rrYyhggbdFf",
  "key35": "4HeQAkBC5kehmxgky8cebVaqqbZqADdfmnbuA4C1nDBuD4pcoRHM8dvkEQN1v4U1rPbsJzirRubBZjscLLmtAxtm",
  "key36": "5WG8B3HLz8uFH3R4KzFNcUBhKgac1uPASoCDi9Hyw6mSqJTxWvPqYgELhrxu8UfNszVFEEZFCqEcQN1ULpbEiHyu",
  "key37": "JjLLYS3Pi6T5bztehXfb8BnZyjGtHd1zCRzg6Rp3KXNajfMJXVA2XGKQzU3fWfgqcK136chK6n4jNFKiNmHm11b",
  "key38": "3KYCpgTiPfiPkzdbATSMr1PwuU6EKkV5sYFjaUY6ygG6wXayuELucthQTfqwpocuREgqA2Gx7o9nBpvqfXLRkgrB",
  "key39": "3m23FfuV9neEK2gJiDTPbGt7Z6rtrHfnrUCVaSXLd6cVyKeEHziCwYcD4BDonBaucJ4U2qdxai6LWCip69MpsEUH",
  "key40": "3KLiVqXKjKH7kuPADMVrY34LYVfyzBegTXx8mmdAbYqX5iRun3b8yin6imX87K57aiggN6HJFHBrkynwiBUMm6zK",
  "key41": "3bh7VeVnFsnsC8ygK7UuAsv5P4QRRnj7jvgBwyekoHTdFBFQQyveAS2MZouQGRDFGtG3mDpgfgvrRTGWGa89nNkA",
  "key42": "KUxQCeBjMnjCR5PpURqfUNYNLPX26ta1cNwEktqHBWuX1mctUKqUkZW7JZNU7zmY8ePY1vdRf8tqhUripyf7L6c",
  "key43": "4pmJBPNXbstbwpJfJoNjoY4eeipiRrL4oRei6fF66txt31C79Xi3AfdXnsBTKFijZxZVut6gi8xY4w2WYC8NYu6R",
  "key44": "2KCDXzkqWnwgHJtittpmM7Vds9Z7KSaF5DEkwygwj4scyLZyoR3tzegeqN3LgB5PjVLHRsUjARZJtbndcifQghcX",
  "key45": "2hsUwJe7bTt8N4XNBnHxw4cocFqTJtRePmn8kiUsnJyf7HbkgYNrzDyoKgsYfrLj3t6CR16M6CSE4TsBwEEZfUXs",
  "key46": "316mbnaRYJN7J4gnKXCvo1pbknKh8qP3RfoWS6cmxnJm2rfDirsos6ArBL4qprtki1kRurixij5CvVNyghLouA8R",
  "key47": "2XfRefs6rjyPzriJSps5TRivKCEUR2PF3irjRZ5KszDxK81PQtBxq1MWvc4H8JMoZ7BKy139TGJVikDdwjta4gMV",
  "key48": "599dU5TALLDUNNkdLpTcUU1cHNjeRH7Swa7gFJN5rRCFquGkWifFbBo7P3K5iUJvhqXLiBYBctQaxZJ1brmZwjBG"
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
