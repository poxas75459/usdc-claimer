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
    "2Atij6fPcE7AB6kwDgzWw8NQe6HDvGrpvTdN7oRaPMKLX2T7A1CPiAVN3i5Kio85kD1o8reqdRkqwt1MQFQBGPrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sa48n4uBk9fRwAyBade51vKzTLg5f7Y83fWdxXFjek2ghu8wdZYhSbqkKLSJVFJ4eMmXpJ5h73HPHcKci1ZVGyM",
  "key1": "5yh8c5tjM6nedneK78RqcxcEWsxHLD7QbHP7kGooJ2XwA8V7Q9EkR6XKrAw3cF2irhJcSoVrLmWLVrgCv3imPQxW",
  "key2": "2TZmMC39JcgaUP9VFgKTSEgoyKRfGhzhKuv6FkGFUbN9fYYa94BiJiF7xaryeBRagKGZovYas4e9JkvqN8qvsayp",
  "key3": "2NtZ637mFGMWy7cpHssT12BRfcHEmXPgicjgxnv4wQtvdnMV7PCcrE74Sokuds8U6a9VdP47e4wPPSbPPz2U9ANP",
  "key4": "3VVPcA5T7AJPq11GNmHaUkgrhGvzrJXiJ528n1k9uviqsRbCKgL6ffeoV6LsLUwkaMWsAjBMXvYiPYjbHt6j6bEf",
  "key5": "3tsu2UYSMGawHuqhpQ4CPrugSmowLx6HmKTSQc1AmywEHDDqsVeztoB7S8JxUeVfUNMMwwjFwAmfmmuGqccKDFhP",
  "key6": "2Ucb2YM5G2ihBPmuXrhtPo7XkcuxtcXoaVfgtQAdfroKj1rdrFD7V44vV5GM7V3Jgp5Y4rsZRpZKrFUbBsQvmKzi",
  "key7": "2BsHhRBbHZ8iWXS4VnFNofSzwjKbnhRAGVov7WUE3a4uxA5ZKuS3PzS2FzGvCnxxdeChw8BtjEdHTtmibC6G4TyU",
  "key8": "3CWJKWBGA4DEPG4G7gBNvWYLfMNaUxs18oLLmUSRkwZkyG9T4YqziYptuJMth8duZHxCnFZ5U15Cn2nbtgd2NcCo",
  "key9": "267TqMPeWmKSm4ETAjqAf2xh4jSXWin41n2ybsX5Rmd2NBdqcBBr6dmfxGiUAczPcmRUGKRPH9JUkmt5pZdy9vnZ",
  "key10": "49C5SmH8rMX6XjQv4KAYsm3S4HujomQqJq9Y2XCVXiyHNtF1k7r9MQ4Xyz24VBCP3m1E7VuVL7e1B2o6pJGUaR7b",
  "key11": "62u8srFVyBkguwirg2mrGidevoyYCHiQaHnaTjkoW16bNSX2esxbVP8rRfjcwyoyvomqCRoXoVTcDAWL8zui4BEU",
  "key12": "5qvPcvD319M5KMW59RiURDd51vZXZzsgE4STA6u5WCbknmPjCtxoWwb42Nb5jPNaaQQUhNPp5LxJV7Q1qKfKMtZA",
  "key13": "2BH2pdCpKCtx9fMoBQRYzWn6HR41irNoSTGSPmwLdFrkFpGxpGu597mxoBtgfEC4GEXhfzstVoKMApsANMzqTU64",
  "key14": "vkXqWK7Pco1WGX9ZAmJNewGMJmHPygCDaRZ9aHcMaHRMFfJcLQs9EjBgxuUZ9ueGQMTt6KZcX3P7Auq6TcnqMHs",
  "key15": "4BnD5mvty1AU8YfTZmRrbkwhcRE3Jj2MfaAgLSHh6vbgGc42YLRVcwLiYQQ7qngxHRW1wyCHVbrz2mUnKUMbzZt4",
  "key16": "MftiVeG7FSWQzWV4GLDCbi1zbwB68TnhWkTm1ywdND3o8FWwYLJUymKHUN8H8BvpwrjJYZ66CC96xrz33Jdrpa1",
  "key17": "2kUTNM9pzN36xfS5PK1iVhv8WW37MBkq9EnL3bSpq6Qa1yoDKLaZfcEwJEp5zG3y98AZ5fetzXnLWYuMjahBeP9H",
  "key18": "2CFsRxPTEE2H69wg5RUcLy4Sqx8THWWsuMqDtxdjhbhAUgnAYwDuL3wdL1BaPdBYEb8SoS6qkiZUP4fbgoUMoCuc",
  "key19": "eSdDPtqVS8vXiUP6GEtHjZ25fRar4z2QEgFfv4d8NpEYjdho3XfrExLeg5wkUypY1K6Z8GV7js5oj9AL3v879GC",
  "key20": "46M5ykr5w2hyW29oAGQqZysJDeftSgDUe2MemZnZZXz4eK5okYKVsgsbae7exTztxLuiRDEfrdJYk3z575wcchdA",
  "key21": "53zLfDk5MDjzE6abPLCLaNGcRkStQyRJsaKBXBtBceQMpBuosp8yeMbbCSwzXPAUzC9Mtjab8TB4W46SMrppFmzo",
  "key22": "huGzF1YeWy31kbthWC9jd21qGxRm4Cru9Hw3qmab6Dvhyxw6TbHTJ7nnFNyxunRpE48z269HDGzF3dWAAYx9fA9",
  "key23": "4qHVw7CkjBTAL7LYZukgiegEJ1FdJwNiXThVp9oK9PrpWCqy14WCxBA3yp7qpTZ2MV8vz2r7eeV9ksApNP42wVtR",
  "key24": "42RrLrLXQhXfHYRAPKyHe45q3VFriz8ZaHQfoajKDUDNmvvGpaLcYYWa6uCtooiEi58YcgWij27aS6rytTPb8XNX",
  "key25": "4QPnmR5o5wjVHD9tTsybfqDQak1TAo9BTZbzcKRFEjhgmoivmYWSPo2LofMkrV8FAruQkFKrhh7X63Dp7FurFBpY"
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
