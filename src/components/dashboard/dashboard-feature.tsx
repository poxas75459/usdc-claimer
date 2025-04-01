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
    "3LngoP9EB33HcEma2gomrmdTApTPs77TAKKv3WdV5xCJ2qYT2ei1J5wHDS8qTFMnWRsBzTcBKA8fYMSFNM7etk3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AMi2jjVFkwZkV8rfwrk3a3SF7xGfYHDfmjwFycKZB3R5KUpB5qvr7xF5XucfsfJTRN9qQXSknTMdDw3mLiViE7H",
  "key1": "37ysFAgaBkqnD9PfWzGsh1BA6npa36G34mL65iVSKvte8yKXgVrhWoXrcUK4wv7oAkUaukMCSG166LSST13xDyVD",
  "key2": "3EbffUM6xrGzfnFTXaGxirRA27LvrZr7DTCfz29cs4uaA2eUFGSBvMoC7DaeavLQD6uh5AwAB4LcUHrhgfsfgimg",
  "key3": "4sisaRWoaJFFjwH37ki2SAGqFgGCe3waaUBWzDK8yNM7zUDWo1siDPTcFWk23yV16a61SVBFrQe7ZPLrNW9qWTKD",
  "key4": "2ZEjKM4HaduipM5uJZb3CNzC8MNUMKSBEQVQi4MhHrcyJA9Wk3SmQmBDpDQSZHB9FxbM36xrJ2pM1rTmjRJKTbCf",
  "key5": "43JMh54DbAe3rQMQh8cMrPhBaBRpyTdZwqXm2Egz8WDAiUJwANqrCZ5hYpCMHX7zpzXNsMLM7iqGLJCbtyTJBf5j",
  "key6": "4yzgDzk4EfPEmQUXX6FcjFXGE7jMKkbefjhuTdJMLLkA6rHQk7y4yBQ6JqdFVkSn5cz57tnREJ1ThQXDnAe9isTf",
  "key7": "36TJ6R8xYjgrkrcAs2hsVEYf43XUiwF1DXCi2Wt3peiCRwhv2uCEF8LqwQN47QkfrMpCRX3RW6TUoc1g2Nj5YSAc",
  "key8": "5pPzito9kXpHcQhV6LCRjUA4KQNSkhrxt3dzJiSgPDxah7PEitYCwo1DHkLkhHbtdT7XuL2pjWc1sv4uav65YEru",
  "key9": "4YqdqhY2MNBoxhNEGSdShHNKucnocXsAxsV2CkzFstcgWMreG6tdcCnkWggUsQmJXz92RoTpXXLUfmGmhXuY2BFx",
  "key10": "53f7F8jnPUZPmz4ceqsEZKY68f2PqQQqWFBxAp7oeFp9ztra8MWNXNemnQ6eZdx9QvpJLXxxGvpqs3nYwLW2eMV9",
  "key11": "3qK5UYn1xaNaRgjvnuFL48NQJFnEgVpt3d1YdpoCTFcbWhrFm7YNLwaQxLLMyhaLJASuJJqHYLxTxpjv2V86F3Z4",
  "key12": "57ykjrhXfkaNUdkdHv7DMuxohsT2cBX74E1WvdjPU2iXonzhuiFFfyf7JwiyHHre6g3X2fidrqbPEd3cJvoxDMor",
  "key13": "35JhfnpWepyRHSRF55P5ie2gieF5vhkwfbdL4MWJLdMsTLKuUcLNu37ZXhJMWfW33ovCeCvDfMBGuZR6STR1dU5N",
  "key14": "4UHrruVFipCyWKb6rGB7LYENzPVFtgxcc2idE2tPmwy5wJXNVKUD4FJLfmui9cJ3U4HsD39sNHRJvYQjuaewaSM4",
  "key15": "3smSxXMRNqDiGb239RiqfAZPQT5sbKMTnerKZnq4og7qYz87PkiLbTwvDgK462x2URSUx6bUaXrQMjie6a9eVN8H",
  "key16": "4rW5BmKDowzHbPmZvi63P7Az9ShvqCK4Kfs1NFEFqiJtb8gtodWpNrXqgr6LUGDhts8aT1ySSkpF7UcH4n6nhGRz",
  "key17": "qBs52x3Kz2bjLtoTyY5PJxCAfK9vyWRGSfgkm673CzbKfwPEsU976jxTaDuajcAC3WZMjXPhhbs22Mvq14L9mgx",
  "key18": "3fhwADuNFYN7WDa2bQR4S1AKBHNh85VHkE6pJbYz5YGuLpREyqmJwYMx8pgLWdsnc1d7XUJqkdPLa1Gv62M7GWJN",
  "key19": "5JNtZ7SNJ51GsMcmr5pFNjBb94RHigeapmGWGKfVxAXnwr9cj7XWhKMdcoANKX392LRh42txzKwSTM3Wznm8G8tT",
  "key20": "4sv9eM8i9ayhDE5mDmecKLLpYi53XBjjeytmYafbrDyfdvqrdmUUkSsnQkx13s6tEsWyqNF68RpSXHAouuXd3AaD",
  "key21": "4xYrDWx6bG8FDrL5wXeLwoUPMm7PtvHNhUS9jDmpvZbSszir8fR483RiFHEkhXhAQQ1XioswDGbkTyjHsXLv21Ls",
  "key22": "5MR3oqYjJZFq3MsdJkfh6SUZYEZuS9AtB137zzXZ4N57yBkDDtTqXVwsAQgxT4DnmUvMi9i2qZn1PqY9MG58yhcg",
  "key23": "5Lo4G4nuLgEoe8hMdz7qLiX5moWSb83GanyhkLWrqshzT1AUjHnmZ4oxBzrzcGNeVfzXk2LoX8jyX5pypLED2n5p",
  "key24": "3dLjD21uWKpKirP46r3faYc4LKvBT9wtJUnDtZZVrUkbzM7TYFJ8EwaxnPP4oHtBT2SXqPDfvUABffhzDu9cYy4j",
  "key25": "5FxhB786FfFPPmEssk9YPv2sPoDb7HRjNXXA7qjqfMTESmpEyrPtEFqASFQtKDUUesM7THsSySHG8jvm4KhKDBdh",
  "key26": "2DxZbHpgajqZcdmat9ncmqrfHRFS6U2JDb8z6jsW2BKNk9taaZGEa9Mghjyww4H5GeirrMQDVwHetTnKFeBZJVLG",
  "key27": "4sjXdcim1FTXc9sNHXEWBkE9ksth8gR8RzZFAiwjaAcrbaeMKs4t7hixeVSfHfyia2Sk2JhGTsrfom49tuYr6Poo",
  "key28": "2Fxm3CgDTkzNh89wHRBXb7DL9VoMQX2sE6HJpxG6TpD1LskMotC2mtCH1JLjxABWe7MnQbNGqPs4GTWEMGJPRDXB",
  "key29": "2dqRt5TqMFvsj9frwLqCEM59mS3grStNPF3LH1R4Z8569kpLfsMuf5TAYQvrHatzPo5JsvGbSE33ga4ysX5JPuLt",
  "key30": "2WXF7cjxQWhvakqLW8nSbUnTuVcmWecVMuxekwMwfLAQM1FUcv2VaYiTv377PJABxm2sLb8xfKHiyNHWLqqMEBg1",
  "key31": "ET982mtJ5sk1m8ApyKCUK3ko2tMPbh3sKP9dmjyMCnpFh4VCf46wAEAYLDdXfiBiM1SzjBcAELGtBNhtJeMgbuh"
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
