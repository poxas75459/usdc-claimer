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
    "35s95zcmAXb8Xuv6h94mJUjTcMDGTN4mwP7C3o87d1AZt1c7ytPxRZ2to4rgvqMtq4crQ9eTRSHMVKoz2mzDZpiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fRVQqnWrUvS9QcjaBJ7gFeTuo2Jr5Aihj2zmA1aWhqWmnHGhZazo3PZNijhxyzCUmadHmrWJ1c5pzS4PqCufp5R",
  "key1": "2vqCDEjGpuhLurV83sYY23PwAiZPvN142WpuNUUWJQbkwuagiXU9v6HwjDPQ9v2w3ETzfY7kLGvVYkHUmpVW3NA",
  "key2": "3euFpDjQbguGtfeTPqTEBdCBZ81LrePYzHVJD7hgXuXn95j5tnPZ3V2ihXpio7VNrByXTEjZQViDLXSKyEZU1PZm",
  "key3": "4s6Up9t82GrVZzjZxuaCs13djBHXjsYcy3Uh3ko8ezb8zoZzgiQ7nbiM8CeWynNcrJ9aDodmrr69PyumjgCyvi1F",
  "key4": "4E8bnYf1caxeamyPL2UzmRD3UwzgwThTRk1TRJXwUoaX8VikC5NgU3Ct498vZwXrQQgXnUfr6qJq4vHNGG4VgHoX",
  "key5": "MNugMqi4tyKtoUSMHQLUJkkr7AgpbVYbwxfSRDXB6qwNEFYGzh6BuGA158b5smYviYUbvboZkX2UfRCtrsBGGwv",
  "key6": "5BVZXiZRwL33UJuzhfkcMNgwx4PvBmdbPU7foeTh3ToebppEA3yZ5Bfj8wj4cxUiCNZoxN1hKvykU9gdYawvFJ3t",
  "key7": "4Ac62hU6vjY5S7tPpoq4ekDhCXmbTcKnJdWnj5emuoxPNonkcMHcv6FCxh2qnpPpNfrkM19KermkmCikVJBAzGjH",
  "key8": "5z7PignFSueeyCwBJQDjD2WovgycmzrggYLppY5YheRn663bJwNSozBzMwZ1zoFDVp9a6BhX9wCGY4GVThxHAABr",
  "key9": "NMr9gxDjEE9v5qMaZZ3q1Ld4cSz8tVP6jGWLxjX95Cc6VkvRYR8u712tNyxMDs3CRxYkkEdYqRkFp11rG1Ph6qU",
  "key10": "3jkZ1RNZbaL651wATk5mnJJXA5fJkFddar9PzswJpRvzVWqcFitoQd9PgwPnEyQEXdZkiWSPp53GpiG7j1bP4Twr",
  "key11": "2dwim93WWrmFtfDPfL4mbc9BC9HenuumMboguq7pb9BxKeL7QqeCMtrxo7LGCDiwUUjo5WSYXfksNXHZUuDBRBx6",
  "key12": "3tXbwzAoQD8xuDmTV2bXf8AK6wqQQcg6zp7qo5segZUJyeRRewDJp1FxbZdvN2QW8fy7akDhoNjSEt6Fz6vpqFeJ",
  "key13": "MJcJy5axiVEcpobY6yhhixZxG3qVbHSXe8fpdrCpq7N8AFsQZcuFZe2eiBjnWek3wFBhR5TC7mb7VvtZPt23EzE",
  "key14": "5afUFHWRDqYKcUEXsxqcwocZUv5mC2Ba2zCHEQ9VhJXykGMHU1SUK4U52FBE9Qzz3jw1WzJ9yKSdtVh4TB3KdgCa",
  "key15": "547C9YCW7y3DhXez6E6aEkFUiismgbugYAE4jVtAvqncz9S2ya4YnCjZr42ZxFmsPSiZACcRZTn8pf26LgvzYhZB",
  "key16": "3DZo1Mn6gFH68bQkZXmzHL6knVSG53NV651W2STpxwBFtCfGLLMkst66SghYvBoqLexE9Wz18cpmNTESGJNjhH3J",
  "key17": "3vVESVDvfnKnExfKT1ePJyV84VoH5pb7caNW9y2YPnS3NLGudFywGyBzw1Pbv2tU8BdYzabinnXJSnWwUjizqyNR",
  "key18": "3RpD17TGHGCtuX19U543dBhg1Ni5ig3dCQJsJMAYWdmAPr4W9WyPph6KfTiz3T7CBZ6sF4j8Sd9riXRRFCDmR4yH",
  "key19": "2q3NhFZZtfHAHVbtVQkeAjkPXR3Nzdy2pf64capBCaP14MxdcnA98vvsYtAhuZ84RSXWX4ihEyLLC4MwVPjALWG6",
  "key20": "2B19ast8KLwt4Aup8MAnTzY6zsjyXDxFcr3ki15yUHPK2rtbUdD7QKta5G6KNkyRKieub5WxFai93C5FH2Ed2v6b",
  "key21": "55cYzdo4EMTSNJCwf23no7uidrVX5NFADCx47ZrecCLG9vGyF5upxKdFj336R6QrATTA1ue4AVow6ax9vSwcjMAV",
  "key22": "UQM1sceBnaSPSJH85fSx2uTr4UnadqwZCGNVbdr4oxAyuGxPuRRVKezDXG7tsPEpnFdHbrZRgU2VDet726hxz9n",
  "key23": "4b8H7i6Kza2b84vPaX4LHqEZxGf5w3ZqepqFJYZqxGWxe6ocr1tvr24C6n2opCG4E8VxaTQoWYjoEcKWM4mjwstE",
  "key24": "eGTSmTShbH35BumrTqsucU9khZbHuowG68vPGAzppHTUrWUWmZvBqF71NJxZqZjVcTcoivFSEyRJELtzwojjZA4",
  "key25": "3Z7Uf8mf2bh5dh3XH9ExQYUT4CYH97386fbwPXZnNGLg1N2FV7gUrV1UaxiCH8Q6o3cQmrPLo8CBLMVJPwrPLtiX",
  "key26": "4zMRh4NPpeWzaT18TrocFbZV6Q4T7H4HzKrwggesHvFVL7eUvkKCAEacRNP6isXu9USKjvxtom9kA7LRvcRvQrJs",
  "key27": "5ZYiWii5XZPKxdTwmp42z6ou2rcnSxRx7ZYHT3SEAwPKQ5FAg2VzF5YVVgoDRbv22eTK3kYXj3ptu3oyjy3xvtZP",
  "key28": "AXxYLgnpiS5yAzNcgo4VoaEuy7N7AVzv2yBpuCcn4KMcg6MQ1BKYJisTowqoNCDbM46kBZrTzcAcLgZVKZTf4Em",
  "key29": "37gmg562iCnspDaUWBGJW5fTC5RJEbTB2UuAEECRJutvnaAttpESCppbdMpfrgdTESdQxd9ZScuqkrYRohnG1C6w",
  "key30": "61wkdNsDH2Do4vyii1GssjRimBGJ1U3Cj9QBKBReUW2waQeVY2ExezRbi3zFobLj3S2U6LBPPFpCNy81gXnX5Uji",
  "key31": "5xiRt5xwD8VJGi7V2jEKkwGBqs1Lrge74txFg3pciPSbRp4tLSdvU7xeCgivDeN5zAQJTLEJasRhmHQwHXkGCF4u",
  "key32": "4qPpZiN2VPAyPKd6BSY9qB4zZiNqaJHT1kj3K6wzJxun6fWGVd2YnqDLur1JRDpwVZmmJLurGTSbz4banjhYhrk",
  "key33": "3pcncPyWLt9se3H1FyP19WNxFywLYC58ApoaHQQA7J5uWG32G5DFxUWsJrP6NDtgB3S2VkWwhPmpa2u7vyg4xs24",
  "key34": "2qbNN7YbGRLPWnLfmxMBjEH87RYaCwpnFj57A3iwX19cdCvpY2rvJt31MVtT1L8TDNDB4fbG55GtLousQVgyuCrP",
  "key35": "4zLqXR7ZazPdVJj4SGhFLZGaCUA59Tuz5ekSBP6KDdSK5aCMwrhDQwkDJsotVAPCVL2YwL6APjrBJJtWbHUdai2R",
  "key36": "gmJbFkXSskGdqZ7WJTsMZEpXXvrHKF5bpgKurQJEy764N2aqdiN7yvteQpq82ZDoSxTNfoUbxyLotGKjPbnL6pZ"
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
