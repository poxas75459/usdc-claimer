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
    "64vX5EG8mppUc3fuDkK7Bz8bBSxRwVUxxU2Rm3WsN98vrDnJ1iWycKtNFPkEmfQsatYRnrRZ87NguxVAd6BAZFPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41TGT1TRFiZySyPqePTa8tTVWNzeEL2aPBzNePUHMEM4o6yPUrv9BDA1RiYEgL1wxfsxczgtkhf9jpJ9UCPwNtxE",
  "key1": "4fVWm4RWbRBREHLszemCxQYw4AyFxCNymecuPjvmmp1otxSmRFeaEd1Q2fxWR3xMfJhqQkF5toMAmYKSr9q4XTLe",
  "key2": "z99VCnnPjj4wvkywYWk9DvjXowM7HufbyCHcVgVwWEs8KexvmmcgcLWJtU3ggUoqj2wboG24nW5y92EZXJNse1F",
  "key3": "2se4QA1WDjshYRgTo6UsZuWSaYPkRi5z14JLr4GjJ2AQQ8ZButmE2X1D4DM8CLtxvnS9qWvnhyhqh84wJrW7Vbse",
  "key4": "3EMiLGUjWXsTpGGTMtcKSJEuWywqrD4Jfz7WzHcFyzxTVuGh8PP2JiHoXFJhHBupvuKkny7AXG7eW3gioAQjJaB4",
  "key5": "5dxiotFKFcBchs24wHfy4Z7qE8MninnWSV3fCXcE1vXNixWDrqCQREoTPeotxS2A5yLcfdgqQMfAPG2KVJ3NJaEh",
  "key6": "63hcUKmT5wNjwcdoneSpKAVEa9FuUem1BFQpP35t13CwKwigf7aQ236z9eckFoBTAcydmYyD4h5FoFyXaMafde4m",
  "key7": "2WPK61wCQoNp1LoabWbbnLUWQ9jnLjL9tyt1NkYDShXRjvR8Q4ECN7cP4W2nD8oDqbUskHQrVJK1WU2H2NMaFXVu",
  "key8": "2JSvqzYJxPsDGdwHSAN2Vq65vKb3zAPT83frK6XC65N8hSMai1kXRchxkKCZVqPqXFGrQxHRvnafDQVNo6QE5DbQ",
  "key9": "2REtEAWPn7dvnDmmYk7yp3MNKtAwUcPCXboS75uefnQMj2XTUc2jQfz7QWYkoG1msbjKouHbdVFEYDv7inynn6wF",
  "key10": "4tBq9aDChuyxrcRrjjvoYLq6JkBpDwyy8iMz5pvA4vx8MQGUdxcwqsutSSqNVbzLdM3RvWx8b9Ru6JrBm6W4CZQY",
  "key11": "2Ej9H4c1MyKcsFzRZpxL1buFhiVKGZ5k6TEfofXQsci2bEzqes86jpfkVPAugN6hCTvmELpVaNUVhK32W7aUSiQw",
  "key12": "SeRwaDq6PChpLbFSiuVwBqbNzwmRwcUCBvnxaTCP4xSxai7t5bgtr9UfUhpn8TRQnzixXDDkVGUEGoM95gGGPCi",
  "key13": "2tYeUvZU1rzxUTsqrQkFrcguVVxt3gh7HSWMkSWNR1NqyEmAU1hSh9EMsd6FbWy7YjsrTHMmLxLN1U7BtKiqsuBx",
  "key14": "43zUSX2VX6T7dpDkave5BpmeKXobQkP9VcABvg92yKgjP9HJrVT9TDVSee9Wz8zWQ7qsRkBCB9DEHH5BLm5BPBfm",
  "key15": "4jFQZHfm5GVsx4SpGxYUhG7rCDSTUSjt72Nh8Meoyo7kwbszD3bpMfb3Zm4ariBPDEnFpVVwcEfUeBGG51AuxDHQ",
  "key16": "4PCXtDfizqMLESa4gSCBCBX5phQnLtgqjZrMuKZr2facrWA7azMU1VSTGF7j81BoKa26cbi1ap3dSec3VNge8U6M",
  "key17": "66dYcCekjWB9kvRLQznUv6b5godj57HrEAaVt1oq2kUsysTsJa62UcoXzqBHS6kjvkMFQnuyMfrAxGqW5kQ2ZQkx",
  "key18": "61kAHbCsQB7GHxXw9cuFQGHeBZQkenBc3z3hi7KXr5e3dPtG5afx7qmQSo2MjpEy7XASLEf7MrKTgur5Yr5WacgX",
  "key19": "3RCZnT6yMXw8KfSAcX9mnRtgUoAtkddUuiB49gjffKktAH4diHuzSgkHVrkDmroSCmSZUSnFT2FZEMQHQ2v7gpS5",
  "key20": "5LKsGk2obqefXFrEZ68cTW399o6LYMMRmFr6hsKTzxok17dT8A6sG83nksiNoXCvvWDFff99wGe8bFZ9ZbQfzjWD",
  "key21": "5E9WPX7eFsJSn1ti4EnFD8KrUw1NAAvtUpQyDW1kH3H1fwB5XM2noJ5zRorjRxmw8wCwPAqBveNnJ5LZRymdm898",
  "key22": "5VLStCLRk7ixXsgzERrNTGaSHuGh48p4XBHFdminVKKNj8SsRdzAoAHTMYBTdDPH5BS6GKiopKoNpBCwwfb6boTy",
  "key23": "5Le4rPdBrTn8ZYgsDH598mzpw5974CG8Uz1YUfgqf1UepGF7PUBPYufeWS2x7BrpFU1QHMSVAquHcibq9oLFT84D",
  "key24": "42mL52qfSqMAD5f4HJPJSP9Kq3M36X2U86J4DpUUbVoQJd87QRRkE3Z82Dp2UEGMmna99tgxwFKGxxKKYDow8bER",
  "key25": "35g2CAMhmgsSEB1aNBZumbuxhiWedh4vsNKGJZtd1fS7KcSWkrR98N5eo78EAxT9dvXjBN4FvXCiqtcVaDMqbjwj",
  "key26": "K6uKBDwki5uAZrZ7zodKBhPRPwGQ5VYzNMhJLtowqU2Kj3eXC8gceuVmajoZn43hXJw1DNJju1intioErqiify3",
  "key27": "5jdjK8ddVPaDi9rysWeS6sJVEMVdVwRMH6dMH5HifDjGwTt5yQD5uvpKn9CjdpTaT47T6g9RRa4vja12oPsGaUXV",
  "key28": "2npsPcvjuQLEPYqPcyNrbEy83k3HGZn9ye7cJ1opZbos5DSWkoBRvJBX4Q62eLJLefA9Uzqiah3PnqAfQeXqbCsu",
  "key29": "C16c91ASH6uP8mZPwpdCSzE8y4nZzRdsA4PGX72wcGZseiERCFZyb6MqHcr89vYZ4K7pTgu9zY4CJ4i72sYzugv",
  "key30": "41UsMYt2MnnuBwkrmDKqM2TZHRVAXzQWuCnNjskHChReTkqWqTaJ2bx9ZMsmysGJtV3JgW8sB7nEmax2tLJFHZMw",
  "key31": "2Ck6ydeYnb3kL4iXQDriBfPQ2yV1itECUtVG6Q67QqxjuvXHnyJ9LbGysHPbSvJ4cdZErQ3FxMj2kSS1NNvXWBuz",
  "key32": "4RTtQn7foK46UStmJcg3d3NxQEXVLTX6W1EsXViTm4nmwyRkCv91eea7so1vcfuPQtuFC1SNhHNaRgHgikLsMzww",
  "key33": "GFnXK7y4EmWSQh8QGDsdw8DuZmGRaGLJxg36QiAPoHw9k3MLmurK9Cyd8uLohhBBRk6g7Njboen2TdtPSBgpf9U",
  "key34": "3GpmUa1RmM5Fv61sp9ULAocf3VedbQRonGzUk6439ajXXvsWPetem6S1SK1X3F8RauXbe3Uer3M7vv7SKbCttYf",
  "key35": "212UepLdZua8tA4bHH5sKeSQwtt45p75qYsg3v5yPPCzrq3uDbvuUikuM8o8wavFBMJ2S5Xz7XNpYknMeMftRk4K",
  "key36": "4zhEt7YLdQ5oe1c4Yid9WgoV5xpEZFx1ZQ5peh9iZx86RMsoifeYMKbkaNpEowwKSoMxXAp7bYthqtvjmSqUsCVC",
  "key37": "3AtcWGqHz4X49fU28Wghd47RyMCmPNLxb6oSNDy4L1uyU7ZsQt8EprVZQbapWGyiikQJoHnm3BU9xcMDtuvCpq78",
  "key38": "rgd7QKVij3yjsj9Nh5e4Dv2nquz2ymNmj8HkyvsS2aMspQwbjKxCtSdGybUBXxhQVa6XWb6jL4Bdugt3b2sdTL3",
  "key39": "gqML8Cn8nwchoG2uLVaqBSdsEAvgt374NHSzQt5Q4Dy4DqrtT2qeJRBnmNFw452NngomrbmuyKjqpJCDN5YRGrk",
  "key40": "NDcr3h6kBt7qV4mQKHrQPXwuujkuctkKVfnMrfmzEmEh7Hdx4he76HhMRpQp8L72vTxo7uijwhUbcZKyiiDZmSD",
  "key41": "K93BVF3cXNWPJGUVF93udm3Di5jnJEzsZW2uKHRi9TpPjbzpSuU3z7er6sjV4DmJHSPGqbf2tbhrnYKTuZQaz11",
  "key42": "64zSVpQyWtGRtj6vNF7aV3XP7JdVSwBVvWTki7XrwNJHDnuKw7NoaTKLNsc34nz35rdKLRoVP7Yc3TiH14YNiNPN",
  "key43": "3YsU9YFJKCYp86z4ppqRgFE4qBPmvdU9gutauh9CGsjDbcpSwfq2xmScwUZcPcoCW6a16nDuspxTotvNQjSzKUt2",
  "key44": "2pveXpn71yYbNHwMeSYmotWawZcGvej62JJpA1vwAioQyifk1gnzZmhstJXvHjXxaypPuNNDiYYgXF8EgZ7JGe1K",
  "key45": "4mfSmMGiexETxZL983PzoBmNofJL6etddG6hTxauwxjdCSHimuCs2YtWf9tVpQmRb8Sf3oZuVCqbgPptjVBfFoFk",
  "key46": "3t2JYntmWRbqtzeH626FDgywcKxL5cQFnhVnxSFdaxjmH6zub9gaWm3Qiu8hAVefZEH8w1JVWpVgTSpLx7xEnp3W",
  "key47": "64TkxtSaVe1Q2Nbdvsa2ubUyUdi9VeznuajvNyFa7xjrhXqL15CK33SP8y42G1hvhnrM3rpVt239be21uUsio5oR",
  "key48": "49YDyevKtKr3hcmHobZEdBrAhNvPuX6dkoj2QcF47TvVGjYpdSjY9J1GVTaMD4Asw1GPuy5nphfV48Z6PpyT5Pu5",
  "key49": "H9cDdi6ArWGw9CgY69ExjkSMbMADwLxPLvhZG9YkQy8ro9MXWrPq7oWYNPPUvb6qudsL87m1qcENjxa8oXfuKaj"
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
