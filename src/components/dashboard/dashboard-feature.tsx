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
    "45fn6aGhieztfEeC7bdnCaxnUbCmfWw8ZnPggWwryuWfmAfr4zma41DFg7P5PSKUDWX7XwGXTJxEbmmFmwdsPRny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oKBTL4jAp1HAwv4MBdZ1VGjjWVBieDsD3SBBHhCUV2RuBJgLmQNejkLMpDPGezh2g1pQJSMWHcPMxQ2ef1PDnkJ",
  "key1": "2pXk7R1oQyNutKk3jMLz465LMrgsdMBPVd7tFdJWXKAbkDE8DUtkNVSRv578PszRbWtF8jRC7NKCVed4kcynhjA7",
  "key2": "hZ5777qmMGv5i2CBDo5t7ZPVJyarYAyYyyRADExfXm9YXuAWYdVnPPH6ydz3o7BwtG7dgEsn6zafXkkiFiaz7im",
  "key3": "2ozMvdrRbqSjLprNrUd9T4VGK3HX2kqGqAoL5CtVDjRueBWkSFervT1AqC94D6ddLqPvSuwfVXuZJqSnrQcYBbRv",
  "key4": "2rQUZeUGdmDh9w5dfBtTFagycLfYWXXtbXBhF6pHkBuhYzNFUnK4SkDLtDUtJuqpVcx2fRNmU6xgv4p3Z9ahsiGR",
  "key5": "2ZatRrmx7gnybiAYR7j6ojPZNuA5eaKqkb6DvFG2MUouFUhueBmF3ju4FSRwqGhxrGV23WTrvE69yQxVaEpS97x1",
  "key6": "5PjtcdbfQD8sfaoSB6Zwcf4wwjHQXcVZS44WyqUh77BMvyV1mwtgY6tBxpW2UJhWL36xHhrfrt9kQ8FByRStHEeG",
  "key7": "2YoZj54XcwS9gv157Ys5kZPiSax4E6VV7cdYhswjvyZfyCPtqXK5uCE2UESpUjot4vHb8K26SAv1sbjhB5nCf3WK",
  "key8": "72vo147oukhvfx7X5wqCaFZZDX4gxXB6X8fc1HLSMEReeE8v73hkwEjqKmhMLGscS7Sy5qMttE1gdLgSxrRoGsd",
  "key9": "5fLBF7ahvAc4hZELRZCZKkjaBasifw3f11RABUjY3MxtTyfpqyCvGq9ayMbgS5kdzyCaSaJQGWsDn7ApU7tS9K9q",
  "key10": "2wa6cuXb84X2LM1QWHMwe8izdRZXh7qQNhBNmL9bYQ6mYBBHkBGz3VR19M2SXvP5y8kEsUCkL21LherUhstGfUYK",
  "key11": "3HJ3LJWpfd8QwDDMcL1Wkos7WkAR3AJ9ztt1FffS56iJWfpsq1tApwuMyR3Jsq3inWhr7Tjv1c9thBQyF2h3xt4Q",
  "key12": "4FSPCV71zhfN2uGCAij7qTFZyeJBRSE1RUXki3nF7XSxLSGZuzWm4L7V47RzCRarmuWspHvKaYe7jW23sYkDtUwF",
  "key13": "4uahmfvDTsnSe3dDSCPVQkNJcWhLWNJri3Mwyf6hDqFWCmxs2Qp8hzrsR7AT9AfoXceEEuBo94Z3UWMZprpMTffo",
  "key14": "3MvEWsMTUrzE7KTCcKsz2NLcnn4VAjQnKQBpVFuBoms2hwi7a18998pruJffZbLwxoJDhEEGXoym4STWyvYxdbtu",
  "key15": "4NqAQ9qc9Cnj2n4ZvmzFTWKVrMpiSSMvMzJP18u8DkFMFxspPes3GPGfbTS2HLYdBffAeKVnJpkbGYnT7sMAqGRD",
  "key16": "3TzXhzvTdAcfxXDaHifPfrDaqWBF3gjQZyg59DoToj45YyWTZqXvmbpsoTBbF4p53RQGySTvy718xM9y4qLvcZ6U",
  "key17": "WYT8zy5rM7Su9wJ69HntkrRVS475FP4bmmnJaDV2dcNFbnuuNEEVLgD7FyXPEFvVNyimtrvk1Xuk89CacMTrN2Y",
  "key18": "4ZTRUJ2xMENqGS2VhjC8XPEgBuNrKt42LUoKkcG1UrCzRQtBvB5p3Hdk18SZeNMWqw5FUAunX8NUpF6KxAoDia5v",
  "key19": "Pv9rkEjv4XxzyeQqgNbf61cq87K3NBxBsvwsbfdFv6fnLXY41tVx6n4i3SGcGR9gB9MPVyKqQiBtL5i6B7XCsAx",
  "key20": "5f5CAkTVgsdyCqTiiBXKEoudNd7W5jpTRcANiZyLLTb3r2V57M3D24A8DQt8BubA32aBrx1Cou3UGNrRNwV1Coro",
  "key21": "HQtSEjfjch6M93i5GiT95BAF5z4QTaP1fppW1cW22EQ6dxCxRJ9BYnpJwqH7FoZwSFWNVZCvxZrxkvpfpw8NtWC",
  "key22": "21gcyjcKYWJ3sv6fKPcCYBc4p5Tkh4S8iyEumJm3ETDn2hgjmZopKwvgYCTpGS26Z7s7gzYPn934LyUY1c578Lvf",
  "key23": "bGLAocdeoEMQ3Vqqm2umRhvRwRB8Gk29aVunZvLue9yD5WEYUCvVsxK3kQ8C1jkbbNdksNd2bDVGzaiauq6iPJA",
  "key24": "sZuUGRJ1kDMtnhrkgZYtEfgoBLoVe7ZVLUPxZ3p84Qj8T6JXi56h99weEb4ivWRVSWymHCsT2kWkrFqKRL4AsSp",
  "key25": "itDKy7cTthK5usnCcJdFSaj8X92SuqfUAJ5snB1uXCxvMb999QQp2ySst7kVx2AmcmVR2Mx4ykXbeZvWsYCiUtT",
  "key26": "3tDusNXY6Y9Ntdcv8m661XneUx7K8YaBYujay5HFDp78uxMU37oSW3y8WBdhXCHUWiP97Wu8t9SvyV5qRYL4sYR8",
  "key27": "3r7LRboBFz1EqFZbhSuBYXGJooJpWu1xKf3YVWTNXfF2RSKGexK66cZs7nq6qfgLhdBoQ4foCUjoHgyhZGK5oL4p",
  "key28": "2mjQvqJF5d5GEAXjAYjX5Wj3jRS75s9Yaswa4DqNuNMzrskTzAzpxETQMQT2k52RMUU1nDQJrzWxcu1C2reMYPrv",
  "key29": "623U5Ye5wzZdY5J8AUYLJsaSVXkukz61yqorMW9PQ5LPkmUaTsuHe87ZGQaympPeipmp5PsrtfDX8tszvMn1tEdA",
  "key30": "5Vv45SGyBq2Zj3UVx7rVno9p3qikzcfBeq8JZ9U6wbqKSuuGHqGNCtmuVygzwfkxuMyNuaYn9pH3wDRjoj94LJWG",
  "key31": "4E87oD8Duuc72MqtQnwpp3gQzNirs31SUJ2eYFD2aoaqz8JiiYRqiNAV243oLoeSkW8E8rvD7Cv77L6FFZYM9xgT",
  "key32": "2SqhacW3nxMNMuqB9R81NK3fjxkaoyPbBEqW3a3Rq5EVuksrZHUN83dZ6rGHzA5uAA2xjK7S7aSRXV7troPrTwHH",
  "key33": "3gy4tckw7A1vgqoqDkueVhudyvd3u2ZmEgMhqU5Gt3m4ZUE6yfBGyjh1rKKg9a2SQS7S599MyxSg71UkhqysptCx",
  "key34": "2qEd7vrmNy7Hrq5f9qFa6LVQwnGDAuTzj1PBM8cU5fmMHimKEqecpG16HSefq55Xw9u1r2rVbtTCjtB9cFtzieGV",
  "key35": "4k7pbJYBBL15ztdx1zz9QTTrM1cN46isrhT91QFykuvMZ9KqENeiHEETT4bqN5r1JqtucY5VjMkJ1hWptiSp8mZz",
  "key36": "2qBG1iHEN8oKatnUUjnxCepz9tiXXbUMXMRCLjNPZJVuZt8Ws2Xx4iDennT8Wh92YnCARR7NkCA82L22tP4TNsa1",
  "key37": "4RounVnvxKC6BwidqRs6UMpTGGdZxzqzQ4hUhqooAG9KMCC4nrQUz9Vuo3Z7PW64Rq1YgQPAuocqP3UNTxJa1Uw3",
  "key38": "3iS2sWkbFoZA9MDggmy7TtxZcWnqu33iviJt28M8bw23HnmrSN17hHqNeqMU38YbQAjRKGxsNDJ33EUnAdj7rDSw",
  "key39": "3EmmsvFxpdLhZHfQvHcdoHbBX5xWyheEer9qXMbMm7vjVwjnVceE4HWBeazuzokmeqiAuQQ9oxFJ2YMYyNYV5JvY",
  "key40": "3osFv3egGHnSFKrxYfcve77gzFmfK1bdQ1E2H629AiDKb8yGkpwoQvXZ241NmqzaVrzswVJxtBotrNF3Uxsdt2mX",
  "key41": "2yaWyLM9YeFxGRX2NerkUTaDujxdoQ5PoW5D8etEzBGiarTDw5vQbjLV6t6UVYpMyf7zrRNyRzZTq8PykyVsiHrM",
  "key42": "2yz8j3CnBYcQ97C2CdkbUh9L9h4bD7jvbuJfJDyyDHAEEMTE68nwiyJfaqgYRq8vn7kocGpCvVEkcaN7YfqJC9Dx",
  "key43": "2mcED9UJXBUcCkveLEk3BwusRQwqxdyFfNBz1B3TmjaLgivZTNmJVR1xeAHhAUMpBbFHvy4Bn264VhZVNT4JgxFh",
  "key44": "5KuoyHXWeAfDm3wNX57hPLPiVfWoAE3BU6oJEgrrNXLsE6zcGziXJtDWCuqfH8SLh25vRPWGX7J5rdG3PRi7Jn4T",
  "key45": "3woqwgSEZzt7VQHCLfYkis7iFeoHMRxG1YSzHi952WyDhahE72eRw1FEoVSbdJ7SXDik9cw156NVJ3XUSBC8tUzD",
  "key46": "21A9R9akb8q68GSPsmfzJBnBCJxQTHoZvCqGWYqcMnnQhc89QEtpfE8RR6tKCLz5h6MCSwz8Zcf95TVUnmAqee1v",
  "key47": "4ibFA2BhTfqxD1iM2mPCuSLvrewjUwjLD28dddd43FFPCzePpTfNBY7iQ2dCbYjAJoKwsxhSfDR9Wu5kLPprSThh",
  "key48": "P3S88joYrSvz7EZtCxKztsmRqwhsgBQatjUnqaeQ1hQxmwkCoyec6vDRk3mWdZbriN4fr423rH946aJRgFgMyuo"
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
