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
    "5NMB2ENS7XF3iGQAJ2r1rbnjaRWxFuybANaFr65xzcbVvTWNa2RSBgKCNh4wncw1xA64XmxeY6JqtNnvi9Ct2Arw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tFZHq8Zz1XYiqPtBCio6dKLEL8H3iTCiir2hFKKuSTbfJHyiTKJqxkSpuVvb6b8C6DqxpMPnxBceiKeaouLrVzm",
  "key1": "3rxSiJnGdamXzJBU6B4c5kuTVAFX8qxSWhWn1jPMrW7RnvpYXXhU5AewzuorH8drUopPeUboZZ1cP4R5aUt2vqNU",
  "key2": "f4WfFgak1ynaQ1FzP9mLSowthqYxMhws7A8ocA2839p3PPULXHMegkBtCfXZYmDSPvK37Evn8XVZFCERgYSc5PY",
  "key3": "43B7dY8E4jTwsnwTxjxAiXWefhkxYtg4S2dBTPK3pv7fmqpVracaJYepUb7nfQzuukoy3MezMSnz4cRhjPYoy8bA",
  "key4": "55d9WrLGYmdpntfQtrSux36HdBLvvWmXpDzJVS5hMiEu3VCSKviRABofTTNKoToJ9zicVCjedRrQciBxTamiczRh",
  "key5": "3gMDajehV4AE7a6oVR4UgPGEdaf2kA7Tf7z559hL285z7My5ACwPngE24mXncNYgwgAogWRM8f92X3pYAq9VWzve",
  "key6": "35X1QnPzcMz5xjZ5eQeYigsqiveQZ4BeMDk1nRpQrYsVNsxRqnKhXWQATdauoK1rKzF5oGLPhjZnWNJZAmD5XVQT",
  "key7": "3uUNJ3Yh5WaogrgMcGVjFkSXXziUuFifrHBMQTawh3qNGC6CoxB3qLiVvjUFb8PrStYw14q6nFLzXPYK1TMMoYg4",
  "key8": "2ALFSzXWa7wQwyA3n9ttBrCbJ7zNYapo2HsptXuVKjpYwNcac1uWdYjTiu69ooCCMzC58GzjZZhpmLErApArqi3D",
  "key9": "53d9xvP67G4wxZXZ4amP3w3GiGo35WJbFyQGqqwo4c824LcTB2jca2JShyHcYYcZ3CjgZHDobcKnKgYMnW7XfMa5",
  "key10": "tbJJBWrLEgS7QRz9HT6ic4fgSpzhFcd2YMDhS5MPRhdVtKJXAWNamoT92teYND21ThfDPeoJAdafUKFwAGJ242J",
  "key11": "4SqUYHPDe9tAUCShdqsYa5DxZuin6ztCp2xh9C43rKvygiU19s6V4c8q9gRPHTigh9N2W8wvpKJWn9FvVwQvtSFC",
  "key12": "4FxJTWznQqC8395htv7jouYtTUpUcYUrybavGec8NexjeE4eKGxR63zy7SBXXvrj54LFfU3itGPjC2rANLQc4xrP",
  "key13": "nS4EkWGRpabevkYXa39JCmtDwZKBXtPKE5vM8Xaf6WAyEoDoREHFN8rfFnFY9Ra2BLTmmedCQQ5qiqXNhwQGERa",
  "key14": "3y8zDGKYLb6LcmTx7PxqVETzikD3PWk8BLNuC6oAGhnuFVppR4PgLBR9kquhQ7eRCP6GbCShyyBi765NQH7LSUTM",
  "key15": "WPR6WpUAyKGFQVpoz69LXuMQgedWryKRWNsvwz7yQs5ZdjrgrUQfTpFM4q92xPoSk9gWEerKjaQ4td2x4bdkAmo",
  "key16": "3PntFeHSguJPKvnUz6vu98RpVmkKjWz7DW94rq737XxVDX5ZfFp7CjGteJw817LFA6jMSNvei93MKiubkLt5qhBQ",
  "key17": "3itUekGwpkwNLeyvng38V7u4LeiAvFHJVWfnBzEBoeq44CPXmye2B3bLGMY3mhX69NF4poQ5NTkcpe2zfCBR5cCj",
  "key18": "3bgiNgAQfSUEYx3oeMcj3K5MVbnMYsP4n5UW2JqwHZURPYifMr29fB1CnJg1iCJbv9iYxWPCnAjHULFQgtTjCooF",
  "key19": "5fzSPWLSLZYzK62oYPGuhjPHRFEGRuAPcTotLuN4kkE89YtfMVohqZRShKxuEUYs8fTnTSauX7kFUX4v3iAseLmJ",
  "key20": "5UWCfnaYdS5zkacAa5DyJjMH99UgYetmh2ufQJ351gf3piAe9BmDqEQvfA1pxNq5meXyjtW3HhWbyJaPR41bBvC9",
  "key21": "4FG22tenNbgt2TmdzMftqyJbdaAgEkYMb8FbCazYCDqcWoh1AR9TNpjio4ZC1hsnNUWSgCJbpsv57HtjpkFy83UE",
  "key22": "4tcHo2ggpxZsQj6aPB4exLztrW3fxCEn9iXzNfrVHCs87tcgKRsnYSoQ8biAtMrznB39YfrboDam7pt8yWFQF1HD",
  "key23": "5H5aLqFuLXe8LqbfVTZKrTqyjoPR5C4aJJiPi4CDzKnnZXH6B2d5A4cuzDxNwq8fkxGhM86isgPJBRrLwa1wwGc",
  "key24": "2QqPSyZAcHarCQBqfNnwHBwHJCAMNjGr9kSM2eSK3YJDbrQFX52veSLZWWRqmrfv9stveQSnMRSti7mPhGgXbqvy",
  "key25": "4KLWKjcPAYFyeBbGhdrgyH7Ar3Eh2ksxBVnMR6dcqmiMoVVe9yZPf3pDrFpMXuxG6DyVVkyEBC6JrLg2XnsjWQay",
  "key26": "3d5NiFUFk7rcpJDVFPyuXFv89ZN6wdg1ngmy4rbQCk8nzqw1RufC5FFnvSMHBVZtPm8Fq8JaY3yovrsC9gwJLkHd",
  "key27": "4uNA22kUtvKpoBXzd4tXfc7yscQWPYK2Eu18EwmBzZRqYPPVjk1xSMGiBP2ABVYTifQf8PHtSBHPRRQT5wppZmUZ",
  "key28": "5SxhG4ND6ifdjjzcUQLTt4ktNki63TjoDzQAPem1U3KtjYTwGPSWsJYEkmwKifq4RfnsGrtyWGaDAx94RH2unLAT",
  "key29": "67PXisqX8evbwTSFLa1no2WLfC4rXJP7K2Gz3bfPXCwBRhKBPhiyjWcHCqJUiQEwVZxD6QySmXNZwq64KCSGxNzW"
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
