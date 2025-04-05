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
    "UcnFC17Azvj19Bd1GrPj5pAAnTXisDdRdSNnLjo2dzYS35zgG6nP8fxAQZKH4U4u4vPcp5XkE5Wd5wf5nkQsePW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xSvDPn43HFmgSTYSabUPUhNP7ojKY2R33YQ6QTveGMxr8y8f1BhqSbXDU12QyDjVSZCsxGZuUg74iVTRLWea8iG",
  "key1": "5KBBiHEeTecqocEcCgXk58YZuEGewD3UZiKL8f7HETBHNCZhFmoiczdrW2Z22kNRH2RGWCMvX6pr2RgRWm9qsYLR",
  "key2": "4GLPUN34Y68JGgxzUYUVmynvRhVNBCrVaVfs1dRtNpkcuKNf2o6AuZtU8KwxCgpTAjaqLAFVpoZeyn3gD7RxWSr7",
  "key3": "3SHuqXV3pkMTGGTx4KF41WgoLsDhRi6fW7zW2yNJwnAT9sfcfvPtNDBUbsshb95GrVTQQaozPpAhePQAAJsf7FWy",
  "key4": "4WsrztxfhtpQ6ZXt1bwgPYHXH2PqMghsjmDBXfz2gRCG6d4SJEFmSoAu9RSuFo5px1uJ8yiMK1PSZb9FXGdaLeEL",
  "key5": "63LV7meZWt7YyTgrfAGUzobv94gMizkY4KCiEBiZtjbbhghc7mDn1gzQttt6imbLhQtz2KRRY5A7XL55E4FrCudz",
  "key6": "5kjYL3VipXWV2D8jPKdKvSd7fQ6CbkmavRb58arFyMNUQgCsNR7kKCxpRawsRDWXyBNHsmSiyW79yySrt5mvSfaw",
  "key7": "2BUUHdS8dqZLhTvd6jEdRp7dqFC6GzRkqw4LyAxpRxbS95UhDEWUN9CTVeVYGwoG5GCYQZwRA5vewzLAMU2YsRLG",
  "key8": "3eJN4MWbc7iDRic23SGtwoDwBpP17gYyRgbCP3gBTThxPdhup5CC66jXmgPihenSecFMFBoDyNamEsvuU8h7Qyvq",
  "key9": "2UGbu1yS5SgGPxJMj7U4oZwbHFv6ZYqFk8H5G6DpPViCK7zfbQvd4nCAtTYokmQmufPp8qaJPCGtutabqSTRHmRw",
  "key10": "5Hme51iuqni1UHsx1R31SBA5x3QZNKuf6XG8mAX6hJSWLYTT2GfL6h7mSqwmmTqRJX1uNWT1dpvbdeEDkZM5Am3P",
  "key11": "3kYvRZGGo3QNe9RAQPMWcUKiZCpUSHnCi64wz9GLhgskH5iynV3oqBwgnbzy2UY63MExMuQAt6dhTTzKHqrc18mN",
  "key12": "5mUyJfzoW1Vk3vZc9fBx5Mqx7UQg3MAYPLrMGgL7S7oA3F9X52EfB7v3E3514ZxzqM21WPcTcbwZEm7Ky8ePQ2TC",
  "key13": "4pnFDpnenscsvT7FXig1uMzSrZSu3S9YYjfwwhN6MkRFV3iUtWegi6n633YkKU3gn74N63daLiZaG9Ur8xqdjavH",
  "key14": "31nEtb2WJvLqEZn2GNz9XNcuM8KVFoCnof3NKf8Mpw36hGL7h8dNyD1vx1ALfm1bZYB3DjoVYbH5HYfKLod2UF1s",
  "key15": "4eU6rXntGTzYeo5gAiS1FExHtDcbbwCbc8FTGprj2jau5tp1vWc73UuDLGKkt85X5SV6srxCrQkPdKvYETLVnHHJ",
  "key16": "3HmZmgvCuDHLgGM5aQ8mqPi5ohjSgi8KjgFjLtQjnfhAbks7MqWp2Q6oyENvezyainPgKfkRm4Pk326gkK6m3iV5",
  "key17": "JyXrwdxchMV65LnDbFRgrK1dQrvE9jnLhjoxTvnGr8kMYUShLvPW6AtmtenAusRr321eE5cgKHik5zr8xi6uMTc",
  "key18": "25dadqdZrECLgMRes24Dp72W4E2ECwbyvpz1yNsWtP62qbTduPGvsGzERMu9tYHggMUuKmG6jSnMuFgduwEG8ePe",
  "key19": "2ofRAKJCyhTXPCmubKKESMmUqZh4jGsPX6U41sSqMjaTcvSQm1iJG1y3P82rCnVZL6qt4PfFrmWk2qVuVM55PftX",
  "key20": "2iWvzF7oU85ze8keaA6tvhSRVgaTctEBecaAxX54zT2YGKUokmC4swQy6Wx2NNs7iyYRgH9kTUmN6jnaWQGhZ7Zn",
  "key21": "4ckEqu1nBM4nXC78RZmSKMsoBsFrxy7CbP1cFUEaCnt8ighYJFLDPX5jsbfgJ6K7g6iRzhpPyMRXk397Tc8eZzGE",
  "key22": "2t1e7nfKap1qwfDteB2kTqtZyRYU8udEjrS2HrzDv6n4rtMCUVM3Ab6CfBkbL65pD88ESKymEMkGdvAHr9TUJ6pd",
  "key23": "62tPmm53wCsX7HavSWA1So9fkUfW5zuGNnaqsZSGXEZtNhDe6kUL99zfmqpVb6ri7JWZbWUMWz8DMdD8aLmXeUW1",
  "key24": "23zogyVwyKJFhWuo8eWh2igj1xAx8GKHfY4ZYogdBRmWV4Ym3bY7FDKSkbiwhgCXJwJVWe6fqGjB5tsc7DF6ohXZ",
  "key25": "2EEn4MSdYiML3R5juvKg2NoeBiygKhtCieoMW4TQL1vV8dvZXZfRofLPvzANLZXP4hCD71Ni5j8MpFFUkgtm6Jdv",
  "key26": "5Ar42ssdh7rxGpmmGPR3LhKTYYqRhNffpamuPMjvn8sYu7yiKuCAPRJUBSPuUYZNjy2RKzd8CiBFBHMp7kK4FNwi"
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
