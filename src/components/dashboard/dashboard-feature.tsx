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
    "5xXWxyiF23cPHVMJ3msu864hNi91EYzYJo3DdaYTwwPg63ydjoRiQGJqvmZ9AEy9qXN2R6YR5TW36XnRiBQs3H6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aZfF841TgM1MRjdeoXLRHQT7NTHHx9Pn2zkdcie3NgCaaJ6rD4XG6UynuhqqiqEcQDwrhYSHGfUnHSk8vAkJk7e",
  "key1": "3yCyF5QwcpATCr3Jxa4EkVEKAWrs56ogC1anpByvonnQZgF3NMekCtDATww2bP2hEdfoRbqf85Mw1XntyJpb9qCR",
  "key2": "4AMeGv9TVu8kArSKoNML2ehuEGbX4xZhUfUwbRmrE3iCNcqgq7mAAtLk8wHW4tmEci8VLB4V16Bor8LoirCxcVjs",
  "key3": "4di8gRhfdQE89SHnQ9VJsGqhr5SwgwDqwKPzBN5QjkoDhG6hNApA4AYFvuCah2Y4WaiKKvTP7HpBqH7XYCoSYafs",
  "key4": "3JYVBGxPJ3jrzRzM3XMcYsmmSGFkdtgZUzF813KPqidpyDS3jzgXqbibUbXMX48D1aJkseH4N3v5TLN9nyHAkjKZ",
  "key5": "4gayW8vwgMce5KhqYbq47gXrv3R4CUDe9PBXX61wzfyFE8nJDHA37qfk4J2p2TEAfetcdFb73Q6BRMJTXmoGU3dn",
  "key6": "4SKeh2uvMYxScBVroA3RNV5pUnPpoUhgJtbFQTtHH8PtyzLRudMLZLqF3JyL2trjaqfLcu9pJfX8kLP1UvYUBjr",
  "key7": "41zAkssW2x9YtNodFrnHQxWRFDgDciRec6THr97qFpCwHtzAzNt3H3utoEdvK19to1FjhioeV3jnVYztGmxQPshx",
  "key8": "2LshQHryQzErahSvPwPbSTMUiUjcfSvwY4QPsBTtiqozLpCiriPsw75x1ucE3UTeBuok7H7LRmUsTZ3v2MqCKGJa",
  "key9": "4gFPqnu4sBQn46E8mTwtN6Y5QHxvqnUBeqPJgbE9Z8FL55qRmyfeq9qq9VUQhXhWiyVL7QnMECGpZSr3cqSZtWuV",
  "key10": "44mn7gHYMWmDzEZhUHwizzebmGMo7gQF5ViNYFmvPJn6MksGdME7pV29WSDA8sHXhR88YmptjU2zts8VtkhUT1E5",
  "key11": "64v5uUM1uGL9iLWHSysgyAyG4s9m6L6ETKxdK5XniDrEVqWTmkWfgK4UxpguK3J1g46DRvG7DeRaM4B7gjg83yZA",
  "key12": "5FuSkJERxdvpFU5TQWQgN1rKKmcFy5rQBxsSfCDYEskJNTDXJE2maUTqyoKvNj4bf9gjhRqHrprQ9nsgULAKUrav",
  "key13": "53KH3xS3PZjYWXroeXva6MAt5bpESQaPJEhU8wDSP8qaxo2oKU7S1BtckMF3DjbzRzQpS6oZUQVUxDdrsot7CQda",
  "key14": "XxvVNNxcA3kPGhDJiVHMETua5BBqGsHxnfH9jca7RWQaykhWkWapxV6tyNAXKS7BPLmVaexcQamJG2W38pgutc5",
  "key15": "2UG7xMWkWDHanLGs65uWjBw1RYZHW6CrqmJHFmTp6ax293h4esbDpJdvdUYhtdckKuhFjRD11bTYag171uECREF",
  "key16": "53pJgbgXM8benhxYeuZQZVDPU3zDUojGPsG9msrjVJj2qCTis3KpoFdwWsiFd2rQ5AwR7LFTXEEpDkoMLaYr4W1E",
  "key17": "2EfcemXy1yjiietCUEkTqmnU7W2YeqqyPTpA3CiWGw9SqNnpgbkyehL56kvfAkX6fiiccAHm1GUBh6WBYjtPKQ1v",
  "key18": "3ZpVwM5uouB2r6U8QxmWuNqCDVv3kYoacjRGAawgeiaqqSS4WpKsyB878HRW4p8KUXSX2DGiP4XHy3GZRxKiHp7j",
  "key19": "2qQCisEh9JdCQ1cettQghgi2CuMSsEWnQ9TiNVkb2nncfVEqiLaa28wS881rfNXqX4Tikkd9FTAGYaA7EXp4GXSr",
  "key20": "kYYSk1G5UG3Z5epaTTPp1sTatbovpzy4PVrBv2ydA9U3aKtw41cZPGwCS8duW4jnfRrdwDCUtC5p8A1ePeFvY6a",
  "key21": "5D7N5oTGbwwZeSvJJmM3iHipMh3LrH8ncdmJy39NWoEdYFmHDFGrcnaHLU8KvH6PD6M7P99mJN3W6mdFqhdy3di",
  "key22": "4gjRS9dk2TvH1RKVJMf6Cjk1Vyu9NoYDF6kpF1amgKHaHzdQAQGmfsr5UeHTS3fH1p9v5mkG1zW45HQDGfFToEtH",
  "key23": "5jjkcJBMrpDACy8JbMWuJP8vRJxcGJpYLFXaAauDF6evTXKFW6NFs3yi6pFQCYjUjqtbc7GCbud7wMZS4fWwoWLd",
  "key24": "4qZQ63CKCx43EfhkDHVMVJ3HXP7kvRPCT9zq2aiMcKmsris5wDbikttrREihEmdb4EAgZ78ZYmyZsG6Qfa6avPYF",
  "key25": "514pGHi1ksMaboa7sMapt9fCDeVRXLvBHL6Pp2nT5n9jhDMY8hnx8SD9yMkymHoaPM7brjcjYWn8GRCDyGFTdevj",
  "key26": "4UKBU3en65Y7XriLeotpGeXQLfHHRitUoguAWAFeH4zpACHsJWg5vun1fkEnXtXekrVZQ5xomW2jnWmsZC1uXrAT",
  "key27": "2xmreokC73jYTEp8n6n2HGnx2PwutNNgLxoKG9wCKrxFBipuhnvM2sXVr6MGnquHY8a8445MbtTGbbdPsvcw4LmG",
  "key28": "5qyEfxUnVAmPMEWcP6hMbqU8h9cAYGifQ8dmMCnE1gy93xwBd9gxcswJ2HawfG57CSa4AiKeApd991J7cv3HnRj5",
  "key29": "4jmnejer8iYs13NnC12r74zvyU4nKGt4fSDf3E6hWhyPwYUvSMyHkKXpPKymxK2eLAZeThAwZPfm5CfnCFU635yy",
  "key30": "Fyo8aHCQnN6JhBdqXrJ85w7to5qddfNFFbdb7d5NxPsDFTaX1QpfCnHAPkVdbb1ka2J3fn9uuLBeaqrTxxELtQY",
  "key31": "316Rme7RUsbLJYMCneG9XgiL8iWUzjJc7kPV2mWxZqRD39UUDLJE2eQfxfGfg6okwGQtn7anopn52dxZ5V3Lx63b",
  "key32": "4YwnydNck7dvGTHui9ifJzTNaZkdNiujXzvo9LkxGyZkNs6Ur286XBkNMcyyaq8TSummf6LurFvfRKdCFNveFqBj",
  "key33": "YfPiew1W98fFdYqGPRjEMNFbjLo1ew3pbuCb8Md44WbvaVBAzWu58J1it5MSaMsPHTeLmrxxviZjXUJLjNyBVGo",
  "key34": "3iGxv74YvR3dMba3Q3uaW98FnGCWQiSPCZSMLCgNuZ1f1kXZFXokVqTEw9XvkB3YeowYy4euU57NHGaUTdnoaxyA",
  "key35": "2F1VEn9EWmfAY8cZs9iUtP7NN8ZwYhKEqYL3fBrD45rt16MsM6bEUPn5H1YTXmw9Y5qiRoC4Wu5vbpeBkJiEby7U",
  "key36": "5RweMkDJzMfLci9aoC1AVbauAejcUfVijXqt9oGLfLV3DGL3c3rsPYq5jd3YgdmNNpJKkuYNxZciyotRcurNGUBj",
  "key37": "4E4CGfxrmsgnaVbsxkhkG9A83waWz6kfs8TdiNfG6ZowB66dUrS2bUuo2waeCqdtkfdQ2sRSJUioEsY4XC97MgXZ",
  "key38": "5MzKcVN5dM2YCGcjkkpUoNhAXHg1XUkkvBKzdjJJqi4F4VGu6Gwm3CT3yZU9U9LSfsQYJ6uFku5fkHViaTzLCmDc",
  "key39": "4TTcykNsUNVJkPXJZu2nT61CpXhV1x4h7gZar6Lbj3bh8yngB8tsUTmLw45TfqMxnNmXaKPJigiDFVFPzGx5kVbk",
  "key40": "3RB6FZWTa2qP3k1Wr84AAbzjdpU9NPhDTgKPLxcRZiBmL1cTzbM9x7cRfitB84qi62DRv6Z4we3ra2Zs3iA3hHAq",
  "key41": "2Fh8kabGVXzZwyMf9HgbREXAQP4qkTvC6VgfaHvLQYJC8t2B1XHpRgiDaykcwteJBYJWuMiqz8GjZWKb8TNJFHhX",
  "key42": "UUBzDfnNaRGAQvdXEZRrRhTvAWw9NZiKZKT4y3Vk4BWqPoJzf3MEt8c5LH53eQzDHfPqWwvVxjqJE5AXqrkr8yB",
  "key43": "5NgUh1rgCGxa5kgwW5S5szvZ4oXqbYzMtCLpdwm5TeQZvEDPhyn9Y7dnQePqSv2hmBXtQDyn9utZ7zad7DSpJbPK",
  "key44": "foXYxWbXmESBkJXyTTuEUJvT816Dp9ooSkT5kzGixqXYvXic9iRjXrsMZvUXK8yA1i1E5RjD4Wk7vK9LNkWPx1W"
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
