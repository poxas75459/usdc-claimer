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
    "29kn4k1qENq4S54hdiQJBqcWR4yzDQ8H8JipaZhA2nZtTtBFoGSR8dx4ptyqkQWnZs3WfRttrXkutqmE2iXCxJFj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U8iBqS4ePoi926Gz2svN9bHPrkJj1aomuTERmRu8FJWvwjUWeKhdjF1PVh5cxkVwEfENC3X7DNuLyQ3zJUNhivm",
  "key1": "2HQtTUK17SiN2afy3xAUeT5EM3bTR3Qc1t4zaL11D3Gicgqp1JtheZNUyHDKj4R5TDZ9tunMJmYbS7DKy35eZTYA",
  "key2": "3RPDff5istPTUCFGaeyAwtzdgrpoJHzwHhnT45zKCPyZA9DrQ7QZaLoDEMZzRzuYHBAKHTZQHEdtfvs1rccrGp6t",
  "key3": "4JqXUoFGRKf8S1v3XrTrw6yrYVVEQNnvyB7Byc6VjXz7eHkPB2njB3n2oZCccoafWMMWPfm3kPaPaCL7mz5VUdV9",
  "key4": "2RPQK9cs6zE2h4yrYAoVWARA98REmMhtK4Gt2AHZpPp3E5nwg349hCa2m8wGErcoWuTrLuvxrMUYMpsCKGQhmPfR",
  "key5": "47quAdAWt2RVkUySvhFzXocH9wut5Ag2GEDrmQVBeponEis8Kt2pKBqzrn2tDiy7ETsUuStkfpiUo6aMfCqQX6uF",
  "key6": "WqCHz2DAogJb5Nz2Y6H83RqtonvrcZ2ESqkjwmzzRYx4a7Eob61RNcZw2giYH3Lmjr9cV2XfYFLYW438SJCM9fr",
  "key7": "2chV1At941XeEY8HU4m8zFJnw5FAv4oQfdDhVxuQwVtevE2WxjjaztZ9w6g3Rfmk4J3StBD5QjVmwhopuJJYLbyi",
  "key8": "5BNxZRx2PPGQfUhUgWe6uSBat8ynTz7HXfRRHLvGTvkForBwehyzw45fNyCcMX6MwMcVwZCDAiuLhWV2KQVrvVJJ",
  "key9": "3uTj412nVPFrKqtbyqBmPE5RLhsfx3jDezVzGGLZfRzXY3d6tmytaJ4KEc5rur2JE5TM22sFxSquj5SxFAVQfSAi",
  "key10": "22QAGLoTU2Ty9fM67tzMaC14xJ2H9LBWEYw9PgWUJhTfJKrvUCskfG77aN1coMFsWKmZXzMamEhw26GD6eG6TxYy",
  "key11": "2ySwYW8GY612b1rG8EtV6Ddqqjj39p4t19p7kBhjoevhkgpkztSZXd9jkhNQMd5Wpuisk2LSCvFP28MobiGMuARP",
  "key12": "2v2hVDCMsLsvg3t4qmpSYRVjix8HVfxSuqhmjuNWnWfo3VdMeUrDFtVxVriCxPfopN64WgHEyykuAE9F69P5s6CG",
  "key13": "5FJ7YyqRY62zuLPANDrfWm8rXmMtveN19QoTA7um1kGxsrKPfGwsgve2c9xLFLoSj9ZjLHJZpmjzAY25KKN1mxsq",
  "key14": "3Hx4pU283LrXSWC3fik71BJozEMe8MziWadJsLzTovnc23opyXfvrkNHgyAeyhvwy2ZFVL6Y8q1QK1MYZ4253odZ",
  "key15": "5KhEAGUuA9HvbzYTnstTF9LuWhnymuzkeZqmHjULZDktTvAD43GnS5ADfaMxMXv659zyMKkZS7xeqWiYb21dX4Ak",
  "key16": "2ZTRvCrgA1T4461EtM6XDPFmrXtA9p5p366D5qmdioNZTuXK2m91AhoirknbtuF2AS6h9JhKToqioFCDLzWCB8io",
  "key17": "46KCC6RSfRjFKiqBJUHuQhsC7tBhB6q5d8EWE9ESCrjbC6HjfkKQVxqWJk6Bt4HR5j3464WSGNFhxeTSyHBaLnAd",
  "key18": "u8JHWSKQpPYXLcadUfJ1ARHooT6La31ox2iAGda8SJ2fLrufyggY1aDeqC13fsrBwgEYQPXwp9j7iMcFwdfh2zS",
  "key19": "42bCQxJXZWokJ2aBZ9kZ7oxV8HFuKY7sqeiWY7jNff4vARum4sbYHiSppYUKhC7DP7NMrundqMGLvvD5vSAC8Mvg",
  "key20": "St3K9TfgNmaqVn4qPEuQ8N9HTn3UECKzVhuNwFZ5wTbmH6g6v3E6LfuhcR3ixvNMtFttrzqTSdpAigtNzPGovrK",
  "key21": "3Seazk2qBWFwC8A9n8xtiXeJD9U9dqQeiXdEi6zYjmifmpyxbEkJHu13g6BiVCW3Ahvhs9ct5pzgEocJR2M2YoCK",
  "key22": "543D1wYCjoTvP4oGpUJ7Kjo91fp5f5VPZuTCyCUA5C7EsbHL51PtwtpknXmU1Yb6X6fNuy95jDYfT6qEnippoLjx",
  "key23": "XXDLgLzHaC4crzckaBUq8mGVFGpmtgC5UWQKAbBt1ctWNZoxzLapFbGkGuc4U7ahZ66axqZpB26Q4yFFaUxeP18",
  "key24": "ExRk91GLDdfmiY2MJjGNWWVdFo1KsaGXqXGScrDjGKgduyy1ywoRBvWX11CCzKuojEJXVZuFknYAoctXe6opm41",
  "key25": "3YjiQKigXVSG1qp4eJxvBGYMJz2JeMTsiBgebgjWw1xzZVrwcPeXxZAAtWRwuD1sGR5Jx62gYfKQTvMdfCS3Cdoy",
  "key26": "4UgaxDDJw8e73XQH4yuJQhYNYTf3jB3WG1r2hrqz6vg3fSnX4J4ANAvw5hF6e6NQncimZky1vDmDk65r3WjkPLMY",
  "key27": "5185Wapuz6owpBfXm1G6ybQBiybq9Ea3BKHswx9ByQGqjDZuYprnXawP4dHbEgMD9ttjxttqhDFeZ4qhS11Czw2",
  "key28": "3Ffk2hTa7SwvELhDtoxH4F9ANQRiQSNhKVYzpk43brMmo5XmF25yifFioxZSytBdAMVhwX42ABC1zioZdoEy1Qd4",
  "key29": "4jRaxpYa2DD1Abgimhyf1zcCUvnnDWsKNiuW6D23nYS77Cfe9a3y9F8ych3iXhcDHBkGYGTUv5mSeXewJBa3hLGC",
  "key30": "5xYR4uixCZ3YUXpwCreQ8eUXWTmQcspMgjEWwWTu63EFbPV3HLioq1zcDPFLUvKa9oBWq7n85RBYKTqc45WpSF1M",
  "key31": "4jhX5sWECA8TSddiPH5mtmgwXtxPqe8iRQgHUWKvA7dxaVhpGiWgVcvw2zmKmQ64oSGpcqFN4aQ3Yfc9EXRWyvTY",
  "key32": "zMuDufsTGgmDPQMZFirw9waohG1qdm8x6E385oNqMCtAo4J1ACn6q4AavZx3QrERaJtHhtRCLNPgZAoAezbJkf6",
  "key33": "YWUz3UWvE2MRS695iGdFvW58brQjdHK8ybXw6qJSNDNzRH47WciZdssHsHcyMiZA8Rjg1FHRBXrbLt4usKnqiqa",
  "key34": "fN5U2H1xuyjfXNARiLkgypMncBWBpy2jR8EY4ijKZ6zE74zhvJzAK9Fmi3CfQWPe36SVkGcRA5hi7XeskLGj27B",
  "key35": "3NYt7WWDGX3p2ja8ALVbFCgpjy4w4c2XjwGnJtskgDFn1UrU26dhgy7qNro9BX6zHpnwKHf7FLfPo4CK4rdRVfhJ",
  "key36": "hdMNPUAw2c76SGrpWBEPHzYnXoiCegTSGNUdffe5gttsGZ4AyHWNFfviZimqABXkLimAXYRu44f2iqXmH33BCEM",
  "key37": "3xXff61GdEVbXjjpNLosijboX47q7WfZPN6svjBxsS8FfBMUYuy3PX8Wtcx6AmHBTo3T7hNExwH3kfW4hsXaHLKS",
  "key38": "3FHWCw1Sgx455VpLatDGaAq1fHoo5ZGMs1vXJgF71UPzBqkqHR5w7gTHkHQu6Zk4zTLBLsqMeL28xjYB22eWPumK",
  "key39": "3AFhTQmTgmc6cFmMgV4tdcL58HGCn7nZ29YxPjnhnsVKiwCqJzvAKBrhh5ProNJLZ3TRnVE77kSXvGBcYSB1wdiX",
  "key40": "4pU1SRZdNgh9PTWZCRA6x3v9YKY79pb17Dz7CckfpeUyZNd3LJKmKfXFyTe8JY5nSPPwqadJevqF53B6j9qG9enB",
  "key41": "4dHLUZtV5UUX1UDadnuKjtXpZe2TTgf4Uj3K9PRensJJu3ByQ7Nv74r2CNZUNTQmeizT1kdmnP4jcKA8ua1Wi3fc",
  "key42": "anR28pX1Rg8ZT8f9MF2brhVCSVDZ8hnAwRzrbALkbRzmfGf7z1hF5omCz7cz9pt4Y2VqKoXYFxTgk6AExxnF4SE",
  "key43": "3Fsf3rtsDTzc9EqTcBgpgwD6TG8yPKoD64XGma6MgtvHQ3tzwQmTcLVuJoEW8ybNkwEyKZS41j9f3dzspbGqArBi",
  "key44": "5WwkHaJH2LKKt7v988HHP6ZrCjjnJywMD98mdF5NryC7NeF3jUyofpZAKD7sBNFuJXj9Rx71YNMTZL2WftPKJ8A7",
  "key45": "FoYXNAb4szaQzM1rnYv8LPCbbj1oKuBueHzX8mYR2LJr7iHHS6NhSvPGX9kgGcFs35vmPSP9EAsdcQJuormvdaw",
  "key46": "3gXXk22CcuM1NWJyCWhPn64pLeopUfKmCNjKP78V81rsE51yVLS3RsPxu2tHbxC5Bqu92rrbEFWF3eAecS6qcfMA",
  "key47": "2PQ2tkq43addYKesvjNciShk92sdAsR9mDHw7qbkTPRVr9PZjuyNeon7XrXXU6TmLG2j37WDXcZZZQioH2FSkS3i",
  "key48": "41ga5HgLfgKrCLuYA7JcW6ALQBZHgHjqX9HzWXaS8DaCnGiwoXGmgpBgSAiJFA4F1F2DHs7ttsGhGtu2rfXP6xJV",
  "key49": "iwyrAfm9V9SzVaySXL5BrS5q3m8JpP3KnnQiBisxx57QWCVujSHyEt7Te9e6hXABhKsitM2SpMQgBgVZUkWyj3V"
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
