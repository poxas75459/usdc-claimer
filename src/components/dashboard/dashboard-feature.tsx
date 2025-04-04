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
    "3mnvbc9yZ4TuQ5mTKR1HoEB5VKhw4PbdRwiht2k65VMmo7vAWwzZ8jzKZwsRD3mHWw1C1Q1zdDvhsoCkEx5Fzrv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vN76EfijW9QXa1yUdBim6AeZCcoFzXm5Gq9jMZZtco5PZtjpydjVKAn9gSEQyzxj7FKVrKniCmL3QhE2Z42pCZK",
  "key1": "FECN8Kn61PiDbr6B8xj9kVxp1NN4j65fSQQ2EymfKkN6NnvW2gHz8sFRqfjZutHQe42Q2fDxzunCpX5uECNfhVW",
  "key2": "4tKe2eBgAGkRkL9G1P6TTYyZWdjxAh35R94mrY91HCzv1nvFZtd6eMkprjkht1xLZsLFytHc3miFwZ2JCTWj4wWG",
  "key3": "4Rq8kmKC7oKvVwFdaHUUhmXkFZvkZPkWy6W6cd1ywQnvXV8Ytrdu3cjqmQYQ3yhhbp71ebuU9k3zEtWD1XKkcPnf",
  "key4": "3NGqWenU3jr3jvYcVsQGZL8vSDVSneVqgNhj8t55WsQ27kCE3649xeHWw15BLan4VtDy99vbykQrdFLheETKM6kT",
  "key5": "4akVBXvnxtwRAYgwLgmKtrWgVbNGfu1uWnnLsD31yhw83ASLnjcPDWeBNqw7hUJRT5P4sjLb4bqkXiT2vRT9EwjF",
  "key6": "4YQ4qbUDhFdG6kZvSPyzrqWV3Q95EMPBkbD2U3Ga3mHU12owxx9P1vQyHnsB92F5DwwGFrZvjBiyWx1zyqWuvVVi",
  "key7": "2vscavz6czwNNkcFYgmFavEprMS8uS6YChjwzJtuLxQJEetCtuYAkxMte1CXMR3cNgmXyzGYj3fVTHTeRPSdhiTv",
  "key8": "5c9ZPPH3ao5CCZfD6Thi8HM3nvKdHrVyzhZrRj17h6iBuYgjynX7Ug9cRWEipjyZn7c4JYK2g5qd5DU6bYWyESzS",
  "key9": "4oe2cRbxviKRtfd5ChrdNqxpNNWXrnBN5HZKieU7tY2VqnGaSukrAny2uLd1tYHeUKGZF6hge1BoXjQ6R93Abu2c",
  "key10": "tCTEaa8mC1HqjXWEJWrSFF4zuZwn811imYtAqdCfsHMT4Abdnid1W5yXVXhkKdnxSAwT5KtsMFfY22M7cDbp8ex",
  "key11": "3sF1esAgFWDiWq3hvM8X9WXj21ubTepWgvv9UCMNmUw59TYnZMzSGWiYYzg2ZgmWo97uTtDQdukdMofsbbJkBGLu",
  "key12": "31XeJaQYmoXBwpT7pWetvHaJXkaqaRcy7zcTj2Wfcg4PbkeE3CPCzHiZuzMkLoUMv95kwVaDeeZPRWncPKKmKgXV",
  "key13": "3MoJvM9R2at1NUYBgsNcpzjiwRjhykKuLUvCHNuvYon4iCZ5nAtxTBq2HskrgyRNDjVNntam86FoQPCkGKAmovW",
  "key14": "3Q72gEswg1P71Z2FcBgv2i4ZUChctqY5GrH9eqkBDxpLeUKY9JsNn5M5cwVEu6u8cTtrzbbkNWgMFkt5QympSnH4",
  "key15": "5daPSdnPHRQy3ce59sdorVBrcsuBNR39bUa2Yc4DaXW4Knrq3FtDpTPey95fmZdkevgLtvjH9hUv8227KMftQUmA",
  "key16": "4YzezKq5wmwcmiRy4Y7SUkvmx7bu7MXL6MQTJJC7xPAtKbfAgU4WKhwSwbjkjjkypXsXV5SKuqVyDh26bX9Y9rnH",
  "key17": "5ZThsBSwhdLUTDEXS6zeo76jgkuXNhFdpwqLCs7nNmuPc6ADD34o8cmHfSCUDcfm77626Y8VBEt9X3vthL4VUJoQ",
  "key18": "3c4CWpDjoTACMC5ZkufvfgjCKnbLQs3sbtBjzgNyXPcq4GRjH9fMYcckCi5xJB2VuRjq2bGzHV3K3VQ3Vu6nKwUR",
  "key19": "3nGSLNVJ7B65avKFk5swvem95q3EgPL8RJ5V9ZwJdWSrGY7vwmBGkD5GdEbA2sETHyzytZMcKF7D2oyqDt8iJBwf",
  "key20": "4fY7Xiti35KejMexqpCCahPnbrQbTFteyyRLV5vPDhLWaV5TMc8DC9PrNsK4dRzmFv17398dsWEc1gBRCa12urtM",
  "key21": "GKPofYhegYgohwTWsfxVkUxFJ1ptq3YP4EFWMH27bFdpqvdDMps6W14hEshqiGxT4ivbN1Ma7jXf3vDFU465pFh",
  "key22": "3Bx68EMWTHupGZ9hnMW5r4vnVvBb6paQPgJQQRtxsPF1uaXsgGfPVD13NpFXu3TRrLwx96qByrnGK2LFEvKJhJmU",
  "key23": "4YNE1582aLpRHgKFyKdkHRhY85v9RQECgsdmQbrHrp38BYizvtwgBgogUDRY31wvzcRiPwejyeHM57MNEqaAgaMj",
  "key24": "2nyhrudoBfvpusqKq1WMULsgja3JMFBdHskt7MoCGR8preQRoKwNCCn4gnvP2UPWdjPEWkqR8Vo7oTLx9eLek7RN",
  "key25": "4nFx5635zMBTYhPP9MVyPa6hoVK1nvoEGuzJhC8VZTFZYDoQSg8L6fdnQ1HobygqHed4vmYGgJAMvxXBtNAcf98U",
  "key26": "2PezRhZVb7sVCxSwJLgNcb9QKwwXadUWwu3hz7PzhNDWkuRgB7qNADwPLh5v6LrMdY6z9y74NwnnaRV41A2RzktN",
  "key27": "2vYdXTTXx5yDXykLxMSKNLxaqS8QL129ZRgZsnBwa79artLoo5kWoaAgsm6bSWZ4jLybhkchybn4fQ4DB2Usxd2K",
  "key28": "399JxUYaXT3PhoSmncykcCxx9cnGbLdGeC9w1D2iikPmWzExBpboXUTZy7sTVV9KQbo2jTxAGywyCoS6mZHABks9",
  "key29": "JgVjAzNWAnvCckkt6m34ZN2apMy9DiyMynf7hkpVHAvkshFbPVdV2eiUgaDwrpFx1KSAucqkud6KJJVyKBNkB2k",
  "key30": "3AyZ8wQRTkCgzXFd9PmWGDwXwrkMqB1Jwa5nWNm1wQ3vvwZbw6rJUYprWsV7Apzw7zu4LPP6cNCJprYnt9zATkyp",
  "key31": "4e9rExLMHzzCJUjVEywwRx3Ng1CM9Qsr7QYR5j56nUsZZJa56RVxwD3o4TSAS4BERFwtH12yhkF4fTgjdcB59zRJ",
  "key32": "3d3zXpVMUNF2eb2ve2uwELSJ2wkcndpBjykJAU8bwkHYK3rWzzWtc846Bb4MYeTJ4nnRGptcAYMP4BFadSNKnfXL",
  "key33": "2Z9HiZ6gNj4ZVSLnQTTwFTUYJjev7hdNMzymeoxK5wwubp1MfMmTCK5UWwXKZrESBMnninSo6FmofSXNn6je56LN",
  "key34": "2V5cRGGizBZxFGPMaGWnLLw28qvGwzSCnAb6W7TzgC2TKQGEA6Qc75tW7dbDpmGJf35ayF1aE3M5N5hQyuAbSR9",
  "key35": "5tWzbqrM6PKVZqaAFKgziHLV9Caf5fDVNPgqmWcdvYezbXxJRwHMdnRAPmyifdtDYEyzEoXXHQUNfQexKhuihTKJ",
  "key36": "mCKDQZiEALuooRKbABAidhVAzUMFEApmDQVtAmZFVons4iB4JF2UWthQKzyyoTTLqM1XkgELH81N18bBCeMvqTu",
  "key37": "YJEzEsR4CnCFKodTqf8QoDu5d15M64pXPgxoMymHjdoqw5SgnwFuquaWvCXF5EYexJKhNf9wLjr595Rb2uWXXPv",
  "key38": "3uSUvdkg3meuDHRPuZz5rzArdkmNSA39KL2ravRC6sXemSmbSuUcw3QxhmN6jW9TSs1FgWaA6Y4fjYhMvvW7HCj1",
  "key39": "5Ead169t5LHVZS2C4rDxXTEQVDsKQyJa4cZzUCaG7jEyRWqhwpjWcNwsNNamDo4msiBiLC8KEFAzhM6ZniLjVvB1",
  "key40": "4kGFpJSCv3tKQCupG1Z9BwNBa8UUM5HS546WTtvTJ46mmrgm7GeGcTD2vPNGZ6K1KZyFYSEtoDbnbS5cmV14Sbip",
  "key41": "3YFxofpLQ1XozwPHQXniBUBXVMY3tidEsSRAx4f3BMXGKSrQ22qWVPWcYGU7jmjyaPFRWfZmxr9amQQice1wUr11",
  "key42": "5M8UTDfY4WVnvt15DYz45mKB5vyVhxVeWehMLD3QSNoLhMUxcScHdQhogEywotq3NE2A7cZZBmuyfxVcECuoX69P",
  "key43": "5U39ywUmTmrGYg3X42gtUgqkHji2rCYCBMhdRe5JuZEQJMPBuyCR3xY8XJAd6PyDbEt8vVftrMWJafG1nuJSXXHL",
  "key44": "kaG4Uj58BBvuaR3UJabEisCt84VpgiSshZLLLVGMafepzV9CtcKRT8rgt9iq1tPYw3R4Kiv1LgXxaE2YYk7qhxE"
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
