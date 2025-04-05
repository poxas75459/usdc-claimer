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
    "4R4MZEtgSaALhZ42H7TEJRU9mftNDpigjzSgdpjM5wJtWjDTxPjsnXMU3pu5iVEBjEqj6xCRjFqfN5LK7RcSUvyc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sjARrVxfYVgU43wKMPMuX22b7fUeUzc2kpZK6wrfhf4PTeBFZ3WRDR4h98KaF4DDSmnjsxMJtFTqQQM8UX4omMF",
  "key1": "5TTd93LBqJ9NKjvsrcuCUBUNCaQ6sUBZWrfEus222zYZ9q4qfodHokfSqa6826a16jMHfxFVKekropNL1f85grTN",
  "key2": "4aWDQKSHnpVFQiB8s4PrZZHgKw34XpxXZY4zdgt3t1dBCQJa4CN1pttLmYiaJZXaRBAHBC9gPhR6KVjzRCYcyPoG",
  "key3": "4Ff23nHPPnmCm17pmh4bCQKTL7ZUDXMVjWxnpoC1WHSCYNcEVc1u6jGBPwTBdzjUyqTWCeuY6URtd2REYWBC94xD",
  "key4": "5GpFkAyhL9ywXiZQnops7Pob67denyw5HK26A9wyjKVmDHtHgFR9BT7d4C6wkVqrE2Jg2zYJVWZkfFFaBhhvA35c",
  "key5": "4JCB9kYzSujuQrD4bXt6BVHA8UQXYZKjUo7YNc7iUYSABm4DQDquv7PQwwj32V9q1AmHG6Sp1eYZPLn4WjmzxkLZ",
  "key6": "3XZpVGdzeuGU9KfYGnZBJg6Z3cXngmXEdedDgHsmbzmoEdux8AYXWovBgiynEG5nrkCeEMraNHiw7BYiyUuHVYUf",
  "key7": "2cwhX6XqWtbvrKjLUArJxQx1G49BAtLhxwENnaBg7fzJ5LCMWBQRojJxx2BY4g73VhkXfcLfnqvvPonmG8R82ZAb",
  "key8": "5dLc1QUZrjzPMd8HyVXnK7Bo4Dat3po2JhLoZWD23DYxz8d1dwiG2BAcmhJeFenWkoRUbisU2kwHzaSpoN5JuVe6",
  "key9": "2xJMb6HbJtz9REWTEZXjxAHVMo1jebcwPhbuQ1VjV3x7deuWrQWDnHn6qUJzgaEBzMt2A95QbeqmcPqEa2LuHok5",
  "key10": "FkPJSguN4zABTC4y7CMYknUqtkmTWyU5W7qS3FZ6QpgsX18m84iGMMLYB6aJjwGfYNu2WY212rUzD2vXQyoi1d9",
  "key11": "612mQ6N2jroMvFrR2p8y83dEyyzyPNrTC6NHx874t2LSuMwKEJJCJWx3dNhZqBcS1c4ncYX7ao1H1NuKYrKRvpVs",
  "key12": "bB7xXJ6a9uaaWLb4UCi44P912V8bCiq9ArbyWVgrjaGBHPRnea1DgEj2ehLaPbMBiL83GqzvTAQ35BNCsEZXv5J",
  "key13": "61GzyzNazLiqxnCit1qS2HJNgqHY6yLj9eVMNnBoaPH3nnkVk36UaSz7rR4HCGNcNUqcthq4BhSTzwUYFNDtR76N",
  "key14": "4ai2kd16NPawhVyPxi2nRkVrGRAUPNYnJAaDjSVJwuAVgjYyZzVNqqosPhREssMnQjBhTnuRHpKPMxc7CAGSYLju",
  "key15": "5taeDJHdvafK1H3NNJ1QzZiArur7kRVswWnVUfcZauTJ8dY6K6GhkfRsyPzVh9b3DkMGDYb4HpUizc916pEC6Jhf",
  "key16": "5n7Febeyc1nLpQNuBWU5USkkHyBe6DTKCwKvk3znPaMPciGtfrG1kdggvhkePE9hBWN6SrzVz8hskA4ZarP5vB7p",
  "key17": "4QA7g3Y67UYHMu8rHN36fgtwQGAGQh4CaYyUtHnZxk3fXjXyoaWSyujRw18UBs3RLAnzYXQzZisE3Bq1DVekrUwm",
  "key18": "5QcSNCQGUGBkNNzuQVuub2Ksts1bBsLQG5JPXHxnsw42Lv1VfctxABe7Z8crGqziuh3N1XYPBHm77f3DcXqhwCco",
  "key19": "kAUsR5m4xxzUd31ax64z6dLdKv2oP91aHzpEAviCVAWuEVydBBmw5M98fg3DMcuP4AKWd2r1DVpUMiWLFEasA4u",
  "key20": "4JPHRnoZSY5qkFGkkdhBb3toMSJKaXoCH3L9c8y7HNTjPY914vsh3ZoUBN9RY8tUJx3h8fSVNSpwqKNTPcfWHkU5",
  "key21": "2QZd3cAx8HQiovJUnDK4ivp9psdSppeuY9R4t7wgg8gBSFffCaNWc6kQXatSjKx1qi83EYhEd5Qirs4kvaYP31GT",
  "key22": "4abwZxCEpGRQ34DxQvR2dzfofbt6FkG6H14XbEPcEv51Bt66CxhD39vLwiLc93nRw3qwvRvFafQ9EePdwMLicAbE",
  "key23": "53nMeZYTgbcCfpetZcps2q16t3RkW2a5naGV9YEUB46mLRn2vvy1NQu6ktHfy2YuhjGWoJekCkAsTtdCVKEWBhHH",
  "key24": "3i4Dkoy6PKSfvpMZuGMKjcMSqhCcXbmNYqHKajinRnyKt2MfSpjDaxbtG6ivMmguQQhSKKAkhj59io7YscJFUvnX",
  "key25": "28rtCFoTsPFHoRJCkySZnkVU1Vdxg6ms7TBTmhrMa37kHYoFEAwX9X2BnFB1zcKDfqZYLRXe8K5qZBPUN9LPQWzx",
  "key26": "3pWqSL9Ybtvu7Dqgx2Qcj7tvjevzFFabhA54s6XcUBuproZTNpSfQqTqFq7iRCPoV5qpVVQcMLAzMfm8Q9ZmSNcA",
  "key27": "4vt3k32bndBisNp66YkkK7EQemcbBiWMoq6M4rS4KgCLVh79RFtBpAXgf2zPWh4NgCrtSxi965JE1xJqJ23acZfW",
  "key28": "23pMg3gQpvQNa9a8aVANtd3ARB7yci6PP8p8Q7zuf82PQZCQ5bgyRrgMx327Hid3QZCRDVeBoUmFKGULy5ruKA15",
  "key29": "2PeRWtzg88Xsq2cJTz3W8xvREdY4B58QA8oP3DDdVAzBtFgjDkAZasvvG2qk4zXwtFcR8x3DHQfpJEhiNoPwCMpM",
  "key30": "3z1SJrpmAHJhMRfEMz98E9NhtoUYWvHvGRxVZdTd1NbBY4ypaXxwucZtk77xeckTXKZ4emheQhR4jjqEmUow9G9K",
  "key31": "4Yr39d86ib3RiSWpT34HiFycaSqR2z2AbqpuztVbQM3x2wYcAmxBKC5UFUTHpSSCzjdrELrgdao7jdLHfBxcUc6m",
  "key32": "2hqMocbybtYfCpeCETgwV2ZVHYDctRkYGdDeEQedP2YZ3Lg2MBzK2Wg9hWSDY3qENrJy2tbdRe1zRwnQXpEaqC1s",
  "key33": "6569R2EeDPWWvxvEf1XBN5E2iimvEgmtNBv166RyevL48GooAByP2JUQdRwHGKdW6bvrDqiEQPfobAPas1TpQY8D",
  "key34": "5KiS4cHnfK89tj1VKU8B4vJemyQfPa7WySbaEtJRThzW9JKriTKyHdCgGCQgVtmDMK278fQb8Gy2vSq2RHVS68aT",
  "key35": "2V1yetQeESE5JnvUoH4P72vTNqJub9DwpF7Dkcx1wbmoSGJVpXYFo3U22CfJBDtyqphqvvAu3ddi8kK1y3x4rgEz",
  "key36": "32WCNBYj3h6fbhv6L1UrZumufoGuP9QK2r8f4ryhjxrPdhEBB3ZsHmPvDgNaxeCuqKyjcWCVfRBEFHv6ocJvcXPK",
  "key37": "AaonexrC6S1KXhx7BoYMs4xZyBShBTxPMTx4yhS56wi5YDp8NcsVkvAtzLQU8hxzNZgsjPt4sgpvHoDZYoFNV9X",
  "key38": "5H2596JuoJCX8TQfz2DcT8CWNJ5sbdGcGoMHC8kwU2nJBArcNB4BbRVELGD8FQ8H2K5bsFcV5KXR11M3DxCiqHCf",
  "key39": "5FwaG2smjcrCMU7jQhvWgbJHS458dRqYSxTgpXS21jG2Uc8mqBaUYjfZQRBR2ihNv7vQKKbKhYQ94d4MQTySzBva",
  "key40": "AN5DcWccD545A218GEW1vsL9PH8n3HbPY76xcUGPF5BCeWCQRwCNgC4i4hf7SYE416AgPkurvTMhYzj6uUtJPdA",
  "key41": "4XyDUqNaVQgtvrLxPMQmBjpzhcQbC4ix8RJcKbL4YujKQgrbv77eBqZrZcvm8DYU4fUH7iKZ1ZQxbP9UWgWZHCFb",
  "key42": "AwiSELEuPm1X19WZkbw8BSSG87WBSpWA3DApEAVwn2ZptzuxEgebvmps8W3nZkMtoupF6zLqZQRTqFpBBg9uMds"
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
