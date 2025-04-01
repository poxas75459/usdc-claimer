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
    "59KK6g6WKcRKMHxHseZvv5uEZuK2NxQ4KhFrHgXadfwmv1LhTueAqD5PgsuH4viNWuSWGReiSrM9YX78WFnRYWVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "599kiQ8jQi9VhGx7mCbQGDdtpeiJHDAowYcsTDfuFvgQBDzCKqBYRFeG64BVNq7JweF8vhDpHiKAXMjjoukVLYwJ",
  "key1": "2heAZqDxh8EyrAdFR92ZmT8ugu6vnLsbee4cgPK68sHi1QWuEZe5fGFN7C5o3UyekF256ZKBwddaCYSvN6Gcm6ks",
  "key2": "3ZuRcENztEnz6yNo5ELXKgnznsSYP7FLnvrrX5MBuErBDBBihVENrgaG8523kRH92WLYMrHAfQNrDLda3EEuPzwP",
  "key3": "5GrnaKaRMBBHLGmeBKYUkYJWiZHGhEUNtedaHmdN8Vgv28q4n8pzLzb5eeZct6z4cmZEHstoXUwh24hrNAxRCEAx",
  "key4": "uTyQG2f9sfhLcW3kAqtWmGVVPe9CSGxzzMUE9zCciiZk48TV3PQp1yiKaQAbtjGX43dHNpBwbF1xMTx4UwTCjXR",
  "key5": "5ouk9izPLz8qdyrPE8Kg7QwnXR1n7MVKnaHs4WdgpQ6r4kcQpc8vd5HbVAZE84Hv4FSSF89kqaNLWjP2dJjGVP1c",
  "key6": "5f2kB1qGQ6oCHAM4vBiL96X5YvagAfUyptKZsbwZuzL31uZ1sesSuj5qeHetJ7eNFAGEttq82AC4wgjCQeAgyZ97",
  "key7": "5Uo6U4bWhCVqNEvofVzcCqccVfsHqhk6pWTCRgkvjDm9aN1Cjcif7GMLbdgHxDAmZKpENe7EhCmJfSgh2M3Cr4af",
  "key8": "4WSuKd3NGxQqWjt5f7XkBzD3W36JQ3UV2WSFf9MWvbGc78hvE5QNnuHPt1DzgFYXCsK8MopeC4Mrg5uhHGeTH4G4",
  "key9": "4GUKtNePSmk2WSyrh7RtnCfkzNpLxgcYoMC9Hmxfz3sPdaDdHQamEssftMydtxCp6qTaKwrAWJMCFdPVQLHeDjpM",
  "key10": "3bR1r5KrnyVyGERNLaaRTbPEZXWxEtc9BRfcMi6Gv5qxZh4qoqSVWMZ7pbSanQXQd9Ft5pVZFhxfBf7qYPuPZTn6",
  "key11": "5zca2tEu32rHv932P3AtCNJAvUpnhHrbUeADXiwcY7yeP1WPfmbD5mgWDXcwYAV78suvfy9AJXdG8d5id7ftY1ZL",
  "key12": "2BB9UAaDtyxmE38ZcgeiibzdXEQxRxxYe1sidAzr1CH4EDhSzqvGQwRHYSkwn1B7jb6PHdLweAJpiw3YSYjhPFnb",
  "key13": "59RMACpdcBteWZR5cV1itY5jV5mk1uiLdzeNoRR5q7LA2zfxXN1ZvgFM2QTwPWahuast6VPC7pLGaaT7G4AXmKfm",
  "key14": "3Vy1eN6bxwjXd3nrozFixkbhuLKmf2LEVNt2r7FkVpgzXfyz5ML7rKsPq6rfvuKvrbbrhLPo83mEttcd4bwQkdG",
  "key15": "33aXhru3KmAHdPsPp1b47y3A6A6joTs5Ri9f3SVE6hCgSH4FsENPJ6NGURnkeqCP5cdZQEXWfjBCmNKnKJBWDp3J",
  "key16": "5TFc8gMLhbPvTAHz2CxTVxWKuRpLr6YAoHs24EawC7kq4MvJSVNJZq59Z9Y13GKjmt1QeNsQAcZqzRQy9tob7fZR",
  "key17": "5fkySVRUiHn4V4Wj6m5cyA5cY8h1rnrNGn8pMbJh8E8B828T9Dr3y3Gmm1ZgrjwitDoF5UAi17jd7eYXkXU2d2h",
  "key18": "3NtR7sx743Rt1VSzPxPt6YjUdEffzoPpijrv7766hpz97erpbePpSfKXS6s5YuYG94tLqT2iRWUPLhUkvhXCCa8z",
  "key19": "3zNbJitgetZRs5gYpTJHTQsEVXGQSX6PoRbMn9F9Rptm1sBr9tcm5FHvxrDo1rFXdfdRJZWNB1AAkhtGicbpoD73",
  "key20": "47hMxUYGEmudYtCnm8bjDNqdnEP7q6dE8xCh28npoJD7eZMyqxt5gew9PaxnK5nco9FDZhRxn4xUCBkwVpr4FN6C",
  "key21": "rNrt8RFPVd9jeGkcLAydAV94h7cUtkGwZXSkmbfPpPeSjXKtX5Yp32LMxqEE9VrXwMaVZatwhUQoAMGUdfvgU2d",
  "key22": "2zoMXMpRLojZuJLQWjQ1kuLeiu8EGsz1GotgqtkwQgCXyZ9q1D3QF2pbMsMeTKzmqSt3Wioq7WchSYM2C3YxY1S8",
  "key23": "HwQMXyvxdpbQpVmjGFZccYxZ4KngBXtRBGxF3vtNrrQ582tAiADyfD5Df1exis8DgizBf42NwXwhS97BVabkLdj",
  "key24": "3a8hzznSWZkGqvTgWv3vTMM6CboHMnpz93qr5awHQ5NATLasG36qmM5Pwum8379fbqVpEqFbBb1q6C3ZHPttgS9g",
  "key25": "34gVmo99mLwE9ryCDiTPC3L51cwzb1ZH9zBQyCh6p5X8i7wxa6TMfKWE2U8VzHKn5wqh6w9WUspu9YGfzfmcKoe5",
  "key26": "5uqJouLRnuv3URrdXbGNJcAYocmYiTiXTmkchZD9tQe9hKh8eyBfkTKEX18jktmEMQWbvEpR4jsjhtBFHLpGnppP",
  "key27": "51JN8FTwQnjZVTWoyUZNB3cJnGNCJrvzrg1xvfZ4pVwZFWvPEhU6Y17VuYHTCxMtsiGLk7f5DhirB6efEmfxw9gt",
  "key28": "5duAyWtHeduhLDa2hHv6qFcskXq2GpDyK5GSCeFqL2XwFB6Hs5NG6RfEykrsPajxDK6HVhR9BSPiQFVKAaCEAUHa",
  "key29": "GyX28VMaepH1a8Nf1V7hf6Mdhq1mLHB1D7t9oJsZYyh6LYgBtd1joNZ4tGxtGd1TdQBzHKhdX9kFELbdZy68jVg",
  "key30": "285uLm8KE3wLFJmJ7HZGWzmSV23B3vHwFDxfskynBrKsyp7izpzxkVReQPNfKWFmr9xN4ht5Qjqhdqfn9SAN4oUN",
  "key31": "TpS5fyw2cBw7WBz4B7PzutbsyePCpGfyMv2qtC51LbCzvFATYUNUPLwqNfmrjVsxXsKsvyn3Xoh9Rj22WrUkqqL",
  "key32": "53gUf3HBFCM86aEZY8PNZZq6k1dZDCiTKwDnJKWNN23vXGVyPUPXFsStERpq51k4JBd4YwnuKuRJYwRqTYwtGpLr",
  "key33": "6hLo4q1FbH2RYvRMv66vLRMMFC61EcuDKbuhpA6HTu7GbYsV88Tm8MvvVwAUTC3KquXGPPSYj8bZgTxYdScpcZ4",
  "key34": "2cxtBioS9u4xvG4VGrqWNMfM58kecSCoxo8M3morWyVRZcMDWgJ4MdK5Den7LPLteyM6aLQAbRs6UirfVBAEuEYQ",
  "key35": "imKiC4mmpuoEsB7v41dzU74scND4C72jowNgwbUhwF46ZaNV7DmtxyjZxvynHQwy4ZKs8jjjPH6GF8STHQAUbPh",
  "key36": "4cXGSexwwEbrkqvzd7yCayP8euh9MSUWKGtKTYAYubaLA5S7JhxSiP2Dqdt3nrm71mJTNwwFuoXeDySUSSTqKdMY",
  "key37": "4e9L16vhzyfcjwRcvSAXZeHhCSDHr1wxYemVbtfvVqirh4VB1pwf81dTQaXNXZneKegVz2zFH3jHDUCG9W6dX6Hc",
  "key38": "z5BN2153YM6EephVPqoda7UALm5XYyud2joSgMV7LVFFWryDBfnmUuWmn35792DtncfXhBdcu8z1r2w4HS3bHuK",
  "key39": "2ka1wVhTjKEoCWLwinUFyAMgCmTc3TL8qS2Jjx5Q5yEmQ49MUN2HVBXMJsbpY96cgTtM1ADJKgQVaMfUoStxNAM",
  "key40": "4BiHETezWWnGfRKjGQPge1J8QPjy3K2a3taAeP3rMqHzemHz3Gi4ZUuGyCYV5GsBD5vvL47NQaa7z91EUZRrpy72",
  "key41": "8GyLkzYkeB4QyzcudxDWX5dKQ77d5JLLQfEGw7rvQfiaacMxRERAsVQh82Eke1ch77X2CTjimwsXh4y6PsWtM7Q",
  "key42": "511adAPUFpVWW9cr4U6fsidTTB4j3tfUsvQsYCP21WLUEbcZsAhW1ZNy8NhEGSZt2nvhqxn2FoJuMRLLEm5TUx73",
  "key43": "5WpcTmviQ4gNDgdXD7vEZ8ZhBZN1SDmJc14V2mVfRmVZcHcz8iYFwv2AgA2v25TQ6KK4PVchQ3wfVZPyzw19ui4j",
  "key44": "2tCxtvKDyYxHGUXEnYQQ4dFtfzQBNBp9dTqbjmk1nCbYKw78udZkufXj3ik2PHVKr47fomghvcjgyCLVGxFchcrm",
  "key45": "3vWSpnndTrixcTxF2MwLaYi3PxQNcRZvSAN4js7B4K3X76y9nbCfkNrhVXEeGkehNQLHbXQZQrUgHaeLcny7PDeZ",
  "key46": "5bYCEpzz2DtzyjghiPMpkjuMg3Q4YiUPYPBpSxtTyyeSMgTL8b6TUZLvA9RcACPxQLdSvxJaScaXgaULLewpdZwa",
  "key47": "4ejFNrzq6chLDzeV1HLWEuqwmTGhTb7APhgX2xV156T9ozFrhuX9QWVQBXKr4nrLRogGzq8RZYQ3CPhdahPrgbqs"
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
