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
    "5RP6CYuG2ivRexg8mGTvv8dADaDf1oNQKTeZoGNBeHn7sMvStS9mCksKvR6SCMdnCH8otcN7Hbe2JzcCxEydgjoH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EmdJE1aEaHyc7KZz3oPgc2ARmNZmRtfk1q7QHiD3hP6eKUdrZ9ugzAhgALzGufrPp4Bj7jt6inbrriTVWUwDwEA",
  "key1": "3p9UgVa7fYhUg2rqQmWaraF21xb4AE1Q7tDBm15ypE8u23xSyovgZM3ZFkFQD75FGdst157bZPDtDafdRVLPP8UF",
  "key2": "HVL2gVQzJhV97cWGQZ5VP34kg5E65tK9Nu2uscAo41daNke7EXQi1uLv4s5oZ7ndRJhYrkSza57NotvJxESmCiP",
  "key3": "w8UNHpfGUoynKzk8MGjq2XmdB5vkAZyb3Nc7eroDBv6QeR5sUZkchrW4vhnKJPoch8w8E6GPg5BQeGz1i8V3JZy",
  "key4": "2RmkaWqkBZzJ3pT1AHvPtQTjcNy1UM2N6X6W2SEM2giCaJToLkYzGX2ebw3CATfqcG9oXQcwPeaY9F98uwegk8rP",
  "key5": "4zA2uPyaUTzUBiTXNoTN4qqeYL5YCLc8JGxhRnbXtzjLSuJZXLdak3esfBU1iPrhqxs5rkCGSmkCz9M6ADHtz82W",
  "key6": "5zo6H3V8P7jmVeiKunMWgZ5PREnJcwBaRtsmC9RxbckeqNJy194x6aFoY5Ay1B6MA1fwWsnTfnTqPREyvGzbZSrg",
  "key7": "4Kv5raardYqi4fLCcoMVwCuwa7KP8sRj1tqaUurKtjfciCx6YsL5bw8D51bktHWnKfHWGE33to3meNrHWjfQ1Ldt",
  "key8": "55nggsWekVXc5Bn9o28puVtTkt7s5XvL4cFn4aGw61D1gMbth6Jx4CMsnqi9PUKuna6t2U9AqGsa57aBfvZTF3N4",
  "key9": "5j3Epz2dW4hv4LRtYumwZrGydPSh7nWNeiKrszc6Ubp13KZaQzpxQJxG5zyzCgNQ48gGXZR8F5t3oiNBzn6Zub9R",
  "key10": "2vGbLxorD9s7956enuxhNCTdkPQimARBcqBpCkADyitL2wDJ6MC32ezbyuhMUpAQVrLGLh4ES1yDH32r3jwL1wPm",
  "key11": "6pTdUxAURsnRua9vp5ivuqhSYkaaawh41jqAzmV3KVumsqmGwn6tizjoUopPsSoSCiwJoLn91biAQLWgWrNkpyf",
  "key12": "2KSQt3BXz6rGKvizxRSjFUVWe1WA38Rf9DuzigE91DmdWS2jeBvxSnCFiqZRJ1URhTY96NWKUPkaUKwmP48WSjQ2",
  "key13": "5YEeLEGmHx8KKKtGH7z5d9f7HwseBkA69uQQQFSyjJArNpEnfYVxZCzmd3c3ac71rytmCzzao2pLKxz5TAoY7ThA",
  "key14": "3HDYYfia19bQQt1T6LtMes5L6QfxEbaYnhaykXccvbCXVspgyqjSZg7kFoThbVA7CZeMMZAWZSLPrK2rM7z1fQpU",
  "key15": "7zzXHnuHEganHiLj7FhsWvPAKfyf4k7dvVaqANBTgyM32xWtd8bqPGq1dQuBQ72kaYmV8ajLFta3oYMzMZcet5f",
  "key16": "rhAWAPWfvvrtBARDouESNux2CmSNFw47LdCbDujXNF5d9eaQUGSXUqD4tESsYrFNECNgAFQRe3kcRkcB1XugtEB",
  "key17": "5Uxwu8dbKrC4vSF7nP1KeyFAiu2DUkjgTpGuZovv6fo9JKNzL8QPhriCh3cRxURZCkxEkp6iEiEmhjffDXa1bxme",
  "key18": "2FJ8hDWSyUBZihXxJGV35WQvLkR4FaZRhyW9RWnijP8TfzcwY5ECtjd8wDfzoAmrdczcWbDiwasfodzRdotsPQ63",
  "key19": "34bcqvQM9U6vDUoB8RBLqYPSiYMsw6g37VY6GqWKCL1JcftYZiEMExbBX8jmcFiaXuFkWkSHXx3sC2iyv1uLJJ2P",
  "key20": "5DFuQZwHM3JVVvoec1XuuMyVMq63H6HWKy8KgkZaD5zdcRwoWCsTUPxi1nrq6CEVCVhjcYhQSxKFAweWeygGsSJ7",
  "key21": "iciNrjnK8Nv6dcn5J5jubxAby6NTYMbcRuKHHvkqKZu4abSsdMnMEyFcsVsX7Le8177UZwc89jjh35emn1Vu6bQ",
  "key22": "24QkQWLUe9yuxvPFANRwg8puMs5Q967FHyetQvPPtPcYnmj9bMVsWJeY2DKU8ncFncU7Ggvo67dboXQK5f4AKp4F",
  "key23": "3PoL2K68a3tpxvJJKDgjL15L9zQsv1bQibfiB4MkmgCu1mazWCycAfJfPnEnJXLMiyLL83Ki8uuxLnh4NuD5MkMs",
  "key24": "F9HQxSmXHo7bGoLrc4wu3E4cuWpE5MSaRk5nRomgc6mLgPm82a5zBBFedVjkyVYvQoSUZisRwLzHji2Zm3hnejE",
  "key25": "7RU5TBkGVNB2NjQuaQLv8cCaYvv7N8tziFNQcsbauATtv2dsKKR1MgtKpMEJmVweGg44z7Bju224p5htMocMwXH",
  "key26": "pUoTcdH5CfqRkyw4Dygm8ysfuP2F7ZaMhLvRpVw47Zt3FBbypKrTxqia9qk8Sj6c7bqWrmanMz3wjMLSSEKN2Ue",
  "key27": "ghbeddnzkhvUCSMvVFZ5NvCbSP5NTMevw7iEUEiB8c9B84dLmgcD271EkNUbs9RcBM7TqFWojw9wLat83v4juxT",
  "key28": "4PGyRG73tQJg2sMMsx1Z9bZ9HazGNdTgAbKJc3NwJCNbyJ6DPjvNsbu932VfQc6H5SQ2kXk16kvGamq1U3XAhVM3",
  "key29": "2q6B3sVpGczRQk3iKCUP4hogjoooJuNGmjZ1u7LT2m2gMf7UaqJvqs6BjBByfUBL1vcsFAqk371AU2Q5xiazNrHk",
  "key30": "3UaVTfYvqWx7a9asMzpLHHWGD9ftd8WTXnVutwFM6xsJ2eSn3CC7KkFn5yH5kYapgKbbFw3px96caQV9Bum3cGFB",
  "key31": "3Vbh6aEP4KR6YEz2vvTsW8ZNSQJ6EzthFZLjGtooGmzKoL9RYVnuZwtNJvACFDykA7iz3syMvXwwZFjB7MQ1enL4",
  "key32": "yfCJgn4tFeWa3odqLSHRdSi9aX2zAB2wixV52kS7XNVx3CxSQA2jdBgYksmjsuTbnkHQNCR2h6rWtaYskYXbH9M",
  "key33": "3E9ATVc7gDfJcNSXAQHZJvjGCouGyoWn4BfnThvQdvXA8USXL6F5Lbw61yjTnJwYN5R4bFrod8sKBDYYU1N6Eskg",
  "key34": "4HKBNMzAn5JEFAUP5xhKfvYpwq3dHP5nhiaedR5vEEaBVEdE96bF1jWDdPGANJfyoF2RaMvVRGVYjt6P8D3A48JN",
  "key35": "4uSZg6VnFS2cUejrP32ntKg8ag8pdfo5bHLjeP9LqJkdVAgA6cD3QYxrv19Ci1fVFCijhyCowqUNg3audXaDy4jM"
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
