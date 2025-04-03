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
    "2rbLHEmGLuL8jVSGu1cyuKwoxBEb9eRRoqdkR2yrPMWPSHU3jzSv8rpM5sDsox35arKEpAh5Sfr9W2dgJktBYLq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YJnNEqKwY3fV44DSYvCg2caVJB2tTq4oTtjZbm7ejHxroGt8hBQAQsEseJrMK9Z5s4m62XPN7UXqHvDVkSTYSYz",
  "key1": "4ZQg7j7Y1bNijmvHvucHQQh6PN95YbUAmxjHyyEvmfPg63hwFAiKRUdZrHpQTPmkHyxJebLwxoBaZ26L2uyKRFKk",
  "key2": "4ZB283db8efhksrqgif1rf2pH1AxMFv1UTTmrk5yvgSRsELz81UQMNPYt9tepSPmaQxxd54vjfMujA8rEbQTANHT",
  "key3": "46yJQpEpzrN9rJXSCxizfnDztEemW2n9dUjpzuzUFkuU28qPG8iFyboWzigNdZZp9k3TyYTurasVKXMHnWXLfDJb",
  "key4": "3MGYmrfXtJLJYW3erJRdTsjDJ1ZZgvAUN1CmF4wJM8PZtfSqN3KFxic8JbDQomXZVtdJdDgn2Gpbqbe9oHshxz1U",
  "key5": "5wUL3FVDPsMGNZkiKrgjuELwHGvbFV9WAWoUkBcWGbWfFmCyD57rRJi1sW5Qg7deZ6ZW1GTUZiEdVzMdKeyodmTR",
  "key6": "3VbE9qoUtUdNDJf2vceCKp8kDGME4FbkrXN9qWSQkQNNpUaniAbnjkHCk6Aai5YFpGGEs7GXHXSwuGzGCuqfUYpJ",
  "key7": "5etawmJrpx8DGC9RDyLT4JhkC8M3zLrNfdgHkF42WBgPeUiTFYRqcHoHT4BwEyfKKZBJj4YnESY4vjCGZj6DE9L7",
  "key8": "25tSpruM2hhvibV1JrTKVWSym5HoYGX5txCLVrkoDhzdsSTYJa7KCEUctWxYz6BphnYa4qkzHBUfdZ67YoyPaQue",
  "key9": "9WWgdk75ySCTpfEqjtYhTGGS7qubx9dFheAZaMKW55WaQi4dimNsvK2YEsFHz1Lp4CrdXqg8Lb6JApvMCQ4ZsVZ",
  "key10": "34HKixWYzjVwWQyKzzgj7BTK6Sy3rPBzgaNWiU1s9VPC5aL2yBwFtub6XP9Nnh6urTQPYpUe2Rx5TVXnn7F2ZMkv",
  "key11": "2xJ1RDcUP5FD56oDW5HTW2P9pzqyBaMf9qe7inxFNszVbsRATqbNoqp2dHD9MkAV6J8dmQaTShLrxVsHQRUCLevF",
  "key12": "3CT32ZFYUrjeY5s4NR2xLVbuAd6jAzopQDJN6w2sJRvQa6TCHNmpr7SEd4Gx7TqndhbWk6EKWyvi15yuYHhBWPp2",
  "key13": "3gjn4PedzP2ewqDMkAxi13g3BKEhxrbqDqXk6yqWYkUjiiregb4bkYsd9xqL74jMeRqoaPvGs6iYe6gbBkLsvJ4U",
  "key14": "WZezxfv77Pj8xCV1bJ8e5wNqDLvErnxG6u9nWZZjtUoSfeYx3rzDY2L4jHZ7t7cifBHZBwaLBqJbLAvWdJz95pL",
  "key15": "368TVfBujs3LRcFqFPA3ZKJUZDBDcaLFE86ChKSWxCGzJrSzuSHfMVoRczf1xNKywyS3iVv9Jghg2YSvMoSaSkQR",
  "key16": "2jyyUB4e4qdphQZuQ9gPoTgg7ayMGhDo6Awwyo4j5gVgBmVtE1DBLNGS6DpFZQ9h1TAr1DtPchcvQbkgeedYtYAL",
  "key17": "41ZKJuxmmqaPeKasqHqRTpnPYDJwVWJ8snCKZpQUgiscmDQE1FspPcJ1nGPMTwmjV4SwCXMsUV4kSEsBcToRxjC7",
  "key18": "3sf4XewyD2NHqKG7SG5wLPqAxBAr9V1qvSSAEruXohdoqjqCdWncEUBhJ7sqTdaZoEu7ADgungEcjCzZYvfjxktE",
  "key19": "5wfRC9u99K79tXg39gp9yoNBwqXyhe5iBkAY3jegiWfVi9XaBgzMsiababRvc7Crf6mBkP7CxHAMtxZnZD9Mppbc",
  "key20": "56JZx5N4xi3KqviZvJk7wkNq7hujShRNFn9CPtcb3sNgcgQxaZG5ZPph8fntPaeftkEYvU8q1G1uktwzGbpjR5NA",
  "key21": "5fAFFd8jvyrx3orbmXJaUZ26UKuKNH7DiMUaqdYxrphxNnRKeboCd2qVLYfSfAZsqdrBzRLnt1F3Vx5yp4tWLMyw",
  "key22": "4vz49mgr2rSVJvDZmvDRvpcriqQgqVGhxuznzgfh395gBJN5nggmXcf3FZnq69ud8dLVeDE1BjS5DrkimcZksxhJ",
  "key23": "4pVyYSFRvrpKSfX93VKgs7cjfnK75t17VcTrFCw7Y3VcGSKQTBKs5piHr3badAa722gtzEb8FEDKsRUSFkfAitaV",
  "key24": "59DNtsKQyXqWKnNdrbPgyKd7q7cTddwQciFZLNJGWP1gs6XhUiMuEZ39LwnN5QqUa2GpzXPf26FH9pQXxoagLKK7",
  "key25": "4kayagwdshUftApYPEK4NQk7rE9mTBtLcdMTAhRxdJ98uRDLpP4u3fd2Zd46oABij7A8e1KtFj8NnGDnQKJ4GS3F",
  "key26": "3kN3mkWc6WySwBjpuB6GQzEXbwaPXBbbJTm6Yj2YnEaGDm2gb46o3SSGcnohNg9fpCbPjDmAEeEf8jabG3nUDNcf",
  "key27": "4XC1ni1V8srvHQcm95j9xudndjkpZiB1WGVmU7ccA6vXQa3bVUGbuUKJEy6R8vjbdnLuRqu4hbZ5gxje3kpMexJU",
  "key28": "33NBshBkxSdGQ3JE9coPPGJZBzg72PxrhSb8NXB6EVh1Pp8ftqNktN4Hm4LP9UyU3s2v9CPb7ZtGJ1fQRCq4sdZL",
  "key29": "2BfGT6LkV4oUW2JMFnrQi2eCwEnQjrfBzvL3aMJkkHEWBdNyuFbz1XVvM5cJAwghJ2yfQKCdkttELWLjNBCo7oAD",
  "key30": "35wbPKXhfdZif6SswHSENJdnrFMR37qZ2gQzB8uvn9JStFH9zTi5FSHNJdT5MEsSWeK7gZxpmDkjN7Z64Hgk7vEM",
  "key31": "2UnqCJqtLC3453xoX6Lt2VszsZTpVJKL7NcMQjPpWW7gyHaw4RsqazcMmFAxFvBUokJVNqbRi4zgvCeQ9V3rCB7Q",
  "key32": "wLoQ8L5yGbRwu7FciZUgrtcYJpawVEQvL28E66ANdgLLHjpGZp6dCPNERCnjfRGJdZVj9sh8ZFgQsffgijKfNLC",
  "key33": "5XZ5BuhsrJsyCmDF6GmND5oPhBkZ57N2MXWf1GMuguKMN9GVREZgLNNp3TY49fHyHpD9WTPpMjhPMTwCJyKsy6Em",
  "key34": "28K15yzCY5SxCSEL1FFeo1WWQ8UvSFFKVespbYduYvbX47CvbXpjEg7cRFXVRKZH4kUVgARCMGefczXj6bZutAKt",
  "key35": "3Ag4tR1uVTTCKGE9HgkXVmritwmMeWHpggGffAgBhJsETNd88i3jhuza6ADdQ63DKrMSYXQhM2AmfYCD7HxbnQTX",
  "key36": "2h8B75AWtovFZtVCng1CCtz5mw6HhjtP3S3iUAYUUipKZhefd9s5qNqoYXfusPQYdbkAFKP2bWM2tiYdVU8YW9un",
  "key37": "2u88QEC3ybpVLLhZEzRyE63FYiTZkzSAfRAq1WbNVeqidPU9i9yZRqu4BV7nBYkVrZFPVuBUsrvSivzCwi3UP7Zv",
  "key38": "5G2bbJwEUovUvJAFWFxYpM5Gz1AXnXiGhh4XUXrrEXPJL5hFY2dx1fuowUSp2DHZuZMFh7EaTANRQQeHV8sjVDXa",
  "key39": "2eT37VJA8cSDTv4JfqdFrGQaxksZcpx4d8yaPxB2S5nQsnbJJEQxuzsnZQGmE8MBozKokAijgen2AKdkTTUhYJTL",
  "key40": "3puaVZSxPxpWGto6PuxmeqDkLe1zJywUnHCKijS3gydnit7p3A8KGC7boX16NPcfFfinQMDUsjHzBh3uAGyidKaC",
  "key41": "4VwAuiQ3X6A2hcQAgHvrQqzg5H1rCKk8Sv5hJU5nUaow85JSj38FFTJaUCoprXkGupB2ZdNd6KTpMNGqTsJAYsfh",
  "key42": "24tb4zifENeEVLCYyA644XBKn4hpKPTrb7dNyoVnvjTsQyrXGZ3KFrRbxDYQYTNqxVRBSoALJgym7TEfXoRm4BsW",
  "key43": "4smHTUuXL8grygiQTAgPCKasGgPKPS1yuJ1j1hnFYuio671vVLtBSbHSa8Bv3bEa8Vc4u5hnUfApGba166yNvn9N",
  "key44": "2EGBF8idD4nSoTZhiCRtaQ217WYtVx4QNpdt8Unaxha2VDoXsbJXzBvVsBXLedaUtDLRUgPgC9doXPh5QY6143a1",
  "key45": "4cTkRK2GZcjoYfBjeVCs9wG6ujvQb7TgHaFSrVcx7TkN4GGSG41xPvgmKAQEgxbrNe7UMw2P6hBhBebmbpPJTDur",
  "key46": "3XzN2qZvxp8waHMRW9kQRAaGG7YdMg6PKPpCTZ22pr59mLKf73uQ7hdf1cEtTfUm1scinpV6exb7sroKRNzWi8D5",
  "key47": "2xB9RSdLK1dfX34XkvFRukTxLYfFw1U6Zdgc1BUadk6w7WPusoigpQMPjiVDbtma4CM9BQtHerzHdu4xjaGMVmGC",
  "key48": "4Eaq3xkhXqFzX4HP6THtQTTV2qfj8hKkTHfqzYRiVvQ2oWYw7TxQoUQ1Zc68YVh1515pB1RN9rirkyu4TK33mSUH"
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
