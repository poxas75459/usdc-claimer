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
    "465erMvm5xFduN5KmL6PkYA4xzgbE8VBvZnXF2xUUdxx65r8znieMDR4EYpDwMSFLr7vBBKjRnP8eWHuYjB4yBPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K98D57vNmHeoSBDG7tTyGoDKXTUjS3YSdYKxFcr9bB5MHYCGA4q5DsHALiFcWn13KR9xTu6SSCJ7r3gVXd6MrBT",
  "key1": "5ueGgqLzbMPuPEQW14DwXA1RdYC9DfUXuCkX3NMq77Vo5B7DrEC2FrSmGCr6F7gBuFRg2GXeJtEAz3j4oLdsvsQT",
  "key2": "2FAL5BwBJNLqxwncb5Sjz7ufwkPXuhuL66c52spWWLcTaWJYmMqcEC3VkFovbRjo4CJemK9gnfqne2sAy7YdUrh9",
  "key3": "2CUSniwwjL1hVMCBF2rH4yVAQBEGNghFVuoNtrn9a95yV2WENcb34ZdioQVgjnYTBhEywBkx5GcgiH46rxFjRSA8",
  "key4": "5qEkzYhbqC6ef4dJR32KTTrG25UkAmAC3URFpke2vmefdkih7nsd52YrzEFSitEqXLQdAxTrAbd9uSopmmGrX6Fe",
  "key5": "iwBymQZnR1igwHKtQNdYMxZcSuDHvhDyWoaQaeS2jiAr5kvZpeoJz6zthhjZtJeCmraXxHL8BfjefWJniQkaJv6",
  "key6": "5HRS4hknx1osnjLPDrw7Pa9DxNNtuNzMa1hwF3s7SGFgJwhQYsEEa9Cw5jCqvLrT9c4J3hwn2mckvVR5Japezmb9",
  "key7": "3iNVuWPVpE6WVTtmWwCXPqpTVsopBnT4iYTzwYw6S4YirHKoSd67xDUHbh1PkR7t9TE4X868XkNW8CgCdgdQA1HB",
  "key8": "471tGioDYWx4yDcRzNsVFrGN3nqffLPuq7X7eREbN1BC1oJB2SfiCB8SVibDukm11B51Mhxz3ikiWKov7yU2Hiqp",
  "key9": "2tLai99EM4eqiqrgB7n4aeotDfziqo7A13HDZKHu8CmaYYpbmGHs47UtefZerPG9sp4RSeqyaAo3mFKEbxAoE34Z",
  "key10": "3fjgrt9vE8GUuERSzVJQ3YVsGTJ1n28r4HTuRRidPg2muj6Lp5qqcoUrzipDyHuYy19RW52UkeRdjjemRzPjAZ6i",
  "key11": "3SUT5EBwbuoA7zuiuPvn9ZtyuN858L6211HYFY6cJ8uoktqVihTtfyVcY2WXZ2sEHEjK1mrEXNZ5CZcM5L3GvJGe",
  "key12": "2VfiuSzTLev4539wFLfsEqjddA7QZFgTRScMhj9uiwx6BQkFnvQ2ELXcgyz6ggRMUGfK87pur8ab4f7QQfjCQ8vX",
  "key13": "2qCFfYg4qAdbn88g7Hf3oBfmuoWjzKhEt3x7aqhVUaZitkSYijur4mqBDPg84yexJaKUUBe6LTHiajJJBUD4S6nF",
  "key14": "29TqwA32PoVzbZr8Li9tQ8u8cmsLaMVMUJmw3ZeGmsvsMRaRfYCrdXQUTeXZuBkPFVMbhuVtzWP32wW1nxyNtyzn",
  "key15": "2FvzMvwPuKhPiCYYZxhrQTEqmykwmTvZrSgxJS7onWAg7YfAWN9TZZtQxbDUWrczEUfn93eHLYfdwS7sfVxbmQpP",
  "key16": "5AJB82h4dUfhzsf873fEk4kK4bbx1dhc2uYwnBMY8fh6DGp2Zrr8YrtViwnbPCVkFDLcuGjtEtkygdnNPyrAw4YU",
  "key17": "64SxbX372pFw16H9KQKK7ceeT2rahKanfdcksH3HGDbEp82YNXBQPHFsCPdqJbuRdpwYpc6XjYiWorfq7e58jYYd",
  "key18": "YFGDKBHr5Zjejw9NGPBFgCAYb4oFpCxbVz2Py9CsEHKNXZYDNGjShGYvTuR8rRcLP58FhjsAGRrVJkxw3xpctbf",
  "key19": "2wbkyxoRgFPfecuZ5NiL8vjtLeQe4isXLUutF4HRRwcVrEuBXEq45kypHeqrxd3pu7LRuy28kwtGeDimL6piuGu8",
  "key20": "5tYMsQyoJXo6gwQB6WY7ezdwwKRNzdf15hwEH3ASqGQvs7Van3ptVu4EkoefLqTvEHx3rmyiY4iHCQLZS4gbJ59p",
  "key21": "4y42iPBZi3c7buCyxiJcEPgePRt1Y5mfzWK9Kxa8JuYjyDb9BbzSGH1WYXoXwaucMJQyEuffVfJyRo5K9gvNb9EQ",
  "key22": "4LtQzH9RBG1FU56TcFk8s8N3VaaJnWbpnp7niBH7Ha1STLhQVpRQeWqfGDchJG97eyPLHWP2fNhaamxK3zTxKF5q",
  "key23": "4Wyo2ucRMPN36p3ay4BEuSgeMbegdhR8obs2Gxe2BaJGUfJBzPT4JYSAqZtJyo2iTmSGkHvebwWCcXBpPSPEWAve",
  "key24": "5aPdPaxf8heEpYM5jjgZZZwgZq94cd3fqcm4Q9uQfmTtD6ZzjWjJocukx4rYsNVjmZz3GFySxJxyDi7JXCApxGZS",
  "key25": "44DBmZrM65uhDLDfPtaKFzec8eTE1V2rWvRVLECUX1BSLyMFJk5PEYVYcArmTKjAN4N7H2QxJ4jxJxmtpon262JT",
  "key26": "59orrqt7f2FLm5NavnTTTjJRfmfD87wmb7ju2cBExywWXnGUN3V4CtKdKZs7hmoP85YgHWSSDPfSUgPvA41Efdyt",
  "key27": "4EJCC5hPrZLFiXR39SYF3YXeQ7pdqGEZcW7WCminXrHyMrME4ka672Uu55qqzJLCre3Yt82NsEQHZhj6K2hVcCgJ",
  "key28": "3StLVGFuVGKJ5p5ErmSAX8bC2CfASw2JgAxuj57CqoXN6EYkPASUjcEpiDgyJ5VwrFnAWWbGmgeQ1j2Yw971qirS",
  "key29": "U4KSDtFvLFQFRUfZSFjZP5ww64kj8apQ1G8NzJG1w9ZMviFn26v1S5BjwokZtbCN4wwS9EK7nAVaqPvhQEDAv9s",
  "key30": "5Sj2s96vb64sBttZozdoBoZ2Bhua1PEXZGahCqig71L6hqeKhBpkD3bMP8qaNEhGXHrf741fQnvgvFdrwpB1wAGH",
  "key31": "3uWFaMmjQ7rAkba2RkA8V9Je1aiBHkBo59QDKWKN9rcKPPRWxveaqmyPPzck4nmaA2zKs18tpEm1KigMFNaUiNbg",
  "key32": "PsimanCQ3oJFBHt8bM7DGo8RUmGGJ5WXV4RWHkEnpU5n63SP5KRhaJuwrkWmj5aeSPV1AfYpaqgAn9gNsuPpeNT",
  "key33": "5Ze6ey9T4BrpSvn8wUP9sf1ebej6N2x58TPY9gyYjB9JLQo5At6qjta8RjEBTk8ceJSwNEuYJ8XFXC1wZNCWAdMG",
  "key34": "5p9bLiiwqPjydeSmpxrqqahyVLyVjbzKwbaUXRQHwqVfGwb2pY7roaXTpCp3LDh1ccydVjiE36xhQaGz59ZETweW",
  "key35": "3MQACSH9pr5kJHsPb3KtyUNeynruTk8vS3HreBLzwjBrVXSonuBKNSrj2mBpxasSjhNN298WLVQ6qMCkvPq2jFdH",
  "key36": "2ueHorkhmqF7xVAe7ChPwRMF2Z5yw9rGdkTt3t6xgjTWusoQNW4eDoCo7Lhx1zb1tY66KBkBNntuZe72VZa3MuPQ",
  "key37": "5qJhDjXQu1tmaazuzQRFDjXVrFxE7tN3nLXYjB6KWj6ZQzmzrhg8etXhaMVd7YvBnjdfavYPYqpDrHWgr8kkxkLe",
  "key38": "24UGWeZpbhLwrQBj5321op4qw4LCeTVMYi1kFZW9aPUeJbAD1dLDuCbqtWPHZYueSQwsdQvwTZjqoaM5gEf26qJ8",
  "key39": "2JJyNBNn9GLMHBL8k9aGea9HBojfTKYko5kFVX5FbZiwWuphSUQFxsxaKQxqTmesLLVTtpYjQyDZKyP1QEnGxV2g",
  "key40": "2EMk2MpKx5D2UZeESgkTjJCSEm57AtoKiFaCF4czxM7b8j4NroszAPuFnPajAdAxSCp5HeSUfvxjL22HrCphzVzP",
  "key41": "5Y22XHZeh1yiKYs5TrnTedYsFnfZjuFw7wbn6f8mssJMvbX2P9ExwKzxTNN8SAuGU3kqRUxijgM39pQTV9zH1s79",
  "key42": "N7eM1kL1CAiPXr53RmJcJAVsBCzr9rUTnn3FA7UgTiQ37nUsiAyaZSWWPiMDTPWZ3MwGN1upZWmEVYvGoPtiQ8x",
  "key43": "2KKEmAgf4esm1wT2AMMvJ33gzW6tGkdhT7p2QFkJu3AUgbUXmqRqcc17seB1bzbnSm9yHqfkhLfsxUXfHKrfYCkg",
  "key44": "3oo77k9WU92YovjyrZegQC7oJpaZVTGCixxuhjo9Sn96BseFKnC4Xdvah7hdSpRR5N3tFZmNarkWMYCo7Qo6kBxs",
  "key45": "4irdu3m8TnVFmXbbG1BtYCU5z7H3idEnNbQRgSyVSfL38hC31mSEiMuuwXV6d9ecEfdSxsDJYVdqbqhEAxieuBWM"
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
