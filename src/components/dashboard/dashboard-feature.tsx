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
    "5uJsouYNxhhTTqcYVhMU8pRd6GsftiUX6ZygZDTLvgS2mX3Bq19adxTTZAAmQJiwtRs3jMUF9MGAJR9by5aWsVgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Con2TGk4f7M1SrWGApZvvnnpurW6Q4XjmQnoErx48s6omc2o5xNYdStJ6VoL2nYLCB4dMXk1jNNg5zz3jYKuSR",
  "key1": "2qKoF1QcNxcgHA62PTBvSaQM4UgZFW3JKM7McsUTZJE8EJd23Eas13f4THuVQo7ZgYXWjLyZnPhFahorX6RLXv4x",
  "key2": "2GQgNnpSf5BffKFTjHPNJ4cCmZqR91KzxPbPMrafy5aVNTdTBndWDRxwPrABKKQvbGfefRyxfyY2JxNu3zBak9EE",
  "key3": "4aWUtGqTa8xgphrETiJefyR2VusADjVgBX6uz5q37iGzkV71atYFszAZiVSY5WkmFoML8t4zj7Q7J6MEiHD8KyMc",
  "key4": "BQcvBKDkmGq5WPRsUHBxLUyPa96hd66R3ueip6UEmWpRPvWp7VfTQVHJgDdKRvVHVgVPURzzZPsuCP3cmXXnZkK",
  "key5": "51DmAe4iuoxry9E9UFbG9yxYNAPzVywkrHcvcAV8rnxHwMP7G6kS35j53Z4j5qAbUS4t35J7bC7zRwCACity3rEH",
  "key6": "2ZhDvkAdGL9c9tsjBmiWbW6MzDz6LYDG5ZRBmbTArcpca5C3TffGbiis9ncU9cdXJnbtieSCpFmqoWPngYCjhpAr",
  "key7": "zmcsoiuh3pMyqQpRTWnNcUmRzRawrPcWS2PVQejSjHfiaGrWTL8SgzNp8deirduBjt5GPE3GZbA8Ui7K9c1rb3Q",
  "key8": "49uXvtLC5zjfbVAsQiKmAJYAPKAthugd8EN7WE2AbyDyDgzBiRmMcKEnMAkuYCjvykUqYeqMJAtypxgTBoywrxcH",
  "key9": "tP2yS8bUJiPLFmMy2euuQF9wxupCXKob6M6TNsqf5TsHjHZJwR648mh5e6sCh8aLY16ouLiP3NnumksumjDWBbj",
  "key10": "5RUmEBvzvMZ9pNwqmsr2tAGarB7UriZvE9Su34vhBnLsTmApwcSLbSC3uWxQ7EjatbPGju9bm8FPmTNb8qCUrZ5",
  "key11": "KgGbKUoz4AaJpzy8h8CTk8pHurB89AeRBXYCPHhyeoe95s5MGnJFK9WWjzZDNhGxTQibeA6CdBoKexgxeStivQx",
  "key12": "5Kv9UWF2xaxXxUVrwGr3TkDe88EssjPHx19ZQvjPRSdRGdztDwdY3iZ5UX1SMdkwKBRFDND9apUoyvUQKNBrQBAV",
  "key13": "2AyXXa2N5RBNKxRdz1aHrQ8Ls6rYVmSugGkjSEUmooSj6Nw7cVbimM3iMjREkaSQ7aH2u46sfEbFZBDoPiQZqWou",
  "key14": "3FmGnwrDt2NJQXW1cgGyQ7EkEiB4P9LFWdMAaxsDS62UU8me4dUknW5g1zrobd6LveViQ5ScCMZhCwBWKpqvo9pp",
  "key15": "1DQhM6ssoYVbQstMY973ZiApJV1XRLG6kYz4FPrs8sdWKxnCMuCy1XfSaNQfNZtd6GkCxzR3EJvbzJdfCygYc5h",
  "key16": "QGZAGqWNXM3Xwpp8WiSTR6GVnvHHhGwKeYyt6vXkRvKu1Do8hmwEcCGJknCpuEUJJq3N61Ha8d8mFouB3ixt1bJ",
  "key17": "32wFeRZ2wJzsYGVTcPZK6w5HTsMQgVY7BwMyZ5j34gaD76YSanVps67rSys5VUh5K8eGCz1RidWHNVjvGnBg6GXA",
  "key18": "4T3RSTpk3o38zdCtTwjz4Et3GHphuxBngFYQ7kdz27UBfG4mmXnjmX7hJYtgTsWyDZc28RaYEtcGAZ6tpgZ8DpkC",
  "key19": "2uvSB7XLS1mUibkD3uhdzb4FbS5dE6DxGPvTBYU5gcNKbmQYKPxRLYAe9wcycvjjnNwoEuZh2mQYZLvQmWyNn31C",
  "key20": "4AoGPACWZxnGb5pqv6YihUxuRKuzW7wo6ZSB8iGCvycSxcgVxhKdfzkR55kUYqwevDubnTi6JahsrqoGQZ8mw5zu",
  "key21": "58U4Z5GJjzbDfSLjZwxC56N8mrTuix3rVhJGk3rasqd5NQEfZeBsDY9prmvWo9pva6g1fKTjuFmiD9Kzp6gbWjQK",
  "key22": "5CjQs5Sz8tLiYjqyBEg1MrhAHqxXFL114BCNFS5SpzCFLWpux1qxhooThASK43Lhv14YP5qy5Qyj66SuAkP4S9ro",
  "key23": "2E4Q7cpwstbmZbsCSh7n7UaDkVfj2MQXdyKDgfqrcPBG75TAX5Tzyrb5mgcSihbY3VQtK3mKrj7AfaHgdnB5pWbJ",
  "key24": "3RBB7WsUKnqX929DVZRgzKbp19yPtVi7uacE86zwnFb9tgbvP5R5bM9PMGeN1xvYSJ4aKXrrAK2J9gKreT3wmwsH",
  "key25": "3QNn7ZgeeLuVTAiaZa1BpX9b7ze6gCZw1oZzYMHpLhH65NiovyKiBiFVqipGHoBMhqDe8sk6jXYWxKbuWXwg3zfG",
  "key26": "4Ka6vCTmPCyy5thrmni94ifGztpAUb75b34wKeVxQqhWuLUzW2rPETqu42kdttPrU1VXdVYnruFb1Ea6sXDB8ogm",
  "key27": "CPM73uVUX41zVCo3DWbGy8Cqd8FhHms5PW7D3gjzd9sN2spZDuAuX9YxhUV3GKrVLog4WURR1sXbCKXv5LiaPSu",
  "key28": "MhggDKMbXrNPhSVBN5NtSLge6fFsDTjWBs2TsphUrfxhwZkmjJsBMFNAPuAMmEafPAUPZQ6mBr1gHEEeo5qvhhS",
  "key29": "4VCDPkZYDtaJgsrhbKHgH4gMyRAEx5Fvt7yeFp2NJ8Zdo4HWxBKD9VJsLRWv3o3giUXkKkYhjVXtcTdHHarhHmqE",
  "key30": "2ZdoV5C7e9sN9FXB5Aw5RUyXGNokF7Wk32dNYjm6vLYV7oF4mC2LYrZSi37qtNqc1McHJVhpA4dan5zND1FuAWDf",
  "key31": "3TMjF945yuENPHkqnGrJY2YshV1TPeUqZpcSdSQJhDSZZKUjvetiTXCuyXsHRuxiMqi7AyBwVHiZ66B415LGvH3",
  "key32": "3rPq9AiUrCFpx5KVnNKqC2Kp1QKKNwnmFkkMh5uLvuFxxZ2F8p2NfnZk7qrvzbFyaqKc9dAJahLTsj6Lu13FcsFo"
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
