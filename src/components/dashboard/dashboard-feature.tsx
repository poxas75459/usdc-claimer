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
    "zzBLeuffn2JQTcMaX3FG11EGqFhudfHcWoKXJhsTnX8LLmf9MvhyX3c1h57pcRgShdhkgNDJ6s4sQi8sGT1wZ1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VGVdaPXNVDqA95LY3AVEsNcGPMFvEhnKb6ReAWxMz6UKSkMgSSeNED7ftWVPnb2nvKik5afkhPKvgCgmUtWkMWE",
  "key1": "24gC7f58U969opFZMJ6XavUtRijkyyCfmkUipiMQXe65qHZDxU2aRhXX8eE1gc5vagiUC2ASWR2F7JLo9PTwrfUZ",
  "key2": "4Pe8xsAUYPY3CeHQQuhkrH4sizzQanpdg8m6Z7iDJUV2ZXVaNZmrDNfFiP4f8ukNAgPHjamjLsp4tiD7JVNYmWNo",
  "key3": "2KJdKbmkpaxF1Da5eZDMhroVt9gBsgK4RH5SHYrBUyKXsoWLei7ZRf3an3SYzy8D9kXhcxroupC4n13JurzQwTRa",
  "key4": "5PgKXKuryp1eoDTv4jwD3ipFFa8Af9UyRYDM2wfPm69MreEbKdgeDFxMi1wmEJ8YFPveCVnm3tFAPULCYxfTTMf3",
  "key5": "2YLKE3TNNPPPLUEMFPJN5Epn3gSafGnvgfKBFDskkoNzf1EC4udQW2LzsKNMwjvx2Q2yC7wY6NdwAB6DjupwKggS",
  "key6": "3va7jvbBJcyq2LMpYseGenK9a4CMcBrmAcsX7oaHqYGNzTBKz2nEYoTuEdH2KgyGYmegXzYFxJituityttRLsK3w",
  "key7": "4VshoCXexgXiQYXeigsisiaiD71aNQ1W78krM7B2HNeNJ56YdsYjgAp2jXYVY1sdDiDyFFaJ8sywnPxeBuqVm13X",
  "key8": "2oPw7kxkQHNXJdxEmgYdAE6nVEPLa6zXPcVa3SWEp9x7vySoALZAUKRpPptUuGeEyks89A3ooE9YzbmXRDmy9EME",
  "key9": "53Vw1vudpVYRkR4R2vYgcGxb9bBps9GWTcbE8g3r6JhuVpnSimuK8ny5VUVDWjxg7rbkKQqex6oDF7aif6ucb2np",
  "key10": "383tZma2Ptzzq6e33HUieDLBoBGLZczbPR1pGzvde65cAjZjDuUUQNV1ZVBnP9ccjZRsND79WxyvRaCB3CvGRbVx",
  "key11": "3tz6MDzdKnzWYfvbpufuNq8Rkj6vQKN8R5PHzbNo71GXEpgjN4WiwxfaWejjBJi1fzFHg17WQAGq4ewETyvUs42A",
  "key12": "5X35ZeJmdturMxarYmjB13mxbduFxkeRzofGvQDfa3M7K6tNEaFVhLKC8Duk5L24q2iqC9SCDrRvUxKB9FTbpgCE",
  "key13": "5UWdRqyXUoGJEb8eKb7ZfPrMY7T3i62hLmnZbdpKq6NcNv1x1hgGHErx9f272pzashgMbHqNsLTw3udr5tVQWtCR",
  "key14": "4FY27uNt9GHtK7HTeKvzUsFFAmHx2hz3EUUQE36MbeT9iWKxBKZNLpMPPHqsgUHu1UPuG1RDHtBXBk46WPY9w5HW",
  "key15": "5tBi41r7K7Dp6QUE8akYEXGL68hFzBNVGUA5KvW6mUdvj4XNv4rqU2VUpbpvbiGFHbMMZ5u6SoeerifmoV5bHVfq",
  "key16": "3J3vZ9EwLAHKNvWTWnFoT52VH6QMCUwQp79SqhTXxS3z2VXbrEWPMny9bSn7KvCJp4626BBKXa3QFjGPgS1j3vLq",
  "key17": "5CSEuDZ9dEqQWfZARRD6qNAZgNpcTkpeFN5ZruJnRQNgKiGxYz5yfKKEvu3Kc98X4zPXQBhPxNeRViw5LFJ2yz4b",
  "key18": "5vmTvd9nLasJP59YuVgPQwcaY693XVSa41fJW2zLfEaxcNJPsiE1L6eiHtoFf5BRRWWARZoHJDgiSwR6594ETw7w",
  "key19": "2Wn7FoWJwFpW7FNyemYkLkpjA7S1UwJBYaZ3GN78aEjcf6CVvJqb9P9wQzig98sCQwYvprGhbYvt6XosJCE4bWLA",
  "key20": "2VssnfaUy2BBLEbnuuZjh34VCy159U7np4uQqhcEoP9XYKgToULmwNFpaS92SV81W1DrLPivyvuCKvgtyRwQmvoP",
  "key21": "52PXKAfQXLgAFddf8YRH5tADt6jGDByYFCrvjTHRbQgnqVdDu1QSEVy31tMJ47gu92dTaHhnWo9KkDEo44Pbtmg4",
  "key22": "2bSihLraGYQAUyyNYbJLd9vSEX6itvdvR9pcN5EoinQnjvcUuCS5trGuZaSC2HyCDEtuP1aHGQU8FEsf9R7cE9yC",
  "key23": "2si6R1cpo1BikhnLgdE6cuuDxDXtjecHD7Udxj5Ww3DteTc5KQtcWGTLsKUR8m6cdSDp8RDHzmNnNtYG7fRkoZ2M",
  "key24": "5adieqXF5MRGsXSioMUdpp1eSAxsMVrneah5PNNMxvystBKCHz6vFC4cMF2L1gAcxTU34BBb9Lq4kryEfuM4TMKX",
  "key25": "3cypnBpRuPYRzNsPo9Cs7g3o1ksn9sr7Bxa1ZiT6Bqs5YbZ1bZqZHq7YVx7fg3N42sRf5YdnPgdGjHgpBfkqPKGg",
  "key26": "3Ya3h2pxuXHGdJ1Ti5jVgpk7RMw9Y7L6W4MsvqBTef9ew83XJgLHLA15er7bD39qWc7sUFLrygWhvitHp4fk87ar",
  "key27": "5XYwLWJgwYExbxSZ2BUjnwgJ2KArSFS6cHJKm5MsZzhB9b4RLNT7ZV3r1runYfGXpQeRDd5Apwv65UiBEvp2Tcg2",
  "key28": "5NTFB3H7ZKLTV2kfsXyo3C5absZyvh2N7CE4VUKh6juUdv2zqyCVbbCgLZ3HqUYMFZzjyQsmQAMr7PaENkcX6Swa",
  "key29": "2o3s5yb7y4P7ikLX42G8KhphYGzJfYmhS1mnDmC7c8rX912XbEsNpTe9Gc4d29cM9Gjk1T25LmD3G1A6vrapFpjr",
  "key30": "46526QkFXNq8w3P2xDq5iu7zJWD6vytBM7jv11uHYadUCupFHUuSBNdw9AvXXyxtFtBPich4fcedscgcaCUuNPP5",
  "key31": "5GGfbbQbmGauwC8dMRMVJHMa8Leo2DzWoQd5vq9HpEGvX3WRwDgJxgyncAyqqnx5Jhypic4XgwZHqCaBY82UBVtK",
  "key32": "5rbc84TPTtTy82KgbU3MGYeXhSm8uZug1wVMiJLjC8821cXck6dVMCkN3R8eF9SmuoYCCUv2tAREa1ChSzK6HKMw",
  "key33": "CqpgTqrCGGv8iCZ129SUvTs3UPG2Zbvc7LXodv4tkvDziWSkKEebaKQq4RkFpc6wh8y3kB4KSenQgoopgdEnPqA",
  "key34": "2cFzZs1qRugQ58DyZBbuk2gPJphJbXYR2ADd9jMsB3UdU4tePCuS9Fvk26WvbEtKdCQfWLiZswY6vVPj12LB4A8i",
  "key35": "4NyXcZQLrcjztYZPcYJQUhX4zjZUUS8QrnjZa6qZY7tqj5jc7LDULMs5QMp8n4U4Bx194WqFVK4wT1BtEA5JpUQh",
  "key36": "3LoC33WmSsTJnnXNFUxTRNKJvv4RrX89vTuVhAYFy2eQNPaPhjACb5HAaZTRAMRsnCrsjqptETGCJCThLtjUriTs",
  "key37": "3LhDkr3jdUgjsM2tH4wLAHSrbebx66EwX6dS488goQjKjPTdgWgawRAec1E45ToEm7rf6BqT92rrYmNEWoGt8SxP",
  "key38": "4Bo9Gnc3xxA5vE4tyLzXNTfXnLtiMb9HmdeZdDQyqy3Rs9ViNiowAZR3VD25smJKWC2H4nUXBSEWnLfz14br8wSa"
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
