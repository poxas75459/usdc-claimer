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
    "2w56kd9QswMrSAywHcfni4V8SSB2UZjqDGjCMjUjzc8Bx6aK1CZx8U5SniXq5bQT2Z4tb6tfvBDEukco4tUu13d2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uMmTD45BvRJSRoT3BuyYRf8VKM4YsopFcVef4PbhsjMztns15Bb4qNvjuKeT6VhqpScCpzrENSCdeNTj9d4A2ih",
  "key1": "4keB5ZWovT8RCZHGgeSS9e6rDXjmqq6tbecGPtbpZ2tgL1WfmpJXxxQYbXXBvzbKTNz87Xn3uKEgWbW1vSm4x5fs",
  "key2": "3J7HQsRCKD7kxDNsHdnRPoawSJtsKrJNtj4VKbNtfavQGW54qdyQvDtnTHU6XWtwn5fcL7awdVcizz9TA9hanXWU",
  "key3": "2sqbHStz8iA6gipY7CQen7q95Ue5kZtixCMoMkGHfpxVfeQrU2ZHi9LXRBX6roP6fJdZErGu3rw7kQXnyBfRacAN",
  "key4": "5pQCeFF5gBnbPSSBvjBqx5yZVKPv8gbYdZ11TA516NbeEf433av7p9QiVMtGSvLBsyGchP1uXcHebHyVpqvgPftu",
  "key5": "2JtKUQ9eic9GmkatKseKtMoaztHSzZX3KUKmCnRBxxe6LLYNP5UMp51tLFcQKCkmfHFfwLZdH62Fx7mieekryt52",
  "key6": "3Ez6sontMsuvFMGHZ3LbidmKAubYgUAQyzgWFryh8zSy6SNmhCRjYNWyNhibi13gnesTtd3zzMoPi6hNV3EzsdEg",
  "key7": "2PApbKAs3s6eRxyXLLTtYCFTaDdksvfnoFEnNrXtRgLXSZntQtSi9w47RpWrRamKAQE6aEhQTqyp3YGsCMX1jT65",
  "key8": "5Nr3XxB1bwhsNarruWaQj4Cfcq4DMb8ZNWhppkq7g4yxpKfMJQF6UF9Bw22KG7EhcymKJ3B4xmtrzh2yyB9jNtpo",
  "key9": "dg25ydiZV43bDBMxrstYJaMBptJzGJ2GaxHRJ8runMPTzVDWuvDPjt5HtdExm6h6MHzk5PtFyBjeafLF4i49jNz",
  "key10": "5AfwjWJcVXtXquwWyyeXdsAVsrh5vGgnbG25uW3QVeJZAHwsVauM6N3QPnb4KaAYA3kb4y4AZ9p4z3bhfBzUMUg",
  "key11": "63TQUbpgyxJV53YDeUFcwTzBrm3wrzRtiGKZvd598G6Jjr8XCLNKqo1BmqosxCYf1fWHLuKW52agDLpQiQ8nicfw",
  "key12": "4yLR13JwDFK6p3ExAjMVhMgSgPH5nGjrJXZDnkpkFKXQezmp1TbhPb5XphQMbs9dDeP1VmFxXp2UaSQXAVESs9jg",
  "key13": "3jHQXaqN2CHXpzAA8iuDR71AAXjsMj6nqSFjpz7ycJGVPfiqw6HPaWoAMkYxohmGWF1nPmuaJJAuFG3yNGB8rwrT",
  "key14": "4JGfA1vKHAxdqe9no6jaegV325iCd2zopWM9g7fh32R6v61h9aVb81aPK83TwK431bZjVpvS9As7xjWi7ENBjS7N",
  "key15": "qRbxU61qqt4xeUGpL1HN5rjGEkvjhH3sH1wXU8jE1BhZGquXGjB1cf7RDPCbTU89pZCriFdww7RLfWz4qdG3N8L",
  "key16": "5EnRJbTsVJ6dzv3iknFcbbjcxNG8vKtVg6EsCvcASTBjvf8DXSmnAYvXraGbRusDpNpwU5HJrtHjnQrDfs7QvtVx",
  "key17": "3N5WHLFAtniJ4EST6JzsBJPLo9rsQKbLRHeZkvqbjRSCkPq4pToNMbnds6bAQX5cUWfJ8PvSBrQSW6nTUFCPtmbQ",
  "key18": "5gWwJqUVJdbb1R15S8v6L9sbXT9MJQAqBixZfXjgQqAGXMn5hExVt34jXXFkMD2hL5hKh4MiuZqtcHqXnpYg2irr",
  "key19": "3QLXcXg2KEtztxhCk93izNZSDRwcLEMs5Z379nJyt5sfWtfsCxrfef2wogXx5MVvGr6hxrAn876oWMv6UF4HZpej",
  "key20": "3WjDgA4q6Ham9vwvin4Q7fsCzVEqgrPFYuePsUJjEmH9LBkoDABTYzPmXbWV2uTYMcyJJCcY9KQuJQ6GsJsiTNW8",
  "key21": "uTS32sZNpj7YdThNUBZfn4mHR3zvorBi7Du17vYyPCrXfS8Goagqxh96HZVbDeHUhPv9YiNQRfwzXHqW8Y4AbR3",
  "key22": "XMwBZhWiQaHJyoH6uU5xNmG7A8ke7kBisxrLwzUBE6nZ57JaAGFXBrZCSqLJk246PQWs41r61t7e14FGww7hanV",
  "key23": "3GC5GbWiYbciKhZm6xjWCzjZn3Nhq7KCDGrvDoYgxEk77DpagaGqgbKmD17nKV178onWsy5A3Ptv8LdUSXP4EVCm",
  "key24": "3aUbHPoMrKCR9RaFVbb2HQYAKRxpH2PEzqz2SFqtbrEQDxeaweAVV21rUp47ZGw5ARJMLWEGxaz8EZKcz9DqYZSJ",
  "key25": "3W89nrpgua6eUcfFB6jnkxBFhxidS4EhpnUtEWikwLChMKjQHVG5o5KDwVcQLXBXLZTdLRiVWFBiLiRSwm7y1Ry1",
  "key26": "2HypiRp37x6YHorDdCfBQVQNfzChErrtHgrmebVswHgg5hC81SbSdK1VBGkVixz2pPAFVzXqL9tq6Skj3x7wzNjw",
  "key27": "3wVh4mrjKGJaM9yyg2NFBSzQba3fjDancfu5SmgYm6dYfC4CBiRUxw9z9jYMZ5M87LcotwaMZM4x34fv4vhE2Gjq",
  "key28": "3VJjQfVGHxkFEXm6BuEDbfRfz56f3qdqKgTVwN3Xa4DawyP2LfhnR4Tcc4Mo48bDNasFt5AYdZfvQWUvBR2jQkot",
  "key29": "3C5QXdbWBxe1mXZXfDCLaF1DefgJyFq5rs5vsRgTuraSbamzhVByyMyommPCBSrgakivgZkbP6ufZYAHwF1x6B9g",
  "key30": "2Z6TzPxpQJGq7ahYqDGkuR5SKb7iMZBWvMFvbvBde7BnXmi5NxeU61uFpiXZ7BkYDrAdDLHXYXH85435as6CenvW",
  "key31": "3ppB1N3nxngXqeMJ99y5EveMSTWFKhgTGey3UCLKeM8sf41fwHjE5j9JRogDVUXZeB9vdi5u7B7SeaVY9ye9Sb4e",
  "key32": "2g68pnves9kNwWDn6HhrKMJGxmf6342Rgea8VAVCPHfmDCcvKJs1MEi9vRuWRM81BuFzmKkYQgiDP5w3byxgAbX3",
  "key33": "5dGsYH9tKP1itNa1MbzSTSg8M75PBCKo6RdZNNTX6TNH9MKxdKwuXh8FnAHYVPyY3w4kZPAbqz5aVU1QMqCty78K",
  "key34": "35Du5SXPHwStFUpNVTF22ttyqu4v664HY7cp7UekgCuEQfrjmFm6F7pd7GnNcyxnUv31FrN4Tz4vYMT7558KveFX",
  "key35": "29JsvaYtYfP4acJDZPXERcKT2MftgGYvskpDjhe49qBZYD8DwzCnwvspo6mZCoRGGNT8yGkRZJumHdStgd3mURAN",
  "key36": "xj5WJjSJT96H2e1sfgtiyCFCZEz6DvdiXmTTQBb7oZkSMJcqbfV5xUtxs2pRFn6ARAzLUh4ETSmSZJBcmHEA5wA",
  "key37": "59Np1Wnq9R2SFtMgErsedsw5kV3s1dpSmHvQUpxziGhPhiyxjLXWiCQuzPTMo6emYNhcVG7wi3Y5D222kFs5Ji2D",
  "key38": "2jLiARM1jj2ExeKCKZq6WNP2scZLo6nJZebZH9UW25NhXz9hXDFQ9cVYTW4zR4Twt9qQGRB8itMjMhfKbXSqQiPC",
  "key39": "3R6sDdhy6fkdzqFCHA5RKgX9uok7t7TWHmi7Foj55Rmi9CEsby7x8vrCKfdNtRP9PC8KD5aqC5veq2FrGgScEYFT"
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
