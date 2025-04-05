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
    "4joKhvKctyFyLgixEDNCLuguvbJB6Z7YiLXegzCiMeXZZx9xiG5c1SFsmRPyuc8rBDvJ8qH1USi28p1nzZyNwTuj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yULg2aqC9Z1SpgyP7txvRWhs2aD8TYd5QZoppkESNK8e12c2VQoq5V17GziYjiACLi7wBVQ39KHp5K9mPx186XS",
  "key1": "25Leckm2wy8VpF61PKVywWnqxoNDtnB85VR4YrLcMomMZNYfEy91ru4fd2r3SYdNULgWbBMuWZe5urYEP83P3Sau",
  "key2": "Rhmij8ZpB5w6kBy7d5BcepQVrESbRMCpiBgpf4Vnmi2xP8BvxEypKKDiJ2BdXJJ12rz5mFVs3pBWnYDgrPzwjLx",
  "key3": "3ecML4jruUsnHvinGG5aLmFTeUWpY15pc54avKiFoKehEYmnirZZUErUGkqc1y8swiyz2yAAmi8aK5vmdtagthTp",
  "key4": "4hPjs8b92o9KtPrYJMhYyarKbXEZdpa4rcbX3NYHcU9zWhycKieNTMmEbS17JVT37ojx1GrWmEcT7dB9eqLA5ZqK",
  "key5": "keQ4vvek3VgyjP6q4M4E3UTSuA1kpa43Mg1fJzp5eKYY38afCgrGkrsXApG7BCYjhRzBS8EcePcpZkHuxcmzoBx",
  "key6": "5Fb4GRXgtHQTGZXrivmLLSBdePhSQktJGhUUhoDJJ4SiXqAgpmKVxcLF7tXy7p6y8SpXo4nahq8XoneQ9Bba8Jcx",
  "key7": "2xq4U8VZdvHtMuV36gzy7HkpSnosGuo9MKVFwNcq8x5i6ASchzXSRzLuLhiFKnnUzBXXRawWFctviC41RfX8B83e",
  "key8": "4at6qBf96PSaYdxXkW8MnL6ApWkNtzxSDrtQt5A9RR53CXn1chTaEhwByt6FL4mNfYmj6R1Pq1SUzyxyyrGZ3in8",
  "key9": "5d75ZTZnMkr24pqEt4Ts3USLz5psyVQtixLRVYYAhfHdfooK7kYmLjDyR8qsUaihF8a9ZA36xXxLciSJA3mC8zgN",
  "key10": "5Zy67jw3TfADDsBX2qHSW7xpz5sUfFJU4dEg9PaBUSj7o3HUzpUUkCbXbYtLqxKRxGZySepoTnmNnpQVA64TAw92",
  "key11": "5QorHaLAshV92r9TaYC7LeaNxN6vn2CXTFG2gfEs2P4Q77Gyp5djiJZPtP5RJrRECQwzyuqLvRBz35uRBr2DVqDh",
  "key12": "3mPLDbrCTgf25uF59RkuQTRbSyPUCGnC44H9adW8xnGc6JXKio5nreC4jkHVNnxyCgWRmVDj26bYxw6UfpFUWfGo",
  "key13": "DkRbSLrgpQbirAUy7rWCoTCyVtwnWxvDkj7n4odoXuvUXVzDSCBuTCbdDzHixti5saSGDfx7T1T3zEpxx89bBfT",
  "key14": "22vV1daNbrxxKgSKk4rs4gWw9r61VUjj4Hf5rwQrhwgLfvi5ssDzLMDuQCs7nSjmxDKv5GFGdeRLLv5uy3zyWQDu",
  "key15": "33SXMZKU1JhcaXkvy9b7JfD77tuvRySctsuYzu2TWk7i6Re6DLhaQoRyVxAdLrmABJgj6Lyzh1GK7KbPn8Rxk27W",
  "key16": "356jicJnkVXM4Uw87HhVGVjXEFXLNUoAz6WBKPjj3pGRqQMcjuqRQdXFfN2k11QEmU5Uh469Unck2M4YEt6Kyf1F",
  "key17": "3Y6osY6AUB7vCdPwnZzrM3BjSmYpFMoa3pHzQgGwWT4LbgsueX8YzGHajj7sbjvfeHcNtP5yEGfiB3qUCiXURd64",
  "key18": "2UqMii45jPY4R3CnBDxoei9LSaRQS6Q6DpJiX4FeDpwrCN1B2k1itHqMgYieKAwzpWqmKzthutjYJKb61ato2h1V",
  "key19": "2CWStASxasUkshqnomCJV7GrJMr333bSEuxxwNv8SPHwsiQoY1fjDa1xXtYuCDsGeKD24TrxTz2vR6P1Xvr6UotR",
  "key20": "3wkPvqTfDJTURN5KF6bCNdCCsiqbCuzEDt7p1QmGRYtda5Ge1t7BXdartBGJJh47WUJwRuZ2QumhXWDZAsDprcFk",
  "key21": "4m56Lvmv582es8dGGwJ44wQqCfV3gUbgYfc51RMPhxQyFc4fCtEAQ9rueyGJEZMsF5ethUwAso9vt6hbJGZpqCnh",
  "key22": "67S2ZxxiWbCyKEEktBqKvdEudNb8tdaQezxLSDrVMH4TpuRTXf9Dt48UbNqPGPFKX6QrhoC8RWEJrMxyHhepcv4T",
  "key23": "3qFTxoY3SSGHjejHwtM2ceuoZ5H9ypjPK2mXCtEuiMF69JBoRSqgCT7LyJa3Z87uMTeuuy2VZj8iv3A9qUMKt1uT",
  "key24": "2zzQbdbxi7dAaadL2cBeiFZx86kRRS1s6Fud5zurYwtjyVdLG9XD8cx81ptcLiNXDk2pnvfXYvoWD49xUpdgBCFs",
  "key25": "BvULLFAhDQhV2D7U6tMQ1PzB7Mdiy2FEy2c7ExnMga174fmgTBKFGEJ5JtSPxtZMqNVzJkqCaBoDajjoD5FfVMu",
  "key26": "2evdY8jGr7xPvxo4Ksbo9qCLFwepcjxj6inBW6eh8NEM4vuZvSqu2GVRVcRKaYgvcpUYUsvZNbwdZBeXjgj4ZomQ",
  "key27": "5i16LHY3yMSsGE2SkxRnVzBW8g9WvdD9fp9frQThHsE84E27WLtjLbiZ5KsdbjGekLWy3hfWJWiFgnwUSHoFDZHR",
  "key28": "5rj5zAWkjH7vHMTt5KKxJGdo5qTFLDf6mkQw1AVsCxEW4y8xS1b1c3ENfwftDXcvqhKoTHuQdfwo5XvkxNL56JDL",
  "key29": "5qzwdGuye76WJuKim8zirmh6k4iHToa1ov9Np8T5LjPfs5ndEuKDQoYGSwVpGzfDKQtrQFGSGpSJZNoG4FMJVJ8u",
  "key30": "5WTqQAWG2yeJ1DKQfp6Gbw6uDz9XWzw1evpjxMhgsWwUmhknoB1fEpsPYeMUH9SxUmRJQWVhpmcHh5U9gGAUQs2f"
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
