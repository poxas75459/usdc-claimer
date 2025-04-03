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
    "2fziGXXdxzrz8DmHaMzbv5jYMWMBZ9bnj9W37uSMdQRixZNhX8prUwBv3ekHMVNpuxGe7UVnqhAypJsji9oAhfLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ya2hQbuFhcn3vgnaoEfsow7FyaPLGibub12jZh3CQ4QBjWeau3AWmonFjrhTWJQGq3DTJ5Z58URMNFYMaa9NUGK",
  "key1": "GDes9QAJ7ockPWC7JsxDnKPu7ZZf4kkqNMq88fWs11wufBe2gBNRJNY6k6koZjo6ubGiMdSRdkQnHv2VmxGdAgV",
  "key2": "UxutD82pADXGneqUw2r1XVTrrcKn3tw1rq7digbr16X8tcbJ3rCCRqcLakcqwZgcZcBjaNhKVoqFY9gkebNyM4K",
  "key3": "5zKGugxjwjtuDAhfEf4naunk4hWcX4fNhEVcqAVPD15KNrFTJbYFzxeEKAJdzwdKWEAgLU4HxTNeYTwtsKv4NvLQ",
  "key4": "35KELYTLjXbYMeAvJKnbpj7Ym6foR5YfAWqCGAYaqB8iReyjMx1jpewBkNwP3BSQQsRLexNCDgKALqz6R2Wt9zfN",
  "key5": "ebgdhrDWLarRr9NeTzQyWrY3Qc1iEGiNHy9BHnc9FWMk3ECAiisu2wHYyFcnpFjwE2RstFS7KLdnKBhD3uQuMfi",
  "key6": "22hBa5XyFSZyF7EMuRG6Urtbz49LrsWsa98rtxGVQPjDNVFAqsm3VKfe2Lvpazp6Wu1zEXmHD6Xof2NJTvbugxSg",
  "key7": "5T9SkZLP5s52RxiSbSAwTsZHdHL6LCviS8gyBNiK9yhsKJhMSfVtBQD3h618Rp5zK8svszeLDUaKqxK5o7sLTGD1",
  "key8": "5L8HZ78Gx1jc3Wq1PjtjPK49t8kofwqM7dbJUzcjFPBQBp2YkBhQpAHj2fLV6tMV9aZ4jaWvwNSWJKn94MfjTaNF",
  "key9": "2qyxabRjpFwvNVtNhvTrRx6L44zdZr2WCkhXfwJ9BEYTfu3WSug9EfBgYVNSdBi4gzsuXYj46QmpyFZznCAE2zRZ",
  "key10": "tZqkuMHH5Z9iqeQrg6h22vPfspUQcNR1vz3oVUbeEbKqcJL3Ea6GXLvzmAs5qmHG5QrBz89ewEudqz1dj2kvMnw",
  "key11": "2eoHk5NFx4WvVTx5cfoGcDJtPs48WuK1odu9NKcthUKjPRLTXNkynYhJCWjgcMECUR1p8vhguaKCHvB2NSjyCf9A",
  "key12": "2KzYA5NH1jZRJsVqMS54dmcAd1cVL45zaT9YqjFxSqErDdUWCpCUtXfoo61ZJBtWr2L9s8Qn3bR3iwmBwwiQ52ui",
  "key13": "277LZMXG3wDiyLaKyZXKS1m1vP1oWXtZfhbrEFBiRwCQdvm3WLe7yvP3Kw4Vpt1S4xRLG19eNdozPmP6d2Kw8Mf9",
  "key14": "5XjvZ7taCFdeb4kSiCL4BCXJ7fYQcZDehAcSYDV4MVahmAS3NfP5fXULKdeNqwitJiZveE4YHh69pBT5GsD66VEg",
  "key15": "2sEhe4t25qySZ5DGVgUuGCi9FJx5EXRz6nDgnfDcs1GML4rMYuKtKHdZDyKwc6JuFkMivnyFbHAgFAP2pQej8g4B",
  "key16": "2yavSuKbceTpGJtVdiJHZ1HCK415MqnTfRhF8VxFwaaqw36khXhC5FMWJrEvJQZCB8rTSH9kpE88UogDNNT2qNDE",
  "key17": "416oxZpuCWHGHtotknbkQLHts7kL6yafKGoNnc7rjXoPKBtCYUHfdQShNrZY4fnFZd26geyVs1DrtuXBNP3iSbm3",
  "key18": "2wAoYWKbF9d14DAVdh4FGt6zwC3qUciCwfcmxPFGrZiKKaQfUMTAqL9wfB2eH9VGYSmckbXRuDxGt8wuYUkHXtpy",
  "key19": "4HQ55f6scudZJ92gjFgikDjbb9wDTTtGsekQeWEiXAUsv1WBAS7oXDomoZbHvLWH3KAjnYHkWPTsgtCSU3Ah36iD",
  "key20": "3yiGf7wTGAEvmEiqYe6iaEnAU2CsZmEG8AuV8SUSesXdnursc63Bs2yp8CiDi71paY4DvCJq6fkh8rP2ibq9ER4b",
  "key21": "3Xju4VRh7KYDbpnfAM6hVGHMApXtpMw9pUpxkU52sP9ZNezuANn1ff3vqfjB8Toq4Ne2wrru9j3P1p5hYgXbPTzm",
  "key22": "5bEzWQxHRuHNyamFXycLrvPa7PseaA3sGxoPCqTkunDxYrW54daR7dSBY4U2banBbMiciUuwcBwFSkmZnMzGahyC",
  "key23": "48d3v1NVksP1DCF2M9MGTFLMRjhicULHzF1K9CiLvGJtJ7oycXmQmyQ2Mjz9RuXfMTtvDeKCQY2hNB5sudVLFJ1b",
  "key24": "NeKeVuemyX5auQfMCsojoJYoME42XA7uTAkD8nCCzkFrVz5oNpDn1GnsGebudiQLJyPnfHd3Vm34pkuXE5cgxZY",
  "key25": "4WoBjRWu9k6gVNtkMfam1HkRzBu7Yw9PQrY2H6U7G9Rq7HUV9AuyS3mbK8n8bNJP7QByMQ3NQs62iYQvvzg1peTA",
  "key26": "327eJyD5xufqdwsJb6rLVNUJmJn6fej5B5iq9Q7hc53zivyMPdtxLr2EmHykTpns68WMVwYnT7GTJdySo5z8d46D",
  "key27": "5kzrsr1Lp3MkyfmD78vcNzHyKzTQN5ZTeNNELpsM6QZM8gYGWyucYKiSm1QyqdRQuiu5Rd2z31PVdJm7qbgbDX7P",
  "key28": "4AXAg6em59NXpL6ev5vKayUMMTnmzuM3Rrbc67AfehZBoCn5PE67FFHzi8vXEqk1JLaJoCB2KC6shTRAYrbWgera",
  "key29": "39zRR6LKBqGS2HYiz6djy2To7aRuwJGf6sjXjFU72DRJ5jRBDnsSFzLKLS9uHE77v4HHUxMY6nAxZjLbFm2mQfqy"
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
