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
    "3pM4uTFL5aL9eFhqsttoQAtRQtjmHR3Gg1at9X8PtiNDd5xbP3mtyRSqJqP2YbKKg3KH2RFRkHwXRhQzQHWRythR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31gaQJhP1P2pyKJgPzAkBkDKC65uVWeEhBZQLucWgJz9BjTNRW2vHCQT8nsz5bT9kBdwVAgyz93CbP9AHgPAGgh9",
  "key1": "3sGfFsaqHm2W8iHuopxEta2atYbQgsRBEtSA2oLUJ6Gt9wdUuLjTqLwBVLr3hEfeZMXZWNrYNtcwgmf1Um2Dcf3B",
  "key2": "5whSU77x3vse9PHJQoDjfgUTkLKEKMnXxAjF8YVSZtNK3hX4wLHWZLCU5z7zBA8h7vZpAwhCQZUHZ63gER67x3yX",
  "key3": "5tmBB5fNcg3oFbACWb17yUW6Hc2LocX8fTebi6i1YSfa8rTMphshPJpRxJh4pqoVMnqJqHXgAFk3qYJRLM2ip6dY",
  "key4": "cYBFQWcrGRytZNY4hxNCc1LqS4P1jRyfdVcnyQTABWD5cnpjUz9E6sVXoLBgGPGguj3AniFsefT5FJrmFBL15hN",
  "key5": "3kadXFuWVUerqnTiwH2JGh2GfDjJfn2wQyctcQnAh1GWhFwqWcJhXVQL7Df2xwaBGHeigNL14PXEyfdwoPpNKYKG",
  "key6": "5irtyAaV6pH16yNh3W616Pf7joMdcVDpUjohhr7sKBGewnuCDpNhbJyK6x8bFKwkqY8PZ3v6T5mL8C1a7f2MNcLs",
  "key7": "59ng5MCjNwQhnyzznqH59iWrqrF3mo8tLUqdzuqaJLwmHtSVW3L1kVzgaYbVtXUc3nVBy5Q4TVeZ87A4QERe22mB",
  "key8": "9tSqZSzjcB4qv39LMkefRuZPGMEd9eLNaXvLv7JHUhPjYVgvXSuDACGQ1zYybGX2f9xDwGou3pdtQRMo6ZTQX1b",
  "key9": "2U6yF3wNaV6hhptibUvgq3txgXM9cLpYx3jNANPcPZy8CWy3Sca4HafohzBiTZDoq6vsDX489EKM24rCPwPGvLE1",
  "key10": "3R3NYsudYsBzvMjyUQDNsZsABGQQePGNc6W1MeJpzLnDUr9DKLNYrr1NK5MwQdh5i1cxPs2TAT6pRkaLf1h1b8oq",
  "key11": "5pd2RwURVR6Bv4ynyjc6EYi3MbtovYQ2Sp8Ri9YGiH3HZb57fNuRfYLtisSbHvw8oSNq232h2iqCyLjCt94Frgy9",
  "key12": "5bEoxqATnfKDva1PinpfwE1cQF8YrR7XkuAhvEX1DZSWzLtXXcpYLWWfRpkhVETfmSNzbzkS9UZ6bi6ewmD6RxGo",
  "key13": "TqbBSjKqbkGhnggUAAQ8E1rSsDbnyPvtV2v36ANg9bynoyLpXuyonXmmthje6tdQ89CdiBpMcBcas3wMsiAfUGd",
  "key14": "5kyVMJ1SFzKPcyQAa9FhQQPxRMSNMbNuuZFhoBGP9caa3tbPEGdgYccuzkgAzvLNyPHzCrUgLxnxwwCXCokqt1Uh",
  "key15": "4EEybcRtZnWmNVj3fdK47PfXmP6BxzoUEN4KRp3hcqe4nQkqqE2cF1WkxAYAMfhLRHcK4cc8qCUtyY7NxvcQJFRV",
  "key16": "cY5w95Zk7tQnXUvrkjnL8FxJwdBMa3CcVkhanvYReg5RcqKXzCgDKuLUdTTQj2r1d4p6AWjrUEThn1GZUpjALcX",
  "key17": "4jywCgbNjj3ZmmayKbdnszYBUAjLKtDWnWVKc8kBrd12gToEiBuWyiu7PfweaVqV7YaoMC4eKud6jekWRAAop3UG",
  "key18": "2YPbFgMRXKC4rwqYXvus95gRztdF6zSuXC4Bn4Xqp2ARWw8tUZZ6pLfw7AMjEGfaPF3QGjUn7U7Zxh15nhpPQBYp",
  "key19": "539Xg4DNYQCH5m6WQmA9AKp7mwzRQVVDetRmCuSqCJvkUmTweornVR2N88Fd8Dyo9oBShy7gx2Z8vdv21Nwb8dLQ",
  "key20": "gZNt7cZW4sEn1UgESjL2nGU8NMCBCHAgzj9r7A2BLcWgLrfnByzLceKCdhmaCSB8oa6Cg9nUCvrX72kWG5HR1Xr",
  "key21": "32tr95H7yUMMCov4GmdLBZmNkZSFXLg6Q6M2KtFMFDYo9qHYc6wmC4qKUm344ksh2RZtmNBzdDMQM4CRvp9TiQes",
  "key22": "TwUDJ9sxAp4XDxk9XJ6K7QJPkB1mooJwgMhLLP6WQoEqFvby3RvtgZsELRrbyzUENNnSytNxzAKQiKnx9XDp2Bg",
  "key23": "4mdBxPAjRC6ZENDJtwefvbFAMTgTRK1TizCXJcQZ66KCw4cuxntcTesfAQD4ezfy8fXvZrKVJ6gnufZ6LF7j8AcR",
  "key24": "BFKhEmwbh79ogNs8fjiHSRQser8VAKzSBdK2uSR1NwzJQKMzr2rwpu3bY36C5CMTMKUWWpkj3YVt2d4JbbyFQUw",
  "key25": "3JnZti8ahVei72X7gCyRF9mxiEjdcsPBqkKjKKHnFaLjQkcAdQPdkG4e8CSyufgL9wFFuciUvaNZ8K7yJkKkXxFX",
  "key26": "5zpdzmkFod8FdD97LA8CFuH5JsQATmX6Q7Rr3AZ4pU54XhjxKH5LYv5hoMeMoZw4vwQUBWgtCrLHCheMddmyUk11",
  "key27": "3idUKCEyzoHd1fu7Fs5vLULBmMgGjeqxSXZgK2GFAbBhpcE8Jv8TMibsM3LY8s61LFUbwwcogKZENDw3omTfntTS",
  "key28": "5Je1m2qDUoW4QSaxVyCAMNe1avuKRTWYEHV9DMsiPFq7KTYDqrsAQ99fhSB5Age8tabAKxZknxr73ATiyXFc6w5G",
  "key29": "3UVdhf6pqDPN7iChTggD1z65vQh34DaY8uZk3ct1FzRBHvLHaVYcYCppT9iVKiWpazvJsJnKw7Si2snK6hYDAVbZ",
  "key30": "2UxTSSU85BgtrsrJzHvH2KnbxHY6XEf3Nb2Zv4xUwmiinDc6ztV7DDfRYXiHDrEjdcpW4nYarXgxDy3jNEudpedj",
  "key31": "3LpRGgypsQFssStWxXGCLYZ2poMkJdkCTnPqb2HKHLtBGk5AQLXLMd6RvLUBJauXRT1egtgYFrGt58vUNtUnYpQP"
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
