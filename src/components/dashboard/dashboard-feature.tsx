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
    "5mejsM3kYGYxHRr3Lctz8EGRNV5PbVSGzTDXG1E1RwkfCjat6FYjVcLoHkEDinWFmvtygyYuVNxV5sPRY8N4ac1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wy2QnaTcLgKCUsTQ2ByfvGxJ4Moe1i3Hyqwtea3Z5iqE936V34Kc3WnRPoJsQYXZamrTzvdDHZs6xX4XuHuT5v1",
  "key1": "5T2UVfdmkEr5yPjhSSFBhgNTxHM5aF8icuU5oRVcUAxgt7oKEX5YDAKAj8nrZptcPzhNsgEMiJtPVtMBXccS8eF3",
  "key2": "3Q2VkyiXzygLDkELAvt58oTzXnXeqctcqK1KQr5sNRHvqgKc8BjzjmCRHQqsdB7cHz6eJaCcFynxAPJKdkLfSzGn",
  "key3": "2GijYR91t9xctiDMyhDrfvmb1eKfwGykah7PYMZmBY3EoN2enGGsK3yP9Q7iSZMeJ6VPD9c9YaQjNVRxuoobFysk",
  "key4": "668Ekc4MAWRBJPmmAnWJKZhXqBg5JMNMwwWyyEVGKHDZnbNZGgA4X8pWetXCoJKJdQdYvazKKF4L9LLyVmcwGTX4",
  "key5": "3TqeZjBmGgACQgP3nMmNGZxjEtPE5Uq1g6bAtieTZJov8Mo9mrMZRKSMEbavL6yXamAfuuSR2XCKGarc13y4Usqx",
  "key6": "PR7ass7KtM1218yi6fEfJ2bGpDCrPEo4Egdi4bVinCpfz5wNcmpZf5iJukW9NCasNETBgKpRXqcAwpeJiW8khSt",
  "key7": "5MawJR5nsM6FpbMZKUZBJAG5ysDzbZzyNg4eFAH2adioBnG6d6iHWxYwQi3m45AeHxYG7GRFa8ms2m3Rg4dEWKRU",
  "key8": "3pmdAPdBYj3cVTcmjmAXUTPNVXRNzNZ7NqndQrHMh1EEeVXzhMMtcHjmRdGYCDqPP1Mr5ra8arv2EDQUg8LbkA9d",
  "key9": "23U9fUuCYk6zKVJf1A6pUCxbugKiozvEBJT3VEHzJtH6Lkazd1ngp8aYR9KxGHzVEvqf8bSAzvdoLDKKQzGxyNv9",
  "key10": "5g8EbsU39gcmPri2sSpZ1Wt1uxCpAcafxjFC5VRhSZ9ksHfmiJSzyohQ3AFC6T3BLWzFFVXHma36fmX6gyNttoa4",
  "key11": "5YSYwPkYi7ktehr7znGQEwr444onPnYaNTa7Yvkz7CPCx3a76W6M3doDRNVXrmSqRMDb1ujq6mgMuGKWnYFyeWeB",
  "key12": "4jTVgKsKKSEy5xynHGZesTBNmvR3A5K5dvfExPaUtS33TDKrMoSp7FNg8eDZRaWMvyub3sXEsK5LYBe1WDh9iFmN",
  "key13": "4KtGYW3DSSNMs1w7PG26ymuSmbfEyur2c1vVGAN2UVaPMSLLUwZQYWu5QRPBiSQ4Kt1z8mjVjWxZfmdw112WPDej",
  "key14": "3uB8nf39uHh6jWsUZHHb4wvLUsLhbkjb6HzZajboPb5yhpsnmtzB2dnWaM9MS18e7KbBnz7C38QioNFvHBn6npwP",
  "key15": "3ZsjQcUb8G6GP7nezv4ATwKgRyxjiiNswoc9ny42sZdHznSucqMNWyJQjyW8fvprxtRHQfH65yLub4uaqhVPFpSy",
  "key16": "JsamZ5kEyVsKuitwfyNgK46z3TBwUuG6y96dsp3fczgadTXEeg5jynsxCM9Yy2hbdDrvVYd8izY17SLQ1Wqf6RB",
  "key17": "4HrXYpxCbRB1TkJAV9hRaDmm37VDnxJtHFsM83J7q28TyU5zd7N9tWcMqZhcJYuQS5PGmHJaAvUBgaLRwHWwQpxf",
  "key18": "3pRiyHENYMVrVrcew81zm3EmCG9UWxBUn5AKiHVLsLfCR9L28noWZKp98qzEQgYSTRVRB9RmuYy6wQpbMibGfc3p",
  "key19": "38kTk99fo4ppczZtqW73YhqWHitdR5ChaSkidCG7sviEkAuqocebiaSyWtcVUJZYWULrviRHHwuCWx9bWUH1STwL",
  "key20": "iyNto7R9wNHhV8x41X5aGUs9oNSpKaBB6928KSSed7qfSyAvzm7v2ikZJ6cPiU5TaQAv6cvUhEgWeXneqK27NYf",
  "key21": "5ts4My4JFBLfnRHABZDwUn4FPodUjpp7cZMV3zyisdNwtkedr5qTh7ukr91yAw12hxQWLSp2SQcCDYb7UXLkCBWr",
  "key22": "5kMUwP6nfpV6NpTTtGVr6hADKUMN8vnvtATsNgk28Zcr4J9PkwVRe8CmcrKzh449UfAX7kcWbL7aofiozhcW2oTU",
  "key23": "5XaNHKypJZwFDnPAXLpLYmwspeydSUoKt5uZe9VFhKCZqwkg6f6HZkBub6kDe45Z1W7NNi4cPFFTGnCiix3KEDW5",
  "key24": "48GaEd1inHiwpSCbJq3HkS2UP2b13xBKqiYRUTWWWwKMZbRNKhCVdvzyvvngNFzrWe2VypKV9Cfpuvt5mo7L4Wmp",
  "key25": "5wx9C4mz1afm7zFXZFLTZDJxKxegSrBvepHbkuk8orv8QyjJb1nA39oLqCDqV97wUE6oSK7fS8XmQWDb8epUpVVn",
  "key26": "4wi3kn5EBPDbzf5g7LzuaqAPro7JtG9NoiMY2X8xaJeuiBbFsDudojGZLEC2PyAm8x5R9QTghggRyLuq5DAiD4bv",
  "key27": "4XZTxUtqf7S6XjUmp5DmHGnFLxzGn1FjdGq43n6X9nkQYeGrW8c62X7F2GAaT9HDjLs7BNwWUxGPzC2ygkcNLDrs",
  "key28": "3eCFByTmXT95U2FnE63HfYz5KaFxQLBL8VsSM1X3ZQ19MDszBXPibyTnTZNHZu76bMEewUs24ua2AQ6cktAkTsaL",
  "key29": "3yHtdrnJMwmN6cAzkseNn88pvZUjLW4VMJyDmY2xdmyDZNB4FcAhijFF4gZ38yQC8rQZZibir2QGG1pfgurFUuLF",
  "key30": "2zgeN9aR7rmax95Ke3M28FjUVCktBK3bKz9aNMYUsrBGej4vV2qDXSMDQwGVB9xEvX5EDibpzExqcy3Ryn2Lejod",
  "key31": "3U8G59ky9yL2LCwAMGEyXeP8F4f1N9b5k8o9ddHhJhDSJtJjzMzHDjFUhmkMX7n9uqx3zLkJAjTkP1MftgSLANXL",
  "key32": "32GCLMuSkbdupnr9rPLpeoSCes6YMTrEJshFg7rVdLjmyS7oYASkGVe6gbVkzWSLkjrHUFngMcXFtjaHNVywVwmL",
  "key33": "3ksmhqWq9Wpw1XYZCcutkDrexwGaNdd4BMRWWb3dB8F9Eaw522wr5CCcnn7PjCsWJbJ4Uax72BYPgz6dg4S4U2zJ",
  "key34": "37y3gESkYRuHLb3ARq47Jpxvd1MnfRfeKpwP3vUqQTC49tYN7wshnn5NNADwQuoyJFVzXxMykWAcxiK4FtTzyaov",
  "key35": "gP1y3XiN3QE796QbzwUzDLtYJjCRyVk6VAVTsyNFDDhtkk5zP2G7dw3GDfrniBX7qaAnmgDKTuoJ2sLpD4mgqmW",
  "key36": "4454B9UuttSPti3w8LPsUdkq6r6QneyjuxCKg6ikE4S1JsmkzfYvCbPX6Vu4GRCafzKfzPh9XXbhMzbhdk8UoBWY",
  "key37": "Ut7c5hiEBu1pzhkRDQZ9PCsX5YkiXirVBYxwnykXXKabgbg55icSwgDzwkWhH5RpmBVz9DQiGoaVstb2boEn42R",
  "key38": "51269qA4NuJnV5JEYNp19Asrucn4xyhYx7LVnrdCcity6B47r9aGDy3josTBjXTgf5biQMGR1HAaUL2bVtS9LXQM",
  "key39": "33n9iBbfAuCTEUyCjg2CZ9uEJPjtnmG1ZxDruvDWFmZdruRJs8S28BRtcEkYZsPfw6qxDWNYnikc47dRikbdN6f4",
  "key40": "MZ4wUcGrmdnVdJUYyin5tpNEGv455N3fZ5eehGw9iGbhcuwmxVjYyDWNcgNE7Xdr56W76jYFy9eNwMcymw4iZ6S",
  "key41": "3PzryCDJHuatxBMJsLQETS9hYGAXCnoCWJYzisSZqihbNbbzhD4uhej1JCPHioLm6saNCjScKBV5hthSJdBtn1JM",
  "key42": "2fJVnbvqotNeKmEMgubpvsud8U7rkH3f1Vdx2ecMfJz4mBDaC1GhwSegD21F7qdFfwieKK27Z5PGMdv6UGHR7tGo",
  "key43": "2TT3eusuBo6jyzw69EmyWo5wypJmpRE6GTa6zxky1nDLvJfDtASSKM4av1fsMWFFmwywpWndibn1ygVToYS8Kk8y",
  "key44": "5PSWB1BDHfcWYH8ovqcmrvJC4KJjc2RZYH19ZrMF7MV7wZLnWGehwouoHhhvNt1rT3YsdCVcqNwxeniKpdL4nPVw",
  "key45": "4rz8gbz6Xvde6k1mh71u3LiMvKfvoZuzZkRnXx2T4fZT12fSZt7a3gJ94Q4Vq9LKfgxVCKaj6T6mE2VuiYNN29p2",
  "key46": "21ZjhHn5GELYujKkuhpuoi4VG8zYmdAVBh5osmfCqiFmQp6cnR9h1DqbxtrKHGGVoYnfcz7GScPv7ySGLjCsn6Wb",
  "key47": "2qYeWr953p7VDeTKi2U84sqGmvDHiDxCPwZfvbXVhyeEsYwWRWEnt6btyf9kD9S1mim8NsdMKt2pLtmgr554duuK",
  "key48": "2oGEq44AJnCeE1vwu1LjFJgLCz3ytv7ZhCsguteGnkC7A2mQ3Zox5Xj6gVmWDBqCGoRCLT49a8LwLStjkkiTxtzk"
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
