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
    "3sfasTxHsS8dXbhRPRMkTBxrUiSzwLTJJVTzGMXz8bLd4Hz76LbgW5sf1ABUnyWB2k9JMMwxATVcCncp8gR26sez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PJHz8HkcYvyxkAK8TUQUgih4AQgpqVwkGPdGsRvbCbN9JKefPd4L9a1NoDR6CMsyZEH5XXEarz77t9VMn2bhmzM",
  "key1": "2cnDe3fMBKQHu9me3p3BJoQsXQeJF6qcMCn4e6RUruZujqY91tgWrGLZXABE2g4sMDK1EBznkU4AdR5L4wA1QyTp",
  "key2": "3TYTkvDXoQgEwvR1Dbvy4aQMj9MrT9cMggF9fzPnw392V8CPucqayMEw5UMcdX9FGr43wJ2sFFScrFt8HJNdhmuY",
  "key3": "4skfsHKPLknoZvZgLpMwz4j9Ywe75SnqneDNqfRfwpz3mMrJdc1SH3tnVhUsrDxM8b1qUnNA7pima1Wmz8TooTnn",
  "key4": "4Tr1355JHz3pzkAJcwYAtsNg6JAyMoAfYNco9cHZbMkduNVNRPifuKP6tXR1X3EY5Wf4LroAMghMEuzXysBFQz8r",
  "key5": "3tEFNSaCXX9kgasVfQHAgfNhiCZhGKdmL4ZHTdKw5i3ZhyeuiJ1y1U5BJfGxjzBQ8zAeCzeK6LZ7y4fZ4dnWV2x1",
  "key6": "LyBYJE7M4XYqXJtm9UF4uoVTBBmTWwYYyitkaVfCubrCZx486drESY13dLwLMjtiPzYPxQ3Rp8gXHRrzggrb7kS",
  "key7": "4BbqNEyfGWJdbbfRH6XBFkX2YyzThBVX4CBc2NvSfAbdQMAgLpBXq9D5xpjqMFVNicUHpzSzqFZcjwZfvuJHbz3e",
  "key8": "3H3L8QHidAEvBZWbG2Kqi5fDMKEBfjQrp69nH99jy6L5PcBPzwLNBYHoqhfvh6YehtApDMTbZnCmjFcHqoFUb6uT",
  "key9": "4Q8vzBPCAUf1dF7rjViXnMwwtFuSLNhxDL5jSrnrpz4svnKPDEwS2vZgGReomXsgs2hX37U84KS6cEV7rPp5uWDC",
  "key10": "3aRmrcw71Gbn81PMrgXMpbFqQCCLfbcTWxrFZ2KSTzBLrKHEsyYzTHXuLNC285rMkvfGf18VnCW7QAJj9vcsBg3J",
  "key11": "ecQWVgWYuZ5sRUjUKByHpvFdSpewi1BH21k5TyjGxSqXA8fpfFknHqDUhpfWkwk3fs9QMPS4qqgFJbGDZLmWCiu",
  "key12": "21LzZJ2tRCJrQzfymZKCgu5rkWPa9r9AXK6hMQtzM3K13yXjMUrMMJF2Zma88FbqknBe2BTKUGQTiuDsiU2GWEpz",
  "key13": "2qHbu6pFTSKxGGtLf73w3ars2uggfr67fQJ5n5VfPNfZafARbEAn2a51WHmn4zarzG5GiwYRitSMKBzH3jD6AjkM",
  "key14": "4FSkVcydaa3gDdcMbV8m6vJJowA3fVdNjr2NMwdinGz1pbgpZHS2PdXqcGT2CzyJBHPeCDQRj8ePZsnAj8XgQv26",
  "key15": "31ybmF5F1KZBZ8rTwfvVk8jK614n7CJ6pm5hwRaKWatjg2bJqY3N6PtH9CUbkvTLwMSRSqW3AB41pS8MjphACgGe",
  "key16": "38ZiCcPLBqixFzmdW8UmdzEBXnw3S648aR8eSnc5ycFm1fsLwXvSuwVo9RAtHVq4wagE6WJruEMP5zdz9uJLpom9",
  "key17": "5tkzhFL3qVLbmfsi8QYVnLR1nZobeYge8YjHnNwCXS7swNmPE7xVrWx5bKn3YNxk3KQ9cvXKcUfbT78wizMR5Na8",
  "key18": "3riPXq2sysboB9tCnm76FzLFUMEHoq6JEEZj2kJB5CZE9E3uikchxKmCQJQc8ncYTEyre6YDtsQtJp8txtUHDBpK",
  "key19": "2MDYSWuUczci7rxP6E63x2fG9st7crm9SspMnvSKs31TbNVkHEP7axE92rfAxXDh3Jya1skqUxXrj46RwX35z9A6",
  "key20": "Ys7KkjUNxWBqeUPz2zpKv6giuC4DERNow8ms1LWyCmfE9StfWM5W2NgoMefWghdXwp149uApVY3UVWqcdwxbHTn",
  "key21": "3UM2VH77rXDyF6GZYcHqo5RRuuf2S6dVi2aBJU9v7Bj1HSMS7PQQio5CTg9hU5cFVW1kow98ELgFEGWrakD4vjLg",
  "key22": "5nqKcNygPq6ybR1LHRnEdtCgebjyVfUYLTE47qHv9HSwjQ1ZSZzgaKaaMZuR5WQu57tBr2VUW6fmG3MUkgfQdVE3",
  "key23": "GiuSQxMzx1UAUf7u6WnQhuZEQbngP1jwGkJyMLpRGhoUwV99XBnrYULTgaojDYU2VV7HZH76QdpwyHjfep1bwg1",
  "key24": "2sxseypdoZoEHG11yftkTCabm3B3TmHN3s1uCkii8vhf8vG9cMTve6TrLtGCfGS2SKh4QQi9cxT9gWxUiQYY4cbG",
  "key25": "2JKE2vFcVsLAjVQFJps8NqSebsZ2aSmSTScHU3AHdjrQTvqeCLp1NNZz4c9T5r3xFYj3JphXKvaeovZYzRzjxFeZ",
  "key26": "3AjeUSRodzUi6ikci9pdUcSV3g7jxWpK1b1ebxBP4MCmStNgz4wppLFMmk16HTLRvaYFvRF6Rm8SVRkCViNi56yX",
  "key27": "5YQBmtmESpN4p6E5cuWDarzLRFTmVK4FETKxzUwjeKNs8L88eVEuNVUBAnKcjvXAczzes9SdAmfLU6a7w9ZLSWYC",
  "key28": "mk9Jy1fyzdsaMR9GBHGsMFH7NmudYDLKt7qSyXreYstW5DQTNFbWrLqyzSX29KFjVfM8qGTk5SmckDLzavcMJjQ",
  "key29": "3E6V4szE5GSg622FuD7oe1K6HqAPmDHy4bYJzE1rSDQwBzd5c5dSsqwojA3ArKpcjE1X1GKTjyWjMh3QVbKVbtwb",
  "key30": "2ac9weYztEjBZPNcndXX6oTN9Ad431bzAB2Cc2Sbw5iAWHAz4w9NjLsa6QW9Y7u2tVhH4MfGmqQBFXQZYskRGxXt",
  "key31": "QrBNHzQGrrigJdyUbUtBGTp5kb2pXNJMi5vSLVdnoLD9r6XYyzmH5SwjJbrU5xkyFAfD5vSjPAgqAV6sE7p7VgM",
  "key32": "64EZMgFZnetenmAjE68ugHeJCTBdurnX8yErT5RrN4QHiyWqJW8u7uWMXCSQttK7i7K75vWYVR5pYC9AXkw9977Y",
  "key33": "S1E58AsUPsVNmxxySPmXJWZ6nbVLjYnRRaEumZMHhaFDJZ3g1ZdBh4Nrch7qw6WZiq7sEd4VgsV8Arbr617L1HJ",
  "key34": "29TPLg8NsydsL1FaD1jfjLxaZjcZcfonkh9fqhZgzhrWWyvc4DWZrRXZonDGbVhfxryLQtK4VdXkw23qaReb98tT",
  "key35": "3b7XbgviRWVyESTMTLHQV43TCmSJ2mPXzs6z4fZbuiPXTgfGjkFdTQqAf17t2ftTzruA2NXa33fPsafN4ThMdygD",
  "key36": "5FcXvsAM7K7D2MHwAQfo6VG99w7dXyzcJJokfvb5hjKuA8FDASskZcEaNB2LFb191y6DbvDsDwQ8ccUegLrN41kE",
  "key37": "5YzuCPAxidfbzWgULWTKpxg74iV6ornPd8GV8cimqxM3iUQhcd3aqENMoahWj8FeXRyYmvH89VPR1EJkNa73SoF1",
  "key38": "2jvnH5XUDe2WzjHoWhkAiRLsCGi4MP6rT7sbgzno6mp9KBDZ8eSjookSRSwtCUEWyihYRk5DJfUaTCkDkUE956o2",
  "key39": "4a7NAkmuhErCatYZaqj1tuBWdS8QCgYASR4vgFD6DvdKjCPXL1S1zs5ewa8NNEmcKAWYxXoR4App6gJy4zZ6N1wa",
  "key40": "4TT6TA7VyXhd63DsYVjnGqYUqHbAnUoF5pzwqfLZDp96PWmvUvMVqZFmRCndCqKmopFVaKirYppAy9pACpJRTgp5",
  "key41": "24dbkJKqDUzFnp9uR44Vs8JzKUWmWTieNreWxiRjQB5m6abe4pchUb4Eq8ECPPmHTHhHARY4oUZjk7SyqKfQbKRw",
  "key42": "ren7PevT9BDREY2KoooNa6nkJff8Zj5EkbrGaLTqTTTc4KqCAHakgH4Ua25S7nEYGqrbH7M1DAPvHKhMstNSq7Y"
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
