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
    "5a77DbTdRu8amnbpttiGH4KdCVXjVUP1A53QXqernErG7UnqJWaAE7eGKdmzTogc22rNb9cfxwjQNw99UE72XzAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53WdaPd5BcDABvB1BaUgtLnCBWVRhmy3aUYqrhdgGT4RrEuYV8R6aAJ4U3NDkPVegAc2LxFPJRqdtd9tpj8SN9o4",
  "key1": "KiBeaVKm9Eoy2DHDFTzZdmAGSwzu1Sye9UvqhwBLiZoyiFqThCeVXK45fZU79LwMT697RZt34FYxZJXhuu42vEd",
  "key2": "3rW8sLVdMxasSkbs8BU5dFeCjErUD61fBc1Gfrv79tiHbaENqYbPBe6ZezrzKn8ytdiH6jMK5j5hjzU9n4EdZDvA",
  "key3": "2HGGJgMMrimdy1oK1yySwZUBZbYggtNVJjzhfeZemmQcmBajoP7Qj3oQMJziyb4uqgTZhvKHNhu2d9bhVWxnpndE",
  "key4": "3d7oEv2uGpDCnf8fmHvbVQXztJbQ9kyxC1QttFpS3dMkbLSv588ximb6dqZZ5Ju7uWEHx2pjbG3HbsW73EkEcSwo",
  "key5": "4DhrcKMhEHLdKe9daSPwTLrx94B3gPqeosrcNKrRGK2erb5QbYWboXnqNWTw6mi43kFc2AWWTnL1gXUMUXMXa94F",
  "key6": "6S37MPpDKkxsecx5tDpd56tBsTfitHwLmLH7pK5KTQ8B6WU1ejku59LXha66GttmoYbGvdQLEPzsfY8c5maEkRV",
  "key7": "2CTc8XLGLbKF9VHg9SCe49HfyFi71bB9T66xNmnD68ERetpgN8pNPREYibVVoyYDF4CVL8kE3WAmHqUG47MxMCez",
  "key8": "4brmAN8AHsvGi7wNvVL9mBWS6NchVbqQJDN6dRLaK8Bh7me8zLiXkoBf4vkY4mo3GrWp8baFLW9rJcMGxcT4swjA",
  "key9": "3awHPShCtzGGpQAHppHhngUn4a13fLM5YFGMYTFr345BC77QW4vdJTTxr17M1m47n36ktywixYmSxvMiwmCbyJbt",
  "key10": "4steP3M3RTFn9NG9M9m3pz7RMyHdwcsVjR2bAD7xyy7WKUoSfEZ1CDXM97v6Q9svSzGj2oJbDvDMTrD5AF228FF8",
  "key11": "2cVzdyCUkUHkLCeTEeDpi7ajFhrnnDbSv6LtkJbBJLY6aEphy9gS3CWqeHttkB9wd9EqfPs8nQpAuB319VjYASJc",
  "key12": "3tkLjpxvH34HrMT6kbE5LATZs9RPYDmP6ErgXUEA3s7zL5p5DDosN2zHXGVq1msRsfnHCmVe9rRmS4xV1w7qoVQj",
  "key13": "47HX11ozS4zP1VJGRr4moGVmJsKasQWGWNiyqyA5vmpMozsgNDqi6Hc9tutcuksVMgW46uSYGXyvQjPbsT1FQAFi",
  "key14": "2eSUSzrDvx3e6DjPkVs1frLLErxZnM57v7PhWARiCmoksguyx6PKew2e3i1CqN3ZEba2NcdSvnYzkY3WgKobVy56",
  "key15": "3f2GViX4t1pLfFN1nvLC4K25UMeDsekgVnAdyMvSVR9hySj9iLJ7g3YE8H6tPJMVxQqFrqgBMS1mCSWrK46rsYji",
  "key16": "vrV8ZMoTW4hqZtVKfYWWCdwZ6vByTh6ZAT685KjArQuxhMxNRQdJRV8Suo4zysNZ5iAGuUhJaheGutnxG2X1cMg",
  "key17": "5j12hQ3qSe6ssyAztyVgrxne76s4cLL1j92xJcodZvkqkLUQn4UoGR1XW2uRsRTkxZHnb8CdigCfWcjXRBQce5Qg",
  "key18": "5GZDQeaW3bWU7vJeLkYM1TMS72kHSDtLZEg9G1yzXpGSXzbpT1pkFbqhNobptcUVwTaf6HbMAEbKoWheDjQT5EKM",
  "key19": "4T29tEve4DyJPmc9bXjVVQ9oPx7oKsByAaETQeLQV8L7ApJTxgMb5sbQHdbmqyirb7WXzoZVPeS81aodqEUe1QZG",
  "key20": "5GnzCiCe6Z123JNHN9CS1gLxbehrw6tTixVmv2Q35fXixSDKzywQATy45k4bng7QnQk862DbaRv1Ro3w6D3EgB3g",
  "key21": "2ziJMgr3xLYnLhqGANmTC5YSfo7iCdbAetFLLFP5iqEeBjXemSgix7Kh3QmNtJc1HrMZqBkqTMDU8e9e85ufJAmN",
  "key22": "2KCR528uXGfkau1pkmZ93sKAPBQARZHArJxftuxyH1Nb5quXCcf657qbErTJrd8YJo6oxn4fQjQcErkUm5jzXe34",
  "key23": "59db1ERYTLgHX145tpTKb4daWrsnZbSWQYorpZ2cytMBxSKSNbAJcXYrcgS72aBS7nePubmZJMpGWWjkNGJEqhGg",
  "key24": "78tr278hBgNjJw2s5S6LhaGpewAjhgX6arQ5SVUMaoHyNgfkE6runnTmirDAttrf725q77SdfopLkzS8fsRbeu3",
  "key25": "4rvoecDzFXJ3ZeYZ6gogixtNb7XQ3Uq5mg7PRKFhCqnF2g2wbhTDkJJGEfs6qrkWTSMNQiR76xF4QTHYTqrmBNpw",
  "key26": "5f8oGyMur4r2uXGQ19bqBEYYx9Bb7zLs1t9fm62dJA29okz96jFCuukvp8jErGszYgtAoW3FfQfTb9tDmDHDcTTM",
  "key27": "5jy2fLkBHuemdXK2qqsciADm6sbcpcBVHRtPRDNnGSwj8PCacKAoh2FPdPfM8CvGCjfwDpf7kdGY3HV2vwefWEqQ",
  "key28": "nq2P949LuhYtJX7ygt6zTXoMsZEJpjoUpM6zzDhPgYGHyAaGvf98gxPFThHx7UJvxk3KDEj4bdqU6ibw4z4sZCH",
  "key29": "55ZbTH1SqyYvdrAeMNY49y2ae9baPauc3SfK939KCAo8A1Wp96T72mErF3fth1yRQUpGskE4E7MADqkxfHGSe1V4",
  "key30": "3PW9tLVky5JLqSeeG9J59AcfWFB92H83y1jjHRPYzhCakGBkZ33ppfh5whuvL5DSPPopiZFkd6LTVeTbPbqSR8tx",
  "key31": "4te2y58xmLYVhrMknQULMu4v8f9qg2Bv8jARqVwTGC92ftaCm9xUvomUpFsyQDwKS174x3ZVpPZbsWSymidCLPWf",
  "key32": "2gaCnACDmck2Cc4P9LCSEsHCmTanDbqdUpKrAxspszyVmNY7k14aRQbdaoyUKok1NtfwYtsLNExBxVNCjf1VPmfG",
  "key33": "3iucAP8nJcA2z1FnRZWP3wd4bfA5sVfB46LtxZECBVSwukkcYnxQb6ARarQ5rd1FBRjWcs3vF6T5Loc4byokSqmo",
  "key34": "5ZFoBVgXkExsEDSFt7R99oJq4Zh8pFFFW6K5aqmDoHqDgYTwGk9kKJzjqeQQeRsUJKfojaCXF7rWWjDTydSPFLPY",
  "key35": "5vGccunb4TAXAecTNoToJTXR5BpYacLiGTmZMd9FeeCwQAqUcFxDqLuRZRDFRD8aLMcwoVH7kqb3rynk7jbQhMGY"
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
