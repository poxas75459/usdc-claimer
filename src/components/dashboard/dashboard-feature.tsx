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
    "2YCafnKKTXXnfXQKG4pHEztQ39KUWfSGKTiPsyaycGk6HQWYJKLkkdnD5WsXZsfeUVnoLLe24nbESv82YWYNmZxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YUJaUMWzVzGaQQQzCTK3axappUqYtfNUeqV4rvzyd9A8HrW27tTPSnUfk4iG2c1LTtuPyZ4E7uPQba8DSrEHUUu",
  "key1": "4QtE9X5aWzwUegWFmCCUB2SLShbMBJJTw5Y1gtgwQ4Jx4YksriZpbt5xfHHbjnogbhMbQoU6y9mSpvnCxKKYx945",
  "key2": "5NSiFLer9y9xBJD8DR8sQdQV34yJPrNfPRULfLPBGLHAHDmhrpFa6iJN7mLahdDUb6qmoTvgfbJthpksv5rfWKu7",
  "key3": "3WSntYVGoQ7NbrG6tDt12a865hzAT5Ko4HUBD931gwybxgmNFwzeUz7QDMksWkRDcA9PoovDz9Yte9gqq3CEQpQs",
  "key4": "kyxsdjjnmeA5qRueSsq1M14bfpz2KGHhNPdNjVgNim11ChrG3RQN8CayPGbV8BTqUpa1GmNyjW25AtfpWJ7VYWy",
  "key5": "KhR2hLWRHmSsNMJhGVVXochJNJdiBTMRcutrnnJxTwEgkKYWxcx5TuT3n2JK7i8VC1dhJzh7mAhAzr6ZP2CB1rV",
  "key6": "3okNfoowvg1dGScw1VWHCRktLYenh5ho68zo25XB8zG1bFZEqJNHKtXTeXRCUCfeyxwNFN4Dy41i4pj9wZtgC64D",
  "key7": "4oLc8C8z7GNzQypV1Gm4beF8BRQ962qP19oL8J4QpLwtpAKnzMcfP8vjXbB8S2VAfDjypVH7rkCPCzTVRY7HXyFS",
  "key8": "2BRG6tMnShmPevrBacX9RAzXvTmrU6gyiMap9L8xRkEz3H1XAhjxFoGCH1HYDj2odAww3DgY2RcB2WmThEBBtdQc",
  "key9": "5AfNwzSsEqkrQyyVoBx4kbuSrXmdkjxfXSwHn8FjqcRGrWJwirrwq8XS61aHQdepMjtKATmZcVv52gB2hXEgBDej",
  "key10": "FGr2qCQwJde7G6DfnGEQio6b4chPVabQnqoDhzrziBukfpFfGUnVY2jddJ4sqYE66XGXxtd14BYhC1s62EW4R6f",
  "key11": "qyCwck3V4qbMqWJLz9ShpX131LTQykAR9jDVQXVbFRpdPHvKVuNMgrfUJAZB5YqVwBAZx36U5hMBh9nTqhaSSKE",
  "key12": "4JWtYRmWX8NtBGsZHTg2UefND43yHwyhAsuoZaAhtB7CWJF9mbFrJmPDiHJ2mVw7twzM7gMTdG8q6zWSz8rY82fP",
  "key13": "4gqcCxqiQUdHMQ17LTWrmfZwFqqoaZUFddZnn6wJiZK1T98j298nq6ix1diHuU7mZXUmeTxtL7bwaPvEgrbPfLmB",
  "key14": "4sav1JHfARUrqwiYBdgAe5T3hmvyGniwNbsRGLXJx7SoztSJdR4eCtymMJBmZ5SNmkYyjNUpz5uUx77ModD4xpM7",
  "key15": "3XwugHz52tQau5162jT7juiizfR6aAzszRL1WfhCpRDjYeXm4VFwQ2MFju2TMGo6Z925iWgzbH11RqtZzswL7Ub2",
  "key16": "4uxLwkZWGyXjRxCe7mGaiwsPtifoDbPNwcZnmMbcMpmh5XJK8mYqoLtYBBHfYXaHCVZrWxA5j64ZHn5ik6aVJ6C2",
  "key17": "2NfuwAgDUfZ7gTXE5fXWMoaPxNtQsPrCEv6BKLUK9z69e1qQ9iBrcZ92jz3UyL61tVzophEc7pBBPo8M6cJLNPYG",
  "key18": "2Exa19yG4tNKuNRYjjWiPohieXiKi7Wro3oqhUg4RSHKRaXFrsKuVdyHoAcsfWWiAirFMWMCN1TNuHmYNaByPWJ8",
  "key19": "3s8zHaEQZfDbQ6ffWQqD8AVjFvWM9EeozwgH5hRXrZvm9YMLL6AJEr5ncbDCEw67FM7k72e8uoxEgLF4UCHKz6kY",
  "key20": "3K59EXQyE6raDQE17WhGT9AW5a8QnrvLFVxrkyytAZUZ6b3Jtb1usyUKvUEc3KJDMGaBW7Z9KkjpniJkAoUp6jki",
  "key21": "5yszveNmCZe8CJufWKkeYmv2D9FefSjuEpzDjdymxAFHcZfnA7mnppBo1BAEHasnf39uKrLcBreoSxMW1YgrBTiC",
  "key22": "5z4JVFU1uK64SBaANzLCMJN8RnjzxKgna5nnvm6Hr9BUYyD2qF6aGdPCavkAH87LjBmMEgkuJbqUguPiaWW4uQfV",
  "key23": "4FhenQjidfAHwfekjBScfQJZnSC2w2ooFtCF92u4ZxW86XCzsaBE4zWFxrUd2pvu9wZSbcZv3pHoJWohFnUb5nhr",
  "key24": "tEw6V7uha3DBQ33kyYxHXn1dUvzd6rCdJ5PkUHwc3fbidGV3X7vKPjRmZnjPziJWzCrLK7MoVQATiV4dcD12tnR",
  "key25": "ggi5pXdyb4Vxk8M2CQyBAUFxEgXCqPVRjaRrvuAJ9myqVUeSV2dLi9BGzQZm2PBGTSCsAyNXPRr9EzMapE3WWVb",
  "key26": "38NVbrBVwmyF91bZPqCSvVNdtioDSKHtcUeTKfYbDCbSfxdHyqSKHeVnMtq77CmfFPVa6MzWbyMWLN9Eq4qWThmS",
  "key27": "2A5PgASH5qxR5dU7hndFPwtMgDPUUx68TeP1rHF273g67Mtb83BJ2SwNUUoieUHHRENaDuBep8Y67TqZDvFSx3nR",
  "key28": "AyX4RosgB6oxKgpnPMbu67G3MnCvYduLPgpzn3z4zzCWSGh2z5xYsiLTBH35UzSadG6bmk3GLLXLrewHMLy5BST",
  "key29": "3vdSNxANZYNubfciwzQqx8m8WBzjmWuy5GQGyMuJjvG7mymUwHSaG43mp7nj6TYY3UmLNY1JRYd1H2Km7FoUg1qU",
  "key30": "4K94CDNUnsHGvC83RXdfNRVtagCzAmHQhJYsBLFqTLxCWMGWy9eKiWGXXxgCDJGYEGa9fMHDfwkBQiczSzwtSLKK",
  "key31": "2Arde3hugi2kZtrKbTcdKXqHhxeBAA5gLVNdPLnvGbGPDiRcqe1HDYR5znd5SW1XEWCouCmCxgeb6B6fDeAKPFka",
  "key32": "7yzTqws4GhGdmVnmy8YMjh8V44rdf4TbUsTPddc22LPWaHfz6FSpLBwFDeoBEc8VzZ63uF4vZtDMbo5SmX9pzGU",
  "key33": "SFKfFGuqX9jJi4JyQyV7Uxq6PLmfVvfkAVGM81J4GP8rmqrctFiVsiKFSF4DmUE8Z2xABrnAkxPea3134tRNa2p",
  "key34": "2sumTtzrdJgoj6mZdpo1wEn9Fexegkbox6kKRmQ9RLpHNUv736GUEqCwdK2P9QgYYNHABS8VcbxjtTGgdW7ZKZP6",
  "key35": "DZa59aJH3E23HUpfpS6BsVx448AwpVQXKZ47SGXKtE9MpiN6zcB228oHg4UhvAqCMGqNJPxtt3dZatExY2BdyjG"
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
