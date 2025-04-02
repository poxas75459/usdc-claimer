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
    "5HuS5VePGRvNTNDGDcAMPiytNHsMYaCfZ8XkxYoSAkYwxG7ZvtTav36KesqZAWpgkaVnRK3g2z6n3KrjJ4tSPTFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tTonbwmS5Pf4sanCUtCrTU4gL9azt2CZ4zg2tc83U3Nj6fZQKZiQYoKqbTSj71CPQLPjQ4RaadK3Qc1iWFfG2yD",
  "key1": "2rkEzgvkycWR2Hn88P4VF4dgRVnPovdcVtxUVqRrqEC89FJZtgMAmjh3CGLYThjyugTA82EnsZNFEUvidn7yM59C",
  "key2": "48ufYtmt8mW2W2bY576msBnKNU4gZSNZr4eN5o93DRCQBKd6yLRsUpdGjHyWQDvTHFStJ6TSmdn9RhXdpAERSWPg",
  "key3": "4LcmiyjfnmhtpkeUB6Fxux6XTXNcyQxtVPQ73hPc9wguPxj1BGF4m4QfLYPUrLnsoKpK9xfgB1kyfqNXT8PmQdFy",
  "key4": "4yPpcoBbJiQFNKpqmNn6aeVgNYwti6CcWvmrDWuNg41LdnbNB1QhQeMKEhqmHCVS7isCaRYhgURjhxuKSgqqkgUT",
  "key5": "63C1DugdANr4zc9bAiU8zNQW6RqJ6W9z1YYfVT7rKECDSy1icEXbcVrFx9vmGKoB2VMWWYNNRwE3qHZqvhqBWd7Q",
  "key6": "2XA6LDfmVUfrtHfAeLEFDEYuL8wqC1dkwKhTjH1pqrcLamvxk3fJePGd8ZaCCtg6euw1WDqfZVLPPuY6mqCEgXvB",
  "key7": "1XQ9ckASH88iT9Wx2HFLCtxySGfmcL9SAVmxkH2GncLYq1YhrFfCpFNryAnA5nvhaF5XTBPhBnXWvQxvGZ72B8V",
  "key8": "5nG49d2mnEesQ2VxFQzUspZQkZhZYf7KhX377VnaozF4TXZN4adKaf7s7YqM9TFDurvQQqS87PqE5WyhaxEyvmrn",
  "key9": "MrRCRpp4u9VNCcnurQz8AjdAc9p5tJTxSYGy2dBBsu9p76yxRTTHgNcNCuaCBxHwfjkkJR7RgscVjUqX2NV5t9c",
  "key10": "2bJBbeXr4qUU6PVDy2EfTxZb1Ck25gDzJCUeqESHRZsCpRTmk2bUTx4fRUUZnYkwrsTxXHkDyzVtyDpSwndazQVy",
  "key11": "3gPR2nKGofLXdzuMP4RaqD5YQRPskWrE2whThXcRCzC1rmFbs6cETXYa68re3mkAJDeHg3kpya44qFYESUqbPNEV",
  "key12": "2xoPFAK3XNi4CbTWxP9PxCqAmoRH4uDzpMkp8xKz3wxaCZs2r7hNGW1Zbdhb9cKQfQoovfVxLPfL4UgpcpFekvAx",
  "key13": "2TD3WDkNpxHcd1jQT1SDVLYLBZTf3kAW5gY5xvQ481UyaW3JSVd4fPWCcJjQXnyCmkhyZzqz9UWyBx3e8nQJMbp1",
  "key14": "nxg7e4CB4Qh7yXBrwFRKXQizDgJ5MfXZLnHM1GuQuhCtjM4puKMRNVJXcyLmdBgvRcgVL5XcxrBgWdxKuXxkp3K",
  "key15": "5v2PZKzAjwEKAsHHejE7w9xNCFYrJmacPU6zoM45z3iHfGYznMaJGSaFuKQZNeCP6X5WrASJRcWShmqg4AdGN2R5",
  "key16": "3ygjGH9MgBoMfpCHo1AT2jJbxdGHrk323c3ZQ3sJHbYuHdLBh5ej92daxcKmuaq6hFerrMJucXDKLEuZ1RDYozfm",
  "key17": "42uPYuVwRwh7hJgErPvLgiMKtuA2DEXYBnDhqD8bEaibhesZw8V2TRVsscupUKCEwnbdaRCvKsmAGLASg64j2yXu",
  "key18": "25Myh2hVQMdZt4XtdaherHKAFDqvj7FQp2L4fJUf8t4Yaa71rnBaDu8uYVrkfsJrFR15AH31V73BoqU9tuiHLbR8",
  "key19": "5dMmnEposgdnSR5qw2obkL6Q7S3uGe4Y3QK6RaU7B5zawikxXkizdyE6f76FTyN47YACU6tF2GmyRXpzQRfCs2hu",
  "key20": "5hTQL1nQPJjkWDfR2rXKpwfKu92edGsvzFxsedf1ooK2u52R12eeWbbGcVsoSreB8PRBpyvkhV5qUQQZjndjz2C3",
  "key21": "36H2SKdVHF4pmn4zGtKiprZvet3YCUzRqtFBs6dB6GiPLyuDxR3qjFa16GQ4Z6D9L6EhuQakGtTWtVgVKsp35XKm",
  "key22": "3omWayojtSSZb7WWSuMdj4RY17GzyRMFYQ9wEaehEGukYgQ7NrLa3iTA4Xkkyo3P8uNyF8USPtMJqoXqkA3g6nMk",
  "key23": "66DM9hDFYFEdPJMiVtXsVi16H1NZVN7M2ceySnzLLAnJhwwPwurYQ7xsJEkQYYKU7Mn8yYHBpnDmGD5GczPKpTpJ",
  "key24": "4LX5GQFxWttc3KMaYfjL1RQ8X2QzhDXo9FyDLY21rfT1Zj52FWGMuUhcZx47TgsFSmFfeAwdv3pjFB5YBCirCY6",
  "key25": "5VipNK3Caj6MgMfayibYSYxaVaZ8eWTtZSQYZETXsR2wAWnEBThwK11sYtRe44dyV4ejScpBQnZt5BktQPhxrggW",
  "key26": "5iqALhmu7qxvYfWwGPVusF9Aa5zf6dedo95qTjmgFgBcdfGHU5qrqy3RRDuobCShXr7Jx7yNwYYGzDAWrQgosRAv",
  "key27": "4jMZ6dbc9DZfzLoBAznKj4F5fLjFWGhbBfCy7e2NraEX41qwnLKS6zy4XZ8iyDsTzAqN5QeSE18YdUZuTkqG3U56",
  "key28": "3TCDrxW6oxVggEoXA3PEn1M6JwhAsu9ckMYcGy6zWwsACRjsY2YrbBY6XBPwpRh4ePwu2N6XJ4Cf5woCJ8ozKXMR",
  "key29": "EEooKNwo4WbofzePHRLf6XCmUBpU1gJHY7EciTyZXeyAjmJfHVZXxaF8jXCVWp218o7DDZTiuZMSMCyqe29Z67J",
  "key30": "5Uw1kALDRQcck7KeN9wPNsWvDqTknvkWZRt9NbGDmBBCsAB62er9Zn5hbBRmhgnuQ7pBCDHjie3RTgXhMtVD5y5F",
  "key31": "2nH2Goap6p6iph5aK1x8ze1dpM5QN7K8c2u8Buk4pfxBTRQ1ELoX1cNb8BoHnmaHEcgWVE4A27V1BrVhKx5GYmJQ",
  "key32": "5Gybb5Zo5NVcHKvJ1RA7CJhg39D1wE49UQKznzRnRjyTPiwV6t96cjoMovMBJAekgLtD8UsmiuCdUd1htdgiey7b",
  "key33": "45CoTAsWqeF8riqQN9egvTGXPt5NRsqxGPHjiUdfWUXkxCMBmtcUH8oWehfpAvV6SJcfyfKgaMWxYoTvowAuoneL",
  "key34": "8NA8ZSTvPuyZcdccq8mzD3j8sxJGLorGKczvsQy1WFEWYJNUuCVxUvm1yENf2cD6YmKk12HbhFwGp1VXYoZoZJm",
  "key35": "4o8qmvSKSt5ftagGBCGwZHJoYRGus3hdyuB3S2pbEeAysxiqU97dzRSGp18F74v59JLXcsx3Rw3vFaJQnoF2aVDS",
  "key36": "3t64UHYLJV3Eks4rwywqeUuR723uMcFdvWAoyu3MWF3oAnUgC3J2yJk7NdsR5Vg5Ammy55RM1ziJQaU8RRX7UfB9",
  "key37": "4qZNXJdNKZhSNjd1922PpwHjE6uCjztyXP3UHFCvpehkE3rebNoscdTpcabpCzfWLYJqqS9KWuiD8akNgcPChpTq",
  "key38": "4G4Hua3Knvk1499TYfUTzcdaTSroHgXaGPAqdKTkfyxsYiJysbRhyLuxSFxFx4kLwoSKGpzLwSEc761qnfmWg5ii",
  "key39": "PALTa8kGkgCQmnTL98VtuBXeNb5YK1HGWtDaSWsH6eBZNGGmTu8VXwYTkLdkbn5m7N9dkmMs1ZYNJms7ags4s6d",
  "key40": "2WorgWojMv9nM6ZKpRFM8Hm7TLszcf9RsH4W5b9nAMkDrkVUdx5pifvittKv8oCy2spV2kxH2vB8LF5o2yx7tAHy",
  "key41": "5nLNGBiNQnjHqnoLSQPF6rZmQJeVxsy3ZcL84QK86hjoa7UhaEDiCXGJLsefaN1p13gpntQAGoy2MxmaAVYAsZHA",
  "key42": "3jcVBgnd7hiBvQjymXaP9LLgXBEMCMP7AoyveQt7UwyokXzRSLtCYGRaHAohU395uf1tj5wvF2fu8qkxAvoVHuTM",
  "key43": "3PRAbagHpAhJD9ybSLNvEiH4tPcKkZ9wAZmKf1cpLAhKHLxXH1hRiEsAAVFgwZ7XQiaQ22ZtDts5TJzQvzUt4odz",
  "key44": "3TpGtUJoGjZeZaRZpHPwahtVX5ppuPfTJKzTrEvauoBSyLoKxvbDHHFtoGKzTXvk7H8FtG1yjSjV5CunKW78uTBA",
  "key45": "5zqnFofkbt9c4oMxctoynTuWj7EeajczcWdG3k7BcDhypist72ZwM2BgA6BKDAL9N3XS8FfAu9CSGtFoxeMR8xFL",
  "key46": "E7rrVH8eEM7a3CR9YNjuMUjobaM6mwLVZmzDHTkZbeo7uP21ni7u3AYa1btKumtr1y6oXD8of79CGSkGnW5V72z",
  "key47": "MHUBaF5cGdtMcADBGPnVtA2w73f8KLtjttZgLAKx6VM1QHTn1qmtbqR29URcYbYz3zLsvVK4M8LoMLD7xghYzrY"
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
