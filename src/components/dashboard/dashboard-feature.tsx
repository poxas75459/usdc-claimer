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
    "5fndixvYGQpwz58nQnppav6JziLZVEhGcx3nPco4qniJud5A4wpcTtCLYKwGyXepp8rweCkFwZYDbRrsN9GRCdnc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MCbWaQ24mr9b8fssVVowTp3zgXGtHr6Y7UtyHDksaTQGAPp5vX2Z92wmsG1EuZVm9VrSbpMpaXRPu2FD4EE9RfU",
  "key1": "3yxpgbnRqtCPYcVMG8ZeoHCXexUUTa2Q1MmMBCNeHxHj8DusfyJeE2S8sbhjxRKaQ72LiZuED11KZd34eWJ5vjHT",
  "key2": "2ux542rZmRew6XCv1ev2bY5eifNqLpF5bAgjcZhQaJPKWVHHSWqTXP3micUfWDzqQ7b2JUjPftwomp3pWCskQT4t",
  "key3": "2QfKyxAY52kEZZCT4hsMkJ3vRnAGnnu1SzYampqGVNen57jQ5EbeNLzrwiPUnshE2bqgaDANFVv5uUd8zma4or1r",
  "key4": "4Jg8uQmW3QhZ9pQQ4EtGNemYtid7heWrCy5hNcHPMxaUqNNQm7dx7L8uGNmsYuC2ToKqgUnZQX4ZJL3XL3C6N3is",
  "key5": "2HXpr8zsRGzXQshroa76Qnwb2eqc3f5TrjqY2ux4kBbV6Gxt5WfUjNcUaXDGZ7e1tAJaUyvYEaT1Z9TjFh2ZLVS1",
  "key6": "4caD14Lzf95kiXJ8foax1yCMFpaMhNHqW1nLBtW7U75tDbyPSAbUv68UX9nXff9qonyiF7jvcHWZ4wj3uFM6ZV8f",
  "key7": "23EGPvVvDcdtnYN7eMkoHwAbbDHMrzwz2MFcCcFNTd3cUKMfGQgnck3RcJiFcb8kTcF6kuiCGLhwDNQtVxjUUNjf",
  "key8": "2BEBWenABGBNNXh3EvrsEbmGP2bWUDLDJoE5oN8fNtGdTbdoHqSbfHxYX4KUsBavoLfN7bqkP3YGpERTH57ukZQk",
  "key9": "3Tqmu2aZxP9az6HeeVmRHszuuo2dgEpWXGMv3E1D8pmTW1MfCN5FqygVDwhSx3Wu7XEE18376W9uHmTYcMWCoS2R",
  "key10": "2KqYx4eHAJqzLwW7ojiaM9K4XvEMzgR2utS9Y3zGohd32acau1g4Mc36yo8ydac8fZyAnVTbfDJzn63n8JznSnDM",
  "key11": "3VuDU5hYpp8gNvHKSvTVC7kkcBtwLxXq91f8SztW7u1ndSafF9Ex65fQYBkJQqoDmB8UkexNLctKyKgGJkd8SeSV",
  "key12": "4fvGJMvR7VXMijyHWsre1nZLy3LncKGmUjFtJ8ZfNygZ2JLcGdBBEmcduh5Qn4Sz9pN6BJQJto973nkWiMGFP51D",
  "key13": "5ZCJ6j5J4F3Ubjoa2QzPaSaL5DX9Ez6d9GJe34q9gu7amoAeejoGkHYQrF3ZS65MHsmb4ea8VoAKnC4ZVM5PurnZ",
  "key14": "5wWqawWrYHiWXKneUQ7mU2V3FgoZT8pxad52eX6WaHbmAJZ7K2GudMjmgpM1bMzjAYhmVK3hsKoRWXruBPy2EKdr",
  "key15": "2bZXmZVxY5zbPF2x2R9N2hDor4pU4zEdYc4TnDMGzaqwk4jNaJjh1dr5GUUuVxoi7iofncykbgjDRCL7AUn9xZDz",
  "key16": "2NEYYjYSPBqVpbVpishafY9WRQL6akndL9Ve8quP4SP3gbWiL2y4VeVoriBF6Tq48MzgsVNHY821jDovh7gUbHL",
  "key17": "5YgCwz1VZHUgaGuK835TaKWwXLRK3fb5YKDBx6bKrg3cmCHgjXfH8godVsS45Vbs3KsAu3m5paDm5vbhtY12VobQ",
  "key18": "4PKwAhKY9ZDuGZkfCSeiDPxd4uXh4NS2M1nYaiDpyF4kVZ18TuWAA6BYtfBHThwxqgzsEAbxsdXDuCvKTw1xEgbh",
  "key19": "33NC8KCgekq2tnZGv5Ze4isDhpRCqvPgaxMdD17vLySkFrTNxJGjCzU6ddBE5dCbyuXgo37N8UXDxKiCL1ftHpWL",
  "key20": "5n4MX9kRnsN5iFJbTzCLJgo9ZeKwHmKC8nGWtyrpP53QJfJ78jmTd3DEBAi5WQCEkFTeS6nGr3qu5GeVpJS3iLZA",
  "key21": "JL8eVgec5JsMRNqfEVsxpeAv5Jsu3pVtZn7LCYj12MPaVVSfj5r1ucjaHnu4HbxffDzn4dK7xtt6DMATXCAjBkS",
  "key22": "4FffEe4UGXfwTaTT6FQ4YGt3qe8FNwPgsw4b5TDKE8oZD6LMYR5B7sTqoCzfgSnhTJmk3uCRdEhaxyntrpjvfq1A",
  "key23": "3TofB8eo3bULVMoxPDAKkcSKz3QBUFB4BAQMcZ7NSNSYpugmQrpKgAofxtAURqcSkuizYGi5MtqnnTTJRpQ5kbwN",
  "key24": "3XGKzLBb6pvXgiy7hS4bzKhtruwpFjEvEAUMz7SmcQgAAcKHQ3RutmLX5puc8nTjJkdDGY4rFkaSsqxCAHhcbsjn",
  "key25": "3JFUbutWiTsmNyxNKzFzE4wFygtgBb3gRryK7zCAUZYgMUwGs853XwKvUhnnR19EBkcqmeo5hWKtQFenJzncjUb9",
  "key26": "4uZ1ku1K23zkcY9FKVjUr5RBwX8WYFsywb5wYXCQFfnEWPQpw8uZBnfXUawb8WGCLuVQbTGSpD3i6iC2kDME9t1S",
  "key27": "5FZ9RZfM6vjjY6wxX5FtNhcXhaZ4bu8B234359ztiLUmfFHyg7UZ1Vak7tDQ9wpCBkfAFJSbpbtHoBqLLRzR2533",
  "key28": "4srmXh6EfEqnznoAKQmMH2skc1sGTBQ6aDNBRLK9yETc414sjh2TpJp5qK785mVogd46WVaci5zP8ywoyehKxZoK",
  "key29": "nXntHQdDiQ1MPrgqCCX9fBE79ZsfXgUm32aXv4roJ4iFfsEH8isRvkSTbXk8KFRdNeboDDVCUVH2L1d7dLzjbth",
  "key30": "5JobfiKVBEFidpK3xh1u6xEpcYB5WKAX9LRKLbfJmZpYEkbjXE4MjpWbQtNzf9tQbV3EQYWQHBKZz1uFDMRuHi1N",
  "key31": "2SsxiMN7heuJFguDQr1SywSeAEsbduT21c5AYm73UZNGERvBqpGAQ7mUEGsQP2tbrfftwn4rEbNVZwv9Ek2UPBKU",
  "key32": "3UBUhGiDxUDAVew9JMxNiDTa5nsmGWwo3jY1oibLix46vnnNXKWza4X25SDnjfzV4f8vW2rCpnKRkofcCYpPstpP",
  "key33": "4tqPyMq6K4chbAiVoe4HtXhkoJAWTomk3vzBPxSpXXTQ9AMGVzyPjxCsoLHtX2sfK9xmwduD6ntok8cmw9NBVPH3",
  "key34": "aXEVXAiQQ1cLrZQwgY17wqR4yyzCrrqGsWHg2FiY23R1UPrz5eaWeAFBxLpCGCnFFWbsUNcj6cbwBaGd8QVQie5"
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
