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
    "5YChb6YRU9VdAupRtcvDH8oZeSfTJRxPC6w3hcAppsQ5iWPMkvuJ6UXNLWdizgZ7XczzpDkF9CdbkMCYw3ue3pNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KhQRs526LZ7UEGBzX9L7mZ4AcFsvrqkUd8ziFKsedoVQyHaLA4nSLEF6WPgnSUBuGtL9izykczdndUSj1hBrFtV",
  "key1": "kiDkn4h5YrXj3pKXYrUv9Pc3n6A6bR3T7redCavmTZQ6hyrAUW9iMFT5LyNB6Mw6QnG11VNWcyFuHHqjkSp2wjJ",
  "key2": "2mfJeRohDStmfJBVLni8yjm8nba4vsZWb8Lxpxu4f9yUKyy4huEG9NR4HPwDBZRKQCrriDUqjannvMAk9hV8D6Kv",
  "key3": "2NFSDBvovfHoNbjmAYyRy2ck3eKReuHcF42chyamozyrYcDFQnQQwEASgh7jZMkhF6dk1VB813ffPdDTQVgaQRD6",
  "key4": "48bVLYVHqp241eri2GEvZA5rxVL2nepGWdSHtLhpnuuSWFBMhHhXy6T1JKXyGvRyeDk148fnx5dXkSkve9DExmc9",
  "key5": "4YfAEwAN23ggsz7wesU8Fqh4W1cLWdJMe5cwD2Wd9zmKcRxCWtGMZQDp43U8GmCuJCa9jvZkTYivmwExJXow7kwr",
  "key6": "2uNf3BQKey4NTwyoyFtiQ5LMTXohKDkn2FzqLK1XzN4Hse1ghgFVehtW9coKBQkyX9ySfnAFAPKzAkyWmr6UrpEj",
  "key7": "JtefGVJon2HM2sajg3uWxrmGsVRdxRkhoLenYsT8r1UAiAvZV5hzpW4ggd2wEznGPBZxMbL93MPvpqwr12sXeGx",
  "key8": "2HnbqKFYS4nqLSfRSfH7KCWkGed8bK6izFEDpy6SSAwLH4GX8s8Pwpw6J5p2kp2hk7hXPwzHjrGtXgSs2QLTWhPq",
  "key9": "5mdVdm4gmACb1xyx6PR17iyduPk5qrfoasdDu4fMGWBMPrsVPomtiMoEHjjPwfato24WZSgzWjKp5GwtzjpXDgDr",
  "key10": "5o3gq4ovFQDgCHMVwaDE4ZBNhcie1nkWDLkUV1H29AenJUfAKruWRKdkG85EwFPaPvoiVYcWjwmHdrPfLKFWSeRF",
  "key11": "4TQoCAXyH4gigJRicmA7Mna7NcxyaJbPwpx8cza1UpNTm54E8NtCc6GKkKc5FxsBZRs8FQ7ARPr9sAAknB4BJRjj",
  "key12": "pq1pqySCD9tUGEaJFVB9QXREtM9rnEEcZNtBsujT4RSiZRZokomDxLgh3fa6WRpvyt7QGNPJhXntbiAnmtRrVQk",
  "key13": "4yqS4yFX1WEoof2otqf6xqi5WXUjWcetSRw9bB1UfGAtnQ3DWw3UYbCjbLjpUAEQ2s11PQWbGFm2kefZ3VVnZ1JP",
  "key14": "291nHwwEAeW37hTT5RB8fjSJ4Uypg4Q1Uw3G9hsG715z3Vqqryqojot15rqHK3s1YmXqEraUHYPdF9jfySnS4uPQ",
  "key15": "3DD5GMnWQKNSZXCfXU39J4H6VfRo5gxXVEp2sSvbA8bCLq1SpQfcvSRGU5SMqPt2SZZJk1J3mDMrBC4GdT8mVjtj",
  "key16": "3SyjqszptyB8krRwpzdV6fwkyEzwF3V4kgnD3Zp8uUu4DbTyKVJET7pimnzx6JPVRomyFnACgnzVhU1AoKg9m5Gm",
  "key17": "5thPUBWU5KZLD3DGYPvssXtcFYhKEaUuiJvHdsVU2RtMhUioM1erQAckfM3q39PqCo1PPRWkEUYzkhagzTo7hUYP",
  "key18": "4P88DMJRfDtiEaGkugtpfbrGdQRfgLAG8tm5G4Eh1kQsAhmKwYRgMoWNwTCiTN8ydaaeZPWMxTpxnHS5psWCxDHz",
  "key19": "5vA4XexJLUZafCVm4u3b11GdoQoiFyftmm8nvdjf1DriEdfPeoCie5Mf3hx6BVo2Nnacv1ajRx1uf1veUU2iZ4iY",
  "key20": "ZBRZmsGrDh9n4VNmuNAcyzDAU3SDk5VLdo4iimm6hpuXwgyA9aiwARboFP2UvfK7wUWxocNHFNfeUGER3o6ydp1",
  "key21": "4CdDpScxQcxhQcN4ocvSYhrr3RmcxinZsCPXLDRfPsQXy8JsHpEH8JJTu2fBaUozNp3n9ZHU7poDEbeSusg7e94B",
  "key22": "2VxpQFTdCE4iQiz9pD8ydPyg1VG7F4u2mvcGZKbaddcmxw5tqu16Fqm3UoezsSeKtBZxrNNuFMzyfdwuyNbgXcEs",
  "key23": "2TcqMXZhVphN6RhzQStk5QPgTmMDHvpL7HLkN9icjnU3UYtfueU7F7a5TDUciid3PBGPZru1hiKWqeC7sPKmwtys",
  "key24": "2Ra9rkhdP2v2i5FWDA8Pjh8DaNb6Xxg4wzNAC3jKH68ro7ZdVdgLy1gt6UgRanyQ66gLnj8v8unKGLuhzRzHYBJ4",
  "key25": "njjmNbF1eaeTCX2zHnbDYjXcfRaBh2jEZ1YcPxEASDDBcx7N4tg7yf9FFd9L8vYuV5SiHMGamj6orH7SxX4KQbj",
  "key26": "5pQzmFdVUxzMJhwKDhJZDKKBS86SqgY6zJtUPeGQW6SsCaXu2A9hRvBUJ3kaFemMNRU31KzBZwCTFZ4z8dw9CxTD",
  "key27": "aE6Vtq84KgEwtXuNJkAbQiykLPDMzXynvt5R7N2XyjHvKdYGT8ABADgtAXx19VoQmBMu2JidNsW3e5r3afaUR8Q",
  "key28": "3HAtYZGHUiMYsLpYjN3yse8hACQM3e7btzBSq7SXJq3jJteBate1qr7hu4TugxJ7TesUpUtR66CimbcfCzwkoNnX",
  "key29": "3s2UAGm7BUqqk48WHtdhmkbXiE4DQVfuA7yNKV3FRW2TdCXHjQLVRRJFKoqr9h4kCKsUqsxhezfKazNnvnt83YZp",
  "key30": "3XfxpNasZJ4ad7G2uQx3TfaXvT3NLzvYLmc9QP8BbMLsqquYVGxapcqZnNFKWNVwJEr2GfHPFEhAk6J6mWp9nPoo",
  "key31": "3TgyveL1RfamExsQd8AT6wAMgni6CG1AxgBiMh9gSXo9VXrnpLV26EVRjsGqRwnm2n2f3XYD8eaZUGBw1i3csQuV",
  "key32": "3EoFZCvKpA4VcdnWrHRCeeYnBFwENBVbUi1MzGNKmNvHk4CwtrZh9dgZGr5qWw9moJaPt6Ysaa632V56fzDeyrvC",
  "key33": "26b2N7hREaU27aWez8wby9zFN7RsgBD24onDPXvS3fjAwFeWpxcuumw2YnNymUwV6qeeUeoJESHHjHNGjbZBKiUQ",
  "key34": "2Tv1DNU92TTKoUZ7BXhzVBNzTKUJee1xdW1GA8XzMUR5iRyqNUxYiTgJfoPWRdEX8yhU3JvCm1QJxep2j3hVCDmp"
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
