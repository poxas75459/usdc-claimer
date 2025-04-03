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
    "41Q7rb5QEda81pfLpWTCTuBKdpLDBqLYHbRsn4Jj47AxyScv5bDG5X78sXq3ct7ag5vFRbZMd9ihPq2w6tzoUZD4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "udjGCBKzEM5d6qtK1iR95wfvuusVRGBzs28me4MwD49qgS8kmdz9FhfMrjdoFDqPsCRFCQpUMVEGbyDL4vt6kEr",
  "key1": "2CCNAvoX9j1ba8mmRSWXizA2pKXDZDoExektgdZ7c9LWPU8GbFAnRdbQ3FkhTF7yVZBRURzo6AFrt3eUayNHJGNs",
  "key2": "3bwn6cJgD3NDUAC1rFVaLjNHMeWHMnU9DKQ6PRCwD3PE3aDaJrCZppK5ymZmedVpq2peJfstePJBNGRLZscbNoH2",
  "key3": "5o86ww8ZQTjCtLu6AESCG5FpXi3oi2ZuRqWTFf7RDVpnN9dVELxYGUFmo2qFN118DfeU2cAWpv52rXG2f8GTZMd7",
  "key4": "4Pnq5a9XLWKyNdApV8huEV7ikJtdoiykp42CguazGm1fGhdm8cxGUo5s5fVKduLqbxxNxQtphkuCGrHkUQErT3ih",
  "key5": "3gij8wwSE3jJPTKszDfaVxdtgfddGzwWJANbQBb5Jxeoyc8yLYh4qxyg2szXQE9wuCqTQutXw74DXP8Ru5ZL3FVX",
  "key6": "2vhs5HH8sBZiikb8RBoa8oR67Am4Df6HmubNfEdXdYdXhNnj4HzP5dwhKp6bZBP4feg7YUurZ73nMv8mzWerTjFK",
  "key7": "2FG3egk4sXoMMmePhjXh382p6CLzMru5c4YT8DQh7mMpRGEYMVrMnndz4ZYuwyuFcY58jurwuMgN54mQmKTXQvZA",
  "key8": "3wFgsv1pG5wAjPv1pEdri1HXjBRekbpXRi33gbn4iAxquFJGMLNn7UJ8oSzf5qnYR2dMQ9qkLewgt6neF3oidfXC",
  "key9": "2CHfVVuXMUmmEvSCiJBfJYF7rGK1AN2vSwS4rFityi6wDrUUpxwwxPk52PPFRtJErggghYTXTeEzbw77QArp9N1t",
  "key10": "5U7TCUCoQNoPRbRNrBR29G8xnNx23Pdzc7MgaGLWw2HPEWaotkc9J4TAtdr76ooGuYY7SEMjoXNxKr5F6QHLt1a1",
  "key11": "3ZjfuZSdxEAoz7qqS9FmMh6yngXWwBNSokwPgswkVRUKkm4yku8Lf8Uio6aJSxYA7SYfQ1UpRiapNDouWn6nTXK3",
  "key12": "udwXzKEU5XAZQHfvwf39y1XRWhiAx1fUDY5VEJQ5hb6NTV4hXbJLREYg8RvMeqjvyEZDYxtdqDBs5PnNtVXyDSo",
  "key13": "5rvk9pBoZ6NQmEov2w361KXPJScUjakiAn231hgH3jE5PudfRFFRwFB5J7zfRgJ3EAxGosEdK2vZe1JUARskaLK1",
  "key14": "5uU8fDNCDG9doVhkZJrj1TdGboqQpHHR2g8c1cPBCqLo7TCAkAmWcBCBqMntT3SG9yq3Jr4pCdVWAsEtvPr33XpJ",
  "key15": "3yAn884hwefhWborKM1dU3yfGZoBMR4Hh2JFFWDEHLyYsqBPKwcLSXXvDTvdvPrVtJSjdmAinJujM4Hi27zurYFQ",
  "key16": "495i42B4VapSQbVSF6bEiBgxAyYWqwaUEz9FCpbdeqT2Hziiho5LjfLBkEdFriDN3D7URVK4MnHeMUqqK2EbkXMK",
  "key17": "xwPi5aXKwQHEt46K9v9fL53CmcuT5QNm72TCtHZkGDDTnQATkGHyx3VXrgu6K3C7MRH5q2JYpATPATjHVudcXXC",
  "key18": "3MM3bzLkJYAM62PquUrqoRcU3Ntpy75KdBhFZmP7DiCJt7CXTEfKwMrQRYFd4hGGHCKhNkh5dZy52uXHZ4B3SRDZ",
  "key19": "3GE3UqLM5A4cJ1vTuYjrRA5sFwyF4xFiqGNyL7DXg7Zaji85EVKoCGkS1gUqQwqs9NbCy4fsgHntdjtLdULfGHti",
  "key20": "39smWUerwAPFPYxdNSGAAErQZzanCdrbNvTBgi4qQ47h6RRmEJEn4W9M22AsXy5ddrzEqFkNpsz6kAHuf7jCXYtY",
  "key21": "2xZcnD85bPLgSZwxkTbdSsiUmprfXRxD8u4H2txQ2MBmm4nWFEFrfo5HN9CbCyMxPDi1LEhwbL4JeDLQEPw5Xqp",
  "key22": "5zpaxjXS8TGhZQVqvW9rmotvQ38nBW69RUE2nXtn4FuZe8pLUJcCRm98gnpsR8KHE6PV2VeSVKcMooRbU5LaZyCY",
  "key23": "LfXGbmpE8rwTxqo9hhSP3bVybXtTC8sXHXJg64kB58KdjLAn5pPuwUc5tB4h3iHmCg3b2K36HNZ3RBJrvUiAh1a",
  "key24": "5amnQTNHx3zt4FW79kXK7htJ5t6D6jpMfeeXragLNU4u16CogiY5KTLrKdA6GzHVMdM4t84V5CWhkVaPzeQJRoSS",
  "key25": "5dJgsi8ABWjNsvS9Jhu7BLPZFVgzjwxh1TuMsKF8wqbr9QSyEySu6LfE5htZyJxRqZFQNawrvQmNSw4EuJWABCKR",
  "key26": "4UffvHTmXkM6U96hKcgjBZJCiJDKG5Qajiex6QkTjYbkGrwZZRWU8Fh4x222gunNXLX6eLEANewxqpTPC1b4SBpZ",
  "key27": "3A7w8Ap9v5T7Xywu6im3UcwzxWk6bYGm3Cumuxv7DXKckGBYYoQmgT9c1wvzc2bQbP6TF2DCfh4b9xGvpbkZs1HV",
  "key28": "3H44MgdQbMZapCf1X84o4FSHSsJcMXkTNek4pCEY5wAd5iTGMsb8Qh6ZkZt7sAj7jV7yqPpTHQxpFx86xrAUzr7C",
  "key29": "2nknvA7PGkr64LvPk3uh49jZc6RUKMTwbEEordqeBYsA9sgLMUH617V2zqmLzQtZwk55WTVJzS7anuZp6wwX6WMy",
  "key30": "3P7Nqao9xYa3qKkVd11PqDx6jnzQheQE9nGZsMfwGKdj3j8SdXxxcerAQ2HmALeyudQUFAW2tPuLb8ff85T66PPo",
  "key31": "2UUag6X5EM6u9aHRHZQBwrR8fxpMxY9b3oG6MZhad7gS9z4rNrmK3F9sdcCf7JsE4nwbrXAs3tKhomGEkJKJVs4m",
  "key32": "2EZGdJhpN6Hw27zBgS5Cvfr26DGPgaM2K2YtRR4s5M2V7ipc8A6x3WfjdzoFzKWynuE19CizLmXjy5beDEg5uPjj",
  "key33": "44TijQjAEXNCVRpYxTy3QvtthDiZ7nTX8znL3PwkNMDXRH8Cah4phx7KxbucDaYybMGDrHtUYhAdEVy34j69MNG7",
  "key34": "4EecRtsDnG5YXtTPHZND9MyGVPygwLyFrZEKKwBzKamgmfYYELjjKLFz9JZP85mSG4RsATBS8LBz2k3GNQpoPiEp",
  "key35": "3ihC5Sq4XHodxaX2daA9WJdyJRMhjp5uJKYQf5iVPc8Y9HGoXC6Kv2N8TkurDw1g6BPcCVMTMLwtxhGm4pidBeEV",
  "key36": "2baa2vsiXLyEyShV1YQe9w2QpdwkVX47KxuUebQrbELVHze7Tdqn2CHPd4CpXM5d1MvaeUFAjhm32B4PxTnJzsm1",
  "key37": "2JidPbsvxNgydtCGBwwrX9dP8zakFVXdBTpeRFxYzsCJynNBQPfoiwdiQUoGLZLD9XB54Vijb1texZ5st12fZL6B",
  "key38": "4FtZRRtv6vsoaGckPtE1z3u2fe1eyYEnw5jeRGxGXVBsreuFjpHuxeC2J8zBfGkQUcj46h5TdmdtBhhmY17VQyTm",
  "key39": "2vinjQautA2kyhBjWcde49tPYXRKDeD8YQjjEGnAbYFdC8mPjGpEqQCMhDAQsQafXLrqKcif2sh9WWuhkS5AsN5u",
  "key40": "3kBAieV8QJZUqji1yabacSyDB3Q2rNC3rXKgSqtWWZxc8DfT7AKiA8hUenDpWt3DPaHqPTBJbrJbAP1Y29NMbiqF",
  "key41": "3ePni3TtzH7BHxGrJr1xYGSv7n6FbRtm631GCzZhU5LDwV8GZanQMxqUtRFy9zQQtoE6kmi3MmwnLwpyMqJMF8Xi",
  "key42": "4hr7TY2BG9as91btM4ixe5LrGAhaLkBuDGZUuhrqg8LmSg8V7ns1QiCbQ2ZP67ozaXUoD4zkEkmHFqzgLfPmwaZN"
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
