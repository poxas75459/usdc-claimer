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
    "4gm5YL8uMmzeEuUaVAYJnuv6xteUQ9Ct98HtTLBF4W2hWHCZhMkZjj1HgMtPDnLyi9R1uAHzQ1iFeTXThGXNaC4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CodExDex2ehyEhf3sBeE9RGRY5JGn6JwMWQHMnm9ssSwV9LrmUptnEjQnw2kMCGQQrmQg1ro49wNPB5kTL1gLAW",
  "key1": "2zM2B6H6rTCQXwsVxHGXxokApfz4mMe3cze2591jehz2fJmVoX1x5tPjwQwCq7wBmDN1urwgkTnNkbRRsA3phQBE",
  "key2": "EumT6o5wtoG6eHixH3psTuDUphbQG7jVqP5U2PG6838E1pHcWzycQUGPhZG8GtxkQnWW2ZEJsCTdr2dXiERkzCy",
  "key3": "3evWpcKKXGdfrC8KhQQ97p3j1Cwf986JMGoB9V5YLV7acJ443dQ1BJ3Ru9HnbjBUGZdeVfzxCJYTzpSmkDvo2ohr",
  "key4": "EFRiVNj8sB8NfipX4itBi6RRqPqgb4ko9QAtRQ5ucbnNQ5nzf44o7yjRvhMu3HjvB5iM7bPwK23juj1567WmK2n",
  "key5": "5PJYGwVRJhT8xGzVTu146m9dTxH8uQpZwtX5cCoSZdJyezngebd1J4FfbdTMJPT71bS8Hsw5d4QaVrrAbjZGoosx",
  "key6": "3gSYreGdPhYiVHvhyFHGFRsJr3GrbLYwe9paDte4DweWaYmfyyWpRz47WKTUrVmszhiy879AungpfWtKPM9oUBQH",
  "key7": "EuDtXw5fyFtRnQ5q2bFEH31KWaX6thdecuQ94nAkYx7CKyp6RMmQR7nBRgBkmUcJTAirYuFABnQBnRcTsTzwyLC",
  "key8": "3pLrbwoW6CFYQxyeyTifrGfsQ7fnogHd6v3HfUj9N4sfcGw2MxBXn8GNn6dYipM2ZnyXEfnoURomRnxsatX3293F",
  "key9": "3Rj9vSk25ZXuX1qk4c93b85vLemwTA543L9Jkp3UhTiiQqFZ9zxoovrhqRddYuYSA6mX9DEdf63YraCKH44yQsW",
  "key10": "665cD3zQ2ZBizrffNhn9BJ2tQy5ow4HZ5yR6qEUMnRDFZyguocstiZTMvyxaHYCxn2oXubdFFZaXKtYVsov6cJ5p",
  "key11": "4sNmersxRzEbTdknbrstEyEVV1EofDnUMde83Drhc4bG9UjNvBW3MJWffU45zctqi9YmnEyMCgdcfAMiJ7V9uSR8",
  "key12": "3SZNpEbYyVh2hPqJuisty4Q5LW25vTAeG62xSz39G9DnjPWBCvKSgpdCMvsUCbc4pGH8dzheXZNfP1Zqt3pTpiUw",
  "key13": "3Xft8wLjGQp5fsweB5JN1K4Yvwtf2S9cgp5HrnFgQy7UQxHQodHKHdnb8piirCTFDs5ZksttbPfHTKBXGFLW7B3Q",
  "key14": "3VDaymeA38bJTebfu4yrN2AiB3fGJDva9qtvZDzmAzcQoFZV1XutAzzMQ8AjSHkKMSD374Wu5fnL17kNUAGNaadE",
  "key15": "5DTSzp4ovntc2Yv1pFrwco61NBL85NA6uatYjVkuXhLUvrZXXwFpxZRLh5sJQT84r6eyFEXjRD8D1K9xJjBPa69",
  "key16": "4KNtZsTKiQM2wdppn4UNzBBen7DtuXVvXL9T1F4z7Q2Z273hqoNucUGreZSYoehT3TzYsXXh4vYZh8ZHJW7KQWXm",
  "key17": "522y4bG2MFULzGkuL7KNpqj7Wy9DUGr3kNK3naUViM5veCX7odWNC47T3Y1eJnJSJYyHgctD6nbhy5GdtNTq6Vzy",
  "key18": "2sRToRnQrnrzLbyPz1ry19jSWp5z1x1sTFB67cAkj591FfLRYNVv6RMwyTP5XkdqW1Q4VHDBmerkKPXyDtNfTfju",
  "key19": "3yb3J7Jv19R8vi7LR2GXuBYHUzSswKzNTfVNHSMem2qGpMGiUktfVGWChLBJGDHqNg8xifKZFA7towcwSuZLvWKG",
  "key20": "3tJVdeWzso3HQUeuCSFRsYmikhQq6DNh12bP6hxHXXSNZtRUnhTdyarKs2QZv8q31aX2HN9nbER1VWEbg5RSDmqA",
  "key21": "59UvEi5b5Zf7141GwRiTp9jTExkUGKzsm6Y8BDHQAdubSXAaZ5MQjAvMvbg2iDZ1mdUcwFYDcrkCTrHWncvZuzSR",
  "key22": "21KZHuzgxQe6Rt69hUdNYFfxoqwaD4QV2hp4WKs4B2BS4ZUnGNtRBZie85gkghLLhuUmmWzZDUWhaC8GSRkAHEZs",
  "key23": "5wnavvPVJAFR967rXisoch7zvkNvVDswFDFT9Fp1BfbRy1Kk2nUcwcwK36pQV9vH5jhRP9S4icNpqXsxUrzRpk64",
  "key24": "3VMTSvxi2QmqijHamCusm5BG1vjLMvAgS25M8LVny8sVwv4QDqYKdJWtFCx2QZYYvpqwAvmqAAKRqWadoVSbDt17",
  "key25": "4ttRQUhSTMLJ7asrXNR47jbYTQYU9NEKckuM3ZSjtzsQqRJrkDzANJiyzjDYNpm3cBiwn2vYm2tDa9XLjWUejxLk",
  "key26": "2EtAhVUAvkF4XaVkorRuz8mywLUKsnQNi8ozuMEcPfVoV87rUfr8AXMgRv9yd7yBaqkgRpgVy5XN1qRxcSiLDcWk",
  "key27": "2jmUBe3cfKgXteoYJwqLBPgQJviEXknuuyPEJJkCVUtVoUuvFHUVJGwh2fK5T6eCv9xYzAcsJKfxL9gmKcQxBnR8",
  "key28": "395zMXmcj4h3HNfUmUQGALeaDGTffYkBNxymhCrvi5j6H8cSMMVxEHpqXPZJdcWhvN8FasHBAtYty2yXaXFd8Faj",
  "key29": "36UrGEdxLTc8KPZfAbiph38eK72oWr5S4s53ptR4zk7ZkakKdZ373vZtZiGZmrgtY5kkaauhoBdCk5AZ2jdUh4tB",
  "key30": "CmnM9g7fDez5dyr2W43JH9zGuWgFJkcbX77j15PokWmjyL947vGBFz4o7KYiFMG1a4sj4EBVnV1QscY6o1WaM4r",
  "key31": "32dK4MqLEppman5VvYbXE2i7xVkQPBvf8x5wNhgDHGGTBYzCRw93YxWbenZMqDrruS77CdgyxyGD93mf5E6iJPYH",
  "key32": "uiXzyz4DicHBUkfdMoGzGcfpy1CMKkAsokMVbJRchf18S8zTCJzzFFmTNyn19LWeDMiEXgqrwbF5QxhPQ3zMqKq",
  "key33": "4y4Z8sszSApYFzU7ZpoXJ6gfK6Gf9c1EL2j5tjtq9th35S2FjMkGeBcYSwDxG6GEprXv9J89EqjnXSU28EAt2SZa",
  "key34": "2LYeJXDEc2c1aCqLWU4XLP8siZiQ1aSDcF5WMYocpCZntESifemsPnppdVJz4j4tgCxDJjgDmMZAUoPJHBFGukig",
  "key35": "2JrGeYtxgxAcr2cjNjZjDUENV7UoVgH8mgv1UbKv2TK7BmJRNXKJ6eMxrXdGzNnQQfpdcd1hFEZnNHQNuZHFb1HE",
  "key36": "oo55dNV63Y47YVmGWsdzvQN3FeYxiszrZsU1J13o7gsLkuraghtwDcBRT4CRsn7j3dWd1CqaaCaYSp9VWQ9bKKp",
  "key37": "5b3VdznmmXVPNW8zeaHPt1aqsfdgz9KdRsDL8jGiXXFvnCqYs2Bh7BRegymfnwWEni6Q8RqXQ5HCq8afuKznTNSE",
  "key38": "4w5DDAJYHrKEa2Rka4K3deUtuzTekyfFR5ejaDekLKMLw2UZSvBTAxMcSDtXom3aXynthi77LENq6sB153TDCziB",
  "key39": "5VXLbu4fgB37dBHVcjTk6RTsgQapQcEW86f2YFtEZWSaDSz4Gqv28uYJpFfPduS8M1a9aQDARQ1U9TM6tCMZFqwt"
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
