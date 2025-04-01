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
    "4FvbqcFUwTeUJQqh7yCmRFacmpDXTH2YsYfgnBQdE4arEeiVcoY1x3ooxPLcGJWuySxU2TAPvjU6RponwQzDenEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nqap6ynAUVw75wCnGsD9e55ou1gXVQNEihB7Kf5P8XZ4rdrf1dgY5cSZAudB3dA8nwiVxSzdtLLwB4UFn2WZvNw",
  "key1": "5indMpAgEbSTZnvA7TUvziewizis8aUnoQy6G3fiicHzY17H1QFEykD1W6hxvxdbcirRPEHoUeK6EMiKGVbeocEh",
  "key2": "3qokYguQXK2SiVBNySYEoLps6rkygGyAhGzL4zbgBp6TgVZo1Mv16NbVv6ttypuUHdigaD4CJPhZWZCs3yH6biXv",
  "key3": "3SbFuowcNAnFW9Mdgv9SjekoppaLSCPSTaDx98rn8PohzgQkQ5T4ZyRWwjoB8KStJHQzq4JdcsJdHgoVuHtt4hFh",
  "key4": "2DeVdMvfK4PGPQZvkHUAushdoHafqvVLjpF9KigLWv8sGr9YG344F1SWgeFRsFc1baVoyNHtraC8S7P1SnAcQ6Yq",
  "key5": "65sjugDihdhDfDvYzYE6QdN3PAyW4k9byGdUpKtvgnrpw6Qq77sYMHjTu5xBCRJoH31HXEoA8pRXYqDLJmzcZqA6",
  "key6": "wmiGK3pfGzoTCoCD6CXCfmv6YGWpE5VD5nnFMzHJD1zMF46PuPMwX26MD9fySFzPJ1P3PsLU8JFGgqx7iKEuzZy",
  "key7": "5m4W9iH2yFMNK2ZeVC5S6Sxg9iam2xnyAy2RUmNth3CU1sM5HWV2RUqbrfT2BpYT6hvFb8fm3txvUjaXK9wQkwK6",
  "key8": "5hCmV1ipJjdBKZxAURWYjRcVRjNH4UdnGS9xiiYxzusAL9zxUYXfw8FvxKnhkbSTRrZc7zzpTQ5eQwyvXc2KWfHf",
  "key9": "2JPFPCtpVqcWUEz2W5wvQqWmeBfhdsCH7UD8xkPQnw1NEudQUjC2LAFV4QChiYF2pu3nxjXdSFfke5qyKXiJecpQ",
  "key10": "3agvZ3WdLUc2xADW9UarP9LucQ2sR8YNSo8XcaA5MBsWGqCLEva8WCs5bvq5XqfMbWH5Si2mber8WPJzvKax3JsU",
  "key11": "4es3RfutMWrhbXnazT1YHdsPnF9M15uoRvckmqKGgwYyVqGMAW2o94Km5LFT6w1cAm6kjFWYJpUCyVB91dcYSnK7",
  "key12": "8AJfSWaQKGZCiXjdofiLSFpdtHt3RdXkcVe1mGAVbDK6P3Mg68U2rHfTQtiQAQ6YZKxsHeqH1owCEQEHQYtdcPZ",
  "key13": "3NNPruX2XpXhz5kqf3VyKUVuEW65YN3hZaefjCXSzLohfFSQ83FPqDvTYnvSmm9Jh76CSxVgzpyjsnwHtmHnSJxK",
  "key14": "2iYutwV4ai2fWt9qTPf69reejB55czTkv7hKKDPrJSKGR8esvKaCFZij6WVp4YqFZR7i2P7NxCz5CCUcbKpBn4C4",
  "key15": "5GV2yQ5pfFW7i5uhuqH5RviiSTm9PzkyQqLudzKYsfZ5eMJZZQ7VNuhiadggMJWWTtCqz2QSHbZHWHzEpnVoXS8R",
  "key16": "JVK5GzST5dnegGTV78kdFAN1ccqLusnwnZPPJ3HZPBgurKRh6e5YKa7Lhej1wWn8Mq4GoeuzETuMoKkNj2ZfpCn",
  "key17": "2uyskZtXoG7dDpwUfHkieDb75L5YRFbd1i7615Fgd9Kjg9sEcgJXrwpyLLhkdgZP6vRLJ6VRo2FpHSVEMrBzGToX",
  "key18": "41XhRimfnRiEEbqaJousCue62fHsuncUzJXqDxS5B9WreGiBj3Zq1fGRuUoJTs3rehxR1bV6QX7J8X4BWHKbPcqK",
  "key19": "4NBAeDkHitMwLeZSQuHLKk8Pc875U8uEzH9rxF9jEorXTzZmsDwysFzgdSXrYD1ue1xvPGxm42B6wkLfgjdz9kkk",
  "key20": "UNwuyNSzyeWDhTm6xXw41qQJLKdJCzQAKc9RRHAr6X49GSLUc5wk4JnDXrBQN6Qgtf5BDGeB8hpE2kkvgheLLvr",
  "key21": "4SssAM3eZ4MXXCkUo1n6Xr1bSGiKvDeR5L4R7XqLnUh83xMLeQt6wXMYF9Mr12GVWtnBuuFbQtpeqdx6j6EjZaTD",
  "key22": "3t6EM2fCFo5DmcGBa8kgx6dT9DzSo856N3UNNmUM1jXY4i28S5dT1b6EngZR8mW9ENsoSuE49dXFUDZYKeffs3bk",
  "key23": "3fCgqvS5e7d3mTsQrAyY31jdmk4PrqFUbHjSCd9LjxyMGnG8HELzzz77WNJhiVf5c77h7wwdSAv4r2ykH4neaVDV",
  "key24": "jx1ctGjScqt5ZN2SiJZ5r43RQHSwS6MepchHHyZ1gnNEUqjtS5CoyGStgscrsvRGNFcZAyJ6xDrqVgwFxVECP6R",
  "key25": "3SMTvQADvCb9U97rbxFDoLk1x7Y5Mu2JFxwnAvyQVhVDuiggyorcLDSDCTWmXVv788N92GdiNe4pqXkhCTwasKrq",
  "key26": "6ykurxJtqF2PQHLZWnGiyccVWNixzsaGEULa52N13hbti54tc7MQtpdHWMFwybKFRK1L5NBqveCUKNSd2rZVBwL",
  "key27": "388T1UKcQ5axQLnrmVBLpcgEkxxK2ZQSthi9xZPugRr1QSrFGfjwXo6DLRWDonrou417wsuTECjQT7FvGKd7PTdd",
  "key28": "6EwvqQHrQ9QnFG6Rjixyb4MaVykX9gWkBsxbhqTcVmZ8Bi3RwZ1NWC5jfe5yNs6VdBLbG4G3jtck6bg4MHCcejr",
  "key29": "4bcPAE18XUuPKTDky1eMhXCzwvGixvBs7mcBW6E8FC93vBpysXe8y5YLU67tDbLWECVQXWKPrY8gWBds5cMVawLr",
  "key30": "2t713nPAfkt9uwQZvsFChz2vEw5enr7KnuT1v634DhaH39JHca7sb7k8BjdtaHwA9osQfpdJCu4hkN5ELDpMGE6i",
  "key31": "NUZY6oRpZBqJHw2d5CNEmx81jQyHLaGj56xkihDwpkmgjYQ61Z9BsznvkXy6tUiTCu46ie47gWxp9i1NaRVt9M4",
  "key32": "5KSrzacFPKyJDTWw1ih7vmstdtCULvqb3W4Mgby3mjz2r1FBp75kqYxzSD95FzXR3zpx5t1moMgoLmXsnMhhJFJu",
  "key33": "XSgXr8QqyprQSiLG5sNJqnZF29YghfeY4L5qehTApmWqeGASkNRVetHFQkrrGSYrWBcwHXogUJQ6ZSpzP3LZM7K",
  "key34": "4xpdCAXG6StQdZHuymKR3nk34KtxNFzKRyp1n1GmyutVwaC4wQa6QQAiHqADtSpvUf8VsBqHSFLGADkA27gjBxkb",
  "key35": "3BmbT2896BUecxZ6NGg3KZZ28u8QcrHy6Zt3q8dYGckwXmcXDMXUHJz1FRUPmqaU1RoipyXLkRvNYACCsG4NxtcM",
  "key36": "4SjXFfE7rNQh8EWLu3p78GUhFYgyZE8KrB3embtefrdCbkbA89F4ZCtykkr3Mrz7PdQVs7nj5rcZd8DMKJKMMGrJ",
  "key37": "2jNQZqdisQ2vyb2eA5ZKUjzijttVa5thi1uZ8RpYuyL18FnVb75RgU6GeNeAmHsHUyzL4ZTm84fxcRxRf7j4q4a",
  "key38": "4xCS3JFzBZNn1sG99TBmFzkbDzRWckqoeZnCikpUqZkq9gGFKU4ujaBC6foXzgK7f2FDgKE5o2LbXnEJk1iHPW51",
  "key39": "4r9PiLjJZ6Hct6B5rJ4ETe3CHBebaBo4pAmEbnYaxnoNs72No35xH1J16MSyvncyUAu73KGKNrs4i7YmhG6AHEns",
  "key40": "2zZcZmXFUAvXh7EyeY9ZmCpRFTmz8Lubr1UryE1xeM9pvdVFx6QsaD4ZcqVcgyLmPEt7ipa34VhsYfjHRVgfprcy",
  "key41": "2ZpKQFgPk6fVmNLgEb4mLPHmPnmkfxfwfQ2wwZiiYMF99EgiWGg45P9jd2N9bzGKW2VChjkuM3ipBp6GwvdfWgtL",
  "key42": "4nWMxzWYHWBA8pfCJZiuGyqt7wgGknvcozWyYH1CeooWvq2txzhWVjni6Pg3gKZqshK8bMmPpScAYiSC3TbYBcRL",
  "key43": "4w3i5sWQDDuzHyW57K664462oKAJN3A2VgPHEFu2WWhLHj7VAj9PGi1NqpFmk9vN5S3FRZvoXzwKSna8AUqRHRyM",
  "key44": "2BAce9zrs1dGYfi4x126ha4vdAvFgQcmzWZxzEkfJ378ArnZUqqkrTgbbSjUGR4oGLEPVrYrJkPpy2k4h8ZFTDBP",
  "key45": "4CcSeAy4kZQQ5kazUkmmDCEmZ7iN3rCmVSdkFNzfsgfVwdeeTvoCT6kjChpSc4NnLxb6JmmX5mZYtHRg2jNDtqTB",
  "key46": "2NhJN8zH2o54g4sfTrfjMBRCQ9oYrPtJ3Bw11XgR28NZCRw4siQg2sbWB3sStgzUfJ6tZNARaLEoC4Ndy7hjXuWk",
  "key47": "9oGRY4nRFCuwred312px4Br12KSurpq93cCKfJ4V5q6DBT5RXCoJJj1GYTSKM6CH1EQ6gPMgvR7okqFcZiLaXgi",
  "key48": "fWadsAf43mnikyGxDottYwrxNqaUrgXkFrSFFgQWoGSpfjiWt8Yntc5YYmMj9ADYenxswbSMUuCvWq2iN77x1JN",
  "key49": "236VrDgBD4UFhEnh8fqjBRJzEXNHCmRiUJ4wgBD62nFBBMwXAE8hwzHudSXW1zCrWkEDPDgpASXd41DqymmWeZTJ"
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
