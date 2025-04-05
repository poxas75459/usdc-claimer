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
    "53PLAdSLNaDm9CA21NEWEzYG9Eq4Gq9jW6iLhZDPUFnvgEbnRDNgoKTY4FZaDKhKiZqPm9oxAFxBRmrqdS1sTzDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eLxaJTfpu2kb5mrEdFSCYQ44NmnMSXEJUccdVRQaj2TCek74ZVZWQYb9KPCd2tKTf65qnewgfY4HuLzmShytEE8",
  "key1": "zTbHVsujZ91LZHzdpTo9MPuikAKtWTBBXNT7PPwm1S8YNjkmVU2HQKWbDDez6fBtuCNCKxYgpd2aTV2LFjxZ63y",
  "key2": "2CFxJ3GS1NfZ2T3wbrPCRLfLQZyBNsYSZj1mxT3kjEgfwCZKbqgD66oFPgPCKZCpDuCwiLe1iUaceNbb6rLeETJ",
  "key3": "2hZ2t2wUeDYtpMdbCQAUG4ihUHc1ZV4dmVZMn78VRoUkP4aLzpZRUYk8YsDj8nYmfJW9jrUkFvBsJbiHXnH874Lr",
  "key4": "4i1vkHxphpVyX43ccVxjMaMtuFrcBKxMEwmSN2RppqWKFbrvDBRDyfcXYLdWnUFq4aG6HkpBRhPc2o3VYUak5NnP",
  "key5": "up5bsXWc7VKUfcoEArRQ7VuTvU5uUesNGfe8rGKSfEY1cb57yBF7bCYesT5TtYRbWg9bEbb3thC1EfHXg1RmRfQ",
  "key6": "66URjnQ2PsmdC4MF49fH6dLDEzYyNBkhDeSW16zncNmivW72gWDbbHwFicLSWt7HYRPeFMABG7wXB7AKRAQhkjTz",
  "key7": "2bmAnVa7kMg8XKkhNhzb8hGDdN3kzY5ivVRZhW9BuU5tCX2DjvJQkJrXhhQWXaVsuSeMPjfNALkpyuXo4pc2TnRb",
  "key8": "3t2hj48vVJaY5F8RHdzhSgfYLUHnAmdmDM1SRqChAXCqUWUipBmXqaKMXRsbuqibgX8EH8TLrvVmd4NTWig888w9",
  "key9": "3jFmiLNxJrb1YpF7XcBgFM6Gi39iT1pRkCR4y1tbW5mzFyE2rbSUpdFKyMb1BxojcMZUpY6p4VpEGP5JyC8z9huu",
  "key10": "4eSWtDkaZMEaUUyoLgHdpJ8k6ESabWtgRy5RYqUtWREochb14DYze7PuL3fDA8rWxSC67UVvW2RUENZXrrTQejJx",
  "key11": "KXsZrCCSvdsUPmkswiX3xJDCpsDnyj2uaCoGiyWqBnHNEx4ZQm13yYb9977g4jwxS4zzrzUhZpLiQCJEA48mN8k",
  "key12": "5EpGDgTQnrwFXCgy9ZFZjRpfr3yAr9wJwNCFgY2YEg6mndgGkWuFw6i5SBLYg5X68BeQ4dezv8yMfYKpqUqMPAAk",
  "key13": "3AQ3V6dZpBMGTScUa4ye4oghrEyXARooNrocQMkcsJ8fuHdmPUPjQWZstkcSmkSNWdxLvuU1V9qetNfeZufTxDXg",
  "key14": "5KbMmM4ipeG4pkuNzUFh84kqWPFZKhHr2uKFkA6paVguT3CqGJPQMrKMP1xu43NsDrSmBxhGW1rYTmfc7DuoZ7wS",
  "key15": "d6knQPyBBq8petQtsW5TUCs1ipbEJiwfbf5MbnkzcVU4XtEo9w5oFuhaYDhWWMfo6XwJjqEh6hPh4R6v6GMxH4F",
  "key16": "53Viwin1cJEEkcSVhFB4MGMjWHRiR7Mwctv68LNL7v6dkWsfmFYekEiRTEoz4hCkAS99f8H8AUTNbU3Cq4PxsHUK",
  "key17": "2xijb7eWLVUTU5knTybD1yGHK54wuWXccKmNBHH7NjcetPscoyjA8dFLBXBJsYnJVdzYf6ABExMuthxzwzvqgH5y",
  "key18": "226xx1J9dX3hbT1Unq2xuQH1xrMFp7kLXGNorP3MqgBUNJtWwyweQRcm4kxvJ4KaCSBen2NqpkiuMBMAE19SheaR",
  "key19": "5eUVfJeDpujMLbcdVSTdsnpkmNiT3S9dUYaGPhwGgmAvfjbd6zt6PM3GHeDSAEr4xiDocEt3bTHa2yQZvtdPhSiZ",
  "key20": "4chEF1cyBsSinCubc6pdmeK23wi87o9hqZxWJJa3SbiUgWsyfQx8nEkiwuFBorinCuzzxoSJJ3FegiAnNmg54gW5",
  "key21": "29oFJNsujpfYSAvoDCpLFNsNj1KVb1rfnoHkM1dD5UeTKttTWLWPDyNBdY6uVwQebY9XCteugDhDDdcBpw9X6cJ5",
  "key22": "2vfN1zgTBv9WR1YgTR3yuvkBX2Ygqxtr3THD3fWeuribC6VRAa5DqPfPXBqKDy2TwmfZMfETq4ZCtkHGrz5K5HrN",
  "key23": "3eSxEZDktJd35khYLTFe7wnxT94XNE7W8N4CPNNAenUuJbehN6j1JqscaAJY756te8ztNZenD8JPqaGu4dxDXpZb",
  "key24": "3Rv2XohJasuwxf793Bg9xUQWCr4CJHXhtpknREZmVypBUEjP1GKetEQVXQj5yrV3ykq5qhGdhXtXkJZ4jacLtFuY",
  "key25": "2h7x3y8p1LYFG9jM314RfPHvjGp6JqEfnxkERnr2fjxSq5GmBZZXYxf4B6Cq8ME9piRpyUDMx4ULTNTKNmmeGhi4",
  "key26": "67L9VMF91ohSAMRax4SPztq7qUDLQqkJNwSpZsttPH9FtMrWpr9ihCytsxNzkoph9z3EWSZkySd2ahiUPQ79pLgY",
  "key27": "4GtTbNqN3SCXEX8VgccXQYZSUTVm18AJjTJgzLgs1JK26Rc2oRVx1Y1TDNw6tRTMcafdkfNwR533n3FHe9cM9ama"
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
