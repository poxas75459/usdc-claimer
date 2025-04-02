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
    "2YJ8Kp4zEFCjYz2Syw35uktjvmXWjG8rXoqhv65Ykx66U9bXsx3onRLcMKnbzBvJY1BjfJckxQRnsCC8RCipUFpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rmsEitBSbR7NbEevJKKYwgHeyihV8tU26f4P2XaVQHjPZkmUD9xKZj6YwuXQGpyBk55YDToEn6D8iFmKau8ATtt",
  "key1": "3iBbGugfUqmGXa1eK9zTKrgsSqayrDG357BRRQvKV6T1gB6YdtuWLGMFTrcWmRsbQ33rbHMH4s6HUJ12VivYyPoL",
  "key2": "3hTMhagdGctZHw7xpQ5appyrLJFXjhpE7k8PL1hawRPZ6Wq9ZHLFsT91W4ur3yc8JtnZ9LKmV2Tvvdb6zF47cbNg",
  "key3": "hjt872wcRvuzsRZbLVKQqf267adjFqqnKLmSDMwiXJcJmo5da3XK5KBwKPJ2sFjymHRmwR38JKvhm3mKkZW9Ggw",
  "key4": "KovUUz8NVHVtUFVcjH3upNyyaKcAdHaEYAtYuwKFoAN9PZufg3HzhNuqfmckEZBaF57H1g4LrSZdAewUzxPQsrf",
  "key5": "j5V6BunnH3WMRwwjZ6VBLuRWE91ZTTfEPcxPhgwY1Z6LCoFddBtvV1LQizyPRrf2Yz7mo3Z8YPmkjsNKfdtUQam",
  "key6": "5dyR8P6LjTXSJETE6N1HGuhCbF727XgzDpRwKCimk5dqfPVnN2b1LdUeZERBKCAtTcBe4F8nkJQN8S8wyTzZaFsf",
  "key7": "3fekG2ZJ4xwg4tKwFifdGXMjy6cwsx4QGRHwST8Js7AGMnpyzmwnBNjjistjnwt7oYcRJJK8KZJ2HSdtXkHGqKZz",
  "key8": "3xqxt2b9yKUwAyQV2UDrZY3RApFidhbGZN251yoxG2FzsQXFzeCxAinCMJ47ZBG3staLmfswN1xLJp4HRmfSqFbY",
  "key9": "4etmZWjB2XBb7yJQnHbSvx8CoKfHq8vHsqb8GrYk3WqSu3NeoQJQesNCP3pSZgrLizxhhhWazdWYY2jryV6YWdWd",
  "key10": "2kJpC7DcRdCGdDQZAcjzTpbqGYUy7yY85zKuxUR1Evr2qyq5NpVTQ7W1WdnHTsGFrqey4Xb9GHFB8nWh2C3gwUq2",
  "key11": "58okERoTkVBhb8FpHiFjDMkZUA2nJrx7rNfEsRSA76JstJ5UVTV1aJfv6iSa2vKznoT1qxyUzBvdqXmHgUaCjkjP",
  "key12": "5wHzJtJFyxrhpTZSv8N7mT9G7we4VF3zVfuPMhXsui11P3S3uN2JEkDqsby78bdoD1aiKC4rt7DDmWnwzDnstArB",
  "key13": "5nYq5jjZVc6Zr3KrfZhiNmiCkxr4Y8ky28yFBbQctjHX73dfKJQgiXqNWX5EWUjtQCMkKeeTJCD1jDs1WiqiAA5b",
  "key14": "h5o9oyU2uV8hMQNKQur4iToNVdy6B66fiotoWuPQmJQdxWqSyiLDd2UQuRmmZ7a4iuDyrYtK74LrMREv8tMFB4M",
  "key15": "5ULMAQ6zgyFhu5L5MboV7HZWPRLXZY6hB6FQ2q3nboszTPpKUZxyF8KCHAgkrZJKv23nnev86NebUAm9YeMjeVYv",
  "key16": "5BaLqth4zftem6HKbEFVWWV2vVqEzAZCFmTJetWxPAXuzPpFmbR86AUoqXtt6eTzYzcNRFMgQvnBNu363qEUSWFD",
  "key17": "4H6zx5ivkdhWgVNfKbHq68KbMmVmBnFRQkSxfLJcSSLeAeuHFFKGn5j9UpaCXa66nL7Q32c3xXuzjbSz6iLktZsx",
  "key18": "vzPkgopbuYTjT1F2MRTwuG3gP9f4Z5AiepNTGeBXz1RiCn5raxvWcZviBvRqmTCdwhLEunP3sac7dGD9AhC3K8a",
  "key19": "2X1GXLBDVAdGkMXowV6T9jE3K5Sxny7THUXQyhcmm1gi4y2YSPu4e9i289HsbJLSLx7qUyEtCPRrZVE7LGXjqUkN",
  "key20": "s5cr71RfYnyCHkiscM6juyxyr2S5XQ9Xs8zixL7osSMqRSuaFDVqtjz2A2kpPjhStTBkfR71pMuY7fQwLABfXbM",
  "key21": "5wC5VT3xvzS3SfwHWKQoJCR7Y6yppcYyUX4DFcyzna7FMHkVt9Vs2Kjo3NpAGvYL4RQ9cryHkAmBGaocPCfkoF6A",
  "key22": "53jP4Jgp5V9YDKRi4Syq6iEux7AH7dXoeu41kb8Uxg3WAo5GiKAyV8AFJV6ZVvJe6Nf6R6DBvKKfmtPcNxzCpycJ",
  "key23": "438n9CDmCWrSe6iaCgpCisvWxfzzS8DQaVcKJQToArWKpyHrtwzKgTd6TegcZGo9kBYDhVz8kFN3arMjPdKx88aC",
  "key24": "552RaDSJGRKHEknBw7uwX4K1YPzvTD9jwNaNqpsjiMkXfqxnAkM2gRtFT1MGi5WsGwGV3faqp4bZ2svLZMtmxefh",
  "key25": "37nxhEDy96eE1FZXThuKYMaw8AMDKjmgHnFi3Rw6EeeBLsPdCJZDxUY5GG86eMXzVANqTj6xg3FHUcPStb9nF5Zn",
  "key26": "3nkg7FAcPecLUUG5e9hJYWkhAK2N2ZWqW8mhkmQC5aCVLS7cyAkcMosPkwFDcesZ3RkC18Z1J1Wfsx3QnhigvzKH",
  "key27": "3X7BpPxqHJyM9cucMyoygdysMXgB24Ebe82ZiEQhxjd2VsFoJfj79Rw1LHwxSbiaqyHJaErx1p7M9Wi8QiUSCVL6",
  "key28": "2eTjFLVj7UQS9DLxisYk99sARiNN7RT4FwwxucY6Xga2ewyAJc3eLNPFk2ntQmXErQ3mzAQKoFj9GiEjSgto1Swx",
  "key29": "3SutsS1WWoKEfMgRv7x7AWrpLof6U3NDhgad2bg9L13nwCn4hZSGNpZN8LKyVYYxbE1N51p8CpQFtS7LTRKJ2RrP",
  "key30": "zbDkARTohRoPZL8ccVujmE8YeGthh4tvprK3QBaSbTW28S95vAs73YtXceYLgR5349RYg79HzvXJWappU74Gz2J",
  "key31": "5n6nzFVJosKjVFNbhCMYwfebPkN7Qapkb6Koa44KkRph437ZDz9qSLaJoVLrFdcUCTrrBTikbKUDBoPjiQctiAJC",
  "key32": "5ZBrBWetgMFFnvtC1rFMGGvkAofHn8rs4958eSCN2h9w2eLvcC7rS1zveKC3ZvUxJ5QQgi6keTFbTLybvzRKasCr",
  "key33": "z4t26fcAHsEogctxvq3z4sv5uLsvBBmWiB3y9z7K1yhskGdT9YTiT2JKdEFXjFzKnn4jjXXzcHCXJjruR4E3XVY",
  "key34": "2LbiBEcgWPJcyFS28JvaMw8EKQhXapEgxk3txhf6dzwNpKZWmi49XS3W8w71HLRqB7ZLragW6DVCUwSmmVzZBxU1",
  "key35": "iScNUeDbgxsTUHVTFauWiUMG7pxk5zpHUL4Z781FjX3UpyeCG2DQZjbCVzXvn3Bpzgo739WieuDmp3zS271qUB1",
  "key36": "4Wkr9Jbnb9XmzGkcr2NMABAFsTLgWv2CSgqSqpbtcXcpZWmFSyG5LEH1Lr6mvzVD3bw1gWc2LRU8oNmWd2weU4ut",
  "key37": "NsC1rJcoQSsKvuvmNYSZsh4t7Zj2pmDmdt5d7quEcsJzeWpUEmBQZJnL3vQDW9rEsar5t8J84SXDhbQrrSaNms9",
  "key38": "4tHaApCZJaS38qiyuyjobkD1jK4RjGzHwTL2cY9D1VmJ3U6YPffkT8Th168SoGDfmhUaBKe6ftSRFf227pnsniTK",
  "key39": "3UV2fAfSMZD6X5L4HFiCrcJggsEcbgBAD2XF4T1Hhoux1w9AoiRCNuN6Z1x4u631SkvZKrBiUuyNZDHwwhtSnbbC",
  "key40": "2chafUWDCjqLdx1YpBS3hLLgHRAGcy8os8EULQqHnVEBFPJW4vnae6exzfLtWF86gWKbxcQeQSp9mfNsXQXsFG6C",
  "key41": "2pwX76uz9FAE1jYJ1jMXJwEG6YJ4pWzJLcHYQvkUMCmvzwGUyexoSPRDsAkRaoNWaFACnL2Ray7Mj2s1FJvAUB6p",
  "key42": "2v51Xmk9bTemNVYZJnWrm4dwwgTDWg4fVqe2SmiDsv9ey8qvuerCToEPSCQRcf24jPXv3aqavJFVowGuE6rziidW",
  "key43": "33sdBLpjfXBtr1r6QieMsfcSbGSfSFwGLoPtXms4cHz4hScQewwS4TM3tggaPd1WoZyipsRQXwWWLuj6Mv8JMUjH"
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
