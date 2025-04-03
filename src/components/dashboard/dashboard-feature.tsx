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
    "aoSq1BKC2CCXXVzzayMeF3dCnAyYFuhNGnLpboyYdzyC5MbMmLgDq9o55yEViBpax7DqVQRoQFrE5pybcDEZoLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h3idnUvoToZd6fbmTzWPuZkf8XpHUzAHpsWY1rdNPAqKNFLL1DEB7HpZPJtqxY6YREJ9s7cXjEPskeNzk3qJq6N",
  "key1": "5kySPTxYecDY59Li8TeeVE4pTT44EpjtsjBFAqdaZCMRHkNQBLJUioLfBqC3EqiRrUV77CziTyS51CrFfyiuW2e3",
  "key2": "5bCPXNpVa5ibVmP2DiSggsRnBLs9ETDUNjZNyuZHDR4aUjGfT7q6eE4bAsBXWoimpxx8PqbpuPSqGw8q6XbuJZdN",
  "key3": "2VNd9dqaXDG48wCFYLq5ZmYmz9RwcYWVHyYAfsHXuEKhVzVw3EHGv6Uu4LHK7CEyXjSFTwdXKP1FPiz6fgj6Kr8r",
  "key4": "5PK3eLsZkSqvTE1XQ1waJFW3YhrXUL3pQjsXcoVXtdbMq768dfgo2bvkgh9o22BKKGRQggj2SPCzwWDuRSG591dr",
  "key5": "5z72BsttHBgsYwJQYdfduJ3UhFNZUW23RWBEmZ2mtYCnPAvtgq8QX8PM9QrWPdSb2LyY3kYNBWe5kGhwjNvtRB3Y",
  "key6": "63LyTypbSXRShe6c64SZudzCSsKfuRmGuJY4vZDkU2iEifNXAzmX2qMwbu8gRw2Du8wHA4TVbkqgHtNt9Tpz34Zn",
  "key7": "3nFkCfAXHRPur6dV9poEk9rZ3NiJiQXicqbhZsvsur2RyvjjvT5hYgZPygUMSuk2T9CFpz22zdxiVR6L85j4LcSv",
  "key8": "47FyP9frvaYQPA8GjjA8sMSVgKKKb5hfzVAX5wFHXeWKNuaHCrzUV6hnmb3q482UffDdrSxmFLeB3D91vYesFuM3",
  "key9": "4pCT9NsMDut1ErrKQxQzzM1h8sDwdrMcgNMQ1vQEsKZwoAincVeW3UEaZV6C6j5tzBc6XEVT1t5d53DCJ3zha6FB",
  "key10": "5pV3hp4YcnVPg6Jmh5Dby9DooLMtaW3nY2bTjMzUzJHREaEz8KoGv7YASWPNwsWkyPkFxM1E7haYsudDkbowpnfc",
  "key11": "3nqp69TR2n9FL6Sy83TKK4DCGPQFHKLFHhgdwz3ymzoHqGZ6wDkAewUxV8ZyEQ9GXeMaMmoUEb5nVTAhJzU2WAbd",
  "key12": "fi16NZRQTwH1zPZjsWTvzHSnxCryriPvthzTsY29znBisKyA539xgtyr44q7uQ9yUoPG98knZSnPaFcwY6hmYX7",
  "key13": "4NCSoDwuEmTHsRcAvvV4gKzUnnbfP7mWLRbSdYHHJMML4sjmKkcZRaMW3yMvpiBDJgHno2NdnnANB1HVgSchWem8",
  "key14": "41uX6z8KUDva5oyjmfn2CabnYLE5aYWSa3SdGy5xDGq5KnVkvgKEYEsxUTwSwBZxFDQDv9pivFTPDP566mXU7GB9",
  "key15": "3q1HcrAarkhbSoGDAUjTH1CmjqZMmnpR4vEYW7Kih8DREX1gW7XMUNLC3MXxoYM8oQWDwgyjDu8pcPjnNw8SS7RM",
  "key16": "HDt6scUtXiLwP1hqEMrgVMDhCx4SptCfDLuxid2DYJmmyZFbByTJBfpKeNhwgewhsiy4UmK7AxUqhHjWVAtqNAg",
  "key17": "z4y6khRjX9nU7kkf7NgQaYK1YCrJjSCcyygWzC2iJKidnr5vhekHrFy3Nhp7EnkW4yA5UyWXSuNzmYV3Lajdhpf",
  "key18": "3TTXZ6c44YGDFEY581qUxyKutYjBoaM91agtc7vbMmbbGff6GvioYK9tQDkT1GTifty87C55gAZRUzXTAxXF7pSZ",
  "key19": "2TvzW4VpuLrhpZNxHcbhtJZTXD7ynvJs7BUbXXfp2eUKE6qkAgr2r6QKK5cgMnHcwp4TXMw4PdVby4wdZRB6h78g",
  "key20": "3UvYqgn7sA1o4WYmPP6AF8iwxxoeE6qVckB8HhXp5MxfPHPcztpr4JMT2svk1AQFQC3QNsTUQFjbY5FmnJybThKc",
  "key21": "3dbMarwm5wTM78eWcfjjr5U5WEcC7VMKZQoZpUQUgVBq8pDytq5uH3aBRBhJrrQnH6Sun5GuQ62PGJAsq7vBVVXZ",
  "key22": "21AzJcnRwztv536mahNnCqhbfgoVbccMT7vdGgmU6j8BRLYJUqycPtyTw23XLUFYtwE55FaCgPeiFrKjwcA8sXYh",
  "key23": "332VQHRM8Y4HQAb2dVG8saYisVt9uQ51pXhzUbD5Y7LupCpc19GiA89MK3vXgH93pivzU2CLTc2As6C4SNYE41G7",
  "key24": "4c2YB4hfvPY79YSbvKVkhsr6yqZsUyNHoWZuxQUkZGN2DXZSE2481edMH6GP7fhbs7FSVaNkogqnRN2KMocaGxo9",
  "key25": "3gg4L28WaSnm9Gs3VSWnNfCjJfeVG3zJUK1HjishBLrbXJzY9837Wm6gcsGynU7iFdwqQdxv4tRdmhVZnFvwQbNo",
  "key26": "5DP12WMeAYBKzvKwKq73qXGH2ymmvnmt2LgZPbvnk69W8J3ZtKsXdMPeNi6GouYMee7bBtRkWvPMfsboL8rGyjwW",
  "key27": "3NXwU7aK3ko9WPDQsUmKtYLPBx4LczYM4nuVZ8XhAXoo1BwQC4Z3azub9ooNd2SBSvrDvm8y5SSJo3zpBNZYu1iY",
  "key28": "4aNra3rfup9GaprPoA5xgF6eFp2KDF7wRmWCut49MKHBmYF7FKZtnyMRk6ZmN3GRiDdDbw4ak7gcVVNaUPWqji3g",
  "key29": "2bE914kL4NuPxz2wczusXXXHaxck8BgFNMKeAerRa3Ck8UnBSTUhW6PrCxov9Nak7R9cTfPNJCkV5kj7UE3sv4Ug",
  "key30": "549XBkKPhQGDfNpbA3zt2PFchkVuog3go4NkCbwcGQr3AHYr42YH4oy7DmTSL5v1usR1XuU7WCVyzm6c3LdYfgho",
  "key31": "53nRVGt1Dr2A29q8HS4gjFgN9VMVTC8xcVyURkg5zAPajReZd9P6jFmLTC671Z5wxJwmaQ1dzXimFC9hUhLVJSFa",
  "key32": "KFb2NiNuzFzEmzuhdG5SpVUkLjnjiJQVUkbevhC8cyPhm4DL5TdGqNhJk75PypEf1UBiRygjhDdpAqTEKiDMvPS",
  "key33": "3a74e4b97383hhN9t1ot3tGGDfKaee8Zeimx5JkFQNVUeguWMZGoW5SH6TTBXUFF97CCryPDZwrCXU2FPrf6beun",
  "key34": "5fxfiSmJv2hE1bLEpNnMEt9Eb28AuxJvV6NCMySa9vNTr3cvZaqzhkUMZQk4j6PNEnHXrYfGAeTzhcwW6FJnXTDy"
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
