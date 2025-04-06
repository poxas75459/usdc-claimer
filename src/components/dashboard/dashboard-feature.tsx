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
    "3SoeshUZZ64KCAczTt6VGjin36DG4gXcszFbm16ibSkj3NdT4idaAkDua49ehExEgUnxB1ftr62iVeEqa7bFSwCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ApVE23jT7iM2a5MQ3sD6bL85pw9tAEQAX9chJaTz9jwZtgCuWzTjZrQTZwQnmNr3R8Mz7ifhJZ16eeLEx9VCnui",
  "key1": "7RAiwAjf8m8rtQaAoSDAjoYKifga6TBMH3AKKaqsv8TAdWvKGjwJuKS7SEesBL2cPJpEu7JupGhJZmsqK7DWSQS",
  "key2": "TynSicG3mpAQRv4sxYFwtTz26mK2D6z97BSBKRTKXZDnaLxLyC54DrGWrsqFN4wkf7PtrJ5Zo8wYwFR6Gi4z3fh",
  "key3": "2rdNEtSUtLkYs1eYAp3NFWzWPxDGqB45a22SQtF5XToxVX19M19hYDk1HJdEoj2HhazkJdUoNL5dsGsJgLaWVRQv",
  "key4": "3PbBterSyLLEhiZfwJRDLqpRHPMieVVDBaNASdSxnhoFLjAQP3TJ2Q1ZWsuYr33ruffzRigNKYrcBwmGSeCiN8rz",
  "key5": "5HX8fsvdyXP3MKTTpZQ1ZipqZnGmYBWfHo2bVnyqx8Q882Aona6wcW2M7A4cDEGdbCZ8yQTSrWiLZQ2SkKfTLBkW",
  "key6": "5xuAoQHGuwMvbecREMeTsEt6vmtRYX2qLL8CGEySg95ki7Xyh9KfayeSL5oF24R4NCf33wVpcbKGYW9nGVWD5PHm",
  "key7": "2zkYnS4d9Ra7jkLyAh3EKNeSwsAXx2UnjaL61mFkyDkUg8z1BYReofzq2J5rrd1UWJkwCNRkZjj8Tw5nbmZeyk4e",
  "key8": "5V12jNV261k1aC3pSSRYLCBg9aQyxo6URPyvZ8QL9dpD8W1pgB9BLLeDBLQzVLDw2Wicn6rkxj7SQDj3r53hAziD",
  "key9": "2U6kNCaoRo7kmt2bd83Sitiff9ZhgrBo5tqL5jqYye7hhfdSKroeVwhGQWCesv576FZXTwFS3c8BNWvSwQtcJ6Wh",
  "key10": "4vKFCR8Y1nVLDECH7BaMAJN4HWkmrvoxGdqCYtztRqPzSMq8FiexHErTGqz7m3UJp1dymo3gGJGrpWEZiwXKs8d5",
  "key11": "22vgrVpd26YUoWJgWCggQp1KiKuHCJnDzxs4RAKzbv8y5WvqWXQrg7Vi9uXjPQguxU2Btrp9NGNjNGftsR716BoZ",
  "key12": "2eBv19UZVfTFQp8Vg559g4jj338Z4o73j22ofeLsd6ZJQuckxgg4CLZWLCAFF2ywSNrzE9vEBmUHTurmx8XQLmWy",
  "key13": "3aJxGeEctwLLgvPRcyc3Q6bn2W3v2r7q5YbTFAXP5HDYvvYGq8uCPdb41YE5hptpF2wEanN13KatuQbn1sZUSKHL",
  "key14": "4s6szKyCpmsckwjhTR55eWRNQJfZJDz6FCAAjWPMzGdw74FxoQ4RCsaRPRMszSuHpJvQjL5k3TF9hGdiuVM9kpJ2",
  "key15": "5DGzcR8p1U7edYXRPH1hapqvc3QxeDFmKrnnYDzCEX7E4tCbDmw65sgjGfK2keRWxhxmLBqzPuRzestGL6qGXShq",
  "key16": "rH9H3AQLvawiQbbwWy9u3b8j6zGD6XBEau5zvT2Vowm3qVx4x1tMK58BJuMJTsP2aYtQCxTrSmL6kBmUm5X3aLc",
  "key17": "3qmyEVjJPXQpWRD747DrvoKbUQ1Jm2sxS6fnWFAATg2Tv2DkwwgFuJLcXDXv9ngdQNKbCyDbfmd5zkipFpcy37K2",
  "key18": "aqbTur41fTFP1qQ2vTa92TkfehBd5KhYg2a5UU3LqzZdDBRxoq4hjbrSwSQLY4E4aE4YXNCznRRXRgjVuZ44TdX",
  "key19": "2TdYUw9Gz7DLqeiWZoRQ2odjajgy7RJKCDtpfT8jQPn8UP2JxqokK34LeBev8A4VhXf6wHERg5g4jcnstwJkfXSE",
  "key20": "4oaF48EZXthzGQ7z9yZ5iCWfuzQbXgxvHPMEbEXGJfLAZncGDNmg8JbCtfqyzLuqFQHujtLrNfnnFN633yyZKGqs",
  "key21": "3Xc5tGW9py4ijUm1TPkHdbPFWoJTx9d58ddkgi5kKBQpvNZndxkAifxdPBXGV929N23WhrS995QYyw17PcGcUAnP",
  "key22": "5VbQuWaDmaJE8X5GHZFPNQ4BSjnhQPLQwfL2Ero8VRxMxZa9RQKbjm51guVzQzbcghcNemLTxfhPu5qoFkYYxZ5n",
  "key23": "nTq6M5sL25ovEjqe8ERUBVhAQJXyAJicinseQDHdjKS3ZM8oVMnJRErgjjKmeSDnHyC4NEahfaqnVWaruwjPtZ9",
  "key24": "5iuhTKdvRNSEsLejHD1s1MaBUpYLfpUh6SjGVDgf41EkBsUNZGqYGonuVJ5vqgHGhgVDrUB4CvN4t2teTucvubTU",
  "key25": "452KuqbMF8hu3iVm21XVpwEoxeGv1oj3bk3my38qWuUy25sPm4XoFxDaJpvLdtCNYQLBzU5252JnTSEMrEZmzQAL",
  "key26": "3S3VtbVueAduwSFwzCA4nnewXjevvoZ2q3WRHqEADoGsSKqwdAdSAeKjRQWQmvSjGVhzGkKEtQjWUzm8X9nGQexS",
  "key27": "21WtCpo9BeYb92WjxWA7jKEJvxAwAd13JHhiYRvDtyWVT3hMYaEngJuVb6kpVvjJzsoHReMC73aLCJpZN2V75uUA",
  "key28": "xU8PRmFSXLnAjoftbs3xcMfPz2dvCV3tkadu1RZhuk3ptGihz2M12yU6zaBKUz8L1n8NXcDT37B1ztGw2XVmbxk"
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
