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
    "3zu5NegkH9As4ecs3qPaXdt7dNXXFxuZ12FydcewqiyKethEmqX4pUt1fG7tgrD5XJCNgS5tPQgPnKYB2nmgsDCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fSrsJAzKjr1pCJKkteuzeKThWCCCSEDgmqFBjyqPbTwyDMpoCeeP3v3nm7b3mY2oT4fWi1g6phKU3h6w43cZEcx",
  "key1": "5iogqwu4vCsWY9vhsqs8Y2VXxUsRR17Pury1oy9XsbUi9Kz8UiLYJNmyNNtCgbNfgJ7vz5vbG9fTXdGtTHKscZvz",
  "key2": "55Afyhh1yjMKGbxMducWDoq4pnVfu55fvUV3WPYofhv9QYmw4MBez6wkVTg21422n7RgwoJJX8FNnC8SP431kQWC",
  "key3": "56eLXfCFBLa1ywfJMyC736cy1LWUgfXhoQ7zkqFSnfZDD1QdJn7i98BMS6VwxNZFf3F6pdxdMVccmnxZrWC6GPPv",
  "key4": "1q3q687UKUCKzm6QN73a2172eBk85D6Smq3XW4TQzTZkbiB4mwXnpYwh81uZXrzaWj2ACB72m5DNDnxQ5AdyYmp",
  "key5": "3nA1awfTWxKrmPoKsYxZ7zrDXZ5daWfBbSQsC3aetfqR2mev8u8dPFRrVPK3Xz2mazHwjcGzcK3oyDGhUFFQuNc7",
  "key6": "3S4mo3o8pKTFRY6zA5LAB6nr72cmHaRzSm6rUnzaiXT7F5M9WjiUCkkpjL78fDqEA7o5hbUukvtBdw3eTrWNuEWz",
  "key7": "2NPfutTsmxP7A9A9nSjtXrnUHS3ZqAXVko27zws1Gz19EGkXfNGnXCzmAKhaXwKMpCSfgj7VHoER4vRy7G1sm2AW",
  "key8": "5qLLbQ6KYP2AWsUxLapFCmgHr5TYBDdnWsk4Z9T7MdUQ8zeZJZdWCsoYP6XkcYLfypL4ZqtFoDnAeWHqs2R9NrP9",
  "key9": "3sKL7GaLMVo49YSFhZQiv9vUrvMrcZ33juwAibMmhz4JB87dN7mr4y1zj7HD3yECphKBHBgXxZJRGCmjW2Jxdu8d",
  "key10": "64s5JJtgWJei5SJvctM8wXLFhHSH1ZJp25GvxqtXnVDo7VLWWjMBzk8TJ4a3qDBGNyuJb92dRhFxfdehmDJEX7Ci",
  "key11": "59zNRp69fs2YffJPkY7c2enu7WWzBnZgaDA9qDaijgb6Z8RfrbXqjZr1VzTGuDwKJcrt7RdkR7gPnwcetTVtAiLg",
  "key12": "2c6jh8UXUXpwjYAJJSLP5FL3f97VSCVHLsmphRHFsZWQ9omsivpBJvQsKH4mka2vhaRcZNLzq3YNfcP16PfnvKk7",
  "key13": "2azPEyGBsFkFZBxPDqd1B72AtJoxr57HTKSm8PdwAjKAseC7PpbS4y8M9eW5zdXd9s3xEpTnXoeXhUsCbo2XqjCC",
  "key14": "3W9GoiNF6rfUtZKGLJbXsfbUJRXQxVnFKLTa7y7faq8DxZF28CbPdwX1urvqD7XjgHXQF8fiFxFy9urS7DVNPiKS",
  "key15": "3cgpfTqZK2RVWp8GXtwT6rxuU7fjfbJe1aM996ChaT6UXEt1dRCdnYqqwmehykhetqqWakzmiRGScJRXRKxSUT1o",
  "key16": "4mjatrkH7Yu3x59V71UjiPYTYSAWN6a1u7t3CFVzSpEGphwp2f4Zyk1rEZcQG4AHywbjBVBTPBNctQ4S6j6iFJYF",
  "key17": "3as5LbnYiG1PKTMysLen4jCodTmEVBqNkcRdfn6cL8cxmqufuGQtuTJPCMy62MzUAeiQgfZB7JJx19iwHLd56NMJ",
  "key18": "JNkxNZKba67UJYYezHBEdPTfqcPDJmWXDU5bkeTT5wz7yV8DEaaGm92wjTBQPWvXnGjDtSy5AS2FYjAVTvw3yMx",
  "key19": "26VgFo4Qn1tNeVAcxrVFT2G8GrWK69CjvCfwqaZibZHvnp1VznGgQXWUEyWzb8PsTNfDeP99xwpKpHKrvrWr94y2",
  "key20": "nkh1F5E5bfkeVz2ZuNPDbRfLfuKLLYh8SVPawMtq3ukfQh1BJ8ub9sGK4ekgYKz31FgRfsKutUgsiVpHjtKNgCT",
  "key21": "4Q48NBcpAg6Er7rC1r5vPoyqGXEwpMk1KBWC2dxu6ndJrpTRfzs4ArUCcQTtRyrUMTjtoFgDeF56viXZzhPxb52J",
  "key22": "34uV6Bh6UfahoX95mdiN972UC7JV8ehpGXMYfHcaYQXoo3Mg9D2FcBT1ZmXQR1eo3DW3bULdhP3tws35Uo1BrR9F",
  "key23": "4wvYF1N3dDeyhR9HS74ctzQS5sLGybxYQC3uh82qVFGUGPFVrqYGFdKZfPJZkzLgLpbFU2pmdWQ9JnnaQvV417Y5",
  "key24": "3KuYyHgSG9N7ybwBsdyiTfjei4vZ6WivS3kyF1uZQMamitZydrzqhFCGP2xz6jX1yfJwE1TZfHKMCRFz2qxhssbv",
  "key25": "4WUSE4bn67b2raXSUzdohYa9h5HgNvQAi5m9FdMuZmiEY5P3NR4wd8WMc5YFBT5MBSRkTrCDpgccQtb1XD42eVU3",
  "key26": "BF24Uu36ytKg7eZ6xiYnVJWaK4AavWsdUxCN76SPFPGD5uMdqa36w8xHTeZDfTKySP1pEc43yg1QN9HduqG7KbC",
  "key27": "2cYoJHt9b9CA8zCnRdT2bfbVZbWzgPbvcTymtjjZ5ws558WDsCn18Tj6zY6tz64zkEHs8D7ERNfQoMocPfuMhiEz",
  "key28": "EfuyAjmny8cp32t6zDiDZvK2L6U81Rxu8PmKqDR9WF7wDcucdbGKgmtFFyprs2G1kddoKx1fMDvRqM8K1bgxW5z",
  "key29": "4ymmpo3QHMK61LhnsNyx5ZSCrRyK92gu8APiyJTCUud7ZbAkgXda81Q6jmGKLS7tm9G3jxpmX99sfn3DacsSesrw",
  "key30": "t5ASaYRKzFv92giuxViJiULxZdkhCvTgmsAiTSUDTtoPDXa7C6LdZhiEq5gaHWJXuRfcCW1KFLuk7v7qboXzr5X"
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
