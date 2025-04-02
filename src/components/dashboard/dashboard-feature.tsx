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
    "2xztUZgSoQdLptAnNVbqWnVWD9767MHscru16zUVsaM4ucUbWvRBRPfcC6H1qDr8AyHWAwSK1zzMGnTmGvM7eLgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ucNJ9auMqdGAiFpqjLx85M75418oKpYpe2rNKPGAFWLqx6u5mGPskdyZxvjD9aUVh7dv9FqwdvrjKwce6zVb4Xm",
  "key1": "3AG4TfDQxZfkQLRLB1suSGUvNbVgjywKzc55gf4cJAQQBaSUWM1t7NDGAyQoqHL3wwer1cu9mMek1ij7cZeaVtSE",
  "key2": "4freETtjCnsCT6AGk7FGyiuVroQM43WzjuDP2NWEweZx61n8dAcWS9pi9FXXAK8TpvCF9R3dcc6pLdTjsEsCy14u",
  "key3": "2zdqTB2cYw6E5LCfg8ycFqDBRheg8YDAdcyQa8fwri8FD8t2HmBcipHbw4VovafUkJeL2F7JezCpz8DKBuKi3tKX",
  "key4": "3MeJduF9UfG5Nb5eDrwkS65v5QCV9AsQgXyx7aWmq3ae2o895wCVbWQThhMBvRsbhA8ANwr5r3GAJtcMT3SHVpSi",
  "key5": "3KrZCbHbNDDYNkpyVE21EXCKXSD5bhXaRTFeYngrxVmjNtiJYBf7u791ds8oBaykftvGWoxo3aoAHLd3KtGnxqmZ",
  "key6": "4J2mQDWKLQiAscLaayVboeuAYFaWpzbFa3KzFf6fz9JVjYgFbzdLQ83kqZtEXCmNuFX3w2XgfKtcN51pz6kvgg4W",
  "key7": "4XyG9Jp5fTXAnoRTJ8sp4N9z9rnSb5ZtgtzJ2hmbJQtRbTM6e1MqwvoHZwYnvc428DPPHfo2757Xq7gHk79VoDnY",
  "key8": "4Wm9KUc3tE6yCuxhXfQD3CKfHFDdNyet8ZpBFgo2i5sLX4FxH6KcEfDYFXmTp68Aroo9L5n6sjzyqXx6z6yCiQ1p",
  "key9": "4KfJimbcmKDJKq2STgDYeCszyEEyp7aP2PzMmFgWvV4PEtLB4qRcqbeMxgUrwtyipBrNJmD2H2h6RPWhffnYHPB4",
  "key10": "MLjdqYYj8bGxnZXtWvWcvmwPF6Y8BH1Fgg8dsyvNpdn4CeY4pw9BvhfyHmE5emDT9LhKhWfHJr4YRWa9jSFDCu9",
  "key11": "4eVpA7sj4jaU6k113jW2VRSPt2zusQ8B548STjsZPZ9cVCE3otyAo4qxKeNgc6TMJ8SLdp3rYFAWX829dQUxdmpW",
  "key12": "bqSnCBX5U8FBQcRwRorwxp1Q8zdgApGRKpn94ZZizxGWB1nn2aFKSDP6j2FfojNYXndjYWZi12fjDsyBrM2SHaQ",
  "key13": "ZuYM6e8XmqstzKLLGUWogRPgxzhNm6kCR1LqkxEo1wZtSrMUwPPEZP7HH1TPmHapAze6b9EUgeCmrPN2FEAAy6z",
  "key14": "3Y6hr8PT8WSQLZ5uTX8ixQYFXZdVoPbHsVtJxPjd3buJ2F9ncQaruTJCXgZfN9DDow4mpgTsLccZtAwfGbsymVJe",
  "key15": "2HMVeAUpV4MXRkKf8DWzgqUkkiZXRCsu5Lt65PcW7BW9GQHNfQFXqpy1DTRH49CFk9Co5mtVQMdjcvKjxMnyASGA",
  "key16": "21N6oANxryxc591rPERqJVkm6KmLg3Eyaq3ksBjVbw5SKoUSzTQx34oMBpJfd1rVo9mRhFL9w8RW8CqkjcZZNpgo",
  "key17": "2TeEWhQyYo1NfbXL8VjwhFws9rJEQkF6RxP1q9P8AhGBKy46DqB3Cp6NNN1GV4Vu41P9oDxjPosyeee8NkCPHEQJ",
  "key18": "3fgy7PmEtQq7Bw5s5cM3wGn5EQdAANCoJ8b9bZ9gLxmvoaE8n7SpLRcGtfnKRfzqfRLizwey5h98wqWgxxpSPQmJ",
  "key19": "5inwSggHQ9EQUKKbhLNhGbmT5Wk5ZiZsZTcyeLuFEGUErnJjHsdzsGWthoK3LCQzHLJvCmR5Qg4p6WeNJBgUKYBE",
  "key20": "4bJkkpgJ62MmiCWATgDsuP59KuJrVtZhjxbTU9EAsAFFTPr2MPVdPH7mB8W35VwFoc3a61xcf86Ux61TTJHPFdbV",
  "key21": "2DaWCVkAFaJdnXNgnpzxQGx9CSxTN571bqJ1iiiNguV6hr7JxqPoFnGLKgZYroS9BsgcK84kd8QMX3k25ZUGuFCq",
  "key22": "3CtXmjcB94heeTGW398zUEjsKy9fedbwaj2TvUhnspz7upqezgdmHsMwi7gSKPUFk6gDGYMWaNEQzyZbQRFZG2vn",
  "key23": "5JWvEC4PSa8TiBxovAYWcosvdYJkJogQ6t7E3cbowcj4GhaYCp9AU16BqJk1R7HBYx4ehuYQyFL4YKfpJj2chkYD",
  "key24": "xYqPTTbEqxmbRcdpPENwVGRhcv2tSiSCBUpNDnnGcfnYR1VhD95qf7M7MEFwjNyRJRM2yPpZmSKknJG9DqA9u7V",
  "key25": "jMYkdB354hkbxeVKdqc78GAyJBEyWmZrybf9UVUE4r3JvXMxBXsSrDcjunYh3X94dSYxtu22yhpzpVuMuF42gBu",
  "key26": "58TjkUKAstQk591R4umV4W8x7gzZp6wHSdFd6aMQsWFwL5NtvfGVs2EzRs6y8jS4To152TfFVv8H7zPQFWEpCfLx"
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
