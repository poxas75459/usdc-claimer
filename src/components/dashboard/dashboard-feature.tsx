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
    "3PLKXj12bRv6Y8UCCHiidfqJtnPY33Ap2GpWfBQnBfeiCJmdMP3dikTKH8PxKWuBBdE9Nd9Wf6GFgwWiv5Z3DXfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34ZtANnkXVgNFb1cP2JyZQ42f47yHBEAqFKPZocxGFx7kxTVgA9x7Kf3r9okCi6V2YtfNkTaQXDzdELB1xjmXNKa",
  "key1": "5CrEecxYsffzuShAxAvHcVr1eEb7JLMq4fwS6xuFkvP7HyB3iDmbsMnaMULo1CDwhHUL2VzJJhnz5LEQN2XZ8J9t",
  "key2": "3S51cxG5S87q4DwbX6KGhXf5cdgBcviH7MCwJoZYMqRxUc6G17WZZm6qH3CLc54khjcvwii7L5yzSAB2vou3QHeN",
  "key3": "2CHEDoN4JdcwFADZDqRRdc3x8ZSQ1mDdNn5RJ4bLPma5ZnqMBPCR9mv6i1LmV1SMckXExGpwQdZ6SLgV3taS3nP2",
  "key4": "5S1XFPbS1Z9K1rRpRRrmvK1HZqr6TB18tuuZmktfXxVneRUkRxCxekvxJrYdi4QJziqgje7uqf71Di3SQDp1n4PV",
  "key5": "eYdKSaDvJbDbPa7rQGA3Uj4Qzm6f8sQBrQQxF8No75sDTXFBLp2NdVMWVRpx2nMVuKj7x4qVqycZEgbggiVJFe9",
  "key6": "4uGuyv7SQ3w4sNTY63vo3BWRs5D6TBtjSS4LwMPm6pqggijVDiiNf6A6bEGt3bdgvURg9RvmraamCkGnmyK72hbU",
  "key7": "3F6oxSBcW5Tmw8yUGSoDsMMcBMWQuwNuMoZfuRDApt84s1Lbx1LVuTo9qKBwq1KiVZU9jqqK2bbyNLLuUKefjruc",
  "key8": "5YKM34XNbhg39oTRr7WhcQ6BFYC4ZdsXJYDKbQGwK2siacgVVbvuykiu6XfuTrc5BXtDkKvK8356R8scDvZo8SAM",
  "key9": "2Gbx3GNzZcUT8XK5vjcgyzXkbpYdQYWb25sJWRmAAndEu4ZMsLWTERsRh9iwWvGkrxbFLG4ayADdpMCmQCpTsXk6",
  "key10": "4NKVn1S95qKC5JRBaiU1y2Lqxe7y67i6t1i3h6xG6uEEAah5iEMG5Z75F15Hi8zm1f3tQGSP5ivDN84gkJtLQMMq",
  "key11": "599Qsu3gtPV7UqhvFunZKp5Ray4be82DEb4C7DP6P9a5FHdGd23GVE2LsRHE1Pe8FGkuxxxZZ3mqkB3a1pi6ES8Y",
  "key12": "AjaTJWvigGZxRkd6YuUaAnNPV1PV6UBMMkXeDG9XWHp8Xmg7f4wLby7jTdfyaU9YjNe8y2VnTHWFwZ9A4NtMKCx",
  "key13": "2nWLgbzwhWaTrXuczDkejf89LkCNWMVHUWa5H7Br9TXLD815TP2QSQSS9tBcfh6uvq8bhBswnjJnnpCrN2szBUtX",
  "key14": "3Z8179Le4Wvsd5QQLH9T6LpoEq8rXmaiUeRU9fCnakBsxw1UBd7RdqkyNkDmWKdniWE9DhnzCmoUN4CjYnMwpDFe",
  "key15": "4AfjYWGF6ia5B27garHmv9mUBDcXXxZRrVo6uP3bPWxcqutoxy4c7tzDPkXGFGu7j929df3XfmW9ghrm82BiGrg6",
  "key16": "4QrNMU6PhA2tAZmdqXt2nvTQ3iHTkd8veXCqWsU1mmAanMVMN7iKkLtrgQu1DyMvS3PRiSAkunUhczeQpPTfpXDY",
  "key17": "4sBVorpmQ7YFvSmDVE2tNbnPxraBKLJ8RwV3cZXWibqe8j4uZq7xSD4nEP8ZpzbGjhhUxHeDDtLZ7SALRopxtYwz",
  "key18": "TJWBj6TSu1Vhv5rtopFDv1Qr24fd4AfTE8fHe2bQhnGr3Xapqnj4RZ3NZ5exnthahYHjKsGnK5vVzs3qnNRtPkk",
  "key19": "4sqMikwWSns7oJWgYypyzQHXQnNfhbA34qhi7HN47rSEebwc955rRrZLH37axsToEr4sfAvuTKMPZnZjtVEmHTKS",
  "key20": "4XY7VWaGYWQcvoHn7NNoy5ARs6WF2urbgFydvgoGH5z6KFBQhrRJq91Y5jHGLGGfMoTHHq6HeKi1zqhF9oZW8W75",
  "key21": "3sxfkewz5mGyb9Dfuoq6gGHzQTwZVPtr5n61UNwofeBn7RvjHCRHHk36z19ypqSC5cuWwJmw8hfh99JfMHR8pzwT",
  "key22": "29jpLQ5SsJ8BcEHswW1Egs5fYbBicCAiqnW6wFabz5EyXijwEDnMhW7Hmc416HeXk9MSAkbXPx43WT9JMjJew333",
  "key23": "3rpXzgC5kouHAWr8yJ4xCBPxXHS6JBeztMQAaFCmAdG35vGmwDMv9URA27j1robfmdGcNVcn1J7utxH5v1MfmwP6",
  "key24": "4y3vxTpL8gyNAqU3YzTvtEACPnMfwLLBr5urairJmALSqMr2Sf6J9aoCycYVngTjNpNiD1wwHNZXeAiUF1SdX2oA",
  "key25": "4zSzAJGL1HWDbqyxMQ7M4E9SNDA4QGsDD3KQZWh5SoDQad27w9DxsAzWMMt8TbxbWoYt8uk4EGUsW2w1J87vgRj2",
  "key26": "4mK7BWhv4Wy5tuUhkZG3dGdLxoP9emu6R1nLeyjYpSRJPfmDVMNEbMuxHNhePqAYEMbR22oZmpPaQxLe7s9VKX9W",
  "key27": "eo7pQgNm4NPQPNexEuYMXyihbY6Lg6Am7w7Ucj3GZUpkgYWTLAGyQ9mxrrQ53RtPZWAzCnhFfNh55TpxB8kexSN",
  "key28": "oCk8EPkqEF7mgQ64Mwj4qrKSsGeNThiW1dcxHw6m6G8fJnaJebAefaRc1zwp6Z7Rczab2CTQmhf3CZ83t7XQ53F",
  "key29": "3k54CDu6dEup7KQeHrpBV8gVCJM2HdUdq3JKLmNaD37Qy1DRAkjBPBbGKwakjRzfS4nL6YKhoMKfh2rLduZqdyKY",
  "key30": "2i8z9ZvNE7CQwT3L48pBNGftXgUhS3mJifpPN8ywQagbzpxZqQyUrKLE9wJTJaMVQxthCkxDYCSNWmWbvy7HUPrM",
  "key31": "24B8sTAnDR7YgLP6t2hRm1K68zSGPGA7Z3m61i4JkMoJRmckmxmwWa8kKNNnmmHiMpTW1EE8vLKZrqCrQ5dR9m64",
  "key32": "3dbqijCHLnGS38X8s5rTNHokEJmFhBTQiT2RKf2gahH1adLPKpvQvNSyDGWnsGe7xdr85PyBPGarBe4iii5AWTM8",
  "key33": "3FTo9EKTzSWAQgkDA69moNJG35CmNvuHKx52jsiCbPsbU5xH5sK95PCo4yp4WxH53ZF2RT4pmfeVEbEKseBYswB9",
  "key34": "59U92j6GHqDhAthwTTYwdkbYhzqmGqXE9Fsgn6Hnsi9LAD18yXdEbZZag9eSCRh19oT9X39ZvED69WxZKBjZQjru",
  "key35": "4F2HsKULgQqP6FmXiRvvADHDXKsCrd1R74Q3uG7VBntYQSgVB9qLeYPY2BipjnRRfgD5rHNNzNL2aBpdv7DTxGF7",
  "key36": "2kfrBNBPzpMXfpQDmNbXZ7eJqJJz2BSe8TLPfr96LRpLyxZS2vqXFcrboqrcnNpsbvvzJKNBL6dnJ1T7kZ6raNgk",
  "key37": "4kYCGRR46Ro775TETQoWPx32rWdiXMAYUaftFzoAvBVQsyryt7SjUQ47BEzcWyzUVpNkqdkyEnzpjjPmVEWc1qM7",
  "key38": "goxpQfBHmvTMq2GqWtv6UwVrSkJJPGyD3LzsCHJXiYj4v6PYRxtMxKxWA424owpaYEpXvpHjyUFM6Vrve5FsjBV",
  "key39": "4FRGEThb3JxyTGQMZAHdUcjQG6zrMJcYaAHngH9SvPQVvwGhEZk6irvZCWUZ47Rve8YKnSPNWfy3wJcbJTTMDNNX",
  "key40": "65M19YE2RDLtQryGCywqhc3zZiVgB5GSVNHmuvYjJ2XDWS2nRT91JdxHQTZhsb8n9TgkCorMT6knZRjuhdUxijya",
  "key41": "67R8fxikLhUeJ81MXV8XWj8fzwbsHAiTB9FGbsQTkFmuKNWDJjjSxJTU1o189ewAv8B55jYJCTFmE3okNSj3HVs5",
  "key42": "4TD5uVtmhQpXrBV3PvbRV1rwEbPdDkLLL5Tk3BfL7ivM232aa7XoB4xC23yecZBdBegFJ7tVAvrr3FacGSn6R2vz",
  "key43": "4ABPDQDonwG99thSt655CQPr1PX89k7jn1QQXJvNQtnbGUdiCKJTFyxVyza91GEH8B6cMD5NoDZxz2HvGdMSLM8z",
  "key44": "4XKtZqM7ENVGtkGYRa6ck8T5kacCKY9oQdgydSEh1jH3EntjhrtL3XWiaAB4FDmEAemGTQHCcKHwGaku63xPoYsK",
  "key45": "5MZ4Lf1AJw9BZqZmqJz77UTWQyWbfbyUZGdPsBwD1SMpgayQVprFCQBt97FYBCXhKxNC9tGz4ccT7pcVfS9Uspub",
  "key46": "4i3EMa8bPGbcucLnnhsT8HQ6oeJuvgeMNF9b9a5TArVsKjDwidkM5YijjM53x534ANvDPxkotHwYpGMTwZ2egGwa",
  "key47": "y7pEr4E43NWTxxFKryAuaCJH4NyeiaWnrq958sY4ndTGykqhVeHiXxR1sviPUNBos5u7ynGQh3iex4uGMecaoHM"
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
