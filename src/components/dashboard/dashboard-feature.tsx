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
    "q7W4DphNHrPVRL7N7FCvBa5Qvi2HWyf92jkJW4wwQPBPbM5fcNZRFk2KbyxjwtKcVr2LXwpKeNdV9QSZhFNa4Uq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "639RsgtoUUTPVjZP4G7vwWznSwYvRKWnmE1xxdXipCXdKhSyKDVbdksPPgU2dmptGs87kXxC3F3uC8bWvomax5mZ",
  "key1": "3RVXeq5KFrmriMuxWjBLZCn77mdyCNwSpsEFQ5GeoFkAcUjjC5dsC6MWfZUs1N2j7RU4J4WqgX5rWvf8n8Qxf72h",
  "key2": "3pNpE6rK1WwRxqmqV4RYjaYsdWTjJoBCDPDU54pp86oAPAmPmFwUCYGgB7pVA33T6KH1MLUnyP45sRSmxmm3VNPU",
  "key3": "2SMY6gBzBLGMCtxzzFRuNLhLc4t9x2TgYNi4Zt6DhfYzF9EgonmBFYYXnuVDksJcJSjHa9zjoz3PEbb17bshJMe5",
  "key4": "teWavCF2BKadbfnjEamdXPzqHgg89FF7vkN2rAWrYDApGgRrbcgSyy5xknEQS3LUaLfYphYLD1zcdR75EJYqMMx",
  "key5": "36s7YqLdq4zXqYPqwZe2DeJ1x33pUfocGKG2SsQFkDPjckPW6kQEFrw1jmVK24c3GxFQDHeLHrEHZzALHp5JxGqm",
  "key6": "LofzWNEjisYMUgZR2pQmKroRzGdmqLuJyAPoFhTJPRoj9u3sySGZp9j8UqjGGUEXyA2nEAzzhuAhX5nftXMLjHs",
  "key7": "5Ld1Whj4pwUUMsE7zsEEzv2f8Zx1QabR8ADbSUzu99CvaYHpcC8m9SswE7xqL76vJymRTKSVjB4MGsdquXVimncQ",
  "key8": "4gRvyosQLCnPhcLbpJ6nKDuuT4zoUJVeRZPyiukV4BvuGa2Qmqaw2EGkty3k3tcvPPNJLUFR7aqzPC8bzFLQ7THo",
  "key9": "5ep5Cn1fuynidMTuvwnwZDZTfKnTsjTC1Uxun5wih3ZtE4sB8LVKXXziLZAfrR9oynhUUvvYeMRVHrmbb1cddo2X",
  "key10": "26pJXcG5fPZHgZcHBTLazY5P3aaZNJhq17S9MYuBLkLoDAHnXamN1tZRf8fpFRwcBu5otuCHe3dxmdRs8v9z9onk",
  "key11": "5wfAPm7uWqKAQTSo3LKYop2BNHCtEUHYYbKmRTHQR8NJ9uSW2agqZSZiNNd2ntVaNodNVwDDsgn1wPD9cChYgQbu",
  "key12": "2xCJkjW3y5Aa9WWjyazUg7pXs6siu4yHRxmsN6jL32siLbipvt19w77VDBhNvrnTonJuGCR5SQMAREtbGmgwcr9r",
  "key13": "niMWBJRDkHwdP3jxhsttD9DjKYNYhKcrN29ELQs7fRsBakpzboQAG5HQpsTonseVeNC7gc1SefHuix5HnmqyjLG",
  "key14": "4qaviKi8ogbTrDF1Tiu6dqMaAiDDrF3me5PZZuqH6cucnJauDm8y8P1Yh5pmfGGQSGWd7oqzfSCx8YvZvqCg4zqE",
  "key15": "4YkRmx8xwupFHRE38RxaHYMc6y3JNJpZNtPFbeG1A2JUAtGqbRfWuMqNUThsgGVixPkdc454bCG5LeJak4VZqZzq",
  "key16": "5dkAqoYEr8nCB1nVtZG6BeLG4q7kqr36ptTAktCzgYUgR9ao7YQe4Fyb9eyjCsmKA1T5SrBZbbM9gzAsuRGnVuPH",
  "key17": "5he5BTpjkNhvVrfXuAtKrKEVrFks5KVNodgvKGAx2cyZkxWZqCz6QkmKLGuRoSwR42TY8whAimvqj5KGYpAnVDjp",
  "key18": "jhWqd4bdeKmgYnw7jSSivz1AoCLiNKMXNFGrgeCWV2MhyNWa3Aa9PGBbLNQWXQugL3Q2BYAMBQhY8ANo42685vm",
  "key19": "2nj2wPfboGnHzm9VSU4HjT3bEXd3ywkwtRHXJCvit8gFLrPyfxmZgoxqhno8WfdYMoUQ4vEVLJGyrHLS8NU21nG8",
  "key20": "4rCdcVQAKRmzXuzjrsaF7FQ9HJHsEvX7v3UESZvNB7TckPRZUoTHH1nmNxSpDPQ6HMoN88LoK31AoKtvAguja7MC",
  "key21": "4VR1dFZHEdaw7oV4XmYiJdEa8FyRVqKKmT7Hi2jK9ECbnNSBw1HvCfSnotvuy9pKRZFH2YReHBK4TAyPnK8i4dxR",
  "key22": "4LmWMAkQuUgfz5E7nqvcKM4C1M1uU22DZrWxAuAMvbN2PPTsUm2Kdggcsj8Y89dy3j6N5kcY3uon7qQrayVZDyZi",
  "key23": "56QQAiBsfZj4mBb4vofqW3vsebyqPX2NbdAGMqR6g4ZHWNVC9vuiyLhB1FnuSKTHjqZSVbM37qWNbXKXh1SMsk11",
  "key24": "3ZkWhZ3ArQTGv6C449WmXszLBWYHbZvNh58ix75vDiGXpbP6E9hGx7tiwkiS4Wh5jsppuWHmdmCrpCnHDAhrESmg",
  "key25": "61CXiCrdfqoth3PbtYxotfr5QdZv3AS2G5JJ5LBCBKcyEYB7WXLficE8UoEzcK2h2VvoyGwZF3nai7omHiRgxUZE",
  "key26": "2UHKEUuZwaB5gBRKLwhGk9uPh3wbx6uzyr82B5LPZBVC1oHXCfrCTw78KL6RMwQJGSEcRSHJ95BmzD7S4nmc5gQc",
  "key27": "3q47W7gji6k282rsoVFy7fvT1rYEHhtoDKpkgW8CnPpEVAxGvNKYVvEEheNJLs3X4FRmkGYo5CTC9TQqKAxAfGcW",
  "key28": "34osA2k79b1Y28EPLqj5WyjdhKQjgdDMxCe8HXfiZYi2UTBdm9jMhubYBiX12Ut3bxoxhqGEfswd5XXrf1V3eCgQ",
  "key29": "2Rrb1aLDzg3aoYfKhsMU4e3S3ZRaLRPTJybCcxz3vsgnLQFFggwYPC887UWVtwuzfPxjgyi8jQuytYQxqY8k3Y4L",
  "key30": "9jPTq8bnkRSu673zgKMaoQi4TUT38UypGJZFb2jy3UyjuobnDivLrLTFk2kHXLoJ7SviQ1NS4sSHYZRyZeg71Pz",
  "key31": "3yq6nucavcaEMuikhFrgt59aguDXd2syeRxjKA6jt7ZKiLKhSB4pDB5T8zocVs5vw698yXJirMKCXJ2FsMkKZCXj",
  "key32": "5ebyKKByk9wNt9W6zGycKgQ5YWpBE8shR9nbCQMjvGDMAUj7cRsQSjVQcZStZK8ULBHa2QaUFxh86oLRqThYixv5",
  "key33": "2fdc6U7Jr2ix4ijqd4N3hcNdMAPgtaSNXu5fYTNTvWKU5f6bmEFDJSfV74wJgRkU2jvmWjEqKa2Ss9BFmpMCJ7AD",
  "key34": "4WCtX3Gs4FBPPBjy14wyhdJVE5YY5U2WXGzCoxG8JcyaYmNUPZgEkwf39ipanQpyoqxB1nZWJq3zSN9jGv7KmkhS",
  "key35": "2oXPkvEnyZyEWDsbjN2ZuQGzCubKS7qBep2ChcV3rsfnNM3M5v8FdvDBcGUjAoSnY9YKbjKzKh7gSmDDqWLgCBrY",
  "key36": "t7zyVdaouFkzkEQdjYDeGdvJkLSQMYVPdXWEWu32H3sMqKrcUPSW8xcvXELJ7WkjFUSKkSmiGGQZXR9vxLpUEsJ",
  "key37": "52NUUgTL7HDMGeWPUTxTtBqNS3yZLnwhSSUyAygqkM11RFAGBcapsZEhhbJT3RgSJJSZDrkqQy3jvJ748N1D86iv",
  "key38": "2SXxy4ukCWgPuT3SRYBdZ1ChnVUrVFbBQgbtf412SjSthoSTmA43oZSEMVZkhQRcTWWCn87VaiRiovE9YTZmGeWc",
  "key39": "2kCv8XdpqrhJWfxze8AwmRzQnNnaZYEVm5GNn7mgVTdtq5ZBto3XNt1DPff6hmk5PPr5wZLdzKufa6dPxVBh3q7p",
  "key40": "QKuM2pRUaqHSpMB9XDw1h4avq6bW5rxeHEv8HACjtTgVtUmkfNa6hPWCsUD65o8wWLvWkQCLZgYgWY9vMqUVD9E",
  "key41": "5NyoencBpDTTgEePzBD1geSYi9ZmqwVwzKeuvab4LPjGScNojywPJsAA5oPFcdGLyDgrxP8r5VWJJgz1N2YssfD5",
  "key42": "Tz1mwaBJLdVfrQfd51dNiHjo5Nrv8ifkphku92wv9ABhYCZbLmHH6m4VXnzb4nXrkWbrh9goDWYJQPKQCs5NaUc",
  "key43": "5yz581b4zEXd2ELbVPy6NjB4ZDMHvnR2YthzWkXnfAKtPnG15YhbUiCLzpYX49pDCxr3L5HnJvqzReauS7dafyhy",
  "key44": "5oNS2TGjSzVLxxw1UzMximmv1P6c1i1qSDCveC4o2FqXjNxZ6XNvSA8obJ4ZVjkwtJkUCDT41bSgvtxPJMzxeWMD",
  "key45": "3geaQQoJwVRMh19NJw7zQbzzCJX5DwD4DArAWAF8TJskC1pb7EDgAVaCMu7RhS2xwTCAaccBDaFNzFyBNQJRdVjr",
  "key46": "4QJZfpQQz5mg8wvg82idcL7bTg5gh6b5Wei64Pb3V3wZPJL8624GjBL4reiYwidMhAmQtN1qnzpL6HDvXcSRhGhc",
  "key47": "2vxhtg1qRZ4XK22e9x9B7scEjdRT7s2MRN72mdpH43JeVA2yg9RfKNwrkbd1aRHXY97NsSjo9wsBHRTru2DkCKRe",
  "key48": "4LiBpiQYWkNqR88YTDqyKsAhgvqJLoRvfR2U3taNjwaP1WHKYzd6DnbTjrinxq54TAour1QQfyGBkNGb2fCMHNVF"
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
