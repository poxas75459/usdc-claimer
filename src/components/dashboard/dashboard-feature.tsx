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
    "3FaQFDX93Q4fBFhzN6de8ptQAuWtjTuW3Y57buWyf3mLbVjxnjZUhaDeSWAutv3qquJopwsFrjdFSGTFWX22cZEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XVsakpGotvARh8uN2mkStwbfss3cGKPJ8MSVKj8i1JQGeitzwUdrVv9u6KovbqVDamFCq4QCtKMFaKnqA5nqSJ5",
  "key1": "23WjWfRSyVqvwXHrLN28hNqnBhGcy712rtCJHFTHRpLDKLPRG9CSa5mMJGkoHnGDJRHuoJV9borsThWTWd8XgEKs",
  "key2": "mnNXbv9vee8MAppnhY5bH3c6aetpdnRJKTBpxHLwzQvU3WDWJqCbsea6sNAam8xkyLCoJdCLDRebY6SFxAF3x1Y",
  "key3": "3ntjmHSYBtApjCVFV14xBf5iF1mPJsiMZj8YKhK1vXvfyh6vpAF1R2mPWMzDXVpzPjLmYCti5RcHpBvYqAaDKAV8",
  "key4": "38wYgsPT58XLvS2NGC4pMDpEdR2oRTCketam45P4WevXjctmYhnBmfJhiw8v1F94v4raY6gyMzTnsXeroHRP55xL",
  "key5": "3UFWbuC9B6tMmdsmWFCcyucc3HvwKfY8zJugcesh6TuFmsw2oVK5DudcuBspLrLnnNRsQ8SCRxcZ3wLA6CDperRo",
  "key6": "5UtskD52uABwQwXZWNtdNhfdXdkxcPegv84ZUoKXyDjCXu8R1Q9bSTXbVDQodiBbfQuM4pERErGFq83m2YhErGCv",
  "key7": "41yaKmNysUBN9KoM1yHfR3bKW5NwrC9QUnUiqFreEq3sEfHQXExoaK8x3E5GecvMkjkkoQJrnwcCG2nm8pHaNNmN",
  "key8": "5NkhGhKJJeFBE5QQDUTUB1Q3c6J265L2pfesBn6sQhT1uqT6qHp9Hp9ZbkxyWGS4pTskNvfT6swQpSWe3ty72xX3",
  "key9": "4DQPXXjqpBL6wDM1medmyFGabmRny9oYVzPF7SWEKk8zfYNygi5Bhb42EyBsaTui6UWer3tbedeqWfzyZsMZyuEi",
  "key10": "5CmSzTVtCectwecPGX3CDo34yjmZWpBbXj1GTcounzxf9hb6fbUzJfWiccGeL6NLDsMceunfnS6BqFJs7jsA1dji",
  "key11": "5i8hyXpV5aCduzg8qVQD4BKKQCxHMH262mbTuYQAKg3PYYkSUnqyxNqdyiXs4eWvsztPRM36c6XmUgafWXAGhaNP",
  "key12": "k7NYgzh8bDAhRBbgbNdkxiJkp1j2tAnezSwiAYkX7GvAg12Fj58LXz6UypniHWJWnM5HFnUvPv59Js1MqzxdCrU",
  "key13": "mq2ZiVuKD8Kcim9ncF9d3uxBVQmjjkUv7MUX2WPhkPDpAvtBzzcNtbu65bmDwtTSH5QMo8duJgK5Ep6bBFPQmme",
  "key14": "61vnsYTii7Drqd8UAfot6i5ZPQL3ZFASXjMxfboauVX3tQxASUgWyCuq2LQ9vdyGvM8px5Zq7dGyqWwD2LqSZwfS",
  "key15": "2iwbCYQp5uEW55SCJvq8wZ23ykrMdDeBXE3KNAkGB2bepU2yf4DCm6FUv9hhCmyuRAFirdxdWozeM17hefRKR6Fa",
  "key16": "tUq921q3G3uAHDNv5Rp1hZmrFWzCWircRYgD7DFv7Y1jZTqtM5rbHsaQFre9YvHfsF9tWyKBE5UJ9zyM4EaHJ6D",
  "key17": "KjLfXWaPbbJG4JYzk69aLrwboxLBzwLpWEEEmkpGHMiapvFBJcTucwVMJMtngQMn2k7oLYwrBmtKPpgS7Pn7jdr",
  "key18": "4UdpoYfHArPB4Gr1gwL3dSCQq2m6cnYnj2KDrf2bV3ThsK8K4WWMJ4sPFsuqNnzP31Q6kCRE4QJTACUzxughCzdE",
  "key19": "4i4ZnAfyXaKap2JXjddSAL8C5URigdHYHYjGnaHwPWxMi92fU5jPnpQLhfTy5tW7wJFdLx2sSeGmF71tyzqeshPN",
  "key20": "64H1bUCs1osnstQLLUJiTn2YTuxhaNLPPrSt14eXLkNLuqMx8iJrQvYgfV82XdtxUF9Z1WcYCq2FgWxob6chz7xq",
  "key21": "CduGGAZQZJbVZXAoq7hdfqoMV4ZFqgYP9JdSbpyAzBroWiJiHKh7JK1sbHW5BvF6gdefZt6iEDAmDtgzmZ4Kq4k",
  "key22": "pkC3GD1Tyh5FjxK46cxcx9qrvb6Z1AsheRh28vfw7UJAdsCbTwWTjj644RTFAsEnVpM2zeR3mDLE3DhiqsuCVkS",
  "key23": "5XXM3si8NBSx8QUB1oFuH6BbzTLaTHw36V9694dRmufsFPeLN3sXQhXeetSxwukYQ5GSL1jyMCwEgjW4KTL78uut",
  "key24": "2TUUAKiMSFvM7kLMvLgXMdxm48AAeLd8ufYdaLV8jg3cBxYczJMB9Y6MzWf8K2GNpvPZ6Cna4KuYsexc6189VSLa",
  "key25": "Xmmc1wQEFQbBvYo2BMWrCW6P2afjyowwDa9JUY2mWx67Nuts5JfntCo1fRxgSxKvqAv1oUq2kqPooDPGxcid9uS",
  "key26": "a4UzqaBC3JcPqTNpegrSxKvbQ4GQzZvS52WDaqpJRsqW55QYyD6Ayx7uKYjkJigLpr2FsMJK7RnU2oyVVXD7eoC",
  "key27": "4iXJvXDJB3Ds2ZJk1HWabZwxV3KjBecNHyVYPabUFJUVaiPaodCbYH2jq2hFpuUKfyJY9gXRd6pfTJsjHNygvny3",
  "key28": "5A2sB3mKkn4GD9fXV3mumBDoE5DjxeooupqzhJi3zNpFDfBgiqeoGg2k4r9pzhJ9L1Mkw21qtPDMHF8syapak7q",
  "key29": "5JRqAsqSXQujNcy7Z4Wvrs9sMQ7VsYZeAZi1nuLpzHu87WMER72sayH9gZLSmWwzDQ4PPicu2XCcuGTpyz6x8BrE",
  "key30": "3KWAWTp8M8Fc6GjCjLiphqQXduEq8KGqZVf75SVqyW5vtHaggmDgWQgjQUtJN2LppihsazdqrKkJnR6q6JQh4Zab",
  "key31": "37UwfiGB898TaH59vDfUyXGyn8JxCCUQ121qYqfgGTp5sbtq3BjTAGzdnnzR7yk3aXZS1KQzmpcZixngPZ61yDeo",
  "key32": "4c875N385saNH3ipfK2eQjwHCRMayGP47c58ZBmZKakCgthdd2k8wFkt48Do8Tb8ivBFeo42ZLSjBjgQkHRyxBWc",
  "key33": "9uw1PSaLY5paL3tQuUvEmP3TRpD7Z7AEPVe7fdRs1YZJ5UH5i6tvLnSMfbZk3ymNwNkwAXCKfxBEHy4NbripwwC",
  "key34": "opHzLHQuTbYK5cD5zTj9bZEsmst8mf8NYdrzRH5gzevowvXQ7UBxBmsketM87uuNXz8NhrSgyGAxWNYPe7eyM5o"
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
