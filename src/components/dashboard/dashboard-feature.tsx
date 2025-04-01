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
    "3hsQM9GXosnC3SXY3FD44NAFceJk3DLxrTEikq4zB24EzLQivn7Vy7L1P1MKdQSx5DxeePUACcs2WZ2xZGwaxrxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64QSR3dqogyGWCUsaNvvUCuFPhdyeEZTLFPqYeewHPJqE3gBxSNR8hRdy4JgbqmaALAxzfx2mn8r85imsUuvBU91",
  "key1": "4pg2P8LAHAeAbpczwVWgkA7C6SwMvvUMMM8nAsoy2LKuhdHoZ3JQQf9NHYhSYpiTLeL5rcUqVtt7c6f1VR2cmchP",
  "key2": "124yVur7esjpMKuChRBvYqng7s6jx5QbNQ5XkBZypqDVCzhuPyspyT3ySuamYBijzfLdyVzdLLd73iaAagqPi8BR",
  "key3": "oqXfRzu62ifwej7UCXadFGT9JdLikCwcs76UrVPqQPNYcHXB5tqj8ytDacM5XQqTBT1AJmfsQD6iX3cvoWSvVeW",
  "key4": "4QqwaYhxkXvNmQ9rJVHZCGTDAJv7oTnk29UQgAgiXpUnTPGpj7Cyv2WTxbLx4PZyPzKQ5bhSePz2NsHg1VuaZ7VB",
  "key5": "3Xa2CEumnaNTJH9wesmN3C1eewtXH3oEFeVPBqVGa83KKT8eVnFE6f9ACeMj5oScj3RquTNfhN3PNLWbp85K89s3",
  "key6": "ENrgtoY1KyQ1tWBYA4qxaruT4NY2hB38HoBYkYWnZtjU7KycvJbLvy4EiYCPRLhojptj8SxnKxjGedEDPVexbWh",
  "key7": "4vPKM9vUvSVaYpC7QTvUAMPNWodoAynugCf4NZQZ7Atjzk49dKXxYDwaSrTrt4EnnM1Cb3m7K22uoandBhgGEF6H",
  "key8": "46HhiGFzGMXoExWNwGwcv6KreZUwjfJNSWYu3Y3cTQuu4aS6baXkLG3Jxf7MuZGcYy2w4PDdSUNfRDaFAUmcCzcw",
  "key9": "2Mv65JVkjsD3yN5N4nqbVmqS31E1dFiiFXueiZJTnaV8wGaM8HPg3zDNcKVcgBz8QLJYTcxp7Muuz2d64zAW53g1",
  "key10": "UyQSz91P5h7UeEsaj26S5hxwxCACXZWAZFpLBjRkePAvyCMerDfbkyY3ZeJNwAxVoMNbyELAyeTkef3yEee6z3o",
  "key11": "2R1fwA2puiTAP8AJzEuKq5yFPeDRcyy1soXsSLCvX9MhC3epXVrWJNPwcbNMr2zGPhCzJCG9jEK4aqznfcSojw4B",
  "key12": "492oNpov8aCuVxMmps2vRpG9ziB9jSft5MbHLuhrjyCRpu2AXa7apM7PyCjErrLByWiZ6RWLseSoiHHnNFZiA2yV",
  "key13": "62J9TzuoRKbGNvWDqYQ8Q8sNHAFoVXRpUqePjV1F2tieNCVx3xErGqox86XCWUkHshyh2viMhGrCPZd1g9jiLuzQ",
  "key14": "36DXCwfkkH7mfPL4kifVFPhAWPa1MyPN58YsPGrJ65s3snXZcBnjaZYS3pWJzDGnR3mNmNK8ddFqgYzMMmrwtBNR",
  "key15": "4AUAm7XG9NDW27hnZGuZZgmzjAELsgh5Dntqh1KCVyMNF9avrfAYJTk4FyL8rPSWScvoJ8im5VYyPfQWVHbMiWuK",
  "key16": "413CeuU4UrvE6idgDTP7DDHEHoTJehGaNL5NPirSEPAJd9vTb99h3ZRAT9ycFewbPR3sgekFhjHAef3uuJwDNbVV",
  "key17": "2mFAxfBypFMNLyKwE1DNmKdh5r1y84ZQRSd1i5yqF7VLNCGVPkJfxsyuf7wzd8dk7uCJes5UrXhr9gjdKafLCAsQ",
  "key18": "37oW43a3ivtwohRimNsWiCPw8CYK9jd9MFa4vR7mTPQ4qCMFHWxWXeodc5QY1YijqqhpjQjvmLWEM9MrwGwszGkG",
  "key19": "UwW9c1pTSm3MX2YZ4nPSfkcFWddqVEg9hHSCePjSLZLeaksku1XnEpKQPCYtMeZJ699fvUWRDKDsebPFXG3vX5w",
  "key20": "5svEmKA493D38yF8ixj9e2uMGDr55Ewn7Z8eaptidqqpUBgH99oz3o1o2UZzvtW9XQjacKujPjNP765WNqszLtGQ",
  "key21": "5b5rrZh1ga24QoEw1BNJgainA8HXw4XTu1XGaPUJ6g1yTWT64MhX5zjtcgQYosmEePEhwW2148s1BwGa3V2CNhNB",
  "key22": "5VYqnMK4ozqwTaDS8YTdVwf2LiXabtwnvyuPeFY12K9kkZcmrf6eXnZ11CEfDZ9ALMuYNux6XroPsmGF6XZkmsG7",
  "key23": "4esj4UGtvqwi7rY266df6zzNgzjZnJjdBbEj1Zny1PEVWMTyYLg4oyM69c6S7jEjqeCA4ecubCgGRct9VKSqfjN3",
  "key24": "5hK9RdWyQtHQm2aXBx1bawkpLxFzwy1YVDotHb6jvoEv14kq9M5jRBtMVuBQ8QLRYXL2nM1qZRjdbmUVZ7YFMHe8",
  "key25": "2Gbs28oJ4EgzW92jy33P8SiJwRr6WqLMhngbci6wpchRGV63oKZ8ArcosF4BvmDHRmEpT1DnrRZk11FufgS8x2WR",
  "key26": "2XjmLr5LpaEz3Zz24VsUM9S3VzvXmWRis8in1aBVa1cmgyc9NADh8bJE6AxbqMWxagSkiaZTUscZquBCj4emYF14",
  "key27": "22mMg2TAxXeF5WHrD2XpMk6dAVWpEpPuHTHGvuPfUgATPEaVkKHHiMRwRaaQqpyqcWkFoTSAZcEFqwp1T7M9Db51",
  "key28": "24JEnSPgNuBWCjTXQUdF4VHMcLYo6DAbdF5e9VeJ3HUv2PpMBShsMm5erzsGkgr48Tzqamrb3KotC5ammTdkwGvW",
  "key29": "3yGsuCtSt6J9NmirbdMJC5P2q4aDnEWq7QfCFGR6Qky75SkW6yruCZBaQg8XHuUTXB2tV7pSjD7vfbLiJg1TG4yD",
  "key30": "4uwFVb7nm1TWu3dxvqGQAeCWdGPqFLCzLAKYDebYCqSovMiULeLoidqLH586NzeJcYB3QZcpuuyTmdag5NmcHgHZ",
  "key31": "3fYRwMYo61LHWfNbPUbu1RXbLjs3bNuYApBLq4iMWgxW1AEspZ3TkiDnHnxv2EBm3Y2pkegQBs7UiCLKLiWoyqXe",
  "key32": "57y2Hz9XqTTRrW1nDe1hCTqFNxx9jVSesWLe6tag7AU8ySxsAFArmYtybVP8arxet5i2kdDcpJ7co2kjvfKQmU39",
  "key33": "33m8oeWiXAtGbkYaMQ5nkMmqxn83pEzF1CEczFxZkSJdLbEuRENZ2YTSTi2hbJczp4Zd1dgX6yCErwFPfcBv38Mm",
  "key34": "3rq28RPQfogjd7NjtTQLsktRaViorrmZDGU1jRaxP9PU9Xnxekgs3BGGsB7o5Gb5L4rEUsqbqyTJPPfssDVvRUeW",
  "key35": "4S2sJXuqH5G6h9v8rpnwmGczyYBdQvUC1jmBqQmih6eCLUEuyZiogorUXxYxWrCi3QcUcvUuogtzo7VRimPSzYhP",
  "key36": "5EnGKEjg5WrmxkwSbueizFT5einki2tyrjQZV1dNuMw4bZc68NNswkUutvyXxdgr9HirqSvhacTsnSAK736Bhn3R",
  "key37": "4SVCRqKfsrwSCPjmS1rBpL2cQVTkNcrdJt7zDwMVKZR6ztdEVmc3HGZzJ98hLpLcsUeZGKTKRXiNEPtaYgdE9oLW",
  "key38": "2JSNGdAba7hpeK16AMgnWQ76dpX6QFLY2B4GHZ5XzVbgpyGqXbhPmpYdGv34muyWeT1n2GvaxQByT3TZaACxqbUm",
  "key39": "5vZXfXhAxQvfoSKqPagMNpgmmTLJkgMC3W6bKfcUuza5fZVzba46mPWh7YAgJbgw67Gv33b3xjgpYN8h896eRQ6U",
  "key40": "4zi1T9ypWT9VL5GeQfZtdjryyMGoapVbsY6Q98u4FsnRX9gUWiuGUqnc2rYQoeDUgK3yqbPKj1L8tkjNigFEtLXC",
  "key41": "CDxJmiup2bCLp1YbPZ4gv9eoqqoAdcxHmo2q2Vc8oD64fk3qhCLSZp17xBgSXxX6oA9cD7ADWAMtatXbrwiZGxQ",
  "key42": "VcenE2DrnDoz1PsvBhHopwCvL38vAbP7WzbJ6k2zma8zUeNUiDor1w7uEfUKcXPT86wed12feLjGYcK1rzSfcFW",
  "key43": "2HswM19yBbyLzTgHqod3CJSmzHzfJfRRXmg1M99DQt9vNGW2RfJR9gjaBMJyY3rdqp5kfSn2JcUER4xkbdkfz3Qr",
  "key44": "3xDWbEtHxb2mNC5Lrmbmyp4rQY1NewVEgujeixhAafoD4pb6FJ4JCVGipNALasjVfxQX6Qb1Jku2oeekbbC5Hurb",
  "key45": "4cuCYnGDTqE2nWGfAFHa97Qu2Nx5vykmnR7fyq7VhHnmw1S2wAypeY3XWBNb3gqxmw3P4sxH5yaGYTz9Wuhr7qL4",
  "key46": "53T4V4RT9WXQrfm9PKwpPhGbVmQfqNSshgWWgLnhETND65jsfmVXgFnDRqGBAtQwj1Cf5jSE9UZhNKAM8SEmSCEk",
  "key47": "2BbXLDLbbKWWfE3FoWium7Usis7i92u3fyZu7cPQefLCiYFwKA6XNDJQ4TQJQByXNDKr9Mt97DiUkCqBbnStH4ke",
  "key48": "34Dn9tRJf8uiEvEFFbMYQu6LBnYeGwfaQgL4eVwTjgdo9mfGLzQn2rESuw5h5bRVVCgj9q1rjPjSCrHKn34tDGRk",
  "key49": "2ypMJurDZXqbVLVK6uHAkmVDaJHRkj2KBdzZ4nh1nNpAzShVcPmeCc13xeFADhXZrCJLbAGNcd6UUBmoRbruUn7u"
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
