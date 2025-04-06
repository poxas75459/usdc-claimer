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
    "45uUat3JANovtm2Lj1NaijB29Fg4e7F1sJrJPwuJNmKggAeJrN8rvmYu4sP5KPhK6YXL43mTUkYU8gu8Nz5WUWwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22Vgu72n4XeNvtjnB2kR93TyZPet8ELegVQgxewbTJz8Vs3bADp7RDeAGxv9xxhL4PsntvJQQfBd86XqNrCVkjEd",
  "key1": "2mG7VJ8mmbRFCmyEaaLV2CXiZ6p5rEHvTJJrzzuyGBkHqFBgDuXb49e8piVhykq8E6drWk7E3ivSuNz69akCy4CS",
  "key2": "LoCqHLXMSiV95bXn5YgqZCksfNLVrhoeCtRPwx5XPxsK4oCtZcbxDTjSMXsF8XqTSAvVVp9VfJyMkybEQq7z8K9",
  "key3": "4pVesrpHnJKWeAeTrXmCJVP8JVqSuA4q1oWjeQuzT1iUGvQXGLUZPMGXZeFNL8THhBKGdDGQFpLpxGbb9MLjVrbk",
  "key4": "2ocoVmdcfH3eijZ7omiegfuHhTbCpWHZqG3J1eAnXPLgqtWVXBUVXifDqYxe924VbmqfKboQ1Dp7uuCdA3VL82q8",
  "key5": "5W6F7Ny2uNiz3oyR5dViUwqxF6tEXMnKMCtvytVE7raSsbhriqe2kQbc6B1N8bFebpAxqDPAPegvfJSaavw9oZ4L",
  "key6": "3PBJUjD4WZ8yPUQXwYVtjkeridtzLJDpVNQHM42Pb23B1SPC1Fh5AHL8b4mkesxzy8pUERCCwb62dE8687pcZ4wp",
  "key7": "4iJSBhq6jWPg9BViDQ4ybq4KTnNt4pJqkVa3pphAiPSYSFRpiiHjdYf266Yqo9otQytpeAp6hmwka3gUbKDaR3GF",
  "key8": "42uCW9JB11s3Tb1mFSjd9ncFvv31T7cBByRCeVnTe7DwC4HK7ViqFaDanvBGFza6tsQWAsq9hgFsz5QZ93Z9oQ3L",
  "key9": "2m6z6AoFEv48EdgjCgGvcHs7iDLdZ3TBYxhM5SuChmKkXnqhzYEJ2uxShdaNWXpqjnj8LiT2LJrxph23vpEbY5vi",
  "key10": "2rcgvWQrq5pH3niEyzXWsDBsF3nTGSp7USAvg753QfER7NDTf1p5vsS7rZmvKKjABHCcGrFNk4gExgPNYSozbpgi",
  "key11": "2WZizmejxQSRhvaEg5MekbuQHQ2Mi9SAkGTHgYVd9tW5mQYsgcphskrBy7ykFdJU2rYSRNSzcgGj59BdZwBpHqLr",
  "key12": "345rWdx9fqTmnJe2c5E4CRMGWiAsQ9hRaAAPkpWh87X84uraKqP6yDKkbNuFnTfKKEeSfks7ZnGDGACXvM2fthAL",
  "key13": "46XjBT5bXVvi4Qjn1TuZxCQMgNSgw1aEcgCTBSYFBgNriLCw7FtGrQuCua1GQfd9s57EVxMo2HSeCMrXwu1KJKhr",
  "key14": "25RuG7jaFP6LvYZmUqhA2tVSNRbi6zSBZTrSc91FzFfkEpbkoUmenw4cPNdoBBiFmfftDtfgyQLkZKdsZzcFnsdB",
  "key15": "4tATg5VXmvSGHN3DttM2mSizdPSSX3x78zVoXodTG5eiQ6QtFUt9a4GvVrrbqD11jgXSTdfrG5U4sEka2CU53Te1",
  "key16": "5tJK8zCeKB5PBEaGqQqZy1pVaqi3u2VzQtGsjjDXU1tAZhZQGRWaKxUCTeYjf6nsRiPpywY1kpRxxwvMZjYJzAfj",
  "key17": "3BZMXek1tBhdWjJZ67isQyJ6DtkgUQBzzh95ctHfTwHiELgdCKkEFkUR3F4DDzDJxGgho1hQBcHi3dcFUru6Hwcy",
  "key18": "5sa7qvE3443x9YMA5BYNVkG29GHTnQ9kSZsJHQaujQmbKSfwojUcRUE7ZuagBmesvXXQ4CNUdNqdVgHPLJqWLedm",
  "key19": "5gd5EfAigyTM1SSMcg2nPXi16ApXAdz8wCy9LgV64EYBUMMX2mCecbDxiDh4pWMrv9yYVcHtHcHUXhV6vy2ZnCHM",
  "key20": "4QGzLsmweP32T2HmkBeBkyk7e9T42VuhMPKfp87JomgZX5Avd28TfKfUHcQ9i8EuM641DmYhxkCwzUWxWP1F78eu",
  "key21": "47g6nU2d78dNpbufp6aw4YKSJ24qLSbbXobc5ZDrsPZfuzRLKLJdYxbr69UfbyuaMoQ9D7ugkgMcUtkTX8Pg6gE9",
  "key22": "5eM7KuaUpNaddKVoZagWgRSToZerzL9GNfJczuyGwH47Jt2GEuNqyDhFpx3x8bDqp4BKEF22mBDWprPwHE4LqWX",
  "key23": "46aTjroF6AJt54zDXqNMRiQ4soB7tsBppuyanugWYCyKNMNezLbVjKqmGWyZxQuUrHahGY8sLKV7tz42MsJinCt3",
  "key24": "3ipSnTzQUdsGqK2BTzmPDYv8PFUaYDBjfLujbWAagEbXCjwt3xwE99BPoZCvbKDNe19ekC8f3DVAM2Khcp1bQeHe",
  "key25": "3NtCN3yHrBMrec16MLfWZSL19w4gZTdhaT7PN1zUJiQoYyoKeh7SHPN38911tHmPyQaJWzvyrLgXcaTrimusC4nt",
  "key26": "xvK9fQrg2yzowwMGCmX4NTsouSrzQascWed4MNNtAC5SeiKdqjdoV52uacTkuhdRVV6KUxnNdTVgDRGmxrQ3Fa9",
  "key27": "3MW32cMmNDTF5KNxf8kiHATfZJonDbaXExCFmZK3Le1mzBLKVJiQz6Grrd37M5SzZeE9rjyq5hXz5WhPR4QZBfki",
  "key28": "3rkpMwci7Xr7ST21q2jg52hcaemPTm4FksY6weG9AVnUmYFp8nmJGRXF3JjuuimKZ4oaUU2s9mDzfDCMZSvtwr62",
  "key29": "5rrdAU2EYjVwAnwFBYKattnqGSvzqJNidiyXnNrgN9kxGVU9YBaMEWdvFEM5NEG3NyqpYVfiYXZt9CCVT37dCKCo",
  "key30": "5r3PNmAvw5dFsRMaYkLwdfPkbbTvbrznhcn45NFzmH98tGADdopgXRKYaEeNvtT8wEXPZBdtut4XReF7te71RYsu",
  "key31": "vNXgUHEZ93HGL5wvoFbDuPyAE3ruDtWDyu5kmftYst8HVb2FuLYdaEPYLqmFA4zvNUPRSo6GJB3J29dPb6SDTzK",
  "key32": "4PS3YMwyo8pAgMNnbRXUsLJoN3ZZcEA5GwAhmnSEbGfgJ1Vg48TiP4JprbKubH98i5fXb8fnXHkicdUoHUepTgxi",
  "key33": "5A7N3sktF5M4LoTstgLDg91qMxbQKGzhuMj1eUw4ta1Hv4EPPLWT12in5LR7CnVZYwzeCc5WeHKcXVCVdUypNB3J",
  "key34": "3qUsPmRtCHd1sRTghHmnfC1VvUEC9cfpEruJ7rqqxZgZeSoHJtTMroYJx87cSW4x64qgxSo99obzrsQYWWcVGGj6",
  "key35": "5ZXxhijWBmiGVu49o5JBoddCscddNbSUEkTxdPd6w7KvcH1xsQxFEF3zLkEGhM4pBxP8WXBUT38DMbMPg3MXUMTL",
  "key36": "4a1FJqzRmVy986Wm4mQV3Smtev8zC87JfbQuMBcL3fANQNNpCaDrunUawRt2Qx4tZapwm3t3MnS1LS4cQC8PSQGE",
  "key37": "3cSMj4mohLPcAk5hFfk6tPomLN4SKWNQ4T7HWgr2vhdGbg8m5xtwQutfMAgFHAMoxqpTBGSPQcryC88PJNKQpRWh",
  "key38": "2c16YsikF3etsFsoxWxHmiQhBPnaKS5R2PvXtXFyk8iU4rESYAYPUhkVaoxBP9U83BisS4vpP3waW7NnuCkTcrzB",
  "key39": "3QK4DqPPYKvWzrq1aiASs9sds3Gd5f7GRKDfnhkS1u7usgJFaTYkRrChqGFzw328Gnwqy69LgTafRuPkr4NMVQ7q",
  "key40": "4hWUttDCAxyMXpcnnH5yVNNoY7eAvYhqJRcwoL7eDdv2B9RZu4TXqPt1HoWnUVmE4QamyhxpZZQ9DhAZ6QBPY3nf",
  "key41": "3L8n2eg62viQoKCwXamqk8MxzMDuRkE5FUQM3yZtEhYone2AS6NFFMjngBikRCAxffWA6wJkjr6W3UbUNT8cSM4i",
  "key42": "53Rk46Ca6W6pQktGPndz64DVXzZmaTR6L9JCiJmvv4u1yAK8GCvnasddndj1R9uqzQXgREX2wn2y3Avop1AYpiFW",
  "key43": "gMtao8ppp85J6L9PfjbtkrBdf6FRo6MW6zYYFAP4uUDBbsHaXhiSUeuxxEVBNVubgsGQjp21vSFvnkWSXSuBjRG",
  "key44": "5E5LjemV4SMfFFANtp8edbz7pjsWeDnk3i5vnYjSwX1aVXm92UUtkk2JRRGGPvaFq3wBVivk5iJWotZQJ59JeVbR",
  "key45": "22WeJw6Cs6qSYWnmDUAW2h7cEARudhSpBrEXzJnQ4iYgjtkgvfdm4CwZV84jeceVeCwufUK9jTsRZ8MuoZz55BAY",
  "key46": "4VbxpkWKtM3KPnywgVPKfiyW5qefJv2DT7DQMFMvXG86PqKeQ7gdq8eH7kSY1EqrgyvSnb9V4BXNzcm8WFWx8Dfe"
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
