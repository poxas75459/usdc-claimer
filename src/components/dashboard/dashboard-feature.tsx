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
    "3ERH9uYgfMVt7crgKVqMfHbknteVuNvCxEgcx1WEQsYXiXcFYxK6kEmcNdieeSzfPZtbcLCfHgPZLrUAyRSFjcJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MxXg7ZmzddEE1K13GH47Gtaib87zUvR4mVGKjXE3P31AXT8QnvD8NCfmwNPfN43SKaZcaVyyW8sVQG6kBxwXqxT",
  "key1": "4GH73PCZhnGxvm8L3c4YJp4S6zSGSK1C9pAFQfWBMKZ6Hg2TSW2aRYGZqgVJ3RLcx9RoRhnJ6TrVtHeBeWyRyKUv",
  "key2": "4L5nCcxPbHfnfLpwbmZjsuDY1Xzdr7xHhRjWKh1Rbvg7N7T2pMA1vBDAJFaYCzBGRonmHiPMtRnDFPubfysXcN3P",
  "key3": "4YiQoe9nSzMqBA3cwKMngN2jmvYw65EeAfcRKC8tvP6jvnpxYzxNhxnsdCGE4PpZ24eVnVKsZV8CgeGRQR7mf8VZ",
  "key4": "5Y2FQ9HgBoT3oWhB6jRqrnZthVEtsv5CH7oQcRzkSisN9VELeuwWAPfxbSWoxppzLdjTJGze5246k6qVqGPitT48",
  "key5": "4tAWa4nuQZjdgwF8YKZ5Ci8tTyjzXVrByt8BtUHzpxYAEYQG3wkGwn3Dz3SDJxyiyPwkJetMcp3Go5Hg4mRpPi1D",
  "key6": "2hdNVWF6kMY3TjCAsJjoRWpQFyoajhwwsMJqp1m9qkUfhsgH3crGtNZDVefAeq5arEXSHkr6VvMLVwam2BX4pZaF",
  "key7": "2gtDq2A7UF9KDopSRHXq3mMcj96aCBo5udbpPruex45DMwFDuipSpyy8HwEygSfcxQLyku9Ms5G6EXzoRXGTQ46C",
  "key8": "3CrSpjx4izoot1xvdh7xFAmhGzsrThGQRQGcvocYM4McAL6T5iyUr1wCkAByRC7R6Co5vusHVNacq4W23gJvwFWe",
  "key9": "2Y8zND3zHMipPVGaXSNqm63LBzhv1UXj7Q3J6EcqHUarfgwzUEuieRcXYFXvz9EGtYWbKywzSTKuSnn155CWwEZm",
  "key10": "3UPGiMPKPrB1inwiKkhVBQmZjYkRcVsKErrSCb9vQgJoyjuGcm9qPsegxj75RiJ6MK1JPsBSRJu73X6gT1dzjWy6",
  "key11": "3oezVA3dfmnEg3DPtzXtDvb2Xu8d1FgSrntyqx6CZCwx3B8HPUxRAFJLehrvKDxoUM9whSLRo3C42N2KU9sKPjsE",
  "key12": "3hWzXhzHbLAbkHNWY9tpzfSGMtQSyi8jxQQx8qAHS9wiFsMZvkK3JPJRQze8ycLXTAiGmnFKWezmpBUAxksE4xsD",
  "key13": "fpKSQWjFX2fdv9feXp8xBy9sSk3ZJRpnji6jv7o9bMy7YYcuU2pK24MXbJoYfnBVXCyvyGsRMMK2zAmHV1wcJgu",
  "key14": "2TMcTKB5ymij6jdCg3LGVEWf7MCHcaNPoyzAUZ9shXW79qd2MtivkLuLRaMR2jvd25rA9B5W8ze1Ug4L2xQ33XXJ",
  "key15": "4N7AwbBhJhYL6CUUpCbe7aHgHKfiGqRKxpeRYHePLuNJtXEbihoDdYLHTaiMjjzdTu1UvkeobfWsMTJK27jCdzWA",
  "key16": "2UZ2fqjQMoNk3ZnZo2q9Rwwoz4kSLg2MtZPW5bsrB75Xcu3uwgrn3nnsDgf9Hb9gmAH5C4b7kUq3CGWeFYWBB2XN",
  "key17": "43rRKpiPgmuAYGYZGPz3CQ9mX2NvPgpuCdpdcgMTKf1BJ3vhCyk3mpRpRYYpoiEqAVoKs7JRgkn8a4n5jQQMoffA",
  "key18": "2fM2VbrgQEBHwUxY4YhdmhDqhHZV8EGKe6BzkHX2VAgkK3epFsWQir2uKh8mT54P6WbY4CBBXZXUdBBDHQcBK3Qa",
  "key19": "487Usr8yZ6UPohDn2tB2VDjHtqjZEJfg1B7CMT7MVWXDAWEPhjyfLyCS4z8Yyj2vcyXPk8mpBGrYVG1sGdeX3QcY",
  "key20": "4t5bVuiHqucbD2qVDgThhAvWUXP4XnMijVF2Bnq83iuXUWyQmVtdwyYbtZ8K4h3q6CPVAMxYXrNAWiLmZ52dNEPm",
  "key21": "4gVVYP71d6T6Wc6VxpbypUv8iQiUh6sFDHzsTMNwoZoF7tGoDxsQwPURab2taRe3hntBxj4rBNSE7YfkfWrsW35q",
  "key22": "38rdCTQNeHMRUobfjrhn4nuJfvz7xz6pXK6or7bBEoQ1YE1Eg7baBqR86DFYExRyeWyFywNC9h2MN7sPQmjvgHX2",
  "key23": "Zhpx5HGb1iP6HnWyPqcwDeRzCpg64xgGwNVX6W8bPkHcMejVp6zYhAwYKPJ9Sf18ZaXp2gKiTbSrmQL4SVfYNtr",
  "key24": "4MnTqPmAUTdWzjqAYFim1b5HiUsZkmXoUu7f5bicXGtTWewa7EMYiHoUbvNiod9WSAPzZteypnzLG8Fo95pYjwwr",
  "key25": "5KKDjEhcRLVzFNe6D9isHamTNK12dez7gRdhWrZWsrcz7qtX19cSp28PixRz4LZZBVt2b2zSXE8uua27eiuYivze",
  "key26": "45YJzLHbrA5tMTcjUU7eZFY5oNGBvQPwYop2Vu4w5Qv5hnwhTAbTTsxMsku4QFw3cegzRzULVoo7aotSRTzgGwFb",
  "key27": "4YP3soVxpFRBJuxxHCHzuGcHpkPBhFpDhhj88LEu4TRsLfUzaMaAV5LV9Mxrgw5kREuvYvryZb7GtQnjzYUr1RDw",
  "key28": "3BgmwbHNgTVpDchuH2Gq4pKf1J4Y8q6Qg59SgD2mLcf9y8bHQPAYzjSuzBcVcRwbQ6jPsZToobctm8MyauojAzMh",
  "key29": "5JFMy5wTcy8XscQhW7akfvNy2hBD3sVqkEH1QCKgwvnFvx9agNFbju94QQ1W2RgzK3YpMbcdNGFQAW88PEMae6Ca",
  "key30": "2p3Q9ctNS6VJPB8i8wArPNcZH73ohhVjh3Ut6PzDMajcGg8donbpvRxvQi6SP5Guqha7wyMAjNzW1WWDCZRfnMJk",
  "key31": "42YxQsHmTw3v525yRVDbD3jWh1R1HQ48YEuhrs6APuBKLWcUBdi7XauKnsyJzuCSNiDuFQFgWDBqgPsMs2hPuxEi",
  "key32": "2bk1qv9aFkVFDfXt8JVRaNcbU36sKCZKoy8qvaQwhRUzXMSrt118TYB2R4UQCDNURvA5JpvKKYZCm8tfbLJkW3UW",
  "key33": "EVVMez5gFGdQhUmC1Wu1UzcPMkJJAEyxVUdcvGALFQcfk4RwgNGQzVXQg6FHYsDcCZSFY7X2ATvqGVcgrspQALk",
  "key34": "2em7fXYKhopHXTYfDycoBEiRY5eFYg9VZAaYKGNPxvKsdhQVrFm5UiF5sWwK2JyigDUdwrrJWC7va9gHN4MahPLB",
  "key35": "5z5KzJ2UDW1Y9Su29teYUyW8kgW4cBPwd2zLERWKyWDWTqrzc67CwUK8uUKMF9ipKeFQBzP76VUJL1SJTodEFmjH",
  "key36": "Di1KPegMtR52S1VMSYxXxzFE6vzbuBtSoRUZ2f5NvbF7gMk27NvPcjXJNjFKY11hHBY58AfTbgWZj1RCWRiAxLu",
  "key37": "4QKWgE3MUTBaWcNU11PW7Jq8SreZ9QuHVFyxZJW4YaJRa7baADzPfLR9Po6VwKHjVa6rarPWQ2kwctkvLoDcybnk",
  "key38": "5i8KjsVxNWJcTNH3mX9GZvuak4PzSdvDZd7Fcyawhb7uFNKXektHZBwnWSfLNYzpnnpWWpX1nts1kFPcuP9WCfam",
  "key39": "5grUg8GcKYFdLTLrYFMK4vSoQTaNayMhkNuHED53R4Vcarz4PY2TE89YgNhs9r8P8DTDRcSRAXWSBL5aRgnz7QaM",
  "key40": "2rU2hzeowBJtkKG4AJ24w9FeVhdp9sEDZfHf3K9CfLrpYonjr94gUyHt9FmE3VoxGjKGxp4ZUvT7rmRgajAV9D7s",
  "key41": "66E9tS9VUKQP2bFtiXtx6bTMpaqPbsPKercqK6yNhN2HLLwbKemuKVWq4emhMe43AtyzoC2pgm649EKWvVzDzGeH",
  "key42": "66mZbW8bFqDx5FXPBtC49kLL3i7yygZQdebZbuHWFxcAjNXk6dgxiVExmsRL9SzZ97wRb231NabDNV7CheDzCsc8",
  "key43": "61o9vgxzvx9yLk6NTWj5zJ2pqxPr7AAQZjgUcPa1jFBwU11s7FRJjhK8TyHeQsgE3ERwfrUJDV4PVdrgyWBzA956",
  "key44": "4GJ4m1JP99CQDwPPJb1M31F7XAPmyacFKybfHNwnrDMF54UUuqH1CAtqKFFYnCqhKRLWDZUsTo5PSEAQ8X8xrF6L",
  "key45": "5KBABVyZ9yyotrg8EXeSyTgUB2mPtixuUPUhdYAxLgdYwqpWvhvUxgHTZf36shDD6xV9NuKJ1SUCjZ7vTb4PYx1p",
  "key46": "3ZBHJgzVkiEFf5mGM7XPbVBpMhyygoF7wFuq4mSMDDhzG78qL5MRejxsuFNVZxDiHqkz4EZ3zKycypeBKwriZbX8",
  "key47": "5YcJx63o3wSK6yp3Vxb3j12P4qhicVeZcqKkni872rxrYEZuKyyHoMKr8kbhXn9u17NsjysfCfScRLcNWp4cWTuq",
  "key48": "beQ7Q5HbWp26zpYrKDvscfTTBKJxnGwixkHKgwFFfjhDdQPSTpiRCyJQnepngDNYFmYyhNkj68B8pRHRJrHP4ne",
  "key49": "31EsFm4NDA3h6jJDM118gc2QrKZxMmmgY5ZXTxjcezW6oZ6DKfsHRW1X5XJbuj8tPRqKfRuESFED9ceJ2K2f3AmX"
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
