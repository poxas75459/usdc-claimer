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
    "5kcKbeLDdzXd6eveDbjsoE3FZ2CQKGNSigbB3i1SmJZzZXBLRqa79D7TbPh1iuFkXbgy9ZZ9Kfh5f9wL4ZkyuDri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s3x4oWWpVufVEAY6KGBNDiM1t6Qz7EWcRqTn8TzSAQKGkHK6DWA8otzMDYBkr7RRNaUvVS23ri37y4br5JCBFgt",
  "key1": "uALurLPVzBVTEJhmzed6LrF2SJfH4MdpbaWPD3G4uXbgSiDdJBSfcAFnV4yNamaqg1sX5K7L2GBjbSrmHuJg9NP",
  "key2": "4HsdNCEMU3T47j5EsUDxSvU5Svd9KdC6hurdxuHMxfjANLuixzm5k6mrqrUkBGvqNyYHGDNFiYHVJEaGUTZCFdwm",
  "key3": "5FWEbhMbNC97uJxEZJFG6aidCBCv6HnTU18hmoC8zL8oikfyRnTV3y6VSPWPBub9H85W2rfogCUjUomfty59DV5T",
  "key4": "2VWeuVp4DcU2ShMC5Jw9oo1kzjXjymXZXF8QouhHRnqDDtWM5Z8Re4Y5pDUMwhJNpmKXbpTZ5SzT89GxMG4QuGHo",
  "key5": "5fLHxT31T444wVzVhTYJ7TWG1WpLddFB68pUA425KDdXk2mo3qPGLE9fmfRp2oEgQ4kp8hJdkZ7R3V93UknrhjMr",
  "key6": "4TaoFd39wvXgTfRreDkWFhrWbwy8VHE5JqFW3oToQEnPfgHrL6Xt8nUGTk4Ag85vNFRHaDVMxG7geZ6rRHpm4XWE",
  "key7": "4kpSS1vecXStQr7UZWjDYxo95pCkNEtGSAVNvgFQ3AoME8BcarjE21SXrC7WByEe3mfQUivQYYipnW3YwguoUF3g",
  "key8": "8veAHpouGNMaCEFgM84wFKQDhc4FBMSoUzTzhtfGbMSmN8S46NmSqaNBC4KuUewmAvjBmxMLQX5NDer39UFc2zD",
  "key9": "5o7Hv8tEwXzFUoWzu7RzKwQFiPoJHrsnSoE6uMqBWa8Na9BhRKq9Gifz1ZPDh889JpL3oRBzTTrdaH5kc2vRCKNh",
  "key10": "RAWMBN8AJGCAevm7TanFaWGV9xRyN7UeQR8E8aC4cgcjKVwrRLnF8ptegH6k8JMkDBdz9LofVYrm6u69uVHvrLU",
  "key11": "oo5TWpMSCkCyBYm85Y6qML5VorcwTkEE84R4G2pZGVJ6F8YpFJNLteqDV738NfzAfgDtzNptXrqkd5q3Sw6eYMh",
  "key12": "4Y84EsobCzE5pJr6SpXYymEFvg9qM5VU2ZQc8BJZCVqDfifn3dduA2ZT8VexZsp6eX2vLWqjbTQyUonXhhb4ePXZ",
  "key13": "2mxbTQWgRVcVDAEFUb1poCWP98U4UFBnPvb8D32naf33wb9r6EEw97qquyvY917Var4FhmdB1K5BhJJQnrWCF7rv",
  "key14": "ZV8vq9Ns4Fc2BcAy5L26CKfLdFpVxrHWgT8i2gL84YZREz77xjKhVFhM2qsRjuxqsrWu2TDvjdqBmYoqdQRYWyv",
  "key15": "4ntA9wct2T9cQgBTbiGCCVWBpZvqGr41g5Vy6Hk5CKfBhNdZQ6sjWq1QMqjCLKEEnCH2HzQc5tFpWM5mPycbvJZR",
  "key16": "39JzHGAqHRvTkPA3ydAPnizvdn69k4Pbr1ZkMEqZbqBHfqY4pUHJy4QYd9avyDY2xPnq3KK77MQiGw43X5RceMAD",
  "key17": "251wrU7f2bNDcfAM6CYwm4xHqzEXX5ndRAaoXsJ1fBGJbiFD7qX91Sro8Hb8ZvDQg9zWncf7kmmX2a9dJHs5EPWx",
  "key18": "5aiib12sc7r3GhTMcEVsPdeCyV6U9iQ9nf814rodkfKvVvtMnWZmAcqzVDBJpU47UrCgrAAj2BFNry8a9whxqCCo",
  "key19": "4i8EHcSDmsUtYtyB7hNTyCYese9cqcUtjjMeDJdruYeCyLf8Rsv1HMWxcPWApPK3dTpFj246ect2eiLpn58V8qeF",
  "key20": "3pVainRnmwgCyiQJBxXYGZRXpTQKQu2QxWxFg3xvZop6xYEJ9CKf5rJRBDaALdFhZja8iC1YFFuE2gvXgJYXEw7F",
  "key21": "5SSj4azUk5f9vn32grqgfhAmUaCDA359HJ4xSR11KrtnkY7TfNRXLLszeKHa7otPMYxvPjktMEygLh36XMKvkWK2",
  "key22": "37MmPzMKnqSRaroxPiZKuyfDoPe8i6Q6RYNy4oSeiio9Tnhf3tFwLWFK1CjTMYYHJtQDZYChwP88YrfRQcVpBWTr",
  "key23": "2EaYep8hhHhbY3CZnW6ZcrbRHRKdj5yqV2qQTuvffjJjYhT68VwrNjoxbjbdL4w7HKoLMhss5ZmnTHrnN31DG2uv",
  "key24": "3uBPxk3DuFrRf1DUh7qnfiY1oDDXZua2MJ33MFZAHPMBkdSyqx7kprrjK47PW78a2rHq6FMng6Bq2n9UnYtmQXU5",
  "key25": "V1MHvBR2iTCFaLmzt7XsJXR8SmdG1HdRpvv435h98Svfm9HtYFN8Ry9Z7dJ97eyY5w7yUNfFUetj2SbC2EUqeoK",
  "key26": "34aDsD45fvfubbTNkHxRwcvnWt1CAiwQKB7PTAhAS2Yj7EWbsWxXwk8pa4iy7J5VUYftncW3JDPJGJBauaRfJEAS",
  "key27": "4v5gzXBM2ZcMVYHJDrhsVhiYthovR9LZBw2kEVs6h6fY3bgjU7J5T7NcBuWkeEEh1Z9aAyWVcxgTjfuT1BfBUAQB",
  "key28": "RR8GGn3nAsybXg7pZ6WTDFaqt6w8vyXLX9vfb3A6ArHqUguF3kRYbBEetQZju1wvVW9bCEGm6BMpZxYSg3CuMDw",
  "key29": "3VKNtnJADXfuXViigJpMsBq8vFAQL1ymGnJeh2cHMRkRf7DWUS5ME1N8D5wfrScL5KEZL4R2xsNZaGmKku2BRQd",
  "key30": "z7DZqLs2uq7QibaoNH9Gig4LtaTzGJ3WkuZA4Gus4oFpSoeEbyxiYnQqrHR4PcDqToL5cLWhccfQRdvMHzoLzxd"
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
