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
    "5X5UY57yJKfk8UxzU2cnngny9i8D6cMAphZvifromJ4Rgb2oXm3q3PkcAxpC7JzXvwTeBSYerwtTFCyxSL3bzPt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qBw4FAPN9pSS7Wj8AXpt9HoBaavbbLXaAYuuV4rm9PCsTR2D1d1jaYCNK4j7dDWgsUoX7SxuQgcQHvXjuZYu946",
  "key1": "2xuDBbYqdHodQRRnXo2FHAVnvaeMMPG1KA6uXVjAtdt6e8VddT7Q1EWYH5vumWZW3n2EEPkQFoF7vSR1rvEpVbKQ",
  "key2": "3SdcwSh2ArWYhBJ24JVgWxZzxSn3h4P6mU2ybTeRmk6SqraqR79Bb1RH9RP18FXg8tAHZr68xu68zHeKhxwbK1uw",
  "key3": "JJsx44yBMuYwoJqhoazyxcLWdh4nvDzwVqEW7sun5M4yHzAPibNjed7bXjcr8AgmbSATDJtGXLRtisQw213ZkkU",
  "key4": "4U87FMwCSzBF4kYLpLyMtLr2uBfCdCVE1DUQwFsDrp6NUhSD8KBCLrznnVsiz2JniTuo8Nk4Zg8rdEGokt8AasrL",
  "key5": "isHL4kQXhrGt1HREmRNRsFEMH8KEzSXMEuDrADrwR2KysXw8swXNmXYS24RdpB5uBuzpg9hfLqBECMHDWQq4Vwh",
  "key6": "3MF1YKaCDUf8LRNFvhqd44nQ5A6DhRyPzcrKU7FoSxicxXHZ8KtrnFgxUJGiK3DbD5yc3BQbpoocEh1dXHMAqx4",
  "key7": "a6CViaDQWRJkEw88hP1SqKW5FEvm5gAoXKMx2NHTRBXaMNYRYZQUbMGgpAemBeSTEDvkbN6QLMJFxj19Xo6tDKz",
  "key8": "23eupgdVwXU1ZPisuuTnfobzjkGL7MQhxZVgHSw8xMYyhHy7458tLzJgM9tEArKLLwxAU8TByqBxJDYXJ7dMNtPv",
  "key9": "5yU916XLqJsUFF6S666jUtJYbXXXP5dcbLeERDQjdneJyEgdJrX6BLpzRqzZLLqJxKDMF2rhnpXeMFj8sF6Uzdxz",
  "key10": "vN2YEFng5F7oqpDUV5o6pVLYx4zVVjhaba2ZT4Vxk5trMfN8kBr6WgMLjFqnefkLRoU4wnbGFGUAAGYU4oogqR3",
  "key11": "2Hpd6YKnGqc8k4VrH4775L7P1WmeCJ1gkQweBiJuzobsCYw6UX5aWTFqZyYmQ6M6Hcowe48eBNwkSPqDCTr3DjGC",
  "key12": "3idxvWZpHsKwrwKbypK1aFfeg9YqRA1JhJfpT78JPbZgCCX3erRzCgmLoQFygTRcLEFqcZ3oTvFxfHRA2bePDK14",
  "key13": "26jwPXbeRMqLJHERkSub4Sqy2Gm7qsPaimBaXhKbDmjf9TnSaB18e29GdCkFTSb89BpEkHHCGGrCJC3eEchr87g3",
  "key14": "4sdTttp9ekDAGdFK7jF9kdKnk9zuh57gsxofnqAqZhrKQ8jFpTnVxxS8VntnjP11zPWvxP3e9jVqVbyhTN1rSUcP",
  "key15": "5zcSau7YULLGoorwM6nCPbmS9qfzThJrt8RL2YRC168WWnx1sZoZ3favs75eDHy3r1tgpEakZ4q9KR2U5tbZnCtH",
  "key16": "45SxNzWBKz3WoFs8coS1XkG6QqRbMSjHCuTGkMQ8yiii1PQgM6AJPuezYzHsUFKtgGAwSb7ftzkoeMP1hizJWsZb",
  "key17": "4V97TsNLffn3gNbQjq4TmKXUUNPHTgX9bchPPMQLUujbPNaLwXKkn8hCPvuk1ixwCUPmY9L4SZEiM4SJGwkfSFip",
  "key18": "SDJoPt3Z6ENqbcsELhPNJygDX4677KvrHXDseqZeDTXbYRQrj8Dc2awYAEBX9AzL2n1FkeUHGhDS8jkgxS83A5u",
  "key19": "47Uysz9Uvz69wra9x2iL63Cfuw9A8x9fiPHt5tRYziR5MSnTpm8C1BtsTrfGwKX1dqsB4fbhU1gzBnoWSmjMWUJW",
  "key20": "4Cp7LD9vaFT7gHSJ17NiEsLXsTskigboNrHoDdFWBZ6BwWk8oe63n8jAX68HBFcjbmjT5QRNRqn3SbgR2wJCy13d",
  "key21": "DAxENCabCB4rPQ2MWHc24yRGKRbVNrQdPjPcVeN7RfV5TLciFh33BLxD1Kjq6hehXM94hGoxS9KZp2h28G2noa4",
  "key22": "3jRUfXmJiHTJUMr1Xs4fnhb4FSPSqkuJiQcNg37PcwuAbe2BaB7V6m1rHBhFEryxqGpRx3CF6BkfgCZmrgWfxJJo",
  "key23": "2mYE8scZCGTL1cPvCXYroG7h8cFiF5Ah1PW6BJhQHB6Lm7YqdMuV5qTxkVTmWEgnxXFUeeQKZCME2pRaEvra6LHE",
  "key24": "3WGYoKUrANmQmJVPU6kHogZ9KbU2XZDSzGYeeKXjW1AtBta5LafNpqiNg4hK3JqTH8akh42YDMid59mXN91Mi6Es",
  "key25": "2LqXEGa72wM8Nu2BR874pBgLifNNwVN8ADjeUMx9nuMS6U2BMpuuYasxBJL2pWCWVHwTak2LiErdzFTJwSZJNDH3",
  "key26": "29Jhh9R1Ma4FZMLUkFsHfkDUhE88bUDpMev7cQZZ4Fqcattzh2vdyM1zY9qsmc1c8QJFREBzMRaggAeGyt5Z7uun",
  "key27": "2Mh7A2LUbgqWjBJ4yRHdEdjpfdS5yYAaWrcsXXsA6jPz5s9h5tnXK3KsWv1B9RTeJ5KoMPRNJxAXwETrdBq74r5D",
  "key28": "zBgL4RfJuRTx79mXqifAft9eBTMdaGiWrEF2Df9RVV5Jh9szvWgVTi8jDNg58A9KvepJqK4xeeW4RCoxhLScNTp",
  "key29": "3wKd26NK9qJLyr2T4vukY7NpfwhsXkZBbfsBjtXMoRAQGvgfS45gqrfzBQ6uYGUuJ1sMLHcjEbiowjVmTGF3i2Mh",
  "key30": "2yjTYSevLijdBVa8RLDKRCGBPnrYdBU5txNWaVPLkEM81cUGa2e7MCAesNZMhRCx3aXZzEVziZ99RAqKLYs3Q3Yj",
  "key31": "4svUqYcM5B2KVWY8yM5XESAvNmM5K2W85pjVxMZ7FPrt46ugrJ7vZuGQH5iN7B6JzGLSyhMsGYEpjeHs4vh1LetU",
  "key32": "3KfWQkunbaKsWnqEh1x2xQSiP1BAarmScfdHJTuNqtx6kxzd4wnb82L2zX9HUnNVTQ3AMEnfyouE9VphnvwoZZ2M",
  "key33": "3j6XF9MfxEcHiKFHG8gBskFDYvj9ZxVYWrLLosHvQbjC39SFdsAwXb9nhekUYRXqNnirGKS9W5DYf5uQLThcSWrn",
  "key34": "4MrUw79zpEmQ7CK2Bs4GJiHqcpCgC3eu3VZ4xQsRXfAp6XuCZsLFXx2DGQd1U8N6jhd3bTrYxFs5UsyfHEcXBNLa",
  "key35": "5ocDUBKGzCFLWaMuJurhZNM9FLrq5auGKp26W89V3nMgk67MsKGe97oiTjd8wT9STRcBYjoyBrYDy1JL42PYjufX",
  "key36": "44RZUVUwEd2faMb9bMKWJugQMVMUMhPWdBsA3Yhnt1zmFxmviWao5c23zDPXodTvy9aShS4s48rjw5H2ePWpTMEd",
  "key37": "2NR5tbVDLqWJbj7SXPr4bWw4qzHau7qSE1zjpPdrEe7xWGMo3FodaGm33iX16evNKnBKkQEs9b36gZMrEHVxVpcP",
  "key38": "36aEX5Y7wxwwJkXTcgBBi2AgAJTEd7kZjURYKVDLzX66AAwrKM1hbMH21oEzcBNGXdTcLQveRmywt5kHbRCyLBCn",
  "key39": "4nyZjRuB2gsYaPYU3XzvpM5ZgBNv56zrwpkdgpx35WU1AGfqmxpBm57J46VkFsjry71txekPLwSbz2H7dvLsXx7A",
  "key40": "5cBZjbTxBzoHzw6Mj86eChFFMbxTr1fe6nzhu4tJmF9RVp4QcNEFEvQLGeiWMUByGPX99Bcv5iSyTJrEqrvmxxKE",
  "key41": "4LAAziekf9rVYXtF1oWLme9z2eVJmqEj3H6gLMc7VKMAb3VecfwBQ73XWpJtkydmNYe9Mn3HgvzxMgswzrs29qkw",
  "key42": "4bqBYLdZhzz8u33W7m4P5vxZTeE8rSNfCq1q7ZKht1gUfsceGA94fGwB29yGij7d2AA3gNz6g2zeZhToE8Tr41BY",
  "key43": "2E4NURZjDrfdgP6RTSzAGzgvpUQcNyoDF8bni118JrFmNc1zWnuxuQP3qJNLLdb49aQJe9HYpxhTNSNii9NL4ywJ",
  "key44": "nYiXcrAy6kybssdrvJDv84maiySEgJTjTw7p847T51G1T552xFhVLty2aRCBbWbzM5yoa5SnjSWJARCjtkwk4xV",
  "key45": "3X5zrtDFLEiAMZL4QZiD3VsgpJJYWLebSHCXBFmPQ79zAwQMm7KaywXbnfqQaHB7jgNXAzujRddujrNjWbiSPWeT",
  "key46": "2UrVj1SCofSZu25E1xBjVb6BpWgT1ZQtj8gwv7R7mqXkm7AExss6yw4MwuosDqdC52c4sCbfopHLFXeHT4HopJUF",
  "key47": "2YJmrMkc61iqGHcPkkPAw4rjv82KhBzCheMSdRjuLzaBt6gAE92TZf4qrgUWbSNksNZ7NRTog7PX3c2M9HxsXorW"
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
