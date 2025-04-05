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
    "3ofADkMzfMURh6MQwDZDh5REzvEYBAz761CA7B3tjF6Fu4ZUC3kqMgEkKSFg2M88nbDfosMjc8JR7iwgM3ummVeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58RgV1xiGqga2y4NNz5fUduYJwDN1SALzieH6DUwUCBvjcHB3www1Hyd6aRgT9k4JNPYN317YHjKfcT4KmsHDoMD",
  "key1": "5WUhzaWuM9zqAAP7SFKRdbnJPP9CBe6nPA3aW3EdtVTSj13pHC8JNbAf4fE8H98tTGZhywMmSJfDyarh6vtxHzyi",
  "key2": "4Ws2VQztHaW2dMsmfTT21y1KM6Rhwp1TYDQb4Bo2w6hVSBsU1Tm5PrDmpkJznWkGRvBFht5NqzaHXP5YzwUFodN7",
  "key3": "RTHQU7XWCaa3xmB6yf34aSZxgEMRF6B3RtMamgi4ZcawifQqKPLSVUJamYg4HNjCenov9mzubQf8RXeZ6w1ryb8",
  "key4": "QgJCed6JYsVMBAyqvaYjHrvwryoLhay49Lxj3NfCMCbaXaug2EatTnZvQE2UmoUm6kM5H3vocqN6pLSTXacdAH5",
  "key5": "3AnB8BB9H8M5Le8qVvfBVBJWQYwtukfQ2gmGpLka8NMBoHDaMdmh9twpezdntYuJUg5tXGTATDP7zuBeuyyyAGtC",
  "key6": "i2KygAGkJevzJP3uenq6miKzE7cWyLWUqgvUeKKnAJHtsvaGnLMVZoKPr4VwpuSKwtBQKsUTfEGz2FhNEW1SEWp",
  "key7": "29K6MRNzV4R7XishHPhvJVTRsgMLDGWmGgJTWYduEZgUhZY1Jc6tJnv52Ldf3xioWACAvHWzbybs91PeLszxECFE",
  "key8": "4LzkELfJvAH55SjE73o9UY8YPWJerYk5ykE3axB2c9WQoPvSydgrASPabu3Qv7iAjR1Kb6KAuG8rEMnZEJFyumoR",
  "key9": "3xphsBLCgtfQ2EnwwwjVfFu66PrGaRKAPrxMecyQP7n3WjCWDtHHF4kxyWc8MkXJvTc8EdmavHwYNok7tQAjh4cS",
  "key10": "2Se1C9Fpa9vkSgfE9p6gBRguTmxBbua53KCn1tuUGpiiWakAeSFvH8kApQhnni3vbuo2Dw8qVRjgbo4M38kLMk6D",
  "key11": "DYFfeiNfLySNTmk3B1Dg7HmjmeoTizL4YxSgWdkDNqy3TyqUuWcCvPwqNKm4do5VXR9eFhNQki5pemUSK9UtZaj",
  "key12": "2WA6XcYUMUmQURHMWSs7wpY7a9kDCPeEGo2xDCsJ5WJ6ur9HPPzyYGwSxM1bZWVv8owS7rFTzKQJvicEMbUgjdi8",
  "key13": "Zenwy7rxRXM9UXS28qB9h2Hn42VSS4KUc5SA193NN6o4yqfhrHi9aHUVsDpDRbywac4GfhW5j8KdfUXAgTNeXUE",
  "key14": "sGvUZM3iAn8QRx66fgV9tGXTeUv5vNkyH1d1S8oVygnd9BhsCRZrps9FNEAdpVPKYk29eb8sJ4zgQSBiTzwvbCK",
  "key15": "59SfWFKig8NzY4zudFoTV6aogRt2CU61DkhSi1uiLEsD8xUsa6CgAeLQiUnW85GNuYXbsT9XFE4ZQkBrqZ186qP",
  "key16": "3k1wik1Gc2Aihg3Ecr16Z1qKsHKYZrkHFUMoJJnNDwqkcVxXexzhwAPW62gTS3cjUyxVXGpZ79Wtb8Pk29omBFYv",
  "key17": "4ZrqvmW1c5cgemnjN9eqhgE4dagdPrEzNBKR7rZRvit6pm1s5yZH7kJvDhGMLbADjCv4dLndsTrqXiZ8AoQHG8CU",
  "key18": "2E6VzndLvbv4bZBJvbayRbWPk9h6GZmD4GvjRwxf9EWNWGAJ1b8SwgFbsZjgsQtDu5zQKPUmxHN79bxVxcAKvLG3",
  "key19": "YBrRfYXRVLhYGNuErUcKkcVdXY1nB9KMV4ozZvYwxHF4JJXQ3uCNUbWVC2pmsankCMk5TMXwfQUPfqiSJ6NUqp2",
  "key20": "2eW5RQPnSNJCfrqydWRCUFyyq3XoKjR3F1cUEFL8AQC1if31sxpTtVMvXMn1q3svxmga74sJFDXzzCuqfnJ9arCK",
  "key21": "2n8N9Dwkt6V95zjLxG58Tg3vrYG5EMbFUyQgcpp3nrJTrZXJBYTd2Wc6AuU6jWg96qCSA1Z2mjJKuFHVYfjCFCNL",
  "key22": "3TQic9cSs5ovEqSuHkox75gWw39BPvMYkfeMbtMqYvfd2pD84TtCoMDNi9LSoH8DVGpnhoyHvo6R8ANCiNsZVWbA",
  "key23": "5AHuzp6xDQy4Hvd8AMLuzQ5PxpPVDUe1hqyHPxxhMsKFYeAVWdseVPX9fouGLnY6Psj4wSoda6N9b2mz1Noxkj92",
  "key24": "49Airv7PKQh1wdFMJ8FfvWVT4gtmk4QtMQkcNELtXqtgr77ZwgFFhGcaUdjMusL7YuPTmevr5ctwfFTjiWBkBXed",
  "key25": "sw8fF6ELVsp581CpnpQwabC53PPQoefvGa6UVKcKh82q2ZUjAbqu6gGFDZ4knmM4ceY1avhutGYLneKnqZkMZNb",
  "key26": "2SLNFCirqaBUBf3vj8V3RGiYtgEFhdr11Xe2HqrbQa4gfo1z5LmjQ5imqnuLjFHbmvhiRXpXtKasH8FLYihzBy9z",
  "key27": "3TdtTB3sKEmwwD3vN8vrfHPHvz8QRVxDKibkvaNEzD2FrLkY8mr3oCDYfFtckJCDvHmRJtyiAjmjkAt8XBZCrA2F",
  "key28": "4UdhVcQXr7cCwCigDhGLJCn1aFYwWgNe9euVLiiCz2TYJ7JLU9h7txTpqQ6UAadFcchsCQ1DQ4TZU4CZpxiMAqQe",
  "key29": "2ZRHkfP1gdciwNq6MUEhuDi9TXofbBMyDzGse8v367Qu5WGZKePbYsLQYwFira1r4VYTMkN9tNSGhinRFUPwNgs3",
  "key30": "H5XdHw7XG9HzvUuVLDwbx7o6kPtUi375BjeEAEsWfMWvXM9iBaJ4xpMApDiMtdHxVPMrM8UK1BrC2Wz8QmggsaM",
  "key31": "5zQuGetY2Q1NGJEe36uFseQsEkJK2LM4SFH8qrgWhjVYwHAFvJYK4Hgr7gtL7YwGzcxvtxhTB5eSPBLh9Ez6bT5y",
  "key32": "4kRXcQSArR59Aa4LJ93wqUENZ7CrbdXtUD8Tw3Weg7AYFrbhVVEZXEUvGsC46uwwgWc87BjSEdHFHNrGJV7gCDpe",
  "key33": "64sJcJEXbj3nhLUznicygK78BWoc8XdtLtwQMXXaYaA1Sid1nPey4hVKCk7B15af4xxNEt248mMyiPeqQmQLfT4o",
  "key34": "4F9CK6f6NXQHPkFSLoZesqgsTTGUpEVMMSUQNYTd6cPa92eUpmFWdfxmTCMriL9vgTiN3kt4JrAgyS49gSASKrcq",
  "key35": "3geDQ9LxShDZ7UewD9zjJcUCYbeWbm6xsvsjbso8yeMtsLDtRMPp411NzNjSVUyR5YBwgZ2MkyHLzkcyZSLwBjPv",
  "key36": "K5P3FUaqmV6c4KUK8bDxCm9damEx9uTFr3yvFPuL4xJ2KpNqREJy65h7VepBDKnC6LFi1NEhHXxCZH7EgcKVpVb",
  "key37": "3B7Xq9UUpPcHB6KgsLESSbCVd44AER4MQ46BzonWSyG4giV6XQq1dS8cPPte6kUzL4WcqnVwTw839ZFwcpNPvUpy",
  "key38": "WAuZXPxChYCq9TfVbX7AJgcZJ1NkQd4RZVyCGxkXunqJth8Q1gqtEn5ba8aUVfD2pqkiHU38nG2nvqsEbszWebH",
  "key39": "5KnZBbq6Z5NBM8VUctDSY7DrdvxAtXXit6z5GnMw6gQWjp3NZrBEd6UoaXTYcfTy6Noh2mydz8YNNTk2J5NibYoZ"
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
