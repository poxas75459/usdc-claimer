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
    "3CfksH5Z7wNsYXoCio5rJnHxsN9Xbs6JkqD9hh2VZ9ZVkPBhLsuGhMAwEDvM247sEcmzWddEkK1NanvjkntgD3JY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zyBZ2y3Hd3BVCZnmvUcdWYeB7pz8Jbcj3VkyTCXWBPSgwi3Xrnr2bXpAaU6SYfaDaPFj9fPk2nSo7ZHUFnAo6aB",
  "key1": "5bY532UFZWK6ujLo6ZvLFgLhif3fv2HCBcjUFumvk1zoyN5bPtHCbs1dTTfsm86bUb1pbKj12vmuXCsYyqCJnmSX",
  "key2": "3vP5yGNm6FLfBb7kym57o1HSPpwdUF23vLrvzPd45UGQbCGoEbmDNEsA7xGH4oUEw8k8AQVdeoBPgn7AdDojYQ35",
  "key3": "4sYiqL8zfBdMvtevi8obyh2mix7yUnEqZ9nPPebS5xU3jcAhe558EDwFjRqqvpQG6Pkp1y6F2s97FKhgFJhMN7dZ",
  "key4": "3kD3G6dShCF8aDPLEsunczCHUPyLMBThbzerjx2s41VANvnYGJQ2KTbQPHz4HxTdVouHCb1NouFkUHEWESgfjd5c",
  "key5": "4VfFtANey7Sydg2AujuhPhtspqcoyiJePpWzmZYJz5cYNXShBhaNuzb13dc8mfGC3ycRmpibLHeSPue2YA8xz63X",
  "key6": "3fp4bkQgrmb1nrDXJZxVU4RRcTNQDZKysmfeQWkUNiZK7ZsJAWrPuzTbKcVYfRC5jQmSwdYVCvyXcBPiGoYZD2sG",
  "key7": "429BraPa419qjhQ3M18tvZkBBig6KDhPALDPcj9HSutJuem8waQHQz16nUAfNDHEKvH8ua8GWgP4w2zgUXYT8Afk",
  "key8": "4HLCnr7PsKGMfU1usJfg1oqpAebmw16vEGFhevqoMqwCYYF8GeCkPyKhMa9Uc7eu8i19ze418RFd9TGfaLeKckox",
  "key9": "4Ry13mVzoWyEYnysKzL4JU8V1rywjw2Ck1XQ2yik9qxYnnx7AGzHjzuc9WGP2DcixH5zqPCxrf372qq3HjLT9DAw",
  "key10": "5Rngfz7FGriqZoG2J3cHhp9GRsc3BMLd4ufxMfZYpXnx4HtB1Vry8uuHUwrmwpbWHCXghwMj2JkMkH1DLMQWo8Vd",
  "key11": "GpjEQpWQJNRzG7J6psLfCGb6uY3MvsWxEvSpsszvdPWivw4XNnvqaVksphVcSQwGk9qJuxJwMoS7WXKgeVVSTz3",
  "key12": "2Pegyp57cjCSRXkZfw7eMXPy3nqAyHqmu7JxZ2RL9aKnk5eSpZC7hYzwD2i27LT278z7Jc3MUQzRqtwuTSWn1RaY",
  "key13": "2LT3Ve6gKNMmHz9pWC41D5fe9S3SoRCWrsRQukbQUZbFwN34o5HaVSFwhvAqcEnBri82LvXozJRXQs1JvvoaKtus",
  "key14": "2vF2LYkkZAGJSN2f315DxozDy1CHtSSC6bVWBTyJtjruAb1FPhBdCqoHpczXypnRT6H1fu6zwzZMvwnEnLcpvc36",
  "key15": "rKZHZ2mHo21F4UC6UAjwxPTSjveqZHpLryQ7ZDeKxGxQ97A1nzfE7AurYRnt7d4DxHsQqo5Gt487D2Zaj1e3JnF",
  "key16": "4RCzMS8G4XG2QPMdEz1y4Yke5CZxPvGHFycvVa2DPCYmTybMN9mbSfUt9qmwNNhL2XogrqeTiD8kDqiLTWXJiVQN",
  "key17": "29BhPAaXnCJUV9Q3E8QMzJyqaiymCoLjAuahu6WP45kCQ9Lp9k1pbySsdFHR8yJnrU1sCUA1E5pEtXPYPUDCF2x2",
  "key18": "UscjPWwt8EDVuM5DKNikdFTEk9pn9479jGsAXRG5ADmshDLABhKRtFwJS8ip68eUpmD72n26YCrej2E3m58AnQV",
  "key19": "5JvMn6Yo3a48o2mQzoHSpvM2sfA1QWMsTrbeJnXS5gkBhd1h2nyaNds75ufBUxbEMPYAwghVTMwzMF41U7X3P24C",
  "key20": "pgLjPTPvZUF27qEfz3E8HQSkhi2UyRR2arhT4mTFAS8TW9tSLb2qyexSfhmCfL4yzVYk4wXRzL1goizChj1J3xP",
  "key21": "3Dr8eXNZ8g3naMHY4LFJAfjYoZAjcjzKDzabc4bVaiF66Ez2tvTuBb4WLWBpSNiZyfgQU331yrDfrT5TBrMQn74g",
  "key22": "4RfWwW5b6Htw3z2H1n7dMnBBkp9qMGT582Rf839Fy7fNHs2pyhcntwBkiK4TRLmDgbXpSnnhLUH7g9GpbbrpTYSF",
  "key23": "MGZh8fFtWca5J2KSddNCVU4px3pV3tNgDVME9L86FTwrDgeP6KqvVN17bfePXwERzo19UpUzZU6FEUa7zRXZ8qQ",
  "key24": "5qWncBezirfQ7F2Vd5HbF4trju22Q3R61hfkHW8AccqUuJrgxGH4Eg6M8Ym1qepoPUaDEUPUDKpucxdGPJnMbPbN",
  "key25": "4m4vtSWkpPaeQgRk2h8jm2Pmn8BT8BnK612zkQqUBx9QCMR7atVHUwsgUqD51pu56Nxi1RmA9bTZaMPojCPkjUtV",
  "key26": "3HABDpy8wopc8pWgJAkLssQ7dMrwtVQiCpSkkYpaSAYdZ5iu1ovX6fGMrUY82uPwshG4n47vuwbWddQayxJfL2Ep",
  "key27": "2WhKRJyaq4cMC4sjoUhGDRE38BsyEe88SG4KKT8a8o5NwJdGBarDS6HcS478Lzp7ePV2KsrjpN6p6yHFqynJGnHS",
  "key28": "5xxuAL61Xg315udGG2EtQbFB4N5TRpnyVx4jCTakNg5PMCbkBsCbqxV4MUPnoX8KEoYMTJbnuzjmz3LE4kFv5KwY",
  "key29": "4LwoMNPHui5kfR2EXe2dSr9Ni6JL1bV1HyjsmKemH3XhxMAmjrdqbKn3fmzyQs7SK9kqBUSUKsRrKj3hZ8hMaYyW",
  "key30": "2ApZcbzBLNMt5WHbSievegTcqRCdco6FTaJnABUE9XD3kucJ2qGzBzcJmdh5zFZuAFypdHaczwaCrjt81aY5BT9P",
  "key31": "5ExG6u2zL6r2skutGNoYPwASAYSNFndY6hV26KF3G53mzg9nsrgd9wgxzbeEbB98CwpFMH9L84ga2Ym7UhtvhU1m",
  "key32": "4i4D4AxVZ1trxw2VTtZFaa5j8QRPmLvA8hAvTFeZ8yCMYWtUrCqSpMByvh8BG3WPcvp6q1N5YoLBKZVTjLr4PBs4",
  "key33": "3YJNPz4L4L9CeuLXjYyqnCL484tF1wUwWsXSMzLnv7VScz4dkeRb6aWmDLzyw9zbsXYRqcuVi1hUUTHTWfbtSUnY",
  "key34": "4tTtLhZLUjD4XpYzQi9z3pm5cYC5FS9J5Kfw7DtxwUjMJGW38SStG9y7tuojZH53FPnhRmogVsHS2VXyLS9RP25E",
  "key35": "2X2sMAZCZ6tmcuJvcY7dJPgtTTQCPzt9YK4BcPQBHWaxvb9LTtFaiyVsDfWxEEyhYNNWLJeJyteGF7HPpowkXFdD",
  "key36": "4wPTCocVrJxe8f4Yskydbi2Cp7m8w2q7wYZmQe6LJAnbY1p8jUF8jXp6APbknE45BhmKMezezHytyLEyh92hhCDR",
  "key37": "2GTxw8ajgESyaXAXLukBMYHrnHWJ1xFsyVbFewxAmqioDxg8dj24N2ERk2wSorHGCRN3teCmmyQ5uq7b1F6szE9D",
  "key38": "4DZRbUdn5Z886aYDRG1aW5zXbMKXXQsQEXvDiz55BFN2VxfHje84PMDjYzVwiSxJcJBAVuACXXnPyvfdvvw4QmdJ",
  "key39": "2QheCGyRLptvTRe6DJBVNqVwJ26FTFE5fdNc6PUBvoRRzESnBg11KDB1BUwiMPSrqCBKGYUUyFqi3wKAKhBpmaMQ",
  "key40": "A1KoiqUSF3wwK638aZEwsKQWTbBz836jcXUS5UJLfbAejLkd1fQuxyphvWm223KMrELjCGVfsQSwXF93E8k4pRW",
  "key41": "5gu5ZqsuNCfBrVWLHGyB9S3efXWizPn3UX1RGUZrbYxQahBVYJt5HL58DjxAWxrn5JyCGAvDRNNHpUPtYXYNkA7s",
  "key42": "c9YdeJ9JwNbM6Q8bnrCZbCFa3xu34FNHR5Px3pCsHaeNCs3M7Yw93VJZMujRQipQs3x33bK3nefUsWPZg2oxWah",
  "key43": "5UsdgM9YPMUTxXiUJENRs9tVQ4tzhgSFPZAM4arZD68ADoFSeYiPfBerRhB1iXgoc5Gt1CEKiNGN8KBzmuQ1fG1e",
  "key44": "2WjznZ7wmn5BQTJJB51RLK7ju2rLh1wnj2aMfV6PTGqShTfQv1f4MAVKWzp2qgk8iczsjj2fsc565sXe9gTihrF5",
  "key45": "2RQ5Hpe9MTbBuaz7jDVknN2dbqL73v9EffdGTjRZLRe4pBuUcHoNb6EhnYVJU3sgdMnhhdGZU3esDnASuXU3Zj38",
  "key46": "SdVmsm36gfdndYCUJJvqieuQnmCJ7Sku9tTap1m4oCm7FjN78wVaBF2ZjK8Y2abjL3bEzXjo1d4oWfaZeL7HYKC",
  "key47": "364GzGB4kXPdi7kqVsCqotpVhUrnd3iirV5ybDzHKzEQvbXrEMpsTH4SgBP4F9RXszBuBrhso6XL25rLkq5y6vTP",
  "key48": "2WSfSWvGJVwSStNr8yvgtGWSfWDNbJkVxu1BXMq95imEMP1FQQt9AcvNFpZiDKDg2ESFr5dUrZQDLdaZfuhkHAjn"
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
