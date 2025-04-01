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
    "45MEWG38QsZV5jDYytqRm14NZwPi4epFwGDy6717YpyW8rr6pPzVMJXUg7UuoxPRoq7iDJZB3CDet2j41r9D9PW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AjfkvwfjaQoxjaQZSAn67CYzotSdKxULRjRSZtWNzRtZPBqTgNRF3okfgr7wKk9ChLPF6XazUTnGgFfBb4Qrur1",
  "key1": "3YNUT67griENSFUALtujWoWkvgz7je3kM95F4Gg2TisxttuUZGTyKF6j8HbT1LbcybajJHNC9qs5f6rbwYr59hSb",
  "key2": "61h9WdSvx3Xm8DoLBH1qrvMtkqraG91Jz3z4ksNHM7JufH5rTM69RW541SxqdNSDXCVPQvkzCM3tLuUD6kus5a3s",
  "key3": "tygWYWLDrpYpcqdG9qB9gwGyLkGYNHsRN8QvyjdpMVrcyL1ZVrKRfWBwLsB1Ej2o1nBkKBmtBn7nGwxiZZoSVeS",
  "key4": "4hLk7NERkCZXiv87QkbnZSRSp6VKWGZUBsTKwe8w5io378a2ptJrYMZY4xr6noHx5v1qVtn5qSL1oBPET4L8LWCs",
  "key5": "3KGVAyy1zapkCsHRmDDqxfXM9xBDtiGCLAHKc8JfHPRRLEBcfvxYf8J8Sux7F1bJrA76UojiyvYq81sGktkBzPah",
  "key6": "5z3Bcyb7Hdr6G3PQ5wfYsTY2YUzPpVzwoZcUgJqtndQomdn1WG7h1TpVxkyJNeJyM6vxinaiuYfrmqnU4Mp6Mz6A",
  "key7": "4NNCJg9Z4rqhgttx8r4m9zo3hDysHHDqzzs6mUZSo7pDDhTsksJPRgybLQ5xWEYfFtbFYX2BtrxUVRuanZ5uDqmY",
  "key8": "5JSZMpxSaDoTxSgSe55aDXiydhG9BJ9uh9F4enGT3qKEqnqGgBEt4diAakqcgSvJEib853xE6ouYxXaSx5zotewn",
  "key9": "285yWX3DJqikPbH6EDDfe9RH2MnSfhGaTnNZmHAGdna1ff1aUfpz2D9AeXU4bFhCUYDhtBbBJ1XitL8sCUMx8yMj",
  "key10": "45T4uZigyoYCahgGjsEVsYcjePbNf7YDNr5quYWQ2ffVpKwNafUeWAFARv9iVCN879HMPUnH5AQfiLAqRyUNgyN4",
  "key11": "7xGeWdALXBUDxK9XoAUTmRjQetBf8t1C2BFCwtLwqJLosc3Uj3kzRkDEUJmZTAqjJHFDKXFJ9dFzGz2aSSTgCRZ",
  "key12": "3sWZ7QjxWDvsVrMyCUsHLv34DTuyBC2RY82BK5octVLDG2q5aChrVLYs77r5o8UZ4ARrStvmrri7kqNPFNPaErTv",
  "key13": "2BQUK3CwCBKExSi3iV6WHUPqCy2mkt9wx7D7in9wvzUPBKyVdXXA8St5MEqJQYJ28QWYSbqpprcfKqQjeiFWe81m",
  "key14": "26Hf1yNAZc82KPAmWBV7JHgsBbQYZ2Mrk5kmfLaPRGmvuPbZCDmhk4o8DshsBeyzSxRSspEQnsd7XVAAF3N6Rwny",
  "key15": "3wTjnrgSj3aoiNFas9sTKHL24sHAnxvKyPTyQhs3fT94wRxDuhDUMYkbUtm7rNvTd972MG5oJbipPeVxb7zsKrN2",
  "key16": "2nhSGaj35Ug7NSnGqtwG77om5X5gyni5RpP2WWWZvc6YoGwG972cxsd5FVUNct5XM3DrLKGM7hRoCb7WDhtEWS2B",
  "key17": "5oaE6EKzn65FoWh1tjx46ehnEEVJ7syUE2FH8f7K1vvnntigGETxS9P3MNcUQCK11vnQvmJ1SzfdEfSPqeWgLqVB",
  "key18": "4J9mHrmMgYnW51zKBni6XMN4asrFHLJNvi9uq5xYqBagvFAL6GvYnhQpqU7H5Puix57mXbvqKrbjM6k6QngNA1B8",
  "key19": "4GHNWzNhT2GjjsmRbJdpdVQb8Mn7nxbm9SU67XDrkiUQ9RydVG6nCHd3w6Mhqp3YLsjXgR1nqmkVUrkNX6UDyj9E",
  "key20": "3HgZ1NPFEJe3iP1TgN2rVG6oooBezyMmmHam7k9bTQvTG7WLxYycYTQRFt3Ke32KCPWov6GFeutDBtyVFPTtYNkF",
  "key21": "2yaAXd4PWG58aJ8UCug8cyiJY8t64YTeEJ8mEjzh8wuBEkcHPa2YDqANAGh9MsdLGuf7ubtESg3PiuiVk1GosWjB",
  "key22": "5PZ8TvNTMQNZXmPAmNTotGzueh8GPMhkTuwxht2VwgUWuNtDXh2jTdQSQ7QBhPMEMZYtNaV2pb6frb77tGRne8Xo",
  "key23": "3BmrnbEYpbQApeT7q9RkJ56PgX3dvmBjtw11gheECRsPHzBr9yRMSuNkC6CG4FBe5brWsoxdL6UK5JcqgXxTTooz",
  "key24": "2CeRu739onVwKVW5QxdQSLmYPJ9QegCpbQ8ycWz7rSXZ2PafuNFHbjNfvXii2R1jnYphJFEtKmf1ZHk3d7jRbLEx",
  "key25": "3y9sUY9kvmAVxKUHXfBhUUgNvUjGP67rxB81HjXp5KmX4f73DSUzVLU3idEAt4hTEkkUShPRPTj9m4C5iBrq1sxr"
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
