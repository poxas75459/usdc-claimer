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
    "29LL1hYZmynHtQGkAP6bMcHQFDFt5FM72KPAhPeY5RAxV1bhNoKLLKipeBDDPYB2ByTqGnCrFyxAdbBCyNfF2bJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JiPrtAU7V8DcbdNuARNvH22ukJZUf4tyB3sq3mRz3c1XddrUfFVzUM3WAgCTBcj2qcKQEXWfixp3kA6YevtEwmg",
  "key1": "uuVnyZHUCD5PRWErwGkUfQ5iYKJou78WvWEyPTDFYLvuhFgZisRpztp2jwmPeq6sLiEYw2g9wTWumSgySLMQGUD",
  "key2": "UbGNgbSekB9SRvYdVbWLxojqVmzdDY4P8LpbSKK6YnAgLXosz2WmZdZLEBeJGvychSBA7T4pS57jp8Xt7mGu4y1",
  "key3": "32pm4zFMQzvgFJGcZTgL5WbDbHLcFE5dUqsGTn7sDujmeMxbqoskdEX75HD7Wwk1LXcC3zwVzyorCR9aeiL9icGe",
  "key4": "2n3jfpvn1Sfg6GbkWJzVV4TptJ4fR9P22x5yxFLXaJoGeYpmGcsHfHaqedXi36oFoe2AHVgPJKR5vYDUVKvrNFQn",
  "key5": "4myyDbVjZz5fZLm3bebFLs1Tc8GXuz1Ko5g9jj5HPewTzptzCm2YEKrKZks3PGrYHq1gHPw5ViAT9PAcyQ3chEas",
  "key6": "5exjxQSzpAAQyeqbRkfSC7HhzcS2DPUa7BgtytZw4YDxpmCnge49SC4sjEUPyg2tSBxrm9ncWpSoTCYJoioaeFqD",
  "key7": "4B3U58vPCqVzVcH5WvyJ1ziwQMHXvCqqECfvRAXwFLsRVG7GKx3f62qhyKAuy1o75Lp4p84eMAmbEuZsvdNxzDaq",
  "key8": "u8vkDgKmaW22mSjFTPtGwGSwF8LCoGRLSzSdaVHQihef5QCAdnfpbFyzzykgxmr3qv5nabBXfVUUq6xt1jsYAix",
  "key9": "2yTr9uMED9izJYZR9Z3z3154Q42UTV9zuHQqQBooEWjqGMSjGwJWrNhQ5jnujMSUQL4weNFz24LVnKtuxZJLqsPE",
  "key10": "4E4nTQ7vnV9JwQvdU5kqkpCyPqvJfa1jkpbvWTJSV8qTqnJZDcSmhnRrfPowMuvi8MKQmyD1X2feifMmJ5rFsMEe",
  "key11": "3A2DDmjci7tp2PNYXZXqgK6g5ut9X7xfEsv14VeiH7jxxSsa9hnUJoejCa6Nr9J8xrTe2T2xDnXRsrDs2WFYM8DA",
  "key12": "3FevRhsNvWDHyNJq5yTtuTVTo9ouvoixjbofuSPperF4v4Kd1w9vFivXhtVxz6JEPTQnRzUWosBxrxdGh7Dqx3Ni",
  "key13": "zHytGQrTLwBqMGpHaxmDfALKMRHzATMEqysmS6R5XAoQGm1P4fVp28cPExwgJMrsN7J6GkcFJsTZDVnK51u1FXb",
  "key14": "4MQXL9taR84Mmhu52pcZaGwXe2r8dp3Uny7VzdC5sSxg2oRN6LgcobbnSfybbHsidASG9wFmWnQYPx2c1zfLR4Kh",
  "key15": "FXxUcA84WPiGg7c4ikvZNJ2aBkkqjLWJktJhsUnuvxmk3JvELKkQiLXrDxWu9MunRa58C7DXKLtj7qK9REJm275",
  "key16": "2Ji6MDok8nDTjKn2UWXR3HN7yewef2774ieS8wLnHUu7FSWLnKvmFBSSNs5HNTiwju8ZMuzhh61qM55WWVy5Jzry",
  "key17": "5WFbTSTd15cmVJ6rzL4RtVUU7JCoV5UzasgC6Z4fBYnrbXDvALEpA97E29Dpq5HEvH9nEVKwjcGpAjz8o39RBe1f",
  "key18": "5TaZ9qerfDXd5C7RukcgdLW4LgjbLWFnoKGjgR2uZZKgqpvEb4RWFs6gGi7t3k8sUzVGAcrJrPzmQPnzEE7Awgtw",
  "key19": "3xwXtjdAx1MGbhBnafUa7haFNf81mZRA4sLnJNafq8mxsmmV1XsxpfCzYPEc5DYDRAHZw66U4vGfjXLFHzDiUxb3",
  "key20": "3RYqpdKMvbUU5mBqbiG69Zi71inF8VX6bowTPoSHnmpyA2uSYAVeU1mjY9a1tupsdDgEiaS3SpzEZxFeEbPGmXh1",
  "key21": "5gZ5aZX6oxBCA2kdzDwxmkbVV7XgWWCpJqRwtFzpd5NNNrJ4db3oPunTvCNPDkNv6oKJAstq9P1dHEvJ2TvBRY9F",
  "key22": "2ZwYg3rsfMrzhZPfznWdSf12U38GPzRyfETaC2c8swFLFqAbUDwyKZGYBR2qx76KtJAdnBaVscRhgRim2C6tNapr",
  "key23": "3wtf73MzTuRXh64dRWUT93ewkHAcCKKRz9Amdp9Tfym3v7LhVXLsKf4759MtBQcak6fxbdf3rdk9v9finAPr33xu",
  "key24": "5XrunJweCoRDBSYpLbNjQ1citA494s1RxrFc63QXi3t7QzK2YL391Jw5dbfoPm1QH8xaCWxMPp9yirSw574q4P8C",
  "key25": "vgkEF8WSkDP8HKrPdfnS1zr2jD35xs6KrrEw9TNyeZvna2RRmrBgh8WNDoAW9e4pTkwNi6JPUcxBqdth1hULjGK",
  "key26": "3dmNENXMvG8VkrSKBDyis9bsKynoetuQPr8oYux4Bi2ZgRmJo6mK5ckQmtx8buJQpxHqzHUPEasRUqnTCRNHba5n",
  "key27": "3h4k9iPbQrKCS4fVrnoqLF38tsxR5KK7vnP6EWfLP2MLCV12bWN53kjg46bfiNxijKvDSeAjPycDDPCtyoTyAMg2",
  "key28": "4GbRxLeu3Xj5k1tAqKFsG8zBCbC7T3oX9vCVkqsfV9owGKFnUaw9nfTWiv5MUG217UaQCsUuSLiiAgdszyr9t8Nm",
  "key29": "28ue6qXZNzxdf3h5hvbpY5pwB2dnK9T4uBLPkY8wjnqMSsqq3fixtZYCMowxQm7DGwt86UFASGJ1EQsbM8hLwoWm",
  "key30": "2bB8qW78YWk88fL5chcW3MnF9ZGiSipLMyw6vyqmcoPp82FwppS538KBPANwx46BHpJ8ZjTuDVMpoZnywHH3wXv2",
  "key31": "2jZ5g9t2akTTP2HjG8xufMDw2F1ceQmMULcs9yamaXDwSYAbAXx7bXhDdVrE9pqitbQZdQiWidhYQYsuDCm7a56p",
  "key32": "2Xy6tP1BHBxtGfFJM8VYehxZ9cMYtsNu37qFUcK9EeHMfv7xCjCeP32BbA7FzgJqp6S7ufC6rTPtC8eBmrJCAdZN",
  "key33": "4HHdkWYD99dPnSXpEAmMkJEvj5tFJ6ypf77thWHbuqpDt5vguQG8UibZtAEVJ9GuM7vXHneAJGf5C1bTRrG6dbze",
  "key34": "4Dbw287EwtKSTHyysFhifsbeR9bA1eLkYMz1A4Xy3YfTFNRwhiv7zMZSd422fe7ZNWp8jwGZbHPcvJc7umFX2oQu",
  "key35": "4qe7TKTN6GCop1ceWJBrXgGQjaqYKjbvsXX1Ao5A5u5EHbDPANVXjzeMLmt1HMMD84wVZBH5M5fXQubciq5hUz8m"
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
