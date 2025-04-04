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
    "5eH6czX92mc22hH48oHozG5xYGdgTbYWUEo9i5rgyf21acPRtNScEk1ErtWz4YkWRV4uFo1z2mKguZhDCXhnQVYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a7Phsgicx6UHGkBWWeyxmGSGQvJrJ58AioWskxoXRJRY3WaBtVmkbfpMJnYXSa8WN1Apqt4qTnzt9FdAeQXUAqE",
  "key1": "3czvoPqqG8hCh9VhQnmbdLpNUXisWeNjVNAzmKyDtmLYtU1iqGPeKUoYTdChcg1TC9NupsKwUVqGkeTQ8GKecnnF",
  "key2": "3t6P15jSQrvzF32H9og1ntRuvXXk5tJEgM8p7o18JfjCJLRsYaC62cAMELB8SyGdevB1rXJK83MQpvKt1TmCDLGc",
  "key3": "3ZcbgiaEcYUgkj5AKQLr8bfkXZuQdd9Ah2uQwhxyfPR1D3KVUgrw9iTyoWDtg27k7KjtoLf8uKQLzX8xdCjpm31f",
  "key4": "4ijwcDJcURCHbG7NWpgHPuinBPSqu9uopTrMe7bB2XK1Ww2TLTzX7TMtu4W5PhRxBqMwpY8Y8Qxg4iTLbjcZEgkB",
  "key5": "5eSjwPTX4knh6ptcrFfgUGQaqELJdnKQPLZQAw4qSDYKV6V25XfgbQCRoXxpRGKmJzvs2ZSASdHs9CT8Axn31LBg",
  "key6": "2ZmbdrrDbgGZGmM8FxeowzPbrngQQUbjncXFCuoaRL5eWvh46imBdRyLzK6eG8p4eMxTsQ4XoPSDuBwKrRpn1V1d",
  "key7": "4wFZUXjZYpaQWeMeCCCMGk576WoRALez7CaVPyf7eWhNbJjmziQp15iabgNdF4XkjGnuRweNsqSCTGpaZuAu388V",
  "key8": "5VtWoXn7YuNxwkabkK47Vz3y4cYXdBk3tcHfXFhsTmXdDPDVWCgXqgVPhf9qrm7FAjn7TXaHruyfiXXjGr3UNE9a",
  "key9": "y6HqPHinFLUKtbAajJ97TUBWmmsxmL44LFTuykjwfeVjHHQNa6SUW1JE5QaiXroziuqvBKt9NM8qbQNtnuAZtyW",
  "key10": "4GLJi5QyqAWkrdbbUApzJjawV7VXFQHaG4asC2jETBPHXq18zCKbt4ywmwDz8PN4ZyQ683V8myAC14BKqXspJ5rR",
  "key11": "2GCf1SoAKBqJUdeLVcpgde75UoCuK27LhZiXXJJzSpzLbTLqJThgHaFwKWmSqBECPoZc3Smb7AmjzssVXDvTmVjZ",
  "key12": "2oEJ9iS8jEJXwWQcESkaN6G2HcP3EdaFLGUmvbhdXg5czyRXGapnQNnfr2qymxaWCriqYEtBqB6xiynigNfeFa6M",
  "key13": "3eKiy1RVgpchbDEznr3rSjZQAq2Py2NnGyeECg7gFLa9zzvoBz4RE36qAhg7kaKxCwTGkEmugfLze5rWcDJ8vVjx",
  "key14": "51Wwah7rmth7nn4hErFsRDFzND4mt8pfdt1svyRrxbgtTwE9zqyLEtcg1tWpprM3UbdTX1vT51nmhEHma5UuYTYn",
  "key15": "6Ci8nXWUXQUWvQiikxeZoiLxhgnTgF3B7zGhb6iveu9f3GsFJLrffxEZReiuLUEaLQtApJSUpnNdrmp2844XSm2",
  "key16": "3KRADU7xpFaUJMBaw8DgS1ScdowxDSo6gycukS2A6MZq1inhE59qWTNaGBtFNcWVzpfk13RZefBSh7nFiJFRdm6b",
  "key17": "4C9C88DhSnuSxrV7NgEo5v2a6yt7psqZiMuiE3j2rieVbiQNQeSvN7qTVX9wQULQ7AEC8xPNetnTmyy2BYjbX186",
  "key18": "4opvH1aQuZqTLwduizwenvVW9E2mNaxUHj8phfDH5Ny4Q2oL3TUH5EApTrDpgL3h6rSTtSPCXexTGBCHwwdnvvbp",
  "key19": "5wxANXDxNHnZh5atxkfu6WTccggPgnBsS1tGxDyLKg8nFVJvpZ2uvwgSuKcmpokMTBR24mK3BJLApFTHzrfAV4ud",
  "key20": "23Fb5gvQhk82qjhRCKJfhgCjRwSXyY8BN4gtUNU7zjd6XYyj87o4uGNwmksG6GtkHvna6vLU1BPPbg3J4Ymouudb",
  "key21": "5K3bCjbcwrqkq2fZNmEuqKHgW3SqjT7GyBafoSWEgQdwdbDsKosqTadJq2oqcd5rewMGgp8SaQorajsWtYqXtPvZ",
  "key22": "kdGHDuax8kAMA49C8T8pD7XTCn5Txk4YfxepnViKHffEWKP2CdcBJpK8pVXcHumGSrCWDmmHBskwguVq3vSsYxJ",
  "key23": "kAMS9kk27e1GQ3H9Y14p56kzNdgkSb31Ew1DdDVdUrZRNJRFfjPFVEF4QnFqnAa86xnr7Fk2CXD2Av1zkiZULsj",
  "key24": "2brkyvQ6Tytu5iY3p2Rh1aXsMqSirCeBDb5MhfhU5azFdhLxaY87FsdbGSZcukbYE39LM8EkcAN2bQgSkdupkdoX",
  "key25": "435dYvziBdBu4KweiBGdd2wdKVuHzaaLxaC3jyRxYisrCKUKNHtB9EjBJ3ZzDWy3TkbKUCazco99wsFwjZfGBQ4T"
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
