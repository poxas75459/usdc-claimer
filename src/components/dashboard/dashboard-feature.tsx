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
    "2joh66jQAytiJEdh6oKNDZjvuGWEnoWu3oPcHJVKHsF5Ph4fRCuhxkS9RFipX5Jk1deMnNivRNWutJ3GGzR2sPBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wVRtpsJULiWPphkc6SQBpJmiB6iA136HMoTXekoP7RJCENBjrsQ8Jnn5upoft3wv3GJ3JHRV9Jkcam9ZChv4SzS",
  "key1": "3axg7MgUd6XR3XeAEUxgbeDwyNgXViXG76oa6RZHMdbpYoDFNCW67JQCoMN9o9SDBZKFhgx8AEEjHuUdo2jBqPP9",
  "key2": "4RE6m46hHcsd5aJTdExM5tF1UuzPejpfeQhdRt4DLYa2UJETuKRtt3RpyVRwQXnSZPJs1ghTKjDyLjUwFB7QUM8e",
  "key3": "61TfpiFCJdFcSxAaYzkbLhQw2FWABdd1Zj3gnS5XTQP4o1KK6mDLMCNkFPhBcL667AL7SXxhiwbHeJpotzijF9rw",
  "key4": "4Q9KLY6WyfhqdoSsw55LFMmNLzKws9jSJsen5yGUHPPJNrSBPnoQ1zWFz2zJBdMZE5bzAobfkzAjKk8SJcVRArv2",
  "key5": "Gzie2FW2WWEweQhSPXQhrmKiaWvMNoXEJaVvBY8WSDUA1QZpNgMbhnAkCeh432jNsc9mvYYpgLFRdYHgHMaTP9R",
  "key6": "F9PSJvSyv8q8A4AMUPv1NvyFm3CJHBkSK8Fr1U7qMoHnzhJrbCiE4sgtVguN8ZKP8zxn9o2HH3RxFZEPvVMtaK5",
  "key7": "21LJHp2uAVAuUjhpPiVGkzqcfsLj2pZbUubJx4LRs4QW3FDTM8yuaWtJ64b9CpR48wTBZToK14gZ1papSUzJttkp",
  "key8": "33gsyVmmZE5wM89VytDjPBfXrunS3Yr9CEJiuucTTH7GUwke11wKLA1AXG6Ew7WErMs9YmJUfWNpnx9JSfyEcnvU",
  "key9": "hz3fMWxCUMoMouBsAmH2UdyeSMVwfmKuPLtwuDSxymj9ZV7JEr2VCvBt6p3oLRYKqvHhVBccUUHsj22n434Edab",
  "key10": "33APdNuu24bNhFQAv4CyAx8ayX8raydx5iA8mgkgCXevKpuH6aUbWbguPvTdYxcmN593P9xrpPWPPEDUGRCcu22s",
  "key11": "3wpikmzPPurXzyTEB8Ddm9dbmwH3Y94AVBuRLvrc7YE4DPG5qmuCzrqo19Zatk5CxHW4n2KbosgBAqGnAUNGVVMZ",
  "key12": "2oRztk7pzZhKRDJtWvHBJdvboQ52fpVekuzj2rBJyM4oBZoynSKHon4zNEiDdkPKtKRvKsFPd5xSFJLERGobwtBg",
  "key13": "4caaWSQ6RRjE55Vmqo78qc4orP9UWCXvRsFJzdGse4Q8Zve1Kt8a2e7jzajQwENCAHi6XEVAQpAEZ8g1bJd12PdD",
  "key14": "4YRyPiacd9LwqKyL9xsPue58vAGpDWSwePJ5m5cUoLumFHhTczyTWHX94TCZJYBp4djvKYG8cb6u6DVdHbidzxAT",
  "key15": "5EZ95hrqv8Esj8W6e1MbHYYdvo8wDGX75kTdZvtw4GhxcnoWQovFMWFZQRLFQUdAwKDzSh4CKS17n6tD2TdJMtG",
  "key16": "373autmWH4RuTZQP9uQBg8L9sFgCwnoRGPLW7MukdinuS46CizXAZgMh9VjZY7GXFWV3Kn44e3XYKeESWcyabqC7",
  "key17": "3Gv9kookMSg1sGk5v8XUKb5c3dq4JtxLBEDUaQqNRtaNfrYdcvUKsuHfB9LdpprV3obDBWKPPPnoakKWLR9UcPhu",
  "key18": "DsVmcfMS51v68xzEZsktjdUu6L51x2BoCUKqoWBGUN6e3Uagmb1FWkbGavuuTcmc2Rovs2ewFmLDwJNhrapVfSw",
  "key19": "2ZajT32x1w147E9SbcTpsiK1eX2RjFZkSoAnUVy5gKjEv8Gec7HR5UmnC68QW6jx9CrMYFDXPyBMvuPFYCp4cFUT",
  "key20": "5ZiR2PYu4NeKAhJqze6BrYtRDgCZ7DB44zdDRnQVxMze1GLACHbsfVba3oddp3tRP8cpmac9CfpcHBKEbv6Dqybi",
  "key21": "29g6e3CR8XfLyehpPGN2o1BjY3y3exA4nhuoKD6BdZ3epZ6k1jXVYjAR2GyktWkamYQSysozwHzGMJQFyfz5ffmY",
  "key22": "56wspVV3Lppi4vwBVkMkdiYcCQ6efbeduhtnbS57CoDH3Uh8JWhg1FgvLc9iB622rZjvEFnhw2NLepcZvUocTPjF",
  "key23": "UBhbpmxmz6AX2SXWvLxbe7wuwpz6Kd3VNapdssQBCxLH2EEiMdCPKdBX9mN2h5ZbVcQKeavqGz8hmWgdZ8Yn8Fv",
  "key24": "7evTHCRGaMpAqpC8E1NkMix9vjGRYkNiS3KY84YG3WvpCjXaaDe93QNdKnnprEdEhtjafDjQLWgj8Bm1PPG5nRU",
  "key25": "HccqEjaFwVgEwgLMwoNhsJTWgwAv12su7f3fYXmLfgpEeh3cmjEgTmymyynFWykyoJcK6kZAXo7uA1mqVniLMus",
  "key26": "2tU49iXNj1eFFYVRxZNZmYqYpZidnseKH48W2nQ71YzatPUBeSfBrPjz3KuXPgDFjeZWZBAw8cBgLXhELYu6yFVt",
  "key27": "2U6qmrtRoypUseJDTZd6fPQTy38MyC6T9SYCUK3nPB5AGtUVtJik5eM4b6CwbrqTFJZkB2BdEexXxwqqiYJUH3Po",
  "key28": "7VwBncxGXuhLYd42Ug7gzw3BZhM2iaRSKPufpWekMyCExeSS3uARxWdqJvibN9SeY6sH5hXw1q1A28Gk2H7rXBE",
  "key29": "4pSc5Kg3X8s31py1KD3noS996G4ET7dqzTUZyKswX4fopq8aT1kfK11hm7NtotjgKyFvSjUoNZtwX4E8uDFrmamo",
  "key30": "5ZicTW1hAyxiehPokZiknkwSSMQT2Qrn5sn1wwv4qsc7iy8fAt6QgnXmfQADDmeekPDgES7KWBxNUCVEZ8gUqfdp",
  "key31": "3WZPXNaQenpHPZGgeKdRqBeC9qcTocR7sw5wPNdabBeAAMLvCcKToHXU9E8Qd3nVBWJuZwctf9J9fxhEz8owBa9R",
  "key32": "5XCnvccJgvR9wPnHXYuowaTLbDAWbNf1RUNBe2ydphKaFhiKivgwwETGxgZYewSfpwaGmMwNzbYLNgdzbpExPkoF",
  "key33": "2Yd1r5SwGmZdTT26NbG6N8fPiUKaitYCcEik8tG93iiQ3QweHRPDFfRCUABJcETZAVL6mQwjVQ6uutcDMYLHrt68",
  "key34": "5AVYeZY8qoKAR55pwLSWMu75chJbgVE8qj9o25FR8uzoaCntCh6x9ChgbLeCBYpir4omK2cE89Sxjfv33mV2k7np",
  "key35": "5Hvbajag6RQFNsb2K4LENzCyt7wrEX4Zgk2edvc1st3CfTsFBTnNtSQSUbk8Wxu4H64ydvFHuomYsCYFcZiayq3D",
  "key36": "snwQj1rSSEb8u4bzeoWQwCBedbLGMrH2uvHRmYUjiGVb5CSTMmd8NhVykQnoMSQZMxnMvUsjhWW1peCKK9Ks8dd",
  "key37": "24LYs2qUiFEjDDCGVG5ESqhskLpMonY5hcKJCoia2XsmjTu3y34FnYz7HAzTHGrGwricnxSToj8ZT6LoTpHe35Nk",
  "key38": "AviGwLJhWJMS9nMHgb9bd4CM2YUCNW4Gxn7cPj3oLGT9ZwbPZEHqe5eDaFcBU7bJwKkrmuE21qRHWen4jYtwfBZ",
  "key39": "4BLuQT5ivjBhbNrZgqcQ4imP4ZPMTs7DBT4G4vx42tqRVB1M1t9BxazJqLERhkfVc4T9XRMngzneDsH26L19Rxtk",
  "key40": "3oPN5BkZn4qvnneWNShPPRmYGJV9AGwieNNYn2yVTcMfhQ2HtWLoiTwQAw9yoTqK9hpP9ybHJ1YgyCRYsv4bsnuM",
  "key41": "3JY6hpXWt7dHvxD5D4hmFc8xyQeD6dK3d77ksUxR4yVHuMsnmyzciuJkDdLDZu3Mo9kkxUpwfix1t1nH7aVuEvfw",
  "key42": "3Lys36ihx2pQ7CMr5Qe35E9cgftgiudMGAoUw4TpFtYUoGvQc9pQTazXRH5yf8kmF8t6fk2NbVAveWGqLwrutNa5",
  "key43": "3wpVvC7Gm3yrNEqN17Him42N1AhnxDm8qpLGR6b7aVjWKHrD5mk3xiSxXRKVY92xN6oRD2PeZduW4pw1MCbHH45k",
  "key44": "2BmSCvjUhmCgaU7NHxJaFMnMcsTA67aLLVZ4S2a7mghXufazFwrug3L6N565JjptHNqzyZ9YKhLMagcDy4eqx2ti",
  "key45": "3vV5DVLunjW5oJEGbvqM4t1EQW2fBFZ5RuMmqR13jJxL3Sa8WfpAt2G6ab4YZfKi526x77GonxFTueorKUd3rkZQ",
  "key46": "4tsGXSiPDdEvVUrFyiV4g9SbLDudwYujPyj247TPg57idnDvzWMHvTtR68TRPkPKfhR7V2GLnX53Tz8UC76ibT4W",
  "key47": "2W1nFkNGXnue3nXNdEUw8k8jKdEGZin1jeowGUo73S4FGqFTaYZbnUB1Xn7whLFJGacJ6ZzhUjykpxPneFwWwpFj",
  "key48": "677d2kFUWn5JsrytcfT5Qb6gr3esCsuTJgiUEbK2RHTEvw4uFEWFduPHXPcpDx3VbphZ8zH3JmJ54pciGddiPb4e"
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
