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
    "2rp35wLu8XqDaFgoyh33aQ3taG7VQdxSxJFfTStqpuPgF1EW9CHx7Je2CSVYctwDGeHvdRKJrXNayUAWKxrwzsgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jnyiGvfzRWzNJCz8a4mhtuFSdNqq2NpTUhL7qkoo45u8YXpaiZgVE5Kfp33tjumwyJQKn2n9FXzLPUawK9EFi9c",
  "key1": "2jUx5njUWsRdQAnaHvThzJk37DtabQLk5RLGCKgR3qV8psiFxXfUiS7grHABRARG47NNLjobzox2Nb6ojPS6AdSR",
  "key2": "3gKCpWLdKyydQSTQFi4vSxYwwSryMpTTWnfcpPvPBc7oNozN1wxLXnVS4sqACvHvfDXCq8Y1ed3dUXuSJUnrvpTt",
  "key3": "2923DiS4FZUY6yTTpE9hgbZzrJxBR4p4MHAa5pakLdRrSUVzhjh3wSgqngFvYnoMsKMrceP6U5urNym7jvpEpcPM",
  "key4": "4L8NGemVqo8bo2C7ybGSraMJTqVBmAE22T4EjL9e2W5qvwm6PcE4upA5ajSE1e9tYa7y1GyiDkEVuwaVqYQk71ro",
  "key5": "4cQVq5YrktYeTQvCva8Y3Qpt9sbwmbERLtJS8LbtQXtKBV6yKSAUjfdgrc2hZx4YYq2PSYMnv1CogWGRpBwJ2KvJ",
  "key6": "gC88cBvavznZGVspjLo8YNsREo8qexEhSgucaD2Spzktk7sdBbEPCqnTovifr431MfKB63YW9ZHdVkHQufBxhTP",
  "key7": "5w9qtA2PjvvgVQR1yrKAtcunsyzRhojndxxeXXxJ31CbtAh3a4knthxszZfVmB8MhdGc3Fv6r2JdiRCXAtNfC1sJ",
  "key8": "46xwRRNUED7tkgn73sPhXhyKDsqEAyXQeBJy256c7yY3vHFPcGeLjNGq3gMprpoJbbtTiFdQojXnjJ1bTviPoT8B",
  "key9": "2VEvNcprQjBLrV7ELztnfRECxyThjdtStVbgGuWpr1KfMuRSRN6btVaBFXt7bFnkeUSubYY1Jy3XGt3Hzv1q9kDs",
  "key10": "2yWfXr53Ng5eSgEDg9uzvUJjLRUKZMHskbY2DrSoqu9oAWttN3yxGVAsuZFvr9PWF1699RSNAVGfvd2YApEdRYCK",
  "key11": "3n42ar6duW7QNnQnYano7MQB4CkDby53rAxbJ5bCVJraDSm1WSfrsaxkeCDBAhPt9rzBxmLtiZL5naTajCVzuWTz",
  "key12": "5xkb7toAaYLrgm4yRsiz9oSKFyRfuaWtj81fQmai57WPi4MdZAg5PrHDkKU1tkhGGdPhcN5f4fEzicWnj9ZyMGwZ",
  "key13": "4LpYurgbh7Rknwq4vu94E7w8w1pxPT3Fc2rGrZRARf7w5yss6MRQhBcbyRHsper3PCawnLsT1rPCAti3o36hGAes",
  "key14": "mKwyDjcLkWyD8Y7oFsHyzZdy9GS4KQiBAFVsBs2qtLuBZyT3LiqDe58xGfHhafTetfKiuMA8oPsWWkEvmW1aaGa",
  "key15": "9Q46yVBuccE2HNMfD8q4zqWpekiaJMGum1Dd68ZGTQ5kEv7spcQhMfmJKx9NKJiJmykDYfsihCuPZpRX94Wjgrv",
  "key16": "4GXyifr2vNDcdjraRhvcCg1id32sNM41cQzVnw3brGMJPryw6Z8a5s4Hrs6FJHpgo29RhmwLuruZn6UXfvYfSpZ8",
  "key17": "4JFFcUd1MbsiDZAWLA4HZ9fsDNCmK7LfWwjDRFKRkHM455WniVCGJA1E3PvXhLtacsvhLjYagDgeCUJA4ihXyDyc",
  "key18": "4bmnJH5jhpXMLV56weQR7ytUEdoBDfeGE2Jo6ge4yzyqxbX6UNLgcKRexEx6REaFLBkWLpAHvwGDj5H5P2zcWmTa",
  "key19": "NNpD3EutCLnZpFH4kkTy8pc4sBxT12AoBYwHMk6ckYLQzRHv9igx9Nqq2Bawgeusbe968cZt2VZi9pFUbESri3t",
  "key20": "22wcHXHWLFeQtX3AigDX23zrhNsLZU6rzXDv63eFyW4Pvs8txUwyzpYE17K6UsZgBFpS3rVF9iaEE1MhYfKGW4RR",
  "key21": "5vtApvNth5KB6rAURMSM1KUpHphZRxGDKKmYZrur8uNgjKfCVJKKmZifUAw55YtEbSAoJKDkdkdSP2qba9pYPUiw",
  "key22": "4QxT3QSsYeXfLgxfaktZAo6p1Fbom6nmMnXQpVreKSKVis91y52PgRuj7o88V7n4RsQZVywqWQvSE7ZNe1n6bErA",
  "key23": "28ZM3M9UYxVYi7qST9WNTvDoUjKG61cZWVxTiCApeQcH3VdR1rJEueAtycvMW4HnN1vmhsV6DAc6ewJCFprcXZoo",
  "key24": "4EMkQGJHhtixzKcNuVHF9cy5pqXPsCfFcwhss4JmCvSXZogsQArZgg2WJhc77fJKPx2JXVJ4hg4JXVnqX46YWjr6",
  "key25": "42XJrr2hG2LBxK4D85S6XDmcvYJLNLCqk4xQEe3pSwf3KJ8DAh84YzJ9yRfkSNfXL73mZhStcG1tXs689mwJoVDa",
  "key26": "413CkzK5X73k7hcRhMcyr1fNaRkNJBNJatCWoZmaE1abQJtJfpJRE9DCziYbka8tNSUBszyHEUE6vjAd2Moo9aKe",
  "key27": "517RQPMsFf36CkKXu8FW3kPWPvR85KNmEAji74ifd9YkzYiHqiaktVWULCnsorU9gb5ZErSfrSpns9cUWYdKQm7p",
  "key28": "67gByE1S9EprpkFCLwgpRMw4suZrdRPaNAnnJVRmFicudejfjHB8sUsKBPEA7o5A5WKgU6DHW8TQKbQ8YYbc4PU5",
  "key29": "57PPuu7gqpKrAs3u4FTWT6681dpfJAJHAe2rR9D2sdDovK2Y5jiWRQCmmX3xhrVxLBaMeRZnYwL9RMcjHTPknGTu",
  "key30": "2dVJYDduCcFoz4vBjx5uH8LZaFtApA9ohSaQzGjbVMMQ3TK9d9DophXrJNxogLcLd5U6fVRfU1q8dfKW1XCCwwpR",
  "key31": "4wHyC1NzdzLCBfhd93QMvaiCMMkwvMLnYBN44XwWFjTdLYAZw3D9CfYnLd5abgjL3VHjxL7jdUKCkjZWEgEdZ81c",
  "key32": "SYuivB58C4rRqTxniVp4fECEuymrbyA86GxaRPc9hzcrYspCSmM1kTajnERwNMqcG28oANhEQBw4YWj1CR8ZBWS",
  "key33": "4VvtHGPbXSGt4UBKtp11SGWNVuqoQCcNJfFYL6BcgpWjJiMBvoFMpYaGHbUt4GZNxVqUXNsZUs6D8zWUnspx5ZD8",
  "key34": "GkS38jwusQmscAzJSPtVsfxqAuGGebLZntGvF4fu3JhAeqwWAszfGWLqrHGQGZQaf67TgTCVuFw8Ey33FpdzpS4",
  "key35": "5r5ZQoP3NqBtBNge4QaSqJZo78PufytdZk7Y1id1biQxpEBeEbgQjfcLhrcaLAaFGoD1W4i4jqSgnHDemPw824ou",
  "key36": "5Uv2H2e6756sF6WSaTTU8rMPPjLQyuRKjZpjWeHAYouPa17JinQEZPv2h3kXw1av57Q25HgVzeSSHS2eN49Twcum",
  "key37": "4DJYhqbKLNzd1hx4fts4o1CHM5QB8RxzdF7DyfcdR4RiAPvA8xoeLQGUK8wvMo35t5aJyzsgfv6LKEfJzvktq9rp"
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
