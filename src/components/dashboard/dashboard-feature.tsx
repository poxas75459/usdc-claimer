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
    "HkA5wsgSoiRKcHC5tcDs2f66MbRNnRvhm6hT7NYJxv5BqhE4tJ3SskjYQU9TiLV4gMej2pfmFHbQDsiWyxmyvh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BLEzMQuyR29LwefzGgzZK4PSf3Hpm5giCQsSWj1jV2MpdfqNd9uqcHbcsnBnc4cy9mz8AzqMdrHGEa7U9TFSWQa",
  "key1": "4RFZGdB5XALF9RcP1N45X6rxrjNqBp8LiiHdNFzXLiceFpdB224ezJDpq8qqwXLbsfSeYWoeca6qZ8cnNdWbxyA5",
  "key2": "3LPG1k5PwGTfSwCaqeMorUUh1rYq58enPScFiYkAwBv9qEgoALZ3iYbJB15wKh8iYQyPzxCX4ztETB8CPmnpKLYc",
  "key3": "fdT1iBMX6DvMaBjaaTYdnCaiaG7beMn8Pnt6yC7vBXJRRXQiGxXJH7xzsAiTz3fC7wBA3RiyVHMs9V9v8xKsZZ2",
  "key4": "3wN8oGV6CjtzVDepeJ8SgnMR7wfRX2shanmnawwnmFurd6mpG6uWYmRzSgBTVA5qxiHtwnvyD4mvuLKdbF6ZPXky",
  "key5": "4y3yVEA2BaA9XLJjoJ2Sry7w36oHwQ5837o1qmvNDtiu6F7VcbkanUNfnNDx5oYGDspP2ctRjpDRS7t2jwG2Tvrp",
  "key6": "Lxv9KPngExvqvLkuDPhNTAnizUAXGV7ofHY7bhfgShq8F7WcxY6qBfJEvLnJkvJE2TdJFdFM24iPhVmoj5h2xVb",
  "key7": "44634u7sq6v1B1wZTmNu8jM8iidww1Nio1jksFnfhZYijZKdFzk1YGHLnG24WEitUekP1yQdory5gprDjHwrSKnW",
  "key8": "4CCDepiqw1c4jfFPgqk3BGaV2fKtHNc7cAxtVy5PYrYJdf8tFvacsm6EA7Fvm7fShhva1A5GZUTxeXRsKhVk5wK4",
  "key9": "4BCt6fUPK9kh1muiYFhGiZAecXriYgbm2XRSV3HgFwJDmbcbondvEJRkhVqrBHAQshorBJUgSuNBDxtftVSYTr3Q",
  "key10": "3TYuNM4HnWSfJmMnbh428eMPjnKvFFti1nys6jUUG4e52ZXfNhweApPG65mgReVxxnvEPrdrj4DJhZxjMCpxwgGu",
  "key11": "4pE9Zf6cP2i682cpFuYMgBSX8UyFH7fN3EosX9PYjkm6Wo4tWR78J62AUG2Ba2pzXZGj4BdBFtrq8Pkm34e29NRq",
  "key12": "3wN2KkGF27d6KEKjzkptawu5qoZhE8fUfGDBm4E6Sd8pmVGcKpi11xrStejh2oqKxs3dZe7ZAALjYJhNxxEYuva3",
  "key13": "x5f75fHSMdZoKMWgGweq9PNUtnLV7QR3C95MJbvZ3CL3DtNdGVcqTSJ81AcDaoa2mbSdut3sriVrFWiC71HEVk2",
  "key14": "5tXTTkFAFLzFiWB9L4JBJVTZW8FWXoQKYHyFJ8V2mybG68DpsYpVcwGLwB1r4dCWcjpuEw3kLtWDhC1JQBgoieFd",
  "key15": "LLNECDvRTWrkmekfB95y6bou1p9vk2dYNRXqajfcNdixmVpDbYrbR8vET4LTuTgZB1MxtXxxaYvQjdBDgL9kxuX",
  "key16": "2LoTUGHqcdV3P4jrq7R8joxvseoxoqwkjD2LLhhUDws6XjaJCen3enqU4uwNPZ6zbgbfTExC5cLAxUvsA6Pbprt7",
  "key17": "5g6DeMdwZyGgYA4NwQe6R9vjdAV3zpjd9npLbjLiAXt3HVp4SoAt65ZUHFfXrp45T9HuyBA6U5c2iAwpqRarALZ3",
  "key18": "3oEpXX3dcpT3FvRzj3DTPy2UR9rGDKG67pG8uiRXSC9VibDSZrghu5zazXR4Pb6MxR6PYQrBkVG4jofsjGuRbucw",
  "key19": "3S1cqKyTubrdZcKUwWxQ7oxJpRqja1XALidPsFJXQxYDRvnCQiVDFdftXRn5QM1ZLPY7a2NpTgaekMG2o2HpUTmi",
  "key20": "3F44LExwJrVpr8dG2zXfanvDXWuKJifeKApy8gSbczz5A4QXMhZT3nr9bs6PiyLw4K2SibZM2NHMLRc9CSk8hoXi",
  "key21": "5CoivXqxWajhvgWefAvx4RbAQMbJTcJXZBi7ofsxz4NHmYDW7Ehh6gAbkeVvqNTqYDsoe2fzJYdt1shGKwmytjbh",
  "key22": "3Dj9CafpUE3qoUHo8Na5XKxih8ui9nv8upMSpWMsMs8njXsMxSnZrDR1jdyrEUyJPJp6myq8mBUgGkXJYM9r1L5F",
  "key23": "2BRWCCbZcABd4MmzyVs92mNcBbnNafvm6tCbm3bJxbDWD9nx9o5C2GDiAEbg3N22xkg5PbpG5MWiHMxytWpJoEd6",
  "key24": "24FaeBDDdgPiXHVHzXkPWEVu2FgCFZqzDnPNTE2atXtXigrA3L4oiDndX39br7Nc6T46vxvNF73azcMuZWkTGia5",
  "key25": "21E7xPHHmPC8oXAb2NcxWPL3gxHt5x2crZE1N5efPFEhmSgHhqwnseAdHqSLR9r1xWMxSi3vEZF77smFnuuV6VTY",
  "key26": "AYQxe2ZbP816cWbEk6gsCXpF4zcw9TeYGN9uqQEfJduD4QX4H6SxQnrvZUpvwszNeGXwBvCg1d2o6bHXpACcgro",
  "key27": "5Q3GhZLMBvVXd3Z1QL1SsfQRuJ2V7b8YeQu6AWtFUasP3Vjx8ZvPh5vpeD27tj2V2fbgEfvsPHpM7amMoeFHqQJ9",
  "key28": "g31J4EWCKP1UCArzMA8ksGa65Y3z6Q2pGMfBfuavFMm2Cic2CJ85CYRctrS99oodXFhxKtAPm5ZQfFpPgsSSAye",
  "key29": "4qN8hTiEqo5wJx4QMcGqVgQuuvg163m8Lae5QPHo1wtQkyKhRbXYffSMrUh8Vp5gCVHQBVLiVS6RxyjS1FZfBoJc",
  "key30": "2H52TYKKgfWcpz4gJ6HAjcCQC79HzkVuV714mkDqXCdH2ErJhemg8giasTDKgZ5d3NVeeB4xUSScYvnHz1Z8VSvJ",
  "key31": "3pnAdSoCBvqexmnzN5AwZF7YKKBRuFQ2CDMxLD2V6S9gVMZyYVujNugbZ1jLuuwoEqk3DK5xd4MdbqUGPBkV2UuH",
  "key32": "5YnW2jK1QkxB4EbzqNa1641jyrqYkNTjRk3A9xinuYs8hrFn2kUxsVZpD8v6qyD4HhiqRGytYdcnYqQxDg4GDjGy",
  "key33": "p7niWsRGmgng7FTghQZe1kQjDwDgZT6xsQLsjaDym9hqC6o3MQiAhiJnsYtgTGrEBs6Jk2YEcZVWwUUNRk1xsqk",
  "key34": "4Wjxs8QXfQ4TT9yGq2MavHBmYSks8m8pPTvq9VjmD4BmVH4gihYxgewXfWbrjSQVB4S3JCB6vDcruWDA3H1T8XDu",
  "key35": "J5P7XcSweJMZZz1jAGPtHFQwHcuMFWU7qaJuVB4QhW88kG7GcMjaTPucPkXMBqEujVBvXh2G8eeqQJuXfJwxfok",
  "key36": "e86PLQrtPtFvQVw3LqH3Rzck4BTzrJUt1kh1vid3vbWYqnzkrST2PpgSrwPS5M2D1Wi7r79XaYnL7ysdDqGT4aw",
  "key37": "2vV9c6WF5JQMj2nQCEbr5MxZHQPf4hJKxjzYT38mND3n9GKwUkqCJYj2VJ2RwsZgPq75Z25yzG9jkg6PQybJfAwS",
  "key38": "DZSRtts7jGHYygLAjoDvwVFYFcWZAExefeLVTX3HDkHMz86TyGMLk65bN5MpUxzkCxwQAdi1hSfT7VzLaPQQEqF",
  "key39": "4gdrQENTDu2zS6P1TXcgVhzgqgcPdDrZ91Xr2rtvjFpM73sd3ZmA9zuXSEnyJrA1urd2iLnHLnkcpEwHx6yAZukz",
  "key40": "4L22B1nsvjBo6KJpFcEodzNbnNYR4KtyXN6pZcveyenNEYNXUcWhCj8QzBFh6cCmbunWbFuPESBRsFcJuqdQNus4",
  "key41": "y4W3STZinSK5fGeUGyqHbzTekpSQyucrJwjFkSubAnssnwyL9S9fmbK7c4Gz35rY5XkwwQ2v6CaUynSnt6egFiU",
  "key42": "3i7igLbkDsrM4zjVJvUwKsY6sPBwAxYbcTGqufKuWmUcPw5dqai39BnZUMfEr98xx76E4LAJehdz1jy79cPuhdW",
  "key43": "4NmpRFZCaoXhqBq2nCks8xomCJUk9DkuLZ7zT3KQee32WdtSVEiPUCFJVujHPRPMgHg1qUU2cvRujXnGof4bWFE2",
  "key44": "xCZknM5ttdLJWWmXsChUGm3LcV1PcKpoVSPQ53WgnyfnuetLiPydtz59Dyj5aGER74fM3x8qvuDiadPdxEeQZVJ",
  "key45": "5yzVu9DdskSngR7RXbw5kZyZYuEYzkp8RQ8WAPekXpFxvx9FhyAWGpwD6aNBSYj5V42zEGiNNu3H8ugCP5bwajub",
  "key46": "329DeD6s6AxkB1gQSWvRr6DioAYGmiKC5QU3N1oGQLTV9j9KUFo9jdV4J1b9HZ5NFoQTPDjHLkrUE65ZxWjS4Zw7"
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
