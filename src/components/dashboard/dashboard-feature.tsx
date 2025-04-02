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
    "2pkKNZhpxV25vjsRSxwRLaW1EzbqqhhAwm1MXRFPJ6C59F1s8yFGSN5jjjQPKv1UoFyWnApNonPbTiuBLwwPKzse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SP4BbKFpavsV6AzLipJ4iDFbZPN1pm5pBQyRX6HQqcNSpz3fdVSi5uhwHMqpRxxY67Po98EHqkWc1nNHz3t2iLN",
  "key1": "FiPFirHa7WpdZ6gcBi8H6r2ceBdrP5ZYRbfxpbjbiMrwJt8XXfv3uVrjSWeoruWkV9vaq8kCvTtexJ5qQ6GaE51",
  "key2": "5YTbU1RqVvLVsoSSQDALFPZetNpR1KiSybgk3PSipcKNSMfB8hciTWK677sJPWXqj19AUGV8PVPgo4WQVbRMRC3U",
  "key3": "5jQqW8baqmNQC935D3rsmPT37SyAd46TFEBsM3U5zBMWiFiqU5R9DcXZ9nyHw187y49MZUsnL5Xtp6iEdBC8iWHL",
  "key4": "2ogp86d8F7EcLN1KVEyygrZ5pZo3ttqw48NYiu5hqNiMcK55quiyEpwSUhb88rZM47wCwEdeGdaLQMo3fh8Ukydb",
  "key5": "3kzt4j3d7MmUw1ZoJdAgQPLiNvDHHCquw8LzCXbsc7xLsShRQU7K1JfCftodq7fXZbrohQzdiVjgrB6ZyS3j22bY",
  "key6": "2CdPbGQeZ9fqKpkyB4ca2FgB8q38e2To38HaYqCDahhyJTvXHbPeVvtWPDB3N3Z22hWiHttEHdihN6uUoQeZRbtK",
  "key7": "2WzLordKcmDNYM58YRF4tKsuHeCs2WePAc73XQ3mBXV2huM1SrNFmiM4XmCG4NV9zUBpb8gxMSGY7SNijSBa1sAj",
  "key8": "2y9f3GZ7FgptzK8GNxLaqsfEn3tEtN79dP26GSLkmYWuucfgMnTsA9GyNdxqtW4VPdNPYZBfoZEDipbCj1vPG4oa",
  "key9": "4fWt3gP76cc6yUS8HeQr6Puu3XyzCfUhZjwZNzvcwybTruHJFisBcqkPjW523oR3YL2i2VC7CjK2uedeqkBoy12f",
  "key10": "2ifgBkg1xEYFRUWYXUh1MuVaWweBJ5u9WQhZoGJwHHrcfTPcmAbspP6TQAEnqBMca6jVDwPvwHz83eViN7hjdezs",
  "key11": "5nkvvHH6uwPRSYa8iLQBHPLJtTMjSte9wmbPqKgNwbaQJAEexYKvSGjtN3CNZappcGHzUybKebGJGKqZiNcKfTgp",
  "key12": "4nejcULWYeovRXzGWWsCFaLkSjBSFkujoBxGZ2GFhkZcB3pCgb2Hu6ARUi7bJ28gaTf5PJJTLEM38KEq3vALjw2H",
  "key13": "5tkvvCzXZYN2W8ZefCaxzPn82tWr34jzqiR3RULn9nUkKNNiDNvF5nbGCQgbE4gF5TBeygggyzjBNLvkaM55wYkz",
  "key14": "5ivk6ZJPcFjJoKSehCcHayzmmsWurAuMxZ3rFidpPkXyKAsDtpoQXjGfaHPKZW59dGTtDXqn7q1shQanebgR5sPB",
  "key15": "2oTtj5yiNPdK1VSXZwrUgZAQytH4jWr75CQXPNrSamc3ZAQS5WjUW5GpFseyq7una89jvJozeVJT6RoifFex5mZq",
  "key16": "4NAJZiAEGWqjS28C9ZHJMsjknx6259BMGREjKUdiYSnYyex2YPQxbLDgFURV6dCHKSFah5Mqii65rSfThJofNonC",
  "key17": "2JkganKZYw9wJEKtcPSTfKAkMyyfBbHdcGgioPMhgUvau6WLBhEZYzZz1y9WwZBnkshe7c9VUq4iaP6zhyvrYukh",
  "key18": "2vBEsxWjMiTPK6BndiPqe1wvj3ruVbeC9ttHALUJSirxGf2VWEYHBVsEKv8xKV7LR9HcpaKz8VHNVsqk9Vensu1t",
  "key19": "5opbXQ4XibgVEwfhQx4TwoDVxMZfo9XqqZ5i5iVjNY4XSXg2JCrrHpJrBDxpgSwFjmBkHXQpVgiufX7GycG142qm",
  "key20": "4heYPcdjUVWGaDKshkyB4kCe1SGnvMtofsY3ebiSKwgoXAjMcip6NsBpatRmjQL73VSXJ4NrgttfyzFHPKSUoPYr",
  "key21": "2qMTGGhSDTpzo3NdSn5c2nmCAEQ2mLFa7mX9sYc5bxM4UXAbGK2rtN4HPEUyUYPhZR9UvKfR1Q5ebT6xf4bPBBEA",
  "key22": "aFEvJdSf8PzAWFggokcND9MFNSpQHThnUdKYax3wDjkseYZzC6r8ZNmBQGfYmn1WFKcRY3xdmsUuSQeYL6bvhr7",
  "key23": "38B8t6Bz38wevdbzskE1s9sC7hCxJTWw4wNgK3zhoU7FCsroXb2MRJ3TfenQfjTQvCnpr9KyL7jSw4FCR5998Y4",
  "key24": "5oFtJfkCrh5kN4EjQHjnzeusu4xtrbzMxADipxBJjQ9ftir4HUFeZXozQVdBMZ9g5VugTwmZ49BjF83nx6nkemLu",
  "key25": "h55xgTXJqD6VHxDEJ1nxaeRF9mCPFR7RCm9b9uH5Biz8aW9GhzPvCGqxgjSevZ5JnHTgafKNeDx979iRBTZzvrX",
  "key26": "5kHQWfekdbxj16v611aTT8YM8zbRBxnpC43Dx8P5eP4ejE17BfK6Ve1pKvDriEThno5bzwiUXkitrkzoFYsJYAGY",
  "key27": "44AwZHEm8B7TesYZ1VUQGVh5ebyyKQhwziRQzbmY9QLwTagtFrSx2Gag1TEFxhsvSeZGk1WWFQysQeJsk2GX7L2r",
  "key28": "4qkcXa3xxRTMR8FriMftVq6iVessXYMiY8SGDxJsJ4DmXL3ZvVtHM8SmbvAdnqxiB61NNfyRdmYzHfVeuWz6kYHF",
  "key29": "5WdYzNdCifzU3MERcH3eFos5Tx5kbz9iM6TF9UeLJ63BgrXPfrjZjAnqtrYL3hTQXURwrxBopa7bp6gyhX9Hn6b1",
  "key30": "2zdaZwFVqCQQARQMae4DNWYpZsW6v4TCkFKXJEEq739QY97gKwRswqbfPGr1mvpis7KQvGcwBbLGJwREv14hjYe1",
  "key31": "2vJFTLFLZQtGXCaU5SzDDHiFJjXfwrJVkXPWdnVdskLU17c5EWDnUuz4Ft5VqGMhnkB9fTxWg8bepKi2tqYgd5qB",
  "key32": "qimeJHjyx5BbF7V1z6SLUsgaQXtizAQ68Ghga3cBAkMEdkLzk9w6Gy5eehjrwBP9GmnG5dGmJaUZr5ZDWASMDge",
  "key33": "2Xd6vbqUyzYNy3gFaW7sdVTyziW68etfLMXbyZkp31SAPsZDRqbnfkgMTvcjJzfD5zZ568fBx8jtAi5277an2WYj",
  "key34": "3VQNKvgkipPazXJdfWShYsnGh7u4Cp3qphaB52iEPUYgCUKKPmiP1YeiFSkwa55evSaGxTWqnF7cpCKM3i5Dz3VZ",
  "key35": "bRY8jJZXGgMZ6pQ89Z3fGTWytFesKSsH2Xovz9XBMwZZCSxbEg9T6B1gN35wo3j9pxfm11tRrLTr8y4mx8TwXb7",
  "key36": "23d3tCAZtdNBz5agn81FyqSg2A1ZsU1cEcp9W7WHyQZz5KB8P5dRXsohK8fC1Vr7SPJoLQ8NsX9Zkt8FtUG99Sbt",
  "key37": "6iKd2XLPrp9oXgEJ7hw5CDgWVyeGTyvujk9kAgjqGfCBw6GnNt5XgoGdoC9Tpq81mJWDKfK56fzUseMUjC6NGst",
  "key38": "5U5YHBxdvR7hq9C9fTk1t8JXPP4Tb8wxXx1FQQ9wT9dYWEVKFodwtK8a3BGK9USr2JAf3nsS1L6znEPux8ehmut9",
  "key39": "Fkk52cWgSYDQZpfsyTUNaD6jMnzHu5JGxznwHFpkzy7GPmfQSBdbCJkSErzg4BrK4zSHWfgi6Yj3x3iqByRr1sJ",
  "key40": "2VGK5PH8YMfwWZnikYStzEUJxhFmWHV1Gvw893EHSbL7iivGZ1kSKaW8UMNSdeoXRo4ET5XX823bA489Zn5aGKGu",
  "key41": "5cBQQ6mJCeFSMfeffSzyZNtFwQcmSGjj8RU9337XxV5XTPRMJ8ZGYRTTsdPYaC2Qk4Fr4QDHx1Vw87PFkD8hxvSL"
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
