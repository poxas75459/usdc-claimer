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
    "5VwXpoE3EyxSCS8C6t3MewMFpE3jA3BYPiuVqPC5MRDx6gx1sf4W1qnb4FtRJwfyxmawAw4Vc13gv3Xv9LxzJBUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PcAK89x1zBh9xyD4hYWCDMeEZxAy5S3YMenbxqhugDaKTE4YzoX7BdUrBCFmzK64kLUN6PHjxZtmUKuqezHk15s",
  "key1": "LeCAmiC6d1Q5Fb3iFineuS93NyKDn9dzvo3MiV1XfsxPNQsUVB9116CAjzomkurAoSgc5zbzQ9pf89prNyQD249",
  "key2": "LFwauTC3yEGhB9QTMRzxbCsjx1MBomeJWv5LwcCZMtS3j2ZF8jRnMg1Y1Ea9tw3eo6KVsqCRxbjLJh9AAPwe5pK",
  "key3": "2fEFZuLYsXERvbEwmsPWB117PQb5kwgVJiNhCS2C8ikdWE3Myf9Ay3wB9rBbsPY5YqSuGJktgj2pvxLxxSRXny11",
  "key4": "2KHv1HtdZ7Ahsxjb314JXenCpSPXXjUnrfJf9k4u6PjMuXoXsfHqWdQLKgdq1Vcez46UyA5kFUSLSfvtVkVtxMyh",
  "key5": "38FZQ3SrYQpLcMFJ7gCZi5MpQC8r9Gv1uUHf8urTmeEoE9knuAFMBxVYjvLf9qTozg2TxH9EXgeEX6CQqve8wTGS",
  "key6": "TyRiVtJSJoq1m2RAaSh2r7vzqBQEHn5THovRy3cZByAK3oUxz6sMA2qAVv7fHSeHpyhxufajN1AWfjzpDND2mag",
  "key7": "61qYX5gbswprf4NRbVEAe9Xru31ANXVJ18AGhJ75fE1QW18DBBYNwwDHKDyStVFvyV4Tnm3dvA4h6t1VpM6wi3Aw",
  "key8": "285gsNWgW7ZwNd6xoHSBFuN1KLBY5fpuLb5aZWxA5EFs5i1wcewUBHKe6g5k96KQRPdVGC2C5EWXBHeq5XJEv7cj",
  "key9": "36QLA87h9EV6Un8XvFn5vWKAbr5q58k4yqs5quFpD5Cd6kszJVPT3Qwe64omcStv5teSZZcyZJ8MnAkd9eWNvozF",
  "key10": "52oEQkKCZuqGyoX9tjj6Sq4tpJmZfbqHbh1daik1cVjFqKHW3manfh39wxDaLdwWKA6cyJBVUsPjPTumKvSQ3hYM",
  "key11": "3Y51sdsAthAR1DBrmkGUoopQHacdVMcVKH2XtVauh7CgstEwrWCFDFv64V2ptXbEv2GVnk9hJ5as1HgpzZaCEtCQ",
  "key12": "5ja9zwcAZgotr5rwKL6W2y6eZAkGvBTo8BE2ATFsVB9Szys8CfCQrJknAjR2hypTqGyMiAdEnJoKE2gw5ZAeRbrg",
  "key13": "62sC7yRPdKEC64tyM994AavLzSbSetDav7NA883auUeYus9Jb2F28Z1rrT35yBabp8AvnrMU3GxCfBf4AFruC84s",
  "key14": "uGZfDtvpuqG5yyZ5CuKSXf5GdzdJEp3yPU44vMS14aeTK3NCCXyqzgPz1jhymY6CR3YxRTKvxStyHEk8LUroqyC",
  "key15": "395dLaiaLGAYgyYHfR6zewHN1h1NWSmSjJ8vBGz55EW8irjKN7pduyQ5WBM1sSokpWpjfWcxXsD2BdNVrUn5eJAj",
  "key16": "TaYkvQ3mUeDDYME1RasYuXVvbonsqonmcb9reb5pVydBxzo3eDo6vMG9WN9UQX58e8YSQcYFGtqnYEGsxpv3bVH",
  "key17": "kPveTRwACuvQqujNFHun6tvvurLynN9hirLAHjjCuij4rTWG6rtsPfx6qzJ7tnR5GrSRotqG2UT4rQvW4VMQtWM",
  "key18": "ftv2V6XWDzHKaGFocWTu9kRoUsK2w4AqYnAyeMuaF713DjXZt5CqijXAMwRPUbKbnkJkf9sgGDy7VhHZGdhwCWV",
  "key19": "5EPzK2tGwHovq93aKPgKtK8YF4ST2FBnA1E3NtCyJmw9SoGBBhzCDzRjDJ1GsFUnKQZuCrRTXziFfjF1fncoPwwx",
  "key20": "3Sv92jxCDrun75VRKMug6AR8WLb9H4KGA8o77fDiUmG8S8fDzB8u8k888Dj4gtdjPTJqUC1eS8eQt3f7AjY5xXdA",
  "key21": "hDCFdfvXG3EJ89mVUtJ58SVgYnaW2cyspr4g9G7imsHkcqoy2jc6zeLQTUiYhgUDjUyiHmnueA2g837MnMwGK7V",
  "key22": "Xhner4k9Xs5Aa5tvhHsjg4W8iAFs8t8ztNhMBbgVq8UoQQUQBr92b35bVUqPBdhy9aW8dNscww6b24oDu9PKGWe",
  "key23": "3fVeP5LGEHBh5eFyCBnJcqACD9VTbZt8eAVcctcsg3aG7Er7iZxGDP9qVyyfJt3RSZLgASTk1DPqh9nxqr3WKGZ8",
  "key24": "2topoJxoZFJmU7DA5wrWss7L7YUXqpDMxFSnocuMufo1t3Afy3PNBycMHia5rz4Goimo6StzJtJUJyPLzGKqBgUb",
  "key25": "2ytswWLuccurNiJXF5XFdugV9gWQnPEYxAHu3yQYsfV7BdLYGoKoZFMUYJPF3pyiPgppGwn5LcQ4ced4CmR7LhEJ",
  "key26": "4vWyuLVgzCYy8wiyqf9azyTexYMTFEq8ZimUJeMeEPreAcFe2RMTFiHudbND6cQjhwxw3rM7eQyEXXAqYEULcyrx",
  "key27": "4tq6xuCPMPABLW16M7j3ZPtkTbzqHFNrcfNzieboSB2yD2WjtvUm5ni1bu2AaN8pahpQ1WZ48ZQjTy7u2dSrkEUa",
  "key28": "4S4eQa6aFcyJEiZo81RrLSsZUwh8kcsgDzfsAhS5HUPJDzzJKea3Ut9NciuaSxFnYCkNK7RuhzZRDErhFRx1B49a",
  "key29": "4PVoGLsh9GMwbUZSTnN9G9MQoBBt6L8vBrHHdjwsgkasy71K4dVMa5EzMx73Zufd9hsZB5YVZDFAdHY2De8WUh1Q",
  "key30": "4gC1w1LBHXwwVpBTEdexbTFxDBEYXPdfVHDaXDjnRuGvEqahUvrXR8J8DSEHGXJPkcjsXhPw14n7C2CzoF8ABnWm"
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
