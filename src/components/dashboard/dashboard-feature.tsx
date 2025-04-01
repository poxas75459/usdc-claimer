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
    "3ydv7UThZHX9sF1TvALcqJBYmBRcdschvboe4ZnYBWK1WbQY4To4bvgN6Jvm1bdSzsynfzCMAFDyK2d6BrqxKzsq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SmqsHdjK3tN4VwYXzYZjhTCxmrxBVHSUGfAj66FVnJnrpRzUGMFDrzev33vFdydvkHM1ANLypjCnrsKymbmMib6",
  "key1": "2Kr9rpieCP6cJRKiMBycRsRonBk5TmE6cXKmx6ERqLWkaUkhA88M7iS1MWSXwnzh79ZL1NtGktJRBhmMkPCzGwYK",
  "key2": "SkSTG5vFu79p1zmnWYJZEo2ZbasoFSQVZmekuRvbwyR5vBrJQKqtego8nwYN7gVKbEa8rDbZ1mfzybVzHWP5X8w",
  "key3": "5E3troHPw375MvqmyvABxRsUr3niLHJhD2BwZRqXLS9MwyQjGtgjrS7ABmukpceZcj5wxe6wGPqDM5qjRC1DrXSJ",
  "key4": "5fgsoVGQRFqtj32tkUaKUnGDYKd1dqLpWVokPMKHySx4qM94Qyg1QCjqxGHoujindhEcH5GE5XjVSsrCPug1ogJ7",
  "key5": "3nUp7VdTKrX4F6eJCM2QhMbLSLf7tk4YCXeknLCf6pBxBS4ga8PDrrMjFUPmRxPCzgyyfj3K3hpp6UpSzKqLt1p2",
  "key6": "49btoSxZR3LZ8xXtWwHUv4z8JS6x8AL5oWNUeCdXRKUAP5UyCdkPFf2Aw9k4at4ZceG9xa9g1hySGycSPeS1rnUx",
  "key7": "kxgYQzgrdo3NcxL4hB7T4qHhs4TWym5G6Sff6nfFKXaeeSqGXdLGU2762Uc8aupQEZcqFAz5kV9e9dsvfoXqvmv",
  "key8": "3XdKaBRQ2azakdn3TzmCqyNGtSeUAASuWeqCZGPGJhuh6Dmynv8N9tutTZiSjniBRcQrVf9XK3aYREWvxWW6Fsg6",
  "key9": "4x8G9nArPktkjQasjJCuTWCMPetzva14iUJ85mMMDWXDF3Vg1NgK1rbftUV8SJ5JtH4Htdkrw2n15yetK29hxGox",
  "key10": "5vod92b7yopdrHmR5ZNVqPvSqxLXaTv7Pq8GKgTgTfyZc8K7SFoCBFjodQZLGp33dqQgLX7ngYYaS6ZPbi2cUpF8",
  "key11": "dmCLo3DSFLdW1Zyye9kBwZpLx2TxAVhzP8EGrDqeAKTfv8e9VVuDA6NMhEjQktmctMfUvGyEqe1CB9GqiD3oxww",
  "key12": "u7nxRCCQAkRRspsEpku7qZQ1Q3s7f4n2doNvmP9mLMNSiZ4bWdqvCZFJ12QuuWKf9Ed7QNR55YVX5xTFopgbD6o",
  "key13": "2tHm4Tba7QGW7ydCnCyBggc9fveHMfzmV9mJUbTnSe2y4xJ5rwBxnaMDo7CFjNk35FXEjTJNQk8Jvkbq9HXKXPiX",
  "key14": "4GYGrJUMZwnPEVRfPjD3RG6uGEzqEzKCMNj7FspeQrSv4PC1UGYPDR7y51rqZPSxaHFECLPWUZnA1LZiWTfbkqiY",
  "key15": "4jaVVK3tzJiHHERz4mQkhFvZW2j6fGoLumT7sn9Zabv2akCWsnnueX52Nnppz1QBdWnGgphmYKSuYPW8MJCF9w82",
  "key16": "3koCpccCKAopYaAwodUtShqKTzn1m4unZeKxwzWXVsi3EtMo47xfJYNkDyqbwnmwJh5ebphNLsHFmKwWUDA6cB3Y",
  "key17": "3XCREyc9BF75QszCYtvnsZkXQo3Nksuj8jEuUnaWLj3rNJFGt48LMoASiwYa96zfyB8C2c7cwKDQHVgjsSgzFXa7",
  "key18": "3mqtQeazGR4W4gDapC82cGzbfXK5xbq8VX71xrWxWE3S4ste7dqhgXDhTQvKBv6tf3cFAep7H7ahAnCsmsgmAyXu",
  "key19": "F15CW6Wb2QXv11vrC5vmu51LBkDLpc4HQ1wHmVzHanAB5tMCWCarms2TNU8wJ73izxpgzhNy7UypCmHvsK5JVKK",
  "key20": "3633YfT79CkA8QYLka7HDbSKBy4HLsDVoNLx3Z3oa95ydmVLpGFnXYG58VHmuTJak2oYqZ9GNd944UdpveJR8Ro7",
  "key21": "4A5t2DrgPb4DsFH2iK9GhMTKAi9fbWyZU7bi5VrjXGSnBv1FhjnK3PzVbUjP6AfjbSmLv1nrt55LiPSURq3Bt5dd",
  "key22": "4kqZvQpqdQksQxuVsSvij5UX59uX8js7tn9XN4s6ns315EF2C4y5XmzxEXP6DWMHQV5m3wb2nNK9GWoNaeLeXnt",
  "key23": "4rtRfBwXepyNhPL9s5LHs1NqGgtJkhmhF5WzyEQTUYBrwb25jKWxxc1W9Pe7uB59q8i2HcvB4puKyMmHjKmmRHjE",
  "key24": "4WsU98FskMP3Q97PQxtutLz89eQKVSFzCmkwNxPrDUxsSgxvp19V1SAdGbfXVpJuT3BP7mf6BFf1abWnivCo1MwA",
  "key25": "5NuBrra1Y4iSMeNAgmBdop4iLEop7AZZt4NtdApMifJJEWoBbK6sZxEGySAos9ufA4hojT6bptCVP4K1rf7Mo715",
  "key26": "3mr7SMFwzN4nWZZkgK6S1HrvizLDCXZJdNbeonu8tjPX7o8sAkRZu7P5XEytLLo5DLvA8Mz9AzsjEG4cwPUT9nv9",
  "key27": "5pNnQXtt88ZiyszCAYcCBTEmvwWFdodMXRoDhWbpMGCBnqrHdt1dAb41g2wmTtbgHxveCoNbaUFUMEzEXocNfrMn",
  "key28": "2kAYFdSh6QC5EJ98gbjDP5wqibL8M6FkB4Psq6zQGBUnd3Ffp5jceasw5GF8KLUkL1mAWQMJm6JPCuFb1mHnU8BR",
  "key29": "U1AhBEMKpbN5YJreru7zuKJDX6g9tnWXgNdrLPKSQmNP2ZvcgdGwrhBmPQRV1CjknHCAa19zS3tLKump48nEg5d",
  "key30": "3JrGgUic7ykg5QXE2BtDmddcH3dZEygzxSKobSuoVjSmzzQYUBnAA1vz8hqh2NoyJtBXabGwPWo1eSn4EFsx7p3s",
  "key31": "2GrAgPM8MjcicrzBLjyShajX9t1KLaHE6f5si4EZdW7B9v8hN2fdFTWJE2RmwpbqQh3Jo6Mq5sZLd6ed8C99QKFi",
  "key32": "3ZLYCrJa4SnVYcfePcz9qsR2kCS9D3t9s9jxJqkwZSmmKzxwhveJyEy1ymqDtLjB5XVuNjiZ8EKhT9GX6iW5xr6w",
  "key33": "wz3Xqfwiwck4ZZghKUKJScnfXz5UzrsfEKHAqLb3PGyDewaVqPEdsDdHL7oYCVMtgYXHu9QH1eMM7shVwg3LecA",
  "key34": "3Ua8aTpAtot2L6UgjCRhH5KXKCARAVkPZmhFhUn2eUKjrxPUWPDE3XztG9SCcrig86CWxbWEVdH83K7szej6Qs21"
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
