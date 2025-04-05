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
    "5ySMzhNPY5QkhuTWLWbGj54F3Sx58Tkb6UCbyL3s48Q1MFhd1qNWJwSiFgohrUPxcraAJCcB73fMpRu51xRhQo99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s4PitUehmz9HyhBt3RvdD8REFkRfzaWiMn2aYB5uxBxXLyGkocgxTFJAd421LyMv7UgDMw16k3mQAp9nWq1mFaX",
  "key1": "wjNvsKgswX2gNnZN4nrxzdFWLw2DuFGx83gZwFeofn1BhptUCvAyAC6WDdDS4nyEJzBj4VXv8VBnzoZMr1sXYVx",
  "key2": "5VDpNyAxHKaoa9zHbE7ayNyXmV83HVQ2w8CE7vgZPiAjhg1QXxbfKSyZgFi8PUwd5Gm5qZw9Hx3Ma2WYFQ3boCRz",
  "key3": "123kcDwh1qK8w1EqyqhPfeMhkD6XBzuDA4GYgbYrUpvyE5155WEoZtpWfxu1NWjqwnhhnsN4At7nQznFBXAJt9dz",
  "key4": "2E2S31Cd6YH6nfp5MRUu78LzmqyYEfWgSu9VFdmn24Q9PBd9wSnTVLn4y7a5MHWWoigek4MRa9GfP2EbiQpXnBXe",
  "key5": "4U1gVxhqU7LNQY8AA9NgUk7gdwwXnGtkTSHrnf5TZWfCQnGkpbC7NnpHcZ1Sup3MDS6yFPt3uk46ZWuYmGrGcrBJ",
  "key6": "4K53sVJ8zHhp4cmjSQAkoZPwzjz2pGg4ypeavxzVeC5WARNKcWBd9a75qkFzmc4d8oyyzr8k9oiTR5hAs5h5sPSw",
  "key7": "2YdqBYj5pXBST1kkkDWJp3xzW1QQ2WYqvSw394e4a4XfpMbrHKDXGgzqbWFhRrTT5ZF8z3SJYv8obRXpifUYPYQ8",
  "key8": "22t8RKEAMXrarRFXPLUDm6FwvFPtLHUGCB1erJRafqU5QLD1j3hKS4f83dgqoPE5Js5WBMScQdTpW8QVCeBdekcD",
  "key9": "2bwTAt2e4X3WbuiUMCffT671N24j6bCPrzyJrNmLHQCdZetbcugkpyDo7Kaazf3MJpyrKp7yQfhs3LspknFn1fXb",
  "key10": "2v2a3fqrQS3LbHFHsYjmfhXLkUUfbRj6xoeFBMvUqdeYBTodL6HiHUyvJy2Mp9ocpJaL8GhESphGGv5wLK2fZhsS",
  "key11": "3Dtec7TWjPJxDGQjpW9hNtUHWLuuUrm6n1UrkoRDUn9DxRUVqJE66WCwkUEP5PpS1egR2fm9SyBUSfmSQD4FCbvE",
  "key12": "3R5zLnA7vyTa2RDGud7oiLNHUxr25zxKEc6TdEf7C7XW5oyfP8MivYuVqkDiJMRXGAXdV6MVZneVVo5vWZTEBTwb",
  "key13": "35zhLcNbe86adGhpnn7CQZdMghdGyJY9tzXzfzWdaFkZeJf4tUzYH7ensg5hi241UZh2UHVXmKa9DpKhYXScmRAT",
  "key14": "481KkWEuJeCtW7fVfzV43m8RJbjDNkXZyHaM5i2NBtSecBBcQs9oHoYomZ56jv6NcpdUDdwWbswphwjAsPqA9W58",
  "key15": "57AH8kYQCHYEkZP6L24yQfk2FPNpCkffqXxP8Ajazn2peLMk8BLF3ZowK929svPQosdwHHFwTTupjn92ZT2RWQGA",
  "key16": "4pEG8hXxoLKw742yuovqr9qQzphrLmdtwqEea8RfMYY3nMWbUydPFRgNmNkXbu8AgWX1HxhmX7yHC3hfTKSBiyGt",
  "key17": "P5mtv16NvK1MwfZh4bUnP6f3QK92DCnWKcxPfM24uRVSY1NKpb2crZrTJn5hXCFSswMysaoSY3pc83nUHA6wpFg",
  "key18": "4g3wq6E4M9woRwV1YNiNz4M5tRqL2doUwtjXD47WcJpAmPhwHxa2ohPxKdGUCSWraZFfXgTkikKZQaFhMogdsYdD",
  "key19": "2MYxf5VL6VsF72WJxTfx1q2bPYqZZdfrXxT9ErPoyYvFkXihfS6gFQc5uwKQSuZCiNLrNtQaP6LffVG1ASv7nTBa",
  "key20": "3AesMby4onfSAJZmZtFoTCYxmYEn6ybsWNcjwrWXmwpEytzUv6memKSYAAax92uAR5NyrCeTCoyjaBQtAid1qc51",
  "key21": "AaPdRVbk2kstx9QKhY2rmPnJZF9gY5YfEy9i48oUVt81UB1pRkKGvR6bsX3iAcPDqBr6yomvs6DetPrC73qnjWq",
  "key22": "58a8wkoJAnQbjfodpraVFab5qHzuWhi5RX9HibFnst27ToGpoBKGuQV4a4GYJG51xowcM64ur4a8PfUDfvLCHUhN",
  "key23": "5nbU7KKTuzEjAtV2wLgic2D1pKqKUMRjJVX8YF3AZ7tmuSXp2bE7Kd4eN8eE2SbAmpytPUvebc2mXLcSdyVw43Sq",
  "key24": "4CWeqr9nYboATpQx2Dpuopxq9Ebar1DaQnuNKueaB1b2X1Ybn6Rx8Qn8RsfDfjfoiTBpCzF4sWhVq4TwbtWLUJur",
  "key25": "3r6G5vJjmDkmwtNon5MhQvESBxLahqzon395n8d3xAX72hQ7L93YYKkXLT1WMfSmF5UyS8HAdPCAaDCf5HRZmydh",
  "key26": "ozrR1jUUWVwPr2rDrhVWiPBzULHuK9SLMFP5PBbz8EbgZPGKVVfjUSFafNN2mCtj1aWVN51nAGtEf8E452ydaat",
  "key27": "5Eaw6aqP95aNuJ1cXK5rGQUCsvrHUJsX4sSee3JvmfoR2Fv7DtS7DjmAwX1wADZXDQZhWoXxF12btYQAvGWysKNX",
  "key28": "5EEYjj1d4H3CUUQyh8utq8VtgiGfYmQCDhVymBgLLbuXWGskkw8SX4r2dSWPVytqSLMwAdVHD2eJ2U3uWoCLUKPE",
  "key29": "4AnL6xTsFSnEtRgyn44i6rkdPepzUbG8yXKnYRiy8F1bRa1ou6Fk4PAVTSwmGgS7C9Yz3EG7uJ7f1Bd29S3231ub",
  "key30": "2a3RJdvqMwMCxGh7gC5JrkxZpokagAJ6k2bvChhZEFxT1gx41bg48mEjmpFE6X5ycPY3DAa5ZK71NkraqvwBYZt2",
  "key31": "5KaTXAu44j8KEmjdyW6gjCdP7n85p4XFECm81P7CMkr68B9AwDhiyQYSCzk9moTrKupz39YaR8fpS8zGGRwTeFWA",
  "key32": "5aG7A2xhR54uQZh5CXHE1m1kGFJW65vAoyW5jVHkmfyYgAXUuNSURVPYRizfjMNJ3b2MgxPEzVLgDJvpNMQaPB4X",
  "key33": "5eqvGoz1qs1nuukJMnHsJLc2vCfQAMhKaz3TqRA7ManKc6t2m6g4YUGK5S61d6xLEepe17UbGw7S8DYz9uDFeUvn",
  "key34": "63ZT7fDnh7GgMjczZWcXGvdDY5j84aCNPJHoeX7ta8QxhRGSy1MSWhGGn4cA5Czvwape9aLm3j9SkaStacvDbP3X",
  "key35": "5xUWw5teuHsCMjhD9f3TpXrqA6wrszZy2hKgNdiTdMQ3YkYKg6QsrTpK7wz3HuRGXVkJfA8qW2sAcEyAYqtxuLcx",
  "key36": "4KvEdFyUmP7iakDEsLBTHRiFri8UWhwr6PkwfRJcsJMGmgQpF5H21HNdk7CZZNtDnQe7njuGuKdHvkA16YXpQoK1",
  "key37": "ieYw9gcSGJaswjw2qF1SxfJ6moXxUxpTh3eETgqLFyZ94E1r2EkWjBiLFn7L9LpbMuim3WZF2dzV6w1DQU6ABUL",
  "key38": "3NbQTwbdd4ZySoaq5pgD3Purosz72mAqVZjWBVpxSYAjmhhLKnaUmUzyc8MVjZt1RfQU1ucHc2hgk8YmRmAEUwTW",
  "key39": "33kAiS1skLu7986YjCQLrownLhwtmM7UwNXPpjazoEeFsbVmz5r6shWKDDj9iJ9W3v54n9Hoc1RR2e3arxFTHinr",
  "key40": "PksPgtKNT9A4uXCpHJWYpxfuE75AYxqSfzf19DrRFpjHfTW5sYyoPbve7vfFtxN14SX1GcTXjvkL5kjELsoXtWQ",
  "key41": "3GNrUREzkezAiWoYqYyfXi4cJQ2BUUHU7B78EVXenZF29CjFUKF8YAtVotXn2tXUp9RhmnrtCafvqyZfFY7iPsUb",
  "key42": "5UJ4Ev7mtiJtg9djNgiP9oQQbrPL8Zf4d2BZiMx24C1XXcXDWK15wmfB2eCyNCh5iZuxG3wZMjPTCVHFKQ4YMUbh",
  "key43": "4hj9A5KH2CrUKFnfhYAMwYD2Ejwg259DgJMBsVnMn9FHhtYe79M5CU61Uta8foDHBjT1nVPt3Xn2bKuJgsdviVcK",
  "key44": "4WQr1cmZgZhwDEJEhe3UJrGATuuQYu65xAWzKRjFks4PkgBTh9de6N4wym8nL4zz8VQMvLZKoCoYuqCqkn6MKiRc",
  "key45": "3o4ssjTmznnKUnzYxRSnixAZViU2meMo3WCdqKWkUBUdqdVWX6Cog2cKhyPTw6mf89UfLcbLq5s4V6z9Qakt92EK"
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
