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
    "U15esBN9qzUVWUCGQmwNE4b1L519AcvSExX1Mr1DfZGjVtxF6MuzGFJ75zJgCTYJ3CCcNa4wRwJ9SL8H3RicRTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22BAStv9hWUfqLN9Ckh2cMUa6eKZvNJZWfBfSpvnPoWgVTqooP8f8WYjfsvknJ2k7KpaFpMPx8Wf1BdJAH6RGp7f",
  "key1": "3BcZQZXno4d2sv5Ntjpxzf7TstYYoGaiSuVSEr1D4TYEGTNpDEPPvWTAAwk4QhLASYaXx7atsb7UtcM5Y9fGDRMP",
  "key2": "2Jhf2hu6StpYH3f4L1aSW36N41qcKFYXbBW6B5VAjgLdNxg7Zr4dmGv4MfANpVYBTGQavvr5KkWoWubUdT2miSjV",
  "key3": "5X6kJipjzpCqh6kjvULUN4TV2NHzcZr6vKzqxAaNnRJK3mRSqcQPX6Y1g1333GEcd7B5LzmwfM3nnhQ6uKEbgfKo",
  "key4": "wUVXsc134NkhvsDfDHifburogBXvWdXVknFSM6nQK3Qn1yBDWthTrdeCDZcKdFNVm6GY9bnbJUUZyXSYUd7Nuqz",
  "key5": "5a34Knwwz5rXwm2X1XoDzFatjH6kpBcm8rkzo5ujgsF9FLuE6zzMBx758CD1j2Dsj3qF1rniXwH7uSGWC4vgnjun",
  "key6": "5x2xEeY5dPrpiwqwePFs3GFFviShKonDv3oFiYw3Ea5NmGFz6gibj2EF6Qt3Fv6GK6h8wDCoLC1YPyzibtGJzm2x",
  "key7": "3XzejWAHFEEUg9hbyMHfZ1MEYxdoiQupqikdZwzrA5oJvMDj57r61mPyCRU4aGEKuXcfzhJvJpSunWMKGhjkbH2J",
  "key8": "5yhwJGwWQitkLpPN2SeXeK8Ajyho7yqVitMMJRs9cNJt6PJPbaXL24zSHoozBz9ZRfmkFiEK82PhXQm5sYBRB7Vk",
  "key9": "4cF4FLuca3kZPWa7MntLEHTnHj6YEda6iWjeg8DVAPoX1pdR7RCYsC1u3YEBdkDb4QEaaCoLHXaZpP9K3AREw4nu",
  "key10": "5f9TPdGxL4bHNsxyoS9TcSsLgKHXmuNtR5ZD9JQGniHFuay6CB69dPNPP83S2yX93sZki4CTttP6i5hso77Hsawt",
  "key11": "39vXwvEtRQc6CQUv59yz8r6KARNy397hAZrSoDqNtH5KUkQU5n9niC77qVQ7RLbHuH2MiyCDfT5j6cMRr5bfxFPb",
  "key12": "5VDn2TpdyXH2GthjCGNJrShwkDgCWmfPDHJu7h4VFvXbwzQZUbC4xgqzBGzfh4c3TEKMReK9HLTyVWW7FrHyMAzo",
  "key13": "3PRcTDh3R6awJNvDUbdavK81b5jPYpsc2WMFNgKnvbstABRigszcC19rQF3A1va6MgY5dCxwWg9vQ3cqBW2Razki",
  "key14": "5xSF4yDDo6CUTNoyRPwESJLeLyTqUd5TyDj6npfUGCU1pyfHowg2bHZG84Bxx7Qk6gZmhGhoEWu8JruTyoCtmzXG",
  "key15": "4SbATF94jsXcoNXohND8r5ptMRdnGNjhMCpidE5iqxruueE5jCMQascxTaCNzBWWLY5w8zYVU1WrorYDga4ZtPok",
  "key16": "5TeDNkfoBhZ1qjoxCxH2c6Wc9QpUerzXzQBkHEhRyXmrv6zKnCvfYh6szn5BrGzQ8vbNvhY7BgBJd173TqT5mbW8",
  "key17": "fgDWGqaDMXRh7ryoc2UFqx2V1g54DEaKJZJqTwtn1V66LqkPuCfCsAiiFzH7Pa8ioMo1FCVneQsbC1yx5sksLMQ",
  "key18": "2iWFXrhe6yUALJaZXCFmm7NtH2wDQsAZrf1FbtLUqtxmJWoA8immeVzG2fmuCChtF3Ssd22VETKe87dmC92TQo68",
  "key19": "3KiD87hLmWqwN67qBYXXoR4JwRycPws7g7eo3RJrFSzV8eDdwRC8BoNeD5Vi1Qs4S4nZ9E526qbWtAzT3k8QtRoH",
  "key20": "3pnTUsKPX4Q5njWXGWw6kcRs4b8yAaSKSJDysfu2mp1be5UKV8NRbfZfYpgzGSiEjjSMXrCYtwGvKjSJhdFevXMW",
  "key21": "2ARBTK7svmaoqsgod5178gaNBttUYwgzkQoMyzfHSZ4WCb9x5HoYeUtzJ9nYeZqGPG1tqBbKtuupFA7FodYXSUqn",
  "key22": "4R8SwJAsLeqdHYCfpgq2vuSTW1rjEeNKbs2HzNrLwQPvNZ975aK7qrMFYHyci2ELw73GHBTz6N51HGY3usqy1YDN",
  "key23": "3ai4arNjm5nPx2feS5omrLgDe2UCaEWRje1E3v9q3obHieJscFUZ3AnBw32wPWqnd5mA6YD2APsFk8RJjBjvny24",
  "key24": "64PkoX2D6djuHjhooL4bB6apEsWRSZM6e2h3MKc1Qh3c6WkjjCe1wHJ813E8Xm6fLcovG1KW29TDv1UHXitbLNGZ",
  "key25": "5zDhH12jnrzjVStNKd6WfwXryEVEsgVhq8CQoghArwN2wYstfWehBMTbRFj8LvywWMUfnyAixU4hgcvyLwactkYF",
  "key26": "a4mAwHiL9pCUCfSLb2xo2XeL9ZD2x9sWxjeZ71htFJW7NfWGZhrSjik32kKGmbTHuNotNEFV5u14QCGFUkyscvs",
  "key27": "owA1Yc9i3fsu8nhxzA9sjnLn5Yo1Cf8b2wyWnAWV9A9GsbWnBHoRDBijiNDoLgChMtupGpczYbhogyMkkZSqCCN",
  "key28": "5ArSsj5CX2SFa9fDkLemTWB77DvifozmXK8fxSACcHKTUFDzohg7i4GsSNUdxXH2HM5ekoYASnbWvcq2DY5QEAY9",
  "key29": "zvihPVHH7cPhGGYbtxejJTVBgrt82TqQBMUZBKViaerneQ6vUCi8zM45yFkRvqCE7ALD7FBrYkZvShkDiGMm3X1",
  "key30": "5jDVTHFA3HJ1GvNCZBz5pzxWSmyhFVGppYgKqLhtMA79GXtjujKLPVovwyZAVgpsNfEFB1kU1oJyFwSsiLnEy1Tj",
  "key31": "36sqTcFUJ7WaS8YFv16eo37Hg7YwcYePBRCEj6TJs6P5FeLSTT9xz9i87g1A2CTKD949VU7aTGEwBSUBep16Vwym",
  "key32": "5KUVxMH8YBtFRJqvpokDYRZMsTAWt7iYi77BFQjLpJXbss3QAwyokqwhamKGYfXGkSmrQVJLhSdGWugcm73ZjoeA",
  "key33": "25b2YB6mTJ6BzPXcgMTa3bVcUzo7p3RVTgpQ5qxgzYMkCKxqaaktdNRP1PCByiAgG2BqmFPhjPAauXjhajRfYD39",
  "key34": "2eMrhCSThCdTMcighSGumrA5uMH5PZdaVc4foFxfDVyR3rwQoELcess2YsoxfUM8k5qZ8XML8JPzYsULVXX1Dd4j",
  "key35": "4TwxyxJcSsjDkwso22UP8LqL9BU2gPyVHyzxTWg2PmzCukUrkpF8MbWrt71YYfguFkWFwP75mjasFCGWxan7rH58",
  "key36": "YwreXfFSn7jgMFdHMYvDENbKvwSfBFazaxArFdkwprh48K83EBTG2Fgr49XQPz36gH6AP9mAUCDLujjr6XycwDE",
  "key37": "EpXEMxsor8Vh8uBGRShDF4VXWjtGhKaVHyRZShB53DziYm2cJNzqZsygRVj7DHkKLSaCkWcd743RbH7sMCb25mG",
  "key38": "2hHn2yp5x82mcdDsmzz9uGiqozs9KtE5FWV8CXhR4dyKvtcappdnBS6QCPvcYNgVhrFGDQNUd3SKsirJDZ6tbuGd",
  "key39": "4Wn28AqcUD9zStMJUejxXkQ9r1FEK6E29TCSijYcQzegVNYJwccS34kPQmeGwgm3CuMKosQiYsqd3iUhkHtaQsSa",
  "key40": "5Kxtz5LT93i38qwqK8w1h5jDNvStrmyoXbEsd2qDkHL9oQYTd1YYMKgc7Xs5SRZ6ixFip8VimZN1AtTxaw1Ncuyb",
  "key41": "2cSmhhTDEakGVG2vjyjFx7z49ayGUMcLpiWnQpMC4gCDbrAqx2bFp6tmsE79UQ2sR3BKrGo9nkh7K4cU9ScWSNXG",
  "key42": "4Ez2eUjaiUEYSB2appkkNsFSb9k1bpND3zsaYLppZg99F6XpWjbzdQ9ZTGqXWmtG8ng6z113ZBnGEnVgT1zDpF4i",
  "key43": "2Yq2HBG3J3hzggSgeq7TCXQLbSopkn3vcvyfJSfbXh7v58F3xJwqVReneq6BVFw9qnAAaiVYAcriSBCrJ5JKorpx"
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
