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
    "4Y3R6tEi3DG26eaCx3Qo1zqrrTDFVSUz5nyAdgsvKgjvbFH8hDU1Zrx5y7ZqzKvaq6RUxAX5WvgzkYHfGxTrakPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "366Hzs14noNDgzRfQsgEbYH1SomF1B56T6ZEjEp169FHHjHwRHEXh6dNMg1BLNbqMyxQ8gzN9CCXt7hqC3xpMA9t",
  "key1": "7yNs9kVqAnb6odm78nsZGnjRSZs2HzkviKMA4wehLe9deAnYQQFBNQxv96fUizvuBU2G9VxFWuCjuNYz5r8jgS5",
  "key2": "3DYXPQEHV1kqvJQaAhPnXcQvauaTijqiphkUDC1FmvXf7o3bLPVRoDed2efBkscaFPoCYGgby3AAhnAHijy1c7Z4",
  "key3": "2NKdFtAecEDpSynWAJpAeaPPHJqDVqGsQNvdLAy8tP82xsj5Q9zY3soip1qgJ44vH8cMJMbuwnHd7HtnvHmEaHd7",
  "key4": "2WF4TBv4WmbRJamgjHegcSc9yZkDK7XNJR35sCD6L1ycXD2tYMzJ1MyYiR5LyBMe9ktJn2AbBvoNUThJ7wqJ6snV",
  "key5": "3NHJKwiiXFGYrY5p9B4KfAD1aWASVpwDPjsSNfzQt47LDps23eQobsMwyg2PY2r6DM9uxzYhvLjyxw975gVS86Gv",
  "key6": "4hWkZH4vb5SpuDg5VkhS4zNgKhSsxCy6ELcq342WUbRk7cQafq9yk6UUMCfUZQG7gqTcbK946Dbnen4ZZBCnYSxY",
  "key7": "5U6zPZEMyRpBK3ya3fUXg9uWTD4eYWTddhKC3d47m2qyPbT1KmYY9S6bSZgP2QbhK1jEkZ5aovvCe1Krd9fPa1S1",
  "key8": "3xdBEpAHenArEtb3T36bfiZiEbYSSckgfm6u21YuRdDMwpU8HoKyKLnzmjDdEgfXbQsP1ce3uMsPKUFFDeTUScNg",
  "key9": "5Mtv77fK8r55ZSSMVKtfqCKyfJ2frTDh7jnHi3fWFQe5u6Hsuws9oFj3iErowTGnXhKppiDMBgxEwPb7S32FT4Ao",
  "key10": "3oHQDNvucboc4aw3tzJYhPqSmM8VFcxxL5Wv6iHNwJBaQCeJHKtBsHxS3aiWcJG7JpLo2hYyDcQyQ1hA53uQrCvk",
  "key11": "3X6xfzqbYM6VgFovYFMmjpA3ckGmJs7JsSRSh92aZpp3JgUHpVr9pmgJ8LArfHxFSGKTBLDVK2x5fMMNysxgDKMo",
  "key12": "63dEkABgnRCkFwaAZCMrDL1FxyaJLxbobf3sHJm31u5uptzXGjQmSk8jezj92KHkGPBubMjpvWyYSVf5h6xVCv5P",
  "key13": "4bgax7sR2N4gNhXBNpPYYtrXFACN5di1Y1MxZdpmk5j55Ah1SgqrkbBYw7Wj68qsf2VzQoPqkYsBb9GgezPGT27t",
  "key14": "5CSsGa9PSrEbFnYYV73H1HA2iwAbPHFqManKU5hrDmAMawSDwzvaat9zKgzTiJRnyXF8hVurNj49WnX9Q8JP2yph",
  "key15": "4ePNn3p2soKRW22cBxbob246dpwyxzYTxhPModiNYbyFZFQHawYZVdGAKZEWFm5iBVhQVqQ5C2vfJm3mMM59Lo6f",
  "key16": "4B2xwNkwrGNivJ1wPKAkza4es5s7TepoYoTfcVmRuxYy5GNYBpn7MepmW6yK8bQTMLcQo15oYEc3wTUvA3TQct7D",
  "key17": "2SbZz4pqTv4GwSTPBGhA5XVXw9mTMWfQhxpaj3bnra1JcW5owzRMzCTU4RZHiYQroq7GE8AyDbKXzRaoVvRnm1La",
  "key18": "3MVgeUE9BefBeY7AYogLpZWRxjp2c6sMBYXUttYdCqxe5JB4HC8qwJWyzfeca9H4bYRcH9aeeQT6vfFWE3YXtGoW",
  "key19": "62MDzs8eYFM9ZaDbVGn6izxPztAMytUeWdrhcJskxhx2epgQBiQ3t4kE6NrvDdE9uXJAzn2xiStv1mCDzYEEJpgA",
  "key20": "3NSL6aM5kR6kUzd8JPW8vfF3RNYH2EDrAiXipBH9KKTdSYbzthQLiHoaH66uwWjjUhoJBSTZpVmm6qRhWfc4JooQ",
  "key21": "4zD33A9NXAZLWCq4AmhXReKiLekuPE8pWJs7Xj6VyuYj1SjkTYqb3rSr9mHGrm2S7NShF3t7jLbFKU3vkqyZFN6x",
  "key22": "due2nEWV2VBGhNkHMXZ7SutxvfTKEJNZKpaTd2Y9gd1fpVQBquQSQkVZetjmXeRcigywUghhne1khmaLs1xgriN",
  "key23": "4wBNM2gGsNMQU4AC7tobTcz3ZjXyKGEt8ShrCWvPctY6FPXfrMfdViqp5RVuRyrBuSiJYz5jyaUXPz3QFRCu527D",
  "key24": "rQ1hfVCjiGa6fzDuhxu8bpeyjDSCUm4VDBYkDbAvD3MFfmwVNnQu1wd6koyQWFhmnVDARRD5y28FkfHdP4bLqYp",
  "key25": "NmuYQGQFL69LFHgMjvPNTVSUmLWq5hSiTLeBvUAG5sfxpq1h6uBcufexWN1T3pSD8Yu1L8DHVsReAxKeHJL5MEB",
  "key26": "5HGAfzNfb6YyHLR1x7cLJqmPi9ftGtmooiG4JMXVQbpoTM3NT69zqipXXX8LJU748e8FAg7ahFCTaBvyG3VR61wd",
  "key27": "3Wp7RameGFqAj9Nfx8d7pnpKFL8yRUbhZGFgQ7jpwunr7U9rjSW15vQFDmCMQYtYgpXBm1QpxxmLMwPnVBkT7v1a",
  "key28": "2RPidZxRJgmvQY8T91ypB5x8wCZ7huRikq81NXhkGraXhiThS3pbTXb96PWvoARqh7RvWZhS3Bm64ZkAxdxAH7mR",
  "key29": "3A6YeGueFR9tjG7vUjnuxAnheVkSktUhqvyyATk36AW76P2yXAAUDc7ugS6WbWEj1orQWBFht9JJoMq2qcN9aLKK",
  "key30": "66kE5Fx3UnRGvjucunuzTucSbXVrxoMaLBdMusFU2pVm8yF3wKx1hEpowvYMxG3CcmxDyspxxxXxPyv7KMqfmfSc",
  "key31": "4hAQBJKENQb5d2p9uZT5BLFbz4TBSTp62m1iFCYncuf3A9gk1xd3xHbo115uPVGQCEa5Eh5YqZpKaoME1PP9KvPL",
  "key32": "5CsMx5qdZvzv2yv5RebeAW3xBw1bmVvFWvTq4GDP5k6hSkf9N9Ayv4z8X9T8jG6EmSYdXMj7QPtLfuL3WvDTb6Ny",
  "key33": "3kPajwMvmb4L2tyPE2L9XtzDgXFs4ELvCj9U12Nv6ZWaQcVQSgS8h3S8UmrYMPyppqhahqVNw8udByT6Z4aEWd7K",
  "key34": "2Kad5mEMpakwF1P4VnK1d3QfYhrDVsHnyYdwSaK2P3nWYuvVzgYSnkXdKXgKXhZmkwWU9PA9ocNs6Hyn8sNjCKWf",
  "key35": "4qP6CQ1wWMQuyvhXEKwE9K5EePXpqupF5Lz1SNRN1sit6fbuoALkDhZddsTvvEfPhhv4gDSSpg4XfxTK3ykEqx7w",
  "key36": "3Xc4rthYWVEttxYyT6z2CM8Lts8nSvBd8XupkYbw4ASt5HaDduWxu98EcydF9pSuMEytMKFKdrzZ2HTKDDKhByTM",
  "key37": "3i7oTe3ZjLdh9ytXZpVNKNofRfqJU59rZZvWL9pvv5raFwQRTrBYTsdgCW4e2XRLAXzeb53RTAv9QnPTVV8zpFWV",
  "key38": "3kPWRNs7fV99c2mC8vPN3NdgbbVaVE32oALRNrYN759opapSaiAuEc4N8EMUqkAneVHJRW5ZzXWEmQBZEKzSNoYx",
  "key39": "3Za6gH21TcyZEWhfg7GBdCvUULob4tNS8ty25k2fQxFZkEpvaWckK2uPf6rLxW3EcydXW58HDtH7Xhvt3iHQ6Swe",
  "key40": "45XJworkBzqDSYuBBFfw6Dz7cQsmd3pgSNTjHVzwmmcAzEUzjcbXJBGfjb4YgPzsJ1S4jvbAL8fkKL15EjM6FVVc",
  "key41": "3Gma7Crh4YkyJCTvTDG6ssarLwDPeomnWs2YWbUhGmwBPN5vLKGmdsTtyGQqJ1htoVyNszq2x5p9AYH3FEXEQDBK",
  "key42": "395zkEb2i4MnUejj7Vdh5oHiKREjFugia2W8ypxiurcgyrtjGhA2zTRJVY2xLkD4CpdN1JD879AYMMva8vWFp3Dw",
  "key43": "UpFsTe1aRvipnyoe5mVtJvVTa74j4sxuYgcbHn4tKhJ5djWhSeT3ceysUFgySwbqbyEzUw5VUUaXzy8g16MCKqT",
  "key44": "2WsKupnkvtmBYHhQEZbstWKb51vcvdCuqnynHjVf4tCyTicCVGTCViph6RFLeTvYqmfmFxFD3Utz3pFeKPC3CBZG",
  "key45": "uGiymcKRmnzFwrMjEscC19eUe7EkmKc7hJ3b5b1dMiBXJRKhH4LkUyCuFPrvRrePFcRnbLxZ7zQcY1b3CUsYxw2",
  "key46": "3quWuqfZ4jaDJiv2nQsvfHu4HwMQ9nXd8zQDuywiCHuvjz5hDoF5fu6TJg3QK13SS79tTpdHQjHBxvRj3oKksHbi",
  "key47": "5EugiVEzdkNXsH34zZP2BfjDoHEAqBWAroDnL6fDfAXoU5c3YAQ6fp9E4y55VwbcijqotwFfJTfP68Ggpw2gckSC",
  "key48": "HKNrsy8TuvXjiHxHb5WVdi6GE94sb8k2eJGMeDHHSZcvCUsAnzjoDicGVjSJQB9jEFdmkRzELqq8HwBjG9QtF6c",
  "key49": "5T8kjDqt6bJHPg1HWZkXHH5CKtQy2ShQ3iiHDBY7gpeSZ2Z1MHdPaXb2oG4mCAJo2ZoUVo5y6mU6a5ACzfsbL4E"
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
