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
    "3qQK5WF32Nh6TNcGN8upA5w1jA1MizZNXXhqxNtrSwQZHzgdVQWTodHiW1WzMBNvvaj9UE3fzJWVL5h2697bWfY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YH7xbwuzqZXgna6zHAifPMFLpq2cEBD13uuc3wogNJkzqXsmQx9AGHXrBwWAYXjhYiQZqzjgY97k7rCRugShgYJ",
  "key1": "4eBFdt8PVWkbnnzpQkARJ9m753yEwCyyd8EUEQUuEa2FqtuVGrkUHC44kVDkKzgoc5FgUDdm1MRyHYNqytCcrj5z",
  "key2": "4YSjpTXBM4hmvPYMJaQtyqwVJDJRP2skgEd5cHebAVmc1d2ZhJW8qMngwMjHBFbUCbxQM2JLHTvrwi1xc9J973b3",
  "key3": "36fWyKd4ZCXWAMPyPiH7WuDwNCsyBK3e6TAYfhtNQGgAFgCMrgtm4Sn7AebWuApCXBPqebfkHHRq2AxGwSzFruYH",
  "key4": "4PUdmDFZmvLNQRhU9Z8qTaN2nX6qdSznzkRNEEoAGvb3kz2ZPywbR4bvD1GvWkCzqBd6UhAMFN13EsfaC9W51Y9m",
  "key5": "37qAV7nGbENSqbnpunjJTskUqRM3DPhsi6GwNchzbv1akbYD1rXimYJhjmndb3tcrMfMKnCqUfYUs6TmVdKejR9X",
  "key6": "2yEiBtSkhEm7PpPz5RNm3gKANoayVGJ9BQgaB8dueLT3UbPwThYNcusHTxW5huwL44mEwQSRaFuqSzqDU2PX3tWH",
  "key7": "3iSKixLSh62nagpM9ohRiVA9meC6fvKC5ExNaBgN33oZEoe5tD2mA9ukWanN4istEWBAfx5UdhNKs7izcjM7HaYK",
  "key8": "2QjHQ8gVBmh7qFAiPKT7ewxGev7Y5eL1xdP51Qb9Snjod6yUdKpKWX5UmPPU1yBSJirnceZjVMBdNAzokjaunrYL",
  "key9": "3XtM3hLuYBM1d7QWNN4ZKXZ6W3WPDknJsGPLMTu5yRRQaPRJt2S9MLCBoRDwcGJqKEcSz12DKXZWjnGgDCjn4NfR",
  "key10": "2jzYSAL2LAeTTpNxMefC796hZGzQj8PNevW4yhp5SRzf5FaMFYMFMGswiTzRd43RzJAUitexPLJpsaUZsJkmjpeN",
  "key11": "aVPZU18tuJSnTLdj5rh8e69tsjXNxCQSiPhPm4A4sutzLZaB8reRYJHZmJYcLGaHkThDcpsqquforTu8CcdfVPu",
  "key12": "3feGWPX4PpJ3kaaMMz4unKKDh7qusaRhnEwif1gp9dQZ2miGaSR5Wyf4kssj6ytzUs1we2ezayQYG8UU1ub23kZN",
  "key13": "3cfme7ZP5hwra15HYtN3PsUjfJLbCFj5cSJRty5SQLszTPZdJRUYzMSwfSF3v15X5iqqeKs177ofWpdSpxGdMpfZ",
  "key14": "5Q3BC5APgH8s9HBZ6WNZFsS9rDohnJt1XQHeAsDWfVZGpxD9TJMuKwMoe6JeFok3BHLeMEg29wU2M3KgnVb16Qeo",
  "key15": "58Dw6p6Sa59ayKV9xa3W2vZGce2mg6CPyCSRvNZrPhaUsWUNN3NwYHuk6oSChL6QnHNKPchQ3P9j8BzvCb4T5koQ",
  "key16": "g1Z9fy5SwEkwhvEREiDeCprZCnLRY7RbAeCRdjdznZoAcAY6Yoxu9SyfwR85cNphFcKm9FsMN6AhSTC3WFAonj7",
  "key17": "5dgwFtR7MBrL4FMQtDd83ihoJskfbmoKvSLczxHt3K2qUTp6aejq7rF6NKvcUXYo92tg2koarn5hLvZZ9bzEQTLh",
  "key18": "3MhGQHpeVN988uETyRhVkuCGkEwPVfKvCAaGmAkzj5Ek4ndrna8ZdMztTzoyswzFYtwR74wEEUmfQwY8Z9RJa9Lp",
  "key19": "5Z3PfRYaFtZv79BQB7XGRvfQQMUzwBejSZ9SmmT2yJccZWrDbZtNkhKAtUgYxz5NfwCMgNjb4G1KsKxUB26kEtAa",
  "key20": "4YBCVRpTJJUG2AneGwmCPPsx1VS58cxBMY9mztXnH1XAr2GwW9xMMyczFp9d2YAxSVgSBD8NzApGy1TK6ar71hPy",
  "key21": "fPU2t2ytat1cLv9yzychrduc9KWKuSzmxEjk56NCRBMNJCXR448UEh5UysYye7wF5kw87bbDKdqJCjW1XuqriVX",
  "key22": "4hpGSoue3UinyrsCkt3GgyaaeA8ktdSJmUUwcGp2i4XHWuXJvYVQ5jQNZJ3Jmigj3CZ4vwkfcKAjhquWgb8986kt",
  "key23": "5K8rK44kzca6Wpy2rshnu85bcSPDj8TBYFZUAx7fTfUNAbfPhGryaWcqBzb78u8C3wVRwNKkHs1Z2MoNAtadHuvi",
  "key24": "qQezqxZDTZc3265CFtbLxz9oPhBmmZnhqQBskKxvW2muu3fsfVRDa9c5hJKgcfUsZS8t1J5LUhm11zrVqFtLzXE",
  "key25": "sxV4ZobRgC9Bkc68tupjW2pMdeNXrst9qBKF3LhUgpao2VeZTA8W4HUJG7s7znyUPCao1DwmoUjxu1BNrJSuVFD"
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
