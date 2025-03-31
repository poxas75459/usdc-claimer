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
    "5DghoX8sh6DAtFGJBe3tTk6nTQbGrTA9HQh5EC1yZ6CbL4VL1Sk4vvbPEV3y5btTixfB45mW9NNVUDUchKX7Ayrj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GWHDySwPm6EPsxhR3Jm3MuyvY9dDG63bFKUPK86Ea7K9G4qwehYuaRu4yk9VDw9UCYDSCzoA7npMPPn1tE43PfF",
  "key1": "5JHBvoWHS6sicAMVPD1pxXS5sLjX8mTSQVwZepHsNwHLii3R8khr1gXrrmeG2eYhr5EZcSwJh7TskB4ByHNErphQ",
  "key2": "3YFiDdjwJ4Z1sb5G72L4Jn62EHmvQmxK2ko8y8ScQ8k3Xq8Y1oZGUM6GUR3v3B7V7fjzYD8uYWtkVyXqArwyQC2Z",
  "key3": "siA42cPN4VxBnSRqrDPn3J8EBX8G7m2sfqjBYJUrTtSC7FNu3eqqvGpjEzd7tqcwwANFtwN8AAJYiynZfe8ov6L",
  "key4": "2mz2QqpxEv4s9FDCFBaA5iwMA3kkDqX7csuHNC9JQwFKHHtepU412ubKpw5XD2AKv51wb2mXGQCEDfyKi7CWBpiE",
  "key5": "57qMhRMDbaW6nG6EyxPmfcLah4azYa1zWAXaRkmGuhCZVnUoNBhvD5zorMVyab6CDsGojR4RNm7b5MfSwYjWnHms",
  "key6": "5huSoKcqCc8Pegmx8acvyTT8bdc8pDkprFMoVdnpjhVW6jqMU9KvY886RKyR7sDcMw5LGYsrHgUuxoHwhjoNFWKC",
  "key7": "6723cQ4EoKuPo1fSDzsA3xG9P366ZbEvtkpQWV89BViLwpGrP4GeRLXw16Na53RAD3RK1RxvBCVwK6fciPWvjVuJ",
  "key8": "2TybRbs8NHMYyVxj1wmYUeqh3hgvQroYxDVARszxjYeH8nQu3UftCqHd3T15t3yYjZEbYoWj3XFcWpPbeGyAcv2L",
  "key9": "2ufbdtu1gdUKUV2w6j4cibuQZiRMfyQWtmowUcmxDJiCMRSUFeQZqkm2esCFA8yQtRwauN3tT7sBTFYaXSVY3JwM",
  "key10": "5TPsu46mNxbhB3Lke6QtdNY441igRnBkqk5wR4BYvGyTTuAAYbhKm7LwZ5dB1P5okccWvzWRreyEkhTgzCogsrBV",
  "key11": "3P98Zx2MPK21tLGcSGGCC6Ugf8j2pHP7xfK3U1b1kLfApCc4upZsnkAbbHZAAG1Hg1LGS8Qxaz2i2uL8nQNYLnAc",
  "key12": "4XkqPrwhZRYG1KBvDiVqc2p1DwaJqRTqsEKFVS5gsFe9WomXndKsp4gVDTiE13KrxHizWavHuFktaQmWFJsDHsES",
  "key13": "4fKeidhiWqfNwwPpjNTaG91ncfxCKT9MAPDnFWQDy6dfkkbqcd9p2gt7tAyX3TjsmzAEMzWp77bk4KKqZnYC3o8E",
  "key14": "zum4UvpzWMNBi68PaJ3hXdBSLhyPw7Cusz5jWW8FgigRenij6MG3RxR1LXWFVVYdzMJ8vbUqtCCmRuW3qaCjevk",
  "key15": "5jNgwdQZNsqTUNLcE5r1MqoYHKze7x3fBDm1NbcsP4E7pg5yd3Eo9AKAqgRWdzE2UDcoQhiFxSFEeygHX2vpDAa3",
  "key16": "3qDBNZDMguTVuFWX89fazpY2svakrAcwhvaLsiXjHKSAoyPEqkh1yRhWWPoLKFf6o9NDEVnhbcxwUcYQWmw7GT97",
  "key17": "4ToKEAcw7qNBWQGoMYnkaXjV6oeKyQBmwxmzeNTFkfU19sj1zXiUZK4u5Ymg3q9ujvJg4S8Q79bgm7noTPCUuAbt",
  "key18": "4mCTtNtexPuSnEjdKHxQQ1PZnAQzPMZ6L8NDxSwfRfbhoF9HeqvvaNKshAc3v5eciN5gmXfPQAjE67uEd8Hb8aPG",
  "key19": "26Y55eomHYdgdKnWXLNP59jPac5dZwztKv4MHGHPfYnyWMEGpNpmDP3tx2pa7TveXSdWM8AdNqkZmcriS8hX1Lf3",
  "key20": "PC2tFFz3JLDvt3qnWBs8LTh5rkaedkMoKxM4hzs8xj1wuuRKSmnEh53EvY5j1VqxTjgrdCBFeLvbvm8sFvVJVKc",
  "key21": "45L42SNvdjoze6roQGKrdjRRv9xZyDJd99214d2weJrYgbjG6VrV5TL3z5kDdkseFpNUkAt5eSEqp75idUCvhXzV",
  "key22": "janfqULjwu88nxYJSKBLxXhBsZLUs8we6eZbt8Jd133U1odsKzAVJJN24dn3fzPsUPHFNXn9ZSui5KYzXjW6eff",
  "key23": "32PRdBtqTXXTFnGtgFsbAQcQr4wgZJMc9DtXotanHzSwtJzE1HRpjwYY8VhrHnG6zaHzsKEzYZjBKp3EJTdLNyYn",
  "key24": "45JyzKafSZ4rWrmSiGUvWKBy83XwkCwhttXh5yJhUxEfjMPZzipw62RkjDvc6ySajqS2QXHzj8fR3Bm9yRvt7qSb",
  "key25": "2DEwb4Z7zn1soos48ep4DFSJHY9BSMcnrncFxHntoTFYiQAXRjVKpiveti7Z8866yAzL9MCvxnL3t8rsbxdhi8ay",
  "key26": "61LiSqBhYc9XGaBp3JDydciWfGykUx6fesaQYoVCEXAYEnsWqKAbnWooxEVYsbGEKuZGDeAC59LAAUgG4N3ei5dP",
  "key27": "vKw3GyxGBm8JaUcda8fzKZQ7WE2EmJ1Qmn67mVTQfbXM2zWny6C6KPPNi85vuMLKpWWegQ48fDmW7HKbAnmSEsR",
  "key28": "4n6mstvhkHD9GckwLmf7BU7ME2QSPoQWXxUd31S3V2wWP3g5HTa5s2uN9YdJV8VW1yrzHM4vBFPGmfdMmRPeVjYk",
  "key29": "4H9aDnK4e7CfqnVscqCrxV1trZNkTU1a46Sbk1F6PSBoXtHZgJ7HBqgtUc5Jjk7DmxqVB14WtNXf7jmfwdiNuakA",
  "key30": "3F8e9zwJYBbQCc2rMVXkxwif68hLFcCVLMGpYNym7utwU12gHEpibPSszk1EjWiYafV3f6LFDLp6kZSAFh5XcSBM",
  "key31": "5dCd2tRmMcU8MbnTTQDYdszPny2D9Fy7NV95vNpLgDShfc52WkHSPZeNXe4H2H5buSnTNjc7aegjN8Kt64rjCARF",
  "key32": "4eCAs8PzqRTwA1BrnUj9aCRYUEwYBaa1LAmrttPfamU5oYSFwPqbVjpFCdMFWpmpSFep1rpiAPr7McM2n1JiWS76",
  "key33": "sFPYJuPw2XpEnExFFfuU6e8j4brVhxaU8a8zTweghsKPsNUqkSqmEAqv3ZtKzBLyFJJ9mQujMC2FxmHAhq5Fr3g",
  "key34": "5pZLUC1yPAhbPbG6VtyUKEPHKdK3xbwSpkyzR7yhhpTLGJ2hmAN3ZynQhWnBwB3EaCNufZtojmcvSpoFibmtLPEz",
  "key35": "2XpLimW2dBM6y1TdjFnasTNXUuiWiVjQL4gKg2Lxjy9Zc8xZbqiey2NFCyMZ6u8oG7974TKpq6j27zQZWXK5VMxZ",
  "key36": "4nnWpnos24pFTGAo7t3bHMpxp4L5qyzyjwVAPk3Lb3GkCNPfXcsFaY13MuZiain3RQPnyGHdKADrqrdApAfdFcN3"
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
