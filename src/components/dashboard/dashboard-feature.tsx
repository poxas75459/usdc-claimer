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
    "5jzzn4pPain6Ytq94VsUjttj8tZowmReKnscC5cERY62sUpCEDCWr9jUQtNQnenXPLozPizSJkaUshmrqhoW2L5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2greHFbNyZgBgTPoiwB42Y3aP4cVVaDtgpkgV3k5w1e74ErBn7fGZK9F7wHaND5p28Ajhsvf6SDt8xhro79m2ff",
  "key1": "5t1qA3CrA58QoD3JG1AbcXhV7o8g2sz9feTB9GtdELAk4NZfvVgxQC7naHxan5YkzyBqsCkrk8zGL7NmKQFNjsVR",
  "key2": "4cveY2QuDPPmJxDgQWAvWrYR2bukFoTRhePejfudfoFMTN4EtHeFrAdtKutKtpaCNPoRiNksoVYhvA96zVqZBwqC",
  "key3": "3RtjRREtMG4F1aLgwyXUTuG81hsTqdwm1VRzXWjdYRjpxGt17FAWLnXpApHZwsWAKnzo1sXocnxNEHAA8mwV2Cko",
  "key4": "2opYrCoKz91JwfYhRgG5bSo9eSBkxyGM6PsHymwKE4KoWqLqpafMvSXE2bqCAMzEVGeSRp5KVk3mv1Chw56rnX97",
  "key5": "4vsBAAPEzGQSNzgEbVCeQw8VT7U7nwak8VqUPFnhStjZmW7hpbpXcb78ZXfHPy3XS6V2FoTmzFPWYwFdxcqwSoNW",
  "key6": "3h8HXYTT1H8aCwaAo6DXJfZRgXgVqUfdQe3FezSEV9Zr7jxFrixRrDbxPz1SjkYyLEnH2naFYvvFnHq8gsLqPvwX",
  "key7": "5Hs6UC4XBpFVnrKi3i4iZrPC4QHamarc3riMSJAVJMHqKoA78zTmMeA88biL21hs1KtzhSJsYDsJ8czjDH89USKr",
  "key8": "nZyHnzNY5UYTukBWx2RZYKH9AzQHcKDgBxUYnRBxDuB2Dv87vzWqamVPgcJF2CdTjsoumq6KnSiWS1xvwpwNMRm",
  "key9": "3MkcYr74mKTLAZygVE7RfpjXsDcqsjQvReHHLsp1vcgEae5eXo4ay2pzZB9DeboBzY4DRSKT7pHLWERThfQtbdd4",
  "key10": "55FtzP9ugp6ddrkHLjQw4SLrs2jeYkdAymxkcewHZFeG2rB2yjJfRHXaXP9ZdnDHa4w86Cf7KJsuYyDoiEPHXM1Q",
  "key11": "4goRCrnoJCzxvrSDMnvUXVgNPDanEH8G971ZaqMWTKQbhJAWhrZmYpRSipLWP5mmk4zUkn6bSB7B6zWT1Z62aPm5",
  "key12": "3cHKqSRwdkvUErjvVoYRESPXKPupnprPZyh6NrR6YbBeetL6d7tx7mcFCcqfS5Je4iSCKST9GRCqHgQgGHoSjrig",
  "key13": "3neBbhD6c2pwxCosMmUXsmgVnfLSchJrKvoARUZJcRxLY7aViA3aWPwcmeKiN9f4MxDgaQhgZCHnREMcmGr1VCrH",
  "key14": "44tX9tbkDfhJ1qL1ZNeVXHQBeZEDCj12nmCq6Yqm97LHwd6jJKS4tHU61KTN7McRxvfUqNGbJADeVgcGhtNL3Qtd",
  "key15": "4KyfGvYqBTu4cBynH6pPZCh1XyP6McuqBNSod1V7xcwwQrqMN6YqcCGKGNze9meJWNXFDx5As9j1aTxwYZpG9P1o",
  "key16": "5XNV3jcosQ4JmwC7m5SWW6g4mfX2yggDgHrczi1aNikRrgaHRGnF4KpoRCejSxoYpRvyEerNQzvmcdBhqh3x6RgK",
  "key17": "3AT4U53NNX4ErgKEKdKd2ByDjBi5YuudXfrqvbvtpYiLGgXWdiLCajRPV9dermh1N2ZbEAM92d8FKPoZRNdeUhfp",
  "key18": "5uWVVaggVq2usF7DfJCukEks8BFFYY4GCWZ6ohxSvpUz8YkGcv1eWCoTJKyq2Qm36vfxgJhwtdf3Ndx3sYinj4QU",
  "key19": "2xGGoby9A9SjdQ4YViAmSSxPmKhy9sdkC9VpgzJeDLskQiaUDYtkggmqzmZbPgJNVZzHnCZGxRMRRkVbe2N2fDgT",
  "key20": "2BUjFBw8UF6Syd66AbuyHWYemEweoTKQin857GbPXVejaQAJBNz6SJBmE9HJjGfQwAwDovdcwPiRTUwbEVBuZsyo",
  "key21": "51PPLMyMJrCDRcA8BngUG138Z7c5MHK8cYBpo7KfrBftf8CPLf2xgtKvgVugLDJirmN7uJScTzmqdKSsm6NZF2MN",
  "key22": "5qYtx62DvzXUheqK9nM2W14DXsamn2GQ2hkbYGVk5862Qmg5SZQs3yQHLj9f1fztFMUroWZR7Ss8HcNqyWDy1Cs6",
  "key23": "5oX83ZN4Ga3Y1Scnebdu3vj45Avxj4od5yXwqMeoPEBGD431vVFQ3Taww3saoYnA3Ab5rEnB4UkwQB3cKLp9myDd",
  "key24": "5VGkSx2SW1eAAeMF7UJDhSegGcpz5MEsMxSHM1fstZ26dCdcRDve33SqE23KbmNmvUAh3yYqhA2bCnuPnYHYH53S",
  "key25": "37vi6GwYdzdcBzyGhhLiLLqhiBYcHFfWV4c8M5kajHWSDhY4KC1ikbRkwcnToKTWzXuweia3xiHu12u51iXoozQR",
  "key26": "QKVqGStnbDhyYkY6cs3CVfeEbqZDdzEbNKmHqvRcARKv1ZzKK1bGtqHCSmNteUgTxiuWnZUWSDz4yomqtGEJjgw",
  "key27": "4Z2xMd1yEzQhHpKipKmS6wiARjxjKHfhCafo6MaaevQNwfg3AUjEuYHXccc7DYe6d4jbm9g8nB512yZVgitUi3eX",
  "key28": "5h2365M5kBTPWUg3vbk4wBV5PEczjgc36hwa3yXor1oTwTfPSw6Zq7KyazCXFEMNvSfwGqqzSiheezTmka6Qvqcq",
  "key29": "kJxC8KxB6dEeEgSkTwsnYJcywmU5sxH1HGZU4buPq2FCVneN3iq7b3xnPURazZ4jz5gN7bgPFpuSaGv46Uetisc",
  "key30": "53WX5iWYsPiEtSjY8Yy6Bwb9dpLe4WgSFdKhaE5dbwNgpkhmoBbVATfSDUvvnisCKvKpThM4VjjHVXPDBM9a33Jy"
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
