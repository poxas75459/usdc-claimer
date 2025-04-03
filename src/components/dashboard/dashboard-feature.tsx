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
    "1F6F8gJ99LTAqZy7GhGtFWjTT54xoaUafk1MHNurxja6NXJSGFe39EefNvgJjaoNoP8azxwLKYA1jCBt7SFEZs9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32U5DfH7vy1PZbVB8gXSDCRue5TnyBZebkQc5fDHsw95bnsKmnUCf5JGXBAdRcZDmDKduHjJqFSdsbjTN5zwKcNF",
  "key1": "3MzcLUrh25yR5DsmKg6vTRAkxra2tCkZqhevN8wBCcpN9JRAHWoA1AVNKSz7BnVuYV2RxYd9xFMsXn49cV1mUQXW",
  "key2": "3cFo2J3K5HQdzRYA5dVx6CBHL5u1GbEB9s1Dj5QME4VnC1rfUfMWQv9Sad9d1th8azxFwp1wjJNcYCJ1xaXhuVzo",
  "key3": "mNEs8mkML6FYH1JSxG4f7SJp51tZXmMs8XTXKRtoJV1KcPETwDsxqki4Kr7krVJZnsFxgGEzPvYMtCwThaUTvhH",
  "key4": "3fmzgSt3dQ4KhR67N3MnmoAQGXpU2XQPLYJRPzmDTMcKF1P4EW7dUrHGnUzkkpYanzyKQf5JbJ4KiWUDKiPVYRLj",
  "key5": "5doWXRwrX4QaAnhJiHjNxGMi5sH8UdmH6wjSyXYWwWziPSRTEH9fwtp93N2ZQLQ5A9tAyunRXMB9MC44TZiWNQLB",
  "key6": "4V8FYszkfyqcp7EpTCkSTpZW81egHHuCufNzt2xCy2pN3kFbwvbxp2BggVMfah7yoTGKYe7CVbhdDbam8SPnoQWg",
  "key7": "3FysuCtVNJSM5wQ9mHzzLmdnkdPSpBBm1XLTHwPQwa1Gcvw94n3N89tAENsKRYw5a3eUTAq5euskEtw7yp3Zd6UM",
  "key8": "4hP5ABCgKUXwU4vhGDeLu1H7yqwhSM8NuQsozwPkgNH1N8YWRJW7WWscK5WpohjRShvRHpbvnfPM1R3zj1GCcaD3",
  "key9": "5nvDPqHMpXEUZ6N8FYzqEaH5sXSnuis4KT66nbEs5ZitMd4WRqC15MWW1PDv9rbLeE9zLXbBQZEFeYGN6wYthqPC",
  "key10": "5JygWw9gEQMrBfjHt3T9gRGaQuvHv8t4to8y4wATRH62qjTZN158wNGR5XoK7L8JmxSM6AFqDGFHT8iF5rTbAm3",
  "key11": "5RLjQdQdCd7tGi9zw6mPixyoWHFoFCUNjX7Vsfpf2Ugzf6cUyhzCYwHGfLqkcenrjyx23ch5AMfuK4LuBydNUcBK",
  "key12": "3qJ7Km87pMHftdH5nc53VonX29hFQWwMgNyZ6uccG5HnUeaNVfDpQ9sT9iPzPHCDHoo47BuYpACQyBzJjcWsYEym",
  "key13": "x2cJ6gKqCNktsjAwvUkfqSyYfcWveoPHDJVqzDySUiwSBGrQqLB7e8sAMd2kMsyLEfF5b2QLkkPvMUQh9pCZWDT",
  "key14": "4HTsunWWoWcnXgZZJ1d8Z8RyTB96KWkfbGc2H9nQP5h2i3GotomyUz7uNcsXR9q3HhRb7w25jXPFqNNBbe8iJfSw",
  "key15": "5fqacCZRdrYGcRFSQyowzUZkb5EM1ez3wTLU5TsXzabGs8JLX8SgHvddKDChGJfhYZdyvixjM3bu9EYT6nzN7mTS",
  "key16": "5KLbxB3Hkxb3CHdNGZ7tEmwR62nSiELoYVeqvAQv8t78ZjqvjfPtcC6AUjFCPg7R5SjqbFkmQqYyFBUs38yC1sM",
  "key17": "3aZrc4MMEQkHFa5zxdGLeNj7h72PDnQerLauvXgujCUnxch5cyMWX7hPGUiUC7JzznQhfEyAw3HrZAG3eZ8hGpkP",
  "key18": "3QgGTqyfLCinuqDieM2oLwciz7ZemjyfaMNTHzVpoieyYtzgTE6dn3aXVw6NKuukhjYPgLkgNSi1Q14hMV3gARUD",
  "key19": "eVvMWsuQm4tty5KKDQhhWzD1iyZcRWbuoi8vnK25zj5fxhrZM8Ut5aoFKo7MUTkpEMpV3WokL7iWETaA4ifm7td",
  "key20": "5kRxQXp7wXPx4veWcjMnZH3oTXpEFD8ozgcWUAJyK2pjdEdzMs3XVvuHu5JYWo5ffmQqkoKFW2m3rEm4Q3CysQD7",
  "key21": "2p4xxX8LmUUSSFwyMN3s25PDNH9DD8qSfPzBf72AxVyxhwHDWoKZTbTkgwGbYjjTg6D4HGAYTfbpMB4zPbdWjawF",
  "key22": "2BKPYysh5CacyQdMF48FV3uSo5HGuL7wgDCaS1Ztg2hTTm1ZB2d5c3DWmz2CpGgoRsc5ZnMWhm6gnyPsTym8APHb",
  "key23": "63q7gMDseRzyB9FtgVkvmYkb1LtWxgKPz3QtnQwPKjQbSKLK3qGtg3b3bchnodFApwoqhBVjkv2EDea4CaJW3Sp5",
  "key24": "36F9wyCjMySkLenGsk9Z8oLiEfSZAhcvfgBCgc4X2f3NA6AwQhA2nCDawhn91AgRgeooW9Vbg9XVA166ezs8DAgr"
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
