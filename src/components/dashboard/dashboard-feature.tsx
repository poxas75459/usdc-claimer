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
    "3aEuhvwUr6zCRRbqDyG34S14KynzHDrEsnsrTJB8YsEWafzfnsKvE6tp4PCsSv2gNmGcNRfijsGK9jk7zpQKoJ9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57uCK15VjbWU4wpPrwA8xpPGSXdXZ3WGqd1LvQB4spNvwPwXRyKDA94zQqWE1P3j4EQSgtNWiZZ59M4pSSFEu9bZ",
  "key1": "4yLJLGMs5soZLrrhSpfjJ1NgKRmPJRxSdnRAhJBgif1Ltt157QkPtLrz6SkrvXjvmnsuTcy7najoT6vFmqPJyamD",
  "key2": "P5QJVLv3jdTYdNKwZa8m5XSnEHL8vqE1qKCWSaBqNC4v1yjbvtQ2hU7LexgHQCA1qcMAfuJa8b1c5D8DwaUk8aR",
  "key3": "3kRgQt3zxsxQELx677wayGM4dPscADr3JppFqMin9qPkM96LmXZ1V9q3u4ME8f3g8Zn9ghEEyKvUk3TtN3xYcuY3",
  "key4": "3g6dd83ejKVoZgpRVr2TGLyKiCaqNt57uG8TF8xN6rrtxK1xXriN3qWpvrR3DLsiT6d4KgxQ974uQuu85oC1jL6B",
  "key5": "5gXQ3Lgs5Zncj2nrYFzxHpNQkcPt6r9Sz3QPr23gEYxG375VzET91itbdMrERSUUGMCzH4TVXkKu6yJJJgvXdpor",
  "key6": "5TBtzS9bhx8bGgiuvHjEhwpv8x4qhcWqVuies4dmBp263FqSY1HKYz99FiphvPaBzGaGa1dyEgED4Z92emgqGbH7",
  "key7": "2tU6TgRRZhkbsd2hmsQbSE6646y7RzEWU16d7WRvFD6n8HyhuTYyxwRMYRGQ9Sq6hTnwXbzUagjUvKg9u6NKq6jR",
  "key8": "4QSy8j2YwYoTuCV1E8FzoHzGyoWgKHtNo5jJjjBxn7PfqR2K4rfZSJVpdCZ8E88XNfdddxgEBpKdt2RKLVvNjekB",
  "key9": "265gAGnXfkaQptWHWSqQ39J8DX9uadwNEyBV4cYT1ECNivsJrqQpHxjdYmYtfw826YmhcKc9VkbpEpPjnpDoWZXP",
  "key10": "5Zosbk3VtDUJt2dYg8gKmPf13fNGKMkZMRsH3s3BFGnDirzG2Dac4bwuP1PXuW8TZH5E7noUJ2NAc1orZrjC8tVM",
  "key11": "4jZ7S4s981Ap6iyDkRam9kA41cCEQf88xT6k868MxnnqjBSjBChTw6YErYN1eEK8C3y5v9DSCS96nUYgjGNyhKxL",
  "key12": "7ugZjiNwUjKDrsHAZzvZb7Rjq1HYs5L2GmwMwpeaUtBGKpmBco32ozHC5MQSBmDE2dCU93U1N5Ugrpd2CV7hVci",
  "key13": "5NgiC9gAMyHCLiMShpmTBg4PdkuXPg2ZJH8vSyQmseSakVgtsCY2dgj4KtYDo8dLyDDjVYkQoP1EAq9e3koTnsTS",
  "key14": "2aPGSVCfd4HRwuT9zkGgiASvqtTAqaQDAp4rtXw6akivfHswn99krKuvQnL3Q3PDnqLysq4TMC9UtaagPugFmQC9",
  "key15": "4fUP4BKmSF7QLB8qyDp5LZdSaNkRj3Lco9gvtz2VyFok5YXXV5zkZU74GN7jt6xXvraPZykHonJ76wLvKzf2KohY",
  "key16": "5dr8vCVNukk9LztdyCtXV29jhEHj9DhgStbNcFj9BUeGFXguJFx4Ho3VVxjhYh1Fp26kRxn3tnMw2W7UwDzyqGmM",
  "key17": "5NBxR3LnsvmYpqRhYpBfXVVVVrifYxDtuiggQ9c4ywkAqSTfdbWGYNmSckfgiXw7oB6ZpVTx5Su4PnaSKvYpBZAF",
  "key18": "2VGkafLPzh1Usy1hj2NCzcWu6fDQCWnvRDMbyFYh2mqLjThZukHFv8czAe8KG8cGV79nXxT63PaCaTNCvBZwafM5",
  "key19": "5f7WcnpvoRhdWQepiCx6hoMv1wEgEz29r7A4rURDwf73nTAi3mGsTWQGweg8PCGC1ngrkdXkkcsyaTmWGyMbQofh",
  "key20": "5R3T2PpfvfGserchHzRb8Lz82AidMfdjLwPHK7V9p2rAj1vmi2nGFh6hvymby9RYH4mMXbap2FMHojT4nsieZjki",
  "key21": "Y21v7Xb5h7AdtbYjTPQVcKPiMZZe856Rj8kFA9NzdtmwV4j7beejgufF7TR8SXBiwULZy2z8Kjcy8pKvWYuppER",
  "key22": "36t6ogQwsqXyxR3QnmFaAwWcUfRxuJemVCSeAaove9ZFqV6CiWUF69aWoEFuAcjEtcnFbinYSukZgsKzGYRkHqz9",
  "key23": "2JowcVWoKWcpDjGGVJUqmrP3e5uvmT6c6HPBhcGSMcA8neGSC4HyMbTpssLbW12tr6yyG5fpnUXLwVfqRfEmg164",
  "key24": "2UEW9JYJVKNKS7fNK8udkRU1TBsoujU7ucRrkmc7Fw1eurLgHMqLeMUjwFsNyLSs4c4cyWrwuT5m6h2SN2YcAkGV",
  "key25": "37jwRaRFy63cQSgZNB2CbSn8EyhJVL4EnoUvuJ8M2XySwBt5ap2jDveh5uZfUdAnTfUgMiGpRVjEYpE6rAC4m6Xg",
  "key26": "4q8pnbWbfXTtDvCGzhUg1oN7uoUpe5tEfWDkbNKb9FCiC3Syx8KuJac8JKvaAKWuKM3LdBVWbNPPPccJHgTgjeGT"
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
