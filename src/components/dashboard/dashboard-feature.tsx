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
    "39oRn2iy9sY35VekRfHvsmfCz2R3LhHncX7oe5pHVoW5dywC4Q63hhBFUwjPVdXS1HtJFAXwp1EUK2NEi4XSXZaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YC8aAiz2qJCc4VMh7audi4no5yUyXBG4moxnUAwCjCLHp5P6KMPh7Fy5dfwQGHrAx7Phn3HSaspZtooPBvkdcx5",
  "key1": "4Xsqqa1XXCmdxxNHYkoTcW1M2A5sAMPtUU6H5YVir8uJzmfC3fZbvcq3DRTUxusRnJAjyXewSYDV32vRzwdf2Yzv",
  "key2": "5LNudDKexMZXS9iUVCL5AH7LXr8qhRj7aTubfaFFx2YD3SnqTJZEVQuejSUBEZpQhWyHXfgoqXBoAChpknSs9sSV",
  "key3": "fJtqcKwutq8UBzMaJf75q1i6jUfHnGgqAr2Sjr4ngK3avdXbLqWZmMNCFcaV3eLAqctP6amUUgZ7rREwG7xH5bT",
  "key4": "3LEfuTpzBBy8m9xjbX8m5hrNvqkU9mUWSMkzK5gFiwAtWnRfsNAjKrdyzyqExRNvg1F9EgKwNwMssg6HvX8oUymU",
  "key5": "vNqWWmkN9gMSc3kAWWGqAs1AYVzvXPcWqrCfEgAP4rDvizXAKXUhYNTv8LVtrWgDd6FU8DQipqRTzjrd7uAFe4Q",
  "key6": "5Hay9V4K2NLQdJ3JzmyxUsbsnUXUVGc2DaSmqN146XSj5C5n6tc9TGi7WBjx6SiNYtSsiFwRGPRpfFZYx5CTUBdk",
  "key7": "4Wcg5qNeMsfLm35Z5awmyqY4bo53EhmFg9Z6KvCJNVWRN9CnnwChcK4p8FmFJqdHNm7WZBuKMtTtKCZMVE6auVsy",
  "key8": "4ukfzmXeoXi5WYEhoMMrzeNzVzut7iGHJG8af6cjThAHy9iqpYqhrYUkTiTjADUopVxAY17MQU6K19gv3rn2zf1Q",
  "key9": "54SGjjtWVHA8ErTj1X5zzHqgbdkqfNUht3ASW8KG9dfrAqSfW3e1f3SdDkHrpZ5S2rwcEPouP4Wo7mi9v4RA3BpY",
  "key10": "xacfheCUi8FYDbSSFUDPiw7wnUhAEmuPNFbBvPCa3LLdy5ZrpiWmcnVhhNfScbEHKuwfixESxmdiT1UZwB98aGB",
  "key11": "1kHDpn9nzakqcG54UiisWmXTGf3ZQHMisQfYnZbWVbBuZywyubcCofawD2CVNPXwafHpBHow9QuvqSaUjHHmw3r",
  "key12": "33w5cDSWe8W9Dp89XAKkiWRxdQtEPTgDT3bkGPk4hidRPaC97rLFYyyij8XdPWD2b4NvpK8EUy1S14Get4rbxdEw",
  "key13": "3W4gH3XN2XUTnSg7ZYKoXZu1iPSgXLrCo2S4Z5Ftnv3HeS2HQPF2wVjm7vuFv3GajbwyDqsUHtz8jp8ZBWPWVyVG",
  "key14": "4DQmNpvAWf6Ad95YZCDBuKjy9cMxFackMTDV2k5abF3aS3BSNUtA9JummpBHuzdmwV6NEqmXSbCXDsr13bVa26PL",
  "key15": "zNgXwE99PU7JRe4JxupmYPiMaS7vthRgeMTy6z9WY6vUh7RpswvPPNDiUuQPLi8vVRDkanbDcg1LGdez1DufKXc",
  "key16": "43V18wQnNyVeb4hQwT63EsSXTEL2uxh42TgpFQkDD2HXbtMWiCd8nv9h93F1m5UA9mXUXMbqRKx3kVBaH3NU1f5k",
  "key17": "4TdV2BowPTwGhzf5obaSyEczd72fZ3kqy3XraAjDiGPyr5xG4ikA8TGFsFbRkXNduDUr2xaxdKKaTxHUMmVXhvr6",
  "key18": "5c63nGjPiCKK8LWxJKLF8SmhKU4cstWMnVCVF5FGPkNv1t1yXcGADKfeduqmFVNTJfmBEVTpVvoExrSzw7AMU2Qg",
  "key19": "49NMJiawxSL8STz5rmqbV5kZ7rJv3koSVjFAtxab4pv8y3YYXkJmpExAiui8crn49eyke3xSBJgPWimZYTou9uK",
  "key20": "59LPMkB2D9hKdB26nrYwe9r7xeA1TDkweqTgvTP4SunbMUdk4Zqu7WycxhX9vRQNZUtSEi8jqE6rYURrXqhUNWrj",
  "key21": "eR8Bc4rUfgtp5ddsdN1V9WPpyuFV2LcxBGy3Lb1RhCTLMBN45R16Hnux4Q1kNX37HKPTbeH8Sso2pwBCmd4oQCR",
  "key22": "DE6mDazB9RZKRdP16Wf6bKT278TXKgBe9PJcnQzftVJwrVMy4t7SQYGCVsTHbRrnnMVmEqy4cTPQ2aymLCT33fi",
  "key23": "3njJiKq6yMdBqNQfvGsAUVKWTQMQz5ucLMY1TqowHz21trF3TiaykRtAaQ1fRrx8r6MjYiJ6VBb7PM34mjmBUxSt",
  "key24": "51cUNwKMTS9eWzMw2SdmAQMTALucvMD6uzTh4FWJcaSASXyxV7EFGDUYLJyoTnRJCfnUgBtoZgBMrjwXZvcRG3ss",
  "key25": "5MyuR9vkRHts2CYHeN7yoLx1cQGVVdsecfgvZ9LFzCSDGxDUv8pJDSMedP5JvmGjHqJqRaaEEz36h8118PGPo59T",
  "key26": "4WkjWAEunuGgYMvnxcSXJZNtY6J52pdhjYmwmbPsiinC4LpzkZ7VbfpdkHTRfE7jFjWgSbL2qbPAmRgxFrXo3AEp",
  "key27": "4tK9Xf1T5i9YinBaAh4qVjCJXqStD1N2nWgiqemPPdKi21zamgJ9PDjNjJrg98WXx6pZ7oUZjGwH6NQSpHBxUahJ",
  "key28": "5po7qAL2AHrykjJEo5LAaT3Hjg5mVMq1wmC3Lb1nt5x1Buc2pj3DtprcwKCxwp7XzgXK8aDcSjHrwvz8sBvpjvjg",
  "key29": "wHASn895mviii9pn1RQdqzHCHdc8N4yXnqr9LrsW4KRzcTyFC9qeeUhEvGeKRQHgZgVvaYVALnSnAfVeaQm2nKc",
  "key30": "2671veiHWmepMTUYmHWTryk3Uh8mQXumweFDrLpzWe6XTweHavBrkAAbwvHm3vBVP8Q4JHyHEVLRibAjVfbG2NsQ",
  "key31": "2QJXYtox5w2sVjXLoWE9YKPUmmVT2fWp5D4nGeBnBLW3L3BfDL6LMWpmtAqisffj7MT5MeLua3Pwwbj1VLe9qbFa",
  "key32": "2veDukHnBs8R1RQHGV99trhwMBBnGnMaLFsKtXoYwjQRnpQjdH1qeEzSW6Tz7TYWCtTy5bS19TqrKSgFYjsxXqtF",
  "key33": "4FaVJ2GTRDhToiFeSaWBNaumZp4pDSJ7uxEDgE7NkAfvo7KrbU6GQFxbujdyAE9Q7YfuEVUkBVKw9oSL134xNA7j",
  "key34": "4MUYzQELQPfdEYa7ePF9hm8sBV3AWKsrzwposYq2MonBP8tSjeuFBYea91K9FopKXmEJeU5VjYyBY3fNUk3V3pCJ",
  "key35": "uPqEp5bkuTFvVtoJnMBKtc2T71RCZFb7uKZ4DzxsRSz4EJ9dga8GN824MFWG3rKPiT6evB3Xagb6oHgPhmV7Xjn",
  "key36": "2pvLFFNe9NkqoBTd5DvEhffUc48xfNDSWfgxujNB31AGAUT4cFend7CJBXNzdECt6hvyaqPPRL7UnpM7omki5p3a",
  "key37": "5DWX4cL8GEUKopnpSBwnuMtKoccbT2HFwA1pf54Zgwid5W8Na3dxRMyaKcQEx7ZmCcWVECoizpEBAz6QRVNTdoWe",
  "key38": "4RGCLxfpXZURmFjpHXRFbEaBMVtECVPiT8dV5iZQdVVAS9vQTz6SbrVNh6oR1uoPt2QWrT1mNPsWujWDhXnYc4Sk",
  "key39": "4gtxHVPBLcmPCDmnPUGs6sxn22mPMigimHB4upwUtFmhbY6HBUJaQXECQeBKW7dMpg1D7po8Nn8uGEwekk9KjwwK",
  "key40": "5uCcXqu2PtpwAjd7a73bumKNqwyoqd8xXPXct4V9P1dfU6ypxEfR1pZHbtRwZP6XQnJJnRSpvzuHuaWtaECZZkPF"
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
