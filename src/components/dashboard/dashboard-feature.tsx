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
    "ofeSvGxXUAgg4bYVc3me9uBfD4fwi7FUPCD4BwMcUnQ3phAoSC5i3qWC3EbsgzhB5rqkWLj69jaCYVvLMtmhCnr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UfejqyRAVEzfcwK9Qd2ZJnAWazYTX6S7wnDhxdhrWTwymuaMk5g25oQU1yTHvZJ7DBY7wfUxHDMpCrmxURTmnu9",
  "key1": "2bowM4EC6nXsQJg6XQVD4oVkxkt3Vs35WusaFgP9P4PbN7NxD9qDmxhDTMfLLUUqqprfnWBRYqEahmzyxVZBPW7y",
  "key2": "MApwSFEM8ARGYcz4o2W4F7YibavvGSXue5qz4caQuYkCDZyHEA8HcFmBeh6bwmHFx7QWAUNQCTgvuL6JHqJXHeX",
  "key3": "ywFGFaZtVH27eawTiNv7c4pGPwoqM554ewJ7K2urNiYCfuqX1aRjNTi6xJSrvrXJwv7fvjzEDZEzPaDzBMzByGs",
  "key4": "5SxThZg8ruBrrT2xYWkCrSVNDWg4Z2cGLo3ZiouLefUn9kKUjjkoFz4URvB8P92i1mDnU61dC3Hb6KrbE1fHfojS",
  "key5": "4EbQfhYkPX1xYpgKNCb8rhxt7NrbUQMvtmWU4FmevXqRJvBgB8PwyPfjHw9JLw4rVdcYZDHzxyy1opfhaujY4s65",
  "key6": "3rukHvDAnxL1W4n9oeXAPquo5XCfkUd7TypUM3GP2XbPPcZyjbMGy4rHmXpDHmT52gHf7Xw2erb9Njc9L8pj34gm",
  "key7": "66WKNZSsq9cv9mWeRJUbsxexhE1RnwSENj4CfXRsSDkbUkxkExW3EqLLW9bt7WHRRYYYDDL4hFzPb2WekMxs5W7F",
  "key8": "3sZLDkbq2uyzVDuUkBtELgp3nJFTPo8x8Kz6VVFyrH78YET8mvtHDfGopsSimq7C2nBWjRqytY376p3kvbiuiQmd",
  "key9": "5SoNDwrfbtDTFrbnrkR1RYFr1gVpe77bUE2zawyqpqh47NuAt1TAF4SCmzxMRT8CpAKZ1pqLQv8N7EHEnEqjC9e4",
  "key10": "24R9cS5pfGyMLAKHKqZTpMvXrvFs7idqpqRiaKtiDDwmoyuFPR2vuuXV4hBERZVWXeYcW4TFzCv1WXvv1d1wkMqp",
  "key11": "4ZUwYAFCtFCMy4wLqtGRt1sRfh6uufiBYCe1jyVDXB1ZwpvtW2eiNfjeNk8RNp85B2xE6JcqhcC4z2wp3gpPNeMH",
  "key12": "4LLT8HQ8eNmRGZAEq5zmWWLZ4k1DeQmxb7Lm6EDffi33aDdnyiakm4dXbe6Yk3MgJeFHujVZMqEppZD6EnYUgtuV",
  "key13": "4bdQyWFeJLBHXMGYZUceHn2GqyhcyHRkunEEKJVVEkZ7oAB7n4Bwu9ffhQh9ugHGv9yvUELaahZXwC9v3GRBhpeE",
  "key14": "5QEg8hHZL18XtyUsyhbacFWAXaMkKPYEMXfQXSLGFyvrX8eNJHeTCL8GNQVjPoY8Uf4NpXzNZtdZw167PfLn31B8",
  "key15": "4xMZan7CWytZt1LJPqpUdqTV6Z75weyacqZ5o2rxktdfNf8fpFXAbke6tXfwjynDJ3dPXNtejpxP97AGYhNpe3ZW",
  "key16": "3M2fCUBXh57Ks3Y7qZDTyBkFghs5Lu5TmisNvzDVDG5LfwKGkTEUSh8aBoybFbqh7QJdkAWPBW4SpodP3cSGnMGW",
  "key17": "24E8jX7yaUGe3hYBga8TJE2jkHtxTi7sgfqNv4ASJjrGGkAE1UFEETqe64VZ625KpBsher6b7BwkX6t3AdAVtZVP",
  "key18": "5Mmaxx5yveuMnqxDmPXoH3rTGQqzg4Si2Q6Gq2SiyLR6M5zUQsYZ6z5eEKXYgHTx7Du43z1HjqoFqyzh7B8xwrvw",
  "key19": "xRhY6FLKnUM5PEEa7rBgEgT7XBaU8KCF4TYBnzPYhuCouEdRtagZ96nVMWzg1ZaHPM4QgpehNxgGwnQxcejk6Ut",
  "key20": "3Jxw4HLhDJiQh4gsKz5tG24mhM5zXmsxpS6Xpw4QoxvcXBKabiVJkPqR1mvJQbcPFFWdJq7YP2hkxQ4AJyqtxE77",
  "key21": "2DkL5ctCTEtChvDXcqkTUEFJteQnzkW6CRVsSs17hDP3Exdr7eS2MKGVKU54saRyFrd5PRtS4m1vtttXnpQsWwhx",
  "key22": "dtzezZVSq2tuUVhVN1baJ5SionJyMPhu5L1mxf7VVsGP7baAPqR4YQbNUesHTcDH546SHwZpAV7cn8qJHPPoNaF",
  "key23": "4Tpf8TNSzZe6XqTbPBEfGfKaRWvkEbcu5AGxf1spov53Bw8tigvuNA81hpxpT7Z2rfmdcT4t32mTn28QqTbLog1c",
  "key24": "4H9TvXwjyf1GwdwD11TrsmbmgiXxvXi8M8w481q4Dt7BT1n55fdxrgKqDq6ijLj22KYCUDPZnR6KmP3HpV9MxM9M"
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
