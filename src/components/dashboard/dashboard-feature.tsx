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
    "4uqMzyWxDBDjQduHWF9WRkvDiw3qrUvc4ZLTe97AExbRU5bxkgDKuTTMYwVR8moL7AEabqavVsPbaADhGqH8VsJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63evthobawAahaHEz8pdDnZEtq78FssLKapn3cV1CJDS4bpEcoSTpUa8ksB1qd2XcNQubhNyCLmUXB65Kb7Lrtsp",
  "key1": "4MMH3puhbAcLRZMoc6fMQoBEhDCWn5SyFsYRDPGSgjSU4hob1A5Zh9NxBPoPKBwRkwxznqYELmFpDYQFPtGo8bBf",
  "key2": "gsJr9VehLhNNSJaTLSQcXJZ9Cf4Ax5EyvRnik8DnwNBxBEdnbTgYTg3snJpVDXSbfBn1R5Ci69kiXhESVdKUJHv",
  "key3": "4kirCvFV5VkUVnSGKonvnYYyikTxN54PWP4KzTsNvL7XPBmHtmiyvJFTzQEaDs5Qm3iGzyhS3K1FrdamnCtrxUTx",
  "key4": "3UY1DKT7o8Nj1S8eUT6cDKLjm1Yj1RHigiT1WBcEdohAxPB1Q84fqtBBDrHYDyf53m88kW2NTkaHRtQNSvuDbWNX",
  "key5": "CnR6BZtT58eEDX48uicAxZV2B5H984Adtay9qWhqUH3C355pdowTVUobgKwiNT4NSFVPphEMP67ma6QevHQJUZR",
  "key6": "2o6ZSpskxawHPdpo9bk9C5XjzaEbqrtjJejjx2Unz9WHyiK11GrBnB5ADfSNQyUJvmSY2xHZUfz64CFh5cV9F8Qs",
  "key7": "3D1oxT9FhCjkYfTycSTdS3WXvCF9qSktp4398LzcQkBramMkiy3MKou51BYd8Y1SGaKUFDuHbj85LAbx67bfpdV",
  "key8": "61ZyEf98XQe5XuvMui5iYYfRRnXRS8a5Ke7492MAUse6EM2j6rFZGvApdWYo8TBiUXEwDrTc7geQsFxALxaeqigf",
  "key9": "3pCg2i3eHwgX1ixsjN95cZjc2BLp68ZxNTBpp1vkwnxaE2Eysqm4tTSkJNnGegS3m5YqSSNdQf9s7KXNkdFtxmRz",
  "key10": "47C7G64UBMvGXQqf2LeqcwJWwPtUW9hrg5npHYUg7q9cYz9HZ8BXDWvk7A4ZYVsUyeWkngc1YZCLJ7m4JYhK8oG9",
  "key11": "5DEoiDU91FAgucWW7nchZ4xGhkXv5LW4nSfiaVNHfHqaQkZCtKVWgCRy21yT9t6iUzS2umE2bFeA8gemcvZLwVMJ",
  "key12": "J6Mr4Jec8LdZ6JFejHz3M1PHrwRLhtCgEV3GtzUHGncesTnz7BZiWKaVBaMF6JRzMSXTsgTXpiE1sjMoiB3WGmt",
  "key13": "tELFDCekww1qWzJxRyJH2XFuZ8H7Tn1hnNmkbiUaJzLCj4WGZR2RTEHaQZdzXiDqit35UEcWrwWXCqWVnp4NMVm",
  "key14": "3g3BSs4Gm4nMX9fKehVfsAd5HDFWidrMGwjMzVD8uSLT5rVbeu4obuT9UQu8EH14xjG19oJQTuCcxsRfnGnX2YY1",
  "key15": "GJxwXAWXUGdawrxjpN2GNpxeMdSjkLf9fmzqsr8j5rWux9aHZsXT6DboEZarFYAxxv9MDvMkLnoRHR2dUase16i",
  "key16": "2x3MfESYmZtizeYwv5BuFvhYG4UyDMqfhokGNutL6DcSaLBtPKUvMLFUMfUJeavFJkLDcffdnoNhSBbdtARpvWek",
  "key17": "5yLa8yb8NiGqdpRqsVpqXpWNDJYBJvmKpbQWNjLdn4UaeYwSzDwoe9DkhPZfG2Gs8EqgCLhh3mne6f4o3ajsD85c",
  "key18": "5gEPtbCSn9S5BcaGqrsDFBqiN1f653EwwfkxDAbz1nECHpAhZCKqhQY2dt3Vsor88AS3ZHpGQoFhFeU5zMPyMpKw",
  "key19": "EcDhasb7AgpedWwhgJUX9oU22e4xwtMcmcUjKQ63howjk57UTePCiH38E6pGJkPM7ZiAdZR2pbHr74yBWzZkovi",
  "key20": "2mEvqLeaE5HS5xko2jeVc3M5GD5rdwVBE2EnwQp2raW5oFzSoameRoo36Eo8PdP6G3bE6F3DKMJauTa6ZFj2tb8M",
  "key21": "3nioQLsz4YAkbMiAXrN2hkBc5LLx9AMZFF98U1tF3SX2TVTAyXKZf2NFX6VkrNwuyAzpgpSVS72hsCKNjGjmj9er",
  "key22": "KLgFhx61MHYG6B3QfyVMrQ7e5NSUunN84mb7uJwDjMCuq1iKWRGRE4h59rVqNcwFHp8o9cc7NZrygCAbFPXVf4f",
  "key23": "2EyP3kRU39nMn5fpSnxSTNwWA59M9CE21yXaEnLp2oGkTkGZustbv6EYGaTqdiwmPjz6tUm7jLwB5vQZaeFo5Cyd",
  "key24": "2AgVXZovbuaKdMb5DkVJ6HomcuCLCmwvgmKWzwuqBCNqC4obkeRSRatnZgWcdNi2vHDjqMdfrRdGKrQGVFqxjoRe",
  "key25": "4enHk8PcMGDjaY8dNuXCfusc7BSEi9UL9o9V3uwCjfueE1HXzz794gZ1p5BJxrDB1ddEw7qnJogtgpanLRNRdq6G",
  "key26": "5dXsnE8KgG7F3kCec3xmrZTHRjntKrgNLSJ6xnrw4xDcjbspM58SFeZWCgqFHrqUYkMbuVGgyhNv5jQYXXsk5hEG",
  "key27": "W6YGzuQNtbidp5Qjfg8jt62GzuAcza97hzbJRHLyQy4mHjZkUykZxfQnhk56UwdeYcnrSQQXgbPi7V9NkVWfGxu",
  "key28": "3wg3YmvJphGbMHaL13KkEVXZWBMQAeHExtooTDYfusjNQrQdJsBmCqnfYQ3DBTxLxqcs2XTGzn1vcohGTr3MYoxh",
  "key29": "4mXi8AEdynGcfqe64prbgXjZm3adT3L8pY21C1motuzDVWQF2GU6zyiddupy3y8eB29p4SZgjjDdXCPd4jkMc9pc",
  "key30": "2oGt5w4bfMmtrRoyxvuzpVQW9LG54yaeDX8mPrLJ3bKTqZZRkcejZZGURk9WJvF82vg1NBagyWfXTLapskFZFTAk",
  "key31": "5UcKLE6z7SFdjpdPGkArYuAXquppVBEt1y9X1hWAWVwD4vnmn59PfsJPLA1my1hNed1DURGrCWcifsXLY6ssskNz",
  "key32": "38Sq24PnmdzFEUwFQwn4tJMxaEBV57dBKyrsF1ebV6fZ3ybw7SuwdZF4LyGrxKPpYCFoyVgxcNkPcvFZq5GgTono",
  "key33": "5dt5LeWp4hUz4yPjowjZo68iYZjo1mVFXHNT2tJGdFo9RyYv3cpQ1F4gXcnYSiTr8hdxUoTHXRAurLMC2W84TJYm",
  "key34": "16dXbgLemppYc5HduMebC9DLCfigapAYuHg28146hpVKkbtGpeUrqptCdy4UrxszP8MKfFEwuPH9gWvGZCzRGhT"
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
