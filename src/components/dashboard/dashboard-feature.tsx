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
    "HPH1mm1AgUoJNENVdK1DwudjiTtTELKjPUX5zdRLsqoQp4pybqj9taxoiYSbK1HbzHKcfQJBWYSjYhJzBgsH5Nb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DMn6vXe8HrMFP52GEcsub6vYq9vxkgDwXDrDDSCTm3iyLoMMBQZdHBd3tBsb2eNm2syaDpULvLHT5FMK1Ty5vgQ",
  "key1": "zJgfKecSCEr3oinahiaq3eFe9nnyvZMFUrjmzYyxQmDNedsrJ8DPpxWxpEARWucppGo1RLEvNxzgb6KWJ48Z7Wq",
  "key2": "2cq436UR8aqGv7NDH89JY59sXxiL6Cf1PAb5hLmgujXeGKzPjMSyg8EPxX33dpsHvKmBUFquJToXpjV9mf5YrLGB",
  "key3": "4bD7bGAPUUxTh6wffQ7zZ4dQWNCku793WxKqCq6QybU6gcKvhaUCtFU2xmrC4H2WScLqJDBU3F4t6hk3QcnJXQ1h",
  "key4": "4NYpbtEbybfdC2iDKcgnbztvW4jDgmx8xrnqrURgm8NNq1WnQiDGBXrUo5ohq6tB9CDnZNHWW8yaZ7jSwqw3P6X",
  "key5": "5gpXuRV19GrQswsAEGzYFGjovsA1cvys962unHU9H4q6DHZp4mKgam1JBb1JXB5VzSHWmbwGCGVgYvtSYhpjqr7M",
  "key6": "4PTSBrmumjFktsVKpN6vESDbjDwXFymmoC93nVY9enQYjgPcdgcYoWnhKCzG92jhPP4ScW9LvdYyWcXcP8V3d9r",
  "key7": "3CbAATkkKRL14Yiv4RcWfqpgc1JNRqXzZAHHJMtGbaxp5kEbxXfcCGfPkTamDUxXMwCetogb7xANkeCQZ2Nka2hH",
  "key8": "3i6PM7GZUgNYqvfKwso3aqdYJEK3Cz8bxb9njBTmLC7hTkEFswB5GuT8aa5qNYFb8hppK31WpNsZMjb8XH9zzFHQ",
  "key9": "eBGNTAwdnnoyEFh6JwizazJg7gDXfyC4NPWz3jhCi4hdByWgbd8yCfqLd89HdHLWifZvnv2dhcw3A9i7PsPgSYY",
  "key10": "2NkHRejxXP16C3xWU8NfctANEs93SpjpDbzSGSnicpgimSBoKXF5ASY6HQkKbaz4MQYjhprC2CfYUqf2hjVT2gjz",
  "key11": "2H96xwhjvTVuo6vYf4jc3pWoUB7UW3Rv2Gg1Jp2ycTbK2LTiCMhWuAV3T7SkEPApUDsse1zLhT7ko35FFMjSu3x",
  "key12": "4ti8VFQ93tBCe7pmyCFiYpMDZb5W5gUDfR35gFEq3PyXpJ7B55XCWUEQcAyGqNLLjt6XtJ2yH34E3p4NVvYKc26f",
  "key13": "25TDKcoFxejVRNwhqFM1UdULDk4f2wzAYHQu22iu3mP6doKPmeqqqSGPxD4acWLqMKo6tzsahKj2Ea5X1gZQxpXu",
  "key14": "4vUNng45Sz3DVTjPeyhX427uxtShHdhwCjCSzwfko9nbMHJxMMTbWPKD1KH1bt2QdD9Jx8aeaa4VJ3t12cGACbbc",
  "key15": "2jWiaqfTMVK4FLN3UKnUquhCNuavKjTFkB5nJ5FaJ5HCGxVFFgZEUoTdasjrmqH3wxJcVwCygo34vHi1urmL3G3",
  "key16": "2QtNmUfoDBgRdwaBBYwNSGUkHr9tJkBJE6qXXnMhLJBRoqDDgVzj7s5seQwKrkiqnoh7VWd7hPcYvRuNJfdJGGv9",
  "key17": "5iAiauy4arNrzbiSLPUVMwGv9MVuQ9ACBgjW34tJcEX5f7hijkmLv7W9EGqreMsP9njFPdXXGJ4n9wfDs1FnbzC7",
  "key18": "52wrcnL9UVxyqr5BZ2rF12b8oB4o5TJBy2NMAuwgGmS5GjARYpULkwjJREtxZit7xtZ8byxJHErXCs3NRzjjLVR4",
  "key19": "Sv7pZL8BrDJoW88xrGnkWBxHLLjevSgmyrh1VZ4k8ocZ6Q1jySnxBzdmdehgLizzktCqncRMr5NH9moqRfsKrzr",
  "key20": "4WzvGjmBHmTYBVywCTtNu3buAMFDe3JAGGMMmsg95z8UFu2jDvu6gdzCtBEe1jL5wTF3nUYxhKXWV38QgpuqCpXL",
  "key21": "5vvwW8YKjrf9CZeVURyQSskcMnSprdJpJPpimQpAnxmGdWE4Gqim3xcEqTBk66bCSKDpkNKcGPTpTtRNHS47xZQ8",
  "key22": "3AAAfMBJBc7dWWqfMzqC3pYkBa3Ps7Yxgb6uToGQrFKsD1h9v2i9Aq3kf9hzfKsTGbvKq7mQ4Ys2KGucx5ugK6dp",
  "key23": "3tctHVfRkzzHXj3Ya16uxFi8sHLhFm3tetbPGUN6ZdY7GhrVFjLC4S8vWV1suH9FEfp6yNuC7bC4Wt46hF185Stu",
  "key24": "47s4aF7iAQQnPTRhqGfEzztLyG6aaK9uRkU3qhY2RGEbBKv7dRz3wvhJfcXenwUyZaWybCgEhVyNYec918Vaf1R5",
  "key25": "z3hAtM65VxMkwKjnm3arqF97SAy35k6FbbmajhKxfLmaFh7qcE6EqGa2PDhWia225CADaP9fyi8o3kw1qgq5uGW",
  "key26": "5ZUFzem9AZajdcPFmGDmVW8NE4pyurMqHeW7P9fr5xHvh5SpRbHcmeYn11ZmRtcbtcGNpisH4omTmBvmocYPZNwc",
  "key27": "DC5bydxa61BPso4vQ989Eayi4NjzD3uHVNLTzWabpTLkbonE4ZhzS9t9C5HzaiyigKip7cJRzKPhumvfqPBAAJG"
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
