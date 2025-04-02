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
    "35MrqgoF6QZryvfdniDiXqMvB48YphZ4oe5vNVy8PxuC6Y8jMacgyHCjK3YyJrirgQaPPQ2QNgAZkUum5Y48aEDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pdMWamUmiVBmZV4wtD7v3SJiQ4UYycu6j6cQnrNXeqrz8ArURk1hedXkLkWxKLzD9BPPLh9SwPoHUc7XVFwKdQ",
  "key1": "pMmGVCNnApUXNLhHxoWoNR7NXjUT9kjgj6DvR94RrU3LHTq7iavynwgBJyTdrm282Jsyrg1fMXBb4kjLmSeEFFP",
  "key2": "FtTHGjfHcAEBpQyhzdbkTWjPDceCNvm8t5T8CNYi9FVsYx6v8ySCN1JyMQRWZP5d7CEgcrzkSaYUzFnN6TqLYp8",
  "key3": "gWcZ4egj6SU5ZS6kqfixLFqvfUvUfKTie2A6x4rEg6JYm7TnpG8NnD3f4rimiBS45UCbEnmtfTUjAcwQRxmsNQc",
  "key4": "5gwZRwseLQu8NGkpDAJCUEAdsFDvSY4Ux5c8KGkRL8a7ubWuFE3tK5QogQegQZxkARx3GbvMNFRP3G25ewqo1G2m",
  "key5": "55bdR4Lac3re24KCWWrP8uTE8FWx6b7oZdq4gZwySULhkBAG3oVZcfx7Z3VibS5vP1iZu8jYoigp8oKKZb2Zz2Ra",
  "key6": "x28JQDDdsr41GhHfQYW2GudemnNhfA3SDSg2qfD3nr8EQBMPvPYcYNBiEWiQNyedLYmDRdnzbL8MdKahJhkzgwm",
  "key7": "36DhBKkqACKFo3AM4nhk1SyaikCyKyH3x8veGN7YoUfeWZPk7PvBjZxgui3sR2jHrNK2Dz5j5qEvMrjrYWbvQ8o3",
  "key8": "5abjx3KSrTpujDU8ZC3DyyC9noa64Ff1oXywDUA5FKz459mH5duHCG42wNhTYeu3GrimoikpXYw7vV3EpmvFYc26",
  "key9": "2iy5Z9RuMpyLTyXuhAYG25WjoH3X2aU8koeKPc7Abta9aEaMcGY26u5za2TmKifEqsQSSiSmFsMg9PHLMJxWnXXd",
  "key10": "5qG94MNyGGiQ3YqqWM4cWHSwUj9Scbc1YF57XbwsTF6dQ78zHnDBZ9toCxni1XeCZAoCmFsCJUuwJnB7kxnRsNG4",
  "key11": "2GBrpsL5X1SEvnzmp4m7ZvbMiewD7WsxasFJkgd8QZz6rwVU3vojpoqsUaGpU5GJ3Mrdq6xtKkge1o7yZnbAUeW9",
  "key12": "BdPzDAjFQ7VZgAN4UZaEA3atMCGhpfQrd2ACqD94ksFJybPiqhPTPtmURzsNULsi9LYLUS9PNrcaVPeEgx8sans",
  "key13": "HyjeeRFAPuspbWgAs3g4G9EaR2nqQiehjrsS5ADsnhRw8Ligb7NgkLy18FRhU5n5CVMaUBKSq2U7awtKvBqe9wM",
  "key14": "2364vPqfRmG23xiPb6wxhviGriDaSbqup5qtSqCgh2Xc52u9sqdMQQwydFHaW7qU6sBfxepfFHEQVkG3ay1AUiKV",
  "key15": "2WDYXnGaSsfDzw6R1YRdgSKLVV24vU8qwf2cgm4DbmcQgLjntKyqrgr4gF7QCZWwhnFNSm5TvnA8caQVTsh669x9",
  "key16": "2umAutTS3iGmDR8zWMFzSDFmtgMK5Khyh7SQq9PXux28zXdjGwzwN1rtexTz3YgC72Yd4PyA9FPxkABa3sxjZQXU",
  "key17": "4J53CYG5CDNoQ88wQcM2MrTVX8SBYpff58a2pWrVm7YviLgBMB9nKR3gHP4Xuzbu2aX2k7v6nhHJqoNLHMorRXrn",
  "key18": "5ZidFswoGhKqpzqNKqkk9j9u1Y4kH1FiD34hvbR8cerpQkBRdyYwXVwkaAunRuX8S22U3Y4BrPuA6eDK3R7AtERR",
  "key19": "T9Wh6UCY3yKPcGXJTm3n3TezshBhmnMNFwhURjY5cMnGgbbwBKr1XZzh4o7a3wAbff89b2vnwHKyHEqoJrJvpwb",
  "key20": "5Si9GRgSyZQ56yNs3iUvJB19WYBw7pkppcbKZZg8GwCBfX7fHQRViUq34tHa1iiNCCGo4ec7HG5acB5HKkWn7a3J",
  "key21": "2SGMDjotmrMmmFZhP2Q6owhQ35iBC8rXKL9a3TrdYP4YhzSjc79rqb4HY2bZwh65evTF45PkSoh7qd9F1B5a57D7",
  "key22": "2fUX4TafcTELw6baeJE5Qqf5ekKXSGFADw3yErXvF2ZjVJto9Xzs9J6GU1ydEkJ8b6pUygnjPcLiJHofNfTahsGo",
  "key23": "ft3kJFeEET4S5FdoW1KecHWSta9e9eDAm8aauyHWc41E6CtPXKfGdZqj1UsGMuo9DDEEJrJURwQ5TQtnpmbyMEm",
  "key24": "ybH79DRvihxkiDRQp8v8F16pYquSNhWuH5yX7MPJqD57P8UC91bWFxkDZCLj6ebPdC4kNDNWsVC6mwoGMHZoKCE",
  "key25": "2mePCPc1gkh11fYu7zSbzh2rj3fmcnNyfhFvK7LU29KWQC8kAGqmGRxfaUxwLJirg7Uqg2WTxQMBU3kUQDXksoQU",
  "key26": "4ftAddTwxeBND41phNE12imMxiwhkV4hDY3y8pF1QiQJetKLm83V2THzBdv7pou2Ffp2inPb9P2eyjigPxX8L3oT",
  "key27": "2cxtjpFZr399oDCREitcPeph7DxmmpgP14UD69t22MsADMHZ4VbEeJiy2aomUi9TGykk5vxjgLfdDxFgkGvEUn8m",
  "key28": "4EPRB57TKPepHFQ3ek97osdJJhJN98hGEHrz98XF5GW1ZXw7tqcBzf4WxV5NHr3yy5tMemVyQwWSexSL92XgzmrX",
  "key29": "2goVd5ZhCySPV3unuEUy5b6udr4csuGfbtse4crxoqtX4TbbBbKYndf4pK2HQbkZqv3mGKTkwGms958beCM54zp8",
  "key30": "uuJoAEuSWRAqsTFAETyxiJqU2NeZT5jDBv3YjdnMz1D5MG9MwrYYM1hEg4PN3p7Smo1XhMK1JRH3KQSqGVGWnKy",
  "key31": "65XLdZsJJewe28zfDULpv8hJ6Q6ELpV6mq8mfdu3TLoKvLgBaee5oixL8awzFSusk5LRByuQ6sReG6HN46pyzfrG",
  "key32": "3bqdcDqCXy22kLBAXj81335qoB96kzN7N9JMaivPq4oapUJTRqZEHBmzdS66QAd1fydPqkD8FQu3EXQVySXWwqGs",
  "key33": "2mFE3YhYbemtCDFiRFndqqsdLH3JSAiXrwtFg5Vcosm2YNgfs4mNpx6mBjVxUY797Rr3awrfxMtDJC3FhTpREPMn",
  "key34": "25HvJCiRSEiugmJ2xQ8Ak6kXkbBY2xCpcrDnweKReEDLT64DZzQaqA5NnftjJ88UofzyQ41aFHjWYBifRDCmaSSQ",
  "key35": "4DzLZK9Z294ijbCvfRNF5yP5Z2P73Y3NfG5BUbhaD11GW72DVNnoyHkFVJYYqBxNjB69CpMQNJn4mSSfWib2PKaX",
  "key36": "3A8z6EFSALtVVkDnqtUAHtahahWrA8JncSfSjP68YqP1X6LbDD6GkmydRsyibTNY1iKhA89R9vLPi8seTYvPZ3R5",
  "key37": "2g4aL5pKwwqA6N1XMLuuezTEN23KmQD2S89TWoWPhLfn5z96WyqY5wWjEok2beH4S1PBEwq9Vc1GTu5j4e5DQg91",
  "key38": "CwPQxbAzq34XjuJJ2SknrgZS5rEGDYbUUoHEuaPfKA3vqU3fsYyjuBp8tZ5ZA2QFS2bGLzZgfSeyuuSSzWNjCY8"
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
