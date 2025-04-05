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
    "2cPTXtGzDqY2zE9Wf6mhRZhVL1qMW4DAoHCj2ybusqwoFY5wtkXbJNrZCRHyqvUS1QMFzKswFGVhWFQeUue8F2tW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ys2LzeN1JdUgxAiMeM5TU2ZRE8HZ3z8uAbK78g1ckbrNEonLSvDZppHUzhuTcydd1nFrcDt9YKKwm83zF2cBx5t",
  "key1": "2SWDVUvnFHqF8Z4qbpNw353MFgcXirD3tA61NipL5qb1uUygX547pxDeM3Nf89oBFMxNhLBndvkRjYzATu3Y84yP",
  "key2": "5rt3tbueN4ajrHEZu3vaE2jLHgBMAiyvwj1VuWuVtqZQsmivQqbT9nP2CcsHg6K6QbxeoZi3S7pty3jeJJzaej7s",
  "key3": "sa8Tin2jj1dJeU3CKfK48WwAf6zedNULv6AtHLSfo2HMzcd7XY5ppzkcAem5iQBwGKDiJmgtNAdzQz6gDGt7MiK",
  "key4": "4g3FytvHAt9udhv8BEMjXQqXssiwPDHKbu6PYu2NtZw55Psu9sh6JiPccntkDvYso2eLrdH5n3pKfhUJn7ktqBwc",
  "key5": "2VHWQvQ8p6zRgDNrkMQonD4DXg34n2k4aaUHmTv6uGGhRgYUxsbvkyWxLKYR3yoT56EmZ4cHJT8s2x6eD2jRUdqu",
  "key6": "2PVKPWDFaXRfQK98qZVhFp2SMxh8oNdbDA6FeCroUcZt66P3R4XtAybZMe5rJGvjTmyRGgYxBd18xoFJzuyMW9uQ",
  "key7": "2ifxhyMbe3B82qTq8MHdk1eKPKfHLgqcFDfgTH6UzQMDZtcMnYZSWMzJ39UCV9NTNWEk236jRjdn2Mp1USeLyDxN",
  "key8": "64bJfJJGnhUA1v5VbnZwui1gPaHFErXnAG5apjWj43fpXsGcLdybqbUsQAzpsiDLfaZrov5YXrsTKwiNyrHm75NY",
  "key9": "WybDGZbbW121hMiivyvM6feUKtQiBpzXFgbHZozuuiuttnffwAeVkcX2ajHzEXmSoo9i3C43MGYdU7LwoVeFCPY",
  "key10": "BuHbZpjrDL3qpUDvPRD3gj2mhnVq6NSUByQ5cRMzQo69FdLKe2Aa7bxNDYrGdzH75weKjoHRHuzctoTz3v5GYsf",
  "key11": "2oHhhcsiNjwCirAdkofA1MYyBMHsvweZcV77nt6bLTSNCccfJikXs13fkuLX5kdQSsoatf9MUvfXJ5daETwFbYUb",
  "key12": "2P4dSbtHVYtMZyBc7ZpkCQXSpGKLFfnjEp16Y5URXF4ZgirpqusU1DkBKezMu8mLqaNjUzRfprn3AAT7GfMoP27u",
  "key13": "izHMkWRzE2cU2na1jybpDyceFpYwTBAAYLg2KH5dXZirZ5biLkxvVR9D84MErVqLnHDWuohawUvoqH4GgsrNGo6",
  "key14": "2pCY85TrLCWoTPWyianCu4rtySwqwdcEwkSLYq6sxYhJf9YKBcSwPQg3i1g4BC3Ua2SvFTG8ryJxZCRUn2n8cNmA",
  "key15": "3qxwui3QpYqFNbisV7HKdaHebrKqSAYighkPNbQfirNLQGKrgVdzkJABTUPwLtM9WVFahptM8P1Te6EMPcL1RUDg",
  "key16": "44G1MtYV2vXxpXtfNG5GZRACtUjH913ZYjvYKUDfB2rvgmxwkLBugV9DWqVbg39Gr4hduzPy29cUSPg5MQekuRwn",
  "key17": "xPhC2PWT7DBXdh62KpARwi78s7ka8f2578Wr1G4D7qZZVy7mPWeQQQsJkCX5ZPAgj3uqGif1hq2NnqgbCg8aJ5K",
  "key18": "4Zy6y67ojJ3w7iuCB53FT7dcozpo3qdwozmPXG52hdpMbKKjLwgz5AMXQAnf69BEo5CPgjvwjgcPpG2Eo8S3gwyw",
  "key19": "GsLsXcXo7h6gLu3zvWLDUD3Rq8uM3Ax8LxBWXCuD8SBNg8roDNRNYsoX43A3wbHMVoMEzqHvLNttgQQw5mNemsd",
  "key20": "5sADCnEm8Wv7hqYURGSDBffZqUxiPtBVe7CfYvEQMk19e49BoFMy6qE7Kju1wPp8oh7FiAFAV1gG8YVmJcctTSny",
  "key21": "8m3P2Qr3GXv34XXKZsxtRkL8ZmaxRND2JaKex3K3jDXh84tFWruBiGpXFQDmixcBDoEEXAxFpeiRx2EvShdnH2x",
  "key22": "54sPb8P73V3pkyZbbCN7tTuNTtQ9PBU7GAaj3TnD6VAaphZZgjuVahjepsCSypCqRBGeq2yNKS2ZPhJAEcH88GZT",
  "key23": "5ogtSa3DXQXHg76gj1n49aby9Bk2sNJ7SQKvUcJYGd5JYFxuHjLRUMPSRsxDbptFrmBPK3trCYrAgXzSVsjRFsnN",
  "key24": "4unu7RmcsGNVS5sRRtCgTeYkJCup4fSuCb6tUMJiAeWwPAAR7ZZZUPhy4Z6W3rtHFsbWk79CLKhVVRM7xw5mufu2",
  "key25": "39bEhNsXkJeJsuHAXeCinFUcaYtdWiPCFaqNvTaay6iVjnAFeHSkrtKELwyqZjcdqrc4E7hQS4GqyQuAvQxowPtm",
  "key26": "2TuNL7eLnN3APzrEF1TCBmxsyDVWPzeUFJZ5ub57BbNQcjMApBtrtzrQvi2u19NRB8P7ssjUcTzziyi6yGhRXFU5",
  "key27": "3AaeezrLByHCS4jQJnojeAcJPKdBKLJiq7Ed1C55ghc9gHxgoqjxNBoX6N8uvoZg5z4dEkoq8rt9vkMuavd9TrsZ",
  "key28": "28J2qZU1hYLkA5sPJypnAcEbZtgx2Gjmy1VPmqyfTNzgiaZVmtNspn5u7dyqvD62xqMpVZ8QEgnwa351vg43gKPF",
  "key29": "3XzpZ8LGTqLN9n9DgRaMg7rs5Aj5LkcnQCeBhFZowoJBGHcb9pqk4WDt5NYCy3MUdgDFYQtfacsj1BdjxtRzhjJL",
  "key30": "3ceRcPzgNaNvn7tVd8Q5jdfP1Bd6mtuxUmh7hSUP6JTLoRLkAZ5kJMRR7fABuNwfh4wdg66yAKMKYsjtPeaZk5aH",
  "key31": "4jX8Fe1cE9vzJrSXGDt1VUAhNdMz2tpbUw2WHWqTEXFsXe58R53VvTukDfyS4TwD487Qunc53wpEXGSMA7VtPn8R",
  "key32": "Cy7no1UeLRYowpzygiqT6vQkCZ83r7omx4HeFHGkSHqUPYUsoeQNXU1xbHK771DBtTwAGbiBxPZsEaohXoBPC3e"
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
