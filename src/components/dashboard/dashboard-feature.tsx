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
    "4dTmheMvk3indGUPXZm8RHb1mJjME5U7CCKS1LJrgaMJDPHmhSUt3vLh9aw3iJve5ob1DRDKfoEjff2wzWpbztYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29LKDkLVcbVnZo5qM64EE5hFEAaPMZqiK6fchexQNxnuZ7fCBYvW5spEHqCWp8V1y75pkDbY7icHmg6dFcWrXN76",
  "key1": "5QHBnyJYRwNAteTH4rV5LErNueYmqFj3q4jGwTxsYZXVz5YJ2hhYbjEBRopVpkxjRpjmEKiu4YPptXpnixBmLxwV",
  "key2": "2pWwasFDASyG1mEuQVoLgPL5HvdcBPntpcWAmNyTPAzqd8aedj1zqKq1KUKXFEGf3bP96XWUWPcHKEqwKSELY64g",
  "key3": "4ietuTMxPHGM4SQmdgRC98H4UGEvjtRyBioQF6NmcikqMLUZ4iP7riTcBxFHtCa97X6ya9CX8HNf2hbuUBe6xhPB",
  "key4": "38r55Z2PgzQWJTwMti5mTCvX5KhHVUhjgavkqU7naSMaByhAw1QPesaKocManiFbthRkEuVoR5yQK6n8n86W23aC",
  "key5": "5NmPj4Gae6HtkKWEnAvjiL27wDD2ndbuZWYLRoK5CmEM6K4i9udLm8oZEKumDxCF6HqBFkYhNdNc3ewEh13f6uAA",
  "key6": "45zhgN5qEFC7yqrUr3WdedpGfuBF4u2ALNSqGJm9QPvDdrBXjhh4EskDeihVXZKjnvyENphoPKy9iRGZanWbMS61",
  "key7": "2bJpkdjKgCPrKZo4RR563jagUJU9edmXTB8eqUBMcM53qGRDsPdMMXXePRqaUPpo6APq59WHsSA6RMm57zZzH8vp",
  "key8": "u2kgsuLcit6VvJ7KvyPVGBBg7CrCMPLUubR2nRpUvCDENwD4jUzUbkLUQPUCnt1mM8njVBP7W7Q9o3UxJeKZNGq",
  "key9": "3Xr6VDSA2YM75w6HZCtiqkcy7LgyAqsoZsqvTy5PScwGcqdzbLzZmL7qkvmWk47aWL9hikxYRRktRuMUEsPrh9S7",
  "key10": "5BACFMssLbfGxvXAJTBkUA41kaDDdJNazMBnc9WxE5TLSWEt9kt9bYN1Uu5ufFUh1T2N5mnSMmeamY43TM3R9ufv",
  "key11": "5s5GxUcygKPDRdhHPNRuWfJ5GnZTaWgGSByiCZH2dvkCFW7gDj9e7iLgLbhrGNHUMpmsp2J9hiYLxy1HF95UiXeW",
  "key12": "EmrAHZ4qFwzNub5GHndpFGQNBUMXquFDajwcX3uRmFMqJY4NVqo22odPE3QyVqtVuj3SV6pJd7rYsfhsEGcorjF",
  "key13": "hQnRbtX8pza3fUAGtNpSezs6zvinC9amFDN4cnshrFU3PJv5Qpsz4dKd5mfikmzJcKdE57tLdcmU8ZbRzbuiySf",
  "key14": "b9U7BQSYX4xzmEnt8oPLgNU9fh16twx4Zcgn1eykACdBEHbDyufPaPZ7v4YtjSdUeJEbEa8fYEoMNAoMjTwdJeo",
  "key15": "5QS5G13USLVmh85Puyujfvvz4ne1eadLE8YDKyqNcUozdARLzvrvUyroUNf7rhBpuVorka91s4fRSZYKFDKDEBAR",
  "key16": "2rY7uepXZsLLyzHsFpebLtz3u3gBXWM1dwP5UQuYoeoSE2e7P4WPWqSMhxCdf6NQ2ZWXhixazD5KctLREqhDThmR",
  "key17": "5QnjzY9qCdT8ou6RhzSkVpcg5jk9wix42ZVjYJRdEZjhnB5FdtuuLfxBbWprJQuBbaW4BJk8RnxNmfjkmpkcrdP8",
  "key18": "3CnjS2j11P6KwKyA7tsqQ6NLW4pJXdzB5NBAobiXsevncW5e5sH4L485LEveRbfH1S8Ue4KB8gZSG3AfFozBy9aw",
  "key19": "BR5KtX4D3uMiJJWiGiwQkkXLBLEqStSA1uLDJiDhwPVy8CQxvb8GAgh3NGTxrRRiffqYJr47HwjR5Wz3ESN3tiW",
  "key20": "5P2iZQoGnyPnjWn3Jf3g27sbSYA342ZKCvwJyiEqHZp1JdgSVeKXZKu4RRfCB1yB9CT6v27oLMyQ33Qjg2kh5PC1",
  "key21": "2eezTe2CaQEidTBEUvzz9JK91rTnjKPkqEzmYgZu4CxKk6z8rJFxGqhEHqrGtRpPGD2r1M8V7HQEAPm1uZfzALVP",
  "key22": "4jjb23piYEGMcG8ayf8nEcjEyNPbjzgw4BVFZqkYfGAZneLZCPh6614rQNijrqdXxPVoJJeqFGDPAc1iWy3Nyh7G",
  "key23": "4F3a5DKTzkbnbZuwNRUvBdpXNMUeJUmv4TVHhEig33FiHc85z69wWrdBax9bbWqWmi9AzLewvaEevBRVfpk2EQhk",
  "key24": "59tZrkEKYmPhRNWcCid3KXFSytHoxuDkGBRv8oFmvBndNM1kiv17TtP1AdraqFBUsmWMuqPhT7gnATAJ9Fxf2LMT",
  "key25": "3nq86VfA9xFGGPHvNcKokAWNsGdpPVVdR3HoAVHpr9cZkkEWq58PyzYV1YoMHK4v1DTMcDAe8ayMEUd5FNT1VUAo"
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
