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
    "Eb6cAUJvRtM6prXykQBbG3ptRWeqPnCUKdb38uaZP96HVunDo1NGG5sQ9G9T42BCZL5DFJTCUPwNxyZ62eSnZKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z9f3fSgS99QiYAJQixkqViuskiYu2Ym7831vMi1m2sZY14Tim5rDkrMq8qXNStEJNFAm2LpQjxUbmEvDzZ35gyp",
  "key1": "5o8ydee8jqCtEQ65Che5v51pVRXdpxZNkvvp8BNNXjRQtZ7r7YHU5cJTavq452MXgUztu286AQoG8J8GtbxHUk2K",
  "key2": "4NQevnSpTHwLDoVpBHySMbmJqFvzLadn8VSHp9K6qWBmgGmcPZ7L6BwhV219Z6W5zBiiSSgW8YbTMYacYdzZyTDE",
  "key3": "2cv2H2Boxg6PK3KYQUsVZ9Nb9WvSWd8kWdpRwfqNU6TYMdYWfvfQTLBmmPBLxv4V87JxXWiZzZwBdvS9Rfyr31Aa",
  "key4": "5p4okCvetEYWJsYmQGHqTNriFxga1CzH8YtY8FVGsCPMuV8tk9AxuGEwjUQFPSrPMRVV3bxNmTKHsMC2we7KJUtN",
  "key5": "2o35ENkxtHRfwwrN7oSJM9g8jvmdnwqaNd6KJdPsCaq1KrBXUcpJLMiYWi5oFmE92qenSj3pomcYoNxRZ46fGc91",
  "key6": "5rj4Rp2eyvg8zyH89YBaa5vxEfUfpkJca22VfMLcNZ3wMY8vaz4UHa8dFm2J4PFUkyJYrd6JtfXFaR2KRUHuGQLf",
  "key7": "4mL8GyKUUdazy2G53UhMmTWf8nT5HEC4Qp7Nw1CnJVeZxThwvD5vfE7peDahjLuRqBt6c84rfuJHs7XXY9VtgY8L",
  "key8": "28xMRYN9Su5j1aDe1ciYyMXqWv2t4NRFEk6vqMW3xTSUmToaq4ra8WfJYdFSnbD4bGzAhBxEF1RQeTvzJsMkz2k8",
  "key9": "25SsqoD3kJaQQUR9bGn4WyWUW3vPidFnwUdeNwDXLg2R6Qm4BxS9kopcFRwZBQSaPUyMLa7UmZu2KosqJ1tyqZ6B",
  "key10": "kXhRG3aJL6ni2Q8Hg1J4h8o9fLL68GF4g9f2nZoH2i5dZkvTCiX6cThXJFkUHMoXTWZMH3tkgiMSK5UEkSQPgn7",
  "key11": "4AQuKXtWMWTNsrVorw221WKnGCJ8geNG6TcWtDmRw6UqUpjqLcUNAodkPArM3hYXh3ceedEKoFtUvvM2MNEZAYKo",
  "key12": "2EEL2r8WEBu4D2Pm3eN9S5sFRpZzVKNpmVvz1CRmdB8z2B9uMMABKp6tV3ziryamAM25W49c4SaUrnGJcm82qSU4",
  "key13": "5z97kc2YZ4bu2FN8sMnmeoAkdKo8E8cncrE6bm8wj8HSKGQZQs1U3TWUF4xUUv4ngwtbAnLwzj8Skcnx15fFtq1L",
  "key14": "5rP7EQKX4XHwmS6uWHjDkd8PbK3ijPjxB8Tf6hMPHERMPJiYRv4CnjwkeTewTF2kbFAi5UoWkJUpF89am4SisELt",
  "key15": "4dZZ2dna3PgtbwAPgYwkHC4reSZSDkzAhhEGf3N9zKhtXURy3NkCBrDJzbAtXbskqmYXFyfsjFoDgr6N2PHFfBdo",
  "key16": "4bDy5Gfsm5nv8SpUxsZhm1zsWnR4BHvNWhpvWKw1QUqhEezN9By9yVH2rovx2unoiLCyKAPiZhgkxqim3Mmwdx56",
  "key17": "5Lsvdva6dP8ZhCBSvCWhmdsBSwJx2rgL2YCbwNfheusJGoH4aQYdBRc4mfxz6GNNAqooDVnK33oFGCP6E2ERJpQy",
  "key18": "8kAHUYDkoxBDr23aLrzbqfiajhAqbh3asg4tUT9W1n2timzJHHAiZaViezkjsJZ2LocpbaJLQ5kimASNELt5kjD",
  "key19": "2CLbFPLp2nrMUgVF1RsQuCGVChK1UvqCUGfv2PCFSYXod5yxXVLKYJKatFVqbjv9M3ePdLh2F7d1LGtbaAAV2bUX",
  "key20": "dERgJcD6e5zT2rjpqRVACLDEXK2NDxeixz1fsNJ3cMwxXXAQxarxqpP3pKb7j8kVn84mv51LLcDyMBWSWyJ9pcq",
  "key21": "vcVBpw3jCPrEhMJM2PjveHWZWaf6mZQ8n856SA3tMM2A52AT4sTDjXAEReDLQhXDPkrEnc6ked5Jm2K6C7qcKxZ",
  "key22": "4QyvTYAcT4eHos58QzcWavugiuCf2vm2jEG3kHMvztvydbji38XrvwtgMCxXkqumEwyswtPeQvKWcECdNyWZKG7d",
  "key23": "32ChCakxQuCSyM5cRHxY1otRbv9TcqgeQxGXMLHiXXdZve3jxifjuyLRGxyFQHvCv8Q1RtZR1HjjEnUAsah6bvuR",
  "key24": "2jCuRAigPmQkgKyTj48HVhTXJDHNdZs58gFVmk8q3ZHHhLgteLPYdwnVobL6vCx7oFtPbBFfhvJfU4QZWLWMpYSj",
  "key25": "22HwfBkigvJrMQW5zB1EkUrDLrvacy67ZmkVexjhTauRxV7KMezu1bwp2rRePeXuyaBGVRPMJ9PkxqNJPFFNshfx",
  "key26": "3S99APmj9d2KAbKJd85vrgK1fRTWC6Z77UPgxqaXwZFQSZ9FaM89p4jd2yvmjjXR1jj9CieUgYmk8FxRJ5drNZr9",
  "key27": "3cENWXtEXuT3cJP9kUB9syYfSejJQZoiJBAMP83jfzs8AkjAxvS1rKyExPHTA7sKVUoVW7cYpQxp3vgBimJSM4Rq",
  "key28": "GxjuH72ZWMG9Vc2knTT9thgzmeZMSrK5RfvWqC88djreB3CbC7oNncsNnsESskPhddSsJ4Y1T6ySCgQnBFxtSNA",
  "key29": "4LNkKNBoJb68pjk4B6N4oejLNg5GBtdpVyidFCPZe1gHsPzFGC2XgWewmXHaYGLp13b4n1GpXcfdkd1cQ3fjnra",
  "key30": "5mgsXFUBzaVV1r2PJYw59XZfHrVY6Ade2TNayUUsjH7PZoXFL9CCX9L4Cvz8SqGXV4aEww9MWy7yMZHeuGfDMuDN",
  "key31": "NrLt7UPPi6GfBNjqoMcEGFiu9ayhWdaWHJfbsAwc71HLEtpM9GLVT3FFYnsNJT6KYt7iFP4Rrb2FQNFuq7fz45A",
  "key32": "4nuX5aZ16iYzjUC7gkrKSqKmNhznbYUoib44SP2oC8zTqaEwvkUEqdw2GNcomMhJmnDUU5X6JQVEub6GPDjSv9iJ",
  "key33": "4m9xNjFoxFZzfgF3pKazU6XMHodbVsFn5hpEg2igyRdcDYDKe2VAMoH3z8BN7cm3nZxTSBwunUJ7ruESRjQeyLtB",
  "key34": "4yiZX3vjn499ro1yfaMTtC4EDsNx58cuhFJQhdP9iXvfYSQSwEz2DofrjW22CQFEWjAWSqJMkKBYkD5vJsxcQUyY",
  "key35": "ixUrNKaRSdPPBy8xNTKcuENPYfiVP9RrRgvrTHG62upGxt4Be3qhNhZLjQXoXoWfRs2reoVdd9uuaucgASXAMbZ",
  "key36": "viXjNDeUs9ty5uvxpRY9nCuqZXzQB2dvMpw3e3V9o4hfRnf4XEx7cDC5mrtQ1wbFvQbAa5BajnLRWCXgpATSJjZ",
  "key37": "QyRy8BDedpBHzvQnk7G9asvdh72qf9uk6Qzakuqv8VYmkNxovkcgtp9Z1SZ2JNaiDTn6PUg8Gnr3vm7q8S5zdrp",
  "key38": "258fHCj2Z7d3LjWCDUaGRFS7UdUGk8A1sjdhyJT2ozHxEXB1SwxueC5SdqEtBZeunycBiiHyn35ffg1Mo5FaoNMF",
  "key39": "xqoJbVoZKU1nVKULMdkVraigJ8aJSRaGAk9MsCwZD5WJbf3Ss4WgLUSCWiFi7e6odLeDWTbfySvGCz9GrXUE2nt",
  "key40": "4UkbPFUG1QWUQP3pHjZKZjw27aZTKFXf5vKGu9iieEAVzRCzYk8S8kvEKWGVjM1T9uMpzSue32dR7ccR6cMbyia8"
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
