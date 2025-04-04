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
    "3xfUuEbMatuESrtDqVkf5EtvAuefyYAvyJnQCnzauAMc8xtwAc5CeaXU7ocE3erBC2Epk9iTG9a74tV2F6h493uX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AtnLrnTDZ5oiKMGBLhmZPqi1Vbnbvx2FNhbp7DkdVh3K7a3dtrywaLmidPoGATvZmWCtLxMvgtDrGjibWt5tvMY",
  "key1": "C6dayVgRZEzPJ8f6n4iF5PEYxVZbSQLhQRekg87TsCHYsBAhn4MYQdFSMzHppbFZt91Srjds9sQ7dJsZtTy5pXd",
  "key2": "3QKFaFjifELArKodWGyPHNaqgC9Jrwah4Jm8GgrUr1f2Ppw5hoNF8W7Sf3n4oCV5JP1uRZTjJ6YtQkKzfMYUNYbg",
  "key3": "5C8ivu5UVTZQPsvYFmJnXjPfkcW53QJtRhpCFgow54jg3awy7AthGj7pMq6in5tqCbus52AWZpo1zqB8yhpQrbaB",
  "key4": "4HQKSTM1J9vc9eLxJAtn26WGDWfGUoJaDa4kVXBu2aAteB4a42hQmPvESkcwNAJsib95YTyRCzhmuYmyyPFaUVBH",
  "key5": "33ybmnexQnNFSYwzLyBZFZEsyJhXhYJbuUhNfd9MbKbYwSzzadZbWsPSbiFpxSD4CQGeA34xTyUYuf1DJ2cwRVv2",
  "key6": "64U7mTNCKyKCi2m9WFafm92KTgVNwdWRgDdXv5RQ9DRVGKdBw1TtZKcgjWU2sESb7t3krjcnc5jGenFeEoN8aQt7",
  "key7": "5fExErg65oa5MFhaw7y3LGMGpHQKaHAeyC3W1HeUigyZFmp96TQJNob4xV28JHgPFSd9WMQpd4VYALXt1afqWjTJ",
  "key8": "Y9d7B9HYAZUqp14qeXzFivbqfmJD6R6H6tfYF7n8Miz4rb6nttzqDsozeLfX7G1Z1MWZyzMTRYr6W1wRWy8HdqP",
  "key9": "4qtihqjFXtAbTeBb3CFuL8gFXFJfkv7G3eXFL3nmpPuBgk11ZKLw3en3jSxCaXpmJ7gFJyft9NRRFQ3X5a2b2Zh9",
  "key10": "2mHcDyWmY2YGvu8dBcPrSNQsnCwKs4LfmT7AfxNQXTGCYNfJ68RhwhTdDkeRNxKJj5pfFpxemHkwYDMj9iuZ5ziS",
  "key11": "DNgniM9UhQjwxSq6eYx5hzPq3akAKr4bh1gLbv9QqNxekBs92g5Ms9m2J2ocGSYYXUjLQgLkGVmEFSJehBcXEft",
  "key12": "2abigDvGb2QeRVoomWC1jiLFk7RndKimECqHzLcZDKZCvVYZdsibDMmmKcfmx2184f1C5m4ws5H2G7JmcCxf3QY",
  "key13": "2pDLkdPNgJTXhMch5HvQksofxmjeRDtPiPSkUHKVGPjFYSK77jHXtc4dmYFMQv42JtAg7RykAdwCfRJbWMmQERJ6",
  "key14": "5EkLTDzChQwJsBEb3HCn2e9JT2CEx7wGwj6PsjzEFRFZHkskRQ4X34fAeGm8JTZ5m3SrAxxLGoNBCCb9A7hEJzXU",
  "key15": "4qQtTah8AheLbQy3nowDc1MEuqHWDhm46JSEFNFB6yYmF4agcurvthYg1eYwK3p3ZCingcXAWxiJA2kzrk2b64gc",
  "key16": "4BWNdXUdKPSzGasxKorDjQgNXe8RoKCboYaNuC5ZJx1xxAEcaB3yP14LPRAPMDGzuFYE2HW8z9SLghgwW8JmrsBH",
  "key17": "4u7QJiHmYjjFGqEQqRQ5FHZLfmvQTKdx3BUjy5wtJDKvhrJnD8XcpR3yZr74dqcRhBgEMX6xyPkSJSisv3v5Ec85",
  "key18": "SbVEcbuZ1LLVNHY8g6rwEpNrXFSX8MtbUa8dFPafBpaNPP4uNHNm7ro8Vy2eMPLyereg6todvaZUUgF154h7w9U",
  "key19": "5eMw7VHpk5CHHiWgBRxR17YZ8gpC91ZkPsNzoJEvqh1BsrdUYw2d1Z9tScxStnF1XTb97XWtJZ4hiVRoK63mTLxc",
  "key20": "hVdZtudTbbLtkfToKUoc9NvA7w7GzZ5uP7uAj9LFXtpeUEQRZRBLK7HiYx7E7ZEomKcSwLqCucnSUPGjoAdA6AQ",
  "key21": "5tbE5iA7jJKKbBycVN8cLSnfKNxjRp9c3q3KJHXyaju1n98h39ZqNZkHBdrsmuRkFhYq7guNEARbyqosndpqscBv",
  "key22": "3b6QN5FuUA7ZbVY6LsJSedNutASY5bZJywRNp5AzmKosLSxNpgNFJaU8auMSJvRX5pcxc4scFRcrzvSDUGR16J4v",
  "key23": "5qJvN4xgj7sj3TXSHdbTSq1JDQtV4DdymLA9vXXrFe8Mms5mgU6m7WHAy46eZH3rCJ36TagdGewS7fKftCPZnsF1",
  "key24": "2bXaQxGH5hpRWYPK3kh7sPdzvmxh15g51oYfQHQGwZMtn4C2cr4cs9NFTpHwbRFpNgKs5u2AykumK4SebrJLDnPt",
  "key25": "2YQuWL94iPtAR1ywfwEAq7zVV98xmDZpEzkWACqgPwXDoHJ4MRsA7KtyJ3uNoMQRmQuFk9DmWcvfsgQ7PrfH7The",
  "key26": "2TcFqWZWwbRn1j2yFzJQvXTNDytwSuGnaWBtc1NPM2y6iVsTvSUTduMqfuxQsNfaboy2onw5DCSvVzAHAPTywZcx",
  "key27": "59T2cDRTDoegCmsf4XZPgdccEgeC5wpZ2U9anNUpjKW98FVnCHiBhKqEwb8ufYrJuBaqa8vXKUtW5rWk1t8MLTM1",
  "key28": "R615xDngkZDMjmPBWDGSMBVXu1SddVyCTnppQiEY4EdJZeK4VtYAEvPofJ6FBmL2gtpQ2ofkx9wGwgEvsjfCfHK",
  "key29": "SXZKZV6JdvBA77YqMdhKqF8tijsWYDN8yHXVaTnUFCgz8cC6LKMzqCENMmULHddTak1n8c6ZBFGhqqQ7io9etjg",
  "key30": "2DN4y2tPGCsiyJeiGRhjmW3twUxEruVLTymFUTMQWLRsGjokMynd1FCMegFEVegFGD9jKLgt18zkX4bZEUszXfQB",
  "key31": "2J9NGpiU2BEjA6fovpMDg1VysU82eEzoFsCvcP4mzgoujoTcseG2eNwvTurh1MahmPWK793FqSAYDoBs6fUCqYQK",
  "key32": "33VUT6RqgdH6sWiK5BCiM4bhcGZ3yiQ2KHSNRScjyqTgeE47jRZTvgJUE58oJcjFc2vwZmLMy2xErm7taeXgQhrg"
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
