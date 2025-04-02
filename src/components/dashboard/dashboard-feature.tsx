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
    "2q7A9T1neqviZwL7FtLdg1c8gjNjmUkAq7VxcQbCkfD9524neRFuHvzkEBwwe12AvtXw672Exc7477JJaNi17vsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bo3m4rxRXxyhmTpwgqXbFghbYSUGubJNZFNonDNSfA4r5xHeMUhPZvJtjiEgSC37NS59MrJBbyVg2v2G32fifyR",
  "key1": "3EYw4s9QyM5e9wb4cD4zvFBuNLMkEipMifsrMfxzFADTtpHnm8wTgPgR42FmfAbcLyo1DbNQWGwZUFPYe6tgKwah",
  "key2": "37m8jE2p5hiEc2m66Fo2Ng4MEW3Wzf8p9XRm6mtrPz3ZJb9Ke1J4u6NUEArutqF39N2BW8MRv8ag3YsaYixMbn79",
  "key3": "5K1ktWfqTKh8wV3yHUoWM7hsL4zCCxQiKRpCybGsa3Y19kzwNvJf7B1YCweUVdfzgArQgSfvyqtFACwDgdpHbgRp",
  "key4": "5LYT2n93Kvfnb6aoXLAYoHWzcaTkhwkVfgGSuQRiSMjgQJddkqWAdP2Kf4Q2JDSD3SRA2U7e5Xn2GJr7KxYUvSTQ",
  "key5": "2ibSzjaT3feLW7frweCi8UkdxbzcWdpN9N9s86SGwgjaKRpnf5kMpWzwTdCdQtEgyN7R6YV1acDzqHErEe2JaL8P",
  "key6": "3jjdziHA6UFS8SLohGqzaZ1XHXeFbPQwhHcSNQnnPjK1fcDnPT5Gmh5YTrVJYGceS1Me4swUoxjgxyA6UfQDuYns",
  "key7": "64h5dSteusjSsUeHykYVGsE1KZz2JdSSdZYnoXYvSNQqpfv1LAFinQ2o1uUeuBMXfkViZJKj9HPe67za1iqLSDyT",
  "key8": "59HwPPhYG4ppUuPWsaAbKKv5QBjR7PmjZaiXNPd5sTapsGKg3xn9er5zUKjcUyvj2JWu1MGV1QzLV6zMr13rysrw",
  "key9": "3iWg6gFW8VoipT4rS84VVDiSM11A5ThHWgH948wy9VTjKsysEGGjrAAcq967fB3dEhHAFq279D5oCpUZv8Uco5G",
  "key10": "415emf4MCQ2czkT2rcn1AnPmBygLpxAEwix9DL3wktuD84fkMdX5adm8QexhEF5Ah8L5bheXYmog4rfdKHUhQ3yz",
  "key11": "4cM4paHCWTQP5EJWknscd56Z2VW31N6eQaGKnCR7ibnkdyJdfTu6csJTphqygDRdPQ3iUtVqfG1gyZE54Fg19mVL",
  "key12": "5E79iAgf36uEMDGGs5xHD69n1o5TKe3YfSPMuH7CuBE9xpi519Huh9u5qLsKLi2enZEd4tLDc8jL1WMXa4yW1rcT",
  "key13": "3JNBRnvVWLVEwW2KGAfLG71poykaiPFFD74bW7uVTgXyxcDqeNkTvDgYrB31EU4wCPm7XN2vSb9bh5My7sSi3Hag",
  "key14": "5ujzCBQxDBUc19ZuVWc75osdKJYSbAZc4T5J1B3YdJ52GYdM5EZFGPKPYX1oNfJwE19xjJFZh9VPkDtoEWmkB9H1",
  "key15": "3ufxB81s5MLXd8yRvwERrChtNuA3QKNCT484LZi2LRJq1h9bccHbfM3rN65i3FagXa5oJjRbRC4Zitf9gpJCESsU",
  "key16": "2xCbBSwQhVfmkjbk1Q4tHGXJJrp3taGR39pGwf8Nhgj1zrrevaoJRzK3ycWQH1nf423VvJ7V79Wq3bwhiYA74zub",
  "key17": "2SknjeQ8GnTxEFiSh3xSHnt8Rupo1YXm67y3Tc9EjpGg5a3G9JfEMBd4PaHxkuXLYsnVtiiW7rDhivRZ5epB6SSR",
  "key18": "5YJiJ1kEPgCjez47vBiEH6afnsQrLr75YXSqgRAwzBH6HkShcgNi4mzM4tCfMnh6mNTLzwEdzfvmAF8aFMHwY316",
  "key19": "WVitnfNZqg6TMDjkEbRP511jEm254pLqEe54R9ugwC6XQSEKA3Fey1ffAqHyRRXctRJCpGbwVpzsR7AB36VoR94",
  "key20": "22iqcuPjYzEy6EqUon7KfYhLs4YHsUHFeUoNwYbcfUk6vmiBmouX97eB7fGntJTWMYnhbgDwKWk4uE1ZcrGETkzP",
  "key21": "2HNtgFc7w19GeUCv3YEzvXvscfpBGcXuwKQsvvGFCuzfhamvJspLPYur4jA9SZ6sCwSHEsRh2WT5uTzEeBxVP4NW",
  "key22": "3tdDcD2Sac1mMLz8S7kSUghchWTXWdJLT1FLoQoq6y7HDavghRcjggN9yDCvCNoRWC1bKGV2ZBZLSHqdqHdH6nso",
  "key23": "3BKG3GCqhCTBWvGcPiDMSTmmysxq2xH1KSVassFKAaSEUcCjkY8MPCEaED41yvvcmiJjT4ZiY5PbEWYhUBgBstsg",
  "key24": "51moaS5qvFchj8vA3Rk8DF9PNMpgBtrc5UaxiKkFsnSEQpfen54xAW53h6xA417vuX1tB3BMu4LvqitPzXBAEE5V",
  "key25": "2QVk5PLmvMGuqV76vq4gr5VRtp2xCbHfXoqc8vgka979vX2YpYsV96WVgbHrGo4ycXNV2JjZqvZuJ1gPNGpphkP2",
  "key26": "2QZiwGnhSXRBxsGorYgfTkS4uSDmMDmrxedjWrq2nbTSnnXCxZEW7mt7D94hFXAMmPNpJ2sfLukz9mpGvwCZPPTw",
  "key27": "5Juvc8k2HNtLFNSuQyiqcTYkafTEZ88jcvFXw65Fywe6LfCZhbYh5PD7TtGCn2oLF6HLMtS41aHNmK6oqmv8eMKo",
  "key28": "3jVqay3D3CpYFdhjHtHvvT99P5KQfnYG4My5zviyZ9tyTgMX629gza1tdgGUpAyXXhexcH91NQDViRbM6eYDAVDK",
  "key29": "4kHoQGXPakhjBoBZwPDoCL1Lns5o4y6zwVbS748yAv61oiZMCeTQGo5WpvFMBJ43epi5sBKfZmtaNWH99MfYhPZ6",
  "key30": "46AmKVKrr6en3KkvpkJq3ZPR7KAU3b8aHWAR8GL5ZBRaGr1maKFGTDgXLtw4nybnyahge3HKW9pMrrALBeTKGy2A",
  "key31": "52DmEPDUcetPEiRhfMxz7XHqpLiCRvB1wfYodoP14n52aEwtqDToeoe8ewLEViVqeU8RQYEM66HEj7FhWV3b8kQb",
  "key32": "3UrMjXtUmuBzWGLBTwzRzp1VkoR9frY1o7RTPfN67AQjfHmqPrQNCrT7BNiDrV8Zxwa8eNpMVzK5EMyzGSSBTVer",
  "key33": "2ui33ogd9iQrUzaZUHMHQx5jE5iaBorQw44NNaQ8oe3p7kKCfhTeSsCTkomVcph7bsi5UesP2jYYCQjsCpVD24Hc",
  "key34": "3H5ZuHNBTXtxLmBNLBKMfsCs7yjFFn1HxFYWEKmJYMT2WXTEvWLGAjEj6eTEj1QSGqipg4g4k7JciqqkZV6jzPLV",
  "key35": "3pbNjJcGX5X3rdraZ58TQrgEcxbEX52WrVHuPofAqeiTkYbh5miXrKQ2newHYk8B2Nv6EBUbeQipwivoyYMFqgEb",
  "key36": "AkwKnCyVGcc5JWytdTTd8uA3bpkYrGAm5amCmxGDy2VAxBzdLJzD18BKvT8UavPKJWmTQhvD8bw5DiiY66kzfqN",
  "key37": "3xPo9vgtWkkQxk1gLuY2gE3SNGcKhNjrAUQSuMCiGDZbpYS612KVj2YzEbX1928EC3FQb2MDcwvtjouAgwh8dFuu",
  "key38": "3jM5cBUorhTcs79tVarr4ErBW6Z2dbjH6cknPpFnT43KCdd7bMFS5PdBeZeGGzEEoXHd2hC3WaK54D2yenxL12uT",
  "key39": "sb7zpTi4XWW5upctq7U13kXFJuGvfbbRiG266E3mbV96wsRQjTtHZBN6Vok48M2uD1cHw2VoSPALpe5T7TMbZ9S",
  "key40": "2qAJCoi74Uh2u1MpRwbJiRRE2dG3TPDpwLy9JCStLHf16mUyb7gJkz4jvcke5EBAohg8yKxaBrmpeJgLWG38jLaY",
  "key41": "4jadmZnmCjTTmqnL3VZ2Gb76ZYBVsim94EwVc7EqN2K62A16cVSmUXzG2CQknc3rRKQpYUDebh4qfCBNb6P8XQGX",
  "key42": "2HGyPa2hdLXMM74N6jQNM5se7uR7gvrY66KzMmFVHx23SBHiBa3EJwkvktJK6Xdif4hEpeSRasqiuRF8qzBdvkti"
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
