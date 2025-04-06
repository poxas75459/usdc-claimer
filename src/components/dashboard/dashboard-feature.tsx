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
    "45nL9YQjDvhMSVYHv5oBcDxSCwDYTS3T5kSfEEciRbjbQN19wKwjruj1QUp3SRW39nyyZCukp57Qsh745QE8Hg3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "663cX9boBaxjza15eKeRqN8CzFEFyqMEcNVygxS7WoLJRBsEqpdGK3biDh5YUrwVwxn7QdMzUAZcE2B4Tmgyjzux",
  "key1": "SodLSowR8NtqhFkNHmYQEnvyfBooLGPEg8MhKjKbL5Js9Bp6qEC7hqi2PSv6xWRNPhB97d2LXzB1GsMuDJc3Rrk",
  "key2": "9E5fdW9fXCFTx2uZsGN2AZccq4TLu7BsC6xQBFjiwCqj8rF4EPmaLSKevv7e1ypGCGHHVJjJXS7vTVgDeYRQwSF",
  "key3": "3ATMGr8hfqueQo71D9HyDqgNPHXPYeyWjNHLiEUjW7rNHrTLfC7E175LWTL5ye5YXendKQuq7n9eXmZv3zM1hZdD",
  "key4": "4P36iX5UnoBLmTsBCYUuRrjDkxGYrjGHdtMZ4ohtrqS3A5QGw2grcfrzSLzfExpqXP9sA4Rqe4dyjuAYBhw5WEXW",
  "key5": "5MytBpg5zUF4hDgqS2F7JG9x3SY2MUjDmvNWXrgEZ4rL4XbgZwZPVaemvUaLvMJP65pS4GQJaoVgXSjVqaShKLwe",
  "key6": "2G7MwPiguzYmFW1CVXJMKdBi8JSpxGaiuEWWCxPibzVP9ynwzQvKpiYoxNFUKwwFZTQqpH7yTGuFnMzPEs9eiemL",
  "key7": "2WSeKUjxtsdLkThHCYb5M3gHx6p1xeR4ssVGGa9U4Ckz1KosCDTW6aEaC3Xs3XLGR3MLuLc3gi5oZJJjyFqLWVYZ",
  "key8": "56ASf1yVhNQbFpRdsyrv6UxWNeGUjbY5eZ3m1Py1k8Fw1vQfz6H5xU8niznkeLwPpSRDgE2TTciANBmFAka5eCoU",
  "key9": "dWb7NowQpZW1VJo2Lb7PWyFXWdX5Kh2EwU2PB5HsYJjLtGTwkieDqLssrjjHS27pZTuGNQUKfRbKTPFyQqB1q2R",
  "key10": "3i9zrprEc17VQwY6aP4pqTKb46KR4q4pTvqLTGXJFn6JXBFzVecdzcza2pNEyzQY6czu38FSr8YkU9mbdStwJrvw",
  "key11": "4jGhVuVMW61QckLdrkSZouSjZpvD17f6CM7VVLVtwk5JCTZjAqAfZoq7PXj3brqM1rJFuchuKuKoAYA4N4oZsi8D",
  "key12": "3EfEhA4G3Lv4xJQf23szgqQUyn1LzoDJZGQLPjMr64V5hKJzysmSCcRFAzPdY1CPpJ4kMyzuvEu9XYkt7uEnoKLn",
  "key13": "3QbJnDDBzZkDvT2JjXrcfEwbwGRYUruAzgkFxeFP5NhERoRthVWFGRgXLPJJnbBUJQzJtEqwjaNypRh7cZQzvhjR",
  "key14": "64MjHkxcrP9LFtCFeFrsAquKWp6exeFkjkbBa4bY9o5zEfRVfwPuFaJc14FtbLx3LUYpMTk9wbYyqHbTduWs8pnD",
  "key15": "2qad434F1UNgGsmsES3smhkAhszrkaMBaWRKEYmJRw7tn7x6uQyKkgdpoTxEim2ke2evhSuFi3iRFRxsdsHPYkLH",
  "key16": "hfh7uEa5NqYb7TbciagxrtYrHFTmDKGkmKEjoxDWBWGbfxM8NhaN2ZyWSuVW4N4vmQU53SwCGDy4UpgeNnSM3JX",
  "key17": "waeWimrPWQMfSvrPmC54jivZoZxLotuabQ3btxPjx6hxFy5hBYkv13SJLPLE8dGE5F7TJU8wU9Wk693zm3Rra2Q",
  "key18": "4WrRz1QAjwbsdCdjoQxjX97CV2PbaEHJgcpZfamZx6qs3gon6gnGZr5NcMqxX63RMiLYUyHjVYvMY6b8CAPqtPUd",
  "key19": "3UQeSSQvDnNCGZKucjgDxurSwok3w5sMnYgRZeHqBM5wkK7V8XcNadCzzPjxp8y88a5yqaj5TQ96msjDmS7fsRLZ",
  "key20": "251CDbtwbJNYmRVNSBwi2aq5Qk6NgLn2MNPV9QCGZEar8vB76P53d9DQH5C6AEFDgks52V8rREtr927KR3zBtMGi",
  "key21": "5PU2etD4cD9WmQQTE7M1CdEFbGybL2FEjcfYcLZtG2N4xA8kzYjFkN1JvEJRDbQTMJvwxj2bd2ge27fy1QS6ZH6a",
  "key22": "5fXNnHusagrPMzEnb35NeLd3rpX8GiLXZpBR1fBoH7jnpUzG5m529aYuArv6S6yLL6Kom92KLzyGCY8W9D2HS8d2",
  "key23": "2mGXQKgSgGiuaf1EtH3KdZwd1ujJ9aqZpLLPmZD9jz3sBsdLpSHkYdJDcDW2j6C9QjuoYSbFiAUut9aokphFs3FU",
  "key24": "48KEWn3SXg2DHdnJTHV56TYHGpSmJWFy7Ls5iQ5JxvGSXXKFsw5cVUY72ejYoH5abbLi7fM6gD5rc25hLqnuh3oJ",
  "key25": "5eJmm7xH6PVY4nTZ9nCqodjUaHuE1Wc6Lu4sjaPu8EUkD1HHc1zn17UX48o1AyAdH4B4E2a4dcPBrFPfVJTvaTpj",
  "key26": "2A8TXcNb4rju2cvLJ85TQeeyMRAjRRtK9d95f8gYeYDx4zDLfBs3BVLGZefstjVLrubxVPfqBh5cDKrzCuDCtCic",
  "key27": "8kSFvBBPyED1wsBaHWFvSmJwyww6nFhvRCpQx3RxvzrRsH7CJhqEiETKR9AM8UEuNMTCu56Fm7kqmaQDj4HnWzC",
  "key28": "3L65AkU7YNiHH8ZBBqwFizfcL3K4aD7jBidz7sFvKr73yBtduqbT6q1hR26LU4h3oaTiifzUcyouXU19hK6Pvgt",
  "key29": "4AVLBNtja8CjipM3ChsyLhRYKFPWe7fW4WXrYjRQ7GSmwhjPSZwDdXqYrWHQRgHBMACHBQHNHsDXxikBfcDGyz3g"
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
