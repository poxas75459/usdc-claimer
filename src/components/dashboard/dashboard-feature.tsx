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
    "2iTRgJjKBRSVHFqWS8GaVwBsbUUWsvFpSj44hq55zvwVEyGL2fADTQVGANCbYVh2afXKFWyZcqUueD5f2SnFUaFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mRrHBgPbieE8PB5NZWDFcvvFMQVg4mSXtzKhUepTMAxouABQiaU2gKQKApqgiMrbGFwwkLkZjaGxMAn33v9b9N8",
  "key1": "3rKKzYJyJG2L42pn9Hvr4qNWtdYdARhNe9cBXus9poMXPrBSh4akezjTfwrMQ6XzVt7WQRYqwQSomb1FfYhaJ7PL",
  "key2": "3hFgUnoKwwpBDYYtbF7iqagGRABmZdFjUpBvNrpcMbQf8ccFnVqRZ8cWLXLBMgPvVdLnrAVxmjTGA4XFC8EMfwDZ",
  "key3": "sWteNRwbPpuQhdNbXctMF7QWL9pCpqYT1cXL3zcM21hGwfeMUSTpdzCGCtsBBnEgE9mz3rUcLQNxxNfkBKTnhwF",
  "key4": "29yc3RkDRQxd6rZQwytzwrkg3yxM84FH77NB4yukb1p3TayJcYcb1Ahy8Rw9Xp7E7F648W1oXYzEwLkG8w75UDra",
  "key5": "5yLjfsLCRSz2jsQVGgb9CssULJxJmz6FfXQsNA9zVNdKj3WT1xoaDzcV58uzq4EnVFm2CrKNTJgcvn9foHRHTpNB",
  "key6": "2j5yeu7w3UnAwzkuUML982H3b9G5nVJxTyesrSxu7AL9hddfGXVMvtEX6jjSEm6prb1EmCX4RBUKX3M4Ses5g93C",
  "key7": "3aiCamH8ZLUd39FB8ogNVc1tSinBPiWRkipA3o3VDACm1bYYrdZGD9jVANE8x52EcmLYRw6p3wcLUcFzSVF6nwYR",
  "key8": "5XTEYmSpKq5eJ4cL8HY3QcboT7FCkuyy3hJvUL5uzByDYA22oebMwdg2qF2d5PSqKn8XUUFz5A5dvuqZb4MWW9xC",
  "key9": "2W68Yr3MUULLL9fxSFnWR28RkbmbfJVmr9w3c8C99dfXspdqT2o9HJfPfLzc1guSaNiAiYvupA4RqTZohpaPgYrg",
  "key10": "4b7q2ffYwfJcwYiZ3zjsR1RxLCqGC75MoPEcJ5mBCfCKxJtYjzns3C7rKoWdjQSVbih4gXrLRSQ3JtNcxCkH5xS",
  "key11": "5HGpp5LXUMvakZPKgg8bmUdTE9gpdkwaddiByGbV3nthY7JBJgUaXnQxVWNLtYW69pYeyP3HLW74yZMUfMiv9U2P",
  "key12": "4NJMtUUwV4pFKpfHTc5X7Heuh4YHwPjbs1j7UeBNqh36ALCpon876uJR3eCHgcdA5GmY9VwmzzXjvtJquH8P8LtQ",
  "key13": "66NWm8UzVJnpPLZ5eaeNinzEFQRtQ7niK3ZYMWSYiyrCHRY9kUBvuF9kH4BMJEnMDJFxisj27f12ypRPWURGe53B",
  "key14": "3ZNHyGDwDeNw773TEcsF6iXX2nXFhvsSqXEWFvPgjkmdP9xv21tPvn7W2WVjKjosm48tpr4pMJkh1J35N9aWUWm7",
  "key15": "4cPJ6ch6EWZwDJ4eqR7LdXhEnvFK6UALqbTd4GTPxCTC1Thoe52cicVFopfLH6LRASqcjZGCnPEHcN4WbXbeGEtS",
  "key16": "3345m67kYVi69FGwU1Egtvf25xXMbpcp3xCVfDavdZdPDMAJLoDidJmfkoueUKQh3TsZZB929ECrMBykrJLLxygc",
  "key17": "5xUdDsVDSYXTD1oDvcFQhbYfpEab5p8BCybweZHjmb4Phq77HPp7JU3HqxQ98DNEMthXXMjDrSDJkENNEEGJz9f5",
  "key18": "4oq7VYv8Wihm52xv1DgoSgju9nTwzCB8Hzgp2U1MZytJ6Y3Ua18HbWdAgiWzxh6SY52dp2F4LjjEq3uScDFojof5",
  "key19": "5tLjjJy1UPRE7AjhZU5QSexdi26wq3moLi7DsiXyDArgYNHeKSEu6diBV2oot5mxTvyut9jX5mH6uSU2V4nkejhK",
  "key20": "4Lg7jPc51q8bWLdEgzp39nvB4YYomcB8ZPDdyunZsCcdXonvJBWsDZ81V1pduvvoKXB5kGZLHK6hs7GY7hWohJ4G",
  "key21": "a3qG8FbLVnGUTrXFXVq4U3XFz925EtGoUdbbcqvmsLN7D8QQPKxVnSeUDnz5wbqyy5GHoJwEMHhAFdi6joNeWfi",
  "key22": "Mni7Y4dS6b2iBtf9NJqhZudSFQ1DtTBrTEtcBppyMMorpxDCBkncmmgF5tgi1rUEwfyANTQJbocCVJojLGGYBQu",
  "key23": "2s9JYCT2PnqCmqGbRbLFe9QjBLHftX2KQhuzW5djEp1aEmUdozWpJxDYWqyQBDnFxvZGzBZVggS9iFMC8MNsTue9",
  "key24": "5ywqoHogz6dbZQzU1S4DHzotCqJbwjGqnxmyA5CjnXjsnfwE8CCquJGyiegt74JHzWqEkfEXxp7HWFPSo2XQcF1D",
  "key25": "5ra6VsnCfs4o1sR8f7P1UWUPMKMGpHrWpeM6X96fxCHcvbPGo2B5qf83XZszwcraKgDgvHuhRKRcrLXkHAHLjwFq",
  "key26": "4P6oTqHTgxVQGBs2riPSqfNi99XUSWH6vtZuAk5GVoCStextT7EAFWBV656iRDzsFKhSeP5iD9UkmtERNeeNwtJs",
  "key27": "5ViUrWftA7zo14PRXEBRj2XYFVXXw5f7jD9qJ63fEXFoXLNn1CKCLnzvj74wZ3ZahUGmopVsPNV8wUq6oYb53JuV",
  "key28": "5wNBophktovQVRHWWf4r2hBqGm8xScz8BZSRBoihXTUjCqpeUaxurPeRUF67HWyNKCeX5QFQqsogPdPPkXFGuCSQ",
  "key29": "568z5nKApHf19NiSjEiP7DTNE5TVyqNb7dqjzwCWRzG2PruzEAj2VGucfJZGFAYmYKGNT9nxxw8SVuHUjgiefzoy",
  "key30": "2SiA5b1fSr2joGVsbXTHYJyrafhNPRkPfZhUzsfjmyx9VsSbwYSi6XGNVMkcpNr76gZCEcmJXG93asESUrJM3KDF",
  "key31": "4fnvg4Dy642NVyfMX4YwkEfnPNn7gT4TywUiYCARAMTSuCHpFKdBTCAMPLyJ3gJrorGoj9aXA2jiArSyCxgDFjLL",
  "key32": "2R3q1BxthFfX7NgWyLGeoaDY43ZtczsWR2wyVN86r95DbqntWmqjjuBNZpurmBrmPiVeByb97ADgcRdBQ3exqJ7q",
  "key33": "JH5DRo5Xr8BJmPLtY2gWPDwsY75nQANhinwRbzvyqYNF4iTkdkbdR9HhMydLLYx7HjfJtmwHXAJ7f1t8zvWd8Yn",
  "key34": "7YD2h7mtA72oGWT3zGjmQc7uxhTR5CXFEZLEobaUKZoxbk86xa7pAfViGYZUzCn8beGcQhdQ7JrztoCdh9CH3YC",
  "key35": "5TgpxGZW5gL4kmzQaRgo4QYtKryP6pXcEhAhTMuoV2qx7RmsojxNeqqMfidTeJb7NYPtU6QnV19sYrTDPjP2XPZ",
  "key36": "5BrgNwJYr93RwuxKnyM4CekbbexTqPbsKBRs2pNyda5PpHZhPzQaesX9yenfMq9StxNbCmHC1NSu7ScyCawC5ptw"
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
