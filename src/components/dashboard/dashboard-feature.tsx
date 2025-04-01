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
    "2yinaddSwu9zRed5bGtpuiSV9wjAf4eT6C9THdo95iihBV4H7d6DM8PTJWX5S35bpSK2NHTDgaG1nmiTAWg66963"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u8B4WNA2C3DFs3YxMHWu6r1Q4L9i8XuJFk1nRbzcv4ck6G5zunhRnxC12xArGdCApaSzhiVfe2sXTE9CH84iWqm",
  "key1": "4YH93JCzY2seYzxqLhBhqb34rpDqJ5YWf9KpAjwCTAMZhz1cdDEdg73VDHBCVt1E6oZieiNtwPRXAvu7VawSkdou",
  "key2": "3w44hBc8HKUVAkkgZfDfPnMbFZGUN3jhLYSmm3f5DbYNbrJHbw2FnkvYNSfxcquGtwy1fd17Av8MHrqBXNAPEzWu",
  "key3": "qWGt9Zvgbqn9Jtsp3AbbYNdgzXpqCBQXALFgBbZVYQ9iECY562KbE39HJgJHPhY4u6e2RxqzNq517SsKaB61LmA",
  "key4": "3did1qAFKY7cHeGYhnyCedHeAqHwC6HfseRGtLk4wBYUypDLYUsNnofNnNmdNc2VRQGmB3Uo6eFxGvxeZE2ucvfh",
  "key5": "vLLNywgbtnms9JrK5tMZPAhhZkujGwPF6thvaCHx2Ly6ike2Fg3i9aG4UN2t2Y2MvQnpUhLj2DDaHT5NA85ojHF",
  "key6": "3QrzgBBitiTDjSGBRax669N2KcJK6GJcnxod1pyBfHJpLXWchk3H7hJ4naW7igeticXPRsnywc9vHuRJw5QbwC12",
  "key7": "2wU8gpahXmGoZr51J1eyQ7vD7kFSzk8YfWiCeQ3HbqbGgfwWvcntMxHJ7z4dwT7ay1bPTwf5La1rhyjYcrKqSnQe",
  "key8": "2kCvP71rW1rHJMDKrpZ3S1inWAZZjLLnnZEFtt1Qsc8PpcW9PrszebhtSEfTJe53K9GHSx2p9jZkNVS1cHck4Ttc",
  "key9": "2qVDjzPhUGqiQL3hMH8j6HUDQ6dMCWi5hLgNHFWSHDqZ2GXEBobMcsjwFw5T3WPSyeNnJH8bdhCskqy8eNCRVMa",
  "key10": "65xrJR2J8K4Fjrb9dTGTPQqgaAQwogS9Vz8hiQXHLE27bggdKx7X7XLD7b8dQUBvYCsjSUFeDy6aLthwtfvtHQ2u",
  "key11": "3RkjkRwnXA7NqcLCxAGSXd9QYb1QLdmWJtiSfzKPA1G4T7cWzeq8kfQnkdpvxBpuPe4yf36yEb1qTaA4266XE1wq",
  "key12": "ceyLk8RMiDXrTRR7QJr8qroPEqf3qVfmap7PhzuADknZa8HqcBUDDEpWn87DKSrpBAD3Xf49Co8fcazTbmq52JS",
  "key13": "2riiTZ8VCvHpv81xzK2VuA3MUzJgikP9oCNngymuT9DS2kKpUAqD3FHejEmX2erXUfn6K5W8xQjZrXonsP8rXMrr",
  "key14": "3v4jsQzR6XrpfFHs6bU8WzArfgykxwpcfr8YNyivr9frRtXBdZxfm6ZGvcM8QdGHFEGLw93XPMjjLqGS7R4HWzEF",
  "key15": "4DraG9exhXu8FxNLZYuBK2CNTjsMtMvrhWGvCSBGAHh5NAkAJxSpjJxXWs1Umj4MMTN5cLhu82yHTRrhMkmfJxSC",
  "key16": "2T5L229Jfu4yoRjzG41A8cnjhkK4Us68ayoAJwERp5GakSngqYrmge3241jsU3j4PR6Vcfg3aKzp1DEYancz4mTe",
  "key17": "FDXcUWNjCCk28ZtRaiYFDtqRwUHDVUMXgbFUELoUXgzow3XSDCx27GyARofMKAduzSAT7CCJfRfbmPf942NLRJQ",
  "key18": "4FcsNTdZFVRDVgWM9QPuiWtz5CkFXUVu6Bvj6R2X5hJrF8L4air4nXksXwENn4m61GQz5cGi5cxZzYe5eXpzm5Y9",
  "key19": "4k55Aa1Haob667BM4FihWVKTZjmpQmX93k4QYFbn1HUVSiFYLG6dNg69y3iMmtcaPVT5aALLkpfGxP2Ess64WNy8",
  "key20": "2gc1nD7xatZkBUccU95yC4iLQQ3ZNRqHRZjT6bn2bPzMCkNcaJxsJmw9M7KbkCMJmuYEKkNXqvknmcmw3voJwCSt",
  "key21": "38BFd1fYznR3JGD4vmgjh4K6MkWgf6HnzFon6YSnUt5EJmFe2gHMVyciZk4xmzwgtBiuWkQn7bXJuihoxzx3pRL8",
  "key22": "2K6exQqCuYMdxJg8DLaRnbZa9ZDbYb6hfvxLNstEoqbEKJc1uH7CsCqA2gEMVyYBtPgq2FmSCh56WSW7X47wgtdp",
  "key23": "3uXFkyeHkX7McrY4i3L8NFFj8JrJHUYkLsTorxReww2tLKUNmzE5cpDPBCxuyTM6acsMjT9uyEN9MeC6rbBCEe4p",
  "key24": "pwRcNA2AfHXFHX3E44t732puwyKd9eGaQcURaxURL1HiSoKTJbYz8Pu7yZdFBF94Z4CDGC4YALmAMA87Xuc7wGt",
  "key25": "4n9yVWXch2LUnrm2p3N926dKsrnva8zsuJXYbqmHDAs4p8QxJZPZDLjwsQNqV2D1DLGaCn7iQwxhypPEFJA5sdJV",
  "key26": "31ffeXhEB6oXMscEfawjP1Cr6WgxsSddQG6Rh3iZ5V2fPpU74dLhVWnNNBc9s9QggUZCwpd3qCZZcWrFaTW5vtv8",
  "key27": "52HYnwiXV22PJQZqDkkmP8B6LapuQBXsaiTcmt3LGn7F16f4FK38Qcyrpub7Vum6PRtzCabXQN9U9eRabFdvHHxp",
  "key28": "2xckX2GdacxC5V4WYbLPE3LBKf2te9o55dDu3UdZZEJnu9bxiuoaZ1n4Fn2ASaBYGzG5KKzhp7SwysejtDnqJPki",
  "key29": "4Cjp8FHzzsJp1ZjJRyLNmjBd5EsMpr4JTPdp8gL6TQ4U7cDvZJhNnf2jzovaVVr2nzUcBAdGotjbYrjc69ggjGKZ",
  "key30": "cahG345PXaKDpQ3B8cqYuZCQRYaojsU2TBmcFGiYYhSbyDbcbbmpEMz42fVTbqbdfctriWwoopoJ8gyLWNaum9N",
  "key31": "3P39R9zbTT5E7tfVsa7h2t1YzMnHriJm8aw2zuEmxWeL6wYXM84xy13yWRWjPqfSe8TGmzcHjkiN2HQFxFykU3of",
  "key32": "P31HvchxfYSCESpeXDBk7Rco4v2Qtv5SbBY6FYsg3nZgnkhJX47HD9Ro9kyjj8nLK9vaoeQFu1PU3W6GbvBSXNc",
  "key33": "65GuFhCJcQiSqgT55DGPgxjGYmmVo9WBP1ieVyKzfeQTo2hH2NSTBb9hHf3nvindfh5TT7yuC9n5XVCqrKhQA3om",
  "key34": "359c1CaE4VeC8dFz9W5wVpzqdX8wFa84nGAJ5jaShwkt9czp89NXGSHAAn2xbiGMsEseUGwoYF3mV4yDHYYmsFsH",
  "key35": "bbuLa5eoNfjZfSGyNUpc6T13ndD1oJ5dypFPJPEUf4EnPy6caTEExkvSXRp1Pza9bPM3QojUAwUx5knaCYS47eS",
  "key36": "4pm6DUytkXeM3yxLncC8kLtENxUoQYadRd7kTXcBmrffzRcSySySvD2Rtgzg4VZNo36ArAhGc5pedzo8oAMXdtcu",
  "key37": "5fHh29JKdFK4o5QtZKen5aBrnC1bniw6ZHoVvo3PfJZdo5aFgvMiXzRhcJFqL8m79BKKG4YKbK7yc48JaCcagfge",
  "key38": "4uExCQS2viH1Q1JQXziomcU5ZoFnUVqnrmagbaLNVcJa55RAFYHGKmoAUvZcSdVmpDhjbTArhV4FQiXkFjAsmmcg",
  "key39": "waJ5UekzQhpEdtVfSvc38rHBZuXFsn3rVMazjTGe6rjV5xBY477TjhLTNfrnzsjzss1r6WcSUwzMPcZAextu1Vb",
  "key40": "5y4aBwtYZ3ALEs1GJPfJ1EMJLLsWhznNQFjEvrjQ8aqok8kkMMgjx6g6RjS51NWoc6e6FHpdyykyE8De6rn7a6k5",
  "key41": "5ghn6PJYM8LpsybQMKSsTKHVaRbTViJEFJ5LEFJxqxvP3kNtXEE3BdXt8mbYr3EbPR9mSdiRHEJ7f5qkXFyGP34v",
  "key42": "KZ7gENnVBM26VGmsLu1cJNiLeTrcNEnBNKA18LVduVTAgiN7Kjki8zHztABcTMppcLpgMWQhgUWywYSsZdauxuw"
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
