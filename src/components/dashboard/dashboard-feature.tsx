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
    "22wBuRjJKspp8q4hMbHGpYij7zGz4bfqcBCGo19GyCEZ1FtGTTRyMj7WhNdTMsHSW6kEgxf35RJv9GkTjbAqwqmc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BnSaUwtv5wcMxYExyGFzvJdWZfaRj6oE6LDt9eWWQ8LBm8a7mHvyG79gFTdvLty1djTGiptDU8dviE6ybTdnvnd",
  "key1": "7B2sb8ZZehG3yhbFV6vQoX5TFTvmQnf5b7y6kU8s8Yp1E88DCenkBeRNJ8kb32Mqzt46K8p87h6fDBT2cMhdNKr",
  "key2": "5EzCDMG6aTnngnraiivs91JqXCbCkqSz2Qr2u9nXK2ysVnnK9XSyJB6EUiPeuPuJE17h6W2v8nrc7q8EuzFgND1W",
  "key3": "5en2dHJmFndtXJFv5FtxSKmD3kiZAGYnuM6ftEduagRaRsVGBHNfchAvE6ZEMoTRjHjPfRVXCaD3ED1q3GQfmViL",
  "key4": "5RHoLbXpwjTPvCuJS1ooWpzc7DXKfRhkXG3h4yxqXS48ronm2ZLfeDTEYAtXUf5fmHawFy6uCpAKHmyMkUrHCVpy",
  "key5": "48UEnnv62MZJEwBHBB2PxXXk6DtvY9yjkEFTmuF41hWfSK12pCfZxKX1FeB6TXZfDiskieKdddchHyBFspJpWPEH",
  "key6": "tLfhf3ac4W6xeZGjKjQ5VegE2FNYL2niYT4CdG5JUYHbhNv73pF4vdxP7o24YAQAsix8cHZgZ6jyzhW82L4Fzr9",
  "key7": "59ht1vrUfHdPxC4mG6GsXc1Pny9knuhvWLj3NFWDp23hha8dNRAXjjvsAPB8AdcUZLUApBRrsr136AK1WaZSdhVm",
  "key8": "62dMcuACFLv79W6noC2vuJDwQkwKCSA9ihJSjAyPaPt9ZeAYn3HQnkSXTvZGDPoBDUjnxrKHYFAC3Xu2g8oVdBHx",
  "key9": "2RtbbJKatRMiNRaRu149MYdYkAYPad8o1uboi93jES63T7CXw5zz46f7cqpUfLARECEjzHnverP4LghufR1UVxFQ",
  "key10": "3Yv3Ppb21Kk83qa6LrZeED6bGbLyG5NDnnBFER5JqbzHXaFQiMkdv9LU6eMTh8rWV3VdRMtrtg1azdzJqvJPFKjE",
  "key11": "4t1wHSqkcrHugwxx81eaUuNWW2XbUk7UEoFVhkTxZBDibyFFEn1ferrSnLPr9w8fDHghynQMXwqcYhveoy9pRsCE",
  "key12": "zr9stgraBdXB7ss7Nwx1QZqnYRwL1yQPYy8FFLjqy2k8v9Qq7W31eME8hNjshsi5XRTN1HkZz1uAUtuVeyvz9st",
  "key13": "3MBv37LnRUfcCkJgvQmQo2AdUy99YQXC1q9ajyipYR2k8WStxcMFyLEVz1mvSqpSB1yEX6nSZXzus9KTYWjkkSf9",
  "key14": "cocpJFE95WT6mGj9iomu3pfag98urgPnBk7duByJcAZ87avZT4ZmSznfUYGt8PS68yoMM9tNSL3breh8AsejoEx",
  "key15": "51GqApn5pyAYz4GPswP7qrcFtPd8ZMRdKeqFJ9kb7MkXNKYjFBP5av8RRnxf322YUy6kwPZznBVm4fmxukzgi3nk",
  "key16": "PiULoi8TpMsNZfGzq51zE2XMqMT8fc8MTkKLNaPwr81bhLh9XQTSFzaPYwT9J7RANTbigy45ZbWH7RFuM2w5mxW",
  "key17": "4PWQrudFDU6nyCGcACquRWF7XsXkp8XpuSKqgYfQCKFr2L3TGRpCgxECYWvPEqZsRqVGHpzwvCrtziKzmGsyw8Ys",
  "key18": "2nnge7Z5KZKXG3TJGLmhbyu7VMXZ9BddnaAs6Xr3RZEkJGGKHDLaubnWwS9v6p9a9E6FUxQ5FiiNhXAUSDQpbBh1",
  "key19": "3siUz1xW8RyoYFxKTaDhLbKMW1oAm3ScCpzLczXPPn8onJQJLrLx33HvWRgsZ44cB2a57FV8xLf4mdJSJn6iEUZk",
  "key20": "zjyatU1y9Avn7CcPAMEkamkxW15cTEhxCm6vnuxXbdH3NKw9ExY9rAin9Sn7nV1mgX4dGb9t3kx8vR1kYeR1ECF",
  "key21": "5BVeg8nCcjqAgA7YcQQCEMJyqGSxQNVTkDKKXV1Mpo3E6wfokdU4fj5Td37vaVuUxZX5SJHyz9LLqixYMjoM4V2s",
  "key22": "5T9eWHa8vZrs2D3KA5ChprYj6WcPXkSijJQZ2J9N9jnYAQ4ns8HQ5guLE9rqdo3S5TYAwyBkZF3fb443wnGCQxvA",
  "key23": "3ujSna8LADJJHNcjrB9Jk3vEgXH5SXneVr5X7Qq5pFzVsoezSmDPXqBMUYa4qoNw8Evqr99RN9eAmhZzVpBsDYLx",
  "key24": "EYLkTnRTT4G2oNwYc7ZeYNVLPZASsyu3zJnyVVh7dikJsEpQqoHGUJRCmLGBDn2tinTEttWPwcCEPJacUbppiZo",
  "key25": "4VFgSvmLomAPqjVcAwmPe2M6RDadz8vvkVZ93fvimPWbd7dyi8nVU7GvHK55gkgUBSBWfHPZ7pAsGKBLqvSrZLKU",
  "key26": "5H2MBsEcvyVhLAnjPEptr3Y6cLvQ13fH4tqi7r2UMm8T2EcHAs1rC19oDBAK48vFd7WWgqrtM1KcsomWasVJp2FV",
  "key27": "5JyVCLM3r3hLENhpk9nhQvhFvNiG4eqHP9LTP8UWumBXwXd9qnejpQD6Wmg9SrdricmGuS1GBBZcrjiwMRYP6ir5",
  "key28": "2JiZCXWHQGvCmjPA13rybASGgQrfPVnyDSg3hH58ywyZ4rRt2h9FMefGUmGmJ4SedMHykQ6YzWdENDXUs5ZZ7mP3",
  "key29": "2JBWoemD2Wd45NThecyxLhkXHe2SEmBEXZesP325YTarF7gRGSPrrsvNN6rgGZjrPQhmBZTvo9ishrKQmRKjoKEy",
  "key30": "4CYk66ECfaHSWmUZAX87Qq9zb3HjTmQgpCfAmj3rVHb7TiYs7WamDohetpuVQZuCs7qeSWvwmj8unwJxFDM6TS4",
  "key31": "4HVakaNAPGXEZxgKxDH6BcBhXPJRs63gLGa76dzgAz2igfzapjKtAevwodqLh55xZZEuuLBz9aoNHK5tTw3PetQ4",
  "key32": "5Mk3nqzh6kfeSABpc3shpFyXpaDvYHaJ3Ty23mSYDmreLmicuCBnV8RWGQUFtKWVA6vPN6BRkMgR6mUteNZMmHEe",
  "key33": "5y5JHALTawrHb8d12idemLiehsWc8XCCwViwfwQimQMycWxSmFp3Tn8umPCfq83kzXXkMN547hdhLdC5eYS4bFLS",
  "key34": "5AjByuLTe6xGUXFA4qYcVWgR9n68WeyFxiQRkLy9UYHr4D84TotWCgBHTUUBS4GTHdZy3FQ79JBEdxq9vL5XyJ8g",
  "key35": "63GGBh1HrboKdBJxegZgMxVqhvWtgRExeoEWz59tnvoEMvCMPYk9C8qbHv8MPJgMBaLQ1MgdCZLaQqPnH1gT96Ac",
  "key36": "31xoxnqgCa3K3txfMmPW1AsKqqnrdsHjLSqCrtK6asLMj2GuwAiKMC9kcG2ymZ7RtKdgfJ5aADnjsS3itvdYzXCH",
  "key37": "5fVB4PRxYtbgQc6s8AWJNJky1eL7x4iPnYZv545y1nfd7yvviWEvdRrFevfsXYfp9BPphTZjGosMBYfFYueD6u7M",
  "key38": "5VGZs6nsMnXM8VHg7Xh971dadvHpNVZsdLuD3ueEF3633U1XVBHbHwdNnUqt4AkHGR1WwcQxHtPeuYt7yRqnZ5DZ",
  "key39": "3shBF4sNZ71NeJ5tnnNJBKAVpS8yBybq5tiEsZdV3RKiiYZP1pQVMXC3rAXcYBxUrC7H72XeeRT55FPW9tdTABMH",
  "key40": "2cu6T9seF81fhQN6DWF3qAo1P7ynQMiUX1QQysA1wBdAKsMMUF5Gnbkaef2cZxLZXiUcL3QzoAjQhL7VHm4GRoB2",
  "key41": "3Pb7vbNsBv7VbicFUaeuj5ZmZujZi4YHD1ZtFhYziHawGCHzhC8vqGLb7uG4zVV9JEzYMm8fLT7ZyVFnP7uBFsgW"
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
