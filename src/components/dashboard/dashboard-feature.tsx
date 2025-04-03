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
    "2DNSMqmrebQoisBf8ZxtomRU2nouwRYw18a7imhjVZKFGyoKK4SXAytJioN6woE7HD6nvSBigMYekd7hoqj6jf5T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SvPjn39y3L8Wf8EWNX9RJCjscvzG1GR6tTSSdeg9p9sdB2AysAaqc7DrjVwK2XBP3RHfKiTmwjpWSWksf5s6Zdm",
  "key1": "65rM5nVxHebRRVqGnXoQREnxjAxfAjgsUmKXh9e1nxTNiXUKcDdZyuA6WnQVZcfGoQKLjUjH71a1v2YhUNdrvruA",
  "key2": "2LcM9YX9fnt98XYnueUGfEVdmVUrsNZSXD2HS6akU7QGSbk7vgwjcV7suiPum47xqn9d1h53znJS4Tc5gjD1hNiU",
  "key3": "3roSuQ9tq4E6peNiLgC1yRceGBXksXUrMjZoCjaDRStuyNo97maoYukaamDKgB52QVHJetj2zECgeyzdjubKToRE",
  "key4": "3aRp6yijdbhLSjNsCvSeY9BUJGHuiC3quJrHyF9bJLwKvTLPmuqLfLSKiuELco6ZiuPjdXq86ZxfYzfQC2LDtWEj",
  "key5": "aqfsCZNx7NkYeEEsmvPBDBQ2o4bZ8DFZbZXPJPcBybzwUxfn5XrCGUVGwFaJ5XwYkJGDPoj5CKH21SinnPdgFhp",
  "key6": "4zsYq7NwLbJbaiyoHnd6zFsgHKCBcpbUxdQycZ4Qhh9QyNkHJKSUqwbjv8uYbHuvtMJHgYEGrVeXrjUZbyqZgn8E",
  "key7": "2Ye1mNPssTwFdk6UmnJf8gA2z17eNZEEktQbD4pGkYcgTJTGeM1GrdJ5y27yFmUdvbRDUrcDpooCH43XpBX9PYio",
  "key8": "2hi8gCvpEtbbd7MkKSeazutxW7DS6ytMNek5W7bspzJKnGPE9ETngpQj427XLeZwuJfzBVmUpAYRkP52ChrvVZFg",
  "key9": "3ktf1GvtNXF1YyyZBL7eEvwYwwbws96yN7QhDzSDUWQyNt9MVtrng8GpsLyx2KibjBHV382jt4YbAdc6ofC2Lyka",
  "key10": "3DYfKb4edDWGREqbmk7AXhS4q59nA3GhV8TY6LydGfbFfYQNTfFscgeTi1pGi3Wh4c9uApmi3zD99QRhxthnHoCZ",
  "key11": "5TNap2YvzUTWJ5XMtNZqHo3EuSPXhKoRyQwVDosDvQwv7rFwm5rSbD59ZBGHpcUWmCQRdMU6tFgT1cB5arBnEUpk",
  "key12": "5d9ygCzNZp311LweQoJAqRSdd16kJZSCGELP2tBxvTtNf2qfte8zWAqb7QFyw8wcoLanLTmYHWmsZhSKysAkyKk4",
  "key13": "3Lo86TyCwMcxMeLcnWhjNEimR347gYVexnfxRCUSzuvSsmHmdh1ocWUH47ATETKQpoyCvYvi3yZc3KsCqAAd9qid",
  "key14": "gTS58ToPbuC8EdH5UnCs8L425jVL4atRFJtaNtmfdC3kHWp23X2wkuPsvRf1PnekvqyE6WQMDeYpA83zfuUbWG9",
  "key15": "cXjStrKrxuoGgBpg8MuN2Ewiucv3bbMixU8T2S8v2t5iCRTyaseB2Vn4PKXA8fRZEZ4USgUNMUb2Sst4brv4bp8",
  "key16": "4fDrCAYpdUR8qZaBPXGUnRbqerZPixwicp915XUBFdkTrLwL7wPriBXb1rAtB1UUdUZKfJD5GrhS6hwrJw5NdQFR",
  "key17": "5kJZCPJQcxuSSASNHqtaRgLLqswnaeoG6c8HbXm8zt7PjcjGTeoWQw85rGg8NczZrVwM5FCNQQzWVQiufWBThuUH",
  "key18": "5JQjyU9LbnVvwvA5fxx5tMR4iFCf3t6M1y1X2Ptp5LyV2iDsZ2wWQRvSK6KSX2eNRMWreMbDkx2dYc3UXFdQCSik",
  "key19": "3HGt2zjsdVN3jhD75rPugs87na1F6eTcKedhzwatRmoYbo6y319eFYNTvwmJcKMUFB5Fszw2gEXQr2b38yQR9nsC",
  "key20": "2EQebvfEmH7LoXe5hZmXGHSsqeq39K94HTVseEk2bscij1Xp7F6iGjmWDpEJNh1cHgTi6Vo7cvRrroX3xaDAwrjd",
  "key21": "2eMKZzW1tXUJQxL58sGHpn9n6HKAGi8vohaEsmis1STuHP6nAyBJSRUyHNTmjhsE3c4AAAQx11px6DE5oAFo3Tvv",
  "key22": "3M3kmJhq4FbUYSL47cd2MykHUeb6nzhf6RKCLgWeY24xma4RCCnt2LM4iNKU1qrbgEyNC4BK6so7eZ7ttB9A91nm",
  "key23": "3cLrkdyujBaWkoU5fgUfd9SGjRZQ92F6LYJFMXpUenT6cpDQqRk79WRANPwsuXo7Ew3Rac6Q9o9Cba1pv47Bo1ne",
  "key24": "5Dayi6qvsk7V3zL77VzEGDtRpLWdyUGDkfzyJubPgL8Ds7dVovVGxpsbYdpDr7kLHd97Y8PVSA5GiDRJRKh5Bkau",
  "key25": "4xgCdsJRWnEinKfboVfVfvh3KPndcLuXXQG2zHncqYgPh9oYRNHHiNMg6CUT6LLM1mLmWT3mz42kT8eBaESfDePo",
  "key26": "4sDooRTUEUXXoiTxYBPCNUnRJrfVAzvptTH9Nm1CQe9BQboXquEenA2Jk8MYvFvut4wNq429pfeTQ4omc8AatRdm",
  "key27": "3cV2PhcwoCUqDuDqFMrw2UypCUhngToSrJDzqwk6jrhGZ5CQenGcet9DgqRWJvJR14TiSq7sW6PDkGftwxemZ2gL",
  "key28": "5Eroi2dTwrhrQCFBEYWpKmfPfJCZEmq3teETbB6QX2LFh4c8mAurpGoX5uNauwGsSK4F455ioennyGYfGSfKx3D8",
  "key29": "2AmhwU29wsKvtxXyYmQ5g9sJJQsuvqtoBsPDpu39dhZdcnedvjvZNQQieXqPStuGPrwtrSdpPc14Riys1gVe8XFu",
  "key30": "SGn2iVJ2VqfUtRpusykHvzuSgH597yMKXXRd3XGWNwWLA6cB3VYwtJtrtkJZUAmVBGZpYwq2ZA4hNwUwnbmLeH1",
  "key31": "4BZQie9RDhrPuJ8PFt8ZZmNpLFXrS1f7DNqrzX7Lh49NgZ55aXW6SQEi7yRDdzsPnwAGf7STFJ7x9WRV87Pss8LU",
  "key32": "5sL6xfkfdcUN57qNY9cBywfDw4VM79sBqT9Dz4zTUcmxGkG6m57sTU8iifpuqEKSXXVBZ6udit9h1wUxvRaaCeLA",
  "key33": "5tTJG7EXWHoUCPGVV2g4ab1TdrSLzUVLKaN3acCWWKsfvpKT7VcgFwRGnAnZJPnoUEcdNBbeAg8NVjXnkYkqX3xG",
  "key34": "5t2AQsapJwSRPekrgU5bywu2EX9Ruw3126SZbeDJrDo4CC6YxYDKCFkjYWLU8N6XVmcjqpfADqJeqZ66taHcQvBe",
  "key35": "5fZ4oTTnoTtnsn3sK91dfEXtecSRz5uhugK16JyayMdNuw41PFhjskLB8jfbWqguVTFpAwi7HAdibTVWmKVr8B9T",
  "key36": "5b3wjvsQjdPKxYXCCs7n8KDVZtyV4aFWizqVST53Y5Z5PKoojRm1E9ZX1h1UNrmu5px8ggxJaWPaETr4AhQfzv4J",
  "key37": "5DnaHm8ckv5n4HGhs7YdWQrd35mSBWRSYX2sb5abMFBsLoKE8kRQN633LENSpiEoQvinCfg5XohQ5d4Q4wobpJHP",
  "key38": "4vdtGFioY7SwNys4djuCmBCenLJe2moN6LCnZedrRzJsDEmbLfEEf91zzNAmQMSxHa5wdQjqtHxdqrh9SoxiiM1x",
  "key39": "3VuajUDfpSFzQTdpRRce7ZPoYvGEptr2voX4hcSeyARMheSRR7gNgGpW8cd84DfvreGrvGGJpGUzT9jwdicYYTnm",
  "key40": "5gif8nfmzX83dYdL23iCUt7UTN8Rz8it1LWc5YMN15h9QvS5mEAnHaRHDMYNL9w5U11w4yGUDDuKq5MXoukPzbG7",
  "key41": "2xKtjZ2xJxCVXMsHLofgEq9QVCZ8UiRbpGb6Ay9nKJpVHGU4iGk9jdu6UoXqVK6DUVjkZA4pYum5Bv8WcbFewrqS",
  "key42": "55fbMfJiX9emJwKcW49ecmrPCqK7M2B9cUKahw7yDdjDzNEAgBdEbJAoWvj1T8RgyAP33RvTZHuXAh1Uq6kUZ6u",
  "key43": "3KQUqBU5mTAUU17d4Bc92jvxFGHgjuvQEzrJTuf2EMZCACUV9n3pw4UQs3PfjJaW3YV7Un7vSyToDMRedySRtcPq",
  "key44": "LYifgWHtZ89tmnb8tUGMVyPA8kULPRS3Z4frSe1gXr5Nnz14Sxug7XZ3yKZqPaza4D4rBNmSA9M3LUTN2FKfWh7",
  "key45": "5cJ6GVgpLMiX9Dz5U4rexSuUM4kKWThAEcpLiHvoyKMdLMuDr2mrQuKQQZCMoHr5LRMKK5tMuEjRbstPc5pd3uaq",
  "key46": "5rQivjhuUKHUVZyLGBYd5GcwcB2GUmzcfN4gkpHx7zw4Faa8rETM82NW4enEqpRACTux6cFuLTXz6XFvtrwf2JHD",
  "key47": "277PtMqdyyuQ6WXDWmJhSo9oYwzMeNkdxxmAwn8fSeWm8gigADEgBSzHtKAGkEZduHkjbiNdcWg4U43NpBQQnhkx",
  "key48": "4fFKeF4kUC7NrgoVntrgmHUH3ZXSYL2L8fH9oonaMzE1NeZswpAN6am7XRbcRAGsCZvHrpdcRzmwAcSuLzhPUAbB"
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
