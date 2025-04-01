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
    "4PWQunM2ASizpr6TWU7NL6fKWVMxCM2oBEzhKsm3oR8NjeiLPWKuRBzEvFRQTKFcNaxp3wN2aoqL6k2HKRp5A3zc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oMS4GqTWngYrc2QhVw4LEknHAmjGiCpSz4JEw3K2dDTGyNvrGpA3ujqwhQyDAgTR5zVsJFaw5Gb2NcFsVdiYKA5",
  "key1": "bSbKBWdaNgVwbwCZpKcTsKHNNCKchVuj1ZrPdoCfppSmT3SvRDjhT3oT7RTRZvonJeoQACTtJA1wjRpEkg3nNjh",
  "key2": "MX4dLuSE7MjLMoLZZqHmu4UB6iDYio3XdLujHhNVGxKPoN1sRHi1zVM5gKYbDFjMEAQbychuStyXaJMECmao8wt",
  "key3": "2qWTyN491LJMz9zSiNb6vaBJJ1xkkVGpg6JgvzRxE93MugFM2a6c9DtjQhqJU2E2Yip9CtwvLhCDwCkhtAHKSF2F",
  "key4": "66BFA6iGSXxCr2aBhi9AmwkjoL8cczki81L9URX39GWeQ2fuCnEUAgFpEToLprrNATi3R5PC6MJJzEiJ5oujqi5C",
  "key5": "3uWbv1izPNRHbH2JXG6WzhKGFxvRytYhm5WvnhfY9UzuSLgeWmCwQvfYW33Pb9PNpZSqpX4un9sxN8xhvEFbaVhJ",
  "key6": "3iRpDQwTLhBs1M6BWZCy5yxUYvxSk3SXaCCq5McAwKFUZ3EehGMWakhdgaCqzkKGvNEpzVoqYXsG55BHaNjwFHNp",
  "key7": "29wKkSAt2YTCphRbLygMEpsqnewa9tyQ1Ew4cjrLsDxuz65JNZtfnBmVyr1UA539iRuzpcvbXLnY9q6kJ5AUuDKu",
  "key8": "3Nau7CVp3HbRHn2fWhBgXZmddvgLpAQKvKSRXWiiyGoUNmo2zHqVWmesWmt8Wwe1k5uVq2DXnCNJk57Yn5jbVn4H",
  "key9": "367izySLLNaiq1fLKtQzYtJG87LB2Qevqo9iFvYJqLPUyaintzPkMLWqzGzdboatkGokCrRRJUx5UXXkNCsncodR",
  "key10": "3Q99CKWPVZfmKSZrqr3ssFkQ5o41AsWhQ1V8SziEar5eYqhtfyxCj5LbL72ynugX3MSyQjYpH4bqa27t8b8SSENV",
  "key11": "3isnRx13hw4LTXm8gdbhJk75wCZrSzA2zquyykcymFaTxEYW7wqB24ULUM8pWySTVw3baqZQ8Q9xusGLDVz3iwML",
  "key12": "46S74UQbgwJ9kvK79eKgRH4GeQx7Dgd86XPQiRbs6Q9aNB5CpY8cKCn7hhRD3kKGKoKGcajrN1yEUtrJAK68zjPw",
  "key13": "31n5xqmvgvMBc3Pm6DeBAFEGdSp3z4LtuRXKLKNXFGebahCfRs7xm5SL6GKPMEF9ACUejet6FdyQroC6kqk5BKWr",
  "key14": "2pKp817rijNcZSPp2VYXBxYcCSC4M5J3g7yEczXWrZYga9DGLVAgrUCC19VFad89gkPnrLTXx21VCQXwi4d2JY7o",
  "key15": "XWVdpDFUEtzRxfskE4VXfmjK21UUaCcWquxETgKSBtvXG2aD488uJFskZ1YvVp5P2dnbJidS5A2g8hxaBKVZDMk",
  "key16": "5inxzF8eiZJkubm1zvPri3DYZ74srgFh5mRmgz82StzTTTZStg6zJ4of4AuQtiP2eUrrExfk6Q8HW4sMGVpPyyKE",
  "key17": "5Ggf6qivhUw49G1Z6XdM4gxZgqocMMoAJZUX7j7YbCqJbchpD3dzAHLkDa7zT4pvDsVowV5aUSnmUnaMcqmJus2v",
  "key18": "hg2kirQWasKQCc1PCJ8vkmjCVpd1LLf4eW4GYHQqwZYB9oU2axVYZzH7CDGt2Fbz7WgNUhxdHRwvNCBUzG6SPGE",
  "key19": "3CHzgdg63YiKwAmAHUvMT16V4yzo5ZqPteiWnhLy1bUDtvm26ywrAbu9uuugb9h2M9HQpeCFatumQbomesWmAMdj",
  "key20": "4KxQDA24kYbu5A2MG33czMuU3ptshBZfgXATgoecdVouWCAjfJuqzGqDKcRYykUAMGyj6n1su35iXyMLsMH6QTV1",
  "key21": "5NoBrwsdxKRA3NFNMggeXmPMR5ArddZUnCPjetvFnDDzGfxn6noRXo4ZDGMDufAuH7cdaTwDh1D7krPdh13kPaPG",
  "key22": "2bTHtgZaPpN7rCfiT7pnCWcKpBz87rd82vFny5jUfqwbPRVHQx4ZDJ9AUr45HQ1Nemx6ziSd4AfTd4AtXjDTBpab",
  "key23": "VRuiXqMNZXgtPJEuLwRv3apP2ZdT2gx2349xNiXw65TDGPz1mX9EXd7ioXKmsd61pxrNoBaiuVthv3uNpQBpgi9",
  "key24": "294GybhUfbKhYXuLqnnhNEMQjQLPU3FfZKv9JhEEDVgLkMVq7PGQbFSPH4BCSWkoFSQ9kjjmpWupFZg2ofjnf84Q",
  "key25": "5zeH6s3Xux7pDToo4YDjBZq4CvXi48GqaHuw7wu4Pvit679xG9wfMTUYYfow6R4WqGgHiQH6LviXrG5K8UaXqkiY",
  "key26": "4yXxbhfJnLA98JBVV2iLD14uCSPkcnfVMYjjxQs8aqbHfvRjV2MZAik3YMaCtHt7pYRhAWS33vxxqMuM2PHT8sRc",
  "key27": "Wyd24LXGLpB1o5sQC7puEFPaSPriqnXuukAkjahkME8LBGDkMCweUY14ELuaoaA5XmgQ16zcPZ7EjWqL8vrT4hK",
  "key28": "4U1LSmRHA1Tbikr5TbXeHmsw8penHcRS8ixwUKd1LuLKK51uiNKETpu429qKe4HKnvHuo8HTJkqxahM4Lp1KhHRi",
  "key29": "3mxBdLG9aFbseiewVWpjYuk75pKc6mqCQk72Hv12YrV3Fj1rNbWEf6AbzhGECUhsd8LQms12Fbts4dSFNCHxC5LA",
  "key30": "4zT9AEgBJNCRWueJHTfQVUFCnpQS3zdb6C7gwhyD5Yk62iqbJxApkzYVmDb87hjFvwHoSpCHsc9aEvFofp87TjSx",
  "key31": "2pFtgyZ2nXLyTZ7mr8boEN6QsrHfdnJ5zy6dAR2z1JAPPjwgVmPnocmsAyCLJHJwsRG1PHqK1SmXg7DKyZkfMP2w",
  "key32": "4SBNXUJHJgNGxRXHMgfdSHaC3s4PdzBBi2KaRmq4i5ARZ8QihUDszzASb6uyG8y7CeBPk7rLWEKKB9sQK2NuFpNH",
  "key33": "3aBgiZXT7WbAGRNQsVspLHwSrvMRXMApuzJthFyTD2Wm3G4oyQMrRRDdRsPUki85FanKe3pPshxJf693V2kGgijX",
  "key34": "4iDTBKe4WXSsw9n9i4Qqbc3uG53UZjBfjHrSQya24sW3FY9igvndUBxfWfEQtzBrmzrwggETmY4b7cSy2pzxe3H5",
  "key35": "5ik59UEGoDXxt33bk2kTwY7PmoZFaFHdkvkDVDon8nQjudwiUEVo1YnU3JdUTziXMQbJFvne9PAPRFwx5CLVrhuB",
  "key36": "qjYHSaXHVSVWuXkUYJdeM9QbMyk3TtQVYUPYh8Jsg3pEA4SdeAc8vmJ92XKFbaGeuLUBM2kMqsgJPdvhHGiX19Z",
  "key37": "51Kdskz86pLzrZxy9WcxjH4AiDCN6AL9FyF8eZhukhGg7nyaMPrpdGqFtxRf5kVvdrLU53mMFm3vUDJ1ipHhVzTz",
  "key38": "3bunZyVha2vWpUsrFoATG9Hkrt6cTuaBmH2JwZuaGeuQgvVnCKQ6sUMfeq6TsMzqtaY8aH9DXXee2qA4pwNHQSqj",
  "key39": "sYer3QVMYEMCn4veVNbrieF4Q6xzsQcvP9cBStgEH4a5WecQpBCuvCL3D7Zt4UHGKUdSqeHAPYRyHZVTvLQege5",
  "key40": "7bifXiN9Ak8JFcMt2KEBCP7C4zxVtvfbNCjvBqbWe4bT3GRhWD5vzG4ABNMYCGYC51rm8D9CWiMwHjTH5McD5MY",
  "key41": "2HYDpvpG513Kj3PYnaQ1EPmbg4rSWuDBDce9xWPyydrZnmSAVDBrF9XXTbf3hSHwenReyQLn1bhGypdUQY17ApTg",
  "key42": "3zDPvyunTELbKpY2Fm2oUMu6U9WBrc1FAcuPUoaGPKt2DFYaoZxuSAMhZ8Rbb4HYvFu6edBBFuHC8aomgxzhDqk7"
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
