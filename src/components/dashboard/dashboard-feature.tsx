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
    "3cjeuvGqBaAaJ4YzbjrVfXAjNJA5dXvTUS6Wndpt1PH4UvGd5GpMekPXn5tbVSZyF1AT5zfpiHY8FxKZE2UHpdS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3urDBoLuQFZatZaThdVbxrwjLEV2fruWsVn8irqyaoTG26xKn377ouGFntUQ2z7vhN5qfjeLvnod21Abz8V82DoK",
  "key1": "MdCq5hCDQG5t9sXp4m32DZbzeDxUSZaYTJdsoctet3W8B9zhD4CKyjXo7QmLUatQwfkQXWFsp9NwPfSmHPE5hXi",
  "key2": "423nYGgYMqohnKcHCjtD4xKZ9KbWv1h6DBo9Sspd8neyxtQBHNv8m4gEWWL4xB2myzmA9YKEuZZGGk8zU6UAArxM",
  "key3": "4mE5GsiMtVN55BT9WVCdjtDmchG579JZSSc43Dae2unvPvjgVcc3k7FHm8457pUYTt6VqR525nK2DH73gA4RYrae",
  "key4": "2TAKMsWrrutHuZpBkfrZpxTienMsSkDibQXdxH84AKd7D4uJjwceeY8noLv1aBb41KYCP7iqngjvNmb1bLMSqnaa",
  "key5": "3ppcV4XNGzXoWzAQxe56STkL8FtxuzXtwt51Kqz7YpE8E2P1jUZLQdW8LPBio9Cz1Kwjpj7QEq64PeEDXQEWeEPD",
  "key6": "R38g6XFBEPP2Nn9e9rKjezJe2TX2XkmqnpC36tCRpsLg3g6jUqQPNQuXtAzhzHFaWVpevnGEZADBeLcSJrHYmX9",
  "key7": "5Y6UU16t4Rnu4rdVd5qoZqtLHEDns8SWqLShA37oCTDn5cVJZCtDzFKecmDzD6557cDu5qLDtKpqYaMFFdpR1Ron",
  "key8": "5JXYGw9rnRdpT7TXaTFnJSEiNeBCNw5kdaExiFUfByNGG1V9XvYcoih6Lemd1n9nNyzkbiNu92LahyuDDZnLTudg",
  "key9": "4WKRQhfoZoS6cLhcuaNJXiWzoBxZzb8WZAPgzWfhjyAAjXxbytShV8huQbAyRNPL9wA4V65mjW8gUGCjcYqg74y8",
  "key10": "3PUDDPXsnujnBPQVXsiEQLLHrayd1anzHj8hLoY4rnoJ4BvKaFGPgP1dKgHgiauZCx6GK19ySr4VJCxTLFtKDvh8",
  "key11": "3q7YAk7iJbk5pPR4V3ZZJbgK71PPwohesmrbLfJ4jUJxAjq4N6XFy5CvSmy1gqVdG6dcshjW1H6VLZxCwEQyAbPE",
  "key12": "3TjpT1zdq3VfNBcGNnkpw4rU3cerZbKAeyW8ebG4gkwWmSgejzPZZUK5qVjggksx87eo1QREUwPWETAKZeJXYg9f",
  "key13": "2h5cWtu6d4gMJxg2vJFC2LQHvA275MUSjCvXniQFHjZzPCxr6JmvHw1ACvvCf8HLAmkchd8cehhUGxcvYqLkBmmz",
  "key14": "2cKghrBfuWxb9ZcT213uSnTE3PecZss1SgHKwQC7CpBvmCZ2NwcDMkxfZt3qDK9Ci79sbDoGfkXHdXQo3sQkG8Bk",
  "key15": "3z7ckqvKhRBZj2JxYs2uz3c66nhdiiqMfCRmQ2nhDBXNEu1V8tUUGtAtZQ9MYX7dtpbBN1etH6z1AiFgLgKgJbSx",
  "key16": "R7uhYszxPemynmK13KkjEdsEmFf3PhyfEGVqPchi5f1u9CsSpeNbA6yh9a9A2QX1hZRZc7B26DM3gDoTS2SoN7N",
  "key17": "3Ygsy3KU7wfSAtWx8duUkDJaSGuctBwtXJq7cC26J1gLxFu6qiwjeGcDyp2UYPzqdjgfjifrJetMspe958RGLVEM",
  "key18": "BMMjtzAwfV9jX1Nny3c8CYH4GPYJNurFbSf5z7n97Gz3N4X4axHMLqf9YQKShDJdDh6d4F6UKdgV6BGMJpErDkF",
  "key19": "3ghtfPUps8C4z5g8YF3APM54p6Vwa7CLuzHMeKDHuc6anqavUHXq5oCU9VXFuwja6NNNdam18GargvYL2CnJo931",
  "key20": "3a9gTckLSt36fHk3dxoDKnHw4e88stqP3YuyjH2cFDoSyQrWyxTCfXvTkPb9yrwCfMHYU8hnXxTjQZSRpVVBr59C",
  "key21": "Nf935bZy2LNc5MV7M86y3TtsM4cpqzDRqmMGywZDcsqF4EJE5v2h8HFMmkeekt51Enipf3v9ovpxawWAU3UdD7o",
  "key22": "3NhM98LTL1pZHRJD4SV5LqkijGDcx3qwKRakDdwco8KWH9TrawDXQEsV9sBK2A6feQqQYLB3PpwQHj1L48vc4iFE",
  "key23": "2YkBkmH3BodAQ4wsr3oUTeVYBBxjRgGzVKvse7WSefReAFHTDuGQepvQq5gLxadTjNVdCuuWDKPmva7AebNt9i2E",
  "key24": "2rmgZDT8Kj79EFC8UQuaf61DKPCY9tAdREsZd4fMt2t98oSWb42YMitdaDSxDAY42DHeFTwcpeyhfEMLv7GdKXtk",
  "key25": "5QxEkQdSLN7w5wQQvRjq5PfgrFgsT4D3eBtKbtUyKmBhK5wx9YJxFgNzYJ6BS8QKY5QH6itNCsTPxejtCvJqDgkP",
  "key26": "kArrvHLE5MUH5GswgknfWcYYH4hERwhFTKTu46v4TmJSs3AzrgcHEXXLfwZxZ1yfQQt1JzewPGAbuMH3rqN88Qd",
  "key27": "5WwB7vP1Sy7G2HTe38yvvHwxNaXrheh6cynadsiq7RmzVtQkEYKajeK4PsEkVViSgwM14StCQGBeccfJjtJMgbGb",
  "key28": "4zfevj5ZsSVKMGuhj9Q78XvGao8bhTC3vePLfdJzxvf3BgMCaqCV8DjkwvjHxtYQXuzkS86aPEwUcqMDARMVVMiP",
  "key29": "5TcXcoqTYxPMJgGoAXUWxXFXxQkEhB7YrH8DCd9LqzjQxzXwU2n7jN3i5yYnk7U4KguFc9K9YjHhqx3Zm2ovUCL5",
  "key30": "2jPWF3tGMRJbAZg7BRg7hKhic4Ykw5Qu5uWPWmvGSdEXA9K2XSK5DpWDyw6svXVkrvqZ7B3R63FhxJetVzt62Psv",
  "key31": "5hssQciGYMSsrV7DpnWRE7as1WiRxTw7j2WANAeQVCjpxTJwqYUXLZTG5JNYoef8DduAAuBHy4S7cMHXAxCPEU4s",
  "key32": "268e9M3bnr1nDrx4s2HfGDE6XBmQk5gzVazFqsZqdQGKykWAo86wG2uPKprSA15pRt27rsnfSdJ9vs6pZiZQ96NP",
  "key33": "3C6zgUgKpPWeDxibVYDXkd7Pr19jZiFJemmjpWow8vFzWMJasurbEv43ByhNjEB6VjeBQDoUXLXBRbi3SwDrKouJ",
  "key34": "47gcTuoJBFA6LTWNnqWgNDTP754MZPtxQu5dtduYjkYvww42epi6NoWuRdsjZM1nR1hKTSdWp3LEB9V8mJnQzANf",
  "key35": "DLWWhp5aicveENZro5UkoJwoKoJwQvXA4xxbm1grUntjpdznFS2WGip8zczaRK1Qrw8AVuidwPN4FSHubiJzJsJ"
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
