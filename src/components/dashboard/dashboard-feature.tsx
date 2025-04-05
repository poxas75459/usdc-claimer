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
    "2c8TrGZ6KCS8jaLtGpQSLSio66GkTQg4CHgp3VTAAKGAoUQfwz81u49g3Fv4qTLg7VanB25BzQCacyZh2sBwmvLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gv1Hw3JX7sKBxtaHpgboSy2VF2e5UQdcGcsSutiNupMJwmjYwuzCVgVhdAYuPvMNnPhcJxRu4W5vsLz3fNW7xK5",
  "key1": "5rQktrPSoeC5E1AWF4pLFzkNoyr7zxuqKrwvGojaYqUgccbyahGLbAAjDSk2PGAQQKwHX38odwroKRKtCrTu8sdC",
  "key2": "4ZxCsM3TuPjKkcphDQi4Aje8GndpZbVoShTcnpyY4yzzCtw8eCCWCUwMDMWu5kH9w3PTRALgZWSf5wHGZdqxYKBV",
  "key3": "FqzU65hEcLQ8Nzfn79eDDfFTarrLA3gCJXKxSn25Ku9ZLHNiWW55dhtGLJ9fMea3nryKXH9L1yUk1HaGCrd13LT",
  "key4": "5vrddcDHqH3pJJSU3sGv6iN7dpQ1wresdT8kRLJfznUZRZa1iyrkFxiYErwkfcpiJVzTrCgwQqUZ9TprvXGi7QxB",
  "key5": "2srcbuaNsTki2qnT2EJApDqQfUBGD2zrdQvDvgNsm6gqi6P7xp9sp97A35azGJaj3HadBsQsAwBqEQB4VmSZtryn",
  "key6": "5MKHSG7mRAcfA2SxTVPESq2vUw3XwrVgys6UbG3VdhxA9FkFiL3RAe7k9SZmQQrzirwWU6Ac9b8xZrt3gsBSJjC4",
  "key7": "5LnBMY3bS9Qoi9xSn2VWb2J1hAQVFhSRZyjAgNuZ2ig39SBxUdYvzg1DML8pm26bCcwrrGKsymdVfowjttbYbN8w",
  "key8": "5mcakNoPK1xy2d12rJFHAvjPHw68CiTj1b828CnvnBXv9N2ueipUcdhLQMEDkQg8g6jwW9EHyHmu3BmCUJju8d44",
  "key9": "3m8PZCMTJmXZrG7R1u8bpvcy96EtzGfXRTJv5MMpHcKbMeoiBeRoQoqiKKDxkF74MJnm6pf3gKADAE74ki3Wnaxs",
  "key10": "PDyMgAHzxT8NuVSXJZAZYPiwzLhy66QfZyVe5phGnVvtaHN9eSr5YW3igVZ1WsWrfkXFWis9e312325seTmXXfB",
  "key11": "438m4n6dbPEbJrTgo4vVj29uEc7vtFAECagRKq7DmBpcP4eaE3U257sjXQRDem2Fbdh4XKRNRfjeGjm6gTnf4Yxk",
  "key12": "54zbNqwUMramZ1RwBCMNZ2JEGNcPYnrrpRDB8c144KdMv6PUuPVwHRLDEnYDXg4xhzKf7LxXVsywY4qZCxX1etP1",
  "key13": "5U3mZNbQL3GGAXSY9zShsWbkgB1XsTJ7QT74M9DVjbEiTesEU7g5dMRJa65TBKTkhtmCp8wKpi8CMwNvyJVwhMYZ",
  "key14": "wFqJfUh1D5GUj1iMLMkvQo7QdiRm8b7YPK9E4Ys9wfFxMZFi1jTrhh5Bt2qoJsoo8DwW8vhLFhpvtSczPdX9ckb",
  "key15": "5VKmw3ZVG6U2fWcewqJ1SYm6JQjEBdxmXvpi73cpDPtDtVmyinqxLpfJ1yvy49Rrcbe8si6zaJnDaTmRsdRa5zh6",
  "key16": "5ZFbzYhQRYSQgCF6yEi6TBRBb5XXJoK6NNUxKHqpD83cSBRKZjH2qe1xkvnSTNTRWCBFxgt23bcMxE5QimYKMoVA",
  "key17": "2SbZeRTBT2QTVYQ8JaWNhQ1qiitS2Q3pkenfDYWqwdfPxSdrLm7yNUHMRiXYrnRrczB1BEZSUirhwpKvDTdT7LrC",
  "key18": "4MqYP7AsgNuJQ2CUk4BKBXPQV5yjAUBQgLovfH3augyfchrGebfANZgiUAs71HFFJMA4npGTPy6GDcNjmCxYePBu",
  "key19": "4BrKHdYd9cRVtVtkt77M3212mWr79zYE2AaAJqeXL6pv4nySpcjq1w1fn23soyCNK1MTXq2PBkg45Z2uL8JAgtYj",
  "key20": "126ubvw972imamz7RjujkgcwdxqrjLU1EPGcQruso88BVBGee89Rzi9aEqzxhvzV89MKfRf59GybydCu1PDajRTB",
  "key21": "24F8PoxzAT3bDBpgnwMUkoAJ8frbb6VCrjxLQEWR1ewL4BmhfZ5TCF3XG15LJqcaAkGQ5qngasJUhXKpdzueH9R1",
  "key22": "3iBGsUFSXKg8188BxA1gd4S3SU57W7ecjN9bdcRvxba3nXQB777vLXhiCXBJHewngmSvZfDkbt1iqPHqaLYMnZuT",
  "key23": "57ebogjafK1qZykWragwsDS2Loj4KoeK25qZxG4CAwG17DxUCZEbTa1qQUjJrfAJURgC4pVxDehL4PhWu4FEsHff",
  "key24": "2JEdcKxUTe3s3K4tn4ztgPLz36GDqiF1tCRQ7YerLaD9JrSL7aCAt4ghUVKW2AG4n6PPZnVof9TZ8SsU8y76sBZM",
  "key25": "2nCHkPTQrokTxQ2cxxFq21p3bPM7sAtENxmQdRhrZXqzdnz93k3zr9mSHhBASn5MHHnkfExjnG7wzqL8jNUySYjq",
  "key26": "4XusZoTosia9oRJpXVNPgjuYxmVSonR3nWKXBVWKJd8TwbY3XXHKWyBbJR4xn9Rvja8k3hsb5QR7Yc56VUbbjhkS",
  "key27": "4xfBkGrSZWuiTh4MRxJS5mm5zw6VeDWdnyUTtoceroGVQ264myKXdvncFx1uAU3kvgQLdxbEAn8UroaTAdkfV1kk",
  "key28": "2aq544CjZovgNAobNDFHdwQrKjmS48xgp3LKHRJ315CMQZzkEwgs4T1Dpa2XsUftEyCzEeq32KqriwGLJ2QmiV5C",
  "key29": "4HBULKkSE5sughXBJZ6nLLLyb1LgeN53NkYZPcTTNdzsjzdbhqCoRT5w3oEjxmRefiMGRFXzHnxfd6VjL4eRJ2JV",
  "key30": "2X1GVSqFsrnn74Lu8B9uZfFF1ai3vrLzDTAkSZzBqYS6ZCuWVLpeoy6nWmnDCdZrbWAcgmNiG6mMVp339CpDxrLy",
  "key31": "3KsuwX9BeMcUNR1sAMxmn6v62QAM8E4tcgUEMUtQz5iWM8N9FLgemZuT81VW5bfnx8gFayKjiDwmUNxjwFQ6KXck",
  "key32": "fqrjrBr5Rj7k1yWU7ZmQPdmgzD4nQhmUJDVq55mfzfKrTZTeHCbKVJx5UGX9Xp9PTo9PvtQXZx2DzLpL3kmrnzN",
  "key33": "2CBmkYAy7FKoRCnQrZhe6RF3MDHkL6udRx3fPR6y1B52yhwWtHHs4wbMzbuVGdEQJmwxS7VV9psbQ436P43oCyGg",
  "key34": "3xPYqDfbDo1eG7X2nmw6Z3VaKHSqLF8KPt2Yqquzsam1tdWBDFRQbTfRij5eJeausEyncHUESvwonux5BJ1bxqTD",
  "key35": "5P7vGnbvtdfnrBEFhKXu93et97qKAPnAmbWpvMupdD1XLgej1Gb7N9hWRV2rt8pmyYBRUXKiXQpWKpsrca7zY4D5",
  "key36": "2ZidSX3SUhNBFy6qrZAKa5tfkpGFPK8EhUYtvLXRWvAUa6p2Agq8Ty8r9uq9yXkuuJEktZbfySR6p4Qm5EV4pWuR",
  "key37": "4hwmVQDFU2MwVjc6VpQmbJKqvsJif2p8pFYzC4SYPkpo6U4wTBhLYTChZ4wqZ6Q1dUYxQEKi7Jfy4DbCBPjLm8Pc",
  "key38": "NP1eMhGKYgfFsM9BRUCHsL46gBNLznXBVPeQRiTpDYFPx3xwQYTuL7SZDCc9SBQK1488PCXaSEc9goBvT2yWcu4"
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
