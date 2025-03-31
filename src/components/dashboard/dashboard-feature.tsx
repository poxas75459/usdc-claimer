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
    "3Aii2AH5BH9FQpayMihauUmT3JputuTKVhcsbRbSEJ9yC8jzMHQ9pJ4vciS5969skKTUyJMTndLa2KRsniKYhf18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DFEemeVMBNPdL94LLUKNR9r898uVULKEGeXpLVaAutpVnWSJhn4cPnSKANo6PjWppggxbax3HifV9WaXXaA5d86",
  "key1": "8gq4s9Uqpvd34ztXcN53MdbUqevRxfYAEHjLbKbVsfWPdcKWC5PAiNvTTQAjpsHmVd2Tk9g35L9mYZdkxwhQnu1",
  "key2": "325Du611n9VFsEcVeG38dUoqPmJhfs3S3nt1rkPQpAkGUuyy6ihozdbSevfMDFtjjtqf9eqJxgFNhWoNEMGGNx29",
  "key3": "3EM1eSmnyfsdoeHAFxwjPiwa1QnutUGBoLqdHFjtBevCtjc66GFQe6e7AfNQKSdaRJpkkjuKksKSXXSTbJxJZpQa",
  "key4": "4isq8CtTXQfaXKZEy9wGPi83GWDjE8km3XLPxhQqQCL6YtrZoBcEGT8CuLsWwHJ7aUwa31G3xxXegPB8bNFEjACg",
  "key5": "3qGiBY8ZoB9Ex1Vz92UK9XYi6whXouqut6bofhJdZ3oTuVHMbaRMxuiVkdKNgMLYZa8ZAGHQFVUg6NTZWM4M6Svd",
  "key6": "4gSUQvAgQYSYqCLNKuX79DZaAnjktnnyFjcUgwSJbzkguKmbXHrk66LR96bbasxJafcFZzAWBCTj8R52YtLa6duh",
  "key7": "ddigCagzacYAjjM7CiQJi45ikyPFk8mnsTp1JHP2eaUwpifbLdvSiH1VCwDJsv1WGxZC61i6p9kMUTiEaWqUbvb",
  "key8": "ULc3V9F3yUbn8BrWbpiWq1Hucu9cL7zRyFnDXJu39cMhMAa3qpuQSpXf17kvrQuiNZEgbaYbunQr9jwdoohTzyc",
  "key9": "DzXrdbN6mhn3yB63XUwW9BLTs3AaXEawhSMRhbhMzMj19C9WfRLauSLdhuqbbiKzLbcKpVxowsked51GNUSQkbc",
  "key10": "84J25CoA17TmARH68gwhx6imUEuQhYyseojzPAL7zhVcJKVPZawLxLxmvPjLda8DcgYMJAndQ1DrHFtLMbeUJFV",
  "key11": "57UaDNBUmyBQRmzXSULFXXemfM1Vq5RRdjUH17gVcMFBAiWRvuHRg4gD1vFWghhjXWrogkJfUKT2hCQEHCD3TyZX",
  "key12": "35ZS76dkBUmafPV67kwgkA2QaV8K8J3NwdWjF6WAFgBs3qxqtRpNLsYHLELaK4NdfWHq6F31bahaefngRFBuAHx5",
  "key13": "4ztcRAgMQAbyUmouC6VMyG76Grdd9btTooBgTETTo814z8TtfAN5Tw6ryX6HsxEMccPVTbFaE1v7jdpMU4Y3fwHV",
  "key14": "5sCyuNWTUKHogrPQW7BiAarKRELzhGXbtsFXbEhxW4CTUpnhwz3fqTk4mCyvXvhvHhjpKprT6EugN2C3GMAWyHum",
  "key15": "ES2rwGXTkmmzXgzLfcJZjpuhfmaoLjCKBLjSKwoje2X1JagHjFCpQeqxNancuMB5UD5w8vAh35unxHNFECkSufW",
  "key16": "2TbqgojHvWojC9qmxFutUqGibbdu8fpbtKeu3jE98K8tvJmfikVYz9oeziBwG7X4VPcnW4xE5jSFMBea8aTGLf43",
  "key17": "XV9rq4HpjKyNQVgop9LWQfveq563KAT5tSMS643ftiF8n8heJAVEgWne4xvSdk9Pou38PTTdDQic4vHvqxycXgg",
  "key18": "2bessczH73cgNJ53jyf6L32MnoAKTVmvPg2X3KBFzXydeNuciuaC4sFBXxFcHjDeBAiuE1AExgKfHR3A46UQhJe7",
  "key19": "x9FQ6BZMcXAEzBgtV4PjGBmwqYZm9b5vjYx7Atmh7rzvVrRrgnb763qB6TdjfJaQb3BhFZ3yPvc1xnyTzqxyEi2",
  "key20": "46g2gWJiCeXJYRti2EwACUZ3S7BwKFLtyvsN6fDqETu6AVFdE9WfgKzVmMUCAoCPN52hgiia4nRWVSgiMzk9GunY",
  "key21": "4A8vT5xJLqQcQdEpjZhS6kbbZvihgQjFjJTriiY8pjazUYieaYshYtvWJDFi3gL2JhYQVzzkEHT58d83DaHBA4af",
  "key22": "2k7diZu2LX8WkUE7qKWqPKgeTujEWJuqMhz5nEsHbivGyvUi1BmSiJDK3agSBQZmjXGCjiUQQB8CdAJJNfts9tY2",
  "key23": "RikGkvgNLrKPYWamPZ5LaQcKFUBodKzuFwiBq5MtyeJn36ribb1oq5PUxkogGxdSGsiP8KN6rieqfQtxkRo4K1c",
  "key24": "2HVQTQxbManTSbewpi992GqK4jNKiohfNyZ4iS93qoM4Zu7uF7uk5LHqzmVVr8SUg7A2ZqcGeP2hH5RH5Lf1Pwrz",
  "key25": "jNEeL48c7cAHckcZfEz6tjjtcHMbbdNHpkuaZmPapjAuGrtkhutRuNJXZXC8GZv5FKcWTi7Sj8CBa5qQ7MY3VFH",
  "key26": "JWNwTXMtTyXgDRRSuD77h7m7sQEeG9d6T5ZrAKK6gpcwnu4qbRzq5ByPMBgUn6PsSzuHRjdQNep9FcFfdtdNEmZ",
  "key27": "3UN2wxCav8NwbjLTEfH5APGENgDNFYbFxSPjtEyUNeiXTn6GXnj1yXPeWsP5WKCyvqnS94bABdD8QN9LZRUPhCWC",
  "key28": "gZhsJ9sERFKYRsjYHntDZpha9PpudVBHSq7DkazfuP4WQuYuj8AZ57T19CFezdu56PEDBaSucVnWgdFBoCPzjoV",
  "key29": "2NWg4YnUNJdNZEUzavK1Qko5QQK3z6byAgRQhHAQhzh6RFTYx5JtDfTk51Qd41N3JAxiovRb1abW8F7vW2vxH4wL",
  "key30": "5aHVxSwZfaiU4iC1aDPskgQXujziBU9FNNb1iLgTwMCxEP5WFDDuBgdwnfHFXtF9GFUvae1kqPvQy5YxgLNUs37S",
  "key31": "4ExVZZcWqENjbbfKYJSZmY7RY6Pn3RutifNiBvKAdvyKV3W3jEyzc9NYqeh3enUEPAsU93pFen6Du8jKZvgVhbga",
  "key32": "5zST2yvmDwZeq1pUoBq73Vxy7de1UfzK2neu62jLB2U7oWDnKvBxSDC9QhmFqgCydjWevFjscZGwHjio947SbW6R",
  "key33": "4dk4WDEjAvpZaoZhBWZqV2BHKairL7VjHcxz9LHfSpiky8X4o5mTcftED2P28gazbxnFoGVQgnMDQzeiSDKJfvjY",
  "key34": "4X8ax6yeZhmGoKtU8sFEdw9S6XjaEsMeQotKqfJf3ZUvbwxZYMp6bS5SuAnfLrX2CYKstPvMRZ6GRhWyRaJKSFhb",
  "key35": "4EwFjhpaRBJY3U2Er8fvpuVRgTHdWvoQFDfagCg1ove4XqFd5MMedUNfVQPhfbY8SmemmbMoqZQqexHke8MWRY5d",
  "key36": "4f8mwZ8fR3hhBN5ijEffdHNWxRd7fmfwqWXpufEeQ7WE3o7KRkHmipGAxwrRX6d6gbAjVUzpNwXrDsNDtBeeZpai",
  "key37": "5ouDckgbzhDnA8G9zQ9hUVEbLNs7Mv2AdJq2twrmSnkr7j1UpTUYHu83Wmxsukv6xtoeU8RAJz6Ubq1xszUPdoBU"
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
