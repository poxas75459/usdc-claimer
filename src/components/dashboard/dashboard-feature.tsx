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
    "AXQe4LcBkMrNwBUDnqbtDuYgctqVfwXx2mDkqQL8MQMs3KUn7mCFLVAhAdM6BUEnopq6h5SbhPJNZtVCDQctxTD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FxzV8BqFTkvRLjN45HXEZz6V4yRDECAccB6htLyFsjjizM2fgJu9DdbS4h7fMLQogScwZvTu1Dh6H4q7czDLgMu",
  "key1": "o47yUrn8wbE6RVCJo4zG6g5PD5to3FqKNLqduPJjABEnXY1CE99pH8W7giAG8HgTzDnyPAtiMYZuLvsru81vqrT",
  "key2": "2GA9ATqhT17B4spRwEvSxbLp6L8N8gxSHQWvvdVZQyQQ8s9qP9fvRoMHX4QDxiNthTyht6khKYB7WhNhjY711QV1",
  "key3": "37gNp6EKWQQUagBD6rd2uAkzNhyJfc3NSUX46iU8KtzK2tXrE25yYDqznf5iBGU5xsttu49QWPZx5AM7GLwQezaL",
  "key4": "5pPvJgd25SwxTzFothJpWFE3oBtxcUREaK7JXX3USM7ywQovsfLFbBaxDY2hb7ovoqsJsQ4WiZpT2WFDLy9ZQBFA",
  "key5": "A4Zezysr242yXxvRHYPLNsBKwdpWBmjdKvdxLg9V3eZYzKt7gqFGytf2mYbKDdSzTymZd7Lcfr8ziLa57LLmXvT",
  "key6": "58DW571wzjjXgTbzhsnB5dK353GDpKFeRACXTddGRcvdgpmSczC4oytuwdRM8Z2nnkhQyc6hWdG3GchAJHoWfYRM",
  "key7": "39VHeSJznXEC36zJUMV5m7cu2uR7TzDw2UjjPSW71CfSyLvMnMVLiW5cczEqZRJkAjLVsiFfTapaA4un2CZ8Ms47",
  "key8": "4GrrGGXEWnPUSXQku9vucKbqveGdVMfmtd7MUyrAnGwN13vH38hNGGYfwUGX5xC8UB3R9kCzuKqFoXneAHJTVdN7",
  "key9": "2YPySKpWxpxXqXYpyHfx6LgppVoXMZm1XyNzi1bbpU1WWHFYqc43UvDaAEy2QdkvVUhhTyRX6kCq1PVy4FcvYbFZ",
  "key10": "2wHyHn4LrGHVZk6pFYG5CLyNrS4xJ97K9aon9N79G9wdtWGgBmapW16m52srkn8H1FcVttu4GuXzAgmWWDEnPiWZ",
  "key11": "KXCrLk3tebDKCgYP6ZxxTRBXxTGckDZzorhSBLpyWpk9rWqZsyBwwjSxU4bKoeEhYECXFXMbtzGG74FQL38aqhp",
  "key12": "5f7fJUJyf8onAmSZNZKxEoSQsqds4Lcz6xaTo7kpq8CPWhXgb7pNj68ZTPpB8gbzjbeWG12Am2jP2BLpu3HNdLYY",
  "key13": "58CdZTkGhGQZXecs5fXmGXX6Yp7eY8wLKVdnMgWx817F64bPMQPUY7vSgFpQPD1p5A3QEo2S7HBiHbigawug9Grk",
  "key14": "NsDopebBRRoGKhAWKE1QcCuagk2QNYRyjPvFEEvHLmvtSVnjAmjLdqkrPtFdgmJamk29U2sJDVuRwUm126NoXct",
  "key15": "5D3TVTCMxfgDZLDUSsrRegtZgMZBfhQnNjLhbecpmeGgLbtNcTzMwvJvxsvWEwLS5ADF2qgJgTRHfRPHkBmBhn8h",
  "key16": "3YTUxwdet86Aa4qtUug4pML4uAntGf374wS4WMGv1SBpRWnXcao47BYw13a8ebyn3Hf8NdWBpFSLz2uaiZhKKAtW",
  "key17": "uiWo7mK3oYGY6oM8mFsbpVBnNgVV2mtqePSrUwu3s9YzmfWZ4huUigtQMcd3GfRRC59iBBEECsgcKxJyC5z9SqY",
  "key18": "2fD7e4wup8ADGQaaBm8A9irUquvk69YmMcjvsaX1imyW67QKF9kjeB1S3Ti8kQ5Ds5pUi1E4PZDS1Wn1Wh4zNma9",
  "key19": "5KQGjrkYnKjuPdu16wSZ3txx3P54HsDNMwksRoxGkhhiSECaACo2MuREKaqnecu4V3NyThK5o8XRtb8dZftNEnQE",
  "key20": "3fJdzeGsa32v7zxwy6uACsxhoJPHXTGKHiDQqSyF5NQKN7SYnHEfa9BzqTo4KiyQu48dLoWiWtqyp82J9ejrCtn1",
  "key21": "2QV9GUvQr3pSfzyb5bjcVxSeBqqWx9rZiUe162CtiY6sGEbrY7xtZXU8wVG9HsiQyeimgcJjMckgD6m6PNY3qzrY",
  "key22": "5ywjqj1ERQDorS2irb6bKm7deP3NoqnMqi1qbTdNvnYkxiwbrsUUEhUy8two42pNfHntSzAFxGTWgwp4QBaoCWN",
  "key23": "3gb2RAEsePLu9MZdFQsS1yu2uTi1eCrv2VEJmk8WNSiyV1mLQQRzsUq2s7uxZPvgDFTRNrGeDQYujD2CLWg1mQ9j",
  "key24": "4iJX6UvRpAkgDuGKwUJ863rzdKtJmE9kP8LUrrRDmQQ83Hu1nkkF9CNG8qaUT8QjJX6o3GNh4f1zBSjM13ipAizp",
  "key25": "3Ses7PYj24CiKeduJ6MSLH2g28LuiNrYPRN4ghM7gTNcZmRHgjvrRZHjG8dH1q5zbLkxoPGJDfCSCyLXyyv1xmKb",
  "key26": "5YjhFdqzbXEjkzJEis4AXQwd66nMxVpXPkarHnKTS5xzy4iqp5MCuLU17YSpkxsgmCerKwpHyXVDYmN7tDrTiVDT",
  "key27": "459QkAQQPw2Hd1HNjWW5993WsHWsQeEfmz9wnacN5132aVDSBJfTC82ntemmUb3PFw3kJgPV5v2qnyamk6VLnKti",
  "key28": "n6jQQHG8yVJxaYrdckQ6f7uuAC9xy1F8b7FEWMYMgSGsM8xzuHDcA1ZJuyriXMPksctBeCfcDj5ewX6fHY6Bm2A"
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
