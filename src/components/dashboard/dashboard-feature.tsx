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
    "4L4ntzaCtoyyQmSfizJZ3PMMMsJtet2rQDKHWhJ8TjpFrCAavifSBoj81fKY6neVwEXNJfSaUuzeUmawthxo8fpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WgzWdp3zpBYQBrF4LeDvtBuN5osBqBeoKTEw6ve2FXBSZ5D9cadtzCXEq6UGKyeKTTYKG6SkrxWdweTwypWWE4y",
  "key1": "31D6zGawdi1Wx3pWoHxUvqe9QP6rmqjTcR4opDZYuo5J2EjX7hWUZJEc7AwuhzqigXRXtuop4qKmeFVgvBgJG5TX",
  "key2": "7PZ6E6AxPy13UYsmX4wvaXfvh9Zc4zFJHgtyAWPVYcevz8Qvp4WR8iJgGAmok3Wh7fMG7MbSNYim8tQfEYae7QE",
  "key3": "5ENUK1dLrpwFgo7pK9r1LsE1wXQsvgwCkC4JNuXioc2MTstb6VfbuWXUsVq42PcAtwkuyvkX35QkbzBdLf33NjWt",
  "key4": "3Dz13FEtBE5bp8X6qKaBQXGwzKdJCkYu7czFsPXhe7UZKF3gqKyLoUBxcEWRgqb447EhLSCcLzSUaudxoNxPAdpk",
  "key5": "3XD8oGMqJ4ZvsDQm3CfVXcu5tc8Wv66j9DVS4F62DBHQm5Cs6BqNhksZ7i1aGzCk7kuu2Wt5RhjjWJPfvNkb9Jg9",
  "key6": "4fgg7dyyXTNvZ2qpaefq5G6ozvm7NUHanzrkC5GDMAUargMmnC9fWyez7pmMJxmjKKfDeYTrAELRqLx6gajtHBtD",
  "key7": "2vqK8Ki4EiQ2VjQnvurssngZoFH6uGk5GsM5b8Jc1c342jqC2EUdoGAT56qNx6nrKujZCYu2pR4zjgSkxYN4GUbV",
  "key8": "5Bpazest6kmt3D1RTga9WCMTVSeSu4mT5t4ay6S6uxqkm6mzUDPkjqH3UUJnfcDhKt4XbJLyWEdcqCAdjmBYh9ZZ",
  "key9": "4AiEc9vGJdSiCbPricTA3G4zULaqKNcxT1JyT2BBGRY3CA2gYPQBfwHYnzDtqpx47i3ntWChQy1z85SppYaGUCtP",
  "key10": "3hVqYL7u9dwX6gXAqHb4piRCSkNUxhmmHLZLFSVDRHmBtoycqNWvdzE7o7EMQAmt4mUngEzMZa46S6az6wRr9rvP",
  "key11": "53TQyxTizjYhDnT5nPrcyXvDqBtpBdsqRpwVr2B2XZfXZCohcLX6zfeKkLXHa7HVoEKH7hJZRzEfVW62cWHY1too",
  "key12": "4T7azLB7ia3NfJmp8aiQg9KtU22gEybkNtof3Jxr8aM7saqjiSmBoFb1ZfSzDQCbaz4wyZGz4Eky99vBwPmPa2nh",
  "key13": "3CxsAFPwAFL8SXyKwAD2mTaj9pR1RK23Wkr3U8SpAfvrf4XVJdu2ovovq4g3nSUwQd5WZ9biZeokaMwYw3iRcah6",
  "key14": "3fFjtywFYiKSDwhGgk4WoHkpdfCHuPQTESqNQTBxekk4bz5cRFXkFyKo5P8HCFBMqeD4GmFzxaKB81CSLc83vUNw",
  "key15": "4KBfE4xJQs3aiHV78r1v4rHuvNj9wuTyrqrXjkA2byMWFKfHpPpc7daSUK2c6oHmwrnpi8rJVbhLqKWEKTTbJXY3",
  "key16": "5NkdFRstgbLQQervkB199RxvkT7DkaLLUDKyPoCiMDvFKa5QT8EdCWntg6zNzrWphvdjWnJ2zJNTQgsY81maT4hi",
  "key17": "mPzq3QU6VgMCphPH9dPDoT8wAo8s7P5kYWG7dzLcmvt4ceUCi2CsucYY7yyeecB4vB13LAhK7CMSEj82ZdBx5eS",
  "key18": "3i16hdG9ZpvNhBDMMR3ot4d2BDAXFfDjrVrLcvMivfA5cQex89VAQW1syt44TakLsygFrUKi5b8tYcQ2bzoktn5g",
  "key19": "2qxcRHPY7ijsYi7UHXikBqoFQToAAQVmZsLWqzDEeFDhX2GqhWYnY81GVUMVj6uXnnPLJiKCV6FT2oYT9vVqzskL",
  "key20": "3ud4brTa3EhCmeMeKEg2mxmsVxjpftR81ELxmNau3H2HQ693uWAhy8tzDSVm2uarcyCxJCbm7RzYBfik7KdMN4bR",
  "key21": "2QcuJL3ysrgNEH2ggbrK38aTRj6LESxTnHsAUCp16DGVsBFjxAhiAEj7Le6gZmWRectHGmm1zFF4DWA7ZgCvyNVQ",
  "key22": "2jhyRrJn982jYrDxr6sTrQWB9Xz9oBctdXKqDh8osbASirarp3ZrLBuUMLy6Dn6zV6daTP1NNBEBy4D4xJ6TAnKa",
  "key23": "3FJENUteHPqBUzdGSTRxA66pEBufVh2Y39HeAaNnKGx7VbVpevdHCVgU89SCNK3aAGw7myjHGPKqAMh4WdE94pZ4",
  "key24": "34oXJRrsE11weMww8ekNiv9D7NcERtzHYuxWF1WbsKHri3g1KL6kjRugprqotv692Rsebnd9VKj4htsU7tbA8Amd",
  "key25": "qud3kzU1RTffTyGUFUWZ3JCLPvqht9pCHutzEEcvdKH3YeYvPVDfGJaEudJYUFnQYoY3rFbny7BTbZ88AFKWJfG",
  "key26": "5gvKZuK5Khr4tFmooRboiS1mN9DCXogpgJfzVhpBv5PfTjtD6nszXg4ce3gq7UTKGVb8a4MUncxUAn2AtbkWCyEf",
  "key27": "4Xj1JD5bo6a1LhzmGNSUSAyKc69NTVJF1zzfbod6MCg97KJkX1eyfUmb4N1zAxQXxqchzKQtK6PfLMPAtmV9v3pD",
  "key28": "knEa9eqnMRivekFChP1Pm8kiSJspHy1XGhGBeSwLmijEZjsVszaPqftyxswrjA2RmY9XmYa5crdghkmwP7TBD46",
  "key29": "2cPASvMU7ez8ZcjC9Q5QXevhWuJgbYHe11ooVLNKHctcRmoughZLVQws3fLJDBhJrzAWSRB6RQi1pyPDhoRqq8C1",
  "key30": "ANNNcRq4Pt1CqKjFBB98QckCKdthDqTMnPM44esGhyvvebVdNtJVcoqnAMu8FKi2Bv3PCfggkfBsUVDr2beGzcx",
  "key31": "5YzpyXhtzT1afCPd6CQjUp6hKXnZJfvUoKuqcvKVfw7q3D7bhok6pRedUFvHtJKNGj3d6S6MtrzkdG3aKdSFz42u",
  "key32": "32ktauAAxR73cFXmpe2PSr35Ji8TyTsifvQGsxD2QT2nE9Dv7j7M9aFgKp2mXqpnzbyit2uqYWsfVsmx2yRd8DSG",
  "key33": "5SQSye2QYuiV6KEhV5ouE6Wf8SJfAfZJ26xouJQLAcnmm768f2fduzuxWatn6515teo4Vsz4iRRAocdHhLeqi4fy",
  "key34": "qGkH1jQyu7LKw7AM3Sn16A2kMeWs4Us5NAc3t5Bjx5UKa43NkA288oTm8YhVkqjsYKRjYQiVGPsSgqHxV58RJoG",
  "key35": "2VxyS6zsBdMH3kDvsh2xaxsDg6jgvtj8DTj2joCQVvocFNz9osPvxdsyedJSh3tnSjaT3sdBQRNNamcAqm6NF8pT",
  "key36": "2Jjd39BPiZoGrpuPfAvQhsMMZPPPRwcMABuu2gcPNWiuacffUN4qfYVYXhsNPGBTKKmTkUUnaZ4brgf2BY5aS8Tk",
  "key37": "2iGkQfMrEZWWLHiCvDKw7jyXxbqWz5wLoKt76TSd1Cv4CFr88HzTr5LLuz96JX9jHuB2UWRbDQGSxjcESN3ife4j",
  "key38": "4tf2xJ7ewaJkcnccXYHKrw2tnuUYCicSxN3CPyuuL5y6xMNCootJx8pboWfrHvGY3K2S4RhM63a82wSyNN6YyqDp",
  "key39": "2fHmZhP4Lpccx3V4ZX41c2LSuY1dzNG5qXZT1NwoR1YZVmzNNh1pkP5tMfJbkFcwJyyAMKWnywnZMcFRg5D43sK3"
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
