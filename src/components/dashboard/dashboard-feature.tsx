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
    "4pHULmWbXCef4VRQUjAzxaKaoeUsr6fuTK26a9Cif9c8H8bDKjsmCMXM91DfnVSJ5SrDEk5WmpsnrvJEpfsAXwoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ikKzNaLMLjGzxUHnG1uotWMACzMkUR64Pww47WyvQRoG1AeEDm4cU7ZLL6XT3Gw2LVhBNX3u1AV5wnHxqRLctVr",
  "key1": "xqCVwnFpNqeCWdonFFFPkfkWyyhwxv58wv3PETj4HB3rXnUZY3EQ8mYW8yGZ5hqAnoj1DrkqaGX7RHC2fupLEPv",
  "key2": "4h36tvXqSoFNEmK9iuMgU6k94WsniwGWNd2p5ENXFhTYxAnfZYDxdJARB3kRW3WzjmQCjZVZHWzH3dqMvyQbWxEx",
  "key3": "2U3e2iCTYwTpH8pQ33zvcG6Hs7igmV63nSZncArE9uYwmkGyMnuhn7bqLz4Ho6HGcKyjZj3j5ZLCduzDpECmMcFe",
  "key4": "3vFucFxajonQSmm6Ffq62m3ZAVjSJJCKNJx4DEBsiX2SHiF852gQbt4hsQkyT7qXbrKuTheyPHGxyVNyN7dsMn3H",
  "key5": "5bKUwt8BoQf3WjpAmxK1VpL3JQj3AKU9vVAt2EQHA1N7g2GdVLY9y8R3UsPctEB93eqE1A2BgAGvjt8uf5rZ7evc",
  "key6": "4Wv6DqqLxAaSny36214LzguMceZHnFGNLQs6QVCwAn68yaXsrT1VSJGZTr9RGvveACPTZVyXqTrF4DN8VpCW6n2q",
  "key7": "22dRATZKW9EpVAuPc1DXeTtkzbhUC5vPuvj2QdYD1oQThhUyDyqT9sjNHWrbmgGmqk9sH2f4GLspnNf1ihqCidHE",
  "key8": "49cdzrnNjeVTuNXtMR56C2WDwdm2BvB9i5tg3Ft9vqcCpGnURx4LDXovCrQzei5JoqDZkPvSt6bUwd1mAkumLMLz",
  "key9": "3UcZJgT8oT3WrcGEGoCzYnyZ86Ex8kDkJFh4z6De6NWr3naJ4GNjyzYbj6frHUprWquVRfeK9Y8RvxwvBKVcHFke",
  "key10": "3cYTqjtmUJ7mLuq28L8hsnjp24rnZSqLrWK4anG4iAjCTp34HtfqfkpduD9Rsz2okNfusKFTTBhQcJ3EcTD4o4MZ",
  "key11": "4fTowM8kKNUhyyvaFXASGUYr7biNH1L7UmLzekQKmJ7QWEdnaqEmshDLzHsHsg1nA3juxxdTiAftzoKLxoRrqrxi",
  "key12": "5Seeaf6QAAqWvKzAxrrH5qjrW2omacQUxksnjPbo17MsYA3HJa6YvScvhgtzsyxCqvEwbYEe33e48j8q8iqd2mjj",
  "key13": "ex91TuNVZCdm19Fn4uSGYrL1UPBvPS3xfwFN2uw1UsyeJuLX7gGmdLVsPWi4SmZmZmMKSUqJ9wdDfBD6F8Le1Xy",
  "key14": "2zveh3VTXx8SVG6dZxJaJVWFYvUR1S2XXYGUfXjvygEA4E3zT5o95CeMt8ib9gPjkKRKowp8oXbeYVaj9PuEJnwe",
  "key15": "3WauNbt9pcBLTR6EWwzkAi5wSBx63ej4aZ4zzXXZDtipcw4vG4hzCrhYziKJaGaSwVcCEsvGsTDMVKSCwjWTgwCk",
  "key16": "34ssFM7YLW6DFJ981PYTt3rR3bf9NCfUTvoFNQAvZXni2a4iHd6hf4uEJPLGWHLnK9vU1nfpp3sAQPCvvRm5Q3eC",
  "key17": "o8UKKhZAeGhSz5KV8ARLmw1qi96Z55duzKZAsZ78PnV1y9VTTpKsotG9be1qSUwE2dxpUB3hkLtNNP71WshHFtw",
  "key18": "38kZg65mS3txSmU2Ld5SDZmJkkeaxCnRcs8hRZqZd5PA1LGThgTNG4DjCe69FAxm45jccnULctYmNezvKJrw2Srx",
  "key19": "4oUUmYsvq8wWCvLJCEJJKBQQv6LVaqxwGjheXVPwPe9w2Wz1Si3ijEUmWuZSrgwASD16EanykRtDy4EGmzCGXm9H",
  "key20": "3cqcB5E5rKvanfnL1e8j1dMSTMa64yUPHQg7Xoqrnom9yvfjp8PbkMn3QpeN9GF63GexbBmXREn3cRZmjWLgbNN6",
  "key21": "67DU4Bxf6mbUW7ajJrcUMjvGms4BtVeJvZKeWofXJFTn77kB34m3oWooYCV2c8gMb2SCEBVA75w3NWyUzSbnhphW",
  "key22": "3HkRmYL4NX8LksBDbFA2Gc71BfWinVo8KXvA5jHzi5Bv9pJEXh1irAtE5ejqnHr3Dh2rHJosWfM6zowmvCuMCFvb",
  "key23": "3J1rrRkKEkJWUMiMZhYBdUufRuF63dqkbWEQCvciwJfLoiBP2pTT2umax34QKtAxD8ezR9tuXGteKmxQQrsVAkJy",
  "key24": "2RWi2JjugFnyKGuepyoe2DDNdKifQLrMGU4os1HMkGdr6whwtHz1rzoPVQrPJzHiPARfRRY7SQydC2Bvjfjxfo7W",
  "key25": "1v5veURSp4KWRBczSXzvTVEDSmfEjCtfGNXemCx3iL94dc9MMyiFh55fSd1wbRg3DQGPKged8udUuUXfZbr3CXG",
  "key26": "2sxGqv31K21Uivga8meEcpC9vxZJbS4gD3EKENPR8rpsTLg6hAw7uXE6Bw6srsbCHuryENW7rJ56ZgfxEsGmuYBx",
  "key27": "QWXEsNrFppc2faZNvEf39SrD8SqABqiPZFYkApnrcX9q39h6eBH3NYjrFw6EoZfVBXZngy4HexYRUH9ic6aosTn",
  "key28": "2gQNfzw8GWAXganAKxDyamjKv6JUvpsc3dNxgNzNGqrMCLaKyHDXcFQ6oozSn14i2QQ1iTpCkSGESdrpYhgy7bnk",
  "key29": "4FrwTpd24Dc7P1nzPMzuxRru7o73butgFpFAB9PMcqoHjhAPqLaGB3HhL6cMCGErAWpJkuKi3XBknCFYYVDWpopp",
  "key30": "4izS7nBi1Rs2HXb4YRZ7sufmhEtaNLZjfcNQwaErENYhKY4kqaGzZntHgh72inyZwTBVPqzJpUbjKPqNNaoEQMX9",
  "key31": "3p5iKNsRWe5rFp9gBbjJwshom1gdWJbTQjHftVKibwBiEhL2K5JayA1j9ffnmwJvE65JLp3NxnisR7Tyqrv7Pd1S",
  "key32": "2k4aS1Dm6HBfzgt5U33NGdjD2AJ4xwc7R2BjpSvMx5GTv9g9vP83qqrMuTwqpqMboXzAETTfwx16n4jJk118TqhE",
  "key33": "3oe6nHmyWt7ykQ7uDTRqTwdVXriSE5p73jxnwjDfHzdEfzDBKXrUbVcwann4BJsC4nw6ZhqYTQvAKLDbMCMUY64g",
  "key34": "8wX2rjvGhgxWKe6in3TrvLevU2Ao68z4tAQ9XURGwRWh32Yi1CobB51tpbtwLTUxLQ3sHc6Uj9HzUGfotUqDDTC",
  "key35": "63DfZ52duCyAxNwYFWLrxYGTJtXw1ygRPu2MSQqduscszkAKKfxJYjqYSTpj7PsWkY7yvaAkcJnkKknfZxhsqjQ4",
  "key36": "5VXfYA87ccvCPdS4iWbRGHVd35r11Vwg4vBKeC61ajP5TMcnEYMASGwXUbiwrKYgk5muJuxPTtvFSAPrwg7wfe7Z",
  "key37": "26EvJXu7P6Emsgc3q7oGKjfwxrzYbk6B4C93micT7mGJAMp4eDR91zQr8gK4761VU8L7uviQyzqXv4pcycxXooyg"
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
