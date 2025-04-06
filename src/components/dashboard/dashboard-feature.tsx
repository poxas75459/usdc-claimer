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
    "3EgfvZSEPbK2wzDtr8RPpwZAVRpJ9DnpKsviT6SfFQ4uoas9GV3NztUWg8SvLHXtX6hUtxR5oPKZ7yGTMHFbEQTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TCJopEGNdADkNwWT3KLjDuSsRBybuu5et5GBUEdQzhejxxW3uewnyCb4LxLgbYxaAfLicqXfwQFchBmqgj7PNmE",
  "key1": "4rpeEVVCkWW91DcNzyjR5vxXBYo5eHFrAE82r9fYJLyqATTZ4x6aGQUsEcve5paiVShwAR2gS8HNLnJ2vs47PPRH",
  "key2": "9oUrzXrvCkENCULSmEzM3Jwzq7iwKFbjBT1ycaH9UWgdNTfpZG8YoSXDTBQondjHYufVfhKEYADcCgYZmFTQXKd",
  "key3": "482oAQBDrT8SjFam7NPLhy3XA8YvNTo9eMPNkyhg2mMrQx7gyJ6nhtK5ne4ZRpdqkdMJBYsgHsHKC9tt4pWQz6BA",
  "key4": "2bDMNeLAa5wrFhpR9F9cEkVWV9sjNqj2d4AVVRUPT7bRcZfa8sL9h82W2Rx36FsyKdiDjEM1CxRRdn2wvSCpqfEr",
  "key5": "54U4jGRHJrD4MkSWzEDxMuA5jF5ioem3rpjvgEadvAR77KQNXfMSK4w3iCdks9sTWVCWXLQxmtNNeMg8nxnE27PU",
  "key6": "3yvxHFx3NydEpdnZCt1mRg1jTq4sQmAuS9NWpE3HnyucUSdyHNo1fhogj4VbBf2TGuA7WMMwCTVAWPqhk7dvRx3o",
  "key7": "2Qgqako4Zqjsg8JTyUDQ9DSXPMNv5spvhag49AP2HugerioSgAQPiu9wQE34QgkL8sewiwdgqmjzt8fRV6JCTxa7",
  "key8": "GkrsCLsASnBUkSTnjFvC3h19Md8WaYQb9FTrzkh4PuJMkVSzvK99ZMsobEAx7YBtBkVa2k7D9npnSnY2c4pwLB7",
  "key9": "3U2jGYPHX5btj1iAL7QVU45qoMjRcyq6KKQFxsUfs9LMxc9gPJjLSNZJ3fLjrSpKTjy8r8iHfePgzaa2jbHdaNnp",
  "key10": "3svjnAFzSD95gavhx82rV4Ac5mvoNHFbCi3GVtgLNob6JJL3jvRTAHt4fdtB54Fbo9kBF6ZmJMfzYakb3ahdcgHa",
  "key11": "HTJ47SrAmFzRx7GXNBwiSvpNfdKwLMtcEBDSCfLHCAXGVb8w9jVTKpkTCLFGwB2wTs9NjE6e8Juz6ytczEnrrJn",
  "key12": "5vPUQ1Y3WHPX3pHYCKAh4rvCkPjkD6g1nMwDXTPSNumgL7N4yi9dH7yDzsfCEwk8TnhMnQ7EQ8Mv1J2gRD5VyEwm",
  "key13": "Krs6QSfVWRxR7ZVym7o4VJ8cHrRJ9QKo8gJ9Bxx888pr5fm9eVjGPDtx8sGR5XwGjCYBTuZw5mC3iVScHsS8hHB",
  "key14": "5n4Q9n5xy49u2MaJ4J7c5N2ZisAYnBxe8xKM5xm4viwW7ByfPXW3YcJBQiqdTXSi4vcbuKkcdR5SNKovx3vejZi9",
  "key15": "2kgYtwC8fnw7YfaQLckdh1P7SjKSeHbnVm7LqowbCrkzeGhXmQx4XpPZpFYfMGnDX2gThp1jrd8YCgg94zpt1jW7",
  "key16": "59MwUkwp4EzsjTAsR9Bn9UY3fkN275NQQDhNkn7rLRYwGaHHXkWMTJmkgiFM31iZbeUBNNjtkuHxJivTc5mH1MJQ",
  "key17": "28e35A78qikm9iwwmRzVTFasBhnZfcxBJrN759sbNgQEg76EShoYPaR1s138TVFVuwPxR5cqkF8AgrcjvD98brQL",
  "key18": "3w7afgLo4fQZzkK2ooYa22tLzvvaDukyMwWy4Zac5oxR1Upgop5cS9wvnT3mcw8LEvZLxdAz2KAzJQc8nmQ4NUKi",
  "key19": "4ppjA323xCimAJswo5db3H9LAzLE54iKAj6QBrsYL1thhjD6AUHRTmw5YachSkmPtroqQin6ibmtMsZdZErDPimG",
  "key20": "4UJ8o3HbzS9zMsD2yuNhJypxp4F3tFMkf4CjpNuQXjZSujGpGVqrMLKpiYkVEVCZb4AxwGwjJ2wQgkmmnkuLsNhK",
  "key21": "2vyXUP48ixQ8iBk5JJQFK7bwCXvChFGeXdvwGrGdCPLjWEvqTMrG798SGpKxRVr3eLkdMcU4FN1hVNJ559BV5LbU",
  "key22": "4PV8aFNSB9mwZSAngpfSDAuWCNw824wnkjQDxf7RUsJyRS6vyZqMjiMJbyDfSUppYxYW73hUmQY3mJYotb9WNTsB",
  "key23": "wnn2N7yu1LmWsew6CPQhXuPM5jX6KD2BshP34KBmuqEeHZCj7cDwvDdFZM3Vstuvp6XUbUQ8ivFoASqpoSkZCcY",
  "key24": "gxh4T2TGNrzdg5zsEHr25jZyjzoGwdkif87nRLXkSpQJCPKipQhnFieqijN6hFrYFTWLFEFcYsLhuKdpiD8xWBN",
  "key25": "3nbmDB45yKM26sGvXR8s2aU74J3gEszR4wEz62GUzrH1Ho4srqNvJScRtrqVUnqvHACGrP9uG8EgDRCJg98KbTPA",
  "key26": "5MMDJ58QCsFVzHb83oEu91WwxAc7JVbY5eK4rXrHy9t8i13ShxzVBXcYMzJAKyHvJ8wxqNLPnTKqp7n5mrhGjG16",
  "key27": "4eyk73sDypEgm4bSsZdRG7Arpc38Tca7NwaYBfeoQqXRZiynahcCdf7N774TMF1JE57j9FDQ2FWFfN8NcrvCK8ZM",
  "key28": "4ofXoaPkVeZ93hhJH6hLPuH3SReHsJ9Lv24q89VZNjjGQz8NAWwgAiAnfSjbudsMrtcWysa53xa6WNQUbnmwNtrD",
  "key29": "4TCbrS2eHwQzzzVnr47kiD86xNyUhTyvLipFJb9wQLqAB8kSCDGsnY5Tiz7mm1Vmap5dmBZ8eTdky2QNXPioLeY7",
  "key30": "626uUrHgMZrPbYsEktjy8cP2kFWXKSB6RuiU3AkhZpYZnHsWhKvrSEhgP6SRJWz3wmVskzS3j5ifKPxJprpx52bi",
  "key31": "4wHbdnJUdAweb21iayGP8qMdqhbpFG6nZkhNpvxbby3mkacQyNj6TTckkopfBg66spTTnJd6s425zerjttbqbfe9"
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
