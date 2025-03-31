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
    "2Mcy3dgXMQfVAvnSoUfssh4LKksk4rS9oNDhZDsNNaDg4emn98L7ezDnfWZBJyE2SMdTidSs8Ju7A1hJT1u63uR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ssnFoB8gzJfJQEj2Vxo6eNDpdtxb5heu4Y9zVpeFBZy6d3vL5UgXbo2TXVsQf3fpuJAgCnqDauT3aJDYX1b9R5V",
  "key1": "34aACDYuRRkmyhfTpUcYDU5dj9gp3EDh4WzYmbRCWJym6gNgyWfmzdtSy69AnpmxbBdD4Nas3zCva1LyoVav753B",
  "key2": "EabDSVcMuFr5bMUqZKjCbx6HRNFnXkUkJm6HaKnZjvhtEsw2edPZz3yP5T9PSiiJTXcJ63g5RvXkfWBNTdfi94E",
  "key3": "2vD1AyHw32NAwqpH9yLbzoaGqhJY6oYmD7ELtqbKtKRejvDdfroZn12CRGQUoGMYv41nZDnFxUfevRBbArfDQAfb",
  "key4": "3qqYfUawmbrioPaixRP8UdeKeckjUuHVre3xYhvSxC6Tihg3dtKx8746LQJQZZerdzasQh3rYvgR35DuZ8sTwL9W",
  "key5": "dtX1fQTFNbJHt72ZARcGZfBmacAfSb6MsKmaXQ7Dxhwzsqb98dyfAmdXUaNpYt6WZKmHQa4vetf8eVWrbZYczm8",
  "key6": "56rbhtsLhA7WqZvTuQVBZDvRHVFSJUyZnX9kGuFXrKsgKUDCC7q46QGLj49yGY6zDjPHU5fWgWtrHoE3QbuTTvuL",
  "key7": "5ZAhXvis5wXmYfnJjUHRUWqFDdjEmjZgbCtJkQSR94YVSTxU1hPArUNAaEeFcCTyZAnKaxEdjDE4WbbBp1F6RaEK",
  "key8": "5kheKhPrNXi66PNPxySMn4Yq7KridhF1yjJtNMgXJqEQtJFRq5JoEL87zFTYQEkmhV6EaK2TuGh1b8sd9nYncsDh",
  "key9": "5CvqkAgr3MsAMLbN7Tf97HF6gBsFBJhDvYdux1wDxQemmnRJXvvHPR7qWkjaj9435ixZu3q64S63AqrL3ePr3puw",
  "key10": "34n22nYKViWJpUBRs6e7wo5NFnF8pUJx2dxP28rn8EAZAFQx4DYfrUUdhUYLYYtPecQkcH68qFwz8QM7K2DeRi1H",
  "key11": "3ooN3TwExcRgaiMv123nSPYZe5cxkwCdjux2Lu1kFcD4RoNAfsjQGjYJ7NyhcPZ1XKmuiJ7yhYpcjyagoxjCiZSZ",
  "key12": "5i56WmsqdLyY68zA4BQYz3hdkzkg1QPrD3FaJrEZZFCzRpLxnyJUgwbmvPgJ6zNxY41WZLM5eAXAHp5nHXgHy1qF",
  "key13": "4Gm2hiQ1HkDR5aHwWg6V9t8BhcUqVq6GsrB2maAtmdZ14hZCRA8gHbrRAZSXEtF85ebcN7DxTZ1uenqBGW6BjpS7",
  "key14": "5Jwuvu36wGtfgn3w24L5gQJtJZqC5xTNsMzphtNFwJYWB3L3S8UoTwnGBdYk962CrJfnJFq8MqDUXnMZyW1hqpgF",
  "key15": "4DnTPBMgPss1encznFebPuxrpiTBnr72CJSP7ReAYQgpsdvfg8zxMkie56WCVA2QefBvB71MXFoCwho13M3vxjUG",
  "key16": "2R8HV6ntJ5XWoRcjbLfhavmtorUYf4AT1Uqh2B53kphrxFiDjH3V3jBNkjid976EPxea8PbzbvPtaAaZA4Hj6CcZ",
  "key17": "75SsZ2q4RkJv1U43RSiVW2en9JhvNqy1yWqGFKGNcSizrrkxba6kGQvj8ziNSXGbARRZ7c9J29b9ntwq6fQguKF",
  "key18": "2S55EdC4LTUPWNQj4rER7QX6jb7vRyyTqBkxAR7VHpeFfwyGsBfjkHWsDXqB8R9YVWY3n56i1SWKMwto28GAmLCX",
  "key19": "49AxViwXri5zCN56M4kDkeYDHsvrFY996UGLXA3eahoUsF5jPghv1MPGENu1uoK22SY21nfEDubp5e3WRL642zGS",
  "key20": "3f6ymAy5YGqDSHuHtVty8XAWRbuj6Sq2tebZu828T6hVFRXg6ohguv4FdmbacchFxtdBpe8s9MZVP1LSFboKm7cR",
  "key21": "YKw3X5Hz4Q7A2tM5aH2aoaYkznSeBfZL2kGcHoDNw7uAvMeHMcfQvUqc9iSbLpCYATgRKPYaavu6CyXCPd7Xb6e",
  "key22": "3cxNBt9FPPFPePdcNnsT9HKVQeMXo28L1H5EYbupJfPo3gtkzkpi6EptSGj1R54ESSuxhZL7CJGGyjdhrUhVNcVt",
  "key23": "4Ejurzww1LnTQkpZKRSofgS3bvTaFdCQddJe92ZqzZGMngJbpGqq3kirndyoLDF9VWzpQG3A3Dvr2D1u7hG6khT7",
  "key24": "3zR8Vw46sRtfXZrx4sWWEsQN33MgLsCPy4MTysE5ek1Dwa5wRhVXG8ActVms9mnBjPo14msTV9zf9jsZ8kYc7AM6",
  "key25": "9nTztFeRssxMVRiTyyWf9nrEEk9D3wZVYKKsR6UWbbSTvp3Uv3hfWmoKjg635hYR2Tk6eQpE2Hk5v5oQQessNKm",
  "key26": "4fVt4JYt96eLwB1zF65scDHHBktxmmTcE63HFNmH6x3QVFD9RwazHMbL72ghZZ46NAGfHvJPPDPV7CQZdercCLic",
  "key27": "4CfRtEQb3F9Yt6CK67t4JCaYHVj9LTvmViGyKdGpUgv5P9krV1aB1n52b2ogJqU3ADpFGHdh3SR9HD3EkKeKe89q",
  "key28": "cj35U2472CPSTMBXC1oKPnPRQT7bSSuFhumibK84pTAbtPpYh9jy1kUBGcsssVLmjE2CALuyHWXBPaSSGnaAjEe",
  "key29": "2Q7R3xWHbvopaDPTpZYSnFXTanzayzww2DvRfmxTrvezUBFrucQmtTDuo2nzQ9zg5ZE1HFojUmn7Ho3VeuMfRoYq",
  "key30": "33nVjwR9jU5ptcSAvSDXA8Rp9jqf9d8JPhYhTySebtBkbsHxNmnWvWhJBr8ZU9VkK5XyNLSFasbPciAvSenuieyt",
  "key31": "C1VM5PsQuSdrA2cKkr3bhFoRSd6hT6g7SFDVmmTYnaFkApNcapwicmYzYXyweisqJrZRVv4Wy8hRsR9WSc5aCeM",
  "key32": "35RD1SmUtLHJGFQMtBBdFENb144KMaocNzo3RHLowv2tc3F9bzP7ZUjZP36wun9ekzeM6kWthUFtE1MyAfQ3kusj",
  "key33": "c3YEMUcDRAYKPwTWCQENLBZmqgeKxx76TfrD3ZrTyYJWuY6rz9nQYbgAqeAfgGSeuuLjua6zNpdHFz52E8HbWc8",
  "key34": "3e39f4hg5nc7S4NitQ3Ap71UPCizKY5VjB1zWxii8koTm9MqvYUdypuAd1ZUzhrXiGodajuXfDkNKRJJRZemtoMi",
  "key35": "57zDf6wssNtjr4qWAtWhqpRvp5zrSkrrBAbAzr3KbkQnt9hoSuJk2H2gydRDdbeuAXmjnWxtxegSCzKnc2Pg3sLS",
  "key36": "3C3EbUh5jtEFmARRiRsKXjcJRH6Z6vb3UrxNEioSuiH2x5sT79bgZ7KcC6ztLDbTXMmPtaNMYiMTRzKfqrBtQZQd",
  "key37": "4RKJSpu8XPawKZbv6LT5aXVXAUzDG9pyjUjVeDdTzCtEEfmiAUa4yie3tvCxww2Bn7nSVQC58ojgSUDEJbunNHz3",
  "key38": "4Y1ppVtVSsNHwsH1swAMNg99pMVXwAZZc7a8z2gBdPWMsQRZv63Tv2LWUaW6JCHmDRtrFh7W92KXhgbddQGZLq8k",
  "key39": "4oiJUk8qna5T7vB3ucSrgxLgCHqjbBShxQvVUgJBKNoXNFQK3Lv4t54znpuHBWTvqNC7Wipy692zJnGGBZMDdCWd",
  "key40": "26Nc4X4mNCkNr7nC5xqrg5khMsgK13qEiZgMxtxMa9mNcC9pPXC7v4cqb1EYceWYARvicGT7Lxp9FFPXMQNqfwWn",
  "key41": "34VyetsbRBCwL5vgD4fKDG9nETZ9vckrQ2tCdYHhNBQhomUGurQGuEVgpTV93ARxFG1PufETwJhxcQJi4zyswXak",
  "key42": "4oYywZrSp2hzQmRzcgDLyZQvxR7Sr8JqZaEj3R7BiYksqebLnQgyfhDD6gTjQQx6DBtFWsJgLmAGiec4XgDNo9Pn"
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
