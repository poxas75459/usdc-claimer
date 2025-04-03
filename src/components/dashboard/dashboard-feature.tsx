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
    "TCJkhsmU5P4d6dqExV9Ydcew83oSM7N17834qTamHLWGqxGStQt3FTXjjynEUZ3y2NiNj5K6zjawNVsoBf4gn46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RjCgCoeATrYRqqyV6mBrpKzJ5W1qRCS9trd7Gyc4ZGMYGBWz8qSsKMLbzjvSFfXneo2ufK7CXqsca6b93NhiYdH",
  "key1": "3TRmQVf8KbuqtcNgpwcRsNDcLzeVAsQmHNxyRJDeRHdxVUXLhskjz9dQiQq81VgRBqzZe5bSQro6wSVExa1yD3WH",
  "key2": "2ys2uTQnWeT6XnoYphMrbVR34ALyp3yGNF5mRqarQD62TZABXMg9wbgBwaetFEeMkYz5sLmt7eMcz7h33RURmACT",
  "key3": "gs152ojDtKErDUpdJfnRn7gH6PYRuuvnCPF8VVCUtz8CqAthZABwDU622CE63KquKxFqaAv4RyDuqqwx7sd1A5Q",
  "key4": "z36rsZGtTejkzAopozYsGYKhu5ZjCZwgW3y3wtsZop6x1XLvijLv5ZizgnWLVhmHZUtt2rck8H1idGRyi9t9UoZ",
  "key5": "58JvphnV3VDQjM81sBEtLGuvVTBxam8XRpHsVTRTnvXxzLvXFsaNy2hCysaPxcVjD7KHiCr7KvHuZ3f4ZwEgSSeB",
  "key6": "285vJQZph9Ms4eibw3uv15AdGN8KMrFU7dv64UsH6gVBxfyWpH13JEuVWwTVvcEjiv4buBdAdth5MUB3AVxMoY2s",
  "key7": "2B2Uzv5jUoknoHXKWTd9HdsNdcgtfPrnimDdvShxAbSxAHUv7akWeZQB6dRDxLXCS1MaReHN3NY5bsXDWNVHZgTe",
  "key8": "55Ukf2AYBnSsZiitfGEFNoLeQxnkrZ1XQZL1wPwd2jk7PB1DrB9NA1MDTbwLeDWTEyQyXtgKBfaXKaXU4Hbvj3ia",
  "key9": "w4eMfiHXBZdg8camwMwJsMv6FHFQFwAMvTvVn2uaZJqdEuCH7nmqEiog4eUZEtdMVjv1RTZeG66jp558Geoquf5",
  "key10": "9SxDgXhe1Pja6evFcNfePVZ8JZ5c5JkiD5tn6Udd9dntXnvRciFzKJmAuYMUdbMNtKRL7URFbvoUvwu4eN7TuYm",
  "key11": "4r4uzTVUn8ny2XVaJc5ysNYDdfX794wTSk3S9NqbMPW55ggvTk5PVitPa3ZHTy2seFprDMwEyzCrSyJ1XfQunQSa",
  "key12": "QTQKALcMqNKJCjjWHDvkxYJQkkY6Z3w5dfjQbkUMUoZVnCygHezXjEd5aJxX1HymNAPShNxDhWKhQgujqPgb7gM",
  "key13": "5PuFmWjqL1hFSikqVoVMznKNQVxquJzTXyyfQ3JimDd1w5NnfA1ww4Hb9HkWfbfFDdYjDWfdjBJGVmYyxdFa1qf9",
  "key14": "SgeE7jSgu9UgyDvMNKVU7fv5Qh5WgDrum5YnbhSKrt7GZAfptaFCK3nicrAv15jf1TvnCxVpiskPiQcDCWnZbQe",
  "key15": "2T59C4EJpwsA1ZqPdaxZsK5jrPu4e47NQUhativYKxw39SrbCvnsRtPEStxQ9wdiAQw8iuYXYzHf6wz6DdvEk1xg",
  "key16": "5n2wJL6Sf9t1tuWQnzA5iC28fhfV2969CnXAB4n3ifUZs7ybLMsgLjw94Z2LYABJQJ9qdheq7xucGVSzcGrpkdeU",
  "key17": "3xst5xjL4eeYbeZdByeRJWCnk4zyuurdiARirwHsoFRaReWLSYmV1qheVz6FD5r5tcqcYjxAvCwWWWNdn6cgnTp",
  "key18": "35kdTiMdX4qJqyfwTDtfViC6psg34ZwqBrGe95TmDFeXvJQjPLB6xGstT7jEcwTX7QHbZEwfAcB87gkznkwncg1X",
  "key19": "5jeLveyti96PbsttUQP2swZN6UsStyoxAq9tT6GGBt78ZTrgzC5S8nuNtSjLVzpMgEKi71nNU6mCsxcMAnzYX3pR",
  "key20": "3EKSe3FBxctMCozEjmp7LjrYxRL4xJFhtzLJicDHyDA3S6ZLLZGui7pEJZRecuaRiP4btqVvCwDviGvqw469E4MQ",
  "key21": "2XeVkYTAV4pxDPCm6oAQe835mDJoLrDMimfAqr6Ht4GDtDtXro5k4qrqkWdvdY6ewuQM6ZXJVLFF4PgKU56HpqKF",
  "key22": "4EMX2U4gf1WktBgnAkc1SZNrrGVcj3xjGEyffZuDNW44DHEe5e2BWnazMSSn2t6R4DoPjRTFKToPrH3CRsp7KQQ1",
  "key23": "2axVsNazdhSSimiXwTQQF5FYndeF9MACEmLzssJgZrHHL5JVJzKT372Z3N9NP19krDdZEStuzm7ZWgp6YbHwmdGF",
  "key24": "31UUuDekw8hduCdM6iejjvh5XDC73BuMeJ2CHAMuuZY5kRSthX4mFMCEshYq1B3e8WqJRQiAxLqevKec3YBHWeve",
  "key25": "4v49hgTpJuoijQz4fKxNX2phE8seZKXeFE5JFApZBYD3BNjmWaLRhhJhte5cL6GMMe6A5kuzn3B34HGdJxGF3zmd",
  "key26": "2EHKZiFX4ruCTGMZRudTw6j8J8EQ7SzwxjQFUoZb8JLcDHTdDL3EtgMjvRmdJp4YaiKjUR6mzq8Di9g3At8LLBbX",
  "key27": "3WPgYTKvn3Bn3sGXPihMjN8STPogWYMfbvr2bZw4kjy9pXzHGkTh4XPV8yY3q592Tr2Ezi64W2NrQxYNQk19ZBF6",
  "key28": "2XZjZbdR7Nb5jrZGvf42F6X4G98pMxTQJhQesr6RjBQfR6pZVnA59gAZ2nCaqDK9uYygNt31rEbZok8bFuRFbTfG",
  "key29": "2pHpdXepJzdQYM7Dt6s3HiN43nG4PhehdJfk28MC26PdkM2A1jMig6TpRSZH425x6YywDcBrovexX7D3FUg2xd7B",
  "key30": "eMSh6D2xMshsRAhQqKhf7aSM5X6hPL2VSM6FiYtyYkcaNuuznJ8ELZprP7e7mxAjDtTche1fAxJ9AX2c19ihcJL",
  "key31": "F2g8RHSeC8ZwRyZqrgxiavBr76H5vaFhz51mDzGj9BPjfd6YFR1RGrSdGBK6RPsQibos738q2JNYTPmhfFYe8Ky",
  "key32": "3CTwR2C65TRMEhDC9v3v6qDRPMwk5Z6ucDBWDhS4VExPoBMgTvq5Ubpm17sZCTYY3xQYuefS3tD1C9WuDzGqKWtS",
  "key33": "5RqGuoQhUWmbNvuKmRjYT1MbMYzD3k7bKBqMXSgPbMT1tghbNeXBM3RXVUXKcsGoh2L84UTEcWnbYEgoTyGp7XBv",
  "key34": "myGvvjcrxyK1p1vV3nnfpFqrejad4BeYJNSzKB9npf7u5xYj96cFVoCXwyRZsWCNuC1AvPBEXKitneeqnf9b3vG",
  "key35": "5nWsjEWAgiznuuTomdRURrd6abitVEfjmRsQoBUTsn7YzkAjeVUYUGCiEJJ9zxtW1N9ct5EnuLA3pPP61p6g6fgx",
  "key36": "54mxGUMBM3jUSBLcfmWNXb9feHiWZAnq4xUNEXe1t6i57dSQYLRXwt8BnDbZUzHvhDWBYhJHWGwuY3i65ELVdbv3",
  "key37": "Qde98miWu38j1r8FdbYW1aJWWy2d8QDCXdhx3TPG57PcgAFCTfE7ahU6qMKAAXJCMtb6SmiPcLzxy8WDsDWHdg3",
  "key38": "2ndaHuwKHmhC4YydoNmnWVJTbRowMFqwvfeAaseH173o91mX9y8rwFwayuwdzGUG7NjE9ATMU6qjyHRkyJeWhpCA",
  "key39": "Psi97yhXFMSBppqa9dDBbVBSdCkcPcZLemhsStv9sVDaNWqSARo7qKSdxk6JtBYK23aXmvg8QxdCFav8UiisyXB",
  "key40": "24Fy2XmxqzmLYhQVyrdMvdR1fA98vHzK3ZG3QjyA42GoHrbNXWRvEfX3n4oxoWd3ZaU8kqVCVgFvcXLxxJCcuieK",
  "key41": "3cSfLWfnvmkrdr4uYrztwMMbLSaFqN5vTCa2aK9eSfoNDmfgMAaxvx8ZYJdXX1aEPYwFBiCprAvVUYFK6mWiZ8zX",
  "key42": "5MNAurzExKuo4PFrQfCZYYEmNVYsVXVzSz9jJZQtXgVenXdteZLe5HRmhDfYXFKgYEVDuXh2QXHJwJFExZuu83Yk",
  "key43": "2qwDmQgRfQ6kA2UwPnmXfCVicUAgGfoB6NBsJgsyDepB4XKRTLuHo66t25kcJvh7wuRTGyrSGHY273w4kMT28wMW"
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
