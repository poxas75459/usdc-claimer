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
    "4UFrAg88E1vRY33Y5iPveZwSeuxy3gABcLWmjVQrhvVV4KnLnLpf1nFnng3fWJurK2C2rYtYofCh2koxjfKVUGXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "618KRMJYzdmWiMXkPAyfSEqq4YWPgbs64m4wkdtqt1fhSyMEGnc3HnAM2n9dkhUxT5yFYwjwHh3TFNcHpxV598H3",
  "key1": "3VWEf41voj75vgnsDGJD7mtu1g3Mm126HXHELuMtP6EFxFVTdLNKRfnk6qEhBTaRg9PzjX1rMEfMqh8WEor6bRPv",
  "key2": "4rdLk2tsCW2ZJrRaMXnkkNmwSBKeYQr7T4i65gc7MDa3te1GTwRdb2sHQWYoFw8ezWr89ro5HJHR5uUP66BKj9UR",
  "key3": "5ZzxZog49PhvLW2a5MgECQ85QUyJLrP42XeYg4gSsr1kb94xv4jJD5JsHyz4waPj5sCGH7ZZt9MPSyGhLdtsUyq1",
  "key4": "5WzbXjEsCVyDs8G76J7DLxa8VA8zqriQem24RikRDp4m1xXng3Z1c3T6nr5r8RYKU4Bmn8konBBQekq9EH7ATP6s",
  "key5": "5PAoQXkZx7LuXJuPPg9r6nv8LGsUvsebbwgyGDZVCMYSv3g5guny3fHcPqp5XqWvSsQcPMxy1L1ZEVioT1no4UZ4",
  "key6": "3BmCBUEcNWYXof79LRiLLeeKEQYMDmXcop8wCpTiXSyBWPkvN1pVYLMhqCegSp5EwYqgKFYju8nwQpv4ggdjg1dt",
  "key7": "4PQ6VS7HvTradf6tHLdtST6kwa7qjjvNsE6Dvvf7Cb8VjS86LiJEmn6zAVAPoQsZMhsppmNhXEqzxBujzAmJYUnd",
  "key8": "5E2vX9D5RzB8vhczkKKeBKdPioeExgF5pqpyS3WLoYCpvSiE11gLEm2SpUT3QnPqNUSR3v2NfJgiVEhhPGyWEFrE",
  "key9": "4daCv1ehYJ41amh7X1QAqx95hRBAbuTXfMSkjBSo8hSLUZDsCpau9HT7ihw3uf8kesPZd3u9HuC1LJPh4cAdg1d8",
  "key10": "43SfFjwfwSMzs7N1dk1pDNCPV85tVHDATtcTVeWGekvVUKY976YMGDNWyqDw92SrQi8CUtRAkMcbiWkULKYMyfix",
  "key11": "3U7ciEo2K2NLL7ziyTRKoSG52rDqtY52WPiy8YD65gUJyKerzRWMK9sA8rYb3z6DssLVrozfeYrVdr7t3VEMNaiV",
  "key12": "2GVWp1M8kdEaKM7bnpPJ9T2ZTuEkDhAuSDh8wanXFs3GQXNyZy6s7oQUB9QYtA91d2LYK9qc2yuJd9JS4L6bMBwx",
  "key13": "q5JbiZJRyqKqsCyDFGoz7hKdTZp1tVWoDEFc1x8poiSLfY5MpzkA8v2TFQXYUrUw5BDQTxevZoGf2NHJ8Go3QLu",
  "key14": "3aiPzaYbLfQfbvFVFgK3vxutWKcjpNEeSWMK7mXEdDafomxBJUSxDUqaks8B97rbJGrJRrYNN1BkT73uPydeK45S",
  "key15": "2Wq2j8iiKdcvC5Y1U33vQDffKbSBzJEiZ4jf6V6ULggLrzQhTAKf3ecKNGm2ZtUUfpCbMT6ST8LbeyTnPdbD1atS",
  "key16": "3cpZReFvYeAiVNb3jYFyHeeGc57jmcrQWZ2ujCSZjRMZSg97wz1rqYpKhs9y4mgY6bpTgZ88u4EUeQDo2EF6MPGd",
  "key17": "4wp7ftpGHUCVZ1uu8mEY6xDCvZm18PYPd951JsJRN4pChjfqBefxbamYZDs89RfmEU7whxkUo9jWVfehwWwgyYhd",
  "key18": "2WJv5tR42oExzxgVy9HxzeLYVVqEZGP5DbY5bP1dqknGcebsg9fqNNKsW9oyvGmyTTgSq2pAHaXwP3EDVdDpPRwn",
  "key19": "5rqf36Tf7Gu9Sg9CEtgUyUQAATgLrC4ehi29Rc4pPZ1mjsZypjV5oD7cqughccCxUtucpPSX4G2QFoSDdDeNpQFD",
  "key20": "3cqeLzNaHut4RWSufP1Uuh9MwYA4VwKouke2kMp1HBAfcbyDQojRNM5Bi8ZjB2mS8tWfaUioGMix7zcT5y2tFKuC",
  "key21": "62QQNkMewYpNe77Sgivcw8zLbUzNhoVPwa8hu5RLu5FAFfcy5qgwY4onzK9D2x84CcR5cisTYuhHn6xN8XWXosZC",
  "key22": "38YytXspaqS46QDxLNn5X2aamffAdsHZ73Ce4huKzoFFXYaKX5Qtmq4g5fkedUo3swXYG6MBJUpeZgDLRBojtEBS",
  "key23": "3Cdqyx6ZK18FofPqHuo7aaaaA27tDA7BnjBW3Jinbs6rMV1us4SpAySR7XQcNzDVhW9V8CfxAs7rUNphnt1vHynA",
  "key24": "4wHxjNGVXxAUDrrm2KZwqZNwj6L1kHvGPHpuk7944Lqrzpwt7NQPVtVYdpq1nFWquSuqSeQBXwfYEH4kA6BWvPse",
  "key25": "3vVuSGSA79dEivFfsi4ckrkNXP1YV6cBtAMxdSGyQRne2p2gUFir3b1bMrzoLqRjVjtKcEdzYw6ys14w7DX893AW",
  "key26": "bifwPzp2B7oUeggYQEBnZK8ieiqQnLF2kzHnRR1EuWu1Tgv8wwKSunau4C7J9FTA4iM2iMDMi9CCFGF7dkZs3k5",
  "key27": "4zoY4m2YYabP8oYkW5CiF7ZKM2AWu3m44nNoL4w8SnWDAjYgAhrgPoySBZ64Uym2yqEG3rLR67dJMnZzfWQNXVzo",
  "key28": "5JpshVUDLZ9f7kbtQf1LN2dAc8pMTu5fX5yUm1zzcVKz449ZxDZprXtT8J5dCyGuAfGZp8vnRYJ1LumQFdnPLez6",
  "key29": "AQo5CkQJngFCjwuUUSwRWwoEp6adQxmrGAx25coaHoQ2uRntobukjM94VAoR61NKbyrLdEwyfAvxt274tyDovQn",
  "key30": "2eyvpvenfRUV1ZvoPSTVAMhBmBdB3N9G8a8Ngoijchj4VqoDsJd67gzR4ndi2LC2aq4ao7cotdLm1R8fLFy9ugVc",
  "key31": "3z3kSCZ2bztMPZvvY8m3VFXT7FaKL3GLEQLLUhKsF6tWTjQeBfNM9g7BiBDM1i1has4xZPHXKVf2P2uvMasFsPCt",
  "key32": "4UCpwQqLDmDVTPVQd3FhQzvwVb4Rsvrz3aVFXjMwsihVqZEDWPrmWjqNrBxZ8PVqZGVXbPxW2FWqEctVQnmxo7ZQ",
  "key33": "2K3PG19icXbY9kThHVFw181fjgXc6pWG4fbdaicW4QHbX2MmGNWkPxzEycCV7jJMA16BWaySu3NWTtPZxk6xxc8U",
  "key34": "5pcrez4gsZEhYqF4kKxxrqF9V2yBjy3WX9YkLKjgNW1Mp8Qni4BRy8sPijJ6SdTV6cxoRM9j12r41q3oPJs3pHgv",
  "key35": "4cQNPxyjvZd7o9Yp4gKwpcyndjweFqmZbS2BUPcDV2kWY75fXLAZbDb52V6ftuFjGxD2Q446KBs6C5gXtLyxuQQS",
  "key36": "2PVTFvs2VMoDS3EHsMNwDe6KcVdJ8sfnjeoN2rNwNz6TvUufxM8uhRHijL8k8JbWfyjLav6SghNVcrKx3QzFHJNs",
  "key37": "kLuuQeG1XgVLuF2451kUbvVzGrSgvHEXk6bDT4fN2Z5ixCDqAJr1SaqJa7xMEfiehhw5CEzsuLKMMp9rjYojBRb",
  "key38": "2fpatEU49b4vUQqZFeyHnLnkagGYYQjjoajne3MpsbEaVZcUXuJCApz3PAeYX9YZ7pndZYokHK9RitVn54ajhM6t",
  "key39": "nBcyB9yXgfKGWDY5qe3Yj1y4N3jhJSW2vDGv1NfKF1kmxDPrtFi1wYqszkmCv3voFRpPp1t3xjEMSm718VMpJM3",
  "key40": "BFX2KM5WYYFVZLzprRyiHEUA9oYzCuqu7Ks91g6MCLjqQXahfiZQtLAWGbWzY1ufh5HgpgPGbi32Ynkg4bLJ7Vx",
  "key41": "43RgXmLGN8LxQfPDPxfVQtNNxWWEk2r61UFKJ3rfW2BZQktqfknQxUmvBv4uBjU5RTSNJEBgeweiRXDPCwwTViiv",
  "key42": "2XHrvDMvhWpjNP1pAmXDvjz4ZhdH1zB8VVzRCS9aP4ngk66tRqcNYtQskv9WC2Yxquosd9QcijXJmNGaF9MiJvXo"
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
