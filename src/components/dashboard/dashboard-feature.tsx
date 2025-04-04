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
    "5uxNfm4w1YXEVen3FnW6nKmgtqyFC1ysB5WD6vL8x6UmWDmjFHMRUZk6WUFkqKAyttEhw2K6YpnPcG4hqmo8tYgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Zf9Fs7iX9Pw7ivx55K2mia5fWtzxWRuMTDJXy5GUTP9jKxRutcovhM9HKmJt3Wk7SNZTjvX9upxedvzzTuaVW6",
  "key1": "qZKDFPj3TMU9BHHRRDSUD8hFEdsGYp4BMhq9zhdPMXbkAEKVU4zhVrq4dEHhMMccBQStnLcjySdwVTV14SCWW2L",
  "key2": "QNYE3Ao6onU4Vr4K5h9GsPuX1so3LoZeL9PzdUvFKTGAs6uSTVyHMHeHezFAKw4K7CK7Ucxbh2sZ39HyiVYFxTN",
  "key3": "5VddmqK1X1hMKfde1HCFteL3Bv3mbiSvvFxi89pgE5p3FC4YqBAiwKwdXcxXExd5RJyYu6HN4vjGhLcPNYtbDkaX",
  "key4": "5e8chD9UyzFuhMhHHGkopJ9fgb2iD6zgga2nCFzNuirax1xtEqZyFdSJvK4hryY7ffKSBJxtbK2baJPx54CEMkHy",
  "key5": "4j5xwfjXtKGMCBcueqDsAfKekG9pykrbXqitYk6mKHYrfjAqPJeSLSUoMm9TNrdwVBQcd6KcxAJdQGqfjRjNfP6E",
  "key6": "44aAs7QNPAvEswAYYE8KsEZdpG2YGw2fxe7qhitB3My7ZM8PyWo3kcFgHgFZHCXgBP32wKJ369WCH2JXAPJQGFJj",
  "key7": "23p36PeWDKQf5MhJSSxQDSbjhzJoTvG3T3m99w6AAG1ASAj8hyQwDSpgdFqeEy7UxxyhLPfT1keiE9PX5tbka898",
  "key8": "4DqtaqnpZ43uiMxVCLuh6Et7BzZqn38wnaR2NDkC6gE7LPBo5V7XHLCziGAkA19JdpUYZc7KeZxRsjdnJJaDR7qp",
  "key9": "2QHeBzkjQU9xYK16MHcmYHonz9BwqxkD4r1ATzcebTgtfDM74AkPJzmR3qA8q4w8y3iPiKKzMhqvcPnkW6iVMG7J",
  "key10": "362riXZb8SsCRtyTSu2Csn74byWyQb12XQu4nn1JaGLjb8vXArzAtJGr72hzGcUfbh3tSMrT7kAVKa2AcS4vFTkb",
  "key11": "5tHLHCfnuX8F3J8X4goBEcVmJCT3bBTVthJ6gyViwv2XxvC7zuFijhHGqkqhyLybYFoLH1g8K7ngTUS4Dx4aXqDz",
  "key12": "4YUjVWRysKmVuFRMcA4oMZ9GDNuqHHCjtnaGTTiBEcHCozU97mqyUjZ8CH5xLh9AbX76oCHkrwEgouYz6s6bwukM",
  "key13": "4zsmCRpeCDGduNAzAFycuTwMFqF2gJc8yMkkPLvqTCDRiRuJA72Jxa24a9NDf2LeByu65E5sfQ5ZLWZkHCHcxCDw",
  "key14": "5rMhGKrv4hkTEgUDjURBhomEcQ7Ky61TAwMpsAqdgpyFEtNMQ2oNYg3wDmf26ZWpnJBXDRKq7SKxRWFst4wLw8zE",
  "key15": "S15buyo8sdErLv8GfDU8KiSWbnFiRpRagB9S17sPNm1xPyD8Rh3Cfv9UB3fZHtxpi4vZggp11449gPcB3zz7S5m",
  "key16": "MR9niVHL5868r3FcCTfefiyYdcBJEiRrtv5bHbGzSP4wYjBZVQESorgYrghQW6cX5hfRkwkUSpLM7wfQiJoZ9x7",
  "key17": "2mYPCX3x3TrDnciEM6GB1d73ZnEeGdcgAKdTNCifRYJDnEc6fdFtuJwRP8jP8PasjKh3k3rpDZyR5x5UxDHEmhJ6",
  "key18": "TJkbyAecEe6f7Ce7c3yxzVWyUZ73W9SUZdC9F3NxNE2hJKcvbjdrH5JgLMtDggwUMSvgKHmcVdPt7sd9U23ePdt",
  "key19": "26qNmkC6fQbv5hkbAUQJ3KZB45nmPpguM1tHcppuWewek7ZQjTMyyDSeip8VqDMYAHgSQdCXnxPA6diXtvQwz8oP",
  "key20": "5zTuZGkEzUcYE4wbzbnpZwCVFjfNA7j6RzXdRaSghREsesBNtM7ZEvTkBGU5bjUbhy73yRuy7jzzNtJcrUh3uzyJ",
  "key21": "55kt9X268zCz2Zj3CwztVnuHAj5wS8n3g7xYb2j6zsZRV3ygAxB8VnaZ9KMtcxjKyAxxsABy7Gz2GCex9Ud6BbR3",
  "key22": "t8vxGUsppyKw5fmeo8YBgfT9YW43kqE5ttZZPbtKo46YxnJSuo9vwYgnwpK841Pp11uUnr3GwNRJxGDd4sPPKcf",
  "key23": "5LEvX651D4bvskLpiRo6zAzwXmmkJhs9dfmWnEhckUUnUm9K9PDQLBHpxTv1RViaKRaKoq755hXoeuYbJULLz45N",
  "key24": "5LeQMudQBr8rQqkQdA5yg2uZnhg7WwrtRMwPN6SryyUJPH8GD4WakEXwiyvdmhXtU7tCUgs9h2YMEqyobEbWaPC",
  "key25": "4LWSupQuodBZKejUPkmPaxa2VaU3K9TD3UGwLhEeDz5fBCSXXehMXQ52KunUdxNajbFi1feb1sn9oajQUab5xHUF",
  "key26": "5ootEVYTyyd1VZMVTg9PfoH6q4P2Mrcw9pm4ZjjhZy4gRFuPrZXRocb2sD7PJLA1TjRCncLNkE3Sp3RYvTPA1nFd",
  "key27": "BsyB2gCu7pTXjsz23pxLSXtp9mqRv5GtALmUm4b3sE6CXyoPeKaA2brYjnNbvdE4K6JskaGwn9q5pB5byatRmRE",
  "key28": "2NYm3182n81h4bouJBqBWTkwFU1H3rwbUL7wsAB113MLTxU2u9S3n2oWRxVFquXUNZ9RpVCXfUa56cy7VCfepLWc",
  "key29": "eQ1N63N6roXUHRtmmjGw3xnbco9pVo8N9w1Dn4cAfemHSovTuEuTdmCenNnw3cUYc8xPLXzZ9iWLiNNvnMGU3Jx"
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
