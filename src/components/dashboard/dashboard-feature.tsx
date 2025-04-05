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
    "oszDLr2dBnTAh7Ey1aSxaGLWTDE31z1vUWtXHPt7VkTkAeC5MarcGbXMyeU9DxYttuKvNrCmRnzLCuLCksBpggc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NqpnsM7JGLiFXChrg3dqg6r4CqDC32quZj9EprmWqpcxqq7GHzT67Tpc1qvLFwjzgGsMYihkpyG9y1SpjTCUaHp",
  "key1": "4uVbjYeVBLhiDjSrz95S1ikkuCNXZuxayw3gguXgJn7hNvCr4yCztPcWHpyk5gLrE4Ju6yUehynJTEXkxbSM3Kjs",
  "key2": "5KcAd4Ksz69p7yznhAdge5oR7o59D3D6e3uQSFKiPK1moBQP4akS8iy7yhsFzkuabYmDEdQ5sk5sVMBDZe6k65x9",
  "key3": "gFQSfa2Qy4vFCqNEqacSqDkLUw8QqgPXJU4EhL9oiKv6pYSiznwSoi51fwXw5BHpYY1wH8g1ugYorX6u5NXT4Zj",
  "key4": "2upCSFuvyjUFrHcsTFc7eidga8ujCs4WNoJvZovdFux7TUH9ZJWag1aJuGBz1YVCLxhdqvwvymQM7t1wj1F9Sgwp",
  "key5": "5Ss1L6fiemzLNAaUi3Pdey4wB25ivnEKCfdf6KJkfDCa3WfrfcMNGXQza4acLs4Be8e6p3hjnMA3yhdseYiQG1zD",
  "key6": "3HL2q6CikeVK5T2NqV2awZUSgYHvFhmHP1wseBiHWFTpf4Q7swWiKnacZJ8Cdq9dKpDpdYV7tWKuuEitxLkj42Xc",
  "key7": "5XEnWQqFbA2P6pwrz93BJiKfqaAP7nqtMpFQXms1n8DEebXUoVVm2iLN3WzSuVr4JAEpYyjc5Nw6pZsGqFKDEv4F",
  "key8": "5rr5wQeTMSCpnxWRX4YhFgoMHM2vFerabLHLpqagFFb8x9pnJEWAeo5NEZZKvkfEhyDTvMfnuaNeJ9xzvcwgHhHG",
  "key9": "2VwNaz8JXttwLSpqCBKXTis842iD7QPSZWpxsDroT6iAzGP16ci8mo1cjx3eJFNEwYAzo5wC41RwGdWVgdCEPwWv",
  "key10": "2ExfJNvqQC6vKXZX5wwHZnBJupCLxdQAJZCAfZt5i6hDB8XhyuNsZgcRV4V2MKniMaqu9Va27gvaKXuTbuqnBvTv",
  "key11": "3ZPKRcY3wDT5JcgX5QDGQ9m3ucxfzio2uECDBSMeFCfP3BbwLCuYyA6YiipFa6CmrnCCGRGgG6Dn175rZpccpECa",
  "key12": "jMFn2Jqv2y8vTN7bekN51y3kfPsqc5L9CsFr19yrTBecVGNjKQ1BPTuMLJNoXLSaHTkkWUGxSXoTHQ2FqD7xhUQ",
  "key13": "5sT9Lxu13QwtQSFhTfQSFPBm85LPnBZb3v7JwFQUCi3LNoXs8azo8zFjmHCyuCaPbudiREZEa1QTdW4EV921DMdw",
  "key14": "pjru7nDTSfzyjKHHBfCqjzfwYL5oVsNooCJ9gsFacmuAqe1LHTRJ6D9g3q9xAZDRmXZwMdWh4enpJavWR9LJymJ",
  "key15": "3XAgGCHEs8kW18pxTsMqc2rNWaNXkanUxfAHnqCfsarEpoJXKNPuyN2AH69ZcQ3fn8EByX1inLUU6TJGoaJYiR5W",
  "key16": "4NoSSeggSsKT9jUqKBXsv5vHb6y2J9izMjMbkb33Y2d3vERMLPeUnZ9bEesoqajJR1bRyQ1N7iSQssgRhLybRRgv",
  "key17": "5Ag1QGdd9uqmzXnyv7DkYCayAZ4tBEzkp4ZWorCdmShrLdrQjGb1MoRqRFpqnv4t9JhEy361zXSRwgSCBdWTjumq",
  "key18": "2HjWmxL5mm6ASj2kyCNpx1gAJ5UDKiqsPBEtQkAiVuoBwZkDzGB1MqZPh43BsXjHJt8mwkpasR9fFVQe1ZZVj8XV",
  "key19": "2Sj5jmHcuJWdf93M3LEU6iPcvP2EtmbqaRgoHF738pUachi4xiQQb7nViXNhD69usxBAanJUSdpnGroX5SFaxtYj",
  "key20": "5EzepDvDRHx3LiXFWFUneGV4wpz4TqyELN66UXgQAgryyYvL3Vzb5o76PCpNBvwMXXSxMbJWC4NxEt84T7i3NcHM",
  "key21": "2xqAo2NxVzAM8UcQpZXoPp7KykcaSPUT8JYCEgwwbGrM9bb3jqBE3W2t4PgQ4TwYe5Q6wQ9UAqXSeBPDqTZ7Cdsr",
  "key22": "377Hu1AYmt5DmXPQVpjNHMpqZfqAA74Hrmb2jDd1BYVjZvrED4sP2utk721yKh1A1hNs1LLDyaBtncpc3SZSAbZe",
  "key23": "3nY58TNpHjAUtLVcxtqBho8fow7JLydE5dVzzWSEhhf1i2Kc2nh5ikMkij8pReaqquztj1MbEwfd8U68eG2pqofS",
  "key24": "5MDQLMTHLHtiSnedS6ADvRLSZKbH2j1KVzTcmASXviwRdXs7XokdBqyehE78qfnbAgzUzBnd2JN6JtZmkJSZ2dbK",
  "key25": "2rdKqRhkG512H62XqMFXyxhQM2d6r4qmepsUHooAEG3acAV4Q3wWSf1hQeL4xfa1zS1bEY8GcXgkovzFjcenQmwH",
  "key26": "SoyEDS1GWvPvduesNn4UWtqohsp84czkFQ1mvNncoWqFaK96yfDngqfvUpLp7FGpU97mDsWcVMEtKK2HNU4MquV",
  "key27": "5otiPF5h64k3QNyfxyjRp8YDjW53oXtMJWjR4S9FCrmYow2YYPY3La2copTyeVWL6DqGmLQFL6T3L9s2gPwjdrvy",
  "key28": "5PMx7ZZYRPcTHkcsZNJKK2meB9s5t4NTzk4oAHE2wXjdFUvtVBzCFKDwJsVKLRbsZdsto3ZYaUMW5wjmV7sDNKnr",
  "key29": "5vuTZheakjSBUZhHf9dj6obmkuwHmN2R8bGmHjJSDqa9Z25jreM2mM62h6EctgnBSgtX4NC34i3C8xfhMaVGArt",
  "key30": "W77ALtegmH6EwGphjnoCYeQq8a3rhFPAc4EYvLWYaNZbwdxeczW63dvejYU8jjGJm2ju7dCzdxax294peBjZbXD",
  "key31": "61sAFCJaat51X3SvDcjWTzcbGdqwdHHRzKhEtQ2QguKXfEqEETDEw1wkCw3n43oU3Gx1Z4Xzc3ueH2xuJSg7gvcu",
  "key32": "5JxaPQZQAtbMbFrBCPvRJDQLRTQP6zgN2iuMPWMgcw6Qc9WjpFGMLa1XUCN4z4SKZpBRCAk3JcvCeQDJ4iZALuHC",
  "key33": "59hxQiLLc9ZdFHTJGwBAtQSse4aAQnFkuqtz5BXYREDuSVfGSrcxFKurAxCMt3cKao4kwqptGYA9waLhRX9nurmv",
  "key34": "3Tkh2Np6XwwsPfjH2YWVwE273c2UwuWnPovv9WBcLzVZX93dE78RQoku8bgPHRAQt7Rtkb35UFowKsVW3KmpcKKf",
  "key35": "2FemmrAkBTCZDhcBcs4bnaMqwQ6CMUwEK718zRaVKGfH24exJwCvqoD4ExtBh3EYubsaN8UtSyPLtmtNvqBg19kA",
  "key36": "Em17n4k1BRSKkVKD7qusHeFX1DTvo2gXv7TySTqAib1dipCqDXzQpHiUU3fneLogbDdYXA2Gfz1kVE6AKcuMLWy",
  "key37": "5vLgTkngZuHGVy5uhURqe7ropNMjHSvmD3ZE3u4f8TanGJWzRVTg3kXJy5vC8pmT8NcpW23VX1P2JxMjoGDzxUVv",
  "key38": "w1BvbWqvR7g9FoB1n6JYhcSq5tqfmupxi1x1QxyyTmbzxiJidM5LWFv7Pp8kB2jdZ7FgkUewQnrgSaaJ9HuWSNP",
  "key39": "2pSe3m9DuF1ZVTT74Zdohdid7idL7QKci2j74fZ8PxEXMBFZfQczQGcjvvJU9SSYZxr6fiii75wDhVETjBhqz2mc"
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
