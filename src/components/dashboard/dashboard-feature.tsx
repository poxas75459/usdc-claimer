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
    "4wzkFLJN1dei2aJKLEfsDwbp3dimbTUqw7175XEJ9mXa9i4zCTrsEsrjUZUR88djvNjkrqWgF2dkojvNMZ8GGY7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yB7ifepDuPJQBKwvRCC5NZLh5GPKrErAd1gAFtavuF8abQDELp2kfr1YJ1KX1C8XvbQDwX74yyywE2kX6ZJqeTh",
  "key1": "3k4XnBzme5SrG3oEvitPnKgxTQXfZfKYA7Tnd2RQZuTChLZ88rS6Pu8zFVSNS1m6cdrqtK2o68W5SQrWUiznU3ej",
  "key2": "5MPYvm2Nttx8G8s1CSFq5sk5epPDkGznoRTUenMu7pA7XsaUPd6NqwWLD2JxQsjLZGDz9jpfrrwLEFfW5kFtdh8u",
  "key3": "5vRQj9BZVtAWWrb9GmdzNoojVQTEeTEN4qFfJF7G59G2AzLrtcKTiruJ4cXkW1fbfEEKATN7FGNPscWADMskdYdG",
  "key4": "2hdrVvJpnVkoiFm9n4FXuXntC62u4sKPPuAWJhWXqJTtchBER75tTrZMNnRaALZfXhFUKNKoSSpbZ6XX1HDvus6K",
  "key5": "4EuoBXBMsXPXbLVuC51iTQos4vVVdsEb5UaSiCUuWwkdDsetTKVGoJzVJ7cfS9upPVxhSitcdzFsehFtJkSajfb1",
  "key6": "3NqNkeVmnwNgF4ceCAMCyQeRSULQkyrJXjHcwmSL4oAXmrhhqYasQ7PLgj2kgsy1puC8r3SjErtdShv4qqfYqSux",
  "key7": "4ccem8MT9y472DGT1yD7qvXrCT1EPVXvKuXw6gB3mZz5Uozo68qnnqS8ptQkU51pyQXHrtPiNtER2yo7vtRCXCB2",
  "key8": "45yEok6cWH2CDLf46NQpwEbbEuDV15MhuF4V6nJXRXViuB7Z4ESc8SXVXVpEtGXGgtjVfxSCjQnxiZPtuxBXprwf",
  "key9": "3bLL4cTazocUpXWeEE4cdMAKBktexxzuRFJhGoQC4xgnFXKnkcFRK6iAeAFEwMGn7dPQrmTxuRVC3P4XWMvMEyBw",
  "key10": "44jTaCwRWZp7jTN7T6Arxe9uxWDgEK1CvZ5awfsJDuNqsgKFqYr2vJ7KYrvRfifPMQ43r5D4JwpDaHQjLDR8E9NZ",
  "key11": "4psiVm3vn1yvtCX4qKdxiEUjxA7uV7Q8JpAzxJF4aPo5MDX3znSVYESkL8zj2qa6h6UrR3bsF7o3EtzgxPVy6LEc",
  "key12": "wAtcSZCfCgDz6ZtGc15Aa7PHSFg8RPXURQZ3hosVMYJwzQKejQiqBA4MsVq2xSLgPhARb5AJYm2MbQZBBUb4gUo",
  "key13": "3cWZENs9BAT88Q6rXRjAWVjskeoyzaCczCeykpkdxfwJfkLZYRZsBLRtJnigkZxhYLtCyNZPtsGdgb2YxQpzaQ9t",
  "key14": "4czdKqLne2MLVGKte8UXpGcsQBRGRiy5QDcLPaUmEWUbfZboQcbxUaRHFhynt9fG3jtCfq1gfwTFxPA9W3m2WiWU",
  "key15": "23ZDBUat5RuDCYE4AnVgSL6EFEFWMqzVuc1wHmU6XbLwiBzLDbmnuYqMmB1WtwmQpba86n3eLQRKHwFHVzjWjE4C",
  "key16": "2oq19FCgTbP7EV2AarXhhiKBjkDoZehwLgo5AZ8M9SvfAJcSwrcHLb48WeVhBxBVG1HTjLjYnXfMcKYtjRSHJRZp",
  "key17": "2c1ySoJVCB8ptbFyD7ieMdivbDvaot9DvC2V7sR7BR1WFoZRtBKJgMhBHyhv3agX5LjfdarcD52zoHh2CwPexC5",
  "key18": "sR55MvXAeK1NWoR9GSN1T8hdaM1qJjxAbSR87JRHWM8hoQadUM9MEyFzqhGGqSB3mbFnUp9eVnMEy4rCUAAuELw",
  "key19": "295m7v8knH1xYmgS3m9xT7V2cUA3ph3bJKAthBanP2eWwKBcJK6HTDcxwmc6qdLfKyW4mxXa73EeR5vSiZhpTtuj",
  "key20": "44RN3BHqEbcAw7wbf5pbDKebgJ681kQGeBCzPpCw6SMGJuZnQ4HjdhfdeStYM7hDs2w6eVej32Wvrm76iio23Ypy",
  "key21": "4D5xKnG452dGPeuyYojR65H5RK4McFKjGmUgT5YHoHh2oTTYdPVicPrtxFKVsyWJPLp2fs83ka3fC2YxUebwFobx",
  "key22": "3fNExXnmHGLC4k8XsUeRNFYvw2sukfoZbGFA6vMiKyiP6ykLEEooYUCXAdvK57pShk4HQ1nuMfQ89aaygcVgCW4o",
  "key23": "51dL5JeejfA1yaS5fPnbEHf1nB2wHELDia2B3QxDpbvvjcBbAdkV7Hmqim8jTiyPGtAsFKf3ue1tmHLSQYVKTqn5",
  "key24": "4AVrsHn43TsXuijQ3oJ9FGCbsvE3nvWb3YqhHYRACz2GumBRQpCUZUy9tmnpBwHkWFgtD8MpQPq1kfJJdfnUciAN",
  "key25": "zQxi62tveEqFcMepHGgPvj6UBZ6W8ht8Wza5B26k524WJ4fF5unqVggqTCvyKX18jtAxYz8TkzXSawzFcWsnsVn",
  "key26": "h2nHV7hAGw51Cn8zxA8khKFvDirZDyVw1SasftxjUVPzKiekCtoaFow7N5aR7hgdnGK9Mm16R5LGVSgmHdGkKWA",
  "key27": "5dbrM87YwAZWbyR6bjzWV2JXxP3Y5qEAXBmQYAv4JWQKyU5pWqEkBd7VXznHPb89YRW2fjyXwgHdxkDsY1GokJf1",
  "key28": "4oVZJsW16ydYeurcZmuWJcmVwBipMi2x1GnHqG19NRVVikdRHytevnVJC3kfkc4cbKnJxJKVYcvMNAJMFSLY4JbN",
  "key29": "3kvZnnpgkEzjr7AFqRrbBobuBKPpcAzjWkVazUToBSGayxhfd3y8jvm6UvThsW8Xcnwd7eMJzX5KqfSCcXCGFL8a",
  "key30": "3WCaBYEgSLRAhAG5zFUFKGwRa4cXJwVVq8poNqMtMMhYfB8FPLTKwZuSRuF12D1jDrunujZBwVnexHsJWY4qTd2M",
  "key31": "tq6Kqqszbi1KV5Ldw48iQcWddobkRbfqW1E8CdeCGAZvXw4TSfXcpbE4vq5d6nJpJL1qHNSUsU1TJYqFtkfnMwY",
  "key32": "5kARtJsRD4a7b6VMogFtoKpY2EowKhKTwoTe3TVwu19j8VuJVYwKWANtZ2QKmKsrhZUgwc8yhWHJUAArFmevxx39",
  "key33": "52Ada6itovkk5HBeMQH6dR7eiF9Krce3NJ4e33U5L7hFevdQKBvteAqTv9J9ThvzAmFAqDXDNvQQ3vH2ntkSratT",
  "key34": "2S4GdK5oA82MQNGbKUggR82E8bHX9mc13sJ1w3AybCEXTHcn2KkGUPTCuNTE1uuH5nLqda9Z76PimVPP2ZXRuXA",
  "key35": "2g1TCAUoNibnSnR38cj2qLxC8ejYZ71gYhvGzJTG5XnHGL7x4ovm9ccZsvTVzhhBBeCXhLzAmcKVTZNUZ8AtR2jj",
  "key36": "4JmGud6Um4kf4sy6rjC7aAcd3Yz5Z76k3vfv6x1Hnpx89e1MuzSZjHyC4T9AjFSzoKjG98X6pmBeJnCXcQTUfdkL",
  "key37": "5m2zegL7oRTBTH2jsv3uV5bENDUfTEPL9QpLWfFYe9jVzSRJ7DTZuz29t6GqTmNYaGEf8ea6HJLuWrGcw5pEx9RU",
  "key38": "2NcmsZ8CWhG263zNnirDtq1jFfpsGanBvMoveJG4daGLJ7xq3zaXp2CwV6gZF9o6LAT2wD4DSDk5gNcz856jyy19",
  "key39": "641z5ZFUZMwqzn6eTFPebGErSDZpGNNErh1F2boAqLxhNmsydjx5XuEDeav1YoedectEeYqLyQWpGd3bPeb3Qmhr",
  "key40": "3hBgfekAk1M23HpLLpXa4cZYoxcPWxuXFBHUvjXHyi6gnGbQye87jAfq17GU1SShtRX53kH8C6P9C1qg6FiGp4C7",
  "key41": "BbzQQVSDWDhFpYvfDgqwa6AyfwvaiB56V6HGezfrNWMppMpMzEuuX4cuaEvZLvjpYdy3a6dkmcNZ4vA7mbvyYMx",
  "key42": "3C2nStSa3vqudvwvUTYe5GYYPyvvMeA59xFJMo4QAB1wN1ecXfdnJjozegdY1WYEm2rPjP8ehLJjJzWcHTrpo6iK"
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
