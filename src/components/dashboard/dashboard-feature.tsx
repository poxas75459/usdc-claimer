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
    "2Y1z6qtCm8SSUERzWS7shJvQ7neWEQ2Fyd2krsP1zFmxemsQ72z6QFyHU4R3ub7XwMYWsrHH421YsaZnyup3m1ra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qE4fwEVXyMCXYCg5im7cDZy951q51E8GG4j8fSVR3KGMhBEHj6qM34ZM4WLPCHgSKvYNTLx4aC9Jj9u3i4bkZJd",
  "key1": "32UUMbzWVNydavZmpMt5xL8UP7qYxDU4isa1cestPaCbXJRoqxUfTdiNm3SjW3N4jUxCS7w9vYpYj2qgMTcwhKNn",
  "key2": "5S2nLpEVsb4Q2vqCAdQLLm6b6LM8uf6Tx7MwgiBDMRMaiLzvukJnqNmYTE2pvMG57qFHgvPaho5kktpMfW4jumtS",
  "key3": "5Wu2rMrSDZSqVvbhac9zc8Syd2WLRqvu26TXujv8h2ew6bDw7ZXu6TkNVejUEJCe7LmJXdpJ6nzPZEfX4mrhvrgd",
  "key4": "s1nqAZ4NREHAPomauAsByxd3QPF2BjxhZF62rikwLLCmS9jkXhyceoxXnw6V7qzfSnMWYgP9qAhFbnm21CDqMcx",
  "key5": "cpJEhNThkenab44zaBP6uG2zrwxAyAGXNcqgcHFu8Tp4QBSJxqjpCNVBrXrLGwVJHehh89YCf1pD3jR4Ry66oVU",
  "key6": "Ni9zXfspxdMejeJYeYNWXM9eEAzcQyA3RKxnSNc3SwgGGCHbmSSH6wHZZs7uGvVbvtU14qufCY9pUv7fYek1aWZ",
  "key7": "D6ndgKypEGPcTrDd127siceDbtX7fuKdEyS83WZiHF7uJSyHZRtqiuGkmkWCoJnd8eZoKxuWu4PULxh72c3FLFe",
  "key8": "2xeZWJmM6VJ1QZnXGpA4jC58YRDsksNkPuKPevrXUavLqiT28usRPknN89MbVQTNREmRY3aTzWYJrkHZt422CnY",
  "key9": "23pTTTYWTdwDsEqocGLBViN5C4hmMxy44bk96wLR6xkNa3uNySCiGKKSGDEhVJHcJkVJRUaAFwXPaRLCpyabuqD6",
  "key10": "32rzqrjwntK8jBq2xuu6GB9qTbNdcMtTnQxLdDWdMEydN6GwNFZjycvfdQ7zFi2SjYzjiApX3a4shZZbvDPVPyxA",
  "key11": "27xM1BBK8kSLu17xCjFnufFMb5JyEXsHWQeRtS4Xh65fyiWkYpiesD2ZvYfBvEffmaTzRH22D29n6LxCA4VC27Zh",
  "key12": "miw1KpsQCZ91U2KF597J6zvJtTkKpXmsh3mnp6jVVg8MWGSd9k5Any3bND8PNd1K9DMxfsQjYn4bqmyo6o6BFQh",
  "key13": "3wpjpoxyeYpi5zZTgDs88dYGr9j8udoMKEttVHyx82EJHvvPweYBYEmC1Cq3FKQfwfyh2W6Yt915c9RqeFAg6rCZ",
  "key14": "3qNuFByqQLk8ZpxqxoSnAbAJmBiRY3snG52Mn39DyyYHNWCWM5dJboANZq9cPzauBEXHL7fuQYuvKwjRS2qjehYK",
  "key15": "3RCQSR1HeNwjH9ALg9tQk28JGScBW7D9esVv5oVMJNqgyCmiXSXEgsvKkrpQKdrecWfnpc7UYU3JUQp75bC1gEvR",
  "key16": "4H4jBeoi1WKztzRW4LoB9jYpSevcfL84TRUgFxYhEzhSDVaqV2m6ms8G2YrvS6gnZcmcWWZdMAWo6WNSfw9TcMrR",
  "key17": "2bi3DWs3ZK3oG1jor4LULda8MWZNq71euD5ivVQwEdYM9re3QS2FK9Fy5WoWLsZYKfxML3vNEihAmiy17XcW13tc",
  "key18": "4mTWoNUQZbDkEnrE2k8ChVUtzXR7KGhgyibJ682PfJew6HWGd7GvK2PcYApTKWwgR42x8krRHx5s97UwwCusY9bZ",
  "key19": "3GnqYBqsJ5v4nNv4Q9jqrG4gk251fFT3LSK5Jcf3B2Y681XEPHbJ9yFPuN41nggye4ejpr3L99fifvCggYwGjfQB",
  "key20": "47WQ4NyqpLY59oaq2rV9o5z8Xn9VGwq2hu9Xp9WJadUw4B8J38DVuXBkqpE2MCryWkzLPrr1deqNZ4BtLBPnMMNV",
  "key21": "bMYjiVN8X8mYGWfdrG1gprta9mPukkJG94qcXweYtJRGFKsU6WVmdvcJ3D3WFB7YuC83YFvYEc4gAYo5LZLNK5p",
  "key22": "PvLsQQXUnUWyaPwo3utm3tvgKBNNQXMuDxBRrq2zvKigaEP1GPgiMSELGK9pHBXN92idd6qc49Ba7DSYEirQBkV",
  "key23": "2QTZCSkUS3xVCuoymvGaBxjCV8LXdtLosEyUf4mUjd68RLSBQzd19nSPW6ZCf2L9X9x8wHqLCfTUYzcsF7tngTXn",
  "key24": "5PtiBiL2GjiMEzkLPrExPndcEAi57f52dkAia2noPn8e1Q3A5uyDQfxuTB1NbJK4D5yC82nL9oSz1P4JNae5LdrQ",
  "key25": "3NQGHkmns95Ex78qiAGCgjVJJnpwgzXzHgQeoAoGpgA3sz4tPonUCbN7wJnyy36ZY66uRLcyisLPjHeEqD4UkrR2",
  "key26": "4uwKe7b7aa1gJhdtCuqt18A7kF8SRz18jBJqb3bh1fQ3kcLdXgSPHrqvAQvrx8M1ZqPMW9vhRJ48zemX8uC1Ddox",
  "key27": "5pcEvdoEdKdsW3gN39gzuBMU43uEwrPuNrZZFPS68tCDYsC9MTv9x98SNHwEhGUJKrm9Xm7r4LycxTS5ZQDc2uWN",
  "key28": "3EWdwXAjo84Cce6GnT9ueeTYFQu8HzdySbMZJNsK2S3wUHFK8dd16jfr2JV2mvFfa8UfcGDcVMWsSQYWeduoM79s",
  "key29": "3fcJMBSKzSRvVg1hm1LdwBtHepCZaS9hrrKUawJMPmW8VQe63T3pYHFwskeB7sUk1nrk32veA8Y31PLj7vWRD5gj",
  "key30": "5dsUFu9zyXWE4P13rWJ1rSe7WPNM2ozJ2zobRjGcUZbbpPnSSEeoJeYsjSSCtxXfA28qWFiYnH3Pr9wmBW2beW1b",
  "key31": "SzXRPdk3buEmvKz7rdLVjQh2hNDCZa7CZsKjfUR4N9vFSYRX6wKQSEaK3PNwtBr4cJwqQNQPdeffuGE52B5186y",
  "key32": "Fs4YhXV9yyJswpC6Lz1KtJhL537beC4HULDnzvPAz37ZMy1Kt1MuUZrNQo1cZ5zdth8kwM25opKS4CiWk5WWAp6"
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
