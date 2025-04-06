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
    "2k4wABf4ftxwjmJjZnbdTY9DA4Y1dMLoXhz58bm4DBALfczQxWk3q8rrJ5JBmw1GUJ3BVJm1vptq3SQ2oSHGoL53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33JEcSMmnohrbbURmWBUNzRanFhsK1CQh8vRa1Re5BEmYWToLHefK1xkSqjNa7qNtbx8W3hufEFHfxTwD2kAUEDR",
  "key1": "2YCDV7yx5G5UAgR1Pwz8qxpuWDtWd1FHwSDqfnXzfaH4cywJzfz48AJXpp7RxyYV7he82ypUYx8cZqhyDm963JrN",
  "key2": "uLcqcfYrJLV6zkBmiuhwXNVguW4c39YnHzRadTC9tVG9q4cbA3BawExDP8dzJPnVqgNJVt1isQ2sX7qPDSE48FZ",
  "key3": "5QyPUkvymeB8WiqswXCAsxGXHFCHBpuURcs3z8tKb8xQ7YKNVusPmHy9WQCRhYWtwfwgSmRRDLDs1iErUyH4KQx",
  "key4": "29ofq9m1S1wKYq9Akz2MpGB6WNk6TskVKePpL5YLxPhYyaiAMUEjJimAvoGAyfrGab5magAbWjfgRTPMZDjZxNAX",
  "key5": "39HApmhULiQfAzmGY61BSE2Aec1B9jZwEdQ4cop9FToeKJhX2i8z2ZiLPkbJ5oLDhxcSVsMqGPA9Nxb4ZkGyvqe4",
  "key6": "3Es3XM7uo9ZKRD4MCJn9Qsw9ma2Xv2mDz28D5xhpw2M5dd3RE8DpUbGJxyZhvs8h9QQqrwiXsTaRmsQttXWvW199",
  "key7": "3vRXrvxjYehJqfhWJZGtB7VhN3pTnauh1aux1UkTpkrCRSSkqtvBq6G9QYiCKJYUF1ZdfcYV6qAYb15KCU7xrH81",
  "key8": "3u3SCAfCpmJkMzxFVzZmxYWgskLpVx8985fLXjedLnhidq8bWT6JhGf3G5wGv71CD6mBLHfjttrGrobgxS2TYFpD",
  "key9": "4JD7vt9xWQb85o6XjAu5uRxAPDFKXNpxZ5y1LFyHE22XcNzHZtN5VsqaHHFqMnoSmETTwtumSuj4UWGcDHsyMf3Q",
  "key10": "3piRvg65TEAmX8dujv9ttWJADLND89CioHnSu4CV46v7pPaVpQDbCmXQWqucKjLjLMWLKrdB7UTB7ZtycfExWBjg",
  "key11": "225w1L5eyNjgDLQuuYkxBPMtkLFzcPxsTPEPYKzhv4RSH16LXJro5bAknb2YMD97gqgUSEJm3hc3aSFkwNhPpHhf",
  "key12": "5xD2hAx6FJ6KcRo5jEcFApodu9LZWSQV5q9TiNLephqgWz8E1TrnA4GuRoDP7rPAFmR7384whaXKR3AEpSVnCtUM",
  "key13": "2jyEub6YSUwyMxe4B59j7AkTQuMFwTYastFJqw94bRXDGXraQSYoud6kEcjkR1cNcKNobhuzXxzXHh73e8c68RqB",
  "key14": "3wFwuBTiYhB5FFP7xCGakejaiypTZPMqXcaTpqkge6v72QQaAzHdG6M4GGwK4FX2crYYLKZd8SXzazp81gHyaYbo",
  "key15": "GsCpEsWMvv9Q8iMvK9G4zfKa74fjQ7XKAScww9v7UztKJC2oXMc46pC7sUefcYZPRtmnQYoYY7coCspETWNpvXZ",
  "key16": "45m3trknaiCR9gWuzrcX4ei6McVYLKmtyGjU3eUBmpziyepdoJq2tngRTwCcQAvWFfiDUVwpgkUb9NoRk2Qgc8zk",
  "key17": "2BbDv53ZVp7AyBzCLKbd56PHy5QSmf1o7rVqEDDgRuR9VRbziWgNFobc7mifc5776Ysx24zcxWFavz3h9dWj6gJM",
  "key18": "4V3VamPdmSv6uX9AYxDhnSnKq7Q9HGkbDp9j5WL9AvdmSToskq5YB69TR6cxQit2pUUJ2oD7V51zeNziFkg6Ep21",
  "key19": "Ffs1yfLa21Aj3ZNCQ81KZqLvwi63fX4dRnQSWHAW33iK5rgYRp7RXJfsDAzLhg2xonRRDGSybRTQr3eVTdpVDYJ",
  "key20": "5E2sh54Uoc221vqeKni5K2jcxsiLWj1sEdxJNkH9zYsHCUUctMp1EzSfyJndCNYiUooXatdY29uAatojX1GYUc5U",
  "key21": "oEDywSvve3dypHTbanxwNRP8rLhCNgtj1NiNSsBGTM55bFNUCFESSCZkPC7yebrLUG3qGpq8a8zoUdN7UeSjsDU",
  "key22": "5vNUEfn382yikFQc6gy3FaSoWA7pNMqcogQ2qg4XBkkfR4gA95ByzuN4224aS6CzK8PS7BRYx7vcq827L1xZL5oT",
  "key23": "42KW3AmhqBUodmw8UuZ8fpxSz8QcLnD8Bye6HdotddzyTZQ1aqiWWE4WrZFAG4dgHj7VRgT32SuxZXZbgMcSZfQo",
  "key24": "21SmJsbF7uTZMcLxMkLd5uKrv8xqoH7LM32eL1SdPZZLysS95UdBCfXxAYbrA5ahcnVcxVGH8oEcgh5ap61QxzGk",
  "key25": "4cT2xTk9jvAeYhuEYFBR4etwTz52f6pVgvE4x52MPifdXNE7RDnNaobbFv7p8YcR1hdaGSGbGq77ZDxDuKd8pLW7",
  "key26": "3SX6g5EkGJvsj5HuyiYA5Nx2xMRrMK4GwGfJewvu9njTwmYumaHjfNHWVUc3N39JAjEeCzpQWt8KhrT689FTyfLb",
  "key27": "jB2DmyQnLXXdzAq4ZS82HpZqtFCiw5QTGeVNNTrqQjX9QvUTg1EE2Dwq24xT4hiVT3gLakuy3hHVF18nCV2FLLH",
  "key28": "5fNuwugmsTxb5dgzMcRVAvZ3ihgPp3MX8W8J5yHVxKuKkSQdLaKW69eQAp4rRpxZSXokdZxs9Kwd2BE2zsekJrYv",
  "key29": "MqCcMXXDWg7zD8Xw65W1MwnbT9DwiVcNU3QHLSUqXt6NDZ43pBVeywztTjihSfQGjzz9smSXLAzopHtNAXnVpMe",
  "key30": "2ZZ4SqdaErXauX66apULQUaevjHzdx54DXkAmBNN1vCu8yjdwdwBhV4VrEMXQN7zz4u7cXyaZpJhVMqG4w2Rm3ZK",
  "key31": "2oSqZjjswz4eDQaXaDHryTKfgRPo4bSfEMMTUgj5nNzDE8RPGNW9mftWNqkpGfwgqj181Akv4kpb4e8wKzw3AtNs",
  "key32": "3zH1ugVeCChP8mRtqcf9ySEwYp32RSFydjQk2gsTaewU4h1TiCP5tSUT52MHxqQmW3dFhXmf9LBp1aUeBDJ7udC",
  "key33": "xp3NZEYSobfgsjvETv2JVvdaDjHAQmw64sHch88LG99K1P5CiBw1cLgudGNQGdGNrDidNNb3FdWBdTwJq79Tt4K",
  "key34": "5dgG6AdnD7yQ5CowrhS5oFp85XdR4FTXZABfK6z6wQnBbsvFXFuhdKQqEup2D11FdBCzsuicCAvcyHxT1Sw7ibjZ",
  "key35": "3nCd6hKnfv9PcUxx8JfEZQsbBeqeaucBEQhBtF5Mzei8uo2NkyqczjRbK42Mbix4zTA6gAkWAgCQxQ27p2ExjNRn",
  "key36": "3K2D3oh8sCqKfYMnoC5wgLNQHpH7mFmogaLBBX5jMSRRw2FN66Qrcc7voV5R4C2TDcoDZHWdRYTCresmsC99bU5C"
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
