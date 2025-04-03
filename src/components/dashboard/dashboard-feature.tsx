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
    "42a6JKoGns1bhY7or9Kd3V2SBPPoZdrvaqjni9JQgj8NmToBUCvmdTrqMsz2g2JFLR2wcwUhfjjg3cQSt51w67K9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "366zvTM49Fmutwsrg3tU7sRXRvXtM85kUy8i1UpBQj9HwJsvx6Upb7cfBuYy7Tv2HGHP46ePzAuSL155nZ3PQQyA",
  "key1": "2SYuvpwddZYR4UmcmbqzJUgLQBQqrBZirSLQGBYoJtUMEcrAwKEKYo8HG6DZe16QiYaDqLLupxLcHPJviXtNU6r6",
  "key2": "3sWHkGTKKCxAwQpEYhHqdougL5tZQkAy2GfvgmjhpisNqd1kjMkBGm4Wnwjb9A5RWB5YkF6ieaUhgrCUBstZjHQS",
  "key3": "2VzJYavnbMHLHrAK39bkhCrP52f4NQj6T75UBQnjJaUUTYQQvZFnRxyhpd7UhoRCDnNABxU29WhmvzMSpjXzz8EJ",
  "key4": "4DLkQtcCzHnCfsGE4Xkr3qpaoTL67SozRN1F2HQJtyyS3ZP1sRuXYnCQggkdgz3dY2aycF89BTdyiiGxdFyUeB2v",
  "key5": "472j2pWNfpbvkqqcQLpaNXwhLKFt6mEu5ZtMKLAAMMvxoQ365kNZo9xwKpwBu4ty97HjPDeARXjFyRjGJ2dku1Cv",
  "key6": "2kZpf5YcTTxdXZMEmTkGsFi79J2zowGirQrcz4XZyHSadcVZyPo6cszyqNAU1KUCDErFSUneFwzEctb72uBuXJjm",
  "key7": "4qSNv2ermRV9exH21LwDcMpEW4qR17tBTB6An5waBYc8zHxrUrttgVDh6E4tFtGDcECvyYpRj7YAY3xVps2B71MD",
  "key8": "4a8oovjVZwMKRLLG1A6TE8ACnNivU1yJRD3wy34uKMEBBHfyZ9BwsiQxtmiiuyxVJDcCWxNvcDhrSWGjtUzztd3V",
  "key9": "4MpEg3msL3WQndRTkp4aNi61y1frNH5ozD4TXHytY5pVhYXn4aZJVYrR62H1cTzBkTz8pLs7c5qGDu3t4B87D6ep",
  "key10": "YrpJte3KujZtFj7KHYxbRr7WxA6LAUiGaUTdtEgYmgBVEdUjhqGDtkdRQud5Mk1xwkCCcp7ULZBb397kDPRjx15",
  "key11": "pcjvz6tHnNVa4H74g9zrpgNnQcFQGVWRDswPjo11Me7WdeyrCrxeUR5fqXu6dAq7MAQBn2B3oH1k2rmBRGFqVKv",
  "key12": "553Gg7NFr9w3Cs3hEMUBUHBznBAqXRwpLAr6QeQN8cunPHh6qiw8us8wNFUB2h7ZLnadWoXuDzLzhtN3qAFELjWP",
  "key13": "4vycqRG32iiEmxxKnMDqtYK2fEZz9ttXQzqsmKRri4AoQe6ctWDazZgABJTDRtqJDSdM4L91zKXQTqct31paYChE",
  "key14": "4tpC217q6EMsoVf5QvCKTcgdh1dc2mC7AeN92oSypBWaLv5ksbGMcGwyUjpDVgHXpfukEcDWp589ufRvJttiiKvE",
  "key15": "5oR7xEDkQGBctieMeQQJhR2HYayphYxh4eQHp8B2fPdnyZNjVp7bbfKE47C9R1uSyaJDdMcjEkUVGkvkPEurqhNQ",
  "key16": "5Tbvj3Fq3MeYSw1rSRY43LPQ3qcYD4j1ubCPjg5WZ4zME2vornag9zXZ2uftA8uTDCzZpPi4Y5y2eA9DqDWakrHY",
  "key17": "3v1imB2EwrB8rm8e1bqtYeh8DtGVfRrFeDyfHvwQXre74tEfp6ZezmVwrTAjNgbj7Qhp7KDAdLhA8bZGHXMNowa6",
  "key18": "22TpN5iEW82pu58xdHN8SSbgHhxPu5Y9HRyr9uw6ULGiCtXR19dQq3cwHyA12uTzi4cihLFdXzLMkRxzPhd1ze8U",
  "key19": "3SJQS6dJbw6tSnm5zqu82nfdQqRuJS9GpTLvKrTTRvg4ybKRiytQwSQ9uMEXQeNbDzvtbZzfujKShfe6NP4vngBx",
  "key20": "o4coSP3EVq5wzu6JmX4cXUQP4uQh334krj3WUQossVXSsBtYDk3kzaD2BjuiXPzzPwk3zmLQHRvbNzUnB1evHdj",
  "key21": "24t84FDTtcNKRmRNFRvST2vnmLmSHFkFvVUdcRsHNvpE8gK88JSNkdU6JESuhq1vthVV49cr96tf8ZVz34Z7CFru",
  "key22": "S6m41bQVf11k5XNLypVtcumXz39hyfJ1SwpxXWTg6LJazJmWvGPLvq64FsXR5rbwS5Pa9CpSnx4jcWM1rWtnr9q",
  "key23": "K44Qj82r82bhAZTcGceQFJHBapbfdfvsfbhEPJTvBfMb7ou4Qdn2DE7PjXVGRyQ81C1CsW2jD1QHCLw8ir9jsM5",
  "key24": "5AskjbTdZryL4TvjaUeDgXi8Vw5nUmFR6SYCas9fgngsmNVmfHdPVyDab9bbUWpQ1H48bEGu49ML5CC4mRuqo9yQ",
  "key25": "5Tp89jZNSRwjY9vf4vX3Ccf1hJyAZguDVp6CQEcCG5UZfcJxUAfxktaKrWy372LMvWnKx7XJrraqX3GG6hnBW3LE",
  "key26": "4RVM4KXdLgson5idNDj1A1jgjrrJZRdgmBSFnQhKBwtUfV9MtRsHyHQDczQ2qBADmHYi13uBRXNRcd93Ryq5y6M",
  "key27": "2LqZFmaGUW4jAGffDdiioL3J8GcQQ7EzcFbWUiB8cEsTQgCvbYyjnwVGEoeVtupeg18fEkEkMWByvpaS1orjJayW",
  "key28": "4pTnfcL6AmAfTzRMswgr8pp6j2UXnE8ZCAuKvg4y5pVLq7GBTMARj18zBRggAzJVmaE3rnCxjMj7HR8GrbiCEn1Z",
  "key29": "4NnaXQvMN9FQg5FjxzoZJBPdz9rpK7PzW5wcXc2ahFzqNHXhnS7pDdNUzMjBFTptJDzDco5Qh5aDR6BfPJwERmkM",
  "key30": "5uhaTaNAzEfJbtcZsyjPHcXaRn75AzD1o8GT3SMM92PKSUPKYymZaSzDbQKWw4NjQsDa1JJK9v55oGfSWgbB1kQY",
  "key31": "4MvNiBnYkahSU3R9jJNTepjLsNFxsroL5H56iAY5qyZjxFdeR3NzY3mGqjDoWbuPzN4CBF5Yti7Fz4ZudPSYyRTU",
  "key32": "4NRngEUV8aN8zdT5DxerUuucYb7mZgdM8e4CrfZJiW8WwCia3bvRG6g9fChPZx295HL1pGEfZV1sAyptCKcQ2icy"
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
