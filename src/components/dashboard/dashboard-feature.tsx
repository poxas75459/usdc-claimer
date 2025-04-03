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
    "61seTwm3ypj7Vrj3hG7DNqsK9MjguYBeY485hRwXt2yi8uf6m7NwWGNZ65EERSnrzjdmXRT5DzeEz2K98qNrsYXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ibfDSJDq2bCL53LeVKvzzRqLwF2sSLSy2uhCkx5yi96H57YGnRH4GEP94mWF9Hn9rkDryHcMqkwf4dngvQJr4ru",
  "key1": "4fqMtenWxAX7Y4jT1KWC6Ef9fmyAztmDYu3jWXAtuFLMoJ8QCgZdex8m9Y71YUkyg5jo1VwTQLLYmbkZgAzjgxy7",
  "key2": "zL2V5nD1wXp9RXJcp29vcXzBG7paCykfKCETYLutTM1NzV5WBfeLF9VyHRsii3LW334JL5gtaPUdmHBZtRtihpb",
  "key3": "2Hr2DqTvuk3PDqqwaYZG5v6oVUp3uhDPPzjRzXNaURdvD44jrooc3y5pofNyJVpyZ5fnLEVzyGaBcJ932Rs711me",
  "key4": "3BmbUnUR4AZQ8L3NYexAkM81zp7kUmvaRwV9BXudGXbv4RQBqWRqzoL9z9FqjtLnxAmq1wK6SCanE281JQc5pa4a",
  "key5": "2zrbgZFP1huX9DGaiK8S4d58pUx7vuE3JqND6hP2XVrSNc7hs7MhyJ1CReDi8LtiSkwoTRDf92WNT44Z1dtvv3Wu",
  "key6": "2BmQd4nzsmD7sfsYyY5FV5AsTCS2XSNdJG9NYXTXPNoeFSTGGTRVQXzFYB354MJ2fgLFXTs6kHyKUzRJEUJGiMqA",
  "key7": "6142dVsYAjPPCMT4SFzfDTyGvsujVnHkWG3SiJ3pErR56cjaHVFTS7SviBADC7cHxfXL3dV2NEbqjHjP9K6azi2x",
  "key8": "7FsDiLBsDaYkUaCNycMrvh9DfdmHPqnoaBH1GPAo2sFskxZSY2GrB974zKa1YJ321YuWZ71GbFUhpFxkxpvaD4D",
  "key9": "62ugCEVUYrMCrD5y9oLszHXNcoGXSxEJMBxwo6Fd3vZKWurummLMMwEcboRYjJaB2Ef2aGPNcAaWA8EW8sv2zxWa",
  "key10": "4xZMtTfgNUXqZCZeys6pocL1WEqaLfc3HUanJmWbfRikJESJ5kDL84oLe6TWjViNR8aPgi1Kfmz3Mwi28PmDnpcq",
  "key11": "AASwqPHMPHz6V36NSyZQM2VC8hf6jL1dq3nvvGYPd9FbuFXL5dsEfxozDfYYjDai4gectWjZR2UfVDiy79JKVMV",
  "key12": "2EzR6HwXx5m7YVa4b3WqusfVTaY6MEzquzjhNucEXRN3ygMfbWudwzxizxjJWCRJT8Trz5qbFqC3vRem6cdUpQVU",
  "key13": "5kXV7kmYZPKbZZgDVwozyvVdVtEahYKimYnYCxzwWgVRCx8XZGyWNaT8WKT7Z1o9ioMZbh1XqFPwNeuHXLfVfT3w",
  "key14": "4yPJDCpFrYLF1L9iCC8GBq5Bd4mwfdqkT5nCD3oieDGWYUngKRhk3Cj3V8k8bFLMJFLspWavrdMSWFPQ7fGvBJLW",
  "key15": "4LqaxWozJVLHW86fLZdzf5XnfZ1u8yXg5DvRqpUz89rD9v9una3uzGYtvc2eny2p4AqvJAwrqN6ZGWMLX9PMSwAN",
  "key16": "3E9Y2KPHkzmbzY6RFtbetiJU1NARkuBth9EZDE96WmHFFef58dbxeFTmMr25d9XLXqRVGuGwJCUoWEJdYsGKWrNF",
  "key17": "24a9rTJviXgvPLUbNgJZecPmve8NryzR69mfhz3f5mit6AknjaYF1Mo6ojokArc1MsJ9Y2RXn4ghuC9uiNNemXiD",
  "key18": "LyPy8QTnm8VPyPBr5tZUjUcdNezRjth8f3ULsiZU3oTG9iqC6eyo47uoDz8gEU8A7wnB37GVTjcNfagUqDGhGVD",
  "key19": "4hD6tmrEftqXM75GnLRrbhASXG2v53jTxHn4gcCJS9n8z3P7KT2owJFuShveidxtDx21ipDEGXKesdyC4jKWvVrr",
  "key20": "HkuYdoNXAE4zzQVZBSXQwEB77oeVyMyxGdtsR26Rhv7LnEtpQ6ZRPrURyqQXn3SpgUxvheVG129jozvB9bdFgSB",
  "key21": "3bxmfLy7Zx7HhnSbFMdLyAT7kQkajXzuQNPvUhvV6bs6f96yXQ8keZgUcusL7mHBNZAzkz152BLk1KCU1ek4eR5e",
  "key22": "2g4hxhrAQQbNuWRXZGDN2v32hFnyyuKPq3eR3Got6oxjmBMoFz8m2SQcpEaEchfdq3tRxPorUwU93otMEm8pqzh5",
  "key23": "5xK3CD5StkhXfAsZYsTC7tnx7HBf8gU8eYmG6pWVURWS1XZkmDSiTz1ADvv5c1S6xMTZd2hPa2QLsTdedzs3Wp6v",
  "key24": "5f2ChSk1ajLXiE1KJexqCjDEdR8yiMiBCMrUfW8NJbVd8jMi9dBo9SDuZD3XFtqbgjca4qfwzF9rMJ6dmmUoDydZ",
  "key25": "fhEce2vKK7rQi6eBQpojSNLsYX9SxvcKkqCEsJCKM6wYgEcAyDZwxoMTpeaMwjcoRYUWxjN9MvZv4SMqEMSjRtY",
  "key26": "4PVnrQaeQqXY1uByCKpLZwgc1EjqxwemV38M9mNEq7SAZdUzLUvuhyjeFf4aypEByTUzHHoapzp5HtS9HqxaNuwR",
  "key27": "of15rnwD9bqZRowFnBVP8H4JynYogtkfxHfA12L19fCoR2bCamF1hWEMBwosfYGggGCzVYds8fUp4VaHX43YdqL",
  "key28": "45dy6mgqNoGeAqcGVbX2aH27ZoeBY6nUBn83Ju59EaNXsrdVSKpcDdJVrmWrbvX7QCBPNfNabCYAefB6ZNXRATCr",
  "key29": "4YQ9ewH7C8o1vkF6wyoK3rxixPUGrj9VQ6DcMtz9rq9mADFx3YnqDkyyYGiWvFsNwgjBcUDPBqvYUgSbkmN5Ck4r",
  "key30": "2WyFDq289bS4AhPf8iNsdms8skhkuKhoZk5tuQjUGFJ9LWM1Pv2m16Toq2A9NuqZJQPxjD4m1Bo5cNPGXchwaff5",
  "key31": "3Hj87RSngAh9ckCN8CRSgvkTJxzbVtdcaS8djoUmGj8NCdDk4AjoPJgz2tWRFMAQMwA6vVBpYgL33PaNWsh6zmPN",
  "key32": "tMeVPE4GSA1JP4pXesR3weUL9rnuxFfLotQL7wwQKBGgXXRTFZuFvMhiWbSEnotcjhXsMs38Z7EPZZbNSsQDv1b",
  "key33": "ZecJPmAXa838EQYY7AnqzbTpk5TUem3UFRfFDvpAPQpkiALWdhKEqApGrJcpQ2zft3CNMFxiW4MgmymFqRBmBXB",
  "key34": "3Qnb6J66w19MEEcKHG6bGnPwNw6HtZ2WZSyJ8uJp449pFqsVKVbopTiRH3qG3TgXzJ4UyiyHLdTtWKQH3bXULdfK",
  "key35": "3ocUG57s8DLEFYerzxLosVWdag8WGKWWPUpyQTgEEPhtt3ursjKAuhJRAgzwwMb3cDrPB5EAYCfiV6yG16BVQTWA",
  "key36": "5YNmu7uUTF43sTzvdzVmF73QgVSBfncmXjaoHP5gB3SnbQM5Ey3HbizyY1g79QbWJVtfTqdqx4DfMVjNS2ZByQ9n",
  "key37": "3osZViWeX82re3etBg8ZwFu9As4LAv2CoEWSdbioCSEqY2yLMTH4ReNSaRqnSeZJ86VvtRhS2ytMNRjZgKCYhnA4",
  "key38": "44AobSVfAMBkg1JENE8Sx69cYYPiQoeZ7ESM4y78vGQPaQX5odX3ZEtDJRvahyFa2u2Wm1WAfoPxJnpapnnAd6Wv",
  "key39": "3xVernRk4CwG5bEa5VDchuZdvie6yarHzFYZU9H4saUaN3jdfWTvMwWAgwDBrc2zGrPsyTMQci1Bx3JQmjSP8ibw",
  "key40": "gy4zvxLQjqkAaVyfqdYP8jvnatvGTeAR6Z7hUY7WmxnfMMtMu7C3Nd1Giejru9x2NjYfqLVHFbtvdzrpfgKtZFT",
  "key41": "4tkjAGa3Xw7TDiAUftQc3e9prNJygcbkjqpAwYRFFsZ1PHYFQeLvA59YxGWmZACWCrVaHmFXBKpmETwGKuWVqbcw",
  "key42": "2NsqFEaeGBhJ9ohinDgNLeK72yH1fHdjX31c5r1kVuuYqCAwpngXGnMhUGJircGCnjsrvDY6nPcmtQipqpyXzfmX",
  "key43": "4mTWd7NGvFPqAT7UnXSgFiZD57DFyGQqU9zRwBJHKAC9CWQBMyUmkSWBQEDtTzb48TirtNnEnW9D1hRYp5NsYTDd",
  "key44": "5C3PE4ScLdq7foZX2DFrbSYzWrcCGZg1izK4KuTKZeK9JqxQMn5a3Qf46vFBh65hx1j3CXppUPEZi9L7oaNML5sQ",
  "key45": "5fHaZVNBrXVAFVM9uZ5x21zdYyH1UoyfE9yDjkRBjV3CpJpAzwuHYZtXRvCFFzeRgf3dVcazrxokPdNxhYeNELBS",
  "key46": "A3XTHd94qpXKUSBhoszWJuhUGncMCfNsL2f1CprLKfbBJBv9pGKgCTt3ExYEr1gvk5tUWgggEJyJhEN9iv2DmyP",
  "key47": "43JgLkbwn97kg2DDqd2X9bqABedzo7gQpizoneZ7dSaLppjs2R4NhGUxvxipRcfk3gxKjNs7iWbLrHbjGYz9XhY9"
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
