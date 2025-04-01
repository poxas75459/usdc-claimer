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
    "2ZKwkqNC7m3qwhLTpPwaTmfojKbP4riHJMbNVpePwPcrzjdiyqyounpmfHSVUsqbmYzJAZ6w8ZYxPi3jYCVE9cqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4foZhSdiwbbuxz1PxdeW5ZiVxbmJVAEWKeu3tFvaYbPmQ1JvjReGLXaTvGvZiYciZo8EiVfQ2u1RWJVbeXs7F2ZB",
  "key1": "2Agx3BKwWSQ6UQ4srpWRgdHBHn79ruVriUgY9oxQoiXQw58Rceh4bNJuZSn2ofHUrGN7pFUaYqawSLxrcrt2E1xo",
  "key2": "5Kecg4aoBxAQXaDN5ZzrA4rQRxFxaVTHseFkxVjXF5kjzemdP7cao25E3dB2usPyHYNm8si9tNnMfRfx583cvTYc",
  "key3": "2tYJodqD4sHEZxZucHG1Fvm3uJELgkpXzRog4Csu6MxPaWGb6oZY9UX3g8HLzmyZe4REZJF9TtfKaPgoZGc7M4wD",
  "key4": "4mEqGkLBcTc6BoPVTqwZSdXVJ3RoNkuCPWpHzdZ5QHvMVQevftD83mXVYsEUzPL5aQkFyoGGRCPiUEsggSCwynWo",
  "key5": "52xrLKFKj5S5yDrEoVSzbeVMvDVg1ehwSPSvqg1xqkTTTP5WZH5xCxefZwHiygPXnEMn2VrQYNrhorsjh8E8Q9n8",
  "key6": "5wgFqKGtCuLJxrfge7yQoQMkk2k4E4LXFLBQU8QaiEQk8w4WPEmWx8344JJba9tWwSw3HjUJYnQ46wWDHMBowa4T",
  "key7": "3cD4w7wegTeTiML7nSnbDJrSALfk353kD3tZohUqPyfHPV4shQRsKhjj1bzEpBdayrHR1JPzDbcd65JJve4xyYf9",
  "key8": "61mrkT1d4g6RuiYhnGTZXnmSpjAEQ1S8TojVhSWyePyyRtJbMjP4VY3NcMqsXEfYPabsXUbpKHd9rTxUdPi2jRit",
  "key9": "5C4GWZjzFHUikYdWEvKqSWHnf8vEW4WVDmuXpyFHpcRixtCuTrxdPSVMkc3XeKDMZVLX9QuuoXi3FgoT43Q3PJJh",
  "key10": "zGarDUqKgHpC5rzDSgeHto6ECMavu2troWtZqtyKUVLC5AWSUN3tQoF2jpNbfnCEapnwynp4BBafZoLS9zHLc6V",
  "key11": "3n3N2HdR4AMyKv4iQdJh23M7weniRb28meX6eyrASu5Szc83raebA7y18c51DVyiFZPkmUA2K6gRqgUCrNZmHVmA",
  "key12": "5zGH3NHY8xp3cdzSNqcHtvnXNjXg6kbRGSLkTRvn6tbGLJrY9fuwDyDXXCJgRG2rnx2NrxTE48s8949LXBut7E9y",
  "key13": "2PpMLL2Wd8Xsx6XVD5gaPjkYPTgnmQzKutY1cx54SgEULfrYrcCfZwWAmhyASnULQp5u68SdAPGSjzjmPadtRqQ8",
  "key14": "4VaseEPKAoAkcYotEQncc8JnrSMhr3jsUNii3r2pyYaktRyYGm3Mpg3LXfQ3pVxA3S47mGQGXa2vLPstVoUS9ek2",
  "key15": "5eoj8en7DrTKoQkbbjdZyJwCU15GGVMypsBR1595v3DUsaVC6tbhKfy2MhBTPtbSHXr3KREZh35B2KRo2oVUpif4",
  "key16": "3YnWfi6JbG9TGL3UPXiyNGyghWQXQS7y4V7VijyGRfLPa3ouhkWYPEyzzAwC9mho8pXiF1HucCsAAP4VHguN5ihV",
  "key17": "qrsqYipq2EYJzcawL9rZDgFPbLH3YmoavJxcZWL3QtwXz7qnAYHLW8QQnTMTXFjFRnv9jNGth7CHcCxxsaZnnMK",
  "key18": "337hm67bbX93rUpisY9pcVvuqokzeWLc4qSHcxAFPC9QcBLjBYhMA1tCAb88ZNeRZ8S7CPkKDt8e6uWBNHdxQRGE",
  "key19": "5y6S6W71i6fYFK419WvZXdwbKBrxc6KFkmKbjB8Mnvrq2znppRo41EFAAkLQEr5F358hqWeBNdByPBKwXZ1hXkEk",
  "key20": "3tE8fpyzv9L585xQfnZQY9D3BW9Zjv9U2Jgcd2zv1ZFonbdHfdn9JVTt14uvJvET7meAMoAz4pQGihEzqU1inckq",
  "key21": "5YeZdkwkv6u7ZYTukhcLtXtrbknL6cTmbxUn9vi9SFfr7adQFLhvLiHK4eYusxbtXRgLxrCViLEmzBFcbGHF9HX7",
  "key22": "2wNahaiWmmsfXtbSnz87WTaVcvNoutkbo87YbP7VratXFP8GhoJxxbX46R8GH1U2VLzhpB4Qad2irv7QPdNjwaqh",
  "key23": "43n79Jymk1wdTKFzW4xXD6554nTDgCMDDWqB8zrcpcTFpQzYAD3gNnH8SUZ18RQetJbHsKo9Db4YG9Y9WzejiN7z",
  "key24": "3TyKdsDerMzJCzEbrgLGScUi6UQ75mxH4m6bucTSebUbo5WHjWqBtU5s9L8DjRkbHmgjpHLpyhxfsZ3NZMASguLY",
  "key25": "QhSUe8H8VwnHA6z39wzPjioZUiDdDsJAJG5wmTi9w7kCHoFxBnsAgexfJeJATcjumG27YdmJYt7hit6EyxLPZP6",
  "key26": "5tD3ZeN762jz3kHTdnAeic3zdddmhvadBdWgZ7vJuz8XPuNWfBLdqDW1LzJ43Ud2upphXaSi7J3taczWGtfedqeu",
  "key27": "5N9virmn3oG8g8dy59bs9Pboh3FWxjUJYb49F2H6etvjzUmvSexTDhUa9NyzV7cHyLArDv7ArFYrka4zwsKu73hG",
  "key28": "2wkSLz9uVG2NMXg5hgNBgFzJbyXUaopQBzRkZnujznMwx9WrEvJxcT3zSYQBw5QsjTTEjADgTxG3xGJzAeQokNaq",
  "key29": "vwav7jo9BvccnhdmwjFTeX53yHTypXWJ6Gt2RyUdm2GiYi4zrrDvpYvBiUyaFv4gnYbXGoZQhZs1aKqYixt4GNc",
  "key30": "2KeWgcqWyYMF7R2pR8FpxkaeMbtET3exY7o7eZqSDF7twGJxYZUupFHbUFYs9ymDEUXanqVEmSC2iGqhGJ22zUVZ",
  "key31": "4MteamCEWM5pwHo93Fhfy1ihJE9zJUsCKuZ8Ms8KWXM3KCFt3eDNYBwyLnNpRnbuyZZBfdK3eP538p7sVpTYLsY2",
  "key32": "53dFmtrArsgs319NBfMRGugFbKFCccMcQvaZmbHrGTMDnPgeTm5jPYxkSy4yUZXTB7HSAYUuiGx73Qsj9X7SNmCh",
  "key33": "2ojK3pZpBFs18nSL9cPGEonQV78vBv8cnkPCvmuh4J1fjTWFmRdkf9xYvgVfZXvpYXx5VVxXeJP2a1TTtE4uZumV",
  "key34": "3oEvrXPmxT8rkTnfCc6QQAgGWNsrEnvekMxh5VmdLe5ZsHknC5m5baMyZTQZUwY5hnRtyhDTDBDiPX2TbF9c9T9Y",
  "key35": "McN21JkF9THBxH1ttbXJ1s7QGxNZK9MYh9rGPPw9u1vxKNZ6gAdYGrZwb6gTCNGQyAtHMoA5ZLNoEtRGWq6kqMd",
  "key36": "4BPe69j8QCm5RtVLznPTKYD95iQtrrUt8G7Km3WYxSsdmdzvB9QTveZrTzno3uCtB7FBTv6rqjkTHizEwJMzR2nG",
  "key37": "614d4vAKKcAaaCuJ4NLYf5uuE9FkaXRrYG9P6srVPXiYtr9tWR92wLxD14KQeqyayN19Y7MbbpMPbnArQqxCo2so",
  "key38": "4uBK7pNfWeFMKXUhiFXNYHBcqQfpB1mGwbk63qmRFHSKGwWEuXgoDhyrUamfaPVwCdhqkwYcRCCxQ5jskw6mGxii",
  "key39": "cwLKLEeVhMA9XZvQ4eHcmPcooRsbiYxRNqRwEvzxqZXcoBC7xe6zveD7LF1KeuUt7jhNcSR33p7Z4FS6VohTfGo",
  "key40": "uHnfkaDg1KjQmBurQTJbGR2yiJuvDQyzgby2H6drLbxeav8q9hk9k5ZTGaRJCM8V52L4pHQxtAxjfR7AY7QFWt9",
  "key41": "3pCcG8f6ZbQN9NKqjmq33TXu4CGnxRjYttN1zyCZhu5LBpfjjkSHt81c5AZmJJX5T2apUvneoPbNiputKhd6WuGC",
  "key42": "3M296eGVBhsCPXUhnFb2JskDXp619uN8CrL8ZwN1jFf5Vv79Hi1Dhgx9TBoUj2j5JFUkfJgcvSQFJxJUCcbtNq8Q",
  "key43": "4dKXNutzWgCgLECSEj9sUoELmwRMD5oNVP3TKiesaRr8LXFWMvLb64auJpcHfxRwXggvJDHNA1MvXUiiCe5Hbe78",
  "key44": "5nFZGVpWwB4sCUJPn7zEQGiZyAErrrfxQaQ88WmX5vwUrhccUSa5ZdHi8W6K5UXtb594FVw7TsUUio2qXwet6jgf",
  "key45": "4DWzPy7VLHGJGiubh2nzFvLH28qCwGthkX6KjTGcQH4tTcdDLYByV6jkqiFbQHB9Zd71QAnivWeD7LR4UCAnFUbW",
  "key46": "2LMe9nZ8geACDVnXwfUQpBzqTnWKhf9t4o4bp94PJyTECASGKNddetKWQ9WZV7XkcZEYKz472i4payTKfcUakNBN",
  "key47": "4kiknmTJHRCfXMn1x7DLKNNQcnqUzAqyh56ebt4zfKpYA2sgcm1SoJz3CU1D55VzuH9sWXfRG33ptrxz6Pzxs1eg",
  "key48": "4viri3aKdKGbktJ8XEmNSjumU2asremLAkZPxmpMgsKooZWurUD5WCxSp8U7MF4eVLoocAW18x9xTT13Ymky8fTs"
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
