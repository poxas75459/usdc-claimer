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
    "5fHb7jCjuvCvBRDykohz4NpjShRP9gytuAhEAMNswHj61qoTPpdLcKXu9pZLG8oD47WrXS9B7Zkd9765yNZbcrPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A4a53hWSpRqpFfexdUGf1VV97cYUKbfn9U1Nv7MGNy3Ujrw3JZzfJ9GV4QCvJ7VyHJPCWzbubtjg82R1ygQLEEB",
  "key1": "5sGg9T5rftiwr7w9K5sJ8sp9tuoEKmSv23e6gaYKB7MAxJ8W6H658BmYPVEWZgcecxvyJ3nRFsNzLRrv5eiqpA4h",
  "key2": "4dLG9mP8Szp8KiAD2AUGxXdiT92LFSusbjGgsm437xShrp3dTjBeRqkvHHRYjunkUCqrzLTqooJatK3r57qAwpUy",
  "key3": "3rDQ5Ei8rcoP72iis1npL7trRNB4Ty49HKyPXe2ARLCepKjR6XE2XCcrJgEgCcJfHoCMNjAurx5BNmVNN4r4tDFZ",
  "key4": "3bfrKKKpot3KavVCnLD9LzV5A2U2vDEZxioskaAcEgAw7m7nXgZowFrczqpDV8tGX5hz6w3zRkf3FT69sZTuJmc3",
  "key5": "5CcGSMfdQT2rBsnfhVHUB6K512nPHni1wgRnefTKaZkWsbtdhYLjWwTQ72JAgY9eYaMBaZxb9cN2kyQLuhQMWNXj",
  "key6": "4mmhSySk6kjhNduRSHUZY2Na4oNkUPhMNJFkdvrWnEd9KEwuzrUeA2xTjYaGqcfMHRSE5cWUonLBhDMmK9euhbUK",
  "key7": "s3jBtdENh5RqiqRdt4nvBvnXF3d5KNuYsLBAztSvkMdr7acvBapueY8vgri7W5j6GAzcP5kA38SHAFJPeyv398B",
  "key8": "2Lb68dpvWrQ3W2xVK61wTkYT4t3LVnHRXN2ghn6dLnLRj3UhBtYAGwXjcofZ8J6f3NmJVBfYLwL8Pnt6LTFVt7nS",
  "key9": "4va5kjobLwrGfP61iTEPJ5F96yiWdspfvuZafcixyvmqgDv5YWjpo4TCrRQJhmfk6VxbQnwo9ud55cbaSBHJrocF",
  "key10": "2WdXH5XmUv3sN7GeJDmbyvr9vgLfnwoiFAgSsrzyLYSvNSPw79eeyF7cZD9UoUvZFNgCakUAtD9yYuaZwdjqX7nP",
  "key11": "4wK8NLrErUMT16412hXsZ5cYxLNWe6GyNhxGyik3ni4JB1BJspjsFydTm8kNhmBPBG2LzxsUYNE87CFhsw1nvngd",
  "key12": "2ATuugCxPAS2ibQ2DuminyC6wuFyeJiJJjPW2MWmVDJnRJQEhJvjRGszKVpBuk6kkAXwEaC33cXNj6xmXmCik82j",
  "key13": "34PRpHYsppasWUY251z1N6RRpjSCE2nwSdZ4bKkn2x1BvqZuqMkZzwvErrk2VQbAxpoLR4iBraAxtHZ9sLoivMZe",
  "key14": "2J8GbvX9sSrm64KwATWvVrDHTgg5ZZ9bq76451egry3U8PY2q5rep8Txjz35D9JQXzMLQXnJSSZyHaQjNm6SoCWh",
  "key15": "4YAXdubPNN5RuQF5VeCs1n5WzfDprvU1bg6d1UC5noJBHQAE1UdVRfo77JEDtbPkykYaMVu1zFDT41xccuTSXyCm",
  "key16": "2SR728LgUDythFsGeAAmM7xidtNFm6BeT294jh7h9GvAyEDm1pMdX5u86MJgBPyDSMEBTfFUbLu3sC82oGtee8Ut",
  "key17": "3M2ZxYVoPscgbBS6riWwaSpbQ1ysWzqpBaLVJKBmTaP8ERwY9kmCsWAvpLyAuH8f24vaxWuo3b1CADMWPkDdq5vL",
  "key18": "3V8pmVJysN23jCJYCdb8eYhMYcrEnctYRfQ5uqSqpKouKa89fSbPaouF2N8cD4BFusNhVoUuVNbnowVpqxUsXZA2",
  "key19": "4TsCmnvmFKmmqQ8VcK25KoaXF1ZK7k4wSzLBumPgaYdSqEV9Uc2eaaU98etd8uQjNXxmeTLgoeoNJktzrmd4V8ve",
  "key20": "dpjaTyeytPr8WSEpBUyRzTfGcegVM6knEqX8synRkVXAEVizurot3FaQznkhPLR8hLBMkVxGs4i9vSkCEEnCR5N",
  "key21": "r1Gab6Eygn9euyJ34Co739qvhNY9Dcbtdqst5zxyVKv33yZu6oz9tcviWuAsefDinzQrto2wJN9zWPZVJZsLFjw",
  "key22": "iQoCXipJLtNG6XHQVvrnX8Q5b7f7vpqS4m2Set3hSc8i5ztBvaKDwjAiekMCBuaA55Upxv7opxRfPjyYo7suZdf",
  "key23": "2KXQCBGw963HEbjwvBzf6jzDW8wJGxoP9xTgkjvdipYGhQbycpMNdAD4Uk2SnRmn19GHoctQo2Mmyap9wmDxQYts",
  "key24": "WCMPAKtrcFUVaBShrraVUxkYrRf1omWC8CXxKD2YV4fmoopy9icRAnPXiPLTM9kDeBeQD2u5S3Atix5RKeCouAK",
  "key25": "5uebKjX9ZEtFtNY51hYTKJysBzMVAMkC1MQps6cTvK7JVTLCEousiF96BnpszwANnH3CLydttjTNpwo8ncyRYXiA",
  "key26": "3dSH1yWcYYAu3dvSmQkTW7NWEAnhwDJMod8QHYBHqTWsthFE4mTbmuusSDpN9baxTekjsddspiGa14ct8rFgSoat",
  "key27": "2oJkDDnu1MVy6urv6Yta3RaVUhfbwurHgfHf26qLrDLBv5GovaTBu6d4HYyfYVG6MW2eH1AMh8PpC2UAoX5HuxEM",
  "key28": "vFvYnr7Xo8RA1VFrRh3qSkC1av11s2LhyCYMgv9huFs1Q1RMQJ6wEZrYnb5ZejvBmSx2WoMu97Pa7eapte6FvLk",
  "key29": "3hhmqxqVsmAorNZp8QkTfzb3BjQEbcogQsMvchSTKgDBH5EMQhDk4jYUuWj1jbpWzs5y2U39RRhs7jb5D73vbi3u",
  "key30": "66mntu7gTfVDRk9uGAU6qS79HBhM5gXLuemsXjYXtbR7pBUedNK7Cs1Jmbekg2syq3ros1kKdUBMLjvRssbQTNk2",
  "key31": "2MEbg85xmp3tx73u89TMWktwg8F5vouNz2Fpr7JLMtuPYGaYLgBJoTbRRkibV7asmMLDyPHayzJ97L3aYrjtyHEi",
  "key32": "61nRDPQJCUEWwgyD9Yjc3dcMAzG2bpnSyVNNMULn59LaaAv1PCuoDFHgAR8p2yjfPD5DyFk31Np4AnHbYwa91CHg",
  "key33": "2dgf3si9uk5SAh3zd7f8Rk86VD3cWwicU63Z9mTdo7CgBRaXyWw6Vse3A6X9kaBF9S2g5ZyfchiKtq9QEjXpq5Kf",
  "key34": "G6c9RuNyxxmVViZj37Uv3yF5SUeBrcFCF59JxzBuyYMfeifyMLUbaniba8J5zXTo3KhnemdzA7M56fp7etDLcNp",
  "key35": "54iPsdT9jiTfxnzt2FjmAYhyAjdJ65Z8UgFguCT48GZxB7uoxTpVKxMZqPi6XmnPH5m9hgorRm2ChBoYPg1B5oxu",
  "key36": "42sRk7jKrQ5bSn31nYBLKL71oebTUR29wBmUWJ3mprXRFogegtXNsqTJWBoaEhJXnFQZPAX1QMjSe2PfNnj4rvAz",
  "key37": "4oA4jUQqzaK55aRyxAkr6SkAFRQGvb6HAuufZvpasSzDKvZpqx9NM92ak6ywaqZ4rmxQrSsiXMVksnHM3QAnhs6p",
  "key38": "5FkjNUV35YCvH2kC1HwfMEcka5RSK86UPbmUJ7f2ej1Zu5n7kxQop9qrrmGe9aXi9FwcYzZUrfEgtGPURPkUbqHi",
  "key39": "2h89hqaqTYLQUVwRvPgZuvV9gTC5F6PQU6icxJEEhQNY1LVfN3BswJrFeTtxqxxkzS1iNPFpmXCZ7TSidzv2vns3",
  "key40": "4c6kTbea7ox4ao8CG2D16jKJ8siQHsTTxBiPRw6siB7euQSfk4rJgWJ3a53yG8qSNDqUKNvvA7muXzsDS9Ch7xwS"
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
