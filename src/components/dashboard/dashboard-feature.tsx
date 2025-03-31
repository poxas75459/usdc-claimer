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
    "5HeAuBBJpqR7NH8ZRM1ky7xgS8ZwyQKkGXSLm65gU7c7ZYq7cm8myJP68Wik2p2NhtSnc8SrU7xCtCcFQ8XQPK3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iEzqiq9VK63yiSq7a29ERJmkBMeBwzXp68KzSZb95BfMEbWiNarUkAXJ3bkJKPQMC9Un2h2HcdWHQzh4ExWnJKA",
  "key1": "bMrioADLRttZBpNeHtJUjWEZGrcUFE4wgKHstKLsNhawiYPgWKsFfj4dtVgQj6bN9xQmbecRHQB7zHvSM19XsWf",
  "key2": "2rrxbrQp3n5aVYjyMpg4SjWnECT4eFCP2hPkaPAFF8XM82rEkUtcTSjw6LGHovuouFa9rjHJJ4T59Z8Wj8yMntE6",
  "key3": "5c1USfJgEnnxDN7xA8RDxExKnuUmshLq4wVsKo7rgGBUMyphRYYGNPeS1xLfMF9bWDrp9sLmBnYwc7FtsiDPJQrT",
  "key4": "4TVwt5zbWTUWfeZ37eLaY5s44XUf1nowVMPUUBHeFfELzMywkwbhjBhMnxdTzX5rWyBY8DT2gGtr1RGFtYVPwKQ3",
  "key5": "59MfKAViVu1bcysw4xseVF8RwXqhYBw7ytaXLtM1U5uDD9ovgfqU7Wn7LADFuaTGje9u3vzxzPp7sSUEH5q6HSoN",
  "key6": "7VSVCMBvb4MirfowmfFVYbzFGs1MVSoT8xL2qFroFp6ZTJsGzU5x56F5Jvg7gqZqXFFfiQrQSp2LGLUVwamfAuZ",
  "key7": "d4bhunvGDnMx33XPbwwqTGnn2AyBma5mFtShkZ98kNqUe5FMRFjiJSACmCBQg668aMRd6gzZmmf6vaM3VY93Km1",
  "key8": "5DzuKN45qP6rAL7SXtqbaMC9DPjSDLQUe3QgQZLCgi4sgvsKFX5ucro923G4UCBEjJpeZyn7h8Nvfz1XvptQpBwJ",
  "key9": "ri89s2D9USk1D8S9dVbpzLh9GSY32cUcz3nrNMMyySAYu8TAKUZxrvFD8b9MNBNbxgx5jpJgbHsAHE8wdtcP3SJ",
  "key10": "4AzHt5ZNbayQdR61fuskhkM2Umy48PbhMWfUo3iN2dkaeeMRsW1KuR3KJbHvQyJewYSBbD6QfiMm4Wh4cHDWx9vP",
  "key11": "2xxF4zKuCa5ppfJnpYHqt22qKZeYaUiaGppyeRfdgtqSysxiGQbiaJ2jaWvthKzSCduR9Xz3SFVL2515Km6hgmw4",
  "key12": "28M3v7D1ajh83ShkX3SSrCEVT91D3GZtZA8tG8WprRcUukwP8D3oNxRRvnvBWaSXJXFyJX57EY16JPyt6JXrADU7",
  "key13": "12A4zK6vY3SkdgUKqpZoYaSFCx79HaD1RibhpXJuvLz37rmmZ4jxwCcv12MRCWbBYLz7TFxDNt9eSqz7Hyb19ojh",
  "key14": "5HPhcY7cSxoyH2uJ6vnY31qaKv55ZLe9j2MPNuFUVvdMTwrQEAc99PsXrKoJd4CgSsDRAYo4uL8wgGvvQkxqMTMx",
  "key15": "4phhVu9uzijCMWip2rYNyys3LwXV1DGsAsuHXUsRGCBQs3L33VnZ3c8fauAMPNLAEaKTU3p2M2KQ73VGwEgDx3Lo",
  "key16": "5iRdnGQ4pwwW8xSggPskKLVynsL81WyKis5mB3muA9mXa9MekUGA5NUYc9uYmE8FZnR6JiqxkYoq3ZU7xQ3Y4HTW",
  "key17": "2hjEi9crk1TfwqTH4tv1fnbswQxgDxUL66nMvxe47WejnErh5NftbNb2BFh7kk1mgS6HR87Tb1r9kq2rqSVL54Gn",
  "key18": "4SJYq8VQ8PjQK8P4UfbvqZVmHsET8AejJBb1vXaXVV1L2pTTZQ58KyjBifEcDBoQz6PekmPhNFzfcxtLXacgn7w3",
  "key19": "3MQAxxCLRBUwXEwdeeukQJHtgyzBUcvuwdky5UFm7bHRwGJymYAkqEmsN6uTeEroYx49qCq6hw7hTWG12oir8tMe",
  "key20": "58VKBwyTbZupE3zjt8ko7BPNedCSX1JNzREKvtbAxxESehp8Kr4PNnqSsDKvWm3eGn6BNzWUZcYKboGfiQVmqDrJ",
  "key21": "K7LnCtsn9mZqvYWmjtF87eAGEetv7vFJYsK23rBh64tc2qduD7gCQRbUqGXqKsuXwV1RSoRQnLtR5z499U2u6XS",
  "key22": "oG1BTTpoECkHPjeM96UK5svii2ge59TwJMkLs1V4Bc25QuhftiwX6cVehXKAEkjMdxp2wbYXNbKR2vP8B7fSJGV",
  "key23": "41z8FiadpVJmsSKT6z7DV7wNke4Uijg7FhsPyGGks76aoLWxVxktK9H8hRC9vLZ98stGjVhApeVyP4bCmthDSLCG",
  "key24": "65HUsxQy8ufGpyXuTs2TdSMikJQbFByULSH51QugNW8aUGZ7ytprXru9y2j7FsSbxeqzDUBwGZ8VjWjU67jhBGQR",
  "key25": "2WoEDQPJ9z2CAwu4V5pHcC1BQMGHw6aaurBq4ZEUbsPm9MqQXem5keF48PS6zQ5ovudxhwovLf4pj2mii5au7mj1",
  "key26": "t9RAksA1fTUPpSGFCQyQkw8kj4CyTwp2k5KaXQ2V7mLi7bzZBYYVnq9DDa3ZWC2diXfNCKn59jLupSJF2EAARXA",
  "key27": "2ZxdH7Y9GJmwaU7P2HPfz7oH5UXUrARxxHyxL89aVzrU1oxXr6YGZsQi7tjEQNxwfX2Sd6WUiiE4JQBTJAqAYZsm",
  "key28": "5SFH4FvQvVUFigwenSd9hcXGLZe3UwrNgWgwvupabK9v26T1FjwVkW8BTyn4jpzLYp45A9KbsHCPnEmt7bn6QVQL",
  "key29": "5AMTouRzcchX7R3wRMrf5VtQPgq1XV2v65eCMvnEyKWqHeAHF2h6JKp3TnoXDEfcWoBYWTSRNhWtnyXzz5e2yrrk",
  "key30": "2W3DyJgXMQoVvFzQVNxsBme1T8asrbkRXmyabfasxRMDbjwraCMKJZ7RS33USZEbav714GLsn5WYzENhUbBHCpF4",
  "key31": "2jYy6TLJhkmskTLJhgUHgsxs2GReBC13Cv4RvQhfNaFZygYCT91bZPhmWnv2gJqX8cqkAEoUfDLdfNX9ZJQPeFAK",
  "key32": "53e48FQs5kbYvdiRCi72x3VjZWmxWQiYGAsrWYqmGU8h3VYap8c3oiiCzMohqMj35h9vmmFnUuKZwP4PkPeaDxbr",
  "key33": "4gvy1PT2B9uWr2QwW4k9RMSQ8VCkLwTtvA79LpYzh6oKHFB8WEY3zuCvD7FqrkebYRYzpJw8dysdwc3djonQHQ5W",
  "key34": "3PHEkhp8dQg8tUid7m9R2ZpyTLpKWBR4R5CU1G8bkgeRhjs298iXhnDktYPh9Lg85hXhVpUHteTrRsviV5bCjWd7",
  "key35": "2byMg9amsLBNxj3BaSiaRM38YGH1tmf145bcwu5xCwpF9uujSbEWA6fBUmEbCWqyTy11j9cYRySLo3yfXn8Ryeh5",
  "key36": "pb5bubYJg1cCoyW3iN8b4NZQuhrGthAsL1ppagSM6gs1stpmDs8R8cdXWyVHXUwUTLnvZSjbM4nMbsUvJnhjp4M",
  "key37": "HsyFBkB53AU38opzTbepCTjd99e3JSzvM3n8im1E9VyMdMkqWj75d1Stikp6JcengUi2STaWJdQguHpr2WHv34q",
  "key38": "rGEiXqAzLJKYJWExt31iNs7kZFSL2Ax9zY2NzxF7dK9YrHzUhgbqQnkcipvNG4DaxdM5ARTudsgWCofh6TJshvb",
  "key39": "2h9tRkmQQsupRZFWXRd3cMDWw1KWkUdQNE35U6FDHjh9SaKM8qkGyYVW4UA3cnQtjTFpFGJ6YYt3192MG8Ff6x3H",
  "key40": "2zehswRgbud2wu7NGxJuhQdcjnkbt4NcsU4RN1UgNgRBtWpfAPUXhukgFtM7dUctiZDADnLNiKg6YZqsTkbTDiyn",
  "key41": "3HPJNk4D6pmjPMaRMzqYWuNvPc4qTugYA3AN2Ybe2xWpjQ9oUtoqM4dq9Wy9L7uHPt8Hku2vGdiUzviHMfccaEEY",
  "key42": "5eG6BHKw1a6qPuVeG6vHRDxpwdGeMLiD5gBa18PmXWWCrAT62GrVqXZiwfcMnCRLEja7191FX6cepAH3vgg5VzWT",
  "key43": "2kRDRchEc18LSfFQVG9hMj1NEHGuXEqtLiZGCiiWMwWd4BKEHmL1SsD5bvvvXo27hmfvfksq1SNbcGGkSTrEsLZR",
  "key44": "4g6Cr4bjgRxPJwNCPccBk4HJ9yhjjv3ZSNu3vigJQpsHFqQHtHS9UaQ1PT9GkVYNLpDBLJeqfv2j3FwrZ4TBs9uH",
  "key45": "2Wz7EPCcyPeMJ2XqA3LZCc1cFteYo3YyGjfFf7yWYpE4RBRvYtXr3qr2Wv5ujfrRkRWFc2GaWhizLNQKK5edNvvs"
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
