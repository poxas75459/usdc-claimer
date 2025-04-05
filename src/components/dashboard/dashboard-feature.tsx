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
    "3WuYSrvDyffk36FiAbC5rvsVokQhc6fGc6LMGdV4bzi7o6A8ZcHtr4SucVcguDTWi5VxUYfuXdfeKt9CTn7A6EBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BMEBnZ6RGBv6ez2TjT38idkg3BuQKe6PtXpRDRWYXATWnWFrM3ttwvVpgAvXBszsMr4QKFRQYoAmcgaPrYbMvLv",
  "key1": "2eP6MmEEdC1YziRDg6ua3GQ9DrnZajpwa5rx1MqDdLNG8FWJvPdn8Vy8y8yN8v1wxZa6rUVHFU5oUpcUaFrq32gj",
  "key2": "5vy7JQyKKjVfeJY3ePv1pm6Sw8F5GLHrPxiqB2QioMi4R3dzbaHsqqsh2oBCKQAFh2k93hHnbZ754d3vFZ2BJ5a7",
  "key3": "chjAGPf9Kt574FPfpcg6TekSLNyhDhHnFgHU6uJxNEpPEAZLfxa3uTC4LDu8MPfv6CB1CEiCnfD3XGZQnCjJ1z2",
  "key4": "66WRpfnYh4MgTMD7uUNZE1eTU3Kxa1SFtkWogbdgffibjEpj3p9yCBEWtsNGcUBGtEbfvk8yexVDJ8UFa4mRhKgT",
  "key5": "g4ayyaT6dxd6DMFkv4qAbA7x5xghDGLJo71LkCwnBEeSULemK9PrnwQtkc9v2PmSzSCB82q7ytvTmuQ1HcMKniB",
  "key6": "XCpA648nFna25dw8N2wpUQ4frsyj5t6Pb8jJgQRjSD77QJAfJDFfZF7t8rMU6MmH9hJHBxqKd5aAwEb2MRZqh7t",
  "key7": "3KHu6z1cHFzwp9zRnc12uPNYFYtv1UruwCZnCYrzkvimU2ZEhk1DQtsB5YA6nJaYpY3FQjsfKm7fZFj53CCdTEU2",
  "key8": "28K4bWjrNyeVX5yNUcS1xizDyPQrBSb3D9CxwBJhFjnjAFfibzTsWCZqUbiCGqJVsCjFzraMpMb5q83rcH4DEo1Z",
  "key9": "4hcX3ZaVPY2Wxo8xtgCMPZJvJBPtWzZHFtGQKPUHdYRtJLRdtoq9jbcNH3G1C7WNg4SRxY35y6o4TtyHpqpjkRdJ",
  "key10": "445iUj8zFMqPtphiHYc6utNLZqnUMu27Zg3d8DPtDHNSKFSU77Pmn3YtbVm6N6ifT6EnHkKfNzsGYbGbgq6AsT6d",
  "key11": "5S5R7gJpJUbycnJ59ZK3bQ8faqzE9Y9w9PMU5NJwtLtQ7qGNzvsiDntFSAJhSkbVCh38QNsJhDxJxo6j9gBRZYim",
  "key12": "3sLHRKMWNf4ShKdsYkq37r9LmKw1ifHh1yFoD1xbfQcTrkjbGa6UjmLGTPTuvruTcF5bUVBfk7v3kkpfi9fs8qx3",
  "key13": "3HFgFPC9RKAyjHnunTpeQWZh9QwNHp4uGBmDo28ss8Eb6RGXGF5QwrBt4uA6vy4mja5HKNRUcVzLWMNzqo1aVj33",
  "key14": "61sX4aq3AbnW8DPH3h18z84xqc3i5rY9WCvFqWPx9XrpXdgaeqJBrkNAec1jUZKFLuWX7zUC2ZhYcSVaQgFSFzZZ",
  "key15": "3KX4pvpkxVqrH8JAeTDYYWj7jrvqPtV7ukCySrjPp9kKgAK5uQiHqVSfGDmXMEQknxKuMsAvxtUNojaQir31yTuP",
  "key16": "3LkePoymg4JimkeLhTkMfY5hxNA5tBRp2XeVjGBVAztYRChwbXhvpKeWeqYAeN5Y5LzsfkTJgxFypEqGzDfMzhJF",
  "key17": "2Qm6DGBQJt5LGMiPp6ykUN1ukZDr1tqHcT46cAqG2Cb3hZ663wndSeoCBuXx4FPrMokBJJ6YZnoXMDuNadUpMZs",
  "key18": "5i4UBvqfwrxgYJpjuYKaeULKVFqquTnXBdyyTc5WKeo1ivkmKxCtNvv7unbbXTLhm2fZwBgYMt1AdV91E8tiibdJ",
  "key19": "2d4dBP3N8Qk8fvX9QggHExspuFgNbiRE1nviA9S9GpVoFUde4qQjkR2GHNJiEnjxHSu39nf9LkhHs6SW8Q2jT1yd",
  "key20": "31BxmBUw5HAD5mAPvaK7bNNLas6xB6cbUa1jsFmh9doF8fV9nH38jEeF9FapzMYELc3nNHcyq71f1tuEBTuoDKjw",
  "key21": "342uxJrM3qzdR5U4DD8wMNAtwZiVdt3FkqCEJgoEF3REkySgPCGeGeDyfKdTQEbU7XUV7AKT5qmwoKxiZn1VuCre",
  "key22": "UYxkLYHyFXZB6P4qDnazuSymH3NveXc1TWoEmuqR3Q767yNTKDnCAFhrCZsBsKCYutTARBkSBicB51HKYoiVUT6",
  "key23": "3FBdEZweWzUNrtEjTiyATnRDau3SnSXTvPzrfzgZBo5vPuVQGgEFVskY6nJyvxHca5hcNE3mfoMjZmobocXqUHya",
  "key24": "3KhbYuhygCukp5SgXHpaLG1HQBtvgG2YpRwq1539wxXtvqRoSYPcDxWTcYRz1AWSjB2YTiRvByUzQ8GsGiPanoFK",
  "key25": "2r7KM7xDsoJzme2SiZwUpSt4Vqin1RCNVxFWACQUpjimUo3y26D4RKbmmV76qQWy8yNDxRnsz2RnLiTC71v5WKpR",
  "key26": "3KTDF2L5DfRaykRrhwwaQUMBBESG9WTo6Cb6GF2hhiSUVpSLWg2MLaWPfcqntFsNXNaAHmmmN9hhj6NPXUu8Czxb",
  "key27": "Z6V4ym4ToX25aUHVd1THdd8tL7n8K3PTBUptu4d6Xtt7AjFoqMvyU6vTXE72MDzdyrXjrFXctWxQfFEcwtDNTgD",
  "key28": "3hvrE2JVR5MWmfSg3a9SUnLQtqfjsUQrZJUxPJ6r1SSyPpT6o5TsKvrUjqWCiCFjnAqBo9uKt9wGADH7Q12p8uRS"
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
