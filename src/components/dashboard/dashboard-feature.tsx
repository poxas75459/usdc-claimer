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
    "5xUqGDnDVxK3aJ5E2Ptqk2duoKmtrjMZiUmGyYqHSkVrcJAjKbq6AM445VLKt3kcDjF9vEh1833KvaaYMC8JwYMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UCjJuf2NSfnZSrfNDGqC89PhiS3hEmfZ1aLQxaM86yywaE6Grn95XyD8rZcKohHq3nBmnF4Ff4csPRAcjC4kwVz",
  "key1": "3F3pQwqdaDi8UrkxoiKS8c2V8Ss7LjCZ7L64tv79NBni6g7UTmSbQmupYWz6hvBxYoDK4sDsBwkvCdMnLtTZ2nfr",
  "key2": "6536xKPZsx6zZAKCp5urE7UeNKP6id5aBKEwQNqncnMKAiZcFDd14ZNs587XqgHZUJ1EQ7eWLZEUm4Zht5Xyd5UA",
  "key3": "bEAWe8ZHjxZj2mQnS1pohxKo7wbyDyZA9bBUkR8CvcyRF8tWYaEzwoSXQeuWFEbPAQQuM6uZ5djd3FuKQ5TV2X8",
  "key4": "5Gd8igmSDoe1XfSd5oF4WR61w749yDSAPAZ4RsqHqgoUNK7NdwonuJj9zbcDGTXc7SjyFT8qvZz2Me9sQxQNJaHJ",
  "key5": "4ih8UJhGgTy2wKQLGRn3WxRYDwnnRg4Hd1AbME1ofDCCVS9JgZjwRzhMym6uPDZWFURLGad59ApyzNmpn8HNTuk2",
  "key6": "utGqeQm3DmFTJwzeV9ihCuJrJjFVgHUn5wfxKmfyHAZLpBvdpdbEcMFFbdCT6LwsDqpWfUQreRTRvS8e7wu49w5",
  "key7": "53ZGacBq1B9tsXp2ZE7Cb6BEXW76paaSzvmanQFNyME5v94oqX8pc4AZLje2s9D4GgMFPmRgjLgNVXVkQu2eEuFz",
  "key8": "58419qDzaAyA2D6HFKxhMz6ow9E3CUPzrfBLTrj4B7VLdxckZTuP4BqzwRiF4e5hYD1Yy4PAMtrHDHEEZ3XGLniY",
  "key9": "5Z9eXXyYWNajiQ8QSwGp5w98gSbZhh3eeS6dQXgPDRdj6rr5zFbyAhDRKBSLQAg7R25D96GUXKfEUu69d3HGgSkG",
  "key10": "66BuUmazmP4FktAMA3wCR2Qo6zFMcifDbD4wCqgX1LoWxbW3ZzFCGy3W5YQvZPmGsMJCtswzm1ufhUrLPZerHFG",
  "key11": "4wKZdirdrT9pvnqVJL29UtdFj1FY5B4K8EuXuMyFirpEHFWH3bdra9hQV2FNZzffs3WYRJcG2FNNaqP3dy251iR9",
  "key12": "4jCjESCWiUF6NHLFikxKB6bNqQPWS3fcKTyiCUFAp7r6Ln7NQbMVeRZcuph5AuSurL5CBTN1ie13B7TCEjQXy9ea",
  "key13": "kB2xfJRT2RKAcQf2BULQTucErU2YiNDekmYf5GGwT4HGBTEQgP3D5H9XGfJCq6x5DT6xRGF66zGu5sGqg9nngqa",
  "key14": "3B1Yhmkig92aHumnsuuu35heiL3ymNkDcsff9FS9nEtwBki7cHgnjMwaQ84jr59awrc46nfk8YbqCRTt3WqjLMFq",
  "key15": "36qNRhAGB7v5RCjNrrgDNsC5d4LR9zNEiefJTb3n5zMwNqpSn5YcrYdWq3boiysmMsU2CNaPfAvxJTtkeopZRUxx",
  "key16": "5kmcrWDa5PLdphZejpnSChCx2sUT5EF9ApFn55X25aPyE8neLxS2jxvTDdU8CXPsLDPteiDu6sAmSvzcAGKFDyGp",
  "key17": "5mHj1RS5ZGWQjXwUS6DPNmq7sjpSYp8EsMeEUGDtP2QzM7aKxPPqm4WVsjx6R9xShkMMw2zHn3ixiXCUEA7669i4",
  "key18": "1nzFeXnEqHrt3w6pjGoPJNP8YxRnj5NhCmnjzfZw99EZN8cNbtcj4dnoUSfNnZuHGDi19bUdR3iMrKumMeWzk17",
  "key19": "66YhNxvKA4SahJ4BHn2PQ6nj7vrpqALqUCMbwYYufvtrmhei9cAb3PqKYkZyxJVqFAvmq9rxVSiKgBqrTtrAFTXf",
  "key20": "4RJL1enYJ5iH4LmFvNqyVanphpUVpXjB6V7p3kapMrSJ7Ufp7kag8xD6r5KJp1Tdk9HjeQ1i8kAGutNwuDYt7MH8",
  "key21": "4BA9xEffzN7ZMxEUMTnY96x6bERpNyju1YX55SYvsARfbpbThwLZoDSv7qvxQ2QnTk3ciFd73bqksDUh5dFLmCow",
  "key22": "5CFPzUUeyU7M3A4X8H6eAm3LqsyJFrjiqb9qk1xupGfmg7R3spq4BJJYa46miR6huchGzrXqmmAsFWadEmcswQDb",
  "key23": "2vFy9fESmSgfMDtPiyZhi4svCbn8ZWaB9utHtGW9TxwCJ3fytxh9R2nwLUkb2YAwBkweFMwdL57torUuxTXKVhw2",
  "key24": "2vThr6Z2qPV4kxyvnkyp4Aj2Z1z7jZKCepVw1gefrxSyfx7pTKHr1UeDeF9AyRVKdUnZzHShh5nJC27emwSTtwaS",
  "key25": "67BgcC2y6ZaRzsAVG8bafgKfrAGAcEbt2Kuv7MSPN7vwf4rCCj8wgd7VpvR6S5s4jVNatJmPzTHM3eot9TZtRh9a",
  "key26": "61bCv6ACzyP7SCditgUZ7wmFzdYoEnDepQDkH66K2bdw6xQumU4K3Wu2yN9wvpYxy37991YosaNwEnXZEk3XMZwY",
  "key27": "21jdT6aVAWvW1CkXeqN9GnUsvkzu7mN1UuyMZEpAMvTwUKSSRVWyqv6R8ev1W5waH9wc3HKkzTTYatpwHdk8srMk",
  "key28": "2i4acxk6UUNgsU6xwvwi29sNcHSRbkQXLqokiC2PJPKTfFA6bFsVEbNgAPxeKMVqyHUWgrAuDjoGxBpfTFWYDFsw",
  "key29": "3wiorS2tkdKJWpsC9vxt9twqiosaJ2avQUitiMptphp73ghbEtjMJt9FQ1Ms9ixWhiYon2SdD7cUyk7qadZb4Vw8",
  "key30": "ZczpvUyghKegzYemgvEP5PpN1eYGu8dmNBHT25xSdQLhtzHWc8PWQic2z4G8HtmMncznwJpUMUkrJtoh53GTLK9",
  "key31": "518GR1LbeSeVKwPaaXRqsSXNMt67iwZkGfjoczpvQanVm9qPGqX1jvZXdqm6kAdMn4D5Zzwt4SMLNu8Azu2TywWw",
  "key32": "2VvttgzZMgeKe7UXdX5ET6HAaMtBnbaz6qBW5c3cBrKAsCoyEa4bCGSP5BkMjB1PU2meqYETda55YcC8AfG6wnpJ",
  "key33": "43zQd9Ldjn1pKyuxSkvxwgEQ6wfWAwNA1qCgMehhbzteSWarJr4v5ARQguZP2FeRhHQG6b6vSA7tVo4su6Q2uznz",
  "key34": "41wK4Wm3uKBB9qTvNs2MpV8AXYpMMptRJice9gJLBF5x81x8y6eMMbxKUeStJL1tW2YUTF9QvtPBD6igvYpPA12d",
  "key35": "3ni1Stp28iyYPgcMKXoZbz7bhKXmEsBv5MjofXkQa894PQWC3FJwxdBghKphn6GuBw8bpHiAnpB5KgRnrmhGPg8Q",
  "key36": "2pjx2XB4SErrEeo1gqTTVJjhxKDQTuaaGTBVE4MPV3rvM5DKSQg3ZanKWPm8jytd1gn79nxzjHvzMYZZyptQ6n2g",
  "key37": "2GCLw9uebYm6zCdEZ9dacmGqoMJM86eeRFtaWHRwpb5rvF1nFddditv6sWbD1dTAdJrK9ZzU5xZH1tSLeADeTf8P",
  "key38": "2QKjyfCCmy9sVtWg2ykknSQbSCrWY8z1DGHDKAM858PghJNMmkVmusHHs4bJeHdGGKnSBGWynjs4dZbuHrDoFqfL",
  "key39": "2zGoyB89B6LobhN66AxxkrbLdxzVvYyyqrYVKtKAtvhkxMULmW3nrSj2gCtBK8Wzde9kLqxktX7rmchPSB55WZXD",
  "key40": "3KTgB22Fn7k55i1NwipzgjWvgaUxypxHSDizUoxaZC92fhDsUcLFxnsHaogSJ7HKK2QDbRQ4Qd8qiubmF3kkVNDm"
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
