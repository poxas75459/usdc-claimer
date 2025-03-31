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
    "4Ad8WLf7LHskJ1b9bd7a4656fgTJ54nDWkAqb4Z3DRayzmN7RU3n9BiUosAT65z5CgJf3i8FScgcWaYtjpTHUzfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53vVUc5TdkHu9m7mw6KUHP8iUTs8D86f7xhZG8BN6vwmUs2WKauahmxCPfDUx9ruyye8TtU3feqGmCPZ9tPJSSgR",
  "key1": "4ejL2JuMbuZQigGJgHw1BCUEH1LrphBsCU2uVi2vmYRM5VjdJLMfmp1nAWv5nJTtjDiii92CW4MSvJaDVcbEgyQq",
  "key2": "3WGy8wka2PJ3qtyGMh9nBZLre3JDZwTTaxvALFgQyb7EHA38iTjSY2dZ42m4bEfdiSCCx54USc48yXYbwj8Fjnzi",
  "key3": "3NgGz7YmuvQTK58YyEAE7DVEjuWeoZE5s452qofb9znnvyeBBi5qnb915ZkLFuZtaTfUPs7tACtTSPJ3TQjvJW75",
  "key4": "3bcDn7egwnr3n5C4qwRz8d977VhcQTECNUQ4CF7u6hUqfRTaoZgJvT2F7ZREzrb1H8s1AJ9zSc2axrnMnEhUxCjc",
  "key5": "2wsLPqBhzKuQ5ne8FMFacqTHVwQoHLd8rjWo1UNQyomECwjF2RkRXWXkR4chnrBhUr7fKkTp2gRvnvknsX3Ndt3J",
  "key6": "4e8AgMrVViWVeC4mmqW5nXgCahxgvCr4YRJLp418E7thnvD7X4VKRyxJHRAhoyiPGc15xbfASrPs6gaCqFpNin4H",
  "key7": "5PVrrhqxhcQztvVEhD6MjhNgBdZnVcQWXJPhXQYEjffFe4bhjnytXTy7KKuksRdAkoVFR7FuVsHnRgVxqqxEfJeT",
  "key8": "2rmVHumLG4nfWcrtLi3QnBgxNvEz1RD4LW3QxEtfUS23HFyojBBB54rb5vH2LhXXVadi6NAnHKdjToM4oCaZPuDy",
  "key9": "5tJcR8CGRgfnumZ4wdUPhi5WiUYHHKJeeq9zPyyqgGZXZNTxnHBJ2DHL1vfA1gt2GoWoG2u6FK58Lfs1Fw4TDoS8",
  "key10": "22q7USz95KXffNKaUwTffsShFVN2SNd1aToqSrUsEYirECjmTPtdrFQpkzVk1GWbASUPVY6YiqzssavixNQKifAL",
  "key11": "4uzBar6TM8M9D1ngjT1hYEaLoD2XjNShJVHTypx996unxtFPmy5wSF5AxCsQrvzjPaZ5ohYDxVtq215zTQusiS41",
  "key12": "5KPCQuhbdqSXCzWQLRBL9B6g8FyMHAZU1MZyS9yhQN2cBxRYiZzg16PbDiaoZH4pUSxvarK4z8h9cyoFZsB3pxBx",
  "key13": "2Ej1c85WSe2K9Utayrr5d2duhPYJbenWw9TPYxuPA1NyibGVxShxGnKaVzeCtJYWCUrQNMySFA4w6RTaUiaGybeA",
  "key14": "3rJfQ7BA7Qasdqe4gahFf1BhytEjxha5HKyyXgvwnmzwAseLoH2xfxd2LMvYmwBxpo4UYKzSGFLMcvBgWCojhKez",
  "key15": "5ZVhMFHEsq8fAUzYvbL29ixmcZVxHGpHrJPek3BnfUwFDvLG5FtRhrTY1fVdwUXCB8CSApZ57tkqeju7D9aYW1aD",
  "key16": "2GcVxTB4y6Bi9BAxfV8KimCxCGVpe76AmYZUY4PuyV84tcoxZcmX9f4KTgudhF4WcS9gvkbEh2ZosFWXKGuD3KoD",
  "key17": "jFeTWg35bfK99X9UWtTChE9pcz8psqBdVLzpcP5rMMhhLVz5ZTWKKtGiagjwkfJZK3FsoG5Hn2atzfYchjs45xw",
  "key18": "2hqcyhxcHLPBGKG6W5gQD21LuTx8hCkv9tSUwPv9uyEW3xatbgU5iwro7dKWdGTARgFfdnUSS2Exwjq8aQjqWKzw",
  "key19": "2wqpPNUwS8cJmMMpQMQ4Cva5DqmktHyHpRYHQNyT2KkjpAYYwmR8AaAnAaMy8CbqPtm17xL4PDSTr6TgcsTu3X6f",
  "key20": "6268L26xGERKmhLnsQjGRdJwZmWUUuPkafc2CPnt2L5BMhrzE9iygybm5Wp2ySALreVehp68qrDftMYGt4StCHQm",
  "key21": "2WZUM8tGpPftgSZj4CJmgrcsmuttims2ECGy6C8qxMNqHZsVcpdRzqf3N64beFS3FNdSc3cp9rAeyRMu9JJFj87b",
  "key22": "4Y64VT58bYK7pXwf5hWH7Adfb67JGium92EoVz2KJ7J5q8VVrQpQXBkAjbRhTeH72eyrAqPbYyPsnSAQEv1hzkW6",
  "key23": "3Vw2Jf3L1vYKKknndszRDaghqDGiZ6pUo5sAWZMyqjL42aFWxzg4AVwknwupZuoTPQy2AC4AVSa2LJXDCTqaHHuj",
  "key24": "5duiyJTMJUkeAMCHooCv3SCLVD9PYkYhym1VUbHxwkbR3nYPgvGEiFdnFsDaLA1VFZpU4h8k7EtmvxAorW7UJpYp"
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
