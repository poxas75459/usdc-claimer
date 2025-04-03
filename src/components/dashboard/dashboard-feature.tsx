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
    "56hLaWMEzw1r8jZLvF5AjRHP8G594uyBf6VGFVUQH5RnXDqBtakafZww3pvAs4s6g2CYkwaBDPHF69vwCjd29zDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3az1WaaE8WcEK1izdMeCUCGAhMZ9NhuFJqzRPEj7ovsSw7A45fMQeXq6xYp6WFYJxoomBF1JgddRRQxCfMfCpU2D",
  "key1": "5x4HRKvGwJh88GRUZktMXxkaZy8EuqpKL8aFr97DUqCUKxjBMNt4vaCFC5JdAEa6uDPqY5HKJwbAtWQtTUKfp21Y",
  "key2": "4YnZWp9GEotPMSN5dSM6MrZdBiRYXCahVBYtKn4xXd8qxnUrPMtDzPeY4qH7128jue7YcPe2Yd3S3zGx6yxRbQ41",
  "key3": "3M6p3c9wPRm8YDEh6E5gmWzEWJL6jb9syoWXCjbJojBrHoEmefSQrM43b8HKhKSuSxoEWqEJ9bkWd9HcR8o8D8zJ",
  "key4": "wUXHwpzM4Y5RUT3yzoQBhLYN1QKeFMF7tHohbM7sqhfPtrioh3kgBA6htEUHUwx1pV4Az6WCzK222Lchtzy8WC5",
  "key5": "cBin2zKptknECjay8iGKiEfQAJSukmyQDJJM28JFXQBw1htHouE82tk7HuhfSySMn4F9q5EHfMVvvdRorkGARV8",
  "key6": "4N5jDeqsAwe3uW187KVsgCDtawRWomLbJ8XFVpJ9kSWLU2fKtDZSQ7AMZPDwZHJbEMCYZFyGqDxVeT4hbLxDvTGE",
  "key7": "4UD9mHcGhA9cSJS2fchqghSGjyGoY6BVzLzaR8BpgkVFcDmrn9LJFu9mi95HRS9Jfs5TL3SqFyjJBBAPZAzm22La",
  "key8": "51yFFFFzWUZyHVhB86JPZQRJechx31M9X6S54eo2tSCPwb2piLnSRNgbFSKf7kkzEd6UeUacJPUPZpoijXCwDD3b",
  "key9": "4D6k98JxVPyCQXnq7Y3Quj6YRuMnbKiTzZDis1i3zv3itWeUitQvB9HFgVu6Znc1kMfi13Sp5B1WjgANK6oyJbJB",
  "key10": "5zgxyGiRJuwh17HZxNSHUheKZEZHZrWjK2w22AQwYbtctUQxFEJ6ShPose9oG4ae8hMTjmLunJkBTvq1tDfEQq7d",
  "key11": "5RWo4yWWxcFFjf6gb68yGdtzNZx6CFUdwTwFiiC8fETvmPbpfLM1hWfxi9DieJkvUDPeEvk3WyQEwT4r7CdD3GzQ",
  "key12": "2mYDGNRE4xSfigKnbtfQoW7MkbT74T66dSey8kxNsxytSpEDFomd6JdGLRUUcWQC1ivb7afUoYtrGNbBJ1RVPCRa",
  "key13": "5mWQo9HbPznVWirDdzcmRqSJbqKXK6pZVqGH2eh7uLUUVvrmFxwzGpALHHjYUsdtABjyC6ZSRrSBkxMdKL2Ew5cY",
  "key14": "4qEdYEpXEjXLwd52FtWPg3tWKk1Z22ksdGBKHxNuMGVRGs8eSek2om9NPucRxdJistqMpZXwfVoqzKgHZCRf2h6h",
  "key15": "2YyUuvpzpEkVF2ooswt7NrwiD2aoLhxPEWVrvVS9VDFrfhGbrWi9rPiUgqTVyM3sw3V3TxjivVeKqLqkiHCAJheR",
  "key16": "AuhKatiSZEx289g8kSFPmYG2E3cMXc3bmtLT5FW3FXawfxFVz1MqkMBQsGjwZApy5skRzqHa9uJnsAHCJ5CqwgV",
  "key17": "3TtThdUzqR2SGkgmRoyvVokvVVj7jcq6qEmGRVeHFVLvdq9MB4coV2YbUUrwC8E89swLhATTYXZ2E1VRp1AnASdN",
  "key18": "42BFqPokh5vSKBduaK9135bvb1xe8iBYmgcYK8DJmsJ3aLfNoXPyKZjuadzdnkAMBsKq78mRXfGze1XhyKKbaapf",
  "key19": "24eQ5skjrCZ37CyLCrtbbKJCd5zYjahEGiUmDhpUYBVuVp1rub1bLwLg6EqKfVTtkLvZsi4TMiywdPpdWWaHHR1e",
  "key20": "37UnuMD5StkX2qHTrKzu8v7A1WaM8ebDkuGk2Z9MhxpADGmUSkzBTKMXvTFTzfSBRjZ3nccBeqHdVS26yqApHg2Z",
  "key21": "56kBzZMwLAXr7FJfL8mb55daGezsyJrJE2mrXfDNM2572B61rPCqoBYhcyhS3YLGPuvB3p667p2gyKNjbuh5xjXz",
  "key22": "4CTfjgBWdtMadsosxhizHJFEeW45aQT3QcpFjb66ahU3coD5dHpfNbsDrQ2EivK9bKqttKUysmwLiQkW2v2HBv9m",
  "key23": "3Tz3yqHPDh3whtE5AwJrKfGTDyrAhEevVnTucPp8sYFJEhjiLTz2UmgRPAG8Qrj2UBm2W9FUNhsHZ1LGDgS4Erbj",
  "key24": "2efgU41b3nEKw15NKaVki75CzMVNVVLNi3BupQKaFDiNagoh6aGXgADCzzCqPJNUYTGsB2iR2KG3WyMAC1opcSoe",
  "key25": "5xDrLFpawkF7SbjbUdzXQ7znWqmmwb1bthU6ChrvJyoFfzGi9YrSspntKM5ErjZ9YnjqUm8JEHfnaTmqbm1Jsfk2",
  "key26": "5T7keRaSGFTwg3CCQfYJ85r4VvrBDDnAADdgvsfik3hxm2CepCrMF8hC76agsHpBNXsMimmyusgCLXd5ZGAhYPED",
  "key27": "2ivc382qVyiaXW5KrLTfR59z2ahtEbwmfupj3dpTkYTHU6LS5oQg8gHWYTd67PnyfmktUmJ8qLK1N3Qhcg1wb7A2",
  "key28": "6vGX7fshdFpiZTiR2MCFRHDgaWRNJub1zWzxSYKmhEniHuhStZ4dH71fz26xcWyNqN5GfVcisGpHVsh1TWKtvcS",
  "key29": "2onJrsrerZEZfdNA3KX6GgJ562FZgQhLk9Y24r5sHKb2kV4YLbxHXsVLfV95wzw2RtaAKgJZQMX85m1r4hgLNxY5",
  "key30": "W4Hqa998ggewXuppmT2SVhGQfG43X6GVTqFPLn9PcpzEXdFAHRQRCLo6yibjVcw9sfBniVozQ2DnFgE3o1Z3Lo3",
  "key31": "2PhbLtuS4jmDujRrgcHHBoVWpB2yErX8dLySmtJJP9WuCDXbnxZ28LHySCanDjxwaFtZeMFo6D8oxdfpgxMgiLNY",
  "key32": "4kxDhwJaWc5s1VWAxGfYiZNFeFoyQk6ZYXVSwa5bMNRq9LgqWTWipzajB5XCz9DCeZWN64AGKM6zGkSZpEfN622U",
  "key33": "3qWxTbAEXaX8bhRc44SM1Pu3V8hM4TGiRGNpFdarn4AoXBKdzmmVhKiznuucbsaJUiw81hWJpg3xKV1GUvQsckJy",
  "key34": "4QnTH8oVnwG811w1tx8M4REgo16py5rsXzBaqRDgh9hhKoLphk3G8BxGbvgCmb4mRNi5WRsgM5TTL9jQL1ojQ2fg"
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
