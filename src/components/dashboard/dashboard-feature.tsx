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
    "3PyiYj3xrt3htiHZVozhjgz8yq3SPowv6dJtziqXFrrKFCLNLVBBJ99fmDskLSrZmCKz3z7EmWj1ffX8iy5Zt9uP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yNWxW3465FYsz1QywFA37QCoT9nXoheC1JX7jheX3e972FZTETqg9CkzLNsm7tw9XxH4Jjw4rwRppJCe3CUAB33",
  "key1": "2ALfLmw3mvJrNBct5pNs4goUwn1c3BZhk35pucXF3roiQoweH38DFtax4ptqSTawxjXKH5Km85cy9MLZECzFj2ni",
  "key2": "3s2AUfJj4jsjBFmYFsCBaGeuotyYRH4K67XY2qmqrzKrFrCA2WhFPrB8YWsDRXBNNdEVXnXDg2x3Gr5H9odb1kPy",
  "key3": "39rLf6Ha7iJXAi9tUE7KgLMTBCXxN1CGHTuqLFHbyHJmxkBpiGo2AeHJqNbwLXyKTEJ4aARKwDqS8fSsa7WqTNzh",
  "key4": "24ZoR5jWKrq7TYqT5T3f1dG695SW13TmryG99mB7BJGVKgdsBXfPgLZpEk83NmEaEaz74ZJvJB45B4Q2W8yZKfTU",
  "key5": "4WV749VzPCXYCTe3qBPkTpaJPW6YpdmJbTjrvseH3iYadbLRUFxLK3kbeyEak9ZKevcQQtwHoZrYk7dV7DnsuY9V",
  "key6": "3gCL4XXfXNx86dd8WfR93YS5HcGmDSuRX9FjwbzsRdjyim2pMnpiY2PuUKdAFxVUFRKVqdG4PqBjhLjtkJvxKS6g",
  "key7": "oxTmduW77u3mg4EpuMgGNhFDLgED7BUJN6prDo1DpUTYjMiTqtUgn9hTeB77L9wx9mK53D8ZVjxBUCvWnQ8DnsC",
  "key8": "2bSujqjbsC4sHMFnaKQ6HL8q9HqGGvuRgAR8YS9CWbrsUFL1Yngyv5JnpYhHZaddHCxGvSHSYToUTKW17YFgJZ9m",
  "key9": "2PsFsy2LCWTh6AbwPkWPhG6JJrRFf44a4aSsDpLoMgaqajZLJYDUsepffvVi8sBZF99TUDDwkEXdh5XfSAMi3Dk7",
  "key10": "2XGmphX6rXgrnQmmSNbcdRyZTFQjnp7skqL5gQeCBtVET1RQCiAxsnGFc1rXwoct5MFpLaPTVRt7xfvKZazYv7og",
  "key11": "Lw96ho5mADRgXBBfV6RujMAQ1aszFEexwBaLHr38p7uqBzq4568S9gnKxvzCVQfBmhKBn9YnsBVc2raJJVgoFg6",
  "key12": "3MtihoXQb894y6PvyrYmdCHaFDTsoP2mwzLHhCrPY8aKaMs2iKVE49Fc4aFnxycoimoKs2XpKmM3VrQjMkQV9W3g",
  "key13": "oF2QJC8wz7mgjTAkdJc5ExTwwiANH6DbQBuCXswL4kYjK81VVwn52NUtKZK4zCN9ibhXL4AVixM4Xf2hiWQyUdj",
  "key14": "5DwDV25p9aEQcJYqzNuiaNCgWFmEkN5VAq53BiasgjsvstWFfG7pFRGF9caXJPEYq4GgwqKMMeFeNsArnKoDfgQg",
  "key15": "2HfSopb1xZ88X3iavc9tFb7rh7SL3FsHfcxmVPx5BTL55WhAyDUbhD9HpaTvy5FtGp5QGGNf8kGw7iPEPjNw8kN5",
  "key16": "2x2o2tfbHz1A7ncHP1wMgbgAKyJorWojtu61ojmtVd1Bq9jbrASWPJHhGkRgdVGdjXB87tLzuKznXhXbjhSWq9zr",
  "key17": "x9Z3sEFfssCVJ4em5WoBhasW2GJb5agrY1YFifTgrvrESYa4JGBFUn6ZtmVPypFfP5MihzHCYApFFdt1xn5Ze94",
  "key18": "4usuzmYv4ALRKMLmPSPvNGTD3K3Yf4xL16mAVAdXkb5SnP1qgTPsuXcH8AfSUsPXUeyLEG1r4wXaZcnxqH7CpimC",
  "key19": "4uVKV3jKG6GYKEuWhbiUrV6a31beoN8tAGu6TGmEtqvKsMgoxvw67ZmktxJyjRFEMjAaQA3H1zs2Vt7WTBsC68fA",
  "key20": "52Q29D7FUpwiAVWkrK9mNEsFWnsBX7urdxhdFMxgtkHBrRnqWgbCnox1hfEgzu8wfkujxSwih2btHrKCHUb1RAxr",
  "key21": "56ynBfrNZeFEVgmnYMtNaipxm5bQmBKHfZktYtTMjwmrDv2LEW8yFJyJacKwxmxKWmQBFhwCSZPHjMGztzv649Mp",
  "key22": "47jaSxu2T7tU6JXqRwpxzrXPE1eEBvDZtpZuNh9wA8VURfZPLZvsRuM7fYkx4359vUNAsxX4oNeAPz4x9yUTXZEy",
  "key23": "2jyitF773EL9ze8GPTEmn8kN4JXXn4yeobaEgsRb9W28nF3DcNW4c5n5BEfNcJGkKu7QLPQvu71z5tUzjCdeWWDh",
  "key24": "2Vx8hyiFm4KE9Gbz2eKcpgsDaaCT2HCqivRm267vyT5PKVXD9DEBunKedmpnqXjPihtKioSMbYXqJcukRc1SE9Bj",
  "key25": "5KGGDfeMc13gybP8Tb4LKsp7pRAMXaeW49AB9ehoTwhTbm1wwf8CubPaKu3izZf1g1P9eiaXt8CsDRSYRY3ZAhVd",
  "key26": "32Aape76HKzTFZRM78QNUvbkeQZKmRMvhApr7TaRCtUow5w5TCb36agh1fkUTHMWGSepWexTwbtAQbmeD7HCmG5P",
  "key27": "3uDyLccPkVayAtUhGSHc8fjaviXnZj1jSmzJNTr17Rbh89ywVW2CA4MhfbKPAYP83t9NpEmBKYv1TdwiRazsY9Qp",
  "key28": "39Q8S7zyVN4z5QWGyKNvMvTzmAtDpAeME7Jg5Xvtn5qCyhJyghpqoyV7voKaqdv2f4MacZ5XoW4itD1wcTaNYJ1F",
  "key29": "4k2yje76cEKEwyYB29FPCc8uR9ZggbD5MaPVT8omr3yzcLPrdLcEhDaXRbesHpQznXphexH15ACaJhJEni3usxd",
  "key30": "bWN2A5ZYioM1FNkxqifa8uHEtkYeg9zSoLbRdLk9P4ASCBxPugn5fYt4yvZTKN9meDPPhqDe3y91Hy9fxJKb9eK"
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
