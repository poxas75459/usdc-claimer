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
    "3bhrj21nPcq5FTnbM1UjMRnJaJmFGbqfFmDN8DXKRTpNGwyVu7eaMxsav7LdfJLU5Tjdse3LR7de584mo5VbgzCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yPaM2rKXFfKKU5BBLwym8LCnbuVfexzwd4WfdGsQNkzALSXuAJh5BiX5fb1Hh1WmHAmKiN4qcGSK2etgyhCdWcw",
  "key1": "4qe9XotEhveLgRJLYNeQqcGgip28Cp6LXf226NGaMxTKnCqkdV15G4MrvSXttfzV1qU87oXDMSRWDhZ2PN1wS5Qj",
  "key2": "gQ5phCX1JEsbdk4zHBJSfEVSvu2DF2DzhnWdMjM7xtooWAgNjz7fPsR2gyKvjAPWkkqrEquzDpFm9Sr3dUwcRwz",
  "key3": "5cRCbC4s1mcoB3jnd8BmmWZ62DBR7p5qMn7NDgRxqQyPWvowfyoWNutQGFkLqtmVHSxTp8ytm4uAEdG6xeGewYQE",
  "key4": "4YWwHYp9JXxZ1ZNrekZF3bBnAuV3K29qPg4s2z86C9oB2ViEQrvMzeukXetvgoF4jkNoeewSMDYAbqTUmfmi6ER2",
  "key5": "4F62vn6YizBBonApDjQt4J8sZYJVyNJL2oMkTatgqKoyas9Ei6AhC6vhraZL92B2KE888iZq1keP8ds45kAzCzEG",
  "key6": "2bHmu6rWCdjKZtEdnxnp3xVpvu4rEiwXDELpgonPCuSoMB33TCStmbSnCbCQhW1A3LTTjyVE7zKpCYs2pKDn1p9t",
  "key7": "61ZvQ3hfJnwZPBEdo5RMuKWcV2Jif5QJVVRuHS3kAbtfcq2fasXNxLASV3cxLs21yTqcmswRaXjBcvVquUbRWSzi",
  "key8": "4PwepiX9iLZ8WTH5DL6szXTcrTBjJpEbV3MUKVaYRyMaHt2dJrAkV1sVw2xMN1tBbKRMQxN1NdrdyM9d711MT5jw",
  "key9": "xxAu8rQe3Fv4cdJMg65RwfSstJeFDh26xiVtHvFkBuY5q4NN8Ydq9YfuowrZ8mACDYnMMLLzmBFvpsikRiyvdiJ",
  "key10": "axHm4WzHrMyu2jfs8hh2Jrn9a3R2rx2j96UJ5fsoEGJcXcJfzeuds8KBnijaLh2GPRKX7kjhLpQqgJrPw8EGH5Q",
  "key11": "EcDsDQ6Uviofv7hYspwViKXdkur3jGJtaPHsgkG5y3ANrUh71mHafwY9SYBJBsheM16k6YdvFnAkYJujShTtSWN",
  "key12": "59AS1ixWMumZWUX52AxGAwAfsa5bL8GStgcSRY2ej9umJVz8SPb6Upwnu1PLLfMJMaR1mXEPZJFeED5AkReE4Hgp",
  "key13": "5yjp5UwS5Fn7JARFBLCHqddgWqLvPaRDN1kJottQoCFekcCHKHcsYw3fJPUzi4cB6EMUpgXzp82uwD6EqMh9QoFV",
  "key14": "58EDGGQXvQPVRERdMuTFbivd55z2ATkY6BmRAGxHfakG64WmAc2qQiU6DW8rE8YaRXqj9FZwADp9v4kSKAiyqMtH",
  "key15": "44xJQe3PRktwVXmG2qeup2Lsp4gPCYK7EZT4nZYk5cbHrMsi2x9VxQwALrMJshWG2xSG1R9ziWo6wVw6xe1QFfJg",
  "key16": "2jx4eGfDnpzwnATRwU19haYviBhGmEH2a7p7g9UPAn8V48m6eVC3Pc1akrpYJnKK35jgcSeU1un8EUqNCDi96jfx",
  "key17": "2jbzf5DFdTQygbrtrQdkgdEB1o9JVsFtqhCkdhHt3TkUND2qP3Bwgbuc8ocjXUMTssMSCBTA52u3geZYcRqPJxdd",
  "key18": "wmwrEwbw6NiXL8XzFtTCqwJw1wq5ijhTNf4p3mjHZ1HpCwX58RsJutVFxUHgZ4J6WNh6d1CF4t7cjkF4BDt1MhJ",
  "key19": "22H5dnfhUaHr45HEocESd7DVGcASn5aD4QThfeiyZzapSa2hqpEd8Fbfnqc135oHhubrua38cKBcNePFS1EhTJGk",
  "key20": "LA77nAhBS6CGECPabjNTogg8c4a5RdMHZQhCNfP3PzK9QZX4wnCiNEkRqdoGVzqUNP3v9GMzmNR5WWPrPPPVeFM",
  "key21": "2de6va6Fiqr8WqnqJNemnSptDEnazWHqbZzd4p2S965p1VpMkDBJsBsefAhrLu3qhTw7VFAZJSkhEuTWwHVtfyhB",
  "key22": "2WY478L7jYHbzvLX1Z6aLpxEKopr9fkzGVvRvT2DsuAkJ3BrziVgHdC7BVE5rgdSiXF9mLqz8NTtTKyWqVSV5DE8",
  "key23": "3U3rfk1XkZQoDAUXmCSGT7QHndxZu7nnukxjrytM8JXDUNvfLXrGoypmur2Secc8xtjLCFazreHS4zU2PsjTBzY7",
  "key24": "5yqRAKcKV72xNY1nSgHehwQ158MbYGBaBDAAaFjumL8MiEkWSHVHdSmga9KwHGr45TwiXD3MffjJBAAVe3pLEUTU"
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
