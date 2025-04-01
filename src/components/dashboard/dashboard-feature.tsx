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
    "2Yih6uKzpbVF4C4encrx4T9bwL7tbLJQr4c114ZzVfRpMCix3RcLCUHzmxVKuabicQsxdfPxjoa4NhLgyNkp6Kj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sPvtT1kdzfQupTj97ECXreWBEQL6UV3ZgD1pG8GCRYQjNoZtMAP46is6MP8HucoL5A6tUgQhr1epovpcCSz1MHT",
  "key1": "4EAsgkucPo6h1jqdbp4YYj3S4AAHpqnaV9sVUYhDB9LyyTUnLywgHAbDNWcaQfpVFmjNhpCjqbmajZDm1s2wcsTn",
  "key2": "53BUjNS26yDVdBLY2Fnjbt8uEZ4du43cMWynLLKLBDsrLctSio62djMe2aTa3tS5oGTP9bzcY5JEAK5FGWdq82uK",
  "key3": "3VvyP2Efq2bbEuuibWSXXXVmMYfRVVYr382QeyJhFjGEEV5ZHPWqU1LsxZt3QYzZ49utSEUj3fv95QyG1sWTStvm",
  "key4": "5sArMhAm3Bt51YjnLdxTWtiWicvT2exJxDgJKsUrgs3vWd6kTMkzbnvx6TLMj2WSSrzngzz1kWuRGA6ieUWUzcTH",
  "key5": "3wKEdiwgwpyVzf14kcpDikxQMiWvCnj2LxEkweZi8v9qs9iKvAkYAWAq5hkVppTcEfanZV5WEUxCwekRtKWuby5r",
  "key6": "N1dR4vBa26gzd9P6FNdLqZcZf4KsGF7yMmgb49vorRAxMzxHUryYPZrR9jtSi5S145Ap2x4mQj6WkHzA2ixN4RS",
  "key7": "3nLtmUseYY8CaunGrBve9VVU24ZP5g5Qfi8iSP5UcLZ5qSVY87gQjZ8RawLfkNDQXJULzkaTgukfAxivvxpKa6D8",
  "key8": "5C4vdnsjXLGepy5SjNKRBEL6GNCoKbukYd8kU7h8kjBkaVSLhggvMXA96W9AcD3nffCokQdKtfoHf8JES7mYH2Wh",
  "key9": "5jQRJK7QjqDPAkryj4XDuLoLa9ap1zYXzxWuw7npZVJGJaZSMJFUv6ZKQo5sPUhnWJ2HJgQzDjF7BAafBmY2MAyB",
  "key10": "624sgRhbfMTmP3yu1bmpF7wPZ4XuVnXCR9YHsaZhHFu7pcgfim9Duq1fZD6mCroMtPocTh7PuP2jzNZwE8P9JG6i",
  "key11": "bm76s1srZJfs5ZjikiZciGehaUNMg7tA5P8rDMrEBs6wQUWyyuxXLrEZjRAyRwn9Fr5a5QVYQbe3yFqWzgdJ2Ao",
  "key12": "3jkGUzdScMVTvV9X49HX5tCzaR44ixQUjSgJ9eQo4MmucYC9rVUvvRuTjVzVQg4sHpxRnTFXgrRqRC4kRPWwfGEa",
  "key13": "5ZmP46vcfKSuepEeSUuAPRZSE8RfYiZsoeh2mvqsKnUiJd6S4CLRZFMgTdqQ9613urrk3PTme64rt8PJvoUmtLjB",
  "key14": "BgLQuayuDSSse44mhYDicmgvTKPiKBG2ZcvrgEfdTSAgd4h6owSLZ6S53S1gLvinQh9AmmCerrARRegwfkN3yfu",
  "key15": "jJgHHMBB9XU99Q6TFHVhTamf1tTbgVgKz1boKqoFAZVJsNyLmMacctEGPQVngLubuutEqLfmzSfnds3ejVtoXDJ",
  "key16": "4Q1RLNYkyPE1UqgmTZsBNj99sGqh5QtzRfYWfDszqpJoefoxF3FmGhongidjvwGs6RTzFjWdYn5LiaFuSukbE5nP",
  "key17": "F6CBMdkDXBm5JjkneuLnuVrr7Gfnwn7uz3QsKDiRVidmX8s5vjne9ipSdm9yarhDhrTPzfV9mpWw3WTrg4ApD7K",
  "key18": "54oCmspMq8XYxjKgVPbM5ZXYtSvJqVmkJNe9MLvMTmVGQxvE8s8WWWXrrLCwGE8K6xnZQ4tbDNsF5xYxcmY9WZDe",
  "key19": "4rZHc8WXoUukVqPMb9ickgzF7aPH1YUGtQtH2PQj1QVahSFTkVttnTd3S5MtA8DBXr68R91kr12ceFhKTiVxrsER",
  "key20": "4iESUpMFBamr2rRNADtUyjGakkppb9PdDVhWPFxAXEg6zGn4Sq9mHs9b1GciTt1cskHQYRB5awXaMGbYW6NEEvjc",
  "key21": "67maC5hhkEyEyP5ewWk8AbkR54syMFGhXk9SEcy4xVXSYxvJBqB86PAxokgpWextv915ygEcnBvnwA95kxyedFgs",
  "key22": "4e13RjfWaNTXf1397hrNTSmCrMNQgZed2ZaePpReYRKBgsWjPGfcKo2nSRdeGbGobRpm49debbDh23ZkFh12eVwg",
  "key23": "4hAJkzco29vMLheSQP2k5cb1jNVBHPeHaMtf33BmFBgYftzvEnXXquWZUdpepT4eDnxoaVjFHiM6AYQnoC1FfVi3",
  "key24": "5y4NP1ANGcVChQNrpbG2VPgvkTbXW6GX4sp6CFV1TkatuQQ199KwhBQCrvJWzHFuzrNWquMbC2BYRjnJk2yWpXUN",
  "key25": "3wXkPBhjGbmadJAp9aiyfdHmaSkbZdjZzYnNjx4dGDRpBjGVvQwZx4uuopcztsirdBF3cPNX7XaaM5Gw8Q3oHo5S",
  "key26": "2jekHcVrTnYqNdBzg6b4YCefP1MVP6pmd9o43g9LbfoSqwgdxj2hkqNPXsHseRGEaZ6Ng6Ut5HTuXa3jZDXtMNUX",
  "key27": "nhjGssCDifM69up97HhC6GgxJccgtDrzSK8EhhdaKwtYgzF1bVDgaPeRz3ZP4qs2pNWRmXAAk291SsZTrRc3hZL",
  "key28": "3f65z14RraASoQdnwNTrgA4FV73on6ByKwUaywdAr9VXByXaUg84DWtnX6dE9uaSETybgj5suAmfjtMbuCQejRie",
  "key29": "3Z39gV5ZBPzPvjScRc1ZfLPbhwEBJEUKkfWCFhMfFpME8nTChdYpcmAy3w5uifPjLkRFGsf4foVjJQhk8DsANvpa",
  "key30": "2qztPCQpAu7BESGwmCc1BQ866YbWZUraNX6woZUxqc8m4yL96w4x1RaXHeB6Ayx1wHHnSGiEFWJzenV6FTLMbmH8"
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
