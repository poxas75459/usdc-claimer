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
    "5BawMidUE4YANtqMjsgrLsm4bVW2vUqVufVFbqSR9voitdTDBwonABdbVcERj6urSZuEYUqRi7ButwqjAjApknjv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DxMbd83gb9gybsHe8Gm45yWCJanBPwU5pharTS2X6jhkk4GdTJBfuDtnqChuzEF4QbmmfdkcHLD1Gem9dKujakc",
  "key1": "AAiWmEVz7K6KMCvNxQgR7m9UEKFSjYGQCvD2mfTQytrniCKKCF6vuiiwt9zMPi76mfLC9FLU4WyFYMVg271A6BE",
  "key2": "3bhdcrxP54jVAaWdybYYVngt2AtH7JgNsa8pi3nFM9CntDWLH1FYcPquMt44YQz6GDeU7ZzeqHx4CqDdSPw3K7pj",
  "key3": "FbSuEaYcYiLG5j41ccaAnt5qnPCgBojXWhFu4knkQis1Po4NBWKjzSr7avgFrdHQ3xpXYwmeKc9qs949Trwhubj",
  "key4": "s38cDEDnd517nMABDQAoydHPnPpUnanPjPtNxKWvBJ7mDia5BHAGNCuJVJUAGfNqqqHXZqo1tMiX51Aoqn51ofW",
  "key5": "ipBasvFMme1Eywxm3o6DcgAWKyQhqHxqHJWPdJjFhNUHtCYYWSempjkvunb9xMzH8PaCtMX3EeYU6ePXbuBP1L4",
  "key6": "uRi8jkp6JtozwDaTDk5s2sSsArtwiZyhZTe8gvzqw744k8JWUgXQF6XEJy8Bw66nvoJcnmzoAv2ckZGy8EXoUN6",
  "key7": "5kUG4rdLrdK3fCC7CBeNSgeunohupuympD76NE7iHwdy2Ktat7a788MTgB61RkCTDxXc75RX2GtctmvMhZGMBeyx",
  "key8": "3APWMLmAoFBZDkPsQyJ3dXCfTnnGiDXxXwcAvHVsCkQinJDCJULyd6rzipDKWusxN5fhUxDydviPr1TMsDjDb1bx",
  "key9": "4g4knvBYcqz2aFYSXQF4FaDsx7dZyvN87EH835h8XdgBBS5DsSYDLUggC23dAzzNUUM8pwcsusQzNo5RaYjNzHcn",
  "key10": "vAWgpAB8ZiQkgEsznxLemimpkjw86d4DgFVjtiLqXmRgQw2S5qYaeE12NxeiWfgHZgvnTr2Y2cJ2WtCNEabboc7",
  "key11": "3cyDkSHDeM1dgc5dfiZVCGcSHRTHyXCzAJHDsZxWEmrWKok6CpQL4RfGP9SeCNtwxUWQ85vj9rmqxdJLoRUxQJJE",
  "key12": "2DtR97MFFM3ppm8R2pJ1A5rUiyyf9KauxWvDxzRHWsLQfA2qUpbGRCmwP1U8TdkzhZxmtip7sG2LqjmcxCaZPFDh",
  "key13": "45WDyBFMidCSgMZBvHu53m4jBqiijUGZ5zPS5FPgyMVqN1hUFhuyoPJmNUhC3Wxi97j8Db8rpJfozqyDUZe4ba7H",
  "key14": "2Tp1VWPQgXgwgQ3yCUZFkVd8ADPhfrb4sodn9pLvPEHn7VckBPeX7EVeX5g9ekoPh5W9x7pxVp6gxwGttsw8Cjdy",
  "key15": "5QMkoYb5HmxieWTjuQKs1s2cWU69U2ts7nkpg3tRsJNJXhmzhi8paxAbH2CsUirUaa6YaLe9hnv2VWnpNjYhaK1T",
  "key16": "dbvt9rXo21LqqHidX8V5q8JQ2UFEJBf4hz7F1vwy4Aa1YB5sTyBugzkBLjwuXqmaJAZBswBwpzf2VcyjzKGWiSX",
  "key17": "284fSpChUsmZRoQyHDxvb86sHZfC7Vt6XGaiYzR1aC36EYDGdTtB1fc3TjhvSPyvW4zfagg7WbXqjyX3fhwFCfgW",
  "key18": "2qQqaybYK9gmVcKbPvuHhtXn6otfF5jpgbvV5n86JWSEodk9bR3KF2k18fzAwkcXpgD88aETEKru81ETVE2EA7nT",
  "key19": "4axfeD342b7JVCSLBVdJgrrkjh8cbrj6edb2ykmSTUk7vbCmN6byPs3y2WXUg664MXBYaDgH8xETzHpxM3yzUU46",
  "key20": "YvMvbNed25RTWBNXKGEaa5XAPRk7J8VkmoFYCF5pJMczWp9rJMdT48bhGvQYBEDZJ7u8J7DvgCn8QmfEXoGvanP",
  "key21": "5bntJ1TvqZFdin78urdLTpHPf5U4emEKWCyynVd4doLYpc4JzXxf16gWJN2C852C3HLJ3uKJ7LX31tpZX5EVY2tX",
  "key22": "3As35vNG74p1mBM7RGd3uZQLrizquthzPfWbNnk7zfwWXzrQEJChcZNct4JY1Pxkt2c5q8DYL9YdepgMSSF3eTtt",
  "key23": "3rhigMjfCQSb5uxPi7vkiPDh79tvukiDhxuXHzwmbZUEadpzrkmfQLTpFAHj6RjCatndciBZ2EbMx7xxZnJHcZVs",
  "key24": "4CKBvwa6Mvmg6csgGdVEoHeBszTQYH15z5yTn8upY9bTHuHKLnAsouU2wkMHbgUQyXLUxLExbfWdZYp3Ji9d3HKn",
  "key25": "495ne9hZpjyqYUuWuaWMVx49TEmpqqjL2WDLTEoUKUjhXFmUmBAXwaDdxuQLGLad2yjx6G7dnJnZ66Xy7sBeyHAP",
  "key26": "58NmkArjDEyuYrunC6RXoUHWBwXrjftv2mLQnN3pqxYMWssE6UZGRW4pYevN3iwpz18VgG1bWQozYYH1mNtkFoes",
  "key27": "3U9EvhZkT36A2oRSmEHXz5bDPghYfTbZy3ZsJLpcMBamwwxXTaaDkVA3X8oBvJ2177XE4niVuaBxku8Az1PMJ39X",
  "key28": "3T6EFpj46KBFfPUQs5jQzfmqWWxrQojs3XgzQngyeiHNd7W4dfNtCAkWHCmFxTqVNLrThF2NqEQM2Y2TTntYxKxu",
  "key29": "64PbPvPZuE7efDVUZCYpaYtucgFcjmd218ZUmoocojmam3zs3ZPvCyaDkJ8QBJ1mM3kADKqAYsQ8Ficb9jYBXD7C",
  "key30": "5FJyLgy9jVEkDVEY6bw7vS2yAH4hfBVTwPQQpGjrf2ZbXGtCH1Ko5Vp3tj8Aga93E2ghy6uf26i7uU1EcQE3AtuB"
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
