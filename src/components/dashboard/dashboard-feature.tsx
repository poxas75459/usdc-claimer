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
    "582gkdPtMrQ98FbNY4nDTMUqQezwajpZNfCW6DEsJY7fL2dSEYMe59y7XHHhyD3DrPRMDf1CWfsgymcHNtENeJfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TCcsCNXhSdHxdXYXh8HNtHpnk6BKmgvudVfR5TCAZDj3JSRsvV3L8o9pEKEhrmVL3qk4skQJvPqxnPFcv5MAJu6",
  "key1": "5k5PcfQqzL5y124BEvVH87iJ6FSPFmuDvyXGP1p4rREV3W3mxqau3xjkZKtfseJUPqzJTtcv1bQjeN1keS7UqUpy",
  "key2": "kas7hGUqyc1Q24Y5suWTvN98sTm91StEnEAL9JV6eKP4gBCadY6SqaBf2deSEJwoDYBbGsTPs5rGpivbX1fBaYS",
  "key3": "44ZhN3vwg4cncV4o92AcfVdpRtS2k6oAytnxjSoG4NDfkDdEBktWH8Z5hJLPzsGKSRtpRUEehz4vutC2PFwG2e1s",
  "key4": "2nXLCPd2jYfvCbyZi2Vb2VM9T6YkGr4iuGLj7WQeQ8HUhTstdPZ2SyfEbPLfEXAXTyVUgojPMCNAKxWBsEbM27pn",
  "key5": "4HGZ9fNRNYzquqVkcfj9MBNX4eBoLnonM4RcK6K7xUsfUBhz4kYayLmFyPxka4VUyeZBksHhGQpYrDMrt6xCKVnw",
  "key6": "2Bpqp5e5cHskzkNuGJUbkuw5QpWq4ehBfvFEiAjNgNKXwKCbpHzoSYEz6dCR1oJT6C4SHdBrgWLp8xrsbzsuZ4Fj",
  "key7": "28iSbr9xPUqN72KrNqA5GFJkCSZFgb2oWpDmKvfw5rE6W1SHj3dUg86D777id9TSCo2X9gjNVcMAqjTLVaCeKary",
  "key8": "fCMD58rnsDuh9bbCmYHaimt525XHgVFL2KoSzQaiz5QKuG1ZW48qKecezg8ChidRAxQQ47Km8W5cZyGeQq8WsfB",
  "key9": "4PzkYbHR1F6B91yTgMQN93rxVNkzZ9yeAG5GacX8Xes1JKpoo7niDQPh3PN48SGbsUDkd3uUrGmdLzEN2TZKFLw4",
  "key10": "2dawdX19QxAmUSFje9zdKFDKX36p5knz1HvCSeZiiQid5sEnwGY2sQo5xEiY9qRrpVqGbZk622gUHFetSbLhMmQX",
  "key11": "3DkU1rQYZq25SqZaa9zVQ4Uz7EbAmP8jhx5azEkknVjWFCP9WNpitL6bExe8Vxh69raCSg9JjGFKdgR7uJ6ozeWH",
  "key12": "4o6ajMbQbrVHNoZSwC4CTPjaKScvzDn94kpwGzc1ehappc47CyMmoDZxB3qyRxGvNAMB1o2yoVxdeze7wg6deubN",
  "key13": "3DrBTx9KK4V5o1Q3V9eNVhztS9EHg3ABkortQMt9dk9rZLtAdVBrPMqPiLswRyTjzb7QGvkUxnJpxDzPtyJf7NGy",
  "key14": "24S4KaKxMj4XfqjrTufKBQkWQwco2yi2QTE3e3Gd5griaXbq1Udh81RjVfW5H56LXvK7fA9QzrFrJWRaBb5JaPKe",
  "key15": "2bFvRaSCqYGuWwAHsUYFViKrXpsydRb4QisHhkNcNsgoVu8SoiEc4PdbccnewATwBPyWaTq4iZCTt4ZX4C9LmTiW",
  "key16": "2uQbokLbBWrTXETWYsGF7BPipos5HRxs12sTfZRAVEn3e5JHuuSMXs5xkBX7fHKEdNRWLd7azB6mAWB55gYtotPq",
  "key17": "3Rv3B8vFg1eqjTQfVBcBSN4gxgtkL1opnvxkoGNSMkRputqdziw3tRALfWHX49vfa2xut4bW8o4Xv12YDbW6QFBr",
  "key18": "yNVTgsAHEzbVTv1oaUrD2ekRxv53SQZfcEHWiMcfX4d2svFXbUMv5A6pED7aspVnU6FaeQHoSfqJRKDrAGqSdUB",
  "key19": "4D9KBbEzJRQurjXHJG7WvhFH7mghEhBefnC3eCt1KSYfdy8pwRSdAD7SUH2Z1VQ66YRKBvwTmhTedHgZqeup73ai",
  "key20": "2PRz3uTwNdYW19CLoQnVQ7ZinD7vAv9PMGkmdTDdMtxANshdN9gLFxLnTn3rZCoeGA554uStiQN29a4aZTRuD9x8",
  "key21": "3Qbm3m7d81pfpVtxZTMHw2gTv2Y5gGNx19jJio1oxaaYYm8usQDCBkrL6oWEiRH9tD6Nc42BKMtiqxGrZPbCMYwU",
  "key22": "42jp2NsDJJVrwkKYKeAckEeEEa12FevQDPv6s7KECgL9hBAywFKNXLN1b4G4BkhAXGGVQmHWANiiSdeBayiuajAm",
  "key23": "2ZWUVjEzjeMC3npEArPF9VrRu7uorUq4oy3KpSu4ocAcMHuJotP7bo1mDoLE322ruGkrfkdCp4c95dCG1QTQs7A4",
  "key24": "E3jdUJ5nqRBUtLha8SZpLjp18pgnA2Hd5vhvdzKEGQPj6bPkocppUzn2HWvx3SJitrHLewXoDg8vyJSstME2naX",
  "key25": "3XNrUZfKsfjHA48nfhZ78nSapeynZ5ZuQDjpkAwXvPzycHyap418VNY2kScisYmsUPLjMtaDRu2aAvvVpH2HABUN",
  "key26": "5LZkxkDb7UoGRLbPA1NScjQqz76hdryF3AgTc8BrQe9dG8YMNt3upmSpgkE4Q4AvviPHtdtg3QQTVXGR3oFqXpZo",
  "key27": "3WBRgYdfE3bEzJjxvvg4BuE1jwLCrWe9tXCwFqp2BFJgauZdHTbEa8eKgzeRwT7oZDY1pci4jEynjvVAHYRwW7h8",
  "key28": "5pJ835HyK7kcEhS4a2Sxh9h6ToKfXupZWPQhjXaoPstQV4b5RoGuRkaT85NVk5HKY9jzNaUtCaLRvH1ceop1RTo9",
  "key29": "2jpwh2jhzrv1tr3x59xzAXY4jstgCnzM8tu1fRNrPfwcEHq8XhDD3tfAQ1GdnvMadEFbKcRoUzns6GyVno5VKsb",
  "key30": "3y2gBQ3fyTQmNmDr15Vj2gGJkDWEdT7kWgxuwsSdGLyAwCGzVq4poPY15U9J2TxdFLSXbmBKTD4P7165y6Tqd5gx",
  "key31": "4RBT6VSBnM3UyfcLpM3myo7NqypwTzp2UbeJ4dFFsAX6uKGVU9oCSGeLEsZrbCYkLdyfqN5eiZAHBaU6kbTEYqAs",
  "key32": "Dox7oYZa2ccMuuhsVTj6114pJzfdXXAuzbzRDmJYmxUYVmpBZByntyy1NpbodUHfM6rRqpqQDhaXqJWVej9NfbQ"
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
