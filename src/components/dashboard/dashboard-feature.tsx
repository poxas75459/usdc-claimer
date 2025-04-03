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
    "5ibEe8DQuDEzCSKmLcHSQt3pvUpbbSmM9MXUB5xte36ydZ8sT5gCbSQ2nUXedWG8KgHRMHXbyL4c4aWHsrWYdtHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UNWc1b8kwPxYYRPEoMHfMKRoVr8JHPQfFjhauhirrGmNQ3y7cdkzM58j74rsoapZmLKTZU1ToXAjLSEMjwpk4j7",
  "key1": "4njH6NvG7EzjqeZAr3Am1UcgStqCHVmvhcC1qRvJZRyTXgyqCG3JhZm7wZcnx21wF5u9aCNhLiYyeH4nWxWP7yaf",
  "key2": "4K4uK2GfKd1RFrQ2B92UWqnZjiuUDUfkEUU1p9bJn2pHgy6cNUpxDPBDBySgGTUQjPkeCot6z2kKbKwy7DcGdUbX",
  "key3": "42tzsNqC1cFZpfny3ceqr96z8Abs916y6qTrs654WpYfrTNTt2idGUXQ3xXY9QqwvNugsz3ZF7yzhiYKBCGaLWUr",
  "key4": "3QWGM9aZz49y4P8EonnCe2TocDSBwtaLrxQj9qFZdKrwnESou6pMkP8Jmf81RtpydxZZJeG2f6Qo3SX51pe5aUoo",
  "key5": "3bAQrckiw8aS35s4XMe7kw6w2DpKKFJepD3o7pY7eLnDSNsD5sYcHrG4eCahH5w37TsNzZsEy6AUU7eJPwkBVb2r",
  "key6": "4FV6DWJ7ohMtosK4CwSjMrc2HZLgAsFUtmuR4jnVXzFXunZuePksNDgRbRodcYwvya6hVDGHs1QFnC4QinQg6kJe",
  "key7": "2baJkdeQffN2P7jfPtKKLxgmEQjRgBBR6PgVJdagnoNUCaaQEZvg1aqRZWz1ipSznzbaMAstTQoTM8AABBqfV4f3",
  "key8": "5Lpg9obMcryFRWECzLtxUqXrVfv5LiCKekJfSRMpArFx86qqjT89pRenKfwtpvX2rUzRSnKdrHpxMorJGEP8giQc",
  "key9": "54A7p9wL4mvfRHTBvd8TwMKdFZxCLWjqQWVzAKYvmVCY5Pw2feHPCSgGZWiU7XTiNXRVbY5LaBx9YmvESV26wkT7",
  "key10": "2UA3rTEesJtQNRtNL4UeCKENX5VfYevsck7QXp4WMcxkBz35QVZ6KUYXJcGZheFbX7jwHW9zp6QwzVKTfg4CuxWL",
  "key11": "3pxQJCkzfN4JjScMfcvuLdb2AYBwVzpgS2yzSkYTRdVXzeHDDTQkstkQuefiomx3Q1GAyzPHXYVWp9paTnBhgXGJ",
  "key12": "52vNbBx7iP4X5CL5dUNgzerdYu6jmvdUP6afhnyjvY48tAzofsrGSgT7xtXcMtLP8P3pDasr6kn1owmN4iUUgZf",
  "key13": "3sWrJws83ocBqwkjcFn11gu9ASaw2HAMCwFffDK3AGG7k9B6ZudqddhHcNjJcTjH5FhbTypZ1KoxDV657GUHAoAx",
  "key14": "E4eBSCu5giHeBLYHZPzd5qPmZYL6U2KhDMYGcVGPZWRc7egQJqeX2teuuLjo2Q3StXfLyYh2B3kUn7TS4uwhUi8",
  "key15": "T8PACRaxTfQatLZcufUByUhnQBR9jxqu9FvogGU6MV5JqgJqMbVNwooY1Bs2xDiFyBz8ks5rvM6BCn2Gf6zRPYT",
  "key16": "4UocYToR7kMtg5KZ6ebJzWkGUJUJEwh6Rk8fAo44DoYe6jvPH8Rid7nPLDTJ3GxEG6s2WzW8N2V4FwCk1Y1bUh5w",
  "key17": "2j1MEhyMFo7b8eaBgXkw9raYCAME3zrDa7RKZaj2bVemNFbGKtDG1cCgaaxirC2CdFHUgS1pUJn9z7w6uQrxDNaH",
  "key18": "41jiPiW8Cy6vqUnn4B6qUvrRKiL9cifiDsSMwGrrt4JyzTAxw6wDcHkrXpor7bjRteG8KLaJo8Ah4Zw1RGWt2tdB",
  "key19": "2c7o8oYAjQ4ugTxs2od32F3arE3d2RXZ1sri8anovBSkc8jK7b623YB92fUYPNGwq6GcZKwFRvnvMXdCyGQ4ZfXS",
  "key20": "29y2XeNKeEg2T4okyYCAuQBZ5MVNvU5ok55uuRvDYAmaKYM4ELLj1s5GDV4LLYj8k7Uf298KbBVcYfdZdLFvWmX8",
  "key21": "3YRzvVcYxBNnJs154EyRE4meucTtx4cgdwugF2RNecYs9FDzwSgoeNZF5SpyGbqxUxegEdsBSLQnPaQLQ6JrQWxn",
  "key22": "3A5w1cSL8HZeS3qnqZUhKie5p6dVbqj7ripGRkEXZ3tr8VaBNhazsYgxLSoEwzi11LXVsNka73eayHL9uTkghkPT",
  "key23": "24ZagE9gKnrFn9u8J9sGhgE9aQVv73NeoCZRhPA1SSo47VdnTaRhxY8gS4qUY71AJ4k9fgh4TXGqLR5s6YbEA5cN",
  "key24": "5KXy9N11PzXVS1FFYreq7XMBkBs6Wkwgdyc5QL6X7oFnJry5L5iEUQZDmD9F5znnkxxuvjRsu3b671RPF23tknyM",
  "key25": "5vbMWDRCZNv7RW6VNvKSn7toS9gTkL17QRJo3cvvnsovjGQ2zwgUFhR6XRxx4b3j1fttbhwKKEpKpqrxct9GTYt5",
  "key26": "zgb7qsMf2wcKGxQ6GrpC5qft8gEBt5GFG8ifSfQLTGyyrAsxbHVv1E4kR5dgCQAPvQsZa59fcVt8NtKE2RL6kvW",
  "key27": "5Gp1317Kw2FEYV7UnrsDz5xwj4CP8iEcvLTrZQngFBo6pwfVtW3kZ7Ho3PmocB2BLyty3AWGJ139GmdZjRBD8Rbo",
  "key28": "4LRcrNNYfV1xkDmpxaq7iKc96DDSmaA2WjEXQVxQJkzC4CLDPohZ9FrdrDGxtPmv27pQBxtMytQeGFs2LRD1yXsE",
  "key29": "5u2P4ECBcZruRMz7u3yVJptoNwnVvbDXVoYanJCWCSUBUh9GQWVWA8onQu3UbQFKtiRy6mmKckkRoL8efbEJYoaU",
  "key30": "59T4HqPxeQmMQe24YDmPJyar7awYjAiJtrpRJwTfFTF7hPgBihjNXb8CJzkhvMAR3QxBWn34hXNGsDp3GjB1S4yF",
  "key31": "3pxyMVXb5tbtCp9xnj4PyKbC2n6A3HUKuu2bJc6p2MiARdRzqBZafoVUXSZnf9yHMm3fm5EgyNJzc81NEGSz7P39",
  "key32": "3o3NsrhzNPfXg74k6JurXuD8tFDNRD6dCuzf7GVxQ4833md4hDF8LDEnLHke8LKZU9LjYPbdAMmK6NKLGUE3h4gm",
  "key33": "DrWc5xj1HnNjj8keDEAjHfs2setYweQNN5DCiAijZCpaG1QCfgWsj8mTnB52xJ9CESt3fiZ1iNfJjws6CG5Bg2p",
  "key34": "3csJhUZoBRn4yizgyyVyXdFU283JGkQXkN7KjTsmkG9hrqmDRkmqYKnUEjyXpo7hYwfTkpaaCiY5WrUh5Ua2PBCp",
  "key35": "3iyD8Bi9qREGxdvubTuWLNQVQ8b8KnanLQqJBFB5XFU93C7nps19t7cFQu91nRDmuCfnfGJcjc9SeAjZxDA17tH7",
  "key36": "pRgGfJqyeJ1K26cPMoraW7BhyvNNGpnKSnfc9SnEpKctxmAUfWHVNR6tVzY8vkkQ1jEG76bWT3nRMyTcKFqS2Ry",
  "key37": "56vuHwFsb7dbVYPf3td6Fi89bK9wABr1hfHBHUm8DZxL5TKBoGpeSvEidXHZ1Vugb9hfNQtVVsnTWuPW6XagZhy7",
  "key38": "JfQzVoFnsQLG4otUvcTnJHH9xWt5iuCfqKo5HwNgZTR1XDjtmrqTHDsHhM6LbnzBpBXVJGZbTKSCFMXYynad1gt",
  "key39": "2bVUTJScdPgDi3TqmRSQ3rvs8P528kjtWpLqLhK7pEznmin28pLPcsyyyA77TbfUHtgBGzZbiYNMYUrTxTcbD8bh",
  "key40": "2JWKYnPTr4ET2XRMViC7Z37WHdqDwho9Qx2CfgEEfasYUYHu6cEN49iXrZzcBUSvHUtixm2ZvRUKLpQtagD7j9fS",
  "key41": "3DKqs4LrxVsCcwnCbQru7awXdgTU92ZQjTcyQrc5tM1AvaNnDS6MVoZX8jS2kAksB4n8iwZfece53anijJx6Wqna",
  "key42": "sQW4hxddqDdV8vcgzWsvpjNTxkz4f5DD5q4ZijdWVGeWrkiFSZ7oCDuZ4LXAyS7iZ3RV2fpjz37yrngzm6HQh2u",
  "key43": "3cZAu9T19CFFP1QRYEsdqLZwMAn3Ad6tJ1dF2MMrTwZbLCvr2efadJFcZnFuz5AGx6NnShRxdzZRttoSgvbXMdx2",
  "key44": "5uZvruq4o9TH2QHUdN3Go9fRrfWnd1uUXTAXyR3VGz9wQ5nNhdZ4cCKUXs2jrGBBhKxdEWituGT9fvt4TJGkg1ep",
  "key45": "VCdLwpi6dt2Mqa7uGzg7vJEDMyTWZgo1sHuq4xQex63Rm4VPBZHWw4YbSLgTxahKwwvZ1kSeq3TzNeZUNECZ2Tp",
  "key46": "58cVua3FfvLMfvHZwJv2q1VQgZXgoR2wKNZUjNNie985jxaFbJ2oEYzP8j6uPTHpPiuYoLeGAradMmNtZEeLXLaw",
  "key47": "4FUmTHgpW5rLiy5LcQ3ugaWHZQB9sUN4giPjgeiktZFWQUP1ZVKiNhyEN7m4Fd9F5xauND4YfbGSVEwL2BdBC5nU",
  "key48": "37Y3CjopXxjxAwVHTVRUkVqwRLiWaLFXzCDjDcuHUpwG9bEnEFdXXe6QHm2mFtYvP3Da2eHKtktvoYGeREfFzAuM",
  "key49": "2E2XvVW22aNJfwSs7hFEnJPbmpHDVmSJ37i4R4EcwoYX6fyn17GjdUcftVHJSLYJGntzvRLpecgHsmmJfWp4b92W"
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
