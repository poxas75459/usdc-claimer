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
    "2PbHWDMPLq7rkAMp2VqZHy4KUzd9Mw3PQeAwzNeDsXtZo2M87uNhnEPWRiWnETK9MSNyvtrcSPoRJGwT62fyuzba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dCxFktWpKC4RHPm7F9UxiJwmXXxw4Gj2bUij26eLwvY77kZcAGh54b9RyxTADsoTWbvd96LQ3FqQAqydrXe2Qx9",
  "key1": "4UFEdGWTtVRninu8CiAFVpThQucK3NJ2S1cdbMHc1c2APoNpgGzg28Nz3W1YTKEM4Q5fPMLPH6fTFY9pneL8NGRs",
  "key2": "2XLJhgDqKYXsZeJuwDyuTdDmYfu6DmLmSK8KrdEwhgRJa6PL3wQAjLAHdkiNgsY54yoHAy1hp6BBG51j7LC1Mdj3",
  "key3": "4VdCm2pGcskExHDncdpmygh5HBu7cQqjJMJKjrC67xy2fab68vft8XZdDzVZ6k3HLYNWDoP1HnG358x8yKpvGWcN",
  "key4": "5PKZrPkVtcgAkv5tfBsQE85wYYRmeM8Ju2ayzBQDXxrEoNqcLk9tgBqazoFqF6WTzjPgQRnMp5qUjNVN7Q2hDWA7",
  "key5": "x1MJFjkRvGTgp9kMmvvGsiJJhyn1JDqgXETpxYKVEPLYd1tG5jXkdsQnSbQN2wtE84XNutWt2NEFhmuLqiJ5LJp",
  "key6": "2rn8D9ZL5T3BMrtsJ8aSTp6MAnw76P1bYp3dzZpNFhosFeyFDCEcLjA1jH8jFaGNh6U4FNg1uZgqwVW7hmDoEbqB",
  "key7": "3riwoY2xJmKc5tqoXqwhStY4RN5GWLCMsgYTFJy6BYmtdh1QYkMpVVmHJCnABoeQV3gR1Ky2g6AJcF2SbmXnhjgt",
  "key8": "dGW6kQVxSxtSSqz9uswba6aNWzY1j83mPmpVofS82AcHLT9JjYP55d1kTeiBVE559qzZ1CMdsLHuvTQzfcPKtyF",
  "key9": "2Jk1S8PaBLewfTVFLB79U96LC49YYLUhxgwVUfoAfdTzb6nLm4S4gsLMoJTDL14BXTMbdEzCmB7A5rhUYHBVqcfK",
  "key10": "DZEcMMsyHhSj1WH6YC6X2XW5JLQ5RRZ1Jhy2HSujJ5foAeMJZ5GURheGn11mkQv2FJHTaKnJq99zxDez7u1d1aJ",
  "key11": "5CWwB3aG9CJemTRT6PHYeuDRBR8cXkTHLaN7zHz4DNmPFRczJXPE5zPXWHdeeRn3fR1pFrhx5ebAzELPpQudTJBE",
  "key12": "4oqznwhmP9d8KvfWfzLpNDBD4QLgSKXXiBtbqNDTHHkotALVL5SqsoUB3ZguKVzCLkVcYGGmBx5tMTccvr5PvAv7",
  "key13": "21B9yj6HokwH6ruLGNy2tezQ3pwRKP6MP54cNeUKsyeYKqLhcQhRz7Q5v3gTE4dzht82Zj9zMVoSJRZ2iJ9wa75M",
  "key14": "5P11nvZbjauoRejaxrCbWUPNmhYLSL7fi24gAW7diPVzWkJyQ88vzd9GBEwqdQJ9PxYzCa4K6nRi9fgmqDzbL95S",
  "key15": "2nC9fURUXmcu784XNB7tgfN3MtbQEiwS7ThuYiSgcabq8xSBdKfo72g7XNV88Gvp48XvfXaxk96dMuxPnqMb5Usc",
  "key16": "4wbhnLCKGPZws1JMYehQJpxucADY8CPir9RtCb9Q6ehQKjMMDpCRCwpTJNKkj94rHF9VzwyyWXLinMD3su3zujiw",
  "key17": "3soXWfV5jDdjjWxkywU75PbTy41uq7xJHkdX4vVBpL2fyj1zg9b1yNRRrWVZCmVqCuhrqKB8Y7R73tY9krpZ6QCf",
  "key18": "4pnsaE6FGGXDLUTaEhLXfC9zZpGjeo1w4TMDyVbSsEJyYotWVamM5VWZU6DfvQP9nyAVqUyRN9QMAopTY354Kzem",
  "key19": "3uiE1FdFiZCmLxA1fQAnWxFioJwNrdVnsu7SAbLF6XbrYsQsWsTLNyaNRjHsgbgkDVTHdQA9qamQaXMZmQxkAKUt",
  "key20": "DMFLgcGAx8s2tqwXiFiJkm8PveTwvq5878JfzxSSiG7gauNNa4nug8Vj75xAzeYEWMUox1xGDU6uHYANqjAb2aV",
  "key21": "SEWd3w2b8wk74WdCpVf8N79NcZ47HdkEqyr1HmUkbE1f89JEW1kpKgSFxw4GFjcikXHAwwbP8AtDkTdtPTjmLy1",
  "key22": "VaZCZ7h4DGrJcBMy9N7c8D2jaipNCiiTypNmvgYrvsUAQd4rb6YE9BsGz6ki1FQQ3192QXM5HSDf5ftk1FpF6AF",
  "key23": "2xMvztKLWvmPF7GsoWJ2sYjt2Eep72c7sFeMvJ2tANDhAD2vZfXevqRnTbmTfaQhnXe81HSG7WTFfx828uie6PPb",
  "key24": "8JKbb4BhdH7s8mjmbCx6nCMaUqoV5HB9PU3nu58DH3WF8D7EVJbrLtjDFLr7zfjxp9UE8ZM45pxJyioVYqfpiNS",
  "key25": "436c6P8GQbYbtqpeR3zEcTTT7HzAh4iM6juuzAqYAuiXegrUykpjYGYBJWQQA2aEiucKYfWGUHok9qDkZEbNAxtg",
  "key26": "4MVMVp2TzB1HKkp1MVmmpNHZNuDDNhTcNzXUEKURUe7a9jeVh1XDgnhxaTUALWAQ2vFD9MxD1Cv3NRWh2HJnunf3",
  "key27": "2smX4HBMt7kHNrnSAJaTqBBCjuLANCsYfExEecbrXRk6VYrx6qoVtrztGT6kZzPxuK8DZWT4VsRZscJU4yJzx75p",
  "key28": "4z3S8gBJmo5ouM5vD8HFRxC5Hps3GpBJVn7aSoNgWfQL2PumrXBsToNmWsgvGzVU2PjFgt84krWYjopsFhZusm2E"
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
