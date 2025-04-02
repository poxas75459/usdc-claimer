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
    "52yMLA9fgx2AyBrTzo2dzaTAHActjHBoC3LNep2PCiDKU1MTBa3RUGtqDKA4k4mVDZUZBmJmeqKKww8XmtLAbmJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i2r5YQmLHdSaUF16rwjxpmLoJofR6vfJkoPoQgHRGByCVdiPZhZsbQ2D5fBUgjv1jQ2CKp7vhcbtvqshUoeqX1S",
  "key1": "2RbNHEdJQB85vyyeQJQ9ksoxrybbyDQZGGz2oj6uhmaYqVF4jxvyDFtCi1Tq1KrKy4ZNTKuK6HHSHH6Wf5YkZLG8",
  "key2": "2Vg9az3GX1i5HP5RiiaUgXemWARGieef8kkiDEBTmrWRJDvwg9Hm7pbLFVBCkJ3rbsvuvCHBTXVNZDsUGm1E11xd",
  "key3": "gdPzeWde5xsYsQfPh9uGuwuGsfrXYkrghes9uSeEaTMgg2TYyhQUwiBKSXoA3KLRZA14YfjXZV28LCacj1knUoD",
  "key4": "3spFt9FJkX5uUw46zrx4xQ5Y6WWBf1NCLMj1H2Rq8Ahv3Rf7YuLGQGiJaY1rXBcbCFj6NkracHYvwwXJS2hBqjGE",
  "key5": "42Zrj4WEqH7QrrHk5HMyLujBQ6oENqC3bVMg1BT3FXxBuptR1KcqYnocipPjtZHF9PWK1rnWbUaTvuxabvsbz2G4",
  "key6": "3utkHsCWZdWsMbhPSTg5iUABire2dsvRm1hB432dZqxx6EmHmhNFxFW5ryNigtHaJsDePq8sdAD9bF2KM6Wunihg",
  "key7": "HU2wCBnYq7gg64owKCi2JTBDLGCnd95genjH4HXQ5sAK7mXAApzhsW57YCHfjuJXdVtWJTd4hM9phUzP3Jg71VU",
  "key8": "2A4KeYpprGHjKGvkTKny8C5DoW6raH6cXM6neSaMECdCKNVA4U975xE3YR7593ymP5gT8FaRdvAJ5eYwfVBLWwiq",
  "key9": "eqW9UiAdGGj2hbM8mcqpPhCzD33xzSd1meXmmCFq6zx2bmfbHfZxJ1B8hmVZYWQ61o6yMa67hAm2Z4GxsDvusex",
  "key10": "xTtZ25SCymBsVrwhsuq1thAQZWFxGyYvGZukuTpZJnv8gssxs97BssYiSa8Y7QJtMrmLifnUfuiRnPLEaeYwfzX",
  "key11": "3JNvpWYJSc1uKqvP7iXVyzHCFZ8RvmBGZAo8qL88nEVkkbkWz47KBqEFwSt7K61GpZGEBxAGaTvyE4EBpPWLoJzd",
  "key12": "22vGGLwPL4piUuQCrowHNa5PhAJhgoYFX8b4ooUMjEy2CuWSpGbxW4CFttKcgAv1q9Yr5NPDPDuwGnecVG9nvS1L",
  "key13": "5o7YgWXL4z3FC6sQLUPaQZCJiGC11ZrePMAXzV5gvMG7hqLtY666FW4YLovrhbkQvoXKqLiPcuhhAu5Yg4S5ZoBV",
  "key14": "4XE189o8NdxxquBCbxxJq3JWi8kCKK3eX7mqYj7Acuh9tdaoGqwbZp4knLCKRY3PAXA4mx2yQgJnMZQmK2C9Dxa8",
  "key15": "m366YFVkHruLahTBKpAkQJ78EeXMo3HW589Q1PypuMkL4Cr7ZStoQ25U882Evv6BZDnUfrQqtNsUoGN9gW3PGkQ",
  "key16": "iUhS9JYiDFn8UT2mTtsLMJGfwEcskjDz9zYV67oqeQwGePFtgkCVz4jfvCWGLz9saLo5Lo1KzHR2TB5jwCLtDP1",
  "key17": "4LVwz2SqgMGvVzbjzAkSFU7Vq7WuHqSnznb7qT1maMdudSUVsZXouPSd3yqhU3aP7JZKsSoCUfvu6TsDdNBfvMzd",
  "key18": "o5t2cS2kh5qpi2eoUasg2q3SxrSP5LkyUVwaZ5MF93R4CsteFGf29PvMBtWaPGDTiiwTbtcBRNs4gUaPjgKxYT2",
  "key19": "2WQYMqeBY4Jp9gaB9NxtQTNNwVSSXedYeYsLKyVryrwbpGWnSdt2D84ekpg52XmYBstFZ1R7ksDHThHsTMZbPpr1",
  "key20": "2PVhYHuAudVr3h8PhfhxoXQWU5fvoE6788zmTbVhshWtyJsFu6CQxNBoD2pd3GaHJGhPEKjgdwLcvLEBeBWuFp36",
  "key21": "5azg7Q32pnVtibUqopVEAJ2nzbfQP3tybhnr2Cj1BBrw8mzCLLhfT4dn1ibycwfpEj4oQdVajDKzM765PqJX43Qb",
  "key22": "3rZybgvVwRnwgYQz2TdaN3tSuQUFwYDpLHxYGeAKYKiXgHXsB4KidHR2njjg64cNppvADjhtJp7ApJzxn1aKZxwR",
  "key23": "r9XY8nwZNk6GaJCZ5pvUNGxQiTPDWqcQdCVYFRX7gAp94dEbWEvwH7baibwfbERP9oAyeTkmHiMNEKALd2Ak6Ze",
  "key24": "228EyTwJyttjrHjQzZxJLaTCkRpdVdvKq8QUNcppxAAHVkDkA7D6MTBWqCxeaDPYFDi2UbBprzDZtbtPVjYbCNbY",
  "key25": "3hyY5TKVkJGTE1y2RZk7r98q1hUkZD18HGkocMRy6ANtVzCS9ioYvYUUZsvhPNVwGi5Dx4b19CbCZR69cLJGy19F",
  "key26": "2UFHhPxbJcZpqxEJnN6Joa664zsLuW3fmDp3KgjY5aBHevkCwvUox7KgjUPZTmynx7h1qJ2aaJqEDrB5KvquRpmi",
  "key27": "3rR9YmAjA5xmZqEYLsBVpso3FrwZKY3BoaXCuGpUHaSadAfryu8zz3nNZsfci5QwUZKpJdLsSEs1AzsvMudewuDW",
  "key28": "3qaTNNCgNMD2WKgCdyxVgCVtnCpryufvei7LtH1okvk14B2UZQq6uupRH3oQstg5p7t5tQgSwReFvXerTTAh2pDn",
  "key29": "zUmYM9zae1eFwubmM7QFtvs1QKTD9fH7WA7GmFFx7UVEVohnztNntW3VGnmRpDeRZdafmWFa2wqCp1zcSzVYBUm",
  "key30": "3ak2fy6NVjJkmEiGWkuSJyvh4x4ZD8RnPr9f4sdjsyAFr73MHUjPHpXpdDxx2TRudEahqDhXHhc9qYwNNZ78xpBs",
  "key31": "28eb5fk5fchZS3M7kkeNe2mmtZie8crVP7bZTESbDjXPiuU8vAwrsyoDPjAqq36CqayBfoNPosJmxuURomt9nZ3n",
  "key32": "5sfgGM2T5uQsmTa331VZxtnkAaikUcdQbEWiYCz5Nq3bYLS9tuPFqridRQ6h1NAvLzjJ1CpUNXiW2AFpqLtZuELU",
  "key33": "5dCUzZJJwcoea4HYTGEfrUYwW4EcPCGV5Jd5cvQgxE7Vy6NzUcx9dwjR2jFxBNhzirkgFTpoYHjoWvX3LY9B8BME",
  "key34": "2PPkamRnihRX2x6NDkBaznehY7uFXhpiBoakWohPRfVKW9ai4iBbag62oz94PMwDqndV3WakvDYFMreGje3VfrFs",
  "key35": "27qvNowJWGQsa2SdDghs4Q6d5GtM3zLAKpgvjGo1mUV32CpoB2pjZuCpAB714fymbm9dmh41cBo8jzmc6eStP2rd",
  "key36": "221kifE2As6SniPkL8eD2GQD1vjqDwx342Dxfz8oFeMh8AQRbzGedqdY7aVzCuarSU2oaxKiu5iz3Dj321UBnHPa",
  "key37": "52CWjocy76fiUQ7vbwNnQfPC1rQEspaU7aSHrznEacwLwVNEMXB9DkddjcYPS4qQYyQtngzkU9F4WYenZWaXP9kM",
  "key38": "4JSTNSpeb9PndrH8sQgiaersrTxMyFANtyavD1ghuCxvCSmdE1gU7y49jMufJTh2M1tSDk5zveGzg3FPUkDPqpjZ",
  "key39": "2WksbVYWRP82S2Lv2Kb4qXQRTmzUyvagrfGV8qwuWV1DtG8MxKRnveejYMBz19hMEKNVuJiMhdmf6gSVJjM1KnHZ"
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
