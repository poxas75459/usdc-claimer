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
    "3YK4aEBDNbxo5MkY59PvfDnvmTuETV8JpyBDJB8n8cYZjcvqtL4XH5eTY7E6LyFZo6paTzs7g7tEGf2XcZWSEUvc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xDmnxBGb3tv2qhnvE93EAzC8busitZQdZb4VtsTyh5YebLS1gLLug22BvmwyhqRip5uqcy4GePLdr2UdPYr4BhP",
  "key1": "fLPmPGyQfydquLSHPKncAW58xV1GmBK6qcExzudT7RNL1f1WVAozvoyNJygk64WefZZ36pfbNzQzf7SF7KCj5N8",
  "key2": "5hUmfjGZsqMNqoj96mb5DNcXRmPM1ndYEZ6GPNZ66JsyvxgLZ5w9775o2q1YdHczascBbtTbD7wnfCRgkZ28vXzc",
  "key3": "657iGHtMrtV6u7JkXrbdMuM51BYbKzYEE2JKBC8XZeqik7N9Lb4tCrArMBhAmrLDeZQiHwQd6jpdzssBTgqjkocc",
  "key4": "ofg1EkRoAyKRXJQbbMVQAur5E8EijraPUdExr2W6nnh7keaKoHsTvuB9wV5LyhWGvgXG2pTkNjTD5g2XFTZphGN",
  "key5": "3CykBVYgU7Vg2qVn7YyZzKNk3Sfg4WTFHG9ANPsWNdrZcJcrxhpPatXhrZguPKAHnirmWCFKcysyZ8ueuedwUyr9",
  "key6": "2VK3s5yBWmwkatmZVShCEWRCUX62imUKT2UGSC74zXH6k33gbsWmXV1Qj1mwBBRR6GPovvQ4qa9dGmupL6QDYQfX",
  "key7": "66Udt2Aq78rj9L9eVHXnqK5uyZBpzD4Vy2xGKrvr6gtM4kvcf6fVZmUuxRL2381MprqWaSVgEZxfjrrjV9sKBQE4",
  "key8": "RWka85KYQALPmag9MMPcARjBFTrMJgRShWF4uinhWmHkBTQiNLnZDdEWmBaZQHLau5x1sEqeJ3majN9QCjqRZXA",
  "key9": "5ecbNJwnMyJ7n1n5VhBoRGkTm2X8FaSnnjZrN2jmhG2vKvX9esExFUUx1EAjY8vViG7GpY4aYfzEUg8ZEsno4dpJ",
  "key10": "Yimf4VcHfLh5kLerBNhR52UQzsDoChWRvs6pJ5f4MVMmzLXqJ6mjTkMQf6rzgenrKjmZVgvF1brXpvh2bw8F6zi",
  "key11": "4oYxZxrEv6yRsPf64eKFbh3YxM78jtGBL7jDeXqcRLxkHrPRznNTGXiZyyauVcQXWWS81twsKERTUD3efrQxWKGb",
  "key12": "4jyYEY9A65NTm5YfB8JPcBZz8yq2cp4AcLjVhTyJEwMZFbk1DDztoea9GLR5RmsZxhowzH2kMWbcgTqttQzsKqxA",
  "key13": "4ztSkS3jK4NmWqCTFstKC5Gq3BQtrBZ9VeYK74efTP3AtBPnR9cJd59UarvHqqeMAkDoPWin51NWobHh235rkSR8",
  "key14": "eFZ7vmNLgDq1PAVKEk8BdgeDE7bioT7a9smKGYNuB4CGhagmuSLUaD1rENQV2TaDNknjhpTbpwR1JmrLxHx7nY1",
  "key15": "4c5ghg2qWHpZpJomEv9noR6ArGezamdCyrXR13BB8fUpYvQUeoCuzP2tADvFTsXMJ6v6vh8FEc1Mdjzvgipae9tM",
  "key16": "NktWfrrjWTsGmUJkW9zWkcTJtho84BUNbzouCtKGyKRrhvSvx9Vdu16nrRsoFDD45dtKkjvPVXgF4EAnLN84VYr",
  "key17": "22BUNKbL2jWQComMfyZCnRX9PSaExiLJZh9BfUBQyuLxJAzTifLRaQybfsU6PVzVphkkLBaN8zWx87hm1nZKFLb7",
  "key18": "2EVdB25M1KEGtZTWN5Rgg2b5NJvz17UCDppJsW6jeKRTWUto4qu5qvN7Pwtmf13CFTmCaAGwCvHeZhTpi9N1eEvL",
  "key19": "2TM3ivgJu8kHxz1YSjLH8QzDG3T8SFBdQCZfnxbFyiTMrgYDcSQSyFFCyEQz1MU1MhmsmEnWxWhvmptHyEm5NfcN",
  "key20": "5kti9hxUfy3i6kjNy1hwFQgZwWXGFksHuMcf3HwdyKL9kCt4eKXmUeELKPFtSZfNiPxn7BPkjTVxFxnvUtzr4tRa",
  "key21": "2t9x2mDasi2X28sJRER2iQtFHQqzVzdPhi1FAVtD8EzJn9812fjwoDfU9rMmQDtj9snNprykxSRoPN3iW6RFLnn1",
  "key22": "5ZXpVn39ShaP1Ec1hRm4gEcnsvLGf91C5WX3URqz6xxZVMzWq784YC9ncKVCT3N5FHhaGU9S5XLYk1vivFp2Mu5F",
  "key23": "2WuiLYk1n2htgYe3BGKmy1hETQhSjRNArGzxzbX1h6XhYXW3qFLunnpFwDq5Ysj9czn7ufYW3AAgCtMzvwAULJnG",
  "key24": "4BgT8YBTVLnLCM7WRmGb2jSyq2JjoF1MdJmb5KC9xKEqbv2SzGTpmu3Q9o8xsckpPYLfjwpf4q2Nv1qqrmBk3gLQ",
  "key25": "2e21SzfAzTiiJomhuGqpBrzCG5GmsfKbFkHbgpuWEEAP59FbrTYGw2X9tVKx97MFHi1km9oj6nazJGAcUsgey8UH",
  "key26": "2ogwBmkmv5SyFgf8AVBZaqfp3px1A4GWoXBtR6Zm7MTCHhmQvXPrNq2g3R9TLLMkDePTZHpdr8UXJiTjoVYPA794",
  "key27": "31JE1Dup3nAoZNFdQrZVyY3BcrGdpVgdyYC8as4scq82wshiMMkkBNTMBGgC5qQYofyTpq5QfYzsE1G8vyJoXqhf",
  "key28": "3MXQDqVPGTFjMzbC9BgeBZCYSvNsQWMbGsq6scmCZ8jsFAaLW6SpD4o2SUPTLBPebiLv3xM2Xkm86WMF5sDbfrYs"
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
