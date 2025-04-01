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
    "3uHg4UTakrP1ZXqoApC2ce9RDn8Zmcen4TRM91SgaeZB3NVye5k1aQHMPtqLxQWMhhHBLcHRqrAHnF9x3CHuEGz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hJcnHEWRKHdtnwGCSYgpz45MnPXP1ViXRBRdVtSkzoPsK1jYmzxro9Z1mxNLMRUEfQ2KDSpU3QaTrJtEGma9APy",
  "key1": "2i25biVzLbQ5oYdTUR9WLohKdoFwUxywBJ2sVNMqvJCVuPCVd6j9fNsWGqN5VyAWqxb3wYSvvYeJeCPEVzrFYNVr",
  "key2": "64J9uanUMuBNKj7AG1rAnFJ7wGcKoKPstQvBpq1p8BRR2xVLSVs6PH2AbkGgW2mpxBndR85u9diDHQPi5nVWYVCe",
  "key3": "4UNEu9uqr58PhwBPqARZykRBQCjdykQUQW67RWFwWwH2XBSufdqa43YsJZ98rnQYvwJPBh42MA9XapvmZF1U6dPj",
  "key4": "58kH6WtKvjQeDquZVA894FUmt2rBzNsZj8eKrgCEuBqkVxoxkghkSHFgQjy9o88TVQCtxstSC7dutEd2u8dfZdzW",
  "key5": "4DdwM3yVsUz1GZjoN2vFgpDo3t4CDiRH6AnzejeEZZ9GDS6qqt3qb3wAqHqjHo4F349tW58fZ3gvPrU7h8qQzru5",
  "key6": "VGKeKhSJvau4ymrKuSVedW3WUPUURKUxaAuV4WhuoKNdD7VbdhMkhC3ruFLKRq4113WVF6pUzAF3dEfr6t3f1p1",
  "key7": "2HPX49DLLFjNkiQtNGb2rT6NHcn8YvQP5vR6qPid5tpJJg9p2TcSrSC1CLWtRhFSyZavuizUarFQtaAxXLv2HS2v",
  "key8": "a6pbr8TUPDrNqDrf5RDeGNkDJeTxMdHo2vZxn9QEsLSfaD8V3BFgibSqKZbxcYJsV9wTGuuX3AnMf3zyXzDA3fB",
  "key9": "52XM4vNSX1zyGLk56JnSsUzDwAW2yKKU8swHC6GfRUe9kYYphsSCck8TWPsAJSuqjbyRDfdCUSHoh5LSWe6wjqi4",
  "key10": "4pt3XryXoBUpKayEaBdfKPmKJEvUXZn8PdZWvxvtSyn2Li3jXwj282fpkFWnhFVNgUaiuYSYWNqyzeCN4PtN7MMA",
  "key11": "2t1c4m9nk8b62L7zbyaA58YMoArPDPVtDgihxNjUsUu2r9hC6XNe9frs2r6j4qWTtuCccEN1fwjRXH6RM9tCvdep",
  "key12": "w65PQVUdPp1ctxM75ZsUwnF67PTV5ADo366geKnn9GMdx5R6pWu6nwfEQ96s9kBAZQPbwbViJyzbACEbsD9XwTi",
  "key13": "dmFXZcamZmwXNJAMDUjgkmQNpGq58yzAaEbETzFt2KnD652WqYi7fjDH5UjSHS9comgT2L6jJSaBjXEoUGx9DYU",
  "key14": "3o7DYBsE8tE9K1RWpFPRfZx7sJp7bPtzLScXFYVF93bREQ3svttvodq59z9nvhk1R1rojokmjctkaHnChvQhqxTJ",
  "key15": "4B2juyApVCrwt3dcY9MpQ8xscVJQx5Aea3Zqb3ekRsbPQhLjvDxcdyVrGB1y2KfCETSsYBr3W8AXrLLsV7fP4w6o",
  "key16": "5Er95aCJs7haC4z5Tfd7BmMCQfvVz6TsPC54wFGaMRdjMHwjxYPgixawhjtMBvCXRE39gkgtTxxFQUjcGmCQ35mD",
  "key17": "5LXui5LxsxZYeHTGkfwkr6fDuCERwuTTyRZQBVJ4Hj5iHus9VNXzi9KUMQmWDK61PrwfPXmWwx7X2jWELXPW11Hb",
  "key18": "MnNPs8STRWayurLughu2YgDUXYfiJmXZ5dsnvQY8iTPUU62uw6U5hjpLACNWYm7RvwXzSsBd5u5fmL7yPwnmVSv",
  "key19": "4tNctyfAr5qg1XH2NXLLXqABHrQhg6YDM7A5dMBJcYFeTvPGN22iWLnW95sjJYSbCbqZMJugbQ6QApQPAms9jwyJ",
  "key20": "5XLE8tYLYhtBV9Sut1NKs99RCQoWFbiwwwivYdYzrF4cvd2DecYdsgX28fd3pzUfXmgnHG3ypKhtRjK1wFNd4RHV",
  "key21": "9KENXzrvPVV5GUMMdQ8LmQwgqRg23Q7bB8jzK1dEonPZ947FZFKg8JQMpsJMFWKsWhB8TMoR2LAEyTTekDEPiyD",
  "key22": "4s7dzJmpZQ8wnzrwuSKS4NoXG8qZvttEQKr6SC5svjeFibgXF6C9FW3wnXboxbjr4GHEWDwXdMaFg6uEKUW4sD28",
  "key23": "5JQTnyGmb1RpGMQPeKNo2LTJuanTPsxufjikjsyA13F9vsp3kqHfK71yx2cPdXqQyWNVTQYFcB95FUyNv7RgugwP",
  "key24": "3CwABaiUsVHvg7gtz2y9xpLi255iiriVvAjgoQmswn8bjQQ7WaPc4xZh3E4REjQUij13jbwTMc9SZTADH5ZWeaUz",
  "key25": "2VkdX8LD9jzbiJUunjkgniK53HLTmfPAsaviqiHEU6WpwuogBcgRusoq2J7dTT74qdL3xpW94P8WjYMsYgG2YLW7",
  "key26": "3vpdakZJqRzoUGSk9MhjJjjeNKwDh8xtQomoocMzmdK7gayJ62VwTF79VvNnNRkJzqzhvFFLhhMoEisi2BuUkgTo",
  "key27": "4gF3BhL4pW5K32RPqXSWhi7pso6GLEvEzqNMPmrX37farc5oPWfv2ccd2b5TBpcmzx67tPx5HkYMZupnu31H9s8i",
  "key28": "7JwhDa97PfjSo2uERHyoCvxDUEkEH7jA8AaBWUjtSrZDZAUQBmkcREJvtF1CLc5XCw9C7ta7y1bbof3Bpg8vkyC",
  "key29": "3CCHSmJcm85rWh7YQxmhABofGNT46xrGpiez7p5v22kBeZe3747Ub77YNUZD6UBUXimo3coD1dmF8pV3fBPVCqyP",
  "key30": "3wUyE9BCZnruNA1JFe1UD13BhyuZHGADpiHEfHdDdQftXgpjJqDkZtTHe5Ua1bT2ghF7vQaGHNo3oB3Kfztu63q7",
  "key31": "4Qn6nGnKZZnCaaxkZGfM6Nd8ZZVvuvZNEeFyszPZ6x8HwZqE9HWMKUGNk8U6NVUSvWhkPdHoVskgGnMYdK6CPRXU",
  "key32": "3g7tQvBStTTo1jUdFp5h2sFzQWukR9Qob82Cbx5AsX6E2usedBGPDvEmiMhMtDeEW5Rj9ihuf4bu2bGVtsS5jxL",
  "key33": "62y4XyPd2Dwa3q7GEKaQ5pwbeevoPFTnExxSPP6SdXKg7vS4WJS9VFsWeET1rKPUZYwssS4b4vqkV6QsqCFoDXwu",
  "key34": "3B1ywGc2c4mWLtpbKnPStVebd4syqBshNjC8dXEkoK1JoyjcDprH9LS2DJAqCvpMF6cwirSDozhmRRKRfNDT818R",
  "key35": "ZK6osLmCUqGsSE2TRX5VZWYNAyR4gnhPiZnRSh95NDVoji4TsY8UD5z2YoLqupbpgxYGzeBhHz3srGr7UzXeYef",
  "key36": "3pmj9MuSSV8Xz1kaSuiF4TqcyUQ72BrfUqUkTSW8rakxz89tdaHZezvfWqDf12eaPtPhvvXtyX69LUCZwLJBRn5b",
  "key37": "pjk3QJmZfJsKooPkaYE5KNZMTM3xdpx34nH9xw917VEXfKy4HSWB5uimKA5TGK1eXUjHgHwgfrCsgBsvUS83igF",
  "key38": "xyECUq8VChFN4HUnBBemJCbrFxkek6QpSewRTd2BLiwuiyydkL4Gqb7oyhcLaHpDBiNTFqTF2eTSeisPoAdwYPw",
  "key39": "3udAbjw8oXDACicnBwJoHjHNApz7F2sj421zAR5cay6scMSpXAdzDStWxfDcyRydavxLk1uGaX2SP7zS9tiymxwG",
  "key40": "3mHgvmtR9XqfpeDMcFF7HR6W3QtDe2ramqjPxWWs4yUP2ivvRP4T4s65MduGqqrMZSytzEZosEBcTdxFwkTdZwWu",
  "key41": "LVfU5jxxPVvigubgcnGemuXUPnppfG3wiap2V3ZAriujYZqYDGKAMaH3ENS71WQHwvCrZPP7VDm5Gs2NgGa8iZq",
  "key42": "2pUJzXZscBtcrnBm8c8vULgEzRSGVzJnuPJ5xrCDSmNDHVk7GiiwMTVquA3U6V9FFS96QM6U849phKmjWceBJcJe",
  "key43": "3ZxtPvKxif1YAsxdY21NFgnrrat4YrmzeYaMvg12g8xD97QrUeEXNwjZ3tJdjVaF3sKVyx5aAaeW3SWuPSVX4Ucd",
  "key44": "3ZSSCvNfYhSUrJy8qnfX3xuuyFwNvoHHRpoJ1759MsKzmwJ7JC718NWsep3KfHp1mUFBCgJ8rqYNfh781PmvGjFp",
  "key45": "2CbTWETJKDZDjLXWTAXWpVVDK1ZpZ5rcMV5TRDJyVLL3T4DkdohLNE4bTaGqtPf32VKet6SkigJFD86Si59mVCP4"
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
