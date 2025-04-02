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
    "5LfsjFfzJSWwSYUTvAmXXZ417ao2aGqbJrXFeW3puCkKjAY6bHoXkCSkZHAn6yjkMEDnj2dPw8Yv9qFn295dNvpm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nUWVu3zP9ijjGQQSQfUnpvF4i1b91xXntTV4ARYD6NxYo4BJ1dNKe8zukhBwxJRFe4Fvu6vM584eTRLRGBRGTja",
  "key1": "5mu72ZuDmBPwnt1vukJRh7UtXSGyteL1p4WDXx3uiFv8JoGQQcXMPa2nxGQysxDegZQW911QrVo57HjAoc5Dtsut",
  "key2": "2jAALrVGFJUw7vemEfJ7KuL578vTuUSFxoKThFiAXxSqb8LkKHCx3F42SGwqk1tuyAMwfzTWTVoNVxzrPy94cAJH",
  "key3": "5sPF4jcaZkyeAuQRLC7m7abNjg93MK5mX3HSTcCxv35eXTFTz7chWg5acfnBR8JufStgzBLj7L2UUy3VjPip4fM5",
  "key4": "2A1tUqbbWfd68in3F9U4WuFXeQn9UVoi5JQ2Gp53ZvaVaStV2JbofKeFjiWxmT5ijspTL7NLg3h6Jen7RS1biLWG",
  "key5": "2ZVdSacpxBkxS1QmPdCeatwuPvWQM24xfUuvv2gauZXL2LS4SWdrVDwvxinKYm2p4pjdLRHCzNrnh7aTLZCN6Bfw",
  "key6": "svw76wwXgTQo73yVH1bKrXkn1gbqC1XuMMyxYikqijEJrHCdc79f2GjLnDKKsBFK4hGsSbc3DUJ4oLSWTED1gm2",
  "key7": "4ry6sYrSUXqVwQczjx4REiFqe1xcpPCuWez5jLFuVrEKybW678iAnxJN5XEbEncQAxied7awdZpQ3QQ4DjjuCxsw",
  "key8": "5AXvBVoDq87d2n7ixQiP5jvfg8tbqrGum4W1TgqSBKJS2RNsnKEanH6YnKAgjeJptbA8HLggmAHPJkSrbqKEhMTb",
  "key9": "2B8PT9xvkcxrCBFVynf6CuZvSabT5qzjv3kFjEAYpwUHTShTaLUUKGmkw4FghGqvihCYa5DmvLWhN8u7KNLz3wBB",
  "key10": "4SfyT1AjX5QSwsMBGexRzXg7o5n2r6AEBQ85UP7d3xnDhvC5KgWAGjyi1rRgMgBcwMBCN7H5Kj85XUdEJFRDMFXN",
  "key11": "4T5GBdddPgqq8LP6zvhter8etdrNS8WMJNFGt8UT8SAjMvY39oWi51eknG7chSgZBd57L1d9LZsF9D5bA7Hyk6qZ",
  "key12": "2WH6Xz3QyGRtvABzicCXoWshB2xaxsgkoG1aBhFbSUSuVej9aZXNETV27XhK3im6w3cs3oWfpYjKuVoGFftwJf1P",
  "key13": "EYHRtRvqEqxRuA25WWtfy2durZrYVqLh9RKgWX8c3Henu57jAraqWAZEQz8JDaixWwNijuLqiLrbd4r79h4M9DJ",
  "key14": "5skEJSvpLysvwc1x4FTdn6BDsnN8Vd1v5bURqupMGRfzoFuGMk6Wbhdv8w5DxrDQLVUMpJszXtAqp6GJrPMeNsAm",
  "key15": "2RiiP3RjeuTFecjX8B2m6YgFyL6L9dyYhPBES7VUM8mVJztrdVQdfkYRFsAXEo864Y6Dhe85dC9U2RddeS1PuzBR",
  "key16": "478Sibd78xjz3FgoFPh8amtHUL3NGjjUsCy2W5gtBVBoTzL2m6LaHYH8nHTGNo8pfszSpgKr2jZCSKgoJgqLuKz",
  "key17": "4F1auwiLNWp5iD1tTFg5vhy1h7VCV3hWzdA1r6AuaZ8h47ZM7WfXzfPcG5LAoN11gG28hqPeBNLMV783ErZ1Uu5S",
  "key18": "VVzuwPtaBaLsGcDrvupu2dimQUn3bUfncLepEDvfivV69qhJbS5Kwtc8QnZFSpDRCwhmjbG4qzxNpV7Z8vmwrU9",
  "key19": "HcVvHbgXf3ou4iHeqCGZe4JwE2huM8PSmxGJcK7trJbRfawDZJCfEHKK3UqtnznMMvGuGbsGK848LNqUCJ17TUQ",
  "key20": "41RhSjMyQiZLvYrxzBHXNn9nkdgJnLD3Be6sqjd8oLx1nTTFzeeRefFyEUjQpTYtX6fvXHvuc5dGH1zm3yGSEM2H",
  "key21": "MHRrPaMey3c2N5dGtf5CbyFP5p6LZoqys7QrDZMzae5BQSzHjoZgBLSxj7hRuxPNMw9hTVpkBpFC4y5fnWyCdZP",
  "key22": "2YTujx8kDxsH4FtoL2y7bvhdsJnWjWSp3HzmCgnE4shQVcjmuhJyBijFYdqnm9pwTyyGvE16pqx7sBqFL9yqZ4WW",
  "key23": "aBBXH75usMsmRAMtT4VsyAq1PNE4ziZYkeSsqh6s2NZphiaiPvGYFQyXJycyXFsYt222RHG7abbCAGeuWbDHMpH",
  "key24": "59B1gqYHEoLLTUrJkZxoyDcSjrfbWhVNvqo3U8zS9CczqLq6MWD8jVNC1LJKuL8yZd4m1H3JEHFAmah6tKwiVPNp",
  "key25": "2rGiQHTGMtq3D6Bn1N852STFkiQf2QqpY7ShCgcqYVJgZqfgyyocKdoWje33vjmRKJ1pqfRaseJSRPr66rRh275q",
  "key26": "4xHLpTXAvw2c1NWHGg2t4uNx5b9p2AVhaCPaxPGFsge3je8mQLtNeQASdQnkF6d4FV4cKgrYkH8cjnxbM5PhX9E5",
  "key27": "243PqoLKHsY6fjCNwh6t4dXTKxJE3R9HQ9dRWrEB7PwDvB2fSmJ8gtg7EuCzbwatsdsKc9X6byjcPEtR2uzwVcRp",
  "key28": "4XitZxxm4KcizhdhtNtWcFQSbi12R6DM8F4DaqrS133YL7hz9hfW4tuHztNTiZ5hVF8XzGtSm6PwoVUhca5jzCyh",
  "key29": "5M4QxVPEiAKRSN8P9DAA3jXAo3sEGjoYH3VsD275ew41iMioCAAfMRr1y4SfPoDYe6kJhJwShcW6tET82VamjkRM",
  "key30": "kFE82sBtPZNzGuMzeXqbPfDXBGngEtH1531x2R3AhRZC4jYmGbZ2ySxvAUXbCcqoiJ3mXKvfuPycLixLHrjaYV9",
  "key31": "54Ykof17CcQwd6N578q2DfTpZXMjzB5QcnQ9NADkAaDmoU4QjBjdvdgXqM7qY7Q7GFdQcWJ6UNfVN5P3dufwHPP4",
  "key32": "5G4HwJz2rfiJn2RNha6Qnu8axV3pv7k84Ne9J3ReDX5eWpy8neTGTsYXgEniHrNaMqjr6DjCVy3SLowEZ9Pp38eR",
  "key33": "3e3RanvFbU7miXXCZWr8tynHrAGbL1XgmaknY2hBvAxywhwHrhcTt75GpquZ2bG15rsdtfqL8BfGjo2BzJXpKinE"
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
