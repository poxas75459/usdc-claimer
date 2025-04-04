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
    "2r3cukKNmxXKHUkztBCT5X3GiLXZE3hM7bMQovFaotu5jGC28TvsjqGzCefuiHivoWMSi93NhNVJLX3PvY8vB6rp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67JuJzYp2vhy7swoBiKEtybiKyg2eF9r4YJdgiQSDJvNLDBxhYPLo2d3RkmMjdw3dZbHfQxLnKUYghA4uYytp9c9",
  "key1": "RaZTDAzC8V3BkjwFaMw5xBSVxYmYiFRcj1qyE9KMPQALxdEyLKruDSEXpj2fHUtdhYRUE4xdkcVDT4hYD7zjxHx",
  "key2": "28qWWNcjeozYB2x8kAzxBN2oRBSj41YQMaxpuGpwMpeD9hWuEkSq1Tenos29nRQu4p3j6mDdNZcBn2me8XXHRKLH",
  "key3": "ZzsDuYwf7TbRueBECLypGrkpacoM1m6BK9k3wyQLXFLJAYk1mrk5rfKuvPD8ZQuyMA14QgtCehw2Qg7SiiAmC25",
  "key4": "oUbpVGq1zfoH45nwY5ouMrFFFVD6tTW1ycLJv73RV2RM9N8nJSbdJkh6gmAYXBYisQmsszrpB4p7noJB3N32tij",
  "key5": "3wgBTVMhZM8Rx8NPsr8Xhaega1bxjW3BcuGWXitCVrGtUUnUX5sNqvwcot7rGmDD3WZitra1CDjBJYe1pafiQS6c",
  "key6": "2GhZ9LEZf8vwsx57DXSdmnDiNyBHqQMTffQXGEfi6jSDBVhtaHNh2Y9vSHyQSd49DaR8SVjkG3wrSNBRsVhcBp52",
  "key7": "4oZSCfxZHQMxt3PKWzT8gD4M1HhdnabbQA9duHYEKTwiLFcsksFXMxVD4CaJPrpLATzRvzxbZCpjkgcpEvPHMbbv",
  "key8": "2RGVz4xL5wzJtPLFM7rt8cxHbTeP9UYHmRAVUjJTGBABXrwfCG4uGjxGWJGzQ9UA9ZACzvs5BWAtMRrVXBAX5LXP",
  "key9": "2q7wUfAViog59VFYbVHS4xVgweU33MXDpVBnRG8DSqb9SqpeS6qspYmTQMDqpArfNhjH7NMJtsTPu71qefSk8q6Z",
  "key10": "5REKSMgQdiKt1Dgszw2YXJqPcSjtEcoi1kVDRKq3HZZFUF44o2PwqcQ2kg6qyQAkk3ghRmJYu2qvYECshgZNdNLU",
  "key11": "5v36MJ6FBZZmTtkAn4bJb8uHaKwqBYCxpLHENr7utemPwMM8Y8vnpJi94BRBKjJyZmNDDKWti8HwyuSAWTb7kTvV",
  "key12": "heyYvBabjKc63e2wrztuE7oU6cq7gUJpyqsDqtnT37zw3F9beV531LJ4iveoaKNkxfJ7oaPHcEgqDeKywHXit5Z",
  "key13": "5H2bSvYWzF1epb9A8FP1r3XbT9cgTXmwEpCoPnKxwMfxyqR5dGBXoApfMU7wo8E9UPjn8bKJVbiCy1CbDbR121k9",
  "key14": "3CHhGfaMej7KpAyEQnZjXiDoRFoEWsS4jsGTJecexWA19QH5CX5cE8PJL8SWLZHfdpUMe3pqx55NJnbB4DZpFJBq",
  "key15": "4qBM9kw6Hxy9D8h3AvqgWkWuCFSPKdYRpY2c6LTcGewibNyAk9jWTZqUh6A7vjcyfb1nNx9mhtyUcfJHFwg78Qhz",
  "key16": "24aQubHEmvDV6Dfhh32yrg7YMnhLHdZHURPXgyRyoJLdRPRxxn89CkrBCvdqv4ne8i2mMPzTrJUz9mXREmcf97rC",
  "key17": "d7sWMY3rdrjM7dvpAnoRCSHUVv2oCpS98rGtVoXGsYVqRMTWx5pb88ZoU2g7TqyMcEvJ8FzAmko3YrKfuiygoyW",
  "key18": "2bCsJUVuUFGoZeTPR63ZuMSuftTYdf9qgWMQ7r8WghbYq6h4oVwoZKdpuTTM2Y1qCxEf9MAP2gfY53UKTm6tT6ru",
  "key19": "4446r5wU8nRMXtYLZjaQEGMNjdxjV8Rv4EQ9kEhuV4j5FLtK4sN46N3Zu4ujqW6n2ZS9naMqnVKt5CSaMT6aenmV",
  "key20": "2c8QSuubj4JETCS4LJ1ZQ4SCZgrj8s4uCP9EqNkYND5fNESUadeQGuNamqV4yxri5s5uRLVt7CHMGSnRhPWTBs1T",
  "key21": "3UWn2do7iY5yW3XcwzL5omMpQbdPzR6jcQErQ4xphTTKaedMrTNAFPZHuqqsuhKqcsKDwdrNSSFCNSWnHv3M2kfv",
  "key22": "rpRbTUNhuzYeaBgJS5ECdNhGbmfWZ5vugHLqHX59yxX9uqJC8WXjujZ6LKe8FsJgL3ZzrSNvT1bgPRbUNyuRgRX",
  "key23": "2Jz4JT7iDfT5mwXZnSP8LrgwuyHr9PLzv1jSkRuosaA6w7Fau4G9kQkaTRQq23zgadBpuQTwakvUcMX4ccxwXpXY",
  "key24": "DW99eWxHDGD27D6ef5MjzUwEkxQWqgfkrZzaQxjXqA3gUtaeT9pVFytyUesaZWRRZXhVgYabWxA3RixDDyTLEhm",
  "key25": "2mU9qZGc1j2C9wmTsNx4zQ8XeYCTtb1Fws7aS3XVwTUR9e4bzAvoxPiSC4PrXCxpqsdG1qHh4HgeAY3SsdP5LFmr",
  "key26": "4mwLi8NCFKoQ6BhAB8TmZHfbE9xjy1dho4gCH6MBzCQwrNwhega4ghxND87qebEtBHCj12VEJG1RXyD3Sm6kMrh6",
  "key27": "224jkC1p3FXLjUaf1beknY3GSBwjoCjjqJeUp5Gi42NShSaK157X2dRU5eByM3zt9JzHVL92oJZJnvgizwcXt4Ph",
  "key28": "4pm3bcSYAD8RkpmP4KCJHD4mocWoNBBragdukFkkRBkqncmpY62oBAzaS4QmRkEpUgMkr1gPvNp73Ztt2KSUnztg",
  "key29": "4z7zSm57jpTXnzpcLeHsd4CMV1XQ4BUj8VHhtDVvjg2iFSAEyj9mcQh4stiKafdpeZ4GDMoit3beNQ2AqdoTGTSN",
  "key30": "2JmxgYugcmkrUmuCPgp5CkzaSuBb3mBppo4E6LCwuWS54Q3NvkVWtqYN2H7zYZtkqzPgcNwVBFAMTf6LYeHYTipN",
  "key31": "3SU4zLSipqxEJ77zeHoBD1SDucwpSzaFiSsfQ1E8ZEZrQNyJSMBqqRwYEmU8xhQxFCSjhUzb4bpm1HDMibXu5WDq",
  "key32": "4eLXhfCXMa8WAXqrqVjW3Yd2LgnDD9yizTeyKPj6LDDY8tfSpzdT6p88iTbK2V7mmCS894s2QDKiZLrGWLfvw1aT",
  "key33": "24eEV3LmKgWpfzhpmft6GPVZhcvsRBTkA3vtLUHXcXZ4ExvP5TFLB3xiKBrJD6TsqzxkocYqMUVwyBaJiqTVELo4",
  "key34": "4TYP75k1BZDhk2vVy6uCiCkLSA8FaQ46BKWcN3iprJxmBW7BfFBqSJ1pCUHYQWsA2XBR3mU7W6ZnhY3qaux6hMz7",
  "key35": "491JbLV3Whtxi2F7ji44LjNz4h38qsTQMEJBXoQSRE8GpHsk8uCypLq2X22hkSWgDN4KZatAwp6BAyZLM9gz3FPH",
  "key36": "5zBRt77DUjqLZyeCKTQZCuD7yjjX4sR69hUNMwk8fPtEXSWNChrn5pJ27dPWWNW9YToKzQdr473ymTJCaTsGWXsR",
  "key37": "2DDnusQVZSSmEDXXEL37EzurTZAFWte8ZvVa9ynS5aNsuuq1QMVvSHRRywxXtcvX43e2Qx74WNTraSwjvdcZ2Xg2",
  "key38": "ywuQ54AanKj4qiZSQH4oZSnX1jJyHHekNs4K44aa6DrY1EguPdkeGJBWQvdQ1iXVuj28UjdoRxktn33LhmcsNuS",
  "key39": "5oAWQ3X5mFQ7HWkhEcUV4SEj818DE9hhmzyTUp76o7nL8WkEKZVZLruYn2Zqmq432YE9bZ1UCJUeWtQ9vKSp7Tw2",
  "key40": "5F3hi4Q295EWH4GB9MngYgh8rnXbL7RJNageSV5q93SxvSKoStMkYdhWSSmDjrLFa2PUaH2vtnfra1E4j1n5gNWR",
  "key41": "eJaRqqUB8Xcn9qXEjh6cRdU359sEMAUZRVYmM57jF4W1PbaLg6h9iVncyMYXZjj6FiLEZt4Ltay8VLUw17jpSSV",
  "key42": "5PLaFBzuomLZWWUd4GJRiW875947fBeP26c13tEbvEMkbDy9C5D9CiJFsmMN8tVhUkekZAbfG9xVSvUo14c8EqCt",
  "key43": "4DLb7d7iM77X6i6JQ5hSpvJqb4MZm4UjvHNVXCGkcFDfgbD2anvehbMPTCkStbX4p96fqgzmCwDS3hzSC8Lb8SsL",
  "key44": "5HXmjR4AuqgpHfrCXigBYi5Km9KLXw3mT2v4i7vi9ngeockZGY7ofguugCHdAWnh1aVZYztHY9bm3f6E4pqd2JBy",
  "key45": "3oKoD1BRKTe9RwS5Rc299TUBeGmBT2vRS1eHAWZwuT5Sz9Nke8Xu2jSLaze5Qfdz1CUTyE7Wt2qErpRiSGqzaEmb",
  "key46": "2CMgufrS7AuSjz6XdYQy2xM2fPnP3JpQg1V4SE8tCtiRXrrrDKnAhxpTjV3bUgH6G6i3eqziMCxmk2XmAh3trAts"
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
