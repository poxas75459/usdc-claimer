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
    "TFQ5zTPfg6KvvRqBREZ3cV3qknyoaAXT6Srkz1L5WaPKvGYtrVctgtvo5F5GoHfujfQWvwPWEXrEzUqjNmHgxFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PeGcnDL6jg6HoooLXRLapvJbVKaoKrjfwjWjbVPaHmwz7LqiAh2vbLbJrqGFcZtZaX8fW6Bt4sPgEU4kaQottbF",
  "key1": "4od8B2nSpwXW761JNX779apvsfFttubV9t8Uyv8EUG4SEFyN7a5StqZpRFChTGwUu8S6ZFcN28qNH3zGJsHYDV8K",
  "key2": "3R88NZQYYR4DKnwnK4f6yssZeQ73bSizS1xnxU8u3kRkynCv9W9FK6sTsyvbp1s7J8JghDKGx3TUYrEyttziMX2n",
  "key3": "5Sc6QjhKz9vXYpqPypurH4UpB4QyvnAaGJimLi5NAM2S6WELEKTTL91cxCmDMkxhk7Ccqw52x9R41xZbiR9asqLv",
  "key4": "4H9LbN9AbukaxhAp7jnBZd6Pm34rtB2SKKi3Z4oKkTFX42aczzya2dUPyk3aCGcuHAqJgESc7WgTmosychNMVyN8",
  "key5": "2KEEqenSAguqdyTnazZnucqXNYYUPUr1ofcggZnSiuSMpM6cPqtgNd8zVJAqF52HDKjpWbMgX8SpYSuMKVw9C3hX",
  "key6": "2nbZyRn1z21pAEpYrGGUUQamq27S3SuLfzS2MJogzh3RrKujKAzyege3ab2rABueW35xtBxCnz7Wei5tFeHiNf8o",
  "key7": "543wF5LsDKnCtiFEcGopyGozXDPTTM1n2XtsVXwWEfdyM2QkPoY5o7WgUS8zpchNbuZNDJbMFL34DZpza64Em7MT",
  "key8": "2vk3AT5kkzxKxfVUCnakhwVEJek2Gb28AofkVteqHuiXqVpZVkEGnNbyBh6y3BuYWDzX3bWFCNUL7YZx95fcXBPb",
  "key9": "34V6Fd4nYCRpEzE5XZzvGAbv931joVxGy6hVnnqtFeWy9W2RGgVRrzDFLH8nibnCUwFnS65YHXYqwzNxYTwy8Gpy",
  "key10": "3eE8W5F3in4nGmENMJ4395iLCbp68jRpei9qTiMXm3US2cGFgm39LDDMpSuQdXsWbJFZBpgURHu3WSZjtBaooyuy",
  "key11": "231ooN5fej66ArM8tqwFKuqfp59ZSXaNJHXLiGwqA3FBeQps4Qyeo5kYow7nib6wvemKQmyJS4FLTwhagDxACu5m",
  "key12": "3Q8FzLCJCPMN6xB1XLuwmvzRvcDrTme7KL8vEqaykPocap7fR25b2RpcSQLtCQxHo6hi2TRqVjoQ7piRSe56zHqv",
  "key13": "ZP9RuV1JXnRb46CuuWF1Y5TCvfoUpdcJPJ3FGsiiX5jvsg75YT6kpTu3aNwFmx14o469X2uST4McNuFJR2Z4Py5",
  "key14": "SNPVZcV2tbxUUAgfU3oi6fXRzLuuzwgG6V9ARrzfK2g7EizX8Zp5cr2ZmPt6QxGdpUVoeqyuwfRsSRBvTE5TMPX",
  "key15": "4KzPDBVFSCA8YNhxhSqu5jHumvP7cgv5MLWRzvgovMkHhjVPJsvnzpUigDN6zwquCJbGi4Q6zCyTKNq7QbYHj59g",
  "key16": "5e3ieJ9ujvjwJVx9zTGFWnuFNw7WcrN5dS5QRm2Rz2HT6TcByFEL3mrNPwMeThyWL4Pyx3fcSJ1w2TmGDsWDRKWL",
  "key17": "4E7SZPy4vSPGBeNpXGSXnybfdk46UbUXc7PmobjYVZL43SW3Ut68oHkAmD5CH2gQA75VNEE1SPtXCL6deUVFuhWS",
  "key18": "2AeG5Ngq7LPCoWBJHQsBWTgdNGjPyTesunowCryHaWCdUs1p6eQTzcnGQ47T266WXTrAQUfUXD9E1nXoqRsyUE6v",
  "key19": "2GTrbjHXkRVXBuHTLR9wn52CaLZGCRMMdeBPqkgffRzDEdjVEBTJUqB8yWqvabDFon58dCrRvxQbwXzHzgmSbjx4",
  "key20": "3yV16kiuDxQvLmPKvDj9WEg2Bn2LbKgeqnnjPNmzw5tn5MJu8ENSJzPzSSGBsTF9yfS12JrvikXwsi2QXCYpDNGH",
  "key21": "3vXdLV4CUKHY1QZkWLCP6Kcr73FRt41gkaSZRCYCemH9RmvcjrEo74Nsark8inktwTgWa71i1sD23ksFfxVtkhvh",
  "key22": "YmPH6ASZiiznqzdvaUdZTvYWZsvLpwZC9o1k81gbBQL92xiUdeEpzVFpgWPGG2PYH4ecKbDGdpJkKjFW1nZ8cr2",
  "key23": "24cCaNVTjEufCuutZkxyEtGcbAQ1VgMHb6mNV1eMr8boR8MkM3NXgG3UDTXxddjrz7Vpi1ZszxpnPx5baiLePEaN",
  "key24": "32Vj1NgsWetY6i3z3dmsKwcqUn9tsCZDbxF4654wHxKfZAno4p1jGZpN8vPKqNVRjbN1KZ3vBLW6umdhyBuKzCLS",
  "key25": "5vJVqVjYhqzjoPjsfihioYBv5FAik1uFKnj5i4B3UBmTg3u9A1EE4Nkvt1mKPrAZC6bjpg67LTFtSdBWZ9q6boXV",
  "key26": "FdWLyM2N3T22oVemQNkXcZ6yqGcMEWxYEESDbiYxLKxsDSJdo2wjNiqmbP153BJz7oxvpUQRK6PEnrLheMKeyZh",
  "key27": "2JhEURKwrZre8ZDg3ffkfu2Lrt8R3tpSNxutLuYaYzwZx2Nwc8WNa6KcBYJxXANLZiznmFmg1L2cEBhJtsUAq1nA",
  "key28": "2MGTcoBN615aPPe3uY58czMWTiRU1maTYayctd9XxK7rda7GfVnWiykN4zYDoEEYQ6FVm5bzCX9HWsXG8i7KKmbQ",
  "key29": "3dW8XPniUNuLfJimtsm5Bd4uWcRhXPC7avttjm8RL9kCuDfvLadjGor1bVexJ85p1qEmLDwNoXv3dq6PyeegRoWv",
  "key30": "2Mdg7EWKZencwuDHcKhykojgxS6M9X5gK1QSF9h1zcez7mVEGmJpqyCUTop8ftJbNSw8moDchPPL7CsTzFRDNuRg",
  "key31": "21HNRHfUksGHrCLTeSfxmVTJPAVPazoaexKcdG9hPYCkFYj7sGR7LhUWxmLrpeY7stouh1ghok28a38654yD3FVa",
  "key32": "5xDZgoyoeB24hB82fNkBj4G85HfwVNqP2Pqi4fwwPN4a8qWkvmLn6oMQPib8DQMaySY5AfJBUya9m5YAKYLJgdG3",
  "key33": "4KPrr2rDA9iuCDerZcoZVMzzcdCuLFaGhPn5cbod5eNHSX7WZtcjazxDesaXSY8Z8f2ti3bdjCcE3MHQpBJgkrpM",
  "key34": "sz3BiqZ69vk8TxGXTu89PC5Wh6JkjrgkUvJciseXL59jGzZTbUCMibL6Tx2gidSHT3dy1nEbP1a4LKHqTXQkTJZ",
  "key35": "oUTPUpYrniJsAGkskXzRhXj28QGhJZdH3G6UnPw8mAsmYzmtXoDGaKFi3LgoPVctnRfB9tLT4bZQKuEYYA79mJw",
  "key36": "4gmKgKh7u2F4zwwWcgf4EhhKX78cSF6cfP4YEKiqjZHEL6HDRRe7UYvPtPdzkyGGBoRtfY5F4pPysrYakqXmK11u",
  "key37": "4Fn5W7zUGRMJiuLbeV2SGUVZjoj71zRYyRrqJYM8pKwWDEmJi2tW4MEp2F4t21doz4oyJ4tUs9pZ6gQy1V9mAZR9",
  "key38": "3Az5jLqKsfTX6yaSfE9v85jtoGRKtBrBSzLNjeobYqUsxuJsMS9k9t43MSsqzMTq89WwBNHyu8WJ96qgYLcepqhk",
  "key39": "iscQtBJT5xeKP6HRbfw5LCZej4Vvy6e9wC27tRABeZuFZzPxQx1JVWWeV7VaAGNyEFohyZjTUmZc8XMCLBaTAZK",
  "key40": "65vAuft9vKbtr65MuYPjNBS15pH695VGcTDCX1fuLA74ZxfPhZcfJooHjY697P9aHxhyeGboJtpWCG2FFdchn7cP",
  "key41": "2zhMfRSoTU5mjATsy7u4DQyFJUFHsJ5Po7TibgU6JHcWeTc3UTLdksUoH4LugqhwnyLrKbf2ryvmKvQaTNG2D79X",
  "key42": "3YBNxHmdY7AKthJxSMrtEiurWNRXTb9FTLsVQ7QvcPoaAtU1gQ3cL48Em57a4sfPEUwHR1rDcbjEQNG1HnL956Ku",
  "key43": "36kvtW42DiPqru2noDkZWdjdcdxnpXMwR4Lgi2emBhjYBzarf7tjUaKtU8iT5FV7ZzycUQhyWE7YQMnsk49pTku"
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
