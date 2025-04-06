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
    "5k4XMpju5qWqQivxFsaPabqEaLeDyXToaPq7EcRMm5VMUf2tSyvCJd97cewYqKdYkQscnxAetJBG4mFqY1Dt15Qb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NS2SieqenjzpF3pMMMcPCn7KQ85urrLDsqzEftXnTzz2J79iGu1idMGLWxsce1rDrcQ2gr8ASAboLAnm9bJ251a",
  "key1": "3aTbaTNe6P4roeec7L1LJS32QVSdHyhEkucFTPqU3jtwuv8LPAQe649Xk58yE93QqUtJ3SUJiRZSHw6yrWDGHdyk",
  "key2": "4XGf4N7JFUJZt4UrZEf9BRxcW2yjJQWsXteULHjcbHWBAHc2NBPAVrJmbqEgKwgAi3o5T34HY7wThUn6oM86gbG",
  "key3": "4PmBaaKDXhwY9Z3eeYcvKVxVzeiweaHJpKuC2nNrMZZK8yWYYrppUnpBbaFFhVcd1MeDT2W88PnM6P1iYeWz4z1R",
  "key4": "2xjMVrjPXTYGwod1ze4DwAkLGFeoRqfikD8ymF3pow9oSdrPQRnteyusc19XnMeWYkghubn2nuJKfsufjKevDf1s",
  "key5": "5CCBf9yA3oyhMB5CiZdDWMSxHAzeQsdMW9kvZAaNbsVakp26yRowpTDXLUaVM2JCQXMLV11rLdx7HSUhGV9NhY5B",
  "key6": "3Rs3bW1Bi8QdNdvhMDaaZq6s8S7oVUFSzDMFQDPHByEwJe4VQr3U9RLnxExyunoG9gvDfNyMLxnTKp3eC1NXX2tZ",
  "key7": "52sygcSe7T1vnfSrbx9M869GXPsXew6xMxuTzd4yv4rAvyjvSG3QCHEdksoGipZ87fJ8VBt9pPX5ToH3SN7V3b9o",
  "key8": "2A6tEN7kwpNDmpNzGHUBejEKkqcTUy1wpnvsrnHojqstdxmv34rC4rSY8tJ9oH7Kdp2vXNEeWUyydnuwC33TJojo",
  "key9": "4iXHZQSiFzwMa7Rnbz3hyoroVBoUNHMEgyyBUNttjQiV2UM9W2LVW3PUJ1MrP5ymMhH5aARtVseftxVRHWnTGfUX",
  "key10": "4Kbx2yX5hdNNvxoft98dQKXYvu4BEeRDq9qH4yVQicc84o9CHGNCi5Rwf4qk7uuQUR15oS14w4xrCWwsRXJmcn1M",
  "key11": "2VKZX3ELTadwYyTfnxQgan1jupf7mQwgyMLxvYVx9puomzSDgzhn5eDT5yZKrA6oNkpDa5UFeVFHKHgQCoDxHd6R",
  "key12": "5f92QfC71sCxRM93pRZ3GKTnnpNoH1C6dupBN9kJWn99L7DkD5hx9BZ2gJF5dr6i2EedqzvVQyHN9s3p3mPfhQWy",
  "key13": "65vpox5EXQN5m7SGKYiZSSmro3CeyPx2nh4ZL9YQmLd6MBZtK52T68XpwMgUWmTCBhx5tasQDDy4Z8kgJNCPcGoo",
  "key14": "2KGCssZMFGXBFYbpJK8ReQ5sXSi4byGqqE5sZABgBZqQvqKjybFpc5KxpHeXzTeSsZ8ocErVUCVJAEr4DfRbJG5g",
  "key15": "4YoiXrLn1Kge7r2sHoTyyC2a4fXKaTKTRRa1jgCTtFoW1LcmAjpywJHUT8xweydchyjhcC5EJXQvnkGR1GRpYbaT",
  "key16": "3evKoKMLtpaHJv4MSR31zvvzqiCDyy6tuXxAMyJuUCJRongaDPjamvhHbME52ysZHPb2uaDzRmXHWcpq6D2zrAnk",
  "key17": "ZMD8TqKRfzuesH4Ty4gYQgxcg2XtopEkiv16juqj6bB2yoadR8NnMpZnRgkkHsZgtPCtywbcHX3XxSU78MwgqK7",
  "key18": "RVf8Nf6KYVF7DoKttNxCeSYxoiSnf1M9SB59BWA2crNKcqxhfyxFnZqVBsGAR8fmm6j8XUExVUvdrtYCbibezaW",
  "key19": "Wad3RiwCf2sNfaadpLSsQtQs6VtHg3KWtpEnKdzr12tPZGbV3LCXqVconxJNS9J8CYKiWZcuwyuhDaiayVgQHcr",
  "key20": "MbgLWChLRt6g5nJXyDU3ijUopJr6D6F5HpnQUaDGE8WKpRpqZ3fh6aUVup2aoMZMPLcieM7Yy1HPYNt8WkUwMQv",
  "key21": "5snmrHrkHBtKx8mgfnfV4VreEnyszEw5Ctpsxcouxh9TnJuCgPPgvW6SquCfhS6ZVyBMz4e69XezPRZbUaQSkjKz",
  "key22": "RkdiUusYtFLvjUNHNFcbD92aGR3ghtep8LcfdoiUMLxhWDrdaBL9ZGhDkrwFwezrM1Xiux5MZEWA1oR9sHjiFpF",
  "key23": "4aQaibGTJQmnUMu7iCsEC2461VyF3mhbcoyyQoJNmYJWJ5pqEWSv9KM8mzFXbU6dhRy6E7Z4KirQKebWcpJoXerr",
  "key24": "5ZGkBnMt2pPMgrNwqx2hi9qJTSputAbaR9ZEoSgKVcfHsZFB6EmnDNDhC6N45zDh6NikNbip2ZjrMkRXUXPDtaXY",
  "key25": "5jVcpCi3cT13EADZDMHFZmQHw7EktW9UTxSYWuVjNH6SYazyS3rD1FYWonw7PMrHjdGrY7NWeinr9BiezoYD8xZP",
  "key26": "3UZGHW2kcd5TzANkSgMmHLqWk65bEjeDB5n1uVENAGX3TDYGnp55i6ZapizBuCC2PFmAY7rowjDZNib4N3RYjKx3",
  "key27": "25UrFkEyfDAZRkeEoSsfKrUKsuhw2RKRpavoigJ7dUYuKdV9PxzQR6iaHYxTH9YhTbviZfHUMX4w9mr2XdxJeDDV",
  "key28": "zc7Yoed6g5FyTx1ZzGGKL2HCEucUtvQzWnCL3adhZV1gRkaSDwuusGntpxPx9FH6vtjcKgFmq7HGNcwLW6obxQv",
  "key29": "5MfjVLKFu4bFy33DDcSpS5dVCy4J5SRE5fxFTr2xY9z9UhJ5MySs9Z86wwhwbds7qds3DVjr8HKS9kxKr5y9nWxi",
  "key30": "4SBwW5o3fxRzagL52bow7B9bQHmhUoTDqZAtwLcLx9ATk9PD9Smj89bgWHADWhNb8WGeDfVFyXPAZT2qR8TXzodg",
  "key31": "eqpz2rFnJpYjEwJfLf68jjpJSNBKvW8tGAKiawESj4RGAMcNqpdEEdvEKkRfwyXXAVYE1G7zicni1vx5CdaQeCz",
  "key32": "4H5o2uGAfJSFy8ZGsy2WEMoMHzRb2Me4hgLKkPftFFEimi3yc4dN2TzcowvXKSGg9CbY4ANeHEwBQ4mr2pjM7xgC",
  "key33": "3UHSP6WuK9Lurehi1J2iXHEVPt5FPwHoV9FWHDcH8np7t7pZoSuHGv9QKPGVG5hF3JwLxEVkAqRTdzRPLCDAifdw",
  "key34": "2AMg2uRdXo7NKxEm89fqEbGpE8duzpLSghhncpZ5PG3vjQPN8xHJyXYqgCbM437AmhD77oNGX6k8iGYkmPuWZo1q",
  "key35": "2TzD9oDLnnX5XWw1eXHSKKyoVHCM4XR3GA4h5GXWNEC848Ln3MqbPMCQxWcS6Ro3iLM1qm2pBqUzyyUdvjJd1Dsr",
  "key36": "rZbTn8Hqu8QcYPPoyUXvZRWKR1oJdfvUsy1TYnDGaNip9YvcoRyyRoYSkBg9HFzJrfN4WYSphfH8mmkZDE2xjkf",
  "key37": "3Yk7mKHqxPFuBNrf9BiXaSMCFZTCkMWYDDqLXmHzwpMzGb679XA5q9LhqbLVUYku5spNmQ1GTfsJ2LusDCMRfqx1",
  "key38": "3Gk6VrBU1gAb7apqr5iAh1zKZ3GNkeq5CavSznEy1cLUsuLUKCKxnwCSjhR4P2nMSSkxRh42qiDSufrK9mfnTJJ7",
  "key39": "4u7WCQQed6LxRTBYW9Mbo15xe68PVYWE5m45QPsjQd7k3rXhoDWPZvGNT5YoPVgaisJE3eAeAhPLT9wRdCLkPVr3",
  "key40": "2FDu86kJJgiG4mzjk9jYv4BxjC2QFT9yg2BaJsxnKRtYxMB4XMvX2bcwmLLUDX69Wc8AhRitcpmhLxYqLVWAuc3f",
  "key41": "2X4VdjPp1no3n653NvfXWVNJAH7wegvCBv7NMSeT1HNas4uBBpkxi6d7LJPFmjP2jxbaQeMxNuZHCnDbyjKbZ1ke",
  "key42": "4NccU9DHaB4Q8uVxhoX9yADTi2DnKkKy3RXfiTnjhYuFb2oCyqrRWC4pQebK5cQ1vStwbQoNGWfsCravjr19LatS",
  "key43": "51KN7jQoKHneUy6iwYR3CUm9QSKRBkq1RvyeLY5F9MxJft68q94KLK8hhe6oFcC5kKLwPr1aZoubd71AeHyazv1u",
  "key44": "2aNMHQ4g57rKrwbDS6eWWTdjyWRXRMgRwafxJa7vRjDpSmoUcMCRbSSw4WZM2Jb7pyiBGScG5Y2VnqjMd93jRwMj",
  "key45": "5sxmZhyVb3xvGeAGdgtcmU8haLxka8Pem9AhGDC5FmqQhFwWBAmXGfuNjdHGh4AkoYGUWsVF9mKxuFos4eQJAJx6",
  "key46": "3zTn3t6AstBh7VW38dkMhse734oRzXDRnerqn6Q1XhWNCutE4yUWWN6ttfoSgRhmFZ2FKSwCdmymxxd6uU8pTi8A",
  "key47": "5mFAYG3r4Lw3rvkGPboHTzBnBsQwmCtMkdfiuyXvjrS7uvCbohGcTk43Haq9Gcq1PRp35gB7PNPp7Jy4GzCXPyFB"
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
