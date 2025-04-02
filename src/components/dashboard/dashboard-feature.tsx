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
    "zt7ZbWpA2QGgkGNqTQdLzLTFvKJPWYfEvFzc7xrsSBdPpydAsfcyXbzc41FLC8Zz3sPAmuBotcwjer6wtq7Tt19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TXo9CFSyjZxtYutdPCDtDjRAapNzbW5MRM1tnPkW9MqS991SLkZsYm17X2q3Pg4QTMFTK4KdZHH98QNi8CQvqaB",
  "key1": "5zRzhNRD1BNrBZhE6ySL1shsXu3mgzdv8Tsf1zPSoK4kwrh1Jx7Kp3zJMxBDAhX2owg4vwFegRC9XKAhFJkMRHVw",
  "key2": "2VCJsHnQo86RFKcsnGBcHBawzTMqwqR3PnCYC1BYU8DcMwrDT5eq2BLWx2vJzUcmau2z49MrWK5E5nW8ec4ESdJR",
  "key3": "oiJ93Ju4tBWv1v1QJfbaoxWGNGVE6PhgbM3imNR3DZiGScVBhrRUA7oKJhKRS3pP7wvz5m3ZzCUhMNb4YAPR1Xm",
  "key4": "3ztZm1C3brpb3M1MjctXQu7FdYHPf6Ax7L6oP7hho2t5oWexrzu5pM9aGSeM3tLs6Srv1N4xogajMF8D6wM7vXjf",
  "key5": "2jpmVPkdjHETxDJ53qKb8HFk4KxWYmoVG1TwZoJSBM7VftnL7gx4t5dYEivgvHfowys57fJvpYrYGdTThQ8BDgBq",
  "key6": "3XsExYDUT4BiZTQex6j43cD87p7jf1KY42bznETtUgwyGHBwiPhLYaTTMj8ZkM4txGB8pwwnwMmJqJ2pqp8pJabs",
  "key7": "woaaq3Suundf1aXweZoUaBrv5HmnMSXT4Fnu9i2gDbSGvPDHmyLnUJFJademQTmj5Bkq1CcSHgFuwGfMV4VZqEq",
  "key8": "26qZXYvwSZLL5S95kAfTyYCkMK43eBs5uZ2e1eTPPU4RCe9Cwt4UF44rKXt5hqW9hLsH6VkpVGxEKMACCvccSyRd",
  "key9": "4rKoXgjkYz6zt4R9ED3k2FicY1TCH1BTLeo5e6x9Y3VUhHF32yjuZnCeZkce3ajH5jV65aWwjWUEbDGHb5nRmhVQ",
  "key10": "3dSfgdxhxCKJYQ7ddbVCtYRUkDdJboEmLeQHd6xV8MZjEHeTNdPMwvZkX7XaPX9QPWYLiooQgft2DUiEfKya2efp",
  "key11": "M9XXmHr2PfvSj5YjWZtFJ4E8kbZ6MMXywdcBRdJqnTdS5osJuue1gF7XFzc3pTKWNfxWHw8moAufRXv2RDvFp9Y",
  "key12": "3acWpQsRHYphcTz2VUqASfRot4jEN4bxUKJJqsQopz5GGTm2JSCDSAKEM6qWWxS1BKd5Zv9NoWY1Np1ZCKapEbPx",
  "key13": "4JnkBgvJVfpvucUm1gKsWEVWSsEQW1b3tyXmbYxwjx8iW6jvW3FCKFfsb5uZrWAz55Ey2qAx9XvscCGvjrXD4psi",
  "key14": "39PBnhbkRXLrpABEQXG8TBBXTdka6oQPwa4DA5zaitZLh28bafEYpCXrDN7KRosqdJxZxZZGfJPzdZ9MJRxMUnw2",
  "key15": "AUagYLgh5jz25R2Fn6Sm63MkYD5NwVbrm6hR23KTpkS8bHGdiQ2cJFubGY3kWSjHmA68VBak4LC2n7Vbg8hhw9m",
  "key16": "543nbmMa6F4j5sqkouogqTcqKTCYjJRqnWjdFSpaC72nCaZaVV8apoBsKwXP6vm1JZmRrX2zfTkVxJiveH2pYkKB",
  "key17": "2Z61d22JtuEKZkwQ8vJH5N4kfMUBBrawpYdxaKwvRbLLN1XganmBtwMzKHDXBWqSWFyjvPDRRJkfwCKZEDTv7on9",
  "key18": "64FwVjA1KGbxZch3EZBQ5i67og7K1zhBTyAMUUjE3yR3C69SQ9RGrSCLumNQAiwUopzL3bz1JuzFgHXvxFziRw7n",
  "key19": "BUUnwqPUtHVs4APnXdW1yUCzsLbyTntAgr7ZmYQZJ1Y7waUKetqmy9MuAK9NZMqRSuT9oW3M2uDEWiqT75BBjBQ",
  "key20": "Hy4sRrLR6Y3TANSdYkEHK1428zLfEPGkpVBNFVQAYwK9jt3CcRxw8krKShBBkvGFf2RPqQj9cAnSsaX3vSd5vGJ",
  "key21": "wAG95tNJqzCeSUJU8ZuUyAL8c4f8bM8eiRkG2wbNCSWdsgyumvbgwVvMQGUZd35r1QEVYbWv6fJmigwtJNhzES8",
  "key22": "4GqSrw41FyVEaKKRm21wfNA9AkFVJS11vTvFPQFnVjgDzdTgUe4d1z6PyU7SxgsSz48xsvQHEHtk1No2qpYaTAUn",
  "key23": "23aVopRKLbLrWSHwTfFrZBEXKohdT6ACCDcBnqHuSfmHZhBiVqVP3ZPsAv617F29bXK35pYePqwKEfShAf8XjhKT",
  "key24": "4R7zQ91B65vUVaeJPY1jcrQCjyro3Bcm9ZX39jbP7zL7mMFzxw1xYvXsAUNAbKwSzHDZanppM3bx7BxALGva78dW",
  "key25": "2vzj5LKwbXz1ntaAsFemMTELWEwUm3H5sGWyD572fbi2fcz6BjDoveYsidtWK5Kzf3wqqPQ659FzNGPCFDF7KqK1",
  "key26": "5Cbi8awLRvMLNrXZyr8dpkJUQafzy6inMYxo3fy4MJ12tbV32KyNBGtKm4zKwFBTxhegEcC1sm8vFcZNtuZhLLSB",
  "key27": "2yd7UDsAqGh8LuDhPngFPSKzVsFgDujokMDwV59mTQbuoNPNhmVuty6JBgvPnG8BC8t3B4x1wUsKkss2mB5dv3ut",
  "key28": "TmAi1HxVHhS5SmzqjbUUSBXGUskK76TsFSLaws92AkjodinPgci1rT4trNzCNxcTFTZkNdG58ZQ8dKQkkh7Q4Yo",
  "key29": "4LWc7QCchFgti6qocpzuPkBNNVWqy1ouXkgfbwEdtW569KgZQGNRbrtvkn9Ky63Rt6RMUxXa1AMtNs4NURc4D8EL",
  "key30": "3TyJRXruMstKRqWzdobzwu4KzALpktT8gSHjnD9o6EY5j7jn9C2S3mLL5JmJAnLzLre8D4nSC4r9FsJ2x5dMMHz2",
  "key31": "5ms6YfQhbNamXYS8K5wM5xEKyrcDtvhVfYPgig9wEMK2fHtuWC2vC4m4ihYsPvdjqdwEfQh9QEvbn18kVM3BaEiY",
  "key32": "518wx2d6vj54TuuChCvz5vgGscoRYtAwKVHmy6K1EjAhBpUe2ms92TRaTYRZuB3unKgd71W1ami2RQ5S85BqNehg",
  "key33": "4AxJ9HfJVZ6zJJDcU1HjXgWKAPuhyq1MHfaFRRGY5DM37L6otPEzMnckoh4m3nmR7vn4U8kVgCwCSiemomSFdL4s",
  "key34": "3c9SMabNsXiqibghchjm1JTduTHiaLnumm23BdJ4r6puR687q2evaHB9kmB8idAn2WpntNbfzqUScPbW6R9pFW7v",
  "key35": "EqAog7dZrzhA2MvwJFJGigknFxbwZ1cSpkFBxb5FrDeY2gGZ3kFKLRcBnkY63Z6wF4cXWh84pJ37pndajWwufQu",
  "key36": "Xc3865hSUkXSfb8n1GAaBGGPWxXVoEzZ53wSoeFEtBjpZW7xsj1Up2XJBoizVtaBWNNaUCEcAbBvzJswFYVgL3e",
  "key37": "5arDAJJjw6g9jS7eE9MDnN5zr38rkmVqce6d3k9zjtPKivNftC547gQHomcjt5k5TrV8htcPw8z6BKLu8KCod3Mk",
  "key38": "4grq3DKggWthZjytDzGGJRqe72Y9EmK1L4ChPWKm9UaesuDLNknVQhd2EGZzysCZShyNsv7GMQDxTyHEXBsRdFbC",
  "key39": "3hXHVUd3AqtuyXc3cPjJPh8QXMYEfioxPbKof9DwTYXaY5Hjd9dStrwEL1HZJ4CHgTRVTrnMmGedurJYWfHtZYoF",
  "key40": "219gNvGYRnJrPciiJndyCQFXPZtQcsCeZHMBmktUvJW5MW4mSVAaeHD5Qak62UKoJBmYJo9Xdg45Ryycv7Lu8Xen",
  "key41": "53wbYsYAksNURZMJhB4Jr9RswF7a7RKFmzijCfdTd6konqmPdLdB3p9vdFMokrSjLs26q2RD8fPcTBsnn9QGvwQa",
  "key42": "2ibSB45t3GMFUbK8B1bouitYBfLubWBUbVEWLiu5cqfkaqAgNsUCdkYcwSEoDSasdTTv4Qfvs9sBCr6hsxfXVPXp",
  "key43": "5Q7e1M85trLvjFyYC7dfYqAYMT7ztykZi1KNgNWnHUJmH4ymoCxeqsd5tD2D5nxx5KeQvYdaMeVexDMeZYSwVfzq",
  "key44": "9PYgg9sWFpDMs99YzreNPoFGaahbDxTyXDMn4KchhErdTz2gufKwrVvYDKjN4cEuek99FaPUnuvWQCZCU9VPMGb",
  "key45": "3DzQSpceaLvCRqCW4U8u2cyc8yzyriFxuWhrdU8rSisBxXxbe8UnX54VV1FkmMEcaSMRcCPRwv14iLGyjq8aGmLk",
  "key46": "5v9p2Z66Re9HQDqBhEBLCF2GmHvyKEcmDFa6aYw5DrPeJ6jM5jaeEaby2r1ftV1XyVrPKBwADPmTCVLrt5dB5ZpW",
  "key47": "39KBG5Zyz9v9SVfVYrUk1BzqoKSFWAdkoUrRCD6VuWz7u4Xk1ViG9ejwhbRFnPysr1K46LJ8VTb377stWbP2g3Tz",
  "key48": "57AF57q6CZK7qqYYwAue7SFfdn5AmhL9KjHncy9FyDW6vHVekfH4bSrM5MmkjbXv43ZoLcQSFLFsjt1UAYdmQW61"
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
