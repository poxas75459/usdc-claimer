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
    "2tB6TYTX6x5bEzUcUneUX9DgLxf8CweG4adgaXvsunHZkaLyV6skCTVa29Ws6GnkHArvuoNgEqwKgKwwECqcnWmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JirFyV5ASbgLXFLSakaTUKWkkEZYjsU4qECVWAHJvDQ5Febmh1HirRJuxiV2oEqWwGHWSspgp7brDMbSvn8DrFT",
  "key1": "2XassNk3P5R1SnSec7TqxwQeRuTMtVWwFndtBabCWThTv9KKZhCmgDH6Y4HTwgtWVHfeTVrijwzAp9v7V3Ko3tpM",
  "key2": "ByCfM5nKLUYUcBdDr2xSNDZs8eGWbEdYNkds5o9pDmDijHGyduoDJvAUrYPf9JKyGFw6idd4nyehzXMG6ssBRYG",
  "key3": "sUqBJNbSrpw8vGkZgk9oQ6F9BjasJNcvk2zkvz9pJCoyVQ4AtuPQ2uhSHbDzdVxc6Ncm2Kt59mEzrMKDXvgqXAj",
  "key4": "5kv7eiX6Va4woQ5o7WLCekAmvGqu2eZLjn11FMU68CDRZRhkuHMX8BwjjnUgNndQYQMxrL6ppBUaayRucUd4mtqD",
  "key5": "JRECP6BYsDZsns3AtjEMF3XcqiEgPynFDWy7LHrPNZ4FVsBevqjMTEEtwAwZc3ReXDJpK4Ct7ZY4iSi2RTCXTeq",
  "key6": "4roZNgWhB6nZwxsSm7qAgGd4h3CXH4VuEWuSmk4rE3bwPZZgmH5cmVGnCWafci3o1Sx8TssgwDhdtQCyRe3wPpQb",
  "key7": "4Vp4LNezB8wVSjy4qT4d9hAMunUgwsxS1hWxRtjJ9uyLtYTz5b2MxSG7JTqTwJo719hAURZw4A5kB3fBEsxEBvGz",
  "key8": "5MzGrENoMHksYDbjFtGRD2zX2NaosbwNs9xx7BmTHQMsqtNw6SjbTUPrY7pqRQCyv4bAX58qXP4xrFtPfXQxu1db",
  "key9": "2iRPGL7h9MzdXBrmLqDmnGuddYaXaBn2k5Wk1KehUXYUJ5L7a2qTNqqfjn6dqganMgxb6pdpDTG75mtRYQsEWPmX",
  "key10": "h6pcCpngBT2GgoNxXLq4XdYM2u1x2tfLnPK7XVrF1js2fAa4W4cSeYkyMNiDbHiNxkjj5TBJhCYjrYMgkdBEaoK",
  "key11": "41Gqt6Y4auYABWkW6tdAgXJinxnVkXNVYUEiP18B7gu5rMpad8PajyzA7tVDmQmKQTWijYvREkFyqWrgKLasHqGW",
  "key12": "2N65CmTQ9uLFR6mWByQuxJwbYxtGELVtQKV9zA39BaL7eix1a4dBt5eEGDfk3gzmgspPsckUFjCPonZedT96BxQ3",
  "key13": "31BZ1M5ZEuJYuL1HZ2eGdhb3JCyrxnDk19KVxB6ozyH92C8uf7NjVS4oPow8cFi1GqhCLnBVZsrDq2CYZqSiPAUW",
  "key14": "2ute2csuvBtoUHA5jNHFYLakUPRFzpm64xfJkWuP9mRbmmnL8tGAEXDeFNKXfW8pRxzUe57mDzGX5d4QYkJLW66j",
  "key15": "5QXBKw4y2Ru4wRZnBDnZpGYjcNWHuS2TPjxazpr7LciWaNNM5bb3vyNaWWAiGjbMfaFxF4NpmWMD9AYeJbffxc4z",
  "key16": "2pWn84CSj3NcHqu8pCLN2AB6rnCWdkyB32sagWC38DRVbW4P1bHhPi7roKDRD1dpPHh8JmrK3prVYrU2YZWDLusk",
  "key17": "4eTrJqHtbjC8RCjwtaPDh16CC9BeM8AK5Fhxemvq3HrANzw7GPc1eYoacmM37k118ARGvb8bpidpLuwAw6fKcPmh",
  "key18": "3DBZ4kagSe6hEDYojewofbqVsrjAauzdE1V2mcxcqrWUUgi1RgdwubPWLQVvG9qrySNBwywvosevPkqZkmjwsfkR",
  "key19": "5cxUNKab6aLMg6mbn4UBHhx8Xh3qL4jTQNYaRdS1ZLGUVyDS9RKcDRwGpkX7LqwULid32LDoeM6yTDnBqRzoG5xF",
  "key20": "5UjFg2cZFC1bAuf2aQa39w9NLXqkx4ucD6xG4Rj2yFZaU4h8QzRXZsittxuonnzZcz8V9BKpcdLzi46d9kUhjqJ3",
  "key21": "3TTUpXNkPugRtGgKdcCtqzLqbmpJhQJp42uBPifmvHVaCcF1iVRmxxGhckhKpCLxq2ch5U8xzE7ry8MB6vfNUmAj",
  "key22": "dNvaswGaSL28VLzfM6duyc8UnmddTG3c4t6Y7ibaWAiY4m1ULY1ALtqJcBf4fcRZyPF2aSwY6j3yrxgwgRwDVMo",
  "key23": "54xsUyoxCyPsNhupMeuGaTZRQNJRwFgbMnHThrA2JUaYeLSRbrtk7SCK1DZgCmhTaby82A7S3A8V5fxXFYU63via",
  "key24": "5477hwLYk1PsRsDR54LzdY5BvZge8GbwTR76rkRtoaDBTuYsHV8Q9KtZiDZT5VD5E2PW1qC5KvHKUbg4wQDHbFAy",
  "key25": "4q9M4xGUcpikzbsvTFmbQ7E92pQdN86jhXeNJxznx7RbSTdZ3DZEDZTb5t7VSbrBT94d71M4hLraK7xAu91VrAEF",
  "key26": "2kiWGpyHab6gLEmiYyPYYY8G4A7yaRNVBntWekcuRTA3tVybNy3SEjbjLh85jjRNTK47drtNr9KRVhRUs9eanXqE",
  "key27": "4obBCJP1jzq4zVdjNyBFhgRM34Qqbk8ESb2Q3AQWXQ6nJeGiJbeEAiAa5CeV96Vm3gGytwYZswRgYPjmDuZcDBgb",
  "key28": "4MBpsSSmqz3xRvKdo1efyHUFWuCiEKjTqJnA6eu2hb8Cz9KVb64sgvFZksmEMRcvauf9aMYCHkag1cgR2gUNtFpk",
  "key29": "3AFuqVTGhvqrAfnpBuqHW1nbGXiQp85zNbhE9kSxnTtDTYFavT2EvjGHD6G9LMkcewCbuEJM8t7wRTK4qCjDKbRS",
  "key30": "2P5QmuCh1tyqJw7NoMo2FrSea6mufLaZjLcJWZfCCZAz3aSkRp5A12tmeLJCbKqiCRx7BoiVE15jSts2A2E2Zx4W",
  "key31": "5bKBWAZn9AojeU1RqoSCai9eXSAkXTso7qHLEK3b6myihLQdotHv8sz7oiPGmb2vKnCddiLJehnEJRQxGhKSLwgQ",
  "key32": "3uvfnngxbdbze21jBwbKh44JwwsQFx8s2S2q4DBtRcmH1QQXuYyfoS6yD1puYVRKTQHpVvtWa9Fw1JZ5fBtVXTmv",
  "key33": "23zGm9qiFGBbnqPeknvtRD7TmgoHuY5EXPc5WnJBbvPBqGwTDAVCqj5MzhaYyh8P2mB2jsRm3U4PmqgvpwJk24v5",
  "key34": "29cUJpLwityZBeEecnXfnZ69AtKUhj4pxCimgKByjmmhrHCkNtMfwyF65Fv93uErfTjMGLkKqkxzmc7UUshaVA6E",
  "key35": "3SbQrcScbBtt2f1RFw2L2Evjt6GTG3yJrpgquRnEFAB8fVARnTfHQB3WiSTruL2V4DcMzZbv6x7eF7kigxBq8oug",
  "key36": "31bCwgvo2DA9jRSwRn7NRMgBeBL1SMWb7CRJMDkJ5X3bJNHHmCB7Pm2Rok4GEDcQuCjpQu5VFKzL8xXSb6sP3wxS",
  "key37": "5uczdx9JfqdpRD89oY5kFX74ERjmB15FDSVxyLyWwdPiHPfebh5ikVJefkpADbd3hwKn7kKQd5RCfBAeDz9JK3Fe"
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
