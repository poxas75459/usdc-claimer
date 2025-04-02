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
    "2x1FrtFuNQDBkC56Xy4C895M9y6GUbpn3R46ezvJoy8R274Ub43xccjr2qp4ERWiud76T91E8VB7E4bbwUcdEdZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GMsyMzYkbik6vHzJoJ5wnHmUonjPNmwXyK47Ws7MhbLXNKk2wMJeMvfD7TfGpMKdZRWaCXJqQk2QE8Yr172PuDh",
  "key1": "2YDCVg8yGDuab3VZqLkfhnuum2i8eNaimsxoC7v9AbWFNVXc6Z7Mxs8qrCmgiqovJhwLwKSkw7RJzBpaWUyk3pUh",
  "key2": "4fnPwZbysRNTVrmocyVVRspYhLqThWpn1wpUHDMMkiBpKEsffEsFBYt12NP2GgL3xoKwJSqFMs7EaZWtixfJttT6",
  "key3": "5um9Q2tWyxDBy3SWmbPWjxdQgSR4Y1QzMKHLpY4jNnqWpKEhCW2mw2ANFL8DAbC5QERgRZRtp2QaNcvz7X3EFQyf",
  "key4": "3jseBY5xM5ssH4uNcFemR812XkVrpQXFrSGsxzYXmxN92kbvqRMcyHcMaZ9ckHoyVNP7Pd4HCoLtE7X4LTdd8hr1",
  "key5": "5hfhSUAgtAd4A2sWXh4MgvmyGToC2GAdFYMdeWB3DgJsmBtXD6h9whwhr6vaQ6X8qHQJov1f5yMhzRxBeztPAH5P",
  "key6": "5bQ7SFX5qDxr49e6szfXXsACek33yJqhGfH2o8dReSxUEg9MKs1t7zys2ymxPuXxA9rjAWPdzuEmxuKm25jTzySo",
  "key7": "K9RnQXhuUtCY3ZqCD4Ye1ghC5fUY3KaMVfLvEfxgL5CPRHzRh3deep6jkDzbacHyCgb993dEoZdHxsqpZXEKY4y",
  "key8": "2imSFkGXW8UtPGNPKqbWxdHePGf37z6gQpqNvuCPspUj3bJBwd45Ss8mhNpy5hbrwKQAD7MJ2WK48pXcgbCnSAKM",
  "key9": "5gFZTMdwBCpYGoqAS3iccWvMpUVoZiqHoXcWGnH8667PLmWeTrTHDHnQXr6uKb5CWoStz4Syod3NfUDtcHZ9bbdP",
  "key10": "2evtBEuTS7SqnzD8JAVS69TcunENSonLAk8XpSeuMN3VZa179vVkkDexk6fxPjX1pSuFsN9gWWxvkTp5zWAVGBGC",
  "key11": "NKBL5LnqJ8eoyZY5re8RodwuA9rg9qoQLPy8QZtxih7MYpv1iFJVyqxtoS2sHmcbbHaY8h7NhRXm9XnRyJWqeBD",
  "key12": "3575nSMKDni5SUPUUncDcwS4d5sKBDLkz8SUpDjMm7o1rRTrxDv5ZjBfDwyqQqdDrgA1DJWJmntk9mZyAvzkSLnp",
  "key13": "3vykJTxzkpbdNnpH8axm4cXLP92JZiXKHtkwCgxkh5LxAGRZCmL8RUQfE7fQcz1dVfhyxt89yaob2bEuyg27ik4R",
  "key14": "4enKT7atGPVhzV6ZtZs8PLbkpc8ZnfSD5auhyBDWHt34Pmb2QYMZEytAMuGraPu395S92JnNBKZ3mJDP51WzcRhW",
  "key15": "32nc6bayY1cjPBVxVfiSigj3kbBvEdgXbMqaqDVUTejVVqRo3tXFZpME8BNk2KeVErw4A8qv3978eECFCrsYkkbQ",
  "key16": "3g7brsVbKvwE3YJ5fQ9h9Q9ZYj9T5qqFVBgfBCMev3VkffmS2U5wTKmUwB7gY9uX1aFMsJpSTroveZmmh9hZdjpA",
  "key17": "5Ka9XXvKaAyfxhYZECTV72QRihJoF5d5mjfVA6VcPvFFscHumodGQ7HF7xkNDSYwhzD8Dyoo4YGjEwU6qgYe2TV1",
  "key18": "KwUT5Bi4kHiq4ZA4YZaeVwekgTDjBm1pGyyZmLL26upwtsCeqdguv5TPNPcw4GN57PnmNmXz63UBr2g9YEra9wk",
  "key19": "2ofbsVRWGmpqRUoC3HdKeBgEYTVvmKZoCKiTuVPGEQ7aDeiGN8xh4sa5wzXAzYD7LX7fsCvu2aew1rxdboeZRYPe",
  "key20": "2KbLEtJN2bMRV4ivoNyDp7KtGXEcjmhQAm2rryinYeWcZx8wc9RhjsRAVPU5v6cBM4o4yhjghVtjYADYAWGnvCN6",
  "key21": "2L4fgFXTMBcFawcS4iqJZ9YCY422YcqtkzjrwumHvBvyqfV5AwFqU9JydC3Nrwq6PFyhgFBU6Qg2GXfPRd2vhBhZ",
  "key22": "3esaVBNLECdM5MYPHmPW9846VJEbyTnZozsGensTibDitiVsVgHKJGUcv8NQTrQGMYzJnqeFbQ6rL7cqMny8GKw6",
  "key23": "2ztTfCdoo4j5FYq7BZoJKwCoaPhFcYKKdScrH56DZmskfW6WBmHUVWzz1h7jZ73KDEFwvv5wXqCvJgkMGt9iqskH",
  "key24": "5EEe1LhwmHR6SK7WCnRCjRzBCnYSai3jE34UXG8yqVvis1VF68CPGZ84BFfLr9bC7FRoL7BSnyve8e7U4bBrBJoT",
  "key25": "48gyxLiZvX8T3PLhags9j4Cj5zG7ZU467v3SyLEfP8oupzWxT5taTX6zJVkXCfVoVcgxGaDcuKL4kAmwjMWqaNbB",
  "key26": "AdkNGXzTXbZWhosZrYH5w74EhxVGLCbVjkyEaHTpMQPE89nspjUJRvNkLzfxing74KqJG9Vjj9wWNBSCnXjBuQy",
  "key27": "4zh8J8sKAbFcsmQ6Ldiovvs55CAxdAqHHdg8QreGmVTsMhAA8nttaQjSD1z9oi2L7ndgGyNAcEWKPiiDZ5zPZgHb",
  "key28": "63PBMTdsoTK1D3t3JdY8rRf7dUiz1szi2hdWRFhHM17NpXELNZEo3NJc3muU9BxnniWqgpTZyDASz5Y9BwrubEuE",
  "key29": "4QVHcQFEz8H1WSjHu4qEBgKafZ3t3ovgippiEh2Gpw5iZTBEParffHeL6rzW2MBaHCyYBeGL6ihF1cSzYtKPu75d",
  "key30": "2huZcQpwvx7ejqX3tXYvc5VkcWY4CiKeRZS94FFns6pDTErqaaKWu4rCwTmLCLce9RjEiYA1trQjuEYKCKFhEthp"
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
