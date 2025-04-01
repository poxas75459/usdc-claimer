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
    "2JsAYbcDShEnmT3Db6GSwzzreZVYPR5E6VsY4KFWD9nEfcDsQnEwzVn2PzVb7pg4DQtyNwA2xiKmrhXgJCEDbC82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KTikj2SqeHHKYbFvF8Ztu5ASvnTTwDwm8idX235tw5FCARzFbC2ZAUbTNUXBsrPMzaiaz6YBNsPTww1FQcGd6Dp",
  "key1": "4soT6G5u2GFm3hXxTtqRhU9Yn3pUB6Z3iazGVpMn6sR1awXPcunK1JHQGCbLYQuHtkWLhpb1bpGbXzWcJYjpgJbS",
  "key2": "52wXnbjdMRUDCxs6Dse84Ts6bJbMNnHB2tYhcj53DkEa1CMdwi7P9rxBLDWFyca9yfktZkvwcL2YbhL2CawWqu2E",
  "key3": "5i3y526v3ZBJpxCbm8AZzyb8mVTznKb2AKstAdjjEvvp3QJ6YSf3mMdBFNQR7MdJH7AAKrNjczJCd415ijqrPWjv",
  "key4": "5y1c6FDGSLimrsCRxLgtybB5C3R1EGKnferxb1uVCy9Jvw8tk5YMvrvUcc59UQraYhsbGYzmNavZ3EYn91tT9shK",
  "key5": "3zss5TzDjyxNG1YePEa12vjmkBjikXiX4eMrGwPcRBQdrhJPu8ZxM1cxMT3VA47ZfL4j3sL3tFLzhQFMj4RwELJS",
  "key6": "uGC8fEeC3JhoEVZcnVdriM7qDmpNSa2ajoD2QrVzh1wjJ9fY424zGsNzWeMZQtXBkkgjFMSf3YRniaxwF66WkmF",
  "key7": "3zMuu4hREBULQ9JmkmaYVGU3XtvNFyaSejzxAbYA315RXyRKKCvXJyuDnvdHih4L54H48WE6X4m6sUNGp3SsYSS4",
  "key8": "5ebNa4eUVZhwN4rkwS5gYJHFNSZnx8HvnVxqkESQkpwiegC9Kcckr9fK1AAVSUofhUN8rfYxYXKfxEta5z6g4Vi9",
  "key9": "U2omBeKgSxHZNdDw8DE4yaVfzBdwKEmYfVTqXWczeEcpvAxfec98DVEfXmvXSTnKHFsHXDQcWVEiWHkeGBW2GKb",
  "key10": "5tGbJBhDT7x3eMpyFByqxgNFp844sFZkcoP54vX9fZoLeFmFHx7SarUwDVv1psZCAV9zGjyS5dFL7bjUbVsUFd3A",
  "key11": "41H4TDBQxjNTzvseC2vrkdC5T6venjxy85139KDYTFnJskhVASEPmM3fM9wGed1GGsL57qMWYfyr97sUB2ntniGK",
  "key12": "4PYLcfFjUkEtsKKZ2ziuNuygKzkfEizLXDVTbR4sRmjVBHdiVqV8Y59vah3Fc5RyvoUndvU9V29TE8kxwP4AZCii",
  "key13": "4bRGEn3gwA8nnBRTU2g6dKtcBs2CpTtn4Di5uMTxwARCpejCGLqfJjJS4kJC2TQJEhzD64UXao7KVZgbNfzoHuD4",
  "key14": "58BDDMFfwBhNwsBiVz8jriiZRxtMbzwgoWDt5eodDuDMGKVLiquky8Eu2YBQ7u8se2UBxtPAHqt5hJTtCGe8z9N7",
  "key15": "omcbTrhso7bE5ZGfE9Z8gfnHVVb7gNbfK2xHwGU3pqJzgZdN9NstzNXFQYe9X3Ks2BXU4532BMVq3popstRs9Wx",
  "key16": "5oLSdteGJVdMAzHgxF7asw5SZMD3d52Ffy6GigVE9MwgEQGwutVMBoSKw7oSbJQ1QJgP3P3DPSuR17kHyT4Exewy",
  "key17": "3um6jFMAcje2otLeaSxswFWaFecBYqDrtPnvMcZjq45zh2tBNEDTHzWQ3aynbcd25Xrb7iakxH2ceaJQnjkrH5mR",
  "key18": "36vrptzpxS6pCuQ4z6iAamvy4CsuwbR6nHgPbMm2qnDBoHH99EX1af1zpEQXyG48fiQFYtxhrPUdUQshaWB3A3nt",
  "key19": "pjH8263BbRVw2GZ8hLrd3rqiFoBWeaU7yJpAK9Un5WiTfXVVypU1Phf23DbhbHzxaFMPA6LbhEQf6BTWf5HBkCt",
  "key20": "3RsMRJ7KncGf5Kcvf3wSMaxhKSVaarfpRVkdbH5tRvBHRBZXTwJ8cia4Z6R355hWXxzrn2WGJN1yBKm6BPLFVjSQ",
  "key21": "j5rCo8Cqy7pzKHfC9aT43mbUFoz79Xm9673F3ZyMq56qqYxkgBNfugy96D2YzdSPWmYY7TiYCMSrYHDZgRYw689",
  "key22": "3SUEKKmptoSSRZwHaCLc24hPw4ykjMDU7RFxMqeydTgNbMPM1QdJt4v2D6DvqYLC1cYAYUTeMWPiEuqkDGvD2PGg",
  "key23": "3nBDgmv3SrJNzZ6EDS8asJjVTo2tjUn9yxwzj4kmhn151TdTUFEgPKKJo4NaWS3d73oMEXhnbdCszQyeA6rQDhPD",
  "key24": "2uTD4ZMpNpT1yfex6SrpemCtkgA9tk6tPa8Vr97aqnDubUo8Ab4AtrQZ8wzPazpF8whShBBU9zUAFNTQTaZkEMUx",
  "key25": "dygbjkJDnuf49Gbtx7636gS4H85dFfs3iDH5dQMPJW2ayHJoZnaYC2DY1az2RCHUtdBA1EpRyWUf7H5wncoFzhw",
  "key26": "39ra5Lj2e56hfd7EqJ8rLQujaYZWLMyY9pdmdCdTrFyTc3vG8xWgJiERB2jKk8akLzVSZ2ZfS2dz7a4zsDJ6zJyh",
  "key27": "2aQpepJ5NtrPAXGwiebPqnnrX7Ng25sX5bvqrZixkvUHPNgbMsTaCjtsbY73tzvQYqzKJFz5BahkqaLmoySsQE7k",
  "key28": "5ZskATR5Bj65PZKPzPzTndG3Cg8cd4vaotYb7U6rbBBufGBAdks494NT3WFzwMam968X4PgWAmXR8tibdH1ss4Qr",
  "key29": "5SpAnxSDDi3F2T8RSN2TjWF11LrD9kMWWvuWbd8ht4PZ4mmxw5cj5r1uaM4zZrvmbBgRLnGA8gHq7LUygQGmLKHa",
  "key30": "4xHzb4NyZJLQjxWuWkex5LzK9wsCQ8pJWJk4uDFXpLjAosTTQrHvczWmEa4pYutW9PECF5kpoGfibNyGBqtpmWpv",
  "key31": "59E7ybAp4ueU47Po7L8zN7cqLRPbikgsei8LePmLDgnxJgAJxt81TMYW9BkDZR5swxr5zrGde1SeymPHkFoYx2iW",
  "key32": "42RtHov3ptbMYXUoBbDEbnQhZHEG6vSdtxsyB4m3gT4GYDb3yGtCq7KjtwaZM3BwACfRh6s1s9XmjbWofCGoYKcm",
  "key33": "4sUcGi5hkbyoV9KvnX1hQXR6KsAdjrqgdzy4xbUrBDLvMZL9p94zVMHBiV2WDo23m3nxTF35GNdUsvpuzKCTaJUF",
  "key34": "5FRs1AhkskrmhAPJ8cdaaE57SWPbfX6vYpWB5zuNq7xMFaME8Uvk7PKUVqmAvrsaF3hXrCstRr46vVPnz67pQi2n",
  "key35": "3aDiWBYf213k88z2hqWjPmfSXAWtB5DuW94VrzXr9QsUF8N2qvb5dznJsArxhn1MxwgQa9UePvoLJEsYicyMiF2t",
  "key36": "64aYhBfxqdCmaTaZ1hPrvEuaFQHy5QUgTSC6T3X7n1s5BceKETcjeYBavbFQdrGMc8ejipL2Grz4vmYa8WjSwu2S",
  "key37": "5BRSXRqMHKT3jyzHQso1Vb6PZmzNTHK1a8T6iufTiawxwQtLgWy7byFRZ1aMwDneLTsnFUfNg7Z66uDpQpdHn8HB",
  "key38": "4gmQAHJXY58LnNrUoGssMS7AVVduPH286oVWEZsEqmrUkwKL96a7yyVHZ5ffeayQPkegcqN6yCsYzrywfHbVMF13",
  "key39": "2kGt5QLXf9MnsWqupJDSScTFugDhUD8hfnXZqCprZS66fwEp9Q9c61Cn85zGqu9G689GCaBaEpU4Fq8gDS6vuACU",
  "key40": "3kgq52UFrraMvaDQXidcbQNM8cE8AUKmXnK9Kn2B7QqbcP8CBJ4ocqVT5XoavvpqvmPRBzWWu4k4RvyRE8BTLW2A",
  "key41": "5VHvFo4rkWSHvptcpZ17uXBfhJqFE5E586Qb39vzxRpkqWPpTFobSW5UgbNtRs2WyWs6gk7iD4cTBxMaaf995gkX",
  "key42": "33wT24X24JxToYNNPD6zfiGxdjUjj22djiDBr5PN7w7gTcqYHV4gJ17in7LoV3ysND4wqrZYYqjVJ6tC1xV1x48W",
  "key43": "5QmBZYEAQQLri53BrCbRiXQ7KMSvfNm6SGJ6VirdXs62sMLTZh9PrRuzgE7WEPZBG99MytUuqGjM6eGgc3RfqQcv",
  "key44": "5ZDRki7xzub2WaRPTsWNq7diuApUfHDKukerEYMbRTDWigp2DE2KzG39ZBq82Je8DYDY6N1mvrPC6RG1C5mNSVqc",
  "key45": "T9WAqyrm9esAoQEW15wZSzqWTXgiRLEoro6RcPG93bdBc6Z6aYy66TYbK5HcyVgqDi4zHXGMC3ud7yhwJ3s1ZXA",
  "key46": "dXVd3xskJpEhYNrbdtujEX9LtaUqsVQQtD1H1RpBDBxedQyWMGSoxrT33TiWLS3MEU9pANtorKYT8ToCYUW9wRG",
  "key47": "3tzgypRfbCpfXBLoE2UiEuWnUH8ZQLuUj4f9KxjZ1dDV3paAcN91tYHvVXk9WniX4DzwmsVPJeDhue8sNvKjGpfT",
  "key48": "3dB39MZjiuCXZgQ4PSLMaD5CSiKPrHnF4ZVegvRXBwS32ZnLutEqrpfxgGk1oaN1wD9SaT6ot2Fq8qfYLHfMoZbz"
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
