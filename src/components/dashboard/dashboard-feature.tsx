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
    "3c8b1i9Z5ZFtofx9MgG8i7sjS4dn5Kq8mnympgqg7KJS7ZY1PpZViBc2zWwYzg1tzazAdcDNDist3scmUvJgEGyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hw2KJLuAkQ9FJ1hL6havUTGnhbgA5L6zLXh72T49ma5KJyo8nbTcqPn3tCGPR4tkJTfeQav1Htb8LZ2n2y3eLjY",
  "key1": "5zbzksraEYpLVrgu2tkcB8HKL1pdumBm9RYkdmMC6RjHdtXE91eAYfXFdXkuq9h418p1JTbiExds2nBtiMNmpR4A",
  "key2": "4hcYXVTpmvCcJBJcRLRBL6a3rjwwtSEZAFRPS83D3RpZJeMvadBQVH9ReCpq7WA6WaGKcwcbgCAdUbKHSG8ibxEo",
  "key3": "5uKcYiFJA5oh19oaHAgJGWRAoYJkMtt4XCcMeCi66Kj81v2gSZFcPp3vM3T6sR6sPVVDeHiXF5H4CacS1ALnhXmK",
  "key4": "4CSLMLWNp5NdMt9rNmUsGjY8q4DsXCSM8Xjrhn9gcSJVV1neCofeUU6oqKAq5zR7ZkRxnpAFdH47SmrrRvVaYaHi",
  "key5": "4CwX59wjMRBZcF6oZCCRn9EA1r1LYhsqWjR4GPkPCS2T6fjEPBSHoYoKQSgj728XZKhwEvF4vSTNCY3AS7saggKG",
  "key6": "5TwyxWfZAY1LNDPKdfBKWosgyRLa8SPgDWzrsmFtiQJ24W5aaryg7CqE4ucUtytLybh3CN9xZPMK1mzuZVFViJmd",
  "key7": "47kvYEBLyRTdqxFNoAWjYb3JvsM8CEqRc4HHTDuWnCZGV6joHAHjwrPeG5kjqiQXCvM8SgW7d59fCuRK6PR6dG8o",
  "key8": "42BYo4PLPhyVUMg7jovz7HLnBWK1XNUEiehKyUEcAkavjeFxHtwBHzQxJfLa4Cfi3AGFExNSVRypEWtfChEVcofa",
  "key9": "26feXB5ibd5qEdaexXqvQZLvErHztH5mQA2PjKWFJowSt8QFCCBcuH2Re9xrwAmxGhhPxBbDLwbz4VVmcyw8z3Ni",
  "key10": "4HxhwikwnaJfM9DD2bnixs7PsgPMtTyjP619S5vP4BkmFwpvGNE2hTPgti28icBaQXBXbUuVQiB2BrbfokhB86au",
  "key11": "fbd5riCEsuQiLD9akJALScCrLsYQRgdshxYv8N17PhmVkYEHKqhPB3iBZbfjMtJYXth4KALnZeTffzvSUwhKqQY",
  "key12": "5Kzzjr77ZPmMrmVr9cBmXPQFt4u2c2Xf3Ljr45QLrezZ8cFTSJJo31G5M4shA1tVVWKMM9PHRE2eqxWVdhgfwZ6D",
  "key13": "37zuQjymB4qzFMUSjtP6xGJrC1cFE29Y9f7S9dzEXfVg3rssgNzRoXaVUeBDH665hFUupt3mSBNpNh4CsE8d7V7F",
  "key14": "2WTSn5Sjx8o2AotquVKciS8QZ6Ybo9QiqdCU6mGqpcY8at33R2zfeprowVgHgjxohEey3kLxadVCCy8EEZ5RmEKh",
  "key15": "4X9h2NpnMQq9V45EjbvFvpxC8s1WMDEgNEKUdmJkqxwyL1ATf51F1EWq4zsruxCV7AkFhgoP9wN6SXQSTay4grFY",
  "key16": "JfWiGRjxLTrFVo8BsGxzbqViD6V83juY6kk9CQMb4tMKqqTwLD7WewKs3pVmwvAZ3cwy145fdx4wrCneFd3p1y9",
  "key17": "5dRXyvBpJujaA4HKpndFBGbSCJb1jC5TUj5c3yCmZ5iJQBkaEi7zeNGkJqVAg4CAXfXe7DSf8JKyfZrSJTP6K6g1",
  "key18": "5UBevNmSFta2QmFew3nf4dGn6uXon3g7GqdePFVA1xpU7rsNERmcEMZKsw1s7UNtpJ4KhNBAB8N3jASKKYUqfTG9",
  "key19": "3kLUaKF6dKgJE5xAG1ciEL9jpWCCXHFQx5c1JadscDf12sKue4vgqbh8eVxgPnk5u4eb2E3DkmZKLHXtkEEZsJ5y",
  "key20": "3hFWtRM2BwVtNYRhJHLNAZhTL6hhZzCnGD6M1Z8Fn45CR9hK9UFXC1shERMA2X9hvkrwfTxGFaPVEpu3JwLWFrdd",
  "key21": "64PfLSqNEgkvGo1dPihY3xFx8J7YHiG1tnFBLqD2tbUUJBKdnWQthamgDdD8ooJUTcpNSx8EZgc1NPRsMePuUsEA",
  "key22": "2hNQDXe5TgpvmqerFZVCeCPQE5dNgnHftwxNZfhg3V8TrQhPCwe12mVAeGvfRTYLGf45fU6vTwCHSws16J8A8Mb2",
  "key23": "41bXV7LTCtsjJY2CQxY2Ej9HTxN2Vj6nsn3oZRx5QcuSPDGNirncjSkF27hTSxDvjfJD4tJM3egBhgt18u6DHd4Q",
  "key24": "5699zJNs6C2iG1NBZT4tjQRRhH9FgpeueNryJx21WMTjUnK4X5hip5v9H1pvHZYVoXW7218JkHNmQ4fYDhHDhKpu",
  "key25": "5qYvyNY9Fc6Ai58rvexiD4Key5xqKRV17mocAR6VPifGgzVkvFWMV3oi85HRPnQyz6jpGHnAB5E675T3Pj7qtYix",
  "key26": "53g3M3V6PE33MD6C4jDpxTiZLLYQSJw8fULrJoZRoSNerdsQpggbSStfA6VVSiPdrYb3gpuSAL13Yb6dWCPi6Xam",
  "key27": "3RUiMN5x9RHRFCxES6wef7CkaYBfYJ8Xz6zm2QbYscj26T13v2K8THX4V9WEcdM6Y7W4LkHPWmNkeRtDZexUit88",
  "key28": "4k5zcfz6hkQzdD9XLPesjni9uNJs8h4UCScQZ6pPEEBLceSbQJaGqpSvr1dWnFAPJCwyHZvVBuUmRmdCW1QwUuDt",
  "key29": "4fpku27kP6Us1JZ3j8Rg8PsbLZNzzHwsxHiwS9GxHhpVikmAecrJ8LFBWiSv687jpzVAefz4g5wMMuKmereuB77",
  "key30": "kQ2wKkeUwFnMrxtWLLtA3U7qWesEczPwrP3z4H6F1efk5E8wsXgQPptfpBTGjFBHnsEUqYS4vTdo2Q2zdABkLNC",
  "key31": "4WtWDAV5wSc8P1LBh48c9evsZhdVB4oz1Yu5rSb6pC5yu9FvYjvhYKMypdoeEczcd6yGeG5WU2U7r2NVYTniWj5d",
  "key32": "53jz3kxnrDuPqXCPtFyFQrLxT3owfVQuaHvPn3Q5BL7T9TxPDiyc5am1sCH5qpXHjxGQqZcmn7nwnvvsESzTjZph"
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
