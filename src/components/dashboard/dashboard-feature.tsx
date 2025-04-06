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
    "4y3mXyuPMxTkkzwoMBq18n1qxji7x6ZCrPu13Hg5mm3GnNTC8GuXM2TRTa1bBoNu6u5S6Jw1FDgHsarbW8feXUdQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zQrryj5gq3M8ozdCQFtwXV7BAMBJBZL9gYZfRBrG6WFKhpKgJiskurWGhwWvwT8Hx8MLRSp1969QkDj5tZbjCxV",
  "key1": "LzbFmfREsQbbsuUHD61z7S6kUw8CpNo7Ksft5Rp2kGB7HiHWkoLaZU2XGcQWhuoDw3VxPnKBhBE6iTvrnvjf6pn",
  "key2": "4JiugFssCiZqZk6f15LJiBqfodQLrkeEA7MK1RwDqQzQfXiMvkbsUcQY1u7RNAFepw71pkmpDSCNZKhtV9QNgiUg",
  "key3": "2WTTdd1uwawqH3U1fcPj4bSAS5eoFt92SE4bKUzPDkKuCZtWya8dc97nADRt9pmf1GVvDUCTv3uJ3pBTZvHAbfLJ",
  "key4": "2Ejp7K8Rfhducq2DfRpET2316HE5tvhwdpUYheq76UaypqMmS77B2fpFGwdsa6w3uCttZxQGwrC6fdRQdsUSLki9",
  "key5": "2BhY7iWVfJGT93C3mRzZFKqoNHrMjabGELYnJAfsPWALvu3Pm4w3Hyx5i1i7zWVcoFi1wG4x7tEWvsssT6rLBke4",
  "key6": "4DjpXoTXEuG9Bcyt3brGpyiiNdLg5DjQhx2uk2wUFpdiRyAeycbDUVDpiGyb3q9ZzkFNmSjoXNo9ND6HG392akM1",
  "key7": "31JtxboQoVZ5dPC1GHxv7LXfhwkieebH64Zdp4Fp2HJQ7Q8r2BMKMV8aUwbnUTcw5PYi2FEzddWAFX3MT8ttMaFM",
  "key8": "4gpPgZFtoor9VrQub4GxVEejoFL2MhwoMghvgbhgcGrZD6r3DjwcWgeCkxCjmog3kyCkZgdhTV5y2jbEiXkHTLz",
  "key9": "5gsYBTc1pL1bhosiKebpt2fFSjgKLGgQ51tfETpmeAYF2o19YMAYjLwvWWm5ZJumSVWY72wbCETuBTAip7qmR6Q1",
  "key10": "5A2eWG5MD4FzozBi6DDHDTqegsmF6bHgFQa98j5PS9unohG992cqjCWebkLSZvqtXb7PuYSzgEMtMq4CTAEo4TYh",
  "key11": "3vhVyLvyeDRXd33bLru75x71X72cx69Ww32fChyQnZvq7EGAhrf8nHmZSyxnRuxc13TmpBUBihUcmxxwZf7dDHyK",
  "key12": "4nxPiQvHDtegfEXJj9XxFqwR4VTDELVJifFmhjTTnUWArkwWARPpnYFx8vPNQKcyjpNSWvKC4Z6gXwSwG49ywHGC",
  "key13": "2kqP4dcGDUCzwQ8xSjRCgqhWfJ3MqFiztbu2FzA9NHnKosTxLDtnJDTEAN2qnWaTdxWvHcB2TVTkzabC152FLRWz",
  "key14": "38RFX5TJHx6jeAVj79C29x38LeBo8VVMTMQnxYJyqK8wkxzUe4ijziKr7K6Sk72V15o9JZMUghh2nPumPNh9cwzB",
  "key15": "5hz7HW52qw9RSoUeAo2ZZ6iodpLzNhjBSmN8XF2nL3LU6Fe6rMJrZTXV6g2htexedteBBMevR25esti9v4dD69N1",
  "key16": "386KCHTYmXj6ezziwhXgEKRgK2JJ9a6i7mcMTFKvgu31csPhjJRMCqdwcyr4WZT8HT7LuxQ6exJUZKWC5J5zPrhm",
  "key17": "66CtU8imMN68PYMJumkw7idoRakvEXtkVomHS2mqyRwMQAtFzaFpRJMuH68Lwf7xUyjhncvSz8uxEJ4kYEAcTDJ",
  "key18": "2hv4yDHRa72rhUVpsTEm8HtDqxQG7JVujJNFurdP2D17n8Tdmy6tuY1Bj4UzZLkVT9YeqxXDHLbfM3wSpy8bCswE",
  "key19": "2M2wb6ECouKT8rk4LnqgnUMfxp1jSVYbDQ9VoLnVyyXpfxgbyE6Y4DGqXZSfX6AwSoAUoiuF5HxEdZv9rXZs9hgL",
  "key20": "3F4ghEzCeUaj4KkT7GByjgDC6sf6XZaCyw6zUg8Y3ZbgHfNJwyj5RZ47FXRvHSao1gGogVxMEZyPMb4YmXocvk2P",
  "key21": "3Y7v3hrCcpvtEDeTA5J12WaAKVXNH9PvfVf29Ys2bfKmFoVjSES4R2eB4CjV1Uo7THayFexLkrCCHvX3VgbwedXn",
  "key22": "32JFPv5SyC96SkmVrJNHNo4Vuo7x5vptMVt6N5XYeVaKWhnmR2Mb1JS4aJ1yCw6DDwzk2A6QnhsyjmnFruSy68LM",
  "key23": "66idWWWt7gqE1N85SRrajKtJ3JPm25uEUr1EFaTya4aKvfnDL4r7LCsadipiZqPq8e2kTzCUX8Fz8iXwG1oa2Cyo",
  "key24": "65LWLzhSPcZVKMKFqauFY5Z6LjJvmERiNYbpkv9YffjePJxtpQoDXkJicakY2rA9woGiT3nL75X3jXQeVz3LsjPX",
  "key25": "3pEDtTo8LWY9cNXBtX4ThUZjAedZYqHDwsvFUPv91CWqWh2zgiYYRnx7Lo37kTUk2a81uuQDCX65dWwb3pNhJbSq",
  "key26": "xLcJS6JKJQGxrWpSSDqK2vMovzH7b5YiN2qRYKphNEFg8fKydK1vsBW4Jrt5uBz8n2oq5XnAF3E7jpKaNwELvpJ",
  "key27": "5gcM78xKTLNgubagQz65FRzNTwTWWe1m2VHHvES8hmDqRdZ9CeWg1wZ7dhh2oiC8iN7brCX9SwHgh28jwMY1gkym",
  "key28": "3XhWzL6NfMygNenFNHf2xwFPNqpYxAk8UboBjJh68oKJiuZQECBFqybYmZjd66VqxmHJSNwZQHJA5UeempPYQY1E",
  "key29": "4VQXYXLoMynxtJ3PnvF6CUmaggvVXD1Zrb4v9dLqgm6Zrx4YbnN89pQDaFKJFRaRz57BDGxNnTujYJpCj7by7dye",
  "key30": "5Q8CJtECxZ4ESEWUJzJxLreTMHmV8jXDseiZmpCHqh2ehyf2Jf4ADfGZpNTrUd2exH2yRm4gzvN497tM2YJq9ALk",
  "key31": "8P35sqjQyi6oVeDZqbRrF9GJebjD2NHFBj9ocdgrseEuFVdWgPrSzQqrYXzyNz7YxD6eBqym2hwA4Q6w8fyYJw2",
  "key32": "SmKdfsPGEGbCk74ihJx8nhfCK9emVfafWU5G7KYt9FE3xFy9rtUAzo1bHNXEeNx2Sz8sWkDre6hVEjmkru9UbpL",
  "key33": "355jBvtEPpf9hmRZhj4JZKP7AESgMpMaBpRe3afLizXfDQ5trCSpv5GLrbk6hJcQs4aqf19F77SVTh3FG1E2QjQu",
  "key34": "FCb5KQgT4QjypZDjupsLwjbtYEvLvGkUmLCFTfs4QfXq7hf48E8S7L2i8kkWbhXGpnBsrVGvY9aB1ChFUBYFdLq",
  "key35": "4MeJ5NZeLu56SjToMmUtK3Y1ihHYbcJF3xvneToZo2R3vUNBRnMxxTqtpLrERHv13dxoiHkpjoYqyMJyPmaxh3P9"
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
