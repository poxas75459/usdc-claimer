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
    "4enfxhszNe7kcpqWxAJJe8oMAzoezLSe8KamTeB7vhjAG3vsrFXs5vdaFNEZ2EtEQG1KhbAEEwpcbn9anx4oCTWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JaHK2e4G49dUNGuJbrmPeYcxR5hMhEFceTxH9pQ1hyiRNsBeVfJdPCJnYdSYbhS9FUSYfnBWSRe6qaswgk3u5p5",
  "key1": "RgYrrnmt8nywK5AQQ25jU6QwpoVkH44bExXZsnfJfE7ntmU6vWYKNRhkc9TcBSc2vShvPvWq9WnqSGAadKzfZ9F",
  "key2": "3qnLotwG8MRBR4BwWNwNchmsAkZiSHxYqoJZRxhBNhDTpTv83pWNr5R6AiH3ftwYfZ6HGZ6jbzrwRzmuKEBNCm2R",
  "key3": "4g2uAYSd8BQGA2ZvJFEemr2cUqiqTbcqXbF1grEhgNFvza4AnpnxcZbfBktdXXtjPd1eom9mRxJVqDx1ACiQvET5",
  "key4": "YJmiP1vqMNN9Srvu5iUqdwww6p4kLWfsgJJSne2PdvvuyLQZneZtLvtWGCzPZy467i1P7WzZoZFnm2sNxvXpK7k",
  "key5": "5QVUtWuuQDur8dkCMPLrkQ5nM67NAbvitoHo91GrQkrtb9xPQz4yYKWq1gwqzxDZYEH6q1zkWAj4XknF5PQJmLqF",
  "key6": "49qv33A2ES4runXquCL8yGBRNkZbGHNXR3A55XAiuRXbQedYgvUjNAeKohF1igXoXMoL3LajfcvzkYymExgq7bCy",
  "key7": "53VDHfjSpXPn4WjccAELa9qSyTwXoGax9edUiaHhEt2KvyScZ5gEsoq7XiRoejc83JSmQWKo9r89Ar4nhAzrfRHo",
  "key8": "2vWQuqKD5mS2X4VAz9uh8thGuLpQruzM4RjBv3ZRBZNnhWXkcQFqyDb6UwbDpYsi9LXkwc4UoNv8RePMJiFPHY51",
  "key9": "bw11YmCe3nkYsUKhzWf82UGqbwfx8XKTw8NHRb4gRLaLdBCdioS7DSecokcyQXyhAGvNLJXCimRXo7qJhi1Rvvj",
  "key10": "4WBYHPg5KJjpejhjZHrYNvKt2KQ2PDH7czMQ5kWuYYh1frWWNeKxvdW8imwWeizXGSZhJu4r7FKBc1CYCnZAKTVx",
  "key11": "51iwE1UkzWzLufPHLEQ9X81B8emW3mU23oNyVjqGYrAFRRbCFfejAJj3tyWqZfwrZFxEw72c2nTrhcJwakRadEwH",
  "key12": "5UGF6RzbWJ3aSSsS6smt2pcpjzCoGQ775yto3DSUczzsimsFJZYo55Vw6BMGQDTcEfuStgnVjq6QZ7wkoAVY59i4",
  "key13": "KaTMEisdspC5jVwZWJLxqSS9sP7hddrgY2suDkLxfvybsjkyqGYG6HHvxyDHEGBPND9Uci18oyA18BqdTnL47LR",
  "key14": "6XStAMtjzfSuSjeJB7oqRNfWMMkNYgD698bN26QChVmajBEfPubdRmpK7yAve1PsqSgZydaDNgQWy6CnxnYwF25",
  "key15": "5UJSao3DHn2mynEXWyGgdpFxPKpvgFMMiDpFCwnTx4oLXahS84YV7BPckJmeT8VJkZxB5CGyxvQTYbf2UXfpD49w",
  "key16": "3vncJXhHua1uZjcovv2QmmP1zJNX55wrhUmEwnYaRzYzHaAkrM24yGrjh7ksxWMM6gyJEZeims2AfW4z8zMS2Q3y",
  "key17": "38F1FYR7w2ZKbcidCtNXNKRHxVS765dUgsD7AQ8NhASC1yhRDqk5HnLH3sHLX1yNM7Lt5JfLPQZctdukjQcbC7H3",
  "key18": "i9tsbKzscUZACgtDFX1DE1YRZ72k4vsd7ZHZELQdocdJciXZ1Erqga3Eaq1VawLfbsu2vcAVJQGXFpedJjayBT4",
  "key19": "5AistACkM4vRTuDpYUeHWbP6F9oQPUhbdnDN4RY2DNEtCx9wKSXgeKruuq5Sgf1dLzi4qgqPvQdnjJSqar8TiLy9",
  "key20": "iMhCAxSGX7Ly7md4DiAdvHBSCsWQ93xkjCgdE8Xp5xmdQdXBub4WwDbpEp2gMWEzSshHubggr88tsBkDBmn3awT",
  "key21": "2GcCQWVH2uuMfpfbtKtahFrzSBN7emWVQzhrftLSeVufCopLk6dH1Kg3aDDNfdBULiBVtTwSXBkNx3VKxmtykEPG",
  "key22": "5yiSzZzkEDeVFyxwRnCUzAS46JWBgjiwnsNWJ8KhqCALZrw3cu73YhN6baiZmKQbVWo8GffYgoudwNy24LuLJ17x",
  "key23": "7W2nUGybLsSLE3YcGYryw9cW7vCw6VuY9mgkpBNtB4sRLpByungbRCnimnXKP16H75otPmqjfLdKnV7u7jyJSUi",
  "key24": "5fQu5yor3FVCpN4fcLY5fdqRaWKe61SA2ksy98XkAuxhMw9oNHP4cL5Rx1Ao1ciig8dhj8eBcFHRwY8fmX145NtS",
  "key25": "r2T3hqy81oZ9sBzk858x4PqFY19AvNexENwPUbw7uTdHyXdzCPAHFaf1shicNEfTPPkDDGGRM9GD6FvnPNbZjxh",
  "key26": "25sSryBfykqtjsF5vXtusWJHHAm5ifHqbkDSkKjkHyPCGQK3KepYWmh56RUEJ74ccRyQvuv6JpRbrQTQ1Pvmhu6P",
  "key27": "9H2gDBZMKUYWx6fp1kjjBzVDTcMz9vB72RtNFbMq23ZmUTqkvkorn61sB21yYmzA2H7CUK9WWjHiMtyiLD5RydF",
  "key28": "4ZKL6aHCPwgvaC9kA1XLQtt76MVvNYaKdUPwML5YJvPhVUFHaRKiNf2BYpUXfpYyRWxsirawzwsUTLVeXS1dciU5",
  "key29": "5rGGHNSgv4sGRGphG55XYVQc7BSapL9C2Gr5eYLGG2UANhkGHjbFRcfg7hyhF5jFFE5JZbVfzLtp5gYwB8KwyKFx",
  "key30": "2rZQSY6JaJgvkEC84PewPCaGZTixaVGhcYMe8mSUaisS4F6X3JDxZ9oyVUdRCBiyegguT1Ge6gjVQuuxD2jRiwcz",
  "key31": "46ZsHLjjKPts2CvHUwsM2e2QWspXNM1NnDuWxgUPAdsSS9rsDyu6jLNqf8a3LPDGLNs84wR1axdi3AdDvhEP9ywN",
  "key32": "4ouztYSEabrW1qZ5rD1QkiVhDF2Risdhd73PEPsjWYWX7Jv17iEWZiqEVxUdJiJt9xfvegGvk233Xzz4npFYnGgV",
  "key33": "57rkra5SuMdKgkgd9nrfkQEd7taPy7yxbfNRFDLUA9oQB5GTBKTiGjcGXbV1FkswX87ByCUBjyYStLerPsEmSpsM",
  "key34": "vGjX5FzQo5qToqVKcXw28TfRNk4zj6tGHgF3D2ixXd12LZMdSPKRec2DgFZTr29pNoJYLJKwc7GBW3U5JMUqcYD",
  "key35": "RRobLv6fVKPBpiZR3LPCngN8skVAR3jYpgpk2nv7tGfdXJDugLYGwo5m2jdFic8UMPrZ8jtcriSiPpyawto7uHe",
  "key36": "3rDjXSJ5KfNTHpgspuFKFaghErmT7YqbARiqmcrmut1BrJ6bB94CMgXcnKJqEZnC6kdpjbtKdYH4vCNUkPmGWktR",
  "key37": "5AUVBgMVPp3yknENa89Ghc9VHUTfREDJorGRkVf1p7BGpAFSmZ2BHWTvdt4oNJgsJgt7HLCnKaqmhVHJNwaiwK53",
  "key38": "5d1Cw3hjXt43WtqhMSyJp42Kpm4wj2wxroQNj59c7WKucZTnB2ERLwUjp7vX4fqEczPYRLqWL2kyArV41imLR3fW",
  "key39": "4wQ3xfvoe5ma4xYWJ34HvhYXAJVUk6WbpM5vx8MY3nq5HFDpKfMHH6jqfyernfg8UimW93YSZLAbhLhi7zqF38Fd",
  "key40": "2xmcodpfij3Eh2ZRYScuQ15o6ZB8cwBQnb3rfuqoTYWjab2eTaUyhjp9JmsGszqKgV2MJA4StuiWZ5gpoME3ZRqY"
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
