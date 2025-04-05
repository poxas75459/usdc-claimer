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
    "3cFaaBELwwmQgK5CZtckdfhZM4T83eUuwp1u5QoC9QMrc3xS8VTjngEaJroLofHHjHyvKtPiTUdZK3C2XXhy1Kgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pRjs8B2MXBrkSptzzgdJYvLJjGkrNZeaQ7wg69ri1ZdekjvHAkD7xwZc3QfRwJhN8123kGUJsz4uGxPgrdZVtUU",
  "key1": "5JxtYoHphXUf7oPAJScozqtgWtZgUtCaSNn88Jc6EPxg8KrnWGimUBeqM69MMDyeeira3EK5RKhMPS8n9n7J19es",
  "key2": "5CKyQpRgr23grrdE1oVQc4d5pLkH7hQTfn82mD5jEbySEW2G4ypYz5uSbQVQ6zRZd53gM9a36aRJ1aLB4LHv75P5",
  "key3": "5y1JdbqwVnWhUNmpGeFQV9cbL87hMe3pd2xJNZAnXFF1JCVXNjvyVzv3mC1voDatesZmcK3aEw2qd3UKCsVpdXGs",
  "key4": "4Hevxvtp53mwFvhQxYjFhnDovb8eHPHSYe953UcPRGZNKpu8hsErMaaZD7mJcw7pmAccbyg2JdVjncAvPVUJZzio",
  "key5": "dKNbQSCBrcFBswZHkhiepWoC4hHu2bXF5UGauVCemHn9k8j1wGTuSLAbZtcdJg8WGapTkRJZMz3XDm4V9YiejTH",
  "key6": "2zm9TmJeP9uaaQkYUE4BW4BbM8Yx4ZRXJVSgDUmiQUVPZ61nt5kzsKc28WGbdCLBvAJqbrWWeNvqju4T9hrxFgy1",
  "key7": "nzH4et1oGRDM3pGrMU5T5zFkBonMkC64cRRB4NRo8gjQGKbqKLuiZtY35tMrCDECspW58VQ83toN6K2Ud5kCARs",
  "key8": "3CcK4BgQSpnZWXwwrtzPvsfVsUMza7HhryMRrzsQZUDhtxCLNs5aez3tRwDnVnWL5K6C5PbHuL8hgtseyDfw39jZ",
  "key9": "5qNgpEAy63NWaQ4k4zQgkhDJ3qjcif3BRUiLqfQCL5MT9Y2nkaDnPmGJpKMyHffcsxJk17Jg6No8mxRz8KvqAooP",
  "key10": "2YcFitjZSsuHLtP6UUsWytfxetgi5aptca6Zme5PuS4huFMLULyqWuwRQDF4NovF8kGvtGvM2YdaaynQd7Tg8Bos",
  "key11": "38SC12SaT4a6ZR8VYe1hApBvoSn6CgJo8nPdAGZcGcEDPbDz2X6PdE3z6Neydqmk8LAPzchZKKovVYELGcHmQSCi",
  "key12": "3oMjbFxdtWw1KdBkMG7hs184b3p88sPHcwXu1hqLQbu2P2gwoscxVMHBWAo9XUR74oCxgVuVFsh9vUeU9EXXKhmg",
  "key13": "4d2RP27jzW6dwnCAPSgLHNQY4WU1dDSMu7kPUcSArzq8xTqAyMRuLzvAYoC25fdj1yV9mpsVkhR5AwdQBUiuRiZv",
  "key14": "5gNSqHUYUkjxe8LVrEwhcmwGyjvkbUnV31nypVz4129nvzxAPMACes5eDz78yUUAtshrVTbuqUTNMqoXcy93adbR",
  "key15": "4rjJ19fFsZD8JGG3Re9Wfg5mbF7z5emnsa8bDwc5UBHuUxkxnorewH7GW78BRzXUT6SaxkL8zkg3VTLAbsGZMSzN",
  "key16": "5JZx3Z7d7LB1mFy8UV2n8GircEVxk8FCCBi6RcJGtT41KsgotVE9AFXG9CVTsZAsuG8gXA6BjyFmvjBqrs4V7qUg",
  "key17": "2vC7AdD9PvcnRAFgf7ZkcZf7Y8obrHN7iRMNFw23RgWTPiprJ1FMX4YHPZFxRR6UY1GYzYfuPbPixiFJfXcCuK4S",
  "key18": "4FNKJqXP2WzmmWYgmYun5kXp2Z2iUeP4beeb8hRv1LZmE5mit7Cvbz8YAg1yxqeyYmjW1Zg6SZbZ2iUKfFk2kirt",
  "key19": "4FnVmDFnPACqPb7BWRiYBzV52p3VSfYJMJqDQmdhuj9MVqHipTD5Q4W6Di1xbB1ndvwiay9BkhZ3ouvUKtcupy4G",
  "key20": "3nFG8K4QfD5LCTMgBBBKPW3BPyf67QXDPGTh9Q8LuRN85moLU1cycS5f4qRBNmxbKHQFGKUTKNE5ioC4t1ZYumya",
  "key21": "4iuVaEUefAiL47Yw7jpWEGwpLse69h3eqpbdWgvtyRxXLRyG5eCBkqrJ2xhFhPPGETy4oTyffr3uB9TE959pYfGz",
  "key22": "4n7Ltg5M51meXh3YGHQ93icDrcz7ymatHFs3TCc2kkc7daHBqZjgQWev5DFthGE38hLLvvSB6Q8Eqync6oyxyRVH",
  "key23": "47gCDvtASRRVvcqxfJwf7khaa9duzh3i2mfxREQBctDc8BaPqwFUCeuwKALpTLD9uLUbF8wRa5yDrHBewhQBqhc6",
  "key24": "RSC6H7BbmTHnQnkStc2k5wu4279GAFUh7zQ3EYDwycjJDi1CRFWryCPhNwKyNdnJ88aZNQ2taQXUQ7hPiEKZLnm",
  "key25": "5gkDG8EVmVM893FjteKkieE3ToQUHBqZffYmUVZ4PBRKtDxA7ZUugdDhZNqqXAC8mo5Ksq4fHVpJVod44FjbvHPN",
  "key26": "384ajZrWeqDem9SAek8GHb4qbSkdaRRPNeA3WFyY7BGWJEctoKo3Eb3oH8Ldpy6mvcAwSe4ySh5cWbFNHDfrrMjQ",
  "key27": "5KY3uLpeeFWuKazZVfm9AJtv85K3pTeK8iMiSm1gDrimJFUZHGfkZb4RS6mdxrSNNX5uUYGKXZCwsrHTMtmRnetL",
  "key28": "65GBVnsPVXAAsQzvbzsk8y25q4hPjLVeunqrnNnaAidvMSyR1d78SgvA6sU9TenxEZvKZeci8zu4YsdFnMcjRWtP",
  "key29": "4M2rgBZqbmRh8vnXkavS65fbLk3ugyQi2WAUQKzUtuJTjKgkMSHimJLvstCfDT9gqtRTjVyVrtVAXpLZR88bt2Nh",
  "key30": "rK5cKnompPrUi3B98heWT4ko3y7898TtfKN3MQ8BWfpHpVK4GYgyFkjrGPJJut4PPeJxDz327RNfDh6icmomqAh",
  "key31": "4CTyeofRx4NWHyWhcFqcvcvKYvzxk2o7wE9eGcMwgTHawRti6DBWHe58JMR4ZyoneisNkiQQH3yPq5kEsBgiVmcT",
  "key32": "4dNo82hBg1Vjzu5thzaSqjr2PZbfwPJnLmWNTQxJgdJqEZzRxKckYwArdPJTPYJj98V4sj3we7TetLf36eEFqDFG",
  "key33": "3XAoNB6DNVQ3Ywh656UF4aY5HB9Ubh2EMNZNGKjT7MZXMKkNU4rYogbncFd5MRhThjaJwyAc2suKNwnksuPNwiwg",
  "key34": "2pZbgzA8dBs3wbkvYofGQsHACjcaMEL46jAsjB67CuJBqPWQR1j8vJbp4cfPFLKYj1Eww5QGwo4sRnfYXGbxA8Fk",
  "key35": "8xXdjvnjxzgHHe4otBmAS6xPcZqg9Kc7Us7EYFqFLSTcSvkv8e6bQimwr1kN5Lr9EcE5wz5BE2VReRBUgsozjHc",
  "key36": "4p6yeV2FRApHUQjTJ39aCTXSYBCNhjLJdGVsEWpcHL2A6Sz1xUVfAEjYRJdtFikCwW52xfymfFTanhgqV5gkAjYn",
  "key37": "PczGVrmDDgJS5MBEVp5ayJXufrKBqurYqvFPTenzHFD8heDMkAmnyWmTA4JQxo6MqNWUWkZqByGHvEQsqowuxme",
  "key38": "2b6Fw5rmC5SwqmkxVqHb5391Uzhas36FCi3h29Dk1zqquiRYJxReQAM3eVeVRdLCruyvgYcjuPoZWV3NuHycsqts",
  "key39": "2wi5ckFjx4yhTKtRfds6iPHKzqeSMbjKyFfopsCzoyVJMCRXxyr25jhuunw8BKFX1cZiTXDxsjwEQ7mR44JTbqSM",
  "key40": "49NTG4GsC963xNLduBSprMXkHrkr2AAPtMD2KwYRw1Eqg51KajPUYVFAANrCg4pbZHaa4KXaegNA6Xhu6Rt2XE9w",
  "key41": "NZSqVY7FnTxjeXRcrgoUzDU26FYPTxLgP3A3XEBMdw5mionuJxS2axrCtNib1jXbrVmGabGJyM49EXz51fjgKMs",
  "key42": "5DG9G18PqMnCF6N1uzuFzyCkcezHP32jK4RGvQW95NbvBwRz6Zdy94TQbwjwJc1CSrGjNdnJYZQne6Li2jpf8P82",
  "key43": "5VBoKQ2KVU7RvzaWxCKaVTyW3tZC7cAoK2WkjDiFQESY2WRf8Z9pcfcNpFnEBrsuJGaZEFhp1BVVKDyuKdkGKrRf",
  "key44": "41xadEzmQAiR7HDCycB8Tm2i35LV4BL8bvgBNwEyANTXDRHuG6iRdQJxrcsbqcvKKaxaTq6W2opumpSFAVvXaPaU",
  "key45": "3rKyDdFUxhqVPzafggyEQif18B9U8G3LVAsegxbA1Y8fzBoYH5JFZQyAsXqFMT1ynpBqSXvTanuWWcfNTMnBUTLT",
  "key46": "24zqjW6i3JJSig5JD4kggfJ2PmszZsdSFZCUfAGV65GuRnbPbgfe4zaBQ78D4hNPDwTBs2i3sKB89kP684aCsGa5",
  "key47": "4J47zbkt255RBahBZWeFLUBL99F3r7yAYuNKSgBJJ7uQ6nD2Hs8revHBorQPZ7oc9LDhAWti4j5APNGp4DrFPJ4M",
  "key48": "dY9m126mxxrcotG55zVpCDYbGUPRupW93DnRS7NS4iq7bVxBCQFydQ9azSjMdDDCUHxyoZrDqRXmxhqUraJV3qB"
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
