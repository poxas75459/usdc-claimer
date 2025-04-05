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
    "w9s5JgGjDbo1JFf1GyqQ4x1eKGB8rM27qzmkxnCoQAC2uDnpL4DPSYYJHB68yxZtbwZkhN2BQ4Cho5EXkQghffH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pb6GmuvZecU7oyXUyjvFjbeLu8q2Q9beUXzgKevfKForH7D1UFgzqpLwUqNTZZWX9UzuCsLfTjVAQzz8hu2iaUT",
  "key1": "4iDtniAEAZ5Aq33MTziYpTZiqoiZbGrfWdafd5cpdwTqJrGENxiuqxTJ9hq7qHmRCH78uUMLc9t7UPaACtXKARZN",
  "key2": "43ZZgAf8kCerxVih7daZ4gXBE2bt5TS9uSXbRShHWnSSf2nJg5sLoqPdd5yzfNAktqdrwdp847dbnVfLuUGHVaGU",
  "key3": "5pCvEejhjko9t5aaGLuMB14gPZXYn9M1L4M9v396N4EdXRZcHnYJsy9rj49rE4Dr4iYmAw8zTz5jgcmrokpT4tja",
  "key4": "3fK4LLYFZu1DBLiG6uUrS3E7L8K6BjFQWgRmPVWUvRaCFZSgkqsp9zgupSPFKQNnBW2FVc6bHuorcMmcPqpx7Gbe",
  "key5": "23qEDMZEx5wHH2ucyV2GJV3t6CMDLksWVQEgLkuEapdHCcyZHM31MZKG3cy8R2p3ZxD8dK4BWh3MqnksV7qgrddi",
  "key6": "3XS7MpG5rTjgvLZNKgfgTgBQt5DymeqQ1fpVMkoj3UCKRGYcuds1wTUjpYET7eWQG6B2oCuVYwB1MXGceH9RJ8VE",
  "key7": "5MA8jdx37i6XVoFkpSCuvqT6vggaxrtWQZKPGBBzPx5zZ9XUbiMjp51BUeacvxgGJkvZaBkG2aQZWG2XmXuUguAU",
  "key8": "xBJdiUKFHiR55FUYdir2YY95AwSHtzYKj4qy9XbPg6N59zkywJnDsaWQUjzNbJ2grLpcgVRGCHTB1RLrUC637WN",
  "key9": "LrT4TqHoQzhhTTpGVwm2mqLwqrCN81y2s1YJpAA3AKc8KDm797CbEzMqS2MdpSxLHbZKDXLnpMnWCcLZuJo63GU",
  "key10": "4inAbRu4HHezgFCsGHZvVsEuBWuEU3oJ2yYz9WC7C7NksPmRerBbySErKnRszFFyCLLPW6uxMHncUseN9C1DCise",
  "key11": "4ooVtxjFUtTthpYPSBawiiKP2pwW2d2jLTJVtpc8v9CWxXfnuAHXCjcuVLtBLo3M9Vs5beUCsTjWw6m4p6rox1nS",
  "key12": "3syFbwxm2Egrw48pLu2ymrTYcQReLvSXtn765G9WAD8bQRMVRShwsXUQ6T7wjr59drBUinwfNWECUhWyjzgtLMw8",
  "key13": "4Whnp7DcPzkw4BMdacoJV4MFMDZqV9HriCa3ZGhGUwBki485qyLDc2tQcPYsEXp4RhepNALYKq9qQGyWmWq19uYC",
  "key14": "2hxMRB5JcnxGx9PAXmLiQRLyDZct7AHjhcSbtnS2F6MvfonfSwrmc2fdBSPFZXo3MnCGpf2EQLKCaHQY5VfcgDmB",
  "key15": "2c8KnfqRHaKUNvfGAqouPw6yDSTn7CrkoHEkMaCg3tmA8SVKb1BXPCXpnuPC28kJkd9e3Tbhs5Tn5i7Yk11SVScV",
  "key16": "4kP2PHWzrq6FqDuJgWCZjXK2Xj32NukU8SbGD9PRpagfeWNHCyGMpbSYXfRcBNis7cWLEAsLaujmT6wDCKsB5cdy",
  "key17": "3y6oYZSixPeUVhbcQvdQcFD9QqoZcRq2ewSip15minDe2yUMH3cnXacHiQ2UaLbgQbL7EbyzzVjMyiBR6TByqUnb",
  "key18": "4nE8swANkGyLwcMkysZc6hAuqggJLpc1eozFsMs5YN2sDz5xMAs66QDG9Q6rqqD6X3fYMkkdAdkeFRndzkkWoZWy",
  "key19": "5ea8SiihvwjETsU8wM6Fxb6Cm5WxyL61i7eDXJX5GtgjARNzwpwPe1NBdjAWGqDz72BqxYPiPpkEzKaE2rrEavfM",
  "key20": "pZvsB8rD3S1QCt5kmRxZLwNTbaDDrDSNHvXPaS9cZRHhkKUuSGENoA8vUhvnK43ojgiNypotU1yzgGRJ7YexpJU",
  "key21": "2FTfDY44nDXsakrcbnTmNb6xPux8Mtg5Ucdm4cjkh9KfzWzaCFSM9p41aFtmvM9KTsH5R7CZLGnEyjYzf5zTBMit",
  "key22": "3gEcvubzCxt13V3nJDGLeyhb6eGPiWeWRswb88adADpSQ4g11hPYjoEWfF5VTEJ4DJZDkGEyrX8vgtcAQXtsThhS",
  "key23": "5FES2XBVtUTt2vz4dBiGTZ4WWc1q1SsyPssF1HJAYDextrZv5pJTSwsJJZ2YDPsQQ9X2KyiSVLg5dbwiQ8uxf2zB",
  "key24": "2oN5eLzeRwWRkmRTNQFWQzjU9t3TTEu2RCd5ikkM8b56WvjWqGNhLHkQRmqUvortoLLePkuqDSCMVeH8C1TAcrc4",
  "key25": "4HZyjHRcEHiF2wEBSebZ8jvGAAeXME6fEeru4GGRbXtiCkenirY3mJnJ2PurwECDKX6mkbMSxhxjM1wi9fT75Ho8",
  "key26": "hyGccThS95R3TqVEuj4Hv4VqiisnAGnK6sH5RQArmEQAJfkz8xT2h4FFC2pEgPN6zPDBbxA491VhzZVavmCY1Lk",
  "key27": "efxGoNdLu5fwgsrqePM9obvJV5EFmpuR4QFc9aFTh4zARu6oNzv6sxRj3PNtUcrwNL3E6bhrdE93HRgsNvYBifX",
  "key28": "D3vi62fbA8JS1Cgjpnk5dd1hwCFwkWEHBQV6WdmQrCBgb8rYxdDJGV6f61kNXJD4qggwF83df3pGJxcMzUqz38i",
  "key29": "G6Psyxm6fv5DqvAj2gPBLnRogCciuR4Hj7XvoNtzay4rLGpWsZqRdiqgRrRwnjWfifLrGFus1TS2SAHds8Ycsdg",
  "key30": "2BXA4RQzbs9xqh1ncA5YFKHVaDrE9CBUL54WCuxaJpeWd3cDbaTKdceXySDK3fD55CGo4gqRy5vDZadoxdm1SC9N",
  "key31": "5CxjFv5qtfsc8ydncFxZjgLXm9UGSM6PsnXEX9xDHL66X8t3eSEUDTBFM11UNsFXZ3WFt4xkM8BW5ZsZj855m6tf",
  "key32": "2vxeR2hcDHRLnNnKxxLYg8LzRumtNdzLG35J62tgB7knsjdJbdLMjD3J8JBKoAPFWyaz6JVcA84KCrxuRRLHXrUg",
  "key33": "2pf1PU8J95hs7UYrReryAJE9aYa9fen1pUSqSfbWBt4vhP1i76Wu2RScztRrtHeNkUBF4NnTdo99PxmarHucDVRc",
  "key34": "32r5ubwY1iJYJxxCW1phCq2G1vePizBAXsfTxwHpHxenRRCvPPGqPKwapnmr27hheDzAoZXk1Pmm167QWbmtaFBs",
  "key35": "3bBKUyGEPaH12L9xBEhEeYzj3FshpTbgahYx7xvMoQDqdDRYQfFX73vcfdnb1RVifcJDhSxfdCpXr84jdc2Q2HXg",
  "key36": "3QDjqTmgbg6YcGsJcYwNb6KhrbMw5SehVWmkaihozZPDbkMrRLj1gPuZYfdFU9Wq4jz4gQLXuvyWpRytxGiVf6QU",
  "key37": "23kfvz8m5PchWeFgtkofsykFa3CuA8L3EfwvrySnc8P2hNtE7PnZ9MaPbkHpGA1BwP4TBvu561sz5FgD7Yk37He9",
  "key38": "2FHZoDyCAWh51ji4zBbxXdRToYdRhL73cVNAD3Nobc87uk1qo1quypEJgUvNygRXxY6V28YixGaJTmrKGtqq9SAm",
  "key39": "4sw5VkNpiZRheP61okTvkbWBnnqZBGPrXqQpd5zNdtyuhvHvP23Tm4p4NMp4EX2hW8umYPL2SoCJELc8cPcT5Hy2",
  "key40": "65UVkzqTRLyMxknVfg7jvnpzz7kpn6t9kB5fZ2FiD7tk2LGaY59LnXwW6SPetuBbDy1EURxhxZa9aoD5w3eWBxNk",
  "key41": "33NXYPe4YAbXBRqMzyMSdhB7k6eqtCZYiBT2h3qLxfoYrBaah9Wh6QmKFHqRKZBgQnJXMxU49GJMc41rscqPQC96",
  "key42": "2xjfkwZN2QV4dAfqmfTKWfcJacUdDQoXUjrpk2yjv1XvaZe8XV8NSrotz87ivtrfNHdCfuxgAYWsmVL4E9duWny6",
  "key43": "4nDzTvTDh3YgPtsXcfUFWCn7qB1VC2shB7mGPKkeyNS8HDTiQMupGsWttmGDdrSDrhZccM34CiD5Ndu3dkM6LgeU",
  "key44": "2H99EydWXpsAgU35tri7GxYUELCxRGMu24h9wPT9xBWjKFL4xsZre9hp5bVYTGx5dZEUbyDjom5Ksvkuw257DsRA",
  "key45": "5i9XMKMBE2VqgUe6S9C8NmQn6rkznt8Tp94maeoWRU9nLEXhWCXySfjpJTEAhSEvvhTv6Q8itvUsCbpwNevoi79M",
  "key46": "jaCCdZdGUEgjqdiqkDQGzDVndKeFfGFg37jGEUStuBuAq9gc2mYjeeHuHt3aw9gdpsncXepuUyzVoDaEkr4rAZJ",
  "key47": "V8zqo6z5bRUyM2xVqeX5ieZSE8N1XPC3pWiGGzSZG1SoNrtBkX5jf8e26Aq2nnrgT8TstBDsrVtmAuFPS17NdxZ",
  "key48": "2HASoghK2ZUKKPBJRRxt79GvbnRCb6AppkHsVWMjhcqrKe2Wu1sHwutkY4FnsGM4FDwgzcjRb1hpMFsKiQwyKhpW"
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
