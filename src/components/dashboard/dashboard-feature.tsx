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
    "2ReiBJQW5cNG5oFxqNiSaiW11g3bMx51HF647AGtGFJXrCpeStvY5b7CiCjrUKcRKrEAoHwK2f7jzSjPbdkAaKEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p1G8RJo92quAb7eKXCEc1iEBYDL7gkgRK3k86trRWzQX81CyKrD8b5Pubf6wjE1f69j72itxKaXeGjK9HMvGAzw",
  "key1": "25hcCtYwGrHSXjQvUbZLGXVEcv3VkxPxbTTTpGhwVYbWXNzYFAdqYPNYc4nuqX8EZqesj9itgPYXMGfWwCF8axyy",
  "key2": "4qxJoByn9DT6jYuqDXxCVTpKpSJaeuJduLNFF63LhsR9d47Tqyw8WWrWQkiqUBGV1VVYkdfQ8axVZViCMDqRtCkz",
  "key3": "3ugzVkeyT5oycmURB35bUaH1RyYj8Uxfc9CoBhuXENyXM5RtD7LKZbWtcmVjw3Z8vUpdkata7p4QRLSvYCbSVZf",
  "key4": "uyndm9Ba1SfyPpQhosJ3Ujz5CmvEBovWQcAFGhJWV9W3h3rQx3buuUGQGEXMxi7pMoiSswUusMkHo6prand99U3",
  "key5": "BS1ptCNEYDLcS6iRKm7hNcuFjJKdYKri3kWTNUCsvRXrMANg44rjZdJPGDRoVRuX3efBL7M71FbEPbY9dnMLnkD",
  "key6": "2jXEwyQN1d911cbpRm1Ap9tXzT9zqbEd6BZhfUHn6X5QKJHphnWXVYjgfEntxx9rVa4A5e2W2YVD5iFiNfhinXrK",
  "key7": "QtJy6c9BQZMawQzdmY4LZ9WMafqHpNqsyyZZvPK3rpZ5D3WuXNFv1wtPqQwGjB4zQ2Lzy4VyPGxc7FsZN13owAp",
  "key8": "3rhxVSHxqrTpYXQFnrM94bToDLNeyNAhVySUahLgJo5F91v1SyRgHRhE8txyjzeE9chakFwHBFxrvVJKPjquUU79",
  "key9": "2Q8diSBQisTQjJ9Pmu33c1omQgzdoL8AQQV4hc9tmQNrJ5q3q1M7h3txzVajZipgvoaabxsPk3dqVkFjqtYdsxdx",
  "key10": "5YxB4SEi28nqg42nkzpSepp1nxCx1GQe88HGbbz5FuJVt3yoPeNmg3n9sFVWFczjLSBUB4VVt7stKzCgWSucrvtu",
  "key11": "4fv3Hi4KMwF2HYt9GiY9usaF4YmGsCxUPVp7ufgtAFQoiHw8h6hkxrbj36mjPEtJ29nJ2kiuMCUPKaEBH1P53Kem",
  "key12": "2VPC7iHJB2uZCJNhXXhofbiLUWfMGuuYBQerxJ6C19Uqo3nHgZDUCXEF7Amc2nEPGHg8BRweieDZLFzsTBkAFJHG",
  "key13": "bVTCtJ9GDxUyfhxkptvbw6NvVfdoHNo2yS23kfTDN2qktPP93FcMCiGjrWm8ZjWPpgGkq42hriuvKTWZRbaeVfp",
  "key14": "4vKJte8NyHaRBYcHDQxsx1LArBDqZEdppEqJ1Qnshoje8YbzpUFb5VRjzeBjhQQYc5yzrhDDrGsH2bQiJxsKMEhC",
  "key15": "3UwPPAJQrtuY4ov19KoFThVSKhgUfhN7NcoTGGJTzTBfjiBYuD2ZTH5VQfCZvUaZYgiY6MsAP8ksLBjXaiAqt157",
  "key16": "67S9kCdoN859HpXxoUjnk8KTk9FrqNS4vb29WGPtT74HSJC2KuRxMdT4m6uvhYwJAsdCpokk4jFCgDiLxNjxQuN2",
  "key17": "22HBFddN3GNWJrXweybBzrqC2RH8s6ixNBqTxnBDH9AUCYAW4dwB4kefzhpdy247XaRNjAdTGtxbuMTFmhUGqw7n",
  "key18": "5WBysK81ctWWPHCrfeVW7tmFL7GwiPLktw2CUnZJiMiPhqqmfc9mt5JcedfVwppJ4NuanpoTQRiGPBFcqVV3hDbg",
  "key19": "2i68o39ULuy9vHxnU6nat6DjcuyWmg9fvMzoYnZ53nTzWjgaq1j4eEoHShN4SZEWH6xaUorh34MBcR7k77sionqZ",
  "key20": "3a9ZMY3hhvkwV9DRUPTp9cBV4VMkmQTT8ZYRBz7roNTTxHWv5qfSdi1aE4MNnwHCQ6XRVzJfBHDFDk5jWrKVqfKr",
  "key21": "3uNvoRidoSxzctSDnpYSMjtDJstEzeiGd2Eg99rD4qXGJjc7RuTqRoKJmLiCb69ZFvrH7nRB837WR73jgfkds5UX",
  "key22": "5LvvzqX6pthw44P7iv73APyuCF3hLaFmnkpFPEbLjY74gyDTpYs9oke3JGfWioehrk89C9tUWhTAroDqibWQhtbc",
  "key23": "3KL49jEbey1NQ1uYeL8YJJm6iXVkkVAbCzRBRQoW3rqnptnRuPHC343Ku3uAxTk3Lxn6XWnm1qTLY5QWxcDrxKJk",
  "key24": "5LVP9y4pkkQ2nt5n4vS2fCnEqkGhu8UdBzLfZf9dAJgXgJpCibNeGXv9SBRY3tWDJw4JQPzvNPCwQ15UtqUe2UVz"
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
