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
    "3R2pzHmKy3NpraDtYNZqN9rVXWnNrvfCyd8BoE8EXoZVimjjw88wqdycHwBQ63t79mKwmsvQ4YV6AxLMmBhyX1Y2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tnRRTiCgybb4s2QGrJKhfBGda1uq3Jw28m4EQr3XYxoPptG8FHF5hEw8ZQd8jTdn3cggC9hb3DNgSayitQyxVfK",
  "key1": "47QcDWSKKkiRAnkS8kupHVQKhJFBeiJLSoKQ7ubo7twNEeqEtbEytS9aZZj4VE5tQNLerqTr88WCjDhbznJBMmK1",
  "key2": "4Px3AYy5TU33cfrsbX3nKAwcse1Yz7rNF5hU5iQQNRVGCjrEhXdgZNJaJn68M82RY6Bj4vARghbGkEZ2eS4JEMrj",
  "key3": "4uWC7p56YYmV8vajiuX3FR9JikvYNp4ogq2UzJv8dJE496Wm4sZWSwFBR2UYw48euG2qhZ3VRAeKyVBnHTcuAWEv",
  "key4": "62zd3R7ssaV69o9R1yyup1QhQdVL9GsxsbNWvpMLH5kZTHnV7PptAbTzTFdu2TsB9zw7u6HLVA9XVnq5jhQbhkH9",
  "key5": "3QKZssXEW2mzZnhH26HaDKAodrs1rk9H5iseFFbxTEbz5DWgbR7dNjepm2CTs8QBM6gam6r19P35mU6BjoSj7jKc",
  "key6": "25ms6FowYksGjkSTYTpYEbUsHhMhmiuvuh7kqF3MwPnYDPU7pyicJ7szZD68sLoAkW2BaAMVTjVjKFZxzFHqaiie",
  "key7": "2UguV52CmzDGTu6bpaWuFA5dqa61dALgGJvXpC5JYjAdjF9ngHxd1wL4R62FTycsBk7n7N9PVY6AKyBt3Q7xKbU2",
  "key8": "2xtNCC4E3rTn9wKLNH55GCMRXdi6Ko2q9LvmuQek4B86r8ySzKdV7H7xQBau9R4xV6MeupKztyRsiv2rbBgvHyb4",
  "key9": "JtJ1hkcHQ9NGP1t5bpu5spqEoRimC5UxgnuCgDaF71341pBgkWxqefPVD7eXLopiw882uNJFQWkx7VWurA11gm2",
  "key10": "5BLm4F589iXn6KHt6c5RsaQJ4rofVgd1RWHL1kZtYEeqL33SURT1SF6uRGDKk2EPugo7ys9V6kbsjLb4st6E6QKa",
  "key11": "xdvE2kxQLtPkMGyFehpeEM75CWXyeq9QSz3aN4tH7NQAx97KhTmRLidHQsyGQeTZgwxJLUhVHXSxGUXwcu6KXtb",
  "key12": "4kk65LMrsutKgxGav7ErfdBrhLs82Efp4WhvRKSz6Qb2sBrBm1u6yekTHFrAZTfiTNPjBY7g3YWEk215EFq1b9Xs",
  "key13": "2jyoUx4LMBWQ1yk1RNERreUBhUSLPtrDo376JquTh13QTvAqCCTynHucsHAcnvLaBAQMfuXpxHK8iAChNzyYRnnz",
  "key14": "3DBo5VceQiiFJW5JNPQzhTL2AgcW2uFzF8aAhTgyeddd1tsVidzgqw7Nyuca8yscQXKDmpavspYKPazNHqskkgKi",
  "key15": "64DBxt6bcmCcWrYhr9TLoJ9fiji3oWxAgqnNu1WSnjRJH99QVthdWo9Bues8f2VRXv8dT3NvqHGWcBKXWB6E9cf9",
  "key16": "2TCFmMiZDEfckzYnQrogf46soMjaX3gihJZVHrqCHvqenh12Cjy8R5eh7NS7F95HBzBvvcka9So8tVvefmgAVWw4",
  "key17": "2vhhukmS3tXBPtZpiUi1HADzTrzR4Xm62zLdRU6nEspE9hxfHicLei2DVhP3dGi5wVt42eHC4ftSBFPQbP33dknK",
  "key18": "1SHBFvvZR4xYbjLEm4TnWvk7itXVVMbHfCKVHu8HwcWqSgoXwXJZVXikmGNn8sH13RdX4yHd4r2NDqHbBoE2jkR",
  "key19": "3jeKsC473mbVRpejKeP98LxUeYkJkq8H5hGd4XhpcYhSurQ54wJamL6GU7dQQXarkMNXgXov5MsYkQp2DL64REzR",
  "key20": "4tP97c9FsQ3bcrPb7FqC5gDEp4dbm9YyaP3RdugRyKqvx3smnmN9tTxK5YuYcvMUgo1m79AUQcU7HY2N3DD63HTi",
  "key21": "2m7zebfCxEhxoy7hi2zsk2mHodHc5Y6aCxqE4nZkw1wpbrSBD7QpcaL1qCrxp8BUJhFwWP7XFvHqKCiz6wVLW4MP",
  "key22": "AJT1EnXaTYCD8JPvoUMJK3NCvD1vHV8McZxjFrRucPkEbwtdFwK9WiiHQta52aJfHiwoA3XSefBkYTRtQuxQnmS",
  "key23": "3H2s44HAXxaMkBnpD7JaS9vS4Db32DqXn79cbgu46Y2ebsZzDSsUStqXP68XXvWueb5stnQu8hbHphnD2Z75aTGM",
  "key24": "53igvEB4WCTxsG8QkMqWSacMyAjvqJkMT8HHbEvRjeZnLerKFuvboMPC5QbSHRCHY2fFQXRj93vj46WJDUx3pQCe",
  "key25": "2kq5MPB92FMLbWbsug6CcPKHnMQCv6qaxZLXVYAsAeFFn2YKj3SPFkDToSBa2dxiT3abepCy35quvNzdF7e5s9v8",
  "key26": "4PsNM3aLeaaJooqg5Sh5Gn7yxs3qwr4Cc1j3AnqPgqaRFCwSTBc9eLBTDFjjP9CciGEDU8WJzvLEwnFZSK2V5Dyn",
  "key27": "3SQBsG2dKoN5CwVkyKzhqWJRjJ57gMNtsMeefzX1r6Tev4qmy8aUdW4hRpcB4Vk1cEFskK3vZJFXLC46v2G5KUqH",
  "key28": "LGboYjD4pMEctt6C8PjgqLtxp7mhxk9rqYRZEFZ93M3V74PitwqiozLgnptn3aJSV4xk6UVY4s8fk2feveYaWL9",
  "key29": "62ExEtCvt56JZAEyC5MbNwFo19HAAqKX2TT8QjyfY2PQB9yAv5BsfS6BTBUr1GYkXLcryhz5bgF3pwk2h3mdocPa",
  "key30": "3RKMeX9anxum8pMYpC1fc8h8WFF6CNPGAkr4JrCoR1ZtAegY1YV2A2TVcQ7ks77QAPZ2K9yXkzyTsBgzGuZqKXak",
  "key31": "4kW1XBjKSuBKbY3zqCJ9sD4fpVtPZyTwbgt7hVZm53kvvtLth7QMEVbJf2awbWJ1LGqHy9rGZaJkYWKY7CPqAfMs",
  "key32": "4UECW6AYVTogmmNaFPEDxaxZmPuS8LSwe2vGMyBjqfUqnHwZEmscAL9YfSsv7pjErSVnBpCpKvEc9ijz3z2uZRBf",
  "key33": "44EEyhx5nWf41B76TYkKFMUz9Rjg1DfA6cruc71Xw8XqGYdAGG9ueKRCVbdenLQLKqa1kE6aZrU9VAfs9PZPykkm",
  "key34": "ZKTpGvtPC4K5BuJqg7mYzHn4KReALtubmAkgaMTMEqyczUgDXXAsRgehvVSvUAxPPXa2BYiuXhFcUgD5Fet4g1x",
  "key35": "4Ud96uroAVcuft93r1PWx4SbgXV6Tc7Ds4WCNNszeqJqRQ4DJKrfGGJsJ7Ghvn7epsXDBA9o21rp2mdqobm1A2vs",
  "key36": "3KE7Fpg8kbUdkUUNmE872eUfm1nNjd5XB4RVpxNGdWTq5WCYDew5dBHZvr9bYTJiVo5NrvsiGDvoPCCw4aKKtouh",
  "key37": "5gndzETnqmXwKidZDodshjma2LiVoMTc2Tz89JWx8bosuZmnUicXr37cRvyELSmFgPspDerpG6v6AWxbL3Df65jG",
  "key38": "3cQJqEqom2ZMzmfuxYyxZySyYJRrhWkLUUUDtCofwhQy4dHgUZj3e2W647Jr5sPTdadYtfTDVtrV12dxFM7dK5ou",
  "key39": "5KPu7ogTrbVDQzBhGPL4qx9MHJnVaR5RgYnkVnaAWjYq4ebE2aiETs8y7Pfte6p37v7XDyiHdFbeuHkZ4BBGz3rk",
  "key40": "3yiVHPT3hQcH5PPLKW68EWUhA8SmfGFDgDQcQ2yup8m5j5VDux2ceLDYcx4otoediB47tMxg582Ag9QufT4Pe2im",
  "key41": "4qd2oTZVCAw8LspLAsqFYy2gCLnKuqUPKjk96whGga6Z9PsQtKXyyJjGdiNP8qCXBe3UNMDoJ39Eu7dfeBUi69ji"
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
