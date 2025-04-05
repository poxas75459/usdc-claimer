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
    "2Bd4L9wy2ZbBmjaWJuUggf4RgrgWqHE4AuYEoyV1BigvHAL1D68gFJGe6fnRoCbMBaN74ZmP8NANxBXYPxMXtWwv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Ket5SsdoDb6R9E4qzEfT1QvvLEvfaDqzEyRm2ECSqRPVUhXt6Fy8uLSAXXFfZX7YbGsUkx7g6s9uDBTH4W995J",
  "key1": "5BqCZcKq3ybSFLkT68TVHR82rR5bTXtU8MWf9ay3dd7LC6V1BQpX5UiNtJmMmNNuCZhTXb4p2HniemuaLsrLcQ9R",
  "key2": "F3GDR3mL9HsHSJKfHY9DdMvzJgJSXxQmfaKQDnSP4FtksCrCs1gNUaTpb3DLuQvbZj2Y8Qd3aMrSan3i63zmLay",
  "key3": "5nLJnMNJvADErKa7mmgm6GopdUR6Udt5K55LPdAKG78LeJvqhcHpRSW8ynD957czu7GU5gfwkYQYmiNyFk8zUpV7",
  "key4": "2YB1VBitDPpW3d1kCgEAxk94uNKFBuz9YYF22KfrFAhCnSvU7w6Trd7K47AwwVicnQN2h9qMWpdip8Q5hjW2feEv",
  "key5": "2D6Hrx7LQEG5WwFyvV3tAYNaNwuonoE7T9SrhAnMhkUbhjyEvE35nAkf5h1fCPJugforygcaZY1tNS6ZrAm73cDK",
  "key6": "5MiCDtBNaKreHzcTGzTksRBj7D7PYvL2qK1cNcZMTqvkRfviBz1jwL3Pwoy2kPfPizwviQLeGZFTxGP9KAF7Yfmy",
  "key7": "2AUiJ4gFVfiW6JbeiGyGQaCqrVowEKYguQrWhDA5UMhgF5iSbZ9C8pew5GxAbJupJwKaUSBigR8h1Snn9gLV9g4i",
  "key8": "4Be21bnA2HcouHgsgTbjpxAEtbJk688dwNr612jVDePVXFtXcgEXeMsS9KWQRw2mauUPuKwNn29HSEJRCGHnrcmJ",
  "key9": "4DGbQZgCse4w4yLtEvh7wUxFvsQoZXHfcojA7D88BokSh65EjgEtmYYY6TFMwuiszLPeJVRjbEe61a2CGP9exydf",
  "key10": "5qKxRMwLbpFSHobwbvaTepATU4DJgc14Tc8gRJYravXYD89orjTG8By1RC3FxgUpvzjDsWQoJBPRjNbCtETrxff4",
  "key11": "4U38H5rCFVhMa9NTEPrVo85QRQV2E1GHLzyVrf6zNXcNepBmSXaSAzQLXEttNFgTysy3rKUpPnKBE8BMBxrUuh2D",
  "key12": "S8mLGaoAQJ2JEdpwAeQ2KMVMkP1jvStFmvhz4kRGeLB29BsiNR7v9RhFwKgK9p46KhtzJTcZWt7NFrWtU3PpaUW",
  "key13": "59LFcYNFGa2Mjt8XxY3wyR5v2UHubv5965RT26pWjiuNWFgvqyzMQGyA9wMe4W23Pq4pMWwZo5nrqHNBDf1nmnjG",
  "key14": "39ouRYzWEnz8NcyjPgEvKzeBVczr1q9kegEG4QRjMWwxNP3FBc61fxBzVbVfSoyuJdJDSXtsM3D9hxWHrTWY95nw",
  "key15": "4YQs3bfvimSYWj2mSfekvn139JQQGW3ZwixjsonrABRv9vTQZokwet8fQ51iZnYmAniMYKYSQQEqKKkvsnVirdzd",
  "key16": "4pez3vB79vr6QfRAXof54GGupVYyFtbmP41BpfqqoahfV3Gh8ygBroFXdNxudrpyMgbKuyLemKLhD7LuRRJNivu8",
  "key17": "5zYFJh8MjfHxyR43b4Y7B4HYisi3qasiMrx8EsG9sPHbsAK4JMKc45UsHZiVuJPfZCJFG2mhPmB2sS8oSzSwUAVR",
  "key18": "5npETGG8zM8xRgoB8hoA6Rd2iBQErmZ9SFYpaYYYw3CwoAHUZkhFLMfyMEsw1WN7istceGSLjSbupAN1X2gMQ7j2",
  "key19": "U4VvojwnjoBgRuKEG95Y5tFa79DvbZrU3NYWmGgRR8y33Y5rApaXyDUu1NoY16JmdxvPbSqjcCYARybWbacuoQE",
  "key20": "4eSbnAx76UiAKEtdAvpocmjmc9tDLuvBVkm4E2Xkg9m8s9zttJDyGdwNRVHQDrRs8yTce4zRdKgmYzNqCXYoRePw",
  "key21": "5UcewFfhBB2Q5DFFtRs9bQmiM16xjSvvpGetkrw4WraiBu9bnqi1GtSrucxjT4FT7mZDD4tM56tL8RwRfLakEBde",
  "key22": "4ZUNnZGwygAAC6CC6Godf2oJTKN66PYED2KpnRFhcNGEAoCi8jyC3oB3PjnkWEPX6184fqR5vYQgENZTvHzAusmk",
  "key23": "M1SkYxGkVYHArzgjKgnBWfwgTSYcY3i6zdc96jHjcHrprSRqGf7resLacMdgWLhbwEM8RukRbWTtXY4QysGEyZC",
  "key24": "5nW2EM1gszckjjvQ9gVQLze2VLoL4EKjEwVHhVWaAQLU6jaSUXdKoVpEnZM3tuG4a6eVeTceAgXjxref2SfZ8GDd",
  "key25": "482ovsBWHvn8puGcYTid7HE4VSdT46x297uhmFevcTpjEr6ZytCysraz596MGf7PNmeJtdH83p6urctWo5rgfQh9",
  "key26": "3cb5VTAXYsEzTrMCLnJxUphQgG8PVVhKn2sAQyz3odoqRhWpyCuH4fsiUy2znCrBJtuetN5teyXBFSeXgYmPsXU3",
  "key27": "8gBRsjFXabs4AvvFzQ9N2Kbm7JYrrdnCiz6cngS6ZsJx3oox6otCZtUVqAaqfc8Ri5RLfV3mfA3dMqvKxWZZunn",
  "key28": "4wJVqUBZ95X6STpdq8km2P1XMutXtJqFhcALGY1Yj3SX4GaoVsCYSZcgVj58CrLT7WUHjSLdfAooXrU3xTfrL3ow",
  "key29": "56fHy4f6VZ4j3MiTL1BN4iSxJ3ujEdLRJx32AY2Qdj8zt6GyQn3KiBbxGHnN1uFWajvKBk9G6zLyj7FX8zLe4oQd",
  "key30": "4yv5r168y1UACNSwMoPazFHyTxisdQpZ2DoGhWcweCd8rowDtXCcLfbUhsLkteaHCAGBoiaYXqr78e7qg3iiaxY2",
  "key31": "5ETdwcxWD8Uo8PuDM73LuYbAGX9CTRMPgZjp8DKpMoQ8MeaDgWjCNLMdjE8C7UARPJDKQL6VtyLwCb3dUu31pHms",
  "key32": "259fGuinCVzkCw8awFjqdL1pqR9XnaxAZdzab4Lgkkvc8duoVyg6woiSVs3gXQRkFVAFm3M1YCWeMbcoPMYd4B1G",
  "key33": "weTtqcraX3qwSs97s2AdYcS2JvtbZiB7Z5z2p45wAvY8fwxQgsJkM49gNEihTztqoGqA82x5RCvo68fiByapnZo",
  "key34": "4vepVpG9Pnae2GYX5UikGdawiNuLJ6scVEBcujMY5iTKPqsdWzS2KAjytPSnSWqFXE3pN72gn2LFzJUWxeEK6TGK",
  "key35": "kBmFwohcEXZzCL1xVZFop6SYXPzCx239QDYmhXKxUW51AEh9gkbJREHKjC8EhsyDTf7q79b7gK2mbErjNKc1A7s",
  "key36": "3VnrjToywLMeictozam5J3wekuBVFCB27u4xr6gTfUCsQqVw2tcWbBXxcqWanb5bj1gj75ZGdj5pFvn5GYgbBxt2",
  "key37": "4r2eixUp1iUdRWq5mNcWC5VMG4e5jMGzaCgwiDGvYdRVXi3tr4QTdUzKdJmMAEHJCJym3Xhv3ZwjsxToXzkX17ig",
  "key38": "5Ghu7vLGafmwDXWrAMJtnkCLRpL7sGvn3Zqg8H5uAppDoCLSnhH7vhVpT1Jt8v7ojH69hkXYMmoFZyYeySAKzjPm",
  "key39": "4WpArPaa6sb8Vr8STSo67H5Xm5jdzawLyHNumDaDX7iKvdboDw5qefeCMR9WzUmetAiQpCjartcHvHE5ywmbB3U7",
  "key40": "25ShWsWxvKzoDacJ2H9sJdF8H6mwKasfpfm9bF8XMLYE5YqJVYGw8rkoi9Pti1xoYmdWnMiLbvYVp67s2usLLywP",
  "key41": "AGUWXTMnmh1UzePJwyN48AW6FVsRidXeHGDQFSfcGz3DS3hAu56bBrUgyaUhujEaDH4cMrsjsexeUYz7FwoXCLZ",
  "key42": "4Uc2VCh8A8PEoBDWzwV8U11t6ZpWN77vftAzsWjFmMMkTdn4r4fXAtYyPfX9rsK7vtzTSTKTtbbFX6XSo3MQ8bWv",
  "key43": "2gt9PMzgfVeGq98jCGHXFxaxVWAULqCcK2PCKEwYQcXb6pNctJq1DrNrPfkLbykvb7SvDBBdCCCJKSy87fthfYDn",
  "key44": "gNPv1vP66rniK4c9R25SVvmzRf89CAhnVnHMd7aGH41vfFW5XvRD9CH8j5VLrbsmTGzvF8BUs9tymvatrsDvyU6",
  "key45": "3kQuQdmzmTycUnnZPcBU444eKBWA3WmFxKaiivGGYQKYFCRd4QKD9dxbwS1tTZ5EhAhNVmhbV9Ut745A7ARawn6x",
  "key46": "2TsX6RHDxDfAmdrbn7tz5M1BAyR5fxMPBPngFLFUKFZ8o8AaCDAY7wBZQRD7KMTzszFm3k2zNXmLJ812VHKE9ywa",
  "key47": "4c1prcvXwDrTAkSNzDnw9rjA67VCvGtkEa1zDMi66TAv6Rk49zyBXVRtkcZc2T9ZrrVVE1RWywreqm7oegaA9Bhw",
  "key48": "5Vg6copPpndWxJEDeL3FpnvwcUZAs7tXQyKHiV9WLA5JLzGvd5zFF6uGTcMGECwNrS88bzeGJ3AEcDY9cbhu2K7n"
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
