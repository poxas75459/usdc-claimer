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
    "39RSp2gT7ypz6wLbvo7RmsAWtLTFYcnvWipP7LSpx68iSaZh122aBeJWjHjye61ADjz5iWzQi41o13oq5zc3DgPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fSa6c71qPVekoRNBdakNeUgdBUiX3Zb3krABBLGCjeY2kcRJhDt3dLn8WwoFYZyh5gEg5DBkwCvd3SPP2rigm8U",
  "key1": "3DnutGn7koTgab7yCxNNdgY8wJdjbKZDDiGejzAdLpA9EzraiXqzUjfvDT2fNM5EhBLEJzwzvk4BiefiHNeqoKyh",
  "key2": "5Fm5kbtAkqFAaBzHLGBHLJrin94aChfYCaQEQMn4YjT7Pyj9U6XSTHZHAiusKF9sMFA9tABsAKZSFWbgcJcCZebF",
  "key3": "3sCP3trom3XVe3c7NbQd5aZoFc1qym2jmbLscuH2p8ZtyF31ZjX6XCRCiv8MHLGpbG91MuPL1mDzAYv6WikDt9fG",
  "key4": "26tgDtJZPkynuYEYXgC6c1y7YavV8LhUm89v5ofiQTyrc5LUcYkijXuKmcwNWUL4k6s339mvWeMpcY37CftMrx22",
  "key5": "2M365ivz99Kds8pyN2g22JKaWqHLaofaiqvKuwqgdb3VLsjCsGQeHwcDMN5c2Z3zwuRqDnRnzM2EK1hcBNBUyC7B",
  "key6": "7vVwr6nb68MTuoW27CrpcZH4UFHgrJQmFzsX6yaKpExcRLNqEmLbsjkQDAD9X6k41KtryaPNmUDnRggC1DBaP4C",
  "key7": "5jguRXWKc6tKJpiGmq4bjwgzb9et5krimRQVWUZq6YYgBmHTPN4uuKyug43rNtdSaBej4D1BDCdMGnmB7RbJkPc",
  "key8": "29oDwBHMqn4CeLyQ9NrQa8V5wEwaxPjJTNDnqnWPybPpAVqWSeFeWxuRtkH42jGuyKasvtzRUfWZmjepNMkGgU9K",
  "key9": "46Fcn94fDpncik2xrE3P2WzytnFDKutFWFWR6hDQCHFU91SAwaGVMsQmZvAHRGbPfKS9XYYsVCQseZub365MqrXq",
  "key10": "9qGjzEks2BShHHJtoC7Q6SE1Dt74s2X9LAFQMLQCiJmPRnuqvfyUFKwmDdBRP2YAqzQUZYK84vmxGDxjAfgJJby",
  "key11": "dUxuvhhiF82Q8vhhj1fVwi3weEnsHWiQk8MHRP35eoZ7jY1oNzCRtiTTH6jwyYH7NxjSjvq8kUwKmwVrYW4NZU8",
  "key12": "2jzwatqAK1zqfr5Zei39G12c67KT7rAfQ6vRYQwLQsjovuZ72kvdF42S74QQyHh9ucoWJ554BHBye1h7iuxHk5P5",
  "key13": "2kvw3tmoj1RYBkhG7KAg17WQcti1qGiKzL2p49UGdmLmcyxMVKLndigyq8gfo3L2eBqrchRVaX9KXuKft53dpMeD",
  "key14": "53oQS2JWh1fZip5nncSWZc7QGrChXXaWQi8uzc4aYatfb5qHTFQcWd1YJ7fAy1qkv3G7f5i9WirR4mdaT8WJTrUr",
  "key15": "uDvhvBqYM44TNokZaHWhZm6zcQwUa47MWYe2DNKKDdaN6sLfZv32NDbiwsMmTud4NhprMggTQUaKPPtR4n7mFew",
  "key16": "2DKeNUNAXMLFeCkTVK6wgXdwE7m43j8HTn4esy8ArEjhxYU1kcmqbvVe3CddYKiBb1Ja6Pk22wb5pmqLPaEYFkKP",
  "key17": "2TmJ6cDsUaWP4E4Qu8tgqXQBuxWrKd6p1tH3UXkALLv5g3A8Db2ViK34WfyvUh9F6ZxGg1TeeqYTYzjYAuyLDhkB",
  "key18": "3ZSVKeKb7h8ztC8iaXwUcHscgGUHv1oKYaZb32QEhrhURVehVSaYDvSe27pyFVHw4AAAd6yRunYsDNuDMH3nLEns",
  "key19": "372iKnWEtuRhkkessYGpkb5RYN4bsrMCsxBJYja12fqXSGk3o575rPe6FNCX4EM9KpmtXuaBu3SyQDjUwfTvBeK5",
  "key20": "nQ8q1kQ3UaADNFWdDhZisvMAUdMmXXneCXgXpHqvkpkWAEDaazjDTTSZvmikmwirnnHsy3auxjGKEp942S2hg3e",
  "key21": "56sJHaqJA148tVsoJUed8YhuNRUv5CEvJfnb7w6m2aDiNopqk4YY6GGHARPD7SKs8vRbF4qXuFRnsGQoRKGk17ma",
  "key22": "2W9az1RzJ1KkN22c4MUGTgoMpkck7vipYg44z3uftALUDrA9tAutMs8yxA4uFFQHV3DT4WNSY1z8cCMCSSKEKMWY",
  "key23": "3AgrQ6BCQ3bzSLS8TX8DK7nYWqCkP3CnwN94oyZFc2zHBHjXPzbrkGzhpoAKn2yBGgkEpP6F4MEkYCwzbJKQC5N8",
  "key24": "jYQrtyMpDXRvkrx12iP7XStZ1RqmbrgN651wiomGfsMHtRMa2G21uK8tJm5wAJwDVFE8Sr6vPPYFuv5G8roy7uL",
  "key25": "7SoQFpDYfd16TDpr43a9qkXfrSGSPPTUWAz41nf51DgDjspsJNYwRQJ3MfohPko5cFnuHgk6bqLCZyCxLFUMCrP",
  "key26": "4UA9STZxYkANhAf1xuPrBmf68yEich62tmj7EYg5WTHnsCJKjEiuyhCL8T8eVYw7KEnxE1PnpcTzcV5bVVfJh15L",
  "key27": "3mxUBPWP6KqRFDcfnYbTjHLajppiTC4y774WHSzcTS3rPBM1hoVs8mbgqiTgvB77gY4YCL35eyVWynb4jSDTwMfQ",
  "key28": "2C3Jz6ASR4XgJUsP9KUWnVEpJL8mkEnSQ5Trq2Cac4NgLRgPUDzUeHLKe9AoEtqjxVHWFZmSjKvC4Synn8FTbpeg",
  "key29": "5D2Z6zJLiQHQoLmyoiFJYUkLkyMtpeCmLoShTTxpuGqdiJjQaMwh94jYnZUyAZnVspeseNJVJk3pwXeHUA2o1eoq",
  "key30": "3J5hStRfetEp4MQJsmZkpHJ2od5G18nNg91ebeCpGmB298pi8CJLLvQijYSTqM5fsB2DKqyxPK7YQwA9DBzjfyxn",
  "key31": "52QSNsB3tyvHPuPfZVysR3x8gKraX1CXjpn8obVRfh1QbCs774vwGNgifpp4E568HjBGBXrFYW46NnSg6AtA5KUp",
  "key32": "3dcKkQttgJU5ihPUGMGDiVQtgNpwundaXN2dbri1z47ccGvGzziUpYV1n7KUdn4knZ5x74Z3uHLkvts3YNaZjuR1",
  "key33": "4BYJSuisuQZRkrCF8YYtsoPenDU3yGQzVvjWedrj7tVS1ENTSTKioZTXZo32aJR8KWeLQSfNNHc6b5a6Y4aaPySe",
  "key34": "p3j8pJgLYWJDTxT57SBvS7H9nJzBngeyWMpnVr9fyb2bxpu2Lp9NLYNMk7q4JzrXByA8UW7DQyz6PMoWvwZHhfk",
  "key35": "3o12ptWSJLYYkLA2cdsnz6qPyGdJKhSYc8jk4w7o4aXDiZXfMmLKinsDjhq7xUcLk57ihjqh2v7P9tDpcP3nQQpN",
  "key36": "5VLWG6f2AkH3A1KaVZ1P9AmY8XKec6hXc1fasc7rApFzdzgaGXVB9kyVPgixVX8WfLApuvZ3oaWjcYUjyjKb16r4",
  "key37": "5GysJymNKrogXjvbvnyqBj7Jy2y4We5Eaohvu5G13E8Jn3xMHJXD6xdCLPzXzFXcjARHZTvBcBgUXXw5MM5Ew822",
  "key38": "2DSWnpjo7NBh2mGk5DQw34iPckPK8c1TFyPnr1Cp4vwfMhXMX4cTHhrw76NbwHUoicK95b4Km1PsoD2yiedanxdb",
  "key39": "3cpvhYR9vBYUGNJbLLrMVtLHHgvehm1sjnk4w1tDzz6Tv1Tz9KDoyRRkmtRuF27V1WNi6FsBdN47ZSKjxUL3kREQ",
  "key40": "2cBD3Ld8Jwsg9oca1vWKj9NUxtTrVFPpm9SapZ6KZ8usaZLe8aQtxEgQj1r5vztPPj2kFLKeZGj3VDmPCSuKiQZo",
  "key41": "56XNY92KM76kWYdZLMEdKCY7tgKyGMrBb1TMfSiBH8ookAP47z3SShGWjV3TD1uoLArNpzE4e1tMSM9TRHcYLHfG",
  "key42": "4TVh2SdVyChTJVWjvFQWnjEb3TKg5U7nboJR6BkB41jgVNT4qmGFG63CQjWBHT6427FChfQPbhRqt6mHaZV9SnbY",
  "key43": "eAU2mzFQibbDsLQrC4ABcouqL6sWhbtGrpyYBbjCRwTcMVu8nHd8Qy2EwRdf3HbwAT8yAywVdfyqw5SdiA6zbdZ",
  "key44": "4WMYFWhPpdo9KF34iwL7e7ZmY3Z41Jyf959HoZmUGuhY1s6mvzyHBjXVaG86UyrF2XnXtgCHrLdTca2ssBpTdKir",
  "key45": "2EWaV4gxV7scFmDp2ugcU9es4qxpCY2PE3vsJbF4sPSjvoA4AZtmF4w1Rf72mzpTRnU9jNhfJax8M5ZdreKQDwvy",
  "key46": "2pszsLUPSdsUvmFpcvTA4EfoMfeJsc2oXsfJc2n9v4qRKPSWYmFfiGsexhoWUBAGdyFKugbfRBgjmuCjUH6xE559"
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
