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
    "NU97xm7CUSxPdQvDH5yrs9LRoFi2jbRSiiTU8jKCJzZiec5VBNan1KXu1begksNHyDBTnioU2ArSkeJZbctWaiN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xWRunxsSzHALh6ZDFqoaAEMmyQWyuf7Ea9DKg62UZHEC6fU56gngY5xYsqNnUJi35xKsa9jXHFW3Nr6cnQcCvzb",
  "key1": "3UHBzmeA2dZSfopbEfe5zC7GZnJNcFUuV6Th3qir9y4X4deJAZt3nAHRMWeEnws1K8AYcwyrhwwXQoWz1dhHuxvC",
  "key2": "4kY3JtojqR14JdUww2hSaHbEBNk82zvBGPKoS15V5T4VB6p1TgkyMk2P52E8vJQufnTJkpGre7rUVUKMhGDddQJA",
  "key3": "C7QMkKmj7RHKvR7hfu9hqapsGs6CUgqkenEdA8i5xsZsCdKcUX5kd1kA29Jf4w7MvBFX5X7xwcBFZLUpuPK5N5q",
  "key4": "3K6VjB7pSpovwLuJgYGW6kW1SQMeCZ44PTgamY6RZecvpJ2E6Q5rzMH8HisiBUzNhVyeaHPRVwxxznAp5CCgpgkU",
  "key5": "5quWKWCP4CHa7Jw9eoYP2CTLmX4UrK8bpj4QLu1zr66tPJvJ1vxJBufZiZoiSY3KXFwnwVwzG4qScMZTaCqYNrf4",
  "key6": "45MnQANNbaT5uvyEpnuQ5tPkYy6Wi9m6dobTui8R1BfQmTigYNaThjbiVP9adwZ2U726H67Gdy3WzdXEFu9kA2f3",
  "key7": "qA95BSkjyjdKqzC1Vm1WTohVMYfkp5PVkhhiWR5pBwpRkpAKMueE934Fn1euwr1UHDVXTyEHsU2UZui2Dau7H5n",
  "key8": "q2GXhHgDtkWdiQEzx438BGsfYsrk7caVUPYE5aJQ8uwh1NmHq53Pw2hXUG1JqgXVWXHfMwbRf9ZVhv1hiHNHY7E",
  "key9": "3LSYWdC8HUhrecc2VvmFCRVjMsJZp6wPyBmNK47kaB7C1mM4VBkLrpMwWqgmsqkqxZov3khqdKYpUhfhCLn7hpyE",
  "key10": "5wZ9vRbbMtRw9Ue51z4aojaogmb1QE8W4zF1fpZ1CfkSsuHhFTio2DT2aTnBCaF4UmU9muPxvYZvxJzM9xDVRwUP",
  "key11": "4FUMAwT6cK62j5YYnfhKmNnxHxAJLz2WaHoJNwZf8rJB7wdGHuqWU5AWreo5M8USA7hrCk98jNjCR8dKBSYHxQh",
  "key12": "3USGftDrrR1SPq9Biw4PyDu84sEe9nUMQKiXpmamJAUMRRYN9W5ue1ok59UdZU7dFTzKikWcZicwayRQw6yWTgV4",
  "key13": "5xjP9KVx3aGJakLAyKx7fDUtSP8QGHwYTqL4pSF3APcr7VE8yYQYmueX5DuUzTNFHAHj6rPaLLUXs5g7VgNexoQk",
  "key14": "4WMKn99HF6T4G9y7Mr15rgtAWQfZvXbQTHNdX82suCojaYEDBwXrHNoZFYiU3Piborw91hoidv7fNHKT5P7SuxAH",
  "key15": "3F7rXDEbwLn2J2VmP9hXF1VTHYjpMpuL2fcEjyNQB3ja14wB1EdoDFVufKHtarDM9BwzQrxrPQKEmqagjLUDXuVJ",
  "key16": "CR4BtCCP7jKqus7QDvt1yBw8EASJFbzfuXmfDcimY953gyRL8ewnF58p3MWTzV9fLeMHMsYmiApztbk4uvVTh6i",
  "key17": "27DtiMh3yppRrXdFBRwGFQpW2jTER3GgaiiAk5TggcxYHZBQpLzjS9MfYQuzmbfX4Qp4iDrmSGXXwkMgyz39Ytba",
  "key18": "3YDirRLhGspkPAzoyUEGLdB77Ej4Lv6pwAm7tsqH3By6uSWNrMF8uWskmNDGv3EENVzYPoKBwuD4was3ytTQ88G5",
  "key19": "34T7TfvMzNmFQk3dTbyZKNs8pqZ5oENXHHb6gikzTW6DNFtEpC37w1Hd171xvWVYekiDngdQ2LGPFCr1CBC9iMfB",
  "key20": "5GidPvbX1GDFLQofA22hgiuot1wF8pz5BKRQTBdTwsQHeCsRPohCTEFBhWayNLSywdjqvfk5H9MsFPP34Lmgua83",
  "key21": "Wg4YfhgamL35QswBVNYcjwy4vumchQ52XM6Ykf8qCpJharEWVGbDYyBEHXeAMampRR7LDNrWYKMcPurX7havPKw",
  "key22": "5sKpwk4vCK9EQBQz5uSh1xFN94cj2TvzBpMdxJB2gcvkyiRbMzBrg9Ai4WfeZWPZRVXRS1z4BTAazrUw9Nb1NvJm",
  "key23": "4jRGx9nT6DxRKtjnzNdHoMzhkMc2WFrpC5wqkwMGSro4sCxNAerRURKN3DchE5LBNxQ7AXyuhXg53Azn5Rut6PoV",
  "key24": "2af36jPE5YsjHsN4TM9d9QL1WySkD4dP68wzGFzeSwQ1K27dZXUzwZTN1gWpa9pU4RogmLjBL5ABbSa7REmse1PT",
  "key25": "3Pz7i4d9kqNCJAHFZwCJYYLYsqHxBzpwsLpNYzVnBGBp2tytSj6MBzM4qKiQCLuiZypAGFc8qgqpaZqm1ovxYJMF",
  "key26": "5Wdz97Nf2vDaFALXp22MWjc8HCZ4iNtCYPzzEfJRmXS5MV5tLuaatSnHkFXY3aPMNGeiUvQSw5pvkNU2jGcetyvE",
  "key27": "4vXynipG4C3RrbNqoKT9hmAohUYse9Wg6EDKdLj3AkbZPN6rkqnstdAAf92DQvmqMGPBcc618dyWL3oBHaULtQsb",
  "key28": "2vAKCKnbxWW2Ah9UZtNRPG5BePuT1oht7dD3NHUaCRfjMvKAdm3ftScfkAJeqtXxUNDM1MK1zbiMagWf5aPSSmPU",
  "key29": "3yxrj3M4uWymaXfEuFJPvknNVsMdjAxue4L6YcX8FN1SvwEgDT3BhACb1e7opHuScu3GPQ9uwwEeScPv36F5Hip9",
  "key30": "2iHqxHGwb31dyPLokqYbYfjh6g913ZNsH4WYCvg517v2fZyFvbch5H2KEgQkpUPgoSsGc4jSHCYuuu38u41Qs7MK",
  "key31": "2uULnpHm9yc8YM57tALfPJSFqY4acSiR4g1Nsbyian7hxjaXvLEGnMdD2CdjjbbvDXYzwLpkqRn4RqhxtPhLMspC",
  "key32": "53dB4zRzs8RSCVkKXgUpMd6D1CBVBZwHXrvikAhU6tb5wxiAk73s2Jyd6QqtYvuPWhyfgaiZic1YZzcunF5qgVe3",
  "key33": "2bQgcRcfeL9wqmUEdMJCMjZo4VYRmnudCYDig8aUVoR2Fin8KJMnXFi9ioMYetSNzPw19SoBYxi9n3Hg8zrKvtt7",
  "key34": "2rjy7DStjTgBaGe99H2R3jTx3gVpBJC22AW6Gq2bihsi33R9sTH73TH3xievB3i8dNctNeSMrU6Tu7VngY9GLV3D",
  "key35": "2KfBXXpzddaLv9TVbYCBqGav9Zz1T5k59pd7KoZWXBDJw47xKx9Ye4cckLaAyoZnXDyrp7Q1JC5PAmNxfaCMMDdK",
  "key36": "9Yqz4aGiwfJcpzT3x21AryrF8JAHNNRQ6UvTgKiJkRizxQRCHpxmZmMqGx1RUak1kZe78btE2ZrLuYbPi2Rw3dm",
  "key37": "2tdVP7Hn32CiJZzbNi8kMyT2FXxydeLHSrQKo91cs6m5JUA6J9sfB2kxQRUT4BdVWCjkCGGvv3EwHyRWkpzQCaMn",
  "key38": "4tAtJoUmF4ZEXwZRtKWZKLjGsozcuWKZEfr12nvaCpLi4eEWyHS2HYpCg2wSpV2LWdTQE6PqtJuYuYjubPiBv4ug",
  "key39": "4VHmHgvQfx8uzUMxX5TKYG3ScdgJQBHKSL6Wn8Mi9dQnMymWuXz27wwAMKmEokVwvHTNZEjVGrjcHM9FT9jybdv4",
  "key40": "5ddhypLCvHat5faeZBQbYzgxeXtWWh4ghfenyipuTvSfM87qrB9S335P9t3b6FJURTw8vFzASezc2AmhaWY4jqKD",
  "key41": "rhYUgcSY6zkMPwfAVACDK2aPVF5CVcbGPaNuE5yke88aQiQmApjCGCqamWggMTD2njg2ytTyH3aHaZAfjzabUm1",
  "key42": "3L1rz96DDQpZE4TMbQApH3UGP8eC1ehDk4KkbmUChgafkRvMiCb2wj2RMapBHccDAmGfh7EurPP16XcaqHmGj8Eo",
  "key43": "5z84vfjm1k4VztwErqXqnSfK5XucK1ys5DcCFAkkmQes1rhkk718a4HYdrfGQdHpnFEHQSDjDfbXK6FSUMzYmkSs",
  "key44": "3KEt7xGn3pgzMNbpPN2U54vwKXMERsYt7buVGoG4F9u8LbtcJoi4E9vMxmE54oyetEmCqRVLdfBBsXbhNLy8pkC7",
  "key45": "3gavC6eFxjJHr7LxbB7b6qtZF9giktBHrJnGnNww7mgSmuqim2RPYYYtJDTXUoG8EB41x1qb4L62WaRw3EmDebX9"
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
