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
    "2BAtFYTcKuM9cAFmwr3zVq8DdnbMoRhwsoF7UGjKgiypYRbpfqp1jQ6VWLg8WA4ajzynYBeXNjod3zK4tyHWGFSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i9ndcFGGZ9fsr97gTEyru9Cu5Ge9PaYgpLq7makrGpfCsRx9BusMVgF7ZSvYCskuzXy5RSPdu232nrSdTZ9siEX",
  "key1": "2GxWJUhkAaru4TUfkBhbxHa8SX54AvzEKJGHuXSQJ2PSeahurJD1DqkcSu9jDSRB2bAJPnSNTdpBZU2qwNu7QczX",
  "key2": "52HbwF2RvAbdLCQdmxFt4EjjkH2hXzowaC5G9mWaHNBEfAbTtGC9tMABahgYHJpLEYBmHoWhxxJcQnTa8AiyeniS",
  "key3": "4FtJivYDDyePz2UG2WtCLEVHFy2hMZXe1a6ymp9jUAF1o35Kmsw8grwEiRsxJccL5DBFDj8SNmeZoBvorf9Thzx4",
  "key4": "5f5nkMr1cSaNw8HE4XsWRyJDKK4eiBBeRUCrXHLHqPaCC4kBJHx72UWJ8NmG5miZrzCKJBJ1TRM1ZvYUZm74HiAg",
  "key5": "2WfKScNNLy7Q6RT88pqkFuRxhHwQuRqtGADvxMr7PWsz5fgnAcFfWLHiw8sp7CcCZynzwXxnWAKXobMG69nCcRsp",
  "key6": "4Zdtc3wCdkKQg7NKoRH3PyZZKV4o7VnWPGmiBUcgHoA2KgVrZncpeezdLx587fMMT4h48DjAxJh1s912PGchmJY3",
  "key7": "5AdfZN7Z4Y4Ni3V8oPBpNLpcYQeU9xqyBYivMZGzQNoff7b28iCTBGaFjZbNS7etdjn1n1MfnXvcyAXiUA3sQrVr",
  "key8": "2WDhxJgwmDMdauhEkXfoUhHuj1iFdd5Tciu3sc5zKocfZwb7EVuNA8MC3Ky6ry6pDuojjtcnUCrtt7S8e19gx6SY",
  "key9": "3Xd6HsBcQ8xaoeVXN5qP5JShPfnSsJVdMajSUkB95p7CjEvZ57sUK7y3Re7eKojFHwyb9VxnLZ3PGSoPCLbCNXgC",
  "key10": "66MYUqUZFoM2JLe3fQSECzewrJQMZHVbAcH2rLebnyVrXj62gCHFqhGrcLmyA5TvnzCQoq5mfNavJaFwYgax6crP",
  "key11": "2jbaXjq3Pyv16RNMY26CpjQz6sTKDNSHRzDFbWWxLGcteJjZbD3SVoxWjAjgA3dfqkG7xi6Dium1FNmdm22t6NCu",
  "key12": "3NYhHKUBUtyYPrW4iAiSyRynPgYRs3NBRkMfxRADv2WS9RaCYTQozEgBJ4YmKCzb4Pnfa8g5LGRDsFP2NprGai3i",
  "key13": "tEsW6eeoCicGTM2AiKyaQVf9DzWmTvGdFXYQUfNLV1gVSHiaJXbLcKSsdDzAS9zdCpqaH4m5DYcUdLzgEJYMULk",
  "key14": "42oEYsaMAkdWUhG3BJpS1nR9V6ba7wgu3QYCzmX7tcnyA2KR2zGwEgcuf78p7SjtNRNELrhNEY3x4CsUhX7ScwzQ",
  "key15": "4j3tN5q5ReHXpdPYXxutMmEWNtFdjtpS6CPjvLSJEmyB6NQs9tppqdYgZTYu5zE1RWpSeckV8rxg8mS2tNJv5e2f",
  "key16": "56d5kfXxCehpsKAoXs8thaRwtUJR5rPxqCgWyGmMr6SXqTQ8QGrPde5V3ScX2XyF1sYFLCcPJ1qbHLPfXkTqdpU",
  "key17": "4DXP7J6qiYHjJA9vJWGtc2wTb82L7epvgacJA2P1eaZwi7BeTLxGPBmxVEKkv7aw8VZaFzTmxitJMBqy42nLZbJU",
  "key18": "5xc27PuTsxg28kzaSifKkCmHzQ2wMP3Jmzz4FvxokXfU1Ao5wuBKM511AkfdxhTcXDEr4Gt7YhT8N4abinmgZhfA",
  "key19": "5hXNNtuR5ZR67FmBVtqfPgAZ97CUePBMa5Zm7YuV2mqEU4YVon7dXFhBkfxuvP4QPC7aUBsXyHPhpuhEJsgXYiTw",
  "key20": "2bNYgdFGvF2EaXgcZzoC7TkZg6s2BxffF8oiYzhKKNGJQd9x7kwtS82YaYcHreRuKVvyvKMJQqZwthLPmiVYUdQ3",
  "key21": "4xynfRngAniaoeW4cRytpzd2Yd38Pa1rRNi9pmWyCg4ExbrahXKPdtQMcfHnyeBGiHGBeHUTiDS4bjwjw4YXbfrE",
  "key22": "61ggfUWjqdnS4cTC3z6mFWPNWmoVwVpvAfUoPJfhxwrFVje1b4ongEirBZpB8G6akTUkhmBEcfgkeSyYyiequF52",
  "key23": "5ojoEV37h8TfrDmjS7Kim73EGymNbvs3SYqbihtxHHtwHtC9uM8UM5s5pRRvY8HWJmTXxyPFnYLiF2Ed5mTdv8Ge",
  "key24": "4EDLTtAFAZn93NpqxEh1YNV6m7gHub9wuPjoW2jkGEiuDQAgjaUgsEXcRa1U4aGM1fhtb3ZALtNzSAyAudW6yk57",
  "key25": "bofaxN4Qg32goC6iTHZi1JTp2icrYkkFGEi7x8FhHRY5JWcbaeA4zaXJnDbzB11eq5Gzvh6rdaRgQNNUUPs4FjF"
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
