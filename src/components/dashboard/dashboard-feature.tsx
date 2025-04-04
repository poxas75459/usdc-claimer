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
    "3R6HjpKLrWxMnqULAnVXP47L67mCjQPG6wmWRrZef3bz7x5gexrktw1XeGw9BUKVexmpzWE4NJfnS8Nh9Wvnkexi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kP4hnnNp2BXGKFnmxmNhtrPjRJwaBUjZxqSbRVpEybk8Epgrky3p85xVpWWFA3SiuxBb6t35raDSevhsTtrNUdf",
  "key1": "2TfBTehZoFAPpm3qPkzjLQoif9vNXQRGKPZYTYNTUbM7jtkjmPyp1EUxyLahMA84U3TPYfCVx9WjA6Vc3BNxjec9",
  "key2": "5tZQvYzK9zesWP8mk29sKcrHxcV29riAdJkdstchkX6g2EJvznJev5QTH9e63m4UcE5gJkMVdFCgTQ5ySfM9SVxy",
  "key3": "3ww9mEvTomNZDwfK3mWGNbRUnt1iMjZnFwABBMXnCBsKyCo8KF7qQA2Sxcvo3W55uK6Nnyc6W49D2h8xYYPdzcvZ",
  "key4": "2dWc2hXTsiKgCKkQx62JU8LNe51tsb2yvewxgr47zXrAVF1maTpD2PupYBh4wBXUDP4rcpJoPZSV2CJzsXQCfRc",
  "key5": "4d7VDW3rVzeHPzAYogbVdcfsryU77i1iG6oFmz52ozA5LCGwCbWdYXnUR6EHcwKDiDRF82CZeh6B2hMohC1iEYK3",
  "key6": "BeUkukN2oJezhbveRs5pzNMsZpDQ37YGaCx57JnyvwbFi6Lno9c3Vqo9FaSACwc25S8ismuFv2NrNmU5jCD6yJj",
  "key7": "2FboATTsBjNo5enxUX8VrcuzCJvJCjQuYgvHxHYGX1E6wre1FztZGPRPQ3oAR8psE2awvnTu5YFMuWbXLxcHH9aG",
  "key8": "5PPyLDatgLXXPjif2YJX8vAegodnSubMjBFqDoEy3MiW4vkmJcPrjv4w1dYvcSdWFmzCPr67zy8VQ5xBTrKHvm3d",
  "key9": "662PgmDCPrGpzjEPkzKnTfFqh2Fv5ks9qa9KBzsCqpRwDNuvqfMDAaSCuySGEZfGzLSTXkLCDgKGXNmGnYPMNrQF",
  "key10": "3isQ6165RWo9Aev4qH94ggKejpZgnCXUVo8BzSGp4UrhdMELzGWLyH82UMFpVCsUuEErcaFSwDgc1nv8XxaRcA37",
  "key11": "4sS7BDiMPqGU2DMwjTvkFFSmNg1QYBXMPfoLfZ62RsbUX88LJg6YQ8iD5F5TLCAgJwZueg95gpcqtTYucMFzQ6H1",
  "key12": "4T4mGKgAjCXMVD7n9AF6e92kRkjC1GHuGXDtvomsgZ3bzmCLxQtyK3LHBE68ANN8YZyQcr2DHPtfUBgDXsF7eY9Y",
  "key13": "3puv6ABG7h8F1iRX988no3EJGoaEchsNPpTAht7pJ78714KGy8jw2GwwYr18ySbCc1hSRRnVAFWGPxph1b2TPmwG",
  "key14": "5cZb1TNZtEyAMNHSsP7T37eDdknKG1aina5qrd2kTZ1SMgr1sUTt4xvREhhRjA2FBa8anHMZNr2BATJucwBrYU4w",
  "key15": "3HpwtV9ALrJ7heQa72NvbvVzppavgSSgMqUhYnuxpvP8eysoSrJ6dCSXMAA4ZNYsrjxt52b7HSvMsaxmjKHxovrf",
  "key16": "47RKHXCCGVuMtz8LSMiTr55pMbo8j5G5gBFw1jhMiBETEswtjZ16uAYvKB7LwfTwcZJKZR11DUpLQfDE23zhUFsQ",
  "key17": "4DsQNUSffbkorNDZZSBPoVuxvT9s4JiEoPS5MZYZv4f1Rz4mSb29rba23d96Qe4E1vf9nThgMzuqbFSE4Hpo6Lwh",
  "key18": "3zcj3yiZodoWoqigjVSnuxKRiPT6CnyFi3gAanysN77RSnPJv4v6EPPFUR9r7qCvBVjNkxBWkPjEj89CGACLWpZB",
  "key19": "5izrmNjeNFEPZ94cwWEXT1XJrDbkGnCkG36SuHKoLCMCCCxqQosEQye1cm4sWpPQvvP3gRpewwhE4u4ZL1PNmGLJ",
  "key20": "4o22W32PZ4CrmiW53SfQAV21PKg3BBVCXCQJfkd7yvTxagSfvRiexsBjLrnpAEdUtfQrra35q5hQpYMLYeunCmGs",
  "key21": "3aCDV2feGFNJGZ1nMdmunDuHJ8H3mqHbC6nc4TWqWtFjmBDxHNva6wrQ5HD27kksDR1pBQCPuVRxX5uiR6TonQhP",
  "key22": "5mqUpqCdjfSipQaAkdWPNcFN3FGiQLFu7cTvYitNk9ctigk6ELvTkzyh6owoHVaQ8XBEg51hHGu1vmHy3Cve8R5n",
  "key23": "MhRJZN4NSsgznRDvqRiEscp6EKpbqVDtHfcmkNjSwz6hZhzWNCjNq76LwvBnmrDdkiUcr97xkm3jDcXxUposM2j",
  "key24": "kZHZXRAG3hdEFr9acGRpZm2gQwMviTNamvDuEh1ou5gXgBhUvcMrJanLYMywW8rbLyQ96QdNwwCFnKBanUwfckj",
  "key25": "25mmvjgoX6cTpoKzGvsAdzXxVvHkUMsbMtqckv5APu35vbKEgYxxiXW6cjRTUt3vQez22tDGCZzLNjdVhiZkXnzx",
  "key26": "3KsBY5zW8RCB27kZcJPemz2mPcnnichawKtGjQdh1U5CS5hLZeuNCw9EFK8eAMst1o8JpEUDJXYjtBnA9M3RjxW3",
  "key27": "5pGKBiGK2XB3ANHmduRKTfn8LLq7NaLsSSmhdp49UHQgFzA33Mot4oy5m5zAGgb3zufVTtaPdBT8X71L7jGdi18b",
  "key28": "595kxZJ25fzw4JhbXGfYcNoyPAnnbsSTBha1NkfgkyywFcB8EdyqkhCZ9ij8QkcoPALuQ24sMFzhkmcx8WtoBKQa",
  "key29": "4et7PdrFqQPqRnw7DbeW7yXEmtzzSjCsjGwmbjtwBrVbfs5RZBJkF9SQH25EQddX9U5f3hhsVTFBkcexizyxntsR",
  "key30": "Pofv68C6kPGUT3uzDsYDZRLjyv643M94nedEuX4Bg1x6YCZE1NHVq4Q55c8X2F4J4XnxNPferquUaRdPcoUrYLL",
  "key31": "56GKcPLcFny4xPbBfDdEdxZEsjqhXkBvLPDJZ61Vi38FZYcMFETwZkyZqRMjar1G2hJsjxurckRVSwVXpiyGjVuL",
  "key32": "2EJ1E3A9x7QGXVsKASA8CprTpJLczWm2NvHF5VgfU8Y2yR9eHSLCVkkoeGDo7kJUsf2La6vvMVi9BG4ujz63bMQQ",
  "key33": "3PdLz4mu7n2rxCvCdnzJPzLzNwzthNQabs2J1zWa6NvBAkKGNE8bCLgtWgfoYDas3GxsgyQBAiAdqGkMbUjQ2KoF",
  "key34": "58hKzhNFvmk4XvNYv5vYoDi1ctBFBEEo7SHHZGriqtGtcbnmRNNMFnKb5oWoJ3NnnmWGMYjYHu7bLZjcM5jQLUWV",
  "key35": "61gZXUHVBUiSTWWQMvEkGziNyno7c1qdkAoz3gbPobihM6wFVeurCiXoa7v3G77DYdZs62ZPh81UodLgqXru4spZ",
  "key36": "2gq7bGeo9kxsURyAd47X3RvcRRRQBVjm6tU88rtpSLdbhZE3CQfAJyxEMNJF91N52qVVoKN7EjBMPBip7yEVTt6A",
  "key37": "3EiFXxvRZXnsnG9T6fNubtjR4sXJUnzMVBEheQdvaGPQwojuVK9e2UHmNEnCq5dy7RCKwQHYWqjAzML4NVyvX6Pc",
  "key38": "4qMo9q6GY3AWxYN8ZLWUGFcNfH7AjpcmqAUGk7rwXwkwfHqVKuCJ5cbiqQ7bFueQFmtfJgUFSXTVPbFfQigxiWHG",
  "key39": "3YNb8mVhgfhoFTGKDNbnBjrwSdAK4tUPLC6jB9UmfjFYFK1fpsEkwv8QFNah7YsH26Ha8QMrGnS9bsysicCJiDM3",
  "key40": "NowcAe1pPxkjD8H2LGZ4S4m4My7dpdu8VhjCkwZik4dvsHJ7LAGesigvdcxFn58X8zCjut7BKrvZLhirtRCD9tM",
  "key41": "5WgjC4VWYKwFKuh6A7i9rQt8y8C4L9iqQDYgroyBQfT2kh8RbkFpUtPkFLfsTdBxv7sRW3rpuonUc9tRKBWGrYiP"
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
