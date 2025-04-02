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
    "LdbLu7Ebdp2nwsKVgPnK4DrgcHtLzBC5RYivpUNw2sJ9UV6mrMVP8YL1LFtUMNdJ7Rra3hpjXTow9HwjGfovEZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vg8TdxMHLkjevgtKobHn9c4bJFCxeYKewXj7PdXfX8PsoxEAgUbKs1C5VjTTEaHwieW7kFHvPCNX9rzkjQthbAh",
  "key1": "ueeVp9WmNEPWH8T93ef2mKB1HbHMH3w8HjpYfGJKiD8eWrkK2NoLc1vycHjvvCLy7mZLYjchxomqyRPuRCFZB2R",
  "key2": "25Zp8pCAY7DHUL4bhNkCWDQQ7W2S9LFbbt31nRvZfEYHa2BSqzwwFYLzTFFQDqBjn6cbsL3CKFVFCeR5n7KgdwDB",
  "key3": "5iAh3y9sJ3EhiUYwd52sT6GQ7s7fyZc3gtG1cWCcxvwLJk7iK7PDkuqmpc13f6LkcVgu7uEEjpXNZvfVe6a3MeVi",
  "key4": "555NVVEC3FGBGZ52Ch2eo1shGLQ9pMPneHcq1WXvb2UDhvSamwDFVvLHze4jPGYmVymeu5Gf9uEjzEadHi1HP9xV",
  "key5": "4Ej6DP4CKRzsDjSBJ64rgSTjukPpCybUy8TxhvXPk389HRD51PeNK4Qj4sSNwEj3UR6ExhdJ1JLRsTNnJNHG6tCn",
  "key6": "mAREgqweF8DESMk47Qk6UN8R7r98en6bssmg4NsB8MsjNHT8zLyqGge5EJZrGtBhgApDrhRHhahq2S1PGjw6un4",
  "key7": "mDgf5J8KVBnk2ZZoUyunKJfGsDwQgtPCu6qPt1zo7z7Rj5cKTzxJLBNCfkzgSiu3jKrkLY7irSCFjtTBM4yrHjf",
  "key8": "3NakpAUhaVixWz1hDFdepGs9AGHiBX3mTiD98o2MhFhFFQ59QciLMNdwfHvb8jCu6PS4V11GK6xYUEHyAntXQTFp",
  "key9": "3qNL5Lt2dPFtwShydvyoN2oJpEyT3GT4jijd683Pb9o3DRXDXE5VeFs2NtwgMzKQM8MvRxsoYKWHdxeHQ5Xai5EU",
  "key10": "43j3BaL119bkjg2AQ4jZTLcLoSyFGVSi5Efp8P5LxHz1cf5oy4CfCNwkXZCiozKaj83Z9LUq92K28i11KcDuJo4b",
  "key11": "qAtoT9nKhZKguVE1ZXRhXr3543MR5RE5C3sY1aP1gYRmVaiw3roE9pbTpMn8Xbg2gherNEt2kzYKdbo93bvSfiU",
  "key12": "5LhVe4d2P48Wfia8QVYdX5wtozVpncDquazh3SbPdJKN85zHT35fHbzBj2h7wNk9PPZtRyHj4KA72LNhCswoX5qu",
  "key13": "5pxv53CBymLMUoNUS2N1Z4cDhm9dpuS58W9ATrMwHiqXZxVHxFuJzY19t5JXZmgK7gTFmmHnXBophwWbj6qtcY4T",
  "key14": "4oi9o2acWLs2RpLN2uKDz8W2g9dqrdaCB3sVJxskESHdx4tQdkLLK9oJSmC8huxd6TpR8Jzt4hx52bLNU3y6vXcn",
  "key15": "5wwudR3c5npCJgkxzKnF8gjZyde8byx8Mtho6zSVLravuZ3WUYak7sQzu6ht8BR7YWtkCdoQstJ28aFgsLwat9Um",
  "key16": "3UdJqfAd6UGh4N3V5HbYdv2Z88zn12t67mz3skFPVpqy9DREH6XuGCeTk7vRXsbrKX8LJ17fk7bqPMXL2krWjjNk",
  "key17": "4F7raqCcuPu262QZTd4w39jZE71CVruq9mDGmxaGiztuB599Yr2ZoyQ9TEowN6eRNPka1QGaZMT5baadzhrNKYv1",
  "key18": "3WewrC9GabjJqrYwoUbMFgr3JfAsF4s3GXvzWZWtz9hUTdbezYZexm6JnSKHU4jKSa6yjqjboVepPDwq51rHgkdf",
  "key19": "4jer4scmK5fRf5Qp7KdVYZVCrt93RFuTq4Vqx3TTRad6craaHYWsikpMpACiYppjpwr9eXNmcJMTW2ePdzYTNpcT",
  "key20": "4fxFcSWWdgYU7sF89fkHBKJau8MqJozdskN7ai4XzGxP9VpBHjte4JR9Q3yr1xznYWcm8exHFzYCm7jYrUo2nj7z",
  "key21": "2ALrLvqTinWho6A7JvpjMjBpVqAaVqLNCPztjmqexdBwvaH8f8pD6XHSzC2eacsgGvkYhWznoeCG5gK9VBx83Ei5",
  "key22": "4xsnqopbUC3FVqDnyPoqtav179wWEQG4V5QSDhsijBoEcyqbH1SQvArcx9nQ7dw1bFUTtZfSr7TJCMNDCFS5eG1Y",
  "key23": "53v2pM6jwes2y5uU8W6njiW25QD9XqjGTFfgasDMQ3E5LxMHFq7nLuvf77P3o8vjxHiB47gQ9cnVnDKNKHdC53pA",
  "key24": "3qYZ13bvpQx6aQcPKc4qAyeKhZBEEZCqwSVGZKGJ44maZZ1UVCdi61L4ddDnuECunVANe1gFPCbjDJ6fVSwPt22i",
  "key25": "32zq4h2QcN9XSAnnE7BjsWSxhEtS3rxXeLJi61kwXALdqaNzLwqFmzEhq2ypVg3bsoATSS6AG1Q4gnJBwHJmgAPA"
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
