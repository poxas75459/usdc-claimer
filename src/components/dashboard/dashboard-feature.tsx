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
    "3W9kozWDoFtBoJYcj58XSQR5MVCMeAW7gcY4R4P6f9PGGoELg2XY5fQpYqdKuU8FoKztHM4TDD89S6UGsRuR4hD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MAwiyWMuFSB6dL5ZdSq7cWLcR9fabWmCgEbkSBiLMn38DnhQdkxqLGXsHayuN1du84JnxAmZnL4nqEZvNDyLsC4",
  "key1": "4ffUMj3ezb3LsLrQPXZeXAyoA2ZBGjdrWvgVwhEuitNm7bUBpnpV68X3jUSrjHko1zTffc8YN644d9uMasuLmquN",
  "key2": "4UBqxnxT7fgtBhPDV6Xi5NBabfrR3RVTy1sNTaUKitMU3bepyDGWrUWDE7bBhAUZ2d2SnHkW5txTXJtjsbxVHZLm",
  "key3": "y3H8WpmKTt3eyhKdFiwZJc7qH2NXeevdAnzuqXkqfJjwfy9YWghqpB8xLZFzgs16QPePCHG85wk11StAfW299cF",
  "key4": "57764ycPSvpizPdGzM3YwHfx7kWapCPNzb2tJFsA7hhSEZCKBpVRynMPaYiVkJPde5i8TddrQcjWdJDt39htEcgD",
  "key5": "2q2nYuVbmpkyZye6MMirjFmMbfgEytJJFbkYKzmV6geLPD7HpE3FWtFoNitUARpXj5HZxKPBf2enu2d66THDJuiu",
  "key6": "3Kj8HEPXPbvxjUufJV2dFbRn4j3qjHz6eyfVoh5TgjP3KyYj3qDvwFJJ8kCoGM4yPgraaeFMjgQstUzvfwF1hURP",
  "key7": "ZwU6b67NU8cQ2xU96QXwaZt5z9Kjp2XDEDHpFXggJfSzcSn3ZfbbVTaefs6GHr1PJhncsuDM3EYeerWdbXTEDBf",
  "key8": "5fFNfwyRgeWLC75qRytEb5uZ57iHpKa7wYj4cstcAFJxb4LBzYWsnVJEEKavs4btTYnGLij5mUDdsFw5UY8z9Ccv",
  "key9": "tmyUtJRdPPvYBBrypBxT31FZRMYu5h8fH7LbvtiQeYgVozhcwfPqwyumnG3fXXCYMvGzCfjErL3z8w2yQyeD3dc",
  "key10": "52rxN3cdSjYVWCpQxGgDfzP5UcZgYkKFXYsyaJXCyxf1t1dc7gfqcLXq4fZZh8r4KTf3ymrcdvcPqVCmjnGSz8G9",
  "key11": "2ZmTryW9yTHid2frhgYoRp7kFmQnmLvMNLpuSP9J2YmPcr2SHvGBeDJEUFEzV1vnz86rMLCvUh3Jww4ozb4kJvjc",
  "key12": "517GnMHjmMviBw4PVp4djoeVx5h9bW6hyuXaS2bowi64PAEZthQeFiMUzn3L9M6Xo3A6FK3PhnMhcncSd1JoHyD1",
  "key13": "2yZ2HMni3kf8sTbW2eiVucBH5mUkN3EKeyZQevATDbyMWBiPNmfsYFX4umjjzBBcTTVwvH3dPHu6YSkbrCEHncMZ",
  "key14": "3e6iWnMUMoFdFeEaTHHTcnbynEFxpnXgWhskK8n7knezeyyfevZKKZ6gS6DCGVNqpfzUAxD7cB7HFg9EQ7qWurp2",
  "key15": "43aUBCG4oBmsZGuteAvvkYm3TK4EWnDfb29aVtqZKXQMtArEtv2nBPAsHZQcVZ5t3wrVgyZgzpxt1tUvJfWSWCmy",
  "key16": "2C8pACJTTXd3xcEsqkkJPfQoTDxgrfY1n1Ejmjm5oqpPsApgL2uFGJWs9U1sEFwe15a4eNLqR1j7So2Fx21ZfBaC",
  "key17": "gGMvo6vx2fGaSbMybhUgaDak3SwUEpRrGNKBWB2dmuSjDUCTDA5E8izp7gBa8PwDevguyTtvn4MXooXUjCW51WW",
  "key18": "3JPa8TDzXHuEQquWXKcCdPVrRbpuqi7TCPuQxDnNLHTv8Qoh4wgrePZLBA942RGxz9QnyjLqvPYmUEPohY6p3Zvq",
  "key19": "3RcUATLG64rvi4mhYMEQ6NXSmqmPin4VCRGW9irhHAGd16uMpUqxJYuvZ2LjentggNXaSxoaxSxSMQFyjE6WE2Kb",
  "key20": "uMDanwJNDJnYGKmBepW72hyar1ouHmDX8SB68ACy4b4ecVKPihp1n18dwGfAsoMuK9hELFC2WaRJhynwtTXswwA",
  "key21": "3PMTDDwxDKcDM6A57WYacASL5pwkeYi7kkahMjwnPheyL4uw8R1vPfCqNNfBsDqvwDCmakb5scC3vHMdouovqPZp",
  "key22": "4NeSLNCm7uSqCi66JbfPbaS3d3PVisb7gNKH3wdDPsgJGjoPTPtRME8FPDYPqVi13QzEZYWPZcyxi61DKobS3nLj",
  "key23": "3pWEpaBnQ8JxZi9HHbFkTNoafyxB2HXTHrwCbXpHhXvPPEAah5iHRioJQEF4bZi8AWxxy9JqoDsTeKbjef1UsxUp",
  "key24": "5gJhuMiLFELEu9xhM15zv2eF5fLymWgwdx2XGzXSNPhXWcgqbK1QsyawDdhnL6ja5QfixGefvKdgEY2it4gQXf4V",
  "key25": "5qwYRQo3c5i5DTDat4KeVnn2YaBxKnCETVuMVtrYe7dwtMdDgVxA1bGkYcexQnkPDXu5486sLBjd9kj5DuJftg27",
  "key26": "3YXrZeZ8wZcQySrEr7zfAEFxbCW25rsT7tQBNw3WG6yAf1YSqLasrcmgQT28jPgwikeFJjrPS8qMsmHGq34hErM9",
  "key27": "ay74hdfFwiCMZnJTaE51DQXmgSVKxxZ4i6XsxTwjDsn53iQXrV19Dmx2K1yxBMUAReW48Joc2HBode7zKv13bgf",
  "key28": "53RgNsz8HwRLGsLwrbjD6FogDtN9PzoKcSmKzvkTwZmF3HvE1SbQymcDg99TfGRZpFYi8CocdHSUPrKtFHaQvCyR",
  "key29": "UWiD9jUPrJ2idfKhE4eXt3iU3LLx33xShWVqmoFuuhgVj2fcEZh1xXz2TSKLYvVWmeUxZKYLsNkj5p1ddBAXnkv",
  "key30": "3dY87M7DbLZ6xLTVkLSPyvHtTNEukmnZqZPWvm5FMzyv4BcmquUUndJrmqgtokSNLX6dqABXqXKYBUGJo75Rf6Pp",
  "key31": "2hqHLHD2XfNyyejy5Kw9GHpStqCejw33MhHd4nELDSgvUKpERfu8BnHYDFcenSo51TrFgRU7mUTYzuCeTpdiA9Js",
  "key32": "3EQzCLLLa2ykgz2fZ3p5z1WopgWmmengPQfmfSbczGnwXZcpQkKJb41tzoBvYCbP6j17nDTTQzhNS8GZFjb7iDAw",
  "key33": "JHfZMevzTFKpMMzjdvo6yieVBFSkp8zZexjCY1xAnMgTp5iZpjo5c3CezBZCK6sKwycM4wD33TtaBL4eyoYzx1C",
  "key34": "3MsfkG1aAeiz66dAw3cDbXL9J8i1hnZFsRizFW8sNs3QmRjniPdAXJUsVAsQ4Z4Av6BGPzj6B8N5EJiQrMUHkYHb",
  "key35": "kVniH3YUXx12PSRPCJToKm2c17gGtvoAhiPNAxr2QSyRmGHnuqcc1c26eUmYWnw4FesK2U63i8TEb6uDqZnxsoq",
  "key36": "54u1iLAoxwHbx3q27pGMycR2nBH1qb9pKG6U6GneRJNWfqSCe29MamvCCPJviVNWiMfTReorqRL5SYhACkw2aXiH",
  "key37": "2rrDnv7AScx3irgPuDMqC83pvnF332XV5G45kMCKMjB2Ndjp5mH3Dix5XfbZtYbe4ts7JSNUqruRjQNV8oTraodn",
  "key38": "2VUjhz8j55Hi6LbPLdMVzr4wdFkPd9RgTuGpf8Y97yWokKvFy5qFyhAYBv82dUxzuzx3iMoL1YMKyJsYNLoEcoNx",
  "key39": "3MuCYU2SYfKzdAKBpKww69mF7iP8ZSY62VMZvHymx4ZhpgbFMGpoAPvNqMWz4orqvQbCAhd9srN5MXisjeeFarqU",
  "key40": "FyKg5w3bYTYcah9GNkhBdfvkNf6HdbJgEdeGwLduyCN1aDHKFXvijC6GKQUfn7uUvFZwKaGM5aRUZGDLmaqhbxi"
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
