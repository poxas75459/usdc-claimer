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
    "eQibjxvVN1MVWsBGzTbHG51DMVMwzJ9PK9HuyVCyKy7Uyd9qVgpPxeUfGhU3D51HsSFn3L71ZCLmPaBWsSPqYx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24QTFhxCJukMGwCwQDYViun5KTy7cPizMCYQ8chWX1HC1t7MFWXN22XHLa9G1fJE7XKry91nyMkc1vD2dpVQyqEi",
  "key1": "XbD4bdenuXEG6SyF6dnuZEs1EyMsUf4s6gJTkhBgGdGtqia1v7W1WjbRkC1TEVYD8fgpXsipT6vVaDkbNrX2REB",
  "key2": "2JdRWsABaUdJ8rBtXWfMPfP9pDd44cSi487gMcurC5yh4Ff5Ua2w8DAkN4PAJejcGtcLy94buVprtpNJvpHEE67D",
  "key3": "535kiFw51DQm3uj8oacSZzfvWB6XjxT42VTDT1Z4j9VQcoGTK9Ac2H5yymsgee7bETWS7pBypF94Wf4mo7ufoHDy",
  "key4": "4zz9sLXJdoHcE2wwbKdeB2c8Yxgc16L15Yf7kMVxbheEpPkWGygVZz89dEAH3rrhzAEoUZpxme7v1Vaw42KnwGjJ",
  "key5": "3KhSRDFKcF9k8RQgKtsdXRRuuVXNyaekfH4KhqheRy9i7odgzgTLrYZLK275wH7sXmpvmdyfRNN3Soik1Hdkaraj",
  "key6": "3NWj8LnjqFo8XNEBC6k5YVMB8tW9A14DPSFTWQ6cFVuoFNkkGFDnHrfx7aba1ns7Jaih52EkZfgjx9HgAJvPKdqt",
  "key7": "5EpKfRx6cT2HJqyJQmjF47JB5WretUP8JegYskqDh1wBjRg6wa6eWxxykvGvFExnChqDjkDJ8cBAhKJPmEsrEZsE",
  "key8": "41A38J3qZQ28wQmtbDY5GShyCHuyRhdP9dSFWoz7xfmxMVqTwFLsgq2eqFWjHz6fGKc5FM7HsWQTbLBhnJnGaXuB",
  "key9": "3wzEtcg8iwZzZWhnd1Pr6JcP7uYF3KzosZtvBAw6qVM2P9KiMX1hHZiduWJ3omZ29rG8p9RK3LDs3TiUyNye9QHN",
  "key10": "2Yzxegn26QmxnkUiyPPNN2oszWMC7xdKZLzTBu9ie2raBTa2VqepBVL1YyeLw2cuhZz2XJvrQ3fFh7h3Cbpewyyf",
  "key11": "5VUi3qEzN7KXdXmoUfcXYAUutGrfe7o9HPh9QRaXcMRFVRjQuTgpBZsB6fLGhajPH7vr65oS9pJrJ3wMe7RpATaU",
  "key12": "5FQ9aPYLRNjTNATdj9KfTvn5zdQQZ4shNugJS8a64hDQ8s23aGqeTvf7hyLqHovQhTeGaxPRwn7Wt1reTdY4akHK",
  "key13": "2vxvpUyJ1wASeNWxSD5FKCnLZpnD2kwo4kw4BYjv76gir3D38fmjzT59KEWVA7X3qfpmEnzAmxzKzbzQthjq4ioF",
  "key14": "5qdvoxJGfXvota2PerwGAYSB1zAjFMdNWBQeZqKHeL2NEFwYMyqfNuBdpos3HRnwAmQ24jMtbj3hg9U4zsVtcswZ",
  "key15": "4A7iUPXZC8szUBajWddzYu5P88wsFTNsxdEn8LPXt9xxZ7d2FgUb5gSn4ezTq4bKdQnoS6n8iPDiygx5YZBVmxsd",
  "key16": "5rLKKsY9yujK3eNR9DGuP4LxjTWTjEYtdSd9XLQegjuzr6XFo2TAtHb8G2nQ1v4SBYSuiMEi4n29wiYJGkmJyuCv",
  "key17": "3z21sWP8wNknLfsXaFHJmqAwbeqmEYc1qGvuR3BjJvmdoHfKM4dNX1Qzja6zoHccF75cejhAnD6yQ7PghaqDL72v",
  "key18": "2wiakCAKQuKs2heaSzyz41ZN441R4x2uLN9wYC6Mud6fa9TCdFGRD8nsRvphRr82qN1cg3xuSW9w5ghwWzahvhm",
  "key19": "5hcvwQFKAjjjGf8WvqfsXN3nNMA7QiGEbLUHZovqD5nvjZWATRiPYkR2yksaadLrbjqsFJ2DW7oPnCGg19FMc41d",
  "key20": "5CWNy3Shq51M3ij4p6zCFwGDv32pTtTEQwBEX7twcXV6gZWXS5KQPyLQ9htu5SiFVZLVGJMzbaN8Y65wFpLsFv7B",
  "key21": "4vxWVaQY59vBGCi8z2GJ9B3LR8EBa3EnQsWpX2SpL8XpJQVFy2uV8sir43tPyEFypVrsXhHR9F1upTttcE9WyDWb",
  "key22": "5KdGPG1sVXW1kvugRDFjPuXiw7rKrMzxAAir9fkmVWzPLcAE44G9wXJeMdtaUj6Jicv1MoRaTE8kjut4FsRDxciE",
  "key23": "eETZaWTDeVLGjwn82TMNDVd8gA1nmgEVK8GipDA56asrVnwbSHPadx7gCvbkZrhDL2y6bbF3zvkSxHBM8VuTAhH",
  "key24": "5xpouSbmGroEG1mcURPzwE5KTbkswqKmPqmP5CTj6hCsdD9xNw6ezSVPjwV2SJXsGnRJgk9KpKmoPYA1WFFNe543",
  "key25": "21MynbyrmzA5eaLniG9qvdLQnKywpv82mvVb14zom3HUQPagoSLJLkHuWffNbUs9unoN3GsB8x1LE9jx9LpdiuY3",
  "key26": "3s95L5QUHEdnkey9rFtBnQzAvkzvHDb4Ge2M17S6BrUJu5G9nAC67LtUbBmzRVwCFwhWyGG2jzbcMtZ4qyezAJM6",
  "key27": "4SKESi6RfiEKgb2DZtuVJfqmjAiyBbdRgbHUQKomEFPegqkRJADzAvYCvEUMCxPG9s8fwYXY4rRVNYumnpCxV3Yp",
  "key28": "3NubyKtDJkiWbDABwHLWkQMb7oafZKHUy2okCA3ANFg3zdDu3qUVj7taumMGjKY2jnFHvD68MjMyRhiBEXN2F5Ap",
  "key29": "65Pd2dHbPrsZ7pq7a384RrQmU9X95kccNHR7Bw2WRa89Cef5U23qzqxvfsYADBdd5Ztf7G2qhMzsQYcmu6BgJsyS",
  "key30": "32EsBbsRee9WJfNAHmBSz2Uf5RTGmtiPg5NuHbGB5WtKMVJna4GVbuKxEaAh6fJEiUFQuLDaZMsN6CB5Q4wfMj3W",
  "key31": "5hYbd1a2LDBAxmsij3iPdcWbGjy7RuGbC5eJCQGWaW58MeYs85Xh5mfR9gJY3uc4yKBxuvENWW7iLbW7dEEAHENp",
  "key32": "3qhBLfZQQy9fFgYqDQ8AbqKraDaCxcg96w7kctqZs45xdVdTGdDZXQ71eJmdJNr8JpFzi6rhTnBrdPGrnj4PAetd",
  "key33": "2EMMPgqmkMERsujjBoqzFNSUrE2dFL9zrE45th36h5sNGsyMReD5zGa3PTMzNucbrSHWbvm9sUszsdwABF3nSur4",
  "key34": "2mEspgA2CBt77oBbsLQxB66wuM5QGAy1Cs4zpGmf1SQW4snyWhYUqYJrS2HTBiDayQx2wefvgPQuKBLg6rEHyvaT",
  "key35": "Wtoh4Mkj7uZ26R4gFMNmswGYC7AKHAJWZEyNvc989i9An8qeTLdHPrkmKxyuqUxAfCqw6Rr6PtEmCPR9eYTJmnM",
  "key36": "5R28kcb57dTrVE3gH5s8KJW1fzzvCR6Qp4Lv2zD6QNLTxwZ8YReSzRU1tnstoZgBxXXYaQ8B9LMb7PK7Z7NwW9hh",
  "key37": "23KnsmV7SB5xN24mWaemyEekX3xa436LQmhJL43byt55TTKnLTSEGCXXhrgdQmeCwzFNavqsfyHMN5KSNFUfkvBH",
  "key38": "5UT7BG8vPUVa7DmnxPqAnoWEdaeZouv5jVaWfcx8W87mruzfzgBrTJbHZWLubNJVPJcjkkYYDryTQ58ubBkuMcTr",
  "key39": "2bG12vhk5m68daPMFGftrCf7JpeTpwCA8zaZNjqbrQMtvQWhZGXMAF3PB8f8xZvBbgA8vuayUmvy6je7rGVZQip1",
  "key40": "26tYsuhQJZBw3D8ENi8qdaL3KFbnwB2TkarNdTVzkruXmniY8epke1ABuGuy5LjXSW3K9ptGV14JcEw2V3V61UWh",
  "key41": "3hSoMcEzhBPukT8rmd1xUqXd38aT9uSbUUi5LgBAkRHUBBsmNNdrpfiJCBq2jGgu9vwxsBCueM9goZ8GNSUwQg5o",
  "key42": "jSMzv1Y6LHuJRxrWwrvhvbdU7gRmxFJnfTeZeKQPtr33FF9Lv9hN1hPDciXQhfpee3fn1btoAgsE7ud8tR2EZsR",
  "key43": "3ZDGSYHTHA6xyLhfbzKhHotx8JDV4rmMGX6RQ4N8gbQhRJMYrtVjHpBNARK267oWAJgAV2zHBX8aygkmKvMLfF3q",
  "key44": "2jpvuYju7woGrcEdo4DiAXwFxdykcdfQWwBh7syavjWkRD9AZNHxNkBPxPyc6ZRgjJJnZhYeWYW2jkhMGZTNUpwb",
  "key45": "3ztF546MumeCvqNrDXTkThC6mixGHGdhnZhNs2yhnuR2i2rVG7PC6gXrxrYd25VUFvMwc1VBKa8WzTiEVqM96zXa",
  "key46": "28X5khhy1sRKL4JtC6UzxdjEPaqahArbQtG4MsvEBffU32C9ZNyqgT4uRjB13LKr637g7vTVRm83Jn2pdeqBdzbd"
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
