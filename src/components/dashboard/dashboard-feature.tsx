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
    "tmRKtPXv9v7nBv8byFMBoLQUfSdXrWFEVxrRbvYtYeuv1kna7fLYiYFmXPErZjBSwmgpVvcjQwQzksQKSSkDjVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bvN6UbGb4H8Ejr6Z1RGh45Gu1jaza2Rh9aXmraELunLE8XtqqNkL89tpuQnUL2XKHTy28YFSnJWfRSuVnUtAWdB",
  "key1": "4SdBc6nbZurf3ma56f6YavGv42Fys3oQ7aVb6oLng8wiZSKyE5kkCXmaJ9NwDsNJjno2NjYyvnJ9tVrFdZp1jY6w",
  "key2": "5ZP1gwVkB2smcwdGAvUVb7H5TcmDvaCvsqTXo5j2XMspxQ81veZriMCgJzaeQEuDyWYAVn4bAguZhcDjcpnRAisv",
  "key3": "3gn3YGKcemFPWHJSj9uaDFEX7DcYoxRwceqNutoHGiFBGxTpkxAWfroVfjcuHpmyKN4N1TDsmSgPGppC2teDhd4h",
  "key4": "4wrpTABXAMHZVeLRSQVpxvFEB1uJmyJPgeveh4NmCGWHe1J29EZ3hqj2QnaofwmqemAQErzDtGBj4JUhbZRQyBXz",
  "key5": "iniSwy2gCPbfY15TnUwfk5F4W3LBr7Ciq9mqYTGGDkcAJtdTMoNLqfkffYGZCBdtCf1SxLifFYYtF5SzoBwKVTP",
  "key6": "3XpuSgZYodcNGeSRcZkz6y6d6L2ZkYyK7oMnt9NCuDETpmynHMEjrCtXe4eQ62Fq3VKSDhX9qke5EwQSx37uSTo9",
  "key7": "4paZ1F7GkXP1q8wZyCfLujtF5a2KTi5SAeGpY4tYdrwVJNSbLEYnSwEnq8e8wWZFf2xFW4VnbSoLK7e27X5SNiqn",
  "key8": "5y8UMbxJE4PjmEG7exF4qMvfwkpUT2dvyLfHz91ynbyQvbZgpgAG9MEf6JJJ9PwABH5BKYfbkwZfqJTqWbG8B46w",
  "key9": "5czLK2pdc1Vs7QGdmzdEnu4qKwJ1ZKpLFmw5djeuy317hkoKZXYviCXwuMJsD861P1D96UVJDxrEq4HAsrtjENxK",
  "key10": "3pCaJ2JBvLGjGsoEwUW7FM8fhuR7s2hL22NBD8eKvuLaYNBKkt89E9YJdibqKQP1NzjgsfqTFd1jXn3pWRT9T1PT",
  "key11": "41NigAm3yXdVE9k5UcijCMHa6Ce6JeNA6Ncf7uoec3rvtcaJpczDtKBMU6wcYdis4gCQ1CNEHXv2UpWhawN6BTRv",
  "key12": "BRFSWunYbcb5v3umr3EU895TFzEHrsX1SSFZrU4bCuvmLBMo6wbtSMYQbath14Zr7BWPe829iV3Fcc7NtkHVgNc",
  "key13": "46zG5oGEbSj9zYDzBJftmkSkburZbkMVy9tcZS2P16Ex9Sk6xFxp9Puies6NBfPRFhKfdEvLfzp64Sg71D4ZAUV",
  "key14": "WpnRpfzihDW6T2k1CftSK13xpz5ctunbr3Xq7Y9SVqA9tWueKMeAdVvNC9HSkDdjbGgQBE5qfwDUxZkPw2pw8my",
  "key15": "49ZmFFNe3XmCRD91qnqdekukjvrQH7rm6Wcjqshzq4wd9cudrNgBJzPJtdZLjiZ8uZEn89eChKyFkwd7EWfSThSP",
  "key16": "2qNCz4Jf3rzyN4bLLGyrSrNAGrjKJ1saZrUZrWrgE7Dbkb5X3bLSt3N482o8fBHGLKeZM7bs4exsrG8o7gxAWLRN",
  "key17": "4MkCBqeomjhY6rE7ws9qyXXniNLECieGkLeBS1aFhsaB91Zah2Lpk4Pwgcu2xfL5Dg6z4isCAwT3AL58bXass2n4",
  "key18": "4aCyitzB6ct7PtUpv868fkK2dnJoxA9aSrkNyFysbxcBiKv5JA1UfqpHW2GcP81fxHuSbw8drywTRwwNaYU41ZXu",
  "key19": "2yrjgcFiiZyCxc3iCkUFfEL7YwZ1N1MLW7g1hP7RrzuB1jyY3h7wmxot9pajhUW84ohFXzSqRcdr9KWGqmiDA4mi",
  "key20": "3Jz3BeuzBd6NWz4wqV3dgAFz2x6VHGu1gB7D74p8hhagBms83Uiix9Uq7ETPFErsSte6vXjRa5aDmKpA5NvTbCGg",
  "key21": "4KzPy1a4cMt14ifLqKurLskR8gY7eBFhvGPvrZXKB7kEykhgi9xNJsK6V3yS881EykkRJrq4VgcofBm7pU78qZbX",
  "key22": "2xrDLwiUy7cQgd3NCvxu9qao5yPryWBAKfQCnAmC4pwpwTD8jTsVjZSCpbkwvTkpiaGSCEM1KWY8DsWNmojVVftW",
  "key23": "8Awq2QK5TZJA4EbDXU4QWHV9zWs14fHKeWiQPSJXmX3yGuTaGXjk5PbqLx1UNJSGCpVTG7QQv77eTYWLKsn4QCT",
  "key24": "ukepQLTSkmKAxjBt6MBMF2sUWowWF8kWqc6daXngjj5RPLXgHBtmZHGE4NvGH14aoetvZom6RYbuevTEnntzC5X",
  "key25": "5tombPG6j4Pixd9CVcKSSZXuQayUkQkzJXofoEenvgikuxCWdYjwKwgBoEwGKMa7ZYHabFdxcTNu8MpdaVRU293y",
  "key26": "5HAngCm226osQWYYRGY4trEEsEVszQSsdA75VweP7mey3hYFSnmvzxuJqfd2Q4W49V7Bj29ng56FMQ2mKnHb8isJ",
  "key27": "D9xACCwYDfBdEhJ3hkA6zBJH41x3weNtnj4Wn3qfFjTnVdkhmZHG3jURSNwYWWGYqbgYtv81VRBkgYDSmqZ4qT5",
  "key28": "3BoimXN8Ds74TN5CAs3kP3BDTvfffPighzNH1p7Fc6QpwWaPP8uoAb7k5mYyv14qWhxNUQnvqtiQPDz8YfQtpLKM",
  "key29": "3v4qDuXK5wJRCWjXtCxc3Jv8kiuGZku8Cti7MvRhg7BB1SEWWTSVpesbjrAbTNkzUoYY6Qb4nUecttA2u12nZADi",
  "key30": "3PEYJQM6Pi2sor8H9gSGRUBjFYQb7bEovFCCg5iMNMJp5zZYuitPnjtUkWFrXSR76JXPeBA7M3hae4eKjCNCBkQY",
  "key31": "5aqfZ8R1789hzimzy53AtRyUhmEzJPDWeQaEodRR6yfQN8GwJ7G1KyaC4WoS4zkc9id1Y5gLuHoJRp6q1Fy44ZU1",
  "key32": "2SSQgiCReBMgEjnXokjgEcgq2N3VzSKmVWyhjBfAfxNgy22DwK5FW9WNmCfzhac29QLagfEHZev2qaaxP2wPxbi4",
  "key33": "22edgEQEm7YowddbQSxnh6t5k32iGYkiqdGYEaRajomY791X8cCTvJzSqzhGWMQqHH5f8x3KePat5f9is3ovWMVJ",
  "key34": "5d9snDi7w2ueghDxqVPKB7L7cz21H4XuY39zUgRo3XjV7QQbjVuCtGmMUFgnfNGAr8mmUiga31fufzQPK7r3BEyn",
  "key35": "3TPFz8jjjkm1Dpb4HHZGNtu3fADCX7Lkj6oi6PMHV9MK3BR9LL3WWpwWHL8ob4DBooqofyEtpHagiyrshg8sKs36",
  "key36": "5gnJTGKhgZnfPVUzZpJSnXGbQtPQ4GyvnkoFhA4Mf3inP3BxQtmvWhZDCtYyaxCxrHWs2GdSvFgDmLx4k65QLWry",
  "key37": "38UdfspMiymcA1eBd563az8CcsN2VnjUaubbSguJQ1QjmAMxUC5SMTHdbNJhPyYv2giRmHHwWjND63UpLFr5S1Ai",
  "key38": "2mwpGpjNQ6hgbmzy1LV5XTuwV55bsmfE9rNQy37D7zCKcYrQCQ3U8ovrA8dqU1FjAykhTBZa8bZNPP8ejmCtrE9q",
  "key39": "5TaKWqgoHzhKiQipC4dDg1LpYbFrDwtA8HbtqSHPb7hXPd8negrTwMVtr9XmNreqyobwMDQpcVRz55iVYqBDSJGg",
  "key40": "2i2YPkgDPNqxCp55trB9jzW5yf4hgFzDaTmV8aJFJi3Qz9US8pyBSM5jYq7pFZHLfbzgSuH53SFTcHKzSxzpgKeT"
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
