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
    "42XjdA75Snm7pNtLRrJGD6sy9nUVYoiMiMBv2nnPGawpritcA23mP2SbrKfDpxByzddkpaWnmtRu3ZkWUjsFWH4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SsDiDcBpmQin18EAMaiLec35zCaZvJGrVW4aShoTYz3rkvUtYYe6yN5AnL2gQLvDxKoPksTuhqznxcNTv51UpWP",
  "key1": "5rZrmfVhd2TJetYgQmdWu8YUqRgAu5PRdTHc4cENGb9vHBbVMgzUcBSHyfEuUzbQW1faTb2wpVN4dgwtbZ7RuUgU",
  "key2": "4JsGJrDSY3WHs6qdvsWMhpPGAu1XzHzbzQwGPYCAqLXwSd2bNpGBcHH8ZKVCojy48aexCuC6uupEqvXQAgNDub1Y",
  "key3": "2SweP5NcozzCeideUJ9h5sAzgTrKitFrpjjbkphbyjqg2jLiCvNcorqpyh3xsbTjPRYNFyvSqkzq5RoyMkAHn8Gb",
  "key4": "59D8tV77Z8rApBPG3NfHytxpSGuTPktHPxXBXUq8vq7t4efds9UPXK5aTGHL67Amsv34Zzazns1Egg8LCRD6tn2d",
  "key5": "4ym34VjCgQqwBU57xxbexoaWstxwrvUDwipE1C4y83pexjpaAusM1FnLjMSvynrNizw5fssk9cfBYBvYZ9o9pyk1",
  "key6": "2GCoc4cDJqdw8Dc2yRncwaN9HeCzwszRUVhpNMbZHfrVwXQfVsDkqqoLUXphGdSLt3jY2vZkyUq6jFe2RqchAc4P",
  "key7": "6549G27ANqx2cyqPXdjUvhWEgSSs6Twqe2JCzAR4mixoaYXDnkqKsAXDv2HAyTjzQkMNzJYLmfbFpscr4pCQbUUz",
  "key8": "3GdYXsk8WobpFY71ADW4DSwiF5K1bzsq12XVJKj1c6NqqLie8n6P9AtG7cLKLZkXRBiZ7vaQyB9GWyX5X5anWpHJ",
  "key9": "31jmjvboLhHHGmmjRJaexR8c6hnMUWrHoSDJj4wFHifbm2UNGSKyMaw6WvcYkm6jvc1575feCqvCBTGeWeJ5LgbA",
  "key10": "bN157pmAasAR9dozQx9eKLRLmsFuhrABfG4ACDXcfGML2J6aNhvvB1JnmsLXgcMXyVmbk9zqmfBij6dFQ4oDTFw",
  "key11": "55gC7fZkfpvR6pq45FLoSXrvfsFcZe9cJd5UHMHD2nGLki7mf8tRwGyZitZW9UpKqzqEPKNbMji2H189GAzTMr41",
  "key12": "99X5RAjndNbR3YBQNbaL774jaNjaePYKZq8AW6uafJNiaMB4wWa85swTap3WK3RKX6QqqgqpgB7J5sfAHv1wZ8J",
  "key13": "5uwxXsacdqeNnsMMeRre9x1JxMhs8CiXWvjJsSHe4oDLfuM7q4z96vPyFo6NUNeFkofP8YZFR2KKWo7SN2K2Kz8k",
  "key14": "55R5yB9k2zcrL1vc9KrvMTSyVvf1PEGsy1FXJgb3x48HTn3kTVgsFZEk4hWrZVu6AkbivQUifXAs49fE2vkhVAnm",
  "key15": "xNU73qmCwocwdEXDRzwY5kNQCbJsRXWxYG6W7oDkMcGJr8ZE61VpADn1pqc1YeXQeYQe2nHahWxYrpPat9oKtJ4",
  "key16": "4FCjkATRmWKvswzLmFPb68Ebw6822FSDqtVC1NjvX4VwvyAWcRUyudHptPZic8pQDKE4yyqnp8vkDJKU8Hre54fz",
  "key17": "3FbfcSZK45JbpNfF8kH1SJuJewimAiWHiVyZ9MttE1YhTNobNhf6D1KMqqDDEfRwBQQpN7gy1bajMnMqKKLzYEF2",
  "key18": "5gt3m1NMzFFcZZf2CHJ3H2rmJ8K1DLhTHTFjRYWtFL4K4wiHgs8Zrwr7xChi5vB2y9aCsU8zreMCxYEJ7L1DzBnH",
  "key19": "31MkAYgcro4Z9sJxe2fL8vVSqpmNagWUzYZSFEoZGkb6cM1naUnBkxJpp31bFvDCQ9Nnamyco6vqKLLpQ1bPMWyX",
  "key20": "52KqWPxYVpJrfnWrqhtmob9cpyT8xrWqhSAEjmgbXdL8fnqkfyG7mvMRjgJsgHdX9GT4XmCxsz7evNa4rst7tn9C",
  "key21": "5YT6chZMjJe1mXkEkgRkzLLGQXHspTi3FLPwsJpCEB9csuPDtZCYor1QNcE6k635VU21XD6RcDcJG9szJUtRJv8c",
  "key22": "54Kat3zrULgNKArUaLb1CkEoEA7UxzDNB25hmdtZCp9RTKTXVknbRzsbuBqZK4r5B6qTaHe4jE2EGZGAE31axwfq",
  "key23": "56K878G5K9qYueVHCGYX7s1gYs3M7Kjiiy9pvRMfjVUFzv8GGy1KoRb3aSVWuRo5yfsXd75dyN1fuk9MG8mEqhKg",
  "key24": "pGubqyiexFEPJyKTZwzcNESV3AZwTuym2PTjMoMK5gJdRKefaYDFqDXsS8Vr7wkUZY1iiqzHzXHac1Eyhxnp8fM",
  "key25": "3AZBRWTrJNtYfrR8ieKdajs3NFR3P92JsJsQR1fMbrg3nk7wPFEpxkTwu21K2KeNMFDskSmiff84BD6qvcGptMpf",
  "key26": "4inQdv8aUT2nPXCsHeNok1NZytWY4jb1GEL3DTEiLQEnsMRE2fkwuWGLxKELTdjxxr5KYcLP7c5KBhiV5YmdUMc3",
  "key27": "4PbtTvTUBwHM8RjDeyEoPtFu59a8ASmgt5cvG94UdSVd3SfEmtssV6PgAdg97xi6Up6Zbquam7mQyVawzPVZM5iU",
  "key28": "VEFAEEEg9QbZBHYBXSnJUeyWmfwFBCegbgmsMtLx3GFYpGNuEd4exf9UQ75NDbrj9rxtLVszR6B3gpqrrkEGP89",
  "key29": "3jj3jwD6fy9Yho2h3CYke7hy3afxoDbMAzaG4r35mN1ZDTZ8Qmsy2mmjtsM6EkaP8EeCJLPqzupMC2wERa4MA8bJ",
  "key30": "2B8zTi8MDS3hmV2WEeHW3PbHTjLVSuEDpikYcCPjkKN8o3Ys9xv1xRsC64DS4xhcvhovymMuqomWHLzYVdCPKu8x",
  "key31": "5Cy3Sj5DVAiaSJTNNK9UJSFuWE86vhyermf37vTK1ZkYjTAZNtmprQgxkwuzGBF96RAc1kQ2tRg5mPFNPsrzPCru",
  "key32": "5JkTCZfH6JuGS4LES1KFr2fryMwZFiLsPD1RPtafgUAdu24ZkwDmx4JDP83DPp1YNRicUNEpAjs3hAvkdi63a43t",
  "key33": "8xi7wMNiwQvbj15h3fCY2M7Yih5f8mjtjRKR84e1qKZ1b8wwj3QuLW35oJhn1BY9jRUdJh6Bx1cs28u57U6bGjh",
  "key34": "b1HohiZa6MF7xSAbpGBGCgZTe9m6GcrS7XH3Pxj2o9idEjUpt3EpR2LqA16piNtyVw2rMNUfJUtpEZjXXdmGnuT",
  "key35": "4Ky3FA9dHz4Y3PhSN4DusPjy3DsuVrd1JsMgcVQ1PzKDKZ8ym1B6bQ89tZVU8jFCXWHZxwCM39AiUyTJYSE9aauB",
  "key36": "2fqaFkCFYgyAcCQK5Y5C4g56iRK6hKtKqCtPhyu9yJu7GvHuMq9K9yXkEd9XET5u9jZCiX4YxuoidVCAK95JjnPu",
  "key37": "2CAHxTZf3jShJgpYfrHFN6dQgdWzyHgLtMvkWE2KL7agKksTSePg4fsg5twetw3R4SLJ7Bz2nVGie9YWbv3jc92G",
  "key38": "5Z4VehmeEcdUQLTrmQ64JCXt9o2mrCcTJyxaAomnFqZEkTJU517j2eSbqW5duA3Yybs6ibbFJ2Ji6S6utHPhGvXq",
  "key39": "JMy9pSvALjoNpvoC8h742TVSW66TX6nD53ppgyuvr4abvoU2JZ5JMKS1xfj36x112yKAFHDpDPJRLr1sSTr3DNy",
  "key40": "DkN9EqxdS51yvtLh4C75rRYZHi3Txsv3bkToFPQBjeBwqHF3zYYJUy5hXmEvsNA6LF5iHqG7ZR5EAkh8QZettMy"
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
