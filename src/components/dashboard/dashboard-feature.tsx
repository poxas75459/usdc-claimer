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
    "zvG1gn9XabykFTEg4XWa1qTgnwqEoLQbNm8wMW9gGJGf7qEpvtgB2D8Z6aainNJhb61aFtBXn6zKtRfSi5vXAfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HnCq2qHM7KL8wZTMC5pkYvdaBiXzVkEzRniUmTCoSLFRmbJA94ydh6DfPsH19ySiSzAHEvLPyHETuyFWoKp8S5w",
  "key1": "3fLgPMfNx9bmJE7QngUcFDY9uTMZvp5d7y4EyN7LxV3u9UFysQnuHBiPzEFSPwJvHB5cRjXH6NRq2F6crwxnwTXB",
  "key2": "5jkykmsLH3QQcdUm9WqXg5N6AQ1TNNGvJyqVTBGRyLp4jafzjHWRxZCnSVQxnT87hKb76fBXJNgJGMuuvimPVeyx",
  "key3": "4KCyVBQqzGzeF8XqmmZSqqhAGQU4rDUPVYqT6JepY9LWQLw1P6QR9NevA7FqTAmd2sor9qBTLrpxxLfCPRXR7qDK",
  "key4": "4oHb8w6WEddTtSjCVWwNXrhUg5LdaXvMpESHVexMb26ftfsVDwHejH4X9y5AhP2EzPqDEbT3RtLUVVSSc8DsyjZ6",
  "key5": "2u5wieHChxkW6QA52rQiepWegBeGuCAWPkgica6Ek4ro4qezyPApvgjXUGp6bwLjsVGz1Uye2uRYnuu5EE4BbRmv",
  "key6": "muVjJWBx2x1qAStUvbeD76wvSc8cWq4XMPKapoyALcGkeLTtpjR3jRy9uDjtnqvywEexutudJqNHYyLg3CJjLp1",
  "key7": "5hkBYq5t2sVvBxArzHfXHtaNZpsrKKe7fGrCM9bJ6NRCVBPUhAYTB3yUj7nmTVBeZBu73x3G41u49k3A6FbCdSoz",
  "key8": "3NNjpv6VvMTSE137P4r7vKgVjRaDpdepchFo49GB3tftzjQQWWw1JbX8vpBZiP49BYCQdxe7RHyExoiS7twknXiQ",
  "key9": "5K18qqaNqdHNZ9m2tcL1hGM4BkomsAZ1J1tzzVt97jN8H38J6JinxcuKG4LgsJKiAfMaXzK4f4GozbBM26EJZxP8",
  "key10": "CmqY2kh9PDizB41it5FcZmkExVJusB4K9RU85Gq53PQP5RDJLz3W5Hhy6TntEhze788pVTVLTUrhtT9Fye4YwSY",
  "key11": "5cQTGntbKqHGR8GqZAhmujc2nq76qdWj6SzFoNhiKiih4VL69DFYHcPffQT3eMfvpzt5m3osMsTqp9WXgv1GDMTu",
  "key12": "QkoVUjW8KexuwmnHAfFagqBRQwp56WXE4KvUX8bYA9PJjpBTX6qzk8CJPkqm1JUySpfHRt86PirPqcLJ1wtKgs2",
  "key13": "2zCBVxQWDhpQAWajQnSrtKPCgionZyBxZE1VWMwtpVpvc7jGKPFYyWmb8H3dCUmPP72Xhwzn7JZebK2yX34wCEcx",
  "key14": "5EwnbsW2Znm8RNfogaf6XpEapmwsMHYyNBmN9pGhfc2rvYFdryJeTiisVkBeUz9S5JiUH2qt8q3KNhfK7BHi9Yv6",
  "key15": "bWyTpDpKk1a5XDhFimYSQfV3Dg4zw28uMJwG218M95xuZPpkH3ffZSkAC1w9vkFJFuthH2sz7irDr5jdNMuBiFd",
  "key16": "47odRBvvFaL3Xys4VQC5KC2R6ZYyZxd7DYhW2obWR6JsmCBG5EmHFm8f1owPhD2W71aZ2sNMWZZVPc7YbbzsFWMT",
  "key17": "3nAQoA7BwQp9LC756JeVV5AVt4t3eiX9DLbWTxaChLGsvjNydoT6GBT67Ebi2gv2mFpLZTaUAgBqXdgwLjwEWhoz",
  "key18": "4DXxEbcuEXWhcv4ZpnsPaB8BLbPGGBF1C1K9ywNKjUrdQeqTBcDe3fjxfpJEBh39iz1wAH5cKT6vKeQvL7MhpEWE",
  "key19": "4ZwZBT44KTT5gdKJVdMmuH6AJX3NZXBxMes2MC87qSDbAGPfKmCk8TUzCmKQV6fLHs1Z1BFx99FvtX1gHktTZsFh",
  "key20": "4WLhDtraE1JPfqS1xfM1FuPcojhde5KNmGNDwVnPuWoKyXezyyo2NQj5NPK8EjnTTm6sY2iSf41u5pmAArfjtGvz",
  "key21": "3oWR8dLeLTZV2tHZ2TPxHt8fNv3qSqKF98rhseRgBG8vjU1ngKL8k3dbMhwBAHMUaNHyonbxAHUFfcPxrJsMPPQU",
  "key22": "2J5R64xALETyojq9gJM1VK611aFh3GEfwC8NitcKxy1Q2ogDd4WfAfKHwe72TWAzsYQiL8i7wrjwQxJiyc9WQ2sN",
  "key23": "5pBHy4VqXjxXfTShxtbWdAMT5XSfL4sEnsP3AHKNpngNrGvwxmhdWY1krkBZBW9jUhr5Kqqub5EKk8tNTHsVoedZ",
  "key24": "52RTjFBX1Uze686RWm9CnSFY5MiMgWjAN5f6DrukjGMqyhz61eUuATCy2c9kXAbAvp6SX5XTKahPkmeh4ZFu8nUS"
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
