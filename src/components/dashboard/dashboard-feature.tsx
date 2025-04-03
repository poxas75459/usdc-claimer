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
    "2rJEYmZ8rwesvtC6QRNCGp8P4Q4oEVdpxH5XX82T26x91twGeUBBJ7E97DayiNMQyHT9HVxiiK9MMhVRptnPXSuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wPczGjBYpTQctoXnJSPrQvfhaNRdajoZTmj3p19EKa9RZiebCJvvduPwf7mC5gNzScSLVm4hAWsAPs5zPgpsGV1",
  "key1": "3MjJqSC434tcRkxzXvnksYx8CHf7aFVAjZ32XTvK3w9HannW44k7KNkio51X7B3LkZouhy6gHYqFHaCZVEHLfriF",
  "key2": "3QmYhpCvSYFCzT9Jc7dS4K2jAbLbPfBBPZkjcTvuu7ZarKBEDsgtAh9rhQomYsWTpq4rvxHUSbGirzjEhQpAsGWz",
  "key3": "3wnrHShyCavsJ5Zgf35TpVsJ8b1aX7Ffsf7zsrvcG5Bx2s1Kg6fQXrNak5EDqeuZXQUzWHbMv1b177i9dQkTjj1f",
  "key4": "23aSRazWpRFQPtWEhf9wvA8uUHmEMCbEVhnoF4d9HmymFAUEEqiS1oV6MYPNzDYbp5ZVC3SsLjNRta7qAw9KLpYt",
  "key5": "4XjJkpRiSLRY5B6byDvjAjC3vD2FmDnf1MqFCt9SYjp8sVDaoLAYdp1ViRixCN8Ru84aZKgAa74Kk6epcSVfYAhB",
  "key6": "5MkPqAJYRM5QrPBx9nz2qw5XeW3bVQ2aZNGSNsJYUmu4LuNLo8JUJf5suGXd4SauL3JsqTKCBX3oyrMjeuv3Ju4m",
  "key7": "121AEkkxTQHbwqJoj3edbuQ6uXfa93uFpStPHt3URdYTzvHadtYa6ptDkteTHCnGMZFLEeZsxNo9fNRd8KmpwkUR",
  "key8": "xzw5dzzhtWwimvaAYe4t4ri6NLYgCTR5JFabTJdWcuap6Ez1b2foevURKrZ8FVnCT3m9EfLgfojVsr8qGWD68kS",
  "key9": "57CwUUcjnBzPFm3WKf4Wpb18ah4jZnQZgqC1SZNnZxnq4HHTEJAdpZ1z95heo8QjupqqdBLkfJxJ6AQYUuLDaQ6M",
  "key10": "5kRkXVEn5nTCxpfaSBS9txuX1HJipAx1WCj4pbv4iwHzFS1dnjRWP3wczS4nwjEceKyJSCLZ2kCqUJb2ZrWUqbsn",
  "key11": "432UCQA693yHFTFfPfPQcRVs5ciBeQRMT7Ycoot1yjSXiPsC976CQJu5BJiuWjT4tvgwC2tzxTF3epRrH7PVMKAm",
  "key12": "hqmzhb6TayKRzbzYQYtxrJspGevQxWAveZNZHWkR1M5LWK6dSTpJodAgJm9buqHZCvdHbJiCXNPmzZusaLi5gC5",
  "key13": "5heajzx6mgS3B65DWbu22wrPNWoWVshsvLZvE41KgZGr45djxzkf1UHHn29p1XdE1o9K1T6uTbVQNv1JrWyprQV2",
  "key14": "5jmz5uGQg529Vm9koZGuZodXuKcQBqPvDfcgAAUQjTX2grSrRJmKSMUdq59mpbP9EKK16mXWhWGEc7EYDtGFvD15",
  "key15": "38eCrLQp8Cvjgk66Nr6FUoRwhKvAAG9TiLviGDRpoRZA84L6eKk1ZfZx7Q2fB19WCauahJW2LeNCVQE5SNow8swR",
  "key16": "3ZRFGmyXuvnCyzuMQXpjB6HiYCQG27utVAgX2XsCKnDJVYKp9QrUgED5XUyhapUsFRDDPEeX8yxNEAbrH4xj6kBS",
  "key17": "5DmvFuYc3fR5uUt7GaYWrzkkKoExBHXXx446EWWKiSKV9qx52RnaA38fR5NAG1LkxooZtCvE1kDtYbVvrHTkeNYE",
  "key18": "2iRPCTge5P5UyV1QBS6van6kVgjq2mgji3b1jSeniEg6bJkMKnMnz4Nsv8Ev75DKHQZJnTJtJsAgRnAaExNAujFV",
  "key19": "5DVA5RRPkLrjoimU4vDkwLbcdEnWMGKDhY5xDPZ63dp5CyocU6J5UWttsz9x5PoYLFjVe9uurMsF9GA6RaY8oQ6y",
  "key20": "5Si6otaEjm2D5A46NBMTKDihXtTWBAhDh19MNv6ggoTYeQcNHfKUN8npGWVEnqTFLBdspMsE7JVrhNv1gU3KBQar",
  "key21": "2sucyfS8ArLz8ozjZYDqCH6cfQa8rrJvyqt28momAggqxcLen2PQXdk66wPGKGPWQL7qnJBgznmFAmkmaDrrwA6E",
  "key22": "5x2GdZaT3tAF41heuPgZEoEamP27zHipnBrMndAxKygeL8KSqVfSbUund6SVbc1SmpR2QUZpV3pEFcUMcHXufywm",
  "key23": "4FYLpob1xj7mao32zBZriCqsn5yHZLCvZURMiptUYzxojtKZzXUEk3evgMhbkh8hJvapnXFB5Q91UYrxXm7S2ZwW",
  "key24": "63apSsuvj3KzR285sKNe1yJq1wvZR42KnBFA1VCxXtmgGK71ppFHJRtc6vAPcELgTKp3UZT3R2hvfW8kbKqi3pjB",
  "key25": "4mG3RWoYRd2rRqNhxFiYQNrVdmsQmhQ3twc9v5pnqX18yEUTPzRw9DH8KG1Faj7Dr2K6LDKeZ9ijHPxtLdzwtxM5",
  "key26": "5RC5Ux75n14voUiWauP2cMxf42x2cQJv8pdsPLbR9T1YwQ6zTGzPQZLqLE5PokuTjB9nRvEiqomFaaHfwCJtY3Me",
  "key27": "2aBofVoaFyb7aJRfu7XGq6c15unrS31H3NLMz6AGp2PEzeELYhAg8gdALj4jGP3ojwQENgVucd77nJg3b3h4qR2J",
  "key28": "37h7cw8ZWYdMj4mpfnLbB9dkpNmHJiersoQKzpmbftMbbTTM1s8KaoGKcFWLcn6Hx1Korz1pG5FpqixVbwsZCFbi",
  "key29": "ddzeUjNwmjT9iDnra8eV7aqJpRLMr9pmXLEp4zj2W5bW6NbCcZpD8SAYavyrjJRn26czqYjRbGvmigrGFh6y3Kz",
  "key30": "btgnrw5bYLzLTrTB9zHEwHEUp4q1tr5GZyv3ErvYFsxXURGNvdwx98xZ5edeUM7xRGDmJdc8qGAPUbiMpzki6JP",
  "key31": "33RFKeZLoodsPk5DpGvnegWaLpexCDHLTYvwZq6rNBV3AuNjUU8hcbos2ebJijGrM2uosFvnFjbUGDCRutVm5EAJ",
  "key32": "32eL5Q3tgF4ArsEKZBwmw8rqez5Tkn3dsDxDdXQ8h6K29kbQ6wGTpc6kGecp39HZtFRLmGWRsA5G6Pc5YFrjmekf",
  "key33": "3jpMPm6zKwNejXG1pGUEHVYgPdZX2ceSn2JrogHK4vpvwPYST1NeXz2xJffvxycUz2UPDMat89RLxPQStFJZzFPU"
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
