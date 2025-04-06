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
    "5iut949L5ig2UB9Ysg2WNRN9z2Zr7A6PSGitDRbdg64ERkQyX9EcuWqUmteKGNxyCptaKnM8xxKAqH71ZsYC4E7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NvursjrffbNsq2sRRU3C5vPphXf4DQDnaLpGQhp97gnNeWQA5JFNG5KWh8anxx7rp1q8D1R9aqDK8URPnFeVjAv",
  "key1": "58yw2YvbLjkCW8vKVtit8Gt9gbDsPWJdmt4gFSafseqjQTbCRKdrVrKSRVbzpTV1Hdr1PdDh2qVSLRvdgKFrkf2s",
  "key2": "5P25JLkrQUe7W3SeR5xBVNyS2T4AsMRbxL3vYY1YZMkw3whxskoaatGhCCEpsLB67CCKMRPsvvAUcH8drq3XbkR6",
  "key3": "KhmC5bqKDMBjVqqPjxJV9WBcLPvFn7h61UjoEwhu4k5HKUAK7YaycFE6EoSvQ4SQKjYnPRTEu6WEuGZGcNxtVyL",
  "key4": "4DhwWFSedjYJdLDJTHdqJNBPVEHvTmaMhRCatqbXaek2N7vqGXQCQkvsFtZCnzJ5yFgM2MjDuqXtniMKfDd6uaHn",
  "key5": "42XBhu3eHnLAY2ZVd8BjYS8xpHmeAf7FEGFdtocxfFeJ6zssMtFpL4QipyC6u4gg7MP9jUVaorNTMQhigSaapoAR",
  "key6": "2mUXbp3M4SLAcJBEBw5hPfapdEVC6298NemjtG3CmqtaV5vLYdr7hGoG7EqkfYQjZN8SgNiFtfnQa8qfKvwqYWzy",
  "key7": "5dLeGL6Ljqqw29LRmjd9SXQtyRrYJpqhjSFWCovFEoYBQoXpCuyH9yW1bSDr8cUTZH7nTdYEeYchHhRX9aj5AqUR",
  "key8": "2QtS3JwhPnnvj2LutyKmFmoErmiQ2HE8UxTcHEqdK17AjWhDPrdJ1xzP4uG3s5fwNKgG6KDgixv4sWhBhZP9LhKr",
  "key9": "6wmjVcgoL4gvzo4ZeHr9zyXDnVzdg3p3muQHvgQvuUQaJp1PshkbT2fjZp76NYq7umd3urNmiusgBWDrzw7bitv",
  "key10": "5RMdMjCFQhH5mPwvxCjBZxWaXRsEgHqt31kCfrMzbzUrUEnJ3AgtNQXqVT8S4923ooaW2ionYrFcoiaeTpPPzfyR",
  "key11": "5gvcofCa5bvBjv5BPyUwnMymMXwzrJWC6FMJV2MqzfoNNLWD1hJjVDg7FGvGcDeVZhJVXYufNFem4L4KZPxtQS6Z",
  "key12": "2YXPDc56YYLTggHbdiMn3dQN7SP5CG476tStWTvUaEJVJmuXN3Y8T3tYFTM7azwUkdD1WHDgWpS5BmPpvxSjgK7T",
  "key13": "3o7sKprqdknM8qKXv2DNQXjFmexJQp3sYB59ottP7doyT9AGLr5HiZYALhAKjcy6nTZvr9rAmMhyLa5wTZdp56qu",
  "key14": "2ryBEMxx2wAXFAnwuJo4EGN53NN5Xe6BjupcRqL1HNPjD35RsNNUHv27aEC3gMDYoGeZBWzwDBuWtZPWRgA2av4L",
  "key15": "57YPaRSXf9wjzF6vazXgse8UrJTA5FUL95DiEQbxM92a9XiuKpAHp39diGEGvdFYfpiu4Cn6gYnbZkybkQTvqaW5",
  "key16": "2EnrgWuJKtTXdbSvf6aeR1SJ5tR3rTsfcSYHKnZEfz28qwpq87ScSgQW46TQZ7491J5pFpAfqqX88MN5vGLki229",
  "key17": "4qVPREANJjKcNGpJmAS4RHG7jT1So32gE4JKVBTAfhhwMPYGGapzCkfk7zFqCKGHWrdQRjrEUqBzHHzTG9U29C36",
  "key18": "5bDFeghUcJwDDYEL1RNLAbV2KVtV7gC7P6Lek74GYJacZhN29GDu9y2Btntz8HvrzooQsNiuYYghGF1kt3P3bJiK",
  "key19": "5U2FpcgUdfm5yQpYq2aUf28GDyY1HaEXATQnyNh4wiJ1GfjRE95hXH5ecqwTzEb2r3jsv7gF9EFe36FbZrY7vaxG",
  "key20": "4XipKV7iJxRQwzKoX3AYeYVTJMTYKed1Lkv1pBzAx7mcgh4XKGJkJqWBTv5ePmK9nsEUU7DFnVfiF4CsB9nUeAK2",
  "key21": "4BWkJs3n5Yk1ZFavKEfJXWdR5DjRANz7X9KKrDEbGeVCHMLaeU97rkgx9dcBk8jPzmZ88HUWy4GCdnWDz7PTPA3r",
  "key22": "3fCPEbPsJWNxsQF3bTEjKnsuj5ePprGJ9S8YfxNn5aNW3hSS8ZFqmCU9kz4sSGr5HF9uuRgiE6LkYGcxQyXcaNR6",
  "key23": "3eUhwFnq2Xd9k63EEACERRfAZdocqsoaYAUveof2zMN2t75SPpBpoUATwfbmwB9LsrRzS1isrfGr9zmhTmdsRuD2",
  "key24": "3yqtWQykwP8X6pka8TG1i8isSbaoHdZgiZvo1jFnUPryKK3Guy4vY2cDTohj4e38WnCTrDUSgfKc9ur5nchnaTsL",
  "key25": "3HfjinecnWVrhTM5f9jKkVnB5eWXrE3cWtFG6mxdrvoRz8ohnPa1aWacRtsSzCuoYHVYk3CvPvtcLC7RihnbedHV",
  "key26": "388SHvNbJi2HHQetHJWzFaLz8om6JsEdXJjdTDfutp8nf1VyQKCbojioUeJMnW128paRtjuMCArJXR7tKuSJCBUD",
  "key27": "6EZXoMTnyjdvBKVzCiTZ1sZus5K5n2gjgJRMKTPUeFnb8yPJVcCSTSoJZeWUuXRnQEQS1mAXd278vhmG2oEbhVq",
  "key28": "2tZrEDTVJjknZxmngs6E35YSxddWviBjnQRXYrUCaDrC22XMFHni7zRJn1z2LzYwgCJdiNXaKhyxfReMj1twEQyN",
  "key29": "2TyQZYtM3ArfmvGad9R1pg8v9sCqh5g5TXXbsrYEmkcWX78s5JY3nmxd6d3gFj7dbACBUKJ5YEorUy8V52nPCBtH",
  "key30": "48HrfHb2yKZKvgFeozG1RSGaPBTUD5HzfJhNFSZD6TakAjJcQadMFGkenYYvfjxr4YonGoozkTz3aHPLATr5SbQZ",
  "key31": "Bvccw4EJniaBxrJHDtftB24qS4YTSWFAHe2PoeqYfq9kr1VteQ6D4NQJFk8NMZwkhJeUAb6HhRtxNejhKet8seB",
  "key32": "U5FXkHErg5VEeH7u5KPQ4R4MSmQRhKsFifZh7gA9LYTDg18dPxnBMtN855zHfb3bcrCMhT3LWxrr14pTCUijHHE",
  "key33": "ntHKt8UwYaFTkJzzDEeJCZuV2yGMDbPoKT9MT8HkEbtonJogZaWBgdRYbKrZBj67MksYaFat7UPjpJRW8uR7a3R",
  "key34": "2yv39BCvHrqUyEYXqwvT2c39EwE3JY2rVNgVVddQZTkorqp2Pk2Xf3N2SKcJjY8BASkBKiHEjhKzDyidaAeAm7Rq",
  "key35": "24qmVrLBEDbF81jsgAgw8Rua2HbfPrToae5YBuk4LYiGzPGEKnA9EQzGvr6tdabgMveoT5CVNE3Egou1q8kRC8Um",
  "key36": "56uC4fFpZmwG2p9X53pUawuhKLuYgHZexVMZe1ZLxehD2aoBK2qx4uPQ89CZyB1dagQsnB3aUDUL9UUAKLZZxcgG",
  "key37": "36z7VPq5qAFWChteyMq9aUep3QbXVpEt6nePszv5QvB3zztdpUFd8BaDsooeis7An2PCkzmmJUP7wSfbJH4KAeTF",
  "key38": "3KEXqyW7QGCMLzeXFypHwotGQT1dyh7TBhctXSiKBPmbaKNvPKk4poQv2AGnNNESEeL4atU2yfV3yppefBETSE9e",
  "key39": "4XYQ65pbJLSKoSD65kbdt2J98e9ksA2HhGCYUgCYmjnXP9ixL1TZjqoiprU6uLjHc2zGpBuMyYGxadKtP91JWRae"
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
