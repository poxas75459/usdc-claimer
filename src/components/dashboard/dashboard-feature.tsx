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
    "2L7oAc71ar7Dh1rzdvVGsxqMQiVytbfrYf6RFimy8Gxqh8PcXxU2XBXiSob1TW2GKjaguVkPrqxernwmjWDNSW4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66q4BaaMAK6ktsGPnfmyzXPcfRY8QM9y75rnMmBPsA32iW8j3hQqEU3DUXFfuuS197nqyQ7aCRKnLDeaVCLsJpFZ",
  "key1": "4CPDEAppNVgJ371dWTb69Ft2k9WGsCeZB79V5Nm6y32yc9krfvPFtTyaXV3N6sy1yHS73YKtW2KngjRr5BEiAJ4V",
  "key2": "3WzomqNsYzUfipday7nSJaa5MasKe7qHZVaSRTJVHCjiVda3VGKWVzNNiXUFsPGjCiBQh7htPXBPcrfpZmYKxHzQ",
  "key3": "26oXt6zPoUQ4Aexc6dBvGga6CszMy3xufT4DXEXyqsdw3UH6uWhztWXmW5xg8msPiZ62C34HKo2Jwf5nQ28r1mYv",
  "key4": "GhbZhZ86a8nDKGdMvrrcbMv2xFtyj4oAuyncsK3TRXV8iPR3oo8Wm6YXQMzQFufyZuxRFgP7YCRFArzxAknWmPE",
  "key5": "3CrgAZqZUjmQi6BZ3YRgKXKQpM75QujVhnbKjypTer2Q1MydSgivJruoeRXCed9wt2Xgbefhx8BeN4JoiAdyLYKV",
  "key6": "3mMGC5QahkjRv27zE63mzeJGZiYs1borRCj6waNv1nbR3dYTNCBcWKvnea3D8sGKCxgB7v4hbpmg7e5wBV7w2Gh6",
  "key7": "22g8P3VyCUyDZsNLXdNw4c8VbrVWC9L8XAv3ZNrXMaN68AwkJvC3hgVU6byhrXxMsGbay4XneXodKdVdx1NmVsaK",
  "key8": "3gWv9r3fEF1BryhFAoiV3cwpjX2ozqEVEXzW2PJxwUoQ7AY4xt4DH9T7F6WHrmv1zfobinKqLSP6zVji17hqj4SR",
  "key9": "6KLUn6Kzm66Qes5FfHxUApNHwAPJvqyag2aPPZVKP5XnjDBAbajEBxjc4xTejkCPP3gzyUA6rm7NqPk2JT5x6uf",
  "key10": "3i6sjiFqQGzpg6K8K3j4vqJAPM57gwof2eP5XHe3oRZ6fpdmcG4DbHxJwnry37jJrxAv2wjsk9V59bJFUMAfk2kQ",
  "key11": "2HrgdRhCuDS1MSkTmVvhb1zdb6TowGD3H5UFUKRdBYb71cT9xFVG8geqYCiVNakVfnYqL6LfLV7Heeuq4fKCucgQ",
  "key12": "oG92UfECTfzKgm3EkhjuvmPLpGVjepUdR4iviuQosdegvjN2y9WtgsVbpDzuaaY5rxnzsdDyy7tiEkymuMTA73n",
  "key13": "2fMTJa5HGz3PJV1XSmQYkAVhQyg2UX59ZQCmZaiaox1XahWFQqkJPLmG82qR2THyUgCyEmVP44rbWvU3F6M5Wb1M",
  "key14": "2X2mG39vNT8A4aRmcyawAssjA1nJkB9JxQ3yKsSajg5apXqKyKHeEsUBxVuHWssHdEKpQDKD2phB1gxJXArKtKqa",
  "key15": "5ZFEGW22YWEqx7MKy8LtLiZMyj4SyFjikKFf33vv3wFckk2AP52ZfjfSGnJygg2F2SsFiSTWf5chKn5DkhX1r5af",
  "key16": "5gBdAUYgqC4uLPUuPfEr12rtdcVjGpnpfUTc24TBozULpwrTVDeRfbSY7WeK4JgkYP3LEUvgZ7BbRQkFKWWzoNdT",
  "key17": "43UWsxHxStazrh6rHsrE74p3oH6jkKLCCzRFeYKY7qYuiyjtYbfRjAGbUtA81yE2bjh5XK4Zbs8ZNk9cWrnzCJ9b",
  "key18": "55EzZehpYzLUJCzmhMmngBUjkD7Kuk7tnNHGKvb1p3Mm5gzyRL95YLoTxa8GnRXWNH3zTUaDhT9EFExebCrBYWax",
  "key19": "5M8nUi4dv7eQLnbqW56U2za8mFKqVECFhwnxX8m3F5qzN5J65LKRMxY5KezQDjPww7EBV4N7AJGMZVW6AK1VK4X1",
  "key20": "3MQwN8wRr3Fi195ADLVqukgZb8AdzUgHG1NKEARPVdVTokbxBbyb95NJXreoEQvx46SsT6J7HdgnwvSfNZUDYPrF",
  "key21": "3fAJBeA9dyruiUtnzqy3iCQdv7HEpx2AaCqLajjC3PWidjh4Zdmzck81875FhVrveMdG1vaxWT2cBQBgVZryy7DN",
  "key22": "5anvxmpQpiaWXtYhAnf7GyM5zJ1VZY4mjcJdyQV6UTXSbHzPy6NMURRm4saaiZBdgBhRxwCJyHHZ4wUCwLfqSfHW",
  "key23": "4rjsqfxaExqoSitof727JnwuWRgJM699c1TNZSAJfb2EpfLWBDcvqMHmMHk65KjiAEou6eqpjTYdo8pHExoYgtFq",
  "key24": "2QfNx2z8JkKhcWfj65oJ7DesjXZqtj3jTebYjAD2TqdT3Ri2teXCvTxvsEwsj7eK32kSKHnZfYQBVuZoKHYYxnj2",
  "key25": "33FgfSErDzy7E8wdetDv1dx7mb2Ts9h8wBtK7FXiJGyFXQaeQeERsZCrY6qCpL6yphv65VcAK72WgnFbL8iXKkoB"
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
