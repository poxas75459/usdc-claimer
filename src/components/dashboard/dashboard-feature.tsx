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
    "4Swf3VnYWs5US6bCwC8tNhTh7KMMieafhf3oWnxubeYYZcQP9ZGz9Fw3YiL1o73AorcXc51sr4bKSXBcxBLXeqBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61QJznwgRqqpkz5VAhbHHYoR6huN5H8ibKbXhQX25MJjhsms2HN5KEnsWm4SdtucYqdejacAwR54Scwm5kVVF6zL",
  "key1": "66f3toZyyUHhoesWNwJZpTvpk9kkq2drCib52SYTyhBUYNR2eqLhit7AfrdGWCGak2HiTz4qHNBXpmaDK2g2iX2s",
  "key2": "4UqYWeLtxm8G1J5dKdsBJcAj1i3TuAZUL8NmBG4MZ8Hk6y5FJex4wZezEES4rXD23Cjy3nES774hrtqvrDgoPaTG",
  "key3": "4NVtC11mad6RmUMWQH5aDqkkjVYcDhixdETr7VjfhKZFTqj9nDkW7unsg5cRZEpdyRMG7EQ4Wja63mzqKmXp4g3o",
  "key4": "3GTB7MK8xTJdkur5z1p7w3bEkinjRDtHr4oLrsZdFtk7unXfiKC9sxVoRq97Sivjhd3J1ssDXAnhUmFK8uakUuC3",
  "key5": "2q8p52ps6kru5qmXYNrnSmTUbS2EHADwjauzXQrwHkzivPSPBiLaqR5Hdu2ktLAMUKW6RTpdVceXnGJsiePqzsqj",
  "key6": "4EfwUZjJikaSJeXqEVnpvHjRScZFaTwAQ65X4BqDf18opoDbStwNMEegVBWgLKEWSq82khPMn9E81JfsxrGWkQZU",
  "key7": "4kDXdc4zF2QUb5wKSWGFPyEW1Xh2wjAHLKe4J59n6AUAUZeQnrxo8Jdi7x8D94rjwL3tHgHWkeQg4mZFkgDbrUtN",
  "key8": "bLEnjcFHgfZLi3Vobb9Kh3BU8Lr9tHb9owJ2iB2XpV9cppVxDusUcQNR8KAFUYm1HkXZbP4Lkq2j2eZBwJVkyJU",
  "key9": "hoY9ZJbdVgH5ZPFPZCps1q7umTkz7MCP7GfXUN9XBfEspy1UPLkLo5H3khh6UErXw41cbcJfXj5GUJMbu7uxXxc",
  "key10": "58cApzFSoY4EyzyHq4PPqyajFrzAyUMkUig6rBtS4u1cJqysqXCJQF1ujAJ3ZmXnYree5biRpqyZmeoq32J57rPV",
  "key11": "4o3FVYxhVa3e28rrkmiDLHNXBwk53sXqt7i84uy8WbFGWrKvCLFiNbpzneSE4giutfAzKgET7DKzMu8TRvWH8Fkg",
  "key12": "1AUk1EEYh826tTNax2UUJTgrebXi526CHzHexhNfKmY1AKMfrdzVAHmUKgu15D1Q1TZRM7VFQVcunj7qri3ryjn",
  "key13": "2WGpBGxHZe727f6ycNZKyfLhXHKx1HksjAbeWKf3yfaYuxQHJPKHD1San49oPgpFoz6GBaRNMD6fDis9KntBNAF",
  "key14": "peukRrjnsmvn9T9MHiw5EnAN5JH919ejqXUVSr6fNepn5ZHd5fsVuvZHm3TNkxpa1VxstVbHwwwtGzMp19xviUh",
  "key15": "2odKFutf6xmTJwBQ8EWmcAM52USpCgMy5YdKm2yBsfX9EiDCVkAwx4xfnpCkmKHSW8TEfWeJ1MNKkaNGSgvbSFPT",
  "key16": "4gpWx1gV8HhkG6pMNqpCYX9sxTVAhRUeUeiKipz53EsGdMHCbg6TT6LKeiwRcpanCFVnF21WkaHtV8ifpYr6u56Q",
  "key17": "66WH6Yq31vydaUJPuGMkqLQctYbgzvjR62zXw9bRrjEZ6ntFmt7D2edM7vdvSPXSorKSsBmbe1ScpvLyUzRR8y7k",
  "key18": "5aihEAZuwQ7vfnCXr9ZWeJUhS12rjwjz5s3wyK5ZLc2q8Eq2qRDkM97upgzG2eL7UWRdiuQuaphdtKo3sHbM4fJG",
  "key19": "2Kcr6JSu23PY5XPn1aHuDHxnWBRFxU1FNVnhEDpzdMyFbEPdmv5GSfNmuS7xpZCd45hFr3y7BsqdsRRTYAdbrXn4",
  "key20": "4f5sbxS71ZwEDqGC3gN2swv8omQVhEFAeVAAznNDLvH87bSEDu5zxHtuW7yvcHe3SMYx64EMQcoxy5AB4FfhV5ou",
  "key21": "2dtVEWc3xP2wJkaackH8hzqjMXhvxx5HVSP15x6sLmR8C2N4J4YbXDXHXjJcwNTtpHdNjFAs76RRkibRR9rZZG1W",
  "key22": "3LE8X65Qfow1vfboS3pWKsBwDVKJFYnWxfT7AFhLivWs8nPP7bUDAoSn6WzaBBoHriDwBP5NED7yadtchqgzwQxS",
  "key23": "5jAF6CkGbCV69JnyNtxJLDwzCdGZWbqCh4dYVNGb18V5mGTi9giPKL8dq97XLxguakJpUBR2rHpEqmBiKQkdEtfS",
  "key24": "2AF53Mwfwt3iX6SbR42bT7mNKB9Yvt7FpPXMtQFcV2gBfBfe6s7gnUseoHkevFkJudyFxFMEwFyo9zJYCLuStXqT",
  "key25": "Rw24zn7k7Z32fqWhwuPKu7VJGm152xTxf5SePj1vsrjbHTiTYkta5vC4VLv9bF1Rc1NZEsuhGUReWg6MpqHbequ",
  "key26": "5Tu1edYPYgrGiMeBerAKfGRfeEkcq1Vpsjecj5VcQazjZ2wL3HuVvotRFyELMon43RdaadjJyept1p6FKmHEdSDM",
  "key27": "63cTSZPja64SAApM3paoCd4XXLtZzm2R3ZLY5wHkj8fPxRCLEoReeZXj6S3Fe6ew4sKnN2bupFHzTrxAiFpsNrxJ",
  "key28": "5KkpoHeeTQBFz5foQDaoQKvtTH1WQMWmHCHCkuuu8yEtaeeNdsJ3RmoMPzq4i7r8UqFMCHUtUu5YHiWQgfr56Dr4",
  "key29": "X3SWGoSndJRJxWV2pXTpdqnH1rmZgiQ1KJWtxzLuPeZKk9Z5Dg8k7qejKr2bNdYBiGMaLwwGJuFpoMK4pBBiVBM",
  "key30": "4tQfneegrXtnsc1YZXS5MMjftpQK1qPuHovoAHiS1DLJiGmRTtQ81vdWispuxM5bbVEu2zrS6P1hPodiXZJDzwMJ",
  "key31": "2ZxedyYk9DT15V45meaKKV9PyjNasB6uEDBrNo2zsqXUdDRasSHLL8e1DSrFbvcU8vGzRQN1NexrXvrA1bjrPYc",
  "key32": "4PTzxikbBsTLajBoXLARHTyaCREFaBCszoG7TimWnVVPBTPMa45myLVNNhVziSHFohaNCrj4eczkwnvnxNzH1tYg",
  "key33": "4dQX3pnWZ7b8yLE8vtgU5h59hzGD2UyBfTSXWSUdy4ERUqJ2hMDjH2D5jgGdkHWEzZhs8USJJJxVSTAERXbbnTFL",
  "key34": "ZLehN3ZEwe2vT3a162hSjh3aY5MEPLmnWyYjLYTEMpjLapJ9Qk5PuoaWVw9hK7tmjZrW96KS84aaYM2RtCka5LK",
  "key35": "495RbwPFNR2AfVPgh2ghQrGqqwmoUCePt9SVanpHrwM4L15kT3WkjJ5TBJ3VJXUVAUjoyo56ArFFfKfMFq12xux1",
  "key36": "47GQHjcpRDUDmzqGZNauGETDaYEHp1HM6gJp6rY89pMW41Hh4MiiJqu8BkUDc32W1x8MX9LrJrARsuVg8ct9rxq9",
  "key37": "5gKV14sfdqPBUybDLkw71MTCcFB2qkoGhgFPf1Pk2vEshukRJUz91CEZYNsbDW8XV4wWPSjSmXo4157BDou2UXTZ",
  "key38": "2m3RYcv5bwiksak4g8We22mhPZh1ZcgLXhACbZmXmeSbQVWTdz15hDEYCwu62FtaLhhAh5YcE2eGyJo77YdtmxUH",
  "key39": "3NEs4DcTRcZ71JbmdeS5C2C3p5bQM5bus3nzKoGa76VJaC77TqjADbUdh2n5aJmMNdTAayYMtmAQzkejzdcmnYfx",
  "key40": "3Qu62TnVDGe2c8NYGvbLtaoyejo7JTC5TAgqQhvDsvMZdKC7Bp62JdpWCBaPLXXq8j2uN3Cip8sj83ckE8pq6pNr",
  "key41": "2GYT9ak3GKg5tohXtjSmqyKcKbGsAbEmfy6gK8uEnTWsoU38A5F6FLTcJPG7m3PVw5u1UMzVfD2KDJz29FmbTnfh",
  "key42": "4wu1GfH1SDKbaAsHbTtrNt1eVbUy1nT2gQKSYZsBVVV9Ko6Fjy6VvCxaaVDJ5LwBGs3s5xzx4QnL2zvjG1fer1bP",
  "key43": "4Rck7dYogzfyiMFepAk34zSh158c5b4JbTVmRb1ZhxjUi6SweqhfN326HwD6vyvudkJQnNWZLaEN8vkRY5gAR6Ko",
  "key44": "2b7kkVzsdsFw7G975JLWyMrkmnvv42VnqPYkzka2cy13UJ3TzG4qW7xbzZH5PEqVsv2VjYYnVHoLxpE24yBKKyGn",
  "key45": "2BjBULebmHFGmdr28xs2h7EoshvgKFJwXQ5GCxf6GjHcbwnihYgYxuNhQwm1rHCfTEajAiyjjBLLF8xsB4mdLeTp",
  "key46": "54Q9wZrqSG1NNipjBGAPnbCxGNLqBVY6YWFj8sWtsj8eBwXmmqiACcbWXtdJjNtTFq279R2CkRUKVr6BdpEVCkT2",
  "key47": "4WYm3kynaq56pR5Kp2kFtKTckYqoeDMcyCoH7nSMuEJSSHKBgK5AJBmxa1FfAzW9oh48zqfw4M7EBfLBjTiWK8yu"
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
