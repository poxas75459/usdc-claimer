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
    "64whWHAUsxKGnCfKGRpDLDBY52Qo1F6gQbSTgCcmfNPbpCteutxm7bbHZtYRPj1cj2JJr6FaTrcDwLyTRZEUkr1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rq9QCd4Qt9iQyManpe1CSKD86KLHyUPz57hLCJAejtZdv2255PDiHqtdbsgQFPBPHSmCfMLRDD3NxRf7YF8BDn9",
  "key1": "3zwMZqdHY3ZD9e2TsfYjGntuVmQDm6rRJvebgTHA1X7KKmJqYgcTZjSmoPwNJL4L9W3gFtEvruVJDafVNBazxoR2",
  "key2": "2qAo1BYUHYC9vCAMR5G5e7uxJypwxe8jspYu6ikgsKVmfnVHZwNfRDdFKpceMbZTHezbp7RymxcWEg25V3AEXEDq",
  "key3": "M1USBbZ2WCzP7qLTmyTMbjFUhK8PwYWRRonwa3ziEaMWYoKLEVt4MnnENRsWn8UcQHD5Q3vdwt9FmMgr62VbT2t",
  "key4": "4SLQQSbA8xTN6onzSyUHBvtreZnMwc7Y3kPdjt41eBuuAU7u2SNjjBgTPh8SaWEMjj58kw6jvavMwHVbWSojtPRa",
  "key5": "2wBvvUTMYyojevfnZWx359ZqP3rGTimrWFFpBK243dHsS7eDoUkms9r9PpayqCr2Ny4z3NgYEJJAu96HR3LSfLSf",
  "key6": "5yW7mBYv7tG6HebLqXrEVdFomT7rQePL6bRwHVkuKFGvL1mGvtBmumttTiMLWuiWsAzVjivErytwAwBJE7krLna5",
  "key7": "5nBaDeMSiARHe1qv1w5gmm2a5mPDRmXqXDhrwyVxfncS75ZRAhPpuC8XnFjWWN7pnogKQQ8eaUPMzEwytCkcnUpE",
  "key8": "2C1MKrJLzSZNyjQHrL1TxgEiES6Exi52u263NLdzCpCRTWPBQyV9MvUjwBuVjbmt1NSf6RQrMuDh1e2JNRzqow58",
  "key9": "64vNJqMNZq2W9wts1kAB1bxmc5hodDS3z9Bixg9zdxqPA4J6LYpsJPtHLfR9DKj44JS94QLZqBDwJEdngERGvj1v",
  "key10": "SkPVx8QRZ5ytAJ7QT7FAfRPVU4bbEYfY53uefE31HE75AhWkauWFEgNT4eptC938c8FK7qdEa6XTQ6DYbygbL5f",
  "key11": "248mpocDyBzpebNintKmBfHunhBUymWtyxEzh4UinFzLsgr9N1FhWzXTSaWMmbEUKCT8Lap5v9gCgg1DGKbYUZZr",
  "key12": "4KxqVcrfrmTJWmZLGPX2dpM41WdacQSzufeLwxTK1nUYBuXPDuBg5QvyNX5mzMFtxv4ABPXJpF3UDowYPeo7abyb",
  "key13": "hc7TordeQPSJP1cD3Ef5BvKpuGqXuuavFYVqedMB5jRPtWRRz6LYS28ZRMHsewDiKrZtxFP4hQ67LBxJS8qt1Sa",
  "key14": "dZn2Nibg8yBGXyNzQz18AUcQzEovgaQ6zHmoGyXmyaEbAtvpffBn4j5e3n9hpbC4vQnJSamPVQacvPPHrgqK1Z2",
  "key15": "dPXqfocxszuPC8TeQhkPWpVLNtr7RKYyKMsgJJPYEM6FtVWMLBuCXNSYg3LPxW1hJeRSBMP6h4EXrkVKAkFx4CD",
  "key16": "PmoaBpoT8XqEXgHG24vzT8UNdbp3knqydZb3SQCMHAx7Zi6P3zwLb7PqPHTipCoePWi7aAtPwv2wQnhE4Rxhtrg",
  "key17": "5bQE7Gd6xHUqnR27zt16JrJJQYhhmMp9AsJp7GeeNP8Rm79yWs3gzpvTnfMoHT5sApMEpizxT6HjKcR57LhB293u",
  "key18": "43xvFtdYckjpvTpVpKSznbm45dhN96UFkkrGJLYsvyP22fHzEupyR8KRay8QpJhMc5aTCs8f3Yuon9XHjih9CHt8",
  "key19": "4NutL828EL5PNnRL8wFUjs3fM1pv3iRvyHfFHBfmAP9eXc23iugxKHajcCX6HCmMCn6WmzHWv7S2m9c85kS7rMJ4",
  "key20": "2yjAYFe4Xr6LVtjpqexs4iTX2WrzZ4WgJV85uRLqAVksfUbv7jutVttAJZ6J2szPkFCq4SuXysGqf9g8SxihaiFk",
  "key21": "3fo7Lhc7DgbnbGoGyzLSTgPFZf4EgoUDZ1iDpJ2oigxBvSwuVMzqKefAqm26f2KdiF8579qAN94FTETjVsj9FFfX",
  "key22": "3psAPtadNjVC6iFrvTV8y5uF7BW7zChazD5pKD5QZS3gZm5E3juf9EcySFUyRc7ureigfyDC8CL4jWZKyuxDY92H",
  "key23": "4G73QCcaLCcyGcVH3yjsKmJ327mC3stfncadSVyC3W99ZQ7xVDoHjnm6jLUJbrZ9h17p5EPmfRQd138HkYbRaM7d",
  "key24": "cToViS723gvaivwU4ynjuSaqL248dxHN51Frmic9Wqea6sAYvzr93DimPJgapL66qAScVXMBr7YGTgonwMycgDn",
  "key25": "52AWUkvLEbBATMeE69JSJD18M9UZiok16jYFAVx7Ws6x5y2kVRY81BaEzBhM3UhCZEtCWvLxs1e7MWGDeSQg1BZ6",
  "key26": "5VmsUeAkLBFZbRyn8xQFUqgwJpKPWTsGpKLCykh34G46zEeaandtL51MFfVD8FUtZZFufL78HF9dUEUWNfgqfuRB",
  "key27": "5KS9kGGc84iVR2dYt6Au2JAF5hzbBf1vsfndtCVmDX76WxkvLdLU9ANZb24LHvs6MtZbCpS7Hb6qQGvqVAKBzXtY",
  "key28": "5cbXAZsH515D3QokveEnn66mBfNdutArVWxXxD2uaKgTiqXCnu3a45wBnXxyPKpgpJ5pVrfSgvWNQK9bFJeiP4W",
  "key29": "5eDqyz7xYXmJAN6U7kz7bD5nxRNDHVY1Zu6dyGFMaTmxKLwofK3UiUvbiUPfeRyj9t66trRvd1WRHDGMASh4qdXW",
  "key30": "QSJTDfRwU5LQaoJNNJtDGVrVFm3fBwytbbtC3LyYLz5T9Sa2MGqYnzbK75EAprqFzcG4M3cs2yXK4WmQeodQfoa",
  "key31": "54ESntGaBz7AeQZhNMBcn9apjhyWRJ3dRUhS6Gp54WEvzj25rATjuBNLLAuEtCLck5wPvTGzyUrD8iUEL7e9UXfE",
  "key32": "5msTk88odXo2NnxVLcUVyH1gAjQvy2gdUMLYjg1HqhpjqwUKoHifuaAucQ6MzKHUVMRNi9hHHKw6TVQdqBtugUam",
  "key33": "4nMq4bhUFodFtgSxAp32pgF25dJDGTTieLwhQmXmfweBHF8dtJWJQV12z8RZFa2GE3nQb8qGuNt1EpUn6pGssEET",
  "key34": "3HnoC7fpEcKZyYS5zo3dtFSRLze8Y7VCA1V6XfiUcM6no1jrb6KEhuLWvjRwgt2jxpDz3kbxRtAdkC67DQVpbqyN",
  "key35": "4xtYWHfa81rWSdXtLi58vyYHdi4xeJYrySUdhSLt4AQTUmwBcPGkM6DDLeC18a8ycQTmjKLnxohhc79BQMQZuwB2",
  "key36": "32Rgg3fck7c6efH5SLzB7mZw3MchkJ1eNxca8YjDrivpXZzT5ZFtQxJkEAivkpVhpNmWpZfhieVk7wsrok4Dc6qs",
  "key37": "3DUB2MamkCZMQEtqFCaLjTffeyoknMud2aZi2nYZAeuAxYwQxnV7j2uvNQZ1QGYnXkSQ6urMi46j8jtHVaZFeztj",
  "key38": "5ckUjtbVbCj2ubP8qsSh41koZSbbtTWknwzdQH4geTWNkXthPuqNk4SsgskLjSrvGdGvrZ27XWMjCPs8zCB7gmxh",
  "key39": "4a6MsG881BfuQ2YEfHbXLeqGnjU6gnBKM6oWqxUFus93nPRRqCYkoYbSD9k3Q88ZZb9RgzaHeRFmtRMaxSCexqEY",
  "key40": "46e4SiQ9MDhdwD7c6xYr2mQiM7s1VSHqcmyed7he9Jjv2tcM1sPo9ZmLYt3n1TVYfDDxoG8kR8jvx7HnGqFcmkBj",
  "key41": "4uc6TwAbDaC1jZXs3EZuY4jYQD25NAN7wPunry95UKkZD1ow6CTeik6MmuGvhokkMthPQwf4gydrpzJvZXp3Wq5F"
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
