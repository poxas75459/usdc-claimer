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
    "5SRWmt4Xf5tyBx1aqJzQzePu3G4opKVZCoCvLQX1Ag77wdaFPmYFwtScSbr1PeYuf6kf75bKMk9xXWeEyFMab51f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uyCp7BDy1igPrbn5ZLyaWjJZDk6VS9RzqaxDMER9DEBzANhC42yLiXTEwX4V6dqxjqdcDkuY9tQo69bRHhRH1MZ",
  "key1": "ScYwWUHcUFZnpMzGEkWxrCi65kb4eJF6V666NaQGDYe2pWhvJdS7EUN32mrZtbry66HsSQGnD5JeXDZbdPN2PeD",
  "key2": "3VFLHYqA6N2v1ziwjBenGyp6Se271jovF3PsV2osgcV5jCC2PxgNX1RdXRkrvyCXKk8kG5UN1yXVsLeyJZHvp1JF",
  "key3": "5zPGA7u5wWXn9i8bfkSi2G8hgDuTofH7ycYUw924fh2RCRh7MqNfLAfeyLQybLAc2EjcfivuPo9wiAcY5ZteY9mH",
  "key4": "471q14f15fqYqXdfxN9v4JMotuFXsXzu3C2kZP6aaWxbFSjdRN1PQthy5jshyiUKDrGTKBmyv8pQ4i5NnEaCR9AX",
  "key5": "bYwxqGgBAsFWFi1DJtzr5VVy3JJwdMX1sduDoJfpg289Qpmfxmu77TCkE7yNWuCdYMhsa7xxPz8PDZPQZfzGeg2",
  "key6": "36nxi3z6u4dmvd56BHGDciCNcLtdya19Ji42x6gJ8qH1jT6CmFkAyqsRD5pmCfpqPb77UJQz17S49g3V7ZMyA6T8",
  "key7": "SYvbkjVxVcVp9tqmk7GLSVDoELjPzh2Yho5TZH5Z6ethwt9WD9DAjq4MBp1M5W16qBy2grBGUaowhGim91x1PX3",
  "key8": "5NiyH6jQLXBuEPoMPLjUvnFBdbyd6LFeRZJnbUkMsik914Huo7qAn2eWQMXo5cZGWTDNKR4hDbYnTZ6KxnPXuozZ",
  "key9": "DwTU3BYVwucvtE2pQZjqHuS3JZHaSj3wEugWZg6ohGRPjVkvVFxtpFpcD62o9SNHyFULfi6E3fRRggQsr3madwV",
  "key10": "22Y8cug6bjQNWe58HK722YHtdTi5QYrpL4emKWyyXLFu14xqgdJ6tfVm33DZ7WuRQ8LgHHgp95a2PvyAn1PphhvJ",
  "key11": "5xRswsrYNBb74YZ62d7zjMMYbUhYLuwKZxoimfhxArAfzh2Fi4dNDL8hFPRD33AK1DtrDsk3jYVmyafkXTG6R1CV",
  "key12": "52Xx7dveiYAJSY2FR2m7M8r5TiASK75z1t36osTGk1SBBitek96p2pJrzW62de7CW1RsoUpZfgvgfibTHc2RMVKb",
  "key13": "5eptMfAJWiE52i25Y8V9FEagT8fBGHHidySNcGiPWJvx4mhZvgLwATeWaTQautwbTieVp5CB7gD6ua6KqG6kmED1",
  "key14": "56Zy84uYGXG6vM2Y9BqNb74aNcQJysxEWETrUpDGqSo4B2zNZtHR5wUZv9ezfddWwafiBTashPZJtodDYPnyBEKQ",
  "key15": "5QR3wybsXxQQ2twjZNMM7iHSu3zhru8Gqs6NhJU4uAhtt9N39qMGsyodsAs5VNGMyHhQvkf9wHWpYwTVeKwKGhNb",
  "key16": "3CJUcG2DQdmoUMmrLqQat9PwSSg22ZKJmUDeNUJEw7Qerv4TKpY9EjVRHrS3LwpQTkFfPgEYw52pX8HT3DrUqRbx",
  "key17": "xTNbxusJa6AYCZedFAojtd3mFQBsFJFD6DCZuVpRzsR9RRpYgCRKGxrrAzvgU7FytwvDutRT4frjAxZZoPGyNbG",
  "key18": "3hKJWYtegTatbA8KkJhsxZ1pEvFYE9Wx16yJUx3eRcBT7o1iwsFtbHkMLe7rsLBnS5muzJHxVr8FcHP233K9fG59",
  "key19": "5ZbC6uHb58cBx7Zax3jzf4zEPjaRgRtENWxgoaco28dGH3AiPNP5mErjUomt3G3doimHJKnu2SCAcaFLeFiooGBb",
  "key20": "zJRohdWYgAatQEQYWR8uBdNNG85cGj6jYe5HxJQyTRrfyWCzEf66QHa9oiVaEzuyLtaD4AU2Tv9qK6CBNDUV3V3",
  "key21": "3PNKNtQ4Fw8H5eBCt87SPe6VR1pUfHGqmYPxGh2znMrRF6qVwbLUeck3pUfov4ubDYwz2WHNsjgmNx4xqCNiY6To",
  "key22": "5zzPgEUVkBzXwZt7rTQ5Wmq4NRsoYBpsTkvNsk6PsgVbF5Sdpx99bHi4twE7yGm2AYWfkEVZxCafX5YnNf23xHZo",
  "key23": "3J14VauFikCuYXyLsvUzn1aHW9tdTSuERVp9RXLhoWcSRVzwvUzsy6Zv81DpZK1f2GUaj4uamGVaKUZrHRKgNaRo",
  "key24": "5CknZymBbBvr79aCBTHSFoscePMsvDiH2q8N9dnH31YUgGxD5xHv1Umjf1KpaJLR1AQ1cFAXEai6YezBWpdmfwQN",
  "key25": "3xTXPmoPShhf9WHmQY4Rx8eK1CUmECXQzfbeaNn7gUN7BZTzp8wzAr8PS8KTv2P2kGpizKPWK34VpdtSQGHiW5KY",
  "key26": "2CBvcH3rPF7RUsy5eV215S5TPXzLASRRQ2mtQ7nHpdQjydPehKyv3s152Dd7a71uXz2u7xfikvBQeua8wnwGz5cP",
  "key27": "TACDqZCztjwqmSGA4MoKQdUs2XCqamWsvnCfYaShng9oXzfnfiXWpgqdGNXtqJQhkyzUdwRE22Lue4UkTkwLhPR"
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
