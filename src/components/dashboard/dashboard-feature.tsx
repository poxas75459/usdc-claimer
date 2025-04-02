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
    "zjRspDKmeg9grZvTNVAZb9AXhn2HAkRdQCVZSLKqRx1N7gGqP155ZVUtWubUnN1AviGKegLYATDchMAazRL7s9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xpaVyHXJHfEf1KrmhtdkPpssw6maC3vZfmeiYBYsyWWsGpb217otnx8fYPFw3rWApaGq9L48pPxJoxAcdjK1H5F",
  "key1": "HqewCx8kJJabN2VC3JCot8ALoRQSbbQPfTrLn5hxRa4F1xQEagn9XfuDMyfPD1VPu3gGyQuwK33vGmKZgXbqAxX",
  "key2": "3hQG8aDyDYWZNMmfAihKpx27N71CZ7zyYQrfbmcywKwYUv5b7jy6ToyiLe1Mx7uv6gQw9bcXMfv3GsjYnpxVUeAb",
  "key3": "3siy7BjH4EGzKr2vUikDPcNFhHUtxJ55QBzdrWfMgLEyz2NDqz8VPPpXn3gMPoXMRzmdYzw63ZtgjJK6mV8G7ifN",
  "key4": "5JfgVnYEEsvXutuPR2FGQiQ9vvc2L9Jmbqzhc4EtxE6chK5H8PKvk41sAVSZJSYvczbYDGN1CpczwkRLF3KC1Yqr",
  "key5": "3agP7uGLeHd5wRMnMrYnEaMDykGA3cxQWZGjn5Pu4TficuHMzZ2KyaAF4bMN9xSUmkcPkTNgpRy5MfzxCe7MSuqW",
  "key6": "YUvcogZsRaD37VVqHNXXkBhCrgpx4CM1pm4Sqi7pEVjq6UzaRSqGWEQUMuPWNqXKj8AnWYzWNoG1sDDkSFwGqfJ",
  "key7": "5JD8BqmebmZ7SCEJxKoZmJMqZwXhnXmBUa69CJr9cy3hFi7fGq3hLgBQc84so8m61iYEHoJuS8XW9vA8HeaGMg6M",
  "key8": "2J9TXLihT9waH8QiS5ifsJoDzeYGvKzn8to41iKN11avq85b6GB8nJVWLH3vg9QErv85qaTUnXxJrDaXM8b7zEox",
  "key9": "2uvAwnKRJFPZJ2byiTqAAVZUzjjnUR7eM5yYNQowsE1AS6yPQ5GSfXh3BXFDb585KgJBUVa6QRXynZAQYz4Ri6Fc",
  "key10": "2iMkh2uB4X5HTecWu7Tn579ehektV1n3Aks7iKcaJqf1WhSNUXAz1a5FsYhpSPGCLf2MJy7DV7cLiEiV7SvYH2HB",
  "key11": "5obahhbGb7HXFQaH4omN9vkbwxCauerjDLmT8LuGNqpeFyk164q75mcScwJb7vMtj3YEgGCkXNB36D8grDJxqVjV",
  "key12": "4e5HWXJSQLY3bjCS6TV5G98LDURxz11f2ckHGQiZWxK385Awb1SZ99awkTxDt4a66zN4vcdwBkkZvsCeXuagrwfF",
  "key13": "3gNo2R7vbhEGCb5bssciQVfsmLvbe344YYbWDBkd9rmA2YevYmCyFa7ZhZi6joa2g7SoFsTGv6a3s9fHxYVn1tiV",
  "key14": "31sPaR6pcwv1BZ7UAm3uSsfLLrVU5euPNzQGesxbrFpCGTrRnMThpJFH2kDSzDwpqwrcBZpXggEWQXQFc6EkWzhs",
  "key15": "433QaVUSbv52Q6BSJMVJNeKwQq7k48nVoouYu7bTJTMynw9VD1hJGiY8QoPXWr2CnWZUzeRkaC1m9UJnYg9jS5FV",
  "key16": "2rZDQp4dxqxUBFTokKVLKBjTpRDUtZZv4SePjr1FSNFkmfH9YJHscFhLGofCWKTw2L1toCwGs8ju8N6gJDaq7zse",
  "key17": "3hynscHFnZfepzauPL7dFb8suingu6scqpZCNQzjR3S3MG6vPQXTHJU239FQfjf6KuUVvkz4WBN7AeLCE2ALgbYD",
  "key18": "5d1XxUmCRy9v2RNrsiKrodfrfD7ZcMNkxLJ84urph85iRPRtgnMdDxHjQS6rggNa9pNtvXF8kGL1dgykoGx48AF2",
  "key19": "67HFSKFJm6GgP5yDRbFX8LjETjwGkLfcZd1NkinW5tMnSbbQEGFiZgM1zjyAAgNYDt1k2iiX8wUCSAzZhM8t2go3",
  "key20": "3d7yXE2YwbgjAB3jZB45CW7nGuCh51Pk5UtTYBMpnWY8MDz4ytKKZHLPdvQ9x8ULu4o4HH3q6PBB1C6hVRdgp7cW",
  "key21": "5nPwfbuW1gBqouh4d7QBnP9C8HAPGnEranybuJ8iWoDXK9qk9Nz66hAug46VGvgNJFAxh1tfj7v8NDLzRsrYNC2A",
  "key22": "4P1HiFJD4aBbMrxH68HefbNoekRqxx1mysu8dpsQAxLma5Gn5YUWK4vpVJZbZCLDWhKqesUFavFHhDpQFCtxtqaV",
  "key23": "2bNa6aEm2NTmZRewPc5gtYDCU4AgpVzm3XbNJcUziXbjmrpzTCqSJ1Q8CGDmFi7ZJefDHA8tP3dwsNxwdChysUBB",
  "key24": "3p6ixJuvKScwMRVQ8MhWTrU3ouxNVVymVevy6FonyDVW99zErkJQDsbYjrFURm2VCdP2yTFQmGZp9ygjLcfB2zN6",
  "key25": "3MPgefae2h9WMZ1j8C3WSjpPeYAJWPTc6j28PVK8nhuSNToq2T91fibnbwSLDBKywHAHiGhkJg3WknuWe5UVvyjS",
  "key26": "3GtmXasNt8NTN2BWzhESFjvpvanAstK6NFZZivnDUPFABkPbSLYTf3c8YAijVJZBg7pkSpdTR9me52s6Ffwt1Rei",
  "key27": "5aWa2Q1YbvB1HPKjeB2gV4TvH2wJwGStDtYUMnEBm3qP2xYQ4DhLkzy19VtScCNSBXTNcu61eRn3SxYA8yYTPCas",
  "key28": "4xHYUGDmYBqWhz5iphkXp2z348rwMoiLrjdScqHJhd6XNUP6kuUgPBguAZ5eC1dbwSnoTsgQHXTD3BsrM8HECMsQ",
  "key29": "4417URTE4Nr3dahkLDDPwDhZ8NbcGzJsArhbVrqDbvgWPtFUoyoTwL1kuccwmQkpMSqYbbGPTpo4LWwYNJpPNCkA",
  "key30": "2866vcDoQAWcCeRA5jxdCL4yPFR9GSnEk96JPu62nAQ5BDwsutJZejao7K2RedzJe5en5NYoVtuoG8ewFWdauQSs",
  "key31": "5unDRXzQvd4TwB8etA3hWzgdRPqcyBDbdsLAMf1QriYvvxPCPpZzHdQfM1wMJneVN171fCqeaPZAKbSgUEB5rUf5",
  "key32": "AH157bGyAvCj3Xi72Xcxp3QDgXHYL4ZQ5mXfV32iUMLQzkyjAXgRTiomQKhK15EKkiJV3bkKXdRMhE78F6e2CBy",
  "key33": "2HxjzSsKQp6T5utprpbAWj6dEwe4u3pBUd49BiXcbwdwq1kYPXJSoR1Udww2bwk5CAwFNFL2wgLDTaYRdiNVx1L3",
  "key34": "211kEQfjfjQj7jr5JSs6ooafzH2g8sQadV6hnbuB8bVQjiSuXEbNECw9iSDtHXBtYTPvo1nUAVcbAaME2JasMcvs",
  "key35": "4tvaxJCoEHS1ruumegn12SW2Tk4w6qG2Tg194c8yqofhq9zpWsYmmbdR5LEFJ2Q35k4UGTgYTG4yZjZjucLjGB3v",
  "key36": "4qZn6qwMz7Xtqen1iHac6Lu2wbGNmaiuHdDDdcHtNCaRgXRGWnwHcYkPizaV8w3JvGLJv6PuPDJPPNA7mmWh4FY2",
  "key37": "4fzhkAigQDeC7bQjn7sPUWTUXyjbcEqsy1LnGnF6ruv8XL9jqrzm4RYwDTXB2svFy4cX7c4iDuu5fLBTtBnqejUX",
  "key38": "64HeADEFVVYrH7oZaZFWQZkPkNhxpjVN9v5S7xpBpHgTPkogBTUDNNqxid6LthLbipkknXuJyhPZzG4xpMwSVft2",
  "key39": "4JXG97J3vanhRjEnE3KqpqCw1AzR8h6DvwGbtJdoqPcnms3XvwZer2DoQ3kD5gthJQytiCNNMvaUGau7oTuWneAo",
  "key40": "4qDrwGYo5yzuKb8B4v89kZ3nDUHMyEh2nE44aXRyfpkJWoG9gG9CBzx5BaQWHLcC6ZQLGV7HaDuMMTxhThvXQVGk",
  "key41": "3mfF26Rq9JwppAvLXU4E1hv5JoSWMpBAAQPMXg1Ut8yPUP2MgAdhnab899TWZUo6qz7QGqQVPxjMdKZyjEA8rYoV",
  "key42": "2fdHyRWzc14eYP2AafMkvBHPF9FajW2eJLx3ZioEfYQXfrjvyK8uhRnJy11uVaw8Vy8xPpe6KRcbg4qevCgSLH1a"
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
