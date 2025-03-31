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
    "415coKfhJVyTTF9HKCe3cAMMBv6LrdUoEWeS8AJ8FEE44ttFn7qfsqmcgTmN6XwG3SL2Ks558vow1e4kfWasMtg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G4zZA9aj1pDdgKMFQwUvv61LJCxwWJBiTfDnen2oe5CH4yTMaGfQ4shFcU8L3ZB3v4vtdJm5eGmsg928QYvjhks",
  "key1": "49jUE635XX7zVK4YfLaXhN9fmya63ReVuKT3ZFZMgySbqBvkwHJ7zfEvX3bKC9vfw3gTWyJ973ihCHdtSRecoAgG",
  "key2": "3sop2gW3ysTWtDdWLtvh6uNU6k5BLd8jMJDE9qPYoheJtVuFpUBkAB7yFVNziJ2St15rLebU1cQQcQ5Q1CwzBhQf",
  "key3": "2QYmdxKFCJVnSQg6Kgsc6uNPhmUSg4kfmsf5qbAxgycyou6dP8RSMYS9KMwfbdMQCDgsQTSybso5AveXQYX6PA4y",
  "key4": "4hBbPSXnvJFjwjnvNkp4LSTEJyJZZJG5iEEPkFtTZ7vFkwvj5DhLpBuMA9eCMD89adaXpb8zF15JgSqbpKkjfosA",
  "key5": "2dR5NHj97qguT97dAZZjokALFD5H3GCeK1AMvuvGxzD6kPL7HfEUqkYtadvpVu9zk18Xx4uQtwGxHWHczKyGSXsi",
  "key6": "5u9Sa6n8fRpUAKCoWK162XswjwPFzYdVQPFBqTHnbFTGxZySVP2XBtmGhW9u3qQpJwWPt73Mibn1HhdUEU2QAhoq",
  "key7": "4Be9QaDgQs8oke1sUN2UuoyzQH4qqjgjGyVWTE8jEMz37YqHhu6zycJFEjnPgxpjaC2ZmG2VHPijkMyDh4VEjsZD",
  "key8": "5GbWib9UWPCBFn9EZKUEADPPQcGhW14UNp4FtFMS1rrkUedfExqV5HK6MhtDrLDefMjnkpaKiTThYFURvoxmFskW",
  "key9": "516qp5frkbN7HiihmSeWAeEpnZ4tuHtMPe9osY6kurCu2WDFUaquiTYukUXLNV4A5XnXj7XPEmt5wB48wU5R1q4c",
  "key10": "5dhmiMiBYvvAHDnzQG3shxLuxJrFayFhGFvELGEhbxhpTfyZ1JcEgyn4YayLPiuhmzcuPCYnRZXQDyG7V5cCNBT9",
  "key11": "4P9aMZ4V25e58rb8igiwXdwpCs6sBKicoPuTjLdwEY7yr4dviHHxqCwjQtFddJpnPTmhnApZw1h8rFGAu3Bbxord",
  "key12": "5SHsYNUd65SeNN3VRDH5QUkzfP2PvtTTgbEjvj68QCDkNrdE7hc4g5YgjJWC5kTNaZXQzbMGvBrpMA6XNTEKsTmw",
  "key13": "33w5k3Upf8ErzFdnyBBkepND8X3ui3wZZBBkq5rChRi7JbarnHBYRvwLEiPWvd45TDFFiZcurQ4fBg5no4eixuGy",
  "key14": "2S9bDEPeqvkw756ot5Pf1y5q3txRp3bDhQLFwDRdwU9e3jS5GHs7opSEtZcZnBBUYwP2gq15yMbqUtRueteaabZi",
  "key15": "vS4ckdwndi8ZggmFk4SUZEhWQWbjE1FovuGzFTd6tW3eYQou4g2wXxZUJt2YbRgYuHQvDL6FAjNQV4GWgXsKaXd",
  "key16": "3LYpR1JrXq863wV7jss44SgFTRY6mUNo2jvkHSiSxoQ2itsGGpkmrk7hWne9WnWUjX4hR55tDn4ouENjykV6iNpk",
  "key17": "uHMVnEzcBDHg9jgHYBmb1Bxz4uQVM7yqSmEQ8PusaCBN9ixeqZCBVkX7Ba2cs9cK7X9GEAhypyceToiiwN8fcEj",
  "key18": "2XR7HByhKYUEgW5mf8Jrhcgqhq2muH2EWa5A7cZZqxCEfexkZMVBpV3Bm7sj7Pw1No5b3o4DJBcJfM3fXJ3B8rMi",
  "key19": "58VkTYVAJkkRYuXzKyQTF8S7L7EWc8mBfJ8WyMVFzUyyrSfKyUo9fgLRvtze4NBqFF3mNun5j1wXeTTvUYv1ncBV",
  "key20": "QDoSEHQFjhxxom42xy7k3zZJGfcismAhrDYcJqDNB4cboXX7mgffaMtyguKNfxZjhS1goTWXxhRVGAmsrcwhDP7",
  "key21": "5DnNCuqZfAwvhQdJur1FehqDJcLX5PiEf8BqYzW4mE3jfRMa7SwV7SNwmPV1s5LLgHtYvBHMaDjjmpgvf3UoAioC",
  "key22": "5jy1M5XwFiqBESvnZGVnjeB3eLB4JfYg41vneAJzDKUhyFYovj3gfDsBVFeNNVNttbtWMcyztmkVVyJYEL4b1jVR",
  "key23": "2hWM1Ve1WbGg3CTa78wHm96FbdmzD3UypcTdSGYzqBybwVwKcpdLJUX9cBtxhqzqxjcGbQSaxdPMSNneqkwe1D1p",
  "key24": "4WZSEtNFdeDtAXhp1AZKDFPTSRN5w3YnV9P78oFGvTUxJK94Y4tkCw7fhjKydez1brqU9DycpWYRMpotEA6kkwbH",
  "key25": "cZa39yaRs3ND6caF8GEXwSPPzirxLBjUBeu5j1bDdDmeJnDVzm5JAiMJaYvGqGmQJM372qVMBEhosHFjwcLjDFu",
  "key26": "4kpBXDHJuqcNedBQDD5S2rCMKhYAyQr2UqzxuFziN4g6jE3kisetkv7eU4GtKJzGacZBUN4WMxRcGgEh2UeLiqCE",
  "key27": "2FBkT81DtAi1sJLkdNK6iDb2KtLYSxiFR6GqVVERZFu6pjHUDnrC3TCUV3mdxsKXzRvSRLqRbWCy6v2ziZYP8pLN",
  "key28": "3zAVFg4XstVxdxBEJgpBwc9kZau1YH7x8r1Yinf1f12dJh2LMPPdpJ1JywQtKm8S4ihMKjSzKXKRtWhPvEGG7FDc",
  "key29": "3K3YYWoFyHZz1hbRAHq7dCNSQ4QaNHHntC4uct4bQxx6yHmzRXD6YdPAS8bQb74zDvswK84sYCjw8q3CHwsnEYoU",
  "key30": "3LM5tMZp2dMtB9r4eCVRWZYy7rNXTxPBrWNHYiHixHb6fVmnCrtvwNqevqgRzmWf2jZBe984F4tWufWegxG9WVcJ",
  "key31": "2LdDt9ywp9PkonWoK9euppLNA6j8h7EVNEHVw5hEw3pwrLpnDp1JkVAxWxh9Cr2ds54jjugDMxu8xXiEE93chXgF",
  "key32": "yY8PiNB91ebMBkrMWWGtTaY2ZNsGyYWxRU91WjKuNhy5d4iSB5FHTZRwf2iLju6Rvxs95QMq1G6dVhRzoyM3zaJ",
  "key33": "DyfjbX1FUZjFp3anKG2AxJJyxV8jmjgfFNKTSi6BodVLFTABFiw8aJN7kUAst5ECZQN7Hr6GmDStfL3fWt4YP9N",
  "key34": "33TqShhFtC2RsxaMUfrYWbENwhQFoGiv8XR7X1KhWEjEMHMnoGnGRSBsWk8vdVsiyN9mZQgvc8Sq8rnFjoWVrQFz",
  "key35": "2pkhTiPtM83enht7XFAxxHdRFtCHAYKGSb8iu8Eqo1igDkavrqyW277ADNqKyk5wqvnpkQd211LPMBAwo932PQSg",
  "key36": "xGKdZoMiCTBFbzDANXTF8JiqXy3pa5bDNyvMXv1Up5AJerQP4mRCRV6QQBjBwXBRYxM7Toknx93zRAkbzACfE2b",
  "key37": "3SoMCCK3MRj8nJcteLBMG2gLVDVF3wump426vDKwFQpJAjEFjVJ2bukND4kHL2q8K4Ck4DmPRtqSqUTsodxGGm3F",
  "key38": "ocEkQKXgjPbLWTxTQfTFM25amiSQghtMVGr3wFFk6hoQd6TzTWJQxcGjTkyo63ax8j9rPLMttvAFXyzZci134Es",
  "key39": "4MnWMNdxdvMffNP884Gj1QVA8d3pehm6y7SvHZvMz2Admshq7miLKphjzLfha2xNkfcdXtK7YUVdaQ8Mi4fSC9XP",
  "key40": "28Qa1jxnrKuJaFXbzecYrncPwW7666Y3R5KWsEpuPc5F62AahPMNEz2odtv5VRUPuLBPttDpcPYfWbm5m1S1s5DD",
  "key41": "64wsDLDxt268EJupdvaZ2QRAQimMMQF2CvZUwXoZvvhe5FsVSdQYUGpyuxVTAVwsocVWde3Vzt6WnJzxCWucwMK1",
  "key42": "4f54LafSHvHXnqDe128F5zarC25J9T7r2SCiYEaXUvgCoBwKxGRPGvK6d7ZpLvX1FbqHLdZea3ejmmXoy63fpiMu",
  "key43": "42dyh2UWi9J9fRtEgpKzgn1tMifgui3qAzmszy1EL1WRYHY4wqaMoL4khdiGbP79bz6Qoemja89nJ4dAqT73sEE5",
  "key44": "47mT6uqdncAxe4Xg39mhEtVWzfhG1mFhMW19ufSApdLXmvWbmv6grmogfAJCBJ8bFzzynTh3JGKYSoD99druriMr",
  "key45": "2W5YJGxJbd9R3zMYMHRxuhyuPd8ZfYEZLwnFNZjvWq217ng5aBpjsKzaPbFsZcNubgHWtU7GsFqe9ZpCRwDuwojh",
  "key46": "4dPoSAR8SDZvGsBymsvEhowj5xuJFDd8FALMmrS6zYZvWXMnUQXzukgL8pt4Vee1qC5FzSJUVVkV7BvQSKQEGP1v",
  "key47": "4qTSWdXeNLYgGreQEUHUBPx6A9QkcKpqgvaWMuBNZZGZUWH43qejwTp3DiNxSmvqh99A7F4eRTbytHeGH6DycKiN",
  "key48": "5nJf8SoJcfR9UGL5HNPDdY4NyADrpTZQGnUcSZAj6FC7Hg5ysu1AWhVm7VRY8KdKstTWeXooo3kGbp77ryuJjNoH"
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
