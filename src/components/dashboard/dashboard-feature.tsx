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
    "4N55TjYSnkniFWJvWW6wH7bdkJLRANWcEmJUftm7PrLVYND3pvvZuZqDUqTt7q9aL11oSpDsTK1QXCWHm9shdwTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ydvuZoNLQakKEvPfu1ofdQVyJMKwWW6kY8xwZekd6UrKAiKfa43ab84yWbaSvD9YZRXQkQj5TyNFBwpKCUkVTkE",
  "key1": "R411fGRKQxKPpWi7xq7TiZ5ibj4F39UDxnuacEhGmzrig1RqbZv5BYPBnCjCFtWn5eNZHsvhW2kpZRsmq71V2Ja",
  "key2": "2FBFBmdUXmLpZXhkbR29T8WnkGjw5onAi4wkc5VqzQZQGJwkuEsXVX5vnzU2zC7thQc2cV4LpeE4Rfxp8F8cXWHz",
  "key3": "5nUDFum9ScpQAipJqsC9Y1AD3ab2g3VbbxHFPEiX39moi9YbjmdS48xjMse2bt9WoU43oyAF5nRPfvtYkBXpJfpc",
  "key4": "3cdYHRfU7NxuwQRWT1AfDbT6EDgmaN49BsSqsKfKDYyEaLpgcpbyCBHxFyRMtdBQL1a2czCFgKQmxkGi7VBZa7sY",
  "key5": "4eKfGtk8ohsp3Pk36oQwywQC4rmmDLQeic8YRCnz8qb3Fp1rjJBh91DekZFFFiBsjR5tea3WHBhwacY3cp187hWF",
  "key6": "2DefLrxY4hKeFpnETeN3smP8dX4gmkEc61ZSTcm5kH5hdCheMqb9qNRMEy9wYHu6a8V9DPxFZfjDmyWRqBZiMn1P",
  "key7": "5iqFtUKQehKmV4xgw7G2r7ZUSTA1yPMvoPs7K8dBvXKniJ27BfSsY3veEhNBb4FJ8N8tZUrf6k6JzAkATEAPMKtm",
  "key8": "3zMPJhZ1g7s7hJ8rQ9TicjVV54L5Tvujg24Wm7Syo7rgdov5bMQwn94qiUakadh6CKbZLyp4pNPHwoojRfZVczM5",
  "key9": "5DEvpZ5AQ5TBpCv5rNGF79TwVrtHBEoQzcuYPWttiPKEziEGj1LvKR6zB9tHpSQo5tVZ9ZXNwY6NCy8E2N2UG4UR",
  "key10": "4dqkCY6X6CLw3SLA2B2eEjWsxq5WxJWnrobikeE5pDW8jFHNHvvP458Mpw3KBNLVKPtSJf8DUsUMxf7HPNzqupf2",
  "key11": "SPrmk725dxQW8FoJFSqhmBtyrA2BL1BW53jyzz6ETCnLywKLRboU54RjuC3rqaWyC1qyRAQoKksmBZrKQhcLf9P",
  "key12": "2q4VCKQgZVRy7cu6gvFfkfGSaXY3FV2q9ZHJowHf8Fp3W4vMthztoTPTyL5HcZxLZC4KWSAQT9epE34KEkRUSnGk",
  "key13": "4uotLdkqamxpQkTtetJzG5bvBhBjBdA8vUfY93ScMFbwLtXtdk8iL4PM4RqYKj57MNwE6HemNmesgty87gu1vcnz",
  "key14": "FLBtsgFVvFNGwgijhf6s5FtqgeTBLXLZjUs2SMU5gC2FinFkHe6cjVSUrtfWidJmH6fR7nYoXNtwTBc7Vun9F8M",
  "key15": "5sPZ3R5bctxfpWvrMvGS5xVhVUuE1sKywL4Jx23d5s7TsXj57hZdGBXWMxMjwaNoyuwrSDKTtLa3Jz3872e7eEh3",
  "key16": "HyM2R9mAppE8ZAeBHN5nCdB15U3oeZYzE37Vxohu1t6mhxrH3QyrDGHmo2Ria8RCENBQiHdxurPixUWa3eHBCHZ",
  "key17": "ncr2ZhFmcLiqHigej4wZcQVPFALPc6B6RMvF3dX5ThybnafArDxtnDqWP9ZrP9BMZYEk9fuuW7dGC4qEBG1WbcA",
  "key18": "3kiPpgHhehGRbhxQnqzvxUVNC62uyNFTmmFyXqPbU8gkusMrqChfS4tFy8MptNnG51z5iYMGteTtZquYLRDvVeJg",
  "key19": "jNJvvHLN1d5vS6acdEzJLMtYn6BpCBzQy3FGk3tPnxM57jadpY47bDmiRt5JXShRAEzN25g2wHQGLAHKfGNb6vo",
  "key20": "5tuUWY3TahCUiReAJSTous5nWUomYtYGR7QKD65xG2wwzd2vrtaKSMuzKemfnrY8rR5Dkm6t2pY4heNejqVgRp4a",
  "key21": "3qXMPsFbLsv7u7VENfWbWZBGpwhQXWjsiYRLuDXr2TDFaritSwgEDtcT6LFzcLdzHKvNBtoaEkVZvbzNPXvEgj81",
  "key22": "QJnHDeiwXEHAoRa8CcXi9kYrjPYDaWUg1pgJqj6PPaUxMgZf89LyPb1kFWHtAxEocf1V6YV2ktxo4w1RgwcMs26",
  "key23": "3Y4jRs3LCiU9U5YXcK8PfMpYAmyFz1UdhSo5oPSPvdmqh9NNL8S71vubnWZMDhoCDm8dtMGjasS7HkmAq6uwhfya",
  "key24": "pLZJkecwTBwwAEW1dxpkxsCbfRDeVT5APcGtH2ZLXVnDKxznbcj1wEBMVZDiw5TNS9nn9MevZ2wGQKraZniM6rC",
  "key25": "UUa9fdjukUZHDFeVJwagQjuuvL6V4zuUQXSSHU5tQavPbpw6RN6Qqy8ZADZRjK8giGbTPoT9ZuXgroEH3TzJuSn"
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
