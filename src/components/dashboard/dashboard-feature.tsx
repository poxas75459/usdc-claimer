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
    "3Bjgdak7DxKro4hU8RD33SXaoCZMKJT4qTLSqxgEvtTntD1uH2FhE8vHEwFBqc1yoCWPbNoptMqBX8qFfpkLLx6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RmeAqH1WJNHZvWtWSbpEikR9qzmz7oEqHsvrHi6HRCCp9m8AJJP4fv29G7vHyo31LMuzkfteVU69bwNqZishKk5",
  "key1": "31H7d4wxqwSmpQNJ8x3c2M95pidAE92QqWcyLw1xEyvE17TmNbo7TR1LDqJaUgBgJrzAUaiRN9PwP4Rw2Z82Se1g",
  "key2": "2MjNTmYErAK9XhQnXB6QbNhdLwbVkck2E5kV8QG6vAbbhRAqQizruUGtiRyphHAmhGSRy4rbTHnGaHmJLV4nkHH2",
  "key3": "4au4KCdPg9VPP4VdFCN8aRP47P95dM27ELwEwDMHwwhu6LT5x6d8esk5N6QMa747FUe3Qo6k7fbt9q2PzD85Aha9",
  "key4": "2HH8K76qgQCiXq8DSTkKTyVjmx8bQwmrk1HoL1TGfq9WJU2MYRQXoeaYpMyRXWbAgyoQDnwpVUSxoGmkHZeSKiWS",
  "key5": "3NsJpdBi1GU2FdvjPvTaVN5m6pp8wyJ4JrJMiYfnTPWaT2pvBa78btocRAveLED5WqLBEhdrL4RGRaq7LaLUm769",
  "key6": "p6WxiqyivRN1AgMY9gXAABqK4k4e4G4vaMcmWvY7FtRioxqHLfWRYYYxupw2ctadCSL8gFRpbbyhWQ2UCfxcjY8",
  "key7": "4YxdLx9gWdKaqMTPV3kZBCGRUA2MnfSUJ6jjim8gArmKGKEqLUZRehndgxHes61g1oXmsB3hHTUrBQEyeSQ1dvD1",
  "key8": "4WZ3aQS6Rg9v6odfT6o1EwGDxBPGNUka3eYufgKV3dm3FLQ2hB3We8BibyK1wWNJSMoD2KumgiEfCwtHPCmNNtKf",
  "key9": "2H6g7JSFAYtMZi8RudvugX2qc7CcMFeULG9pS1hvrrvnzq2etMmU4NWw5q1KyShBFd8Q9XaguvQjtv4VSMKXDZ76",
  "key10": "rgK9oycaDttJYV1yXkZDh2NNdtF62eUeinK8CL7iQWE1PEUsfiJhL88jC1SjrPBBkQSbvpwxX1MXyYcX9Q36Vpf",
  "key11": "3iKc8XpXfzQw5mvZcUURBiGWCBojjSi5ZfzDtxueBrsQbKQMwJgx67hqEtU4KhN6cKSLGj5LxM32FZ8fvNpUbsRK",
  "key12": "38Bsy5NyKHmcfipnLprUZhQ2zooC6M53hQ6SpDrEiQDDirYHT3GekNKBytbEBv5BGfCRnZaogZmeVMH6x3EJR4dt",
  "key13": "4SKexv5HKNrDH6nbcCQqVTmBQxcKKGnaMKHTtytQ1XFBySKxAtwoKNDtG7Yvk3XgGCasEkcZEywMbju6aH33U5dd",
  "key14": "4tBkgVin3j4QNgRa6Sw6vFj4Gd5wUZADUAKdaHMVZME3LmYtLuEquc2ZPCuywG392iwnZvxXeWYCCrSjibNYiEKu",
  "key15": "3vpMDqTthjok4fX4bCJJeTj8uEJ44EY8eEHG68u8cAsWiZXuQvU231SqcS6hgmBnLV9nDaiQKHdwSeRmer1W1jaV",
  "key16": "2PNib2KnZMDNSy9vadu9Qy3HP3ZKU7SFm4NiyKSafBHDvURzz2VU986n3SbTZ7U6muyYTv5WnJ1BmvGeZTeoeQrY",
  "key17": "4x1avLZtwZakk9n9k5q74poJDKWaJbfrb8y7pAZ9fAYdXMrbUv8cD79dzFo7Sqb8h1xzY4WwKirbYGWCd53FcM4K",
  "key18": "2DnwM947ACF4Zh6ymcKVbgYEMYiZZhrNtEUNF9z64szdHkwSENPsDnkofnpz5mvDuDWN6NmyoNge8a5WrDEVeptZ",
  "key19": "5Ym8aky91GMjWXxLrGj6ANYLdmKHQLSRVXzSG4vpz179jhgwsBSd4rddqqzz88QhwbCfHz7aGR7ZYxgumoF4LdP3",
  "key20": "WZ9BjAcL5rzhssA3Nb7qHdtbiV28WCUmCmLyn5UK8TMnxzpmwgDGCh2SMkD1y8o9Yq6hCUg4idtuLfWHQSTUG65",
  "key21": "2ZuNgdPVzPnJkiczJhKUxtUSxCrKdUZba3ewswDwjBVH6yjQgjDx9rGWYQRdYwq8Uj3kJBSoiB6fU5JgeRoGDjW2",
  "key22": "3apWsRnV9hHTL8HrLVokVZr45U7x9eBy77WKGsdUCyGoKtogVwbuB5ggBwB6DvtsfnyFn1gdMoUpWGWD5mD29aer",
  "key23": "3wG456Ea7pdfCUMfNFWHGNqjA8dTEseUonCRZP8mjEj5o41A75NZZ9jz7V7QPtHUMnLUES6a5KFTHx4fZd7ZvMqk",
  "key24": "48Xo6wnmeqt2vi9CWE4oSZ1abxvP8gBRbnn89BHpgsgt2rRqbpc3DBt4os91BHqNk4zeiDiFNKM6txyTjpLv27Wj",
  "key25": "595zVCqo53xEbPovyPgQg3JBQfCbBbUrvWrrXCGgfBsQQjAMA4VhRHtaoi9mJBJ13XmpCfCx9SduwZp319Yiu8ys",
  "key26": "4UgwqsMwnVEyj9ssKzVkUnaRPSACJZwQ7maCifdP8DJJta6HCWXBQXAjfTFtLykGAcZLj8nPuEyhRGkzmsP1MLoG",
  "key27": "2qb9223fwQPeaHbczfxw8M6UUwBoQYG64uozqU8PkioZzuEA4gmu6e2mj3wfafaiXZtiAWNbmhm7Mnuh3qHgnfqP",
  "key28": "21hnoR2zTDvwazMnbQghEBisBNEkMb6fkspVjTASS5RVjtdzz9dpBgVyiQRVQfzYNXfSqyt4AktsoiFDPgb4TMqD",
  "key29": "2KYam14yfXVY7ddcX4cp7WqQTpphMMWtCdqTdo49iWzzQUpGaDrVsoM9QuxGDnCDMVgiweTU1Q6TNbKhti3MWyNx",
  "key30": "3soREEZSXNSHBaK2Cy38ieqiHioriTztk6v8uwsDmqdS4SzzqsbgBGS2x8DcCMX9JcoVftP6L5h9bYyrotdffz7a",
  "key31": "62Va9rLWuAdR7BKx7bBLiVnLxaYaRJvCmvHFx1AfWqw8LYX4kqPEQjtT2W4j7HLCByAuHkqa2kgQYESUvHTmGc9k",
  "key32": "37ibmBCMAWhZcEZvbRaioqgMrDKzp8Rx4WyQ5mN9aFGdEZrE9o7k4bx9oikquKintrCGLTEMH5aYKtGaXa8aJgQU",
  "key33": "fe4Cc59itGoNPXYwCAvGMG2TpgdUNFWjHGdTGXzdcUengzTqhq4P7kEhnsPGA7xqEYPNg61keKHEmnTZtdoSZfF",
  "key34": "WiaBHH4uXHHqkmEeFmf5swXzEabyp7uKJfcs1kSxDEYpMTZKd9nm4vCj77gzyzFPdPupzFCU4MSw6gKmYFQwFG7",
  "key35": "5Wg17xkRojaRzWCXdijxqK7N13GpHxUqmpW9YyU8kBrYt89JaYN8kd59sGJbdk2nvYcGnWtcyKwR1J16WMFPbRrm",
  "key36": "5nW5zZnnonJyGJ8MPY9yDC1DNs21BLiuUBvfXnCct9J5p95ZGM3JeMK39RKAKeG5hWRpHasTCiFmDgw55TjPi2gs",
  "key37": "W5u7nyTS19DxGZ4EUHGVuD881PJM1y8ETV2Z4t15CqaGF7Kp97Cq6ZVtGgrn3kjMVNahcfagMJPD6pqkr12TCJV",
  "key38": "4SX5SKS1KeX2QstPdfxJr7JzUo7V1WLHuS5irDEn6PRqGPsjZ35FR3JK7jnvm9zdfZ1VRm3tw5EGJJ72MfwgJ1Uz"
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
