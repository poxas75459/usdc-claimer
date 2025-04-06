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
    "5kmaGiN5fwuGBvmMbz3JZ7C5xBgSgupQiZNqp575Vu6YyxwXckt7Nbc7js5LFxVJf3GqMQTobMaygahwFFBjUNcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qm5XfsY8kVwwpaHeRYDATM5TtGA5mNfotqrFm8zbXZMqvb2A3Wn3ezhNDMsXLCU4bCWRy5ub5depLRBToqiV6Vm",
  "key1": "3fskvxzDBDzLKW7pvxHTpGr93ttDhvJDZi2edSyec73EzEg4vw4dXaq1BYPQBcXVLgzXKTaG5PbLjsdtz3tANruF",
  "key2": "4D6E2RSz15wY5PPYJ4Sa1xCBfgyR4nEYWErwSg7NSmgvLoJnxE3wL9iqAEcTUycvesESAMbH9FU56daK7HkgLw8v",
  "key3": "4qTAvwidHAGgwwuYqaaqo9EwvZ2AG5nCRjjowEJJVtQJLiGCf1sy7QDfUawXAs7xs6UjtMsm29rztka6szMwDP3b",
  "key4": "4PCF9C42ib5wxG6U1K2DnR9owZkUwkhGn9tS534pG22ssoebxapocqZJEdahB5YhUJmCq9vNeXv2hpwGFge6kfyE",
  "key5": "2dDd8x6Rmrbc8DkR4fotvRZLxZ8mWtasLfUYhGbNvRMYep4PoTLcaApi9uTNg653RwqS2qVxUTjcJfRUfmdN1eav",
  "key6": "3kSAnWi1a9bLix6j1SFBbjabrgB1gk4mEyKFcuaM9pX7dza48ueHy6F4VxznL83iSqXWf5Z4r3Ube2XsPq2pfAHT",
  "key7": "3g3Ufn1DDKcJXh3AnVSDcpJxsQs2zqrJPfK7Zq6fTLaWYrfBdvdFGRHoDmyEMcbvCM6rxRb2uQKCzgauZQsYoJHy",
  "key8": "48J6FrW78U7wtMsDGrMhysau3b3cgi2kMg7MPxsVY4SRMjztnj3eHjiDACCSvPhqnBmDYpk9EJnx8VzMv6p4zgzY",
  "key9": "5p6sg71Qh9Wh2FRAiw5KtuTuZaN2WdXi76Z8UWNRvSiGGJREuVH5bKTVeDyg2735t796CEPWJQUfYB69Nc7sEVfT",
  "key10": "42yEhF4sD3Bfvzw7NmyXLxfJw1aEsQX3q2YbC7VqfMgyDkW7TkAoXc2s21kgHg3J3GfB8tZB9zUYLhYQqgD3U8at",
  "key11": "44PcndEnVwn4YWTsHeNrW1Kq8wBzLnk4xLoP65266Gg8TWA6xafWxWgjErVcEN9Um2fvMxZYMBCJ3KnTFEaDi9oS",
  "key12": "3xYwpj3AdsoN1CVzfBvjDbcJqwxyzqgDCQucN7C5mWoMEqAfg5zJbHb4ySWpw9Y6dmEJoEEqFKVr8C9oUGhESFAN",
  "key13": "4uwdfawVV6xQTxw8rAt9qQz1RTvkQ1UiBSyLFHditfkegvjjKiV2LV1iyjo4WwuWF5XzfpShy6u2QjLmTUiXSDSz",
  "key14": "sochexEFoZ5rgihnoam9EkUydHGdwGXzNHMYLFF4YpM93HLVZ6nSypU4WqKHbQ8Zk69BePYowHYkAottgkCuDUC",
  "key15": "YV4PMpe4c7DWrGNFSf19j4ceBo3KbjWPpru6rV7zXMcWejzNJCMqpUaoBFznJYUiZnw6cE7BMphiNyRsXtg4NsY",
  "key16": "4hWNvFDy5ZsXovXsFhDpqybF9zE71BJn5vBGjTB7TuUWrhBTnUn2fCc9j3SzthXszfsFMBpkCJJbcJbQdzGHCBqA",
  "key17": "2XTKqrm5AF4AopEH33FjqgojWYEa4rNJfj8nYdEKRwXAxQAfeQXvtvrpUfgr9Qw9zzuJjJDbgtVyq6b8EG7MXuz",
  "key18": "2z4huyTpruzg3XpM6LbG8b7AU1pXKH2ih1j65SiW1exknnDK4NLrCdmqBWFqtFPSFhZexfjBeigvEfy3UGD4M7X3",
  "key19": "5bGxEJgxaWYD6KKBWsiigDiM5bx77tPeGeTK8FMr4YSEhowJkrtetpP1XiyDTsE8u6xSbgdaDvfQ8CVphfWqgXEm",
  "key20": "4mfbpknqkzgKrc4kMJ2UfwFivBMkY3S2E67uZgVhe3DtnvNdzcBUN8sZxzReAZJsKt9YhTYktE4nV5akFrhGKtn5",
  "key21": "3yQaDSkc5JFMkgouqHZFAWFVYmFkmQYMMSaJMbF1LxCBDKs6WBfauBsbvWwMsPUKahhiDtxZa178ZgnfKmGs5d5R",
  "key22": "5qjmUuyUgvyboWfUFwzbZf7JEjrQru7vwXbanea1LRug5bXeP3jDaH2MgKj5MZ3cYUSYJyxnYVpikhrU2ERc2Xmk",
  "key23": "5MfZ8D2vEYGnRHkEzNdhPGP7UTU95J1Da1DVHRtW3Ay3HxAkhaXByjczAYr3n2ULkLyHa3e81uij8j9Z2Uo1ZYSF",
  "key24": "mryWmFMn9yMmqeUCjvSHNWz4JGakg6dpSNgJK1iQjFTVCtWbVALWn5ogTmZgWTgp7c6HvzKDQWV3DFfkdU5PdLs",
  "key25": "4CNdZRbM3Q9DYcpPCns8WzL4z8PnxYpBN7h6dVueWGnGvZwaMitE6LLHo57R5dvF8znYo1gmfBeJn45YtdGVyrkX",
  "key26": "51n5QfytRyZCVybgK7twh8wZ3d5hfWA4JkxeymJem4AUFbeZtPjeAPcsu7bKggpVcGkwyPAj1uyeKPdvXBhYdbnB",
  "key27": "JNiVC9bt3GaV9HWnLGsUE4k9z7582MF7ywLnWQf7ynbxf1ZZFX1z3Aq9dfebb832M8xKvrtpMQUueBhp2sSmzjB",
  "key28": "3Y6d4DLAUM3yB7vGkvx6xBkEQExvEf4iUxPajXNKh1mCQ8sGeU9ZPA6MErnni4qKW4BHghCKpoeFeV991hJDm2mM",
  "key29": "2nG4Be8UZN5NAnsxzvEqXAJMpiyAjYWCWGTTU2gmJLYSd3amnfBqFFCDUFbL4bhcAXimyXJRWm7bYK8opAjm18ky",
  "key30": "43bRwVx7Y8JWoAVMhJgrt6Phqb5qnQcAF2qKKy9WPgtSXr2Fws9f8srnFmeK2e9EEguiHPWJeuXRg4NX1Vgpsqxm",
  "key31": "3aDaECTpfGbfwbjJoXLnQqfQ5QMp2xk6AnAudZpMxm6k1v5g2aRwmz8mSk9go8bAsWx3tyqFdzqgonDCwhmKWGus",
  "key32": "33RxgiKRYDHgtjnnbQGBoeZLaEtpyEEErVXxvZSCszUo2hJjJRrDJD3ypjfSbxM4f53kFMe2NEUnPAHWfcavxWVn",
  "key33": "Wkd1yLB2w38tn1yFrnAUqtcAo8PVJ3GjF7YctiiZMYvPFuCNDwSsJerTo3GD8w2jUuSxHNQwAZzJyqk8A31q5PW",
  "key34": "2Wm8Rtn5HVpC2h5vP1Z7PtfE16kDbesDeciTr22iCCw32MmCKFxK1Xq3w1VY1JWWwCdaWf3QHFnyKjJNo99bWt4r"
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
