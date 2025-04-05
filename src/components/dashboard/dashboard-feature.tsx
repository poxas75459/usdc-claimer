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
    "39Rtx1W2o5XtYTabnhmH51hB64LJa678KNRcHNdAL3t9rQvagB2aec7xUarf2VbqL8wq9yDEfKCeTep3r7Z4FTc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "375bognCqEcGWDZzJpvGw5RSLAkAiaNyxbRTmu7ZwoZbQE91cmMVLzUbuhoEV6z38X33vUZUsQG5THttP33aMc8T",
  "key1": "Pn9UofRs9vSAf9r6UzQ3zqjdfu2zbzfToT7Q53eaoB1qvVRXYqy6WGQEmbsACmGDpudPL9XftuF5PkHi7d1fcMc",
  "key2": "41QJpGbA7Kf9ryRZLFWViAFKGJKngDSvhgwofVCoiwWBb74AMRFRB57jTpLHJE4DH4q9G1peS7WQ5DvpgZmbX72T",
  "key3": "2JypyBqLFtqwonythyQcEHorJGwKia97TWxhGsbbLrkRdHLzFTT3iq254LH6ASgZbWPuoMKZG15Pq7Rv5Ja5Hh7r",
  "key4": "5hmpPRcWBCEXV1urfLHoBmbgQPvwhovwBLc8srjwdDNXuyNJLCah2KUtRWjz2B54FWDGA9sE3bAqojGvRpAjwT4X",
  "key5": "5jT8FncUCH8Rcp6cBT4fmXABhg8oRbiGZ89F1DZWkFZYAvvRumHnE88YGBG8e8zKQjwjeKjDooQ4jHhbpkHfYKd",
  "key6": "3BJdbjL7aoBa4c9QpUDHmvkSaWyQxMdBsYs3Pt3bSGA2FpP6pvuyyHfv1eHpuPyUo1xEUezbVEsmZFq4eJRD9eGn",
  "key7": "2kQhNpq45E7veHaxwgwScyHqqVWQzwjRsaCXKZhrR4527RxriGX6FLqHB7dtPRtnrxsq7B6NSPu6KpsZKzoW2Pnm",
  "key8": "33GVeeZv7D9k7zrfS3LfWuXjVaLcZdtHnQ9EfgQ2Z76dG1QNStq2dn1pAzWU8gNUVtbththdtCmVwy3JJVQsWnet",
  "key9": "34xaLmsj9KysRNZBUvRSWpjNzxVCa97Y8p8geLKNFVQB4LqVhY8b5uToNNa1hfchvbkiADE2XDmkJ4hgyevP9tfU",
  "key10": "29CVEHSeGqECjWDDtdA8Q9cWe7LXuPP8JQkvyy67WigVRXTzvdmwAnZVyvqGRAmoA7FHW7cAQichrGyGsrzsywKN",
  "key11": "4kTPJdHecdzMUeEX5HRyaGoHSR1XKSw371edieuYBiorWsPECZqYFAniyXJTvc215ZwHoFTdEnhHvKQis9K5Phm",
  "key12": "4oqvYSzDWesm9Wtok6UEhFnqNpN6ntsDAcw6wZ84vmnCXmosnQ6wvX7uLZS9JB7YqF55fPdMMnXy4F9BvKdifwKv",
  "key13": "YT8TSPeEim652ZAr5k6PrX9Cu1Jq2s5YMczitUV1M5fKTdN2Jy3mFeV1mZdxHdudvwAiFygm8ah4LLNSRLcyqni",
  "key14": "5QoSn7PkJWEFNYfpXH6NsfBY1c9aJbribYmuWka6fSUCezg3XMWx8eDHfG2woKD11Xb992kpNPxt1dfj5X3e1VbG",
  "key15": "35FCR73wq86k9Z4ED9UojdwMfmK2zTRN3DZJDxQCkQBSfZ1Yzjmix3HWDLjyhfPXuUJoaxSDrX3n5gGoki8tS5Zi",
  "key16": "5FeNvRsMAZE72Be8WGUgheDtYUMVvvPLoKnUHJdouPsVXpeyxxkFyMQSHEhVKfeskdWdGE8ymLZ9e3qVQ8SyYGdo",
  "key17": "5Xr7NYqsPLm6xywSGiLh1nEM2X8CEk7wySMDwoFEMLuKEFehhndqZQPNXKLjutbEUSyFNokgbM9v6Zv45URFdqcT",
  "key18": "4o88A8RJbTi74KYPbmejtm5NnTWaMEwZSbM8kpbjGenwFUCkAC41sSMYDp66N2wv5cDGQTZYApLTtRptw42XWCth",
  "key19": "2bACnPg9uzttJ1km2XuksEseNGEYYxFrUskmYyzNHPEVkAcMpatxBFP4TUw3Cw4fVNtfa4NUevhNxvDvbZe7CJAx",
  "key20": "YgAUNYHtdQBWkpWcfzZ5Eahkt8BRFfeNMf62MnRo8VckHCYMjyCWeQMmr8u67baKGVrg2t69SKWQtjV1PRq1XeP",
  "key21": "3f1tXEknXmpCHLLK2j7WRaNp1cyqUJt1ZXBvmrtUVzfihmQZXXabCg2ET21G6yZDw75qTd8M3zPG1YSAefUHWJJU",
  "key22": "2aggaWwx4kh6Hq5mjgyoDQXqwWgc7NDJgY4PXEdQg2uCooMB6fRFoSM77wTdKeAhV2Cd4z9FiMBvmN4c2rmxcvr5",
  "key23": "BXcydhLVZowGuETG7gPRd2gqhsA5GRqroBjXHgtsg4xBJaEDamWeqqDHZVnZF4rEFbQAqaYwGtLkc8Pe6WAabWJ",
  "key24": "3rmpD3DYzbDPCCrfoQVgpPYq41fRwo7m5Kgteaxu6U1KMFXbwFoUbZvuUqtLspNhRuDYuPUbeYmkSzat834uCfnQ",
  "key25": "JpkhvoDVJDfCUHDbziSgkMj1pruzKH489Yo5jXoYgqHuxGbJf9ZF4FJGn9cSB3RmSLawTjs8yohj9G7TRPZ22Y9",
  "key26": "5i3F1j25waCRXBKmMUWhxjcN7ReHqhgxGSrKw1ihASQV9xiYK6gLT9ywfuFxz13zLdbN6osFDUbr9b2sK21yqqD8",
  "key27": "5GCV3Rsdrvz4mqxdnbrxnmuYpfK2snG1YyjbHB2LrLSeFdsizTajK6h3ybG68763XCn4E8NUcLU4uiAfUxhqhc91",
  "key28": "2rak6uKuj2UQhaH9XEB1sW3sdUPR9beUJamuo8mXD2DzTPkvjygRdnpRomjnZqACU4mM1iSkh3a7P6bphoHqDvQu",
  "key29": "2BWk5nYeDgc3ieC6wzY79RY4dUz6tjwgcpodoLpshLpUKntXWvG13LfFFVK5WZUdjn4Xqk7mkyrQEQxjrQFYrY4p",
  "key30": "2LZz56BmMFz3k5XBaH3iTxmjXS6SSLnpZm8jsgwQczktmfimt9u4ps44pTVxJkj7XSBmXR7pi4oB5RYBA2NVD6i8",
  "key31": "DVNry4AHTsiUy53Xm7PoFoinPm3kdUvEdjCAnM2i21c7LbnQiydku162wyiooWuaBf2Fpu49QB3XWjcfUD8YrEJ",
  "key32": "3ZddnY3q6meoR8MXYeFy7uJjwyFvjewUfQMmQKa1M5ssrfh1S2sMsEC1MJ2uXidtcboW722JZhrk2BtabVkwd2DA",
  "key33": "U2WuoPQi4gEPUzJjtFgJdvEoLaWrFRXEf9d9HCYhDk97TgF7VQ1EpNdVziC7WEN3jqJRqdmDaEy7M43XFf5BZ1S",
  "key34": "4pzhXvUw3eQYuh2vYzAkmTrPmGpqcHiSoRyDypuNkang4xmU3m7j2iB3hQvgEr1MagD5gM2AWg76M6txq9Cq6EYD",
  "key35": "58sAQVFCFhS6NgqwtAnW5ZZguk2roxEaCsXvwKoPHfnXceSYzMcY4j4XrWocZXcAbDy2zApsm4QYC4NVVBZoh21z",
  "key36": "2XAQS2phBMXKTPHKWR8bZxKuKFjfTCE6PgEhQMPdfczKZ53zvprHqXt5Uo5hqmJzbabr6yasXyjFXAViteXUWdti",
  "key37": "4vrokgdYQD6iCQ4UJgPUaRWJSBmBGv8SDuJR8y9DCgueCNvFMoNgXKF2gZ4VGW3WD9KqNzEEZ1c5snxZxYsuHJXT",
  "key38": "61X3Ebe6YGCEY3vnctuZNFjSDGotFmwt24Zc8Yspv5LgGUaFrx7U78pFivtjhCUAHiDS1VPWv9FqC5egL4ZLT6da",
  "key39": "2vK45UV2fooxmAzaQAMpi1T9FRtrVfGqti83oqf1pMYH2wtGLYZPRFcXqa6CmSFGvq2D7uTCz2YF41NkMoCyqeqG",
  "key40": "5mELnvUuTneWVieCLLMXi7Li4rm6cqVia1bugk7bqosT98ECe47nrFRLYSu49pjqUKHwEKNZN4qjKBUPDxvPDCkk",
  "key41": "2oBmjYD5YjuQbuE2x9hw842KrRrn3vqjruqa9f3Nas2qUAA1KrunKKPruqaLFyhmdyaxcRSo4v5nk12ZKSkdAHoR"
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
