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
    "4vSsfBPuv3UVdpb7yzQsWcyVTroXkk6iKJrT2JTWtwSrY4cD47a6oVNg38RdW3WLfg9kNNXQz4z8fnmhogUutoLY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WebhvAzYfPEbnwp7vD2LBck6P1hKhWUSLkk7zRHHLqEruRnKUgPujec6CqnLPbmGTx8Fhkfe4Gz8PXKZcHaNn5F",
  "key1": "4qfsndwmxukD3iEB4Tk4xtabmaY3t3EBozjESsUVUMaXhh756EuYKAb716uE2pos2f7S97Q19hK8LbEK3iTv9neH",
  "key2": "46DPYMwsYXH1pR8GKNBzo9rM4qggiqY9ULiYMk7KFjAJ1N3p1Uygad8kD2JqHauT72ejpun3UwuSBUAb9yDcSsgd",
  "key3": "3qwbofoxq68Kvr8aa9irQvb4fiWSxgF8bmQVWwg6rgUZpn1mpnmoHhiH9g6WM8ddxxXH54cRvGRcb5Bioxfqf6MX",
  "key4": "279vzX37iYn6ppk261xtpVEVhH7UXfReWgV5zZtjZDKbkrDwstpnooVMohPgavRzZSeSea94tfBLeh2qCQEzZg5Q",
  "key5": "56P9LQEHjugXuxGd1C2rgn2fwbcG4wSLdkkN1GZPBjYkHjkyo8xn1Vkx7srtHFjZwi4eMMEieuV7S1VJwSEkXwFG",
  "key6": "4C1toBWdRL8XkiSe8VjEowZF2xNdezRBGmCEmEcDMwHtQgivBSHDDY5rQFkAdEB8WPsFCcqHdwVbbMZsv28xFqMs",
  "key7": "4ZCjxL2fbQYf9qMPLbHXPh2b9zj4jUrJ5tHnMLvEDquYWjaNEZA271gf9p3VczgRLwdRjKsDGZ1XJyuW4uYYp4gP",
  "key8": "2sYTumH143ZHdLGf2ismavJkJ1sYkr8cqGCSbv3DjVWKNhinH1YTrZw3gb5byzxYd7GzWKccWgAFkfbNMqS59DZd",
  "key9": "5TWus44LrkTUGJyVLWxBaQiyqdq2SCvx8CNQRKbFmGfcfbKnuN5YEjr6AXHNfHQ7fXCzJ1o5FinsLtqKsrQrRrCv",
  "key10": "hXHDgMq84YBaTmsZHgucCQ1oujc1eqzkUoe15qQkq6ox7hR6YDT4d2WTaYfCu89Q9twf7mYZ4djAryjSFeD5k2n",
  "key11": "2dGKG75Nkg2hFt19e22QEDYqRHLcft8FERBtZYx3V8shdzqEkmjaFEMxY3XkoKpaJxkDgseKEa72zRHUcL5KbQqi",
  "key12": "4oDpTVB68G18ZL75un39AhL2sNfPpDfj4tEeBTY83oCNg4VGxWrqnWFixMb2BiSCVFdYkPWYxFxsCEn3LzrS6m3u",
  "key13": "5FXVtbaBhsV8msomQAo1i2xmAm52hQbwmrRhmkpNYJuy1PnaknXWZwZPNeWcmJG8Vr2bjufJV19wNYePasXU7gCn",
  "key14": "4wK7WAUxDXmjewotnrS6FEWuijmKecP9bSW4rLFCK37qLQcJEBujJCk4Vg5CWZKMULCg1TxHjh2mSz3AzqssPskE",
  "key15": "4JhfWKwjvxoZThXCQVE6BPhK2NjazvEgcAgKKGzfUiHRAb8Xa2rtGFUbGG5FW3kqeZZNjXMrJ8k9yhVumF744Vm2",
  "key16": "4dewmQWujJcHdHE366UE9UjJyHXDjP66aDGohkbEQNjMLu1ZAvQ7TzLkR2Zeph7rsDWXYgkHry6wDRsvG7rizJgY",
  "key17": "5RWNucQg2VE6U17Bq9d4CZs9wRWDz5LFx8GkKQzKbNzn5KKfhAiDjmpedRd34ViRQMwNpgZwpqia2DmkpgV6mZTq",
  "key18": "3ttVC25XPiEK6M7oz2ZzsHRajSXWqYstUqpbRqVV758YDwmGiWvc2wxXYkjL5NfL8MS35HBRVU8rmQ3XsR4tVuAv",
  "key19": "5GvzAjKPkJ1RiBnBAJrvHH93yk1PggxYriiYk5cN9iNVE1MsUQmMAnLwawrTFVZwCuKxP7M6CmY1nemEtRrCEbp4",
  "key20": "xudHdshNbrvXT2ABH2RyzuJ32AEFtVNKDqnG7iDq3i32C9wZUccKYuwmse8oH9wokUbJUTeo3cjoUUCnyp98QVU",
  "key21": "DJMqTyR9soqxgHdHasqFBmaKcgRy4ddT5CseT1vU8uTRjt1w9grhumLErw7nhesXwH8n3csCV9BkfMWEdbu438S",
  "key22": "59Q3tHfad3Sq7hiWMNhwy6Yg9SdsRSRu7SXLoxsRLnprN2poEBRcZ1zbaduzoiDM9Ujma9AXnAPfpiQXQxnHmppE",
  "key23": "2FTsnZHnBGiEKmEx7RgXY84Hcqpd5b3gE7WycGXxbRCBk87vdyb2qaULXCwo2jvT9c5y8Gkvxtq3k3CDuVzzmWQi",
  "key24": "nhyg76AReNdiXLo8pbmbXfEWRXe5fmPvBQruh4nmf8mmt1a3V7DKQUh7bZJgL5jew7PZ8syJCWfSeysUt37hmw8",
  "key25": "33yYVQF9X2vAdviUQB1qEzMqnXTorkqSDm5YixMNtB2rPX2t1fkgZCaoVYa12ndEbTrS4oyRz4bvEZqFjwU25LnR",
  "key26": "3Et29QAej2hxDEigemKdYwqj1f1ikPm8pY7SM6UFNg1xgvzMes71PvxSb37ityNiWxS663wAfUPgsWwCyBbjvXDG",
  "key27": "667HYqwne2G65AGdEXTTKiZPnhpsFbNK5sDBhzruAQdACPURoXEABEWC3YDvnCPcwesPpkyo6EyaZT88YmHSuQ6i"
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
