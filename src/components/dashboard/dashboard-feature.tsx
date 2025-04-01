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
    "4nEu1R5QvhswPtYQbB8HStec76nrvRW2f3eRhwEupYow8hUfyGBkmRheoqTjrMJc9EmEDUk4B6mZGfrabJbYxXvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sHrmxKvJNmPmnXfZew8FwkBMQXaYnoyGSQV3cYkqcwqcQidVcz3hvRYvR74Ftiik1bV9pPDKsHAnBKDNmkFiLCm",
  "key1": "3iAFPjc4FffLxrtKfbThXNJJs4eGrzKMWe4HnmUku7mfrvbJbbVfHtBn56bNCUZ9QzG9wHT7cStDfWQDKHMjQmx2",
  "key2": "59GnDWCcxLKatMfV9ZskfubrXZJ82MdpkpfvEGaWg9kvBF2FovvbpNs7ECu2n9kVFCWmM8VxXVJdSPcvjFQ6zK6P",
  "key3": "4GbnGmcRntTma75GFxkgAGo2o6xWaWFLK2bcjrBPtBnQ9QxWnwUBvQqa6mhZgCwdgGpHEYkrrQAWmA7YVfpygzBH",
  "key4": "W28WXLg5trdZEx66FTgqD6nqMEX9mjgf5JXo7S4cTehdw1AUtPHjYAiE3NsVEH5qrLJrMS4exjtMTry9WNWYioz",
  "key5": "31UZWSnaesnbrb4z9nzv1wX7ufbZCedxLKERTEqm4wjTthQr2198aTwvxggs8KSGvba1iineBZfjELUqNwvmL9gB",
  "key6": "35n4qhsuxKmiBD8E9Jggt13hH6ghmL8cpr4AReEx8GKkASq9Fzb5ybdrrNNcEHkP6UhMNVnmSAao3zMCSSKFDjGX",
  "key7": "3SC47Wy378QmpaoLmw9Qm8cziX6vH69sTMMQduAsPyBnc7y3EoqpCaPG4onDxAtv9avm2cjNtSxwKonVqywSx6n3",
  "key8": "23YQ5N43xu2FwQsJaybqW6vmUQtwWCpXHcpkoF32Z3fMWpQLUfPJtpMF4fTwHgnkcPyTZ6F4uiCj7pmqxrdYPLB1",
  "key9": "3vcmBANxXHakDwub6Wj3XvjL5GxTZdYEMdtCnE66Gm4stWm26x1Mfm6P6ZXY8yRnXQa53rjziciEDeDpArkRCizc",
  "key10": "4veoRwN1wSivB7zaVcHWowyKKxZQFQEXMoG3298XEGNdE954xENrAXoHZ95rCdwos8cBuDAej5RS1Hts2s8gWoRU",
  "key11": "2ztt75xJkkSUE8wqBeYH8gUuJ8XJUVrNPdpgSxHvMVQFzWedjowMDr4MNrwj4oTwYqDcWAVq5LgRikAxxyWNibUs",
  "key12": "5swhDc4NYaBginZybKxWpE2TNXBWeAvhMLQqkBXgA8k8rjGa7pQhuy4H3bC3JrWGtHFrJcjyzyJ286AVwaQ7bGLS",
  "key13": "4KyEJ3e59tCLYoygKVKcqYDYxpb2kqv3QDeewNxNaSeT8whNWeVQK5Pep9JHj6xsCJyUqJ7PeiBmGDg8EWGSsmZk",
  "key14": "3qMDt2t73ztuarHYJHDJwzUvWyAb8AqTdj6NghRhz3vqjvG5SEQzV8oPH42ePPaUDMQDjisCArwv2XysjdWJZd7Q",
  "key15": "3A1frGrnjPGPAd1GRi33uQZ4FDRUH8edoEhHHsh7oBFi2aVL4XB74ynjqtywPaVRcN4ibKKmpmy2xE4PfJSTmtHG",
  "key16": "5dsYrgi1PCksQRzxSxAuKSoRYofeynRFADjgdWEki2pZPzYZnrCoBNAqD9xv7W5cWUCYga6FumhSMcVHhmsiTQnb",
  "key17": "4sDTXySJBggE2p7Y5FSfX1aUs82ZTrm2yP8rKVgxUm9tUyuwxp6zZ4GduGMX8sJ33eMFDbJdnaiZ5aEyt4h6kHKo",
  "key18": "32g58FFUZni8qJxuxrJrsRyGr3TfTwVLV85TfjQAmeSKnzuBSZ8D1krYbd88BQ75nbpkJ5YzYxwcPXTWXmtRLniz",
  "key19": "4zqH1sgNE7WwYY8eqBaA3FTJ8HgyCc1gBo1JkrCSXgxVZ1TW8tuPxTGyJTiM5TgS9BcfrW31G98gSyqXYvvbd6kd",
  "key20": "UK6kpRkzgN5Rw4MddFpss5LSEg2N4UzFMmNBfxfM5tdSkAgx2GWG76hv4Z8UsXrMEXDPnADz4HN8VmAubvnEfGR",
  "key21": "ZzSA1iWw7aiMnwBxp5D77vMpoAU4Mb3YR3S4aPvyLgKry749EKxKPbvb7rD3wnhZEGuZf7ZPMx8Qoy9LWQhpoQP",
  "key22": "4Suj9T6f97bEwqjkDKGiUR3wMT3CMGRE8jzMjZpoq9UvvrmfHfxPSgoKFZvZWt9BmYzYKdhrRuLQD62NwAGqaC5S",
  "key23": "2FQoHjdK4vB3TU3bKKd2DjS87VLjah2YHDXKKvLNWy4iqX94BHgyrs3RNU144yZfoaJPCqdWYqFzqdQSQiFGvWyD",
  "key24": "5qZcBze4sgeqi4k9ghjey4XaLNfWMqRnn3r2kcpDhoqUBNakkEtBgfRQwZRxAfAATnQEjcGYJQTWoxBauhB3VKNk",
  "key25": "2W7rSpgEM52B7gY9d1sAzeAgsRRAC3EqHDbtHYxhc7F2vUzceEmDQmkvPDbDdwNKFSAPraBSNRFFJZcHhArAeJ1M",
  "key26": "3MwCPLorUmos2iQyQzrgqGWzJ3fWMxJuQxBdphfYpmSbmqZkCTDvGcEdrVZMQmr1Sr8LAwSk8SZBgF7aVMR2v9mk",
  "key27": "wmFQNR9WSSqKnmY4t6MnTT3r2wkkeNtfWCL8rq3MdJvVbaDE7yK1PoMZCECZ892ap6DeV8ToJcJhkx1qCktaahG",
  "key28": "41VtNWmNVMaQT6GZhj9ro9LdnGJmpxYWPP3peWFSGSGCCJMD9jSTWb1S7muFg5QLxd8CXC7ZKY2xbLaaf9JQAyjm",
  "key29": "4GGt3bjjGXQ9PSj4KzSXnyLo34Gvam4iHi4Z6ge2LowQ3rJ5MDSqCnBQvcqw32LvNSG8BUFzofdw158mW5WwXSu9",
  "key30": "36aSqKJug6nh8p37zKPTGFai7McfPhZy9xSewpAUqaNaB4NzG4b8MGeCXeXQrou2GBfWJpiZknjQaF7Shws7K3ji",
  "key31": "3xnnpFeieBQgm6thRdaKHR8tAv5Ps1D43bKhrBMxvV7ik3CZMe1V25yu2Deuv8ZG6o7HncN2m9Ka93q9HF1Wnc6f",
  "key32": "44ZGgjE1w8FtQ5y3e2Gu857euw5xDs23kTSXr33Gc5QF8wdxBsyrA4eJYfkmA5L1711Skd2sjxqFQ1J5wHHHBBUV",
  "key33": "6VEa7LzmREJq4Zz3NneXPFDnWBfNavKXsLaqfi28Y6tgHu7Q5vLEKFjpTkFPZrUut3H7Sc1ywQgpGqZfFxeFA5i",
  "key34": "4AMqyD9EkAvo6fdSorY7W6iNJTXSW42BsVTM1HZTqBv6hThECHHC1uLNvxAqw7BL8FmsSF4y2TpZfnBabQSXL3ya",
  "key35": "4cbD1BX68LWPQBPgrWVQCbLATejt7HPSdKQ18c3zfYRzSBCQf28ZdmFjrfxp7DxrqpGKsYAviar35T6MGmj7zT57",
  "key36": "5zikCNyKweqcRn4G6RpPjTk9GA96DtK6fQp1dq452dpJ6krit8DL8Zi3qsvypUDQ7QSShRY2gpgsf3Ba3aN638sy",
  "key37": "8h8PFcwbqiGGqdgj2kCdHJJCdPT9GQJ4AerF2ajBnBNrxkXWCPrksL6aoKKGGfWDNiydww2XphdN5jWsNoRZPJz",
  "key38": "4dkJQ4FMfb9Coj9VdM5JAzQLi5WgHfoEsgwNARALFfuxg2DFVcahvJqy6j3K93kjPuGo2KfpiHrBTbJzpoV9tF1e",
  "key39": "3zR95oV7NCDofUWAZ7BafWbYSsuhQ1Gqz1e1a9EVNPdG6DB5P6BLvX24qMQfooYPZ5CiTPYJ8kZjXyVQTFy811gk",
  "key40": "GRVbT89jiTY5gwSRC43XPFA5E9bgjUWZ3i91iC4B68nhxaRAL9vRMmZpHRKN7GnU8H1BUwUH6T9F6Y2BUfjT3oo",
  "key41": "4ZgBg5gak9qEznkfKkvACWfyAndQLLQy66fmYzAh9HHHKoFWWv9TcphrrHx8oXj63GUAEndnASs9vDRqorg57cRA",
  "key42": "2FspGqMdiScT22sYk8jSSh3YXHEqnPEdEEjqizg97FKVAc57t565vbo3v4ogA2WagGy12mqqvXajRzgVyQQVFMkP",
  "key43": "391JnXA1TRoEH3Yf17Rrkje7pFU5ngXtLydo4XREwqrQSc18cStq5Qt9AXXjhKqAUVAGg5SS2rZ78tSi67VAJTsY",
  "key44": "4S6WoNJjwkQrCLmNKa4wGZE6oeC6WGsRNEybDnJooH9KFCMDT9nZvqkJuF7iD2FzEDZPZPUQgZrcGmW2xGKwFurm",
  "key45": "2ERkapS7ck7hWKsDptQBigNKA1jbPNPZbDHeQcoZbKYKqrreae55A4nzHV3paz7hzD2DbGrAbiWPqFSjYt3NJRkc",
  "key46": "3GeEpxgK8NgLQpax7BvRyjZhd9evFjTQod2J2h2ZoKz6cNynhPME5DV5mqV8GTkuAEBMmkbsirybDYyumCE1x93k"
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
