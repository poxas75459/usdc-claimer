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
    "4MNTgpBBrdCaY6Sov7ikERxPywjEuPaa3xcJV63vN3HanRJVeDPeUh8Cx2XCGSTNJfeYCd6tbbwF1e38BKpAVYLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5boiSnhSos8piRSdLhVMMxemb7rXmd7WpaobbaMM5VPHLtH9nrB4ZpChTB6sUHTFoh2K8rzg7k1Ssgum3yAJW7JF",
  "key1": "5FrBkJFQc1Afn4brtqUcT1RTttXpgxTrQ4dC4tFfN5uVCJR9KSZYyUynBcyMkapmph7nHRxESXD3cLZ8UfspZSzJ",
  "key2": "4TQyHtVmALttpdMspBgAd39BYjTCoTEbSiYaQok5WEMQDshWg2xxcwpKcGTrahvKSKM1Vcj9sy8zUiBFV9W4Hjy9",
  "key3": "5c9vA4q45LmgYxnXLbachh3TdntkVAifdkt2WvKuNQEgsqHmaRD18BGw53huDo1efSHD5ZqV3e3DAC8vp5PeGLaG",
  "key4": "2JBtsoR696nZK4SQtWHxSmzi8pmtjPswmJzysURkBHWh5Ypjd5mMB9fiNpuPt87xCeokDxVcJt2FnkhtMaY5bfkn",
  "key5": "5vqpHpazYRx5FGhnWKevpZbG4ZvcbzTK2KzFz5NmLi9ZAeg1aPG7J8Ysrr5E6J5L32zvA7dJiL7wW26yr8g484o9",
  "key6": "57KwftEaZxyiKqR7PNK3omHU8R3wnF5m55d7PY1CUfFzJifkoo7FrTsnt4K82fsGPVZcpBpr1KAxDQ1MSpxomRr7",
  "key7": "UWAU2Hn9JwrQzUq8yXGRBMcXYB6q9PGZSBcQmR7DMrumVi9naAjhpF3wyMdTtZPrD7PFubReAEzRxrnRByMS3qm",
  "key8": "i9t9xKLwhbCdBqBEvcyJeYzcdmZwoSEvCqLJ2dgQXDquciqHCYAQAVjEgEV3jGqy87Y1r7Ym2FfW7kBwkeDpuDs",
  "key9": "3ZyJ7JhdxL4ZpABabwF4PCNmjKYPYZD5LN6xipXnmxTRFvGbGtrsdLpAcRbLCBPHX36QCkbnBJKJ6ZcqSY7EK2b",
  "key10": "5hpZtQyBWCttwp61smtzG4CuLBfta414u64YWzwt7rUBYWimpGR3veTGTpy5pfGfXs37UQY35kxKnzsSSLDPkfky",
  "key11": "26GF7RcM5zGpcbaC6KZZoA6BuKkxpbyWUCGSAM2CeesKYKZSV77zGdF1PqmDWrhmtNAwxZuhJYR4eomotSBohJJp",
  "key12": "5wFZvmpG46cJwmN1FrQJShCjNiQXZna2pB428kWrvRdfR83nmDSXo8c3aqwKriNUtgsMggU3VR5dYTgXFMjRXKKd",
  "key13": "5Hj772C7cFrXrjF3NCyP262HLHyz9msWCPEtvXbAvNdtcPQLNbzTGtfCHhMAbJANMvCPwxVkfPugN59j6ynBKVuM",
  "key14": "4ccTHPqacpdyHLF51rFtYTLznmPTfaDiSVvu25JnPCopq7myc6rJP1zWhhp1LTgG8tCfGdSW2FVb5S1JEzPbXjqz",
  "key15": "2oVMTZhBwoPbvJqDDFSoZmGnRCNG6fK6SxF3vGQZALksbZAqwAgJgvtwYRcSXgy1rZeovMm93oVfb33bZkv3bppo",
  "key16": "4V8y2QZRQY3vjq8BjhJHSC9Ph32WvAfdnLBzhmDEPagb9vpfRVrQoMgqjE9eck7SSgwzUvm6jtU1shDpX17e8Qet",
  "key17": "4vmuW1pokQBvbtVKTpdAyq4h3j9HEaohMfzudULMNAYrpwo5iAPSrVD5NDswcxsQGp64LHPag6Ji86kYGvaMiwNg",
  "key18": "3dXGD3oRbhiMSc1sizF9mWZNcEKz4DgiwPr7CNsbu6rp6JVHc4dq5V4Hai5KxMwWRqTNYcFA1zGMYbPxksX35iVP",
  "key19": "auSGrkiV4DX78tebSRUGQUv2aLPv3BLVs459KhiF7qfEbgUPewC7qq1dDWV5L67mcgELGnqjs5yZq9QsaMM1fM2",
  "key20": "2TPEozpPCsx4FMVVxL49Fw8xq1imgCAb53gPxR8NHshWY9yX6PiaCnyaADZvzLkpbvwnUYmhvajutVGjDK692ekh",
  "key21": "3VtRXEkNTNvKqA6axoDp4GcoprybLJVoarUhNpmGtQp8PGLbsPRUHkEQmK6u1DV3WTrfzL5zWUc3FQ6db81TqBzS",
  "key22": "4eJorKHtRPtt3ABris9f4Hw3Tx1EaVtjJGzFmkeuQWtAkz7JjL1fWAVVVybWZBf4aukreqoB4XaJ3CjcR3RaHxbY",
  "key23": "3Pkh5yog1szNvyvBEoXFL4NN2d13QaJzH6VNcjdVSiLby1szrL6ajsyHoWgmvUKJSa2bm5FEdMEqCb7CVcUTDdX",
  "key24": "3MhAJ6KkZE4fwt5RJnBtiTYZCuP7wvYgFrufJXrJr9VYAXQ4gmZ4yPBCbiCiGWxnnSeuSXegtXUexhuvCk44Sz1s",
  "key25": "3YZAguJgNnyr5DvQyTgRfF5fosLKZoWh1BvEfkkwAGyfwb8YvzKRjqTiw4CeEmW6xbUvfZVfwD74uwcQuLd3JhbR",
  "key26": "237vfNYc9X759Bm5ejJwPjr66fGQWzg3TKDfBXMg5MgnvmPDhqv8XRqh2LeiUzchAAnLDwoNvLP7tjkVDTv3CQFs",
  "key27": "3NZStJLHKf1x7o2mSxJ59WZWLybBnTbt3RtW894JP5NR7WHEj3Zr5GbFWrv26M9snkAcVvk3hDNDpEwTwgEQbGYc",
  "key28": "5KDLj2WHBfEhehRQCc6MYcFrAtgRsocVYum4U9AoZMXbJ1Vbwose8FQe3cqdtsYw2bNqv7L28DjKJrsEcvFc21oH",
  "key29": "WJztJpAUvvM3hQZhKNfp3ra5uqGsf9f7C58sJ24evJsEpAuCG3wV8opMAksbozeBfQSVXvwiHuxD4jL9gJvC8pv",
  "key30": "4fGQBp1Kyif2oHX3EBfwfiT9y7dFVenyYJ5yfEnkCgFFwiAqN1hr2MrWo58SngtbtvQ1Uc3QLwHMxT2RFAv9Mt8y",
  "key31": "256kfEuQBdwjAmzfPxeM6MESKuNipd7FjeV2HQPri7HtFJHNzXCSbAGuBQenwC27zqyLUvu37vrx3pU5utPWBihT",
  "key32": "sHvcuy3SqhA6yqAAmnpVKnNnSyLS4sm4yTTwY3pEfY8rhW8G7RLboPsqievN7eXFqLwatuKt4mDuDGuDWVaW2VZ",
  "key33": "3YYbvJJJUQykrhHbWG6SPXCyPK8rKvGz9WEswMAKSmQ42rYPiZRjAegmnxJwtNtwJjj24vrKD5M7UB79gBHqaVwU",
  "key34": "SQFZVXhhZmsDH7G3DUqCo1xqiiyVS8TN2oJWZe3rFf1cV4mmAS45GBuu6LLLYfRbQCzUapS2KkN1v9J862QsaKy"
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
