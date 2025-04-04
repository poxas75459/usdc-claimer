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
    "Ubmw87N5YghV5FXQv8DXWcpJgGebBn51o4KNoUkQjBRnyUu7yYj6JmMQHYEgySQMsMmXzpUyNgL21dYfEB8PFcU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kE1YLMTVx9hpkPV1NaFxjcAvhndHy7TS9vjSTFnbnVqqeyos2ejUkKaXevQkF9u6BpM9q3GkskSBkuE8bKrmzUF",
  "key1": "3t3ZZ41PHt9JjnqVZYGZiNXRxPZ34shGdjGhA7VMXrLeRU5xpAcC187XoyKRsqk2YaGwF46TrdWKkFGRG6FZdPJV",
  "key2": "3B1gDsEs3GsDZk2LZNnMnbnijUAYhanh8H4Ku9JiajQaz1rjVkDX9myYw9LYQR5YPztYErjpsHaf9u3rJsfjv4KE",
  "key3": "XrNSkdPXYLF4akdVWavpiv9WrFvPGqJL3RjmkiwdEM58Ctrs2Qy2z2yHW2Qu8sbx7u8tvqP2SqyiLZ2uP3GSoYv",
  "key4": "3fz5uexffvBBdFJWJ6Lrrc92C3fXKegx4rVSt87pY85aUysobXjYriT4LHcgByEq7ZBjkeq6xTHTmt3UEQw4AsUt",
  "key5": "KRiGgSJdB4UirrJ9ekr3cFyQPWZkLRu4ABJqSzn1ie8D2bXgdWw1gddwdSCTyhzMvVEY6uU1q4fqgP7Q95irFEa",
  "key6": "5j49Tm84A1c8N5bgNPfUiV8CzXBY8jRr7ZtbVf4w38UQMm73Yr1dbijxA2pHXwd7DtbbFVPaXRSskcNAzGjMgZeL",
  "key7": "5YT8oe76m86unfV4ci9gMp9nz3frZ1pQQdQT6G2Hms2j97A2iHC3PpDfbcz3ou851zn7jzydRo3DkSWaLBJYxaYK",
  "key8": "42zijgx4NepDZ4KXp32HLBjYf4X7W1q6VgBodrwMDiTTiFMpKD8ApHSmNGdhBLGGYsXMsMntgvwWinvGhtALqsLa",
  "key9": "5EMRjf48SA3jxGutDEGg9VifHPCggTcjr3yCpfiSPSwsQDq54DaB5nggTHnjhSDDxU9Mxe7wdovQY7QKDAFn7Zr2",
  "key10": "hqrLJ68aHjScnPPzXmgcLxhNsYsuP6zYJE2jKMRDVLtktCYQFMxrbsE3FZx49zAbJaHBznNmbxUCYM4MTYziENp",
  "key11": "5hH3NjKC6W5UWXsecx5KHB23GuRvCjxL4b7FoDCnSiLyap4hKwSfLTZpmQQThmfWWXzGwfjSpRorrKjkiWGtc8X3",
  "key12": "3mPKD5bnccZaVCTucRTQ17ejM4Q1kX5xeCVDPAQ4C1vhRpW4YYgHgD1YrBadCMmkuYbuFZgnqvrP5SvyhTash7fN",
  "key13": "217mznecGQJkzy4cB4FwFxm8umnyVtYyMaGT1HvG3foAPHjbWE2LQ58vCWU2zXCeVoESU4EHFPC3Foc3kAkZHVAN",
  "key14": "3kDtmZysJw1CTaADrGUkYPnjTFmJdiBbwMKnrMaxkFzEbQjjXnwQPi746rsi27Uj53fVqGERUEFqHC1RFdNMaqDU",
  "key15": "2qhjGLE7ih11G4ZRqJxoNBtynKGgaBpzJSQ5Wu7SftrKe5GzVF322DaUHQN9XyhwcYRopiyoYWg38dAdXjcCf5up",
  "key16": "2qDkvt5otvEqLAzJYx3iiBPVcs9c8EWNZFbZ1vBnPc9t8Dqby5Fdz1LC2NVRFpzDtXCs8QrMKefZN6T2Zzkyvikc",
  "key17": "3hAsvTUD8czuGdBRJq9P34wq3U4o48sCKaP2aFZQCRGRZtWqNEuJzi6fJ4ScJvV4qxnba8anR3JnCcy5uMNQKrFM",
  "key18": "5pkXUYiEC2VRVcEh4FXUmoBe5Fovafd5RFebgnBJKPVbxpENJcyxAvG1BGsTnTcxcP7qoUcXn18WSqKLpi9WDytA",
  "key19": "WBYEpz7yfiLr9RJR6Tp5ZavGr5PshNt56GCXoUBn6nXMzCaQaiZWE5BQQ9DbFThmZNAHVmVADsZdtmrAvmy4NrS",
  "key20": "2f6fpQus88G9AAcdvDU3oHipfsVpdDvzHKAkByiCcyBnSHMhVPBd6aWsTdAfaQJxdJ91ofLyptyRTDDXi4gyjuVw",
  "key21": "65eTJLPYEbR2LknETS5A4uEjpgJSQtxn6NCf4MqwnbmTfUYZhmNSPEo8kZQx64PuKcr39ugrhJksSe6szxA7YWqi",
  "key22": "49RzTGgtG7cawpGrD3fQkAEzTyoc9EmTrK7ZG1MPmkbxVA735HecpFdYRqrUE5HuB2oyKDAGMm3tCpfrXC4dRJEp",
  "key23": "YFPkfRL8TYTyZDwR4XWqh8R9iVivwZMLtpJb6nRsXKhviUmR8xxY9F2wK2hwujA7Nvxgep94dgDQMJ6zAX9SVWD",
  "key24": "5PfPVHBh8SVAo7NK5RK5gC9KWVA4dzmL2dHFt1F28AxQ51pZotWxVRUDWQxe7L5x1PpYuv3PmkMH79c9xF34Dprn",
  "key25": "3qum5TkdzRzd8vNgyPYw6MhzLABwoMLxoyQJYxMochj4ZacwdRUCHNYHb1dNaHpmuSNKJd89odmMnR2yYw2FwbTw",
  "key26": "mJYJRNYkkhbVRSeXhXV9WeYyQLuJ31xGyLQNVpbhFskSa6M9QCyJSzJXXQfdXHWbFegkYNKoKvkNiVz3cGz9Xt8",
  "key27": "qsXBFWXWxEHM24TzM7dsNhQHLyAxJYgDAZwyzdoAQzXZMRKcz28TTEFRSz5mRfCKTVB58DsYXtfih6m2FErUryA",
  "key28": "2kiA3EqqguiAV9JKXcaYHYkawYeXY1kFN8homYRjHEqD5Vm3oVRCTCnb5M2fK53135yqJjiEkQD27uLXWZxzTTUB",
  "key29": "5MZUwVidfW9AUWNrjcuMKpM791bqYdL2JycWyN441W634Z73J1uoAHWcnXceYmKsuY6DJuZ4H8jCmCTer37Dpi3g",
  "key30": "2S2LrDgTNH9ez8zornjtsEMGsWYK5CPBBQ9HxPGV8bJmS2D7MyDEUvLaqFRdkKvVKnNVo3x9Fc2phVhZgW5JrQXe",
  "key31": "1sMiAkQsMRFLWnXJqHU83swG4nCFojeewEymRjSVrjij6uUNBqXFm4UFxbcoDvbyiFkZjJTDrNfp4coZTxdZKUZ",
  "key32": "4zkugD9qi1wEnj2aKm79MarzStEsBogNiWCVmt9QeFECBoPapzHUZViMH2c2L1DsbDq81FMfxrvT1PFLskgc5nbT",
  "key33": "2L4cCXWCAte5L5Dt7HJu9n174D2UhRVT59rCik7UcvxWQwU1zUAmdxcmM8cd2BgGk2YzZSPC7ifUxshcuZvU7zqY",
  "key34": "4H6RomnAsNWvokhXKvhjcCcS9v3xwy3Z1fFYk43M61qMmBpHVQNWiMVqGCBHG25hPkcFMyQtXhF3TQHsz3s2AXtD",
  "key35": "3tiWuu93cLB6QJriHRtEaKbLQYLeAUxLKbnxWFw3fiMuSwWk3rmymFmJHMTEqcnb9NTsqzTMLUXhLTuuVrFwXtfc",
  "key36": "5Af8GvY6RzdVszaEgqjLh7jvwyvNAF7VuqYHgdFgQSa9kfKoebf9sTzwCw8ce1jTYjuBdi5CHuLe86DFXsm1AjYq",
  "key37": "5Ls2d7Unaj4AyqXr35SnLVKYyZZmUqPxpQQjFCfMTYcY7Lroc3drqP8QUfYUdv2oy1vfmkkTofcdR9sQFGwHWkP9",
  "key38": "ty7mAwEkhSNFM5VfKo3Yzu7tsfnccHR5cNek3xpwax7eWJKn9ynGE3S818kNPs3URiHXiU8sAoSXgSUZ3PHGBGX",
  "key39": "5sV5prFXw191wSDmbasjqy7CQXfNNH6r54oG7WFAzAGaB7Gy954Tmw3dWJbEMAMi3CGRS1iwB5sQgQEzGJkNJmPt",
  "key40": "2cVorMkk56DAzPFWUTbmWk5721WgkWb3QEQ35uhEnS6qAGwXR8wjZgbGhypashQ1yYFT3Pn3GF7RUPNPQG9o3G9M",
  "key41": "3iUHBYEwFicNLoPemZ4V7ZgdfHeyXspRSzbcv9ddxY2Y84fNQbQCqxn3K2CFRkKVH37t4MciBpJqshQtFuA8xm7",
  "key42": "5gxz3UkgXGaW6W9kd9khr2W1MsiL7cjVk63wvWnuADyq4NMSL6nQ4mX1Q3vuS7UnPpCH6pafoXhHx6CQ8PA26mHp",
  "key43": "2igX8nfL75HyJMj2xsZReSnoFiiG5KoaF1i2pV8vsAv2FZbCshkDnJnATy9Eiw6Mj8N98hh2AzEmaUxwLCnXcgEt",
  "key44": "3uBPHp9gCpTJZSC9kqreYPFggEMbg2phDxs5HYXnJQ1MkDFsmxqPfU838DmjVB8SQttb6DD2az4GqMcaN9RRFPQV",
  "key45": "2zqENNvkDj65adkgNJaeLckGZcKFn5aWDWtXybtXUgaphWegPRcFS1vUB17jL7csJuDNzesms1STLmqWCf5TCNKg",
  "key46": "2W4dvDeAmssDBJfL7tiT2p1nx8vR72Z4NYxKWYut979G233Qkhf4TcjBN2MjygDhAw8j6M5fNpT8bCMX2zdvPqSG",
  "key47": "59Qf41ciQ32vxVeinMSfgZzqs22Nbt1h1GYPh5MGUSbttwNaZWVT6ytBNaVB2CNQu1AgqwvuxRCxgeT5nFCzHMhx",
  "key48": "4Do4XNQDNc5meQYn1NH3LE91aozCQq1yGQR8seLyphAsdb7APbY8t4v8cf1XWt8ZrV8wgWhiPkjvio1HjUEkXC85",
  "key49": "67VDnLKZj9S8NuFWE1VeMScNfDaT8yhPoAP7cnecTML6e4zsdkpNXKwgt8ubynvvHuRoAvzuUZFwEZeqpUzWjbs9"
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
