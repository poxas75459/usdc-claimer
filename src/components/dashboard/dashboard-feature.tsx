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
    "vtDqsEAuJ3Qasm4UYWihdabRQi85czWPFzEG7rrC2MfHcnYQmYf5Q7YxyeTJeWiRaq371RbXyeNLbcNP2H7NSJM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SVPdDiePFpUvHPHBQaYGedj6yWrq51bXMtr6PXR29o7HgCS78sLs7bMWw1HstnspLJcpcsrTyurGqvp7Ssi4gCz",
  "key1": "PKtxNMzgCg1sbgNcvtCnHux5SPKcThHbhwZGphfH6RwXjNhaFb5xLDXXotGYNUUK1YZSB49SdcD6F31uhaCyhkd",
  "key2": "3iYJuUGu9i9AVrR8gQAhGg5sBr2S4Tud7Tkj2c6zKDzQqdpi5nvjbC37715bSzXFEujXZ9ZRAppiQC8RmFqS9cSs",
  "key3": "YJ7agvSH6EzjWcagFiZXv3xCmTSkigBTWAizDLv4NQUVgkqX3fRdXmzCGTZJLZ5fMzobGoCc1bTfmbvGmcoSbJ4",
  "key4": "5Q5C9bQimaW4JRpTT7mLwcRP4iBkNLrDgCq86wCJ23wZryhbTwhrYZj5RomVNjs2CjRv7AgSzR5aotAuFNNPUjHt",
  "key5": "3czUzTiZWCSVbPBL5rT9vAjjHK84iweiXcC5Xk4DEBEnje3MkbB1DxveaAPuj7sfYHj65TmaGNLk9j61MB28AQtq",
  "key6": "juDMYU4aZENpY2x2kzUxj5DraEqs4aBBEKp7cm4oixrsEDFoYUy1YNkxncvRM98uSAuwmqvHBNXkexkU9z9ULzA",
  "key7": "4RptLUBaLWphTGpqpySccCdXq2sQGqk7YVGrd1fLiaTtoqyxHjafFyySnYHovN4zebuFAxQYtE8ADrfou2SwyaDg",
  "key8": "415R4fuQV9jtza6RPvn2pTegBEaZAjenKcQGF3tu8SxPUhB4Eaog92DQLw5HW54Gbj5bVk4k5bCP6NDcAeFVPDvW",
  "key9": "2SFTmLas47a2xZVdYVaDpB3ZBRTSQWHrrN3Vawk2Zw3CNgTENe3BxaTHZvQWnz9ZzMxm7v7EQ3PxYx3rRWsh4eNQ",
  "key10": "5nChW9UGcW33XPx5FcCBRNmzeFC4iCw31fgzyneSDv4YyTU6efqSkKdiMfXFziiDiWfCmHbP4opjBFywaqMR7ciu",
  "key11": "24GzrFw1sss6jwDW3hiM8FkeEoKHyZYpqmzJvrb6bNBg4FN7kZkAKvekUYin38ozD1JpSNKQG9wHMonTvienQPsB",
  "key12": "3K9cyV8NXcZ9LqprCfvBwFcvhVAcwUYzKgn8b641QGCQe8cgTqXVTupGcRqJXLPY3b8zvLxTmabmjYkUMJbmrKZa",
  "key13": "5eZEKkdECfneczE3yzPoU19XuvWxzkkTc2th5DN2PXonwVx3vf5hKCBY52kjrtrLfScQVLpwV4bK78u1dtGKmkEs",
  "key14": "26coQ6P1Hs44hKKEWkc6YXB5sGDo94dWMUTBkWoQtNk6qVMydwcMB8MFt7pbYgVQiQKRg3mh8PdTBeDtb6zJFUie",
  "key15": "tkaBar5rhJopEtSnK2zDQJgseXJh9Jkzvd5ZmJfVbwGEbwRefhV8z5qG2GNKChfZLHWKNMsEzXHTZ4ZBBe3Xm6U",
  "key16": "423ntuYjNQobvYUHXMybD7Q75mY7EV79nW9FHt2y84ts6HvjrKe32fft5RBcWRHm8zdh6ophqbwm68Tc3Qc3LtE",
  "key17": "65azLG9YmzDj7ymHv5s8qx9y2x9WZaYzd3C2a9yHHSmJcQuQphn1ANV6hpc9JaNDCiJTzdFnLje4rbaEtwG1rZqD",
  "key18": "dtyxnvK8ycapa2C53NuWNRScZuJfqeN1Ah1E6xjPZorGhSTTE13FmNgVvGBwWMWBKTTARmSyK1tsQsssTzsCyiw",
  "key19": "3SXhjTM2EQiM8GGnRq4RAESohEw5KKUrCTXwE61pfCiDtJnDw6JgP4X3mrdjBSYhkpkWQA4muNZRWa5sPy7aJSnq",
  "key20": "2Dj7kvQSnCuWYLL9vPE5XF7D54gM3Gc39aYKfnA2yPsWPTHmYowynoQaJpDUXNBDh6AK3AL2gQpLY7zdyi3PK4et",
  "key21": "4KKAJafZKCY6TbSopp4oCeP7t3zcbMq6ZygbqfWu3y8XGTbm3Z4rcKNdCHfysySG88nwAvZHmivNmgJJdp5LfLdB",
  "key22": "2gVyLhtCdcHCj5C9QuwoBK7YyHfYcpWv1cSbuuNFYMdwQPeAbSXM37zSYS3nKU9LCiokDR7mBjR7dCDY2db8L4kd",
  "key23": "4YNPDR85BKcsEtJPiRD1SSAdmWp1vUMtbHArtjo2fta3hUVLN2DzeigFXLoHAf6pYoEsNzUBXzCL9oj7nJZbL7Cq",
  "key24": "1kDESwd2sCw3rh4ssHuHKjZV1UFzKFxbFj3puKijp4T1qR4Tt8aRwuuaDMnFHWxDCb2H58WajpyscKAH861hpfd",
  "key25": "ftTsDQUFQTsK3NqecRfR5izniL1aWJVKgVoUF5rY8RpnxxvDrb4rhs7a7dcxKfYzkgkXYQiYfys3pRHhFgLChBP",
  "key26": "4dBjyXgg2vtvEPzBLTvNuAwQWkt1iwLn28r2ASPoyzupRYYHLceKNdBFRjoX2K1dAyvyypUnSaFcmWU8HwnEvQpZ",
  "key27": "2fcrdJ2nCtRKzHvtpsoMQdk36zhT33W367AMTaPyyMyRPNz1echowjHC46g5astFYV97EhmBhVyazYSXBURmv69D",
  "key28": "25ZE7aQhjZ8XnbDQx93piZ4e77nKariLE4JKuNguak4wpAYsW1z98UL2LpaggsNoBPwA3nfyCEwXpjkbFjwnmoNb",
  "key29": "2oQi28wxqaB8bTk5jH5EhYgaMCiekzAcnHwXkWVrDzhNL7YJBPxoExmajHX5y2EWAwxoNkTypkmC7VRHkj62jGFB",
  "key30": "11C1mcyo2qPj5cXYcK7Rt5AhAxkarw6N9G6q56wc9Apoxc7H43BJzpDjhu3PFFAgiEWYhGSi5GoTuVir9TVNzbz",
  "key31": "5n7gvomi2VqkL71BmvKcBmBN1EXoRiuuRCjiGUpHa898GnbJEDhho8jMg623AFkmuLhCMG4Q4VNbbejLg6ZQcBqu",
  "key32": "2uEYwDcxJzD9djZZdSooTpc3A8bGDnx56HTWMgRhhMUtG2xNyGFVaBfXU2v4y5e2e1zmvnafhZSHg9d7LpXNRe2C",
  "key33": "5cNRNUabk295HHskreKgNRvW5ieYx9PL3uc4oQq26FTRgWHCb26cAxgsiUQH6GLQDdeYBw2yANAFJ1zBchKi9VNa",
  "key34": "3WEMUS72Svsjp3cLr8xgpaeuUAst8A9Qxcy9AFYAiFWGSxfBiSqa9Y4QFMZDbVRPpXy6eKCEvmxmLNj2wWVak6dg",
  "key35": "51UNUkQHhn4Z5t7mvZmoboFMfkVRFUvSFhA3ZMQRkXrYhL4FsJg2MiRCEMAGC9aZkYCJUfT8cHgUg4BcR5o9euGF",
  "key36": "51WGTcjWeMfu2pqhMDeETj8NG45VpEk1wd4WkFnQc5VEdhg3VREqseLVZTnyWqnQ6NHWqqjcBQA4nYTHpeq7P9S8",
  "key37": "3aoX337MhMDSafd6KsoHq34fuAhattz7sBe6CfC1dDT4amWBY4SaVp9W7ah3tb3899RZ2ZbcLxPnRmVtowZ7LQyb",
  "key38": "5sW1sde5NZatT5gL8KrkaKauWT8HwDPD3t9TPy7mwvxq7kRvr3B4gPRkvY7ibFy9nM8nkNKNTCdtPU13TEHGXWg3",
  "key39": "4mLYygfpgnPvqWw5EuErf5bzfceNFmPNs48PzoKURCqxN4KrCzk8mbLvsXShLKKWfQ5MtvwU8WBNFmCZ3kMDzDUP",
  "key40": "D55FG4zeGM1TUFEXsrr2o5WE91LxuNVY1QSGfzJURoZr5PiAnqYj5gQupFkqTAcERmVZvfLJPVhqdbqyd2oMWJt",
  "key41": "3FswpcK79ueaZoi33gb85oP37TRqtQGw1BPvidLvYeEmptvKLZntvUt39Cjg3RZGr1Hfi7Y2sTEaR8yJ8hmkRJAj",
  "key42": "2W9UGreHFjhX5WTRmRcSrRbHiqKzStBenmY1VFYK6E6dcRq8bDDpAm7r8M8Cx3KSLVAJbKHsmWnaEeThzzvrVQSt",
  "key43": "krmsNrD8Jiy5pgbjm1zWsTojx2BnSWPGL3wZhQwWWUxNJcErs5CoLk2DsPPhe8HdVD48R1uniRSfVAftp1PgrCR"
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
