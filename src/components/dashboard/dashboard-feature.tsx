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
    "52y1qcknZbHKj4MAVNf6n1Vi8x5XjPhwAUXWmKKfVMsrmFfVceZeT9aNLPNYtRxDdkVR2rS6aCb5iLJKjCWnCWj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pncf2wyMKYqCJnxRmV2YrNJp4ohv2R25TwBaCfzuQqXy2ub59fJYfXyrH9yRtAKKt9ytdZadKET97DxFUB2EaCH",
  "key1": "5dJUaPeFtyEgqiJtVaDSZFDrQbYBScUZAjHq9Ufk43PHoZ95TcuU3jZXxtAYVKFx2Th9WsHZNYCp7VrgFmcqVj8L",
  "key2": "4amvFeXeBKEDKxkA3dmHHpTxJ4mMvhmDtd2iAAL9qpaPCyAvKnmFUTfgw7FZ6s7WxPPC4BRFSE6o6tUVDvAMCR42",
  "key3": "AmGX6HAtHUpiXogBKwrBxvAz5PtyrsS3295HCzLB1FXgp44UZwYamKuR7CQkeKUzNWkdzCeBpRUSxMwUdLC3bun",
  "key4": "3Q36cs7wV25EXMep6GqrudwvzoZBkJHtCTodWFgp8VsWbCN66viG1rkK1ViMPsxSdpxVjaPMuR6mTAcWAKWvwpix",
  "key5": "4jwVAHtAqmBmWBJPVqUh8acxAHasgab2i9kvZPpZGmnEvtZsf4YDz3a4SPUXaxSPB7ZXrXgtAXvYxks5XeAUVJAo",
  "key6": "4GzvsCaKaBoRc7HfwRHgeCoiThZqgGs8CsRPUAiyKaPnoRv1We4oHRkrzghPLGX9h497pQpnwTa1BCyJw7PenUv1",
  "key7": "33R5vufC3B4gCuDTsZgotTWwxzVTAK3zTB5pqSSFtbMbxSGENkiRrPN3J9gQmHLG5Eh8w3k6xCg5WjMZCB4VSMph",
  "key8": "2wAkCYRkUJFuRqdTAh7Nb5rqtjMfCw4Ab2epSbswCudcfEo6rAHP1U8su9EKHcYyYRNXemmjAKvQb55F7LHpQX9",
  "key9": "4QPaE2cM2wqbXkZbuBFUNsWWYXwGfwu6bRWpAmUfbAo7qtD5syhT2MBBDNqo2vxyHYRBgxvgvA9mJUbvv1SVR4fA",
  "key10": "5Fme7FKxXWsQJtXAtkJXjqTqHF1GKv2qxr26jZ5t2XNnp2gjGE33sht3X2Sa34FoPtzaTWsJNneGUiYuPTbPFmS6",
  "key11": "5UsVbAs6ZRbAGF8wSMPVKqyiS3B3CYnHWutztQCWBfxTfWecqP1QK9tgBuunxnaCgwJ8ZC17HHPBmb3RbHJcTj9S",
  "key12": "o9dbRfeVB6HM9TirLXrmTHE23m2FH8x9eUugCfycxy3kk5wqyss2w9mYV3mpkwWK4X9taAfZA87PiAGdhod4yEL",
  "key13": "2x4Zt6Y6oM6dNbMjBjYcAT6VawjfJwFrYk8dxZVQQmayGDoeoG7VRaZkbuRwNZQU6qom38YKtv164aStndhyPms5",
  "key14": "5KHjFMfrERRQqWR15wrFQ4U1c6cerVh8b1C1aRhC6F6G51VMLDz7KKgFbxc5edoZ9KyMkkzFv7cd6SZVzJ7oqykA",
  "key15": "ihDRZCYTWReZHVzVbuXetrnXNfkgpchi8N1v9CcTmtsjJ2PhjVFXWiELVexCShhuiAwCYEgHCG8dK9kdX2gxHot",
  "key16": "3TF4MxWLTF9TDLMY3qaENqy7CRMxyzsFTaBZJ2xDjUemua7ZxgaFjjt37H6BzoTi7BELzPX75LW21F1cKcX3eFYu",
  "key17": "2znDfGok6tazxNuvj7jbr8cs8Gw4cmJwoQYchrEnGhjmsFdvUbrxMYdzf7iq8iGKXsxootuNbMYnrLusk9KGk9JL",
  "key18": "62Yac4rjmes1XDmETFuNCXx1V1qwdvaGZZ2Vaa9ueNTkqN3HB1UtN2UFkSk3bCeUwXQSKr9eSm1kJfZQkLyfBd7",
  "key19": "5Q5uaoD8EcnqF29895FSZSjk77Sy1Cb9PFxpB6EdCvm2PavzFUGCmdU4nTEx1cteh6quGWAUwD6zW2KGf5QHzosR",
  "key20": "5qqUTPG2chAYbwrGkTgw9UH4M54ejYXrQ1TGCZveXuu59DfnHAr1w6LzGrPmtDGMXXqS5ucug2q9ysXJBSw5wRfe",
  "key21": "FHVBNxvyTptLXnnHnojnwxcP1ufafzJ7K5oLufBZjXSEkUdua5YrNSyUm6zHKsUhjv5oGa8AW4sm4QG5cvouq1i",
  "key22": "4V5j2eYLV2xLRxU1kgsv9YPzjKHdEF3WxJeYqysYY2XyJ3xeotB3D9o18FDu54r5vQeZeHRk8SymUC9jwL5gr6Co",
  "key23": "4SEx5iha7XREDwsjPB8CsGSF4rujWnD6C3T66QG16J9JTTpD24aNWADAioMxXTaCsPXCLSdapufesqhsByYHHXNs",
  "key24": "4j8e9CFTdz325WsRMLC8dNovK3KD3R7szb47oZ5MbfTXgCYJu1qdvSEHvxkxXKkxAWJthtkcst9LFGEEWXbQvqud",
  "key25": "2ALVrC5TD6VCnRdG5iGyqa8xi71dK9iKFqDCcpcEjfPxb7PgoLjmgBjK6p2zp8v2LH9sEe1Qw3R2tR7DRndu8a2t",
  "key26": "37tegiSCPEJVwhibLz87wCc1qsQziu7Efn3BDiUCeMic4rBC4H9n6vaDpzmPWkZPr8W1zoVdz2mcwoZejVFUB8qY",
  "key27": "6AwNCTJUn8Y9XFFuNxDEzEhMajLsehsrzoezhXn3y95ZUMeBPn6EhFyruGKAj3R6tEcCRcVrY6TYM31DqegRm5b",
  "key28": "4FCvSs1Wp3ppgXydKVjpcJQG9EJ6NbfQBYKBkHfEs2NHozviiP3No5uVQcTmeMmpW5yBiCiFMRKsYvwLv1bwSJaa",
  "key29": "4FYuebSYLfR6urEVwLbQMCF5x83oPLVKL2tW4xGcEa7uAGstS7f7GQ3yQGwr8ZawhG9Huvt9QkDFDFrBAxidhKHM",
  "key30": "5FY8MfxUWkdY5EZvJgEuyKzzmSCXpy3SywNLqBeSiTpqJ7TaoZ2rxFq3RkpLgS3CGtD2Lr1pcYsgEQmMwPq3wLmp",
  "key31": "5Q3EML5CCcHyYk4dMPiVsUiNRmJBHFMe967kFFqnMEddUj9AgEEN5LxGtFqF8UhekHb3HL88CpnqCjviUABJLsGz",
  "key32": "2YhFk56PYnmofza732Njxc3nRn464n9wvDjkHjw8EGXozTkfyeYHYJcJT3GSKFhxwcbqmzHUYMnTR1x5xoXijUJx",
  "key33": "5vSoDB334RSKfzXtLmq2dLMPY6P4FwGzKUMxpFshVVEsYUuAxJCyvwAYYzzP5KheasA1vHGPV8DmK4CNUqnfe9UZ",
  "key34": "3QF8wv5bRLkWdvu5aaCwnKkxiQFnkWM7argkqaxA89q8iJWMKnndDBCv8vsdKbaTfGih9SgLPrJpmwJPFXmGASwu",
  "key35": "4pt6hF5bjh18SD8kjDWDW2DNgVphjQse28uBBbsMHroa394ySyEqTjh87xwE4QJxQtocv25Uw9uPNP7G2oavAvkw",
  "key36": "4uqGJ8aorhHJLoPoyTYLMgohXQCLmsuFBMDBwesYC8z4vMXyhN5Q8yzgMuXdEg7Ht7XuCeaJHNHGvdVHVgKpqLj9",
  "key37": "4oxewcXFCtWUzef4jJRWkUNV5ks196sVurE73Mqpi4UtRpkSF3pUsjBm4WZTfi7g5QEH7n83ckkh8ojST9V7uEfh",
  "key38": "NP519obwdhMSWi3dkGF5CEW3R27t5KLukuyAh1cWUpEe4s28ppzPLe4VrTv1AGt7haR3Ts8BrVf3h2i1MrD3QyR",
  "key39": "52k5R2zo5P3QZEg4hTVhwa5h1mdBVCJa4euTeQ3N1okULCEhHzdjSNNVqxmLRhLAZ8xALAMf1k62Uhc99e2voFB4",
  "key40": "4S9GXht1H8JX8wj5QjN9LM7tqmkC5jnmdv9qK7fMSfhHAEtspKbvHiFJAQARM6odhD8VmkYQnbHxVQu6ueErwyWT",
  "key41": "4qZLuRfathZveLgBwDxPVMGFuF2dVH3BrYa5GTVB4ZKnfzzDUQ2rffc98jGQMFwA5ko97JsYGrJNQEXtBLRLbBAZ",
  "key42": "5Um9KEXodRtGJ3xB8raNstkMCmhdkG2Q2T5CNBX3LJ7qnqGnv8qxzWeyu2v74gqvPnVi5yR8ZmH6wBswjSoBC7ej",
  "key43": "5nrnMxhwgUJRJckA7LfBJLBicQFnbeFhUWJgukTeKBFiLiFk8up5FtU3qL1hm6Mm34jVh1R4JyKb5GeDe8Kb25DF",
  "key44": "2YkytGNGoiAeKR2vmPuD2qHvJ2o6hpw4W9HyKW6PEKeZnkGP1kYRMbCE6f2LtY8bVMMYBPxxeX8svSNPjr9rsnw3",
  "key45": "5nbTi1RCXLHWYYqhYLGzUiFr5vHkMsEGA9TmEsv56m9UuAWa6pTFwRwsgPURk5VtEX349UKg5mDPMQnVDUJaGVKT",
  "key46": "3jrVx4gtv1wv9QDCpKYYnvkUo9mhbgLjTyFTn1atSi6mLx2mz495o2sJcnEmBTxWe6V54JEkPbmPCndS2Xcc84NJ",
  "key47": "3QR76FUusXL3c4qD1jJnVVVDSPddEuYGrfKqgGAQEFUXVqGdDDpAR9CKf5NaBJrZ7CYxKQwvPBcHhHEQMnQsTqw1",
  "key48": "hnRyyrp5ZEXgFnYB6PFSb3W5SWK2sxAvgGpkXy44tZsueXYrmQQhz2py9baGuMveqFE62KXHUybRzyecWept9C7",
  "key49": "U3FeDwVu8rzuNZWiE1gJVRtVeVXzf3763SVrGJiAVBJxRQcHnYMTStzURQjPWwTjGc5z28TEd2Ha39XcXY4euyG"
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
