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
    "S6VzKy2f82w2eiMf3dqWtXpeuKs1shfnwv15Gq9EweYFcZynPs423SLL8CY1GuJ3MMnPGbJY4YwffZKYgMCjHf1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iainvsQKVsyqzwGFtCfLeKi3mSDJVbwfhd8DhPFm6JeaGpovMTTrZtL3FuBLq888w6vJTkegDsxPdtkhK7UqBie",
  "key1": "2MwNogoPfGFP42nGxzZDcjez9CHkWSg8tPrvKRyXEcV7pZKoVAJCj8keBeT9MnDHGbXTYvNNbK1Vp7CpsjvCat3H",
  "key2": "2mxPS1FnVq9NrKsEWNpPJkdPMqFtV6F8pPDkVZkETxeKWRAULhE64kRJaGztAuHLMPWzVrVKoYMPzfzFUtuLeydA",
  "key3": "GhWFeFDLaB1PHwu2g4Yh1GfZx1KxgR7qNd1CEQQC2USrrNzhsDWAzWcLiUyHvMqdzDf8nMiijFWsrKGBcjMuCCj",
  "key4": "5S84jedc3nHcCZ1WoA3Rvm3UjANKPx5SXGyjtzYye4aePfmFGzryHNkrfHyezpibSqnb6MrFg1VS3LQtN9VoBBST",
  "key5": "2Bj7ZQVTzqCGKnGez43v35o5YNGH193YAt9mQKipue4Cio4HpYm7Kzd67JpNCPJw2ifrotRD5NtXghpnhm96NekT",
  "key6": "24ykpq195kSjWWzLNa1n1YSzmG6k4BbjsnahY2HH7eiFfmRSuMM4LNEogtp15tqbBjsy8HVLs5HZPx2QttHLS6m6",
  "key7": "2Kp69rrfX7BoaoMtCVZDwnwYysnU6bSQxxQiKKyXQQZZV6SwSvD4bNkM6ueByBd4f7uWB7QRYAGmnTzYZQCacCsY",
  "key8": "2DvnjAQVzDZWJCQ67XNWTCh4F68jsqL3car6KqZvQa173Kv4M2yV2HfePHwmQUp3GqXrRqnRcgRUS8N6DJqvXpCS",
  "key9": "NbkWGR9ozqaUq1xd48RU7XQYwdJZ383vuDsjRhL6JYzyJLdN9uVXR9WtMwVHUKHvZyBLus6xMfXUsqwsRnTKsEv",
  "key10": "4pYFVerZ6YWNCNgdcArv1Vij3uArpKRExqCUqm8Ug3UVowPoutotGv65h8aH1ZLBVYf4EJsVYMgLcYiRQXfy28LU",
  "key11": "5q7ZUMQsKjiy44zEtTHkK8UB71pKFbx1MKxR99BFnCurLF4emzPeY5cUjKYrBPY1iPnJW5StZg3vRb1giG2Z9qSv",
  "key12": "2MdK1rMajG8kfsguy5NZ2CQN4TBHuJdfWcEcM5eXDn2We2AQE732CZB8qKcviUVasvw3wEojq7wJXzDXY8wdNrvo",
  "key13": "4tqFq3Wchds58h3EBVEMm5ArkaMg6cuiexHEwm7NmwBtrh4sCBaWPUgCxxQo4YJJ5h8xv1niDEfXbC5SHfyqbk1p",
  "key14": "3F2bX6ixqnw9nsHxRUAb6nzdzUttM3gJbyiXKHcrJN8jL6jESzRpDFKyTaCdMcWkpzKdvGXp937xTbsqjqerQSA7",
  "key15": "5Ev33aU4gacnjmGF9nYxTn914g3RLGA1zsY2PoXKkfPKysMNWajoP1x3jmZKW9aMDoWTbZ88c3P2JFbRUwzWP78r",
  "key16": "3eZmJ8qQY1eFoiCpPueu3yFVKVG2GNSYQcTy5c1NE7rjd8UYYUWsrmuWnCU7HvrW2GcBPZypYt8FUkdo3HiM5GdT",
  "key17": "4uJFRL4x19ZC3Ku6tjxpNeAbaG29FRpbvNFutmAsCt5wFnhfknoAQEvS9U6zH8pWeNCTpA5zcmMw8qoNmR3kWedf",
  "key18": "246H2dZ6scKH1KE7JNS4Zsa6WXVxi22TvLyfRixA92DfYq5htzBRafcfX7YJAMhUmM1a7fzojPozRzTjTag1M4qZ",
  "key19": "4Ae4bAPCLXxe7zGXWXV32G4BoX9fPuBVkBbBr4nTTq6aNAp2z1iLXgM372TExQd28LMR1maraGuiTAxBMtbqR4CY",
  "key20": "57Mw4LFX9fCtuTiwdSVsHbTB8UYLbYjLjsYemm7Hqp1Tr2peNuuKq3sE7pgZHCkd8NvQa1eMpDDJjHZ19NDbJCPF",
  "key21": "32d8f7JKLoFE4vVEGFuNcTz9hkBg7FyjQcxRbdbQPwfV7kVRTRh9MfiNEpNTuSvgB3RGZYfXfH97Q1zsevhirnkg",
  "key22": "9Ahhv1vw8PGuCGdKvEP4ApJh93i1yTn2Zo9kgQNPHrgUNnCu2QPARp15Fs6BFPxoAL6nquSZXgs1BrPibHifcK5",
  "key23": "57pUvbTx6baQ9adE3PYGeRpQY8FuAF67YKt21mStdGoQpfJuGchCwQKABwiBcG3FSmZpF5qouM5qcy4tKCE5mrSz",
  "key24": "2p3g5TeQbaudhRbdgcMvkBxJWyVruqDKZaWZ6WHjwdhNbTSycyKpeMTEnh1XV1rtJEEWWb6fLaZwE2wS6eFB8Med",
  "key25": "g6RY7KHt9RzUUopoWTr17Mnp3fbnHk7GbJFy8ZBnF3mDzzDebexVhe3nKS7qjKnfnGePkVL3Dz7A44iSWpwKgoK",
  "key26": "21eATQYPj8hBALNuHm2ymjfzwpQFmHK27X56sbRWwsj8PuGJV6hyJS3wtxDz9t223xcWrX2AFaGWsXGr32zZx1cB",
  "key27": "5SSbBhx5rucdR4a92nAiBQDbsBoHWz5GV7vKGb4q5fJpwQ4v3h5q49NA4hGwzUJMEcfZfJnNyocTT7xiHws4beaV",
  "key28": "3tRcQizeLTtNqCEfCwcRDnqQc6jmAUqEMpNtc5NAgKvELGnFFTbSZY16TTJo4oYTZ2ARZ5yhp7B1QwCCX8mWaDm2",
  "key29": "XJqfYKRyy6pzYB5oYH4N18SWwPBumF17ifh2ziWUaaHeY1UVXhgwqaaNFvkwTdb81wdg3jUs8Atr13n5SNNfkrY",
  "key30": "3Jb6HVcRjEFVT39YgWPFsJSTMZSiYXG8hFPJWUEYUZ1f8Zq1tnMRqXGkMJEv3vFbQDVnKCesGRrSZKC758jiTtic",
  "key31": "3yuccZD39WWpGao5X7SytYJawd8FdGmmL8z4ho1M4bnWCZJQNsTNdV8VprSAE26ttEPBZYSj6B4W3A9JxA3qbkRW",
  "key32": "2q5ssT3juAoiG1vuAyyaqTufJHewrTEEHEMPF5AN4H98xsk2vgDfXSENPpBdmiDq9eZN3Tjh5RXd97AVAWpsCRtK",
  "key33": "5PEMQNaiWXwqrjaMNzg7HWv62LXHmr4Sgbiyou4MnNHmmqgpjTkmonSDJN7q7zS9P4zR3PW6UiRY6AUu3dNA6pu7",
  "key34": "2tXhkFemfijtwr9oRNRudDduLwGZEkGdhyusQYit8aGYwq6NmYf5Y3dKvYNEwXYHRn7duYgrM5vCAXyd5qadPQpM",
  "key35": "3aaMRm621K7ZhGNCB23dhzaw5BKY7MU2TPX6hkF8wSsfDGH42TYf2P8iAmMPYuMEM2s6xKiuDcLZZ5SESUdTax2n",
  "key36": "3jknW2DPe5BMxAvLWbD9jRfMWUtLhYJqTpzqRG4vMRudnLY8E2uPTWUMZ5TrJroaszGxQ38MyxPxcn8PUruiqvDg",
  "key37": "3RMX2ce8EFFvHr4ntUvjuWxUvkV2nZXmPcUtv98cg86bveU8otpAbaFCLZR6oRZzrth1sqaxckMTP62TmUN4fecQ",
  "key38": "4EEVHMkQdBK9BeBRjQMaJUEfbPFGicsA9URtGikjbWZGq158e8wNEgrgrTmiPHyjqFKXcECtJL8mvkbZzjNjXKtU",
  "key39": "42XnZM8GWbgTtyS4ZZPdLCeoL15MoHSUmRHywUUp7ejrW8xxfLEGYqkgx1B9s8cy5Hmve3tcNBb2Xf3ZVdJcCJZK",
  "key40": "2JePrPLD9P7VUEGUkb2mUgQmxPFiZg9AoVpQPppRxg2TaFi3yt5HbC84qG47RAipY7eK1ZbE8YjKsVXoJX2Qvb6W",
  "key41": "4iU52D7EimpAa3TrRXPYEWWJA6ArtkYywiV5SGUHFFXTZyYn5QwTeFbbCYongsYrmiacUPLmtb4esTXijgSeJrRT",
  "key42": "2euzqfegtEoyZg6vhfcxZHxSLueS3SKj6ibKiYLYvWZv83GWZ2vP3TQhcRo9jno4kVzHLVqqSQTghDfXiCthGaox"
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
