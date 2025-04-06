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
    "26Ke1o1kRPFdLRdc9RqKZ58iUUYPozSRX7GZN1cWbEbbuaZZezRSt64qTy8mC2igkM5Y352UhCZuU5LfxdnGRmnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QN9gCJaQmrVvyjesF8XZiVfTrwUaN7k69sCXP1jVKpUhYjEJNcDvPY43uGuNQWN8vVaa4uUaFGuvfh15DEYr6dz",
  "key1": "3V8srvERDxcM4EHhVifFgSYQPHQbEr91AHueG3t86qN1yRpHQaaijcqQX3DKyk4L5Z5EagmtSBv6dn8oQJaD5N6y",
  "key2": "BpFj6NiJ5F4RAydH1pHunoo7JkAgk5rAHuruwEKZprH7satNgzoDmWXGS4LziTuQ621sAU6i7TTQ5J7R8cwGYQm",
  "key3": "2M7DCBjvQPgwYN8vrRwrxvktUTfQrQMKyE7LqVymtnH5kWV5HDMqB8gyjF2zQFf9qFu6yzTc8qRUA5CJnk1W5Jb8",
  "key4": "2s6c8hyzzuyXxKC9D11ZMNUsmPNQ9tYmPbJpLKhosZfNmMoUfqmcXYqkLV26zCKmWg88QgqhkSVK952zHNLqsFrP",
  "key5": "4u5NeegbcTDFFcoY5fkqBKFZd9ZmnxmgM4MrLL5RqK1S2LYwM8rsCuGvp7wvMsjjCqxyPLusWbz2QGSjviWJzegU",
  "key6": "5PC24KeX7iMb4yZjdHpN3b38vFPaGuXTZKGsLahvLYqkaN1cV1NX7zTP97LcWGhvGT9FwwGKjknPprXsnKBTMahV",
  "key7": "5sLAj6sQkY8YzZmA6n1zQWAzqdwuAk4GjJrZoNcsThtnZr81avrbLxtqdCEqoudEVyJq9cWJWD6XcrKcb6CRyQTS",
  "key8": "4gyzq5hFw8LCugR5bDoBfWVxRpEMyiNSQSx4SkFx4sUqJgY1W2MqwnYmFcUVxYrGT7qFYnYvravmLRh9ewNmj618",
  "key9": "24qsiYm9o1ed4yW4iChZTFTHfNi4NXUyt21hXpQKNSRPE5cfkneyAaEGQnA34VP1EtA8KDdWDu9TJJsTYpMqD8A9",
  "key10": "3PKZzJcmY1R4ypcL6qhKpFM1WX6vMKVFkXAmsH34tBvMQj8Kngs8Rb2fhgWfk2g7c3s15R3jnM22JCiqNMAcLt48",
  "key11": "3PvrZ8QFwAfbsZEKXYeQzCbG6GQkpdXqmSpzq1VcXGz9KEW2s1j4pK7skGBapTYJUbjNHBS3vyZmp453dRfgy5cL",
  "key12": "2V2jkgwHY3L8ZYApJSiMSXkeVp87oPqnvMZWNHMErkG97hossdLpnSgT3vtY7eYbvpv3b65JE5y8rrd5vbMrpWR6",
  "key13": "4AfG8L3JwXmgUfZeq3DDNwabcHinDKVJWuLMpUwvfTZp7TTiQJSC9b21rWi2CiPA9jYDgpFsVFzcTFxTygGxgqwu",
  "key14": "5bjc3CBP8ggB8zYgZnDRDatMiAnmq6HeHmXqrERfTA9HH9VegTqQiv3ujnhQ5ZQw8ZLW8kdpj5SBGCvCfHqEizaH",
  "key15": "4ivhJykbnRarz3kiv6zDH14jHvzxydqtdsfx1TWajDmvyUJ6NpYMVWjW9TaLa6yg2ZbfV9sWnwuJ3ae1ugSqWFp9",
  "key16": "2ZisB5MSLZvbMFfBYD4KHttm75E8nHqqQdhBvZR5UTbW1aDGz2FFWQrhpPVfpy5D5t2KBXkGMe7EXukkJnZbEJkN",
  "key17": "2MgAtpthH3ehq5Es4uy9b2RKf6uETwYjM3f4TSZKWEy5wcLLZVnXfdQXUQ5b4ZAM6pE4JMAmoBsDDvz4wHrP8bc4",
  "key18": "3hqc88AR5UjTNJKyPnzQEsscVURjSTNL5BZWXpLyxFo6YpXL3k4CGdvvuqWZ1jxnbGH7kH9r8sh1XW1Hh1hhavG2",
  "key19": "4qRFiegBZLKi8qbGnA3XHCYe1dvepJJq8XZLYXyf8kWdxDfQXw7RJVbArgLtrzRWEKpcopKtJnoDewEs95aY1XaE",
  "key20": "3EguhnpGgxjyZyv5aYHaMZ5EcLMmVfvXE97f2UvgJxyE2cmB8wWH8k13sZzBz6j1KLkSfKitafc8Y2jruPx58Exm",
  "key21": "4y5gLuJsWmGs5bWmy1kPH95feCNSA5XfVLd22uYrfWzsBgFoMHgZFJnVCWYpw9yVorE1XtvvGwuQhCP6ehx3d1GF",
  "key22": "2ed9FePRHCvvX732mx5YkdJ3Es1qboZ7jj38yU9bH43P5TL6jQRzsKRWmUe6iSbdcvfUsTgtxgaYV7y7T48QWzF7",
  "key23": "5V34bHrDDCfg2Dr2kj4Pye8mEh5KXPbfFqxNCmkVGm2UbTAQDUYoBBtQUdczJS7bbK8jWwGvVgPVRpNXV3yLXA2q",
  "key24": "2q8DNK5Xz6SKndo418Cc7gHYpxXhciuxNru8ZPgYgmpuh4KTfUrSW1md6JpBkiVQi5jwuEybp7P6kJkfzqiWtknc"
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
