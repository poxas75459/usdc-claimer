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
    "CKywvJzFBfCsgbLY312fvFCxBNFG9giCTnGHj2gi1k4jPGZmDoV2U67WJdQTNh2VseCMwW6NNpM6nafCmZ84NbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "csKYwdDVPK3o8cXKb2dthrrz3WNhe7kef9wf1VPpeWXi8PpGBV9Exr6xfcogaUWDcN91hx6oCM8nZ9Wt1EnAk4S",
  "key1": "44uttuzngQemCaH4FBXusbcEy3jFwe7jwLrAfgw5UJv3yF4prr6QGQzKukFCeUbmcHRz9rk9rCdDSLLbMxTPhFhj",
  "key2": "5aQupATYht8ZC9e7L7PAsH6TcPFV7ZgmtpXS2RRbnAmJJEKt9YeMgPBZA7K1wKvDuDFJZGu64Xw63KsiDwSXpEGk",
  "key3": "23wA2rEz7Ei755tDaUkrmVzdxhCkMWEq5J4MiAT3GJg7FZaWtfrKTSzypE6tvBcTYp7TVnPdTQDiXvr5go6xVLyD",
  "key4": "273KFuczg2ogBwdpDuTvyw5YySz29RV1tNca5URtVgWdEG2JqoDrMaMg9m5xTN3UpsGzNASCvfTS5s46hTUcuHpz",
  "key5": "3kXNxyygkNjoefEDkDt1wRc6SkbDAtztUdwBuP1bxZA9katjLuNTCoAy5YVSzFrGN8SqzuazevnEDNXpU7Xg6JNx",
  "key6": "p92jZMtQZpBhq8xiJXbqpekYeminDXLkRiFiULM3SUVNQsbB3icwuym3w9MiVb43B1sNgKXuQoMuwV4vMUogudQ",
  "key7": "3A3CBf8UQQpm1MkcLkjuWQcjQoLBTzXN45vBk2t9LQtiQK8sYx81PFL7Ag57rHkMH2uLxATHLzELuMhi4f5kTuWy",
  "key8": "5HD6C52PrEPwPVye62gnyLCB5A3UExo6Nj9LpHKbKowUZGXCWEGkozKwu7oqaYTr5BJYkde5t7ZJo99UsPqbFrRR",
  "key9": "35svf7qbkWaCFBuRQsfQTFTP8xchTAAw3WnXjx4dnuTWsuBi764GV3jCqh5dN3e6cuBp5YKD69sr639AhqeFU6Gy",
  "key10": "2MRzFdaGSANfTtyVMyvKuYeabVmDnhLb8GG5At6Kr6cCkYKRGkB46Zz4rHttdweUPfs1pR4vgpCn5qEprEVkRxAJ",
  "key11": "HTfRHCFYFA2xCRkGCCcXkdkK15ADS2nZE9AyjCUzJAbCihHNFbwti6PQmhgaVW6bKdv5WgyFqHvgh33Bgqe8gap",
  "key12": "SDA42vWz7w3uSiuv2HFTp6VPsc3sFFW2ckG92tmzMjbEHeAHFfkMr7oHswHEZ6ZSP7UjYja6ZS7Z6nR2vu6j6Fk",
  "key13": "26ntVrGsv3QABa5wqSxtCCatUtbdLPPjqUUQUHriuULNAx19vVKrZf7JdKGmetsWajjGhVQKzMKFsbL2CaVrRiwt",
  "key14": "Z8hLK7Beatj3wcGUAPJdZ8b7zT9RmYk7MNu198W1gXQFuppoJfSrdSUFDDuTPFrag81iWJZqhLPLiExtWakQgfU",
  "key15": "43DRfiQ94qFo8iW766bJJ2LzyuJVpan1pjKnu157DngYJHm2TmRNPMKZTyhRo3aP4tK6e1yGTHS4FR5UJMRig7T",
  "key16": "3XV9Fxr8tg3FuL5NCND9ij5ozkyEiYWJFAPnwVq3ZWvaKLZGYNupAV7KDTbocY84BMvCpjCQx5Ucd923MCnSDXqb",
  "key17": "5498rfD6utj7Z1fmU8227doFYP8Q2F76Ndrhz4f7W7ERnwDoAy6kxXybKGmxBgn7uCYDE8Es7hjXt8LPWhFKRLHU",
  "key18": "2TEFPoXQkJwMb5mnDsurYGkqDyvtyMyg5cPoyxrLWZhMYTeLruzXvh8gfTYtKRZUoYt2UXN8Js2RCY5heiMG5JwD",
  "key19": "5KT85jzceMECWWX9kM8D3CxPvQbn6BjUDaKWnPVpNnKW6LLajfRTMXkrXeWFB2nkzkQKT6M8QZnd7JthiJtps94E",
  "key20": "5pAMERLNLdnXyuLGRFED4K7aqZC7R49F5DDnXFibzcvAn7tuYRwVLLRwZGb56K6zsQvHffRXY5stUwnAawfYbnf7",
  "key21": "24h4WNKvvMXCi4EuiKJgUSo7L6G1pR5r6XxZYtCGyc5VHmhAb9i9KbW4Y3S5os2oD5HhhkUqFQEmsjoES8nXmxhU",
  "key22": "2B61LKx1xBgbZrokFYxCvFGSgoAnKqzkYfmCHQ58nE6tmFaGjWAxvLprumMdcTkhe2dLV44tW9zpTVbn18yZAhZT",
  "key23": "DQzPwFihwfZzk1ahhRH7mzpGc4YXaiKhSKWtUkW2VEDACZUTNS4e1xnXZ6RrKFNwpSdYkok5vhihtprtmZdiU7X",
  "key24": "3kkjjajcnGP1GuPBQjimzDgazYsr8nM35r6ET42JdbzkkhdWcFMJS2GQu5C34pf8KjEeFyjcjaxupgUMtd2Fa5i3",
  "key25": "2qZkXMgMrRt6qfkQwpXDdCNrcMGXhJqWgFhx5YBKKK4dwpAMvheLBQJFuKKA9UnL4CUB6GTpwgq9HqRR5p8dmhJS",
  "key26": "4TzgCDfMe68dJLeKi7WHGYPcfmN3wHij7iLdfMtiP6FwxGEGCiY9cJW7CMR4iLnh29xCgoCmyAYEHgmc2czYm7ZG",
  "key27": "59818e5ZTPqzVwXBcNoaoSG9H33whzJ6dKjXzY1RWHjD4DcrtTwAi1LX2yGgTUnkfZ6So3gZwDKMXyji5PJ2ocTz",
  "key28": "hiAbpUTTdSxFQV1Grdp5ow8Ztw8Di2rSKVRBVoaN1nrvYnVqZUq579VF7YZde6Bwnamivitrd1wke2MLP8qVHZD",
  "key29": "5h4aK2sU2rcbkhkuwtEcyS4qw3FgPNnJbVWivqQzBKk19hB3mVnvbEPngAkckP3DE6ganaVuewm4XpCKFGkMnjCB",
  "key30": "5gDTBhLhhRYqDXZCtFZEUcWM1YtCki42mPgSyz7gwqgNJeJgpASrv9Qvgo72GQAcf4zLCfoVDRF69cx9uxguTNbA",
  "key31": "2XgRAJX2N3jHivi1tyP6boZ1rQDHbc5cdoHSEKLjeNBqEJApSXRFBVt3ZNrvSQcaX4XBo4xok9SCKRSucyxoNghU",
  "key32": "5D1yjHCWRCJG4B23hVbxZhVQpVFSVsvYjL5tTNLJitVmUh5r6T3vmU5sDtuhwqQ6wJSA1VkCNX1MYxMJYgJKNwBM",
  "key33": "cCp2uno8ucmUXqY1iojJ3A2g4xntMDrkbCtgMiMoVQTcqEFavYJofEfW2fSMvUCq21RrCSrQBjqWdvttPigopVU",
  "key34": "4Gi5Y7R5EK2P8zc5dvGUXDtTt6KxenpMzpgn7Sbx4Dwxb29HafPB7phJsFMcCMFPAgZHwHFh1rqdy7aBueDVx7ab",
  "key35": "3w8Co4gMZihkcr4p8PjEoV5o3Uz4Ur3ZS6M5ZeLBpTM4VJ3mXZhgC58SqvY55kUCrQrRAn67Ym6h9NwH4kETgdCw",
  "key36": "g35U7UobX94u21YUVY5i4W5uxsBCt5LTTZsr5M9VRYQaW4CkG3XFQUsVxLAGm7x4t6RVKUMHUUcVp5kMDPVZV6Q"
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
