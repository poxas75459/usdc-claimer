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
    "3sQuB5HWeb9V4qrcsM2TiRPzxjyfasrzGXrwb6Lu875rmYo6fqGRMEFSdhRiPfE2HrudjhtNF9D85iANLhtbwRQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XFfye29Qxd5uQ1HNw5zG8qzbxuP24EKpqSSNkF8GmmaeDhMaKpkRpMFZASCo5sCLBSzLzpkgFXoUB6ooGW2kAf1",
  "key1": "4j4NYdpLjAAvLh43BSrxmPpKm6jSYgFMQ1oGSJz6ECcxiSJxfSCqfdEzMENKa3dE5Scd6j6x6SzaVXuLPbRKBSip",
  "key2": "5czsLLjjqwcUodjqWRQzobUYPREFv9Y6KQNrCVXDdRWV1mw6qTW83J2DCkCy2en7ygsJeE6Dczok5nykn9Yc7BKH",
  "key3": "2ArcJh8AcEECbGfWLfXWmtgvZy3yD9cc4yDqp8pUbP6xiBVTbnG51eXA98EPZzbUDUj5wkV8GwsbfhLG9qUrNDhy",
  "key4": "4h6RkQ3MBNWokY2kX32YqzsdkkLurzwvFk91cmfADAvzrVRFsJdYMawhRA138swHZjQxqgF7VTjEakRoPXj5Hap",
  "key5": "47c59r3eQQjhbehZR4ESfBdm6tpwfV1SCWwLtLinj1PYjwE6zDVvhiGPqeDjfCdj6yMEbpvJ7Dec8pCbEgca86SW",
  "key6": "SMWQdg2tVpLrrxcSJa4hnGpiCg6pyNvFDwr4CzQU45qYHggMCLU43Z6ppwCwpzrKuF5hTm6ne3e68JUV2NyvYi8",
  "key7": "5TxJ9a1syvTwRwero9yD5hS9PEXadTLCkYdgAjgaPBhipwJLEMTwrQGAjb2zPtxkLtF8mZUFRaWwPwHRc1tmw3gv",
  "key8": "BHaFKyuQNZV9aw17K2kRcVL9NYtBEHh2ofejNHuzyuH6Dst7n1usyb28ddUeSW1xhSzmgdVcv1v3mSDRM6ToJE1",
  "key9": "48szkga7hTVh6LsYuX9aqdyTbveD4zyoQEKkzeN5oZx2tqQQAid1hTDsviQRBAsDYjQAaK8kVEE3iA52XT7mycz9",
  "key10": "JYDJB3wpEknQL3hkjqkM7FzKEaLGZDGCP5DEwHvELzinYam66GxxUg1bpVQj8CNWup7qdeVdU2CkTskUPhJztt1",
  "key11": "yvbdNahMZLuPqBHoNvd2FmkA7LbEC37xXPNy4W8C9UaAxRk3Ho5hrpEe2nGLbKxyWFMnmqjWYi3hv3LLsegRPtg",
  "key12": "Pr3mFHmz1dZZCdFsWwJfiw1XLe4th7MP9Vw6SCn7YHGMG3hmBPWF34FFnyV2y83nzWgaV3A3n8arjohT6fHcsGP",
  "key13": "5SHF9cezLq86gYnMDWW56MZMnSiJ3FdnFBSivDYhfwD9Yhz23gX1vN33xWEVae464uRirfXJpdyQz9dqZdi8qYKS",
  "key14": "3aM2bn2joWJLeTEApZ8SFoBw6ThEV4LURBfcnKce9NopaFc5B8cgFExGr3YnyodMfRWdG8zL1DCzEhZdNy88KosG",
  "key15": "5SDBkjVNw1QAfxELaSceTWauwgBur1Mt4CSa1pcAxjBNaAStmTw3vnFVTd4DYSMf9h24at9Sn4BZHZGLyaJA96mZ",
  "key16": "Z5DzCsYYwdk2WuYqhE3qvt1xa26nN4aq72eUMcLkHZiYYeCJh7dEvUQHfw4nqUDjWEQ2T9vTEaBBeShvUMCEQUp",
  "key17": "6ScXpvUt55ZBrKLJ96ddeTdHgmexCobzn8AyAdxf6xx2HADRN52U7UPGBXefyiWKbn3Kcqo3NQZTtHFCmLMQXPb",
  "key18": "5yYU7rvF26RkcqLmSnb3KwXEWaJyrGmFSdou3DrRzsvKH3bbfuWa32FeEqiqVEiGmm8VTp2A6HPCdrGrZTc9h4x3",
  "key19": "4gmsAX6Q15F2f2srp25tZMPm5hPpiJHdGua43rfkysxtCq5Wggj1wRXjtkU82NyiFCrseREjzYHwx76s1QJBcbMA",
  "key20": "3eSH3c4x5uYtzmfSEzyxZgqw5xyhkwMbxd7cDeh5QsWegU2HU6ygTWVKp8x3JhF8EjenSapPpymHkLS7QmWt3of8",
  "key21": "2sZSWyCDTQdany4vP8CtUwWTxoyxtfEwYbbBRYaVygnrG8YD47UpzL3QoDq2VZeYZ9f7kV759jRiMd38d7FqxpY9",
  "key22": "4Dwsxy2aJpqLu9G2CnAE5ZdRaCZvFVhpmEGQfU7WNrCGPSV342Kr1SPMmGAJwb3SrZfKEz7NLFQn8WojsBYb4g23",
  "key23": "2uMZhWEYfJzeFbUseR9xk6j6rW99NA6vQ3iEEAqmv58nQzCdsrFSrAz1N8iQQNvCbuvAVctjGzyFc9Yo7Bx4kwmH",
  "key24": "5kEM7aaW5jLB4x9dBZ2pYQU8z93DFY4Ni2nwPqMq7nt9T8T2t2eZAY9QrqF6ZMXxafLqpSay4AHzxT5GZsmdTXPe",
  "key25": "4zkA4mzegxg3kMvDFi1gtR9xLrwqgv2UfWJ54R1WbjQhhsP9s1YddtW79w9kJXrQriYCA8Qnve9fYk6kDKAET5FU",
  "key26": "4r7gQRuQ3HdSpWYgW64Qg1NHoiboJgmFoWrL6MUhY3J6cKRZLEWgS4nsuAuMYJB3aXdudD1miUfypgRzrfxBxYuS",
  "key27": "53sZtq9LmtjsNgqZLC2A6gcTPemZPdFw1ccZbipXcnKZF8Z4SbkQo1zak2CM4Z8S4cMzbbmheEvgXbqjrZnopwQt",
  "key28": "5CgCSKVDwMiVntmzJqBhEPuwFHkQVxH52qmTxPYKTEA2sNfELXqhJkwSrwnEMcYSkX2dxcPqhUgQSZZyNUsmfMeR",
  "key29": "5BQwmopP3E2WLWnVnFMuXHgFet9xvetL8LswcZg9NgUqhjSCoCpQqFJ99H1WbjtTYqq1YJPfwBAt9hZNqUAYcQFZ",
  "key30": "3v9QVh94XkmQm5Jpp9pcX57sNQV5pLwTrXLyhMMsSEg8mL47WjGSV4kdp6jZNVu5wTt4GGGzzgEikh5MH3pPE6N6",
  "key31": "4yznHkND53jKozJCQnSpvkK7XyAqVMq6XuSyxAKwfbzgwpij36URhdbu4D5bWvuKchrDZcYt16Nu9UXY1EWHu7fP",
  "key32": "5D2T86qBfSEqpCeuVBBVs8Q5KZGmafnn4NbaRDPJuzUckzHh5feJUakHHi1UZsvyxPRRtCnCb3SiRPh6rWbw4c65",
  "key33": "3Qpj3gbQk8n9dRe7KekEpboETqdBQ87c4DAGVLQXXam9S2EzpdAkJYQPymsENpzahpNWsn2cymha2FsuqKJnrBWi"
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
