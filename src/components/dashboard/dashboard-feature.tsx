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
    "3ZWoZJ2Sw2YuW7ZNnLBxPzaLUjMUVtF8fZJytihu1bXMCXMLZirfBWUUPDV55RkxpM8kbQfQGL9E2sukLz4ofetr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LZvarQToEu9eBa19m86AyD4xr6apwwXjc82a8FNhX5DLBNCsXdQqenfVcf5YHAPR9D1QBA1kmFgydtYtax9Cz99",
  "key1": "rPydYkE4RPTUhnJFUf2QhvK457u7VfG8puAeQu6yncM3DhQ31Kk9253YfvTmRDvsQTrV4N68CTmAwQBPLWLof9c",
  "key2": "ybzaDcoi17AXs6qeq5DgXc8vMUwgVxTEEwLr4ufsCuGsvLGtBjgdQYzMNY12B34nDncag3ax7GYBQdEnunzWA9P",
  "key3": "21iAtx8P6FeS4YEd7MWCyCH4a63jcAG69a1R2u5F8WLm9egrfNSZtPVZjXEpm3UbR4twyWMdD9JkZBUCUpZeRzzM",
  "key4": "45t7U3weVEuJhwtF5FqxYsqWqZ58HJKuP6PBYeKNyxAMhFQzo3Z2mVUrHEahRMf5gdvqNeZq7iCyEZgRbySbFJx2",
  "key5": "3RaMNi3z6mnvkhomhRxtTZQ2K1r1hA7QagFVtQn81iGpAyNevg2QFwmkiyNHUfYcXxk1RGRzj2jrQHZfWZcuvzUc",
  "key6": "2ZahxYNt1G8d8C7z6i5P7iuqWZ7X18WdwLVUDosUpCWH9FzoKFCkibNuqSiYZbvAuyudbLo75R4d8rz635NGogPb",
  "key7": "4eddyaChE2jHAK5x5xWSF3u9y8LkxAo3yRGr833sVM6Am9mAsPcdqDhPyHfUqGaCeG51mCS77tvteurs3CcdYvkw",
  "key8": "S4ZExxbCwYLKiGpp8Em6BBwwBsP6NHd7JRGJHCEpmj5S39QxxHJeMv9phDvNTuPiwGKBDZ72N7aWsSfeHPPsgXx",
  "key9": "3uVA46Fme6CXapD3oAnfhMg8qg2NhBLsz6qJpsPGi66pqDgYuGnw5tbrEY4WHmT73JWhsGR3rYxkvdRRJL9EQSvu",
  "key10": "4u9su8vCuWvw3VmcXjBHqmyfSYwe6UvgE7RNzJcoWeZEw4hEzuHz6rX5BtLyewQaMn4ydFn3Z5WNRvdXMeoHvGna",
  "key11": "5YDUS5QUpRtqAcp5iYXkewf6jhsyGSRAoQWT2FhZvLMqLkHVf53D3NY76SDFGbQUfG4iAFYJYNG23CDCr3radfbH",
  "key12": "5V52syVD5mDoW8fKpQao4FsdvFCDMZbXieEe8pPA8iwUL1NtJyXh34wiGEtZ3xLPp5LmZ3h6x4pzoutPwXc6ZnXy",
  "key13": "ACcdp83ya7MWWx3bNoC2SVYCC9MHdgCmmfScUz2CMXgwXFSoMeMDAz1bqeBMsdWrmniQDG49Y81dzrN2k9UdbVi",
  "key14": "5K9sQMSDFkfM1hPGZSTctbqTm2HkWVM1e5HRSokirmNTaUQF1z3JNFCtM6MHtPHSu3Y6MZZ9NMXhSQvoQexGqG8t",
  "key15": "5MwBSzCnfivrqdZwR174ABS1QihDVM3VgcKWvwvFrdYtZ4rBYqdUdk19RJ7dkMD6wnHQJE7Mc5gBFrfpLG3pLGjs",
  "key16": "4jWj7KmJSRXtLJ2hTvZV6gQxDJdy7LW34dXL9XwLmsSp5xrExwnjSmLY2GweoPsXpTie8XRFTJHaexa9iQFa4AzX",
  "key17": "2qXqdZX9wsiDWHreeoaYdU7FDk6NkAZofgBnQyBCN73GukdHt6Ymh5TfHL9LUe5kTxpbF9BefaGL1YEjXXLy94GE",
  "key18": "gNfirqR8Bc5n436LpALKBeqCKDxBu2qaGgtwNjLKng8HME2PF4obHDkLfQZtgMkuJAHNczB2JmPQrJYinUPEkVe",
  "key19": "5jQEQ86D9PBxhqdbDCg9Pyg1W1beh1NencrFgcV3Sw7rUYfHt65p8URxat4Lj12kt5QSobkD8h4WX1y2HD3xqov5",
  "key20": "5SnMDrfHRYCszUuSSPQZVXuAz7CcJS7h2ENSpj3UEMdwVfeXC5rtuyG6Non9MRzkVpye4VsNTz9mQWJVTR7EmrgY",
  "key21": "3Hnya4L4hj4diDiXGQXUo3nG96yNzEMSw49o4VddzLepEdCrLyg5zDv2H7HF2QxtT8MZukVxhaJtXu9DuwUmQHeX",
  "key22": "4q65e2mzPRxvxv6RJAheQQPZDa2u2sTEBmEVNaYgZwXC66CUP9qdxCffMbmZq5C5ogD7U4gZLjgazd8NQwW78LTo",
  "key23": "2RBGzU9fqMpmqDzJ5WPGZhJs7jhzuxYey6BvzwUVk2Eeh6krgyVM7eJ26DuHVaJPJnxZch692L44AmbYSJoG8LVJ",
  "key24": "2PUzyQYYqpnmUQbH6NbWv4fiqN2kspx2w3Unf92qMfgUSq3ob5wJGJX61EvRaHpwk2QXRFtSvr4DhnU1N3bG2ARH",
  "key25": "3Uv9N43ooqSorqohNTE1R44LpT5y4GCdVNYmvLoWq48WxCh6syUSkX7MrUheVEBqQJeAprd3NCLddH7mFVUU6vtd"
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
