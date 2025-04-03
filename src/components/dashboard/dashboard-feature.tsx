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
    "259UQFqn5XGqcnRRGMb9FozfenSaLja76GgjzfRSDXJbEDoihgF5qqpneSDG7uqLAodCPDSJNU2BMAWG1srHwktB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kzm8ib9ME5GXGnyQWgb1Rj2tBDezv2DFNH9aPwWWaMo5g6avye7U8TWTfJwmmUCiWNZcmBLwjNVxjj13W3LLnef",
  "key1": "2xe2qsXcJW2NwFE7PQRXdRJys1vrhXXu5y8xbhMzQ2Nk6XhLy7sf7ixGGAad1cM3JPGwGzVEKXHvftcP9FeJ4emE",
  "key2": "5aU1Pk71PKNCvwM5qUVLUFT3C8nebKjBJuToSu5A7gk7frCnX3YiayCVsru4ewttfNRx17kRNYNbmzTRofJb3X5f",
  "key3": "2tSv27JLPu6MKCzbqc6BParEM4Cyk38QptqThrEDDHfpaYtJubP2QFTS4KsC6DN8LWcMETRugHigC3kbB18JRZ3B",
  "key4": "5oRHnZHwovevwY79mWspNw936cBBTCa6dQa4EM8te2QqufomGsQ3NCDUCk2NDkivKX1HgZbBax7iFQoBgg7BMqDo",
  "key5": "4dLJKJqNUYPT9xPpvjys755NqDDaBxtpKNrpMFHwPeAr2MF1eKNJFyJdTeW75i1cKnH87YHGvGYTZZ12BNBKbhg9",
  "key6": "5hhAnWcjZpJnrH3VzPfXnffVah1EejbkmxsSoQbDPC1UgJ8t1vNFqqxwnAp75RZW1scFmzHGMxPh9BBzZas25JSp",
  "key7": "58ktqHquPzqYnJ59nspuVBWHwX7VUmsupWorLnjfxobP3ybXUmymSDpAH7sajGUYEvdfhCgjrpXUZxLq6dtqf8S1",
  "key8": "2qkCkgEgjBFfFV15gbpPbGXLLZKjVTiRPfBUbAtTLndBic8dMPXMKt7UdvevgPeNcfvRa54hsYPvfouhqE6SBCv8",
  "key9": "21zvZPpADQA7hz65ZXVjcsCrzfTVrD7wR5NKNc9yWv3Br1RnFL65LoBiExLjm1tVjEoCLCBkRUxX3eFbA4ErBxex",
  "key10": "3oPDMPnBdWDBSspJuHZYaqWCwDU7cMtnjHitwLoTj4DqqdA8m6XQy4p4GcPq7v7GJKBziz6ZFyZZka2xQh7ax5yN",
  "key11": "4jxz25cnVXdkTWTcWDyWkPqfnFDpuKm3BfLp7aRXuK7LKuVMVKEVuEidmr1zvAmo6sEMJu3gCAKp84K62pxaftwx",
  "key12": "h8wgZe8QM9MV5fNcX5tyrhxJUjDcjcAY39zgpLVLMZPe7QDZfMK2BzHr8fUJW586kW82yyJnfnCorUH37jv33GS",
  "key13": "3MYS5M6AWjA6x3drpo8kpK9owmE7b1v4iD9s675F3QCbKL557fD55Z9f1vNcs4g3DHsuPzJCcpC4jviyCnLvLB7V",
  "key14": "JCmZ5Tx7SjdD7hthSev5Vd4RLvGLzSEk7ngejprNfDvUVniHnkxuwzNkT2gm4qPbwWKWNhZebsgczB4f7AWRGsF",
  "key15": "nGxmkv4su6NEs2ZmFngMaQwXFqa5yeJ73rVkbo8AAUGXxdn6ZTgwDmcDJr24itr6xu5DqrsXMUPowEC93G9v3yL",
  "key16": "2ZcApkQDg7CfG5umi29jXuT8iFLZHqQzwUQiTahLe1bpvjiUuk2Wy46HZpVf8ZERNjBTvUpR9mceCiMAT8hHCueM",
  "key17": "T6fX9uRS2GC3UMMPpNzsSNmEht9mtcAy2ze3eb7FbSnyDfzsLjNAEsdaXSANb9djo2NXjgiUwwfbxLtRKRQSPxn",
  "key18": "Fov5gEFPJEK1br5yLYoy3pYkHPC7eM2hhcAJhecLUrY9dcwndL8yX5Zj83LdgoiNrr8tax6t8mzee1wovSeZ138",
  "key19": "4EGRudMjCvw3ANdiBZTk9mEiT1V5VzEf165vqkEaf5FawXmgPhp8XGWcgZTnKVbTpABViALUxsdzvskqymsdh6hd",
  "key20": "3BREg4TujZURZVJkSyK3Qk6ToZxca6LLaPEa8e5LBTJRWoHfvXsXyRyQZft2yfPYGY6HC9xBkCaKfvHfA8MNrpdL",
  "key21": "3HfPL1CiGJEm4Njj2o11HbfXB38qyYJfzQzGbffT6TyPaaRkRstJrKuEs88vdzPw7jHYUbpM1iexJSCTrVdWEqif",
  "key22": "5XayHzQHZXo7YFSA7S9euyTWYePNSMA8QBiDUUbxC6z8ZaxgBk6VSi36ts7ktUVasbPdfbwL54QzxCvdiQSEA9qp",
  "key23": "3cX3R5GwDNKyTsiGNkHicyM2dGbHNz99b9oYN8WQzueo7NjcSKS8M94NsCXKQqEeTHjkcN4HgtfekZ2fTQPsce6C",
  "key24": "4UEhDzySmaEqA8pB44aypn4oy2dwVtMKSZA9zYzTSt7pQJqh1yFVfHtwiY4cDtFcmQjcQ42SqgkgYMLVvzn9hEMz",
  "key25": "4fT8eXL9G5P67p1DU5RDDhFefmaWJgqvoocmtNssKPVgjY64ZLKJCarvrafnfGDZfioFEyG6vhJM4e38TMnXRBqz",
  "key26": "3183nXgX8J3R59V6e6spnK7ypNBQt5gBxpaAFM9wuKcXgKPwB3Us4uErLXS8S61xragaMw2nKHsck1vmmsGsVmEk",
  "key27": "3AHCMN6jEM5TK4vRaza6tPkoR4kwswM3Q6kLGyW1gvPFqFQJmb6H8rKny23jP6i1DBrE45vfGWidNb5C99jeJVr8",
  "key28": "2jV6SDi2itV9iUSPZ16L9QijnGfYzPHwzVQhPoRLDqvcbih8PU9C35c2PzDa1KzwVuQRZVCbANWmQ4gn6mNMTc1e",
  "key29": "3TSGwxZEKEuNLCb2LYUWjHMtRd5eVbWZoVLveoG9BnVXdggNzd4BaCZWjWoZpYGsJBtSeeCuc4wxaWfNyq3zm3tL",
  "key30": "5zSxFVxHq1ehrYmAB9QXk8kr1ojwjCPF1YUaxzahfuTJNCEhJrMum11A3D7RMMwBLNARzj5JnE8qxy5DkRT6efuK",
  "key31": "3a1LoMDns23kFTZ6QHZg9NqvazEfW7Mcejosv7mp4qNjvRQ3o5p1NeAwgBiucGvpyzdpYQ5mmxdn4z8p8DmMvc1Y"
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
