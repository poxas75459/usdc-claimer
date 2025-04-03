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
    "3QNdGiGSuMnKnqXGupk5qR4sX8g8CDcRPXaDbcE475mMZfJWqYfXyN7nfLQss15KvhksBf3zgivGZMRa9HNj2oTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CQCmCuoix3qYucp3VkMUFuG2xxxH8UkiVnm2MA1sm3nxZAegTVZwetC6vpSwfEnKT16udvF87CLuQ9YGwq6RuUA",
  "key1": "2XhyzaAuaSf5kEr217WB5Yt3hGbuiBSMU9K8ZRo7ZMB6Mr8jYbBAJKCEQdegViJXRjqG4ogzvEJXtJxwCwNuBQfm",
  "key2": "2ZnAQ6E3me2iaEo9s6635yvCUjPy9ZeRYAshn2YYkSnkTyUXUtTpzVCkZUzC7Xf25GbvXt4UN4KtZvdt6jMQkwve",
  "key3": "2u4Q5zAzR5FfTQbygFEcSD3jBFXSSXUkjRT1Q9sL7jCkx5zbAMLjaG86NtXqg18yvznUoLxWePYF1Jk22QWRv5Vx",
  "key4": "3W2WFcHCXpxHAgfhPEvnEFnaz8b5fn9BnQryFy9XvZvA7CQ8JDwr4hX3iCJB2d8bqhC9afrwUtm1FkzMVh4qBEzo",
  "key5": "2avcKMCyXQRn92MHXt11ceBr5DWRHKfCe8E5HVR8d9WrPff6p2vbnAuG1TxifMqPxGYX5bJqis8yg2JFXu4YRkBG",
  "key6": "4dWY8XiFV1TxNPp77suDAZUa3yQcp7DSUcooZvYvcdH4G1iQvb6QssXZi2T7qCHqvdJtQyNYX94R9oChxjzGqYhH",
  "key7": "4moFJzPNzxqRySZHzGwp9eXaD2f8UKsaB2Dr4A88iuLrb6Pjbz94u9nPNdWFgc7LTSVE7rLoHnVoNUjxKqd6P6Ho",
  "key8": "46AChojD5yoNL1nmPx4joDUMFdEp7S4sX4yQY1GB3Rfax4be2QMoiZMn5xBgKtrBiWnxVnRG1Yv2J4DpaCfcgkqd",
  "key9": "2jvQC8vDRv5u6tFvCd43t8etAgJWK8kLeAWh9udhYbrbGNRNMsZT4xUZEm9BMihKDntr1MSvzo8e8cgnRXXiy3vW",
  "key10": "2ok1vjEMT5y8W6KFcJTADbBMbaPtrZLYa6T8HAiA2m1PtbEt3JJvvdtuyAHdJ3S5pgXPD3xWWiWLPWmXwfXZhKb4",
  "key11": "3erqet3xmCpWA2YkcwN8sVaLpWAC1jr7p3o5kkX6DnHZSaLfaoiitSbbRqLGjUYuvxBfgGFjfpDucqEvKnerd9p4",
  "key12": "4NrNwgW6PUqFxmC7kYpcTrFM5cASDR2RXJUXAtraHiHuTzUGM7P64mFjrdxt12kkBZoHwdaf69TzhBCyr1r2QwFu",
  "key13": "4rLNqaqgywK7kfSYfsFAVVLxT9VUjBdwcEa7ZsGGryqNddoDexY52wokfUCCAY4LEP2mE676w3kJuS8L2Y1wwzzN",
  "key14": "3xPEgFGKTLgYwL5gu8KF5nzM23USKduxKaJWWSNX8aVPCQPXjwKbVufGaWxLStLFZDMUWZb97kZF8XdWg3K3oKGq",
  "key15": "5uJDWvvy9mAwFG2CTQomxHFCA1psHegFbg949qGCdbk3VAuHencraqC6sH7NDqfqWm37fuvHPpy18X1FmmWwDj8V",
  "key16": "4GxyziUcXDMRM81TDwzWZtH5MchD7CVzZVq32zPKQZbtiwgywFhFByJzaSX3VFLXwgzApKoFnGydPcKFUrk56geo",
  "key17": "2Kw1omag9py7wXukzfravfGZfG7Y8Rk5rAgk5CB2FnhHkw1Eue6ZGKbSH9TKqRqq9jWrpKGWdG6Khg94LqitdTnF",
  "key18": "5x8uGKY9b2TjxSVQgsfYym6gJV8KMA5MdDxDdVyUoZtQtkpMzJW3s8PHajbwj4PG4HkzufNGQHGh9UUvXqomkUJ4",
  "key19": "3JoB6fWRyvuMGTrGKvBkkaeFkoEN18NoSdpzPJYR7izWbEwE1MyG9H51FHL98E378nYmVK8JH9mf9q9JCRCjKVUH",
  "key20": "5kLmdccJxj8z9hVehyH86BDnGa12gGRmNYZWqA6wB7QxjJADeqP24VoiLUoQ3TAceTo495QoDhv6e9VyWfxwkKX7",
  "key21": "MNPPsHtbp42WeJd1e8FVZFDd89zcspJeTtph8W3uLFPWWYGAwM56VfWBr4cqkxHckrJ6MW7m3MtaSmbjYSKjbRh",
  "key22": "3aukPGJaKY5xbkx2BMFzUFihgeq9X9HFNTRMib16xamwSc4mknHZ1zqtQaTZpw2sD5wXxWggNQvbD6nBAbmH4N7i",
  "key23": "4b4c5YdfEWvSf1iHAdeL7A1Es4nerQxFVG4tqgjsy8igVwH4akdyBjnmzYXF9rdwbwW4RHqyw9baKXU3xGWa51fv",
  "key24": "61UDgRaK41hCsDViEvFJqnYNwx7QXyYQ1Vo2hjyE7UPUezKZG6a6YABek6BPdbcsknRhUr29VYUXKMCCuQpSp7rd",
  "key25": "3uP6wfivXodjfUbQApcaknkSUgbtK6bocor3VY68fS5tjfdWRLjbSPvYLEQqTfLcgioDN7myA6xNF6LDwgz293Jy",
  "key26": "3xhKp727JfrhjMCTNsG2EUpjWsB397K4YdKzervC3TR9WY5Q824YzkjXGQ9fPyQ2UMPaNHRbqGxGTPuHrtWdxaFU",
  "key27": "4puzmkSdYYYYhndmmCMuCSyzPppqbAyXWP53UBUkwHzkwrHNUHnDdk8w17f9YdNVns5kUhyg2JXMhiPrvJ5ysnwo",
  "key28": "4ZcyuQEXS9tbe7sMN3BgpMx7azYhUdUJG6Vqg7Gi2SAnm1vbfMe9YQMZUxpjPdMEoH2sBR1NeVgw7UWkpXppok9h",
  "key29": "3N3td8qUVbQidotK86frtKqh2HBHb3b2apCPzvRAwPxsHS7R6zoiDhYcuGXni59SQyepStu3WrR2g86rtT1GkfC7",
  "key30": "aBXcu4huB7o7GAtF2PVRFQkeVb9VEXrQLMaZyg1wLksnXUnniLGghAe17VedDejnP9kEBDCkFddgKokgdqvP1Xu",
  "key31": "5auJv4ozA6pWf1EFGvJkzFspnjnk8ga7fdrXSFuyXj9HoNY7g72Jcn8dydRBcxEYqgKGfPirc9K42zB161kt7Gst",
  "key32": "2B4V65xSS9M5Ao56SnqMxbNoiYMigqa6sTAgKAtHdmXG4rdAzKVZFfaddoVd6Rh4nRZmu1WFHDjoS3tWEcEqAfde",
  "key33": "piVb5XVAQq9XBQX1mNqTZ7ZRqxpmm3n9kbvdpZeWp9UsnJanjX845rhBtGGRiVLSwRhxvbxH4MVGgtUg1T6Yf6D",
  "key34": "5pMCETH4Bjhp2ivr8sjM7vnm9rLuRQiZJyAmQAmWqftgCZs9zKRrxbguAg4tAceMt1mxyCR8N7Q7gS61ZN17jZoH",
  "key35": "4dz8a97MXnN2FmPfR2XsAzNP7RS5S3bdasnJnaQP73YX4W1ZZh8jJMdrKyj1yjPE4g5gpC9Vrc8hQmUadKBy5B8X",
  "key36": "626B28N8Ua2tYfNxtCFQHr8sCYYVww9PYRTmxo6br6fH9XA8bVTeLdMPqz9PeZXW4kb8yrQe1vwHvz6ePjhdYCH2",
  "key37": "3dE6WQynTUAhTPMEjerxzkk7ETyz5Tq36soFnxz8TGmMPp1JcGL6vUftTQmacPVDTe8rKuv1RZAXHLuUQYiJ1KR6",
  "key38": "3HADHAEvn7nfWzSxqW4eUNuHPeniWkFriYRx2saKDJYHMxPjh7y9wCjMNgHuX2MqYLqUppdYWfcjAEn4Tqr9LqJF",
  "key39": "2jAsH5GeVoKdEpzKxR8WgxYbVbjgep38i2QuJrpyqZ84MqiLQZB6LWuaGvyCCoGkS9u6VvGQ5sLMVeVaNBM3FLtN",
  "key40": "3GpmUQtFCjrNBR4ghBtfedwYS6JEmHMXmXeUWDRzJBxqbKdTuQcpeyTsng528kgryjTmQfmmYP5gUAhEKRPFKgAY",
  "key41": "2LFWhxdaJJuyCJGTjcB7LKUGjba2T37P3YhSsaNXyf2urrPY3rU3tSjU8AyUjmY57iZ1GcoVLwj66LVtnaQeCNLj",
  "key42": "5x6ixcPmjGdGd18y2gQL27nmNozZGXFpFdd2qn8SKwYmceQJX2aXLcVnmoEkcBYQ9gT2h1dAG2xM9HFPf1KA6Lmq",
  "key43": "2PwJCV7pVktujDfLz495tneCEGTdzzF2DUtKfNL4ckEQuMHpbiM9mBaWhTGqz4tvnse75D7Ef3LQUNDwfGWMQd4P",
  "key44": "648dyDocrSeHKR2T4wAgBaEkrmE4FUwieHuDPeF3SYrL9gEW9UQr9xwsj4NcLGcp7A2te99LYksKWAcACAM8JYYS",
  "key45": "4T886XnMkFjyQsWnK9EajNxag2ZFbtegYeT3N8rH3DL8mrmav2xikoSc1as6TbRrbg7MDES9f1HSvXLvw6hMDWFH",
  "key46": "4MT1yz5CJtT7jow7mj9NAAKn5JyzpkaLMgLHK8vzAhXb5veUzrP1iirbcHbVmRyycrBC5exjSfpLSLMfSrZmimRV",
  "key47": "4vceib4hwJt9TJ4ycjikmXBTYKfbRgQxLwsbqnMZZLfSBjAdtVemgkwWTbFcWxhi7g5bzxnfHYfLq6R57nKWwVAp",
  "key48": "3E7rXTWrCWD8bR1M6494LakZGBMKKS7oHZ2JGViSiXaWjrBafYYNQgRiLJYBg2MCjqUtCATjzN4mWcpyrRtvnc8B",
  "key49": "H822VvKZ5UEULr4MHH1UgaAmkcW2UpND4EPBjSd1pj1nvb5ayaZdYkpJ4oDVuc6oKM8W1gwAAyBarfoUkF9SooH"
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
