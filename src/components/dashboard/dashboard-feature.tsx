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
    "4gJgruHkg18WDULHXZV4BBoro4u7ZWNBhHMo19j4EXeKMFP1dmuZbC9Ayv4d4HtJ6hLUqQU1bzZxHSTuW2NHcwhP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UocJLeWuYtNwebxyUBy7wy8fMh6dBvKrSPXbNka5LNmDNXeMzvAfTMxRzc8HTcgJ1wg3sGCSfXta3A7z7nwkRKh",
  "key1": "BhD6ThUSrN1e3Ax37M5ipJDnHM5aTeoS3mGbGdbNyJZzjdPbzdMMyarWP311GKXB75NAVZxkv3LUJnqc19C1gSB",
  "key2": "3Nq4QysziNsusGaHPra26w7jgWKXb4Rwwwj2VJqiTHCFU9tP7JF9TDWvTcU9pVJijKXZVpVT7Q9wVj7hjXtaR1Jh",
  "key3": "4cPDFGKjcp7iyc61noyuYp18N3MYvqXWuaEMz9W4rhXF352ksdz8BXyWRLnXKHYghiQJQ9BkaqGZXcPvgazTPEqV",
  "key4": "3Eq1BLNwR7sC5ga58JFNQchiuUvoK5cvpx4S3Rm5SvadVe7tqXGzSyNQAMSjU6mHypSMXepuvFyFp1J2y4FP83ay",
  "key5": "5E8hKke1Hbrys7dnvxsV9MvqTy5x4FNu3pLTNXzZufg4KUprpmfmYMpEymNKE8gv2cJZmBzdfGrrJDv2UYED3GDJ",
  "key6": "65CduA9zDEc2KfuVwyTudU48a7ePntWv5z5wHQL5bbBatS5gG3pDgdMPYRM1piQ3LtFG2vDoAvcp3WRwwMjHG6pk",
  "key7": "2yVCDE3yjeQX6mFh9Xjn4WLAikM5BTAkwt8n7Lp475Hch9ckXyLAafavXeydfMA5nmMJCsYsk76GxB85Ge66RCLs",
  "key8": "28QSVh7ryBpVXYMhw1KerSb3edwszxy4XErQGNqt2uGJY9yMpTAwRpobPu7euShAEiYAkr5bc7qEyX5ZxbPxVAzU",
  "key9": "2DCsnT55Ms2zQq1NTjzzK4zMGRDkbr7m3xuTRwWScKB9Udv4UK6u7DbTHouvHFnc1ZBtXyX1feaxKuWj7H845idT",
  "key10": "3aKekaPSs6htmdrHuwKVAL7gf5PERviF6ddDZMBC2JXVZzTRaJzaMuXsJrQXmgUQsvfodn578rZufn6EF5KhFjdk",
  "key11": "4tNxjNES6JCiz6ofjcgWvzua55ZgQVXB9CpL5Ghbu7kQDCyeMgsxg3b2tskjjdJYSFHztuQ2MszicUMq24FEjWYn",
  "key12": "3mWqGj8uktq8mmAthRd6eV4EgpFf9Q7n9GrzVm82uYSBM3DajGn2kECu1LxjFLqb4dSLzYFMa3rKpgqdJH3Aj8yn",
  "key13": "tczyyAsmBovrxDeLdLCaQJpze27DmJFke2wMAH9yTc6ryMKV3d1cJE8QXSo7Cr4uJR3byVsLzi1W7G6cGb4oxRv",
  "key14": "4mciUyoR6TfZxVHDDCqgNPQnrwm8rRmc13g6JbRqLrs9SqrSxenmHZsEemgb6DPhUT3yLVnmmmsKqtyzBF5LxYda",
  "key15": "2QQFSs3GWvsyWdqrLVCJE8NvMLxSYY3V7C6pASnvHxiMoKMZs59WEQk3SGus28dHBbY54XhC4HS4qNBD1HcnULg3",
  "key16": "tPESEPe6YwJcEf7ndQZvKVZrX4CcCTCjoC18WvVCS283g6UeTipqY6KH5nd42Ne49Fur1iekjVc9p4SotpV7y9M",
  "key17": "33vntFQ4BMHrdvybbPoxdR7g1V7AUoXbXZzkYTLZYHMpLgmf4TYfUAbfoz4nYNMoSKMNESRWMLTMjemmXmyHnXhs",
  "key18": "4mcjrAVeLeAHriGNUvv2AiTtTZ7bbsSg3u5YZt3CK24jZHr3Con7RwEsra4dqojiifKBLT7TBf1A251KDoeY5xrt",
  "key19": "2LKd2bDA7hRpkf8LfKoweqgmy6oJhV1Exx5WXHyt4vsWCqShyeuZdgTyaSfM8CiNDTmsZkYocA9GeaqFqwCRUAqz",
  "key20": "4fQZEG6Bi8JRiWQuSJEdcnmimehbsgNrUafMg6cmn8FpawDhEHQ9LPM1VW9B1rVZrEWJY4moAVyXCjEkquPog7BF",
  "key21": "4EwUhepKxSoikJDt1Xgu5oU4vmF7Dke9VpqJEV6wyJUHNFbCQDiLxHQTjJZ6YrG3ipwKDcJ7pN45xF5S72dQQ65p",
  "key22": "2HhfqHLKkyCtrKuS3t6UMqjAMWZQLHyTYLiYcFBC8KnMBgCFxhXemXZqbwvowz1S1tTx1VipZuEukUJVpRGLEC5K",
  "key23": "3suYJct2md6m1p46GnHZBwL5upkteYFBRhF4eT9D3q4fVB4wwKEnoyV7VvxLa7bkPjKHaN6T4W1UK687zwTzLFq6",
  "key24": "AC2hjQBY8iKwSrG7VNmo55Au4cvvE2eZPJEBA5to3P7j5iBhDZRkg9EeLnACB6mjb4UEf7z8cJAGLGy1G36Ufwa",
  "key25": "5hegvQZYvag9fJG4WMg79mwQaiitGSAy2DyfvFknrX4vxWb3u9dfwai5Y6GiH7xQxJVC8r6RWQfvsEAcq4n1a1KY",
  "key26": "5fUenNtGHkAcy6pxSkZgEkLqmEGo7j6FJHiWo4F5nBcj8mT5Tughk3RfhseGg3cAYJpkSWd75dzupeZAGYmYyZKx",
  "key27": "4Tq5SwFcUHbApgXhmeDVJjfcs6rdWvd9ddU3kS4WgHJQQmGYP2gJZPbgktzFVC5m9PXsrAptnovtaz7AzAJYgoba",
  "key28": "65n5patx8Qq2qWkqJTzSsWZAouCStJzLEYgmhyNZgh2qiNirwjope1nQGsGRtEPuSThAbVnjkaMAqhbYGJ42rG4u",
  "key29": "4ePxijoZeJxY5d5bmJJdhD3JfH6uiVRNNGgZRL6k5naLYo32Ri7GpUbhmzNLTxkiUv2itFHzmip7A1ebAFr9qiXr",
  "key30": "4RE1CM3PWCQgDPobBLGVrb1TkMMW25CCBe7P2jdxTVGjgtWC5WBRRtC6wUoRbdVkseQ74AVZ4dXFL6qZn9LRMEcF",
  "key31": "3djukWLbNuUkaK37WMxvPLFRn7zFuWyC1jW8XHQZupBJdKbf8FuT5tF9iVHE5NBnfajebC7SzoJtnBUnC7AFitcJ",
  "key32": "tuXZ5BivYNiwFa8h42WnchcTzqnpWbSaLS5Pg265PhUERGZ91Ypj52V1D6rwJad3QRmFMNmRLNge8hDLuP66rMc",
  "key33": "dTRAxfaYV4vDpMkFoHZtXgw11dgPA1yPU71aYHNvCKqv3Tc7KkSpadPQpWh2wQDZBaMFZRwJYWZaXegANFfGndy",
  "key34": "5pX4WjBYjZQT5d644cgacCC3mVLNQTuSB4k8QtZDtPF6aPJriJTqgwTT5HoBt24HgaQBqfAwR1T2NEz8g1sLE2rW",
  "key35": "mtwQU8oyasBCvPmXf81y5yuEfbY2WQ7rxKyLs5VUEEhzEuc83htL4wgKFdikqnHi5sokHXybf4VbBWHSe2qmuF4",
  "key36": "5TSJRVaZvWzb2hXcadWTeq2ZhcthNu4MPhg7mtw9snzFSXu2wLZ5aDofHACNnLeLjmcB4f1nXHWtkYMGG4HrT6Ra",
  "key37": "5M2ss7SVtjEPEDDTKyhsyq97ERatp5UJKFMHHQoqiJoPcfDDphpC8vUv3L8ijdeTwmBGnT8Fy3SwhyCC8nxKuUdY",
  "key38": "3YDMV2gXYGo36Wt99LDF3fKAvK5ZUEc8MB9iziNYGfyqbS2uy4dsyJRCvtccF35AkTyxQa9ACFmVG3MSsZV9NtT",
  "key39": "vhH8jZG6rtKhMQzrJyyYJqgw2pkupPbzfQnsQHXZJjUMUBs4qiiV6eTqYRksoZ2Fy1ASdXBnGb7bqGC7Yh8v89J",
  "key40": "57ioo5gX9Ma5QtRaPxuuYFLPs4fsbAgRXT1XXpNgcr4V8KwBtK3g2NS5THpMwCuUC6GXUnoMTV8AG6gpFQLbqNPh",
  "key41": "4c1cTMuMo7zQSEZzgkRtYGtvjeDzPi8s8tc5k4vUKryc92N77QPy5kYLvVJtQePkhp1PEHhR9gd28ZJudK9jkxFq",
  "key42": "4jPHNjdyRRaC37qfs94MRcyWz977eTkUT2J1xviPtNsgx8avhnUi5Bauo6UUNbAs4ksVSnK6mCkhN1LxKok4AWAx",
  "key43": "K9APvMUWGi6HYckgNqXwumbWMrHHF9Gm41mxqXoEtaX4xpuLeNs8QNBBCvaNhrYAUE6cuSAnESdnmDgowgkgTzQ",
  "key44": "2GJ4EtXNhPpqUnGHTNN4iezraZfxVDNYDr2kiyz9vxGngU4w8fhScbXXpzDWw9X54ccZv2pCkXed3zD9y8eVoTLo"
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
