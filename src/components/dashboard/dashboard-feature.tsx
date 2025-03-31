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
    "25yQzo1ZzYjEAayWDMTz5fH53zN4yuVgTx7XPaY8FLrPfSjtWxRB2cyMj2CGstoJLkDwoCrKiJ15AZE9NCihzFvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sM2t34BqdHBQ8oLqVmANRGVMnbnHX3fmCsVA9jiFuG5ymLnqEgP379uASnRSRVzqdt863WWWYabDMAVPgKi2p2d",
  "key1": "3pjtozF3Ne14rhsffUtLYohjMEgvKqrHumDR3mo5CyEa3oo8Mx4VwZQF57ftZ8qRJfBmS1pEfmPYcU4QTTzhr4wj",
  "key2": "4wQzKiAJQ3rAWYo83HtZ2sy6QFrUihyVSL2mrFtYwL4rXYVzHbXoRqPFoym4iyHsV9cEHN8MwgadfYsZ3d3geYkP",
  "key3": "63xz53k6ipXsduix4k16rUv6nQLLgFyJ2dKyFxgWi8A8imEaRq4jBUmgojKSGVsMBnTVbk2KtN5hHegMdCgsvo6V",
  "key4": "5CmApyX3PZjcig2gsCWLQ3TZJ13a7LKcANpmY59JpaSGCKncPHuSiQUDiwXkwYd9NQTnDUeSWsaRYM7LBW7fXkzb",
  "key5": "2eJG3aycdkoJtzaFe2RkXf3RkWZPTFfm9YV6v1zXwiaXx1kRqh9JfpiVaH6nwCPaEeuURBkJHYTzHLsnncDv4DWs",
  "key6": "5B41rVX6u7f7fF5Lq3b49hJX21A7LkhbED2CZsPyUPdHZV1eDNsBkG4ZzFFQPkZq6hgTBY1srBykQtox985i2ikD",
  "key7": "3Pi8XMHY9zBDyNPAKJjPsvR5H9KJFNVR6VHxATwquMGTXgng4ZL2cUMsb4edACiaqbkQT3rMNAPcLez2FSMLx896",
  "key8": "v4MdHgo4BBumD27VYuQijzfTSaWsGRoSwjUmKPd2eBHPkSjte8oV4Trs3mV4xuCZFruRdRUGbJFvgyGrybZ6XVS",
  "key9": "2UFf3Hnp9iZxqdAgkkvcQSxT31twAFYzBDC1ScP4s5nURoP4VaaFetTYMnoovyXL5H8kAyEGrnqWveg6BfKz9TKb",
  "key10": "4uKkHGBboCwqXxbvBUVbH4VypFS72oysvjkeuLGEqkgpKMXF3wdBahaZdssiNBdbQNQvcBBQiFRujC9rPjFZiFcE",
  "key11": "26E93S52BN7Lm8ZNgDFp7M9kN298amVRjUYixD2Jj72ubSTi3ci7uNVxRUfQKzkfMy8VYBU5qvacBcCKsszNCwA5",
  "key12": "241MUX7PtcCAKMEtf3xrxUpyQmSK1CAcTqVFhk2vagDpnxiK8wZ9YmPDRHbLcxLxP62YTqeTaUWzgN8g7VQtzzhc",
  "key13": "4tkmT8LFRoc9w3JETkdgVFTm2b1Sxb5KfiUepGuLX8MzoqiPFGncujaRjgmPbmNkEoprF7FGX3NyPRu5wioEzm5n",
  "key14": "5mfyL8xraWXfBMCKgK38YKyZNovgK2DHTKoumd122PMwxy4p9qxv5g6Kwn2QuJbHHSAERF5Cr1nhytVxgQQxDTj4",
  "key15": "35GaBzEehntcSP1pRfYGnaFaHzUuZCXRefJWQjqCUc2pKdr5jczarjaivKedaumVHWNhrZEoLiWawso6RcT3kcgP",
  "key16": "SqtysTzdYj8kM5f28nKkk4aQzohEhUeE2Y46GGLgbYYbpmrHvBp4KUXHYQgbCiQLWXNXcWhYg2XPDFVoU6L8qWf",
  "key17": "5sSTQqgpQzxK2Sggb3KP8SRPoAhQkcqC7CPWsyFHiiSSwWqpRzmDSvtUGXdYnCAzCcsQ4YABgXJwR4Z1rYaB9irW",
  "key18": "4LM3aMAxAbSqw8CeBtoEHuMeisfUbUzPAmi9eBJD11mTFRD2x1d9GVmGRQRVfxeHc9uREZSbC6v1B1JhtSmnuJJN",
  "key19": "2ose7aGaxNAFHAd2NLJURJ8AWPRx4pTmBW9dKJMug47YjDs3im84pJX11mM2nW53NYhga7vvKNkUNPjsz9WdhRjN",
  "key20": "3jA4LvQfs9EAY6SSqZbKryA9NP5ixmyN3swceWT9RtwmfdKyDz2HnDKNGb5ahLVXhC9C7eeCYMykdhY4hGLv3SxL",
  "key21": "ee1bREcmz7WioruLhvG7xo5C5qjruHLqDFwvYrfWz75kMvL48Yfq4q271WPioTjSMwVNKF6zb7CEiVxWe2tiqhG",
  "key22": "5SV3KKU1WKYBhXYFhfbBKvzz4a8aDYYzSeE2nR5KqfJ1C6FwQVGRD3VPZMBC6jkebeCPxFTrhRAU9WnBiLPZEDVE",
  "key23": "4yuhWYGnaJBEuwMrvZYeLAg3gP1uoe4QwBmca8BmbSFFyqv4APUV7sRWmFFemYRAeypjQnJj77fhvDRY6XLGd8vx",
  "key24": "24dcdgNKumbtBnzVdxfy8hhB2f8ADABWXjABZmy9DZGx7gjns6mp7mpCfcU1t6fU1MBugTpmKDXmAwhTzqprNGZZ",
  "key25": "2HuXQzcEXxnG3yjybVAQojYwdv98JWXuMENgQf5eGycsCqiNcGsi9oDiFFi8F2A3ot2sA5GotEQUFFe6dWLKe9Tp",
  "key26": "4rmKrr4zTYj1A2XfNBdQhjeYDEiep5DTjc3GNzQQRxt5aFnDoGtriqYAtcSa3JQjNANJJG3j49QbJSBS52b5jNWo",
  "key27": "4YPHtEjVhTRH5CKEYT4NztcGdn4DdFf8st5P1FjXzS1YmA3jBi5qnNtNkDYyVPUtMYp7gtXnfvErexurBCF3AHaU",
  "key28": "KUruzfkac6yStyNQfmmTb3sCEHFGiJd9XT5R974cnZXtApptiNg9MHFcZEqWpANveYuVfPwYPaL4Zh7aEnp3CxE",
  "key29": "3cytc1EzM5phjvpdVt9raPiRivkEWZvKxBBns5V5GBt7oSThBxy113GAAdf1ZcxGxEjRmiKxwzfFX1mdaNWCMsHn",
  "key30": "3Rt57SHuwLze4RJZttQwR18ft4wCvFYXxsPfAP7pErQUrWEaKELYS1q8sdUhDsExFtGUTrb2WjVVGtvnY4SrMsH",
  "key31": "sdZgfKtbUo2u7xnictTtwhWZLXhxKVL41Jushb5oXXqogYGeEvUKws4w9XmqZHB5Ja1LgprZH6K6SXAK4nBS8ij"
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
