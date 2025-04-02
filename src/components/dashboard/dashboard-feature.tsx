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
    "2rLb5gh8ESDUSQSZm4qf3sHcqM5JGCNeophEqhYeDepreXxgyfad6NhvU8aT8MFPkvJPBXvf6u2hobfjnFrbESNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FyGPgKHAa5UFFf4hi9HLaXGVrnnxcRA6SgccFhYgTzjnHx233FP3Y8HBcaLyf13a7brRkCdNb5LVGMNp6Re8D8H",
  "key1": "3toKvFnXpi9YyRqkU6ukQcwTk8fJtSVKfiBtjbQf3yRpYViYfpX8mLUyMotyFBaKAno15ZaXP9pTUCc2p7q7wtEM",
  "key2": "4oqYB1H1vzRvSUPQy4fxb9zGQtBWUUq9YgRqZ1G4jt2UB4gFYAUGGRXKKJoTPWTeMNP8DXJEwstPRGivF4JHCpnY",
  "key3": "2qes8ZKrd1JrS29kCEZhPeM9qgtXKdCSsS9Cu51u2gjEFWB9DT81vERXub6VrdGeQ1GD7GMKfGKT38bZyxctWgB1",
  "key4": "3zkb1VQfFcSHpJjmPiPx9xhiHu5VX461FpEx1D2Fkawy2LcQdRDMtwRivcMNEPLjGRW513nLK9c5KNEBsqEh8pt2",
  "key5": "3TU9jM5so9EfJvicjECRhm1T7C7rP2seCYv654BTsc1k4h56X9rSoWa8Y3w7JXChbzxsHXLdoNDpi2dk5poHiRw6",
  "key6": "5HwNaLbLRGBv2d9WDT3yLXUeKHQFgSFMXKUQ2mxANKktJgvnaQUJA737vxsUZYimHvJsYVVYHB1VB3hUNpbECRZ3",
  "key7": "5iF9Ddq4dxmkEDoQi5v71a4DbX78GpWDoGBgwE4ep8DNG6SEiFkoFFahra6LmDtqotWC63fcQsi14BbAfcouYNgf",
  "key8": "hwZGHvrvLppBcEjMsi4UHMXg3DNMBJWU4Yhe8fCKjCudWVKKKfc5PzCxXZf1Q42xDNoxAwCJhYyFTFpkLGtCvVk",
  "key9": "5Shayptpbq8cRpGTTRkLxBPqqnrJQkQWs56fZXeVQ2xNpFtgVEqDRQTR8rmLXPZFLJmWHyYZo1n59Cf2dYZ7MkfL",
  "key10": "4oe1ZivNi6bmz4Z3Xi1uZCHujRHSwfutgjKQLc6ydzYLU4RF6rN1ZakhivYmegAunisw3aVycoGcKKM1MAPPGggm",
  "key11": "4wNxwoaJaCSBWmnrY9cqYrCsED3zF3D9AEn4vTkbLSrqhqYmW2bz9gTPdoLdK2Ao93v88Sz1eRXGin635Em7nB2W",
  "key12": "5pdgoCyaGvFuUG2tuaKBtNpZL7uynCR7ehA2p5rFBwXh46GeZ5mrtwPdh9eJEyWMw2PG4SPAyT7yB3eRrMMRYrv6",
  "key13": "61bbgEvJqa5jFmvDENjCaYZnaUVZkcfQyeXoUXzFuZVwAwg9QNjDFbVBhVS9MPxMuqSCnsFNmUQ1zLDyNobgfXVB",
  "key14": "49kGE52Hkc2ReFjK1uWwLEPi56mJoEZqwiDLutsv1iQaJ3JKXB7f3U9B6y7UyNEa9KJ2uGR42fjEcMyH4e96EB9x",
  "key15": "5ADKj3exjCXdCEFvX4P61u1vpdf3DD1z6xLcnGTs5e6J3AU71TQPeNJMi23cqj8SpfhyWzayaQ4NguPzBnAxwRh4",
  "key16": "2qc9odC5Y6SLUuuJvm9y2SxfTW4aSvR5XaVeZPGiETDFiVSqzq89wVV7yuVU414tzGczYtzQaVqJZiVVr8P1NdpY",
  "key17": "4H7YyVf99AccM3ynxdkKwommLkngiSgiJq3chGacnFEQ2G4eSJrascxs6HRUwCNxX4fR52mBqYfcnX4VkUf8PQRq",
  "key18": "J1onj4pgMgmRbbpTQBtBXs1TqntbsSRSgkEEt6rtapPEN7RPFvy8piuzSpSK7qCf3hx3Nr8fK9VCbaWXUoNi5wn",
  "key19": "48toNr4pfzZAV7m3Fw9KrxPG6RtpqiNoQx7rHRPJDHkFD2RWKb6upo1miDHxoP6XU4BEE1tXot4E3sdHwqD6BMGw",
  "key20": "4RuEie1oJ25tq6NWSutpC4QhGBmDrDKJ5vnZDmFP9kg8ysBLUQbjRuin2sUFRQCMQYsXHaRG7FUr5w1KmsaDD6xG",
  "key21": "377hhzsDSDLbsHAvjA4zpPR53yPCoMwfU5HBZckJHQMsWMPtA54oAyoR5JWPxhAy3J7v2uBt1MTPh4xqceXuTkFP",
  "key22": "63EpZCEuCmniRskgAeEgvvQf65J3ZS9eCGBKw7GpHut6P9TqboRywgcZenm6nEQjbHnqb5ZbPre9CB94nEdpyyR8",
  "key23": "y2nuhsYQEo1QqLs8Mx6KNK63L7hWjM13Bm4T3kdsrcnNff4Th6UYrcArGSTjN7Q833tPdJ55eTbQwNKf7MdjypW",
  "key24": "5pT1WtHKxeZP8aguZYtjwQBJn5TkSmmy9u5rVFY6C5GsYRvUgZrYcDiXqjZHs15EA5SEj2r88ULUbXb1LZrwZiFv",
  "key25": "49T3GP4AL96TE7dLcVgrDLCdBkJGBdRaMVSg1hBeSuF8nUrvLghXg6fHqvhokSEhLDz63zVDWxE7eMRyqHQJ1WLu",
  "key26": "67nEDUPxMePqZbeKqzEDQydEFf2emLGRTzcEBMjdVmjGeYNkRZGZ7xbVwLKLoigREoZLiwhPke86z99Wav7Jafvs",
  "key27": "oMVi6rk3iAQc3mtNzr5LMgpZXPXGvYLMtY3AsimmSoD5f4TxTKdXU4yzmDofWtWQtuS4eXkZQZGTbyVeMcQwTzQ",
  "key28": "4KoZ3Rpd12ALFS4WNgYTodscSG3fSGSnmWyT9AxTobRiveRyrX76oXKCxFW6kfbTPGZCDpPDSow1P2sCPHTa6V5C",
  "key29": "4mRJKoNZjCYp1exC3CFysg242XVShNCq6gv4zApq6H59d9wHNP9Wm4NhyNsnXcvTrGjSd3GNEJTy9LJCafh9d3oP",
  "key30": "EPDKsZGv1QvnokPTAfYSU6P6Kbp411Y3e7jZPuLYa3p7Zgn7LYBuiJB1e2XawDTb5s57H924VqEDvP1LtksbPiy",
  "key31": "SJ9Jp2XA1rW5jimTaJ6NWJqHBxwu9LbfGw2vSzTavNmNjvSNDmpQKbnysTjrouDnbLJ5GwQi9kwmjZx5JcHJCXE",
  "key32": "2LKbMf4yokvQpmHqRgoRDky33ZSywUvE7VvoxA81Nr8a1j4dLU18mPTst16K2P2TQVpxX7fvq87g5ox6ZiZfnX1R",
  "key33": "5ezJkYo3QWywBgZwJLhiK3oLXa1mDmaFvWaUTWM7FfoRuyMQFDpzq5sar7UWZKa5aSm2hrAqHDr2verG12HtWjdV",
  "key34": "5yXoLsqYegGhcDC6vMCWQsegFHQCfLeaDg27WwfRxEVWYQhfQ7rhmBCMheYGwceNoToVjV5PPhq1SGzcFFuagf6t",
  "key35": "2RffEZbhQtDRfnWZsXruQtWyhkfJAW3zrK7DR59LtsWrYaY7eDyrxxNmHqczxaLBifutuQhsEgRFZ4PTKRTnuyHo",
  "key36": "3qW91MjjaXhyRBwhLsyi8d3xcyqAAhCWsYMD7jrLMCnDt8yEA9kohV96wmS7VQz62Ex2wyaqc73mMXmUXUNzg2fL",
  "key37": "5ZwXxk48ZVyeAWtYfVpeB6zWp5UL4sgpnDYE6ypoG9TgLKhXfUDMBz6Mxp5qRH5FHxxZszTuBzrKJWzNLfEovZVd",
  "key38": "5zDMj1p2W1GFv7PLrXLpMK421gh5U3zn2EAnGWu1dZoAHnmu8hG5hh6gywY5uS8ZqCAiZhWepdr2vDbQRsWLsx8F",
  "key39": "4qpmw1ss2CUcynZFQPEZg7Yt6VJEztmQ79ng8JQtiCz5CtTY48dKpLuJs2ZgqfoY6gdvU7arMNnVJfwva4CdNnKG",
  "key40": "5vF5AauubXEz54xnTvyt4pWHKPMAQB16duowAXbEY2N2BrxcCPSVGSJVNw1C6fFJiaWAjn4T6qqHJ6MxMWWJd2wQ",
  "key41": "5xqupES6kDFQbUBdmpwSpUfEZSfKP8aZxF5c29P24TKxoJaHWT8319kBbxrqMWK4umG4BqESBkBT6DVgkGCZckN4",
  "key42": "5KGEmpjrgc7zbZiEKRrBpf14qMNeEG2csxu6T35TuY8SUDLPb8huSJvtzMqL3d4sozHcvsTp7adSnA2DcYvkaubH",
  "key43": "2BGJQ5yrB4DjMdrSSeTR56NZkfmzEhqHiz9YrsVpRuon99RaRxLHDh41s9Ft3Zw5TUZeFUsLFJPKdaGXEsSJ4Z7g",
  "key44": "5iCVba3couq94gfQ6WoUEbZ8xSMmjwWun7j3JoY5Mnc4XRLarmki8qRoYsfaXKsWgnZAf6FkXx5vGgfibgmJ6EoP",
  "key45": "3WZeNPkJ6HYBu6QGRK7rDkoQyyx3DDyMMUWnGousD43vW6Z5iesnRaWbbk68tvrSxuACnz9R1i7uCE5e5tWA8E6S",
  "key46": "Hn5kGXZBuJgZ6vMPsUNPzE7nFXXM5ie3gAZpxebLBVtvUGfQPLred972dTXQkuEasG2q3VqqGyt42DBofh6LKsq",
  "key47": "iEKv32a9L71Lb2jpyS23Kxq6LVovuYuqq7aB3kdZ28kKCDZE3kwZHSdgJtFHTg3SeF6WQVXnkF8Lnqb6MB5Fyf7"
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
