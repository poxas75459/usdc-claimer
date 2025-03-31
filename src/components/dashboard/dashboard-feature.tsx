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
    "2LATALKL28K2gzpDD27rRh6bxRdfAd7QEMJKpK4HyEd351CuqSvs14ZNhwACjSiEsn1h1WUroymsejNCkpqq9JGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pr9KwYwjHDLsMn9wkZmjp2h5dv3fchgLVdrJFUgRnNRVdme6LFHoahH2Zos7NTimndAgrYE1p638jSTFB9KGzyc",
  "key1": "5ZLnABPjAy8HRbSnKDTwFysbXDDjkG9FE8p96LU9wecq4kwNq4MqC91yBN2mtkEmiMJvVftM1s1fTJwhWqjkb4sQ",
  "key2": "2ZpwCkAXxheAVdTtgRuvpqTnyrj133iX8hJU9kfnQDPZJqj6BSvoH6h1UFmEuk5n2uzky1NZrNhFaY3xXXc9khf9",
  "key3": "4RivLUesDuhJbmka1uLKyrZYvsDHxrAxMuWc8gTG6QYQ5F3TmD8L475xdotBjac51j2bah9hcAZpbYwLMmj6mii1",
  "key4": "Xww2CvSix6tmBcAyeKHjjEnUyADkbE1wPmo9AEnXB7Go8XTioEBwF1V9s7etuPaKD64rXPsBqgmGy6pMUnDCsys",
  "key5": "5inem7Md61ueghPs8ctZR2Y1iZUmxqKBiXdavNRKnT4Ednh4BaXiTkdaGxvoAmfAr6ZWrSnhmRYyo6C6wruRXwbL",
  "key6": "uzcqZLfehLgAYcptQFnkaq5aHvj9Q66oFzfV8FJXZRDffzTzokYtZoLi6YRsjPDp5zi9AW9gYixCw5rPeJDdAj8",
  "key7": "2sdCWfhecVeGNyGbd9NuiDmWmiQtb1kADkGMtv67V433Z1QmRp6ouwd3fRMXoH8QXWp6UvbnGDETBCMcw54vU2WM",
  "key8": "Q5ffQweunCAFfdvzdeFDnyzDaJqnKYansaJzQXcuGt3WuJ8N4WMLFjEGz3sZ7Cn7GicgHVymFmNyp6j2Knzfedt",
  "key9": "3C4LBrwpeXtrA5nvVxwRU6a4q8XxjaGJZDqj4cy4gqqLbzU3SPw6T4DF5g4m1zjktuFQKmWWPVaNWKZtFS93Z9jQ",
  "key10": "3A9yQFtceyptjiKtnyk5GgL6PSuST7yu4DqqfGR85feCgTuT7nqZYVykYzcqaMqh857SjrXyDd8CMhuywoffrQUu",
  "key11": "HpzAx7r8QTMPG1adgCDDmizYbE67vACMcHNmZ3ExTVfHeSHgBJo2NdqED4rLHWqowhRu474QASmuNcwh4SJMCAH",
  "key12": "5xcu2zpAnQ6ikiJ3JtgtCZ3vCUzGdsibL1zQ3XvKaF2xxca63xKAk5WSPFoB6bkbGMxDbeWYWK2VkpiQnxCbzE5z",
  "key13": "3vCVrc3GsDfPMF3o1afS9WifQi7vkecdU2WgvV5p1SKECyFu4pQDTMzgUCXdhkSJMPnojc6KVd5Ssdps8LEjuTcG",
  "key14": "352DyXkXeakAheEJtGR2jpsGVbqZ7RA7LpJ6vGaLrzBLhMM9dmznfacFf6VvrcnP66Cn1EcWKPbuvTZsh56r9osu",
  "key15": "Ztn71XkaCJB2ww9M7uLG3qNMqwCrwwasrrmGPSiGArZp5UoRsWutycr6msNWPzURzcPYJ59bPirDnAij5tKsvmp",
  "key16": "2UqQypctbznjwJdf8BTAUitU3gQqwgpbVrF6MBmSJFmpxxWadgyQjYoPyr4wrac94mp6MFrpMkMAo11Co7tLPUPh",
  "key17": "38xZPgy65yTs4wnK5qyJTPZt5Pz82CnhuYv7gDHPveKWWsNccchnPRAz7GhvcNV5d25LUxxVDmfnn34dYh3ZAY3U",
  "key18": "1WBhitZWsZacWmq6cHyh1ziUtzSY9m6janzGvrGwG8Y3CVHvKsU1KPUYLTRsbUthpu46Jiz3pDfejfyr59fMuF",
  "key19": "2A9PW5H9D1YXdHoAW44Nufx4d6MtJmf3SMbhd5fAW4VUdhrLGzF4iznPT5vsxsNUozDrSnfYnsNfmu3hUgmbvHmV",
  "key20": "oimir7WC3nyEwu42YP5svfFNipyCWS63itbrWk6XV8QFgbAk2rtAMFwn42Usp3tNcqx4F1iksGZaZsNRjxtm1vK",
  "key21": "2qe1gahEihgzNdZ2ym6EeLznUnDNjFZyAVRQ24gVXhdETok3z3NSnnv6p2TD9eLjKF7tcA7kZGnZ49J6uTxcK5st",
  "key22": "5yh2PLeYkKJNujpHcL2Fp6hg8T6qqypTjVXx8JD3jPuyGCiiFZravuLpTGDSF1fdfQyyJSCbySEGSEU4nSfPHQNo",
  "key23": "4Qn8HgvvtZk62Vprx3wzjdf51b5hQt5uzM69eDKo5WXPUM3afzUk7NQmTs7UbWeNTT6FhPjLR5yXCLpgTcA85xV",
  "key24": "4P4fcgs2eGRH8UcLx9SjgyDXrjH813Z2GhW2QB6X2qyXJyjujqvEWrUFenT67WMYQwt2C5GftLhg5JT1EjvNk7NR",
  "key25": "5LgRUq4pBusUUNh5buE5hHf446vwhAVWiFz6vYdcqjSUQtcqC59R6VbEdgLHzBCYEp1VsfKM3bj1mBBLSNYd2ZpU",
  "key26": "3GZQiUtvMqA8BtkNUL6KYbErcuD3YPfQaKdXBAgfwwEDz7ZQ9nh7TBSHG2JiihMThvJJmNY1h2kb1UHaWZXwCyg2",
  "key27": "3E2cJMrqh2uKPX6pXx7VnUx2b39Qdn3BRE7mjHsCy9p7Y9XQuYjWTVF7q6ktdE1UZyWEERA492D5TqMsgAEGGSya",
  "key28": "2fbHGCd8qAf6eSqghpptmT6RiJEwoFUaznXvcv1VRPhGAS2xioGTvVsvyNa7nG2H2VFu9Y6hsqRW9Fcb1xzrVHg3",
  "key29": "4FArc9fXLN7fggHg9FPSM86fAzEHcKpDAkHKJeEQg2pvYEKaBJBZsYVjYB46Sy8c4woqLZ96AJdtGa6WpVuv44x",
  "key30": "3knsheiemoSscmDdyrtQpyNdtFQR2G1UCHBU3yDgAyLJLFeDMRWhe6CXr1adJq4zZMaKK6YMASwmwZxmP6tdTfLH",
  "key31": "2yXav6vz1vFP12agkinYMpbDzY4hEuBjyEjdcSanHtP5AC5wYRroWtiTW19cwozwPKi1Wc1CLHXDcPqHasa8WRcA",
  "key32": "3Nx4oZQywsNRGk9aHHMRa1SwsiG5nXmBRHgwZVfiABQ33SsauxKoJdKJa5ZB6U8xatvzayXrUst4Y1S94L4dNCoe",
  "key33": "3U9RV1PyEFQuQb7bcYUgyGzfAwN8rP5qEGsSd8JnKr3T9RWR2ni8sj22FUZmVxZJkn31bbiH2qUfFDr7w7ug6ULA",
  "key34": "LB9XGDc5zPUknftAeLkqTzkYb2kAXmJDybC2sd8AKixYta1KJ9XReoghzse5fnU2hTPbBQxqh4fpmhLSKyUZqJH",
  "key35": "5sqNdFg75QzD6ejXaskcYJykGi17tcx6ECqXQGvFcC7b4NTAT9CshGkJTm7xwaJN2KncDJiVVhUaxCibj5AG84Rs",
  "key36": "eTpzWPzsjtAcJu1VfUrBn5t8zoQy2C1HikuLKZ5isiC6TxyB2TTji5dGM8Jt9RXxG2jHYVGCBdP3usnff4gLjoM",
  "key37": "5kaRa9Xtp6c67btrJRRxc45W45Q6w1LZA8yd89EcSifqf77V6HmASKwzVKxrYMHfcqwcBtQgPtvqK3FHpZsCmhXq",
  "key38": "3z732o6uiUm9vLTy3rDsgW86es3HqUskh1eejidVbo8dT3RqKoNWZajZN9vvXfRSAmAMrrnfL9S3Hu979F1ktFTr",
  "key39": "rmKnpteZLtcW8z9Ybe1m3N3rC485wm3GfSt8NLU1DK4h7C6aEtHDfUPE5mAHEiVVEk1q6WxX3owkEqyHUaov8eS",
  "key40": "P1VaBQbTTRxVTKA5KFkFZQMyVYhUahxXjPqdwyKjvLtBmQcmsZxf7FosZDWBqxyr2X5KaRdtkr6cjptiWttYtvZ",
  "key41": "63ERg2A5zMP5RfJxZZB8vXMxoMnVCEjPM4RBTZiU1ZUXqVrNMQjg5SM9KEC51Uy6fku4HPkXRnqvbGmg15gbH6CG",
  "key42": "2Te76n5oRrNwShdKwtc9mRyi1CBm9BfBJk91JY5hanEx356hHToykTCoRityMr8k7QWJumcvQnUPMakAVhBTokTF",
  "key43": "4RhStUZHF7yaQWtSF2AkgP816dRBH9zwcL1nUdPZ5DiFDmFzCicSqAYyTqzQQ8EcU67DNymCMRWSYwaJBZBKhLMV",
  "key44": "5HKkQWAraunqHwVXJCeWgeK4HhpUSHChg1jgjCMxyWr2aLLKiky2FF8A9TF3yP268f9FtV6GVTvD5q6EjqrcyiLz",
  "key45": "3cMiYHSwDqKRhZWfcYr95BsACHgogUJio1E1tRY2JedxrHfhtfMUKhW7FvoZNMibmpXNPruJjNeeT3ner2EupQEV"
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
