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
    "5ybPrueT6Z9fWMZmoVdc96fiKPoNkaKjLeqzef71p8WHn4rLtgyi3dy6EDHRAz9cjSwgVS8Mh3H4yCYuUscHU57D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZNpdEeEuuZeJQsFHAY8Gi7GAeT3mZXgJb4FALxSm4DPoTSusoqXDMPSRBxqxeGv8sVFdQfhaQeCVtcrVStdx29N",
  "key1": "4WTBkGYVqg3MKaDS34k97mGTR5ZJyMxoBFpY6g3z2Fh5uzixhxbkdLvjekMtTDjfSfPfPw5uak5PsvYc7ABbNVJs",
  "key2": "UH4y2ZT699WBxAJGeXXkKeif5KK1cyWCdeJhTievkjMHWWeXhS3CZgLvSmcwwXYDDyhsF5sxMZND3wjjvJTTknz",
  "key3": "5p4fHGxy1iep5x5natXq1KEuh5HAPcVjrvPoM7pChF4c9N2diyen3v9emkp23KtHENtMQ6ctunULoXmWfWW9n9u8",
  "key4": "3vE9ni7PbfUzXcKgGx5rUffVW8o7zArhJScAubyhTzYkLbsCFNLzv8Kbq8N8t8YXkUQ8VMmGsDQdgah37KM5Q1dP",
  "key5": "4RnJWPtCnuSdMNJGzzBubmm2oxem3pHSm7uC81v5XUpgxjx3FTpnmLLfEDGS9Md8ifoREMMP7WpVWHP7bucLJR9d",
  "key6": "24j1HDdD9JpvEBP6jeq4BeAk4AEbXUnYSrTq4w1fCDyGBFzA3y7MoBaqAoEbSGe19QobWUgM2wNZcyrQ9jzidcgQ",
  "key7": "5GTZzSNm5vzdNvX7wfXAZyD1DziqG7QK7xxCUL92ty1rABxwp7CtvFwr9pGxfdV9uaFDfbfw7spEuKnx1tFvZ7Ho",
  "key8": "f6fQYrSWRXX9JJMCxDoLZMcV7SreEQPHcycrXYsGEXEQEwYi1zeD8egdnry9teStFD7J366A7cVcqL25zpf6U9v",
  "key9": "4RKn4tN3fmw9Nja9hyDHjkh4Sy1yPJGqDy4KWXF12zenF7zMcnHHBC8ABLqejwUHRsomJJybu1scNKRv7E32FQwz",
  "key10": "32hM2bF1yvzniiqT9zfpFnJUxA5ojXpE8NCQycLSdUhvaoWffrM6XfmJTK5HMvoAfyXbp4hyhK75eKHReYqrakfF",
  "key11": "2HYnBtNz9c8koSKD984pggQQvyYEk2EusiWoHfbzj7zhuMgbGWbQufVGihDfauh66gvRmRvW9xvcgV82qRa8sdcy",
  "key12": "4KodBVbUBDVCHLn8XaFqQ1MQ3v4TRtA9kchhoDe4TJJGFhKPpnWuKE9jnw5wNYscorykXCW6MTyX5ZpJXJwMTG3r",
  "key13": "4WP2GGoES3VNNoAaXtUTcbi3GCf9yLbEJknoXUQZyxBqdAtVoo4cCBdeYp393Giij33r1FQ2xZfcrVu2Uqyb1obm",
  "key14": "4feHD6GJx5NmeFFipsdnRz8NRWnFvyTrnyqKqM6ieK3CSD7fXrvgV2zLmcUFS2XgPnyUZN8n7UuGVUeYSHPiCFXe",
  "key15": "3dxuucU4zmj6nH7tkEwsyUnLSBRo43TM1T8HKYkTuiQ54x39NBxUWmFdS3hjwH54R6tjgWaJJf61voySqX3A29cU",
  "key16": "cdsxFcFM3m3yqDDR5wu3Gctiy4e8zPhuZmdwNBscE3AZgfYqnE2XjNFbsZaD7FnzSP9jhfEsUZZncRbkTZjVs5C",
  "key17": "5QsBHEMjq9RbYJ7x9mPrCsnjD4W34VHnzRg1SKkBNZ5MD8Nicw8Qos6dhmqNwsjnVxefyGVswUJyJXpfXu5BRyrw",
  "key18": "yz7C1bovk5PdSn87tFk7MhmAm537XgXpQgdDZ9RtG5sffczmA1PRYDGWJfarQoJv5xC1vcPoKpHCCe4b9Bez1FD",
  "key19": "5c2uqxeS3r3mzQJKk7i3M298yCgsEHPhy688GyisE3gjTFruRxm3Ns6xqLS7UnVcLF1s9xR4fMGxJM5NCP2Ank33",
  "key20": "3o2ziv4yyY2KGSnAY1vSm7g8NEwNVPpsA1suW9nioYKqEmqxvSy1BPbU8U6NPu2KAr3DhWyaSYd3M7buMUsJarge",
  "key21": "8toNp7vTeuvydYqk32RUci9Zmv5iHNNSkPbwN3Ccy53UuKF4Y6sUdh9WkuPveuLARTX8VrpKe6cH37TFK6PiC6u",
  "key22": "44qL8bJMihx8PakW2hMMFQ7ugeQvBCmGeroTYzPet7rBnYfrgW8ySZMVqLmo4TTfDGM5dKCK6jpjX1JkMzV5V8aq",
  "key23": "2NKhZ8TQmpjcLsFK2oDXMraKhTTt14Nh8sM5BFk55WNNgiN3dNEnwhuPPFUkEUXubu8wBpydpX9t3EERH5MxaNYf",
  "key24": "2FSigry3MjqQn69F2mxppfezyQRbCxWcYksYEdMViv2zspSffTAyX75G6xDnMdUsM3mCJHaGduva1C2G8V2Edj62",
  "key25": "Ei7C18YBzKEaPJLcRc3i1Pse8u9r1AaseaJExAjVbeNguLjyDkEtJTUAJzzjBXUfkxfVgpc3iNZKDeyyWWRASbc",
  "key26": "2X8ZPAoDQc1bKehaSvwXih3xtWsq7AM1L26xhVpqan9vKuJBpQh6bKtAWn54Gjm8Ne5VDJs2aRWSpUyUozy47uYN"
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
