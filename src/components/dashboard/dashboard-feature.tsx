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
    "3kU72WxBtnGzoF3JjfCnECB7FPo3EUZDmV86u54eDNz835vV86sDpq9AvsHpE6kZGzLsbzxxCHPBaA2Jq3VXLruJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "569khZReZFxTffgyi2Hpukrcy1yRmwSGPUKJc5gb6537FSBYGJHGjk3kUsah8MeqonMummXXRwALB19bZrc6hVP1",
  "key1": "3YH4YmKqA6pHCxHzyw15iFdDtYQLXMgxLF6gvc3mKeN3DrsJgPa3pm2kLmeiHwhxGxzzfjZxMUvPMD1BJjFZR8XC",
  "key2": "B6ZKPMr22od7DGvuZDxfKYLfDn4eC691uMqAr5PCUw86YzmnvMUTGLjkmYcqNa5Nd3oRGGuiMXk6DvUJNo3YoDx",
  "key3": "k2ropSVQGHapFoTs4dxju74AADbykKFmyGDLzukubEEV7HVdJL8UUHUWzeH7wqy5RCvYENYQqsf3pcEpBuKLZac",
  "key4": "xDWf38cHKpucjYzNeYcTnrCsrUZayYfXUEQasKEYk6Dt325xn5whkqrNq1mkvTVxWKjQLwTNbA8Tiqpdx9Sct2f",
  "key5": "349odarXMPi6BV7RyfztwpwzXXbhMHidcxJ6BYbKR1fVEKP9TwsYXivv2PyFqrnokRauRP4CQJs4mF2zvmxcN4gS",
  "key6": "2yL3AKYPVrtDaWCM6jdpj4d1VX2FoUAcjEs2afMK2LY9r48hzBYzwi3wiWw9QEQVCg6XnsFP4N8tr5E4MsPwTwW7",
  "key7": "4dBV7M9Yoxxf5pyXGcojr475e2uuzwj7nCSVFn8TDFZVDEGUMZgBzR12z1u3Nc5iq2WU89Nfmz4hF3WdqKJFH4H3",
  "key8": "2tzPm1XtUeWbxtK92jmW4L3Ay4B8ySoHFSEYhX6WXDud8uR4giEpHCd9umcuVgynRfWjL6AZnvVRE41PJmQ3JQkU",
  "key9": "39MaZQqoaAt574zeaxvQTzX5Jw2qaMXUpbRjsKzni8F4qcGKu7W3a4oCYUxu6bJsynDfXpwVbMnMy8BLxrs9cGFJ",
  "key10": "4qxxbCfqdCHkvcFqF9JUh2GEvKh5k4Y6ydjoTEZinYKEn3TCjK1WgTCrr7ZaXAwWDDLQ6NSoFSQPd9PyH58hz2eJ",
  "key11": "63rqi1TdhVjcW4dgH3criBKz6ddxT8NTKRukTssR9PZfT64iggQobdToXdzJX1FAQCPmmnqNtVGVoqeRtvEnc2hY",
  "key12": "5gNP7cMh455H4LPqFobQ7qqhWGuFUGej8AwfT8n4pBcuLVrKGXgZZ3AMPt3KtZqKG9tN31GAmhHpoBx8ChAEn1uD",
  "key13": "43Tdcaquh3d2opsbNGv8JzsosXp8tmeXmrpmjXxuXd5nK8Sq5kR6e9ymYfnbnzvWphUpabjQ6uax2Fu1TyTkY12c",
  "key14": "2rev6LnBG5WySGzmkwqYEYFV8eSnkpBYLw5paspvgpimDAScAajd9JzQWeG4VB8sjqug31RdHB6oo5ozbm66VQMY",
  "key15": "bDtJgKantzAxRaKtvDeaenrbXFsoTPASuXq3NtB2ovwEkrduhFYgKVEVvSC5fJWt7bJ99K2mCp9cKfP57bkRsuH",
  "key16": "3shXCj1qeihEGgyURBtpBhEw6vNoeXBNVWMQ8L6YtfaDgaMbUF4SfehMaofynrmFWZqQL2du5TjAEXvTQyQw1H45",
  "key17": "616J81gF1ggi5tLowha3LurAu2MwsDZVxJQmVAZtU7nw93LUrCo4LqACC4xg9GFaUkh57AB3rNArEYRiVFYjNrrc",
  "key18": "4ig8JhBPfKB8cs4QY7UM59LkQDu2VdCLfuupWjrCENGPkcDpfFbqJpTcTZe7vTiFVPXeMANSBiH57c1c7VJ1TZeh",
  "key19": "3tGHbgmd25zeniQUMV27YRe4Pt8NYU1noez91FwZ6XfVFLWuupDwtgTHEEWMo5t4Qqsm2d538BQyiiZC6ifMjUb5",
  "key20": "wnV3wzrdagCBTgMB8u69RuKh7MFSDNfwiiSWbRFuBR75sGgYm7f5GLDXoyo3FV5GWLeAdHEyzW29sXMDpPZjXik",
  "key21": "4WXgqfJCgbehjsRixisPUbdCZ8qfF217sRKz4A977HLG4s5vqUhtFwGPitUPFGU8yjhRw8NKy4Tf2492tf1GCJmk",
  "key22": "5oXRPeempKji2Da1XYgGBJGBHLzSjmZHFmhFfwG151Cg5qPFtiL4QAdiS7TMVENBhidoMfEAWABhaeSD4yaxPSJ5",
  "key23": "WtiECBk2Z1onLhgWh84uXeQYqLUvdDdtpLpFZJxJ1DWmDSBaQDfBKjZxnt1getAcjTifDAaofXBZ49tL6DDRsCr",
  "key24": "3fVn4Xxt3TmLdAs2MaYjHbiMigNHjQkHJXHZRUrHrWmiBQgxM4ZBGMSv4cJH25YNkaBCtpZMG4uVwJkuKBDNQ1mb",
  "key25": "3XPiXaP97Xn7okd5gBUfHT4GNvNtxwMFwACiHib6JGeLfsAZatECFU63BBWZDYk5NdHnbepoXShwgmCpt1Kpwjo",
  "key26": "3FM4X5DeHugfP67p9Z1FeqKgbVY2LTJmxQm6Hs2GgAH6wopFkh1iBgJK9Pnre9reHpr134FNL1Rr1MhpERLWHEpC",
  "key27": "Y2UDzqQe7ZZKZeMAM2eZuuJrCsxdMdW9zBSHZ4vBLt6tAJ4i2RxG7tdpiHNF1oFTRGD2yTHVkU3E5LxEiCa5JaK",
  "key28": "5igf5L4DzsYsVdoGEQnTwgv5Qx9QumYSDqG1TYBB4QdyZrYkc9AsY6nevCkc4pYTwSsTYYTMKppL9y6GDjaGEwfr",
  "key29": "RU5aF4hY6DLKeQiMsEczXedUeZt6ofZvUnL9o8fWwUzU5PHoi9Ji8166uEHEhTFGjPG8841pFeMs41Fy7SkPJba",
  "key30": "5BZFHs29iGPKAhwyhod5fNcYYCiJ8bLZP5zWoQcZwFNyX84wyqdeFwHcW9DaA3FUzTZUCmFNK2qKAqzg1M14Utz"
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
