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
    "XDmFuobsQS7Lp7ELMZVGstpDUenNUkxxCWWd6amzXhGSRXGsabAQPgCHCRt1JFTEn7QXc2YiigpLANUtwDnkD48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y18BLwg77yiq87gxqcMCK4XyGbt9g3Wib5BDDEFvbU86JJs2re1c7Qbi2xko3q591jcoWSPrsTwyXRrLFJ8iunX",
  "key1": "5YU9Xh488RCwD12HqtaXz4EpMico8bZMabjpfWWbLjUzhuEn5HzGZUfGh8G7Z25ncckRTvukkcripqQAs4xrciNy",
  "key2": "3TsHAWNv87ciJUoKt4f8Eepw9kpzNPf7LbbCJq8jvfp5d849K1WSt4woi5Xw53pSQYjzqFCnhu9bC5JWBP2AuyyM",
  "key3": "4aqUWu5tbeCnjHDHprmvmMTd3i3K4rjYwAJiwH3QyCMofuPfwXQLTJYp5Zpuk9GtaQws4yfKDFTBUSN7y5dLdoi7",
  "key4": "4qdD5Dfq12rkuDivT2wrVbyBpfh9VzWi8x8MUZXoyHgYYxp93DaYYnJy3k1XzRyPd2QtkPcKABzHs3rvAt7HpyFs",
  "key5": "qVPa5W8j8JXv8Y4sxyg9fCV7uer8tx5RfbyLjWs6eLMkBsXTksthpsEaiYx3cTzuvCg1yZYEGncWnFp6ZQBkFur",
  "key6": "3SZhsVsiWaayEJ8RAeK7XP6pefzFG43odYur2DhQmvMadwQnheDKYg3JnSoFjjVasxcN54APjoe2c3AfKvbsD1AH",
  "key7": "2GkFQxdXzpwuC9UpfLK1dvH85tShP1RxDy5i82Hv17EhkJBYtf1tVnaqcxduqgrFdm6PUQx7YPqbNf8PxmoYn95H",
  "key8": "2MYPkwfL4er47d1Ub9Xug1Y1ZJzjtPr1pzMVtipPNGTGtZyDudk1XiPi5E13Y6sMoa7XBL2mUTPKnRScoMigHRAf",
  "key9": "2QH8tY4xch3j18xy6JuFXco4UrASCQAz4mzNCYjAE6WHUntzJjUiDPBv6ehfZrn7bnyxgUg5F2w3v8S8MJLKW6Lh",
  "key10": "63KnFSfvNbrzESppXKAYpnXtmZCLYufrR552CFLGADPtCQBdBZmTf7g2QjhNb2sixGwee6q2ebyUnqcYRoWNrb5a",
  "key11": "3ezrE6DZs5tciMrTY7vY9CgfLzb12Vf3TcDou9EMZBTavsWf1HpNxSpVsUPA4qVTHksPXBtAkr9gZ2UUqWBdzTWD",
  "key12": "54MdbBZ2F6zPuNGAvvqtRwK9dQqx4uWQpXF85gfBuGgw36WfHqSeacR53f3oCeuKmhpGEAC5PMiMMDKefvUigJT4",
  "key13": "JmaZG7zMGYAgJPeydQkygxyZQPZN7SqxvVn2y2GewFBXen35bAJweSJ2BZtRQ1sVJ25JSanvQRcCLiDPfMm4HZA",
  "key14": "3rTiBtVKJv2zx1fkdruG1ztPUBt1aZfdxEZApJKTJFnQbwbbWChf7pBgvhVNKZ1zFab5xieUSdfaU71Q4H8kYRtr",
  "key15": "3dfALYhqrnMsgmcypJumTsqev2ktRFEd8j9Ep82C5FRiPPCmCNyFE5xbGVnFYBfhFyDMh5Ejqfgz5mNSyLgybxkP",
  "key16": "5ZuM4Z5XnYbe5A6NjMdtq7h3eVcsoUqDc33msWZZdh1gKArWmBZvAsbJxuZ7XTiyo99KW8rWNxriCjDPa8m8Hum7",
  "key17": "3xGFL8tpcCdhnSrgHax2BkuckyLJAKAhyxcALANNMmr58w8Jv8Nmwa3YVfLDP8fSWky3zq6MErjvo4ujwSS6aFGY",
  "key18": "41zj3XTarSzw37bGxity72gugPTJCJMbU3BzkZyZZGAUP7jKBDxZBNBzB2334hZw2Hfayf6CptJ8ZjviJgTMk6Zf",
  "key19": "5jQzVYRzGZzdp3UEG2ebT38qQXUbzaeTWZ25gF3WT63wZtyupYm6Yg1ZoYTmWHhqoTvVr33vfDApTDWUn3DiP7RL",
  "key20": "2MDLQ3XuXSGPrjUfExtAE86FGXJrVyEAsjzL1VKAf6VpzjeGjbHan4ghzTe2VHpHdku8tnxuKjYmZr8tDCoW4hP6",
  "key21": "HUvenbt8u7Mxb9D5kpEFgviowHKGxAKZJsmakiPq96NK9Gs1HiZNDz6usbrfDQp9oG2BdFGgNJ5wgfAy1vVAYM7",
  "key22": "2R9JWdQ9Pgc8smRXqNJ6esxkNQRszivB95RvH85dgrbgjgju8Xzo4R6xe3GZ8fbKoeitL93CTttUascCj9GqXcFH",
  "key23": "q3351C93nDY38Hssogvxb997uHbno4nAR4s5t8C9oJZNT1zsZVyCKYtwXZmDwTPYRDu5jSrJYXfM5P8xN1ZV7Qu",
  "key24": "A2tafzvV67XTrq89JzDVQeHrzd5GBSrduDbAUzKYVwzkxzH9tmvukNnEF6Ny2rK23Ewajdj66UQyTexmFhFnbm1",
  "key25": "4b3kohRfWzrzskNaxFAWDeKMJ974eRQf4iDBA86Uh3deUMbJECWRz39uEs2JQAkRQWhdEmchEUeHqKvhVBBo4neD",
  "key26": "63LfbACFKm7yYmzjPvRPaFub8A6S1VCj95aYjnPBtHtoM3uYa5jVZck7KrPrCaRD3hZB4FN7Y2rvoATcTjAvLpW6",
  "key27": "ems9NgtcccvwtxsBuaV8kWDmu41a3yczLbtc88FDpt19PGFJrBBvNSNpWsjfBshMzbpVgSqeuriXGSkG8gWfc21",
  "key28": "5szWS593mFj63yisp34q7wAjt7ry36k26tTHF1WeBKwWeun5xZMjZXCkbrko6yapHvZa5AJTQLpWbaDecBk7X7p3",
  "key29": "5MmcpQMWr182A5bykcYwmL2mynWyPkP4gtzUSm8vt4FScqVGEZmpQWQTs45D6GJXqWvhFEA8YneDYAaTpcGsqYHt",
  "key30": "4j3c438XnkMneTXtcyhAqP1QknyFMFsRiAdhi49JGFTzix9c4AtoqGa1RbaVqrmCe9NCHyHmQMgk1PTSs91n92qF",
  "key31": "5C3ZWq1qcbDmyYVehqnawfr87f53BUcKoGm6ThuugGTKXMy2yswbQYVGVkiyCshDzEdaxnnn41jbgsNwwckayKqk",
  "key32": "4hNAfRvcoHWNVJpuj5FJaZ1V2wXiaxYGWhk2Pcj9XGLQuLiGVoouy7iGfYHYntVPqR6NoJSKikb9KbYfz9PEdpCT",
  "key33": "3eAcYvLtdxKRDagAGTMfc8DoxCWAniHUZMHxngp5XnoimdRtLwpigo4icgetV14y8sPUiFNzduCygVB992LPUpSQ",
  "key34": "4PQMa4rDP96iuRBG6c2J6WL51TyM3LERLYJAfQ5g1DnqLiQnq5sAfjN3oiPi1KkRzUupqT6SapshEdKFccTQLqpQ",
  "key35": "3dTxrR1duU2XRWezW2nzGxTfZT9UzzRe7J6K779D74MyUrZjBj7C4dXEeKtiDSf1qxcfBrxEt78eV8xWkDKcPBYG",
  "key36": "3JEdxVhsgtkwctYvL8Phj7y1UiLPbVRep2kMREngbwYi2aQo653X8WE3xHroYEWW4FBsi54bhduju14Vi3qQHsef"
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
