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
    "3xJpupcPdB442ZcLma2woEDKC4UaTCpvyDcaueXRbuSgNiteTFF1KYsFdeTvvXWTg12ykuJz1qe5ziYNfgWtJeFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s27gxXJWHZTBWfTWW5jY3ka2qEZ8TFCEdykbxF1RLDXqiAgdehKz6z2cMUwim1nrPE7v1rPAb88tvB7w6e9aLwT",
  "key1": "4HWaXi22acbKr1HXtXZoeD2qW6H4aYsyeas9Sj8245Vw6FaopjXAMdhAhN6TTjZ8r9WVgUyv8oKCGSdzYRuB9FL2",
  "key2": "2H9ne6uZX25r6iK4qehGGo23YUjDH1yusx6bEQ5bc5G6URdnQs2d3Vn2PdNz1X5G9q1ea5DyL8U6P8e3nUqyh7sZ",
  "key3": "4bQrqUxB4MqdNmeRCvY95vhedw8QPnGxV4uBySc34hNQH3GMbkTiTjhPbTTsnr2FsnPDXVgFVhbJWYp1uynUWaB3",
  "key4": "ysc2o84gvPhWJ6oFHX53Fr1nuMQgq6jbioZPGmdHERSRt6JyZKKUuUbY7ZK5wDVobpBqPvaPEutXj6K6v6pVW2g",
  "key5": "41gEj5uezUwj7mEUg1ys6nXypeewzx3jXqFu4ohpatoZAa17TQLhmMfBwNcdWZkrDSCu3SfWrzn8XkrYJJuGzYkT",
  "key6": "TxT8dmoUi5tYiTxQ3eqwUd5exL5D2APPeo6obfqGm2ya3kcF9JXdLaVtZNkk26XGrh5y2MUgSsgS2D9A8Me2wWu",
  "key7": "3RoV2NJaTDwH4UUpHW3wC2aaw9xomwLyWxTMVGmuHezsvqsRPzYTKg14q4c7bUey3m89cRzNU62MwCJaHpt7Dhen",
  "key8": "2E57iT83ahMwNv3FwS8ZYet1kGJsNkasFXUQ8RmB4vwgWQFGbzs2LSGhjA4ARpMXTpNYamRbZgZ5BBJEeQMSqpmx",
  "key9": "TxATmYCacgSRCU22QjARPuyemSeKhRP5Qb1YAREh8a7DAgGbbtXmnfLJwAbhN1nh27rDP54EFjzYq9i9TVaAeJZ",
  "key10": "5R4pGyG4dsmr1YRPbbvMX4zurc1pNeLdiv7MSihFKnLNJEhxgbynutG5Ejhxej4cYQUKqkSpeqetawjxVKFsu4ZF",
  "key11": "Q1HomVsvnJMQi3cXtEVBaGUNKWFVdPKtdv2b8RWUNdXHJhQnSb3AkTcB9nqEek68w2QYYUsiJu43DsGkrcSaFvN",
  "key12": "4kWFm5kykrBX6uRHy5N75LZ7xW5V6NgchyKoquPgXTMpk1WCxWfAXJagENLvP1NFJjv5iMecHhp7eCm9mGMjbNCA",
  "key13": "4cAHiC8PxDc3Lya4GoBhuu6PzZ4BkRpJWd4MJKu8fRQ922UcE94MJjsMHbytHVTpm2HQPVJr2MQCTy78EDuZdRM5",
  "key14": "MCryyxaoJauViJh22gwmFaHdH8WtpP7vgqEVzipewKeikDoLNvraBBZ5ogaHdZLCZVqcTNcKby7tt4i84FbfGZR",
  "key15": "4F3Ar51KVmwKRRvjAw7NMAFMKReTY5wySiyL8wNfQTwtjAvgk7FkGgG1CdEotP9JJFZAsUFMyNJpaGk3v5z9htov",
  "key16": "2MhBM6LPhhaaFpUHTg56cWuz8Ezaf9GxAjaX8WhjGnjeHw649ZunpdfE1iJYVUmULPHjVXvu3PrKi4nEjbHiY74U",
  "key17": "XFd9isVvxfHjfT2pmM1mPM1ZETzLvofCqYg8fSRpRaQFunWHbNYDJx7k7rrCCP9kZDsj1vBcdkyvMPocXjSKnAo",
  "key18": "272dxB1wpVndhsG3mXWuW1E4FmjoGAaXqHfW5a5mqKUfzcDQfhhKcBEtnPf4NyxNg5oKvnNg3SE7XUbcK3cWFaUS",
  "key19": "vWq9KzPQfFrDZuaj6BVmEeTKJXALYRT5bpRozTqiwXTG7iJDbkZaCBmGYkkdo3VT5dB61EJAoxrF1JUKHZdSgLv",
  "key20": "4soZgvxc32NhP5kBTp6kZpcKEVoxY4jBbKRXmyLpTxvGagsq4DTLxMLUvY8kfFLNo6NRqBzFQ1Tty7v9Hjm97mZC",
  "key21": "3MYCvbmkb3seFrpHKqXPhESaoTynXb34ut21a6SeBqjmbtDSFY2xrLeJpQfzVZ5VbPmR6cLVnCVezfeKxpqMn2tx",
  "key22": "3G5YXHoBYRai2UyVikCW1Yu26DtE97KdnxCgcvQz1fJpdqNeVQc9gtYZzv3zBDfLkx8kjKSjPmMLk6ctAQi21ZU2",
  "key23": "58sorGJQvTuMYkMhmU1brrJY8LF9uMDi7H6maziddfuRwcX2KmPkCcCE8b6vcrwY6zZKSqsgwUr2Q6hYCy5r8wVg",
  "key24": "427Pc5gtyQS6d7N8cBpXqFPLcMBxiTp44ABfGSzsrLxGD3k3NpVMohVgv4x7RGFtbTjH9tzYJ9C1ZkEB9ddnFeu2",
  "key25": "RHt8qbLV4j8Hj22BGgYfpoiT2JXgSgwNUGyTjviBJv91GKv2iZ8jNBPoz66QGrkJbtskixEhQeSQ2ELQ6g449z1",
  "key26": "27k9cq5rDRWnEeve1D41hY5djggyPYH4ZHPZgcwg3u8WX6uM8v6NTnYLFH898io6NWwm4DweK54UqYmN7ACN9mgP",
  "key27": "3fEXEdAAHH6YhfrCDo9UUmnfyjyLDdoMoL2NhPtpcfTnt7kNHLbcucVnDfv5QExtmcEvVqCmujpeK7XG3kWaYNMj",
  "key28": "2BdGUbxK6FiL4eCdajunNpbQDhwvKerg8jTqiwGQUZZS5zu2iHv8VLYMCe9KNEB8LcYtL3hoV9piVq81CMPnRjH1",
  "key29": "4Ehdq2NdKB8w45DiFybwVVYa853wKhARUZwHmcyMuEMV8ZbBFCp345mc4whRWKuzTn5JHw1nU8goBZ8X8Vr77BQR",
  "key30": "RRz75zmxYRBnXETDYBBemfJxTvoj3cGtq1GW1k2DigkRt63pkerYenMGjYTHVTgpLyapbs8on3cwze9W6NmaHUo",
  "key31": "2rN8dLNkYh6NpKwGL7XkgfMm8ByjLd65L3XNjqgEKfB1bqUgzCS2hY7isKtXmXupXTnWZcHPB5JxKNUN4f4ejNX8",
  "key32": "3yn1bfRJSpjTLjfKigemdrio3X16khEz7BBnHb4Qqux8XkvQMDu6ns4NfxxqFqJBZgwMxnGQfmPqKEXoxtivfiGu",
  "key33": "59qscL59p6mueSYsRSnfJkvS1UMhJSFig5j26UMHJF5LPaJM762nrCe6pyZNp8jFfYXW37fZHtKfwsJDnAwJVoKQ",
  "key34": "2T2DZto7R82jHy8ujxxcfjrDyM5QUpaQVPvZpNPpbLheUMD6qdgjHehNvXeVoPhX5642hL2siyqUpWhngWBpT3uj",
  "key35": "4uXPEnGBeQToLox2W6FgV3wQNiPAXevspgeZUQaN4JriAcXmi2DcJnnJrT1CkFjCswwu9DtYLwg72qJRmyapGgbv",
  "key36": "2G8EHqNEyLBok7cx4BmesuK4TQP3VVX4QwR9YS2H3geWQPKKtYLf3u61QE7m6zJnSPFSXPfwPW1sTwnR1aDsJH4s",
  "key37": "5DisAf5MWJnoAa9qAHn6uBmtf6XxAv4XiWrtVnjryo1jxzm4X57VVzVjK78Qes6qYxFJs7cuvAQ2c8TmzjKWN7Qc",
  "key38": "2EpXhPU7aWVD3ahdCQFVaGqots2H9J3eia5FXdywYWi23zpMyjZmtWSr3Di83NrtzQuka3WJUNM6Y9WeTK65XwDP",
  "key39": "5omxocczPi4QnjYdP91pVE5wLmAi53T9Aer3fhdf2oodWcYGoR11Ku8ZoktV2zxK8kRoFbcQNipzds14PRgqZ8TT",
  "key40": "4yL6K49VvEm7dY31gwAi92eveiUXhQ2NTLdPhaciF5xqCoqn59j9PvfzpP7otj2GkujwRn54z9XVyWdtcKphBcyK",
  "key41": "2c7cxH2wbTPLHRjdVpKQNC43NJK9wG4pYVX9rmCidMHEgBPchEyuiL9VRqjpRYxEJgF6sz3oHdQxkMLjjqvXK6uo",
  "key42": "gss98jvZwQsfjRdyQvG8DEuBrqVEyMM5tfjM9mm2NgZnq2U6GWxMUXTBddYLJpskjMthpZnutkWPAQPLKnvgTuK",
  "key43": "3ah2fFbfaLTtNeFfsWK3zmKuRti8fsXVn9XYteAKveJkTDH62DDDV3BfNnyszftop27Z6jTEE51DrH5Xi6HBGXDZ"
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
