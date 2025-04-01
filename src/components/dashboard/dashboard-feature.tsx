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
    "3uigMsdoPgg3uHCa79Edqsk3bzzvHf985t7m7UaA3Vn1XFFvPREMoHYTXTDPXDAMEBctRHfhWdiB3ur3zbPkj8tD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xeFZqHPKNcgCgJr4nXQdZNF6WM2eXmCGRL6KFruKbv6DhGWmARF9Ee6aBQLrJpUmRWWBQ7yDpGYqMY1mVMGcvGp",
  "key1": "PR2bkfaRb3tPTJ6T3asSTogp6evFWCnAVcLUixwsw4PFfscSfPxn9AvgghAVaD6AdLq2bcRxjwskB1EBGqyQZnA",
  "key2": "4MuFiax4BavmBqXZmQMAbyMWkTZKtvuLGiR9mbiJeBFounoeNNYpWCYbqsZ9itrGc2QviVhtm9iEWtwLcrK2pNBz",
  "key3": "2ypD6a1kXScAanwBADt4JGRYgr7YmbtsV3tLk6K1GsRUPbbAmKo6FoqRdMuYKYLUTqC2NwWS1mMHFQ91MfyG1V9",
  "key4": "5AjadtekL8LQFuMi39M9ANAW4RSfEFPsd5aVpyCU6azofBjr4wRG6U8JhztsSeQ2TxrNmroTzaEXNV3FDD8iYw3y",
  "key5": "3MgzrH71TvKXk742wuFRvkgXEuf1JKRpzfFUQbi8hvP77kpUN77EpyipqYp3P64o6EM4R3hVbWsTbNeZmNaDuc38",
  "key6": "YAd7Hg1KgC8HPYQK81AtFHANX6PdokAQoE2wMVDhUcDKSbGhYGHPayX8jGJeUScg8N51GuZTqzEaUvMAhXLEkya",
  "key7": "3zA22hxxHgWgyP54PCgD83Na9boofdvWUqQGoXtXht3o8sVTLe9exUuCVwjcQpam7paKCTq7mjLTY8ttM4c3wP6x",
  "key8": "5FhsMBW55TqsP8F1XpaD7dc58k8FduWS1YDpBLdu9Y7nH4qQevZWRwYmAMR1cFzSKCudsDrLCXyyfgqGXyPtmbQk",
  "key9": "4JMUFEw9nUd5K2jN5iQUfpnJpzLBpeVjpcDkDruPhbAXHX96S7m89Ny6pxK2EBiPhTmPH5re4HgMXMZ3hfKgBFqW",
  "key10": "5h2VngVjxU34QJCDi5g7Je3bKM6G7EEfPp7Y3J3joWPfoSPPssGwQYPZFv7HZhpvpGXtSCEjoaUaLd2oxur9oDMw",
  "key11": "3ZALuM1ujGQ91LtucvBNZX7TJkuS9WrtuuGiF4dim6r7DNwBUuk6p3CtkgTDej69qaPxcUaHUXJn8Ve8ftYDepKv",
  "key12": "2eS2Z4QmSrS1LnRKGRNvhz2gjxcKzk1LdnCgdKBCiZWMUWqJPUBFBhX6LAkWr9j38CDPNV1kdQGK6bkDpnXmUaYW",
  "key13": "2sjiw81A26c5Gw97yamU5isucjTyQsoiXWqxtLp3NokzQwNarkAbLtwm9xU5aUv3ThAgM5QWNGrLTti7h6Wkwqaa",
  "key14": "5AFMPubuNaazH19e3LUkx5yEn8w26THHrb7U3D7Sj2vuyTjMCB5PWnxFU47vZySwT7uJ6FQpgvo7sPWiYK4CzG1L",
  "key15": "4U1VuuV5Qhcg7ksRHu4mDCK5xCFV1uD5Wcskmhmot23jpcx7jVUhHnubigKqpyvtpzeeZAtakCkzWcoz6TgPAxmm",
  "key16": "L3kkU7EB5so5YHdRSvJBFoEVnoZfMxxVHArux7ogqtEBD67bC9kt8C6AQCdNy9dkVR44CRaeB1r2XXgnjQzjFuv",
  "key17": "nxU77h8u65MfdrJ1WkkCzNDwjRm5wusFhU7P6rE168TsCAhFb6r5yFLd9Jrrahj7xaDEhcRRgnzGiqoySC2gx19",
  "key18": "PHTqk9tvmGbsUVehvXA7bnMVhPjTvGRUJoa8jic5jHfgbhZumEi5xrwbWUuHqHLNqSzNGh9ZfJF969QaE9gxvfG",
  "key19": "58YkNMTqg3yaC7bHYb93K8vtvxcYs2hc7kFAkTkXfxdJafPHuDSqt4AePQsgyTAxafbhL84QazZ1Ew48bTSsQwLs",
  "key20": "uPJPsdC9vhT5BSxM2P91mNuFtbJqX8snmG493vBmFGUNXZYND4XF6JoWLhLCRpCtYs8cwm6NupKe6Eb3YKLQ7mv",
  "key21": "4REXkRtMbGodu5Px1wsXL9wzZPiZTZNiFWKStP5UguqKbFHhvHnnPwLUbEigNRihSfnZqLhHTg1KKYHUYEbbfBTk",
  "key22": "8QvQfvsh9sLepMnSVZUqaTN7xrHJ321QeeJ39SqFPZZRyPdwpMFLtcyCf95RhNen4PeeRJS7FMXwTEa9SZkvtTC",
  "key23": "3HK3hKZLCB3NYkSXEnBn7HqT47An5beWfq6UeWh57dp1JBxhzuqWYnvmYjZL6J4pk3emXcXcTLZqsMNt1wKJHQ2y",
  "key24": "2B5UDXuMcPSywvXXKrkn7w5fCRuocY4p7CpNRQ7xhCCEdyXYr42nZS2YxwJGnMW2hxkni5cjr9bNBqHXa4Z8u7V",
  "key25": "3TS9GdYwZsRifVWXVYGwqFBaQBhNuE1L8fEXNxKQydpiopxf8AVmA9re1Spd8iRZbbY4opAJzj782Wh5XLw1HGqw",
  "key26": "wv4udRcTqDqW3DjE17dKxcUfVjS51egyhcSSucvhtMu8uag4PQYx36eSS4P4EKwU35ZwjciKt5TTMZsDdG6z6vu",
  "key27": "3c5Da7b1xW8CrPV7yAqCosr4rCLayx9eXA6Uf2GQWGW6c4FwJMAEuDwUyVDaFN6LRgiR1UKyWL1W4SECoGFKcdMP",
  "key28": "5aDaHTFT6ejUr5T6gfjQfMnLY9NSPm9zEZZxZsrR8keirbXgqMHusCCBky8kQ6kDWW22BVaeYSHhsnJ5SqbUehwF",
  "key29": "3xAH3E1Lt2JXQBR9BiQLzjaN956XtQkVBpYPCC6o6msB6boeL8YC1uS64yqh73Y3Bq9UCRu5T1GA2T9CVQ5zP6Re",
  "key30": "5MfnxH4wsq1ReAj87fHxBu62o2rWNvRKATRa33MCEdf1xjcrjp56WCffb8Q3YGVX32n46v9HnPRHf3ZawQx4onxm"
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
