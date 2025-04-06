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
    "3jcJyVH8w4t2PX3veeFBWKkQirVAij7wprtxQhGF7GQ5y15R6F7CTYc3GE6tT6aHuQiGL1o2aSYDii3pDXHvYDEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "548XW1cFn4aW58Qi7dBkUGfxpFCAba449bSUP1sC8uWertknMHgQxQr7N3CBVicdjA9fGYZXhexPnf8G6SwK3KEV",
  "key1": "3MfaDLCqVVybV2wYsEUueqXbMxZrmwfZb9D9N1fh2vjxRhJZ48bN41CZAthzK15Fw5cSahjwo71sSkarZvBaiHvT",
  "key2": "2u9eq2u5Dfs21LAfYKppzsrvH564i2pvC4XagRwEnZZcd2fwjpHeQ3bKPLApUnYiqokdMF2kwTJBQBmt9Pvt4Dey",
  "key3": "o2gZ7RyVKYusWWAmwSHViEQPyevMujMphPrxogmCfpPafRQf9m8frZPMBr38vb79fZMgWag62iKUEYP8VWvkeRA",
  "key4": "33q5SrvT1RauQyYJo3sTh3GkHkTyEMpkm4aaJRHqQtvKjXbnkVZ9eG3ncU3Q6Jd6PRvi6AbGoLUa5rjuRGHaE4Bx",
  "key5": "5WQGKsSM4euA5kSBRgQWZhfQYdHezZFLzjJYfm1qDhEkRATJbheg1e45UhEyFdzo8HUD9N4fYupNHkoSkRW7Rh1u",
  "key6": "51tPwQTk89ykh5s1ZEg5M9QtP296VMfRS1vnZCRyzUrHRekKd7qrXj4s1tdcZKHZZi2NPbTd1CtvoQkryL3871aA",
  "key7": "r6Q7sFQJnFvYbTX7UpSbrMDVJtcWtFzcVq4tHvCgixgGa2J14TFMqJQUz1Mythy5RDDSxDB5g1rwogSAGqDCqoX",
  "key8": "2FtC2yGYCZH27Vc1Hj2Zeg2iuAimBgHjEaMZQXDoe8wBSrrdJHXzmumE6GaUiT6rb6Rw4b8QUEUMtf3NMvKErsud",
  "key9": "5Mg7bbD7R4rG3LuMBi4Qu9w9yGP6HduCRdvDgwMsStk4v6NTLYnK93BeBNxh9g9PhefJpp7h8amzPGkrXqGP7QFw",
  "key10": "4LR9tHy2nAzcAmZEfdNezikUkvwipkfLtNo4Z2xnKDPQpdQofV5WuNSEcxeAv8AHMVQ5d87HsqtgNuAozMzvrmoh",
  "key11": "2pizRHAhw2aBpVwtHCqwEzGRL6ShNo4rjGGQJWfTT1YYgaHLLsohgMoWhZgQxTVRxxgqYW8hhj6CQas5ieUabzpa",
  "key12": "3FeB37Ad38hmoh61ueETx6RtWsNqvgRRz2tU2tVd3TRtNG5ca7CyWM25TAkMF1jG3cXyoy6XAJrN6dezvEPfPYzS",
  "key13": "fNjDna8FDC49bHP2ihqfZcFa34tGYsnLV1bZq4jcBqdcQ1BudKWAPcxnhZ82nF7KcrP8sgHoeRFyyPPfjqgJeoB",
  "key14": "59gPYREsA1eHDFw3H3xz8wXvry6sZg2C2cc3bz5rKWDAMX6L6qjTtizXymVHyJbgNFdBgSeGYhujYCjuGJB76CSA",
  "key15": "LqcCEjttbopGuC2HHLJARKna3WG4JPe4h3Mex2iNXvEVtgBW3CDbRZdtUGwnJpzKZJfa8Z9DVk3phWMZirTuvmi",
  "key16": "tpPwcrnjsz3EhXzCMMLf4246ugCz7rhJGNTQS3fLaVGqCcSsc4kXJuoMdfvEYpCZXQgCSdKc2Ke5K8dMru4pU3S",
  "key17": "4XPi7FSFiVYzr7X2WMvQ1RFo4iJrx2tbnvQgByiw4GHR1uaRvtGoVSJ6vLfN9NPy4LrxSBeeSx2ajkXjDGddF1nB",
  "key18": "2PNSBy9BSPKF5CKxpAbZ7RHSwKXWhkpT6aC8CAPzDkdEvNuLeA5xVbCBLwdo8qVcZQ9QzcKCb6feCeD6uMkgxLBv",
  "key19": "FwEiFq4cq6mzEps5YaPjLnHwLrLQqBFGdMBzstUNbHGyqb2AwEaDL2d5JCTbqxztFLvDPJqBPcMStCaVLKD1zwH",
  "key20": "4A6a71Yj28rESJVFStQUrSFL5JyDCwwdht6oSj68BXxRkzQU4W5DbGAHweZ1oiPXRVnoRhNCAW8dbKn59HzZEo4w",
  "key21": "2ttnph7BiMHy3gLasdPX5xTQyQbpPsZ1BuszJ5QY4utVgR4RJQYPVa76na1b5gcXFyqvmeBUYp2yJnCxvq8XWnB",
  "key22": "4YTjvY2zFJuF83vdvMo9kRcvDNWFCPhTRo5Ry6MKJejTzUbGT3V6jQzgE6dQHKzy9eNYUyH9nZoY4XwUqkfJ3YYC",
  "key23": "4BCYjmMtQeBQWYL2ZkBDiF9JGhDV6LuTuuJ1jMt1Ha6APhTnmZsSYTGv62uK3DUDzMFzY7WiJdcn5bFCA5j2TNDs",
  "key24": "3v84tQ5ynt1fCsEtoyP6aNMebCwN5uStRxU1KGfWpGUKv4RYsNyfmVrCjMmVWBJFPLgFCm65K96NdhS4XsifmYCe",
  "key25": "26uv3tgEJSgEBzK5m1W3seyxL1EMma6Safemfw3eKUtY5YwE93Uz8ayJKzVqrES6gXhCFgc3jkdChAV5eddnZqEk",
  "key26": "5suM1yAc7LyT4pMdWi6Ax29EvuDyrS32vJ4EjgRF2MLxHhAt8k6Qnr8S4QH1w5T6egzWVfRNZsK6uxaPU14Punjf",
  "key27": "4EgiK5oSetWZ2Uhaw9wFKUe5NTR6sMqAo99wEuPwBDxVdZX4uxWo99VSxijM42NuC37r7A2SpwPqXoYzxW8mvHDf",
  "key28": "4BmsVceoyJWJFoviGdLofZMNcyMXUftGhYbQXEBzaAx9cnE2RWn2cevki8xiUh3xqKup9JqxKbJCBmDcy4ryNVTY",
  "key29": "59qjim8KCNKzVbavrPi2wPfSPXwYB8Mh6DbKWC2UYBPzpLd2f5eEsUPntAYttsV9nNJxkS2nGPy1ochJJV8mEApH",
  "key30": "5PgYh1Zhtj5SDtTtjZ65Qb2sBnP7YEXNnDTwL9s8KHAEvAkgP6h9UXfgVP9CNJF9w5YvaV1ab8vtFRhJGGR5Qz5w",
  "key31": "5tKnDkZA2hbePQg8FqRrcWVtRsHg7Vz5AGbY8czYHUFLRPuGgPLcPKkkexzdVgoWoem6GQnBhC45cr3qpPJAAahR",
  "key32": "4sPC2cP2MJ1M76oRqqbNdhuFKxUGGh9rvaN9415P82khTAd1RFT2eYD24TWRYvppoypZYgapzCN3ZJDfuJp3Z1Wr",
  "key33": "2g6KypWjmzgJdT1chyThSMkqr77WqM2wjfKRAbsn2muaK62BnUqY65pRPUQkhTvvHaEWx6jWw7EcdoShnSEmYPL6",
  "key34": "34567pd4KSjTbiC1SqVhd269Pf4ZAo4d98dmhYfdW5EQQweNpfnMRqZwRdvmLuszPo72HBNpwSh65BpN6W4rGBpe",
  "key35": "5iU8giCfpBWoAwwLmF2rjtiPpB9oSpJhAT9NLpSYahqWVf1wZ48WspEp6f3FF2vSszCU6dvZgFNuyPVDdby34PMW",
  "key36": "39KFGrazRcEcUvcWPogKkaBUviNpGwN9kdj5dkPYY2b6Db9SwMMFNDkRjBGt95zXCTCJQ2PCySmc9BE4aQcjoexT",
  "key37": "4mJgCYefHv5nr9JGZTgr9kkEvou6ZghznFSCKGCGxU4VL8WgoMJLqLiFXA5epv28oYtUkSTGrEtNUUtro5DBqWVA",
  "key38": "4JPnKsVeNKsYjKonCCpDJo7hnPEaAwNx5PLa1GdSCqDCepbjXCk1cYP6XWadHNKfxXJszE77NJbYxQ1bWswdqihW",
  "key39": "5o2d9Prjq7SqiPAR92zJf6TUP96CTKQdutb39TyyHfYYvyJHr5LeDDLy9bUFWC7xUvXiavqRTzqEwv4ZRkwZapTy",
  "key40": "dFYi8b54TiWggeVixvmeQJLP94amat8tuY3wXbZk7ozN2z27A7Ec2rnc2miajhmMdoR7FzuBSMPFfDNEuxPF6Lm"
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
