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
    "25pv7YSGht5kC6axozZtvBmeTxjrcGsXVbtd5du5bQ8pqKyHH5PVmLSXDihieWzJHLpZMTjySWbXG7JxADN3TTfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R4xQapt1bqgwkHqfa6wUSv7cgMKbeikYCzNaGfAgMgwN1prGKfhg4YiSgvsYEdGwtv16TMTarZHJN9utcaJ8pM3",
  "key1": "4fyWitnn7uqxmTLK3Wm43rzZiukpxfqQEwxRwo2TShCYdDNHBCaiiU3Uo9XhvZMDsNLVm3ce1YTR5dbW6cppTVyD",
  "key2": "4iji7nnooJWevQELB4nuUHeFLRgvgCcM25oPfea437pxtF5wXxsdnLwtMK65MC8LraFkVnTfqsZwEY2kgixgoYPw",
  "key3": "4WXBX2asXGTokEjdsnEjMD3tsc86P6EFfEyRzoVMjf9VKDgWey29ooQuXtRcuT49qUj8Y1kQ7whMSK6Mh9Z3TYf8",
  "key4": "3wHzKmUayogtNJa8bP5MHQYNJ45N78A1Tbns2U9N87m16GoMFMJRtauHcUpc2udBwxxNRjkwri7qvxtGcXznEiwT",
  "key5": "2QNfkm5AGUqCbdr293MmseWjjoQdBsTpuqtSDuDSt1Vsx32E4b8gjKVjeLDEQeSPBr1qjK8ySgtm5kctGkAStgbe",
  "key6": "rnzpHJEqBGwWer6WbCFTEPtsGz21QsE599uUe15tB7hErNaAAWSQbz7dXJ4BTjHr8SvAA7hruApQYqqdS4j2TjF",
  "key7": "2onbfNBi44sHWFUs8Q1Pz7xy14fuKT4wEAeVhqAfx4e8Et1GYDwFMiFuuj43kdMFNKDz22aLkv74XgkPee9oekBb",
  "key8": "vbLsPqavt6U8ZX5NyZbLU1guGknLLxn6vUJpRFtPREJ3gK6pX1PQSyanwvtdT1uy5ZNFV6h5Dbstrr1JMV3m7Ef",
  "key9": "3NLQNSnt5DqdCeaJrEnYUpw6eTesy18XhVW3yQxbG7sPCsqwgPTxQau8zVEQH5YQT5X2cura15aKQ8KNcc1aiufC",
  "key10": "4zVJcvxhk2F4JfkJMRHA4HhRTBDcBvymg6nveNLyz8YLjVm9YJ1Sh2zQzu6be4S5ihA7uYRhNDCccnF9uBr1uTYg",
  "key11": "36bBdcHqGD4QMmr2VctESfrWaxudhb3WH2cockq6q43bEBAQTg6YeWYkf2GcpQkzZj29yTU7R4fVXHFj3EJEQXqQ",
  "key12": "3JJFK4QffZ19f1nGGD24j9Ja5N6qfvzLExtaydWmbXnhSQFkXqKahHb3NQ3njtetyfXQcLXHfsf6BcqYE9Nqf6VX",
  "key13": "24wwiP4LXhtHQ6KooqwLmJ9oqYVKGezGqrKX8XPhF9EgvqKKEKeFK8ZWVSzBLbFECqdvJjvi4X8LzM3J5LSNTSed",
  "key14": "5ToHRUjR9QSwhmQBajHcnM3quVdg4d8gsukBcWPcnzSYi1f5CRvBM4AGqQfnaTKFvhqdi7CGXTHaaSU5F6UtU2Qt",
  "key15": "3gpLjQ5H9J1kVe3kTj5Knck4FjnEqpoeyF59T81w2zFNyLJH4VS74oPwMU7ZtGEUpq56auSy3fZN3TnqqDqY5NqM",
  "key16": "2QqavcsxmRgKuLkN4UVUqd3XynwbuTkmCHUGoQaft1UZSqnAcvwGnuGy252ZAG1LeKgE3v225SGMrMvMhtFxx6mH",
  "key17": "4tJRZDyMJTY862hiVgCb7vHty6c5a3g362Qa7ay7JCBH4bXeUmszo2U4BsJqcyKAzeyqvSWTUiuosisLmd52Jagh",
  "key18": "a7snSQFXYuWgLMUZy1L2UaNx9moSsFWhonHJeNh6HNvD33XTc7r8xRXQ5CwgXKTRLiBwFo9Aaq9gT7W7GjbcodY",
  "key19": "3zWPamBzKqY1xJCpJQPXNTb6vb7ExmS6QJ52qciXpoGpzQTRrTe1x3mvm4egCET4BRQcfx2LuNwy9aPXW4QMU6Ka",
  "key20": "4uHVjbnx7WRGX7CWfynXbeQeDrbgAqQa2HCdQhteo7rYMyrBjtKUeGAnbchaSDuHN4RX98nS3KTJc9bfVZg5hAQx",
  "key21": "4vQ3LQThtw5RP9UF8oSr3J1ZvGfvxNbDvtqStpJnXBTgdccf6tLxdChr6FSHMJqyuNAWLerb3t9AodsGjxwVCW1r",
  "key22": "33ZdziiNrZywhm7Wk3BbwnY58ngFKbRrw39XTjZGRxjjQ9dGgL2UqC5rEDtJQfmqEdBv1cE4ovKtsQWmZmF7k9kL",
  "key23": "aXLaWCYdzt1RNwCqFnP582EJSMvwdDWL3RkQeX9pULoiYuf7xwCYf64krjQNLrktu8F2wqVsD9KVmdBHXA7r3SS",
  "key24": "3nupmD47AVoo24pJ4Ra8hxyDP71veWjr8e2y6uytZswgt8jvpm1xopENn7ZoUoL6N4QvADYzCtLzFmzi7RxpAikN",
  "key25": "363ZLne1LfKVFFWjTC6kPLPppTbhUkUWyWmgvMmutyzNtWok1vKUxah9GPSGZDaCmqpjLg5MxJKdwa9X8EY9u6o2",
  "key26": "27FSPqY7Vicu66dKEcoCKbzC5RaFgKwjsa5Fic5nQXAxcMd7CAubQB2H3qYDbLnTLtfT7Eh4nEKMwpdXeQQWqEAB",
  "key27": "5uBmwaGutUjXNfvjyE99p1b73wGwubYzbAZhL8DnwpASqajzVoEc6N1cMXyWoMJj9vT3zfZMAgc7BHzVB2wxeGfA",
  "key28": "22ZCvGk3e1uQyi9U466vD8GHAKtuW3gCajhFznx9Fp3LdUMhmt21ZtwZL2VimUePeBSZCw3aeKR1PXhTFEVuQeZd",
  "key29": "2DVEUxf95Sok8uLyNMuioiLxZ76AT6mUX11W7vmaWJT7T3ThVegunjSickTwTgphWHdH5uyEGakYDR583Yite7Yo",
  "key30": "kYJQMyEsCF3aiAhoQcP98tcXBowi7BgFVv4r5T7VfWrpHojNsQQbEyZtowDAdfNroYQAW6WrCCzyntA2876XB8e",
  "key31": "2iP8HxFkAGq8DnmNC9ALw5GnexKTDhYDw3LY5b8snt1jTYnyCGwMzrKB4fB95qav5yWiTRxfGRprN8eNrSmvNBtm",
  "key32": "3GiywhmgFTs6T4Dc1oeZXRmGWsTrCdpZ2mh2xdrMTrV3oFzbg22o5XWTrSGkPLiWZ5gjKnFMdjdGZPypmTKz421w",
  "key33": "5MbZJNWTiysyYbsyCxjxzP8sqehivXURS6w4hM6QNHZLZSaTn6ZVkbXcxdiWnWa1QgSQJ65azmiwBvSSwzYFR8oj"
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
