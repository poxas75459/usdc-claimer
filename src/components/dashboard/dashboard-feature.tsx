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
    "5YwuyndN6X7vhkGLg71cQt4xpa3zhbKsrAqtWkRWF5ASdza3qZCq6U98YoFbSrdPwBA48MAxpH4WEacqyZD4hYqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35zLqdqYzcmEPWVxXyb4yXxxdAJCnETYVNSFpWeGcMLso5QysPTDRD88WBz7QPKPQNCLxZ8BS8V1UGFfyHj8RJjR",
  "key1": "5PQqkcBBN9uTxta4UFcBfkTS8SUR9yhbcS4FQ8i8UYDn4tFgmSFQAHc7PvPxj3aeR4NeXPTBt7vvLHC6BJf5fVtQ",
  "key2": "4YyVtrNi3Q9BM9jkcRqDZSe62G4hsB1xDhQ3NjkAfZJ6V2dMBsL1SttiNQE2FhXCsEJ7MwGhCrHPTXCX1ZJ5R1zZ",
  "key3": "4U8LkC7q1AaatksQp2iNMwyEMSyRJbvjgmNDcBC6tJkNYx3khZWRazo7yVFiD9YHZjhowCm94zBRU7Gpa4CDnwHd",
  "key4": "3yY4YF2mrfUgc7CZRr3hJ1t9pAcqL47861TdnohGyXYGCHgnJeKm2jRravqPq7D4zhQhAp24aDmmiLYH8LXYgi1o",
  "key5": "fGnGtLfoAtrojbbfiuZKFgxEb4cvRNNxoMLxSq3Nx5H6M3WPNWwHEjdYCsduN8brBuKNYvN5cTgXBtHctfGWm3m",
  "key6": "Pmo2C3rW16EoQY2bHiZg8sErF9yVJMHSm9gVcndvabQbE9X7kq4P7rZX9wQub4QzM6qAnhXxhynd9qVg9JnAF7S",
  "key7": "1SmXqXqdbjqx1BSi4SJJRXMM6vHZn1L2t72u5oFnFf5fGmDFaj3shPhgNCtdH1HACdDqeyq9tQM2SQAjGSYGhL6",
  "key8": "3ba2ZcDQFxtBhGQ5QUJzSw3qWbWQ1sf9PhZXpExedHSipPGakcxbA15QdXgvMFb1xgB6h8x3Ui3BaFKc2ZJZ8eVz",
  "key9": "3FYiucBMjQb63F8xfeCbR7XVyusta2Mmo9DUBscPrKxBD6VAyaq1vr3Kp46uP7a4kdSWSJ8ddbpzkjiQNppQmsZN",
  "key10": "2StYfz2sFNPNe8A3hLCLEAQ8DAc55gme4Fmz27Q1k91eny7mrUiMXCAwggaBvKnEMK7K469HHFTvnufT9NgXN2t6",
  "key11": "5326urPaREjno5gA3eCv6QtmJZgWnq7KxYvkQjrBY7hN9VdFGSNYxL1TRRpR3ECxd7YmQFLZ8xkuN4DzEcmMXG5t",
  "key12": "4AuQgveiAmUSzN6X93CnBDF1yPA4YQ1vFCYReA4C3moB7PcKaBkGua2KGSk9E3MKc3RChRPLCeP8ML6TJ64hcfhC",
  "key13": "4CLBUgaL9pxbyviXXc2ic2YsKoaCLoYvyNmCJG9CgS9sucy1uRomrXR2k6qRLgVx46Q1Y9HAUDTfeSyJqn1xbAav",
  "key14": "2EmKaAK6CeWX67SAn3c8TGTutFVLACZjR5YvgceMvY887d1vbESCDBr9hwmuoakhPob4RR4oV9pneU5QK8Ztrqx9",
  "key15": "5UAp6xpcKRCiDtsrxGwHL6qbSa8i27KxUiXhwjrJVCYbDG4bULTnFw9CPPADraZExjYx6gzK7Jq3SRwh8LuQeU4M",
  "key16": "23eBtrLgKwmtUNm6AXpPSsjzmgbSxKvvRSt6ssxx6Tn66qa6KGhsrU373xMy8YnebZLJPTGW5VVuYGoS74X2A2WF",
  "key17": "2RGcadnNkqAMMqTU3yg39WQNAoWHhHb9vcTXvp3KVuZ92YkFKsEHxQDHXM8moVvFwPyB8WRUSnWgt897ySTcLQoF",
  "key18": "2pJrnSvbNMkMzuWh4rbkf5DMEVQCXBqmxTYcvj6G42jm1q1HQZFqCmnijN7ZKRTpfHdzih3PhHZzZrDfcBCRbufL",
  "key19": "3ETSzzpKrPU5Lz8sRynhgH2mGBcLoJvTeom2PG9E2QvdtBSMVS6rkRAoA4sEjRWFbvRMsDwH46HJYzMECnV6hF4P",
  "key20": "4jUYi5nToNZbi1v9XohHio6ZuFLwRDTygkFEMeHYqt3351G27GJaiynZXXrtxQHjJudPpZhLgWin1taXfin7GPE4",
  "key21": "NVBvtvXrCqCbpwvuWNCNnUCxLUp1uhRJ3hMJo46taWMHxGmcAuEJwtU9fpziQrxMdVwxtM4fQMXxYmfBgYiMzEC",
  "key22": "XedFTUH53FxN3nkjfBxFAHpmvvs4BNdcUcqrBaa1qoiV4TTVLTW3YUFkWc5TGgcTFv671EKyA8HQyuBEe8ehEKx",
  "key23": "4SkFVCSroYGnN2NvCf8VWSWJ6pHfE9VEkkV6PtqM4tkEd1R2jsfKsbVYEKgYyTHLkPxWEjKxoVWhtzKpAwCwjKQT",
  "key24": "4sUSLB5Cmdi6Hjjm833LhQri3QYD8sGYK34wbTgTBC3NBFLWc68FCMreMv2mMjNdM2zhztAPZrNSprMcrycNtkZi",
  "key25": "rVryRkg2rr4pYBhHsUurxoQbc1gAHSo5njZ9AH36vbtnvTDRtjcxDNjdx9c8DNB7DT9P9ZoEVRxcwyiLaswtXsf",
  "key26": "jKUjB1yaomRcxtXmKxPKfzD2YeTcuoNNsnAiPwDUuijFCR7wTLXLf1wkhLrMW9nNZREYJiB2m8e2ivFxfMwBrbk",
  "key27": "31JmwVz5NUwEnW1DY4myqrVNh4VN6ToGM7byns4cDtaNKdEkSpywW2gGDTkNSQ8h9e5RfUY13QQqU1tcdMLzw3uG",
  "key28": "5xgQA4Qs2h6LYYicM6ojinXPor67aGjwxkiuiVLCkUuxzgQsGJSZzd3s7ZjpLu5tS344qcFN1i6h5qXvZszf7cZ1",
  "key29": "24duTW17wtxSb7spbJjKq8dtt5Uw2JK9x34F2i2yQjJHXSNkLEw6vosKAVugbJqnqakvAJyEKxpCgopSeMaU4NUh",
  "key30": "4jnNVEfs6kWg3EcNcUHDbd28WTx9f4eCLmH9Z1UYYEExBPtgRGbBTTg55dBykyffvTtRjL2emni1esnjuWpGNvfg",
  "key31": "4DBGp1cuw6JBcGvr8fipov3i98MPaLVkTodSDxWw25acoQaxt35NX6Q4jMfAr7Hy5Hyyeec4kNzGQwdC4VWyPvjb",
  "key32": "gtRV9pUu39FtArZ2QrHeWSeyFT7f9jCN2UKHGzNW7uULMnzYWXE5LFTen2opJDrK25WXdx59gB5KhtBZJh3djA9",
  "key33": "4gipuy74PLjoBxtArfrepyJsuSxLHXna5e8vk5hD4YrswaV8nodyGvMgdA86mfa4h7J3daV4ZytipxcWbFMkmbDT",
  "key34": "3WH5H2d98JeEZnLhnpcPwVKrgppzyHVFf4b2ySxi9iDWgEG7oRSta1L2ov8YRb8Uc766CfNE48mPzhydHYZuDvda",
  "key35": "5KHuANR9gcqtk9eWopHKqJDrhyvRGynhJ2MhpES2DTg71ZbbPsrizMhJMBqw3Kr4CDwbqAWDMZTQLgkrJ29jsKLL",
  "key36": "kGik4v9PuqZeNAfEvzhcRhdG6c3M23RhE2aAAfuUxZNxXjMjvLvbMky9pTGu7UznA86KCC7yhRwmsSXS8yoPZVf",
  "key37": "43Ts5T28unPberyQY8sCCNtkt3u8p8eABqAsVYd5fv1viYPJnPeyYwYLyhC7QP4yZxEApERRarxT2rvmCi55G3oM",
  "key38": "2UJ9FwxcmfkArSNDEsuyRYevH8Lkeh5WtCon6NDhyWehvpUd92zRZ5EFjGSn8faSVvApbi26RiaDsd4U1ZZQZT1d",
  "key39": "31hCjgkLdGuLNE2QLHQv19dNtRQHZeUe775bqXS5zSFpnawkwAhzCKjRwzg4iqSRNnYWFwdA1nHHBQtuC8V9ksou",
  "key40": "5iXkQEuZrf5onvTAboNfN61dmCWUmSuLBMXvaopy8M8uS91THvsqiGTyPYtkedsz4LgWpaH2io9f4EjCoE7Q8v4y",
  "key41": "5T5wJ6jSRE5B9WzkeaPtNEZ4hQ1CEe2gTVe6fEKXzNZcyzKYXkxCs1kCt5j5XvhonayatGfX7Tz8M3gfbRCLQiah",
  "key42": "2nXRwpcknnuyzx4wRS7s2jVyXxzK6Z7QtcMgNn4Y9u8fPESHVyaAvDHNEKp8iRRo9mHcBbBrWZy8HhNNPo5XB6ry",
  "key43": "NSkPeVESsbrXzpJLAxs3rKbRaACJ5cpDEFKhZ1PnENq2GC1Q4omzz6NeVoiToBa3Bvns6WzBDgontzRGKQWG4KT",
  "key44": "qRPqPhG9E8SiPVMBdtDuwWegcJrMwQLL4tzrELx3eZTiudwBa4mLgSfsvjZQxwnNKg8gBaYV6HfPNzrBL7PQ7xF",
  "key45": "53MzBDV8dR9qYw2Vnswv47bJ2GnU3EhBgLVbQVrHGUyCoMswVgiU4S4nTbsCbTAMigAxuBh8D1xvXiGcTKZoapXv",
  "key46": "1BVRh3JjZEShAczTJZbFZSqatXbMSRnpG9riYVabWMwWfkgbA5kJ8jzSbRyiMkPSXQSF22nYTobZPv5z9ovBdX2",
  "key47": "5LopNhkdUBaW8vaybqoE1T64Pe1qwHxuNTdWAHyiWWcWoBfWAMeHjxkRvxdEKDrMaJ4mdG52A1hWK2mdYdZLdZLF",
  "key48": "229XC3PnHAt6239vv9gsc4tRsFkWk2ZWHvZs8ap1TXn4LYwyHX1UZrHdLPonbRX8JrUWBYSyiopyaTUw4nnkC2rR"
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
