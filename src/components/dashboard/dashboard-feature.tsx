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
    "3rJkt431qGX9qoGEeuUbxBF7U1Xa4ghbVbuWkk5PvHrHMWisAcnqYr5KGA7gPdAqj6pGdqVy4kmzk2shVZ97PrZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PXaQwHz7Nk62z7JTqLfrrzRxzxch6DzToNbKZszqrnQrMhfKSjWzEBLoFJhxGxKMBX6SqWooDGNF6wfx5HMWFHs",
  "key1": "38yjx5SumtAEf4rxK2eZ5s93xt74y9pvqX1xLg3bXxnAH9dydrbkVmndfNwHLqi6WHTqk1iXGVzZyxyVMSk9xStg",
  "key2": "5z2JBvmo2u5mZjBgXC7oPJwz8mZj1bEDJ6zvrwWZ6dMa2wJ7uAX728XUnrRJC71qSpqAuUHcYHmZMAG5kVoB6JeW",
  "key3": "3o8GPb3UuM2gssuC8XNcDba9auqRD1WEtQ5WuWmfEVjPSYaKVcYd2mtzdZqjMEiEFDWvdEZZZojUDuSGqSq2o7Dt",
  "key4": "5rFhZxPNqUqijkNMrihAH2iz7r13MJpH7a1ybNyfswDDrtSHQU1Ftcst6mbxws4RT3KB5bLLWVNkhzz15snvbFM6",
  "key5": "46LQyhsmcA7TGoDwMA9WUvcYVDjgst4E44gMFdDa1gXX5Fn6RvtP1WcVvGoWNX55eF6TWeixDSbyDSQTJQEez8b2",
  "key6": "5CbSL2Pmea9asu3Sh4TCjXrAQcVa3wYDDj1Zymb88Zkw8uFVyXkYX1dLtRnntZJ6azyRzJ9ca6dFkXC4j964TEy7",
  "key7": "3b5BSkpPAMMk7JbC9PwELKbKXofpoFQ4TjoDV6KZnMs4pVe7zKNpbDdQL5P8QGZHsmCzELKsTcEqvK4bZ6HndZFa",
  "key8": "3ngUNKT4MHss3RKfvT8TLN29cBha29TyPSh55qrD3e4zuY62sN3VQsV1ZmvbdgwGFPMHLVASt6TtJuvK6Sh941RK",
  "key9": "4QfBk3cPBVuRgb6qsskEnUcWtwPNPsE5UxREEafFrtqZSRgjTYRRJXcpp5ykQhVyVL7oeUvvxSRAHwGC6RHKsyFZ",
  "key10": "SCdEbM8ncowniMvuNk6T2r4RVTkiiL3Fg1NYN9qJC3exweZwucEe4r2LJeLQqs6s1g56nN2uaB38mxMn1Bf6YMv",
  "key11": "5oKBt1FS3PFHwy4H4km8G77o3CWZhTdZc8YP5ZQitwJXxFjs9yDDnYoyuYSz5fqr8KCQji4cEcuG4u9hX4LmAbX2",
  "key12": "2XuL2Q5yK6BSnwG4ssqGGBz5tAcv37hMputJ3ypNWSLe2fDe66Kii4iC7ZL7Ah15SbjouzNKjPQq4zD7rYsGpDmC",
  "key13": "2qFmcfGSL1gnpWiytS1fGBzJjF6ARJ71VrKb35Du6eqQYoZiY9BKJ2rxJdALogX6c4FzNd1Jxqjpx2ckotLVtDxd",
  "key14": "5M5g8jCCkYeinbpk6SktdAkR3MtbqVy9Sugu7PbJeWrZr4SjaryGdvjpsjoNyhjGDzsNWG4KMMi9M8H43Q8yUanU",
  "key15": "4BEehF6EczKscdgKVi8rjoCWQMPSJzyUo5WDBwNSEXBu1DP3Xhy27bvYyjE8NfDVFyhaLFa4eszuxPsSioFxvL9N",
  "key16": "mj5mp3kCZY5vLXLEtoRFzzXAtyq7JY7YV4oB5LNFDDcJZ9HRHk2vF1Y98czAknNKsg9uB9io2fr5r9acV8j8hyP",
  "key17": "2c2RVvHmhoQcpCiV1apYyPjqAqRH5R5MoNCTJRUWGhBSgUyZzdmKzECMo79WbWfdUzCqEYxFMtXsjFvpUuMn2xda",
  "key18": "26zLPkDfLizdWRJuq6jRfhw4p875WRiFF2HPaQXrNK7pz97HrX9sTmwNn18Gfb23y6nsXZW587XnpbCEGGyMpULa",
  "key19": "1a4TwEpFZgLMxN32pYeBxKo7AWKR9QxUPtSop69hw3ynPqxQRjrqJJLBZfTNLHH9aVKEcnRgJH77JfzvpMsWyrb",
  "key20": "3yb4C95YXkUn8e3eUFmyvDLf1Yh8MMX3ZSSE1juM4UHcGLRrCYiTmfn4JhaRkL2gsNRRWGhqRYUrFPZQKkqdBZrY",
  "key21": "BNh3h7kbZatKeyehEEdasit16DjHCfYwaJyNpgjxEJ5EQndDo6oWWSTELNL8Ra9dqhrmTntHcwoSoPWY9ic1nv7",
  "key22": "5LQKv76Y3YTnRXFMtWU5kRRKdH3Xnp2vvroNvgYDz14yEk2P7maHeKsK8CEgJ5cfFsWnDfCSRBKobH4kMkhdESAy",
  "key23": "4H7fyyDfnEPvYQ2wohtq81iNNaDaqf7mpCZhba8HPDxRLuUFsjiEarQZasGy9gdgKJZKLDx8v8qPfh4GqgSSTbWb",
  "key24": "5YMhC6nmSkCSQs4UrV8cu5Ea75wd9w6ubvfUHQxbmaxC8i8awsKEWNe6iHCdmewNmrnEVQbSesG4YT9F7ZdhT2oL",
  "key25": "57hVCcRy9Jg4Q92EMfBxF39R9T2up1ao6nMJJjSXp7QBcUGEDb7DzupXig7qzjBhHB3DGwR1d3KeaPeQTPHWAQq8",
  "key26": "3wvzWG3YCgBWBQmuejJfNEqYjjWK2ddssMY1bYdtXoPJVTJ7g6vJjqZmSxi68vSMh4M1W4ApZMXpWCprbJGHmLnb",
  "key27": "3BuQ2cu7vkraU3GcF2NFtCq5MCzwJnMvrkHqvFaeRunGQ8idE4rR1WgJC2gEd88a9nKMFUGuVGKxFx6XPtrevL74",
  "key28": "4B76FqEUJaUKVDRuj1GK29CWui7sNHMz4ngbJNAWuPNBPewjVZXThwqmVJoQxWPy2aSYUhPFcC3RijdLXx7MgU2Y",
  "key29": "5v8tzEzPHnXAKq5DHU74SogtF8GtR6AmEwVX4WT8W4Yc4iYXb54x98YtSabj8yGxDVr1MopEfVyznF7gfUWDToWq",
  "key30": "4xhHzRTgwXArRaCcB5yroqRxhmvnenjoZefyw36pvE1M91s718BsTqCBvNxeMonxW5fQmH3dPNtyhPZjbLraXw9z",
  "key31": "xYREgBqhG2FbseerWwgDKR1hF5EAgxattXWFiiJLVkYHqFGfQbGov7UnojpHnTWopeiZMxeouU1SwC4ZF5DaB57",
  "key32": "2LA9fAPL7KUFasfioADC2EJ2hLgp7g6MsU3mruBdnp3QJrrHcunY4sM63oMBtysgs38YxnsbKdx62dqmdvjZWyTu",
  "key33": "Kdcw6ah2udhN8faP34WcS1uAY2Y3mvZAreY4vWA6z5BnWcC7R56MBvTmxLiyJZhuT7wHh8psZZwVQigfVdDhTn3",
  "key34": "51KKTh3fE8WGLu7yMQRfab7wr5Tde99RANuymdpznW5dwZyKBWn28fmHwngxLrm6AnxUp9jrj3DyZzAjaQWsneDs",
  "key35": "5wc4U2pRDWtDPVZ9ndLTSxoqKHUM1iv8LVQ7C1Jjf2F2Efubz5gMmiuhboxM7gQyMto5NtpEGx8WTk4VjoiTiCaj",
  "key36": "27MR8jLi3tzhmu5wW3MJKkEPyr6eHpSU5kcj9TkVtFcHQ5mgGauoaF455girdSejHRyjwjnLq1nRiUWQXBm3eBbn",
  "key37": "38XNvxbPC9Wq4Dc82wEKQisoCMYZuwCDSSrdJ3i6k9BzavPYmhCuTXF13WqWjfmG1Hr2eD8QWCdHXJAUssnVreoV",
  "key38": "2SX6eFATEUB4CBimxZScsF7Hqy4YHP5yg64fYznC1nohSFKczdmvYKQV62kZWLbykJbGDcUXvBGTBLRhCHRJUArS",
  "key39": "2qYX6TdjnZ2yx5pirmR9tCkjX1CAWDmRzx9eenRvzJEPgVexVtmcSmvKVgFiG2AD6RqWYc6pP8SX82tRBaDiCiPt"
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
