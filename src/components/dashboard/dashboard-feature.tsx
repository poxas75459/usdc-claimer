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
    "4AZUDxngyxakzecgKR1jreBG7qwAgmEn6KpA2grQ3TXQkPLEELpHAZZ425YianovoT37NEzsftA3oeeiSv9HNczp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rkzkih4aXSYEfYLvVd3KhrvYsYnD6pAySScGnn9Xk5p9ekQ6ySDtSD6Nj6ubDJEX2Jiz9cXozNNT9GUD5ardkxt",
  "key1": "4JqkV9t22rNyiRYkaZybqRwfbqrZ7hWgH352Pc39bwr65vosYUx9jmeur2DLCwAsAFt4AQyT7LcTBikanLtYP1ft",
  "key2": "2r4CwuwZ1B7sPz4vexRryhPDAF9nKoKwqRjo9K82QZwxXFyzgfWXSQp4BZnGTfQq9BDuM3rWgyyLnXjzZ4goY87m",
  "key3": "5LPhottGBHeamwZoA98eBCe4rPeqkX5QhQC98V6QNoJUBY4sWreZDWVHjfY8vHsCXm8CVmFmfiqSjmQJKNRww6dD",
  "key4": "PqFPt6CQ99pxxtsPAW7gK2Dr43CcagXxj4HkMkUisgdG9eEVJroQAjCLVFfeqJcRsabQSeLGbbhrtA1oXbE9Dju",
  "key5": "2pni39E9JbWvMQtYNfSKh6ncF4xZgy5AnfQv6vSenMfkzzX4JC1hrWXfjJes5q8wZ574i8joYrhwd5xVLis2L5ka",
  "key6": "4cSmEScNdrPDWSGk5yr9X418ZVQ5nBANqKg17MSt3dzE4BfvFKMSr6zi8qgVX62qAiUcGstnqn5hsVwSw4jQpQ3H",
  "key7": "3Z36L1zy9TVbVJeXQeJLsNg1PmtruN8FisJbvrbyqP2qU2zB3DZrgU3YBhcJySffo6RhQ5bV3shuvhZ4UpAGLuBy",
  "key8": "5VSbHJ1KhzVUvhDEruK2e3jVdUwiWYkYDmDKezeiRZiLvrFDHsCayWmE9uvF8vpccuATrxbR4zwireJVfnrm9hEh",
  "key9": "3fGH3k3xaseHP6xoK5bjv5WBNYwiMqJ3Qe6vtj7RQYtxoZKVSWd3EDLDfDcsAatxdWxEU7k571iJtCxY6PVajS9j",
  "key10": "3tq8GMcUnovtsv3dYFHLibCfZiZ9XadtAXFWVVRmow2TctnvLCxmZxMH3cieGyqL2a8nNnjXaWP1W1NL6UHs3rxU",
  "key11": "4r85McaMRQtvgP225XVnrmDyoKjkPkit6HjiheowzEf4SECtZMumdiuYTepqrn49rue3TjAVnLdJvXRxRHsWBRkR",
  "key12": "58qTfEu47V5KdD5TrmNNGTYToJ1iC2vKHvAzp4T7JtzXxxNcub5bzjaQN77pVFRA8X3cQkGpac74PeTUAGucFqHd",
  "key13": "5XWayKCqXxeKZ2i1LVtRUBoZ7vmsxtvVHgiittTQWgPFFSASkD2gMZ27jtptsdvoSvqfuWTKXm7ARGxhXitJNbzw",
  "key14": "4v3174y5Yka38P7vMfq619F4rzpymNxaV4MJwvVJXDQhcwCAXEhEoJJAkaveGbFnJoTtB8hzB6Ubzgm4T8pBuJWf",
  "key15": "4qZnZRzShDsxVedTJ8gZGX29tj31MtYzyaySDMbHjTJntPyfoKvtfgAZjDSiMN1xguNboFt3d13TgwYNHbsWJB7F",
  "key16": "65kJVnQS6MfYDJC3tU8sSBQTjbYAF4oThX4rDxQiFBQQZiTHRkQLx7k1xyWvfwPeuY8UiQaNy3Fm2Le27A1n412n",
  "key17": "5TcnSwTz84G75JVoUx15ZuXNzEPqD2LCetcWxHuwEV93LXQzphUWYDhR4s7uUbPE6j8y8nKAGRuEbpUDytpzSw9t",
  "key18": "9DMzuEuZah1yDdfoqXZk97BLLoonXrMYqT9SyvBf6GFfu7n6zCiwu2RrUGEFngHQ69TipNJ1nfyRdEg3LR5gNKc",
  "key19": "5AXwbSwZbhvqFJv4cFid4uGx1XBArtMdrSfvSkn1ecPZefjLDakdp6hYgTBL7fijcwjLorkgsDBYSkJNjd69baeg",
  "key20": "pEoMXncKRXCj8S5Ms8EU8HMF6whW1jJSGjgXma4Lm9131vcPKhsW4rkt891MveXVKD5KJPJwBKhPfchpV8pZXBE",
  "key21": "5nH2Xw1gpAK6Zexo7oGudpdKL1YSsvkuN6cDiw5aD8XwurkmU8EqiemQiUaw1iiuniieUfoVv3edsiqnJPXwC1pC",
  "key22": "3aVVb9ydwiyX4mJYY6JEbGPTec6WsgyRxUmxCew1odkjQt6ACDBgtd515MwxJpT8p31Mu64ApJPs9DMDjrLqd26a",
  "key23": "4LZHa47LTpS5uR1zzZsPtR2spPWppHjd1qRRzr5R5RjW7LuCmpk87nhn43SE4fyt2jFJv3zhmkPnqGaYKd6wAK5m",
  "key24": "mRLMAjHu7CueG3p9vPPDZ6S35GQ9Yj5F1gdrGiRggnmjaVBgBTJpeRoL1QhnxMmPjRSgxcg72UehZzkTQoFdndA",
  "key25": "3KiD8iRcDSheJgpYnuHNzmrT5ZXGQujENMwVhxUfUYUmJpyk954FNdupjoebxVT2WuZ4YNahVSK9gPNe7P5Lm7z"
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
