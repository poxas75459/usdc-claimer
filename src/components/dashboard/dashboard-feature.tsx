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
    "52HAcsok4w91v147GfBkBtBqgxJM4WeXW4Wz3Ss2h12hQe1E8o2ziWGMHX3hQXX27mm8NbGQLHxSCpsYEGsxcWtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55E6TSmqGq6qLLA6VU6V9nryGUbaMpBs9rXSnEVzwmUQJHfGBXj83EXLgKaMiQSfjfwF4BvmhYAsebXHi286wQET",
  "key1": "33HXXdWPmEMAgmVxwAX9UxM1PBPH3NhG64abaFn1p34XPLNvEaX5uZ3x71ZVMfp6hDEnv217YJSEbF4qF2SB2qig",
  "key2": "36K4Yn2nfK7JnbDZoumbQ4p4t2yD8Tg4WVJb1wnnTcB5bbrbS9YXNLjJGfMDsgSfwGorD2nm8nqdsA3n1u5CPPfZ",
  "key3": "ZyU1Zkj1VwTSqRCfFLVVrJUfGqKNP4LTkpTp2vJJ3BsZWKmkYTUuTC8cobaJBs8cW8Ujkve2XAQfoa4GeeA8okQ",
  "key4": "78ZfnUf8rv7Zi1dKeji9kbYArbpEpC8FxhiciscWk4FZknDZ7DS21YHD46WJvQoH3rjLfb5NtQwMNAUiEuLaua1",
  "key5": "4RusjtPmB5XTef6E8J5fiRXah1NTZmyqt86XLEQGd3iPyKTDs3UmT5tUnaLLveL6e7caX19kPCwiydgUWdW5BzBE",
  "key6": "3pbAiB8cuv6UBieeLBXZ4zN8dQ7zb89tcA8GYKrM9wneVq74Q2QZbb2KpPFfCscrRH3f7YtN5zd1KHQJdi838gjE",
  "key7": "3oKP7HBsAbyxUBrBDPjxtRnamqrJq3sXUuNkPipQwKX8EHkiJ64PyE7QhiwoNbVbW1Qi59zAHriwUuYvcRF4NvwA",
  "key8": "26FLjn22s3DoE5izAoA5o56QJJ8m22796AkuP13aEcvdXAecFPyNfoTcegMn1Wgi4d2xJFm56hTBjREg29BzZdEY",
  "key9": "46Mz6f2yypcGuA4Wtw4cwDcTCpWGtxWxN2gFz8GjccBUh14QzambRVnMvTHtVmPzkAivzN1zJuisiwgY4kp7r2hC",
  "key10": "3NYS6qHUeSzWNdbfzcSV8hudGCMWY2bJYmvR3q1zLGywJPLFLPzKugcePW2Xe6KvLfBS61eLoXGcs5XiTnELYBBH",
  "key11": "DaU9Pda4FWberj95RcSEco9ps2teZUzt1EXoVVRvkPp8us5v5pVSXxbeA1Zudg61N1bT1drYzSAWyoMfsQpjic7",
  "key12": "3nHrcpYGBNjJAqqk1nWenQpYkkaWBvrWM1nbLmtc1a4JSyiBrjGxc7ue1KWLuqHkHDWDFR7bUatGLRtRNiy9NM4",
  "key13": "4NaqydeasRFgkxN7NM8seGAb8WdLZa4uoGtEajiAckv7BdRzeXDPGbUZSZeDiFy3FxggX51jBrBLdqfypmtKhXiL",
  "key14": "5V3smeSCrQ8oq7M4pwt9cGmw2RyHU9q3Zxbi9Mwfi192ZdjVMaWtLaSekxRRkJoC2wGfEDxK4NskFf4YqDZ9w1h8",
  "key15": "5SuYfcK2GYGyAmtZfGWUeY5w5J55QZvcrFSa7aoY2N88QGhGnVJthobybz3pQyQZw5HZJcx7n75Hrjx412bfs5Fr",
  "key16": "NrFkWQdsoXE2k573G6AVgemJCiZ8J3nuuCP7jEoegXZ6ocGuPZcxCVQFU3FYZ4s6VR4FNmcmo5Uis4PErmWRJ9G",
  "key17": "zQ9vT83LrBg6EdJChLGfP8rLLrNTsizLHyexDTaQsvAMqdqYexEqEA8nDKGDLiRTCECNsKgNphEyD7K6mJMzAvM",
  "key18": "4eF1ppKKZEL9fSYFpgA4wX6o9biPzr29A6gg5JVzLAat5ryeRweSNo2Q5eCUAuh1YZJUBZEozNxoTgCCe7HDnih9",
  "key19": "2JfysuXRct9iZZbgMPDXJhw6xD1ePWUHBdGBAA9orko8Q42mzquQi17TwyGasX4r7rXjotfBNCE2dKvY3Vswja2F",
  "key20": "367sBxHVnEgJMM94DtF3cy6VxfMBSZZSFUVtsgvcQ36XT58vAv2P7SzAkJdZ5vW1x2j68kFwew1j5w176L5Lu5i1",
  "key21": "4NkU5Pb84vecVgyuD9NUqvrHkMe6uRvo2VEMeXM7AHJ4tGhNzmRLWwS2moBDEv9xsCUBA1GujqGQBcYVYDn2fSmx",
  "key22": "2ggWJcYTxwTDPeQq7GTWYm7Hv2Lb1BT2HfSc6LhaZxjG6y4LcSfhdJ3sSWxe9wWTbKzwXKuJxZgqZVPkSBbwPiuf",
  "key23": "5vsdszgy5mupurFxHugNdHUyvJtXU6Zo8pXw5fw8ZNZkRVn33tH9sDpbdNnRR8JS8gSKDzYBg6r5tMtgwLwqTCvD",
  "key24": "4th55NYcBzKsrFhjf6sHed3NGQw5ohx5uvsRchQsZLAsRdTWkhDRezCXYChKQJr5PnsmY8UzxHmUTCjjvFL7SzY7",
  "key25": "5vCJswyAaYnfTCep5gaUrT7PqvpqhbqLUkmyRHtfYxqNr5j1ssrHSXQmACtbebMaLDy4VFhusdeEk1Z4vEvKYbRF",
  "key26": "BnEB4CfueFAnfv2qYHt5W4AWo8zvQMS5x5SdfJ5ymbMaQEknxUaHMHRXNjC2qmNftMzrkyR5RmVHzZ3iNYjjYdU",
  "key27": "Q2MtJcpxuUL5LBxkwb98euGB26DRrjpyNkAAz7cgbh9jtVckBA1rVob7Do3t1kxfqvrtATYhT9mLCBzrYCBjvUd",
  "key28": "4fRF381fgZZ1b6BwwgwbgWRKkF9bkkxTRTKUN8Z6nHdh7TKQmwJ7Ur8fUYFwoL8iWcySHnqupGxhBLE6DweJk8gN",
  "key29": "4EWfS5Ud9LqdTd4R7G7Wb7v79Jx95Uk8YfWy8YauYugbWmwrSz5PZEVGzvxoyEWeLhVWWmS3urL5XAWxRcbwnbox"
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
