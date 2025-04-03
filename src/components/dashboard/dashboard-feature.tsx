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
    "ivNcLdMZBLWU22Vy8TPAsavbSNSGAbNCk6kzyZL1Qfu5FRv9ManRD95XcduVadacoS5AYTx1NQUyHbUyw18RXQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uez73fAQfJr9yY9NPUK15pLq694T8MzAqRoCEJATRBVcfJVJVnouS3qGPAq3ruW64CSS9YKDwUFhnV2Jn3yvFqT",
  "key1": "4k9f5B3t6DY6RtXVHaCky8rttLqQkz9GJ1P9n3oqtPhnC4sQLVF8fjKhnuRPqsGdCuU1H1vHkrkApiDDsEWXykh6",
  "key2": "z8Jv9KHdbEGcKphJpFBMkDPRPhuHpJkBEu5GTovEVPZLVbHUskFwGV9VvtUyePCBHo86Vjr8dKYXsUggJAu8Eiy",
  "key3": "5cten2anD8waAvawC4QmLDbfH4a8yjkD63DfWx4K2KVjYCPb9eqn4hNzd4dkgu8KEDjPpqrxntyGkDFn87SB4U7o",
  "key4": "VAvKD64staqbD56HXv4UNEdCeHk3bm69zGqHomVnENibQX86a5awJsJ3qiqCc5zuj9awoiyXAjjy7CtVzf54SXm",
  "key5": "4udUwGN1kzq3LHeg12hKJvnPzsfM7mSe9Q1zAiHT1CeQVYzVoqw5LqWQDq1YqCBs1CkiRxgACmtcxpFcfJ27R4Db",
  "key6": "5nAFQvwLvUA1eWFaycxfi9pq8LtnDE8f5NRhmM47QkQDpDGQoCHgPbMymQBfSfqbDhYLEXKb7G5CmavTLvXjXWXr",
  "key7": "5t9RKFk8KGzardqbNCqQxXyGP3T5czoqiprW8GkLNMyELChiCFuuXGzAjPLGLJm7gQ1HNeKTgJgWsvgwhZCcr1K3",
  "key8": "38UBT7rcrJgJxBLq22vve91pegbU4rEosrk3aVrAfr2ywpisetW5Bs4ZcxaEnS8izcChAR8Er69oCqYybPjVoWnK",
  "key9": "BFypPvijBhD1ibNQ8LwF7RHS51JMH6nsmQ44ULkQBEgayDMDYdkL5YSXFVtCKjdUh6M9YY1Zrjks2BRBkH6C3ks",
  "key10": "4oNDBruZGurybHcxMPrxVxRt6UsGDqFgNF6LetCscbjbdParAxqPMdEsJNpNAF648zK9WEcR3xR2i1ipcGHDE4AQ",
  "key11": "3VhksZhGzCxAgDEkGdHnjkJYCgM92Ki45qLym3mPxQ5VmDsdEh69JvDJL35s8JbBK3QweTEUsvd9p5Zr4WNZoXXf",
  "key12": "2fmqfCwbBeeBf4Vy4egnLCT4FEFXG9jEkNqmYNrhAVjCpW5aVVaQqWR4M8kJkhYerhPavaXXo5bVS4CQN11YPbfH",
  "key13": "2SKGm5bEiYXijSdfM5pG2NWVVr4JNBsxDsL48SBGRZs4dDrvXp4aw8T4aAputaGMagpYtSbZuKapAshSJETgEj43",
  "key14": "4nrotZbGjEjSvDfwu5LwV1afjb8HKKH17ddaoKcRBJquECdJwENSMY1Hv2pTzXNQaFr21MBb34vYavQkXjijDSwr",
  "key15": "2sYvSJd2fK5twWH67FebbPkMNChXBjfSK1io147wE7brzMedJ4kXd1PVB3dEZFryFUbkRdpi36aho3snemPdDkLy",
  "key16": "3XpkVg6F7TM891e7eF73HcQQ7Hwa6SAcadSZUaUTQQHevDqfAFtMGjGmj4g9KJgfBHqStXeLVoDmp8xXGVfXziuX",
  "key17": "2jPKv6CiWSsw6c1mhZ6L9JG6JHiv2E95yKaw9MCps6YEgJ6UXJYRPvHm6UfErhmKTaR621preNYAr3DcFKGCEmzG",
  "key18": "5w4BWFsd9ijHkLQxU82y4jCiB7dNiYc1Xo33gMoNsPg2sCLbRX4kLawzhvmWdEk7HBvkrKzDahxR3RR7c1cTF2QH",
  "key19": "3nW3kEuMT1sW9awnNVNcMFwFCxYC4FSJgxJnBKrkoXM4wjJYSJmD9CquNdBiFQM7EP71xcZSuRB23LKuYRjwCyDH",
  "key20": "614bxSvuyFTun6AAEAF1GRNemaPLazgqf6QmQqp3hWVpzhPivzLGqRhEEUfeyyct9j6QfX7nZZaDKBeWbemYfdQt",
  "key21": "GEgmKESvhL4BBm6jv4KSzLdgcG1XcBv9BQ28avbE5ERKZ1gnZGfjNTFLzFHDK5pXCtC4ypMLfJUaZyhASNEUu5X",
  "key22": "41tp6Lz4GTsyW2HdK8hBurcn556KhXFxu6pw7oV5T2mohBg1pn6CSxHyhCvKt56UBkcXZTSDpCX4RLUDSAaqMBDZ",
  "key23": "4d1Dmfk7gR61gnTmPMN7wzxpuxhqCAfUaTW5xVoyXEH7x8dYgpzscG8F95RmtHAgGHPVNzwNGwe2JbXMH8wXSYwS",
  "key24": "3wRt9GT8Te6vdqMCAh88Dv786yCDxTzHUgUdDkVEzSPk74nnpAzKdeLMhnQfSyYeaB4YW9seCfeogAPgNobjys7P",
  "key25": "4xqDKZKgpJrT5ZmJitVgM5yPCydgdeaEKzAGnJjqkme8WWvtutQ9Dbe6LvETRw4Uqp8FQEhozQgo9xDnYVJzJKdE",
  "key26": "3WPpP1QQBSMSJzpzoHanoYB8VYYQW4pQLa4cdj6gMiG3kJ9nvSndXwpz9YdHx8hevpswuS4HkRJTKPMBAWcqxTxD",
  "key27": "2eSzbsGRfFfmBy392GEdWJRjhqv3CVXxmjEBttjxFKirYqTKs2eXEaLqgYf36Eh8Xks7wRyH72NH57kc23QkvnDA",
  "key28": "5iFfFXgT1xvcXv58NWL6psCVMsBRHcTds6AhzpKpL4kgo3BZkGLj5HkHZ7k6KEL3PizAKFUpAMe6Tr5gpqxNjfgK",
  "key29": "2hyyiqBc5Y5GfGgazD6gQD5X38pSKubVd77unCQTJCVF2iWsfxzTYF8xNtD9yhQU6d3ZWQHQ6nzB9kx5jUiCBJWW",
  "key30": "3G6z3PRnGygy33LD3PAfbJu8MzqwA51zsuJGR61ujkjrZVbPLJgE3LPyTHAmYY6CwpU7sGTExLGjT8mG4V1Jnmrz",
  "key31": "2mn5XicFovDwEjY42WYoT9KeDJcs2yYz1RXBUCbb3PKmRiukivZFLsveP9jpDFd7TnPczLs1iQrwiEbviyio15TR",
  "key32": "5mqCXyXT3qr6Xb96UqXUgLT4ByxqdthRhVoTDmQEc7Mw2mqo22EBqujmgPkJBGDKUDhLjRKPyQYobT8dyX8xspEV",
  "key33": "3gxat9RyMWoHUSrLv2FPugZJMyDy1axCcUWQrAVaYKzx9fEwbQF77S92FSJX3XEER9mjaLf1t8RmGCHsn2veGQES",
  "key34": "XjjUnYuEnAfbpK9i3SUJgv4R32kYjJfdvAZ1kx2Q6yZhYw28GAnkdiigne2iHdB6egZWs8K4hhdBDvE97CTRCJd",
  "key35": "3f3yZtU4fC7ZEdVj1r75bGeybwHsVZrCcTEaDEQtsExvmRE3WYFQtVFJ77dQV9hgWYs8kHq3CewuQduUkBmcdV1c",
  "key36": "2GTMrvVry9CYd8A886CLt9ofjyDTAWskCcSDxLP7Aa1NXcQ2XWZpCXCWvPMd3RwUGs38vxZ2W1qveEC8Piu1tXMQ",
  "key37": "2j9miGH3PcMrvUsMVKA2Vqt6Dd3i2dTQYqC6tFBAMJkvPvXnkPL9gUkNWHKFMfFz8MZwdNpGV28WkDRhCWBqMjRw",
  "key38": "Ls8S6NL7Cz5K8znNnkGejW3wxUFS1EuvVQfeaz9e57aTpVjacUhNrUeg5BBag5MrCX4m4ZGmU8DPBd5G5xJkJ1d",
  "key39": "2VbqXy6jaiKahETMshaWVgtbjaKx2isBJKcKxpSgeCQ6jkYratk5Ub2R1m6AUbNaYjugS4BKaCgnj2pxPJ2x8Edz"
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
