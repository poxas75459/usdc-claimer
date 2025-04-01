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
    "nVt7Lb3yMMen6QBiMLmeRYmRVwUZZNzm9j6RtztjfwcdccVM18EFxibcoqRxAUKabmd2xEkoSCrCns17GhcquP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZgT7G3zDgMF9Z3pALepXyVGwUW8TxCRXuhgqVEpWhfm2bXbVxWF1ot3DwnCksocgUmmgEdYnWuexPmekX52WfUB",
  "key1": "5BLJB1HTqd5R1xj849v1Za9N1e3ZgajZfyS1sCjSgMvKsNCmMtd3YXvkrHR4yvzfFArLQmt6iR8XBL2L5SdVfcd5",
  "key2": "5nXjqFtMgGxrVDnTpxPZCYK3qh3cQNr4UPSjMAgKvaGkF28oP5bW8fm7AjaHN2EpUS9dvB8bSF4rQV84WTExJP1i",
  "key3": "4tmyeqABqMnRak2L6272eJdP5VM54w9PQQarLCxkhgMU5DtN5vfBEjfWExg1LHi6j399a6Y87UD2uJpZbt1pPB5D",
  "key4": "2gV2xyK2QZxfLKvnkFj9sVg5EVJPDjJt1bGJvWUWjaytacy2UiDU74hTkLDBAgfNCNM7TSMsyADrn3qkWWat4utZ",
  "key5": "4pWNkf1oCHN136eNimXf3xsitwH2n4FsoEXRVzp6qYc8gRYoMbgepPPdXzMeQjUbS9m7ScNhUDZdbqsEt8gJieKp",
  "key6": "2U5XTURkpJDHC5KnaSuFCgG3kVB97VkWgdr43JcBBQvQeSxvUv3RLQoXLAKZbXaNWHfyTbDYc7v6YoWZiP7FrrW5",
  "key7": "3Pge5gdiHkwq1rfmcCuoASZ4RA2DpBNC5UtSsboJXa95TWiGgNqgFZv9Bfzgjxi99pJGoAbhCBbKuCSjZSeUrnhi",
  "key8": "4bFpyyomQ4e6YVAavRNi1naQP2svWLvTQbJD7Ge33Pv34u8G4pKgoCqqi7i8Jy5tBcDEuTU87gg2v1wGuHgEL5ob",
  "key9": "3zv2nqbhcDH6Ww9XxRPecLRtr2shyeHB4SBwdnn8Lh26MX41W76U4YXKGb9dqMnnmYhPkyYrub9hM1W7JRvS6fR7",
  "key10": "4HQ5bAKxZv1rVpVQg2m9C5SgYSMDKAcPJer7jRvfDfGaxzggsE6nDedBjEaG4ASpRQxB7wnHbnGCgWRZ8AuH6suT",
  "key11": "2BEM3AzBtSeTKCvTEH7ZzXHR5g4KAM8jHtCxjnctesWKkbiB1iBDBGH55JbPimpKoMoTM5zwCbiT6XemkMGzipAQ",
  "key12": "Nny7Gf1HEBb3mvTvecLgRMwZVWFqdYzsE5AKgzibuLypckPEzwUVRr8CyUZJ8mViftdtLJABtVTrywhofj4nRcu",
  "key13": "3vYGs5wCbHYZ7rqWFgGg54CMHm6WMREmw9GGSXNVL33gotYFuLW1tECrc9RPqw1i7u9cA864YAhjVT5PmhSytBaE",
  "key14": "5opkQGYoXZQ7oJeVSfFuE1n9gFhxsxLqSPcUtZDRVoDtqp5XmgUM69u9iiJWCjxZKNz7RuXQCxFzaaLANeCXAxLB",
  "key15": "djiur5nPtcLCyUBMbBMX2b3nbL4dTgmY2eogDPruxiaucMMiE1QuCoporwMuWNoAUESTbTDYjzZ1rdkRKfmSTsB",
  "key16": "2TKV8FqfEbWxskPVaxquwU7qfeQfnZycxRhmuHazk2MnarXHDk24EFXVT6nmMJeh336iSVGJ3rt2Nw4gBqn9DeXG",
  "key17": "4zbZZdo4T64owATTRW96H836cPXwp7C6E1DKHF2ZLRgXpr64BbQnzdwcRgJiNJD4NGVF4gxRc9VK4jaX6At8ekgw",
  "key18": "5oQo1EmEvW4QPaMWXcUZfD1iWVX3u6sMqX3C2hPmRvZEL18EGx3dtS92QrbEJLmT8XUApVQoQNQmnXaMAou2J79c",
  "key19": "2HsBYmL4CzwvGfgP7xGAPYX9dxC1K9HuQVJ3Sknwd7ajdwJE8KkYAQhSXGyQni5Xs9JdwbCGhiPKGzW328LdSLQk",
  "key20": "2n8BtUKCMsZLJgoXE24U2si3ha1MU78je5AQnqg5wPPkx4k5uH84XqVMeg5JD65Nazik871KJQ9Tpppd8vX3zgVB",
  "key21": "4UNCnZXRjLt5o2MWSF1kEJasSV3CMuddQhj5UqgEmEMkG2ZcPRcZv9gPAmo5894hKdjPAaLbdPE5rZ7LKMP1WcnX",
  "key22": "4fpSAXpTCnfS2LGDXzH7DESaCYVgS7cduKcfYbTsAhzbnGBcnCXoJPg3X1n7b5qzRb6485bBsBpAAigKihL8njKb",
  "key23": "3k9Jwqgi296YKr4G6xrFBC5dzsPNoDySnZsM47qLTr9FiWrphQqCMKfkXpUXysykntp3uYTwcpKYyVTgfBVsn6yw",
  "key24": "2wB4NwnS9MDmdLnaz969uqhatCc5tM6PUUSPNTeN12UXpp7ZAV9mz7Lxuowrk38oiCumCfSvcvUEefHdYKXPEYcY",
  "key25": "2VUdesrDcRWF749XU19dxvwV87djdHHJG6Z92nenpoWRktaQeBAW8FDpbYy58DxqMuN1fu2kaoV3vtZ1cAkCsXnQ",
  "key26": "2bmqNzE7ahqYZn6kiBJJr5RTL3D2Yp6WmWAkurstivJemxBdosw9j1FF5MYPKST65DWuyb8Dxmy1uZFBLjZBPTGE",
  "key27": "38z2YDg3WuS2aLY5BUMxmaJA7b4vcrWY1RVgELpHqtADQ6PFbJVbk6ZvCVjcYrVYq37PfMNQmTcEuebaKqKUcPZ5",
  "key28": "53VuJVHfAu48ancaH9D4jQ92dnXm7MqhSV3ndSxjs7A2CN8o1GmFuWXsKUkp1UNNYvWQ8kYtVNhqAxC8tQJdCNJ9",
  "key29": "2tFMgnQL9krUkP332kQz1PGdjXmZbodzb1C4bumTnBpRBjc9TdyQFoq1SxULBR2nvmE8UFqh6FpjCjcbTBsoYgKK",
  "key30": "4NmpTQyi6RbwZxqttWXMsQ84YF1wdRHPZphjEowLuvmy1Ht8QSsvfRcYrWCYKH5YT9LjBwrpxsxTsaDLHVLT76i2",
  "key31": "2epWpZk6ChXNh5ejBM4P8QeR1cbyMKFretXtZ9HuBhZAmYaaJXtBAqhbHoJMdHKhYCv2jqMCgLeB6uppobdFUR8i",
  "key32": "5tkr1Z8tfstZhRmBR9TTA7SB8BEwAr2ZJNvZ4aKyF2TZUiEaaJKKjsoFqxBVYNcU8F6VQhTb1Fcs63EWAVwu7e3q",
  "key33": "2Vi6NowjxsTjhckwM3yvWUw2naoreZ343b4kHfz5iKPQyCTUy43Z5ngq4ySCtpEWNnpGRwNzuTM6fFdTeziiD2Ev",
  "key34": "CzxgAHoYmCmGH9EnJHmePAvcYLFdMYYa3WaPs2zMUVzLc2vb4UeuicofbLZQkVVadaoZE1EYFmJbnW7fQk5Z4n1",
  "key35": "AF28eCee3zhK6qTQDbRtj3RP3myFyPDEC55NREttzBJ5cN2Dr5NoDzmR5U1HgDFLiqA36mfA3NEAfZic5EFkDK9",
  "key36": "3CGq9SpZS9QBSx1W8h6cXF21Qskg771fQfS2nrVXcQ7qbFr4AANsM31qMiYYY8eQNswFF3xJ8S4v6LXuenzQhNVt",
  "key37": "2o1Hjq26NgN6TaVNCuLPRpYb1cpHXsRgQ91KqUAiBuaeBD216sPEtioGtkrHhtBDK9CQComK6wdJ96AAwZV6W158",
  "key38": "3u4A3K3psRnhE4LeHZgBHQz5BrCZ2t7kQ7hft74Dj5j5sMi6xBX7gYBxmjqpErfycQvCBez33XNEqd6Tx9ExC4v1",
  "key39": "65GSML2JrArp6m9XaVuQKhFAzx7eXgHbTCbmnbxg9FB6tsjDBTCyGzoNAGMZVYxHSiC9udGfW4CwLLPpr6iKqBdq"
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
