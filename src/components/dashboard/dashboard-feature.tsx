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
    "mdndLw3MoRqiGYrUsSQKPe1mZcG2Pxi9pAuyWEY5ZVK9xweBTmVtdsSvZ1K7YqtsX25cKP36va3vHcrdTj6Kmag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ti9vSeSuCwf768bjYJ3vQahc7xM8v1o9oJB9vAmmAv3NkHACrNHcJ8GfaeGQRz5H7BEbSdscVRwaFc63A7sbPb1",
  "key1": "NhuF4xBsjZyHyCzeM4TpofAuzb36M8PvNA1XQxjgCa7PhE32y4iuKyois5D4tpmZSJC7eYxPMeKxPFyiPq82SBV",
  "key2": "5LJxgbFk2SXZ7JquZoyUkf4mCVPC1DifGCtrhUmScP8gRRkCAmR6ekeQ4YNGgUTxdZvqX5KwKW8gypFLKuTFaMqS",
  "key3": "53UJZjmNYCGhvEHjUPfBtvytzN2rjUcMJ4RAsrqDpYrQDDEBowE2VJ6ho37aF5o6mJm3GJdjm9gavzA7KiNWfTaY",
  "key4": "ADzYYLyM7fyrz9AZxd1ppKm7kAD54EX7ucqrRVfeAxB8KNhPKgQMcmRF1BAVgDYe4rcQRz5SVjpWcFJbwqvYKq9",
  "key5": "5Nm45CSsGGaZAu1MbZ7an9CKUzetZMdgWavTUMGKdYxwdjkDyUKcx6yVMqPP4cS4HPzhqzpLLyUK5SEwXXLDRfsW",
  "key6": "3tWbfcjtyS6xM7eAjANFhdyQofHE8p89TA9kbGhYTs1kzW76F6upjSm7P41AZWFAHMW916LZQrF1tVh3ejoJQsMi",
  "key7": "2Uj5bvH7hyUBhsBHRHsK9Pi2wkghNTVgePXZHfGcZ3A6f93GfiyZv7jnFzLQ6JiDuCNvq8ee6czxTDDDH1s2NLtg",
  "key8": "5zPMQ2oUp4Qw4sUbXfbmovWHTMqPKWVLTy7SDcaLemqFWRSMHdnP8xGNKSSCBUUqr1MS9aHmqqx51LMLZtaFH243",
  "key9": "2ysjAVBWygy4qEwKkJfjBCibYURkbW89pHXZy6QJw7vBJ2YXgfNpnprdC2h7xNLt1SoHsKu7PYeCGr85414rhZ4A",
  "key10": "4xuAphw9BtgdwrzVsqoE8RxFcfWhndYftbhMTkXxoPcCk1VhPKH8bZJQ6BtEM6uvxmtcAxZZBqCc9saGHz8D8aRf",
  "key11": "19mVKXdnEpu49Ca8xwLDTceepFokdyKCcav4RJnyTnP42jfRJNTo84qb83o3Qg3nsCuKpB42K7yMmQX2iZz7MAM",
  "key12": "4vKDdHmJ5YQp591EMG8pWcsxjverEY3kg1UsocW5m9soJQFgsApda59DKu6sYMG2YtV113ne4By3hVhqRPwmLZGm",
  "key13": "5e4unXoPuAqXh3B7pVWKzcqcfaZU7rximU9uUFd863QsSqR9LG8PZHpWUsdgCb4b7DoPhy7u2Q2yZZ7oHJHbLCpL",
  "key14": "4VaFaCvmHbFgZtLQgYJ3UEz4FicowrFPLys2ocErSGrB3CmSy47sXLzgeYpvp9nd2thtTM5o5QX44B4FVWkxSP9e",
  "key15": "2f5y7ieagRno2efhQb4ExUTuSfjSY9yApPSXFjWc9ygKHurtJnU96EN8z3jqcmuATDtRxqcHs5vtsEXS3JFqTNhs",
  "key16": "2op4pRqrjFWpHQoDui9vLpE7V6ZXVeuCyRtvRMQHPFTjni7YKi4Wv8jbkTtBCiJ7R4bYZKxFX9oFLdpUZfTA6s9N",
  "key17": "621W1PwVF92KCTBHNLrhpuwrXk4yrkorBftSMVtQAKzz9kzGSVbiE5TcWtcwkqMEVwpuQYkbQSBR1fef1jv8tWpn",
  "key18": "3UPSUH3r8Q1mnudKvyEkRquknREWqEb2mc7hqdU2bS9dqPveztCbwfKLqMq1zp22NzHxV1NE8915BNTZt1XjR5Ey",
  "key19": "z6K8tA4x4crHJngc4k8kAyUcVtEBAniuGdcbUVkW8wyaAZqz6svvWRXuSrudzmTAGFGNUvJYGU2upCB1Pm7EDvX",
  "key20": "5JNSN9TaR3zKALePMDoTYsEN4ES461v9ye7KqNfNGQdqW46EZQh65vbV6eUsXVwzxoKPu3q2ZLGhhdAQGG6i631p",
  "key21": "4KRtnWvNcjvjW1nVhGoJj6kEZ9WrAtMTSGqrphz8t2ppg1DX3GARxMMK7p2gNq58KDQZRBbLNK1QyUYAiDxaCS6m",
  "key22": "5TFMhXyZZSU5J7tgmySk8vpzbb6QxmSwHjnTmgjGvUZqysNhThGKsRjGedb95m7YT7uHhGHKCQkXgr4LZmXSq3zS",
  "key23": "2y9CTToBeJEh3nTreDkhEgxzjhiQkzYAg5pnvfrwfxhvFUUzfa86wYp72KCCEJLuMkYWGwS4QqrPsxrLDVATvaBU",
  "key24": "5V6npyXzGPVn9oLqXGzmzLtUU9z5ZScp6zVB24FUV1EAXuzEwBC2ye6qEzriYfi85grhn1yDVtboxbYaCbkF56kw",
  "key25": "5T2qYhP9Mb3LYns6m86gyyueEb2xEZiSXfBuJqFuTtfHKEdEWLxrW2G58kcnv519g5SwVRHu2u36hgPPYp84RdeG",
  "key26": "KupHzixkjaCkrsJFXrLaARvSFaV5pz2NEEjcCQEZWaiVPX5v8xCaF5ovZsXHVmm2xNoBUY71voUk8QtATxyVrwT",
  "key27": "2iyXkXNKxjA2NsBVSL3oCz7Mjt7rmaDevUcNaE9w7vCjz8w6nSjVn8Ho2szsWsGPEuCxEKc7UD7aV2vsRfwJ8ans",
  "key28": "5gsgquiqAVVoTueVN6ErDHNMZ69wXZsKdvKcvdEPhLyhoB8ENkzLWG8CUymPfAQhw3teg5ZLRfcC12yLKbYyqkhm",
  "key29": "5usLbhB92mDJiJBx3SacPRy2pKXaFDQbpwLkmdCDWqeBGnwdUFZ1RgsA2h9at3zbN97S2LuLGRHads8Kv1hJUHLL",
  "key30": "4SZvJJojEiLHamhmTdU8RC6u6KdcDtpwTtsCoPhzZXif5E6yRpDD9QCLRXESJzJ26h8uqaxKr7iSnwnxWB4M4Wns",
  "key31": "3LLRKUGxv9ZkBrpoKFzJd97fRZz6vV8tUTjpQzLp51jHnZgUkqAQqowhcW9fdsdTYKX2oe2FhTC6uycPJeTW8cxB",
  "key32": "2Q7aHLHeDzSK3QucPb1xmJqouM6NxZNX65i9k9JR4j4vUeSY3iBKpiMoJzP2mSYsA3piF1uaP49VdGUiHVRTEEbs",
  "key33": "4KnKyaHwpnsAHnDw5XfS7V5qyfmhSN4W9oEP6NwjNeNko4jh2e1Gc7GUR7qAi3QF3Q8S4jMYbt3u3g2ngxBPEg21",
  "key34": "26kvwCAcojZmqbM5WenccrZSSgyuFzQnZ1xCBvFkvs42tV4oAmKovUxCZBSabmMGiq7AEZHBoo3JCxGZ2nmiCEhV",
  "key35": "2EyTJQuL7yq9JusSnNdDMa794wyKBtNdWFQsPJAPhYNC6hyuTPmg4XHdsDKm3fZdHCXeUDBuVazWQdLdqegD8V6g",
  "key36": "5grzDTGvzJkDoWzDnJV3xi5j2zXy97WLceYbNe6UdzkLKbDdHh3tC2ssRThg6Xr5oUHhmeQ9hnvWHaT54fdWnDf"
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
