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
    "2XbewRAMq5v6hzWAWNfRXa5wdw6VNsqP8qtnWxvfEDG8SUsZG1vc16M2jMjdyTez7PctAtrm1ZeLVTsXohsm9qXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TkeKm2Fkxt1WtdGoJ5gGVP2YB8TTCFM5DSAhbKLuui4JYB1UebLG4LArabdU3TJF7fqHwgU4287mJ7suqdTV8XE",
  "key1": "3d1js5UsM3jnATMGQq8yFTUWHQiXUY5DSZgs8oSm6bJQvnXjsZMn3vP1yfqEpEEZXPv3A2yJUKpNyosNhptg4riG",
  "key2": "32dfZxPAqQ8vEfmWY8G3hf1xk3hHn53GhSWmbGTsebMzdpDc2D6Cg38BwKGfLdfk1RfW5kbEJUXLvWhY6txHn6f5",
  "key3": "3w2GvSJ4oMtdA65htHYEKJBTWhVv4mKYgjy7BwyqFAGhzWTUVFc4tL9i2qjGhHbxtc3vGZEnhAk7YLSYvBtbYFRa",
  "key4": "2WrSQr9UY9HNQnkpEpRn6fKXdm6oStcHouVKQGpHsab2qVtYBBGUwzArfY7rYgZRK1fZi2EayqBDCf3Ui8vC1mj3",
  "key5": "2UT1hxn36EoD5XQVzg9QZqZP2EDZdK8Rn1PRyAHioWEqMQmYqRxq8Cwv4VNgJxg85JNUwFwD44ryo9sHfSgxZuTc",
  "key6": "4kiTvn3wUfp5FWaHus1JxJy2xxS4MgmLtKiRSiEqp69mAUweRb3MSRtkWTY9aiaQDFvvK2MQGXLbqzPQikDusdMT",
  "key7": "33tmr9vikCagcFkHukwKDGW33MKRfCGksU8HNhohyu14igvBhmwsWzx7yzLLPVt1UwhhZRawxU4TXoEuK5Zv1h6R",
  "key8": "2eYoC9Zatf8JmuAW5syQCHxtLhbHaJrrR4AzGJ8gHHps84apMr8ULBtHayUeUzHcdaPNo3j4XGHyd22HuThcUgaT",
  "key9": "4NzTRSRzConsTM3dRLFqK4Ka2fVUvjHhjJXS28PfWZmFMzuPcyMLsX4wjF3sHWaYno2QzMj98PoZL4KWgESvtQEv",
  "key10": "5KPYPFY1ykT4AZW4TTPjd3SVHwBNVgezCA6LcTadxMp8GpfnTfRz26nCXssF24g7WYJv9uGK7kop24Vtm3opDnYF",
  "key11": "cJmbnJhJbreJtrQ2UjBiUdY4CzGf8RyZuhyfyQrC3tFjLPcGzsvfoLFDJoTxRnhgE1p2SqgDHu2fXm2BSfj3ApK",
  "key12": "28K2VDuixUMFCLQ6i9qywVSkE5xoZceCJsKWwBkYWwfDCy2BPNZkfBarmFHvUD71WVRo4UPE9uBCee1Hwj2rFNoJ",
  "key13": "KihsMiic34PBqUS3RN2VuzPbkkkr4CRKfZbL1oZyT93Tk4FMEYkDigFfnnd8W31ZQFG9riH6Uh2DfRhMrwceeuY",
  "key14": "3bRZdhW2eT9M5ZgJxN7hBBsRATXkhvrwKriVKntaPHKWcWiLJ6fFa5uA8uHSn6XeiMWriveMYs1LZ17pT7b1h4Qw",
  "key15": "5LsU6tE3tXyJ7YiJi81N4uiBYX1MjwQxKKDePbzxc3xqgQUi2rJC4hT7cQbZ2Wr3e1ofeV6sKM7QQydQ5VgF6h8Y",
  "key16": "3zwWoBTCzrzAouJ7DyNcaAe1X7qM82ar7gSQRMGCJxwSyPW9Aug2ngxvS76LvyrNNxsHMp428ZhaxfAV8kFEA8n3",
  "key17": "3wajumKvCpV42PiVjEyxoPG6CJ58VrKUwqSf72W3EnevQLuKHhcck3tV9VYkWQ8T9K1uyLARXhfoBm4WrwWo1kZe",
  "key18": "3XidkyxVp4Ci3H3eWam7jStsZTPaLeadG9uMRfcuMf2RsqrYbMQGuifMZ2AisVZKZqCiyE4vWrCRVXGWsFm6c1GA",
  "key19": "Asyg8BrRQG4kUBFDEdXTAELQExggX5V1PLpZhdJaz49QDP9HbFo4eDT5NpDYBGgLWP8SLmJzafrCAbsfwFmio6c",
  "key20": "4fnFxquwoGykVq6CHR6iFT5tdYuGZ2A3KcEcC94bMMBGccsVqMmuVaSUjvBHD1XqUPrEzQp51DTiKDZPXEQqjFc5",
  "key21": "3t1yFPpeuaAtq3o1ivS7gLiXHKafMUCVU588cgqqvkqv8EBEbgmqoQ2Lfi1q71zTmxproKarq8LbnUUDYnNWaY65",
  "key22": "2Aj5FNdkR7oRtG4XguqXnsQRyzWforgs1njWQbYDnSC9uhqiAknfJufr1RwBxgTecW1rCGdpL3XdXHZM7YfNKtko",
  "key23": "4qTdTEfWE4NELYeatDa4cwaqfhdSANuVNChDhYBQW6bqYCEMmwvdnVGn3mddTJtr2KqTMtBmNReKsFWsZsLfvEZ9",
  "key24": "4s5Tj13QzggM6rjvCgyg5fNeeWyToxFHAQEQHDPnted1yW4AmFQ6PiHzijJMYzk2EPz4huxHRZt6XSex3STeyknk",
  "key25": "2owMF6wHHj3bzLYzu5yCSwexkJ1F1wuEP1hoUkYtEAjj9qkCcDCCCetJNaTcFYpsRmTo8GzPqqycHGM4tGgHadzz",
  "key26": "3RRZvcVv5jTvhbHEE5FA5gzP6FTgJi4tfuz3NBEnjN1inLK3CjuZKrLQj5HsqHw5f5zZK7jYrJ9CnFFj8byqYk4Z",
  "key27": "PuoECQcrWbCJTKzP7DQaW1UgjQv4cHuhxxULtKerjzvK9s6aECAXb1RiDSHGGGPNv84FjcWNM7KHwobutdVjqCV",
  "key28": "4ovLuPMhFxu9qWC7oxMy2W5BXLpU2UhGivSDzT4e7XxruQBXBaaTizRiiuLd4dkbANELAoWbzWQGNhJHc9MUYtRM",
  "key29": "5a5oUgj3v7rhkxc2XRgGhdc8ZaLDGY6AyejqxDcmyqP5XsnNniDaaAjzsLR7nhPhnqBPgZjWneSbRKcdRYmiDdvF",
  "key30": "2wmdJSfyBhmfwqybRQGBo69G4oD39Aehk8Xc23XHPCuiUdP46pczdfeUqUe9v1xkLeS5eGzyM3fQJAkqxLuGqf6F",
  "key31": "bjYyiqvkJoWxmYvYXR8zC86DWJ4jJ8z482P1mydkxcufqyWzLVeLGBZBerxqzAwrjg1sTSSTPCa2T3YQMShGKL9",
  "key32": "2BWX89QiEkekcu9zayXaKRgkbmfowK4hHBP2UP5CuawvidCA8q4wpXG2UUGb7q2uzVHUvomtY4WZm6StxMfRmidB",
  "key33": "4cpyZSwdFmoW2CoRzNzDsWDasVw4XUXaNPSLGcQNBWwb5Mxcs3T1nQ6vgcA6GLuVrnRSTMpr5cRrsCkWoNWByW2a",
  "key34": "53CDshLtcpbHwLK7hrRRkAq5HvQr91t1WEBr8CeJeqtn4Ypuf4U5E4wuYXQcPw6QPBQjH4UT4Q7hYas2grtiZ3Ub",
  "key35": "3pwsyWNNDkoFQ5dmQvJXLxEM11zc9798cRY6MR9VFcXDxCvDW4r8YXSRCLdL2kHUTtARoe2FRbZc2g4mfNr82TgZ"
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
