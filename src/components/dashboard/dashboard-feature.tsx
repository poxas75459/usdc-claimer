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
    "2VuLniVypFtYzAd6c2DPGKJfxrAs645pcZfhZoVUMDKRsgWbEc5j1xzwc8HmQmUAk85gNoiMKuJ5ZzgWYwRnHifn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wu9rYCE3KwyQJdogpxR7V5gPBx6FMDFW7EowJuMwjELYGpN54Wtwqtiurc4bfnJTPSm6tykRXjNhR8RH6oYb9Zh",
  "key1": "2B3ygXE8o6LP4xMSuD7BgutDZ1CU84oPnwZUnzD9rbw65VrrUh4VUq4xtxx6jY7YftSfVZEm35FEe1E72m7t4K4z",
  "key2": "5agMKw7W31kbNFNTRhuKfLsgkoZhAyiDZqCQrczaUtTw6sL1AF5HaqR3ycR7shDeTJvNUKDR3fVXidAJLV7FJM3b",
  "key3": "2KA2b1wrBqZuKTJFgZ9DNTMSjZmG6Fnna4NS2YUinQnMWMJQzKKMnu15k1isS3UquqYcBvDpkhhX1LrHexW7DZck",
  "key4": "3nk86GRmHevEwqxyX6qZCEQZRjcrrqs2SZtAZVziNcndmZHzVYheDgyDF4g6wd3nBCFosZShQ3n1XkqACiU7ehcm",
  "key5": "2TUJeu4XAVqPTpF9C7N6hdxuxc977HxvfgJnSAsTwavdEVPREKXHWRN8ikVnxaKUdprACV1tcXZ1qY4oskwQn1dK",
  "key6": "p6T2WbyjGvW3mDUSS2REGJzakPNwMqpGZiJQszk4yTV6iJ1DCqaJ4Vm1m61Lo4GBkYJHrenNUPkzceEtAzsoLg4",
  "key7": "4s1ViEBUqcGujMSTRPGk4FpoJhLcKHdttGTL7hGh6FNwxroWadwL1ycEP9aziWkiLaJVgjtLouGjVyVjr43Wxxrx",
  "key8": "4gWv3UJzmPqheXmyUHHYcwdokFXaEPegx2NGCP5FqQ9n2WY3qLDMdTwbWqR8K12H4sYeEKrQ5TPjNvRGXj9kL4QM",
  "key9": "4bBmspYyVBvpq3VhvbNXXcKpdgoyxdCXZJuYF9xFgyKejeVaEMQygoKz3sfC53btjhCgLVTy1zVSxEg17PxPyyK9",
  "key10": "FM1u9o58bN2ZMqj4QwQG76R8bj5GBTrN8XaVzu1WpwW3KsNU2k5qiRZy4yTFBWJA4Mj9ZQsyDADXuXZveuZKskk",
  "key11": "5ALkakBAczb8obVSu2Feyw2xtaMLAj6K3q7A164sVwMwTfz3q7cWHUQ2JoLHyVfv4jDtRfqtmUaUMAWW9FMypeoD",
  "key12": "2MbPAqXbKPpXbeQhnARynpSZRSgKYG4SuHsf7bzRPo1T9BJtyWsChnv5KQnAFRgQsnqJFHxyd8HPsRmLA5jB9ga9",
  "key13": "RLXGGEpgfYjVGXxWiUZcXWf1iN2p1ohmM17AiaJ4F3xFt3kH7v7V955CApKxNYEsDGbeiN2gzxuVssj9jRLD5js",
  "key14": "3AmmxwH7g59kcVEDy5mjiZxf2HCyP2kNMZNZpcq2HZaZqAte8oooixbhMKEqWNJxqeeFTZ2kMEMttEzc5Udfk7zw",
  "key15": "3Q4pvtKmw272gnMpYda4XvzFnSvUJKkjajyL6xrsktdkKH8F72LJVcuGssw2BCwcKYfSZVt8qtcb4KwDH65uiZ5K",
  "key16": "2ZPyjD3R7M8pBqS3bpEKsQrCsodyYadbzCLhrCY1Dh2jCRBT7baVHcCDv4HqFQBwXG1baXHn7itMnACuU42Me3Wp",
  "key17": "3Nrk3pF7zhvUXoTRNQ9LEwqtGMuLGRHWBq2zBHMDb3hZTTbEo4ZWCBQzkBWhwRTF2RkAbSGsN7AYvigJPkLP5Mfs",
  "key18": "4Jis6Gp19AMgWpK9mtSAeD7zwfcNcfvUQkCmVY1Pta9PT1BYSMEowWxPnLSBR9ADGktpwXBWzHg7qsrex4TNGcnm",
  "key19": "2q9cnfUueEwhHLDgXhL1VvGyyebi56qiAiCVuzivfh48Fsaa3TuBEwj53PwwSe61ga2Zg1NWtyTGpWXHdMVf3B4d",
  "key20": "4H6V4yKzoGvcgjCeqseSErJtMgJQkPW6m5tQozp8Pxx6sbixYTMrqZzgH7BfSEfJ6xtAtmmNsU6tCrnpYYGHDGki",
  "key21": "4ZKpKWDx73vy7nRWhzJxtcrbfKRHqQnSBmQLfy9u24xAJjVKvmy1iSin1AK1ZHPYF1LKrZDs9sFcHdX97BC6yZns",
  "key22": "4jwojkNYEHBfxnMZJk4RpA371zb4zgPeiz9aZAdd7r84KXM52wZyKE6WoV6tGNCLVk2MG45QxTgmGhHpQxmwK26Q",
  "key23": "55JQC1NRUg2XHgBKdQgp7NREQs97jwDp867vACaoteT6a1vUThDqwkC9JAA4dw8BPTMfdvZyKMdBXCX74sVuuEkX",
  "key24": "2wGuEAHKeDXoQj2ny5KTpEzRJWLByyDqmk2tE1NseMJDQzC43KmBnYbw4xmEd2ahXoHvvWRUdVGGDno5zpPTBT6P",
  "key25": "52tMvG4jhX4pKhqryNXy7wn3dPM8RAfotwwKv8VQvhnokmEKzXTVoRS7x4HaDWhHo96tnj3xBAwwGZPAFXjJNLMg",
  "key26": "3rw3H1RGPnRvXMtSzsbh6zky338KKNM6ppTLtkxMmib46vPGuymcuC2fEv5jvKk5UQDjLqfVFbbokkHXnznuE4Yi",
  "key27": "4gkfqRZxxA4QVHxacyhmCtVGbHAuAoQKZ3LaDdxinPm7SHwBFwNEtnXnwAzrqLm6TEo91rCCc8UtV5YtiQHCSe2M",
  "key28": "3mYC2SunopqL595ekWDDSLy7MvCrH9pj8wLTiyfahwYBFuGnxqYBnx1xeR5QoGuYHxtnhu8tSV9Se292AZokxaWB",
  "key29": "WoLXFkKZFDMXmCx6BwFUtNN9cFj46prKYUx6iJh3jPTtjQVxofzhH2yrWkCPo86GmS8ULc1FbRYzcHFZvL1jZgj",
  "key30": "54NkntyTjR5DTinrUUNC64ZjxuDu2LpKZoKRRH18zirW5WMoh2799fmmHL34FybhGhL7C46URqKF4kvSmf4dTXgq",
  "key31": "5yHDMr3WJDUtVw7HYG52gzHgKrXSvvg1vXYzh9KkReqyfW6DvRBvEogGMtHM4cE15xWTLHb4aop3HV4MfhpArv9s",
  "key32": "5ewdxkVECdaWCMCE8LWiN3p1tTxcnBduTrJUPHcKDBGSqP7BcuJN9DNLm4kaLcSSQJjtf6kPcmKD3m5tWPEwDApX",
  "key33": "5MUrvvAJcxmvnjTjrarovt8RwnYi1uCs84koKhBU5MnLkXMJYqvsCWjR5JYJj9WZgQQH25m3aP4V64FgRnRoyq1z",
  "key34": "2oaqhz89kjmw3cyo3zBrqvufMq3umxdWXL9nnJ59DdtmDEUUgDDeBk5b1vX7vm4wDhDswxnJ8ZcL8mfBm79GHpHZ",
  "key35": "64zpoRsDegNBVnPtftHvubax4X9kTRoTSNccVHqK9h94GPdkTSiSuee3r5bQa9cVvagmegcuFtWsd21hCCcyfTKS",
  "key36": "4htpjjw6bT2p2r8AEUwi9iYRoCAnfBycpRhesr9Ny1ZrEThG5WqKJSU7nbsAUZN8nFNTi4Q1FGJW4ivNgJBWE54c",
  "key37": "2EcA6y2JV3S8NX9b1x3Jvm1qTB4WsWU38goRPoD6v8k6rfcmMeFKCssny8Ua6frUnc8KWGjeX8D4UQXu1vdYXbca",
  "key38": "5BfpqtcKdJnA231dMkz9rpLbiPH51iWc8ZVjy8rVL5wDTanzJtb2EWJzm1spaBxq1PxiJn54PQa624tES5L98UP1",
  "key39": "3NeqbiCHnnPsDPtWnJ3w47cBrMzZSsynStZGWmabjDLPSE7ictP1FfrDGf1jEXKUffo2ibQ3bS1B4zamjorrJswE",
  "key40": "3VTgAFfJtA7Ftr6MmwoJssk59ahYgxwWQaRhczb7m1LuCkGbZfoHpyj5yvAzaAgYBbznQ2aSbueXyi6PYUyC9xix",
  "key41": "5VKEJt4uGj1Je1L49yPBBkBAsFMMhLHGoWHrX6MyN9CMDTcJYoRdJU1UbZcTR1jZRdThckfNDwASi8SPL3qqgDw5"
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
