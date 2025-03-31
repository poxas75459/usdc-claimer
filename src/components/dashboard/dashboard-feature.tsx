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
    "4vmUsfX6Gv8791TyT9vmp9CpfLt2nHoFrKxDycFEbPRYAeMrFPcjVKkv9SSxmEt86uHzzMobJDescVA5dHzzCgvc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CeGeSAFjZK2tfY1LuPeTicJyqgdnMFZ962ARS1iK1bsRi7q7ToRDqepuPqpnjhyDd8H5XT6YF46iyM8BisE25c2",
  "key1": "49gvL3MfQaJsHbaPfnCECmbVUSy5m5JScT7pYPcFLfFNqzB6wacb1pbivybLFxdQYPkSMQmiaHiQit9jhRtKv3w8",
  "key2": "39qEBzEH1U2Re1AFhnBZzY57z4LVgxjR2px5PakWpXQawDLmnLGYV3zQLDzaebDb3eanVgtN264Paj1ytw5V5SYv",
  "key3": "62WcNCHGb9akC5nLWUWut9TuMPKzgw3wWCKTyt7JJiFwacePhmHaPPqdmRq6zK4V6H7fDSmsTwyrnHCBDrgx1wcA",
  "key4": "622Ws6jvQfTd7mEnmuxwhmU6nkoEytmNXEUy3PNKLTfpamKcGRaFPSGbiTFQmkT9gs5CFou1qkYmtmWczrr7AtNM",
  "key5": "35pUb7jUHESVEKdNCdubVJ8S7LjTNy8J7YCjXf66uLTXt68QACTFL5qodqyUFAC2KpqCcWrCq9RdNB4ecgcCiesb",
  "key6": "3Md7fFJaG7ek1vVjBW94sA16LRxj2pq8RSMRkgppXSE8VoCzamXSM75KZeJ1BNgcnELCB8XZ576b9xpCLzRMLcsv",
  "key7": "uktn5qgxiwJMkbTWVw7rC9gos4w77D6wg4R4Dcd5KPMV8zCUNkScoQfNHGojn4iqrVqTgBjJ1UYffDVriSvyoo8",
  "key8": "3gze9ASSHjr1wdk2fsoiXxs3GUAH2ev5c1SgCnnyjjyhksuDtHAKSLxPaUN6YNi7aQ7p3oLv5uxwpLpRs2cmY3mh",
  "key9": "SttGqge9LZ9CXsCNjVRovMhMniAhM39JbC6oj8BNF79mK5yix3KsKBTwNytzaacXXSxtyEvFe2RccuRNUmCuc2v",
  "key10": "4mLHKUvsjDqUg1A1DU3UfLFMWLkE88gx6iPLhabayKtWv75f5X2NmNYMjBQMNP8iKTdpmiBEZajMUn8mbjTxampY",
  "key11": "b4serSbzwR476MCZfBdtF93MSjFA5kGTFevcKUTM7ejpNtr3cxC4xY4Y9bVz4DELLyqvNBuMedPrPabCFf5doDZ",
  "key12": "U9MQBYyaJgYw9QdaGXXbghS1M1gFggcJH5Ai6JeFNQ7VRMhtmoTDhj6dkGfkKq9ifanDrTPai5zochPs6M7ukx2",
  "key13": "2p117s8JnyWTx7nVCPV1VYmVNUmUzT12XoUyByL3B5grojv2G5dehLHSeykWTHfq22v3hRVZbt3iZkH5JxTiT54v",
  "key14": "5WBtEk5hNKBs92qBs5UFWCmPbb6BpqV3EEbUh4h3qvHc6rk6WU5vP3CVwhKfqVtbvVUJC1khBwiYTd59evcUPHWy",
  "key15": "5jPoGWeqjZmvVsEW1aGaPkyfz9C2fi4YGiMmrquxK9G8MLeWYcaojnLLs4WaNjMVJy6icZEg272KzRMmMYxvSDvH",
  "key16": "4L4CRVNdnu86jsexG25QYuVFSuMxZG3AGPRe9NpXEXaf16yLPjbpZJhBeCC9VEQGSKCtAdDJXB7SijVnVaqPi3Gs",
  "key17": "4QqxXmy6M1LDjxzPfLkZPbyLusecEuNW7V7Q5d7xfLqiQZD449eMqnwz4Ufhw2kvEuLMt5kd4tmXSeZ82sNmKYkn",
  "key18": "P5ruMqkAJAiyWsPG89Pr3RX4FjG7vWTxqdE3hR9odKxtAX57MaBZTXuZbo6LD7yn7q7rruDjJWCbzCq1nKo44ES",
  "key19": "2bH45K3ZJWNE67VV5qZ5feMeTucQ7hMMhp4MwLzrsV9ArrRufMNwwrvb367qivXH9mo4WwfExT56iG7XqoMLRb1h",
  "key20": "2ELvfqf5TKfLAuTJQ97SczGc8qjv2twtW7c9QDEpY75mSBLAb1jttPUKjGL6qjCZknGb6zmpsZL4yHWwy8X9ecqm",
  "key21": "32Zvsj5wVsscnXBwgyxjCxZNDoFSMEUZU4NUHrHiR1HXmk52tRJ5vGooipduzUQMt2keuX1HKUJNngXWLqeHfYCj",
  "key22": "4PUvNL7XZeD9WzZRYGhNQumVeDxpiWtxEZuGn2JxFEZQqKoaHm8eERbC6tM56qp7vD2qmVTKwuMe7SV4N8vgAFgP",
  "key23": "3SCgZxdAGzN8ahav1QGPQJmHzX2etyhg1CCMqgo27a9oDBNSNZWpXjHVicafYNXFmt5fnrxmHE21aMs8ZJa1gXkU",
  "key24": "2Kav2Ps6XGwxaPE6T6QeitkFpxwRHCZ76MfAx2gDpkM5X6MD3MZ5Q3Ck1Sv37M5Dwd9QN7qYWcinGA44hNqqnc6B",
  "key25": "4wHmwrjrDBxBvGLq1PfbQKUnszrdLw9787Xgg6UEccfv4zJUSvfohH44hs4ULqZfvwsucg4xxEVzTSz4E3HEeqyw",
  "key26": "5BVaftFZckbqLZ59Yr8VJhDrVgLPP5Cr53VrScKNHQVHtBaHRFBC9QaujQhmxiGU4Hm2LYYBwHfexbYx9AkmkK1Q",
  "key27": "4fxJ4jaFHH3aACXfdt7geHCxvDsiP1k118LQhTsqpoCoaVG1KDwPiUJUNouMJnSEuJu17qNEDGVQsBNsKDfCRqgt",
  "key28": "2hFwBY79KPaYZUo1Hk9pnLrcFLgfJ28C325obfXnmgR1VcR4fiFheafGZPibokSdHQT131TbsVtja4gdL7KMmefT",
  "key29": "34imuH5HB1dU856LBm1PA7uuEnSxpMiqVKMdaAazAjYpgNStBrUGcztDwphzXVyp8c1CvgRDQpw56YCPD89UZyA1",
  "key30": "4mdH2y3B8QAqXCmBF1yNApQRVth9EXaTfqGQHNqzPGUbSMXWax4s4sP7foynP55K7p5xbinePCFKPYREXttf3vAV",
  "key31": "32vWvzmx6YytLQCSoxwvGd1TPWKmc7A78WrneyX98tb6XLVEzh9MWPn7v9yzeWnpeCJ1oHgg3thorhnpGYVrSCvd",
  "key32": "4AYfo3Pb9qy34tR7DaAFKgfM925iWECRzRUxHZZwPYi8Sx12Hq5Xt5LHJNPwrLqpiQcJBWmk6BcMj2SRud1gp72L",
  "key33": "4zmVjaJEtrpREQqohsnqHtQVvu5Y2vYrR9jZto4cLLMmrMnj6YY7sZLqcu8Ga9v9LNszUpqXFPpVgSXKnAtvW9Bf",
  "key34": "5Z1oCGGqhGR5hJTeLo7T6vZqKZVeS6FAiY2L3YbuvrRr9UWNqbYh9dgVHFQjSjWfyga5UeNi3sNexBoYk8FcURCN",
  "key35": "nKGaoTYLdDC89aUmQaNRRfk1yYB4paFBrH99SgT4R6m4syWV6K9NjzowvL7pnReKGWvcmhr6eCkAfMpZ33Bdr22",
  "key36": "23z5tGECLGxJJLrXAsDP3JEA3obLk1V9LqBZHVkAQvd28pTuxNppqfKDhgHk9U5Nz3CmWoe5wFTpaYf52YLZ1LzF",
  "key37": "1jH5nfBHjNiFnQHTye3CGDUSs5FYiBj7RpFBdFabVDey17yFqtWwE1uAA1ed3M8HAQVZJhYkWQuDHmVkUZkfXz4",
  "key38": "5nFbf1KshtC17z5kiSwjCPqwcQrLr2UW94RewaRJATcbrgWGt4ZyJzWYzSDHoJN36RjhhW44JFVCq4eCa9Py69eA",
  "key39": "3nPR2QJuXrX6ukRzMADDK5rscSwWBcxwmiTs1kzngJrH6j24mbHx7nrp5xsJ6229nizD5Nyux98XGkMPTJYiiiN1",
  "key40": "2BTM8yuqEnwmunzBTFjg4c8CZgVN6TxW3QJpsYwQ5y1kKchgzkqzLMPLiWpovCpZWDxZUZxGDcQe1qW6rPZmcQyE"
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
