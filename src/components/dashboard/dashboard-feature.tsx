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
    "2TAR1GQfTC1upyPkbDgXikgTYrNmvTbz5kuNcEbKCgKVTcuotqbotp1SnC8XyuyGnP4EKK6UEau3RMyhprrxEvUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GeeA8kgdJfpDQcHcGLF4nsiYLMAzC1gEqBpnKAjDaZCWE4tmDCnxjPqoZGDaeLKVSLhrBfLMiUDTnqP5aD9WtxM",
  "key1": "5WF8MHgZW8oNZPi5g2nyrHBgao8BVMqrSGBszSgiP1v8QhmqKjLZxJqGHtK1xeh9vzvuS2YPPY5gtuh3eDnrBkGu",
  "key2": "1zpcRx5QgH4QhbELyTzoSHqmMUC9LEX7XinTN4tRfMHTSqw2ntswEEVhNFF8pcNdThGLe3Zd6iqwZaEk1o4r83M",
  "key3": "4RqoYQRgCoKnZDiNXiDmDjM6k9aAXbjC8dpERGv7KMEGudJzr8NziYPuoWhyScxBNNEthmyp5UrFoxLHG9gdCNXK",
  "key4": "4xZbCA5kqio5iR4dqVFgaBNvsgqy8NLU3Bk3CrPRumhEqK3EwRSbHnG9MspNHCyB6EB2dMUa5KEYriKhbz4QDCPD",
  "key5": "eTGRYbpQTMRCYtsUgJnJij34mWpUGvzaHJ1K9qGfjNGURAvPKuvTYgZQJmzjMgiXZ8pSegihR6gKEBKc6UzMwb8",
  "key6": "5i1U1HTpZ1oFpaejHmxf3HedcHDJcDyN1ky3nUVL362Jwyvyds5QWFqf6SAo2StNC22qN81KYVH6onQ6svdvq3Kw",
  "key7": "3DVPyxPspBZ7WQCgARKpphMsBNKvpCXpECkhvcGNqdjt65xUoE1zWwYt5RWxwcUbGx8wxVeNT2fTTDVQg7Nbji43",
  "key8": "5AYRcBwqi9DVP5k59KpcEqHHGctxUqCS1K33qEcLM2KZ9cPBKJow5db9ZiBxMVocKReBWd1nj8NxTWQc9tcWghzK",
  "key9": "XEBrWNS8SKYrwLdmLkYiCboJB8poHMconTp42Uyt7zmfKzBzt1ztQcwQcM4diAtbXi2crhh9z3FDxKdQCV4ZCaZ",
  "key10": "2gspriN552BujweS8Q7apL4Pg3XKGAAfJB427AHMoBk3FvbdSn8BKMT4nvxykrgdNJHegBAzton7qvNVtHZrGjNd",
  "key11": "2aLc84m5wzrMF35CwEGQFmYpg5M3emn9pK6ws2Q6fmr9zNqoKb9JVfifykRmuursELuiwUccZFKAWSciajm72h8b",
  "key12": "3nLippxxTedc4dogMGVZ5VnRPo33kVL9qwnDEh2yBpAQVW77vfdrdSksU3nQpnCNUnmxBepFHpSMTUzkSEb7da2",
  "key13": "2uoXweAsRYHvonkVLv98wy9rcTzZWse1mqRLgyK5c4HsAfBnG87ALtHLkb66RhyMXjSWJQFdC39gGADVS8pXSfbJ",
  "key14": "3voVZVC4ZgWW1dXYoBorJ8wu9FpyyuvnpG5UEAVbnn42NfKvj1GP4edPkDWCpmckQYxaBs9hfoKpuceiN6xa57W1",
  "key15": "52EaX6YD3KuTwSi1XrKMmaxmtZf2KXfxVpEVe8WFygCNXKdT8GwoA7ghZGcxVvmnJsu8zVXQM6PEymheU5HtYBB7",
  "key16": "591tavsQ2HQJgQP6h4bAkdjSsJAQtMEXfYUmjFYBSbMgGGvrFMEQbsjnYXWSNqWLCwf3wYe7kjvBuW4cPcxL6iDU",
  "key17": "5dxPhJ7DXk1oz2fSLya3bYJzD3xJ9xpGoYRa6JNZjqNMkNhvimbZFkRv3JGNXFNUGDW38ns2hzm5ekZY9WZvyGdo",
  "key18": "4oQ6GBrtC82Vg8Cw6zPEvAY3jDV71Gf5FKbeNUsW8bXeaKbkjkJMr46kXzeuRf1GKP3qGMi77v9CNVQp5jUB5LVA",
  "key19": "5hGbUzH4nrNsb2uj8XfrPxcZrZtCDMvQboZaq5MEVtTZGpXefJy8QgJF7ABQbFPjPzDVQ1HpSRW5cKRC5vLd8k6X",
  "key20": "46VJxffiRXtx44b3C1zauv3nkSAgqtGATx3WmzjQrdMZvDkopvhfopw65Yrvpt6fF4ynGgvrvbjeUR7PVDCeoJfQ",
  "key21": "2vGaCwN66DgQswrKtdBqWnmCp7ztRzb7ifcnoMrzeoMFtChwfVvC89shZK4KFxKM7H48g5RtXVZMw76rjR3u3P5W",
  "key22": "4TZwcZK98bdrCPyyzxLVQYqx6jnuz6iDAbQgkGSgpGV8JvQzkHw8byguERmcvhbLWAzRpRtAuqhrmBBS19ZFFrA2",
  "key23": "3Dc9ZV62KBdet81Tgd5sF9jpKHc6rw17oGLWe45jGAkTgAfXWKT6rHYeWNHJAJA69mzKyFhMFkpofyrNZWpb8QST",
  "key24": "2i3yyG46Neoxoo2vZ284eJMNXWH3TVvgL45K9kkVc5KTnyA5chQsQgdWzeB8tnZmeH3eqLYdo9mKh422XEdJ4vi2",
  "key25": "3VYpEVFHJtSvaRihaQcUWkfWip9R9yfaoYjZqPEB4N6fEUUV4EeMQe7ws3PUPxupeyHi5nBCjf6R1UqJwn52D47X",
  "key26": "n3bfiZJiVssfx6iV7riJNqYJAZsXWLiZTVU3AX92ivdE3itzXXoEKaNj2NFjheZdbfJd1mMtYHSqsSkHKNwMeFp",
  "key27": "65sTjaoriFDPtougfuD9vnVk7UYPETmrGpqTXZ3Wufv9hdPsGi1ZP6a3oRT7JvsGWWfmt49TSvUGSiHVmsSTqxbC",
  "key28": "3ohXKA6Uos6qDvQvs3bJ1wXm6NzRXXza7fo3cqPNGb8gvDMgnyXwRAM5Z1QuxRQQf5Nq26qANXgUxc9DX29Ceqj4",
  "key29": "63F8eQxpbNKiYoEv1zHvsknfUqnpriQLGhsb6RzxrkEfM3h61dLKgHgkJCo4pxKKidc8Nk8CZJHpxRtgowcrFTXU",
  "key30": "63JjsVLMSJCWWW4aRFkbzYPtwSTDkfUdVQMG8sEQyQ9zFfY8UAqZDCBEvZtW6U7AnyaeJ2UwZ8Hk2kiNkx4zK6XA",
  "key31": "2ejrRfrG8QXekvUTbBug3K2aE6hA4Eyw17Ng9u9XXoD1qJP4vDWw7VkJFuH71Ynnnit31sE2PufhJXQrhfUZWzXV"
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
