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
    "4PDoXZa7AAqH6pgsY3a7SuUS5S9aY6fADqC37FdSdw3Z5NAqpoVUFTVuRTGzS3Sh1JKWeQJEBzjiqy6BAsvgWPGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zsq4uKnqUU9hMiwAnCJieqayMYxJz8pYP6DHdhNeLgeCkBgiib47VpvNXTzqfDo5FoRy9aPA4krsk3H1R8xq1Sb",
  "key1": "FV6PrNkJbjobVZKfkbDBvL4jeGY8d8YJJT9TTFhmAQgPhFaLZBr1FERCXQT6uy9ZhoUuQ4Dtk64kP67hBVSCpVM",
  "key2": "5NQKoBvbkGwUw7DQYKJoqsd7wZcnLZJioYQhXHoXsV4ewABnbMNoF4W8bj3bHxFxc1KH9Ua18RmrNLc8TFwNTqex",
  "key3": "2EMesvV3HAbpvC861UxZCSCUHpoGSTYLBEjSNMZSY8G8mCXKMxXFVjnrKvX4xPqqEL6jZo9cvDs8gzBPPBmJinFo",
  "key4": "2och11Y7x5TW3UPoxUY4Fc5fEjFqXSF34va298NXHo1wNeNzhcG1zvpNaTBQhYQAmxZsHwcc47f4i6h6ovWaECMD",
  "key5": "qLwPyfNm6x19rUfWVqmfFdNFWhrR4WkCVKtvLVojZD4nedS581cjrb9Ej9xfiVBAfqMxYqpwA6KUqAnaKTSEAwr",
  "key6": "BF5bAfEaFCC3PrzdTQBW4BK6nCd3vkMJXLDXyL4iFD5Pvaj8BzsvfKQ9QywkbMurAcvk7nkfMs75UHbvCrTmr9i",
  "key7": "5QWrhB4jTRrBWMTTaQWSVespiCFS9P3WjptTgoEyoMMouNLrQyMStFW2NYnazm2DjqDa7qLSYrUAiKc9SRuKiopd",
  "key8": "52eRCbMpgLsPvRsG8qLBXbstEc9nnhXUhEJ6FKsiobr9qpgw8sBhRsXLSML9BWTt9bmDqJccBE8AfmGC9MsqDxod",
  "key9": "Zr9cbaJ9gosdqLwFhFtYZKxkxeyfz9LaH4JiLzZqZoY3hZoQVyPxpTScQ5NfnVwd5Zsu3Sxpvur1634u65WbMg1",
  "key10": "NWQqXzaVAfeMoYC4ePv6o1MJjWpMoa6cKFc3uoxRK4kuB5HiQDmBdTvWWADJ414WbSNe6Ua9pw8MDf26fGWyPYT",
  "key11": "3bAqqd9Q5dpbii69ALvETbEU8sZTC1PBi9SAaPLSg2SAbbBQ2QCgdev5FfVeFniXMChqHH9o9kyNBdXHkXQYSYNc",
  "key12": "5pUWzvmnBcCto8nvhsYnrdhMWZGN2jSTdae2VceuMjXqCG73iHiQWYGzPiUwdBq6gQkdLka5F5zDb1YUiTSXxGfk",
  "key13": "7W9gBnss7kcFw71mzSC5So5M4MLdjTvPmw64UBW6LTy1YD2XJcDsNxCcGYSiob8nb1v5hxCoMvKuZoDhbFr9AhB",
  "key14": "5wvuSLy2xr3siHEZyLWzNEkyBzfu47xWwdn4DdTvaopYdLvmvRwiRabKWJQPgLxcA6L5wfoDJFPgHYTJSjmLHaNp",
  "key15": "5CYJueG9kCvwQdW9RDgBupUvC8unc6DgjspKUb8Ph1grnbtxKE5WBcgARGBTBHY3qUWRrtbWSRnppY4sfEFy138A",
  "key16": "3gGCqN3iUChCr5C82hxSp3JdXDsJXq5f9iBmQYLXUPuAryFP71FRuQsaetqLqhgwfHaJJKG3B1MXmmtKqMzDHKik",
  "key17": "2HA5nsHpsL4kGFsW3ZZjbFkxu6xTXV6TBkZ2PYPhMvkxTosVBgrxw3QqdiuuawFCaNtixhozUChaSL2nxCfS6gCo",
  "key18": "2hakuW11165jXJLgPVk4gZytmFT2A6L1LGNSbjbg8JUCboGNho5VL2eCbzEJJbjhwhmpdLx4vq2jjsppEnJKbyvM",
  "key19": "2uMhr7THj3Wo9X2d9WTPdFR8J3oarmvBMMC5k516m9RH5Ai3oFC41MjNLAiy48HFdsEziRET8UGXvPoo5toVgmwa",
  "key20": "2nNTgrrjrS8VHgyhQzqW4v1RporUEcgYZYw6KY63o5Abw5jc84wxT2TaVP91gu8Er1dP7sqFC3ScZZ2f8e4VdJ6m",
  "key21": "5L29xsmTj5KqTU2A2FBnvHQzrFJu9Bbtg6mt3MTgbxPcRVFL8gvjRyHpBV8ZdTK5EH41GNeYXMsPsXgoNSjnFRWB",
  "key22": "a3khL5zktxxGcnEqGN7kXFxzzxov4AzJkFXbWexuchtFMRBeqCPiQPMAdFKQsSj9Ki27YxXpg1haMm5eW2UEGFx",
  "key23": "66ksmN48RhcafZdFJdNxNxHp3gzVJGp6XnbumPnaqziZQJiSnKYZZS3mkTv7ozeVmfmbi4FFALTAfhWQTFTaWR1f",
  "key24": "4YEWrxtbUosyyo1bTWsiduPf4FexxT7zhBpF7jHiRXQHWXzqaiPNFYjg1LWDHw7yUu9PpKbYrNipAbaggP71ooms",
  "key25": "2r2rMrEURuXTiWWK1EMAQc5dpEjp2Viig4coKMbrwDgqFXS8QVxxUXFLS7sr2vc57PVnkzM2gVvwn2ndrreLA3Kk",
  "key26": "GVKs8ey1iYT5dSQEhsCrm3caasC6mcifJbbrnHPTPXJwnk5NjtYgof5hZHtBECbdF4yM91GRoFKeiie4QuRk7eS",
  "key27": "2ECCmPQwUUPjb7Hpm2EviJDD4oWZFQs6CiygW5r1cN6mn8rmTCmvPM6MtmtfF9dBecqWgvtxSQcLAmtFMxxCuzM1",
  "key28": "HyBYD5Q957UyTBsUHg5aM46RZo3w2jfr7FknRkBUZbjFL8DDcWpFCw6n6ZrARS5YLXMK3uwG3zUZc1AAvoK4kAD",
  "key29": "quTzSMJfWT9T2TuMScmGgRoUiYa1kYXN9CrNAnQXujP2CrAraKxbrQotktf7ZESVWRbAcPsJDjfVTMh22bEy5TP",
  "key30": "2cu3DvmDxMVqraLkeWW2Jb99f4Qq2v7KSD5jWn9dmD71xF33imuNYbkvAGEb8rsQCWSdY8SHPYpC3U1A7JV6UL8E",
  "key31": "4BnXTaFJHscDuYxVQ6wU5Wa3beQ6xesNcypNB7LfGmGYSQ5zZ3sAg5wH4jGxiCHTv8jiWA6qR8KmCeuCdEDvTTxY",
  "key32": "5xYUMNiogmikfr2ZUr7UzUzW36LTNDnrjq4oCYsu4RUHf7q46RqpexQdYRngR4g8SbnmVzw9TnaiTaQDt2ZkoQpL",
  "key33": "3dU644PA7aKkfUxp2Lr6HKYHC5o8kdW3RBNnsMwzyvQosUhNmTsw1zTLYXuajQKDUWDSiLAJa5icCegwv4JyGpQp",
  "key34": "5hx2RsPXnojCzBFDgNT6vn5Rx8B42Hoceyd4SV5PUsxyKpuUW41roRq6dCxGtNi7uzBe2HdftFX14ErFZERYupra",
  "key35": "2A1QLk2B3iMygtDbetXwU5wZeGWZTE8sxJNFbGj9QqoVN23zTTMc7egBxQZwZ1YV6cByre578345ZfxZxmaKFA5s",
  "key36": "3H1THJYfJSW1ZodH6SBvgVBiQe8i5WBM4VzGDJYJzrqD5qqQhNvSho6wc1RKRYskeufXFxmFhcVEvVijiL1NaW3r",
  "key37": "K5i9ohiCPK7hDm8nUjb9gSMSMC1qt9ngD1F3dyxvR5oVZEE8EG2xoq7XatujA1wNj32SFEH393WyjsnAj5ZiNy3",
  "key38": "5EH97Z7PMgCkTPmNTk5A9cYgwz9gwPPCyGRNWuHizBk48C9m4RyV5KwDuXeUmJQiAsZvb24v6mRJoHM6MBZ5EKYa",
  "key39": "2hh4F1KHZd5bjjrn9dKAo1SLMJh8qg48MLgfw76SBNZeXx4j73cT2Jftv81Cc2vduXb4XtT9exZWpynumwn1EjYb",
  "key40": "2X1Pu426j5kNaR6xptVHgvGLTAT8ty9RYtMkzvr6BB7MACDazKAh9AnLg3Bub376BNFbfKQTA8DGccnwBD2PgwiC",
  "key41": "3Tc8pi16ZBjCtKwHNKwStHdnjZdo6ZKS3yGkJVD5qFEA6XN8NTuKmLGtctwsVHYAwEk4CcSYP4Lcja92ovQrDaBW",
  "key42": "2XtSBr2WyBZdNCGUhGWNyMMvMZ9WDqMeaWBV3D7Ho6jNDLTbgbwFqppLTGNG5pHFYbQZtKEyvJcr2sUYjb6nwHCq",
  "key43": "2dKweT6p2XgE7jkNzxfRoPr5PxLUocowhTd1i3uSqVCtzeBA9Vki5MziwKXJ24rATrvz7XCAJQw7r29QTFiW6gJD",
  "key44": "5cyQsE8bGCQA3wtyTEc9ahUzwRkhiHBPGZgvLRUpwVg4YgAjGAHJXYJwTTDzCZyH1aAct1zwFKG54AFyXtYSD39q",
  "key45": "662ev5CJu4GFH9g76P13KSi38vvCrT3dJXofAvNuDx3qgCmwMz2hQYbjPJvfpAWb9gRcFistJAshGFGrihSmMCM6"
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
