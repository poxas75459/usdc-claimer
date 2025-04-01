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
    "YP9A3Es4XeHnJD6pskjdeaSBgLwvnKYWXzLZP1jfUhepaPUyVLTSQdMHsfMQrJvFtMUXCS1uwZpEpEWEqNj5XtS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZiJbjsbDffEWrGJp7LHoeJ9DejpnDhKcC1kSPg6GMm6KxDCEDiihTUA8nRGRMu7PeMHaqVTDVJqncP4Tfbf9pNf",
  "key1": "4tnSiTx5vLsigqzgEw7w2wshgz5QhCNedNvF83LutFvJ5PxPyubxrFgxBro69fh35LubvNaoSW46A7pbwfhTYxhK",
  "key2": "3YmoqnswH8g8xanre9Jci3HNt92LWmMCFThdbHZGi5vyunm2Ur6gc9TAVu1uYZBbXytWbVKdNi2jgyGjTv78szSX",
  "key3": "4GiEcrpaFrbrNKxyJcwJhhivc3Hx4uZdydWSkAT1GCv1s89sv9daxCcE78ENZriajK6yiHkEtAqcpHA1pdLQbbCU",
  "key4": "3RAK7fojzBLFDHVHa7TkJrxPxtqpnotT6PF8eAc4pThDkUZH6RAx6utE5bAP9Py6mW1XsfugoeiPA1vBD9G6vxez",
  "key5": "ukC2WkpPq4bfMhN9i9BYYsvuecpofQprknpyjpWKmhDh8apRKXXxV3Vf2rpFuXpaiAkgnYx3ErfepyhBPFsrZK7",
  "key6": "4mbWjpiQBdQbNAi4L4FXGpBvRvUZbqW58naiqN1ghvxgL5faiid4VZkjsXiQoERaKu4ZmejYmVHYfvwFbRbDVHug",
  "key7": "cLbXruNbmq68qy49unDakrrdXu2ztqSqxPZpHDQW1Qw99yce3iHK5z6xQxJWVoRQZFbwAek95KSfnJDpgNkPGMB",
  "key8": "5K1aB1ymf82XVsReRvTtx3GyTiqbUHMabRcsqxbgGoELweqnKWcYo2PXaWMxVB7Y5puioRhWrFvWU5LASrMDFVYR",
  "key9": "4hDTPMddXFy1L61VkCVfNG3AeEHBWGHA3RCYt2jDsonYPoeGisQBiHMJoMW6d1dxwZ4dpobMMPzTkiAYbCgoiLue",
  "key10": "5yxj8cT3QpYG9AsisHNumqyMx7G73pz555SMMpyMZd5nhu9VCWcXVfht93YL2uDZ3XZStxdEqAyeCxcjQx21eoTp",
  "key11": "44VYDniSbt9YARMadtWs2RxtLhVQafDmkqdNxasyeCH4ECSDQWLbWS1AwftxWRWrrJAtxc8Ms6ktswRNMfqqQFs2",
  "key12": "3rEQ1kzxou642J5bpPTDJcM3bMJ2YSkvC6N37xEm4BLeMSrDtru8V79zbp1PyPZn9qsz71Ah5ao1Cs2mSDZo1jsa",
  "key13": "3FZFPswmRsz7DYmYaZiABGsfajpmP61kw6XpSARkqvtf7C6h1eGp8k3hu5umAud9rc3pKfxna4MRS19dkKR1HnKg",
  "key14": "5DyryHaAK9LQywPy84ue1QNt5TY3GGdZGqtwKjv5SvzbZ5z72T7sVu2aSx3EcbfLwPqkidnugJmRYjKCAbQ6Nv38",
  "key15": "3LRpLt2oc2Wq7ecoX6iG6SCjBZ5phhJovPZeNPuj4iLZwfhT5RtpyJTmDGVz2GRBxxHMqdiczQN26VJtvy5uwbPs",
  "key16": "5D1Nqpza7aUwmo45zTsRSmjXGMjggRQtz8Hq3g8JcGHcPcAN9b55jwc9Q9rPV2Py2MwxHJKNbJoBEBf9hnc1YY57",
  "key17": "3M4fHHJAnDLDEBDjx9YDR8bRPdtyapWp9xzxkwVqpQASikpUmUsQG2vAeqZT659hj1E34QntRjfFTDtQZ27SJ2Ri",
  "key18": "3minsqearXZrQ8AUHfd81qXtAGcaYDHqeJYDxgpzaTTTCFPEUVEBM5RKNUAPUTbmGoT7TaQxsKTVf88w12CJPzxM",
  "key19": "4XeZEB3oEypnQ47w8ByDrMd1yLKmJKNMeetn1pSzLBbJiH8MVi2SDEzYKdbN5Zemv9uppQ7Moja1jdNcdqvJGKGW",
  "key20": "4WKdrWWXGguXBGhJxKv8Gh3thcv9S9egZaffLBpuTqoRrCskvHWEBkr1hZGB1GcUXCbEmXxaCyxV57ekzp6fC1fZ",
  "key21": "waRZuGd5jjrrychUs5qHqhPscNH245bohxt5KoD6oSUcNRiTtnvpYQ3AjdvQL5E5aC6UTunQ87i1hapxSU2bc52",
  "key22": "5VcmaBDhChNNJAQiwgwKnM9v8nnUALpZuBePhAZmjNY4e1QBWFLgfKsLe3T5ZH6vkYv5sWMXXoaAY7NRRQzYvU2r",
  "key23": "5f8e5e2qkF1LBQoRLozXyVL8ynv2FfYLmZPn8TJwY9KAfwacQYuEYYd7Cfdxth7moXwmYY8cz3m8ec5giBmFcqyr",
  "key24": "3t2KRS3QMxKjENxfdBgG2PaqxHeg3s3Ufap4vQaMB6YbTXjVbJCzUuykjVbdKpUkeN9TbZoG3XCfkPHwuQARjQDk",
  "key25": "42apjFjSGC9x7cNyU8VywrP3p76c4ZL5xEaqwNhtUnikKiwzqCnsdGJSXsGF24wqd2ovKbg2rpnd8fUrK5iB2ixA",
  "key26": "5jsQrFSZCMrfkcWN1wsDqbWkLA8pVMjNbBFzPPc8AcoQZkV2CviE1a8jVuv3oA7oKziFuDcp2pnPvTBwSq8YUwPz",
  "key27": "2rdHiZP1gERdUPKymvF5nMQ1sA2rfsJqzfrKWkLLvC7wKmxXGUevGyzt5VoSyrwJ4vaTX7THn1wVw8PR7VYXUGfj",
  "key28": "4EgxHkGZe7QQdENDk1BkE8UmyD2j4pBTxKXnaxoCHDxSXPtpicf3JfK1bgP3QY9GUbXS3WtQQSupvk1rLzo72VRA",
  "key29": "4LswGoU7eejYLPBsE3xEvkkjoCykkrQgh9Qc5HQu9UPUomgAi3iwU5jEx3rNrbUNaJhwjTLzvvRWgU5ixSdWUjcW",
  "key30": "4MPF2V9mCT8Kui6BjEANP3T1mtVoeeVUKX9tg28fD776itL3MW5twvg5wvF6PKFVVwYEiXt8VpJou9cWe81h7QWU",
  "key31": "cpKRy3UxQeKhX2WjK5LRMnfpoitQSz9eSahvNrdiUCrbPiUFe36XT25ndA7yJoxa1t96jgcDFESXLQ8x4LgT35t",
  "key32": "3j7z9ARiQvoD5sAkZitiDB3u3X8dguM1YuTyGLanUfT1qdAjF7t454Nh8FC8YnDdUByDBf4a2YmjcUydQdG1uhaW",
  "key33": "fLbswrjEX9jVspzf5qEuMfkTyz8RLjXyH3BUXLdjtGCdoNjWJNecNC9QNnXGrwiAbSoPTR1GW82dZm1eJ9G9NKC",
  "key34": "3zugHxgrYuWH5vc1ncnwQUmv4c2m8zVmSGxbSAKCruk33ACZRehXrmJQ1g1zCfgm2ZWj3Uhd44vvaXh8YM4abzX",
  "key35": "4B9QT8t4hSmg5R6QuoZKX3twtQvbrTtfJiuaT8TmZAbTBjvAHVzksdndsqKu9kX2z1z113Z8JhsB2MoAbk8h664b",
  "key36": "3wH8vaqKjdiPmFgMNjR5tnQV1QL4tRQ5PnucqDNpp4DKpVPV7HbTiXBQPUMDDUnc181dkZ5PqbogtMghcLLcrSh1",
  "key37": "5eLgibFTsnWDJ7qASM2Zks9hqkaPj6k22UwaBTQC981vERySaBFfxg1fdGpHWziXfqd96G2ot5u47bwpoaDXDhB7",
  "key38": "4pRfAFgyBFM4RXqr6zj6LiqHHRymeY5AtLmqLwPqpDbZLeXkRfiLK6badiGQ9xaTpPduhEUHkDXgQhisimMpEe1S",
  "key39": "583eLKF4AgVNcUPBcQd2MP1w9pD8TERXo9MGm7CMJjwFCC3qGcWH1dJGiZoUcE5Q6b7rmasamgy4dBxkP7W9CAYK",
  "key40": "3kaajEN6CMCsZwfmMaFzKmmMpACobR7QXzAx86oqEsB4QRv7fx9eGorA7ED6sBWN2GUgWXeAYcbXxJqRxgSqNLin"
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
