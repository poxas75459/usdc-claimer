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
    "22xZC6rPgUaw5oNP6K64fwhEvenFZMUUrzYV22hubqMG7CCGjiJBocQ2mTkS9h4WQSEgfJKTVrpn7Qzh4ghhG6bp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BLRKnxXCy1e6RWFhsj8cWLqy1jrRskQZ7t4stP8y35QNbs17DfZdUvqBZUXMUZ4R5mg9Edtw2YRUPV7MXFDW8Ea",
  "key1": "3qLvPfPYKzZ2TCckSFAY6PT99S9QEw7TDdgds6mkFGVvihMWXaMpUGUfwRHQxzSzFhAxFG5tBv7taDoEyMoGfvCb",
  "key2": "goZMnYafPEU1nMieJHLjXvqzvrtsrQxq5a6LQYkf5vhTu3GE7FEKbBmeNFzoayVdmfRybSxjCU8vPP5XrSwYXfH",
  "key3": "2unhooSQ4Upk6eNUoreEzCWcL4MtnydvBszcvJC5nTipuWw8ZbpAQQjzdGArrRbdECbJmbhfSY3ok1GKfZmczR3t",
  "key4": "5qynmmaKG5hqPF2SLSXcsgiYwiH8NCQza5pwAVJTpbrJWorvbF5iFbB17XKfch54bHTqgbbLSGmcsMCM3YqqCwdC",
  "key5": "KoVC1fVTtcZMspWUbYQg2Lk2jAH325a8eWG1syRkbMGTeNyk5ytr7tXpCnvaF7gPSFdRMKcBh7jWgQVFRSHe6fx",
  "key6": "3J1wxcWVuYLiHbDz9fyd3H6swZPq2Uhky8c5XBkaLYEy98vVraXjYeBHuGmpFXR2nrakrhKoMBv39kKt7PKMAY6Y",
  "key7": "2w6xDHq4XAT9TxvJNgi1rkeVHKytkGQNLDzEYQUcp2h6N8xJijtVw1kFAWH6N4ahEvZNZRwCF7A9rkQLv8UUx2PJ",
  "key8": "5XgrehcbR9cykgVzn3hpFCwmedVvCcm2A9rQXM6PvsXHrxXuGrVmdqMwRpekKrAnpD8TkokU9GhMaSBomMtLLwXv",
  "key9": "3pHkoBkghWDEztPKuM8Z6CCjuahqVhiVsi9VYK4Wqv6seCoj5h2gEiXexnvmWvFaHgHtBq3gd9a6x58ru7eyDn8p",
  "key10": "4WUfjvRUFfydb3yajT5HzXHU3TkQstJ9xZPFevripnPkbCAtek7n8vDaYsQCE2QS66Qs2cpPAqxC8BMzDPLhUzYR",
  "key11": "2eQyVUCsvnoc4H3UJ4wnUyZS17UKjfBm1FKYxsykgPV2A5aRs2sKhPy2z5uiB44LL3ZWHQVNeWnQFcp1Lyfsdvvz",
  "key12": "2vbEBLgU4zjp3N31L6MBh7T9fbvJuXRChEs3nLohUvkKvcZD9JWhMFJuN6gee9B8gWru85v4m5thoV8B8RZ9xrLy",
  "key13": "2pa2LWESWZiyP57QGx949U1w7jjzfL4LedjerwsH82DGkov1tqLxNeMpwuVExvnG4ao3VMhmmjP5TJvvj9tDNrQw",
  "key14": "4GCtCSxnMEkYb6MJw58a1wTGNsjuGh7p1WGUm5dBaqvG2SYhrkmNv4TjyuNNkRQrBBXYQehLeaP4e31h2c6JiU6u",
  "key15": "5WJoV2HNtEgYpWkiCv6K43DmUWWt5J72br9nzsfrh6MpJRRqULSD8wpB92dwhyxfo2RTmaH8thU4jQN7E83AhSWU",
  "key16": "FSARhCbs5daYarRbzKbZVJXa8ibCqoauLFh7WQMZc2NPbTDgkLCf6iTnPW2oZogEncGzfbqqv5438LduUCPJ63F",
  "key17": "2W8tpSeUQHhhV694kpKSfR6hsQt7hAaWxK3xHzw8DMrWD29VbE7xVburgtAQyGicf8163joqvXYkowq7xtSPezf5",
  "key18": "2qUhFhZph5P2ehpf9bB5m5WDyF3aQJQhH9PjSPio2LiHbnbHR4muWMdmXcL11dsG75hjedvCZYZEi11pcn3DDFDt",
  "key19": "4RC2Pw4TjAK8U9Z2LejpRMYKLAEhgj4ybAJkZoqaiHgPs4a2q48qz5kudbLKpnmiruVYQbg1xTvfmygqKALLPiYW",
  "key20": "53SrwDdyrgx6DZU3PNeN6VyuMZed7tFhWDiYymFUjFNLpt921gHzftc6GkzRr1eKnWkofeaCYAdwQqreLKQMxEZF",
  "key21": "3udj8q6KET9S8p3Z3M4DnVEXufaPySjBFfuz9QBu7TC8KEA9DHTxbuveJpkLZpSVZJvrZWnKnrMa7rqrDzQ5hEvs",
  "key22": "5mMT3ykoAnfhDJDEBw3hvthz6opdoNBcP1RWVJp6sQTV2GqP8jkajqyQx99VED4ipWz2CxDG4ppueGR35EJt2U7M",
  "key23": "42xEE9WnrkVU3HbXvTveW3oDV8aiUgjwBxb1bSJ87HnAn3PTECTkrzBJJAGQreF4RajMFefTR3B5CXiVnoYRxtNs",
  "key24": "5fMDdRcdDuGe9ccomD951cuqNTLwSXAUkMUH85iSYVyUrk5Mgv3Nd21PFA28okfqw1WwTGKagn46vFNSF89RnXfq",
  "key25": "4XLFa5g8ivqxdvaYXs6RNE4W3H1etmj37qK6GPMYW6KFH4WHMPwRNqYibEb4Ep4MfANyP3NDESbLhzMcjK6SJHap",
  "key26": "49h85RgP2pjHAxjmMxZfnip5n4WQanq8rL3fneSwf6T4RPEzR8zaFmxnEJkNe8rrporPW9VoEKsN6CyGkCZUvpXY",
  "key27": "4qGFctH9qJp7nzGWVUjK1MFxfsAnVr7YJdSfjhqZqoUoh2xKgo2iogM5YKVm4W16yDuuSA4GwEwuwV8yU5WSR4Zs",
  "key28": "3YoWSTsjbKa4thJev8tDfQ3Rh61wm1HMLHLnpcH5YZc3xU78zMdV9CuPFgLzL39UbULU9ND2jynttdU6di471Wvr",
  "key29": "3887yEm2d5LvENZSQp6VTBGUQ5rL3uSusEsEiWB5SWFtJdsX8VfrPtLbRzjFSJjRue48gZUMMJh77pPBxxFwtraL",
  "key30": "35Wayu5F8hYrr8wHuiEcF98tdbtVdm1MUW3bKkdTACkEdDcf6sT3832hEKx72iTdd8LLdBy8Q17LuMjNFYxDGNXF",
  "key31": "VFpuVED7nmvyFyEnungnmYH3F45WrfWpNQbYew2R2ckqCMvwwF7caepqTZ1D7iXWzqnMbpJGqbSy1Rt8hnL7Wyc",
  "key32": "33LuQ2whuTXvSC5HZBD4o9HjX6qfd7rdqHYe8Ghsa1FG7TobTYNAD7uaNzbKfDPr7yR3GVTcdMCtAY4PmtfeWXcd",
  "key33": "3b19pN5QPegvJ7tDMeLtiXmgMFYkZCybudomjbYdgu9rR6NqwxENdsWAuKzUNJvKW2DLs9pVispqy5Zdqs5KuuUm",
  "key34": "R5Zc49aVQJpAtNSZcZJeKAjB5aLVDGNUYA6Hf2zGqMx3KB7z17hFdbb8brYLNgvBijGL3dxu5rdhg4MS2BokJq7",
  "key35": "3Xf11CrA3FTGxC4TQuRA9u5ANoP6W8gwAy1N1TdWvPUn5YJYEUyaBv9WTC8ksPXFNLkgMhmq6yGwNk9JiQxFJvLS",
  "key36": "3wbFHeAxCL7jPQqopggnwqBCbMfZSEBysSQfDkdbLrMx7jKqrpLC5DmeUiKySdFd3mvCARSopiGGPh4aG7cjoa3L",
  "key37": "27MBpkAf2itLK1FkwTY4tinFsH4kriFWCtxf5swJ5TWYrJBbLUEyPmHkMYB1BqQnp12HaJwakw74xjiNuG4RFwbU"
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
