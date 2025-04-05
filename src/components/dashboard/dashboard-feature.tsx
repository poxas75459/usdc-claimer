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
    "vze38VvCWqn83Fp5zghcmiVwtKdtw2kQ486G84g1GZpHDdt3kBpw5bZwXN9n2ZUakGxh5auBxJv7vvugfD9Ar1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52UxMu2iDsjB7XjpkTJah2gay7DrKKFTcFjJFVwBnbhrGmaQ8BiNJ42J3Je9HcLKL2MMz4yTYGX9XRCuo37w6TE",
  "key1": "3QEehezbopfuBxd7DiuZZGPYdBPZtmUfzYzmJzTkUvmkfp5DTRw5kLKMFTqu1YrgwsQcfd7xKCSMx5YajMpmZw7V",
  "key2": "5sy6N1uEA8i9s1z8KAdMhLJbWMAx4zqmd6pvTYx5AogzsMSHMVp43ZzjmJhc5cVBdFgHnTUgN6q7A6wjg8uHGm4U",
  "key3": "roQYtNAhrn33otUrf67sTq6oDCWhuqCwyycTBCSUSpYC998GV96z4nNxbTfwBacYNuFXJ72zNZyscHRHKKBKC1D",
  "key4": "55HRrjFPMmvLRkh2d16udW6fSDgz5dYkTBF8e2zgU6nHYC7k6h2ipm8DBQrtQGBwSyjjpaDaFY8z4gr4ZakAf4MZ",
  "key5": "3gwyAkWBb61JenTczHNo1RJmLW7nnjwmXTXhatfkgv3Q5ARC3bYMB3qwv1Sp3sn2u8tWkqJdfxp1d9f1wk7bQ5tk",
  "key6": "3gGW4fpBAouTpPjW18Go9X4GoZ25cwkFQkTv12kWtT7JWucKUgVCfEhTeJu3KURJEVuZW5CvTBUVFmXR4oxmiL3J",
  "key7": "2Shyh25fQ4uvYEcwB9coRKxePRS84oSfRqtJJDXdMNYtL13u2NjPwpDMBGLuoCtq7R2MsnBWHmkg6xN6S7UmTZ9D",
  "key8": "bWkPZhQicHZQ9j116Gcui9cLxRBxHVNKaTqSLjxoeTDtrSJXDjx3xTaMwLbc1tyE2NCCrZYxEPMqrMLkbcYwBLA",
  "key9": "36Gqi3bxrrs2eFefveDpDNNS3qtoMCXVGGspBYVQXiTGdV2xdWxWvKiRtZv5f9CyQwUPb3qWkhh9237DSYAqA7Y5",
  "key10": "5RvHqqSZKfnJBkvNhyn4VvqpMznQYjHw6Ve6soP6GPJzEioe51hmudeGT5EBoWfwUrgzKFq6rbEf2WpypPes7rkp",
  "key11": "4KuTMDaSKusxrUrdSqiB9XJCCHV73xyfUHEooaT5usdT9CqP1mMbUrDe1SoJyDEJRbebnjgAbhm52vRPS4ZZKr9d",
  "key12": "5oGXfEjDKduNkN1vbAyEMdhpoTbcrD18P5nmGrdEE9Fdw1K4EiS1EyJQLJ2rMYnoQ3tBevLGjusQUj3DX6PRLGpb",
  "key13": "27XqRic1XwaMqep7mm5P5MnM8eQH2viRhX2rWYoEEpB8X4mvSRUQYDuMN36FtLY9nBpwKME5R5EDF8cJgc3Hm64y",
  "key14": "4PLnUmEwyThomxUztVwftzQiortWFKKDbaXaKxmh6EYAV1C5q2spZR6ZnaZSgNpyLidmdENFXPhZMJeD451GxNMS",
  "key15": "3nxsZrnJy5ieiL92qFwztJejB5eg58qy7w4UhJmtE3WEEWxxH29VcUdixM4XnT2cM3NLwTA8BbNt6CCSgjcjeYVa",
  "key16": "27cbNTfGE5S7N3i9S7nkeNot5ZqTVXE3LHXWk9RJbzAx4rYzSsnGf7VPtKfPjtQYwmZs2xce8DL44PCE1BAKvCf4",
  "key17": "3txTsey7x7D5cntyTDEgckRSjmMyoniNHMdQJ4zTTHsUVy5Sm38YnwUpJNFtCA1pDEAxB2mvn3ZtaNDLiWgwjK9C",
  "key18": "2J3CSRW3dqT3ak66kcA1WPcG55e4J71hWYS6UqMJsfWXXV7r8PSjWcLY7qiG7D6gkNv1n6v717ALxiqfbbiMmiPM",
  "key19": "2CknhN57LVf7E6foXLScJXfVp9ue2yL27DmX7Jiyr9RUxGiUfSh4E2dNdVwxANigh3V6Sk6pAJiUzibUm73CNWMp",
  "key20": "26kMNGP2qi7xq8BBCmP1pcaTupqhTV1zaud6UeXmrkWbnzzszDnQhFFas7E7FqgRDAtG5mFDktdLSXJoqiyeFYZM",
  "key21": "3hK5CfHfsU2JNh22MmvPY7er2kPfT6LoFNeTXDZgVo3cjPD4M6RXVmMWZ1W9TwnMwyhswbpRruLWx1hJC1R6Ze7E",
  "key22": "3L1Bknxw9Pv4rFaj39R3NuDMURwvdFLW694B7ZhyokPGYsy55phNRdfjmUaqvvoNQzMVvFcjiT4xY5jfGdfdpNPB",
  "key23": "232epmyVCnTHgBekEyPHKB8FNK9YDmjCEahHeDQxWJ3wT9HdUw2SAfib21Fog7bktKio63A2jK5eehpwhTiZnwC5",
  "key24": "5fFbFbhvUL5MQ5MhWR1VbKcNsVuSVVb2Dd3fi9JraYstyke1eM8dTRnNkqE4CR7Ms66r9oEAPMyDLjchJAHe3CQY",
  "key25": "5p5NYtHqeDD1kLnhtTTRiBdF8QNodhkUjWtxFigADPZyeKAJip76GuNJMRbZxtCQTMnk6sA2ShNFwxtnZAvxXEW9",
  "key26": "298JfRt9QLw3a8oMzkHoZELaGDLHeQ6bwwLoVGg8JnNoW34LfwNHfGqkfFhefYT9d199faoxLfFSKHrr9ijsgHQH",
  "key27": "34Yg2QKJrJricfzKwtFhsmkYiwKuQZJYC4xRJPBXtH2C6owx4b1ohBostKEQhRA9K1ZkhKxD94xKewevaZQZAivu",
  "key28": "E7M2zvETM1iHghdRZ1CsGQ3AqRHEPNNQH7unApr3hhENe91kxtoBoNDvwcLdoJVdZrnWdf7cbRCu974xZqsubTP",
  "key29": "2u2MmhfbhYE5euMftKz2hUN4vhxq5NLiCzarRhSo3Kp1XfEdRLzBsenwjUBwSjEXqxn6RZtRWPjQP3swSFfDJAib"
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
