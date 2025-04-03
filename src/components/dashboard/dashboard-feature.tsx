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
    "5p75tEDnNzYu7CR4CqqFr7Hh9qsjZ338yksN7sipQpLh373MMP8xDg4w2Rc7r5w9KsFwYSF8Qx1TK4kSgrDrWJkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uFmumZKtPMBb3sYv2U9LQrVfwTpVBaJGKNEENff4bwS7iVRFqfbh3tjM1kzHBboAtHVGc5QB1TaxzqWBGcXf5NW",
  "key1": "5EJak2nps8m3G2cQT3fqMrDS9Uk9Cc1FJQwmR7ubz9vBUtgXzuQzbrdAg87M1SK4U6YQJzCU2PvkZP5tJ6zfDzUS",
  "key2": "2mamv5AgTDtZ3oL1QpcF7JokkT7Td3aEDkeZXYB5ezVsjGy4azjup5wV26Z5onLqnEnk9JcEXZvSLjMLZ8ZUYHda",
  "key3": "4eUABTPwg3DjkUinwfduXec1bfuMysDyhb7nHYYGaWHfFSQkchjz71bAyMESqfT1ZfxN7rHaivLa3dTZpyJzJLRm",
  "key4": "2fCDg4pyA9XkKLv1EsY65aCLeF4dBGaFKiiznQE1Eco3zAfsVu9jfeRQPfFtyMt9QJfYSVoc8u7ZFxjNT44SAi42",
  "key5": "35Z1BKfnhNBTMB6V3Z6B4Yeh4V8UMn1J9qNnzGuLgt5rdqRcbUivAjxQz9VSn8pNYf6ToNta6wsYb6LFWXqYDxHS",
  "key6": "655PrgDMEYj3gmtVcEUfiPNk52Em2SywKo6ngQwA4mWmR1es6buZECRpVE5WAxXNRAmRdX9QyB7LxvU3qP3PYYhm",
  "key7": "5N4ndaRJni85kxp9hQ6mK3HxdD2zNwLZQLMrRN8mw5S42WmDcpT188o3mYSoHhSmp7oGqQG8r9oDSjQ4QnUAASEX",
  "key8": "wyjzf8aD1at3C1dBqGQRMUbXJDFuaA7vqVD5VE4aiPbTfHLV1CEgNfCjAjABNaweJ4n5DoocRFhqjqWHhMM4Kso",
  "key9": "o7ZwD5mnLgBMV4DnuYtd7kQEjQiAxbpnieAUKRWFZkQrXCY3yNrUFpG3JyatMvNkTkQud8ZsXfTVwqRjXWH4fyR",
  "key10": "5J5RUVKqLQfSukNeCxj2GqxeZKCmm2U5xaS61D2dxA5bFEEzWxCANSAwHuTBEVYEishSpfeogkLPbbr21BD74VTf",
  "key11": "nArCy2r2Mx7DCpBh7Xxid4T11vjwyW1BTrVo5CXydsvhcVvTWfnm1nQu392DqYnPRyyzk1Y3D7Bb5QTnFyuLwvp",
  "key12": "21SNEh4WVm3VT15C1Muj9Q5NT7GLhDeAdXq7ApQJXaUQsfwMEhA2fpyxG8DdVaHTduQd6Ei12bLtHJXRQxVe4FmN",
  "key13": "4AphW1DUn1wi3KRYcuRm78iqYxiA2WNhT5mkEZ3SqGoAt6WxDvLY89qhgFybuymLhxvTfisTcWW7MCKnz8cPsrqq",
  "key14": "5MQtRUfQAJTDPGpkvW3gSvwKT5etjYw7rHSdsaVDfGntefnK2L3oZ4YRtrRPMyGVYjhB3sBV49SszHi5LpKyHhMy",
  "key15": "oUHGcwKHvcenfqKa6CUWMucsXzxCHi1CS6tXHLMX9T1EiHfECAafFyFBirnZYQCGFWcvQ8D5w6T2iBoPTVs1rqU",
  "key16": "nxVBSbRJzTWRyNCcv2JEgbCBkTpEaEPuBi4DKvvZC3ade3CnsLDxvJRB9UhmJCbtUau4KV1zvwRaihEBcwd7Ujn",
  "key17": "3eeyeJaLqyVTnihp6rDJWsttzLrRZZRs29KbbLuJ7qJFGDetKR1kfhX949Axio9X9X8N138g57yDbJghSySKULhF",
  "key18": "5WFkuXVGAK275ZQ3VJtf8c86Sv1LYhcEg1Mnqiee2hmmnm9EMFCxsFPgwFdwEePDmbCixAQVY7cae8yK3jmS3QeJ",
  "key19": "3Po7Q6zYsJyrNdxbrGPpzvmMvEELxy9jujLkoU9kjSvCw4FPamAeyjrXKXKzdBpLLTXr6wyki9jNhgLk77exUntB",
  "key20": "5SvsSqYRWdiRxSE1oPSrZbr8dSLP5u5ZpCeeu2WECqwETv1StnJWvVftUDknBfFubgzv2fmrPzySqW8CgksRGCWp",
  "key21": "4jpcV4GZ2yKWYbfT4PBcPDi89NqwLMKWfoe3dGjS59MLjV7WpugLdEYJBHW6y2hdzC11B1KnWbXT1DWkEozBkYc5",
  "key22": "3etko3QoPQ65WumhjuhnRGtXykxLcXir5YusrK6HSjxLNjAUJPTFPSn3mz2ExemKpUpKAbiCYiiLp55h8t4kawD7",
  "key23": "43qhswkFy4gxVV2jwNEJ4JTt6G78Kzn7hjtZyAtnqXee9s6G8ztT8Tt1XzpTpoFA9xkd64kNJ7tuESs7R3E6RVyL",
  "key24": "ChxhLT4NQqLuydFGr74uNHdxGSwYhYvnZs3vQCYUCrgNvGdXurPAk11NyyJvd93MDcV7MSZ4nFh3EU29Pwh9NZ1",
  "key25": "Wvc6QntYNfKCx4fQvBsLXcE3qNrW7Kmayg4nha4zTu6tM47zyJkp5rgUpvqQcPiZwQsWy1QSdYJkrhzRpavSSGj",
  "key26": "2CTGgkaWVbdmsPnKy3PZ1MB4MTYRXCWEKB9G9fZvC9SPxHtPuHJ9Wutsm1YrgUKzq5CHBnVp5EZ2Gu6QCSSgv6Tw",
  "key27": "4JTN575MaXmurCCwsbM3mQ2htjFvYf2H8qY7bWnDS9NGS6UNxzckic5GyPSE6QX2R1sK7XqJjSL4g8fgFYRVa4Sd",
  "key28": "bM8hqLPzK58xugjynRkmngtJQYAob9Z81iZgxpvsPeNNHZaiVDwY1nXThvzZ7k2NyGqgdNk5LnBYnQGv4LFh5pm",
  "key29": "CpfRYWqGwkq1unMPKyjCzT6mAMWhk3NmFNeLM7e4quTMnUiY3s2hdDeKToZFkrXBWvwrVmH7giLStuigQWuryqc",
  "key30": "5oX6E2pQHjyVooABJ39mkCTgSTh1zdVGZxDJCHX1K31brtc63PMBs12b38VzBCYXCcWiy6n9nkKbJgR9QdZ7zvHk",
  "key31": "jDBAk2AumPYdU74QrEDsbEX64savdT8XbdmDVmgvv47ahUZdzB3nztoJRsRPj4gx4azSxtDmUdWtrYbN1eVQAb2",
  "key32": "4HS33qmN3fnXRZgFQhM4TeigEasbdY3trwZ4SABSP9ET4QwLDyD6jZi4NWkEAvFiLJ3LkLP6fXhustGXxtxWsM2G",
  "key33": "2hukTbj55zibFtvARVWAbqqxa2b6Daebkt53YHtbnovSgHLf5CnRkgjpnmw72bndMfp13vhbUgYMyp2zoZ6hKXUk",
  "key34": "5tWVmJAUgZH4oMh1NFbMYhd1s48wZ4ZSoJ6k99AcbNgkmMz8ookumaXxPG3Ku3aUoqUwj3NaZDA3uNhEuqMXdDcp",
  "key35": "3D81bMriQbTn344zPwemdbn1pv3nhmNuR5cuirJg8UWEkKs3RSmXd4hr3JPBuG9bAngom2BN1nmhMovNM6x67mwu",
  "key36": "4CTCktSnmpYypoMK2FyDALBa1qZqS77fJ9qse3oizy8Tr4JUtgxoFYMBK5MiiLFMPgzYB7myfqPwCd39tLGzQUQx",
  "key37": "2DEnPggsSwMfvqPCU1UAYps2B7S7tLpE2gLznwEoCthFwJM5tQcJ7WGRErk3bDtMsQMGmTpLQcGKYpoJPsKStNzM",
  "key38": "4T5MHCEhgyHm6p1iSNDGWjsJELVqXwjTfXdW35dkBaAvtgNcLVmr3AHWKtBu9jGBde7pCy8V1ECwApiNDaLmFx26",
  "key39": "2ifvSPFqYjzp4StqgTMNJcfwj7vnG19BBjQ1zaWfFKjTx3gZBypgiX5cqvnua9RnRpLWP2DVqGSYDoPZsJE5EbVm",
  "key40": "2cZwbk68c8X2LaauDdkLpR5m2qWDwAcKWhUkGQ8UA7tHX6JP1BLtGXjhqVfS4oNRmvWDyC3YJ77G8AwE2Bue8o6f",
  "key41": "3ec521nVeUr4zGDLZaSPidCTrQ1GpztfHGCsCHr9S51DhBgU6m72UpRkzm2mHKmkuXiQCRsJymfsuZzeeGW4APL2",
  "key42": "27SEns6tZ3JBdJgCcEiTUkqyeP3xZ63UW7a6nbhB1q7FyaDgUkRPptSvGcBPmvNMkRPCN4Tix33PfoDJB6jyorAi",
  "key43": "4Q4dv4WrNFF6vQErzb8FHtPFhR92MCYhwkvpUJ1G5WfHAjWj8VSNZVrgNzLwSfpp2iDbCRQaDcxbWsweaGH4nZFK",
  "key44": "4MVvtuJmxWH3i8KmKVshwuyuHHC8WRZA22E2jzRxyK7PNnbWYDrryKDu81u45n8VmG4f6v6hJEgPd4EwB9Q9X8qm",
  "key45": "5zdWJRVfKn5d8dmodWMLZEYu6u2sSNde6BtrDYkfpGbHYmjpFs1pqHaAGoD4hBAu854PpaK8MrQQbZJ6byFwVGPK"
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
