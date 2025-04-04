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
    "2ZkiMriPFXs1GEqbPZVtfvnwnBuFxGq92pt1RHoMBxmc487Ggqovf2tLNYUqRXFqTmXPU18sQViDzxE6CgiutejE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KsLXEwWKdFSCmbZpxuzpPELTftjJ8rA1jTv56psnVAGAokSKBgmnKsvaPR1hb6LCgFnzssGKRa2sNpLXnfVNS16",
  "key1": "4LFuoCs6Nip6LCs9dC6C417Mbf2VENT6pU9XuHCDCQ1RW34s7M8hEEA2NdD5QaqQWDiUqdFNfNxF24yTRafk9YNL",
  "key2": "4G6kN9VckzWP2S5xbJGJ9aaLNzhMQgD4Dv4TP6cA8sZc4XU2cNvZUPKCkuUrkcZ8QyXbmANAYXNZbafaeE67jNWM",
  "key3": "57YmspGaSSTpbB5ANnnask6BgSW5CbBmt24B6Fzuw6gW7uFHA1JTj2zo4LXjyxkJnRJwzpNDyDA7Ebr5n94wEJSD",
  "key4": "5ZKB3S73YUiHaFjZHPe5CwsAHpefcqiisD8N7mghztvtzZx1Rno7jhc1vpM32Z3oudy8MhHgCbEbo1Dn8SGBcrw8",
  "key5": "4copHfm68tUbUzvyxMJ5EPauCZaHi2Yu4RDzPGGN5C9VHwzpoLZsmLCkXDu9it6n1cYrL74iM7uinFn3KKmXtaMd",
  "key6": "3Up8nnHnfDgQWnJi3BTN8SE4be7Hm2v5JY5eFUFYoeDntnfQdibaNrFJpxPVivSgNbBQVoTV8Xq9HZRDcEw9bRGv",
  "key7": "3nRXwrHJ1aRT9jGL9QhkZEGaAWWXHEUkiFukU84qZaX2MPaUPaCBiJwcpdsp3wx5c4vqx7Kohpy3V3kysb4zruJp",
  "key8": "3MWBsM7rJDjoumaxMoN5fYzqEWCLnKEBmXieFMPtPGSur1h2L1GKmqmHKWUeF4Sv9VE5xRHuXGT81dtZezX263HE",
  "key9": "bBRcHqdzU3L8uNweAfaeQ1AgGXuYxkZb8Rzw9FTiQdxXz6CtJZxEuuDTtveosL8acg34QtUE9dW2RTtdCwrMjtv",
  "key10": "2AnHboJsmUjqkk964CLYvmv6YvPLCy81YmsfBLsnszihdtUtLq6bQ1qFAro9aentRcyFCLJHi6jhbRkYfSxcGy9T",
  "key11": "5rkScUtHJaJtfeC7Ud2PXY9XKn9EPc3eLeWchnKyTzXnVwSsHEymfgvywFbsVbFXTMvnmeWQGUVZWj3CqumPAvEv",
  "key12": "3z1hfUboHae66fMBF61X1XKsNALj17VybkuwT65wKv8p6ZdKyCrhRmMjYRKQojNCqx2P8Lh9gbu7kZRsgdLjyPg5",
  "key13": "54BfJVmArDdq4gbR6UYsiR3o7KDtSPydMFFBMsPiFALUFW3XByzDgv3SohzxFR8rYGvKeKNpSje1NewLuMcbrAVS",
  "key14": "3s8VSMGTEkxR8Dyx6ztJXEgRKWtsNJxz4XvAJKDdZmiFhVYEtvwwneY2vBwWhD6ZAPqKruHdqZphMJ1tqE76TQZm",
  "key15": "3YhRYXxqK4SiaztAUnUB8Rs4jqjk5GM5wR7WYFuB4cqrhPrU5RFAcEGNThpGdaoqBdmjqbczzqDHNkcqkrUj9YKc",
  "key16": "3BRzhreKt3xLTRVkofHDe4Zf8JMroHJB9wjrqwhnq2uWyrUrgb2285ceShHbsuJvrsXDotiattVEdqLuuWS3Hutx",
  "key17": "4tRuJy6NpeNzCYp5mejwq75UUnV47ximd6kNnWWtNCVfT9Z9XctE7CaJAUqPhngGZR3BznxnLoUaHV73ccV8jX7j",
  "key18": "2AGE3buetk8vCWx2TDMHA1utSbjBDQbNYyRYVjo4aMwJmmsJ5tW4X3UjGwUY6gfLdfqT1MZaVTez1p469P4k9bRe",
  "key19": "43w3kM21ThvFHkCKTLfxqoxX1wykF33y7KREhxfZiKx4en2wbHYy7SaCuUNM4H2ubeyH8cAFUQGrbqGqeuUFpcAo",
  "key20": "3nZymCCdd4UHP9Qy2GvAgER7uJ89ZbducWME2xt4Lfot4EMRk4c2Y46wYA9jjE2BVWKC3swdVq2pnWWG2N2oE8qp",
  "key21": "5pb7eQ3Feg6VZWpGywxnhNdbngFPMZzzkpNGcw6YAp2Xv4mNjEwyNHEuHWfLkcZDnccCEmpBF3XCTmz5NHnKfAqK",
  "key22": "5kVCSvy827YVqhJ1wN6o8jHbyrpt7CqxfXibDQv1RrwQhU8aG49zMP2vpL4ovffhoS8136iGmX5sd8de6eQf5JoZ",
  "key23": "4MVHY5QGXdgwhqHdPrdgNzQYg8hCpdzfn9XTHzkpnKXAwqCEBKKJcSeyMTqi5GHj7ssUXq2TqD8Lv1YAjAquD9oQ",
  "key24": "52mazQF1SXe6d7VCe8wKz8e9GvAAfFHoUYsL3QgTKxkACXZ3emSR8rJDZVmbtxBEjdgG3RY3YBKSwUapxBef8KY4",
  "key25": "2YMU4o2XsNHF6agEKxmwdeA4Jg2Ni8Q5qv4j4dyLdC4y3Jw8nPWxqrNCbM38v4UQnucoUgKBwuyDUgZZpL6HobCg",
  "key26": "3KgCszn2qA5WfuY9rzxj95jCUAfcuMuS2xcb5cjHFvy71JyMHsjigVmGeWQpfRc8VXmb7st6EuZQnmjC3qvhraDP",
  "key27": "62BbMjDJiVBkYojaREqu1pizpfQVHia1SgYmDwycojAK9BJBm9ZJPafYKf5QQG8VM9NnoHoRsyu32pBH5t6HM6RU",
  "key28": "3E9iRH2yVRpsmVW5wXmwWa3JgdYSnqFBQHEng51coTwQSMdvUmaKRGPenaoxcPWgeqSe8qykZLYqNy88AyxMfdWw",
  "key29": "32YNydK3HvjCfUP5htmigPBPGCJyCPRyEWZU1NmXdftaB3nRG91oNLi7v1bJo3ZZWmVRDrjur75Br1kaufVF5WJx",
  "key30": "TWeDCuixuYjnbT7WBB2v6G9sNwFt66zkEhmdhdQGzXpnXYGVYUyp3u4UQLQY3DMLNbThgNnDKMo8hjyBENXUB4B",
  "key31": "2yV8jxTPQxxoLyHn4S5E6UB5c7meSN7oRqw21oNUASZkPY9rQgUScHUFieLxiXE9aKNc9NUWtH28ZzVZAh9PVDHR",
  "key32": "5fmaePcL6sc8z7bCXcmvNyrs38Wr2bpV5SPtPxVXnGFKH8xRCJe9Vok8Ce1RLsRUqkJgzAjesyWHmSPg1PL9JCD7",
  "key33": "65Aa5PTXZgZ2bE5FSJucHvE9d2jUhBpyQsuY35pJFjXtWU7zehecsKwXAeNyzEjFzMoGTiDqDgnhSToYnZyrDUDs",
  "key34": "269knTRLcLDoG3xRFgDsQJmvJNb53cibHQzGNa8RtyKVYdnEmnC3yUhfWY4PbE3u7zjrCSGftge8XTSoWkLAETWf",
  "key35": "3gE2dBjhkazL5SShRCZqg7gVc4F4DGFdAaVQy9dbbUaoyn6JSAXReCptmFCpWLmd3eECj1WeA1cga2NdksKaskSL",
  "key36": "4VDDFL5rH7YTE1bj9fCpGpyoEUn6TgfXyKaTXLWFjz3ycNvXNwoyfjseaM737KVydNz9EusJJP6iJfbhzDa3zeQh",
  "key37": "NcPgurcS6Ld6redV7HoGv2WcWz5vTwwJAWfJHxYBgXuwUwW3eTWjvGyQsTNNea3NhBTWeqduW2EmEeJ6Bo7ZSwY",
  "key38": "2srquzkK8Do8KbZy9kr3zJBbRjzBFVkmqx5VmsN7c3Q8idvonMHK2B6ceDtgRwyvYpyiSsPjYV33RHGKGxFARVHS",
  "key39": "21BKiU9QfmAXsKHNnwh55a4JGU7k6EG5yY7wCRcRuN3h7NpSGGqUirxuJ7PB2xxZQ9Z9CZUnDho4T9rVd5PDmVdB",
  "key40": "jVXDMc9dzRpcqAECf2Qf6Va2TkgaqPEEfovS2h52sHkBsPkdBEvSTka82CmHZKuf26kNxkrt5DtjwmiCUe3Xaj2",
  "key41": "5kwNsbwmxMw8W6uYsCt79VTwAUxioxMmZt7DYenhZw9r2bFWf7xpuFEp34WahLJ7RvLN94dWi1DE2m2YeWW32bht",
  "key42": "4KRqx7mPkzxT58bbTC1DyXx48NEKPnbBM3gy4TdQjHu2LPLQwFdKQfcYtPeexLPd1fU8Qje92KugJxcaJwgYw6US",
  "key43": "5mzYViSYmWjwHKKoQMXmVTcGAuhE1HBjeravL5VeA99UXAA2i9pAoDTHF7FM2t5UrHkGV5odbVe1xDJ9FvDrhd5h",
  "key44": "5xeSbhyKZMNozjCwwXvmWw5YkEbdbS4YqfEGU1aDPptbdXdoXHztvtQ448mtYdU3oZX7jnY1AfLnJfNkWTfSCbec",
  "key45": "2kjtbzNZay2KGAhKkzSUdd7c1qTja1h9QhizyCMG2hXxYnkt3gprWEka2WMVU7fZcdDowCZgrXZc2fmz497SsU2j"
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
