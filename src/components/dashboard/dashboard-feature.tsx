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
    "2i5iYUPx1qPAw33q5WhsMVkTguPfbVzFYvD5177LaTBunmzHDmHB2ChfwCJFCBL7nRySWBHPexrzpNoFqVoYRmtg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QAr9PJR6tkRT9uyR584Qp8eB4ujnA3EXnQmitTjhhLxuE7FeAZ2vVXTaTHCvLwNFqNmT53fBa5gw96kXjsAqRmq",
  "key1": "5XGejW93XZk6xDDKEWvgEZB6mKbVEZa6SGH95v799bs78mq9GyXJrUQd1iZc9FffRyU6hYNDZ1v4AEujan1CThUX",
  "key2": "22cwRJJpusoPnfRSs5vMqFxsKt9zyD2FxwtJj3oct44U2DUQUvdQNwQpnrybdFZzCYsYRNSB85AxviaW3VoV56VW",
  "key3": "9ZTc5FNDwZjAFgLg66MHv8HepZe3AwzoGWue85wF2RD9WbkoJoppTPUW85WCgT2jQnDDcuahArgFKFR6fQDhyX5",
  "key4": "UHaMY6iMZ6fgAf8RytYBpACQnwYyCjgRfV81XErtiZz47y1fVa4wXvnh8iRXvSvjatdjRVt4BjT9tmaz4ZCu6YB",
  "key5": "pE9gk3xgNAM1yRc8FFBxrJVkn1FeZFehbtimhWKu7yifrke5KTbxEwUy2maZAswhkykXuoL7fC7upzM8NgHSeCi",
  "key6": "5ExRrFyFLXSPG75ygjc5RLyZ3EhyRK9hRodynMycR21f82AERpoKHvWjNG4WRC1jem7GLSoUnx8qk87vC5QSJKyU",
  "key7": "jfNznypMgf236x7Btr3CGCjKVvKYQMWKVUCfcyyyFAQydth1ctTQRyu6ewf1fSyE32fucczwzXpCyNC4V9dYVtg",
  "key8": "53qHuGpyoGx4aeN1yvVUeE8XKhpzFGt5JqL2QmpWsZ8bkC8V2MZmuhd3P7HMbMr73NYZxAodWcwhkCXrPxUPiZ2k",
  "key9": "55DpMobCBRn7ohjcZfsoWzuwyyYS4RxPuCezYdSyBpcmMU9Kriqi2zQ3ZTwdhazkHdx3gH9NW6YfC1NQsqL2zb8o",
  "key10": "2rmm2sTgR38WQ8SheM4SMcC5NQJaWccfDaPyESPthwaWHvRwwdp2TNKpo7XsFR25e5gMBvdBZoK4kVpP7xfp1JLk",
  "key11": "4hGCsWFNCDt5Ucuss2sKb5H2UwgGvJQqYVVxbR8e8YHyP6vQZyCT5P6kiFADu8BsuqsTjtMo4YDwT5jesyHDEdjV",
  "key12": "4c95KKnUDTDUh3nYqqzcL32UMNvG17CTdGcoVkoD3B5JawoKvZdfdgXXgvjsAPWXPfEAGz5gkwJfGLEsKmaJ2Y3h",
  "key13": "3rSZU2zaD1qRRhuco54yzadXdUDFNsDuz8kZcSKLC1YiCvF22VyGBbCjJPUsvS6Sp79Yb9z7K4qskfXQbR8uE4Ho",
  "key14": "ZCpXqz4DoTEGJPLeGGYrvdpW1LVrGhgtTd4YNm6NNmFhWPUTGGCuQqHzoN9MUkKpupqNVQHLqFesESkDcf9tqjZ",
  "key15": "WbdgzMcjmXKwXhn73tgdfFXu9fSro9eDiE3fjE9Yb7nRdFYQAqFhnFbkdYgukALSQ3mCHzRt3cmX6Rs7dhJPC6n",
  "key16": "2Bhgg6gBDkxQS2kbdkLEh9XWoECZw2wKedrK8LXjJkaz5dx4j41eXvoM3duM59YyEwVSXo7Nx6MSsrUwTiJfAxjz",
  "key17": "3pYXSgXis8ptzivuxcmoj5ZSi6NLFK47xvJXySHqEsFXei9Epd241YfGFCSgYJL4AaPJR5Ed93xpwjJKDwiyb8at",
  "key18": "4DxoSc6nXyXCCqDUrdaDdDVWpwsMte21DmA4st1zLRs7dhTxzjVaFqm1d2qbDz2m1V4UUkBmPmdkUULh8EE7BFoA",
  "key19": "596XQ1BNYBai3ZeSLBpPk9TSffdrntfz28v18GphhP7RhUWPaFgsodzn5cFMH6LxTdy731oCnRR6jZwoWKcXDp6S",
  "key20": "2HMkU3nTbcZQFF4rMSCWRxGPUDdU6paUwwTtcuNhbjdV6TBBpdqbKRZu2YbvWbGqg7HvscTvTiFbWprax4vM8Y2o",
  "key21": "5zf9GnTKYVGbjWAYKqc8JfPHveeqvbdwuN1KoVjnNv2KpmFFr4E5MZ9nvzPQEMVf46R5LwCK7JZYSUiEuFjusUcp",
  "key22": "Q1KaHpVJWJGjGYFShVjXXjihruVBmt6fyffN7fr8ot3hx9FnjzykhjxRyDeuBB6HvAMBNRPJJHVTUWQNdDzYBqb",
  "key23": "5qAETzjM4ZHm5Hq2MfDgxiDph62zUc3V7KsMEX5a5XeK5oa8AkAtgewq9pdeyawaig7KdPG9TErXfhbWBuA4KdkY",
  "key24": "5FtZc5pa8G6BQFd4R8vU3hE2zYFZLEwMiLdHDgju6NSGwdcAyBTGyV8HHyVFnRyKVskypNjERgdscURRyAnhikhn",
  "key25": "3H5kGoui2iszK9AnWQttkfibw9dMU6cQ1KkrEP2QsQW5qMzfmRvzmPVp8ddTPtJQrmLpsJFA7rLYxJnYmQcmH2up",
  "key26": "4totkURks9WDmFJWNMk889oMsXYaNdDN277ndFRdan46jYqrgEEPw59rqENrjNCnzDjZU2Gf7haTqXeZFcycS4VA",
  "key27": "knkDTbndSwYZsWUxaqZAUemVeLzn5iffCNNMgUZRBdfjyGZ2fnW6ou655Q5MtV8HLBfi8h66vsaEnfWW7kMaHwo",
  "key28": "2cKv96VsiuBn391ejBvdcNCEsdQuNDFxjv9n1yvAhxrrqmg7DTaEjjFwwhifFDS3Eo1AbYTgStNynu9V2pn2m5DV",
  "key29": "46WgDe1th1Qh9jdt9bccmXu1FeLRh7ywb4bcLM2fbgNDUiHzR2DELVt2TZwcR4uRKcxvvKQSAGFdi4PzaVxLBjgr",
  "key30": "3QZuuMf9VYEBLGb67x1eV56KMkDAQQHD4sReYk6Qf4K9MGjA3vwTVYT3Rp1XX51nshXiuQtzkWMiNDaHXWGPha5B",
  "key31": "uuwUtKhfDdWFyz7xRrJn3MH9tZRTjJUyPLzshKi6jP7fHV4MkCrnVHhGRAi1XoF91u9KcFj6ppEKSXysWMm2SuQ",
  "key32": "2tKc1U3MgnQYapBzyMEgsDLcWRcgH9Lwaqga1e9cXjBp8abaoFEhC3kMnBARSf7dzdxM4Z5hBo1cKSubb4G15kSw",
  "key33": "38GNxpCfBcmiK9WmWUgw5Hom1dQkSCgmNnhTyPXwppQh86n63L9Ut2KXT7YgVq4ErvHb2364zgKnN2Kx1UQ459xq",
  "key34": "2GdHXTxthDn7VVJN4Mp9zU8nwNMChmyTBAvLZF9fhpJqfwaH9uYBYhT1yRALZ8Y5uExfynjj1ShPExUSda6GeAJ4",
  "key35": "qoHnoA36VyJMA4uGTHAST2t44giTtkMzSiBRe5YD6guptVNUXgfsgZzWs19XAd4739Bfb5cmmnWLwdm2sXTaAt9",
  "key36": "53AXAdzqWu1LD47KWv5d5yZfbonoPuemWvikz9Vu1nsMmzpYfD4sp9K5NfX2Av9tJi2G8H4HyYA4ZKGyjBqgEAtX",
  "key37": "apPywNjX5RaPy9UqDiiGRSQcaCNt9x1hYjPYvZLmrMrvH7aMN637PLMrhQKVnNcW4MpRzTCUGAMi4QXawq2keXb",
  "key38": "5VrD6a6c5xYXKMJzxVwJ8Tz61VT48s57cjDPqofGKdoW8V4UncGsNH8dVN3wxtuEBnaNdvE4GyJv8Ve59MVFy2FC",
  "key39": "2YdLmB61vDRTfK5Kp5iqQ5z7Be4YAQmp6sAVZ6vjnCqktLvUiA1ArjSJSKXUiNR5LqrEo3H3YosEdN84PoSLwYV9",
  "key40": "2vYQiN8xwSQDJEV7MyhmwDLhY8ok3MATkfbFMFUg52VA7zQ4aCtpdAmxscEQNtj2dA69oyqFL635DAMqXXhC4TxL",
  "key41": "2a2JawxCeTDPnGADvJE4JaDegjiff5EMMf1KbkVE2qxBQY8jSpeLqUSsG1DRbP1P7sNv95N3jKLnPkLxypMuf7e6"
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
