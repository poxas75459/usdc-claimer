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
    "TK4YBWCLDhhqj25wG9e8qVJVvvbswecWAotTv1xqd5N7pf9BMTq51UGKLz2sfEJDmqScDWVAq6dXpJLWu9muJhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mEMhHyLtkUEyTpuApeiER4JdJ25sRpXGDexVLezpZmPGzVmBR9nApF9xdJp6oe5A4hAS3jYN61zF3FNmhuQA56j",
  "key1": "3P5gsmsEBTkqSdiFXtEJAwHywT74HQwcCrsihPxZRfZAU15FAQvwNHPKY9GRW3R6qmdrEhSHncTZhWnXNYRuiWU5",
  "key2": "3hvtow6r7L7huYSy4X41cc5ktYqic4m43aBrbn7eaRdxVH8XphHpQHL4JLhENxuBRoLw3Ntu5TK3CJ53S8kzrpMw",
  "key3": "43tDNNs8kjbfSQCu6se8Nv95fs2oFbbdutDB54rr7esQXTKNny1Pw139RhDohdyziFhndMLX89UfWUUeWD3a2hKA",
  "key4": "2v9SC8N9ULLZuUDiPv2ng2LJA65v9kdnn2Vf4G2wyXhxz9kD6NRbHtTyQzrCzVuQo74RZY5wCsWpSLVW8wkWP7hm",
  "key5": "4HTMAcsXvzkwtTBYdZsQYmxT2UKQHwWkgqg7qcGukfhmTyonYaAugq2vF3zd7cwdJHfhXQ4cDfHG6J9bMgzTyYL6",
  "key6": "58txupAEweSA9A8M1MNVotRHmZrqucMMWYA22gZKcpoDBDEtdQfZejRwDZcw5TyKD24UKbgvPEQBrQ9jPQSK2qxz",
  "key7": "3Us56mU3dtpwESnfE7fxuotgTKVhPKQquZqHYP9XWonYWu2oQ8nF7wWX2CYkAP4nGiSAcPQ92CDJL11eK16sVVbN",
  "key8": "4rPeBKji15nukcjXp7GdobhMePgbK5EeR1d1CgxSUbrTRDg4tkkQomuAXTY8TsSjyyY31XXq8dZa2fW5R6vxBKmq",
  "key9": "44vbUL96NMKyfFhpyaJ7qw8zkX4sqZQSGvkaT8hfVUCZQeVkYJpnFrH82Jsb1fV4CyVK1CovnQkFDi3NhPE3yW5W",
  "key10": "pF7GAMP1xzmncX61bnzZhuk5TV6CAkqWgSx6igiq8LFA7WLZSyLyHYSpCQFNcTdjK6kKLTt1Y4kgQ1P9q3L9bFz",
  "key11": "2uwRTj2b68VsDDKvhJAd8rDWnUncDhaMSrbZdKFdFMRVi9k1meRsCSFUt4okWNhkZaNBg53x5BJEW6b1C7p3URA4",
  "key12": "3P187ykqNZsy8Ced17KYxP3ynY2des3VUT3TX6WW4yj5jaf4Jc9HMBTmoVbiWs4qZvJ1wZYGFEsyhFoto4kBTr1L",
  "key13": "3a4jJqCRtNbkzsytJBEzYzdAWNKqr9qc6G7dH7rYQDvhngcLB11A4uALWw7Ybau15x8shQgcsiabpJMwX54hD1AF",
  "key14": "5QtFjGTUPvZFSMgbWQ33JYDD35YFxmCPYg9BmojFXdRfhyBX7LfKp88LQux6K3iQbWGBVgERT6v5spjbqFpWJKrW",
  "key15": "4neoRmVNVYKGJnG8PGHn4hmQU1x4G8VvvxzzHRbUkdUwoiBDyo1QouPjoATFVMMHdm79EMtr7uoxu1FhL8ud5pW6",
  "key16": "Dkq7RG4YwHtBvpRXJ3UdtXHesKiKscM8b12SCvbkBQPnzRsktfCRgggGtEevJVKzeMtxDT9xVfnn9z2u5rvVumE",
  "key17": "4z6ifkVW3EFxC1gxeLZqXs81QEpJhgNXtFXqp2Pxn2eGN3YyPUqtDdFQnRGnRwktHa5Vqc89nyfPjgr5gbNB454o",
  "key18": "Kn3JxjPb8VDyT52LRHTL29kPTgxH6dtAGE7BnDsRY8eH6zjbi9Db1Go6YJh6LHKVEomf83GDWHqg74r7y5s7Vsj",
  "key19": "4DKZgkK3nDiJSmTE967FNakwrEXxmhWGmwhiaTBpotZYsStsbkDGwMLPY2zYEB87sf2Di9BRqEbNh1bh3yK7pSrH",
  "key20": "53hGtsPJCbCcqEkhBGDCJamRXVEeKwGmAjt62tHPNk8E5LS1jP8oq7s3V9mSahk97gi9B4X2XYz3i6uQggXvUkvx",
  "key21": "2yJtM7V7wLWcNG96hp3Qpws9yoCtnxcHQVoWSaN6aiLhvcZPMQqdxBz7RShScM3LpndL1EW2evnZ8woHHoJAh8QT",
  "key22": "3gH8mo1Y344CibnB4J8Z9wcAZE1Z7Jbbno8HP6qXByy6UJy2xXxvBU5w6uzmRtY484bTs8cfWZ3w8R5mcuv1ihgE",
  "key23": "57unFZsrrFUTDZjfNY3PyRwZBo84CPdoRuiwixb3rUawURySitbpjnWSekiaPA7QvB83u3mbZYk7kobD5H9DUd62",
  "key24": "4EEZVPjwM9319aKmo5QKo7rrxgMXG72naMqnv2pnUtdkX7NJDoH7BenuvNkfpDwoDxvpxAFNzXtyfZWKXsvg5L1W"
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
