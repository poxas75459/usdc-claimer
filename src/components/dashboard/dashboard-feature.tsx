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
    "xwM8JebT71ddbvnzM5tPbAuTi4Kf4yuD9wLRMdtgrVHn9USutAVZc1fAzKTHzzR6VhNrXu51y79KBYZ4deQHk2n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MAwrCQgxsgyjN8YSBh2VutSgbR9JJAKh128y1KoYYr8YExbzyGw5CkLSmSuhEjexnQVPiXQUa8d5E25r1UKX1gY",
  "key1": "4N2kmsV5HKAVLPLsL1zJWaBXVYj9wHzbiBK4oYaDaVMMryNWWQYwr1uj9u6pbUx6zGC1o2YCZYxoCY4N7Djf1dPV",
  "key2": "5T6tYZmQ17XNLdjXDtndw7DCxvan9tiEuaxHWuetSyKrB1oavbBVAUKHhG1vY4tNjKgYoMaijhPk8XjYwk8pjZT4",
  "key3": "5GKmDF45FyF3zfZJzVeZQBNRYNT4PBStckbWY4zkY6fguXri2Jhb6rHhRa42w7MZCT2XvQR7dq6BPewR7jekmQxt",
  "key4": "4bci5CC1rZsjjrpuEcoYpcNoVTLAm9oN91zqSvD21oqt1ptBVxfAuBvMpv9qBs8Y3x7cXK8Fh9bKdbLemppiRT9A",
  "key5": "2GZTxQ1nPh3rf3gaPzkNy6MfCaT2gHdD6AX9VNLnzR8aN9dSdbW9XXQdN8NfJUFDYCAnh56Yk8DMgnubrSJPvHDT",
  "key6": "3ueJaKcQmPY4dsWEA4CvVMZYPrUsf4CeLbedDKFqkDt45JteTGUzMw2A1p1hmcf2tavPUHBJXKJey3MoUZveDLPM",
  "key7": "tZ4AJrJtHMpfBN4Qkhe5RapKKP9QXBrSSRUF7A2QPYNkMdd5xmJVdkgfbXYZ6jfUtECTZ9911hoBpXgfyncW6pR",
  "key8": "3B8XNkSmk7QBrW4G9mUkGivFxYeeF9yvmDsdTDoH2rP8rJQJEXJ8JG8JQ9uuyyM8Xuz7NYgZjckwZW8o62YyubGp",
  "key9": "3d5uYLnrhppFECZ8RRrAHMRv12iCAmHENaSK98BNGEoi5P1wtCoGvC8N8ALFzPMFTkmmmyC6zpvYRmdrazukefq9",
  "key10": "3aEuc4R8hzwKCN4SkG8BCCejMrnWokt7Bp7yXaf5b3kA5uGheZUgVWGyvyNzDMJQA25HnrM6MqQtMMsy43181AJa",
  "key11": "4AfHJ9x8dWUuEhkFBFsGYHWosLVto93Eoo1RAwz15FRZYgFf1hecdjs94Azyx64iUbvSa4YgeCyyowCUpCYYJd4n",
  "key12": "5r7dxTYCLV9b31cG52B2MVym6qFN1mhUM2BTyRjxkCEguef1nWTz8noDmSLq71m28DCXyaf9Fi3Co7FihjoLowWQ",
  "key13": "3qjRP7g1iuXKKrPA8hf3TzZZXViX4FN53QPMp9MLvQ28CpE49jcJjPxDCrAm6xninSaH2ixocBMRHDuPtSxsfC54",
  "key14": "3w9TWgf7nUwJghU7HckD4KbBjMxvtwhjStgUuJBbkxzqpRZyWT2yBWBGiZC2gCNv3eckxmG6YXDtR8vKdLjgYCfC",
  "key15": "2jZNGWBRE8yUy3sSh7MBGZw8fHtVNnyM11word2HJTzRYx25KaaM7qgUB7eJLfCC4pYFskbGWXuqcjxd7XKGrsB1",
  "key16": "3QptZ2JvPLgUgMxujths3rBn1dYicY6JkDHJXFJYrWjH5ktaz8wK53ztHdzZ6p2FayjioJPjURXtmXTh2dyuAnN",
  "key17": "3XK8vNmqetzs62WhnLEEm182XmEjEyiPbtbpCxCL6WxSyb7XB8yuKA6RhuAhk9i9LF3L1xgaWpkY9TKqWhUpihcr",
  "key18": "8DiT4BRiAZwPyaZeRTFyMUkUgCt32ScukJadQ3cm5yJtENaz6oeP581zNbp7nnDyzt3QuVoYk8dcUv15B2N2DFA",
  "key19": "5LRYexTte1WjqThnsoYWJ5uevbnanGZxAxarMnH1pp36sqWipMWJqURS5D5HAUg3Ekty5t9jwkfdSGYyGa1vtpGA",
  "key20": "5Nmo1sKcEsJhrXdPd5RAkCjGPeo9Fv2araGBm5VDHHUVnUTNUKdjcTDeRv9o9UvLtkh2bL8TiQm1dmPyxpUmqs2t",
  "key21": "3C6P7CuTLpifYTXRGH5HeYG73xj2C1AD8vYUjC3YqkERg9pm9iiE12eJbgNccbJ8gCCgoAeEUH53tWqJFcX2PUsW",
  "key22": "2THAL6B48onLwA1DPvj5ifDmhh1LCe7JQGbKkAPk8yr3ujwa7qSR4xW4CbqZAkEcy39W8vzCfTpYRk243vFTx7bH",
  "key23": "58tBm8hKMXjVvCGogJwJBox3vKpQAu9q32VaptHmMsbaMu8SiuNsNfrL28Gvfe63B5rLVpymvuMSp5yZcY9x8qDF",
  "key24": "3wjj6KMmpg2q2xDX3TmzzWUABNyXgBNaRinksnEhSwibg9r3s8JQuRiwgQeXxcgAvoNVYNoTRS9WUEAusf9Zg6qt",
  "key25": "5NE7MMW6SEpndKMeekaVZRN54HtDW2qZiP5vx1kZ6WNT3YDD6ApDvsCsrEAKZh9GQaWY73qyubSAiRabzfGzVTFX",
  "key26": "41baBHFnYXxch9MZCbRf9aYMGyPehWxXNYJWJhxWTPreRENmQmYw9aMecWruQDiSsZUgYeGoF99nTUQPEuJdndLK",
  "key27": "2c8c1KR8oVTUVKDMmowjw6N38Yvz2BD53TWSNbQvQRNKePffQuoY6SoFjwZawBF1rQRz7V2AqUms2FCw1bRdRisg",
  "key28": "ET2EnX2QPA2TZYJtfcpjBLaC9itpqm9hDP6DyRwaPZoXcibppYLBRGsFySo9n93Q71f3wb5nv1i9HCGmQLrT7VK",
  "key29": "4MuoRUb6nCtVXUAWNcjw7fMGqKKM1AQni8NUBDfJrjqSfBZ5qwFySji3c1hok2wypQEpBSjPAHhE5HEUV7KZiRQP",
  "key30": "2mewEAGuvLqNmQHYo57W1M8qJyek5rvDnJFjxgX8SwtEJP6niPFPXBs5edFvDMpxGVZN1mnw3bFTmvsKfhBS3cSp",
  "key31": "675K4n1jRPDYzHjbZ2fFPBsm5FvxPFhg81Lx9duM2H4xtK4hsyb5JDGsDDodV4iTeYA7vp9ypB6zpb2S7GyHjw94",
  "key32": "JsTW4dgpHZvjQufwH7jJcrDF9p7kiaenWF6ZMbzSvmCXJ5pHKoXsEfV9jbsbyC7Lj11doJuzzXYHUCnv61EmkL3",
  "key33": "3UTwGoNSzqMhP49MohJVomq5kPLqkCRgQbXjwf9k8gRGsz91i79dBjUApHh1ofNCPPv5BgFaqWWJ5PwA4LvF4VkW",
  "key34": "HvxKxhNcXTWJhRc4LxGJEpNzyRn9rjLgndgXGY4v4dgFmTtLJjiRAtUV7eDRGJhDKfNQHw814NJTMA8EaVGYbSo"
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
