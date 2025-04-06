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
    "5vKCix5PKowfQ3T6ZDXjmM8W3Z2FRprjtcWeYy4ecmizRXhtvZR9Cf1SvMBiiswiKFek257kUozbuP9eqytrxoqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z46kgykY8nDyWS1E8ydk9mXj7UE6W1Fk7oS2Gdc8qh1AXjTR2JjZkx7zyi7b4dB28mkkhcvs1BoW9pLwL9QzRe9",
  "key1": "478bygY3azs4sG8pYswdrbhkf5J8BJLi78u1gjaLf4tTzrwVrTJZnpKYqLSTmLaA2VLxFApYhMR2BcCSuxCf9CpL",
  "key2": "5TGGmq7SvCbHDD7YfNNcFYP8yT5AN41jR3XLLtyXbifFioEThKRMpVAbZVfc2vtVmVLSS5miBFKdanSGSo9PaV1Q",
  "key3": "39uPw8y9WK2uo7w3iQ9mMVSTzmth6X2b8irayw113LWrwYHNJZNDVPnRJUJFrHeWegFnZ5yAjnGuoep84sK5aJRm",
  "key4": "2VUyb8ejmw6LnA7XmxN8rwJkT6hf79w94cfQ6kbakvFFVKAoSZaaAoqzCTpvT43sByy3rUxZF1xZfDmWXmC6JtSf",
  "key5": "5vUqEaWdedf8nPQmUJV352SXUg2sABHiJ7oqiBXMCkpno7TRy7y26kc6Hqwx37MWk2RGv48Aipbzwu9rbCj2L7WF",
  "key6": "39ZBXkJ8Srrx49CtLiRbLp36BqdyYdWondzHwD1kWSSTxc2c95uVTAoKAqAyA1CxjcFGcWRByCkt1G98AfjufxpX",
  "key7": "4HxMJQJTx7555xD78KvbYTdhzoVppZBDByfG2yCX6tKkHCb2SHiXUqpxYpDA2tj6afU7hNLh4WqdPKu6wAetyert",
  "key8": "5pbokynwJPbzvTDK4DHUUGMNKGrjmGdcfaqSapsoS7yBcFYn35aFoMDXoTrU8muDEoJXryVYQRoq9BpccVmr8BF4",
  "key9": "3rJUGruRW8Q1A23bq5HCZqZyLu4FpwowsSkGCku3UJW4jHmp4VF99dSGX5Jcq6sveRPS8jfhM92ZoPuRRT9vFv4A",
  "key10": "zxSUMYsPgG2cJ3WujGeKmXim4YfaA9vcMLnZcG4hXcJuoN2HE2vKj3SHmktYZNRYs6ga5cmJmiWX6ueMxqwQhgC",
  "key11": "CNHExFnshBxZRutVLPQB1geV3RQwqpCCrBDXEDtvKageUNWFxGkgTwdqtiGoDpnwPs2zDg1YtT9NNiZZJv2ZACZ",
  "key12": "33wpErtkVTUKXbStNRfXbqoakfXiaZYuJtPpUvu4HHCjAax2s4vnRJ9ZZdpmwBhiCcE3qfRT9tc6GrBmhmJk7qS3",
  "key13": "4kP4quq1FWLFZb6xEwnekEdkr9o4DVwVRQ7qA2LsfYXbAi3EvKDid3F7sUi8D4CJyd46bk4HCZLNwk4QHxi66ypj",
  "key14": "3tZRpw9npod39HNYe1E1hUfnusvo3avPZn8S6oq11LSuxYMY2Uvs8egQuEk45124PH5mVuvmKSL9qNHfqVzTg5Ln",
  "key15": "GkuFdeJVsWPHpTfmaP1E8FBULecYFYDGRjQUkDL3UbCg5GWGt4nnztfVPanDcLS2VSFzmvvuVUaHzcdbsoDhcqd",
  "key16": "4Eoq9PRMpwRKtXamph1MAKLaFvGwPEAkiUkqfTMY5cvu3bvya6dFm4czkDS95mPHiAoYC4aSHGLzaYNyznfSWZiT",
  "key17": "5Kv8GVncYfu1Hy92xesU8trvpfqo1Asb3ZP2sN2XorWpJiQQRgNGbrHio3bscrfN5mgCJDtPZq576g5g1bJ3PHaD",
  "key18": "4AaZXP46yVoxpozQCmK6kZ4vWV2YvTaqqopxqkva4cZKZVzENZ6Fd7DWwNf29xkoAK6sXRYc5TteE9NnW95QTcZz",
  "key19": "4pt6dJQBFA6MK74XnCeVAfzecW1QoMT7saDcX4nARNDTt4pVUuNgZSPveECLp9VQtGgLLra2h7mZaRjAwwc7cHpK",
  "key20": "3HhDDispJF2eEVBeYpYRxLjqf9Ta2fUqGeoZRmyYu82bHH8RLBJ2UqvVQH5YeGKtGvnZCSsymyMNnAzguPzw65dC",
  "key21": "546aTivpmQP2bywDXEnuPZ31amdRx94ActJvjR7RYfYto2KVDzDN5ha5W7X5pu7zcU4bw6hha3jePeY1w2SkJB6M",
  "key22": "4XtiCjtgq1askS8jyq1gcYwWUiqUf9EiYAkmuNsfBP4ztM3ftxJjkvXfqhD3SSKTGPogfGGymPq54pGPSRT7cApn",
  "key23": "4vTv8SRcTQ92LtDUxBKndjGjZUGwZRaJofXfdd6Jzk4gF3RikfrhxFNTepgKG8gmsZBZyPJ6niThuMkK4rWtoevZ",
  "key24": "Bf3PHejxqqqNLE8ErEysbjYWpT9HYTYwtP6AfcESvpfowzUG2gxvqWsSM8mrnH9AjyKteYdpLwi4UPubppHPKMN",
  "key25": "3fvJSo31cF8GBHTrHXfq7NdPz6daB3LoR5UWVpaR9p1fbyCsomBvZmzj3BfSXM3b7jzwzg5XPpzrN4XjqiX7TxPV",
  "key26": "2obYDtbDYKLBvrrxHExgZtwfb2Ry72SDxMzCTT9Nto941YCRTWmHqgtFVtthxDEnfL7oaMHEpkAB9TZyiQ2Mja3X",
  "key27": "4fLKi3JLyxKECJhbBW9AVWupFwyXzTHMB3XY1H5BZELb4YZxYcWVLW5WHXLgukk7aWk8j5mLc3MDLUizsps1wrD9",
  "key28": "3Kv1Y9TNga2wmmDYexthSeYXQeKX8De7JD43f54KX3Z9nM2x7qQ9hhqbWsKnxj7i7rS5f3SuieNsLiLCWqF9QQhp",
  "key29": "2bkuuaxiRJu2kYe9VErXJuxLkLVZNiviQdGiTB1huGiUeqTAphtnk1Z1XyK9rxnm7ZUD2nYVTGgp8snGMDrLWg3L",
  "key30": "4iAMZf8hASHcCW3vctTPxgXJmgM5zPrcCQDSmQGwqNka1CJkHHM4tAke2JCdCmVDyXpCLkQGYhzcLsLeNXHWnBz",
  "key31": "4anSMpuzQobt45BVm3xLFkhUfvYuQnZn62mJCDZ27XbzivdUBmHveY3wYhvLvAQAwD2aRHj1UqNNpkiKv5qyVumb",
  "key32": "4DWKdMbJWjurKVZ4V6WWLrF2XyJcwrDAzN52v1H3o1HNDN5aM4ofkRxVEQTWrZPTZHkKT5BQYxFTkVA4UemxckPF",
  "key33": "21UzRcCFoVZqjyc8HvfYpsqqyVcgGC5wNiEMTkn4rXSYgfjx9TW7Ra2JpG87mZYwfAsFwpoth7QVu1fEFzqCs4ob",
  "key34": "3zKHbUQtgbG6jXsrV8bP56qvWrCFhnuRFjvhbP11nPvFkFyGfJr3JVH5krVujT3bgFoXudhUUz9SkMYvG4GPNuTs",
  "key35": "3G4poGsuhmFNfSGKLBVhLNyxtvHtBfqS8Pw594cnjbGrCouRLJYYPkRYtC1xqxibkPPsQeJWAThfduAMA88y9ybc",
  "key36": "4oLErUPN46NqVoUZCEUfVyYbrsLKqQTgstQEGitcwQQdzRtXy6QsuWpXGu86WD4kt96c6hdYcZt4v9V1VzEeyTdN",
  "key37": "3E5D3x2cMEh6reZVfXKjAEXw88Ac4M137Q6KdgcgKXBayzGxL4bBCLBkpAHnkUdpEPvGfUQYVgjWYNsZrTfFRYks",
  "key38": "5KU4rp1z88MNArJr9kvs1hYgxSGVHnTxyfeZBTbszfm9VL3FgzcocZgeSJbNxGgbTUmzRo8PydpeKGfu1AmKxSUf",
  "key39": "DDmcTbxCECTWBnd6QYASAu4B2nsYqm11AnGq7soQuLSYwdTvz8Xzev9X7BWKSCcSt6fB2wSAAbmoFmwbTcMfHSE",
  "key40": "5iNxK2Rh9VR3TzjyQ7S8XQWzzDogKHsrPcAVUgJdgMkNBVLuSomDHnv19eeH5faLn4peSgEUH2c4YDNqBnde1xHU",
  "key41": "3wLQp2s2ePKPawjth5YErdww8Rwg2aeRG9EUZdw3wD9mrRWvaufzyjsaz3nU6cQihKGA6fHerktvZYKCEu29Ez7M",
  "key42": "5yktHVace2xBMWqvQtL4pL1j4RXHHULUPE3vdPH7c4rz1ZS1PoFttXTfhz6e74TZTMrzikoRdtorW2usGgY77kQZ",
  "key43": "NEPHKdXnoGKDkij87JnU124rQcpDfQFE1MazrHMWvdqgw6sJdFvM7jNXrAFD4N7i4FNCpGbP7tpExkJDEj6QBhW"
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
