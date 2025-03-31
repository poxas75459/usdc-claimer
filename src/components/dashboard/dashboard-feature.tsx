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
    "3jugmkQWbTRUQU6Pd2vZvw1KMDhpqLiT9LKPX8k6P2G8kTKFzXUVPbPq5MWYowiMziJcSRjHdShrZs1Ug6mgLHsP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pydj1vGSeYRVFJVvtuFLRcFSztfkmkL2yjeuEvL16GjV1JsYKrvebQ7XZCppKrCV3MbpBmmr2jDnuPM7prP4qt4",
  "key1": "2X6ExBBifFY4WXqoD1gAr4F361sd4dcxF7cA9kxGdBYUY3d5b19ceDixWdNhsrmss5fCRzJAjt38yUmacQLE8SZM",
  "key2": "3krKUhEAnjtdGRBF8UVYr2m9Z6DS9ouLQaHoBkrmtXcEaqffUS4pu2x3cyaPqvoX18Bwv5k49mMRjCBng3CujZ8W",
  "key3": "eVhNsU4DKumxHzj8znrbRWqfCRjUht1rMkNtkfeWDLG72h6xAtqTxGmX6frF6STSTJuqnsNXQWuE5ogb87VvPtv",
  "key4": "3c7HjmdYHA4aJSBtecvVpXE91PbX49hvTAKTwriqpkWC4rcxR69rHpbLrsP5zxtjJ27rHQSp7M62zhSs8bm1Etmq",
  "key5": "25ZDhtVSs3WNfdhPVkKefH5fXwxhEyUWXW9LaFfA3eNZHJRk7srXiQbcUsrXbKyahtZpJ1QC1FLRNfs4ZRq658M6",
  "key6": "5ghAvQcYBsQTjK7TDu9ZRqs2f4BA9SNmqGp6qRmSALvo7Hr7AbP986N5XU5xFonBsTHoc2jfrRd7ZEuVnvPwzYdT",
  "key7": "3gtaKobveApkbEQpESCci9bSoZTfgwHZ3mLk3ex5zfCduxu4aEaFBzeHKic52HYqie7kTT8WQ6rtko5JSAwAp1Pa",
  "key8": "4CY3KcfPy8iZzU8Ftk6eLx3pUCjYfSSDoQRt8gCVpujeBLdDGiqPtMNfzcR8vg6J33tc4sTcnHyMGpzEy5uUNjof",
  "key9": "4Bc5r8zkcHgq9X8PjrY1shjjZo7hSLwTvPQzqwobURTKsDLDX7rUQCoKueudPQVF78QJhGjR31ZgP3GbDfga2kqf",
  "key10": "8ehnAm8E85r6iicb5uAaViQSjDFs4Wtf8Buh1FXdTL7diYSHEMDSLU1uqRFvATsi4gBYFYr4oumfF8uk9ezs53K",
  "key11": "dp1yopuYt9pTXMQdxeGijLgu2EoFGKd4L5YaCSbAo5RDcqDwqjK4CDLrfW9JDnvNMFoLcvshLpD9EzdS56XBqSc",
  "key12": "33Hrzh9eCv99YQDunzgqPBAkWzArw7U7oxN6NLMjJKhoNyTRm15MhwsJ31uZvEfvcP6vQQivyheZxWhng1Bd8Z8b",
  "key13": "672VjYqdy5L5ptyqtqXEwGtmCGSW8KdABpU5PsqzcjuK5oJfv3c64E9ZEmHPcvtZD8Bwpjf8aELbH8UjxRn46iwK",
  "key14": "HrWCxsL3Kpc9FffHPEwwVH9JgBvHg1oofXDYVZutxYzBnMeCjqi3mgv1it81tcnyp83q8TB2xndzmNgg6EAhLPL",
  "key15": "34zmHadnbfAmGSTWQTbQPSn1y9yA4NR4uDmDsEwMmwPe8HUFgsu7LHy6truDe6qeozTXx7Y91wpKwFL4C8n8Ei4x",
  "key16": "4xMus6wLfu1L1NC3q3EiSj2X56irkegGwEZ9Xt3VTWrphEGjan21gSZeNxRBVbJJXnkGFjcnjfrEXn5uUNmkc7ys",
  "key17": "3xjJJMd1t78dAps6XW9oxKKxZ7RyJC3s51TAyY9cuiswL18888Dq9hU13j2oRvGbfgUuQp5CyrY7B51vpxLE2Cky",
  "key18": "2Tdju7EYxWX3oAnJ4quKp7AaRinBifmpBDbkATitW4Kt1FB5UA1F562de9HXr8ZMnfyA4vcEMPSGeioc4vWAgPJ2",
  "key19": "46Hd6CrLeXMxUUppEwDE4hXo98HXLuLnCRBvV7cxkgDayahvCDtrZzhLPUfAXPGzoUzRhrd4C5UQmVtE67MajbMe",
  "key20": "5nm2XTYJcjgZV8U4EwZ2t9YYJYWjDFcRGp3xzq4d8CjdB5go16pBR4LF87FrQvwRdfYr5ASr1TzP52VxHaZXAx6H",
  "key21": "3K1LXESLvgW6fwoW8hZnVbxwuGQ2mNTDdHouxVH5QiKHbE4Nu1SyMJ7bxHcqKDWoTR77o8unAnt2CMCEaJPHR2kT",
  "key22": "5Haya2X73d1hWAHS41BsyuBBpJd1F2DtDWoQdvbdAX4D96ZFmLchjq8sSaHDr3iMesUXyqUGsoVbv9EwnokUH1H8",
  "key23": "h1DdsgQWACiKQ3USQZA55j1ja2fqAGNCqYTqF2vRRkrTZ7kBNDzuBJUWt2FdixttktCcMpmr8C824cLE9bU3yaT",
  "key24": "2kcqBfLBDJWyDrm1wrusXRoYgjoSvaSwvBbqjSnqADi9tPoJeLcP79hDTxRt8Cu8BEVQVU7F67DtqkzpP2qpZXj8",
  "key25": "21jUnwSHW6zktYjgSTkjLrFn6sGSxyJcdjCSs6rWVe7SwikjAmc3bmiyCnx8yBBB5WicpHgAaZH65cUKF4dCfMb5",
  "key26": "4Qrx1rK1nKKLgw5hY2BeDuRPUG8fPog4wf6434TUG78WFyTSgbzUTuUHgfBEzPS6vM2yp8Xi6T6V2UALkMJ12RxC",
  "key27": "3UJhm1ENrAieSt5zkCm1ELvnrjWR7E8L7KRAEq85hHpa14WqFXwamDEQDfS6J2dcySKP5mXfN3HRuWwrMxF7mzC6",
  "key28": "49k3nfu7Zzrr5dTzBVk6T2P8QeZVPpM26oBrcadyep1gW6A1zA4vXEwF4sszW4378npvKHFnFpoEJ4M1db6wE9F4",
  "key29": "3XYRx3k1PvKp1ycazdAAh2M6HVTDcKYYKdtC2wxyPKDt3Egv8LCrKPdN4zLDvYTfv1v6kYQfPgygJV3eEvNDTkQ",
  "key30": "2pWF2zooX399r2YqiMWXTCojbtvWYb1Da1tpixSok4govVyhDDka1QbDGBrG3aY6JvA5gakWuicPHPmweLWSamfN",
  "key31": "3Wgbj5d75qpA3ZyFXUBNWFmvu8TgwU3gAJLy3PKSxd5Bv8uR2cZHMnRXpmqob6ruehcjSj3pGWnxbu8LApLAcqU4",
  "key32": "5fm2CRQjWUd7Ab3VD1G4N8omKYHh8EkYLmBhcGLt94jJ5Xh2Y447j6tNtuh8383MDtCVgYGupfZqDdYXwX9odUJJ",
  "key33": "G8QLuxvvqexQPi6TgoaSUZqm6sQAtUVyr5qp6AYDjszLBa562KXgTwRMeyYbh833sZwZSq51Smzs3npKhfuRJ8r",
  "key34": "5VsQnceWc44E1cQ2VrmJCrjLHgttKyVrtYinRDTEM2g6XoYBAn3Dfdwz5imTTJtXzBnD9uK6DgQCDJPVQymmKiJ7",
  "key35": "4fx1iJ2pKMi6x4WwmQ2U9mM88MzoZhvK93anf2bQoNnYAnCnXykEJHfD7ZGXTqc6dKZ1c33wptMZxdvHGPJCA99j",
  "key36": "27MszhjkJVRdYwYDqiXiiJxqVE3zZdJ8uG48XF68Euhv9hfMPH6Sse1uGbLU6owN9FFVd8ujsAqzWSRiMFWXc7d6",
  "key37": "5VFYnZ2LjCxyUTjT4rHcUjTmpcKCURx1Djtux9pSp9sz8bmBLT5jGLuitSQZgDabnqnuapoqMg3VUg2upnLCN3sN",
  "key38": "3nmRLAtsdNxMWYuEeiXoPGPXuXbQC8csUcYCBMhLmhPV2ptRwuiBub4i1cqXdqnZoTA1DM3LVriZSeikexdEUYZb",
  "key39": "45cVW4CM7Gt5qCdiCdCusEFyig9WK1sVGmdnLTC6hY4t9R6rVtyZeVa8vWNsAt1y1ARJk8wVS39ijsYoXYkTtaVt",
  "key40": "5u49TXpdb3JMWKQRBgP7xbnkRLstSGKEYvtVmmH8ptBcDLdYWeGSy3k33xYEP3Ltctsvz6CdVKnBSpv7WHYzLLmr",
  "key41": "pi6QMCKzRVNBWzp63f4p8GWoZwskuZnM6ZLWcLfs86DxQxR3KaTXimgx76GtfLajBANuCupEvr7tCfYxEpi6jAJ",
  "key42": "3rpVpBTXSNtAHpSSoTijDG8n3MLvjJm55XTunrADxdEjVXSNX8TgqMNeVHSVCpmcPT8cHGGQhwJjjXerAvDhv15V",
  "key43": "2GASseVfpPKtJ32xhBF5tQGvS83HrEfzc57Hr4QYAbidCpZfp9jqvag85tcPi1WmcnkYs4BPEsDEBTHvdnT5LZqZ",
  "key44": "5scLfdNQhRkPUreF8wYHMh3sQZ6UhSGCmev69AaLHeuzjmQ6262grz3EwjZzt32nmT921rSEk5hDxB6tkF2TJHmt",
  "key45": "3v2wgaz53orzYCfiAW9skYpDgVRu9UUCuwBvwkey3zofJvrW5VhYBUXUVCwcEYE8p7qxpRNoNRaErgRZ7BdEteG9",
  "key46": "5dd9h3YJFDsVCtvtNBrq51o4ukUdtAY5MnPbkmwN3A2MrQZC25eFLixR3iiteGgkfLConpJ5hSXUqHx3LWCEEfdd",
  "key47": "f3WDMqDicqpPhCjXc8eCmtUsxz3AUuRwb51eCo2UezzibjPPia87XAoaPAV8mWmMkwiPsZ8tdNNmAujNGDjJygn"
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
