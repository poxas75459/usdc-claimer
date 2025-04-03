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
    "5m1XFXF8eeC2w2Nr8BxMBM38RFTJxrJ3JXGvQmY2ZjayVN6m1ujzCTUZrHUgnGDvHU3U8Y8irKiBAbG17C9hF5aV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yiL1fCUb9TQ25oe32psemMu13Yy8jeWc24fTEAdteUTrxsFzF2EtQpLGYBMkjy8LTzNiRA7rm5f684QUQBj4SNv",
  "key1": "jpPkdwKTusrVYc9enhoUyBt8z4EGavGuVcneQP7Ncpk8hZabPJgHmQW9cS5U8KJNMMPEdaT36hxQKWLv5LSc7Ar",
  "key2": "voFNafRdrPYDbfnaAFAKHQkNrTHF9cPKBd3Cw7mNYRDNKx1hhBDf1Zr7mJrrFxMB9owr4kebZBS3pHDn6a5noHo",
  "key3": "436ChEbDk57VUGV7UWp7ECvuSkLuLjoJ4wSX8uHruNmafPckDVssAtnsT1Br939SX8TotFM4WVADfGJNujgoNnc6",
  "key4": "5VsKCDibfL4pb7CNqBazY8jLWQZLsJPQd7yDyfSG8N9LyCrQzPjGRwC6QGj3zWdybS7MKuFgv1EgBRYL7SJh3npv",
  "key5": "25grVD53tL669okZyium9Vpoy9whz1YNu3XW3cZFbm92b5rN8PGHxNMgetDcU2nYutRmhw8ep1uFV7tFDVgW4nvR",
  "key6": "3L76MX5Gx8x3gvgEt7gCt84ronioqsyB4STJpUtJBWkQ98wLeHqMkwohrNtbn9RYWAduZWiDr9VQqKJrW2EWq9Jo",
  "key7": "2VUjXLF8AgJwfES2zaF5iNBUUxy13SvYu7YtBHGxVNAqYmnbfHsSgpzoUoPcozLzz2UaGXBJabVHtUqKTn9hM9PB",
  "key8": "5oJkn9Y1WhoNiNbWsfVMi3dxNsJemwvDuhMpfgtSt4xo4iyvGptgFss6c9FPusBFTA1AJRXGq7XQdW1CtSaf5CS3",
  "key9": "55xXQPDXD5NcYgsgmzcyDwGzrrt6B49EWKhimRQXUcRQjxN56j1QRQabzJZvDPgFTfQuewkkzBCWQoqjYnauRZ3L",
  "key10": "51tRoYuvU3wGPGQ1wrxhwS8zPK2MCN2hdznzHh5qBvfgcNmmwZf16pppqJ9rxeMgdkkebyvHhj5assVVWnJEqyDN",
  "key11": "4YZdbGTQQTTYXbFbMfW2NtFzHzevifwt885uyMpFqqTw9TWjHCrB55xvBKEUPAGuWH64z8AMdv6d6GyhKkJLsAn8",
  "key12": "5rFtBmPpADi5X1w7bw821f8K3rKbbCE7kDEa4ZD3Hiedmz4eFnHD8RRJTe3o8gnCZfs6e1iyPhyCLYf42c8niZMK",
  "key13": "4LqCaNj51ZpSU3T4jsxkHhjSZLiWgUUgV7Qr49EmMNgkDsfGtHeKQsrx84z8PxEQBQQ1aDK8USicMJurAi2GrKKE",
  "key14": "44D5W8QCGpeTQuESf4En93kxJtG7wHvMj5JeEvsnBRCbLJrNqaH5xr12vEyUdrSj6tf297obqfdKejFLMcdZb1dx",
  "key15": "5SnvxvHxgw8t749U5Un2UfzKKZgweuJKJV49voSRrGM8bV3P9LMQGGzhwzugLFQint6RLfLhBnhiMVWUTtrd1Aoh",
  "key16": "5GZ3pvddVq8U1xEfvfKKsq5KH67XZco1znmyv19o7JBM1ZcRctftVD5nYD5eji6zNbxSMcb5aLhdLtnAniKJDjhj",
  "key17": "4m5HR3r1uxKyZ7uRV94xmBJXbAaBPwWupuFXXqFTAPw4aCvy8dVJaCaaXnPQVMbxQ7FGHaQdzbUrL58yYJp6tJyC",
  "key18": "392WE4goxKhwnp3bx1DevFkoFK7wrV4drQdArs9J5GkwCoRALtAvCLtCx86y98x4hhbivqq6rkqfkCzLvZGymcWL",
  "key19": "5KZ7JRYaSKDKs59bddZzfcKAuPM6i7ip6pC8Z2W88a1NkaXvyyYc7Jk5kAyKrRbPHrvKsxg62qBX1geMCR7dvum8",
  "key20": "6BmfTxHNEM4in6oCLqdDjZ28D2z1AYvmF6KLHXBjLsUi9CBhkgoeu3uoCHBCe6QWVYkQY2PycQM9Ep82YMjcotk",
  "key21": "bBwqgwGPkGaEkFCvFbavpVQSRuregp9YM2FjuhoMXG7shsuY48FwJsvCK39rXvXxXVmtYwfHU3wGxTAMFq5azJf",
  "key22": "2B6eAkUkL2xuBbifj8bLZXxgzpBJmL3oZebMP6k5Xb3UH5WvJu1wwnww6cJVLQVqyRfmeH2ZPMvEvW3mMqMisthF",
  "key23": "2VoQ2svVsujaHTfeyLv5MLVoPXxXSpEqZWpx2a9j51V63gkE9hp9VcdCEcFxsqmy1tFX6R8wGtDd9w6HzCKiNT2c",
  "key24": "22TcPzB36bAcDLLnhfcVQtA7B3iujs69BDFdUTWrHbtfgJQnELV5r42rTPJGpRstjqsCzC4ybwEfwZzN7Gh9mWbM",
  "key25": "88MRCCvA6gN6t4TBGZQr6mbmixPnvaPU1tKL7w23jA4EN3hsJxXXjwym8niYTu4xNoWxtEvPkcJ7AouaygC8Ljn",
  "key26": "4VjCHEtnmgvrifFEJkJMMdUouULaVAMMDxkDSpGaN3FQDddcFDMLckSWAAQn76gGPnvySUZQG8XkVF5b6BcGW2gh",
  "key27": "5Tg1VuDGxw5YMuy5PeYzmKEKP5nJ4BvePp7gWWEpR6d4VSX78HW19qFZ9hhpYet1MaqbjpgpmkQ4yAQEsMDzyLe4",
  "key28": "22XFWQ8UtRLGzcrW5SFYhxfyLV98tr9wazHcMkSKoFEJS6M1t2gLLDZbP51ABhirpDUQaC2BXHcxzk8hLcdhpwYq",
  "key29": "2mqSc31hqGWByWcSzWr5MX44G2a9Vidpzg3GgUwC4LZgd8KnYd3irFJ1jpeah6dbXgFCPVyPqHKckKqoZcCZZKnd",
  "key30": "48sb7xL3KeVVvcX5ECYmLPXEChaFnfqjLGgitMbDj2vA5VSob3FtsH141Jps27TvYUL3QYF1jHFP6ECKyZJXkuQE",
  "key31": "avBFx3vLvUkBCVwLFoXCwiPgzCpDtqTgUDhfkzUm4daDVcRzUBjwiGdbUd6MuKHBcN8euf1oFXK2u7EnKCLCwJD",
  "key32": "3nbZvjXPQCrT4ZAAbpEy2thvJ9gooq8goyJQRejDVEnkSsKWFLhy5sRzEpQJN9BjHTp2ST9gkgxpqLZXDWSMM7p7",
  "key33": "5Q5hxK8FiSW4q3pSR1kvez7R6rbPShHUJv1hYzgojQE6kZPSGCWzfM52QmVBKgTdYZnXZV7YVaJFY6td6oGgHYAE",
  "key34": "2t6at693geqxm8f3c8fmenzHWRYnynrc5bFET8KNDomG2pmD9ro7h5U5i4pB8e4vukZfDhZxEnAQEXQVfA6vJx2V",
  "key35": "5AEA2zRbePTXrDq8BK9sXQGcSFemEDhpdxVeonv78atZkq4NhViKcDahyS1LYKiJqYkLBDMbQYzVA7j2gogTDtVE",
  "key36": "3onnbubgZ3CN67QWhTmYFhr8BgTW1QqXeEETgauJuikr6HqGAAWvkCdNTBkFzqQvB1L7sKSAvwvLGwJueZGgZMHc",
  "key37": "HPmoSZutSHRepHRi578mRXk8Ss9QEQR8b5hiXN2LmLiMDBK7Lw9ZKK2ixdrCMFUNJL6LxU8nVasurFMAgE76SeA",
  "key38": "5sGYPRpE1aPiHVzHxV6wSzwFdmb4ei5pfn8GsbKLjd4c5cAhiz3nrZAe2ZuRakMd7JHXWxiKucE1iR9y8yecfzsh"
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
