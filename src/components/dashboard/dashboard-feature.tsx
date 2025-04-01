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
    "PGcBaBcxsL1Xtgepju8Q4wQYW4sC6s3KcwAag4A6p4iPfZA2PJFTCstgFV1xZBQMJDYvXgXeL2kLcrdfk5Jt8bV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sgzYUCVgEiSQuFy2SohUKe75vdBN1cntGneuhgPLft7ZqNN15sDzMo2kqQ5GaqTxrjrmrhUVpUUCRoNRMUvV4he",
  "key1": "2nA6iLdKo9bBsgr7D5vMfz77X5Wkc98eqz1KeBar19fx8zNBEMm9ttRxFtp7r8tqVTbhUvM7xEoP1Jy1cYSNXwQ6",
  "key2": "4Vk2ZryBbwS3UHw5krnd2oJJ2C2jxna8q9q6U1VrzFXSZ8KgPhAgWAFoS8ULkLVwe4S4KHbaYJ7y2ojnPTgKzavp",
  "key3": "5bk5gJrZa9XuYwiJGFM5yyfD6GXU3VKf1cBJKLiQWtVPkA2mPjr4PDxCNLFFRtde8YF6VotxSL6W56ppkDVNQ3uR",
  "key4": "4LGyTwB78xbjgnjwa62DDkxNKfRVKmdkr92irL7tfETQJ6ERFN3hheotLC5QTinMATG8NX36VxoCJGBmTXwNMKQx",
  "key5": "aEBcDfh3H7Zfs9mWhC27bCsWUy2coXXVZA7CzHCkDJSS7eKKRqqRpxhxTu7HT5Tjwwf3dX1fZ8AsPTJkcRY5A5e",
  "key6": "2e9GLC1yS59vFXz6MKksp1WMMP5CCs7TDJSDfQUihjkwSHTDrQNDtKJMFjpHpfJA9ujj2X8FB5zCAFafouHQLwxn",
  "key7": "2UczkSHFnEbD4A6ww7Y8QTRj1H4uRxYVbsCAstQXDLxm5mqqHmUuky5d1PhNybbANjaGte9PE7vpQkoALTnu1MKo",
  "key8": "XDm7a3k9Wg2yR84cHbDQDjT1RpVg2P39kTgLrAj7sXtjSbCmmM7JneCPqYQQCfnPG5wnzCy9zPzponFqNBWyfWy",
  "key9": "4JoS8iJ5FuoithxDM9ng5yUGcC74yh3r9Dy8oXDvkNZdoXhiSvkzMzTrrCKRDLCAppUC9XsND5s5RCiH4orSQ4s1",
  "key10": "5NfHGGzTqKCTy9QC1vfkecphiZPXJzpJB6XHpZXfRdM1F5m4jx4eBbAWpXBgx5KmyPvPbdMoNH13QAouBeJdLFTi",
  "key11": "53vc7nXrzKKnWSkyNUrC4NNeqgx5uTxTA8xEwJBd8Adbh8dxjgAWY5mueQa5yn7c4AH5YRseu9RhHUpU74He43F6",
  "key12": "285iNfqhdVzx9gt6vWGi79wsvqpFCL1WPDx47EVmuywPhsm2wEnmLM9wpfoxNdus7u6YViN9kW1awVGtgih5JPcr",
  "key13": "57Qce2EbS5ukyPmKeXdrUnmuunyw7oiPRnBqDhiVVePvdM7vJXKTfnhmfHtUhcwGYg5yVtnX9CdwKcwYSZ2PH2C3",
  "key14": "pJEih1w89qnZP7mePRAtF4ZfXbMzu3Pd8hcTGERwMLq4T99K4Ghu3XcpA9iMMUHVrZxFwUrF4fpPrz1yu72TjgX",
  "key15": "31KtERAbKeh8q6ZakKG4Hg4ZkUe5vPRHV3ZgQd4XRoJEHhrMCnfXLn1PZ4y8XvFszS48Mun1SdCX3dFoRxxiP3AQ",
  "key16": "5hxTudpTR8Aj2g52SQ7NeEcD2vmRi17vYWPUExEiWA1PycKvTZT4Gx7n6JhH9DDF4nucmUAjYv1Dtvqr8WWEKm2V",
  "key17": "yCktMSwuuuTCuo512a9H9CUdMJNpfXouR3s55ziXnWNAp51M3w4mDzdCmH7B5gbinL3Z3r7suqGUpMt69dSQFoC",
  "key18": "32ZcQAsxm3qibjUN13syhDNpf566scJrwwRBFjtkBMu6jkuc7RTyC3xRH32iZAwkwP7utcHmpd2uXTNEhnhLEm4j",
  "key19": "2BkdBob4D6CedDPYi5AwYB2oiWT6Qo8QFymh4REDfpLwyweATAqC7K5TF5k2SHyrmjZE5JrR912xJkN3tJKcV5RH",
  "key20": "2AhNvrR1sTi6gJWBPugdYZeHuthRFzd9dP47oo51KACKYiP8uPGyopDwiaSAHDBdd4H6jPz7RHYo8ZEG4b6FxPNJ",
  "key21": "4QvQy3sUmzzdoRfRahaeHPRsx6gZuM9D4Uz1oXd5hzdXmRzccUNz3myJGN97GLyKFNKupY5DWqY12SF9p6T2XsxT",
  "key22": "5bgEKxp2Dhs3B6QCsNAAQjxKWdnuMTbqCKzgKQCTZ6VzwJrtJg2PMtPqW675bdMbxS5DysdjCEpPDYvKLCbrkg4N",
  "key23": "3oKWY2wezkXz7i7RcBrTB6JZcMsnDsw8LoNnRkyx1uHbnrBKvZAfBZCoxs75gtGJrRBTfN4hiGSftW49bnVsi2WG",
  "key24": "3wpS88WieyzJNixRzvQVJUrFaXr8z17NAuvPJFCSif6hAZ9V2BeiryikoJZxq9xkXFk2Kfvmoepk1PL7Z1bL8Muq",
  "key25": "5QjoY22pjK9ZKhPQufVhuiP7EiHvzNfW64FqLDWxJ9agLzwzVUorczYMfJo3r6WmmkgDdYbLCrhSSRu9w5KZQ3pF",
  "key26": "yzbM6tanQgY1kAH2BfdXUfZQz4HCK2XzaFwyUVjozgrL5wkaA1LTNF9hLK6hQoMfS4ehonyTWLcL8iymt1SuZsV",
  "key27": "4oUGup7jhwCecWSjUUdbJuLPqgY1EkwqLHjbmLaPtv3rWY3PXbpGRVZM5cVrwfwpU8hfDVcPcxoDao6vzGsNZSNp",
  "key28": "4dkQXbEzANzFRFWK4tbR4ecwgMA2FEZwh1icJBgKJhMrHT1QdVDDVvw9HCxeN3cR35PuzVZUXUqvqRxxHuc4h7Go",
  "key29": "3TPBCTm4xMbrAUM4Yyk8zumjnWp9pKFdu1soJBEqy1iTSZgtpABrS6wfzKfrHoui8ZEFWCrEEoFaArqSkeYQdcaY",
  "key30": "2gXWfhmwR3pBmqb4TBBN4snAWGdyqK5jAM7vdwLpfBgbCYXNUMHvh7fUt3vf9SwePVLjNp2TKphBDzpmm1KjGfmB",
  "key31": "22Uui27LfxnkBBSaJgTozmCGmqQ1y6iywCnGwE6Pcj8NreLGtsuVPtt1fpvic9bcsBGXxsHQ8dcYB89RXb5dxdzj",
  "key32": "5YoyaKCBKWAQ8HbPVi4NNxPESgM4GZGRr3N24wsst5KFBwfAGUBsdZyvgqvDm6M91HXww1rV1E4HL1dqASbZpEdq",
  "key33": "2HBTYijAHKMVVf3msXmdW5xWVZZE42coqrsHgF5di1bbdw8SVU1huW1ktQHdCoEgPSkmvakTtH6osuDsESdgdCHU",
  "key34": "5ayr7xz2rN6UewUNGfBsXce9MvAezVBsoxJnM1q3tmtoEV9DMBvLPAxsfTip78RMi4zLQE4Zuu9WcVxW4hg6Q7wb",
  "key35": "4RKZ2k28gKreUeD4xUXaM2oqEiLpjJYQiCtfSrXPgxzgUAhqvJNtsxpY2LQrDq1W2k39magLeUQAhAB3MhBEYHwz",
  "key36": "GBWEV35h5GEmqBnGoiwqcXUFjv2ZXWLq6d8bpQU3WwDKvrUioQu5GF3rXWwoAx6XzcNJ144wRxYECpX5GPmrAh1",
  "key37": "3xSDFHYRFFo8XzGbLcNf2Y9zmKxdkccRrR5W4grZ65xaEnHpgN5YPRvjKTKvU31ChDSbHreQApwSyoWvoNE1f37H",
  "key38": "dHrNLfKhTyzrLzCHtSPM7jPHSEgJR8TYTUDVkGxjXANTvN8ujGkomGo1RTLMJpsdbJC3AmrsGFSna55xiTD4E8F",
  "key39": "FTh3xrSDie97Wn4zL6EkzoEDvVjZpsuGDJZpUq1NJCRxJGPNo4opi67s8FQjBg6hVhLuePsyCNF4qMXwaNTiYd5",
  "key40": "5xcHPAhEJMjSEsib2NrB6HpgDSsDf9BM7nDDDFuyEd3UbGv4CKBvo17CpRUHdLJNGYeuL9QbNC9eGB4X1XP6FPku",
  "key41": "4N2Kryou56GXqE8487UQ1rKu4JypGTGFaRyyNUkM8K4tzduHkx8hnwmQ4vtJ4SH6Pz3cUR9Dx2AcebST79XwuAwz",
  "key42": "56JKMeQ2xDcv5cnyc8f71hssRXnrfinUd1XT2CGSBMMBsL5qshKLuNgNyDEeynCEEjiKL5XHxEprc1yL6xSzXCeV",
  "key43": "2n7igWafp1AgoqBKr98QoFuK6NsH5H1ZkoNCy1k1T6FkQ2k9eF9PKmzwjCugN8KB2fg6miQTRhNjvUcB6kZ9q613",
  "key44": "2qxscZ9wKZ3TYEKpUG6E7wJ36Jxstf5kALRY4ye11FXkcFDs2v1TxsfSz2FC7KQQHADEwSbKqpafxgP2dgdtES8z"
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
