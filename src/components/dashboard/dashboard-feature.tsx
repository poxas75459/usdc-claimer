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
    "2MYx7m65cnCZpWQ1ikJUHTgCGXrpYn1idVShKdWLHcHYFe7opEuZtRAiuQEzFZdEKUbaJbXKfMzxNiq2so6DRufs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wu9furReAR7wt8kQctxiWyXASLvY6FNzD1gc7hUjd8uentKjWYL7KuzPygKGEfrsZCcJtk5GDr3Gu1bhYGDsZdj",
  "key1": "uFKAX9TMp35D6RmobqAmMK3RH9z3WFXjPCu9tq3xQ3MbMRee9VCujy5KUvmnVyDJpjr5d1qQ1CE7fzhbiydyq3N",
  "key2": "2Nn8A3R5899QaEs8YLYfGMbr85d6aTi1Avqf4GMPLuC2W6iLBJv3w9n37zcurc7xxLb9Lih1bLXgNrvtmgM3NE69",
  "key3": "5ggt3Vc1WoD69SeQL2pXUHMSQkvwRQkc26vzwsyQbaXhGoEqn1gtrrwnUVYhtUvCzbZe7JJSbVm4KNfSf8jj6cbj",
  "key4": "UbRB4HrHFhR16ncZHxLWxo5EhvyGcr4EKLKKTr2wrSu8PFrWNTnJPAAdMEXkbbdcQh7F3YucF7Mx9C1YGcHBNDf",
  "key5": "2aUhKEMLpsq9PYZkLNZySGmUMcbH56bRrYhzp8EiUgRjdx2FBUhG1U4uSBQWWNnDiyHvcSFnyDkrzfvHYFKWyhim",
  "key6": "2V1Bk4YXJgn7Ms562xADBZE9g2N4S6RvjpRi5deZghD5P62EYw97oofA2US6jRqDavJyTfY8GxHVpMY1pxLLCXbx",
  "key7": "3oUfjRzNjc42AAtaA1yoCT3bLgXT2s4XVwFzTK3y3Kex1WrLSVWNeotvgWXyoH4STqyTk9nPJ8QPY8MLfUMxAXzJ",
  "key8": "nRovNfy2St1Df5pYZ1BCdz9ErLxkaFCTw9ouKVQsnM7BosQ4i4FXK3FsN5ENDb8dVsQpkpNrHCZWmpQuvoABKZy",
  "key9": "4A98rDxy34Xm4dTK8pF3Jq4fT3kEydujGDwz3cBUW4khve5nNWBWLPcJR2rtBZC4huSwjYGCVe9CNTepLuyP9RyS",
  "key10": "3MmqpnHkeBKVuMGkSg1PtcvfDotZL9bUiRwbNeBksn9Gy7cFxhPPb838zxB8qPFKHTrL4pyaNbXX3biaYRMZJj6D",
  "key11": "2BQgCrPkTsSDD2Y4xworRzES1j3YCExBtXqKX4SE6RaJeB7mKL2dGyprjZw4bSmHDgNua26WuzWsbtxeX9p6USGn",
  "key12": "2otigGWFe5aug5uZWARDx6hntvcNroJ8sKMwaPTXvm8Ngo1erevi47iGQ6dYAVcodUHTw1hLd4yMQEk4aHL1eG39",
  "key13": "2usbPRa2cnZ9nQbR1XgAfdbT5meARhbTUB948jN3qBszUeptNtsmubda8hDN577bkbzMBfEGtbsVXfyZTFboN3EP",
  "key14": "3b2sqJY9mMJ449p99K3FrNLATtK8rgYyDWT6o7L29wvvR3enAz23Aowg4PLvua46XTZehdeC7fj422J2X1rzSf8k",
  "key15": "381wHW7r63QYpJxR7TmofaenHwpXPgVDwG3cXZQGrDeZYVASwJEP5Aq6RufwV8iSreJCYmjMN8phW1K5xQ7zXGa3",
  "key16": "2WtZE2XUmHKByJaiFki4z59Ldy1JDSz3AH1aA4MXPAowx4oMrwiGoG97iBbtecjNLQ1J5BRw5xhLyHw77zdCaHPG",
  "key17": "52VrmtgfdkVj4cQh6CCkmzzKkSxioAiXv39v2SpYXpuVsLXLQfRnY2F3TkZTtUEhw2GQunBoy6XaG2cu4JJAqpb",
  "key18": "gb6CPDCzYmpvBJq1pRK9DuyAxExvgSQGnz3jayaviikaYDHaQRztDKm2WdeKNkmZSqLmU33zH1ECgzdV7Cw9CfP",
  "key19": "66j4XbmP4oyQkX4iUSmsuaxMnntU2dxyirdXSpv51XQhGWETrV2z7Q1qgkdFLB7MeebJASMLuFmMutH4rvPrpAuv",
  "key20": "NRbETHQ3QDZscJDB7jBnNkBtDP8Pd8n92rPJW2STVxqDsdFToR313fhb7dG7FwyRKRuLqsfSUuueUBvo2MqCejW",
  "key21": "4RrnuLGmxRKgWW8ZXAwbBP92yMHeGXrEwMkU6CBz17H2epSL7iutDtALzaGDYpFRBcMZff282C1TWWbeS3wFJbz1",
  "key22": "5dAJ3N2A5aZBkGTDwzGui4qY8bytwQ6H4aNQsyUbUCUsGAcvtwNPR7BU7R9R3TfLMSsR9cEiQTsVMv54agtUc57P",
  "key23": "3kBHhh4gQYYugsq3cknsdFDdGNih8jTWjuuXPATxj67RXM8YsGkFRH1eoz25VBepbKprtyg4zJSynP2P6K8uY9Hs",
  "key24": "22Voa6oqXgAYQBa92xkFG7SzWqF6GDwk2HfmcB83EgqByyZ9HBbqNKxnCRLULxB7m92nhSBJo3nMd6kUQpUzzopU",
  "key25": "5xAxcbbDLXDvkQhWzH7GnupWBv3t3WfcRG1t8WxZELg7KuDR9PDxdK5F7DV4YLyJzwYrm8eE5t8KQE91K5Q9QeJg",
  "key26": "bg4gWN47ko7FfwUEQWNuCTkzmfJ1fVawo54wmSucFP1L9HxrBhh52KXVPpfJUvGTssCsPAWNMjqaicqDTEt2zZf",
  "key27": "5uLcEjNZktPZeaVwc3X5s6fQhhoXZo4Ln4V3hHFCpeke4c8AvpUKF5yXfjyKqPXWNpmweTGSmj6Fop88f9JYoERJ",
  "key28": "o998NrpVnwZ3yxbnzE56rYhTMCYppuvZPbBZokBSZR8hFR1NYGYPD1BrM2ptYf9o47eSDRXxwuaTKvJnmQfJttA",
  "key29": "4mQhiJqtM9bQM7mJ6JgQSdSqjuquSGDZ7dfTBAY4qz6Csrb8J1fTvt7oKycugVLfCcfFzuhKHRkcyompSF9pKJif",
  "key30": "3xrzMxDikqMeYp4KxDEyeJ2QxM2tMAxDuSqUs5V47DwK7gpqBhToM3nRsDfzEDdAQNmVHE3pbT2pBxmLnWUbHa1j",
  "key31": "2zx1N8pJRaAaNUwqjexb66rJ652ydW59ZSuzE6Q3SUVz5VPTCTQsLW81zMCdYwebnNTEoLMqvpuegSRLcRaMFury",
  "key32": "5BWX7VHkhhND6TghVuW4xgBQQYkU63puPwUhnhKeZ1J7kGGaCu4SQVCMpiY4dtWwDfSkoNho3SfC6jpqaqFc5gJt",
  "key33": "4ikHLfhw1nH7o79o7nbv5joEEqEi6aGTcmTYQRdSe2toHo5espqstdA7iqqPTWQUc2srDvfCruh7ZvEk82yqFiC4",
  "key34": "3c3wKdhZDPn5LqqAQ9ZCyH4Az1cvZpJexq2MvkTncE61nyND16k8DCtDaZ44oE2UowmW1Hb8oxYRbCT2YVfGPy8U",
  "key35": "2ktkP5cvwAvVmtPnqpbGnbm3E7mBWuiTb9KbkxE51Lm4WAqSQFvwTWFoyhBoQv6NaUCFPurAu9ZDQ5iW1B4eHmzw",
  "key36": "2Ke2DCyYZ6b7jFwu7CLTvrCJWREUqiApBrJFL3s1NAFeZAvpSxKEGt2piues9Hb4WQkjTnHBNvoD3zugPb98cAnm",
  "key37": "5ZYmFkhpnt7DoBpo4WFo6PHDTWUMnainWpJhQEhdQHfLT3ovdAPwat8oYaJMYSFJVpuXqFw4Ay48fDdsmQyQHL8d",
  "key38": "htztGSeymHLSPGVXdfSsQCHnVF9ZsAZZAUViw3f4rRWQHXnXnNDWfxixf3hsubRbfJXe5DZmZUqEmj9LhDmXSEt",
  "key39": "2j29NVGWwRANozdov1Luri64X5QTdMCxY4bsKE6sZJ7CDGZnXYpiZn23XcL9cNMmMvTChKyVETr9ABCE8TbFXPF1"
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
