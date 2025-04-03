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
    "2yWTaw2XXR69wpZ4tNiDAnExxURPfzx4eDTrEF5DRp2cM9U6qss53QEaKoSoB7jAbRW2wgJdaTAExZArKBbfwTp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pw5VbqS9Bsn3JyYyp9prDCrtY7FXDQGz8QHWLfkCgj8E1A5pedJzJrR5ckMVgHhqXdmEHNyTEzHsEoEXY9Me3X4",
  "key1": "5JjbBVsj224ZSpDKjJbikBUDy65edjUQGoGHYyQBCGDqNpv6xW6YYqwWS2tk3i8RBHQB3YuBnWzbHgRufQqgd5Wx",
  "key2": "4uMovoezDmTnoy8Dn3rkzSJ2LimixLfrHtxkRuBPPcUs2JgEaHKCpwe3DpWuprDUyYMg88HhqZYXVNnWeNGoKjLj",
  "key3": "5Xbo3YeJ9NNVmLiehMrWpf8vEst7uRKF8SbqPnVoD8BYykuW74731q2bWGmVo1mCtYm7kGcaqhmcrmbC2e7aCKPy",
  "key4": "2aiU42DnQRQNQBXUaF42bfUyDdZxMQwFnEjyqH1heJhuYXh8irQHCZubyji4qxdGmKMjhHYCCQr9ChA5cb7N6Ctm",
  "key5": "zarwBofetUwt3Nn7PcSGaooBRwDrsiTd79AGz4QmaA2vLnFCfvcdtUBTRr2C67xYLgTYY7556VjTFavavQ9gpqw",
  "key6": "3GEPV1BWmwXMRmXGHtJtDcX3Kz63M5SomQXL36WrFEKTKNo84Tsa9sLARs9MUWGkCk9a2cV3KvcRVVRTU2jBQTin",
  "key7": "5um3qhg2zLu8ubZTtBiSKRmynq9qshtiBrFLVxbhBKuV9kAvi99UAm5xrrMtqym7hwoptbeYqY9JEQZNrse8ZLp7",
  "key8": "uTPfG8zCSNyCzYnzveW7UPTBsNAUDXuTizbaapH6JgGzXVKfsTux6FAvxhSNPrEaW3jk1v9EPwqHDaZuFUabEWT",
  "key9": "4gSUtr4rrDqJaAg8jaYPj7emgoeSAmg1kisyjeUhtdxCPiZp2LMCsMnX4uGcomUGsYs62s782FdBBjgFKTuZRW2h",
  "key10": "MF8FpFHh2Cp3EeBAv1aeb2gAPhcY1SXvxMWUongXrarPZ2cYdA9m3Xn6yjUTzv5yaEYa2tF6uvfokwUikxWW47b",
  "key11": "4Vgpz5xJ4aqkxZCxuDggHgDVtuMxDMmWg2VHSoWzqQsVsSApdn8czhmepp7BShpQJW5zxPQgH3kXfhrdetT5WuiG",
  "key12": "5Ncv5Jxmis4vXJjeqRD7mnRGoGLq5pE4aCnK1WqTAgM3WJ3dqdf2GoS6MJaV3KpfZtcjGf5tZX1cCk9fHmh8z4Xs",
  "key13": "3o7TBD3ToYpCkwEuNywq3Y1vCKKaDpK6rf3V7fVmNF3Sai5wsAifnDAynshojhntzAsRbVEhturXKJvjNXZBJ4zu",
  "key14": "4AzuSkzsUDeY6qsmSw6NwCpUiF75e8TLCXxqBs9Y61CtE1PWCwus2CMgLMJ8AcnsKJ15G4fctyfzArVbA2EKBbkq",
  "key15": "NyP8ZqqhpVyaF9SCHrYUiKsjT5SbKDjv4tr9jxcRkrNM47Lpd9czCesnkVZDNgifeTM3QmgfBHYiXUMeXXs7KGo",
  "key16": "5zGjQNNatJJgeNtRNwZSvtEGHTiFsA1NpfHHGf4b4xgkjJQbu453mNPRLeqz7WmVw9YcFu25Coa38oRR7iwj1aNM",
  "key17": "2Njprwo4FN4XvEWm5W77FEnEfvaMZTimJsR5SaecAL5ctMjJGkYQxH589bs1tLrj4sTN5gpeAPLo1LUtkzeJaRTH",
  "key18": "3kGnaA4dUsmHBP3J5CA6UrgUiyJqatm2fCgkGAPWvf8k9K7K2KfwmE4TMnpWDspksKPo3p89Xdn8CfSVAncZFkqa",
  "key19": "4jP5KwL2x95LHhxUtZFLFNgTebfAE6a2vvqpSpeR7bdxVQtC4mNJcNRmun7rcw39SvQMtav2kLQmf6sV8vV52HCe",
  "key20": "3K4FEaSEP3M9wmjpBjgTpdxNUcDvsSVQ6UWG8NXJeJVFqzQQ2H4LDmzDUHyVnvwWHu3SHTmWvc8bZKq1x8poN5Py",
  "key21": "4E3P1S8m932NXrAKRwYoqasfb3SPqc6p3einSwK5f2btLgKyvsa4KqR8VzGvrVXGqWBsy7RGGHwUJSE46xAvvrD9",
  "key22": "4GW43EfkJuxEvaJwfe8DFSYb8AoQWfNjJHB1cMZBSPdrfjTnPGmewGgwW4khnuY2tkr54ePp4yBVZujzwyeNPksA",
  "key23": "5FBo7GmbZuaFsstAzrDTz9knjoZfDwpqeuphJ9gYgFqQH2mQqRP45bQFxdgv184LTPxC2V2uWkRthmEmHUbfFikc",
  "key24": "4vszxCAPkxhKLLrK395KARbh3PYXNpHaWuBgT3eL93pER1SX1iwF6eWYx373BikSVN1ntbhBDgGC2H4hSRQvt9NZ",
  "key25": "5RXZ9YdvmyWowPC8ueQfCyRdTydsUw4UiDbjQTPpFo5YppR5MJrWrhtbzFzZXV7XxKzJsGdv16fAcByDwbupD9RV",
  "key26": "4yKooyenPjLYa8XXnW6VvWWsbwDAcUAAznaZLNQnThzGAwQmhKNFuXDyzm1RXX3aBnc8uXxhxeANAxhTpjxpuHGw",
  "key27": "38KgFEuWgDVnxoNoHSsUaaUX5ubh3ypdsYq86SbsdfDQCfodPafGHTSWB3YNyEjGpFuS67b3o7oVaDoaZj2Udy6L",
  "key28": "4MdpNABQMDXErpcQ7mCcynyuvK3goPMafMFEHGqaTKSek9kfUWYdE4jyfwGWTiXmRBsyyJo2QtaF7xETixEUV8yA",
  "key29": "ycrLNcpa41Hzy4azVjGCGHaaWCCXtP2oYBJC9cMZJrLs3jadb4BZ3MpnYbSGLknV3yHDsD2RSSZWCzUWgRLuH2V",
  "key30": "2Fum2YV4j33wpwCVH3SGdqF6ZoNvBGHcFEmaQd4hZXmbFroqiPbvn1M2ANxEv6CN3whX6JxKQ9CLU6WKzVCdSjTJ",
  "key31": "2J7qyWWdEiu8zVV5KXvGVUf3QgSR94ZMbziR1iGGEAaVcRRMQC7nxUxPQ1cqLLdJjSxaDwegUFNV7t7HYR2Gvi68",
  "key32": "2DW4fjjRmRpN3a85skb77Rk79X9FGf8gDYmGwokAHThQEPLV6ZJi721jvPDgZdCLuSEvr3cNjoh9wvFVPvgbPDbK",
  "key33": "5gKmFbGtqDb7qgUB4HWPAxZcGkjVMUaBaVXJ8sBoHcAwSVyEVQGLrirXZ4xQcHuqvZWs4NtTZ2vCAoqfk2x9XEL5",
  "key34": "4yPordU8uYVMkgspr8T1zqDN5sExjRzoCmZwpB1ubZaxAhApvyJcHkKT47KHBkGZmbNWtZFzMbCSZF3WoECXpt1N",
  "key35": "f1S9498Zzk5e7PeqGKQjfgbTVJ6dz9kKWPuF3nBphYM49pz4nbBfSwa9vShQ9QMi4t1GwQT9pGD1bDcveNg1SRT",
  "key36": "vS1V4pK1kneriENGaw1A3wguENFrEstG7oNsqtvzTD1E7WpwEveQYoTHGsTsgx5sBgRDBC6qX6T7nC5dbniSp7D",
  "key37": "5RLFo12iERoe29M6dtPPAcDm35PE1vyNa3MpNombpKiVPQxfwgeu6RzrjW8ZeVis9XPg4JtyYMnJFbBpcmsxNW26",
  "key38": "4ajd5mHN9s3AyH7YqGD16znGuhqB92sDAMfA3QxWaTwSYHAATqq396nYzLrEjsi3hggd8Sq8tZaB5Czzz8rmNcws",
  "key39": "3fM4A8uxLEbrZqYcaCS6pBC3YgWesPM25w1PQr4ECjYGxLisMi5bjoSWP2eVC5548pw1k2HtLoiTbJ92pNrx3FPA",
  "key40": "3ZXztXJ6eZ6PACfEjFoAyFTgXJS2VTtohTTSbkr5ajvZ7CM7d7tb9ZL6g9PmvfiZcrvuZk6NLGJPCSuJKZSfH5xE",
  "key41": "2FTdQUD11Fgjys1uF2iufJKbSa1Jvbx1RnsjQrS4fJXiEYwYpPrRCeehFkkxtEbivHy8nL32FRWquHL17TTRjH9N",
  "key42": "3kQb53yobkpj7gQPeePiRWGH7Q5kAeDzEN6LLdJv8HZuM4RbHBHLxnoRwNzmRpVcjD563frx2hCkW3z6Uz7K2StC",
  "key43": "5BxxZmbhHTmVQLpHqjja2WFtt8mvjySdC5Bo8CYAt3hYNo9gSMGDkBK3VY4dTKQy6poPNavxiqjSetULuXviyzQ6",
  "key44": "5FRNqRTCW7HRtTSqat1fHziAjkRGFsLohFATg4Ce5fHwxmDjN31DQyEkx9gL93RoWF2HqVMvBJsqyyhm8PYg4Uxv",
  "key45": "2g2KpBQns4TyPsZUeoZji8UqnsnFfxwH8Qt5HqDoBPfY87Y9b3musEd7fqpaMxzMAzfiwvQeWYz1bcYZEzaa8LYU",
  "key46": "juLpjCZibYpeENBbncZV4j6NNJFqYUtRaFDp6JHAdmSTUVZuDjxjWBc9BXv411DRfsoAja4mXRVJJf5YKXW8G2y",
  "key47": "3a5vxAmW8gWGzHsvNMvURZ2KjWFEE451CZzcLhKWd19cjNjz5nL1HC781PvqbogcnruGYgixAJic5CMWGtWZjooV"
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
