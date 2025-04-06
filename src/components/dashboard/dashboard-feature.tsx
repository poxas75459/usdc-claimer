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
    "D1bWC3SSiGQ6m7Yxfw8yAtKmoHwyhZEZtkaADZYQZvLJZ71FCu3NswkLTTy8vx7yLMZnhwRGUVktDbs3kq9QEzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5md6zxu1YEnpidqZ8A3r8FmSE7QH5zK43yiRwQUiF8ABiGWxpXzCZjPGgTcCFREkLJiWofkpv6vUzJEP2bEFuhsq",
  "key1": "2Js4p8Vz2rdjA1QhNYNEFz5nNNSzoszxy3mBWGtPD33mjBwY5MnHnELcoKhYwqpyLc72FiUprRxxw97HKEBL6iVx",
  "key2": "2XYnBHeZ4Wssd6d8XxH9V6CgFgU5S5aP8SDi5pNcKNjfqX7Krg6EDWsSUY9AXoNKAHArvZSAoeMbGoNhWwqrGBbJ",
  "key3": "3wdNKzo3NERNAsXMDhHzRvND9w5FN1x9xMdfZvop98u79QxYGkFaaQmFM3tedwcHYYBsQUfLFMZzif5Gfv4HUdp6",
  "key4": "4q59qfe7bKfjmQDGkMTYkzJbFiLUXBshWjrueBgoYLheVQT766oLpKyU8vwVfxDX4rR5AYtJyLJ2h6UsQPRZ4wrB",
  "key5": "32FZ1KjShntT3MbEF5iTyspNeqpcZAiZggiuW39aGyLBQhwTst3gKYxiwTnoNNrheMtz8KBAaX6Lt6HUrGVbxP3Z",
  "key6": "5yf7wNyDu5GrRAJBfbRAu5oTAM76LKevB9f71qZ4ZbtcaxaATs918GuVvkt9vJ3ytj5oYNqLdsCDU69XyfrtpPzj",
  "key7": "3eLnfPJcGGdjtdkR8o8UdpjVCUfWgYrgTLRrd5Z9my57QGojvgwS8GbNFEGHN1X9xNroe98Xz52UMQvFuuzd281j",
  "key8": "5GcagoUZzu4rkBe4yF9bDxftb8oFdia9XaqrKKnCX5MbM4VdLiYJmhMUJLF9auwBazUcPBnqwopkQn5gfXxvVHh7",
  "key9": "xWjtJRMs1HytHfpnY6DWVUnz66BjkZXKdGHBy6QUPKczRt5piYhLH44nsx2HhXkwig2XKiDX5H68B2drdHwtfNq",
  "key10": "3k4XEdCxMUrAMhRvycn8MJoYL6649BL7cNi1dV9FkpQMpYFQmiK4ofGUhkwN4Cer1vJopNRBtgvumspkpcq1135c",
  "key11": "2L6LFSzEKt2dQikVMYDBkN8m8hhhSvU4z5Dxa2xS8A6pvB7NLwhxbserSqyU2CCAkrpBtjNXk6Jhjr9ZAhEPpbNY",
  "key12": "589TqYNd37qpAF3ffm9RUVY1gFRMeoPTypL8vq7av4GBZHysJ9RL9fqxeWJsw3LM5FSazuNtaXPqoktvw7sWvnpq",
  "key13": "2UBLpTxNop4PZd5vZLyEeBp28cnEctnStQh132QnA36ikkMjL37cd6vtNi5LEYX8wN7TKMYik2MNwq9SCN2mJPVW",
  "key14": "48Egawet9Sweh4Rq97ipUbfArkuYBCfhWXeUzQrtR8ZeZZx1eBkH1Zgu1GRNjZvE8fuKrXcywUPzTj9dCLUaxQHV",
  "key15": "2VZiYMNfYFAhEAdtJt5aBJNh6E8BBvpDjujZH1q43opjWceyfu35qcCnMMvo78E5HUq4WVLaypadoF5CN3rF51U5",
  "key16": "5hzyd1xPvTUtUVfPfgxJmG8ZHgkH63uypRRvUrikUbQXQGFdtwYvfAfRREEN2KRWrEAS7LSpPEKdXEEnHnXRvXci",
  "key17": "4abejAQzrDAQgpA9gdjwyjoQBKhBtmpEm15HvA1L7MVPaNYfj8JgL1t8jm1hd5dT8JHA1PsdJFjWRgiYu415yQQ9",
  "key18": "5k8GXjU1fmq89N7EgFvsFH9dYBzL932mLTHgpNGytgMxbgywx1fa9c7WzQpsMQsvrX4Ubdde7mnrVoGvubYHL8mA",
  "key19": "CZtAtgoMBVHM14cdhCueR4pTdDgCvtVVNWoJWDShx2RNDVkteRb748e5M5Lj8hUE1GZSSwUZjKHUwyDHM7qtGua",
  "key20": "3jMnduEm13aR5SbqnMxFBPZWsYkAadKKKusZKXqV2xZ6mkKbzDHBqJAM8sDdDYA5QUQSeFFMsegzLavfwsCHRyVz",
  "key21": "3hkKxaW583SyAS56bcT9ZXmMtKVMs8VztZAUFANNgAxZLSaMML7ZSADuNAnCYtt5FN5rwp3kAQa1yfHmSdakTuDK",
  "key22": "41nmSjsneFkgQ1fK1P9aZJxwUwBWVGig7mdzmRsPHpeSKwFSKNHB3Ha8Qud4sUuV32RLtjVoHDp5VaQc3a4TMXnx",
  "key23": "45zxK7Pn6kmqsgQyfkCohCT1MFLYcz65mkEWxCrvm3ih9A8YSczR1Qok3attkWLk2tQbzfEiuxp3aM9BvwrAnneK",
  "key24": "4JtczxjpEaxEysLRHeS1h2RxxJKTikdEmrKFDrsiPP7gqaagGUZoPD152Xvbi7fdvRe5gFLgqorx2cJxHcPHAoih",
  "key25": "25rAup2T6H9VyAyvsPbxu4Hq8kz2jQ35fb37Sp4j1B63fRnfK4uBRSJoGyXfZA7jCuzspjYheAKCDkxFdyjGHwyh",
  "key26": "2pVL21Hq4KPgARjjoeoj4kR8EQVdwhXHe4SURvCWqrogD8Jox6NjmPc7nqq9Diqbmq2tLYMxhn9D5Jjg81u3NXJj",
  "key27": "2r5mb72p9RAWNDcX8m7UgEyHGqgagVDq3N8rmwBSe1JGHaUY1ynBMdwMynaZ6quHir6vdGPcENGjgTUzQ17LVy6y",
  "key28": "2xSbXonPZsMyucuTVHmDFn481w4qt29ekQcx9GCnK8YtSqiFTQXWB1kkh7zuw8EmVGvSBsP3jZP7rTEatQLxFZxA",
  "key29": "5rMC8AK1qRrUru3K8coWDFp73h2KdBdFNeSRKUuCa4r2TeMcjQvS1sXKMaGh14zCnXDJPb3E9H1XQhzepu6j1vzA",
  "key30": "3cB6PzGEcY4Um9Fmsh9wR7MPhvHcrxdnnw9NAYi5G8bBKzhXyZpPfhA5a6pvZK4m3Q9qh8xMPacnd1c5hGw4rrpi",
  "key31": "5YYshesaEE9ZPHgUxXHLF5p3Myz7fFBvDCmf3pCiA1CsPdvPjDoeCXuvgQNj9Swwdz5BLhz2PyqGH71PL3VQUyxi",
  "key32": "4E15o8vCazkCYuGKiZF2uAAivNHQiLstmY5BWcdhyVZdtpK2ncY3GpP9jAw7v1tSszFsausb7gf8ZidERdRMrxiy",
  "key33": "3kzHHuCvW1YJny7gxS7th3N5jKi2ZQZAtnPvfQUFF7AHsWfUDU3UMpmWG9XgRKx4Ryh8qJx3h3MEvQCt9MdTRtsP",
  "key34": "4DXckYNvTxWUDLSzaBU4pxTq7fLhBZe7MrHHhEYxYRfuSHC68f8p7pPtMpMRiy6VwCLmf1hg79TFcZPf16Rr8s7u",
  "key35": "4tjbK3JPSFaeoUUj3HmyAwZVSqHkkiMs91uSXTgq3h2kdbwRw8RSUzNWJL8NuoBrVnDcUGUoJCVKmAchHpeUjtB6",
  "key36": "3xeGYeGBBxKXVYN2ebnmDgs6LFXdH7y1bPeRQPiJzfzVJTBRNVNxD7WsxZJEG6yKCPpazRh9XLiFEQ8iz1JaeXwk",
  "key37": "47ywg7iEg5gEfcRweGyEpdVYNzwmNAq4XA4GBufwuzzunecjrwZQ7R23Aag3cssr17N7thSofmb9m5gZV9GKdq6X",
  "key38": "qCoiP9sAjuyS5qYrWvaQ6QKNNKujPooRhFFXfkTFicg4RMBhj8s6Fw1qiTtGst97GXxqhwtiS3sVmzWgQfVufnx",
  "key39": "5MFxAPvwqWbvCUtVYGPLNBFCq59eHo129mUSWWzCpNsTsNimpk8shj5gTHhtvHUpNwjwD3pqpjpfyTVFKKF74Km2",
  "key40": "2bc78KvmYBBHgf8ZYrr1kNWfRJ75pHzywEwpMt2jrfEhqUuxy7wrpyQmeqkj5bG5gWeZgdeYGPm2UKNu6JGattxm",
  "key41": "5tzXqiTXWu483HrCSPeWFkHXqXYNYwHJYdxyZYc6Zm4gMw7nfBcXS74hHv45AcBhCg81Vq6xV4FVDicy5gJnpgG5",
  "key42": "4dMkdRqKHRsW7MB8qNJVxBReMwyc6LzEHL5h4KxFBnUvq1VUCsnpH42rhzbS3QBZ4RcYfPc5AURW9Riw8BhPWLDD",
  "key43": "4N2kRHLS9SSnPGN7KtXbAxQEDxEfF1zDAQ5cMP6NgmqWDkVCn7xTzPGKK4DGMrGtA6q83FmrkxYWuKLALRRcWgRw",
  "key44": "2Gd9emU5iZX9R2HWKaWFhWBZogyN6LDFGigJ8ML1ikgsAKwy3zt1Soiy7gKXkDcQPqyfv7kzbpgJFsFB1rnioorH",
  "key45": "4wc2m1Kvg9Xah8omCHiq82mZUHX9ATQCvugj3UFhjFVTt7Pef2SmVScShGQLezc8Hi9E13A92D9bDureqmRdMKsD"
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
