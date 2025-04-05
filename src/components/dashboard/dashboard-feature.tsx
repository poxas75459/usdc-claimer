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
    "56XoTTNQ3wQ5qdrWZKpYugu8ZT9Fg8sktPtvJEpxBCqctf3jRCeCCDRKGQATKEa3e7Ue2CSPWUX9Ftov4nhJWkfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eGPgAk3YUTsaxbWGV6tF9uCCQegcRspGtaJg7VymeU3g1SbqCLPsXuVFyq22yn7fn3EyDdNzdNRjphe5bCt4MpB",
  "key1": "Cgi1fBMQdWBZoxHA3YSM3ufdw5Lo4hMwe3WQBnPUq1xduodRkhdpdvZUmaTJ4xJZSizqkQpAJzk7sNjkQhhfq4u",
  "key2": "3Qi7A5QBVwZUdYH3mrZgw4Frp9zpMAFav6J7fn1nFhkDGjtqsvfEbLef58FEfKg2r8Y2BqNZXmpxMuApPgMd7Q7v",
  "key3": "4vqBd8UufkfcPQxsTEHBFTuNGzKBibWgr2Sm1YzNezeHSnPBNaTknjDbB8nbCEJDrZfoGujULJ8kUyNrJHz3ATPp",
  "key4": "4s66LZzGoXHBdWZWqZNR4uhKQZbgqr8gsiTzsoaYqrJNtQUwXn2L7EaUkKS8abds1LwbGFLqHk5FuyTnFYBtfSGu",
  "key5": "3eKSfhMPr69cVdq4YdsmLp4GfNawuS446V2rQxnqgW22iY3u5HbgDyrxbPTkmHGFxpDGQQDWnLHgPDWW8Hd49wax",
  "key6": "4G4JhDAC918GtsGD3GsRUpDzBkPxbL4eDd6MhLZ6ESsi2LHzFfV938LxSd4foizPKxpZQ7q95cU44zPCTqFXWU4h",
  "key7": "4p6WveGHfF7YEUNHZuzmv3bM1FzMRWxUtx2U4Mu3C5cXnpcMXAdSMs9nwL9fCSEzE4T87Hn82ri5L1UmFBgSCcUJ",
  "key8": "42ZL2mkfioMuxdJMidGRWq5QotSp3mjoSR9rUBi1afLLokPiULfyrSuiLbpwuU7mEzBpq2EixpmWH9RHLg1dwnAJ",
  "key9": "ukmpazP64VQaWKYmgVb4esQjkzpuqKohoZ9pnh4DyqaTBoxifH9Y8gUxF3QR1qRQGdJn3LQ7iHiCBeQnTqKxKff",
  "key10": "19DQDvd1zBDjTwYuiUqXd9tDTuQfmqxaUJizYeAxnSu6KbuZ6xwYdrL8RGsTnTLdejwNjyhzNGryq7iy23iUAEo",
  "key11": "5M1pWMTfgeaNiEXC9Ba3e4rDwtsUMFq9pmp4xgA8XEDfSqHGUKEBMpS7joytrNCy2M8BybZVPrEti2ixM9FEjtp",
  "key12": "gHCbmxw98ZHh22XYx339U8qPnNDoghgnhH65MEPUKWrD9M38VnEiVGFrNH5aYGQzF4m4MR3uhkqBvpuJEzckj7b",
  "key13": "3n6ZBEH47CNLVDEGJbjq5dW5HhdJyQitE7yMnSXZgf3psGhZ2kR56CQqiLNeJS7xbjH5SEUyXjTbpKsG4dqtUyxw",
  "key14": "5NWXCnCSncSeoE32VSMHVAzwEdsVQJjfECM5L1sZSegU8KvqViKWaga7BKKNSWe9uP4NQpoUprTom3q8T2M9Xnn9",
  "key15": "SJ5owqBRcERQgNhERmsmZr9AaNn1qEVM7csA7RBxqHaHFF1nCEK8BiJC2uMsPe9ofMdKuoupWC95gxqCba5rk69",
  "key16": "4mgjcuiodC368ASmf6P9AKah6zoJbzd2yyL5sQxizWCwiXw4mJLehWTzKYmHT8jSyvsrsmrUdbspiriC51M1YKBM",
  "key17": "367m9dhNgj38Q9MyZphpyaD7eUrEigFF2b6QhSV1Gz3UqEhin4XcRVSTxaGsfsHib3N8EFNiYfjcA8Wx3VZZcbUm",
  "key18": "4BDnPy1kvz3VjXvRaZ9TtfpDm3k2kvhjjMDeSwjiRD3kBKSoHjp4F1GAtqE2GsfS9B93HFjMPcZTKepJdjVAdjVe",
  "key19": "5fuhsxHGBKawuKY5Cy6xyg3ij1dpoLhMFKgQcVe9rTFWuq5XRGX4iVW4kdrvKcc1m16FY6C9faMQvaDtFTxFFjQA",
  "key20": "52aUHgQbjPbNbAnaSYYdkxg6RL3eA28Gu2XpsuVwAYZUnTprXP8Tip8sQqLhmYKDfQ8L359DsCi3To1EmHWJBy61",
  "key21": "5Wc1HvYm5gHtzZsA99Exu9fX5rvyNVCwkKAcy6q3skC872HPhCHQiLdvt56ijcqRKcX3ettsqwMismLrbenYMRvX",
  "key22": "4i82B5v7QPSpnAwqqxb1BSChFHfmHZMfnvAjv96nQWqcVciZR313fUGDsJR7N9yTDjYxnjCm41fX4Kivvtj8gQkM",
  "key23": "52iZMH6ergnAoD26KnrfbZF9swRVMiwgt8UCragx3tBNHvkCNiWkvEVpoi4zxTbFaUvGdwMky9ptaPkZg37PNcHa",
  "key24": "4RCtK5LF6nhu8XywJCDCDaGTGUAdocJvfzmH7gYqrhBKF2sreU3mxCjjcgPrxVK4cYuJx8DnEncDeZJ7jRNt8X2a",
  "key25": "3XN1MBGJFNjCBJsT3Gan3RusNm4whw4ZvLyTAjecNTQapEet5wyhKqvM41VsEu9VzHqRqU8ZwwAtMVudfAtSsF83",
  "key26": "53ke6zRpqTcCyPcJvWD94PXri68igRkTbppVkVDrTfsFDa95Eks5nM3X7fR7qDRHv8JdaUAQ6hp8kNpraLjvD3y3",
  "key27": "4nHSBfUJSYSmyUgcZRdAF2NmY4FAAN34fNBftazUTJQnG3dJGr5uwrcLi47TALBxgxU2zp2RAzCYSvVngBLrzApP",
  "key28": "fX3D6N26Wfohu14Fnv2tV2dMHUWsp9swoABXrPbuA5vHvTfh9jfN6SvoAkTebwRZ7Hu5bydTGzY5zhtRrkcqvvk",
  "key29": "75dvYNRa7puRzFvAjEex85zJyqZFYZCgdVrow8tykR1SFftMcCFa51R1aoCMzmqTGdwHovyzUuFxGokNntWX1cr",
  "key30": "RP5PGL2mwofbic4tvhudUeq72aEyw2T5YbEUWczQZ44qERQTZBEVSztK1JxteVaFApksr2yekVPnGL6uHLoSXcG"
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
