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
    "WU6cVx9AFcfaCEoKqTLqoCKztygfgKT7qXDMnLdQ4CKQ5UBVA5ExuwywzpsQKSAdBRCdHcyrzRsAipVMviEW2rZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yWxPfw13iAuGK7xdof1tcVY17kSxzYtwqPQExQCqu25LK4uebM3TWy1p1hdzpKQawj5paveGsnwVUid23Grua1c",
  "key1": "5Gpa3X61tCrLv3NLgWnw2X9G7vXdFnNKs4mYRVKXx4LPF7oGZsCgQKrp7VT6ANG5sBkPWi5mp5BgpBw9k9JzWxdy",
  "key2": "zBuF69nb1Uzm82YQ61HJyhyC518nY9Zwp6UeiCj6VkrRb8XU3i3BNU6kt8Ynj4ztkb1h14URrvoMSezyhdnQvcC",
  "key3": "ErbPvFVrNq9D2yC7F5coH4XAxSsDitc83DX1nDp8Ss1TQqooZ3SUzR1pk4RK6dso49vXfnrnbC7gUS4iQGWH1Ss",
  "key4": "62R6MGvfmU4ZNWERLetCd9pQXKkKb5FF3xUvTi1NgoETGHoW6ZbNpJVGfV59YXiQZ2Tzg2ZM7s9H27jbbpUyAf3n",
  "key5": "9uyjvR1AvwvfEc29FFcoQ3reTtCmijd6K1WnwZvBphWDPxsBsq1PMUrjDTiEh8i79Sg9CxCL6263fbX85QeUupR",
  "key6": "5KgFu42tTz37uL36oebdjKio8amgqwk5bPqtpe5NTdPZVJcaaey9gdQ66y915T4w5gH1nShXTjKhoiypxSkCZ4jB",
  "key7": "44NAPihENvBuZDYzEqNerc8xwecM1HpThUCjnAdb74ePsYtH9Z3xG6VC4VQVdCZbkvS4ggiQLXay2Q4kATFFnY9d",
  "key8": "3FBowFj2J1pHd2F8FoewkJ24mACjodoW5qE1aQZhH3w3aqvRK7KAqjbSjF78ocPm15vqyfMazPYPT5RtvwaRGGEw",
  "key9": "3JdcguaCCuozwvWbvWgHYde1nchHovdC8zXHoEy2me21dTXpPUEYyN95LyT8Ly4k57G6DVHBo3PoCEANKhYWYf1a",
  "key10": "4bRmxMK2qVCJi1pdwi8Ha27527sd9eyG9TGVXMAe9Zvpf85dfLLTD4cW3ina4uMSzSpttSFQ3fKcC5w97meTSZ9d",
  "key11": "33cJaZ5LeZH1B87bw53kUs6N5fvjkVRw6fc7vQ45BFQi3FxNUmbzFrbTsNmid7h8cS3QjaJjAgQa9SthvQBfJbCa",
  "key12": "5EtYBASKRqiApUcDG6YNzu2KggDTAPiCY2i4arwyQjmnFCS8Z9PTH7tGUy6ubnKKBF2Nk3RiCBArNbdVDDPyUwy4",
  "key13": "4imDGEqea5VH3WAau27ZrYbN6WQMCdSAjKmcF67dGW5s8GJrtQDhjNdqNiyJGRKdwJVnR4PKfF9h4FWKLGozkp3s",
  "key14": "3tbM7VejHvQJESMXL3HR7r51TRgW6gbXAyU6opeWAJwFqNxiXwBB3FFSdNj2q8kCHhkaWAsiMJCw754MRL7tHfb7",
  "key15": "5X8thDPFzMxiDRVgtisnLqy7GWfegfVdr8HbAitSdDLt27VvddnuuaxrAb867oQQ2xYTZ9PefJ4qj6FV9c7smKpK",
  "key16": "347BsQMUFg28Mj9hSqNLxG8ZSGA3udwJMmNVyBLgnsL7eMY29tUhuaC4YG3w1gEkgApYA5GvMtkNnr3Q5HjacEc3",
  "key17": "7k7q99Ty9Mzvg5vZRJuMaTfHqFbgaSqiRPQ5oPJumF8eUw8SPaGXavyZSmLkn6ksohZtcoXFFPyNdj4AKQhhEJz",
  "key18": "4Us16nHgC1n75DP7uMRPsV8yrRBytA8FaFTEgg8msKmE5cVNwMtGHh4EQpPWv54VQnkzXX8u2NAgt7ECaYxaGRSt",
  "key19": "65NtNtngDg4zLKycH2Z4sqcohWQ7ow8DpvXLnV7ZGNeaaes6MwW8rU5aCpPMsiZCAE6663uGHoNnzDTKESMvC7Mm",
  "key20": "5BR1NRJPm3PmhkkBVzKLKY5TiM4qqD936w38FPfahZwJhxxWGtHem9QZ4gF4EtuZiRCVaPq2rgjLuCu1BG3KFo9u",
  "key21": "4URNcyfeRuhFEPUqidUphb8JpAG3SD1jabanfuS2xrj41dWnMQ4xHWArDvLrz4WM4K2fLf3zr3vF9WT6vdCoR7Pb",
  "key22": "4Hh9iJJmDBKGoACryztp6gfPJvrRwe4FmmNyDKCjY9g552uq1zjrHMjFwhketDpXWT725Mk1wcLtY5qpKqLE92rd",
  "key23": "3Q2AEQoANrHU5PkLUmWbM3Q3CY9sFbr1cEVJ2wpyhZZzumYE1wx5kPm5dfF2LwgQvuhYYfeW7d3UEXP7KXr6JQb3",
  "key24": "5USj59HJvu7vfYNV2Ef7nDZVGQDibHWpg9JvHriF52b4uBSFHVHhp3bgWhneW8o64wgGLfbGUQvr3RWaE3egRwUy"
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
