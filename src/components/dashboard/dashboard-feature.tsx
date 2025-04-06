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
    "3iJeyvPVkachmQxePxPgFAKgGusRmPXJfr1DjtM2RAw9BqaYMLaoSJ75Pg7FbjTvG7ic1RCeRL1eriw5zNMwLubR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5heptEh8TixKv3KeiGNksNGk6SHMtU9fLRZZynrqWcWv4mK16kqJKGk44noUAPxDBCSDrpf5ETcEvfKdf366SPi3",
  "key1": "3GphvZ45kpfKfdn5YLxaGY3GzJ7spmU1hjajL2DwgoQ7QBtwocEVUKFdKjy1G7acGwUA1aAYKtNyotcR9iCQeGrp",
  "key2": "WGZNP7aoehCtRGHtdxwdhgvZ5MqJCwhNwqS1E7ZAzrenD9YcJLo8YUdgfmTEBLaPeDMuD5ydZef8FPNvCxa6gT2",
  "key3": "4gcmoWdrQ3jfpHopo5v8ueSvLZ8aM3jzqF9Q4sBVz55D3XLMsvqiBNKjSUMvFZRUbhqLnPG3ETzjtmxJix4PRee1",
  "key4": "4sy2NZZGq18nhtjuK82tGR1YHt6r1i2EAcouQiA2ULnJkFQ4XQydUbwkPuawoWkBNzVcJYT2JE79sAeiu17d72mx",
  "key5": "2n7mTSj9TqkEaBdogGMmE3eMr9DUzfPEhMA3671yb1UvKtY1zTjo5ZD1SnxtpxsYH9mr8kpXELZaxDUDUYHYUvPJ",
  "key6": "4zhZLkp43iJk8cLhAD4BKDVK1j5QNDuiCVpK3Du7QRyBwi6WjPx3tigrx2stuBeEXz5NjK7pT4TAExb4xgmSjgFD",
  "key7": "4RMJxgX7oAw6iLFBmgdqCENbgv1AuZNrPhJG2RNEnuLhJjifWDRDeLmyKRK1wtS63Rh2rk61sJyAy93YFGQGoQbr",
  "key8": "28xhAGPkWkJpuK81y6yH7Vwtme1kA3ZtLr9qzV5M2DWfdUYCHTsHLZteDp7MbMyRFXRQDZVodxNNzMGn1NNPSaf6",
  "key9": "35yrxAZPnuiDenm42JRqAkfL4szHkxNX7SofFoJ2crACxXDLAyPZghMKB5nMXuhad94vo77VKSD99Nf7S4P2phSV",
  "key10": "32HEHDZu8WiJuhk12End4kAwk1Az9wbcbVGkpocrqDgXpEfZYu4A2hSEsjNUQ5XGntxa8GFgwEq8HGZV2yksSDGa",
  "key11": "JeVyAqa65LxyGbsxnvTw31xLaFLfKMEeUxPYxr82t5wcZBoewz5w86hsj6SYhfXPmDYER9i4TwnqC9i3vLiy8Ac",
  "key12": "2ePAA6MQJCKvTrjWopbyN1GuvjeD8RjLs7n7Ry5LngeG2uHMXXTVKx7Q43kraMLKD2PE84YZjY55DV9SBFaJYdBd",
  "key13": "49zn9agsMeqGFK6aVpAJfZEZfHxfs7YudZ8n1NYfLTx8miG1cyRtCEfLJ4mncz372TrJDCxdNWc6Nj7AsEYeiF2k",
  "key14": "4vpjgrjRC6zGrysiNLX49zeqHV31iW9oAxBB6nKKeE877zDyRDKHnMRgcmpJ5vhnmUXu2fE2LGNSUsjor8BA1Rh4",
  "key15": "5JoyJefx5vb2EzKLKdtEcFy5T9e5S8XXABCUa7bFkbwcWbamgNgkiuncV9DdBzMZWK65jz6rocSm22heqtAT6TG6",
  "key16": "aiJ1ovWusrPTLyxX3mc5xzZQ4EvqN1tnPUADRA8VanXq1Y2uZkXk2mKxZ3jKeaHnosuHWPWAHiUU86uHBidpttt",
  "key17": "nv1svReCdeM6z519i8hA8fPqbgX24Yq4xT6wJuQFxGjFnPdWKaTCgq5VWPLr4UvvzCHtcV4B3X5BSQ21kcSnkUa",
  "key18": "V1FBZE7Nro2FBaasuuCdjY2957P2Xp4RMeACK6Xc6ZHAtasyiAnGjQoM5nxsNyWuK1VXYWWTPLru3KEbvPcxH3V",
  "key19": "EEQ4DGKaADsVdobGixms2soHKxLLBzoJS3UdBYSuPf3d1dqgH1Q49QrPKfgtBkvoRFK5W7HkgGWqyfZFWvHz6bj",
  "key20": "5Mnq8bTjc6i2XSwa1aPJctQUrRVgu5FcRRUPMApgWJNNZ6TbLZ2E3hsVPNAK94fwC1pPewhfuLkHcvGp25RfUchq",
  "key21": "tNDpFAU2eELX7UHgUKFgZgphYGruCKwfwardPF1HBEPL9ah9SiG8X3gf9ocuYxbDbiMZNLNq4Fy9aKF22gUS5nN",
  "key22": "3KdXVRo3DjpBGBH8QTLdogo74TsSUKLSPjDTUsVQ9sBuaSjTBAsArUH1TnzbHYCXKUMeUBrQ1G1e1Ha61LeanrQD",
  "key23": "5swjgs5jnZQF4U99bqLUzWqpw2V9nP18EJ5eCEtQVHpd26wNnMRtjMZfuHs9TtQfPseMuzq6KbqHbC1iznxvmhd2",
  "key24": "33Y313BK2n1y47ATxPt5g1SqmSG5dK8Pf3bM2ySATxJu6ccihrzhy8TGi9qqbz5XuCB4nnB8cS2G7jza7S8Zxfnx",
  "key25": "67iWo7D5RuzJLKEcBQfR9jrqxnY9boip8aQtcTKLqiBvQ37RNSfx2kJEpekFu4X2Bjt7xBUDJ5swWpZnM4QyWxG8",
  "key26": "2mXRZmSkYQqAdHD1GPe5XuqCdS4N2xeModE2QdvHrimd7161HzJfFHUzTTVxGA3K8yw8xuCY8MAcYA7jnm16ck2J",
  "key27": "3aohiTdtJBZurJvdAhtmZkxX6MULVXDDTt1EEHjZsexid6EPAWoCjSDPqFMoMLmGF9HfvSKHqxpkL72AJYKUBAHK",
  "key28": "2oA2CPqnMisw9DBRJHP3yfYnGZ773jGPXW7TaJQneur5GBukDgCcXvJgiJJHsRFsukikDeBKVkfrpDujJW8mAeNv",
  "key29": "5xbxMLTmDPceQx2xMWfHotzsnxeTUwhwofeTmYYt3CiRaYjhHSM1aidicswAwMCeP5f7gkwachPJDuLMTvyhFAef",
  "key30": "3QUndz9KxaKTrUNjsM5hGa2nMFH9uG7nSPPrmnRBGbXX6NQqBZg3thN4ybMxM1SuqYZL1hAJpQt3dgceUT2Goxwv",
  "key31": "2kQYoQijr1saPdHKMPYNh3CtpzNBZ3RqonrszbGEcSQQhFWi3gD1PRj8aqL1MwPGPsruEYZKRjrUgoZPjjtp3VqH",
  "key32": "msbxuYKZgNwLvqHxkPz5E8s2dHZL1dEZS8BkwAHdPohd8T8JMKaN3twufMArf2ZyGQFzuBwdJPbSN5Yg3s3GyJ8",
  "key33": "2FNU9EYpb9AyPcCYzui17VviCsR37xsSq3374f9VcdokDdKvMV2PLtBA6g7Rv3pDCZFt3EcoDPdtqxmuE5AXmj6d",
  "key34": "2E6oTDWGXKcDrz1jN9u268KVp4Evj4DRVwuNfBsJ9ohFpBfsN1624eUuwqq9rxEDD9RnLjLRpBzHwxoqGJjd1LGv",
  "key35": "2FWV8aRxyiRfMDPes5Mhd9dNk3zjMoZVkMtwNe5wsSbw6MwHcj5qJyxydcAs5RW11U2sE6FVxsHEoaReUdznw4xe",
  "key36": "5hoVZJw5r43FW3b3fcfD3gWgQ1NiqaDti6eNZSZYDcwqmPv4eMKCi6mbHDEdo5HyrusFioAznwmRu2YmrJuacrjZ",
  "key37": "qvL16rtKHScVkDBGteYgdgxueb2F9F1fxL7UaUcejEk41jEgaaChLAqdK1eGU3ThhoQwavwa6wGNxxueGRunAwD",
  "key38": "bJLYzrhjeh8ysVrpgBaz8sJtaZ2ueRVs8x9zRir4peK1EXfwC9ART854QzPDQQ17pukQdPbXeVoZnacz1r1QHdj",
  "key39": "Q3rVfvA5QADyc6bkwqr6ZjU7D3o5MbAu2XXtcXqMkvTZjXcrjBdkVYrtjrdHkGGrJKWyr6AXT4vebwuX4rXD3jW",
  "key40": "5c3EUuY7jV1gCgK8GQruq4Ax1Zd17eSab33NqSyVaRM67FUH9d19dVgVKExTXpYxYecLLH8tpCs8FxiMR5EMTm5Y",
  "key41": "3LNcByYuBPMe9DGXgGa9MmzQCM1WUA4qQVNKo5ZRgaTj7sTxwHgFbiVnDLNWVuoFCq7qkUL9pHEdSP8MRSNnq9go",
  "key42": "5kXfKaBVqjNQQk1GkshGgpGWgNsWLT5QzNYdqZw3sLFY34NKZN8ZMMc1ofeQm3Ww4D6XAjzs57EE4RPuaJQgzpJo",
  "key43": "2rGqV4QZwfQGcVVd32KdFy2wJfbRy6davLvCZ6SCZstziGADYxMV1tGokUe8cKYPp9zrZ7YpWcrjSfxrDQbcyvFB"
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
