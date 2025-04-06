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
    "4BYR2hmz1KAMzuKaSnokDsdpsND34Qzu4ZdGxDFpv8a1zfuBYtLF1C3xDsbQQiYsBYU4fxqfUGeHpeN2VJfo3gNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37XNtSaQGCmfndCToh9L9zTFzDVnCZfncMAefTkZ2KGD3FFapUrbWYGnH8MxaBBBDozzAqWp7jXKpzJJcfx4LDCf",
  "key1": "3zcDieR1Duqejf3ChtCZB9Nm8Pa7DajneTt3HS51XsCrqkYdMfEArq2273HEiqkGA5JbctEeJJSJWq85ZMVPWghQ",
  "key2": "JoxdM1knks5WmQUM6xkNqLqT4QyzTAT42jFcF9yYQStahB5WYWyUBjELRwMN4srrpxu6AexRmt3rd7ny7sqoStZ",
  "key3": "Do3RNqftXNUZ8eVnTK1qLAYQaRPM35cQDF8pi2Q6MN8y8yk81DMvvkTe1yzsr2vsLSLSCwuk7JKGbPDiWmskwZx",
  "key4": "ENgCUY1vtyXL7j5CrUcuZg7rZ2fSxXETSYks29F8UtTztJRtFBHWQdsFR6MabqgrtWxpeKR7P6V1AP4HZekqxpL",
  "key5": "3LYMV7cSuVBcKsEkL6UqycYJZqrgCxe47TDcgVQZoJu8Au4bFCZrRdN3qrdBhDkd23LUtoYcu7gtAMz5CMCsxZ9L",
  "key6": "219Goyg3sMTba2tC2UXGNgsoH2z59qPfhenTuNA9bQKZKZuhQRaEe46iHjffqpF6HyWSfyDhSRp3PSdtB8NW5hqG",
  "key7": "4axs46vd6HHcYhrE7TGGwMA2xrUdpcKLUvfCEEZ2vrrr63CGNRZVpFcLgQMwYU3UkTdstg3KcmgvoJoq4EvbCJYm",
  "key8": "oeNxJBRGLuZHinEpDuT4bJGuot5axuHC7n1ZSPoN3ZBVzPxy6F45mEt33apqM9qsdHa3pKkYGNGgkcW1zqx4jXD",
  "key9": "4M3VnZvDfzA11orMksMDeXfRA7Qi6so47jr8mXau63xn3znFx1nxoXFHSHCchbUnwyQqAhj5KhFfBK1ipdoFKCZ8",
  "key10": "5o1gWDHZYhsgVsrJj4baAAUgVwdRzqcxVW7j3K9KYhmLf6NtXKT7738vfFKE6ykqvARYCmJNELNHmBat3GEzcrw6",
  "key11": "66PGGrrbAbJFmCTTexmFivturWB2Z8veoQvoJh8PYUhdXTAou2XRf9cDYgc1EXk2NdUrr6iY6oKrR2giqNJxJtCU",
  "key12": "2BK9uzLbesjXdvVRmVTaE16Kcze1m7xwUsFqLGi5EftGRtTDfDwXBb47rH3MENUbkpTWqznCFsXZudMHkUR9FM1P",
  "key13": "5eBVzgk3JcLuSgaHctLUjXMEUN69tENQJSZuVjGSnu68DdgNb83go8j2z7XeC7uArMbYrPgB14925Nevcwn4dUBa",
  "key14": "41VBSLv3USh9TYNUKpdTW7NinJPpe9aa8NeYEEU15hiRY7iveCGSqxHk9b41wk3imPgEZyozbEH6Ro7YwHC37Cwr",
  "key15": "36FwMrRdcaSomqAYPJYhzZQRb5E1REM8749Pm3LKcpAgRxYgueJUX1Xnczmp7QeE5YjnHzf2SvFtWd45t2ob5AkM",
  "key16": "2Bd5XoSXeG5wVQaXA7amSdvg984gPUJaxJdThVeTRW2fUE85XXmMqhemzfRZ3WqAAX58xZJ4ioaCQtzvPL5N3R3f",
  "key17": "Hg7w971ZHJy1248VFSRDzeB29mz5LTJWgQ9SK5q1k3cySoTydYsXs9gMW7gd8udkWjxCs2YUaBcjPGkKm4a9VHq",
  "key18": "3USBw4JZQd4Eje2kQiW6nf6w4HxGDwRsXmCQHvP6YhigcTWkLJsiUEr7kzbMYqsfQNtm8enkk8CZK1jBfqdeSr2t",
  "key19": "73m1EV5s82eVq1r9FXji1jhJJ96x2s79Aoq29c3u9z62Jqejke67RSnDcZfKhSw3cgLew6LGBLoDRgJYNq8FBcN",
  "key20": "5mxguC6fLXtRyDnfxa6Aby7FyRnJNJyzcCHMmJhwufFJ1W7v8jetrn32BAiGeybj9uMGDDhuWZ7ZSUg7ftRLGV2T",
  "key21": "366k8b6QPsBxWW12ufxB1pcdtfZwNECtHoJyQtGXhmB53WVCbFqz5WLWxo9pXYo7Sy69CiySbCSRt8nGz9dEgARb",
  "key22": "4TDG7G2SDd2djTHxRicJTaj8vvCTk3y73N5Pd4cry4oGVFUSQRd1NVkQUWhYQNbAwVTHn7TuR7sKae6yYsgqAKg7",
  "key23": "2YbRU2o2adXLx7NLcNQXoKsnp6kgCjxVYhoinzifFMbszAoPLrpMdLrX3bDKK7Ayh6gZCXEV9zpVSTzPsGgUnjkU",
  "key24": "4mUQjH4Ja8NzKgeqSsrZoAF3vb5ggKBsUnxHKKtkjbQC23r1mLNquS6o6ZXjXwAXvrRLi5eVGR4DhHCUztPHuWVg",
  "key25": "4TxM1EeQVDJvRtq6a2tp2KadZwWGdNNuBH4tju8pYteboB8DWkXrKeeiAyuqgmFjQNeDvGQo6VCmgWLiZE9iGGSX",
  "key26": "346ryTqtGHetcTqthjgLmynTu2EvVzwtv5tEUmaUmWVfpReZ97WwNEUvLPxKMeVvBTZCQdb3hpDa4mJkdikZr5bt",
  "key27": "U75tXMrR4xev6LKjkwNtbugw1dNviUF1zcKLRvExzE5VGmzBXB4oHq249Qsaej2q3a3UfaTzgiKRn2YphnXy3AY",
  "key28": "5xFPCeSaxxRnnsHcZzE8wjiDJn5y8acRYRoz8ETKT2ux5rdBsS7Lc9SjpSGAC2xFbMtFhMUmtFLFbKoFZf4x9pbo"
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
