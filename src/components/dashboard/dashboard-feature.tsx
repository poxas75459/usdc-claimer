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
    "2ayeGYXBcHRHvMdymQwwMrhAmcraNitLN2pj1rGmh2EfNkEMqTBXXbdwDp6CL8WUaeAJQSTdEtSvYqsVjPVEiyKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N2gAXmXnXRvP9Ndm7bm6ycJvHou9wtv9PtQj9HQJBL79vdiLs5eeFTaFhCEpT1qNmT3mWqhNpFWTTBAxg3pDUpS",
  "key1": "Z8Ev3cPPRcj7RMn6JpmsHGVNAEDcBHrkmXVNb829TRYyDxk7WMgSj7UCYWMX88wc349o3V3hH2vz9ayVTTycT56",
  "key2": "63j44VEUNAkE7Yat2iyF9WsRB4S3qQEeyJSUgKA7kMakpxH25YyEeEdUuwfwv4HtCqb7UvGFvQLMV2k3wrMitUet",
  "key3": "3XG5UjqHW7WjsohqW1c8vicUb27ianbNukpP4JJBLQCsCJ7wSbPNrNxUN5ZEgk2V7mR3EYYwKKZf6DzQEghka628",
  "key4": "3nkLKYoRzMymTei7FWm3MxJZJ6LVaCVhsVeuqSp7SX145SK5Th788JXHyUS3RSPj5ornpZwsDacQyoZNujks3Wyj",
  "key5": "3MvWGtgCnz7RsPm25MmQSu5nqWQ4VnWevsEa3RTCXJjJei4tqtSgD7DwcPYxrjh14NWuXaDXsvqds8xYNisyu1D7",
  "key6": "5wNjHme84G6UdDmEr3sMiBUMvpu2M1rTrssGKNVi9RAEXdZimBXbv5RCVBMEieMTUHkyL9xjqjmdqG4jgYA4mrZV",
  "key7": "32C7qwR2NutrE1ob6jLZCs7m2pXdw2iRmwX65436Vz6JiNQvUmL8yGmuS8AkgpPkZukyL5S228aD9Mb5RE7wzney",
  "key8": "5BjihgDEqMPKpLYSrHaComa6QTs9H1sHmq3wM67jnv1aUtnuY5T51SDxLJdEhEG4Z5e5pHuhZ4sLtnZ85Ngf2hGs",
  "key9": "4rZo94esJoT1oUxGw8mcftZhXbQMZvnwR7nhj4sJWbPuGcQpriPzxx5D8589PWzRioiKvWZyFKWKhGtSQPpeZFaF",
  "key10": "4hhMZ9HvExy1dXCh1tSwjUSiFkjjCL494dRG8SyMjdipcjXkXbLCiow9Wx57DgbNb64Dfx8GjrKtTRPSjVVmWNCB",
  "key11": "5YBffD8SftSQS2jUb14pHRQeKXAnS3gut8oCgwbtDexM6S44zCen2EKrNKGiafvuuEybfXCYRs3tuTQZE7Tf5vpA",
  "key12": "8kcRZ7987q9ePB1QM9dgnkc7SfQod9YDdeQcnvubg1k37JrL2PMyzJCMVG6QakuTKobryAuJdLr43svcFHwTowD",
  "key13": "ae99VwwMtf9pAsuQ5KwJRvuNNk3ejU5wJ7jq6DoZtcfnnSMAULiZQbhuVcLAoAqJuNDZENhisqBCSEiBTRM2Y9K",
  "key14": "5wtW6YADvg1BzDbW7aJ82GaVX47MhWmjj19LeQY6o7EAyzMTCMSStWucu4XZm1YhugVULz9UgXkryZbv8pSyV5y8",
  "key15": "sjjeav75hcoucixzPbBJ121uNyV5d7ckdiBJ8NSYxZZMxTMTQSMzv7z7YNASSusZDhTtzsFqF7kZLCeEegUG8kB",
  "key16": "fLaHrmwwVx6rYkhjDuiS42RbVNU3rV7iVvEYV7KJ84emxkmGVBCLDFgmGkWBdKi1GFdGiEGjwRCbCYZXLrZfCam",
  "key17": "tXtw3K5zAFDjuDWaZY36xAXru2xxz2SgPJKh7RAsR1o3ABoJLfXSp6C7sTxU1kNUZcLjEuD73eYJC7k7RgaRjUL",
  "key18": "3GpCjjAuZgGJC9Kdn41Cjbr1sqoRVNCZFLPwcKXxjxwnsftDVEH8RuvN3iPXQWy3Ks7KsrmuA95bycVBqzpMqQHu",
  "key19": "kgZxprTgTgH6TbvuddASTHLogvkucpSR6kavrHtM77SxxZdvqBAtMBYm7xeQrAm7A2FS9xNfenj6QpCFBNex8mu",
  "key20": "1BTLurZNpiAqvsNTR7EVGtb5HGzgb6WWNCoVEm9YQZisMsE9mM6KUsZYdmXtxGg78bMQLQhAJeagaxJjYSvQRtr",
  "key21": "n2Lqh5QMSgoBeN8AF4Hbv4fYZUG6SYbZ1h5AgFPgBQfew5rYk9Cv1cJZVCPrRZgG94LinGCaf1EjtxzuwV369kk",
  "key22": "3DLKjAMeSLUAydT7CsMvEDzJmDxTJtrQ8TG3g13vMWJ9tda1VVc4zXsNDqCtHaRToJZWuQgkCUQTsHSDvcPY5tz3",
  "key23": "2pZ7wnwYEdyHRBgvX6J6U3x8vhLHHhawwHWMeBELSn1Fmf4ydqjZR6HevFPQVKq1mSryUEZYccrZREA7S4pXa6Cn",
  "key24": "2A2ebXuhZEJkvF2CcrZqsghPkSKVgYveNioqnJDBA6jRFQQL5t4U9Lp2XhHMsAZz1Yo6HVmDGpZYCusZKG26sVHV"
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
