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
    "2aLe51jhTiTownzc6DXPYKyVmD7gyKCHzXjRBcwZAccURFD4dq3hdfzPYuoX9Gbizm2KRd5KveMgtYv9wuZUP9Ms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25424rgCUNEVe9dMfAbwAeb33enKkZJ1TDUqC5qcLPoB7qxubF6ZztSuSqPPG7bhyamtud9sJxCKUH4oSjCT4P4c",
  "key1": "4Y3vebNFpLH3zKTFeTGRET5uaQYpRVJpwQH3WcoQUsJuxvAzmTipyQ6hepnJxFn88TmMNT9p16PjausTxwHcr8yS",
  "key2": "2hPuXbNejNBAfLbmb1pxp79aDYcX29iMUCgswuNEirNVz9kkRdqVj9KvrZ3V6MbygXB2yveJ8G6DKJRWm9reKwkN",
  "key3": "47BqtBfpsiXePWZsbjtJA2exgKh8zgY8yQb71dzivzAmssxmL68d56SthCDLQRgHTXNu3jVRMBK8rdMpb9VYKRSQ",
  "key4": "2fkoZQGY4WMRPtc6aSunAEHpxgk7JHBFWQHniAqPDZ2Yeprig8mhTt1NNZNjUJsAfWaEx7sefuuoFaquYHSgiLu5",
  "key5": "HMQP24QKTxBFDM1wgZKhMVuzkJ42GQfRgWRqPiK3TT5u5UtmJ7xVESyhRhzEnBp7Q1J8BaKMoFu3WWTeoEqRRYu",
  "key6": "47htaE7T4o6NZyV4VdYHF6AnRJseNBS8hhDPnTVku3HmjLUygCfhNNXUziSSMbw6NfUtfSeJN5X8kaBuceFVyRK8",
  "key7": "32Af8uwsH48dsRmrTGqUn6rah3tuQDqWsxyYszUgEVKFhsKiPtTrKEemmsAS8iFtMDFXhZu2wTR66ZCJYBwNLzhU",
  "key8": "5Un8aknAEjuDQSQqiUL1XKpggKH4dGy7WezU2yYdkr8VbwdHQqDDEDEEx7VfXEcqXunEyRRdQ2TWpnbHWdiZBVSr",
  "key9": "4HgQoKRC6Zct9ZGk67PfzvgZCyHQ6XnLxzoKs3FGPdF5bukitQdBP8as3Yzdq6PWZ7UZqkSE8j5Egvd2D2gesUy",
  "key10": "4QwFqDM8PGwYFe9sQeR3m5C5HqhMy4uPhWJa1PdLfxuXTxR4pay6vbaaqkdhn74tnAQpjAPW2oZTHmN89gJ1DcVQ",
  "key11": "4kRzwzWW3muaF7j34NC6duwVDnc38QHM3Y9UneDJyVL92BSdq7QKzWsUmHGguX5zqPiMfjGirB6hFiMAN1S8WCjc",
  "key12": "3jnvn94UkKd7Qqqnf2hUxonNzbJ1PD7zBHdy16GS9w8MLSRnXzzKJNNAYw83CWgSyFhGjPxYHpcru252aZc9B6vS",
  "key13": "48dyoEVzaRWVj5wSfPQ2FE1tMfLGCa5ChBbB3xdAq2HCx86CXX6oWz9NLKfFgWNDGQVwUed6CtkJ2rvbFAVhdwZm",
  "key14": "2rfQ6BZaCmCJkYK2TkT3f69Teu1KNa23aqeGftxVNQQq6gKjkyLewiNjrRoN32ZVQow2Fo9nBYKFGrgZEn7fXLE9",
  "key15": "48bksg8NUsdf3DDwrkSwe4Ljr1MN35bjEix7DftHttq39HFNygfczPAyGQkr5q6vdYsQaR9xU5sH9P7v1cNBxgw8",
  "key16": "49gSGrcNR4NQysqyCGjtyMhBQAEhFUSnpKTPoWy8Ho7odavSyqsPzH4tt72Q6rFH2wK2Q1EyrsGLsxB3PnRSxBD9",
  "key17": "3x8DSQt5PTqNVoQjA1vKSsKb4sG1WR18PqshTgrGSVghUEUEXdr7T6jrTHPPRh767f5RwE6AxUecvrR1reSrE3VL",
  "key18": "42FzrgBxMia7Qnux24hmkCHK1uMW5ERq1Bgj118yM6kJQizZa44ag7WXb1P5QzxbYyoYsA6ZTtN3gX7Fds7Q4fsV",
  "key19": "2ZVj9Tp6enf8w2xZ8gK8YoPRGWkZygy5pw5JwE7W5CfoWuRcMCpxzEFH2PM9onvMUcSYmk9ftRL3Vzj4Xn9e12xw",
  "key20": "kZXToyPwU94VHb2zAhr5t8prxkcqtdfgKtcxZT9cf3NG7JcRJLQe8eaBfPgGrERDpFDP8PybX8FQpEuvgGUwxxZ",
  "key21": "5xz1xeR5JmaUYSLa2aeiwrzYdpURhvydPpjXicCdP1wZq5GkTgRLQvq8YuN3cqRyNH2WYeUwabHznVFJ21Y5PJaZ",
  "key22": "2wMN6B7SS8JUtgvF9ESyh1dhKnWmS13Hkb3eYcess1mCPSbky3aU9i5kgAP9mVuuh3wtwpJQ4sJ1zPtmZBdW4J3G",
  "key23": "4MeStQcqMdA5j2NC5zYCdS7y6ag18zeFDaFPN9KDBnEdR5ybPtwtc38mugEuqZFaLD1QLfX2nDnCsGr9tBnkEia4",
  "key24": "p4yRJ5J3PFnD4toAzerG4vcFJ5HV3twGEdFSyvx1eMTR3YVzSJragRpfUyt8JPj1bwZVT8ZMDKHNJ8ocfyvGy5z",
  "key25": "5e9iRG5zyf2UvKdbv6Wmc34Th6wocKnFMyshp25DCRiPuNFGp2ntV76ELC27DfGVUKuzyamabmESpzkUmRoHfZob",
  "key26": "2eXEVsNohGZ2ErWkf2qmrnGbJADkTFMc3eN1FCJNN6SHYEyG8ogTCQaEbCFxTDKjy1pLCsy9r1gJwApNepsRnEZw",
  "key27": "5RYQHH4XB2W7XfAjVxt7Te3SnRrMHMq4moFep7hQANsTD7fANnSmfXstQDbYq9KmFkP5hXCVJDGbQVsbcA3YtbUm",
  "key28": "3DkLrsjJsTBcCG5Sry5wFiwLdSTGZm4XFqDCCDRhAGc2kNX5qUDTZMYn4MMsod4KNT8VQrj4ANCdhP6LRjwNijeX",
  "key29": "2R87V2BPt1H24cZLrsjjUrnu8BwzXJvbx1JDmm8817cyQidUbcrm2BTejHtYDJvwK4aPW3zoSWWrupSJ15VG5hs2",
  "key30": "5z6CzkKt8xsRZaWqcJJteSsap7jS8x5DqaBta3mRnnHC3QpYoCwi6XHVm8rGTm3ZySW9nS8zei1Dwhc6qGTVHFpq",
  "key31": "62yTSkLQyDzVxs52sFaXRSKxLwz3fdALUA7Np1Ws6eXGXZ3Fr1p1m4hJjVR8Urm53LzRpmnkqhQ31RKeHExSWHki",
  "key32": "RtUkym4sYq7QCtTcRzAsWnMHaZxDZieWvRcBoo8KMQeUX1AvmNE6v6HXWuNQPZYF9yNdmTfo231Ag6BKr9PV1qx",
  "key33": "5uSSbcxwNzrM3ALiSUC3eNF3GY3JLwQm7x743mwGqQTFbPSoxJM3teFH49U4wsgoVdCEMGgzziN9hcEtt7sW9zbW",
  "key34": "4geQFyd63Rpo1zR3oT6f1HG1g9xe8CUPDHEkoQgN3ATxjXL1hKMmtNgeg6cnBmxbgvJnWxZyerLKGANrgpxptmLv",
  "key35": "41q15psF54bJ4CaBDJxniT97e7MBm9GuvXEwgaRDvZLwBcaru1eJtwbyVfW8JiVsFJnWDSUifq9CRwA8vq1c7VuS",
  "key36": "HnpxUMjNbWN3yT6fiopvkiE4nHW4TpDsjTJRT66YNZWHDdNtCYcL2vo98vWhZEonJi5N2cUES21hr5bwtRiKRqj"
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
