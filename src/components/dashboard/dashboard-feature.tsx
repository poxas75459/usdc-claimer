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
    "4PRGkeBx7nrcAEjPATj9mQyTzF3xSAAMBag3m2h4E8CoqzPrvrs85HDYduXhtKBBDh5ajujq3cendgiZqp6s2g3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8MxgBz69cjvzRwKCiP6pnAULKQsCRow9ghQ4VE3L4mxh9Manmd5Db4gfDvhjzcTNeFkhaN18icevLcaXBF75XU3",
  "key1": "39VYu2aN4JzNoZjWHUXs66n22FT4dQxGwUVB6RMeMDArdPHdQxXQKNxF785FWqa8WeZiHxsfQP33sggihquS1qF",
  "key2": "2vVKQvdCaKgt6aAmpBJ5EBWvYnqUj4LG5HF7aBMXL4JhHhGs9jT3MFqLH6TJfs5Xd519FcRx5UYWzVExrggHS2jH",
  "key3": "2jtPUbJv4ycwkGUcsheu84f6vDJpDmQuKzyYHFHy75Wg66hkkQ9ESx4QnCfB4rrKdwPf1RE2mVurFYZZ3nZc6umt",
  "key4": "41mUQVdVC1r5ccBTAo72TyTygrnAQ7GnioUYMfZrT6A4wVtHxPPTBSjE4zgLKywP2WDEyw3PkB57v98d83SsvuWM",
  "key5": "37HSsdvtnHg4FDj3nanatwAyrtkyhwn6BkvURjXkQ2QYRevTmU7v6T2XGJVZg1q3yqiJS9i73FejWd5hT9u64Y7y",
  "key6": "3Lto7VqVfggYVTAerKNWvHgAKWXWKLxfuqVvQUh9Mr54SH6UYTyXjdc99eQ3nFEW6A15DRASQBQ8HehHiBT1pxN9",
  "key7": "5cQf6QDSxuBY2e9QWF6qYAPa6XF66aTW1b4LBUqbUoTzgetEXjzLgzae6ftxChqPUaK6Pso6VpV4mmEqggJQ4ZGM",
  "key8": "5AbRhxHUMp9CFQLML4KrtpBC1oYStcqDWbqcAEF4LXYfMBVzfaL8ZT31i7Yx5GguPcjfPSFoYtH3uFuZKW7rp3tG",
  "key9": "Wh3XfLi11rntBCczrs1en6Sf4zTTYJAxcwfXnriKcL68MaRiF4WDeNETANZNr186m3ZzFk4ADKxUBizLEmtiEP4",
  "key10": "54G7Fzy64wNz4KBcokGvpzMpJaEjd6aXGxpaQAqjPmmwNqJ4b2HLTGQEKqqVDHZTPrtNgEPKjBehkjXe6VwtZuFR",
  "key11": "3Gjic1hjnahGfpVshQr9jtyuP6ByWXEBeccbSbrwRGN36x6nMMA32gAoS5F5yV1yPUmT2XCkYhRkVJjVQfMdeYRK",
  "key12": "2Eq4Z9deWfWK9U6zzyqiyEYHad84AGFxZVqwzenkiYk6K98BCRXxkR4aRRzKjW7iveJoztaqHrrHFuJCWQfPy815",
  "key13": "2VHcHNdXdqwdC5BJqnWA3vQvMCPshBHj5AcRpMLnkzd21Dxxwvg3ubG5kRuYfRsJn6mcFooVJbWr8DPP8cr3jfK2",
  "key14": "5F525jXy4JWTjt9p27FbD3Hvaj62TbEhQ87Nh18J22qSiPB8KCAEhkhVuzNeNq1y6GTn1UMPzNFPi5EV75VHhyGA",
  "key15": "2qx5VMGYN88JC8FCJqhuGga5JHKEwuiDtZRhEPFKPPgTFa37eBN8AzK7XsRPkv7y7zgCZ64Hsm4KjoCnjMh1qxKn",
  "key16": "5zaGpLcyVrdQkQyary78XkCGPX39uvfsZV4tkDoQEeCR2qiSEbMYiKTZY8H8YvDPrZSJk7i7UZ3HreWvzneCytRW",
  "key17": "2Wh31aGjmm8UbTxaQwP6yvy2yPn5awA5orCN1pGws37Z2yKyvdcybAoV32PWKFV6Xwx8JZQ8WLAUS9Fr7mGqkHH5",
  "key18": "3KJvbSGbhE97b5NgXP2Ug6YEHP4x6ymLdtk3YiYKkTY8aU5m86UB4SrdZSsW1Fdx7TDN1DcajAEykM8oYukd6Tnx",
  "key19": "5MDTNRxg29v7whb9zHk8KTydV99psB2PyfCW3cjUvLRR9ySqi3kNUx6FyiQcjhbAbVkpCXmeazgJDNzPzo9CeEw1",
  "key20": "33YyUvjqDEgqziuuUyV6Fhae788uiPPHWV6ci4pvQycAVpMUi3tnoFqp18opoxgYNHRw1usiDfSYB3v4r9EPZgJ4",
  "key21": "YvJiTwTmiMjwWNRoxaLHwyqmaNumeUqbee2t2PLXdvXbCeoBw59GUNXr4sBBqDEbw2c2GsA9n97cqGxepYTS22z",
  "key22": "4Reuf3HPPdt5YMnp9vn1NR8wvPwMVPeQuh1QmopTuQZyhAHt82UeKT1TKFC64Y2o8HHw8Puf4jdeJpJhuN1dTL8H",
  "key23": "uQZ3upSqCWsEMQ9QPU2a2NbLtwLJe9z3jprMBJ7An2BtcpRYx78imxdqD65L3uMr4NgjrTNBceYP42N31A3aBMk",
  "key24": "74ELKUexDbMUTJJaQpZNQJ1QsNEarqB71eoGpVu6DXu7UwQdrFHeJcYVn5spTGnSBmX9KQdfbTqX4dwkhrPkg11",
  "key25": "46N7Gf3f7fvYDDzop74AQGk5oe3G3YTvK3raoQJQiNdfjbLLvnh4FXJL3JeCkoFX6Uy8AL7ZQ51FAocRhDweYBid",
  "key26": "Qpgc1kCSzkNd6GHDVbkdw7STpGqrrpTHWNVo6Tnd3uZXoFyygupdGxosmRKFAYuzsJRUdnUm1NSoNM6ZmSCqmP8",
  "key27": "uQ4FauCbVntSmh2Fcwx9EGEJFQyqiWYfECwvf6bhPdEj6qG9TKeCKygfvXoe2FoT4XABL2xSkWQ99HzGJHAXCDw",
  "key28": "23QX6uAijVRcRFyYsvTi6kNgym3obJyWJQ2QtyQetDj9c1LKyywoZseDAfCyPhVsUh14CZ8gZWyvR8MTKasJkBxj",
  "key29": "3W7sU7fsQEN5VLs6Ew7qur7LLvA77chqSskuebUHj7G6rCGvrtoKMJ4XTKeeSRmLyoYncxvSakbFKSPMLJw48H2E",
  "key30": "3RX9QKParKdxDxBkgbNHPGND2XTktpeqcE94dxjP8Z2DtXCVRfqEdSN9Jc6BKfhEAuP3EAidrxwwAuyprEvkkP4v",
  "key31": "4TCw5igePbRNCo91fKYpYYjZixKF7bE8a51DWfLaC8mj7BDWwxfvGbM2QbSxQ5URSHBUG2iYhgfwh9bdqbytGcZ9",
  "key32": "2DuAWtJEnYNtNciA39izHLGgX8QXfSdQaNXeAg7GsUhsvz4iF5Czk2YTYLTAdoBXrhyQANNd7qT7KTd4BWyvdXj3",
  "key33": "54UuQVNHHzye5pFsgPX5gRxag8Ub48cnqtGoeRWbZceZjEpFYEJBWKEsscDRNZWqpV8cyaVFFnZw9BJoMyuuW3zr",
  "key34": "Dhds2gJV9NQ6jqkVQawTLR4n8UD1YwK8gVnqzqsjc2GcWoTdq9sovzMYFt1bE8C7J9AzPPNZCSBgrgrSzXuf2yc",
  "key35": "4LXXvqSKRQA267mCRz9cUPKuhq5SPWiUiXjdT8nbbEkwMxt32s8PVoYzKysBFFt17Gs1ajjbRBBbxRWm2SrvjQfR",
  "key36": "44LuwdGjLSprr71g7nPJqC9Dai6cdrLre9nWSAahXSmqtU5KWQxvtGDcLTDg7izv5DgcvL3BWtgq8PF3jjHrQEXu",
  "key37": "3dNUUBKyUzYCmtKdz2yLDdSmVBbLA82Jnq2uYgnTRq2bfieBsLL7BRFDbQf9548vwjNF4e6Wh8qGopb4tmPsZaaw",
  "key38": "5D6JG21jxVHMQ14XdnPfFV2zEGTjpQaPAti1ZT47mGbdsixRBVBnd54dsTxKcQBSSqE9NQkVBQBLLVaMhZTzWizf",
  "key39": "5HbvLRM2W32JMDsrJPA7epWt8xQ1j7iCNYjkYpH3tCk9pgeEUyxR9PtrDc1QmvxsNMkhfmT8GkbpUFj3cSvkFRHP",
  "key40": "3CDCQJAs9bJfDVQ3yNnAEGJwzg6Fu5wqPh52A6NQ2JyNdKQMRV1BUBoBetmzG6g8PeGyub59Vc37u7y3N2xpg1j",
  "key41": "35SyDxdaeacPya3UaHaHsE4hdbFxUCraLhRZnbDJEKun2DTyJN8sJmh4UzRqWXiw5MuQra48wHeBKP7Jvvkvbu41",
  "key42": "4z4vctG22wz3HZSpzjSmWxpaujn4xB8ZU9MWRt5zYCZERFrVth1yEoQch68pD4xWPowcC7UxKPgrJZovUXyjgpTr",
  "key43": "4Gd4NzHVU7Hy5jt1obTEEsaRf25UDyk5MdSk92dnBXRgojuCnjzkd6Tz9kVMr5Vr63kxk3cDCDaYVcPY2PUSYySN",
  "key44": "4MxGER7z6mJbYf4A7LgvUJGqPD7t7YEEKg7tfvXUimKBxnVkukWbPHi63JBaKq3B7FrXENpRVbRL248MMMEsZxNM",
  "key45": "5dtEpuyHoKPvzufENLjypUV1uz6fAyBau6Gd4Rkg5ohrQgFtT9UGJ9JLZpsnqFYMZT8RR2kfYV7g2Dqiaf42Tnzt",
  "key46": "5wKxTeP1vYCWiwJRZABB9NUTTQyjg2gMn3WSmpLGWkKMAjjUhp9aNGjHW7uCFNRHBAgdbvwTTbMNSivn8LnkTWVe",
  "key47": "4GrbGhm9dNGiLHWDdjHCw7stTcAjqwbtpEXgdv2HdWpmjtEE5cVv2eTcqAW9fVPshcNg8irFgqQ2fUkDP5ri2hi7",
  "key48": "53RxwrwAmJpugygYUno5XUveGyTh7tee6zfhgvVj57ZT8UfD6FHHL9zY8XTcT1e8XPZCwDi9sMN1mHrMmhDWJGos"
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
