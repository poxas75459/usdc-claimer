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
    "4FQTNk15p3cqdfvfpgNDSwUmju41doUZrXUHyTjFUsTRxHiFyx72MKeVLBZ8BTtPgbwnfWtCsceeamoCod5kYr9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kgY7hBGFQbDVEgmJGiK58558drtjDFb8x1cDXaG4wVSQPzvQWnEGc2b7pBWM2Gg7Kxi5RjkV4TiohUnGJFE3Y1i",
  "key1": "5WEV1asyXykJk3DW4q2hVXmBPpVTUEWz4mYvUmCNuc8iaVRy1wAsD1xMQAqV47nJDQf6PDaBsEvXFPDVu7GxNJyX",
  "key2": "25gAUEFrTctxmMcnujkDrYrBSjU5TMNYQBMuZbARDc5ec9giw6oVmyRNdRqGAiyH9Zn1a4qJGjEcMBSAgfgAbg7W",
  "key3": "3D7HcHmfv5X9fKFFpxdorkpyExXgujZA7Qard1CgAfxK5zKEoNEMiTTZYMyZwFa88PRBdCHoZMQTFJvf55Ng6JRg",
  "key4": "5GnP4tjgS72H4JWAijve1W5RgsE9afLK8WWB2fFuKyZnrtYvfoFf4FeBMNDCr9vF6s4ncEgNQghNMV2sXWnLDem3",
  "key5": "3k2qWR76QfxdD7Y4A8Zr2urSMrzufzLWjsqqBTnFerroCQbf9aLgWrBqfC8LaEKRtk4BGE94fypUZohXPn6d3sF3",
  "key6": "32czNTLzhfYybJuWzxGCEMAFnVw1tHufbMF3oEy32cQVoH8fRG5NgDYWEdpBsLkp6nm3FpywUMv7SNNnVWMU133J",
  "key7": "2p9TcoJ8uyHHndYEHzXUYRdsKmKHYsbR2jSFi3baqUHeHqMjpEQZqWivaPcKA8UHkhstKiyvK67tndFhndD3DJzy",
  "key8": "218txPkJGyKrtnwgsbLAMLLeRaKxQqxnGpd3T4DEZX9fkDZ18fcDkn7o2VVewc2cMcSurfPLF4uscnTVfbW3ehYG",
  "key9": "2n3RApoUzSbQ37qrU8mvqpmPHRG9nrXe1ZZP123ACe5s9NGb2jx8o7i2Fj87Jqm9iLvg6UxzCuizwZ1qZEoPAffo",
  "key10": "5irCUAvpL8Mxvx3xWg6J3rtiA2FatcYAC8Wpbp5R5kUUAmpfMwjc8usgArBX7ezyVBdvmtpiccAeggS1mvjTDd6o",
  "key11": "36G8LG9DP63QZ14Ajf2qx1PeqPqcuPDwzNCDQXbekgmAUqMaadCqZqDpk4SVDhoVkjtnn1PMzY6inp4Ph2HoPVyK",
  "key12": "R1A3hLZFbaQKSwRTH6tgbHDYS7tzEAoKNf4RVf8G3L8urHBkhTmUpQ2sMD1kyaXK9K1jARXPZmoiukQdszLeubn",
  "key13": "4A7ksoPHL5Mox6fdCUvQmRu6zxwXecmD2boojX7Z9WAsvNaYaewmyz2tdv6YS6Cc4ahJvta34tR8VHCXq9uTgKM8",
  "key14": "63MvQwnMu4mVTXiCQ7peKFsuiW1j4zZJ21zYVmNYx3VJAEkafWV1cVho6r7YVNk5rCUKZXdcypPFHatK7VK235jv",
  "key15": "4s1qpyC9PukAsHjpsXPnzLpsU1BTG8cydtVyu2Zc4uvPvL5HX6P8zvqD7ATtyoa5H82Tt1mwwVZvCcBCFqWKML16",
  "key16": "214Drzn14TUVojodgoZyD2fCRcVxv33pduuFd4Q76LqafYaoq7PMzhwM3ZinXVYFM4tebT8FkgrsYfUuagmW8qAS",
  "key17": "2MTQvkfrTZXpHcdJeareKBGsSMVeR2eXd5h8gUsSMh3kYUNJHDpKXMCrEZQ9diSyHshsPEP4kbLiap3MqSG5wb9y",
  "key18": "42JyyxDFE7wve4NJkuxKNKbFGfU5qJQW62YZqWhqLB3Z72z3yvCtFrTo37HZmkHYYfj9L3Z1jqwzLr7UUAZVHvxh",
  "key19": "4sGwWu1W5ykbutxZmimJsMFu2Wk6fm3saGCr5Rd2deKbSYJy1DZYGzncEgvaP3PTvjpR1JueTFpjD9zd4itGfL5E",
  "key20": "J1u9FY6dGGPvZscUnn29JNKGvC1S7Dy914r89A4qizrnkiYtdqhoMfr3Bva6hfVEFx8CajiYVnqpLh81yy9Pd9Y",
  "key21": "47SeZ8kfcWZJtRX4cxK5U9eDaPFx896rhy99BpAV3NW1xXbghb8kainLZd4DQ5sUSVDJfycngLJZumYQWZYQ1kws",
  "key22": "2JaXPi73VoUrWHetZn5W45rJY1ur5ZEDPLGJjLzgGTW9Zg1jBGRbdhiVCMm6KLsLjThZfwFVNvmkoA7uzHoDcaMY",
  "key23": "kbXBrQ8c1qaStmNaejxg2MWvETHMM1G3xEDLpRHFEYYJuXhRT4yvkAfffYbbfaD7rZVLyVRSBokC48DpsKTdRKa",
  "key24": "2Tas7CZSNkFzLfw7oy5r37Q8rAK9ypFnA4yZDBevK7jJkBS8qkRCZgwVaLwkP6QYHZ5xi4dquXkGuZ7Fhopo7jcH",
  "key25": "2QVHETe853hBjcAsfsAgjgSoUwTc3XYguAxvsEppdxahgbwcRHh4J1RPtkf3gCj5GynESGeCKXKPeZR7ooBnrMNK",
  "key26": "39eTkdRaR9UQ2x2SGFrdsFt3KMdGg6YQnnfNFwpZkb18V326eHdqHSGvPPeqUHQgvVjEiZvnywueJNUxXbA6Zfh5",
  "key27": "5DtDUiCX7f7gWA6Hnwc3MtECLTCPaSUhB3Nk1Wc7e8hWKYrqc3hTwEQeMx6rHVcqaCYAajFDwiG5KqXbAJZDeM3d",
  "key28": "2ZeR4vezJcn53thYd3hFXmsV88vXJJkUz6XNE7qP3fFq1NqKSJh85EnitWmTQYp2jEqt1HSEv21PaGcsC7Q3khtW"
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
