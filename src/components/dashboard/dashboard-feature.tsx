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
    "3aVZXv2ayjecLFingBv7BymK72twmrZ6ubQhZWFzVRarc9sGinLJJQWgjWzovtQWiabNC7M93ERQmUh3Y6UJzZsb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7UQYqU2wVtyuDq6N2ugidJJWJpaf6HCWyU22YLW8FwKrb4gF9yq4RedCuPYRgk2iL63vWKjhRBB92WUT6cTZ5q8",
  "key1": "2qpt2FwJY9JnPFoiNXNGUUoVTZegQeZTNenYw6VvLZSHEh6MDjoELKGiCSRW8eZPCMNBTzND9J3kA3FURqATDVce",
  "key2": "3rq2wJmRRZVjTBRS2GuCDpVQgcr2VLYXaAMT9PcCCsQfgCFGBUoAMrW6go5jZfgfJAgBYC8412rA6XvVpnQEneS6",
  "key3": "4iDk3GZXt9nxzipLCpuesBDCgYXN2fCSbmUW2Z9gRJZQvxRgxQq5N6cb2pWMCnGcSMvq97nsg9vvkegbYLmmLT8P",
  "key4": "knhGqbiEbJfJhrzcew1DYKZEouXt2uNd8q9U1T8L8BCxcVPcrNLGSK8WoeRJVcthQJ8cqxHkcFVpS218BbdaGVD",
  "key5": "2WxwgSvgM3Fxj1UfsEYLfdb5DrihS2ePyc6azMpLJcAfuxpKRHNVXUZkNK8ckdTQJZvTuhYqZaAWUM4rhzGC55pS",
  "key6": "4RX1nZ1sZSG216Hwoms9nZSCBQi2ErhZJdwHMhUonsAN1CeMhhgdN9qC3jvPH3fN4CN8YTBqdGCKzyDftjJTJtQa",
  "key7": "yceHK6XVwNGGAJVugjRVJ7gJcJc9NUchXgpMrV5eVTt7Le3YdHqSEZGHpLEJKsZhG9sbvfhLvw8FQkSPWkBBSst",
  "key8": "3HQFmxqK727AVaysk9toM7yUD4jeMWyRnhf8zUGHeWcfZ1kqTo7G2pRGf6T6qrVBmdtP14Zbp7PDyyk3CNUYY53i",
  "key9": "3YBq8Dv2P9Nxh42rp8HPdGADEWNN9iTJCxGrd3YFkKb8ALFGhHj4YXwhE1PBZiQhQaxk7jnR8eRyvuHtbWhAPLgG",
  "key10": "4kY3MZmBGLwXS7NjxxshKyvExg3duZ5TKdJsDg3DTd2g1hA2dEVCHejqXfuGKnq2zfjtXBBChe1cgKaMWy8QZxJq",
  "key11": "3kathqLCJqpzxrKhXVW2LVGjkqyekMhHqFV6GTbYtS7db1L4CkyFR85NdKcVcLJxiyFyLiYETj7xSmtHV87MQD3C",
  "key12": "61u68ScbkszhNDnxMqPCgEYC5RYVXRLf5xV1DSDZs3ZepaJrTwtcR7mNvHq2PDBqdyfv1mnSp1Krdhcya5wkTcUi",
  "key13": "5nrTM48Czkk1FeTdG3UCyLKTWTK4GBpf6iVSwZrKeSBrQawRaJCPpumeTPwSPbD5fujiAdZzRVg6tib7TvRDkWWN",
  "key14": "2qKx2tYRjzYex8gcsh6xg9CvjRicCGuUVybUNfkVi6oNV44EKBq2NCMeHBFWYxJ5Y2RzMPr5kXGXi4cCpKT8YunX",
  "key15": "4Za5hHQfMx2eTEMjfYMBcjeEk73MHB43XF7iUgG1BR6karrwQaYbnu9iFktVsNjE36E7coF2UpAHtS2mWEXBbBxH",
  "key16": "B2Rvb4D1i4DKagXJtzDuVEjCds6nrbeLvU3YSEtWUHxeYQRYUaZU7at1NTriJZdzTpqLEbjACdWQ7hykg17EQ5n",
  "key17": "5myiigN69d8FdFQ8kUH5iWUNdWWQ6wY2Wbk7Ajk5RBQL2g2h99JhaJ3Xhs8eE9rEjf58CrjBrrKCg3rVnaar1qsH",
  "key18": "2qjnZy3KT5iiyh7sJ1SYZkirSSgydHpNjkiicdEzjjXkxQPxiud6qosjpPj8iL91CFhV9c6KVDFGxXNmjvJ4qZ8n",
  "key19": "26W2kZab6g19isbmwUKFMyaDNHitF4U3V5mUFoqEetqPmSeU2HutUGca12De4zzub2Dq2awkf7AWkRtky19vzFzB",
  "key20": "5413LbaEZpq1NqzK2ZzBvMq9Ct7smjVM5bkFSzeM8j9J2Ld8DNtB2AveuPRUFGJruCTgsACSMNeaFaXVA48H8grd",
  "key21": "3K5SQpnLHWegJkiRsuwXbuT47pPJ6g9Qv2eWb5GocdsHLWN3ronopmCLzyopqEQnwvufNDPCC27crxvjhpuVuxKq",
  "key22": "3HAd9tXeG81YMiSwoGfoJbeycXaLEk9assKch9uXZSqYyEJGQ3bUKj8ay9HY9w7ViHveNQPVcWb7UKuSZgxqYPv4",
  "key23": "3QkRCUsCnLfwvXXaZoUgcXoYx4qR5iabakzk9Zn8ZcBoM2eD1NjphdRSqJDS8WLyYDmYCaQXzN6p4SUhr8REkNgo",
  "key24": "NtkTBGtYh3TyRP5WRQvKwNkzLNbchG6PcSUDsWeinkbEUWADjiwC4BWVpZC4Do8t6Jqxc9UuRKg7H1DaQNBJVAw",
  "key25": "51rhqVr8qqAkXtAkXDw3J8ui698LtV1EdBzFEV6LNAy2QsJwxzR3zDUoyahpRGKVWeCSeuv6zMgBkrpnswK4uFxZ",
  "key26": "42zjXfUEk4vRvDAPzKTp1PiHB7WpkabUDzSy8P459KwFQLPt5iVYmKkGLR1Qfg6RZpANx5pwbUGSRy3hDNd9tSU4",
  "key27": "pQAJug9PEnVLb2bc6iZ8GmzkJaN28PHtpFJKbi8JL3GmDCu2smNRT1SuXfCkmNP6MNHfeQ9FnaEvZwZE4nijzNp",
  "key28": "2rxyPYmybrdVaoxJSxFKq7BBrciNaX6HKTwNi2uVpCwRKajSPes6mjidWMXx3GhxrEG6mZGpKCE2JYxsg4JB6o9j",
  "key29": "2cSqDoZ3pdGyf9Z6DkEQubAjFHLbUyrWQTs5FFeogy7zYzvS1wojS6MGCY48CwaaSnzrb2zB1pLfqgsBgka7MUhm",
  "key30": "3mW6UFJzW8up3xbjv6dHs63V8Yt5RmRkTPLThZT4uGXArb1gkFw8gonqex2SeNurLxJgXqN2FeHW5gsjpcF48NAF",
  "key31": "52trbYBvXXDePFQmp2zMmJqLPrUY5E6cHdXQiDjJ5Fi73rDUpiXw3iw4QGXkCPG2SfiB5y55o2RycD72qRsYdzvC",
  "key32": "437MoRdvdq4dwUR4tebs5Sx4YLrGUVE83XFzo6dHG15Xgq1ixKn6Ya95x3wQoQWiiyJgajj4fmJpWPXTUcMBK9iF",
  "key33": "5fUYhQhrMTp4Sq2FGhykWGQsK9732yE5BBc4fDocD2hjDDyRjxxcRvGCb7FeyMX5bVTKikdkRUJMCUZDLBFXd7XV",
  "key34": "3yViWDVZ1Ugy9m6P4VkEzKrWbezY4dbySr5bV1oFuAEg1nL22ovC6x8GHMrVgpxpSkARJEw7ZTYepicdx6KstYBP",
  "key35": "3fcMXStvGUGBSfBRNsRNsdRWW41y2LyvxiihnjHSMcvT8fae228cgY8N6bqat14GQeX8tHSxDnTRv5h31CS6vVwU",
  "key36": "U5U3LhKYgCezrsQfXvup6btxN3cS2qkGK9NDdQVsVohXJgcWPGswBRCwbVbGKCEkszuc8FvqRYapSkgeDn61SKF",
  "key37": "3UY6YdFoaqj5VTSL6sYY97PuqnW5YnqiBUnqsR71aBiif86L8VQVb3sUisYtukk2sVXYPsPtiBjiBoBr8dwk4ygQ"
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
