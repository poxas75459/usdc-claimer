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
    "4DAZ7T3j564x7XgDFBmB2bSeDSfsPsWMN3NPavbzVENoa9u8nAdW14H2n5ammSKC1f29F7ukqksKWzLY8U9mhswn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34exQzdv7KFDRQZVqe9dtJQXadw8VAVw5ncEdntmpnEbbRb3oLwkebiRoWXqghY3gkPnrJxA4DoHGSCh5hDgFp4Y",
  "key1": "2eMDakC6Uga4voiygrFSaLJaays2pTzP9y7R7UpJ6KkbdosZk3HFne6Ly3iKQqWahLPBLbA7AEgQoTF97FdmU4XH",
  "key2": "2NkcRXJrovzaUVdteac9G6PxJYF6JSaF5v6LUenkDzAwnzAiLDDQ18PJfisUihVKGdP9WNJumhRtQQvnaQA5rKMK",
  "key3": "4cz4zJ7ZJ9GhrgvzmTzRmeKRHFirG86cbnxz9CW3WAio9bacwrkXXMGBjqNBZAWsVGHB2xJXxCrn3gHUq6EqwjF3",
  "key4": "52UDvgEnYi7NPBU2chCmR7SoS6P7PWryJzPLoBcPhSr57NdQUUvZr3S2dwpB2fARCAykfqcr7epxCkhrJaNNLGaH",
  "key5": "Xz3BBwQPjzSAbg7BKSLmEoGnfnFnpscU2BuTbbbPC92b6c3GBXQxQGTRQH6yyhE5g5HKAvBV5nH2K1rAG4jXVps",
  "key6": "5qrEqeVJ5fscdMCAm8d9C1TPgcBy6hgVfPyjW26zpEHSh5q3XQVyLmsxzA1ovdurcc9VDWvJgS2f8piZBhhvXqEA",
  "key7": "5pFQvZZmjhKYiHCtXXLUxdSp9FZLyNuKM4URK7DSjsfwwWijeEA4Gjo5K7754rtZP7qX6AcnTrc8f4BhQFxFo67T",
  "key8": "2jApP4PrzMUhwH7rYX9xcGoDpeSrQxEbg1NVAQ1v2GkYTiVixChHT4615kekjb6nLrN5uP17t55HYZoJp8gK7bB",
  "key9": "2iB2r5ho5G8JvHVyW4pgAZcdZoKYMgt8H5rS2uJC5TcQoRqhJbFACUMMziGgK8x2ZLFY7mmcXe2beeHuyT4R5Qkp",
  "key10": "36ZHFcXcuoye9Wma9q8reEYTz4HDKoD52LYqJjX9ii75FFqM1qfJNDr43jVyhY16qYyfb51x4z9yX5b53FiZZnz",
  "key11": "2Aj1G9BCWPeuZnLeSZ3rPJzEkvU3rmDj89AYFKGUe3Hd1SCN63Yrp41Wka5ZtRnZwWRhTNWGj4gK2zK8LunStDF4",
  "key12": "4SvaVMxCdhdxRi1Z2yzJZD5SftTCzKxfdmnRokHTnSeibJCLyz1AkYcbqHmqUWPxxYms3GsNMqfxUffj2KKvCMUJ",
  "key13": "5ycrwp1z7DksnnVWVH3B76Lm4n3uSRqw1Qw6eFNzej9HtktkWeyk6YmEFJyxHByp2PBCngqdnVevQJEWqzg8Yb1b",
  "key14": "4WvYnhGTyK3P1xo9h48gteA33zk9SGw1QDn1AEto7yUJAFHd94DCkTRDx1Wnao3vYmwd21ugehmF9NU8z1ab6UFn",
  "key15": "2fiRHaf2YAxkyspmKusHUnZBmgUsHT87twkPd7jbPRAcj5PxwnxMKqE3UL77Sp9g4ZCuy8WAZarWL6HyFSakHy3h",
  "key16": "AofhJzLUMwoxu2j4N6ENjE4DZvRfN8Fyim5TaDLW3seTTiZSCs89YqaLo2jqWb9c3upJ1vPBGJTHBP4cvxqbaAu",
  "key17": "3DBQTCTCxdH2hBMwiQz8w5aEuxNjmEkhmHs8n8FYUne3QHfVHUm5VaUhqnijUrcNDHjTnA289zSDbjKhjuccNvbh",
  "key18": "4877E6iUdqBEwsD61b6pq8vp4iQDPvcSdF3UiQc6ADACBhG9AWmhKK4Ahgxyc7SnTcUDtvFWsAYpBUY9kuPYUxUS",
  "key19": "282e3bFkqnF2EjZuD3fJNQZHbRyVMn9LrUh4LgHKvSeZY6LfZd7res47h1E8MWXVH8SNFmYUCifhKGABE1smvHu8",
  "key20": "VpTxieLhphs5FKpjkGUWdyZs2c9E9QsoZY6rzj73CybmX6a1Qp66hT85mHHQjMxkKLqjyn7Bg8KLUcsk8MMKSr6",
  "key21": "63nsXgBeH4bp9GyMbgDZEMZciCTUJKd72Sr8r2dWy3UBMRTsgUa6rovDKNgcwCKEg81cfCsLaRc5ow65RAadqoZG",
  "key22": "67E2JZnbUpTUoV1iaLCakX4in8XxQrgGNvX9ZB6aEeXJN3fFKNw8kx8xtRnJRgauJLS8fNPU7SCqVrSxPUVT6PRN",
  "key23": "m73L2Un4NKhSNbhRnyYiBxAumy56NrwjCWB1C22BZ9kkysiCDHJ3dRuDTxBpLQQgmmWMJf3vf7CLJ1LeDFmHmM2",
  "key24": "RvXgQd1bh3hdTuaFoBsofytEw4tFCAqbd7bG5RkifRUg3KwxoobzFaGGeKQxbgYu4hMPzHYBzNUFd2TRx7xVmWc",
  "key25": "2gtDeRCrLDRcZbuKagcZVdRCVE5DhzTZ7qV9tfrUh4dHL8WXhLAEx2QLNCZZE93q9e7anuZc28Cbcg9k7LXJJscN",
  "key26": "4k9pawAsPSyQADB4JgepTtTz7t9jKAuyQaTVLFqWckyF2Cm9wWd2AviYwYpLMsvGm2qN3KV6f1L7uCeRHbNbrmBo",
  "key27": "2FPpcKC1CuqEUFeXh5GxXSAEcyW97bU4ec2RYfZWdmHEk34wJ2iKai5irKh6xgm1WtkzrggxtdMjcJ2ZaGmk7FB3",
  "key28": "2u5b1jM9fWviByQA2V6JgAa71jrv4DNx8fVJff3n7v9CSY2GYFibsZU8fTphDF83HtuZHYRkruzfew1AAixnbFQf",
  "key29": "37eSoBbr6o7KH6wi9seVaTC7LsYrUGB7fa5Q2ZdbUUpFWnW6hnd37EKyKkTcLPnedjchdauRUaJQYGcxHwLNkvvb",
  "key30": "Q9ZiKsT2YFkvNFKc6yqSCWD6RXxz6paLz3jSEer9xt4Q7Tufcn59fwiXgNiy7Gue2z9gb51E6MhvCmDyYthRave",
  "key31": "5AgS1TUn4BVNwW2g183GoJWpP2hKrqmYMwurJuFEMJLwAVtbDmFVbyuiYtQTvWHvihH7tiewRWxfb3McoCWzajqp",
  "key32": "316NrPhRtSTEwnH97KirttfQ3LsxJRNNZ89bbARfv6F7WaeeemybZGWENj8SduptySrnsjoLh4nMyJiBGE7PWAEe",
  "key33": "4yCFjh71kviNJY1w27xvA5G37AbU3gz5tmp6mKLsxnvjsgQdzN2LS1iHDTSpHXSAUo2MWv8EeMiBB2NXVQCsPwbX",
  "key34": "4fHrwBjrTfUeByYorZxXWqBGKVu9nH4pez1XxJKzW9K82duynEb1z8Pz2CQKfHbfQwMQgUJiMXdiGtBTmqRjNuLb",
  "key35": "D9Z3NYwysQaQH613EsC1oDZu5fYafq6GoYyWgZY8fgkM2pyGDawD2zU9hYZ69aqS9AQE8fStUuB93GdSW9GYLUc",
  "key36": "4kPYSBYc7yvX4PWhUUfqBtJtUyYctgCEoXaMciMHQv3W41enT28tdJgnYgUvr1MaTXWrzbaFm4n9haqBWHe4AGR",
  "key37": "oVZh3ERzKW3grhhDNQVvHzrUVmxHmpGDrpQtFRF8gkVjo73r1yXTqLbijoCk291ceaQJQf47yNQy7yuYnvPUfSi",
  "key38": "4KPp67b5iXG9eRD87v1bUehE2vcRy2LrLrf8X3AmNBAkGX4KWH2YG8rLqWK9gnS2PxGKa76vW2ehJnEzxGPhKa8y",
  "key39": "3U6eJkHHNMqQfdP1kstbYEw1fkAg2wjgmeabF9LevAZ5sAZq8sV5kNrbjnRGPL4chvz9F1kMLov42P6B3TwQUyVt",
  "key40": "7FmjoeFX27wkERmhdVujfKNzzept6H5JzjTroUgx99JhGeLAZhuqw9NAszavoeKYFkYkptmGXujt94tNXHWNQiG",
  "key41": "3UkRGr5Vwf7nE7aZLCbMSkJuUkMNit6RKkSJ1eSRwVFNM98CfmRqqZzYcmG4CL5gQo1zVqErvsEscYUeg7fWa29K",
  "key42": "64SKJRYUZnBvFijP6xdCJHDWJSvCWds8zd5shLSM8HUiiommSYG6mZHteEVABpH62fFGuWcYQAZTTrVhBj7e3zzJ",
  "key43": "5rzoh6Rxmq7CvqTyWfCE7iMgR3XgfXiT9FsxUuDAXghswpXtdKR9MjgZCoxVwq5HM9aqYfBjv1WGJPV7VurZssXz",
  "key44": "431Y3uhqKg6L9rGgXhBQ8PPWobQCwVY4vz8yapn7Mqb6mPAmgXQYyuPwBt6q4hERmEn2pLKx67cpmBT4PSgLQ4n2",
  "key45": "38wYbGxcYZDfUAfAy1xis9LmHZDjN4gUmGdXp1sncxkhzam7nbSnwZkLPKK6MQFQNd6k3QoiEMoNtLsDX6YH7cJt",
  "key46": "3tyLeTevCAXrckzD9DYLgZNg3U6hLt8mPXnNePVnJJTAnBMkotZ5f52rhPU68gwQgu6W2X8R4oj2sV5CLyckpfoq",
  "key47": "brQkeLwz8GCBArgdUxQHDAEw5g48Ck5NrT1GPQzhwTJiTy535MrF3pzEYoq8cg9Cer4XUiYUPHE214rmYb299J1",
  "key48": "4Eo9ceU39rf5UWmKwUqw8JTefiam9nijtdU4tbvJxj9cB7i4Z2t3CktGUoyM2biigiivvTv9teoqU8LVuuoTiinK",
  "key49": "2cBjWkhQAwniZsa5ajfscf1wS33yDG9UQcCmggNTrjvJvfPt1ae8QbTRixbxoa79iFxzCn8xFownQFpjipasyd9V"
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
