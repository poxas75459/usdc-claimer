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
    "4sgGJZTU1GXuT5Fb77WXokWzgxrMu6ucRWz1aLF1v816ZFJxdvJz1hT1vKUVguhmbaty3vA5ZCG1c6eV1rZUsxzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h87ZLjEGSGzRuNuVFphmXcGpy2n5udQtSCoYrRJ2bjaDWzDcDHVxgY99y2Edq8AkJwCNAyCEXVFatNFKSHCj5oD",
  "key1": "63wmdyid28xAjW77L6oAXG13iuWv6tdaiFHveWMhTKsgz8otg1UNGasD7my2U9pe5iQVJApusXEyoq2MP9jeuSNy",
  "key2": "5fCy5FD5SGUYCYgWJgaXACeuM9zG3Y9xfL4voqkhfHafdhFi2bkA46TmA2ivUmPSmLxeXB5CN95ZMWgJrVDerTVr",
  "key3": "3Pjs9p9rie2qwFcVxe37k9xNQyVCiXyk73vvgkb4WJ4HjY5j1Yxgkeb1kTBUz6Tup1U83vuF6R3bFaQnBpYkZCVA",
  "key4": "Bkg65SRRj7DHwy5uXDvkksT5akvF5JvS9EVJZvCFeeJm6GGTCBvYeqb2MovqPdqVh7AdbNvduJyPduLBaJQhFxU",
  "key5": "4Yh6B6S1dDVVjxC9JSgH15CH7Q5FY5a4Fv7odwWRruDjG5EEqViiLyrwVvife6jWRh1iB2aP1gZACDn5ibbEykxs",
  "key6": "2wQCji7hzpTBJ6dQeeeLc9eLcfJDkGaLwBB7LYw4ZbJqN2MGBH83v63NjKAC9EtS8tyAwWhgpEt9pTcKkCTJ2DkE",
  "key7": "2yPTimw2gsoC6Qd3EsAiXwPP35ggS2kpF4UNrMoZWcdczcvE9f5KfuFM2ayrAVFRiu7fKieKxiBjz1k1GYifW5Dt",
  "key8": "JXVerc2AQK9JgxNiN2vK8GAXRSyP5dbd1tUefEDsS8bQ7ALxrkXr7C6rnGNmQD1iyD7f5EeNb6xQfsky5V6ochP",
  "key9": "5PQdSYfeogZwGxLnq8P6UVq9TwmZvc3Na5GVuSV7QDxiadFsDmvTT2BvBwdHL62c2dS89hGM5athbgiFivbgeLbv",
  "key10": "3nzU7ieDuowomkVLBUR6PPqbaXFrqWdpVpnGm6q45H2rZevMSfqPUtyUWBE6fRsdQPZUuQGdyMSKZfVajHmLJb7s",
  "key11": "3VAZBw2wNAWXQe92UHxm2s6nDKQ4t95vjxfsBg4NKioAe19N5SbmFgQ8qkpqE3xo7BWMjZnkZXbE3KvKP78tSHdr",
  "key12": "2xPE3sWLjz26iQgQ2Zmfyq9nJUyA1scG47x4jsYuYV5YuRK6kCM9hstKp5cgWdxptET6Bi42rmWQWfc3pE6UUUjJ",
  "key13": "5y7HUugtrMUmT8xE3ndsHjTAEPP6a1QGfADB1jEJvGqrk77S4EikdnNUr7tV1p67tz92Sv3Bs5NCwNTRzag7whAQ",
  "key14": "2d8nZGdUmnqSZ51KdHewAybpDs3MQ49S2sfo32ZNqesDzDxShPDLvHML98dkRKeFs3qBhFb9gTLnHJ4YRCAF3yt",
  "key15": "34PSGj4YfgUh6ose1abDF8cVgVCaRGqmSb82bAVuso23QdW453s9R5jW2Hmb2t7k137XDBSHa6e1inh2nUGZBhBU",
  "key16": "3bvQ3iUdzp1cPEZVau8m1yBDnySdEBK74DWnyYZ2nMA7JvwQLnnnXKsYC9J3TufdiU6u2gEj948Ex247wL1Dgat",
  "key17": "5pWGHLd5u3HDhyhY2WrNd2doy5qYbNgiNk9qRJ17sj93TaEvVyVF3qhcQoGBhAJq88N1jYTdk49RQiMPPAHybKoK",
  "key18": "4LeK4NtHnsqZyEFeYyNyh6DDb3kuUiCxJxt6VpJ6ZgFxuJvFJ9EeeE18gwyTUFni2Uefb9wjHkJBTp3UpREC89uc",
  "key19": "62UYeQzbWpxNnNoQWijnbx1K2DyrfS9Te3gWEj982tBTF2cq9UD1MiT7tVGpFzJbrhkC9YCBi7pxFiN83Qs3ZytE",
  "key20": "2uJkcATqZLM6V4zHwh5BQZn5zcEdcVeye2mwCdLC6uYrSGtJQC8eb3Z7ebtrHHjbPhDp3BRhKNHUYNU8XEVbD2FZ",
  "key21": "4iNvKjFEti2hgXRDQ4aA13hZmBsmEcQxEAcPx1Y8p1y5Fy2G77N6bpgk2rqjH2eogNXP7sb5J9VXx7PUtHPAEXsi",
  "key22": "2muD67nZNTjVk4VascWeUYerUccf6xgzvQFYv5tHgHQfi7hPVHh42zzKiNisYMXnrmxr43VuYnoHPnMyQzFR2jKC",
  "key23": "468v9frmVZGPZA3RBZD3iTSaZfn3MAk8KasYfSrjYMqrtnNpMi3V31jEPwPAzTnPWjr4uRVYhcgR5gS4TtQmpvku",
  "key24": "51Qq8vzLVfSoVPqoVHYFwAvHcQVjiREu5seX9h1JirVCusRHtTMs6mmEvvbEz9ZSw5h6s9YvdkQy6udtPdFbdcbt",
  "key25": "675uyvnpHC24VRjdL3BCgL1K9E4Q4ANZY4uGgKoyqkZX1yku6XnJHSKxEUcGWVVKoL6MoE9m3ErSYTeeYyZ8LaSK",
  "key26": "dW3EFfrhw3nqjBK3xBfXwGU3X5mpHCuHdGP3bmQwRASXy9UNjtAUGPd1Ka9cgkeRSXJ2WFsoLxQrkXZ5miqebbZ",
  "key27": "21fGVpsZo5vjV2KVuuvKhuC4L3MpmKLHBpp2d3rmzq8zhYaU74YGqTtaYjB6CJmwcW86j3nAoSe4ynN3NnQ3uneQ",
  "key28": "61RXSGiotQnwTSrxeGmUq33KU5UwbD3oAE75Ja8fMxm1s4W9UeXNgqv1rqmmaD6XegmrA2DvVJxXngSWiGP5GUrm",
  "key29": "65P6AeqWqQrc9UyPdQADxnwFjKut2yoxXQrfXp5cJaFirv6netJGe7j7SxLurW366Q96FitJzfCxVBzBGCRDvKbN",
  "key30": "4EvxwrtSm9chWn9owWWhtbqHrEeAPwYPrkizhyLcZEAFxVF5yfEDzn7WqXgkx5KGpEaQgVuscZxJHGWEdDJQqrYZ",
  "key31": "4gpJqY7vR6tgBxXyUY6yWz5FxstsFGhUkXKFERetBwp9pSYBHUCfKKbLdtaFY1rW5LAutRaisDjaFqFL9trKvMJj",
  "key32": "2Ji5GsiE8EKuASZfU8mp3m9TDhc4zDj3auZQAMAf1VEYtQQVTd7UGvwMjFSATJxYdeAfZktSWTQHDQTWSddU89kM",
  "key33": "29icZ82yHavZ5RHdejvfTCn3fXSKMzFfQiHv52v9TWByrQ4hWpaj67fJA6MytzHkQB1r185ieGKnLFUcZr47DGLU",
  "key34": "2yG6euZAa3b6RTC1MaMMBY4BNULoACU6X6dRB7Tm9tqPAyq4qPzzFL96fUGNg5NtdrynD4VA6QREKHZ6wS1xTg4u",
  "key35": "649oAVnfpK1sQDC4PfK3WC8Q2JHrka24ADzNXnV2UKkNPDumbnVqUyY7dzLheWYio7izA6epxmPQ4p9ar4JbNo5t",
  "key36": "5NnUwdSCCgaa6UnMtS8gcGyX8se3mtUiC8CbLatANWg8QGYXJUABjHCVBS4evzz2seH5rBJVeR418QChaUQR7PqR",
  "key37": "4GTB9pVYSJaUwp3kJXNq43BncDmNsT3Xmt24y2JUZAPrXw9QtB4mBcwRYRMjRES2BcLXaDc9gJjv9dCsZWnbidKm",
  "key38": "5B3nxpsxJXHusd9tWZdFPeDvL5QC27zGxiGAoFZhqU6YKYw9bUE5kXq6rq1QW9f9FQYaXYjFnDjiHb5TWU8vTJUy",
  "key39": "4VEtRcXfVdfqw9cPwdTWDy2rWqHx8fYXxQnjJhyAeEGv96E3kmwaH6pRJvzfaGRGKqSegmsyt6f8Md6bb7aWPBBq",
  "key40": "R3Tn8MopopuDM2CQ5etqwotXXgaqLpF6NThNy1jJoWSfyRuBzKjyjUffgMXzEd3W9qSb9dcWjKmXzdPyBirJQoY",
  "key41": "36BHJtBdK4m2jvPaBqwghRsRQS1nUQJB9aPyx7R2a5MNqkiBZJRvbJAWXvhxL1BN4EUiLyuUBhTmhzv7zUyRFKgx",
  "key42": "2JSaw3koCzPPiX3pZxPG5Z9VMcXnEgS1BTp51XZvCCzSW7sitUbHdigyNtDCJPYujVRnXEgm5BAMMQAwPar9XyNV",
  "key43": "4AE7UGPNnvwUcMAX2FQwaPrzTJeadx7faGpiWnQS85CRpaeuAjTAGirpK7PThatKqAWddzWb33iRfuuD9KTBm597",
  "key44": "5cgjvkuRKpAdyTgTe4cBFFYGPboy6iYjTTQaDz2hbuZcWe6d6CU5dVc5mYNZgZi8WT3wbrG77tQETbZvZtniacRQ",
  "key45": "3dNSaQjjj6AMpGUcDjS6dzeRu3tT8dXDVMhgKEt4H3d9XPEqQEFhFuF23jvr14M2TRGZaa9nBgmQyn5ofdjNEDwb",
  "key46": "5mLJEEC1868iTD4wramACSb2CAE41ubCZ4oCB9zcEdWoe3UMXeSMyjLTGpFSRMTVhZh4UfjmR9x2K8JsMG2QMqFP"
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
