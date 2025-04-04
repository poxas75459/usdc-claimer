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
    "4F6uRZqs6HqUv4y8Q5gd2SPqSSJgfchwEHLYishq1x2waS6uy93SfMvaWPnQJ3UjsN2KkzkjoReXT4Cg7aBGJo8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dz23QVYkJD8jZwaFkER6Ed8NFZqHj7VovqNveueyGkrRtMeu2mimHNEHyi4vx4QpA4wLbF2WcAk2oip8rv6W2Mq",
  "key1": "Q97aMu9jV3bSuVhbiAzpLEujJTgJduB3bHBgb1pYW5XrxiPBAtsGY7q1rZgwj4crGCAUWr6UdJVVv2KBJ4A8MFF",
  "key2": "3noiFpSx41hJUFUxfu6Gfha5CCUbnXdy89HvAuNxJbghVmKCRYqCXfXUsAenK8xAgrv8sWBD53XKC3kgSJuhgRob",
  "key3": "4JvBRGytrd5ZeL5J6UiFKDBJWx3aVTQiEXgacXhs4nA7e6f5vLmKkzXfByAkXQvkVzVc6Bq3EY5joJmWJT9QruwT",
  "key4": "5vxLh2UTMpjUuUENYMyC57ui4fu7ES5Vit47tPxFp7rqmLguTfAWAPVMrVKHKCaawrZtJgSjsCfgrjZnL1VtvdXf",
  "key5": "2vkwgxQq8oSS861Yca6cN8mW6L3L9kwFGiJ43gUEumKoUBNXnk4N5XBz1qgKqnShC1fC9nMfS8jdfg6EeCUK1Xcs",
  "key6": "4XbAcT2XmXZcYNByxpAhbaEAJnVPiSR1RQexKS7oY6JYkEYz8FXKt7h4FrpitYV9X6MaMKKoqSFL537B3fCtj197",
  "key7": "VwgS2NSNgqgLS7QF5fDEW3FhUTJoqz3sNAr6f8jbe42WbN9dLkBG3Ce6RAgTbFMeoKeYEQjbbwQwbA2A6o29q1M",
  "key8": "vAo1Ed6PBBKGvn3G8WHeN6ZiJzPk1x5aLxYGLd6uCU6U8p3S4sjVESb3viqtCyKYefbKUrp5C8ybrSgM3wstLnx",
  "key9": "DUe4e5v18EAj3a4rGK1khK8Kj6comCDeWKNfPAwhr4S6Xg4i7tRaTeakkdxKCmqJetRvph1ipKHKWYfjeXg12UL",
  "key10": "2TApUi5eeVxSUeWaUofk3R1tFozWHG6f6VnxDL8CeF6tgEXoC29DmMcYJxS57hN6gXfHXDDKagDBdxBd8i6fDozD",
  "key11": "533BJ6gtzR4RsFBjKFMvQgbpXKfReTsCMPqE3Jr7NvVTAfvy35hDzeVx1vMYo8dN2GCBoA9anY1U3zAWjyasCMgR",
  "key12": "65DSXiPwdMHFMSX9rzWszvLPWwDLFAbiMzcd5mKu4ehrVAch6cz752FT78eK5zRYfaERNG7W1DuqWtqnfX5DFx1M",
  "key13": "2mhU6ALHTzmNtUtMYt7cJfMMTed5ZWop5vnh5VNpe3qJCS8BtLyS6GoCp8eQF9YtMk9CPiGYBnFhvhG737qboQi4",
  "key14": "2FoYX6VYn74nobEvSwk2TtYaBZRLuJYFwg3jBfXWJcRw8gfuFYpdz5cz2wEiSrUREHP9PwDnCV2oDEWML5iLR95b",
  "key15": "54u4G2avgmhtJZSGBv3D2jFfpT4XbcGx5GmCWYydTQ39dmhwwftS35dJHUTbKz3xEGcC826LfF4n2VyCe7QdxHUq",
  "key16": "epPNcstdwZVyAbL6EVVK7KCgaKdg4eUNR1qmWQ1QxS27qG91m8nA4RFrMjYJrcWaBs7vqtPfvevYBHMAmzq7M7T",
  "key17": "3d11PXvQPSyqqWMHWiChxe5YAFNV7q56Nee887MEaM6K9wqG7tceQiN9WfuH7yabu5gDzdEs63fUqeLvhKYa91uA",
  "key18": "2xujVoKqk69vLVNymxuZ8irQM8rk5F7m6V33tZXipo3jhHiH6QZ9iFJRAbs1huEueMusDCaRZbFPvxgKSC3ecdEw",
  "key19": "2JPcE6VoSf9ocRdBMFXnpc12eHSU95Bi2mZEjuYVR1hp3DSRfkLsCpSt59Ed6XJad4E8M9SvSdV6sQTRwSFyMsNd",
  "key20": "3aWCnYm7ii6CTSVSXffJ3WhZUREdFRDVkk17FAEEKN4ZyvAyzaPvyJmRreBTswTczUEChfHje1tajGi7wkZHHbLF",
  "key21": "47FrC6SrahtWtwZay51fPcX9nMVxUmPAxJz2QjfY3HbZ1XLLb9KubBAYkZFuAZ5qjGJX37jacZWzC6zG62iQhdw9",
  "key22": "mr6aRuBwxZcAhXw9RpYSinRvziJ9MHa1PRhUKFbY99qSVwAidmtTg7xDrDGQw3joe43FmdyGdSsk5PsYx9NCA1z",
  "key23": "3V3hcTXYWtQfGgD7voZeyys9dbsnd2jN9kDoGvSqE51PnApYqnXMs1G2kSTQByLszpu85DhxDdWYfgLB2ALATuio",
  "key24": "AecoV8ZQojeykDtGSnUexhd9j3BEmCn7omzmVK7M4f8jpkWwYvRE4y6ufrxnfg4wE12WVkXnyQqu3y965sV9Nwe",
  "key25": "XNmaw9TpYDswEUxgtvTxkb9JJuCXygNQYRwVymhreBmwPCKG4iqvtiaie9ksWEgH5MpJFnPvoqKbeMjoGRYzSB3",
  "key26": "29UvJDjCoQKm4qaPWBnKnQU9qpcJVeppUwxBD52Si7Le2KjY2oPVLfR7SVfD3LitNzX7dYQKvcf4tYwzB7hdax6h",
  "key27": "9C8ZtbxWHr2QvGvTVW2Y4rUFREYt7u8mADg5HRQXWi3qNQNo8X9shzxT7AFG4sA3bRhgdD89xLLbEQRqujVhyH1",
  "key28": "2TA3jNSUBz4bFZ5htPCBR8DknyYbbPrizj8kKtknAaysJM52cRbXy36cKMt2J9VT9jG4cTa6xmAs8jUVK7rFkUkf",
  "key29": "QNEdqTzDvN1tt3424gnJdBN7D4hnLkYm1s7Hu1SxkgSDSnAeNNH8LZTFWijG9bBDJbxMDGgSvy5C5JygxiXmSpq",
  "key30": "fS7WEPZ4sbgruuD9yc9Jg6CtUcTG3vvEzgjJAk3mMNx47zBUtev4UFKDzCwCuaS4iuzvc6jC4eNQ4w4inS7LkYh",
  "key31": "33RR36E77TZZmhrVh4S5Ko71MMVsvJx6Knd7DwRbbaevhaAL8GKVVy4jzsvwiKxqR8u5BuRCA2vQcguJEzBJMj1F",
  "key32": "3nK6wh7MYRX5YsEgyiCxApsfXnFa2bAqPC6XCMC3ex1pAXLna1FWigiemspyna7MwwZmD9EGC8jLDtWLFuP5oyv5",
  "key33": "38upzzPucg5idCZbvryQzGfUpcvugvjyRdbK2z41Xj2xZmEDvCigb7bRa9eTK58CzWbSb3E37w1zrwTkL9qG1Ldy",
  "key34": "3YTkr156BGETUaaEnkvxYwgHf9jiLA3hG6J33Zan545gSiQqjKUzrQaYrsaP5VxdSJ3Enuk8jytkT5izQAJfSqg",
  "key35": "5fiYGXarDhRRcdDkZun6icC3XkE94krjdBVdTLkCXGFsBZtAMCjKNyTBpC9R3LFVK5iuk9v4Yu6wnc76p2D5tsRp",
  "key36": "5T1LjGBvHz7nbxdD7dTCxuhsETFhDh9VNdmhKiVrA6R8UeZQPFqFSTajExoSVkbBtDuqAUzoxkUWXQcat9EdyST7",
  "key37": "etYf8KFm41vBfQ5MXf7367jG6jSJA3QG3HtBieHfMmDjYJWjYr8kmD2LVUkLTTBxNv2bcz1HvP7otB4e2DPxHUD",
  "key38": "fZ6PRwRsB2VnWZ1bnab2o22DeP5AVnCint31SNvq5wRvGiddHw11d3wVWhFQ8TnspedyH5K4SjzWKVqaFf2zDM1",
  "key39": "2FK53bYUYaLfju521wCoLGpByxRVcPygnygdgCvoTD8oE4fiSqBwXxRVLm1NB58K3FBLMMMMhj4ga4r4cupyh2nA",
  "key40": "3zDUn8KHbaNc1VQD1YuFicT6viuYb1VhK6ZZ6gmw7dTxFtUeqb2VT9vr1Jk81ZoT5qtuGVrkK4UWy1bTApZ3TN6Y",
  "key41": "643spEobAgCnsMrg12rfrPtpNnCdbmJFYBJtq7ZgYu4xQkP3PyHmcsNCMqTXfJPndiJvadsicWH7vyjj3f1AbAtf",
  "key42": "2SVvUuo91oxg9QFL9FGXxekk8VxP4oMX9vHP3SpXaAPN6buiA2kU3inBSn7eVsFNattK4ZB5EZBGUN9EbZBuNT6y",
  "key43": "4dtYhomso7aqMRaEXStw25cHjhnzB4HmrKR3z9MpMb4rVVPiSY6n2QLrG4d9QV8EFu7eKWFKDjZaVXd3CitXtEJC",
  "key44": "2NB98raFvcXik6QX4rUZdAvhmNyETJhnCgRhV3CSf5jbS8ibtSKvEWgpUSbnAtc1Sw5phVBNsg2NzM2zYehyyNZ8",
  "key45": "5ncsUdFueeWkj3tYybdPicgV3LTMcsrKw2HsuN3Xf9yX5fPe7aRFLf2aZeQdKFNfCeBiFJBHVrTLRpn9YbR76uAT"
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
