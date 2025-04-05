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
    "kXW7LjeBRuVeG2LAgiF7T76hRcfPove5LjxLqHWVQany36rZEkBrXftPwZMkimpfDKNaFENUotwb3CS689jHFLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ca491ezuNYzYEsJ4YjGUPYN6ex1VCw67YHAaxPBUEExMNTQrWCvcmMbd9RZxo7LdeGK27NcCrhwTd9DY5WGCKZV",
  "key1": "2EBEJL2aLVGPpK1mbSLyToTS2Vy9v1gUAmvwjr7ie9v1mdKGYSHsaPBDYzvebebX4NiSZe8qVqmzooCP7bfMA5v8",
  "key2": "3uckkx24vRCrUkTUPs2QrXcgjmXEM6bWXQYBMNFEdH3WxpVVcCFFYUxZZFsruV2GorUake4zSLd4n3q8hdQ5Uj9i",
  "key3": "4eSXV13Ji43YoSLvh7fftsJa3dqKvXgME8mTVDjSoZD381gg7rbN6Z8twwPT6yyrSxXwFMic4TSgNd7EzX3MNqUQ",
  "key4": "24SEAKCNLwxGGHTBLnemSVP73m35GUvGNawx7Zv3asAELwFgJiMK3cwzvL9dtxrW1sUS84vXaYvXZ6XZYCeEakSY",
  "key5": "3DRATUS4svFDs4ZaR65ijVUnuUD9wJLeEeLWTvX1tFoELU23bivtMxyfyoenBZLHMfbNKWYnEusnPWDdDZyMjccQ",
  "key6": "46xhN2suZ17Qpq6WncwyDb9Mu9eTc2cRbdfzKQuwmuHsRgatwAmcjG7jzAoytckmzF8cTPRL3XKJ3YxiVjmTqkP1",
  "key7": "474uzNgrQfzbUnQKfKHp7rxnH2weuhdfYhLM4rEbDkWvJ8RdgNPa3TvVCNjGJfNJR3LsiTtmgVyBL5bYk91CmrAk",
  "key8": "Ns7WCpj3BNUBxHrbjLuw6rKDqmZpdSHHLQNECwzkiu9H6LQhagekkwQdqR7diR4KBzQerMn194cfVEWEmP8eEZF",
  "key9": "4LWXEUnWifDgGgeCmD5kEziMXuDcYcVvoigcNabPB11gTgW7YH3iKdkBagpcyaGtYXgtCMevDJiZV1vmnH6HbfM7",
  "key10": "4HsgRujWoFp6p7i5qs4Y7FNasUNg8WZdn5dG5rF4uniDiVyt5CAToSFq3qvCpyHZ9HuTRkkXqfRVGXibRqBdXR4c",
  "key11": "pvJrp5P9NUwQsrSJpko3qXwjBwBktR2oJoTg2aWNjKZmg6Qubjt2geqDvRb5x6LmkhWPoZs6GgMLz38y8kwaiKt",
  "key12": "2wHnM1QRnzwVa1r9T7eEGpcxyB4dQnPQMeBJhFXwSLLhxquiShYz4FkZjy6BmWB6WV4ij84pKWZ1j57jgbdFgy9B",
  "key13": "5F4G8RakDtHT55aBKcE2BkCCbrHP1pJHb6tBUJKz5hdJ8JSbubgKbD3Nqs7TDAZzoC64NiAG2aA5gPDhg9q4mT7t",
  "key14": "3XQwSSUC6LxQrw5pkBRPPcwH1tihrP3psupqUwtug9DZJRgJfdzcNAeAscJ7tH9xuvERoVxweH2q8bC6ucVtnwBW",
  "key15": "eSjwLvnRvigN5w5e3eBMokepj7thTyjTng3VXML75bcLtRcFLZVSKMWuQ8qLSDe84mSqoe7aYQRdZHDNbdaNxVC",
  "key16": "255NEwQMrdNcVjcSSsddDdWsS6NxGpN5KziZw42yDwBydpm91p4jjH7ruiG6hUTkwKpdArWc8Ug9TdaPVQNMeQQC",
  "key17": "3Uuo7G2iyS8mXdYnLRpjMuDhYVxkdkc44VYGQ1AFR9nSovbHtHG9aeKNjiUcVeDZp5jq2titfChQYBiWtt2gwptG",
  "key18": "2XH5REi1uzP1dJYSNo1prAg1Djni2xYz8MArE1Wj21chmqVrcUTbVUMcNtVoGAxsVXvjBnjVrQxyzMJCWXCf2Q4F",
  "key19": "4Cucn92ZYSmWKYHWQiaabiLUsboACJ7ZUQxSejoV86mm5pUzfE52SaLdx7BotNLDd4piUPK1YhwasVjm2twtY3hP",
  "key20": "2YXL98Lq7HuDRREkDxdaw1jKy7Z5kT2RVckjGULb5t7mo3Rq18xVWcM4aaiVcivNbpCFSaaTBd637e1vPdyQ3Gc1",
  "key21": "hsWJ6KkLood6uLGpG3ZH81QV9aThpe7LtozfdJBmbc9V3xTCdAniuwhywvSigghmhiVVL4hHg3V5ioBcsYPgxaX",
  "key22": "57WUKwubsGPkiULUGfEie3fn6LFhhH8pgitX5MeXigePLn7HWTG6jkjJYGGgRJX75impCGddRGU4DmpRi2Ur24ze",
  "key23": "2hV27uYaGZAoXPzevJocNjo41EZbbLQaRz9kRZsvyAYgQhzReeZ5xp4qtMmHBLmyK3BWgTVqyFVam2aHe2M9QHxo",
  "key24": "ZmiAXCYDNUM7t4DxUvpMEh28JAFEufUmJyGTjhyuTNEXoLASX3iDcSn6PGFoZ4Nz3MKgBSGkc2CL4i22vRCbrcV"
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
