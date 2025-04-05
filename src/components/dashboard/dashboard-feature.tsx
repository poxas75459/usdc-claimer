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
    "LsV6x9J4ne1umQeW6uqFvpRLytER1ciR39ND12fNTP7aBDgjYHC3ez4kTWj7zGsszAtrm1Ja8Hi6zerwpmZicyx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ANQcZ5Ztd2D7xEVaj1XF5Xuoka8yLS4jhGgY6i4ndQ9Yh7SgucE1AukPcB7bPUsfG2JaXakik38s8sNEBc5YKKB",
  "key1": "5htnmbn9yBM6vDkYGn6yVHLAuuSj7MeAfn98kkutgXjjB5n155xBnudYF6fjgGm8jB6Vt3kTB78t8yhMaf2y7jua",
  "key2": "m6XkbpEJUL7X1vxPRFswHAhJbgKRebiL39qpysmqezYEqztNeXEmfbW57FYrGNV2abJanJ9o1KYmsLDcpgLm1Yz",
  "key3": "5XdUMWxxinnaVY363YFhhVP3EyddWZtQuCq9tNzuFR6kFSoQJFz9NX9uRVoqmapz6PfFQicXATE9MyJibv9vnF4J",
  "key4": "5B2eovkKMMdBKXajc85PuuvJDybnbWSJj78mqP2hmRrZ7aELUDsRY7eW9Phcc34AiZcX7WJn9SNNHmEGri8mjiDH",
  "key5": "2rgnJPphAL7s2ZafpGPFCR6tzyBKWWNhcUCJNzYQm9Box6pD99jbtUrbsoq1y4UXJy7rBmi5d7UFcrtvi19e4QCX",
  "key6": "24MZteQMMmCM8tKqTVht3usEJMk5qjLEGsbZPLFWVaRbvTR188CVAFgELH6eKbHWEgQeqXT31AyUmkGKnfwrSZaN",
  "key7": "289unv9cnEvLpXWfgnZv8YGxsHiabJMP6eVAUkkhBRgsGCbUhQNnSqmk9HFL4sYXv2kNMjnyuAyntzDoamYj58n1",
  "key8": "47YdXA82e7xbSk6hNoHBbCpsgMS5uGJD6UD8PL7fbUtyjr3SEdKixFvurva4JQsK8ucRtjQ4iyvLpaiZ4GfdZbyM",
  "key9": "38GaSaN5PVfC4BFhdvznqSXFSxDJeDHwy9DP6tuKyw8JruLtQ4JN6Lx4NcQaeDjmc4hv2shPybqQiZNh8doCGXrE",
  "key10": "3pCoEXf6CaDBddUEVjPcuPAcuLFR6PQUFvpQVMaH3k5RCgdYNFBFxHDNqRzuogNUuSYyhuQbuB58dMhDZXZGnqiY",
  "key11": "39jnyPBwdbVcc89MZYLmjx3hiXXSKpEvRMKqPop1X43MirWFqx8zNHAbfgYXCHurAEiPvJiQFSM9yTjETyEnmpbK",
  "key12": "3LKhhERFRkkNrLYH539fKfGni6a2vM1nRtNfZjBbAKPui5vCNhw4UZ3xov8jVKgJ42MA4LE7Q6bPbYuZCztK8aAE",
  "key13": "33p9CSfUuDh6gsyvqUtEB86naWtgMR4RKVELTuttnTXAmjZtyb68C7rLLLBgMF3B9CiYbJn4q5GbVjvwJytrkNG3",
  "key14": "TUVyByM2iP27PDZTetu6bDH1sapVYdizndpPELBHeQdzDPpcSm5v7yEvwzR3tuooCpiuhx7JRoMC2ov2PjEigiy",
  "key15": "4Pt6Z3CX6vGNWDL6miA3WnQS4nKzWqDtirMXGctcWSg5irmKHSexbhYZLyPHbq6Mp6TZJCWuHE2tZFJdUxmJwsQP",
  "key16": "5GeH5R1yy1QWHXJxYJH8ZsucRdEiJsrtu2ubDkWUn5jjcNpapfVw4Fwu7Dq3a5GJVhHhkqdS7UmqDWzDfE9uacUz",
  "key17": "3ibWm19p8VtazngUd6bLw4wVTeCfPDYSpzvoh6Jv2eyWJC7J4tdXa46ekhtFtkskGiMiP1F6zLYjYqJ4jfZwfUTR",
  "key18": "3n6mrEtiNkQxxUvbtdiz73oKRvK7HYPEyRpR7pJ5MnE5UbAMV82g484tni49mAyudik5aurp4iEbbife7dv3RCjA",
  "key19": "638xHBDX1qw2f8v8fMkx5ygaeejw8qNRQ7WTtuVN4nPDkgLX1sjz1nkQMQooDb85XuCeJ5fDrNjsvb5GyvyEADkF",
  "key20": "5hxJDj75nZpJwPc6Ybm7Q7LYw56uCBfCieMKjjwuhxyLKBrgB4dqcVse9DSdQVHKBr5ovcxYCNFMTJBFik3hT97y",
  "key21": "5EX6YATwRyvAHtYXLiEoUZPUNxrdsHfXprRiMb1A24nA23GiX2CxYPZChz9zVTmQ5av9tUoHcroXkqJPhuK2MiPR",
  "key22": "53kLgjqUCeuyskcL4Cefbd4RnxY4PPo6rmJeodBAXiFFe8tZAsds2mHa55iFxrntoDuwGuRtg2u2viSTb8vWPkYP",
  "key23": "5wf8Hg6eHDLXr5hjeQ9KBDtqvrXkpmEwpqXBV9X77a7ga8Jfti9RQRRTSb5ng3BjUE133BQq5HtSjzBCa2VHFVYy",
  "key24": "2nwesAv6efpgUbvSH96cSsQqTunATMNihdKydQm5nv5do2oKv9vy551x9vU51Q3VB8CovLdEqSKfM8wpAtPWc6Ee",
  "key25": "FewyhrLKH1bTzqvKLfYbNSyFwGDVcvGs5sKAEtfis7WJH32R6KFN75rVQuLKt7yKXXqmRnzvBuFYaYF7FpnxugN",
  "key26": "5Uo54yvhTUkstH5cXv8qqKSraimXKVKsde6fdtjYEi7E5zL49FvMFT38iVbYHN1zACKCxcK5zmfqn5zpCcmhwdRn",
  "key27": "614npvnXdVBTUcnETGbzomtJErY2vA53SkrhSwJYsP3LArARGh4TTj7FD7hrq73QAsaWAbU5vEghoKyGNxbDbJNw",
  "key28": "2skCRdQDmzNZk86ksnbB2wb3Axrmnx4skWouw4N4erXAtnbYufKfdyMvFGRwiD3kjBMfbewWS9ms5aKHtg35xUcB",
  "key29": "4q8HnE5EWsaZN3qQbrEgtpwwar7f6T3otJKrZn1ECjY8Pe5pxpm9sDgYC1YKBH2eW6g1Whoopeg66kgKhJKirRyt",
  "key30": "2nM6fcuNheQYiiTtEuwYUCkaYDPxswLtURXjf6qvhX4pyPN5nTUYoCLfkCxq67jGZAE9Qx1VFCLZDRGLEZAwMGjp",
  "key31": "3G7kHWvecoDu7y6zni1S5qzuPhZfGbgRaeYCgfuewNvwLg6gy5wsL12YMZTppgbkTjcjwQufVEYzG97okqEGUJm3",
  "key32": "3VCHGSHGDjaSwP2AwvfCJvcMiZqWf3f4ay87bbBabwbq8YwPh2b844MJjyeDD66ZapsUx4mSjSRXC8hiEsR7XYFZ",
  "key33": "5ny2ATsu4xnm2fPz5UkNPr693ZwAwKVV6yJjpqexWaZWUxDjkViGFZvWZNG6dfKnzwT9uwqfYLKdqmPDzK1r4pGz",
  "key34": "24hiCY3mV56qzHVkfwS2L2oFoz6MM8jwYVq6iuK3UctuPU7X5Q8Wr1zGQthbSm5mD9vngWPf9vYEQyD8CkRBo166",
  "key35": "2p5hQsYSeb3qta9Ei1fUcXFEft1NpoJvS4bEGZBXMXSHMN8fByENAHhKfw3KrJDFdVsc3PqVpE9tfysbd47fmyCR",
  "key36": "5a3XVszuzsjbdXWEJeRRDnRKo3UL2HsbNCecgTqY3Ub9Foq2Np6wx1DxPVoXiqj8DZtCysbvkCiiKLhcERMtFgec",
  "key37": "2oKv4TckkBiRFosDB1dmz3LeM7f5ii9suCcuzTdDhTkKfBLyAM6ptfCVKVzKCDtzoivqHxxugwcXdbZcQtvGXHwT",
  "key38": "5mEjnhhhwJhvuCoNPLNiT3SsgjrjcXRPGbrbJdgeX8ZjJ1rjNQExqpYR2zLp5Np71JhfKC87grWkroL88m4oS7Bp",
  "key39": "ra2Gte1AeRPSSN8qCzXkYFzkz7xGz4UcMjuscjdV69Mh6idP1Duu7zvLWYqPFBDBRtEkKKhdbhCcNfBABKvvnZB",
  "key40": "4t6RoLAC4Lworj8MRqB3qzZHPXWsPyeuACvtwSuGcvUgs2UmXkt2msQsUBCC5QABDKF4SYacKrDZ3CyafKv7mh95",
  "key41": "5eaJxmEeEUxDCaqbSz9ck4pdQCgj66QMmyWJFTRWaGrUMGzSzctgfSCAT3Nijt5ezg2nbFzNjVn4UREDgEp5AuHo",
  "key42": "Qs7N9ydwH26bXqGttZAedA62HnSWXqsKDjntKy1BhBNif3vrBSfBVcvM5MtWYfwirHDpsCeoetYmDgLUYYnR4PU",
  "key43": "aT63dGg57LKgitPnNCKffwQZFBsDM8zDtZFygS1h8ytQmn9qkaHttKroa9v85eyX8FwHY2B6w9aS5PhaBgKgx4v",
  "key44": "H68mZTxEbVQuSVZkKerdfxg36NWxBKCvvdQzw21XdF1M8QLByjyR1YNqgs5X8uxsWkF7KyXJrH7T8nvNroz7piZ",
  "key45": "4rUS7LoWuPukr8oVTwYHQV9R53uHzPcns3y68dNtnmTrM1W74Qj6jFP4r5mBdh8ZSiTWqxqfp1VKCBG2aiTN4XZ6",
  "key46": "4UNRuupWnkpDovxtHBy2bQBHvfPnMh4mwRkAFhFJ7vV9zG1EPEzmAfxJ4TxawmddTgm5qydMCXHSWZKra5eTraFA",
  "key47": "5FYq4AfvokKhVNrtG8b1664JvgMwWwbBCokDpGGD9UaNXJweFuuJUeYPHEtR959peXXcTRPqZp2iXH4bSY9ZjdAN",
  "key48": "2sWisKDx5CoNpF4tfQMM3Zg8v6bMajCTXHFK1iQ8WvGXWaq9Eut63KpSCcVs2CVc7vEYq7yYfLgdRNUzAtqNv6ex"
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
