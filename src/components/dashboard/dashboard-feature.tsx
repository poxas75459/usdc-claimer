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
    "4FDFfHQ6SuEqxDxaUKe8C4jqgoMqFRYfAGypobrNSiw2s2KTuB2amVu8e5JrppFevFKN71i4Xwiw1JSEFmbAwzBk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59A1BQKT9rQhSAW6vygBSKAuouxmXSB7Fth91pUfkyGQ83DzdHg775KvfFRfZEj3NkLm8oxLtR1jKCuRb8hdNdx3",
  "key1": "65VaDCaSpj1N4PhwKCUiGXUpRSKatYg11anaEkbqV11Qy1EDbasVFRerBbECfWi2BuQAmDCSMCien9TJYGD2ynkE",
  "key2": "51eQyvFK9qMD1YoC913QrbzqyFVQGkr2iDqtt5HkMSwVsXbcjvYUksnUMCBPJ5AkBwsHAChdBygkz3SiqUjjfryc",
  "key3": "3Xge5hPgpQRaWt4GsHLuKegfHy4eS8CU3E5z9LCfCXFRMMmxq77KrbEVHmByW4ndXc9D5Rmw1zdtTje6ZFxX4s52",
  "key4": "2cwutyPYWYzd5jA6ccujhrRRG2DuNgqAx6G5g5W1DdbCZcv82N9AXHUdz4YLiiECgsZaSzEMz3oCrxJArQPBMsm2",
  "key5": "tNuMc3GraES11pb4U69Bk3ScPjXwXTwzrqtFHM6UE4tCKbSi2mMft1swuvSCqqrucExVE2eogdL2fihPj2i6u1o",
  "key6": "xT1hAu5cQW7ZaXZAU6LNicVmyKVyQznecQuY3Fyr5oC8BCD7Z1dSGQ8KafovGYopvYdFz95E4iW8jwfwXnoDDuL",
  "key7": "3KZpgCniQ4NBKMpbD4exUzS9EoteVUcQT9mB7brF1KMRVXQ4PAX1AyDw5BgLAzfS5JyAWEw1sYV2s16UDKX6L267",
  "key8": "2pLnsUrnTYwXf2LthNzWTwZENrU4PonjkSSop1XkuDGMQ5teYdFsaSKgHazYYWKG5t8pBmsGCh8JASddeNzKrxTL",
  "key9": "4MsPzJJr8xneGPjDQ3dPTpGtaFA3bwgcuV15oGJ2G1m3efXmaq3wdoaN9uHE3735tbi7u91fEhwt6ypUUQ98rBnU",
  "key10": "3DL6BUBSZhjfcBY5rrALwn6aTaDLHAeg9AppyLERQkfaz2p9icCVv61GgHUGSSaAAnuzhYekcJ15eWxH9rSS71qU",
  "key11": "24cviVqfikjRoM62hafzNT59izMxvJRiB4yrAE7UFcVFZoz8yj86UJVHxEm1KYB2YR8YiBWA6hryEbDvRvkjSkps",
  "key12": "214XB7ZSDtDpjqxp3w4JrtpM4VQ94vboM8geCJX7TyLZtwrA92ZYEShAN2xn7ViqfGrp5PEEaqfPHRrR9hi7B7ML",
  "key13": "3nG3oB3t1tARtXQYjsVmk4852EoQBEc5QBW5ygupnb6KDUFHxp6HQ582X2DGXD5JAkoJRmr3bg2ur4KAajdpjLmF",
  "key14": "51nyeot4H1x6tJvVoJiZtP6BjJtAo9oWSndLy2zEmVzLwrgkjdYcQZCWU2MwWQNpptcf7aaZ4DX2kq3sW3LjPZtw",
  "key15": "M3yutx23uLB2ypExnFrbWMq2EnEruLp5udpsbUY8C5YvFnga9NHz93ZUoBR8Fm4r4eMYtXasypBeEJCtB5qjgbR",
  "key16": "3wsMiHPAYvZ1LKghKpQioqwyikfia2u6jS9ZJnQ4JW8hD9hqzhAkVVZYdzr1Nx5FMLExR1nBeUG1bPBgNpNXMegB",
  "key17": "tbWRfoNgYCo4JtESXCwiiK4G25B87GVLuXFTtXuKxa6kv4BT9jVPyv9TNs7WdpwsFnx8zbad2G4kDt92MY2pbcz",
  "key18": "3okJY45pMNAzUbwhY36NxGoF6Gd9JdtPo41ZxeUCBaqFjxpLaaa7n1wuksHxGhDqj9o8LmXzrTeuf2p4iPZgZ7rK",
  "key19": "4CB5SvgLbGntnauHysm7YXM7152DjfBX5GzBcKvVrQH3mSmLXEqZQMG1YmMKbxgVQb5M52ynKxvL4cxBwMcJ1ot7",
  "key20": "LCgxqvzTUTaYJBesGwNoPAFoH6qHetktwyQX26aC355sAMmkJrHPAXo5PdGQGACXBcs1gpUKob6DYaS7QTzF9vm",
  "key21": "3fpMwdAuWBEjLPNNsBiNyL42Dfs7dtEPkxBtoizbsJhZXkVWDDmtnS8JVPV6URrfrab2sU9wkbJdTRZggqvredz5",
  "key22": "3oggwCZzkWLUPhE65WDvFvKyb4jRWtJgYcnvoQUYWssd3SkqQ84aZiW79XqSMG7dbnEVZqiX2zfUfgKWkJdUSPEu",
  "key23": "2L2xQjxXbb3yz4y8rtd5qmQ8B58vVyZeYVsYw1vWtoQtyUqeBwZvJmKqtimECfXKVDrcTVbjGAUJbbFL9nPymXhD",
  "key24": "21keGTgY4DyNo7ZpsK8uXhSMgJeWZWe9Z17WTKDb8WqE9ctzmyai5hayRNzg8pUBt716R7oipDpDDLLYzXC337yE",
  "key25": "3HK6AFQ36Lm6RVQNEw7fGP7p3A2oE5ziMMs9dqXpuEz9MYzh79YMdfNeXpSbKYtcmUFMzN8h3qd9Vgh48VF1YsYv",
  "key26": "3nFi5HDQWu3yQd1315uV4tkKGvitofk2Tffco8jHFYPPRPBGAZYjQctnFu8RHUPwaijsqW9oxdiZHf9kfvUCmZm6",
  "key27": "eNq6qrWsyYjERgwxcq5C2g9ciTXBJY9B8CGVFydtbngRt7sdbLCwXgduy4j2RMgDaTvpSBAske3KR4G6fqo6aVq",
  "key28": "4FvRBh5rj8sXL7dMTUsnrxhbKwwgUZWNvzKKRMEcx6EXeuSBwPoCGk5LyYzP4QrcfiZEveT6SogUsCNmMTZ6TyRi",
  "key29": "5oW3sMLnfdvKGuL6SWA8BvtTFsnEEsdgtgtSoyztWg4sEA8Snrn5ePjvjK4YVKFzQRaa6NnW5D5C2wQt71yDayjr",
  "key30": "5kW7aJboW7c1t1AsWwZAr4y9owh2ae3vdkc4x4cL34uJoo7XAxvggUMJuRqXLEED6YWYJbzwXRbX6FyCt1iSmaN",
  "key31": "2hGQnYW1RWi3923wL7kQQrSyuNiqF2vTMkw6wbEakRuXNDLrkkT2KoRkCuMRHAi4mHP7b2tvA8ycLAcvscXNNtgx",
  "key32": "4442GcTNm5DiK4Nr6mkojSvpMJwG8gcxceNVAWL8C9ZymNBCMdP93FxM4YWyr1rEwHofZr9L3iaiFCVbBjncJSmK",
  "key33": "346HpvaupVNeycrqUHqe1cw1yxdTasanKYNxJ7PtNjBnpAyjEZJR3GwDBzKiDJvNghKYDWKp1MSEsJrpuLBsMRBn",
  "key34": "2t6dMFrxzkxfB2cpfv9tUrcKBULo3WML7HZu8KtQBjHNypR9Wsa4DFtv5bU17MBPP4YZKSVZZrgTMQtVzTqjQWEu",
  "key35": "3odgBDea548JkmvWvDztNMtwVr6gZyDqNA9gjyzA2qZRjbuihchFHwmTsbHp2cwsGd6LcHDjxbrc71iMpHNrdiBu",
  "key36": "3GLSW5iy1WQ6JGJtUPkwHLA3NC1JQt6AZuG5KV4aq5VizEW3VEvyUru7KJtkC6iHkju4zmz8jtsPySwgg52X5kyc",
  "key37": "2t8aV62mXjPrDDez8KFRNzcwSwSjMqjryn7rabgeYNxspa9qvQWPyvnmmE19HhDwZ2Y2KKLojyYqqo3vRwsZ35gQ"
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
