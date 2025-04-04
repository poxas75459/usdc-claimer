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
    "2BEm4GDzwmotMK871WyH9YDd32iUnqwvdimquxnFMAvg2u5u9i2Kk78r2tPs4qmF1CGpAH5eKfrJCJqZSoaEZJ2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fNkzPxL836PiG9YkZZYf81Vf9mbNwjRbCX3Ddik5ofAUAQHAePcpGK3iowH9EFY4ZC9NsrufiGCqk1KYxKrWQLp",
  "key1": "2qcdRHDD35qGYACgLWVjt6BqTfYsAqmzDtXT9XDeZXLSUgzGqj4qrEt8qRZDh4DHmyMghymQ7dEWngyfjWAifret",
  "key2": "3ydPXmAjxqgmWWWrLmcgbtVhc5PRodgVJmCVE2t4vZ4Qod968dqiVbkfPGxZTyYrEXgzhn725cTauTA1nDhfynVJ",
  "key3": "KhVAQnLx6WTjhwVYTWrHirNHWULAy2nowHyWQ27wZ1spDNksg1jXr9zT11QsyiUTq7xhLc9u2pptuHJKSCk1jw1",
  "key4": "Sh3nRRXX79QMrf4HHA9jeX7hjgUEngy1aey4TwTwFdiagjjVCDQNaGUc76LnqJ55Q7rjZGy2tikjke1fKj67pVW",
  "key5": "57ECSZAADQ4rKe72cN4yoUKadr42vjNHxeuu9gwRFr1ZZqJFrxAn33dS8Bi5aN5W4w3iLWr6JuoQDrfiGpu7HCrx",
  "key6": "yA1vYsJ7e2AyKwG42Xvu9GqMKEVWGH6upLohz5xaHxhKyUaTjJS3Wppecg6rbATHij5vuMmgu9cveRddVW2aoT5",
  "key7": "38pSGKsxWs1MFpWfM9GG5fXJdVYz1HeMwedeQwie4xtYzWeh1czErMAeBVj5u4VkYoxBwNhXp1F9L35qQCv9792x",
  "key8": "5kdXFdAmgwNrS9eRudyKxFjvkenVQTYUi1Mg7KNgYhG6u3ritTcDpjtdqCaTXtJFR4Dt9NycE2AXrLLxwj5pgonK",
  "key9": "3vrPvSBRukGCysvbt1omQg4DzsTMrHTu81JUEZY6XWRUk7C7bpfQqvqufbUCPWbqSCZK8Wax4gTXYJGcpLf15F9d",
  "key10": "2QmbFo1tst8mqjiU6LFgT4LCWYgccY6TMDfUZLupMazC4ouxquE9fq7ThGuRsVtKnPngF6dUxkiWMAo1AcfwrET7",
  "key11": "3DTbWjpzmPS2cFgjbw9jgvYrkZgvzVAXaz1PEfZjNtctBWUdSvn8vqVGDv7MpETjAznmxGLm72zCmj9ThJHt65ru",
  "key12": "5JAqYz9j6p5ihkdyRZunbdJzb7YaPExmDSsSmHfAZXMPTUySbknrEvcm9pKkAnWvkAZujimRCovmZU1447wPSxgh",
  "key13": "2aoFT9NysQysv53GfDpnPAY1Xjdec8SGbJAMZCgFU63NmPfnt3Lk1g3EyXw9CXLGABTVz1RCBETpEkmBicRMeToz",
  "key14": "4o3hjpxcBEZUK5RBdFYNy11kRiZ2emWQThjxGw4uGak1XdztCcG9GfJEvPuciomRxFQbE9S9nVGfq9pfTuV2cexx",
  "key15": "4fehwtzAm9pv3GMqgZNS4jsS6M4MTasfFXingygHqHD2AuCMBBWCYiZqaRwnwMfSHvPre4tFxiDuMePgKNPtD6A3",
  "key16": "23pZUfXatd827nTo6g6239aVC4t3fcHTbVHTZJmbGhHwAEymm6ZVNh7P5xRpUF9THeS18SjDeZpXue3RHsjZq2cv",
  "key17": "3gDs8wNP4UXmdGSQZv9WkeKTYLkeHYZKFvf9MgWHoxnEJdunzaMVuZ7NH87hpuhGJiauCH5bUMt8rab1Hq3sdZhv",
  "key18": "smig4ZdYXKAZcqPxs3TPpPoQMaK5CWeQuQeRmPchv5c4RrJqzaf65wT47xFXaEPPmRPXr7iaJXfoSQ1ubnZ8FBP",
  "key19": "2fGqAo6zzxe5FT7rWe8GwH6CxrS71ghYf5txVMHZ4yHvXbdKngQv7vcX9TiYSDyMW5dQdE1tsQxhtLfKiTysmBQ8",
  "key20": "2CAmsEzXHdsG7MqWfr4EKiMsnfqPPwtGGeQjN3syoJ1pdF9Ng9uwAsjpviFppFFdbfNpNapg61q1zkzLt5uPvr5a",
  "key21": "3BP2ntSt2qn3dteMHBnhtHyhoXe7gSgS9cEQE4bbgfiGF79Ypap9M9Ao53tt228dPP1iAxarHaq6VzrapAVyRdqF",
  "key22": "4zzCBWHzAE9Ni1hbXKZ9JiJKZfuXLmjBxwgFVZLGrv5JZ7JwDyz9mv6JwKyXEGJVhjuJtt3b5eWR7MbBTQaYcT7j",
  "key23": "4mWxFhi8Ecy4avdjTWLa6YZB8zkXXLAzDXWxHRXbhuAySC4MaZzKzdJ3WxYSPzGgEbBGZeUb75YzRnQR859xPSq8",
  "key24": "3ahhenuFheYcogYkQdUjAuVpiewAR3dLxVNTa1mRh96ztUuqR3VdsxqEQ1mXib6pR892YLLix5vBniR5gdUEBKrT",
  "key25": "4Qqjwazs5HUpMXTv27Y5dBNZQECKH6VqtEsfYnFRFupkeaPswviQGTRCPSNpP3utvUp9scvTrZtbTTHUT8jFCyDz",
  "key26": "35nDVfEgcXcPddc12gYEtk1RFChapjjddTb5nKBXosXtFtdNo8u96BXp7asp1RjW47mxkgoKuyVtyguwQzdub62B",
  "key27": "4jfuscjPSmh3ZmACthJzMtqwgpDm72uJd8UDDBAueCUvpnztEGmw3hHaiumcmjA3ziqK8evip28buh6yyqkb9iy7",
  "key28": "4nRf3qUqE4AVLDmQdybuz7pMNtXxtWJkeNqbk53WcjrJaqdWbrAxGVd4tRULSTMU1kiGyduUk11YAfyX3SaWoZR1",
  "key29": "V7qFtzSEuTVFkTNgYN9qFSgbxu1BhogeUrmSwmm3rEbuVTdNKwGki2y7qM9Pz4XFzqc8qgaFaEyq8cMmfTu5aSR",
  "key30": "3jpzNo5nq8XbyPSmKktULHhzkff3wWe2fTsj9jPDAEnf94PHWfjaMQ6rabaVPqNgP9fxR65JPScHb7X4s2A1zxit",
  "key31": "3aMMfEcMPAJrnEkqVgvGcFonWGmoYL97efHMHgLkvm2UaLoLxUXm48dadqZyXWrCnTM7VwZv6BsjdjMsdda5rLeF",
  "key32": "2kKjQnCieBQqKgV2WrJxn2fvgCar3fTK1QTj5xEMhNVDS78L2G2yCo73y8r6kDchvTcxxQjSzcpqYjfRu3jqFAH6"
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
