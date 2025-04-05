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
    "2ymAdTdYwq6ePNm757r383nsdX6b2j6fRoyGgpCvZqv6PigQfUnDmkXNK75yJ8qhrSDsy4kBrKCS1rLHW83cRjTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F4vUs2trXHuZwPs4HCXaVL1Pf8bKb2TpVTxyhs1cLoMK4QFu7fqBQ4cPFJM6H9k4BsGYmmjF9yHHS1adFuWy3ZU",
  "key1": "45e7MqdXro3VMaKQJaYKhFzQqkLLDA3szcG5LJSS7iXyn7B2QsuRmX9TYDjFi8aiiomc2MEjM2R9HaooZ9mx7D8A",
  "key2": "2Xcxo2BrH8LPEenqodSUe2GDb3gk1smbP4E1eZ9kGXqwECef1bNzVYmFN9n7rMfWAV1pcTxZfw5dTqWtqfRTQzRF",
  "key3": "WM4Z2habP3c1L6M28Sh9H3yfwk4Mfo7Nx2chPFAs9zGdtoM4YdhH4y8F594u81dbdVSeJfDEuQ7Y4v1RGdMbNtP",
  "key4": "5H1Am59gLekc6eRLwKyg3cDz28RCfvKW8G8Rcp2FhZSUDGUM2LveogmmKHLK6uJtHFsQsTi2QpUGEQDDpu1vcXY3",
  "key5": "2FpLDCSmAs11gaDqFvK3cfKkYcxWMs7MqcgxoCHrVnrSP7KT2f1ryYiMxuV2sEDKU6GMVrc2JiUtoBYsFsnYzkuw",
  "key6": "3jsk6BJpqj1eRC1f5euxRw1N4TJcwt6fVVtYBR5SZoMq8nhkSULwcEXtumqGnfbK7EeTXzREyMwHXD5r4MYApD3",
  "key7": "5g5SJDnPJPstjn7RokCCMWycha2vqs9ngdU6YPwVb746GEd2MzJxwgsDnkAYBWL5RgQR6GGNb5rqxC4Wjx5cQ6st",
  "key8": "5koNjTMD8PimMRpqoQxu8prgqSctUqsW6uJ7gusNDJD7vwGkZVzkyTxUcJCW4H3dLjfmJydUsvgc3PP5QkcpyYiM",
  "key9": "3BQpm9YwuJLpQ1JtGXjoXgJuL6V2CPdBc4U2MAsBXNGMTeEAj1UsN6Qoac8fgRuoEWqcZXg3QpNWfp5W2jsZ2KVc",
  "key10": "4GrYiH4id9env8tjywnMXeqWXDVg4kEM4gyCXjubPcSDzhTTfkFkFmzxr57LknKDKYJp7js1q7Yz6Xc6aTxfReY1",
  "key11": "2Ug1J7HA2s5Zt3gjineSfJRF6nUF5StbV6yyYiwSPgam1wyxe1y2K4ckLpxZ6RzdThcrLLvPJJ7Grgrr7UsiL8EA",
  "key12": "26ARDgjPff1U7TVXKQRpcvLq5CipPrXQ9K4GhuKdzV6cqWp74jD6gjRyhjMeBKm7WD2UnwFnTcmUMuKHb8h5zYDH",
  "key13": "56AcyUvmHKvD3S818wZQPF45MxxzpnkEg1qTQybMxpv61YDCmNxk5ohwYS2QZBN7pBtC2ZCV6po85MFAXFFyjcTo",
  "key14": "3ZKKo6y8ySYoSbzsESqBBAgRZeHbyaEV8KtFUTyULrehwrhk2rNyRmwTWpQbxQq12Fb78gGsbJwcUbdUbQTwdEMP",
  "key15": "W23zj79Y3ggDLAnuDtMrtAJBfJtN4VZW1NsU6eyqSjAiY4j1VLSVJUDbgi7MQsC29WpFjBT89ydpwkYL73sPEgu",
  "key16": "33dGpMGDKzPHcChSyR7TyPtec9wBYtWQ2bjmtWLJPVWE7s1WLdJkmkUWRrzq6hPw9ujg2qBviGFWbaFDiR6QAJ1L",
  "key17": "3LSVXXXYwKSHdSdKnppRTfdnvCfBYNDgsZj7qRd1nJDnKJq8qopgP6huYkXAeygWGzzV42zQDqSQ5WN4ByZEGR5p",
  "key18": "AguZBBCkRRTSfhSVmNkWQ6pDMmjjp2smZmvkmsg31i9SH3sj1LAsE4p8jy6MZqMMG8mYRH6t5ZVkoiSm7qhqjd5",
  "key19": "4mSM2n21nRiqYkN4CTp2DiFu3kg7mzsBFJ46K2AiNsifVk6v8UhuVEk6dtyG4rZDP6edfjMZ9TxdH9NZ5nPxm2i7",
  "key20": "32gZ9L8dDE5bTePt5N45afrEs4X1hGRsHubbSn2fRH5idojUBgxRGyvLbdXcyyMNQ8E86TGPRVPA3m8W5yHGKE41",
  "key21": "4eicfJTWT8XP72RcQgcqy1xrmFjrtRarRAX9dbh2Fk679s4NzGo5ZEobK5EUDYuhFsmeTrQtDyLR6o9NKEFmnoRU",
  "key22": "2aNeBmy85eEbZAuuDP69nvU1JNpsLdLC7bbKeW5fVLsRPEFAXix4EY7CSamcjvk3dQyVvCyq2C3kqxidbRUtSHoT",
  "key23": "5UoCPvf4MmrEUhESANXRRpWb1ierCQwJzRunYykPqhGyXRrjYjmBje3t7T3ZyG4fWgi9dgAVmCQ5QAxXTdD4LjVp",
  "key24": "2NiVFCL8T6rnDfUhyeXsu91f7x8jxdS8erSZb1fPn6VbScFUxy6Trw4du4oUxo14r4ip3xDocnWeeAByB52Gfa9h",
  "key25": "Hye9dFMxYsZCYCFkiimfDjGnssUHCBMTETt94K5Fm2Ej6D9so7XAUG5Brm7NuerEZ1xP2Vhwj2Eix7psHL41RT5",
  "key26": "2NxMmkqsr4vCgmmqFZiWwjXAJure37R83FEZnHDyRNBCEaWRsyK56aaDuPQZAWBtwqA1C1dUJSaQg39HHNF5tyjn",
  "key27": "3ryCLLyDniShTaEJCM7btVe14pnLf4tvNc2WeeQPgPEfbYpw7d9pGynpHtcterMeRV6ABAD3KCWGKqHizMvHJKFi",
  "key28": "5sRBJSHTmVhLsBUqtQGjAZ4aUBFLfVSYTUYMicKnrt9HKnrZqVq6WUo7Qk9x9nh5UQYwJAx4WgDGtghRD5o5ASZD",
  "key29": "23BUoDYuYy83vW6dzeJwxn6PXFuyCHTjW3kYg7FJS62McCXHVBRcvmYSANYnQJaDFxi9mE83gnLhZ5GYUjQtnoZf",
  "key30": "dJEC9VTomkcHCnxoUhjq8h5tma9RFN7dUX5jh4MxTRc1keUHWn8VfFyemnGfeRj3w3HVKz4nvdejNte9LDyxop8",
  "key31": "4qWDTmBw2zA6DDp1EyMK2Mtvwj2gZV93hGMLVFgf1UfG1V42ryBav362exnEuSkxxsHj4C1LDoUGDXEK6jHWPQN8",
  "key32": "2JPh3c27ZC5Q3oo8LkvjYzCkaTKhQEx6yDM9eBAboofAyRvkB4CFSt4z3V2vWk6weG9dJa44Gkj1djb8n38L7Km4",
  "key33": "3ispxsVoQ8ZwMcKqbgbLPb7r299NBwPDzFhJaUr8FLRButeHR2xmhV6ePYhT72iKsKcZV16qtWHVgKQLWfEfBXdu",
  "key34": "5Fb8gJ892Cpv23AdGvEj91U7gwNQmwgyGjtAGaMtQ6CKoJqYZD6L6upsAC63KCgHXjDZm3MTi8zvj7kwzWT1awWg",
  "key35": "28LfDhsy9sBy5UBsu18QZ7MDNqPWF5G5SaRn7xmAw8DhQAdQX1GQau8S8gHsA5ZzPYV2NTtLKP2UaoCVJoPXR4GA",
  "key36": "2hLNwTETUf7wdjecVqx5CPcFNoi8WveDmgStiuAgnMoZUrHDBni4wtHddGwqncGDXXtCJiYnTJ37a9MvcS9qXsG2",
  "key37": "4bzkkVQJiqU4fSoCH45SFusFYWtep1j5yd27i64BZgMrKB2f59W1mocaaSZtgzCjUPqpesp48TM8CjqgPowAATG4"
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
