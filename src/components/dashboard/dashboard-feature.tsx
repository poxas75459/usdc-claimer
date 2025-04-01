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
    "4BCv67y3BBVdNt8pxfGaop6255chpsGk4c38d9ipb4Ahj82AvBTeHRT3Y24ZdpDNQ7V8dBpv2BTtmmbknhCAqZN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Af8GjvvwtFNB6fzvya6Zz9RzxNZm3R6P3ZLqdcwzvMuCw5FqQw4fKvY1tk7qdNu3fGMYpNrfVmnt4JGSkvGfw9g",
  "key1": "iZuuegHEyYfuGMs3hbMMgcDgG9cY4U3J4M3yEQwBBH3iBXGivS6aiBLw9J9pRT9NdX4scLuByB4jb6Y5puHP2My",
  "key2": "3gFRBsgbFBXSLt8Gz5jrhs8e7YfMhjJGWvXgHMgK5WXy7kHFWWW4JBmzjS94dS6chyvDz67xD1PJsHPaJeKXK1z2",
  "key3": "33XtRWEYx7MiotmLB3TrKeSHuVngwB7SYgYCgn7DDr3ytKguVLpzgtUEF82QJF632X66RRnkVHhKMNAviiQdviF2",
  "key4": "6SeRJ8RUUk1zbYDUZqwgmi2REdPbV2jujkxW2guvMiZwAuvxkNAj8L9mQ3pBWc6LWeKUYnqPhutdAAit2nhhRbx",
  "key5": "4yysQywcvbzuHKs2nveb5FS3gWtwhmNwNVsnuwoFN5B2gne11eAwRkd3ZQBRwJMTG1QzVepbjKwFois5JK1iZmR5",
  "key6": "3CN4fZ7iCeyf75nXcGis3FWqdPDUkqzMYSttJsBt9kWN8sm6hWukKoJQTYdeVGdinJwA32Dosu2nRpCuri6HAxuN",
  "key7": "39GeHpXajQjFyCysNykfoMh9JaRKzCMXGE5Z1SU85vhJZoM3y2SXAzZ8c5tF1H3ERt4mpsVqAxP9qtS9FS1UBqg1",
  "key8": "gkBzHDyjXTFjuKQRKc8H1HqZaDV4p24Vt1HgLDDZtrwpggJPc4YZ41DzRr3s6jzTAijjXRTihrpQDAkwbfjBctr",
  "key9": "55B6Kb8c5VLebAdmMkwxdUj2saXG2mv2rErWGDJk2WaLgj9eVZ6Zz7kHHBdAu2hs1krNYA2z1CgTcSVwfPj9TQtK",
  "key10": "3xtnLEc7tzuabgEwZc5pTBgyRTrfh8ocyfgRto9infSEWjv6KPddXDA9ZCNJyUjnHS62P6T74AhncKfFf23Lke5E",
  "key11": "5V3Uc2EvtACNuakPsmgkMF4UPkZAELmkGR5iqpmXukwfgS2UBBujXcsvoXB4MtybUjcie5UPu7BWtt17yhMt9HVX",
  "key12": "3qdVaW9bid4YcT9yqRhX7jqxijPV9tcgVYnxrwPMfR6zpb5TeZRq2eib4yzzc8dcC8EzzLL5SguDXumVkx3q4uKz",
  "key13": "2qpWvkcNn6RUxSy9qysAhviG6TRAQzMf8YhpxGnUFfvGV29XtRwwFDNxZmg9xtNQY8Ab1b565k1B5SzwXVLwHD5x",
  "key14": "5f7af7GREEvQHod8vVUW6H46gm7n3YoL8pP4VUxwgof4yNYQuxowDQSsSxSNRQquSXRQgkyJU71q9bchS4eL5H8S",
  "key15": "66dvrC6FNDUJAhtLPYuMRVddgj2MbKLEJYPgTdxi2Un9FHmPaixHuEXXGzU66taE97oU84Dfc2C131gFWTbBioKJ",
  "key16": "GxazmXacny9fiL8PSiNpBnLtqJRm3jerpJRaq9KYxZWQCTSHa61jStcbFVENRrkzQSJYNXgFBRzSbNBiWo15ev5",
  "key17": "3ueMTXZtU7xuubrPTwb67P8EhbjG6mxYo2jTv9CYgmxkRkq4JzBJoKtDzMaMn5Ho8RNdQgnvoPSiV2VmnQgf1PBL",
  "key18": "2z5qPZ7WriTn7gGnytvs7Ur2WDxi4kYftXAVVuvGtt1KKrQvhFLiUm1qwS6shcL5XmRVTPMfwCRTAj8LaAh89p6m",
  "key19": "22zs533kxpCkizgAN8UdgwZD2MM1kw7BaErqGvmGRyb1vvwGgwkUmvEqJoPJ5tBBiJzKbQXVsxfofEGrXWhoNE7o",
  "key20": "5FeQphWGxyA5gia7sZzP8KWa4vyEaGGtFeAuowXbHf16i2UwAUvHf7LwCSR8TaywnbmUdjH5iBCydPyDizvh5GDq",
  "key21": "38FoBZGfxBwuLaW1ThHhkDRtG1t6Kc41UJRF5quAY1oBcSc5M5ikbu9yBj54FHgQTzrJDrLzx5pcVV4VEvj1b6up",
  "key22": "afNLYMAn53pFo5JguPnGnwUZxFz6n44J955S5fQhsVgq4mkiGniU2T6ZDCxAbq4MoHXmU9KpLdBo8i5BtcMbqBW",
  "key23": "5wiuZ99BEnzJ55ANjGyDG25WY5bXVXbHEw8qJnoFsA2RTgaRZDLyZG3fDj7hFrzidt6hpN59GfQYd5zjwzdK4yY",
  "key24": "5nYZd1AiX3oiYwJz5rewP3qqgkR3vWxPwBRjmVNq9mmXAQ2FaSGwD1JohEEbK2sfTuKLFRGKUug8e3GVPc9nAQNd",
  "key25": "3u8HnnNaqMgDwK4sWkU3r6PMTFfu5qANf6b4MrwtQJCRFtoqXPY1VD3K6a43fzJpwvqr8bLCvrZd9fwgu3dUrXs6",
  "key26": "5K1zAHTN6MaKtW3aQ9c7SmWRXzgoUxW8ncxScbuqDXsFptaU2FbLRsb6FuKNY44wWQ1zfab28V8Wg2Gx1nzNP9HQ",
  "key27": "4z7LaHrsktB44KMKz1DYjhGj5pfDcfzRvWUznWjNsypz49uTPFDXo8HW8LmZ3sNtmMShxfBAzGEAGPMxgNzu7jpt",
  "key28": "5ggH8F8yw1matVpE1iaXKtVCUiyQzwhkEhMnUyDALripHGDTQo74Rn4qBLGeGBuVuBrzLPwY75drJh5CkCmyx71E",
  "key29": "5492qixPh6bQMzwstw9AFUHcK9NRZz7MYQKgizTywTtngmDxynVpduVPuzsmuVNk4jT5djZHHyEQUGkqiehxhB2X",
  "key30": "sFJY7sqxYB8RMop4em3zhg1jsBkVszbjHkEE9J3Pw9c2z5Yg8wYoRwEa2HvMdZ3txizfVyds36iQEEZ45rDbP3t",
  "key31": "2Nu7wrrpw45qsgmEunzCDmi5hRrTcVA23mfTYdGAtiiigMsscbaHdjvbWpMa2ycVywpPV3YiCmqBk5G9nvBQNLmG",
  "key32": "4jzESzNTKrLwgiobBg19j7fkzkkr53yHdfv6KtvLoJysu1vTov5HLkKyPEAjtK1xwEn7UiLogcDqrEu1zAHU4DBE",
  "key33": "46TUdEHdefs7sfGFS9EMdDLjUXJcxLybV417xpJUj71zGM1UF6JdzP3ihLc6q472WB22VATQByq2U8uNVYBRugzk",
  "key34": "4oPF3DVXSSxQ1SRstrWQS8WBjqjX7atDDrmYrZUGMop8rvWucSevPuBZHhvj4cVTCdG7Tvv34NUFP34mK3Y8H6wz",
  "key35": "3SFvJMG2RWcBgLzSfdzZ849u6ktF9CXgP5W3YLBUquoD5C67T77LagRf776oFHwQ9ptVXWra814GWm6hERFtqPUY",
  "key36": "3o2Cab1abPdehbs7jPjW9wSecu9jP6zzpdUBN8z7gzbc4ikYA9KpdCgWHZ4Nx1My6SMmnTvocj1qnAWvUbSf7MuR",
  "key37": "4CbemJvamw1pN1WBx1LgDT9cb4PWosJp27jnim7TW7vmvbyobWPRDsMWjfJww9zMp8fQe2xqGMJ8sTpMtgZGm8M1",
  "key38": "2M2e4tMvjQD7P26SKpWeH9ZNvDA56tRmRJdo8t5XqK8b15vWkkE8xH1BfUFg5ce22XAHp9ri7yKjNWHaQQvyY8br",
  "key39": "2sQ8qq4mW2mBPMyJ3KtSfG26FDiMx999tzn3ehyb9FR297AjhY5kDKLRRrBfQdv6zufMPW3nQF4xkdgskvWErvZx",
  "key40": "45nSU8jr4vbVXCnka56krbFjfmos7Y4fUCWtReciQsrbQPyBFePsdUjHXSpJdJV41gw64oXCkeWbY5tpGaR2Txio",
  "key41": "LcUxUGRk1gq4D6JNKJARVL4jVX4Hxr255ohcQTcgpPyHvgBzd1gBYTA6MVtowfo6tc8vQq3xbcXZ9ThyisA8HpP",
  "key42": "5QEeiXwSecxfhHNCSJ9RQwDscdnLTG5tPrvC45pwiC8m9sjTXfruXwMNX5Kvf9NyaZLMtYwoHbFTsnVik6GMxByz",
  "key43": "4rpPiLxVWYmqT32ncvPRc2cvQSXJXg6TPGMmKHqQ2S5g7QcfKbBZeK9uVMdZoLxNGLkEYJYGWc6cPbd5CnqPRQ8t",
  "key44": "PocuSi27WCh3YDdk3yjGgLpTju5YDLThGiSRAqza1be9hJ7XCEZ362CtnYP1d1qNYcUwTJvoH7uDv96HK8knnzg",
  "key45": "3WEYKV78LGms7w6mDhPgMM2pPqzfBuw5rR1nPophPJ8Gx43FkmwauHqhec7St8fdEKPHScV6fH3HjWhJC6GMxyGm"
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
