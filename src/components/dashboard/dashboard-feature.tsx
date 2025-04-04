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
    "43SAG2kajQpvi3V6CmPMZUUvyx6YqHJa5CWWs3FGxpJfDwd6ZHiucai3ZkQkLzAYyN59ZVbBkKrYhowNZjbMBVUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YXCsZWC6Cs3wp4txJ5Q4S2T5W7VNCSQCKEomZamxa3AFmM4Abg5FK8WbBfPQ4uFPoFdKHqn5ksFcD7rH1hSFakt",
  "key1": "54ZDYoBtVqcmAVaMcthhyV6vkDBRvSnw2jFcep6nLATPScoAywX6nacK8SFs5bKi8nUyM31hZRkzSdF2L9zDawFs",
  "key2": "58gpHe4WmVFcDbSD2ByDXPKWmMuoqC5U6QVpdMrEyN6ZWEZW2UWqChipgn7KDNXDkXNKK3NwcRVpNKRtbePkfzeL",
  "key3": "4LddyKaiSSzqmwfAuxFVv8H5q7h6SnCZhcJseSy145tPWaajoMHohLv2LHQF5TmkxDrwnPfnUCHhTRPXCxdDhb4R",
  "key4": "X1oJb6Pjq4UMQiVeziW9e6sgLWJHy3AnGnvR6aGXhBwgXwPthCWXiEdDCtWbnhYLtqdrWvrC726vbFaSDttTyat",
  "key5": "vBZxFzUYSC2WSDWJXGdz4yrEKswgnT9kkZXACEp5fisjv7Y2k1qjCyQvCFFwmk9yVMS1BgbbQBQ2SRxcsCpQv7N",
  "key6": "55ZL7opQfy3fUvyi4FxBbQ88M8R7GxEZcRojTK2RLBb8cBfpcme2voSwB85wGcWYf21kr9D5SxGDRzD4V6JY9TRG",
  "key7": "2Wq2pk7NXZjxGEAo2RU2jDPFiQd5Gj7o5Z6Kf3vpfqktZVnhXjCRP9AaKX6bc1u3FoBTcBqJjHmU8SLP8KacBnTK",
  "key8": "j5RBDhyKQJtux7ck537K1ksCkXESKM9nL5deP9v3i8Tna4yLqeHnfRumFukV6Uc7uFQh8iEWSvf9TJS2h1cYVVD",
  "key9": "4v4AWQqDSjN7f3eawmr8McwX3sqHLhg6b28UrHnh1nnXGeuJFoSf7NUVyFrxPMQDZNbwFv62DNWXWGJdzx3YrJYo",
  "key10": "5bXLX8txRDSvHXNmRS8qcq5W1NekDNxn2YCZKL4NV3L6ioHH99suV9KYdmJAskrP8nyBfrknEMkUALDSUj77DNyg",
  "key11": "5Er5KnMHTBcgn3Zxu6THmTer15DJYN4iwyHdhTFeDxkZvnnjkRS3KYqXMpFc48HBaezk2fVtueHiRqaKW5DrqwWk",
  "key12": "4ikFd3nmNeWhqfT7TNaewLDKxJdx7YZwzfUPnbc5epn7MCKs4ryCPaD9vH2akUL9VhuG5yjSeLnVZcJarkeeveVh",
  "key13": "3uYpFYV5CyrxpzkVNmyQNUJ2QvNvVy6vxMggH59PzCCJNqf8WNKkhDEXNgeLgxUrzToz6xCaVh56u5ZBL5zEcHP1",
  "key14": "4aZfzQtsxtfb66extuD2wYdiPLWUJ1LKMwUUFXirfsLE1R3dZKKFjiYDdRfQTgkwXwseHLTTz6NPiayhyXs1FTH4",
  "key15": "3ZHXg9cg2AVYhXmDY6NDAogB4VCB6iRZXLqJKL3aFfmEfFeRtNCcGg8rkQhko9rFdrC3t9weu2yegfdTBZzqdpTE",
  "key16": "3CXcS2YyEpvSxyof6R8pyf3578cZkDkrEh71NvQ1QEoCdV1MAabjEEp1AiANPDqz1VhVXePrcXsigxZQpHw7iL1V",
  "key17": "2n2YRmtVMUsn4FHAnhy7GBFnRp8VhHGECBoSXpYr6XKw6NJ5XE93e7McsT4VUs5Lkt7Vvg2YbYJ6XgrTMHd8eUQR",
  "key18": "4JpaEnpvWoNVVmPw76YCS76nZF7C7zEHCUuwBrQmxcrvBWDzmWq77CqrFnjwbHkAUd6dT8z8AQB7CT8skBwHm1tK",
  "key19": "5PiX5fFB517iP8GYdCmZSbu76tZsoAcRRjrXSzW9b7gFPyrE8rTa4KrpngHdne67dne9Xp5qnMnqskHKy6mv3uL4",
  "key20": "4yUodzxpgZpN6WWAEg21wCYNt1tnHQxm1ii7h5M9CnEP44nwbW5x7MDjpZM5FwVQJf85QKTj6zF9rG77oTwRgY3F",
  "key21": "4hxAVVsvXkn71Kwp9jR3hLSgdCFeiAX6T5hMZAuwTsf1yB9CoREMHCyKeL4h4C5ySmB4q4ayoTtVDAXrhpd6fZgN",
  "key22": "5qbpw8rifd2gs24GzqE5muj3wBGGpwmA9QusyCQ1nLKa1Nh16ULotSJ1Dvi3cVMeMHkpE4fA3h8p8Z9FJ8fcCq38",
  "key23": "37hpNvCBeNM3LDSBfYZszHmsSQygqVFi7wcDvPtwGvkM2UYEDbhorUJEdtimeAcGLhsWXXNV6ZMsa45FRwJMf7X5",
  "key24": "3Sn5e5nzKBC84Uoex3ENdLwTV8FHiwiGhhPw9cURLfCTG2aPm7U5WJUHBuCMcjHMpQck9BJSG9Dfs6SvQzzBrYim",
  "key25": "5FTbygaSJ3dvUMVEdfseQtZpKqnMjg7vsTSXfXHmdD1m9BK8rMKyBe5zfkhDpnSueXfyn2WtTGKo7gFGXg2fDGrX",
  "key26": "52NNUVg2FTq4fSrDNF9NveZekn34PfPnUBXB1wcL2spBv8tRiZhtZmGzS9knG4WWbKKgzp5P4pqWPwpWe9Xceoa6",
  "key27": "VrsFKKTywHXwQnmcFaMGsykwSb1HtPBjRodBMsnGdZdDCsw4Ecd9SgNHUXGXWGaFdvZjetj1bc5xd84Pmj34h5o",
  "key28": "5JUJGSbJF6cGRVe7AtgHHuzWC2XUvRQ92YFMPMMEB3zv42Zyk61w86WhZ2pD36X8oFkn3Qq2W6thP69ApU1x28r3",
  "key29": "3dnhTYNoC6VxXmQs58rq2BrRqFAAD2B8mfYeKJeVRbirhqDUbSKCU4vPt1ZVhoQYhGnpN88C2jziMR9VBLJKAv8z",
  "key30": "4KswCg4MQsPPfvBXwmMKaYTaVDSGfBhryVi79j1Lmi1gjy7e9cQsXvDZ2tJ1HxCbvQ5xGTmTCRQDypLXAaubFEX7",
  "key31": "3UsSD7Xwtc4ys4h9J8MRjCXzwvd224Z9ykzRBfkZL6XpPX8d3nCHdxP9k5HVC65SqxCpkiL3ds2JRt44r28rYnrg",
  "key32": "5Hg597TedYq2XFEsz9fG77kUGXeSuRvkPEamma7fT58ni3MnJSc6XCQtyLDePcs9Yu9BDpRMtrugxHky4scoC3X1",
  "key33": "2VtcdXWyJFgGHv523KtQ43ALTgfhzvLy2YSUfBnuhXDWpSwD7rbYb8zntMH3xrjFrT73iraUCub9kbEBnfwjF5yi",
  "key34": "5H6wZ27jvfdYFSFiXf3qZu7K5Zs2JuAcTLCqqoCnYeWyiLWFucqzxt9kwuwcguiqp8qUGwLe4H7Lw9uZV2mSgk1Q",
  "key35": "3iT2iWtjLtUDBjzgTyFe4qX76Q8ZWXcTARyPiSaREAXnyGqTdHSfwZGzYwM9Xai1vLqwQFecYgo1gWac8LfYuE8L",
  "key36": "5N3sc7TMPBuA1bvjejFBMqjHFcdWfh7BDFNVf5arnVXv5DkMciLk8KofwqbtotsP1cztF6PHNm8fTWkpUbCpUaZT",
  "key37": "4t58ok8p8cBeFfW3M4yENYHaUUc7ixXUKbrwazM8zXUZHFVSjmpW96TJxkvHX7Nts6cpaLHb8qsChZ1ZgpseQnn5",
  "key38": "5JLRHYf4hPWtP6SFmtbiGeKnxsKebfdRQujxzVusTMwA8m1aJR8et6NEwcRiBYuE33muKDvBf45AKGN3pFbsTh4z",
  "key39": "33mURFMTmomyU22tABuqTi9PPB723UmzkVdntkzCLJFUXn3srJuJxo3YexeRR4jAugby3dQ5QW38o1TCN3Totxbu",
  "key40": "5iixfAw5akMiu95EV7oPmYk4vDRATPvbP3QDNdA7aUnFzfSqLtTvbcLdvn8MoiZJ543MkyvFiRSCnEC8UmJgB33k",
  "key41": "3RCrFPBLh3wjXQVnxoEEbGnyx9K4XXzpNdh9D941PyjiUfakvpBeuQi8GqETf9cmFjsCV6GTgfWtCdkDZKGMYwhn",
  "key42": "MaxSE8QAwx76234PzTferjbQLjuePnFbGq9DrBYmg7fU2GD1MfmPJekdRKFiDVYJ3RJDDjVuUSBvZJfee5Ze2gV",
  "key43": "2xxMVnJQmw9dEEhWwJqEixeBx9Vj5us8Txr57vGq39UajUWgieF3aSThhZDHbU66nK3gKK2T2ayXQXSqxziZHSma",
  "key44": "5vX76LTwzQyMgvLHQUFMd7TpcPVfjR25RCpN5pjBAxP13pzxaezCzgFkRZrMkSQXVhU2UcwTGDuu5qbfvtKnLatk",
  "key45": "59GU6s2fSRCSKbd7Z1gpWqXJ91mZfkdDiK2yxQw61Dzt9apNQWzbdScgQqCGQMHmkTg8dPuuBd1rrLWN9UaahXro"
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
