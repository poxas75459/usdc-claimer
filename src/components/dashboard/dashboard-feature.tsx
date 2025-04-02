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
    "5x8NepqSggKo8aJb4LbrJCrw71bPUe3EvmJgpAEGRTtEYrCkr3YSEep5jWLpMNrefoWzDyuEYDw6gsodPte2CuFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SEg6QGmPadNyZKyY3Ceiuq5YxoHWEc33HyFQsA2CYZLD7YvBqhxG6df1ahzSLkEFxQR8sLbYSCYZNUYd5BF8DqL",
  "key1": "Z2Q91i1BaXfpCMGUFhCV8XSLDeZtM1SPj8uAihBr87DGPFFiRKKJdg6Zw4gZ9A2HefedcQ5SvifU3qS1yJpXdYT",
  "key2": "U5NKstNZaHq6Cvx7V7dCVhUCAtKLAAjRSzAMhpVgKtCNKV8cbxohkBGKPMdbZwDjrVt6RbZ9F7id4Z1CVHsMjPu",
  "key3": "28czrv5pjQmKBzouLmqFHvWePzG5Cqg95ehMTDZx13MWUKUedPLAKmgYUfz4feFrrr9P2kQc2FpZ6wceHx4treMn",
  "key4": "2HQn2NpwBke2GAE4P3jB5xWdaDMcs75P4LFbc4GnNkNH2w28sDap6DcTHXqVHHJysbrwhbtaARByxqREUeyLxUoc",
  "key5": "3uDLNUXzH22ns8Eo5PhXWG1wyJXD6mRK8Kg1vrE3AR3sQG6sc8rSyw1hSXfuLCPDxai7hUzfjYarQ5ydo3U9h3g4",
  "key6": "rfNaHRDKyi99qgVqdvW6UnVY6BC2VvAhNck4FdKksXYQ3pU5jGEFEyZKgPapn3o6TqBy5bgkUBFhuCVFWZtfDes",
  "key7": "4knMrfprkuLAUDsmaj9TNBFCz5y6P4TuRinRfv2gAL383xwJ27B1kjXhU4ttF6EoytCDCWNSrVJRHyfSd7GZiUj2",
  "key8": "3ZpenKurca9gXwhgN1AsWvVHpjgYNZQTn8bAeJTvDdFfgzEQRCbTuH6CrL1sVdZg5AHzTNiGTsDvcrkGYPJvzzmK",
  "key9": "4yX9UJNfMGKM9aW6efN2vCHvfNtCnWQokyDzgU4eF4ssixistbVm5rRV2EZCeog68yESqGXcrurWjwJ4CSvEqTue",
  "key10": "3LTGVLGGPLruwnPujPpAi5YEh4zEqCPGxt2p9qWMRtbQcVd1d2uNnz7Qo3sECyj1wQFwD7AG6hg8w3ZMFmySQyMd",
  "key11": "5mDiSzQ6tu1spAFMio7vknqf1f1JgqaxehfXPWV3mHiMXXMYdA85jbDuSEkbd5aaDaJ2FLRZuEFd5P5yuZ3YNzhX",
  "key12": "68hxEYu6f31qRwxA1Uw8htC8J8kiYhzfqNSzwPePmhC6kc1E7j8FdiP9phzjggTakgESJvNMzmapXc75H5qnirz",
  "key13": "3wodYUk1S6e4C6tzWBLXysWckiaPCdZ5poj2JNga71QeHjQTFfGj64iU266Lc9BnYPfYdHEEH9ev87PN1FDRgFFK",
  "key14": "md7Gyx6YpAQST8VkdPrFEaNzUyfaGC8XkB4Z78g9rr7RxXrtYqXch1VKxjm8BJkhayNJpNY8hD9psHbP4CEyCtT",
  "key15": "4N4HrqzEHVJ444eXSm48aCwj2s7sEwbXyp5yJTqivpnMEVh1euGwZnEMxNcXg5RbdgM7rFDS3pSAuea4eQ5sC1os",
  "key16": "9sn13mtBvjaT4bagMi6YWjjxacU94iXJ5w6M96enAv6UmK6E3K9fmAjHnFyDQgokkgzRBQQe7c3iU4tXobH2FG1",
  "key17": "4WHXiRNpKeFgb2PomxMbgbYeKtUeuJq7DGQxLPUSj3NNG2R8nXi3RPC5a8iLUGscm4sdD5Kgdt2NSUCjexTPyRRf",
  "key18": "5X9G8uJE7J24UGYY5JeCVjjMp89T7noQCPd3nHwDN9Fc1yhdbD9qMrDNwxAtLntSTbWdE6qEVnuQfsrTj1BHh2as",
  "key19": "2XGPBRqxHzKDKMR6qZk8V42vZSjW2cjjq3MnpKHs3wq71f7bVqhTHj7D8wZ5828us7DKVVqxh832ByT6WkKdHMfW",
  "key20": "4ACwprGREZHppxHXi9rB4HHmn45iPZzmQiTzkn9UEqFyFcbtMCjHYTqq7oULxowmZxap4UpZFktKnDAZeSLdhgsS",
  "key21": "z4s2rWh5GJZtVubZCUjfkbUdHCpM4o17RTLnZR4GCmkAgjpNfH8FQM2gmKjruALGuW6nfRjonv1byNcau9KruQx",
  "key22": "3CgMJUxQPE9aP5M4N3WY1yL37bsSV1kXLKBeDjcqTeXXBPKeag3Bbx48DEmYD3eMx8sZhBv6rHUXETNMf7DeKNRQ",
  "key23": "3fqhsCQqonjV16FTcesU9tyji8hiTLJ4viVmz1MmMsajBz9EXsnyUCp93hfUU3oLZHvcXc3M74ux2XEqYyRYyMHj",
  "key24": "6TogkjzGxgu6ruStxPsuo7FAsbLR72pafssK3izBEF5zeepJnY91tyowR3aZ2UVFKvBcou2ezaCB9EVhKy4QHTC",
  "key25": "35xMFRSw83yGghpMK4hCHRtfw8mxc35hNKcmDsGshBUkfNeDFmTWA5J9xD91RAXPSfvxAtdHN9thfVeirRDeemj3",
  "key26": "3vYtNNMpt2pb2mYHntZBG6b5ntut57NUndfo6vxapfoFJKTfc7frp4ZyD5npvHGUJHZiheXE2rcCxbdvATqh3tLr",
  "key27": "2oZnnrFN3MT9zB32SfFoqVZa27Cc6Ro3FDSeLuJatiBQiAKgHUVfUT55wJYdcxRpxzKER1ZzeEDKKJWDBHK9qUhz",
  "key28": "gsT1zfc7HKVjP2qRrRGr7Y2viZszJx5LXGZjfufy44uufQoTAPikvVEYzNjEF881W7iG3gqdCwuKaFHpoQ6U2a6",
  "key29": "h7rsng1Vs8TwwZByq6WPLbPKYUDNdGG1nDgUgjoxyAChSdFBCh9dXWCYztsjkRVQTpAtX7pcnKzst6AVHSz6o5n",
  "key30": "aEjJ4Xbd3U5xvfcrQTAHD2HmRJMwvcWGzoAmfaMMAoUzUvWZYsrDSjthdJZigsHscTzB5FzRYJ5erK67C7UrkEe",
  "key31": "3QfhvN8xj8z4uX9TSm3VzuZJ9y6ddF5pqW9exFKEDNRr21tzaiwjgZfBcWMGa1qZbeNesyugoPGv3giSTqiiap46"
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
