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
    "3dyGHh3X28AAFKjmA4SjJzrfxGv4oHaww9cKKixB1qW8epdkQqnLsV8CJ1nsNFmYbYp8eiF5VRKaQJbhTTrZzqLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62PCaZrWfMLUuPamDGc2Rxb455GwAafNwqzHqNadT15SFpuiTix8ityKoSs8gKhSC9EcYMoqABWL7P3zLmq698Ui",
  "key1": "47Tuecz1iVkc1gh6s37oHUTu3pGcemQPBjpdtRQ7Zhfmcn25qjL7gUCYnHPMYux3zn8be52Zm9eW3nefZY5P8q7E",
  "key2": "4kXS7jjqiGgYygvRr2JVKPg1Y6TJ3meeN9hxpDWZkKFh9FjCzJxm6zAZdCQ7SQNW4cp5PcRweymNLE6Nx6Ln4VkM",
  "key3": "4YKf1jsmtMJSdMFhAi1SmhGACkunb1HeKg7nkgLL9jEpH8Cxr592Qjz7pEcompcFs8HdhgeFWEe5fo3NX3wQpNfr",
  "key4": "fgge4hNUXUXLgDMiYPP1tqt1Wyr4NKTa14Lhxv1Kira56pMwabLfNK6nR5jbZpkc2XmdSnwBNFx8LWS1UttMXMR",
  "key5": "jWAnSpkEcZNYw1FEpVPjceTvioiEekhHkFcZEVGSj5s4t19uPeijvrV19WyekPjf3JHWgC2nSLKZv4gE8iR4K7u",
  "key6": "2Dqs9NJyLpSE2CKgKLYprTEpvd1cbgEbyeEqpVTy1nG577XgjjywpviYTxgDjncV1RNHzwhRn7Y7j2eZ4GKZjKPZ",
  "key7": "3zKEYG4nrao7KBgPBsb9yFUQHX2ioFqtRb2WuRikdf9eAb8ukpLq1r7FhdGjMGkbv1QWTAEP2bHx7pCX8Cif2uiz",
  "key8": "241mneEnSHFhwuHFiyB3zAr5FiKK2wUUkepa28F7gzw4iX1VNP21CHcoXkdXoCdaLxMKKLTt95heepqF1e7cHDEq",
  "key9": "4oLH1nxsM6X7KtCzbyhWwZHBuBg48WoEKvfEb8wdVfk2QSu1QthVNt7SwjS8jNQASruam8ESxvdv8NJE1AGpkYJw",
  "key10": "4PKFb5363u2RM3sRtW322KHwR5toLqcPZmT3PQXMZhLKDMiWNWXq9ZQPnDwMyNxDiXbDoXkNgFcGWGNYTVEbHtmR",
  "key11": "5Dj9MEr6LshQbx41iAeYLGDtERLChcCHDXQpEzAHr8MxFLvmV3btF3igsGcWoUuMm9X7xNcN13JsyC4Ug1S7JA2x",
  "key12": "5BML7triXyiZrMLWv8GpsVK8XrwPCCtamzJBUh9sUHEnFGP2KdM6HkKra9Yw7ZkCHPykCr5LE5THHRFXwwnSrRhr",
  "key13": "4ADSGGxf6eGCozSwpCjvuHc6Dj5hha7moTfDKfLoWaE1UBLSLfPAsdFSKSN3TCCDGxww1BL4bCturV9CKDEUiEgD",
  "key14": "4b2VjZFaPq2S5A41zG5CnbZu3ptEgb7gxN9eYy64brCRSucSZGqbj9KwGe5dACrpQEmhtjcKGz738JRgoXmZGBQw",
  "key15": "4dE9AfpEbTEcemhp37qm2A8ZDKB6fd8Hy1ZmSUCKcPpBdsGmSEpsPpsh4icR3H3foBsgiL9vHJ5rjSXQPyiTvdLA",
  "key16": "ZH5sgvcR3W3HWie2fcsQNDpvAUgn2nqMKGzcVnTU7U9s8pMfqC6UxAzsC28geXDmsk8Z7GRZmcSGXHhuG7etxWx",
  "key17": "43GtqZQFEdtVduM7zvmjtxsT9k62pF1vzEZEYAgVBkzadj4iPbDL2D8amMcJpXV6AE1XKRrbAc1fCMicKSZfy7sC",
  "key18": "3t9egSghJtZbdmWMTBjtRLSQKwJhZT3SnKxJrZss36tTsfopVehWGU9wDWSYZ6YUcazkF2dwPm7Q5sf8hV7ZsP8Y",
  "key19": "5WW438idNnwsTdEUGh6A8L4ys6PYJoYQk9uTdMRWCCFLVgS6Zk2NMdTBfkt5mifnEvMrDob4iZr5LidEfuYR57ms",
  "key20": "4DBw1StAMpWTiHPd4TWb7g4MUMfpcP3FPe2HZ7EamqDU4uyV5FCFkL47HzxpY53M5K1Xvn3zNNiKZ474F4tPFW69",
  "key21": "2rsVJ9fHGRm94M3o8c7JnAjkpHnJx5ADRTH37rPf2ERHaLK2j6hfzpahnv7n1NyCJr5LPfuPMow6Lz2c4J24Xh5j",
  "key22": "2Tydygmqi5YZgJbFmB5S22jEs6qVmy8CApHhDTj7s4M3UcGSRRatG8CjRxSF5pgEr8GYTtAojNgZZpH1YjBW7qVV",
  "key23": "2nh2wuBSYeqL6gAEQjPKMRtAoAxVfbVzvek9HAErq2MyK9YBL4fcBBuYLBi4HfnPsgVUDN2rFPrdojEmnESNHYjY",
  "key24": "4HXCaxC8GGqfWnkpzF6J3ue9XbcouY4UyxbHKjARMmAzFwAGk9ehdQHqqCCnAP4GYKY8PdR96q9wBm1E19ih59xJ",
  "key25": "4mrkY8qQ2CWbfe9tCpQ9ggo6HUXMJDTTJD4HpVJrbFKwjbHUMi3QZaxDrk8pc9MQdqLAYihv9s1uR2vas6c46SAZ",
  "key26": "5kputyio6BVhDbh7nPnbQQixVoNR3wEPGUHCZicSvuh2JZ26PNZDj4bZNw9c9ZmVwCRsWaBRz4SZ7HK6awG6DfeB",
  "key27": "5eae4Rp8P2WzuJh5mszfKULu77Cw2ir7ouPZLr1Hfuj3eV2qtGwEtA3kuoa9QZGHYAsVFWcbhqdfJZpcGih5QgaQ",
  "key28": "5wy4Fd8jZPjH4iLa36aCpHGC2WZNaQF7vLxk2MDGmx5hAKdYSwQVkYnkYs7hupcQHAtCXtkaC16Y2uNmmw9UhB3u",
  "key29": "3DnwVNpK6VC3fTwFgPvbb7gXC7kGxmPbUqbLY2uJjo6UYf6ALrMS1Wv92WiERWypGN6emxVczVVbj9Jo47j8RfgH",
  "key30": "3rFVRnS5bsxzaqF8JMZNXtDy3ppBD65mht8CvZg9X82iVJnmVkjwkfREghiFLCsKRuXASYHMfqvkQKRuXMuHejs5",
  "key31": "4jR5HiZBnMwwMofyffq8pj7iDwCwy7Jb8U3EptTWL5ayJ7Ap7yUwYkFNnJNaaouxaxjeK9A2bBp8NFwk58Zph68X",
  "key32": "3FJ75515jfapG8cFVDQerXZYagtq9znK12feCBKKKhXBzQc9U5Sy88dzezsibTd5FZdKZnqCxGkWR3eZhVXMEH8p",
  "key33": "2Uaq8wLhQipZbuaFZKKXfsbTVdvRjhAmEC2cWHUjwhvCN4XpFrQPaRb69pPYjqmJjgvkewz5XSJtWYHnzPdMHWdW",
  "key34": "2LWp9kyi5r6DCfLfzb9VQLXZtG2n254DohZ41dDCY1bZUCv1RdvdjEaWf8hZ6zweiawFG1VrWtydGo6iuseACft4",
  "key35": "2XD7goc2E4NgjqFQ7PvMGZjNLm1UapMxPm9JLqzEeMBjYnHsFw2EbEi9DZrcao3KwaiQF35m5zRHXCfBvmTk8FsL",
  "key36": "4Pyd4xgDfrYj5qH67MoiVY9kAhxVCzvUxZx8UerNbRRYWz4h9ZiuHgfMfxsxnMosPfctuZyqzPEG2TS8J8NMpPU2"
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
