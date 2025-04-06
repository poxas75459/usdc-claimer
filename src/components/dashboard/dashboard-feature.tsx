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
    "2DkyJwDhYoknRygoUBfFs22J6VU1jEDKihuhLfvjoYwXwh4tyV7QwfJVegQNWCTsRTuuRWRupabXB2Fdj4wjMoiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jC8jsA5CxxTXDo29p587SpvyweunK5ctb2525PiH3Y9rgjoNkzqrcUoB3FWXht4XokNvuAAt1ThPnX5a98G9i14",
  "key1": "2xAt2shPhHGRDsAPHCq3zXy7FgVMWvBzoZADtA1zrhCMjTvXuBcR5i58mXXaoYkhPav9XZgSShW2FVDrdEX3vjbx",
  "key2": "2f694NfMCjp2f9y9ooWRJ8zzFXhbAUWvC1LKww8t2QtdnGVhdq1AprSnSZ1k6CHs2PXF6vygvU5BYrdzSjhNHLXp",
  "key3": "2Ei2FfksbmH4M3qAWTRPqufVLiSQ4pmP4QwEkmZHKKh9QYWK6bQ6bahKqsMuZXeHaaRyafmGETNKZSHhFwAAkjvM",
  "key4": "ascB9Vj1fzSLzKiLbLVHiBGdz4JnMTS3VQXRtbxCHbURdZHWovYdad6xACfBBSzwB9QGoVpeUxwqmkKibg2Ub4R",
  "key5": "tssdoh4T9cZTEC3wYeZdGpQV25rJ4P6nQvduSuZWgZpdPsofGM7N3GCzTbJnGL2zrkwKX81fQhuoa7N9Qua8T9r",
  "key6": "4LPtZMZe9TYvwmctxg77aKXzr4F2ok7DJ3YQZyXq4YTtJjmDQxPwVzdtYjSw6ySbPqHgiYW7gfJdhz5nAyvLNnVu",
  "key7": "4TRzstYCQ5UHXvxBkEBVu27FPMmnczCZuvYffLun5bowvzw6PD1K2XysYZQVgCatNmbmbekWkBQ4aFnXaBh3EL3w",
  "key8": "18yR7bNK2sTEzEpywRfmYPFobK9STYW54LQhCVDXusXfYRJ3JpHk8E5jr7ahJuJn4FqwBdfJd7BThPtkJZsQ3qC",
  "key9": "4uDpkbc8u99nM4smADq6TNJjYMtdjqe66UaYsgDoy5aveGEGoh8fT2eiq9wx914iGGuRgVTscUeLYTSTViGRHZs2",
  "key10": "s6UA3AEMKGfF8Ns7TdDUuXBDSyYu8dpQtJ9zbXR2ZVE6zgqx79akrmMVEXQhMiemk5nW7jtX1rHY8gu1FCF29oH",
  "key11": "2h2fJbCkPgqWUKekBLBzE893oZprQ1ZcE92zPdJPEtSRNKqZjFpQQCLFfY9A1qoNhKbngxqz4uD6rQQA7rVYXvmq",
  "key12": "2DfPniMtcSnnMjhSafYudhceDejVZA6aVCFYgQNKDkw139iL8moRKEUXEqZsrPnZw5ZTRUHk8q7Ft62NfHGG28B2",
  "key13": "2TZNPwc39z9cv8SxMhPSs1kXGKYBLFdHun9M5NTAVPmw6Z7YtehZRXqjJNsZgC2H4KuLJMqukMMbkChaxvftFeJF",
  "key14": "D3T8fjDtcBAh5trAB32DZaiqCYJ34YHVBNCjBYWSk236RpGADoPJHvynwZENLVyBcsQ8XJTGucKK2G5kJ6wxTAz",
  "key15": "mGnYSmXYQQTPp5DQkEsQRqeQJJF84bPXhgxb82vf7oRkHv671mHGrv5QXdjkH4Drhi7PJzsG3aTUXrLeJtnM5kd",
  "key16": "2AgTpaiGQD2dRFmPAgFsvZ2r8rPqnsrYgssoXZc7NVujFoJ4SAypSVjjeq2uAqba77r6DzmWcvCUs9CE7wgsRk8M",
  "key17": "3pN3mShVS5BNg6qrPAQk1URQf1Uq6izGy4rWmRG5EWptWS3DzA1J1P75ddgby9r27ptsYM6UoX3gVe8sNBpSA2vK",
  "key18": "3oEKLkELeJYxsKbRm1kMXN9qg3xPJDkJY1wBQQ4J2bHtGPvcYruuGE3M8QSmjx2W7iRF2YUJCB7o6XrNYhtDMHA2",
  "key19": "257HR9kTLaeYajTYJ3BFYJxEhKhBxxLUFQM7gRTyySecbFh3Sjb86BtjNPuhvi8FyCFsnRuner7cnyXxDNYP6RkZ",
  "key20": "4ioAfjaKrDJmRgJziJjtPqpC7nip2McZpypCvLun7QLkVwNM5kLbjw6HhqHDFGE2JmFPJwt9roLr4LDJoqgaRaZD",
  "key21": "47LGrcbUr8irueM3zAScxLNEB1xcDM4EuGEb6R8JPjVgqTBCJ1F8MZKpFRjupypGxSxqK5BfbTHPxnzcBeCw3BwS",
  "key22": "3okcnhYowLmTkQx4SFe48p6isxZ9XJHCzWT3Zm2fs6x9gVRAQ9eSkPJiq6QV5GEnLNnQXsosSVuisVxSKUkszpLs",
  "key23": "3gEoy17mqWVBJmAepzqrL3LWcc9ZrEdgBVjSNU8wYRsA9grSZCrcHYsAyuvdMgXM5afCppciqzK7AE9ZkTYZZQHj",
  "key24": "3qKKcYMNhuCD2rAk7edJHJSAhWT66DMD2FQU5Z2m5C1B6aqz47gnkDrpJKc2L6PJDBNL4sDXGaqdjhn6qNPXJD1e",
  "key25": "3E1fEzGYkXS4kp348T5juK5mtP1gpauXYEevZidFDEMQhn6CrkfYhuTwd2WvH6dNWRbAWjxiCXaR5YxLvnKqhrVs",
  "key26": "EWazuTuKxEsPmfWytWFkGsQHUkQbavqrveeuPfb3D64yGgGoKtLhW1T9a9Gv82WdaQEca1rVDsfsqDCiW4iEDXU",
  "key27": "3Bs7JcRpWxmvojsEV4fZZbqWtkCxPfoy2gSi6uE4Y9hJiKFwQiaATMiGEBmZjmR78WqLuLjdn5HGgh5RxQZwUasE",
  "key28": "3WNHvBFzTjLfwZDpCSnNHQpvebQfAkVivczACS6YpNPad8faByh7evrSCJVbLjuBMikfSng2LUcbNn9ANUjanxaF",
  "key29": "4yMkYV7hz5cCU2x2Tv5q9Vxs3Y945MY8bRh7A2FEzhmXkxpML5nspMUdzTDWqCbmgqeAR1GtL8kmdXV6sSueZqx4",
  "key30": "4Q58SbjrL1tAs2pLkd4GM7m4acojdncvspPLzxQ6SKSaU7qT9Hsi37Qofy29mYd1hX4dCvLomcx5FUL1misTVwby",
  "key31": "KCoDF445xvjVCzZUmtegg7S15Vj88NFm1C952q4ZUhrAXeqzUrjfZMYPaLC7jxSkvv81bauGXCdfzphFsJt3B3U",
  "key32": "2gYpWXD3bJ1GGnBuX8C7ri3ukaroHL7jwktYHkMZqvS7AUZ11jxE9sSs4Hm3XsynEFTwa5JHAJNxLR9vNJratVog",
  "key33": "Zgzv5oSTVxy6J7dykJZhMeMW4jxjhwemweYbT2vxRKGWeHZ6qEBmwPtejAc3MLv6fJT18qdDZjGbn2TQSAGKMud"
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
