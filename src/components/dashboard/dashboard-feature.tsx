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
    "4h6w3YLGVsguge3DDxwK7JDqP1oeBTmhTK3xF56hpfReyzyjVa3ZFWsgL7EV8bpLWCJnYHhMzx3mf9r2dArg8TNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6AV7sxNSR6iMUQvRtyL9Tjv9P46BXCm55ANWP7JkXKsbLiomJbPf3DhW2SnPUcikxihGZLC9QUdUMFMw14nJ2h4",
  "key1": "5dvuYCx1VkEmsftLmJkh8jUq3htUcsxZRPiUVmmhuxkLWXWc5yqm9F2M1xDgNsEs7wAYM5LRvEfJGy6Lat4G5vuC",
  "key2": "cUAhUBdYaM2fDUX5kJDNGCrNjMfwG8eJbNVqHSNhLstpYhdAYawpztR8mGfTeAWKB5a32LSu2GNVmN37yKGo57X",
  "key3": "5vZYjQ5Bvqkgz4UQ6JXsVgvaT9gJW31fkT61ZLMseMKgmDLhHHRLMDY5gvPuCxAc2hR3LiNvo3bKkaVkHpsx2DqY",
  "key4": "2kx9b5U3iDiKF3oALXsNNmZN9AsVfQHAyhsjaUyYNAsvXE3E2xD5xbcCz31NRDnrNeiam6SvFyZ9rX9cHzp6mRrZ",
  "key5": "5ULt8LKffqivDpmEWAJfhABquTEbSh1J1PNW5aGyPZTnmBCEjYXnghCXGaDXC3iF2Vm9fz9dpyEbikAzcURgGNPU",
  "key6": "XET7eHfCfwuu7GmEF786yArDMMkSZgcSqekRpRR5QXeLKiWJXf9kRGt3jkw6auxfWzgzh7FYXJk2uk4aWoVhNLr",
  "key7": "4cQc58Xquyw5nc2tqf6gqx6pDt5Vvw5rVCQMuL1iJY3uzaNq8g2UUBszQ9xsTNg2yDr2EatcV2Ho9ChK873nHENV",
  "key8": "2snBwr6nJxUkkk8HGeh5aoN6wLVfuCoMNELGzdEbRB9bsH9vPC9LEMxDwmhw5osTGd73UpbFUQr31vG8XkPvcGmN",
  "key9": "3682mBoip68xpucUeKMdkGAXt9n6pWjXKmKnLzgSFfamm5RsVTiG3uJ4S9wnmBP5mU8WrhD8qCz24tVczY9zazV3",
  "key10": "4BssnU7uoJNtsKfbcBzUwSMyAZafumDcYBUNoqrwN6BVXpYC8pZWY5uih2yEKMDHEQVZN9rQQcstcqvmPUaidky7",
  "key11": "iWxSdsUTKuPksNPinDmWYszVp2Z5oX65xGtgPRESujWLnQKKTZJdyo3323XmpH9s8qvKRdvXzb412jZCxCzdPbv",
  "key12": "kMLhJZxrmSqAxbJGcmEGWvZ6EjhfGvvSDZtcEVwG5zZYZgk3EZz1jnPTzRyFdYZpFZLePozDpYuA4QVEXha7VMJ",
  "key13": "5JcxCRPW96Bb7KEU2EgRysE9EYm476iYPEqN1RZKzrHCdY8xP7Gk9tVjBcfTzBK4PUJh5wW72uUGBb5WP3Bk1o3w",
  "key14": "42qZFmVZmQSLmduyJQ5Ys21AZEMpVnpt2oUynPVxeq1PUmkxZDdVttBcRVJCRsHDdEYCKJBuXrpmCmJunvXPrbqH",
  "key15": "4gSr2cTSaZP3iv7WgARzSAgaNV5JTCp1HUY9385x4tNZgHEL2pMfu65ub5CKPKLfnnyHMgmUwMki4BxKtmkmr4DM",
  "key16": "3pY2xSD8Xf91ssVaEhXgudKWfCufA971DkGdXpaVUhfyr3M7GrqJr9SCY7ytNvuJXRTgr6QjaMvNZXjxdirURdtV",
  "key17": "2ezNhdGN2fQYHVzBS8wrqETnCBXCKpM2dAvt2hMKpbudVz9GmWiCVPVUwsLdeXi2yfuANuLousiAt4kTLzDKnfdY",
  "key18": "f2Sargyw2p7i343Zi8R1t48YJNMeHZVMRbtXpey6bEYutMFqDS899HeUE9gBcHAMzy4zcJcUerthjZysHz4dZ2p",
  "key19": "in1aqRCrjdXtbs1WQr7sEDgxxrFJzyDmKqSqAhPKMUFMkJ1MAqkbucWGuqn7sEmj8K2ZhAVjCUZdAp4mxQ5k7MT",
  "key20": "5Z7DwZXa1ssM4AzY5iK3Qz1Rrdgzgu9zeFAdq7zX6u8bkZQtGGw27AgTv5Q2J3puTwJfeYhfY4VZH25XpXQnpLoa",
  "key21": "P5JVeoo3Zj74u6AQeFp6caBh3YGZkjTeuSHJxeUz1pxuPi36HCTaocRRtdtvrdKkqbkbEsCNBzRYrpz9ChwJhZm",
  "key22": "2txbJLR6DVZjk2QWNmUWNUavDVMmwR7JTCMgPGDvHM87ufKTjUXXF5MAu8NgVVFotXp5EAqk571h1E2fvijr1XaQ",
  "key23": "5b4hBZBDqX1iUVRR4yXfFtnqfwGCZYj3XsyqhCXkCTXqY2kA41vhoqCt1Vdm55JeZVHa15G6FqEaCp2dPEFfkRn9",
  "key24": "2eA48xDbCDDgg2EtnKG6WKYePPHX6c2MKxsVvifmJ2XxcJUH6CbS732aokgPMJBNpTaqejmcWse7kdpgDFAAneSB",
  "key25": "2SSuibZp2JGsYttiUHBpZv1xZnTp1qjGEyTa3gAouFPUr4xvuG41sLRuX4DzmxkAXwK5SCQnTMCnKPQb8euEzKNV",
  "key26": "4uNsNbfJXBZVk73q8zgEcZwThpq7EJEry2EzE4u3ToKSVLpdeZfM1GDD2TsV1DRXLUeMvJhQpcgNmapLYwmv5gmn",
  "key27": "RXvHhwo9gHbbCLrPVVP5c9J8FULws2q3FkApzPHy7e2VaLMDGfzNLPB8qNx9qRcpdoiJWssxRLJdtmTs3iJJVRq",
  "key28": "3L3c7LBqPhusRyWWbUMumFYVAbh9958Wna6K2GGNop6mkAk746npMkWyE7FrefnAPgZqjwtbN5PdWsYuQMfp1BtN",
  "key29": "5Q7CAbjoGPTeU8QXSyFnPgMGBWbvt2wr49rzR4BkhpBz4BMXwzkGjTXDESzLK1ZgY5KcV5AxEmVGuJkZ6xNrbWkc",
  "key30": "wXBLS2Mda6LhZhN5mVdS83MiH9VrittUhq7bJMqxZ89D7qSEaJh4APeSqHaKkWkh2ALRsp59hsTsBa8qUZcxZ5f",
  "key31": "3124Jv3bFfHB2gdfSzGqN8cQBTieJAYSUP2qSH1qjYQBwrYkcQGZVtc1d3hJWzkBtdodqc9jksupVDfSwRUFMa92",
  "key32": "36nN8Q2rdpbHfY7rdgBD1TdMP8S6a1gGEfKSw536fX3k4jHCHQrTc84nXotPvx6cdtuDA6pX5zcCdcD4Fto7obHg",
  "key33": "39X43BUwGv665uBiZdVYMj4KufDtinVzvq21j5SisgmboevJtjgJfKGo3hZTrvoKN7y9nT648KvTApqstXwFM8PY",
  "key34": "4HatdWNc7eP2t9UN4zdfLYf8m6fPSVagSSWTbiR1jeygSXxtcQ9iZxXYsFokSXqVJSeBnZoqKdDakZWh2J1x6zfh",
  "key35": "ym2JLmzRnxBqURwHsxv12n6j57s1nZusAH1U7qdoz2xwEnXHFkytdG71EbwZsD6e7FYaS8UCCJ3BsRtvb9EUEsf",
  "key36": "CFrC3HxaB3jFJQriuuQB4miQSK5LPgSvC5yZVQDTcivrgcLNexuxcNtvoAJ6DN18fXcvHuK7eyzxoEGtYY4yBAE",
  "key37": "PLpfAAP1EqBo4gtgDEdYHgBziJV9KWSteMuVTYWEuc8wiyNDcQPxyjW2YcvZUBwSJFWFHcZBqTgLxybr6qAAsZQ",
  "key38": "5mLsoevzjnzekSy3M7w57Jw8gqHNVhL3YaX4g9xuGuoZghn9nMJqngvc1qR6ki7bEYiBsmeac2kPYztmLqn4xGtw",
  "key39": "45fxTKp9fyJKrSCWcvKUFRFXr6NbwbJPZhyUXhy47f8Q4oEcssNabHXB8BJR8iifZyrm3vXQfr7X73mchVprXmTA",
  "key40": "33AP6exXAzrsqoMUt8YwVyL5mBmV8whExk4UxTAkywyzCSk4TMajUz6ePWcJgWzydiGHQzsiBhq3SXicikvo5Av9",
  "key41": "42BmBv7hfmKVWhYWHVbC9RSnRSmKex95fzh4vUU9qREoviN2gdwwYFcJ2bgMbxi85w6k8da7WbHhnhRjyy8CoBMA",
  "key42": "5yWecHbt6Ad2qonDoySqFsvavS77G3DZXTBhRD24nwee1mpAi4pu6jH5A6iKvK6KJfHtTPVeV1N5vUTRhg639q7r",
  "key43": "SEqNf9p9f72JtmqafTr9TxGou4QVGB2PQVzoWaBrbu4uP7DngcFwLLiG14yWeovLTvDQEPKhdEaJ3uYZa6s1iQb",
  "key44": "393s4Heuzph4nnJ1LMCLTMXDz158qpvQLRErpeZm3MBxPySQDqRixYK5o658iNDYrjduoLyS26H34bHXmwV9fRBT",
  "key45": "3PpYDLZu3xaJsMYKxqndZmHfmvbdoKkCd8QZfXSBFsVDA2p6arzXKusDhY6nT2Gq5vjTRpoPfd22Sek3CLvUaioQ"
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
