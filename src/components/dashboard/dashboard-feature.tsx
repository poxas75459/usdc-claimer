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
    "5y6PFKVfyYfvhE9sv6Fzn6NgGGMnvo985DxMWyHvdXfWiHn4dpCztJPNuUmw9vhcXdDLMXXUF6nzDYCSXYYXSEuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59aqGfSPxptzCfFs9KjLcwqXx8FTKdnNheo2SxH8E2VJBoyNK6FGrLYtaBmHb4s7YoEtqGYTGHi82m6gkrMF4MtQ",
  "key1": "2VK3cDPndySJBZoPw6yvvHvTxGwdHRWs6gWP8crFon6tK9tq7cHytmroYqz2S1E3oDqWvUUwUmuCg4QK7xnYzBp5",
  "key2": "24dBb2t2WRirvH8rpnx7AA7VSBmzz2Gncvb74JR7AZY7hSSP5JEQuGREzPiRXtz3CcDjQWAvaeoQLqpHEjpXwUDi",
  "key3": "2woj9uSyT9ccfWREHeXfUSd3FSbF6KnwMp8J5Vpi82DgUuFmUHrs1b5AcPC9P8SFZb3cyi9vfyiQh3WwygN6uDyd",
  "key4": "x5v72Nco9ijgGNWTcXMVguFDYkjWFxLugtY7coKtvWpnPNz9Jk9Y4nmwRDTo5rtiJGddT6nQFtZviErzGReapwg",
  "key5": "3bm2MxhiRxYbiEWtEMFcVzR3eFZw7C8WCh4pRqhP7rWYbawoZQXjUuSBtDJWLnp7tLejD4fpTmKE8txL2NhSxuNf",
  "key6": "WNM5MP8dNsJtYNQ5YimTCUcWDJ4UkEC1PmbUw65Dpi3rE5CGpYy25xNXEAMersqTeFHeRY7LJ7aKLrZxXZ95ExP",
  "key7": "3usZfKW9KdMSgarqgQBZG3M7YUnBo8YCAiX32hEHbmCTKijG6iN9Ft1Peq8pxivktJLGHbsUQ9qZ5fnnqKkvDpo6",
  "key8": "26mxdHawPV3qPkZNc5ZY7Avc9eugb2YNXCLVYf8vXDjt4nkN5CLP4Uyeu6RYbF2vCvCtUrTYQ7YUmGw5w62HYgYx",
  "key9": "2aP1H4MA9o8yP8g7sS22uYjoPMeUK81vLothJdvZHpKbSPZWZaZsGwrkjcbgjCWqL3cXA6RKiPKiYui9AKm4MT9d",
  "key10": "3vNdWv13ErQjP6DrZZppW31q6NFCBQGzBUdwvd7oPszP76UpKvoSDcZv2wjT5nirhYEWJpYjqktqoma2456vkM8X",
  "key11": "AkjNTsMYfVVs2cYKkSsp84ADPqqVP4hcFYtFyiw1xQ2t9kXP1Y8mfcRBirKijKPqamXZEU6nBy7uYhNrGbRnywn",
  "key12": "2dwaTJVoCLYQMHqpmpAJkbHATYz6y7zesXpYKxdTXYCUyJKh32q2Gy3NMGHHzwZMJ8PXQ7CLyMEJyepMpc2skTab",
  "key13": "bQsCRHZEc99Ws8bi5RwxfFahHiJhnkrq1GRyLG4dsFxmTGECkZpZBJce63NB2P1aRj4TRSDAUVFmDWrYj1gp76V",
  "key14": "2twddXbMX2TL7r9gxk4wwEynA4omFk257KG9NvoGEDMopiEXFmvZ7ZsourdJxnmwCdu6AFCguP1k4J7S9Tw4e2iE",
  "key15": "2rNvtnf9z7v1mJgTzd6YurBo7o29HnKoVmhqgTJT3JQEvvEiYLV9JE7cDc1BTQHoWCanKtAC8dZcqGipYJhz2M6q",
  "key16": "5WwfP5UmrmcQaaBpUwwRnUncof3wLTmKdGufv9Y8CgGDi5Qat4HsFQBebQG4LPENCg5e1d3s7z2tTNCqLS4WSnrV",
  "key17": "3nHqEEnJVB9qBqEvo8BHyo6cbA7cSjLr3shBuQKDp5vSTYtekrh7iT7C7GPem1BGesfZarqpn4BKZHvPVu485oRw",
  "key18": "3CrNtgmT6JCATyL73eSb5zZCT9UcxNScxbyJ8FY1sD9kd45kHRgqu2YunZouXz24k5fgeTMJPaKnEE8xaR2HxwBL",
  "key19": "27JZLR5hT6skgMwA4YaQvFpV6G8CV1X8rib3XsiwbrYj5HE9MxqpNujViAvNbwycHjB8x9eiyshFRE13GQFd8o26",
  "key20": "3MfCeGsV7cY5aT2qAjjoeBeVhdy5muVxa91ZvD3VGveHVFCZAaqTWp8a6evXLQpCCMF8TC86E1tJfWfuACAvhXVx",
  "key21": "2bduy6fmYv5GWyzWg2xAqhUBgwk1SbpbowoGbPWMxiLZMFe8j54AXuuv9N9upsHpFyoQPJRqMNpfMx41paW42ZKh",
  "key22": "32wFVErHZvMQncfN7btXdWft2TceeeboYx199T1W2HMAWoS1fuLkK6tCzBgXFixVNAwBLhvG3stueedRtR1CPPkM",
  "key23": "1XoTRmoRnTKfHc3V4ChhbyzQ9vzmFgvmLKUhw3T5p8RnLa7racedYEE92EUkig2cZHP7fm6F7hgJHLnH9HAYMEK",
  "key24": "3ZttacFdLh7Lus6rmgqRe6D36dth68eqe27CDBXyxGcXe34bZbVN1wt27Bfz8jdzMfQDm6SZoFftH1EQsa3CZEUK",
  "key25": "hegf4EnrJKP2jxNmR4X6fCwbaxwY4wtW3AJN7BhE1xTMTQmsy3XHavKRnSHzykem8V3VtFLdxfXPnTfb6gZGLdd",
  "key26": "4dgwJ6kp1x3erMza6FKR1638forrixpwzzFSBVznv5YDb3RCYaRTVF9ACgjEoUR8bku4AHx9XrpDfJMSv2JeLpG9",
  "key27": "2yQX26AHBvPDLkLqmW4onzLKj7f7GhdThbNZeokW1yBjBsEwW4S3KpqVQGqTZwxmgH3GahEQo9auEq9bKiqTbgiD",
  "key28": "3hSybUiBHtHRCeBgrjoUNSt5XBWsmfKqRdWR7rPLqJxAveZjwCNYQsa3NnMrPTea44AShA5SiqTvmDMcgg3BaLJE",
  "key29": "66H5SDrjPdKVu5MkoYLcyo7m8mHwc6h2V8ikUQUh8SQksfowbGFaUvrD9Sv8GGieayzYQRETnam1crR3EXfG9T5m",
  "key30": "646RUHe1x6hvYRscgE7Uv4ebM7bLY6FNcY1woUjAmBnmtX1uDveFn6qh6uN45SYE8bZdNyT85QXrmpyYEVVCdiJC",
  "key31": "4nq24PwJ9H7Gjte8y9UGPRYDzGbdgpajebgEeutz4aE69GYZ6NUtEaUQVq6sM2YVjDsxgJt5ceZvfjFF8fUV7HEm",
  "key32": "51JaYNePFgrmQ7WEsoQ3JWjEMtZghj6V6Jy2kJC44ettGFqhHnEPaoEnPyiUhgYu9aqt38S2vPiqEDspeDC1SQYG",
  "key33": "hxY5fQav4VpEpSCJhzgkHN7d9i2GDsJKY4jBHwg7HoWP8yvvEiXGVTrARyDCp3Z3tTUCu4mq6pzHwH4KLNBRtKg",
  "key34": "2N4i4gvJTEbLyzG8KLVV6fm1qxpzybvi1v9CvE6bysuPXDhnER7qMeGezJ5be3XrQUDJusduPNjzFxrdGB61C8L5",
  "key35": "xT4s69fFQmGLkKMrFdW7BeeNUSTm1EXxyAhqajYpwjwXtcp2qHYoYQTpD3zE9xmyKH6KftqzcSx5TyraqGed4ye",
  "key36": "5H36MSvFi1sSazLnVaWkQWFYArV5hrmgzKfBR215huUV4UvY6Tgcn8ViDYf953ThMQegLF3i3R9mQzXNq3r8hXLD",
  "key37": "5qnbaDRJ5vsbpFcJ1sHWRZ9PDrvK9TEY7kfVsBgYUmY4YjKcUtqQh59i8tmKFwjddWZ8oqerjYYtddytyWjSFUEA",
  "key38": "5CU3ekm6LJCi77rXqbNEuD1sk4Jru6z4jEeeq8mq51BihnFXDLhFDpMhtyANjgNUmjc8gMJvY42JiPnBZXLNbv6a",
  "key39": "3TPaYeFxmQ3oUR2pCTgmSypbxKr65MViibjYqVb3Ks4i5sBWRaxtL1cosDMXyuk25kDFSuFCrovRzwcAzZe7sWc1",
  "key40": "638XAT6dySr3hLmjH2HN1hczfSGGSRRCqEASY1k5yRebT5bfRDqNxFb1hgvxEzviXkSNcwoeKaWu5JbPZE239eJ7"
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
