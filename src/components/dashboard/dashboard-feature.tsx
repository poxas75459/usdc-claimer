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
    "3e9r6HxdoRoqG2DBAk6tZ5h8VasaRz9JKM4v8EATmm5Bc29QZ4nm6c1myGMQvCQxUd15bRzVpBefTQFL9tRjauFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Av3hqEdysFqSUeHbJa7kizGmSUsHm4Kzg2FXztRFtv2Du1ezFKHfGHhtkynkEDdiZ64LkJcfKyP8MbPY2hhmqLE",
  "key1": "2yxLdDDm4Zy3gbhLHD9BUr5fEjXama8Sag7Jr5rXQ3ci3dB8hP7QdeYaYuFYVSuCvQdaeeY7jaE11yW1QRvc3vGZ",
  "key2": "4x3pU4PZ144K2yMRQ7sGrEyQwrYY6xwzRCdAqkJZytC4Y9RydiKQg1SqvDFTPGj39pVFMJ6eeKDtypYEBgdBGZRn",
  "key3": "2vUFTRpFUQG9svjF4Tp2t9RNTujpAtuvCZQEAjXTarsco4cuzR73XZSwznEKTbPdmnUst2rAB5CQEAkoUSu4TC1C",
  "key4": "2X8SuyptpTe3TSLDqYFQHXWH9Nw2ePcEVGfE1NfraP1JrGgd5smXfDkZXGfpJbKZLvu1kBatpiLsKoKLAnjcQmxB",
  "key5": "WWeXYtnXgAUZ3RUeAtTLQJG2kReBx4y33kjqTbwU99f3DPDLjtGwEXdr7aEJkpN2j7uAkL4Udk6TKDKuyJNVHuy",
  "key6": "5sijPPLNAVpt8xec2KQCu6F3jbYY2UyPhyqgxCXYYUkwVY8GHv67dPHBkMUDTZCrbNxvw8qz73HMofBXLTGabUAF",
  "key7": "2TcpJum2Q9HFB3jJTk82tJooDfesPvjFjYiq85PXksyYtoLKSt1S2oKyJA6r9fYQbsWS8fvTS34kBd7amkp3RhCF",
  "key8": "tqggkRKEJiF3Lzhc6B4SG7SSZqBH7pqCpVUiuZZFroTAybNaqjURgeWhPAM6aRUDjmYdT4xFb6a2U7otR5ecZKq",
  "key9": "2QZwxCFDLPjpc2LXRe8Uga55oDrsZdWMh7izX2SEPZSbtxzwj2VNPMgKRsPQ7ztBZA9h96fypUscLQtYtSKtngDM",
  "key10": "5NJ4UhCu7Y2cCprjeok1TtdBUzsjT1ZaBv4Kh4uPgXj4riUQzq3fLhdq9oN56WoN5oiVycwVTHJcYtSNBNa861XY",
  "key11": "5qHG5BEoCL5xzf6W4zqaQ3feKjM36e4qyD2zvpnR1PgMQZgs5KSiDWvjUSdr1Q9F5GkbNxDghj68AfzrbSMGMT1f",
  "key12": "1TiMCsJRHTPdp1QwZuppBkL88hFzCoaVHzWYyVMcR9kChU2q2BpkLE5NuT3otMa7h6sj2X2zfz5d3B2vCRzqG7f",
  "key13": "4vAxjVL8AWk1SXuM7nEkXPaUYg4ZXtqG6QuqSAhStKkn9kBhoPyCmGRrWD4FDkLTZ6y6NrCT4we22eBriCwrCe95",
  "key14": "Th4tspHobo9EFUSPcK2oGywvR2trNR2ULnek8kJxicegECpGx4ix3gULcsCNxx9kqPgcC5KWUwaBC3r1wtYjSwb",
  "key15": "4XRCkmggtXojWSVrJ16hoCLNNc44cWFoDnXpVGSzFsyGCrayn4zJmgKH57QR7k7Rm8Nupvp2128GLgtTV6cgPVK6",
  "key16": "5dQFGQrrJgEwRr29ySZdoPuyDPCJaKQH6J3Q5R6xKhfJv9cWS15pT9HWHuN6XCaLspoGhCip5xrZTtemGJWMas1P",
  "key17": "ud9MmfWuf7G2VeGcQ5t1CZBYxP2AxuJXbfCaYCiTDTBLZxYxfZvoRcRvvSohCykbAxiJ8rU2k3E1KJWZJ6S56fr",
  "key18": "2NRWG2KJWq9fNQnzVhJj8RweqpxmJUDG3w1kzYn1xfAbumgpAUqUTKv3krpoYsPRhoP3dvjJTsgGjJ3CUFeCQHdG",
  "key19": "EBi1a1LJSZyrC4ZFHZtEa9XqkdpMsoS9V6FSzPPnpnfYWYYgPSZr2JGtnQVJrVsTfpCmoeokCPo7MF5ccCpdimy",
  "key20": "4TyJeG46KsLQzWpzX9hj8uEZYAbgrqcDm1rt5utEHpFR5n7qMiyjt6h33r9sLinjkhcaXy1XY6dg8mxxKZ3bMgUt",
  "key21": "4z2fMq6YCsZ9ZKttNE3whUM7cU5ochsyRgQUG8QUvrbLPViboB7qrFkMXkQyPprVZLEWfdoQWbFQ74pJirvt5AwC",
  "key22": "43xoZKh6Kjv2pm55Yj6EwxPHVfPbDmSXMzqN5TSs9QLYYtJBEpG3HX4ZM6pnPp2mwTgN5aBNaaCDBcQakTfPQKsk",
  "key23": "4NBN8pfjfaDVTf9pnrwEAVPNPdHfzC48JYtup49up3SVXzm1E9fC2HjM69P9BvUNzci4d29eswD1yRxzPej9BZZb",
  "key24": "5C1dw3hT7tDxcpDHVyS4xnbmsS95GfvsRD8iiMaWW53HwfwRWxZnaZ25VfEs9ircn4AZ1U4UXtRUo7in7bhPqAwe",
  "key25": "5meuia19xb3jpXYMEzfaS8nAgHCvai9ZFHLhRAiS2ug2M8NGHG2YwQy365Jq641C3ZHvE2aEmCpHZ8JS6PofLjzj",
  "key26": "4xE2UNwTix5Gq2Dqrvz51WJDmSkDdmzGUJuGeebDASaQWKG2vHGmDMsAwkPT6chMgnMTLxka25Jupwk6aXtHm7um",
  "key27": "44Bv5rWV7jh2ntrURfM94ttyuoiYkFpyCj2PDDLs9r8MQRskg7mQfsg2GHz2Rg9gtnuv4P9daEKwctV6KtCq5L4B",
  "key28": "58CdAmm3enrhpJ2ia8VygzbMNEr9ceXHzJ2KHvYe5gijG1sSadYA87C6RyPMpDZMqxZZ1sQt3NUNxRTrQCA6VoKH",
  "key29": "58yz5CDU1t7xYRy4SKg5jFNWavTDrX1Kpvi4gjUa1FxMi7XnZo6XkoJx24CEvDgbuPvuJLVoZy8H2AEXR6Ad9Ebo",
  "key30": "rjCpLUmpUN5U2nxHMyMWmBXRyUisoEe5yBHwFhw67gxASrjA399HGxhn52tp8KwyjnCtAQgubRLzRmNCuzZZTgq",
  "key31": "3V5xEigotg3m57b5F7oXZp7MELN7KoukoQVtKJFir7yT3J3UZ2G6tQiYMZSpSsappDBxKWWJV5CoN3tjXcVgKGsK",
  "key32": "3M2XqDtEdcFEU2m3WV85Eb5qS58xW9A5Kjzx63NFFgUiUPVPMQ8yCqgCZ6sagAHW1RGQhsSiKCDQGXNpDuhYVd4s",
  "key33": "5tBDvxVHjb5CjTxP49NGnwcqWu2k1yH2KCGHsEL1a6Mm1Gxho9s3cDPSsGbiA5tJeZqXFmFgLyWDBNj4UbnSCUj",
  "key34": "2vpdoN13EDUyk2dxmcni5dKc5ygt9obwi9tgEEn7WDBo4Sp6nQGgpwZKp5jvMk1oriLgWoizuWS16rH6QohcPZHY",
  "key35": "yhi6h2HGWXwZLUKZsjA6UznpNNag5jVZFcvKaHSxwo3Lo21kXebR2mXTVAMLx8geWggWLCZcdwHRdrmYtEjy7jS",
  "key36": "5YLUb5ksMezzE9FpF7rtmR37jJvjg6h6XmmthHzAHjiyL6Rik3Kx9jHmwP5L5BdaYGCWcM5rZQnc3i4CpqrHX8kh",
  "key37": "493CG4VjPYaquBD7gAzDcBKyuNxJva3KNBm5pyDpJ6kZ9u2opTfF6LMk3hnzRPDEyZBKPZi8Gmz4bq5waqNG4sAB",
  "key38": "5G9gmcJ16NYwEGZMQpM79u2qwp73yE6qwLHchtct3ZvbhUcBdnu9B5WhEvM3XX98BtR7oLBqFWxnMFiA9WYmsqr",
  "key39": "3uuATAnSc6sTPnVTYb5EUJ1yYo1iVLwTxnG5zGFzVef9uD95ceYhEqqQmDdyETiZ6xFMCYA5zd1QK4RPeip5jmqX",
  "key40": "5QEvocVnCWpib4irhZQE4QR2bB4hqAmyyr6RJoqjP7f2sjZftAxJ3HEGzxRhsrSWGqkqoSMYbUAnxMokSndMYfaV",
  "key41": "ZnNqog336PQsqpxDi2x4YbCKvLHFL39YK3RaxESA1sNicGCi7c4yrMR8nKiGnbXFvo8r6Sg2Fgv2bapriGLwaUs",
  "key42": "5aUxLHRpWvkuUFMtqUARJcBqViCXDfQX1S7RGghh2mvdenxhThzRw7ed5tLk1L16etWeJbi6HaD3SvCFRVuqHeb4",
  "key43": "CspBnnuVSFj9bzaDqCwbHf6nSm628xPqdXgNczMkZiNUAdLJedYjDpyzNeYjY11vbCZGgGgp7bKAS5sYp48578L",
  "key44": "HCufjjfV61tXE1drS7FpMXSuapzZdVEeLcbs2ephPFbE3uQAp4cnrnJE3mdFDGoywfFaguZfCU1MZpretYEST4f"
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
