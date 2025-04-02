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
    "3sFpAkgwC3qdsfbuDNqrTnMBnDvtjwuE7LwhLuDSfcmnBnbZcrJj7JAFzytr3mgaAPSZVtrrj7rqy21mmJepzD9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4coqN4kGqDKaSTo5rGKYcXNG5d36WCFrzQZnz6nnTEtQjP8dBV3TJXjbSTho5UyPAtSzNkQsaySSHGfPKeRY4tFL",
  "key1": "42LiuFEhm3XwpnXCTWnhEAkdw6KwFrmThEGVdsSBwwFSYf4MxFn2AvLtckpnSc8Z5KZMAqqNBcSNJUfLsnxusyja",
  "key2": "F5YRQxWzMDtnuqqo6hebHEDmPLAk5jijLW9BA78WGdTdr1kbXdB2LVzt4mcorfxYpFRFsCiXZaB44uVLyjGsuC5",
  "key3": "2H8KJKQYSzysVDUGwKaL6bVXxrM88VyEiyUaG3kNHty9H8ZVitkrwiWF9ztmrb1DamsdrrRdVeAo6izJd2zmYNJm",
  "key4": "EGMP8CMR8sf3AW3dVjACVRDXanvAiXw1rgwuEHBmKjHw8SaiHfvposaHL7dr3jNfdpAuk3BtUW2FU6dP88tufCq",
  "key5": "3AYj2C1aN2zbxiHgxZn9J9zPEWozCRGdSnEH5dVA24wWie3bzemoBjkBEvXW2QcmjPoPutZvjwYNwGMMpNHwayyi",
  "key6": "2uNAq93hmKR7mmjRe9mBQm7EiN1C8smGjwhoqR5Zt7rX25DRN6QqQiuFH888qhBZ5bFQeTEL3DXJAicJS7h5r1CF",
  "key7": "2tgZfhNq3G8GxySzqTExtBYHqWDtpYzdGve91GZcTP2suDgtAz28DDMNYbGGkiUSL5cRhkcB2ex6Y8rneExGD9yJ",
  "key8": "SuX6K3EzvP9tnJpU8J2XXyQcubsrZYP9YbDprrLd5ezjM68bXP8QYiahEAjCZKwjYKWcobZBNNUTuRdsgZSHy7F",
  "key9": "2G897BSAoSZMoiU7jndSyBTHVNixt6HD9WQEavsPtuNaQjLQJLejrzkueUWUEYrSWzKSAXBDxqxhrtQcgxeEkxiF",
  "key10": "4pp2eeQrUvHhXau2VuHzMrJrn9yKxxugRQcA3khye4VKpytWUeCtzEy4ksnxwnLmF4miT56GAPbJoNt1kqzbqMjv",
  "key11": "5ZdE4CUj7p2KyGo1xqWJwNBY3b5GXobVkLBx3BgsMKupUe9yvBqrR36VbE64BKWQYzTyVcHEYTs5NbKFfSMGvsFi",
  "key12": "25SJg3eTBAM3L84VXhPmCaXtWuzjCmXDaWAKjJh9BUBQ7S8oj9HUAZNiwT3yaqGxhQZ5VZ888wehmeYzpxRgrh24",
  "key13": "2KR1DrEemEnR9yRHVU5eGzLA6EfJ3asGB9i7jG35Re1HVEtTNojNemYJPq6h8nVTgGo5tvRdSU7sVNcG127zLk7X",
  "key14": "3RA3aJk5LiCsSoT6xitKjvQCtAmnWuS5DcZQEvDPAk76FKoDFB2Ct3jorbx8JHD11XHGQpbKhCicwQAwaFkQCmmg",
  "key15": "57DGMhYScKCQ6sYMcDqkeDHQ673shiveoVyppe3d3cdMfZM9N5VxsUjV43tZVwWUyBbDNqrad3dDaBQGxniZGiAt",
  "key16": "2PFgPahXt5GVZYfktz1EyFZQfYMpTwaYTLaZmpKk3LGneHYzHAogXk3UrQQBoxpKtNLsnvsFfV6ZcCUzp6oqS1Vu",
  "key17": "546RNrop54XJnvA7TYcHx377HZfprN92rdJkxLEqeaSLuhzx756ePRxebaUvhi4nNuQEgFUW4RofBfnBYCqM6ERE",
  "key18": "4DtB1qrKg3AbbyyjQrmjGW2pbWadNC58aBewDMFvdYgNpRBEXXRE5aLkPj1U53jRn3WhYfW846QxbVXFtCW4Uek8",
  "key19": "5BX7c41XfrvMb1BrwtiyFpP4pGYETsEb6WvwFvXFH2G72WVvXqShhjpV5qtdHKcJnoBqkHD3QAtPUrRMou25kY56",
  "key20": "2EhXFWzQKetiHBiZ16LYeLGRpt3VPndkbevAahGw1RdEwpMEtLA4HN3uDBxLwPjypnouhYAHa1mNTggbX9DNpQzV",
  "key21": "21v8da8UdyZZEc3AkXVQXi3BFmF9EiKGAAApaYWCgM67Yq7kLwptCPaDfmBUZ2fcFy8esDZA6HatTNCoJPYcXd38",
  "key22": "5aBXDNw6gyi3oTDHphHZmCks2hZwN7s1QTqGWF2a6vgArEVBiWCutFnQU3VBNPP1yRiv3QczWmwbL5AuDgpS9eyA",
  "key23": "2HyVEZ3oyhPpGszcdP6fr8U1R4Y3ZLWR3ik83NCYXQb4GmWrdfPzeaN6bz69TBZepKyFNAYwq3ZqgMG9je9bB1nq",
  "key24": "4C32Vr11ViQ7ZCuw7C4TbPaPVrZAqEMMvYEqVWTm3tzFFVgfVA9XNStbHtg1UsqALv26d67NGRFsvJ9aW1FQjasZ",
  "key25": "3j5pPSNwiBmkQPfzRWs3SHo1NNQg88iQqjw7Zu89GhqdMp1Aft4tQZkPBtvX4Kdb6hNw345kjD8SkWVB3dRzpdv3",
  "key26": "291zhvs7bHTMjgNiXG1TxZQDmSuBRumhebweeUgK2cM5NDGRJD99MwpABt6LHzQ2a84h769fDQDT43V5xF817uAh",
  "key27": "g38o7hnuThRC5GNYFMgWR1mpNVq29vjcxHvYJfN5NLRtXDJRLaY8TbNSDLnuNQuHNM2vXivVx5JhvcTatcxWZvw",
  "key28": "5HWuShdw4Ay4MadJEWjdzYSRrfCbLTVfmnB43bRSq6vwz7LPao2hxosBwx5bfLyh2o8YKKS5rHSmCpgQhUh3dqtP",
  "key29": "2fxb5jDncBEXofeofD5TT8SLyUBi7vpsqoNxTD5RTzGV9n57TUuV3DhMmMQUvftjJet7UJxveVUF7BQUW7sVkmhC",
  "key30": "3XkuZGZHuTUeGgz6xg2R1VN3CPP2N1avWgK29FbXkBJE3QEkyjAq3QQeiQ92aGumvKD8GQttwU3JxrnFNtNmAC62",
  "key31": "Evhp4ERsS8ee4S48gLYjQny5Sio5ta1iLdcEWDyaW86WMNto2griQoLJZzmhe7WbpXXKAmxjZB1cpugJTbqZVXz",
  "key32": "46LJRhF1UPQEV5DH55Jruj8GF9myAVohqXi4iox2FdvXn3SCwS26CAMDrSzj4rvH5EJwMo5FSw4jZEBPv3jUX75V",
  "key33": "bxP1J69NK7zT4QFWzQy9UvXWKHip8kW35CVyxdmqUJa6CWR7fB5La3hVk6HekQM6jFToV1ADnbEbZq2pZNpLbKr",
  "key34": "4zpqdTwDJJKUzEbRThURTyH2i6hiY3MEXvwV1NY78jXfTsg467egWvhyV9vk93SNnd5DZkMJgBWaG2JaAFoottk7",
  "key35": "4925LUpQov6eR9Bpu8Y5Fg2fd212onCB1RmheiqdKomP5JALWYhTVuv6Kk9r3VLfV2GkVDPBtadZnebzDDctXwC7",
  "key36": "25rbKSpWaVHQ3c8GndWvSeyrXKc7eZegYZMqFceag3w8oUeQj3RZFNZwNnWwGyfwK1aYWgW424bW5vauw2Yfu6dk",
  "key37": "5os3AMk134mANpRhovffHwwUiU92vvG1XpjTUdiJicaq4CsRR3qvyokyWeh6xX6xsbtCSj6GGEaMcghxmQJoQbc1",
  "key38": "54h5n3ndxD9kPXr5wt134rwMP6xTKdPXqU6wjkkkNwj9wG38MQP3QuYaMfv1xRXv2PBUM9ES16HDkuM9w5kJd5Xz",
  "key39": "5UnMsWLtS1CwSxDWBDNzTNqYeW6HB8puBEV5itBrycAnwuzx2C59r9pus9V6cA1FtSaqDK2QbijQWWkKJWisxKB4",
  "key40": "4Az2S7khSeJbJfTUa2hvtqdctV6crBm4yMb8Mj6nysTe99Yh5yKU6bWyWi2PtDko6mqvzAzmpoc1opAaQ1xzsfJ5"
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
