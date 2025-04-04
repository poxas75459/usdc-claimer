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
    "2ZYxamZEhxk5buejX4u6TE48VkbRMkUdq81g3NbYSFHYb2ALtMWaqUyerbtrPnSQg3FqjJuTzzfCQKXQ16RXxRxn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V6jN4afgxHTq4xW13AehnCEe32bKcJAim3EntrttpyiWhtG8UKx7Q8EdD3YTzTp7sbhxcrjmTDCXf9Fxfyoq9eY",
  "key1": "2r5afXWKgbMC8ouwi6APJiUQhtkmuHTZv4f8svpa81Uh1PXqfgFLPns8jwjnzbmbgaCfULs2a661guHULTJTV1Qh",
  "key2": "WerLt3xL4W6CPs5gRRK8jNu3ZjZkatQs5f1VZgfecjfzmRz9oMjMNrFX2mpKHTBYpHoeT1Pi2mgqf3FB9TK6erb",
  "key3": "4X2M1Z7d5GPg8dppjxJo2pmG8jnTdhDpoiToNZ33StKKCKDXf9c1xwZG8d1vEuemHnvExJtxWFmh7YPEoLppdbk",
  "key4": "CYaUJfM5P2wCDR9RHRUgFsk16qzVSo9fghr9kzRHjZbXeqnWYnhjaWsNbmzyhMJS92hkGNogXKfsFgowcNCTcyU",
  "key5": "5cTFuXkFgFwwZdPGGV6WommhRj3R5gSoyyFmbUhvVbuifNBNyshsR9DUSsSeqM47EQLCDTK4L2YjtmWBYuv2DXfC",
  "key6": "2WjKAZ8D8Uudaiisg5hqktBELw7jf9Hv3PucdirPT2oyMSi4QyMosCrqnMwhVo2fSK1HCEJAftvqYN1EnEns2QcP",
  "key7": "TkSTYzuEHCLbbv5CfGsNvU1xaeKd5dQuLAjvCPhdhcdqPqEsVRLvHYgYc9hxCZPiptr6aSF9Fg29ihy7AxTXrk7",
  "key8": "4UjNwZpNGCjMkvuo6fPva2jEnyhnY2RHaX9Xgyf27JRo1eRGQXCYJAv498zpsJvKpK29pVfzT8CQ1HbLuYXdo3NA",
  "key9": "4huiZXzG4nwft2udqH2B467wbLsjQuHqw16H98k5s1wrDm4ebv3fcWkq9R67AstdLqtmVUuEs3p9wuMGBMw994A6",
  "key10": "5ERE3trgAcqvVg9qx4ewUYpYKCBYEcywVBupYHHToKBJNvCDpea1oVRu1ZL9PUxxJtbsFTFKki4QgA1cEBMnFCwE",
  "key11": "5MgLydyaF65tFCZWz4GPWvvm45gzt3DxrwA7TB48aVCXAKTKbCxKyFwJ4GDLL4nR8baoUZqGsneuXYDExyBDQRJQ",
  "key12": "sPk4XrjBHVfFsN4zCNgxzK1PexWb3BudzrPGQoSsc2jGvoW8opL3aqsxio9Gm9EFEgPMCVdQLFhtUSuFu8mDGtF",
  "key13": "4A5rvzG9HLRGiEWgddevjcrSMn198sbk8x77Swrbs8ZNwTFEh3GTNNve3w3BQjxiGDcNbouE95vWz6wiMuFCTc4T",
  "key14": "3AdM6GYmsv9AMwjDaYz7d5qPZLy4mZvS1111PhheR5HpeQ9tsdyd1xcCuHhupUVHu7N8U8paece4Af24WwKma6Qw",
  "key15": "2EBmxRw78mR5qdeNCuAnc8K8qHdHJCdSmnr1b35ZL1C2gTUW2wvqrTR5WaZMCVgRbhuajSuD8juHxajbFwXy8Wir",
  "key16": "2W8NUR46eoPdqrB4fDYLX7ATpgnWtdX6cBxCNXhCmm5HSMYtMDJhqqmDEHZZoiqaL9aLLHLMpUZduV7CS5qxyhPv",
  "key17": "3rJVyWorRNKPoaXXXqybCPkPEAQ8q8NTaTJoUvGfUPS3quwEzZbpjFuXtAfq1qKTpngSeLpPewdeTerdq5BktB9j",
  "key18": "5JM4qPNUnRNHp5SQ1GtD6MDLKuLZk8Jzj5oLmMLdBP54FdBaFCtjQxjNezBfqpqwovTDTPuci4gNDbDsc9QxqB1Z",
  "key19": "4MpXSaQXX6EsrnzMthPmc1tRr7fKeJnyyhAVwcAfJfcTybi59xk4UAXMeLSKK4msE7QD3KrnsuhvLm2bVqUQZ71q",
  "key20": "2ruPBYss3EdSLYQEAx2jvnzxn3Naupb5huVJt8Qhkjqn7rVVLmYJ4UJBJGWykAxbsmn7WKWwhboZw8hs5H6ctV43",
  "key21": "3CyMWAk2P7pV9PfTmhJprgPdsRwvb7sCce7f4a1uqm8qmTqrMGWehRQCRs5ukthssHnbQxKHDxCk5r1F71Q3EeEz",
  "key22": "517rWrNTRTjwnzpBGqaVB4wv7ViSWjmdSEDNYDXfiMcr53fCMrsdAxTw2ywKxGZR9i6dqTk5oQzE5TeRCT1QU43N",
  "key23": "W2u3Jcubihk516MH4XwArrB6zJxAyAGXqTSXXtR2Hw8UrPzsUEaFGYvYvHzLKDGRg2YtB3LTLTdVikd8LwpNAae",
  "key24": "4tC7Cs88L54UYPGSeUuYBJXKKQ9D4JN9GkYpJk8dEexqHZvwNhjXfRSrS49XAsLpdwabywLdVfDfAiYMfM5oEPUA",
  "key25": "4u7pvECqoxRQuZWNSwj1NqFGT4DNiyTFVkiK6uf2pDo5KnfbdtnFX7GzJKWX5e5sv1Ci39cFS87sLojdwoGGX4Yf",
  "key26": "26VKV9wpmLePCdP9JC5FLqqx16snHseYqYiJrctVWuAgDfSZe1JrzusTVmCeRw2pW3XkjzwhBuTgp9v8eTnuZXm7",
  "key27": "1KNzNSXu7EQqxrtj952h7VcHinm6yK9QH5qG5uu5foZr2TrUsFqmu1gLLU3wzGguPj1wX4xKQY27wia9ZgS15sR",
  "key28": "5bEpWXtVK1N4TTWucvZZfQN3K5f7QHdUgAFbHK8Vk6GipZR26WTd5FnW8rSNFVxhNaBGfVw8BdnUqsurMV8QnEtD",
  "key29": "4AEs6gm9PZ4mNXdR5Z1PVBktvhzURCqMFjcMad67UvZhjhZymbMFPsnrZjSMktvMG6kVQjqDHfJpT13EdwSSPz51",
  "key30": "2A7AS9sdXPMySNcQEmABr5mBC9oQJAs9uTR4CUeXUJ3jTNdwrFbiA97r9QH5Xjx2x5S3hC1QfhBSkd1bxZQAaPPK",
  "key31": "4kowkP9521KrNzfGtF63yUMWeNHw6GeKfdKwQSn9Bpro8QYe3tMpPqdXapAjvRaU3m66t5NWsy3Awfe5JEJTfb3e",
  "key32": "3ESeoWFoDWFsvZbcMjWbfhbAoANKGuejTHkniQ61pMWnpYJq5jiywspa7sNivSUqQi63CKrbSBWzb6X7AwmX7VjF",
  "key33": "4A6h2yHL4M3oC2CvAmVhTemdb1ncDHwqYndKtygKcQc6hJj23WVZqMx4LEPo8qCpJrNvYreSRgRUE2T8S4riAzkL",
  "key34": "57Uj4nGcmhWxaAcDR1JvLJY7Wh5DVkpPHT3rqtzMb9byRnjkkihDd2h4bRaquNHNnvUZRscV9ibBfZQyEzKur8n",
  "key35": "3wSkg91fVnghTywM28BCK4wbwPuJ9ig2giFN3owreq5qCwoavqrucqs6D62XMC6dXdjg9XZQLRyM8qvwGrRcu6HD",
  "key36": "iVHq4gshETjqWrBLX9CvrP8PpNzch8LGRgEGvzfZ9KqzckKWLt4j4yeDBxhdGpSVcr9aT4SPbFVUcGRQgs9ij7w",
  "key37": "kJAKu7hz7g8UcQrqGZiXUHFH5GLxkWPSJE2HzWiFRXiq5RyHfRivtGzMcSmFqs1aq9J2N3afQcmDCPDzB74g6uL",
  "key38": "W8vtLHqdVut5vSXkw2LYQSbkC7tbi3gq32qZEHqYa8CpsUaznypEGKfZpXUBWMSF6qoUXaZzCPNy59gxMUABho9"
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
