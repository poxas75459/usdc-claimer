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
    "5EGr6dLeZ6ZpiPSkY2DqaR4bof59UnAUebTAkzeBNsByLQX5dEZSW8BcsKzv9RUxAzsBLK1EfJTR36oLRy5Tqb12"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t4MsLQ8J3y4VUjDUmLB3NftzY9ib2Bam277FJjtGnXrT8uoMdxW11id5MWzLjLLHgbCFLRJFH8s91xDmjTYAKTg",
  "key1": "38WJjAUnt831MLNyrWVSTcTA9AhBNwZtQb1Y6YH3VsV9aV1JJpbqb9wuDwZLCgcA9fx8g9PrVgLBocc3jcBr6aTz",
  "key2": "3ppvAA1bxkzEzm8aXayUnHDdxVvLoUAXFxirMa9k1KBqJT3QNoQWFfK8GFyVrYPym3H8zfhdtgidm9rxS9Pz6b7u",
  "key3": "5JYX2tmmWAMNyByZgvPh6KzSRHDCnuuBzKAj9J3iroaaVkCiwAo3iSb7S2PUfvNZXiUxxvKYeQdtTA736RoJRmEx",
  "key4": "3bBVTAW65d1t1hFkt9MXfz7dXiJ4thxMfjbFSBULEPQBheFMk2MY7hXKAAq9RbQJr3REWwjgf6UAWjTp2uwcVm9M",
  "key5": "4wez4AgQZoT6zhhqCCNMqwu3SreLHKA22Xr1uG7UNtcDsB5CuKNshkyCbY4rp9JTVkJEoFR5XsncJtFLJmdkQm8U",
  "key6": "65XGiuGo9VpTiFNuoMH4YuSfb4Ex1R8PNi81CiLZYHnPJtay6Xy7T9n9sSQVzUjfmtc9Ww5V8kmyzVQ62DUEZEKs",
  "key7": "4ojPYP1m6RoR5aVWY6VYbTm5LE66hPPqTmjLKi8EpNQJnaSA1BjTWKd111bGgKGCqoWe8KyxDgJjPf5BZfyQyyon",
  "key8": "4hyYJJznG9kGaM7zvoua6a2AL26fRRmTehc3JRtUxBvoEKakNV5JUMe6uEBiWpEnABcyhL6kGU3Sj14G3WxMfX18",
  "key9": "5v1gczhX2Xq9YuWtmNfYc3aPpaA8H9JqCFvPKdkLDQKP6AV1PGUt11T8sbPDBm3hR97H8mjRE3Y7tXYkNbFGfLLm",
  "key10": "ubdeP7HKfwrZWw8pGhJ2djhpEKVcfFeRjqE4r2aSUiQDjjgg7mh1Gt7USLv6oo54gwTTuQbD164H75GaLiD6o5a",
  "key11": "3hj9eCbCGiZTmaWVbzW14XLUBGA5mxYSYTKoVnA6RzZH9XBJis3Nuvhfw7eSVRRJ9uJ9z29QC87EwEPhsbZubUpA",
  "key12": "2VSHtVbXENjWe8xfxCNFv9kg584t18Y6z2Rjfi4H1pWRCGDiv6wgyrLE8Sa34JrtWFB3ukSQGnogL41CvuZiREkA",
  "key13": "Ax1rGnqm4cJPLBbqvw6hhmZUfmpCRzqoWXHLAcpfMoU5sgEGu4aqt8LDWk6tmEcfUnb954bwajovgLWkzQgbUpr",
  "key14": "59NKmY49FKPMRDEpwFoD8dNToXi2oCuUNCZEiViYhLKWrdDnkVkf9uCy9fngKvBgHy5HQN6pz2kdqYCF5mrDZoFi",
  "key15": "2sDhTCvdqAYws9R1WbFXqoXtN7Fbwq168DH3kJQvUsd6RLLPBNu583Ug3MQcUcYqB8dQv5cHiCfTSz2EbzyfTkMM",
  "key16": "5cXGmjYQrix7XuVif1BQCnudMAZtsz6ucTzcAtXHLxibA8R3A9Tp3FficYGw7LTGzi8DNaCXjdJDGnJeAJrSaVYD",
  "key17": "LEUSpFzFW4Bs1MZsXCrErXRAaSAp3EBfm1zqEdEeaaHsAJx8KVF22NuemEXHUy8CviHRGD1AseLf7g8bdQqmXUa",
  "key18": "4RL7BkaktXZxZ1GUpR3QpeekGcPUdPmuNrs34uTfrch6zeB9PqE6U7Cwi9YmEKEbTwqydr1CZc9GRKrDSgY9UTYH",
  "key19": "3rMRriopgjq3LfHwVkMvK9TrsqnnoGEhhyHnggs9v9ynZ4Phq1seYP5TXfoiE8kwsbdnk2MEiN3hyZqGLCeQS4qz",
  "key20": "4MG7RRaFk7f8yN4Q9VnAKiAbLz28NbpAijPHUfPgPyTrZrkpgq5F7Ger263J6RVWRoYQ5ptbBFSFegL5Uup5amnM",
  "key21": "2SdSBaA9WBLELAg2cpMrJtzgvnarSJCFhJQa9K2zaGBkt9ZKS3qS7bqo65Yywxxxj4pKXBa81jQo1MqvNsKzw8LF",
  "key22": "6213JnDva8ghPPiiyi6y2uV86Zg1Fckz76VNRhQmgw5Vsq9ekYeumhmHdNptbRm54hbnCa9yKJJp7VjwvXpjC2eM",
  "key23": "4N8JQaQHweV7VprpbDh8WMNAptFnwwJDGc6ST4GxZ2V99vQtnikCsJ1dxm143aViMQNd1qESNcBWJSYo7Gix7vfB",
  "key24": "5LWmQn1JNwsaakJqc1SyDcNuaJ3zMwnhjNU84uqaKLzTR4bZHgTMQMcsWVvbbTSBB38MN4MpfG2NATai8czkSpRK",
  "key25": "r4cPeWMSVkdjD95F8eqGCHppRTvGPit9f56thmTnPZBEWXdJV6xhMuDoNBRNdrewRFE6xqCUhn1a9NbX8eJes1m",
  "key26": "ekHc84aeLiEcx3f1en4yppwM5eiufxjA4RTusYUfJEj2kKZxL85cc4epYS2JrDHHo7SBKbYrzcxxYxnBfsMfXHH",
  "key27": "36Pc8KK8ApJYBaN72YGfJo7F9ya9TgJ29y2ZSqW4EzbHqNC69C9y4yis9cvJsMzvG8WyHf54NZpkkvHEeLdTRiAg",
  "key28": "3bvqKF8sjxYXKV5fLduvj1HgtRqnZL9Ge72SWo8isCRb88DjJjeXEwr1auD7ifhnZsCCZFUGq3dpqXQBipdTBTR",
  "key29": "4RHzcK71sW44iFUB9EQsSNsfUHxRoZmzuMfPtzuvUJfXWwJzqcdKWBvqh5yikiLVkx6i7s49R5vjvGk2ptXVBYmn",
  "key30": "3D3gSsmDttuf8PW9ncCfpkNUWzVLy4exjRadaC7gqu9xrBZXCHuvJiZLd5XKXbehEMpFXyiSRRxwbBXfBgsiR2sN"
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
