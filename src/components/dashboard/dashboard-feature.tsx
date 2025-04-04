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
    "4BM3RPY6TxZu4Y5UeJfScr8Ex4aT1ZVXExskwK7BJiZ2GuC9MjUVJSroXUemt1o95vXH7bFei7RaWyMqwnLYTJfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42dQFZY2USnKt9S2XRQPUM1KATUPUdRhRcUjzs9RYeUinxWGVLBrGu1aiat5E13vUYfT3Er9fkErehRnrmNk3LJC",
  "key1": "5QMzToGwtL4eyAHgdiPm38kqbqYACGMfBEZJKsX1ULkT2Y1bbxt7H1UWPLwN9nB9fYQPoMDS4cD34h6rmuekgrfg",
  "key2": "2usdDn4Jtsn2NxcD7hMH4Eo6adERa5qC4JYfrE7y3uhrTrMBcbry9ADNmj9iG4Y1EdKt8YBEWLj4eWVmdVkrFGfQ",
  "key3": "3kGjDYb2y2g9bX9Se1gySxyA15wTCdvS7dUcE5KvLnij8ubHQrwbtVF8LWeGhoSKRFeuBfZw1sBk8nFd6MmB7zMz",
  "key4": "2v9wrNzcNC1RRtfoTXryv6XbZTxQdGH9Y6yeUhfY7uRKUrA4JDVqNeGyghoGMP8NKX5sZESJLqFj8PhVVsNcoWX7",
  "key5": "BVNTnvbf6q4YCxABBF8JmeX412KDAJrSv4cN3vezuEMZu1gw95XzoYM2ULChpoYhaCmBeHxnSwfPwVnuemvktqf",
  "key6": "RamtXhJ5wx5sKjD3uoTvkxtTc9xSnTyYwrV77MeZKNHtwYb2WHXdUHPC4sEiYQCw6ip7Btoycfm6L6A67k84rkP",
  "key7": "4wLfye8xNHeccPYM26mVf5kfAT7mRFB2q5rbMrD7MgJgcDe5eF6ttASa59LdobSPjQYY231a6Rz4jtQb5Aqq96Aw",
  "key8": "2b7TUN3UNH8RFanKhtP4b2pQeQwogCDHqSLPyVmaigCy4qv9aRXAgQxXJpjM1gh7Y9uWqRNQuNnYLp5bEHfH78r4",
  "key9": "3ShEXAANUC67aAExh19MW8CtcEw8MpPrNQuniz3M6EkSqZtDwTwY3WxnXy8oJ7XD5c2oX9CnMKLkjLEEqsbhd2JH",
  "key10": "3zyhbC4NFtYsw3nWUC3XchA7cNY63tLSaouvch6kJpoQ7zYJSiw6br7Q3Q5xnLdkg6emAssULNopuYxKYG1G1rMn",
  "key11": "n2h5gnefYz9rjzHCFWFucne8Ts25AS9a5uxDdzLTw5ia1puWBKjSypiQHGT391FQntqAQg2p4naUB6SxSyJGJyd",
  "key12": "31rSh2FRJA6u6hSLJgBB3XCtqNrKrv39NXLNWHodBiDTgfqDMLm5wouKt5n56p8FCb6iA1PQkAkQxWq9WJrDrB1z",
  "key13": "2CUt4Y1U8SXHSmJN2aKfkea8ZVCorXHmr2WdXvugKyg3aJUcYFZJ3UcaSWd1qVupyMwtnztGKp38rQyi4UDMaVSW",
  "key14": "5w5YZCBsHdJyPrmswrKU5eDcCh4oCtnsEDF1vjcqtVQit8Nodts3uPCvZcNej4hUvn3jeR8KeuNcdb1z4SrvfWEj",
  "key15": "4MsVZC7jRvgmmj9YiaRsRbcFKzZG8yRhsMFV6grcnx6HsdCSZmACb321KrGeZTbFE7vLfUncLjW3Y1ag7LPAmTqQ",
  "key16": "kF3trkDieW5N4S3nGxLTVB1E9tUS8JZcAbXBNUn1QvVHVA8RNnkQt73tv8b3tWMKzRfHJUkyaAJUDYUJ1kFBRaj",
  "key17": "53UGe5H3nwmDtZx7EVBVJLAy4NMebjzbmWQxjjzJw95B89wSoHhcCJvu4snr1ajs2TksgL4x5STsj6UESZTf3mPq",
  "key18": "2pFe2PHWz9YjTG1vj9TbcUGEvxo7M12tKDW8HzRxjH86qNb59zpBpiyP17Ln37yWRh7dCcNQ5mthmYSGMuEcsb7p",
  "key19": "2HjdDFeMWN3ExPmB1QMX21n8phbGUbtbNiSSzzestNThoBNz3cnwThT7Aq1dCvGvSVb9hULUq5tY2MRon83JmJk1",
  "key20": "2itLzbioyDD95kWKLqBq4uLaALTN9emZ8HfHxr7BAikgKUiHdq9RQrkYSipa1aCnATbDp2GT14xHyetp5v39khqE",
  "key21": "5k3X2JjRLLy5gEecyFwdjCQMWfcukRXHe3fpbyZiPC2Uu1SJFQXKgCAdLzwTWyG2bH257Jr9xtFMpnKuaQoDdw4P",
  "key22": "z7uGxdCMMm7qMfjE75NLtp6VUcjom9aL5hQHhwn3fE2LKjkA8cJcv95wQbgR6Npvzc8MP9HZDpDDafsJndKNYYk",
  "key23": "2wpwixKBnw6HjR62rS1FQ6oDfhTwvkwfpcebzfyTWFha18B7iPmfAvGgKbzZnRbEkJC4VUvdxbDjR1Bq2Bg1PDqe",
  "key24": "4eWRvSWygqK2bUm3FMoEbfJBt3NZK41xMHGDGvSeRwFb9sGUWnRFVB47s2gwM22BNHfQqWSbuZeKbPyEx1cVercC",
  "key25": "3qdVuGYuAtr8RR5gsjYpgyp9jDUai51FVTouDcXmahtTVCCdHnRjTdixCx4noWgPyYtC57qVWP9gWHqGbhe6pkB5",
  "key26": "Xz5srwEUpMXH5ftcvAmRsgwkVfbX6Scpyoa16o6ANtshWZh8fwTpUYprWoTLcsfdUyPKjBoYXx9gKR159F4ii6i",
  "key27": "Fg8b28ThLU9zBYUZYjX32Yf5VEndZSGzAfQ4zfyysoVN6gKGfK4jzKLrDCfWveAqF5PHBBBjRwdBEPkTNkj63tS",
  "key28": "5p8jRhJb7vXTd2GY8HBDX2AqZqWRBtuABJHEno87dJp8w88neTCGWUA8kxUu2XdoYj6hrhEnK62d3edMm9etewp",
  "key29": "oSr1gZaDSCBkdMKvF1wK43ZEDdeGUMAk9fVVTFMzQKgc4M6mD5qAR4rhdy5gr8gmXCR4Cmz2UNjmM2Vw3YQNj3p",
  "key30": "zC1th696wqbVqGU4yiNg2viP16wkyrE3NyuPFFAEBxhWJKypVHj15jVEeG1WTRJ6UChJuoGc96VUbU4E2vZMuos",
  "key31": "posxeTNgVbsy7mXFfqV2U44ohktfrp5v8i4X6FbdCoWDJjFJ53PnQ93oJzB5e13h1eafpzRTnvmeKHassHekvz8",
  "key32": "ZqR4FsNjpf56n4hztPhm6UMzetUYv5SmDtfKi2WHZ7ESniVuB2pyuw2dGpEXLXxECTHuWSzJ7xooKR8Sjcoz6mg",
  "key33": "TH6drhUfjr7WJWnN91hh5BVZc97wbjtPEHMMh4JPEUA6FoaHfGKhoptHdf6L2AW4yKGnkmLfngY2a597zSCjCs2",
  "key34": "56vFX3i896ZkbiNGSvwRHUzKaKkuLAhzhYo87YXH4XwfxcLtSxUmD7i6Pq4oz7scW3xygVACsudrC7bRfAoufpHb",
  "key35": "MxN4ptKnSHp3JPVgeBZyAtkVs6eiQRzw8fRW4qvQiLe771k9tJgcoBMeVxvsD7ynp42KYne2nMQ9f5bKEx8TKgH",
  "key36": "5Jigo7gHQvvPeNLTjQHQYs7rCDxPEGBQExQMp5YcuW82BPfLYXAG8qbRMDfnfm6naqeCCY7RYfs8cTEQ5fUV7kb2",
  "key37": "gaWPER54Q5fSqSy8YsPFsavTPmMdAPboDbyc9V1XKfku1fRyDnCQP7fG9S9PLzn37exGbRqEDgh7qVrjX5VjoQ1",
  "key38": "2QyLFm28L2BtHNoZmRDY1Ai65gMzbjLoN96oXBHVh7jggarowonixNFednuHMVnPTnM3zM2K6YCDaibKKHB8Tapg",
  "key39": "zBvVE8h1CtPvqHHhLStkcudfJt7nyGmqSpKZ9q64XNfVDCh2N3hHgyFbEvvPcM7Qbg2jfXQBanT4331qKJLMsVE",
  "key40": "4bwbcpH8CgWe57oRj9UxByfuhEXJJg2u7Q5nnZ1TEVwa4ECx6pknLkuGxpiRuAi7hWSAGJdgS1PKcar1JoCzn4Dt",
  "key41": "2XcokpsinMoBhueSpcew1NEJuG6rgThyaoAKRdU7EcyoJMdiYFVg2cznzAJqBFyu8B67E5hB95iYtFiUHxVMt8PM",
  "key42": "5nAo8MbfStGjEubK5mL4TuALTNmYbQBSvsGQsa9UKhK2x7iP4vqa9WfmnPaST9NqTkEUGGoGjVkfMD8XGyDjpWpH",
  "key43": "Q7kp93DZqS4g5LG1SyWJif7qGrfh4rAFFVUhr6pX7GWfvhPafgV3CgEFcmyXPjJz8DKtchHa5c1SpU7zni1acYT",
  "key44": "3kDJnHPrPo2UUBf2taKxQnLHQUnKBZ3NENX9qUQy1Utcds3g4bRXGHYi7YKi377TDDd9nVWW7ssyMT8xrnuivmqa",
  "key45": "5UF45NAkZcFjCV2uPzyNxCLbrwVpy1YLMAKRtgh8sJkJbJaQRJnwbzF4KmZ8kT2iS87SnqadJg24vgHgq8v3vrZv",
  "key46": "fekpfViX4PQsSDSH2AJMbwbzZpa539ZhDznPAbaPWdwhC8zV2KNaciMMFWjcBvMWkyHjUExQp3eS6BvneDtd1m5",
  "key47": "2N1YomEqQCV7NVUk7FH2JACrmMGr8HmaiY4X3isgW5FVee7f9sfc8qok8NnWEAyCDxhqw93ZEAz5RitTMmmFStKP",
  "key48": "62WeuvDhdz2ZQck8HqzFB1bLZ7o3fymdYogMvgXdj5qh4EVx7jDG18owR2xqC1UAXWa76SaYmMGCw55FEC7bJw8B"
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
