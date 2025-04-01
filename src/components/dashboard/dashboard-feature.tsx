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
    "5qq7fhrCWDnhYcB3H8k1meTpNAokEwmH3rTsvi2mMiMX6Y7qBR456v9dzhPZ9FByD3qHmA23AciWmumZjxdFyQBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EQ9zmXgGiqaFZ5ZUgo4qXiQNXwWaXRxAvuqbUFU9Vk6sQzs1LWMWCyE1Yoaph8uJEVryAbBB95CNo8eZuJrBvPs",
  "key1": "52WSLKHrEd4G2UzE4Nqeq6DEB9JpJ5GLfw5hrJfXiKGhNu7fbBYJ4JaVDKeTJ9WmYGJ2rGYZxifSz4VHoK5Pmfd4",
  "key2": "5zprSvA4GVWVHdZvBh81xVxdT45ekyj2JopyJH6zpEkogtGia5MmZkL9DyHeYEEVcP39kz7muHhRK1JiquWCM24C",
  "key3": "3Bf1piSkcwm351XhqN9kYxmKkgGGFK2LBAAwwYFZjGfWWWfhA12fNRwasVcFeKe2ksGk4aSrf8xvXpSsNXPj9qtK",
  "key4": "5VYPjZc2sBQezWVtYrWRoZHpwau6rgEck8sdamRUbSNPVUrU7c5AKjUCndrTTG5xN8ZpHxFYMTyyfuq8YKqw6S2C",
  "key5": "3SH98DBvCufVA7pbphCQYddPr9TTP5XJZR4d9XdFidsZq5ujsX5aHrjHXmYHVcSVZ4vmC4WzRJXGuPvbTUkoohiJ",
  "key6": "4fzobcn8dXB8oac6BeQRmqjg7Udo7tvJ9DjHpCTZJYdkQ7iENPoczVVr5BGTJo9ddmqhsxAG2fRrMfmaYFyyGUxX",
  "key7": "5otaZ3cGsvJk88JP9s7g3LHtek8JhkKiw4kbYhkiQ8gkbC8dpDF4GRD9ATHCLcVQXgRJnAfkB7gxs8xcmV8v1BgB",
  "key8": "4af8hLPrNmLmMoXagBF8CYVSGKaTzRqEXhFSMJzBVcnHaxfUAkpS3wKgx99nx7V1ZXjrKuoYgawofoZZoQyQ6L8h",
  "key9": "HEBGRvgw657J1Y9M9ohscEgAUdYpMzVbxjjCa56N2smr7UaJozcFuTcUbN6h9E5LBWH77pqjqK9SfNK7hBtLfJW",
  "key10": "5NE6cgUhUpF8zPxG6YzsLrJHRGMw8zLw45YyEcqSzb83MDmxr3krrtHQtJUoQUdkbvcZaqr9fH6FXWz1p8X76zqo",
  "key11": "5iiV3j8tW2ceX3FDAA56EhUzkobB7X5LkNLfAjbm9SP6GdSWggqZQknbBnU2LWwdAr7FDeHXNP7AtKdJKbEBtn5z",
  "key12": "BJ6HzsWtpjuZthnhADeMyEn9MZUYtj1br8fFtKqkiqULGbbhW7g7uokFhSkqRtUsArC5QUYVYRtDm8KoRNae8jq",
  "key13": "3Byazk5xLh1qBh65mFCGoyDhAG6YVQerKqnucSa1k7xPwjQKqhGdVC8oJsywNQE533jhw1S5G9hxNfReGkN8t9Kf",
  "key14": "toHe5cGMANt9RvGgKBLWsAHW1AMR9FZ5reecpcWCxALtWy6nqdNkV62hNkEsXEcNn1Ri8iypP2qG78NuXKHcjd8",
  "key15": "5u7gA8ZBH99wQMFoFr7aoe4crb23zzLxAnuqmCtCS2EtBqgcCtpH37o6ezXaZgVZKn54CS5MBb5PrK4Gebd2DwsJ",
  "key16": "24CLbXg4M92iHRfrU49xx4AH8Z4j48a2Emjvy899XAzjuVBrj5v16NaNcYDEJFjbeFWDGikvRdWZAn4qDtZUj2jR",
  "key17": "3nTpBzjVWZtSynk3JbTfLXEFBwAE3k18w1UBnscUp1zLeQgWX3tZdnVYwMciC5aK9wdDRigJnQhaMX4nc3wTHLFF",
  "key18": "5KveYQjmDZuyquzqKk5C9m3C7ugsSXqRuzTWVsRDu1v7hGwZUhP8cjMEfztMozEXYaqrab31MR4ZeqhzX6NhjGik",
  "key19": "EpGwrhuXcSq5S5sRL9kQYpK42N1TZLTYjskpHPu9wytzQRbVvGp1vsV8Wdym5K6XpBkpYfip7ctwcp9RiawUxnW",
  "key20": "rnWBWwgkCdAzQikEYdJ3mkyttHufq72SdePezNT5uTBjXviQU1WoWuPkx6DUHHm1U9oFHHQjAoC8v56EpYVN5Ut",
  "key21": "2NLXQWT3B86WG78L7PimRW2RK4DqNZo9tW2qw8nhnK1wpsvwMrMHwxs5hJ3Cmfr6HDSXva1iWRy8fAX3juZvBVQF",
  "key22": "28C3DXptTtqCFSX1TZwcLgjkXkJ6FLGWqRcQ8mnLyLmU9ZP7v3RwUYnfxffdFy1eqcJ2Kow6f1UKaW3AUR9j9rbv",
  "key23": "5ux5yMxNM2w3jFoXwT9vRt5G6uVoiXEGGMJuK87FzCbGDUqa33j8UEnhV6J8kEoUzLrDrohsdoPQw2tD7SnD9RU4",
  "key24": "5tJ3yntmxHH78xwAcRdtnzSVs6rumKMiJJ9J7aMj2qGVDmKqtgfEqNfeDvpsiYcpUSM5HW8Mjz9RoExkRfGhvPDE",
  "key25": "2PmhMjtDE2Fth8eAmVLK76evwBo6wBUGgpeQ4ErKf7pH5XL6npwGSCK7icih1ewRGN1CpbGPKMi1AcsVqGK2wqgi",
  "key26": "4dupQvsz4RNMLnstkgE1GH2Zp2X9yU82si9pVZTLtNRX7TqzjA4hkrduGs5uXrzj6LYDLtcUCRpnV3KLzRBWaTrh",
  "key27": "66o6zxu1YF3TCsirTCRD8aCCCSfZ8oE96z5wrMgrqXwwhdB4rD5Sxfbf3VGtH6bzLmB1TEZ6X2zYDbifsTBEskcp",
  "key28": "yKmwbYGcx8Er6gKPxb1ehVabXEMZcXadCYJZT1CFz2xwSYD4hhBxGXwfX9Pp5PCB9PGdYwyMvVJUHftYwqLbH7y",
  "key29": "rgZQuEkYvTeVKL19tTf7hu9o4d45LFCJDR9MmkH69o7FAzEr2JrRz6JmtebU27KRu4deDR8HsdnJZv2BW98Ljwg",
  "key30": "64XZ1yA3SUEoKGAcg75ScpgxHxf5544D4KCSM4hkkdPMxNwF8sNWCtys2faaeDb2a7a9uPQhGAqN4qFtMTostxGv",
  "key31": "kZCnEFt5jigj3kGHLChchqMGqtuikPrVW1SscwNKTiHwenoGRvapShgKiPLLjX29bcJedV9zLdrT3txHU6xiR5V",
  "key32": "2KG5Bi1LtxcRVg2e4u16W1WMXiue7AhWdF5CuRVXWy7byq9UcjaChjksMNe4HMPm8ZEUbtvqAj2CrKWCBFcrbbxF",
  "key33": "4kD6uJeWyhqf9cYBNZWpxwXwJWwdeY2WBmKK8jiqoHPH31bWEJnwevwJSJBk1DPdxkhViJ8BfGN3DvN3Ttq28XSt",
  "key34": "5B9wUfGG3fqQDTsEunrNsoLNcb56bwGtyDRrzfjFgdDni6ujMhPg6WC5hcyucXb4NxxmM83ZiXRQ8vh1ARevGK5c",
  "key35": "439kjFtaFheX8YRJJYUsDyPVYpF4QvXPR5WaDTTD2Usjd6JJCH4DpHmpGQdVvDJp2t9B7MKP2HwAnBbeg6LQwBc5",
  "key36": "3dnLYSrJjXLwvZ6amDsuAYnjWDT8CeKo7GmfXGcNnPjzvsa2Z1E69WPF4XvNUxxZ7QL3QVB8RSxhD1UWzPwYRwJ9",
  "key37": "2tkLVzh6Tu4YDQXJQYEo47vjkg2qenP8tXazMuBrf96RKJhV5pA9QHk2SE66EiUViH3wpceetAhAabZpQKX6HByZ",
  "key38": "3PTi3Ep5tXofPnmzYTM2WZesxfGyNudR9ghZiMmZ8LUdchdLwHQsGTQeoQewjxxNUZT7FGPW4uWGq5r6yKgkKaHB",
  "key39": "4Babaga4cHs3yPrf2ZS5BLjVAHKPPZ8nmUf5sGwemwvhAhQ6HevHQ4iBT2RWyL9ARCjC1jvwEKJU7ziz5ZNpSbn1",
  "key40": "4da1GCbxAKcrzz8ntE2jpyxjJFzgL1SJ9ZtfMwQoFKM781Acw4TfX2nJRnwGuWRV6K4Ny6x2aeELD5ZXgpxukAgs"
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
