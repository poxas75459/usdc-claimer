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
    "2eZviURN5AuLuWPFMbQV2R6UMTntmhs42uazYqZLYrNkqmSAq4y9hdfF3yZniwfudeohj2FpRjBfgdjy3Rw7o2c1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lp4SiazjR74YdRinzU4fyqheLJvTaKbcqXKJ5qUjFn48T5vdMb1D8Q4KYst6zJQpSz2VoLav7tnQsTxms2F5cax",
  "key1": "29AaiRAYryRpGFyM8NcTnub6V6uu38WTSbaYcaY9wZtTajCXdqAw5wBBwrTTZ9a9eZbi7yAf9bDbZ11QyGjypbfT",
  "key2": "2ZQXQShD43EXmwewuDzCQQoXi24AyLwoihn5p6VB7iwZam5dVfLn3cZd3S2oRjA2d5W1iZpXmRR7KLpmGAUmWEzZ",
  "key3": "2G1cBmzhWRyKLTDvzzgdifQZdh1V9y2oFSsKpacGiouEicmJqpCNVG9PUFqFL5yGjz3Knq6WLCgSGSdN4o5ruPBB",
  "key4": "5mvEUETEDPH4Yyah1HtNPxSTLMYdkixQ8KyGRnk5CLXACSSvr1Cm1Qp3QdYufmrP6RoGKy86D8HcMw5VPzTGrpxu",
  "key5": "2so6MPwtTfihZAcjtYiGCbJ5yCFzmDcvZDwq3XaE6HgsPpbxNuvaVKqGNCeLXhsdcSnyo49fmqvPjLmFTt1C7vuy",
  "key6": "4h6f46YaQw8Quvt3Ea1y9hR34qGghJyMBYgh5uq37tpEVJakTHawYDYc1y8NoTApPZbeRfuuLCgVSBmTzhGdqf4e",
  "key7": "5LKaVJPcYoWfCEnG7EoCiHECRTeLj4wmXGgWpgXJgqZXt944icnqGPQkuEkM1NqPiiGnefhbwyezXb7W4VLAPFvy",
  "key8": "3BzmPTwrpuDn11k6FwYk87h1uNKkCAqafD5sEj2zcB9rpAL7C6KSs7bAYmmGRSYtXL8i6w26xhAGvMWiKifieMku",
  "key9": "4BAkn2iChP7C8BrhBaqMWp2JWcq9ZzKEyzAH3cPa9pk55woS1eGaXpVVF6GhoSxjMADapxd17HiVBSE1znDzvGkR",
  "key10": "5c3q5CMfAnrxTEKw5kMHFznB3j9zVr5TU7KHbSW8Tsqgq9v5ZE4VXxtPgo8BQwiRxSnc6UsXgoWmTtvv54zbGxhP",
  "key11": "33cTNieoZjoR79D6UpYefAUuJSvWgCy8ThRH2ti5LbVeFN4KVh8AjKvkRFMS3uZZ9ZtrKNBjTpzJd1bv3AyZxQNx",
  "key12": "3kD1X84oKMmv7q1LxCU9DU8UudDh37RggpiwGCVqAzRRVksn3XpNQr7UDdMVgQG5eYj6FJ6fs1YPvKgchtDbWjyt",
  "key13": "3rjLa7ghrWFYh1eNNTq1GgahcHokCr5MxFwfNbxgGAw4PrDQhzVJt7CYfqpDEF93R7thpEpdY7J9at43pUSarLTm",
  "key14": "4bKThYxyu2ibBet4SaCVafhWUye44Un2PtkDtc5SKHYqiUcaLrWkv5SSPfuxuqzotBCdYRbd3Rct3q4qaxnYkxBr",
  "key15": "4nqMGnBJd3CBCNj1vZdDbYqGbiRfKzvgcJ9Qw8xzVi7KTxvHigD2bh1zkcQGrwHdGjN8rXBPPaTqSp6PEmpiXYsM",
  "key16": "3mWVSb9yimXeWPvkqXBKwp9XTyigy6LYjPPB6nPf5JptZNUMuLtNH9rfusGc2XL9W7mnxX23iyzqnLdrpzYcKQP4",
  "key17": "5E7n6duw4ugLbhm5rxbCb9gxQvBAU7xbXGtRew5QcavT1XHQL85gJ6JbsTio1fupDUr336BySJXdohtfR8Hd9oW3",
  "key18": "3Eddw1HrJJokHXfX4tXLuEXLaip67E4AjnNSAGD3d3VsR4q3aiTAYPr5KCNyc3E7gAZMJHXmRcgrmfWFFWxV4sFP",
  "key19": "4kY6n3VfWoqfoSCApR5HNxUcbh2AVqgVJ1Db5eTsfDmGdedMxbAGQd5ba56JMHCsxE6bqiwsTUFGn1ARLeJ5uWPo",
  "key20": "4oQ8pjgTYDhtEjtzopuuUuLDGyyi6dNkCeuekXKbMTvR7FGj8F18ft8C57DpSJumVohShHuaoF3Z6DcVeiAMi7tj",
  "key21": "64bzCpDSRPw6p6Cvu9WNwv57PXkb3HEThHAMeMTVu9fDWRTZjdv8CRicfyUyJ7cmVvFf5HyFHtsSMC5DPu9UKsk",
  "key22": "yKPkMA9rJpZC25tdP2MUZWj6FrsdGntZ2w7jLA8Vt1iKwnX44gpaqqVHEtK2b6Ld2oFtWP2JTH7Zr3bWUfQtsPs",
  "key23": "4CqEPVxvoosMncVHNCKU1ybN441wDLBMoutr46CaPYDyK8Z4sMF66pkg7GY3eEkKpJt7Pv1p5aHf3WZvZR3Pmta1",
  "key24": "4YkifQ7ksD5VnoiC7Rzi1rBv2xyHN5uTsSurAKNTBFgFACeeqJnfiEeXit6SKyyyDGPiyNAzqVp3c3vEnv4os9gY",
  "key25": "2UtzwKTyfNmMUvkydyfXocigs59umV4aLevag4TSj8H9LyHjoJM8TrsjYwSpm3DdGicMyHXmX9jyQqteisgyAa4Z",
  "key26": "3vh5HZxNV7LderqDi3af47s2yzyLAQZrRqtAw1xy4xGPzsQnTx4JkkqfdVxq7M4aAdrEcVF4jLKivwMg27nuVrah",
  "key27": "2F3YKwMiWCnQ4CPKfDwSXgoGf9SNzgoTMGD2TyjNZcYqxxiFcEawJH4nhEThfu8dCy7miURFmyAk4TJee8asVPRe",
  "key28": "5kWy9GnK61kCezUfJe2m2jwXpMpQhAUyYXQUQeGJF1bWFmfyNKPw4VYcuwcE5Cy41SCkDHfN1d6nfL6RJnwQL3Bt",
  "key29": "5ShEYnGXKzuTCdvF8Axo11pbyu3atpMzBVTKKPFRaKGZQbdJ71912XyQ5KQnZvN4t87EG32RNZu88wLMabdEBQup",
  "key30": "4HsjXFynnLeaQM7C898us4WyPFx5oK9QnfgUTvyvDzcAdd5BMpN5zRXKK5MzkqmLVXnHkGevjFsCtH7FHy7zPhsa",
  "key31": "VoEjAuHAZZpjUj6rr7JCpGpZTU1w8Rz1M4LQZVRToNqhxfVnjuCvHpHhT2C8yrCwNmQazTejvRjA48wyZqtJvNS",
  "key32": "2ofJmZS6ANetx3Z9FpbocTCtWtskrJFEvQWY3cZiKp4vtfc7cDJ49Qk63pdLLuKuYWNB9TcABGRvQTsw7sw1BSsc",
  "key33": "2EqJRLdwAJwvCQibv7auKV1bkRBUwKWeU7iW9njwavvTm77yC5a9hEDx7DEgp4x5693e2LwsRaE5Js8rh6VRTQh8",
  "key34": "4MN52v47EtQyXinW1kd1dDFxpmE9fh5kRiPp8mSsJ31JoSBJ95D5yKQqDg8kYk1yfzVvZ2siQTEvNXUNu5vD4wk",
  "key35": "4bD4sSujDGgDB5NwtswDW1QQkB5aHxtnn7y1LfFST5PmZEYt4zu9wke94xq76o4ijh3dUMd3a8mFQXN6UuugDvzi"
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
