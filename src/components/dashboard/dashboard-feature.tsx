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
    "P2FnnDJCryRDgKm2YMghfB7G3Mxecthw7hKCyZjSRQ6ZrojRXxapDMEtuKne8CW7uwmBi3uHT1GWfbo1XzE48Wj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x4XytA6GfoHxYGNaCKfKzVyAFQR1Ypv7BMExcA95AcFdjpSZwaMxtreRzrrR5C5Etdj1CRT4o48xrbKTMHsX5kP",
  "key1": "4DLT5q4HcaC1ccR7tKAdQbTLvQqwExj8RXLRYJfyvX5ZSf6p3H5RJzgQUaENcF3ihTLkvRAY8FtydvkJ7EjHA9Hk",
  "key2": "4kESpLQjLY1i7jrmPNWLG5Hn9zVdQXoT5hUbSHMZhspZxVvwXfjBn9nBzUK2g2ZN3UPeK3L49T3v8bc6FQg5JVBr",
  "key3": "4RVTq9noBcyvCMdYdLMhBkfm1kxhVFN4EXfZuT9sbSt6Wy511Tp2moaCW7qQEZ17qkJJVmfYVRhr95Rjp85tJ6vU",
  "key4": "hZ4XzFmy9oxc7uTVCMCdphGsA843KZuq9QoExfGr6m5GUZP6Nb3CgYvCBDQTn3MSbQoeVNJVSdaK9zju6JiKNkz",
  "key5": "4mWYrKBh8Kz1Cg7cVcrRnf7dgbTWU1vTMTq3pZkwXUYb4HWCNddqmVeHzQBbS8cSVAMSmUBVCpJ3ZpfzCueajPht",
  "key6": "292beNxhwzEeEr8Niq2BWVxF6j4s4NLXUt6thsNemMwVb13USJYAHFjEUTZdWTdZJDPstTyZwPFdua5doCc7y76C",
  "key7": "4ucDtQ6ZuarbcwNSnrdP8vGtcAMd2NU7TtHAW3PLvJdEAeeUuypvrRXcGqL1NW9UdPDp2GCjknWrtvtuEw5WVUwU",
  "key8": "2T8TMbrPPjQdxgsouRidsJGK12sGau4iTxX7PrhRx79VZAvhKk42n7fRZw1VpWWfEJTFkDen2qxddhxcnzj2JaHA",
  "key9": "2j2TVJYdiKEBK1kgL6ahg5v5bUh3drUmH6snb4SCCg3Kjc1JWZFr4gTny4tpt3yVNjpRYxyzvKUtQm4fhqKRPKK6",
  "key10": "27Z2YEf2Y5j2KKa2sd6HWfmriY98u5am1m9KnqdpYpL8H8GrNDkfrsFuJYzL65RUMBM539HfER2zUwLsuo3E2PBN",
  "key11": "zW233fh2m56negaC7e3AukDMATgMp4yt2TB6CpYRq7tugnfgZuKxr4ebdY1LCJJ9u4gJpVsVU3XrfhfbvMZZbmh",
  "key12": "4d2JDvf35cVpvANFyz38ZStJzAJEDeaRAMuPr9FpSrXH3Jh7BF13r28BcxyiD6arAkxnZ7uNiXbHC1M5ADBcaxpz",
  "key13": "63ZidLvGjjYXWzex4DG4Khhq5f2BcZqgaY26AoUyFMBxbawERNubi1BEDEztVjtsyAK9WshLSzReTJm9JknWu3Ug",
  "key14": "4Hwt1rHLrX6VSrmW39vNQKbjHRzfY4A91o7cJidfciQttercGcBZUjfcuPGVfYg6bDQ8H8B8T2QicoPQxv7ASU2P",
  "key15": "2VCav8iq7FvmhtYqRwRLkAQB6TsYeNvfj4B8DCThwGxP7Ek4TJbSYiEXi6MfQGnTf1ssZZrZSnD2346boq8SLPih",
  "key16": "5t1Pa5ApquHc1PbqecLDT4v7DXxXU1AvuwTLCapf7fQDDdrzpiPGnpRFckmeatJ5h5PURVf68bd4Ub719HXSJih5",
  "key17": "EvdgsnY3qaJqU3fhN7LtFYUTZpizN8RGVHYpJZpGaG2wpKVixHFq5BkWh3myD4udc8b6CmazqMUNfDgqMvVCpx4",
  "key18": "5NzwTnfPWZRm92ii5aaAgPVqdEkhM3HjNt73pQpXG6S4WrUcML38Vypng4iVMrWhkNMgCD1i4qNzQAc8h5yyGhz6",
  "key19": "3PznKM4xn17or9sSkxKpeWe1VyTJHa9KWDT47KEZ8WygzpHEMLQUoZiTJBQ86q6d6g1jQT75JHKZ5cmUdHaKVUsE",
  "key20": "4FK4AmoNetsQjFuCrL7nHPsHVgUwbuggAiAWXgjfnpTDgnwABYHEkYFpSB57157VjWua1Jg8P3e7k73mTbLvqfa3",
  "key21": "9DDsxkCmwj3VZPqmidEjFMiQD3vY72MbkoLeVzNhsr26wj9EKmzAA3noajQJWDgRTTJxj3LVysWioR2noKpGkQ7",
  "key22": "DKTVS7dk8XVJAvaf2yTTjUina2yYcZPLrJ81ebx76YzNBz4gCSR6tcCwc1eiWudPDrXudmHZWf84FhwP8KALYHt",
  "key23": "3zmSJJ19ZR7sBvhCdJQyokoCHjrPen3hhhvpmDD64NKcUE6agZ31t9MVzjgKdm1JrUWsfb6xFT4CZnkZwJaWepZU",
  "key24": "27EmJ4QiRFBDu4R9C362eC6YLMJ3SRjGYq5Ui8LfX29QkTM267eGpdkpf3U2dp8vbYrDDYncbDTWUrZGLBXJRhsN",
  "key25": "2gPpxYoWJVJA8zMpCC7iACw3vPQ4N2MUwGom7bufWueAHgcjrjgV6M7tREBGX9weHE4pkP8wse48hKJzpBTJVMjB",
  "key26": "244BtpK8wCSKJ7AWwnaKFuA2u4MEKRQecbdSCJhJ26TLuq3bmSUfzJGYfCCKp6ZTGj4kU4LDjeD49KQ6abdzApAj"
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
