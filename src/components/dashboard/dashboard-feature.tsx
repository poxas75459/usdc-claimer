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
    "5z6ynLLVnWZyC6zDgLrrYrDLNtyimj6BHvLNud1WPbiQhw7wxw3grhb3Uap75D1LSCf3Yg3yYYR6k4ZP5gqgZ31K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NYRwS5VgU6ZZMeaL1eFzr48bR1bNFzsJmnMtJ7XWfd8wUtdGsDhNfRyQmc6u79nwEqzPr2rJNU4WBVJxM3Pzfzz",
  "key1": "yqroqDWm3frzNpEDcvA4iW7SKDAWbdbufq1Ff5JFDEvePx8Feb3cTgDjvP4LwkFcv3Pbr78K8mvXMVW9JhaN7FY",
  "key2": "61LdJtuj1ZJ9F9UdTMqQkNbgVTDL6JRB7cZJ9mQiAwzuaRQCjqHAPALW4mDjW1Ahvs6SyL2qyZpaS8HezE9iaJLS",
  "key3": "5eGhgiSnw6RPcWHHXc77B78Sk8pBwpuMAda6uiMUEJMGSfVmfUGRSkrwEEEAH29damabdeZUmmzdLncYLZa1pfwq",
  "key4": "2e8gfE1FYgWEmVF8zaXczwNVgEJ71op3yQk24qfqFM27uVW7Xmk4V1ByxYU3Mf16XAAxvyw6SL1fYeGdioNZ2JQ8",
  "key5": "3kKyWmJYhoWEfkQU7Ca9oEATLveMW7xoMeYktU5sDQr8aZamYPdV8UtuVGMkMkx8idasb5BP4tWT5wpej23RHdjQ",
  "key6": "5hxV61A7P3Lkc5Ezt76q37oLUA1o9m8tBm1TB1VTGBsDLctXBLj7d27X9Qw1mh7XtVCdGFj2ZSBh7RyANDjLecJ9",
  "key7": "5WNYiAnqfdbqxbGfQ5kUwwfaQzK2yhREytCeACbErfNayeh6uconidyctgpiCTHb9W6A2NdCxubbLQQgmDWNTFQh",
  "key8": "3JMgRWk5RzxBzZ6SUNoFwfgyB8KEfhM1nkYW4ETEkaM3mSe66xGYM8cBHfZF8kZbVnZcTrY3WoBwLX3NVxaDvBCf",
  "key9": "48PjehKtD8CRyVPkPtwPdzPp6QZyNWiFURoDY1tSjBrBwbyuawh7xAh97dccKZ1RHwP67eJEWTabemcMP5hqgKvi",
  "key10": "2bHEwmuG1SJTiXxojmbx25KbQH65SFteHA7urgcdURfyY3i4n71LTsbgFTq4Zq8faLFU2dJiXuc4yPjupsQRVAuq",
  "key11": "4Bd2j8VZysRG7unukh94zrDFKYKp5jt832rQKzeNrDXY8kdijBweTxouusJYQLBvauiLoiVkkBQH7mddEs4P6v1b",
  "key12": "3GhE1docS9zwX1AJhBbvrPzTpJjjcsXAeek3nLgFdUsfvvH2vSazLdxRbQyZ2ri4hzoGFaNUKX8vYJsh8kj8TCuH",
  "key13": "4JvZb4VUwCxx4UgpHD1Tr4vqekjqMyP6taAcxL7awjMHaxd6qUj3rtqbYw2SVahPuJUTX2HGzw9yD6pN8b3XFbv2",
  "key14": "4tf7pKStXPT14bhpEXpxKhGeNAsTC2mGX8JGqAPqz1cmyLoM3h3j33bfDZFguELMt8YYaAvqbcXkxcXTMEXmRsZ",
  "key15": "2fFftJ8nGwdDN8VaYRWh2KBNNnDLHuYaMEk3dywAPfb1q5EyzWyFU47utE5ReQoXzttJSBBLRkWdi1jbn5MRCiN4",
  "key16": "28rESwPDpoweujoh1RV3w1WAfH2ZNHPEAwy7fuAFri22L6Y9X7XbzuzXLkyV2jEwfJVkMX8orgv7fEqeMrbft3ow",
  "key17": "4CAvxLPfXLM9zxKXKNYxN79sqq5E9TqQmXt7LoWu2AqTSbAynxYsYN26U5tFQdKCWNiw2ZHLS7pcDjDxN4shqSVq",
  "key18": "x5cJyKj3S17wATkfijNQ8d1rrZmvoYfhLqFECUTTxQmZYEdMQCYAJMbSfQeMsCCPYcEu2RxBXambkLvE3rMv33s",
  "key19": "3XEJSEKAwrtXrwoivxjSdeq8yyDTbyLLY4pcXXW9ZMY9B27Tqr2QaHUxXmN1MULQgiu6ZyyhW4NGLeV9CQDSHpLW",
  "key20": "eXyE1MXDDtL4JhQer7DbbXf5bijVip5XS72qVgfCimm8U8vpRypTBZv2ionQ7a2AbUdq6N9FpFT8844KaC9v5Fp",
  "key21": "YBzXzmGPxUFf37vDeDu9E11CUseNoKxFG66dbRk6TYU6Nt64A2jThnDwnEfj3YY2wMxNdj3wJfYGLXgQKQcGd2y",
  "key22": "rpvJmuuVzQCN2za4UEfuSPdUuL92kTYt9wYLt5nc33gCMTAEvX1fbobmcfYWhgUFTD7AdRF5jb7Zpf6ajfBvtzK",
  "key23": "5ecvXJEj6cAY3fkBYFY75KkAt52VKiQt4rCJ6VgG3CSY1ir1kKsMXiou9HFogte1meuvaYUaQSLyGwt7QkWBtAuX",
  "key24": "oUdSVJgG8DjXmqWC4eH3Z6KDTmXUNhqzrP6XEUdLECqeWXoMTtrqocwtkALjRHmyKWnFqPTKua7rGqkxLQrvHj5",
  "key25": "5biB1emNyijJPTFbdJUbaKuhA19tNFtfayZGA9ATcSaSUZcmou86imW3dKkV3pAwQrCx32yuP5NnkdMoDaVuTxyE",
  "key26": "4uXA1emJCMjhrr8nzQ6Bz4q7pqXkdfr8gwpiB2EeuzLwobDumq1axs9a7Jhu7petrTFGkGMUT146dv24B7evkSrn",
  "key27": "3ec6oDR7fiLghgTWkGA4tEavUPmdm8KAWCoZdZJVJCKa9MMXB1m94ihMzXJbAUGq6rD5hvPHpK4wNRuCpvbFPWmF",
  "key28": "39yuGZJjwbML4R3pfLVEUuJHdZ54tJUEUvSpg9JDPcyFAp92BnQ5e7KyA8Pwd9N2wyTDU4coFc8VUkxFoNqogDT5",
  "key29": "3rshWaVLCvSAq7PvM5dS7ZM64wARzuJHv6wNPe1k7N3gqdMcfxBpJqeMbfQxLzDSdqWVMbpsyiK7WBNiZGPZL22v",
  "key30": "3HHQyjHvAdhgo6aAmGeP5suR2j7AeShrq2avYWKppmAzQPBB547LyVLRm9HcGxUU81Q5nxYgVCgtkDmUXd6QvCdS",
  "key31": "F9RpffL2DFdK6WahnJ6wZHQ2gBbsRiFzgkfyKKuJ5cADKEeH1ETkP3NbwwqLcdvxhHNdo9oizmCFtVipVuAXR3Y",
  "key32": "2Vw4kswP9Ekbfb8KQuhxwwQjKMXA8KoUDrQUKRvSHobmsVPowJPEgYDYBMgcgWCTmsc15mukEW7hc8iPhexEkr68",
  "key33": "45DTMjZL2jigfj2QmMHQkdPy6hGdRpkrLwg9imzjzpod44NPcfZfMRxkXAmhUj96MXnnMM33zatj7vmC35aHR48Y",
  "key34": "2hC5dkWo1JPL4oz6dEvj45GnWxvZ4aJzMkdoq6QuxuWuUyxR1kDFvpuJeaGtfkCnGhtVLnHtQ7yZwPyudMoeVR4E",
  "key35": "3jEdyaUuxQ7Nq8F7kLJidxBV9mm6xNGEEb4oHKjtzXmq5NHBBW8jZXQgf1Xqge1DNDFP3W8E7YQ8AH8vECVm6VN9",
  "key36": "HPkGggA61AZB5whucWJZynDeL9Bj8JJUWMU3BCLwDk5Xm4xoWMoCg5iwBWjPFcTKtoEwsYaCMf1DjdBoHYptgHS"
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
