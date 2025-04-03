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
    "44dEwyKNidhCyfu7MG3QdfABkDq8wmnkSmFyhrvm2Rc31qo3cqypjwvTspzvcn6iPCoemo6oS8VSBwLvd7L6S9hg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P832eXtYKss3EzNUzsDZmMcyEdsZbuzFwV8rPEDo33cAPTK6xj4Hf1h8xDzqS6Mbrc3Qi1qKG9J9Bgb3oUa3S5n",
  "key1": "5dLdf1oQkQ1gic4irasx7ocdABukcwGPPK3jXsUSti1fiSEPvRebFVSnV1pyf1woArsSJMiU9bjtf8BLFDkME3bh",
  "key2": "2Ao2Ds89Tz6dNBK7qZnm476BuMFppMoMVpxya2aLH24ZByPDSieyP6iDnA8kwiykyNWXzfYVBkVq4SBphELJfho",
  "key3": "3hUBTqJCQJNBWK1Z1ixAwURBNWKbuT8gMgr6LaDWVwaEG8xHjKjtMpZ8LevBhEChMWNXMuQSM7juRWUTETNP7sgy",
  "key4": "2F5R3t8QftFdZVSkYLP1uRQwJHioapKk5XTK65XcVu4sA3N8PYYLWn5MNmsxYGvoAu7iHVB5RfmEhSnoTACAXJnj",
  "key5": "5Wz3YqUqi9fyuZ3WZZY5KVrPD3Assc62tNmsSfTFzfPmQcssimeHM82NzT2dWz4PmZKL9w3UFHwdQgQZwo1BsFZF",
  "key6": "5Aw3KWCzYvGano947wvUS3ReZFj5qyeakV7dzjN1k1KRqYrfuwC7C1mDBAfN4rPkg6gu3yYuiihcvPFB275Z85Ad",
  "key7": "2BQCGxJktTU6x71S5KhkQinNE4RhasUwifv2d4nqejWbqwrqBByhpnxvVVGD1WETVtSTciKL5ShUFfRiYbgSrMdD",
  "key8": "5MvPxxR1DAWqCYdyonuixyepEawDLh2sarH8vcDkgN4wMW1uvu7ZcwcP3eW49q7Lc2omUQpiYVbj2BvrE24xGpTq",
  "key9": "19vBSFXBUEyBudMkyGYmcvTXEb6aQmeSLMyuAASsJczbs1gMrBbgQ1rTugeWmjy2KQYpdYFLe9LniAHhSGdJVyz",
  "key10": "3tFuU27f9jMHaszrhkAWCZmGnM61jz36hcT6f5RgXFtD9q8pDjs16DNfENQs8KcwvVadwETCMH1xuRxid1MmNmYQ",
  "key11": "4Udx9DZAdreqFry15AoxbGa29Qkwjr6rqSDtbdg6c51LsfhxqXzBosd6eFRnDpASM1aMsxvrubzcUziE5E3CRvyW",
  "key12": "qVr1PuqZw2tCABgKuXNsddPMzdY5rj7NMWzq9zxkWywYEjeJnmsVArHtkMxLSzBbxZGVab1B7fuXsSWZPRLcE6K",
  "key13": "3u14y21kqPXLvXeDuxf4J3ZhL76Xb7XyXBTtToPJHnJdBdREBZVbdYfD7Pz52FFFxEZzm9a3G5432Ny6uJWyiadT",
  "key14": "4mkRPAVCYemUFio7Wm9RSCK8SNJnBBV6NuqS6hfDDs5YUFxy7uKMtD7LYzBeaJQ4fDt5DDPSYadsvBctCR6vAQNs",
  "key15": "4UP7skgvRCLxkuzfD51ycJG3wFRc93qTVAjHNgV3VU2yknV8Y2EJx94k3pY8sBc8acoaNL4nDbqVsR2kiBvgcK2h",
  "key16": "2XPEjpMi9ypCxSmkybqc5g3BAk4vXQcid1Z47XYyft4tZj7D2eNetbbAS9x2f7pwFo4dB38nCfRaYWoHws64hS9y",
  "key17": "475BAwcN4abrT557smdHCPouHhootedhLSo2fMpbtbhM1ctvE8FSANZfCfNwFHs9AxmN6oSXhczgfeh9WaNGUvV",
  "key18": "NSZyMqaRrHHY8ihdB8oA5HnnDonmXPftv1KNgHrwms187meVJotRrMVqzVGTAH2F1bpqxibCxJHHVPHRLRtVp6k",
  "key19": "3vJphqUW3AVuZmnXcXW83q9vi3XafSyzkf8PrHy4r3LdWYxvg8j4NxG4qU5NW4zNazLLCvXZi2EGmDXEGqTPvoBi",
  "key20": "5Ej8XamiXmbjqPTXD3hQaoP81V2K6QAMwEhZsWw5kf5uoS5aArZeLGEfsqpfxXpAGcEzX7NmdCwFzftTrVpxE9n8",
  "key21": "5vz7VxmYdoi7PNMJGtSYppcD1hjciQropKRUuRXwNVAMJGsSA8fK2M7r8R9qTYd3zrpZjSbrisCjfrZ6Z2BqcEJq",
  "key22": "4RqrwuPNDJtAs5QCceHS3M3muv7eWDFCuGaaaZvK6ZTEY42whZpn2jSbceZPw3HzQUkeLFN39yD6W2DeaM11SBSZ",
  "key23": "qaEJpddPNsvcq4ZiYgyzXFBKiPuezhVmbkjaTM6AS75Ki1E1YbRMLVvCvgj75J9xjjyBW22n3xLybQXafKXTV1r",
  "key24": "4PdsJEVNCuvCu9yAVg8fUcBVM1MAnesdxhwsHjdgRm6BLWUnBfGxJZbYpzSm5WSGPRg4mFcqBzjoqURMpr2ABC5j",
  "key25": "nnh17tycizaETHUWmvSUzv8U3yvrUzfKL9n6p4GAtbyJi3v7rMjoWw2jwConAbwdBuACz2gkCyT9FDJpurfDXCX",
  "key26": "hn29AtGddEAmaSpQk66psRQUk3BwHWTmsr84TGWgXnXsBYm9UQGLDYBPAmt5whPCrjgzXFCu5axChXieiBie4io",
  "key27": "5woDGn5xS3Z6yUVLNJfWAyTpHz6t5PsnshLmezVbNdqn44FBpEwRYRgyr7H5xpgWR9AojEPXk59ZNLLXLrQ3UE17",
  "key28": "4ZELENxxnyKuAP9QuF6RcLgkPWsyyCGgPpM6edX5NHMbLRME9tjFzQJsYbgnC9HZaZdaGm64w4sHtKRE3FRy6PAz",
  "key29": "yv2vDb9QDfW7WinTLWVtNmEVEy4eRU7NAcWik3ifGsudz6XnLUbD2GS7EmYtdaR1Nagso3m9emtrWo2uwogmAZA"
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
