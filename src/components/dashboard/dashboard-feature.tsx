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
    "2CRqwUivWyHoCq6QaR47apJHTHamuvZPEF5HM8RzEh5qYakfMUKBUGdyRLbw2xLAyXk3dTfw2DsyKVLK9n3o82e4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jj3CvSEUNtDVt6QZjnCtCe8DqkwGyzXtD7mTRPSBLt73efDo9yzzSM4oBMguZKETkcmbfieZ2SKQtFASusC3ymz",
  "key1": "5CVnuW5f9Kbc2HRDPZRoypuDo7hfp8cJqycGSMek4HKtmn3Li9BLcsWGkmiAK6TtPwSp4ubTnktmnB2eCv9428VL",
  "key2": "4NoHSveJF9eFtMzRPpYtU8NoSsDMuGcebmGTcs8xPrTLpyD7aJdxMgX5m2oWEGHU7o3DbGn34swMmFkeA2EPB1Lv",
  "key3": "5raesNt9fRYXnXFPbS4dKgkPWeHVCnv2JkDajkfQVSPb8UW17spT5855bDXFy7hA4Hy7YdeUzUuYuet8bPvW8tfF",
  "key4": "CHfuGPtiWhn5E2GaB5VPEAtQBnZmqKLhCYJ9sSLMdE56aPXW7PEEKeWT712wsvxycsH5Eid3DyK67z6CqHP9H6z",
  "key5": "j5xRMn6ukWppskspvm2WD9EAGXttL7nnNmqvLsHudxtUziyTMALHBaise3pq2EVqSF913YJ1anVi8aj6VndPKM6",
  "key6": "4GKCChnhcyHihckBdwFBNtnj8yux9LcKHpEs2B7F5ReCGL7JxZJ3bz6B3AqpDaw3Ccwfc4sqjmQuAoYnx4wtro4B",
  "key7": "4Eu5VBzwTyHAA95iHwKL57abQJP1Rb7H7WJydVYBfKJzy6fy79nJdThp7TuYSUrsZdBaMuJ44Wd99h23gHmPCD4c",
  "key8": "4wwTy1Qye4aqVa6eyfZJDNjAvLzQdoNchzjPcnKWx5Stm4uivzq3nxS3XBHDBgSzQyuKo5jwueHFf7svVs8WjzvN",
  "key9": "5a7g16YfzkhwQ9V6ZeNHHFV1NRYiNjJG2XHtw1d3za56uHZ6ErZ4h92VfNdhA9oy5jTK6cgggEKzHZ6a1SictJM6",
  "key10": "5KPW9gaTRN2sk3XAa4ZA5jMisiPmiRkCkpNvhJCFtrGPEinGC2af8ocN1rqPb2rfqjYRBMdzZHgig5YrYRcTFiDY",
  "key11": "52wPWhAKkAbPsUYRLxmPkFE7uCuWbUGuV7EXBkvzG1ZjrX4vDt3nJVw1gg9ixfma8RpPJqMry8MeMEF8D65Hm4Af",
  "key12": "3gutnnj3XxS55Kaoz6a5CLwaoRzMhTB3BuLAsxswEQYWEU6ezkPtH8YfgcwNpdF3TzzStWEQt7nhgrDopTzGVgwY",
  "key13": "5gTzPUQTjUKbAbrULQmW68usEFcfyvkXrL6gAzEQyJnHEdU8FCVZXKPD8M7sSqV7LnmX6mPdZVyXaAPPoQNiXgfN",
  "key14": "4WvDhpCyJL1kPDinJ3MezhW9ivoBJBhykCJ3zPUFdGyZbUgfwwqueaXNAsPtscVNHEdGQ1K8P9aVhTnMKypfWuKm",
  "key15": "5fkTAjz21AvdDBdrNW2qmpWWHEQHoXdg1stu6S9nku5S5d1Cro1nCXL7mm58rRrytTr5VUTXgWmWzjQKQCaFbMG",
  "key16": "q6XSea9xgNUBqNHMDWyHACWZjCvLU8sN7yog8uz5XM1NvCaqDgW68Mp1PXBLyvn7rEWT7ysUhkALJ4nqoRbGgv3",
  "key17": "3dVDtZVNnUUjmXoFXT6R7j5FvsLnVoHMMXmZUyLzwXiM1tVwUfiSknszpE39i1bBhaP6zB8qQbGPS5TmsfZ88fgH",
  "key18": "2nhM9NSZn2bAz3ZAGjRfEizNqx8krSKEZzGpk8EQeoZwrXGRo3pbg3AQtkQp9P6gXGcDZxYHEYjNRJKAFBQW41Fd",
  "key19": "64FSk3qPoQN3uxoqpkHE4vnKmYPBLoSKSFfQEjvi7tsLAB9YKN9umcT7qq5FxZcaXHr1W4aPrevsEHjprujpfNw4",
  "key20": "5be8TZTQLustzmNcKEJbbo43o2oacasGGUym2rXncFmFaRhhAvevkBs2LLktj9tdPfdvtYJzsZEJRHfD9Y5eLAgC",
  "key21": "5K4ZaptBjarEk4c48mdkZLbHLHK8JXVR872AMEMHuTveDTajscxhxAcMJpKhoe2hpk2aHJwgiwxQjCLHS97c2R3W",
  "key22": "3fnoAHwTRijUx9fiVtZa7wNp9uSoEnwnq3oAwSMzcgJdt8z2mycmjGk79L3Z5zSbe5ZBPFpZ7zqyhAr8FUtQrzrT",
  "key23": "3gC5equ9TYs8BYGrUqE1rRKJypaanBcxXy6oEhMxvzeMKFtvuHeu7BhAb3mYC5MigYRJqTsMa2KhC6qTJiDx6UQR",
  "key24": "9Xx9UDRdxx98PmysN3jiGQu7SGQ2v9LsyTW2tWDoYXdPzVR6suQLSUtbJ1mvMbjJB918a6L5CP9gdLaVDcuCKUn",
  "key25": "4zt4pbXpHcCo1XGxKibPiPvcAB6J7gxgWWZsv6BzrkZLcSoNmERNHQVrALrpTakMyjWg2RrRSpbY8Cx7zfcYUUnC",
  "key26": "2wuKrw17SH7ApeVP61hkT1nArsMxo4BHRSzGhfJdFMiUNiKdZzwiNxYBhiivoqAB2h5XVJeifS6FL7LDZNoSjdgF",
  "key27": "jUUKjFVfqmYmWzEU2hH4seQ9R6tLu7tGn27K3DHWFYBVJ77wy8GRFnCX1oVxjs8zuJmtVuTWFnvAaX4oNbXybpf",
  "key28": "5HojVCeiNhqKkY7bF1nSS6VH5qW2TE5zikUC43CPnVLzt2bQMFdMwVSmxQHt5FN78NJLixjLfZJa9Q3rqWQ9UmVZ",
  "key29": "3vxSeS2NhUzXZCupbz5W2Sfun27JzbzHVqXngAxnjv9nx7Xtj8cgSCmo5QzXxa9gYTrRULHp3HKjPvxCsa5wKhRM",
  "key30": "5PKzTepgxHreSBXQ4LqrvM2jHfueEPr7d3BgjPXgfqVsCPpoZ2KyqvFAx7XyMtK8Ggc7DViTP1oVF7SucnDfwzVV",
  "key31": "2PVbWJkzVcMziw4V6XrkwQ7syTz73eZ1ARm4iHXHEwcw2acAJmx6Z8VwkQxauf5aHX683dJdf5CXd3dqm3hGM1ui",
  "key32": "4fshbEtVbrQz2wMaartSo8wNG7YiLhwuSsrVuKudhSf99TcE7X8hNKgZF8NrePACGKoDwaew6DXo7MGQNE5qJVaU",
  "key33": "qjGD9SoU8otJcjg8hL2yMLmJhg56MuoRovekxrvnAHq7YLHdvvuGVeq1DQFDnA5xyMZnhMxNJTLbHhatZzZ4jTC",
  "key34": "258r89vnx63aMP9WgrA5BRJmUV9RNbxvZjgWJk3PkHSUJ4b3sQmQf3xCahAArDL9nU7DwANNEorAwiUa8p9DPVB9",
  "key35": "3FgppTGaXq98MRF1YC8ACUhJx8GgrbeLSebEz7WRCDCdqVe3iYtaTRC6xhabkUUikgQUDqpMZSsLiJyxRSn44CZY",
  "key36": "651VTYR9WeRPi8CnkGf7hocbKjYVeNSGyLLD1aSvZKSiQQrm4QH5rhQrvaZGUcabjTd1hqYmNxXkypPpiiu81iCW",
  "key37": "5RPcgwYhGWgN7363eXJ48JbtsRgr4t5nnttQdD3zoqQzXQphFYvy9jh1YouwUVhSEmb5scMB7Syqar6NApPGPXM3",
  "key38": "548yfx3rQL4AmcAJUyAiGe3WecShf3k16EAwVPb7jj2x49ovC6Uv6fVhTkHj5Li6ubPBppPH3uU5hpW2ZsqBzVo3",
  "key39": "wg34a7ELPEGvKyiw92RcEMCXVNc2W7VLaNBnksqbneyH8ec2mQkiP5KdQHSiZ3KeHVr73psZ6zYrs1pfgKebENC",
  "key40": "4GQfWCfaW4QFwXUQyMCXdCaSmuLUnb9XWxttAeRnRgfhCtJ4v69dk8CZ6Aw8QeDX43gmd8RQkwKLy9PXBCZjGkU4",
  "key41": "4rUmnsHFHS43b5scdTqR1Lya9B1X8uMdmCqt4Aj7HhWVcexwAxTv83ghtHkLg6Pba18u52Ark2uHtGXTRsLEJWSH"
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
