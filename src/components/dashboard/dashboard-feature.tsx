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
    "5JSSkzdMuSqUSHW1PeA9Zja2zndjfoQjqrZMUaEm97SMb1ZddbKEKg9rSpeGpp7WD6a3pqmfJgKUeRCHVG3HYTqm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gv31A2fRfn19H79nMQX5dMw7vg1DQpPHs13j7cLLTHaxcXQ6saa668bFpuDiCmqZd4zb7pveXHZ673ZCEQaxX9g",
  "key1": "6Pr6TE8VjpwgVbG6E93zaEnLkSrfzAKPK9LPZm5SJX3dkjyb8Q1yErcquQUEH7XrGiG5t1ttqtBKvPaaatARkQo",
  "key2": "3AR5sBKFTe3qp7pXoFwRudqFpEmPmenDYT5ZyW5F9MeuiQUC46zHg15F8SNL8hktwaw9rJPkQVsyeX3mPC2b79yA",
  "key3": "276LXcM9NAuXU7eDGNDgmZArGqGqb2ESow8PEyXJQKWtJdQqosk36pKLkMNnHzJ5MWqDyPjiGg9WpxjzArtnM7uv",
  "key4": "LxNTH9bRm1mKJVzS7hpzV3eFVENfKdr5eY6LbQf1rw3C6JDh5S7rr5QwMpuD9VVwnx5NUHEFez5prd9cKBkSxch",
  "key5": "3iTNAyjXRK2nQvTGGnZ5LEpb2q9gjZdKXiK9XFjvshRXjVfUGaicHKPHXZ8DHTdR5pycfopAWuLXmR81GTcyAsvc",
  "key6": "5hsP8BdeCWdGskZbmgWHZkfqxZ2ukMbmFtW96HqJ4QNWMroHuknnR71pNEVQrzZqzUPUuT73oxY1EK9WwoU8nPUo",
  "key7": "RNME1y8cA8SFQ8W3u4n1wBSbMRHwojA1kVNvvDVWVR15TMkiHPh3WcHmvkTxEYCNFhYuEpXB1azU352wW22necQ",
  "key8": "2ot7WPZfV4cfniuKVExb9yCqY9LmzD4bNnq3GfuL6MiDSDeAn9abWc78TfSEk6XegpUgn9NXKhr4PPZBT41Q1NQH",
  "key9": "451o8GqLHdvuGrusVvgat6Q323YUDH5ugvzJp4shP14r5kmSgEm1dTYfHRGQEoyhA6CsfjnY2gSKXffXbnrKVq22",
  "key10": "2ve4H85So5neHWjX6Ugf1xetTH565FzW6Vo2g8n2L7r8ddrehuDcTG3bPE76R8Z8RMtJSAUNwJafwQ6WRVfBoNB8",
  "key11": "2CcW4GLvZYdmLUiZpUb5FLHSvjeNKcN1bzKWuUX7QU6v7VcwNSjnMAeAiXnVXvppqdu7j33er1SEVtG1AFoXQMAn",
  "key12": "5TsCH25V5cJn9avZqqFzMZP9t4Zteg5pCamfM38UVuASwoLChGMBLEtYSc5Mhe7RLspaqHLqTUpd6q9M5VvAHT5h",
  "key13": "kbrjoBLAz4jfb8X91BJ3eUbZ3eewGMvGoyN172DiKUPJCYTCy5jZWqFYiYMZtU77pmcdwpyj5iygFaet3Ay9Sfp",
  "key14": "5wRpzEKavaKwD8ASjVs8wLmu52npV2JckxnXjav7p6uBTBrcz6h41rVkSwjdxmKrnSVfSVZSLNEGjxvQTNzLPNq",
  "key15": "4pi4TjRQ9njVRmRXNjAJURmQgYrBaRnz35jus2AQk5dqQbELnwjiRyfaavtVPiNCwdGH9rFnXvW15q8kxM1Bctzz",
  "key16": "2XJt3vnaDQwPifckyu3i1mtviht6P82c6zF4vL8Prxg9mwUGsWg3LQkEdwiyYZ3kiw8vfbFRLa5bKgc73UjzrTze",
  "key17": "opFitg1PEvDnoYkB1vcfSnB5J3RUWYwJvz5EsKiWWxdM4EFsczVuKajnCSg7Dy3xvx1ZXW1h1MT8txBcjJskcPv",
  "key18": "3XBhHddYE7CTQmz8Wp8ZZZEqrj2dysEDxaxn5kxK59hHceRJGT8aW1cMBBjdFYZYEKYdTVKH5oJE9dYMmZTQpWE6",
  "key19": "2Ht1Nqg7BaAmzYGNvEs2sXgDUBMb8wcPJPCEaTyXZMbUcQx5EFMjj1WuRFib8yoecMb7t1DugfZ9MU7Gw377Jytd",
  "key20": "54Q3TjMsPLANXpY7LgHeTVz6wPHjN5xVNJcHF9ause2vKyUPwV4rSow26JRvMsc5gdNWNd6f2jStBNYipaBbFTTn",
  "key21": "CVzAgPHiyhQ6wWZJCkG2EN7X7CEom8sSon6UchRmJkoHmZoAdWfaARKcaym6G3z4SzGjx8MJyjAxPXLzfNRGnHr",
  "key22": "4cNA5sU7YLPCjhF59eQm7tond7sEBCK3xSvsnKb2RvtjmkwyRSmUHajvGnuKWSY6qQ9sr6TrUPF4RLCCuW167iB1",
  "key23": "3mPd3dhhbzFpdfqYK1uWXAPQrt9ia2AJepFx7zM46FCRB4NKwvUST8FBVAVBerP47eZi2aG28sY8G2CprY1tSszX",
  "key24": "kPvqtBBy3JTvnkV1s5E6Mam1otuAeB8S6dRJfW7xuvNkKf7A4wbj8gFzKJP9GqUcxjoVrC514hGH7g8uohpDpGA",
  "key25": "3CuwxuRCUgtVnpQrCgHhpizyGB7forAiZuPBVGshejcnt8iYgWptH1hHbzGSRpyUzT1au4xTrR3aT4uN6b7LQWuG",
  "key26": "4tgt1V9Tz3fMHyjEwWHFFuf7Z27bjMXe3SZVw9263sghECLUoewuPsUStDKWSKs8iZ4tXtTLnMxvxwzrddHMcfEe",
  "key27": "Ysxunhv7wZW3p8dpumzTNhpcxRCXCNXZNhXHnfJrXLq1QdrDhXsTYRrNWH84Gq69Rf1doggfSJrDKJpsKk525x2",
  "key28": "2NXrKR8e2BqkoXacoAajWNumeVnKTKnQc6nq62G2gmiqvo6kZ4iJid3hKz2JSTgLychFfoJJTMC7TudrcqzqRwmu",
  "key29": "41bZGJPAZvsJW6aVGmEUWxYXbRtmdncYJxkYQfhQi5tNHNFT6pKDmTRQ1j7W3PweLMdgdJEQ4k5RT2kzf3s7Gou3",
  "key30": "2ooCUfxP65gn2pqNSCpFNvWNHzfy7nMQ5cf58crTZWcozAaxApwLgiqC1CKrKqX6STeWGbK6hcXLtQFsCrq4r7Af",
  "key31": "3hQfcENus6GU93s2iURgxGf1WuSMC7Mqzr2Ztkqsi14Y4GhB1oUbw2keNqa6Eb21CnKwdnMUaygxNXMBzwpch5eD",
  "key32": "3NukececYWKhT3erPPSR3ZxdRqCwb8KCztRHJ3i2DxaemwP4Hw7Xrwx4UP4TbYDGk5osMd5WLX65yMdkUEACFF5L",
  "key33": "3QBMm1ZxAZsNda9LQdj6waaQYJbWvJCi5p86vnSmkDQZw59u1r7AZ8ybk3xPxoCP7vAVvL56SRgRAS54EhFovRVz",
  "key34": "5uHkz6iP44PYUNVrhAuu4z1HNWib9wuZ3aVV7PwkT1d4C8RyuvdduRCnVKP6LQ3J4sNA5Dokubw3beg1LE4B4a6H"
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
