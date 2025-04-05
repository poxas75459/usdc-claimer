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
    "5xLAaWMb9RMFnVZyALFg4oSk4r1KkRj5cXppFRsrMN8WPJ4We6mAGrHM3atCCgwbLZnschkpzPsTc1SR1xybXVjk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2anX7b7gKff5gMhQMjfWoYouGPf7fcYD2W3rHf7XTiRKzHcWrEjVuVGZLhyZNTJBem3oyGPziHRzS3yE2KcUvaL7",
  "key1": "2juL3YFzih2RB3Na3VpbMmLwLcGPB3BeTkhtd6XocQtGxwDx7qbyoZp71WPKRpa26frynGKZEckEhvnAhX9HSerX",
  "key2": "5WQBUdzVvzXwrY2bRtGCmHgS2Ee4Y3jaUjeaCnbsQY8XqyEHK6GfsPHhiPA3Hsj4jNuM8qNZQ6PjB3m2mTvymMMj",
  "key3": "4L8xctm7yvPTmcNRFWdmUezomZ1NfYwWejkH5Kds9ACt4ZeomCpPZieMCGWj7QgV29jkEF5VFYYRmaJkvngUzonH",
  "key4": "2VipMbAyGLKz2iZhobuSGm2UwN36eW9ZAjP2pXTGt7vKYcTFwm2Q6QdAxb7w9thgASX1FyYDNiukcQDNfKuHdD5P",
  "key5": "rJjq75UHWd2Nq6FGWXqeNXW6vkGVkwrYNrvqXvF6MLbGfJpc2iQPJGc6JUhnjVm8YWmT2YPtePAFNYxd2D7hKE1",
  "key6": "5GmDwqXWZhPp33pCGCZsBAmVzNqP1qA8o2fyHAgCwwcFsfVoymSe5SzNUASnbYy5QCSsfo3cd7prrLsa8LPq3kjm",
  "key7": "41eYj4rttGfGJUzoXPryQ8DJ5MzY2B86zXVsAxM36TwuQTfgzBhwshFYcVq9RVJTnU9aK1L7WekYeiiZmop6bhwT",
  "key8": "5RyaWyJHSrGAmBwa8ZnLm3ac5hYZMykBZVYfqJhvQaxxcv4d7XpDpfotQyhx24iMxLyYW33ErcqyRRcG9qCPKAhm",
  "key9": "4XZi64RyJUb1TGbv9Mic7qxsZCgiTwa6VrY8DX3dTE62HBhvoiDU3qXqmEJZkYcHQMS57xKjAUn962JA4EagrYw8",
  "key10": "5TZbyrQxq29dwUzq9Rb46WZfLa8CWa2Whfj5dqM8xF1iog8WnQoNa7qkdtLsFAafopt3Avh7A4QWwZWsjMDmJetb",
  "key11": "2yHPVyu6DReENC6DoRyTa3QSfGptnA2wguBkdZMSXVmKRkavSw2fJzhenr3j4j8LryCzHSm7fVfDmtLRLPRwNffY",
  "key12": "4KaWQW71W8v4arf7TuxswsvvzwMQ4ru7EtWQKLb2uUQwH6oXUpxNsungdnNKykfZpzjwXzCPSJuBkgzyxDrnZ2yg",
  "key13": "3Nr7Ssrc39jzSHLHZycFUrAGNYsoDf5rds8H21GMBeZ5yFnjquFu5w3wrGTVUCm3MomZgMgfrvxuEkmD2kq1985V",
  "key14": "5cdb14Tsijv7QW7ZC5CWRu6SFX5udbm8m5KB5y2yKDnnv2MNrD6GvPSM3ymoDsV2Pc4SY3MHvtkwnJGE6Bk4F5KM",
  "key15": "5hiSkpbPHwS4HVuLd2YrYvKG5XrEupnEUtUVdMUVB6a7rZvgvkCE9joSn1jd1kV7mVZjDrb3xZVSeCd5cXeVEm2F",
  "key16": "2gi2nymFqMhNoN6bVF6Z8wUrVgfGbujyWALG9Y37X8Ei8SoPP7ne3zSyEYzjFfZ6ipd1tJSxjaw1YrvaHcii54kr",
  "key17": "tWXruaAsWA6TS58jWY8qjFKyZiiMbyb6djksBhL6EESXRpNP5rquuD98UVekihE1zycGv11wvMVRPjtXLRtfoVw",
  "key18": "24Bb2QZFcwtLJaGWGo8w5ve9FYEorJkrtrCiyyAidp5fcJdzSuwRiG9tYtzNaFZ8c52NANmnXQ3pmU4QABpiXTfK",
  "key19": "5jGz7DncWaZ9P8389Uhj9MMW9NGteMDKJoTwLwXUkjsR5CoLAJs693vDbVnydEyzZYH5s2YgwV5ghWoyaqxtsvXa",
  "key20": "4UNWyP8VQ55fSzr4YFaSwL8csNEyjgjP8t8hkiNS92MAKXcUcarkcFY3H1qcpdX2sqPgZAgmEcwibe5th6rBHpHN",
  "key21": "SYCDM886w1nZ96rVRccVZUU3Vav8Bvx3mCqtrFwPXdKzoQWzMgsLrCkbdB2kh1G2iqLBW9c91daCMFfSeLbgJiD",
  "key22": "24DzwUeSbwCa4LhbfaWnjciNTYxjoVJBmBetPXinR1WWkesXd5nkizDM2CGwqDXzS4hzNojQGgkxyAeyZwLEraDE",
  "key23": "2ynLd6CSXC9uUtRBiijbFrUJ4Yf3KwGyHH1TukGdbyrSywm54PSEeYwbCNkVQAxiGejJza8mqvnJ3f5NNdHrav6G",
  "key24": "5PMANgW42FKRzP3b8nEc3zrGoyzPheoUCqo1tj5pYLEkEQxFzUTcDNp9nDSQwfZwQpP9BWfEcczQ1JksxGZ1ZWx2",
  "key25": "2rJWNpMoJzCXaJqSFMb311kDYruVqF2sAcp5r7pqWXHcFDscaQdnquqxWHo3DadaWMGnLT83V1cMPfpiZCgMV2eS",
  "key26": "65eLS7MTfGzoc2oXtCoiyGV82zoUXoQq4tt3Uc7DWihDcQXZjhKNPXJW9FAHMjbzXQUfiENJ5Dj1oXy5emNjAvPS",
  "key27": "2KWioR7RKoK5cRFPmFig4D4MCYqARWto8GafRm1Nt5AB2g4ZMHNcdkEaSXktDT9h2HyYN93Y27ei57zbUKuaSHb2",
  "key28": "5rR9egHSUfiQFzjJSwYQuLKr3GfqmwyyDXxHWG8DDLdvfqYRzFGMTekeWgR7A9eNDWAnPDmvdz3869CJoAKKjzfb",
  "key29": "3o6Lzw2Bzb4zrHAEC3t8scPN1YYZNsdeEJNLcxTm3FZuWi5nHn9j1LN1u8ogvVvCfRHsToBqpmcJK4yQEbFtGtiH",
  "key30": "61fYYBNhKjLTGFnZuYAWr6stVvK8N4nm16GBtGaJDzHNBbrqc86yNszPkKSXdc6t2rbfNvBGoYXe3hJAdyhAq48",
  "key31": "39v8WL7c8UAoN6K8azgdJgB4cbRqNuwFgdkYEsgFGNS4Xn8m6mFkFMdVhwey7tXEhbcedTsBQ64xWGFSYKdcDqDa"
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
