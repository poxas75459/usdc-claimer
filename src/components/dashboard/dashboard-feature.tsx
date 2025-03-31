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
    "Az3WYL12wN3QoE85Gc5WxrgLuudoBqefzkJ2hydmtA1sApE9oWSo6GGRQSYqqVtLN7yH5vjVTQjRHHExrcMXLUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aG5D5SUAA8fU5HWWCzYZmqhEYmCvy8QxpM78pFH7Zs7ku82V4axg47g2CenXhA4zED4Ni8RLCfUZMKr9YyeCvcX",
  "key1": "653ixyKkGEyF3kDSdS8cQZHjwftR4sUUnBKEN8yi2RpRPKU393JNbpAAoJACBQmNT6HjjH3kPxA5LuT5QUnU9Sop",
  "key2": "2kkfBDoz15hoD5SrTwBY1ZGVJoekFLb7bjRoEmRmE8qX4d8xPJq5US1QY7QeZvfkfLeR5BAADZeqwMRhwZ5DsTMm",
  "key3": "Vj95qTy4QR67aX4Q9Cp2uudUxh7x5oFDovqRQhpgxR2snujLzjsMn46ujxPy32dPjRUnmAPWsvBENstRn19dba6",
  "key4": "36mpBD5s87dAyh2gt2TrJtDX8kC2DyNFypqy9yECNJSU8a6oKHbu2q3RC78jMHqXysq58A5J3uYR73rdGxmCojhq",
  "key5": "4TpkPF9PFU4TieAE5N7JdiiMtwu3u41Lz7R8LsBFxJF1Nii3FihW2ypNTk9aHiPqkNS3VvnE4VfkextEXy5PepCg",
  "key6": "52gJCVYJkdrHErD79QS72hxoXNAavxZzgJ2ZRgiuQqXU68GDZ1bbHsjBh5F7HG85t3wEadcFomK3SeH1jYDczR9z",
  "key7": "2EYgJ4H5wop2uewSpyhHBdVFQJdor1RbZjTRp6cn1r4Jsje7fWMi5U8EJh3wHYuLTcV3Bpo6F3L1NAWofoTLkoEQ",
  "key8": "NVjuxGmCrJdSEKGkJQxYperf2aTeTqpC7Z3w9tjs4uNNyAz3iFqV7FtMvHVqV7mwbME4uvXArdDr1kshFE9w1ym",
  "key9": "63E6mixvGYCnnVhCwaMULeCKSENsFBgxMLHisJwq3enQhq3tSE8nisaiYDqg3ZQUAxo6egNdfuELFQBgvU5WQbuN",
  "key10": "jeLJ59rKeu7fZebJVw7dsbVicPqktGU8gqkT5Bo4x1ies6qUm1ewfEsyZmTjh87YdscKhWQX1vNTRctX3CndTFF",
  "key11": "oNhPZ35wjNg41WMBL1A2aw1CJ7vGGJKqa63TRe1CjYvtrfo7XzKcALLvHd1dUukuPzpWHZMgQdc1xpSwGdAvD6n",
  "key12": "54Dizy7FBqe5p8s92u8mX7ByyyWUEWT3d3mS5FCAtJwLRpjTNEjopD5hjLGXUnnTiZkLgRVpwHm1GZmJ5Kwp8bdK",
  "key13": "4BkmuH27iy9L4anUFEBqoCpY35VTcLSBmFydkhzkukZo3f1bGTaTNyAD4MPLUjruWLfeEBDi7CGGYLC7VYNjYa98",
  "key14": "2YNGtLTjxjGwrB4yaM5TwZqDtz3KamV2LVYdEbq7FcfsGNprjMKFNexQQyKuyjJKJup6qbxoxsDBE62K1av2PPts",
  "key15": "9eX6A5m8kyiaL9eCBrbMzk6JoedhyHrqBRgdtr26Q16VG94S4y84k283nNbG8WG4DYSbaoa5WqtT6wxrkhpUHZR",
  "key16": "4sN97aPqbJjDiN3HUYsAH8XnWe8KSudue7oPWnkyZxbjUFPjRDLcCEoowNK8BZpLL6Fgb82Ts9fh5wVychvB5vV7",
  "key17": "4FWkfEyjMTJuVhU1R84Lx9gLqJ5UberhVhXpiozH37CqtPPba2GSMS3zCa9M6BheT9CuS6heZVchJYTK6KcNcUY4",
  "key18": "2Y7KkoNk8KVFcKowfokQyS9NFgbRt1xBbuCDma3C2VqYQTKkMf2sCBKtKW7MmULkREFCjJRasMADXq7cNtNZykgq",
  "key19": "2XMAbaqj8SB1kcXgs6VnUXBUCzEfj4dpVShKpqT8TS9cC1xfRVPyhQAUXZ76TDxNYrkQmVTEbfZ63cdvSoeshuzi",
  "key20": "2rWVkELbLY5wXNexL9BamyqrXgcyxmVb9LJz6ESLQVtYsngUHomXxqF39UpEurDh7cnWGST4pQTAuUk6uFoC5mAm",
  "key21": "2jbppPs3QKar1rtoD4G7qJHosgxv7FrgeQhyeS33rKmM5NssnY4kt2Cm8q2BKQdEG7YzA2UNof7VaiU4zpa6D1pP",
  "key22": "2WBjdHXmuGiC4NTZZ5L19ks9s2X1trSuaozN2eMQnGVsXb1bWeUfevGS2o3XvoN5LxCrbkUD3iPYT2ocqb4x9Paw",
  "key23": "RLZzLLEAACcRyXJEHji8JrGh1EuGWQDtW2tjaJzuSpnkyzNJoFumAd1FhwvG2e4KwHnWjj6GnRKkJH5RfEKCydb",
  "key24": "5FdxSALAwQiH73HEKNGXXWoEQfQeWrPTi3rcurQvVG8hAwW8tXFWP5JTxyzzuqz2dkZRMFJAXAbr9M9gbqxUJNm",
  "key25": "3ueimE7wTcxzTnzbeexEVTVnZ3B7wyLRYG2GQovXunbLQHgzjeErrSXt4ntUWc5qhV3vehtRwnwkroPnLEGVkisZ",
  "key26": "513JKCkLZUuGmUxSgXF68QpvmMbpdp9BkhW2DFJz6bZfw4XoHocePURFyuwMZ1yRGHYK7jRYrYhrpBcq7QUyJBSv",
  "key27": "2s6aioGmrothg6gQCZvBXXCd7Fcfc4FBioJ5e7VPiYX1jUsiHyqQVbyciv8vwgcnWbPysdf77qfNyvPoU8aKiXHu",
  "key28": "5cF2WoVWD5EGevM3GEhrTT5EZaVXXGdUbJgvfErNEdbWvygrEWPXo5AMBGjgeB6nXqRHNweGiKcVTCB8UDk4H42c",
  "key29": "5EAD8jpWk18ThQDPwXhbzkFncnNB6Z8yVxdaMDMMbacU8dFJW1hJPFD89G3eLAzYK5Pzks1misW6VanfpgKmX9px",
  "key30": "5AzD9XXkkPL3Bmc2PwpXFy9yzyqatZYLYVi5yj6o7yGFvUQgTw9zUU47HyJqBxoBnY4fcf1JYXQAuPsRfEVXi74d",
  "key31": "4ZPsdynsLi7Kak4Vnvqwc4kqG4eP6NcbHYVa5huTd9xm4TZLrarEzwdPb4UJ9A6Zu1H6WU8mUGGvSN9RZmXJRfx",
  "key32": "3qDqqSz88Gbo8hFNNMRiouFJVVWtA31jDhYn8y98kcZUpks67Rmu7PHMCpnqnuu6fY3H4p9FtNZQ7zuei6uphELS",
  "key33": "3BpaDMpheiNjLhBdEtRyRjftHwsruRWMisZP875WJ3s1ST9xkBZdXPjKSvKK1sVavn6yE7wEmdVzEmWE3WnxPJsL",
  "key34": "4xUKLWKqVeJHtXFXJ3Jn2WgtKybkzCqtB6FyY6ag8S9x8UBry81PZy2T5S2xGPntZSz2YNaVCjEV92U4CH6Y6sgv",
  "key35": "5bR7CeWQBZm1ViaWNfPELQG3D71fRgBUHR14i6VnTTDTysvER6Ze7bRFZrG1o2tgi8CVb4CybnrzS6J5dy9nAag3",
  "key36": "4WsBNQR6ypkVLXhNuDQa8kaE3KzdkEztGrrFFQsV543uV3nQegmcRvSaR9VkaFndqsTrTGhjiUrgbAsSrBgy8yKf",
  "key37": "vgrfyGw6BtchhSTAobpXjN6Jf4J2zTX3A655KPyboM2YFPXSfo4uesQ4PWVMz6MH5ZJsixyzmsHNdvNgzJUPq4v",
  "key38": "4Jikvh7gQEV3d34SJHyCnZsXMjusjCD6A9Fjg1nwFjtYVSVkGoETUKxYNkX9VB8HffbFg5shZwtNnU8CXqeUW12U",
  "key39": "5QcVG4WCxSvMKSGMvLBVbcViRKaD5hjedR4J3BeJqtcDvoL8o8Qsf5WSequPy1b4KZ3sJ8FBe6aMXpXQkYXNxBmw",
  "key40": "5e2kCXJMz9imAQsJ3D6k682RUYGaS5DNJooTWLk7xvX96uUJkTA9pwHakKaTkHXxVRNTUtPmiUvkhonahrTCHTou",
  "key41": "3M9wrbVmKk9n5APbGTkeu4QMn68ndrzH63nKeYohQTQqL9BYYSJ2osK2ftP4pZCjufiPLVsXQcT23NHaLw6SXEjr",
  "key42": "bb8AwtkezjsfCY8S9vrowHR3LKdcnUnNZAgGjPZUNGiwL2seXAJ33yduczmnNZXjKVRnK4mV5HhATVs9TXNizM8",
  "key43": "2ecEQMpJX8gSwaBSMhA7qPVNuS61FcrTVd9pbzCUP2johEbH7VDZg267fEkZwxgkJXT6HY19oU697g55LxX7nxJA"
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
