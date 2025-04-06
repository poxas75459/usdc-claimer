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
    "3ZBBo3Lf5fdAHRHYhsBqDuVe79c6C4fPkEBAxxCQiHxSJsxSCJdMhNmv35wUTpAQEZytCQCibcfvS9LnzMJdFvPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AhcLJF1JpzbCbddVxEYFvDVEb25ce91E4AQQZXfjg3wwYT3KcyfUtL4Hzu4cd8NrfxfNpbgX1zYPGBrWog8v8G6",
  "key1": "SvYdH98R6N2aUmJbH3w5u2p9ko4PcLetwzcTM4RTu1UyExWMZs4F3rJjjhCrKnvYBiR16C1AGSvZVSDLAi61FHk",
  "key2": "NHmq6QGnZpuGV77QcaeZki1sVUCTyMjVmwiA3GcYv4A46hsPzkhJvptmbM9kMiACGD2iVnbSmfWW9BLvfXk8jiL",
  "key3": "4DLc9RHz5HxBVhkqtgi6fF8z5FZe2oPmVwdnyqwUp8g5eiVkkXGUVVvxCUimPv3B5YerK7VC88PVanp1vv3o2VJb",
  "key4": "4Juk78oTREj7uo4hAfSWHvJpE4SeUvE35rkE1mvB2NuZEz8n2NBFNPxaQuUkVp1fvmyoCWTC5xQpJKpCwrNXHY6m",
  "key5": "4woA3cBC19XBkQybPHv4NjgCmaLudormM5nENhixkTY3RWCc61jwtXVXpfgioKvRnNFBv1NdKpVgxXa9gkb3JumK",
  "key6": "2xfFqeowF4EaQNjYUcSrBm9bTa5Ze8Ucu4yWRb83YSm3JCuQQ4a51hxdQxrf1uhC845nvA42zK8QadHTVVFn5Q5R",
  "key7": "4DZpJzLZfPeH8DUxHac1j9EFaEA9cxAyKzZ67m8EFhHwxkVBcVfzp9AftyxDAHPULXzCRhnR5AfusCYb7NFkvV7t",
  "key8": "gZTs34FqrGKf2HYHghQNBk6nbaE48fNMrh8vo4AQJm4j862EL4MXa5DFMDnAXbjb7mhrBqixojEUyJKiPATS6Wy",
  "key9": "5UEWxFQqEtjmbZByEvHTVtJBvF8j8ThTFjJEHX1VYwDen7YoowBsMscHQuhjVHaQPo2qAEPfETGpHmnbMPXEGfKS",
  "key10": "5zK1pwKJJfQ3knVJLZPazoLYTRMFDfNTeYw1ZfsHcbtLA3aGR793GgxG2RCiKN4txDEp7e3khwWbvwXDpTTRZfx2",
  "key11": "3UC9K5ErfeXgVmUT1aw8ktJPy3Bd3B5jJGoB6jKa9whrUptPjdTE4HvDbh3NAwfvnQzgjNzupeSDfns1EFXUruzM",
  "key12": "4EuYihUAPaiSyiEoSKhzT4tDYCnBdZPyip2p2Q173PqrQh962s73B5JDnBP9onMFHzXyS6D6D7wiqFqeJabGYzRc",
  "key13": "5fe2fTQ5Q1qV1DAefiSPphzWYZrTibkX7VDNKvPuhLoz6yKbbdmbQ1REPTbmkibikvYRMeqMF3ByGVtAyRNPfWuP",
  "key14": "31z9CnGPoByNY4QRtoQT6qety2Z9iPmBpQJaNeo3P1nMx2yUTSPXWtAfzc2V1Xg9M3QpdiQe6NMxCRXuQWRiu5wc",
  "key15": "5e8ee23hKbS4tjLDwVsH834WmKoLgUvAQUWDTjX8gxvV1FpoUhjoFK2DkKucDbrEsQNBTyHKTAXV3Jk1UHnPjsAZ",
  "key16": "42wbtqfb4ZDYnK6jqPqsbejiuPBpqSW9ZpGwKmLvDArEWGbbdXeTnVnfKZ727kgvgc1UamWcvoB4eNxPisVgH8kJ",
  "key17": "3FDNjxzp6Dmzw6hBDSd9eKSHK58j9KSptExvpkEdQKN4sbaQxwKzAEAshaBabUvwriBfaz7S7TRWiWqmdApM7KGL",
  "key18": "3MsCKDVLEoXppgbuypXE2SECESjgpzE9MzdoijoR66pZNHVypRTqSNuUm3eDR9NYexKEF2vo2SJdydo6rGAdmDR7",
  "key19": "5XNJeZLHL6RJyEacdYXyoiS3dtahk2p5wX9W59ZSyW3d6g6Q3Cvc8A32fGVo6TdUwqnrvgrMDtJGhk1caC7nJsGP",
  "key20": "3HJo7tpA3bSbuY1tQaQCan17dS6gnrhDN2fCdYMa8cNKmtfDaG865JYpKyvCWrF3wW8EMCMfqJEPuxzM2cHPdiKx",
  "key21": "4KmxkKW1LoVPeNHeeEfUdnYqrG92j7EFij8HCViZGPLXMpfSrpeDRpSFd2iLyys1WDnf68vMWorrxz4Q4RRhqkhP",
  "key22": "4w6oQJsDBPiuL6JpfpLMJbn9tRaUVUvvzVQqU6EUkE2tpssdwzS2FEDW99Vvgz7N7nT7fqLxtrBYzmREiLKL6udo",
  "key23": "4rZdKcMNCmNfWvKcpH61cxjmutNj8p1YJuR1Gi2hR2FAezuFTddfM2g8JhFJwtUBPt2TJ5SRuURiGjBd1Lzwravu",
  "key24": "5JZGSeLuDoRZ8sdx5GkG8PPddxCmotwYqVpRW54hNZZdUQnAVjbLwnuwTNZRY4oi62hgQB8R1AFhWF8UJkJbVZ2M",
  "key25": "5SjyESQ11Wvp8TNkctCGDZoQ199cYXCv726pH4rMBTUitJUx4riaGeMN5EKXT3GmFo5MKVAB5PEVt5dHJGWf6CHw",
  "key26": "3EfN966j4UkBxdEzJGYKAjUMd7iSdrSYar93Q7j5gu4i4twBMWWqEhWhtpvyAp5BnexrhaLmRmmY2zdTGxMK4r1u",
  "key27": "5MgXo3tcAMVwydNhCscUtA1qA4uUDBQxpXCcmSadsdJWAppV7mhVF3rFMxkfSA4ztsVmMcVTHajoo326VwPC9QyV",
  "key28": "2KtNeXrXXfXsNVLeaTPZCPXRTVKCv2mEaeMyoVToCH3PXN3u1p46SajGnEeC2YvJScev4EzP6CYhuvvPYv7qVRbz",
  "key29": "5WJKRY8PtE5sDpmirg3HuT5q2VRBPjqKRbV5QoTEttuR4PXB7bo8bqCZ37jkAaQYP9pq4kfZu1NWWGo2JPP51uZY",
  "key30": "h7sDW7XabkGRh686DzVsa4AfGbM4QQfabpMRPpkHfWDbAS53U5MA9G4CpsQ1Dr39Jr8WoyEjoXAMatKZmikBsZn",
  "key31": "2ekhh9PZkqycweF1k43JsyME8uYfhAhiqjjgRjiYmdLZ9YdbEC8rxTwCNt3fEQmX2zayYCp4YV8Y7gQR9NrDD9P8",
  "key32": "3kxjFaagymMThdRoqae9peWNBxnoqt1rPdMp1sUVrmeAzuudJ6D1GoPMuEmzpEpRNuGdBNxG6MhsA6tGURisLbdi",
  "key33": "3wqdGBKNVfbXeTa97aFKvrHi7GwDhV4NY6RwSfFzMxtK2z1DgQFgR2xEvGXCdSsCoeDNRBTijH2T4vLUEf2SXJCY",
  "key34": "4sQykfxi3L5MtXWdQitkJLpgtUVcRUFpV9wDQCQZ2D7kXPsTpRM8B9q8dinRv7RUn4kjn4A7xpfnNEB7aKc8iUoQ",
  "key35": "4GAsNnfcLcFk469mhubhXyywToaMKymA81fc3f3pJjuqvfLBuPYLJhomMSK3iuEgPHLrmMmhdMkjuRKQDYqaYJrh",
  "key36": "4uUgSTuoM9rZtru3vVrnkxvgvRfbF8MV3WezBRt3rNCpZKdRq9bsCPpP1426jafPB1VGotjQeL7T9TwsCvCP9QB1",
  "key37": "4WSrjZMDs1BnjQkTnrqkon37399wftNpw8rMEPt6h9abPuZ9egD3qsfbpp19Hr2KJ35mdK14Cx7DPuFnWiEHJUVA",
  "key38": "mSTz1Df3ASXbntuCWzGP13xSgYFEfJM7SZwJd6PLa5VCeZdSkZQ6VXmxZ8ajqmcdGnBxN5mNjxoQmeR5cg9KAvo",
  "key39": "65Bm2x48TMdWRRw8e6XF3zQBkxzYkVVnTrfWVoaHg58n17T4wsmUHrjeUBmDHpHipwgVdpNz77Jktb5ZN8DAFHtb"
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
