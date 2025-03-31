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
    "39VtpzccZCtt86sWHwkQVWD6DdjDDzA5N53HJcAqMxN4SQ1YdRd78jMusq2v8cUrQkcNtCv5NKbB4gSz1UV8jV97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NBmg5HqeCgG6Yc1DW7eaJ415DPn3NzMLVfT8XWrVRQaYYEcEg6zmGHbRvkHexwxzJfoegEA4ULjyS5Xem1nwGQT",
  "key1": "4siAfWXCMe5SUuoiNtgXvxJnQcKWKTZXXzwaigt6R3F9DB3ZPRq4MNSqwsxHtHiit4a6Cz8bJpTDm3r8W6MbQgXx",
  "key2": "3Cu7Jx7XwXHoh332BMohx63AvZBsjkjRFi5YxkjBEQrqSbh799D2fAnydY9NwpjNBaWDrGuNm4jthh8dS6BSWfsP",
  "key3": "3AqHND7jhYd6yZMBbYXA3jMLPDKjX6cWkn3zVSaZGmz9DMAqgWDKgX8QLGp7jvjDz5Uj8EpfhCsGLzKQnmZVgmkR",
  "key4": "xVN9pRYopKYYihjkzPqXUZZCvRahsHac6hQ2jDsMieWNxMiwjhqEk9ahmo2feneFfjev1iw1yNRVJ6xoqPSyfGp",
  "key5": "2kfp7h4zjnvBtzPASd1iWPAbsVrYT9oXmPUMAeacMo3NwBDdDqfitY4vuV3TD1Jjfj4R6HxhewGf5eV8jD7fGwQ2",
  "key6": "5r37My6KS2X4YV62a8u5SSiggw8U9G7EXP4vhpadwtoW9tZqzQYfXgMcvXzPvezyQGAvr6Wjsp6QsfjNzKNVpH8q",
  "key7": "3NJzQXpi1Kf5HYc5KrerZkML2JPspGgJa4xP1RhKaKDo94quxtj4ygVDUmwo34URcuZqhBJiRByR5zGu43nz9BpK",
  "key8": "YXa6ePfeNtsNSvoBB7MoPoC36LwkrXohaSsYKUuXBCBr7vdQnCi5C2ThacbiwHDmzQng2kkCkfHHVXX2CvjtRHU",
  "key9": "5WgCzHcQ87nbPgEWLXTEGt4rnyGu7XfNZmD2Q1EAe5MjrrUoVXAeEiBZfHhiRawNsWeHAJbcUoconuYpPwdA2KfX",
  "key10": "5B8NPcRbm8R7tGxeUkarkVBc39P6m9N5FMXLzmbYgaANAbvCKav5pPpgaiJsr9t5tyXhbEs4WGdJUdZ9qR5PJ3Eg",
  "key11": "4tswKG1fFj4BGMhipWB8AttEb2aatqv6RdTMbE44fwDBV5k4C3CAVZVHweYjXk1uAGtAB7wwqurZ46wJd2gVyNDT",
  "key12": "3oXJJBVfpJcb8hNS7ctymVbi68rX7kBypyL5mGsd2hnDGGyc36euhmg5gzcWM97pDeW6kHL7Lw2PhWosv6rN6G4C",
  "key13": "5p7nz4sYKA6nuKGemBV8i92tKTsunc4fVuJZTN29FkPJ18TuZTpNrXE4ZzLJbwvfLc9MJbDQcQeGxQe1twi96Hp1",
  "key14": "3JiaDs3ssPF8XuomGqZV3F9gEPFbe6x8UYsqjnKwZUKJr3z3ZRBze4o8rdyArcTPHfTVDyczjdiotXEhTyb3oeb5",
  "key15": "67JLShUKPEB6WMyipEYjkgPKpqnhk5dpYBWFqonD7dhSPZkHpkhBovja9u6skT57KPvnY5rJCzWqaXNbsELW6toC",
  "key16": "3V7UsdEFKfRzQ2MTduUjLCfXC52rfdEMENXY53PiuAVtxbHxM3FwzKMry3jWuEPMrTx8NX549EEDqazr55tBNLF4",
  "key17": "wwUBExkFxk9YvnJUtoi9wayuPTy4C8UzkJ6xcQ3LSkMviJR9o2taZLeY4tW3Ghhu7WznsBudDAFBpCCCuvkFAy3",
  "key18": "3K88jqqwVuwV6QYLsxEfJVpNDzVG5XyzPriaxrpFeVXsSvGBgXVEVnHb6daLTXNwGwCwR19itWEacD5oUDZmJHph",
  "key19": "61G9tybv6cxgaywMVaPzRUAGCYa6uBkRWhNf7EPzqGkrSzvrezw6syKWuVyfgMXjYGEXEj2gmYZD2V9fK4BNwau3",
  "key20": "zjbjrxFcRaSf4BV3pg1tf39nChnwXK5wQt6uug6LVbPJcR6No9SyZR2whuys7BF7Z1fNTGZCz5eDSZhyv8MUTZM",
  "key21": "5TC5T58YHv7jFTpRQk3Lgsdz13Fh2byBMyM2JY476ZEN3jJ5Do7j7PKaXf63TG4663BZNXwotcwf8dCRUMuV74FD",
  "key22": "Lc1VDKWbRc1oJ2mNpGxBs5hiRNxTWoVSFGHkJ5HPp2e4z9p55ZLQ4d5fCsWyddKL8HfxpNpAi88uEeYGiVALHzk",
  "key23": "2AmxGH71hBwVFNSXqGQZnipX5Z8ThAJx7yeHaD15HWmSLKhpdFYRYv3tiHtqkMG6SY7euXYqhuYr67kRbgxmEw1f",
  "key24": "5z2jpa276R95ktCv1CvGrWioaEakQNza3RM349TzLQtG7uAng5Xx3rLZagxZP7KzLRURJPPSja98rL5V8amrMayp",
  "key25": "2j7CdVosYT6zkYNUjF4JwfVzuyrdU6H7Uq32XRMvBVgE7Hv6CgnQw2VqKj91LaYbupyqkxfLVXVY7u8scjyf4EuV",
  "key26": "7c8tzA5NQ896GsusBR8Mn4DVRqBAp2e2PS2KFmoaME3oH7dgbKzz8cUWoHWGz4SVJ49m6oDuorjUpq6sQSGPqkF",
  "key27": "2ZqdG8KhhhEBPhpnLLbS8wct5L8EY3d6FkkUGVmjS8MuthxgZfEKxdChPvkhnFgaGdoxvDMbCA6GbPLcogVGDZ7r",
  "key28": "5JtBq3Ug8h9TbdF4fNYve2cieNvqbx7fhajtnMVKWah5BTwZUopTzV1BH7MzagQysvgP6GmmjQy7TRuWSnGhErir",
  "key29": "49GWiMdx6Wf2CHGJzh7BAh6wZ1ubckY6yttVLsA4a2Jozyap7sVje72RhfHTUCN2PfnYzQyAjUctp978rYckGqte",
  "key30": "4jW7CRAPJeBiJDgDjiT5P76Nu1xLSCKZ7S2Pf6tWPvBnsjVMWQaVqNrEWMVvr3PcYvUCFTMn9CPDYQWTR3132SqK",
  "key31": "4SqtK241UBvP4i611iBt6FamnYvc6szxWxHwmqsB4Fxx6erCW5jeNo17DDQyZRKxRYmPbmHf2Wra4T6YGcG9rHUX",
  "key32": "4qJUqgMtj7pPHxsJJjFuzYiDRJdgzrJMYqi9d5rXy3eW29xcXN8BYxYM3NvGU4fc9BQ4qZPQXAVMvt5KxYQLZwkL",
  "key33": "46QAcSdGivDxaVXuAf75kMMWXWebcdPJDF42V6Hpqe9QUTjdTjMFBuNbtt7XrZb7pPeVDfTXuvJjQyy9VtSaLq12",
  "key34": "3H6RbdpqP1qa4ZjHcHSKEyzrUt78xD9Rkg8SSTpLRCyyD2s2jp9VjhUXodz2Ah1aYwk2ERn1tJ7kafjTdoKhKz86",
  "key35": "2E75dvCM61KPZtgb5fcmPWY1Tq85xqZDPZeUiTuWy1iBo8Sdk2Wj3Ln3k52Jmw45UEGNbd86fnMWNkhN7CwjnX7j",
  "key36": "5ackWVonJLpoRpBVBL2dZUTZcc9wCtadRffXwpdEXzAtP9iX6PjG47eCAc8j8NCMU4duVMWqZvpfWCA5NnZX8ZGG",
  "key37": "4Pbz5y1yrmxM7mPEHiJ9QonmsD5B4FQDENvVHCuwMVGqfCmaHz1iL55hNbodQaH4NHCvVpYn5wQJ5j7yisNHpimb",
  "key38": "4iNC3VitZfhaTiKiJ4cyQVF15x2cG8x4mzkJ1A6HTL2uuXk6GhfVgL9TjSaAF8xkv9n7qubiM33v7oZqwJYss3Ek",
  "key39": "48Sc3x25ZsPhavKjxaQk7xAMyvNs3pE7Yj3Xi7cNCju5FAdm3cWgcMD5C7o96Y6gHRJnFg4sLGEoBXTRcMuFLTib",
  "key40": "2WXDuior8kTepF9ScD4eHaF69ZKKG9RMqS1BtqZB57reqmvp5t374HxVcDWmxLirN4Qrj83tWc4fVd9a7CKQGRxZ",
  "key41": "59h9f1bwrGbvDzXNRthb8Hturv1BTL7Ppk7Tbe76fNBkHTTtpdgsLRWSE6rnumVjhvqprE7QcZrGeo2HpaQf9Un3",
  "key42": "vieKwDZjug2t6xdkpLtf3a3JUzUir4L8HD4vzqeszDdNa8rsFA4ncnYCVQk6QGbgf8Bs3HT4XeVNYyF3a2FYx7e",
  "key43": "4K3QtuD8ojjGqimX5rkCPA5AvyR4DbfKhpskrHx1LEaBuwQeo87yNibiqUnoAYRKZmF443JLLoAMB52buWgh2mSN",
  "key44": "9EMZkxtYJbXKG6umarog9qpGTWHsnznnmqGAyUstf9r1JJDWMnz7tCP6gikYbBFqrSTwkNRgoh9HG3tRUNRU7gw",
  "key45": "5q4DQNF21oG9NdezodfTB9BBfGHRamYwaYft23Y1PjZT8mX1tQ9FrwccQHR3VeHVfxmk7zDyEsDJEYpXjuAAtBpe",
  "key46": "3Ro4k4dkDFZxZMyEYR36f8u9Q7vdxic3qfTkQ8qpox6dfcmPjApDAtDxbhUGdDrfcEPgB9hofUHVEEPSESAQYdrz",
  "key47": "47Lt7xEUDTAngRPPG3SQ7zJUSToAava4jqgauxTVwtUemEvPVTUqhYSJThgKzo6QiVABRxQAn1sQXm51xhNXiRBq",
  "key48": "4zVKgmTr2YfHj3YyhyQBn6UvPcKh7GphxsaNoerg31LbZ3128ihBVXydTdnY376Lj7VEa3pBAzQK5njgqKk5fcKN"
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
