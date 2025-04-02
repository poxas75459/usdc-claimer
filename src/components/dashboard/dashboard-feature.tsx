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
    "4eDByQA49rep7uXTCJGVrmb2YH74XTSQcdPt9cWhZK77oXdAxFGdrfMuSTFh7djqTiwPiRFq69yDLkFCkzRCKdat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VNT35g8x6GUVtz7U5BP32Y8wAc1iLREZjug5gBwNPHq2wfrQ1Qd58eMAfof2pWDA4SgaBVtYkiARgaPtYUaDwph",
  "key1": "2Q1H9sYizz9dWAoQUdHFqavYU8xLuRTkvmKFBCvsoZgTPR9DV49tzZkVKjR6ustzcBFSvSURoVYf4Hwc8q8fqyN6",
  "key2": "5B14iX6VkKE1xa6C86jVd4QUDU3iEc1N9Uo6nbQmVJYz1cZokkUHB63p8AK3iZH2pRWyLVZUQUhsn64a6m9j8B2X",
  "key3": "2VhBNnnk3s6e2VPhLhWJ6coykKAdKri8HwQRFi675QbL8HoXxHv7h3ymfcVtR6MTY7pHQXyzcQGLrrk7wgZCi7QN",
  "key4": "44X83wBAfPXkQtt9EoWSY78QP7th23Hyxh9Z5MM5uNepS6se5vagoFUqEGEsQzwE5Faour6JtChSMdWqZKdNFaca",
  "key5": "5gns1AqRzL7sjC64XAzifdqKXBMPvUgmCuXVpDqUh3S2Nc3ENt5UL9bFJghjCgRJ2w9X48Fc5DhgDusbgN4S1BhA",
  "key6": "sq3wBWdxhJcX6Muajd2JBvHg2kihUrvqVfMxTi8NTuNNvVpEQYhgfhToEAfvdKvNXodF2rFysWdRXnHV7BvX3Vd",
  "key7": "63RYPoaFLrfpT934Bgt49Y4tNfk9riSopQDf3XGW31Y71FFhXNS6ZjUJkCh8UvDGxzXUWb5kFWpmBnQsNJeLuAio",
  "key8": "VrXcmwPHbvxxNmrA4Hu29z6WjhV9JW6hcMXCkXCdrPPRviDMHDHtpnNVG19F17V4wKXQVUV9JE2nQ5nfmpN4QUG",
  "key9": "5wykMyzgYMDRMsV76bXL45SvQ9CYQtBppgpMFLmeXQS74mYUwbmchQnQu25C3dkYWTQQcL2pdtpqWP4fWBCdzuhf",
  "key10": "4ADfTj37mBaJNvNjWPvsBeVNzzoWXpHgCV5naW8cmuzaLyH1RsLZhuLy9KuGofE8uoXGRxG49sg2bb5Dis2eFnhi",
  "key11": "5GFZfsXKzxdLZuCHFSG2aEJbjUwnr7a9UgpPv3DZTjVDfkptHrsdFyqjmoYnedLRvaHeD9EMSioVGNu64hfVP4Uz",
  "key12": "3NVhDyHvWErqAPMWzZg3vmdvdBGvfNdYG6wjRStJ2o9JjtvWLTvJrWjUE1riznqVxguVVhKvxubCMAyUiwKfQGQK",
  "key13": "44hq7ZWpAXrUSdDHLZrCzgYY2wFiuotT8oF5phh4XNgviSqEsDe7dc5Q86KcuFrjzoan3E1iZf9Q4A1ADkgZy17T",
  "key14": "sobJrKRtBvQ4Cb4Z2Q1ywZBXsUBt4ghs7sjiufny9UYqGZXwdGupZo3v95AYCoMx1UHcVCucfyQUT938FiAA4Xt",
  "key15": "2TpmByra7dmTisoqJU28s4RqhueANiEZYcXRckSiU4BcV6gAfv3P51mnfmR2hCgJ3g7jEj1bcEkU41Am8izmx1b7",
  "key16": "5XsA4y5k39yeuHCf3jNbrSwY6d3hCkD5rawNjJ6oHHUmcQ7TsYzeM29ESK3pEaw3sdfj3y19BHr7PzLALT9miBTV",
  "key17": "2FzgSrNb99WKmKMdWGA1bNn4BGJczqw1jrBhyk6pQiRUV8MNGxZhyyFC9K1hqEDrvrhtbErNM5ReTgAitofrUrJJ",
  "key18": "34JjVkcXvjC5iRopqtP9F83gecR44mMnEKNT6WFmWZoWSJH5Rt2jbQ3A7opcqMMgfky7E8JWzSSn1B3T2dwSqZJm",
  "key19": "uYfesieqiDA7XK9znmTZJyMwN2c9vC1fq1JTFRESx7mnXyycwn1FH7xiLvMrphTxHGYMVh7g4XuptRHRXKQAraD",
  "key20": "3MGAkrP8CLMUDvcmtcLfDBYXSkYJEFzAGbaA5bX3dPK9WWQXEhBfDN3Pk1TsLk1zy43CkKtL7LMgVxZgGm5v1foy",
  "key21": "4tYtmRMkEcH7LWbgQG3ZZYZWChRg9tyVAWiyZYDRg2Hy9vkTDSnfLhwhXdKESFQpsqKn17yvktUEucL9DyTgyBV",
  "key22": "554npGKXoHWcGoV7mfyWRW28VpGze7BCVFjN7epDNhubwkZ1VFiA6STbDG4sc2vtAVs6wRnV9faaucYPN2TcSVkL",
  "key23": "2fcbkudo1K7tbniZv9KDBXAiTaP3vpo3jC4GEunczELyJvQwyCWbVQxsDErR1oWG2fr1gbhrJGarsKRGkUNHVy4a",
  "key24": "3aA3HKrre5KGMVMujUPGZRA2rVhQCL4Ye8f1o6W2C2guP42nKKe7pLyBF9Bm3uqaH839qBNmH7nYaGyz3tcsQbPW",
  "key25": "5XQCxvaBnNJdzXFHfRuLnJ8RUDzHwiyZN7UJkacu4ybkrtSUiaou29oPUjgY7a3DwaQDDcM9iYmRw3MzY1myTss",
  "key26": "4Q1wWeZpHJQqMm1Dd5eYCggChazdgjQj3bwVyMiE9C165M4h9DDLNxHoJnPbcxWVTJ2V6Ce6hQSXy3CPAUwXTxK3",
  "key27": "4LqmrWAbATUa2Getn6B4vqXqRJjkPMMiJscCNMXEqNPMq5mC7d4D72vYgk6qBUkjiPDqhzB2HVgjB9s6QAUf6VhL",
  "key28": "Wf3TP4D8hewUvs9LSBzaLiMFvmVX71e7iJH8MRYefBBDRQ1M8fpTLUTUbey9r1VjrZWndVgPzQ6t327JizyPV4L",
  "key29": "2JAf5KurTQ2fz79NRq8NLViUqXysmRjcpQqt6HG4K7CwU4Jm8c6wr65uiTBjMNCaFtKbr9MeJtLX85sHJB9xyhYq",
  "key30": "5gyrfV8W6dCnHKEAyhSigHtZmAwW8YELUVvPWNRRkGWZxvEeDHzUDBkStNCid4WbgcwULV8Qai5K7virHZeA1B3H",
  "key31": "3Dr4JFuzXLjGFUBKB8dFgjj1kZ83tEoEXCvQ5dGcbMGtTioaYH1Y4Tcg1p3XUVuaXA7kmJuVJYMZzD4ENMcLwQsY",
  "key32": "2EMsPyaUQY5KXKjysi9YJM9QUsqdxyzLz4s6wknSk2FEEHDE1JyuXwx13Gm1pxBkUeJWAzPMeiQx1Vv6yqWoGaDt",
  "key33": "4aFyxEKSJePAysRb9nmkyJ2iYAZ99BwzGr6Greoyy5xzFin1UfmogwfWewqyr2x63G9Y7X2e2orE3BdvWr9eeo7p",
  "key34": "66eWSNuTSYxcoFhnM8VEdQudz8Ffnk4FiX7Cn8B3casyjJQasn2mF3CHCvX5nUFYxspMJuxbcQbL9f69cqdsfXef",
  "key35": "4bPPN8V7S9Aq1nkEK4zLbXDUhZM7XsFX8wx1fpvxu56zCWovp9ynBmr7bEkaKXnNvSdWKE1a9zivdKvuLm9YFozE",
  "key36": "4ivqZ3teVxcj7vv8LVGertrdCCZP1EQKvW4rzGg8Sty2xnhCuQRjsCF8FX9b3zbVqMjECYzchhx46j8iCWCZ7B91",
  "key37": "g5gqt2phB4S75GrLQt5ySiAC9qDLMxHK2UQ9EqAqNDRLuk6mJi1LmaSv1DrSa6sjrUG48vVXaLoJuFCWbN7HPS7",
  "key38": "4Z9m4QrTy8PJQZ9LH181ay8NTtw4srNr5e7fA6L7NvpUgywP6QM5fRHkRBkckkCPBcCTEV6KRKoYZTEkDFLfzfCx"
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
