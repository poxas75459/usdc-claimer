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
    "3iUxF8t7aa9f3Z2NEr7RXfE6whz3on8HctwhvwqPT9WB8dZfbfQn3UavevHVK6JG1q9EWp3xMCtHEXfGumufMnNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uxcAHyyVEephLdzTR8mGfXZpe5qQRmo5fMgAqJwio4ztzrdbxDZ3H2QYzV3fKfkYQbdDXAXVbipbtA6F2sbs1vc",
  "key1": "ypwWLYPHVM9oiBfL1YS3Gieg6fjvTb6opLTYBJFNx773v4B7JACYhjNVUcSEe3oYtCcvWxuSKSWPwasDJMrBC8o",
  "key2": "569X54T7JokB4vhcPAX2jSCaLrNeB3tiVy6sCqHLMNMPSStsmnGvv69BvWTrxuMfbM1H7pkhoTp7ttxDvDDHNbb1",
  "key3": "5NE9AL8HCwvpiZT96iVDk8j5HXNRzcJSq2rpDW7CtXG9uwsLggKajjT9aFRG8r2vfMtdP8iv4yor9jdBKXu8gg6z",
  "key4": "5HzejkfCnBkWaN4QTbXgHyaYXGQ3Pqqg9EyWoJJwn2PQ1GAQdGaRBmZ7LdSerzQTduJz3ZcAak5KvX288tvoEBJZ",
  "key5": "2mFmgrCEesAuBPcJD7CTJMHVS1SsCfNyYCjbKQ8sUJCMbPzWgR68phFUkD3s5Z67p3Xmpj1ERngohv5KmGa69cN",
  "key6": "1VxvaYaTCCtg2YwzvZMjehsibFbyeu6ikyf4MbkiBtxWDBRbpgtwtiu8ZpdXd1T21EWYbHJRea2KgF1ohtkVESW",
  "key7": "3VDiHRDWLFHPEhryxodBE3BEr8Zpg4bzzwb4NatCECpWiBHrAikQaudC9FVtsLcwVqSHU6F9orYEHR4W99aNBCJL",
  "key8": "3a31bXJ8tvqdchMB4YWPBv3PwPNXeeT6vrrkDwXQc7hGWeWeqjPRnJFKcF6fJqEjYCx3HUX7deF2NCJ6r7BhdFWy",
  "key9": "3kuVkpuZsyESgkLdwE6uijCCUgEdfJWUZtv57iX4gA2u7gnzczPscXe5m2JX8ZtbTLpUNhMYrcfaFhVdiZgmFcHH",
  "key10": "3U3DGAmMWyYp4nZcBq72qkJL6FxiHVitn9B89NfAghfcgCK1ocfPkVFSS8L3Sp3hW7oT4AocX4jbqB8kZi6RCo8q",
  "key11": "gJGUMMth9sdeqwvVM71KuJ5xQiz4iC6BTA4JQg71B3Zwu9ofgBh6PTpH3Caw9qnnE9k3rZRbrrnmcGA7K1Xe1do",
  "key12": "3H1MjAQ5FSfj8nTEj7t76MhLmikMCKSW4PsVvvDpKcGwrPpQSgYTpFq49daeL3KSheh52B8KLS1u4F6jcyd1tZuK",
  "key13": "YhDbRRQ97WLYGEYfFh1a9fFdhfSRJDhg5ZBroPkSQb8XvEbq5EtttHmcz8MtNGHYCb6Mk3bUk94qzvKp34VBq26",
  "key14": "4zQ6SBnHhWJjbBfjHdeZSG3LB6KeDEwpGLMB8J7YSYJpbTqrkFBc5pKHL3PrurAXKGf5ww2iFj2tFEKLXtKerjAs",
  "key15": "5jHHdwsutT7mzGztpcqGqhwnjtShFcXvxKdzJPxWXVZp4kfhZKBkFsmRiv1nqdmxp7JXX7zc79jRf5Gwk9968GQ3",
  "key16": "1X1gUuYQF4Ar1GTqfcYpGFcMdqJzJtXVkGxXQYGJQvWaVLPL3BLBnvRCnQDp3Dk6srGpFNDxnJY5xLw4xW1WS8U",
  "key17": "5JE9WQP2c4unfXXcN2CfxpGzBv9XBduyFSUWxqsfHbgRi7wupPei1EJoz8DF1AvKbtEBUQ4pfqtLezRReZ6eT1AU",
  "key18": "egvy91koJgR2r39SpozJQw8FHbo69JcDVgTmwD8m5ZVEVha1rNVhoYGSfCewLuQik2thf1JgvJYfbHZ1LGUPXBf",
  "key19": "epF2pMp9FtEzYqjqWCYnpUYb6hrf6gkXMUCwVCPmu4fLUeHSmfF98wm5JzDcYg7g6AiNBGphSCQmrYdv3xTBfqc",
  "key20": "Q1HCdohWV5HXn36U94ov7Ji8qHEYcnZhhqRGCzjcDunsFMg7vMf7uv3SC4D6jiNFvvR19rYsRwoXWc9uKug8FMA",
  "key21": "4tW4nexPsmwtSRuMsrMQv557AnK5vkf2dqnXa3kjs8NMSX8EvP549ozrMSUj4PcKXqJF1u9iGKBkiECmsxY4gmnW",
  "key22": "5MLqwubLb7ZMhu25HercRSukALjiCtTefs6fEgaLZS93wxWNoYUEcapj2M4uZfRMHGePAvTpdFs3kqzSmaqGmXaF",
  "key23": "5aey1ipyx1CDRob4LDtXK9sWb6TTvNGab9odnHA88FuKCfpfxSPxnu52DHvK6hgXX8wdXAiT3XC4sQuk1r2AjKdx",
  "key24": "y7xbu6XdZsgBFPSNHZkYSasF4zGPqTDTkDQCJ3LCFaWybjUS3WeZvdQwpEEWQRJS1mKKYPZnkwMCjmWUvR2Phjq",
  "key25": "26WBDyuGT1x2tLXQjJqHfVoYPk8WRoG99Xu9VjtbLgphB5PAJTjoUq3C82mr2gJZANMDjmtQWkn4N6TNApi7Kq5V"
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
