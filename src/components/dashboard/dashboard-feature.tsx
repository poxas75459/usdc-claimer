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
    "2LaVCNx7Twyu7eyiZVq5hJdb6kuveVcE5rn6T8MRUP5cHVBYSaLfroEMpZxZUT5u4RYyN1W6bTWNzVJ5Vd65tbPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fMSwatjLdQmYoQHyYo7gt9ui3JRYySrafXZjvMG4WP9b7mbcYrMupdLYhaBML2cuT6cf4ZKBSLDeYbaKYNb6Fy",
  "key1": "5fK8hWD6zL2gbVmGswvoqJRpTHKd7qS5WRMQCQrR4dTXuLR2xboV25g3UNnFH1uVr7Ej8rLJXHfrRXY8QCnmdfZ5",
  "key2": "3hKE8BeZF31oAj3c8iN2wtXSQhZcRX8h8WF4DBCK8zArNd2dY51KgmYEP5kaNvozc24DPDitL7foFxArbgydh3A2",
  "key3": "3H6qqBbM64vKJdsKuGa7U7XWemZ9zZfRhwtVppo3uz79yqvvwJdgxvfnDo81uKtoa1PutPN3i67n6TVMPwL8VwmS",
  "key4": "5upBFdGZCdGMa2aP4VQziNx94rGse9VzDT5dH7f5PY3gQd1e5fG8PU3X2MLekMEEsDBfYLuPBXespXv4LRJdSETP",
  "key5": "62Hh2uXwcZomnssfnhcUq1LbRSFMbGcRLv8VAG8D1ZdYBsJ2ktUdtZuVT3tQBcQzgQboRyjmoLYCQCuyUXi691jx",
  "key6": "23f9TLSEGUxG18fxyKhoNsrH262JvhYXxeZqcoBsXTbmveeMM3M9nDsQKiZgzJo4a7hpBSsCb2zjrbzpDGsZGdZY",
  "key7": "5h4LDE191Q2jurkGiTM6DzK9GWmUcYJDTG72xtjWZszPR5HA2nmtnHsDxiyi23XzzyAd3QXtx1dWVjCA7Deqapto",
  "key8": "5XBzWiexmxF1rdkB3SbSpmRVoS33J25CcAKZYtY31YPE4LpgXsvnsBaLnEj996kpz44axrqUWHfFHnTNy4KggNRv",
  "key9": "3FinTXHmHxTzu3VvmVSLp6UZnYqP1BrMKnjrWGq5F2VGdusD5KdfJP5ZG1HgjSo6boHB97YvD2kbPGNBRz1k6Qgm",
  "key10": "kVmesKxg8n1ecZEJfKXacJV3hmgqAVjm43h938JiuQtunZGgjoy8zKDsxHXEroCpEUh2EhoG686F9atQExTbvme",
  "key11": "5Ti4SY3AjEmdGgKakRatzuHcRWdmmv1caac2NZHZJVLAViRibFCeBka2qv8E5446221afXfqZik7d7A7TECuaTyn",
  "key12": "3AxQYLYSUWPUHUH3gKRXo2R8UWXV4oN1fBp55xiH4UoJjvjVdnXBr8qmahkqcDWJNU4jEVkvNFn7qLRt25Tyr4Sw",
  "key13": "2mh74i2UEJWvLkqHv7BvkNjQb64e8Xo8AHJscRNjuk4SF7g6a1yDo44eY4J5jraRMCFw5aueQFMvaDtWEWCTuhLW",
  "key14": "5znU7QYrCjAnziLMcfBZzgvLkP4H3J8kVHWSGFjazJY9esgDPrB3TQGkVJ1y4QcXXLwoi98z6a2D8wQpFR1crXbz",
  "key15": "4gfYe38Mp47Pj2GHY4Tm4tvv7iZLvjeiMyiCr8vzxec1M5Nj4VCkEMH2S6C185LaFaUizkEFiFTK9P9JVksiBgsR",
  "key16": "2ovWXFGQS36Gu2yLCDvtzsDFCFM2FFSVNNxDgzEyER37YKGwCcVNPmM6b4G4AC3VuJT1PcAGmQNQT97ArdW9Qns8",
  "key17": "3qL1kyViWEdPgrDGcvXx5zBRKsXKo5oyCtHwx4g1NhKsVSjPoXQqDseU4zERysjpZHEhYoieiSFhqH3VuCeRx5uS",
  "key18": "ZuEvv1MV7518A6fNLGJYTe1GGVsboLwqKfHyixTJtZaU5m5WaQPZfm9PB8ffjGDxrSGedgqKuFXci2wc71VF73D",
  "key19": "2dAGLMc74zdFZMdzfgAaALKYH4hG2Yv5unNkPqKqetGjqgk2AKj9vKudYL7tCcHPjKSYfgDZK1bSirjJ51Tc4Qop",
  "key20": "58KX1LSa53Tc9HptZpNF2tXdfeZrmCxUTnkPGoG9VZaA3Kjm6vprMYYu16gAiyZXh9CyHM1VCQwkwwkvTZeojoX9",
  "key21": "2anqvFYmjhiR4Um9VZRtEGJdSn9mBMX6HKmvjiJq2ouw39oiMbBYiuoTkPdhvuueTaeh4jjNc9ZqSxw8tAXmsfer",
  "key22": "w1k8oJisc3y63BLmXsg6LciZdHptKZLeMxwJVXoPCWWtKYYVhhpY3xXEKuFqFKPC7hM6RUK2QpN4G1FSkBgyF7z",
  "key23": "2kqiUf4WqXdVdSCDJvYJtmeKumzaKiawjEwzKgiZf9Ej9RrQyyHzXQ7mdEPSqic2r2WKMUDpxt3HwXxrCx662HEe",
  "key24": "3ju1nkBzxzBGwDztUZSxuNKx2GAStL2EARRoLE8sFunpV2sYizwkUd84PjtPFrC8bZJDj4FawL5iUpcAzusonezD",
  "key25": "4Q5Fo4wCVsKMWbXFkbDjxZWzd3Hy2346bsWA89dF3eGMJ7jyreseyGQHfMs3QuuedSHty8LCFXtGiAgS7nqtTpLH",
  "key26": "3k7yp1Y9QDCYmf9tAzos9jMUPLtVykm7EgCdu6UkBQXoYGz4RfWZ8HJU7aHUn5osi2LLXxTruTGJTNNxeenwTn9x",
  "key27": "4j1UYKVF5Tdnfyjzq7EkvViGzA2EdagXYsQiYnBm3ay22sAtBwYkoYPigsfkKau7iHEEeNRsGvtkCbZbZB8tooGK",
  "key28": "4xqHgbNjdHxD9GtBqbtaafqZmE1RZRsTpzLgp9tqFSPheNi8kRqu3YDHuo4BVv1oenHJ6zAfKCAnehiaYbZdT2Sn",
  "key29": "X1Kjid7et7rXeTkRwqepfgTDS6dVWSicfk8U8iJoUnqQmNwh8kp5UDXHdVRpdMNGeY9y1iKibuQ4gfqSwMhqXu9",
  "key30": "5RqBv5mzKMBna2RnFb5gpvtTokAUDH2AftAXqersbmQ9KTrfG8RGJ8zzWRtT7WgNPMA8obu6fPDKPswbXAhMARvj",
  "key31": "LDjr8r8Tk9FkT391EEiR7iqAkkuH4ncdLPCjxfZNMRHpzViZiARGzT638Sr96p1YtsoDZcAW4HZdSek6iymFLr3",
  "key32": "Yum6r6nKFjmuHzCEV7w83aCVoBzAK6jWjDVdCUZypE8XZqLhx3t93xDT3wehis2H8tXb68zLmdFdEtNam7sqSki",
  "key33": "4ew4KBsNvQrNs4Cf6eoPtuK7FgUPepjeuuYJ1SC2vuvRtioaqjLwXVq25TWxm8WHBCv4n6KNYTvgJEnFVDwReR6c",
  "key34": "5qkSa5KNkkHryRPianksFjdLfUqbXbH8GYK82NJCj1Lt89oQNv7yTgirAKAzLHdo9i8rZ4bGDFzBKaFmS3cmLg7j",
  "key35": "2jrXKrqjwRf2sHwqeLprnwtu72c2GNnztjXbAPNicYkotY9MTUUXoG1Vzco1GmiFiD1oA1Rf2NwEcY5GJevevasm",
  "key36": "4pfb4dTuZfbvr15s3vomahW7s6hfStj2JLthBGfGywbhJ7cXvkHNez4ddYm2UaN3TBij95aanD6Q2WrH3U8MQWdR",
  "key37": "2eX6N7DgD6yCiHpc6rWRefP1hHUKR2UhxVbU6LyL73kF3C8y9Y6nytZPpejvwvcs3wCkbC8epCi4gvpqtbhrQ8HF",
  "key38": "27gqXGfr4p4Gg31Jz6HCiqzzDJRagTsoQchVq9Jv4aEU6wphffkwW2DefqE3qhC8vKDURbWWG3pAHCkR5T7RCaje"
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
