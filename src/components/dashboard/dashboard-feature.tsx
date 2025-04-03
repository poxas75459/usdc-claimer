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
    "4oRcoki5thGzRwYRvGb2PyZ2urukrbtAGprdDdHpCLEnJbm1hPktjw1qaEszb9SzCyBArD9pM76reycwnXUEKekJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qzNHktWDnFmsBTUrjghJSr4FV3XE1K1aq5wghW6xy42StXd6AbCsoshsVRfTjnFCE6gdEjeWA4YJhQ5h2kVnrdY",
  "key1": "4b5RjSxVVK3fKSMYkNSnWDH5o3BqAoRGYHNeJ73BDNyd4qN94iV28ZkQsSq4LQgNmUtJVnByhqbb8KL1hjmRToz2",
  "key2": "5TYH42JxW4CoJDdzz5FGHpAoGMhmdi4BgNkrzsc2fUfBFRLMFdoWy3jsDhjpRDN42997GPpmvnBGyCP7y9NqWk7K",
  "key3": "34VLGTGQoQbZ4aJZwyJaCjq34jPsaE5pRNiuABx3vAj4erpAUgCcGfKy2tq2GqAtqLUfBJsTBDLgErwtBs7XBQSY",
  "key4": "24zq25Q9tjG5zZXakS2iwx6boE8R7UVNDG5Z7A7bATfrEk9K6qDaJR6rf6J7W5njmb2c1ST37RBWHmFSyfXP86Vg",
  "key5": "4AQ1c8WVu1bqXLAPypvFr8L3fGp5freQVr6rMs2omQ74yF5D9Vne3fkMDQ3hwQp5qTRqkFxEeSVtk89WSVboBbCi",
  "key6": "2z5jFsJQFaBsKqhLs51jhW6AhXCjK2PNt78jsjGRRndgzgQDjfXq592Ar8G35Q9AvTo65bCpZDqmCeWtUBs4cZqp",
  "key7": "4XiCbAvt8RKRHfb4XXwbbZSbYZMvmJibEMkhikzurvzRyowKhNozHYBPRMMoR21TmFkjVx8B212qAZMZSxEgEWZy",
  "key8": "5T5hSEktASvmSipyGEiCxjac9veuKBGENuQ8mjMHEuiGDj2QdSnnRnHpTdf84UbxJp6N5xGMAFDJhxFvu4YaiKh1",
  "key9": "4Nx1DTRjjD62EUWaPctwEjv14vm2SVMo1kdap3CN61CEa7ZsfsTccPoNAm5CUoHpW2gzorU8gbTbVrZkfefPy66K",
  "key10": "4Z9EuohQ3FpwmZ3YeBeF9ctKFu7X5XonDZLxxNEJXYHXJoLBLNyqJTF1EVkuX9Hxkq7iHvsYoHiEU4TCoMRoWVJZ",
  "key11": "5C1RPocpocJmA4F8d8WuNiYwzJ5wcAWzUgR9FUU77f4KtpC6LHy8mMwsEw9JSduXaUiktK4Kc3PaGccYzKZgW2Ty",
  "key12": "5wMSch6YNHLGz6ULuU12vaEMjpVRJQBBEyi8kD68Y4C5851V7U5Krp6RpWsqvSKkdukANxv2qqd1Rvr8oARs6g4y",
  "key13": "t4sJYGQvFXE6zLznqEkn28rP5EVYSKv8BT7ddHMXnyfvFnWoot26hN3wSDRAsvq9SxwRtJxgAb6vCW88jTmxHNF",
  "key14": "5EN58hGmNsuWZs8y6WVm2ANuVoaE3NB6fJF4mRRS2y9cdXradtr66AjvTUcGRsN4TKyrDqQGGEwyJjRXYAamRGr3",
  "key15": "2EUjMMwGBi77sdQxLA4WLjHv1cETF5V3tR3qrVDR9gdeRExSjfJ7EKrw92SwcR2HE4vgoAVFPnvw6RYcBtyZ2Aq7",
  "key16": "63wDRUM3uTdVZKFagG8R3nRQz3LPV2nRo3F3Z7JG4k9EKUJyrQKbEd7r27hxQbzBNdCMW2yUiDgSaXahu42Nc7sL",
  "key17": "5kr6CDuahyWCqT6W9wELX4kKBm8XjruRbAmKhoTngj9BDCZ7ymPANN9WuGG4X9aog7LRAWsGKdLzVrBv4a4FbQbk",
  "key18": "2JpCjX5YgpA8symatkWHwnKPzcdCsJthed4eUUA9dcHoXrNgRgaMUcde5iGjaYxWJbHuRTHDmy7QtJAu7zvDDmAW",
  "key19": "5DmiMPhMeLQMTbsnSJFNPthxmmKw5r25ovD9364obuKS7w3mdtCHhrsSYqrStE62aEhR6DV6NW8F6mbyKM1cHASJ",
  "key20": "htJKo8K8kAvZtUgdZ9C1UvirX4uCZHiyb7CRTLaJvyMtGQbhFMMRu1eQgro5iug3VZ3PuTW7X9btfZrQcHVzm7W",
  "key21": "37qBPfCyiugJXnSuTQr4L8ERwkETePu4yUfsRPScRg5N58rGZs1BPKdW2Tq9iwCDsnnBkSNA7oxkw5Sv7KpVxNqV",
  "key22": "5D6ybpG58d5236iS6GkiMQzegX4B5hzijUqdQXTLQ8hDFegkWyUeqMnBewhjhuEEHbFuCqQs4BtRYotx9iEPWfLx",
  "key23": "uzyA6GeqeadnCTcNia6SmyrfekEcoTxjYAZFQyxZCw1A4WFWR28oUKxhHD9LSJuZz94rrNbP63xskeiGdHUarcg",
  "key24": "AxvGTgm14tGL7enEHQT6Ai1Xf8pZoiT5hwCWNTEdFm9VLw2Y9ykUadwMiZT42eY8kshHRzTmxQ5Umy2168A1C6R",
  "key25": "5DrksUQL6hJxba9sLXS5qL9GkhSx8MkTfc6gPj8UKPX8rEfscuANBevaqo3ehga6DTv7dipUPmkW24XxukRcjnxd",
  "key26": "36wkYaziKEaNPZYw6oKvc3fZbfUD6Q65uuqmzQkxTmNGsfUJrDn9eKr6i1VnVLqXHqyZo7R2YnUbNJwM93BNUTYU",
  "key27": "4x3tCg7cZg5hhpLLfR7uzqLsHWQFfDVT1QpqP3rkyegdG75YmYfMK9Bp313JizmAfZkdAocj33qk5c1dLTLGrXMV",
  "key28": "knXJ2dbh9WU5A6RBa54figxQPMnKRm6myLv9vfPA1789szRq8rSdyHan9wfhAGqxSHX2y93mDfs8XdHN4rB4t3H",
  "key29": "4VvV7yT5wjRkwa7YWXYMcd2qnBxSNGUEDSPfhvse9hwbDMq5jCMVbrggDKyCspNQe8k5xeTRmvNokwiLKCmc1jmU",
  "key30": "4qd2mUs9iWzreg35eaUJHy2MJDBGrD5kJW7xkJQrKMzt1Tzwiy7tJBi5Lc4XtRi6dLu6gMsv22VuxEs4AuFmuZ3m"
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
