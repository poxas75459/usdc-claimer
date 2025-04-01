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
    "2kUpoNvnR8sqyxT75kjEcJEEcs8xe5CPQtuWvixjfNhYrM3vacL36C95g7X9KAekA9pN4St9Ey9vqnhsS2pTLJyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wqdq7MgWHhS9TDkWcpW9suxtgRSjsi9weQtSZCk7eVWvBK8MkoA9DU334juceuGzkKsaFX7xX6qkG4qf3duMmtH",
  "key1": "5buqiQJykyN1TwbrBiNTQMoWrfEKJVDSb1Qg8kT9K7KK542HsTjWb1RR79zSefVcCFEp9UiGmnDUWSm2yv43VwJC",
  "key2": "2BM3DSx6HdAEXRdVcx9T1sgB47YYXyzsPF15TFqV97fQj9CapvKj54LKmefUFnTGBoUPfm7g6TL12Uih2aYeei4d",
  "key3": "41gH2oYvLK8SaJy3Fu566vD4b1ozqVYcZkKEHNRZmfJYATU7oZoayAzAeag9LSLpJMvtFSjomsVP9B1L5gmPkjUL",
  "key4": "4wfQDnfZbMZj2LwFKk2DkBajh61Rkymxzu2mbBt8PWzuGD6Pa2qciC9Ns9qTXor9WdQMu6yv4gNDL4vD51mkeBgT",
  "key5": "5pEPMDgNsVdzw2R9ReyHFCsLXrF6Hmcxiiaegq9zzXebrPS5XFRLPG5JrNr9gbnx7ibnuoe2ggczLRckrKHL7tRr",
  "key6": "NoRzPPCPrWi3gCnH9Pir1zyrwG6eVJjkkPGEgCJo9Ek1XxtzszWT94Z3RxjzDbVwggUA9iPG2Gqc4jPK7KaZuYW",
  "key7": "3VvpAkVAoo81AXoCwGscfHFL3Dt2oCGsaHdLo2PsW5Sd9oQ5AtrgcesrNsoeoFYYpxs7DLvNjT2TVr6LUgqb2RTS",
  "key8": "2hjpNjKZpkQ6ZhMzAsxVwkxg7br5C2mAPmWtw8JMpzMeAcYtSa3qd9BWb3Uis1ckRQCroqd4H1hpkTXnGFkGWiE2",
  "key9": "5gwz6wQvB8GmPKvH21SgRXZZFQSitgJ8AJJXaX3uAycAo8AT27KtHW16SSQtATUzkz8QYNvPDRWMChzr6cRJr292",
  "key10": "aP4NoiF7D4NqQNvDRSugqoVXj9KDPXFgPoRkJ1Jx2QaF7NKH3CETXWtWhKPWKcU9xTBPTdAPz7Rr9RBAdszQZPB",
  "key11": "5Fh2nDgMeN4TxQQb2PJ23HiMxTXE83UpfzbhLhrqwoEm6eJ6ZRt61gQ4evAwgSK3L9ctX29zYVBAzABzoBGtcVTW",
  "key12": "5pi71KZTVPdtz1gSzqRHAgQedGuF4yUYq2jMsy4sqdCkXRZnPwtFdenyYnjYavLzYJQUN3ohXg3ZKwxwx3jQ6KaB",
  "key13": "23biLzxzjD6YAWXNvpahdeF7mTNHUx4zig8axQecnTQtr1D8fciohWBzS8N4qHPsjp2pdUMVJ6o29YtrtMf9qwcA",
  "key14": "3g6K3Hk8zRH1AUF8X3396z9MmFfKoakFjeEW5Soev7L916XZYawJe5fogcrxqApLwKcttvsyvgmBV2qCFJL4HRok",
  "key15": "3gbTFWmPLeUHeNsknVoYufEQLkzC6pUw1jLAHitLZeFyAj4pMTdEWQ62iLmsesQPKwMW1dQPVEpo6cnjqw4oQuiD",
  "key16": "3U9kzdY7BWp7g3SKV2tbDFzUuz5dgf2tskUTTJFjXHMLZjdfGEjKXcP9gJ5rTupBz2MafDXbaL5c34TiBDpaCCMH",
  "key17": "5xp7jFKGkNu8WpJg44JFjXWH5evXdStcLLeTyPuxvroiymCBTZZYJpts9ygzxuk4KG7mHcyLxnW6Zwc2mkeNsjrw",
  "key18": "75agQZBRWR4iGwP5cbvj6VcbfwZbzch1VsUUF2cJJcmUjP6Zi6ENLRfCjHe6XQqQkKANpbPGcMHiK2vVYALj5kE",
  "key19": "4S3RkkhCf6re4UdgbFBabk1WMaCin3gWmkwgZc2KUYB7FJ96jFndAShh1FgrTj6Mo3qDkqr8SiidX17LJRc8UsvU",
  "key20": "3ZWC67WJ9G1coRcMWLMghPw43xfvZFu4EZj88fVgmGZCxuu5bny8WoFTrnDJd2TwfT6XBPRs1dUmAPJzUPqMeMLa",
  "key21": "545LNUhxf9uKtUDAW9x11QvwFHRmUVCkaFpxrpzr6qsx57KR8udMQ2VXfgNRRa8TuStWPJ2fxKRzgiumxF2e3L3e",
  "key22": "2STVZyqh5hdY6nuoGh8tzDobXyKiu9LhHaWWFG1ytBEG31DHG93EBSj3rgNLcssg6U8opc2m1j7UZygYhokT6gB5",
  "key23": "5UwfAys4idxuU8bXAA2oLtDF9rHxr4Hf2kJFHoo2sLG9AhsXjFQBGTMCmMqB313Y2tLM67KLwZLC3ZUPYmtoawCW",
  "key24": "51UynNEC8CiTwAiRVQHPuQyFqWxr3DX7Eh6eRwZ9Y8HuUeM3wmg2niKvjYFkwQdfjhC4zhC5Ci2CrwCHFdeymKp1",
  "key25": "c7PfoiXAh4Y4rTc3ESE4LrwoJfwqV7da93Hcpgcdkbkxh6NZpGYGSYgQrHef9apyRiRnfTA9L7dx5QJSoTEp2Mf",
  "key26": "vAPnrhKwSSzyDqkHXUKcVEWhhk3o1aN3XycgoLHCnke9RCQ3okzkrzqy8vvG2RVrvQqPKpdJdfkWuVASmkNoRFw",
  "key27": "3JTHfJbYCzEGFXnGqMiBApnm4qeHUTubpzCF6tgEYr8SzhTh83FA2SxfH3VK9E2GYW2zAFzAzAN8NAa7ZtnaaS3g",
  "key28": "5icYHCgqqjFmpyz27yyByifjRgQixuM1WSf5qzCeYysxWay8ea11uD4mkSR92KLrGqm1Cy5Wr3qi4huJUmbSLUcu",
  "key29": "5WepRCk1BzEPSA6WktigHCF6huF2eWnwaHZvUvDD5wkznDzwx1kmzthCtrfoApdrKVkXFHwTX3ZHDuhKvHxe4fHo",
  "key30": "2tpuTPR58wK7cGyYN2BFTwUjhNKa83ogrcvym4eMYVKaJaixstx6Hjqku9D768vDWubQcmcdN4LVkn6FvbxgejiM",
  "key31": "5qNVGEeWnPEMkbzn1WadwhcPswXV7TxYifZpjMDdFkaNheY61d2L4w9WSeWwHB6xWc3NjpUPdBhwQTVR5H3UMAJ9",
  "key32": "2WYPnocMT8JaD2159PHer3PDBHzwPkdTzLPvt4F49oi6GigmX9DV7C6CgvYA618wFW4MxJaGjTEFLxZD3qCy9BBA",
  "key33": "5qZXuWuAn7se8nomac5C2JweUt9k4oRjKF99i7Z9Y8qpFmTL89mi5bqJKAhY3Uj7yCXX8pUuZb5XGnGDFXzwvd8K",
  "key34": "4Bok39jLjRro7XqLCWyFp2euNew7nmZJVxjpEL9i7xP8gHd5MzMzgVmELv3NPnbN1L7d9qFD96W7BveZZH7oZe7G",
  "key35": "27mBXhGSW5qLii5wQ8ZpAELXL5CXzTimdw3NBzyck2AmLqPW56rLrRrdrwBNaxdPpUdLWYntbr6KsosexaicJewi",
  "key36": "3FP6RsS6YEmhgLN6h13CDAyReFAxJuXESZBcuoK2WBekpJV8Y3NxZ6biQvEfG2p3CnY2j7HcGsWxbxtdVFeYEWnR",
  "key37": "2VQztycKQvpKJUUDdHDFFnAekPTw1hxXDgsMResnU6vfJZMshgDASjvVJKckmLAGWbUavS3QE4aQdJVwLSvjxFjv",
  "key38": "55zjmRimpLxN5dBZWhDTWz8qPa33mK1SwXZM39ZnGn9vymswhnUXNRUWJpdxbKULynrYLByuodA5FxFfXrLPpBhn",
  "key39": "yMc5gK5RNGnS9JoE1STwrXn5ZcoUREjZBxio3JBJ4Av3ALguaDieHVGpf4vmEJrtdT4rWPULBHzx8h9pazVybpv",
  "key40": "5KZrChGuZid8FN59FunEFMF8VizcybCSRe5iTeZc3UoQE7ASJHy22M67VuTADV9PyjdD6SpvN4WTzs3Nn1gJqUau",
  "key41": "5fwwTXLt5SNJ3YcCCHALxjs7VEnzHMyKBYnkYGFck7ZRShxfZAiu4hFF8pCsFgiZfiuEgq8D2CoSHh7bPFCv1VAp",
  "key42": "42k4Ecz6mWx6tMwxCFgCezqKRXmVJw2azKQH4oFFhMbo3ZRe3vKX6PwWamZcHZrwNhyAuzW7ogiSFaNiDYebJbey",
  "key43": "5yuhrg39DMhBsG64YF5to78MQdnp3hwnNqz98XSu2oK5cLPVX7jJ41DxWFcPqa3XvmFGZV7z4JenZbB1e7GRx8Hg",
  "key44": "2fHeCDW27XB56A9UwAWmt6vJbptyCTwkqSSjDo8o2dQW94wvp8jChqKrr3YLMznAX4uWH36bLRcqbnD7iTxEJL7w"
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
