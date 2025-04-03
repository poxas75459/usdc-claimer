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
    "4kfPfcLaKFeymbybjvzd3K4cm3WJnanE89yHSZb2oaEFec7hz1b9UZRFMZpXBhkTfwzDj4KrzDLepKRpgDwzVBij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aN7mEZx1aon83SrDTUduuTiyaVfuwe7H8cwdxebATtA9ZAiy5Lnew4b5gv2stHMerFKhq5JkiycnrJR4eFdrBur",
  "key1": "2517cuoFbL6zJvGkdZWPr2Ksq6kZ5eV2xmNwag28hTyh7PBLntBr9dYteZ5B1L5afRBwtRiLGoqEvz5QtMzU2xW9",
  "key2": "59rNRg1MszY8qTA2GNZbuEN1acpxiZmpm9vmfQ57EZ4dhtQ3LZrxCfx2bjQaUkK89EHb5a41J7Y6w6tyZepiLVBb",
  "key3": "579u7Sa7PPdFUn2w6DButXV599S8N9xvxsn5PSN9BkzHH6n7BjCEqrZ4kQmWR4BYu3WwH1pe35DPqjCRjpKPunii",
  "key4": "5nnY3R48eGcnxi2P8XbdNcy5scBYb5hz9ZraStsbSuKwqS2nKVRY8it83orURa2jccy7nnWGSUhwjFukX298szHi",
  "key5": "4Fu6GaMpC4qacg5deia1esFQ25Trui1EvbHLjkatTqXXW6ZuvKK5QYd3zbw99sAorCaPwhFS2Ua5YhZCnexoy1j1",
  "key6": "VpVCnGxLHiN3s62CM6WaRxLm5yZbHoS6nh8bC7JaXxCyJEJhqfNSrmHKhqFu2WkJy8TLDYwQbRnSfwVXCsjY2Sy",
  "key7": "4wY7ZqTNYYcizRq3n9Ftf4DVHcR9pRj1fgw3JBsWHq8LTQJ1C7RzKAyY6DsdEwGLWFm3XN24gPbQPF5KND1qP3zG",
  "key8": "3XAdATHBafBGwafQpPDZFxrStDuwo6Lv1tU8aYfr2CBKj6gXb8LP2kiHvZZHc66fvvgfPE7KDZagnYdfzLWdsets",
  "key9": "4GhLHpjRpP6mYchTL28LbfQG3zAsa55etEwCxgeVfBKyMnrzrSCyRuiutYFb7YQA3T18fXXpVSX7R1kRjiXmYxEM",
  "key10": "5mqSKvU5sPoPGYqJ4ARi5oiX6PCDuZSFTXaTCDuXCHHDSMVswPGEwyuYCW8R9ZxHSRbyvEzCheRKGuUWQRu56tNN",
  "key11": "4GPBLn6isxnaYNytUURFAJjMm1Gpq3b9QCWNxCK9kaV66egvUcK25YUymzjA8v3ePemUGhhnkj28ZsrmsmMVYZEA",
  "key12": "p8jmGLnbEtMQPVBZSQ5Pzyta1cRi5yQm6QMoYvGLiP7MhWYEVKRVKKHz1BRTGzX6kgi66H2xemQWKDEroeCpywG",
  "key13": "46p9gKevPwTPcsFrftuLtKPTLbnpc6tSfNKrXLhzEzg3xi3s65PrXrRBsnRoFzqF7MfTjifKDDZXyNReTvoPcaVN",
  "key14": "C3FcsupjSsFLh8Cy9MvvVQ5UpYU7neLcEGrsGUmwAq386Pb52PPgBaNu9QCf8rVZ7cWBhVUSXENHhsXiHCsdvGC",
  "key15": "21cKm5nagrdddpm7NdDCDyGJTKCsXYD588tpNdPGfacG8BBVqcrwiDPpq1bqGrendYjtoUoUcJggXNMMAcrCTdfQ",
  "key16": "52W7xYboynuC4TFagCdEpLNRdVBkzyWheQ8NFk6yg93iuS3XPjxE4NgFrbX74ndSpN1FeuMkQVFvCoaayRNKMX5s",
  "key17": "4d6y5T32LooVPEnXRJxNwaQ5hU7hy59hjqjN4spEeiiJAn4convVfK4MP1nmKAULrGr86NLVjdhrtCN99SzPmLwq",
  "key18": "67JMBNSNvwdkFtRc8QCsXZ8jgCSqcdmKRWnzzfThCgoWieHzrvueU3j7eZNZKcaBiDYY9usGyDVc5tpQyV9yd5tb",
  "key19": "5Dqy73pexjXbcJoJ4ugNGfN3ywq1SB4DyyxrGHDyjUKHHCXnMeJ31pC7GSMJSBUtG1E8fYMjeFeSiAdmapZmwwTg",
  "key20": "2rsMuVk66zsHf1ouQkAzz2m7ZYsBBs5g6CeqdrHKaSt3HPy75naroCLdpDhWjUdrF6aea95An3ym68i6FccgxQan",
  "key21": "348UR6mi4PLqK4TfBawdyjumAbxNnCnJzqziS38xKBrQ5aNujbmMveD2r3AQURCVZcttSJ5ssNhVJHGkcbDC8XdU",
  "key22": "5jazcz48soFJzzqy5V8RsrsGdpVQgxfkmoVdnSutg5vQCWm2D81nZTaXm2sw1DFTVrXLdv9iQcUahAeVnGM6vT2e",
  "key23": "zWHzqGeLUNq6MvhY8E1pQX3SoJtM7sJL41PMnLjkK3GhorsQKGUK8sh3w5pccngnvG7k2UQZf2Lyu8vqSovL1qH",
  "key24": "4LkAyJqkVaGrpTbtAjjwMahvFan6NwkNttzAfA9jpaw3Xm1ttyz6RsssitMKrimBG2bZPHDJH3WqHEzuH7kmTsVy",
  "key25": "4Cm7xUxDWBdCqheDiBWPVXUeKQc4Pfm4HbqZ7qyWZzgzbiLf5FMvLrgb5gavRdSpdpTjL9NNHB2Rn9dswRzRCyuB",
  "key26": "4RmuQ9NMxnbMqce6BYK3HTAHLv9o7GHErNv2tr6szmV8S5bxpaDNTUU8VibmKy4okSUvjtbGuh7xqmoh1eEhAVQK",
  "key27": "4k7N42AFdtUXusWjAR4ZsCbiqJseLsPf64NMCNJxpFNVYja8YcnQc2disqE2LW1CErPsrYsgkycaWVNc8d8Ci6WH",
  "key28": "f1MxHVk3J4Mxq1Q648mCjRNVakmk5ndrsErAZVRu5yeRABmJGeD4GKCo35XeBA4cDkP2HHDrYk8VXipjLYFuU79",
  "key29": "2CgkZjez68AGG3v2nUfSE3EP6QKWxF7t5rxfaboboytwCxsS8pcPhCXhRtzPjNiyjsEWmUQdfMQkNXkPjuTzrbCm",
  "key30": "9JCD89RiDe5mDRcKabXj7zQ288h3PLEZbnBsvfJCSh4H36yQ3rX9VVUSBDpAyorynuitscEK94dccuG9iP2GNtJ",
  "key31": "2AJFjTGEtcmcoH2w8bWNEVds3hC2b9RuFFQHGLQJpZN2yFJUxnn6YvvstTfkvy2H5pfs3CwYrFgYNFJPYqMFda3A",
  "key32": "4T7UzHxZM8cmMkb41RmAi1g6VFLKZJ3cT1kPNoCp2Q7SzTdKkASyBPX1yhzWZcNJAbgMEsGMZcdcwCgdpjPoretJ",
  "key33": "4QNJ4oRcmM45HKHoKsuSfnQfCcM9qwnjQQct9rxEumxZGvyVTsZkpA8S54NVEzgY14SssTT73eJiKY927zwE5GSN",
  "key34": "4g34avpbnso42zpUULCj5ekotM31Cpbk71AUeamKcP85JJmk3Js3VM3sy6wWEv371hri6PbHHd9qmGXoFsAezjAK",
  "key35": "2rRnmpHs5r6hYMGywFGM2EvG7tR66BsGnEU1r8q4qFhsW3ixAt6eYwpn6paiUUNrfsb89jGZaD4ujwAnsRkxQskv",
  "key36": "2vEGG9GvgjfA483m3GmYK6QaCozekQkBNpmWR4UR71CRupB1TWvayXCkYean2eH6Jz81E34NHv8obpfw7XX4iZi9",
  "key37": "3QUsW5AhZGviL8Vs4efBhkK7mMg7oF3Fki2d2kjjgKAUCRRho9sBeDRAB6zZhjSQixNbh2dbsbPh5o4JK9Zv4UEY",
  "key38": "2pnzhLZc6A3Dyyso3KwiuSJCH2vAcAzj1fypEXPXkXvw5ocBimbw3HyKvSm6NmYzWGxF24iQJfyKxqrNN4jhzePz"
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
