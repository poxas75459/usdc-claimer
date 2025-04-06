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
    "3dJ869XnB3rcCKTpabNsXEpyr9f3UUphBPQinvto6bKovi5mVGmj65RZyEXopj3CE1isAbZKaiPLkekPrRaAwfPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HNrLJKNGQx6SKJKxS4n531NXdhrtC1uszKopphnCmNoDn9bZjApa1duxFQAh2gvJF2iWULRp4JKBFaZkxZ4Putq",
  "key1": "5AJDMphU2q6Sw2C1t5eYS1vD7sZWzkFRh7J1MwJkE5iegaAqGfHq9kCRn6mVLUHBYcTSdncd97i5osFLjAAib6Vf",
  "key2": "5jyRbaQ8Cspt4wUAsDKcvrbq3jqZCRKDLjBwAVz6pyWzvNQqSwDJhBDypqmHw2sSDbJ1a915hG6wZAsm21x5dNKQ",
  "key3": "3e3a4TDz3M8x4QuVNmDYryep3wnDaGwSUFeyFsYaPuRCTm9JQEaWpSqTwynid7NxhmgoP8EdmARUjVkTDvkabZoD",
  "key4": "gTdQ3uUCXULTQPiwW2QsV2G4huagd52mA4JBT5Utzp5g2ue4ZFVRUcWBFYEYeajmKefhQBduP5PD3vQmj4bMd6Y",
  "key5": "47sjDMzSuPF39Db7XwnYuTZcdnjXrSBmUNXx7KWMbqPXmjqxGPm9fEqP4VpomWqLm1XwJT6aawLyRj26v3E19Fzw",
  "key6": "24Q6pTzFCFMeuVC5TXhTsbWiMq757B2gPxznZddmnrHwxhKMs9gKcPM57wBfzB9yfV2ZpjsxWKjRYCUNGk9u39FT",
  "key7": "3GRFit6AZ1kXTh5NRyVj4qmBPiU7A3Rn8MbpBThXaGYVwaWi9ufjhtURvEfT9m1PArbiqLiSi5mj8eWjKpNhm7fD",
  "key8": "4Ce44kY7pXnhyWH4bQmZDrrFaenRiqTeoCdb9mGUBgbEFnswZeYWoCmiV66vDjHu551sJXmEsTpe4Bo7K4gjbch",
  "key9": "MMAWVwcS3hKF3GaX1gg3fSkX5K1W3MH3EtuPs19uv5aNNHciW9mYDu1gwRYfnTLvGorJ2ts1iMkNNMhgn14h77Z",
  "key10": "4x4iJ8mccR5bizrJw53pjA5o6UQztmoxSXxUFmBLVcepN9f8ngtgunVtQCN3NqB59QJhY1bTadQD2ss3F8GKXuT7",
  "key11": "3egDWbnNyFrrsgpiE8XGDKjiDUfFqmThbTCGP5SDrwGVSZcRCxfEgWayBqBqF4hzzie2fxQJgr8siyNiGTJrWjtN",
  "key12": "2z4jvrgKMbyTQDxzbLDxkB7JmhPu3EFGYYm1Wi8zNMGQY25uYSugsdu6PnVKxtV3KvnHWPdcTjnLPqYsZA1nkSXh",
  "key13": "5Uyn3xLjBjQawrTRCMPQxDW4kaSE38nPYDY7UuDQfG325iXkXRnJUey2sX3jJMKHG5NNpksJ1isRshh8agyfmZMv",
  "key14": "2hdCwymHYSxt77HBSqqL5iQVoMqfEa9MV7Yo9zo2az1R3udT9ef2FsirtefdNSj2Nviza54qNQv5wV7j1gvcJCtk",
  "key15": "4YWk1ZyZJpCyb4VAfFj7Y2ohyHs95b12wdWr2UQNLUUSsZ9ShLNktR6PFSG29JEUXLWNhcMPs2HqoEFgbaKe687C",
  "key16": "3dMSFuH85bEzDzoQuhGjPncG56ZwjABUUDALsg2eCEjNSjko4x9Aqc8cTqb9QZbwLnj9pXPms2poDjycBvjCWDD1",
  "key17": "3t61e5NJcTxbrXktsYNc1iHYT9bQuvAVxb1qkCbn7fNUE1Hom7BxwBuHEi2cduKLs7bMjQfNan5Mpi7SUhET1WqQ",
  "key18": "5F42ETqgW44powdAFbkEnUFb6ccQWh6mZNr9SKKU9UPa8c5GssxLcD2EB788Xy7ZMLXaERRdwFxVVMfewZnykW1G",
  "key19": "58NddHZKfCUgj93Z7DjC6e6NkWJUAuS1jBsbM8ffkmAytfVEGt3YtYKQ7gruthE6NyabrxdUzz5bLqFowhyYMGsp",
  "key20": "3oZVfUKFd864ZjMoaTawDJLMfd9g4PNyJRi9yPMdMX2iJEXuwaBFuyu4wCeunWSGj6qeYdFHwmumLWPi8FxkSZkJ",
  "key21": "5fLPJq22Az8PHfDMbHBXv5xF61pNh7neUMyzthmVeUf6HA5eVnSfbUvwBj5LJTKgsTGEff8Jq6eLNUP4MwXm1JiK",
  "key22": "rRWwJKLkMzprcCb4YaUrtkwKwpUzhJCPtJoWubd9LMEuuDLmnHgFUa6gwLgiNfKP82TiXrMmEhVpyrtFVyA8ZTv",
  "key23": "3pXU2GNkPSPnsB6fwhuBBNoo6yjEgc6MJH3nue2EzoMQPJcFGpnpkgrmxK8YGUJBZ3rxcNLoXUVPSmjyJVmYgKv7",
  "key24": "4X5FW5VPW481ciw5ofuJTdJC38dvyiSmLsA2Y6s1YtjVoCgtDr2vtnEpVDTpgqzT6ZNfF4uYgMwh6dsJLSrFFSGW",
  "key25": "5uBBfKAsNWHf8MiDhVdMV3yJskGEkNCWs2t8teyyyRNiHiQmjrtVdZAvCSeAPeeCw9Av1tQiwg35LwiDAXr3SNGs",
  "key26": "47YTMJP7SNxGLiXAW2Fu2bpNJ7MQ6Vapr6YsD1vSdFtBGtBVjVYDc7z8JGRcYk7Hvbr2HsHDUPSr8FFBrfchv3s2",
  "key27": "3ygPZ2FjcmEM97EzVjbLbbd8AiPXmBGb3KS5dVb9Xbq1UUDnbdXwfFMPehovPdnsS7atCuEWV7ky4K9P7WNEXU8",
  "key28": "5fXViMZUVtsPNv7MbKa89gHaTXtESj9WLAQ4oPsjFYhBtohjwfPF7bARxQ4Vnn8GQrxVvcFdaxN4GQRqCB6zPKiZ",
  "key29": "4rNWuCGcxkmB4hSUDxEsJxNaC5v2FwSrgbxLEP4V2KxCiku5RNdjYsCPiTtdb2yhNL6HUurwviZTNQmmdeFBo9hM",
  "key30": "5NMgqzBFFyLm1X5CTmcU2QPALK4a9SndgzdNgp1VLCaJV48x2L7CfrptnPVpUQkHgFWkM91AQHg4jcLHyqSLCKmZ",
  "key31": "2QqcFqc2KYmXq9f1LjrboyuM9XGm2ekpbEyXiu5bhrXkwN3brZuxsCGmJkDjWsXy4HDUp3sxUmYMNihGqBTZyVzY",
  "key32": "5jPejQZwCP4SAN9PYJvoiMjstEUY1Ks1j8vgezJ87xLcuGAxihGrWtu1wGZ64LukXeyK97d2UEvxCi5KioWdfDXU",
  "key33": "3exBzWw9fqQLCmcpYogJWwZEFcUJRzBizoJvwb3LC8GVT4TvCjrHG5ad4Sup2ioeZcVzWhn2YPKauR1KPScNiZk8",
  "key34": "4D5H4QZkMqfDNMtWtbP3qG3MC1tVC8AW9GLBUpQmChfqAcx94L3B35BP8nuPT3c5C1emz5zmDHm1NoYDuSRQWsdT",
  "key35": "jAzM2TcFzB4BDwYj31wuCH8k4xqxMzRX8fH4eYd6eSVRt2hmakYxaK5j12jt2VN4A8b6RUwNVPEYQxD4VcQ1FfW",
  "key36": "5bNfbFVobhdnLYVnKFY29CL993VSNmFkxMynCJYh6oFWMJ3bzFNE6kYu4tSVnjQpDjWFnPuc8R8thkfMLhbkAj1g",
  "key37": "2yXbi687hpwq4jF9afWteFto5hz1WQe56c5GYw6NqvsitnnjrgZyHz2qtWR2HqQBudPj5dcYfMz6PxedW51z27gZ",
  "key38": "tEmZdzW6K32rgpU5of5aoPcqrVTnj3XQFtb7e1TZSpxWinToeoQXQLDC6bPjnXVuYrPtFbPmuZHyH7grsHkgzfA",
  "key39": "5WcBszN9koH9ZJcC5vCnqFDajgVyiJTEkDuZJQtj7tgWQ8DDyAKCXQ9BgasUhysKGFbftkZQZjgCXKDSnL5eCXEy",
  "key40": "3ez2mGBNymEUxYFwigvnmeHRJ9ey6VXuYWqXSuNMK4jbPUa25TJsqRVXy9Sg4N7z6AtRUuYSyY1hnG7ZCHvL82Wy",
  "key41": "WTjPQ68vnLP5c1NzssEdp3QkQoBXhCTm1cAFLUoonDHgMvMpG5bU13WUkgKdFFzP4jMWcG9UBbuyCEMTdBuepqC",
  "key42": "2XN8vPwUMvQowBH9aDtdjtvaxAQDXdsysB92BnWXxeMVh4oFLYpW21beeCzwWiThMt4wx4dsFcZN2JFd5q45SbVU",
  "key43": "28FT27Sd6t3jykY1cQUEcaH4kTPiH6zYAvTXVkdx9DY4DwDb5EPwfia3q7udW1rpLa86cWAum8Hsm8ewuusyz3hA"
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
