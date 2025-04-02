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
    "CvS6BjVYTN7t2wzoXv9TZvTnv4xz85ZWg1jrDvYkgT52utog2Roh5yYeM2dR7KYzhdZvc73hTdZTi7HXThfF4y4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Phygy3rV2eL8LQdvwWtU3EgWejxLVQbFDW93aimpwSRzRzSrKYBsGYzcVgb4YE8kvBVVrdG1Y4TfyArrCG6rXyS",
  "key1": "4WTR52wJQt6B9Q2yf1A8TprRownasP5Jdgk8DkPwsu9qqWoK2erGjncdn1p93gvssZUBaD33VxAL9TvCEBFpgMNz",
  "key2": "3zFv8o7kaBMiwGQAmUc6wgqyUNfGtHaCZ3zzX2YnTrJPWYQZdm9eTdNwtJBFGaQtXm1n3Pz9odWwKw88Co98XE84",
  "key3": "4gWdCpoEEjxp1qfzazfYvjiumKWoyU9X8ywRhiXbuNBMN5PS6BjEC8fCQLY2BUuvWWZdp2oivEkPZvs9RB3ZtKJU",
  "key4": "3uQBdLsn2T6YZDDHWyVgy5W8jWNQtgtReDjtaZEQhk1cgJB1gSuim2yMc9zJeAkq19U6NHpJtJqJQBzD5oyVwY2w",
  "key5": "3VpUzWaXK6isGiZyaHuvRNnWbUcD222ZgihSJ6XUj4P4T3MhThPPzGKb8vfxuhVJ1VndSdHfoPinRuUpRbdpEk9k",
  "key6": "5LKvUHxRxTziegUbBfcQaDEhssZWCS9Wj4WewGVHXwNmRkgfTsCdno8qGBWA9Qk58kWUa3LfeESmf2eXoyhQ8WLi",
  "key7": "3bTaR4Bikm5orVjn8ngSMpzqSWa8nevCChGpzzNbSnr9civs6gAPzLxrbjk2xoBxcgafJHJZ7ADbEnhHuECEdr2y",
  "key8": "2LuP3RBrMFCLBTidcTQ13VRYg1E8rQUAz1YRo4zPqZXgRCBxobJretMJUy8A6Mj4Dh6kE36pWB7B5UHfVedcDSNx",
  "key9": "58sMjVsQH7pgMj7PhVJ1VfHnfwdP6LQki9K77vjxzKNSi47VunRDxEfWhhngeu2hVHrUKoKbKuyksK1t75Qb41tE",
  "key10": "2Vp42exq9gDnwMkVv3bTRp4c7Y5XHX9rrkfDrg3s7sc8emnb2K1odHHoRk6MXj2g2DpfzT3uLYSGBV6ybh9qLbfN",
  "key11": "2kUZRR1WdZKsYKEmPQ4pA5tfUEJvrGEzTK2b3Gcuf2cMWhHqrJgcETSXqFEWFLeP1qdoYJHXPNKj2JFVBt3Y3CVN",
  "key12": "5X8Jw9LfSr9SuEgbfHm4FLFVzCNTb1hRt9wDS3KdKJoh1HgGK43tzhj3KsZDx2VVuoPTx3Hndrjr5qzNm49vHoDW",
  "key13": "59MTszsEFsYY3ovP6aXdbTo87EtncfhKfTdVuArkvphe3Gjsfi2G4h9HprvrRQgZGmNAdtMdJqYQxGaMBynzVbva",
  "key14": "5wPug6DWppfDrhHo4EMVKMb7hCDCf1gZAzJhWyGfPes3GJ44RJYtPLVJiVyqUMSJUVS9RxkjBK3H9iFcrKz57gZb",
  "key15": "5LDHxEQvy8AKi1CSB79YAc8gmGTvHEwuUn7kfdW7Wu19wGDgKp5taaGvV6GwjvQ59SW4Ry34HCssSpqfH1FDLED8",
  "key16": "5nuzJnxqnoSVpzXHTDzNFtNuW223nnD5GBPBi7ATVyemA3gtmPZN8raKEnhYUQnHEWnDqNjdrHLvYjZ8qNqFh9yD",
  "key17": "5GQKZgN1ssxKWUNTtzC6qGyBXFFLFAi9ErfA1YoeWYNHtSvkZMchMuneiwG5FZoSeYnCjA5rvh3Y9od2r41vc22V",
  "key18": "2C42gJMUzrDPQB1E44vT5TxBYJwoNhwhrVEw23Nxxgy7eiAz6LKsKCo755V57AiyeidrzzioKQ4TpKPWps4JfYVa",
  "key19": "415QPQfG1nNJnrVERLEe9oDLNYtYnxyFS6Y7rCzbhFtPfkVPtKJ5Z84Ku9bgXb7fMYApegQh7XxWWMXfhqLJbi5t",
  "key20": "2qbU6ttDftX3y4hNQDVCbYDxeDwQnrSuT3qr1igxGpNDt3afL1t2vGnRsDBewBfZfhPcVtrs5YBCmW3UfTdfs3kF",
  "key21": "qLvPJcQYud1i1XcbAML5puHVTo7KETeQK9SzU2Yizktsy8H2Hjs2MnCRSo7zunTKhb6bmA6saNUTpXzVxVRQVRu",
  "key22": "5ci73jTtubejKXLbkXpEyA9g2mgGtsqprPawbFCQAG9oc2qnf6axFB4pGCjTB71orhKFwgx1yUTn6rVReAHDhFDJ",
  "key23": "2vPB8M6xXcESHuvVgXmCyvQ3dTPko4PcxCvAyLBvgEy74PywGv9HN2rMjvg8UKnxaEd398DwrFyDfJiiRFKjTBQ2",
  "key24": "2xt6yiKhsVKY3RamoUCDBdWyiYkGitkrcssoE4J7GoEK495EqAGGH2yhkP9GmXfGPcZBXawUcFjULYM1WrLTg28K",
  "key25": "3K61yftaWUsKXzyk17B5bsi4NkcboKAGxqMdVyR6umxAGjMvRqCWvpyEVwWK5mMSQ7AnRrVc8jAm4NXLZnB12a8F",
  "key26": "232UVfgpq8W8GJfFJUZ6RGyioGmQxnTcaiAs12CMVmPVVcfLGCk7w3Ff9SKwdLcmFdRov2Yr54kTsiVkfyDpSnL2",
  "key27": "3NQAhjTqTqsw7dovN95wBRS944KRXFupLzGNPmL5TxHDk7nYP5Lz9W7Y9asi7ccKvNEFXTmspsbc9NtNURWtnu8Q"
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
