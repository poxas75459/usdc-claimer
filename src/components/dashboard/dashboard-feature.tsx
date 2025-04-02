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
    "dtYrvxZTY5vgEsp7T2tQq8LnTguhgMED4abk9f9ZL5ZQqEgGo1jQtxTcyAZWjBtmGnnWPyLi5T5dHVCXYe3Szer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bQmRVQfwGSvgTCh363ZrvxPxYV8rF4wueHidzekMcta5RMSpKe6kvhR4wEXttZwXef6rahJJhr9w21Fruog9vsJ",
  "key1": "3R3L9Vy24Q28HAAAtx7z4K31PBEL6wZthceaqh1Umsd9FZTxaxCowm5hYcToQ4Y5F2DKNgZSEEavqcGXH5kFcRjg",
  "key2": "3VWeoG2u7nibzB8VcFXDZwHqPsrPRcRdaSe1U5g1DPJceeCjuswxXFYuCzcozL9TfrbciFicBh9unzQLYVj9Xs6N",
  "key3": "3nPUwc6G7dPXbf1bZoTFFbEtYFBhwooNFeZ49cH8L357ECf9HcxtnrpmF56Ag7bVgdKBxwYMuLAKHjMsW7sFgZAM",
  "key4": "3HQfifuCNnvkw749zuYzX7R2ff9xWcxXYUCfSatbBSez5tBvtyEUp1zNw7JWqFnm1BnBSdo3EuDQKMTphH7UBJox",
  "key5": "3LCyJ34GwfyVvLoWhtQfh2j1sV1Lk9SmcPdtorhGwyTzafr6WPpgtS1Rpncj4dJcQgjHrstUG2tbMsQeshuWxbsA",
  "key6": "5331vyLjwawjEGLpj2KHU6svCaxmT6U5GDxfHCQtAd2KvVrfTxzD4vzqCfN5H9Dk9vZm1QtvfN1d2LLvQcgVFSDY",
  "key7": "56yqXt8yiG8oqw2AnyJ6YCtHYQKGznXtyYWVRP7NiebrhcFYnJNP267vSjzRjgX7HAM7LpwCw2ixs1Bz6dKHreBD",
  "key8": "33mauXi47yNnXzsf2q1TzsF5R49G9CjnkDgNPcJYp8ZXz5vAATQkgfUyNhKsAtEEmgGTT2KZdr8jUo4ExFTqBdYe",
  "key9": "UvogCYX8x7GD1f6xBfp5bUAmU5HjPXkMaJjHr93xCnDF7sCurMjjGjfGK4ME8WR8WxaAo5LMYYMEw5aS88TG2Ep",
  "key10": "253DiWZeEg7GApYW1UudewaDM6c8LkhU3CBEeZQBGyP3kYv4K2vdaMHngq2mVQzAUqtqJsqHu2gTGpSQYFcugmrg",
  "key11": "5bUkYky8wuZrwTugcVWjNgfqiz4QMvVPaCtkxtg6QWJcKRJkUA5wMHMvfB8oAuXmycKvA7PtNGJQhQAkMnBeAq76",
  "key12": "5C2rPXg9EQRr21XVy4SYXdCXnQDbK42KtKDvWNj144vaGSmEnP46jYCWE7UFmgygHgpkRgZdyLQwsRXsZon1k81s",
  "key13": "ek8urngem3VnvCqU33kBZ55pqov5kyE3C5fQZ2hhyKnHQokYcDgAZNAAWCgZDQc1ogeRPTRcDGFE8GNgCNy3BCB",
  "key14": "4mMh9MaEDEDB1o7uDfAPUcP9nzuc6xZX1NKeQjNsLWf3JnzidPnFTbKVp3EdRVVP74GnekXaQWvrmivTzpvy5Wgi",
  "key15": "51EMzHKy12JMhz2MNosotqhghPjNobLhua3txcchaGfupedd142nipyGeQszdhxrh3a1vWvZJMnL1E2U2uCQDVYj",
  "key16": "3Sa8gUfxyxru4TfdZN1kzoenPdQgix93iPYmgAkBFRVT7t1a4MwLpV3gd9o6NA8Jv3tSA29bkF6WfFDC5hM3reAz",
  "key17": "3etBTeME9NPaGRVm9hqzERn1uiMbhtg8Qv9eYdRzo8MJQTyFyJ72YdTih6Tsz8gVGYcytM9xVG1APYMwCd172ar4",
  "key18": "jC4qx7qBpsykzcprzLZF3AXMMxsMAh4GzkE7xTBvyrMsRiLP6jkdJPz79ZcKKrnsSpdL8vKY34EgeS1GtKB4PX7",
  "key19": "2Jfe3yMyNn76T99Wkq7TMzgiNqSCGLnhZqwQKZNiKZ2N3Ne4DmExnuxtRck3TRZDkQywR3tsgK55Y2uvQ2wfakRa",
  "key20": "5y1RXXWXUJ3Wcsgz6dVFdkQAVqHkmvvosUhDeEruLNuYBt1Yk6k9dTuVhHW1H1BM7rcN9sPCN22DB3mZ4NQKCrE6",
  "key21": "2z5Ed7Qq7jrpwegDvv5TTsQ419hBsQtRC3hSoF9VpZSjbvUM1HKakteT7aomNJECzdiZViDwDNU4coHX1Zp8hHsC",
  "key22": "4Wudb2x84CoLpYdh8gX6krHbpPD1gbycnzfUuTZofgWARKJMRgZorq1LY1ffWhpoaEK53TZ1SH66Jtkmf4ZbjQjZ",
  "key23": "fm5E5Mi74wWQSeQw26HtefMM17Q4b22w2BpdWY4MuDiDB952Zgfgdx3454bhhXxu1WAV3JnBMm6yxcRnBE4nTzK",
  "key24": "acyY8QjLWnqyQx8ypvmSgqtfE5TeVgyUVAQxABTHzhfbyZFW7E13UzVeZmLFXTZoG1irEJSks4htxgsbzByLmn1",
  "key25": "5aagpYnSXZr4Sm39n3Xy2XTZ7qycCSB6Ce8xYY5PDfrMasTEn8bHSR3rvhL9FCPq6PEUNZawztptbPXuyQrHYBKP",
  "key26": "4DAVDYPUYdETmAZGpTfrpuEpsQbzkvjUF9yqqTxyPAPS4cr5mPBh1Sn9pUnmR2md6J3eiVdXtJzroK4g1hxWyVSe",
  "key27": "25AMUQ8XniwqAbAxCy2cMtcYtooajgMABJJqFEq6AbQpzXvi5YGMe1xBC6RCgW5c8ZRRpQbmP3uaqcs54eYQdGgW",
  "key28": "32sMtYctDGHnXm1pFwzPjYe1uNknLenBhmaHVNTceGaVFsYdxiTeLdEah1CuYmorLin4b1LXxukMghnjSobofaVR",
  "key29": "3TgxLfbDHBEAbtY7RXV4oMiiscH1sa2ZXouCR8Uw2kGAeWp6PraVQpef7S4CCPBJLM6PsKxKudbMNXLeP2ZEQho7",
  "key30": "5Q8BxEKoczFHq4tadZwhZ7jPVMEDeV5R26Q5j8hEUtQEg7wYgKMvS7quFawQqVq2eL4aFtLm4yW1C3MKvXbiWiuu",
  "key31": "49J4gWGCV78w7e1zh2Ua4PaGFwkRnRhFw1eLMhtGAaxYFkTchtYzapBzRqcoMkeE1qfWzLJtAfmvkrQeNAKATTNN",
  "key32": "ZgTA7us8zsBCzGKGT9nzRiJFQGAguCDsWpNc7fs7t61t659QkWE8NSngKsuvN5sd6xWDZdEU1N7dHnEJhrS9CWW",
  "key33": "5oYSQzPKSHJG75hD8DjXhNiJEah6PCwV2uXMg8pdPAoJoV75y8pz5Ua4oHPVNd7L42S3SVEGSHVkQLhYTSXHgo8Y",
  "key34": "3oGWHYNkYUMg6RmidLiVd88uuxWuquXY211Q6rXj6CkcNS5tkEr91xBtjqviGtjpsEsGQE8xMMGxnn3GggkKPqMu",
  "key35": "5ERdFRS5twor5gjf85HW68558WQJNZgxGCkxaQ7qMdJE46H7zbTwXbpV9KscM7RDaozFgNLn9hwtEuFv7GEk8xwE",
  "key36": "5ybzAV5nsRnoxpTLv3vC1hk9NcMCxVsr2jR75bgAceyCynTC9rKrqRUmM7Y8vTyccCy2dSyRGqfhAgBWv21x1vVG",
  "key37": "EYdfdStqfd4PmuRKqwQviLVBtFRYxFf9aM6UnkheV579u1MMX6nwRoQ8wmpFfBYqYirGaP4NyykX8CprYkmjQ1z",
  "key38": "2nmXvVgzc5Uw5J3rSy7csJGtNfXhLe6AfbMuYmxAwmmexM1fDNRz2jMNSASGxx5SqqfHkks3xGoZnTcM6699tB1w",
  "key39": "2JyvBJzJuYNHTh59hh9ahe5dTievyfF4BXoaSc7TuCa6LLrD4cykj6sLWw5j7xrkq3sJYpKRYFCFjgYAX1ydQdBf",
  "key40": "3P4UoqhHzj4RnzYLEYofFz5jo9aFsFK5jBDtrBUXGBsSNLyTcw2HpfRTSmeN3v6gujwcsYfhDT1VkoYFSZKzX5UA",
  "key41": "2GB2Yq8ougKCW33wNAKKwyKWbuBteEpgKV9BxHD8x8XibNtRua63zvWXipKtpKNMYSZU59JXu7Gm6HaMgfPKiWLV",
  "key42": "5DDXULfdeLYUccxY1kPvrj271JXW1shwx1PytdLm2qbnig2Kbsa3d5UCKcqQciTbn41SCEyGsS6BkC59GHsdnTC5",
  "key43": "42uJZbWjNuLUYNtM26opuNPKsBPsP9SNz3SVdEUzSP6pY2ctHaTmvEMxGRor7pNQ85vfeLsAv8xf7oRWgJ8pVrc1",
  "key44": "5xstAFYbUg1LuEaGUzYNnsRKUERqTutVAFE8NnWLtsra3tPgv23wMdg4inf5E7E5QbDjFpcbDzCCfAQU9WUXCgYJ",
  "key45": "5fuKN3Nh1xaqRjdr3eeSk6ADjZ9ijJBi41CcHZndki3CeAnPFxMEoijFTmy4sgbEsi23hJ2wgUvijk6qw6BGtZV8",
  "key46": "4ovTG58c6AxkMWPqDz4Hwy4iJk3VGp1kFRhQCM1PUX1Ht4RuKYSfj7H7x5Gqeg9oDyppSVn2oNW4jfnE25cAvufh"
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
