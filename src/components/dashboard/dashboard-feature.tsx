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
    "35xvbA2JQeetBn5pmeRq8HCR7zn3hYV9MNCj3mqXuQS6CwpVcRdWrjX9Rdy3dBncgAnNAjpfX1xSSpCBznnhYMpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F94z3TBPH4bVsYt5fuxKVYt9kNQND88ZiDiMm7znvTfArDKtqWSsQBFbN5DBT21zoDq7K5D8MoeDFZTFnbLYmsV",
  "key1": "3bX9Nb1sx3jM4EnhoLke3UGPV46o9nRjgM1MJKk9DxTP1KqqNmtpTvnqZxZDDbvphkWgbnbien7VUZoPxB7GSz7W",
  "key2": "52VaRnDKcWfD9RD5jhnzXzE5Kie9PoMbnCJit8LgG8m9qKEgMTHLTC1tdSSwLphvErsEA1BLoDakepz4ZcMv98Ku",
  "key3": "2VPhK9UJN3HLHRf2ZrmCiTuY2iiuHzNouV9ANBfC3e6AUk8v9d8kB44RJGJ49ZaHVkP8CqFVvvJxep2VK63WuQoc",
  "key4": "4yVHAVE8pYwezFEQcKhDEJm1eavmF84oogmZ7Gxq6MKHrSoMbqDp8FTuGNLyN4DoiHAiazomR118f6Rojgh86u8S",
  "key5": "43n1xFwa67xRtYRBmA8vRchSAgqNa2P8GTvZBR1g55oCiNmcd3wMNr8hJXfMsMB5poqKH3Qt1teL1Psban9JpGyB",
  "key6": "55ZHPCqQxQp2cuLy2bHzPVNGy5gHiTydw92Dq7eoSGH7Dvn1YBddxkXTsdfdgmEVYFU3CZkku4RHPuERaMzKocaY",
  "key7": "5mSgQjwdtmxgNhuJUPojeR6Q1dzNTXnmjPVEfp6EMYmRz2Mjwh57QUrCgWumn8cSx1dzs4sE71DKu9RBeN6hJsQo",
  "key8": "2AQRx7SghkjqGKC4hv5XoezyQBVCwJJ4pAg8nUDuSWQJz3QmVknsQ3Gjx9jyAiWrxaMtvrSE6PeuefkbwHsFYuJR",
  "key9": "63P6VbxxViZnBvZDiupC5CJAmALXMxArfirVoWGumgtsBKnGEZsv7CvirtWRTYt38nRhtX14nHSwgpAYQLWz7R3S",
  "key10": "Q7zsbUYCVfaqTZf8GvqJ5PCqVBDVRJZZHKs2PyS97Ls5rgq9cwtzDvYQmsq2hza3NtH9MRLVjf81SutLmoehH91",
  "key11": "5edd7Ly2kURgfjTRvCiEQzG5FhHnkzQj5UxoQZackoXBm8VskdDhXhDboW3nCJJJMAbg1d4yiDowwYCHz4vhRYfX",
  "key12": "3TEjoJkdW4KdwUDPx8JPshsarSttyzLnHsu868BkLiiEThJXiipN7PBqnoLftYvcDfWbyqkC7H3EuJoSytN65oxS",
  "key13": "3rQAzZKFqu4BKsc1Q7zjzEM5FaQabKhh32BECrfJXibGpk4XZCn6ggMSjpZC9qM8445LH1izs4esXzqRd7RH53Wn",
  "key14": "sL8d9yTtqmwvcJtkiZw5xZAwKn44c3Z5K8JQKRnD2zkXTXyt98D2UXabxJNf21d5k6bfa9T1NcFmm6x4tcN4g6C",
  "key15": "3MsHhDmYnvTUS3yfeJtVeBUv2KEgi59VmhNniQjvVKiUzPDn5cxreve6RuMdNidgzDJXQqwSmrpiqTeh7b8y6D4W",
  "key16": "5toSjgQC5StK4kF3Q7ZL59kc6NwUCyGbn9Th2xuXBDRNLPTd8wQUZZUAmXKLxgWYEjfodruLzWTbbJBiJ4bfTAjY",
  "key17": "5wxhidZEAPKZQRr9NvCsXmQGtmTd3QmQzdr31QVyxvdaFw3D8gDBPU8o7q8Y9NLwXoJUoSth9g9mTSkhPxDu4u8G",
  "key18": "kR5FktLxpvquvrjKsWvxJ65oPJtsnC4fNphccNsUa5zCAgD6q6a4QDKdxuXQGQb4vZah1D7gSbsgy7cwbAszd37",
  "key19": "tvqEhPWqMpVmA7io7GA976xGmwAqWMhYHbjBPce1itN1aaBAeH8BBaf5wdnbWRypjCAH1vMCAyFLyQcFxs2wu1D",
  "key20": "3eoDwhW6dELoBMTc8XFd9n4SeFwMTLkfzFfEJ5czYdCroR5JerEBm5SXWDMsVUwGdmA7pHE1Vv98Xr3jxS3Z5QNv",
  "key21": "4es5QwkZnuZNJNXUrvZgMnSJfSBEUuDZzKdXdLqXqJL7r1guQVEYW7nKfBndGbWNvXBcUmN81etQ2BtVQ8vosX1",
  "key22": "myY2A9YkWjYs3dZdHnfm8dRPzvwc2iqat1kGDGhnq121HMkNAEm86xeoNZt1EjcMiCuAXyaUdyNHNgHe9wR1Kqe",
  "key23": "2EqobqK1fwNygLbsJLGo7nUK8CR2uW2kp9MKnSG7aqpxy8J9QGhYUxfGYriphEv4qMRHmseMefX4zYNzmiNynNu4",
  "key24": "vu5VtpUesk84DQkPFViHijw82gnC8xbDyUeRbntRNvyiTJRYQB8LGD7MUSGCkrKC1fCDdkEXHhz2p7cTXz4z9EM",
  "key25": "3cEyo6xDcBsDYvptE3T5VfGhJynoY23Zpd33QfNCgnaksoyn7zK6nnTNvm1RSQ2eWXQ8Ep9tBrfRCLcmfvu8gM2b",
  "key26": "52HEvABzqR3Yp6cWKsFZkfV16P9F4HthFfL1m2BBSa58DySKT1urDzoYBGEiBh6DN4fhhRaWtZUaY72D4nXtP7uW",
  "key27": "2Pj6DrSncqmKLjwiY3MRwMa1WPXEg4F4b4VKbeJHoSDqWLMWvYTkg5fwYK5MHkHe1PxrxqYgmSS2GgPJks6WTGFd",
  "key28": "4mQBbH9yuvtkLEceqTc3ZWU5ZG5Y4WWF6KrEXgumzQwZrxTCtvnbv6HKfVfaLDVUx1dBrTUYNvrKVFW21SbJ9f18",
  "key29": "412jpfEMCFz2ttCQKX1UxN66CmGVFTwnRStMCSXK5EN7V3bsvhodPyG7HSLwH6BwcynA5jbEJkQ6GN7CYWAkucCx",
  "key30": "3PBFyXgEpAf78yQvcQz3xEx5N9qRiDhcwV97TEnd5aqYBjnH96T9Xw7UgovqFzQpPnjfkA5HULJix9vN9qaE71Cv",
  "key31": "5XX5SC7YoimYa8ZgoXn1Q1kSYQM15y91aKdRBdi7guQ5SVZ72xV5X9iCNhyEdCHyKq2YScsDSxdyUVXjj3icN7SC",
  "key32": "2ssTn2J1Nw8G6XQCYxEZym8UiJxa7RfdQouY2XmNMfZp4DMBFDFUkqh39rjnKCEuXJJwx7uy1rEFeybXH16MiMjG",
  "key33": "4izQNvVHXMhrKUL1faYQQdqYNPiA98wL559AT6t3qDuA44oeGyeCMw3gtJXswCVRuJnLHwbeYwfLhVftn6MUj5M6",
  "key34": "43ByAwcXVmP2tCEJFaCRP62sCdHfVpJMc1rYbPEcSNKTmwzxyvsmtS4oRPHKwQPDFAuMfCq99fWpmVEjv7DAsXGo",
  "key35": "52oKiG3cd4ZJtG1mz4kWahBK7uAroSWhyDCU3iYmxL8yda9pWkYhKVaYvEgMBf3GrbrYtKHuFZZT59yKHWPWG2V",
  "key36": "tjmgHVnzz64PSbATCP5ZexJFWPnfSWfdK2FWi1pvRwam4gS475i2pPNZBZcZZz8T9hMNvZ3ns4hbRXR85L9zJDn",
  "key37": "2ggvzgrPA25bsVSGWX1jsZqDt4bhLQo4gE1QgPpxMhyDzkWGLoBTr3BbsLbbe1XiscjQCQEUsFK9HGKPoT6X8JBA"
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
