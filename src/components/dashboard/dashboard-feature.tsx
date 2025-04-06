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
    "5aTEHkmZyc1y8VvxAWTJ5CmGHjjHtpyv4C9DCUDEUdRHEj1JyqfzuwaXd22XjSK6rQzwihXm6Qx3Eeid5gXGszzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "491ZxBnEG6XT14tuHjRs72a3wHFrvRxyxC8QH9Nno77q7Dud8E3Ng9xfWo7H7QMdsriR7NsLTQjZqMDkhPBRCp3v",
  "key1": "4UABpi5qPgrzmJbKSHuyRGYWvG4VosKqZWx3gYjTiYmk1dMwRjN6LDmsscN6AYYnGhycyYan7pyt5UMbLtYp39eh",
  "key2": "54LtZU64hsRWPY6E9YKALjQ5DzMRSjZonvMMWdKXhUgeiEDj7LmKguDfhKq6srK8eTyTadz4YjEkYfZe9Yh8UpXE",
  "key3": "ZUpkCWgWarevCiCDXM4nkJk9dfdWGb6fJ7Xpttf5SNmKtKXZ9sTQiVFPGxomirxZNypfEP3PSWCBhfi1h3tbVsv",
  "key4": "645YyG99KbXubmFCkoJYcPJy2ET5o5Pz6AaKCGVst7dPmaFgYNnNrsDx1uzy1gdXZQjbTPNAX19qcLz2LWyntH7W",
  "key5": "2wHBecan2V1y5DynoLvsrHpoX2FPXz7PszSUumSqACsaTDwrsLBJGPPVy6pQPbFjfqnjMGNU6xoxpsKnLm7mXmzz",
  "key6": "3pnxSMAfpaYdBWgfWq8TcxYG8kHPyA8uP1dWJzX3rC3cCmsyBxxM5GuAbpRfpWWXVK4dBQspL9ybvDsC69tYvEpx",
  "key7": "3envmob1XW7YF6NexxWHayYVtWpLftLzVJn6tCejSuHUb4w18o2CqiyimWTXwCqKBKUKwpnXJj6cU4aohR9iugjs",
  "key8": "5A1hJueApceTTD5D5v8vqa99e1WxcQHp6AqjBjuUCNUk4zH82Jnr51grZbK8QcQF5aAMvnRVuWYU95bTBcCURatZ",
  "key9": "4bdop991w9MxkkGH9WgFhB9HiM9pppr8561DTcByGZZJqZa5ycVvD2cB7KkMCkiwwZhi9nPWQgg5M1vnCY4amfDu",
  "key10": "4PY7R3XwDyy5WTMuN9WXdUrRJdLZBxh1Rn29cBNikSTPP1M1Up9mtkVMWvEwznieDqjiasWoBhW1BuLvfyEcjDDV",
  "key11": "3dLeBqf9x1eQjaJR2NDe3SmraKDpum9QqM9NSpicbpcSRSVEVLs8V8NetB97ZVCEYCbb72sdLVCis72QXt6ADUwd",
  "key12": "XwUKADst9ok7qag8yzzed1N2iP6ZG5cr9gAYZBH8nJyLz9VepuLgmSqzoSq1aidAjkZ37qTaPYch9EUBG8ykuJf",
  "key13": "4RZY9EPKvucggYfHJ2tBdYMhGYKUKhrdtCqguh2C1YVH11CAw5ZGSkfgam1fPLiAEcDW2TSuH5DHiLZyFZbvhE5P",
  "key14": "tZ2dsEGzWQHALp2gsLCWR3XBmdNEgoBdC4r4ZebwxmQAw2pgNfovtv6XuBjDqkmyYa7wEfGXpweAVL8W6tSEi4E",
  "key15": "5RMebDmdPe2gyzyrmKgXt1cddCAvnrdtedTpPtjS4EBrZBcf3u6Kkx6agv1j3yVtxoSTYqymYzF9LfawyCnabw8q",
  "key16": "3SEz3qrbjRkKnGYG4YaWs37AyudCAUHZMFaE7rwvpTcYvCmjbQW2xAtnoZ1w5Ug6qarVMGHUTwGaoHV5NanukzkJ",
  "key17": "4am1U2fD3jegqdmkJJR1QddYGKKbUKSXsekEPTEBs3MMB2huM6aZMmBMU6pwBerSXE9NDmSYdNrm4BK38ZMmTCus",
  "key18": "4v4BeRXWmeFYNMi9s2UikcLokVnLAQiUWHrHGypVVz53kAsmY5gC2rPzxkZNb2v2uFZwZdd7wevH1uNns7nuK3Hu",
  "key19": "sPSJpJGFNsQJBwZUSBT7ujB6ZRUyrD5gKAfHAyYLN95EghWCzDi9GktSi99JfkUcK5fzFwHYrf8YmTjXKJoubrP",
  "key20": "94WRJMiNjuTEN2WgyuedArjTJCYJvjnsAUZ9L57KjdJx5J92wjn9yGLiCKhtnXpd9tSJyuyvCw5cNW8Si981TSz",
  "key21": "5eDeZJ1LAUbUhry9aGubTTnWsvWZQxfddgDLN1XnyE5ZTSUc2xeVafiVBfwAc5T9npdQHboMdpuNMFAnNLkSjP9m",
  "key22": "2W794g9qizqjsfmbZMfdM5H8yUnQXnPXr8yEyddpJ2SJkNosjmbpjQTuRVB8fNSTo5CSjy9GY3truXJQfJHLpxvd",
  "key23": "5MQRg1LGEUDu63NeWErydqrHGfB8vf97pXf2yMkJp4zsaBPLRP97BYav4n34iRs1ebLzshRdG8LTBkqrZwRamvGH",
  "key24": "421zmZT96hSWwGXxhsbnQUsjBy6fE2ppB41ekMeTR1CMstZntSNApap72v8QwmCZVfcASMX3SSFUoUXQgb6krTXe",
  "key25": "44oiGgWuF24HDyTEU6oamX1jM4NPkttbpY6dS7VzkD2s4SmTVWcDaCaA2s5p3KDJ7XAkyomkMnJGQpuRwKSi49n6",
  "key26": "37S7DnrrmbsAGawy72MK2vLgFdaJaTr16P4ojEZH5pjGM3z6o1qsysbhvC6ddarFLdVwjurBGZEiUJdUAn3HGq2h",
  "key27": "3ZAFw3UUcrgtKFSsQgmx4xLqYeDD6RS8cmL9KZaFYxhhxWaE8BdZcDqefk22bFSSfcd6xZ8eJYrP2T7LFem9pm5x",
  "key28": "3XffUcpk4mWSNr3RHi8VXWWzt2jA59VEcURkME6ykKS3bMvkzW3VH2L2zTCobCmu71XJpgGhhx6QdB9hryLtk3wj",
  "key29": "5ecdSp7AYWrPWtUd82Kp2ju3wUf6xRqfGh19x5DT7Gav9E59wSU7yNssAJiQWmBx8YLTEJdecAsBtgyb5EfUnUtv",
  "key30": "66PZq7C25vipZmkz59xMpNcbppJCVjUbBWaJzdsrBoPnWsTKTTiA3o87PrxkctN3AH9QmtrMPAZo8mKxW4RThpwE"
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
