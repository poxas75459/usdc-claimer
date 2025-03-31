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
    "3K5Qx3E8eVKUSuVNsLXeuTZPdMjhyDhQ7RBqhDTfXns7Lqgh1xyYW5MwXaQdvRMnkgJ8utHEAEuwV2CyVirK87Jo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oukbj1MzPj57Hw31JwR8Jbjdq8REf7xu1qVdKFhH4jvDCrQrUjB53JZQkDkWW18iCvV53Tbo1AkLbV8JBTh86MY",
  "key1": "29WKmdF6QJip9WNsDjH9uzmdyPb97bEwh31npmrdXtxGgP9PF8w2qFpfidAfE78LajBMpBmiQkeUJER3nGVxyeAg",
  "key2": "4dZnJw1ZAFVmfGHkxmZ4mxuqd4LtMUX4TnpJvYiZKKym3sqNVFd3hLsTu1auzJcWzWzJVcUK3G372im2wA9syb1g",
  "key3": "4HyQsfzR5zzr98kmehJJjo9u5F1EmUFtukDEX1eehfugXXcEiS55QW8bTrjKiLZGyDih9hKg9wvEmoRDVtbmtTt4",
  "key4": "52qoxRRxeerVf49NLfR6BXbBsDbK8nAZkEDTkzEH8n5uVtT883py3cP9dNYfDpkGdcosQ4txLj2r8aztEm3nK5DW",
  "key5": "NNohGkqWN5BEBVtnbvBmkjfkeuUoXPrGBCaGv67c2xZEFtqWB39VzQ4EpvTTim6Gg27BnbNc3qWx6CFz5c4GDvY",
  "key6": "3Z8CfywBDnbst1URMH3itdADtYWcuw1LPRAa5TWT8ZrCcPDrH9MYF3GpEN2V1Yq3jDqKmbXGG8mVQqkusxwuMr8D",
  "key7": "97T5sg8Eqxin4c6JeV3sZDuNe6NhbVPgMERsMUJtBGdqwAcgvdHNEoTgs52GVai4cZxj8n1ZGj3HLuXBYW2oFKR",
  "key8": "My85bKH1cGQjvb9jSVwV2TdWH1KSPx29goS4zkMaKuZbHZ4XaxQZRJkhEzLrRTKjk5S5jXNiGKymwtNjrHbuTSL",
  "key9": "2SNgSLMTVLDJ5cMVWRoMfEHwisX9wVEHNgpKKvRzBk37BRzs5NUvfXH2xQX2EjxKWCKN5Kzua6pZp9gYoWGE1qqQ",
  "key10": "5zBcooHxPk8Abyqbgp4njZqdfXVrjiAqQDQ54pNvKP13M3dm8k4JE2Hn7H9JfauRPSDhkNXUxG7C1iAQAEbEBybe",
  "key11": "5YtcYdZRo74J5hVSQB5sgvydJD3ohtuRi14PvPxsQSyjGTxqFukky99N9VBjQZ29x9eKEGVkSggQTJ1F4XTjuiQM",
  "key12": "2uU4cqHBppeKSozYpxjiiDMCXCjUdgvj5Cc8WkWDPpL6w48pNtmT3EjFUqSdiTtAiEfB9BNwJAK1gVb7pkS6wL3j",
  "key13": "3oJno1V8uwjn2UuhrEbGDY3UbYKYEGhytpHuPnY7E4GxGuCaSYZSyPwwTyn2KdnNrxmSsfYpbzBWgrSyDHciVfkD",
  "key14": "4Q7JcYW62FLSgqUyBCLvj9ff7ocNeCJG5tu3VGMymBnbPpKTcMR1kgknB7Qh2MbjjBfZAtWDxwrykz1AdhXq3xJz",
  "key15": "4aZ7HLJ9kAQunwibXQbwfFYcTVzTqYZ36urApgWSHmKf9gRVUPrdHArkuBqciWtNm7E9NeAyDH4wQqJA2UFP2W2J",
  "key16": "2i2dcykPKUzd8HvptqNy7y4Vstn3o29haufH5ytoFFw6o88AYTtiibbVyma5M9pbv2JCtJaYMiF4rR8rJNegqiu",
  "key17": "5Te8JHYHogYT6ERy9Tisj9mU4xFGEgS5MPQhnsRycHQPxkHe4QoAmNHX3G3dnqijyj5dJXozMkU3bLPPa7PEgcu8",
  "key18": "46nKtAaKQfFF3zyZTo8ER9LG4TEewEpL5RRjA25ZXiVcNutj5WfwbkDYYxZo6UuT4cbWSEnqzvhKm742iUtdUfEH",
  "key19": "4iVHYskgmRDyrXQDo9gR1pAwTLK9nE7kynbXpYmz5LSGt3zuiEdfnMFWgz3vagZbHwfGesANqXJjgTaiiSqNttzf",
  "key20": "3s8WFHxChFm8ypBbgHYFHqAmV8YSRnum6EToh2aRdtUosYJhM87Wsjq4vaQyqN6XJRYfuSRQgzr273HDsAgJerM7",
  "key21": "4a6BUxk15FBETaAyqv2cfuJQU6LNgDDTeUXQLuozKTSjKhkkLMKrFU1ZDivDNoS6A2REzqUYg5gyX94QicUs4n4k",
  "key22": "LscnsiHwNN4GZUCW6XbvwyYrmZaCV3L2XcV8bSb86KbHuY8JW8nBFeUCzYNWvynET8xifReF1KWr8A4GgJ6qkb3",
  "key23": "5o3U8UUsbhvYfhGkFn3kJT79GqwaVLVtFbfMUVvSkvVuwRJNiU7m3qZKYiEorQvvyStsVEuaRWcrk6KhqSMPxwZ3",
  "key24": "cp9JL8Bm4Kc9rrh2UXSryyU41EA8bbAzK3FBjM3qQzTy5oGYhDiiNFxU6cESmSVYBnvhbUmHMbHM3YNr4DTfM6L",
  "key25": "5mWFeA1yVUSnWtzw1H1AegiJnrySgLcmfywmH7ybMNT4i8g2F8C6Sumcpv9BYxQR145zezh3nP9fnEeBYLKwZG8x",
  "key26": "4svdmyej3eP8bfkcvsBZYskLDkwAnKYFjZQJDk1F62tbQYUYjBTRxR7y2HnuVx2HDiHpL77WN8EZbfdWytqUo1G1",
  "key27": "25TcyzGx6uDnwHR3eH6ZEatY1QM3PZSqYvQfkyZ25KbGZa3mFvTSurf59PyD6z2uK488ojFCeFeHYBwMUD7uq32A",
  "key28": "2drd8Y6pfXK1o14BFSbWWZ5xvVMy5py6ADccpvqBfbbU8TjrDbfTv1XzvpoBdc67AQ1fyeSgp22yFkSuvUpMGFnH",
  "key29": "QmVSbTXrgEaGCknUn5iaD8Mck2sJ4bahpXCQkK3tMALsZ8dUhP8qfkUsx5FYPmZf5xMf6hwUSQ1e79zYyzmBvPa",
  "key30": "4SJEMSeSsKx9jyUkQW3bBNQ7PD4x5HzSupFPqSw71nBpeSeBcVoViWoAgqDy82m1PA65zp8DFx6dZmHzxxpWRVo2",
  "key31": "4PmBE6o8t9Pbz4PSSf8sRrZDq3LWWN9utmAmqTNikiB2ZCDhj24fJ6NT3bFPM73v3jsYNtyrny1uZE4bsTuffDS9",
  "key32": "26q2MnVZN5uik9tWvs4QUwwYvaV5ZJPGNvMckmeLP4QpV3KKytoNM5VcMGwwD6DRB75jQi6V2baZumnFUsoc7C9g",
  "key33": "Fad8CbRLxENSTfJ8CERAnafnds7scH49ZXbUdtvAdEk5uQZ25g1bmeamCQAjCc2S4jXrHrzHpBdEWXdQLfHNYwv",
  "key34": "3gaemhKiW4x9QmHsge8Ehnnt6XPkw12SK37ARozuFnMj6TUpqfCh26FqSA5fuWRDtuWxKC9WigRhnxs2gnFyC3Zi",
  "key35": "3S5xCgV69WDrBcufaKxzU8y5q15A2QcWeyhf5tXd8KQNsuVVFb4md3ZmUVvDVMvUa7afpdVqidvSWsySKsWT2tnx",
  "key36": "R4Uktdii6WKsr1TFVDWH1FJPdAirFE5JprdMXua8sRgnwbTHm57gPLK9938JdAaEVxNSCFA3Xuwtdq4a3wTv889"
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
