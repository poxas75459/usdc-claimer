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
    "2osKKh592jnHMrGcwu2ccTeztoqEYwkpsfaiKKg9TuPuTUYwhN2eqt7KX35paww6htfjdBtYgznPrnaFKserG77E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NyCx8mhZuEQfMqFNJJikFyiqUNgFjuNuek1ueu1MHfd9YmoFLAqP8EBiacLtYQMwefBpPf8YnkDrXrj1ycmyAz8",
  "key1": "4aEaknJNE3CEAiXnzPN8uCyX3UzKGK2q1ZsiAvQq7syFtZNgPhweteBr91MQHQYVCWkie9oUWLYcn7ZBX3WfmACs",
  "key2": "5Cnp7E98M4sBiv7LboeF1yD5kN645wwpr7kpCKQ4weVQ9uCiGQjhatj4L1rG9kGGeiAVNe1XtGgYANM8gydGKnsR",
  "key3": "61CpzARzEYW6Y7RbnhEWxhHtKzk7sQLUcz4Mn7f76rG5gA43MqUP7fSN6d945fggNGQLkKsVbLspH4NMwK4pfJN6",
  "key4": "3AyHa6GAtjMbi4DDFPGvdmybSmEuc9T88othKbNq6exNuP4Lv5rqybuDe9J2gSt73bZMz6GcM1QPU8Q8HotEeeSh",
  "key5": "2jyqQhBxuUi1aKBfX77U1oVi4sqND6PQnA6fwWQZ6xpg2M5g3HymNxUif5AQQiVTc9Qtj9gwUhKK6FabsQYnw6Vu",
  "key6": "4nmHZPKCjnaQTUrc15GCC3WtPph3YnHQ4CN6vgWWBGsUC6r2EangYBJKH3wRLiTGnM9rso8YRUSvtAi3paTfdh1K",
  "key7": "3peoMaYW3uMbTsdZ3YQbdGkNQMwHzYF6EzxzUgaxws91DD3MH666fdjgYRt4cbzJabSxKJyZrdm5xYL9AszMVTzq",
  "key8": "4ZVEb2gZnEo3z7YM9s4Y7k3CnxtE49sf5GRah1aJanG6bVjbkfb3eX3shFoC1zEQH7yfFyrcvGheGWssbr96kJsQ",
  "key9": "3taxsLM9uHXGn6qW79zMqmHFfNM3ot1fXrg2eUCHDk21qC9oRmMgPXF1cFxMe7gsHa6zKyoYcPSt7tyP6r9ShdHv",
  "key10": "61Hi2Vn76nryb1Gzuxp3ukJzk8uD1bGRNreGSQo8e9ELVKysAUWUm3HZJPKDawbcyCMqCDvySsnUUHJ4mVUAnxJT",
  "key11": "tuEPYWQYUvvrYV3BtZohrTdsHiy1sNFmgqoHMXh4QCBqVEehuCXJ5nUgCfNuBqjWQY4raAN85vMFbvj3iEzbnbD",
  "key12": "3PUsoA7erR8U11jXBhXe6uE6b85ru15oaZSiGjtPr3Q2kRVkoGdZgHoijabDAjgUDUskiKYxfbHHe9p7oaDZDQLz",
  "key13": "4tVyp7HkmJ8Tvr7YG3Q99oy2CUdBwkA63vuVmwYnpJpJhbFbVdFXTkswcT1uLV8kGYRFFLiHfVSB8qEU4vQjFYDc",
  "key14": "497HhJRndQGaJcpHkxT5fVneTaog4HZbXUhS7ejQbuEJgQBWqNyvBzgQn2iH1SULuEYzgc9x1PRXMyya7d8wBaGG",
  "key15": "22ReqQczNLZCSCqsfw4RSLfxP1bM9RXDfztGKtYqFKANzvEmUHiHXRYZmpiYG4EXPSrsTnXEdA4eZ3ukAVTGFfhB",
  "key16": "2xtHxVqb6AWoT1b4Uvi17cRbJbC4hKxeuUzZVdFgdkYuAcix87zFdNi9FNG8iPCH3DsWjkcxhfmmkpqQjTTcHJJG",
  "key17": "PjanExmYawr1YrpzwvxMqEppUFwR3kcoxBmuEfpCMH2Yb9NH4bYPmT2pyFyoJGnbcqvJ282tfbniDRoz2NabuX4",
  "key18": "4dRAvxYLhG84T9cZeKH1VpXYdsZzaJ6ADbpHKBQGSD5a6gDpG3Py3pr7Fi1yX4A8BYR4fMh3s41ZrKhBPGFpVLmr",
  "key19": "2FM1oyBpCUAMewmqwzA1q3343dgsLTDSmXrApqLUXd778een8msfbHBzGHAjUmV4UwqV6NtbQYqhshURMjYuUcNX",
  "key20": "2wRMumojgbcmoePiattBWNkn3u79QRxMV9AyRXLj1x4V2rq91HXH9hgnUZcH1ohGdfGbuvvKNDNPCUY9R1C6SoWj",
  "key21": "26tAJFF9Uo16xhbGZodKmQ6oqbppoFyS1T8iUy8QjtZKVWxcDPhfHiJ9Wyy8T8WQXsGMKT5a8EzRGE5kyjG7LykD",
  "key22": "Dcx86h4dNbpyy9o6mejMzFYGg2DvNLkwZN7J5eJAkVi5thbUf2S6jDvup1vrLdaLDd91G1tbqyU9DEUWGHxT9ny",
  "key23": "4okVBTauqa7WX2Ag1y4bEVWo9bb5QetDubfwowWc66JLnQ2Toy862iMS6oxkQmyTNvNao2nAMAhLrKjkcC8Vdvk3",
  "key24": "3q3CgvMFnDivAxxqppBGopg1pgVT3JnJmUi9AED6g7xoaVf9C4q4FzWaymHB8Zbbe87X8bpqtAxu3EpZ1XpfU9kz",
  "key25": "3kbn26AeDGunWes7AGV123GTXUD2Wh6SyiUWTEUPv8FDysYhUhqD89ChFF61oJA7RfYXMsQcbeLj265736LHqjCx",
  "key26": "3EkJM3Yft6Znyuz7VWauuhnCjDyuv8H42PiDvZ9euaPGYGxd3PG1Vkq3mDEFCeBdXtTP72cCmsEyN68pfXBWbBN6",
  "key27": "2R3jYpTwnhe3T89b7UxQop95tunnLSGFx9wiJLvEpcy3ntvcX6vioArPbPL4vHabfKZxe7uxPP8UHx1CaWcJ7JxA",
  "key28": "2LwTBR7kETfpRFmW4N6asttttZSN8W9toAktBnRLVLhVfzBCQSZZ5e6VY1aFziPJAYGddRKrgGjEotogHjwLpiKW",
  "key29": "31iEp1bT8A92EULFFouSDc8LybKrMgjdSzpRrwHEvGNPjvPShUCqWpiF8xtVf4UzzazwBHwLCEmHRZp5HRqLUXQS",
  "key30": "m89KaNS5YRrNXVH2DrkF8kiVd3Qwtvn6wRNX7PRwr2LvEHuugJe6rhKUUhi3jJVT7u7EUD5VAW3GJRr5prUpizW",
  "key31": "5cx61a2QahG5fGwqvzvr1u5fC22QpQMjvGjWyeCBGZbGrzRn5pkthSJ2bgJvw3U4SzoXhT5aCnhtxNpeVJu87CKW",
  "key32": "2myZtBUx6yyktKpdgP6TqEm4vitzQyZx7uVkHu5DmhVKTJ1tazAFjCaTMjhCkEBMbDjuVQUrd4fwvkR6iJLMvKEC",
  "key33": "26zWFqovPQXmSoTuUTd54xzF2VqSHp2a6TvTCdUV9jDW7tvWnMk2FWPQngSx7D5f1UzRx462kMyiHhUPWDz3EqvC",
  "key34": "4qJK98okqdykmqsoxkCMvBARudduogKnpR1HJHrcAttxYsgNNPpi6mtnPrKC7MSkQeSZmw83GNUZCVfbi37w9LPy",
  "key35": "T8DcfsmH2tHHLT13mgfmgVo5PHApY8UmJNyjSPyC4BWzYemEa1ZAK7uV815QppofaJVKp23iVVvFckDYZM4bJvR"
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
