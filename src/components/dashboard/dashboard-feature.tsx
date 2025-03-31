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
    "54odW15CdSnr4tF6PN1fFRSycj4KXW5j9Rvg5SPxCUJnfKkN53GEiUjHp5etgXDZjVopTvMzfmsFBJbZHFzxqiwL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kt24cxPUnmGyWFUv182w6YejGzdsoFvKPgPNgEUMtHsehxTn7CUnjerrvSbPuKhekey8KkrMZwchApEoppuSNTY",
  "key1": "3UkecMeH3Wc4DAb8uUBnG73iPCMFbyM1XhMrKk42La8mH5M68NRvsLygCtGgYUHkXfgechQu5ERnLJN5xo3upR5s",
  "key2": "61WofgFV87T9QzqU2D8KoT21eeqf5KyRyB9SQKKKNjJMbCoQGFuyiKde7WNDTVwxZz6jX5qtUpMG7jUpSPaeTMcY",
  "key3": "yMo1EpCgqxP5gKN2daBu8cCR4yozsYhAHw8sQ1cHxvKMKhZ7fqnfrMjjhWTPGNckFgoWTMda9kLk7jXeYAPxW1q",
  "key4": "5XPYwyk8xY8mta2kabtQD11ifkUawr7q4d3rSo3gr8hsoHPsNc7HETdpztS34VAHSuxaEtdE53Aqg7HQHS8yV4zp",
  "key5": "eEdipfKU9gXexzgcJPbEC7FvTz1eceJrt49wPzSrq44WpocWJpzrFLhr5ynhoz7PgLhSAERD7exC6FFu3UyuDo4",
  "key6": "fvsxtpsrN6Gmm6ogKsMyzXHF6siVHunTHf7ZRXGygv3M1fZau9WjoE4nDFDZqYCjHAWw1FAkW5PqCtaE37EWniU",
  "key7": "3rY2gSNG5KYc5BVgGZjmwwMkMHwkrX3Pk9BEA7ib18AXCTx7Ya1L4F8rSKtHxPR6zYDvvXSgTdp1yByd23CweoDV",
  "key8": "4wpdLi8NL2q3YRB3jSJn18GtcBJ3sNETN7cexDRcEa4CXnViTudG3gs8QVRBaj3TECjTBHRo5evonbnsYkaDUvML",
  "key9": "dFUCx9eBTh3MzYGXxwmS4w6V9Lda9sAWPMi5M4yUpv3ENehSNpgdm5V4RYGuWwHYca9DeyuA4uZ4SQYSCfaeEGg",
  "key10": "4aHtDqxmqVX99BEt7pQ5u4g87KsqoU2n8FsmUWNCyXuQuadf57micYGkbn2LiXQYETmxe2hoToUDM67W4j5T5FWm",
  "key11": "35MHYB8jgt32HrhAuSeJcsm4ybTYCWrgfEa9uw5xFTKAc1vYZhjzhGkANZ6PJDBwvqNAbet1EMkh1jkTGP4jY4kF",
  "key12": "53BME2FzkKWQGXEHBsfFqJvH2DJ9y5vz2DJogjvGBuVK8Ko2URs7MToShk2ynXPD6nwvXgycSEndQ54KDQs8Dgra",
  "key13": "HZrjzqBotpvCBsuBYQQbMYGDjogMbfXMtVmfdXGByGPQ2NTsAhihEYqitC9esLmt6wTaBfCbmidA3ZLrZvhCVnZ",
  "key14": "5xnorbkMVaShyLqTy1fKYA1TNrcZ7vHsBJvkmkMJEeqzCiGSrtBCjKjVfoko8PuKvzkTZxKhFnVu1Bg94yodz3pX",
  "key15": "3GRuSVsLKKM8er1ZPuJpG5i2fyJn4sJmZ3UYg3pHY9w3QKsvMNhLNoQBsPo3HyR8Dm16DG2sG7jfBZzawfxzd4ZK",
  "key16": "62GVZRTFJsaTUuVURTH3o4f9x94NhPrnVVFHSEvY1y9qWpuYmpMwYnit1Tfe9Nm9kF9WtHEH8VXsF7v5ig7G26bC",
  "key17": "4q6DxjhrBbHCGjQekJxb9CvUgAGxWsteAHP6nW4drkX3Fw7soTgLcwLAAerUoYncvgFf3vnkPQHJZTt3ZRy8nQot",
  "key18": "3m5sfMKRPoeKTeM8oaNXxZtHEiTeng25CrBtB9sWej7pa2tawKzrSkVN4YjQ3Rohj4p1BjZ2f6oiv2AKVngHmytj",
  "key19": "3Mx18JMEsG3xKxx4SCH5XX8VMJPJNX5T2wTL9APp9W3PQ9XPXGBHzCK6k6CBPwEuC1zU81QoG8mJn6t5XiznqiZ8",
  "key20": "LKmBvC74th3dPeyFEJr5AnFPTaMPETbjmP9URhkTVH1u3SBZkdBQmsopt2SNwbRqqcDzgYkzg1id2dimHQYz8xD",
  "key21": "3DXGYvKpmfA8NzzJngUGa3o5sMXc4LxiDZyYgjDnXTd9mDadGbgQZN7qCtd3gKsdJn7hWNeZaivpq3jeGW9KmGCf",
  "key22": "47dxi37Z1PTnHqfEb4yBLkvhmz7A832DMtzoPY5KpUcXGi76zwZdjxrShfxeHrfKXLCLwX2G93H4w9QN7Kiu7fFd",
  "key23": "MdW7dbpNSgTAtRnX33GrkTfUpCHvSKnt7Z3BA1e5Kt8DWY8PFpYUuSQvfVqPGXicMsxAuuYpeXujX55bQAAvxoG",
  "key24": "4YtsCCAAVBRpYtxpVrsr4HTgc2RYP9yQM31CjhdNkZXwgkYE2NY5nMnoRQrDYPXXH7RnEd28izhqSzMiz1NCsiaK",
  "key25": "5J7v18t1Pgzx4Fvz3LxsxCM6HPuccq6orz26bcrinfAhzmKqy1Lsee6x2KqA4M8eVwPcmQakMpXU2JNftg77onep",
  "key26": "3Q4NgQLaUCjNjKR7jH9ESD93npUe6X58CCGMkcx4eHFEvhABgRVhnXEgzcAYrU7j6TiypYcSJAiXCwzy7S8ZDEC3",
  "key27": "27VS88hFevJ3S9UvSxo6QPcN4mbzkboPpno5VpXwEBsYTv3DyoZs4Kj9irxGx7FYuEUa9KBeJ4m4NzHuNPwrLt3R",
  "key28": "xLMCTYEmnZw1tMz8hWSaUJef6H8tYDcaUrK61pyKWmiBM7r6kLKuReV2yLV46LVmRGnu7j7SdYAWAuqzsXtVayw",
  "key29": "3J7pcgiy359WLfDofQH1J218vhHY6N73Ebtkb9EGynsAafAWxgJFx7iyzEqcNnZFSrXHXj7oZz7VNNZCvEPKQKJy",
  "key30": "y2gGCyYCcGj7nXAL66iHG1XubZgtFH5GdyAUrBhmCvdD5k86JbKtdeQQdZxx975dSXYNjW8Gi1tdok6ntsKnrDT",
  "key31": "2x8FRNxsmZCYamNVANPtHHEN4kVS4477a99ofH8Wm5cX8sUNLJSoKDmt3mY8XcNGj8xdZTq8rTkR86UusVFtzev5",
  "key32": "2wuE1N4rkgc6P7hw9PXgL6UUcqehNhXyx2gMPoFUKFj3C8M76xCZst6t6BH5vxHYiUvCugunaoWzvjwjMcb9vT5x",
  "key33": "1n7U3r1EoFn1TL4eM8uespwtKxEbFQ4qPDhpRK3a5hiDUfFsbNgBb6rDvYpGeJZZZYTmevBVsyCLmD4ErTKyCow",
  "key34": "2KDkkRx5rdVek5R849AEwQcngwojMnXL5YYp1p4gnA94u82QbxHJdjKHJJWJuHUVdkAN1JqRQqiJRAcMQGajbkz8"
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
