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
    "2pcrHj5HHWCbMhKFFehEMDNfvFcThhKKuNtmGzockLqE6ejNguU82hBXsW8cqDuJ6hAew4PeEybuYGK6rd2mUNQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9o3rzLUFrA4LNgqnFwqbXJp4T9a9FfzkrmEWEJTfKFL81Le326VzcnnncGABZWJCsE5d7ioY91dJW2pVMDhgYaD",
  "key1": "5Qoqe1xT1t9eDvPcxYmuq96rA9VeWqqpQysaoiozFPuPrE4XWPdcjQm5cYG3mfueM2hNdGwzYFUTAWYsVszHeP2o",
  "key2": "9uwXdRVHzbGcgKyDWZWLTpMQttcdRSvasbWhSaBepj6qmERuQF1rYNbzUWTgRCQC1xha59tVqApXjTkSxbEADTr",
  "key3": "2EGhjyx1f2EzhvMz9WuokADwkcg6J4gCcd1gceugp3RTWhjuTABxqMoy3X5UAkqnQoQZ84rNu4fD6hjM8NQs9YUq",
  "key4": "49ULw1CZJwM7v12fcqTsvcmVDg4xdRHLpMKywg54YXUaTrP6D3WjoiDYm3q4RQGV8UWgCViDNJXDeBKjDS8PstYr",
  "key5": "5heNQeQHDjWrwQ2yVDEX5HjgG2rHRFm7ud4rZ8rvGYvXU2B7m99mBwiAhpB8r59QAmxzA4iYu5epkbCmZpfqC4iL",
  "key6": "2wEzPpzqwzzeUu3esR6iiKGHW7FRHjuQNZSDQmWRU3fUxoe8owU9CTAjayGaK3JbMfmF1VzZDaJz1J78j83ERQY9",
  "key7": "2pEi8xoTa6f3k57JTn7Hs9aco9FRbfj5PURYvz3jFgDzxpxtYZ5HgSryTG49mThmnBpdHyu58txaJ3CWAB17YR9x",
  "key8": "5kg5nBUSj9rCHkh8CPoWAduY9e28jDZvmXE6bj9UyA7zHJAPRvz2uhpJ2jKgywraJpPPtL5Tr3XWzd3Yz3X7AsxH",
  "key9": "4D9WQCtqskKFwxcBtHoo7DoDY5R11EjhKnm5FGYoK53nGTT7wfcJgr9VXXF9LV22swThNXhHanB8sDdJpuPmzkYM",
  "key10": "4FRtFeWLW5FdHeXqL6HqqEJLTthywBH382CY83pinZi8ECdgj3LBfWoXczY9CTRcx4XSvXAWRZ9kb1Znukn2XRVC",
  "key11": "2VUuigrQzC978v8wYQdQbStDGPESyJk9tqCiKUqpWXXh8TSEzRbWufqWGnUvz51PHirqbYoP48zuYshJYsntySQo",
  "key12": "2qBQg4kCwkgoP7pL9GaQepBZHmZjAj2prYzVGV7eQKxMWzKuaoD5SMgXswqwV7hMDAbrE48jV8Aa7gzFeq79wan",
  "key13": "3inG7bZNgSxHkC4V9gYaCLACSCgpJY4ZhknRknPFbUF1M8b6RcJgzQtyHpusMrpMpKmtiaWJBDCZDtVJeTNhwTmP",
  "key14": "58YSfotKCWYgKGwgFUsiSHza4FaEovdF92MDkbtPCkhrrP3HvptwDnJq3xy16y8mgX8weQWoASQpGpBDkV7Hz9Fu",
  "key15": "5SG4GaCGyreKEhYpE1kUDTpWEAyV1QBK6XsZjjKx5oxw3Gc4CLG1VSaEwJxhRY6BSmNvTwJJGDkGFbNBZaSuKBGH",
  "key16": "3JrsGtYMsdZsr5NGRyZFxbHBCfWahAtQpBnKHYNambwiYVpUxJo5VEmsHmAN9ymvo9o2Jwg8Z8GGvWN1j5cwzuvH",
  "key17": "4uqWoWRqkrosmKdxYjULSMoMSxqQHXvYBQvqetfY9btpBHZShjoE3AXidhjib7nzdNdk6BHGTSHDM1vAv52Fk3Gq",
  "key18": "527AA4Ye2jUjJ7Fgw7pmERd8EZseFWbaxWcPqVG5jK7hX9r8B5DCLwK4P3rDQWy32fQJVNE6epvcozomDRNPiiur",
  "key19": "3FKT3ZVcky5CptyFmBYvGJ9ieY4GhPLFE5z2eBQWjBQ1Zuuh3GMZxUepRypq4TU6FywUifmPBWPA8ErHT8pgZkcM",
  "key20": "48umCDdbJSm2EqmzmDiBJzgNf8cdq32gwRnikRPNiZkqL5ZhMEUMBp4U2sbz88AGvq5sjpn7DqviJb8bTmSLfZ1z",
  "key21": "3b8vAbAik2FSkftbGQqYgrsAUhwU18diQuciRSukpyo8kKw1keGC67sx4BL35DHvtCPc2hoB8ZL6hjLm8TpHzaPF",
  "key22": "zTwnKYCw8LLuuuzY8LySWSBuW8rZKwwoKrPQNsdfaPbQPbnjf8tBPTwiHBEww9rGrMz4owk4FXdGmNnVrFhNZeK",
  "key23": "5cVpibCdK1SPtoBzXoff1uFMVGptApC9s31nWpmW6njjfVfsCDF2ymhvsbd7vQhkv8wUiGWRcbzJxKTA2tX7P83X",
  "key24": "64cV2ak7GjkuyGWwv5AkqVJfF16msXpRGQ8Un7Br4bw7zsjz2QnC9K12XYHoFMP9EzF9jLe7Y7ELxFzHae9yyE69",
  "key25": "5RkLtMQS43kn1iCz34ZjZF9N8pXxQwgDb9ihWBKvWJvDxShDRtn9LuDWEFRWL4rGTPFxwmHwJrnXuUbHM2B2omYR",
  "key26": "662xLoEafTx8TYZiLjJXfHPxnmhrt9tMLe3tyvPzZPYsqbAYqDsULGbxvJWnsirY5XADRYvoWicQoLvomEm3Va4g",
  "key27": "2m2bT6KKNgenqbWP1YcmCdfvX6djQpSHugvSFxGYntp5TVdHq2ykxjFgmzgxxJEwuL1xpxG6yNyxqQ4DG8QqvdxZ",
  "key28": "4J9qtovv7mWx6o5UYcrQLYT81x7kRejK6axVK8iZkTYC1Uh1gFyn7eQKFNypqwUe6qbtxReKEW4PkCniHBFDUJY7",
  "key29": "3xi7URhVJxztD66zmUu1oU8Pw4jSg4WsB6SFhJ2rMtSYbt9LastJNcENvCJVpT3xk7CvSuuoeUDy7qBEef4QDb5T",
  "key30": "3piza8ECinskdHnu8thq1iDK2Y4hKHhXyjVPGXwXqJwD57Meh89n1Yw3Dvrm8fVPfrBzVbrjQeJcNk8EoYzZrJKN"
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
