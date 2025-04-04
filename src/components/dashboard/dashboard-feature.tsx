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
    "4eJf4w8bc1oTpfxTBhDb7HfKKup24pxRxmFtSfiuytHAoSY6VuPuZmWtEAGWJ2j6BGhWAq1ta55JY8q4c3KUjWHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HoKnWF7ArvyNQjJVcVZYXoR9yu7TvDPCiCP98P9sc5eBw1fbeAMgE5doWoFwbFQY5dCbTv3prBGuz67jzJLeVHe",
  "key1": "5HcQgsdGJNMJ1L3xwVy8PRgqtJZJi8S3r2UPCrHfo133zCgnrBHGPnv3UoQxU9bfz4WEXurTsSYP4iVTwjJPFG9v",
  "key2": "UA3HgqaUWp77pbmjsCmEWq43FujAGiK7eXxsyWL8DKeSAZdDrKDqYfibztBTuCDPKztzc1DfToFYqp3eVfYXcpQ",
  "key3": "3Vqk7Dou6vXdsYV9y7a2TRJW1ZKmAiXqd5bUzBQfpC5fBZ5en86udmc6s6za2fYoqpYM9YaXXM3ieBCbTY54rFK3",
  "key4": "4XbLrchEmuVHXbGU8vm6UJZVqZSQexWYmTxHC1js2CxzNyEgY8G8Zs9KpG3EwQXiM5ZjvDFpXmvQ8h3b1A3uLAxd",
  "key5": "3n49i9crnkhL6ywhzVzjW3pNyXJqXLK4s6j6w514XAPDHRdL2tV2bvWiWBiv58Ut4j7ErqrYwpe5eRvQdcMJ5ZLG",
  "key6": "9rhZZ7xuCBrGyikPVxBxFzY8B4gU2QxMXWkBve24LirbTixUix9EX8aRnjkJeJLafMwiiZF6RC8LGnma4graonp",
  "key7": "2zRZUTNN4tSiBpzLJa8Gema1XHrqNwPvT8YUdwqg926Fo7AXGpz75eH35dfdSmwyhbTijEschJS3RFtJz9vXAxb5",
  "key8": "5GJWRHrYS8XDxFd67bTUX1nBS6DX3VSTqwYDJ5RDw9zYTdteqRtiqMnPpxNPCMYfCCzJrz83TF2Ln6WEAWQQ8ZWN",
  "key9": "4b59FK3My5UBdfPyan7X8SJbAWwsmAdK9LgGiUrDaCREzjaPXMdzj17ELJK2Eh2z2s1zC1P6nme3Vd1oc7xJaePZ",
  "key10": "3PMrmCcSpuGLHQYf3khPY5Guczc6XLRUWcpxnvAzj1bcFZNczngzAYyq8kaMKwEaTnaRaCgLW7c5khzcXaaqLPKh",
  "key11": "QXuDchjRKSGYpeFy7nwH74feNJmtwyPyM7o1DTWpgJWLANim8pHGfiB9DbxBZGJhzjFAKytxPQE4Lo9uiRMYPiP",
  "key12": "JDhGv1ZkR4tu3VdAchCBSJTZKSjYPbJd6xhYuQwRM5SkM3vTpYaNE9LQuswRatkaFSGWgCjhEnL1NtkXWiMmS4n",
  "key13": "2WNH4jKJ8YVtNhFox1H5vCc92tWN4SPPs1mWQ1MHSGidpGYH7zMEeFDJ2NUao2bNiL2SrvXyFKnqAAqpfqwGaEws",
  "key14": "22NsuuMPec979q2AHe5jVbXNPWBGyVhGuUwxySErcE9U6DN4PqQ27yr8XN9kBxvxLC95qMrQYNNLo96E1XwyneZC",
  "key15": "4bDaZBvj2qLEDw5M5Hjsa318TXn7T5dHcBEtY152aLKkE9zTVa7AEz8P6zChZwLBCdAKY8iExRnnizuqRMNanYcf",
  "key16": "3Qy9bgmte9wQ2q411y3DqgvRVNsgpEyc6T5jrn387wkvkakwkPUFpjGTx6uf4dfqof9Wxshfz5fWcHGZzfKw4aqZ",
  "key17": "31FFVcYJf76X1i4UFpqzSUX67r6a7p3szgLF3P9wxr3Z4XR6xJcNqvejJY4zQpe59qo4VyicDD3gmxdyNMe8ZajC",
  "key18": "3UreWAZR3mYXP8T68ir793B2iK7vzChuTUMxbhnUNHzybJpc1exjpkofw46i3LLX62JNusdBD5wCwnVYUMHM4b6L",
  "key19": "66p4geyX6tYBvdPCbE7wQ8E1yL6TL4DXoHQTDtrx9uXgGBdFT1ZSWE7uQEoP4X6sG78TgEKLrudFQxmRxDsFnB5M",
  "key20": "52vDeQVtCqnvpxU1Foxix1y6J2LwkBsqboo7rx3DmQQ4mq3RYdAqn5P59TS3nwqnGhP7xtEnYo2mrbRqd3MKYEzj",
  "key21": "54u9mgaJHQ6Xg4w8nyw7iqFMz4cgRChBgRbBC3ar9nrSnuqEEHhKYFCKgrJwKk3kD2JtrEBu69Ngi6g8smBHxMDv",
  "key22": "3tSXhhoQZij4kBNJ36rJh2mxG3bJ2ZogTifRQvnJVw8fdhRf8kdFDvk1Lb5qarx166B2CeQTqchsora2QRErqGCH",
  "key23": "5gF6B2iPGMCEsS6KhADSqQysBGnDL97WyKM4Th9feF1iVxTWHeJGZVKcuy9SjpJbrvdSVCcBQpGbxpFaNKVF28EQ",
  "key24": "45QuYJyhBJuuM4aPU2nX5U6gbSkoCTtSQoiqCQe9GVNvkuQfg4QHkxSiaknfYwF4TxQJUtedMfZgWJFs3x9t3PZb",
  "key25": "4xBAVqn2nTJbiu9CzfD8NJCPZh3JfnB3zNEk7cU8syQR84zkpgyhuF3o8HT49UiMbQjpgkJVfTbHKZqRL8aRztFC",
  "key26": "2WazmrjrHynLdUaEArQJ9UCn7Br3gFHC1eAx7gwm6qBThtgoqBsiGJF4kzUEm59KkcsaN1h9XQf11FBAUfHoCzFN",
  "key27": "2GRvJxrZYAZvoifqrJF5DypA1Hk28TnpZdq8514yaLwqagRa39gENquLCoCvGfyVwJ37tYoUZx7NTDP3K7Z3v2Zg",
  "key28": "5TmBpe173fKVyGY1adNN3JgznDsMkb8wg8sS2LfJVfSiBCtFGPfZCGQmqVtYn3DR5XY5nHM2da1xpBkJEjyV14dk",
  "key29": "okCGuNXkpHWAb6GdnWPrdoASt3XxsHcmoWsgNGnbQRisX9uvJYvkmeaM7xRfxSYL6MPoa3wL2UaTkVhvVrVTGk3",
  "key30": "5QaZYtUNeEkSDiMKeZ18rneudxyFKLz5y4zwfFxqedi7euZ2yUBGGj5Nh8cwDQmZxaNRsxTWCPgnsjqNhB5hMZC"
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
