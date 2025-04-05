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
    "r7fuumQktjJsWgifmDA4pe12b6Pe9P39BB1nHziQ3yeju7vpUBPbUVCDysa6Aej934oYp5bk9Pasm9samBb27hX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wVEK6WrZ3SbB9BLHfv9fMDZeoiuCggUmY7U26KC3znGU4myXDMmL35J3SqotAUoKNCm1g4jnsPtaXNW2Dug5w73",
  "key1": "2hU5ghURtbC49AnyUE8WaN9B6KtavV27eqgECdAf5mwjSxSEn2twynAQUrafZ23KpbLgsTWoP8ChcvaS6sThDbic",
  "key2": "64zzE3u37eUrXU6T4fzkn3oWYDrUgjAjZnk1vvVmxqWKjx4dvc1hqPhyzqYACQinQNF5FCe1riPJ24eK592Y9SoR",
  "key3": "GjYCyFdrRj4Cgsq2k69kLnKbC3VbfNAmKMBMW63rWTJDcyPmDB6FjhrEqqKS9e5NAwYLh11EFm6k6UMged3d3Vh",
  "key4": "3hyTM2rxtKn8uEKfF6UBLEmDSefENf8wAP2u9jc4264x8v4TJw1s5sZuMC7LZXW1WdXjQceSorS5BsjaecuPQZE8",
  "key5": "2e8mSRqkHvH9MXBuDU8GHPF9DFKSJxzhMR2cDujM1svTKMPQ6f9PXFw9zthWTgrG7EHfuXg634uUGDrfJ26ja1AZ",
  "key6": "LfsiZjf6T6E2Lo522pZVCLd4xrhSfFCZ6qqeMz13MHa7rt6LFZAvthoDneJivPLCYmE7P2S5bKUYhGSFGvHywi5",
  "key7": "2CCpdgVQ1izwLhk9NTB7mcy2rZjcHNYPN2TaDYXhxhVX4pRWtAqJGxKimhXGCD6fCanmmzF4JCkWhuGM2zApcTry",
  "key8": "4C5QuiHAY1Svz7oZhnZkuBS5eXGdmL9EP3xkR35K8g9E2mXjRmvMpgxDpQkAopQS2ia8kxSG8LTeicBDwJWv8UqD",
  "key9": "3wsyhairwhYFvnnYXG2ssHsBQsJ7xXqwTAs8XQShnoUt1yB9drUrDQtFydbpjfVuHsJ17q5vQwjSCkDAmKvzdixv",
  "key10": "4LwNCoYJfAfnmuP7F7wtybJxCtxZR6tQRsaeiNM5kSMWyjBqjceE39PLu3FDmRmdyc5g8M2cBsJhQUfgAFyYRQgX",
  "key11": "3EkFmCc43TCgvpfhEe565sC6ZAXMxJyGeF2tuwaZoHAZD6k6n9cbawdwRFKeBpy4vVjnHS8X7EwwbkPjcfcan365",
  "key12": "3Sh5C2JPe9fdniYKfxmm9wUL6eVWaQwz6LU4cSUrHZCk3grdYMBgMrRuUhodYbHaCYmJvCsUPYZCQEcoCs34muLV",
  "key13": "46FWvwJds4hKqzQRkGaC8DdUwjqjkkkAcyCQwv2uxULuZyyRfCzg84Fh4xibcorE2DjZVokrpY7fszbMytCUsx8v",
  "key14": "5F4r6rBdPZX2aQwDPHsYK8TQN7FEQX2k6jMB1vwKt3FuqNpFUuaayn398NCZaQUwkbBToyaDCSFZPNsvULEHFMEG",
  "key15": "JbECVPzrskjhA9vyiaLtRzRoAzQ43GwdRGAqm36E6TzRnCG3xfK1khJ6v476rx2szj9a3xrVYVEtQd6kACDMc2j",
  "key16": "5aZXVjaYLay2nsPTS5B8itrdzLUgSiwrbkheUqcnjxGEY8fCxmVJA3f89R48LrYgentEkbC2byHEUa16MYPxJ7Vd",
  "key17": "2TrjwnyAkrKkBQFD5GXap8G7vEkKy8c8VzLxHpWWT5UML2jM5g5W6sxjUthsQxwBasSGUmqCJ2wWmZrzc8UTwdyY",
  "key18": "1pQBnPRZfBmH1gaztFdUmK5m9U4HzpVoKP2xcZexkPYKJ6ZDU916QrwrCazSwQj942bkA43zrSECcf6mJ3K2P5o",
  "key19": "3Zg7GXUVZEuXHSmG26vvis82VQnjE1sFHr3oU7HDLLuBAnhohooRPwmW8TonA6nUZPoq7wE55MBaySPS5Dr5PX1c",
  "key20": "2a2KPZ17mHfqJAwqCnvageaFEYJxWVsEMhZvXp9N47FCf4c2iLETCMsKtTNdhPeAMWiisR89ATZMGZjQENDUFbhW",
  "key21": "28uvrNujZA9bxYkz2rJAsX2YSXaidruzwPdGHShZ6UMB9RPJ7y1qYEHoaozM6xSkDR7Fh4cJunL2q1rjVEkBsaBS",
  "key22": "3XxPgTXc1Hdobxvt9XTufFoputiYwajCo1TYLizhQkn6iuGB31DnNLZfb6FRePFYpdZTkQdP4qsHa4V3PuJSt5TB",
  "key23": "gZ8YkmiZDiCod5HKuuNgT6pHAH433CSDsARVBjpPBRSe4TVATq72225o3tqTVrCZrCBnhY1syYt9v9uVUSMogHk",
  "key24": "4B2YDEN7n4iP2MhNdPxPz6pprUx7cpkZHQw9QqLcVRBv76j9qJ1nL53z7KctaVehS3wASjUr8KhyMDm5ZcGY3b1p",
  "key25": "66Lhqj5xooApcNZUZiMCWgUNrff5n4ovjKWndBH4EGvoHY5ry5aeM9LHVPYR6y6a9hFMRxtHoEBA4km92egfbvGu",
  "key26": "2GgNBCbwREg5iZokcbQqvr5bJS1EBqHL3izpSPXeZLHK9WEKRjs3d8ouUFwqz2SaJdeV6ZboNg58LxnLGcYkDoDp",
  "key27": "4RhH6XgqHwuNSFdHUc7tY2nbCfoHR8uheRJ2BTQ3RH5NoUzFaxCwNej19gotMEkkjQxqynQpuJpLKre1NwWDE2tU",
  "key28": "4ANTfgutRDZEcUaM6jN5KPLYZztMqC4Riy4qUJeUsmQrnAYbsPq4pe5ockSDcwHMFeoRJXz3L12EMdWG9myLtBwP",
  "key29": "47X62sF3G3cHqHz66J7UAWSPJvm1Rz6azrr7ofyhYnuDwPmNr8JLy9LXgGnD4qDKBzboW8ZZ6dyWHFbLU8Eqtcww",
  "key30": "4S4kKNyeorpRghECGS8X22F9EyFg7ejKtG5Z5EXhAh2hf8YJxkibPfCar4h4Zvbw2GY4rzEQcXHcFDhsHa48uvmk",
  "key31": "3HwP6yQroFqJqaUnNReXQfM6kKDgNdfrwGDmCd8JUfjU2z2iQpMmXzTWxvUzk5Nk4qPu8stBKXfZ4HFtQs5Sbv7J",
  "key32": "41bNt8QmUUnLjWS3qDC9vJDeuDq8dHXxEg4Cz4wJtbUxQBUCrPBfdjsVoXiZNwqktnbPGNZEeNYZsDVKXHbi5wmR",
  "key33": "2bAmqwb23kexF9bv4tamJKNf8A8Q2FGVr93uNDFe7GDSNC9eJEhyXzyCQUhAEQ8XVtC7twcFcD2D92jKoQWGm5qU",
  "key34": "4VT7xNQvpxZkRqbMqRALW2HSEVYdrU2rhr5Dmb6Cvvhf35kJnWQhLrSkhsJBX9Wc7GXgrS9iaTX39C6EyVSqaZ3K",
  "key35": "3uzofRkyAmQJN9PgkMSDbogp8yp6Wx8SEU7tu6Mxy51NgqnSf9qBmqhsC9eGenpn2JMmPs1kPVyDnMqbUt2XkRXh",
  "key36": "bZo2x9VJWcsbqwnbEtek8s2VxuVanncyLATSScANvR7DJx7PaR9USrkVSUBpoVwVzw7Lf358GWxW9rg2MjK6H1d",
  "key37": "3Z6BAYUSX1KFxDbZvKCtGWjPxq5ztWrQC18Z2mhpQGLuwni6KYkPnGqSED1xzMRNnMBEas8T3jfyEp4NNbuZUq8p",
  "key38": "2mMejy6wk9jAM2CygZbgz5MaZGJQQKnEtv2UYmKp8v8Bkp3vRP1f9xcidRbXHCqQA3L84zyMoV7XiB24JYteAxz9",
  "key39": "43F2jGUpmFKM1rnbERJDPgrW2DKkCdPemfXvkgiDbyvvrurHbKhPLCXsXpR2eR7d9GKVhCZsgm7uajAm4tZdR2Yk",
  "key40": "5RHuwghH9oPzcJ3xbrbVi1Lpu1vqjRhNSk2owyhHErTo1KpXjE6C5XJYPD97CwQLvtxUGAPneeMxW6vQUidmZeFZ",
  "key41": "2bT3bZQEsZwHbbnAcBUZTrdJXrb9T5VRZRYfVe68gJxZbGy6kg63iYuCaDrLnYmVPt5Mbms7YBAyppCiQ7R9jXDU",
  "key42": "xpCzh277KwPypbk8rMcNh2Dr5DSMDur2xvuBcpwAu1nZDQjdfADVn4RpKoJXkQNUXrvSa4iFJDuYDWkVUVzLuTY"
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
