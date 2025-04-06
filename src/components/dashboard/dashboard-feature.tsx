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
    "y1ZFasWcZFReLToavyuQAUMeiqA5Sk1qcC9wJipheqe2NbFpF45MwKB7nbs7H4VYvk54uPKZtYKZpB8qkksDGB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v7HKFcuLj5FZ3VaZJRxuY9PzHKr2asKiDHEhrVZ53jMfAhJjPS1gtuiKFqwgTHbtvaUuRvmZHgmY82rLJBFbvTX",
  "key1": "3XMJXkH1uQsPJNfLSBXEk55DX7n8sZ45bA96vvoCKpXp5fffwNXKm6StLZUMQShSi397bhZK6SQDxpak3UnD3WYf",
  "key2": "443hMKHZwQXCCaSPJ3juzvg7fzPnMDf1Pa74kBXboTsQAoVFaQ9kNFPGEuLKRZJ433LA6xZq8vmxrFgmFYAKRWoV",
  "key3": "5dQMdBoeWCbXMhcd2nDrRPfUGAeSnPf2ZVNAD829nLqAzqea5HeHYZZP9zCXS5CEv2ANGjRWgUV6a5CPaLU6BMt1",
  "key4": "5yJH3AUGhPtqznxHP2d7qmNQUGh3ipF2yp1cpB477xdZMd4KV8TKSQbofQxw6qvjHdMNK6rbFWF1mNkZkXyd9A8a",
  "key5": "7SrnGK8XiJ6o1zAMUHDcjSiXEgKnh1QYoZwT5sybAtB5L3xBNjPps9PBzuHu5Rm7L3MiJrshM5xJa1ZQs6JYSPv",
  "key6": "5CYeqeirkU4xgHRXAVU5Nk3AL1BjwjVDgdmu9Fgvs17AAyNPHE6B13NpgZm5xEcJ1rMijZGcjUmnLoHYjCiDZCCi",
  "key7": "5X2bKcp1BKR8dkcZJu6oKrsa7p6hJBieTTN6HFkahLUE4VZZZTgwEtRZCTXJB97aJxZVn9LYo5TiEWJ1fDBnc48Z",
  "key8": "3iiHYmu3Y4jpQPZEzsBX8QkAQHbd4LSj3UpkpjCnRPG6cxkGEuZkktn9qCUSAgXiMap6LmiFUrnxrGFA4ztaA4Ut",
  "key9": "4bRaccbSSyC974zfXyPu5NFigkKo4sEZTUzMEB4MXrMAhjT9vt9sBA2dmyKSyxypx5XxpFvocYqRbUsuGerHTZ9b",
  "key10": "5jeQH4uaHT4chwpmov9D7irqKUh56AVLHpwyzNtKCtryDZzHQx7qhiS9GiRrKfZsP8H2EcHK1L6wBykj27fXXQ2r",
  "key11": "2RUA3TTKFCBJByARiQoGa9Y4QHXrszJwnLXV77L6hZktfcuS7ujV1jk3kgsPi85UsUkgbBozr7KmAV6eJatQNcuK",
  "key12": "5RBsCnQh2Fk5FiqnUo9P34SkvXXUMa77mAtHcqqmQZUjmdwCEhdNQuyd11ai36xpL2Xuks2D2ccZd7aq2DDUbzEP",
  "key13": "5LU7kUXxNHM4PW9XZy7WkG7xsDhN5UHxsMEBtbHitUF3qLR2dNaHk9Bh76BeAfovM17ZsHf5jpGDVxN3AdVgjR3p",
  "key14": "5bYDJ2zKFLaBZVZrvwSckeSHVrMjFuzRcXeUDNZUFYxghYaUsQZ27F3nL4MWWisARXH1vRGrmm51MvUvqcTvqwkQ",
  "key15": "5dhJrXHHojjDt6DgaapJhAhurgiHbUtydjrANLQm2ZMzjiGUG38XxXk2xsQHxQmDjZAnuvGnwt1pxuuRdv6ymdKx",
  "key16": "5fVkRZAD8zdgyCbsNThSmevqd9KcmFEHoTvuFNQtJ7QcDez5FnHZ71YmWZQx8GL24hfiZ6knSLL1vsFant1n8EM3",
  "key17": "hKY7kWQBDUKBSFuYAjvpvPsQ7dq9m9UdCmuY4mivjZotxMem82RpjqbdenWUeLN3hrDDaQVgeKjRdbtemQJqNco",
  "key18": "3qubQ5bimw1uN3e8gqpHCixAPfcT3LqC89W3yr4D6WbHLzMBUnPf6Nxoxg2xAGQESsKWhNZ5BxAL6aEE1cTMt25f",
  "key19": "2nUBCLHfrMKcnHnr6kKMKwyDTgqkgxA86YG1BMu8VGDoMkxC5zfGeALxCSLJd8rV4fvM3hbHvzMHAUpnxvmmQ7T3",
  "key20": "hU2aSwL3Vo4egEhjtjY31tYEuNUfLz5iPem3UirRinUWXpT2vdPGhGjz9zuzaZp2rkMWBc4M9rt72JKQeRBqeX1",
  "key21": "3q3cGeULGhavrfJktVdBo1c8BSZs1wJDcARdGhLSB9tZn9TFmBejZJKTQUj4chgGgtXgv6WyguhtvYsv52H1vG4o",
  "key22": "4tm9qetNkk8kwNPfx2cEvg2TdcCaXrSLV6h9ckE21QXQDu5asb7cfJTmwbaobxqK1N8VuZgUFXj4QtsiyAL4qN1b",
  "key23": "CEa7kwEtECp4vupnWCtvQdo49ucGnPZsNC7pqaFLYbaP5QFniHEWJcJyWxczRDLE7Fjsw86WG5GduYx75dRbf6U",
  "key24": "GfYs4L7rLezz4j6zBpVDE7Poeocy1CQUH1q59ZbTkCuP3kJB7nth92YRCC6MM6WivGpBZzZXeHnrjaeKTED2t1D",
  "key25": "41RqHUYsn3HCk1gjCWb9cjqtxAZwQYqwagfvfJC9aq2WxnwCStjfwDZijJMs2B7RvCNYMGSALKQYqtSUNiH9Q63m",
  "key26": "5bb7Q5ySchcashhXhN9REAZaUiCxYSpDQ4UDfDyd9pjgS1ZdhRCNprkYbWZouAURiGJTP6VaEFHvzwHy5YaTubQ6",
  "key27": "44K7XYsDwycZGSxwvSXbo6MJsKie2M19KNm5YmSwQco6kLCE39jGuaHvavq73fd8XWX8f6qd29SS848PBmAK4ZTd",
  "key28": "38MGBFrGb4F4hhoa1zdKaiDmyAsBFwure24qX98KJc3QE8wSzUUmG2mrKVkWexx7BPQbdxUzYtyggKtEqDEXRKWx",
  "key29": "4EQE7Z99vrTeqwEsMvwpbfjDyhAiv1kK3TvKLiyo1auS1ycyJYPt3c7ztYPVNTfaHopDYvT2Em3bbgDqNZBZAy3v",
  "key30": "63R28Vo5wkczuUCezragMiH9AUUN8ZTpij4595HYA2nqAy93JLy3xPxeheEhmPF4XRA7hwmGdoR8LUX6xPmE7AiL",
  "key31": "3WfjBNYd6ALSTXqZoV92j1QoYf8cYmZhhGCJixZ9kuRzrCvNh9yj9CufUabHr2cJPnyceKsTPk8xyjXG1bucMHE7",
  "key32": "5X8j5THUgmwA66o2Q3dBvox26HjBawK85TeoGjcysvTW8Be8m4nuNS9MyvBWQo4CKaSY9Aatv1TNG7Sw86jizjrh",
  "key33": "2szxS9iRctxGkfMJas9aAQDLWDovXMrZWPx3NKojeBt3iF9NKGswjrJ4wbFqWBw8oT1wLvCFHaHAYhXtxMRyHf48",
  "key34": "X89YHDdnEVqbrLHe4uRJrUXSVHvWG8HGUzQa9fZkU6SR4jrZbmQVx3UHAMVAaHiUQQxqsHZ2fCFqxiDpxBxH1wG",
  "key35": "5bfornUZbHVSv9o3Z62FNZ6vmC3fGUTi1BFqC5zaQ6Q86qrm5YxFqmiHkztQxmBGwSDCCTHxQhqR7LwfdNXNatPD",
  "key36": "qrSZaGaZ2vns7UhbPtJaQVFLwkroNph7u1RZBjiwtejcx8ftbopeyka11kZofW6bPZhTFCBqAcQBFwn27BqkvJ7",
  "key37": "5tFzQNTe5Lc6po2B8PNgarE3rC43H3DEu5iS1jpPuZkS24zCHuzqHRSu2nUmUtE2WD5oWvPbKmXP9w1KpwK2vn86"
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
