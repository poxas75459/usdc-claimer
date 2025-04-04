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
    "3eD49TGySm7n8b9L8wHjwctprv8PBBPzE4t8ToodVTrAFrmNBHnwu3JWsANE7krxqLZf8Joj17hsFfU3ZcaGCodw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h8TP5myDmPsecxkFTi9zHExETd4b9cAmrcDR6Vsq39xyaN4k8GN6EApUECAoCV1Yo7itFL2n64WRNngRxF6kYTN",
  "key1": "vFqzgoKVRjkJZ5vovHMvKUnv6WJaEFm1Tj3dd7iszP4Apm23tEFPepcMXuZHLJJruKTumsp4zeyASUjB4ZgX1Vp",
  "key2": "2UAogBkbqTfBY7upse9a8qSMxbH88754GpbBK2Xx9oWsEqqWFyc4mPBdVmxCiHb6yhvJjAFNKF9G79vY6PFiMmk3",
  "key3": "46mh9WGhW8p89NJhdhGi2ykK8LpU4BGbfT6bwkoNDFTCroQzcd12WbY7Q8gZUef3yAuF5iCwwjXLtTwVw5Ww2ZWZ",
  "key4": "5ecXLD2yQ7PMakWoCuwPVHL9NX5h8YdFsCiiVcm8P1oUnKikjB7pfELEDhcAfFt3nqienDuM263ySWxZHK1TMVQn",
  "key5": "5Mh4vryPSsCAwg9p8KBFdWzdofTjMCzBLVHVTVEVneR8fPFNaXFaaze3QUBQAb61GDYbmyfzkPNtwLoTnueRhXr1",
  "key6": "5nLfoYswbM1A67vUuNcq17ZLn8AbBhedZyTJnV6N3CXCVvVtgkQf9fLjjjKxMC8LRBdcofozPazvSQe1aG95dvJh",
  "key7": "5ciDtuaeanG9xKVxnMqcVzFMj3uNmEJQHZ1eEJKJhrw3Nbth4Lo5r1N2iUdxZsKvcRp6D5PD66qmLya5MKffUVGa",
  "key8": "gDoiBxqtbqeUgWd9Yd5JV9Vy2839vejhLCxxdUmgBLTqhUS9moRsqHoGsSMg7Sj6wDMJmDTGu2khe1C85PjTpAb",
  "key9": "3eoQGvsMPiWnaNVxCTw7H4x29iVgxWKpYQ9fbgPEpMMt1yN9oNpQHKRUt7A4VxR2WXLNEF9pMyPvMftzKD71GjYT",
  "key10": "4rQkeQF3FHzS99HdTM6VnG1NpEeVEkma2nEWb4o6YW9kTzGiWXs6uUaHw2JiEHdMuqnheiCyv6VrN2eKaV3xMUPp",
  "key11": "vQjkmQgPofKPgWL6www3VtFDWjdNBjXJudhsnGVrPjdUTFDasshYwSwckFsSxBdMmg7QezCzvtVULrVemrZ15Bq",
  "key12": "2UdaJ8ZS3fZ6566ZYoXtdHTrJyBp7ktxvB6VN3EsUS3Bni4A69vZdc4GZ6eP7MPHJNiMtesq8fhb9b9jopAznCKQ",
  "key13": "BAaw6BkE3RQmRWwqge9cUkjSTUuo3ahW44TGAtvFtppSPicGPUbAfh8K3qPdUbSoB494UmdLdbMqUPKEizHbUFp",
  "key14": "NrAutvKaLPYkTeCmNtsA9rKdHfPRAcjf6aL7cX4m3dZaDvpi4cKGVb2m7sWFQkoJTPgoVZhTtGonaxMWyvMUR4t",
  "key15": "5BBqaZXUiquwvFYoDCnXxYDxX58ux2RfjuTNi5yNHuM5pmMHTvVoYeKCJQjTBum2A1Lbi5cCfN5y335CMUXd4dBX",
  "key16": "2A1ws13PdiEDePyvJocuTwU64pgy6CghuuPtZdN3hFGUP6czs8wmrbfLpXpp3tFT222JewL6jEWqsRcAmAiVr3Pa",
  "key17": "5oB3bPGVfBqiNpWGeBe4E6eUAd5BWUYd7dwY7DXy5jPCX37yp292Qb1YPLpqBzqsn2wc8x7USodLQgBKuVSSQVWC",
  "key18": "2sn1yG6Qc3thoRuSBnMjfdiH9xwB5Amd1zbEZg2VmkDLKEgxpXFLUqsGx6MpduUD3umDYtFm19iA4mx3c2dj3mUm",
  "key19": "3pwDSvLhBPujvhV4ibqraGSkKK8EZAzMfoULz4W2jqG3ppz7LATtguBiQRjg5cRErcfUGJWsD7P5qUutyJGX6Cxx",
  "key20": "vURkcrrriGK7VPp6aHBg5JotsXtbDu4tJ1gBnLpCbuTWECpZ7qRKiuH56ghwu3tZxqf4mMUdixsECgJtCXWyqVc",
  "key21": "2MMPdydeZtuvwLFfSrKfkbsbsRfrTPvyEJQCmwwwBvzMQs3GmjF5vSEmfHfkW4XmDhoHZdu6Pn46JjQ5bZuyziUq",
  "key22": "3KWM3kMuBN9K21mE99ffUVzVnPTJmmeVxJEiSFDbXVMUEvTPc91RmRpPXS7FNFZPRWnZx7NEsPRThenb8Zua6tmg",
  "key23": "2XBdajx2tCXLszC1wFeAZ4GjPaM8ZKqnKJPsTJUGXNRHeMDbs4hPCeL3bUPMLoUQ6oqUyMFkGKwpEAWRhmAkrBcP",
  "key24": "47PGugqxvEkYqNxzCsxNEbfaEbPxV6uC25BhQvT22vSW7eR7juJ5zxJmBa7otxziBbJXG3BFFTkbx61WLhCpD39i",
  "key25": "29D9phtTbc5GgiTTgjywVYoUmdtmgVLCetJv3R61eASpwF9u3KztPQL1gx2g1MHzM4o6kyg9SxC9RAgpZw3JW68h",
  "key26": "2qH6ReRkCSCuF93FQMeFHBmxPbvmzKu4H5vb4e96F6eaDcXuLxDQvEo2um2jxcvCwJ6Rgwh1oiZV1fyBfa8PnZHL",
  "key27": "3JzWXBQCNp1iisC1u4x3JLuEVyTAWutHLdAErmAqA87hquVfJfmxfLvpuwJjtFVTjNHWfZtCHUsLor3AG3SRiEC5",
  "key28": "4wjUFUL5JhAegQ7AECbgXvocNcS5e5MEfGzX5k8AdWMvQ4EFLKuPpHiRg1JmJi5oEKyhY4yXt3hD23Lo84bY6Qxy",
  "key29": "33LkuZNgETYGC65h5ahFU1gEFnmw3yWC1qq96kc1UFwokEwzSirB2i71U9FCBQXZT5SSq3KgwVmJEWbCAEUtyjLe",
  "key30": "3SehDsxoStNAsKhhxTiD1g7XnLsx5Z4UtXAh2hBVQwJnE26xtUZsLW2QFoieEifv6fvxLgERRLPGPWdigvAU1gip",
  "key31": "44RAD3PffrbHBiaGKRtqc2myUn5EU8DGfGzGonVUQfBfYJu5XVHQL5HQVdb9VYrhb14dHkbCmQNAjbEkxscJxSBF",
  "key32": "5TSi7VXKSDjNPovVE3kYX1Dqhyxt4pq6acxAkcL44Uz6YJnUTfUKMazH2C9jpqmCenSF3PzF7h7HJwZJZRcWD8Do",
  "key33": "2PDfSZQYikYTksrxZhCVn33xtUV6f6JGfNPWcPVZfmeY31nfS9x48gJw4QS3tmVy2P9uMQkL1uvMHAg4YFyECsWs",
  "key34": "5dqMgLP5rsuSa1PjDU1u9HPsXkEFaHAqxoR4K8Bk35dysMk9wkQevnuAa695jPa2yA9MnAqv8k1E2BLQVGjpDF7T",
  "key35": "TWy1aUa49HbhMekzsjF8zevgPuzyjeoXJxeWx4UzdFCQNUW4fRJXS5sBqZJ4Kz9Hqgfi5CfbJemAwUmhLpvA1YK",
  "key36": "2tc8xwKhrkAiTGB2cZhoNEfuAjxvpLLvXPnEU7Me3jkJpJxRCm3fYTwz3TGssYnuwKqpP2ibg1vV4ywhWR3F1kXx",
  "key37": "26Qy8PduvcZwyiFRxkL8JwZ3T42pDRz5iH5eUzzYRr5C899oZWQN9UNVU7UMRxgeaTS8azMHX2MJnx7reHadfuAt",
  "key38": "23UMwkgRujGmDLN98mvz1V9WemANG2KhdWocVQHdMpvcRQJCwWi1Dxhtt2J1xa8momoELevZ7fY243ZUtvFZFTZJ",
  "key39": "2fR2mGnsThdhsfoU2X5kPeEAtNoRM3UqxzaMd3DdSAms8WhC2VamYzA9GMqT7nqgPhQMSoY9cnP8Psm4RsvHzz9r",
  "key40": "5bZEL8WZ8ACKLAs6LugjwnRZDaDXAKdvZY4Aj7PUmPNxXN87JjVKAMHVRYp3PNrW6jTho9kJBWaH69Ky1epqJcmE",
  "key41": "2KUmatNSgsD58UvxG97eYWQkcWCniWaG7qM6jYGzk9CHhrPHteikm8CfDzJXogGpLLiTv9gjwZVuB2XxhMgpJb8x",
  "key42": "5QNpPbn3RxGu7Hh2JEsA8U1JhGxm5q7mKfHmVM2Sm8UHJLkrgdqtFKJr5brwieJMQhb4MJGn8KR8oJyZmeLJArNF",
  "key43": "3X6n2ZakeqpXmUb1wHgzRptr4tf2kkrtwt594aTKy1gqMpaWEmoSJDLahgYxjVdqJ6Ju1fVAoRx5Ea2VsWCvURmW",
  "key44": "2BEpQMW5u4Hb6JgZzj7X9SquDGQ2AxVuVxCpywfjKrpp1RaEQw5WQsusfRTLDkb6xmgQfiJrBn6vJBphbkp9ahV7"
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
