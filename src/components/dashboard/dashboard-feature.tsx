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
    "4PHJsS6xkGd3mMWAiyTRBkTg7M73y2E3V9BoAfBpCe41GiRA3QReDqpU256NNT6TP3UM7BYdypibZiKQQUQQ7ucg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nG4yW85ui8BLAKbQLWwtzj7GL1uNd6EWjTajf9U6DC95JnjrHHhhfgPZxr3uQDUQyrqWwjKgrrGwjbHK9a5kNX6",
  "key1": "VRgBUkyusQ1cQUuoPzqVgDB7k23mau1t3VksuPU2h3AAvKcv6bKxzVnpPuQoVhX7TjfyXceQKP2JaxDWC5FcWob",
  "key2": "qrp3twENwLnPFPT58tkBHxL4xDixXcbvnGGP6PwQf2a9W5Paq97fiq2aggfXYqFYDY8ei6HnpsKPHqqiwp7Ycjb",
  "key3": "EqjvtgDa6qSJkCeqqX6Ud6g4wL8uAqCZoBR2QDVDfuVqACfoET9fSGrsHMU8gW2egncAJYsZDvBKqJz4FjMN8v8",
  "key4": "5zC5qFFMx6JKx5jPBFwZtvj5antJhWtmoPKCvdenchPdcDsrwDmVbGbmUtismndK4KyYyojoK5YSD21viW1sNMEy",
  "key5": "p2wUKSCPBu3iSLbB6XYd9r94gYvNBFvBo9feXvokeAa7WJT7GwTncHeqMuqVotY939jRZ1PfiytHcwN9gw4SWxt",
  "key6": "3DcXejTwqFfzNumxK121VAQnZ8io4p7MbUssqTyCe8gs1PFFfiVsEph8Q6NPWzM21NS6obAU6p21RsLNc8HmYsZA",
  "key7": "2CSTFjSSzHgRuYky4Bh7yq5TKWtMADURumP2eDyezpkMsKkakDb47p7PgJ8TfVV92A4UZBKVxdWvczYudCoS94PA",
  "key8": "59Wir5dPtgLS4ic5gExRJ7e5AXqFasShGrCjH9WrdtocPKsZvoGBZ5sQTQB3srMBbNSVMuYc23hbSNGBWxh69yKQ",
  "key9": "5KqwYf6PgfwWbsVDqngDHZ9NeSma1hYNqdpQA6pdTryoDSKf3UqAYEFdMKEJrEiDnRvA2WavCsmqkpaEcwNPF5td",
  "key10": "5qHf64rHwpnnzwwUkzuZvhUQpyLeMdU2fNmMUGGstcxF4jTEfWLGZk9zppDga57rXKwRV2jYyiacFY3Br5MUFedc",
  "key11": "43T6frer7zPu187RZUeTNbmyhPq17ES4kqTDN6vZ76DQM5V8YuEaGPSXgzW1yQLa4JH68iNdV8w4wu3XwbLrgW3U",
  "key12": "3DkUhT5BD4J7EcPNaHeUuM2XmB5CphB28SqyjrZReTArvN9BYUCbzsTzbs56ErEPK9SfAMa74PDiphf81PpMDfoB",
  "key13": "25hnzGiktKvvqXXcDmPKbrQRXWiZU8nRTPuaAb5azAavDedhw3JA9pWyUchn3eGmMcQZL5FPWdX9CGxAtYUARsDZ",
  "key14": "4R2tWtd1XhU8YoL4GuKi5mnr7FUo1qhXrZraBxyXn4MgeSNufeotJbc1X9Mv79v3Bu4NQvGfzGEaTB2N8FJoyNxw",
  "key15": "3YtFmGkwT5VjKkzKvqnkVEwQTPyhHWXpbKyxYF9Lgygoh5RWSAoWd6ucbRc5sbXgVmjT86UAPiKewnY7XRzdxvAa",
  "key16": "3NC3xkkLQRUFDmHbxENeB4o5bm1tFX12gYYTr9T2D8HBY8gqU4UyN3cPP1wJZSuzvjP2VE2ADLkfdCnBUfQumc1P",
  "key17": "4AtqRaBfGZb8hWpyuGcxAJVpZuQYgtXGxeP2sZHfdwjFqxjcbQaj6bi3Af52UA89xpWH1Tqk1X4Ro9UskGtX3tVs",
  "key18": "2PP2Q2b71bGF5gznvYkShys67S2rXLuVrzPbszoncRBVaryBHtYeD6aTFdFNHSkcVCTopvjtYxxS166R8qEJUrxQ",
  "key19": "vbEwXZ7iQ2m51z9XG8GRMfA8oicSUrAo97kPHrHf4BA92ods1eJG8Rn1c6HVf4pXQa5vFNB3uLt7Efm3jy5S8hL",
  "key20": "4ns7cTFo89KwSLenCvVusP9snbGir3HGmAsF6ZqCRvzqC3mzZiVskCRYeV8ekq965CTm6JUtwNZFU9thrRL3dYbe",
  "key21": "4mArDfm58NDa36eZLPnT6Edwzidi7Kr8u3w8SESTuta5A3xUzpeacz1wfpKfeSUraSgXgL5QF7tmozxvRehXYk68",
  "key22": "9cdYBiuyjasLDHEo77grbvuaAnBTU4G1qHAsDo7Dm6NngF9k7pAF3zRFE6yg93ffacZLAPyTXN2z6fLZq6cHeXc",
  "key23": "4kKMoFnb9nv2AiDJFXDGfaSazbqRm162uKhZqmHuhpChanTAm3iXe5yDiDD8qEYHp5fwLTh18oeRR354hmtwVpMc",
  "key24": "2oFPb9GdiA8o7keu5Lmuw3gFLkwmoSx4SNxDErCV8QpDvMfdNWemsBDZBz8nuTq9Dm7ZenE6U7FkAXjNqZjzhvUg",
  "key25": "4cYqUbNPXv39syzABsksiUtsCgrNEAAW5zhrzUgoro5z3Csku26zqLvMZQTzNkNBfYkpSgj8WBw2HpvdwVMDi6Ne",
  "key26": "2hoWeM5DbEKGYoyYKZpqAq7qYZb9d1S7dwdoUCTKeKiDNgAgeWRBy35tvqMyFmkZgZsK4oVs1XYqxnwXcaiV8Ni4",
  "key27": "5rRH7nNxU4KMWmbkqVgZXeteyDfz3uEHhrAxWGDdsX96LkG7MjMu3C9JcMb6x8j7ge8HFHPnfnfeKkHkj7Y4nbAV",
  "key28": "31oAZPUo3bjzaDogbAKrYmmAAMKxXwqRcrVHMTrj1EyPNSesXKKaib8wTMLuwdg5y6fLjofAHCnLmB3do3ovisu4"
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
