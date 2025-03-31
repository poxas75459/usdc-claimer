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
    "4DBmhHw8KvgFtz4pcW5Tttfu2Ji3zxTXXmYzpMwUfFPnYqwqk2TTWw61e2U5s4GJMvCVaNXH4PcuP563CoMPzSuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c4JUbx23xzXZ6YfB7fu8NKwYCSWGgZunyaehH3DGwNh3rDBcatgp9Lha1UNmWrdsFC64pje7HUYV4ib1dQucbE3",
  "key1": "4nu3mpBvFdQM2JepaVpvg3RkcNaAH3EWZJPLASpfE1RuarWhKVm1duruvH1SThwDFSK6NW1AV6gZDYKy15JKRQqt",
  "key2": "ZXXqvy3W9Zwep5wew5Y96Tej1Aq7aWweCr28LZJWZryHwozscVwf7fckcAkzrsKQFyV7HJNFYLuJMdRZyv8MAm3",
  "key3": "2HDdrCMaqc6RhNNmMEs2RpFDZ2AYzXAa6nE9DCd2K3LXxSL9zR6J1Xka5zGhW1vBb9Fqe6G4HsmcuqCzJNjbWfb7",
  "key4": "34QttPm3dJqRephufKJx8WAQ3tk1AKHFdBoq4LLT858dnp96tGhSgY1PyTa5qFjh5ew3BtSDDqG9HCYNX6nnd3tn",
  "key5": "5CktqJVjZLcRn51CcyMr55gBhkFmxo6uen7JQkP555vdrMSc6mjwMMoj6Pz4TzcjJ7JiMWP2bzmyB13mVidSQ8Bx",
  "key6": "2jAX3c5LFwQEu4rg5Vx5JNz9Z2jjeF39qNJEG4LHGy6q8zbn5PrShiQLWQF3jQPYHEwv2HuDD8jFJvPQ1P7JEjD5",
  "key7": "5vVmvpsfDjJP3fE7QSEVSynoKmQbdjMSSzfF7JRJXgz9xe1yjoPidCEtGLuGCDdTKD4trCgN53Vcbtne7aNCGufC",
  "key8": "oCQ84fQe4BLb8aGzGcZCeKazhL3o84MQ4TdzJhNAQAJvwsNwWgZDxPMaoMgW4m1UuiGAtCrx2v2YVpN6ha5Qxpr",
  "key9": "5n7cWDeEuz9PFvoFHWVva6jDuFy3AqWbwxbSfu9PvMpNeXAE1t2kLYBtpxcUVwtmYkEpqnQcaTLSiSx8wD8MZShV",
  "key10": "2Xjee8X6ohP3r57uQsKigDnsuJK3Yr48hrdNn2Gu7RUNpY45SoeAM3YCGH9o63VvoR6puo7WGDrvVFyFGsqxXUxf",
  "key11": "2v7FercLpabRmMgaErSCfn5D1Dr8bkfYcWqqGgJJLco3wVzJh7ubUtKpd9eH9ZBuHkrPAmK4KaFpGeYVzDbKEMAS",
  "key12": "28yeFVptKfu6KcvD156aXp5ooBunCRJwk26iYe9TBE229MUCPe6tkVNsQm8kxhWK12zB1ZWv5dTwF69ejzpiY6nd",
  "key13": "2AbUfJCqowuFdsGr4bqAEs2jMU6agmNpaEfRxzwFxAWC1HqJrYknzskM7HRjyiDRwRMk9LcSeTswprbaVEsZQzW3",
  "key14": "3BBPpg4ZPg2CNHrDVFCMh6oQodbz6yRQmkKMUoGKouxSqmhHTPGT1Y8or5vzytvGqgEssn8ggj7wZKfq2iDtWWT8",
  "key15": "3Yrhu69cqEzFAVkEQhU8r3aYbvRj2tEsaHSA2u8WYZVbG6riHXCPPp9J5srBKnc7apvZ2XZZkgvpD7iGM7otooMm",
  "key16": "5W6TRw5jh6KSMTHQ2gqzjLaGXmqPkBRdn6VKEWfUs92nYc4EbB98vvXD1vczy5MyH6GepKihNHgqkC562oBBuWGr",
  "key17": "44wd4PtGznNGHMFSwhFc9fki2sYWKrYU4Q5zm7cgLfpC7qCBEHJojrfxxnKhHqJidAe4aXDBH4bAwN5LktLvwmyw",
  "key18": "3w5KAeDA83xiGhpjTwTBWntGeK12XPYzZzDPLgD9Lgdm97dG5BD5FzcxCRxqnw8AMY5QRnQNUrf2CthJoYg59MWw",
  "key19": "4FoaMgieorBmpbeF83XRBbVQoxTyW8GQ72w4qWsBGfBCDjRKwS97NqUu9WuLFMQLve6M9pf7bPRCrd2p2W2cUTjZ",
  "key20": "3iNxGt5owcEpjZAvGk1Q2kPjRHnFwBWMqkZeEpo6LNDdxoiuqzwsKtWKuoxPo2dt62njKqcpGtySL4hco6hqCrMs",
  "key21": "2V4LNJnX7BhRDWpX2LYzX11LgR5EW46DA1k33pRhZAyW3Mh77iao3oEtyE5QX9xDf9ngMmnBFokGGrMpj5HeBRou",
  "key22": "VUhEq1rAbg98reqrUAn93cNeLSUpFs82YYeCQVd7JvAzS4UWLmJudC3uZN11PCV5FjAJ9KwkBEKHZNtMXCAZaNV",
  "key23": "2xEdbdYzob2ncra5Xkyfhzs9EGuKx2m9X6NsrynXBx7Avqnau3zJewi4xAUT8pou7B5EToLUvb4KwScM5q6BASjL",
  "key24": "4YRTLPeyiPsYo3jzsiW9KA3NYDMnjmzHvUAGDFS3Auvtfd7MQ7UuxbzwTh5rT6cFd4wXMNAPiRLtCABE3X9vsrBQ",
  "key25": "5z8wt2dbAmD8UokVqritrjFXjMwMU53Tt9jkS9h76DaDQaiM6kPtfJ4uvVkR4TnwJcW31roZ9Ea5ekxvAXHwfB6T",
  "key26": "4GFwPcrN2AAFe49S8FCXRe5ELQr6iJ3yyYAvdGWJHkVwxdymPnHXSkCN8gtoYJibrxqsea1C8wrCEPEHou7Vx7Lw",
  "key27": "2RFsdFiiy9skbqprLL8ffKYwSV7t77a4ux9ibWXiZTYJHBvEwTVZfNGdfPc8yJvF4QzMMMLfUF3ueK5eiazXuAVc",
  "key28": "55eFS7vEgorNM5h4k3A9ncAZvRu8AsQefKQgr7oiABik3m275LyaSo2Eb5ico5pV6wQSLeWU2bJG452tk8cQhW6J",
  "key29": "NB5ygXpKzb6vCsQtFUBPBA6VMfQBkkuVxQhy9K6XHodn9du2wGaq4GH8GzLE1bc3bHVBoMUzpYwmaqNdvQqiddp",
  "key30": "4d6wu3uiaKJWPA2pi3nmDLZewDBcfdkhR7BFYUAX4QCNE1dULy6pE6gpQPuhxoTcLCzVAVXCkjCNAD8zYwAUTbLb",
  "key31": "4Bd4DzPpafH2CuPWSNdm1HXq3QHjYxmwFmGMEaC3RtpuWw7xv4gzMCMEdEoX996YyJ96iqq5S2zebs6oUXbChgz5",
  "key32": "3jPphC1Xce1dVCBq9qqaedCTrgkQXN28tkt26F5RFgGGe3KSDT8UD58CHKe4MoJS7r7SZrRzjVgxTMUZ6T8GthVq",
  "key33": "5nKkdHGqU1Pi3c7DNbBMzkqyRSGFt6k9ESxExhZbiEVobXFzWAWtoTwkSRGmvZYtJcSVpcznUR7pAvaJQSP2ASDS",
  "key34": "4BT1xurarauBT4Mfwe4D89TcMt1WD1XkSYXBhp4aGxRqksKykujqZmyLLgpfBJzEFQQUWsU52NJBv3Ub34MKSiLv",
  "key35": "4GGwZZpPYS6UAvUAFHUV8XBSoCHZpBwJQdtaBvUw7sfPujY6nL3CHMru4HVHNURAj59f6YwUWw3MvUHJ8Zpj9i9T",
  "key36": "5qWNhpgRnP1qihZYCoboHr78d2X31zG6TJ9mABiMjACSPb1Qb3EH5wWexEkcTNghp6AXnfWwGNoT1zHiHfWCGNdu",
  "key37": "eFXWhwejK1QUwbJqGwSaAGynPo4nVXetrxnqWj2y5wEtxYfj2AzunqccFDUzZC3PLPjscu9nmC3wN3aAMh5xy5e",
  "key38": "57h1DTFjsJc5m4Mf8wGVtfsfjwUvY6iCtwuYZ9AaU3wcz69nEcQCsTF7t8UtfHPUiAeKQ3wxKoTBYho34M5sxtaz",
  "key39": "5dxcDCSBYxEXigagUUHvrW6iye5Svg9pbpDm5UcSbd7iCPqArphZSwaEbPfbfstSX7WQujxK9Kys6mFg6tof4mLF",
  "key40": "3DARTPdTbqnTCniEiKU3XTQZrHJGjMBci1KxcUEqgeuYMNSJpwch4CW1p9ZG9jfchLd2zWc85xUrxhTa8gXKgHgD",
  "key41": "4rmKFdSU8uoccv4FD4hwGdnac7rFxmpX7JMeyawXD1wZdgax8b6hkAjMqhMVRx9jUPDCBvRZh4DWyD1XVb7vYgYS",
  "key42": "39eJBkiyvVBSttyAn7x4TVBhZQfQP7oXzP2HpFk1D88umqfFtToDip1Shjz4Chkbpjb1nwcUyhHbDZRtEMUGoPi6",
  "key43": "4syWxzXodhFbBgHynGi8yU1fpdcNAtV3nevRFjGqEXDKsT9DnYWaYX19cRnLgBgRwgrvn7FxR9zpndA6FLyA7uRf",
  "key44": "3WjdkWEtPg1JdtWUoXsgAJsbVSmZ92WSTUGiTqTTFqsQSSG5pFZXFAwmmwmWT4FHGYP8jHDw3nCG9x4s7iBEFf9J"
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
