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
    "dupYZNaSuyMAtytK7UNfJusf8oe5kYsg8NLvjicQGuFugo5cCubKtvEMBM6htt6jf2GUrGu9pM9XuM9wKC6ogef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fiqaQ5Sn7L6FiRGLGo6uWEdUbrjKadC6cpGwYmuTMzpqu21rdG2XXumtdxeiuqpEJGodV1B5xn3KgeYN54GiLwA",
  "key1": "2sMQMmemXW4YwSNGyryR3Jurht6LdMJ4fn2AK6HiyoMS4ZAxghCbsLbQQf1FDQjZSLRji6NemkH2gnXKBuUA6Q5e",
  "key2": "52g6y78nJLf8jygYSffVJXsfLRPBpyr1SE3KF8MN4XMNwW9TcP1yye8fPNLBUzLZYPaW62j97uCPqqsQfGzaLP9E",
  "key3": "448f4iZfSaxv9U6Lz88MeNs9tiJonABKjA3xbgTxBqmvHeHJCCWZ7EP82YxjUeKNFb4Pa6ppckdyECyVPZeJeCJ5",
  "key4": "4Uuar3eAQtW6YBVYAGKnSsdnUaDm5ayTpseu34G2N7SDySatdYY8bGwfQNuEwcpdEwTZZK78gJfuqXzNEG6iNWYw",
  "key5": "5iWMNe8EvLzv7vTbvmtd4En7Leuvkj9no7dCyaAb6i1Fq2ENBLCixDW6pWkAbgGcLTpbKdjANCfBC1FB6B2pWGRk",
  "key6": "3uy2RGpq3zAks7q1EhEZsdQNAQ7cToFQqnJ4Kxe4VmYfVFzJc9Py9TJ63CsWvHmp8FF84VFJFegEG344jULp4NLF",
  "key7": "P1HnxaLP8qyFHtQtPVGwZYnq3cqF7mpqcNLra4a6EkjZBhj7avuegf5hHf4dDYpWJaBAaLdcYL4oCKjRd2ceFp2",
  "key8": "2wD2D6baaMocrzgyugbRsY5H6uwKXURHkxoVMwxVf56KwbegNkpznUSZ5PmJtxeEQeFzEfq7My5riBduFqt5gnYe",
  "key9": "LtGTXq2uMty6daNKoC7PadfQkaE9iemRpCdEsDK7bPMQG5WVa6DkAt8o6AFRcAcmGszT9r5dzqptrpBtj85xfVF",
  "key10": "4EkHBmHn598hasPdqgRggq9RWUu3FCok2CbJA3FaZrF4tsynJiFAMTgRPN8P4ZGCZCjKRGwx4FkFcan2uXFihMgd",
  "key11": "xRTBxkjERcAn2jS4gWBSdRbhfYZyuv9rq7DCvxrARsUd4S2dx2iNFvnEV4jfhUKjJseR4Jwmoihpzf225fbX4kn",
  "key12": "2rpDJHpEffUBxGvsbuyZA7UgVMUbPwn81MWDBXhf76YitbN4K4zMJAMhvEzbekw2cYgqEMdcup6aPPYV2J36zpEL",
  "key13": "6nrRMD3Zk6vmdg7gmGGStWRBSDTnAwFRbtbwkaxPsQS9phmwZHhdnHVRboWZTXeXA9iY2UcQPb8PdU1VDJwqxeX",
  "key14": "4LidK5Bq9CeihJGtB6ysEEpjKpkNRbfgHJD8ggQ3fo1wk7Gh41TDsiNkHEz85KwoVxKR4N4MZZokEz8YXDfLbi79",
  "key15": "5gzoagmVQyBW6NsiEDLHCLWMz9DEb4EUFoiBKiZYCgZD49Qnr25tVdRSshkxuKu3F9nCRx68NFEEBdbpMzc3nB2e",
  "key16": "454vArK3GxCnPvMT7Z7XQkdaDXhqnXzpFb1TNQyBhie2rogemqFBXyihqo1KZsZP38tYev15hqGRVY4prvc7EL64",
  "key17": "2RZLoV3Q1q4cQUivY9owWjavEDSqBs1SMhbK4UcxXQVC381FpEoqopvdLaWQ3GcvShLqzAVo5g4tnYDMaJ63quyq",
  "key18": "3vWrjh5HCmLoyPTLpT8EuQA1Y4rmVxsR1KZi9LNdtz9D4uoRnfVpsV7C5EbnodK59FHPmjRPqwQnJUaDf53M9PTB",
  "key19": "2UDQHa7ye62fd7Ko4t8CbesVRYwV4B4PuS4QEUhJyzmBWrB7NaJRrn6VWL99khKRsr9H3iTim4Hr6RzcH7AGJpV7",
  "key20": "4j2RVQUJNhS9kYYWxGbDgBQUb9kaE2y4a4j3xE26Luc1N3G2oyafd1MDkPkzuawMZauJV3FfqrBZL2YGgSqkBSrs",
  "key21": "3CCQKW9s9Nj5RLxn5ASCCQ3Pm5h7FT4zwvdzmUYXyeKQ3ppaqrejjTfzWaqbvwZ8z4Egagf11DwojbdK3FPqM4Fw",
  "key22": "62et2YZz5eSJdo1HEtFdRS6JgQWcQGA1srKNLHRN4sbGSkp85t8PXrTTVUEDMfMQREWWvdHWnBFsM2fnr5wy8YCg",
  "key23": "315DzGyNhEQVTUncVQ9bZWH6G8wkevqQYiYuifDD5JhfhMDZFfQFBUM2rc2FbxLrZny1qgj9NzJWsMKyeX7UoXrs",
  "key24": "5vuuVZLv3SztP8dJnPzn9wcxTA5iW8RZ4xa4GvmxHLj9Wg4JiKM83REyG3tUDiSuto5eaWrqwdx5BonBTb1NKLtv",
  "key25": "5waefA9Wm6JjpDqf5GfHEdsn8id2sHJSuNbUj3NMJGMPNE2ESib4FgR89PodmkcVV4kPBWpejYhB4rzPaHb2ncna",
  "key26": "5dffLMjxSfMyYBF5pEZsQtXpbjN6FG7RMeornbSy51XwFbMQbJpq1KtdZ73irChzaTyL7xTp4ExGoJE88BbhNdZz",
  "key27": "3abKTPK4SCCDzWmrMnKBm9E5e9wDv8XUvs6a24AGnSs56ySnDpS7GkWPDrUsZ9fHfHKKjTafBDi9MTtNW76sw1Ef"
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
