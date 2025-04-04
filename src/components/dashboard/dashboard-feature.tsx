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
    "2v63i8DqMnHKDUKiFrP5gPUc11VVXJ2AhGJ9VwPN4MszTBMwConufaLR2yf57SWNx2oDk4KDwh2X5HskisM3Cz73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fu2p8WRrKc9kVbWg6iZHyY9seUUqo9NZG8ukMQyRa1UDWHmmRGGCytFf7M6RujoRYTKhE5zNuro1nDcMqu9HJ7R",
  "key1": "4SZVtkfqN9Ycp6tJ5JMp9Y72zDdFMyE2or4yrTD75f8F1VTqopHon4Y5WjPfjdLKsCFMcKVyQSkn1Ko26BjH8bQu",
  "key2": "sawXQ2snLpKogjEqaAmnF1pqtMSb49jDv3sNAsv91QMuJd1fCDbsRwuEbNRFHDSs1iYNpnzFfunVHHnuu7PzEvM",
  "key3": "4KjqLUJ2ADTzmzm6JXddG5AMgiJRTx2gCNz5wSnyqpKZZC4kqcZwpmRgSeJaXcHa3ofcrH1gAULs9H4KxfcXiZs4",
  "key4": "LnykVxZmiVHC51LjxfR1go1vhPt7rU2uvDsowkPZXmBzZXtpL3kmEN8P7KX62dAeW8FnV7h4yyXUVCR9VqaC4NP",
  "key5": "4pRk6aTbrvtwirRUJeK1mLyUfJ1xCqqxpPA8eoxkPrnSE2q51Gfxk7fVMBA5ECXEUCJqzdTuZNu4mvKdU8UgBQEf",
  "key6": "66cwq1eDvDwr2YZhX23Un5VEh59NdiKJdf3F32wqGqBzW3PKpMncCLNzuKjmNQ8FNYfASU9QTxQtmH9wjqmuTaHn",
  "key7": "4Ew2mfXEKVbL1PwB2BqjJygvKjJkhcw7NUrtK5VFY6JG1iqowpP5AKV12Ro9seuv59SMSMbxwEUchdpF7mWsr6ZD",
  "key8": "67PFGVnEirAYnmydFVyLYwDad6oXAcNJsnh3hhmENpnUtw2Lcm9WmjP3J3Bgj69zGnjUdd1p3LZYdnJktzpdmuRL",
  "key9": "EAsydMMsv3ignLEwWZum5ToMvyBFinvsvgQj1UdNEKpb42gYoh4mtpVbuseMnbxyQGUe3MjCTzR9S8JWWEZcJA4",
  "key10": "jeGkNrousJpR2nmC6XKoN7ap6zvHqYDJnP6usbZAvWSCbEfWcxE8Xgj3FSLSxvJmiDkAj6vtSiRXsZWmCjcjVAS",
  "key11": "3SHRYC7cfmUQV1udnBgW4Fw5bpPj9xDX19ViyYSMMvNUB1rvMMGyFCRqvZ9zurgXfRwQoAK8tDc66Qh9Vpkb8EoH",
  "key12": "4ZyfFTqXP81YcPosugFtVEY3jxztuz79yiVAX8FoUrhJEEMv2rjWoUxeCLgNYRUhrWf2ypwh8T2aoDbPwLsLpyvH",
  "key13": "4FxS3bEfLPVKo48J3wyXaAe2uk2XxLe2eh23PkV8uVAuRS7sMR4vwEodZAJCnS8zpBUvKTQRzCU3jYEonsxbDTUr",
  "key14": "2MgFuRJNKKwNQs7ZC5AxXpqKjpzwa8aJvEeQTPLqfdggBLKCuKwqHf368vXsfJaPScRLN7T3vw3aortMBSXeATCJ",
  "key15": "3ac9kjh9ThmF6iyXAbdpJi4wbaFAeEPrNy64B5T1NUL2kDUMnbJHXFTaTKN1aXib77NkaanPcRBvvDfWAMVGeyz",
  "key16": "5b5zrnewSZ4JYAkiiEn62Q13gYrRsXD1S8Ctvbt6G1ZqcC7dVyBxMw5dmRasFgHjbdhPwmhWgt5L1r1GoAc8Bsma",
  "key17": "4uic2ZavwDADn8VhwV594tPJ3t7HhUwpTzPQf599PoPcdq9JKix1UmDw9RzkGp866T25TB8KgzEef1npYsL1hfwC",
  "key18": "4xBAxiMDDVPZ3Ki39baV9B1361aJHyDaffKQWsssC3p7pG3SURnoSJUSEG42TgMpBATqCD4KX43fMuNGAFxkt3tW",
  "key19": "3k1yq1xJpX4tkbbsK1huD6ciizufNiLRUhh3fmb8VEcfkJntBhFPLsmajeF1mvcLuGj4cxJhE98w9qUUswXkXQWf",
  "key20": "2uSK2wg39r25XegLnygXEer7MSDCE7eFSvCuhAJWLsPEgoPqEt3r4yP4jwfWXXweF6aP8DhosfJzHroryVDxQz9c",
  "key21": "3tESuzaU5u3mnqqRoaSq8sGFSqV8yJFzrAuJSiHNeLPHPmj6M26WzoFS1cMDAqNkw28RYrZTkXXx1fHNnDfsj6yx",
  "key22": "596gvL9S9J4J5aY9mH2z2uxkZGoodvypN3ZCNfr6Gfd6DyysqJJq1tqFvGZicgJgD2saF7vnKpbpwpGBn8gQ5sZY",
  "key23": "Mpg4ZFzdTMuqNrbGwXZSgFbYHQkS79iyRaGW7SMzth8cwtYQVvJqWiHoWbUW3aRqNsdK9bhZd2PyCX7K1zozbgR",
  "key24": "V1RmoF8piAHtfoWMDt2vTyYZgGdhsFgCKEayYbrXvXip4wWdwB2VAmhnqSPrKvbrPJe4gKAkP43XkcMVvA1sxks",
  "key25": "2Bt2T8acjuUrnm9E76bkJQgjMyVmHZUdz27uWvzqMKSkwVY84QSkKXqXB1WxzVZ8ukrwnh9dXRbVD6vzmeoJtBnX",
  "key26": "VdpXhUURnBgSVuvGsguRKoHkmDzVM8LvaM2byd7oH5fvKBVrCSQsJYtfi9UsxZezrup8dRpxCZKiiBBFTAPjZhw",
  "key27": "5Y4A14NvT5yBdAK6PSDyNTJtofqaE2gUYg6CKSjhiK4FFojYFVaEqJcTy4GsYSkRB8cfxqyxnQwhpszeqgsorKjj",
  "key28": "4NNy1CR1AGyjwWdDQng2aVm9XGQxruF5vtQEqU7XqVpiMEzqMmPVMNB2mM3wfrSA9uxFwpwyzC7QkRFEwtMq8o4W",
  "key29": "4q2cs5DNydQ9Dc8xsDvVYWZkWYhc6wENMzvYiEXuRiELeQReXB2DFgRDoLCRUo4ek2iXNUgw6PT7fSiL7QRaeefY",
  "key30": "2siUwYX3axmEqQsU7pwwF7iXEtjmadfu6TDe1VKKu6S9sDj9BKiZNVR5wBkDrnRbK3JeF8EgH3VQq78tZLRTWLc1",
  "key31": "5tittVJxYdnemki1W8PbZTop3XsUpMLTGsqvRds2q3udkaowd86XR8fott3UqQLnDXEqJfgubeV8zvDWfGxVdUkU",
  "key32": "5w1r8gcamEm1D43hoKzbx5H722nLXp46GidGuUfYKabNffxgi1nXrfJCE11FkW9nwTfz2ymLqNuF1uTcD2NTsHZx",
  "key33": "zq8RPrb8huUv1khXHZet7asi8YwjHAc77FSmhGM1SQoYpmo8FgQDbi64wyik2iiaXPzdzKhKZHqEibxMjUNByz6"
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
