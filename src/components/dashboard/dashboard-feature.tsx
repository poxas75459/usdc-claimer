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
    "2eKkNRtL6tRTMpUJNDv2Q1LEm5cdGpHNdPKC4vvEdad45npTyAaoRQ26X5NQi6CP213c4KEQUUEBCnmiq4xhGhd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2is8VrACGGuoWKC4h45uZPKsTg2RAk1XuFzSydmTotXN3fP4wtiC3DvjvRyPdMbiejzKm2tWhk5TjAuKXJxW73sG",
  "key1": "4YouQnA8ire8U7JPz75C7MJ3aVZe9m3yt9csxiGjuXdXocsPQquHJa5Vf53ud2uenNVLrXRQkzegNwJMd8YRMVVA",
  "key2": "5MztWFuvPk3eYYAqwcEDUYUaVcRuVybYPv9Tz8g7BBYjZWi8he4XvDaFVruSRrUsT13dMmg9gNcGD4EqSh8yfDgg",
  "key3": "57wWFzQGxNj8ccuzdYGECWXh92gHr7itAj3kkBsudw7YCiKazoXDj9jcowgugeFmQmytuf9SwTQf2dnnm9NXiuuq",
  "key4": "3oMC6tVfVJUHNYDY8umw62fScW7p8o5t8XwNu1U4sxjMCLta4fepAbbnLrvVnCXzFX5mzuNZ9asq87Z2xrbjBA66",
  "key5": "3MjERwp3JV8yVeEddASg6B4erjtUbzXyidcwQjHBXLKQ5wff46hGEb4j2YtFf1z1gFfgKayt2wu44tMuSaXT5ycw",
  "key6": "2TeXgAuvgbuSwQnBTXjpjdyvdGSczZuRXwYo2NA419ebph5a7akdMaa9pzMt13d1FE17YdqsCeMmgm6D68BoNrHQ",
  "key7": "37G31NXtCX4fuJxY6RyLbpCefW3YJH3nu15WMpFg2XmCxDdicLHVmUu4LSajdjxwduYwTcqfWVfgVBTcHUSR68p7",
  "key8": "3ETTiQv1PEQ7odNsMYk6tXfXg2Y9sLyeCLf7DRfyhr1cfe8bBoL7ttwt4ffLhjfVTtgojKtjhibe4pZxgBPjA5R4",
  "key9": "3ZLUjaVg5Mmf1BKvKEhBzDxXhpumy7VsmZ6mC3FYYySBX1udGVPERbVoKAZRMLEMfNNrykQ8qXoWrz3qp9SMFdrN",
  "key10": "3RqGf15NyupBK5uaTCu3jeKJjnBHv1fhxGSsmjg8dREPBDFFQwaTJgVmCmfiHLfVRt45zUWBk5LQdhQijUj7Z3Z7",
  "key11": "23c5fgtYkYz99B3y3AJkvZJ9VaNfzXzkbdwerKvizjE6trBSsoh7D7RAUYwZMZyBwBvo9676oL4NnfsExW1mXz2e",
  "key12": "2BbVE53xhETzdU9F8rViEVfX3Go3RfBPJk7FjHR6zweMFmofyn3Dgr9uBETMDXh2H9Uf4LWVQkCXdDXwm8PstjtY",
  "key13": "2WS5v1T9t98cUrLoqprm4xHUwmhUo4Wj3Z4odsyvK8LvsuUVceQXT6EhwfWRFjhkmgbXbGMduuWmYR6fhCXSBDLT",
  "key14": "5BLiQ9B7gsPszvXe9fhamfw5PawPdzemEBkihyVEw9Ugb853ZP8f9x26TmtRD53uDH2a8RemG8ZLdtDh1phgv4q3",
  "key15": "3Fbc4jQ5MxxPGZfH9WqVWHXCe698FJbSeVFZRPKt2JqCNU5jn4vGyozDhJVpNiCL8rtvxQ1gzfVHqxoD1VwcdVv1",
  "key16": "ZZE56uURAoS8h7eskMrXbaXhqNxpBBKe7W749RCc29pwaeirprNBSrLi3wsShdf3nKuy5YGFY7VXfk7e5Jdn7Jo",
  "key17": "4CTRUkevBjU789DUuccZjD2mcAREJ6TJQyuHpwNR1Wze8ZK4yygfc24NzrsEQDWWyZPfzzpW2pQBXkY5B6tYUEbE",
  "key18": "5hEGf1n6ph7PioErgBm7yxfdT2LK7b1ebwhf2qXGRJWmDXh3ce8uLw1Nmw5CsS4v73CdzqWMdkEoSykaffna93A9",
  "key19": "4DQBdowxRfQ8kdhdzRcYtfD8rYsK9WsQRRnfKVVP3P78mDDXrThc4xRRbQ82YsWoTK3hmVX2HuSvMDoq4ACmMkdL",
  "key20": "2EVV9hTX27eiD8BmVa7fwRSgbkkLvzPkMZbJoc6aRUH1fmzH7SKKYFMfE1p4s9w6jWTzqtu9QaUfvW1HXuqtb5Bc",
  "key21": "5SAxkGj3FyuNJzkUvtWMjYok3ixkXxQY5npXRD4jVFk8yfdqvczWBCJeRoMWDYcRFogXdyPFcpCPP4GXkiUu7PBd",
  "key22": "3TCG2oTaoaPWcV5zxW1Y34SoMGUqLyWGCa8rPCJwX2iL5Ln5ngMerKcZQAo94CYMSJG43VJiaASQAdvmiCD5tWBH",
  "key23": "5BBWjFAY3owv9ffsKBgViExQK8MXRGPFxs7H47hpyJiTxq63tGXLUBKXj5DQDi1yi8YvCAUbve9E6GqBySgizee8",
  "key24": "2Gq2wt5wqSpCqTsPYm5vNxv1MnA1nS1heuBtNnnFj47rVJwjSoyqkQmVHSfmELTdEEua5XVW5ynAaPS9gBwbmgjV",
  "key25": "3S8Jwu8TuZhsSyjfywthNuA2RccnyNDxaHEeWtPy2aEto5YWBRb8mpPDyiNqa1EwXu9c5G2FDsX3arkYCKdMuqGh",
  "key26": "2U2onZTw9h7nFdWrTjyCrDS3nwfpvDoNDSjkS65RtpKZvuKNWR8weJr4ZgRZ12jp8JNyLkG4hh1XqczmAkWwHCdL",
  "key27": "5Ecgy7twvCb6yZBv5DmXGnaYR2zkDgv12xaowiRoPcoDLz1AYJmxYi1XGegn4sXg34fJrFZh3t1p6rxWnKjLd81F",
  "key28": "3kpqbyWVvR9dFEinEaKPs1iqXNm1wT7GX3vRXKkoUss3i5fJCdvFQuu79yct7wuX35tJUaaRuKtQAqUPP4Vpyg5y",
  "key29": "4exyTg5Npcesu4kfFJaaBLueZR1ULZPngTAWCNopJ5YdGZ9g6VbdXbp2S95bFYR2ojP33UxahfzNcRPe9Mjem8BC",
  "key30": "4xmD8e83mKJcnzcQbcjwWrEaXHhAk4RJ8CfKGQ3KX63QXfD9MG2F1ibgvbfSSZh3bjsoo1xRtxDTW8tzAesYUXon",
  "key31": "3xwtsjmtz6FrKZdNMZeZWyv7Z2GHqy42ctoNUHUoCTD2FMqiejz84rKf6EnKQZokSBj5BVvDM3cuYKmqi1Gsrq25",
  "key32": "2iaQmN4V1UTmn73zQYXZMLchgeJoHeEewreWpsQTBv3ve3hFQtr6m4ycYb5SjkXELcERRmmV2AgTMbnuyYNyqHGi",
  "key33": "2QLCkwHXwuXiJjMBw1psfvUPx2YWKykikKkUn3pvr2d6bTB9tJnPUFwYm6VChgTM6LNwayBRhVVQyH2eaAxP1TEt",
  "key34": "NKZL2oYGPP8gJhAh3adou2QYsqUMPNTi8AdAA1L3AESZwkRHbz6UDFo32UmJ5om79WximReFXUikqd2tHaMiqNV",
  "key35": "58pYig3F4Bp1ts7psnEYw78RE11oZ6K3q3Kq1KDdVrFwpk7ojnwtzDxQqSSQjWbizTt66oiZH2BCwZfgJi8dxV8b",
  "key36": "aVa6kha2pTjrgPWepsz3uoxxcMo6VvdbpccxiqBcLjZSe8JEXqymGuqh2hGXgYGRxwnM6nw4bi39LaDjFmcUwEn"
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
