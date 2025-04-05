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
    "3k67ZYzmnjXrQQMG7hPF4ByXffdzHwvonUvkKBvPCTuYH2B9LaSLH4esRAFbSks1ShXm3dsZpMwUygcN1c5PNRf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TXYb6UAcTKX7ZztKwQDnjBDJChkbr4Ym7JmBDPoJ7Fgv5ewJ1tBEAYUq55RCkhw1MnM4QyDKYmU4Joky4cLegNQ",
  "key1": "5NY1GPYhDd4mVpJLUjmQHp5rT6dNqgqwwxtpWEcEENbVkBFaRCoWoXrvRjb9Rb1pBhR7gyxXNdRhDCjZqLFrXYH5",
  "key2": "5a4ywWbd5w2JZXodkvbu5phZVVYenYvCgbAFeFTNjjnzzhM4za3RG2eWyCMDHwav3NWtg9xcGP3LrZt3nZcV8uyb",
  "key3": "2VaMDtAe2X9AoF2tZwSKeYJmvHXZH8m1HWWo8UXGvN3Bbejf4jG125WYgna57J12dYKyHrmzC8h62Aru1KAHhM1A",
  "key4": "3gwbnjcgXmTBzn8rW9aHWPdQBpcPFd8jxbyzoT29PpZWRSzcjDFu5DB77uqVB3UkAAoE7qmzuEpCNLguZW3PSJFo",
  "key5": "5SbHwpRD84kZCYbc5YzoiK7yZ12JudpJtwf1Ycorx4ztLTKjJR8eEcM2bLACi4aw6hf7GBc1UjzgnodBU81SxwoF",
  "key6": "5xAMGRpJYm4kR8E34L891yXT9ud6yGMj6h72YqeUMQeCFoAb1dw2j4Dr8F8GJJ3UU77Yoq33gaoTLKxTHV9HQe3A",
  "key7": "59rep5313z3i5mwnvBFXnun55FogMaro8VNq8U4RVFx4mqZjRvnspubpjsTtrXfjCy7nVgC9X67pqMUwDozfNNdX",
  "key8": "K6j3z8vbZcXUXcjsH6xXfKgf7xLJNEXcimzS46RkTrqBpEqdg6LGS9Xx9zxfY9LmiPDohsLWNPxHbpXwLYwKbsd",
  "key9": "53mpCLoRUC4Hesnn3xWrkSm71zqhCN9W4V6EN2RRkF51vuxP7v32pMv6Cq3qFLTR6R7jbcZp9qGufDbSWX6BMv8A",
  "key10": "66n6uTUa8uYh3UVJoN6jDRQZFBi9hHK7WgLauFr2G2FBzd3jRYBEEW5SiVX7v4oxGpn4sbJcSYFQrWaDvQAP3udg",
  "key11": "4AGrZBdbsEUgReFHuiXJ9gm13qJTwwis8WXJ62DjzrvPixHxykAJ6NT9t1dECVqPYygMvmKQZG3Bh6HN593phe75",
  "key12": "3nYygBu76wTFQzQGdkdsbSb4E6tLTDQhqCpL6mc3jasb5GP82TqebEPgJKrrUPApaym1dt3eGiqcYAKYcUEWzT5a",
  "key13": "5f4Nc5UCqj42sf8BCKKSPjucsoEL9YxA5D9b3239hw77fftMtLNX2E7n8XTp6cxYiHYgWC9WpqytghaAZM2ZAXTg",
  "key14": "4nVtSA3hojvrvJELChctAQQeaNuEibvkhQib33NiBUGWN9XLgFeanxogFtCSgrNjgVuUYrv9yDhkHSdRUJYHYU3T",
  "key15": "3vJhwMaboss9VuWeUTkrpHU4qQo4Q7zNEkGer8KXbqQuinByiLzbEJ83jJXKAQuDjZQoK577wQAHEcZUy6tSzQY",
  "key16": "2XqQ4drx3A19sDCUsk9GUTnAMPgsp7JgTcTCHySLo1cjuiYNNzkCq6nyGVPcrXGjJDkvjB7B11ZcVsVAvMutHK4v",
  "key17": "3irarWzxPCtKJA4UcHDUrnvidqf4tyUzCJLxucfTYRewaZtvUMpthoeW869JbcurLYJTKjZ1cM1UatLMhqt1bnUV",
  "key18": "4BvFVF5EnB557tWLFPKR1sVAwwN5M2u7y1qjq6zDYZUDKfQ9mjTtFnufck2K431SGJxs3hsVf76PQm7EANNSxwfT",
  "key19": "2kSkv2oiB2SdadAN8m4TtzmQiQjt9nsuSnBg2wt3TwPCYdveYHdz4DRm61BgMMvZBv49wVMFUmBqrsehV6qn7Bz7",
  "key20": "L66bywVccEdHfZp1zoPr19yA7Aub1uqkZdM9ToC5iQvhM28k8rk8N5LkSJU35B8CE9odyVYpsHtUdwaFo6hd9pP",
  "key21": "39JXtCQNJW4EEQLsmJc383LmmjW7P3JDr9mEkfu77zxpLqf63jxud36zH1obHkWtBxvjBwNw61H22cuoKWDxUYMf",
  "key22": "5YRhq6VfZD6QG9zgypadWQPcRCFAe2M7yQKPrCuEqwbsJbbuYhtxByP56WsFwaHYMBXjccZhPfh5tjcV32Co3Fsj",
  "key23": "jJ5kwWGmkKnHNJes3uCPpKbEWVPmR3Ed6jpHzuFNmxHQbpjh2u6Y6raudGdMNyuMUAD7aGcivm5keRU6c6LjU1T",
  "key24": "kcQmH57U6RPGJJmA1FqYKHpC4vWNBG4pgb8zJkqP9bxcSn8z4SbH6zps9yBipQ8sPV8jTaoL4PspKSgLs3oUqk1",
  "key25": "5jLNovTZ2ugFqP9cnMnPt9yXp4HKKqGZXFoQorjN1zHdfGEWVKpe2hF6omqkpAmjtkdj5DDydBAf37TMXYUagLCN",
  "key26": "3JseHrCw2DVd9rtXPV2XtBxnSchPzMnte7wisxpfX5hMHKdacQHwVrmQVyU6bMS2UsnD8Z2iaJ1uAz6TACBXPkfp",
  "key27": "2LpZHkJa1u3mYNHJaUfzcZu5QvgmmYm7nxD8wPv2KFzuhd6bqP4PDRLvdDksjSBndeRZGQDCfZHcN6DwhHeM5P4m",
  "key28": "39VAZPep4ZAntoaj5K7GmBDYEy6YR8n1uRRQvw3nPfzK3VhbD7H2YzzSDSnaL6kKcsPYCrca1PihuWZAFPUYmTqG",
  "key29": "3CuL4VGodqvfpiAf2kCsydriDFvknVYdT4nG5MB3ko7RNkHZQ9vXdGCHj8zhyRMYVoajmEXQ5RLZ6F3woMmA6nLz",
  "key30": "46muC5ru4hYyn69nJsCF2cgFPUCVYnqjUbvWXEXnWAJM3StzrP39PmidaD3GYQBd1iFzixiULj8hgrD79USE9NZP",
  "key31": "5WeK8QpgpH2cHvtVNVAz9D2pdoErAqycsqN3Y6d5uEcZTPjTWcyUfo1HVC8pPg9cyDfea9Q6fDD6mCuSG8FWzadF",
  "key32": "4n84AkSKgQvvnR4JyYYJWNgKe3UZYboEwSApMDvfTg423vs42ik5hJXFgsb2wBZAchYBc2SH4HyRXuETu8dNVbXG",
  "key33": "5DZHnjdBaQEYvtseDCP1Y63E3DYXYtc3vm1eEAzUHwD7QmxHNW8u3VyYuL7XuoYeED5RWxSrMbDtBMUb5byxw7pt",
  "key34": "57LxgxrkgRyzxnVrScq8JvfTEcbrANWbqYehRhpFoX36NReT8xDauX6qarg75eWpXQfFT7GBKC28YoCRC5BwbhRZ",
  "key35": "2EoyQ9LdQuSGQDzUe9duAdkYMM7dTcCG4tEWwYKJRPsHFJkt11fmRDttXL3BUiier1XHhuQmXPN381jD6jtXV46",
  "key36": "VHEg2t8hDG2PzC3m9g9oiTLFHTvMLCGRTKhxCQy53qqA9FsrgDb5jqozkGQXEKnsCD8puiBQv11bTqyzijxn1Eo",
  "key37": "3cVRu5iJmtce1mg7jNcwrUnk1yi7faXhXiCn9Y8reVDsCKRu5DdDQ2UL4vAFLwCCzdZ9DnYzv9cQHjmsY8D4QHaC",
  "key38": "2X5B98pqPsTpFGRZsKqQdtf5ZwKXnMvtfPDZnY1dR4TjnPDH8sGxeMiyznxJea61DBdTt3ZBp6F1f1evi3yaquHW"
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
