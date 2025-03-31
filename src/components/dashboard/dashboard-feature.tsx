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
    "4bqNb5hbbzEgpJgAkiRTpWKdc2cZE2s12ztZVyuvh4cR8M6afdS1Aae1SneeZohy2HsVZ1MZpJnLaJt3G29Mkogi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hkPmBQ6w7rPJbGmnCU3iMhWZ3aQ48ojAi9YX7fADP4qJ62f5tY4tZ7HSgC93L4jFHLcMiyQ3XZGYJUueHCdgFkK",
  "key1": "3z1f1UwzbKGP9BhyXexqdyJ9urYeqpfyF1q5Cc7SfbkaxTXURgXTJiqMTHQwKz4dv2D12AbTA7bcUKGwvfgKme3u",
  "key2": "umcDdKkKPWAoBPvTufeTshH2hsD5LjSbTDfPHWkt2kmFUnxHKbHMVhTCPpVeVMiR2Cna9EnBQjdPAmE1aJNeSGz",
  "key3": "4caSC9GsR51unboQJt3cKNicVaQHwTsubUkbjAJAtjKkryqvB34jS5jysK3TwiQuQjxiWWZJBiq7dssXy52tC8tp",
  "key4": "2VLizf5PmAV1z8pxwjfMKHt2sXt2UhEwoWwCm5NctJjz93kLAo3FFGYBYdWwkcW1T3tL8juswQWYzBYQpgSRm78q",
  "key5": "47j83on8wwJRSJf3dP33fA8tqA7txuPa3KYV9pvJD7M6a6Xw1NwBmLapL6wwznNfWFZrn9hkKau4dGAB5UDozZe9",
  "key6": "3sH5fQKgiqLLKqwryEEFM4HEYTfNQevGQxs16eok8p9ciisPUKB6TEg22Z8Gfe18ayvQeucN3strsxp2LxzoyGor",
  "key7": "4MsBaAtQSkxJg3Bp4r5ems9bPLqErcRwEFyxg5xpBYXnGbfajXSDXyc5jew1EVAAQxDSFK54M7a49scaznsgAeUF",
  "key8": "2EhQon2ugT1uteo1qrGgjBcXDNdy4ybtpo8Nrvc7kbYr9zgCCRXRWJ5BD2qfuwoB4aNeqscaEXXpY1UAbeNE1R2C",
  "key9": "2i5KcURw8aY6aLNY1TtPjEuJQb3JqeLiYwJm5GcvoiTWMDZMR3QLPVpoh4jcqNxPosRoZiMZNaaijYhyhtBtqd7Y",
  "key10": "49EtMifQkzTiFLnvZNUuW8z9FNzZ2ycDZqgEbJVRY85BvCWVht3kyAoZq2RpkDStz86bGhbAV78U6ooSJBbsDBqK",
  "key11": "57fRio8kGQiCptUBrGuwwYiogrAeU5fKN4cAsiMDzGCmkFB6H8DZDuRqEn6mDzbHCmCp6SvcEx2YhN1XKVeYBVNL",
  "key12": "v1UjJRH2nc5832ksrmV3qw7AZRKW6HY8dCx3Z5CPbKVMEP2JcVWVv7vJ2FTqNetwC5pYxYamQY2NuwgeS2Wr88y",
  "key13": "5CiAaJDXTHzSGV3HADDsZhziDzB622vfS3UKWkPaRuyC2PpdJjv8aSibBmruwsm5zjjHciMD81eYSwrY6PsMZ2Uj",
  "key14": "49hL3iX3NzSkMQabxo6CvXsLuwe2aqhNUGT4sMg9GegcZdLJSxqtibtDRtZNDH8pqqW7yxwKcAo9B5EDBkBisdNt",
  "key15": "4gSfFKDXesqnMByd7VSbbKunBo7muDdURZKAr7ycETTnjwLJA5J1PxyRzXkR9B5jK9ewgjXktVbkx2SHJ3asCkbJ",
  "key16": "GGToJfRz3CGsk3BBe58XimChRJt7nHeHEkt8f583UKuDJsT8Dh7LpQe5kCHFJ3N2rTR9fvjE5YXTbvtQdYatktX",
  "key17": "2iFUXf8qAx2vEkkQqa1wRaUdMLbNqvUonGeT2Xxr8TWxCczrhiFTsMmPnE7hG1mDp6HdEa6eUNW1MwXkDHzPwXfb",
  "key18": "4Ah7swyGHyoDGtcHKoEJ3hh2vso3uvtQ5gywCvb3cNBtk9uE71i3Qzww4fzSu99TN1fvSQKX6uBrYxduCRMQ63x6",
  "key19": "Ry3HkwhJDkPnhM3UrbPGvcscMyGdkCyCZvm7fBCm4ck35xu5V47jck8jmB2wnw83AfSENYASphCSJ7zQwBWbdKy",
  "key20": "4dDrH2QT6SqV83r4v1Y8vV7JxrXd5oEB5euCKFcnWFEo3e6xP1GxKbVLftXvjxy1JtoVSSy9JZP4S37TUtP1gGjq",
  "key21": "27CjBY1eGu4UULgCxMjasucfYpZf6BLxjRsWmMpbZApyTKbNrELWHqhSvSAFb2kmN6iTmE3fL8Kkxigif9xR7GN1",
  "key22": "39Ly32vpxpAtk4Yef9Ftnz2E5MBo9bEbNePifyDssyMP97GNod7LyEqwFZDRbw6cpxaVsFnBWpifd11371p3tVnU",
  "key23": "5GeouoskYUAWq4g8iMYRBA1rYXkxTKXVN12mHeFYP3DbP7zacpa6y4KUaGrKSiktZP8b4fxFxNQGzJoGYePozVRC",
  "key24": "2kRvv2nb79tBxZvZQiut4RobhkN5xWgsSBPUyGtvcz7iJesD9pii9XvPosmQLEZTkE3Qf8XfHQ2mGFX7SwUM5TUP",
  "key25": "5rLuo8uDxL4FidB2u5V2dSZtMiVHgvpghN65d7dR35D9nhRjq8VimvKRtjKDo6wTd4CVzGSx8uxu493fBM1RheFr",
  "key26": "4yUzV5MaBuGhBifDb2X5pwwD4Q6xKKyPaDNGg2DMg482w3YGDQUvhDc2GK4grr85M7QHn6x9ZyNmZmrDvpGrLT94",
  "key27": "52sj7GA1Tf4mcMtV57Kr2d1Arx45mUH2ngfwAEFQyjJfS6BEAGMej1YbrJ44Q2MVTNEA3mN38QXTTBsZoc1ES3r2",
  "key28": "4NEUJYaBnJMeQha4EMv5hfEXp7ZstRrq1CT4ZGUNtaL1WdmuxT7HkjqAyrRakj1q6vrh251WSQQyXBoHk5ERcDT5",
  "key29": "4Zk27zEAUGjYyQf6oZTWw4RwDcCJkcfKTVLfvi6M5ej7gqDTXg4n1GHoroXqqBgwRWF95FxkiRh5Mb7TvNBCq3EX",
  "key30": "5gazhDpXAtykBRtZQ5SmAaqqFqyyn4Q9mM7QJcBVEcT1Nj3XBpYSEqDFz8dmoQjr6YD9SH3XvLudNH1RZ6pn87sg",
  "key31": "AAizHaSMuSZNJ75iMFAZpEj6cz1cm9TUqaJgxQ9XQoQpdmSqnZHnu8ZKnEcCd9ot3g2gaExYJ5RrKw1TM4HEorQ",
  "key32": "5gio21WPKiV2eVZNiJmmQmWpdjRqNNzsCZP9D8GbDwGoxdavca7TGuWWQqTejAeKNDNVH4kgtFNcV75edkpDU2Tv",
  "key33": "2pKtZdH7A3CckU25qHRPVki3LCUfQipj5pGppCjWKHjhAc5TTGYYQL4nkqaJu78VFPNsoDyvoBqSHZ8hvvNCW8jm",
  "key34": "HTA2rwbXgo2Wm67JdyhmazrY8MXqFSkDvRaMRGnX7TuSW4X4pZrSJteQLxicTnbE9veTL2Zfz6vvGqUW8brmgRH",
  "key35": "2kub2AUht3Br249nDqz7TwqEP1JLCUEmotTPvR5wQgAGmFKwiZraxwi4tBt4WdPP8Dipyt4nBTe5CzsSYeGgXba3",
  "key36": "3xhFsbSwDP21S6Ta6UqSLJXG72J3sVR9ZPmNLa2Kwzz1NvjfMhnoQyrXvGsJMTNPBwxunY2Q1AN3qJNQPV3xsvT4",
  "key37": "5N39zAikm9guA9ZmG8ueakbCaFL1knmi38hBPMgqqPno6dAMicxsTsz3m5Ep5pEJjmrPhG2CZJxm4yDskdDHPhYG",
  "key38": "3qdg1zqxLBqJMtRMsL8JWHqQyF4vA4DQT947sEqYr2RFa1W88JfA9DHQkA4wornQgEotmPneTguEncKB97nLCnBz",
  "key39": "5p22ggvc3hFgBuvLuA8B5h6QPVuDF8m3eGkvBnSb8BCo8bC8iW5Py84jrVghakZS83xiCwbmU9ejvDRf3qW3yfVf"
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
