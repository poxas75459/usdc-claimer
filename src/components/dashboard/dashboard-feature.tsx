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
    "3Rt44QpL89UV2NqxmBk9EF4bUuBr2MiXzM5x9WMMRfgnY2euLTuWZ66NfKAgCkmnsSzqCuQsp59mc5Ykf7RekCt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LgZBXCmaUgpZPbdB5saPGVjXMu7sfQxqohp6k9C8W4zvSh3UEFnvx9dNjgPPCEXrVZ146V7FJLfUnY6D11DQoor",
  "key1": "H6zeA5uLHuUV7QBK1NGbJQqFAk5dEgWAw4zSz4kP2vetND2VoQBVBrKwwzqYKJrT7bShCD8kGPtUQa7maCeJVW3",
  "key2": "2kpD3FryjtjeSd6n6u9Kx8HTcXinh1MnKsA5Df6D3fyyx1HM9e74Zn2dgpArCohdCqMSkedr18SWtt2bWNyqmkKF",
  "key3": "4FgpqgFE9b4ryH7AfXuonoVej6jsiMFpWWipmA7Asxw7oQN2GfZ4kckxpfc8xeo1euZWGNc5hzwgSboBkcRDRNxS",
  "key4": "29J1CxxwQ65zZBiqnNTWchK6pN7oa7RinnJZdoBsJXboZqCec8KqwsMDFHFuwZKKaTZ8B9FGnKaGqbC7vvZ8iKw7",
  "key5": "bBG9S5A7Taa5E5B12bsmCrYGn6dLFvsJuFudFtacG5gj4rqY3LbfBF9krJT6GkGThsTSRUeifjfzwKECiKET6A5",
  "key6": "2wxjCnCHXxjVxtq9iGHWWkBd4PpqsjxNPAKTosJNMdvjMehPQqFGKSAk518p7FfNYQeipsDoeTcg4u1zaCuGZghx",
  "key7": "2G6i4XH3HhR6HwDbkd7ynVE5KV6iz9W37tnABqYPDeQuq9h86yoYGT511D2whbvyR1ERrt6EfE2U2HwEqBsNFmWp",
  "key8": "4qwDUrZRBCMRDFR6JrnK7E4MoSC2huBtz7t79sjupPtVYvAftrVSpT6zWHZ7xRUtD9jyuyhTxZCKtm45yBXwTtvV",
  "key9": "25vnrgzD3eBTxCz2dxsaGk1oVSLXCShmoR8txarmWgHGRZnYSWeLPArx53MRPzS2J1A4ej9AA62CrjJbXgDtKdQ3",
  "key10": "3Rxa8L5Gk5yP9CBEWKHyHQEEcU3DstTDn4q8UTGM8wNGLJimECFauwPfPGDsZjoRFATn9PN3GRxYVHsJiDcZbQah",
  "key11": "FCE2ucBgUB7Zedxzt6RfN8Z2dFNYhGeDwTEBJaSUjHY8hFsLWGv9w3wmSZFTvKej7jtq6MvQFt3kL7vzpRkRF7k",
  "key12": "3BGvVyJ8nj54GLAdGf7nPDvNtawNvHNi9qV1uCP6fEXM24BWYnCQpf1iaKbRVCtpsfCRnFU3tjSr4dHaKyinvzDX",
  "key13": "3QCkCJGXcb55n5LmHneEfqZHzBkAWC3JuXX17Y1vJwHqTkSs9ud3uHwaT9HJtJbTD1Rd2E6cXMnBeEqYoSLBpybt",
  "key14": "4sNzy8EmvRf5uqikNSc4kyXXn4fvXANbddmdRv83UtpjiRgXxhc4sYCR2W2f3ip6dxjC7NPwKuXdBx1Zf7tCZsoj",
  "key15": "2qfUjGwEex32hRtGvZsBVZTdcpqwK8DuuqYejtyanndn4THqM9QLoVLUVdSni7TFCn68itbCJ359mrJfPoLzUQog",
  "key16": "iuWDB4wMidowXenp2JyhfWP7MZNG9vs1uXdC2sDH8pBHr93GfpmbaxjMK5PAEt8pqSEmXsupR7D3SGX1VfxrrUz",
  "key17": "3T8UHrSUf8Z52BXZhQSVbsgKtiuvgrVbSpfXiRdsUHQ4m1EGULKK9CLbRN4G5Cee1gS1RfjAvqruu9V4nsVcnXp5",
  "key18": "4G1QqJtrB15io9mAxeNVuCA2sUqi7Y1XU1twxSPtcQtfBBEtJTPVAuCWyWJFtUXqMfDb6eipTFL9a4vZNdCK64JN",
  "key19": "5yYBWvE7oCLc5E3cLGr1RH4yHPicgXBZxC9KLP5LycuKfoC4LVTeeg5CyNaPVJLqvwnCknvypd1KBuzkScZV3Qbb",
  "key20": "4mcuVmVKYNRzsBoh6ze1xr2uyARP8a8yPd6qHC631AHRzpCouDfo44Q3ZSEcNYG96PGWg5vR7Fw4fuErZdJmYruj",
  "key21": "4QWiePvRnjKFqT2u9nJYUiNQZrNYaJxv9tyezuEqWKihargynsGsuRnY4ujkaeFjcd6uHAuDKe2PZdToDym6xCF8",
  "key22": "y1bL3GtTdCY3vb8afFiJ6zjeGkzHtuzU2Bk4MchkwqEfc1AZSD98S4PSyoANqJNdknBik8D583NuzEcq6vxF3BH",
  "key23": "5Zx81CXeZr8J9PDPNxF1UajV7gpgbykB5TUzv5bV6Vn6g7AMBX8VT3NKVfvSBRcfmnf8MH2Vo7CvKNz2MUareRCV",
  "key24": "2UxZUJzxc8mFTCL5G7URft7CKMamuvsoN2yEKezNj95JnqEsjqAbwf7irHGcbpeGjrhU99D3Dnb27YJjhFoxSGdG",
  "key25": "4eDJDCQcsAp8Aix9seJwfLjZDAFLCgE7cfhHkTJXug7rwBLMY64Y1mP4ssAgASrsU7hfsQPpXpuACMT1JzsdDNkK",
  "key26": "2gXbM1MTVAy7GEVtxpdJhYd5AWEvsJM9QwjFfntMyqwFTV4g44nC9Yy79QwxkLKL1tibd4ADgDrkzbGUdS74UgSL",
  "key27": "2obT3RQxmCW5TxxGRkeaJ7CVPD9taCGmnhcMXTQX5VAQvmNTKNSk6VSnshm43h5EtmMhKVTWSnr2bnutHFqLXRjQ",
  "key28": "2G2iiUJgBoio4rej3fkz72RXMYzfSWgVbAoRTWSf1pRi7pE9hE5ptDN1d6q1LVt8FiEKDrH2apZu1WjbQ9DQkNik",
  "key29": "3fPc4S3xeX7t34jCYaHPomynbHp1VvzKcG2bobmuKzqgb6yVg9TGbXU6wk4qSgM23Naf7ZR4LMozF499bjk3DzRC",
  "key30": "4Jr6Crt4io9Ps3TB9wbC3BaDNBzK3YsHiyNS8vJKWZJQygcAcrYyGc4UtbFYjyw8kN3kxXkM9TVUBXoE6EQbL295",
  "key31": "632Dhm2SU7Y1ADyjG5HaKRbCfghDQsLcPHkArUHGYbxfyPM8KEn5ka9Uawr8mrzMmCQgvo1bwf2tmQzrN5KWYRrG",
  "key32": "CrwnXUyb8USFpxoo5j7xXEwVoobKmXfYuAibgqhstbjCP8Bbh68MiPr8Q6gFhbH9i1DLCLYkF81yhwLfZDmtWvR",
  "key33": "3aTPuYU6M36jHTLRqo8C3bYPLG48LykceeT77MRZ7fz44i6PcB1QPYX7YWAm2RAA698Smv8XkU2xK4NNqU7kY3ez",
  "key34": "2sHm9KUV9DJzEnB3dx3ajJcHv52z8rqGqgR53ESNm49ErYAmA6BjQV9DewVARDHQA8Q5pKVxuV1pqtYxTg5CHoKn",
  "key35": "2LaYsA3irSKLGZQyYYQzgkg9W8TuzLiYSA4tNP1hWa2Jh8jbLyJa8NxV6pNp33ab3w9oKrcU1S84nDDYE8JET8CL",
  "key36": "3BrC7Mt64Pf3zmk3HSJQwJMvnsB1wRJcfhkeCCXHxF4BaNjj5uwMsiRJ2M2YtaDZ5gFYWYvweroigdnUDc26cQtD",
  "key37": "m9sjExJq26wnqn2VmA9qY61TFuhQyv8qKTMKDngSYp5N2Ph8ato9BuLTfKkYJXQkDfDySJv72o8u5rSvRZL9iE9",
  "key38": "4PKkB9191Tk9bkUrzLREzF1UdB7S7usZoe7SAoiwV3XXq2bhWuPPBK1SDHwxHguWHTbFDLsyH75HxQcZJNXwnP84",
  "key39": "3B8G2VTFMRfs4VKgtPHUFr3RrjDbjywo1pVoUS5JjxqrFMV1dA12jwzdd1wwLgBYDT2V6SeQtNLMJ8DAoHr9GC3d",
  "key40": "2jd4jTpLdiVTjWgm8GzbH12W6i3zaXf2Tuu2nhLdTQLAnViUEQszEFrVZAzsZjiVBht9wJz4mFCiZteJ7h5bqCde",
  "key41": "4C84rtB819n46JXRRWqXH9aW8JSs5EChPk1pBVdWp9K2EnxQKDQ4xDC6DXsYi5SQY6uXnykn11SkNk9nJVE3e8YP",
  "key42": "22KHgFWHS1TMLBB6Yta4iqNGTnPKC1iGqux6RWNpo9kvzEcbAMbddmrLcJ9w2BdZbNkyDUojtHVCMoTMnBwgGAqR",
  "key43": "5qSWjZozJJi3gRiXeCRZhCGN9q6ugXEU2ZNcaxu4omTC7RMm9Wf18Dp12AT69i2coEnuNapmypKUR77MwFUheH8g",
  "key44": "3aMAfXgXkfNwqMW8VjduzMbRzE9TKMNxkS4ncVmRZUqBHLkTWT93XpktzCv8ed4PHTzMsZmypkN4SmdWnpKsZD8k"
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
