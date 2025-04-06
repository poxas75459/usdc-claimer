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
    "4RojMJeXVctvJfMj4Mc23mFJ2PnU2HyV83JEyVWgsCw1NukoG5WgXtuTN8AUbat1iR1f7KKdabSj68wDgXR3S2Hv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BHgCoSzMSsN2okazM6pagskaipXP6bSn6vaW7hkkHfQtAFQZPKKPbazFQQnv4kbYg3ZTw1wqD5sC57N3TNWjbF4",
  "key1": "5BmpwphvqNY9uSx3GeKbWSicpbndRbzEaBVhkmHV2rJEZPCyEeX2MYS5SDBxATk4kcAizjTc1pX68EQZUnUs15EL",
  "key2": "2UaNMb7DKrT6KcvcEThmLYk5tGdCFSuv2QiK3CMRxS5r8KqACVYz1jLTZ582x52rLh3cxeA2CNRJXuAKhBFhXCJE",
  "key3": "4SZpCv7HZWTxgVWewjzBuBktjVPnpzmnLnWYfXCL8A6DyqdaGLghx3XHJcDnoeGRGnBRTqeJPHduzV5AkYFA8MPk",
  "key4": "49KSkfnU5WoBBNanmKByFHn1NzX8fMgEvLjzrGFSSxPzrWfNGX14UXrYUouz3EFYBM8J41gSGSEkGvbrzN7iyRZ3",
  "key5": "28E3of4t8uQ57yhquDnaUx3vKspTYHtu7VABgfKa3uzpX4pUDWwRxkU67fMokvwr4BRuXfvWyvMjUTnNtgYGWFn4",
  "key6": "iTkdF1JgcbNTeCGp4JXV8meCk5rF4CctjBCXoX8dZB9GTVtBiSc9zpY3UHuNYvQ8st7Uem9HfKfALrMBkzrbeE1",
  "key7": "2KvL5iG689s8RPYt9nHpMBjrLuVbAurjmsJUEHJaPq2KtZoRxYSeJM8An3fKE6FNmByCg1DpjK9FAnRT5QJumq4a",
  "key8": "37veEGEtuPKp9WyoP2UKqQD5Nd51ZTPENwjJznvWisrZapaZwzQs5LaMSba9fAFdpY6n4fpAce8P2vwrLGgiuh4M",
  "key9": "KR3PDLx3VxvsBEupaFFzFT6HBZFdA22oe5VpYQ1hkN3V9whT2ay7gu8zMWdyWArFZguBqW1qYDqzMK3mqdGmd5e",
  "key10": "3FBqHtxho8gkePoL5hFdzBuUR3io1hoBVdoaXNT5PmmWpotRASsfxSzQibtAWSW7EaiXz7WamiMeiQtXFjtYjEsm",
  "key11": "PcPTDbjgdibp63LN6TCArf6D4vVGQAtKEX8vEGv9yajgBL7p3W9FLqmioEDMdKJycLhL8wQdtY7bH6DgdpGPQPc",
  "key12": "5szCUVy3kfzB1R7iHKF9jU3uq42oQEpeGRejPJVM9YyLqSqqRgmQ925ScgsXRXwAMGWwbuiB6CVBqapimxdJhw4Q",
  "key13": "5UnP4nq59eKoiujnnxMxgaZkNCG2b1pvaRJcqapmjKwsmqoMQfgeVFASW5CBGYKk3Hq4XJ8yYwNZR9GZFhLEQG8p",
  "key14": "5u9hwartfpwb4AgyuH4ku4vcqaCLxER1LbSgXLRDa25qmVykWSfeGFEsUTymjVUfDfQ5sHG8rNngGFUa69NqHj51",
  "key15": "2QfxRGUQ7ZHS5sBMabsN6zVuD2ayMsx4hLULNqC8xn35LyBDRC352sVqXxGBw9ortj8iMiNJMBku4rJYL83xzFBT",
  "key16": "2tLXufc38kxfXjrAvYjADudyA9uars7L3c8nN5fZdEuhSiV8a62aCmukmW5L5ibc7ZK4kDrKReBcDDTn1m1uDhU",
  "key17": "3QtE9SwvVgKR9ZVr43ARLGeZrRFTdnCnd6RsuitchwuFD618HEEi4wYeR1VeGAHHr4C2hxpD7G3qQJLTMA3kMmNw",
  "key18": "amAe69JuD5DAmh82nujPX6mLPS94rPYp84swvx7A5aVGsEs6iBcRoDKXyRYvxhHfuGWba9A6aZiE7yCrvwswqxn",
  "key19": "4wTLLKJuRgjyb9nSLMrvUSeVLmA1i2Z2N6nTRb8TrSqT2KMyhybMZjdWJuki8J3xAzkg3cdqAvf25BuCgTEextBv",
  "key20": "xP2o8GyPHeBgRvoxEjV6Y1mzSCbKkeZDhU5p31rBwuyfw4AUG7zwmR6LwMEaa5UCFeFiVqqEynvcZfnoYnKHT3R",
  "key21": "5UhnrtkGWk9NqJnD1Y7zNycB2eFmXxUEJ37EZec8GAC3zW3VWdAwHWNMgCJEqaYLJoFRY9a2jaSCKRQHsE2Uf5Sy",
  "key22": "JHv91rUVLQ2vD8pyboqG8KjT8qbEHkAu7Y6ihdK2WcoC474u5iao2smjvo2aLZxEkrPx4RHe7jnGNxwRosd9Kpg",
  "key23": "4wx4BRnPRK9HZLV8Urj4c8UCJRjbk11fDr9pWSk9rqxJJvFsmyamTezTdzWmCLWbQhCC7x5A4JXnZNv5wn73BXXB",
  "key24": "4bbFs6Y3ivy7F7Ma3Y2EYfq33X9UEZRFxUhSdErA1nVyWNnHt3avDqBJZPUsKDKiAAnJcPKCxeGX6gUdCpP9Ff7J",
  "key25": "t5Wq4aekaGq87K7dA3AgSropXXKaPvB8j4DAhm87q2AJ4pmbffWJvUFmho2uZW9okmBfv2nDJqonFsB72Nz9d8r",
  "key26": "5oHjGGVknwQ3dSqWmHHhAufKEyjUmfaySMVcmRaruXkenMrZfnGRQA7HUV6a6ZLkkanXU5P738NAVRNcTnNmnfKs",
  "key27": "2yEe1EYKY2wU3pgBpmgqCrcyGCeHAVGiEtvVtYfFUuhRkxrzuH1t3xqiaJNcYzTn1F8hioqjtPjVva2AXkn6dEF4",
  "key28": "stvKDSS4Cw24uwxHjS5eeHpUr6v2a65EGQ23YxQieztwFdPEFSeAtKkicBd8SDZEraVNQZmMsXJjtnjHAKRvEei",
  "key29": "2czp67zNmk8MBY9hRhgrHCwVRZQBBBqvT9pZzkvhiwuJBGRWw4q3xbpYcuGM3DCChmUoZY53SUgmH3WuE4RCUexm",
  "key30": "5e1Xp6xAQ2qiXG2EzLwdPqbDCGwiHXPqQmPPVwT69xQNFQUHEF6VjQFyQLcVVgejaL1yDzZnU2b9rDfVA1ZqEnf7",
  "key31": "ZH6YujqrAne6jY6fTGYsVrWdR2PoPUavbA3RKKiQ6MPgjAyHT1gms3dLv4TkCHXREBb1jF7wrKkk2TN5h6LMyXu",
  "key32": "2Arn5LCz8gN7qanTrmgBZbUvUv2MrVq7mx4qTx7iRicYvN5oRvNTpP2wmTTqEyZuu2mMUrvsJERkD7inSDBTHeKX",
  "key33": "x87Fnd5Pc7vXbuHzbLGhMmcqTuhnY1amurcmmwB4B7X5GGBmVjCpKj5DQwVRd4H6N98zq7qseBbokjutJxyuYoB",
  "key34": "4oqR75k5w2rAVYzDibbekJrto2EsZ2f2oRTEgJJNQxqXg5nNa5JxrzXSUJAn5jg6AfAuY28tzWwEPcnfeMJMC8bH",
  "key35": "3QED76GjwuPw77gxqWa8JaNuSedAE7uT8U5kRHVTZPyvXfZGbVhr6rzuUsHo2mxNHeB3HCtSFCx7uMQx1zCbAKwN",
  "key36": "2QCzT7wL6UUD7EfrQgaLyaKKqmz2ESSiw7zzbCgyACk1RxVickYdDZL5q3k7vUw79GEkz4Ne6cM8wgjTRhdNvU91",
  "key37": "3jMDi46hX65AQqWqNmHCZYAS6vsXRDrpF9PvLqfFi6294ZxipJXSm3cxQbHCwiao8MSkcD6X8T8WGnqSLRPd3dpA"
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
