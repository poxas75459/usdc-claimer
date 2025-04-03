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
    "4HTdh9cXbP9RYP5jLdKZ47pzuiRxie2PELAgkPyEBA1LY9fMyoQJadpBohqkvnT1qjKdFZEXQSWKAop998aKY2HG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "445c8L8osbwAx6fNiRVGZ1vYh87NANgcmty1jDwfSveapGsRFDuX2LFoTWoa1JtPf9KU7sg7JUCVViwfWQftN9Z6",
  "key1": "4GfcdmZMxEYn1qz4grHUUxiHbm329yzUQhFvN5EtsT5RLZDASNpBfc6Zk5nbtXb9Nu4iUGo4C25ykcxqiCawmxFi",
  "key2": "35q5zjU3f8wAAMQXpx3MAZKgVf9pJDa2cdamcEb1EgZK4cjq28m5BW6u1b3R9nTQTbJyHLELHzChrvKCyi3Yp3kP",
  "key3": "anEhLYX8wWRAnb1oSK7TKRUE27sdeaq3WorEtVV3UkXc1M11dL1htwB395x9gwBYJ3LTEYL9esgGscVj2QBp4cS",
  "key4": "34CoTzPmSfrpN7NToibuBk5ozwrwFTNdzVm8EsyL1HvWrswnCsHbyufHDRhitgiYQu1E5oEkACzq7dD1TtFvwzbg",
  "key5": "3VsVbmwFDbumxtsA8uxSDtCqRgzR1wvFUpbYSm1XkNogXXh7nBCnp7Vd8bcwExVTC2csiSCg1p7Dh83Lj4E6c9mw",
  "key6": "5s6o7QuaxhTeu5ojyf5XbCtFgELJ4bidKsMaHZ58jC33v7kQeJpMRFXfHY255A9Rrii4WiaRFFgQZ9rBxj5hSVzq",
  "key7": "KSFABgUmBnqgBEfrapC86Qu2Uff1uPTwYgiZFy7yeXKpaZ1HgBcNwuW3RVbXtcAQNDL9FpKwYfHDQygyh9B7hLq",
  "key8": "26LPyLxJSoGaVVURxaxYMxvqkySTU8Zbd4TQi3NJorFCBkc84cjYjJyQJTDFaac9NsZLbQyh1Rb2mqHnb8AtHtRb",
  "key9": "55CqDDQ9vkjve86DgqeW1YWs8hyiDjhzNvHESF3ZgmBEbo8nncRDxX6zcxut2jKmWrutpeU9iRG6sGHh8iKqYwz1",
  "key10": "2UJV76djhqpLqVyyVCvurA6KUKAYh7SFBgvfGh1TZQuRbLJWti6snT6q7XQZPHc94mFFugxXbEQfAKAhzEMjvfiF",
  "key11": "3zAC5KDmyXSxoxFjRMPMMR1GCVM1TE6NXbdRmxEk4eoNVLkhugc7ySEFCmU8oK7h4xJsNiUsUu8KFJ5cYYiFw1YD",
  "key12": "5taGp54K2rwrYTH2PrPcbxsdXm3AEwVVWRXJK8xqN6DtfnsreJgHmbUghVPdUuqXRLtG9C5Dw2TTHjxHNvdodunQ",
  "key13": "3CL8SovK8v9uoFCFPFiyLgtxwrUT93ogn91DZUkszfqSz2iYb48frTaF5XNkLPn88kKugpcADf3m6Zoscs65NWwy",
  "key14": "5rjcNityn5gjoRdGKnMDp8CaLZFRNB92oYt22Dgpf66dKFc7ZtvVmMGpwiQMVd4mBZB5pgx4xd2T9ScdmXkGAXut",
  "key15": "4JCYvybjboZXKmCScyEQ59M6GCWPQFt4MZTXoEU894S4NLxgesE76RWdZUMo8kvudUfEvCinG9vpZtNdSERRKN4r",
  "key16": "zy9ovmzRiPWkKUy3TXewsh3eFkqRRrsuRkLv4T4umku1sM3a4DZeyEHELrVae5ATXEGpPHAikbFknEvo6WtBvyk",
  "key17": "5Uezcqw6n8pkgM2Edt793rA4CV1Pj64jWi2rx4kfXM5j3F9ApnyKDa9HeAnaLGHFJeWc4qTjvMTaFrWVH6SG1dYr",
  "key18": "63CXoMdqTVnsCKndUtKHCEREraHHmvzpkLkVkbcs1Ke4dn6hoivB4sQmSLJBy56uBZXniTobtEqxzJQM8YGmvG4f",
  "key19": "21R6dWj1Yong3HCSEQjsyZapyBrQq23qKWpxiPneRTe7YzU16UZF4Q9v3jZCM8K6vkq2E95qbT1dAqpkNBeuZB7V",
  "key20": "ohEekifHiuLfd1Us98nKPF4j5JLGmEBmUG66JooPQE2das1uoFrZE3N4CQhjqCMgxr49Mb5oDLZ4CQ8wtnJGv4b",
  "key21": "4QinCmoxBGYRLNzFDbRxFiKRcVGkKzkcQbYjrDNoXaRiwyJVqqotDognEpVZNK2RV8cWS23GzAo7dvjV1yJxo7GG",
  "key22": "2HvycYCz8ABiXsFyYsHRHB8LLkEVzXfpikS1MCYN8AekL4vxsoujHyeRd4AhGRGGxXefVeV62D1cowoKsUDwwvWh",
  "key23": "55v7bKEGGKELWPaL3aR4iLQvg5CmFByFgc1qkkqJNSP2pARWrKwh8k6QUk2Sv6hsnNiYbfPpVzL51bEaVeeNMiPB",
  "key24": "4dt3xqBsxX2kMDmGpwFtPdhQ22gbvyiCFP8V8swHqLyB3J3iro26Gs2KNWKoemJ82xRX9MDPYWrvMiT87V3wNmhk",
  "key25": "5sFxQ9RfMT8YiMQSzpGpzQs6zV8HuJKCoC2cFgEC7EkdPXW9oGCSv776cRthx7fn6TxeXfhFN3tTY6DH4jNuyUNU",
  "key26": "4X2B6RnmpF7vCm28XYAGeEPTW8gtdjydHRTwp5GjAruesZfW5QTvuN4SfT8GsSKahB9PgaRJ1xPoXpth8uXDo59f",
  "key27": "YRLQgb7VfRKpAbak1nqig1WsZs9ZD1DnCGiZwbWytzrpQmNMk6fLTTSnAFA8izcnJeoyjYKawoqAsJpT5Re9Emg",
  "key28": "2GsbBzAWSuNsfv58o7Y8WvBh497Ls4ETE6c6Uq9aPFGSpgtyVpKg7KhgwBYaTmzvv6nfhC7t4dq5kryexLz9ZRuW",
  "key29": "52reZgHH3yUJvZwfvcJLmwuaipDDivdTmaS3HohMcLAjrASq2FsPWWoggWTLL46Wsar9huELatZdLgyirFM1qgBT",
  "key30": "4YZoFwpX7j2tARSRtHQXcwkdkgT2AEncni2rVzye4UpoNKrW5xS2sXttoF2bSFDuwLEyWahEbmW3f3kJpK5b9bjP",
  "key31": "5vAWTpEJ4YbiS1y8c3bfKVTcFQ3w98mj82XS792PiVxWiut7ZxgyRBi3iopSdqyXYzfF7WhRKu99JYw59reWketz",
  "key32": "4aSSKJTrsRkqFmnAmAVujTqibUt6U1yCnyGYVkdQj83Bmrjmc6CX5kRXBhfpXq6293hkAewSFHm3vyiAGyJ68rmt",
  "key33": "5jWLJZmKzfd2RGTxLBHYyCiGy4MxM4pSLEt6uSLFEUjL8dakfiHbw4kzSLUXcZ5gn541cmind9q2veij1hAH5GvS",
  "key34": "bvY4egu6m8JFUTkFEZN64gPvvfb483jDY54TrhL22vpkBpdFxFQYMLkZa8FddSdwbASM6Yc1eY5YtAfx6CuLBTt",
  "key35": "4f7C2pLUZdTt1GU1eD16cZppRbidyVsveyKniE5hCYkxyc3vWaQTyojnyZ3NgE879815N9KQGUGFJMppZmSH56Aj",
  "key36": "5bzq9NugnjPqt2nf2SJYLQEf9cGFsonxzsJVew2QTpjTSp2S1AX97Y8gA7dfzzts5QSYoRvigWLJpA8vLPtzFa5k",
  "key37": "4QMuK6cMYgcVzJLMM4cGyRNLKb6HZxQ6Jz9iDTmq5heGtaxQLq4XPUY5TFQmN3BHadmJQykfWynQTXZ7Hv997Ck2",
  "key38": "WVoveAoYEtEuhphLMegL63e5uEygNk27reCX6penSqJBb6WKp3A2fRDRca9GzePUboFny5TEFsUipebeTqg7Cud",
  "key39": "3u7p4U3t8zktX2tMBmRBjTc2XGMrh2xTCYWNcHDp3YBMtD7Pi8GYsHUTvJ1Q3KoKo85h4pJ3AZ1epsnMRdanaTEP",
  "key40": "kpxPvK7WwHubQdsJToN4u7NehDFPc7Wgmp4D3SkdeDU7Bf5DhTKGJcMmHcW413kbedUxCc6uyfAjoXeMSb7D1U3",
  "key41": "4d6iti2koAuAYsWiwXsgXHnKkZ3sbtTPGJzsT3zATPqXimiWrqvW41R43X25mpJjshB899LjXzR9QAg1YoaoEKd7",
  "key42": "47pqdzUGogWE6ZR6TyCFe69JrcfZhBN9SHJBhNvaJd5DoxCR7Yxmnw7sh7LJTR4QkaBcaSe71ybdMjHWZPvt8CUS",
  "key43": "4aobkcWVDDa14j5WoqEoM56y9Rf6wgGbbM9QSnsfPwEAKuz2L49XaTz77QvZoyPhV1QrXa5SCDVcVuw7NKVctjXT",
  "key44": "5N8S7a1iVn8V9QfVxtBTa1fxxVFZzS5q2nnMsTQrrJy2BrhzmHzzqKY31uSYUqH3YV4fn3Wi9bYSfCmypL2bGr2E",
  "key45": "2oyfkPe6S3k9rjq3rDtKBxJYkipwrEGD4zxrAgxnDtJJZKmiod9BdfjfME7kco9nad1z3PqB9oExYcsZBAo9hRBk",
  "key46": "4L5X5CHF7rHG4MCVVf5CNoiiJGt9mLoRSENGH8VrbsgA9L1QPTVNPwRn8VYSxLt9sMNAik1aBT1Gjgdi9Ber73ND",
  "key47": "4gspAERf9Zd3mPNW1KTFmdUBxhQWSJjKYEgCVLdQYFfq3zD2nY2x6mcp6c5Cb7erbkdtK3F5eSBsUDZBbScDRs5k"
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
