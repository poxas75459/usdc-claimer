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
    "KudabNG7sqty7dGUAY6oBUHftnxvYpKYeX3krqPLxeSpnN5mVEgWqzY7Ym8kWM3cXTn5q7eTukLtHCRvxNyrzr5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z5gxt38b8w3Vr3yoQLKdmh5GMTNkVAebdVBujWRDkuX6Yt2Jgkg3AQDT873825o6gnxULsZQpMLzMt4ZQVg4A2o",
  "key1": "4dA9vsAggcLyzAqGaRZj92uExScnXfeLsdTTNYHGBXnZqTCUH56AEkWVV92kUEnnNsZR8KjNQ6K6zC9HesEsKRZV",
  "key2": "5XPMr12dbzbPW9z31BjVrzK8sZCVHfQEXYgKmUdVVcrwB1tExNhYZxBECaUvJgvnnMXqQPSr3kjuAa8ksWEQ3a8y",
  "key3": "349LwpV1wVLKqDzy1ssqJ45mo8UmJrYgmphTJGPBhGMmsesTVKApMxEhQAZykEMvyv8etBkNi8YBruf4mHkGWMQ8",
  "key4": "kNrFZnGUE33xfZ7s7phytwpqtCWapq3b4reRoQBXYMkGmqSwYxo9X3Uhba8NwbzVrZjTnvy16QM6PxvcgVW6Fy8",
  "key5": "5MA4EmZ6n4eZ4su8Pjwq6KdEdRndmFM6rUCnXF4MR9EMEZu3cTffSfjf7LRtWBL58NdvKJa6iXXSXttPViNR72MU",
  "key6": "2QyRgSASFux3mYFs47kiefUSfiZ5SnAjCzvYQdKTFe7W6h7H2YwVKEE9pr1kkhsoLE94bJoTdGZSkCQE8xpZgoYA",
  "key7": "4xLoRjLjkGtHystmbpmrjD25zPJvtCE8FmCr9rNYWm9gazKzEzsXVhinsH6orVRHaAmdxmnN8HoQ967Zp9SdJGaW",
  "key8": "3GohZjhGigbYceV3aMwfhXZrXzt878tVeT5wwGdZTGAQP4yZJmtT7N6rdrxm3YmsqUBqRML8W57eLneVfX1BJniy",
  "key9": "nZjFBQ9ZxDY8rKTkScKp5ABU491jCrKzdxSfr2zsaz8Xmv3HUAqH5ZeUjoGkotUnduoSYYSV5Gf9eaTp3deRtYN",
  "key10": "2FmbBXhhYjfgQ9fg4NrwTNM1LNzRs62CfKmboWrGgJkQRUDUXDnacRLY5VHSjrcGePrLc2BZMH6dtrhFXqVmmM6f",
  "key11": "64ULNbvjPXACNTLMsfC35zUKfyypLSwzmqnEK6iS1yojaQUVMSRVcwF7Lb2rBvmkWPA9sZRUpJ8t2ca3a4ZQ23RB",
  "key12": "5HbQnBsAsU9vA63oNERqPRaEQGq1n3XCkAhPXcDti79QetjkF6bjXQP1NiK3duzzbq9tbHdWJPeVh84JH3527JiE",
  "key13": "22ZZgaHUjgYVBG67aHCjPzVY7kjzWvo3YFjBTDPX1W6qDHM9bE4VtkCNRHczmJFwULzquAxusqHXh1nUcGqc1NyF",
  "key14": "2odyspKcKB6Y3y9FujJ15yzDD9PJy4NvXXQQwr9F4oHpq5HR4EzVAQb22Yh4MjTwABvtCbgjtTMgkFNKRzYWmyn2",
  "key15": "65Z7GHKkDSDaGT74H5dF9hRdTqQYLWyqVxcxera16htDENZkUiyaNbi1JSYETy5wfzb9uHny3sb6XR2b99bfy8gD",
  "key16": "55REffF2jMgqML9AWoiLzCwv5hfkXuQy1ifPZ3MfYDPfAJ2KhQPa8itJKqd6VWiPAiBrBd2ewcRSzKZeuH8AQzg7",
  "key17": "Zrvrq3bgzzecvnRWpcAXpW1dDVsbiVJyYCeC4C813rHWfEKFA3uxFDZQkpwALG4JhSaVmFq7i4ZKAbaKw3GwiVS",
  "key18": "5DqdczBDrickDEXiCQyca5nSp99Anb6jD2wWoL7o6yaAKxjEefDFQqJFhFy1fWoqHzwLeGotHLyaCmM3GQDrh33P",
  "key19": "43vNPCDqoPtiBP8rdjfiosWApZA6ctECdqp1BBd9VFTMzzKj3VB9BimppqqW4kghoCHbWRQJbXNwqfCV9hyXCpdm",
  "key20": "2HXwxnDtvMLW4kSMve3bEo8RH5akASr53aW8eKmQfxBZGH2jycSuJMiYsCPpszLfwpScAhA8e6sNyNHP9wx5J7eh",
  "key21": "54NDQ1RpTHrxFzuxcUtSmzRH2Cn8rkR8842824q2GGijFcSoMnY5dzpsiBgBzmYnYQKW94KDWoXqJHuGkrNnaoEg",
  "key22": "3xeRXugffwg1KtTbqHVxgP9JiFr6anVx9pH9ceEK84fMSHt5zoacbeCzvQWC7ueLeN9cgrcn991Go2uaQ8Rrd5Nj",
  "key23": "2SGQsFKMu4QXTtrR7yS5kY8ZP65GfF2U7HTnasBwfYvfreDCixgUK4D3eZXFCH9Z7qHU8FjC3JGpLEyU7tq6yFQF",
  "key24": "4BazGJ1wSBchKzhcChbpbBY6R9pBk5mWvGQKrL2VyJ3etUYnWe4oRrL3sfqi91NsoJwsns4gXhYE8j4HTdZNvc69",
  "key25": "54pcGgKgryiZ1i5fQNZs1dJCQk9CnSTSUdnndaLbqTwMEnAcr1pT6oqQc2sTFj3Gow11vZqetH8n5H6mmFPZ5tpp",
  "key26": "5VihcA9qnNnHZNBiNvpoWYEigR1Su6NxDXvee6FqwJoprGoij9JWkLSrKZcbArEE8PhZkqVnfe7vYmRVvNHfCheb",
  "key27": "GnciWEEjopK634jXL2MseV81Fwx8wBj473Xv4W6nhhvBGLuNwN2HYYM8731G4PZbPSeCoP1oFF1MHuyHcZK3hCf",
  "key28": "5RP3X7XVhVCYHnFyCYfR4Jzgs2b8KLvqD4xMbnKTNPpm6GJMZ69ZtivjBt7QRENq3rpJztEBZqS5YjdQ7qZfDVkv",
  "key29": "uLM4MHYZU3U1w5pDNY2vzf4wa6Nmu1BQGY3V2kzS6bbkX3GF3jSd564c3q6DFmXrA53XaBXxhUaUDGdHDuvRDuk",
  "key30": "3D8tNpiUpqyoH9ntJCU7nN4xM4tvZZ2ZoDWj7RH3kdeU365g5mfpFn4ys8uSSfEBCtqqoAEGbwPgSX3BnE7L1WPk",
  "key31": "7S7RxTGxfaKy9fKPNuCSqunhJhnB1dq4SYVbhLLrAa19Fx53ELTSL4kde1KbfX8kmTWPbFNkRdFYn2RXeEWcv7r",
  "key32": "5cfxYxDSSegCcH9E8tTKu3QdGesXiRCcV8W9zwwxEuZTtFZtbJm8pL7uU48QVkUsZZqXe6iYKLEAKJqfe5aEHdre",
  "key33": "4sUo8sjn4DNGEmYZLtAbHux5zHZ7f4CRLXpFdu831UFBU6hZVwwbWgxrfGdMGdSop6tpsWnAHiux1boZuVyhG3aB",
  "key34": "UVx6aKc78xxrzZearw4vXG2qG4ombGCgZxNvoqvJzo1L8KY1oUbBcLjHGD85xyFcynv5hi9pbotSwqx3YujRL1i",
  "key35": "3g7DDH2Fmf6YwLNx485nSk6gQmE2g1wRwezytBuS5ev72SgvncjN7kN7TQkBP18qe84xg5q1yMT952SVAeB6b55R",
  "key36": "YyfMD5WgHdoMuGuNooMZDC7wHrJRqtyHstFJDR5NRq3V9amWS2zoCQEvvYBb9PJ4RF2W4G4dJehfXqQW2CqpEa2",
  "key37": "4n8A21QmW1barqk5EJKZzjakcVJ6HchBLfZHGeLXEQeLmNEVHXGjAcC5eCT2cyFtKhuo6SMqiHRfYGuMXediL3n2",
  "key38": "4uCmWadYjd88hCcTMAqJMRCj6nRsoT7PZW3Zr27BXcw8ChdygPxcdeYyZYsWxNZHn9KQnqy5RuuvxvYfvAN6p3T3",
  "key39": "2wT9vDCWujSq9CZkYji3B1HraWvEq2941WeFsUDAtF7D8yzzHNMpEVo2Be1Rkmt8pGQFWRrKVcCqc69xzS6pBnAL",
  "key40": "5L7rH8YxiqxyZPV1YwDZ861VzeYgrnjCRoSxr2G5cyQhBLcPZjkSD3TXf9TFpnZ13FqixLo7NSCEA23q6cBFyApd",
  "key41": "ME8Sm9BN5Cg58692kB35rnZbejPYCxPmvZ36htU8L6WeY2LmEAkv3BJwdbcuZqQ9RBrZeELWfj6YnbnhykKYJns",
  "key42": "3PNBrtWSej27rgDBp1VZKdn9MG1k12fXDWTP1MUByFbdwGUVocVsrETp6jFKRrz3GJuPr1dfJzFxFjEh8MhxTJ2a",
  "key43": "3iH2YB39ToNp8FRckZ4CYVz9Ktm9fuKehTWx933NUZYDZm5uQ2hzTsXLjYLDa6AhySTVDM6GgCppAGWSKJy4mL9d",
  "key44": "3yQjuxEaQcDeaRKZm293JMuirZPhY1Fud8uqhJ9L3mBHQ9jZ46E6g6vkg8FcUwipBoLQ3Jx4FZRCTaNwvhwiYzVK",
  "key45": "4fM2YbZXAZ7oef1e3Tr5qtuqmvhtN4pVceK3ro34Uw6Kpn8W379zgpo9ThqGTrmREWaWHDJcQJdRR6nTiwRRd8Pa",
  "key46": "3ThxVugnb82Lga7CCDGyZYrX1saf4oWp5XYiyrWTeaS2fwUpyf8TFDCeZN8tsVy3Ny74uyqmHSDERqDpqnD3WMLg",
  "key47": "4yumrpDJzEm9xHbT5mEEnyHsm8uKfUq2QkNddneZ2KjJbjdXWjbxNB7M9odjuyzDmNbCyVR9FjK5vAsypQFVNovr",
  "key48": "YenUkomu3P1mJCPQ17PKKdupxVfijdRjde66GfvwBs1WU13BsSsYcgYEWeCNkZngZ9BrdXVPXkE25oa8USZV37L"
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
