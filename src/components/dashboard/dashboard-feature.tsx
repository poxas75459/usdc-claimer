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
    "62844AfErqnfTWQPcwkTSTtoNPY23xeFZDN8HBmxQtKoHdMn1wxoeKSrsduepW5qhMWoMuqw4QrnEd77itX8cv3H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ju1PWpxn5FCC8n3p7yAz3iJotgiCjbPurtZv6oVXwxFZ1DjBmRe7MaABNBdu4HxPkUSuHvggLaffARpMmQxSfTC",
  "key1": "34Lf6A8d4j5bkSVJXCzk214nBDMQhtj43sL31Dh94NDWxCRtvL8WKG4Po3QC4W5MznadLv9f1CdUtuzCdZKNoAJh",
  "key2": "4DjA4UhjajJEHPbRaxzr8JSFDyn1qZiBXWK6tVyk3XkZ8o5ewH2EVsKcK6GydXreyTZ7Rcx5z4tQro5Q4ApZ172q",
  "key3": "35SaDoZtaFTaD3Gg8d1VNbDophX2crMXDKnfvn1CQizKHLbmz4NkPhyzbgyY5RBrizwNEP8GQvPt9NMe47BS7Mqb",
  "key4": "4MVvpKJQgAAgxpTzUtEnCkrMyj2G7mgxvZEoAyu6LaNpKfKVDGLnVbsVSZunAFpnuoaeAoaZxUJ4JMYnmfoRv8JB",
  "key5": "2ZUUz2SaoG4goB4WXZtgyqcmcB8hA6z3fB1crQp1kMbHgUHgpvDzEztvU1majdcDwqovUpa8ovRPTqhCKepPnALF",
  "key6": "63HKy1BUUgu4YY8o1cBRY8cf7WphZYFaHSfyJt6FFFK12KKYPX8pH6seNQwpvMU97SuSan2G7S9Q3DiMqxvb4b4X",
  "key7": "5nydkMaJWephRZDh22dfpuZURCUTiCGnspE3fPbEQGQLEcSr6HNvGSztg8rQK7qgfrC4quxxqcg9MNUcYZtnNuZ1",
  "key8": "SpWFRz6vfFzLTVoeAZZBY8pQM8Mj2BEtsVXgvJyWBeQmjTWg3Uf3NJYaE1HfLn1fWqmRDKJBgJEsJYQdJrXgHke",
  "key9": "4KTbqj8EFCnGqGMSKcjSN29H2p1GNerVNfMjnEiVUXJEtRrX2ogSiwCxjzQjGshLSKUSxpt6T4hnTrdnCvJxeB1M",
  "key10": "3tdJjYsk5FLLNWE9HRGVLW6VRTdSLyx884NA2wqcYp3YbTHnx4NCr2nVmQW5vLBu8ad8D3hMZxgq7mBMhGVadGLy",
  "key11": "21YZwjhDsDS5mX4nZBpvKTM7AGvr41YmoM4jA9cfs7G3yXnuXshGpY5Y7nDupnCibQfbecE9MKrS6gAuakbsHV6j",
  "key12": "5qBK25d7MjjU6RYaBDsrMKxisQBZ2BL2AbyhWCsdgrAQiuoM4HszBikJftth6G4wpVZDg9wZqtNCcRYMnkBspMmf",
  "key13": "48X9crEd36zSig4niGLWxPcUYk9BfKwpDwKRiKg4z9n9Q8xncxhKyCXampKDPRE8tPfHKMg2eTyP333qq2AU3Cpk",
  "key14": "5cQK4vqCncrCovwpHNfiE7MEcVqQRqy2kjQ1vfzWyAipocsAE5bntztKXP18XKxQZoydT93GV7DJwNjjg3SBKodE",
  "key15": "2zcYe5HVaYdzMcdBqH89Z7hDWAMTqbemLX4Cfnhbrc6qpYgjauWesL2NWx5PmYjsB1LghQ4hqxdPdQ5jMkzToTPw",
  "key16": "5FbY1tQzoKwMG7Uc4LwjY5JCuz3eWx7iaPcDwCgqnBg667iF3Qkv4TVf1PVjebcyQcHiBKCDfhfd3ajwFu54MNwG",
  "key17": "3hW71oEKVaLG2jYwmx2q27SpRtN7yyWHy7gdaRK9MnZADp9qjtgi89sLmtRLmmmA8WxkrtfUd1rM2jKB3stjzTfA",
  "key18": "3vcyu5T5uUqH3kDMrvXebtPoAePdKYWJWdrFvfeTjmErUmQvC8z9RqZgnSe3nqCAE2eLN8xZcwPMbAnyxbYnAnca",
  "key19": "2DM1mCw3jmSjWBvYBSWALfKVPHvUXHejn1nMGMfwgQRfrbcgbjaHSSjkkLaCK6B8qcX3VSzW4G1DGX4yQNKLXGam",
  "key20": "jBhvXu5xsDUUoB8fxuHvnyiyovMt5F4TPtaHmADsAUwgtLtWqahpt2W4ug15H1h43JfmhJATPTxbJzXyUk3AQYP",
  "key21": "3nNvWgKiEvbPsvfoeVQE7tLJGiZEczTw7pwW9xYJwarxgGrXaJnFimH6eUBMVKkTwisTcL377sdbDjGNkSTZLYHw",
  "key22": "hVRZft8NhQKTrwbY2jQSrRxuDsT7ChwUeEzK1ENjxLFPk1bJ7z3c52vUfSYCM2stLHcPaGR9DMuUMeoz5TV47Zt",
  "key23": "66sTGUVkNFAj49zbLkBJvKHpYqDme8P8zzFzijHbrRHkZGonykYBSSjPWkKnPDgUVAbqWEhoDTz4bTLjFb2hB6pt",
  "key24": "3J7hXv7h6cy9reHnkr19BRWTH3p6PP8d1aahwU4ZuD7U3GsmJbWX2zz3MCBuBtLcLwi76LRNyLXYNvT2a4LyuQWp",
  "key25": "y47SJw8EEgwP4GeqYN5T1cMN1NA1hARc5jySz21jHsW2LBn7RSinQ9ciA1ARyEcX3CwiCJhQPY58syieCH6cVvz",
  "key26": "99T1kZjg8E7Vyirf24TUh514PQEc1GivAhouBoiyJfmY2pJoQJzePANq5a5BpoG7b8goFWvnWBngfRtzaqiTfMh"
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
