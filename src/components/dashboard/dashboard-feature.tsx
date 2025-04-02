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
    "57xmPvaQ9sKYynTQyHoDGa7MHQRUuc5Dx3HVADvR3ZxuuZsaHS3vNsSbaGUBb6AHuPVP9y7kcmrKSPfF5bDpuEkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VVoSD3Vk9PgoNKHtASnn1Y7BK8T1zcrrRnhauHnpgYwSNLw5d6exwMH1sWv61RaztHHuHdyQQhUgX2BakLdF1u9",
  "key1": "3suVroWrswFQbxGWxvTNth6vCMUPFMD62tkWvtDcdjhMhzUaxuRC4j3pvWWQTBiMJcYJQKr2CiS2Ju5kmKipQgBe",
  "key2": "4VWe6S36xLK9x3eCsys86vZxiFwpmspuCUaoaDPyYzjKAU7JSEeeTUk59Fdh9kuNadtL7zDAAwLF8dm9TdW5AK4Q",
  "key3": "3ui6vzDjYSPpdaTsqffNqhZzKYp3tQ7jjkJmq3LVUC8AVhshH3RaMisuQCPw1pYfS4TfDxvC4GdmALX5LeVHyi3G",
  "key4": "4PcSFpsdjeVqfDHSsPgXSABjMvHcoSbFFuEb3pnFCH1ZKT3deJXvMvsHK3YHdsYu5aboeBjsVKyLmMjUGdik525S",
  "key5": "5YJQ2FgKpN9KezBTn5TYxKwAJ5UBBLxeA7Lms4A7S1qAWAQnWJMoTyJM4ekLRJi8WfGRrNMW3pT51qjXxNfAFtB4",
  "key6": "2yZxnmkf3pnr291kbD3ZMwFKjovYNYEKftNB9WK1vBjNYWbE24cntPdUrotvoBz9KXyxoF7AdoB4gezPf3jDsa62",
  "key7": "2WuNN7DQvT6cnpqR5xVo5D4Vo2BdnTyngN7et4ZTvYujqr1AnCVBkxHc3zygGGh9LAGji1Liok2uAhN82bvqX2ja",
  "key8": "2g37TcDrzeFjnXxKng7GC3a6Di5h9Qo7sDWAV6gL79eAjYcpxhYbvZyXeGdPGUMkFD7q11y3CKFrowJuSYztKGxA",
  "key9": "4dmXagnZbr64coYa5tNhBRCScDtxagpA2KWqovSTPhkswM9yN715jxWujaSLv4xVeDe3PqhBpCUNMd6DHEtwzXxn",
  "key10": "5tPQ3Uv4V3fK662YsMFAAhtDag9EJ9YN9W9zK1z4JnKjAT3Fb5Q469BoYh2Cv8csjtKDy3ttcgoqqPbBSWwgUbdL",
  "key11": "4q43f8gCqz2s9v6Z5ofiwPRaDt7USTKdwnH9g9nCbn2Ttz5NNcnTv8D2erJBp2y8S5i31m7bvcxeekyYoAbQEjHf",
  "key12": "PhGR9i8uPc81CrvUydSxpBqbXuC77MbdSrUNbhppUUkgxhe2V347vj337cks7iqu356wjEYhXik1kiKeeXnJxs8",
  "key13": "2Bq5a87atg1SuvxAd7eVen9jpN5A5qJsSTRu61reJQtq6ddggzxShCRw91mZUsbXz4XEgnrEmfmfxqe651aQ46k5",
  "key14": "2u6QqNkyNuDpDQQ1dXXnQvr3iTRCunm5EqRiQ7egwyR6QfW4YnkAJauA7HVFVbbtTwfG9A6fbVPPZxDMLvaqwxQ8",
  "key15": "5XWKJGPCtdFxmttNxZJvwhyNUhfty8uxN6vaaeMkfEvDdtoHG6S42E3KdjkPMxFcMrmaLhmYCMmnK8yciLfKh5zH",
  "key16": "34WqZ3fgyWbiWzukSAyZNqSmatmTxPZQFXupLfhZCSvp2GKP7F3aqnR7r4uN1r6cYBM8JRN4788MmezkmkE2BJR3",
  "key17": "4GR2cT8ZvCC9Dx8faAC5LxRuh2s6TEx4wTYoZuUyrDvNzN1heaFzHhHfReiehWRpVofNhdZTzi5VpRcbhMoF9ZSJ",
  "key18": "Wc6SvrT7JSDBmgHtY46Uq4E5n7LxMpTy6tMVKhuagdQyTdvTwYekSqGPYqYtnhVbbmWavfBxeU6Hf1dkeKWvuL6",
  "key19": "5U7NseYLTTP2wjrqb771j8SNjVbfA5wRF51d9tNM7Xq7jUbBPdc26pPzgGwRq4d9PNt9EozrA3zoXLfFrBT47Bj6",
  "key20": "2CWDizhLatxwmVrnJt5ztrmFTF3o9MLe2KRt5vuAhCxHFMeHz2vktSWjwjgnq6ZuGF6vExmJ7DZVgMDeBLjvaqaN",
  "key21": "4UG7XZQDSAB37XwQ8P1HCzpUsF66RYtpheytvaasy3iXwhWzyJsjuQtRkt1vM8mkyh4iE2PZBJxjt81UKk299ytb",
  "key22": "4PkGCZDZ8EH2N1D8Dft9RY11RYz3BBCeCV2emZpTVJnPrVAfoTSDmgqqGt7mB4MpDPsn2Vuq9mXq7rj7aZzgVePW",
  "key23": "3YsGMntEtN9ecxAxRqD9p3fFxrycRdnw7zXKFmxXu83wz9qVATTQfGYVPKgAWUjHoY6MiFjZAcTkoftpv8ERreon",
  "key24": "VVsSesFqpyb96qLWXG4a38QGSKBjJZMTZ68k6bVmK6QzuKWpu2UBjYmzsXLEghEGvNmQgRWxRA59y63r7jpYhGn",
  "key25": "3Jes5ZqkxUmzQp85Ei5Yu1eFMW6xicexNp43VDhRCvfZhKNw4uF3XgiFoBN5gB291Ty23679Gf4u9QrVx3tuuJNK",
  "key26": "2BYirt4rK8FhNeCqZbxXMUQU2ktq58R59GjQBiELig4bB3xRChXtBPagcNxwTtmzwyK2Db6QB6Y9w42BAAygCX44",
  "key27": "4mpfgEV4bhWjTSucgKtDsVg7Rh31xVwN8CXuJtd2oVRDM1vDTzfGtexLaLDFzPUJAz7Lv38U346ynEJCDFrYW4Ay",
  "key28": "DbQ3pPyyrFnGVK1VZJrpQX5DY9Njo99NhD2Kz6UtXjuyPt82ZcVKowD7NZV6MnjbbwrrDNnjRgBMJQ3JVMH66UB",
  "key29": "5o893gpUJXkt3fnjHZyDq4kLcpStvJfEcB6QrDhVMZq7fQQZ4XfwuAK1uBe4ZTDnToDUe1HbkCEA7DHTwfQib5rk",
  "key30": "39Azh1Xj5SDG2ibuvVRv38Un5VRk5vXYqqFVv9mBXdEAtbXubPFUktQDWpa2rRcsHbZyLzY66VfY2MA8qhU5b14i",
  "key31": "3AbUnP7uASEvQHidXPLEXvJVEzgCGJ2MMrkGJSwHcUwfp4VchF3e2MmMCgpRCNqmn74S4T4qst7Uc173gGarTwMn",
  "key32": "2tgmZnwLMRUnSwZtcgTDEepkywA8w9Pg6BWVvAanNeJCoFA4UHX5NAHZBunSVurN2Pi1yVsxSMRVZRf9tfesBnpv"
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
