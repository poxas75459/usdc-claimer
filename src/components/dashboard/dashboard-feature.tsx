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
    "5PpA71jTHAcTW5Hs1bAqmHjJnmnbeVvsNX92xMnce8e8988vUmXXpS5dN7GGyBm5W7KLVWxbbSZfc6kggMrjJGVR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qc4yUQg62NTnaTuZhdcaLHugExm2UPzD2ViamA9TMNM7yyCgbxaMq7N8fWJq2Kvx9ZEx5aygcHqU3gsKRuP36xX",
  "key1": "vpxE15Nt6MEfDd9t7jx2WUoESi2whCj3p6g4oLxLRj5BZpXXuP3xYuCZwaDVGKSzYYFa687coa9PuRXkiFrHLgf",
  "key2": "5T9v15CSGbYPJV4WX39V6vtcugfKMKK1ok2Q2AS8Azq7rXwtxvFk15cx1tGKHUS3Gw8xU5xc6EjmzPA7Ps1pT3Y",
  "key3": "5GJwhvyKqgr3zV9d2f4ahLJTAoSzahWPazWwbMKT4M3YnUeNuQCBvjYFCzqUUKrCGzHYzBF3iSeU32r6rdrMoxEk",
  "key4": "2Lucr9BnucszA2NmkkpZX1agHcmaRbGi5SgMMGsVuXUPaYuwExDxTPAGz6EkCQ2a71ZphK294ygoD4qGqM1QUF8Y",
  "key5": "2RhcHUGspbHecGFK6JxP1K8v4yT5ksooEN52Uo86xjhNm775ezLpMKFa9pVbvjavWcKEJzGk7Z4c7TCRGubH1cAd",
  "key6": "3KGfgeeedWnQYT8p6QE7D5T3Xj2PGUETtTmzTgngS4CJMs5GVZCGbHVXvfLMJQZK3osyNSpgBWZEV3c829eufkXS",
  "key7": "64pktqqxzPnsCzDetZ5mjEmnbMHuUFQTSJVofEt9vLipaDsuzjybLSfXn7odqWn1phq3F9ihNzL6smj86B7hLdpJ",
  "key8": "5nJ7is85SsT5C8negZeXHwr4mqQGjNVfz5z4sZAqbEYbUN8DKS528o6P9e8A3ZDeVdunMcDUuTejHjAio1SS2583",
  "key9": "3FzzbghtgUX4ShYt9eomQvLooNiMLfEMrMTEiD8WuxtU5Rv4jNFKPRWij6qg1M6HDHSM2uAKkuucttJEKCGTZuoy",
  "key10": "5jeCsztPjgDEsFS3GdVF9dx1BtiYyVmpQcC4ZnTYYsoJGtafVhMcbc8DN2Q7kbbvD9tAMv7viWYru15G12hw7wfY",
  "key11": "4W5ivbiNALvSPTaKbTfmXVfnnKmfycotkRpghYzNqTN5NFTCLiHeSD4eGhbDZxetg1vAiEBKRqXnLqKmCDCLpXvD",
  "key12": "4A4A5NYoFfECP97o71tQQCS77QuoqEzpnSwPY3wmzCqCRxWPSAh8wVc66r16swnyQC3YxV4ofuwDo336Bndc8ZGk",
  "key13": "2hYumRqMEJvaBB4BpCY4C6W5E6PfDmPnay89zzXoNPEJdb5du8pokLL9LgnYtUHSmRtHuK9pcWF5H6M1efBopQJj",
  "key14": "3YiSnLiBwHZe8sS7sUApcZABV9Xxt3g6CzTXsgcNiPRYgNPwQDKeMTwSmkb9qzaQE4CdSfiRJE3pw8qUUARmauTZ",
  "key15": "qnaUfhshxCpd95Dz9T9QSuooMjN74SUTiwZgr2rVi5ZtJ8pM4GFeXAnyYLTgVQhGQsPY39x64QE4tx9Mgs7vzeX",
  "key16": "WHPafGHQYGjSYi15oSEp9mwKmVyBy8etBktDx1b8mUPdhCrn7P9NFq6FhteRkwCpj2KKUn3CFsvprEYpEtVYp9d",
  "key17": "2RyYGyjKfGDuKmZLDvkCAtwFFuYPwXzo7bQLDa6MQhFatwRRNcGXUrUn2Jy7y1jG6B5wMARukm5xqzLAmkiJntJP",
  "key18": "3EJYN5Bj29YxforHQ6FKWYCDkCSugTFoxcVPriTp4sf2ysaDudjGV1dE1wJ5JurWYHChpWJZzvMqBXwsxdwj9W3W",
  "key19": "3D6PMcstSRj8mPXk7i7Y29NbMPeuUL9m4LkpHPkC9Br2N1q6QEfu6UnAPYMP3YNkcxvizLXYrEBMHqj1tsg2pMmD",
  "key20": "2dxtn6ibyCVeAsgXDGayQNpohM1BHGYsvvrXVDiPjnyrotdsqD4MXHCtqNzwv5AdKT78EsMd6wdWZjhfEuZiHiHy",
  "key21": "58f5J5biZrX4yk2AMB83S2SCSbn74xtEkQieTHJ1NAt7NqiCipXLgZRhspx8aTpBGJYHCo9R2JC3NC32dYRGARzB",
  "key22": "3fEgew5XAa3CL2unGp947Cd5vYQkgQhSZ8S1EkE7gfPHoRB2UWLAcF1DgfV6fY7C9wZJtmY72XAAZnSCmjxvo9Yv",
  "key23": "2S794NURhXCMuiZqiwsjtFtjxrR179XE7gxcCfM7HNzw7qnGMvkLjjBFXwb9XVegJ1PPEwSaT3wQDW4qfwqgnCpd",
  "key24": "5VSAK9AsP7As9pKCopmkyNWqt8AUSY9wHsUD6CTLcLMeuGTqSqrN2anAyvYeHHeWdHjdpMrBkSiLRHVFJNvqrQ5Z",
  "key25": "37RXQhfWsC8QkNVWddyxiDAZE9nBConT6kZaja4LLxNoEseAqmM8HguxScaGeowTxq6XYeQBvHEdjFctbfraZfTr",
  "key26": "2dyTtkH5EqboZVi2hyTZkNovKt6AoH2SCzzcjvvk5PVAVu7WWmBzgTgaZy9fhHSCUcWxrtaXWyQTomkiDvTqSnkA",
  "key27": "5yPdCcDU2nz7R14WwX8gQ6qh4qWLbme1nZUbAUFxa22Xz5sghMmr2PSki1QVyGfCXvVF1RxtVWdQXxxYUXnFwEXu",
  "key28": "3RXEZL2pZHRbnMtTerG43mjaJxcP8HdA1ecU1Kg5Xu5P6RBThzXSFyGqrHAqVCbKDp2QtkSyM1VxkQhtZazXTe9r",
  "key29": "3j11Da5G4fUgjGMZsmg8QbS4R47WCE9HqUZZ4s3JBH1ofiPGQ9WnARNGUgWJzR2N5ko8sWadTajqBzsEKdKc4bmB",
  "key30": "52yP9Yk3pCDzL6fX2MAQDPf8rCV2TwT6PPwf3MjLAwkyF8tcRrcCqh2gUBKZngN3sTetbwJ7SM9zXegUHTa3vADB"
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
