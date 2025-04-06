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
    "2T5yoqfQPPqxuwcjo2Ayqwsre2XWzCbYPRmmHnxjWkkDK7eyVKUcAgKYnA6SYQkYh6gAEvFmeVHyWy51M8DXqpZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Exygh6SqBbHmrcAHU5KyRvmqcT3nEM7MXE5BrRirvgujUJv7fL1m3cs2GgQTv6LcHEkHUT17bB8LzLF23ZiYeDA",
  "key1": "34hRhHHG3TdJqnPy8tjoJ5g756QDXPWj47Ps4eR9VxCykD1gRB6ntjCJUzWYUbuKorHZLpKamw5nGBBRTW7qCVTz",
  "key2": "58Si6oFkDG6ESkFRY2PEpXoU9pD5mLiLbdrFA6DhhepnumDyJxvPNJRKSQ9u8TesxCcZhBxPfcqw3y24cPw6BvbY",
  "key3": "5D8LNVWeUUgkWNqsdJko93pqBEi5JbxFefLFnpM3YY3RB174n3KPxgzUA4DhMgxuSvUEpv7WmVWmU1SAGRTxA7G",
  "key4": "yYQqSY8pVMddfAVFJwGzfq1pAtTvu7EspZbtcP4xd9gTQgZWJmwDeP1ojoo2CNBGCfZ5axjK8PHUnFTS2gV2JVb",
  "key5": "eFtZQGe5HSEVXwDUWKgHEN3MyLS7bT73Jpxp557crc8mCi8RbyhVWQFco8wJvFbyzEU7Khmuws6FsKfFvkibgBU",
  "key6": "25U236N8cJH4GfTBZHMbZEtahFpHxXymAGZJbAv6yrmhcpRcQaUbFoUrQAuVgXMMbq61m3aUhE9idD6ArPkM2Sd2",
  "key7": "SLT6N5fq2VtRBmFuNfS3G6UK5qxyL1txxZm8Lw2CE5J1Kv5CjR5APA2uDzgYSW7W2xBtgDDxyFnSm8D23E6Fg3S",
  "key8": "ipDVUG4Sjwci6oq2gviN3gNxdCvctYwb25HmAGYvYZcpCSTfByu5AFq46LJYstjQJZMchDQPUynC6FNWmm7Sfb5",
  "key9": "2U4jsFt9tC74nhqisRLx75X68Z4H1CQ6njyVw3Yyr2phGfFPpnE8imQEg1G5aSf4YuNoGpsZbSoLDaXyUCkxYyvK",
  "key10": "5Ck4hm3FUJMjF56zWcZHRr1g3heNgmigB6MyyUKk3Dwx5ZF1KXvCW9dJGYrLSAPNCbJoW5AiWvzUsP6GtBVdYoVF",
  "key11": "2bd9YrTBpe3tDWkTUfP4HQjmW83BRsrXLdEDYt37iefH5x6AGMymeRvd38MYNqRc2CfxMtMiewjciYU5tHvTWtkt",
  "key12": "5RWDpnr9oMyMF1xcUiLT3mTXg1H2DTRxENTZnh5r3msFGxKhQFovQQBDmXGWy9H9sHrfqWFsyBF7cawjYKXzE6rr",
  "key13": "3K4PPcG4mzE7cW8ccSLN71HzB9NcujbRST9SPqrnToLfHS6qw6kqsfBLRVK4SktZWTbT3z9RpFw6ygnAsY2z2PGy",
  "key14": "64QYeUZ6iW427cUmGCu4HJfthnDnQZpLx2ZCwZ46c85ghrARAdfPUC1rq2ybaDpAjP5FH8jz3Bi6fcBR8w1Sazxq",
  "key15": "4bVcN7wv8U7oxgzP4gckqCy5tV895noutAsa4KoTSL68njUGR4H2ZDtfs1Cuebq5hYgbtNKHeQx2ApAQUNKubwxZ",
  "key16": "3ERpVmYGnh9vkbwbhsxjbg5yoMqeTtqLVWGvVxVDmojLGc5f2P4qNt2vYEEMMa4WUQhhieXYd9aJHyxauzhJ3yXT",
  "key17": "6wMQgeyb43SRJL7JbJf5ch1WTN5Hnqfqg1GJuiKWgJBmQnQr1x3x4aPj4MskSNVTiNypECWd17hVHmD3k4zqvYA",
  "key18": "5oFJU5Vf6J4MJfg1VEbbMR11XyE9AgkHRihxDDMS2RkUT8eddFYLVtvNw8zLg63i5U1HqoCb8H2YiGd7sRy99q3z",
  "key19": "roYuWYFsMYbnjS8XoyNNeExXmfEXwEP6xZuhvjQas6eB6AxvU6mNSqyQvyL1DZ7VJBHWJxKzh7T1uxjpQ2ienfq",
  "key20": "9sANzWm2pDqmvWeCzCk5muuGWqtxwmzokdvoYbUagS2Unughh2VLGr3Yna61k4jULjkGnPF4xeWUHEGDjsKvDBS",
  "key21": "5ZSjnxE12VM2NJsejZ8LwrzN1KiZToEmyygxRM6ZLHTEL2Qq17YdWjTHwNJkJW9WSmGjwThDJvNY32XGwdsU95LG",
  "key22": "ELD9CwLVPxRkM6gEPYGmciJz9Au6gT2kLPjnREM23zP4w8GDjUr2yEgXXHBvPEYoAgMtzD2WWcC3mbb17QmKkrS",
  "key23": "5p9vpBvc3jgGHQByzVb7Z5cTUbYdv8Xe6y5Y4kEadmx3AkerJfHZaxwPHhRRNwknQX6o7qyZEYxVnfMWxdRw2RHT",
  "key24": "3hMxSs692eFnTrv46sN8VLQXGL6QBwd8FBdQuuYTE4LCDxnfcEGoWyhsvU9bpSRaVcgKmPF9KersFBf3szfeuYGf",
  "key25": "4VCSVXQFbpvvSPejDQzpbRm1oc5hKJHFa7Ao99E8hMNw2W252fHij8ojJHwQN3LuHj19W75HuQWCt9knA3PJRa99",
  "key26": "2suPaqiVs37QJCV5xuQCdENnomj8J7G7FjgW8xepAaM27PVtdqMMWj8ctvNnkRuX5xGixoirbnd9qtRZx49X1B6z",
  "key27": "5srWXCKa3J1RMRUP5tq8end3QE3j1XhdEe9HnFGE8SVc5tRehXDxzKYnaHSULiL3U7HHfdpp1zHXACQ8ynEh8ADt",
  "key28": "57yYaxCHx4rhX73KEk3x7efat6V9f7bGEYBh8QN1moz3ZoafkG1TQjv1PCVMBFwBcvTCuzaECv7UiV3L2dfE7fNr",
  "key29": "3nDeucRvJKhSWV86jNRfSsm21YnuoEpBHbgHbpjcq7m2EqUZCfHhYiEk2f45qc4Jc5s6G2xBZdvFdJdnUMmkf4zo",
  "key30": "5bGZCx4oDFjF3UmJL3xWAXdK2m9Qjg62RRawtSqzf3zyKa1hMimKXN6JCn3N7zEZBCov9KEr7nXyncprBX3aDHSf",
  "key31": "5bkXzxqqsBLoNXSCeyaPmFcjf1hANxHWmXSH6xfqUgDo7rnZ3ZiwcaF5rfUoPEDe5dKV6AnAsh7QM9G8KDkFJrDM",
  "key32": "32CAbSWRdpW1qKsiMAmWsBeC622feYkyKhrxEt4Kqn6UWJ7jm1GSefZX2gDC7TABEKRKiNDzxFrS8egkz2e2bVeA"
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
