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
    "3eSBsKXuroqQktNdnPbaAzpAbAe2H2kdXJqAsQVwWjVgLAr4jtgFoMfrBjXXsMLfnPTA8ANTT3DhCFSZoaEoVL7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43aELMRNW7XdkBhkTLyZDECf9u7daRwvMkeFJbLPAEb7MJ9k1iWkPoTp5w8uAGNcEakVUVXaYfLVsbxmeqqC8iSz",
  "key1": "38maf2NA3fEqMX89ckQ1jG9GZVtEQHPRR3ar7uqzU2JZ7d98qh1eQAJfBf9jB1JrcKaDV2HMutMg4yxp3DV66XWd",
  "key2": "2AkJuwsHyNdg6H9QKFLTBFZP2juaVgfBQbeqr5THHHALuCVrzW2QX9WV6EECwrAp2UWcDmZQ2SZno4q1dS2Efx74",
  "key3": "65DLo485i474RkS11zmzLCFUeSnGroEF1aKKXdgZTUSPLoJqUFcKeoDzeqMgv1pk4S2CHRyfRgu5KfLiRVdBtQMQ",
  "key4": "4StpGZ3CVGVqJB3RKbLSQiFDrNHg2F66w5GdFJfsvgnmEtz1nZYb3jjZUBguKYMm5mw5Q11UenVzuP9KFh72Cwei",
  "key5": "nPd3ckveAiYhsHkb12b3g4RAwWpipbpNR8qGAfLNpMeBjoPMF8Bg9RiYYg4Hd8CwxJyzmzSNR5bfExT6PdGLEok",
  "key6": "3WFJmdbitHrnhyLLJxa8GPvjQBY7AmqHqeksVYahgZTKRur69qAFmgv73AHPv25a7cJHhWfmbRfJjf753SszFui3",
  "key7": "5kBuzzZeHzEw4XS3PtrnneiNkDSWHQPth2z9h8JnSgvhDfAF994Q79Yx8b1vhCUxaocwHGnCEgTAPE88RjMeCTsA",
  "key8": "65xADe6DsevhAiTzhp4f7nHc3NFcb4K58ZZgR5qNeJjrnfCM6GFjnaK29TpkiwuraCzixUwLYiz7NqYn9kbCLpkx",
  "key9": "3joFX3h36Fo5Rns7QhD9iaRhA9JPRuGNucC9emEppgR27wsy6DJ1Ve3CL8vt3gU8mzRoScr2sfPi72E8qMVFFomb",
  "key10": "2hofmDMi7FmqN1jYnHmrd6YXd2aspujxr4hdd4rGzQCBdcpsWkcQUU5ia8QFLRo9bHZDT6yzAsZ6ujm1AtiRtQPy",
  "key11": "4SgAejWLUfFcv2wVyuxHeLmu2pMSqdcvVpftvteMMEjRos8AYyB5kNQkTjqkRKmnmNAxjGunZaP97PAemoQ6i4Bo",
  "key12": "4GcU98Ea47fYsaMxk47Utzp7wVaQBnDaiDE3eTZoKCdgN7rRcMyx1wqvr9vXNRFcsdb8igFFB5DEoZp2hwoczwHD",
  "key13": "333z52o3U8u4Pzfw8fWpoLQ7AD1HHngG97iQqwVNX26N9d6fFJb2ToRiHtA2vkDhdvUioYyrUpCN8ZMhV79cTy9b",
  "key14": "5wi6SypGXVdQXjD5hxGLmju7Yk1rib1dpK6iuPJb6CsY8uYNpQn6pebki5uVT5ANVHV8MeFR1UhVQP1jfkA6ibiJ",
  "key15": "k78KAELjcS9zaAsNotFJXsdSRb2a7dDFrS2ea2kr7jRVncpTB5S5ZcSd5M6PPnBqAe7eSGTMhpVReUMzjSTgtdK",
  "key16": "2hbEW5p2e6FpWP89FbfwRtQYLnbEX4vfgAPBcT92DpMo5vZciFzZymmD6anPcL9Kz9QhLw9G8A841SLuABNvUK1y",
  "key17": "5d88MdCbxkhpW67zgFyHE6r63gvjTTTQ248cjqpPcPouXbDDeEiCjYo4FA2CyX8FUCaru3b7rmn6eix8W2J8SkHc",
  "key18": "2dkT9WwAzuEU9oRkZTjweLEoFLNG89vLN4urSpQRQb4BJcXYTHa5U1Ukr4NoEh8y912ePLfAa7g5oKJDjGPFLFGe",
  "key19": "2hErwZp9gQajTuLBU5nYPrhEEjaKcypycnf6SbNHoTkduenQ8sJrZGjAQpa3GG1HDCXKkWqu3rDp3FH3c6TJXF5m",
  "key20": "Ewt55agLHFjC34omaGRaxJ64fB1PtALMPeLd1jvEUEbFTeSAe9JEprRjKtrsxktDp3og5dCA979ayP4eFBGx9pr",
  "key21": "5WFtoZ43UnZY7TzBtM5uyedcGkcsL6AZwqpKuzYgTUALN46EggdYyZWKCe24YUK5ZWQKw1q2FYcZNGmkg1s1ijoN",
  "key22": "5qPQqTh7H6XMNRKFKX3A7osH2mPRJBXEzdXuEWRFJVijcZVAwB5tiiobEDcN2QA2SJNuns8uHtN1zHJJ4AVvBDxb",
  "key23": "61DZX5MBGqWknh27Hy25Z8mGP6rvev9U8ckhoGMD37cT6s1kUAAPdAbeQQqMXH6LJSCvYi7zEFUUs42yd8UTupXD",
  "key24": "66W68FM3akqE6SiMHySrm4KhRnFKRLa7eqNPjYc478xmXGhWZsX1r1DdvEdQBHeBwh4T53wA17mKM3WSANrp4iL1",
  "key25": "2nxNLM5vDiaTee5Xc9j18jGkMBSjokwnGX1o4Nxozpz1V75BdeZMyds3KnvhjmgUJpRgqAn6hqKGU6FaXU9vev1T",
  "key26": "3QfD3Bsiux5PN8PszoL35Y3AmAR4nVCUBonpDh86nt28rAx7yDr2zYYFTKJ2S46LjtC3L3MUbu3QVrxCz9Z2h86K",
  "key27": "8BPR7gJGFyjm8PtTjnHZaNMSBs7P7ZRp4CbmhuwPR1zJn65eDZ5q6cgu94XNTrgcwbZj3Ap6tkYAVZdsmiSq6Fc",
  "key28": "3LPkGa66wE779nHmUtzsEXwiQU6wuNynEknmEAFMTcuG6EPBYu5coBj6oJ6gKNFbbe898MYmYkKYHs2nNyAR5aVd",
  "key29": "2ajNX6Uv8AWhX2g9Vy6xsTdGsXE11YyR6cWLBFhGKm2x9g6TGLcfLDP9T4kCKK9dtz58zWifsU2ciAhDQLteErk4",
  "key30": "5JrKKeoPkVpYWjpcuWDpWtJcs9m5ZgMyDcv8PyBf6t3VpJpnYRaaPGfZTw81GjapLRf7RNVFxjna2igDsZFAWuNW",
  "key31": "5xAdnqvoGas1Kcu4PyvaQCNJ2i2WkzuZCRCbfWAmRgMbLLUob3K3Ui8jsWx5wmwqQ4DXfGVc5j2oyo6FNNoWb2rR",
  "key32": "2SEwNBX9ngHHiwU2DHa6hi88zoKgaDjoWPp1i6gExc6DDWupHZE17B6GcE37Dr8XqRMwD2Fj1Z1cNqnSnSZmbfZn",
  "key33": "WVrKjte6NqF1eqSqyXxz3QUGS1VMPKXjS9STvtQEbbdaMBhwd7krN7ZqYE6UnEAENPVQykjD2fvAkpZAMmWNJFT",
  "key34": "PAMCEvJGtRdvt8jFCfcTQ4du8AnY27XYpuYik2mCS3hEU1yxXUseR5QDP6hbY8tTGXtsjvAQcJA9Qxhhkn7o4fS"
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
