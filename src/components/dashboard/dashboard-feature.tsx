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
    "kXiwCDiytbi6MuMTiTYvDQnF1NFJSJkgYWKpWuArFYdq4QAj946iiBkGZTpw4L8BwdfbZ8QMuhmZ4G7BQVi5vNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aMDEKyVzuDTQ9YRLHpN6qFb51nPA6bn2WcRynpqnYUHhz8GDhaqFGP2h4tCEvdEiMDzTK7cxRCWqrtvKK3erMSx",
  "key1": "4TGRxc5BNzqiop2coZX8ktvJqQmGw8gxhSgLYnpraPZDSaGJer1cNKxf164c1zuvTwNu1UgBzJjoP3z29vRZ5Ab6",
  "key2": "3fksDF1DJPZEyPpUeNvbHjzoZvru8SMEfx1i7FQQFE2qkmDA6hbRNxKMmuy1nveYWxm7BdubUyKLMZ5Ev7Q497Y9",
  "key3": "4ymPX6jbPGTtFJXK2F2smzsVimnkBGZ2wcKFFrRf7Z1SfwJH5sPawitBA37XSkkifcGrhqrwnXusaQ6M7oqGx6ek",
  "key4": "4Ce45efDGgGV8CE7n1ZVFegKM7qQ14K153iSoYxvJbcVVSS3TautEocmud7Wn7YrYRaux2P6q39WbKcy1sUPsBoH",
  "key5": "2Scg7Qh26uWVXApEaqhwdybtL5ALJZ96ZMzkrphrZkk2ztBWHq7bKS6VQfbarGQygLnBr3RE1iMand7vdr5ETcf6",
  "key6": "2Hyn3yBSaKJ2a9JbxwAUb5KVByuE5CjSS1KbRvtni1ee9zP4wZJw9aZiAB28RbDWPVcrwGTnuVuzwQreQn39RaLF",
  "key7": "51gPA37HNNfVMccbNYvwHuiv8Ed71kvTLE53z1ashmPCguFpzDN9svN2tGvoHjvWjomz8VBCCjsxFTKrCqCCL6qL",
  "key8": "5yPsMFA14nfKAkDiZkpz3j3L31GZo6ktpkRtCRRpYJtNyZqAZfcdNFhKt744qnV2ML3Q52EisZy8TJ8CwNKCWHqR",
  "key9": "oob5NrTJnHXQk5bqahDghXz4jZCLmaskSEBrPi9tFh5vXrPUUkfsjrWXFR6Aym6WbHsECtY97DuvSxnBV37wgmi",
  "key10": "5Jqc3R59VVkhJsZC9jwZSfigisDtfm6SnLPKFH28C77yWLLawaJAS4Gtv3pzGAZmv5nzLDq7avxqeXgfSBC94SWZ",
  "key11": "5poWeYsmRZgWeArtWHhqJi85aRRPDdq4S93ih3HA22a3CDU3z5PWfZp3XVEjzFmb3sNDgzNxyzLQyxqE94Y2KPv8",
  "key12": "3bnqVSNMYNFTKD1Et7Rgp1RXSZqbhgpTy3YEjNLfWHfyw5Tx2eHxs7YFZoQUwnzoqr71e9SeBZEkRVeKvQGZpMZy",
  "key13": "5DGzKYZ4UM3Jn98VXT3sPE5284GierW3QFpJ63aqXLJaRJKiYuMGEPNJjN9H47urdoaBw9tyPmSRHpBbna6qMCWo",
  "key14": "Futu6TSqPCAETQAdcsiw9AetovSBDBCA7Pe47sGsbmv7nKrjTDeLveRG5ypuoJdxpddeBCGArMEX9jZkubQxdHz",
  "key15": "233w715LjvTJpVvLQfKfm6QXseF7wGkdM4yx6pTg44n32LziioKqJxckZTHMStsVGQkEVanNRMoHPzq94cGhkEbx",
  "key16": "61PNipEzpTvPMwTnSGQ113BHBAkBTkTXUCrbM2oVrrfzFnScNwdTEKiwLo3jcrnRf9dYLuZ78WKRntZP6TyvbpQ8",
  "key17": "dsJgSUS6L2caNCLQquED5PFVVcYCThvWVymgHEc1tWqE13AM7ub1bzMUTsZ74GfP2N4vLeJ7KW5hT8nX6iuWPUz",
  "key18": "4jdH4VDvHx7EcKYvwKxvnTjpNy5oph7FEkbj5JB3aSvn848qHKmpVJmuXLm4nMYS8csy1x1TbGgKyF9ZjBJnNKCW",
  "key19": "53WxFKfw2rBMhQ3vEjsqgjoKNnaB7MSrvkjnZbNRpshhuUpQ1d6RRyFQfAnd9EhHRKcpADaKir3kFCs3gUjeaCsx",
  "key20": "PF51Ng2mB2EGDV8fdSgMXNK3x7hiFRknCg9aHCCm1ZEurv1NJ3rhe4bu6MRUw86UDRUsKJnJRccfbVMdKiWGFWG",
  "key21": "5LPxQgJoM5MNSH1sZzGKEwKWDA7QR2bdeNSdX8AyqryfzyEpbkXMzmneqPF2VA4PgXgcGNh7B3xAdzj5cC9BGEnv",
  "key22": "5XJF9HoX1nrej8Vdit1u14m95oeETvWHzBbJ9La6kcVrddghybnftnGJuSuhnsjfBtaZjoPScNfZE4W5H7b2652m",
  "key23": "5cvmbuKKGnDDrtHxy67VefRycwsgWhGrot2hMcu3iL2Hr1Wm1zRpLfxHNBkQcc6hMN3F4Zs3ggwoR2mFR7GPbMzR",
  "key24": "BMfayjhqoXosAVFA97ZLRZBNBJjKdyiF7aHB2CkJTbusTZSrJEXagcTJ8himf2oabUS3i3F8a1zEu2FpkBRXs6F",
  "key25": "33VJUetH9Xxbz5G3gc7hzA4N9sqnUXeigRVW27QduFzV2iQQHkLEKLVjyBd5JFdVuVQbKp8qS6sob9DjjAngwsgU",
  "key26": "4GZu7VAGsQLZGjqooGxgL7N1PinGJBU9J1d3mjvMrjK83mDa4Vsr4oRkUDKuuVoejfq6R5vThyeoxR3JHKLTqefh",
  "key27": "5Pb5fsC5xb99wH5MTpxeQ3SdjG6wW5Jhs2V5AtPxgeieeRYC8Tgknz2AHdePQ6Kopqm1MqfvRaU98Jnng3JGKPxc",
  "key28": "5yx2NsKheV43ti3WJLcjRLMQ53LysKLrtYthzKcqe9ZY3Z4fW7bUGptE1f9UaFZq5YgL9u9z4jULqp58BZrQnKT9",
  "key29": "5bLNpdB4AzUNM9PZTTvPBBVncDFoT2yffdfPjZHuWu2RtnJk8BRcqquRs72TqerEpT31w8omVkgkRZU6QoSwanXc",
  "key30": "35xEXa3j2XKLZ4JB7DrrmUdvJsSErXaCUTokyCx68JUrcMR6PzBAwREgTw29PxK15saaT6CwXBFsNkuxp6vWRSt6",
  "key31": "rKBSrECCi78NoZLV24An9cyaVZTjXpVt7PPDbeA1KpoBjUqhH5ferXZHo4G27FVoRGiuE98En69Ksw9HpupkXyg",
  "key32": "4wphxeri6t8BafNu3afvwPDBKzUY5FuS6Wao9wgLWTpa8s7ZpfYboKDpmJyySxSQg6PTed7rVfy1orRsjmoMVAd8",
  "key33": "3nf7BAmnVmEe6UUHcNzy1sDTXcR7gisnypC9PuT7MenSWD1GzrUCy2ogBaf34dgDh21XZrHKAnZmvfiutqbX5yTW",
  "key34": "4tZ6aVM9cSNHh4emx8EtRbipMKnq6e63WuSRinrjnyMoJP3G3m6N7DGXJ5JZkDLK6ZJ4gJkigfd15ePQRyKtC3Vc",
  "key35": "qt3G8tVU46UG5X7pFJN4vCKf5V8WT2Y3pNQFTuZfgtXmKBKgcgrmhdj4nSUX4gJ3yt8GC7wLQuUo3HDq24WZrtX",
  "key36": "4TcPZdNoo7QvDZydBr5axMS2yZCdmDcsDRozUYaHzyXNMfxFM6gnZiJ3uLoTMZnWqn1jggNV4ejjzoK9QpzsrFCZ",
  "key37": "uF8PbsZBL1dFi45XXDPg554DwQRxWviBYjXwqGh1HCKqns2hAiMbVeEq8MiSsG3VzZq1SiPV4sz45AJEX1NXevy",
  "key38": "3ZFBvwsdGpts4zV4hEQgBKGLNBdmw3wN7DHkY3iQUwzegpTraSBuEbDkXvLW9ULAp3jgzgt4wCxWjLVPvsmGp5U",
  "key39": "KGvZ4B6E76Nt8ut1zePYeso3pQnda4F5nnDHuFuLjaXMx6DF1HGnpg8YK8o7Rwv5TtrpAkGWEEoMhbkQrtgkZwE"
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
