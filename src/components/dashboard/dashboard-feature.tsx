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
    "4WFYVuNPRymh4e1SVecLA5vXtkBndoJyHRPLcfyZLGSSq7WyzNQtCA3Hy2qgA2nth1PWkTAjTccYJpMZZAHjXdMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "arpi3MmPFf4VPtAgU3roRzyovDHJHj5DQVYvB41X7j966AmxG7M8pABK741UKS7Q31ecgvwNWExSgVUQj8ykYoh",
  "key1": "62SKYMpVraYHuMFvyGwRAQJj3pufUuz43QjKHhZfwGtsAJk7FZsqYcWyitsnDPfy1LPkidu1wjsx2HoRmqVMVYLY",
  "key2": "2BJWTmyes2T9TacdZY3yMG3nnyynowgA5kAfa1BNSRUBQYzxYV6CZpG3XouXcNryGkEi6HWdtqAuJgsbGuNNkd6w",
  "key3": "61VePb97VJk1RYRHi4Ja8ov44tSbnePsr815zFLKjpqsftSL8Z8ZBonNKrgc4nvcnhJQqcQ2xjRH7Y8FHMNANZUd",
  "key4": "3XLc2yszPuMff4TqCEnp2TL8yANYd9EyrwYFXPWZcTw8oeQdtXa67P6r9SuVGqe72VS428nJC6HkFsjC6bntFFEU",
  "key5": "4aQPdMQAsQk7F1hVquBtUghAcnSjUEXBEAr3uPmQvDziNFCAa9fa9aeLwMQLpRiMs4xK7c8daaDuN5wGCBrZa7ST",
  "key6": "HYFwa9wwFwbSVeBbLzrz2ADpg2yVv59owuiR21QhBsiLYm55XdY9cVwSMFHnj2Hjf3r8HrGy6Dae2N3nnSLQQwo",
  "key7": "5uHyRLA4UVFE99VQfN6AprchWsfgKf1eKYWvr7CDZWBqKYWNofhYptWWdwUU3jNJFbc6S9jXKTnoMrfWpyFjvuCD",
  "key8": "4Rki3RDanr4EbXs2GK2qhjvNmGFDubMvg94TJqHtFaQ58PYdUZUzwhM5bJtnsr3dJ9V3nnaqMYHUvvpzgV5HXTda",
  "key9": "UMS2YffG86JTbHhufH1v2dcg7vQto8xm4BueiUc7kC6inCpjoMt4APUa8PHThycS2K2P6GHrknwZWau1QCwKsZL",
  "key10": "3vKCCLz54vSezi8q7ryb2UN7bK7ckebWB5bJHEhVEFgMHzAhQDFnDCpCmuyyc6whnwXwZ6C3zkwmjXgETGHijcbc",
  "key11": "1ky2ovzcF9dSYXZQTNxdBCJuMUz2RJcmNVJkxYXnFJ9MvoteTYtbFwPbC8sbMoZ861jQ2tmVCBkbZxKud293XJK",
  "key12": "RGxkbCucwygHU3wBkN2bZBW48jJvRYJb1a3H4k5qdFDwxfugngEQMbUK9ihSKEFrBMAUHMtDaUoAnaqeeoaK9M2",
  "key13": "3ah4dJgZbombX52meEAb13Dj4MEpCJhPuJPuttdEdqdJXgxi1tRLWgbpmo3MHASdSmJ6eDhgeEh7P9F5zdCHjbhz",
  "key14": "nwSDHYxDLVJAkLWPfFABVKCcTdsoQhNPQVYaYzqJ56pjYgprvrQcFCm1iCCyJGnT4NpRxPJSZQocoXH2nQ7aYbn",
  "key15": "VbBjj31HDw1Dn9b6sjgKjAPuHLXAggffvimScXcDfKxouqTaHGsFmctBcpzLJi5SQB5vpoq8JmDQzr2F1PJ8bHi",
  "key16": "5oeJ1Zwy18V7mxLwfonzBBErbMWsdZy8KbvRW96Z6UgNz9CiCM9ptJmJYFYfArujuUVviLYpDfwGtGuhdXHxAEhk",
  "key17": "3P2u8dkjRX6iEe9CQxLeyMg2BhieSrYhFdW3LSWVgC2QGZo85bUh7cR2ChKPxw1AQ9pdPw14oaC2s9L5CdJSKykf",
  "key18": "3ey8Lc8fv9ccJrKzDzCp21xTDshmreaPwaybZNcxbBihuLF7e1xaEaLUPmhHao53LjLCzwfDDbqYXLUcD2SZWGr5",
  "key19": "3SwSQ2pYm74hucVThqY5i3fyTwFr1JRtg7XEfnoHx8XiEg6gvGBzH47en68mYrzJsByiQUcbyRJBp8nr98A25BDC",
  "key20": "4d66f7JGox9D1zWxB8BLVN7WW2bxC5oqhM9kFPTptqoxKLx1M5okBsSYN7uHqnp2xKJYzy2CTe4fn3ULe2deo4nF",
  "key21": "5fTYJBzSYurHohG3FW9hQLMQrV7jHW9aretG14jDGhkXu6Wy29R2FYQcXHxRoTnXPnb3oJaYjfWULZr3pnvCnfgC",
  "key22": "32gNuNUL6JTZoPs5KMVepUexo3rKhd6i1NjAXQKxqSjzitueKWgN4vUekYDJgHkFYvuxWcpj2zdoDtqXaPdXQmbM",
  "key23": "vAtXVCxxGBUU58Lj1EA128KfDLYrD9B2S6kvhdABb6fop2SNgLKLDaof7Wcz1B6wtK7fUctbJu4Fy6EN2cydUzi",
  "key24": "4zdtGSwQyyjhQwRDQBahTAgr6xSoPWDBAjjF3e25ZEzTzq1pSLuP5nxjETLDzximTFL4AoAKGT2jfCpz6zssh5UT",
  "key25": "5TAzmEDjknTJaZUQ7cnX2g3TGfdpuhf56Ncw92StAjEE5t9kH7JgaAN6wCmQatJxYMYWTf7evD5PrJWwXfv2iFZi",
  "key26": "KcowptL6znAVyZnQA61BZGwatB3bFF4qGPWo5z5RgLGihJPZfQGZHoM9U2iSYSPuDKC1wDevcPLK4ZGyRQffwwL",
  "key27": "2ddUhsjJLSnj7YK28wy5MUL2rTgCdsxKCwY4RMrmRkdTXHocG8NTY8Pdkg3VuZU9hzthMRVSQSqA39Ja1gr6NNz6",
  "key28": "3yeurz6Vbzb7HAMDxBo2bgkTgy1nkEyFZ8pQ13oKUMyk2DtfY5ZGskv3x2vaavmxVas9UAWpAKMYCNmpsL6PEnQV",
  "key29": "4MjXhtZxZQW9AnmJ4xFqPiB2har4P9FMSM7De6ZEDnoR6Crg1nPracjkT3EXug7E4oYVpqLqizyHTQM2YvJ4BVTb",
  "key30": "KMH7wvRCKqWTBQAVuQZfFDaBQKNG85epHo5qCwK94byg9b954tAqiG2vqLDuM6D18b4gpTsjufXj3SUSCAKFbbk",
  "key31": "5gp6bWaWvXk8rW1jGrdJCoirpKpYRkFPACkSg9wWLfG6FVRi4dmWnxjKb41ULjmufL8AnyLktxM8nHjLngVw684W"
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
