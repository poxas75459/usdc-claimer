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
    "5bWqrfETMEZ6qPbtKRgCL6vrmshxx4a7dmgdzZiEos4fzt6zDdcmGZvTdawBJgUz9Y3oM2o5EZJNUQaUhJrwLt5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uuA4zWhHyR47AcJznc1hVxDToZVqzLoP2hBJPB8iidHNKzVfdL2qxYY8CvxpfEXHN2eHyW6ErM3xxf2V1Zj5aoz",
  "key1": "xboq1tYxycFt2bxCuqXn56gH1EMrGY143Y6tpXX5iSKwMu33JjSqw1CKmZJ6aSnNBkoMTUqpmbz95LwFuzTo857",
  "key2": "3YunWxfqmynAEyxepqqQUU8w9tCiu5VZHG6JsrfJD9ff94hKQnBuEd1aSoTWS8EZhuM255ZKR7kRum3EZLJ9xKB5",
  "key3": "4bLda8jEXSXsGe4sRNJAaCsgAVbhT6FBAy1YRnrK5y1e6sdPY6NnmoA9B8BAaLNZtdBkb6pBSaE2DkRRwzuv9Ewp",
  "key4": "5ghhWYQc5fNevPootv6i9fEZrQmp75YoSdeXpQn2Fk5dcwLYFqWqLXroy79HFt3J59pr3FtGxZLw7zeC1yvZ9fZy",
  "key5": "yEFjMphYEo9pJME2jEXTJmr1iciNTo3FEWte4Ko7SFWtvrWWDHwBFJf9Jrye6d5HTSbPhbFDFa9bjh5mq875fcq",
  "key6": "3PRbWW4cZiBVzq6Y8eMVwQ8eX1TwCiAKiKGn1AkrTmFfHzVy4ANzZX3KEUqaThT9wrN6WQXXbgySQ1yezqsEK4AW",
  "key7": "EhTmpHXsaFkcQA9DxXsmdaeRH2nUGJMW6zuxFSxtnZX72gfNfruhgW8mtpEmDGEF6vcr5EDE6XvdsDQcHbksnVo",
  "key8": "3fP8sLN63X5Ccae5ppBLmeSSGDm3BTC7z3mLFDditjzodXvBUY4JMnVNEvc5mpR6vtJFu51jYL3fZbpN9xr2saFt",
  "key9": "2KURP9LqaSNGyCA7PyhZmnkPsfvUdWk7XCbTRHnL15jzRGv1cJEXvQP2kosSgQZK3gwpqomihmzA81DobiNAM3p4",
  "key10": "2WhAtHjdfAvSi9AX2FYTWXcU19XCL2qTMDHVnPjPadb2H2Yv5D5u1AT6nj866GHvt5hPonzNpqRTCvJpQPG8siNN",
  "key11": "615Mpva2ARrMVf4oP9ASRoRnsnfNyudiMrZqWFLYYhbfytGVCMzohSaK1RGzKuqjtE1W3AH86zuZ2AfPD6VsFPUW",
  "key12": "3dXHZkzseXRsK5eiPpwbsEuXGy43WhRrhdRgzvASLCgCyb2e8REUttqjnRZE4FeLVPJYnfwYxYQG89wpFw3rM4CC",
  "key13": "2kKzeCtJv6vZAZbQDQNyTEGQgszfydX1hdpxZBvVndCLM61aGgL7PG82SqQcEbokr1HTcBVvDAvzabqRuCwgRp1B",
  "key14": "4rhAfhoPC7DzMRvFovPUpNs3fALHaK6wovQku5gfaMjSFvY8S7DxxuEY43PHAaNDqTcYdprQE6bVz5fTdZS6eFnS",
  "key15": "2SFCDf4WdSMSbxVrPtAtzHPw3CNQfqikd5ZuHWCqPrM3AXEy3xRMo2ca3WLU61MHttV3upZdyYzqtNH7Wxwzh4rZ",
  "key16": "Rjm2fMbU5efP7Ztf43SmY7Mr6dF7thu2Rsei3WuFBFFdkjqNs4NNnzr3jLHMFUrjTt9ncFiF1AuqVXaxsJoR1sE",
  "key17": "5dU3QL9y7zVAmbYXmQshzkndTE6WjupXMDc4CoYhqVDZDTeynbWY8DxywRxwA3r2MPgVDGNrBe6qD19ZWUp1QmMq",
  "key18": "4DgfvfQB1ovw8douLz5ci2zVejjNrundv2fCLTDSrNheV2uJvmf2ECf16XSYifJ4RY8kVTsFMRoabKASFPHhamWn",
  "key19": "3mnRwEDWDH4uvA9cNKaBNdGZiixtFSdBw5MhuTCEvs2pC1eeUgBx4HCcapF4kNhjo6VF4LfA6vKCH5J8JLFDP2WX",
  "key20": "4zTWPaL7Zr7Y9cddGyEcFV46gFq91WrBjKrYcMSZXvQCQ7X1BjtRuxge765K1qcaq7imxyzzkP8AVEzexAAu3NbF",
  "key21": "4GM7R2NzBGTzfHFop4vZq28d1FHc5Xg63M6U6U1vXqwzMd5p1P8q2CuDvhpPSxbghuFqPr8x6NYExHhpS3a5mSv7",
  "key22": "295M5Hd1DwLWreBruxvJCeqNi2BWtBqLNEcn9ViCvCUmF99S9BNYSK8YwrP6j7Q5C7ttFQgq148uHE79apPG8Pp3",
  "key23": "zarAX1E6aT3viUinMWhEgmwdetUL2EJhRTpNt1vvSpEiChYSQcsc9iHcB9XPux7vSSu2FrifFcxA5qNm4L7i1KA",
  "key24": "AHErwfwSBZdZDWfhRpEtNYsHPRdhDMNf9vj8QMnX7p63gKS9tE9bZop2z2oW7rEDyqNDkFqAtrooRQGSEKLaiYi",
  "key25": "2t9EPc4VjwwihRoSguQxbtnhgxAHAo32pKFL5HDRSgX2DrJ7gg4Tozk8wNFD41s9EfAPHeYjHnuhmMsCt7oBkvTy",
  "key26": "WhC4Z81nrwqwotUMp9JsBWL1f2ctJ7rBrHEAQhZRz6bpqip3kLe6Qz5NPGAULK6YebsXK9FBtoCAggMc8m1pkJ2",
  "key27": "4Ue9j5wp8f8f6zfhmiYi1z8K5DGHWnxUkY34g9Kr445Cys5Pcv2Bw8uixmxCdvksVi8RtzdXgyVaMQYJfzBrxmRF",
  "key28": "2oWHdzSQBbkW7v83C38YXf5eMQN6WVjVn99QENPSSYvdEdTerQTEbkB1HYZSgTDPgejhKXzQ1LbiGmC1TBNC6f6z",
  "key29": "5QBdeQHTAdWN81VXeKCzFU3EZYWqorSnyBKTR4KotVnmqtT53GYLEPs7oxKE7BjgKZT17JYRhonUK8yXwAY6KVY8",
  "key30": "3AFMUkbKG4GgZ1tgV2hcakXdV842MF9taStqedzr5bAx7ikhSruWQnSSMRZugPs4cFx6SES3tQUg4UbvQy7w41j3",
  "key31": "6bigZ23CZvG8cquZUxuqGiiNmFo4pHFaMMsYAKvZZ9wkfCCTcCn21KqYikzRFNDYQUDFYVoeDeESvyQP2PkKVrY",
  "key32": "5G6woFXBxuSKYDQvjbpq99odvrFYdqXVGRpBhTkFirYxwp9EwGMmH4di725xV9uT6jmsDZ1yQGKgPyabrgiXLBdi",
  "key33": "42dzX5ds1BaXyM2tgdBCW1RzRWJ7CQX8dpna3ebdyUHPCQkS5rMaMvrxKGW1VrMsXCScc2RVfPw9qsug8u16frvP",
  "key34": "5jjrL2JvvAPqqJc9XirtNB7ZxQETZoh5Wkv2G2nHCLJkrT7A3oP55RD3ugk2ed4yVecACKtWKmEdywF2oQTatzop",
  "key35": "498y1EVxpyetfYjMCLWvK6QBWCe6fwD7h4tkWPzAbWQqku5tNKFJTYYypNhdJpUfc4NzRiXtrhKSDUYV286Qu6Zt",
  "key36": "5qhNjVCeoGmhtbWcozBv7aLD7fWm1hpwJEjsMgbQdjW7Wwpod2xu88EBxpqfEbWN6hLV7hFaynahJEtwQJHdjDWG",
  "key37": "2qyvUkxvL3oKpViwahjqkSKGpQ2u1w7PDShEbMusdcoQKgUktTaTb4p3VsoZSifAQUwGz2o4fsox2AUB4qaA2taX",
  "key38": "3ovJubBjtnp1bVZQAApfRvFvJEaqVEcBwBwFdp4GxmeiNSePtk8HeBzDwHyBiKVpoK8CEDQGtabiRM9yPXmPjqWS"
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
