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
    "4GM8Z4EKm6MUk444FfP1FuVQKWrmv3rEbpFYAp3Bj3D5m2GdX9TPzhatPha8rW5QVmt4QrUn9AFHDU7bbKPj3dZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uj1v8Kp8mpovg3zyNR28janCqVHR4XmEXrfyt1sJVNgzvxjADc7f3AXxsPSR41Q8QA3xGMuK6hMLptHXi5UJk68",
  "key1": "21i3BJ7kEwdAbtQLtkb6qgs9M3zzeugoaSY3EoauZpWstjzByxPXbbcqAebQ3FZ8dL82JCoNyjF16rN2mhfbi6H8",
  "key2": "4HzwBqFaFJevb5H28ZBL5MtAeeC8m2U5HPVtJpbUpR1vFNBqiopiGfgdhKj5Jmp7Bb96vVUrP3uxeKh6jebbuC5v",
  "key3": "3rXVzS2nfemaZ8uAK8uJn9ehKsCYYQi1Z4fCPLjBu8G39FM7CPr2LCtLjhrj71QCUcDe3AMXjW37ze6dGeTwyyma",
  "key4": "5xvh713XuytjZ3Ydg6SbkhJHcfk1rTJ1MPrRxkXgYpjZ3KWakVvroUwPChdRHGMQncomEkX2pXMkssVfBUQTnmki",
  "key5": "5poM1amvhYXhBQaLhmBM3MBVAECyXzbpcEK2ZpU33TsdwLfMe1C4ifn46qFaVQmDf3hZdhcK1JHZ6RZXfmmFhYp3",
  "key6": "4xS1N1BgpoNgknztvrfkLPbkEbuDrEn4NkGqskjka9TWt9QdcSL9MQxdScBbdis6KWc1fZrkmya5FwixVxaxH53M",
  "key7": "2QkmZpyTHYC3xTYDm946hrTQQhFFvQQw153aWWBADGKnnX5bjDzMeLK5dW9RLbHFv36RTfsFsvisFBVarn6c4aou",
  "key8": "2viM2KiXu3RTwPhwLKfyuH1haXrFsVrZMxKv4Hp3TjYRcNzbgTiaVYNg2P7xtbZmVWSXZkWMN3hadGzDN5gwgQfo",
  "key9": "4yTgrZiT3YzJagoipRtBmuG1rHUJbRCmKqZBUZNz9wYsYN9WFYhxUVzPCB8QpLubachS9MfCSc7irNCfH64KxqF5",
  "key10": "3rs6ms6uoEPJTeg9PhwA5gLf1jCSoUWtGV7fC4gU9Yx788ggt4Ec9mnXMW6YA7XYBmWKQNN2CoryPnDG6bJsuruq",
  "key11": "2M7kWzU4S2844rPUMYJc5yDGP37XWWkHowfGSjSjwdPo5DNpkHk8j9wd7KxiBff5tGWNJZzCv3hoCBy2pLTMGD8A",
  "key12": "4vrvoUhGRV49Ca7ptQnU3uG3L33YmDcJkdHopQdhU6LGwJ8rJNioWCpv8E64BxpnQk6fyrFXYCbv4FrigUH7jEva",
  "key13": "3ihUTHphBkHN5Mr1op4yz22iyrTS5zzWJwGrt5KuAVLazJ6dKRNWqs4xev1hxCdbAZpBiCsNH5qvfu8FKq3S24g1",
  "key14": "5JYyQSaaQBUm3pc8rKeyCC9TdMmPrnC1zyJ1vFj8Zh59bUFybttvNdvDR8sVkbWjLjD2gubQ8dhBfeYb2d4weW8e",
  "key15": "3V4kxiGLyJd34fM6ZYcEFyY2dhDvp1D9MwWuriBwXxs5aJoW9eaWGLD6wz7bpMmRY1ZTz6KSStM25bPL11xhzdfk",
  "key16": "5juPoDoJ7FR9zTjRZrgKF1Er5PKhf6Pg6Sp3Mwfwg2WvLvq6txF5XGr7LgvndRQe3DTXFXXJHALBQniJRgyZrrnT",
  "key17": "4w3p2ugRMSbjDqQSBZTPetCV6y2qZojUZjN47Pnvm6a1ZKgGQjShzGd3823rj6fBRhNNLhBarPMfFmEgRuCqN7Ps",
  "key18": "5KLPDMGiiyZnd8QwnkRPuh9CXjNP5TxWvyZihPbVgNAb6kECPPVqKhB3nA4sdndD9jM1CwqoDeEudzARkk7qY4Jc",
  "key19": "2jM5qXqC6nRheCwSsnt2zT4EJdSk66E4Vgdz3UxgVAQnJYZTf69wsqmhXR7D7MJhTWtYfK42zwFxyXwaH8kuEKYh",
  "key20": "2uCFhicNt1nRQ7sE23e6cZTDayXWz67h1gXajNU8jJKHJUyqX6b6ZHJyVk7dMVMc7qsNqExoXZXVb2rL37EEVQn6",
  "key21": "2mRaa6zwCVEquohLoh6t5wovad9U12uhwrxRd752u6BgbyKAbsW3ApBD4fTUL1cEjvnDNjM5WitpNAMWXuoaBNA1",
  "key22": "3SMSpTu8P2yBdAWXq1MJBzfRoXhzqoqB9KA3TJCGSTAaNCsRyFdqH3f4vRE3tmgWXF2E1WYXR9CyFtRJ3uRuP1MY",
  "key23": "3aL9pDKccpztv6DkFp94mRoZEiMFqadn8q9UP6bt5Xt8pq8BGCL3xuiekA5QBddApjxckLVHFohkCuGGe3qMh7Jm",
  "key24": "2AozdZiyqwHWvVeQLeboy8yxym2WQN9fu3EtGFBRpm5nn8ZbCrPtMJLmSWG8o2AyS9VjUoW6iokFFJzrv7DWnb6B",
  "key25": "63CHpTcugxv37rPqhU7Vi929fgCCSxafciSR5zTwidggb8Vd82Sn4adFbZykrsKpVzqfBk2sbBqhpKoNPrv1W3RZ",
  "key26": "4g28sAxknLyHUCDdUo5MPhcoEFuQJGz261DKS7TK4UwWx8wNNKyFW4DgKDYz337ZoYchL9CXbWKK2qWmjrSJZMF5",
  "key27": "2TyJ64XmTTbJiGA7PAxujrPQL2dZTSHgm2wTeNmSez2FdvHXktN3eX2DKuzhnCaycJ4fLs9LePko39eME9TpNgds",
  "key28": "5BvqMCeWaxYoncwQExpaRTSKde1J8JoTF6KAQHPdU1VXRSYaLUzerburQGho4rZdMPzy3QZRv31rBknrabcFaz27",
  "key29": "2DtGpoqt55SUZqjsKoktqbEknaWCnZYTXt7f4eMNPeAUYFvY5wWHSAN9nhh6KjmP5XaHgaQ1CpLYmz9Uzff5vUDd",
  "key30": "4KJ2K3T7Dh9iDU5NWpfcxSXPUQ5Z6aYMQaNjNtpo8uJSXDT3B6qeh6PvudYsiQPMA4ft4coPYVwkLT2no52xVdz1",
  "key31": "44uk11xCBouWRXX2A2iFDv3m9JmVKt5J4dLyFUCXy35ymq8hwyzMcd5iXFaxrDphxJV9i7fZFYTzLrnwxqLQ1aMP",
  "key32": "4Xc56wcFrTiUoB9JsdDiCdmz7qCkC3kb7xp8okhShV7oQdeyJ4exDLHxAbAV9YgKhaY56EfAW8c51voDeUNe5yYz",
  "key33": "3g6iuzuTjuHaqF7swHHhPVuahTfVQhKNGVFTQTq8fusAgJZV9zt4FPRfrbKm3TUPdcfhN4aXzseXu9LMcQ2dwxgJ",
  "key34": "3byg8gRCmswVA2meATRfdDHfekfFJnxxXw7jJ3j2mzYwW7zta5Fwd6MoPgrS9LNGMGQjC8Cj3HQ7RSu9CSYrAqwk",
  "key35": "4kyFa7mf4fSQ8nyzgVxFr7juNVWUJaJoiqxGrTdhKZpjgA1HxxAzxBUy8QRnNZw4igusbh3Mu79Kt5adyQ3PRWer",
  "key36": "3BMHuffGyfN1VFCrK7Z4Tb9iQU61U6etj54uFMEpC911tRiGzhZDLJQ7gBZo15WzN4vJQQdCWcBxBsehXKvYYW8c",
  "key37": "3sDdFxjjb2h9YH52UgK943Hj71MMPrK9t1VukRyFxNwzGNwgaEQMHdzcVvzKvzgrwqNaFaEay4NqmEg6b2gsmenb",
  "key38": "49YHBNXzuptzcXLdSxX1iWeP2V4XHEDn53y3oAu4ZRgm5jeiMcSWDoncWSdn2qFBRGrrkfFJmRN846oK2d4K9PSY",
  "key39": "3WoTYfwf3dZzDnrpsG5S8yQhjmeP7m6CMJeBiy6aWzadEFGWhHvh9LUGJ4BuQZKUFJcaDoXtZzDAXvEEGUwH3vy3",
  "key40": "3b6kPHbGcbykUT6kB6MWuHWNFzF5jdQ9hD3mcKfsMjwDgcQe6G3kxLVeXJNENY3jXLm8brVkJQhod9bFxiAsFrkY"
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
