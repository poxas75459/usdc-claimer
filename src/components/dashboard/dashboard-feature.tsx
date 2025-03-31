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
    "2sNA331dHjQz8PbBHik9PN4jRd5vEMUKkA6Uu6SRxCay79hNscVBWjmmUJFrQEjcP8s9YDQyZ2XTBELsCBoLpNb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "574HEpETX3EJKEPwBhj2U1bcPpMmPVXtfNev5FUvhKfyJGaG3vz3GC85zs426KvD5Uu6TLezWSit4Sg6qBqP1Ai9",
  "key1": "5FEzqFGHupKZ1PRCiEzyY7MjiTw6taXcdipSRyJi5y8WBTTziVXZWqbp1qJyAgC1C7uSNEDU49wof13sPPhTLYLq",
  "key2": "61KvWGt662SAvkAvjmZ3WswRJrGX5YTaAwq31gceb16gSqgJr1fnXmLncXYkMPcitHtesJ59wQqAWRPu2T4J6TrA",
  "key3": "B2Z5yXnpZKYt84Hku7sbsDEgA8vxLxtNaQxgyTaXCih1zhB3uZWqVTGEa1yBQjQYnX7GVhBjTmTNYJESa3E8dg5",
  "key4": "5XBDbXEy61DKymeS6261ADts3mDzxR9jcsSjxmB4qQGPKWZ72kqCW21zcuXyxs7TUWwjRvrymgWedcaXDB38xBdu",
  "key5": "447m1nswpxiYMSWPXxj87YyTLonetRq7SWGFKhX37JaqXC6GgMvjhUZE4c5gCTggEykcM66iVm68mXXJDv1e4yTJ",
  "key6": "2YR4ZNFLRWrdE4qjdomRmXUW1BeKPh8T1SyY3GRAz4YBG1tL3ywguWxGhrsgK3sNU5fC8xbFxED6Ug2u1ssEbZ61",
  "key7": "25z4jziRUPCxxRWWRLidHBafTyB3de9Hw88EMrDhKbc8AidfdVriqPNzz5VXkxutB1gJ5GmqZei91GrNZrw8kVJc",
  "key8": "5Hk4uCijZgGCjZZ9ULNg1KWzXC9t6RcCss5c4W6DaD3Yt8siFXfx3RSSuPrRJFvHXMZnc6ba4xugknEWyKcza5q3",
  "key9": "5saD3h9Ln4TQ8DkdzCufPR47AUf64i8M7KNEhDTfQHNUf1MZHAu4W5B9bEHQnT9Zb1REjokMgWnCRm2jAeGyAYCj",
  "key10": "7jdcZNpddmbH36SoYgVdA9jEzWbNGoJWUzqdB6F94JjDb3ibZppufYNTadm8bAp2HUTfqBWzNJMaEq6ywYDZAzr",
  "key11": "32LkLw3H3FCFKXxkcjwEZbLHAsqypnv1aGp8H3Y1EtDiVVEPhJo7axn1zjxzAc6QNveKUETwHyv79unQyHwPvofq",
  "key12": "4mGRgQfc2rwNafM5W3cxtkSzcyRTKLSMYxpmQ2TJ5ZJdQRHqt6VRPMfLZANiTmBq8S1MnB5XcCE7iB6g2KL1aCAt",
  "key13": "Cdq2ZKJRjS7dTYnvvk233VAU9okhwozG1AbEPeEmFZFYa2rUXSNJtLAPYXdToZQ4YGii2DsH3FENFN2BjuKGq4K",
  "key14": "oikN5N9G8caH9UULJFXE86aTcm6FgUkCwWRKd7tVqNkCntK6dN4gzjGXrM7pyAYh87NP77xxhcg1GxKTWDAcvZx",
  "key15": "3e19kWEi9Hpmkj1odLvtW6kNQ3fGYJseGCHo4cat1EqockSX1LZHX3RHESCyESPziKto3cpKXrK8F44TbA2FFKLM",
  "key16": "3MTaL7LCiYWsWvbREr4Z9X4oZKSS3rrKtDVmvZ17KEncXsdWujBsp14SngazdGRiT5maaeYEp1GWCUG9L6xT8P3U",
  "key17": "3QfFpt95YBwjZWH4T5c1182MeXfgePFpuvGHVHqqj6ch4JdNUa8qJw1qJgA4i8dArQj5ZsN7rrkqz1JukXBjArpQ",
  "key18": "38RAnqDdhQnv3whcGyi5dgJVM1J7QwEqyAyNjCZjyFwbXT2mkey75MMxZrqKKvKv9kdrpRiyvw6ekzGjKyWJX6bp",
  "key19": "23VJABtq8uwUBG95BTtb3vjskwhvmigTDEXnxT1gRSSQNzmfDTwtMQjWuyrstaG2iGeNEz99yxxcrRWzWbSmuRU2",
  "key20": "5Z9YXtrvV7uUHLp9fQJZ9Nx39dctGbqjHsF23jx61TNRf6PRb8Jen865y3WFq7Vgne4GKdRWun8hmEQZ74N3dKcZ",
  "key21": "4D8xSDJpeWQYQf9vtyAfUtkmGdugiZSdhJXoDLm9zKkSb7KsKvBACC3yLtXTtVFDTTrQGiExDhPronsNHFLEPWZH",
  "key22": "jLHuTyWygC9F3hdPnvRD41dZmzqhqpN5DdXwJ2mx7zGNHWUt1Fu94kkBb58XoPHecYYhrNffcrWcWrTMbK837GW",
  "key23": "3nCSG9oaLsjGAq3tKL89RJefCbP8VLxRuK2NUP77EAeVFpLgsquNkynoEBLHisgrRdirimWaKnL7EgdcaXciFoMV",
  "key24": "4XrhemeJWjfGsCwBr9BUN58GGhuzcRRSbDitFaJ8kvh31TMf3dBTkgS2FDCW5UpVrcHAgEAonPddjcccJ3W3hwBj",
  "key25": "CQBMMUzXpN77yQYaEiE56T9hZhJhQLzdjCMCCBAxkhFUFLusSpXpBmyvwG4QRqgrAy2AkMaEscKANoP6yYPJbnB",
  "key26": "6WpK7bCBTXBYYx1uF721cCRMidD1pFA8JrUxtfNZyBYYpExhM3TnZAoyXh6qeuodJPbTbmwjUWXE9DGGQzQeqfF",
  "key27": "5EyYLRrt2utxECX9QJKYj65LLPG3P1AqoefTswcM3eLk8cPx3vbmTh9ky3dRhYDNUeoq4MLPLS36op2BiS2cXKkg",
  "key28": "4qxY5jGFbuJbcmynBwtK9WEkATikcfTyM5Xoinc1Sibbr5wka85VfLpgY5nNnEmcQWwYWFhjjNwrGg3ggot5biji",
  "key29": "43E3uiaF7NDikM2ftCvoDfqdAMxMTPJ5Musw5FhQnWdQDHiFzuQj2eGsj3XPvVSBeJbgQN4FbjzAe31npMpqmpzw",
  "key30": "5WcDmzMkgdo6me5dbMEqM54pLziWX3jveCpaJuJYv4TWhn2HGYrHnJyHsSifojni3zJr45eXVgAxtFkUUPvi27Ng",
  "key31": "v4yb6tQmtN1yi7g1Mw3zwT9ELoTe2HuJYyPfWuSpyu5Fv93H4WZMKHubbBetw1htmo5oQFzSbxDXhBy8BeYFWWr",
  "key32": "t11RzpJp94Xhz7azUr5TQaW3EqZMG5kPHVj7eXv3cZb33hgMps2QyqrtQtQTaqPGrnmu7AY8XLVxwEo6UuWQJ9a",
  "key33": "3zJpusfoUokF4BkCozAsMMpMnyF41ogA4ebK2hytJyaDJPgXPqp83KDXiMPsFZNxWKEXjZiy25DecKpwVxZaKmq7",
  "key34": "tYDoQneyNmc8XX2tLoi23W3pKD8DiSD5BXEjxGPLexaMgxrBqagYpur6U2dVCvXDLdpXMVNgZAhakqwmCnVmg8G",
  "key35": "pm3WY3sjzvu7cYG8UChDFEmsnRugDrwdR13qYCVB5MpQot3jxqYfrFg5de4MtcFttvxXwWGNNLnQ9fqrn4MNiK8"
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
