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
    "5JymdyL1xhnCqJshsaLYRF8akZdtnfddgz1YGb77SGHVVnJ6TqRbwPjGBdc5dY5tNEq5bQswPigaF1sMD6ggxJVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dq2q9R29bvUgy7ax5K32Djixo1mKqspg1CMh1eas5Bznnp8tvNL9Rpq9dXfsVpoM7onpDvNeg2YrE57SiugbKvM",
  "key1": "5HC26o858nV1jTdU8ehdVsW9u7rCUVkwCGNU8LWRkAQzTzz2FCTuVeM3ogAf1m32MJTSJ8GMPuwE5LdnhAtXcfaq",
  "key2": "4B13NundeEBK7LajknxexEcALUktaZFNSK88RJ7ttUaZknyKo9PPX46HdSvT8avvDBNaXJRnxKwRB9a7KYNvAfby",
  "key3": "59AwsgaMqcNLQCUKQotbhAcgLZ9fERHvEHkg8EZzgU35w5TzqMG8oemLrqCN8w7ABoar3ZWeMbAUGTacDnM2iD63",
  "key4": "5WuEmkUaVwfEhUkhD89bWeAN5hMSm9wdNDSLn5vbjSrF4KykJUpy2b7Dey8dGMKkb3qKaNWW1kSF7YaLdeK63Zu6",
  "key5": "5ZBVjxKV7UKTaPLyA1xDpFzvcCXksAzMJHfEhG4SZZCwjDfMdwwGFq88jSvYRyEW2gHjp4EgaQTi9X9rhmmAV1nd",
  "key6": "3DkdZEJsssMgst5tFeKezUPNLAfaFe24NqEtWQwRtRJNHpkiDdNyBixXET7f5iyoqxzkQEmzWmxa9aV31o23D6R6",
  "key7": "5bzYyqL6RCjxpao47pZrtfqkrpgKVcrD9AkBhs3BxZnPZRgKJf2TxqCAT5jr1upN5FMroNyi3cDGZhpdD5Qzmurf",
  "key8": "2yLHuSRdJYXkZ2N98i48HY87bK3T6khTPgwyMg6a2MC1xYWCqwtFMssjqHGSkkvRD7VHHBi45ATFz6jb5oZFkaS4",
  "key9": "4SZUh52GjzZsChWfvkYscYxbLtmaqJWq9EFC4hEjqycrBF5NquvT7aShPcamYLS5uhf3skJrWPLJ4oJTywi46TPN",
  "key10": "2fTagKjzmcNyjPEeqc4NScdsrVUzUMDrhUJETKxdAxHHGNkceNKHjm5iDppUHT9CqLEbLkUJwvf1muYUmDnESDeB",
  "key11": "1hNUQ2jHCermsggEpbhpkqi41gzCqWByr7iyuS71TV5L5kPzHsd4DeH5VudQbNhdb5EsNPofRbpMVeQtT4SZKyN",
  "key12": "QSsqkFtjtuh4hxaxcv3M6JM3Q2Gg941nFtnSv5LmvZextJkgNa1EU3Uf9LgEzNUksr79drzaopSDPbKd2PvwWzo",
  "key13": "5QSdsbbchG7ywuMkeFgyUV27AzuYNpLJVavs6JjeeefW8jSxSwcSvnA8N7jc4NWmubh7YYYXzR9xSuC61kVjdQrE",
  "key14": "5xbbdWr92E1u8fGPXSi6ZfhRZTQEgyPcex8nimbyW15z4yTs4Ww71Sc6RfeXk9m3PMiLXW2vUJqW6KUzMHehKdp8",
  "key15": "5VZ3ipy6Xbn8oE59SRigcM3rE5pUHqNJ1RfmmMVChwnehCQhfWrBnjYRmhG5apdgRfECAN4cpxduo7hrmhDiBDHF",
  "key16": "2b23MzfhBgr2cEyS6ytFwK8c7Y6k1AnuuNrYDtFtHF3GM2WNo9QgJxqCSNGdRLgminPLgUgUj6MBV3o6xSsmq84b",
  "key17": "5U38qzYXwJSEdk2pL8rvAvJGJPZMBqed6d1qv51Pj27K7BqYyp8oU6iyT8eC9yGjGVoyG9cCMBpnq8n2zoKKrr4b",
  "key18": "2fWef1evSP8j4dWvQUpNc238d24xEjCD8A452VLKDgRuL1HTJVmV9h2jwtC8Vi5E45EgnXx2KotetoxCfb2BYRum",
  "key19": "SYiDZcns8kee2Kn5H5ML63Q7fLAGe1NpvrSPvnumtAoHn135C3chrMpgWK8YWgjSi3KMxdfE4WTUXDmymhDmAz6",
  "key20": "4mYJpbhpTeaDxXCfhoL3cTiC5hW4KBBJsdThQdq1xFHZ4VgPmbZLGYZnsDDkX18XT3pbtz3W9EYQm8AW2gQkVRGw",
  "key21": "5osTn6hz7pvHfcEH1MbLLiPoYWjgQ3uFjpP4rphVgmea3BQSYc5eCpMTjE3xWah8esvB4DXcutLgQq3qJtCuxSsj",
  "key22": "Bf1g2biV8NUbjxDLjY6z4oE7XEjCpNU7gs8Cv3tHWEQTM7rENV9eHZxUjbSMvEr6EDbGX5uY8nTSVbSN3r6C7rw",
  "key23": "3xgNfMBet9q8xMhn9P2GEXz6vRNm7Nk7LaxkrDTQdAabBh7JWmJPWVzVyvT8oTgrMz8L2moH7pbg4irzQ4NJL9Di",
  "key24": "4zF59t7CKxn3jMysRby8dU7rKqdnteFfz4k8pYJxGSUDMoGcig8sCSk82YCFAGbNfNNE78de4VkXSKKw1xPNTcE",
  "key25": "4QtvSN7SckM8jWFbbzMo9vFer3cg2nC8PiHgc4Fqxx8V3iBkdCAqVdujYNibPCrEcQGPSBsQzUH4nAZrxGLrh68K",
  "key26": "zZexu17CxNekAh2yHCbJMZsxoiyVTHDFaVjA1H2bu3npNAxkzmywrg8RzHMVFAb9C8A5uKNKX2iugUqgwxhxtzd",
  "key27": "5ArU3sRSNLjVNyrhZQxHHQyvPMYzLaLQXURobcw39nEWavmjNJpLcaz68EprThzufeqK7GRvDEkcru7iNsSHJ3S8",
  "key28": "4d5G9GzPcARzgoxxQDtfAbmi2xx9aNBiY2pqojrEntMTmtYzzoxEQcfQEn8YoLVk8umDFwYXQrfMVPRs4hwmSixk"
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
