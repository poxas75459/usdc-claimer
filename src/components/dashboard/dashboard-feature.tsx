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
    "Tw8QN75CYbWbkG9uPGyRuZrF9VLzqRM6FUN3GVu7k4MqcpU1hgPmjr1amQp1BmxumPxspxUJU6gNKDe2tMhumKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kTg8MEUZxXaHVEgt498MgMpSDFWWeD4N5y2WzoTzioznq1v1FNUEWQJrq4iTbDkRLDHdhwjTidbBNQZPFTRfpLd",
  "key1": "3LWspuo6PGqxjTmMX3btnj768CwuUYjCY5izvwVTGQteRknwVKSa7CU3UEisCDVyHjNauATWLG1WLnWZzcotgkmz",
  "key2": "5qJtmFDbr1rPgjPf3DzEhHi99A1dEbSd1AbpPuA9DL9evywRzDo1KTDuLgqxNyBBYtKtzVhfXjrkEAyp1ux9NCXi",
  "key3": "2xDP2pDHsyUoUC64tVQc25YtxeqqYJPSAPbYEmTxJeDE3Z1ZH1VmHQgNB3ZqZzJGLWXThx2gf1xozL4d2152Dyy6",
  "key4": "51oMbSGN1DXu3qxAxZj1SzWANM8d6xFTZdE9p1MSRzBhEWuQWWChFoAc5wUB61zHFHFxBf6M16WTrdvbLsWoewMp",
  "key5": "3ayMwyEq6Fwi9yzDnBD6S8M1N565BJrToqsUrrTekwFCCDzGM8HiAn8M9qgYmjNZCquLeaWQCEF2VVmwLfGQTAEw",
  "key6": "2DWQDBe6peKdQGSqEzR6GNPLsHHzguhNyfjPRVq2vMrrUUe8sTQja5QMBtWXJDnMfX1bBXcxfEnF64eEeYvjY6j3",
  "key7": "wSYRukXJfzzCKRv1G4wrzXn63UJi1FoRtn56ixJxYP2R9xUZD97eJAh5RrJN2iuAMYJCsHLkemnDGUVWyn1D7xD",
  "key8": "27cL5iGQuLmarvkBA82TwiyBxJBqEqT5KRnVi4QMJAAaP4Nfp4ra78D6bWAQPHw49c4v6e6PwuWV43X1u8ee1y1S",
  "key9": "5ekNjwqmrAhP4SsZ8FsfAvbi97xBPM5pheyQMuNFLUCwXGKZY3qZxVxRZ2Rf3qm9heNNH8HYh9jKQLWzvj3BjbqL",
  "key10": "5SLqJzfriUGW5AryJU28wNyoy8orTeVRT7ttk8spbjZ2vw4PDMz9bphMj91EvvSjQPbE8AsygWyt6YAZMbaMWNdF",
  "key11": "2m4T4jug3PnVzkLZo3oJfRGnFn1jP2BdBz14GKwcsm7GCu91Je956AAQRmMfHNu8x2mL5zvZKEMQCibs4u7GBcFA",
  "key12": "3TaA64aMLAp4nEuWEXvDYWdQw6Y3Jb22PpZeQquFk9pG4KP32B8nZsKE877tM1d74JeCL1Y8JUvjXMxCp96efH5H",
  "key13": "564ervnk2fLyMxVSnNFtRY9ScL8Hckqf9RKUwfyCijPGiPaTsTFFQuUJDQNSb8QNLB1TJwynNtTMgkTfLypQhfGq",
  "key14": "4WMCHTYZzaV2pqv3ywqUW9S6FLC37jjG389jfDnB9LVw1EJFegmR1HWhSEzzpbwk9TpF9GudQ4GdvPGGC9GYvcDM",
  "key15": "3ur3n4gtsGA2A7PBHsxz9AaNvqEQQyHeqhQYTnyYEQNEED1ziocst6h4kqN3opUMqJEPegiiHs85zTjJQXaZsTbG",
  "key16": "2geR19eD7VKyQtomTkk641YBjh4SMJ7uz92AXeeJPsngu3SxBDGQMTUEDigU7meGftBHEamxR3iXh2EpYajjCwHG",
  "key17": "5kWNpZoYC2cS4XvHNFXe8U7A3xHbuVgqiTPhnGJVvmtZppEm7EPq7cCH1QD2hrE4t4QXC5axHkdps8KEr7RU7XWw",
  "key18": "37gkUjYFSLrAKLfRUM2pYdjd7y3aXX4XYAnXFjSgX2vkjGoeUj4ktjBTZpLvczFpaXvTZLQvmYD7b7GGYq9XLicX",
  "key19": "5tjif3eCVQyQUitRqxEXDtz5nyAoVqcjkRGvBdNKCRN37DqKpy4tyvbKt5ujf8RF2jDdXDMRzo1ebz8ZZmTEsc9C",
  "key20": "sognCZZSg6sXYAKimAp7J9LCdKwJ8gcQqqHqaueGUiop8kftzXWP6cDX2n5snBLBqd98XVNCLGGs8J9iMxvWfQm",
  "key21": "5DsSacPmEbPvYio36AkhmtTbsC26G9EnzkN8bfxK9Q6BcYVw2z2Kqkhjv4rNBr21cy1vZTybjjM15fvkW1zHdiyB",
  "key22": "2sFdtHcSzvvML8gXHVT6UxG81fhhythDZ2qGFPUzcvcn2MLD9Fc3sN3zuJyLez4dzdqrXrJsSXyzuSc8UTqTpBEc",
  "key23": "49yLkWj9eWVVuciFncPndWqTuxBESLiFwQwwvvxjpQzzX344NmcbWhzsbSF7ogBdyJUhZsU2kvtLorLKy1yRAKQa",
  "key24": "48fFhZexWsQMo7TWCWyaMRLPuYwPiGxMKLPwpaMhenWoLSXNFbzWRNDMpUb33sF7Edsb4XZuXqHvWSytWFFKvJUz",
  "key25": "YKEA4aw6fL3qrabMJMsfbvFLRK3rVoPag5KiatqGQAyszD1QrtAr3wSZyek5EHKASSi1g5cphN8xxgYPZK5qg6p",
  "key26": "4fWtUjvGnHbKXkmNB5p8amCy7VW9cVFKEYwDTYuu2tUcfdQhnKvC2WEwJn2ZUVPKGRid5nwXtS6p46LPfTRJyAqu",
  "key27": "iYxC99rNtQ2zTdjz54yFU5ehswscpxDST5aiKWzhSHSbxHeajfoi39D2va3rdEPhTs6CLzRjeTyDv4Ea6Uq7pcs",
  "key28": "gCpkjJEz8FuNbJKoURYRRXZySjaey4J4YgRDQ8dR1ySvg2o7ZkDmW2qxGAcfp2vzbxCT9zrwSKsmuJYSTEQsWjS",
  "key29": "3TU3S2RPjVqCj8GhxfKVMngEqjysRMb3Yqf6vrrXEwRS88kCGA3n8Jr9Fy5EnUuuR1J1q6ncXPpE1wHUcpvTYpee",
  "key30": "23AvM3xRrjU17YhzUBCQP64zewqCzaZyeF5NY2fRDt5ZbURUqkYDrufCcoXbUes7YBGMgzjAcQMTr7qYLqAeyXUm",
  "key31": "ejNWprAc1AEPYvAGhDjUz49YepkLZ4SoaHnqudaAktBNj5MwrLLz6o37VGi2ij7SZmEBjfCTXaJU6vyexU25gez",
  "key32": "2edg2XDFzjyRqhYq8yqfkkiqiSmTyjUaqDbx9CWky7ooheyu32GvpJaWnKwuSZECV8tq3mDLLCEiLSQ1PBKV14Np",
  "key33": "3VSCqLqCcyKM955sS4DsWtYMSCxpZupvPrh8rRjSMv27q9ufYu6k5cUrLjn3pcZJKaZkkZT1G4qYrVu63TCGVUVN",
  "key34": "4LkPNHhVr724YR9XWH9wnTT7cntF3SKvK13yjda35vVPDSaMtRDfmGC1tzHu9PJz6t7GFiZuKk96aqSNxXDsJ2RB",
  "key35": "29kEQ76pjXAPQiCbXyjXope5AJY49K1LMfEZkLhCr311LR24GuG38Zn3TkEnhiqKcPvYpSAAnuUFhmBVn1GZuQEq",
  "key36": "NdZZkKLKSvEYYvFDvzgnpmkaGog7TTf7RRHL3uSXGDfbaRpsXWYUbJzFj7jULTG3Y1jQsmCdGam2VfZNGY5jgq3",
  "key37": "9wwn4EoUbUkwrKwz1iN9FRzY23vBycvkXSvQDqEZNTe43ZdN5h1vphwVJbTCQjoxhwJHn1e88geFQ7NxJ69hNVE",
  "key38": "2aP5RFgbJ2MBDr5pKFf1Jf9ZGYf4yjaaTT4rPv9zvpi1AUzJRPd2KNM48bi6JJB1QT9sPf5bYbmqrDy6Zn46FRKE"
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
