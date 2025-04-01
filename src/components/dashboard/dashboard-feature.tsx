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
    "21ta3qtcABY2uq6C27HPQ3DP9v5686idSkGSoGehMkEFXr5YaHqLN7Z9LbNjGGxDrCrqgBvk3ni7NJid3aMK4mHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EygPWkAx1p7wfYazHFfyoGm9s26N4u4tT46GNS1jfW2ovxYo45P1WyxCfHrMS9XnSQTn7L9GCnvjbMGr2B2bR2D",
  "key1": "pX56H4FLwN1miGCN14mtzyTe6Kgn6t4DLjJHidnZgL1mqPneypqSTicggevBdgyCbdzp8L8KE3YZxzfRRJW1NrS",
  "key2": "5kWtKpfRfyrQBo9Ap7zbDVe4LGno7s2dTU3KkRQ4jWfqbG98UnpMsYVoSKLRX7hTkv5veUXkd8591NEaSxudrWLc",
  "key3": "pG8TK9q9pwzxqEi5reGkfJuT3tv7DsYVsPyjNf5soDurxXaScH631qwmvrvdNiF9XiDJ2AEo6KJ2sgE25faz6fX",
  "key4": "4W15x8MfazxeMWmzygbT9Lfx7duiAtnnNYZBG6QRnbtj1EF8Z8Gqd7LuoQwoAKBUrt2NDT9VDvp78QJ4j7a1fnTe",
  "key5": "3iP5cJoxye3KWVR1zGTpYFTDMwRDC9okU1qmV429mjB7s2d3HBRk8oATfhSS8iuRDnLG8fRGdvW1fumFiSRyk4Ev",
  "key6": "bgmE26D4dqVzTfAZx4XwarU5soM4xtr68JjceFTJDqwGu7KY6btwxQBDJ8k2uDxU8QsdwiKMn7tfZHL8TVav6nf",
  "key7": "5C5J9Xh6BXudfWiDP6yLkVDZRS7SJ61X36XKjMavAkdnenst1MkKzCscVQqrsaZSe6ymzNS2yqotfMPvRaytQdww",
  "key8": "5W5cS4hYKsUCJXsbR1Qw92FWbYu6Wx17sjWfKok1knSp3JYEztHe8y7iLuKTQ7HZNFyUZcmFEhYrBr62fEAxD1nc",
  "key9": "5d64abmv73BescCbCNWq29aFjyC9AMm2gAxUjYg6e4S4dTaXEi3TbWzd3WNRYmLGDD9ePfp5BrLW8CVAHpY8dMB9",
  "key10": "2szkuiYJiNacAZJ1yFhFoxVzRZVxh4kWCoiDuG8GyjcLQJjCL7UX7Qjuzgziqxv74og4Lic1cyzRW4khHMy1dPzu",
  "key11": "414uoS14ac6VokfS75K3gU3o78UX1qZNP33ffGz9cGrwss77JJMrNoqA4K6mbCB4W9WhR8pi9TVhFrdCwJ2fg2hs",
  "key12": "4AADbiTwS98oo9kPMZ5zDerRwH9GFWL2xvgKD22PhgnXwJaWm7Mf5zDLkXwkq46ZizHsNDeHqiSw2mHPAQx1U1Cr",
  "key13": "3T9CXu599KDNUhurfdpkhGuMoP6uP4ZXy3Gpr4UbsiPNpCFtFFonqT5LC7pSySs6BbpXNoB334zcyWS6t4NCit3E",
  "key14": "4jQCd4maRupaBXM5KiDDJ5wik2kM9Q7EEoibNV4DoHMNpXLAPmMqo46hU6jhPP37QKCkGyQGZmJZsxqh4nnKgMRs",
  "key15": "BATKU6DCM39ggNbJsmaSVQMTKbHNPn9BtB5dQZLxwDQ7zWW1hV9HQ1NH2YsWm646iDAchfomtRDgb6K47GCjcxu",
  "key16": "4CC6H3pR2JpQACzKHVq81eRjmACUDy9WUuy9SJkqgD78JwP5o69Zsrf4PPtyooaGafPurKNoq3YCf6rrpRwR8JK8",
  "key17": "5M3wUCEypaaBu1HeR5sXHFEqwnhNEmRPP9rFxiJLYdNDmZsthchTszVmbbxq31R8wnwPwpEH6ykjDVm1WFHTXmCE",
  "key18": "4FTZAQhCXTM1vgV9XqSNk4zg2hqQxqQTUnJMzcCzmnkZoZyZoB1W3SZUodZbUCa9wBD35itRirZhHGNTJiUqScad",
  "key19": "g8oX19N1oWS5WmuJPKTNdLwbLoVCL7ieqxMRgmanJZxcuTYmP1uuPV87EiYLbxp28PKMNg6Gn9Z2TSvgMLa6s1c",
  "key20": "4yebZkpX4sz374XuzwFJNSUHk8zphsK64ZJbsmmaHm7nNipqTFEEPBTbK42b8Ea9MctWnG5mb1EEZpfaJ2kZnMSH",
  "key21": "2BuciKJs179rm89tfggp8RXezV8CWjuEtVrBoDqXZ23vfX8kWieyCbqzZV14j8nqpkJoaYusmsCZJSguYxQPgQct",
  "key22": "54a3NhppL4BALR6vWzedFAUDFERZxcvPPw3onJvZ7pEjT8nPMzt7PhaZwWYLZKc9VpCGmrSNkxRXZANRGtZNZxog",
  "key23": "5VGW8joB5p2jArxs5L84e7Ad7YUQcszquZc8RMKbtEzcpTK8FsCX8Hsf8v2ufanaPm29vCKmr96tCCHZMWURwWp4",
  "key24": "3QaKRRxn7aWce86QWjXd9Xovp8P19P9u5xFgWrMaoPvRaC2DWVcNwPMuNkTZorQZNFvB1fUvLehQRZHShCLprQWc",
  "key25": "3vh2SNp66r1Gh918xP3dfWnTTi5miB4GG4cq1HiTzHFGJREY5pwP3Yg5p61NshNhufHC6LYPwPgZVK1zsAB2YQ91",
  "key26": "5Cvd5RCT7w9fPxn5jr5HyN1yPpRjZAR7Z4FCEKagG6pQHSnC8GxCw1iRHUofCSeTEEi99CQXSA95Ww4XPvo9YJR7",
  "key27": "oHWUzbXaSiqcUWS6cenG2HBkmfvFbQsq92fXyCSiCaNUfWz7CTB8nUeSGuJuPKrtNFyH7W9ZQ7w2fdu9qeTUnx3",
  "key28": "4xE44RKDkZpgxhk6tUgp14qzRDvi3QDW64WmMg2LG9QSgPCnZuEYhVnB7LPd87xxBzoTGt6j69V5tLne7KubN1LF",
  "key29": "46esNsr5C7qsVvaxF7FN6GNzfyBy9Zue3SDXeJ5sXasmhKaewSs3qEWDSbSfbwsZ9jmdBgAyfW8x2MHHfByw5iMu",
  "key30": "42Z8BR4D3Ww4VBdNEkx7hew8Zc9cBjccoTUwGrp7RrFrX9VoYG6mZNR3MoGt4uF6ycJxndqDfAETdNGY4X41fRwF",
  "key31": "21JiTuUYCqtp5V8XcqZKbq5QfcDkuKLBEZURhfLLh1QMCCjTchmMcvs4ytHLahEKNMoKTQG2QrTejMmuzVyxT9zc",
  "key32": "38uG95ztsKE5cbShTdRrwaJrEJFcSSyHsYZ65mhsCzNfAEw4GWbt8eCvKim8r5h5r8YUhMMQiacnikAw7Urw5tTL",
  "key33": "4qJcsxUYFi9dWeUkbqYsvQpY42AQzgso3vF9DCGW9mE5SpxP5D3oV943ZkqYnqWNbsqmbTmAucgoJLxvh3CjuZuS",
  "key34": "21xfFyUCQkTbGDgUkbza5ahw79tobJEN1YdkySV1SuKPEXjW28rNqCrpxuX914HNoxxFqwK5w8rk6zZqBCvH4R6R",
  "key35": "J2TsMbHdosjvbjdaeJStmSbK5jJiW79Yhuwt4xvRQqhrVoshoBqvDxjBqWbYBKDo8eyDpveDZzhXUFdfw2VYTNW",
  "key36": "5rjTjYg2x8zxco4pXzCPgbj74cw43S8QFEJs7U4cFFrv6MQ7JJo8vSPCsdrUvwqo3xqvmSj2HWK4B6BtUfQFcu5w",
  "key37": "2MjunSdR9RBQczZfa4oDubspWURKmsGfr2DDmrNDgKBFy7gawpuBPKKKt6eT1Mc32NU15DYTTaGKJnkUkkCb1XF5",
  "key38": "4scwmNerE9oXteHgEzZjGnxRiLzkakvWboxPo6d4c8ojJAxWCZjN3CunaXS4CQjB2CwBcGiSeacBXaypUB1cQEP3",
  "key39": "yMYvpm2dnfqFTy6JekEX8E5pKJEJ6qvwjcDPhPwFP2rZYk65ZtV9quTGqEohAumWRe9akGiViHt8vccg5Ms3TBV",
  "key40": "JMz1B5xyxZ68fKh7iHxgfLmhTPdJgVXB1eWC9cbGwSkT82xdZ64RmZ8EPnaC9irUBUajXktioSHwavbeB8yHsQX",
  "key41": "3SWgf9vcP3zjZ6KMt8AUPNVVxqvbdon2UJiiVNUNmoRsdVfWmgwNfJJCoMEutRx5g3xcVeDSZm5hWgAVBgTuiisp",
  "key42": "dM4TTcfX4Nm53CY6rAQcCSM56vFKLZZujnhKtJmPmazq2t3FJU6caVeNTqnDuSmreQoR2cnef79bTd6q4foMWKd"
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
