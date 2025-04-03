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
    "2eBh44yUe5j6s6S4UuLLhKUMrxmAraxhyRgsKHPR1E3f8ArZYFLvdYJcQDQ6DWNMYJ5TmeGMtp2RkxgNRBcSoUBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GxRvhnQUM4Gvv433KUiPVdMJyvGLZyRY2ia4JD2QxKEBdjU9ShQDJanr8i99WoRibxAb3WrbDSgUV7cB5m9NNEL",
  "key1": "2mLsE2bJBiqc44r1Mwt7JZizpMYXM4WVe7CFiScdSYpui6rSKTutMAg75nANuJrnMeMPu1MxS1zNpHXERAJcC7Ke",
  "key2": "3FPCanrvCZQRzekduR6j8iGM2gT949e92x8eWAZWqjjpJ3KXGt4svJzoGYwcDkZ7VG3yz6FrEjbKyYiL8HtewREe",
  "key3": "rvE9JqBepnh6T6dwt241ATGiwmWqUG9VexiVgChYGUjbmhjrfUGgcdmQYU5udpW1RCpTv8nxk93ryMrk5TaMRej",
  "key4": "3xiDkrQPUAP3KUhnoa2sBGoFwECFdwdVhxR89rp2QKV8DXMsARo8DJwKE2WA61LGD56HXXqJrW2xGPsMDe4DseAF",
  "key5": "2w7bNooyMUAyLJAKYa4G7ecBESpRFfoUaZSQX8B2moCYd4NYaCzLgcvWLCdPSjFoJoX6NHjFxibKYuS6effWnxqC",
  "key6": "3J9XtecqFMePeyXpp36co9bsPLyCTJgzVcomcarqCvLfzi9mJm3AqFzKR5uLxGxqkFHEJoe37yNFrxbXB6srg36D",
  "key7": "4e2mRaMYdt87ogH5z3w3kFEUeTHa4TSZqsoL5VRwHdJKcZUQpEJQr51NTSSAUmSaU6vt3PfxXTZWaBaf1PUV4uyh",
  "key8": "56nDLBcYP5Y4uTeggPPX9tvSQ3kNnisgLZMA1qzzgQe5H1ShJBk4cny6YaEaYvvrXL8ESS3HaRtBeZjeVrvtZc5W",
  "key9": "Uykd9REcMs7vxFdq12DfDgt4a11PX4GJBgvjCGBFqXD8yNfcbwuKsQTqJPXztrk7gzzWTQRoQAZMDLhCTjsDvAg",
  "key10": "5VNjs6ktPn8HF2UxzaaXiqon6ErQnNEgVd3YawUS7edvVb6xAyWMV7UFSrHhG2UN7iFWYF1BrPb8fNfKb7omfJ6v",
  "key11": "L6Gt6y2c5RJ3FiEdyrwKULkvr4TZdsWY43MX8Fp3tJxcXJXfApSpKMuEa9MnKoWLYhwVE1JjfiQiDdVchAVDEzT",
  "key12": "3vctLjPC8GvqyphywcJZ43ij7CHmTQVJCakee4RLJwcDiZsBAWHwyyuLfiDei68FksYaEYFJznz5rKAeoAW2FqMP",
  "key13": "3GyommvErBnTccYpsEbXtkntfd9h4bBwFqVipWDkxGNjw9W6XFjpu39W92R2WZj5ho6DWozM2Ga4c2mFLiS2CQqq",
  "key14": "4L7b3NiRUFsHnUvRKFdowbo9D9nbvQQLHmADkcPthVgesudU2EyQYex9RdbCNFG66y9vcy7u9Hv5FY4Sw6YwgRgm",
  "key15": "4DwRK3iUTVCSrkG9ergSP7th86QRDgCCM3fD4se8fstuADed7kXhuAKmZqLUTaa8gpLTQLYQbLQGhwk21DkwpXoA",
  "key16": "5o3v5ihcpb8zrLSX2YQwQ6nT3SeA2XQyLK1iLMfw3i6Z45bf1yxE3WuMCLnADYzHBTsmR2nc43633ibbHfDUNFUZ",
  "key17": "31yyDRg7PBcYs83LJ1YQrRQ7ypWFAATaX6SKQbj8fsSfMDBxhXaub5a86b2fPPLnyZNZKvaHTBq6vHx6UnQs4LAz",
  "key18": "4syZFwJ3fUetfvF3UMiDyaDr3DMaqMKiXwe8s9LJ1cssHdzrysRv2erDZfP24umGYErBZHWV4firX7NCtHq8fTNQ",
  "key19": "2DPEv5pfmZp2wytQqVnzT5YZiQ8LnrDt9CXfRXAPFPcccmeGBjmzVGBQyC4JUFtY5rqpYGwVZAhhSwmYo4RWqFtE",
  "key20": "7uaAzRmFSFsRDatRgBo8eK45WHB5ZH17VtgRLKxFh3hT4vXGYcJSyTMPNfwKPY5kTvfcEUmU2irXLAktkTKUfnQ",
  "key21": "4tHmQHFCfVe33xSijxvN1sQiRA9RvvmP4WDQ1qbX3Ejt24gec7gFBfLSaND659bwcAbmjf26zVsCdZGeFF7ZPhWr",
  "key22": "5h44XrmLcnvu9K33PCzQDaEbyTbaxWUZ8PwK9zuo99tbEwEaSyvkbSTVkiZjPG6ja8rh2vwgBDk8XUhZ8y5yp8SV",
  "key23": "4mQ7am81H2PVC9MScWodkymqHgibVCJD6z49aC8gvgpmXLtcG1yX9VcZzg2AsgEf3ErfxfKv4tMB4igm5nu4DT8V",
  "key24": "47m6FhzWtQAtX6EfpAkPVwd4tqKcqorq2PsmmsujFzj7uGD2jEuthEDj4acNzpCntKZzYSbirbAkHJ7FzuUNZUx4",
  "key25": "2pDWfr2Ttq3NbPBDStBVL2cFzM9RXSNrGSwp8oVhhjFHHCsgisczh3dyJkicxUus3DgUrKbSqcz2VRqtML6qknHp",
  "key26": "5DzPn3NYYVjrBufx8GWDFTzooCByYaE6WTWzFWP2PMddN1c6yN6vmhaVvhUdHip3RiK8nrv42fxmsQpNJGj4Tvi3",
  "key27": "2b9LgF8fB8WJNvpRQDLCUbJWbF5CA8aUNkCNiM1wSL2xN7aFMYmBsnzD47bwGixdUS7ndHtvjTh92Dq1ynqSCxCq",
  "key28": "SqzH7LT5oyAWtChieNFuBMc5fMCYbcicWUuq3Rygjsv8T3bip4hJKGtp7z1rZ3ayGqEjxBhFrdbpMk4XEdqWVFN",
  "key29": "2BPtYXK5qBeMzmHGALS7cUsskS9xukRnuaSZS2uo5PX5CGbGdHftAMwZ4Tg5owwVNtSZCQ6Frq4GZvYikbhmBaaM",
  "key30": "Nw3Y1rPTo4US8D5DGNbY1dK19xHF8D1VxyXsTnzQ7kYHaeawQFLnRHd33yMegEaThDgNwhYxiUP7LdQFeBeyjsy",
  "key31": "kgWSPYfPti9vdmszvrALsh7kinJf9z2Q8UZHfmUK3AHkzVuUcZSBjZ9pddm9nFrCr8xnxHxUjUTT9yMQwrH9Y9A",
  "key32": "3rTFtpS6QmQ9PWpsV9stFvLumQeXN218YspQHdZFgmna8jSGfBgXoBMR8CSBwddStCJ5AEtZjQRjv8XbidsWvdf1",
  "key33": "31sqYQuDExVJsFtHv971rSmfdH1Ei7gP8U8TUvX2m29dpVGnHzhifhUMqUonvS4ZUHEGLGJtw2h3zxU2X7Gy8ZjS",
  "key34": "5s4o6PyBk1fEjJc15v8ZcfTNkDYoRQdwPPvqPRqamsj45LyPzgrCmxsiPRvCZPueSaM6N8FeNfBid4okqksXepVp",
  "key35": "5xGNifTivTZb5NJg3GE1dVBMhjfoL5Zrz8VCAPQRakG77GesQWBfoxxV8vcF5VG5zvLXcgRDB2RWK94oSREKewfq",
  "key36": "25w1cnviTjyBEfjnhLjBCTtH58URFothpyExtriYictBMfLLb83tJ8Vppi878wFTRo1YJ2WVGrr1E3E2wrwUmeVg",
  "key37": "45pC7rK3kQJzcj9tiSgd9iBEWs3xM9Hw4HZScT7Wut9nzzwrZQJrvULLkWMxCZ839H2s9sFpDibHPCTw1FtAhxck",
  "key38": "43n4rHDfZCV3nX8HEe2g4cMzBS3WLPRSMhjUo9pJbFZhdnhPkqTV848PQDf8b5nTL33gxM25K7UHKcBT5D8zBV15",
  "key39": "5ZBJoHPgmhJC5kaT8i1D2cTTKT26GogQEbJnvxHHcNNqb2TJsBqHJZX3rJ9aiSRBmuPHDDBjamHEWYC4An7bnhjj",
  "key40": "61LkdH42PqxCtiXMragX91FKHX8PYE12R2xi42SjAD2yVRoFkvbYyucG5PAgR2LKc5upWMNZHXHtM234tmQ2HW4Z",
  "key41": "2jXzA5ZqcLSatydFMnYzj1vGQ5v3cfpu9jamQBLJVz23md6jJ8o2aCQTHTsDxZd8dfFn4uK6FGcjq2B4VMdjmT2s",
  "key42": "5xid2bewRwjfMp29x7DHk5MEKdpopRG3wFed1jiWdfd4HChBwJaH8BgXTruRSAdHdg8bkFJ7yZMMTDUr6GsziEJC",
  "key43": "2VYhW3Foi28sY55ztWwiGmFWzWHjhxuKUz6HzZSLhmQNn4be8D8uXyQtptdDsbTR6CXXgJ12Hhb9f1TUZUasVJbG",
  "key44": "58fQqGCx4X8auMGiU11Wu94DLPG3KkV8qjo9Rmij48ELY92KH9tmFGGsekqXHc3uhvbWstNAPGmaESxYBXXdtkQW",
  "key45": "4JoZCBxF9wYxVkh5PqB1Pu1b8w8aYruJjbKuZnT33oWEo3vF33hFjuWB8XVfPtjjVnCHfg4SsAoPqbxU7ceAboRJ"
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
