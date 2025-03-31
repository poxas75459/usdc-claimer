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
    "3vZLa9tHRAG3qC9AHA6bhtARkMBFDP2kKtBfaagDxpmxTVQEGZVQfTMjZg2tNAFaTe55paMGEUXnUvHwfmbgzLPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F6RF98WYr914jUK6htdc2fCamjFA7KLxErVgWtgN8SA54jwwz87ygJN56hrcxaxqztnixFFxnbCpgzpGLMNTTXb",
  "key1": "3uBW3gjSXmUcxcP8f9vxECWvA26y6KzG1oS45HZ1LrCa6r9k8km7u7jxjJAXTJXD8eSaRFmFvay97LrkjfNsS77y",
  "key2": "3aeAdxVuUZYtoix7cG9ZH2Rr5ZXLiNBSPGzKUWjt23CE5wnqS6n1AkiqJG8UuravM1CP4FZKaGYurWeJqZS7CiXE",
  "key3": "5awQPpvrGye4fXmmNCPXrMZt1MtMW1U7gRuFE5ARNhiVNrhSaVH6NXgGJwr1k699ei36iYsMEvDyk7nSrjHm4EeD",
  "key4": "5cTpeMqjaRx2ak463SjXPSUuQjKQY9hHK2gfWN2NkWZBB15fDdMDfg4keBJzrGKU9MZj1aEVwN2YwphVd6iGxbfB",
  "key5": "2TzGr8DdG3AiE9gZffTk495t9r9tbFSzDtpntoQZPKLj2Xovgdis4Wjb2DDSFxGX1bqr2PBygWrVMRps7RyULRoA",
  "key6": "5KxN5yj6Q2zeLxtsvvzr84Tuziz7bGqNpYaLkrjGxCdjQvkFZtfUnquSN9sndXcFtemK4TU1P1yYVwhNPVJgwyp8",
  "key7": "35umiabUj3j2vELkhsoxJgN8HL8zpR4rCaxpcHcHzVVU917ZVsimtgYNYa3rYxJPTseWW39SwzJfTsMMXHnUYaCM",
  "key8": "2s8HLKcFhtyz7MtcPfX8jYVRnGhv7M5rAMsmqt6cfkaDTm1se4ZqTQ9qBWxbGWUkgwVoG3ofMqYwmQde58UYuMS5",
  "key9": "YTq3QSzTjawNemLBtBusgbeJqpJBQbd5PFismnpPqVUemLqMHcTV6Y48ykd6akcs8CW5UgwXDpuk1cRN8FmYc2P",
  "key10": "2irPhJL15NCaioJcDbSfG7QHBBXpjCftYBbhrTf7UoTs4TfUvijiopyGbsXTrU5Rry79inLwMogFTFVpzyBz5be4",
  "key11": "4KVypc7rKJPNBVBZ1uBMDL2NFNVp6faUaG8QM5AqR144eyn1os68pqbB8ezew1CHinsTMHh4kUb6o8KPxUn9T8Vw",
  "key12": "4HEXN6h2zJ3aFmqzMpQXJQDcGCwGfSb143okGVzNeEDUzsozUgHwuhQnVDgLtpxkNNBsYb44ojVgAfwGx8TsfwFR",
  "key13": "5Vf1hXxhFRgCfNZVcpMJxK54h5popMFm5psrrU3MNx2rrM2nAwbgJkuiF2iyiXT5QAc55cm2X2PGVrqDU4TQxvrd",
  "key14": "4VZvvfn8BWEZkX7ghi1haCgb1osFS1ZcsPHh7tn9UTJyo7aDLBht6LGNvcRRnu14w1ubePwea1HbDkpLDaUUj5V4",
  "key15": "66t2RH2tdCM44rzqJy8ziuKAJmhNTLGKQWJfa5eXK2NVAoAXG54P1XXAyEmuJyYJge1Cx6tXHhK8mKrDretTizZH",
  "key16": "4tHEtR35Dai7pxTWXAQUsBDLSPAzAJyNGn2rtVq5it53ZXyvvduj4y2pMwJcNaE5PjSDMxdJCWeuHuHT4CBsx8ah",
  "key17": "37v7SoYDsMwGb7uLfRG8QEDzEKqfG26tN8SneQPvW6h2jCnf8dUkD9py4vZ5vmqxowEe1fxu8boccL348q2AeWQv",
  "key18": "SPrURWi53n46BvLf5ait1y38MeGSqd5KsYRKZmdaVoi7TWCTxqnJT9MUQovYS5MsanfiYkpRjzi7G7ffMavDvbR",
  "key19": "3C44AuR8QaVJEMXPmRHLes1e9eycKcj628L34w7wDJyGC549u6XkWhGEe2NzYc6RRAC6iUU7VMQMuWZJ59WvaQu4",
  "key20": "5tySJXp9QF4GMZbh6yThhe1GTefrYkgSXgDEFhMCt32TerFm3Ndx3hNEYVMLQbnkd1pJYf5SA8iyKVnYRz7Zwnp4",
  "key21": "bi4VRFMh5hN6jKwqvFXP78HKoFXS3LDC4qsRaKyuT3MMVQ8CMSMrteCJhRDTGuHWkyUJS6Q83DNfJRzsvGJxfR2",
  "key22": "4GvS9dYhsgL2Cq9JDtn9rnPd7nQ6qMLSoUsHbd7ZM2NjCzLfnipV4hN68WAfRTSnck5qhHkTmAsGn9LHPxvf3djS",
  "key23": "3KWZqWXp9oz1oyKNFGzRPYjqLXvHMcdGzAQZaZHcA9muo4p7uFWzP6HZ5cSr9nVqRn5Dn3466krd5Um9uKvkAh32",
  "key24": "3yqGjZUVR1ca6pUN5f2wGL41wxgLv53YDxrFWZ82weZEbVepL7JT4EmjSLfW77eHGMiBujomVYe834VPNo5DFedu",
  "key25": "3F5pK6aqomefNZJDtc7V1vRGHWyoN6vB25aeVXp4nj8GAY6s2ciTvinjZhgj1Chqejx6i7gC7prb9nVouKRBM4sM",
  "key26": "3fi4M3FS28oxjWVr2hRKdnmWF6AmvZVUHW7EYqjg3fDdDTqY2Zdmn4cMS3tnf4VU4sLqxYgsqWAGZiQLDLche7aD",
  "key27": "4JWZNesZnA1LrEQaxeNZ2tbSjUFUjKdYtGatLXP1R3L6EKcySJR58dSQ3hiCzcpLstyWid7LTEzvCE19PGFdSHAg",
  "key28": "5zTspQUeRtqQEtcnpdJS31LM7VXmfMQT8fxByj3E8uJEcRcdai66DwUTVfdnW7q4eimzLZMJGWVX7RJb5S8UoSkj",
  "key29": "2Rqsv1UatLvTroHQLdhGEFPZgGXtjBMHstt2uh9r2Ku5krRHuRAuqpKAUmDJtHV8NsUvMbjf9jXyfwDjJbN2oCnz",
  "key30": "4v8AMTvtHrq1GMC1bRkuyfLu71C7hfKKDvM4qELWjPFXbu7KatNVXsAWWtaPD8bg8VF8Ncs5jKidEhXQ6GsjtG84",
  "key31": "2UEKpUdawiuXZbMZrvb4jnr9wd2RGuFx3JaY5UAvjoRxgkA4KLY1YEggKHMRgSX9U9pVM6CqBJeAxW47wngVXnfg",
  "key32": "5na6zdMtZEtMQdJGnp4GQ3FAgpMGfVyokPLbV5NFamxPhwiX8gC8At4pYPRKg5wG8fjAUiSjrQn2TYJmiS57UTNx",
  "key33": "2eaFhgbiW6XVUH7pZFZZg6bmhcU5xKcxaUCgXjhCj6pCrSx59aJAgEsLVfjkFoBKGoWEq8X7bHTguCifYcc1Awu2",
  "key34": "4ot2NttAQaoa1asJN6iCMcRs1q5rgJp7U2xrpV9QAbv8fZqH6LZc4ie1KM96oMns5wnwEK8NTxH9FuUXuYuSjZKv",
  "key35": "5Brs3dGLBCT9b5jcCw5KjVmyrQCLLmdvk1AyAyYZnYDfUz5SrqwQPexoZDVSNvVUZ8QRLuxCQkVDvxsUNzZweNuX"
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
