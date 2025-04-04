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
    "2KesTTEDmJPAN31eSfF8hWESZgd6yBKxB5aNre1zpH6SA33GtJH17CJqSU8a6PZXMy3iVcyacRejSDkNPFenW6Pf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25Z53F4hQSZeLNtjMrozPPCTBrwzoHBPhKeZ5Fbi8r6rybHRFPAELEJo6nvtdvjEe4sUCiTf9odG5eb753xkFabY",
  "key1": "2UW39rEcqKgp8QMtdAnCqGbp2Mwqee4yA1Pqu4zWVS1woprHSzK1NmibNce3PkumU7QoC9e6jF3Tw9V4KQ7NT71n",
  "key2": "3r3HcgrkVBmyTgRGqKnPepcT9s2CvDncg8GgWBx8tEuwbRmTrX9QHhEktPzQ1EqP2x1W2rKEQCxwudK7cTw51RCD",
  "key3": "3MAExUXeWA21f8ihQheikZpxnDJdJ2QiEk9TM9mbgioM4BNiCHhR8qWmqED8Nc75tG77iYoc4mrZuZtHkdLMMYve",
  "key4": "4gAqMAbSezKPZDcLxZmKBX2yFVADW6x35xeJaX3kXqYEfSUDuVgcAyS7acTYfNqc3VuyjoqsE7XZUuE2AVAyuSd3",
  "key5": "2ZD36MoSNbfUqite5dkfzfxfxTYP8zL4ctnLKJZY3h9tfAvcSTZyPyuZRbyVE7Z4w5QMW7cgBk4qYgu4bWVACBkx",
  "key6": "5ChL6CPYtiR7WiCv4UEKyKGfxEJdhXiB8cTfX3fZtNggN6mSzBpTgueHv5AXJWMkHK65vetw4gBHZuqZKnbYKwfT",
  "key7": "4KmCgg83d8Ex8zv2dR3SvLvfvBcZyR9yib39bDcUmWoyo6vStiwZGuMRGoVoaiXx7BFob1URM58KyEBx39j16uGp",
  "key8": "2XdoYaBFvaP5Jd1315MFu5swfsf7vLSxnABG1JiisWvgUjX3tySBSLLAG6EdK6YCWxVpKJgPxj4rs3mhQCYwZQFR",
  "key9": "2YKPa59hcimh48vtNNfk6EwarNX8JMJ5wVFVrJJ1Fc5LUZ1BF4rP3iQDW8aG9pBrZu7j2EoNkA1y3vGNA3fvMoLS",
  "key10": "384q2UmGSi3aQsGyvSaH9wHb1LyEBaTerNWC7CsnxkeWgGD2sxoMVSk66r7P3ysoWJonPms3ZHpmVPF8XLcewrHz",
  "key11": "5QJVaaaxfi7RMhvWpwwntcpC6mrsy9Ya5Uyq1iazfjuAAk2Fe9JWGd3jiJGXyrQdar7AmzVZpFeo6MV4cE81bjmo",
  "key12": "4Xk89a4JPgT3eoGjkoDEzdnh47ogwE9DjNeK5HGF2Tx9K7WUukM19C3hA2wdN1EJT93KJFcLxQJbFPAZzLeNQmSC",
  "key13": "EyTy3z23JPQAt29DLEGgArAHkpdJx4e8tcYR7szHjVyeJTT9w3MrVHzLSctX1R9fcjmMvjdU9x2rkhuNcjy4KuB",
  "key14": "5ZyXbNeiKp5feGrkHyhZz2iuRNPY15BoKYTKNcgXpWVwHGC33DYJucn5EoGYmD4v2wMmoYt3zoUK18W5GkzNgDGe",
  "key15": "EsBiHhk4gMDVfZkSi5i2Tq8PnMPWwtJzJ5GyDuGEGCYHBin3vrdxG64DJcnkD3adKvJsdVkmfKj2J5LxCV6rE9h",
  "key16": "5Gc3hVMfbz8s33xjHybhe3kYTXYSe8ARebtWHjMhLdhbGUX26QiXwxML5xpWn434v8guXRs4G6suECZnZchYekZc",
  "key17": "Ka67gGHWtNDbj161BrKqsCQanu1Qsir5DvCg46D3JDYDcyCBWSbg4pXCyYZi2Hqu4G6pv4qQQy4i4UdLRZV5X9F",
  "key18": "3kQ5MnNX8sEPabu2JTVNMXGvVxqi2PskeFp4LGitgfKTDVT1RGZCaNcV98xykQ7BfXTELAbs7MX699HYA5nnnQes",
  "key19": "5m69DmLFsrzvHX2U2mrXkzaY7gyZeEJ1UiJH8EchVMs3qkbnLXyUsHpmPAyFdRxqVW2Jpbutx1v6RRkigPjSrQsk",
  "key20": "4ZR4yiTuwyhgJgko2bQqepsL7r55wAFpg7EL1pXmYhj2mLSwRXsaTvujJgd9gW8CCcJmJy27TdAVHoB4toC2w2hf",
  "key21": "2YpL5qHsr1isep8Cd7hUhGADJ33rDk2pJYnU3dLLriXQ8oA4uuS6i9BWRpN3FSUJ2MVKkgCBQvHaeAFNUUMjT6SJ",
  "key22": "5q6FBivMQ8r6Md8TfKyWuJ1ANoQmZaSMVmSXJEuxCGyKiV32DqWheKHVMBwUzGthcQ8LgmoNxv2RekAScfJRtPS9",
  "key23": "5enuXFTWshNtUJmMWrg5erHY8ynFZ5TU6PVMsErVEgm88mLowvgCRYojWEy9tR7AMn5Vkd6Kb5zrDtUQLtL3fByq",
  "key24": "4raNyNKJaqztA83qagNrEUormbEHq57MpQECny8E7yv7o8nEjruMoGxpae744kZmQpkwWrJL7qsK5GPgj3FJdAQb",
  "key25": "2MkedvnLbCJTnCyCqnPveHSEc9vdQvMCNncPuWYXTibP6wMvMYn3FEFXifgyj98EnXr5rYAa6BRFvPe93xx9TerW",
  "key26": "VWBn7xxS9sT7GUp2qaRYFCTh3PKvakGsJuRrKKLHsmU7oWDVUGQkWm5e6rXjxUiQmpH24RRP742qGQxDw4UForh",
  "key27": "4m22sUXiQUxWcsYvr6J5y3NZmUXFUXZcAoumCFbES4bKH56fdhLXLMAVkGkMtQC6yebeiijLKLdDB6HLFpMgAtT9",
  "key28": "4y7YL7L7qAJMeAzqXEXrqWcEi1xRuJZzURrCcnyhY91y9ojM2NurQ1fqctgV1mrWTC2qDvmQyKisrgpJka3ENLZ3",
  "key29": "4WW8mf4rJTShj2fqqioynjfGXNhiqvf4g1JcLrJLAYsn2B6ftvKAKd3GiKepJ2BPgL53xe1jjTygour1xSNLqzD",
  "key30": "3TvdJ4eHTb23xHxoUNdiu3faMgb8ksDDgGEtb7zr5b2x8Byvxwm1CfyKbJ1DiHU9m4A6E4TZSsuk7am57aGrHNc8",
  "key31": "359e6zj9iX7h5aXQHEb3FiseXeW61d38fMQyi1P3YFn21ax5yjJ5vRsHarnUet5SoFZV2p1RDWbHYduxE6TpXmFx",
  "key32": "3DBCAbeRaQ3Soh6c7iEJn5w3N3Twe1eTroStK98hiauQKLyVBdzDz4Mc6mQyoZqEB1EDiPsKYNbX5DWR5uJ8bNUG",
  "key33": "5ZodtEA7NXxceGbJcKEcYWzxkk7y26HrGHfeB1UoASYsK1HC5HXN4TSgoorAbvGKFAobFMZiFV7rsXXp8h2fnEHv",
  "key34": "5zfyZrx6tD9PtaGmGHp3WMEKSEKrc13BH6hW3urD7VJdBWSDwF8fcMG76yjycU6Tf4ZQ8oQrZHDdkwX1C6ohcQqs",
  "key35": "CWmdEk76xcqbQgvE5dxFti9z7aNBV7ReAFVePpP2RRJTL1SoZRA9W5fYR2gYjsZ1Q7mtVSmTLmM5vfTUefmxo9u",
  "key36": "59i69ZHMpsuG86ij3JTnjGNNtCievSyEBBBnf4a8FweJsikqGBdty9DcnuLqtVZ7egEw2GpPU2woMML1KCAyCVmk",
  "key37": "5JRXYkCm5RYkKse9dh2omcNX1Q1hDZFLy9GMtdkgu4S5sVA4kzt8J3qnXk3sT2WX1c2RCjEbKgDJ8TBuSVo52NVP",
  "key38": "4w9ERunWj2YYiP4Db47BfjKNFNxC6zYyZr21PKVVQCBCi4PMv3o3ubZvZegBZs5Av99dRGbV8qdUxQdyqJ5uBobK",
  "key39": "YF81RLMUzbzYzSqqeFNRpp7WL1xGqH24U8CmVqeBL5PhpG4Gk7RHHhzQtAqZmR6gnnTh7rRaRPfAGPikG37WwU9",
  "key40": "4aGAAGFtkJmd14Nvd5qpBe9uDhAd4KAQF2Z8M3HJk1R9Urdkt7crVXzepgVmmWYct6NiEwZd8md87y2f9q2z9HmL",
  "key41": "KgbcBRp4icckdaqEH7cHDfj9ssAcnBtVWM2uu1JhDGNX9ECrbDzhhJa3xb84r6nA3M3rg77RxqgwP1B82voJiB4",
  "key42": "3sB9p4JhBxTqcb1CquQGaZPfSKkVKFFF7SFHQiQZZFYJioQNcXUwbmzsTX4CrsLVdrTm2Fw4T1bivZia4kKfbxVB",
  "key43": "4EnZfCGngAk19ASDfFJxqnFMcEgqK4xzKDbrytWxfnnon19jp6yapKsw9rW6mPZhwX7jrUoGSaqZWz6wxez9GXeA"
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
