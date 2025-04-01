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
    "3MHU5XywPWQFCZ9sdFfMG2Zc3k4vLwgHprRQLVHk3o8r9WHkJdYJpViwTXowfzwFb5jQ95j2pezbqGsh9TFEDuqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GqHLJqctWFQRVkS8h41aeeRJUjoEMKCHioWHo995PbMyj7qXDBR61qDWYwri7FHDkSf4fyJzmZFWqYSvKumDbLs",
  "key1": "5ief2aUCwA2CZkzhwuYvJYc6juBtHdDVwkVyBDJgdZvASFLSp8264jRjdRsa8Ccoqsy1bdk9vATyT15UBTfmkYDu",
  "key2": "G341RiTXTpAKJcC5pVHWCVkDmEkruDHvRwQWkJGBEBQhbaxb9XzikasJ78gkkTVwrLn4VxQcATvceFZhcbuzH7i",
  "key3": "3bYhUS333oFsNZqX1PWqbxf5TodQDmeTqwiNioxoGSaCLQYUM6hXtAsFq2vKF4oTWFgv5Gcgxneq5n9bs1cMiEfk",
  "key4": "24i7a98Yb5jfRhm1YKk4cC6xFbavRoxeVeQK9CVSwkWD7Y29oigrkfRPNzVd26u4pz3pK3KNS1iYNSxjgXH1M2if",
  "key5": "hFy8WX7DrPiR812UrpuaFKfkG1ieE5ToQs8TAYSBBHvUiQma9a1ozGzcrveDnkvqmemkHFwqrJMDQHUXbtXbYZq",
  "key6": "4MrqANiz5UHxTuwKFjrdyTFD5JJr5rt85eucEKroJZxkfxgYTjbGbGnF8Mc3UpMeTCk5ZenbaEmdxNbuzR9qvwzZ",
  "key7": "5Fwnai73RnhyUF9beWqPzdLFZ2WcBJW1abEnfjj8kveo7JBRVZc7ciTgVW4LG6xQEGuPN1xz5gyBXvLvz4xqBWe1",
  "key8": "4AuPyxSXP13u6LodStvaLAwUgZo5ChmXFkYynLsoFPmeZPbFQ3P6Gi3A8fA3oyaG7AEPX8GgMrhLAytCQMVmFzsG",
  "key9": "3zXbhdDSaJQmyanD6uR81vgpvhmmzgWPN6JVXQbLceRJmo9ReiftnK1MAFyAJzNh4YmyvwP29CyDJmSozVKpBvfX",
  "key10": "348cDoC2WkYY3ngqZWpNbEAsuyk5Q84EkT7dZ1sz3xJA4YBRanhe4LeMYgULbgAMvdSdug68KHuRJJTcSRMnQitY",
  "key11": "3ZvHeY1dgtDwP7y9EXpxn7pfffRUu6htWCJQeXRU9CpUiZg3wiP54XL4UVARi5wQw51ZpG5MT67ViRR3j5zkMoT1",
  "key12": "3h1A1rDqkCEiSXJrAerKqgjK2PELyMsYzrJacQsZuXT7st5fEMVd2BHXqZuNuh2Pq4T39aJ9W9eWpscGBiWZtB2D",
  "key13": "3rjN6y5e9tXABV5QAWbxdVVqJ7ndrnd13a1TNzZFjiyE29f2NQNCbgE782Hn7sYms5iGhUMT4yQHYa7J2LiouSMi",
  "key14": "2G1Pd9JMirpceoLCYYPUZA6vdvZXV3UXTZ5tXGqy6eLuKXYBcpB7zVBRDNEFVQKWyNxTUMNugeU8FfU1cwP7Bx32",
  "key15": "nTV7DLBwTLe6R16mxuqJtbHVUgVHRjtvrZ8ZwiyayRw4ghnxBv7VbH5WbHVP2LtPVHXqitGgTpfFk1Kc6AyrS4k",
  "key16": "497eJm4Gbp95MeX1zB29hgyAkpmYWok9MRmk5kKgXd44uWiPZsRaBz274yv8rVvB3HQFCVDh3d4h2s22Arp2KTWZ",
  "key17": "4VkwPxF9RojnaLUL8j6j5LV7DnTWDmTUaSKYTw3pWsBzfiQTsh7KNvck5bwhCzhtQWwVZga5VjQP6aywLeS2aDiL",
  "key18": "4z5aJmWQ95eqMEvGTRcQ8yqDS2kBvjRqXhVcF13Y4HSLTb24idNKWkEF4rauMQivjWUviiLSujcT7YT1uxkCRrmx",
  "key19": "2iDBeZn9hPqkWj5JJ1EMz65VG8YdooTPRxfVvFeZAo1qDxaWBeAf7ipA8icbagzBdhvxfnm6UiCccLU7tJaZ159S",
  "key20": "47kXUsQPdW9gSw39DzEnZWsGMDU7XN2HGZcLZednRNEaQF68FwJy33aY4kXPr9AP7XhM239q5pZ6KJVzJ4AWL6Yc",
  "key21": "XS9owHxRHRD9vjsRCnVVZNeeEVxrkkf7t5fBMJjfr89uFKKYcHtYD3vPXRgJAEgw8qEdHARSYvAVHAN49rRY6wB",
  "key22": "2Ay476FKH2665DApZ47RGHUy2wS9AARKffJ5P5h2s9jZtLCRKdzDM3jNjUxonzBGUZbCLzYW2TnzWQixLV7NuFSu",
  "key23": "2zVt4G8XoPVZ3fejZSHJdzbypnDHpVdhH2bTPpXo9A16AXkeCTLDNpjhi6Pb2vQYP4iEUSXbQG4ba4fUyBvXPLNo",
  "key24": "5Zetiogv168dkCBSp1K3Jkp2rH3RbxY6WJAqgq6XuxjfjifLs7mSepvKYztRvsRWkVrofB4AMKEk5uk5KD1opV6R",
  "key25": "3fyMwRbf8X9qFyJo2yr7Y5CkiTaEjGfoJdwqLA4byGwf9BqxqeMqeda8UZxke483sh9iNnn9G6AhohKiJVCkPzYV",
  "key26": "5RMQQA9Vw7dr3o14vzzFzzS5SzUB3KXKyBoEVL3epaVz76ou88XnB51qU5vUr7qd9QWD18e7CeJWSo15Zwbye4cx",
  "key27": "SWqj3izvqrrJxvQHQABKVfXZYuJcY9L43TxLEhtd3y7SzHXKQhgF8kWzVba9haVW44QLG46FbMGEfFrGhRhVS9X",
  "key28": "21Kv6yfig2PnXNkbKJdsqkokQryLTCjwAqqeamuQJxXYCAYxsPHuYr8uZ5jmVCYUie767r41uoTLucx6xbYKFgSF",
  "key29": "49e64t1ygZUj7jGAD5hFNyVY1o5XxbMm89WRyhSKkYhdCbFuJCLTz699avG7mgN3J4CZRXULTZR8Der2zagQwJW4",
  "key30": "5LtYFm8VtnmHcXRXYKMNyTy5r2tgNMoZHKGkg8xu28XTJR6dvAqDSDw1PG3qSReF8fPiEFuFGi56pELpKrCHoJH",
  "key31": "3NGXGWFvNe9kqLTFQ3zAjt1eW25XqvHhSsSCv9G9XJEtfrCM3RrzDDNrB3yhjvTSYanx5r2i6YZcDFRxwhh551GU",
  "key32": "5nKvjCruDVPcz9kHh2MXLMP7AAMRT2qFm33jEwbFMRFay8qqM1nu5k5PDJBAQ51ZAPQMJcqqNg6EJ9dSiyD9K8Ar",
  "key33": "4pdyFrpRHLKpSU8B2dfdTpSuLDm98w1qmjggwsqiqQ87FcjEpErggp5tYfKubvsDnhXo3JDT7ZQeuhppDbx6mtdo",
  "key34": "3todaWMokzSxBbqDFv3vVoSAFZjiNM9nAHCucAEtopmhX5AsrPYvi8xoco1ie7kW3BaT2Yy1ZXpes1cGnZi9dfWd",
  "key35": "4AFGDGjLp1CaF598tFR3GqJysmPzPQdAcrXFSDhV9zSS5WPXMrtwduFW9EoV3CM9rwFnhhxp4vZ3gMN1tfytgC4L",
  "key36": "2WpHtr7Bm766hFatd1hYV3W1avyx1VHrcaP5ysuwY5FcxyCHAG2zifA8oHy77MJ8X4Teo7atEpUDkodPRcCRrfVS",
  "key37": "AtVrdT8LkoW3P4vYf1wUHnw5ESFDGgkfdHTHxztudb5SpK8anZiwhUEvvGGH4EoL7atWLWAhrjcUw8F8VaKukFD",
  "key38": "4YGwmYeVXUctZ5zfQVpEJBZPmRVsBqvSXwstLad3WgEsvG24YC1e6CoisbwKQrCamfos9vY2df5Yv5dxpd4sLat5",
  "key39": "34eENtHShDCia5v76kS9kGKBHQ7YbBvbw32BkvjAtxKxX8Vi2rYwTxoF3gCzmihwZvjGYmyVxhNT7nXq2wNsygqm",
  "key40": "3SEvh1opP3tJhy9d4nu5D4DLqtPZ55AExRMHnWh7EavTaRKzzXAQGhvG3uCRgPpQrGn1xeXj1mv1VF5ZWpHq6jSc",
  "key41": "41k915Z4onp2A8uAFiaUtY3uNbvdHQocdnwkKmZdRDFQ6Ere1mD7oAuf2rgLqhqwLkFGT8PoVR5FXh5M3e2xNK3e",
  "key42": "WKwa5wjBanzryxWFP5MFbm74j69Az47XBvnjZaDuoMqMt5DeuXjkrehkhU7C1SMdytMLGyjZHUq5ciCr8FpKDRA",
  "key43": "3TJ7bnsJANXU2yDGUgHwykmYkXXxwvkkMw9jx1GyNLyspLS952tMAL58JCa8kQfugCrJJkoKmQWArqw9yYTrXPF9"
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
