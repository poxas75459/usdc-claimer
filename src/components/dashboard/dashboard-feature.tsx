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
    "4P3Mg3azS6LATYTSBUky1eHkjAKodF4qLaokF64rPGJKD7AKy2xphXLhytDKtARARKJqZ6Hnc64viSjmjMGnmksP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WKBTrGTcDPVK1Gq8YJAYRAdoskUvAoheKo7jWCK5m93DT6g4aPyYy4sdJGQKXVM31iZ1aZ3FqnZ8mYt1JZ6sDHA",
  "key1": "3KoasNKRsVmqEAP1imCgFEZBh8BpAHFvdc24GY4w3jMaQrNj9Av9zoVZFL1nuyFfb9nLRjwhHgZnom1pvV8gtrcF",
  "key2": "57NcP8saHqnkRmkFDaULrMATpHdAAWFte22PtGgB13HQ2o4YdiiG4RL2BtnDvzbofG5WY7vCQEqDS5KKx9jdYuXc",
  "key3": "2TZB1njmQVmNdbGjddPJbGrRz7cd1JtVdpyGXCK7TytSBRMGnfjSHGZ6qebbcjUkc6fKyiuc5cjuCg8v1od2Tdqh",
  "key4": "Hfxe9X1BE3rizWzNmtoMaCworWXdJLVfYmiF6HjDBcm6bPdHzo62tpHcrG5KzHvQ27q2hunAF4JKFePYrTHmZm6",
  "key5": "g2zqRwo6aGyhMXkBnxvbkUsFZZLqKcvcRsbUJeK7NzWeQiJfgnAzNabJSbLgKwyVLyxoH5vSJNXiSHnViKNhyLN",
  "key6": "5CqMGAH1GyKZ3rLhJydrjQFR5decVRmNH3YcEELjQ2woLUAGihRCMjhbJcdSNyAfDGyn6xooHYDzPr2o1fVpfQBP",
  "key7": "3vczHNF9jDfw1sR3Z5fMhtM8MuBM5bk1sLRynkgkDhWjuUorkP5XzfXtLsW8vC3zrbfVLv44M5Lcif245LmVw8o6",
  "key8": "2P97iJ1mJw8n5DAoHT5yTemXC5AvyFaEbMT5aqST4ydnKk66q3qV2c7L3mRBQHCraAb536ay33uXBPYNQ84QrpuZ",
  "key9": "4RzW4tSi2fhUwvsfrZMQSgwqiPEYavxFyRWLWQTdM9YGVEJC2KqcyEi8DvV63UYvjyFCTVgSgDXAHgwqDF14ui9D",
  "key10": "2GZUwTZSTKLnu8yRFuPpH98CWLwqUq5cxpd6JbVUqRMnaFziCDdmsg3HkTRLgTq1xRpPRMCjMsixTdJihjBjxDS2",
  "key11": "3Qj1EBQoCB53bHqFhuPqrmL7Y41ktfqan47c9tJS68kyrFRDbskMRD9HVuS9qWdEManF2pv9LWgwCaobdF7drYVW",
  "key12": "7RSbX9XjNaP9CupRMgotYo1cWVnp6Gvr8tTVzcU3HUTYdfSUREsckAv8dMKgwwezXgLRtBGsDh1mmmqVWsK8sBN",
  "key13": "5KuxJHqffkbxsR7zmMpEt4YQTHYDGA85Cqf2mJ9xQYuU8f38d92c79vwR27ox5GN2R7o6JznTCn2UEYzNxPgPR4a",
  "key14": "2xxymaMYnnHto5Kw23ijHM1xoCs269utUX2c23am4ei6mut7VNTnvdP6skvJJw3XQhUZVktZ3hfssTvetkssp3Ek",
  "key15": "2mWQRd5QXZsfDsSp2mWV3ZVzD33aKX65dqHCyX138FnY8vQgzYRpcxev3q67nAEzLmx7YqW4P6d8KiTaypC4HGHP",
  "key16": "2s2QbEHDsfLcHyLJKmD34C1EdcaWiezkbPBBgSAtQbt9B7hEdZ6WcTZJqfEk89q49fRH49Bac92XjURSkrBxYiWd",
  "key17": "uCyB8grwL6rHBwB5uRCY2n3utARHLZaHZZqgnk2XEfHVJ95f5ujMXWg7uYh7NEDu1P196511k7a5e3m5zuQ9Bxg",
  "key18": "ZAjqNzcxT5xNshbqiR3R3fpHYmLtGXjiaCpg7FQVugtoxG6tDNR8ur5jCab5uGwfGecJGppmqrLBH94NTqWvUXY",
  "key19": "Sgroj56Xgiu4spH4yDzPhVsPrWFhh1MoGaPqGek66WUw5qQG9cZiJ4gPKKobEHZFxoFtKns1WZoVx1YfjDziZU3",
  "key20": "62Hb4mDkJM1BYd2eEQBVHEesb4cSchUWJGi33hmLDonPupPEmDnCzb29csv2nTBNcE6fSVyYki3toAdxvG29uCrC",
  "key21": "5pNC7pQYWqt3VG2GW9CTDjdcsJ66ZHMshPSFLXdaGkwxskzMdquREFgRTZwYcWxymdAEG66MEo2PrKzSZt1CmU9n",
  "key22": "28s4ZeoGp9Qm4z8gMidKVthRDhKhtoozXRn673ndmZho6vQTkKvrQ5e4FAyx9tegUszzQ4hYgyWGeLQPTsBZF1Lp",
  "key23": "XENuYE3qBv8Mvy6dgr2kA4pTMVm6zzShmwcK4QGBzQYNEjr6jnWXtbXT6Ts5ek5TXfXjqQ84MUQa7Lw2tSdLnGs",
  "key24": "3nZ8hoE2WTzFUqDnqgzjvEdgofQAxsjSM7YCxNpT5cgNgXLs4wW3KWcLGLZAsHtP4g7RwV681ZNQC3eML7sQ5Kri",
  "key25": "5dSEueSYydvLV9s3o8crrXwHa6LHbVrBDx7aTiVUKasDSqFTmTkKQSY11XRTF1emgsL6hP2spwye9Ck9jiA8A9Pj",
  "key26": "2dcTFSL5uP4NT2nKW6jUvfnKZV7s8xYynGD9tKWjVCe8AFdWHQ8KMK8uerVVcrh8a3jQaaWfAmmCmVSrLEijzvyo",
  "key27": "VobHB8DyP5QbgR9ScA98pz8iGEhSqeRt6u7BQ1B3Sptqf9N7QuoyjuSXCB9cVGNRD9hgTGkTQox2s5JyxpUV1yo",
  "key28": "2fEqpQK2mrPeBvXn3s7wAmhu5kvKZXpWiKQZygLNsXS73dQE8iVaYrmJeXvJXNRWspkzCrUbZA7KzMuiZXonLnxK",
  "key29": "31HG1bAKjLNLbk2Xm2zpaqS5Z4X67V5nxNRrUbEv88YdUzNeqZjGEcttQDsKm7sej7qJjhU7v7jp8k7rugSscEwx",
  "key30": "5P4RUvkztTbWuayzC6MLAsoSSNUETze3JxvP8X7zLaVv6uysiPdGoK1mYFe1syPkd8eWkTt7f2jKitZwQYzU9Kvk",
  "key31": "5cVKHAkanbBpafLLJFYDQoQFAgtB9QZ7PFRtvgtSZeEcxHVTeLZhyAe6qFKdP7pJ6zcSjXKYRnBHnMe2nLxtCKDb",
  "key32": "4RzGTCjnMq6akCCh31qdMKumwEaMarq6yRwhU4tmTUHbwkSZK3MbyEBfN7BjUwLksZ3r9WCNnzgg6LGC2TbU98Lo",
  "key33": "3cWcBfRrCYhEbQtj74g2YtkQXsPpC1cDmUSByZiB1VY9cBiXPXLX7MfjRUiEpBp9JBzZcdbb3oxEPyDi1fmtEJxT"
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
