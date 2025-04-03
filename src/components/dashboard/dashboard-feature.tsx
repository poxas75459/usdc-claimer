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
    "CWPS1wu9PoWqbTsyAuze6yVfVMW7LJo6E3ri4erMyp2w8Wex6cUqehTbSNzUvwHeRCcvtYS5mwy5uckujGrXwwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EQb9efFNM7AW9rt2gdQ9ChBstijgTJzmGpKicR1Fz6mk8NVP8inPTr3Ex4oRBu3Zj6ftJDdokr3mD8tcJtBzCqz",
  "key1": "2m4nUbSXP5hSGH37TRak8JKVWd6v6pmBnoLjZsPCre3chM4e7ULFVjmSbEVafhigjgQGu4FLYpUdSwwoFqRdTEKd",
  "key2": "4DvySe7ZuF74PwdvXCAUkDqrPZYm733BUcJHKE1JWDVwbHFcWZXjL7eUYhuA5YbJwSZRuTquZqNLtYQFMtr9YWrM",
  "key3": "2qAigCnDuF6jeQ5AdEPeJREu2Gbb4RZwC7akaYhkBYovyseTqd2xuCtYwN5PmfyxUT5t4rkbfaGvGAriGkHhCYv2",
  "key4": "FkAPHxchjmtFD76yGCS19qNcPEJuaLG6djptdpPkLXzu3EfUuBdGMHBpveTvM5T7CyouPukvreRcDC7mYgZAVVe",
  "key5": "5EGqhmXcUHgvHCz8c2U15zS4goEj277abAq3aENtRa2Uhi8HAnLcCVJDaGPPProtcNqFttAbVh4SKFoSev9jfEKE",
  "key6": "a8wfZKujJkqyyjKLMc8CQgRRYD7aiWE9qzvdbJhiE13G2vP7jhPfDFkQfiNQQUy2MgfCvNKPGFtwwp2Xf6eeutE",
  "key7": "3KA8zy7FqJBgeBeBbQ2RXhuvkyUgcmtdtgJ236DHZTgUwt8BeChGiy3KG1WjBXJVx9xeRi4vvvYXYWPAjavVDE78",
  "key8": "5segWoh2zMwYrw2dcWnL73Hftw4eNawfrFEocNsbyrpNi1eqfNNEAEKhdRv3DztCfj3makfzoiREe8h3xX6eTtk5",
  "key9": "Aq93fBHFEAzemmUaU3mKU5LCmg4eFW2L4BCuUSr1eact15vo5TmvqU1zhkd6JBYJ8GCChKnZ8bBES2iGKycg8a4",
  "key10": "sRgGDsW81zvi6AAGVcb7hyJZRwDqjQhTZfYQVotdhm4EHLaKrLkDy7zaxfhv9p4ZT2FAH3MUj9bgDeh1c8KoDPc",
  "key11": "4qxy2aLDko2ZjmysK4y9me5mSZcNmNXqbhqnUtme1bEwWduG1ioNzF8ztK6hPRiTWUSNkqHvh8h9okUyxGxegAyc",
  "key12": "5wYknrgxBCaEMcr1N11tgiuVyRFphTsybS4qyAgtbUvcg1qC1rDcqbm8bfSL6V1u9FD9BjRRLUJg4u2axqTNVwWY",
  "key13": "GnciXRTaNJD5MkiDWT2zeBkrRDrmrqxxDpSmmR5zWNyjQ2VHHSyRrAHeDKqJ42wgpVj4Z3b678se5Z3aAEa6WKS",
  "key14": "1cfoVbgL2mBRpMU5ogc1CCtnA2LrEmQ5eQa18kjEzdBTqEquJLFT7uQa3gndcS8NJrALbi6PbVwc4nm6NgXEsWt",
  "key15": "ZgWuweezA3rsNF74xRcsvYzN22z6vHtRkEQHbjGFrnm2kmhjx1B5xuyLxwaE17huWihmrDzLsUTV8ThpwBosA3J",
  "key16": "3vb3KaS2sdzNqipAGXDwXLgCZ17Z4XWXqWsHEWCHKQZFo98HE12W14euTjvDm79NRCSPnxyZPUYRJkhTM4gdHaRj",
  "key17": "274nsX6VK77UcLqiKnNRVvz7C3nY8ir5X5vb92Civ7FowWSrgcHXLWcSx3KHz5Eyizfi7B9vbXx5x8tmjv2tQdY6",
  "key18": "4zSVjMX8a8oqdKCpzdyzuJSHdrSgbatMhU34dzWbEdcNH4t34NMM3wZKdatKiA9hcZgAWb5ctmMJ3ErJ6ioTg4o7",
  "key19": "2Up1zGQUFbgRKoGxUKVmK45i7dajg7zMJ1EfydzSek9KMSzFrtcfhf8mGbAGa7FsX3yWHhCM2nxfSUS9CPuXKabw",
  "key20": "4xUHHrCw44nVLn6wj7ytZG5ZwW5xGGasMXyYCNYudwrP4VDVeBJ3E7BPnS8PRHEutdRTWdAmrKicLs9dhNHiHyzQ",
  "key21": "2krP17W5Z7NcVTin2hyMcxQW1vqDVH15PjMjCVYzwEMHGhyuxN8M5TXXHLbjGG5s2YRBywDryWGwuVaY7ZAqzCCK",
  "key22": "4vsGUfs3x5R1Krw6Gpr4bP9AVvgJfj7tWGhuiKAKPgXKU42N7ERpJZ5a1x8yZczfYZXxsGFzPuGJuDMQSxHBqS4R",
  "key23": "55FV2BkaV1D95ZQbSEzNkJRqTnXA4tFgCgxZcFh9dRwYHXFq9se4PHZPfQXpwSJbyHqxoHR6Pj1Kxy1oFa9axjqU",
  "key24": "5AZujitjSfGCHjQP1us83ToqWBkXxWLEZmskozjBDNJQBgCnimpehZRkxksk7tCfEW3BVXYYWMgQ6UmvbuYHrucf",
  "key25": "4PL38pNQTGw2W7mnM1WF4GZtx1qx3ugayeQ2JTz4mHeQGpKPvjproXP7KGRHVGFZLANXcTvXc4Zhy2XECCXcEnxD",
  "key26": "4zk7nSwg7vaRQWZVZYC1JZkeUhgAkqMZwi37PoFau59K7kGYzFHKTqWkQwr7Ui2NbEaSxgPKUxj56exQMaCdk7bt",
  "key27": "33ubPK4SkRXxm1NHRYCTZgkEVnLjsdQeVtk1xhnL9HMdx9xBWSiGfuGyLEphpDtW6jvDLVSgBpJ6SRUgAjngeYY",
  "key28": "2urEPtvQcxWLVnevkeP7bR3oZYoLTfzWebmwchqoodvcHDycwxXjyW5MpdTkvyD78vvLZZ8b1yLRkMEns6d1SAJA",
  "key29": "2SXQwv3q6QL1Xovgv2cXvKT5PgzUFZTxAGC5Lf8SNBEL1eYkuecyuFXE7NP8VGuxjy4vCjqTobphEkXv2d4adGjE",
  "key30": "32ZzK4Pjwe9hjdMXMfDL9eQAqg2Ts4wiU43kHhdQ5pbnXzUrAz3aF2gdLJb36wnu5pQ9Wss6pPZNDDHrfWy3htXy",
  "key31": "2F9rzQcXERSWzHeXgwtamtw2ybSNmko49MfgUWSbQvTeq4WJyrFtVJmRz6HrsmWT4KpEk1hP7d6DqLK7Nx3ts5bH",
  "key32": "c4oAKrYejRbzt7C6ZXDVZTGVBdupS1btX7VxpATvuJEAPJ1YrEkmq8uigy2SHfTYohmLwja2iiEfehH6ZLjLi1k",
  "key33": "rzXo28Kd3BMFKwTm7doZJRZKhbMo9t29qbRQ9ZMPTonox6rxQDLyQEKnQFFF43se3Q3bfjiwRHRTHwaoQVGnbdL",
  "key34": "5QvqzqDyKycrXVSTzLjo127oAnsHVWYycfvJV1QzwuJSCxt32mKxUv4DJbr2ogWH8DGRHGUuYCyFGyfHWVgAxYMJ",
  "key35": "PayB45V3ed2sPdMcdmJT3835ZYvtkC6EsnHq5EZaziTBjg6cdLmW5vqqTSrYFpRGXD1udLBdCd5hZVu9YXk1MNV",
  "key36": "4AFryQbJY5kfTmnnUjGCwgggs9Vu4EzZqJvy4R88axWUg3TwPFAU1LcK7dNmKokexRQzqFkCqQK11dSxg3Cur2vA",
  "key37": "Lq24mdhV4m4cGbYhNrW5ANNBKmwya1VrUZsHwqJRgr5f93XYYSnvhZtxdi1gJnAvq7aTUW2LfYdYjGE24ta1mxZ",
  "key38": "2a4hdwVH323sRdsJYyfAEPBNM2MsxGXqnMfPoBihAFddt5zxhFYmE6PLjqHz4JrfHLcGtcv4jV5oNPHNTCiDEzPy",
  "key39": "21vKjWWF6wchS8dRyNVgrhZqqzia9fdwWv7HvzwDZNWncbY6xWGoTmkfGV8MfEv8TLUxvJJFNyyYix4fDEi7uV8d",
  "key40": "2jE3u7EzQvX9gomnJp6NW67TbKwUTgRU6LDgzKpZsYdCpXfEcGFjcz5tzSCZpnpXUimU7PDGmc41FGukRnJreX6M",
  "key41": "5f9fjLope2UTCVbwVkZhPKd3eN7LcTN646wrecC2KMMsw8fcAh1CC8JQof17AjPAaibHKBCtJfWa2vgJYAbgbj2B",
  "key42": "uf1CvUu2x8KwgQuDyEUnatxZsf5iRGnPuATRSoQaM6NnUZtXLzkNsdVPFHdfoe3B8QK1E5cWNWAhebDWeQyvmvu",
  "key43": "4KcTow4ch8xu3ktEqp7S6gM8Vqh4pvE2B51KFUnqiECefa8tkr9zxwqBPeUvocfBgbzg6yXpWBvDydMn7zoHuskC",
  "key44": "3LrTxY3zEyW8KaPekaNA9hKpudLfEx9V34XgsZoF85nUKsf7vhM261vstrzE2aodpJFAszouWpa8tMc8ZYSXxWnw",
  "key45": "zgkoeZwb3wGNowi7o5ndMd1uCRdRXfL7kF4gvRpmFCzTTgsqhLCYi8c3cVFe6yqhQS1137cpxQ6MQVQiNRRsZ1D",
  "key46": "5sENibyvTUvRR9hNVjBo8oNKGcTXJTM1XnDate3ePeNsT3QGSenvTaSfd8q5uNNK2yLU4DcV29aCUF1qeCYDwhu1"
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
