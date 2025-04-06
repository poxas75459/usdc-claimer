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
    "2dPy67UNRzUwGReFfjBUF4UUXC6vVHFhAP5WZbfuFHeJjKsHoJTQqG14A9r6fBPbbsGzYV5An91kTJ2VMaZkXy5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tEniuhzx33o2hNMtBQd5SzwzG7UR2FJG5MZCY8oH8GVFiwUSRUS4UYVtpB3uFW6A8ssrnDDMnUsSdDkPGAwnFE5",
  "key1": "3adAaxx2pALoDc1w5LL5Gv6LGdeuaeXPb1CgUt3At59LFHbWv39tMj3UrnZJaYWakvx9EnJJG83UWma2D5F582Gx",
  "key2": "2rqS2xRvsZkP9dH1d1t2S4dqZXKqFow2jeFYiaZs1s4eG1jFzsSMDv7CeJZpHFUfP7SDtCdYdHUCjt5UWqAaEx39",
  "key3": "4scnGj3qwwhfM7tCMTkqZLN5HgjM6fU8H4C3yari3WN4hn5M66rfynSJmzncApF6cwmomViB9WBtQ8taKpmT3dd5",
  "key4": "3s29tYDsaj4cHadhRgaxYS7yexuvZBfGFAk3VG19FyEZrYXb61uaHFNu2nucD9915oDZhUev9mrCkKjdErHaVBQU",
  "key5": "4t5hAD7sRLzSpVv2bDzWAk3Lugvik54BoXNAsNDLKUCPEVV2M4CWqtdkc9vCjBKnb2Pxc2uTxxZ9MyncMZdpWAxb",
  "key6": "pvmehjciPMh3WEXynH3cGzfqD15GyXanaMWWMwAetSqM6WgHALFYRTMgT4zoYY2idf5V8mRVqTkqfxYjF1UGPdw",
  "key7": "26HTTBhn6byQ6mAVszRuqV9fY438sRkkkvAvdXpETWTMD55pytAy8VciegtdkZoTtJ4aNDgnqWq6kWPdEKuAy1yB",
  "key8": "31zzmhd5T1jv5H7YWxXrpxXgcwC6i9cTrexQSTxXRLCRtKVbXT7Tmi1nWkbQiX3RekVG1EYTdLXWPiQurDdbVhR3",
  "key9": "26Acnxt6kmqWwnzyvV2ousjKkaepMGZ8sK4SpqN3reR8d1eK2pfrfeumM2ujTzS2zwMzU94MYg8CwZgyGfx63cWX",
  "key10": "5NrdAg2z8s7JyRabqX8MUAX7RDNdMU4eCSVhGCJ2r8V24cWYUYxjHAmtZ1A13beW9SVFYKZKzsm5mHU1wzsHEsgf",
  "key11": "319pbAdKzVkFsRjNtSqfyERy75cuVEZu2AxgyNhDQxVMYjZUzEUuqTA7a3y4S31yAauXCV6cZh83KEoUp4H9qCXH",
  "key12": "65bdCT6MEvndc9mRwcBrAF4iNQ73a4gYrXiMmeo1Wkw52FkZKpJQ12qXPYAtJX53dJEbbK74aTpccjb2ZzXc9pC7",
  "key13": "3GJ1eH99Cqqi78AbRCFbD9mChtk2YGrgyJY8Mp8XQqZBomo77HhuweAfXwfP4iVERThKg2iKih4f8nvWnw7vjS4t",
  "key14": "2zJWXq6uE3RZdcocTThuuVYoAV4EckBZnFCJBJhofdhdksZ4VY81Njm6QXydsLLgNs9YeCYsEktjSZfKxENbzP83",
  "key15": "2ToN5S9guEkJjRAkd1qj6ZtRUCwbHD1XXSQNoLgw25ADauYRmR6G63u8ZeYafz3QzBRcsSyFMW4m2eBshgCaP4uZ",
  "key16": "v13WmxCpjhvYFPPmzAxxbwfgDawqZPcMuaVC6pwop9NG7YTZBrNYYaa8P9KWuP5j666HDUmCdnjUrNjkCjoKMZi",
  "key17": "2ZnWNTMDa5KCPUi2Edhnw6zdiWgzbniqDtA6439CgbPMVgSBJFXNh8FZmJqLT1fCctqpodtWRY1MwxRo1eGLWcSt",
  "key18": "3snzuy1xyRWAMCrzNEoudQHoLSUWA9pxoGHpSNVbpKZQQjFFo6uHcHwp1u6ygVCy1vFauMGcmFi5G9EyVyG3SRd6",
  "key19": "2koWXkKN4NU3ZcTn7qRAfgMisZS7D7jz1ZApn5Z8rQcG4he3vsneYvoXy7pAhgXmp6pcgntbDQ9XwMCDh8AGzaF9",
  "key20": "UZwcb8Q3mfSopvSRazbJazanY87hkM9Jn5oNkjNYf543taXGrtBtrzdeQCe6HkSf8fBnh2eiQKSoXsCdjWa7aNa",
  "key21": "wuLSxEB18Mt3U9XhgW7edsNnpgGaPg8ZHKnobZD57qhYSENW2BC1xmieBm78PVqdsEpohXYg9gTn3rbwRjGNMG8",
  "key22": "2NeD7sMY5CgDXP6tLh6XxMb7qrVGGdsozcJxtL2tb8ZKnQfNGsM1XCYBeAfWHhQTdewdaaEWisXVj4Kdd86Q2EhS",
  "key23": "3PAkpxhopSiDkkvRPTthUnnFsZBvSr53guxkB9nuskiV9ofmbQwT2gJJPAb7DV53tAGG24BmBiNrF1uFafBZCDgJ",
  "key24": "2PouBjMBWWBMzQ8GPR82oGMeudUUqrhyzCYvvgkA6KRezqipY5zHdtZdbCgZZTgpj9R3qKDPqiSrFrfQY5fL4nTq",
  "key25": "3SUqmE83vY9aT685qk59gwA2AXwKXQ1t3xgfCEoVy2cY8C6Myi6ZejrwqiSiCxWfGrtrdDyLTFePDrVmgZYqRcP1",
  "key26": "Gr6RKjZgqaZD3RKQ3wXZLdQUtWjCgD4jMbp1S1FYZEf1jEGM5jvVDNvAkHHbrAHfxYLuCneY2gpKzEaFyh1GeZ7",
  "key27": "3FopGBuuYgaRPW4KxytyV8QtoYt8zXX2AciMSCW8km5FB3JMNwA5vdgFWiuT48oZyucEYV7UrQm9HguGGBqNUdU4",
  "key28": "4xc9AKW6kxnsvUzjpq8iKyV734kmpbw3JSbG7yoPKZajtatKyBunqdybWH3hN6P1vvkMR4HKKCFmn9o8XPb2dpTy",
  "key29": "VVAGEH5nW5wkAtkV5C7sPrEVGooLcqMXJcKe2esHxcXCeFutuxF2HXBjfXd98kayynNA2sHtzyTqXG5WCgJuATn",
  "key30": "mpfC7L8xZRqvyCQtZ9LMmUzSsyj7rAkMaVvjvTPm38Bw5F9geKyRFmYpuxFnqjxWHwZdhD6zemep8NohrkzFweA",
  "key31": "582zckiv2RakUwkMs7b3vo9JQ2fhaksbxATXvQL3kBn8t2UYFKtkNaKmWDcY9dq1BKujsH7Aba7akan6dTRC5K8X",
  "key32": "2SiCMEyf8t5RjGZFSZPy5VVK4Rm3Z4HmdoWJKBkHvnbEHYFiZX2zwoEo3nPZ1BToiEfTzKApwke1wxEA9usUkuRr",
  "key33": "2yJaf3ThVWtGx84J9rXVUWKftNv6okLtE8p9ggr4bDjkweuBT3GekwPbuQnVTuXns3VPAi48YYaeh7Lu6LffzpCN",
  "key34": "43DD8yVXLyp2EmcNMfF6fs2Qc74aN1yEjVkB5LRgxMNzuBN8nVrXJWzhxteXF91kBXZpJkYxcbBr5D2qyAJE65Qe",
  "key35": "LcBSr4uxfzVyEYrXue9Wq1PoUqmwwx7aJWFRvv6EYMmdg7uh8Dp5UAvVoqneRqBbU53WFickXLBSHH591xJ4K98",
  "key36": "48cQBVdQc9YfsLR62Mpa3TbJujBW7Xm9Pt5vw3wTJEDFtdLZvfYfC4nYwzLEzciRkN8kQugaRsCgdUXR4f4zj2QZ",
  "key37": "3dHrBqKt3yQP5e7xYzb9s79jbHdE7TFAce3D3JebwuH5dswZVXF7Jqb7KARV8G9oixfUu3hmEoXFgDk3vF9G5XMs"
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
