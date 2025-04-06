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
    "425F4QAxXyeNy3RwJEzzVrCdTyea4uQEUt3fVdffCvUZzG6sipBmPYJayDrxNbHapJzyTkGC93x39t6YZSjvXoe1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XZ9bpV951uaN5pZfTixaj12HR7uEHtB6DLtPnHufLWKzUqkNSwVWXDEPCSMEViuEVwUJfAsSM1Z6jiUgac5bcmj",
  "key1": "3Jki886AU27dJLsV4rWmU8xa8xwykaygV3czPuvqW6SytJ2ShHjUW6UejomZumLqLHewwtr7R2H9u4a6Y61eYzrG",
  "key2": "GuV9Sum4J1jvCjGQP8D7E9EcR2AFZEkTj3nKC3JcrQRP28JCcc6T2qvLXPKVrbH7pE7f2Heby8vYt4cqwHdkm1c",
  "key3": "5XxP4ZGWKHMytg3xRJC4jDJ2ndCWvZVBEABLGemdyZ1vDYb2e6xLeytzRhsJNi5mM9guhxcYDNcF1Dv7gc3PBbaR",
  "key4": "66gWrxMi4u3V1n8PZr9WbEwd72hTHsnJW7VWp6xKm8tKBRcYfLQQ4vDeeEjrYVNhQYbZcHdmbEo12Fs7SA8HTvua",
  "key5": "2pVedh1eKcVsXeMAAqMRQ7BBLg93XijeaAmzmF3wzGRFNLTSmLHnMbK58KvPrrY1dG57DkbtnqNb9cWcTwdpU7iY",
  "key6": "3WARbK7EGqgBCgxnqVs8mdxt7BHdVpUfHJvVUx67YjB6EvUsgXZjCo82hzBcTTbahBXoAsCR3sGJQF9eoTf6n3YS",
  "key7": "3hDkRkQfuDNcTVeUYq5HQDynUXEUvziZ2zAv7qxo2NbSZGhC4wEnirWUXHhujbYqByDGcbGT4epU7BKYpqbSSbpu",
  "key8": "5P2QmD4Aef9VTgGJfu7qqutAfMSgs77AgFAibqAV5y2rzjrMs586DnFaNLa8pW3PbVFGVVRwHSU5m8t27MWXvnrT",
  "key9": "BRYuS4fMV2k9LGRq6BRKfqQpfyAztpPZz6YpwnMD3EyXyn6FTd3PNsKn5MkU3i7Fxu4wFEcpycpGTi4FLKyw3Rb",
  "key10": "yy2TBfhrPhAxuCCZBzmXYDkGBqnUszecZseXVtMu1HqDEitBUTDoThCKqU3xWYtg4QpxLyzFkpSUYmavSu8sxWr",
  "key11": "4wFkhTSWjgHiFTR3M9FGzSfyghxgt9xUEdfpTDBdpPVoTukWrJzEgSkWdFz3ANnxmZhpebWPSv6GEqVHFSFGCuQM",
  "key12": "3VgTjJGvwRQkXnHhjwXw4ecjzXsY4QDagmJ9LXgqADRPyLLyD4V8evrkGXKSE77MpDdaxbjU3cyaeAAGvbdYhpsP",
  "key13": "4mLZ8rJrLWnsDT1EwzC3Z1T7HDVBPkEx4sXS8cjvcAMpHg1BiixDiYmsh1w79z3GWzcWDeMmT6DNJFAjaNPPLjzt",
  "key14": "29HqheE54cZ3F5baWpiTZog7ZYhmyfVzmegEfc7hLAJybUJ3fEptDn1okuqcHAebgi7EV8dPc53oAAYDynYMJHqu",
  "key15": "M3zpvNnYpyCsCaTdFguCeYnxi6twZWC99s3ENa5aBcWTCtcxYzLTBNSej4XJBS5XuNnow3WtbgT6Ke2zYkncuwp",
  "key16": "fHMmo1UC1aWQ1eiTAQgcpEiXt6xM8soEPrZ3ev4WaC6PvZADwEVoFZfbmAZtkzRMoLQJ5nqMo8qvRAtpC9nZ9gB",
  "key17": "2o7v3tmJEwKq2QjgbwmKPPBTCTUYBM77YippdwDDdq7moMNgNbmsbXCt9u2C53ukNa6xKZBEZdxHL97hfaWp3fer",
  "key18": "4aVDCs2R6AtMuLKzFaoX2g7VcGVRfXEv4buGfW6DLjTL7KHZFCK72cqqgiYpTXbvWdhuz4NDzrx9QBJYMMMFEjnU",
  "key19": "F2Uw65HkgfpnQz3oYUabjKrneyHCoDygR7TmcZ2q25rqDZnWtUDuA8f3uinN2brQFJcNCA4WxuKS1C8kMNso2C7",
  "key20": "3s9Hj6TUwvtopt9izrTCzMVA84ArYw2QpRj7eaStc3AKr4wUixNJmYKVFS45jnkMAPHhA8aRbRijgLfEaqfB8PTE",
  "key21": "3fHoYscU7W951PCydpC82ikvyZPdZzEQyiyPehRGTBaoEaRrbfz2eKn9i7xJVax3xZrT19FdGLzAz8HvXXFqi2o6",
  "key22": "4JbUYhNegKKaqNJ2b1eBQyJuvybBNBdmPjDvoCwFkZRrN2rvqUCYxFWXgv1C4AJzX59aHikaB1emEZtpmJAWgDYW",
  "key23": "5rxNVL6wYwGnBCpy6s5jHHdu17drg23Ucka3TABv7TSxvfuLqqUts78X92N7Bs2XHDjcmU1a1kgNXwkNk4U83PJS",
  "key24": "4CwrHAhbFAfCFHnbd1dXeWnCjAq97F8sgCgma7X8gcBa8Q5vUFH8Q2u4Xfsf8g4kesrkxAYUGAsXoNQXMGtxq1PM"
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
