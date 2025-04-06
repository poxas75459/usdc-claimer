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
    "46Fs6dauXqqiBYUpZsJgBQQk3aLk15GKDViYhD3fW4BTZRxSPWyQ5kWzn9oWUgN3wwKB6xVhDNP8Hv2NhKsyQaoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2boRrxMCpYLqz6ATKRpoAUvHbU2WqntLemKFan7deeEz85pifkEfSXzdeRtJBsPZS99uNz3Az2Gc1vst2bSua4v",
  "key1": "56n3bEv7GuK2dN8Av6tvTQzn7EdDGi6JoQ4bzosoYd1YeQ13UhB6Udd9DapyBTPcK7T3N7RZWTRSMQ37oSPzScn5",
  "key2": "584cZs8mmduXDJD4WFXhKTmGAX6zDjdAPJZKq9cJrjZSUi71LQ5kjv7ubsfnQ6irXBP9femnVQnxLqWNHcgV4Dkj",
  "key3": "Sfg7U3UhUNs96D99w2S84gVJ2dhLyPrqXStpo8FpLo8VfhFEpWbjEWw6epPq4RwE17NLR32MufwgXex2bMwVSWX",
  "key4": "5qQLV74Fb7Pkq6BmuEoNdp7eXNc9AEST21SpKCzTT716NpZFuQttF5gAGetCqvEPmLt3zbRHtXJP3biGR62M3UcD",
  "key5": "2xZ3RtuCMqroHXDMAjHBWCHc27dtuiihUYFpdubZJaXfWP2GeY1LpWcVKrDMjNUn8eyTT4iJ5PwYm1vEbTg9acrt",
  "key6": "4ktECVKu9GvkiYvS4WXtFiczhyhuSjUuFK76UcTzuKsSG2rCn3Nh9N8YedrgAhsRBfb7P327hJ8wvf2ATgP1Trtw",
  "key7": "w457PT2tjdMPEbPcdGbvw81WYFsia8UKWmyQCVGXZNvbfneiq3rKMBADuY4Visph7MRNTbKuzp9rSF9PSyQnd9p",
  "key8": "4Q5BdY2ziHd2DJG5iFycu1zTaq92jAt2qAzHpTLbF4CewF2dwpRFfeRrbfHfCeAUustDXkedGxPWTHPAKd5CnZ2E",
  "key9": "4B6gVwGSgByShqYQuHhUPv1KhwwDSiKuQCFcbxConJTJFtRL76Apg7vFQfp4QWCGfwvd1gCm2f43ZFCTa2oeDqwm",
  "key10": "2BJgnv4N8VfEjyAejQM2hn4oC7ubKha9j3LDtcdVWsEtxGJSUMyNiLYdphPc8R2Efsxf6nFgDtucrkR8QmXFd8yW",
  "key11": "4Z23UArwouNmoYqkSQMwYfiyQbRirffnUKAJAFYumxYcaWhp2pEJCxZE5RmkFLkpttLU66SUUzj4V9muFanb8h8j",
  "key12": "5dwSyJku46JXUBhvyUqGhnwMydWUHiCBqV85Pw6mKw91LW4Sz2UFhuJWzZkjMvt2cKQJ3cpCyiZGABRMpHcAYkVQ",
  "key13": "eBQeUjXkuXQ9oDWUUPfMpVPHrACfX7zZ1wzrDon1DjWvkBsxbN4N7nzo1uMF9eWTJRUzaYpTcf1SWKV8xqBRsV2",
  "key14": "3opb8KwQHQ7GKH8PjRdEZLLsAsrtm134b2vhWRtJUposdEsyTt2vWLEJs4mmKjpvmsTiigDqWY42ZE5Nn3w1KBce",
  "key15": "3tu4KLXvNzo84JU2Smi8Zc82rNUrnnyykgSzx7jvDvgiN1HqDmkSGakv12AXcVzWZwfiWhqfPQRMP1QJcPMsiizY",
  "key16": "51Rorx7sLUHcR2kLNAz7hUVXc3XuW1uoMa34j3QTToAkLYSZ6d9UrXRDKBhcWqYPpxTNfDAaZkHTUGgz7pezxzBV",
  "key17": "62h8VrW3bj67Nq4D1ChTu9VYYMp7xuqNTN3Kzs4JW2ztznDUZZLufAkbvQiq1NQxTMnfwe83NUtRjWgtwn22BHuE",
  "key18": "48DuomBDh2ReoGyHNZc2KY5wTMoyScQQFw3SkGe6e17sy6vHTBHRh5P2hcgBbE3GhLn4vVan55jJ8Xr5UcPMx3rm",
  "key19": "2YzZVXP7Qx1RsMfxBYD8sQR96bB5aQQiTzKREt2hjpYwhQfpT2MXfFak67voCiY21RynKcrTcE6jk67qf9XAVVms",
  "key20": "5QVqrTpULdZ6CZ2gZ7u5mfM4bPhUvUSH8RA9Rk7R928BHMs7LwdcPrqWTHUm3oSiNiNQtnikP855QDCspd9kEhZZ",
  "key21": "3aUG4z4mQzdabwR97wf1aqu3qdTtQ9HDcwTfkVRTvh8A17NHWjvVv75GFNaNVyE2V2n9sypRA7aUaWaisUXhoSJm",
  "key22": "2UjVZFQbvK81W9JzS77bGkHmme1ZkqwnaWuTc3irFFAiLzjZfP7SDm9TizgSZUxPb5drAHnbfrsd2gCK8vYSx5Zc",
  "key23": "663hkpaHnhtSqAh3cekDgqoqB9S1qqgYfhgDXWh8VZPzeAoB62razKGFKqh2sYr3JZxWkDGFcNspT68HwEgF1PDp",
  "key24": "ZNRgAEstw1HHRghJt8JUBoJ6jsjmJSHA3wyGGGfkDJJkQtomF4CW5ooosAh2iXL2ETFneSbnGaRFgtqVkv1dy3G",
  "key25": "2tRvqwqLmWyotUGVeuHzTy85muNbwUK89DHuVLCbr3AtrBHA6uMeKNe9K9gMzwWMvzhLSDqzMwGn2TbG7mVTiHtK",
  "key26": "43GhPfxatH5DumMZNp3ZuzFz1qi66A8k7NmMCQ19dxkgxyqcqn44geNwU2n3wmnHCwoCDS8ugYykKUo4cm6ezibW",
  "key27": "5R3o3DrJLynxC4qbKQM7GBGssZYujBXUaiiCzSgKFFb5icxtTV3dCp67DPhGWVv92zdFwVUq3VjVVkZv19VU6Skv",
  "key28": "nJKN5BWYnuHnTPJZCjMRg2ZHaSrTNFz1Q4um6bxH2vQwZjwQJoFR7t6PW3KdJcqXmq2fD623po9iPyrALeya2Za",
  "key29": "3jUNb8HxcvvzBD2aS6RJ8soiy9nz9V2eQYz9PkhnmgP5eiyhRj2VcVZ74UmotHWzmSRw2vpiDvkHNYoV1MvuoDkn",
  "key30": "2jpJUGif4HNr3FAvc7mXHiuAn6t3qRcMvepwxPwqddc9TeQyQ4m42VawcMTyzCmFBx9N1GdGDp5bFSW4DbXKpujo",
  "key31": "3z7fejV1rhu7NtLG3hz8uRRKUH78ZfpBXsrugcDzLGXRDYdj8Yhiv2ApNLkBUNtDhoLQ8zmvYNmnXZLGDK4DQh9g",
  "key32": "5wzf1YkfQMFRH6w6yHeKyTN1pyXLN19g85sJ9qMdgUgsLVgzqjhy4YpVvZcyB2JT3gpqkX1K3NJR3Ni9zDApSgEU",
  "key33": "UhhNxR8Akosi5tyQvDasfahjfGz8Zmc6j1yTnHWC7R3m1Tgks7HSnGG1uxCNfDetSFmjNRK38kkDTU4uGhZtQGH",
  "key34": "6FvCyy2BS5uEa3PVmYxEyvgnwSFy8kevqDXspCCgMdQyGQKJVC6F7QKUqP5o46jtBGn1FffcChBdReYrB6EQyP8",
  "key35": "kBRHDRCQp39SVViNHUEXqnqQJ5ZYH5enCp9pJYC4LpQ3mQSG2sFQF313aapD5H2DKxTVn6mMucEMNGe72CohYrL",
  "key36": "5dWyGBgcuXmxPnxWS7GFADf55HrbCEBzwvRVRjo3FP6abci2XY92WXiNGAE7voKo4m33pazriJSxAveMZto9vP8H",
  "key37": "2aWugr95rFdCw5Mde5FYmFzF9NN9n6iYNb6a178FMTS26eQJAJphi5n7cYNuRv67L7cMnbkemyneXFHKbCy3dJNJ",
  "key38": "2uAFFvmSLB6gT3PJTrHg4BirGXNS7h5KBXR35MqTSBzi63NkcXc8Rir5FwVSNExUAuTyxdDAJKb2o9whHhMZcQR5",
  "key39": "2fitHswGFMJ71qpZQphj5Pym2qiaWY6JcRfixj79zBrxMQ6DcqJ3S18Mkpg2QkzchgLck8MTwgNomexr62Qyys63",
  "key40": "4z9ZBfSjRRtkLo7vj4r9XYYjrrqzwMmMxwxn1uAYZAwfWZnKUzS7fJJmj9HWVdv2moJ2VC5N3rCgUN8aqUb58isJ",
  "key41": "3CXohwAnyhXiDiaJGPSJEo6ddY9ayw51d71xRNvZZVcgTZSVKFsC7Zj1W5hdGbT2jzRiw32x5VuHUwqQvJQy94m1",
  "key42": "zzRkDRtwfNAwkUb97nfbTB4SpZF9jYe7qvnF8w5uVrJwpWPb8e7XFc3Zk7rXqimFbRdZHEQe1ZEvEbr1TEvyyNW",
  "key43": "5pVSvx819TjPFD52ydWeG3xMQDNhdGnRYhxkbkni6ZHDYBZKHYCMUTAyPpip8egufLbQahN2wdou46JHvayNSMiT",
  "key44": "5LtTWqqvH2p2xkh9SrVuiNwLDokawqdbeQLDe1DEaeknTEQzuFEgNeBnKFQL1TNwFwx5oWC5tvo3H7pbX5M8Vb9j",
  "key45": "4vcwhAo5w1CzbTrfxD4imVEq1Acj7hC6BTvvURTZLRp22jE1a1SKtTqKohGSPbu4YVRd5bRXMTVeP5HeYNWcp4kF",
  "key46": "2H3B2aSRizBv5B5Fb3ACMZRWkdSjAJkXL4E6HEapWYttkGsR2LBrJihAwmdiLZCGTt6tx3nUdsYidkQamr6kRgYg",
  "key47": "5D2AiVLEoqqcyBPZRB4BNtYHZFqMR2gvW6nD7fyyyYNUHn5LqiUVaxtQXnMEU2AWJ3BnPMomrcTVu7xPwVStVya1"
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
