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
    "4VrQRfiUuJ3MSjTVmbvjjYNGSpkA9YWnPuJ6vDogkRHynbz8gPWTr3qMTaSDdT5RR2EAk4pGeRhEBCKCFdDBipZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZKZ7tav7LBVH16ir2W5BMRewbP1c5YYdV6PFjYCzpV4bz6xgsGeLJrUnzP2FuDjamzZmJhogaQTfC1iKFGmHpLc",
  "key1": "5eWjNRiHrE72tN6YDGQ9VyXYz8fBNCgBjpcKdH1A542xnfytP4D82qoxL4AztjHwWPjyT5ZBePvymCjdpe6AiZ8j",
  "key2": "2N8BWYwSndfqqZSm8SuyTWCH6e1X238HgcBo2zJyWH5yWFrVzN1S1yt2BEhVc36TWfB5xvq5FzKYfyhAfzh34hRZ",
  "key3": "29ZJuN4mXTsHCD59ZbYPwzdkqChXvicgtkgmgvB2MTY8ngTFVpBAPRJBSYUpU81FTqiUiC4e5vUSBDeka6U2udaG",
  "key4": "55PAyt5HLUE8gcKreB9mVGvsMuVjUmdo9V3FBRNeU2HBZSP82mRK8wKXrscKWkjybdXyWAnwugDiwZD6kJg5x1x5",
  "key5": "59vwLtR7TEoWRuckZvzLASsGjbsoP17EkicrTRkVhSNGYokkX1y8dLbKcTfxGMPtgeGRFwZqsVFN5rYXCUB9SB8R",
  "key6": "Sm3gaWegTtkUvvmm7YbrsMJmyUJHtEribQpbXYtaCdBLiCaR3KRJhHDdZiT7HqcKXkYjVjWPNtcpw5pQ1tZ2Ghd",
  "key7": "5hPfxjtWnhQkhgHy8tYnR4iAQNqzPy7TkAGE53jJNkC3EzKS5BSvCPDmwEFXKuWy2p5xGSq14AwTxzy34koWytiL",
  "key8": "4AgLUydBJzRSxLvn4HdSUswLkAtYaUmaSdbGD6Zmu98vrGMKGPMsgThXH44hMqNARoZrKCPM5JAbuvAzqAGyra43",
  "key9": "2gDomcQc37Nmn3vbApqgtUfVvkLNGNra6im51JYufhb5roQySojbRi1HtavNp72zeaVThefWcTyAMZBAUdner2Y3",
  "key10": "5x6jVFU88Jq72ShrtcLe8E1hieqgZBwQvPtBcwaA3ZJStcXvnmjUpLEcaCuyUhckExUW7tHbfdT3rK2TYtcQRs9q",
  "key11": "44WW62NW6w6cGGBQQUHtf2V2zJBtSKzrmEafSCfzAEmJTTQqx74eMhtJtE6kBER2cwHFQr7rt5D8ohTfT2GmZXH9",
  "key12": "2k9L4E8AcaHFRY2ZS6kLHtC8ANBSS3v1fRq7oAfkSpVKSR7V7wLc2h92SdsXMG8AqgEhkSKtmEFZ7uTdqDShSFUb",
  "key13": "5hhvbice19CNxmj9Xc2nmA3TpaZ2JLtPZE8EZN2acnEFXZhMYrS3w11tS6VtZBCqcZiBUnB2eyzMer5jAsLU1KuW",
  "key14": "3NLNKjChD3BqohTudNncmY7AL6k86uiwLbjFAZEXze7UU2cLqwDjHdy72KLdhHcx1GQk1e8qGH6cmmAbgJqqW5x5",
  "key15": "5ja8LvQzTzabYcMnzevg9c5X3NgFBdKe3TxKSaX1Su2uAC78Mg1DC2167jfv7M4N9wuiQKRNMcnhL66ZwYKoAptB",
  "key16": "4TsHw7azPrk3GyTHU3ZDgDGyrseKFVdVuGhTjwSa4G1YoG5u5S1gr8D33fjS5gmDFM7CDQ6uiW6i52HwQHnGNFgh",
  "key17": "4g5uyowyw1Ek82MJ8Hgn8ur1w3WSNvrkskqrbieAAkSFwz2TMA3F1aNaw3tWnxicWNVvX3VHe7Ex9b9ubLqwh2hF",
  "key18": "4mQju4bFsQYWX6poz4A6YrivvU3QemEJ1hGRdkgKAs64FqvHLohanjxc7pufKWKAYYhcRiYuWGJNeMT8vkhp3ZaD",
  "key19": "XdfiVz25q7Qkgkocf1UJFsKEdrj8y68Pc3kLhY1AgNuNNgGqYUZjywKHn8sEdXcaZqwvS543rfGx3mD5WwpXsNy",
  "key20": "S8FfQ5JpLDquKL6DYEt2eNbXWpaZ826iL5oTNS8Bb2RGXigUbRJDRGAHtRurZk7vWMwDAfTJex15PiJZwKkxZ1p",
  "key21": "2D1g4ut7RMKBGyGADtAcLwXLwTHNDHtJd743mGAdhwzmaaLdim4ReesPeUiGKxCvshW6RFoyK6YUafantaoXXCyV",
  "key22": "tjmNr7cKVuBzw743BEmNur3EAYetDRRwfxUnmtPuPActJnRm7amFdUjwcYgQN47Xn68JqeBMJyN86QYmgFNn5XY",
  "key23": "4SDdKZGqAVx6tSUwH6wbbJEvZpbpHrwKcEYeNbZvoG1XFqmXq35rfFtJqJvfJA2o5ki6aioQeQ669jAEARE9LWmF",
  "key24": "57RRoJHvjpnXMKDXzgH5aVLNGSdenJCHxtFkfZgZVDE5bA3xDoHqFCXADRyCCzFJqJrEPibZpanuWHfsghMsCUBb",
  "key25": "2RUzJ5dyjwNhaVd5FCEAyDDPs76U4UTGjG395hNPHSxDMtDFkAFeGw2c5KZwR7AKSVnFUeJsdZDxTW7847oTK3vx",
  "key26": "5moa8P6UPWW5B9CeFyfr3W8CYFi6Kf6HyMTf2jf1Yn5oWB3fyXJXxdi5Z7ucZHBtTVJyNnFPs4TzYj3yuMAsnsn1"
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
