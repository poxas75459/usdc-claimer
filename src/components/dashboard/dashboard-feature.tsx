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
    "5rZE1hQHRTNGKF3gU2ZLvL8KNcfHKEPC1kuPZUP7PJnewQdY6crri4roTATJcQXX4Dy3L9LFASTGpGRrQArymnTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39evZZhcwNJZ2KxgsvDQKSiwnWt7PCdgg9tpWSpzk4RtQoM583TGL7oPsCZZkA3KznmoefvosEgUd8YqBmYa8v4W",
  "key1": "5yZKaEaXYGmz1PQEnFU2DQPxg2PysZ25TbySMtDwXjkkefKtAcd5M3ErQAqa6Y4VxKDbbi2pbv25wxNjVaLYM2KL",
  "key2": "4yXss8XYdxQWmbD8LMweD2vdqYDmenFp6tBBkqU1w2cVfzYdQ2D6CoE1o7gHDPkicGuYKQnue4sdqZGPm1WwDzdf",
  "key3": "42gTHDLjs8fm3jFZscyw9UV77rnkvWUp9MiuMoTrbGsvaNEip83nKs3xJi4Gp3znv2k8LH6b2j76pq5P6ruYSBoo",
  "key4": "4Xbep24dbqR26gYUcDUDmaoEPpR3WYwqbvcmHbbdM8nTtsdxh5gnaCjSYNL1bmMVdW5yJtGj9SrSAehbBNuEGYSx",
  "key5": "3ut1vepq6DuMKBWr7Bpacn45swQgEvsY7kWQnQM2Rh3KeXz6ypkaLzr8j2TeUfkwSKrFRLBfaLxTMuiCNfAd6YFW",
  "key6": "2fRbxeKCzB63nLzHzV8PJ5nKwrzzJUF4NLSUoqu6FSSnz8vui5p7ttsji3gCmYLRvgYZdwxWUyLVfWnj8cDPsh1e",
  "key7": "22mZd1oGc2pPbLJGM4JAZy8NePdAwVxJbsBCjwttuyhWC2BZ2iwD9mkaiVXWKJ5YWEwvkXxjCuteWkTBxYnarRf2",
  "key8": "56r4Lhq8x4BVrhQXG3sW2797ZsARyd7vLRtMpJU2GopSeZFLzCnq7CUdRRsSbUxXVpJ2zfhk8GMYKyBMdQsHF8Bz",
  "key9": "3oHfZ2a1TFFYoQoQsvayunDmeDb79wNXy4PMBAaYphRpU6G5xWgtJku3ooDRQQGEmG5xeHqbBNhaLDBr6eUjqkvc",
  "key10": "EbPzf1c9TefaWZzkaXgDJwh3K7y5a5FPfPoTPqu2gwg4WTMBE9qsr7GwwLPVVAWGkho4MrRygPBZsxkSoTWZqp1",
  "key11": "5PjV3Z4Cb1C38hqtJqTkJw5c6tBggQGm2guUZzo7RjgLgQwjDLJt8yASAsH1CPRqkqP56hxSD6PHrRMWQu13GKXF",
  "key12": "5tS9VDTSme3fExqqCWXFWKUDeMPSmL7e1dQ4JD2yCgiAwuGLpxm9NWDRCZH9vQhRX2D4pB1UUAVPUaaAbuPg98xR",
  "key13": "5zWrYZv8RjTU9PmQJHvRidN4qSrNNzUe9PeJPHFBBWKGqPbsem4xPiiRNKbXFbaYdvJBmBpumcEYxQvYwzjE3eze",
  "key14": "2AADYMdVmAuFF3KgFb3DCKvaZbvpfY1PWyWHCLNvo3WRJi89DZS8Sj3cT1xhRcmNZ2aVT2Gzgd5ZarfBoBRS6Txz",
  "key15": "EG5uG1bcRa7idMguhC1TR7dFLqYoVktbKZWLSdyB4YX1Ry8vLnJ9qjg3ie6zVDKbAeaka7VXdNecoFHFmm45gAE",
  "key16": "2MQaVhbLnHYFagXE2Zna6AhVHcPWFyCR88Z725WbfPL2ukbfTZSvHQQ5tRKGTDxmhMBBqn24yPSZEu6ZzhGZSAjf",
  "key17": "64QvSkrCGCjZqFL9M67HxpYaJrNi3xwuKUna5x8p2K99RXsC58DwqLdTyo3KCnGnc5VKZ7tUGbvs7HofKv4UKzRN",
  "key18": "2m3UjUHmzgoF4T98HdcKhCKaJMcAkQUMGsr5cPuJyxasquHB3En8D2PtMdN98FZwGHzg9HTkUrRnXz3UyVAsrAUc",
  "key19": "2XnAAxGdvdxEhQWzJaEAYcSb1zkoUT4pSPBCqyemV88dzcTknpuy5ZbUjouVUvpLjFpHRVJQxDTfEfBhPTw9FE7Q",
  "key20": "Cb7jX6V59wG8jrkgyGjzPJfVgoTuP2T3bhih6t1fmhhgBGRFvmmkUgRvxxU1o3mtkadsKF4JmpRHh129NTw9koW",
  "key21": "S4p5eZkSboQ4DTwci8iBhCgFKy1nCqcHAsqDu3KT4cqtMHLRqpKCreNVgvF8uoUyiqBBFFUFaFhTcT7LHiWjpHE",
  "key22": "39HV4MyZf3dmsD2v5fV1cUzdxtTDEVaiYLZHbbE2f1UjJokoJgUiPYRqxQHo9dEEnSYTJSYpJc5KwwRUYKnLfSsJ",
  "key23": "5brBBb65VxG47jshiiSE8nPSdmxNN2gg6hXSYYmrnWETF4PrP3yf8XBPCyndCY3TS79ojnAhnCS6zxQegs3z8jYm",
  "key24": "dZmVFMcTWqG49GX6XWpwQ1PzjKVSKPen1gD9PchyYHkm85fhQFyHwbvTNzf6cdHtDoK9xWJ7TvVssyUEBWmVp5S",
  "key25": "2Hh9eB4aUFKqKd931JgxxAMcS7R8znQBJ99FFviy4YUwQmmhf7KbaPALemEjpDn4jZ55qpkRdpoAbAZRdQD2yGHg",
  "key26": "497ZPMEwmaRVa2FM8kB1f9rLXKWUsGHKPpeSVgHJWaZqMtkx4ogEuefce21iLJKfDRGRHcXFw2jpaTmKNd4GtAQy",
  "key27": "ZCZHTx9y5ZYFYWKz9pXVGFGG1FsAswZvX9esudDy5VjNM44G7WhSZq8p8XcCXQCfNS3L9tE29MB82Bx2FkCcHxZ",
  "key28": "54xYU9bnwj9ExM1C33vyM3MoHK3RWpsFgsr2ncbbYpXX69uMWsCy9gyan2hHpxHN6i1CEepsVRpobztDEjnic6dc",
  "key29": "4Dz4HmrGwPGYG7Ykba2VtqEkMTnE4rYw65KJubEgWWy6EVhAvTc3DqYpuNctqkE3mJ1LAgXtF8YZwxopo9FeC96X",
  "key30": "2gz6us1w4Vc4ze5Hif3HZ7yCLR71wz2KyuC1QRM8R1Zp5njLnise9YPKmVZPHH3Uik1xTmqkvshemwjccRxmuZbN",
  "key31": "3Lp5kwsWXaVbiR7GUvdwnoVSZHazPFtF1zYiNNgPWbNhSgNdHq57PkVAY8GykSYDBGmrrL2gdfwbTG3a7AVfRSj4",
  "key32": "2vYayaufLQLxNp2wtSoTzcbbKcE5JVxaXWXrZgbY6d2fRNqFFW4dHDCVhM6Pzz4viiDWDPKc7cNYyTrsNoQDZJtN",
  "key33": "23rgfp4sUJCcBtSqpUKduUjaR8Cer4vud3cFnk1fZa5Ssu5b7DctkLNmdaKbuLmJnsZ287sVUB2CzUB3DxcHwRPC",
  "key34": "3m5HU3NYmMqn5fPj46Xc4Ji5par7X1eV1n7MZpeJwyvcTYDsf71m4H8mgEM9WqqXgbGuxRaJXMNLG2zbWjoSb1rF",
  "key35": "KN7uFT76SDpYhTwftguVGPWSH2CtmzZgSaWX8dyxBc4nGph3Evn3GuUVxqBwk9zerrG9MBBrWidty6FYfWpEdWU",
  "key36": "2UL8k2Syr1zv6M3z1qMZk6rpr1yyEDjgXjpKGKXenyHbaU7jMv5pkyU7cuq5X47w7Jmqgcf93QAorGfzE59rcU43",
  "key37": "3L8GCZXxn53vzBhhB6QPJHgBSwHNVKqq3GUhaX4gXUySu6KYErRkNwMzcKGRCxroteFYU5ATwBrUt2NVsnzqwjeo",
  "key38": "4uERXEnfE53xp9z7Z1WLEnQ8wE43qcUwZN5Y84iCwvHR6TSsCqreFcVdh3nNYn3swyirHCSV74cpSc8PnGJKf65A",
  "key39": "21Hp9KdAw7gkz76yWErirh7VHCqNXwV1QV4QxNsAi3yzLprWhfcRxLeZbttaLzC3x1TGFq7xW9q34SPrRH8zDzar"
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
