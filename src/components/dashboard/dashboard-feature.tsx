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
    "2QwK8DRiRNSrU2PFo48sSzZ4FNB8r7d6yqsza1vpRLiooCihRKSeYbL3nkqHBAJwBZLLUC8g6yDN349WiJZhgXck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gut87QAfrDtQp7PDQV74t8bEYTV9r2cafLK5NMBKKYWTL7KFY3Gw9xAs8nLzhrgdQksgbmsQavzktcRFP2pgVU1",
  "key1": "5dNjjHTcVmUmU2SXv4pTGK2fR9UCzY16vsC19Bpv7JPuCSKqTN6teRZ2BSRxCZHZGiv2ZoRKV7s3ynvPJuUSju5E",
  "key2": "fgkXf6XPKhAcNa4eYHACcyH2MoA6MyQJUKrJCoMtPBByb1HpbAQ9FvBvsxKcKmvhzcsCpGdLTWUydQWCbH1ryUb",
  "key3": "2cDAUfgUvRZtkgJ8GhHqX4FNJhDmmu3CEF85RqW2SobsK8b9ZEgzyYmREvVwpbyK5KnPmbJCzwZK5vCAxHEGqKw7",
  "key4": "4kgkzV1Gg8Xwq2YpYuLL7JkLppZnZs1psiVQLCKaH8omDL2WzccMgYqATFzTfU9BcC6JUZ2tUQv8Nt2YSTgeKg7b",
  "key5": "2XFPj4BuhBmna7QGHjUSzY8B46K7bAoRmut2QAhw4SEBVDt2hQuHgxw8DzKteieBcAKisRZGhvExnvZi2Lf5q4FV",
  "key6": "319AHLidRRLbgEBqfnEHtefm5fQyygYfVmxFPqX9tATkh5LitbPuPYBkCYQdY8D2qpKkM77dosSb2QwQzZSDcWzK",
  "key7": "31bzzE2Qashg57degzvqGXpehwRsv5N3WrBHjD1H9DX9dsbWetxnpBQCqdgGXGaLqWtVcgyUsUTLaB65HGACP2sX",
  "key8": "3rXsrRJ32z9GAbA9TrmfVVSQGJMmuxD2ygUKp8USWtCCJYveRtxwA82qiFWd9FVjZMJ4Qd3KPzgSbUXN7D4SLJrp",
  "key9": "5fq52G8a47bujDPJ2L4tLpd1GEGuNKijCkEkd7eEP5B5PjxUsx5v3qniKrk6UaFnuTMn95uek5Cfz2mWs1wQCAsa",
  "key10": "44rkDmHNcgmadF8uB219mtXJARRDeoKQDodUTFnQy9TtbiaAkRRcXmKLG2KEPKPJqeCi5ueCZEunt5AZdj4xB8Yo",
  "key11": "3NJyz3GyepgiRmUW1dc2yb3rQWEjpazi3CyzQzPKnkbsv5vNy2nEniqEgP3vbVCLXCDRGzk82Jwsd8wS536eNWvk",
  "key12": "5qkKJ6cZ24HdUVZgcCBthaFR4TMieHpm8CgZw83GkjhuKUQPzYyYKKSzdicccs7TvhcTYnTh6DvTqVBdET8Xq65R",
  "key13": "2BsQRgUYJaupJBCkNtX8Z6q2VhE6v1kTbwhkh35N6qJKZHueTSS3hae5veMHbYp4xkXnjdh1hTNo2kybTYGGcg3B",
  "key14": "5NjsymgJvDGooo6g3C9XGi73ziJdTVzRpKQPmAR5dJH5Fng1W4ErumcaZXU1hWM6nWspgxeCbZvefe3SU9z9qPuD",
  "key15": "3ZzFzMdK3aHPdaLjFdbAy4129KpfccjuBrc9vUeNmyrFoFQCsZgfxdbQkWFWa1mtdcqNFxfrrsNfbQzSjz5LkLub",
  "key16": "tfW6mvPC6zU2VEteqe4s6DQXjAJ92gZaFZSGxfMXpR8iav3BZVkzZHjvuUCdfvHRsAzZc91GfcFLyfbmyevNKUi",
  "key17": "PNAJ1PMXvqG16Co4qhzxZsQwzeBtDQ8waQCbpMbWzNhfKBq4dz5KT6BvrESfMcrwpCfzypvg7XzmET6tM8mkytN",
  "key18": "25cC5ZH4QPzxBtf25jvDJhWVRnWcuNhAS3RLDBTKhv62o9z7Be1AJTVmkN67RDuHAAsc8Xgu9ZNfmkVYuYHQkJwh",
  "key19": "4XMWiHQXq4BZXargo4oqucNBHiKvPzaSHdpuzS9uGFhMbjV21aFxWepeMhYX9YDmdSNoNCyRh5UyKQiFyhs1XTKC",
  "key20": "4uifUk8CdtexiGYmTdZ4kzkyWmGRoeaShGWzdkjDXi2cbnAA9Cbfb1hAPhQfb2LV1jGHuS4yfQQgsZzkSA9JUBvV",
  "key21": "4ppBnCSkhgdF84Mzm11y3Wz6ZYspoiShrqdtSQPdic6ufAEgXpgqkhem9UQ5QfYac2t7SXhJncG2N7VVZ59iLCjG",
  "key22": "5eGntZHW5oWthHJHUqKmTAmRgqap1uYkK1iipC2mrp8UXd9T7tkKEseyJVW1gYqRP8MKtx5oUfLJBMacWLsmrygB",
  "key23": "5tzyRUVTJJ77V4ru5v7YDs6NUoDzErPUP9M6MrnV21f655T9snE7jYFmsLWwyvH8ubStmTM8QRctWwPpZoy8Mk5a",
  "key24": "5hQNHQiXyJQse9UcmtEMBauRucQg1spivBbpPkLiG4uDFpfrUBVxLtjFe4xDhbzwWKGmjZ1Ktn3MovNnGX5bfhcP",
  "key25": "2j7FaMeH7QwVL3MoJNo18J9pPfviMeDKUQY8bgiSRngLQuLzS4b22s4oHo5uWY8huSPpEtm9w1XguSxejCFTAjQT",
  "key26": "3uroKpMDcJA68bL3pMEYSk5mSRyRk7cqpieEMu1qCM4xjJ9qMdDDAsqhA23YKHwEgNA3xT4k4eEisWcWDjKGVyaL",
  "key27": "GUgJ3UhnEoXB5WEwVBF9CY1Yfbo6tS9mh3dVDgdWtVHoNxdWsyic5Rp6UNGnhEAiLJqL7D3B6LiksB7KkT2VBwB",
  "key28": "w6DFnf9q7fPwkvTh4uyhNtnWoqmeU1pMh8q9azPR7n13gnDo6eq9HHktJPBZSpEFKvYLA5eyg5CEa9jR2XHRcfn",
  "key29": "ohj6i6rjnZqdChRVFnuPb7aKcktLox8JDLN2K6drjrh18SSRQgmnZ7dmFyuhHgBJXuQULS28nK3ST8PgS1nv2dt",
  "key30": "5tnkwBAJXGyUHD3nTKbe22F3SRxFjpzvJ47pvSSCCfRtYgzjLSg58Wa6Dd4UVWDyJxy3HeK31poSUT4oWS52GS7L",
  "key31": "2guJzqYqXXNKqFVWLCnCvMvk6Rt2eD4W5E2fUryLom3rrEKEkDhSMhguQjkbjNroW7SxDfEvXjXMSdLoa3VUica4",
  "key32": "3ix8ZbV6L6k6zghKHQikVNccJCgAVb2bocF98D54tXVgLAUgmoGJMwPqbmATjhVsKvJxe271y2i3onBGHzSm1R9U"
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
