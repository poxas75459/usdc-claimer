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
    "D8qccM67E1fsLsuJv2Qi1bjfHnjo4bLTjXXhNnaXkPT9gVn6kfA4nJKjWXWKGHNiA8ebA61pCDLtyFFrr4Cigmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FkY7gykFwna42hZBcxsTqfYhBbS9cMhLkqFfX3nfm3iHSoyyGkPAwxDs8fBTiUBuZ5FhCFedH3Da961xG3zbH9u",
  "key1": "3ndFJZTxqs5DWssWmioLAa4gScn1JHpseoCZ41c4y6k1FfzhK5WESwZozuqmybGnyPYjsHdmmkH1HjEueY5RZVfF",
  "key2": "mseUGtxZa79n1TLxeMAkmxC3G8dgTcrty8LpYDJhurk8aBqxy2hRM7ad2fQ18UmsFHdqhPK7WwBRmxB6N45bUAQ",
  "key3": "3ZnjTo3d8cwKSeNENSF5Uh97SDAxNtqmu3PPL4yXnvY8mqqFTqQc7Ew1FGSgkQHbG7MzUzoSwmjNRY24VjszChvZ",
  "key4": "41bDmSY1uye4qaf1oB4yVX1EbX5L9f6xSPkzcadVzXguGRWzDxkBxPTA3W94G7QvkSkNfm3hpxYx8V7yn1ermcW5",
  "key5": "csYm2RyRVfkv5VgrKUtaK2VKHH2cgnPKEwabsxfFrHK1qfL6u72Y9RY5bqS8tGX7KgHcSPXZrTjv9QUgaU3W9E3",
  "key6": "48tfabYwgE9fBSPq6HbXUsn1L9hewZ5uUBuNjuNbTJijp4va5ThL3aCgFxaMAqWAb8my78BxjKgF9xFo3vRoiuqF",
  "key7": "3KUdtyRRmxqYMCPb4zBbzuPXSJhi5pka9Y733i9WfWbCcU8RsKDqrmREUyt6pkvkfSkSYWpU9MwyeTzCjFh35KFE",
  "key8": "33aoC9i9zPwhCmvtqQ6Dt9yKTygLt4AfoKuowKaMp5XJbrLggKXMV3zH6SSiD6ehanut6tJLhjMtQqWsQTf9cQiA",
  "key9": "2uZ6AyoJBKqrsD52EvAqiA9kSMvqweFFKThBrx3KmrdCR6jQSLp4Q4Db884f51KkJpCx5BmYHMYYMKszvtBM1cUC",
  "key10": "63tdQAmvVFKQtkDZTqdKb8BkyrbJbrcJyTfhqczdMiciF55vUZWtw6CizL6SCBXrhLFT7aaasQi3d88obTefre2Z",
  "key11": "21mUx2cdAWowZAAHaHn9hDtJjFP2g6XGfGK66F9rkQkZRA42bcVgsWThaS1GpiEX6kM7oRrwcDqVetMJzHkzC2B9",
  "key12": "4EiwimwP3WxpJ8ss76uo8F769ViuiyPhtrJRhNDTbT8X3pf127VKXbBWYU9p2P7CrPJbYnGYineuCrgdWYXA4BDd",
  "key13": "26jqnD35Kh4R8KJXUMWUcLf4qNKYChfAj6d36PFzf75akJHgh5GiPqtnkR8w7txCTDuFTo92MJFj2LnqwGRTDKya",
  "key14": "2YruwLW7cn3EdQiKP5bwMvSPwqpUzfBSyh8p4D8oJqeDwwmMw27VNXX7mtTM4VauVzTtvNZDqd1bE3pUEmT3oUCt",
  "key15": "2Ywq1AwUFyvoNPrgENPJD8ioYVXtBrB7q2TERRr2xTp1FVq81Pzf4n2LNq9pQo1tPSvUJGTqUjrdDWXLBuAdrgC5",
  "key16": "5eEjsNWL8QEh5GAkGV5ZnSU751hJConzGkrbGhFKLZWxpt2kaP9YarLeZELF7AdGycyXKc45yLSBZZZU2BrY8q89",
  "key17": "3ZmeXdhb3KRttcEdUXhYSCwmCN2eqY6zeGpTZXhrYvtq7o1HJi1niMP6zv3ahBJuHu3rVmZqABEbuQLNgNTmRxHD",
  "key18": "57HkMBTugzF1FqGLsK97cq3Cmk1TJ6ZoxL2T92Dj3taSWPBuL1WRJSAicAwLmKDYQt2w8VWEfM2WnSpLHSyFgnAs",
  "key19": "4nit85ULhzfvbD6wYSg3vC1EyPNcZFhY76QjSWNGCULSAFaAqX6wbTohhgfb1zcA9NEdoAf5gXbcfuLgu7u3Hjk5",
  "key20": "3bvNeF455XVyVANkwsKc25goBCyCCJ7H5LmdRUfsBP8iwjCWdRqdfMzs3xfhYkGCgdbAF991YVbHH2jw7p5QtvwR",
  "key21": "NKY3oVWtW7kJVrveWVuVBpYLSeRbYkb9UShpuFyM4younq9kZ5TxzvcCfS54neqRvd3yEe6fbjcBaGSo5s6FfWH",
  "key22": "2sHjaw9vvxEtUdrvZEDXKUnd4DBu537Rv8pstCY7vP8nWGR4gk6oDaV9C4PVGKaZdpDbjv4SarcdA5hSp7nCzp9e",
  "key23": "5aNgsNYxwEqNdwmoWhsqFpgTwTrfYdjcsgiYNnRx91icFz4PZBugoG5XmPTVRqH88AdCgqyXWr7JVgBa5EUBNQp1",
  "key24": "45o3yhAPzTJEEGs8K3VSvwUNbvKqNeWmcaJdYM88oZXrx1uKyUMWPcgU2NPp4YBr4m9EGReJ9MR5TYxfGvzaepJF",
  "key25": "2WBaTdCGSBFZ3GF1cMg3qusKXh2FY42GUCQfDd9wDXrAh6PW1j4fNtG7b4k6L1RkrkE9KxYp7nxdBUhJe4Je6jpm",
  "key26": "YXxouHTy3qb2JZLzD3bVdZnUt9cpAXtmhfjLApj8rPsoAkwVkJvyoHeuZNP452eG4tjPpHUD6wcb2ezMrb47xXj",
  "key27": "EVXR3pBWKzXKhA1kJmipeBzGENMPuomJ6K1ZUvahPJU5xywHGtdpbDgijHvJhPR3UbNykU114choiTtV4L7vCcj",
  "key28": "BPcryQAVTe5EhbWLGSaZbV6pYgUKpLz32eTfHLfD7FmgqFypzKD6giDK32XFBc2vGMhkGrm7frmuALETz2N4gby",
  "key29": "2tEuz9atpAQ87hB4TCHHG4tq3TD3Hbc8pfzqzXoybbhQSvas3EqGd1bwxdEyDDd91v71qVvXvw2UYj7r4bSU4iPt",
  "key30": "4GUG4yTE4paNWFMdodXmG7b43varDhX3qbBcRK2rdCYoKfnf8C4F6A8yqiVQTH4Zjw9Pria59LZUv3kqyXqsQt9y",
  "key31": "4Yf9eLuxYwQBA3C22b3iCQmfXwmMhPxM1XLPa12pAVsvEMNZecrg9e5ky9Uj8PQwXMPwPThH3Y5yrVXxo75oSQrk",
  "key32": "25WYLpbNTDQRspEhp7vyMNXmc2m6Un2vrZcoybUPxj1pHWfydrExj5iH6okPQPKCqLKMozjJM3j3hPYg1izEFw3T",
  "key33": "4cNxBbahjXosr1XQ7ojmdA8Z47BhWYN1eZhw48WFQY5WA3nLZRLDob8iWAZYvoAVcfVxUWesiVVbb5bZaM7togks",
  "key34": "5NmCLynS7Ybsu5UEji2Rnts2RKcNP5GrpFR8zrBrCaxtniEPkizfjUYmzgc86tXkH7D1U8CfbPFiC2AemipV5QWK",
  "key35": "2QQ2hGzuEzD54o2JUdGxKzHZUpyPEspdFvYB3Yp6VdsbV7qRoZmQ8FkG84GWzrWTkhq1cQxESNFeW8Qxzvg26BKp"
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
