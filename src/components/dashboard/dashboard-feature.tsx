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
    "4cxSHmdpN3qy2Mo7VPAZKgnfiYE75NuMbYqHBoDCa1aa4tKnSPCbhzUn3rcpt36bz25xtxuLvzbvBSJ4y3izj3yz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TZjVLiNKnmzUjufaSnmh5PxGbt2VGxxCpEhfYM9ttypTiMjtRs95Bvy6Eu11XvNMSeq135RJgBzpxdg4eLvDxwM",
  "key1": "x5VFc5b2Tun8XrcGi774ZHnVfGTjMa93b7qfFaistknHejFHw3snGHW2wiDLUYU8v1VVb1mjYyVkwvPN2ijBEdX",
  "key2": "2upJw2NR126tcY3LjceCcpiRJC58kbkgjPNyr48Ae9maziDwmz8dcdMR8LvZPdPnrW7tedFiTKa9jdyFyq2bhbUu",
  "key3": "3E9Zfr2rSiLDmrN8U1u7qUUBg47XMzgegj1GmjE8W3bk1nLPs1cd2k13wHXPMKfCgwaodsokmii1EjaBZvEDQ15W",
  "key4": "3PcVV9vMoiThYfjFYrxnkbd44tjGkWrzjpfbWa1fUyzm7nzq42KhKr9mxkjBjzgzswkgwZB9L1WCR9TFNEpvhwd2",
  "key5": "zsyp64wMztU2bFs8y8bNTTDwEEhsUQq3ir1XuPui2eUoEFQ2zNc4XkJ1isbPcyYUc1Exi3gteLCEJxExLhjmKEr",
  "key6": "2Pb4wRuZRBvRShEs8DiNiiyc6pEn9g2PfpJnjzDcy6BHQBhBq5rkyFgqyLTWdHv8bC5tCCqoSn1757dFMUoiqtVJ",
  "key7": "5tvn5gB1CBvC4ZB2Xux8MTdpUnqZ3wHvTZYanpYRerKBx5aUwNM36Y3TdNTVu3KGxxg6zAi7bzW1svHouksxCDEJ",
  "key8": "2wmNoFQpTYwyTKfHw6L6KfXVwNfgnjCEPsaaHiw8pRxRV81GdPNPbLHihT6r6sTttQfpeBACxKWgCwbHWijTX5CN",
  "key9": "3fL12F6o8PubJakX7FwezEZmDRHQPf1JnqRwH25wTKA5mSjsxkPUWF3ucwnarS2YhqVjxwZhSCMhfF17qyWvEzJh",
  "key10": "3HPJsso9stNQVzAiWXFAUs6BxhyxiEJxCc8ArxtHXwivR6DPJN2oCfnGT3u32KUYDoW1rALYDpcKqisGuP6AFz1G",
  "key11": "4UT7DwSh6Nivs7jfvxC3hfk14b1BgpgbEgnr1K43FhDJqrkVtVLBpMhaFXZDwLtzabtTQn18K1i9mbUBiYQDT2KB",
  "key12": "yHDFUsFhheFpKdZFG8zRERpA5EFSkuUSJEzg19VNdffz4Lpd52ZkbxyWT7fSXFjfbD6BHa5RjW2nWeVbhVKrfPo",
  "key13": "4tXaMQ5FLi1jaGsUuM86piuMrEg8LjhspBB5qE9VT2tvvHjvVroAwdfZgdTshU24pudQMXZHwP6mbYKm2wZX8RDn",
  "key14": "3bF5rFRBwceLfjREdQ7m431BxSomMLAKcExL8wTsnv1sEaDwqtmhFa3vmKYDQyAU9uA2vFcQbX9ByhXyr91FSQwX",
  "key15": "5CH8TXDLjRtsUUDBpZj8vh2Xc6sQ5zZi9Sdx4hbGjatePFw7ZumZ4bAoJ1QC8gKDmG5Ysp1Jo7Q4f4aQVTiVwFiQ",
  "key16": "iHMixb3fC7scitd4tuewTm56WdkLvsmYk9WnYjNJF1B6ikhPcsv7uHj16syGo9kCV3xp9kfCNvZHh5regY1Gx6v",
  "key17": "5fi6saiZkXgJyUZDGpYT76nNfYV5Qr3qi4M76TcEcHUW1mA4Yczfo69RMRbUs4gyJHEE7zwxtJF1XTyo492qghXQ",
  "key18": "4bZocbpnXC4dXpTViAZJw5rjJ6Ljk4pVXqhQLtQpR1Ke3JU2Wusx7KruyLRAi9HrmhzyZ1eiwLJ46C8UCSm9EhNv",
  "key19": "hNywV3hA76KyKa7stkTd1hNjN58886GLkSC2URfEurM5qaqUdYNx5sj2g3t5oGtZEMHUuXJRCpQSzM7n8rPn2me",
  "key20": "36cf81uWaAoN1N2Z4CgAwmErvbXkerXNZ5Lc4FLuijrQkW19MRR4FitBxiGbGMascgcvXoBx2UV3eUKs3asJknr6",
  "key21": "5XGNHbgSKJasKyNAQVVrVotXqWYiJPjYcmUjodQpuh9QXicQDZgRPcP9dmMvFf5KmLwSAZSXxqLM3HrJBjFXkWjp",
  "key22": "5oq5krzTLUoycr6kbS7fzNreTzpm5nGJ1A1A1BWsXDsBBFofiMcZfCN8PeqTNR987KWMzrVo4LYmBUMxm9cD5VvP",
  "key23": "5oS6c56vFJQ4o6dRdLbvU1ukkoeYdb4TXxrR79GHe5pWHFiN2UwGEBv7F2qZj8p3gWeDmqGFBrD7MansWMmBerkL",
  "key24": "4xRU3FdT3rXacqHZqQgzEUm6EFJE83UDdo1Mc4TDZNL4hwUbtecAchRgFyZwLKVtwLrfS2NbDgrcYyMzvMsAVHbS",
  "key25": "2KPAPA1a7BjQMCLsW6vfrXAGeFLTyLhGHukoCgUKskQkR1CNdwZihqibFN4bDoH1hrnvUaPe2QbKvaDsVinJtW6W",
  "key26": "2t8wJixpsMkGhHTJnnmRnSzabdfRFjQDYScULsiCqygHYvi3pS5MtH75D3jgXgrnKsNEErYMbqCwdf47szcPs24J",
  "key27": "55kBk51vwWu6jm4aUSN5M5RFHaLWCEuSCoNY86ZYUG77ZfbXRqLTzJe3xcJTVmaqXrZaxNvMXJ5o8Zg1oRdBxAC4",
  "key28": "4kwV5j8YLta2hQNXgnQUzWVymBk87TKKwRDKGn9hcmMEApMptSMQihcrHuL8cXQYaiapxrCVa3dzJpDZcnukyrRC",
  "key29": "43KAGd9ZVk4K4NaZioyiNZUwjt5yXvDiUbCFW7uVGR6eBXSDWWS822LTKRjmECo7KPSfbEEvetKuKujeGDTyaK9D",
  "key30": "5WecRvGjgdVLj1rxCziXDeY1o2hgdgTYgQWgiYwRsSBU6pH2Bc4vdQFxKDKdJGu1obfdWrG5e6mwg21PsW7E9nxY",
  "key31": "58Nmdoq32uZKZ158XNto2Qp2KiMLn2EjBDFHn1rWHdRHH3beFc47N3YRfxAx7qNxtPPougD61B9Fed3ioqVKhWpn",
  "key32": "3FjveCqjDRgR3knLFji2Przs6xJ5S28Yz6qEefpuoaesQ2BSsspRtJBEPgRougMWHhWfRpAF2xcavMWQEZWxzMT4",
  "key33": "4fGCc95Y1B5Fg1Fz1vUD26NPXgwHLBAaA1wTG6Jjh3RmJxxZWHXhxv3AUsZVEHHfTze2pLkgPxNMEC91cuKoatRr",
  "key34": "4eMYSEYVNEiiPBzGNEexgeawxTrKg9GHyVw2fuePwMxTnEYaTCppDDJzS39UVSFW1EAEiWixTGQeQvCd7kdeiMHA",
  "key35": "5xKZSKrGsS84JZusXh1SqqMx8yeYE92XwbUnuKgj5BQ5uZ9RnKNsaEFoGTiQAUcDQqGRRCDVNfHHC7FvSNJFK33A",
  "key36": "5qfcWHXyJLJ5mDChnxSU5KDuJk3unady4pww8QYvnmQHmZ9Qiku19bQD6BD3BQ7cNnAbJNH1PsPeQoTkWuCRgRaY",
  "key37": "3ktfco3EYaHU1VzLv57stAgy5jiB2qhCsm41GdpiprydARiiTWyEq98BDMKqPfUggxZy2ZuJYGPFwzuQubogcEVo",
  "key38": "4Jg8TVqCXwtuB9XaMrisG693KK9NtxRrZvrubvpusxtw1VcaeyfgkYD9nXfMKo2iRFrqsfkgxpVMRDwvd2ftP2US",
  "key39": "4ZRbENNABmJVsiHaiFLNW7NmUpQ18Kee4podzw2oGg8aRpSdw6AU6BQ5dYMChh1uFQ3m1EqN2npkTgmW2cWP46Ls",
  "key40": "2qwRryUHw6MjuWhry3Y5TfDfrfnFBRBV8Ym1eWkCp123vd8Hzizqiq9RjoJCQFmp3YxiTDcPh7pQEPSGTuC76xWG",
  "key41": "3fG8Mh21SiyogTQVvLUoxJJci6nkGkAQFgYjy9diDiTidpie9CNborRazoXaLBD1TJ8nwG9nSPWp3MKVoyZpoi25"
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
