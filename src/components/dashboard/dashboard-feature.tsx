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
    "wfDzvE7C3oPKt5sN9YLsTXNAwoutWKSYUg6FtcTzTjtTZxaDUPvWB1V1SAawDRQoNVn4S9UjL9vpA8zthYHMfMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x4NrCwkJDECRzHCQiTfnRoFqqnx6G6dca6nQLYXXL6DmELvCnRCRC5sAfb5pc69FtjyW1UkFUUHAgkyZBfTFaAu",
  "key1": "4B64MsHTDzzDyxncSpJvCuYHQckdWytChYSn7XTK7UnwubzEexYM8KPoMEwbEEDPML6CQhPtayhFG8prWtgajU8L",
  "key2": "2rXmjvYDLyQ2Sn6wC4oGJ4odmcP5NzrFztdrGYpGdoCucnWGf6GsovoGZJtXAjJcqhG1pBbP2CubxYPGhbYmHtiX",
  "key3": "4KXY7ZQmr4QD8em5z3ZUQZBHkWc11XjRfwttmbPtAAapBhRJpMsFWxvd483QCVvTxwbxbsrSrZvQvtgx8qsmGcdr",
  "key4": "3Shcs7GmpdWMqAonHjT534htPagKbTfGoUuaFgHMGURDcfoBbqMfig4vRfHcpf7VDeDK8JnCK8TuAZLuCHb65toC",
  "key5": "4mBnunYbLou72tjSSe1TRjVpSn5jL4HMCyBByRbGZ2kfqX7rjYNx8gos5dX4QFCG5QhpYSxCLi1T8AkY7bcWDZeq",
  "key6": "g5zAwSAWZv6n7i4sQ6e4SXTFLK6cwwf5nzccviC3zi3629jBy83qz1NDS4pUkc6mpWfz4jAKRm7rtu6HvtChQKj",
  "key7": "23Nx1uSww7gSfKgoG6ZHg3U5u9HdSWirGji5Fd8tibxVhmcC4uJ6sowQpL7Kys2DyKwSfGuhq5PGCHScoiME1wVQ",
  "key8": "4UriWbVfCMLQBcqGK3arHZB4nXhCNvzNokjmotc84pxks5rek5ABN6QAhYSsraHfw5fCSJdvZkNdFGTCd4ifNjdZ",
  "key9": "2svXxWnjp4GXEYVNFYQdgY2ugnrxtrSb9KaoG5g7emeAVsRZPmVx5km7HqEAH9UwaWAkP8Xb26EiSXoExnKW5ySP",
  "key10": "5cK2u23X77D138q97PujrCoGBEkyounpV7j1X5Mh9PH9v6xd4eGYhsXmEBZx52KH64pNSGyCGmxXDC6sSQP3zMQp",
  "key11": "cYva4HAwMsUavtfNphTK1LtJWKA6Wm23PLSSEzW7WoB6BrizN5n8FdK3uruURBNYojRK6UH57e51Y4zufh8RGT7",
  "key12": "5qGefE7ACtMMoeUg2CVJ8vQxap8TD6LsrJC14C2fGRxxsUoArCcMFqaZC3H1tJNx2V5h8oFGkNpSWca8X7kT7ZGz",
  "key13": "KoihGswKQfgr1HxmsbE5GEejgGE7AtMrqZGE7nH6dRBMvEqjiUHgpXvefgLfXbkXkCoU5s7dUx9hkQZwMCeRvvy",
  "key14": "3AVQazhkX3c2nVca4KCpockD5QnHptbCWwHoJHwkdZDwwtgcZcQ2TnJXEpF7Bh3cgc6hr82o3b1ryc55Lh7W8BSj",
  "key15": "3fw32nLp9AXdst6KKEcaNV8ZLkDoLsJhJmrzF3xB4ucriitTHKXJGiQL4F7Yju5ypQSoXWcXBzt4uyRYB78hXvNp",
  "key16": "i5S6ELZ6nmK8oLtsKwLE5saGaZe6GTzg7ZuQDDtM76oZozcvwEyxBKxM8A7Y1x41t15Ab7zSWL5jT6yVtd8JJCK",
  "key17": "f2hQcueWk97RrcYewS9TRG9W8tAg2yuatqdgaWGAeGzPPKKUsdm6r5RHqdN1eeiCVXqfUWTXJ9yajbsaEHmftdH",
  "key18": "4jBVKPfvP2rk3gZ1sjJATQUDjBCqpLuUTppgp34tVPY2Recm9yX8XEQaiBhe4iWyvWsd1NjnfbcS5PKqirkEpeeA",
  "key19": "25fhD8H67hwjevDS8cpBanm92Ax7o4RBVxu4H3tmv3kAsTCnXMVwHTe33WBFWyakvCwNnFNuP39HnfA1qiqnKHVX",
  "key20": "28kBeaM2Lzbj82R7k6GLk1oJvvonRzadyLbonPwvuWD7LLiPud5Q6rwUNSc4DtAPbdbPCUzTemYvnC27LuD2bDqR",
  "key21": "41DwhJ4h8Nbh3BcYwiwLuZ435Gy9jePMmRr6Fa2n8iALvM8u2x78qeeSkLy98Ru1wkatUuozhKEPfQtFPJfAMSc9",
  "key22": "5W2uPmA2LByMmtdAXj3YBNEHkBwzChbmHYwkEezRSrust4mpWvDxgZbnDna53Nk7qtuYvbJvP6e1kWFLsFymxBDX",
  "key23": "5y5uakVFtNooW3P2SprLKA5SYFzhsU19KYm3ecxfNzzyRhb2Dt33G6WUTLq9wEtrQurRRrjYCjZnuxYU8HgMpvZy",
  "key24": "4GsEk65kMiJ1tcsTpEWjk3MTr9N653hixDJjDVgLtSYki7m7nBZtrf2xJHojb6sRY3mYg3zBMHj8V1MXmZN69wM5",
  "key25": "2T3ATwV4kHCaSEXbTpFv2DudCY1qYAR1YdcCJGxg7dxAjyqvBJc6jg4qAZFPs3NGx2HkdsvALjueauBrvHiMFEYq",
  "key26": "2mYcmwVRrxGsSuxdfwmRzfCMgjwiSyBBpv2sdCf1gxZSdKiQNUjJsW6EXVA11LfntYhG59B5E6uQjHhYRyyYz1RM",
  "key27": "56tWCxWeo5otrtLqfFtFdGbcvq8oB94Pt2c5sRS1yWhLTaNdRJ6EAdJiQU4hk3zTRH92p4AssX9FzPH1tVbDwAVC"
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
