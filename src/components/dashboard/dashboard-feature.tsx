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
    "2LWTzcUmbipZARA9BABNfnoqTWY3fCaGquUaG5nLT2UUS72u6dFk5sKcYhCn9Hb3e9Qv75cA77mZ1V4KbDsgZuW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nEAyyJSNbtm7FVM3DtvK8TqnxTH1tqJQo9D8xyAHMabEUG5FoyRdHujpF4bCo87jb3Ag7G11u2BGbC41PswUZis",
  "key1": "5w9P6qnUnyrFdkPkHrKnDKqX8m6KE4PKVxcAytqnGfEZt3qo2p2j4LMq3qufSCRoYYaz1Uq2js4U7sSxUZcw4YZA",
  "key2": "5LV6c5fUexHvosoDYK5tRCe7qNLjtR7rfksUrYWU1KMTbubQrWEmFHofMcgKNVh88fuomToU8zv3CCH9jJCEuoYm",
  "key3": "671enbdfANNSDtYoWL8RnPwVq5mzdwRoVzRXhhAKThztcyd9zb6tLTPUwS12MMKxFX29gsXJKesJWF3DxA48Khkn",
  "key4": "26QW4r6qkcEUxSrK4GFStjnyUekAXCvksmKTCc74is5MsvWyjrBAaiLnn2R9R9eD3wq3Z7eCFdFPp8PHtW4m3VMg",
  "key5": "4b2PWJsMNbbEmjStddRzkJqqjF252FMu3VC79yD5ZgEJVveVYZeXcepE3yLAmuQGgwSbXYrrk8DTx1Gh76JRVsp7",
  "key6": "632rWwTgwyAvkxtyHWuG6hZoyw1VemPEhDAYsMe8FcZvQeZEHJZwp2ruHh894Si3nJA5G9n9NWqqsHx8r3nuhB6u",
  "key7": "3iytWq7qm5tPV9X36NSZouU4h8BVxFWtYL3C1va2JW5b9z4KRDiUqLpZ63uMqdhqC2xhhukisEvVQQenQzjk7aFZ",
  "key8": "5M3QEwZqhDkjGmmcxT8CVdy4m6t3bMyRxEmoPCqKhAtQURiWPZYhJboB2SnqW4jLSfV2MoVqmx6bfs4bhmoKHJ8z",
  "key9": "5pH9jvDmcxTJ7jWARjVuRSfV2QfBWSqgopoN3tiRkjdyQ7gcP3rpPQHNcCBbSmY5UoT8K4W3Fqvg9q9MuLhMQf4n",
  "key10": "4sMAjT54hnTv3UBuR8wMXjpgDW5a1e9U964D1NzaukGoanjqGTZ6hVqatYZU4m4z4BdbXYDXXM9H8sUdFbj9HhRL",
  "key11": "5zgjKtMDe1SXN6HNMyyXQsdHjESymT1WotRoUJzA3znRM5riKHwWpQa3zuhjRgjDFn2FYu36zSGGhuBSBQRPZAzz",
  "key12": "3mwQUwFiZWU1HG3Vj3LWYpnBcMXGxFv2K22BSKNa3MzkT4c3jt4kkK7CXS3xDAm7soreDQXsftTPngJnXuiSZrGJ",
  "key13": "4tGkArPjKb4G9LbysbcACJ5jo5EJSnYfBo28tC2TP6XKHU7L3YTXQKjvLRq5EdC9qtccBsyXZpQVzks8CQAJ1sJw",
  "key14": "CuAaL92js2QX4TBXNvYfbFzR6afBzPQWRvbo9nuoE3kjvy5guah6qR7gvY2EFVSHTKh7D4v7r2G7wafBNYcx2nS",
  "key15": "5renHGMLxeQd6o5KqWtBXtkrFTyCzUCNxKoybrYLJngH4PauFARAazcvgFqhBUZ8EeLthLqaFDC372hDvHGFC7SV",
  "key16": "5aDSXAuUrQheJ6XUrYVEuq3C28HaUYKhJzgkcPvtRCGkTzBD3tqb9ph8uxJxMTMPc7R6wrsKj2uXDy8C49gDSyzZ",
  "key17": "3cUJjmCQnhEHmykRv86wC3xvTiawMXzLooaFVhRxEW6ZiJWm1SiBDfKJv5T24TQzkMuUMPPj7wyGaKF2LA5kBH8y",
  "key18": "4eaZBLM8PUtkkVHMegre4K5nHjmXaVNQz6Yo2mbUkzMsF2hrJQC4uqsETYGd6bkYmDyAbiZhfb7jgd6CDcqF5TrZ",
  "key19": "YWamvkooaE3sxAv4gLMWrJ3ExDKaWePy9bBsMuEBnj95hrYsiNMaUJBQGdSfiYxC92oGJsBzN5hAzrFbM4UoRAG",
  "key20": "3jQik66xGAcw53G4TFhYmV2DjjfCqz5gAXXtpd3fM6A4LNs7RVYFmTY7SidYcG6TWVfNMX6wEHSdmbPqibZGAwwC",
  "key21": "3KXU7yrGjrtuTvGkY9ziqFbmWLiUY3KuTkUzeeJ4DtEKhoyVPqVnyNWLchJuk1cciaWjc51QrTeRWCU1j5sUh53d",
  "key22": "3g62JpmjdsHh9WFrfbHPAdxLX2TvKSUJTFiQ7AiASxCG55mxY5y6sCpU9kTk1rrNLXZ2nUYTGCRyZMqRJY3fN7bH",
  "key23": "hvSxzC7B4bKtVbuQUwBxZrzsJMQVAMuhyj6MaFkndkc5nVnSSq6fnKy7yx99axAQPWd5AfsALPQ5WuT9F5hgvRz",
  "key24": "3JoZR8scm64Nf8hZxoyQek331hEopao8JZAWJ2aG9KnwGLk6BaRL44LPST8reETjMQ6NaG5bEhMjwFehasvb5Ghe",
  "key25": "5jkbRV8mXQWXyzeStv39bPYaXFtLkszrkyFVbZLyCo2JEvZ83b5eC9cQHGMK6kEYvm98EC5k9KnofevpVNtwgNfk",
  "key26": "4MTRFX8By8DL23oBigR4ZgBDWStbjrmcWgZekrVhZ78Fw3v79KV9Eonc3RgJjWZCADqNmh1rmQ6Pk1wuz7P4HacT",
  "key27": "3zdaETHo3b81waZjceemaw8MeaSkBFny3aYHP7gkQ8Nv63CJXBzEMscXPqxQ5C3wFAhobG5jRJAsyz4z63eNPaiT",
  "key28": "fsuVFLxkQCRGCif8YsxYKuQfsxuKXLksT3m4FJSSwm5iCUYwVfKKFyVwouxiRVFF9YUg4nFLcM42rYhNXKTFZTN",
  "key29": "4MbJ2q6CJHMETapnWZDw3RpmUBCYT1jo2aJZmYEPWD3WzsULLL3YZcKrWtVRRoWXPXVcMztxdDD8dhDW4mAHYqM",
  "key30": "5xkjxF9j653msst8AmoiAg93qitirZjQnCg8kEJ51Ag1RHbd1gRKzN3THUHyX2DP598FUeDBd3YJ5kTyp6Amwn8z"
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
