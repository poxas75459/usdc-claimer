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
    "3FSS9Dsnv3xA5t76mALDan2k3wkXbfa9TZCaK1rckeJyLLKbiqs2cRnCSqneofQYhTa4a6Mq7mfphdvhJeD9E3XS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53UmQc6gu5Pbx8S33PHMCqQeyB7HgQGDXup4CTr8uEo7EuTi5ypSdSTNGWyqCFcP8qwAeyY4MAE9bfSTAbvjP4UA",
  "key1": "3eV79VyEagYgMkEHjed8dY1ec1gKM3Vg3j8FAAkTXWkCsg5mbitEMNKbnUXBUDqiF5uWP6LoeTK6cX2EeShGKwC6",
  "key2": "4GTDxot2odMbWwuztJYjpsuKyFxCbDDb47BWBwQHqCASRN6s1Bk71P3pZ8TDj3j7G5bqsLm9tXar4eXRmhMBfzuk",
  "key3": "64bGpHZufTVQPvPSLnSJWpJEUKdT9H4wXtJdvTq9YvYCQeT83wAWd7PxaijR3o5oRGhSMxcUwYV98sJesVDn6bJJ",
  "key4": "3CpXu6S22wPsXFBKTz8GfCuCQeHjF2woatBi4PWeA6DJ2TAbEY4isB29Zaz1hptcCoykswtFDKDXY9zjvzsfjvNJ",
  "key5": "3xtUQsr2SbRsG4SNe9v1HyfQfRcNMBQShEracV1CDdYLhi6wY3pEKEABXQ4EoyAL5Hr36yXMjGhqmuRDVkqNBFdM",
  "key6": "sBWjprDZxcupkXWXNGYPJUkidKW2CXpL3PdR8vJ9mD86f2zH9d4a48jd2rE5drw2vPkVocXDyRb8MH3yT1EmtjW",
  "key7": "5f2RykYLn14cmLfhcWGf33K7SoRC53fJDDYViqZrQssd4SH2sWNhQXeYEMKUwK5bpj8WGrA2GrcYVzo5Ga6AMeGL",
  "key8": "2YFTBmJkreDLNPaqEbRejBe5JK2NdBxYMgvvZyrL62L3AVZTopHxcS3ttNLTBVsVVkHdbWAnTPJ6Fe6L7sLozgZC",
  "key9": "4fTaeAerm6JKwFUBSBHQxuMwcDSfSK3iMvpXJNxaHkCVT5ijn5FF9cqQDsLfRBtvAV1keYVrq5LMp1ddaVxH32Nj",
  "key10": "4R3S7Q9wBQ71fQV6XzhrZxmyLWPh2REkdTkEU7De8yRZkDuGM6oJLt2MNGRZn17DRYSUSGVoyEMvwRHVG2XtECvq",
  "key11": "QVpPr19sQbjtLdXqWGGimUNYSDfESwx2D9p1eANp5DrKEFTGtw8TZgyAs7cTypkiVhBL2hCsApBmnHP2eDDkfq6",
  "key12": "66mg78DXegdpCntJLwRDWTgCZC9KoDWmQ1jdR2URTxtNX81iSEgRrS4kZJW5Z5ttkxd6B5pQASmxd44F7p6trbBx",
  "key13": "5DMB6LF61ECHsEkGWP3DhHk3YG92ehkNVERyv3b3TZq9ATAaEbfrr5FrMRKvRsE5CTx3BBH5BkRoedVaGy5oCa5M",
  "key14": "2o631bFX3v8bGjHsX4Uyzc4xAVnRXAx9WwDGzBKb1kmBMKotjHcWV7ismWAvu9NaHNPSX8R1p15XXDWP7kbnHPGh",
  "key15": "2UzZ9H83wF3Hj9NWpxfTfZDjesnghgs7cSLxf33VsEutWXKuYzTbqjQMrG7VG6wWhnoAkNyRany3rfgLWtPXWyVd",
  "key16": "4cjEGMY5AgHydxC4UejcRk2bCvGbHkzgnuNjc4k12YLCcn2Hu7S3tgTBjon56bAJZ1m9U8P29tkFZX8uM3uDHeu3",
  "key17": "DP4cLtNQLEKHtfYTVDJh1sXHRde9VdmpZLRoMKngae3RxvRuKyZHYpcXvoi4CHKCDWNtTQDf5ofVb1TpK27CScU",
  "key18": "57GVvjMesNYxzb7v3nmcQu4n6zhuxPuBnyhtAb7yEbD6BzmexiWNvrzdF1JYf9EQXzRNGNG2PVRzQapi3DQnjz2L",
  "key19": "98nzdJMyvwpNbWhH14QxcqWBifj4XXGfBMte7snZuXQbreYSCBvh4FFsAGU5d9yN3SVa1HtovBdAoSkkSf3NRL6",
  "key20": "5NWfUShkmjg79ueWEgv3osYLLJmBnUAxRg9wBSpjPb8VFVxtFmUBc8P58oHuufqzbA1pTRoAmv9MbvViqU8qGmLg",
  "key21": "54V3FM69Dh8eT5g5y5gDTbUfuwffF8ajc36YMQP5gY6DB3xrPrZcKhnWE9Gm6X2Sx3WCTn7vSffvFDNi11FF6mDn",
  "key22": "5Pc7fzMuQSUJLbLRUxiihVeNk99vLB3nYX9NzorHxwuNHUJg3MnmKddnkKmrZdqXbFbwbW75vDBGgGxb5cSjjHEQ",
  "key23": "4we5Q46vYBrSgsq6VJngjtBC8ZNqtpKgQsJjVEu7sjJUnEm6uBGdaydNc1UZdtmRBk3b2H2S2acSXtCBfKEChEd5",
  "key24": "36BwwQDrux8DKTR1wLwsrrdFnfuGd87G4Xpaot6s3tppJKk3zqHRkDCFVSgHDTy6xt9pNuEhZk6fV6MPVydUXLRR",
  "key25": "5nAZ9o3JvYrZBLK8d23Pt4xtteWDUBCDVA9Y6k5x3kLEuZQnMfb5Aa7vcVknEHYuQdmWcixJQB5itc54G7Au87u",
  "key26": "2Cjoq3iTJFrnciiJVEUuVvpF1Hfc2WF5LqHxDtM5J7hGNijceHngEef3qV2qV1XGtctG3ddaip7R3otWJhwH2NKW",
  "key27": "5Ae7RkGDF6UW1HUnGwNL7TMJu7wTihMxxz4qBJjB9tJiZ3xivTwTT5ae4s5FmVyu3tQcFPePE5vxPohwyFfHam7n",
  "key28": "3Za33wFSiJYPNj4LwrURnaV96SDNSSsiQaamPkXirhGFHujEM8beMijJwYWqaXzCKFng9AQjwb6UD4rp53oAePMM",
  "key29": "2deNaPbg88bb9V9QZHwcR68xjHp3setS6Nxwp55xYrwb5QRzxUwPZ48e7bkMAz4HTvjXWQ1izZydCEmdFj47Gnw",
  "key30": "4PRU3ezjksvT163K5w1zmBZiuXhnjMRdYFW13zxTHN7aRf5seLQykV6kbeL4N4b9v8fAzTskdK4dqVtiNiBXY2QP",
  "key31": "4euHw4rbn2WgEdPfE9XjAGzWL1XLVbdodd7ZNEk1vhfy5mpGzgm6MrpywVpuHEREwguL9AN4ng3f8RLs8saUEX3w",
  "key32": "38gwHcUpyPX9cz9YTaREurBiqGDhhBkFa4JVcsvUXNPsobAEfmQGWEcYMV8FMd2apNzEaw8N5JN8wujTxnJHLzdA",
  "key33": "5t6xrYA3i3jrdJZH1qMZDcSh56EwkTuytsb3RdmaXuzZce27jEAqBDnongziwJQ9SmUjQZLxiY1tkj8vKwau5F9J"
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
