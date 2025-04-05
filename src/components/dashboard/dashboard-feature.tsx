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
    "2zPnovfjXspPFf1vfCNYXmcpQpapzNk2sLUnWvxG57ifu7HJYyRjJAFcoaqEt9t6uKEWQKbVGLpcZneDf13zhyUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "599BgrpxaE2NCtwCsHZQ8gMmiiibrTAoFdxPRsJHyyUUQQEZAqULm1HFmB1vPn1P9cD98KRnqwVJw7aGnRjfmiK",
  "key1": "BD383JJE2cRxZn1dGHCzdcJU9AYbY3CCojXFfVj3WPzYaV6ngfq8oQG57CENgLfYnX3VmP1Hz1hhd16uNHiyQfA",
  "key2": "3S2rka28d2KXnDWugRNU7baVMpziXU5A6EThpQdMsCxKLFoiBpELbYVe1dqa2R76ddZ2WwMUrahaViaN2MeEHtYn",
  "key3": "5oeWGLxz7nfPgEWi91V6HBjZFR5d8KBZxeAzcbdwiUSsFnRMhWLQihBoUHy74EveK1aYbgrkYA9oLc98hK6HYPAV",
  "key4": "Za8dSK5gHoBtKgcDBsKo5nBydPcGRQC2EZaG8Jg4TkHNcNAuc72VfwCwyAvHhbR5F83LnBX8wyN82k2fnJVZrUB",
  "key5": "5bNqorsPZXz5m35gUTaYRC3zYExCVyr9GaNWK7HkcRA85rRuP1s8zdSZaqj3KdwKKotXQBSZbMAphUHyr4YZkoR2",
  "key6": "b7N1GyyxLiaZjDDQKNfPWy4auFCUYbiwJvxNEpAqRYEEr23pHtqFtJaH43uSt8xPkgCH1EyisTj8kNtWUR9BRRt",
  "key7": "7y97hH8jt6UQQeWRnkFwREi1WkvccbRL7EsGezWtzQG9tkkzR7EXdz1bzWDj5aZo23bSWQgnagrjownkR4eU1VJ",
  "key8": "BAo7Bxhsry2cqbGwftQgn1q4ojQbH2QbYehybNNePysnUXdoNKu4Lmpq2pHJyXLCSDempbaAyDDXe3sWDyQy27e",
  "key9": "4k9GbkYg8Aubbz6SgXS79o4csSKqeeJRgxn5hj7SADst2mLTEDCkc4gPdk5CXCeNFW47cWmgQpiRdkznwLLMFkR5",
  "key10": "iovT5sgGDahEEyJ8Bt8NpFcMTRSGiAxSaq8otdL48ZxHKgCg18aoKDJELidYGip4gXRjuMdGZp1qQy5Jr2SAwnE",
  "key11": "3RFax8Sn68nCi6jjwGVdQxm5gWchixSP5YXH93BH7FYTiR76yUJm5EaFjeFkpZCVwb47dpSfBkqYa1VyzJ61BnFt",
  "key12": "5nS5j4tfd1EDvNnxSTQDwt7YntP7jEhwkQjBdvWM6jtxAtTFZJ7oKxpgcf7DDYbCDkKX7ScxS8Ht5Eck9x79j7hY",
  "key13": "4j3D2iDQAWBRZpGdhBtcPYjEoDjTTAjN74mPiKETK2nVFF6pFHvWf91vC61qDaJBxJqq62tCozR8CXUdzav5UA9e",
  "key14": "5Ne61fNGQXFeWGo6NYso8BZfDqcy3QPaegTbn6AtWHhSSL38jdku3Xju27aVgiDqZ9gBQHMAoji7LGvsLhdFP1wY",
  "key15": "4spYT6RXktJeWAzkfiYzbsRnxS2XqAjMMWtdGPmj7E88PTg64rhbpX3vC4Jm87ExND14nzeWzKi8XFaoS2eQtg6V",
  "key16": "5q6Ptsqsf6rGf8tKuVGt3jSzawWia6cTsHYdB9h5SmBX3CXWZZoULpFtSTbJqatSTLAyUT5sJYmXPTR4TpjyFmXb",
  "key17": "EQ3L2be4GRMH43UFqTiNw9rpJ7LowhNXXr5TeTkaHzCT5n1obw25fi1ohB3a3Qccc2Q6YJ687bGG3j3iyRYJLwe",
  "key18": "2cKULRMeQHemYtLEG61aXj5kY7Gs3pn7jvjrWvY7FNu8E5ToBFq4GFoWPVstgRVM3wHxAjGUqzZFSfmxhAfXyjP9",
  "key19": "5iHSTqWn7D2FoEJN3MVUXe3AfAbMbRTS24dmvL5g28Rbhewif7jo6i44P7KYwvEfypyRY4UrsXFtQwUke9KQcvF8",
  "key20": "4MZskmV6v4WtYEteyVEcNHqPuJj3eXudvHjWm8oQFBKPwq1CTy3cKasbiKvuYAtZRAfopXsKWQgpDXJSFvUjzcu4",
  "key21": "21bdN1quMfBHEdcxWTVnACPdfgKeQsz8o4N13abKnD9JMti836npJ7cJKw1ZSUqf2ksgai2y2Xf3gsgiDrdB1QWw",
  "key22": "2P2VKGxwaEj45FaUzVHjrm1UwqNCujNiWPs3qxRdC1RasZUx78LxnjGx88pZGstVzPcXaKW83gKySeqwXWMtKafc",
  "key23": "2mJSS3BPPDU1syeeUU3rtc14TTN8xiixYMkryhTKtHqsxmXWxhcTFnq28MyKR3CUiVRDYnR8taAyuVAYuewGigTk",
  "key24": "5Zj6YbNsNF3jQGwwL1PdE9w4mnrszEvj6yziLsUXmSppZjx99Wj4tMpasWZ7dddJ1AXKZydSFWyzGp1K22D3fpGE",
  "key25": "3hfwveT3yT8QmbwZnPgukCDkuv2Va3WtxZKxZfgftEnz2AUyzj3QaiHgeX2ywQ81dPAarPCDZChKSznoZw8mDGYs",
  "key26": "5vEY6a6NjX7YXmB2W4AHpzkkCWvdw97hcBqnFAkiogc5B9m4XEFY8SBrM9mYKEXuhEBtCjPSRZ2dAvbaogRLqsFu",
  "key27": "ckZMefvGAaADmWfx1i7KkrkwpT5RZaST5mbaHKkAHQxWNSpXeFYGH3Th77bXzwJt9k1ucYEfXw6ZnbMYPrYup8q",
  "key28": "2Z4UZHV4hoqhC8DnaTkMJLmfZhB9EXwBwg9GEdCqkyvNG8JtHM4hraJuwGQLhe6kQXKhAJTPkPB1sMQonMGTRuXS",
  "key29": "4LTK9Noxhb7rxjyGVSNsHdEXSYBxmckh67uvKtn6mrPti4M1dsLtfbnNr9Kj2Ar6J7g9GVT5fyKRSTuoBPGStWzD"
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
