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
    "4XUBsKRoKbPxQodXjniJdayFPvDFXb5Xi6Xb4m6Qb8517j1QNqVwDE81PUqbRRUdXH9edH3WwngGRDmaPFvikoDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28R9U8k4j7LJFSKaxULVHPceMYoNQfUf5ju6ojCCzZwcJq2e3LQMsH5C5Pb5pYFLsDQSk32gsjsTJWhjDeJcHspk",
  "key1": "2YYXLJCP6SCEEuihHAxLDEYxWAtw9ePYiFS47SmoVWZ2XUNKGCPcQnJ9PJ9jyGBhcU3uCaDGNVsijvRCeGuxaj1t",
  "key2": "446Uhmj2AYv7zxbWhhnxjf3VejXpBgqeoDDU3sAcjgMGHVL5isdUjfcpTwGN3ntdT9Kv4vRV3ZLj4sQff7QxD4MH",
  "key3": "481sQS95cfqPNMzUB7pBzDh87guK1Zv4jP9N4ZGPV7PNghq5TCB9rSsoFiBdnw5AHZnETfVTcb3kqM44uTuooVKh",
  "key4": "3Dnzm93EpmXRvzrA1p5T5DUY4km2WPMBcDKzBTiQiH2HuugVQTWUZdMuHaV18MNhPRon7DBFNEsTwMYFm7Y5rgNe",
  "key5": "4fMq9Q46xTVKBBpKcpHKkaLs9v8TFs938H2HtZpyKTLeeUhTxeeFQPj5chnD8aPRdXPwXJSAuvdY4xndBEgZ2x3o",
  "key6": "27CDsqvDz2AvMseYNEKeB9CtdFBdfpkXubcx1kmWUzXnfQ9VeAQmc6WFc5JVjpGfGRQEoCi8E8vcbXKudRHotBMs",
  "key7": "46W95YrD7Bn5rYNJwWZzdUjQ3cW1c2SaxXptQBDtZGAsSFpH8Wr4VDhrhMLUFdPF7r8Z5rqAqJHfyrxS7ytJ8mP4",
  "key8": "2Za48piN4NZmSRRbidnRkHnTUwbYqHtjXyRuPScMPpX11ikjNAuhmDfr5pnXKRXA2t2Hk2wjfekB9Bfix7Wz41BF",
  "key9": "mybRs8nhyQU2rGRR8wFghKbWBVcyDrHknFDdCMuGSGQsjFTPccehvENaNhT4d563qM8CeGVR8PCAJzKrDMNimt8",
  "key10": "56DLSgEK5tSKsEqmN27YtzwHGdYXnt6Sp4kWVb7wZZi7rds3ufgqvknDJSZzNG9UYX8RjwRL8Y4E9jpXKS1xtMs",
  "key11": "2NrQ6vpEQR5iBmTTSHhYFwYekPJE6qMChJwLUyZNsSpkA8JsyjZssP7UssPkwU9xSZf6UMadRPNWtR2otrt6MSpg",
  "key12": "YmmQgMkdw5nLRunp5PnZ2emmAurN4xRMtaQPwWVQXTSqZUcKxVX21w7gih2nL2Q1nfByH21zrswmhGNKbGotLn2",
  "key13": "4qy1x6T4GnRFhirnEspEEJGLi7MqwM8MGmVtnVVR95iAS2pdLsKbHVGWMKZh4hrzSMhBKovm7Gc1dR28NDSjvV4T",
  "key14": "2h4p9uVVgMox2C2iAUCdzHysXCDKuWNQR3NrtnPc5MqinPCF3ZfhXL8Y9PpbcRVjmJ3WeTbMb6zE2vALRLM4Krx6",
  "key15": "2KFupe9Yk5dteks6ogNRqLJ1GQgoaSRP7UQAgEXq6axGasiVQ2TvL1YE6c8HjQc5k2k7V5LPRZYo1iCC76cnGe1Y",
  "key16": "7ENygjDkEe8Les1H2mDRjYGqLTKejQfApxUNmcFyrrxvC1WTNprcPKea4HvrkRRfN73F8ZHbHhUhnXPJ7AJhceA",
  "key17": "3b6HZghJoaPdamuiUzP6HSndQbRPAAk8JQkSfPPrAu4NwaTCYMj7NCc6TaEe41a2t5tesr94rs8ek1iy1LuDS9iA",
  "key18": "4MU5WZc3Ddz2zjuPcNRWGPYmvvonJdKjUj8aXra8E4kgCD4d16F73144KsL8AUjNPrg1RZrHP3JzeDekcUinBwFw",
  "key19": "3xMwkQoi18Jrky1oH5ygmP6MykNwRHPBwycwqiJ8ZmibWcQwKPNzwx668adKLvKuy6q1oEFkf2Sbfw4QoGVGGKF7",
  "key20": "4EDNHWVA4p38fuBqBuEU1PbS6MiTs2U5dWCN3JpQ3iKnxwHsqvqjwHFzzasUCedbWBiHYcERanNYR7d7xX7q8cei",
  "key21": "5LTZy3jUcB3D2GvPPoXLcvE5SK8VeiKXzgzD3cDBEG8oaWyEM1AD7xk4YW2925q5cTNkkwp2yAsxh1DLQ6hUAjDT",
  "key22": "48jAdc5KCvzCRRLnGPSAiaCoScn8Gxsm62n7rqRKLTGiBWKZkpqJZNz23jhJYrPpeNmqYMRAcvaVuir9fpwekquZ",
  "key23": "3UUkEtxCUQNnWTvSoRKRAeZGKQD8BgfzMvuANZRtb2Hr3iF8eqQBjuMiCRPg351V3mbgJk7a3UNrkvFXuoFJJeCy",
  "key24": "3ve6saeMt3ssm7NMcjQrPFsZ7RVLfDSc7fxY3m6pFUchch3UsQD6sbb12pLMwuRa2cvcbqVRYDRaRFgRiD2ZBdyc",
  "key25": "fcpKmqoT8bxZM9HTTyeDFSJ2YG9nfgYrgkqcbo2xN6VZBhRumii6vR6wio7Fc1EU7pXruFnPDoPXwoKrFegCkZG",
  "key26": "59TBzxTT8CGUUcA16sBxHRafjf3s8q5DVZGzFWzaXLfASng4cdBuWxik6PFWS3Vr7GiVW2rbeR546iXkUkwNsNkj",
  "key27": "5ZEKCAvHgqu9bBWZJV4yKrQXTRUKDmnqhAa8Jdsu6sZckZrB1KPUGzvRMTAg3maYjDp1nySYwoe99NQbkc1oTFaU",
  "key28": "3oaiFKhg5hBGPaKHojiQWWcQw94Pj9wZ8nyKTWH1CakHLW1BBVfmnUwhdQVqahvKQcKQztng9bMEMq2LMquE9Q53",
  "key29": "5Y6wh59q7Jv8qc2jj9XEpLoQyuBwJZkiVpJeMNW1JCMp1GfVD3QN1mbwh6LXDpEwPicq4ypBQ5XcSFE1VQ8c1igb",
  "key30": "VRTUkPW6po7zgToP4mpe9XEzCtPyUcC4U6usGfXQxUXMScWZwhR34fKW9fm1KkHYt9kQgdQp74yCaYM8Vniprw9",
  "key31": "3w7ogymGtbRPB26oiWwm4DXm8DuT817g7uVNedD5TEWtHCz4LTfULemHwLQBwJZW135EcZWe6HtNnWcnHrjpWnBD",
  "key32": "4U9oqMvhtemmMj7mKNDhbN48NWuQiUeEHxhpF2Z6GjGAFCCSS5npseQJ1dZx5Xs79zu5wUE6491xLD7rfdUAhZvV",
  "key33": "4NEazrRDMXyzH86NgQ22GxzfrVoL93CzZ4f2a6uEkS3Psf8kJri68whD16ajf45YwGhUdGnRUxAEjgWit2SiVKP5",
  "key34": "PQDtq1kA95YsWfNiv38p1grRmDJd9duLUyYVBFXJdR1PNaEcqXiq3dXz5NPTgHeXanhZUiJsDTV542cK96GfqVQ",
  "key35": "4ZYMuLsPw4NDSjxnsNkurDeCKMs97e38oeDWqG3A47zMH7WyhvickntYdASjtNjpf9kfgLerkcdAQ2Y9fDou7xKy",
  "key36": "3WdfbsPdE93gm8wC8JYHvW65zFdytwJmYzBTVLhHMaVKq1hf9CACiesuF3vRennRyAmhb72ZCKoCbAdsC5rBSrDi",
  "key37": "3qqtpLNNWAQbJELmXLchXMXyeaPPt3aYCRaeZn9xTx4zAwqMvviWGzqP9es5QoxC3x6tpcM3UYBab6EW83FKudFw",
  "key38": "4B3ixSStagv312nhnhJWoEDVowgXMJ9YfSrXgy1MstSy3Dk3H7NrP4etdFACAj2cAWn4WerKCxhm7kPUvL1XKNdd",
  "key39": "2pB5oW1HcWXUoP7BQtrAGbxEwSqFM53mC6T6nXo8E2fLr63FoRpWX61hmoDy6yTurq236ozLBC4hy6ejzJ3RFAfh"
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
