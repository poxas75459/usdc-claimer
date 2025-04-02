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
    "4SMJQSfyt8TVNnN8Djgy67ygaGp798xzCGmiDuE18s1ujr1vRxj3Df6fBjGedHUSWqn23rux41xaRfDPRbZuborQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GEn5kmRpy19hsAxX2ux4YCc3wQf2ZX8Ja4QM4RjfGr1fNN4S7j1qRJVKAWgdUvZQwx2x2xSK9K7AJEoMNhEjWSN",
  "key1": "VCRW3qnqwThExTRzg8gbHLqBvJwW6ivruckVAtLEYmKzsRtgVw2Mj9u1fqE62ND2SnSDpQmSzSdwkBcE14hpGZj",
  "key2": "3azy3g6AS3BUZ6Uq6D9kAtg2RM26kEK356SDy6ioNWT3UhJEBRBCmxCoEE9JUY1yKK2PurVrENZHo17mvhaYHui1",
  "key3": "2mBVPhZmzePTDQZd1F5xV4ATJfBjmP2Ayxr3msAi5EUzX8JhqxZFXGcuxeP3YVikgZ1KYKaYWDGWK7JVMZoQm1ec",
  "key4": "3L2b9ooo4LP9VVzwcMRdPN7tdDaDCaZefyeWaK5DV7jP3LcuF1fiKtxrRKooXcULfCb2bnbYwWnPn7Xon6eRkbK2",
  "key5": "3HQPtSNAWbPnpnMUf5q8qMZriuxAspSDXjrhs4DQd55XEX3DtFd4DZeHg6QaH7sTVvt68whXEHV47fK5YGPzDW2q",
  "key6": "2M15QyEVpVgBCXeDrg6RTA89hVYG5mpZU4pNURQ1vYKnf96hGFwFbkYry9xymS21u1QKpSWqPiyQN296jiatrBgX",
  "key7": "47sYWpAYseBTXeqwHUF1zCkgLet5Vn9Mxyvtn1xgFbGVb6vTPfCufz8C2i9o9ntJw14XthdAR9QxGDY3vaXWEcNM",
  "key8": "36Juv521Aajr74H5z4seBEY4Zssha4BMAaRRmYKXkMThXmBeWauraRbBXcKBcK9k8HLvMFQmc6iQosUYBbHccJyN",
  "key9": "3t6wumRBoHWRNtcQbGVJmT2cYnnQAg7TVUQdMBatXY9E4XqEMCf4e4q2duxrzqQf9JDVp89QjPUAXYNBfK4fFYrc",
  "key10": "4mDPqUKde32wXbjudYZfTPWyYRF1EQNQeD63nW246UqZXm2o8NEVTNR4C2mkWBD8NAoTrLiEKQqVcRQ1McyGVwrD",
  "key11": "yTo79fWeMjBeGQzkXM78ZLySMn4ifo8mtRwKFA8q9eZkaWtXXp3iFtvnceHBaMJjiyGYCLueY6dpf65osaVCxpg",
  "key12": "3ivTqnZ4JtjR6QhZPCBnKd5FtUTSkbA9HZTJBwfq3WQT7P8e2rHUo4vEDGG6CuPZvxeMMoMRPoSMVMXt1bNn27T3",
  "key13": "35WwGgkFqmkxk6Xcmt6Gi7yShDzu9p8LQyqhyDwkXRFo3zN5D9gqCwNNWxeCTdRq47vbRXtAzmLB6hnVnMgw15Tv",
  "key14": "5kHBZ69geixN189DvqcNKkrCXyhLtkkK9BpYN3TumbmgFD5cSiq2wNyc6aFx8AGWt81J6F4n2Ejx3Mpr8GdBtBb5",
  "key15": "5ibYJHaifnfLLkRALHdjtjX9PRjvJCBbpCTnNJg4EiW8AaNrRGcyHHMPQ67vP1RqjKjwav2GEVJ5UUuPuVwKLo7g",
  "key16": "bEHQM5e34yXzARKxy9q4E6kwXbw5dpr9sD4ZtPvd1ZCExpAKLSXdscJ1CuZuQABZeN2Wu8TXhaP5tRMHT81eDaQ",
  "key17": "B2owSzwsirKRt3kzNPQfNVhxXmfYXSu9V9VZGxT9Z6hm1oumVjndhCS7q6Hzwp2AKfWScTuqBE6kNLo4muEojTu",
  "key18": "3s8qm9FT2PyvfqzHNDu3EB7MUQq3cAod8L7LYMX9xxZQARFmSA3T6YsUsfnkCMCHY2DGcG96cm4iVPTTrgvKYvjN",
  "key19": "54khjf26FEUaKRLNmJBdEx7B8GFJiPWeUJaCXqVuJFvSAGYCVygk3ose2VTDfiWCCGatJnQxj44nJRYMphz2X8Yb",
  "key20": "XGvXzjVL9ooH9bXQASxGo85mmKK8Po9xC2Up4XWpakaPKW7SuSWzvBxVTjDXtNvbtNfFeWgLhEmPkY1AxtEn1b4",
  "key21": "7heBCEXSRu6ZcPQ6T2CgWtGSYEt2cKKTMe4GN3KGa4wM1J4LAMUFKpmrwwHJ3XewZaF6fSUb6sgGdDNq8gzMtmB",
  "key22": "5vQj7b6cVQNNyeXadm9tcrDwGKFBexqw4kkuXisLwxfCi41koBgYGoPF4JD9PSGm4UMADjZ2Rm1o4khPe5w5Zn8J",
  "key23": "5qTVjoe3dbyK2vF5WzY9hsuL8bQBhKT2JTKynFgZyMuNRUqnLTkJE6THfbBYaxfHLLiAigsB83Q5bHGzkutAqnq8",
  "key24": "3qLuoZcibvGShVpmKtpMtDuzWcSBfsVkWg9Zq23VQEessjAshzETXvd4ifRyZvX7BKjodZJ51VdpUxmry4cddMKL",
  "key25": "4MEvGJSS8ksFzkaSCFBeT7u8d2xqzwULkoQGVfS83J4X3hhFeTKhL9JD4BdwmN3BjsFXQUjQfvDmXTbYuH7UQ58s",
  "key26": "9eatP2NQVJX1qg58VZeqZeh2CMu2r7fydmSJH1umEjFMpDDgbr1j4FSx3a16r4wsznvr7LtytxkmraPBPiFeU9G",
  "key27": "5ricKtGbkjjjwnxnqqrbeizZwBS8xtiBFdUnqWcx92rgXVjUenSC7sxQHPvy3mpCnMgadVNUdqZq26v3akaBqHX5",
  "key28": "2pf1ybjTap8cF6ny2UL1NEpZzCAPVQUXesFJ1QzPDWGWbaZ4kgYJojpuW5uw7oEhuTNMGJZMavBAx6YKc29pJAJf",
  "key29": "Wsyv8hBp5dvYSruEvyn7dkwje6Z6YprE2o33hiWmPzjr9L1pKm73s7uiFWaDUN7s6aXV76HfxMVfoguVqaQapYL",
  "key30": "5eW4cE3t4ZGQtMKRrrnHHbJ9SgJ1gTQfLHDYxk45GKtSa9vaCU1KAWH82w2GaX1z6kB28SCTvfsBLaqKc6wnj2td",
  "key31": "5s28WW6Dw7Gyy6eXLGB4oJbZ19QfYxZ6xqG2JwFq86gZjW9ZmL1w3NDyacaU5qaJ4SvESQ5PvXJGyvxLbn55PKYi",
  "key32": "4bYHv3bdtQcFe2eraitmJy5e6MnJ4NFr8xgsxQs3eMNnXifRXq6unwTmVe9B4x6ADcZgXDQ4ALTwtZAwuawwpRxi",
  "key33": "hVq25VRxFRm2CqEvDCbYMn8QkZbfN3nTC7ddEa2LfrYWaCUq8ri3YSMcAEndqfgRwYG8ngKvYyqdmtQgzMGFmxq",
  "key34": "5jPjAzgCmH4FnPf8TW8JAPjtZyPxCHZe6zNa4qF9CAdxtPCxjCwWPtn6GCSabrxWTyRHj2fqooRDnRbRqk6jRXpY",
  "key35": "5N2Wnz99uefoCWRZYGaJzRfLRNY1d3KeKj3AyUwvLves1ejSq29jVEHGpywdG7oViJN8bWpieD7GuiJY1qS7BS2n",
  "key36": "3DZxLkfumwZL7EgFenyKNk6PfRteL3pemBk1ZoaMcaURQChBfgy51z4PnoFLHdc7fv6T3MTP5MTh5txMSUHocrgC",
  "key37": "5s8oove5FLuMoP6HoeaxfNy3VyMHkEoJU6jdPe86ySWXKo7nh5qyEfpZDegoimEz6vftJcZQc8qcP51PHEEtUhjn",
  "key38": "G8hXhXyy4PKQBQgEowM7F3TLY7RDhcVMmrToYv39JdkchiE5wsw5Qhq1SLdyxKgx4jKuncfDDDzgTm2YsVfPDuS",
  "key39": "4GMfpojGTLQAdscVdCk2bWnFUQLw671DmJDdwxWbYHWaBHkhEXdsB7ZeHTMW5pCHQafcioHjjGY7Af1p3TSkJSAm",
  "key40": "2YGHcVi2rYFU8mBBfo5eGfG5Lnf6SAsvhC5J7NKackQRQYhW5oZiuEisQpmsFcZNfeSztqPe6VfKHJ9YaT3bSfod",
  "key41": "23RFcBFQbsoZQT7DtZXdaTPuMh66okoxkzowAd7Q2AdjHpZQ5b1umfukUpUK4GdHPEAWeenkMQFgF6yZuEhLZuxM"
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
