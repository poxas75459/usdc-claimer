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
    "4Vtmvb7dYANMJr9XzK94powRCVhWzuzEQ7NmoiCAVJy4NPUPjBgqpKTPt4PDAStbXnqBTiUVKo7eHFVEcMARb1Pw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C28A3A7Q733G6Y6fXcyn8Wr69RE62dDDg9CbohtyUs8uXihdie3qH4xLF3ZrxKdFH7rZYfrXHZYU8JvvuqvKB7v",
  "key1": "5WsBoJNqADArzfstw4chXFxiSDcCTW7S6JKDpGd8zkV78qHhgnXtQX6d3V78AuLtLxk17wGx8qftimrgYy7y6mr",
  "key2": "52SqW4LNE3Pdj2KcZJXme4geaiEzvDumtHgPdqf5en9eCGshrUj7ecDJJzeqFgDLMoFFL38hyQdSgVHki8uNxRC6",
  "key3": "4RsJNCFMePjuhPdNZ3bTNbgEwi9q46k8XcYa8iypreBnWv2drpKEiQtipAtFrSokR7hiXMAPSh53ReQ8eGjEhvz1",
  "key4": "nuwYChnNnxuuhCQg1EZwpDH6TfTzUtDAwAdgQCmNhvCvtAxihYAhmSRf52DH3NNhipA5sMtFs491fAtpEMJwS4T",
  "key5": "64a2tfeEMpxXjFdkCXPVHvZWEL27n8W1yxBwJt6U9474gMB8oSpGTC4EzEjbon3Xg3dze3ngr1MFAkTM12X8C1M5",
  "key6": "4H2eQ2UksmRW49jbuc4Kctq1WyX6efgDjj9tktgJvEc2ztD8gzis2afcoUqdsAExjirgZkjkCdGjkBgubztAzrDC",
  "key7": "4gFJysXVNkmFijN6VkUaoWQHEku7WHN6E6vj6b7Xi35qRsXAgF2FY53XFjxAHTcY6K84TocLd1t4dCTma6XK8G4A",
  "key8": "5KRGmAwWW1ghtTvkQsUdqcmkKnUoJeTjRHuxnxxc8CXciDwhcQN2ushEVXD3jgVxAxB13HiiFNbZ3irCHPnJ7YoC",
  "key9": "5GLsZh96Xc9gR5SD1aYcdRuJohvhMVz1DBu6pgJdVFNatqFW3LaSHXd2bxU2Vz6Jz3HfXLztzKwAbsst4rrUwBuQ",
  "key10": "3VvC3kK1yGDYs6rG6aTefXJ4o3ZunpH6NQytZdbSkJEX5Xmm55uvNM6cQgJL2W25JZXjoUa5LXKrCVDbF2J3W5qP",
  "key11": "5k6k4Ld9MFN8boMQF8WK4d2VYf2gEU1duRyX3SRRGnVFCFPTAsFoesKL8NhCpE2Hi47SdgxJ5ziqGLdPNiGAjS2h",
  "key12": "5MurGz3ufefTYYYVr9NACF1yYm1AqbgJ9EFad9RfHyvadpWy14hEUjVPQPvUiBh7goECjVeAT8a7CN6VnBRgfMwn",
  "key13": "3XHQ7hrf4VbaFV93MaVvREmW2QfePtNsfjXFaqrT4yy9M6qkGVGMeL9w9juW7a3xPaQnBcbMoc8GDghBiSQXod4G",
  "key14": "5FWR9wSz62WY2TM1XTpyCiYkARC3qsVSs9NrLDQah5VfXs6QpJc6NNgyCn7ZbFUfQbKU66JKzgXSUd4PeCLqkpvh",
  "key15": "4WNZaQXsnpBkBCDoAeC6w9BF4FMs63nrQtha3XDU4D1a8nPJYNRZRJqWwD3xsCU2tbpCQsVzLqwAGLSmGd1x4hN4",
  "key16": "45qEB46yW4sonc84PZqRDLQ4bv3uLhF2VUyybMwuhwmzJqD1G2bUzD2yBabbKpH2VPRhfX7e8gFPxkDZYwYggsow",
  "key17": "4UnJXNiAtWzD2BphnfGjW5h6nro9fjxGJeMJCQStqq1f7QF3kfmzq4WHznWuvcF4ixzo3yoDWEqRdkFaF7xGnA7K",
  "key18": "kNWyPAoNGarx82Sav93imDBz6S1XbPGPDvXjNH2auxiANX2qQpPNCxXm5cneKrE1eTZ8DJ2mniWETydiYdceE8M",
  "key19": "42hDbXW9EDW89Bnv75s8bdHX9Vp5P5z1Y2U8WCoor5roHj8Uv8kDNKQyAwFCCejY8CoSMA4PK7XnWdf686T1qYox",
  "key20": "2jhm18whce5rGKxTVfMhv5cfK21yt8PSbo6LJVSGWPFB2jaFXunaaLx3WNbqRUizZhdKA2xfUwCrTtxvyDWASbCM",
  "key21": "2UNoi2zu32UN7h1emq3eCXQp6udzs6cpxjKJD8YeNzMNYF9a1s6joBvoHDpTDvSPxbUU6a4GJhZPLcuG1oEr2zMe",
  "key22": "5y85usMrZR61tu8qdTfaoK1Lbvgi8io33fCeEkbznzFqyYXYkHS5uu87m6qTy4dpUAonN27UzLfHWTQ5jvhHEPy7",
  "key23": "k6mVggXuoeVNyxE4ck9rBh5KZZTr2fnWiJEjASZbT2Qx9fPqRgYyRwcijJpb2FP9Hv8X4m3eDtk2z5ChSpPC96g",
  "key24": "4s6dodhX3QqHodnur6bKwoy6WUbZkaMXFnySu72TsP5KNVAvuQ5RWnB5xNaRT1eMAzqQf1vSCtNYNhGdBvs5Me4V",
  "key25": "eJxNpVt7LjRbh8RfL2TAtVHDS4y5SGLzJd2YUygSeuCssafFTz139ef2LK6spLykq9ZLyGK8jgd9g529uKfQEt7",
  "key26": "TzbdEcCPvc2cx6Sy51EkDUW2tcpWbi1KdosrCzZKjifSZVrg8fzzk7k54GbEgE4aaUMNRQJVdt5PJvaB5Fy2iDM",
  "key27": "3XAwVa9LfLDufRmCzmU3TeacfHosRNBX2TfB2CnpMGdu57wWWzPgNreWr288qaPUDaVdMvYPUpoSFVP5Dhwxq6H4",
  "key28": "2DM87C5gybF4LTsS7pVRMniQkugjaWkxNGfTFRnT1vHAqXesP3Sy9Qyrrgw4LN9Rto4QxPvwtMosnMvK8qfFt7U4",
  "key29": "KDz7Mo8QxnQXPSFZDTTtBmE8gGp33onVoZNDfR5tnpwEK7eAfWkp3RwXrkmMA7jXULQnQbkG3jRwvY2cjeq9SLz",
  "key30": "3PfXzTfFEgwjMoxdZtsjdv8kuPnVHzrDYubMsrFxJ4Q7mBjvZJyUKTGRLZgd4LJeCFYwA1mUYyWJCd83g1FpdDxt",
  "key31": "4MdMU91N8x7GapoDjP979eEDCEtYioxZSvxN9bGKinLRDg9jAzK4Q4ihasMe7rx42KgDckddzPeRjEvweJpY4J3L",
  "key32": "2fRBxXb1HmQYuL1CeLXaMUtNpuC6GomPGwpnggDsPjDTXWZoLmSJN76jHyaJMSYEBveo6GZ9CPEbabwstQLns28M",
  "key33": "4P7qowNUj2d8nWd5of3KHVrXUzaRVfHpyxUv93ae6kPczLeHxLXM25KeWKzV5YdBaTDx8bSC1RQpC1a8irLjtwrd",
  "key34": "5CVfbjPMNDv4enQReL6mNwC6PXWo2LSmHSLjFNgvj6DPBxyniDn7Dcxr31X1ojJf36vVoLbwrLovd6ygU7Rhd3xq",
  "key35": "3HRuVdZ3H13G6qrFGX7wb6kUE5HevVqGmggnjiBiH9owBqzJBc8Ca9nD4RydhFw8mY1dno97nhddfbthnoYNkzN2",
  "key36": "2V9cRM9ivarFFPNdtqpYbjfun5bdY7UWDmA6ptnRxt8xLEiGALafPcYrkp46XwznGBo8bPKqWR397MrgGQjjqd7s",
  "key37": "4Ggk6CpB6tDrQagjSMZF6SXvB57iP14sQU35tAdrTGqDYXGQ3Ad3hH23LwtzNxr9krCwhV3fH2xtCqahQabuqmLx",
  "key38": "gSBEBrJwY1xAheTSAjemEW1EAAGaJXBYw8XecunUG6DreMRFrfkv6ysfTaWo551yooK9ZjENm9dWHkV9gWiaAV5",
  "key39": "3DKaBrCiqgV8fTr4s5Q7AyYPgj39u8KTSqFQN8fn5zbGKtFgvxm2Yrm5gLMLXkqeLSjdJVjp41wvmiZRiw8jwhHy"
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
