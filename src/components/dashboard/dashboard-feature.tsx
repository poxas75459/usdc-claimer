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
    "3QK7rtugKi5efCzJX7hAJZMDojecCtuiH5qtoocGX7CFVfhC6x2RkeDcnYNQXKhfT8LPjMT1PVq9BcVxzQdd47yK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a49BtV2sKvzeKQhQQQ7zDXEsLEtcnWZWPjVeMFgmCbCswhRAe5UykLrcBzBxSuEQ61W1uKJVEEHvyJHbQjiywEU",
  "key1": "eXofggMBKHWC4rb7gwWHX5pdVDeFbUS1YoZ4WEx69q1BuPaDMRBXT11Ztz6adFyrzeTx95DkpFx15xEHf2Lt3Lj",
  "key2": "4mSxqcMbb2Rfnr6DWxuHmrLkvqhSNDMKfgc7Pea9voSJghWQwCdAFjqT6kaR3tP7eNou9gUNpGJUazBxqdae6KBJ",
  "key3": "5ju1NyNZMZvtytytY3eWQWJBGCgNk7UpCexGcCBozHcx9puoCYnhvi4pU6VYmAVJWPWXWR295o3yuM9bBPRrTvQy",
  "key4": "2AydZGLbQkEoE7d5izqKnbKtppTkP2EZPsMvXJyRhtPaY7Bb4SB3AoJB32K2pZrbQAgGFky7wBeUMBdm8Ls1Zuo5",
  "key5": "5aqZUDysNcQBwJdnWwTwTmYUvHdKjE2CAm5Qym1p7vjXSKdFVifkX18eKLAj6JmhjPKGGa53XDx4GDcX8b52BdZw",
  "key6": "5aqGQ2p7B27o2FdwxnsTeCSs1KX6zzCbiB2ykvod3Aj4KbGBG5uwCMNiAXJokiWKHFjQ9FNdLzjgqEgD7ruJxDDW",
  "key7": "5jw6oCNicWbNQ1uvQnVduYgG3Ne9fXy5MTnT4RxoHYvqh8yNbExpkrKWCYWNf7xgKdvoK2vfVwvsMXHdBYB1VDdt",
  "key8": "nN2bULkaXXFCL2Gk5HjKR2Q3Ku8Beo9U75AWD4ia6L65WfVWpkCsXfmzpMmxuqfrhKZYmQ1x5qEmeeVZRH9EGaz",
  "key9": "3vppS1x4hL2eqpnGXitwCxjzWURLcNmjVvKjhFQLqi9tfzumdHaXJRxuTgKotbz8Nr9EUvhquUDZvKmznzRCFxJZ",
  "key10": "3bHDiaSufabR8G31urnZgCReqGbwejgNYp3ueZNwPzCqLCJrjrVFrZxS7nJmx4JyybZs7gAX1cg1TFL6LeyZdLJY",
  "key11": "66yuAfTmoq8VFcW8no8cwMRGux7nUwRCZrnNgXnhHMf8Fq1dPKFiu3ghmSX5MUmyEstj5vUxuUp8pe9qKE8UCr5w",
  "key12": "2aXxmhirsL6usMH8Fpaxxz5p2MJy3AEWUo7pRfiUtHH8CkkorDDMPrBXZiP7rpzSv9B2w7rdEzyN5Ady2vaEHCeQ",
  "key13": "2YbZuukgTAER35Cor5AfKHBkbDmxYnjoDvfryfgszRu6333ENTcSmNt7qKtTxcVTzcfcxgiEa6CDhVazEf9zqTSE",
  "key14": "21Q1YZoB6kGtTc624x8cx7jzjbdji4TRmRMhqu2acZxniywfPWtkhzh3CfQekCqUeUbDRKdzNkxV1MzZ1Rijf3XA",
  "key15": "bQF8EjBTNq1PwJR4cqKbBsK3wAN2rsSDozT2oxfBFpZZ4Z2u8gB48rbhBf9GuseruLeC1m1kAukbrnk2bh9QMpn",
  "key16": "3SksdGALgUQp7qZdcbmW49kWD4fzoCqhtiCZ3D7oJ8kmyiGz8to4NdastAQCdF5xuJUNDCPp4GeuLAwewFuto2N7",
  "key17": "3PZPntHmHjGSCEdiWxVwmhg6n5knSve1o2SvpPg3aeWNwtZEs5ekszLTErZV93T6MNnSBv2s62ernENcnfpHZzfF",
  "key18": "4bBvs2ZGSnmNniGZrCeswL9bYneP5epvWAu1zqMGgRFKPWRqvsdsetzXxxXmUvXMa8aLTiAqTX7853LuAWxmMU3q",
  "key19": "4ipSCe7NqfXwvaE2HLECvHdmS1phnSjsFe8iawxXyiueNjGqZNYv4v3cJuSJSGncf9nkxyGNR7p2BpMCwkPM8pBu",
  "key20": "3v1ufqYi8GLJVhjkCuZvVB7pr1aLuyLAmNira3e5JZARAePFRjmJdFJsMSBE8yi7WAB126VijeSCpiRrWfYtgiio",
  "key21": "53SqtwNHaXip71XbpkmQDMW3K9bryaiDazjtkfuVVA5i6c53oUAHgdhfeDrxBFVPGJ6mJ41PaRPeNvJ81iogaLf3",
  "key22": "3WgkGDGyZ9MNa42f1g48eqQjWHf3Hj2XXiDQhvS5ubAQzYGVEYyBSX8Xahrar8LGXV3QFMg3YZgf2SQeFErsPr5D",
  "key23": "5Xx12W7Jz6qD4nRvrqsdDXdttjU86NdcudxAdytQvV9UchVYwEaEwMgFgU2MgX6Cv5pQm1gWhQCX3ZfFgrCitweA",
  "key24": "5beapXKshdBcmr3wre5fN89aGJHCjAWMCQf569urJzw3jPRPuQUCT5jB7nGaLwryoonSxkh4qXv6v9rqfCLLSpPn",
  "key25": "5KzrGyrbhbEgag11DHYpZSdeDJzNG62Pqw3SfN1mw8fybEh9DvK2X8xj7fEiYDrGnTE7GUMwf6LHD8mzxcWHbTPX",
  "key26": "2MbwKp5mqYLiKR3QFvv32LK1pgQxik7QW4frGb1tciJ3kadhEL3deGLFoqWzyyiP7aN9gLv39kW8r7kdVqujfDzr",
  "key27": "4QMQbHnHMHt5jK9JHZLW78mUxQiDVPgcZYNvDRSdtpP9MJPRey2fn2AH8jeXRDE4XMDJ8eVWPnF7LTCyn29X6Y23",
  "key28": "5dJ2QmAtnR8foiAdXsRXFKZNQU9FrFVdr1RuEKHSPLa5jw3psNLuB7MWTST7SAJvvyVEiYo6DjiwDZfYop1yCjEd",
  "key29": "3E69CPWn2PZrNsVJeC3s5BXTmuSmakGcUTMPHCHGzCe8YH9AKHqrzCrdCnGZCWjTh5ojDcFK3EE59e2kvo46cPgh",
  "key30": "44S3pCwFC86FF7cDmcr3v6SqA9pMyZkPviUkc6MneB67AN1R5XD6QA5LuCBWAmPWdp1GxH8UqWYVQJA2WmLAmKRG",
  "key31": "4DWxYvi3V8YZhVuF8Z9FvvTmQrSmB2PLDVhQxyFsnbF3HJZe1T4bvB8RD71jJvVv1qHgkdazqg9m1BJ1nanofw5M",
  "key32": "3rbkQJGyUUv1xHzF7kiiuuCbPxsEPKZdd5BSVCgPttqTJAa6ztrLJH5RtXRp2Rtu7KCDpe5meNRVa7VdbtbZWGz4",
  "key33": "4JZxYQthzmQp6Yz2A8irGLDBhFHzVHyUWJuVocVCbfQRkn8u18vR4JhYK1G6YEYj8pCuo8zJayVbKzcppHNzy4ui",
  "key34": "3LVMQCB3mrLNuaiJxL88Yws2KZAZhyQ8WjUen1Y3CviMva5AXYgQQRrgev8uooMXsb2DGBGfCvWPHwUGZzLn5FC7",
  "key35": "5aFiM4vuUiaKtWW3yDgdWCFBFVKsmZKcw2FKjWgiGV9C7gy8Sn28GKxMPGwsAVMi8exdZohJmiXRya79Sug1hhzX",
  "key36": "5yNbbHbkrjNZ3PxNtT89aQ2TkYFuh2PMZMnCFzW1RH3G9gB6ykp5VDvgnDDaodPZE1bLjS4JnZx1YzV9EXBEzwpN",
  "key37": "mBqKkzDxqohZ2Lpyor3J9GJKr9KoYgNyoJhX2iVPVhJLMN5U4D3uwFbaKdgSu9tL3my2fnvSpqYAPvHJkfBbyr4"
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
