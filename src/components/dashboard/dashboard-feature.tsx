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
    "4hDVHwZEKyzpeP6fGFiY7XtxBDDuSYU8sR6Psg4V1Ywiq2Fr286XCnd73irCMgopaBs1orvB4wjetzaVAC9ET6kE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27reBUf3fKKK6wCg5eLcRsYQUQkEaUFyK5hRKSNuXtRxdHzg7PppEUnzaH24iEWb6d1JQAqDajhxFNbJ9E3bTMEm",
  "key1": "vsrgdWQw5m8MpAixb7PPAgtpGDDiAKy458qXzRBNBjzJDFRv3FALpoPhxrrDer62VsHU1bvtqFPLtbgHVyByo7v",
  "key2": "2h3grUeDViums7zAoMQaSt4GVmxcCMhgNfRof57BNFxvcCtokpd8yqsbY8RrKqwPq8MzVrLHWxMvwgjpLLtKZFpA",
  "key3": "4LyLVpYqP75nesCsumVo19spuoFxSkgPJTiZraUXBPodsrELgaGqBDnugtHne5RRA7gwzJqce5gP5Ejjgn3x8CoJ",
  "key4": "8tBUXiVz2HwTMfCNVcFJyHH4jva83bRQBWe3XyVqNSgksGN2cvcMvrvRq7vSGR58Dr6dqFK3aphq7KRqdpJfGjD",
  "key5": "qs83yW31QXJ4wCVBvpxHMKdRyJ7rtumLwsnPSZHZv48mna4FfypNviQR4aqwxVSeW2LQ5mVUcxarJQEFgnAZDK1",
  "key6": "3UhJuNiQRvwMChxbHxmuN9nLAa9tCdSA7GwUzFhE5UWaLxQxxGNetLWkG3JJbkFSvrZyzUCYjt7ZASoHuMHpE44T",
  "key7": "ALz6dx8EnnGGzQXNw4UMothMKFFU98aXn4JAUxweELoBGF8hAPNzit1WweRQi8PHctt4JkZv9ZJaqvbsqiC3wtF",
  "key8": "2qMwSYxiuey3Zrzs1Ap7Yciyncd8DdJ693udEeaC6xgoj2yN6P33KxymWva3w1SKACr8iK8Z5kvyfo3YXcdWkcqe",
  "key9": "33otjNggMPWbn5wVPH9EQucr8cFDyV5EoxeKyesc71D99vWJDWRtGQQqsTM7VZRfrLTy3MfJkdZEKPqUebx5YirV",
  "key10": "5CLvxNjYyRDV9Efi5TrSLmhksxzZntjq5cpef3Q3LTQoD92tWJiA4VebcfvSrxywbC5HBpXZf3osfDCReF5pyQwV",
  "key11": "54ZK44Sbo4udbwXBHEtNaVRPXqx2DQsXbG9p3hkSe7jbUUE44Q3NPRABXE4TiDXhQs4VEKExeUvkbxYuvyN82pk4",
  "key12": "T21bzvnmKZLzm5YVTaGH6dxe6zLPVQBCgZfR16pheEQdWNCeF6d1rDKPSP6s3Z4JGZfkPCjdHF6CVbugBPkaSVK",
  "key13": "4QLcKB1Q2QcanxpTfFSX5nvAaewXHEwffk4FYMzsWZAFUsEKcDVcFNRLyFM1fAuLWhfbRFuTfyERpybdhUfshfUn",
  "key14": "2jKxo1BLqdu7ttjNNiijW8Ac6fMLFFmH4LsXsvPHe6HUVuKoquFQHtziaxF6VvH3fJ6S9byB2SsXJN5MjEy3zC7R",
  "key15": "2HCMah3NTT72xf1Nbu5EgRNMpM2kAi7CecQqyrDaRZ2E7hbeLw7Ppt8JUdnSmj5V8LxmcZZzoEduieQcfKvFJv9u",
  "key16": "4ru3fM1J6KnkbXZbHngWtnejzUYd9M2sQpsgzKoegZucxmx2D6h3ULk5izhVy28L1SUBmtJv6sNUQWHZ95UBe6FL",
  "key17": "5nZ4PRUXrbiuME7Y4wWHvej8J7NThbqQzzdE64mzVZ92qRtej5uyu69w36LjwsDYr8uKapNPLHeUZcYmiBVSJjD2",
  "key18": "59MBAzgcTuwVJ4AVff3B2CTyBjxjGRGWu5YW9V73zLvW9B2jXwTehGhDryGHLtrJyT8TwVa3mPAmLwFSyt6iVg1x",
  "key19": "2CNYgwEAdXzZVoyPMLVmQBukHDzUux9R9dst82PujR2Tgu4n8KAMqnAznPYS6xuotGYxTwxXBwtBT8yx7SkRa1jP",
  "key20": "5StM8K2v3ZL4SCUtx2KvtoR9WbQATGtNUnQet7awi62dC8dDVsbTE1fAV8uZa2mzGFtVrXdPW9JvMAwGfUrxQokL",
  "key21": "67MuhzH2ucHCn6hvYhsLvTXVR5Pxu6MSuqQdkTiPcpEwef8SwVPrERjwQrXHUbHjHerUBabzc9ESo4jcfoHPdHTw",
  "key22": "rjaQprXCgTCg2x3eSa3uF1Uuc2wgkzDLs75enNb6vxD4zJQAs89xH8LCKmeYLbowupkMkBzubLSG9dNSyN7vcNi",
  "key23": "5Vsnn93vZYWPMawWLU4ZXP3iK5rPZawY9C3if349gUi92ELeQyHxScQd5g7dUXWmcrob2rjmvJmXggwmrHVLkpMf",
  "key24": "4JkHnkCAFWxb8M8SdRBBX2RhcatQhMq7pLCsVW6DyN8uT3qxnPBH9merpnwsVDPUbPgpBJ68WUveYqwBSgCEPU5W",
  "key25": "ghCuacHgq14NKhqpru5FD7bTL7biMhz4bhofXiwgp8tage5ZtVn89KFi3omTwEbJkSHsTrjFtTr4Rtf76Vp1cQs",
  "key26": "2yM7hf8QWCUTSHNVr37p18gwrJHQkPzHUzxGsRgkRJZvYruEGgdFwxunE75ozgKUVE2xjnEEr2c4m2yskmibHo1B",
  "key27": "3A9UxVi5Z432W8uGu7VYdR4ugyEyNtf4mo5tozpwZmbN6vDECXtDwBwyQhHmm3ZJhCz4KVhYMw16RT6efxFtBaxz",
  "key28": "3xxfEffma8UHrCHB3NrXQTZThj8JJ8StXZMg6G8omMxuigDFErGDUCgncoFMMUSPzMzDKxNkAWth4xb7v1yJmpTK",
  "key29": "4LrUC8iiXULeLZRehBjv7r1tqyeJdYYoZCo9aWRJkusN6JNAAJnhd4Ymt3LjAmbD63rxKtQmVsfDvFmmWPpSDgDq",
  "key30": "3jNopfWL7UWQdrBzYaC7p8ggYrFpmCNzSC81ifZUhd1YWr77N5tniBQp1TC7LHfHQcwejJBX6PbxnT3a7gFsyXmd",
  "key31": "58YAHph18gYBaEmTDCrWDpS8auL97n2sX7dAvMtGN9qMQPxa9UV25xceDMehctp21tGxsCdRoMYpjLb4tkWQX89M",
  "key32": "5ksZbXzdWLzeFBd78Cg9rjshKim6aTDnRwJYsb5udd19PqgVb2k2n2W7AMDffdhqqDUzH5TD7aSzUk1jt2APWqE7",
  "key33": "37D9Wx8B7uj1qnBXZi9h37RLiUf6TdrYzFvrcs2A4Sf4X7R5rW2XuUnA5hRE8RCJ5NfiLcUU5WKkx4YWNvJG7Jao",
  "key34": "TtW4hTfA1odnxobWAebWwBUuDCAPSvmKPis9bK1gBKKeQoTD3waypqMBRfdifdt5GCTuQT8WG9YAUgiDuE6rtUQ",
  "key35": "2U1HvqEMgNy8NGzS6eXdLgWxcTuiNLLKLuQNDCxkiUT8iy2mCPUy5aouBMDBgJwq5wVLY4kBGYMKqpB5KAKiiv2R",
  "key36": "2TNf8eU5TGdoeVJ6dr3eQ6y9MqBwmTuqCiVxBt1o8KpH7eoJ7jsqjK6S5epQX1WoJ2DvhKvvGXq6duaspuBQ3vVu",
  "key37": "595CcXLjt16RBqez8XPLLhTF4sYqihkzLpLHfx8U1kAaCnPLJU9Hod9pzhYWJEk8xfJk5ha72sA449Jd1Y32GnST",
  "key38": "3LhBeSArSvYdYyyd7uoGHexwwenXgm6aVJaFx1GRPRUMEAH9KuzX8FnwesGUtRk1exbTaSHY25HhScoJx2a3J13U",
  "key39": "5vWQ4AMEywaq9e3y4Grt29VLpwjNDUfiAHqCQzHHuG2abZNCoBydtKMHgR2riqoyc7trCTG1qGDTAWcKjBEMMgUZ",
  "key40": "64oZ1vJBHZxb8zfjLkZqmrrKw5VXsYtPCSXvznmnvandDMVXgE284gC4ur6hwnGmse72wfds23qpgkJWFTcdYvHx",
  "key41": "4gAjwohNtPvud31E6CG3XSRiBxwtTv5hSw9TDFfAJeYf3TudE5nEAcEi8yhZcSFtbo1moTYc1Vpt5fWcVudkXsXQ",
  "key42": "4BVbdfFFuwGLiPde42jQJEu74P6KHT8jfkotGHHRJnqiRrdNNv4Urni7Yw2K7fwRAM54FrWEavqiXreLR5gNgMhp"
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
