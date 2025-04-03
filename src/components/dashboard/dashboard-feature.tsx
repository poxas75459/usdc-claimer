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
    "5jMNiwZtXUhoe2MfD1WK3nfcBaEBuN6KhB2hPM8cVyXSiePYpYuaE8Prjs6oKJuBRXvD2UpRzHzHFrX1ERcvfHiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rJfMeHZtF3QJjuDNEorRwUNgu8NgQA62T6tS4jaH7UnMKjAyCaGEE3LnZ6ZyNLpYGR6hRVtspfUV2xsYWKPQtPR",
  "key1": "JBY72c1MQq9G6cQ4ZsGs4PRGV4bLqMeiHfGN1TeKPahHPudyGnQUQe8CSBYU4gxUGtFR3Mei7dhh48ziZusT6Z3",
  "key2": "5wSfNwmif2hpRCRdDSgJrXhP16TW8kNjhA24Vf3L1KMsC9iVDNmXr2sr6AV71dCYUh2z6FedxGEQCWp8e56he9ij",
  "key3": "1eBnK5UT4DAqAFYiTxSXgvCxFL41zyoect8S6bYdPgMgtFb7n4jb6sfjuMGwmKYccXeKnxMb8CibXeAbcUFx9yn",
  "key4": "319kdRMcGMQKFny5v4Ns6dWXamNc59GAzvapazFEqRjGue9cb8tL7Vrapef2LYsrWLYJk6s5DRhCPx13pgDPBmox",
  "key5": "5GhkuCSyZDLc76eeVeVt1sYEk32YJfzsac8eKLHdyidgndjVCAbQzE3gwtGjZwep6ACLx3cmChXn86wDSrbc9nWT",
  "key6": "2PNBBgpbb8Vf3XH7w7AsT5q5QDyXRuPEaeEdhCgvceKNTMqQeix3hBhir61fgu177E13wAaQe6f17zppsZjWv5fA",
  "key7": "hDxc7qo66Vm3ps4USWTMP65VJtu66NjtgTF5xJbqugtCfGA7XWTJxzZ6nvGH15s6zjorVtXfFx4MxJV3EoAirAN",
  "key8": "5orYZ24ir22wGvEJwQmLmCr7h4bsxuw18ZbqCHfxb48M4VB1XmytTEp7hevRzAudpeexhsdeGs4LMGdp4S4uJzXf",
  "key9": "2FxuiCRApkKZn8PmzSucxN1emv1owVCY8211ricdBxDGee4iWHA7z6GzUUJUquwjz7M7Z8XwzDknCXDWrAEQA3tY",
  "key10": "64zZvK4WwkjbwyqWy18boBoKiixJoDQudKj3Cj1UJxWDPkZaiQAjPxiyfPXwWSfLo8yQSMRrfdpCRYvM6dzZzgsN",
  "key11": "BWV8JuVdLajBmDNB9yKMCNjXay2wLvT6kmdWr8kxmQoPD2RVfy2nGGRHWKCpgB9k7cvo1LAzqRZQDciAXpXgHts",
  "key12": "VhJah9rioQj5WpTwt4BssudcaChoDnafSGFWpafgyYCXTqgSHc4Mp8MaF5jD7EEnoZac9UeoiY44nCRHkdtEPWu",
  "key13": "2Epzc2C7pNdSQL2UbvughXpjSTf8vJbYf8CiK96p2dVScsn5ThSqSfXbSa21cu5g3zwGx3ybn8ZUpVrjH8iWTGrW",
  "key14": "4F8A9LArj8DoQHA2TEwinf4H2cWmpDqSPKD27FrCdiTcfaMMjExtLsTLo1voxKwHyQdkdT1d3otJ8A1BuBEsuVuU",
  "key15": "7vgJee5G9yypvCENECUmnQobYaFvCrTjCnM2ZeGieu6RHaiHcJ2umKJXgosEuaFJCxbjb8kvwut3habUL1U4LSX",
  "key16": "3LobeXdHefv53hBXDf8JPpwX33SAF3JRe2eextPJES5XHr9iyqixvhanWUjH6nRzHiEyVq3q4uskuvXiTiGqYt16",
  "key17": "38FzNfspcaHJUGqxkTyUNAKKrBAQPQkBJQUAVJqtRKRa5Ns6CHMvkVs9dSTxDzCH8eyrLBU4wooL3EjtFv6F7mpZ",
  "key18": "3Zn6STVmCd5Yj4qV3FHfVCwZb21WQeYDg71Qedy4vLS4hvnVYqmbZ4iCf4w1U2ESkQ48QRRb6tJDEpp42ELMhHw4",
  "key19": "gbmmEBKDfL53M7eET17NP4ySNsWRdStQQ4i3n4WuS5FQ8cBwuPvGiYtPADuHz8xQoJPcH7QmXLXgUsonBspJXeN",
  "key20": "hzmUeVPJJboxzRg1Kf6swwqRxby6TRD85zBwHkyg4S4WajGxSD4QURP97wLphxAadJ3d8S3fwwwJJPTpuNdJNx2",
  "key21": "BQ8dXHMhxnx7hzkHFZ767L2XWZwuLZTPdvZyMRnWcGiAb6UHbpR68MWJb1suamFiHYYkdGYhQb1ss2DXrSBZ58m",
  "key22": "vpLNMvf3kcFjzWN6FonrV6uuU5K6AuTKJhKPPCUdpy9PKfuUYWWtLW1h494JkHcj4jpeBWGAf5YaKM38KDsL3Fp",
  "key23": "2eAmkWA4dYcWrmeZSbmznXXkqsZRBTit5e6YmCqzV7N1Zg2ByhzijHtCdYXnh5sw8voCukcJ7VM1GCjkXdYQvgKf",
  "key24": "3hWxFYWhuAD7U5AuZXVf8L9Q9XT4GRS1QJ9EjA4yfC7CBQUr8XeiTcbBzNgCyyvHUCGnJnAkM2SGa8UCCFPVb8ui",
  "key25": "4ihYuQ97ocgKqogEC9xHPaUTZUdM9BAomHA43DkKhub92c91tdpjkKkXLCdW4HRFc5WJhr7naBc742rTZTzhNpvs",
  "key26": "63aqheSx5J8hSuVTgTe29u6aoZEtomVWmy6cX3TePVacbrN7oqkJxuzYLNo6j3S4QqWT8dRZa8onnSFgqx1KwcyB",
  "key27": "5iGkmvEfdRBUB3bohx9uw1RyksesASLq8NFfsQbs87AUKn6eWZYZ9eMyQz7uKVQ2Ng496UXaheEN1yqgACvSwwPi",
  "key28": "4qHNoa64koE3zjVbFZta3KubGmd91Q2f8mqkyazxf6y8tgScXYqeDJQM5VMkD99WnDqj94VcPGTk2xfVXGnvY2Dc",
  "key29": "3D7qxtsWdvTwgmpGdUbcdVGxoeakfPZVydMgwqsQJoWdEdBYDJKaKYgSbP3yqbmRh3yuBQEP7GYQpdXmAm3L7DM4",
  "key30": "CUe3oPJWx7HDqwLZr7kjwJDKNjE734TZoWPtzyJsAoDQaGZ1e7eEvkHCGjav5AJ3rpBuAdDujWxz61XKA8ADmrs",
  "key31": "29KzwneuC8Cvc13effZqrJmpq6o9GTy9ve3EVVV7k9spraKhFmNRNNrgw4LKde7fon7uCmrQee1xcLLvzvUoFcmb",
  "key32": "3roR1zveRbPTWzEPb8HKQdTwVamafmhswhtA6KbMRCzJ3VjpqKm2htNqSj3t7knz8vZAukjv23PZjvXBVu3BuCTv",
  "key33": "zAwHSVZMFptjfrzneECKHPpxYDpEawbdBLWen5dXg6ssa61HqYcQStuqUZ1vbg9fpX2PMu6PvbtMEeTfcEqQk3X",
  "key34": "2Pr3XH4sM2a7f3DMKBXY2y8ghN8hQPf9SSEKkXsJuVyVQGwGR1pdvqssJAkiP7KcPf7Y27rjnCgWKNJ9UFMS2jY5",
  "key35": "4arfNYbDN15CwJgd8m8BssKfxK9svmsEYJ4iBw3hGLoy5n1T3sSGJ3dgZvxtm8ZNuUTzMCAYuYLnxNhGDbhNmPQn",
  "key36": "3426aWeJhkRCEDNUBVzWbb6f4YYe61QQA58jpEuYuez3oC5NrNmdN746ShDbWCAcagrR7r9TZafgb2sbXU2hyvkz",
  "key37": "3ySh487yzW1rXsmeou5GvEa2NJBf7g1UU9ypxQhHmn3eT5Sxi6F9awZNebWD1oXMqXACeDjGLnHgkhEKVJgvyb2Z",
  "key38": "2nh4DsPAWjCwo7MC4d6rvYr1oLALSjqW69xSJtcMNwrB5XqJwDjmzvpibQJFJuRzMwwBC6cMDNFnZLHpG6cdejS8",
  "key39": "3PD5ejxLPakBwNwwHjT75S6Gv6XqhiQtueATj6oxhePKvPyTxC4HuMUuRmMWzpeU5qHodvYoDCznmi94BVcwpaXE",
  "key40": "5Ki28qz3Hysxu7yGQu7PZMJ8rR66UvMAxhCbACwahybwGJUAUsK5VXJrFrqTHguPzwgwJ4k8CnwXdoMegx1JyWyy",
  "key41": "5DxPA8HuQJAkdqfHnnnKixGVP93iegmfGUGm1oSgg5ZbZANQLBDDmwDxHch9ASw83RHHQ31gULAw5ZvELDhBfhr",
  "key42": "2CgAEdjVB3aKyRnvu3WgJwQ8VNew8v6sKscTMU1eZJHTphFiqxXQ1g7bWxLvUtGbQc8yBSzs82gHmcxUHVG4suDk",
  "key43": "4voRqxFYce9kdsdxgbG4kGHxYdJkVJkTnHrV5F8dpiVzfgvG5gJNisaUSzyJirvfnmBtoYLemMqPjCHvnsiktKFJ",
  "key44": "5w6WMqf9tYKNgvGsP5hx27uXpJHrSkQXTp6efCxrW7SBqJpT1Hw2tepcQKPFBFoaG7SpYAB5tTaf9kzjwEKMc9Ko",
  "key45": "52ptKAUpWre6NTwD9XS37bqmh2iY5gbKVjutYFbAL69cvjwbHuXX6XpkKyYxdzuGpM6fL6BnyznQP4sGyoVwLLbp"
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
