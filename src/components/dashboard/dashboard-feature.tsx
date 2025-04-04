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
    "upjteccKKRroQ9njnUsoHxsEmxwoWvHM854f9YEo8L5dMTgeoHMgt16ispgFjx36LFjhUtJuyhLXt8FDV8XoCZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eg1kaRJg3uNckk9ccBMJeeh9WqvZEyTnQqjPW8yvUDrJ3g3JWthag5F1aRfeSZG2HjNFR8Zhtn5dsLyWJNAp9X9",
  "key1": "27KcxbuduysYvtKm5yMRJq1W2aPYW4o7aHVLKapBXAy6bDvGp4tVFySz66asLEf2ugbRAZYaYdr4eSnMakgAG1z6",
  "key2": "536NrPcKbNQY1gUETM1RTr86vYaKcCVWvJ4UNsy4sUBaTQNVVfwPwc82RHAsqwe1WsTruUzYiE7R8eceRJBDUogT",
  "key3": "6VwYe5SuAZEMSjro8HUfcCHn2W7a6F23Ydph6shE2hyiyb4tjQKYNcHgML2CTwoBULZ5eGcjK7ZKku7ArfTtG5g",
  "key4": "9CxMb8ZJDdx7QNP6QJfWd5X6RoQ4FdgdNKM2Z7eeMWnh6SUixKNZQtN3Haj7jG4NtCS2EuN5TC1SsYpgWMo5vjg",
  "key5": "p2qm9ECeccaQoPFkUfm9uhhceokvXE6SCUbVXN6xmHUh2y9aekYL9uGdh28Ekk1SNN6nAGHY9cqiNVkmy9qM9rJ",
  "key6": "2qh2p5naDoHtPczVRSZhbNFK1H5V6upUo6Q9WMmbvTDauqKRuniE6t7BGeFBEBTBsr4ZQbGYoXc1x56CYvQCo2nB",
  "key7": "MmkDEHkjCY6CbQ8XisTuVwVMw2NnSr2MYSQEJ5N98t6edjJgpaK6jUSnsR7r53gx16eKnpQoznumNAaP3hXPvzD",
  "key8": "2P7M1GPjxBDVUm1Utn9AxJER4TcZ6WqCVst4x9h7X2hxGYpiMDoVwULAi8xK6PCtuLthy7oYq8nvBysQ85wMVUNC",
  "key9": "25wSvULY2jXEj8MebkxqMNwjmBd5bG4CbdCuuZAshxLgSUzGgo5CVWGXtKXFZX2fYqPSsiNpfi8ViQTmwCohohjC",
  "key10": "5WNLNUEmbTLYQ1G9VCyPRdLuzreDp6bKQgMA84jzfXDU1ocJPedaWxj1XdBTXySnewrNd79A2jcfD69REi25DjNR",
  "key11": "2VpqswZxyfDFxBK6sLW871unHxvQy3AM2VB34S5NESkzT18Db7Rf98WxQZqnyB7jFhQRhmu7zx4eZ6FWcBksDBa7",
  "key12": "5vUpLZ1VEf8aoUj8zHPdNS7tGNzM6fMDexwZeeHyfqcc5oxnNubXTo3s5yyf4LHVbL8E5fp89F5dsPb72nU7ax73",
  "key13": "3xRQtmDmdL57vGYs1SsQv7EJZ4GqXsDG4oHzgcq99gMy9fgBBi46jyk462ptoa7a9yT2hCfcqisCc4ZLyYQAkmQK",
  "key14": "5zGqMfXegQLHzfeNg9HbjHedYgzwf5xvMsxWksty81tdhtkpV2v68MaNRrAXbvp1pBKR9nvmAT9VAKpX6h2QhFZ6",
  "key15": "54Mc21wkgU4LwyCikBEV9FStwjhQ2knCu6WYbZF7a2yjXiXa4CebwudTuTSGbw3Q2yFu32wvHH1L3SKZmk6SKLD4",
  "key16": "36RfBkS4whocERKdcNN1sKUs2eB6kcMxxRydcTYHX6ajKMWCXUpNWS1hCVjiX3CT43xg2VDvUQuaCcRkRdE3w8fZ",
  "key17": "BbfoifjDUX177nzcTg2D6bGqmSCBtMeF1Ci3dAiJMB75VmA2tFpxfJBewLnh3Y6or4pbRgo4sgqSuigeT59V43D",
  "key18": "2JHxNQESkGj8AbwgdDDgc1GUKoH3bjsuCCcWtLcgRhLyiiYN8Z6x7hx2Z6ZLXE6njfUm1NfKyewDWcsiomfQ4Zig",
  "key19": "2CQ2jos4ztyfkuV1jdvKYVXDX4N971atp8Ex1xNRhCRRPHjgTAUACmWZ3fRzmt7GMqciBmjZ8mLNsmbU5cMipGVd",
  "key20": "3Z96gvzVH8JYy4b5kzVQP1SYg2fjomP7YvujJrrBJ4EmzXYs1QcLrq3eMwysYMQpxRpruCM7Wf7xajAffQkGPRbx",
  "key21": "4Darq8Ah3EJevNQRxuwPzGH825kfueweHeeEJvw5juRXmdUK9yLrKjLhy3vDJkGwWTHg75Dw5qHkq9MHkjjx8zhW",
  "key22": "5oeZcHBtDps21q1Eh8yoWpm7pM33anogcEXjkZbPpeFBPCCfNmKw8ykmNGZYnxoc9f2pU2Rfs8RY1p2TqtuGyx6j",
  "key23": "25W1pnUrpNJprs3nzWgTq5TKa2MsdUQYMtcEQ3Rtuv964RYBZpRuJmKPBYGXVMe6ULv2553nU7KfLqh4UJQjnP3b",
  "key24": "spvbcmXt2rixpUHM6bFqdTgeik2vVrpoGboLzV47eNFpui4YXD31Gvf4vJPNjvktMBqsDcNP9seaXwYpEJpjERQ",
  "key25": "3FCDjN5XzF5TrxTuQVjrizdYAS8C4QGpLkpc42MuKvvG8hZFSJwzbTYTvsqMecHVbVdRyrbbgnVRL9yu7qrsgzyb",
  "key26": "3nSQrW8RP1c77qHnpp7r7zC46WCQ9FeLZAcrDHJwWi8abawbcJrppPKrAKVeEFmLZ2iyoAosBmiXa4x1sJaPYBVa",
  "key27": "5AgFcwC4pPJ9BkekKX1Ho2BdxPhrDh8jQTXmjnJYj4d4gnGbG4rc81ycA6Bwv7m3fncW4KJnsVyxPDsCc7ADGHfP",
  "key28": "2Jwnorb67G2jYZapx67njwNqUrerRskvURJkbBVfNmMmEajxNcRVkPdER9DhBeSiCfwS8H5QxDD6aNaXB9h1EHMg",
  "key29": "4C81ouRP5H7rc7n7EaJjMgXV5VvFTpsSR4jeEox4wDq34tJY8AKWzsTEzM3juZ8oDvqNrYtGN71t4o1YQQBTnjHq",
  "key30": "cGbaF4gDfbZFyZwtj1V8ioGQhokw3t8qWvwiwPcLU6hEf2ysk8qngxfBEmiP7gsSxpGMnZfQPQwC9DBev1aMvRE",
  "key31": "36p7JCbV314NgiVPuP8vfBTH8c4zWc8CCVySGV9ZnkLvoxhSumDCDrG6hoiYPugktW7tSsnDBLbpoLdcWctx3hgt",
  "key32": "5Fp9LMCCE2skVGCy5nr3KmTvw9JwuUeVmgjbCCzs14qMPh5KDpgKc5QAbKBzhpAxoeRJv1FW4ihB2bGMGqSrBmsb",
  "key33": "2U6aiLpSmxffTTZCjxW82EyKoQZXYActYZhL3dQjUJwWYp34TLJ3zyvLA7kB6gC8QKbfAM7ATsR3FFLxogyKftu4",
  "key34": "3EYvyVWVKGsgZHEqtfeVGrRzJJyHprUcGpQraWmRwi6UhnWyYwpzZmJwqcF6Pj7jKbfzmWFXjJvbfYU8XmSrTZ5u",
  "key35": "3xraW78Jw96U4qjiLp2R3cqLLifvXekHW8YnQGbVqMD9iDmGaZfEd2gdar1d5VBwjCgDdgBT8BGRNTHJ7SX5zaXm",
  "key36": "3LJ49DWhzysP7p4LZrEnpeaJoHHAkSVTwHcau6ocUwC5dC94FGuV1Jur6wiZrywY69Z5JhkeXboGZZWjeBeHDud4",
  "key37": "5o2k5bjCFeN6779Xrpoe43UXehKbyZRBXZN3ajSnVG2PDri8mb1KUtAewKmq4PKtB543AU2JSfiQiZ6VksXpJYLF",
  "key38": "3PCPfuGHLNnBRA4XdoxP9Rf9QkCwFYu9mhKwgtpKsJAZBfCoTwzH8fMkDhKceSvQyC4JVnr3SrdjkcWsmjW1HjQS",
  "key39": "4p1NcZ9d19YQSoFyL6pnATpT8JBsG7XvVD5UV2pV6GTAn1FQbLPsFZVMpNhqJCspPjwJteCTPD42r8wsXxQV62MF",
  "key40": "5LJTot9tz12w7kULakB14PVepAJBaCvVYzHYysCMPrhZrrtJfugpVPCgtxoZr8g6UnbLYG4ZRHYHYXDQi1L73U5t",
  "key41": "3vJ8KW2iGx1MAqLP7XFfERvyBKXFbbS5CyTkfUmS37SL1cpikPXFi4LWW2ZFi5MC8L5cMLoffdSU6tkAjv41GYhR"
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
