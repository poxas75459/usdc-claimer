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
    "22fTm9YhLTUyKJRcfn7SKMCPGqRqaXrjvaWXMZUkiEyHQYEZTg7MAhjc8daWHfZ4o57SmxCBqJmsaPcRfCWWFQLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jkxKEADwwwVhrBYhokdgZwHvdnUgLYr4fk6U3z4UnUhBV6fAEZGsaxjvpFPaFeRaxdjp4ZVcwAxJBtUBdQ9Xw7d",
  "key1": "5qK2BUBuVS8HPQMmcxV3EeYZwxXwYoQDHzwiP2LeheDrUYdYSiQTVfDixndJkfoZKDTx3pgiLGFYcaJuVGZ254Ld",
  "key2": "4uCBUHZuprDTAbaFqdW29bwscdNrUB2Dj6pXGdierL7ZFMG6SmU96Ei6a8dJB2a6AVFsPnyQKveCrEMtoAJfDRJ3",
  "key3": "4P2fM73zoCMaQen2Sb6y7v3uzPc5G8iw66AH86yc687Kw6DisMkQTsSBrWWCpqQ3ARsQFbm7395acxuBTwPoZZj4",
  "key4": "2diRrnXVCK7yJFCPnTzC4dk62EHtYRLToqM5K1vDzy3pB9YXCu5SE4qe6zzbx1LpJ5JvSqxDzXFJps7UULT3JtcN",
  "key5": "bh8b5mCqSMMBXXtYDArbDkZChbjFH9mY9ji77TFLg1YiDTjAbrpfTac1XfnxfARhLsk8vmP26orQu9L3qF4y97w",
  "key6": "61JRinQNHNND6RQNYzY6cF3SUSFm4b1g63BNuH37XRSevCW65ZzLLnRHwYVLU1eUdwMge6udpQhrCj2R4uTQwBfS",
  "key7": "5rU8YcgXsxHAtwRvLgyUpfiXCYLREbq7caBQpW7JL4YHRVQvwdpQagBn6UGz1PquotcWPUejtTP7KqQxeg5AyijN",
  "key8": "2EKk8BwhgFz2r6twLwQskQeiRKfvKa8XZ49fMM5cNFd4CvPDnYgproJNNXTQ5GyzmcfEtcBASc2XWbyyeT74jeRC",
  "key9": "4dFd2z7aeNUQmApbfgeT2pw9hxnjxWB8vgkkzsJ8h2HExBMEnyycQPcNsSgPUegEUC55gNFCuhBz1FaN2XmmVw6q",
  "key10": "67SAVQppmvUgLiHAk9Cqa6cnrMgD8krPdn2j9xKQy3onD6thY5em73JWeHcn8tvGGHVyR3xskWfS6iX569vTkwZ9",
  "key11": "3WUtq2ivEp1r6SXNePxqwVNWDWfkMajAeHxG98o4BaBGawUDPjPDiTidAiy9A8PfJGUqpM7atYftHjBeEZeejTYJ",
  "key12": "zgM47Qnc5PPvfDZ1kvdcHUFJusjiCSZR4VnzVLeixQvSHgoBh6S5sciAUW585hhEgMaZ78QYGZ3GT8kp8koJg5x",
  "key13": "3r9GAhFTBeAZLmNhwPoqKeodpjK1oFTWE9MCX6Bkp1joy5xVxLo5cXHWJxX6qfc5ULeae8KNUzbtAiJhfecTQ2vn",
  "key14": "2wZJ9bTsL6YJJkkw3QgTxTEqh193CEViHwfHjNFaHHA6WZfb5dAYcoypsuD7BnDtAF4LpGeoaC9vnCugnrg9rn2Y",
  "key15": "5R1XUDp4b8n7nvvCdosKnDaD45UdeU2Ju5PiP4pnz7PCM4vHGdjzTmq14SSJEm2LRxKkJ8VMnsBufDT248MMdkFq",
  "key16": "4ZtBAF9J2JY4aSCo8XmzsWNZjEQBuqTxh1DwMbwrmhjhf6a1P9W4Pg4xS8gNdSdRkgrbkr1APghHvspnC5F9hSUc",
  "key17": "5zN2NLqsRccYJyqfSki8d9Fupie2kvm6UCpRBsc8ebH8UpzZ4je2UMEgvAMXmf1jjgPVSBrkF53TTzGhmLF63e9G",
  "key18": "41jB93cLrXMtwnrKgDEWRwacyjAUNo3QjzdTDLVpp3EKXybogYna8E5MwudMN8B8wTEUiewFQEf6h7NPk5hr6xMr",
  "key19": "dfKp1txjco1kcxL83oTHnUwJQ6rqyRyC2wQgpPso39yu9bfbM51qtxpfDyMftL7tb8RuAtNMLJ45NmP5N3LYSpF",
  "key20": "5XF964uFy7pJz14FfxNuJvbxdiFC9cPPEjwsXiJGuA8YaqZSuGNKcMj7BjfbLroSwvtKE6h1qSqFA9gZtGuosCGv",
  "key21": "2pnbXWGibitSq4BBiP5mTeBqjHn3L8XVRSZHYEunU65Z2Kxjs5vRJqPQSyEuD84iGauUSitih1sPewvbH2TZEtdD",
  "key22": "21kLDAiFiPMcTXuUCgkMUE1r1rBvvJKdDzc2Szj6QxxHwkxVQchXwzaFmfk8Qpoid7HC5koQrVFhddmm7dWn9VdA",
  "key23": "512ZBtrQM5m3biJyANkJEswvCySDgCtpFriwe7QRbfm9WCKuKis9NjbjsBgjm4MeomcoZrNJ1xUTG57nxAqpdRTj",
  "key24": "3C43YGxkXWWbS6vX3WQddeMdT8DHkz5oSNLyjSHDdjtkt3eEea5ET6tUQo2YHPLP1M9sdvwWjXkP1qYZ2WVmz8zB",
  "key25": "3bZSTLyN9N7c2XAXTsBKqrto9DnR8A2t98vfbuUArwaDuFkYVsL1vQHrj1JgkWwA9EA3KAAk9PzaJQSXXdVe4Xsw",
  "key26": "5rMHDJd9AUsD3F3WJXKqwLVe7cxQhFUzuMjJi2hyxQ6eFyxjpWx2yqGn6uM8qstsK7N2Ddn9xuXjqa1VfF8XUqAL",
  "key27": "tBw6kDRkcRE6E6DBtFBE7bdtxFCvAwN6inXBGUQqfUZAi34YCR2AjLM66RoSf1RneGFCUC3E1fTJuX7vqHAtvPb",
  "key28": "2jqj74g6NoMwx1XfTY55AUZWb2bvUB4ycSCtpKFb27SfLhAmfMpZCDpTGZghWP7qrjq9nTJgQL1aPRzzQ5Le5pCf",
  "key29": "3HdXuyYYZrZcF9wBbDHJKC3U1gUD4gPv5phgSnbYYB6scz3B6JtxY6doWPiZ85TAPT94EGj4FfCXyTxReoY8XiFK",
  "key30": "5fzrNdhx9jR7iyckgderBuzMLbgtcHHifD1nguXkV4Gu36EbUnTzSQNSnvPRF6kxr3qG4o4KQVQonyGsGqNhs8pU",
  "key31": "5KEL1hL1nyGTsxwYfsUz7QMF8efzZSMg3957nYwgHuBMfP5fqn5kHnLFqxresovnp72dYecheEoP1WSEcCa2pwbd",
  "key32": "5GktqT7ZLALXs45UXqXBGUZ7wRpiSKnCGx3RdPVPsaXXx9hqsMWN1EhYKETscLedrPbh14qwnwGNK8MWNewERFw1",
  "key33": "3d6QNcLQDYBKaYc4w4Q322q3GagoPMKfgzG3qpAzHrpzjRAbVs2ByMAMiaynaDq6sMntthiXKYEEqP1AnWW3fFVh",
  "key34": "4pHatgL8Xc8cCnn9Tu7RiNcYUda55RpWPWMf82kKWNdJrmBfUbpLhRPzJqoZiJGWPc9SSzURrE56cs5mfDahaDCM",
  "key35": "2Arxi2jfkGAw8LQsBMLyGKS2i394CQPC9s832gnvpx82dRwqHfeuPXWp1wU4F7w7SG2TH7PT4EPF3DsUbU1i4Vya"
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
