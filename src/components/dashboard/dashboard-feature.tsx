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
    "3cFbwrTpCDnxUBGQEXDE5kP8uAf98kcywTXe8Xmk4eeH8vugqBkwz6Y3wswof7uTs8TLiu9L82wzzUTENWgsyxQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YhcLiScYbrewNqBGH1kWCMjcm6wyXpV6EqjzAZ1qzgJx5vyBat3jxUUDnrTxe8djzmnLbR2mpg1qffcGMP8drEM",
  "key1": "2K32j9AhR9uqPCaFkRZRGF4VPUEgF7bkrgbGWofP5sSXXf74MLRJVMjtxC4KTJUN5eJQDrkDVn8bCdozCLGfvwB8",
  "key2": "4SRJXkX2YPYEiWn2NWFNmZkMjKBeBGGhsHJgTfjexCpMn7nAiztsfdSLwMw6PjqcqWG8MSpeS6YXmECGQgpU2obz",
  "key3": "3zLZDBr2KrNGRAzm68tfxXcziyn1z6PFWKbuekSBpVsJ3tnZbMJJv4PxfCtYbSpY2etewmba4oi6uKWTma2v2nin",
  "key4": "2vkJeAH7wVUbdAS7F8eGnA2YdNFas69yZ28HNBM4bfVUuGYUGHmwETx5fMJ2EeV6Ywdb1TmGCcKsB8CcpAiPXZNs",
  "key5": "X7XDksJZGC4T8AiTUo18rbZJUXYzqM2ovnUZNuhfGujcBohHphXbGb7fwbizhEyKWsAbDL8tdJJUZcdeZ3toRMP",
  "key6": "Cimxdup4WQBeDFwGzmeyGbWFeuJD4MNXvED3ANJ7f1KXtpHuwhLDFRwEVDpRPnAdWSZCRatt3dW4k1KN18iRVoK",
  "key7": "7pQPTyqxeLe2xzSjkNqNCnZNmWvSCfH7mvT822azQDoqJrfNs9k8wYSseHRqxXcSsQnaz1F18EwoSyNKBbzjceV",
  "key8": "JWaoNytwzMzN4oN38cVUYF2iAqnqpGQ5A64a2PH9yDBeLbH67dmj6pQLTjEXa3yjETf3FkLTqZZqqkfBVs2AHWR",
  "key9": "2xUaWRNW5yYVsuEik5HxFF86Jcc353ZQ3tTFrRkACpczsPeEMSYYRzcVJJr3U163xBMcc7V9jPjRkR96h2pdwuMm",
  "key10": "3RCWSkEWbyyGsdm38urEvMJpufyLE5pVNAA6SNXsLLKn8hBK8rx34G1uoMZtHdFDgBLfKxhvWj7XfnKZWZurrJsw",
  "key11": "rtA2WMMyGtjhLPQGmYaHKWLk1d8n47d8FQ2EAZm4mHS4LWLvPgq4xjTTzmkvNGGKMFSswn9LwvA7AMXcWJAWNso",
  "key12": "3ZSNjZjG4GPG4PUTydg8dEwXyQkTuvT7c3g7JxB16pf3QQx6ivzvK6ma4mWccGkKaXc1Rg4272ESsaJWKGyy3LBK",
  "key13": "3X4cuki3ovLauUTSnJGCcpSgThLCiDYwSNVBDcUDLPNPNwRRX3YhWbvswBfjFZezUzHvCTu47X3s7SKC1eDFLPHr",
  "key14": "XjmaeipUSQT3iMHdLAi2NCBqCnnuZ2requjDxBPBYtmQiA1yS3NgWXxxknTqdBYsb6uoQPfzgfmJdZbVqVettp8",
  "key15": "3zCtXyYF7kXViEkkqmBWqrfyKZxQhsKnPWD1VZfXQ9CAvzpDQRrMyUochyjKdgAXXVSJhGCL6qkx399aADQTnff2",
  "key16": "2BAR6znEnxWnKnsdxpW8NZhL6KKhuVPGomrre2oFdXDspbQmgofnUpumnMRyn3DVS4ntZUsGzjVQoP1WAFMMLrCn",
  "key17": "5neXkWzLk75hzLe3TMAsMvsA6mtpAjibqLECatjK2a7veXu7vPnAy9jnwsG92v8PhZvHL8FPQE6z3PJsA4JX2JGF",
  "key18": "3Aa3qsjsucmKCe3KQH9T8cW2MLy7vXHma3hsHA7WEKmKVKBDgfjzD2dDiF5rkVjktkK1y76JqRabvoTU9ryS8KS1",
  "key19": "2hfZwpoEWrRJE38MQLBJQRdGh2DV3iTi8j78ud5594iZyViFh6XR87giqWpN7fPwVdn3oDan5CuH5syvMiXh7wXK",
  "key20": "5fT9W9LrJRa7m6wN5aE6Gqvzw7EtCGdSAtKNxiJpeLV73FUFRA17z22DDSAb5bmJyw8v7LiVdwjYWg2Kmycj8vmA",
  "key21": "2Zwvqg8iUvmgeQ8fXwdF9R7FPcaoRHDsza1L4gNawcB6FQ4Gyj4Lci1d3uZjsD7cjPhs1u8YFsDAQHTbwFWsRLGf",
  "key22": "2cU87bHexm2MZRAgdvoVeo8FNoA9bPFv1pZwTMSCu3x8Y7ivPs3UYLXeNkTLM2QeVVbfEDeUGFe5gnAXiHd5BUZx",
  "key23": "3bSowhJ8H9R3QUZ3VLaoFg1bcMEZQN7B2bP6aF6nhRsN85waWAasdftgqc4UofHq67afE47HtcniNiMarR5pi2vr",
  "key24": "5cqp9X4VExeveqR9BLiUHt6V6CftWxL9yun9FmGK4ENiJ9VMt2SnJU3ojHmmj9upJhnwmD1u1wsaFbr2kPukvu2Y",
  "key25": "3U4mYuYpa2JSdtUwxN7E1RDxwhzZ98dhDGkavHkrxW7wJ7f2JWtxKGGCDGnVndwD4cBKKweBs9U8terfDdD8Bg7a",
  "key26": "n6NJWDLvCnc6momN1sxkS6maMkoK3xy6nxtKnammTQzDQv7yzMXib3qHszbWRvQZtcC1W9aTPXvTx3MiUNeSAYt",
  "key27": "5HojKc4KvMmaDHoJhjj1muaYg8AhUMLfkFR7UfZGaT14BeEvE9Nq7kQEoaERSnWvHT19s9C7wCkw1s9YNLbv21cX",
  "key28": "5HYjpJfow6foE3qdTxAAP6jNZs72GzZiMWiD6BHMQabeicjm3kXz4eNF4VzzABD8ph77vk3FsRPq6M2tmP7WWF47",
  "key29": "26GVB9RqC3ED8w85fvxgBJ15bfYMoskhSK67gPiK3ajWqwEVvdZorU7JY3KcPH9rAi3vzpSN5K6z47Ls2jagfuLG",
  "key30": "3bmZKrNiJM5LTGtnq9bbSfJUDZVzEhEZByDMuP8s3qfGUUMqCXPeR3WqKWH1B2b5ohYKuDv756bDVZMyRxWKZcFJ",
  "key31": "2SFeznp3zDmFVWhETb8XTqebdjbCE7QS1fMxK9QskafKpm2EhADP4UrLqaAsWHFWrPqcShss66sh3JCKBVmeM3r4",
  "key32": "34vfMQxLNJpczG9TiVgYyhnd6Zcj6e9vQf1PsMgS6TPfAnfhfXjdLP9oyxHmgR2QajCTDbysuo1Wf6B4HTmj1ghC",
  "key33": "4QMc4jvXX39FVXmnL8MNVTZkbaiPrLZFfqmy7GEuhzEkodYPaemtPRfGa6XPfWmvEVcPQXriHsWqgkE9KggGk8nF",
  "key34": "5JzG1dCGLYftftUSyrtXSYUnT7wzthUQRufs95tqa9CT2MkyrK2GdiTA51QETZVZ4BDtWvKA8u4n2f3RK5faE79G",
  "key35": "47TU74cPL5LfsjU4xeZKTN8DZhCrzUFyeRdw1CZwexhubqMQXbc5jqHLhgYLu1caqd9ZFgMhFk7GJDoiQiNsJUrc",
  "key36": "3NT3ZNpuYg85aThzaiu7FsWaCwE4hpRqDQ9eJZADPWyJDHwh7r5aBS8AGjTQxh1V8W5hK7EnDpEX8ctisbvsHu2H",
  "key37": "dSEwP3KN2bnTfuDkiXLX8fiiiXgkYfqBd614u3pc9gZs82F8KoDFY6FR2VzDkJiwR6yuLSGrt6KgoaykbVUPe6K",
  "key38": "3FmAp3uvV16MWTNiyj96BtvM17VVs45TKWGVPXXqa9Zm5NrNhU7UHEyzDxZqVMqZpVCaT7bzQMNkGCDBKQSgct38",
  "key39": "5BPEMqdHxo5eyyGwSJai61hTruEJN2mPvMTyPWMMdPG983AXf3sL9BM8BAxd5Y8dYdBBqM9acUn7LLzKHQhwuEr6",
  "key40": "4e5CfZY7Aqeqe67T9AXXRZj5d5Dk9c5PC6ubJRriZTYUDsjzD3u7yw6HSLsm6XzsMyTi8WzeuaYLjL88Bx13oD2H",
  "key41": "5zposN5UpZFE2XekbgXtjooBiSVqu144Uwidwo4owe6hFV3d1CPWMMuE2Az5fHz1JkqthsyhJ5Y3wi99p7pYPUPi",
  "key42": "XpamSZ2r2oiCier1TvNuCFXuiMvLH6ECiJEHhtLCQcAejRzV5poZQ3jLZfAtNF17dVSgEcxQFxKS4YMptDpkaMp",
  "key43": "2hB8gdFR7YsoP8NtT8qjL1FZXPSkDvoTygKZBXRtbNgGHWrwz7UeJ6oKueJ5kYSbLKpVeRwEqSVLRTe8fczuRFXa",
  "key44": "DPNnGc2QVKt9GwsMHjgGDuSwweeYrEwyk1zEBgojfFMX8kFy5ToS8Narsj9cjQpDsqvXZBAbBGhAzJz9MKBGB4H",
  "key45": "Dt13GFY9LiSx4QN4T2gGw3kmThikkUAB3SsvgJxkUP2izJd3THAAMErk8mwg9QrwL9NiFeC8tmkUTKPbV9NZFZE",
  "key46": "5EyAG1XarPx1w6UqjnaZdSFiGgiqV6pu338Jc2YfL5L4mKevMGTMt7DUMA2mas9vFmE3Ukh6DiEzYP2exoAz67vz",
  "key47": "41QWXTcPTkHE2LJijNgX7dCXGGPgDSLA1TLkMRVeWu9B6sivQBvLzG8XWouAUcZAXrQrQwiAyCFtwVbXLJdUyCpL",
  "key48": "3sKwHDpdtdj7LT5PYAUowFGPTtXV6dPTTYMchzLuPgxtzGErP3yu4fStzeqrWLgnDqnSGRzW24MU4xLEACn2oQRU"
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
