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
    "2ZyZcAoQnMRaKj6ARoHW5YfSDosLbdgVn4QiqPpi5GAnfmv5DkcRp82Ftaq4Pmp7kovKf6yQWZZsptXkVzv2YwB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1o9DYPwBThWay9i9JsZr8UWWiEYneSqaPgdnv39mgjc5QBKWAA5cnTLhbDU151pTyV3AtCz5QjCLp4TfwMfvVYG",
  "key1": "33d1ciRRV48TjJxi5vX6HQ1vx6KS4UiKJw1wKHd9SLyEawevgFXWsFf2BvjiZMbsRA8sjp8XcSaFNwmZX2L2okVg",
  "key2": "5C7gWrwByN9T4x7tEjzf5iNkkEVn1zNcYJVgL8z1kxp7VGJFixPtGZ6b6jKTnx2Xbkumyfz9fTQGwKmdRGKhJaPR",
  "key3": "4y9paP7D94Nurf4p5s6hHS5cznjFQBV8j6T1K2Gxbm7MGEwrCj67Tj6io3L8Q7scWWDs4kerSDaoEuFEGJwrMSLm",
  "key4": "4HagqrjfwRTYjkFwEa9cw33zymdn3qEup4h8nHPrBFt77XfhbwqhhGbFf6Zu6DFB4Rpsp9Gy5EmjYeDyGKxFFmma",
  "key5": "26Gyke4PLHxxkcxbmiNFgQ7DhKDMj3UCzTamqXxykVthJLLrVYwx4wNLAMhGuUbQ4BXeSSDebAwCiBL19ti1L6ZM",
  "key6": "27TnKQjFULWKcUsUdLR7NVqa7BDoJfc56N6L7SVB39U3eRD3UTYdHyMRZG6nRvefJxGy9Xv7ps6KNZwE8WhWWSCg",
  "key7": "NJJ3sR3P5KqrAp8E8NrQuLMJZyE4irSTvubWJCS3NkxRSPtH4FivoxevNko7rSDimz7H5xWKBpt9ojGE8vm6y2u",
  "key8": "42aNjsRdBrRMVrj9oxVTBLvDuG6d36pV82ZLSBXkyk1ZZgj2JwohT64guTNvDkS69pPZFkaxWYbogvLRu5BQatpv",
  "key9": "3ZyeVzbDURgMNFDLxsKLoB7753EbTLoaGc8J5iTQzW1bBfACDDzFTLsuh8y39cX3R2bBGxjkEYwPWZKfJuyvb9cq",
  "key10": "2Lv4k5n6nFKdqNGqVhYsvKz7To13YD77zRUZGEgGUngBgLTnAdsQX4P7YCA2UuVq47CdFLejJwy7i9QhLf3Q5MxQ",
  "key11": "NgperptNWcrvRGDTq5nDkDginctuXn6BqgBZXRFXkr4HUxJ9qfsrMjyMuBuLgnGKJ5CpFMNuw68vGJPtUvMojYq",
  "key12": "2oQkQjQBfQuiE6ZncPwpwhcYGGNPU9gbq1L3fXKMtyRQRdDNVmaEAFynhy3NKvzHn6T1EySZCV513sZyFHrYAiX7",
  "key13": "4ePEw4QdvR4SkLyf5naRf4XsGM4kxe1uUYfiCxQQW1x5u9nCFePJmEBhe95awPGXDMQCGiRvKbr62CKC3yAFPF9m",
  "key14": "QZW8mr8QaWjWQhRtNsVeipQFmWJGjKfyzhbZbfw3GkY9JGS39Brqm523iuwzoy7jvu3kF1n2fjZLpBFDj5QyzaA",
  "key15": "4So5sPL1M2gHKHTh6sBy13CsyXfHLjZTzPkarbqmxa7C1TpVTTu51tQ42oBQAHDVBCRWPjaGYFmACQWhHSdBbKP8",
  "key16": "2ztCuTmhTFh4RUUPyqzCD4qG1DtfG6bhcF75d1Ad46hMoLDWP3JmuWLsXffdRTw9EA4xddWjXpd4CaPEoDNbhPv2",
  "key17": "2JLdLo12sifb4Ay6iSHSmV5ZrCgGrCb2sVDBDpFtAV49a2m6iT5rVkLKoGRREn22SQfPwazgd1kdx8VqaWWnfFSz",
  "key18": "4wVYdmusBSPYRzjTfX5nqt5qUXM9VkGS5HxGDdpY3k7zYrbfBHHJpV6reMWnrva12FmYjQSAvJyHTtQQupL9e143",
  "key19": "5yJvte3VHV5Xu2mLM46fzSWxnXdyf6chSnBjQJWfubStpTD8DBdti3Uq6LWv8823rrWYyRsDUiJGXxFGCbvEMDWB",
  "key20": "53VAkuoLcCyYzMAZEtBfvaZxBx3u5tUsYcGyinkBopf436cRhWNZVkwjZcDVSxYwTPbvr8Q1yB2ucVDLvvEpJyu3",
  "key21": "2D3j4SL943e8zp3Rt4aMU3qc5gG7ceY2SMuxYdzWtF9GuwAZSgF5Cmk9JrqH5RCBqKNRL1R6gDtNqDEyFmo4Vfe3",
  "key22": "2nnhtfDjttwsQXeMQzUk7sHLz1ktg3SPS1VLbY1dkDQGXmCNWWrLHWi7qgJnWTJ6CcKEkeGyNV1eD4FoypgMQZQM",
  "key23": "5YAEfxoPBeejTk3NEPam8snj3ecHeFwwVBejmEDJ9YS6vPJJbnEz7SDVermcC62iqUeWpEXJbi5WWdMY1WfCv7bq",
  "key24": "5Sv8rp952jWJiXCJagm7cBc5DSiZhzMMHbhTWusYP1TRmU54pWbQmRNHN35H9adqVVGjbMfTW6bT1jd6HgMbGcPm",
  "key25": "3uEm7QZ3E6KZTuWYAYTM9qeurAnuE3WK13G3mVVG1isCLV1tYM3tZzfMp21gDMqjSkCd3TQtbpB1PjRDLppAHm17",
  "key26": "3s1a7HMJenHvgKdrpy7Pn6aiaC7fVFM1zqYXuiaEKwJc1SwKBijU3J2iEdAg8pnG5qVkmXdANsQspThj59doMnSf",
  "key27": "2BUTAJt5SSypzzLh5pfZ8NRNW6GP2jNaJHQFZ5jQh4UozMKBtmLEJLoGmbySLc7Q9PNg81v26UqYXVxL1QmA9QXi"
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
