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
    "38wGcKDHaqAagGyG87FUmt1cn6HJe4Q89i1QoJNcRSQYkJ2KM3WYfQo3GxuVdKn1ueoZeYyBU4et1SbGLMoy1iHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GQxkpbPqzATuDZKe5iPVHN6BLaLJ9ASkH2WG9Nuvswsq9dJy2e1o93ZXn37KXnWJLAxTNhVArSL9eUM7qCM23Fm",
  "key1": "5Y4zzvnnn7sEah6fLVafpyVwoE7twvC6cXD4gQeFr6LThCz8opnDYDDRFzDcqmnri1eauBna1xMmAT4hnVP23c5z",
  "key2": "Auvdx25qYJxYMveJTB2n9Euc2XKieyTKxtZy8HtUdstkBiXaAhuEpoAqzKvt5XeKioa8LEzGdKpekNdQqiB35QD",
  "key3": "U6DtHvVTenyXbes4FrPBrCEYqcCYKeWKfKKiJ8dKJkAbXt6A27KtjRc8UodLrTToaVyrpakSxsy7agmuDZH7pMd",
  "key4": "2pHbtjExZXAR4kHfCQ27iQ1LxdC936EMbU56HE1SLaQUpgPmqiCZX8gCYxtSwZwNcQkemb7cVqbECTiNNQDbenhy",
  "key5": "27xvKRdKxgtGdvitf4q1pmiCdgoVV21BEqdmhsch6Catifp2HMBKQyxnAfg6uPGoU9wfZHn32XVgxVLv91HbRXLd",
  "key6": "5nnquHpQqnQJc8TcjfYEyQzvnEHh2deEdN2ZmZp1NSuU4QxGBzhwxKUJGC5Sn99LxfBoNzKA42ybJjNb5FV71iY7",
  "key7": "3svKT2XaHTWksZcbgQB6BxVJWno84GXVPA8sbL9EgCs7E8A38yNrmsWqpkaTTt8yHr2PDiotyhGDoudjPyWr1WqK",
  "key8": "4B5EGcNv1ja6ZjC4ushxouH2kW6E27YKveu97ubjfRX4WP4Tvn43ysNq1M6XUgNHhiktat46gT3j6rCz4QpzPqXi",
  "key9": "2oG9LMzQ4ag5vZwkkUfio4gztvfAfSw3YYXMfGnUBChgy1gay3aTDWP123nXrhZEy7zN8m3JWWMDuCtDJRwnmUCM",
  "key10": "2BZxr5SPPFqNSBCJYA4Lb5KbcyxZTupAsg5m9hNt45sYTPWHqzNhvrG1majAsvCWBoBFQBe8niZD2iqfcqvSkjMZ",
  "key11": "2kLZpojPnMri7zbgCDdAYk7Cpwa95SVyCSSFkxgZwy6MphMgKggd2iUXSnCPKVpwycC2K1x6puTs9vJXDHYvqJTV",
  "key12": "4CjvafMz3bucGsydpEyRFg9hzrs9LDqcERjEJ9WpRrt4qhuQ4SA1jZYbbfmsATUhoyf17T1A1YzJmyaUim5yXWTC",
  "key13": "64yPtzzWimZX4jRr1hsAkjtgo7oY8mFwTXKg6KoXog5rQPmxugaKUBLZaHfEvsLAPXcGq9dnHFsb7LE1KiJBP7od",
  "key14": "4DMiX8kRWzwou8FeTqzoNrZjPBaRDD6R75Ypuz1vzCfFqPe4KVaojhjH37eHujvEBA4njzaYYPWxZzmJeuRYaE6v",
  "key15": "GXpb2iT2HEeD5XBMKnLGW7UZ6LaGYei41bBZt7VdCKjuJfDw3RzKG9T7NfeGZ7rQ8hmqt7EcmaoLpnY1t7cmmi5",
  "key16": "54QU7FdFSiFK9nksdtkD4rGBZpAxffgjto2BJWFHACDD7VkuhrvZDc2DaDwEaURy4QeVcXYQVsgqCEbgPDkUxuwW",
  "key17": "4vxuH9nTkcPz9KDnNxaMhRJmsC5g35ycqgKufRH5mHvbv4YPRcWVTyMwDM8h5WEMP3yHHSGpQSpkvxDgAcmuTR2b",
  "key18": "4pth48sHDAag8SFL8gFEpf6yaKAWzj265ZiroraT6G9F81a9BnGsnKizPtXkv6LFdvhf9LEWtfvaSp9G1V4A9Ucy",
  "key19": "2BeDZ4pkdTp4bvbPbNgV63UnNK1tFZAr22u4dTW1KtaWWJM3u1DJuWm3x2WpkAd35ke6reMWgBBTeFhFzUDd2z4s",
  "key20": "nzTMHXmB5hzwY8pJKYpFsdy1AzHqNbDsXWqava7HjzN9YueDr8MkMhcXFYkBL8J6f1zfUcxaVRS6FXgTEnaSG1z",
  "key21": "3PZoFdJLnb23oyRMfiJ9yBYJSoHEc6gUHdGFuncFZENoQGtRQEBmyzwNsi1s2UZoT2zpkdkfxdNuCiHTs1XxAZiK",
  "key22": "5D1fUroGPKkvzX28K3nNmDgAsXutZR2RC7LK7xxQEsq7KRcTk6CDJKkWgdXztBTV7BqG9NBguHHFuKyLNrHo8NgN",
  "key23": "5UUe4rJJtzfmjpPHos2smkC1pD8cBkQoX5Y3EJLLzMTzXbFmq7xEfYHnpzrHnZtZimTA7PnsF6R78vTaKT3GqFCF",
  "key24": "5DynJHcA1FzpYSWLyNHw7Um5WMs6B9HJBN6y4dVR842C1wtvBt9WywWMR1pwuKiS7U9pZUNRfKArJNhS4dUYkiNe",
  "key25": "3qR4Ba4XiTmL3c2mvpvCtGe5BVJYxXYNubzfXb8hY6NehJ7XzbD6Ac2MRAwY2iYtxBcFVFxdPY8BezGyeDFdhqxp",
  "key26": "2cQzT5hFqN3CR1RjWk3Vh9vfVmnipcqpKBqyhT6LXTJaNVBDZjFkhVLo3pLDgfQXpfiRjbATWfw8aoj4CXiswsrY",
  "key27": "5iREotYPhyTvQVEAvwYoegEcNBdzuRtGKTqkiHaZ68ogtMLzFsexedvXZiDXH62gSnCfs8axVaFRu6EUGhXZ6LLk",
  "key28": "67kC97pbPMZYyDrd4LZemPA2HoMWimTF1z2VBXNf5ym1M8bv2ZeHN5s6QG82oYuWPhEaJ4CimNaBr3gdXnj3n7bo",
  "key29": "hrrLzA2oC9HpgKrhktDyWtdMtVTcNUiheEwhNmgt2dcDoNDpza865NVRudy3po1o15r17hW95MD94bU5887qoDx",
  "key30": "5mGJGW7RKoozviZdMSLn14B1pP1GmcprNUNGhtyVFKd9vR2NJbE7PEFfJYzPW71wqoToMrn7D42EtaTrCkVdToDx",
  "key31": "2USj4Js9XXP37HXkkTnrHK8cfESVvwKEauG9JrC7KCRcFLJFRTTZGPd9sXm9ZUtxFsTz7unYitCNMKFa3rFKtpS6",
  "key32": "2fbZPEAPJV2vf6o1QMX43DoMKhDVrjz9Yubn478T5qRbjMeTjqgQJrnLHdyz6FtzpkXXxLt6fNV3EE3DxatKZDkj",
  "key33": "HXZGkXGYam36D58agP4ExeLKcv4QLTVYofSkXTK23ApNKJxfnx5EKHKS6ZH56MCVfRd1ucHxb4Dh1yR6yvR1Mqo",
  "key34": "25HjH6ciFTSLTgtdzbsJXXiZvdUco2QKyAi6iHxwCaj1uautrq454DYsLi55tzs7TxWPjHwQFQtR69ekoYMscixm",
  "key35": "5tSiB9WvAdh6kUwQ5nBfYutDVQ1moccdak3LjdAK7g7AW37VtPtkbQMWkcFNCyeqfSYHmtcdKQUqBJNzUaSzLCbK",
  "key36": "4P6CTotiR88vx3naLJUdLKFehMhMDicQiDz4tGU4eGm6gdpYdAFFB9oSZeXbRHEKfs74QEfXp78Bge1Aw3Q2q8zy",
  "key37": "dRzGyP7kUCgSnwN8zrLitdRvMziPeMboMjvQs67mqWqu5uMoTRji5ytHEhGcLB8p5B4yU7uWHVETSkVRdARJco4",
  "key38": "KDV6Rww6d8hxvKzVFUD4JPxgsEf6cqNwwqpvciHiDMok8GyCymCisoGnUD1BTinJ3KPvqHCeRi3vXZHG96YEPVC",
  "key39": "4MD4zKKQbusJNLGne87VfZrKgdeTHS49YZzneT7Mn587ZYEDo8JrxeRmE3n8Ruv7ocYFuqJzDqZE5vM6Q5cy1byn",
  "key40": "4ttJ1ifDgPVeCSEVTf2h4yz8FCKUvrcQ6C6dS6ZFjaZaJqd1N48s4emcBzFu5brRMnUiqjnffFzAVDkwqEWpwZky",
  "key41": "4ed1qXSzv15bhAVMu4csFN8cYZvJaN2FWJUajvNYJS3w14UfBBoWNHngb1VbUEvLBGgMQMPCTdESCjqNbJZEZP6d",
  "key42": "57wKfVgKRfGJnuP71qz3S8kR162XnPh9oCMLMXejZp334kkAGuPQEi4QVmDtJpK43CCqe9s7nE7xD9q8ZPurXE7h",
  "key43": "3LHAsqm1rabhST639cGTXt5vf7DVcSf1rZ9b42vwFnHSDS8Y2muVtsWBtLYRVLRAX1SWebRPjAmP3Dn8RTM1JDQK",
  "key44": "3sFSNajedRYHrzwqBfMxHyte49JoEwuZJfw6uVGo8XNu8woESohM9SzkXr7whVMtgpzVK6nJzdqeTeYaJ2oFQi6a",
  "key45": "3mCVwBoW7t67f93XAeyfjiqRNjLr71oTVDy8d5bW5EKdwayTkxLfHyQkSRKGyC2GfkHLgyqUpNiRmdoixpETur3M",
  "key46": "TYCoYjT5Q2yW6ZyCZDX9fRF6Tpe2V5k8Q1pN9qzoJLrMGxozFmE87efNBLA519UK8Tt4gSZAMdQGojihz8UMU5e",
  "key47": "3sEF7w3jVfUzyAd4TZTeZwN2jyJm5wCrYZXhYuNaHFyKMHMYgLsxvz9mMwxFfyPsmrre9nLgy25MqFs7vVLkBEfZ"
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
