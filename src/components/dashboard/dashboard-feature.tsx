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
    "5BDPHNwuRNUeN8UGCYe2LpYJUSagsApWrxVh2FJv6JoCicWBWxKMZz5SydwMYRQvxM41ULeHxFyVfR2GiMHkn3cR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49yWCFKeDFHYFAnqoNfMjqF7u3PjmxQwWg2jBRaZJZN8MuujiFLJx2Ls4DqB6dVRrHkifDs8Y5WyAHT9A1zCyNYv",
  "key1": "vWGhR9icB7sioXUdtPSAHekrwmRfuQJRCYhCkB5VsGQVZ1qDMBZwxxrJnHL7x3PqAjX86jDnNRBAsKRhUAiQdyQ",
  "key2": "5DRMTWw8vcGZBfgdXJb6GAzLhrKmc4MKzXjMZJHDUKGCZT7kx2YgbQzEHCsLKUHzCJYpJEbZLcrW3Qe53QMQ2fRM",
  "key3": "3UYryw2ZD2WC85PpVnLLt2kGGKbqVRBTydT5CNeiyDCrwxCGWdtAvPNjjkDXTLDFr91DtEtJ1AJPXT34KPf5sYzj",
  "key4": "2USscuqvqDXVgkccW3QP2eFbA2jcMb94TNhW4Ur1SGcFvnqawd3wd6Ck4NwkGzzTX9FZJ7DWE4RRJAtf9pjVgafE",
  "key5": "5kzgE8mwzkjftKqfUidJBBEyyKYFLoHohrmJ5iPd8YhLFQuweRg4puCz4kTS56p3E9tDw2vnQmzDDNmWjgoAVbFe",
  "key6": "4vjUrDByFSFU9L2U9JP6D6WEC6NC154pzAHAYsK1KWDfGz9A4NarDLpLJVi2Twsr2DYU5ibGmHiju3HphN7xFVmN",
  "key7": "eWpnqYywQPE2ZZyhNGGHiG9BDTfBLbYzeNT7Rf2p6dJAkxBZBUc3Uj2GP6PMRi7kKycRqBV5NCajEPYz1WP3gtd",
  "key8": "5eHgKxPjbBskEwtmrZeYoYLnWoD1eboV667rAhkbFLK8sGHEftNyUoFkzQQwJpwvYtZqpuSuhzGSoxR37xy1RMjK",
  "key9": "4YosUwmH8uXUPSG5XQCS6EUBcNCKWNHoR6LZsqW3YsmNSJN6BY5SPihqw75Nfe567E7zUaHrCUBxL1sVpibdSiAt",
  "key10": "2U2aqjtcgy3zufgtCxAboiuuKj9cwp7CEQfzJPA6jbw8o6z1qNj6nL4Hq958kmqjBvKu3rsdS7gsBhzDzVfpFbib",
  "key11": "4N4EUF3bgWuiq8fC6vLdSqXfnSxsYD9VHCWD1w1Rm8sDMHKHCDJZ44RdVkfSw7cVh2bDnfs3X2szycr6bMUUn7U6",
  "key12": "5SYjJa9PgSecZZrTXcUoc6guF1HKDR9pTbRVgz6jYPaECdHH4a5WbZZ9EbdjRMnjCKmAvGuMbTEpGhn7oxjffK2",
  "key13": "446xZ1MDTSa7boSZJStq7T3UfnsoQanT84m4NjGz64GhWHAdKVbGsoUfzMnFgVeYVyYepHj9sux1je2DQkXKb4z",
  "key14": "5BcHyr42uU84ZtDWL5EpksDxJsufKPAso65LShoJwFBBiXL2VRjGJgi8dzcuosjTtHfG74ELTbpZz2GWRPHc2XA",
  "key15": "v4ar3GT6MZLNBjKBZG8BPhsWkMmz5G3is8GX1dLNxeW7vpfBsFp9RM7L5p4nPftqPaLyor953r7UFWcymEX9g9k",
  "key16": "5WPHndwvN8kAqEmqL6dF5ZUdKbm9S18r7hVx9vchxgPSrtZrWkH1wpAERrLhKhthYWCh5LAtAyX56zdVgzQcHNsi",
  "key17": "4jHfUpCQqo14kZpnNwmhAUmFUH44nti67dJfAybcXojPmr6QPfnpxbryTcfBqFHjpMF2GugZTLsa13CECMXaqskf",
  "key18": "2QWivgjM6q9nChanxkYNT8LttUHCGFg5MXqf7byLRvUTskbCNVN6sibWNsnMMFyt5JtQ7F47aYMMcCpv6nuWuY7U",
  "key19": "4ogzUMNUTDGt59jaRJW6838dDpvXYqrHk192x8C4kF7dEL3NF6DLnKnJPxJk6koDh48DQo5zrM6HcUyR1xweM5tA",
  "key20": "2HrfK4rE6wtT3KzfEm7wN5ZupKFzqkeo3XHeHUCqU8Xfr9stkZyHtNxAXGipn22KEyqGoVx6WfQJhJ7Qd7ykdMG6",
  "key21": "5VUBULdUjvFd7xN55xEkqtc2QXWChg8fGEPfymdYq81oJbYSRdL6geprCDftT1sJF2McmVmCWtJP15qo4Pzax8rC",
  "key22": "2zPPbZEq8mm5c8y26VURnULexMq2PacsKuBDoSxKBDPKQop8ToGbvuSJSkcUYWEV8qXa4DAHC4iS8pZQrnPFuBDt",
  "key23": "2mBxS84F889J9cHTSY4WdLKC2aJzWR8e6DHnu2Apvou6VLKmXYHDeh4RvxiyBQmeFBW3A2RoETaarQBGyxtznK46",
  "key24": "3hoHzsGHBBTEpU2LPoa4sMj2xTUsWC5fEcpYdCj66Ji2oreP3mLoMxg9syHHP57Km1jKZzn9nmHFjEjA3dGMkHGu",
  "key25": "5gsWMdHNPBiKa4jB5YVzCx6XrgZTgnzYwCaCFFX5rTwkM21ybsHpwqMQ169AeshBpauaS81gZMt68s6E5bfby7kF",
  "key26": "5y9JG4oxnUu1MuFUzh9BeqW5ruYwUywfHRAoMVCqnKfBrjZjor6XJFg1PeYYcqKUTtsKfQB5ZUG13xXj5W5Jms5G",
  "key27": "3dZBR41zgSYUKdaYuKrgC2tRG36wxQcwk28Fb9fCxmLcEqxf7U3CVz5gczNbxBHRPYViLuFert974jn3fhfiSLuw",
  "key28": "NdNBg8LbeitUe7R8KuCfomxsnHQM78arZXzkVKEaduaUxYeXZKSFazr2TsdZtorYh4MhYAJYZqwXRtwBCnkxvce",
  "key29": "3e3GKefmXiTe9hH1YLaRSv6gsVrggA9Njvsnu7g86YxY26BbPjKWjKr433X8NJhZHkF6QrXKgo4MZJkRAiTJYGxE",
  "key30": "5Kwe5SMx2w69hkHcrW5wvaP76sR5Topcj4ENd9Dn85J7TCWT4n8iRDessJtNY5ZkMYkQcjqZsnjhrigV2Ug8M9nu",
  "key31": "5aKAMmbR6jJzju79nVuNnYAzJPuQM4KfATx1nBp82eCPMduMhR59wpgHRNR8dL3Jc6KWbuMSRGq4vq9dhjyH6VQo",
  "key32": "5uFj3geSqtqtLtY8HFfykSwxFVXzeQs7KcFbFqv51fsKkBVwsLreUpVZ3kDXbpL6uJ1jYbj6DyFPc9Jtt5qWhUDr",
  "key33": "7spxaZGvg2vK8ZgES1GQXkYGq7eWeSbXzfFcbg61k1J3EHSZQEEUPaRjgHHH4kiUP1Lcjgb1xGqPK3rYSLTZ8dF",
  "key34": "4FmWq1jMLz3fn7g3ELsTSgM9QieZawuujiPNMF8MyMfEXQGHqtPAP7cFvvbxBxXjggj7QvGbRUZMGYq4X9LbN45x",
  "key35": "uUiHYVfYs9aaL1qTqGzfj9bHxUUZ7xaKNbDEaySCstSdmQtWrEz1UL3FzK9WAtfafGYoXUifx2AooLxiJaLVcmf",
  "key36": "2gzrxLNHnseJzaSX17GU6EcNZiRqD6wZnpwZG2BcFjpVUSgMkNeUvQiu9gFo57qqk9RdZfycC4vwxkvx6XGdwyqb",
  "key37": "fSWexKv1rdEsxs7cMvZ11rWX6ewX6GC8NBAhoTYWNs1tNEXLdfeeMzYKt5xZzwvofrDqGKS1QmrJLEYEc2cdxZZ",
  "key38": "5WyVJYJ89iRQ1SSZE2UZWNzBm4UdhoUTyfu5MFFeSs8hPzMkxtTySUBHskYfzdVbp7JcAhYvvW5HrETqggQVbr6W",
  "key39": "4Ye6AJqtKJak69KX1qA3Ka6GHsJ3LmF5zmcULpCdYUUEtDHgkn2HZckWk72a1ouK6bxpuDwD3Fqr8DTgcoHnQDAX",
  "key40": "5ECue5PYJ5Pc2e8JhxtToGEDfvNuRAAhXo4EZTG61RKYTBV4wZ44pSxsX3Dfqbx3e88pwviiaujDhtL72GY1SmZD",
  "key41": "Mwa5iD84wVeyqFPi6uwrZ6MMHnTqYABHDHhdTbqPhrSXhN3wFmGbVQiWfRShb2xWUke9qbCt9sCMzEj7YMRfcNf",
  "key42": "619G37RNxDE4MFfwK1FfM31eQ1EY6FrFPp7hXCM6yPnVZtvEYsshZo1tRYUEfTLfQnupLpqA6auc3zyWbw4srdQB",
  "key43": "3fkvjeByxYMtaNuJsNaYtKuUX5m8QuUg6Bp9fPGUbAHKtmqJHFgiMHgfzn4GYCMxmW6Maxm9aUTWXoTuN12ZAera",
  "key44": "BbdMoJuKv2dqQ7z7i3hervjUtY49wABQ7qdKT58dYGrTXyGP79SDGnvnQP6oNeuw5hCvZ7QWPAxTw8APMXVg1B9",
  "key45": "2qDqaqYbrMtFvA67SR3ZNuGFKVK5v1HyXQvaJ8PmGiDdiLgkHe25rcF7vLgX9iC3VVWqqFqRfJbtNR688uN9XJ6C",
  "key46": "2seEbuwfW6fTQNwg3LadSRzxA9tebBPtq8HWrSw28W6rD74kwPFydgy7xhxCeRKQYwEtmuW4gqyEQXT3KSDoDxx6",
  "key47": "3bQnWaEzNqYjHjxkKiwi7ANgMsUNPjYFYPgAPVPFuuAKVaPhN1Ye99NRcMfgM4REz9eurdSRh1AZyRXTypARCDaS",
  "key48": "2CBeEzDt17PaGBRzN5XMHArHjVefhGJcsVYqQi6GhyC5j5f3yqh6v5F37UJJK5r8MqehFBmNksfUd3cChUx6aefp"
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
