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
    "3JiXBGttr9KnkYBKRZ6Hhc14udgsVVnzqSahtnzvjbXCJywUWy4np7ngsdLN7Yhjve8ATdnsMZ5TXgLWovj1jQDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nJU5ANgSvCHBbg47ZKJ7sp41dGiE5JDFpB7ck6SMq82pyZigtkDBFyaGqn5Ac8M6n4oqXDHAoRPijKyBZQ6qBgN",
  "key1": "53VRw32q8HtCnaeFHuufhEUXUg1hKcsHDDZARBXxP3ndv67UoArb3FQjAZGDVptcsmbBceV1RadCdZV8VaLfFdpA",
  "key2": "42uLgz34vJJmzagX46Qg1PrDTnhnkh7Q4GAKZMUJqMexPNRWz1AXkWTgXcoMwAD6NuKmcyB43H5HxtjUfHn5HRpX",
  "key3": "2EeDosdv6Xxtqu6b2odWzDDJdg4tQqBfPBATJpQi9MU4nem3SRqHhDCfY9kNcrRkzYeT1aisXZRMPVRGnYnTUbmJ",
  "key4": "3dX8EpwNyoM4SPj6VY1yFFL9ErKRut2MpmsvzBbxiYpLWMuaz8m9ZFrroLU65YU2RFewZXz9mT5fvMFRjPVqz77P",
  "key5": "2DjmPLdUykMpPpT2aFTVM5jXyqjsrBwrBQFbCKcmyoXvN7w5mvvuMzyyJ34RhT7Q9qThL6R7iPswSSVTVrfAQCJM",
  "key6": "4ncVGpEv9JCuoD2EFQP3cfPrkuTM8w2KcQEb2c7UQwzEiJyYHHL4c3yfkRP3ff7Y7EPpDVTs1Rg54fxGRVGa5P8M",
  "key7": "5rSG5E4ubFQga2TnAztTdQQPhzNP8JiwF2YgmBGiGY6wFzpZngQrGA2pNCCnu7Vf5vmqLKr7EvxKjDLz9eoeTf4v",
  "key8": "3j5pkXoTHLVKcz5PgMuwN8R93ZNLohFrfr7HXz6e3rzZXsWUjipLdoi6EDPjjxUCDSEhLUtA1nGyPH98ySJF9eXH",
  "key9": "4vYP436vho6nmJ9rZmDAhyGRrKQF6pb6LprLDzA2yroudQKhCfPdWG6nJr5T1g44E4LkTsuV3ZV3EZTo1La7fe9J",
  "key10": "5biAqgdZPe3Q15iBW4T1nos8qDp8rv9AodDqyLkz5VXRw2qdhMCxHc2L9Wsc3Ba2oR8KXDnpUiJua5SMb1uiVnjW",
  "key11": "5fki4obrSvszaoMGtSPg6z2XRErY4k8nRHyfbXZXzGGZAGRie8S3CxvsUFQ8Dj6F1ZUg2CX7NaaPdXtaqwfjq3Mj",
  "key12": "h8tY3NSWXaEqzFhLUQuqUZsxJHj9RWu9BVrjdtjfp3pAHNE32yYv8Lhhr2jfnjJKmnHYTGASDvWNJJHPH1QHZK2",
  "key13": "2oZfQSvgEKyTJrtsieY48S6YzcDySzYkSaBY8JdQur2cXuuDFT89qWpEk9tegSc2UotqqUi3HaosdKaYHdD746m8",
  "key14": "4mZN4Kf4xPiA4a2oc4w1aLRyZs9RQ2cUdmfpj9koH7No4Lt9jGCnbH8PRqaHfUGnXoStAwpEz2NKj26MLVWUWune",
  "key15": "3nPPXjUJvUfweXZpcLryjUjLmdYJUnF48kdXRqrY7fABVNmSmnH8YPjDsRtVgrCe1NfuUz1CEAhHCJU2RdKLTxfL",
  "key16": "4eqZUwoQHPZC497EGXfX5NpQAjvskrKTEdqkuv8xNXuk8WeHDo939EeD8CYBpoP7sUPrcV1eRoRqyZwUj8PQsn1Q",
  "key17": "2zFyXnbiWFbxRnQ9yQX3pVRTg8G2pW56HRsiiRevKyrJoGDdR4BxGGeJJMSf4uTaPB5ZjQaoWyUQUaXqyv8RwqUC",
  "key18": "ULCGwqbxbJeK598wzC8qW5tK11dD4ToK4wxsorWGkM7D97yyxT8WL6cbBjaTugKacyYbCEGwWteJAHEjtVfaGAo",
  "key19": "5yN1zTcJgxrQ4HtXhmvicq8q5UDCqrkNTL6tooBkZE4YsZCXfPCSRcFcw3vFGYZk6wAqfFWZjxekV1tUozz5HdC8",
  "key20": "2b2MBjWrHNtY76xahWHvbDGkXfNdNc44TM98Lc4EXizFmyLPP1f5VbyYothWReH2mBWdTk4s1sWdSP9iMrpkfF67",
  "key21": "5SHorZnb3Xfd8xe83XzEYChkNDxMMs1zTdj4pkkwjNwkVvT3uWzuZSv6eEVaEhA7PapgJZtpyvebLG5pC2TVxD4w",
  "key22": "3wPRfsfjHnUAx76ZujN2jdx1fh7qoah9FSA4P8utqHkGkKS4jCXKzraJYhW3uo1tt38kEVipKeKQMh3b9PqiNtoT",
  "key23": "4sFiT9ZXr1K8eN6TUaR5VefXWnDgbyeobLFU2fEXveyFNMRwKJPBncSoRXYRw1RJghHbzNxP76etVNWRBNbudkps",
  "key24": "47NPyWquM4xQc2zgFUs3BNsViUAdJTL63YuxDwj6HfQd4hvKr9ByyNvNRief74h9yFWJfSW3xyLmEUseURvLU3as",
  "key25": "5dQUAUyfnmAXM3THkt39MuYLnppi7iLRzQdj2jZ6LmV4bQG4pMY3SyuEBU5D4HWkzFaBdW6s5oLdJPheHWRkKvHd",
  "key26": "2R1VbMRs3FDwF6tLNuhJZV3G7B63AWk2aUKDQWU7wq64qESJdQ1JysEWJXFe3NHEURvRi9BBcsSzXdLMUpWCBfqU",
  "key27": "4fciDwJyKEWkaV6nbRuoSRhdAwK6QLmcBzT3PzCBVgczZEDKRtMkHKmwpAzrnPc2RwRaQPjLo4h3mkSDKH4iZqEK",
  "key28": "3yWEzDN6xC9nTaiBiZJRTnBXDKkTrWxpeMsJGc6GJPJcp3vT58QjWE6W5Uq3zxvdbxfjXWf7ZC1EUifMUfgWWDvi",
  "key29": "5cuh68VW4kjrNfA85QHaxCCPJ7L9Wk4bHYL5UXBJoebMMD3MuhAurhnJrnR9ttbDHLqEaBt9JnVLp3mQ4QriSNtm",
  "key30": "bejZYNGLn7KgNBEMBBvEw9VutPyfQVXG5bwPaJPgQ64DPNYzYmTBPAPo6nFTdS3AT1BArn6X5r2zXFmvMBnBiNr"
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
