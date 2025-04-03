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
    "354ZQP98eh2xPGDPBHxSwZP5DV6drLh7V9KDDFRYddV6jNUUW9zzCqnnT7mPqVyesz5DKsLFJfqgEeHDzj8AF8sH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bVw5ZuMdy67NBqZr4sdnTv891n5xHJed3barHBtJNEjrQfTv6VDVQRNJ4FqbT4E2ARWRw14dzM3cfJMQSXWPeDi",
  "key1": "3bKVjZ6HNAjpTdBhQevbRDVkULB7fb7jXSUMZNxuUC4jpAGW12GoMBCzTJsaKgX6ViWdL2LyKo3GijW8qZqkdsW7",
  "key2": "67oYed1Sd9pzK2krghKg516UBjWi65Ts19wiC1x3XwSfCwfGcLnV22maaog97xJ17cZaBnhVPHmTxmgbjj77zp6P",
  "key3": "3S5dKG7716wtTLmPS4WTWjckhWVJPPUWP7LXH8UvM7Ycycogm3cwqFMRCGugPisMagEmBBbKVz5dLwW7WTASc2AG",
  "key4": "3juffe9MsurBrb65QQaqN6hhZ34DMkTcFkxaa1mm963tRzJ5jrC3dp4pix3n2ntsmGRVTpBNkXiiJ7vZkeriPkNv",
  "key5": "3wsZC7NgxDMuVWFRaNi3aSCCB3eR7tXn7UmYiXVjMXPefM6LmKsz5gzE4Fx5damzQnEqg6aMGxs4ozVzCiQqqT3m",
  "key6": "9bFFoh9rs8SWGDLqunytBbwcH3Kkx6mpkZ8BLTDsg79d9tgC1viwbnQN2S6sHb8wopM7qFA46PLtPvV3tzVaycA",
  "key7": "5wpuu7MJVfGY288yMBvY6yrRrbYNtPDzxhPsd7qfTfxHEPWCuZJDRon7ZhPEEf38yy92wCQUgETSpiqnfTDsybW7",
  "key8": "4Ev95jkcrQT8u2Kcg2YT6uYLWFd9Kft7r8PjpoDxJEe26duRmuFZtfLVp669JBSexNeUcNigCYqbXwSmUitDaKyq",
  "key9": "51zBghGxBnUYUBvzgAPatYYVkKEa8HgWRF17ncHwyjb6C3ZjsVj7jdPVWpU6wdPYEvvybd2d8oSGep6hEDbSMtqk",
  "key10": "2TdPsZsm2JY9KsNJuedhFZYzyoL1XRLADZsgCboAmskzu9M2LA63WdSXBeFoLbwsNMwGvUAEZX2c7akdrFb7hHYh",
  "key11": "5WUCSdsuMBbrJQLxVmH3pXXqFKJMSE8YZt8yrvjthBPe9JhzVYgj38nXMkyL24wkAEMsjCwrXQzRK6SPSJMabAWq",
  "key12": "9whVyjWB2RsiUtxP2obaCZLP5LTUs6Y1i2RCsgBoDVSupPp69Vj9rCV39JcDASZ3TaXt9XTojcsqfCQwti3wT6d",
  "key13": "5K2PJzwCgzpZuTYGQHaeBDNBJJTHQiv6WpY7HmFtFiJRR7A9Wzq1aDKRBwxGS41qkj1uL7h4uPkhqMrPCkHM4k9u",
  "key14": "5d9KXgB4hsk9WBE2sfE9FHHXh56S1QsBWZtH6oJGE9mVVj6RLh4mZTZPWyLwpFKvBVVVKVT625zPnqYmnyHfnwgB",
  "key15": "5JnuYEcFjihTBoSNznAFk8RvNQym5uU1hHyTEm2weDp7MDhJ6XVpqk8ZwLRSwjrtMajRfZzigFM8xDRs4kSmosYQ",
  "key16": "2TUrbZrgbUymqBWpV42d9P255UtRYQwjhxtBKGiBjj5r8ea8MjYYYZaiSaESAcSPBTnPi2n5oLQYtJ1pAMEMzf5C",
  "key17": "2MtgMGpfbx65BBNthKy8Kq6u283qLAFvnXMSyTQnLWgcxZun88n9k5uEEneo85yTw4QxXaKZSCYoVpJkMbGpriki",
  "key18": "1W4yJm7PzK6S3jEP4hTcACFZfk48WDCsZ5vvkTvmth9qCYFP7smYfJomWzTH36RdoNJXx6FiauB6VybevuJ3hCx",
  "key19": "PWMhSPz3T1Y85K5boRh6MnjoBBKXPinwiQcw3zCSMWyaJz1AVvvX3SygnnqgpxZGv3jjL4yYi6JgAiL6Uz9Z3Fz",
  "key20": "427a6NUmCNfK8ZwPsnQWTGZRDMWMR9XLUuwE86vRCwpamqtwvb5AkmRHhLUAM17NJZ1DSkzsZEfeLwsYc37VE9yr",
  "key21": "5WxGRHZTuQ5cE2w4yQCepTAFw8j21rynpW6ciUswaXdk3qYFUn6fBYFcLDuBsMBzTqhZpph7eFFrRg7s46Fd3q81",
  "key22": "32YoxHPkNLUBvjY4FDAEefQCy3BE15i8UePJE4byx1zfNFYVKV9tkRzHtDY9pSNaLAxvBG3yJUfLWMXATq8yzNqY",
  "key23": "2WPBLpXtsdqtUNWHxmE1hpVp3ZQ8rDHf6wDeWz43s7TAZpgHAMbUSVESiF4c89XxVK59rF5gdx9etPEbuT23zwL2",
  "key24": "aEc3kPdyiQuKY6G9NUVuQTaaR1qeEs6mLsHveFqXFjNkpx6jUshkwUMvTQpaJVLfFJd6TsK1oG3Qt6W8yA58pj4",
  "key25": "29EXo259w4S4HWRdvy2gtrf1dmUqxnN8yBhJwxijgQ3JWypaKAqYBLX4irbvimS8aZgXdFRCLHtJK17rGUEGxFWD",
  "key26": "41UZPRNXwmB1E7KnNkrAwhkcFcLJLkSGkNkzkck6er5jXkyGG87swDeAN87agCpv1rYt4NLwm9auvTZFspsoB7NS",
  "key27": "2dcPrg2yj8wHae1GSsX1hY2WYeoaB6xTjpzmqP5Ppbi7RUfLSjciZZL3fHyhfZgSdMUHSQyDCRUsmzsReSYcLP4M",
  "key28": "3QFoF79sxJ3VsHmL6Um1jwwFJUQXxS2hiMe72yuriPwg3vtjVcYWkJrMCZkFXn6FwD73wvWcUkZbQQGJzLQwYBu1",
  "key29": "5XDBNrNWJsBcskX1y4MTzXhgraH5vtP49cXg1fLBgDZyZgVoodfHkeMzkdL6Am2QhMWxThY6LnCJMXuDi2BW1ZDR",
  "key30": "3pUNrh64pFSQJzTyvWNGMvG4KVmndHbtEi8noFFgrWrsfQpBQaBnaGUmjoPLg9KPpj3CsYeRi3oKAvdn2vGeyrNz",
  "key31": "5cfrHf9irkKFriKKEj3gsSxnU6rBGZ2FyEfsGtjaSafwQrYXxzcjoNFYbhagD6K88EDBunrFUWij91NpnRofzh8X",
  "key32": "24VVC3QmSPRPHN3hqJevVJ6BmCJxBkTj7hZ9cPu1so6fRAX7Wj3LYM5B2289PXRxCA4EBjm2517GMFkkz6v9ymGQ",
  "key33": "4rb9bMdWLxLdoV32ARqzdPm2hghWvGoY2GtBMMM6qLVCzAW3UotWcwBEkqbZyjne9DowEK7KbEnpx19vbgyJSDA5",
  "key34": "46GrR1xZyNGPgawUudexmUFgWJVnFmiBZLUdR8UBjEvq1m37NrS6FcYKXKwU3kK6gUh8YmH4ADMnvssq7XAskSRM",
  "key35": "3GoYtTJtN2wksLUKHnWF3S26mSkRoRUojjTM3uTF5QRnNCFZV5MYqn34eX6n1yegS9idkTZqoMLwRePfss4h6aBn",
  "key36": "2jWDtuixe1THUUBkrTycikHuCxhzBeSG5Nmc91HjSc5W5v7wMPAw58hHb69AWZQ8uWuoFYsLmPtEFjBxj58Trcdy",
  "key37": "2opzo6FQNbbdZWNoYPXvSxv1A5QujuWRXFxdfureWWfdBxHrpWLXmD6fcHFYEH8gBxsnpWfzv12hafBYUVzh4YLn",
  "key38": "3oh4wim52ExVjGmL5VmMyQ7jUGGuHEhvsukShdqn6mJz9GeyPBcftYAYs3U8SBf45HN33p76MoYZKDvczCS1G8XV",
  "key39": "5LzcL5KcifAWLaPyeasNvqQ66HhLG2wyZF3DodpJFiSiih59LmJFqsmhWy8Vt1s7xbsU6FzwNWaspU6zB1wfVw3v",
  "key40": "5jGiLAmhD2cHrg54sNNwTLdMq4DZDMi9hcmVg7CYTx42V6QjG8PBVEeSNRmMy2FkpgVcm89UisRrdS1ZNzJZzgvV",
  "key41": "3kHGMLd2bUNMo314TTAwCCzACCxP4wXusbniy6Dtdx1Pffqa9QKcedUKgVXaoFiBU26qnEiK8zUn8HZn63L6KJtm",
  "key42": "xpeMwTe6qS4TjQeYDqyMZeF2efH8yW8gWzFCnGFibHmJaSjELKWXFe1h43xTut3j4MbEapLzsp6uZ8gmcrAekM4",
  "key43": "4BT643vCSpmDHPMj1gSwg2CRQJCZhj9pz6dZxm5vxCDR9A8XstBYfWks7fkfqkMMifvjtUvKBtZvnhrs6MHE5nZb",
  "key44": "2kam2HuVbkRKWLK4dptw8AvNCeNAZfXJ14wpiH2457agDjfrjauBtSrf7BqmQbJTLD3uCwkHDXjp47zNYi9uP8Ts"
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
