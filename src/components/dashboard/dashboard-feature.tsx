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
    "3C1Vgwtuq2Xi3Sb1dPnNhMigjaj3ctaPBhFeYLpL1YHXQTokZyeKf9WLJUVbBcrcEY2oJ3xdUNK2HEGUzJj3XQen"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o6LSKpTCDLcah48dtYZsw6k5ckS6CHBHxpyHBisnGH8Kdy5ZRYnEyaxyjovYnEEeHcZCr1KjLMAi68QmJ8emHhc",
  "key1": "3nccR5cyyUYNUUuL8eqrogn9xB1UCaewwQ3sqogzvVCHUmABreA6ibfXodCxY2SKiwXLwD8y7VeFcwuoYWZfrMmu",
  "key2": "3dzrPZWuaCj6r1Nj5uHekirkefuzVfUx1fGvM48KK499cjmukn4EtUpx1cQp4XLEncqGtFHxW3Bj2D6CoJEYh7Rk",
  "key3": "Ygo4Aw72EngMMG7z9UVVFzgtMtcMq4wyPaRtsjmMqJRs4Q6qc5VryJxA5qhPYwunRS1dsjq923sV5tun64X9FkS",
  "key4": "1hMAVcMgd4vWj7KgFU4vwhNr173HeK82nMs765EBa9JNrBcDpVwqkCGyUXonnBqecxxhjg5y6va26nZa1s7z1hh",
  "key5": "5TrK9emsNm6hUzU7YtjYk8HoyEKUyAKS4qEpLaEBT17xvc3qy6Qanx8N9Vdqr3ipQz9BRhZJBA6rRnBEmbvSvJWD",
  "key6": "3JpV8CinCMnoNVQfZW56pnGnyp6WSddHLP9qBn2AkGzYSeU6S76x5QC2FNXU6xLPeKVndqjizoe3aWg6hDftS4P2",
  "key7": "4aEs5Zx7Ne6Rq74sroPxNptAmmK2GMUD8Jn9Kk5x4pnLzNvxAYYjbBmhEgwxDZVLHBqZYETosuE85X6kP475g5Bh",
  "key8": "2GgA5ad2UayvK5azTQUceYHGLjQVvR9kP5s6qusuNmmdAz8BqbMFsBZS8q8S1ekhfEhVrqxuRLxcdF9Ryzhv86Tj",
  "key9": "Z44JixKxeCP1ycKN57DDK4aqP5ewWznjiDfB9KhWtg57DkbXtGUXBxfomt3AcJ9mdJo1cHxWmLk29sMd9Wrjpmr",
  "key10": "3rotZQo8GVenzYAbyg83264TeYZejXoAHnM9dBBTmYfEiejnHWpf6xNkwLZwNVK8THndQczTD7JVYHwZ3sioGRoK",
  "key11": "2SwJDr1keoeLG6hcBCT9hA5zSn3n8aXuQ26FvXHW8nnWjYJUS2Z5mSx75vAFqoTadzwvNeijm4oJkzZbcKAiLJ2b",
  "key12": "5qAfd5Enz2fgNZ5eLdn7uTw4DA21hEBX4e4uuqRLyu5Yd79s97s9LM3Wd156nYQoVwDqoP8ze7d6KyuvLoLFkzSy",
  "key13": "3cmESbiM8hMSyLmiBQx5m8h1JdbnecoyR1UWK8erLR8NRjit3oJKDkKx3qWRQCNkBHdHST8a4NAjdShRmBwQ6d6V",
  "key14": "3ut3qHt1WC58F37Cwj9h5mK769btdgJuVCXnc5gsnBxWNbRLWCiZ94ADAQaLzPojJubAugU6Cup1myDNne2jdkAQ",
  "key15": "4VMTLJTTm5Rt5Q7JoHCURZPNC23QyMsdoZ9sAoGQvucDe2ssX1NG2pKvce8U1pN96jXdDTAxMSJGUQ26xrmgdNsq",
  "key16": "3UJG9KpVHkVNnbewSxb3q6b9eTscaLtFpTvqxB78BoK8ngSxm6BJhP73mas4C9XBpgbSJGqmbGXDD8hBcrmgoUAx",
  "key17": "4ZCQBCHF4yCybVuL3Fr4RgJwQXvku2unBng6k3eTBKZCSkyzUKutiqx9sBuMxyNqhSbirX5hZYL57EVUZSuxQJaR",
  "key18": "kJ8iwLuFZRYUkheiyS3V3DBpb58HgZMyCEUH6tqv8CcLzwSWw1o5zEJf4WXNaf46N5pTMJVUrx1Lxm3Cg4vT1FL",
  "key19": "4pdRGEPTJM1z1p8M3kxbeci8ywsHTxEbF3YJW71xNYS58JWwidyYB7dz2BS9sQhjhxNNQsNrVKbNPJnVTC6psmEk",
  "key20": "2EL78mYGi5D95wycNcdFPbnCZTxXnEjqGqAmnExebnBMcUbataS16D7hGHVcLfeDE68mUp7m6w4H4Zuav9DKdPTm",
  "key21": "4gRJpSdAsCPwp3bJyLiCa9eS7oDVEMA24K4isLmdtNG41TxJ3gQgMAegJWX6mJpD6wtQtX98bpzZNdj2fKWZgHTt",
  "key22": "5vtkvvprJs8cgGFZwwbMaaEByWhvwZvG7rfi4c6fdJ7RH3a795WBPD1h7RensMepP65tGfNhzhjHLNwbdZJmHrGC",
  "key23": "3CQG2h75bGzTsNbhtgWh1h9UPiJwc4dApEWxx4dLdHEwZXANYSqmrRpng4dpPKaT4hYxdUhLMn82NnBTyv5dRg5S",
  "key24": "3UtDFGMuUBtffLg7guvqxRdFyMfmBtYimuxCUgusLJQtE7kmSjmbfezrKUeH6i61bFNVCBoyurkspP8uZo673yRQ",
  "key25": "2bqz9k6mWi6ycxRNJL5SuW54JTRR7LMFEhWWE8BePsvFrBoHymA1x6tbNzrMm7ozPhzoDToKzCYhEBBjmLF3zvHk",
  "key26": "5559S7AXmDrGhsvP3SVk5qBZ9t4raZEkL7kgaFaMRHfaTGPifHCwkQtDtcySuPk5UXqkBgUD2XW9dkUActBWwQ1E",
  "key27": "Tqgs8GAmQbSAQnQKMvEDcZsbXByibgkFPRRv4Szn8Eb4snNn6uYFxFzSbkS9jHBv3DcEzczEmEeg73J6mHmMAH2"
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
