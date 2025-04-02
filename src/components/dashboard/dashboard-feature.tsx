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
    "3bQzDnGmtkA5wqCYqdBmja1QfgsjK2AjqHp37ZVm7vSDYJy1p8L3YfSh7GXq3z7L7ZxEpRD9jPvDwcYnKgats4Cj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F6zfuzHeyR7S43SbTh5kkEUvTs3Eqt1CecYYSrjEfer5au1DvfyhngkYU5LXFgryNRCQNh7UsPLUbmEvjq4ZWVh",
  "key1": "2FRTRtjo45g7w8bJBFoKMHgge2bgnSnp76zkt5ikwmWRVZcD2rm74XpGiribgJbDF6irTZySWcFPpkXGChx7ACvr",
  "key2": "dsqwvTJZQA6vwkS2mtpxnA1oY1LcQJkp9ZqWBMDs8nQrMJoygxgoFYG1FX8qqypta2UTe4crZckMa2J6GLeWMUv",
  "key3": "2hTarVSqg7pnpF3xLKkgWzp3grZq3N1GFqi6Us7srDgZp8VMg8rfj4cQhjcBTCbw7CMQm6uYhdN3GdE5wkvD3Evz",
  "key4": "28Lw6uDWNhdWmob3jTx4r6d46gdwDdvfKs1sAbtUcuqtQZpdw2J5vKXUmtb4aizWDGuSAGnbESg1E4SL9uRpc5RU",
  "key5": "Y7hegBQc42xCoRB8rwLaXVfcggF9zumebPPcuZCoxDDLjgXz6e4QwHHuYcQbWsFKRJWjvTgTJf1hmxL8A5y29Jy",
  "key6": "4fupAynW9JffCevM4ZsXPfPbqUBoYnxuG2V69AzxjvasgY7h3ndNwewKWaYBzfxt5FkCa6JHgq2vZ3zptovsPPJV",
  "key7": "251KPfvDcEvKKAUm9NXTbiXnBEVDRSXFxqGVqGnHCtgNEKD9ikMZjHKJ6bGdj9HZSdFyoRHneZtckxqi66yndTGe",
  "key8": "66acXaYQm7mraAuxvuqmREvhkr71bQGCUqHVHKx2F2jS92f3ToS43ETcLwgqbeajmK81fGf28E9LxsvA9UmDbH5A",
  "key9": "3a668ZqQSqRdPbiKe7YcwWo2PieERUzAt8BVSB7qMckttht88PULFx3krSQnkuPPrnaaBAmDLfTqrend73wjmfhP",
  "key10": "3A8FN1oBcja1EhYXu6BtCBnkpLekZ7g5Z275qc24fBzHU5oZ6jAsDreed62HRehpAuqw1K27EY8GxfW1PSbjMgW8",
  "key11": "5aYkUdLBvycVwRKEJzNThZ4oQGivsgwnUbhy7kq8CdN79B2VmfwfbrF5gJApR4sLyTE5SZNaoDuNKgnMsbFZ3veJ",
  "key12": "2bQ1yTWX1MVAiCnSynxhMDzwtzg547MbazMAchAhLeoGPZpdy16Ggq7ZtnyHCCiCz84dYgb6RUiz4id1Z8Xug8iZ",
  "key13": "5We4FcT963otAVqABUEXQ5fvpnnhTaRUSxmnpRzyeEQQ4o6UjbM8aAygggGxHS63oWEqCmeHQTJe4SR5Hd7TJSZ",
  "key14": "49Bbu7yoVzbYFKTRcxdkQW545GBJxSK1LM4trYECDDTfEm6rG3dL38spMNuG6qeRp5QfVUGDxcTnGnyvbcGdy8S8",
  "key15": "ozJP7bwcYaGJnyEfe5J8cr8apznCkf3zUpobqyHCtQ8GPQmw2FQG2rg27tXwP29LVU3sq7RB6sjRC252LrrEAus",
  "key16": "2DmTxeGw16Rz9q2nEW5PnnVW5BWpw4QUgKLuiFJg8sKcyqVz4gavuP6thHSn7hMGahYJxKnyycAGpFtLDZYpXvSc",
  "key17": "4SkEq9fyPiiRvmHiwiy6jFGX6XVZCpmrtBHyhW9trdphU1jzNmcKzJaou7QZwKQEJcyK5KtNC1TdjZJzjazcWn1y",
  "key18": "3zyJG3KHaUGWGsRp7WwKNRgdXRxHvz5MjRUvTVtP1cjVo471dfWNVzuionCPLdjd5bm8UbHtPQMJVkKJSxNLo2Yk",
  "key19": "4WEz68wq4AJZM4S3isGq6sGaofaz6tEBaLQDMSMTcKjZk51QMaVNDLHyZfUUQLdqmRQHqiZTjJM6oHKd3fEVQ8u",
  "key20": "5Rurh3Xv91wL7kUNWtiXLj8zywtvv71iwiYac2aEyLnSCUHxC8CBMxh1hg7fFduYE5Gvme6WjijkvLNGXiP98Fi8",
  "key21": "4QvRNtYk3AHS7bbE68VH38bsR7ff1hqC4s7bDgChhgqoShY6p8fD5c66dsoXLJNJBBVDDNa5tqFCNWy4Bn8nGmbL",
  "key22": "2jLYWBGFyKcxywBFQpd16j6uHi9yyuhfTA6e5a3VbHjqCbaKAoUDr7MYUEmkrDytS1oX7PENQRjnsXeg6xBwgmkZ",
  "key23": "61XWZBn87sGKHnsSrg9S3AJCKmTB38VwECSMB3fijtSrgJqkiQhXDeajFTgYZ5PDAhrtNJ4MoiUssGigH7KojkX3",
  "key24": "2i5dgPw2y41MD1Y8dB9rYiLWy59iQW8uE4qQtYUJs6WRLVwLEgRjKV8LeSbWxZRPpS3beLSVcZPWkWmBsnHodnA1",
  "key25": "31DXEPWwqSNBrUECEt9QzfttinPkNiumZn6Xe2uc6gDUTrwBgZZadbWucSYsguZcgmyvCan8UN1ec71L3RWBf2e",
  "key26": "4NTRaUphNLXMFezdEZJWcqVisPuQR1y4z7j32a313SpNmwVtCJmewE6YJyZfJ7X7oHzWAqq4Rzbk6TgxjGBvf8cC",
  "key27": "61FtAYhQtNKYfH4pdNG4NV7ddpMN4PWJRWZtNGVh8x9Dt3rTnnDUNFhNYKWiE5u3XsQJWc62sLtYiuiP8uHqFFhp",
  "key28": "5MyF8vZjSkPdmjQU9SJ4yQRE5fc8z9p4WdFCFKfUGSxpqWBSThztwTvdAxCbMBB8y5PPincZZBt4R6qbg1Zvmu4j",
  "key29": "49htiLGcaV4pKj9Gtbh8o6L1i7EMYyhi59pnjtDxJwVVHjsN6fgB3Qwk4VJLRMhgQpbWCDrxUz2JuboSyGgTL9yz",
  "key30": "5zkGfKFXND5AivAGUoNJFTKpBt9wCm8tLu6EbTZREasf3TPKPc189GAZm6DavAYa7GFMcDxycBZBFApGhNNS8HrP",
  "key31": "4aDrhLXXJUJ7LQkXp47H9UwU77G2hTbGxa6AeZ14LK9fwzFUAeQtWBujpxv4T2i56PnfYD2h6cg9gRkRPgxQVjzd",
  "key32": "4c7QtjQdewZPVUaHvGpaNXUiTaxA7KVK2KWBWjYk5DR1CFUdZoENDwQFktcavCREyLSNNLZpnYkdj9W34hfFLEdp",
  "key33": "5eSun1MntzLNHRjvHqPrvp8QqndVKNDGPTEowYbgqYDf4Ge1MKTXRyW2irhnH9vFUyPfrXZYQtcfSv8TPqnjXv1V"
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
