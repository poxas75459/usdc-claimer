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
    "SXDoTa4X4iKk9FqwcWpCEdcykLBFEdU92uqBB5tjFqyXzZxxC4Z95AuTkjVrUB4xvjfdeqQMYAUA1xMruWWXRut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uh3QGwLMhoCg3dwkjSQLwKWdNQxEZDeACNMCjq67Xz4BAc7eEUiePEDVBgLizChSBgtE2ptidhdU7RPYHChYdMz",
  "key1": "3196M4rVATT2NqUQCHq3ndSdvXDJfPNmY9vE3DvN2h56zAtr7kKQ35K8rEhJ655UffF9srMCGB4oXHHNYrCy6dFg",
  "key2": "2racRdveHzKCbCACi9daFMW8W9NsdtJMtTzbTMcWt4ra7JRGDntCKDT7na5zUJWHBw4sdbtra8ktvWbZzum61TjB",
  "key3": "2XoWHAoZus2sKeBNC9x6k1jSkXviykmwUfzoUm7dEUkMrvzKWNRUesaioS3vZXiEf8rDQcDiTT8GeYiA4fmp1SGw",
  "key4": "2ynowyWS8UgUSeuiLMHBD3Wb2nyGudUi4qdmC78C38bbhVytyGdGZWgjxs1sjD6pDY23FXu1P7P3DxS9ha1E4hRK",
  "key5": "3ufkXC2CdctoWekWaXLEoQyUwasyP8tLotKcVA2d7Uytu1jErEeuEn5USPaiVSv15vdeNHtkmD2vQJDufE5U6MRJ",
  "key6": "3TvhG7Jey7ThJY9MTpsPM5CyDRMcE8uq9SJCZpw6JaKXHBWtnWajQ63rsa6xGR7ZRTJMjU5GrLRR8QhuKZBzKkA8",
  "key7": "Rh43TZXVTf1SEsc9JiMwuhJXws9EoVmf5c14dvvkivTXU8DgLSzAdThitPxEVTfeXs9ZzH9H3UPyP6J8vg6xcJJ",
  "key8": "5r4khzMQg2wqqnPbqh5FFYYDW2SPzLC5BtwxnWj2y7XakmXrzJgVfcpezkNfb4HHk6rBmbVgQLiw4UYNQLen4Wqx",
  "key9": "2jHPkF8Y1YivTbtxDPhRsHSqCGPr1uTKSTck3V1BTdggXeH4r4sBjL97TfTm98Vkav2RE9qnjuKuz6yjj19K6XxX",
  "key10": "3SsK4gQzSum2Fnavbycipaigix4PGdzrvJzq8jfjja2fFxemURR4QeBJVP1o9SBfuJJANbTd8oG8fxnTRRgG3Eyn",
  "key11": "43HBAHpu4adiJpf2gUGc1a74K2xk3KQ7LcCR84hUCukJUt9eVmXTxZmxK7Vt9rr6FRoGNhKgh7D6jsfPhU5sWoen",
  "key12": "2YavS3TzYbEKZhQuTCqR3EkDhFZf73DqscDnDtyTfmBKLNHCjvXCrYqCqHHP4tuxF2XM77hcTYtnvBcDzBzRp65z",
  "key13": "4Bq6NdqeWnF8XAwuvFmF5FioS8wgE3WcKh1HWbsWhww4T97eToLrjTX18XVRWUcHPy54SMwLT1sc5oW9QBARwJ9n",
  "key14": "26GUWi1MTmsvqhftZwGvwDPwK3KJbcRZRJ7kSCEoWmk5dDWR8b9oaNGEv4QsC37SCq8Fn1JTX6SGjrVziVPvZTe6",
  "key15": "4uaNjvem9uLQ9QUwFFx122Y3L1jhiR5k4e1sReix6YUtCRVjnZURhjkuDwGBN1sTLTRTVwCsTqyqeGEXncVHqwbv",
  "key16": "2UsfvmRudMjd18yWr5VF7sHrZoqfKBkq2Nz7cVTsQ32StDcBJF3zZQWhLkVZbhPDMqXjH5c2Qums3v3yiKosrkJz",
  "key17": "4TtG5Tc7qUMt4Vet4CKGwu7ZYX4eGrubDzMe6DZUMcvqFRLpaEbreTb4XARi4yiH1ZpTqqwy24Rigun1ZRe7SRea",
  "key18": "3yvWkxGg5Dd8pT7VtXxK872a4VERty12QPyKCgvmm12x2MAtX5LjGVrCRceGgXxgsPCXy2s9AqjTv4zV3FrnRntJ",
  "key19": "5ebU9zKDQUitdJ59YpgDgpDvTpJLvhzRZMpEgSBBkJBWaJ3ksYbVbDDWtfUHiXGPq6BtVYtrFCsRAdqVUNXmJbAb",
  "key20": "5JUCcNA19ik2A9uhBpGSSM7mmcJEBX9BFQKgyWrGukSUubhiK3Fu9Ni9CZGPwZrf7csNUrgD2UmjgbvPkiymXp75",
  "key21": "trNcuWxqMzEp9Xtx2PYRhP92PzDgYJLYTCNdHEWVtA26wh6nwdPtbYejwnVXXYyoUzdWSz3fEsASGJqJvm4PjFd",
  "key22": "JsZTLz4P4rMHgLjspetku8RCoS2QDsC7mdsaHUunvxKPavvNwdMEnobCDsg2iw8SBE7RyeFFvT8o9KsscB1wAAr",
  "key23": "3W2iDTw3oyvWSjppZCJtHmrv8ZVMcFMw6ishmJ2mzTU5aJVhpVfwQmtdUnKb7sG59TZg18YbqggbdCqcwTuBVEKu",
  "key24": "5qiqmLepre4Vy9XZjJn5idSPUngdvnrXBrJmMRky595nCiR4QMHS6JpBqHKeLCaPjcx3Feph2RAqNHkYSEkd8816",
  "key25": "3rUfieakXhDEhqyM8ZEuTA6ecsvDGjneP7cYBrvrUUozfqbs4mxipx2xXa7ZYNh3bm8XXMaN7ceJBdXdD3mYoEP7",
  "key26": "124idR2bUgGtHWmsWKHKfPGeRP1g1avYBQCdhV9hVeHoM2KLkQRPd6QXZSbeStrTEjEBVM62mE1t3prsBvXACQAi",
  "key27": "JHmAtpQotsSsYn9KMeN4uxxzf6ZoRmQeHCx3fMJ7i7FoGvKZMN333rYZYqdLKofwzXGpJUpKRQhj1JfxDwnueUB",
  "key28": "3kw2rxCAwwPxiUC1gLwudzDYzzFyv5gBfMc7X6pXYkLwYHJrKUEwATK41GywM8hRGZQ7KgbmBhUivYQfHq1EnDum",
  "key29": "3CE6B2drnxnKVfa2iKHVcFigLnsvJvSWsnXy6GFGmuv9xfysnj9eZgN54Hy4hKvF4MtJLKTY5hpprYbRAh7Gxapy",
  "key30": "2HxAd5J4coVXijngEgTrRwqUt2BVHbUwZ6Pw1VAcjbQaHX1ubRvxrxCL6SSkU7ZoFmR56qaRzpZJ3bcUC4jKG9EN",
  "key31": "3P7swv8sxyYtLS2abYUp4kQopKK4JxyQ59HcWntRSz9WHjQdRqsb64VNKqiNMyZXisrozH4H19JmwyLVpDtd1NNA",
  "key32": "3Zy8xyM7JNskpagAzL47EpgyVePj7fx2mVxai1iPQorggPLVdpCBoAJjPbfg9FxBhuKwRkXZktA5NScQZHSopMTF",
  "key33": "3orZASV4Jjs7JVjpB6mtN9CYyatH5Usqk5wEm9t47Jt9ARhkjbKetoBWdYx5T1VFwz7ZaQL7dUijFfi98s6TLP9e",
  "key34": "yB8VLPBV6pA8aWfae55TCT7dL7YskSFmcUVPFWBPD8TJMyajHUfhNejoFU36Qp8kE9295tDX7ozonScULU7VDVd",
  "key35": "W8UWSqUdBPFC61PWCFdDaj6ef8oXSu2y4EVDMS1ZcTaCSFpB9m8FUDSrHVTgvAirHGCocLywR2THSgF5NC9raSG",
  "key36": "4xHcuqbwtFbWL3fNbEmJyAcqQSofAXM4yqKA7tHj377cRxHRyg2TXiomg661if2cLJwv37G9a6Ko7kCxvzJ2Pfsy",
  "key37": "jtYoznwCE2HkAR6LWx4YGB8rzqHvdin7FzgKu7fD16VaTibyhXzwjhZs4BJPpks4XXEm2WVfH7KsPUJrfzsokju",
  "key38": "6xfECfSEheZSTaHx56fzKRo1ZwRh2Tw6mTG3KWXQ92MnbSnU1hYba2Cv3EyqTX21TE1AQ2EBHssgyGvqtEV1k3d",
  "key39": "3QEoevSwqMTsz7T24q35T2jZPB8sNgMNvg61enrG1KyHeV3Nywr32bCJrjoBRfMDXGJMtjQx1n8rTGdXQBn57J2Z",
  "key40": "g3Y9LoZLwcZ5nDPx3TfneAGBKaRcpWDnNirBavXN9AQ5KvhpZh9Ekmdv5oUDWajcDkQtVr2FfKfLfUk6PUmTUSb",
  "key41": "4xWa4JMhQGX61YYJpkB9aT747BUnZGv44CrcXzodijAB2pCoLbaHdcJyiU5uBzdwo28AyTPZHbCkTUZdcu1EAaJ1",
  "key42": "4Q47SLBHotJ5rHYjZsGrJ41xkALirggdtSzHhPGfTWzRdYTcnV9RkHFAutigbCkjY11bc7pqJSRZ8CMZ88xKk3Ft",
  "key43": "3osStNrDRBeA3wKfMPZ8CwXtAk4CqYifnKXaiqCHBwxUGjquVc1pGxzWgXQTJqQVpmcU6x8DWGLvnUnsMa3xp9NF",
  "key44": "3MRRxHVsM21yBvLsjgY2LaSZaoA3M8weRGieHwd7sD8m3sqb85ZxA2s6txC8hJTxomH12g5nDi8nz6RX9hK5JoGU",
  "key45": "5ENQhHvzfnf4XFXtxi1Eo73uDuMoTt7TtHWa5teVfqcvPUhrQnjrPJLwZfKgiGYrXjwrETwChdK8sKf4EV77BeTg",
  "key46": "3nWYCQVsevHU48Qr9cXszNkUXcJeHyF3JDYcLpr4LzrLSgNEUXHn3K87E75VBbNntUAPPwr5yNUjeA2aaLLgCpvP",
  "key47": "5KSHEU7NARrBK4KFh3Ryhm2pYpQymMXrxJwQBZdw8bzroCpyZg2aMTABYbBLcAbDTKWJFWsHCwGYTkfT8RL212ZS"
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
