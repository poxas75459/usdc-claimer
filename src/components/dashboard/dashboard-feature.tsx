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
    "5iqqUbNNqkEBFPDqG6SUuKjWR1RmWetCZDuy4QUXfqgc5MbxuXXe6D7Lhkr71p4ohWyy4XJaaz2ySrqiqvvE1QXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b8ci7vzXyiN4pruJwK4GNfs4YNock4nwkrcU9Nsee4TG5rm5r4TN54ma1ftUxATP948gLYN67nfRpKgkBnFcWyL",
  "key1": "4zEfNJYP3AsLib9VL1aCLWJ8MpXkAKZueSoqtvsngVqGf4hfxzfP8B1YL8KrASW4HaH2U39kUgiAXxBkvYCg5M64",
  "key2": "625EvhxVcAPum6YHPFgus4XnVYTLcazUKeme5WGqW38KyFuvbNiddubJSkfwzq1o5D76VZUWx9ZNCNNaQfJFXp2A",
  "key3": "5MKggdFBf7ziChquCXrJmE1NpAHDFrcnRDzq1Kgi4h3uTSKrTYgemRunDY7T5hDjezLFzGUo5Y51v7pr7YaYM5fH",
  "key4": "2EnQdSq3N6cu9LNz2PKWmBzKzCUPJb64DAe9itHSvr5q27oENFrRhchR71W6gmrSeRjZQPfCvHaPU7pGCbpY6HD2",
  "key5": "5HSSEhFYLJ63kTD7dtDs1LWvZHq1XQSq8ku1eXTZZs1ueKvEBnQwujCdShPZswyrtT4yJNRtYUxxxjX1Po23konP",
  "key6": "3UrK4UWXU4o6CyTzwnCgRXbaxQSi89ueDQCNqwT7aepCPtRoVAjvCEBMACPcGn2xYnzu5R96vxRJq4rVbN7DFjR",
  "key7": "4Dms4nwic3DaypvjM8STewBaLxxeb8WXFmNVEeDsgPhZzJZgdKxBsvrfayaavjuMyfJuN7PdHDosQghyH4HnBsPS",
  "key8": "3j42qeg1Chnc8ShmWJvuPoDt5mD4qXKwJx5Qdxi3bB6LRXotXuFzMkSPz3FqPfnJWi9iLhuL7TyYuf2NHdsnN9yZ",
  "key9": "3r1VnjzAibKci2yCcQS766ww6CCgmo61ThAjhAiKykpyJxSuwZKipJLAcsMHveZvsvqz6LTVunRZxvNGrvWKzGFL",
  "key10": "5UChHyW9YjA6dvsiEByKXEBWdi36q5Fgh4ARo5Tpxip6M3aoF7HeUzKdqaFavkdEAMAjdA9eRxqkTk4tEEdSrfHp",
  "key11": "6GbWCRJ9i3DyUZVJxTZYtLEU6waQZrCC4ptsSafF8fj5BkwnyPHUtodKvQgpbDjH86GXJSsi6EX32N2EdjLr4ix",
  "key12": "3fwSfPd8QsBZENpNreSmVK7Bpy3TstGJrqwtRfGLZLUqgoivmWZzUsXkRXFQ9SpqKkxLc13NN5rvpV9aPkEga1xk",
  "key13": "3uDuPy5hvUkCdJhHpHL1pjEYMSnHx1Bs5g3QEGocumG3YQWUEAaMz32x32wcU6LdkqG2Rzf9hzRopXrphBLhzrto",
  "key14": "wJmzWqwZ2CEAqqCMJcwB9o74d7JKJrgxrH1qB9oSmkbv3DUA8FZy4iqeBuA6Ydr7YmVLUPQejrczDP1NpjMmoY1",
  "key15": "61x6UuYNB93ybn4APQEiZo5sPpysb17UpAGUo59ZEbt6J7y8PjHn6ffUTUtiybcSwRPFeeTPi8CmnSPpZLTaMsjP",
  "key16": "3uas5NRXCgS8PSHa5j6FXnfUERJfpDyNxstMD6qcNgXha2JeQf6JFjqbs64iezHedTAb5VUGvcwcK7S9Rfg95c43",
  "key17": "4dxXSZt4WiwxiHzz1tx3ra4asagmFjxos3vkc81eKteygcNyUMqZBM6Rri2q32vDLkkBe9NCG4MotmzsizX3YC8v",
  "key18": "SXzqWKKwyfxMpsfmJthgK8rWQ4SvZ7hzycBhcQvKMdPVLZmQ7XWYuicKhC18imcQ4RzdQyghgrDHBRBzbCDpsCi",
  "key19": "3Kdm8znxds2SqF13fQgtBAbSnNgJ7s6NL4HWeypeK8xiAEEgaTERYFsNxZnA6Jkw1iLvzbCncxtwHWgDVsnUunAw",
  "key20": "5fMmb1RWyT1ea4x5ggT6nQSKk26Qfw7g8TfhqvJkxir8tXMhuDfNpHBWrhDN4QvJLiEtCSvkxYL3k7AGYzGSLEXM",
  "key21": "3EmwL3tkcG3q7tvLDuDibYeYvrTgRBTGGHK9q56cVGZuyP1okba8j7N6AsNkY4qzataj8UoUEeo3h8tUTXNakjC6",
  "key22": "43R1sB25TeQbpPJyDKBCVz7mtjzbo6cpdeq831EyDAAYJercPvzeLtBWV2ioCDpDYbYbHquMff77HmCPwdBjTM44",
  "key23": "o4AEMnaC2S7oyGchy26TAWCENABELPNx1SLvdEHhGn3zerkqFLDbZcGPQxpKkR7ckqLamSRk6BZ2UaRC9EUgCGy",
  "key24": "526wtBwg6cmY2CXTQFWn6NX5HJ5W8VaapQM3c1ASyXVn9bNBa9k5ba111E7otwSSDHbLtuK6KtCeHCtXxUkfFGet",
  "key25": "u5Xu1UoBVo8XXT5g1ahgPndRVN8TEx5ePGDLNzCAjv4GvGmjYKfzRgvbQyqVy45CguVdcM7w7XBWiGUYC3VArR3",
  "key26": "4uYsxFpmsJdZ1V9Ry6YBbf4VrmMptse7vwPtYfP7kbczemz7ybQaoVmeJjQHQfiPMwCU1nYE55mf86MY1CwVkJJj",
  "key27": "26BD8piMpSMRcESh2qDmdrAm24byvPg3dZ2qW2F3kwT16XGm3egH2gbnR2nGQwtxoh35bcoTcSz6JWYmnJNWC7tu"
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
