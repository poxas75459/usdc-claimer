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
    "4EWBEHiDp37mCPgNcRH6rhSjgSy9s7GhZGccMzkvY1vTjdYEQbVAyvj3nHdFR29dbFKRGgWGL7MT5qm9Nv5k91F6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SxMaHSVuociw38BrxdyDAJy8pXb2WSZ5ynZi8NYTM1LC71zYUVgjW1XixyZwUcBcdn8Jnbx1PFhcTvGhKgRizkw",
  "key1": "5biDXUHEcB9fRXgergUq2aeCV3xZcxPHfbeEdPgjZLHwDvHXqh3zNxdxQgdxDrWfMxTRoyFoLyxPfBLsQrcGDF5y",
  "key2": "4nppDXVAPCz99Jy7sTbZoW4PXuoxhtPcsuGDyjuKmiJcqwDamAtrTWzpaZ3aTLdUH6xosBpmGv82jphqFgrS7iTU",
  "key3": "Mr8947PamCyGz99V6CF6v33SE8NyeUt7CoDUuboP2utVS5b6sohtfCZBCgdnddJbkbhStNi3k6MUooEc7aRpfYY",
  "key4": "3zgfJiBpwVgiDjAYttT5eXBrWtCmSHucmU29dRr2Cbzoivpw2ez8GoVbE5B3vanuwUUzQutKbNxbwKuZAcnL4qxH",
  "key5": "4o73Xvmuh8M1TEcePKbAr6DgaUbtLHxYuzxrUyTjRyF6avgP7ygp7fZ8gz6L6Qa8HmmPmVPHorcgtGxVHMGYYKXn",
  "key6": "4y2Uc52uB8zEy2XXeSzLs4ptK9xgAQd4dvxu4zP2p3Vry2N1AvHxTPNcMHF5UNqgvgsz1QYp554hiwd8ehmQHUh7",
  "key7": "4rTDjrDp1mD81kCMxG9ghGUP4W3FHmL13SRgCMvTxLFQHdwJjy6eYDrD4cpRHPvSaqXjEFnqkPKBXHcLQM46ovrw",
  "key8": "4HwKhryrs5VcAiK3ESJcpZF6mLQsir1FDA3fHBE7Jmk5DDbmFxB7iznDUnksvfNnakdHU2DXcnsZnZh9cTntHCSp",
  "key9": "5vTUMGkseyybuSrFtiAgeJRVR3JwhqCU51rePLhGq415S2rYWaANG9B9w9hWyEz8qbkjeXeTC1hqmX2wXMgSB1GZ",
  "key10": "2YmVXP4CQSKZHVp3dmC5vpJSET8WKP7U6dYhPUWbv8asLJQPGnMR5zdd9kMB66ZtKMY8SywGBPQqnAyyTkGN2iz2",
  "key11": "2JGstPqKKCSEc3ks97CfsUfDm2EpBQ8yV9xcFN4TuDLwuZgzPyty3dqfBtDJfeUrvRoZZWW7NaC84m8akH18tocY",
  "key12": "5xxvdf1AY1qmHqpVLKrgjmZvydp4aU5E4R7jL9zrRrcgk75kEnsow7GK4ymHEXH2Sg2KfEexp2c6NRGmgekrP1M8",
  "key13": "45CyM98ZAPHHR8rkk6vi9rTJBqTTjgqHyuB64M6b2vuXcz5R6mjzZo9mhJ5ZDxXe1EKhqFP2WaHREHmzSUtrpSf5",
  "key14": "3n7BaYjZ3K1M4cxH1XKxWF2R1bacWW9Uc2wcQ3PDKk95gp3WNnt9hn36HT5gmy9A3Gq26fKqWixaw6uDqwbWJcy4",
  "key15": "BY5gn7DNFb2uw4T7Uy55kRyHDPnWPV8KqcsJVFa7FtNKmxzLhEK3eAxSEY5FaeKbNBXoDvfcUAuaqjfqWM8YiUq",
  "key16": "5YzkT28yiUFgEkCaZs3EhL197UKAhMncTyDPMkoKSkVSj7hca2nPjBWt8F3X9mwkWXqAMAKMmtKPpask34WBKHe8",
  "key17": "3hdzaTvExcmUQQoyVxKnKiyjeHR5JyRwXGrRcVrKoNBqo4wor4XW9tJXNyHPRqdE6mVmGRTqsYiEEJp7AfVm96g5",
  "key18": "4KWkFqghtHELZMixau6Sym9Q82DHkxJ8fBHf8kECcR3sLanX9dZBtV9PhqzFwuHBext7CSDLxFqb2VsdtiSj879D",
  "key19": "qPNpSipCoUb89MQuuo8xH3vBgH9iuum7TuhY5gbwBdRD3A8jEtSUnVVCgBL6oV2R7ffecYUzjDuzF6aJaKcmjXW",
  "key20": "2zkDDq2g5vVzcqtgUHFzvcfpP5RJMHB8dZHfoTKHge6WwiFXodDKs49UKhoGcpQn8WEqP2daHWs8VChShRtAJKNN",
  "key21": "Ge6KArW4J6iFeCcGY3QUDgRGrPu2uA8Xq8hvZ7Cb8rEd9B9QVzvEVbweN7KPgY5mW7JdxZu5sJirS1Zkuxf16tP",
  "key22": "wKspk3K7dB8aQ3kuTdpLNYH9Pa92ijBVLnkEBpBCCiCrgw6Saxs2QFy21UwWGrFcZXK3vNZRkLfkjGdjymupuaw",
  "key23": "jZrshDs1txXixe4DX4e92sxgZ3wcnZPt8M8eZCPjgDGdJpMozPxX4nxQPfg5DN5jSDBbTtx5L2cLCwZVLDipJ8W",
  "key24": "LUCvqergedLW7ZXZuYWbQ3Qb7GYXhzruBGsc7TDBqBjFNzYW1Mjw4arnn1rU6fxM3yvqSmY74K6wrcWNz8V8mvF",
  "key25": "QMgd1DXWeEhG6YnXQexF3yMLTQnTu3RrWPW5Wk1pHYcsBMHTDQx3oDeZmqKjSqYQiy2CsvrR9VL6Zqi4fiFdEX3",
  "key26": "ueT6XSJmMs9UuKgZFqc6TjKf5DVmRWvNT1j7dQL2MX9HEF7m8du5Hs7DRJnnA7VQ7f4Qej9qkSHvq6aULu4VWUu",
  "key27": "62KDzYcZn4J6zWWxsK22LSdmg31ptLa4CStwwPkhhzmBjdxZNFXNtQxwfgFnarnUNFhWiY7kWX1UbKNiurAcmbHy",
  "key28": "5ouPBQFP5dDUXg9T8e4vvfPwQpiqRxaraajhLTXHf38V8SVdzYw5fyM6tGMP4tEsN1V52aYtMvfuEQeGxQwHPwdY",
  "key29": "298SHyEGa5kWU5gD5tT5qzp8LqKpYwo625T6vsEP2Vy8d6oNTw2MGxeeLyS7GiEc8aWJ8cHSXykfUJuMD4db6y6g",
  "key30": "oa9xZdg74kPcoKJxiM11aGrsLutmhKaLuCiNRfMzvpkA6hBBfRPS2DBu87Mb2HoVTfRemLdTXK6coEhXtjRzEHB",
  "key31": "AqTfKHkH2oEh9w3wKyAQSxp4cth1Dp4BnjCKaDe1j65csGvmAYA5bh8irYs2YFqeMJHATimgNJxMcqVFRC1ecFf",
  "key32": "KNpbfwxiNFemtxuZb9jfbw3TZPAG7r8dc7dhjSG2KRfxmFmcVVBF5YPocwR2kB6BdqW33of7eUc9g3akrVnZru7",
  "key33": "3BGS4ZZ2585uQj9GmHy3c8pLmFtY4bXXyaVWWE9q5erGKieaRTaxjAoGt4iDwAfNdtjzFWMnYsQjDUPZPJrMddNS",
  "key34": "22K6ZHximavb4HGBH3ZhSJHCXmqhUpxumpBYQNHkqX4ZuKr8QHpy3kEx8uKfF7E4C22NkAFziTMkmJDXD3XbYz9V",
  "key35": "5LRZR5CACnQWP1EM52GSoVdqByJKgA9gmfvmFuUTTwaB1n4yChvCgZ1fQR44c1SX2rGhYKEpgY5HPvyBJGUWxQZD",
  "key36": "mPCKMsqNxbm3NZ7tazXyG4UdLyk4tPoyZpR6WLUvuFH68yUEuQBpVK5rHe3eiagzidSFjRP2Uuz7Mkk2vL6w4hg",
  "key37": "5KBTwSvu8WSyLnTM12jxDNLtUu54Tv27W2k82Te43ySph3EQKECBtYFty48MHcQ6f2JFYce4VCTP6HSFhtkhDUFG"
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
