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
    "3CajDNaWShx5wgR7FAeWQvCri1D5G2Dd7HWRhdvgn87dJGVgT4YxDEZcU5JSngiy6WPt9qamzjZfFWkqBVGRVz8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63avSDw2UWjHv4tHwTHUi5J3cCKYxastrxEtFduNHNN3h6wUyxE9vWjj4eRsJjPyBPFeiyVgkfSAdKJvheK6PUi8",
  "key1": "5PQCK7DpV2G5mvJJc4MQWcvFearE2zkJcxfz4R6pnbShijdg6QEknByBtAUFaLbJX4PrUA34j8UxeXMkyiCcbfwQ",
  "key2": "56ie5fjrPxikPTAvjjhHEWrt6E21LwPzRqsKLCz4UKBguaQLqaga5ydxBQnnacgBs2bpMmKN92W5u2kjwEfkSidW",
  "key3": "2p8UyaAkg31qTTte8EaML6SSt7SFa25szDzGin1aWsRDRLmxt6hZHk4Cw3NrNRWm63URpzWTRBgRGpzwvdhhdEJm",
  "key4": "2sYhcVjdXieBpME8BmhHmiBt1PVbVqiXhYcDsMjAsnLmB84L75EgpXgaDjoquxB7o8ARppyYneEJ1g2raKXfaZpf",
  "key5": "5QLR74GEnCSNUg6yrJQnUQLhSrgnRifvzrArm8dHGrUAwbtigkWcwD6RiVj7XnsXwwfaNCypsfL3yBCkgmUXxabj",
  "key6": "3cHcPj3jhencHE8ywtBwc1uesCQPj6b4fXpgwZenKZPC1faPVSDHviRjddSMgbhGnmtnMRXY6vJKX75xs1Y2wpSD",
  "key7": "3nsm3rSgGT4Jf4VETSyAzqjSgbErHogvKCv7PgjVpGrAHpAEJDMNeogLzLxsNG1hDNYGE4KfQyibsdbKFZnSCz8P",
  "key8": "2LcPRYiH7KycLgwZzQHiBF5NeL4RqBJKvJs8shidHa1RNA3jPBo4X1zfMqrVaLRPamEGWJoKka5jDPFX3TRRhwAu",
  "key9": "5jPpmy4BmtvpSUWza31QdtTpeKGJS8m8Q9nu2Hq6Gcx1q2wekcpGoMQinHVDSAeHMKyCgJj11iznk1StmU1RY9Ue",
  "key10": "4auz1DB14vKLtRDrEMwkzXps7oLJCCZoY95GsiZdPTN6idYJFawphKbERnQFfLpnY9Hn8JKQLrMGEzMJ5PrpaRAg",
  "key11": "2sQX8eDEnJ2kd6tK3wVin9Ee3ckrx3iJVPUzbEPKEXWYVFgwQ2qFEQdAsaGEnGbFPuaCK82HYy1BFY3Msx99LapU",
  "key12": "2ntonDNkhEzWGnEbsvwh17TMdfmvwjNgk7t4Rsz2bac98ExZvFHFksbecDzGbUQbYKaxS1m6EP3s5KUPFAEE8gEi",
  "key13": "2BnKAEvHLCHWDYNv2uDa7X9xY4AoCG4uVE6EpfjL1GbBEEPGEgMejobmzuxVH12Hod6n2PVmThFi9UMR7SJqnkm",
  "key14": "2adwGzArborARAKM5BHtYhLVZZAz9nM9buvdwxxuomvMofFrh2S7WbaJNLyKdUcWzydhVbHbFossas1xgzkHWx46",
  "key15": "3mnd5adbDcYdKEBHTJ1J4KCaeyTfpWfqh4VowT2Rf6rSCmtvENKRFqnvMEcvvZ8UKRbUmJ9NCtqBGyUdUAd1qJ8W",
  "key16": "iq4VznNuvDM42nwp1FezPYW5G8J8ejfxG8icYAsVi54iK7XSoW2bVWftW7YEKTyr8q2S1Rv3r785S9qhX1hgTtW",
  "key17": "2RUgtsHHz4p6Co931t3uNLdn6PbhaCSjty3yMknTzY5RabekaWWp9ZGTpGcxZQni4vLHxqYooNXm9Z3txfcbP5g2",
  "key18": "2Gtp5R8E5JFg5SdnbqSffXTihBLDvQEok78eJ3DZDgkjLeyr9aibQH8XfXNfUbVfzJ3jVkZpoKo9yGqqZDeFb3ew",
  "key19": "62fTjpkiATZzyx2QpRHEGnqSwFrUJXAKrZMpoo1m7kS8onDioeMELpJC3fCH9RG65dcZXfRBy5FizDCcab3kJPUw",
  "key20": "367taCKSfRHJWcPhkHJimAz4JGvTjpEjMbGFbfWuGao9c4hoX9JdaHRW4281PFq6Ssvzr2sUu3sPVcUxi31rsWUj",
  "key21": "4d23XHtDtnCS5PX6wRd9jkiDnu6afiDW6oNidYAQrD4hE24BMMuY3W5Ju8CfUg8KK19rNu4BawDt82Pr1fUJ6Q3i",
  "key22": "2mABq4e1UQyozfDSo1kDTPDvutBwAKH5ptShC5aPJyoDDWitikNw7n7E193pqXxxquwA7UbaZfwrpABfyJp34wud",
  "key23": "4KzCYAisNn6xhsYoe6hBphZ3wHhYBH1d36SciYoWGyWRn1QpWaQH56Vj6G7WFWHSSjnSdTJM54unHeps6MrbzhJH",
  "key24": "425hrXgSza9vQBGEnJJjfSaiyQbM4LrkoztMB4Z413nJP9mt33YHvEb3TLkyzs3feX7judNxkBN1DUnRGCw7mgxo",
  "key25": "5tnqAbtqWFP6J2KAEu8WCJFUBnEXoRveaNfdahbKaYjsdf7RFbFKQqZtZ3BH5UpsL8TJqN965DL6QXezRARnmz5E",
  "key26": "4dwsUBNFYQQr2eiGoot3bdJsN5jpYNaTZcrWXRxutqwfW6ABNXJWvfcEtyXQ8zztCdN32HzzfPHnawrC2yEYZPqT",
  "key27": "3u8iQQqa3wnGV48XYKWeyKewnMk32VWYj6Z9jZzbbhJyRGRHTB3ZUzEaBakinBxoVfeDwwdFa16fLoXuHe9vEKPM"
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
