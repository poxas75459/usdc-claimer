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
    "3ow37oZAJPJp8TKwEDuVpV7DhGRTkgJAPSMVHeBAM7m92XZrUeakPrdmQ6i25BeA1jjeKFV9U8jXmBUawQMbRYGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cSWf821UK4Jq3p8c1E1yJ9K7Jb6hzxgxk1AFszBLBH4FBY1ZPe4FHQHoagZZLkx9rCDpNA8317ashNRQBm67ieU",
  "key1": "3a2fAJEEUJS2Ldtsqh5q8DqgsQFgwmDeB1UeBcQqRcWTxZyVUPekCoLm1vU83cLMZUdgcdk7QL8Le1NK89XACkNe",
  "key2": "2vyJheSg2pnx7pAXboh5CYeYsfnwU3nnF8ZMh27j7Qsp1Ei87fxJFahhBDXsDb1YGV58eUd8poKpM8GX9D8dXLFo",
  "key3": "4rsptGixv8edSSBgdMpKa3u38GiLcBFUZ4DMmHiDYn4Z25DT1zKqrXLvcepEBToFJBhWiHMUc8zNvXac6ZfZ2KSn",
  "key4": "4YX6nkBZ1bhbAtLy71qVPy6YSc7BJhevmLprJXVhkuyJyFwtKgyeqCRw8VipHob5qPSuN5CFm98TFtRafCzdRZ8U",
  "key5": "3Y1Y6EqDyb8hVnYeGt5KHd29pd6gMzKU8LcHFs81expLeYaFH3B3Zx1gR6fh52JpnJgcd48YMGALDrrsGJjb4zd5",
  "key6": "3GQQLEWoVsTvVyjHiFJw2pRE7JB1zdnF9YpS2ZrAo8dok1rZZTRwJWWrfMuTkAu3QyMqXHzrnUXz5nMbXkGjgdui",
  "key7": "5R8cciwpGgidX1TE8BxCLTHQEBPVzBJaDcRjSFzSq9UWafCMfAQBgaA2ThPMeUNFMWgYZTXherLc8xy9QuTmKZEh",
  "key8": "4kmWuAtQFwcX1ajmPH5PVQ7nG7ap66rnCu5fmTSgJqLnDZoWLjww931YhgMocrYL19kitBHjUfT4qKKY7WBobbmD",
  "key9": "37z7oTfeXDMHyfeCFZX5ePVhKUSWAhu9hJrairYvNXMFSkwtPZv2WiFoQjRfFwhHwCXMKEHUzxkyPR9siMyxJ4cu",
  "key10": "2koFYD1eZjN9cyhk6FS8hxxSxBuMxSXps9aN2KuHbQtNA2SQwv5qQuprjM3b2gG51NBCCkiHHhSXX9eXncknpaUX",
  "key11": "3sGzyHAnpbxVng6QZUQ6NTnYPVnb4v8ZiLsTyeCTP5hCpX76znfFCAkH4AHaPJZJ1GUKji6kZdYSQtZgtWzoUij",
  "key12": "2vRgfFtqbau672tg37CFT2kQma45de769XjF8TGv8RkbwcX2zVQKodrBZFe1ewT5CfUVLjoNx25mVp9Esq1XYCLq",
  "key13": "24tRoK9VgQ1yoa98m3cSpA3aEmUKJ5jph79fviMaUHiPb6DxhzUWZ8ydJc1CVBH8CBcKcZqspbFMdyJ8fxFtPmL9",
  "key14": "4oTHXfizTvstroxnNsKVgxfmWhQQgCMugYXyQDPCdTVdRMp7mdocabR2cDiFZ9V7TR4ZTYFwrHigiVessgbd6cTz",
  "key15": "2vJdi6LaTY2FitZ3q9CGP5YGsLdWKpdR6ovwkHq1Xt5eGrGogWRzpgjLjJ4AzTTVuAAie3Amc95eLwB2iF4hUwT8",
  "key16": "2jTA8m1Kuj5jQvetbvizJ5uvozD3EjJDk1RUK87v91BkQcpgeKLQrzSF6Z3aoRud5nLmFtzsgGvJTuHbrKYaUjbF",
  "key17": "2qp9mLsjMKDvBGqFvgFUkxymmYy1s9HBmrMaNYQoZm5eLZ222HtVHTBpRddcqFbx8VCSMChK1ytUNL8k1wjzS9HN",
  "key18": "3s5H2UiqDZvQDDtcgNTv6hJq5SaApxHmHKT4TgTVzfhXYCjfMpaZt6a7XjcRyVS3nH8uEtQX9xxemqQ6Wd1eWKN9",
  "key19": "4RG9bZXZ5yvaB7U6umHsDwpH5yEimNvsYHFW5YKrN6Am2kLYidgF73qFBJEXK2DyqtoUoLQpezQwKKDT8dnfLGyB",
  "key20": "2ANRgnvUQD9KPoQ6mbrf6LGhSMd24AK78STGYPGfLvYGoz2uHsxY7hap6QDg3WkJrDKZiaeZUoHzNvtFe8rSH9ZL",
  "key21": "fFcNAiRnJQLfBJQYL1zrUu7EGZQ67mgN1Nnp35oZsAwm7dhkwWU3cj7WXc8BP224cGkvKy5QiASBr2tB66pKFMH",
  "key22": "5wNxcFUHVPvrBjaD2iSjHrBbqBw74RRBVLcLH5eAzQKELTbfxYNBqV4oq3jWHGvVMmJ6PTtdHjeaXZF2WVe59vnQ",
  "key23": "rnGVhHLZ9SdJnKG9uEqZCvsibqoR9LujcrTAX65L7Lyz7B8J1jVZudFgrfXrY7uLfQSvQ7UyZFeUJ65FRSF6Mef",
  "key24": "3Gq8HzkKvqPnN3NN8fbCp6Kcgk5wSWJitf5ioy2eDU59bf8j4RUmYGRPGqugzany2WRonEC4dWsigCWTFfCzFAVA",
  "key25": "3aVChGp6KgwdaNCt8xFc6tMpfDiQNhj5Xg5F6gQGy4aTPSSc67Y5ivdbSqM373PuMAvAi34epwSY7FM5eAvM4y4H",
  "key26": "5jbnK1g6T21XypMfamPogZdoSkEH8dSFvkMmN9CEJ7arSmd83XpDFkBzVzjNSApegVDUUDxrafaKHQTWJnGodgre",
  "key27": "59qANdQSjsnKbFonnCg6xNyHe2pddADGjp4PH83JW27JxCfSa7x5C6H4rp5dQCdVQeKxAjKzueUtQWxxHmxkHttm",
  "key28": "4N7TaDLfUq7n9cuebVAH6TseXbwiMyeryYvvNdDfuJDGtfpPLd6ZGdGCHkyWWHr9B3XAKKDP2q9pp6U8Ls3pRn2y",
  "key29": "28ZKdHzvfphtGvhX1Z1WhDziPbgSMEksDBE3489YuztUAqcaUif6m5fTFPiee5cv7DZZd8q8LjwKUCnrmyoLYivw",
  "key30": "2ubCUALS6ZbfgaptrnyUXWw4tNvEHnPAbk4dnfn9UjnkFZC3u1nsmHhjhrafAZuGmfRKW8DciuQCCmL2akbu3Qwa",
  "key31": "5x2RrYdJLwSAM2RE9VPxWijdGztmETWSr8ecmQcpKFgKQCVEuDkbJnhbGRLb28Uh3cKZk79QKSivsjdKBkQihYrB",
  "key32": "5LXVNHA8wPC1vThdnYvRjrq3tDjJ65ueoHxrnjAYvSFPbhjaVaQTdiT4koxst3rjwGpjrX92ayhMntfsrnfwAm7t",
  "key33": "3bAbQsazdS9qWtBYWmkvk4K68n8dYbyjp9mKeK7XLyzy9H9uNUmQr7HMycangnb3UaUE1UU3GMUv3jbvERLeSe1F",
  "key34": "3DFnLpzDb8AkpEtTg2E9do8bGT6ZL33EeJ5dQGKU8up4eG8GNUByLFthgyjicnGYyZGWpng6cULUBaWezfNHSRSv",
  "key35": "Xz2wHqi59KUuyGbf7eKSNQ9sW4EukJU8M3WbDfnmhGmHRqC4uQJT1GbHjrj9of96tfSUEYbWzNJVmCQTaCG8aS1",
  "key36": "2N54PB5sN5ER6Cxd4vAk41YmMVuy5LDbexSq6VVucWkhmPPKU8DmYoWHLGNtD7i7cNtvt24oDiDK6rnq134QUZDZ",
  "key37": "4tBc7vcfJq4LuZNLXXJPRFJ9eLJaNjV2TKJDAzWYShzGW4rqeJDNuueNJuVJ53BLBcN3xdNE8VsvirmsGGYL47gN",
  "key38": "3HNHGBRMA86RfjW5hvPNCVaz4RhpwD6fsDjjMDTuPA8qqeHeqMDdxrk8w5dZeypDYpPxfmSq4BDt4cExDnjE3rrD"
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
