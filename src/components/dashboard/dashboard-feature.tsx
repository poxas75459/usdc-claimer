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
    "4T5xJ3S5FVbBXK86wHStJqyq5cqVKvPKZxBS2cLJTuMAzHfLdKik2Dom1d6ALzE9tSLbAdjkfXXf7yYDjDRBGheK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HCMv57J9GZ6xhndtQQEaqw7Agxc2UMWypdqxkvYfErfDjPkRewX8aHMS1w4mWB1i37PrDnRxP6ufeTF93mdXJAo",
  "key1": "2dTfF4aTTuDAXJMUKbgiTQipKaNp6FtYS6Mis4nwX14PhMwaM7xoEe6qh4mVU4kurEr2rxE83n6UE4q1DM7bDKdS",
  "key2": "iuQ9Ehtp8sbhWUg9748Wkm1brasXCHuBxEVpr4GBQaJp2e2gpZvwt42udzjwEQ5vqyRP1SfePCSUKmrmMXGXvDe",
  "key3": "3Zeiu7Ao4oteJcWWBrYKSLCQjkHdUs5KS5S4xJofAMaq7jJTpjqpLmxi6n8Qh9DvFAWSq2bXDPXyKYZVwGK2vxvZ",
  "key4": "4WcHFSLp8xWGcGC5mmbvNVqDU899YSPJxsFbGsobjiUrMEvnTZud75EHEgwNp88NCnqCD5rPpxFFddigYXmhkDrj",
  "key5": "4k2c8MT3gNmuUGvjUeBfodndEX5ow8BvvVzaP41gJVMKZRxgnapJECeri76EEA9aLiDcpMZn78gJfeGenVxura5H",
  "key6": "3YGEhxbv5HSRBK41xKkxnpeV16FpmNF5wj8YMCYoZWYsRLnt2Mxx5r34hMT8ciC7oEPom4TPpAHYUVc684z1mWXr",
  "key7": "5krHcWNQsk68u6ozGxBz7bYzJAqW76m28gFwGZYveXmiYEdot276ngJ1ycB8Pw9Tk5KtFQ9DKVfrXaDC8v9N1K1k",
  "key8": "Z7LUgrsLcJEU4tC5NDy86zkSexbdr45tf6YQd9dWBHFeEoqn3ZwrQRrxbbo7LnRqzPqCJta55EtmgPje6ZMPmip",
  "key9": "2V3j6ZzWGciUtWZUTCSw3KyNq1MtGkseyqm78MuA5sEMx2jBiqt4j9gmxYk45VqKNkw9FPQ1vSH3reaDbgja6cA4",
  "key10": "3yYhz44fV8aorqPU1uPVMxuZ1Bn5hvGommw8vLNQYFxztFHFRreCeY3Dgcutnd5MpJcrfMg1bTd79z9LEPKd81j8",
  "key11": "2AbaemTvyYqoaTMVm15nnzyZcZw9fsF2djH3ox8Q73dqaMnb9nRY5EcdGQRiuHg3DwcbY94nwhPy7TJS6CxQpU4p",
  "key12": "4NRvAL6qyC2bYqtKmh6QGDCzQnujbZwcxspepkJpBiTkYrL5Hvo3Z6Xy6VZUe5aKbvqDsCjbisdKrJQYDCrsqh5L",
  "key13": "uAF2E2V4VenDZFLdURQ5n2Qgd2zvaZ9ypEPSq6tr2yoDuxDkpaTp5hzKLvBFkvR7xbgeGR72VShofkRxZNFtGXQ",
  "key14": "3oGcHUmUHyyRxmmtDXDzc954U1TsWZ2khHdCodX9XQKWWHrfAfKL9t4mGGEKSkW9a77YsnumBUo1am21Sk3mGhqc",
  "key15": "4f2VsGd5eY6dxaMzuqxqx6FbviaVDm1UbkKeG51qbsAkAoY74WnVypgssM3VGqTycYYpFCCRWSdTZq5JQPz8wcDY",
  "key16": "5agBKifLpDn6N6SEBCq1wkRYitGA7AjDPZKvf39SpkTMvXuxc7LreJJjywhNm7v7tAqoVKFdFUb1Vz1SWmS1WgBS",
  "key17": "PyabZf1U2JepmV87hF8Zzj2wir2FzGRJR55r1c7L6ZAVCyJS9B4Z6MUgdhm3ps6kFHRkBnsXx12LqZZaq3VFwux",
  "key18": "2RZYPYgx3oYpiRizgak11VgpD4pe7o2z19JZHdbi9JXDqeeFTNxyWiEWmwxWquLbBqEkUw9S5gZMct8422NJrHnU",
  "key19": "4BSgwjWpyT1m5y8k9ScLXf79QQX3KmhxmGHB7EPFMBw4MUkXZuY8gB9JMAXY3Yx6u76eMNrw5rm3pUS6YDCTPhvW",
  "key20": "3v2DfvMpuWnnQFBuxuZepyPwc6vzsP9gmyDetCe23zf4hxYCuAVWZacjyFnXQ4V72JoNA6UzT45mbDDLeUuAs2xD",
  "key21": "4Mq8wmxwq9oe47cRqu25cooupWTxcghVvjTnmfTrChibSGJ7FzteJjci8Xai4Td4dehTLnjxDSD8a4kXfAJA6HYt",
  "key22": "Lr1mybehz5N2xcfXE31DmeHx6n3jyKL1zfV8y2LivuGe7QtqHywu39U2ncPugwtV64QyKu6qeRvVSsg9nhb8vrN",
  "key23": "2AGAkLzirB4ruUJAnhe45XsXJ5g8dgZeh4hHVJr11KtMrHCqxemhw2V2MHbFhs8TYgujFpJXQcDq3tccNV7Gembw",
  "key24": "2AGH7tFASVrTdgHLgAZPcj1Lt5KF2M5eyBbLjPSi1gQ3sthpidXF2z5LTWsW3Rp2fS7EY3gRHLSAnbpCGZjvpeJF",
  "key25": "X3BFbw5e1dT8FVu2g8cVHwtqZP98mPj54U1mPTjg3nBmXqhaYMTMQD2rQsiB6Yb2sNakg6FsbLkyfEM88uc8cJC",
  "key26": "4b9VL9VY9cBn3NLLJcMejgv1S5NHgp3sXS4SCVqt8TRzt8D7ZK5u3uyQtFD8DuFTgJH1A71Gxbcm3wnwu5aqu4W4",
  "key27": "va7CjKu3taAuadyWVRTUrFj1fBNDKVLxvxVSfmTWpfdv9xvsagcGBEVChYQ5NBmEmy9LaAk2WmWHWXt7U4UCFhh",
  "key28": "5Q4cFPfPZ6VEaNbvnj7TiW5JAwTUdPmoZdULwQ2TyMWThtKPpwnbtpAF42VqcPePNoEjxhAXmjgGmkswp24iu73J",
  "key29": "56teS6p9Fk1RbVw6Uxx8wHfzy1QvtbyWFUyuRvX7bF1BDL3cRmSJ7r1LrFxb1B4nHCDNXA5C2XvYd4WPxfFZCj1D",
  "key30": "4uttZL8hiRSNKMXd9ANMLnEm49pX8FyX95FxkZaLhd1C4Ucb7uqjQtKKSFERwLuv1wyC4az7XPZn6vHQ965cYTcX",
  "key31": "5NvnnYKpd3L1dp4FQDcTtteBneYEKyoipeE9fxbfabM62toqKbQXZz7CsGg96A1iAa8hdPimKqu5JLCiGz8HP8SB",
  "key32": "3VfR4gGDw1WUKF9ZVFVpoMuvr2xDx4e6Uws1rswjMsoKtNCCHe9Uac6j92ExefUWzhy1aYxqeu74NkEK9CuqCwe9",
  "key33": "49M8JYTT3WhqmS8NvnmHVaMrJ3dTxdaZ3Qpbkh5vJP9SoyNrFJQqqgFTJAe18ubwdPmjvAbFYmSJ5FAhdUfyCjXr",
  "key34": "4xRa3sLYxfcE9QWgjKeP4DSCrYhMvUNGKf8NrmrdFtKHPuAk8yeHsEfZ6vssuqhVYgB6rhKJtpXW6Q8imSpyiVm1",
  "key35": "4PDYXJvaP8hpHKbijpJPNinbfBTJhkBxqJ4VaBV4MvbK12fcYrTEhwj8Gbtw636L1V2QkxWzbLhs2ptNHA8v9HDs",
  "key36": "3JPVaLmGqModjnM85Ry9m54DbW39LdJHRqyVMbXdt7NAuJZwimGiEJN8g9xLJhYz9BMqVBikHjtfa23VV4fa8XFj",
  "key37": "4KMvX3wJNE6RhVfHPFzWUkMj4s3sL9wAJteBVRuMC7pBFHpVTJ4V7XEGBJz8Yxhbrh9GtTb7SUtHZP2QApp5TMU5",
  "key38": "55UA5FGbxh9k48qoLxKgswjYEDeLxwTAshi8xCi2gtPiXv2N6hJwC5NayepaXzjrvF9XjcwpsQMNKMpx2wWNjGyb",
  "key39": "3jyH4WuAUTaBdXAsbtJeaPGuFDGV5dpJFXXGX7gf2ZqpcXPvgbA3kfo6ZLPgWZfTWiBgfQEqGaajnc6Pv6knyuxQ",
  "key40": "ea78wB2tHaziaK9Ek4Suwn5HvoiS5WhWDZ7pcG46p9yXKYV82EuonURGBmkx5B3hmPG33HkrDyyCfhfKMRHGSCe",
  "key41": "WPksSdcsCUFDyxUkJhQFACqbJKXNxcqjjVZECt2645vTGupcq487KTgfuNa8RBTm11snopueYb5Bnq4jNzvMgnm",
  "key42": "5o9zmrKapVSBt1JvhgYAr8YocWTBvCLzt1z2y8diXQ39L5aYRmHsXqhjL53ZxzYiZH8QDt3p49qZBNCTgnRS7KhU",
  "key43": "4JkwVteZaMqcnWFpVvPVvyLKij2aGUxzXkm746HA8WXDWbpj9Ckrq8cmMdQjQHS3Dz6iDBRfkwnzVZkpftSwsoCw",
  "key44": "3fheMGZdvrJsJZqJ55uwWDqFWYyBM9m18Cf9aNvNhYRyKNU9auQojZXfi4eMG8ytsFwikoS1uk5eRY1WZXSTRxFq",
  "key45": "3fy7W1y2HywnxoDnvNdWySFgGcM4kwcxL4qQcu7cQC6x5Ed4dB5HprcvBiYB7ERSrie388FuxQebWxo2aTvEYGpi",
  "key46": "5DfxSescAADS28rmB5Wy9jegz8EBppacQa1bJYi9x7CNmknxDCnPKxkPVuscXtcZ2VxorghKCjGF8JbhXxoy9mvx",
  "key47": "4HiUuDESv1g6861rhRyJczt4ViHYRyCLiJHrcMfomdvm2U2U9UN8XQBMizLSF9LdtvwNcTfUtrp8admFkyFtXfHK"
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
