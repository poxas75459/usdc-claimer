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
    "4DpxP8VisuZUL7qugWeshLTYn5muYidHUPKqCTj1mEzjnVjR8NZK2L4qGGcY6uRMNSDf5MXitcDGnHbF5AwcRPSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cxUVTr5c5MFY93CF1dGyqPcMskDXFNhuaeswPWnEDG1MqrQsA2khhdt6JKG484wdFWxdyc6FAdFaRjfHn4sJo2e",
  "key1": "32T5khYKTxsVyg8VLvJweqoBrXZP9hqM2mcYYwBDzgYEV4tgiFL9Dp5ZEoK7QHC7xNdZSgJedZHVZQyywPWVwTDj",
  "key2": "3WA5ibnCNgixL12uCYkkDaKhTaLEgQPj2jeccvCmgWdVvu2wKq48SdkhAMZ3Yt95GKZ6DWSeVbAJEqut3bBkg5io",
  "key3": "4rHJ7aF1zFdyD88LnDhHzYihSKv5GHKs8wV31mQKoH39DjrehWYASvW4GwUcMRrvT6ABFYv7z7XhtL5yaLLKSKYk",
  "key4": "66BmsjtvQCJnoAx7tMuW3SAyPwB9SfDrE7zSGDDGBtTAHNgiZF5UwpxhCtdAZR8iNn9AzNwpgKoFz9iPn63WUdJ3",
  "key5": "3MrvSurqDELdTzmguwtiqBPhaSkj3rDDsUK1o634peZwADArfgR1EjFWxK5BuGpbEsauNxtEAcDskX9evq5GQkTw",
  "key6": "5RwS7ccYjWLfFjwLt1wDWPorDuSiseQSuQtNqXoXVwyTom4EdEUHUutigoS1VvVkf15VhC3Q47bnp9ZNmDx5Geb9",
  "key7": "5vMgqoyTNJf3NRRt3kipP3VrunWw5UFg88C3RLk76hy7QWqEjSjDLLsKCaGpctkNLturYAnPvk92mDLeDZCv7TG8",
  "key8": "789YymdAb1txdrezSShEFAVWpfA7cvscpNm2cxMAuYqu3vLKvZnNj6JF7NE27D18Fvtxy1eaKAqb7LwhocW9ZiD",
  "key9": "4iDdpsG3wx7dgkGfwhhH6RNK9YQNTidARzYhDEyMatrJnFNY7BcY2Qhru7t2gwg6CsJY9JcE9uEARueynf4c7ri9",
  "key10": "12A5dguCXpqNMzMC46uzydkVL3qxpLz21bAxChd8imKZojNo8GnNQqWfBGdX23cqAQS2CsWicJvhd77YCwzWBc5b",
  "key11": "mcRnJMrxvE6swBuDxARwZdoynFtoD7xguTkm7VS86d6yUqUGvM19V5pR4PsLiSkZiu9LFjHxeENNBAtfY6dkaFG",
  "key12": "5nzSTKZQKMBMEs3Rh7TFXTi6o4jYd3TXTpXuUJaX1oaAGRBw4dvwWgajqj3m86w14CP9gsSWo94ZwB3Psmo7XCws",
  "key13": "53psT114Z39aKRXXYtrtoAVkac5g9eWfw6Amxc8NPWh4KjRD7t8f6eMrznFihTWHzHoRHHRR28QySMHwA3dUs5VA",
  "key14": "5EonK9mMx1j6WaHx9AbDQHE8TCQmMkFVQk35MQ3dTYA8RLK8xQ3jdAcB5g7j7Rn1GHr15aCXC5tAqgjE6PwzfNwF",
  "key15": "C5cpKWeVk1NW1s9PcGdUDe1oUFBwon9xKTW9VYazBg3Qgny5QoA2f447zG6JrZwy6wxsi8jqWdvJKJzqTmeGpC4",
  "key16": "3vke7sAQbsMKz5KiGmKwkmHAauaiFVpqshZXYDi1Sy9kvBagdogo8GvZWgdU15GkV1qR1GRmqcEMyqYhTnou8WhQ",
  "key17": "5CyFGnYLMTChasu38MibFRYfy8HMb55XwBfA5eU1JJuzc6PRb9Z4CJmk3L7LqLqdGnSYwc2CrSVA5CbHm4tYB6Vo",
  "key18": "5FfwihyKHSfvtcp1JTC4M9gtYgDFkeSckyy3gguDrADJetXR7eNkdCUHdRpmisNvu5M4LYpsaa29vnKae5zKFvkD",
  "key19": "5tGCxKBcGQmEDufRrHKyAyMSu9GEfKZMP8uDUQWqP4K8d3eAvhCrLzvDLAYu5PboqP3ptPLiw9KXSXtPSs7dA9H8",
  "key20": "2iqGQX2zeBTHcC3xqwxkfsVnyQCfRj3Ajmmjtov6EV5WpCHokwVchF2MAgRvdE2NiP2tMa5bfMfkfoRYdEUM8Wkc",
  "key21": "5ypW4QrinnwspfZJ5gJjVjFLG61PWG4S6Neh1AfZa9c7Q2uBXVQeaBNCgYbQ1ttzfnXriStad4Mn9NBT84eP3MGs",
  "key22": "3CXRpMabyUD4GpqTifHU8s1cSqpc5afpZmsDQ1ySwz4hWz51C72xuKFswxniU2cC8N68VbHUxNc2pUHCsCZqh117",
  "key23": "3vU1N11Q41jCR86A8Wu4QRHx7L9PvtYn5DTZWdTrDBM25SpJoqV61a5MEzh6cqsDPW4r12vtJjzcsRbmPMVdMrbA",
  "key24": "E7zTHqP2nUwFf6F1YFAHngk4SpxJTJbfVVjNvNAkWiUH6PgzzXw9Bktrfvjy9JiXUutuHZTpJSAiYn6wUWcWhDY",
  "key25": "82Fg7umB46ujKhBghw52aF3Cc8ZSKJL3ahx3RJ9wbbj6tfspKEUmK14zTWZ1w6LCHVbFQVp2i8cMjLXVSFH8U1b",
  "key26": "ARm54kXRNeAtqxZtr3UxC3xGYKjxVUJwkWBTkTkeK9qD9LqPsHY9CQuLf5m3jfpHAX7A53v9PSjG3t1UPjpJCTn",
  "key27": "3ShSdyZeNkHDgnsF4uZUXtFnsRYYtEGoxWQFxyfV3LQjNG4jiGxsnQKghQDcVuv8ZzYxJA9LwARsfAFDzkPUacP8",
  "key28": "3TKFytJWBwNuJE8Ly13mZv8JbfyZmDgdzKWX9MrNNTQ5MmgGQRHKSjDyqBjbaNZE8hkiNxNJzjg15YbexZBPfgc9",
  "key29": "65NR9BuoYJnhtcYYWBQnfdtttwkWRbWUrDNSPoy8KdHfJGDEN6wYZLJCWXjAnodYtL5uTo8bNPbiAUNfiYShRjFE",
  "key30": "4mqgeRC9wJ1p9o1CmNj9h5aWzcSaagr49TJ6b2X7PGBAx7qqeKRRfhxZhoYxx5UtLR8cquZqU34cwLSVKLhBaxi2",
  "key31": "ogsrWPziFGLLoUG9pgszxRWVUp8T4PWgZ1vG1rHw3VyHAch5aFksnaqh48yfmeB3oUm88AG8uovWvfQQrdZHjc3",
  "key32": "3N2QbAs2oYdFxnfRoPCoRkozRRDPUgiRJi7wHJKK4ygGYoevfXvX4mosarzXgohEE8gARWErc7APKbr6NZbWjbK6",
  "key33": "3mF5Nshcv5vrz9gpZqaBeiPDfUFHvFupZiYRvwS8NqGf5e1uATpsY2GQCM2yBQjPptM5Drk5UtEEtYbzKkEBF1wP",
  "key34": "21AArUZLnnvyJfvSaMkLocQHMXbTtRPQ17YhL9G69PVN1WMJqDQY3uwCUsMme4xBsHcYiwCF657VGC7SsP9GJfbd",
  "key35": "3eckQju1m9snVp5M7XGgb5jVvm6Q69zZHbgAyrRwGTtFy47jTk9bxABs4as3an83DVFdxAywdVxwMBWsAQQoxfUA",
  "key36": "3fKgMLBUN17ZCZh7UVsNdYNdGG2PRr3TREjihyy5XcX65kghbxC6jrNraH6Da7R2i678KjmESfdyoriJCndj8wY5",
  "key37": "2n8gxevc7JqgS9k1DTZsSZYJyRzcytUBsDUatEwTwdXDYB2Fzdb6UWHbGH5xbnqsvaHGPyBRZNQAroAz8uPWbDjB",
  "key38": "4H9FUjc26BkN4JMVW6U9ksFx3gm3jNhNnqyocmo5Ub5LtJ5RcVD6bjz2f5VebRy3kskyH1ZFAMnmBNhe5YodiGnB",
  "key39": "2edcsVLg1D3uhMRESirmTZND2yBRTjXZyXwhDRxrdcQtsxLwsk88vKjXeyZ3BYFymyFEbwyJ86xUYHA9DhWBJe9M",
  "key40": "2JjgdvmNfnujAwnrig8zjdscp8DGS52AmcA2fJNHf5ZJSxg2kGSj8srGaBuk71FyGkKZ1jEir8yyBoqiYbGnBmbc",
  "key41": "62bMyEXvhpbCpP2mVGAAmxXufCoWdmkTk3QZoJ9azB7piTLnEGQi8JN9v6j2SGCaB6nhcLEDaxKSUiWbMXeDQWPp",
  "key42": "483MAiHUdQiSAxVvLwVSptTroYH4e1dgNV2y8swgtPsmodvGs8Y6kCCvZWZVkkxMzGApzVZZCLEVdteBqFwSrTqe",
  "key43": "5HrmAGz77MxGL6a8tjGaVLcbVHwTJGFoqKWFru7LvwZZJBoRiVwe2UwRkBk88qV6SnjShhwCP8Fz6PTYjo2kxQs1",
  "key44": "o8APXtCN7WCzB1Y5HJcNoa9UYcz59rzvhy6nHo9jaXZ8qQovNkTmJRAdMZRjuSbwHdFVPCSVs2XXEW8inGxbN2o"
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
