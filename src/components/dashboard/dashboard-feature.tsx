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
    "4aTXAJoCJZgdAvyarsL7sajpqLX5ZUaw2v6Q9SSEg3m4wwYCw9V3SMPkZBb5uVvXPMnfrTH1avQKpQHuU6T1sV7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DnKwka6uDgdPZifcjfEpoRu8JX8upuaV3o8eE4k9gQKAaGtx35FcpRyVLFBdd5HbYwY8hBznohwXVEvMR8SrLAF",
  "key1": "56NRp3aPLqfFSeBYEQjuC5Z9wwXmA8BuNs6dSPKb1BjtTB59DUcoxQdcQuvrucbyUtq3ZQjPt3ZG8nwskoes2U3Z",
  "key2": "DP8KP3vH4tGmcuQM9JBy1PTjCAJ1SdR2bqjbkbj48cr94B6o9fvpdnwpDQbFsYZtNa7xkdLLNZcxLHCfJbYbDKx",
  "key3": "bPLF3AjsfgNHMRj5yy2CgarFXTW4WgSdmbj4PGguRKesRxeg2zpoDRFyvHbEQrzMqX5VeCv6M9t4oVthnXFLSrt",
  "key4": "dJXC3qitmTF1vcjyDHBj5uTKT1qiqeNLJrtE5nXpYcFMWafo4KMmMoix2eqcBEY5qunssZb1bdByti3MapzS4ss",
  "key5": "5FtMuBrveAQTt2oLz7A4qa9EYGtTAW5qsFNMABkZwxGkkdXe2HS4jsgoLbSnp3SBsR9ECKWnztYrxr78hjLywyAA",
  "key6": "62jyLQSSnXxoq6gd3HtvrMHxFjiqeKnfMkvQnQjMoF1zUmBEUzxFR5QfLirFj3MqegYurDDDDJAfcBcE5LoWMPw2",
  "key7": "3vcqJDoWMFmUk9g5weUCWdqv9CpNuVkG5JyoPbAQ1V41GR6K5iNdJgxwAGSj78Sw7EyHVmReassnpvCEtBPEni7g",
  "key8": "45LBgju9G5LUQf2nBx8QZEt4AsJprsV98w2TM3bTcozfJMR94pKfKFM5wvQMWs23F61EgxZ72zAG8HYcpgsXxArb",
  "key9": "3D17CUHuThTmhmATexhvq1sZcn4M3RapfrXMw77Zi4h1uzggVmQyVceuhUXVwq43xPFgm3eFVtkCqRaqdGw1w1tA",
  "key10": "tvNm15wM2jwkqXq2fhMaM3a9nbdoFMPGv6UAWwMMwg8BLETdMeWXTHHEZ6cqWjNWWnhDwKyyCmXhiSTSaNqhjNE",
  "key11": "dXrcuTsCFxf9x5PvrzrnYbH3xzWfEqtSFKz91CHaWC11aBbjeGKzjKoyjrmhqswM28kRWJxmr9YcsvMd3rXhfcQ",
  "key12": "4FezQN4RDvqyTzKo69b1fNjba8EboCaGfVKkcQNVf5BK9Uq552TMzb9RVF6Mvf8a4YdvW2rMxkNxryzcJotLxZvo",
  "key13": "39nXPHG7GyUDjNY4ULfGfmEeCWrLAdVKhsZTkQ6VBfsR5p6sQYz35mr5Pv9nqVnq1c4KHd9bVCUCGo252epPAped",
  "key14": "ayitWHu18LdVVE6AP4dujLZY2veRW9sdvvXoQHsGR6peukLoCtiksv2tCz7xXPHBiwiGR9GMv9uve9xLPEZLTn9",
  "key15": "4PkMXNr3tMNA3hYZeYLjA7WBzt414WqFt2dHUECsYuGyrp7v3Vf7M5zWPKUrRCuyEqeRcq8ugeKehQzVxEJknkQa",
  "key16": "3xTWEv6JArtZHUGZaLzft8D3dhEvVewCbsXbq3o1xZ9FiNjz35AStGvQBN3RUFmyTixNUuLQuD42v8ERDBF225Uo",
  "key17": "2wEGeCKaopySh639uHxSc5oK2VPqr31Vj8fgPMdK7J6uWRUv7yyH1Q3XbmsNeRGALmP8WvWr8Gx7sLxHc3V7DSzh",
  "key18": "2r5E6hRwjBz7LXaEk6awmmRCqkA5gE8srMaGo8mE1QjxdQCaxTujA6ZTUYZsDCdo7zuk4WTnjVwzK9GwguNDVXDK",
  "key19": "ZAvTmUdXAeenFKieVyKZbVAgk4xtzrohL6Kb7ZtMuhixGyJqXfVF96BUkxP31vD1TieqYTuJGDSwjFA5eoXVcQV",
  "key20": "5y3MiGD4ZqD18wdZzVmny2QPtMCeJJgUo4eL9wY4dmDXnDZ6RCdbVZ1SrZtB7NwMsYAGULxbDoUzVgtQgZQpfLK6",
  "key21": "3Wn9kyVxXZWAhmQC4o7dX5ges1kbsYLHrjVo2iE4G3VdAetG9Q3ZXvaQskhkvPrqzSbTdcK6hEGjzK8meULJ8NPP",
  "key22": "3tGEVqZovMBDZVFmvs9advoX6oSAsrgzAiqKadvCcCHJU88QBVFw7CTNH7d35P4UVRvEoUJvbBxZK7V4pfkTrZc8",
  "key23": "2YJQbBEE5hwcSq3eqWtgyBTt1WkgTsGoxYh46JbBUWotzyYDX7mJpK3FXooyok8DzJv8vaKBNyb13KxcGeTxWgWn",
  "key24": "4zmgRF4EU15CwSNnrGouRR6CCDSWxvrVVVuwFuMRmCnkX1qAnTZXM7nC98tpC1vKsmSdms8fKih1MqjCMQSxSvvP",
  "key25": "2EXRJfC3ez45JpsAGsxvAbUBSxpgENe9qXGoq5gbkxHhrT8dDSPUnvSgSZ7jCfVb2iVEgYZvRnLrSV7Beh2q6qRj",
  "key26": "ph6CRgXvJCvPGzNq423o8j4iHKuGUVD3b9FqgKzas78FrjNyAeU1VP7qo66Wj8MVb5dzHiM8TDniVLrLhxUpCfW",
  "key27": "4vnNRFvkSSRtkdq1uFJMTwFhZcJLzuhr1wdzKuCeV44uXYKis38JGvuT4pqDx67qxnjLCEtKVrisj4zubFXqJeKp",
  "key28": "Pfd4kvGFkGzkCk8enTWCTrEVL6KKgT2j26fMpytDsdqVyBV8n5EEFsbberyrs7jUxBLg9CDWnrmaH2Rs8g8QD2E",
  "key29": "3nEKVgdXfnXb9ZPpxCV83s2ZE5vUjfSnmMv3GE6JWaAEBF615C78c1pTzX6f55pn7VYJgffdEc7or67jg88RZHYL",
  "key30": "5mMqcvKEkDXHz45opUtdk8j2EWgufhywJwGh8U3vP1TXggw3Af6FSNUsLS6mPXpfi2fuRCWGE8LU2EvU5GoeYfUb",
  "key31": "5RPtCgWfkEEVcKFNFTpKRKkGH18LpTCetV6ez55YznTeHFAotuqM4xub85onLxr4tJXs9E3NnBNC67adAYPdBBeW",
  "key32": "3DicZDkuBvn6FqJpSaevgSNyrbhzAKPu5tdVxuH4hQmM1bbzbWeSPh7GiMhi8UaiuTh811fESuV1W6othXRcWEPp",
  "key33": "5SEjXgNWCqBSiPvaUkF1AWiwWRzR68DxPtUGMdKtq5CaQw1jySjsGWrHgxbqTDAdch8WTHhxsadVsWf76MEDnZqa",
  "key34": "4Bt2y9DeiZoBjBdjDrVNh5XPtijouAA3UQtDK86bqBjuzssFrDx4gBSnV1NukVFkwpmw4DY3yADaDtjPSEZe4Zk8",
  "key35": "26YmPWExwEhms1GMbpMmq5jSqZ1ktGo4gEMx2b2Qo1SLqgQvenDQdRYtH3uPfHg82fSPrqbA73CJVMJFSiAUtmMe",
  "key36": "5VzmaK5ujHdvuNbZvMvUWGnoy2BErAqEdnGEUDNB3DacB6jUY2GN6CshecNaYmu4stMs1rtRkUKTSAoaUmzCJrd7",
  "key37": "4dXZkaVozrKnbMtiwjDwSCZ3rzHUF7hhywW3DXCiakuE5tQ9xSwaFZtmWdVnMcaZLbdK2GfwyL54C7MTxThtoxNT",
  "key38": "4y6RaRNZ2kzHfJcgVhiY8ZFkNfdQ2t21egZLZRtyRtzTxAbstatMK5YfxBqseARF6A9Uivsc3kSxPsguzNBuFDSF",
  "key39": "36jmbVpU6743gBoKP2WEGmYFYCQbfxncuvH8xWKcDvnnYzYi4NuneQJwN4u51ve1bdUTZkqfWDJxwXrrQyzUcsiG",
  "key40": "3mFQ9CTG4VYPaAkR2bethwxr47uPkr3U8RnF1bmEyzykkaeVWH7xrejheoKG4rMN93zFCoSnkbCBCfh9yUrjjZeC",
  "key41": "vLUu5tTHYNakPhbcdvnfUi3jiZ2eA9dE9ass2eW6qLaT1wt9xHibG136Kk31dB9jwkmmFHsy2rzcuxQokUeUhG3"
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
