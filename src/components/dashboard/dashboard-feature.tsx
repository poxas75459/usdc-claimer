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
    "3ZdrGZLT5cnUwMAc46mX2t6E6gajifWeq9tSVfNQPSpVLedRDxP38edCaZ79cddWwGBLZDxj6eE2ZLjHFzEU32aV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AjKb1Nog81rsHHdyHhvahLdkgAK8Sswmc5qCkaEM9CUKv5xuLsnunvm5gsv2tncSH9YRhL69uUm5vGGUVxrNwFE",
  "key1": "2PBXSvGv4f3NjwHUjkPyw9HgX4e2DsWPswvXJTHS3EsSqUrzmP2Mbcydou5aZWpp951qt6wyFqpkkSFeb3jy5e5k",
  "key2": "3fQ7dN6REQ12KifonLvaqvQPkp2uVgCatQWoNM3mHC5oyJr4Eusf1Xjy21QmaKWpQ8sswbweFneBd5kg2uhANfMv",
  "key3": "2YebjGEqW6aQbv9dfmoqQvWAQJEn1pQQYyn6M8XoH5U123vQ3wqVixaz2kCKBceh1K8hscJcYPLsRuQftkt1gmUN",
  "key4": "47V38qXPbZh6wzoHJgvgz5jbnCa176FX5GbZiTWWjasKEEj5ziFDaWjpM6XU89TPr8WcJrf4ZFHr7UXpgv6Usu2L",
  "key5": "5hUMmaT8F5dRcq1C82yxhvw2vAG92BHZE4roKYzdcXXekmXVZC2ZettXhXjXNd9aHGeaDNR3jtHJZsT6FY5G13Y3",
  "key6": "5QnkTQMTrsc24GKstEfw8sUhSikUk7PUfGyB1GRVy2CNGjVpds4DoKQaDik5r45xoQjiN5Gh7VRgSrJT2cccMsKF",
  "key7": "3ccFTad4d5CLxvd4ttThSwEQgGH4GrHoBPYJgrW3JFVHrUK5BeieGzEmNfb9fFy7caDNDhu3wXRdrdLTMiX2XhcU",
  "key8": "22eFeN3GauLJwuLYxHPrLLKEKTBcyZSLHmmRuVHzDSPskFqfNCiAp25msFEECjVV5VwHYcjyo9vwwf4zzPNwGGk6",
  "key9": "592Km6juuF2V2N584tUYQATf3YVsZbSKF73gZG5RYyct8BjXqi95aSoHrE31zSWmd74USV8mLwvBeJxqiuWVAraP",
  "key10": "29ffh67qDLTuUpq9KzWc9NoT1SoJHQSA4VCZSx7j1iCi7eJCdZy1nLJwMYAKZfXJQfBswaJKWJRtLbbBbZu2QH4n",
  "key11": "3oNUdbKPx8bxHZeY7m3NtSba5CVkk86kxdhg5SzDALFugSzSWvyc1ycaC6yjAQAj48co4Mk3AvCuk5ZFWucYRJSL",
  "key12": "4yjoy8TcoD8gDMzqytBN7eE25EtXdMH1h1Do9rohpmUDSQz1A7hpsY6dca4qoVVLyEoU45v5UxscgComJrd4gAeq",
  "key13": "38pEMF9Q5pAbiNHxBbHHLaq1ksaEV4QjRhtY1ufbnNuEzSApUMj8E8didPZSqKjTjuATbuFRHi4iD14gBfbB8fxA",
  "key14": "5USKciW7HWN4mw8pxY7VaGMcW7RXcQNkvkX7ujrCmZ6YDnNQEy95SUyP9kQSRDJvAZqnAvSQ1TrrUMMSSgrjTXXb",
  "key15": "2fRVrnTPssNdehqJXzgdHL8rstTmK6NbrDTyFRd5C7MvY6jpQ2iobmwiVaXTMTAPZfSarS8ujuPdakW7TbR7wMvm",
  "key16": "4dUx5vAq9jFD9xEyq2Qwk3ojmxmEjR8eUeEBju5J3hFxm6AUZjDM3A7GCXQbSrxCkBLra1B4gChcjaUrEveWWqpH",
  "key17": "3NRXuyC9jGM1u6PEKAsb358TjXnNtdwwYKNk5ZNWXZ5hNoJd2599UHzEaZWRH3NvmeLtJPEyTMPsncLU43tnpGXd",
  "key18": "tydL2zD9S9sW3kBzZksB9mVnDwBqHX572BTZ3UTXN2a6iDEvDAjFnoctXUykugtuT1qHyPWFtpZrFPp3vnz2sNb",
  "key19": "4ci4FvnRXuRyofC35qPkNV2S96tDWkTotFprL7jQ9Dfv7zc9vyi7t2gGt7ySDa7ngnASenpZx6g9317xLnKdKsRD",
  "key20": "4zDzWBJqGB2PyjZWRFKxecwQS7TmQBcDF1Qz1JmB1Dn6SsEqgFcMWvtT6oJHfS5XaRgMMJt8T25qkMg9yjiwPXh8",
  "key21": "2DhpGSWtnnitZkGWzE4pZAmQPmkG5hzUZDLweTKEU4YaJsEUnK2k92n8KsyuTDT1QuYtVVpSkpUeWo2YkkkBJEeR",
  "key22": "4Am3qNR82yVCWLy4f8ZjASmFxyEUc1p7eWGRPup9R3m6CSTy8scuE55QG1d3b5p37xnpHenxrLBErD9LLdWQZN1T",
  "key23": "2izw8BaX1oKZguwVaKNUVPoMQL95UDTYgnVnwhX16RuVM1BFST2DXM5Csw6dYHXqLSdwbePTqEQHCB2w3ZzRUvU5",
  "key24": "43jfWQncpcEHofmgRQ5MT3N1JFkc53J3ogQ4DuKvkN6cEgsCp6EShUtm2EEzfXsreShoxh8V1aW6PG27QdFas8aJ",
  "key25": "NdYovdU1pctNfaSBkCehawQc5eJUjeahb3B19YHv3HjtmgoWnZRYZM1d5b3sgVemPrmdkQuBvUDAg8bxRejCDvZ",
  "key26": "pNBVtQ7geWaDWHsMCfu8oVxYBxozX56yVvqLMnZCa2xRo7WWJhHxY2Zx52WHpNiPbT4GZGZpAnp63XWo4weiFBg",
  "key27": "5jBGqoArtEwc7zUQ3e4D95Uxs5hVmkgfBrLDHRGPVZhf13mV71dzJPfp1rJ4bhDiMiTxXjT82X9vdK2TSgJbaZzR",
  "key28": "3zd8KxL3eXumsCUTmuMLW3kvNUNmxuwh6GnNbweEXdg56SanQCmV9szFxAENwzVbUxeiZbU8Ee1dMrmckwY9LJW1",
  "key29": "Ccw9aCfEQipdPqmeF9CsnNGXh36ZnSrtTwQmPdTroDPfqHwquwfDjQkPTGEJM1QXq3uPtVSf3PoKgqF9KdJrCJ4",
  "key30": "5KGAmcembtEA6Uw18dSLV3UYDyrAsPZ5xG8gJrGEeUnyxAYPqjNj18MwZqqGgY5e3RPasmWB3kUypM3SKWG2Luu7",
  "key31": "n4Xqi9zn8ZxTPoSLpH9rmaeYyoPdW5FqC4PBwNdRVDhAL484vD2e8dFpU94jVFvVr3DC3HdN2yRoF6SBKBmLgDD",
  "key32": "5FNdvR6XqL5dbjxuKFkK6NVNmEXpWzMH54UwgdGq1zomMuEUKBdpTWbGs7XUKbEbJAoPkLxQqsNpHSpH58VCFj6v",
  "key33": "41xQBHrKpXZ4AwPA7pYe4R1T15hacWjyCq4Z7VH7cNZ1EhZ2PXWoeDMWHqLnh443xgU8wTMFGSkDwtgNG2HRjQC",
  "key34": "5dUPWo6VUYJAX7NdxHD7J23Dydh58fv1xJdYjgchNtv8SouKpKndZZkZRpsMWq9vG9bLoBkCijCiR8PtFmwebg37",
  "key35": "3PYFsxuKxaD9kW4HKHVSu45UfvZNM3hdPbZ3uc8rsGsT56JgJphFYKkcmynAm6t71XpqjMiz4GUMZCb6pewUfcDD",
  "key36": "5WP6DnxQHGSVVceLDfBJs3M8cHYxxV7pqKnffSyhihBdmRV3BvgCDuWFTp7kMTZq5LouihRFpWEf9ar7TQUfQd5S",
  "key37": "2ZRSyazwaofSDDooC1Pvq4DAE5sJsDHcWy4swAWnkNWPvC1ZGKyvFpFHTFiBb7hQPRmpp2Nhi8vEoAeSnw4Ws3e9",
  "key38": "2Ryoczz3LFzG2haLMzhg4xRx8Af3m8Soq1Gq6KT3HJr48BpjE1AyMCsBsyTsrebzjkb6kbuMU1YWjdnKptJ9C9Rt",
  "key39": "zV3kWDhgTTAq8TFST64W9AZDbNmHyzNd8sSyrYSk1ccxjAWqYCtT3PyGtLzEbjgMjZuCrdbbtDGPNZyrLTBPoth",
  "key40": "3cfLJpYkHeKH8mEK8oypdtTMDZh9rssbEpNWC6BiJScaEQ9a6zH87gLsZwzMSmtP2iuSCkLEJjYbwnpzZU13q8iG",
  "key41": "syTmBrbAwQ12zuA1PhQWtBjiX9DfKw26KJp3aQK23tuYPxYyW1BySUx1hW6NkPjAV2W19LHQ2RHKEZwdToXuZqa",
  "key42": "59uBBw8vDWVr6XjtqDqm7ns8eD1gBTzY6pbnWKEUTfTPfkYM6u9SPx4WAah6xxWh88koTNvmX7fKGa1xJqWMxpMv",
  "key43": "5ysLRUvHoLgW7JXZetvewBLKUNdEvJtry13XTrXpw6dsB9ofbnWbJjwUPaomWWQvYQDATqPZGr8fkxU3Kcr2x3Q2"
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
