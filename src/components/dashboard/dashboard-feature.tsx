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
    "QBSYVFesTBKzpFjUbGgmfwbqN1yTKg77ikCBdRNWdn5Fahgt3yWNMhLbCnbqt9Xe4iwwsqhLnMk2ZZr7hP5t4kM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mXnZmTc3oXHkMkVbsmGBgitJWYWUmhPXn1GvEPog5bczCWssn6f99DDUSCeYqZGi7CUivE4ZMHctL9mtiEi8DwM",
  "key1": "3MM1P3tE1mbDoYvQLPXi7vXB6hnzbUjt27TvEXbdeGmJe5a3ZRYaLagPsC6RswhPsEFYzU78vxKEvQW2Bp8dS8q2",
  "key2": "5qG7uFEPKPXTjiGYP3aaFBj6octxaLwdXZtMe44vEmm7jYvwbdLWfJTQPYdEJSdjNEajUo87kyYbfueth9kqjmi9",
  "key3": "3spYfKv8PqBqUGWxzbKddfAMkKCZenhfs6wuChR5WcqPoFSpqNrLfei8eiVotZSKcszMwzmCPa8QBAbMHYq83AWa",
  "key4": "5Rtu3cNBn7heshueWXzoyJNk4rKjHch3jki9BujxRYnhuHvKLYWYdiSACVCVjFP33cSa9fA7SMxvxNmfpTFTAPtC",
  "key5": "4zo3yP9Ne6rxU6RegSmyt7psiu9D73bSogXqqgBQ8QoyUZg1KQCjJT8zpuT7UHYeRdHgxT4F434kGUpcnygjTENL",
  "key6": "xRkiKN3s2kpjuFVJY7Bzk2Apoef4x9KYSo3TzPcVK293owGp1YhSqgdXVfoDTkz63Sce5GcyroTg17E4D2BCn9z",
  "key7": "2kFTXayQL8Bena77P8RV6SbB9TidKdxLUSXYgPSjFFCTaQknhKMpV158xcu1VymoqNvBphsBzyHh9tDZeDjGtdSg",
  "key8": "2tdUJ687MBgFWStiiAQT9uJFibuenRprUVbW5tpN6MsP6sftaz9nQviH2tZW1SaTDudkWTdYmnfJPSbDT9CRLkq3",
  "key9": "42LxPck8QbA3nwRvSZ1uHT7srrKtx683vCP5T3JBc9MZrHr4SmHzjkaM5o4JunPbQVcHi5nKkhkRG5dMwjkAA8PQ",
  "key10": "4CppGuabQoEiEQNqkEajRs9Wi2wRcJr6M8ZFKipAA1ddPTyudByRGu1WNMatSE2vqXckXEwG5biPrZdH6haZ9Qsi",
  "key11": "3vXxvJsgvQo7pcbistp6JKEejYucmskyf1Rrwm412s93XcvZzFp4mqVD5iGrrNDxQhnvaqSgi2HGKcdzqU5ATHma",
  "key12": "5KuZPv4weBadKBoRuVPeHzHYvcTkqKwDsdkJ7qqG981QwMUvqg16DM2SDp4VEZt1pYF2RjH7NohsV847iSRyKCMJ",
  "key13": "361mCAPnEDxt48gxXPGbLsS9RnU1T3o3XKSkC4ue2AYBeUL8123r1XUZ4zUnfhecQXedjxgSGoQnuGBKKrPgSQw1",
  "key14": "3PbvQ153YXFCiUDDMGrHTm9SAcL6k1JfCa1Jpkk8QNoL1U8z4w2STxkQGRdTq9QWTHUgiMva8GWHjT1uozXMgTpB",
  "key15": "3T5WSLkTFWHiGbSauR8NsW2i2FERBGGXxJ1ksKTGEScT2pRfApBuGChG5RiPNFQ8LM6SMoSpHL25NANoD92YEREA",
  "key16": "3R37dVG8md53xfkDfkCtQfPsL6CmHYVDjpWvuXhfgwytV4MKDjMGMnBSWHXhjUhiSDRb6ixNV5UWU5yn7JZS8bq4",
  "key17": "4S6rx7xa7GdXvmQsU3BFJ7AHVKHY9y6ViDkWXgSUs89qBxharuP9nrkz9PevCD5pBF3QbuodQioUvHxyFpFq58aN",
  "key18": "32MURM3FwLGAt62oVVz5BFa3Sp4J3kC7Wozwvx26dpviVfEUxMk6YWNvQEYw9rBrn4n52TkP95J9RMJhiNkNMU7Z",
  "key19": "REZKyY63dCa51FkRE74CbMKi8sUG1hpGyJD5KEtAaCBgx6LxyBe3NKHMqZ9KakdWr254d4DQmX5Wy3muXGcdDaS",
  "key20": "b6xryekQ6JTCmGVJuemQLJaqGvdRru7ppXh85TELxavFVe5TRwJiUvBtSRnxTXeCsa72Fd3CSUgipMrjR5bJuxu",
  "key21": "52nYGgSHxW8UpfAi6ty4t64NdgmnTB2frWoSs3HogDzwu7MHcPfKL9YNeWhwGxApVdqYP7gv5noyJ7PvMjKmKpwe",
  "key22": "91cM1YnQ5Byaya9uZpjAwJFNUdUh1e3C559Gy2uLZvAsScZZGq2dKJ6xfAPKz99pBpKrv1SLs9oqNWQ2AUQaPzf",
  "key23": "3P8soLefRLVW1f6URCK7vPnHQWxvChqrfhtaoiyYd8Zjy8B2fsJYbtmhqr5T5DsUi4TytwYH9RDXh7wF9TvTDFvz",
  "key24": "rSHSCvs7gUVAbv4rfC7DRRCRMJW6tuooqNFoWVf3L9psxR9qShD2caDaUpxSLKu8n7wFj4FZ4RgYCuGpRATiB9f",
  "key25": "57F9QvgrgzBtFcDXnz4TU52nnRuGQG4Xp1LJj8NLyx2m9aVa8WuX4KEfLJSm16XdND3ugJAmHARkki43Z9URDwp8",
  "key26": "564JPFtXXxixL3qE45dG3qnwxNb2tzUbpCn1SBpZhWHeSL3k9B9TUN2QV5ViwA2vLQwVyjDU9SxbGAvzqdGZ1bV5",
  "key27": "2uhvpyBwHE9fcWpDtqG35Q6GE616eJBMehsWBw64vRH4dhJRgyY5x6bE6SVaU3qPBmudFhL6CUyLd9LagWNd4oQi",
  "key28": "3yhi9Yij1vJZVaFaCcVbA3EtegnU4uA7NUPTDxqXrU5v3NSNrVcgjixWRvGa5QDNhuoTNwoXvuqDh11LC3znP1jb"
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
