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
    "4W7gLKjm2dQiVqguZhNym62VND3cgqp1PZTt3Ls5MQbLuEibySkPh3VaYwh89sHNQFmegqR6PNGWBNpvzocYFoUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UVAMHa8FEmmTTUcfW4hy884nwMiN6THRKkf5e4JCZG1XR41Yqpa9aMPVTB6q61xdLsCKaYFgfUCZ7uMgCzqr2Ud",
  "key1": "2641WckPVxJnQKtDfZKQBMCdJuM91GsPjeZ37GWojPxe8a2NmAF9cn5a5FdcDAKGKuQFCr2jqFfWXbW1vNWDm2RU",
  "key2": "QGEDUigb1VftknAwkADoSiKfKWGZ2xHupQx2UQUKCe9b1t6W2qGs4b55h12YYkRh9uS5QJgqALyMKFT7847tLBg",
  "key3": "nHpbUtf1FL9SnEuWLRDm6RnAYPV4Z5YkTZA2FMF4NnC2Z29wzQx8dLXg4aEKPz26XStHX6yxi3NaRTsfKJVGkpT",
  "key4": "5DgdDXHC2QhYYCKhpK1HMTHu5FE3CJbgXsRP7rZqSNkqRJPD1T7nnJJystUUPaNYERsxBWW7cdZERRWisbvuNEuy",
  "key5": "2cKMm4TQwMVrxnNBUZvZBVfyxaeCiYyukzPP7zZNJUQrnXu6KfswJV2sBLAgxVfraKNfKSU8weh7m4nQhMZiwaVg",
  "key6": "4Sqat2ENPtasasXm4msu3Sc8cru1XeyJsoHj3JPGsWjCZ4DEBzGqgc3PTfztFMGi2M4AJXdrMpQgxe3g3aSWjjBC",
  "key7": "HzEUHJbF5UJ2xhBwTDN2tc6VKAFB1PsXrzyW7sZp5FF4akJ1nEBSCyzgBRFPvMrBNHeCFc91a7XACw49rEkibUz",
  "key8": "2xg9pzY1NQWdVc9Dyifo3j5ug78fz9PUJAk3CPZ4rCZCq6hVLz2yoStJhUs8aVG4VPcb9Z9Coyj8k1iTYAw9ghjg",
  "key9": "F1g8DmCifABRy8WQabvTsWVHKt5pDd2VCmtaimN5SG7Rh8sLoptiAQiPrEGo6jRr1mTf3AvA9riGY6KKVDGUGaj",
  "key10": "3Rtt6bJQrmsovPRQ2YZSwXoQUKyPW4HUP7LYNUZ2MovzanBGYGL2NEzv3s5cZM5eNZER9XsofQDLLB847M65Sfcz",
  "key11": "4eQ94gRT9uS7vbRzBjaC1Bs9kLHgs6cLsG1QU4VsD9vmJmcZmkvL8pgtt5NJ4yZT5dp9aJpvaRzzZBXARvBxbpoe",
  "key12": "3pyMFegoqQMjM1tCrxPqnBoxiShvGEbcKk51ZgZN1jWY6p1Ag392pUBp7gkCEyBQzFF6jYUcSz5H148F1nyMT8YB",
  "key13": "eXtCZQhKEcHWmG5jWDA8WT158bwupYrXE4w4Kns4GnCziqktf7NhHwsecQePsJVdwTXZcVmmwDAfDVFNQntRPiD",
  "key14": "KR4Te2FVn7ErcqpGuXmSqqL3T7o4w29mzV4Xg4BhxkaN29MfjEWn1T6Dd7Wpq3xefpkuSyJCqxzp8ipSB89pzQs",
  "key15": "YkFxmSB6Cq7mqmLppc3AsZ2hkb23wm8twB2o275D2AFY4ZZYAimLa16vJKoQpq6jhPKWaNF5qphMVqRS493fHRD",
  "key16": "2w9ChKb8cPw1pWFhvzijpRUxb1Dn8xPJYoBqWkmBDVW6rYkv8f9ZH3SdTRwSi7w6AmnSi2iZfy9zeCWtB7uFP36y",
  "key17": "5ornPTSMJBukfFHUwpgiABQVaivBeuhjdCYxjQnaKUAzWBnBZ3a8Vo2ZqjeQWBVQdVWhdnu2JCxUeCbfN26gr1MA",
  "key18": "5NXL5Wzzqq7EYETfHq3SSbwmEVQKNucBEc6pt5FzxK6pa6KzRhG6xMveZnCCzXWcVkuJ6c98StmoAkTFPq6ELwSF",
  "key19": "3pLK2XnUxtvScxqGXKDY4EDaJrrLqUyAg5ukgVsjapGPo7qDh5NfPJCAre6XpdnVTsUJtnqESrMYDsGdvB1H9B3W",
  "key20": "3exiqUeNZbLKbbMFiqS7AZqsJncE8ZDDiuSy1jS7DLQuPCoQgVYi1uLoMNz9e9E8gTbH72Ysjh44w5drLAxfuUgc",
  "key21": "2mNMoUuVMjUaxvjm9vsJZQKj9tcT3pE9efQsnyyD16YNsBcQckq3eihGADCSD1Xdvmufoc4qN85RowpXzZ8JGCYw",
  "key22": "5GGheR9BWqxh1zGjSVJ86cNmqkxXDb3cv2itifuVJpv3aaitev75a4QTzFqjeJJbiPBySr2HP7zMRemFzbLufZ6i",
  "key23": "2aRTNXhUiSpYinC1QeC7D8iCjAhcrHVHPJ9oQrwj6K2gjUWgwfwkvzBYptVT8vUadk8roNLLSDEDS1kAeKruL6K6",
  "key24": "64PPciZr3AAGamounp4UWGd77x6hMtzCkigRVCzAY3rQmGKf8E8DNmjpb7rvvKFwWf9N2e4xQvVzSvxCN7o4sGyX",
  "key25": "4GnJSjUGNr488YoH3JptEu6iruGhW7mzEJ7bcfwBhVWaaF95qm3SYP3XVuUr1kh3DhazvK5Ty9noicvXePL2wz5S",
  "key26": "65Qhh6eiCUm6FnMkFTKFJdkzJZWrZVQiMPt7QXL2aNhquzEG2keNu3Lrxw7d6GXRPxryoR265hzhEcfc85RJDTjB",
  "key27": "3EtBjZ1AwEVTavxExQKh2oYr6x4JD7v3XuXDyrL7prr44TC6oQkegNAprUbfqnrbjSQVNzFZyRXCkSupSPW7CyKj",
  "key28": "26y7TmVXS3wfmvqpiAQArtxdDMZ9xUeFPjv9rWEaby6UJxNCzjgXwdVQj5oE4c94eCgHkE76RNxtc4yniWeShghY",
  "key29": "JW1tJV3suAdNc1LaoYD3WvWgX4eT75Y5Q4bf9dZiMVTVPXfQGMEMhAZTHnfoiAf2mow5QiJp9c1CMhvbfKB82QR",
  "key30": "xtbFzzqqEdgz28aRRNhV3GtPp8ZwFggKNX5TDCRqu8ZRQYci7Pt2oPaWhAQ6AT2mMdiU1KVMb3xwGKGkf4FCUbZ",
  "key31": "38ju79XmY251SSCD8D92rWnhdEHsQaVb48ufGQ6wKwfhBpd1iircn4DLnAfuknMk1SU8D2Gq4LVTP9LRmMwHXH24",
  "key32": "2Qnxa2WZ1kkF4mngs2TxtSmrQBGj7NjawZDvpBzqd98KWCN4GLJEbeBMce4enJ3otZZrUCgtYDDGNfWw1JeGFFpA",
  "key33": "4UHd5kmn8Hm53My7o3qSqsrXk9x7Nwg8uiUHDFqSuHQ7KDccVYePLwBGKrF8KQDGX5BfEi3GnxGKsj5oSfmhU8fx"
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
