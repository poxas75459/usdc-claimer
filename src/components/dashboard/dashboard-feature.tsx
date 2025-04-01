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
    "41n3ZuPm49yqrypQjiorjdDwZ5gQ9BBAqCxMZ1uCe19TU3sEs7qx84Rtcw4oGcUfqq8zKu9A4bk6TpscjYei5Hbm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YG6j6oRzyz9JrjBqhM9cHjmKn1XYpqerSr8qWgJ5tpkMuTYAWfAxnVCGH9VDcfpwEcPfraGw8nZgZbVoZfFp8kc",
  "key1": "4ekSur76TevuFyLZtZcQi6TtzTaP4EDnJRF3GyUGaZLPMjmTDTAh4FXaBXSzJkz1ckMU7ambnyguYwMmMBqjQqfr",
  "key2": "3YKAp7ZhPxKmBSCaHgBcW7hYJB37YQQcs9TqDUY1goNkdwrK22twC4kmcyjEUuTDHWk7oxbxcExtrxqF18vAWznV",
  "key3": "5gvQ173NEYv6An1SkzYc2Csw4NfrdBCG8GHt1UC3GBBVxKpthPNF16JxAsPWrxfnNmJY5pqtzWNVgPGSx4EcPer4",
  "key4": "nuRam79xKXZai3JWnDqpiJHchnvvTWEiPt8AHRgxpuideQQVeVXALrpn9n7ERqoKPHbMpsYYp9FLFsfXb5jMyn2",
  "key5": "HmSdpwNAkZGUsG9fqw1C8ePNWNgR2tqSrdMDiKXqcmaw7qxqb3WPa9XtBUb2UqJTYqGuxvSFpZGHRJXx1ibWt9Y",
  "key6": "4BPqZnTzUffoKpxue3MmPEqYYuYzZzNjtjTGPgnkkeVtdULJgUvU7ewn22Fcz1gjkFLApzr4z2xccjXkUfspABEy",
  "key7": "2Up2UcrKBybiYQeJzoC56BnrfSas7pF9XWAuD5kmW2jVdcjfhn3zrrQC4vud98m61taW1tCM24zN8G4jRAmT7Um5",
  "key8": "3VK434eiWiFz18CP9YgsjSbCJ3C3cVMwqU182CJWGcdZEj17mf9LbCrEbLyuBkMLXEkcXAbcxMsvAte4bg4KyCrG",
  "key9": "5EFTSvT5t9hFarambdEXuV2c2ebacQG91oQoUFmUJ9j7eqv7DKD7kKFLVUQ3s1YJFEtynmGkjhe2KL6ppnJGL18j",
  "key10": "3fuctVg1RfjLUzUby1B9xbHrWfKHgMVRR1HogXic2u1c2DybhzCQpvC9KcjF6SQHTMipeJu2aXyod6CEd6eRnWFx",
  "key11": "487LZFB2Ex3YsVHKcin59F18QKjTYWd3iYCFNMMXcew9mY6rMQwkV1wzWsCoULRWYXNzCEJZmWizcGBxVy959wuF",
  "key12": "2H9p9UGzCXcxRKP3UYeKmbMhKpu58XvxAikAhU6LCd2aDNXaeenyxdSviaeMYaVNDpds81AWvAc6biCjXtm8J87c",
  "key13": "eDZXpoJdTzf2pXdQf5KGYR4uaQGAWEZjXAq8kGuh4ZE6HwvGVCx45BtXQBBoDCzt57ThcqGzjJsh6PJ7bT6fxcz",
  "key14": "3hALFhmi3qSdtiPKCHxedAcFpLqFvwjdtPjgbcCVx9QpTWEp2oYNVF3Fm4suzNQ2REYJhKRXrrmrf5bCc79Scbm4",
  "key15": "mkxDkLSUEUbFNLidGmqQa7B3eESzs7L47spEG9havis5Ru3gWzHFRczuZfu7Pft3bRdXcaGGZUWXTtKPcXVVacQ",
  "key16": "3PwmRieGxoD7agGkMMUPhfF4CGKSJbTioToAgz5BHgv1RrfNHQPLHRxhAEaa3rAtivVZbwNrWqxXL7Q264foJu2n",
  "key17": "4SC7FLGb8Yc5sG4TUGPLSZLhe5vmoaVAGUqQn7JvNCz9tSJw354uu4XaFppF6JoTWDLF3JgqyRqhZkyGQ3wu9tt",
  "key18": "4xs8YrA5xa8sZNZRLH4ZChb82b4QwwfqkpcqA4hdTxktieYkiBV4jGcWxKKNgq3qnLomvcKc7Fs4jsSYCsQjDwAQ",
  "key19": "32JxnKtN7roKPn5jWbT9nAPgPpNYfenrxastNLixbfKzRrbPQ6UANY6xA3ganjBH7ZCgJKHmBeBvpLFSFErwzu61",
  "key20": "zT2br1i7kEwddoURMS6JXGTiFd34VrNc9LmCUa44iPmNgks3LV1TYQX81oYtPionNzu1BCe1xNQ8s2ggy95amEj",
  "key21": "3dte7Py8yn4QbERkGrK8cRZQUbsWRxwzNB88oWPSJ9h2ZYfUMp72GjqoLQWkMQ1xkp1w6ebDgA5VqjYb2weCvbB1",
  "key22": "UAHjfd7VrBXsGdapYnM2wqWG8Vb68yzMm1KZtnMDfjdzwsJoV7rEyx7f53PMf27n1fxEeFWc2ktyWvPR1d4STtM",
  "key23": "441duHUTRc4Yv6iM5qCJZSyCZrVgKoE8qaYTKtYofxhjkzi4FEjzMFCVG8iU6T52R8ypM9FWnc54ojNWvYJgymS4",
  "key24": "2PxnXpj7o9YeRtzWQPcvkYfmt4mX1dCZM5errHoja8PuHWnQi5ny7uPhY99KBbv39xnJ9nLmU8HsYtcLBRnA7w32",
  "key25": "64pyNo7ibgroLgm1qf8g1qBvTTrR36ehdfV3oKH5PhJuboDaGJ6w7586XveNYdjsv9yZmucHdxHh1RbJvCYnLWi3"
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
