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
    "3A6Cv3Lqm9RnJcQwC5Gdq6pZDFdFjjQnkT6ripJvcfVNMR7Dt9ttpHYAcsoSjDUnNy5xZxkqY8FSvyJT8rC8PoiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T7AsDnoK9jomCYXZsBEeik7SkVYvpGRjqz3cSfTB9ponth9Ry3M4QWCJUgX1kFv3c45tBjuyYgPMVteP6rH2oPc",
  "key1": "MMrrdkJhzRWDJa3Yv1BDqgjpv1hzX12wUrHG99HjSD9vTmsGxHH2NEePPL1qDxHAr8yBg2s1ALnHi5hpbYvjYCL",
  "key2": "34sTpoy9DGKhz7oDsS3eL18TcRHqMSPUE2KAiqS21h9MJNuGLD4g9i7LnU2M2gxNtgSRHcv81xFsEhZzNE7EmrrW",
  "key3": "2QrQB5G1uQDY8RjuBEMygeHqezCcPCkKu4fAYwCbTetaSiTYSKLAMBTGhGZ8AMrYjC5BtYztwJjCDEuPG4uBzNHR",
  "key4": "5Lrd9SyJ4dX7g8M3YWEAfuq7ahJBNCBoDRFCcVcJf5uFqRfbgvYtUv1ntf6pqYRTUoAfzobLwMhd9wAq6RYV67X5",
  "key5": "2DSgY3KdMKcFh6Z6ZCdSNyQqDDRCrGaLQamScwwEJm6yHKcyRcrm7q7rYnUUZicPPi22uEM6rZN4rY8iXjSsd7Nh",
  "key6": "2Gj6DBwE2WFA6GKcq1UTj8W7d8HAKn8xReeD8dkMC2wYHjRN2AN6FMWxM6iY3zZygRAGpc3rHBuJ8ekUnN4ttPkw",
  "key7": "HEbrUiVBJ6G6CStJwGwduSgE14x81uHqGBMFzio1Kzd7MHmkaGLh5eRzgHvsphtWayfEpPWZhBdjx5fwDMQGTA2",
  "key8": "2Rx29pvEtX8tFQG5CaeH9GYvQP7zKppT4joAoeEaQoWXCWWFN4rQH8FVehq837F1ARrrjGNrWqBe5EUTqq7za2Ut",
  "key9": "32FTEf4CjUH59zaFVrfCnSz2iq9vwHNmzbJVYPgxFAQ4caHMmvg7LQkDHxDH537yZ8ZGmZP1nnb8XUaR9JNUkmYF",
  "key10": "5pRyzZnpSR5A4mq5CEHCMjHpFULJ6CZ4xXJvznnuQ3KBuzQ8gc2jB4uZoasgyW6AuutikmYE3KwcdfvWUGrpnMeU",
  "key11": "33ZgEQ4w6p4LaFTiL1yo4PJgcDqPuGKD29RSYN7AHXWTL3Cg2LNpsyuViNUJqVZZkPdke6csxy8Ld1Ke4VYv9awX",
  "key12": "4nnPxx6PUZnWoKFwFMsh4uRWN4dRuEph98TBBFJRWZHNF3CyRDGHkEmHdGrWx9WG1CMRE38fZorordcQH3MSr3f5",
  "key13": "3feAMCcQY3F5baWegfv6SvMTqfn2kB81MC9oykzhjCGjkAenaEXsWJKabBzDvj2ty8izQ22NzqhmehMzJmEcgf2Z",
  "key14": "5C4HgRvutFuQ6zpk1dEEMFqEFthicXuhx93pUqgCMvJbgvmDDnVZJbwW5k7j8Yi7SpDmwb4sfRbk56nmRxeAabKf",
  "key15": "3KYWuKxSXw6V7X7MU3CAbv1JpF3LbUrKvj76wXGG23PvY8WZEv2LjVskQUYYJ94fBCJCxGkWvFje7E8Bcp748TJX",
  "key16": "5xTtWnJNn6NrupQYMEbEx1zw6GtBCbYGQyqQKgep98bhbeosdZ9vBHq4gF5oPwVJecXE9wURVZAjNRNVnh7F8jxH",
  "key17": "39f4KrydzMRrQ6aNFmRFXtKDBkjumVi5RvQuerCPBcGQKqjsqYWC4iQ52UCUdobkvBWRC96Xge5GNRQcn3bpEFrr",
  "key18": "3Z7RhiVHduzQJjqiNG2o2mPNdRoZgGhkHLRFJ6NB3vXZBHZyojJEaEnUT3uwTR1xnAftteL8qaMAoRem79bGdkvq",
  "key19": "3Jd4LTaDX6CFw22XWmEEVR2semvAbyNbcxJ1MMBPy2KoiWZ4zQwmU26pTqkSSBLsyck6tgMUKZirZW4z3g7Nerbq",
  "key20": "F77aP3M2phXsMhygbk11aaTQxqzyz6DVzYAM7EAm7EiDfiSG81Nqj9YxRQkD8qtiLfqkqUQFnzkhzCSU4rE9dF7",
  "key21": "DdNGaw8Ngs6pyNHxc2t8jXELAq2aczXpMKo4vPLeZrYDc6bLCc33JCe3ieX8iYXbDkyFGb7kQHDaVbpkrAVGnGr",
  "key22": "4uiMErobmdzXffULDvm28ZKbWD1tjmw99Yz1QySAxinR4Eor7Wyr5Y1H5ggRhkXhzsXdxSzEPgGA4rtBECAP9s1",
  "key23": "3FgpyqnJTc11FWatgK2HFNkctUJ61PGLYKksvSWLGQA64L8N4k6afLKxYRrh5kexJFWCYasoa2zEwzCFJYUxmCj5",
  "key24": "2xWWtJHpNU8BqZFLrbeKnKi1n4GkQYyfTVUowWJHDr47r5vNNdDz7uiiYxAaURu2zqUC3EeXwGwKBSdsqv6uBv8L",
  "key25": "4vyBFo8jFnc3oHSCB5khLAU7aQnNHcE4d2zJPy5VNJP8UrpD7hwwLEDzK12yzX1sCtXV4Q15Gk6yof8dkeq2mM76",
  "key26": "5KEyvq4J3TqgcCp2473jk9UHkmQeQLhTW1HkotHBQ9vfupbkpr5Xd9CmrSKtL51F3Lgx1iFzZHVnV9zzR6GqQP4g",
  "key27": "5QNgLfAWSBHEsqPHroeQshUw7u74VZPs2yakTsoXLqktaJjxw7syTKRagWkoF96P8JraWxMNB7TD7dw47ayhmNzE",
  "key28": "4A1mAAvKFSvDZRqxFi7uRPvPiMzk3hXc4f51N1WuLpAVoMXiEzKqH92g3oSr42XWkStJm9mHx8vn7izVWCmkZn6q",
  "key29": "5eBkPJ4vjsPBRgy9Jp6B9HBAGBKfjVdWhq2J5wBq9mkFWM4g2YJUdaKDjwWUoMVFSUtfRZjCADUCAad8tJkAhKVj",
  "key30": "27fPeEp664ZeC41E3WX2KANKzwMxVnq5AzzJHVTsUfE2rZ7wBPfzg8kxPWzX47aUQCVbKY9i2SYsVncxi7rk8DG2",
  "key31": "4MCWMcMhybcei6J1RC4FjbhK3s62woLYfoRsenixr8LVvS5NNf4wLEzygEEX46zY9gPwJuVWGXkiJs92XQhrQAeS",
  "key32": "4YueQk2nVSDVi6EAz6zrruvogvU7KtR3bRheYtGhh2zLYLknDWQtGmEX2UfVxKBUPUPen65syP6xnX45MQ7AGvYQ",
  "key33": "37e8ZmWJ3cqSVD7iChJtgYwKvmuW9yXB5mCsX18YHUpRd8jbn8CF6APVeKk2L3RcawVZNc7fNtGzWQxXbV66E3WF",
  "key34": "PL88h9Aj5Zxk7t8TkMrvmZ9qGcoqDjEqvBNZiZRLdXt9CKpgzUmMYHoaeqoN7QFfFpPWzNa7JE5xn4HfjbB8WJJ",
  "key35": "2NwrmjQPjqRA9XSbMPFq7Zm3xPjo3yRFegSZDxCnkehWVojp7Dr9ZMeZbuQL8mtzWGexFZTeLRuc6g4PJQTCeJPS",
  "key36": "4WaBTFVpsMW8pg5qP7mPzMrFKW9oveszxXx6J6tqFMdRmTUo3NbsdAz9JvuFQ84f2daPGUc9dpbGXjJZe3VM7VvK",
  "key37": "4TXrMZYKFpfq9DWKz8oyddP1bzpBUYRbjLnGNfu42VCFQpdFoZ4uTpLdcQJuvVTexnGEkUVLhLvubeUY8fMwhUjp",
  "key38": "EpHUyaXTx4AVdBJhRtuogzyuCfmCQK4CouoYpkFaxSsx7ky5KYdDipCan7vZByJcakv3fmzgzUA7qmPJcHDAbkc",
  "key39": "57yhR4xf9U3CPYXjaowdKZrz1ZpagrxaCULUwqso5kcmhQfQsHV3gS5GwvBQ3tVp47JjnfTPWkMFtJpAoXEpLoGW",
  "key40": "dwTQF92UnEjmuNd84ffikBHL6HbCd9vJEXbcjtatyx84dyGCbZqPi8Ct72PPZNanbZKxpPoUGQgSBU77jzeaE9q",
  "key41": "2VwdKY2DZp9WWECLbeSt3oDNdepvuRRdX3SqnUozWeVP3spe5yatML7nW8s6WvRmQtpfhnK1fU4cKZuBjzG8zCGD",
  "key42": "4iF3unFkHpbWkxfgiitLMjaqaabNSVpWdFGGfwKRTz9Brmo4NPoe42WWevS5XSqZFv1v9259iQQFmHtZafptcG1w"
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
