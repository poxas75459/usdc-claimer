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
    "3Ro5nVDZNYSBkxCyEoawjn8F7LsvgQnmjgrz7pofdP6Yc4i2ExSUuZDXeHJfPDKQjMSJERsB4QQnLRgbPFWQv9ey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DYtTanXQhpgvVXMriCPk3fLSvAdwSAHMzKnbkyWPDHjPhGJnu2UWGwdj4w2wxeDAvBYsJQh7S3pFfzwdt8Umoaq",
  "key1": "pTs8RQx1ha5Zjh8eh2826oGhYf5LfNiq8Lxd6qKFNTPa2HZ87ybL3Tc3UKESkBUFiChJ3ehb55C4Wuhowb7kH6x",
  "key2": "3e1dwKtXw4Lp2Cjvf2vaJf3mzXMscfbSEcemyp5GMqELfVjyfzb7H8VbHLo2xRnM2gFTs5qbCqkZDhwV33NNdono",
  "key3": "58o7tsn3PgZy94KQtSnp7QmbPphG1Ns2wzDBgb8Bdkw6Dv2WxWdc22A1SjxmUFpSuUQCewmSiJeuisv3XCfCbSZm",
  "key4": "SCMic6195GYYAPKkB5wU71RgZcNfu9HQPX4ai5XoLHwRcvTP6xvyWCaynnWqadWWqg5uQu5S3VPvZU3BtJFcApc",
  "key5": "2iaag56pfznsxtqJgodoRt7TkGx2FPPCEfkfjBuUs3VDorDPYmgCiBmTiiE44tzFr6pjwdrb5pmhccGwkbz2ucs3",
  "key6": "2MkWHfgq72N5hi3bQX2g2Dtzk7RjgpKZtqbDZMpDNhoimXxk6Qy38WcG55cSycmqumLjX18ztJxW82UvxxckKs8N",
  "key7": "5STJz77auSmAaWshQ8QsDNfqEuy3zeTAJg2ckHfJXxQcwmWTCz5tHb3jxviPzQZeH31VWSZPzQgqTwcZz89cvJDj",
  "key8": "4CFPq8G9V6Morji35SKV8MkLhKQP24jqCBTX1J89ZnagEZe15APrtU5qxgTMzQgt2vLniNezU5hRpALeVgP9Bf3k",
  "key9": "pvgjUbdBswpk8AeMSSAGEhFhjxZiCKzthEUgeEeHeEUFCDAiDtXrsPFbxNEDCprevrQL1eCsDhxAQBm9EBbTsGQ",
  "key10": "nXFSUUuPwbpTYcPHfCR6xbH4gdjdrUd3G8fshvKJBc4qR3fSjxqV3FDHrFuMeruavnPRVRo1jL72v1mhJs3V4ES",
  "key11": "3KbVKKKZG2aeR8vbbp1b7yySg6B1uSX6KqKsPpXfyRFzdZjjwBVfs7RRY3YNf5zSmTVuazesaqouj57MCKUdm7QU",
  "key12": "2rQMssdJN9kKk1Gackg3e3zti9Zch99ZbM8DXVNE3dYPgbGoLVzDZrwt83xuepaiJFTx7xrjw8Pemwxo1p4w4sTW",
  "key13": "5Abb1MUHkA4kcGXzi6m5Fydymz8X1zgJz6LQoDSL1ScXpm4MDxZ4VkjmD9imsFi6DfcBSZ7isKvx9bWmX78TqN9z",
  "key14": "4oSnvXuJJbh8SyjU7vd8w8ngcALcTpb5J3sk6nPzq7TAFZz43cVfuhThrimq7t8iLmkJ8G24DxXXrvYzDECd5JtK",
  "key15": "2wQg7CLkpdMF4fbSZE8BgCmARWK7V8w7HnMjyAKK56rvCE5DaFaFGpneoZSD916xKZ6ZSYnNRLkScKGV23eQVRkY",
  "key16": "2fyVNYgd3CbcYAmXFrVVpYfQWeUxwiEPj6VaXsMdzWY7njFHWZfr2E3z3QzszcWARzpVBrJscpUqS5NqUMsmSHc",
  "key17": "3P5q7Kh3Vyc3wzxkhJwJjAYeN7hndDEif3c7uuoQJAgG6M8Wp6dP4stNAoShA6BawCDDEKGm11bcoiBEjfyCU3KA",
  "key18": "5qYTZBVgFQrvBiawJim9jhQ6YAQ5p5ya4JWiSWjHkSBXhmyxAYwWt11R8vmoMGh8L3EGMErB8P1u6SGhQzbh7uQ9",
  "key19": "8YBpjAiNXYbNvBxNVDahqDFCCxkcDA59BdzFGxbgErb9MV2BD88SPLYF6BP4DagkZcBeREcKiQ35maC8iShvL5i",
  "key20": "48vnFjaxWCxAXa5YtgwxDTDkbKSZmoC2BafhJ6UY88oL2niYRzYo3UQdYfcF1XChYr2ge2RkGLmXZSz6mSQSKDXJ",
  "key21": "QFd5v3yMeo8Fc7VeC9RH775QWnJnBhtucrZirU9HN4xUbpTjk9L9HyEF8LNF6nWbWFSbJAZ6REBn2kxWwzrzT49",
  "key22": "RrnhcN2mbkkgp5jrPpNvUdVe19Zufd3hi6FScRic7sYMBGmi4wK1D4wd6cKrf8n7AChp8SANjVsZovMJZjs1HBB",
  "key23": "8pdgXHWFBmEKfg6BUcjWFmVwSqQKCRM5Mdv8MGz9srAsuhng6ZTXk1EpjWsgjjk2ux9M4DdTPmhEXgoKKfCTJoP",
  "key24": "4uMrtuYhgUKqzXa21Ax8wjQr9943TaV8yH9LmgErPjGVTsuHKVmMsh9Ryb8f48TVMNhFL7LppxGwxZ7ANpkuCwcG",
  "key25": "3B887Uqg9AsNQPQNFAiuPjWuRjgyrJPr6W9W2exoCW9YLivxdEfyhdzMMW4TV1pYihG6nwQGDDXe7whrirXh4kvx",
  "key26": "3PYcfBGEu1SK8fGVYUwuJt4K6Vk6DXg6zKgjewHQe6yoNdK5DgqqgnW22Lt78HscFss8A3F5HzpoTbZk3dnH5R6q",
  "key27": "5TpcjrWkQXFKS2ztx6kfMgaG3dqesjztyv9CYcfrU8yZQb7csL1YxrYMEJKPNTPqA174xuJdEpeJ1KK7zq9sPMoi",
  "key28": "2ssavMoX4qy4yJwe2N4hKTj4Vdjp1SJK7ifsgKGjETm5x5yuFwCrnbd44fXJBN9Nr5tVLqSZa2Nv8DE2SykzaxjR",
  "key29": "4ypUUYUP5mK1kEKD6uF4iu7Mmki8j6uAgwasTPstbHfUFQ6RQwiiTkbEBjDrt8JJvvAZgWoH4JgQPKxuzjhu6GWu",
  "key30": "5ngvgDwA6nSpcDEvDcPRzrGDnxmu3nBjbzaf7rzXGHoQHSxNo4S8VGEUwqu2JKMScgBWTdDtApgioTZucAdvsCne",
  "key31": "23jra2LwBMUQhr8mb94Xe6W3qNQEb6WR34h5SY7srGYeuQgv5bkHGzpGgoDxkMtRowHZ4vfv3NTwWc47Mm5LqpZh",
  "key32": "4NzXZsELpvhcHMK2R22bEbYS43aSTjwZs2VhMyyLB8Hdbm2ZdYGzi4z7H9CqRyT88YK4aLaJG3zytAmEDMLHWXj3",
  "key33": "TWVMHXZCWH81zXqKRMrFpni9dQG9pEym2mu9xeFBMRDY8qh7HoyyxAqrUWCWqy46J8KvvJDq9c7cChVyvEu6XYC",
  "key34": "WXKUmog15B44uBRcLkkTSfJTWV3xjW4YfN5MiRzqJDrNKC5WUbdzLyBKJGuhvLHBRxaVpDVtupGJdnJX2M16vFz",
  "key35": "3jXMn2negFEUNAfa35G1SNMmUtqWi8Xc9Ga8M2gNPrN3uGWtCFrLgbsXssKPfkimmi1fajG9TJrkqb7hAugekyQF",
  "key36": "4nhyx9hW9LtC1ST7eivDmJaziMwXAboPZ79uCTb49FYJUGw2DEBsqZ4bKJEs1fJ3yNay2t8Lh626RooZWxfbkDNR",
  "key37": "3AkziDjwdcCNWaYZ3PwTV13CXR2DSLonSGqLk1i8rcz7yTsL65J4Dcz5zxrLPHE2FjTHjKgriCGT2Hbz9oVemhni"
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
