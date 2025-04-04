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
    "2KT8nwTjasXRQ8eWVMGAqPBP2myqsUHSMcb51GU32dZfELJq4UkErY56NoJqKEmP7GZ28746bdDgE4w9bYWgyTMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V7X9ZWhSaFapH6RUWesee3fTUPk8i5Mqv4KN2sPEXEurofQQuceynj4gBYEmzctmRE9XeCz6Tg4Xpw28fw6s172",
  "key1": "s73fTbaUz6axQwsHNpiySUQyFo4Fjnwv1MRBws7614X5L1vTmN4voCiv2UbaeAsowB1dS8MXpHza5XVqepb91AP",
  "key2": "Cu3vSGcPHk93iPuMqpLdy28VdEpNkYgEfpYV1BXnnEY2PxaSSpa6pSxpumZgeNiJ34dvQ1HHoMTeASYR4PT7oFc",
  "key3": "RzZCigMMm8SXWuc1vXz5cpB7bJE6gQrAN722ugTULeyDkN49qTpsT8fLyDrmYKuNZUkvx9HtBvtewcRunG5xRZc",
  "key4": "3Mfamx3AdAioivBRt1v4gB3NSLQdktTpLoNFFqqNFVWhtGyiXeDU58uvmA7bq9dKsLwhS9ZvmrZVnqMyEtHiVrUa",
  "key5": "33fgb2yzn7CfRjWTFjNbtH55iYvcrevXnGa8Ht7J7twMbKrtMXQTeeKUHc44nSzPZ1viqwbronbKr9ogZfszPXK9",
  "key6": "3rLhSxKjvM6NeMnL5X71arKUqNsPN1zjm6UL1vXunYYDuEs99JAmzF7PrwaSco8wynGcwyeTnvotHybFvzTiY3A2",
  "key7": "35v3tEUkt4vrFMz4LD5u94ndQQnzcCQvuJkFgnr3WHmCnXwMf6ZUwuu8jokzp57wscn8nYy4fhiF6m8PAtRdy5d6",
  "key8": "42Uqe9ndksp8FZ4pJbzXDuuyLAXUeWRJmPvbRrr8qcsFy8EZPuXq1iUH8c17VSGetEtQPbtRK5PqqWj28ufGWWWM",
  "key9": "3MWkWzaFY7PHsqwfghpHLKQexWRwrBofoVGw5fenbNXFtcipF6YwzojMbN3J7SDq8cLKv8bv3v6Qi7MqbXPeSXK2",
  "key10": "cnfA4GdoEm28mBYppiACTeuakGNuwuM6kx7bdPPnKNmsNMbZUMqFm6uRjfoF4mf6pP2cMuQrgapmvyZSEzS4kFg",
  "key11": "3mmjYxbg8iYBmfBDoL8zcXnRH9VU22E1mZXJXikS61WBdY45LuLmX46icTU9hdN4nCxiWuifLip2975ktQJKgwi4",
  "key12": "An6rk8rMyMnzHCovM7ubDbmHWYBHhXH5gX1kwaTjtubQtBqfkKeEyifPaby71nxEZQt3BXRhbvzuPG2QXXRN6Xj",
  "key13": "2hm9mf5Zjwjh7KgRF3JT1fcQudrPnKTkQtmk8yL3wsQaZrStTEZHzmBjD44qsieaEqBAB12vU95jKUAkMjxpvVHM",
  "key14": "4puuUwRmxXihAt3Akr1x9CyB399ztS7FM7ykfxrf7qCVu9MzjNPLoU8QbWVkNYZzW1AmhPkpHpSJc1FNGhsNDnbL",
  "key15": "4JuAPXT9Lnf1bygiHAMR7XzwBThiJcdHMp5RGAPwBEQ774SLBnAPCvZqArnqV3zo3p3S3Bx71znfn3j1xan9yftC",
  "key16": "2RRFmU99b1c2uz3mq8pQerbKEnWEBAosSqYH4MV8NSjFgDH9P2mJGWGysi1RYcDrHBJw6t2wGjvvrtTRBKPi9EQ4",
  "key17": "48KeqKDhBTjB4vNZ6TNeiDrWbfmfNW7SJD3EZ6iygK3LbmudWTfoBWTQZznjqpsXcbgCiQNVC79ZkJJsvapgVS2A",
  "key18": "5LoSXdRsh9H6TdbbTrhJX8sCTJQmpGAtjt7eFDUECybQs2dTyxceojYX9449L7R81G9ashfHRWNxHPL9pU3hKTuM",
  "key19": "5Uw6y9ZMzwtEnx8mV7KgADiYsAJ1sWMafK5mnJ9DPL17U9YZKmf9JTGZXu3RUoVB5zKXjLYesGqBjMZWHFWCzNdr",
  "key20": "5fxWCBLu9t7VMBM8XkFboRoN19wHvsJ91yQZxhmhjsXJ6apJvibKdS7UMLhuRyYb8TQ3XJiHiVbx1TSijYHi1N9i",
  "key21": "aKbfD5TP3rsWKuifGDR88Sn5YJCW9nejYsF8VkULmwW6wNw2MwxQYBov5hAMhoRzn9bykpmyfRZo7zWTTX8RZ8u",
  "key22": "3fGpXbSVeRvbGWFLhepK4NdT21g9v78GC6q6uibBPdM2tSC4pjrFEedPrrHpsZiRnBdaiDeDS2WbEdxY9gpmpLMB",
  "key23": "41wKAvKDx1PPNR6xxTMcUkUqmJPQtDXvzE2TbUmCgYX4BE5yXwYUfjh18eNhA5jFf2zufbxpHDnhW8b8iRtpqL7y",
  "key24": "2yFuxGVCgQkSfppnkyBKJSQEAS3kYNDnp4baAaM84LLVpFFBC7eAs62vLfQhtNameHdohjfJji23WMX73w8EnRNx",
  "key25": "2KEpAhN7hveRQmhwjpTQtVmBXqgqAs7hugFjTh9Up28dRrowkp5Y4Vt6dVCvgLFvUVwQNz6pnwoxk7nQBb8cXZPs",
  "key26": "2pz6DoQXehqd3UNoBxGnGpUSZAocdQ6ggXrRaXFtuy1FVVVBPwuAT8h9DyCvEnLoBpNkur9FaA8cWmsA5nbibV52",
  "key27": "31dPSEV72rwBu4CizvgRwda3YhUgAuxJHqYr9BhueaoVyQWieTegWxdPaaFNPDnDLt3XQ8hrnHRioHQRpTFDXNfN",
  "key28": "4PZWPeZjfsV3qwW33wAsLeWVykZke5h6U8pJgVbYzq8oF559BSytURXprT7ttqpENC93iFcJjS4SDmA6ozaJmDpa",
  "key29": "3MDeTRdicyEcCW35jvD6EMmLMDk659uhWw3N3ykcYMpA9tt89Bka2eaTbrCCRZ3vwKvzuTFektJ5Z61zQNMeSZBn",
  "key30": "2DzhHF9UJCH3kVqGmApqRqsLc7GioxWQWCbzLNcfoqa8U4YfBf2NtoXxaYkBtZLM9SrfPR1oMoKkaSQijDMhB8SP",
  "key31": "XwukGFMMDegz6Q9EA89nvsLmxhxXM6aouhXdmwnTfq94724YHVYqGpi9CgSjeXDZGuLTA7UoWv4ofvrsv3S2xUj",
  "key32": "3BprteuAFPHpJGP3yg93JYk4KrbheugpKqfptBctqshcH5gFgWoCcSbpB5mhkL9DXWCvWGuy6pUxFjBwsWd5kfNC",
  "key33": "UNooRuY9cHWRfzUiS4qk4hmwwqpviimswMUVJaZ7kXLPK4oiQT5acodt9oBBVQMjSBQDAqWWinxHfnGKGJv8DpE",
  "key34": "5ixMMGvStQ7dubz6xzbpZS7sSmkHuufPJcQLbztBEZCY1jdwWPcENpm2o6uK6PqqqmxtZo8JaG28MwgRjk5vhC8G",
  "key35": "3anAUppABPRvWvrZaZGcZRHrigucne8y6n21Wc5BpC1goM6wKGS9apZoQc4sALLTA9jB9Ztwqx6ZeLsEDZj9yE78",
  "key36": "3RZ1Zm1sTTv5ggPGj4R264M8CPtBGik4uoEaaxkLWnCn2UyMsgTQMqoafBWFJxkNiz9nsTo8ueMzbJxiwNPibm51",
  "key37": "5WoNS5U5EBiuJ9ZictqtNiBDZE9FM2Vfzj2nKGKZuNEGhWgmkhi3FNs79Poy4dHYSzweKQ1vuUHm1SjGoYr7LSCH",
  "key38": "FwncfpUEMYWBRMNj2fpf3mMWJw5VYzCX43MvtTyoNuBMfiSQSbcxazet5Au75aZVGyEWpLX67PSGcjGR8DB2dCf",
  "key39": "3zZZhq1t1SeJ1WWbg5NXpa79L6jc2j5m9JdU7umcbDNH8aGnY8xdGZw9JDQQmPunJJjCiwwwv69g71dMLSeFSmmP",
  "key40": "3iMYLHfgw4SNMLwZyyfawxpj4AtDhTFZx8GhzowztYdBLJBbfhkqa8497Z6qehj1BdgLYT3a4Xq2JSQHdJdauDaL",
  "key41": "5bhR8GZpCuA1dFi2ZTHH3JJVDUvhnFEiYBE2NaJbHGVzadefAeWM8FHKCNHg5hmPkS2wJmAvkYeX9ybbZUzfNVhy",
  "key42": "inwjXWUVM2p617crs6h6q9867kWRZWoYEKYhhGQ5uh76AwcPJm2CnTJWDJCZQ24zw2xjfQvPcFbowFk8hrRuPF2",
  "key43": "4yGBHCnsEmF2BVek6hoh26BTjm5ZZVh1tdV57oeB5kHapC8TB6N4ER67HWyKzpY94PwsPDcNMBKiFoAdeFhhxKzA",
  "key44": "5e6mUU2DfwiXPuvPuaDYrhpb8a2kk8RFzA4uHPSUwVZsxAtKEyTWQikayxZix8PC1aEFNDiLnm45jvPCA1UJmKEw",
  "key45": "4ThKDa2wyeCS5jaTSXzar9fPjCKWQCT9qjca5zMYnR1At4ph1nALcFXoXz6gr9WRjRHiuYTC7QqTJ7rcYmrn2Mik",
  "key46": "3mDxcuTnLZZWVQzkGabNJJwHNPr2Cbbh5vHpe8qx1YBXvjFnUyLVJXi3bjZTUf6g5uUsJa8rDhpukQ4c7DbcDoag"
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
