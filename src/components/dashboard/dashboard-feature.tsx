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
    "LBCZNPnHuA51mhpXrnxw23n3gmdoJoe5P1wvA37Z4wD2HuStVZT4UT26ZUBSFxCpLtySzyKTjRrJgJtpLtyagzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27JNNqrUgFemLVNn66CVzoewXSnzg3USvkpk4M5hqM9gyKTzActaZe7yQBdHqe4on9BGS9Ce1Gr43Rrv4AYRjxea",
  "key1": "5FQ68vwqBeQHtX3DofAn5XVqVxGQcVaUkbXnDN7WAEA35JpHP3gAa2YxKiCzsaCfsFTbwLDQeW8CeK89kJHxeMNy",
  "key2": "27FDYpoTTqTxVs9nDnKfHMsmCf5m3tdaacmDJ6PGua5VTDaa4DnEA5dcJKo63vuoouTMHV6As1bg4r9rrCoGjx1C",
  "key3": "2eazPq7diwSqGpdVqWc9wBH5TmQ5mV5sgGC4r6g89wcq82HmahspWwrSYFeXWmk6CF1A1LY5djEpjh6yaYeGzFW4",
  "key4": "4MyRcS5u1j8QArYCVSNrfupN5bhoxSi4J8SXAoWaFuyFAE7LTt2wRTez6buwpv57peSje2WpUMWACKJP9BwbhZRm",
  "key5": "UKMAxjz7jzTBcRhkKzWtctxAHe2aedcnkHqkWWk2JEgss57sX5Ef7JqA82TBK4AfpGdeHURLDCaDcTwqeSgDTMz",
  "key6": "5ig6vHDpCv8GF4rb1XjkdoX2dSdRr5PkacGz5gB9ZqYYf6eYvCAz4MEqfDD6H68PmYJhbPriYTPzCNxaCFxHFk8u",
  "key7": "YB93QfjBkWNjibXqSTAb7cmzzpmSjX4wj8QumrE9var76Lyb1ThhwvtSkLkAFyZupCpeLRdHCafJkuAMA6axW61",
  "key8": "mScAtnyA2L5q8nxa1o7hQcL4uystxpimmC5nYUbasFEiMXZ8BmozhA6oVnPTKL4KkgcaEgxQAYBv8wK4UyuNQsD",
  "key9": "3tLFwijBCAaWjGSe11LuHNMBL7A8qw6Vw91Ms2XHfLttAauBxaGnk9KQivdMv59bZS3Pi3mZDKEbpA1KgMakamJX",
  "key10": "XxZjVHniHNNAhNJ4Ad9DFLzTzAKdmc6HQmqbC1MfW4DRCuGyF276smeA7uzvNfNxvAUhTaLy4jFpW4iMLNdwhfv",
  "key11": "4V1BW3z62ppwTCw5CwRFaT7bJKoN6EehUvFKP2Syo1YXZpKkLsPCTm2Lz8ELDdZ1syZUW4y6A6ckGskUan8WyiRg",
  "key12": "2xqjXDHt5KyGANQrJkPSFsExdFUyM9y6SwDX6PLpCNm4xupgEQRqNjRbPDqzVuwse86KNgStbpQGgDE8PaLhNoH2",
  "key13": "k1urT4rRy85hfi77aXdbEh6FiZ7d1vm6c6oB5nH9vSe4ChZWdA653tQSvWrYfG5WtRjWfjEJUd5z1Dihj7c6V6n",
  "key14": "2PCtv8GVp154ShSBBaBMb5CrfbiTnwoQMTb7iNoyLDSRGTZBnwDCkQJQYa4JnNNRaQd3LYxAAreUkJa7PJ4QUEMT",
  "key15": "21hsUddwTGuwSQbveaNkVqmFvs2cgUit4m4jeiTyNT79nrCBmAbktiCJzC84JFZYqSyF61pnzzWfzgBt5DzjHCca",
  "key16": "3iZWqNWzSEfGWj2t269WP66m1Mb7ybZJNJbMUvGTbNhYuMC7EkbwJU2nB7Ms6EbvdB66Exk66EceU6DgASVGy2hc",
  "key17": "3h1rMHF8s1k3dfAQ3VpgEgrC3gVJHsvVUuS9x3ef3Aw6eauqUyqYvspzaaNSnFPwvY8zRBF1NzgoAzzUAhxeYUgg",
  "key18": "5TrWme9XQmtYq93WeFncg8o8WD8QSDbhGrLxEcnEcFpifcpBDCUtGGNrYhdpm3UaMxz39dcJSAZLbmA3q3E6HUG1",
  "key19": "YZL4FxrRXwzQMoDFLJkqcdUiaqNQyCunu3oZFqcXsoey7T7bk3UfzFvcQd1VyiPA7j4uYJhiSwN2FsTfp9qkPq9",
  "key20": "2oenEebLKv43vcdXiDtEmz7ne8N1kt7JnyDpT7rA9Z9zYuyb9fjsPLX4RCM399i5axS1NcAzkHQPd5YoJV5VtJKT",
  "key21": "4G1w4eYsjuu7UMu9rFDNDUFVSCqtHWr3TYZBsd9Nuc7SdNbmkUbRVyNa4PhZ47ePBfiFBw7HHaqu57jWSH74JYQD",
  "key22": "wxARK7c7Tp3JSUp2pAYX3b91FFkfn8GszjDfHDbJXFHWVibvtNybxGiHpP3q8GEGDza6116WjoiR5FG1c9taU6z",
  "key23": "4hjDKY8SHJRKbcewmp7ZNUarsKQkt817t2U8FJDqKV6A3QJw9neG8FyvZwUq24vcDot5zBG72cvL8tzHTmh6Cwug",
  "key24": "4JJvvfYayhL7R6mzsYrYx58cxKJWPH52seNRmDRU6LdBXDeL5RBLZqBDgyXncUXZeGL5vpMQn9pU9cLMi8765ukj",
  "key25": "CArAtP7SKqgfNeUWw5qtogebeGA5JN3DNRYeWawQG68iYwMEhMoDhT7U6Kns7zEosNBBE3Gv7eEnEpR9LwoyHcy",
  "key26": "5Csz9y1XE9payT3E3KUnjQ5yiwoBK1Fd6Q8DRpdyHSB9SaHQmBKynWGWrt4ihvHCTitrufZnbnodkkzthYvWgqCG",
  "key27": "4pnysdjuTugK5SP7ZsA4XUHnB3maKFcD87e5jHX5AJNgyJhw4Tk7dhRDgLK2rb7TQo9XYrCPp6kUkV97gTcrfzWx",
  "key28": "45QSbfbbJQRY73Wy58j7b2NUAbjAxz2kr7MXQjepM75spTtPvVQ3rGVa6xNVhWSzDvmWR2ABDVmfsj1Vbxk613JN",
  "key29": "bYAHBbVwDcjfmEVir1qaRUYJ69hHV86biqfWBLM7jvUuBRRairf8ZdkRUDwp9whhFaVyCVK5icdQmXVZxy9w7RC",
  "key30": "4AmLPc7Ez2tSMMyoEZ6YHXNHnpsCfMMbjV1bMTbhZNGbQU6xCHfbhcodcQ2RPCXPMz1p6MNAok3LLQPiTvKMzj3F",
  "key31": "37niTFmvJexsUqui1bhT5qyLHVW313JACYrGbseudSKGCShqeHozbKPqDNjo9R69kqdyf4XQs5ENdXZmivFXNPaz",
  "key32": "618ASonDKWb4nWmVLcuRwvGa9TV648zhKeKLS5cswzVRmZU4cxuf43VxpWBdkptNQAXDu2Bk7SyEEY9sAzB4JriJ",
  "key33": "kauUPsjSWJjERr9nBxU87V5HKqr1BeENUfcJa8PYXEL3fbj9m1aYXQfxqmMqKg9K8pgmkWcrjizehsomcHXqs24",
  "key34": "3rhCFB7McXYiXh7cHCAVebbXbWRhZcy8RBwXNEudvBr6cN7NS4pzA3MkRWqZSempfwzXDMheHDgHRBwvPTLGECbp"
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
