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
    "DztvJAMqKqpgV6mNEW7QTpDQk8Tc3g2TkG9McGETvUUutRdnkLP6wS3bqTN3WoJ8R7dL72ZqW8Xe8DSDRvYqfSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tbiZT2qxmmLHykdsAfVzN6YtvrvctQj42Vi1V2bgSu9wtMANg2yRCxcF8i7AHTY2KhVYYj9V9WUfiPhoHhSTvCN",
  "key1": "5bhoUCqRMJRPSeGrkSuAsBXPqifxyVRqBS4Tw9gAAFn7UVTxjcdaZwo3kHfkSyBi7f2u7HKvz8dVoD8QBXUo71hV",
  "key2": "5hDEv2th7Y3HwxeUfgWjyoPt7NpKeBQpy7ns4if9huYwdGe9YU6dJJiVdZ1pV7C7aKuTZe4rxHH5wZPBxBmepiDZ",
  "key3": "43rSRyGMvWFNE8JjKqGWNZ4ekeEo6HLyLermJWqUqwjHsEmSVE17jzRxB1xfrghYcMCE8FPrA49oAmCir8LDtn3r",
  "key4": "62kg2YBmLoQEMfeqo5ZzsnrLPMZaeRrB5Rq3u8b39wrWvd4G21WJZnG7RTycEpHeds5LuVDWaAFkKqtgrVKqsDix",
  "key5": "4og15nWcMiGT1vU2dCHDggUBWNXcrmDUFZURj6mZxwbsfSBfY3qZC5mgEAkCK9Bb5sso6zYfZcsUjRbTg9t6FuE8",
  "key6": "4UTrkhMxMhHZxmzKwRztdKGZwXPmLJWfNfukvPAyiWY6D25oQ9i6Cx5Wo2uoP7Eaf9AYzkRSqyqxVLSEZZB581AC",
  "key7": "QY48SwauR2e6xJ31S8z9CWmMJH5oBWS8zwndQoaNDKurJawkcqbFo3Nf3FxPzxEcFQX7HSk6gD1eoqXLAkZBRG6",
  "key8": "23xq6PFik24ytwovKgRQds4Ms42Bwmiai9P2XEfLLpdJCNXtfY2pWdenDc2mxSGrPwYfAM2MkgbE6qE33y5uHeEo",
  "key9": "36Vr896DkpLJoqG1Uf19rnHq5qosgCA7QG7GedQMLkKsxRXRBSZ9LTUwj1i28xCyHvnVPVVsqctc4kDM1fyrk8j6",
  "key10": "2W4K6UHupWoXhK9CTH2MebjAHHYqyd19pd5M7HYngrtpoANHy5CySfMeDH6zqDJ7nkr9UHXiSeC3ki3SULozXuZa",
  "key11": "iSAJiRQSUg6wi6vvc1H15vnpyLikpKyDpk4ZY1d19h6KEwh9MLS81X3W3hxGozFRGrwyJu5PAPgau9GhHiW2wgY",
  "key12": "zYW6UxXqsLFiogXauCCmVNPYyHH2nJ76XzDxkPhy2t2pFYAzeKbRA1x3CMw3E7gzvWeeqUL6PmDAqsLdWkiwMc4",
  "key13": "3Rg1R5NqB1oe4ueK5LpgsdNQVxEecWkmvVJ366YEd5dZSLJ3uT3dLGHd1dk1HJHUYNnZa1rPiazDGMhrXMhCM8WJ",
  "key14": "3bUhPvHQNNbe1juoiaArSAg2rkZ6TnRKixLSvJ9bjJraW34z1nj9tRBkZ1SUipfR2prdzN4D5fKeN1n77trhBaT6",
  "key15": "8s4zM7mFgVsSmSHovG6RBTmrnvMHxmbrRNKs7m8st5M2iRqNNTUsLwpGVWmm5VXuzGaS5hCJYu2QXGmtsWNMiSs",
  "key16": "2mWMAYdRZK5QePUhXLpjea7YYpHnnjYr8np3bDW8GVcN6CNfq1pojyv72JaYpm5dpVQmJkjjHmpd7L7UdBPGFbwc",
  "key17": "5k5GQU3r1kNsGDMNg4dVVnaRjMX1LnhsaRXWVmCBqt1jn56BxzU6nyEhbCqRRUFEWM6jmBTEMK9cWkKRRxVY8rEC",
  "key18": "4mFcbaccTE8hxCPNahma37kE4AKFrVqr34fMkggrXUqs2yt18UxLejr5L7TtWtLUhCdecVC17FUfzvdgeuYCm89N",
  "key19": "2QJjLpv3xZR4jCQKfrftzJjdPoXWEZfwJDF3Y1oD4kofjhTJX7KyWL55Hij1TQBXGwvwPDye2sxEPnjrWJD4ThQb",
  "key20": "37eoMYUu6RNWk8dxs68TTaF7xc1w6kKB17tjjMCYEq1eHTzzwAWxoqDB18Bd36zUiUHEVXoMb2w9x5uX369tnJ5",
  "key21": "58s6cAwiqaoDaZnUhWi2RhLiJvt2haBGd3VeFCMR1a4bvkVQCztfoXMYKQfZZU3u168gs1dTCGSCfXB9Nu9WqE86",
  "key22": "3GtfHZfmh8M9d46jcJCdhQBDmu7U9TnJJubVNKGPFVv8DZuQWXqXDwbeG7tbUyoXSFmfpmQ8eRbNS86QpUAX5fqu",
  "key23": "5LAmBsGxaR7WraGpU3oWoS3UdSqdpoxHzADmCCQwAs63VL1c9ynqnon6FQyYCgCWkkRNxYAL53gtSGiNKJm4V6wL",
  "key24": "51a1aBhgwf1EZb7ekdM8sZvuGhre4nMR5vRyCYhXSMhjtumZMrwyNQoPNmGTo4DcUv1TfXN9U8rxAxCuoKPJ1d3m",
  "key25": "WEZ9rb1hDFPB6yYCibmHvJiksMbA6s4iJ5pbBVyctJt8ykL9nFxvKZpZhxpnSSUBTDdWcbV9MV3oUj5W9n7JevL",
  "key26": "2GCFCDzPwwU7RHD7iutkpJdfdKsYJqBXLh7QCzVJ4Sy5vHgmhqyjnosWfQZ5WC7WEs6MD8dYM1P2BsMjA2M9phZt",
  "key27": "49fd8LTgxKGKUMvQbQonpghjskFwvnLeSDJWKVTCFvxtCXZmosMqeXks47ESVpYKZT3PLQpi4nrRxJAjdFN4s3dt",
  "key28": "tzUbL1HN2krAawQgu7PtbQcKofmMkni1p7dxScuVA5sT6evZYyqMM1L5rkfEQkjCyaoG56VRxX3udPBcqiDC9o6",
  "key29": "21rCfHNtvC44aN5Ugxf1SpDZWpQnzWtrqy9iCRuC58w7mCAngeVp1aYdMFF5xo7trSTFnSVsYif1eEDgJdSuTCT9",
  "key30": "gvi94T2QyAPLRGo3qeXSsmRwNwouQWkrwN2y6UGrXwc7Jeya8ezinbNh97T8eBFZiEY91ivqiRLVCSZ4bBoJQiZ",
  "key31": "Sgdq8z6xCFGwkAJYdH88ncja7cbVQW6g1rzSQ4K6Mrr2numi64bn3FLjHfBiPAPPVTqZLWZayW4feRRERBZm35C",
  "key32": "3r8e5N4eoMF8ZevjMocDSXu9XanomLvSPvZ3g3WMe5ne7h2ux7KpBg2jiDJraozDf2RyhpQcEmNu467BUwbrtfb3",
  "key33": "4QKrKDujSGiWwxbtEpL87kMzXpnaxtVbBQiUCdYrRHDiJMWcbYrokwxX386eVuMUKisyA2bVg6o6n7NzCVnEtPim",
  "key34": "2yVv2PjcQB2HviM32zzWWrmJeyDrTQ7dhWZTP68z8VcVchBsUfSKACdVGGajATkCsbp8X4ishMG3rQh9hpsnZSaM",
  "key35": "2vQ6EK6FhcfeJU4vqDnQJeadSPUQvSeVGy8kiWLqhF7VStwSPRceibegX8RJCK54CatjyVhHDEk21sB2MSumC79u",
  "key36": "54zK1mAFqmqr7UiLiTCMjHjGrPrWGNsVMMZgZnZBYpnUFAUbjhoqgX59o5oey5cZZpn6Fiya21Vts6KXSDpWxcJ",
  "key37": "2kAZkdQAQUbJzbX4g83vYHcWGBbGHtZaxX6gMsfF6GLKAFNKozk542f3JnW5cZ1YaQgwSxcws4Fp4n9e4KvWyVGx"
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
