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
    "3XUENPu1YYFkNGsvbHVjcYpjTUkTHXg9PyUrXvutiio6LXLNqo1G7sDFVNaPWnGUMKUCMsLgVMh91ezpoPi1FNRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NDxm3Hcr1fF7FAhiqf4gxKySubxXkHQ2uiJNwVy2jKRotbNBP5YMUrheRFqkTXc56YFtryCA9qp1q8QnzUMTuLs",
  "key1": "3K6p4HBZyWaggCpVJpxSu84TGRJd5qMmivxwKyxF7hS2QuMFiU47TrUPFSEKcdLeqdSkeY56xohkT2ff4pq6Cf7w",
  "key2": "25i5hN71LJsGs8XEU8FAVj4TNmcKvSR6gpoaYw6NSmLeKdsyyFkg349VHNgaGBtU7LrySBepfUkfuQU4xAvMmEMF",
  "key3": "5AuCvABoxmRe2U5mm5aU7FTEtBxSrgNNDXiJnmZNYCmA8AorwTR7PN8ttYz32NM3mx4cK8uVidsyWcKYY9PJaSRW",
  "key4": "3wLpmYga552heCVKXwREegbuQSFPifKGZfstCKScW5phY35zVPr8PsGKsaNBrfP7GbSEcgjv2dWhakq9ENxawLru",
  "key5": "AaWTJkuFJWcJgP3tqEJ6j5Hfhz9i6i8co5vYaaA7vf4k6ri2iUWPdx5HqPXErKFDW7YtmonUazE8QUNpYzucGLK",
  "key6": "z1MC8qjo9dZpTd3jXD4T5ZyNowvdgcScsPQKkBLZnGSdboSfYTMLgDWKb9uZeiCAoAQRjHrWsezFApmVun2vw6Y",
  "key7": "grvKWmWJG5J3J8TDS4pM8gW5hDD4v5uyQhLDBt2MJpobbstEqF9DMMWBv9E9EW1vWiVnZG6qwSYwpXpQxdufjwX",
  "key8": "3JyBjNw1eU9FASGYXWcsJmSA6LvyNZFDJgUjGhmG9EjfpTMXE5QmBXquxNdDDJxh1TJcVCSsjhhWGXrYmeeMWr9r",
  "key9": "4QgTH2KhueEaha4q3G5mdkLBy9NasqmzeUQxNqJEnshbRTm6Xs96zMBjE1Zd394xVEYG2Ybi4Zs5zSzwohsq25kN",
  "key10": "3EoZKLQxwjUgKY7pUi7dte3WmZv5CZn3rgabeU8hybE8vN7HnwnhTN77UJVAfs8DMgkpywfPEDxjsYtXpgM1UZ8b",
  "key11": "5kiBV2Z41pYmVVzHmzYzArFHTxLEQJV92SyPNMTNCFLnDbCFmBRAf6qNAdtGkLPU7ryQbaWP4m1pSo7Fgr4Uwv3F",
  "key12": "4DZYNMcyUGRnAh5GxnWR44doNs2yGgK98w7SuDzDafrb4AKvVrXpk4drHyebmSsCHji7ijMtvGoFeggiyJCxJSEY",
  "key13": "5FCQgzwktZPv9ma7F5P5VpUncoT7vE8Mpsky2H38mTBjiAzzLV2UkDERuQyrn5o3qZr2WBFZ9mtFEqC5oGfMniQ6",
  "key14": "4E6zLukjTdWkQBtiQyBfQrbHm9G1JTLoSDGjmQ6C5Y4dji4QKomph5sc6366meZtYapd5CHGfYJwMuSZf7kYZipT",
  "key15": "5oZ7uhnV6WpVf1HZ8Edzano7QPLxUBxmwbQhQkBVQcEPDEyY7BLvk32UGm43G9cZ4DNvy73VYhYxnSRx8TnyoB4D",
  "key16": "3SWAYVkLUX7dYGbTSwohjgw9TuuHcEvjgbx4JHK8T5RSyfJ9ve7NzobaWU8Ys9fjX1frhD6YrxJ4VhM8ovqKitH1",
  "key17": "3p4kwwkZv2CbvvLn9Dgu7r3JpNc7FJz3L3ot34Mk1S29vxr72cxFRYchNUqDxXnm4jeXeGQooQmYDynVi1bghWrZ",
  "key18": "4kATs8MZ1xAsdR1H5MTNKDiqE1nEkzx51wzAob8FbDDZfFptGeSz2sNNMEnUVCX8CJe1NooJHHhr2JC5ukRr6SMp",
  "key19": "3T2iHGnL69bQYEKgcBRC45eSuh5cw23QffNfFgPuvAEREzzF7xSFX92L3yQrQSQKqvjXm7Bua8VhYuX8npvyVTpp",
  "key20": "4iKvw9y1kuCoxoyThdC5YotSQWT4AJmJYjuknToUvTQbDe4yNcwPtBvbiRb1mCf6qjdJRw1CXZdvY3eo95mpnNbs",
  "key21": "2TzEaxZJauv1sw6sqaVQfjENibeWXw1NuX9JFLQJTtX6HRf43zzB4QKD2zNyLzSxGRyrawX4DhaST9kAKPDxpsDW",
  "key22": "4eiUJFC63aGDhDHqXPjgTLk822cjE8NuYERA9DRNxMwixG1JBT3GbynF4M5H7qMG6YeDFdtV12YSnPRk8EWLzApL",
  "key23": "3oGbxWta7QCEeZR4ctUgDdh35abGJQfeLmqi3MUHEsAZCtMXB1tTFyMt9erznHCx2VZLzamkH98EUSMk7D8BcdZc",
  "key24": "yp22ndbAhxQ5appMp2oh6Pnau9MKmErvswDifsAfK7b4RZu1E6Ks99XJ2UmCJ1G95H4oWdLKxgi65ydKtop8bav",
  "key25": "2uiFiZoLeGn2P6hYtcv5mhYSkRFefg2wVWQwNtZ7CsJJjM6Q3rWwDRU5aBGrEnNxSDfm14dFwCDV9SS6n1DiqXrF",
  "key26": "3RAN4s6b9NAFM8a8nmEPUnR1LBdoWrbNyhVzCobkqmqqwVqjFqQYsaw4K9hyJwPNBzRnbFh4778ZJTEQvm2oY5MY",
  "key27": "3XdgYfqRw3jZ4Tyo8EtTEf6U7SUfRfQXUFbjaStTKBrn5y2jZTr4j6v8Kxprj29RXEi6QitUHuxxRHqMGAkNdoKa",
  "key28": "4izFuouJZ2grtK8xQHXRMfhsyQthLCYFebB23BoKXJdNqeoDcQSnDssryRZnnxmq5dC8vK4Jj5E2bfqfUnLEdeUo",
  "key29": "4EnezxU3ENGmRpLnjXWZNkJXP4f3cQJR2nkw9s6Lovm9K3AHXguSyYomY6gxAZizCK5NamG7avp2wDoox6X2KMNx"
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
