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
    "uv3AXypoLApWN7mZaFgbcjsTjsdif6258qKs8dKpRKqvRcMw7TXmT6BQ6mUWdNWwXpobaKUnSt5bKAHxCU7XqPZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "321BadogLHfZs2DbTESBbJTHJw6dUVsvfJb8iPAZExbwu12EHFD2XymyHQWdoMtprekmkMXGx5shCvY5gRjZzUHD",
  "key1": "62JkhqT4jUEooWhyFjoqBdKF2QzuQcsV1UbdyUjv14EXxM2mW4KyJ39J6g3o7c6YSP45hTKpVNV3G8ogvaDN1kc2",
  "key2": "h7gSg3fnUSnXGd2U5PaaG3Sq1Y3PhpXmSGVqfGyJxLgB1HVjd3tukxMLmxsdoTrRuAZjPdMD1DgnyxjqV89k6ea",
  "key3": "3Cp6t1QYPhe5noEWPsM9PoEZiuhdFwAh8558UkWcbaxDTnjTMXMneWCHNvRAdQTv9MxnEEoh894c4qLxxG4ctEaj",
  "key4": "2uDzwybe4ddBJmLbWiPfUg2kzBifeD7XbkPHUmTpvu95LWyxLDSrHiNVTLJBSagUJZnU7LXwV4REzNASPZ3W8w6z",
  "key5": "SpMzm7s4Xq1AUs9hbi89QsmqBfgftA4EdEpbqbUw67KDY8kUSL41Ns6ftTx1heDxbTwdpqhe1X1CZ4jsVXd5WtA",
  "key6": "4f2NcveyYJ43fhXC2yS7bFN19fwJAqycYnktoSn5tNxdaD5Mvsf4VajR5N8EmmXR1iRAYSgZEETyNrAK8jjrKTqc",
  "key7": "5DJLssxxW8Yr1L6QPtXJcKeWZSGyYrgNeN2BEUobmK7UVnvQ93ZuHMcmAffyEHh3BuM142CvJbuo662QJHJHQvpx",
  "key8": "4iF2bUjkXrjDNcEQaJ9G6JVg76aXdUVjGgxfeFRWxLtPvb3njtMgv6uxB6TX2YCg25Pzk8TLtmhFGVfbVtZ3Fwhp",
  "key9": "5SHwE2bWBihbByDZBXnVLhpjbP2WNg7v8nLSeSRNtuYNapeuFYPn5W5q5h3eYAezuyaUFBAdAYcq6EMbvsGQDPQu",
  "key10": "5CQTnuUuQysR7o2sCfVzGS3FjpSt3LVvVqiEruYqsydGAtimXGYcLXH311DznrG3uS28NF3bM2Bs4idWBrhRc3E5",
  "key11": "5vRi3uJBmrYQhQ8npJUZ4rCWxFKqWJ1Sb4EwxVq7r1cHB3iZUkjSend3iU13zBBEyWypBxe7HY9xVwYrDeqF7CaQ",
  "key12": "3wgsA5mEjxbWXwTyiit5KrwizDog4X64DoyFzXU9JfZsTip63T1tUgvnmZzf3yBtY7uFr4vsazYyytCWuDEp1McL",
  "key13": "purD8rJSVarSYb4mDj127psqYA8VWhP4Pmgb17meE1eLXVFy8gQR8rrm9tfiSKswXuLqRu8WvVZUuSneeZQkZEF",
  "key14": "2u8KSAzyCG7dtjBmABidkXmcr3Au1GwyG4671oTZquqRJQv1w6wwEj6SEnnU5Z6k6FFkddEyfFMFVpP4CKH2GCyw",
  "key15": "5VJMoGz2jDkEfyrnPFY4sndbWE4DKRWgX9nNMy7zsrWkudDibdraKaxhCvjNnorsnr2KLaxJd2WxWUKP14Ad4W9m",
  "key16": "3a6VUTmpqrm7LM8dSAcM2ZktPVHaWZQJiYx7EYCgU5eTNfDkprZdyZFMsvS3TD7FxtNA7TFzMFbKWFZLANa4Ya8",
  "key17": "5VsWscu1fqaZjTjDcJvHmmevipwzkczSPRaQJFm2mMPFoBQ1gXPq1r8RS72tGqogBMLwrzdGhAvCpyfXaRHh8bk3",
  "key18": "ZbDvc7P1G4Yz1TWPP5jpnbSj8psgY6vwSGVcsi2t6pt9sdoQuPoam75fMt9LXQsSfNnTNAcwLeQ6pAQ3bcKrGzA",
  "key19": "B9neAXoEvdpw5u28uDC76wqUg3Zwok8D2khwKzXFN8ipKXNijpX9jkQH6oYSfEepLurNMAQLZSXk8dhqe7MFKpv",
  "key20": "3YWqPms1bvRN1nUtgkbCbSZAJzkZQwYMBp27DqJbLFZWu2ScphasfGXx5owpTh9kmybcHj3we4jLXetmyJvJNA5B",
  "key21": "3UcAVE7ZnBtgTYuysRqsFDwgUCT2B7GKj891E3y53YtTK6RZNbNQWTPsJhtMw9pRZvQtV4JQsgqtejn8G97F1WzZ",
  "key22": "5hyMmRNXucdUa4S7BY6kKTJCwMAMvgbcxU2FY8ud1F7XBcPqigRzMQdiUoYG9tqgg3CB2WFmQrz1Abbn4nwBKNJ",
  "key23": "4bsHdjS8efFtygKDMbuerFG9Jz1wQYv8T49BVMkibtdusBPcJB4fJXyWMQoo11DogBn8drUNraLTSdWQuceByoS4",
  "key24": "2ZFj6DBUChqFHTJrFjuuoQVWiXCktrvNMEhLfzaA6Hemp8T9Wtr6gjvddnYihYeJFuAzgk1UbmpZzE5LcJXtdkK",
  "key25": "3BAKXDVHeg6rAe1G8iGC7xsxoPrvU1T7ZZnKHHusaUk7VhGuUcNDQ5sNBLxwCGnTT3fBkU3oQpqmYfeRP6Gad4fF",
  "key26": "3Th7sCE81xmWb9ogGYGGzyNGS5Y6nE3R1WeyBRsFHCqqCnWeAPdgHCMTRa2n6XpGpQAqXsKcPKtwf97SnaN7FPxx",
  "key27": "5McFJxpxKcN6WAHoduMzzvacm9MXZh8qqhdx6hNA4QqHSAPvandGZA1gNcna1std1sVLYfLbNyodAnjFTJ9o3MUt",
  "key28": "DK5oHpTpDa9wjZQaVGSjcDhPDq7dK6itF5ozgMPcEn3LyFzN7yATRHhtyRLRGT4aszwXFSNQxQX7BMWxxpuWKW2",
  "key29": "4KXcASMV3UKK3SvntgymwWEMfN9eeYTsxpWCx9CJrbXGKwD6GugoUsfuaKykeFeHLHN2bFRYjbdaXJm34fgqHfKj",
  "key30": "4t2V32c7riCMTQ1XH2Ke18U2AWCoSnayxbhF2inAF1RMKj1Bqc4VjoeDb1dPHPohXLhgMp8wMqj2UrjVTkT9xxgA",
  "key31": "4GD1oQyC5v8Y8AZ2cbNHReVp81Xw8B9CVuGTSwBHbjA8kUMkXYBi9WZSyxHfGxebXuRVv4WfYQM9eegeGH854n1V",
  "key32": "fv4jvZaXoGwcHS9CNDaNAQgomr8k1mMSkkQj2b3YdZtjKshXzjeocaaJzgKDqxRTFmBqKCp1SPA14eCn2kqRLvC",
  "key33": "3UpnFRUG4XREpKETTYQZgzRGJrUNWnD8g25SpdXwgNwbJriL9fTcSdxL3LehaU2KuGhaCAuaudY5MSduq4nWv2F1"
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
