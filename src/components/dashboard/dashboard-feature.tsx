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
    "4vQEeHMDrS3EeYdVTXDjv6LRoaYE4ZtXmNgNdJUJyAaeHYZx2CLUD3mdPL4bsaT6WcVPKnyb1dsMnAMFEmVxwZVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a5QLkr3jRMpTYsiYSgV7vGow6LGxZZVDpuZsULKgcvaGGkbvWmhaAzU7WEQZYBDeNkaejwEoVsVZQBhdYHoK86K",
  "key1": "3HKgHZfknNRHQNiY6p32LBGSgAccvC5Qzi3bGCErddDzWUbNruoZ2QTWF4S3QWmLg8CTSNEocL2giWnL11MuyCzx",
  "key2": "5gU1Q1R8WVhxCj3qJbTxVttQ1DPnMGoxqATsr1WdYvsa4xAEzq9zB5cxemdfheg7oNvMeaX7FDRfvDW8GEUdp5LR",
  "key3": "4FJLH6j6tzANtx7nDQgLo3cAod6TKRTyDPjgUdjZX8M2hXi4qp1MSecu5Fj7kk4fFWBCCddn3iwcKdc1vjjT3pFc",
  "key4": "5Ti6MDHR1isgFAXCoMXYAZfoNXGBcR5UYvuyLc2HZ2n68eZSqxbi9GkMZaCJNQHbrzM4KUjBW4GkgrnJeM7cQg2X",
  "key5": "38vCXDbPTiK75jcdUoj4i1R4hma33KCxjZuvGbzCWwZT1LgeRfMF9o57obryjxuh6MvRYNs9X4FRzmTQux865PE9",
  "key6": "2ZfYXxqVc6qH43GZHHN1rKqCNRN7bQYR6F21RSBgm5QaPu5RvfVdqDoVf7E8gdwjkiX3UWmN1tSUuC2ABJpWuSK3",
  "key7": "5MFE4S3UC5bEV8HjJYTCqWmRra6XEueVZkHE23f71zNzKqE9uzoM9fU7sBdH8sEKLghzLvrVyy9cx4X9ZWTURWj3",
  "key8": "2mBb9M4WUo1EAUpaQZF7btnPxg4WUTEr4kvQDmB5dnifPttWcYn8JxT86QjFK4gkLsJQtcTrWCEgmxCUA5FqGoLf",
  "key9": "443DPQ2jrFeNku8VJvFGZ1p2uKdoyrtGdafLGpiTiTtgL3bxTFycQrw6VjNU26fP4JXMYvyAWZXobYDa51ZXDNFS",
  "key10": "5XxbBctanB9GWfzmgHU7aJiGmf2AdqsX7Thzv4fXXUKoM2P28zgvM1eTdnP42AdKdAFxK5X9Z9gr44YPMeYicWxB",
  "key11": "4bj93yTBTidezvLHepvQVWJHNKLNyvv5iPKZo6igfy2FkBHbxxiTRA1tQw7PqwzsqZ3tAGjSUAejXeFU6bgxcTGi",
  "key12": "3X2DtoWoYddxTyGVXUYHEvUU1emZ22Yiysg5BFAd3yw2ED8Mwu9gbVGMzXNCXW4uAD4uoUwXcvDDPsSRUwVbMua4",
  "key13": "4sSkVC7f6NcPynttdRwqL3q1RKR5y9P8ESpKxA2HR9vBw2vcDQr1hu4KA6TcNKESGSJ2AMjD2L4hc5CAqB9c28ik",
  "key14": "2SwsfXNygiTooqYpZVsqyRQtz6LtNDr5fQ6ajBMwJZFn39qoTr95VPjhvqxMChjkYsK9vcYTGgykhREUV7vZEpeH",
  "key15": "2FbtCQcJomQFDet28EhY5MjhgiNha5LShhvycvcpSQxJJqPzmsxpas5nhUKxXRJAmfLdcCyxuHnqfLZLkXAeNRUR",
  "key16": "4i3EhmjCATaUxmatqLtNWtrTK89NrVtQsRh57pE6mNxoVbWMSZEFpXQQ8jiTZPLRX4xUps3azyCTdHtqBXFFVy8J",
  "key17": "58shX783XaBwrwHjnj2yjReHoEH23YkhNeJJUA15mWCe3Md3zXDpoWC1taXJdXwT81Tbhh9AmtAYBd2t8kKdiHaz",
  "key18": "5gcKfFcKK2nLr1idN2jscoXkHr8f1eNksvtJfYRPZpj362wcNPbJj6wfbpzMwxTTekqbVTbzocjV2FKWLQc6jHMd",
  "key19": "5CZWHmo7mV2Ljcs1qNfAiaqoCCzZTLmn7psQNqTjswCTzgtS3VKdC3vf7mTvFjWjG9TuKSERRmPz5htuN9hXgkEA",
  "key20": "ssbFZt12zPWpbAGBKVMDEEx2Zke5vkbZ58SgvKQDzp277uhsNBSZWfuudGaFDtBMZ111yTXT1mX62jb71WcGDKg",
  "key21": "31zNR29sgunGwyYUZUqzoxxjXsDF75Ue6zZHqTHKTujqnY4rPGfpwn2tBoCGXUH4WPRLSo88SuEYiVWwQadioA1L",
  "key22": "61MSiwDMGCSY3j8bQPKhX5m5q4VcGyBKLEnR6wXXJieTuZddNRejN5dipx4i4JKhZRFXNdKowquZHGPPVyLLivjw",
  "key23": "2aPTQk83AZqBGcU8ep5XMRyZchxJX593H8qeo6a6zV2YtCU39WnbtgEYJsdh9J6uZCjyLtHfn66AV6FQViGTCKXr",
  "key24": "5wss7Ea4VJceUMqc8sAP5h77FoWwHUvubq59kztBoPiN8vQdh8b15GYLCrjyR1dEMJFQzcvncByUorSGRfte2kqe",
  "key25": "5DZQPqxnEQVcTyzau7EkUJVyDoDzREBgsMws4eaVPhiHLaSiLZj5Tk4p1wECjtGDttEtD56EdNvhHJgGmLvfU8sG",
  "key26": "2f3Px4ZFjTTUfDQz39T4aWgdgxTLBXzhNTrcrnjUZjEEDiHzFJyXkXcaSEn9D3ytSMyUggYUNk2ufAxVSVEaCppH",
  "key27": "5LvB4FdGNNBiZpHoDeCRTXWwoYGuxw1AWtEaPVt3H36RXRafZ2DdPLZKDTvcm9yHyFfe8r2cZDXBjNGdfJ4G2ohb",
  "key28": "34HDx2JRpRPtRaNwb3Yym6kAxkowZCijhRqMGVVbrGnCcgnk5qxvs8yVySPqwFgcPM4U4REfmcVoT2upLRFiMVMV",
  "key29": "3uvP2HL6ar88jFQ4cAt9NhEubtUuHp3iesMSgmDvDkKoeWJJuAK4g3zcjsizkqcdLhdFMDiwW3iWusU5mXX8fB7Y",
  "key30": "mkBViHjZJjCTVwWXEtQimSo14QsMegGChxkDsarxjKvMx4FDR8j62drJi8hqDwA2rqdQQ8QMABSawNRsEVa2u4j",
  "key31": "3LziENbzaRz2wQuxupXb8WcjubKDxKXifrKNEcxfnGsZnSCSJWVgCBFQwkM9hMF8tsHXu1qbPhEQ4TWYVdgQ5CNc",
  "key32": "6vggmqis5H5hCCnHS8MiYqG8Yh5TSpqxEHeYZj4s8LntoLGFpZX8zEALwJuM1TsH7r2cG1hPAUareDKLg3yjf67",
  "key33": "3a5sjGM4GangSjvPyderQZAEAKC24dbkKsgZ9s9TM6CrD3x8KhkVLef7PAs3TXXgFBFMi5fj4PNqBxJANkpSkM8a",
  "key34": "3WHnfVAwwdcbNnwJdGPQAFmiyf9qdLopceRV7AqMniYvQ5G6uKEkoW4JRb8YYssEyQpknQR7EDnRanLfW9r5JCk8",
  "key35": "34ZXMzNKj6TJZTzynKGbW7VQoTctdKs6PJtNsNaUpEH33aTaeNLnhCVzboJAXr17NvSynBzSkgYsFwSZ3sQNPi6i",
  "key36": "3zzXZ4FQBf5LdHKM1rMxDgs65zQ1VBQDZp32oecCEgwcn8bsrbERUMeRcFTaP94pjmuKk6UwykJYF3hMbTAjfLC6",
  "key37": "5k8RtuzBELgaxs22JxGrGnZSihLfjNmKdxLKVuS7FtCr5gftygNVNTZKm5mqX9x3qFWubAVwya4a4BXe1RH9eaMs"
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
