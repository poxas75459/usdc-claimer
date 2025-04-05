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
    "WJcAbZv3HPHEYaK2G4FBW42H9x7auSy6DnLjG3Ut1vNJepT5VNKSsj2gMaZdZEy4TYq1kiywEz74LqyHPjYAG1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37vhKdRiMmFB8H6vCHbXGuSmQk2SJvLo1dL4aVsbXkBqV388NdUiz8hLzy2UiW4kfvr9YDAzG4bsDKEPNko53wdC",
  "key1": "5Ng87xuGC8bQra6NjEsHd9Q8MViZnE1cNLUheGLHvmsFjHZFt1n9bECsj2dFGGz3x1DKzcLmvX5C9vaEFf4t6di5",
  "key2": "uhhZH7Pmfx5ixyjkdjV1sCebcZvbUTmcctMZ6N7gDJmKsDrRqGxPDiPo8as1T9WFh7UV6J6veRPSYVjHRGaaYYc",
  "key3": "ECKgk7AYB4dP6XtEYD552mS6uveycXnm8t4f3mWbs23tv3gFCz8cYMdbMDjSEisdgoMLbsHtUFvJGyniVkFGmK1",
  "key4": "4fMTEKzDMX53kCgNjbEMSbJjnbBXuFXGTa7fbRBpbdYoE7DtT8Qqp8s4ZqaRo6xZCTS2ZSGGdL1Sqekp9HD3r31Q",
  "key5": "3TT4tUFoDiEaudyqDpWkPQ8DDFDvC2ihdJMDBxyWe4xsrS8xWuWKLCym7a1pGpamEi2k4dqg5LobreW9gaePrfmx",
  "key6": "65p552tZmZDQvHMLBqztShRFkaH3ZWg7jVEnny4pty33WeHx2otY1NFVWcq9npo8e31MFnCJk4HtCEofBRUdwr1M",
  "key7": "2Xpk5kZ947x3MuiKnhqCsk4Ji4BLZT9C9YfetXcou4AzBWxxnnsaVpUHAUVykptSzJCozFB15ms1oWX5F4xW8Hzx",
  "key8": "2QhzkpFAZTmRkhXVWJdh8Bni9LhE6rE4hKXSTMkrWxxWuBLQDPF7GRGCyW5xP6avcr9eVX2sjGAAwh3b9sQvV2Vx",
  "key9": "3oQYkTgKXzvKz8uyiyp9DNyx8DADkWeM7dPGTxgf47qHv5sx2RBdzHFccfoS8fWqUd22WjhZgPcKfGPhefMUa7md",
  "key10": "49mmzmfRLxmBHwMNwDepWS34ZN5GW8oZ9CLaSXMveMP1BGsWha1XFJfaYgEKxASqL7qvTPqDuXvVLk32LJY7bxvi",
  "key11": "3GKSWD2C6YpUhcZFGLCnJ2LyPh7R3XPksbYr6pWFMqFkGbbLFmYCrwpLv6vJW7dQALwxJKxaFAs2XsBGpNxtxRon",
  "key12": "48YHy4FNbNCpMTv8yWAvBSCnxzrSVMQrTkeE6egFxj5LvYNVwyCp1vRC5YaHBJ9hoH56saoYDvPNB2hFSfchMbhJ",
  "key13": "2AFHryDKk5RCb7vWLZa1BHopRpggvaSs5uPVGo7uwgvNwoZEVMmm6hd4avV8t8Yr1e3pFLizxGxXcfEP6rM4aD3W",
  "key14": "34EvLRvRHwTRbDQeXak94mwrQLPN77XnfKPJQNFS4nMJsYZFxRxuy1FsVYVYPHZjFcncVAti1a7rSXV24jghtVAE",
  "key15": "4ywkP5JYkwJYyw38pAbT6S2vu26B4vrFBgN4UYVC7Y7UaMe24EX2ZKFBMQUdLe6trAeuXuHYSfBPoRLHCYe6c4AJ",
  "key16": "2aMtCghBH5HNYroMoYWLRX544CyZ3s7eiyafzC2Rd1PwSHqvkRj2WMrRpiTT2W3fBGSNRxmV5yyf9Rze143PJ3nH",
  "key17": "VL37ncQrWAqcAsi24iyJ6DeEQ3ZFQXYd2uYD3uN3vvannvCTz7HMrh5FqD8mVdhzEz1zACwmek4q4r1SDqJr94b",
  "key18": "3ytfPtT4AzhSPApVH9K1Sh1i7q1j1EFge3ciGRWA1JDpXJH5QW32L9rMg5RWqwNkefkcWZ8LrW1uACkLuXmjuRQj",
  "key19": "5mCpkFHUcKFURiv26RY8XAkngQtCYm4Kj1x4MKAGZECkLuF5BCpkcprnCxbt4wX2bxo2NFCLfBkH7XiUdu5qGfqh",
  "key20": "48hSJoupTmM69TrBBLvFKBwMoNDcNiNj68eoekgWPFqToii2ezQxDrYZHQC14GpbgHQKFqcPbvooDU5rPpUynMwc",
  "key21": "39WwgriMRGfucwcx6pTE4reqKP68a1RXcrhPxDvinz8wrZZ8A5emmVctbE85aBbQm75iL3hhJ52tDPiMUig65hpu",
  "key22": "4TVfGBDUwUdXyVmYUsuzA8tCTRmbghKPwt2rpKLe1EH367nzAWngq1FnPDCMwXyozgVrzb94UbyDNQuvEczq59pf",
  "key23": "2LRfZB25Rs9uJfAwcGB8Xk8e69Q9eMsBUoWM3pJ4d6Rv6HEtXewz7qQTjoMLn9iPntn8TnNCHGzDE4RtujEYqPPr",
  "key24": "2t4FqnNXKotN6K4794metVRDXZm2piWpcM56gbM87j4PNZfeQooDSyoCrXyziTTZEdwyXs757HLXurA7Emfqmx6n",
  "key25": "5tJqm451VLQbqjzeEMRPdeLThMMhFaHSDoW5vkKLAs2uGdutRDKhbR2WVAHxDRAgBQVBMx5t7U76XbAnNWLbk5mN",
  "key26": "5TU6KbRMh21oV2nBSHPADqjGvFW9mPCBvWqhA2eLgMzJfq77Hs6H3L26wanrKiWtg5v7MXMD3gUF7YZk5GXM1mM4",
  "key27": "2EdBHfq7TEvDFowXJnkhtdnpa121AqZTevVVGCJGCRZX8YiHrjzE4QThvwDDvq4xG6DcguLrfne1pBvk15ogD3Wg",
  "key28": "4aBa76hnwbUui5tLj8XecKDrgpW3WgnzjLGoNEt4LpoNNirGci4FX3ecX3YDEDQd8m21iz4tQdyxwjDPZq2a8Qd",
  "key29": "iCGdNrjfkgCzMWPXpZPkMwUSS3uWg9P42qKDEm9cspcWoGRPbEMzoDH15EnFzAp7gy1VgUkE9SqzLin5noAJJzt",
  "key30": "ZFYFfCfkKwySWkUGVBPieoiAsSZ2YUkjZ7YUoj65reRi9TSjQqxv3YbjLgqub4dWhEFMVC1KFcs1jP5m5iJkncm",
  "key31": "EPFCpNXmWQ2sJYZRvsBg5YGq2uCaeBUU2Dpx2AS3EUuwRWD1ifrTcVPC3uZ41LP85WFNL54zKSygnZ8HY3j3NXz",
  "key32": "ER3Cu91ugRtvNe9bfxGDnto9Lh7s2SXYpqi7H5jBrGgHYNJZynG1yRrzgFwFQfDNiY4nK1AXpymY7QP7kzSqqq3",
  "key33": "YvhW9zcNLUC4YmWuRHaV9B7hCF6ihu64t4JfdCuKNzTDwEjwduAzXvSY9yTke6bhEEWkvZSEyrBxvdTwcEmqVL6",
  "key34": "vpuE2YHaTu8vgvrVdhQAs71u4XWXPrHUQj5dTsQf1z3x6sN9qtG7LNofE3mX9GR9dELMRWCSp1HwP3pgHFKXKTg",
  "key35": "5n2zXYJ3GPxb7q8qUjYwYH64kznDENzqiF48gQUtXphkkF8xF51TwxLVcdkGFxcrVS4mUziYS7mjMk9S4X1SZC2X",
  "key36": "5VzVrFFGNZvyGsdabfM1cgCRfELT9JqzzyS1yyYqgX7f4ouAhV1u9nA5uKtbfJDL1NfV4gzqwN6NPDBmerUpykmM",
  "key37": "5zZNMmKowTHgnz8dSfW2Z9evrFi4GK9XD8eDyjrqkJY72jgjFLMNngAyaXbLfKkLmCFqGtoxtkZsPXfYkZGZdhZy"
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
