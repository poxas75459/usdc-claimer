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
    "Us1MH5nNCF5jnvwjBJseR8uM8vS3Z7ZybtEqPDD43wLZq88WQeMJCdW3qaKA4DYQkoKkZs3x99zrazjZM6LW4Gj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32mLox9ZcE8CgS8HKV2zZqKQnxWQsECjWceBCiNG8M9HRTgQsxPCuVZ8gFpCNEM6WX81EuLSXVj7rLRUsyvBEpvt",
  "key1": "2fLzKK182VpYraNwTteTpgiydF4jbjxnwmuVSKjr9LArXUAnRSzna9bv3iNKUPFLZ6hKdPQYWReUpoDMiPjc5mj4",
  "key2": "5HaRQ9ZPYyYpduNh6dqmsdjmRNCvYGvo7nM7skZr62UDyp3Gr2bGRZ3CV7zg23cbBGQz3ydfXQT7mimMXV1VkGNC",
  "key3": "3ZWj7dqHVdGoC5Rz134HyRM3UbrL2g7CGGh2qETjJHSj62b2QdvH9LwqGsECvNWqMEckTiyX8d66m1LUP9Wcrck8",
  "key4": "3gExasgKRqnvTWkZj1WoxQLbPaxu2PDWAgEsm7dLhRqR6N2gnG3wPQSyiEq6qP7XFbTuFnorf82JsnwHnXxBfZU2",
  "key5": "mNowedvQHhfb2o6nVWHqV6qEtBMhKPM4jRmGsDfJ6uPxnYdZWnKUXobdkG2vVQgapR65CaRGn7TRyhpGiEVMxdE",
  "key6": "Me1dGYEm6z7eLX12LTxjYN9vFB9eXYGRMWzK6m62w4WmBDwHNnnvy87jNfFUisMH3iaZLKQwuRkWuXKtm43Pxch",
  "key7": "645tZzxF2oNDhqffoeMxfANBtpX5bH4iXpUXdPKnysi9kL6tnh7Wk35ovE53nw7jpuC4sM9tpdEUhpr5XmywUsL8",
  "key8": "3QGgdkJrBSLejRrf99Xjr1HT4yUZ9UcAXZKnrnKJvBbkdp7oMoVq8z2Hrbpo5rNkpKotiMq4veS2PPMsSHyp4Zk2",
  "key9": "3JEHb4QCt7o6JzkRGTXY1wVJZHktGbfLGwRetR6Geqck7BnUgnU76gKSvPGnY8ox93UrXGtUA4jGxitJgvyysVJu",
  "key10": "5tmBTn6iDYAtjNkSACH6CKRnBpB53ShX8v9tRGmShRy3SPeV96vbZsT3HNpz8fTpsGLZ6iA6sPrccZynnDAndt7K",
  "key11": "Bde7fW9kuppFe57x3BtdVcmMoDc2yUtwLxMBZUjSYBM5JRKYNByQZcyygaTszSNquBNofmBcbefQwkZLSzn2vCT",
  "key12": "2tsdXrSGw2SukyjQbkse2e3Qh2bQyYejLaDgrER1SpDWuHbUNXirFewdmUwWfVUjcm2YRuXRvwamQ9gXR3hLfPdk",
  "key13": "2XQHS6CsaWbxsy5h5Aq5769LzfHmGogZiFcFWiLSP9egN3daWiTqHtfuYCMXQLmd4xmWzYfhCZzqxBsVfiYWKRjL",
  "key14": "2ZHCY2efnvMXVVZeHKHbwWgU4rFri7k7Vi6EuL3TPSSHxhTU7y6aMAMsRH3NQ2QyWC5uzs7YLSVbVbe5gN3fWRyZ",
  "key15": "iNgTtqoHUWrSssDYhCZrbsT3hDBQhVEMegFjXc1AZixXuHKkqFShFpiFZskmxYygLGVn6xzidJGEsC786Q4K299",
  "key16": "513rYqasDnBXi6usWNB5EUarrRkioG8RfVc9VjNLmUvDTbYds9a37HZVrbqz2Yq1Uc4t7VpjVEXDyze9K397ddRv",
  "key17": "4tDTeaqeUKUErgiks2YfhERcsyQq25QmjH6N462iKJ7ejUB4YJ1dspNDkcuvtiKeNusis7Nfnk4A5rFQtN9PbGKS",
  "key18": "MvR6mNR3nGJnroH2W99j5EkA1N9sxLDL5Rg9QdF8uR78EDGFKWXNcxpaNPjES5pbT2rD1hYPwkqinTY7yvXKX1P",
  "key19": "vXGwBtH3sNCYEcceaByHEEdYeWrrRmZ6MQpvZK71zHrCDickK8Mjzo7NQ9QB88GK8vEM9s4tTE91n5fjsKgTag2",
  "key20": "CzaYdd867FkanCswqjT4D82LQcZZGiVyfP2keYivEWZdCwXAXkn7akrAyuGaErRPcxrHAq9vD5oHEhMTSgJHG2K",
  "key21": "3DZRkpP7ocMawxrNj9EqDBN8JsWDMbvb1HhmF6p1LyDD7vnctmvuh85UFU6rucxTo4bKvSLsG8K7v4au4AjaTvCt",
  "key22": "MdsADysmHGVKC1CF5Hetd6ago3tDKn3G7ZQudmRo4uBGinJrjSR4p4ucxFT2xLim9FroYSR6vWjh5vB9Xv8iTTJ",
  "key23": "2ASPHzBQ6LXkEUieW73Uac6FdMynzDKvRzrxzLcfbfcfnuafQLQoWN7eQbKHmHdpw6r6j5u2aCSnxN6kFpM71Uva",
  "key24": "wNvcLqiwnjZ723DaKPhLbgsZqdtFVLofjV2NBTsp9dt1bEvHU6nnx7kaJf8kUv6JJnQSx95xHqa5ceTAXf1Xgrx"
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
