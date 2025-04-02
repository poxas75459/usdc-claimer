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
    "2MQFMEuGvjRbLRRezRkRNkQTLXy4c6yUL3y8pqXHr2E9siWeVwRikNcmScAKzh4TNu8ADrsxSUEG7ZWykPgrsMtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vFf2KmY9Wys7ErS3MDUPfZqaJEVvp5auujnZJsE62jSy73EEVt69jGoEsoZTcGgzWXyvjvewrV1cHmeTr51o4uq",
  "key1": "2RJR7o2XbpMaPAfojJMAr7jYYsCsQ7nYzVgyjAzLxZaEZyLQZJ6GudfB1ZiHLDUyXwqAsp7AgD4GfdMoP93sbCfd",
  "key2": "5J9caYQyWEdBH4Ptj2KKkWGbcdgg7jnjfZPkMR9RCPLbDKqpbpqrionuj6T5zJwtechca7pQLAqGga6s37vUUVFs",
  "key3": "3UYRB6rBG3icYcLRSeRfvKWjA58ecixVZqBHGZcvTgBMw9h6bfhRi3SiX2tMC6WKAM7pAXSqKghXmuUbwkKuQEH2",
  "key4": "37Dhg2PYx4FwwjySSgWq412UynTbXdMKkgqXcppB2K1h9MGvJPWD6uBC2RJHgzQDmpdwLGNqg7cdaC7D4JwV4hAh",
  "key5": "P1WJZ365xWFdZFWvErBNWSVnY9p8SWgfA6jYDRrKiT9NJHxqXH9G99DAddGwE98CcfaU3oHDKocFzHDDjdEqQNW",
  "key6": "TUEu7LUx2MUdXbataRin9NtuWZHnNPZ5qH5P7qDvRgMT8iPe9fj9KsmoRKgTikMXc6kAn6wgTPaYiwHsHvHWq2v",
  "key7": "fvYUcvxRdx4QXUjD1oCq7HDbrFsehsq5Ykzz2rnn5tNsZqvb6aJZhQV3CjHtxoW42SWxpXZLHRSTeDqNGJyEFfu",
  "key8": "2qnaMdDZCgGqi8oyCFpbpNdBkapukQa4KBnm5dSrxEmnc9ipC7UumjpyxJmQdakWPAUNWeMcHgnLiy9TfDHbVg2t",
  "key9": "5nEmSv1DaDvykUkLbGaaJ33dxAygTgANTzZKihp1D2uV5nDvQ5NgJTgdm6ekQq6YRZA9bdyppDUygF8G1Fm6PL9e",
  "key10": "4pXsyMoEXJQ14bcfGM6poaYxvsgUX57vds8SPpRizusktvUUvYnTUdrXzneWSn1x9vWnMtzd6n1FgZnD5mjvRqzk",
  "key11": "2PKqGPm5Ufp3jHtNNVaiNkwniD4r5FkVe43hvaysRfq52kfj1tRA8Bcd83kbcmdQVJgEpSbj51ph8CKSiFQnMpvd",
  "key12": "3tQ63e7w5Z99BsVqPZJUN263S3ErRMmpkgvy5tH8vhzM4vSSazN6NSTRfNKjLSg75AurF8hbVGoyEpDA2HdnkTdt",
  "key13": "1moJVRBCSsC9EbphoP4VbH5BmWMC74obsBj5fjGeZEAueas7fLhBQ4Lt7tBVB4QhGZ9YogqWmSyZeMeQiumEM2S",
  "key14": "2D9LBEM14AoGgcs5Sup27QnB3CdVmubjQhx4V9o7dRsHHnVWYqbZu7bGfXg5YJvyrMZMeRpNJov5hf3UFTkZJ7oy",
  "key15": "4JrPWxPeWVCotWQoqE46t6vTADSG4hyaX9bp1JGAxQsEwwv8ES4K669irtEuXXfbdszuXrxeCyts7Ro6PkFN4zRT",
  "key16": "5zw595oBJoLyaqm9esX5QwvCxFDcno4feYMWiBFcrx1sE7BgJtjdE6RFTzD3wspjGvvaNRMC5Dni7GHAem5WegNW",
  "key17": "2UnqzkNKFprS4xwATwA6R9sLJV2JMh5bcwq1R4kxjF4GZG4i8v9jm5wLJSfDWQucHf18GFGUqtfeMKdDYCW6fbMU",
  "key18": "5xNhC8rAVeSivdfUMtJ78stNVRz1GNg5s1BfCDmTCJQKqbgsSLMqmTTTZ6Sjt7hUkHVcu3DMBLEmHYGebtDzQCu4",
  "key19": "5sRJn2JccmGycvWJspQQEc4WfdiLjXpQRa1Gfqnp3ocLdG94BEFKq7WjXU5TYS5AbjzCTub7sJabQJzM5zCsX23Y",
  "key20": "41msakdVdpFtGbqApDxgxubJGej3cidJrbTf3wQoTNLFb5bvF3aMwidu9LHt89Xp3t1nu56kN5i5QiGu7HHQ7btc",
  "key21": "2Pfwm5H6rifHJChdYeh2tVw5mL1NPTbBRCk44pbJ1L7zWz1DtEs2x2kX2y4Wd8KDjwD93pLs81q2Bhi6wMo3pw22",
  "key22": "54x1gt5K9NCRDz56Lv4PdG4o5gwZLEWL2PyWncMpaV95BnNwRnoQt9qN2jEodqtH3VsuP9yHn3d9WTWsV6nQD2qh",
  "key23": "27t5TzeP8gd67wf6qezW2x2YWf2Aq19mfnWsosCH5hT1Vccv2McsqdoMsusHTGYm1H6rjcReYwsYwv4Ex9CYotVv",
  "key24": "2YtGdrZaou1fvhTJTdDUG6U1M9mxSPX3tDUf6fqU1kR7kTYBL8ero4p9kheunZ7E8Zn5MPYgP2pjQ3H2XZzxENS1",
  "key25": "3SdQ1uHf7qUYp1f4C4yx2kwmeoRM9YVKaRuJa6UGkLrrjAbHg8Wx757AFmZcYEKuS9NB4tpcagqaVPrYscNNpqj8",
  "key26": "3rDcRMep3PJH1xjiUagtVL3Dd836kTfNSo8VeXz6htdVPV3NuAihEyJguoAjKNJxuVAKtMfBnn2Ez4Q2Ch5EGEER",
  "key27": "oGtRmgxRUriVDn2EnYy8RxpWwNhAyUAWLGPQEeD273nFARepXMdUFGsgEBSCRcNo7GmR2AXSMEEvPxFJdfkqP98",
  "key28": "3LcS6WqkNQLBGDpANGgL8x4Hev59JjxenPqsnaCU6Dm18ZLE3t3QvGeBCNde63bxp39Md755Mf19vJNueuWj9V2D",
  "key29": "2MXWVBPydbcmrUzYTXArX9TzdY9YPMxUNiWgWRMYXEzU4nXtEY6kb6SbdfyT1Y25YZjSgrqHT4TkXucqVtUca1ir",
  "key30": "uJMzkUqVZgVUXMx9faR1EBxaUtB6dBDZxg5UyW6B2hjJNTkuyH1aH8HsY72w64Cv2xdejVu8SEPA2KSspZdVoMZ",
  "key31": "FtySu9WeZN4kKYp2M2t54jew41jfb94ae83EDg89yHLFW9oNw6GGpwzckzbLBCG797cgdx7VnHrxpWGezRBvppo",
  "key32": "3VNom2n472WKMeoBenYN2Fe7sJPtKgizLQ4NJ3UP3oHFxah5XnHL2iSPbMkjWyBjZqp9JP62ehQJmgWjWU3hLcHB",
  "key33": "5nsFHhA1sYXwHmvCpUSdq9SxzuHAhrMSS7zcZggX13mXeBPo5nRU8kFhuDRiUxaPCyx9bWojhaG185S7eL3QpiuE",
  "key34": "4GBpM3qTRcExrMFaFaHTAnNzaEQDYqKGzDyEvoWk7jjCg7NHFChtBG3WgMbaeTdqozbDk7skRVw4tuxpaLb7CPeP",
  "key35": "2yvHAF4AV4K448F2GGyqMA21g7au4kKRLD9u4kfPCnGHp1oYKu51bcRgrNvivQkgL9u8166vWadTiRswm26F1n4w",
  "key36": "DAJ9NWSm37zdTUyCifG8dbXAzF1vHhSiefkhn5CbrunoUcK1QteAyyJKrZVQYd6Jd5tLZeDGrEG6EbJ4on4XDpE",
  "key37": "2uetEMTQGByk8Prp6jxMGFn4CbQgnkeq7zEoaDJDpXzVNsrRuxqcfgiZ3x2n6Bz1Qx72V9uL7th7fxumDftt3atj",
  "key38": "SbXFnFZzDRyvGCmBii458naEL54z3cFQoM2TT9CTMNawF7UGN5zwbe5ZkoKCMBaJJrwowYiXGUZeV8UE9C1bLYq",
  "key39": "34DeQxDuo8X1uKFmk9kB2bKaPFR8NMMrwA43G33ME7c6Rny6vkSQSg72k86Qq8c3mnTg1fUrrDkuewMEhyYBguGj",
  "key40": "4Kgvfp17ev2xKLtUsrEMub7bLFafEwEJ5QJPxmQSLMhwcbuv2z3amPYtYen991pqsXgEMsmtvwiXcTWfEW1S82e4",
  "key41": "5L4tGN45yRBVavE6WBCfzzstAzSh2X8RskmwXD29zUZYQdqBNy96fF9dvtP6Y74RZqm4dmBrjGtNMpDjxzJCZyvH"
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
