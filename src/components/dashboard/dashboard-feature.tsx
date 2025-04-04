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
    "2N6oYr7MqR2fjZfiu8eiJxRHkkwyYE8zjKuM8YwCVJ1SX2TjMMgTFkq34XWvL7i3aJk1YDhVyP4SScL9dzcpagj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jc5DKrz3SkHKB5xWwVr5Pk2PHwVK5VLF1NDoatgwJMbHpTwAMaz2efXxzsoiuo1qRyhHoMyHcDFWEWwNW5uSaj2",
  "key1": "kUmnsgsYc8PBcmsCbHTPotNAj5fakAy7hyMxXSZPegY54ShAvSmZ3wfURT5SuHAcMCRuakvCXiBfMuPFbwVxsBM",
  "key2": "32Z4Y1JEQxEWCVburHKtuajft2YWJohmtjREMWG6yWNxzsNgLrSd7qUWfY67WjkaV7Xq4gSZzpsnRK5yf7RYzDoB",
  "key3": "3gLYhjJ9DUnmLXHPoC4oktCouvqLrMxd4nTEyEBkkr4R9hYhneggMcU9szCFmKdrVawk5fJnJNiPSsyF1fqYVfwn",
  "key4": "2PiDFcuL5ShtFxACVwzvVt9k2pReMyndx5U795xaD9JhSsN9wJs8Tkw8kDXR2xcrE7A8y5ghBiXattHgDyC5T5rK",
  "key5": "2izzBJ3YyAWFBoroEU5vHb5KmkWT3DYezuHVjrYLbz1LhXRgbZZ82mCkqpYwm7yw9D2mDpLdyWU9nNuqJbgq7hzk",
  "key6": "2MfBkAuETct1xDFVuRMQa9XPLwEhutSHyHd2fuwZRdzU7NzcJdUSBZABxSX9tgsVi9qEs3rXEDguRSSZ2txmRYkd",
  "key7": "3qMobNC1aLJx9bvq92fQEUdB97EcYw3or3zXP9K1RosfXCxLBKGq2Wcm3fs437x1h9bHCZRMz7va81oSDZzoNrnK",
  "key8": "2XdkRPAJLpCxTXzki4TU8ykfUBuWQu3jhJRGT8WCFdgrrMLF4THHyzxhkgq2cRij8XiZGvHVk4agQmuJNmZ2YTbw",
  "key9": "2WwD1bhKDRKudRwFdPmjNSjUdEQPeUsRMaAzwR1EcURPmjHxAPM5Kpv1YwEPRHNuNRhZK6C2Xxdk558TTjfDBXQV",
  "key10": "2xEGfZDZ3sw5t1Q8GjfaxpMZVsZNgYzZbsoeuDh8cwNafqRkCVR6gZoNw7xnfHkkQH8JtENZZL6f5wSca2UPsJzw",
  "key11": "41MCyrPBJfWtmCpqYtp8Sc91kHqpvemPPkYhdt6UMjAW3ZdXPJHBy3E8PBqPAuCRBAX6QW2PUvJcWYzCdf2z8ewz",
  "key12": "25TXo3xBYis3KyD9zaygunf5cBibLG8WfMKAGPtqrhMx3yH5QrCWkjT1uqEbk9pDMVrQjcfyK5FUh3EMun9t2nrL",
  "key13": "22CByQuAei6mxxX2RnVHDzWbwEA49t76o9ojqoBMsiuaA5AV6vJi6qDeih7Btm4K7ZcqNTjHutNw1p7ARAYUyVZE",
  "key14": "3c2KrysR1MsWnFSbSCMkeuxRFevkeGLKN1wyaM3heT2PwtjL9vraQUsK5YAuupH74dQu65iAieANrVUoK2mZbqzC",
  "key15": "3M52vrwJK8q24xTasexojzX6RFwsLzkPiofbAG8iTNJe5m6WgSLYrh8TSL4XGenb2LFWyvuwPPELx19UdKreC1fn",
  "key16": "271rBSqMuGhvjX2FAmM5uNpVJaeKuAcAjZBrAvWGeAGVdPVzeataEQKdvV3SigPzQtSwcwpr4qwedoHYjQ3eBbGi",
  "key17": "2Z2mz6jCsbJRbznTnEpBHH7JgKmhwKQaiTZzEmPsKmWagWRiABrSwFdsji1RHAeqisn1DBUB8L4u7SGgiANUrfZj",
  "key18": "3Wzb2nXrnjfSAdL4S7mPUNxkwzaJx1PjwJqdxjWLrN5T3GUVnbHXCqj5fT1dxkye71urXNsRfWC8pi2NJxM3QL9J",
  "key19": "55yNw3kLeMjMTK85EojtPih2Dasg8yqRhXQqTb5j9TLvnYVfnqg4S6ofExFXCVaTA9DCaoqPfVVQ4QDJgyoyfaDT",
  "key20": "3AFH69TuH95oK1XbChZdipMfyRuvspaSbdxVbHyCicbAQG3tsjMceLY86q6KE7eSMEwcE5tPcUybQ6Fpcq2MocLY",
  "key21": "53uszYe5UfoopWutkA6nQjJdfPwGtG8rNxxwY6BfUGj8AbUHbMxAgeQtmMCKNCgUPPzJCChtVZp5xfRLJjddJpTK",
  "key22": "5FCdkF48Vyf7j4gK1CY4j4EkLHNmRrrrLAyxDrdQAUVwQ51BiAg52nqWFF7v15zWVZv7vAB5esCB9MHCDMvAnr21",
  "key23": "r9u7H4R3JLtDkBcYpKiKDhz4MA8BEKKLaLYmrzoQ83eiPcw96ZNeXF4cykj1XKvckrUxj3p42eyiyyUcAMtCH1E",
  "key24": "2Za91W3B9hGkEsSqsxPJSDLwX9zKSfejzKSXMnJu8KXNEQEN4DD8bRi5EfuJ5CGnfpvR7NAthxG4LQxj2LPR2yhs",
  "key25": "4p8iENd9ajCfxpL2PuURybu8MwF4L5UXpvY9bx6a5uf2ym5qUQPyFq9UF31eDMwxcuhbM4fSuZ5zYbFp9CPF3mRV",
  "key26": "5JtogzuqX484FiSeLzZGJ8TmbkvQRGMdTn3QBbAvTMqhe7DEkoqpazjENniNswQ1mJ9iPqyhv14fTsvpUKxGPDXK",
  "key27": "3AfRDvdYAgFTfyRTdYMJEUYHjFRjEY42LFP9Q3ye5Gxpe2YBy584XRAXjQgpCQuv2j7gVg8koursF44z21u7CFro",
  "key28": "5jzFj5YJNvGWGidkMLGs7ayR95H9M8ugFdyrjawfpaJ8vUAdaRkEjQg9eeHEjKXUrBt333QfqcqKhkbhjPS3iY2t",
  "key29": "3psZwiRGgkqYTurvPqBUPWknoJ1hviZCQDsPwjFUKVj9BK2Fdwj3ttHe4pRJ3DgRaXduiwyVXYrPWuGrYekSZSCA",
  "key30": "5bxi4hLRob19LLp3oAjqPGnonPMxRUWa5EecoSwC9jcCdFchth2Tb9sqiFhiXMwAuvn8ZyS1WTeinQeE7Qq9Ctbw",
  "key31": "2hgjpMghPHoqzwgyJMPocoMEkytb9ctV3rv8uLvzaQchaAibzhfeKji3mgBoPyyytj9K4yRdQcFJ92uqhmbtqSPX",
  "key32": "4k2uxWtZMFpvFbgre5pcHVdoh2jFZKoxk8vKSiidu9g1nAWFursygL3kG1wA9qyWaPSfE6B6TiH1JyAhE4gm1DKs",
  "key33": "2s1bouiiTAU4eS62f18sztddnGhqmoze3XLorKBBwXfMBnUkKa5zyHDFPQ2MhKLuKhGEoKUFHWuyUCDxDHRrTGQn",
  "key34": "49pqQSUGdqh5ubr99RyE3JzP1SymsbPnojXHmSab5zBvX1FkbZKrQ18aRk6FWE7X9sjU9SdNTZXLYrHTW6jnB8tv",
  "key35": "2ZvXaFUnZvyRFMWx6WUUiP9Dajg9tiH9pcLNRDg4kt8YpjHJ26KbKpT34ufTus56VE27UBDaRNw5J7Xjk2YtxNKo",
  "key36": "64dtoAwCjkSbhgKE8bqv19q5caRGZKKYWihGN9L4JrM1HjJLDofhsZUx7q3XZHRRYgHP6bamqai5fF7aukybk1SB",
  "key37": "cdg788YBFEYn3qyaAnwPWiKAnFijC1yyfcqviKKJ1z3eUTt3ksGF1gGDt6mfGTrphHSan2FPqKyHo3DfxnqNSj9",
  "key38": "2NexNamJeyi5AqqXvkqhgogCkmksxkBmveZGYirzjJF4VxJQWpBqnpougPGaSYxEdVNhAZbJFo7e3PCYqi7Xzdgv",
  "key39": "2p6WZ22Hge2AAQSHAeq3gbVrmL3bDNBZmJg7rSaygEvXDDj8nRVTpyXSZzbHrKNPtQADRyELJLgNZik5vpGP5YEL",
  "key40": "327A7ET9YEjUHetbUBbjAcRMp95s6H9nbbUd687NBv6PZvbuPEriuejh759ygvG1t2iGBd1dVdLud5Hv8qxJ3JCx",
  "key41": "VuJM3pRwRHTnRFzAFx3emhaTLnk3fa1NtYGhCbxzDbEix4PGa74VkuCxQ2MLXhBTxwnW1nDi6fqwqSxtAv7tq8Z",
  "key42": "2PRFK9Xpe7a4hfuHaSKqfnb9w4eKKMU79c7nfs7xyhfZ9pdx5PXSSFybyKogKrrNTFpAmau7qxdvmrRs7UdhFsrq"
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
