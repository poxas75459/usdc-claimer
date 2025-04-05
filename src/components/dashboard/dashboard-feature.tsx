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
    "3hdSbwxgcDeFqbcxwiYLVVbnxApQYMcatNsj8xmp9rSDRinhURLwhUGim2C7ngr8DSrnyBRUAPvkBF2Tw8TNQvSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cZfCSf85rAHCrTtQJeBZmd2DVMngrtiG8oTk89tcvaX1qsPdvDd5SVEy3tf4nEXX4PNFxgMd9zkK6C5e9Zf4r6W",
  "key1": "3BiY3FUJDw5ha2qTNJHzKcZP79bKKF7GfoD9pgFuhUsUCjQUMeeYs1f5zoYBg3UAkup1K1uZ12E71C3djgTzFPac",
  "key2": "4vfuP8NC95KgxuqRFZqNXLnTSZnhs5y46sW4LxkncbgXH542gkgi4pUzhCCpLDMaAekEeSpm25gG3xu6bzw4TzBx",
  "key3": "2ZzZpsZWkNWhLiPBcxfB9uVvVSwYNu1Yjac5QtMVMbfWhxzeYNusjCtKevAyRP18F6Rzy6S8AoCze26Wr83dEyJu",
  "key4": "3YvoyY7zJER97sZarau2h9rpJ27ALz9qApx5YBYknge7eDLivUQznSPm9BxQzMVnxhsrLtuuUkiShC3fbos7Rx9p",
  "key5": "5ogbgfMec6r4P9xYQLKeTJ45j7FYFpXhhza8emdaHFpg6BKdKzaFQXJEUp8v9WQ4xH34ZamU14ekHYByVNrTPq7B",
  "key6": "tdZ8hfvuahHJDCUmC16V3VBCH6ffyeDy7zd8jzNLFoQgMijdgmPJ8QwbknuNqcy35dTAU5K9yQNzStUbKhtB3xV",
  "key7": "2PeTr6GwwPuGSKedApyA2c2JUQmx7JYzBdJ73PQZABUyrGbfcvaYU4iSKNZRHnqkDWg31adFHcx1uXoc7UFUAeFP",
  "key8": "3LHog2PQUACnn2VkN1riNF9SqxuZGSD8HFhFuMkKsrnmrouCbi8M3rfyv9wtuBs67XLaMFuvoFyWHDwerGCnV7Ei",
  "key9": "3M1TsRQKhaAeUVGJMhuiHR1oX91m6QYDpUMHsbV8vNNVLdu2uuDerotBbJiH25apDVKAB2fy71Yd6hJL72G7C4JY",
  "key10": "4nvxmCcYKf2SBnoPGGH3fAPXtMKRDvaphmBFVizo4jF4dqp8w6MBW3JXq5ZPKrgUxxVJsfLWiKDeNKX9JRA5GH5F",
  "key11": "2uaJvSQCEpoE7ZUChfNTMFY13hQArCpKHc3H9AnHr1pzwW7xftQoLJJE4jSmmmRhEVaEADfXA5sadrGXoJXQLCBt",
  "key12": "5aRAFTGEBFSiRg9tNvhUgHk98HbTDBvgDYGnybzoh2j4hTgbMfYAaSVGBPSSMxB1qkqbwwQppKc2v7XJZ2XpWobv",
  "key13": "5E17ykjdvGZVaJonCA3G4b7n5R3inDp8r7CN1raAczZRrwF1FgrfwfFkKWT8wej2drPkNFbZr87T9PQpq1XX3EK6",
  "key14": "2gNTX3G5o9zxyqxuiQ4bwJU8xLyVLxLsNdY885uFSKGoQZt6HgEJW3NFqHKBudY4gGbyZNqXA9xheRpq3tGXXQ36",
  "key15": "XLM8jNDVRo35iCP2Feh647ejufwPCYY5JCDSruQe5qkCjGAb6U14yrEDvHXBMJHp5CBqecryBQFPUNcR2ooAcA9",
  "key16": "p2mShNvyFHZpz1e9TXDW4B4J3n3p5byLZuq1LVEG4pQfsUNZSgZEuCghxa8Hd7vmUqCsTfBidnVTovRSb2biA3E",
  "key17": "4v23mFMi4B7gNGe3boGd3qKBqh7dY5LvpYQoqcpkjjf3LVcYxU9XF3TiDhwLpBj1WND6sMwAK7VtdKpRD6YGtcgW",
  "key18": "XSQ33ptFzWeQEykh7Pzp6QunJv4XtvGyeAGJ9aykTDp89T83Scp7BSefBj2MsUERjtEP39ewcYJZLS2mbyuvf6S",
  "key19": "2XNFd1Sg92AKp5ikoAwuiVF3s114N5R11TG5NERp3fe44dBv3Du1r7t4kkfVTTtVCN3simpdKX3u1NS9niMKmKkv",
  "key20": "65zJ5nCkn4zc3pPkWdRVaFvYmncAGZazn41MQTZAFkamvXr32zQsXgbVxUvxoHTBW2jr1gd9SbKRPbK7n1p9C6Wj",
  "key21": "3kceqfhWVcfhLD5RUrMvqPZ5PSMYqnDsUcHnnJJ1HLe1aMSzuSFgGrG8rbQPixGfkbN4kqvsCoxeMhWpMdN9Asza",
  "key22": "3tJELWsDXxyyLxc8JQj66i2qeCjt74shHcWHvqLVnu6193A1hsQLsR91SBnUeuvQp17CHSk9L42PgDjQUmWh6ykP",
  "key23": "UTQ91V7aKwEuBAz5jyASg2kAUxBApXm9GbM3SLQpYHLSGyf6jxPX8ijJegdaWDrQc5pjtAQ76hP5PfzX8oGpkKx",
  "key24": "33TjiFyPKcQB7KUw7wRtuUKAhexHKsbqbiHVNFCfobjWpNeyUvsWyHogzUfd6iNB6gvoEesz21jhMjMHcFTrderi",
  "key25": "2cAqobW2GrDU7JsRF9Z3XCCzYKjNsDfLe6SdCryLqGHbidmBBR2YsdpvZm1AyGGJgnem3qokRbYbApnbkDasUQzd",
  "key26": "3YP5NH51ReM8sJcEqjmJfyEL1gqab1zjqe7K494LjHL4EWssjKAs3SZRuyRLGerAyQ227tozJPQJw4HoQRCsjdQh",
  "key27": "5TbTGu6P9zpeXKYexY92zVvUbSd8RHeV5oVuY7wRye3CgJuVpcnpxZCZxc3q1YrrDABVDpTV2L92jBFJRBSwfUUC"
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
