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
    "5kqf4UHEKvbPPMGBwwRjmGFetibWn22t8wEPQJXQdJhLkXDJFxpFLmsfCjSxmdFTdR9mkVSWnND14aU5E8wLEhpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29NzZ6xxkQgVng3bt62cb8a92bmtSpeYXmuoZHdm4zz6WmMSi2wCpLWGhQhtasiNEty58qRsT7ZFX8hVhBLxmZNt",
  "key1": "3s4ByCy5sYMLtnRRLho9Vw2fNRA8sJTzZ6ZyAf29Djv53xdaJhyiudQT1dQ3YisX41LvSXgWwPD6zeHG3Y5dh87X",
  "key2": "3yfFxBRynsQmJfBcwfKuS1B35TezyjnaghoE8YmNJGKW6ckUoKshfWcAAEtRKgq7VHC4BjjJQaW9fJgekLphQxPy",
  "key3": "5wcktpeYAgTskeN3SUG4QcTFGJrovhT12TdgUM3jhkep6fhB8nwpeeWTxkA26W444q7jgD4N5YtppyPwnYNR87QQ",
  "key4": "z3iDv3chhG5keAFngNt6Yb2XtbL2rX9vUPbRxWueHJ94aWpSeyyx6B45S5ULVCKS76p7tRYiUPYYZVqwT9FD2h7",
  "key5": "FAnhtuiH3xkmNMJgyZrLAuh1oyDGv7pVWq4fqsudhAL3SqEE29n2MGJmzbu65bAtrQu2boiiYyLyQxMz95iRZ55",
  "key6": "2CGFNTkn8pfdSk43qYXe15XiRC9L8EBeM6rFVfJ2EodX8qB2VuWTikUhSTRN4uMSvCQe955okUTSGhXLVr9KACtX",
  "key7": "5HHH5QjGV8wya2SANfNh4Z3cG7NrvHUtfWYjMnJ6eePuWTfo7DAweEzrQf4b788ZDtJgjb459HSoC1yB8cuXw166",
  "key8": "464rb36jyScqVJcCf7Guz92gz4YphqFqHARm6LzCvqVwvfmh7x9snwkEaaU1RA1D4UR8JEoCVrL8Q8VR2iHB8PXy",
  "key9": "45vafk9wnowgMGhy2GZLzaYsyr7Ze5LkuVD374htJr8SoLNQtQN3UVE9CW6rDgRZxq4VK33T7SackZXaYxrQevEb",
  "key10": "64LqRtLv6FcGmTg3FPGPzgJrAEiL4jwKHQmk9JDnoTXznX5Fdpwp4NCheeShxAsgEkUYTUHYBUePHBDoNhwgvHap",
  "key11": "53Rx5mf2rmCVDRDLRbqtpAzKjMoqegwV6QQEnAymEuvKd4jssBgwnZB64za7z2taafZiUHQMPYu1y7KgUumeHQD9",
  "key12": "3hGpACgmpmVz77cSZ6Apa5hzsZaamjLrqrwzyFbTWANotTsqvCgorphBDwyiaBrxzAknCSt5tTvP1fL8KgrsbtxY",
  "key13": "3Tit2YpKgKzMCNnsYK7UaaG6kLK3B15ptJoYEymr5ECxrQMmhcRuJ7o63F3hK1WC4SiVe9gjyHvkwj7Ti5MKndY4",
  "key14": "4siUtxmdHHVasTmoP7Y5aRP3qwwv2aviAzgus67X9kPrhNwa3FdcCr7G2TbK9dPoQhYLiResf61XvEBDT9GJWebs",
  "key15": "2ovGdYnpcm9yf6o3kEsikoidbrmyNEqVWguisw45Xj4sFSXcfB2qFKPjEAeZsGEzp1khKA5pBnCEcb7gXHvFMRD8",
  "key16": "5htt5wdAZ2fpoZc4xU5Q4ddNdcgV8bPSJmDtDkEnGobcPcngstwfCX8BYehP4jjXpTL1gYvqZaVeqVmRyFu8bA3R",
  "key17": "3nr3pMznX22X3m6jamg8dmhmm9UDPc1NZgnF15wA6JDBnUuNUjg9hzzgCNxjzSvLBGnQW3osaCgD1HNoHH1ti2Yv",
  "key18": "5styBpLVeoiQPv5pueLu6J7Vvj1xyHxMJH5ixGTK8ycezyBN5vDAxq33Evry8zvpRGB3XooahVGXW4JUmNWieyJX",
  "key19": "C4xq8LpWTcsa3Lnas1iHnAHe67M4Js6YCB9zYWDrnBDYrBfcHULcbopYvK8kp19oGbudR5duD7oUQC29CmMQVeM",
  "key20": "2Uzmz8AJQpJqDyVWpXdhq14mcoQT2DPBxrLtZ6gcySD7AwNtN2FznQbssX28dDWyY4jkbPWVfFtDGTo8EVddz4dS",
  "key21": "4xNb9EtcXFbUBYLGDaEdnUaF6n7kiNvc8NoB8fkD42JAzyT1Hho2jETAaAnVWW8zcTofomh5UBcFVNoURZFNDwFF",
  "key22": "39ikJB5nDBCPhfk5e4b8wQFnUYJR2e6S8HwGAk7uzuDiHYLrtH1V86SS2pVJk2JxD5ETCFBXGbeBD22Lfx8t49rM",
  "key23": "PJja9vKy88fhGSCdvotGYTCQkzBfThuDYpwx7F8bqRGCi5Cq3g6YpPLFf6JGYbZWzMnHri8ZobAesLNSPG9KRh9",
  "key24": "936oBpgnUGohwc4scLmhRAMjXdzdcSUNyTFXNjZiGhdGhwkDG9DBm4KvP7H9tiCyKg6BnNH3aaUUbpMUaRVGvpX",
  "key25": "5hLvF3yMgs5AKid7RxcGbZo8QY6myB8uopJqACbArA148KEk1u8m1iDbkdrLmzw9CEY2jntJDponemDnny63Tn9Y",
  "key26": "62LWvUWB82vu2RTydZGkNGZqkX71fL1mxc5zhLcCzfrqLpAiSNZy4GZg1PxiTwEcyQ6X2P9b1ZnCJ18cHknvu7VY",
  "key27": "4mLknTEi79eSC83VC8doENDmeQqh65zmXAtNe7jLyBpa187t69EMzrchRUZNSsM8CvPbFscEsre6xePCNxCvg14u",
  "key28": "585rJsUABJFJs25GGci18swf7KN2kkdAY2zCwDwjqLjj7sZDEZvAJbGMyxJQozxkwjtJVF74Hp9nt1sn2KUXAyoG",
  "key29": "2K1DBanU2hRzp5CtxP8QE77bSkPqPLTQ2jR3kYkYZJ81xJ1nTf7LDTghzDrBbB9ShMY77mZxAhNb8eLEC46Jfu36",
  "key30": "3tR6uHn467Uo7dfZAWnfnVKN9uPsvs23yr1BdGE4H7etk89QVyshGDiGVmkazidmQXdRyohMiyh5tpwcmN8ew1Ta",
  "key31": "5Z1Py48kbH78eA1xgL9rsGbcGuAyN7mWyEREC9v6diHYuZftKLJkGN2Xe9GiEgVTrRJsZPpJxHLwRpoJzxcuagdb",
  "key32": "2QXDGur5or2kCUuik6DAswJfEd5Lhc6E1TXtNBzQZrGBb7vFYSqHAeyxvFqQzoCqfwQgHbDEX9A21G9W6smRDoFX",
  "key33": "5mfZmJdbqBffnr8jdXqJFxYvLvc5xTg3DtmiujxGhVCr46APf94bnHJxBPkvJ9XbySk7pbVoECS1P18ZckhL6Ujs",
  "key34": "24WPYEqYSq5oZTiqHzSdUyjaFzg5LSPEL6jhwtxG8fvnbzbjZC8feUaN5krhjyC1VjdgxU2WD3szc31GZiUPR9wB",
  "key35": "RDh75jGy2t3wBWvYLeuYpGhRrU2ath6ffRUYY3H14dAgKwReM2Vjvr2i6KViUDBieXUYziQNGEafgVZ1scGoP8E",
  "key36": "2T2utzQqqMx68jzrJMAZTWTXo8LeHcNePB5BekQRvRwKkHr2E29bnBDrqh6CVNUcCfyuRop8gsGfKBdFtgtRnNCt",
  "key37": "tYgDjCjmBm6GmNWdnJTdDcdCefN1q2hqxBVWGKsV8HFaHkVXp4raiJyqtrpwRQsYBTQVrkUkG7rmrnhAj1v71mx",
  "key38": "4mRAuW3o6Ud3QRJsECGTCE57EUCx1m9LUe5zLFTEX95nVkN1Nq2FvkopK8qEgX5TLjqommDKWqiCK8ReymGz7EMB",
  "key39": "5AJ8WumTKNWbbpLS1pPJJXMnF4qPhR17CzFh5Y7yD3Vc2hrNvhw9Fd2YBtweicF5BRAiyhETKMEH5J6SwfwEBpwE",
  "key40": "32mz6VpXwnRARsvsa5GfZp2JrpBDgtvbVUhwTQkZXjXzyiXxag52bXcQMhWY5nijEsjMnPgmfvDVayD6zLiNeRCJ"
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
