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
    "5DWEwu1xY9WQxHd6QjXaxGJ7mJUJatHXRXzRgDynteZ3jzd5aBUsf7xnx923i73xefQJAmJqHGv9w92miHGQKUmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gtT7nociFWvCjaQoRRdcCK1oUtRy8yJRybmioYU5AhkwQeg3WXWfyKtw7psrN86wjdL7wMRmbGiCz32Jz5NmQTf",
  "key1": "26rEHKm7vcNbLUHV8TfZsknwLKtkD56gd22uipyZ6AB1AystADJAm5k7FqjWtUTNLeqFqqAPaPaUPW9vMfvmihzF",
  "key2": "3bYWmWboBvqZyqE2MiNcXD72d5cv5k1SomqynCL1o5aAr9wHAxYHR2FhaG8Aryd3K5fVFnrcRv56PAA31JVij4sF",
  "key3": "26meHLzQwecMKMahSKCryYCEHsVHdUwBaWMPEdmFw1Zr4QW8LXmDNd5EtNeCx6yVq6A6MhE7RQSX8Ty9CsBWh2md",
  "key4": "RNesb6JkFL1UDMvNPd8Vegx6Ghtgau3EUoE1LhMois2Xmfc5Z8yb3qLnqDmNMCXJ6TyQrWk2rMTcLLsBr9c9quh",
  "key5": "3nTHDiA3no5DXzZ8tB5eoBXr99o8PJ2kmXX8wLTp1wjq6ER31otPCQhCSVpsaGGjMocNoM24Mnz9Vxi9tjgv1ocz",
  "key6": "3DKmyZUs7YGht68yM5prXjaeaaDzdDsYmmQNcTgmLrHsEdFjUHxdpY9JRMaouFHxBvEirTBpKbZX3s1p6Mxm776h",
  "key7": "2AhrzNqW3KK63pdF43otGQ3FGeDrarWsppoRgbjF3mENLmQHJJmwqLugGX9rjnE22Li4bfK5gMmTPCCY1FxVWsxg",
  "key8": "21V8XV8yzoGsZeSo45EAy9H55BLrQTphZqqPkvFKToAMEDpG4P3drMkV5tSzrUQbpbZV8zZK6ywaoDvjWUdEt3eS",
  "key9": "2gdauyowe8mCbZGtz4CxhVcajmHr1tkM96EzMb48i1BT5fMkm34DSCoK494BbbymRqzo8Yre6yCUTfEhKMoZP5db",
  "key10": "2rcCwzpvM1k8JaaxzmfMvCdqpQeTdb66ufp8xy9jY5gQXGyBb5mW1NjPeG3i8xgXpmMSHYCvf694MyCM6ipjbXHQ",
  "key11": "2AQs7JUEEvkthrBep4Ro6sDdcYWqnsVnkLifo1c8uGxFt8pRXYKpcq1gXuQBAF7CvxTLF85XQ68iYUnPZ4JnUJhH",
  "key12": "28TbJoBkRNAkUZzXfef6V9mriz341MecA5JnumKDqkz7p9xiUA2uv2kA6raWqCmDgWGateMUHqfiqkXKmTGZz5xh",
  "key13": "2owtcTAiKMo9v3qikWQ23iVY8Zfj16aeD3VfunwRizUoPJq1ViRCHGAY5pG3NH7D3py76hMQD5n5ToL2ZiXTQ7SS",
  "key14": "4QopeovU32EA6v81pft9U4Df2baLLfiP4GFj4trpx2bjMXzaJSatpVEeQSjsAtPXUCxK5AL45yKg9bF5pjVAMDUC",
  "key15": "2MBqsjKsoMrGKmaWeet8AKk5cAUVEavWBXJxxULvYYATUGsFqYkgFC1iTGy41NHkXBPd8XF4AJgJEceEZeYm2rkb",
  "key16": "5dAS54ydKup3otSP1bzghGhqwB5L8KqTmeX2zr1iATpaJxRTCZ6HDTozSwBEST1pARyuCQ7z1VZ3rqfYE8AsDZg1",
  "key17": "3p46DZLecKPbgiuHgqKHzx2bwnibTuJwHx2NE6b86GeFVK8W9CyBTrVXnqKy3pYW31u92XQEXeE5JNGD7WpukFy3",
  "key18": "31amWvynCutLMQqJcPMdcr6VcRHacaGQrByzW3Qv5D46V137o7v8zPtcHS6bqpbBgy99x7XKoRoR6tfUiSrUdVJD",
  "key19": "2DipY7w7NK2GT4c1PsgSFZEN9zYAziWaNZNEsJP63wP4Vb62gjpyCdQgCPPkQZsiHgUkzCJRmKbTFJnavAVscVTf",
  "key20": "23tUr1bmD5HHuWDCLA2ihSLiGDX9Y62zjvFGPuP3T8ejaoXotNQXFL1Jpj9aEvJaabHcHfTfNMPcJy4kLudvrZet",
  "key21": "3fTbYwfQt6LypjN2aTSz8hoKLNsKLYYrpP2u3w6R2fn1etZvRF6ft312pcSBZ6BazjtxAbdS1rncBcyPsADDUty4",
  "key22": "Pi1XwHeVuDxoAgxuJhkZcw43qyt6KDu6rBassfVJwaRZLqEBaGfRKpBjdEcpTpyD1aXTS9gyVDWnQHUQKhWYXzH",
  "key23": "5CAnL5LRSzUTnEr6scyNWFCo9w92V8RTTgieboqjrvdhCkxe2uZ91Z6imMbbbsrPVVhDNEoop8gyH5A2wixEjysX",
  "key24": "2jf9uKYYxF4PFqUVXqTw8SNySAcX5yE6VNeCXQgFHfMq364Lw5JPK4MTqJS5t4ftsj5CGYJAjDCS6aTGei3MZ64m",
  "key25": "3T7DqbfYbEExgZet8zEQs9EMTUCZHi14i5kAtp7Xh5aXznhfXekVXu5fAQHmfHupppkXHNUNdXv5KMirttuzp1JB",
  "key26": "SNPiPYWFWiK3xQYAZ7eDyD4KUt9dGRjEaJCSPz4cmsZZQDnonWTN6AGgdu75smgZS8qKK6NXu1fKHusgCEUMhcq",
  "key27": "4oNUoJ4hPpr4wifdVcNMfboYP5KPJewXw8x2Hmi8xCSUjKhW6QWg5cttHMh2erS4tLCZXgk9dJ1wn3xRospcLQiA",
  "key28": "4ttYsA5D1QjfVHqdEeaYGJWHKpYrMxeXj5acU5KVXV2jkeBGVuUUWZKZifnVTtka2dThciTJk5Mz4yPVDnEpwePi",
  "key29": "SR2r5xVNuPykiYQpyuxqTAhx5TzZuyQzsCbewSqQRqojAHN8qYfaj57zNReSqgwHk6tZKnMXaqDsQDc4RNoFgni",
  "key30": "3ngUGGwjdEPrYbaLavPzVmfo3sF4HQsXkDfrf3pK44Ytj9doFBPCBLAQQdtQxzQHR24YkzK1h6NF77mzgCgY8ZAA",
  "key31": "22jaTF2Xyz2pqk6XiD5NnckcoKzBuriHYiG9UtwWQVq5KJoLFRwjkdTH4BDMbLedCYKAVUWcUEBJ4tWDV9XtMxGc",
  "key32": "F9aTqee7QR5YwzQMQ6juS4v25xRHuVY6rNNXSo8ynquNtTQUNJZ7r4xiQgr7q2DBvqubau4prCJSpCzm2XWG8Pf",
  "key33": "5k8nzNXdyjRYhAk5rgsui6h68CgL3y9xwejDBE8WVvj1bpX1JUBzbgiy6iECSBMtBEd7qaVNTkQ5CzsT4UuwoAnR",
  "key34": "3SVm5KsqQmUqT7JmxUhKA3qR9gtYkuYh6LKX4tQ5uME1m6rAg3vDt1eLhkczboWRzVga6DTaxbUq5HZSdFBhkshx",
  "key35": "5s8qaT5QSjXRyLG5wZeW79SrKuUtbNXdW7pY3egVK3ErGPdsGTm7VpeWc7n2RkwYK53WPcdhoyKTt5K4a8AY9ZGq",
  "key36": "2hn5Nbm7svYGDntBx1VwsN5hX1nQZu8ZUqim8kZNWxp1Y8RRCkoEozBvgaAS7fBMxtFP8hUwsyjWw63KDNPUsRr",
  "key37": "5fFDADhBJFSz8zgW3L8Lia8rWyQEE1R624u1TdPoqbkuSWdvZukQiJDnVDVbdukbqYpxxikUQPP2ypAtQgrepWeL",
  "key38": "48sr4igH5hyRmAcgvKhkNUyDeKzTqRQ318aerrxqpLF2osYDpgLiUyGW1YL3Rhfsp2BuFTu69Yo53kfeyiejAMdL",
  "key39": "3JN1KRnuzRHVQkTH88CXSw6KcJkgCL3AzR4xccNyn1xZdMh8EVhPUpbLyfJtY1wna2S1pwPCyGXaX5f2Yx7gFx3n",
  "key40": "4T2e2o7AtwmasAQCewdrUH6fpx5qj3kVyzygNREJgUekUY9TzAvk8pmB4MxTiCpatbBhdR2D5NbepC62VAcXzTQF",
  "key41": "5x7VYWHXHRCwm7FjRhky6nDQENXzQmM8ttHkBNjNXQjutAMzYiHuCy4Y9zqsupWexpuxtKo4eAo1W279NrobxiVv",
  "key42": "55fGKzuitvv22Mwv7dcUi7qoX5X5CDGoeDqMNXo9HMLmox1BNL7UmWPLdkZFZqnCxKmcVJ6Jec8awA7xMeWTSADR",
  "key43": "53QLSpLwJroXLCfJJ3zmpUV8fSboJNGFaYuuSrugAmanZYizMvCt9MGCA9VoZrUiPrUeyUtM28t3LG2bKm6HFtND",
  "key44": "4qKvBCkoK7gKR7AqPHvJFes8WovKZXCtSWyy4WxtzsmqkL9FeQ9D1LEwU75DxS229dKaEA4NmcJzMT6aoXovh3EN"
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
