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
    "4SVfcwkAjAvJHGgSuu5emQGtvq1YzpFAhH1Ck5T3JEvBubkJyWD8hVUsS4qBn8SHikeecroNML6qNFo7hnTT7y3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vUTGfv5ywHwRvnevKBH1t2hdG3Grp3mQ2hCEaS2LhAPVgqyGk7nAobBsGjVBUz2iGGrBqFhzbxmHtKFFhjBuXQE",
  "key1": "YJ6ccnnMKce6XsgGyRAzDatg8j8sRBGQrBA95aEyNpjMDBbdt1XxWjThJ5FG8Soyebea4KrJH6C6qn6ZqWJiKXE",
  "key2": "3qSXGCrDnx1RUK1wkxHDoJ1kXgfHxRWZEhKjxzBrMZMhjHe7TLam3MgXUcTauhKnoiudBLCpTejvNf9oYK7Ca24D",
  "key3": "26nXeg5oB5Ktxjruj4DXB9XgitqQWGT9w8CRfTJ3BDFYoxQgu7MwNfWsWEy5r7ZtuV3w9TMwzFroHQRboUiCZah1",
  "key4": "35gNprE68SGbcZgcGdpYvtSfyEARwdk2xou8myBXMx5ramnYPKe25i4eMAUdeMzguNizLKB8Kx4E7rp9EwfE5yAi",
  "key5": "5cVE47DN2MPh9NugAnjG3pwXW1tFAvvPftwre1qthSyeAJkQM2kN9tz44AZZjwwtceGxE6L3cZR7xymh9YyWv2EQ",
  "key6": "2H6cBZVg9eXWLTJeoxRns8a85H6ak8Mv5qHfGr3YqJZVTTZD8vxLYEAoZemjjeZ6PbCTYim1YYeLzMbqfEviZWvW",
  "key7": "U2LFVF5onXPNoZyYCYoDWG4CvueAGPwJhjtx28d8JQCmY6icLdDZ7rZyAqbzsvdbXWvQ8BkwdXmrhWFvwSsUFDX",
  "key8": "3gBQseoh2uT93x6EZm3h91Aepxi8xEJS1QPQ4xMrAkp8xsdeT4WDDzhWAKo6Fgtvk7Xuk9EJU1wd1vV8Fu26Jebi",
  "key9": "4b8SLa5p32MxFg1CmTFGwxpEjyhYKcMg4Ea5H2ZYuYVNtHqCJNJzkfYiNiLJsyBbiztVmQqbBLp1ZPx7iXy6BXa7",
  "key10": "4u4yKMnF4imTLYZcSzg892YqBiJvYVtFo85HCZ8d9c83erCzhL4h34oiSmqW9Sc6Mge8CWse81Tjd4n4xBDpxnDj",
  "key11": "4tJMdoD8vS37oKY2RkAZTfqGUe1fWQDo3QDKDBqqgWwWgBAHAHCHvx6eLSWFcDBNufMk6feiwkp5QLLXG6KmxC2Q",
  "key12": "dQ5miA6nTY4KyaAfiYpRhB3u7EUpKhxWQzSUAxJXs5G5MbXiphdDKnBV2HjigUubLWisaYskuiVYf4JiQb8DmFo",
  "key13": "7DSqcAuQJNTi53dCN5aMD2LPJ1EZoZrsHSkwFi87S7ehsHTUaHy1U4qRiotafc3QyPByoJmAia78LB1ECuNBr2B",
  "key14": "3GfdUR1oPkZomaHi5om5hCn9mktV4vtTWDmqCSg3MJpFicykW2mN6V5eJLVHui6P6xEJXdFFEuK4uvgDJKDeeQW8",
  "key15": "3TYUxPhfJRrpoK38dcKWQYyyTAQdzqFbsukof41uQKnR5E3Cu59JoCsPszF5GpJpUAtgATnpZXYsyQd3BSZJznS",
  "key16": "MQtMixbtVNXEqvr6Qwz1gVzbXzYdufrtDT2oKGEPZ8rJ7aUxtkDjXiAuFzajGjg9RXgt3QaA1Q77KJ2QFkeXzMo",
  "key17": "3ds6GPDpokp3qRx2k6uBgXVFkgHjrrcGcFkmnaLeXU6NLf1aWviYG8AcA1HWnou9VRhPKdqEHgtkA6FSuEfApA4N",
  "key18": "4ADUCB5h8vbPw31Q5R6yHFWezAawU5wGvsidrGUZHHQN6hAprsMgyt6cYgzCJd8BddH2BXWG1amAx2fDDVZU6tG4",
  "key19": "8ncyNJeiPj4KBDjhHuvrhM2VrTreiFaY2hP4bD84C5uhXxiqXz5KkipvL4AcgY6wEvbAdxLVH5wZfY5cyH47VaM",
  "key20": "6nc43ct7MF2cL91CzqFQKj9povxcpggzie8qMPKyUCY3fakCb6Y8K7udh33MxE4bs94KGa4upbqunfyrVHVFFcX",
  "key21": "4fMWZSka4QyF6zwTLiZUNCwZzmv9qRvfKPCGeCf9uJUsd1Zxp3SqoEzdX6wPkL9PdrgFZTJ9b5SuovuDL8QFCBXp",
  "key22": "5WAeb5Jfbw6yfFQNgjWmNnanUAeuHdNhkyTDGESkNBRoTPLwUFkKh85bPpQto6fSWXkdFTnFqnT52cBzh7gPmCXM",
  "key23": "2NDZu7Ck4fESSEUWC3xnMBeAwUwpdB5SJixxPrvG2qdMpHXbPB2dTxiAAfbGCf5SaYLoQxRPtFFrJW5ZuYm1FSDx",
  "key24": "42UVjF5fu25v7rndUyhTZHUZSYXoSVo1JBNn8cYNCTohBXiZsVoBD5QyBCE2fwBXa4aero7X7dmkBCViN98F48r6",
  "key25": "2X5VeamigCRbirkNVh3iSjyGSJpvUKqgsaQejyx7nQEe9PahezwTLZ7msPw3BXVQmhU4oYW1f5vWvJaS2YeoswHJ",
  "key26": "3W3wgmiQ3NqkEXpoR1MfWq9eGkVLJLDFR4LaTKStxzDiRAUtwBWZLTTKspW5bzRqJDp9dcie3XPhUcLLHfZfKZt4",
  "key27": "33SrWhzfnE7ihmXJL22fBahiMLhChX5ioyuLsjKMEGJXX8yAC2AG9k6Nnnnsu8Nb71MfxYarYWbYqFcffdGtYqS",
  "key28": "4aQLgFySpmqX3FfptvmtJUfK6mA2kDdsaki3b3rnA6rE2p1gGVkDh2fxCW2vTmtUjY3LwoKKpQpzq2HaVixowqTB",
  "key29": "kSQN6BKvHP3zb4891fwwwVLx7t7rMaUo1WV1hhZ7gstw5ArNqp3GHvPCh7JQYoJ9LpioxEw3VYM5X1u3DhLNVnk",
  "key30": "5b5bqErB4nG5fzN5FjkkqUX1v1FJ8QMM9w9WigLDsNdvLvWZf1SKeWKjq9FddSkGja3g13YbduPUXzqGoEd3csFT",
  "key31": "65MRzmn9pkxYCthLo6SHsZkFStA9emq3uJBCVAVsMwaGqiknXxWM17hpg4Asn2Eq7QbX8D8XNHwnSBmb1GFjCGKr",
  "key32": "4pj2FtKmsHJtRVMTdMFTVMzYNFJPUXW9g246A6yaBFbTnAQpDbFiF6PgDmYDa2HaDcNzefcJaLbm5aQgr1MX8azH",
  "key33": "5eL7gcEvi7xDiPn1Jc7BU1Bt5h9Rwy6Y1znP2beRW2jCmh3NwvCWLxp1NN8SyYQmYvn6hUKFnQ1BWcms9yEkAv42",
  "key34": "5Z9snfPMzVmHyzHdGKtuurBY9gagePZTNHvzUYZwWvpYdkiKj5NeLrp65fbPAwZfpHKhyZxmP9Aug5DJcikkxhWj",
  "key35": "4HhDnLAfQF6WaPJT2zGCrNDmWMXT4wzFW9m82ceRPXoRw2rGqsdAEsYEJgkxCDFnWKxagpvXAXfcEq8AVTkHxLha",
  "key36": "5Fcdys6652bYEyhjZvWdcQqZjuN9UtTA9gra9ZWdx7QDqSZZgM2amWVdeJQxV1pRb63nkPdC4kpEDWX4Yv9zYwMt",
  "key37": "2TgdvcjjUFtKXaPP9cermF6KbDEt1C335jumPqgXt56dni9KSWTNZwckb1YBSct2aZJAENCPjWykYACkyCRb5YSf",
  "key38": "y58uYWp86UMbvdi6FJBC4zaUQxW13QyMoLvpPKLizA3sXxYTrMVw5r3z1ofiBfGG52kEZpUtN7kEsqjSWNcwnT9",
  "key39": "v9SkAqxfhkA6BpkMyyxHYSnRpKQUBuBSkiMdg67PveoLGmipAsQcDvPZRCYgUUAdxwsZuCyHWJFfpwk7WdjsxmW",
  "key40": "2csq68skYYSAJUNJGN1SETc5UKMujShCpviMMZhS2kwUrw4o4biaiFnGw6t7BPMMxYLxjvhb3k7QNkoV5piXswKz",
  "key41": "2UGDtZtdCiMBwZ8A2bvbz2193bxgGZk7zGrLNwZVYeVsT3VqRiyAQB7AVUR3mnj8sUj1U8DnYJn3kSug3rjGa6Vz",
  "key42": "5bYbcUKUETV8Jo1AMBLfErHBKCB8EkFitd47MUp48jy9Aan6XTCk3DHLe5MkqVK6LXrVMvWLwNAJHdJMMkCBvaGd",
  "key43": "4m2vpYPf3sYjYqFd59Wbmmnn2apfXSGXBAcxoAW9eeD2anroVx5gCMJv3mavDEJ7kVbEtzQuisZJRSc4HQtyXAoR",
  "key44": "2uB3MXhKyLMVjxfDAZyC65j3tezoy93k47GH6NJfcrHJA78NQhy2bnqGW8GotMTvcbDvD2iMwmiF5EpwWeNks7NN",
  "key45": "5QGSoJRoNGp5sBcPCd4iRxS93ugFjv8fbvmfoe9CPjseJD1KgfXquHboMabV6gD5ApUHLS6FsH6WfWb3uF27BbAo",
  "key46": "5By1ndAmsWP1NuQ7q7SuMXyDwGxeEHNBKcke873UDp8RsW5E94c9VXqhzhiVcATmb1Sxpomjnncp32Y3dPfE9A5z",
  "key47": "2zWTVnRgzC8yuZgewDqkNLyA9BT8nFQJn7ui1mMd6Hm1tnx8fEkZUgZmBWsyBKTG9Bh67XyDBYt29mqtKpuZtTij",
  "key48": "4NRQSMmyt2aNmNPRLdTpQYHZ2J7oh8dTUow3bd1CCFTcBPvbd7Px18JrT26q3vHj2RnNrhfnBPAqno77RfJsiSY4"
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
