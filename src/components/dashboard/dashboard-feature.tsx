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
    "2CtVFJ3wNtVKbsuErJVbkCcvf1wkAgTuUKoY8NzXLtgJGspDEmd1u7kP8m7DsZ74BwUgKoLo4VPuy1rqB8akYBMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VrVpkpyC2WjwDmjzCEpv3ngE8dUSVTbqweN5hpT9VrgDJLYJNekPfb55fwf4RSx5kKDjt39FTTLWVqb3FyPPkg6",
  "key1": "Ys6GoHoLLQ6L7CMAypqqGQRWEC5H9bc8gFyhkkQkUuT3eDoxqshGNe36rJioaHFjy9kZ7SrwSaibVv8DWqZrxbd",
  "key2": "3M6Y4H5YiFgUkmVwpCF16UCLvuzpaw3GN7Qr9fSR1QXqfDG8FjLDotCQZDTuGZi5AhjnoAyKpsoKWWVqBWVafm95",
  "key3": "56UyNv52gssL3N4h58tLamGeDb3J1NU3AZeWs9mUCpMf95e7EQZVBEFr1yYx6Mwn3PxL9UCF9XjDTzdNgTg33c3g",
  "key4": "22guMJtgcurvpVhmaYUMiZK7qzwwFSnedFhQ18WtPBGFdgLAT87AarrsxcsLYWPh93gQh2kzyrqcwMv2XQhExCmG",
  "key5": "4Bk97jivXvK3gR97NAn6EjEy33PcKuch4S37jQi3WMz6bJ7n5wyScaV5jpQ7mhkENdakVRRCmvrb4CJzDnrZ5CYa",
  "key6": "vetVJiGHR5sF22VZMN65S8Mt4tsHg24CrLwvsDEtxEi16MHGKxhZwE8JB2kRre6xb9eRUVn835PHBV7RKiie6rZ",
  "key7": "o5kifKJmUiUWiP4rD9Py5dZ3hHRPNiZXMaWcXcxoLmJbp5ytnwfySFxTrgTXFAuvx3kWhSfk3Ne6Y4Ugqb1RYsE",
  "key8": "5zFpoSDyysaC5HrknRYkt8zya4atWUXm4vPvX1bL6PbHvtwYNsHWXQPq3NUpkzQi7sxgcVN2NtyzNThQ9azZwvsY",
  "key9": "2GAVqsuf6JJjSLuBLuMabQY5SafZxfGjezBjEdvAjFk9gHpcQsmk18N37VMc2PqeH4FpYPXY6KQaomvesRpFYZDe",
  "key10": "5Cv3az1SW1qgywME8uxgRsg42LmrpsrpdB5DeeoH226KDb8cKoZp8qUNg48bx31XyzcbbCW9pFtSjVZVr1eJWK5h",
  "key11": "3efgz3TfDd2abp8ei3vDxoL2fJqnLfiKvQsYKw33hFcWc1QPiBKKvR7fPhASX9tKD85SNxZp5odVQyxV154RnwsV",
  "key12": "2pVhHnseDFuBrx1BvbQ3C26YjzHBpcJfe4U7ekHdRkF4kxBKYew4LbMLzzaLKD3bPt8jSx5c2wxGzmTgjizgSZUA",
  "key13": "21yKqM8UpTeFDod4pPvEzjaouPxbzWiSnLMcHfmNUxN7nbJy69LGnGX8hQDMa5r5aoL4TC2JwNbYYQ8pWQcGXZ3f",
  "key14": "3UaYmPpjGjKzzfeDCHAPbzwKXZYFBQSUw5o7CCpUE6pKmWBbh2gegbspabTrrp7HP1tXfuF5qnvbinJhwBBfq72e",
  "key15": "4GqXK2uoGKSG7aEoZXXSsZAyVynbmsWgWELyScpLzR9TM4ZMU8dhj73nJUHSw5YrS5ELttwCCuW11uehgCUSpWR6",
  "key16": "5pg19vxs2qBafNJh6YazWHgBjGAaUK2zS9mxLqbmAwYMG7dwkZVuMvhhpE69wPmWY2wVErE4yyYbLVdJQfbuNTCc",
  "key17": "2j7zfV7jVydnAsVuL4Q4mbstnqj7fJE1JrQxEts7sGURSoiykR6G9MrHQmZe5zDvPAHt2kneR8nUVkgQ8KzWK2dU",
  "key18": "3megcHxstVK81s7TT9hGC4dsagRCJ7L1Bc6ngFrY6yC8Z7pH7eqbPU1sjGyWDJBDhMJpJgQcny5FRfP7TA7tMzTb",
  "key19": "4J725APmTvxDuR6BRQh6ApY3t3wYFsLeHMxCkDHFBZnNWfxx41qeoUvmLS8sJtmmLNn6jhDkcEp6uueagmTgY531",
  "key20": "5QtvFsx8UQjbD1J3RqJ8cvyayERCt6qQVBM9wji2MrdwaiYqPpKtULKq1Wc1gsnobeA83g63wphipt4zacZR1Kzy",
  "key21": "x8H3UGzGgg6N8FiWvdLN9WQtV7WdirHp72ejp1ADcdXHaei9VZEdPu3npuZKvKofVMvTtkPhs7P1proB57PTACj",
  "key22": "2NfQy37C7mAdRU7WawQFgS1qfLzHDyNwnQ9M3BBYxz8pywndGbHravCe1G84L2NMqZjEhUYWA3Krsruxa4sJRV7z",
  "key23": "2yQ5GQFG1e1pgs6GNjagx9si7J91F4SFmiUZNHhs1VwfHv6BqWyKfvid8QQofnkr7m89hGdoc6DKQYmZeN7Lzsrj",
  "key24": "5Ew9iQSzTUuiWteC5gLjj4pF82ZZxt28hRyjuiJ3NY2hoQoPoVwdb2WhvY7kKnjtYFACAYR49xEhYBDXnUZYLSLE",
  "key25": "2AYNekYskRSSurusWe5371mwNnECcPqLRRe6uyQ6hwsm8YzvvyczGEBGmhUvtfWxAtdJwMMRm9CFxuzXhtF3kR1R",
  "key26": "3fdATpakB1K4QrxgjDgs7g9eVDcLsLX1tUAPDmNRwCwb6ZTnW2vtsub9LXN17LbHBruT26cbtSpVm1XfxWuW6eN9",
  "key27": "5oFLHvevHaUSgrF62NpfAjj2qBazsrSqheidtVdWputAraV9wjt3HtpxXhK3AHia4hDjErLTb7qjzaZrcUzfZN25",
  "key28": "42bo13MfU933m1ysKiaNA81VN9BpFE1Ryf7GT6uwYz8HLSw1K17u2SL4cc6FCcfY1g4khSLnYcWa6TJce82Z3tD8",
  "key29": "2hQtJQ3fjUQQJAuWr2qX7TpFf2ZQ47dH4oCcDWmXXySMFv8cuz8zx6uXnXDUEdh8UqY1ZLqupheVnivFFxmJ8Ye9",
  "key30": "4PRyopR2dB3UtGV1S8cPaa6qJ2BqCFURmYzCCNKn4MxF61cRYc9gUHCmXW8bf27GsyczwZUjKs4x7VLURztULqcy",
  "key31": "2BAm932S4Qwg1fiFuKivsQqJrX9uSAMMwKjG8NZVFAAkNcL2MyCEZsQkpttRCgzZTRowtDmcqf4SHd2p6aPpKTMG",
  "key32": "4cpebGDGDU4QcZ4SRbhaNjotT5Cb6HvBBMYCZeCoEX6Pvkwvx1TkTcSeJsvjBuM7wKmRnMkCWqDSpALXYDuBqcR1",
  "key33": "jx2SAWwAMjTts7F5HDn1RKd2Hk6oTLwaXTcwUuTKzjJfcs1PtacqaD7xBb65sPFsjq4GKeJyryPPMYmh8eEQTw7",
  "key34": "2qwV2uJaihhcovhYELTCzs2gxQn3ZfcUc3EKMLfHYYjiXNQ6suLc2zqh9KLm39UNDTU4Dzf85pB9zBFvk8qc6iqL",
  "key35": "3GLfyjQjtWnQXabgRCYbejxcThAvy6KwWUGBkg3xzxBVnKMBBuQDEmiXAHT9udvrcMJ798JDi8ZeCF1Kw5rZdqpa",
  "key36": "4QkMq6uerqqfPUfxHUX8LzXKGVSK4FF7S96oLqo3xqgRgSGs3MYZMh9GvthNXtEu2ekLHLWqhgdePkqZTXGfNzHC",
  "key37": "3wQR8ML5tTbMZi18BduSVKxV2ncwgKyjYE9SzqBkfZApfViEYrrvaeU7EYtP5YSEnrGcHvJFxyUY1RVt97VX7B8v",
  "key38": "XhZLfxywNqpjYWJ27E3kgmriqzWDPZyryNn4EHd2ChbNkuJHNSa2pCMS5vyAs8yKwFzFemNg118CWcfsWnGmcxf",
  "key39": "55fvLHxdgT9PdEr42mW8hJvebkJzuP7W3vUWuLFQiNN632WjM6enjcCK1BKjNPZNGr3n9KcoYe6uG4BJMgjJtopf",
  "key40": "4YDimcFTRN4htQCkyWdYbSdu1hzq6C6ipRmG3ttat6FFWXJuaB1kdfG1fYJzFMrm2G9EmPVimkLHzrUYT2CwbEdU",
  "key41": "L8MuFDifLFcErD2p4aVkdTU2MAXmXNzhgi8eNPu3oj6gCjeKJbcrwLeHD3wRqwSoLRr9iK2UpS1XAPL217cemJE",
  "key42": "5hjasb7rMub2bRxyRdrTntBVeMLMzan9tRXaGtg3WWchGY9xb49bh6MydbMVayrcCcGbDVphzmuydGeJvxjgwB4G",
  "key43": "CrkPek6fMTvKZpCsx3QzNwtNe3BMFNsiEvwAQFyDfNjkqMfsYxgi2FR2BuQP5LXh4tDGDTu27GGV6UT7aGyhwyg",
  "key44": "3VYsiAP4marQGAcEKt4naFZunBRc882MP3sy6mzJAA3i32xoL6h4tx4aR2NZ7KySEzraApjsUpvUKgeySphzho5c",
  "key45": "4PaR3ZEuT32SpPZzwi36iVaRxQXWyHKT93m5vFyPaRVbxpRCx3rZdEVBasYSSZMLg2APq6zC1wWQrAphaRnzTyv9",
  "key46": "5wvNMXzuG4QBdcyRY8bUgoFdaMrpKJ4t37hFYV1HZ7MZZY3vC3CvFYuUJg6YmdpUCsBLUWoBEy1XKYHsmkjNAAnJ",
  "key47": "2W7LJowvPUoUbEd7DRfHyLG9cjxGoFvaNern982XdPtp3ueZmCLbAxrWwkYH4onQd2SaUQK4ktyWnD4evuenEzSk"
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
