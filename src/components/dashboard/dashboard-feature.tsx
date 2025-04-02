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
    "3vMYh4TKJZkh6foqBk7FSRJUk33tq3AYC3a4dupiTeDudaZX3N1C9YHCyBrL9CPV11R3QrAi7S8BY9TLegE2CGqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MwjJj6F4XKZD86v52scZy5DR8vA1M6LFghZuHB42Qu4uKBQRJJhdZAJDF3KPJgyXjQv7cJC3oMR638wx2WxDSQ1",
  "key1": "4rxCXtnFbyskbW4VyhvVFAWKzXmPZAmib818eBfst9qimLBAfS5TX4DkcnkDXJE5A2ooAJz9w8sJgiJiAjP3eNAq",
  "key2": "5MZFKj2dsqGkNKhYnin6dvg2jTsrKnx8RR8Em8vB48rinxkAhPRA9nLERuLDp3F9ziCEiNeJeg2usuqDoosehby1",
  "key3": "2kzZZHJfyncUpTfSNtDR4N75dSFQtwPW3JjH4RTnEvad6KrTRzhXVUAbTUmpfTQVWsv15SUTNYcPFvnKEtamzZQe",
  "key4": "JRDSFyvhUjC8K8BQTwe5T1TsSn8wcHnHLSqBHkq782bE87VahDRyznW6478m6fUvPsM1puXxWjjsJ7tVdxZTnY7",
  "key5": "18Muf5B4PGCahC1rVQ4sV4tpTcvZtsfNQEBvmsrcth1YDU6inkVhcdMxmTDJJ4G15s1j5k9cm81osEoYt5ZUtCi",
  "key6": "TJT9aDGCJoFmBRpMXXViL3B3KtidEjSUaRowkoMJs7yg23gV4aSESHungb2K9MZzTgQ3Vm8A5zNRxFbj8eMs4HF",
  "key7": "2kSWucpBLfeeWPDknXgUD2j5CqdMWfpKNwkKjmoGhRUiCJ5tSqRtRnLCMFCx5LxtKgSQskRkauSLxMcAC6rkhLjw",
  "key8": "5wusmQv6PgWJBwkKYVTRzmcYkKkBp1uZmw9R7MDRWayzhu8o5amPrX3cUiK5fiCpcktttEDsyrPME8SzJQQoEoPp",
  "key9": "fqsporA6d77mHerkh9wDhvfVSZJfTGJq4yc8JNv8v428NoLgfeoTPSsw2gCKi9fXuLrmYnBTayYBzww4hvKk8mK",
  "key10": "5DfgBuzzn5zXeTzDBj53FNpMN7Bs5XphaVw8vCcqx3tN9GxSR2TX4Ca8Ch93vQbNG4U9Ky8S9xi9ZnikEhNXhAog",
  "key11": "3B1X5civ7YsxY5UQB4eC1KUEABUcVh5Lh2T1wnx2CPP3sGnWaGJ7xiCG6gVMHha7ppnztxPssuKYwW69BwZN3JvN",
  "key12": "2XzwVZ2rLTjauiXWnhcKXD5JE64yK4ww9YofxdPEurmkkyFmfw5Xv1K32Z3F8V9Wh88CxBvviYa4TPk1TomMqfe3",
  "key13": "5NyZCr2KuJEETdkav6FtDPiK49fzGRpnWEFPhnzoFktDAFH8BQ5Gwbu1HFgcGdYWJ7cZfsoT8bCKFeRYb8DxxwPJ",
  "key14": "3ChSJkAVTWfUa2WnaoDK4ZNKyEBRmo52esmeF9LN9ZCg3hNY9CCZsLQTX1hEA4TVTuEYmvi87oGZ5SSb6n5bwdWS",
  "key15": "4QFX5F4SoQa9hfph3vkzivvVNH2G32qUKdX1x812A3VrTK9fqQB1dMYjJWVisPHyC5sjx5g7irv6zZ6wvxCVHBuq",
  "key16": "4zs8C8Me3jffMuTfU1yu6UdqpgjV7HuS1gKPNLc9QtdS1SWsvEAZpxBwaDQyXDnjEozakF5pDWSGhwytJrtgNfND",
  "key17": "SLVYosKdedsU4VYfpJzwEJJPxWxN7SMKF8869nvU996s2i9usRpTNv4PTTVXtwtPqAM7hbnNe47FQyHA3XHGsSd",
  "key18": "3X1V5kLVVc1jB22hZgxrUkpHZFk6iv7oqmkLz1PxmueC2yn8GrcwTAs5WrDzF72tX2XmeB2EA1QHAtCwvdunLA9k",
  "key19": "5WKkVWuwD9jUVNaxXJaHpSErWkwkLnnu4YxVV9EeMhVJcRzAu6f5ZnUdiXyPt1g8bzE1SCB9rvuWoH1gs3KYjXNN",
  "key20": "2cKiqZ48hxMHqnxT6y51ERvH47xGb8LBoysKWoGfUZ66r7km6rDLrQ7RcUv47BXYsv8CVPjHcmo3sZwXDKgn4bR8",
  "key21": "337MGxF4eNzjV1dKJVhZi7USeNMtYQmX2FWya9oZnL8tnkK4BDfMfXs6gNgMRU5jFGJVD4Mcvbe8wciXxqRAfjkH",
  "key22": "33M3N31jEuHF4Uq3GXd8xYt5wh7PqsgeEFDo8Fv6XF2gZGVH6c5Ar75LhCd1Sz7f4QSWK4rKfv1vkSgBTJAD4Q3t",
  "key23": "qny6huZV56RzeA9SiotsGUmYDFGcQaUGCS9L2gDzyfVUyhHDHMHp28SpbM5vLYmk3n6s6mfKTdoRJVpGmjZtfJE",
  "key24": "2v2XiakHZdRT5Vg3VMzDam7QSmeyMdDBnM7CYEX3ewHdEbSSjcWypdFMML9rdd2yiUC9o97HcQNCygi2FUB7aDUu",
  "key25": "Ha4gVPv4suEA1fLXspbveZQJ9wsdthFqax1adHCEtGgAPPxx2FxyPPpAgXzCPh4ywJ31oCu3nC8Lpd9Wzttht8v",
  "key26": "WXxRjSwoFmbhu2M3bNaym4A5H5xwEDXrwniqs8iZPLZHpJDV2qY1Ks4BuvgpQGQv3EKsSq3YiKjjCrHfW7PXn6e",
  "key27": "5jZwHGg79yFziWqzTDmosu64UMzKE29CZoobK53yyMS7wDPTGgeHiFcWyaHLYmQ8zTuGVUiGaSJN4VX3RMkjgZtH",
  "key28": "3cVa14fwMBXK3a55eSYCi6sPA8mV7rGmsY8KmNgLXz92eM9ri5aiTVoJb7RFbDBCzaT4oHUsRNr5MYb22QfVKEQu",
  "key29": "4ZAm41Me5CxnWiEM4kr5mWqsishCzYhvoy7ZL2YfySwuoDz6XM31RfArP4GpS2vQ58b3fMd7E1hqfErM7YmKCscJ",
  "key30": "44CXeETUqr2PwwAxtTXT4hehYhqtqFHAyaHy2CA2gjtfQzo2mxSepVh4SE1aFpcPjovjjEHJahn9ZAAmKWxanpjd",
  "key31": "3W6GqSdijBewvFyNcXAN9W7Mf5qCYMoN3VgyFuiUAjhE2EQ4rZr7REZWnc4dia1dbFkxuxdnsxopAuCDrigNnqo5",
  "key32": "3xhc3RgmdG6YY3VwZCxNbMJkwS7ZFDuZSeopL9iN4Yf6L7n82aPYTRwPdEL7JVo46RHZ1543VRS4T4kHKe65TcBr",
  "key33": "2iCqPegweAz4XC7vacsKRNrNRLXTYobbU4qmJorHMxuzFQJqsjf4TELKtka6oT7p8u9BsgfdgZKyoPYZKZy33yVS",
  "key34": "4UoXyNnadbGiJFAKY4JyhQnmka5PEiwyShCGn2cV5rbrXcGdrJUEvRa3PNUQxid7hbHGKsmNGn7aKgV4AdB61wGJ",
  "key35": "4ze6ExQeXrT9ceH1nLWzQmfdBu2q7cuiPCh4f5XetAMNvK5Q6rsXE5wkYPcjMz3rSkvcaWBgjHFvGzb2uutsfyfq",
  "key36": "ghKiDNGnNHGjn8pafU8sNUmD6yvVDtML7mXSAUBZ7iyHSzDQokZ27pvBZ47SAWzJk2sGmdjTRQuuEJnQgb5pdKN"
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
