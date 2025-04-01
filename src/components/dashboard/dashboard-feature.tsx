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
    "EYLNSt1PLUPNRHW9rzzebWaAa9KnH6hFL6sdE8wQBoNbTESyYrrDf7S85fp3c3qAtJxtsdMyogcWuce7fZmdtZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ALo4fdmkQJzHM44T7QPy4J7ViJDrNRXcB7GqjPSRqnGezMnENpmJP5MN1iE6difjgZQDiARKTVWAdyH8fhmXz2U",
  "key1": "3UK9VUcSwXXbWF3GBPi7e6TCNWXgVHdPhFDonSK9Gcfr8XAco6YxgifRqw5r4GMgJ8B685bGzdcLvX7jn8rFnwzA",
  "key2": "5rzuLdYBvkGtJDcziGbgBAo1drWHpGboVxT2p1AS8SRduSJYRdq1g2iVsJtXrNsJkxrVw2hJanhUD7aU9mQrpzBw",
  "key3": "3j9CdEjXUeRQyTz8PzNHLwTVzHnwr3mqqYaS7GhXh3X4jxdPDxrjJuLb4VQLgts6QETqWuUbKKXgfXSnwqZfesyn",
  "key4": "Qi8hxkyPzGSGhJxo8zMiAgMdnNrh1qeLQujqWgFkYH1B2xc6AvHdmJ1xUWrLDfRRbUKWEJvfBvfG4tBgMKHkJUk",
  "key5": "2UpxbXYR46pNaUBcEAmgzAbbwc6QRXT6VUyPF8whSxed5WfXgDvvVpQ6xzHJiQZFuEbksq1f2Ck3gdhgP3con4dz",
  "key6": "PyYXrbujcEf5pBEddui9R2CZraXj4SVRyaukETTwonWe7wsXGFpYzV3GvSdy9KFMgjABy7rimAvU73qT96QvAEg",
  "key7": "4KkwBkStnznynGwrjANvRSv1vTXKRp3s3aZ4RKHJTBVD868zwaURy1a9hYewpcnAUGpBLAAGWdToa5HUiJJsTxh1",
  "key8": "54TXwj5oZVEjUqnGhyZfYeV4v1MaChZrR8PuGq1s7j1e1L6huHT7sm8KiGk2wWyUHMuWkj331twbgxw6FhopFUTX",
  "key9": "32adQWQpzK8CrGKEJPVVTxyZHkmLdwiqFvpwcpgAaTQodGHKqdxkGav7SF4vHvzxty5U1YZfoZL5h9SjTemm81Ci",
  "key10": "4dsq5j9SQ6YFQ1gcretKsjk4Q3S9vpx8TkCtAGutmABqsqu75ti8EamDHh27WSJ21XQwfQVnA6Xr9hjFX65XB3eo",
  "key11": "23XyMehHshV3igMWH4EqvGqeGLUXSvwBsrbAoH2QwCjfehRx3VmzxxHBWuYoHdBFq1ie5DQ19qcMaBNghAPagYXg",
  "key12": "3AaTvjrv39cfWrLTh6xHJ2cVg5yp3XqoY7b8z5f1ktGXPfqTpXmSnj3RZ1JCzeDNS3hppJzk7YJGMbKJiKfD2PrN",
  "key13": "3zn46Z95fpZbEC8oLDGpn84tjgkUSUNS4vNb2UDCuDCKVnX7DY8Czcfc1umoQBMxgCR9yrYVH42LM32PEjsht2a4",
  "key14": "26hbb5wFRdzniVHySUvQTmWu2UZyZLALdHJ7zoyXnsgJRDkdg15iS6u1CeAXCoUtWGh6MD6aiGQqr7J68vzkH1B5",
  "key15": "3vBHxRHWnqCmbL2jN1Cqriv82tUNvqmumMPFH3dT8x7GxSnqGwrf3UdSnZx75VvNZrFgJgiBL16oz7vUuZ4wjg3m",
  "key16": "2nBKVRrk9CkJZ4KR2gmK65ncmAt6B8UaTCLB5j5qvNkp31aSzpzgHMNfD9Jw6R6EP1NBfiD8PyoGpNM8YYZtHHvq",
  "key17": "djLgXBER53Drii8ASpQ6RPizCJnJX55AJ7QUMy7dhDwtBR12BQy7uy86DRGcc4YH9FUvudEwAdM4P5ykxibNjsV",
  "key18": "51xmiaaFPQ3KySNkBAaATS61K6nKrW2jF6RksprcP2hofqPBojy1jiFnvKiyHB2X4Eif9za8rYMMJfKdf3NYEPXy",
  "key19": "4mKxdf2Z2v7XYH3VwrxPdvBoscVgZXXCZ7axswoGgQaPf7RDGjLJW6SaUhny694KxSkgRVLDA4oNdsKFJXA4ixon",
  "key20": "3SPaRHB53bmAzaUd1TJRWwY6q2Pi3qWxcPMZ5vso9kD2uKHid6YKqZisGppyAUP1vgz8ZVrHqV41aSTzMJcX7qAE",
  "key21": "4baDWtc81sMCBySuHi9H4JZPcWswTJCcFGZUoAb6NvmZ9mmcAEmgrDU7GG79syG7VHtQkACJ2k5DhoBvxodXFVUi",
  "key22": "3jC1AQkM9dgDFnpnzQHa1TcmvM7GNGRRqebDkpALmZMr6z24inmVDFUsooEnNzQHrSffhL6X5K5aQuj5VT1Y72Pg",
  "key23": "5pcXW3NbxUVXTnMqES499dGdo58EfKDpbRryzDWX8mEe53XW8wrvFdpMoDWrzdFNeNnMPV8RQKtjqKizAUgsf2y9",
  "key24": "Ca4b9TfKmoF2ZGqgnUcQQwTuC9NVXDmny7Yu3v2Nx4PYCv3EqpZBbmozkE9UAT7cNESWNxWgVAPrL3L2UNmYbAV"
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
