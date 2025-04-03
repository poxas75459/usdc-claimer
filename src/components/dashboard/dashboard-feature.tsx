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
    "4P6UDPYP2MAEZ9YFReiV5h6nXCmnqDGtBpRhXyUjDwzKpcK3fabSjkkzTspcPzaSDvnwgBZpwfqEh6p6tr5J9Aaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "256wbutADuF9MViYV5CmwoxpaE9oWqop6wP8YmCZggftK4gtGzFrifNpAZjc6g9gHVZgLyTy8iEPKREW6x8Gko3E",
  "key1": "3Jw4DpSMDv69HuWqA13ZMpdzVeQ9H5oHbyKLvGBJiv3Pfk6hRwWXvmooXJsvyt3bckTYimX3WpK4JGa8Xm3nMzeM",
  "key2": "5reKfSU8V5MogojfEy9BjjLf9hjHXRXPJHWHJ7bogcuhgYo2M4A977GS6mtfwt165FRjK6ULHMCv5ThbKP6MQXE7",
  "key3": "2NmfdtsTURWdocERCZbsekLXLGoSNoUJV6bDgY71jHF33TY9frZ6xFGfjUQXXSK5Rtk8R1id6DqiCS5VMuV8Kf2W",
  "key4": "3AdCY2RgtsR2Sr5Vy1aSjqjmEraU7C3kdnrYmv22rGaPQpmtACGafmv47dC65km1E7QgBQeV7sFfkNW1HcJMUH8T",
  "key5": "98KecYXt7H9pbKiqbc7wCwVSg7Y477QRekfQufoHAze5ejqZkuppWajJKgjApTHZzMbvzMcerVxCkKZYG39HkF5",
  "key6": "45zBhsBJCKWSC8kgHoj7eKaNh12RTNVn7mg1tdqMVTBDpKFyyLmFvgoVg2gRyRKmnyRMKj7xrJr8f5SKZ5t8jDi5",
  "key7": "3m6D5GFKmq4zC9orAuxae4mGDFXHzFJhvAjZVCArfeD6YXnmkAGX2dThCrGo2x6h4qRnzkjNZWnBbbU9Vrjh7GKA",
  "key8": "4azN316zp2HyHbEcQ1EBVx7zZJUzhBnEcEUyDG25q2fgWskX7ZcA2N85JXNHMbPYkXFK3j3zMgW9URuNCXRt5gCr",
  "key9": "2N9Vza8grYV7rxfN5jBxz6zvNeJeuV2XBv8zwgo5DacjeE7gx8C5fygmbc1WJoCmWNLHp6KdCRMZnrXA4CGazzG1",
  "key10": "2jp8yK6HLMrfyDPGL4XFFCgQW8ztnNBSt1iGAJZdWWfGZgPDGARJYgzPNT3FNg4NFSHtEPb5urVbSaPhDaCRWGZe",
  "key11": "2KZMojsm7X8RpA98dEkwHU7kYeCcmsSR5sRXwYhTbmRAoh7kcWCQKk9Ks8FBjv2fdxttiBrVC7d3mGvMDG7v65kA",
  "key12": "3uCU6NDARiz4pc5zioscTTvtQEATK4pn8nrBD2kdJf3HK2wBeajCXL72eAuUujYgtwJs25UPtAyBFgtzFdxDEko5",
  "key13": "4QGUZKuWKkzm2jzWKYpN39quukazQj5ZKgnYzrzGa4i4s1nbbMpMTUohaFa1VfmCxyytefKR6v6YEDJCCYQDGtQ7",
  "key14": "2ss2jCn8rS1qVaLp233UPKsm68kMqsn9qJAWiL3apnGhYf8WPWFtkhjypEFzRkX5AbgUDRbEB7C8SXmfjYVbsWZP",
  "key15": "2TvzowhAGfjqcV5Qfbt6dGenBd9dZT6rvpbwPF3Mme3rdGWfZtjUpR8QJbcuVeV52sp6eWEb6564CqzjdykFtEBa",
  "key16": "5hTWnppe5vygD19tKtfmyMWgUsdDm6R5HRD1VJtqCgscN4KkQsxaxv8D2VfrYiZEDjhS23YSeRsdaHYekCFrt63h",
  "key17": "29wXU2rAXcA7GoBkaaFMzRbAfAY64tLFMDJByeKPbt7Vy6iGMXUhgytek3xbzs51oDdnDJtfbbtDXkfutB4o4y5z",
  "key18": "2NFtUHPXENjhEhqWEpGCUgQJnA9Q5FiEMQARRcGZqk2HKaeaM3uMBNzcXpBCpCjEoXUhswKKdsyQf2wCo17btPA4",
  "key19": "1mTTnsGZh7qwSorxHMrCKEEEDKfCu9bR5pYqVN2RADt9TNgwwAxjGKVGxD8JJxqKSkvZFgwG2W2W6VQQnqqmWWw",
  "key20": "5ZirFUeA1vdeUqo7quv8EqCqMk9hD8WmmUN3oHS5A4DQvpKw3HgWugm5427JNLk1cv5V8Fsiyg1Ur58deTYgisyf",
  "key21": "3cg4gsUU8wLePLPDt7FtRi8FBJKzGJDhrSwBUkjbY7xp7eJqS3pV9h3T3YeWwx8D2RUv1DT9wNG4Vro7SbuUmHG2",
  "key22": "3bi1cdPDypLZyvpeztNxzFJ5cMDhoYWUyKdNW72PymrFu5Rt8mFj6vFHGmbMsJNETedxbdViK1C5BAHCWkxMozGJ",
  "key23": "cfmuTpuE2BdZ5DuGwhw3Hj8myYoUAE7N4hCy65vWrN6ZTWNqEysoNLCAGTNcuxtkUCR7afBSj4sJF3sQJQ5DCzD",
  "key24": "aLr84S7tXaAaDeALiCDA1QpuqDE3NnpHUVLegNveS29C6YPotbURxBKTnDmGpYCbJvviqLjE2fy3XBHKTiXTEqs",
  "key25": "2nv8L1K2rEFPtmDvRUc3ER846d7dpHy1MbSmdDamK14XKNuj7BcGxPFGp1uEhbiCY4TtmKq1FSVTVbdvo8ahcPnk",
  "key26": "ABMTLEFQC8sQDRpqDZ6LFrz1Te9EKrTpbd1uMQiNonaBoLRaDE27TPknSjDM3LX7ASuv5GPpKG6XysPjbSGDV9F",
  "key27": "4UxtzmGLoGg2VMpAmdCTRYukgBTySKVuWhgbutNrjHzB1Y3hprTmtijDBkTLq2ArXtz7aAVKTk4qUjV3JYsgwRrm",
  "key28": "5Vq3s5Rq1ncj6ppwCmunevAjt8mcJcKk2DtPd4ko1ab1VqbBeiRbMK5xv4B56rBJwxwJRcfRQfbMuCxn8DfQWQvo",
  "key29": "5xfBXPNsez2umC1frKMgNAYw1eu8ss1SdpmWXeWr8iWXJBbmgSM2p5aYnRrSzHLtVs1iqpH191skrwkCnAgfcNU6",
  "key30": "ZgvQMCQUShQ3iEwn22M1BrSEp11o9TPRYxeQ5NHwJrxySNjooajQ7xovsY3pqAS4ESWyLRNiH4CoMs72yq2h7jj",
  "key31": "4Gb4iMs9yntwZgQnVXufTQuFjTPNmb5VJi42qjoJRaW82s8JVULoizC4Yoex4y5QbPFzyRwSd6m6D4aAJHmfv4eP",
  "key32": "5kFtGourV9PtHAY6va5zf3w8G6j1nqbk6MWHzti3q41YTzV3BJXi7gs5PN3uFNXMM6mmDJpFPTqXp2cyBprGzpPx",
  "key33": "4mBEPQipotZL2KqGtKBERSDpKsmchrnJBTzLt5tiCpgwbira3ckBkdExU8MoJWbhxJVhtnMVbadp1J4xcYUH6Ksx",
  "key34": "DTYyieddqfbUHSuLRmbVdQNfF3JMeLPFpSCDBzDNJmSAdYKcD6p2QfFPKDR3828NStpnr9tVFKeB4npbhJkRgUT",
  "key35": "4K6v4TUytkQFR1jQKeJ5sYiVHLdxtcugoEgd1jzU2AVHihKzitZptk9rTfvhTUEgoFjDNVGQ5cr7yxNrGG3BgdkT",
  "key36": "2BAdBR7jHsTncdTv7ALW9VBENGUEi2wnxhiPrWKZbmDAqzzeK5wYZjAzgSBeMdkoRAQm3Y24ZkMLDw2yNp6dETah",
  "key37": "5VHsmxvM3WGJ7ByybeRCvRfPkQhbiWReVDuhy4namc43LuP7JfG2LuT8NF7EA4H79SyKaYKrnQaovCcRkPDFzmNr"
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
