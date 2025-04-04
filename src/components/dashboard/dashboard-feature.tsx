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
    "5a2BuvA7YS8apMbY8pcmZDxCGPp5mcrmEpkch7uU53SzyKWBzbqRGXE9NjtiodJd4dBdfMbaxctG4KHtr5dwzETo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BqMPkSCRkbnYd4xvGdaZXSQCexjL4NkzzpQu6LmEsQrgBtUkJCHXGsRCAdSij1hWbAHA5m3zMZCygx9m9Hn7CdF",
  "key1": "3vki6cxGTfWbtpg2JeXEjuNVpTJFEbnbWtTQDnokwzqj3ZbGaFwshMcETAHR9TQUYdKwqBXHNRh2nKQRN11s4xCW",
  "key2": "HLCVq3pnDd6go4kUoZXEYe8GcGcFBh5wpV2vnqy1JepyHkz7DQe1EVj4WhRs1a4vCeRzLQgyBWMdLzEgCvJ1rBC",
  "key3": "2zRa8zoDJg3ZG2dXzEieHCx914Hb82qSx7i3yFHZGPT3WQjWDgCnfVYjt2XBh1sUk8paNzbx9KEFfE6A4kdPDswH",
  "key4": "EvHR33kXnYNs84CvX7wt1Bu9vsDh1Q5gK8sPTTdGnu3JE2UbnN2pHFtWdHFt1MwpJGwJAifg466YYxwh1htk7kY",
  "key5": "5BSRf7g37B2u6XJq62q6NZZ8EimJACAXVMVS4Gt7iyW86t1jxoBcdHNFYdCGhMBqYwNxcWRtekAoV33jqpXBTwjJ",
  "key6": "CiphFRkZKm2Sk29HXXYSzRFRLPQuWNd1pERfYEdxDJPByfoV1LoY4QeT4Tw1wKsqaqCcsHFy1wBM2qs1DFutk6a",
  "key7": "3tVzo8VTLkjekZ1K4ZgDEYTtgx1jnHdGLfFS77RtAntkbzWeMkgCziufkYqa7xU4RHi2PXpCKoJUvSfiL95n9DjE",
  "key8": "HHYHt5U5D9iqsThmBAYw3gRaxv1tXdj7s9UhDpatgwEyCbwnveHY3WMEz9jCwXTz6vYNgWEomFRDFWt7jmhR9ye",
  "key9": "4h7qUfjoExbgRs1bgVA4u9URVdDLyZz3tWLacV4uiRkLQ9ggpz5dY4o7AUwbfFeDQsGr7tyqRA4eEcmkHACCPCqo",
  "key10": "3p2DnXGdZ3i3SYZ83FZdECNCHBwQKpGb1B3FpwwkRJdqM4GTawRTbbzCwnzqf1oehjhpd2qXueV9aRJGG9b2Lz5f",
  "key11": "yHRpnZW8M3Krtbvu92EKU9dMMCs4kewyavfYAUrcjmW5ZyX16ixZA8Vi9jGXbGz7B5wU1LqMm1PbR2YsKWNv9Gz",
  "key12": "nrzGtpiRx7JXtBajAQMW6b1GPzgFBTPVycn6oPznXonHuz6EGGQACNm13VhQqLKCYkhif5GPMHPWrYEVDsDGs8o",
  "key13": "421G4uPXxxdRb4MCdHZ2LvN3xv3d52fucsnkcm8tja37StgLMaxK4YNhBdkRFfciATPsHiKTzW2breneqvHV8RHW",
  "key14": "3axgANuRD98aygcpwvWhFFJLZT2iouCM1V2ezXuBET5aNuVJSrhpHiJcCUusHAX4WQV4AvQMJrh4va6bGD2SJNm9",
  "key15": "5ebzAMKJLdoH2MSnKM3MBfYnDEin469RccCQh89E7sgpJx6SDLWYwM7RvzUkoRaq7Zb2csnvzdzv2T2djEab2G4u",
  "key16": "YfxLd4g5jCGtUCxEjRZE8tjneKVMgH2A55FnNYE6UV7V7W5eBF5tqDvgCM8zbarwVMUw2hj7gCyz4SbFkYtz7Vx",
  "key17": "2vbtQ1hx9FVQqStYxCbHww8mHdeNBjF7NMUyYMtqdGgR4mJS7f3CmcPzUg8N7knbobap5NKzzTT9Z8uxRQLJikUK",
  "key18": "4uJTsQuEj9uEShRySgeqyyhrbppwYzVqNrvaWatV3AHkzLkaf1S5Xs1tuUU68wE3DnKZ7sUSfiegEPZ2buC6a66S",
  "key19": "2QhJYVTcgQioun1idZkhWVDxXbFdtSnBfkXLhykuHoJ1txdhVzkoz2LEX6ugE1bSWp7Y2rtXnpe4dCFwjZsybSk9",
  "key20": "2Tb23cz6kgZQMTWUwWQPSwuc93bPR923icUYMaYyhvFmmdbJiUvdpsjmkXdFQgn3ChF4JTPt17hEtQX8Zy4MJJ62",
  "key21": "62idPsdLbmRsWxKEcdEYKq6t2oT4iVHrNbUxg99ZHqc6vqnebDBjXwsgWgnofm3v4Apg1s32QRXC6vaAksGJUp9p",
  "key22": "2V8iVfAxtHcjs5RbraktD5EJhFXeVc8h6ax3MRrac9xz2kZZwpyQQBRvm37nEogR6GiBjpLkMVdUFtkoHurTYMwt",
  "key23": "5kNDXfQk6K2Wrz42njbkfr2EFpy5WVV42HRBkGDj4UrsRCU9bxke3GNpDymRDxJoVnGDg4jTLFKWcekP8urAkiTh",
  "key24": "5x2BL1kbsRZpFPNHE9YQvh8Xz3bNgMuPXeXvRUFoXijmFnqQ2L2BsMoxP8jo2PybWPQNQiM9uZo9uifqoTo6E21S",
  "key25": "BWZsu8Sihmnvurys96Pgvp7oVty7U99Ptf1ZUoZAv3NV73Ec74djaA5cKbLsRs7A9LAgqsUTHSMgUMbtk2DKmVn",
  "key26": "5FXYpjDU92amAyfipReHbswm37jijZfUNbD2bhUijXnjPgwZVS9B7HXbfCmJcUiK3FKLuPrzPkMxeemHSGxKX7hw",
  "key27": "3KkDoNwkbE7QMpdoGZcm1kjqdQVSWNmA9LeaLg5vQGvnCu3BdY4hQguBb5rCgyzRiPtnbdKhw4qwXxATWJX5DhDi"
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
