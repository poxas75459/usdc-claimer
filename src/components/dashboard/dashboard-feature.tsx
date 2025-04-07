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
    "4nR3LvQyPeHgSTt6t7j5oV18mKk6hi5gyFHiAjW8P8rvhZmKJjT6XGS5FFf9B4CF64kNMg2EfqUqh9vJgKtE2Jjk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aNDqaTUptfzQoZpwRGWiQxr2VyY4PCqP1x9JDMM9qGesmh5WVVWn9RQyj1s4fJBEMhPgwAXeqt7JtJyiUwuAK3b",
  "key1": "2ownVWv7HoFumENfMVTMkHpyCPbpDz9DPj6JbJRfnVKX2zGGqF1kNeNNyPkMeVvyYstv7FF8uhSdzwrgQDSsNwKB",
  "key2": "5ou9oTVHimGeFs63PuRRsm4G2VYP3qPgjJ5su2qdkCPouFBG8jtyoh5wXjhkbKjXsU2Fj9embLqZfdZRH5LpGkjG",
  "key3": "5Rj7wAENoBeCxZNbGzExnCrNMdUk5ZV15AW7upS5SkGesmaGd2driSKCCTUhpmjLcfVYSV7Dkva6F8uAGABxQ6r8",
  "key4": "584AuYM9mTbU6sRU8zjvyueSUwiPkk1QfhrA7U3nbHqbbBAjxAt67aEqaFMyKwK3tVbAZcohDKGyNouDbtPzk396",
  "key5": "3jmLJF9XGVBwMJMUzSDNd1kmxG4MxA5UBdA83fM11J5qYKGEtrUTsDWkFY3AoeAVC8DbCWYYMNH5crX85MfLZ4dt",
  "key6": "63r7Feta2cSaKygUucfwyDKuJTvU2GY7PLpWEhNF834YxmbBkaz5a532hk4eWqub3kF9n2JHwUXgW463tpd4dg4K",
  "key7": "4cCt7HHwY3GNHkYNcPQTaEbFzmqWCbaKBqLzGFhByfAoNn8RmVn23FdvcVpxh89fQXgdSLTVzLFwJBbFSNcmwuvv",
  "key8": "3qrutGay78yrbp1hhqmbGdEuEf9BUd2SnQyB7FGAdhv12RMPCxtQYsH1x2MTKnMTTUb6v9Uuq3u7RpGRyKvdfvdL",
  "key9": "2nuJG5qDYAANpS51uUdTvLqGN6N9SbVdkkdNYChntV7G4DcnyjcqKfzP2qggu5o3uEahQULeck9yXB1CukRg3qGw",
  "key10": "3jy4Qj5F7ZUPRhEUYW6r1nqTRGi7bSu818keCbMXSQaLukhgUBnWAm6RPKjSNd7oLVbHCzPPbsbEiFw8dbVGN4gL",
  "key11": "2Fwhr5BPxtdFTDvu1BHMFusnMmUMbUAzzVjjDt2emTvUr4okKRsvrhoEr8kEQaaaenHtE9MqRGwjjesit2sqzZpD",
  "key12": "4UqTVrs67AVAFb3PRrcSDQ4H99R9qMwEBdEdLDUtMa3vA55bH2jt8rNm3tnFmBMVxVJ7cFySrhKrGKnuQPyU481P",
  "key13": "38vqhNgDP1FvHNT5VRLMQpHKCMnnzRfCsnbnH5dMRfEi33Qt8zW4CLyHvrD6wf5ttXFYyk2xAHdqPEiJ5MxLku3q",
  "key14": "3ggR33i65LK7ChS9vvZ6JgxVP6WgvioHGhcH65DKhJscrV1fgNYokMuH9KvYZ2nbKZbM6tGrMNxoyvPpECKBiRBX",
  "key15": "28R1zM4Kka6kgF7feYcVPfRD8UBjh8aGiYWpEyutvpNfQSUn1YbvRSfPeNxKXgnm6aSxyK61Rzya1pL1sCfoawiJ",
  "key16": "319F8BaBxY5uuy7rpytzADCdGHmoFSzPCnVTsek7wKbfSPLagwqweSRT5QpN7tQXHX6BRzKCwfgu6BSN8dB7ytGL",
  "key17": "4tZzU6hi8drRcbz15AbMaTQDakmXveYdCpkdpfrDSogc19egNvtQfzKoHm29XcRxBjw8sWoiwuQ3SVzrr8s1jfCu",
  "key18": "JfiGcDmMsHHwFF8NZu2tjAtfZxemjKYdsRvgdpA8sStS5NgBfAdj8hafYq3j4bU5V1JYXDv3qUeqCjz9sQdzmjZ",
  "key19": "3dQpEeV6bL6WXXKpZEkdaQyX7yZnrXWTCpcpvEfiFwveumFWfEo2L2j694rrQJbqRCBSqx4GmUWcBqmZtbv1HzNp",
  "key20": "3jXvREcmtLaL7ppYgeFaqQkfVpsj1ZWrzzbMnEVmCZZYuDTLHu9bP7H9LPQ7H67jcRaQ2Qthhz6GkyYN5o9EqPqt",
  "key21": "onceTKw5ikoC4bikRfaPESotXvqqk7BXPW2cisC3eCX9v4j7tphnnBzz5u3F4dBnRv5W6CchqSaQGAqehcY6HN9",
  "key22": "gBGWkkhAF7e2eb4NQVFxzCN4WteY6oEBW8nyyNoUnYAH1xmuVQdyzZ9wbpVbZsRen5awShzL15x7whZQD1bFaJE",
  "key23": "5zSYcRp14ZAx4bV4B6CZwmnnusGHErx7Puhcm2pQBgp5Hc7mtv8zpcKtUXM1GqREMehFD2DJrwqytTATqkGT7FNg",
  "key24": "3UmpKnNGGnExyCzgDU8Y7EwyTnqRSoLbt8tF7vPqvq6VBtWQEGnzUdTwYwyn46QgxFQA7vyNvihPEJGM9Jtm3ugs",
  "key25": "5d4trHpgjBidEyBpGajNTwzgphjsc9ya5Qrzf231gAchs4KNbXhnLoe81DJKyP4FxQR3fvkP8DAMzsaNVqiXWFao",
  "key26": "64rhX3gUcQmEu4hwymRVmyWPhFzbFkPStuTcLSkVpGN1hY1WJBn2kiWAp58QFXLTJyix644fW9ue1jL9JsckQTRm",
  "key27": "3fawDc8kpWDsRjb3XojU526rqTXhz9wjjkBDgcey5Vmg5nkCZUdfaNHvNnXdBrPMWsd91ronM157e9ckSZ4TcgH6",
  "key28": "4ggn2ML4hHc4KzCYHVyRyzZVXWqScYvhXTL2DBWPuKwHdFYVndfZ3Gam9hEQTZxyjZQXzXB1N7y9NajrfSKHT6d2",
  "key29": "4hmhvbC79CT2RyoWdX5z3FESrmfKAzoGsuvT4ofppeMfu1zo7SD3aZW3iX1f2GvLK7jMkT2YKjpXz6SJUyu5WMMX",
  "key30": "nDehueLTbbF3bDW2WjLQgbw1Lgbc4pxX7ZdJDXt6WSHHvVWWoqT2hqKaXrVij6ftHK2NsgAAEvqUCEBSmBHC4A7",
  "key31": "63DR8sB5UEBUm81pxDPDnJSoh6PkWezY11bBzTwa8K8js4TAJQMfVkoJh8Uzi4k7fPoDe7wWx8rhhQWAyvzk8FWm",
  "key32": "9Lq9CShvxeLYb6a7fXZPKsbdTcwTGnjtvkcuCDpWysvtYpEaWCxaYBesYyGhP5A6fyLSqHun5RiuDnwaMWmtSoS",
  "key33": "26UWe7iSLLZWAaqJz8XfitDpaCEsj6P6Q1QnF2iSqqrtcfAHQ9DMWThU7m7BdcSGAEf3EyHHniqyh5yPvdnUF3dY",
  "key34": "5V94CugUhXawbv8ovBBSzrr4wrN8pcExmW46oTXg1yXtE4nkZd4cK9GaxUdxH64q9X8eWo32hLsj7rhNBgFDXXKV",
  "key35": "5JEYqdMDi5SLs6s4ZJ43ZXhBmiVbX5b6hUxxn2mEw2vrykzgzaEMZCC8jtLwQyfWz3VPV4fqr5dTzCQygGrNna6X",
  "key36": "kavTX7eL1Ta2njw72pBE19HStjdvE5GC9fE9P2nCyRJQ98AjEvpNKqo7AuRT1dDhcmFFpRsNqhsgEea9hpqDFcc",
  "key37": "gSmMEc95yMtxb9rfZexmj9JHaT4jiuNJuhHzgYF94Vhdjni2UJ5TCATNf4oVLnhWn5k86xW1nc8mBvbEwmA9huH",
  "key38": "5TcehCW2LQY6RQXfMdaXiAsCAmpnFKtB8oAfDXEnnEKpytNmmastYxK3JXwsBVVxPMuJvEPbS64eCebhRQNTa8Lr",
  "key39": "ReLi97RrVnpmza5AtsRUNnQaybLmhB9efC7Ad32vZHbPYsKDp5GywYv8EWNUnLuhJY2ecNa9nXAEQ63NJm4Jagf",
  "key40": "3xHqLDPa3RugndhCYatPrxEHW7stC8y5gLj1kBidHB7ey1jRu1Y8bhQeo6wehcpnfpwSWHaPj5Q1ciUAA1Ved2Yk"
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
