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
    "32gRiueEArgzHKJKtx4NBZ8V2ZfDBN829WqqKekbzwj6erYmwcvJ9ZVRtHuDAFn5fgQ1ZDcLeQaSSdgyPcBJEhdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C5r5SwCnDw4VNUqNaaAXKD44fgmjjnazF1PQsuEDXcKBSFf6buouQaZgW8yB22RbYUGDbr6hTQwNSsgjXYgP43f",
  "key1": "2QR7ijKssvibbXtYCdRRFru3QTh3gRMNKSbZQwx56NEPYvpqeTXVsC2cWGchQTrUrg9iSgBmxaVPtAvsEhsdfw5C",
  "key2": "22kUJNH4QJiChkaVRhzM4PpLHZ3hsvfxbiMHXMcURxEGLeGd6iewCZAuJm17WeQ71eGk2B72grfRbDX4exath3NN",
  "key3": "2RNkCm3Wh15FGZFHjjqwEP7R5oWqhPNVFRe5Ciusk5hi2z5E6AdzcoJD1uoKTAS7vP4aLTAgmC9CXPXBpwwsZrwu",
  "key4": "4Dxw7MaKj6M58nw8d1Q6vE7WntK9MghsXpPP1jdtQPBBNWp13BuGJpckAXmciwEgjuBSct4uXtP9PrQibq1Us6iU",
  "key5": "5rqV2yhSjYo7X5HoQhYR3o6Ba6DHuDcRXNFFgRAs85ite7J4kkXRy3XR9rHwZS5gdAnzdnMWfPXBPicJvQ9nvThi",
  "key6": "iv5hhTLtwUFa4Vo8ePWwMEzJY7uKMtzHtAm833UnXuRfcdVtMChz5o7TmWiSixsQ8wz1iww3BUcnNSAvNQfMhqP",
  "key7": "4Y1iM7N6nS8mL2pi1UmSdLTyhqDWd1gtpABnecQHLK9c7rCeoaYEcKabNrh3mDi1RRLANaCezqhrHfoWGRAnBcsn",
  "key8": "2baeGqErXSWgFX3a9V2QujcmUMvjh1iSq15ewVDhKQxhmZNSss5ezwm8tf3Jft8sQBjz6AJrSxcesibSgZ73WxiL",
  "key9": "2pUZzuFcNXzbwv6TwKRZVp6FPyJwEZk8K8G3foLnB6eRmwAXeRso2yjbCynAmVY5GUFwnbYk2vyJRp3HUQbQnhCS",
  "key10": "R8EdpL97XbChxUQCwhtggn1sak8ssc9sUFfLdB39UoeVQoYMqgCqe1etjpjRyL6BijxGeo5isLzFYEe94sTwjar",
  "key11": "2TVnSAov9JL88CcRuGXT6i9VHaCrJkMYt2wV7BeenhonJhhcXTykSBF3GbWx8E4fg6SUKBiEzTddEBHZi43UcCg2",
  "key12": "3Ubj5KvBRRYuvPmJw2tenQU7kwvuzwW4uxbWG72R44guZz8VpWScVhHLv17o4YJb8dyZtzT65LH3unH7kGKBs83y",
  "key13": "224ptGjSAHBGqAVMHCMrkiwidGrCj4p1fXxqQdysz4YrFgSL76oBYnvMhiRBkyYKtW9JMmA2khxSsf8kPAgWpwNs",
  "key14": "3LqbX4ihc8Q3yTJgZBYmvDdpGpdxEj2zV45TooRqVkYnmmC2N9DuRLz6Da1tsGcK1gheZHUmPPM8aiWyoAG6EFt",
  "key15": "9Qpw66PgXozxhqz18naYkHWAaEEq8BbgCZTzqQ67cXsXuS5aWEqSNy76npXNAkq6N8tN9ndQaEqdLa43raz5bg8",
  "key16": "RStWmkBnTbzZmJU7jbTwDRxnEUPfB8w33qkZDkPTXXaFv6SwWEumYugEL77Yrsgx7LncDyPsPg4BBTMFAdLoRe7",
  "key17": "38vzcgZrbhjSWE5FEHW6X8rRP3mynXzMAfDxBJt6D1YW1nSs6eptiqx21fCfmWcTpKRQXwnEeYw2McJ6vCXNMDut",
  "key18": "4bq2po6imahnSnZPrw3AZa4zdhbTi5dHpBPS1M4TYYvt8X4kefzSsHmKUbH61PyqTHLEF4wCsEQz84BHiKrZYR6d",
  "key19": "4h8W6dFQpkmY82nDsHNVJwBLa2SLEmsX6D1XXsUX3ta9jRxZo7uBwNDRRFEXVP16NAY95ajTfEdSTF7jhvBm84QZ",
  "key20": "4PqtpKyqtkM6ourPXJZJXTphMzyqurAF6rJLq4AztJbPvyvQnD7SWLHmkTAbU8jyGp7LD3BRCrGokQmkXs7nch8X",
  "key21": "2bgjqKZrG4hzueyoCp2byL8QfLpfAqjnYPFfP2yqi6YLGLGPH5frWQw4VXBy2hcBVQ6RfysC6LmaFtQDUgR5KoPC",
  "key22": "55i9s1sNTxYmDrGJ51Z3Sa6cpxu677h4GAJfCQnpMn5Ww5nv92D8RL7nCQbhwABGDXiQGyneBD6h52dHTvBW7JHe",
  "key23": "5UZortBGjbKWyEME8vvrgNfLx1uXMPkhemQGL7i2wxCvtK6m3x9EuLvLVzFEwcTihT3P43aN8gwerp9Huku8Gynj",
  "key24": "2ynoqvXy1zmz6bDUujogAf2sXpbgkjLUmpzsL7BjNoopDyQaRVHXVtr9WXs5aTEgAZH5ejyZG9L7q1oWyN8uQdMi",
  "key25": "2tDqBPJPn4bpmfdiFNirKjHkdYkF6yiqZZoZcjb8T3bdTZXsxZLTkxgos3pTa5Q32tptbcPsy12uohi5MEC5ZaEY",
  "key26": "2kRJoADoWNFE997zxgHkBXETAiqCoC38hX19giWCFDiUAo49exjj66FKHYZCnTdepxoYqZbqsDarK38KqV5YpVto",
  "key27": "26sGirziGY73Fs1PB6pfUb7bAHiWWhbCJbDKAqP2RRx8cwb24g9ZNv5t1gXxqa4AhhchzhAYLnE12J77ytqRgwmv",
  "key28": "4hGVdpkNhzym5MkLD3N3BuXBFVJHwtvFdVwRCoQg9Qm4Sjo1NdsnRiHrYet6RmGw1xmkteM3Vprorxv935MVPEyN",
  "key29": "2baXuk9GwU2hyRn4Q4fFc95bcvPNagGXH17M4wtg2Gp8NWYtgqnsa9At99Lz5fACvNmezsnD6RU4WS7vShM25hrd",
  "key30": "2q94CswyBPpnKEi2yrxdaD6U32C7VYmLakQNTyJ1EDSudjkXWvX8sTL63DmbKBeUXBN3BY1fNse6w5tXsAZtbBYX",
  "key31": "2RGKkrEzermfXEhKEkPGqsb8beUSgLfea1VxXLNKLggzLvXDorC6QCtWSbpWxhuBxgQAVSjjHcub7svTQ5RTdRt9",
  "key32": "46oZ8mRJDsDWmZrH9hDP9v2LrihVM32NvYczCP3cKqqX16WssagjneSAg56orqNpKwPbHK2uHALbiE11htBiyvHC",
  "key33": "3pGXrshUUrRsARrcZK5PsAGVtXMHze5Gxt4J4GitqCHMiMtTptcYjWBQzKVYN7nBKkvw1BXq2tHGnshbWbXvpWaK",
  "key34": "3TataidpcAiKhFRWTpWyBn5e6SAjFteJPLXjALvDc6kMhQhDFzV8AodThPAu6GBM6DDFzLMjS2Txqvt99HPst7TR",
  "key35": "2jewjFWZWrMxdxkAt7ctEPxx9x39DVmNiG8tXQdQFDwm3uHHTUtLSAAqcv2DkjGbSr4eAFDUuiCRzziCuQ9BMypF",
  "key36": "3kXNVcp4ajmvnArFjhue5TFzwQeUPfUZaHfg2ZhUALxf8sJgt8yMHBA2hAD5rmEiSWYo5KJch5ouy1TmyMo9yHUQ",
  "key37": "QLrYVdj4w87hZe7z3exqdfMXdDgCSJEqErqvxkRhXNZ9WUiJK2Vo5mp4JVhtPSegyRN9mGPwSo4QsogPB7rDxdc",
  "key38": "55tgatiYiGK7aLPVc6Vv8cka8w2pSDSPjCjVGPN4cDy7mUAqAtpvnSnrfmpeatdDG1ddsxZpJJV2pj6brvYazazk",
  "key39": "2BJuFiyJ73mveq2Q1Aeppq64iBXSroFnLJsZtyufSsut5k23hqPqgUavgokUp4wMUfjZegSXyoh97S1BwvHhbZ1r",
  "key40": "43zhFqfmjcLiepu9qdfHc6oE3g8fSjAqp4RnbjEqixhSEFZtyVEennt1xCxAb61x3yjjqEFPw4Khmq5jn1Xbd8AM",
  "key41": "4yUNokWXC2Vb6DmH9nyxRtopufpNH1FusTfafBZT7DBVtrhuEGVjAKw3a5HM6DakvNgjS3MrvD2H1si2XTudjUeG",
  "key42": "pai945x5RJdjoXqTmDyFpRcVyWM4NA1nkPFcUEYgZ7jXNDJk2k7ZWhtJLW8kvUZbZBcBibPHNWhtwTDNmLuZhcP"
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
