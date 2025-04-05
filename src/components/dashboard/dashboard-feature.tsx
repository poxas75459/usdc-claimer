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
    "fEyFHZwZ598FnXPsNWq8P9j3zbHEri1U5TVjUfRvYJa4ocZHPt13PX2AMjSqJ3kiFDUkFzPK5VdQJuoDeTuv3zf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ajbFJgxwBEYkE5LqR75S9EjSuMK69MuLbiydx4dTkr9tFQZ6uWUvvUDqewkrN146Bf5UuexyDFcnH3mb4YUwJS6",
  "key1": "3sByZeoPw3AcrwfmgyDiLCSUosMkJxdJj6moEPawtPLcEhwhzsVSDFV4t14wtGd9RzRxFgP3zVSeQzuCuktwfzMS",
  "key2": "5QK32xtsCmoqhccMaKucJLaJSjRnq7t8AxRgi2GBDKxeRm7pFB389uSmXTDpusu1uBmvvTkbnEcwCQBJk8M1svEq",
  "key3": "uMTq7BypPcCisb5uaoiKBMiM7CfMHvj4LpX3hZcgRhDC7X7M4kcy7iKG8uuXZTizxZcdwKXtiNfX2Md6s4ZEHy8",
  "key4": "29xbgLrowLBcmDzEdioGLKE2ncQMidHK5Nf4RZyT6mgm8A8Y3Foe29cE7F9aWgNPYj1gEZ7w58iKHxHajgHwWZmC",
  "key5": "4NjhxBDSu8czsqGGXLs8cDLfh8UyUJj9tNZE7mUwXJZtgV4Fu5CRmJ4ziodAP6ePwht6pDiDMqeeVZBMoDRy17mN",
  "key6": "3SxjP45f5iFdBWCvrumPLNtk3JcBtB6QNcwHa7UU8rHDEF9Gr6k6nP2Xi3mmckNHQqRwELLLgM14wkip6t2QRvVH",
  "key7": "2ECPgsELEJtvCdoc4djdmbsrYcBnaM73mEFqSEYuPC88aa18iXNcSMtaLFU6u94ET6yBjFtUemTD7fhwSnEG6xXS",
  "key8": "2fGRRgXrZq46rNHp9UkafbXVVrVhXHKAQjnNfAXm1T5b31991VCw77jWezZScopJKqhUvo8g48PU3YDANvcJgPzk",
  "key9": "3UKmAfEfA2dTzz1Scg1KAb9WFnKHeW7U3L6NqBoy1diMH6zbqsZa48KoxoDvvEHfMiNCFsxxnQ2s239qhr5yLZkY",
  "key10": "2yxJ5m1Mdda19FzXLwwdX7zGJq6xFPGRBjmhagTfaesdsWXDDhCtK9kwfwb5gJthuPcPvd2vi8L2QQhaxXgQNM8m",
  "key11": "2b4qn9CF7JSc2shgEk3ek9m3svvHtM3HfS5H3RrKhSDhFFTMQt65ccWXp6Q9cZw7au5QSY9Brr2wBQUTKV2TbWQt",
  "key12": "4HK2AKH4jxS1pDvdmQXY2NrteJccLgPXxFSVd2kxZdjkG62j9B8JsWRsHJafUcmzqcojHsrKb6a7nrSEwx7kBvwb",
  "key13": "35HYerZeGafFnbE6MiCsdmz2pEYPrsDGfRSacms2Y9L7RRJssdXM2pWWWBBnNzmr1jRGwrH6MvgwFT7MFz9kwZ8m",
  "key14": "4cJxAvaRCAEMqNVCjksJfTRTpX58XrGmAf9aQ42Bvn4WPLqhYJ6GK8W86jd2kmtT3zSDYX1oKb9UJ8XmUTWsFWCL",
  "key15": "2dMJ8QQ3gwL4RE5JbYMpUmRoFARRPT3mK8upx8bSu3R2EsM45Rm2ZJoA54Kz4MhRb898qq1dyZWo3VXmnhRTMnRc",
  "key16": "25djhPoqdrL7vevdxbWD1zsgVdnacPUgz5MgXvhxSdz6chV4YbabekwN3kQsqZ8hPm7Nd59A14myjKtmLMhNFp9h",
  "key17": "5RedCAnKxEgWEbyiq78NPkuQE72w7hb2ag9Vmxdezy4ASFTn16ksruZ9UTSbZF7Lu3mhStoTp6X76TdfKvBEXQuj",
  "key18": "5z2eHkbUuJmx1aJh284ipwqfMnrdpigBjz5UFUNjNUHn8QpqDonTNVzeoWi1xYpgaZA6erNtoQLrvVL2KbWya9mi",
  "key19": "5tnTxgc8AZSqiakKMLkgPwGGc2cPkNsYBEwAfrJrr8mbnJu4mF1spDGZCak77CAKKYRFYS84ki7TwW1G5zbjPEH8",
  "key20": "4RoKMx2Zh5M6nQ51xmQs5PtaTf5855kFDLBNP8gRXAPjG8ES7t5gfqKbF6PidJ2ajxyKFMQMyN3MVogM7AA9vgQS",
  "key21": "CsmdoLaYhgPfTVUm2H2jgDcWDei8GgReNkQTmXQTHiSWijPnjLGcCzv6GxUfRKDcP39gCCHv5VCM6gje8YRaHCR",
  "key22": "3ZqY6UMruitTEw4B8Y2v9mUMpyYWboBtHCqLBaZVQ2sWXB6wS6BY9nA6xtLxKU99fq86ox9dShQrRp45zyUSRDWv",
  "key23": "45iJt7WW5TskFK1CbsANF5j5Vs3uopKpZ9w9rZ1ZRd5ymMG2t7CK9mKMVmW8yi88xjRLY6ZRyzX4eBuz1xjwwbo2",
  "key24": "4BeT6Q97mjJjQy2LHscKUtCVK2CwbT6qe8G67M36UEtjhzHXG7kbzfH1XwMALD5DUcGBtoAhXt5a83ij2QEHaD3T",
  "key25": "upFjZL4qTHQGNFfKM23emY8ueeSvFmbi9NYDqCQFRuxuMpU8HAkLMEwQKTbo3nas7L5s1vDrHKDZkdrKj3DwFZC",
  "key26": "47RDuNPejARV2p4Tb1DpvpAkLVczDRbJrptjv9P4ZUqG5j8aVQL5SjDa9KYLNd8VXxCrxxTBbZddqbL1wEoe5pBb",
  "key27": "2UEYWSvuNvxJNMcF9Eft8H6qdQhagbEkPXsm3eBkpYucznWByhH5RSHSf1BG9fCyocGCdWaWxobzH2fmJzhtVsNA",
  "key28": "49MxLGKjW4qzygk2cnYNNT9FwjbDcigetLHr7W967DswYxBcq1UjzcQvEcvbJ4RSzQLohd3bzxdvxCTg8MtjbMsQ",
  "key29": "2moFtX4v7jY5c3UCLj5iJfVDCeUmtLVM4wQVKwVjaU8ESetcwewzaH6taC8L2WgChYLbTwynmGhjoePGrLV6fhBn",
  "key30": "oaam8S4kceLKU29xbRpoMRjDQAzrWG2NZzYhmsYGTQimgNgVJnxi9EwLGBLTrKg8aKLMXLGjFdB1cwzypm4PZak",
  "key31": "2hV3Bur1v8XxpcioZ1JbMyDrB4WaBj74MkANCMnnHiu5xb5RR3XT4Pnsq36sFX8NNuV73XDFGbNSwkMFewp5Z61t",
  "key32": "adypWHJ3nQtU2epa8bbdxfwpbTc2rqUqWDRVMmSkkmdktKuqV5KxewYB1n9un384YRMeAHWBSW6vM6YP3h6jLaT",
  "key33": "mYFTikZTDhWuDnfJSbCJjejsNvr3hinNEwfJHgm3DvzhEpJNYNLuaB1MB7jtfxbPzWAZG5fg91q1mfY6QrBnxF6",
  "key34": "5uVScAanwBGFdBhYTE3R7UGe24ANE2hVHwhuvdfaryAvNHeNJyPZaJy8uz5TbaUphSdwq4oM8mLgPz8MrxEVDw2Y",
  "key35": "3HPdiR36QxTFJXB8cfGVun2iXXabnQdGmSfycr5qQaYwqhzHChPTUdxb75eHtxyK78qAH2WAD8Tvp4VzQgs18Yb4",
  "key36": "5TXhwYdfyvK1uo4k8RZKSRBnUGLYXh6zkMYxVL3dfM5DP1XRdB8x9i6y28v3PaTFCdMSVfXcQw4TPZL2SBuTCKLZ",
  "key37": "5RkzJwBciGTBTv33WKq3Xyi7kzHvxYwRRvyfEJAHxdwaCT1yNEUv65SdEk8CzJAbB31eZ6fXqcRKMch4FZfmCJkv",
  "key38": "HE9w8tDGv38ANXs9DUPZ4UoLdwwbvKgKUAhnXjTpqpMayrcyBFKUzD3xSg1qAH7MJ1xGPT53AFPZJvq9PPMcPeZ",
  "key39": "8V7SJwJPj4gheeNPSMdgBvipBQhk5SS1XX3WT3xXpTKWDnjg7Ng6LhdAa2VyVgPEHJcavNpeqFNTkemxKCAf9pD",
  "key40": "4aMtHJBafX6Pxs8rnkbFYafDer4YCE9Zj6qyWM7m5WJZ3B9F1kioz3cXAsBmEJwkcdsfdgUa5rkmVUBsH7w5o4pT",
  "key41": "2SCsHfrG4PYKPmxZUU6MRueWNSeyb7zckr79RqdTth8qXHUADNeLo2kKBvyCwR14TAc7ykcTsZEN8kkE8eNB2SNi"
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
