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
    "4bQrnBTZTPFmrqiSTDLNxbLZyyipbdR6UmJGmcrtfGA7ghwTyDfwn7EwUzxKJCUytba39orbHtdc5N1SpfiG2jX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RBSKKyhabJjSJZj8GkTwffmrGe1CEQu9fAK8mBdqNxG7TGgk5nUDS1ZewPkvW6k9VWLDMQRTKX1Dy9mnxc1dKrf",
  "key1": "58yRzZEFjS3WP1aPwQyc725saGJww4Wew9DNhnPgiNGp1CztN15K4n9pJChTtffBjHBta3MpcYUo9n6gxePj19JF",
  "key2": "5nWfRpXW6mbec9P4gfPCvAt4L5aJBBSaMbooS3b12sKg89PabKobCoiQnSoVoGZDgj6UgyUuxpZDb2pzgf3foVY5",
  "key3": "4oH6rwyesFUjx6UyWH5CVKdJjKk5iNjAC6BU3y7QifMacJLi9tpgkCjFJHhVaVY6GVTGWh3jvxtjY4GJ3xefZtr8",
  "key4": "3EyQ7vePE1GyPZgJjoABSBGmADD36XyrXLEjqPR5Zj8W7HVdMHDAoFmpkKRUaFMcpq1jYQyJSp1wNN7cPVoP6bPH",
  "key5": "wShtULFzjeo3G8uwY4VyExwkGMNVM93kz9Lyij5EZJoozpQfvSb5uNzLV5Tfxbi6QzrgPdJghYGLp9FDUhKDJwr",
  "key6": "2fJPWoEaoKnUvB8CtEdgXYvuaaYmywgnEQx8w5WC6NzPy7YEtqX7GcufYTgAwp6o57toDj7sauvtvgV6zyTZ739z",
  "key7": "FsofctCada7TKr2n3y9fLPUeBN17LjtUDxHgRmkSQqDpTsaqmnSiZbSMmr9Zq3PNVcyRiLoFoBusvrk2FDX7BGo",
  "key8": "5772w1MxvRETd6EQwhNtZVkcFY1PZ42WfLU2cEXX8kfJLqpb443tsig9GbUvgcwViAZZPrc7TXY4GD1ihhjDaWof",
  "key9": "27nEaJaAy5TfSB5wgh8xxsZXW3Xi3Jkw2mh1zgK9irJjXejtqBdcRhoAPB6rkKQ717n28KWJXDjk3rQarxZwZSMX",
  "key10": "2b9UkuVqJQB67Tqi2MXdxox8TBVx5NM3qFhse7Kj9pFnhuCCMhTLwvymuaNJiTxiRwsXnpJraNn6VYYy7aA2HetV",
  "key11": "3uNCbBQepDj3YpEHf3e82yRGVfR3Uhx8WcDdxfQBLwUSNavkQ9TYWyorwp537gcUgKXF6dzhq4aXsTK1FFTpHujt",
  "key12": "7MxqntxNpxtUuQ3nfP4xp35CPTEr6Kgpcqu3kW6ou8WvNnQEh35WLmTGwVSPFVLNSyxoCFqtdoVF4TWwL87TReW",
  "key13": "5wcxsxPQYmrXCveAkJawNR97xPGy4riUcy64N8prax6Fwi2L171kw9PFZhyYK9jViSainDzdvxBES66gqX1mYES8",
  "key14": "eyqws3Q9Cn4S43t39Qspdf5mrEu3i4QRLDF6zCugcawcBajx6JcRxNgh6xrz1uxgwsNminvZkrVBYJEgJV5aAQ3",
  "key15": "2D9ym2zkBAdgdw3CiQewNB1C9hmXgw7sze2nEbnpTwWX5tZu53NaDxT84zMtzAGm2b6ainwxesjrRdnd7VHgQ5cF",
  "key16": "5sHZhAXXQkzrmQYxJWuWQzauTyg4Qu19BX8e4y5a8Kqyd5SGpJNuPAz74RAaqrg3LZJkFYp2xmuRADb3em3cmiUi",
  "key17": "4ubWNHqkJRTzRMjwAzuZAUXjCWnGFYyV7E8UcaiHuq73Dnz5ADfigSuyMQKGGRy7Pgc6e5xmJ5Nmx6BPWhCKUe6A",
  "key18": "5ZtS9kcffanJgTppXu6XY8zCXZjn5THW7x6sEad3GdiGhDHRizvLQ8JKiJLyoMzuS1oAWc9i4fey7PuS9kUytAPX",
  "key19": "2uzgSQyvuyov2ceWid7QskEwyKdyKJTHo7S3ashN7cuMNN3xNuTydRfDDbzwt6QXx8NA9yjaEL5bfKxQSBBzdZUt",
  "key20": "31oYkzaedxhypUqNPy45SFkEVU3mZwVhX9UKEbdYJiiGuSfxrqrVC5dseA2YFaMbtDupQP1ydME5XY3NeS9wAjgQ",
  "key21": "4tgfnUB8ErP3ffxRMpgCBWpZx8YFibvyJaSC2VER5eH8pvZ8TrU6uvwd24PbLrEtMVaMLhCP4X9t8XcKo5ZMoko3",
  "key22": "4VD3hRhSNneYk6JKb13ext4pY88NdqbScEmURa6w4KfjXT9Kxbzd8sS3pKzDPawBVvsyAn13zwNsCK552desE5Th",
  "key23": "4m34Km4wfnwNQsgGgnZcAh23m5xvy4eNHLRoyDSdxbiAkmHcRnvfrfuLo2ptPN6dbopDbnXzkaVyUzkrDyFB39RQ",
  "key24": "3fATuBAPJYDeHmWS8HUyRsbrPWvt1ePvkXhNjJRDyxYgxhkcs3vsppS9RqrPwzaZnha2gHUz1zAJCrwTPLp4FaBU",
  "key25": "3CgicEoYiYuEpbY1azyFwCbXgnjiGmVTTcJvCeX7DD45vdSacSxnUy92dKxvYgVKENPdVUUBdwgz89niud9rmd4u",
  "key26": "3K8qjyusUKe6DUEJPzzPtW74V2BfKk8kRahajqEucU6YdZN4Q8Ajjrdpmx5YXDBw8YK5zS6rKG5ZL5QTuioZtpL4",
  "key27": "34C5qpyFWBupSApkCbTxCUsrH9ivpZPZxoKzMMNKoNCfSfdCa1wfLnfKc4RNoUHVf7A1naWQZsRWYMARHTvz4eyK",
  "key28": "4WvDBZ1QbhTfnNpgXPkbokCDbkTZjJQ8fuSS2RqKZG6D9XcgEg62mX1jaAum6RuHX9kxSZMYggpi36b9tPRi9ixN",
  "key29": "4zX88xZ3L2GUFZknfdQmkVrnhSKzxnoT7CUFFKAiLSexdGW6mvwgxVKjKiZ1RLm1Mj2u7w851mzh34rw6D7m6N8B",
  "key30": "5fLQHrfmDpH7bSF73hsTWBvGaqpXCUzqvA3UKYAuccLJvDb6PFJWCqfXe3cnrYM1LsSZAvHVokbBeZvqXiPLyqQP",
  "key31": "4MQBDPuYY17eB7N2YsoEWVsi3gGrixKvtcn3FY6efCTdgck2sJpVaVXVHkMwCqPUQqU8NpgJY8vomN4ofxmcq1dH",
  "key32": "5EPBmZRPkCxMVctW9EwSDE9wfwvVqfqFKgtdxjJQ63F8LXDkLYzutyLSj7Jx9Sex69yXgYu2CtndXwvnpDhVLxJk",
  "key33": "n4rfLUMTqQegNFgtafvbHbGiktvsfwnTqTp7KWih2X2HtdNtzJHvBqmnwVAgzp2BBUnVJepujg1QtHs1PMPSaWR",
  "key34": "4XMEhvrrZVbYCtDjH5MwbkEUeEVzfeNyH14eWTwMH3cBwYpn9opyByZZr4j2rujorn4H8MZT2sqUxMDP8f1b4qaT",
  "key35": "4Abd5nhzFw75zZqvFEqDHJB5PGqhByvYwKPN6xNZHfaMbw4oqCnxRi3duT3mgwaK8peDNuu2q99DComsyargHtzq",
  "key36": "q4aPCawCoLLHqEnEeU8q6YPCQsn3WjCZdsTTy7PvmSwBr9NwoPNMoJew7QFDd8zn1nnyTJ2fn5oxW3PtpbBfkbL",
  "key37": "5DUTvQzqY5ZKBC597DpYTG24wb7pSFkuWXhhp8bd8aKPK8S7dqJiXGb2zd7Tq1xzymYEZyCft4vNQYP99u91kcQ2",
  "key38": "fEuFZJGcj2ypzdRNxodVekDN62myMNZjHYdQSoSpkRjAogUHtf7feW5L6wqnnSLU9M9SUjhJjDDzmnedgA8eijZ",
  "key39": "4tJU7PNZT5zbhiLNpwmhokaNkJqumtYCjKDquHrfwb4QGrpGJgmRBZb3eDzx1EFiWHR2UQsV9XNWnugYKna6kU8p",
  "key40": "2ChPUij2T2bWwk7ANN3htAxzMgHemhRiKVcu6sxM5cNsFJbvz3Hhfce4fBUMeQfh5PsJ4Xp6613cYi1bwx8YVZky",
  "key41": "PWjiobBa53ZaetrKkVggfr6JANw3eyV2nmeoVmTfw3Q14usDuXgztwGPvCcayppVR9hZEkK5CShVRYpUyxdccDx",
  "key42": "5W8qw24uMmi46a5iGLbamp76mxrKKpTXDVsnpzH8qDqn6BFqyj8tpHpDNVZjsb3nMDgZvb4urmoRknBxHTC8K9KQ",
  "key43": "2ZB8f3j2YrFtwHdJWwQ9mjZZqyAAUU2Jxj9VTi2p6vVZzUGHVUEXBZKHKbnTUFm586nfrA5vQqFWCxZSNKcBSRaj",
  "key44": "HvCvKf763NrQtMVR8mUtmtTdb3sQo3SQ68EjB965y8gLu2z5RhK1nu232UFAJkGW89ECuxL5K61DejLXSqWVrnH",
  "key45": "5QwNUghDM4rupg9wxxRkoShTvV5rizwdPx4Qx3pUYtJBjgb9G2pe7uRC42FZaUu2vLUStfvUhJVA9wuM2r1gYnfs",
  "key46": "ifKm2NFc5rrDQVBd8tXGDSpzTpMV2MkxWuQyJrDvmbMq6anjy1324Dj6i8R8Mr4XvUzhEr5gz1iJSJsrkBS54GY",
  "key47": "4h49WLKb2LLBGQYEerJGFDy98ubJk9NtuNcDMwUqgGzz4wySEWkB2XXHCUpLwHmwh1tRe9LgvUXWcF9MkMUWomvr",
  "key48": "5tjPckNgbvsPFzcyUbmECTKNVwsB5BH3UC5DjTwBa1b98aXkQzkinXxotqJHQTF7UQjrqzjwMnRW1p7DUeTkUJSy",
  "key49": "PyN485nA2R4XQth5UFc88TAxXKtMEL46LH4F7HVaMATokc8ASiWHWPjgGgaSMvJC6J2vLUH5batfWymVoNNDoyK"
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
