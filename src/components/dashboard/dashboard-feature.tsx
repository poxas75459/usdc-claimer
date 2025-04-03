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
    "2HPdri358CsvczD5C33PaPPr9XAFE3PaQFimaxsdn57MBnULcS6HttT6zpjV3ZYRinZZ4dmDbainqKR8qEyjbZoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j3Z4UY4Gj4PpAUDUsCQ7BHfhkqX9YAvznn4U9d8fBt5nuq7LEncpnyKjjsrP4jjtkdNGJmdNdJDsmR2b2yYD8k6",
  "key1": "3PGCRyws3HUkqqHQcBnkLRWPDRzBuNeoCtcL2PGWg6rDRF2zAV2ZRtiWzYUeGbbPrk9dZRzgP7bLbLyPznLjdgRd",
  "key2": "31iKBMTRPbKji9ZezvinCkrfwpZDMcPRMH3yrjqyWkJHhEAKBhRZoMpw5eu2EvBrLvJqYHDXkGwo6SRVzmntXJDh",
  "key3": "29GB4PMXHkunrH67sqPwZxLjJi9K8ZRbKY4WfaajC9HwSirEaJHDFr1YVzfo7oVW2jnGgYqo5cWdWv5RPFHeRWrM",
  "key4": "3HdYeSYVubsoT5ePMQXUXvqXrPA4atZPWCVJpBaAohvgzggbCjFdXMDRXtL6fBzfsosZbAdx2EGV32e26RSKg5dH",
  "key5": "4qsE5GTr5LdjRreG8JLwcsEfT76nj7xgCASH4MXW6kBCu77qTjajWZzjzNJZaVHiHkFTgkCaPwwsp8KpHdM4Wg7w",
  "key6": "XPxCJ1XX9L92APpTskDKKHKTbkZAyQ74DeXu66C73dcBfpRGd2WpM934gBSooMfPXju9Cxx5aDAn4oviNudeGsJ",
  "key7": "3hRLG8rdZ3tuPuMZwMjhdg548SWMs3NmQ4yVNmXRXCSsoRd9strREx5e4sL4niFy9SWorXWppWGqraHAnb4M3E1t",
  "key8": "4r56im3WqrzkENf7tomkapYogtThfyVvJb1ULiGqdcwUvFAewGkoR5varpoj234SebpCPtj8MvvxoKk4AHn5vdTG",
  "key9": "2HxCwXXyWi1B7UepizS7kyboy56uwvnDLRhLwy9U8Ebdmvc1y9GFUkJ7rY3qFYPfTG7nMgddp2WDKE77Q18pNPvS",
  "key10": "5WDaiiS6d7C4DXjQmTW3oyQRaAUxcoWc8ku9QVzsfc69DCcukuf1Z9L1TMHSLPykTG8ir28u3bhxKgRUzvGuhH88",
  "key11": "29e9gtDEPxQ2LHFBGnE6RqBJQAJSMGVyDAAUsMh93XCnZ288etMaTLzoGioSmPaWHoXkdqFDmEuvq1ejfFns7cQ8",
  "key12": "3h9QAVuFHLnAwBjTMWXJaELXSR5MmSYtwfmwsCMbVrZgCyiNkHF1jkKmCZc3WmLJNsC3cMcRPRXeJwChpGLGXJPG",
  "key13": "3Q6QJkSB3U3QFAWZNFt72B3UjUyULkaxGfZGJDGm6AvNLvs4FxhCzV49gTV851ZnMzpAwd7dGEhgatnX6AxGeHZv",
  "key14": "2t88HzJyx9KJx3nVUCZPdswfG6mJRFfNsEfMC5hUC7nMUEfARC1pku9SHRmNhmk9eekZt1FYGTPZghzUUav1ys7Q",
  "key15": "5QGYdq32ZYbRDYFf9Tr1BS8447yrd5ebp4ZnoYkzM8riQRPwiZ6oac7gysSygpqfy3ag6jWvmFcmMTJeA3wKrfWh",
  "key16": "3om27FVXbhzjzpcUJwGSgaNiwqbsjo2r98ZJZ3ztskd5QJXP8GRSUfuwxSdRnNJLarxApYbe1n9zBfa7R7HpGMzE",
  "key17": "2ZcHPM2cqN8aKkCfgmQhJTUC7X1whFoRDtNcSsndRokW7CGcNVS4zP3hkEfYGW9R5GC6uFntZ2jxDreyshDbEPKB",
  "key18": "2SgRD7qcCMkZfmarGRMZNc7q3uhVm1XAbvkfKx2MPpmAuKSxpo2sWHqpQu6yPoKkHDCQSVhfLL3fGFC2JLp2mZ2Z",
  "key19": "3Csx6QDYE1Lu8t5yqTaskYNEQTSJ3vtYRpPZKBrDG2tLYZp1eMDDe2BrHPaSLJcCUwhb9Ec4PDuNmar2w2vRkN6a",
  "key20": "22QwPBCqUTscwZWY9uTxaypDuTgCbMVoJuhBxdh7BSV3HgPCTchvY55puP4jV2kGeHQKF6MN8tBALhdQwiAFHfx5",
  "key21": "3qDBqDY5cbMbYwgWyRJjdE7xDQCs2icMcQAJJNrM4VfFEL8nBEbuxZfy79ATk8zo7dkBU6SL4AFhcr9Vy8bu92v9",
  "key22": "2gZSt3xpMBc2FgCB7pPVg1GArhUxKeq8EvZSvugjBaSQ89T7ZpC9QVJXiGJJuinmXcQ6hVHG2KMDp4FjrpQFw2iT",
  "key23": "5cXexeEFukzoYDRxqYDTo4kW6BZ62Nx8SEStPQXzPv9Xz7kgYKuQmprVGXzsgsV3zbcYcvXkWPWDf7ZBT6ECqwrJ",
  "key24": "5mp5nV8ps84jfiGuTZAR2pa7yZZJ9j7Ph7nEnHuBdaVKV4TdX6gGQiF6cjxyFQBMWFjkEmQig3FWedAw1zk89F4Q"
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
