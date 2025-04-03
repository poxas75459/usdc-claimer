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
    "3ukydU8g21JsEe9YPECcnApZdkr4KaRHXPWY8eU3opXLLzsA5RTVLKZzxnjV8895otcCWe2k1aT4ZuuPfK6fq4qC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22bEgqREn2wbPqciQvEMp9aYy5RQsEGbPUeVCeVTDmC733w5D4PtkBukWJTR1RZdy9PC6AWH16ubejhAp34Q7Gpo",
  "key1": "2oaSjfTpZgMdfL9ih8nd3VjKBTGCLP4DkpNf76mmR5VyWCM1geJYejCWiZDUHC61XyodFYfMmEAdRrQUP4wd1WYt",
  "key2": "4Wa7nnyHwVhNoYFCsjhoq5FkCwg4nJ4wd5sm5CaPjw9ghDCeMrhA9rM2U6NcVApxTmfDpdmhKqFoYkbv41ryWDpx",
  "key3": "SpKvkPdFKgv2PcnrP8WBNLisMgaXnBzu5NGqFNw9GdUxmcBZXXFSbJ1zGENVbxWNVCF3eU4TMiZvXmrJdbm8auk",
  "key4": "3jWMR75g6ykDtMdC3DKthqnEBXA6bQib2A5Kv534jEDrrGMb8o7sKAYEqTivciuGWxrxK5d884sEf51LcJ9TZ7A6",
  "key5": "4qrERZQcLNwiMJpyiwyjWwqVJX69Lsrxig4qcQJjkuA3H7ysqTFXsCkXNxoo9kafhc9gz7tGoTaTKr8923CbaKv1",
  "key6": "46iUJfgDoP52TxctaQnUm89AtHfMgs9BQ3YrPKVEkFY7KHZDpW7cu3DxQCHdVdqvANCHhYevYPq76suJhvUbP1on",
  "key7": "4mFR7ydEDv1vzrnzm3SWPYWUXNoHUW37qt8EN7GAnBppmydbxpWTf537RQgMBtKtYVd7Wh9Q7ULZM49USxDQ7FQS",
  "key8": "5uNiJNBZR9MyBGDAt4edvf79EtNjSKLUXznGU5XR2M1nSFdsccS9NdCH7FUKz3Bcz2dD7XeHbTapH216EDE52FJg",
  "key9": "2XS3SUWCT5UqjfdBF3XsNw9WKo1yEr7zv49vMGxUGWieB9Lgpr9exX9QKsvs4LCQpN4GcUyi2LFaKvEgm6mfnCDT",
  "key10": "3PBYjgngDF16QxtjzFjwHWvPS6uD4QDVKGczTxMGY7yHQNTqstKaFvZpQsDVoA9wtvjkAD5EudvoRGjDDC9QWRop",
  "key11": "2FvXKHgh4z5PR8XRtmtVjgnby5raFUq1yT8Er8q5jAZaRqcf3cYWwFKSTEqmvwCUvQdoQqGovcDN2LgqeaG3zfhd",
  "key12": "4KrTaeeaHqFPnGKLQ5PziAppzSUt2svY41Ndg9gj4Lb4yMBYACA6HLbUrWMTV51YggDPtaiEUimNAY1WGtRUxfAw",
  "key13": "JytKpC4kULqqipttse96XghCfjBnremgABxjeQC8Sm9wXKCKSjDD2yrKz4jd8V62X6zH7kwiLjRWYFaYxRxxQ5i",
  "key14": "3wGEYcmCM2QY3VZ4EtufXvkYGLjJPHgCiyAkGHXqPJhV5CtqayGZqN6g2UAzWuKCKutv1Yp4kkGSQef3EencmT3G",
  "key15": "44zBdX4Z1mR9SYBhYuATwPYgRL2x7vXsbpurpTYvYNCT88F46MbTVghnYj2SQNUxkkUKPfCGkwL5S54mBYmYkesi",
  "key16": "2gWdSHcqPMpEKJUNGiJiYPXo5JketEckBsThQeUUbzAdoEd6BKpiUMg4SDh8172xFSkpznKpsf4Hmb4VReyN87kE",
  "key17": "21ySrL65cSkA8LcmboQuEWUUd4X4S9Vkfto7Xnxv9F1Sst51LA7gkptLq5Vht5djHEDHLruNgvEU31tC1oC8FZWs",
  "key18": "2bjHVjSWDmuapEx7ghgdYX8sDMUejGe3GKfZ5HgP2dfomWNdq4jVJ9nLHsrYpQQWDQ3pDUXFAcVEFRh2CVLovN3s",
  "key19": "2EbCjpG4TpuvDVMWo2h7UzYbh6WxAFLM3LRnTgHxEcTRxYMi7ZcuhaHjmR95aFG3WcNaP3YQS3JRSrtyU131d1dh",
  "key20": "2Nj1KqvaXuDezDW8Dk5nvVRDtNYwsA2ZFYz9ShxkUeY5srEM3mV5r88whtU5GVnJLRZo79jLbWiz68sZCdZc19tc",
  "key21": "43whvJV9H9oXPVyaXABqUonQff6Uu9rWjtprJVP2VeNB8sFgGJCVPYG7tdNACiyiAj9RTzM1C8tPEAXF2PReYwAQ",
  "key22": "5T25KqHYXVGE87uqmxumfs6Y6EPLcutDXxrdoSj6LDXADKC5LTkQwBPEsZ4mK9FTf2SiQRpsPTdZAkXPpLPxjsZV",
  "key23": "2ZXaWMNLSXnrjX2ZAp5T5oTrQ6ZdRPTNTkG4htcfT3Jx9ZkVn2P8eb8CCqoSh47sfjQAaq2aaKtzmqaxAzmP5Ubu",
  "key24": "fhG8yrUHdCDtZycRWtLCoZnArmBEBDcvia2A8d473Y7T7A3ueJSrBvh1jf2gbfY2pDAhyWCxtbLBKQQ9YbtcJix",
  "key25": "2bEJ3WfCCRRNu8gua4WkTGNHeENvgsQm3iyjaqqPDpY6WThdqcJMy2LRh551gBG7kCE2qUdW6rjFd1CxLLanpsWb",
  "key26": "3s2S5K8ZU3zX3eCEHTtWFx2zLocRGCbGwMPeJUyWA3QWqkeUP5eScuw8WgMqQcGStJe6qRvLUpqE63vok16gdytz",
  "key27": "3Q5A8fStY3RYPNg7FVQcqGZmeURpXfVJFHimdhHg85h3tZpmMqwQFc5wvLw6kgirmgypLW7L2vokKSdxL24XkEs9",
  "key28": "4WB7FgdgsgiZ55X1Azw938QUx4HYDpkZgFntKrPXxvvkGCUgVYC1pDZXw7tAjg8kuWfPkaKwKJXB3wGDEADKRjyB",
  "key29": "3ynBSyXQ1b5SLZ7iT17kzw4uYkQgz8zQqcdLwHzY6b4EJpGxR7ReELxq17uBaEW1jAtCCMRAEE56YcaTvqf5yTZm",
  "key30": "3fYmVFm23ojKXDYJR3Wm6EtiTR2fNqN3AbiTvHXQPx2o7dyWg3wRqhYXvaLCkrCLZ98VmPTbBbjPh2kvyfT7cUkQ",
  "key31": "3whAkZtdgnv6nxEnjce4QX7PzfyqrAgNTbM5SYcHaEes7e325MKTa2rxESAaKyY1gndAEkzXDbK2hRwiSmUQU4qT",
  "key32": "2gV1bKN9Nn4FLvEqHyD4kpuCZxbzV77xREoTi2KETdzt9TTEPW32DyeEyQXo3fWw8H25RFJpRT94fxeLrGKnW6bF",
  "key33": "5J2wvn7QbxqfogWrtZU2Bphv2Th5fEi7sii14JjSRyMC3iF65RvUhhNpZ6H3zppVzJmNRMhDXf4D61LBXwc5xGuu",
  "key34": "3jK36fmsTabM45RyBBukANFfiwj1HK54apFmCgKDn3GcU7g48KhXgPZbUddk1huAacGa6ZKAusbUaCUvinKPewjR",
  "key35": "5rYsGa1rPkW4z6kyDNGfPGxcVx5jLa5CMVnRXUPfENmTQCW3MQTFWJXAMo2ivL5KVW9pTA3V4sX7SQ9hiR732qFQ",
  "key36": "5VEm6uZyUZCCvycTWVuayLxsPV2LNSxVaNZuyFzZHv41QWvQitamG5Vs4kMbvsTxm9nFzrhPqzSGxkFHDKu7RDkK",
  "key37": "Jum6qBLJfw9snaYqXenZuLeK35SVEhAybXKLKj41UQ63Lxqv7F78Pw56Rv2TzDYvpqd3RzRG2M9mKnhNwjpfPp6",
  "key38": "2JimJ8YaXpLaymcG2nWdLPCbftdEVXtQanEqVFgoTYyJzyRQfpYyy3Kwyrbx3hSRTzxYQwtKNCoyboue5WAsnD1b",
  "key39": "3qpTfmcbvjPtGy1QW21eAb9XXsMjTp2ZzKijxS7VYuvmPdkpPp9DkbB8iMZDrR4rW9KcaLKNzA243KCFQhzhiyCX"
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
