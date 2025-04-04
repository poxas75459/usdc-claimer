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
    "2ESBHX2qVmbqMiqXgSmDVFrRbyfqnB4jVxjTMsfrSm1UbAiRY6wW3hfXYUadCbRbEN7qWfy6avTvgXVXUkdGm8e6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qC9zqknHnGh6PCPdg9Yhr2tuQvM2ynfwGdx164Av15bohKhQkCvfzm2a7xyL7To2RhWq5Y9cLzgu5aY81tuNvdB",
  "key1": "4paLCgWybedi2uW2mVoNgEF9FimyFaHn4FaXwH2RZim1H5q5y6yd7mfaLd839tMXQU12RRU62wNcKVY1m7irv5Xn",
  "key2": "5iUqfpE8ZtKV256vWiycyWeshbinB49SPpXuvELL8d2B19rjqbdFFGhwj8rtDMRoc4CcqdyTPCRB91R6mcAzzqhT",
  "key3": "4pyq1EmUMFzRFoHc3dtcwRBxPE4vs1nCZWzmaNLsXc53mfbCQmFymYXgRbqLn4Tc6QBrDfGG2rV2njbMXDeUAj19",
  "key4": "5Qee24YqWtzJZoK9KXZB5j9C2BMJF7vLWeEzwHCbsbSReB42aGRnxthxyFGo9BeuEANH85rjx8d3FbidFRVXWAQM",
  "key5": "r4CkCcgvu1AGS1vpAmAK6vYgMohuputcM8SLkvMZWsATY3FxsR7FAsY6pKceh6m6PJq9MRiQKMR2snh2z36uuEY",
  "key6": "345mFoYHEByABeBe1vT2t9xHCu5DF8jfZmR6w97htrGUeFuWRdbgkpT37fqnAyZCASrMfP9enaCbwBQDT9uxZWc2",
  "key7": "yqpHG8qsVWfVaZbjLfyAR4s7iWaR68oDbue8V9P5tjCQD6NTQkjgwYYW4mz323t5NaKp9hAskzBu6V1iDEoXmNi",
  "key8": "5Fdx4vnZy5rHQv2V5m4ymaEtzy6NaiTeJcNopa4jcEr8gbeELnZ2aM3DRMVJJQL1gBGDXYV4Yd7VHUWspKMAuCx7",
  "key9": "4n85WrwDL4jwtcT9PEuQbCxLGCm3rwyZ4JnjaDrs3dMKe9BibULBwE7Bx3CuueKabFbwyS2RCXGFT2b2sw22YEtU",
  "key10": "RBCULWUTVkrNw5SLAk9is8a126wvSPYoqwtdvJXBX35dW8B7UqdDsWQjWKBPPwmpzDRzR2YVofU7oVbiFgQa3cK",
  "key11": "43Wqhj9ZaoeNygUo6is2VoUW9uNDtNK5kHGk9e3JfS3gpfARrGnyVBqXmJAvpx7dXsFAtnDuqhWDAUjiavSHypyk",
  "key12": "2zVkbwwvnTshCnPAnE4GSC1CyYmjdC56dpsvU5nhVDNxBZqCDNsJ7M9wvDQnCC18WvoiAZ3P28kVceGLnp1pjhjn",
  "key13": "4iZk3e1HoekhGTF8g1RCqdztBcZ3XuMMnoxmpevffHunh6ecEpwjDxJKV5Zdh4yP8sWo4WR131B9XXQ24nohthSu",
  "key14": "2u3yxgj9Y9R4n4JkjuWtS1y9DA2pLN9Af9AGJ5biSCntHzZWJAW5pBPFWoTdL2WxZyPH8mH7vbjpGThrBTnAC977",
  "key15": "DL7d2pPdn91rmmuyHHZGRjfCX6soAnRQvdb8VgcBGYmRkp9rymUvzcwHpZyeYB26HsWxGjMQsvXN1cbLaXFJjsG",
  "key16": "5y2LadkXPWURw6d7eDYa8D2m4UFHQu1i3s2D1FozRoz5RiGgUpUrWzQNRxg95Cm7uQbARu6kMxnRsfywRTcJpPmE",
  "key17": "5dUnsJMok2TwC8FJtNfSDmXzsf54XdRwuAn85ype9AgmyycBBF7TGTSYRVzKZ4LPe1Y4g14LDVRGss1RRzHDhfDg",
  "key18": "2FXTFwMbrYy4AmzVoBK2XhximRYPdqEw8vBoChuKpDnpGYaeVWaocNiDtQybx6mbU18rpQtMCu9Gq7SKQaJaqzdJ",
  "key19": "xUiqJJLuK9TGQ8bWMJNedK3fLH1b5pi5TfJJ7XQpGZ4z1UAYmTT8c6CT88updXCdxb1q5V6bjZPLgmHUAi5sawM",
  "key20": "51A2uLrvpJCzh2cKtB43pV7WJjp28YVj4MMVyzAihVwFPJboXZhzX1tebAGx9RNnUFkPXhkDaKm4JUkmQwNQZQQ3",
  "key21": "4V7Hrkg9woE3Apcnkb6PkVimbq8kgw4NzKpDG9P5y9ZTdy1AB8f6pupdJ6VZBFUCAae6ZPD9cYudKM3HpNEyQSYt",
  "key22": "E4cDWfNcmgmPYWh5apwFabqqVQAnvS6dvuuZZyoX4KMWzsNYhmrjGny89rxKRsjoiDtNUcHvLxFQRUp2Qa5Rw8y",
  "key23": "r91PLTSoHALZLjBvbzaWDNBbWRpaSmTC67XAtrd6rgbhgYxocpUW5r1Zoy9TPdzunoeL4aSGf8VAEz4FBjhnejk",
  "key24": "5wo9fq4ZcfEQAuKHiSHHpLFphxpg8BsHhAeeJPY6etnGgggvsfLnpiKMhks65TTppYr8sAnHjx3ysy2jfdDDpStV",
  "key25": "2w1EMoNJc8K8KjhnJhfb23s8QcZUQwJ8PVRcpc7K9TSPL15Z5fpUiH2npDB1zXQc8MxfiGfWWPrxjq4RGRRxoL8d",
  "key26": "4cb9RRscU9Fqm7xEiTQhmssFbzV4bA37Xf4F84HErqjAuBJFkEg46kXaMB1ApsJ4bDV6Pjkb9HZqdPb2iMmC6zTW",
  "key27": "5v3EXWSW9fkj9zgFJPdVahgAVBpTYuDDDcdicjTez6LUAzKcwtP9Z1ve44rJp2PUpVeKhVYXuDhc2QjFyfVXU4Va",
  "key28": "4am3nsJhtZf35FSvT6jx2rMshKLYLzSu66yQo1a9xVph51Z5FLuzCqnuibh1JQDMzgZEE7Uw4zJpTVvu2ZfbciQZ",
  "key29": "5zCGgHo9Z9Dszkh3EGKQFyMF4mxv7hkd9m9x7zkqZBxV1MaAVWitt1Cc8AbEFzUHwfAioKZHGbsTw866tmpfQHc6",
  "key30": "3dRrGnqBHdBhqVox7fTZTSAz7cfVWgwq6FEgWMQ6S5KPRse5cqWVu2naKiekhpEF8gYPuGkVoT3ZbnfnzMfyCVHe",
  "key31": "i5gRPv82ntKFECcEXZ775AxpT2gSG8JfcwfDjmf8QDgYjgH7WwWFvULaskqMNiX5A3AmETt8kfAPAbhyqYGzbRH",
  "key32": "5CzBLcDdudK2vGjp9PU5xRtyvcSmYYMTmJ4UUL4pLyMU3UwwKqRC1rE6HbDiou2Xycte6tQH9Dq1Fwp69itSu5Ph",
  "key33": "4tpNjsu21X9nYqQJL5ZHJAjUNXX8riNYt2LUjDDUBz6Uf1VPH7MFjGo1sFffiWdufHmSPGZTHKQF6X5txZ8XHYVA",
  "key34": "4JGLJMhjfXTap3jmv94WUn9ZM8ZYZPa3NeMF5qanj7pJfv41mwwrwSxWomrd8VqrdbfPfBRDDrw8wqyopK9w4oDk",
  "key35": "qDQFNz3TiNHMdQsre7miA89EKMZRwkEKSnws6eCuiZSMnmfvdHXMDGzPRLfi7TQQcpwxLCjiWn61v28faoTw8WP",
  "key36": "2imvK4vHRFLvUsgYzciKqF7f5VDAmU6jCd1wNTy7QPFMdi9TxmJrmYMsBZr3AjM8Hf4exL69UzM7Fp1yCGS3ixyq",
  "key37": "4xgRoD5Zctbk34S3B6m9yzFjN1dVii4FQbt1DdGfPj84N7UHSNgiWyepjEj1j6pwrc8NP8gnh3YV7SqZRavWg87u",
  "key38": "U5viqPyePv2jeoBuE66Kwqh1iU4QU1jVQtYKcCaPqZuiPKwtQ8u8fZCcKH3MvGdss4Fx9AKfaMQjbADYneHGXUq",
  "key39": "4SXU9oFCpRCSVRpauJA7UNdHVnUiotS8SA96sQG4PtUNMudtvKyPikPC7nbuCJLiQYK7C82tYgvrq8ryHiT6JwJq"
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
