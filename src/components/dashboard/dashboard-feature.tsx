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
    "3ZKATMi9zCSgfy8jaae2ZBeE7y9LbSzaJfBk3zJhbYt84yzRYQnQKQcXu1mWFMnGbviAczKhHtwUznCtZDoLvFwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gfGKKqdSKHkyvkvMfRSAYR7ApNto8j1wbwsXa2W7R2Pee3jNq6RGz2PqU3bNksDM9MGJW8qUJRNMTSBV8J1zcQe",
  "key1": "4SaRbxVk5wbEfSA49qDnWvKGHFwdVM3YFb3JRkXhfm2bvJPaHd9kozoj1ZBZLgbWmyTo6CZ61CXG69nwuubUy1i9",
  "key2": "5CBPBFmVjaznU34a47kXQYzvMfBeURSQfjcTb3npUmpPmka8ku7hozwDNFhKSetPFo5pYifbFsZPu5tq3WFET5Pd",
  "key3": "3W1up2Lpj6vxw4MFhfXZZm1SZXjcnPaeeTxSYbGzAWWc6GuWJVA3n3bVHvEgozJDJwBHZ6ihvvdUmA8RyzoH2eW6",
  "key4": "Uttn8gA8WEgVWdGiKwwXGkkF4v5exhZKPPQyQRh4siiyfHUgXv129LLEKyHVX6zWFAdxLkmsafthizeMqTevt8p",
  "key5": "4FpnJtZm8Uza28TYNC5YscZ4jx6K3QZj7zNNW9GB68QsZFuPpRm98FZ7zPbuL64jVLGSYmbNHSX2x944woBNKb8z",
  "key6": "4sMpRUiFZ9VYc2T6ZypLeLZhYntPbYV4SK4JjZS4939aeSXiVh7xSrvGTdwUJbsULxNaS2gJYTNsiAP9aEc5J354",
  "key7": "56Luny6W1HqFvV3E3iF4cj24DsfhSa3oc3MY6U9AWuoqAwZv5qSUBxMt9NfYa5AMejtvcNkJhR2wUeui4g94EEBv",
  "key8": "5fNekr9nLPUKWuWGvKRgjodK5aKyiZL7zk9F9WCibMKf4kUiwBusfnoJNoyv43oo4j57SBtNbiyLs3QQwJBtVMV",
  "key9": "3KPF4EA7ifQDt51p1XfE9k45bvzMuEC3Nzi54vvzRcWPK9nCD9pkSPF8H3H3ecwW1BFDizoXtm1wZifRLPCXtcnA",
  "key10": "4jYBSPteY47g2DaWeMJDQJKFDeuY4KE5hiTPUe3LReyuenJ7t6cL6VpAKNFVkF9oVpwGctVzdWjRG9Z8N9ywJvH2",
  "key11": "39rSGUy7MRqZqMufejUc3wk1eSFdp4DFDwsAfjU1c2WZjLeqr5nox8gBjqU93iZhGigEKbaKau2suFzdsGGxXBBg",
  "key12": "5G6ALeogY1bpsa3jmaXBYEc7xJ4bG7KH5AUgcmyEdVx4DyQpAsioXztTp4vTsqrbAGCLxU4RzpiyAeLHNN4x6BRM",
  "key13": "3BY8wtFwubDxWcTCvsaj7eMora8NuRWXXVFjxkbrKyqMdn7dsthWDTuN4NDdxM34o3ctPz3LoREbfWEAQcwAmz5v",
  "key14": "tgWx3dCqEeyAu5zwUndfyBCN3o9VQnfLy9S7io9CdtUZXMfQdkvwoFUXDVm3LGSqtnTAqU12LXVLbctjPreWMej",
  "key15": "4P33ExxAFa3oLBkfakJFHpuWzi1EmmDhbXND4s5bAav89fpxhG4HjMhdWfEccNgQFtaZqEXTUUpZBPoYobFaAugK",
  "key16": "4QSJ4pBa7HE59R44wuLhpFzpSxyboiYCbTZn5WckM2Cc58Wanyw1jVBF1KJVP1J61yaNoWJKnmKJYLzTWnsou5Nn",
  "key17": "4WYrG3kLiETk3ys4NuvcjqDo46VbTsKP5Nx6DgNCdEJ9MZqE3QW3dvJXhzr6E3jQibA9kQvKi5d2exQTwUAkUgsU",
  "key18": "ZejLyesbv914xnFwmamyXmELEBbpgoVTEs4jqC3HVLknAcBVVSPG7RnNw9BkdQc4muiMEn5aLVmqeYX2bV3LmPJ",
  "key19": "5k2XDeP2PJgHoxhbbzV1MsBT67JpbXkGKtWJEN413aDhPQBm7nx556ZCHHRme1rss66BKnnBUkwmQ1PzZa4Kmbt8",
  "key20": "Q5H4wdxbXZnJLci9T56D4eH1WZNjCxDSE4g7UTyS5q8gsLHs6HqHLQxDLCH2SuQC2ub17btTerijBtdtPZL7W9d",
  "key21": "217SQMCdidNiw2H9QV1Hu9rR2cJYUdd4F8ANLSa563JhvZMMhCRSK9n7Co4HLvagix77T79ESMMrhwGiWkFTdTXt",
  "key22": "62Ku8PLA6u7wvLCW32JPABQDkGy5jCX295SHr5jTztS7tVwfy8mZquz3pUCTAVZyFCXPfwpYA4omHqMuL1FbtdzE",
  "key23": "2vxFVp8pzTpYaicDSqRzF1opzofA5wYW4UGESf1pD7tu7ghx8P85hKrRUsDVVdBBqJWFPDqWHnEJYh3bwsvm6TGJ",
  "key24": "BzDgumMS4o6fdqnaVBQKGpbjnN6VLGLQXPgivvWCq5MBiZ8sHRHsrR6zEhDcQwkZtREjcvb9yKVUmS741kBnTfx",
  "key25": "2oQobmNMLGJPBZUHuBjfTVwd1BCUzGvZioCRHa9ogpQbXK8zZRQ7gt6CTGQKy7Qk8RU7sYamRFigCqJkvxVKVoE3",
  "key26": "4zx3nGQ6A2R4jPMSB8WFfa8aPhx1WtdM2AxGv3ozcvjcuzrMb3iJ36N4Tq2fmcGjQUNbLRy9f7VyU3otLLMQBk55",
  "key27": "5Ry87zteppfWXZ9VTLFsZB77ZhfbSb147Uzm5kkYisbPr5W1T3B5fxcuVE7RMRe3SVWXfKxtT75sPBX6VfoPKZvX",
  "key28": "4Fs7khBwKocvB7chghy1eh8gT48rQba3BRxE8qMRNz8DTMXYcXHRYYhprMDuFf94HWFDNgSeJCGu1D1qMFcS9QQU",
  "key29": "4ZrSa4QiSbhY9TZ8aSPCZztJVDjqbdT9w8S6CzDjTqggYrekqbMqALG4kwk3vwMYwkYbB3vELxy7eBG6oAubF25V",
  "key30": "317eW5jk1Xsv2u5dTVoPHzHyUxvQ1pf41fc7fHQFNXW89vAh9zxH3CXzCydT2u7YozwvPXtbBoEU5cLU8gvZebUU",
  "key31": "4s53Yah9MCTwpsk5wtcos5WarCu4QZ7tVX3Vk5nCyXkw73x1cA8iU3wZSzjPtcP3kRYi38R2Zj39Dej831vgKe2M",
  "key32": "2YBfxe9h1gxM7JzuWK1W2srY2rmtMMmfPJod9qDB9EwJfBeEU7hySqYhBXg1NvcGk1ADeesThj2d5xRJuCNbv8ui",
  "key33": "3pabRGxvqWnHAmT1PFCxeejGwcEVKt8iDEynhXjG3CMkYdPjVyYexptLseQDJwx1EQEUwhJNpcWk1UP2cQEGN7yh",
  "key34": "p6JDhAAberY3nRZGceYL55BHKhMX9wRzUzaRt1VHAX5Db7UWqXoQQ1v3i6MCnKbEaUutMR1NHz9bnbBCCnjonf6",
  "key35": "2BynwKEFYCPV4ixFMmQbk6dXuKVjPxEPqB9sVzXHBfVcixJyuC8gdAkD58MDWKRg3NUNoW3wiWmfwLyZvWpR1khu",
  "key36": "4qvYPZFmGmeYevHJjbxhpfngFVW6aJLjJxWX3xsThg1y4w9HDEYrSr46y6KwU7j1VeosvU96Jf4YGNdfC17uYmUt",
  "key37": "2qRNNoVBYSdiHwfVY3wNaj8BqPPm6tQksbYvCMeid33975sDHpZh4yYSvMpBfKjVFVRav3ZTNY9Tjc5iV9QqL2AY",
  "key38": "RCjPPy9WNW6Ng86Ev5HhSpgSk3aJMCKUE3x3MyeciGVg2f6iLn7i3mayLfgdmyutpdQ3kEEFGbHUwunnu4h1nwq",
  "key39": "3LKkoyTveJ3U7f3hr8sU93dApRnvgqNpJpmqRBfPvMbzQhy3YDZjyDrKRmZ7xNNViAMbgiwv9TtN4XqTMz87mVvD",
  "key40": "3ukDBTXovYUUkxkaLT1ym4ese9Xbu6G9xMFTucaFHW7BBoPxgkvCqz7thNPRhvXVUjgs65khGSi2dnVKVoBswKV7",
  "key41": "5gXFUfQvEirfVXfezUCtjUduqvNbuy5kjkvJUzQtVyyg8Z1jSaXYd3daCrB9WK4QjKmFk8V2U8wHGp7kzrCEzjmJ"
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
