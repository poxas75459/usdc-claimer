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
    "A16SLe6hXnLLahwux5sQj2c5SVaUFmRANFi1YGQAs9zVAZHT2AuU37wXiycUF7mXhKymKpXTq9w1FoSvKfPxY29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gGjRrR4rTszKPk4niWFXQtn8P5qj27FKUsfKLG4byjrqywTji8WQvTGJpcN8PR7rYYXWb47rbFLzHfM1FW2WDWH",
  "key1": "h42PjZaJp5Nu3uBeXDjTiGtDfHikAsdcvXNviEQguqFnn1aUv9GoUb5ggmfxh14v8h74KUwM9SpFcEnoxrsK8sV",
  "key2": "5HF9xzbsVgKrzDshyuPoegFQDqLFdnso2zSgC9yU1PUdvQtaTXe8YFPqmBu7hqWeo2i4LS9HJg5QDSE8BKtK4mxc",
  "key3": "S7TFNCEHFLWbXi1JXuWzhYDA2J5D5yEt67i4WzUN2xp878CnJZXqsDWmNNTm2GDTE9RFSJBGnndx8uujHwZjSFh",
  "key4": "2C2PCPNcsXyDPLQEp9Uvzq9Fyp7vbR7378gGorGT4dhtuky6AWJZDDrVpcYaKTwuA9JoJxj3SGadK6DHrTMSy9En",
  "key5": "4cQPEJK3NoKwtykX7GM4xy5ZpAiUHf46hpEBq9t5b9DoRZBeCgbT2vBwgkewbFg4gpFvqo6K71F9GhNSxdEp44D6",
  "key6": "4ftWXMXhWDupQoq9sGGT2kZMLX8ewKE31aezoqZbvdg4QRC8CyCZ8PwV77RRSRffEDpDeKMq8gmx19XT9pNKkCKr",
  "key7": "3WWNmYTFZ7vfF14aWqBNRvmNkEkqatNaan2ZRsgEoWWmN4oKsdWaMwgyRHc7ahivskmmkgW3Yj5kfapN2ezVGCXi",
  "key8": "51MjZ4wH9haTxHx5SxVrQq4LP8MWcbExmbuKND8jkTy66zwrTQ8pbxYWrz23CJcfQi1krBQhhnztrby1PgLa96gp",
  "key9": "9k1s9vCRCVBAzn4tsrGVeNVTszCSBu8ziHe1HBHyVfnkeL1dgT9VhGW5zDwRD7SYMACEfXaVfUPZhV959sRfFtz",
  "key10": "3wPKusievJbUjuavUhDanrjuPAb4rbfQkibTajFHKHNFBQq6CLgQrZxwPrm7iZJjmWk6NWGGhwgjTSogVMCVJwBi",
  "key11": "4L2ByTMVtYWtE67AcuiuH51dW4As7odt99qBZEfkVJg3XHLFgLPkveoiXKK1BsbA7xQeRLZMRnzVQQqohdBdZGS1",
  "key12": "5jraaA3nzknKMcx5qm9MvhJAyfZESSNhnkVoC39wJn4HvZ8jqBUCGrRiLMYiN8pUJLu9LW9w5cRopjNK1idBkFxD",
  "key13": "4aEssbQorhx3rZQBgaHiA9wyerg6EQ3HJ2DENM4YaAFU2AnC7cNB9DtrwPLLxu9bEi9Z1c7TUwnQA4DDfBk5Npnn",
  "key14": "3ff3RNRmuJoVLPLC66kCkgRnDuk22CayDeBYhp2hHU4ao2W9tM5EKqkMG6ku1uRR1jrCgaY8kwfdRYRVPNmCQXvr",
  "key15": "5uvdgaLYxRiMTaWYdk22JvYxSx7uVqLqGoCNCqkBMQ3o2CGksisMU6KzJFy7RNMKfnTWBQ7u2FQbNXmX8oVTfsAv",
  "key16": "59DNcopRivTMhYcBenNyBJbb2x6eR3LQMYaK9fveraFYfWmJ6UfoQhKSzMfYwgRJkSQke2cALthGsN1Gkpz9RZvc",
  "key17": "q5Gh1NWma9s5eXxws3AHSej5vhUGoTgL56Xrb6uNw8nAfBXrMmEQeGEUJqDeWFYuUrfnvKkmY9V9ziWrzzkqk3u",
  "key18": "AL8xeAV7PAgtLxDjftGkBktBCHFifnqcExEYm1avd769aHv2GGiZhGqwr14SybxX7xwb9ZkDg4wuCtwW73CSivo",
  "key19": "ggZbuJnkTmffdDC2xBUn4GfGy5h7fbauFjqHpPwzBfLT5xThanSfzPtKsNh4siQUoMpjbLV6dsnVVVH4zJpYZDL",
  "key20": "3itzb3YJELLJkjteVPoiGKD8MQovkjZE86peHbPL8EaYK1EJci3QMZndwUfmDbfyhxHEzqTwY4oRViFmTguodtjw",
  "key21": "77gJVFFfQ9JTAQZG8hmjuMwUhiNfCxzvdDPxqxhbQ6wvVeji1AoFeqpx7QLNa518d8y1jhsDoa5NCDgQUEGr4Js",
  "key22": "34KUiGQaK459KRePbfNuLhqyHeTaekiH37JQhnH5iPwzoBovLsgRYQ8xToE9KBnaCD6FAsNqFiKdb5YwbK4PsvkX",
  "key23": "4dgdQfy7HZF1BKjHM4Bh9T9SAk1sL5x1e5nxzov5dLX6ddQmSLTXtL8cq8ydk2Q4H1GBePg1XxpTziRDgKVerGAH",
  "key24": "2s3i62Q4G3FRmJTc2cLBRvoJZhvB35TdUpQ9ouEQDB2JtaHZLzX5CJMPCg6hrNF6cW5pnFR2yEHXbBGGJmuHxcc",
  "key25": "BiTuy6FCjsNLESjqgTaRS9aSEHiLNQdiTw3z2KFSdsyx2kMU3veWGQFBXTNWPbVTDEPnebWWnELgAewstnpF52Z",
  "key26": "4Ajs2cBNwgkJJtajiDhj5hjZM32vKakxSaE4jPo8wCP6o7WFYi86EaWvYXiUgJXRSdhmrtrhAr2uBBZUNY9Cu1Uv",
  "key27": "5FtVo88JJvrHMnmMxj99Tem1MnrSoBPcXbnzB28ANtdRkEhV8c35WktmYSLBjjyWxyXFvtEw6JzidSKdwnNt3WGD",
  "key28": "4WpTJ1ziD7ZWproEkemxuQzDaCBX7xwUPqy3Ginw2Z2X5DwaBiVh91hXDccoZDxnpq7vTqWomLqqEww1uHmSdjKV",
  "key29": "3mBe5D4eMcU8eVFEYpTPUg4V6QXrEyFqhwE5AR4TrBBhkbkPQnXM6RSA4Cf8z4PKm1TTHSsK53fhSYbk7oReMkSB",
  "key30": "4TR8m45jUUaAYn9UgXsfgikyQEPoY88FfRJVHh4s55kudD3LGixPHZbpRjUumLbtw2eXE4qd5A5HVVLbziT7Ui2A",
  "key31": "245kusNgd4KJMLyxHDTb3Gxv6xReFvCaSxnRBUhH4rCrZFjjnxPXs4LGbtJLU7w36oioJ4wxtUJPzT4xt9wfwQiS",
  "key32": "2dJPLzac4B6x5xUBzTDTUDcQE9564qzf6DLaPVNLGgRbc5ARgTsDnwM6LB1QxixHq8dUT3PF5YfaErS7xyoeTRx6",
  "key33": "3XWwQF6wXC9aSKUuaEqKqEyMxe9dkxorydmCTYa7euVQZAYbWK2xvJgCRp1hf5K38sUGDiw94PF3zhAoiu9MgYyW",
  "key34": "39AtVD3AbaE7WBcPTpxfU5hGJSWLNpJB3cZnQipSGQhgUqhMJhBmyhu6oYG3gF5RDZgX86LFx9hwWCPWnfpLUqQw",
  "key35": "4Mj1WAGJ2CU1vNvRDXWpvJjFSv2Hpmvs7pAWGqct9MfhXDwgaw4nsY8GpJAw6PPBnmbz5z5RVZv61p6s4wmhXNtM",
  "key36": "2Zt9qYkfZvx1LvfYHH5WFinRMERx8pYg7GYztwGGL832kanxowucobmdzAfMbXGVaHKsnagGRK3bSJ7Cp3TgpTHp",
  "key37": "6YT4J15PahNS2hRoTXkvJaWef1DqDJQRzsdn1aKLarDKfceHgm9eQ2T8eZzvpmJdfYt88G75WDv3quHC6fUwb9T",
  "key38": "5gHuafnDHwTL5rkgZSaij9XeTYubmrdmmk5htpV57FmMM7Zf324SaspEDZwzyUKZ3iS9atSwrG3UjkQKyuzWgBWJ",
  "key39": "qDQC3d49DNPiZEJPd8Y6KdUkN4J4zY1TdvScZVUsmopAj12kAh57bCnDzCf85tSrTCL72dUf3q6GTm71b2qr1Au",
  "key40": "5pMN3VWtpod2Aqi3NafXt8TH3bypiN23LPLtGCJkaA79KBxagUs8SbKp68PCnc3jo8m5sb1xUiD8kZPFtAqoSmYm",
  "key41": "2WP4E3EN9jgsytVEfKeYiSEAdL3UkVT6dEWjcKiVvgv4GVfmjxigroX4rj3yZnqGkzzwVZ7ApoVs9SrYCf7eTfb",
  "key42": "K2pPej3Hu3zs7wdFCHHrtVvyTbR3yjDvS7jxK24DYZh3xWYJ86NUijkRMB6oE7YjBM6zNJo3qLPK3zZ1KxhuGfs",
  "key43": "4Ta7zJujKjwK6ua6MgBqA1m47CSR8aWczrB75vfxjQWCBqD6b8VkvFpj9XRRPWZ6scHKtBMSvjvKr6dBdTrVvg3S",
  "key44": "3CSzMURQWSdBvdrF6XY7hgrD5c5cNeR6sZQ5Bd2Kd4HNmEPnMJ2swGs4H74FM47xNs5JS4KCg9BUiRjT2gHoRJAf",
  "key45": "3DQgN8a9dfNbbyXRiGw1GNtwBVvXah9t61MoBezuRWKRmSy9XEqza7qzbssQPU4XuTZk1q5TFMh4b3HFbxia7zK3",
  "key46": "4yQP74L4dPNXp5va6GZpwc8ZjViCXUqSXRaeVDY1Pn2gPc7cSQAMvTskrv8g3625iiVjLVuppyi2pQGFQcenftNW",
  "key47": "4Q8wA1eKPhuq9BEHp7bFS6juBNGPDCe8JPVSCuy1vqYVthv58yyQbFKHtnHHXgxp9qVN13bXAMCL1eJXiwkPGGA8"
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
