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
    "j56y7M9J8sQL7iNsFaWcE8qK8D13updfmD1jyCtJk4Yt7WgXqjB8DtcKKwvLerCCR1pUMDVa8R7SjjNddAdrvxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ES2DCsGirsjXtbTzv9sCfhk5AK4QZEmBCmrZLQaDxS8Z8XfZ29a1uB5r3EutvDrDtjda6NuGwos4PdCXVu1yrC1",
  "key1": "3oPJwtMjBsgzBn45m5E4QLbnskAtc3WXqhKfFjyNBcehfSwCC7iRK4Vh6pFMUzxynMHrj43fhUDrRS23KP4hoa5S",
  "key2": "4Gqdq8cxSunRcH4vrc9JVevz56CWYC3jSKaHYm4fK2r1jgkvU8LuCUc8GTyGgVtUT3xz2G3eizRudANyaC8bXVT",
  "key3": "3SUqAvCra4n2sJ8kbvmYpwnoPh1Pygpac7hX6cWvB8VtnYyLaYwLDnqfGRbf8bBAe6n9LasC5TmACxvh2cSoLkkG",
  "key4": "2SGmeh6AjmDViW5nNmAG5924k8iVrdkHrDJFts7qcX3Pyx1mPzKro25KsNnxu34aPLx3SW2bryvRLzqZurDK4coE",
  "key5": "5gSRJrahgnUnTCqFxYBPRuZfWzRMhcbcXizKRVVSB3K2QYD3DNdBz5Bmqu3thVbyhodW98azR1swzTHqbzBgbRtS",
  "key6": "2zPva1ZjawbLNgi7DveNRs28K8PAcKvcoQvFTT5hEUoh7GMBnXD1Mamdrr7FhSmP17WbFyHQ1v8k65Rj1Uax4dCg",
  "key7": "3n18mx3qAeGMWiUpGNs6z3s7pVLnogzzyhAAodj8eGxPVNAGARwqANpCRCDt4N4x26YZC4pvVka2ZGrZfE666H26",
  "key8": "5tYyNAvFKk6DsZ1rGBe6zsYFMW7NnhiJ5ieaRW8yAJ2bzMU2XPWn8vAkjcctXR6SbmzBdW2x964JLhaSJfn5co4D",
  "key9": "5Jzwq6K4F5uMsapQqWDtuXdNCmeii3Ki8J22s9kvDAxboLo4wMijdUeSS1BEC6wEzTEad6PnFQBqSx6XcVUVLASt",
  "key10": "4kY7hgLB5CJkKoE2LP7AuoAU6WcxLUEsUFKErsqLYjhyAmmZtmnPmS3knYjUqQzC7jAVJU4CHgPgxy3o3fkvBH68",
  "key11": "6588EZ9wCTR6hwoZ6MMfkeSRHtQk5aGP58PyDJjM54SWSx7HbgHEybjmxcCB2BoaYxWj3bSH5huYohq2HGDyXv89",
  "key12": "2v34GerGGq8Yz8mmjUCTKrirEDK6q7YGVhHKJV8p2yDysVxNF1dfdbpECii4rDR38R1sYLctoVpLA3ZCHXKh8fhE",
  "key13": "4aMoP7b7xFFBXH4mEExxV2JpuGe1sWpwgZaDQf5iPRgEKyUt8BsWMtT21V3EprbazicKzviuVFbiM778Q2nPo39i",
  "key14": "2QW3y7aTsvPYn6yCQS1z2ZXsiPmgYxtx33W9FLiSCoRxhhm3rpHWEjMTA7SxdpY4cVFF8zwjeRxNioWS1Hr9mUHK",
  "key15": "5WTLWHN4xMWyYwvFMveVQBtwzvTX9F4wJfbf51chhFipzzudFcAkWbwGfTDhJcMrEmB6cAn2KTKNN4TyQHkPH2Nb",
  "key16": "4MgQLiakLqUjEUuN25YJwveKNdv17poPFpkjefTRQnct2SBpxQkp1GhU1WQ9sav8Fk7FoYqKR5jrw5xMmLyMetsH",
  "key17": "3mbfXJ6ShDshfTnPQ7CoxWpREn9xZ8XPqgoBP7WFy7HY3u3HRHr4bqvu59G99mnLcYWBWhHoMRoL6G5aUs9RnQ5h",
  "key18": "3Kupqi5a2n4UrELBDLwGfMcueAhvYbrBy66JNaoc2S27abJfHdqaCyPE8dth2emmyr8w6zdiR1NkNVbQ4U5oyLpV",
  "key19": "YTGs8N1XeWWuNnD5QBnLX1Hix2R8q5k8HwFNdWSrRTbemzyGSNX5iVYxGppepEnxUPJ5YrY4atgHdjhvahqEQT1",
  "key20": "4J7uDWSPyt2qoqQf6XfpVdwHTT9nVZE3iNEeHTRM4GwH7mGS1Unecgv4GxF7rX2p5zJW4YWU5h93PLjngfNfQhg9",
  "key21": "vNopgJ6zbx7se62D5aY26GDEgc5cxzn5WNbvR4JFb1o3kYSZsWkEu4gL3pkLQkDSx22qwLNAfRciF91TdbEqVgx",
  "key22": "5PqWtpQaHV2v1VVGJ3Aym8VD5RyUHhfxjVV9cYdSXxaML34KUNeirk2UNWffh8CLhnJMgCv8hbnniUp9n8dXMGMM",
  "key23": "PhvuYe9hAKubrzpPueCxb2X5wtWrhQ578qBMSrWMX9U5jLRyRWybwzkLPEiPWSdHKarFc4f3392rruUSUen3s5s",
  "key24": "5GwzncxPdn6oPWgAWRdNBwqjcTzhoepfvFyyJr2ny5f6Mii7WhZDNpnydVJgzVDFj2GJokg4RWs1mo99nknkkoT4",
  "key25": "5aYJSdwEVg23JAj4ZXRR9Mnc5a6AyyiFL1Jic9UtsPSGk372teHwCLGBy8N5N8xNSiDrv8nFZ7qiz6CRBnHHqH3Z",
  "key26": "N3BmDLeEVHEPJYNf5ivE7cmyKHL7HzreMEZ7uQo2Cwuc1iwdm7AG4gDY5x7v1KjwAmUDJYv9QCVHGQKyKtQr4DQ",
  "key27": "3ZFE1sYWzkjig2ghvDkg2DhtdWjGHkKWkETSpBy6kFK4NF13XBJeWUWkmWYZbgaEA7hTYKskFVoczQJxEpCMAi3q",
  "key28": "59aCqFT5GDNHKGLRF42UVixZxwTz9TRPoifJDYDpNtN4aKUN9tYd6mCvwzZkmW6c6eiGcj1ZXjhCWZp8HEbZVVms",
  "key29": "59Cp65myWRY4vBBGkzBCMd5jUc26yY2FU32jxKR1z6GPdzwde7STftY4wkbw8CcqduvWS1w6rQZvwnw1r8T13y1n",
  "key30": "51ykssgZzTCQaWpHuTVFsJqeiYjNiMrBauc9pPp8wrGZzPbZMo8oU8Ws3AKFXabKEwa34gFZYyDFkXdVVMnfUEkm",
  "key31": "9BnbW1rVmRgne5U5mn5FzDgYJz8EZRJybC3J51ZAZCUJfa3ZBcNmttoUox8k63K4E6YcHvC9ad5u1CQ6RucVjcZ",
  "key32": "346WUz9xere5hXLNawhcNCRNwNh9oRsfKmZJTCSZYVnX4rYYdgMYHrWr3sYEUFxLiZ7NuHf1MG6tKo9jNkC1cyak",
  "key33": "t1xauCiLHrFxN8JqG5mWKYwGSjFSZSwc7krpH2UcRV94dbKFfr1JaoZRy1yjtKRUycgVkKMSdPJd6nR3BbiNhst",
  "key34": "4deELUMMcgD88rgEkNHD4qL7gT4RanmFijQKNyjxEqgcgp6UjvtRzgcWzvM1Yz3GHR7xWLrGxjYnAkxkZy3MEtLj"
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
