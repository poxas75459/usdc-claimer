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
    "4CsVHexeHbqANCbsR5hcTaCPdBSNK7q3RunTiCHVxb7TZwCRvtiuqECQqLspjA5SSsSH8gUbXQQqgdMkgdfjtMRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rLTwtcRFsSrnAvH8RTfVeFxraxbq7kuB29GQoAsn92dXoHC5hpUg1d3fhExa6ZSTUxos9uh2KKumPAGiZkoTQaL",
  "key1": "57Kowwj9zMLgaxhzGGAm8HVafSjdohwCHT2UCBuPp7nXMpDKLkBpKbaPrsftV3dQGdWHfgH9MbzkT3edqFnDV3EL",
  "key2": "4Ns3SghzC6NTcv5LPBRKJD4iTzpo2Cvgvuiy3Lk1HvXk7CxRDEjQpXes9u9S1xs6jypuUdqxdQtaYgSbXn4fU5nV",
  "key3": "3kpUNJBPj8LDiNUQf8yywtBnzRzjU5G7c1d8NmDY7BU3s3EJFzD96SJcfAzuJ5Svv4aMNf1ksZwMXyEWLE1igVNH",
  "key4": "5tWNGsAtftauXjFajFE5xPPpFBRMK38MFdqRxw2s7xwxbpTooh65mvM8borejZNezoTuCssXuJ4yk1yf51RvDMtg",
  "key5": "w9nnmfKLXkrZBrxi8TxqzGfbbMYH9R2EJSdyTPUD5rsa7xdkSF2tuqh5QrA6hv8i8tgeLseBTPm5e3262R6S3Tz",
  "key6": "rZsq2peohdfXzXqpW5u3tDzpmZhtKJR7jERd39Q6o71qtTXnTdTzC38j8e2u9ijwTKacmvkeTqeRjzEiArRuhg3",
  "key7": "44aypQC6e8FiSt5ABgjexNhz9gCafxg7F2TWMnkTTYzd5ZGK1LzyrFENjFaDGbNq8L6eHLg3pTW61obTkNfjTu5o",
  "key8": "4Z7tGSLmf8imaR7hBoyuvJeHgP8xUY9xq3fdq7R1vWssG699fzPCJL9WA1gmyLLKm9tBrFfesFP3jsY4pFzVDXE",
  "key9": "3pgqRC6kh5dP2tLa3DNKZyySPuJpkfG9q3yWr4Wqj45QdVUvvUTbeC535SJ75CnWK5CRZKYZWMgx1ZRSRi6egGbz",
  "key10": "zJatoYb3d2rmootyDobcSLSyu1Sb8B3u3SQauKgZcPs1LB4baFxVKZPiJXE98DExFMEiUNHf9mAFaichK8bicfW",
  "key11": "3jEYDMfkqSaBQZMxYtF94y4T72SLhCEdEywdLYhm5bAGbLRnGyMxPPMX2GnSq8q41HhnvA5fEFpzAp3U5yRrqRR9",
  "key12": "2Ztzf1NcTnwF1dszdf9pns7d7J4xPHjisWwAS3ESSVfULHeLRJjdieyezENBb6rE6hJNjGr99wpJmMGrn1WTiqTr",
  "key13": "2d1zz7wSxCPabAVyKW2dHDJojEnqi1gUfBGEwbC25Tjdp22DwGB7WKksEK7A9Gt9v4vphHiYjuxdo8zmsD87EdJe",
  "key14": "5Msa4uQ76tVYBCGCc8yu7sp7FQuJHzk2371cjry4sDLxyMR5CSCxL5DHHuJB3TWFkYMDonWQhxgkNjwXTQfHthpi",
  "key15": "3R3uPx2XVRYd5FCxESWbcWWpd7sdegzKpEWRDniXaojTz71R5ojdze2jtYZcULET6yobJw26zi774A3fkEMWKvt7",
  "key16": "37MJKE7BuEYH9hx7ucqU1H7HvTPvRkDfLNJ2jRhZ16wpPGDEt9MBtfPCwgrg6mD5BXPDC8GCTj2Gx3vLmbX3qbA1",
  "key17": "4gH7VQeBdCrgV421jPFq6qTmLysRwSEnas1GoRFTuQLD6oADj7XUPZW5d3LykKEo79e9mQKDuj7qDcXmAdXwTG9A",
  "key18": "4S9genjccXLGGztUWbPiLzSDCtqWJvGZj3tGdmzvidWbHf2HMJsgifedW7eErFuhEiHguh2gH8HsChxHZkYRZfdd",
  "key19": "a2uC6KXxv9QNneSt9Bk4EyEDsaoHygX3CMGoGLjKGSr3RVKxNVbiNHqsUgiEdFX7RxxSxdJoH9GondWc8KEZkMq",
  "key20": "5P36U51HuE2pDCP3GNApGzqR6xyS4Thsh1zqzQVjQe9n81DZPfjUSVDEjU64JNy6jJuiUVB3Z4KcJYCKpfrK8Vn3",
  "key21": "SWEJbGSMBAYNKu5whb7dWSLJAtJPbFJuY9p9XJYHTuRLQvnGfuG49dRMhG1ZYfFC5ZBkYVAR2D2gmnF8tjdAhTJ",
  "key22": "3j3t3Jry7GjWwDaFANfxFEmPYwqQt1CSkuWgSeF9nNcoshiPk9NNu33PU58sfUYd3FEjhgE72oJRGxUsAwZ5UFiQ",
  "key23": "2EfETvHNdby7q39gjtzDUgMffw6nuFhc1Gj6wdcHWn4DVNfD58aGuUzC6SkzAhv67gQvyKTAgFjWGWYSGbnvrryZ",
  "key24": "4ZqX6ZzT2XDVrC2qk99MHXxzYvr7kZNB7EZoVD2dYVXfza1J2ZuvfqKiLhNQVf5C2MLywHKdDN86wvS9kLckU2NV",
  "key25": "5dEGtPWWib3L6YRjqjxzNWn9h5GxNpFH8cXxfPXAEMscLiKkvH6FmxgGBC6avFkspRFNztn1VYtxh8fTiV4KPB8B",
  "key26": "2hoCeRZFbGViJVWRwiyga581XQXtBEv5FG53zM2o13xmUf2bs2pNxn3x2aepoaqNFrP8yVbrJ8TN8tT2PNsUbWwj",
  "key27": "4CEXGgX8SUJCdHKNid88VfGY55bvr8eAmSarkYL9xFEGrNMMhbBeCKYB9m2T47rT5Ew7WLk1WUyTNAUvkwgcvKrj",
  "key28": "2tmozG99xVw3R79fXw5PhQuzLQPRXSGnUNodRkYSjRFZVxf3hTb7Fhi13enahDgJMLFvLpUwUe749fkSdVCdte7v",
  "key29": "3TVUJhSnAoe77LuSu9Fh1Dm1g5jrWCaq3hV7vjTyKiLdkmDV2aSb3Rq3DFtBritgs8kAhmWqJ1kX3cKLtDDV82nh",
  "key30": "5Yw2oEhrxFtxUEgoG9Y84pZNT96zKhReYufmCYQySGgp8LNT7c3nnEuaLraf4JPE9ysbGZHtH7eFsKRF6BC8wJTX",
  "key31": "3HmWfqkS7krNAr9kAPNUhVhtrzzsruAHasytU1UpyxKc8oMW2dVryVKsUtWfTSSrg7oRKH4BxeeqEarfyH4pizXo",
  "key32": "4Jb4FiKbeajDXherYWsZFNWme3gDMoK1nHWqdC7M6N7HX726RQRdk2EcBL3Xu8RMcJPnpFjMMDc9UkhWFdr2fDRr",
  "key33": "5CPwGnmmL9n11CFNQ3jZKQGULHFVtDwas8uKCCR13pZEkvYsxnGt1RFmmKyVVgeHZDhe3NAY9FAfsSwCuQVjKgJc",
  "key34": "3g2TRKw3XCHLHedqZnh92j2whUVLm2TGiRWcKkVq9pAnX9XoDinfo3YcWn7euNShaqWBXmv8GTjx3caaD8QU24m",
  "key35": "53Hnd2rAsEdkLuBxnCzMcFC5i5YANLUzNScJSpgbBCD4Z5F1TQv1Twx74CiY3GP8uMFXp3LwxuS85JojG4TLcSqg",
  "key36": "3G6rVgdEBEieBeVhEviFi6tzLVY6ydoj6NT1Q3WJZNZwHPfK1nnKzn28B3mNsSYnZ3B2Q6rbKPJbRrQ65sctzW39",
  "key37": "2tkdoRjujKon9fmiPZydbP3z1814oL1uWGfkZo9UNqQYUyJquh35xFe6FcoswwAPYssidDWZxXM2kuuvKz6CYRvo",
  "key38": "3rWmV8aVRkV2gp3qu3Y4nF84YZqeD1GzkxJKzHc6m7jTZ8dds73vQE5na9TZJXXs4ERpmiAzbSfpKobL75nh2hQ3",
  "key39": "5KZSSDy7g2XYZV2XUuArMyAiQrw3HJh1ocS3cqoETVdQc3jBS6nyf2K1q5b7ityRpDUTM8n9Vgj4cNbqT7bTNNUb",
  "key40": "5UVrrUmgELQsWcDzt5EsZgWFbqem2gnqRbkTxRQdMc5mLLx9qd9NRPD29R2qxEFNUtNEnM4zWiVKaT51azU3VsT4",
  "key41": "61UqRPPgDpsvQZzCFXkKwjbEogP8dBmVsj5v2cGyqstvfBXJkCjkhaztxb8ZafVDjqcmHkKqPr6kpFyj5ecgBv8a",
  "key42": "5Y5WvEDgJ7wf3j8rpkfZ3gUFhftg7wdbqqqC2YUUn9vVVqHkJo1Nmnv3HYXa8Jyo272FqU7LXi9Z57x3azp4odZr",
  "key43": "5h2CYNu9vBLbERD1gLaNgVSRDLmhtBH27XzaQq8RfDANCZtYmbT2Tr8zueyZnmQnSbQjVyfyFxoVLuxYC2LqJRfT",
  "key44": "PPcdrWT5dk5V2XNtrJQvAxLNze7JaQrAr5ML8CfPpEyyUxKMRfEu2bhjqi44Rh14MsUqaFMcKz7KiTi5kWVS1fo",
  "key45": "wQdeuQsZNKWVs21Tfjmtmk1RMeBhYgytdbpMxtNw7c2ynGAHmW96gkhY9RGtXKc1VDMuoJYJaJ3qSudJapj8TFY",
  "key46": "3ePigRafN54AdEWxSLPNoDyDWMaduWq84Ks8a6BX24rCR4tQ2vwWHX35WQCsiy6fUoZA7BZ2kRJQAMKWTGirUGCZ",
  "key47": "4ZDDABY1D5o5gFQPuJgmJeq48o8zdUmwZsntpdt5CAqmNb87SePeNcWJXY85PZVsWW2dWyGbahTUxsWpaiUR9VAn"
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
