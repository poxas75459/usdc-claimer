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
    "2M1NdcJX1kQT4H5JZtfGB7ypEKmjpMfLBoHteukhdgKW7mwdY1z5x5scF6FyFuAcM3Ng7VY7rBSqBzX8q6e6d8RY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W4iuhVu4Waat9k6TW5P6iEyQsHL87h6nZACKUduz98hcSrZAaxqnJUUJ2uD6aEPmg9x6QVR5aquphpHSZygDevM",
  "key1": "5z6mvM333izoL13N3yv13McdontPFQSUwW3DNxGBdFLCHWe2b3kNqjHGc5Xgc6dEWebMKSg4ou1hejqBSsjuibKK",
  "key2": "yyp6cEJWL1pSQJTGPu9feRN9xgcDL4DRx6Nrz9RtLFE9xMon8dCmXYZRXtssfHxb6vzNCNzGYw9fktAZNDMq49k",
  "key3": "36vS6cM117EZtqgWGGgPopCqGutwV3hjaZftsiCsmE9n3BRZWMxqX6hnzbrKGkMevdd9aCLHuBc5Rgxn53gK3D5q",
  "key4": "2PWEQ6C87v1j6bwyJjZpspHjvmvnnVtRyftocr7tmmXcju43bm35f1eNjQ7uqU7kStd3NVwUeAGP4WV1f1GDV41s",
  "key5": "3CxuYkuvp3URHrX7pDUBbJeR18KvdqiwLQgLfMKnJVjAwfcyVtj7yiesgTp611hpsrzoFfUhkuiC5JZxp5vAtwWF",
  "key6": "4PfJeyJJCRc74EUTyk4MxRx5n2PAr4fr9ZxqTmfsxboepzxiT6oMqR2jcJKrB22KWKofwoD1mS9rTAhwsCAqLUVG",
  "key7": "hwEZGDVDNkqdku5LPGxoCXj4KoWmHNqPQh9MQgitBEW2Gu69hCgymH3JUKxcPtkX3huYouWTzrcw66HzTob9nea",
  "key8": "DWsrD844XvTyJjTzoTyzCDWXSkBzE7QhbrNVBd1iru4x62up97aohp2hPfmrd8wE9BgEfNb4JxoTa45JdQkvUw5",
  "key9": "2Jh8Qyb1af3GsPKjeidzFaZZ18qqh7hhn7z7NqPeyVJWThde9orh4G9oQuiqa3ppcKKdzQLa4fDha3affnYe7bc7",
  "key10": "5d5qBhErHPFbueTvM6PuhkEak78VA5CEJipQC3CYYfBvj87xtLMh1o8VxDmzH6rBqznnrMsHQCeRSHhibRMrsLG",
  "key11": "5KRhFT4tVVrKHhpeBsvsmhq58ncbXgpcFSNXopS5uaWp6o327V9DqR79wtSvBcJhj3Fh8QW4jTrEsP1QiFE7bivi",
  "key12": "3cWgSVhxZ41PuXDZftH27C9Fjh1ZgQGjth87VyZHfoj1GpycU9vsFgDQzM1o14LLZhEjbf5nYNEDoNfGBhd2nDsL",
  "key13": "5wHucc19FPs4VUHVtJhu85jPpPA57CJ6tHzbFwLMz859fRmNUK2q4VraC5DzoTGGEEciD9DXsBeg7ZGMSamZLFYC",
  "key14": "38KL1uakW3eHoCVLG64GBqVWzPZhQzmMn1qrp9Ar2wQypNmSZP3PzZdkFQYiHBMpr5RuDp1C7sg9pnjBasvUzRKE",
  "key15": "2DpDrang7Y4vyBLfXTFsGudhcFrs6AswWQjLUGfTwz4NEboXe7XM1Z7XPcQF1ocETNqHChc8HPTbuP6kGoMr6DsL",
  "key16": "TcXzyGrYRDzP9c3jCsXiAgNuzuk5DwsH6NjpzoU5vWEDN3DqEZyjaxWZdNvWERikUwvygvZTG9Pki6qCfYjY9zv",
  "key17": "5ph2Nf4QfTJuPPYG3fPgsdBwMDXPrBd4nMDxUPdPwin9CznMbbDnyv6QYohH9QVnfK2w9h22BDisEshKYZTaLgLL",
  "key18": "3juVPSwzgTCu76L1ZG17rqwykjzZrLgx43s9vvoUjTKzBrteFmLECJuyesJ8hvkujzghQNccW78e69ZRStC4rd7o",
  "key19": "5GMYrNRDqvm6rG3B4dHMGBLews9pUqsBEcRNwzf2dZ7Aw3QA9CVV67AhbmhiL9nypyAMjtB8bUSTtc1qNYsg44AQ",
  "key20": "63dP1p29EQ8xxVRuu5vgu3chp6g3GU3suqhGWa6m2ATwxzyJDjFaK4usJQzohfNoBsrFp9h7zLRDeV8EBCrrdbb2",
  "key21": "4WURo5pGRMZqgskeTdRfzK1xdx2C2oKfTbB8YFJ4Q6jEPA2yfkBCSNcLJgHogTfuUcDy98bX54yjwtFzkk5uC6om",
  "key22": "4mavxZKHHKXV73PhUZ6dxBuTe8YePHAYYzMk8XWsfHCvXLZVqh2duEg8LCNetL6h6UHJsqnFA7nLpTj3brGoQJJQ",
  "key23": "5kKzQJaJAyCAD16VZUGoYTTY5pCLSsXkrCFNmetfiSqrnX4fvpWXganGKgYnjvn1nDZyEJFtYHjsSuwiiR9A2gTu",
  "key24": "2jWGNiY2ddKH6FGXmbbQUMzLz48qw2aJUcP1AwqBawsUmjWvX66GrmHrXWofgkP1UWvfnYaFVfGzXZPkHgN3dWcR",
  "key25": "5VZF8F2rzDBpgRzHBJJgbWWJdLmAKXXLLqzYHwd1iffNy2veJgEnfBQ8hd61esXAXt5ayQSygX5zv9ttAAQSSB7B",
  "key26": "4u3VspEQ4ztKYht11FMXasPayqHxWFEwbNvPu1Rr4sPV5bLQxJmFe7go442JRqCGERHgCTzm7nJEc3ijs7PcPm5G",
  "key27": "35YHvmxYPq6nPtMi2EQ9DdKC8wNqPCdnEN7ZdujmcuTLTLrA2SvJDSk4Hob8yJmTG42CAME1X16QAyKaVB2ue88A",
  "key28": "2kV33gsLuyfFUagwHYsffe83YKY86g6DmWMAssM9Poqaxtn2w6BiQWRJcywk8NVPEcYsUqYr2H3SAEHyHijjBhMX",
  "key29": "4YTAima6WoLZs6Zw77HvLPwXR2kF7CjJ2CHuy3xfTH4U54nB7Uo4qHASYEsRtv1wpTyfuWpxS9Wn85mqE2aJ73Wc",
  "key30": "4PWhs5UmxLp1DcSWRa1kGShQ16GvWASSMW3HdzpYSdZbunMvVsAZiRJJBuqqfRsahF3keTMn2UHkh9UWhwx9TPQm",
  "key31": "5eAHCqFdD4yo3oRQ6rKjXcBQX7wZqZNzMFmmyJmZP7VBw32QmRntYrERHVjSBRxG5BxZWmvcWxb6QoLHWpoNmtu9",
  "key32": "iRs3yeb8bXwXbkzXAPrDaNW2ohcdDTogxKnN6vLqYYGozwX46pbf9Lnt9w7ANYxzV6YJ5M7gxzp9M13g6pvXmG8",
  "key33": "5XzKuiYjRRat2yvs7vFp64e8MNguz1mtsv1VTff2Uf3UYuyGiSRii59X88qKVfRBY7qniUb1jJtyS1WwjNxwxZby",
  "key34": "5WPVin1LLGL4nNcrisVrAXNxoBTGhU7dfsTUFFyeTLDkZgYG1sz2jTRfcr8WrGFov3jcxfgDZiU4AetU3KeLfXJk",
  "key35": "59xopoNBoZeiJrS1w4eF1EkCWEh4S6VAsMVNvsUDBPAams6NAAZvMsa3NUi5qPHFN2eU9ErSSXoDdcCp55cWU2bQ",
  "key36": "4fDokCYfZhAgTF6RdQxZNQNQyAE4XiSh8NTjJihE6hiehvCw49aT6QUvdEojFhWXbyWqZzhfLR7xtP8MGxoVjZ5n",
  "key37": "eYPSFbzTLypgBgYFBS25UKzKFeqX4i2xYKSAgCpFJbimw7ZujUcFQXcmLjD9uXifSz2Z661beu2L8e66grrQVAB",
  "key38": "4vpwuB8a7aKYuYjwbyFjxvpgKBocToCNknTjPCXhsiHp6eW7kySYy8N8b5hAHKgBTZugGoPvo35cpzKeuV5JbAxL",
  "key39": "2V6CNeDnho2g2pxFFGZFvMPsc8XRLrFPxaUzqGG8ZCkDFCbnMHgQ8CexsnTUmoJevzU7v69tUopB68GcDsET8yx1",
  "key40": "2vkEV7yKWBnT2715efHhknUKw2WSditiqEm4ugCow87H6PCnjhpwYP3aWFLu69U9MxecxyxpfVVhCwXRH7xHkY7S",
  "key41": "2XUHjzgP3jmHTq64qJtWGPJN5M7A3Qa4NffCyyccCvVHqGuj7agnSBrhYU7sLpQZQMTEab9Z4WRGMdAbYozS5YEQ",
  "key42": "4MLHFe1gupurF4ZUkZFFuZSbprm5Zwx6Kn6KPUyB3K7qkrnNJKVfis8oDrHfrqLcETEtb2mkHpxP15anRwV3xHz5",
  "key43": "jf3htW64xdn2W9xWNQtRdDE4M7mBjDf6o3zT7ZpoJKd9m4xY8Yweu91ur6C7jM3e92tuKv1T6Zc6WJBtWEzudSU",
  "key44": "2QmYU6N3KD8HCKor58nU3h11JYeHCUGsMfTyXPpPmUDrpiuHpDdZPzvwj4bQv2mA9MWAnaGFYkCkbNA8sXLepd2C",
  "key45": "Jp954uofS7cXohHhMvE4RP6RSVmjY5MyXZZD1dqdjwhSFKtYBoD5CjwHzdoABsQ1bTLdh1g5zVHWJ9Nc9g2Ps7V",
  "key46": "2xRJpsXxeEPPyEY3MWqjiaHiV4pmYvjAdX9jL6vmiMypL89Xh7nyrhFptRUQtfLK17V6hpuCY6hCRp3vimUTbSY",
  "key47": "25WYaDjRTFHyv9scUkBzJFxDh3B6mYQhGpM6wAHrTZJMPkDc693ZHMoMdWozojvsXe4Do7TyxVEnRweBirPoww2t"
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
