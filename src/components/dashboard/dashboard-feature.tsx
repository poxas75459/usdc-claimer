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
    "2MRBtmpg7JSEibmDwmKMWwtEZRepY97JZHJRxej6UofJoZaj3NjhPqhD2jRvVjmLjqD6fkfeSPPsqSezfgSEdLhj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gk79hpV6SYSPrZyFYKSTbho9UngR3V2ryiWJqENr51SerFbbdWRSkz2iZUHtPpW8kRArZ9GSEoHQz6bUe3JX7VG",
  "key1": "8n4kbpAjiywwrZNbRUDsk4KAvtJc9v5pQpTvarVJGSK3J7Y359Ycp7M7nyh91okqF16Y26f7AiGig9kkf1m3DTb",
  "key2": "D66bq9cv5oKgbuzRakwHz1XfVPzJkUSzhhGHYSxv8NeDArwgZd8vohj9anGVH6GTJof2me5KTbPT77dGqkVh7EU",
  "key3": "5bT6Fa4TEAgQg9mzG96UAxi3nCjyCMTpuJ1YwLEq2wWHveVckuW5fYWqwEC8pYgWakPsSfi3qccjwF3TVTtMpaRQ",
  "key4": "UTkisNBsNQLJNuvraDFkq6kvsMgks7UuwqwDz21KZhFfWEUUyLYKSHch8oNtiyHCax7yDeE9mBhsSZWCGJVeUnz",
  "key5": "4ufGRJ1TwoQBtA4a2rXStGe7ZNDqphZv6fx6C48AkjqEGvfRQa3LjfvipnX4kP84xPtbDo45NwaspHYfREHWfskk",
  "key6": "3nagpWJbzm6rJdbz94VshS8fEKp4y5t4HcWHWPnYtksykSbbVoJ3GqBAeZT9pe4MiGL3SkZ8gnJY8mUCsUbwMcmS",
  "key7": "4domhGuk9xYNPg15MvFhyz2qpizTeheNfyP5PfcwgWswWYaLVerREkgpsSsyddgM7Y72GuNhgJ3Cu9DCzsXcAVVK",
  "key8": "4RszBdRzqdWCKLS2EDJm2wo8k5D9gkcEbJZYyjoY6WR7rWsWLrC75RLP8M2v6HrZkn3igvDevwM5v5JkKFqJ2qA",
  "key9": "5HJ1TuAFbGyaVfNfYj839NWA59ZsTUzg7uoeJEMAgtEXVSQd9pt5vjFgJ9yPHjR5CaCSuVDqHcenufJDU8sodhnH",
  "key10": "2EGJqQQoFBznLVPSUFj5ekqU8SmF4vY99G8YxZZ8X9HbJvTbK4RDhM2CfWLaMUUSxdMw52AMzG722hDjfZRqHMMu",
  "key11": "4n6TagqnyMUW8wS4CPjVkFq1QY6rxKkkNjtj3fRh223t4DwE6GTeKNB5Ty1ZoqCQ6VgVrLTLDDTvHmhAoNMaBJvC",
  "key12": "63JmhUgMkJy2JBZ19tHDmS2d5UDYKfjUhMZggXJvF6keEsHM8Y8mfeBAFnTFgXMr9bdm7TnUsx4CC9gdTyHxvRoe",
  "key13": "4JuUXtyrvLXHWgrLCgNDg3znAAsT1St188dmzS8hqk3KbybXz1AkLAbJfcyoCT7dW3GvtSMC92B4K6NZVEX8JsNQ",
  "key14": "5jGgcpQzdPC9qx5qCypuV6aYUpALX8CEiLKqSf33geB4UCUSpy3BkpBqeUBAiVtvno4i74xx4KScpCDzBJXGUvH2",
  "key15": "33xT1whgdJdDgMWuJTgowDbD3aiu4ooNKDaNtEdYEFtwE7u7nwTgGu4bu4LVsdNjc3x6crdssGT7nueFnC2FJooS",
  "key16": "4P5nr7qHHjo8RWh7dRPp8VWfC3YQceiu3Q3mxBSAisJJtGSHChZTrqYnZJqLJepfZj74DYVigZR35VhE9ijMu5FF",
  "key17": "38Sr3Q4XM7MTFwtRrjN1wNohEpZPbeghULRh3ZXLFiFwP8WpcPB1pMyPkMKaB8cUEUdmyTyv6VhE2XTnyUzGoZ1M",
  "key18": "5iUnR1wDAzBpTUXZJQbsvSdjK5VMFMw3mdFL3uvoy95yDbmCVg3ZUXedjGByjGbEGvPFhAq5NFadLvs5f6Jvkr5U",
  "key19": "3UvTfQE7iNy2nTfyLXsCRzZoicUuHdM59BJZ87xJzbdC5LUv8FAtKdJJAgbKFobyxBCZXKahQgNaQiNY663SefTS",
  "key20": "H5QrpnL2DVskggoLeW8hc584P6WKDXMzUgQNoe6fP9hXr6UfyKXN2D6iu7NDcspJtGVJz2VaC7cV5SExykUC1ph",
  "key21": "2ZJe7MBeDcG9JSfRMRZ2PCMEx6c34ieWfC8g8FrX2nCPZoWftTgHByUv1sindJtFqL5VXbrvhedcYrgQyV12ersS",
  "key22": "2HXuETcJTthpasZvXDqkJs7ST3oqmTJVQ6EtJ3XJ9X2gRsjFPEsTdPX3b6jDUtRB63fqiGLZyy3fV9QbNWHhYVCM",
  "key23": "53xURgPJnqyKuyB4fTffnkpvYRb7wd55E9pavQZTNkNrXhPaK2otsXi2kpR6oTRcEF7RMy3LfeB3NNhZ4X7WHny1",
  "key24": "2s9rd873QSA3wM4QwoTxg8Ug2jVvND9BGZa7NgDpwrQ6xg7sQDF5X6goTsfztrYkLR62GWERzPiVXvmp4vSYwfo8",
  "key25": "4tGLqUycaXGUveWznvGZQbNfBH5onW5w7Sn2QcxY9z4Kd7Pf9ZFVJoC98nLzsT3EwiXfRqaanQuKvapTMPgTgtHu",
  "key26": "3Xz95TLdue3fsxVHptELChABpAbogegWoe3B7azHVcKAUCcaSCEXLGYNUMpHNgcySmxmMN5nfqSifLJjeXwS5P5P",
  "key27": "3sK97UcMgLewBM84XXmk1kkBWdufriksJSmdFSVkf7xVKTr2HhMwJLcastZrJbpTzWnZsh8E9LcTZs96xhHw7fF7",
  "key28": "2eDAT4FSyaSNR2Re3z86zsbNenzmgHHWBbAicP1NrMxRY7XkY4ty46vckF1oJnz28bZGhHwebaxqY3wdcPmVbjsx",
  "key29": "pkxuyg7xpGWxb1y1NXL8zTtDgcSHwJHYf2KM61bpVs8G5nq99m9SmcVWPJ1J9BLdND7ZEPGvuRtNrxbk9fX5fLc",
  "key30": "4MkBSE1oVtep86hPSJcTGakxpC3Kh37kg1BaxcA4e2fhXgoLJjyhyXjghG578GiNBwKSiDjXTvcLo9rfWzQ42cNn",
  "key31": "ThTENrt3ocvjsFbDn2m3FA8wy48gnL7W5RxgSRLDUnVso8tGMqK6dXo6aW9FeZdhQdgjyNi2tFNLjz1hpJ6cgDX",
  "key32": "48gQ3iTfNv2QEA6TfFmg6sFyf4k3xRiDUeySkvRNgfQZNwfePS8btSV8aMFNXhmbyiXXPKL17AGiJAuHCqN7JkZd",
  "key33": "27uDSSg5yryQewJeumNPXB1qABxgdYwAxaor2bGg8fGD4MWLSqPrmaN64hVRNoQDqsKHPQ89cfEeSujLkTaMx4JQ",
  "key34": "FRZ5tdHAetPEbVJSayjyTMpzVoV2joqKrtfT1QDkZg8h3vBwtwRPgSr974Rq4p89HH9W7LqDCRNqexRdFj1nG18",
  "key35": "4rtiYQoA9vU1VqyuGaRJ6ZeSHcrcw9JDee8C1dWioUZ9QpBMGFcrKwgGcFQH4g2fFy75qgZ2R8sqowmGkBNR7Gus",
  "key36": "4QymGnAy31BrHRS17ZJMN3ZVDaDesuNu8muq5D24fa1hheJAob9pdHvj3TZjHEwqi75dHKroq7rca4rDrELF5Cig",
  "key37": "5ozCr9KrDfAtnkwoySrBkKD6TBnU3rCnCckdw1RWaPPKxHpbnGYAVxnHmyoFzgV4onfKkUdmoaEZJMAtuytrwJmH",
  "key38": "5MaKXK9qJHFfRAFKRxx8ifgSikQyXXDE5ftpUmAjXQeoUVjAfcbr3feh55e9dZQUYdYm9VXVesj24HMZB13QikG5"
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
