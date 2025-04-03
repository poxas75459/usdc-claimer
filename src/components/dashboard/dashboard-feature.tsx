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
    "4cYSisiTcbrEkEAqba6H9L9GjumEbvYv5z7b6nM9c9a5AVZtCytnUdXyihDpTZJag91wmxB8U5BqvbWUVhzLxszS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AAPYgoF3oZDmvyxyjQqMviCYaj5xy5ZG92rwysVENLvNVjTZUAAHBHHwZFWkqcDF7uSJWzjZoxPJz3N8Fwp3n9i",
  "key1": "3YuYMBPtX1ePDGYR3joDKzwp2L5CijN7czUKkWVtLX2xqTx2cSz8XQ44iYz1bGs7pMZGyx3t4kcB8gfMsjtMyWsD",
  "key2": "3f4bBER3Xc53PNyNKQcFA9zCLcacKyopW83uxaqJMZd6Xx9zExGJxCR2kHgjDRNetPTXbg7LobfrttbfzBLEr45m",
  "key3": "2BZ3J9aZVjgWVGV9eBtmMD1RW7JMPMbDngLxMdsh96ceLGu9dmYcnYzH2Ac42gkBt3KEsyruqmqFpNVo9Qd5dQyT",
  "key4": "5itupwBBfniPwAuGrBNUXiC6pNmduU2d9JTBejx29N9gZz3R4dbxrvnuNniHmJug1agfXLDh48JvkFkyJyKMzUUU",
  "key5": "2sWxtprF2soD85hvW7Jfbwey7wMWafu7HUFpzwSMeyfUcq7BiG5GfWnyaXp7ZqQqwbvvxQxM6dCkz7sdhGLUXM5K",
  "key6": "2ShX5sUN7srWrpGcyAhXz9RHCw1KJGQWjAhPdyRiCmx2tfYzLvXcUbYitPHn4JhGYHWB12odBjL2oWYdaEKf5qpz",
  "key7": "d42L9Vns4jd8mTooh1YyrLu4FcV7VkTgBn16sk6GUiyV974AwePqTizkaXmzRsmUoT2QUmxUQPjujPmcKGw9RwZ",
  "key8": "5uNsi2wnr9MGs6YmkLA59oaeMwaKcB8gc6pkS8kcBdmv2DgoVHDfhe8CYBubgEGwhJT6FxurYcundp6YdFEW2ado",
  "key9": "4BcH4E9rY6E2s8FEaECN63dS4hLYMAJrajgzxowKVfi92pp8s4u8fVfb5biGurtiv71KJNMSUDiqZME2LdDutvZJ",
  "key10": "4f5gKKrJ6rahAqi7NwddESpB2eUYbuR57rcaLjXx7gEwshfvGuxgQztLfWVwYgetEAVz6BW39xFwgeNs8HjqcRyF",
  "key11": "ufMPC5CUG4YcAge2xk3j5n96vZpKGEKp8fhZyJQCT2gxRs38evfGnXN6M2B5DUtopXqMcyF2savgqy73fs1rjgm",
  "key12": "hSUvbQaybiiqzoK6WMXD51GALG3A1VMUqhzmCAguZbp1622sK7uTGKWYBLGeHWYecYfmA4rLhhgp7uvY5weLc2C",
  "key13": "5zSxsrfxWe88KsB3JoiAMtfzuK4wCVPTUEfC9enmA7okTpaXQVKAPA8ZAyCxUVH6zkwzM2VhEg7QuebrE8XHDaNZ",
  "key14": "3uqDW6Ud5Qpfs9k865BdLX77cEhd1g55awvTb7ECe7BP3HymAAefT9ZfCk64m18EWEvEJERho5UXKdvm5gNPD3YN",
  "key15": "Pr72juTFwD1faQpyiV84DZ819qVuGejvyi4VMXJbYa6k981e4V5E6oBxvyNZjTHN6FE1bvkag9BNGm7ZnahAy27",
  "key16": "2vj8qLDK3zaRVkRCwaWxv1KVyE51aEg9bKemSmjfjimfMCJF5K3QCegqg7kARmzUwv1bB9A9gYyP5c9bLhaLLptE",
  "key17": "31yETajELkdBim2SoKrKYJrQa8ByzYLn59h8bEZvach1pqkdazDgtjFf4V6nfynRDkzuxczaZPdgnyFzH69shshE",
  "key18": "59GmCFzXdws4vodhZasSNt7J75Afgwbj9B8CxL8D1T6kHhRTS5fw6Lsz2NzSzJgemRJ6mWSSHvCGabU9i8mCsynv",
  "key19": "5NVRfzADf5jbqpnRR28jEQmuP2WEaqxxDYHwWmGHGpkgbRXkDycueoVmjXe3BRwGacsBdYPDiDs74qePE69mpzee",
  "key20": "4WK3QstZ1CEvxqLAhDFdTsv2kqpvsVTc8zUvYCP1NQjA4k5gxSPTWLFRBZJXCREBmHQB12JK3veDE9oUjAVP89fj",
  "key21": "Wyhd2P2L2pizQJchbwNvPMaqTcqYSuDtEDfDcKZhBNmy2Gp97J7Rcjc6EEhWGPJ8uSt8K63rnJyioQLzgyPoLLB",
  "key22": "8aToxb23xYXTguke1n5PeynQuWjVhs6uduPKEvauZPtS1BsSsXEKRZFZRW83dwRNfmtuoeGTCWnq6wFkQdgZLR7",
  "key23": "3grmvk3k6tFCFfeuBpMDZwoZcpnTP1GKpioWyHGUumBNm2g3UjT2a4LkPwDY8yR2pVhLxUEiuhWQ1d6J1hvxyCSK",
  "key24": "5rBL8w8B8iS4PWVRfohao4UXHHGiGWhmyuvtEEHoVH9MU4RMRyaAGLHyEBBvubnZ5HFFSaAfhRMQG7vmmaTtW1bQ",
  "key25": "3ZvxKzTFV4K3htBDAC8JPymdNtcWGXYpBGYNv6wjgrxsGftd1dEUqvUnx1WJqTgGFBMTsd5rzAztR9FuEEVEPL6a",
  "key26": "5N3tLLNdvLq67KhLoXkeK9bPJdGSnbX9RiJQiSowqJSgg7vBtvsqVbj9PvTYpqBbb9HUq5GXhxmGBSBGCzCuz4Gc",
  "key27": "3vMK1XspMXMDGx7DLMVGqLgZWKbkYnWmak9vUYWGnrQYRQWp92msQYLXxDr4qRKPoZQga7rfyvmcJefBMg576YLU",
  "key28": "Y8qVy2iKkaMpi3u89egASMqS2AbFQKk6N3GPqzeEsVFgAagUTYggXnVRPJ448JwBtJh9WLQNY4CZq3SsJFot7GS",
  "key29": "5GV17e3nR8uNQXDwN8KFczRSQRMTF1v4RAm98u35dfwCYVauBXM15xSE5NpTSyURvnXqBXUh9ZgMwik96e3kfdSF",
  "key30": "yz1cmrhGPrmDGhqZPyYkvepgdgwgzfMKU9NSeBrbcFrhNsmNJGNYvKwduq5aQ2tK95QvjTTjDh1bMqJcMtWB3rr",
  "key31": "5DnFnrxoNwVhFAtXomzN5S1n4crXjPjnZfXUNy1DGDbcPUseKKKZqdt6wUmFXygC8DK3fewpqZyXFiv7fLDzWsqm",
  "key32": "nMvhSaBvi2nXoHzUZSVh6JjHD7Zkka8eA8Fs9GDvHCQJhY3UsExW7f1ZVdfAF45MsJDXc6XzAaxAauBvpu7qjwB",
  "key33": "53LQC8EzYhiCjgLCtNoN6KQmCnDPSkiPCt1JaHVPRPSFX4J5vCtdBXuMRKFRtC5P1vC5rhBMiQ5uxhFPX911BLZk",
  "key34": "XoMP9ZkUmvLYxvkteptvB9gGfUoFHMpHcHpBMZdHCgLdsAW58MhKxd2taHAdv57qdJDDkywzwTcLuQnMcRABdq9",
  "key35": "3aPGtfS5qEDMvTLDGqfufQ4waDDCaYq4r3nnjTzC49Abreba19MJgBTGvpPNjdZE9wS3tMz39FfPpR8qLyS98ch7",
  "key36": "5e2uQi5bu8aH4QDwxLXH2ZjarmZ5SKEa91uVo9VEDfJrR7NsJwnzgiJQkXk6dveR2ea2PURPfyTSoNSrWKq4raMJ",
  "key37": "557WJEdf5U1ABVew2v3X6RWrNoDPMJnMEvPEa5LAsrWvAfLVURG5aHfXEUX96sxBYPoscVdJHW9CCQ8rK7SzTVsw",
  "key38": "ydYCs8xtev8wYpVCKUCbyfnTvK9noxtE9ME5r7PBUg133rHBieK5WPZB4dLVHnXnXtEmVZGse5RKW6N9gAc2bQk"
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
