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
    "5tScetGhdvhZ41XKEMnePBB1hqqew9tkFpMfCPVsoCRQ8m4N1oYBjQ945A9HbLnHu33xupRgx2Wv9rwo1kBt9G95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x6yRfTZ6pD79ZLBWTV6d16V6ezzQWP6JDhtCk3c9MCat7hRXyiD45Kbw4vrbUn4aWU8LKKZKTewF5a2qK4bWbLm",
  "key1": "2Egc76XoVc7CxukKRNcLkoYoKGZm45hSYSU8kb2ELxLpZ7Z59ShxM8Y1GCGc1V18WJFqVe9XyRHWVDxDMciia6jJ",
  "key2": "3pgzbEK79vhjcEU3fxF9UD393kJai6UFZtmN7SXds19tRcW9pSVuYSzk3xkFtNzcuBQH36ZpdDXw2MnrBasKivUZ",
  "key3": "aTrWSgQKKym7ioYa2RpAgzFRZwgV1VyiamPrfSBtsYT2iseG2TnDvVeYokbYzgW877x8wToAHStkYhtg7hdt1Vs",
  "key4": "4p5xx9gFQBfd9MHh2TzzLRnAhva9s6iFUjxcvKGYm182XeSUi4zU6K5eCNFzAUvYTa2SywsJVtAeiYXqPPDDuP7e",
  "key5": "4wo9xceZqaECM1uB9hCd7p5sQujvitgsemDdQatvZwDv8KKSbjrwDZ3wHHvc8kungDE8zmk4D88fy7GUhpgpRxc4",
  "key6": "4jiwcaFmdYRKBw1MXnyW8uaSq2idSLfJEmqjDCmkXjNFQYF8c8KGpjdNjco5QxcAgNGu3hxx89TmhdhGpvZmckMb",
  "key7": "3XPUn1TGYLmwS5xUNvxLmKoJmFT3mE2i2zrcAEpFakMMxgaKmtjWQKypN4hYB42gxXSiKkcBDsxiL6EHPtt7mXKX",
  "key8": "5HhPbrTrGEG5udW6Vz8vhnJ167teYjoJTmpGmFmDFbiPDim3X3XzUfS9jwfDTBN7B1DHhk7ytrvKgUmdk54k2hd3",
  "key9": "4Qz7gtLKALXNpPmBngXC5QShwLmCsR9UurbBb3yFN7BZ619shw8DT4c98sK7mz82scTqHfmcifYCM2iyyzKEcAP",
  "key10": "3svGhPU6Dt2Qy1tDfjv5NScsHgexGbEGgAcse1Gf8yWVWNskf6Ef1sXV8abad8CipdwP2F22cvoPFMpKzajFzcsw",
  "key11": "5h43MX32brn6oAJ9Fck8j5kTqBrKNxF3QoQeqyZjNYqMye313xUgT1kKnwy2USqRt9QDVGBmVM693cun6sGDfkR1",
  "key12": "2s5idLrfchzFGgGY8DR7qHp7XiCVaaesWD1xykYJVdETbhpFyEcJGGZvBkZNq69ifYdkQeFrwcRyf9bgatKBk7Sg",
  "key13": "3k349svCUqeFXkwE7gUS5RKHTjvLAGjHbv8d6VXuthBXi5CozK66bfaz6AHpnwBHzz2Y9UjFr9kT3btgjz8H4eJM",
  "key14": "5GUZPCAq2hiL4iTY6UEps3GmdK5yyinabDWRgN1HE2DowLJKbePdq7CkBoingDbUQwBu7MRerTAsArwTjQr7zM8m",
  "key15": "4C2UXwrfCCNJFrxPRaL42UfXcsjAgL3gDGYhDZa5neucjfvM95zmTHqTufkAuktXbrEAVLE32uCqwSaKZk2n1veS",
  "key16": "5bLvbcTxH5JupWr74V7xhViQbi9uxQy8ZV9hJ75iYwUA61AsvjWv1mqif3Eoxoe5SqYQGc7LFDFm2s2yBXo4e14j",
  "key17": "3Lz8uFp6PeJRnM3oz11n6Sz54osNZzDju7Qvw6FNXBASvHvKP7JVJXHGUaX74A8VYbzhwAmQWEXboqXgqnKe2Dgw",
  "key18": "6krmP9JrgJLn5p1WLk3J7WVecn2B5DX4MMtVwC8MEvgu51HCiSjoD5hNZKHxwrqWBYgxuigFtk4e4SwRSQZDic2",
  "key19": "45JpKjKvpnWwA3HD4eqd2rShEdSp5hyjLKavgqrAig5E5kypW6oa4ZVoX3vno7efBTAyBMGwiDsHq2qaG9Br51vV",
  "key20": "2VycGFaEZeUvJUwpDawHcDuQ5fqZj8AF6mJo2Jt15UM8D8oazHTR7kyJ6o8mm8gcGvTKFJNZ8X6wQLoCJaNQZtj2",
  "key21": "4hupqGqgvABKyVMvCDbjSRAbFm4P29gfNXzDJDdJRbX2S48t1T4aGBo4KXFVf3oAxkbbrEQwnvRudTCeK4BapHHM",
  "key22": "338fpkSfTZMvCDm2HzHhfNhd8hPuevzG3A4munRsDHNjdxZggmfTcfP8wmt1RPqYiz9FFjQPs85P6pNjTEgXpGqL",
  "key23": "5jKRVSNwdgHanprhgDTT9cYjSkLeTkofgiwY3jWxskGJ1zHBuSu3PTQ68DvkE7B7AyNbZDF3ffjBRGHhkxeXAsMu",
  "key24": "593xbMWD276NkmbbSWu6ZzivsKdRgSDZvjdqV5BU9Tw7eXESVwQ97PcpTLMWuUapsCdnepEUzrFfjYvdq5sk1p7M",
  "key25": "3n94kJv7ngxXNVnv8A8QWyG3sw9VT3gE5yKfCSmfp4bHo23FSJBBT2BVkjDpRuEuaERirJYaftrzGitYKTb8sUQn",
  "key26": "5t74s8GwqQcW3LeSRFuTWNL5dNs8uspWwVpBk9bgpbv3TwqEFDDJFbjPpgT7BYxsEgTYyWrUTQwL5YR4VdoTxZa4",
  "key27": "5xwNQmWQTiWRvqXxkF5AUoCTAdeCYBTnsmmmjL5bPD2c8ZLQL5jqjQ691GpN8x4mNAd6G5uHzJTg8JHC4Mmvjf9x",
  "key28": "3XCSvSFaKhdBCQMCYQyXEXLEcNUrhFMoyUMogT9t348hEETK3nPbHJhRmEFd55QCLXLLoNW1KoyZaL62ap7VDe15",
  "key29": "52LLByJeLBAgS3p7Lnv9u9HYxxT5mjodVEhE8rD2js6YaMUUVPJQmBf8BanMxqVtQLyjgcrp5kezZjHeQbp1p6C4",
  "key30": "2fWJ2hKNSCVsjWkiiwuifh2aDuQ52izTRnGGG9ops5zPLJbV1J6HvU4dPVzaz35SQhHYMDaxkuWFYiyUjfoHj3zM",
  "key31": "4hmv6mBYHfCZb8eUJeznPQNJUqQUN4eMUNxHY7RpCLQJSxuJutiqGmxVmFSSm59VqMvUmhmiVSvpGSojUDXM11dQ",
  "key32": "5rSVwZyaNB8j37k71CPGsFscu9zet83Cs81BT6WTGwrA4eAAiTuieYy6qaUAq7Vy1ZSLPXo7dgKCt1KdSJtKiGeb",
  "key33": "5CAiYMRUevL1AhiUTm9znt5bhW1Pd43ux2ASKYhvhRcqfkQ9zHLd4Fm8VgH1mLbM3DVHQ662yukbPEdAnfCUkfo4",
  "key34": "4xhG3Ph5B3vDTePNs4TVabSJWifwrneMtYo4H4XcQZQoVCq2jj2wcjbxjWT8SL9AwfGVdPLWjGszPCDaw3ZksTej",
  "key35": "54fpbLy5uzyXazHPtL1j7FHVznisaJ7vXWHCoGGqcQeBn7ens64AbJyQ8FEhHVNn3AiuzVPoZn1eQsn5XmFamdtK",
  "key36": "2ZSF4MxLWR3kCwGpRjpQHT62UrUkQp1zrBkPwNAwNhGVpWfmBrgApdQj2kjRQiDFpf1DLboJERJCmUHgERsmT1E3",
  "key37": "4nXDE1AVGe4nwv7gwSACYheSLCPxuYVJwu9T9QKSiV9spbyQFEwPiauY9AZjzWszqpZHhj6PGgbvenYEaauaUFSD",
  "key38": "2RrzycmW8LskN7t8dvCmGGg8483RDRRgts6YzE2BNm7j9KdshTJZpJz3oAM1tBSjgwiAuYAqtgG2QZPYCdELhAKR",
  "key39": "4kF4HEuWqRjC84qxqu1K9VgV2q5iu2nytT6e3991SYKW2k5XHcamg6LYLg772ixyabQvqTu6qC7T8P5fpBjDcq1",
  "key40": "3Dfg9UKs3J8m3thokfAqsQSqukbrTdbkgoSTsyX3P8gCDuL8fiMdnC5XFND4qkESgtMGiDWrPXfPbxESkYfxmXv",
  "key41": "4WXXKF9T8dEme3uSaey7aQeXNCmutQGuNBL7ymtPmyD2LKmm8NcAfXQiyWS2caL77uDu3cbFbRtx2Y1M313h7vCr",
  "key42": "35LA6bA7P7Y57abxdAfu7Y71HC7E4qodLxrL5JTwjxNdRC8UHmzvXLwqr3cFbW7NUdVZNwvkHMLzG2E9YHprnsa4",
  "key43": "t4cM5Ba7ZBa3Yzzes4T4tg7VfbSS9Zqqf7MscUk6n4WWVrd4pUGtaXN6XYH39gbS5EA7zfGNMeJcCwFkRpjYnBV",
  "key44": "5NtCQer7SC7Thd8gB9nbn2JnBjros1Bj59ewi7Sy1biYn4zWwMueQB3RfWnqgabc7inPb2PhLC84Y19W2uk3kifW"
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
