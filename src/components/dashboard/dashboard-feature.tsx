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
    "4q7Et73pabjPRnYG7FVbc9ULTf31pydATjaapBbfdouyJVT1vBGo1ajXq5BaBVn3fR6WTntDRaoyYoPNDkmhZnEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r8iY6joTwEp6w57ZAFuDVV2riKq6CvC3imMp3CN5CxbNWEQtij4H3BgMvNUYhE6u9jsqU3VHc78oZriJgugabHE",
  "key1": "3wS2keSb7Byb9ar1M84yL5LkHPVk2bj5YUD8A78WG4eZnd2fLikcErSzaPAjuod12sTHxuJP3ttAgv3kRw1uwvPS",
  "key2": "URRscfKYZ3cd6dv1N3z2WuMT2KBfeHyCsm1CBBD56X4bKCS4opeJXWMCYVjrZaWZkAz7KAPLowbLZZ9M4dZSvHs",
  "key3": "5q155sHSUg3LjRsNhc6SCgy8M8hZPu7s8zU7mkztryhcAUxt6o7P2hBsvojSGSdDrdyqwivjZqPgrKbgDFy3Uu2V",
  "key4": "4Qnjif3xMZJ4Vjj5z72xUsUMGLkYjQecxvDUM7tiBWJn47efn7Xm8YhRqwXSCikZTAbNrEHHYoRWZRkidguLc4fu",
  "key5": "sXicb1YyHzUeyNdcg68ZeG9KN5iLsBHAdTumW9erSof2B6b41Q2T6nZvAvf9ytf9nN8Se4as8SHVxKvvEhkQ8gC",
  "key6": "3YbQPZr2ii64Gw9HkwTbyLzvPoJntL5AoaPB6pGsBxeCQtXTzk8a2CFnfDVQ1cTRqbsXeCdwVFPDNH3XEARNWnvf",
  "key7": "4XncGqn6Zvh6DS3dUeQTwthJwY1UB9d3QmFfWpbCT3p6tUMFhJmnxRMC95pVc7eLcejack2hXRk2pKLm8qDXt2uy",
  "key8": "3MEHp3dAVzbyut4V3XJcsCdSdGuqTvx2eh58cunuUUAv7F9Ld4KTzv9zy6nxdEuyQgtGZEsUwLeaaBMe3ydLRgu3",
  "key9": "3ZeHWCuPEMjvCaDVediJoqsbyzYT7iFZecom7a2VtENxrZ6L67qvV9eYTJRGt5vDjaHHdvCBHAnFTwPfJvsqu8mM",
  "key10": "47LM97SxtdJm4ybRgyzQboXALVjDE9LhWQEw8knxZ1tANC2fTLop3Kf4iJ4ByzQdhxbiEkFHqqLVtKLUmEdcKQnf",
  "key11": "5njADyKzmN6iQwrUZSX28kyrJCJ5HK86LN4zkJ3GWPBoYBLe7ZNaY9Vi83fo67FM41Ehs4h6ejyWjXtksCFE6pcc",
  "key12": "5HbzsL9yMkDfcTxf9N3mUdR2SWGgEMnsDUZxyqgeCKU2wthba9YZA7Cqudo393vLfywCAtnTDN26pmurMBeQKqQN",
  "key13": "2cVrZMCB6iJHpg9ZXayZ6LLp5r6FFXuUba4SQvA7Wz7ZyXjwEdC87519gyriXTSYsyTnHzPaFkV4G8KeTYGoBF7a",
  "key14": "5vKWpfioxEpcTN4n95XSveiEPoTTr4Cuv4uKXcjW5pD1bwYoAqG1zhkvYD5R8tUUKRRonEbJexgSuXF6hVUnZS4i",
  "key15": "3EkgoYKe5B76JpjHPmdp32VoWAVwjN2p2scufTmAMTjEpfDaaKZJiwz82h5wFLTyPtbvuP9WYJMHNMHBY5bH87Df",
  "key16": "28MBTMyFKfBH86DqZhGybfaomzXvbD81sPPxJpJ49vMTbymEiTK98qztU16bcJx6z4cv3SraoFLgg9Qn7kskcAXb",
  "key17": "2rEPUMpZV6xa9QAhqbbJri8oBj4VNcbXZaxGpWLvs5RoYB7QUDbN2jvdEngX2DCQ28HTTrTryGALJ9ghKAVPhDY9",
  "key18": "2JibM6y9LYm5ZhmGKjeRcBZjYsAwzjQrCTyaWuJGW7hau716EprUhDxuNK69wPZ2E7E9MFztZoE6hEQJ5wDi8shi",
  "key19": "dHGRLzXBWzsgWhyrppsdDj2KJ97pAtHwCdA63Ue5QKEYXFyP89rMsu3UVxBXig1s3vDfyFCJUZuMfoGooRifRQi",
  "key20": "2dXhkQsGCnvUFt93qKNwH3XQHHcB1MzjJe3R7tmSsh1sMD6snYTm3jzYbR5jryQH27cXuYNUcrCFiPUKZYdmRPyy",
  "key21": "4ayAWTcmCTPxWZ8VoAjYSuuRGn2U8L7WrzSQpZcw6zkVmhhwhzvgsQF58eM1itnB249hfTeBzdHb8iHYqS8XqnSZ",
  "key22": "22pJ1mbFH9fhux8B3MiDS7SLnjFtCMDF5mmQ8krKjRhYSd7xzq1Ln8tWAoUosJSd9BP4twdPQ9TPiX9XKrQEBB6U",
  "key23": "N1GgozE8DUU7EKSHN9KoKZyrSfiuvNDsJmmMrQKhRXmhws6ey4y9PmTgmbrq6kHGAkwg9PSoQavMR4crB6kuE4r",
  "key24": "2HyoZrmHfr9t84D9mnmRg61tgZAAXs4ZbYTiEEptLSiPdddnsxy2piAstrz46cx4CfJqv62JsTpZL7Zcn6QgsfE7",
  "key25": "66SJXKtrcBRSzvpW88JFaxan4DCcW6z5PN6eYCBqoem1sqYzYRVLrH8UVJjzcSCFZH3g6ya2eyjEGSyjQZCDeasu",
  "key26": "5a5Qq2WUr7Wkgzm2V1DVrCwSbrTyj5Kzn2Fd4pDzw1v1SdVJgUBA5BNP83Nrku94fPRMUxbQ3g9JxGHxrWZPyzkL",
  "key27": "2f4NMeRfELkzk5eiahFerkzKdnJGPY5RkkrYhZfmmmPqswbQV94xTTvJvq49QV8u7T7z7YN1o5dUj3wVdd2du5ZA",
  "key28": "VbPXCiiz2FCMyLnGhu9GLxnXWCBWXCef4wnvfUr2Qud1oHnW3pwCXWbevTyLyahVgu9wyvdYFA7xp5WsTA3PdyZ",
  "key29": "4H95J6Tknh1L4DdKXpJ9PQmWLArC3pofxJZRLz1Yz23nqPhSvQ6GouBPZKm94WYPeuXnnMfziZmQVwdkojq1jXrS",
  "key30": "3ndVHK5TFa9ZizGBubFe9ZJtWzLh1GQ5X2h3hUUEoZpRnfGVLW3m9HdgiNHYSqCXkSjzrEYqm94sfUGRBhbmQyuy"
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
