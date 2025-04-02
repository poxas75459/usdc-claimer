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
    "3S7Gapi9x5x23NXH6p2sh65iPgitDCVDXu3PXEewsjVgZux23LyHA6svcpexvoKrDyjJKrFfdACXdkDE1NVzjtfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rpUMZdavjuv6A66rfqWQ9hmj6hBMjscjTVpYczwgJ7gkTt5auc2YxZJZ3cppkesUrJPLgQkzii1ZXxfpoXt7hfr",
  "key1": "3FyTVxKFnafJutntZ4hZXG5CesxHokVx4ifkmRByAxa4by4UKo6jEy25ocTLusr71QwqA25iJimbkZuVMRMLrLoi",
  "key2": "3LYTXubMUiU7ZUPART8uZNmHrUBpxFZaLu1fyYQAvPiiALKNVkS3tvTdGwoywnYMJf48Z1STHPuXWLMSRS979n95",
  "key3": "3vsKaJHDVb4i9nTkV291A62gMKDvXcZozA7zsmG5CiG7vh7ErZ682bjAqkwyLDskQ8CoZ4TMgGzTFxvmKgQGVyCz",
  "key4": "wCatSm1TDwYhpazMLiHNQ5XUdBup2UYg3fdJ4y8EAXo1y8K76kJD1coL3WAf5YNPnhpYg8fY6bqyGYz7dFu1hzm",
  "key5": "5DFsri15vhrbP6NmFwy9gp3Fy5yVJ9CbXMXsgNjG9LqrorPKTxjpxxSReM3QH6YkLpxxFnpqNinLJ3JBNDRX8n4J",
  "key6": "5EvMQ5VH1E4BvMQmMVMbAJaeTzLKe4FzPXRbLUpJWaBiyPEeucK4pACXYuEUXtwN9eiEQBehPzGdz649bLF3P4iJ",
  "key7": "5At49T9pxd9nF4i2A4SMHWrmcMoHC63Qg51EMpWQw54oMs5kGGDwKHg2fMYk69b6jNXsJeRAZSmMiZg278QyVhZd",
  "key8": "4RMTdGzyJMttVBgPRumDdpM1btcK9hYviAon7xzqBEn21KcpYsPGoRg8AgorHFXbm8agSDKumhbXmrWBX4PhYyEM",
  "key9": "3sSW5boiPkGGahQmGYacAoLjYudJ26AGHzSN8cMByKcHBWuEiwGXP4a9QQAoXEjzLwJxbWHa5Dx4XR6dXPNzeFJK",
  "key10": "4iLnTfXxw3ed3FmwoX5shgVyFpzrYNuvvxiTpMeZqLPLKk63nZHUQFZGe6Mgn59nqXcfkEvJS619AuoqBnGGPXNc",
  "key11": "2auBx7WWCW6KV8cQbhMYiQhjqYKp9fkTARiseUpM2sJdSd3RiifW2DkaaPkwHNU8TSwZ7xNFs6BNbVsviHVgmCMJ",
  "key12": "2fnZ6dmPWSJx1n88HCQWCkzQYb26PD7TCGpoKjzmhPRMx6isiFNGC2axw5AKY5jLRUUDbGXUi9EFAXhwmY3ardAy",
  "key13": "4YrLE1zaewYM6iRNvEuTYn7LYK78zp37fUhrcyKQ76FUPEcNMo3S3ZkokUeQhEEo6W7FQ4vz2Gcf5bbJkp92in4Y",
  "key14": "65gREVXgRZFa8h5urQ6tHtcwmFaccEHNNh2fTduoBw7VjmhaQoCAKBKFJHDmsQERVMrsB7yjy6Xpe3wbxeeL63L7",
  "key15": "2dhx5SdSSu5vfDupzwdbazkyygNhF2R22GBHqrP3goTX4U5mAajHGCgRKFr7by4YNk2xQvcntbAzr9HPzSbMq5dV",
  "key16": "2hAAirpcq3xMod9myaoyFZ5dVDVqrLmC57VgbY6t17tnE9e54tytc73qqTDWa39JtsFirs3BReiJDi7EeTbpoQDQ",
  "key17": "3jpBjKdJoSWEUEuNUHSXJcsDUYfhPBeCS3HkzsP8uXfFt7RVRRc6sjCfNcNyaMGB6KeyKumGScFuYybeeHzUZfFK",
  "key18": "3f1zvdjk7dqVwkZN8cQdm1x7rQxUTSXuJomXvacvW3Mg7N1cCNXHLQR3zw4Lz3NoQWmwXX7CBp9RSQCgKatQrFPM",
  "key19": "5Lk9m6CEmkUKuvHxYCGFUczq2W3wB3p528vKEbxLqiL3RDrGRJ5w88GdBQekabYYwsXvF5u4hcrnLVrm5NuvPWBy",
  "key20": "63GsoaAFa3psEqk6issKC3mi5FjZsF7fVqDPXSSNf1DBgfc5ZpdPtnuA35o7GunyrjZFeNdCNPgg39avewAW6Lia",
  "key21": "3ADQQpWGsj4xjz1SfoYgz9e7kF6EkuYJeiZL8gqtbxwF9moQewrqoQzq2feyEZgqTcf5EbtnXe2wd7y4nqgp9Rso",
  "key22": "3oh4JhGEXAKzEqMwj5g3N3sU3eMkXh11vrMWS2s1VfmrFzdcdam25tXQZ6ruGZaN2ChEhn9yVgVQd9g4iPiMihzj",
  "key23": "pkbvefbE6irHP2XimfGZ4ENntUHzKXwKLX7SnKmLXEt6DEppz8BMHXNhoDSByjVzX1Vxxgx7gPNHbygMsCNhGUo",
  "key24": "4Ft2LdabRHz69kDNdwstwmo3nWa6M8LnN26sSFWhsvn29CvfLGgL65isYcQJzdNNwJvAEp1eV9Xe4uhMKuUdjzau",
  "key25": "49yXgjYunA5UrmYvRJLqeGwpA7fsLN1DKbznN1e4KYPXEycbF9qdeBpYDJ9gBdM1E6ahS9EYTaXfADQzFDFa8tCQ",
  "key26": "4gkNLUrFaoe4rWhnUs9maqFVAZvXoEchsPySmSWLih1cFDX1owP3C5d8sYaRXiu5XjA1Dv49WVrqhd47eCspovWa",
  "key27": "4GqYhdNaPn3oteYW1Hsj2RcMjKD9pfHN3SFkaXZYBFANZ3yvAe8Sm6pZpkYQxjUrheFKbvVz7Nne3MemHGqWRoxK",
  "key28": "2MrrgVoCzxDoYu94BLQHFi8wLSuFVfBVPHTHhmr3jxxx2hPPdctARXaVJR7bUUmaUujwwNZrimnWwNYidTKf1gqh",
  "key29": "5mB1U6ThiFK7YeujTt8PRsGnbKD4KAGVayspqyoiYjB4cb1mvX1oJJ4mrDH1HXvttWwsozNmJEr5Ghq3Z3DigisG",
  "key30": "2Wq9CSqCY3Zg6ADLwBJi5bL9uQqqn5zof5JNeZR6YC9xSLeEPYCA9B7TMrbyEkE2mdqzFKK2UysQSDjvJHScHDb4"
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
