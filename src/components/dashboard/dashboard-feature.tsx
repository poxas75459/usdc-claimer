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
    "jpFDPryxeKUjzYFqUChMYmXnqrHL2MHJAn2jhRXotNRRZrD7wyJAB5ruHSjc2VU7nEKCwWkqSqTFsHerx4WrZ9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vgN4tF5zp2FeHdtxsKtom1176V77M6H7NUqqdCwYQ6BFDanA6bn53i5F7FqRJFuKK1UBhTzqj2sTAWWTziuAhCC",
  "key1": "1DDrGQv81Lt1oZcR8bgcPdnepaXmHWHUjiMDr1vVARn2jQnbK9hEiTrB6URfpcNbzne55WPg42zh8Z6NPMWUucK",
  "key2": "2qsz19WTcJEzi3GZnHj3DVQDUnr311F3dX6B2SCvmrmXpiK8Rx6CPhbbqR7oeacDY8qzXDT1595ACPZCeJZfTE9X",
  "key3": "Dkknmb7fNASyUnRjCx7rKChL9KNwFjrveRRX6qKrgh4PRPgQerSg4NSu73MmJ3zxWZyyemcihCdfxeWVTeQUjej",
  "key4": "UVbSZ7UpS3kBPd6Dea2xHMDWAiEv3DWEGu5h23vhkQ2aXHwRUGWgP1xYn6mcgWpdhmXv9DpTt7Tryik6sLR2CVX",
  "key5": "28SKDJbTxxwo6sD6W4iZfvAmH7GJCDifnz4gNcVNwVdmEDbebzPpp1iectz4wfL4E5T1gnbSNdEBkbMPSxUsDPbq",
  "key6": "4K8d9Eoss5QCYBdfYDNC1My9tV38tYRW7MW5TMjJ6ocC6Lfx2p7hP9hVSKfEibAFUxdrSoRWyuJX2g6y7ZaC57xv",
  "key7": "27KzCk29vQLaTV1UuTvEzXYMgi1dMKXCX57aUTQ7PHB2kKEMVhxtMFKzYAA7xcHJwFYYWr3mWM8kzmyH6DdsmPTV",
  "key8": "4CkicaD4fCUNQWoP9ujW77nMqC5msj4VfYiLRgk2AhZsMADnjea67p9m5WUgKKd1jmYwS17HAMaeN7GnSL5s8FSy",
  "key9": "653aYuinHabsfLrMKNQmfMo6j3M6JkDgT89T4sMY5uP1ri7E6j87daUkMeCe9KgAAFrd5aWer2bKFLsbbkAnq3wv",
  "key10": "3o2BsjWnmMTjcfCXgvPSDgGFu4dtwqFfBniZNm4JHN5xFYCH74g4iF5gGSSMLK3r2nSUbzXScytKjhRNJHhn9yAx",
  "key11": "2XwKTT3FZhxSyEVWSCHy3V4F1HWVMHQhwVHwGbV2Rn3eYUK67M8V4C8RHzArZ2b4eu5QNdD8XvG4HCGmCKP1tbHi",
  "key12": "37gF3npyZB7zwABw22Ww8nVrKDU1ASVGXcPvmBAaMLbYp6cCkHDREcvF4yBoXU1L9MJdmHz4va2u26Qv784zWwgs",
  "key13": "2b5uatUttvpNtZKkq9MLBiTtqDpnxMhNpRYzqEgKeurgTn1Rg5Ht4AatjSasrFivXBLcTR2riz7psLjvftiYH5HM",
  "key14": "5eU2CvM5phGPXbtCsTAiqVCm8f5M7kUi5Ej4zwpE4pETZTqgviciDDAuTvNFhXAZNzXnT2jic3HWEukYooWJfT9F",
  "key15": "4mWtCRJKhSbiR35AY5nufoqV38cveoeYrntifqQoczLHBx8V8z5y9QZRq4dGDoX5wLo6QUBYi11kv6Lvt22kEZgh",
  "key16": "5pUqdfah9nYM2tSkeGpu58wpKid2dzybkeq49bt91gXH66rFV8NZic4PBinjvTWAPc3PzQJcRNVNyKSkdNxAWfwz",
  "key17": "2jTxHoF81rX3H3Kv6ScGzq6tu8G3YKKs8zfY9dzdBAfuLUXLvUH5ioNiJcupUF4vW5ZUAa22DUDnyjWYZosbnVj3",
  "key18": "4NKNubmKRPMnSdPWu4VsMtUAMWv49o3LsYGFhfgbDqz9JVdb22N1LXTQ3Xx7kr7rT7QhjroxvTfWuSQywUziPW7j",
  "key19": "2PoDHvzufXKWwHksUcJ1MPk5kEizCPJbiDhBWfRKakP8Sopop7dQ32AtccBDAWDsnEZtQD1zCAeGFhNBpbuWs5WM",
  "key20": "3vQvvFPv7yR1LE1XTq8gFKsHZj5ZgifDvL1B11MC7TkoQXtauKAhWbWpw2jUjgfYRaeNgaZmTNqFhGmvgE3ozpkg",
  "key21": "5Ud8zdUNpmy87BmsjoxVRfssEdhXVLEK1EYRihFMvtchfKzo3qVvNdV2wuRE389ac9LtFqzbVSTXtDs7N8ZF2YD8",
  "key22": "4NJjMWXaMtrCPvCrSSbbjTRfK9aG2m4LfVhUvAbkHFgbK2PnrBBkhTF3CEcwq8xYRAtaSk72mV4vsdrYdX2KaEQz",
  "key23": "5kc2ZDE55YYPhMPtTbaTph3BEQwUvGSS6X47QGAEs525aWmyGpNN98qxWKFR7QAigT8DZo47mFsV6afciGbhPYa9",
  "key24": "7HH59i9Vy1ZeW8gnJU9wVYHuKEx5h3ib6GWBG6WZhG9Kx1MkGf9TxSGT1xEfw2qoRsRoqRq9iJP6xpzpi3JJCv1",
  "key25": "5xC9WTVYvDQogd2HXo6wyhBCkJcSWrHcU2dvqgnPUH8p5AaFfxB5Brqnp3tbPfqHo4uMERGqy6s4d6JbJ4tmcSAr",
  "key26": "4f3Ke7JhQpFjhqKn9MGV26woDkxiTwRvsyL4qKJMpEqBEnpmLmJcHvUKBiUvzVdgebGmvvHsjQj5B2GLbc5LMtz1",
  "key27": "4XL9C4UsYRp4pWBsrNwQ4dJQ4z1ALUri3cRyHHgWFMA4AFnce5nLdyPEMsfbGRmTbKnawFUragaxK6nnf2FLU14J",
  "key28": "RSmn4oD4o5QfbJ28DvoHqWB21wfkqYw5jLTan2xgZsVz8jQfybf2AxTCVtodZ75Zc1eeStze7gJThavSLpjgdjo",
  "key29": "4xBHtySNbV68AQtw3RLZNEX4T2eXju6SU33iEpqQiGCzJkB5yZuYNhJHqcFKGQSLVMYfJa3XaEtm59T6PL2n5UDi",
  "key30": "5NXurhctTxHiZpTy9dkrDYTf9fwKyML8iEn3rEQCsUM5gft14QRbgvbEym8Sqg8yEnrCCNhwEhzb6bq49HwMuKB1",
  "key31": "2pPvLimitKfVHYmuiJCkEyJQtthk8j4qwf8yCjXnFoUFtQKHxhu9iqCNUPFxrPTzrAdsH4FtiEggRS2AvysrRSdy",
  "key32": "21er8K7nJo6GkZGXbihJykpLh3QE7XEUeu8WByBqEUDjFjxyEh5VgvDpWXrkNin1TWpSNoxbTLzRwvzmmTPLRF29",
  "key33": "5npH8XhDyziVY3E3C2MyM9p1XgyBjgLcrg2vVEwjxQMpuvgzCWEVVFwJZAG5yR1D22dfuAQXoBE8dTUMKjtJ8eYv",
  "key34": "5c4LyoyP2mVVf33xqD8wh5uFQZ8JQkcWECGmRCAhMXT5jc6BtxXAgFi2niqnGfUWZGXmnsWKUUQnSUXFxvhZET6b",
  "key35": "xi7iU2eojZfE4xY2GHZ3w6eeyPx3xsFWK2WXFYYzAJg7jZcA6XGHaDX1296KD6DoMq97kygmFhbZjJveCgbeTmy",
  "key36": "63EEQUiue92cFuE53mLLj3zt8u5BbV6ykHxzfX7dfm5j7M2ztQgqneEgQBDroTDS58baRvzYJxfZUAmSNKwDvCci",
  "key37": "3TuRwbWVgPvVsyL3RkqT7QFS9Wv5d8xZ1yCvDLH2Wnu4kHPx25gAVMuYZ1WHVJjr5UgJsZYdwex9RUWXVFs2uaWV",
  "key38": "5DShmg6U98BGW2b3Xj9sJmW8ntdV6gZutA3Mcwz6CMZfCseoa11Dayn9Qp2rDVDXxa6pXG8LnspgmgPEb1SuJyhA",
  "key39": "2VvPiwZ9DS8tnqKVzXvQFBzXJuAQLuE446aimy26c36jQhf6vuXoLbPEvvv7xuvH9MnRaAUwbrNVeTFF2KmuJVhz",
  "key40": "2RMjobBNwNeWJt8kaJo1aRRTF8GcU3HorXKoFe3NckbTvgjDKpM2gFfbuGfPEsACNVT6fcNpDvh7v5Ux4CWLyb26",
  "key41": "5JU8qEf85oF366TTk6HC9fjXxBE2ioxD689Ga2MEziiqwus6W8KwbmYmg9yDBBYpF4f6u7GTfXkV8fexbSq4HEdJ",
  "key42": "2qW8qSpRdnd5XsscFoGsX84vMLw3SFsUFe3Mo3aeGnbgQkMLxzJBZ3uJAmbtfVBDmyG8ovzorgdHvmtH638CmdsE"
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
