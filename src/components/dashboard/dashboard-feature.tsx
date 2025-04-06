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
    "4geyKCVpKpKaGwnNVCeGMjXFv2amy5h7XdkjUm3sj1ggwTb1jLVpgfnya7ncTRTXSLMugsrszbKDr2d9uY1yL15v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3boswg6oJoyrT7Mb2xEbvjRXH8Y8U4pwQEb7maytFRirPN7Bxk931NcFDWuXDUPRB64yeXNH5ZG9URWJjSxgMRBN",
  "key1": "HGovuT8T1nAFEbdgJndPMWjjn5HG1XiQ1JeK7EmRdQ8y2wWYFaugBEVouDKUafLNziuXL4rWhMTVzg2EzYpHWXN",
  "key2": "wz3pSTQSzNiQSafnQsaTTytrC4rhrUJtjbKK7tnqeC8fK728QauzwFqTeUNQBMLzgPKdBJwRdpEGchMtHgv8cRz",
  "key3": "5nMDWCZdZCU8kHjAJ2F8zV72qjnqPWpss6kX8UERZRxsPP3Aa1qLfy7RRa1skVGL89iC5ADeoQnAkioUxK2ncNTy",
  "key4": "VtY9XLyeWrC1DGf2UZKHpxG4LFKMjYgwtmHmsai9cPDZMz38ELA3hYPHDT9tcrt1mwkcLrb5e4noJgkLeN1DYH2",
  "key5": "5MD1FaVMsikGkPtfWiEccwdM19EcQ9rtByLZxUsSfr8P8SNkQHzJBy8tZQDevefgbqnzjcNMndtifC83UJQ225X2",
  "key6": "3hFSxUXHu7EJPvFMbWWW1MuPngMPMBeLqTa8ZKsP8HR6X4Lohvag1dHLWGHEERtbLbd8t7rrttQGoJTJMfQP5WJZ",
  "key7": "oCFvkxNuUfHKkUP7Gfj9UCc3FZ6YA2h6L6TjN6h99PMmTctwcyBNffxeSdg5hXeHmycVhbqi3xJDhCXtLVorPuk",
  "key8": "4k5NwX4rc94vNbHzFZqwTHVRiSWSqjaZumetWtpsKyRo1cF9MDhxDpGCPr4ydQyanPtyWoPBgeHP3KTrDG8D3Rtj",
  "key9": "LhdK7GtxfQkhmSWTkdb28pyRugtKmKxBkd36PJKVnY2fxBct3ysRDBeQ6TwEhFzeqFSrvLJr142kgnL6GGp7sMx",
  "key10": "5NrUWZYWBftdGGgdHED63AiwttLkB458pQrQDrc9aPVFHUKDx5Nxd8fpPr5F7rP4pLyDrMBotYWWWptvKcwbt8Dk",
  "key11": "5zr1nXAGf95BvNqp1rnXC8awCMeShJvgdaaZ6BMkJ2frC4DWK7L1RDsPuDqZmx7Xe21R56cptiTyfxvbezpodC7p",
  "key12": "3BdHfoFPYxQdQfRYjMUDPL8nVZbVNqWu4C61WeBFvTJbZgL6eSZsgf5QyTdK9SYubzirSvKtuaBSh9EesVuPwMKf",
  "key13": "4ZAARNiDdhcapjvEQVBUBWoFyL22yzJuixE9bV1SmY1tE1ZU9Z6PgZpUwQb71bRHmD8bhGr4fj5T3yDiwmyXsG6t",
  "key14": "2kqBSjiAAQZFjN5JErfyRQ7PnU19NsanMEhX3BDxkx8vPTQviSLy9LT7VAbdZCegRSbzvtVvmFL6Y87MoKqDYbhS",
  "key15": "59oaKKDy1kaxJrFrDSrnaFdRUgUc2FCGNoRBhYKrNYDZjhdD6qCWtwrZU5XH9hgTXTRtYjJTiQeAzAffttLgb88n",
  "key16": "5aERSXFvMgTi41S3DdG57eCMszqNJce75sm6Wn3AJSUzrSnfV517q4woXaukZXZcKbDMCifLvgPHHxM5KUQ6qRTv",
  "key17": "4a2PvfTE2QpEmUdTVFxjQMXuSM9zr2aDd6Z6CMH87dsXEwhW5bLkNGinw8gsGXqgGPMRF33h4Bnjh4e3jUEkMX3P",
  "key18": "2HuDWKiq2VVFfW4hwwdPZQVe1JepCix9uhhzrmNWqz6sW8NrES9ugAojPxwYdUzpVpPc7SQaFJVcrMsSmhcUEPL5",
  "key19": "5pqpSihRvKA19dXDgX3EdUgTh5zVQGQrYRj2MEZ6XrjCLj6HWitaG42n7nqrmvXsWBWeVrfoLreKMJxsHdGkgicv",
  "key20": "5jKuJRcgXDzMsurksCVYYUpjyvVGURBmXqJvc35pE2kd9GP9ybGXTMLggWujkHS2EqEYi8W2pwHdCw9LLiacm4ob",
  "key21": "2shSCv9K3s4crdp6mZQLNVSUwWzJrc2aYx8k1UCfA7P1DY6C7innXLp9rWSMczRYUs1mmjkMoZ51g4hftyWPQdGu",
  "key22": "5yGvTRd8wshM9JbKTuqpTwvcT2mjbCb6zzLEkF8JQN9ncewpf6AFmXuxT612yD83EnExRnWkaH31xZLyugJGpfwJ",
  "key23": "4X3yvaryUGPKrfHatn7g2dE4FWyHPGGTfLAmiYJ6ULe1Ws5XforTHP8qUE3MG5xToJTBdCzJFbPJeSTyzVcYX9WN",
  "key24": "4Yv5fbZi497TdJYdeDPxkfvxjcmAdKhWBN8QHvRVBkYuRaVwCSDazGNWYS15ARXqWt5oNgcYrDuG1p2Gtd1r7mTT",
  "key25": "65RJhdG4b6VU62J4idJGcoQDRjGV8m8S6y51rPq1VNfX5tgiN357VmzGa8AyLXYPTeLzMnj4dXcayWSMYr5dP2bB",
  "key26": "3nm93XMh9v9jTRioM4t2ohHZZYUkjCo3qjZhYK77oJKp8VrphZ3K72c96HgUDY36jojyvf79QairVkhrLrruhnwG",
  "key27": "3viRxnt8ZqxLbKzQsDh66d85b3iZSL7MJRhavLpM59x5imyazdo5pquVKUAhTSer3RKFwhsabTPjkgwx3zXPCHMy",
  "key28": "2igVZNx3bVNDiKqnH9bGSWjnv5bBgBxf7i4ceV1QjvPhrUGeKpwrEMQCv2g7Y86FghEUHDSLYJghgeKTckkmqjX1",
  "key29": "5VeekNccYCah4LWJY9Na9sfsUWxRnqcVGDy8fsamQPf2ugwRVpWRd4Q1nrXHsgYgtR8U726e2RhMkkcSJuajHxU7",
  "key30": "PMDGETPym4FeDi9fdgpMGDhp8tGy2v7bxRRJPjbRd8eVqhTqnEV4cw3L8jhLSABni56LW2FjLarqjHBufD2VD4y",
  "key31": "4dHeGZeL6AHzHKrgNi3fm4B2sB9Zagr3H1UgQ8FWPn8DZuqdpPSyHFwRMLQqYXfPxKQhf4Px4Js3wqNtX3LmkmGY",
  "key32": "3ytNd2VGvmu16DPQDArtEXSQ7ubsNDXWNvooE2jKrSEQkauxrsbZEEbYSfSX9SYKp4czVaCEVnyrDAvTUmpWZKD8",
  "key33": "fkSeBWtXn5LbZRZgdyqDbEsBnXBct94mRs3Eews8JbgfcZ2u3T7KWdudb3cEZNLrMxpKVNNn6uQ6hyhxcGhDHb8",
  "key34": "dMPckKf1E6NbVivkeXdyPFphT6eRvX7sbNryTP2A4ubwHLVKs1fnyx9fToPSfRn8erJWvANcbrppA8Sm5gubHjS",
  "key35": "4pbhSdZytTT3JWLGYAFXXnMJMJ228S7asSkGWLX9szXwpLZRcEZcoM5GvafdtxVc5EnjYJL711wQzdfY9r196xRo",
  "key36": "P9gqyvuUxnEHgcQiac5Rf7WqgQpRk9QokQmb3Ghb13H2P3c1bm4kTq6vBsgV6KxuQJQBjdE2WkRgg1DVAWr3Yy9",
  "key37": "3GiiU8nUYeux9S5UKkae9LhDwLupNn62CD7U6EVevGnoehDtYGERVxkFQZdud4wZSFGFemTTQ5Goa1DMhEaD96Pt",
  "key38": "4CPLFZcojyGGCRWVpD2dG68Tx8kEHhVAogR9pXjFjVWZ7icSLgVoG9YUvF51tZq3WQdAmzxdoN2rbwxNXb1niUTz",
  "key39": "32hbYDRBUTtWjGXb2wTsjU3aKeKDAyf12dUa1xRMr255kiEgp5Sr5PdTXhbaCSQ4Jy9bAbTGfPermVt4eyJYk6gJ",
  "key40": "5y1TgmdfoWuascSbbTfHV4AzrExQLBf7Wy18ammYgjwjppBSWMRdBvZZa41PrH5iETWZ3h6bJCLdeaeQhVxEoeHD"
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
