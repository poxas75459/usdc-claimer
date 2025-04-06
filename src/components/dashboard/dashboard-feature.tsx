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
    "4oRUSqMAvntLCPHqVDdoSejxpsyTUCcnt7cPXcZZgCuTuXvPxNd3eCcBs1AcG1AzNLXp8iXRetbMdYpaWNfGHmyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43xBwgh5iQ3CwcRXcFKYfVna4qm7YS6HcjvbLcPnZeidroHBov32nKscYyEuYtKHBrw33R1Np6YKpemsVHKv4mK2",
  "key1": "2g9pmGRoBUAxJbNrpk5ApKasHfekDBR4dJA81fi17AF9V2sfX2XBus1EBSUvsDUHsAFe8RX9UDVswuJfNdyhAd4w",
  "key2": "29gV6WbcMtcdWpu3nZDMkGVkafnAzsAT2FWH9rj51TLAsjwxgzF1XrnZTbrtKPoCvU2w6cJNWL9UJjBYWZk6qWKm",
  "key3": "SjUygF8zFkTLfcRy3fxFm3z4d1xJJWFgwPe7a9Z3oykEiGHMRT8PUQy8CVBtEoq3HS9pYfXoSG3tCnfwTB4JrMc",
  "key4": "2pKnQxHh6wbgpTqGr9QQcDnmV8CYmEJooPqJnPtBMKP2yPrxyTQPwipYS2rhsZXCMCYWYgEAz8Gy3SuhimXRZzGL",
  "key5": "3zmVy978qFCTRoarnTr8uvxLu1JMZEpTC3pd492d3dPBKgJCjUHMYkXCJ5uDFbhmm65PRS8y4y2bCHKC5JHQYLk8",
  "key6": "4aCAJosUrGD53GvrGDmSm2eckvRUZ79ujfPds1r1qN77AeWuLMUgXsjLa85yhoeQh3d9H5sj5J6ikPSeGPfbXhyk",
  "key7": "4ERHG2aSirYvkcSpQvUHzeQFQmHmRwqNKKvJC4fUXQB8gnaRac5DzSFLpPPVeGuBMXRe3WdSVuj5dusAgpmiqHbS",
  "key8": "5YoQfjownifyqoc1LqJjaTXhoTHVuMN6Em215Be92UCZ7fF2wmwUD41fm57PJrPN5fMUU9hHCSoJ6wEzEM2orwka",
  "key9": "2CDAqP54UwpYTzMeVAwNstP92iZLsZxwzywzdQ58Su6K6BssPzAtccdpZ2Yr2VLvKKVTasmCbEGwfZdXBH1e4ihv",
  "key10": "5VACwW7VEk7ZJKLYu4BcnYAEJ3kdybrFj1HweZGA7L5dyi7iktbrwHj8SCrjDLSW54Jtfnv5gQvYNCHZ2w5kfXaF",
  "key11": "2MYwRP47nacs4YEBWibUVds5DVAZMuGJ2ZgPJnfiphbtGsbzPaKVzRhbonYaAhmZATbfxMeWniex6Gn7sR5LXuDs",
  "key12": "5xSZn2KxeGoCbh3G6qA9uXYaW3Lsyfx2pRcD8wuL2L8HzAC7SmMt2WLhcAxdaq9JhVqSM5WuNntXFbc4LAbb611p",
  "key13": "5DzQUjfSC7uc6enbT4qSUUwGUXegMfG21D1F5hXefA6B8vVds9mPXnegkiTEsMXSf6YMKKroDndBZFgSswk1zWo3",
  "key14": "K6x32X2XGuZjMExFMMNYendLSt7SAdrwzuQV3HkxqDpgSRVrk3ADAVLd1wXM613u3mSWkHChRZFmkQRi13CoKDT",
  "key15": "dfqkxrLZVEWYSo148BHndCkFfutdpfigpfCEL6KnAE1HvBrDTB8NJyXRwiFTANe6Z41R1W6fKvTQuM6hiT7EDMc",
  "key16": "3ZkeyWZfTyEr5ij2cNN8RxMLMC9mBP6kw4ZA5BvVQDnV9uA7ydtG2baYidkKBKDVoP2G356CHqSfDeNTFMzT7xG9",
  "key17": "3PhEZkhPx9DfMYyGb5SPKW2RVCLFVsQS7XGVWK4UMZTR4Xkx2ZpDMhE6oyHKR2Nt29wpD7SKFEC1ez76UXSRWrP9",
  "key18": "3vCAS8zLsiE5V6Y8oZ4zQwPLQniJU54hrX39vCL4G3hnWH73xDeDaL385nTFMw9oCoxdx86qT1Ba3uUxdPU7MpPr",
  "key19": "ifp5ZugRgBRm7CgQ1zbPj7RyjSCQgrZ4XbGzw2ZTTUEYfscn6Ecby1GpoY6vECqfDjXqUjZU4sX2zhxBAqBtgLa",
  "key20": "2d1weFzpLQw7zJBoth1ewxCroNKkfRDVzGuYQNVzd6oSeGsx35tp84TyN6RZUUVkjXgFC2JQ8RwE518bVpfVE89z",
  "key21": "3vXxBcyhr6GLC9BWyQpbfpe3Hb95YNTuLL9DNUTda4RyRfYwWummHwYEiWXMDAAojfeQKLKNTWtpV45EpKgNbaap",
  "key22": "4e92gLpyfxfSC241azum3Lwxoq7UxLuUUbUhobE5RYbC67WQAR9RangNBG3qe3xLdUzz7vmRB1QdEyPjihKCQHap",
  "key23": "3SJCVVaq22ZVhpnH6Vku9pVAskFVp7dVm1URngnep3tWiRVGo4cGmLYPbFYYqPrCEbXR3KtiBUEKGsRGbSyqenBG",
  "key24": "3K9ZfBdhcNjvLAWQnt5yecRi1LhM7hnLZzikstoqm7s4yhSTJiw3fCixkk99moKwvXSso8n7bxG6441RFAraxhi2",
  "key25": "65ucBXguAsyYMiEGrWZ1u6dyMEh6xsQYhes45YbweLbkV15e9DxRkfqFR9qLDCYxG5mEBjF1moJTASPqx3ukYzBN",
  "key26": "2LaQGu4ovYe4zQ5x142HAv1tpAQgWoAdhudLVYgifG2M5VbsXjbu32JDuZtWf1uBmwfkTfBtaekTuRqLujSqUVxM",
  "key27": "3EGjVxy5UG6EVusY9XKbkLBMekepKoaN59aDWgQUu1WTrSCAZFhZEYVK88xUk35t9ADRGvY8RRy9yECu1TC9Ng5J",
  "key28": "2gav3SBK3DCGfzLMsmGtDJuKFuEofPwkGXgnMJFM18bk6oBbuLBxsw6ZnqT5Ci2iFMmihwrAwuW3MfP6jaTFmYSg",
  "key29": "2Hg94nQ3t25yD5RCEZGysjUaVUhNPQH8y4ZJ8VSGwkm2UaTDPP3dGHm4PVjVDahvH8djkT4gTDuSFjAiFBkBLyrA",
  "key30": "21VzuaNakxNjJX4mNbSkD9V3S2wYnoZBPtBhqXLSxpHcCnmdf5ZfwbpbsCQbTyQVKnXTyNgTi4j5bCja66KHZuJD",
  "key31": "37KfmwiJCgh1drRsSbpP9UGRzGj2i3sMd6iqwj6ZB36QkgpMebwWC21vAxqZkHus88kr8Kfe435Muh9nDUZyN5Lm",
  "key32": "4H56FLAezYtjYVqUnCdEpCKEtJrDc7wHWXm8RR6eWn1aSUBdmWrjoNuG9GqjkEFqYpYpYwuEkVTsrBFSWxeqYRiv"
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
