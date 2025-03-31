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
    "2gb5Sq8JNFgcJkuHvPZdvVMv69Bb2krJThS39UvTrtCZQKjnMdMELjWeyvzMZCjhhvAa4kgpaaTDX8Jn71ki1g3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36A6AdJpajaNhKFy4Jcr5rKE11GpHVmu9K5Ki4cKTMjCRWDfrr8k2trFtvqN8SJBmyck4Gdj1CKNgZ1jwQSPJmDf",
  "key1": "3NxSeVh1mw5mHPs1eQYhL2wJ6bz6YfnAgdgeMbJR8BAddzmPJT69nQwN6mBwUMyEmdPi7A2xP7tdmWqMNTfZ7nP3",
  "key2": "5E65kMaxQGwztvGwPbvjXQ7QCbXvZFrjwq8xFjFbFwD4QXfgc2Pk75w5J1EF86MF3CBH1oji3xDZe4ad8Km7yTji",
  "key3": "9bMFvwj7kTBmEYFjwgtx5jdz8ZZJky5AxkQYkSwbZt4yHh3bTAuAT4ETXNwjATPS3Ese8foLPt8Uae2meKmFZQo",
  "key4": "2cPcuWn9S7eVMVL5wSTeg2PbW6qp3t4Yvd7Ck6JHChgFapSAreMtGwjx4xgy5F6NzUNhSk2VfTkF7M4j9hoo5gf7",
  "key5": "mejPngvqMDjkjEdapgfrfbw6fsKiFczw4LFLqSuiJaNDqYmEzpxmDvbkdHwkJFUjkQdvyUHMyPX9ZeiUxMhViVW",
  "key6": "46Yq7kTcuWRK5gJDMncbfDT7FVFYMxe8c4e3fVCkMLjTQtUW7LnLMUVK2novgQ42YK2GrEgHa5UX48joBi3Cx1Ho",
  "key7": "4SQBCxaDW3HZEN2LY59uofXVXTTsmfHSdGmeBzV3rexTdLjyVe11uMD4QbUfVus5HuRGYoLBsf7yRjkzSdN6zNk2",
  "key8": "wQ784NTkiZFfejUExkMzTcDyP7UzLL5yVyYw5tyGnEvgZfMTDjQ8n7Zzim6b82F2H1dAkq4w8fFSdkGdmeUdyxM",
  "key9": "5LsFTSKeBQNcfsjgcUWWANppptt7waPTsA9C3Hbh2wDoBcnEn8iNyS4k6K5B9kZXJpA6ToNpEY2Cqtuh8TaZMEPV",
  "key10": "itVHd83VYUbwdSiPaYhBb1VMnZi2bDZJGYg1XhzMnqYgS4ScQNXJJk6MPcUYGWhoCCADkbkAs9KNXjFCb8FBGQY",
  "key11": "3CPPGGMQ2hgw2TuQD74KsbbUaga3TXT6kviyGrVtxv3LfWqinFqcHsYKkR95yZi3jzV8koA61PnrTbNbg3tPZbNc",
  "key12": "616mhhEKNdeWP88DNFNGsUtsoUYeAy81JHpFvCu2vFuQhBC1W8aeTwwdGuP9jgKuc3bzwvykHdW9FaMWbvimPSLE",
  "key13": "JTT46CMzXF1UxPDLgaWEQuGzoQU8BCyaR33XwYhk7K9LodT7vBCuGFY4eYbL5LX4hSNoSRjS3SZARtXcWeDLJan",
  "key14": "4HbDkm5pLFzwB8ZFYmdhKJUPsDLtV78DEB72jfEbjL7ZMVhQq3UAhW5b33LL3UhGrF6L6P1Fe7i3bEWdEid8fmrt",
  "key15": "oRrJNvuNXiRrjrzbFJr3thjkD5bdUJuUJQhWYy7JWzqbHDtkrJW9eLTB5w1NttA3pugtZNKXSokRViY7ZNW7TxC",
  "key16": "4K8m9ai7wYGpQq4UNBeqfLezgJfcEej3gwe62AuJNbniEFjw4ZectyeersT4JrRo8h6dnZ19tq8Bf18pSFFkjJdS",
  "key17": "2pu1iWfAJtF9d9U5GiUkx8qhHb7Vbg86Gmjn3nsmkFyg5DWEHDaF7orVMYgPitR14K4frb8rKiWn1i86soxpyx6u",
  "key18": "5MC8BbC4zxeFBsW52sdwnsbbGe6hC5npEoZk3ts3Z6vD55xTUrK8hLmXQ1QAQaytBFEp6MdkNQG3hWgN5ihKntfh",
  "key19": "JM6aQsFE5pLRgiBJtjjHHZR9R2Kes5DMAn7ymWZQ7LX68sRgPrvt1fyN4KdGytFydpmjmcWdXk2coGY89oJfym9",
  "key20": "219qwYBf1EnziRkeQrF6QsWYjDBJip7aro1cTrajRq6gCRAdmFhoGnFdhJCPdJTiKsnkeHf2a1cB9YD3wrcRNHaN",
  "key21": "2YeynQyjbtqsRoPmneb41y9HptYiLpE8MnyXxLSK6HASbTdmTy4CwjtMxKneLoKaaWiKfTyP4W8n691SUuGVMjzV",
  "key22": "2ibkVusfBrqXKV3SQ1seT6Pb8TESBcRx8B4nzvSQG8u6pgJ7CJZJJyd1QF4QNdVto6gM7oe67jgmH7oB96j7vKUN",
  "key23": "3928xroVXRqjCzpxzqUFJGHW3JwJoQWyjRUtZrasbjG5VfrqUGsSJoN8UzgGhqWgyn6i7Fqk7MQrisoGb4J7EmSb",
  "key24": "3e5KEYQcmoPbPDkHzMcQ44T9YA7A1jc81dAbDQwd2Vrx1YDCdzWr3ndB4wdYLTYaNDFpumFtZ2UiXNRYV8zmgpXe",
  "key25": "3ugwJiSwHvYuKLhLTdAFd2kUR4BoKMuNcrLYkqAuPcB89mdTjBKrMnTd8LuFF7X2aBbVK1nBerFmRAQemhVTWWMJ",
  "key26": "3hAQq4ej1fqbe1RpF296AFyHJJaDdnUM974oZzo9ijBk4JvEKeNWf9aD2Gyr9KnCgdhpuHeuoJifDkuRWbsoX8w4",
  "key27": "5DwB9U4WraZLXcvor5D7r6UEgpoPtUZJnu2e79AEPPSDEeuEsehuu2aN8NFNDPW9k1HfGF5sSuohwK29pzXvbNCe",
  "key28": "jCLAm6shgx5KBYpmxmkF8diA2dZ22vhByYe5msnvn7EXuu2V24A5shrMwVRoC2xMDr3TSEyCstTVZMQDDcYrWEV",
  "key29": "2MZcuJK92oYXtbDV6gEjHtuwGAedXX11mhpJXhTnCpmNNa8jtLctCfXiiry1tAV78DYjCuybU5Jd5DD1do65GWVn",
  "key30": "597xQKkTwocFdrGcZuDtCvMxkiJBBvwmFm62KJKPx8pREVB9Zg74R6Cw8rso191Aay1UuJc1wbmUUUMyt3XA5R7r",
  "key31": "LHvRzwxWyoAKm3ThdwdxFfLwgZQ9pSdxHiZX3tZAyseSh9QhwQoLew2e5PfxbChFYD2528j25rTgqehzSkKr89C"
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
