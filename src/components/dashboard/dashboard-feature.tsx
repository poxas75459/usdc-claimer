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
    "HqCt3QjhgCX2a7MGi3gQE6PqBXFRK87888iFMnoE4mDJzeB1mWbDj8mYNj757gdu8H52ccZgMDNLvAoGnJ1wC8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N7opAsAQttQYk4cypbu3WsSMzmifdeVPuu1obvu3WC3XhLrF4FPTt5pXBJKWgxKDacf8uw86o8DLSzDZ3MJpSZ1",
  "key1": "3tbWmWw5ikv4Uk9Bci5W3EYKNeY3qyGAVhaopXHchnCa9akDHnqz2mTQbsLpwvvVP86cU25tLdEtdrE6VqNCNC5X",
  "key2": "2dYJKrbZGf4tkj3CpiM1ipyjtQ4A61EwiB2N9Lgk7JoN7Mg54gRT7e4XqXGhRyvjN5Sv6FbRzTBkgmWoDNPttPM",
  "key3": "gtevEAGXSMTKFviDpRMNeyEsoN5u5cqDkJFjuMwrrAqRakpUVKo2XYQGNo7wzZ7ryfHXLpg3NtZF1NX9dHUN9Hb",
  "key4": "411D76n8w3HdaGdzLinWdy8wAbV6L8VLYqJ5xeps6uusViig3xvfJrBTNuhWWTMxgRDS6Q5ndRXGVJ4GKYEno2ru",
  "key5": "YiHFfys2CvVxFwjcLKJRrDH72ttz1iexnCmj4cZougsdn2f97Taqnwj6CiDWu6CPtdmYXbKCPyYbdr5EpyASPAB",
  "key6": "5u8uYQZfcEPQfHttRT37wBQNToZrVuunSHDpVLyWbbMU74RtcMBBLX7JNga4et8ZnVeZynhgToWg1JFUtUwZG7ts",
  "key7": "3YtqRH98REXmKvMbQAcopPoTPDVNGDArzqNibMHPjj7RduBXEcHjUo8doqkPa7FPSvGGnCwsxwnr3awQsuqEpMgf",
  "key8": "3ViS8Nxkjw56Ez4nJpCMi9Fk4G6vmUMGouuJn85AeRq8v1wUpzqS8ZV9sL94MtazMyJKs9BjiGed1ppLoyniYL2w",
  "key9": "28iHmxb3GkCf6qYk9wVvBjZf1B9JW62q2TrCnucRsy5AM5wxbDhK4Lf1wy8CasFraWQGmkNFdhRwn3i994yZcnAz",
  "key10": "4yD5Z6eTpxbMN929up99ZoWeiVpsA5r7i6BnpwAeRJsgV7UBeZa23WtczM93ai8x79j7iCskL7yxtVmujb1mq6P3",
  "key11": "28NzRSZBubt63gdSQRvQ5JJvJWbZZcV7DWEo1sov3DZeRWUzTYCFTHEQXkPu8435TYze7kXc2E1aqQrp6cKPTh5a",
  "key12": "3GgYT43eiqqxHLsHREVtZgvswmbrGwEkVRbh9cdhLiM3esqTWzrixY9piBXNu5MFig1ZwbgwVnTgJ3NSxFwhuXrS",
  "key13": "39c9TjMkwMgZzJ6VTFVoBX4ycmtw9PY5owx8ympke3pKCabtdVPN29hJzNkesCWoDeNEdu2xWcFLNoMW5kYMeMjE",
  "key14": "uZ3aNXczesziM4zwNKzHPLZw1xmA3idBv5SZ4A5GUeTV2sSLGukUVk3RajdXAvx4J8Z6MoYGPqYTFBGANqLGTcH",
  "key15": "4KUvgXgjnSVGzbbEsvq8bB3Wwc8Gv6frKayipvNySkM2rRWLe4X7LrNgSdH4LUANjz8GKsfJvcLgGXoPqhwYtzh6",
  "key16": "47fAQyM6WkFRGxF5Fn3yWMkGWTKNkJq3v2w9vJn63BjQHMjTJ4e79rfj9JzM57AnAnW1fsFFe1jxySbX9UvREKRQ",
  "key17": "hfDN83dtoTZWNoU8fNFfHkMoY1E2daLx6i1PRzezCt9vrMQtfMjvPZ2H7g8JW216cSYexsUpBo3evdLggdQhQGn",
  "key18": "2rdU6WwRSpg3jT5Yk8kztRwHxSgzjGn2My7zEoWRqgvP7hidK2kGa8WXyRs4FaNva4vWWdQuCtwPxrnPWENeJ6pZ",
  "key19": "649hz69ArVhNBLLwcuLsGZ5639xeT3NzZfRiLj4VEfkHoEg4dk9EmX7RUFaGvfd6mr51f9pt9G4ovnuXPh2sFLvV",
  "key20": "4qXLz9VFfZ3Y6uNXNWyA1MCvgLiCPKzU7DUP26UXHZ7YSKpehpi7CJHJjpxJNLtaYUxpaLXiA6tLdpMxXuod3p3F",
  "key21": "4Q7jMSXHwKHJcVvX21uX2sNvqRtGEsiQhbBY5mPdEo1zrFcNskYL4aEJSMpYASRpiZ1BSbQENs1UGH7yhRzpWMP1",
  "key22": "A1bNVJS71ijr34mkL7jojXNiajcUnHQHF56nGiFLFyk5dV2ddicMV62vbcazWx97rYVeZxZw2imFgyureUBR7Fv",
  "key23": "5bR3kn35iU6fTuMSejwCbMrYGwpqTGHm2mzzTMUgQYJx2SSS1XoJJ8pzF7c68CtAPYHAGqDapCZwzYBLpuGLVU67",
  "key24": "3V8HZ3MrKyv8WxD2Jb6sKjRwedLZsAmttMLihqoqjFSeqntvuPm5KVNXXUFyCkVktE1sVVqWqvmtZjUy8ioHakYs",
  "key25": "3b3izCxH2aBopRCvdLBus2Ab1pVpV3w8KX5CeyhFj5PRMZiuARiNBTB55q5f4CEGh2AbhANSDEjZpjBB3Hfmrtv5",
  "key26": "5vPVsSJysh7X6HCB4nPW6EQiioXwPqkeGAw7MBsUASozfLzcmdZ7aY34qFg2hg4sABgPLSFpVBVuWvRbbd3knZ8G",
  "key27": "5uUP49QZcyvF9BhNM8ZF2sYnbJ5X5Li5xR4T69khLWbvN8pbrDnc1aatMgw7LEjcTmVDXbAueraeNGug57nrSqVM",
  "key28": "qBuHayMp7k3XG6rEsypVfCt3hYUPZkoHj9oF4vCXgpcJ5LzDZDvNPafbZJPkNBUxgprSUB9TyHD8McWnmNMYYoa",
  "key29": "5pxQEc3E3A2FZEnjSTALMnSbsv2bBPQfKNshTPJydsBHrYzHTY5v8PcNSSCyPuqPkfgSbNxpKwqoFsEX3QzXwvCY"
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
