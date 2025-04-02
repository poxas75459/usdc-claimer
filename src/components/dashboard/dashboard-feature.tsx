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
    "4xFL41z5PxnGPfNmyZZUqPz4dCp8HDn8eqkiaMRSQbZbK5s7meUGb8pVnHiZ5yK8KF53QuUpbkkiopmQV49tn945"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZdiAFD8bqrKfnAC8BLpiyJNQ4yD327s7TK6poUdVrS9s142gCLgFEfDX4qmwc6KFaMeD4uqqXAcivZf9mHtpkqi",
  "key1": "64E7EQiJ4dLhhB14K3ZUNGEmwCxWWv6WZpc9E9m4dbdd48y7vjtzqT49gER7mxMRKPc2hX2wMcCoyJYwBVgqWvGr",
  "key2": "fjuSG2m6yeGMxy1RsnDZ2ZQP6Wy8kMFHinLdyZddFaoWsBeberEgbLqJpSdvpHeWT8X9eAAL7cYaps2vumtSZcd",
  "key3": "4CbjAedKwmQwAxnPCqgiKCSKjkfTFvK6jfF4d9jAVMWrCScYTWUiUWrZdC7y44P67YukhBb7aaYVRjrTYZA942j6",
  "key4": "24KoqctCB9qLAZtRgCQemTVqj3RW3ivYc1U2H8pzbGBBKnAwogagd3LaVdLr4KXGsyRUdheCTePS1oKuERc1VKUQ",
  "key5": "2ihrmLcBqnvCGXxraEHg93dT122zhsFSY4z2wN3dX5CA6aNAH7C7LxwvcdmVV8w2kSdUoYqMa9tssLmhyPfA6nNu",
  "key6": "3R2Y51neCB7JQ6QWbUfidUtz8oUtKGy6kq8qnPUUTAuG8kdjdPz2WTSUwg6UzUcNoRsBStzxSm4LFUSsFASNZ5qY",
  "key7": "pEWE7Lm8Z8wTfDFhWFzzin52RHbhmxj2Bce2DnoMbbg2o2kjeuYBg58GPxrc5FoAjApgeSk95zn1myroiVUVkgB",
  "key8": "3xsc71GJK1jkpcBw5n5ZpjozDqgGd3hZuwhYG7EP3Qob5tM6noTGdxztN87T7swSnK8HEspuRXe6Y7mRSQvKGfV7",
  "key9": "2NxSTRRj5sJy772DZf6qPNejcG5bHNayuUAGPwmsHU3zyoVBEnQSqnQA8vNPAuu3hWePpdFiVivo7CMjJPdFTthX",
  "key10": "65Tq58DRptU4nrxPAD7At8154FZDDLuUHSwqNcZ9QkG5FaDNecBdcUCmJqQURCTwtDxRuizgfA9nyiu86h87k278",
  "key11": "RLzhdw6PLYt1FetPMtfea8x1F7oPuEgRT5Rp8UJGkhmirzYFTtj1ovQq1NaFMjCATJJg8tVq4a1nW5i7PUef3dN",
  "key12": "ajnfyu5yp1gxPYLFgkKKoj3PcUT6Hi8C3a91r4xQSwYNGKL1Z8Zyq2Q9TukN6gFDGNqrATmg3FmChCvo47NDgiW",
  "key13": "2TGuw7RABSUQBfnEGDFBW7XjZ43iUrK19ru9FhWh11NUxwhA15Jk9eKF6YHVkn3cqmEwu5pSGbUXrAGYeM85H9Kf",
  "key14": "3QvGhYJ67uFpgxohvKwLSLs8Wna5MRYh77BCeigFEvSZvGkCChgfPpbM9ZF1iDr8oRqk1P3G562wyU14DGDmCJbA",
  "key15": "5tgibD4v1sio67qvkgja6EWKKTCWsrwfK1VDhvknfr4ff6UvQEbqGhuN2FzHEi8m5KEsJNZ7JwoQGMZwVgHz7xgt",
  "key16": "4JQ7GJxYgspYUCaKDtjWqkPP9LVSnU2LAf9M2REUQHdr2AULKSV1QoH8dM39HF9BRoX42t2NiE2UG5g1H56LKHJf",
  "key17": "wUL8seT1gwrAn9LD6Bm8xJTyCvdU4mGsSN3bSsDFdTwd7xSKs5EV4ZYnKMnmTUxzXvNmYqYcwX8jEtMJ5nqtFN9",
  "key18": "4CYMjXNRtyYmBgFDn7FqEZobGLezDTU731pCQhJryAXY9QgD6cHr1fKATQetSFbeYm5CtpGqHpbQaPhJ43wFEuDR",
  "key19": "3Q1fnDQ48pYeMJawhFwb8owAMEVcuGZ2bKJkRVBQiiMYvfc8waqXoawzNdN6ThFg8VdBCBAZj5kBWWAJbBDuvmEe",
  "key20": "3LFR19oyFUhzYsSyJaSNZr4SZLJa4VEi3fiZ5mhz3G1QzVijL44gTyqXwhjSW197RyHjhjGjns191RLQYQbN7h88",
  "key21": "2k6KoKHgx7mCUHUHnLp5WXoGU6HP2UjpYzAyZBXz9rganAbtwMCVMawSzjRnLgFZyGGctAKTwzNCC3KRJAvmLBD3",
  "key22": "23LgVEUtgtne2nU88Pdok9zFTm6gZsgZEvHFmpJE2QifSGD5GYyto93r4YxkkzLjevBLDdELb8nXbnHRPmxGUS4T",
  "key23": "2M3GAzPBZGM9ZUeEwmjTkQmdu4mMa8BEopY7tAeM9u6rcWajebnARrfXc3J3w4zqEf5JinusEZdANb57o6r4SpVr",
  "key24": "2bALMi7bmUxf7kC8jS2AmzwnQbwc6vzFYxZWChfyiTNwYQPZdJS8zkn7MQ7oBEwxUhPjbx1PxhXHTmaxScRbx35N",
  "key25": "NWL4gwT8b1ZBaYY6exhsqNXein2ayNRUoFGKHQYX6phk868t4YqTrYY4o5q91ZvXGLeojVvzVHst3c4PRinEpWT",
  "key26": "4bsq3xSQB74xEz7VF93MU66pyHDBgX9QAWX4HMzGu2zRZCTMsXyVCgtgtQdtWgUFtqNx8ndWHQEsdtSpozFkFo1w",
  "key27": "umgwKFVM2CEumTMJAWx8mWb3mYXSywWadfwUQtF5UP4YDUhSiaFdKXcpARVhZDfTkbdXwwNMqrGgNYbVk7VuYtj",
  "key28": "2AyKb2umq55G4r7nQdmbhjjNcXqqkCFfdxQaMCkVPNSLHkjLQDxG6ecrJSaKm2ST5kWkCFokvnQTGRgPhYUMuVzH",
  "key29": "4xD353cPV2vQzG9Th3QF7zaQ2eooqHpmK2W39QdmQyixjtDjgtC24wfUHaCJNoXsmG84H6ugjAd8krz7qiQtrhPw",
  "key30": "1cqQTgA4dBUyx5Kw9zzLEt8wXdYQ3PJ18qLryAmWtq5R69eJTjHYoCENhgzja8eGnTDTdFUNuKbNfrYeLY2gp3T",
  "key31": "NPBVvmyuHwn7sn4CQu89BvJp3kJwmEe2ZHrn5eu8EJGELrvrXaW6cCZ63ZSz83xqxYdbzi3TbfNYNTSEnKDnsaX",
  "key32": "3hi3DDWDL1pfboA9GznAGnpkbPyMup91Q75jDCYCmrdt8TGLj7FkCZdn5mS1bNSz66pxBtadaUoqGhwUB1E6ZZ4q",
  "key33": "3ae654ykTqAZzpJ1sNX7sDUXX452PU2jy8UP9j5kgwt9ahN8Laxu47wd78s6RdjGdxJRATQHnmw6Kk3VWZdqAH7K",
  "key34": "oGftNLivJ7SXUAQnrNWvn2furxExW9or7ahYEtSj4wsyz7UnSnKznwU3xRVgibHqNpZQ58Nr1dwzMnuGpP1wRXv",
  "key35": "4WhfnGGo8fZdqGMiocAEiniHWD2X4EhqXgGKASR3MuCj1g4SCcoHnMZzzooWpiBnsgkZvTXY3gYUET9UmwhWKPnD",
  "key36": "52BRoo1WiCb6iio6uL59MdbUQ2B3vY6D3iRqHGjZmJcuY2pz7zhzXbuV8qkCK5KeDHvsQiFQB86rMxmdLhdERWZ2",
  "key37": "2NrCuMaD4Ua17vECpiFo4edvXFrB71rfCNdPrzdrdcZ7TT3Xmkj8qseWDf1fu5F7gm4qnrLmyQpS6aZV3J4cJMj4",
  "key38": "4bSiN6mibVjzLsJy4uW8Tqpj85BSDrFqrkfLwdKnjus35fFtpZnWDrFTwLiuWGCubJ3dz7YXB8e1f22FyJQuqtGp",
  "key39": "52WpkrugdMdBiaagRHstskjP7jBsnpB7gCHBBQuAPvDp67fpBLvTits66CdR1gUFcZ5BNXKJsr4SjGmbhBJaYGwu",
  "key40": "4SguTFEfiao21EPN6uydoDrg8A8ZMp1b5zijRRLcjuuUdXTS9ZxUKMAE3zY1S5g7Wur7hhbHRfzZPJ5JpyGjL942",
  "key41": "4KU86zoBWhJBGpzef2a5wnRtMAJJwh9LgngzHDoM7G4saFEVLwNm9jintHCn9efiAxbJqFkM4eUF8LfFibznzd4X",
  "key42": "uZyRbrEULb4zZgqiY8Rm7kdz5SBRAdHPBAErt8nuZ42WiyYToo22i5mu4ayMAm8pSQe3civPzjNgtWLKB6MNN4C",
  "key43": "4q8zUN33rkuRVuxMLwEyFC8bpHR5UmBz6VGn2rELcKnWDWwyBZvfpuHYeVMiSqqAcuDz3GtuNHrgJD72oJU5iqjr",
  "key44": "5XGQavKgPDBKmgEGk1AVjVR1BKEvkyV4Qo4YbWuR4QHcXyo4VD76t8pBRU4VcoL9HZ9ytVx7HgxtxoXFxet6RNmw",
  "key45": "2DsKqsFijYHKZVkb6FDeYJrBPWY4dpE8J2MkcxeHVqdTY7rTetcX2kSqg3Zy8ZUCTpxveCrW18Ro3fwbEiWVVuTp"
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
