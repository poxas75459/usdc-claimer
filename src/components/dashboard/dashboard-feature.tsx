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
    "3Vp57RtkJ17gQFfndCYFu5fon1ZMcRfSKvy2JAmdPwSxxFENbztfdxtFQdxTjfZVBCsN29fdygguRo3yCMyG6TnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rxpigz1YYU2NmNwyRH1uAsDtk8HouktzvpW4V9jyDcAHpfvZ6QTcLTiQDijqpVUS7nhtfNq3MySRpN8wsRo6Ln9",
  "key1": "4mHo7A28Eh4ydcCteozsTMUZezx5YSaAbPSqSve1r8uCwZuN1GEWo4pyakydSvQS8sxb6RFdaqaYpoVhDu9UGoRj",
  "key2": "3YqnLss2QioDSnTQR6C7YpSKqCQ6iTu3uLdqVJjjiTr2SfXiZ34h5dSNfWdJDToUUoWLQiAVoQ5Cgo7TZNnAiRJo",
  "key3": "4Q6MJ23oNhfAyxHGvasYjNB2puuQp9x29R1JwcmtXi9v1gBR2g7zXzF9DtoE5mrSuczrPJCcugf192wjXGxQm9Ln",
  "key4": "4MXTw2sdsgtLmmA8wkyQxq2zffF71QtusYKrw1zyFTVg75TD8DVtqKNzdFkkNJKdTmkF9Qqzizw8w97ZUFS3o1rr",
  "key5": "h3zd2YcR1uZpSXCu5cyT1fj1TSp6nLS2jsYrkeCCjuCB44vR8zuGCJmHgD6jbHYT19j1rFvpeAK9ZcJtQrP5uMG",
  "key6": "3UprNnEvmAoTV7LCYmNZ4WXQzYahEG7fCNBujkPKfq2NH1fM1wBKbx3biB46bV6RpR4iCsB3VsScJRG8m7ENNiXW",
  "key7": "436pc2KJKXDwTqBoDzhpCm4ax9E54UxiJ7VTD2pFkaf9PMFfb6hTromrxax8JXSxYZ3gG3mBUETejjwMHH2G641",
  "key8": "655Yti6pSbSYzuxZhRFReswUch6RUMPsM6mBoZbNAcjYPF6eaFMr99WobTdXQQRMYzHsFCHJ5utKkEFeYzthPSUy",
  "key9": "37zukVFJApRfUXYxXiocHmyJZRmmYByeW1w89P9wwtpPSzhDRu6igXGNd3rpRSnFYzZXp74qBtKC1RbwzvXzkosc",
  "key10": "3PL5JNRZ7qtFsF82qdcUnos1hiXPuQvq8sSpinThxMko8bguWNsiGwdjrDx6FXVXTEKBVB9jZJynY3Ykg4Buhq6M",
  "key11": "5j6yVQuDsXZBhWiU7s4XQBJS3fheqXhrDRod2f4fEpLGH98ijwy3iikpmGdAmh6wsg3z6ZwmGgVefoftKo42fNG7",
  "key12": "4aWiFJ3SAs6FyW4o2mbAAbhRyXBPNuH1jNzJrNbGcvPL9So67q2Kpsvepg8rBMzhEnU2rvpz15SpK26rVGUfHs6E",
  "key13": "2GdWWo1g6Uo3RyMr2twk8UzYnSAhcX9eQ5yWHrsDWJQjqQMaXJT4KNbd7bCvhNSjV668cRj8XDUGuQjvwQ5yvpA7",
  "key14": "4ZXP1UM9NtkbNBYx4WJ5qkw7Wx8HK1ci99coZ4c2TNbsyLLPM2x2FZNzVKSUzrSTryW4DULvUFt1QQ7ijSY6tsP1",
  "key15": "2M3VXQdAxTx1uzti1TJLfgAMvcvJYCv3C35wRJTadbZ7TtZBdLizjKJoCw86mYgzfFDxyBbcERPPzgfTSXvPaj9w",
  "key16": "5nv6PXhvzKbKazes5HvbqjmFvYBihfHbzQWLZBQ4ywfv5K4xcnX1rpNuaWfNp9oriAprxfFpCxUM9DihvN5h4up8",
  "key17": "4TDzxxgeDtHKs9TmZBJAvUjdvy1xLnArzZ2oixLpRXX31gvKBaFPkhWuoU3HCfggMB3UvJVaobKoUpUKNu8HCYfE",
  "key18": "5m8Fong5dJWkxB6zQuRb5VBZBGFyQC6HBCfFSYT7RfoHMe8wbAq4EYcejxDcLvHkteajYESsb5aCzyRKX3kfjqg2",
  "key19": "4ArtXDQPFvbpozdixFaoenYnqfBhWM6UqzT1x4wRig2DvfLrZWcCVok54RjLEyFa4EZeYFPZqJWNb4q4ywnL3iGo",
  "key20": "5xtuW77Tky8Zj1y4voDQP1srMQmMTCcEJh4hgdc5QBggnntrdkmDiUWrm29N4gBNU9tK467EqYUuno65TGMP2wQj",
  "key21": "3MZBnP1YY7c2juTAc6UYZpEFxCXAVo5NneQhk6u15ce7zikAYgWpUDQkbLbWuu9uEPPPMXRtGNBXndToUw676Hh8",
  "key22": "4zzKBCBci6H6DG6xVtHNyWuSQXaRYio1ypaZ6nHwZgx24xqHpvufq1BhMVxHDgpykUADtSSZn7VwiiMqAVxrJzHd",
  "key23": "QJNPn5fiANoabn88AnhVNnGsAgeifmGbB5H8BvAseW4Z8KmN5p78SfBBuoRN5bPzfEU4XFgiRuJeB2HPcjuXc2N",
  "key24": "57vCZpMz3xFjpuUpBnGshNFA22rCsDxmwEtBvP192TrqFiUTXPyL2dcmDwXDzRGrKf41GEHck2sGZefrKXqUb5Fe",
  "key25": "2YY7ZiTAsMb7LLBi3fQmreLN1gT8p2eeTWmNqpbRX3qtoenmA9mjA21XkCSA84kU2yUuyhLQMKRMyUfai6HA6B2v",
  "key26": "3mw9YW4hHLLFWcyhFnGQ1C1sAvNxkt9BaMi8KvmifB58jkmrzig1vqzyWsH18xaLBAuXrxi2RUvBDBXYTPBfLsBm",
  "key27": "3ZKtGTziRAdKtMb26Qxuz1LfRmuVPSfN9Z7K5wDqCKbyL4iCBGeizzWrWWNKVQRK5TjQDvZz5t4BUbmCrevAPeoc",
  "key28": "JnRd1iLMUGr2r4CSomoquSeApqGELgnQLAPD2sT6JphuFRfW4nbn2WiFZuVgBNd4RKVb7iJYYo2SBuEBELFDmmT",
  "key29": "5TwQvBPZ1DnEnmjXPFzvo8bLkwujSpdJvgmN7NcJuFn6AesCCHZhEke9MbJenz89gawdMD7aEjX94nBsvXKiS19r",
  "key30": "2Qiych2jjddrUgfNxdJti3gCcRhXPdoFEWUeqZP9ZYpP2cRuDCKXfc78zHD2TeVnZttR8Fv4MYobbmWkF4hfapVV",
  "key31": "42vPjTVjW7R16xfedN1wbJqm6hhtp7VQbbycTGiVD9CWW2G7191oVGjeqMAbSpuWr9EBsu8Kevq8rEMKr8iieAnd",
  "key32": "FA4w5t5fMusn6ucRX1H1HFWYjShxWWjx6C1rpTT3eYX8nmSnapTh3SoSTCA1Q1o7r5KtMQSnSkYtUpC79Mh6u4y",
  "key33": "2QzggUDCz413vC4cEqXsuF4d1oZGUGWbCCytWipEwVdsFhdsXNn8nxkpciWJKMhEfovByrh2A3XVCU8oKMp9zhVT",
  "key34": "4aiX9h4qdMmPUryM7Jo7WqPbPfuCZxej5BXzBZ224mL4kBKYzgRwYpMvQ6CxGt1P8rMWRAxU28mNgMgwkQpJyhnL",
  "key35": "3hLQeJY42LLh6chfm7HHFpZWLhB8mKhtpGF63s1aMtnFwWq1tvGHV775N9yXVE7i8C6VwoxV7KgGyn9n4CxGFSjj",
  "key36": "36jP4dMZD4kyMUrfeJEbEDKKAbt5BjNf4Eg6ZrWbwEssVyqeanNqxAfeq1WGEKa2dFyhkMeT5DJZZ7eJPDN5MZg1",
  "key37": "4qDBX8H66bhGvY7RHGg63L1sFQaiLQ3Dkatc8mysrGbG76VvoYwkmYYJmogb2kyCd8HDiRmJJt22Z76jr2FUu6YU",
  "key38": "5SpC8mUUYPZzvnQSNPP3mNAsSQiaD7ettzmxbTotNxjq7Veq9x24dWwvptCqNt2eWU9ZPxEK8MDDLLBoKtiZXhAQ",
  "key39": "5jP4cnBn1RorzvKEzCcpw5bvAXuoTsxs17puCy3QjCQbQC2SVVSEWxaYLFa6kcfGnxPge98SDkcKPf46geYEtbW8",
  "key40": "3tdmas71RfwTtASzAVydJem3THwEub3xCF7LBG27b8iuqsGjVwfBFPHMGc64DyvJMp9FC4qbJGDRufYnwNB2pWwy",
  "key41": "5mQicqvJDufyaYkof7k7CLWnXkuiJNXyURr56vaJwhn6XGZLuv7FKqkUeFyBiutBw5moC73mRnC5r9YAzxBZZAU6",
  "key42": "2q9ZFneLxnUWVDeDdNVS6n4UpQeitTLeBymo12pHzjEwRVoKR4mvptnPTyrwYpn2SQkqCRnAjvzRys7AzhW5B6Q7",
  "key43": "3rbRsYZHxzrErDT8RqqGy83fY2HjSppwJpDW9zFKXxE7oVRTWRsNUSmzkBSC2WAwnSzMWsjib1Y1x7MZ97RShhZo",
  "key44": "5hj8yLJStqgTryWBd8tCzd1thAGbtsGr9GziWed2PmmThukmGhNaPxW32JWpggZbxWiuam9BGuKLwWun3nuMD8Us",
  "key45": "4R4oScXnyRo1wAvpaFSbwKPCHvXE6g1E35v425jVZPUmsaJP41tYWREVdPr1K7TFHYr93vCvjBScRVpFDbTrQtmv",
  "key46": "2DfvVTpb66GUiYbnCmzPXkBjkEfxXegM5pJNPhUZNqpkD2X7fjh9qZCRBhFU7SAeYpJr1iURp4JLhbGWpjWxSiTT",
  "key47": "arSXzwU37Jw9icLZELYwLwgYse2H5yRVbKsPSwgoYCs2s4UMjZBm9UwN8DJb7K5fzpmfk9FwCVwmFpYrmF6pN2d",
  "key48": "3Gv9whprmUDzhVAJmGvw9AB1sSsiXUd9AyJVF9sGVtwxwTS6Aj5v1NBiYAVn8WTvrsnLqzViDPsCVvFUM2GnDfag"
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
