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
    "3V1ZVxbZcsBtkqg4N549oXpiZKqUEunMeknoBhDs7ALJmcvt5e7sJD1MBP1sujK7omeSBhidkYw53S6rECFp199p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R3eS51m1QCS9BNPbWrMpTe8Mozvztx1oVjLjfYQYd7qqaoqyknuwBQHYDvBAVmPfcCofm3CvH2gDfwG8LzpCW9i",
  "key1": "2LR8fosAWpQcJQtoQL26iKijtUjQNa7iYAxo3YC61pcrvjG9AHDHBnGhyQjadYJjJE89HETTvemRF45iTUcJrupL",
  "key2": "4izVafVoaYA87o6s1maUJkNPSyHvJxdVJKYfLbUPwoLvrAJFck6dMkV8akZcSb5JJzJw4MEfXWdHB7t5rzBbcAgr",
  "key3": "4HBwS4BwiB4utgjjQKjHcm8Zyygef9xcYerM7WngLX4QQa9gr1Pn8B5mnxEUQSYujuHx2NktvYKTg2FV85PqrgNk",
  "key4": "xS6BQ6qaWktsWeCNeqqxm59jA7mp7wnxcMJXHktsessbYXUKsj4xaBmgfgFmwsKwsyccuenJmVwa4P9hR9dyYCt",
  "key5": "3o4PhwPY78FwewEZUZHFfYCWMRFprBgBdTSyWpcJqDKzRRbb2NMw4aK4tL5DSLLDEzhHhusSRnxVcgHY4WRqc3Cg",
  "key6": "54CyzVbk7mB3QJVBQJkb5jx6akwPnHVZWyVs5umvm591BRAYKXiwYzGNtHzgn1SVnAU2AtGu8Mii1tqJzyzSorgW",
  "key7": "5pkLrwJHFaxaoT5S35k5wz8YV3vYq6yFyS1JbArgkF6xAcdWruRoaaZcjU8XTzpkZ9Szc6eCgzuEJRZoR7HeNvjp",
  "key8": "5ifnyCUMrwN3X52mQeEqT9HHesQ62cdVDxi3fY3BJ9QAA7mWrqnRYDEkCqcvB6xsLDxzZ7ePr9mFKBigMdXTzQP7",
  "key9": "VDtbQ56nZUc8akuk5B8GBE8bfujV6UMi5M67y7g28Q9JNAiNRLuoaeJ7AuSKqUC1ctU8ecgKX91yxVXGcJgb4De",
  "key10": "5TDFCEfsr1ywi2CTGj9F2X3oWXhUj4YBqAs8qkgaDjQ4u9CsEAH5yg2BiwdmZTvfASwathMHqCk4c7hvgvXywAk9",
  "key11": "AbhGL6HQYjZEv84nccfrRvyDhQB3txvPHARdTRnG5jEKmgFEjeSTu39mUA5qdQ7q3v1GzgsFH6ASw3J1yC9GMHJ",
  "key12": "2YLkz8esnPR5V2KFrcgkNNFDuNWfHijn7y2Cek7GW3qvwYE77JM4uprto6zYaAzemXrjEt8jjZBP8bvA1vTu5J5u",
  "key13": "5Pqn3bPqEt1anRfKCJ2CRzF9ycsnmu5o9hktXQLNAoyZUJc689vrdmM8THWv3ktXkF8SjCsMjzU3auyDnnuBk77m",
  "key14": "2hvYXPvA2qP2cZjYcUfpZUj37Uars3GJPMSvm93nuXxAM4ADdLCGQtE1k5rTU6Rs8StAjH3ARpSK1A1pVd5ScA8m",
  "key15": "2n1zVrhT8VzRKUgRw2aFdQSSbUoGcL9Qv3RyiNebSmX9E29mMwxs8uFPJprrcCCFBawzYd9ZjxbC3YHT7Jfo4WNQ",
  "key16": "3kTtsjh4eg3Pp6aFtF2BaT2rHRX1k4yESubadRjnZGQqreyYQ6g6pRp11sG7yKTSK7ji6qFg6mmQctPhRhkQcyyV",
  "key17": "5jNnE12mRo7N2RpmC4wk9jnjqL83LsJvUWcT86hwHQVk7FcabjX7mYmuy4gAhcoVVQugyMxZVYJiLFTfFx5w3JNV",
  "key18": "44KkFnxXyCCjf5ikcoCnME7DZAssieeED3WB1C8fnoJzVF8qFNdWZchWqcXkNExvDjUjohoyNCLgPL5tAstdqrbe",
  "key19": "5EcDGKb8fjHA6TEAgSaEWYrxtdMgPhFYmUxEBaebe5QZHqjonMA3on4rr9ExdLnmfjPgXZj7zn1C5BCZ9vX6JYyg",
  "key20": "4cbLSnLGGUfU1Ds5UDDgvSmAbxV7PhkTEQf4FbBC5VncnFLjvMsnNpsrZ5r7LSnV4fgADa5vbU71GjExEARpCEcx",
  "key21": "2JAq79x1VCaYgXwFxmHdDh6JnVGfCtFYpD8zxVAEuMfDvTFUZiX2ssNj8H9LPKkpfecc5CjP68u6unAsqLgjKeE",
  "key22": "2bssVrPo8dvymX84eeqosDoCLgbt6kt4j723UyKQHuhjUo7FrMF4xeWvCRnVJDopBzxFUygWXYmj7eEPs7hwZZbA",
  "key23": "3BuhKT3LgC8eAU9VBqQfpSeidVTrhcsVnhCUX8VDYQmhVqJC6BpPAuC2nvv7tH29mG3xFMLSys7LYeKacfyYE5zR",
  "key24": "2W1rJkS17xXDdof7riCAVvuPvptpLMbfwcagyL6n6LWdqeHpWK4QhXB5FeQ1BeVjMnQcp3K29ReitRHk7TPjEess",
  "key25": "5ej1zwU65UBtpCszmbB2YpVzhDNVShojtiX1mCxYVmDouxb4hofbK8eJvCrSD6nzJjGL9JoZa4iVCr9sbeGhsd9n",
  "key26": "uGKZ6MZt2QArSv3j1mo9dGsrtgr3BodMKmGwn4szBiEo6KU4GcmFQJiC2Tpnbu6mkxAEeExTsw784rSmMngfbAT",
  "key27": "x3SVcG1Vk4zrhSsJxkAAjsAcGWW3cPcfQtChwN1vmvKYpbmiHmSasUcZjK8zR8fnovCLCBYbngBTc8CNcuN3uQB",
  "key28": "5fM1jUdPFBS8fh6Stvn9MkbVPxiANiddoi8aaoxVytMALJSrmwTpCYPbtvHeiNUeyNEBo4TibvGkin4DSYNV3Xw5",
  "key29": "27bqYCh7N4NRLM2pCggFyvSqYatAMAZjbnd8M2mkhprwKpxoy8u89rsGhtTipKn3o6x8v7wtUmb54zUJm5enc36E",
  "key30": "4EDRkAT6cbQFTwQR1rnGbdQEigY55WVF1omdoB4bXrpgXXA77U7AoqX5knxYz16a244aavg471A4CPNM8RACHts6",
  "key31": "3mkwcDyyN13yTdNYAt2jmxGnFgK32Fa1Jf2NrPmTfv1wYuNwP6UNR8YhhMvA3vbzyhZ48tE22MuK3vsZqRqkMeXi",
  "key32": "4tp1X7z3diK3HCq12ioHqUNvHiwS6BQL2uqY9J89EAuqoUY7CkWhXBGn5ZvK2ujAz1PSTUjCFeyufDNVgGAh6Mq8",
  "key33": "4wDUj457zHSwJEbgSvZuk8zz4EXP4bDDvvYSybbKFLCsyyeM3kuXbU6gKJ9UGMT8RcbNuoR5qbWjVhLqFxMXD7Ao",
  "key34": "5rRHzv4GYBhPFEbo4STsESLisG6xrBT9nNsr1YTV91hk9E8RBi8DeMooJo4xHeRrqSwdYP8EndXwrVLShHfXbKJZ",
  "key35": "2EEWUieXrTyVRYqPhtpMWWB33LGr7W9AzzZH96LYaNne1q8XUo8LhFXvrMb29URhEgsX37mN2ftwfstSvMgsEVus",
  "key36": "4pjbLodHzSzDxWk19PGdpeRwAaDE8hW8vr9wQwbHTdxfPkVk7AHXYFhKp3zVDz7hj4crGcniPjZBH8FkwvhisP2q",
  "key37": "41Ab7HcYFynjnrkcwWuJJNjPyapDK6RcmLHCipi8Bk3Le29eG4HTuXKAG6m4kJSbCjj6yEdjy6Kys9dhKKy8qhe5",
  "key38": "4wwDZiNpNH1YS9txyeTVgzEWgYUgyDz5xKuK3yze7w3PwnFFjfZUAK63297hUwLXg5MoBR7KMhAki7XJrfC1uqx4",
  "key39": "3Ebb8RkKDbHR6jethAi5m5c26A7Use8gPzyrPfQB5kY4tV2Z4UwMwcgPnfpHryc9xmzdyNEfwugfQqGhJxE968nj"
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
