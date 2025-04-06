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
    "4dTDtix7FyU1NhMKTFxiYN99bwSetnr2ARyuxnGFmKaBKAgnUuk7r5Xq2YT18rZTRmFgZ6NNUrYej4yYSHfHwSoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qDkrtuqoCiQKaxy9fz4dZq3DN2uiAX2xUY8W8kyrTX1NUZ3LssUmXRtUBkySAeFCi1VkCUBwaVaAKxcummkx5bZ",
  "key1": "4zdZT4EBaZLx9W9X8T6jnM5o6aS3APkx3mqrmxWWj4E4dcqtN7x2mQrE5Pk9hjy7euRxyGULSA44uDidUwxgc7ny",
  "key2": "5jAzDB5N1t4JK6zepw1J1YPWe4BCKcbkEWrXoGy7qycvn3uwjLxRzC7BVLCp6ra3mrhvqNxLYhbs8j8wG1dxmB1n",
  "key3": "5RnWgx9DT2fiooQt8ahftQdQoeov8mjFstNJA1PUcMKVJzjFJwQkXw4hSRjPmeanGVhSzeWWZ2VHVB1E5DLwBNcH",
  "key4": "hdsGj93QTCUHDV53Uyi1fK9FeDPBSjjGErRckjTWdUnvBavWfxG1ffRps4r6Fezz5AVfSCh8tASF7uGRaLYRtTW",
  "key5": "5Q99YpRcLhjHGpMLVKjoiaaxLRXVTC9HYrBpRbwErTNwc7sKMrLWyeJqaeqmqzhunxq6BEvhk595EuaUbc3rbu74",
  "key6": "64hjBY5UMwcFvfWw9GapWGFgwNZAQYbM2BHstwDsiCF3gcoM5prwD5m1uSzCz7daW7M247CtiEKTPrC6NPDrmQ1F",
  "key7": "4sCb7j5GSgKyMkeuKjuvZmnvdHgAyX4JkdeyrCUHxxc3iv38vLiiyHxHik9G92fuLxndMm8N7RMxmAB3Yd3qDjoR",
  "key8": "38fMe1LEixPnUfvzMAcpzEGdoKytLH3MmTVdrNv5X18YhmBv37WHfiZxRuchRjjfUvNUzGbCfMQVbbR4H2H9LYkB",
  "key9": "3MgNHTqysdR97vpDBjZdAxUEcwXCxWzU2kt11hHZuSzXGZ1Zt3qDpV2frmjyzPYevoojg4VY9TeG9NzELdtrVhXr",
  "key10": "2Kskndy7NA7kZipF5AXxjMjcCjMKmyzPSzAbhu9bMN6Jj7i1Foy8FGU9Fe4FnhoV29yZGW9GX6djKEtLpGzoLAbo",
  "key11": "5cDot64cP57jhU9oFozRq1LAYwkEptgmYgJ7pntGjmy95h3yPzvRujaUm8rXZAtq1SjEGQoF5HwXngmmfYjmkNQq",
  "key12": "48EGr6f7ScQmMA9z3zWbmR4wVcvHx3zMFAxdYaJrZARJpuQKEJqkdH5FmKYzSH5oQHZcSfZUR3dbPJFBdnDwCHLF",
  "key13": "2zggNuYcYBj1nAGzSrDnTDaEiTyyMy587VbHXmqcAJo3p443MMGD3bqMBKAGJ1GsQnsB8MzWpUJUqUZ5t4QCz69F",
  "key14": "44BBmBLV4jhBHvCWfAXyhrPkM3uv6YF2aBu5c8ZED8jWYQFbzCbMqjtAokqYm2w86fS6LGtCVwJk4qNs7j7DQnGe",
  "key15": "gmRBt9mvtHSLnCfV3TKPb1d4rFqA3caNFYtC4QgpQJDZGJajrxZp2doBoY1cfswCnEc4Vg1ftJe8enwNHuQzB5w",
  "key16": "5BjGcVJK6CiqwPe5Uo7fVy3JxbsmJextRfY16qrtsrtVUwcuiTYoYgs9JkraEaBz7UDmBpuxsnTsQ92MRoMUpEz9",
  "key17": "45vDHZ6rnJ2hF4eCxEtd18cqbXoQUNsJANo3bxiz1xKiUATFrxKVd5zJsCyn7bz658CDEvkxMHaBUpmNwM4ZGSP3",
  "key18": "4LBcRUKeHvEGc5nN4trNgHXt43McVVRjmMredxb7me459cCztVfoWpRDEbmfYPBRRJLtjpn9trYzERh39a27bsgu",
  "key19": "66WzZn7SzqVPBsN6f2a9X7fmLGhzXz1Z8XssqLZaMnYRsHwjmnB1NZP8boM4CeK7pwTa1yhZrkyfd3ckbDL7hKZB",
  "key20": "4WvTaS5vPNB4iPaJySh3YCCJn9funoUFjRE4Twe2mxSdwxubpTNzA5MMmjxXsduKE5wjm6pFXw1z7aT37WNFSWq5",
  "key21": "4ruRLGvT5Yo1oGVNdBrpKf46PwUkiqpV6wEFXSjTPXYMESUQamHdF8x567mYJe65YXr8dHk3LXZ2e64dpZtrwhsW",
  "key22": "4ojtDToDnCExFyTvgBnpkoi64b8wjTaRGamDACNuU8TFwg1Pyti74oGACrwLaCmSbonuzzD3XyrepvYS98Pex2dN",
  "key23": "2AdwZXx7AYnwozYzNcuXhwaqNw5Msd3WFSsKC5yEvDF2m7QfkN86G1jmCvCmrFspxzyWJyNSBt4hecUJWnbZoAYe",
  "key24": "3ZveyNc9kYTyFdMBokWAbehXFzeVzbrAwoTVTk6oAd8dAdCbZt7bfd2AwrpyxXHhJiC6gAHNZAEBzqG2o1UHsKPq",
  "key25": "2gSqsxUpuDdHUAiv7L8e5ZsyFfoiLDK9fBBRdUtyEmWWGCabgAha7r5a6xHhrqTziHi7m43bnugU4RvEwNyijkKV",
  "key26": "3BGFFa6w28C1A4CLaMpRVLhWdApdMW3qEvbdiELgamqvHJNmTPgohuCa5AUFWcfQnFtmPL1X269dYG1zY6YCR1BQ",
  "key27": "F11EYzhkVYGWVDLQZbWsxjHLY85hGVPs9fwEtU6vZoFFY54zDAawXapcYTU6k6VySmV3ocivVWAWE3yUwKCLEPX",
  "key28": "5nRTgCs5o8Hx3bcHpJZE9LgQyQKmGsHHuikCaHeVj2Qq3J8kfwH2nNneDzHCMo2p9aXYrghkd3Wr7SJjfDsSXYdm",
  "key29": "2Dm6UZ39zjc7CvX6SwAyLyPCri45hWkAz8gGnk5UHfpH1FyspbnJypXpRQqiMaf8czc6i2HfnRKPiGTtT6QNNnQY",
  "key30": "3CYiqGU5y5Eh5eh8vCL7To9B25dx7iUbN5uHiYo3dxhfHBZFfAvxu15m2unNWUgokxB8NmvssLs1zUHEM6k53gdq",
  "key31": "4GMUCV7FjLTv9yMGn5PUub9UBeFUNQhMvRvzFLeSRY2rN6Me4Q5Q3ey5rsoi6za1hbJ9zG41zCrVo8uq1QgCgbUQ",
  "key32": "2iLd3vKFuhrHn9VwMf4pV1bDjn9cKgqr3b3bJXykrSp1AbNMehSD3KASE8sfFKz4uBvrxT7fx5AsNafkoxM9EqBY",
  "key33": "2GAbu9sAAqBf9YKX1q81F83ko1Xp2CKutDzypWdwyxgtez2XSowz3uanPUEhnTkEqxXeZ55tjiGEEy6wq52bRZJK",
  "key34": "3kx9zUu6YSH8doNTLJwiZ4q4aHp4Dr5vUgWVtCHdEMhcpnNQ9h2tWK4YnRQoT8XvrUyD9rAJZHJJJTWJun1uFHAS",
  "key35": "2MwanvhMsjZwuPs1aSDnGoG5BPfRCqgm5c1hCDL4cqnEmyNzLyyXmsLMwuMJhdiZhjvP9WEtzzKNMaUveZgnDi1h",
  "key36": "3GVkFPnzZtzzvDNiiN672V3QDQFv4Y2eyzQWEgtCZqDeQb3L9bi5XnkKoSyjWbhnC1u3dqV5pqRAASuKn6RoHy9S",
  "key37": "3w6XHAod5dw1eLZJWLJL276HReuGYK6f7fjHmZTbCCxmb1J8dUXThtrfWgaVNTfPXytBuJcb6qZ8f2WkwtNFEmSX",
  "key38": "63Rrxm4C6cDeaL5rc8iivQKJBXRp5ZiM8bwoC8i9oEKTb8Tz7YFwuYiSts1iq11E7uiZ5YBKHCe3hC6o2VxSM194",
  "key39": "2YfLU7mZ9udY8TNbn8Nv9Fh8gt7a387KRqVW9DSwJZ9npRwn75fMUzpQTGD5fQCX2Xq3B4Di9R47mGMHbtFsu1td",
  "key40": "v7FXdK33Q5Jd76Q9c6KggeALAfwgtr3xhhiR8xTFycfLS2HaWQYw13EyJ2kj1PZr927DZnHkpDLXrHf7g3NDcd1",
  "key41": "2Rnk7QBYyxSbjbMa33LoFrgK2pFn5gKVfQCbb87NQvM3m25mf2CpCHfmg4NXuk8gTnjm7zH77A4b6QLQQPGPcNaf",
  "key42": "2gzT28oK83imVvnjjKm6dmYnAusSqEmhnGQxPkuFTRg73A5MpFvS6kamiHjUtCQdTjksyXsGM85xPDACj3HLyfMj"
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
