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
    "2k23F9K21HMwfFDaAv3K5L87QcDDWh2F43hQKeApLmif1cQhdfr8NjgDmoFDPb2Lya4oABK8NTSWemMrqeEEXv35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qx85ZWvLBiy8dEBpM2HWbyeBFfxzfQe7ifChs28hqm5jQmuernSDPk8K9PHob77egBTDABmBZ3XLJQSgah1L3hY",
  "key1": "2jeGkdecBzBDTpQA32V1FKzw14JN8cT4orS2vYoDENdQpM9sbeCEsAg28JmgEFT53WRKYgDmBNRTEYdGp894zdYg",
  "key2": "4AAKf88paEqA6znH8HUWxBmK158353wWVwBsd1g7AkkpRoXBbWAt9Chv9M7e3keUhBqsMaFLU3FdsRAgtWhV1Fh2",
  "key3": "4CrVbDyk3TCYaPZctMHE31XFjxpnvdWDcnBwLREh4yq8a2Y4oNVQZv1YoQBzaFKNQNf37E9Ky9Z75kNqLDCADDf3",
  "key4": "5N4WqTDVuC8ut8GgNRpLMz25fXcrhwuBGUWM7ZyZdZdUP9FjpeUqr6KPHvVotNyeTymqPh5dEkYeQ5Xm3S5LZmTD",
  "key5": "26dQtkW4oxUJZEjhZnUxnsb1DVhB81c82FMehBRZ5itspJbjy73CXznuSGJP11giLR7DLWA1UqEK53JYbP89zUyo",
  "key6": "2aWXgjkcYfuQYZiMNmcCQZj9DEYguQEBFB8sYfn7Fp17wu1mudJ14z74759KN9wNS9VKgwvqp9HhZwDHPivYFvJt",
  "key7": "Gj4nMibgdzQfUyiMTAc7M8Rh7ZQPwAkEwGquMDswSCppEvw6N1HmW4mtyhrVPwnYVxLABGEPpUAbjVUtDTmdx72",
  "key8": "5wyaAagUiSUPJKyhP8H3E2up9VhMEQYcpGFnxxs9YAZz8YocGBPWGWkcoK37diTbvjKB8wLeHmGnnkYnpmpPFKE8",
  "key9": "2RSA8vnuRpxr273GqnnBTYnTDNYjkLUVEesnDZWKNLQ7FJ3UVEERhdLcZp6gKUYAV88oCmip2Hcj1x972xT8mcQW",
  "key10": "3m6mgUzLZDSHNH8ZiRr7Wr9jVxarquXJcYZFm1fKKYUwS5KMSFF64zorDi1YevUFmro3PnGJbV5kkNzM4GRRLqMf",
  "key11": "2c1mjrx9FnCKuDZKgHsN2kLEkQ5MUudWRgULZtwdam95R39y4uDkY246nCyVMMMdvtpKnxK4rbH5PwAAi2toa6Q1",
  "key12": "2VdwpVvAVKhjJzVFVifojTa5VnAPbFNpsrAU6NX86zRqbJjcRL59Jp82margFBATkVo4S4gLP9kvyTJHM1FcReXn",
  "key13": "QkmvC68kNLduYqyQjkFYBUQsRwZRu5UiCygbLiUP4nnZ8hpuudx49dvaRo6T4ejuQvNaTHPDbo76zT69b7dB56H",
  "key14": "56c8Hotdu4fCkpxqDpLo7sVTFPUXZgdZoB7LeZX2t8vNdodL2K6ogtRRw9U8ReCcmAsAKUJ2BCMaEf8qoWkf2z3K",
  "key15": "3mCKQHGb7XirnfDbpDLmy5rZgJ25GLDGnHKWkpB8i6kdkH5V8qEJw8KdpMrFWMNPNnihNHdwBvuvqyFebnmjjPnu",
  "key16": "4TeF85xcQrHoc9bc6oYsop2YWLUr4Hcmpeo2AwTRj774GDdyKu17Fpu7e3UzhvVadbBbTA69QjKcTAUwM4KYUKqy",
  "key17": "3yZKaHRWeiLUuXSh1AbG3nFEeSC1pdNUdWcF9HWrh2hAn1GsPUyQW86KTrV9ZRfHyHPGzfwzEesYoXjPbn7uuhSg",
  "key18": "3YjukxCKkbSqVYZ7pkzCG6XWvshGKqNTSaSMAX8QsM38ie75CP9fSk4byU8heiyJ3y4Mo4kBdumzq27zPRAiYDrU",
  "key19": "HWkCn82mxqaDhKmnQsPw96PGnWtXWQ4UYuZZu6bai3afx8X6hHhhXwh9WDNFQb5xfPsNA66sX3tUXeTNM7QKGsL",
  "key20": "3f1a5YRotAVFbk8L1FyNbLTKd6WR6VTnUpPUYiwQi7EX3HuHWv2cvVThFdW53gBgeuvu9iZM6q1WhTR46XdyBq3z",
  "key21": "2hZijBZ8Ly93HUSQeYeAbpArkGEmXrudm4hGwh3qfLeb8eUrg2spPRKsg8jwtoEvwZ8KAwoxkCW8DeXz9znk7w72",
  "key22": "3Ypa76uMGHmxmChrVuxTPuVJgPHZ1Z1f6Dy2wsyUfxeQN791unaCsgcSA2wWNnUmP9Mxy2Ywkd1i3WveneNVpMy",
  "key23": "5PsDP1o9M5ZjbM9sgRJd4UM1je25WsS8wqsVN2rgJ6G6AherWLijWftemeAdZzszZV1wTf22Zk5mMWWYhdvorAt3",
  "key24": "mdSorE74u61gzz9U9r1wpFrE6nnFFmRnXeGAdcwAbqecjiTAKXpCxtNyaMYywYw74eGyuN9TQgf38yLBvejqXTp",
  "key25": "3USLWA8nwqpFMLbnD5hsFgv8fixUvQCmVockGCvMs7Xb9BKeEWNN3jdxuc3QRJvEJNepo2tHgxrrmLbpTMVAasWU",
  "key26": "395c9fivJgQejsLsb7UQKdwatcZz9Nux9aUVgvjidaZYvwMSvMJ7twe2VA9UGkpoMNTzEEUGoAhLv8dMZmb1aGzY",
  "key27": "4QG11gu7PJVRiJkzr4mjKQkYjGT3fmxmwPVJH2ASupmDksLHGZJ8NmUNVqeazVPhqnsGojKQ5sVoFmNMZeeKsCy2",
  "key28": "2JUyX1T8nuac1PTgAZEPS6Z6tcznev2d4QrpiJAZTcNYjVuYpL2Ss119JbyXG9bi2vuxXL3MQqVtQVbqTiurgW6g",
  "key29": "39XggExydbjGN2fQBmCUnhKkt162e5eSz6fgAsuU2MXZZsAYbW7XkRd4RSJADzPir4mdcVkxKKJF6wWiv6YRQi7P"
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
