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
    "2YAcHqtvh4JmqTta3GPSE4VhFHFcNmFM9tsjmf3ec839q3arSQZAD4E64kynHK3cU2fDJyoYTHnYmibSxudDETQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qPT6x7vMo5J4c6VyQ7KL412rbgLqe5APgCkSYWrJNJybEQhdmFJMdqetW4BJ4DfHf3KQzBZfdn125HXR9ydgvVT",
  "key1": "2dRZpNK5kHdrZBHUUFN9SjfKb9o1WFYvAySc5SrTuJnc1cPnVAEC3kapDcu2MNdNhTo5UXsT2dFcu7S49c2Ray4v",
  "key2": "21zsYmsAYuJ4EWf97N4jF8FVu9CyrqHcWBEgaFE7hNoCPqJwDuDuGiVrpTywYhrXexRHZvNVqNZoLMyEwdcT54Mw",
  "key3": "5ob1Xfr8eG3rPfX4deMJnkW6DkqDA4SyqtK5kQLvQpRcanuhzgfdE7Nm4UpA6rhxK22KGdA6Gcub5d8B11wwRcRM",
  "key4": "251D6bqvycDk71UMnqAmxMMYsVMcb4XeU4AbiPDaPugrdGrUQxK4Rg9JjKEXcHisJfaaYXSx36cVBduMM1bTbBQa",
  "key5": "2WR4emuT1ZZ9qiBwHsKWLeKUpxA4nUZCLmX7WF2iTHg1SeL1mn8ZoJ8fD5LBBvMWo4Eqm6c9jwKFo4NjNzwPY7TJ",
  "key6": "4nsPVc5esbGhxVctkATkz4L6AB6BZEPHfino5Gi1x8C5gLmWNgDDiQmm8ZLuBtgwrJaJ4sL8ZkNjg8jk6AwTh1mW",
  "key7": "3nxodWHbjgdsYr7qHbdkLLPDDL7BsjgGRBBJ5tTsqvTVqCPfX7wu7BNdGaPbEhi7PWsHK97UEgQgShPP7JTMu2gz",
  "key8": "4ZMmje1W86fN67zjsejhz5Yah9vnWo6oeSznjMEQEECQz5YJNbFmt1jkWHqpnV9MV9PjkGsupNqQuadcjNMEB7qu",
  "key9": "5BVw2Boe22iNGhQQ7maj2258XCwDDzAFVhCm4w2xRNL6YXLnYZ9gHhRVeYdSUXxHGNALuD3nPo9oxhMtY1f6j2aG",
  "key10": "3tXoiFC1Z9UhYZ6xk1KyKf4AACiV5aAuN7GdKf2Caru9we4SK3zVnd5KGnW2mTt9DrXxteuAZzytnrz2ApbowNhT",
  "key11": "fJmmmweQUzhVDMyhWVSRN6uWTtshQqA5Sv2wRp6opbLSe67vcvwLJXGea1tiqAX9BgHvrA7FcQH7DknFCA3tBnp",
  "key12": "4WPtJzPDn4XaTpXkDEQredXZ3Et9wnVUDdTPdzMNqsuL7A4Tzq3fqqUXAMckCpHKjsSNj7C3E3YBhvpT1HVYxEJi",
  "key13": "T6vqh35Lm8x1HP9gaJm6123iXKEZuUdu5xfB1FTGiuANyEKeEpHT5hMsRH5nrKgrK1B8CnETbiau2tF2w4VADEV",
  "key14": "2rPjRpcoxjHwzcWGi8xtSbvqdJGvpFAguKHfyKMfemaukG3dU8ZniJjoMok6UJPUip6Q5QMDgmPbt5tY3XeYaYyq",
  "key15": "5MXGNP9zD8jpKYeyk5yCpWP6v4otP2KJX6utdrF9MKiANDhrUuY64dGsuvqxT95XkiL2MMRgZtaRKPGPNbRXGpCZ",
  "key16": "y5LDuvGxC72Y2bBm76HjuPX4VPoqJa3u5dmCEBabWvo9hoe7TPb6QEWyD5VhUJkjEWNXaV7wMEupgZxYJuQn9B1",
  "key17": "4X33nX2GZWF98s7cVpV4KaawYeksRqhsQy7NtAPLMziQ5prac9fCzfiWHydMrAYPi3zEUdVCUezCXHMhjuRB7UBn",
  "key18": "3Xvp5PniupKJ9WsYtqDmsY6svAyygRcukwriSDVzzPBXWq3L2cQ4FwQ6FSyKBb1ptRkmimzu7k9Jbcgwxy3qhTke",
  "key19": "2aC6ML3ZTwspK9Mirww88V1ysU7xhbX9rFsVBfvh4By7yGdpJorpdM5VAB1mAUeWhjCWkPkGrGLipBFY4Poats34",
  "key20": "4tjKVxxiMALuspbeBY6MDK6T1bs1dhxNhvCPgbzb621ug2RBu9ariBTHEpVyWQiQx5XH49zc6moDQRF5wjaC9CxV",
  "key21": "5HTVsPb3MAzU3MksrJuvfN8Q2tBLtqpfaeMPKsDshnwtSz3XgD8e9tvLJUGeB5pdMnpKVmyBTSTiozKdNxXmzDBq",
  "key22": "3Yzu7vQ1Vfk1e259GRSec8f84uZq52RSBMGLCUb8kWrBU2eBAAYUBnwZTvKvGf5V593HUpNqyu8Bs15VG7pUYeYB",
  "key23": "2NREJwE7vXrp9c2npDtQ9bwhVVZP1yNrNUiuBWxZCfxGrhBG1An6TnK4kXmZ8Q7mfPfoon7LaqGWkWw2tWgsovwe",
  "key24": "5ri97ggRXLXuRM83ZvDZsM9n6HnH4VBDB2zYzDZMryCZd2SePd9qxiiGq9ySpHyD9Lu8poa1FJEPsFGkPkgDyYvR",
  "key25": "eXZw8mKWP3LGh1oFPcL7S1MLeDWneM7mz4NTJeGXHP4moaxTHDQVRbXxhHtYrYqASwZNZQ9eyXpBP6MphvdQrKg",
  "key26": "5w7NWXCAtfsqS1UzqHzV73PR4yCADczqnwDq9EsXerhHuAozrMvcuNU6c2bdohR2hkRLLL2Zoeib7BbpDbQ14YEJ",
  "key27": "59MjtBfLZbxKoLfMtaaSJjburd1jqJdRY1ZePrrsgLt1fwcdcxcqkDkUhraeP3WofpPXrHKxPyrNPjG6cht7gf5m",
  "key28": "2aV4D6drCMmQZZQEmHrowMNhYZKWifpPeNBNqrqHtpeX5X98AS6xfEAn27xBzM5wM4Z1oNGmqZqvHF5a3MccSFDb",
  "key29": "4SgmMjPoSgeoVQCg7pHVovmG5mzpn5wrV1kMRh2vfPABRKi36KA3VaH24rNpLvSnCqZpSjpjBBo2tQsaPqqTbjjX",
  "key30": "28K166SQ3zbbvXs9fqLnABUqovstpuQyw4kTB55bdG9ZcoovdK3BsA1n85d6QanQXKYqP82AExoGvWpNxhXZHQz7",
  "key31": "Z22df24KzsggeZkjH8ojQUU3nNT69ooKpZc2A4BEVL5DS2xnFJKNGMmJY5vdCP2Lv2kHFGAAsq5E4XwaoF3YcX8",
  "key32": "yLunPEsSvmuPoe7CFw9Yjhgx6gyqrL9t8HnGtjkS5pNGTh3whmfkrQmfCEzQoS6vM3YoCKFuHt8vS3ivr98dKnt",
  "key33": "3pMmUBp4poFFJKVEAYYhgnxNdCqFXf9iEQcJkULVMR1jB5sHHWVznim2HHqiwpLoKieT7xCa4wPPcYRqRCeL2oF3",
  "key34": "4iqyXEfoLLPEibiYHBbRRMnkqUdmKR1frQGvEp1FoB3Dy7HLd4xCDQvfcank71rVVomE4jUjkHkpKdCer7cGWi8N",
  "key35": "39RGNbqZNV2aUChcvQDH6Z8JuqFmZFxGTp4ocBJWHJb8FBvS6JsH2vneTrKBJC8UvP2WNPrSqTqg9b2D7oewwUUK",
  "key36": "4WbGLKEMtUgSZnHB6aPJUHdbRRQHvavmeUnUP1wgakaecKaNmr1rTcUdUiJc7BqeZwaXa82iyyLfMLMtRkoVvFn6",
  "key37": "5vdBsAN46ye7uYNqb6s3nRBL65CRZRWKfdLrzvdoobUY7TXkCRefTraTAH8fVmczTkEYfiKiMVGqSNyAVdavxjNR",
  "key38": "43sziHKpqjW8oR3hJHQGioQHT5CtP4pXaEDQGHo6KVb1LmGbtZMGefYxkALBqJ73BQQ99FnajjEE9v1LpvjDti3v",
  "key39": "JN3s8SXemknhYPpX9dHeiuLnkgFKzLp2H8dWkcmLepXhe1SPSEKeeNWAEsKoXnxcxYtGGxTBLQ2TDosiP92Ljuz",
  "key40": "5JdkyaChW3Fb7um3HUutz6wGhjKFe7DrUzDAmMEqtzLCFYeKJX35fM2rBrJ3HqvejutMLj8xeDeaXn7foTkcLrQH",
  "key41": "5a23TePKstavYoUrBJXRUiVMfzvfNaHAyKF7JCWSFCYkxyA7GhP8VbXcRB9j6XjUyK9F7RutM1mibGFv5XdsRmEb"
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
