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
    "HZREyboYiYEcB8SvgnQiwdnxK8eeShDNX15cfc9h5MmA5ZUcCsv5yEgnFwimu1A8C2YdSUtAXQg3S8b1F3pzqsj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "skkyJkpsqwtXixfVfcQoQ1aSNfP3y2dmazYfzccKVfTH16o1bMhpgKcQ1A5FFwSuV5jV3j7nNpDmNPeatG4KQPd",
  "key1": "5u3b9KGMECDJ7U739eBRLtr7h7bBQV3dfRrXBgcVXywUxyZG9JQ3ut17Nw58e61nQfGh2kyyTG4QaSXMSGgTAPsA",
  "key2": "2aUWuAEug6mHdDoJanBpPsoGa86pKNE3YjNYDjKfaGaWoXDwH2GStaChE9PjFJJiR8fPQJhEiiDP5VxAkYwCEvxT",
  "key3": "3xJdeWQmQZAjYzCFMHHHepXw4Zxes2MUT7YGzntzFPFg2B2K9q3p7NfLgDuufpcG4Ky2SEg8eAHvt4U4b2hZhbRG",
  "key4": "3Nat5cjyAQNERZk1gfeVrudDNGoLsFvfrQkHXoTNodknbkxuAothQXkFrxcbox4mP8XzZk1SWikT4kLa2SFzgU6L",
  "key5": "3v8KMRhqRe64sm1R1zSheYBUFBPJafiX9hfzTCR57FqCp3UcwEyFucGu762zQdefyVdouPuNPJYiKgHcCCANqtTw",
  "key6": "59s7gBrqgtSXdULVyQfummVYf3hS9ZybaCFGTkkMgyq2wHX9mavK9ZgESFQBZE9Jc6moWFhg7iMAsFd7DU6CXvo3",
  "key7": "442UsUqt7iQ4iqaixQsFhRzWafADhiGHdPcuCnU8ToKthwgZLkSVyVJwYh19tyzr4GqNd3zxx98zwSTLXtGYY5Pv",
  "key8": "2wV7LQVRqN5JgS4SzH9uGCnYZbCqUykWqXfXRwpYbCmydWgqXTpUfVBu7QWWMUonPdkkWe7jcVGiYYZL9aWc4zTk",
  "key9": "5SenwyFAqyJVE3SwGTN9xMnEBRjcNgiPJ3y1zmPyfM9FVSZLxYnLEAkXir4TYa6bMgnPqmJ1gWuVeLf9YoiPVSzM",
  "key10": "3Tk67b1GV9Zq4TiWvtQNVMWtDRHMfhCHxwEg8Z3F4TJTLG7GA3X8L25gkL2M1h6wrWgR11RDuipCmZ7TmmZtDeRo",
  "key11": "5k8p1rdCbC8cW5RpUxDnu14DohMgVHqv2iXXokTF2BeN1cJXo5wFhhc6wcDxYF46kWLaAVefSyEczjAoXv65eZqY",
  "key12": "3RaRA7d3J5wHJvzVxWPzx2PXxKYvecnbDJXZMfNvA4b335dVDumx1QRxUpvRx3L7Q7R9HG1pdoQTXhtsLxhpvcMk",
  "key13": "VqetNsMyhDGewsH5un4jZkiJd4qCpgqmJf6YXbsY9chmszHs4GRktGGY9VBBwrLgyJSxvMXKtphYXmDaq8BTKky",
  "key14": "5pz5wmCsWTy7zyJ52a4vhycYwURJj7D7Yn4kGL9X97i8cqBipecQZv4SmpMNQi2qcuPQakw3P35icFwiW1RKZXjg",
  "key15": "55B71f5j8DwwvGyRQsLu4K8jAWnJEWvMbTgCNu9E83pHBNoGLAfWyBz4m6YBkSk3K62DoKoDuCCUKzBSTpxC3uz8",
  "key16": "4G8Ba2yGcmnsHVY1Lvh4Re7ChJRjt4iiNXgAufmjKGEYWMxiPKfrVCg9gEyNQVgWoWEjJd16rojUAEDxWhhe5Nve",
  "key17": "33Tcj9zqNqKm9kjTYiuqBGaLoUEjiSfvNpvSGWyquBr81stN3HMaqbSAvXeYAMstr2i5WofxMLK53L6tfTepqp8w",
  "key18": "485MyVaBbFdF1fcftCMVspMm5LDQcZrodoWZZyJiX1QkDQBFDnUNP7kmZNGe86UMDaBujFQVwFXEZLKxLLCatmW8",
  "key19": "4Lpn23dnwCbSfipZRxS68hyTUkoFg8JZzTK4K3vAUXmmCuP9GY5fXUzmiX698KcULMuzssxHqvhbmsn3gcJsKgV4",
  "key20": "3rzGUVhrds4Xk5gNyvaNM7WWp32FV2QirJRejkq5dn8Y1gEFaWmXxF3x5gRd9dQr3WiM7Zwmnpuze1Qtn9PpSBbd",
  "key21": "5mNZvyKdBvW38Wdz3UGKcE53NyUMUAtqDPhwwQjDNqMdMjGwYPbyAMVGoyDvkiHxN67grxepJ27UhzjVW7rpSPtH",
  "key22": "3UXfBiAfPkujCKyMRacrRnY1uzxBcYpcUg9Jzvtkbvb6Gb5VwCrMAkbACJ7i1X1jAuoPaEY1jFzL2irDoZ9bZ7i9",
  "key23": "28ESQvqynTF1h7tmHJV3X5mWsR93vTdYEb879Lp75mqmHLWrmG75tvXEzZHRTLh9skjsrQJU7YYAniEM742REiVk",
  "key24": "4EvmqYCYh3LAxUYMNvMWAwcjxMT4ZhRbonwExtFdtzhZNXsQsNsG9EPeE8w2o8JM6y9R1FH4U8wvfKi6TfnLyj7G",
  "key25": "5wYvQcguLpWzrCWneJHZifwN4t7L9KrRLhH8VrRKnFyjHHn2xzwdCAL3PY5AASEgmGTsYgLuN9raEguxoe6rpkEe",
  "key26": "2PKxmUUASqnkrHujT5aib4Zo38xZoPEEfnq6GaPwJ1Xckyhp21bLkW4LKGjnkxqDzi6z142SRS7Hjw5Q41DXMD5N",
  "key27": "4zRCTrjd5dtXa1oUBNH26iEVfp9Ju3hrwRoHfSekbvnJns3gtg5Kbju2LaiX9z4Bw96RFet9heaEzCj45xEqMHkg"
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
