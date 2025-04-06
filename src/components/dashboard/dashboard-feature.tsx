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
    "2bwbqsk2KmdpoXp3xEC5xaBH2REiiitvMo3vb9ZcRADXCwJyZoFYp4VqKdbburoXUBK7ttMfpoH3zG9FCn6EnpFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BYMM35E6MtFmgHPYrnZrNRa4QjU1SNB7Kw5wzm4cQzS6yVS7GEEd9UMAAmf4czmZGWNsNVBcJ3ZLJpmCdivwKSh",
  "key1": "4AA9aLBKsdTxzXRDFTraAGRUpVGQ8QGU62AZSQ1KwC1eGuNuJDyAZc7DXBL3RTPUEcYpmLhvnGza4BDLf53NTyMP",
  "key2": "4CvoMuxmkjQt9m6qoHbAdA3WHwwDPQVgiXuPUPYQ7f6tmPpXhZSesdYyz9bWbGG4U3h9dh8LQLXPMrNGpSTqLUDF",
  "key3": "4Rk2dxigN5LaT6NoVUKUBf5MG7T4pTKfmHTjXfdpGpGUpVsLaevBfGnCAg2q7FJsPrguJRXwecGruRs2C2FerdrC",
  "key4": "5YgEUaPU3jT2Da3kJUEFCTqD3mUysMJW14z7ABC6w7EGUKZwSGYhXVs2CmB4kYk3ZJcfiBiJrY2tcZmfGcpyL4t3",
  "key5": "3zzoELwjbEimqHgk4L3RkbJMaFpbEZAeFHZKVp6zQujm1txSFh8qeAiant2dQxsFpH6DPZnNXe1aXyR8yW6voeVY",
  "key6": "4VK1uewc28WucPa4yD635miTj9rm4kfXSauxXExmg9G81g3qp76s6BHzBubumqTfwbFKGqA5B4pce8KyCQth6fBF",
  "key7": "4pjgRFowBvb2kJr5EGNcmYLdkJJHu2kYhB6xz2zsNSzNpKFdyvWHKrnxWbCLQcCKzPuhFqKGxpNg2XYfWegu8V7C",
  "key8": "5EwwwfgxpzERFjVFV5s1TTpyTE8iJrSwcXXzR4B3JPJKmqAsGj9GpjEXEXqXe3FApdYNfHDSPmu8EZDAmZA78dve",
  "key9": "5WyV6Dd3w1F8E9UtvEKw6qAP8VsoPFaAKNqSxC9jwpS4H6UvE5Hf3QFWoocq7HPn3xwAaYZga3qnZtJz6vnYUepF",
  "key10": "XzwCMpyLDBnQy6oEwmyucfz5E7iDe5tW5vpfNS3wfcpCPpntQxuFGDpTi7ZPwUQs93cmkifNq5w5nK6YaHCXLpi",
  "key11": "5nH2f3kLY85yP6hyfzr6xxjFJSd9xPp77tAoxknvDgyuQ4i52YNSGE7PqnccwMznoddpBy1UKF8rpcEB9jJHPk1J",
  "key12": "53xSPYNkecR3yEQDM318ZMRvUvTmzdNQkUjvotnnKJ1NJgiUqUyC2oTtALNrHLzp3rc4STPWQZg4ctfxCaQDyMkJ",
  "key13": "4AdGmaoqhhbVr6pBmZApmYBvcLKk2sjMPA8EArUS2UG2Z1A37fiqhRDygZZLAy2HqUFPwBxrmV8eRBvvWssAws1V",
  "key14": "oiMeyzx4KZznQxeN3yVC5a9p1fx9KDkAmwTBxb9WEKds18T5dp5BN88Laimdhvxh5GTSR7mZpF3J6V7gxXoscMR",
  "key15": "3d6JqYfCUHqAKdWKH4bv5uhw4nWsFHMeg19dPJrQcXrrsbjZ4mkZatLsvLvwiAbr3AB7SPyGGFnL4Ud1aXgcBM8L",
  "key16": "4BxFzBKWnSTHFsA5pyAqVCsLtPn3bkfeup3yVa2QHGSCE6efDXyGz8UvQMUL2tuhwZQ358kJzWQEMZh4oswLyYbj",
  "key17": "2ebkFyMhHczJqBV5GAYEtPqv1virrdPpe9tukx5BZb4S4LezNipjqLeh43KTpghkH4wfW8ayhZVrui5xxoGQs8Y9",
  "key18": "31vM2fK7vU6vmJrz5nQXpMscTKSGhRJsL3vM9VQijJpm5J4syMqYSZwGi7E2GhXgPf6Cp1BmmkzRmkt5QLcp3NgZ",
  "key19": "64jfioLKmBEPYogJi2JyVknEyshPngQAazANjJ6Z6ay65PrWqwU3wqH66hcXRjUpY7N3oXXCKjEm5PBQ1DX52Kq5",
  "key20": "3WeeTMq7fDV4BMHzms6DPBZ3N4XUumcNos6pfEYpBRMJDDo6Jur5ZcEhx2DVWiBQ7C6m3bzyyy5n3nLwGGgfctFf",
  "key21": "A8U9mBEfrm3TvPFvXLFEKzQvMXHCK6nsKLnEXFqt5XSn8u133Syrmpgz6hGdoxnSu9PwnzjhidbrYyucpF4PCfz",
  "key22": "5TBuEKUWz7Fj6E6fHbZhPyydT3dtuBXRcQTc57yhtSpnxmTiTBCYjM7Ys21dPffaRnbLSWXkVWV9oLHgLUrXMk8",
  "key23": "5YLExG21rRh9ii6mmRQnJ6J8VaLuV584XxtwKWS8ZeLhU5LxcD3SdqLuaLVHoY1M8u1S4yb4xHpXSybxKYR9iu8d",
  "key24": "2JFB9nqMw5mN1BsTTkn1xu1qRuLRY7rsYe2qoTKCvthwAREtG1ugTroMC9QrF1ht3d5ReekF1PwUqf5X6CUna9Ms",
  "key25": "5cQTELUVmFaL4qJFDcvUXBEShpw7xq2AbAHQ1nVCebH5BtAtzVETiyuef1wdaja93mhcr1uVhqyd6a3ffKLQmWaZ",
  "key26": "JrWkYHmW6ksyovUTnepwfp3qXpRzC5vdmmGeYj7RVJrtX1L11z2PcF286AJkyfHfxFw8bayiKWzJgB1gUYrir1J",
  "key27": "5tQ3YpWZkpdTZFAU1WsjuLY4FYF8qSwe8SnjhRuJXDEHiGk3EbaFnG5Ge51LBsv7nn35V8DWvoBQzYyaesGMu1ET",
  "key28": "5nPydetZQX9rrUbgjm3NpB1PFQDgLfLkrjtLZ6e3PC5kz4RKqLdcHunA8FSsKzcBc4yrgpXsLZjQc6SmDXnMCDmE",
  "key29": "67a2cQhBDBnnQehTJrSXKS1RdPHKUhnHARoBhNhVCsUbJu2zrbdHmkHLw4m7J7fRrw1qmWg14TpRWMhbGH3JBjpW",
  "key30": "9ByhtZi2WhpAZpHRhCV2k19ocT8Pg8PoJUybP6ExGYG92MERGcsX8J8SgJkE81G74dV1MhKxvRSJ5nzjQ3kn26d",
  "key31": "3j6gC7ChGyb2HbMGxAtubBqhh8qYKbG2XW1dBQGSiTw9GVJuHBBJxqVwKj9v5HhsvPcBkq78eszZvgi8XDfehTHM",
  "key32": "51vM4sBSLMwrGnUGxNDf7vUHhpqS1kXQZPR86FT9nTjm39GUsCdam1w85BQ8JDgzfCAKSigUKTTC5NtkAe2gurUX",
  "key33": "2Qqf42xAMuBh7UGMobSTyF97BrzFVvzrjoJrrk9hTiXLy2htk7JLkEZopiaZfB6NHA8gk5w6VNfX6TSSw6ZhzrpU",
  "key34": "5hmutAiB9zrhMjeAfckpaMMVNkqZwVWP1rC9n6Kvmv5wHznqBMHfRnZuWrdyGMcLYwcBiDSnDbboiJU7KCuY9YqA",
  "key35": "5RWjU6RfY7G22fKDFXbhERLFyoBtvf562hhrUXy7LNmtna5JJv8apwRWU6fFR6RXoFozcxzXatLgU41gDMVLUDG8",
  "key36": "2PKCGrnEPxqB9bzzSqKhZeWaAR5xFRtEpncuFK4GN8jbfgvUbG6s5kEmtLNqkF64VkMYjXx6ttYMSz21KGFavKDf",
  "key37": "3vifGLjvefL4U4QfJ9nWswfVk8LmHSLDnQ43azKdbbkvnpCNt5YiArs2odhuBhe9J1WmANUnroELAKcEAfTDQrsz",
  "key38": "4898puxRY9NAix9ETkUX3GkgbqVJBZieoqQFZVEusns7VgSfokZVrySNhrpBpyAnLYZMfDZcVKA9V5vFur6faU1c"
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
