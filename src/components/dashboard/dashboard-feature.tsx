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
    "2DPeriznJNBKkFdUAyzaMAmeQyAGXjA4DdvEKMXW64Fda1GJ6fiMhbYAcfB8Zg6ETSMACvpE9zbeihxYNfYa3jjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oJqWv4WdgMH71XDyufrQLFf47dK7by1KVqGeAcWjMNgvmzme1ujsZbZLcRa4GHTytA1acPshju9UQXeKpveXz3a",
  "key1": "4jXN9KY1MZt96MikLYpxXD3sYoohN55DzRy6cem3GfNwuXHedUAny6NV1mSv8F6QA5ZhECqRQm7j73nHPkSYVZ1p",
  "key2": "48kPoZ5GoRDwwFokZCLY14MX1yu3sjYWSVp2vqvjFhuEqrXpJmM5qqdEK77tptMBtHRjx97z3XUzxXy1XosmyKKs",
  "key3": "4N3D2Dc9ZzDcsDprdEEEiribNtNBdDqDGhmEKxJPTjYLhVVu1isrwkkj94bTRGKFyfj5c5FjFLdvck6D4oBzuQ3k",
  "key4": "5KwRQsDNqo8Cv9Kb3gpdMbun4tVBwNmG9ty2VhmK1CzP2JRU6NdNrAKZ6gxmxDTyf3AJwo3Pnfd2XKr4dWeYyFwh",
  "key5": "oqYdCa9zTP3jbYPMC7GEiPjMqLBPLLYq5Nufm1diEN7ivBhUu4mchERLoVSnPPUR5nLHQbLqpSzwkZLDj2PSpao",
  "key6": "5Pp54Z6hWpCB81Bz44JjU6szouiWrPjiKBNKwmyqkXtrNhWDW516cdCWNMwkR7yqne4stpvoR31PkH5hYpDuMbFj",
  "key7": "4THV5pYBFgTCMxWkH8HwFG18SNgxsvnMeJwP6Fi41H1jHcricpSTbFsNkxoczLrsD9jq8a9amQsNUWQXRXVx2RjA",
  "key8": "2BHe12ankEZHfipwcauecSwtU6cEjjECN4G7mVxNQQ6Xg9kY7pG3Y6LSaVwaXXo2sQukeoqHHLemJrGPPYCNWwyx",
  "key9": "5n8cinREM98QCfKEJH82KKN8RzK51Y2tQHAAAgDDysDAmTFKGx9JEe6iihq962APDLKQDNMfJXRZbPfWxy37nTX3",
  "key10": "j2wVsq2cMqEKWCBXUdBTHzqCMHnVPaFccRhHnAba282w2VGdn6XkoUB1VMegVdP9hJZQ9L9kbFu5XuJMTUNg3FK",
  "key11": "tSR7UXj62FsSCsvxug2Po52q8vC5VwZw35qADjqKJsXA5ZjudxzwM9izqDDB2XCToVRXDj3XWpUcrHzfn6xV3Gm",
  "key12": "4xav4mYeMCrSNFTAdbJo13VLkm7ENQoUGVLnC5tzjUpfMD8J6UjFi12qFAjBMaGDBbDoRQfUEhwKiDmzxiFAczFd",
  "key13": "4GSQhaxUkgfWLEsw9jnBRNkQ9SNadkPENT2EP2jXY9RF4gE9xG1BttYB5A7HfvFRXMzYxKYMBxmPSU3trFcXj8D6",
  "key14": "2GWqkpMmqDTiqrd6hwnUQt2D3Ue8eBWXxbqsnoNA4dhDR1JkXRXdcXXr1zXkF9z1smA1K7nriwB8jNBqD1KWK7vV",
  "key15": "2RMKyrH97VydAkLFKtksjJVAZhe6HxugM5JXT51udAjMtkNbfhaMS1n3vZHqXScEMnbaHze63xifKWJCvB1Sj5Gb",
  "key16": "3hC69vj98xX59FuBGq92LSAsv4HfSwaDUguW2AW711uy4GdhXAXkUZ7B1ibxUGYf1Ajd1dF2d4NzfFhz8J5yPcRq",
  "key17": "54roywNibniKXqEPHhW4xzUJtER3K99EVgz7v8HSZjKAx16mzWNcBiziRdxh83pFamRiAwkYojsEmhJtBqQaqpHs",
  "key18": "2qvrXWQ5Q7CX3fe2XS5k2Px1jR5N6C9X76GRyQfaYENec7fQtRfGafr3Nu7mAE3Wsgz8dYUWMc2fwBufUfYsScrP",
  "key19": "QxUrYzEmj4H92SvHLWkyW4eDyafS2v4fymmffBT8urXspZ6R6gM2oFoWY6DaSwHTj6pubwLsYrTuCWksLrchkpC",
  "key20": "nNuyjHmwVKJ7nvoHtkXoLKaHwzJ1Cxfd9hAVgGcW1AAPok8LhUHuTLCVqTupoXn2n7TLQVSPSFiJTecyTx8GFVQ",
  "key21": "2ac4BpoZFUR3RKsLiATGQdGey5wV7s7yJm6oNQ8mXhx4L6hg5knRpd6cLya7Yj3aYM1BUQaP7a5FWrbRCprgojxk",
  "key22": "33BE56PqUJWDGR3UkGohRTfwmig7MXjEoRL4q6R4okcDUZtNn2vkHaWwZwvyiHF2GEgzfyQyAiRAhUM8QunNJzkd",
  "key23": "52fTgVZ5FZNnxj7EAtVNh9ZbwJtyTuXb6JJqks2B2z33JsDvyTra4tRuov89zNGQGTF8Qqhi1pemd1MdbaaqbE9e",
  "key24": "4rhbXiTZgzzuuL1eZw8AGsEqTnUvnmKYwstdhVUsRdSvjcm7Y5imiVUC4Uvfn82d9RRkVPiG6WRzb7WPkuegxFHz",
  "key25": "3g8Exfbpq7GWgFfGjDpd7MRahnNgujGBzGvESpisHEinUmXsYp3rinv67FzdLjSs9r35wQbvu6DbWLsYQet4NT88",
  "key26": "63JAdi5mNz6jdmrhwRzvKdQNsXhUvFc9zVCeE2DRT3pWFvY65zK6GfopSaC7WqS9Zwch4M6S1uojHwYNXdcLBA2y",
  "key27": "3DYnyFsnbMzHaERKyDWMu8W7n3xgFBEhjZdBy18DpK8wzXct94T7UhrATtP54kwP8VsuCrjNTyWwwCxfCPqLg39p",
  "key28": "3ZLFk85CUzAtP12G8nmwFAtyhBjh4GWv77MjaAkuarN55JS3HmgTjtRZsyHzuokoxcnNjptF5fqTS3YtycirrETX",
  "key29": "5p4QucbysYfw1k74XQWRM5rA7naw2JjoBkX5kBLfR9NUhKCdn13zuKe2RoRSbDq4oz8TSnMbHzi3L8SFS9JySwKG",
  "key30": "4f3uUhKxjJQFXoG5zoMB8Qppg1RKHHoS96Grq3tenjZAKdv7JMxiiaXmgUoPAXe5usWknfmYUNwwaeumunrxtpxx"
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
