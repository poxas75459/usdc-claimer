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
    "n3erAwtkg5E17F1qDZzHX9zDtGSfusb1NNMpHygeLCDFMnrNzJMQHjqDgerYfCJ51HzhzDfutrs9yjRsra4Task"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v7mhx7CZENuXqU9bhkzhvU9YQWQsQssZgFc4h9vT4mxUvdQfKNbieFm3JPKdJ8pYrDRKCk9VAnKV1zEQFEYLDj6",
  "key1": "3wyGMCQmyX5XxqfyKUKjJSGCzMdAniH98Q5HHcGxXvFERQipES3w3EvBCRsFijvtwCrH2hMHLFCTuz3R2aWnKYnu",
  "key2": "31bwzJuYJFY65iMnq97K2DqZoZVkq79QHdm3dfyYmTLdX1zC3RWSiwjKoBQyLWXAcJtz9n59ynXvkVzVSMHW8cpG",
  "key3": "UD31QkoAhzsTDbJr7KoecYs4E4mfdVqmHtHEJ8ZJHXSHrdfz8QLACq4D9NB15b4o2LvKN5xVvEjCvVD1zfyaqjw",
  "key4": "zECLG1mFiS6AH9scpmSWfvee9oBtme4X9tPoXH17AtZLpB49EtDhKaaknsAZ7oQDxeJY6KMJ2ppZHnLSCkREzt1",
  "key5": "3Lb56uUtDJTknLm15GysLhvDSJBVS3HPjirQrswgBscfd7GGBvpjz3nSRf66eDwEdZoSEoeyni86zXanszNnexqF",
  "key6": "4AAXBo2CgYC6nedDuaPuovhoUrSRB3v3cywVor2ji9t55i6KM9vtbcH2D65LtMzGdfzaMbLdm6KF3LxiqjfXjYCt",
  "key7": "4vsUWyCp6WcuJKjJ5byLQfwnBoCCijyLuQQSRSJ58rCYFoByxdngr1UATECv1nD8JHpkiWdhu1KVWk5f5TftXVdD",
  "key8": "3UPy7p5oVcToei6zEG8y66ieBQENL5vm1Ggr35CQQaXkyyiyP9drooJPnJnVkpczGSJ22gTU4km8dN15JfGwnxDw",
  "key9": "5JbL5f1gH7nMmPHKmbDvyT6qbn4oiZQZWUikSgzp5JZnWepd1bM8CFmZ1vz4r7grbzYVybvAvFr9WubtTnshD8vh",
  "key10": "KyeTigwG1rYuA64gNzNU7pBjzt1QawPHi3cG2TnYr2Lv91JXWMjCQtvdLTXPRjcpQXAJb2pkYoRLSWNw5kSJCFY",
  "key11": "5aBis5ziBGqZhVKGUod4yYVVAiD4rg4ZwSh2sfnEd2Vsep6HKZKkmVXwa2F5uoUrkLccQfhrtuV4gZ1PzUUejMBX",
  "key12": "2v3o1KywJ7mksq5VKQLZ1QaEsJucRDC8YHdpw5UFY2FJnK7VBGbtma2KdqrLYfstXF4bMTb8Jh8BByVoUsx3WBtZ",
  "key13": "29phtnDAJjDWSdwM6TFsJAgvbXNs2oTNW6pjwcoGzUqdNM9PZsrYxDtBfEjH5xGxeU4kt2GeZUGxrz2PnzsuD25V",
  "key14": "3ZnvV9Wfq8nunsDr8sqAUkJio4fCFU3cTh9Qo6aaAnyDoWTYzQ5x5i141TKGDTVabxX27zirZQHBE7E5zUCL1dE1",
  "key15": "5CGSMbBrxwHba8SUZFmweAYQ2LB19d3yi3Q2xuxGG4ESnzfkRKZhBktkwavgoPnGgCGuoSdbXcq64QVrtwrMiHWx",
  "key16": "3rJxyUgf5o15qGxkBfe6yZR3ZURUKjt2Qk9Pu6Gb3eZKYq5Pj3mrhHF1ixpc3vKygZs4g2PrgmKF1b6iETCuzmnS",
  "key17": "XxUxrHx4CQYzLYnQnHZTL58mksHspQcBan5FeNpT5uaUfTRuSCGr5pqD6TMZLURqDc3LsFpGh6nTrx4VDNyD9G6",
  "key18": "Rj2pKUvaDp6CYt8Q9ZF6sY49Z12rBWCWnAxgeVyyHHQoriJsouBAcghrTQQGx97DaH9J5dYNMH5fk6RiGmcDX3f",
  "key19": "4m8bJRBGEaGUa3Viez241uE3AWUQ4UYRbNtywfFbfLZcLny32ZwRiCEfhwi7aUKYhCGQYryzc8oCFPvsRNXueJzC",
  "key20": "3soYb69bVKLh2c6iZRgLhuEgR2L3GN6rhkhUHjdAwabTG5aKbCtE5ZecTF3GKKgTABsn93k6GVNNa4EJuRcLrMWe",
  "key21": "5iYBEHN5EisarMieVMLKCtLKFqES8GcKuwPCa6zzvGGbBYcnD9qSUB2A6g9ZFNiwsHHANHRNBQQtQqLSAQ4saPc1",
  "key22": "46cxQHvrJ9JwLwMWjBg67Ya7rbQybskb7aXUzhuZGP5uAu51sqDgMeDGKPwyE3Ctv8zw7BbjuSbEsyF5pQh1W35Z",
  "key23": "EX6cHaaiqAZrFMgKApUShBrCthWJgwTSMKejsy3cmjArk7ACSYoNt3z6s4w2Kysk62mioRGDnByBmT4ipF14Nhj",
  "key24": "D6QnPedpaY2YbQg8WLWrYqTVrdCYYJQ4eArbtHJuzoznnj7tVeXruiPacX2rL1dz28Mxr9tDSWyg5Fa6dSoMroa",
  "key25": "5U6tHhKSLKpaCtacew4FJuPLJfTuz2duqUWz37cptizJn5S2gxsGQJhBrWEsvZmePfTvHH3Lx6HxSgYLN2muMHzc",
  "key26": "5naQ2a5CTRxWSvcJepUiLkLrTJqZJemrobn8zocTJx5EoWYi1pmy4ENrxr5mujHMT9fysDKu9bHbrg8vndtcV9Bn",
  "key27": "3u4qPiBeSikR8Ycbaw3aCA3JhFAy3Dmd4woceD3fEvTCWSTPhSKY7FX3ZAL8VSFgPRSBW39axHkdBecNqvTWQTZw",
  "key28": "5KvMvjBqJrxrkoNVJ9DQ36gGpeD2P3PTwujZCbvQwQKodihEHE21rFoFQWJ8b6cjN2FGQtjtygdxJB4ybnAujPpw",
  "key29": "5n2HZ3497iKCFj1AWSLW4dtBKzSo7FbQKBR5HhgABTq6hWJWP1aQoA8JDPBK3h5JoY4Bd5WMZmyqvTr4XzMoVJVU",
  "key30": "5dd5BNykqU25hRRCBKEqDvAZ1QFKL5B6Jz8zAncmQeguGSztJnP45NVN31eqJFSqwunxqyrtb9wRRKipZnJem646",
  "key31": "4NoM8Mdq7n58trfLXEpC1ZnwwFnGAxa87cXi3KEzZas62ZRhhV6ALqq2N9xxqGN3xLjWzGSuQAfRxghP8TmGxoug"
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
