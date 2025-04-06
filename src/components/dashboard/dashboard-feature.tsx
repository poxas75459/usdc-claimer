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
    "2JmJUZUSXm53a7D1rCV4dCKwbne2D6exJXwwyi48S1TKBAGZDvCh4yZZwZvVLjj349s3vhxrM3ieCc6mecGtZm7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41Kt1iJkqNUybs2UeeUKxVRnHrqK2JVCU1t3A81c7R6B5s229FyAvWtmUfLf1PKmmMPU1HiTEqZnJSQVjz81f2g5",
  "key1": "3R3jBMFEfWhxN6JcurrWqdvKowPyAVCQB283hnzzvmTT475nq1MWFJVdAzKuczsmFTC1WB9NfjucwDZusmArBpNt",
  "key2": "36JN9EwqkbTA8Tst8GGFCkv7Z57QPZ7p18Fn75RgibdgDhMzwDL36bZtQKaBvGF4MwvWhGvTeVHrCBmoB4z2QpQ3",
  "key3": "2qPkarV16HQ58EdvCNbQK5VtxaheJ8cGQJU3rxvNZYJDKhh6PpVwWhaFGkr9uM1Tqve3yfTFKhCymCLG3nUeJDrJ",
  "key4": "5XdXbDaKE82BW16gGvHVA7fvV8jhYXxXDxenKnARGG57ektdo6dKwDVJaA8f6gWdso7mKaRFHiHhJQoQHUWYbLeX",
  "key5": "3NbaKKMdLxCrGaYX6CaKQ1ZbtAUAqXRoLGN9DtVL4kHhEsnsyqeL6aM1vN7iSWxtqCSwyQh8cJVYDZXkfbcLMB3N",
  "key6": "2833nnNziMMzE7PaZ2tUXiLPmvjoizQCs1ctyeBF6f4zn8yLMkVZ9pfez2rfPxxLjoooh34HTitLU3oZauRGdgUc",
  "key7": "2dKbyraLQQJBCWaeLnvEhy7QFyy5YvNGDPbPb5BwvYG57F9BXcrZPJqx16Hn8x5qf1s7mNcLZUVqJJzcyoN36kFd",
  "key8": "3HXa44Nj2Snqrr9Zykv6HEyEHS8ZPe3eTbMpTc3wcDNTrrfPd6SE7QVdcC2kHtMKuYaeUSoAfnp89o9esRS3upU1",
  "key9": "3ZsViBQFVgFsNJaqvqfxWVcz6zznGpMXMxpSUNGxiGqApLYeyGTREzQnM8VpHeTG5CX6mgLFb5KHjyP8dMuePWdT",
  "key10": "2oSmnD7H7TscrjhVZ2uvhWkWDTza66HSo4RLaMp2tTgZgp5WhN3R5YSwWmqG5Maw85DTay3obPaF5if1p4HvQNSj",
  "key11": "4EP1qnN71uCyaLE1Pued1ZfgEkqjYjHZAwYQeF5PApBDbugGkViHqfoabdTUzJ1RroFJGqnftYDvWNRxRN1XhLmh",
  "key12": "3uAToQxoqX4iwLRF2PrSG7qX2LfxNVLgqbitU9TUC4rf4AAxGVgSt5uiPuar7ghG9DWUgjzpSCZNUxTmrpHBCAy7",
  "key13": "4zcHn6EH1X9abeFVeh73bkLyjNCYU1nNakS4LXoc9BhPAKRxKy1oG2wzCqpH7PMd66Dqjmu75BVC6FrARZxwLCKb",
  "key14": "4jpZXAXNccav6aWCjgBWEQcTS7mrLYVBANn1Brd8JB7NvGpn2GU5MEC8QRxVebtbJqnHahXMzaHcFtcoXoEyYv5b",
  "key15": "65ozhyHnwXRWuG1h7WRY8VCDRPEZtWKeFhzKfeHJ1anu9UC2Pq6ge7AfGzrwMrvYCKrftf76n35H8eMdeHGAoKng",
  "key16": "2TtQYcbVkPV8BckGYRVie1BvvHiXncpuzvK5tRXs4zwyearJ1oU3fEA2CKfCVGk9Z2qStg2e226CyWoXzxQk3MNE",
  "key17": "63BbRYmizZcY2JpaisuyC5i196QE8Xt5KuRVQHd8gTooDjRmzop7aCieDLgpbhpo4pZPMKUJk3vDtSGHe5aBADR5",
  "key18": "4JrzKyzia7xR9TeVc4P9RRFgpKvnJaEeB27zgRox5EvpGAiP5SHbH5xFD8r5nBascpW38KJrrWJhKJrGP6j8i2B2",
  "key19": "3AvoSxjvXqebFHvYKQQEXQ2YtQKhVqwhM9NCQviLaTXT3z7JSuQwe43TGtxpYda7yzkHyzQkgMwuaB4hwExf4nNT",
  "key20": "44vskAs6w4eFhtBvjoiQBM9STxpLrtKPw8qi6Sa3e5ag3CNavfCBnXydgZztMif6NwtEmXe2HUT62RWGCZjDSSD",
  "key21": "kk9Jj2XeLYN33nK2z4WAAwkisE695WJtp9JXkKA3MF73n5ZhHPahgsAvoFKy4keNNTnrkhmXb1rmzJLBVgnXDiK",
  "key22": "5Uc551sKEYCRNL8rQyMJ7kGRqV8xwFySJVc9jTZrZLgcNQ5a7YESuiiKzRaJyBW3j4DYV2zHVwLVERqKUtBE3qGP",
  "key23": "4mscbTudVEM28R4dA85RquiL3M66a3xA9SoGsGQGpq6USt5ejBjcoW8iRHr4ykoq7cwwcRtPvhzHFDLB81nBDvcT",
  "key24": "5rfFRmT8gJjZFAmicddSUGAsoWB1V3UGAhrz4a2DJcVGdqAwZYsj2jcxQFZn4M6zEJ2dxPURmWXk8kQYPqeGZwTo",
  "key25": "65kmTQLaVhUAhtoWoV71MA16uJadWnBFUMMWPgjfGsooFYKLNWeipBp72AF8qkkWaB3c2g4qENEXYxGHqA3eYmVU",
  "key26": "2rc4fhQyxNs5swtGsEkrxBcMggxnuZSbUCJoLEzD5RkRvBmpotCR2D9SJYobTWw5XV3SAJNQqQf8ARnVb6WFrE2k",
  "key27": "4CuMZN6aNSWmMCRGRqhuKVNovonKa6uPfkAL8wrojeNUhwLoufyoiiCD86ZTah6NWfNnkMTyM1LdpPMM8deEgpS7",
  "key28": "4fyFz6nmnDegPHLC95wqqg261kQJKzkuRRJ78BjNJTN7CQBUK2i9FVXiL5fuhQsGfmwAaC69Jd6FE4kEiDzLdWxn",
  "key29": "5fAzrv9VipLYjgc6phVWxz9VCCv94iiB8e46qfbXo9tdnDUQ8WA22P1yAdSwM2gKrKexwRrcAyRKekP5dG2EqreE",
  "key30": "3mGDCxsS2PciVgBDmdfmLDBZr4czggFvfZtqcQGFepbm2fQQvAFNzqNjCjBiSsCwfB4pi5YtUUQx9F6hrTrTKLS8",
  "key31": "5LT7DBJb68A7PkRpXe7MsyN8o4rfZgafmY4xEWG3FgSeV4UyZpKua1w819PDSyLV8PKzagioweJbRodz6eojw927",
  "key32": "53Lk98ZABEf4CGLFefucH3FQaFWkxs99j9T6XnNszDdw8tB6AXtKriv2wcVqmJtoiV8bXfL7x9oodrT6xU18eBvD",
  "key33": "4wu8Nzp8MxobdreYyhoLzausohiQhjgPqk5ZziEKsyXy5xjic1NNmM6vHfGrCygTFoAZk8xGGNnjGkg9HfzZQwF7",
  "key34": "46jnbDXHiWuCGNDZvWhF1NP63Coefj3qyGk3A8ryhZJQf2B8MNWZh4e8uj8xCq8er6DcYVPtZ7SxSoRTzEfgfhMs",
  "key35": "2Aw2vGwsraJoHSCoe5LPw4SEVWGturWvaZBiKqhHsFnipTxporX2t86uPqtZfcPMd8gfXxRHimd5V3NaXz1pVeX8",
  "key36": "5UWfUyV2rWcqEk8WqbJBXFZYHzqD4eygfnSJEfVaP7ScL32NHyuaYGX4DF4PPUBgWbT9Y9Q3tok5N4TkDqKdpuur",
  "key37": "2RmvFfwYGK46kRM4GhBLJPLPp4dtk2f2Qt3TA6nQ5fnTcoCbQhvaccqd9gWA2cQzr1vg4X2qubw3S34bjoKSoZGo",
  "key38": "KbMGU4bWm4sGLsxqwRFMtL7Pv7ie1cZPct2PGUzG2uKPHGQVjWTCmaU35HbpGtiz2PbJd2bSn2SggqHgBoBpxFb",
  "key39": "4izEZNDfNrXo1Ewef8dWoKURHDouGd95SKY1oh8ANuZKQbLLqKhoRB4gf3N6bNi3yz4jKoKPqskZTCkGx58HatCp",
  "key40": "5Y6qLZszoVDB1FVdCt6bYJzpE6Jmr9WQS1a3jKzWox5ppxk86gfC9rtY2zPPMtXYNfuQzVFysiG6uYhU7Q9Sk8BV",
  "key41": "22e3QwaX3ETzLN37J5XB7dD7YPc3hPKVqiL5mj2jffRkD1xWh6ALdAMuCfTUA5QzRAJ77SRMZZweDeaY8ypGMojq",
  "key42": "38YH9Y6MmyHBPAixoUXsL9rM3tdEzWwHwjHpVoCN8B1puJzV7MUotFht4LdsPGSbmWnWRMuXRVEq1rcqKtYmLEw7",
  "key43": "2koqr1qmgYuNiDKKowu9qmuAoHEdJmwKtKMPPC8EGe9AAM22Z4SiQE4dnT5sqDhLTSSyorQYViJTDdCb9UFkNJX7",
  "key44": "327jLfT18WoANoXoygfjfEV758WifW1GQCfonK4EPEvhJvBfjMogRyyQQ7aouZuYutfZxB8oxqCzz6BidsqTXg4Q"
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
