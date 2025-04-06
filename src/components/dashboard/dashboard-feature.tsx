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
    "2biUAvR7rLrGQ8VV2PPtngykbzzGiXrPJKApMFq7qqRTMUC5e2RbbRFUf5e6eYMuzyZwiNkCYA9D8eWpbUw1LXjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W1m18nfqCVe61f1Fjhq8PVsSSgfBjx6hezoML4D4NXpRvuiuBoYzfQfPy1sJfmzSS48n5x74DY4ERW857ukg8qv",
  "key1": "GUudownSDoHVqV7TSKM7FdQiraf783DTaaCd3ttgXw1n9sdvedUY58ndyUo6Pcr5RyLt1bdyAMKJNcBnjvfSEpc",
  "key2": "Jhq5u6NkH5Y9B5Lay8JMnoUTwWyK8Es5dMojttckSzsuWH5DQ6sv95UfgJ8W6nXPkiGLpZMd92PzjEJcJ75Y65G",
  "key3": "ZoQNuFTYKruTx1QJoXmSB3ch4shhhbQFyuLMHcjcLWrKczVurWp5JZikaTrSTKLGe5a2x6fpdQPp17hogCk5YV7",
  "key4": "4PyTqk3P95XXqevew7ZF3FgpioapLUCRNT8iAUaD1xYAJfF5nhKXydST1n1a1VtGDUTXKmECysodGg6Tb8NhMxpm",
  "key5": "4CtzaeP83qenMHFq9phWtJEwDMrHQSx5yEG9WrvZfP3at2pKzL2pRWSFxuieJCjv7TDtA9U9Z2F8GN6KAzxbnnQ3",
  "key6": "3yWv7qZHXcS8veqzLmyrAiMWGcgABhNQGMg2q7p7fY5irYUrSmXoUwACpnyy44kFqf6GPa2D5b2fRjHW4bfuFnJk",
  "key7": "4h1xt4Suw2aKVZhGBn7BK6jZ3ZUkE43WA5cGBFxFhoAQQRPxfUTQA7sbSKSAhwW8azwRjgxQXNq5stB9MhJLBK5c",
  "key8": "4Rje8VbAsgeheYaoaFc4Qj8wW982BhnTRkz2mDtTxL1Ux2N2AzwBYVAQdNJD4vQw41JwLL5fk96N7SoPCRp7rQvR",
  "key9": "5DP36qovcMoBGDk7yaFAk4i9FcxahjbFPs3QXPLz2DwFt11GPRatZUTEmeXic3rKkQhwdrYuvFZ65BCzYUoMBdQa",
  "key10": "3jJMkiMTfLg93U3sznFytawgMeaqGGcyEx3s75kzsSncF1HhzDXJKCFXhraTSvDwXFap3pxoJafvMbGTzDa9a9Y2",
  "key11": "oZEyCDf1EuD6QpLyzodKVaUeT3NM3XjJtbeouR9NP7vzfD3ZpcithG3c41uKu4ciPc1UjPhcrfRC74CSbBxJF6J",
  "key12": "3Yh2EQcbPRakKaXBAoLEwXwsfbkyW45FS5QWvLKMmU6dQZvJsq5k1pAX2T6yxP7ih3Ua7LxQJrF7AC8fkTSMK32e",
  "key13": "3q1uavApmeQ7V9bWrfRbvwZawj7xtdNpMuWgSZTqNYPyCqF1L1ZSphdpkidextdwt5NuEaaK3zFbK98sh1pjaCZm",
  "key14": "58WdhMsuNg7NoyLNmujJq63aNmw4KjWDP455nQME7TY1hCT8GR6EB4ugvUbt4C6eV5kKrkF6TeN31JP1o66wD7CK",
  "key15": "5HbVsLz19D6FGavBMMD27z8tBebXuaXooCXDof4oJFJunBKVDYC9hKWDjyKbWX77owkZp8fBd6HU8CSfwDAtzTmv",
  "key16": "YxxyJKAKtCGW7xBHv2uuN14JkpA8QHWFLP6x3oNbT4fVtgLHChm2gF9qHyhqyDgjQcJN4dCsGXhKB938S1gqFSr",
  "key17": "66QRxwwTwJyrRFVgQTR4EBswPknzRY8gBmL87AT7MYDoTzs5x6cyBFgwBnuhcUMi1jPxtyiB7kfavQTM6eiaxrsT",
  "key18": "3ATs5zDSnEVRT1shsrhm1QKcy5L5KEZmBXCB4o1Wj6WiNTygcZdrAzUCkMBU6nifbEHDvo3hYatSJ4X7V4wmmBGh",
  "key19": "3NXsKL2LUbv9v4qziGJdm8FRXKi1U7WWmpV1oiuc9pdAofwnKTN2LZk6TPhJHiwNvPsCzeoTymFgA98YYgECmFL5",
  "key20": "5nURakvkjrrQBYKUjAnteZJTazgEY3hkQLQ3RUoPNtkGJS2md3WUvgJ8GR996CYmCEJWBPt4h7mKat3vt9xj3WDd",
  "key21": "3o2WaFxtyq4JHSKoxr5DCrkHeCTY1nULvnSyxdYKaFv8CvTjPTNDxPJPNDXcNV37smq6z84ahbx1MV5yGSYMsqpu",
  "key22": "3iNQ1gaDEdYY9JyTsJY2zqBt8JXQqVgyPusgkt9ASro7jBrqS5pzm4r8NNxJjWxVx6kpHE4zyEFCmJ5iyKUKzqjP",
  "key23": "4azhREnVHsbvTMGW8vBPRFLiYV7xkpbZw54stLiBjxUdbSnmhYam2g1addM45G8F2mpJTkgAtfgujMYxxZoc1pgT",
  "key24": "3LodmPMgk3Bhi313WobfpGwuZXUr8sf8UV2djzBaX7aPv7pRukBvPhgCrAKLQ5JnibNC454n6R2MzV5FRcvmzPBG",
  "key25": "FadhLbrSvqGz3cTZprfXG46qQmhqAgdeQkKxmdzKrrHxtXRVxcUDR2CJJSMgzFatpi2SczeYC9SaC5PqrrhMJXz",
  "key26": "5Cm9JvjgUp6eNFAPczz8JtxpEGHgu6Y8SR5MDCk8x2Pmu2Ayhx2QNopaTBe9J4FmDyQP2Jze4NeguVKQcknMfuYY",
  "key27": "44fTpp4ayLkNemzaUCSERctJqqPgrLCgfAC5yCqUGMuhGNLnBhy1S36Zp2DUSpwFbUUwCgaFTGaYYCyV5gsTDqrp",
  "key28": "QwnJKNyzxJ33T3j7oCvCWGkZZPzCsLpXx4tBPB6pdF48bSsMVWPF3fqkK28sSKijLxbzDcR6bnwj95zv9x1cfMQ",
  "key29": "5TdwuXJu6bd6CjbzjiogZrJ6xR1F97SMBJM5begin1fSFnZvjMMYyYDaPBuzz4E3mker1rVpoF6FBLh46qBh7vfV",
  "key30": "3FyJzQTdrR9qBgvZXhs78y41mzkTSso6avU2H4XW8VvTsErqrEoeVmmZXSG8LUQorvFQz6D6zk545Y39D4btKAhY",
  "key31": "BJ8Rmo93fq6sTqj9XhyyqFBug5BQcWCpnKdYenjm5frJZ6BJbDFyAe2seWmmDSGf4A44KeibRBCCFfdZ1tMHCPn",
  "key32": "2FKps4G2VhmrhcUJWVNDDJJktpCDectL6hG4QHEUfUm2XEkvgg1ePCGTuBSz55XiorVsnnVH4dgsASk6ayhnKCeb"
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
