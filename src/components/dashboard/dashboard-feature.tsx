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
    "47YPECZ3667xYJAMXaMnpW6NHhoHxhTK7t9NTrGc5xeteQZRDR8LP6mV2DoGE1rcmxPW6jLDsnLz6H49xf2w8CqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N1DV2JPjU2eKRGiaNbAM5HgW6Aorb1uuuP9xBDHu83Z91jUMq1pgEicm4pAwxdUkHLxi2uByESkvoFJpjDCFyae",
  "key1": "4LcvY2zsR7xncxz9YMjzHSz7HRBbPH4Ei6UfNdJLtLkcL31WzyJJ93hY5ANQfHowoHe14ZfMN1coz2FMH4cra5RV",
  "key2": "2ydzskNpGF27uFW6hawPVAB32JfZhPRtRQDMurGXaxd8FBDomoWnz252s1S7b8jP2cxBq7dR5VjbY9YSi3qXMn6V",
  "key3": "4mzhtufkVvoAVogCKwkWTBKBFoF7Jy28EyiGmJJeD5Lm9pn1yh5pEszBPS16dGjUoiR3xVQxyHe5nt9drZSFp7yN",
  "key4": "5UUCHBoiAH4C4R3iRsKJBx9XJi3bQ3zGPTYpWBai3VC6byXecXwpPUJ48Ck8akSi8ZbovPE55W12PdVfoU3pbnew",
  "key5": "32x39v28ZYXPc9STMFM11LQug4M2xu5PxtGf2KRkJXMa6XUCY4oYgbcCHoC6ZRLv7Aa5TEQF2XyAQznaeQTswEj4",
  "key6": "2RWUi9WvJP5UhGPVT1hTFwGFksuGULQ4Fn21mq6Ri6Tgarkrmqq7wpPwyj6Mg4311ii2ZRUqANc9WxREJKuRcxsr",
  "key7": "4gqUeVAkhPxJkfAY2Syt9oL6pYix6meLXiLCTLQh3nZ8jLsgu5TDuKHJwFb97zfZXfNjrmWLehJr3KZGKsVTnzS8",
  "key8": "2Kh7Cuy45voqzeGtnqXkt7S9pXVQXEuZy2C6wuLQJp5RtPS7Qz2rwFHQL1ZL6x7Lh2RcQJS3yHXS789wp2bWaBZq",
  "key9": "qPKpSRYjZkP6VqF2AgbNC1WLqViVm65GBWfTReqoM1y57UZdV8yJ4J2nG5fD7ZcV46VZBMUiuWC5SeuLAXjudEg",
  "key10": "2viMtD5nASaubLZpFyf2uQAr2CmE2g5aaB4dnXLk5eLcf3nDu9tCe464eXZ8GcktaWGZYKs24weXuP2p8izMTUqk",
  "key11": "3vdU2xN4JE2cnTSmsZiSkz39x5xpjrrXAMftvv86y3BjrcuQaw71VByNayrCAkMZctvYywGWZSBCAtrZvkfoFYhu",
  "key12": "4PBAjaqUssGENQ7BLKTsDV3isJt64VwQ3yzfAswP1PGkffxtc4zC3JBJC3VZqBPuCeobATZBTxBtaRWhvha87Tde",
  "key13": "5fw1peavTcUQtQqr9EewuKyAyQ89N5fq3cNKgVrTYxqCoJwaEsZAVtQzez96S5MN4pERG5xansxpsoRyZUhXR5LW",
  "key14": "NEGshkyxVikvDZLBDBBPtgTvZwpp5KFK8mDupQhEbp4AcvPwsfcJ34Vj814kRViF956Khb5ikR1GGYyL3gPM2J9",
  "key15": "4gXsWW5suMvMPAUCS8bc4mbqtYAiPK3NogwhydZzoWsWPQYLLEyCURF34dZyyY27iSJjEynHcQCLcC8DQnDWpsve",
  "key16": "27bqfe5W6sBMWkW3CAJwpJdB1CaKwDyBNp7cbDq8BJwUUrYZsW7Ps4fh7craGULLBpGz5qCXRqmSxYNicA3zWAxu",
  "key17": "2YihGSVvDwoETF5c8tdPS8MTZQ9hNNJFh4GXBXCx5yP6LucsNbwZSQFJUmdqju9FU5ctQsB2wMB3Y7sESZRaZ6cH",
  "key18": "444PWPQx3WtHsy2dr1WxJX7Uj44owq64bLdvDTXT2fW6yYddEah3g4a4CEWX1aw1oNj5nr133VitpCF7C3fCCW4W",
  "key19": "53UzUERCUS5WoqcwacNfeyJqnFy1vVQfLmCM7v49G4kBSahTNERdWF93bNbhV5sz7mB1Lw4SBFAXyVAVXPob2XAF",
  "key20": "5FrzxZi9GC3F7c3SvsENWF4NS2voJrMwxuXmxYUPwiGvWCS8FesvgAhrJEA94yY9LsU9r53DMiNjxmBd9kaGF4gW",
  "key21": "2Ew7Gwtr76mnRonZkCKddcC7Zb1Hn7k3nWsLEr8KMQ6nZKgeyR6AwAYBPpiDs967KdwU3S3oWrA8JM3C71Hi2HRb",
  "key22": "2d3a7agaTM2636h7otzwrZ7fRLNdXWjUynUfoStogrfCav4YSpoces6oJNQTmeZ5N45aNCkT6KAJUsJzTJDfDigY",
  "key23": "29MGtrzME7awbBf28Z9vjQyJp8Mi58LJ4WqZZ548m9jMkk6A5Yoi3cEeLvXPeR8oFJXSQpbRdX9kz8dNzaY9XqB7",
  "key24": "476LLWpNQhthqHu48Hsnz4nJxU1k6sB2iRkJRot5B8jQNJGhKN3JGPQ748xUjVhd7WYPG8uRAK8L9XBVEnefrXDb",
  "key25": "57jPWV2QpT9Lwio6d9n1Z4BJqqRE87BRBV55HJ2gi3sApbKkFTPZDMmcs64bx486V8xmJLyfQNGAKRJZg7a24aAq",
  "key26": "3hpPNFAjy7Fd9ee9t3z9kyzrQBtUZ6B6ecyFLuz8yvsQQPhBue4kM3JEu91Cdpce65geQvmLzTjvkJ9uTwpTLmYD",
  "key27": "54oMCkJJMMQSmVMsxX5rcgiuTim3gqxHNU1u5eXS6Djp2t4wsaDkyqudR9YHUGzaewtU2b845rcE4et5DuJRb5JT",
  "key28": "5wsehcVGApeVqG5WGRopX84KDjJpBd5yzXkJq4hfAH5p5KEfiDTYYKj6mEB4vgRfoXqeYVnBH6g9uYwtNutCFDf8",
  "key29": "2i4J5hmiEzfpTnYtm8gGuyarA96HPSrGqFpYBU5QHRhmFJgx6CWwocQfjZXs81QEtexsAa8MBRU1BC1ztiNNoDf4",
  "key30": "1wSe63A6cezyyoGNAdTTYPGEpQU4rNjMpYHGqV2wLrvowTt3UMxpzRUmQqG6eVjP5TD3EHngNjj14Wtbg96CiLY"
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
