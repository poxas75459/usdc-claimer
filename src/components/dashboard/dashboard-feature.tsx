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
    "2XGWSjE6vogNQ6BvWvP8mQtoUnxV4UCLq4pJ9KnaFXmzYiSNyeT27ESEgMqCD3FB7sV646etQwNBCrnip3fYbutM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z7pg55AxfxkCxxKLVfAfd5HntLM5xYfb4TmwKzoQyKMm14WxTHLF1yBNWysXAEVUnjgmdwb45KVsUFsWt7ra1iz",
  "key1": "PGmt3wmwMFHLHZWDwXkHjgXUocoU2hnp92V5dXjPTk5zu7JGNLpDpn43ivHX1u6g1Mf2F1VmGLb3j8cYgzY4wqk",
  "key2": "46dGpPkRs7tJ7PXMFBVkx5RVvaFQpBEHJFwyCchcEk17CApzTBxUytees1ew5gRbaiC3oXRAC28mUdv8SaSNSFxa",
  "key3": "2XucJjdDg8bKvnhfmRPrMyrjF3XFriZbGFwq4PMoQnSb394RNYy8MFGU1WGawLd4A87WA9afnNSD8fpij3p6h1Rg",
  "key4": "5iefiqZDEGtky6h3qJY3TAo6vHrKcGAvAEDPLse5Ctd1GErSjzwGaXs5HwsC3TwjVjXewEZDrXr9r2BqoDQa8jn8",
  "key5": "2JFGhbPZiDXHe4Rfr1RqDyDjhMVnkVWHFBdcbb4ZP1b5zWvEFMb3kwb3iZWFmEDumQToSzRzZTwaN8AHdnZogH7e",
  "key6": "5c1H8yZS7zyEYus8WR2EQr57V1SJy4ZpJpitAQjiEE7weW8G4Wgi91YGB34aJsdD5zQvL3r6qbSMTdQWArVjLZbw",
  "key7": "xgtGYR3JwEkKAw3q5EXQYdRZcjk5TSZYYTvPjBUFfqjvfa9E2emHX5JN9k71N1RnTd2jc1i6Z9WxrFfwueymYzC",
  "key8": "4sQ2md2DT5nbWWc5h2FM8d12o6rvWZSAXbW1n8ftGamZHoYZMf7tQxzqZBsiAHP1fgL4p6d3pqc7RL92JJcaWJcc",
  "key9": "5tf6CutyeTZRji8fVJqtGGV3Mw45yZezYDtkPB8H59yefKtywWd7W8FPG8DdfvCPmtMav3M6exJx3HD1YhuArp8c",
  "key10": "4RjjJQfJUTETDCgtNfcmGCbL3rqMNtaXGUhLDekTBV77cyopeKWTJ4V8HeQjHUDAa4yTFqJGfcqixasfeUCRtEtF",
  "key11": "5kztGezSen3yvAeEqwVzeRciNCZJp62EXFusqDRN9X9mb2ffzumfaV28mt9egD7Ze2iEoKeCskEFgS7iuKbA6H58",
  "key12": "5P9nnPjQmdQqqgRFz3y5es8LsYB5jZaoqS87iT5fLvR4vtpBDSLUV3eAixGfmW8h1AuWTLts7XFe23LQRsmfc9Wx",
  "key13": "3h6DA85TAoRCnyagmjCiSdo3say8Puxd4njUkRkttpQe5iDfLMBbQfu2RLGaktADfEvYYsb7SEQpr6JWqh4K9fYa",
  "key14": "5ipEFzhd4W32aB1pGCaEKwV3cf5DGKieJSninWo7RRgpnNxLHgxpLuF77aYFdX8hV8EgCLi87JGv9n19D3Yruxwk",
  "key15": "5hamGSUJD59aEBNGeFYbqY2WosBAPk6RrwREy8sZ6zfHZWZQUAim8w7Qnz4iXkUprtVajyMWnRvynPiFGBwK5Vtb",
  "key16": "3jv6nVt1UZxs1DrjtuYmuB5V49KC5d8UF44Rqe6pHDaYvGg6xEoQWGbSx1qtYf5KjmNs9PFRsabvNhxPp88Z6DAZ",
  "key17": "4Pzbx6NAH7ZiMB4Zs2aG4osiutzPPP6F4MUEDcwjFwGtWSyhCsjSz2UU1a4kP79mT1D7QUvD96S2mJetSRzHFz9q",
  "key18": "2FmRvDg9PF1xPtv8ARTsqcVp2wnY1qPtKCamsHXJ9aJJ57Rdzec5cq1tArEjXGKHn2DCQk6gdcEKbo7bdXLPYDCD",
  "key19": "2rdkJFw21obZB6LBsq1hA4Xr6iPxGoiTHkHommYdSnTRCXXe9A1QGr2cKkV71hBkyWfcf2doiDzzv3GXfYQXTMJL",
  "key20": "5sypd5yf7FLyHsyy2JGyqE2yn8axKB1sJDPA4yDvR8jmLUBMnJzkyyJwcUqyqRkHsv5X3zGZEef8SDacF58Diuha",
  "key21": "5oJQngkr6RCnYMFr4DWtWA1unHY6Mn5YszcMhCbpV9afBag73Um4hyBnmxVUSDqCiJZ2PKowb6DUb9dfZcfG6MTT",
  "key22": "4sEFu2hEhEVySdwXaDAjTEbnSP1WzDDWSh9mepzvZsvaZmrpYdCJ5n2uks7bxADTRd2Yik4VK3UfG6ZPjzx42B38",
  "key23": "4dLXoM391zaaNnz4oHB4x7bZVLbBFdUDTjANeCnWKFsSPT9xw4FcpmT3HQDGj6a8qgzSqaZ3osPvspQdFJTCzp7h",
  "key24": "exKFgXq1jGXF2xp7n7qhvRW2wRNadfGu9MSyEqsMhYaJ5oxyzTCirgi7FiRc6aKCztdfdApGR4ExPYgzj3EnZWA",
  "key25": "67Drw9CsqKXCz5Kshx7Js388bKyX7X4XPovDohS7hvWnyXmtGrmcAEpobTEuejadYAYqsYsE9KJP6N6FMCFnnNTU",
  "key26": "5BofANmfAS4Q12j33szkfnWdvMYhfJYLvhLj8NkHzQ4JDD8DmhLcS2Jud7FgVAG9iBWowy5Nm3qUFxsdrUNW7M4T",
  "key27": "2rXrHL8DUZp8Sr9EjTFNdH4mc9XBwncVSaxycG9CYfwovZhvnD6ngHD8kuZNmiJWBTmH4KiRiBnkWFrXy5ZJjoMp",
  "key28": "36V4twuBdf9CoBwY4NwHTzM7oych9mRWo2PQ4k35f8ExJnAWtvyKqB8eGVLUFconiFXDdyBEkCzT5Z7gHhZ1ubPr",
  "key29": "2iuewAbPLXCWowQ5ewXni77iyy1eSg4QeVXKbgssuo1dqe7A3PKPJU75biSZEh4XqiXpVqEzq9VpGbWHB9L7ncqU",
  "key30": "251iErW75mDAoQipSW5SkDqCQwxpDgFQZDqT9vvLYSEjnYFDma1Hivs4RF6VZXvvGSgbvm8o4dJqBifX31a86Xuw",
  "key31": "2NEfvHuRswcc9rqswmFSNNbM2ChJpBfpbENFTs7tSnSLM87drMWUxTJYtXTEQqnQoCtVDn2vkpaspzy7kVbHzhxv",
  "key32": "3425zLAWvFHNqzPcfJegnthgru2B24RysiLUQErU8MfkodZoFjpaJXMNC8YaZRBKye12aq1fNBdLqQdVswEAEDcv",
  "key33": "AWAPd2i7uTHQWTxbx7MczUZMcJSTLyjoregYuYTFG2Bqc9j2xXtd5Y6bpame3fNNAm8vSuNgacQ3iEx3bJNpq2e",
  "key34": "3SYpGQfdxYLHxQzcRRtdgQaetRv4wr2Gs6V5E5k4WTGJvHsAYa76x7T4P5K3ikWv4i9gi4MBdNni87Va1zaZAx3S",
  "key35": "gk3LDutZKKSTnvU74bN8MDLAbMj2oV17BwRQByWf89SriJPidgTYTRnZDZqC9AY7GsRn3s3ddwDkerj2TAPxgXF",
  "key36": "fWVsta5D3U2xujw1Y7UtmUM7fFXeok44MPmjVNxbGnJfvfD9W2MaQ7iniFJwzr7ns5ZhEzb9WNbcGJ3SxnpQoBn",
  "key37": "3LwnnxaoLDRw21QEC4dLVT8sncksUi3mwiBfQSzf6An8kjMo3tQY7jstAwdPadQckLShwJtYYiN2pD8ZMa5sK8GU",
  "key38": "aAYnHDeXmvqhhnGM3zRztYYsAVvb9ZSjpJbCyZ7NRSKY7XWhcxWk6MXUMfUQ7QMYpyomWiRi6p11xGbTv6Tbqau",
  "key39": "Ft1fCHEfJiMsQvRS1HxvaUjXSiEd1LKobTCXuQCvEmxSxqxsvjZm4VdYENuZSJcWBN21NTZZbbCzRcv4Eh4PLm7",
  "key40": "582AWBUk9vT5mHbdg1cgHnkC4ucCcs43yv4eaAYh6GUhJcXKSZmg3T1XV5opcwcUwWYDFqu8w6vMPA8ij231C4hL"
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
