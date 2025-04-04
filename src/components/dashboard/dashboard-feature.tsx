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
    "4pZxpohC8pniFdR2raUKavdZGuUHi5ktrerGwHJMfEjMopxUEDmFaoBrScEfremGS3uibkT24L2eHupD1Xqht7Hs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1p92rq3xsksnfET2t2UWE8LBQrcx9yqgxoPgF3hB1P3cHjDogyAsTVVw6BL1tZZ6bmfpnNSFwg85vtSfbFNdB3j",
  "key1": "3FmznMpZpdsEQmdsnAVqYdNUzVNpfwZhxAKoUb1kZHwq6t16tFvCyCrWF2Xi3HRj21VdZDb3BMYk1Nx5JPsHhuf9",
  "key2": "Gcwb26oMmGa2eR4378vDrzrnyyiVmCo7aDM7CR82PNRNYZvK9QSqEtz4SbN29WnbZyrUtR6gW6h4uLJS8Xygafc",
  "key3": "3cCbf15M2va98o4myVZjBoRvVbFa6U3CJ3rbMTFM8W6aWupJEM9Sry2ijkEnPupTJXVY2vhCqWEW2NXFA36sfCEV",
  "key4": "2eVPc5UtoXKB1YcmxoK13qNngtZjTLr6woXBXnVGhJXCtJ3Ga8nqmwmfHdndVTn616tcMenQNM4NkR5BYWuZEruW",
  "key5": "5KehCCHyLx2Wg4oqmD27voAZBAe6xVTb9QFLxdTcN6ev4a9FM8NqYjNBKVYNgNyBecLCCThKt71uJFsNXPn3CVkT",
  "key6": "58A6etxZpcvYp5DLqzSSDtwn6h2zmnH2EnjordRyZAZRFH3u41n4iu9dGZrTpcqYawF8mNUP4Hxp8kAvxZwUiEHr",
  "key7": "5VRWRUEUnuhBAdnty5xqXQ7KoYGjJmjCMASditZARbctogk2YLeEDYhBuTFzxhj6yGcW3hFprvvU5Q1M82pqRqDA",
  "key8": "22VSFGBJyZRoRNHC33irfcxE5Z5obpqbHeQVJXFhpUez7MrJQ21bi2szFZvdQRpCgrxasMfcrhYwgK1ETqWoZvn8",
  "key9": "277bVbriQSMDFJxGWzoL9tcDmM2XPKNNsJAVGnXFZZwrXgWsyycCFs9XuhsSXSfJqPtJshMG76QdWxpTii5SnLru",
  "key10": "2Leiirhj8tckfvXrjJaTRo2ukQPxRsabUfxnZWatfS1yQwSMUYv7Y4FzNZbK6613zR1t7bgefwRz7dPQJvb3i4vs",
  "key11": "3hJWto8ZDEtNFQDUvAqAFgc4iwwX7H35wuxr31BdXvqyKcNkbkGp31JZ1HDbKBayATx3KRU7mk6EQxrXJKf9d9rN",
  "key12": "5AQ7gN2gc79yNVtAAXphyMnQFc6zm9YMPfZPdLo8jatfxT9Ep9EGJdAFNta4uR21oji4YzzXH5mjKjcuHCBgzGbo",
  "key13": "3FbXzpCoLVh43xTPCjVtesEdvYP6zUAqKQpuUxsnEh8vH6E4NoVo95zfqtkVgfc4PV8swHk7XN4YeLs86225W6LK",
  "key14": "z3NWYvwqTnmmxKKQAX49oKkWiCxKNLKmaSbM3Twd4BT8Fc9MwE3zxrpAHVjeyxFUJ6TX1bAzmwT4zTLUhFhhrYX",
  "key15": "61LPr1tpEkb78SKQxiiRzZJ9ASQYnHQXvpwh4t5wAM49H43t7yNp5Mx2FzVTtjQMGzPWNUkLweqiJgu51jqGvfe9",
  "key16": "38tizFybsDXfni4BcRKBVGjwtaAPAMMQwCVeFCL4XbpXap8LtVqGRxNb8j9sgsAg5VaCxg8cgANPtSoYcgcXbCu8",
  "key17": "4gDVJYHs4XAruW48qfQfWv2Uzmn59YeV9PGzJQargoFY7NKvKCgjGfoaRfQTFPhaox4qEwtHKu7FhatLhtb1EM5q",
  "key18": "5PBAaySmV3WwKeXWbEihVi89ueqU2vj1nBv9p6vP6EvXSJXmJN82ru4LcvHVt1okJE2caaagdQVNuFdAJDCj4NSi",
  "key19": "2vF9H3z8LYdKoo8qCScsbJYVx3X4YR3jDvDkxrCXEGzen96W1nuQAikoatJ48o5eJuh3PzU4N1XnAgvHhJ8wXUoF",
  "key20": "36dH7PHHv1TwfnT8c3GvSUQgh7sTVYfYeBNaN5B5KdNce45RnkhZ78mU1sW5K4oBCaCX1ktFDUZDJW2euJFeFVWn",
  "key21": "3kYGy87Mopu6qBSeKbSm578cubVo48yVgEyM82bbmqhH8BC9PFpsW82F59CNGd3XxP5qNtxYZxAg4mr2i85eNPjW",
  "key22": "4HECyoxKukF1w8Kndj1PjpZFRF5Mkxk43UbjzdeiiMmpoNftE7uztbLLGdBpBR5qYjqeEL1L8PrpJdSLUJN6HAmz",
  "key23": "4pdWJn5D8cyBjEfwGE2XstmAD39hLtR42NGfsVLqUHwavrepuMbMATxwsbt5AoeQtV3AQ8a1TvRDxipLck82GH6Z",
  "key24": "4Cy5cbSxSQvE1s3NgL9k5L7jEJfbTUvHdJpH1PPqpVq6qA1WYTc7XknxuhhnVDuFSNxfUdub3dGSdadvr4653rop",
  "key25": "jDDGQk5NeBokiAVhZXbzBtQkgcgaMzbZ1Nd5JoCPcxzwTSbooLgqnSV4y46TYdvQagq3ggdJM958y3jv5428dub",
  "key26": "5qenGkQ6i1of4aEfToN7BAcRcYw2yHgQ9QDtVbYGx24KhYVi8C9JiKaXwTsYPo7vdRVPTtn5HFYGh2CWLTMrbqLC",
  "key27": "5v8nx1AwZ8EoNceHGgBZVrz4RitPNgSs1twA7jaMWARHUHAswgZtqQgxCSvAdv15b1GmWBMjT9mdnWuet2VbTkKC",
  "key28": "2mJ7RvpxLiuBEzc56wYtRLh8MuJoDhLLsS1anLJ5A3yxBRVsoCnLGXnRQJPRvVQNY8ubtw6nWj2jJ3T1GzpCFVU4",
  "key29": "2Y2GZkizyAhbTdZxyZuPMuvqBewPvqpGbrYh6Vubh368JnNinzwcF8KWKKMJx3svRLfo2Qg4rB9uQoEFjt6iWumD",
  "key30": "LjBCAtR74ELyA5Ja8EcxhGikjWcbHGtfEkM5VbGM6EDtiByh1PKCjLpPmwY9pKZD1J3P4USp6zgxG8CU1sU2vLT",
  "key31": "5bU5ZH7A6wpgmQSQUmSujLymort2Qyy8F1WPodDfoWbMvvELHFgb5ppCbfo6WN79X9w2StsMqMLgokpmFQg7vPzv",
  "key32": "64j8bTYwbrHK1USEWiQuYa171MMxp623npvss3eRjkUpyNyZKizz3GsfQDxz2fTU6AKsZLvqjGPM9vzZ29oqcVpK",
  "key33": "39EmTWUhinskHVCzxLCnGsEnC8pzNRVNKg9hBCsy2HxHLocLi5UYNALHNjZho629KRkApDpo2fvBPkD2VDxdELR6",
  "key34": "5gmYGZKMyUG9g5bDQkPnFGMwSXiLZNLXKxUj53LSc4h8k5n4MnS1nzTEEktQvsfGt1sRmPY1ZcWPbaKuiAbZuPTW",
  "key35": "V9GKBUa87UkP6VrAKkpYkDSPLsuW4shEbMrFjX3PyN7X5Bu8spP9MikosWMsX9E9f7M4Mj2rKHbym6KqdGbQoYo",
  "key36": "5jong7j5rzx4ggKoXPN2HQq8ANug2TvWEAUBpN52AygViNQQe5yGTW1TB1XAnMGE9uVhyy443odKKhTvSm6TWy4h",
  "key37": "23zTA3Db6z9geBSLCQiVHPXTigGDzmbFifrEDmxr9TGfp9aAjFxPR81nEzxqTbgejuC6MwhzVxPrGkQTP6g3e8oM",
  "key38": "5pLgkAvHHzkR2g4dccXdHavM8AWSMfrCcsQcVa395GASn6af3tetpeoB4mi8HKgtCgTpxPPvContNM1s4ARfRMrk",
  "key39": "3XwNLdrURnfNSiLRXEiaMatdfPCeQWvu4KXE8dg7o1embvE1ChyFsYxp43TBuN5idCeUPn7o1L2rfkh7soEpESGW",
  "key40": "5AF1HpnLjSfN5BERz13qm8szZXoJs9G2k3QybCDWMoqRqvAYGbSefo5PJeaT5d9PWgyhLVcq73DXPpHDzmXqyu3C",
  "key41": "3CZQFqCXvfbc2y8gLVSNxfw4CzGiCmaNf6onJK6FxLJK2iXSHYw49JNGHuTotnVC2fkoqG1Tmub1TavSdHzTZYPn",
  "key42": "4LxnQ6p2deNzir4m3MBNefFqMjbrBB3J5Wzy1jfFobh6xDWXHHwm5tbMUD5JbFgJKPUueSbmkP1xg1xq42PQwrfi",
  "key43": "5trVfeDJ91Wc9HvfgTGu3AwVZaN1xXD8iKEgodfwHdPsgLHxCdGXaGURC9WmSYAnQMoMWeWDdMyWCSEP4Kzmdqpi",
  "key44": "2hJsqq6gLKWUqqeCudU636cDL5A4MbBMvdTEKHAxdG2mX37W9cBsidSeuUoGJwsERAzLARZoKXFcwUv99WVrqmkB",
  "key45": "2dcFkPab85t9XGYrbZanxt9ygA9VaWwcqdzUsVcDJmBn5fVzeAukw4r36Em55BtN5ApSL2jGTZU4Ev6XHNb7CdSp",
  "key46": "2vkQf886r1nsPu3tAJ1SM4YoYX8HKXXv7cV5AGypnS8vGywr3xitu7KATgVzntyrMpA6QcFViWpQBMmKkSzNmYYC",
  "key47": "3nYVkWyAgn7ai1Ms926QiPGp8j2Q6V8BxXaERT6rD7j8tBQfCxezK3vCdHQMXtoLQyQZ4XQsYJiLKpVVJfaoyhFt",
  "key48": "59axzPWVF8JvAfJt9yE1pxvUBWSMa5sTgM7iHq1uLcP7wAr5DAkWadG8sQVHMEh4waY9h3NSA9e8NefCKHFMRd4Q"
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
