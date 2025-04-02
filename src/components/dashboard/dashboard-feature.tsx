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
    "457ABmv8h4eZYeYkVFwXjFqT2GaMFXMv3WnvLShPUx3ip9h1rwXi6b4ktv7kUVg4dzTUWP8rr4A2jC8922B4caF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "94APeJgKSuWrZtkwXi9NcnyMmarKXEeJZBW3t2Z9NoeKVNPDDE61xYvdXMsLtCk4sFmuybrxtkspGULA7Bn4GU6",
  "key1": "672w8xGHTa8wm92KY1p222cEH983umYjH4sXMQaQKeWTy1BSn4iSbNvuayEJ3Yfdp1Ly3JgytQifDV8tbFqs9jHc",
  "key2": "56Nt2esncowrPCUNQX1zB68KjjEiKaqpwgK3SyMhUHyn1EtckYaaoKNyk8owYCzMpN2pq3JArBh4EgaaaxiZm9T6",
  "key3": "3qkdrVJ16jw7tkAwK9moc1FPajRFb2LZtq1FzYNWasrnczsGRvedsKsZsQp9LqKbPAMGDqZy4AgonQe89E6CrFx7",
  "key4": "6mByt8RSvqQeZv8CDH1roMBqCJ5t2en56hguYSWDxuNrEuM67VLExejrL3VjGTbsi59kQaNx9n8bFcoRfta7rz3",
  "key5": "SQGMTtQWaYezgGH1bBupvxYJAiycXmqd4QtjyKbVyrwzmzqCxf6JFsLHqEdnWFvWe2LcnwuzBLkgxAKsTzEDAfv",
  "key6": "3FvvzCHeKu9UYZMLzvMgZqLEZtBkFrHQRWn2JPsu8L8ov3YmGVZbRKa3LjuuqnrwN15L81om5izU8zago2gBPuj1",
  "key7": "5VoszQNeS7TNfdNNkf9ra8j6M6LPxrDZkRtRXiYhdoc7JfsNgFLgT8iBcUyxsg9UAE9XDkgsi46VmdMLfqavoZbz",
  "key8": "3arVH3pb3zGzznLmH7EMgfA7fFznRfTebv4aexqvnhND6EPZZgdrtGpbhmQKbWqUiNWSkD62piPp342gr3L29GK9",
  "key9": "4kft97fBpwL9BHVFyKWY3zuBzWn3sc6YW5vCtntYqiRBDEJGqfXAGZMYkwwVqJGkDNKXAAyPjAt6n2P4XVJgmdcF",
  "key10": "2bBEt4NbmZ6eJDG9dW9eWJaXGY3vwdg8ZwEQQFhvZWytE64p1pS5qfY5VSDK3gXDrjXv2nTKpa6CQrMFzN1uDPCk",
  "key11": "4mKhuiuBS5VeqPTviWcSVaYKtRUEAp4WkqJaDwy15VUDo6En2JxLLgt4CEda8LFQekzLkkZ5LMNPwWiiYQyvp3g8",
  "key12": "WDFwiKdAXuJ23bX4NpEwDf5B9QL2qLjLRzgaW1b33Df4qYTwMm1Nne2GiwY3p2dYN4YV32HFhge3LrJA4HUqvL3",
  "key13": "2C2zPaoqNmeLwChBBteXxP5KUucsXtERmESamG2Ne8opL1fgkpqbhY2TZPtzdaFGgP3ocJXtL4Dm2yFM1NwadDKr",
  "key14": "4MJJoes2YmZp9kP6z8nMQhRaLavFrUMn6afEdFCxND5NJ1Z3CXfKHoBPhR3G3SQS4YMmZKZhTprya9yX9kBbTEJ5",
  "key15": "CRRfqUWxdVopy2d73CaLCueHxx9itfaowTqddHaSfuq3s4tJKvuG6LD4KgdGdjAY4FhZbr4oWLCYfT5XsMev5cN",
  "key16": "4nNtG4giQy5F3sWwv7v8RX1FVQwCZ3Kp3bsyuc5cyhdzao8FoEs4NyZXjrDyXQDctuEm69cL7jJ7NFfVujgux7FZ",
  "key17": "2KK6cxuLSehTYRuZohaMvspFohfqJHyidGSr66JUChCKvwYby5cNWSwTBGex8kYa42dtkpGv3kaNiSMLm5xz8juK",
  "key18": "4rqfuFcRJ2KNakhdM2kB636rfemdvAQLPP5zbxByww7CfXkgPPcBJKZhd5EUb9uoG6bMzHefgnxLh65isgbWdXhw",
  "key19": "3U24mrzEPmGmuL21vRMNRF7oQnJCQDoPXxMifMCQtF1b5w8s4He6aomYgo5qSY58WaAAUJft2UhyR615BuSU55iz",
  "key20": "5YMLgSSxoNCVbj5GyWPu55nTfvZizHBYWYz7pXbCWjxVAYgPtntXxoB5qx7kRzc4MB4Uwvqnp2C5sqL6NYvFVNwG",
  "key21": "5QT4e4UDzntVpY31YdR3FDVjnkRc7T4MkYRf5wMU8wUwxiCus1v8PiQF6BBTHKv93RXh3UYLPZek2Zp1GucWa515",
  "key22": "rLP25we2mfDWfSRKWTPBUYfb7dTNmFtd5BDxc59fAfQrytj3t6o8WZrkru5br2R9CJ4tzrF7KYN2ADrgZFuzWVV",
  "key23": "54entn48oEELcamfxV3RpzJwCkmoCbsGJe4hEbJH3KagRvP7jyZ2hCnBigDvRyqvnzbXVkW6x4zKANBLWrvJkS9X",
  "key24": "qPWuuf8WGyFkBZC3JkqWcr6C1budM7WCwEanJpmSCtY8mMY94u2sssWMsR1PFq1BXQKKEAdYFFK2G8phSdCVvVi",
  "key25": "vAVzgSSzFDcPNibapy53D2pLk79RPZGto9AxRB3HcUHLcDD61WtADj69GNBnYr7Q6ghPz8spopYgAMmkaeKuAas",
  "key26": "5RYVh6gQbdTchZ6s6hi97nLvkXrB1f6UWRpgEEyXrjKTfTgWo2GGdc7xraFSGHYiGS6isFvaSTZTWc567ehBQKo",
  "key27": "5jfTKbzP8iA1JeqUypqQKag4Lu6BDrqG6SyjTMn2wJYzymCGNzsdvq6vm34ANbFhRTmfekebcfNThJ8TXBQ7boJv",
  "key28": "3k5fQvyYxXfSV1Q4vGkvVns3skhTVpzN7AHmgFkW4xTKQ57QtEvvQPE8Ri4Up9niiZNet4unjw1LnkZHpWZn9YRz"
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
