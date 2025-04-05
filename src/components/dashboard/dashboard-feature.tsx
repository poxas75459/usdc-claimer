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
    "FNZoD77jc36PC6fk4JpvZwC4Ct3M6zCrG8JtzQFxbWCjkcomnQL3VvS49Rnk7HAPCu2G4khfFEAwiztTjwCuDZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fg4kujqFwQRwmTeXxUDbiaG69A1iXXBA9uyTkzTXBPeqmSHBLYwG7D2yU92sfmrmtkPTM311fqiNpDnRC18qoNe",
  "key1": "4oPZorsbtx9ikZ3RDF2jWZKchKrdJoCgZANJD8AtPVimQ7w2r8LfTRTNRLGnwSMpNNkHD9spd88H2fib3hrWgdfy",
  "key2": "378Q2USWn5L8dbF6ygJALH568znZNamLig5YzpCPh9eTZT2kUxsN5M35peAVBQW2S3p63Vt6m3MVyvRnbGMrWYER",
  "key3": "36ugf3gvqKoRU8UDi2fT8UReEqZzZqEMY5eWex3bTwDxQtyDZD7F1qm6pxDmHvXXKLfbLX2c3c6qmjiSUGDTcPHb",
  "key4": "5VLKeRULgx7yGjQkhz8U2boc1N67XMK546WCNUFJEjN5suPzEBEsMDUMdXuYk7N5ezS9onNACfep42w9gDacZ7S7",
  "key5": "3EHw3eRAZbcJfihbah2rV2j3j68pVJeJnH4j28sHksZWuqRptGphso8VWse7896Y48MXdPMmvADiUgSNhrgWU3cX",
  "key6": "5foxXPUeo8p8v8LLnV89YQ6NSSt3HBQDh8nyhgv4gT4ApJhhdEYJXMQ42qTtMtA1pjghuEqLDU5Ckw8i2FhmUdm2",
  "key7": "21TJTRHTysiLrLVxq1baZiwxdjB7QNFXBAZ7EW4YchWLncKFv8N2euuCqcRN43LZ35nKa4DhV6Jjz1ogW6bfE6mD",
  "key8": "5uXrDzV53epVGMHL6XjP28J93VyxzB8K4dpYf6vyVCRrEiavnse5HUCSwMuhTryw1V2Yb36L1vxTbkTbB9QFYhQY",
  "key9": "3DTLcbhNnahjwq8LYDwHfyLhLsXrfUro6i1s5pj4m8MDF6BJoc3nTNAPTw2DPrSzT1Lc7uYkZuZMVQ8oyUTmQC2P",
  "key10": "2B2JWrsRwmeyy2y83pbKdTVdUEU7QgjTBUDJZzurz7rz6XV95WwGwpGU4EQUNcuqFbZ9XUfJpbNN9QTPkh22DbEH",
  "key11": "64oAXFQ52sjSDxmZZUZZrp1R9K4FYLJ32n1jMbLBs5UXmHktgxfuZcS4YShYV6jks7WrGWBJR5f9MaPQLEfohraq",
  "key12": "AgELXH4yXaiFoAiT3Xdp3E713aE9846fbxrnKpXtDmBTZph6tn75QrZRW1YpNWgDgTBEgTcj9HBeQvkzMK85kNx",
  "key13": "3GGguhheiT4ndYF8GVeB5ZteW962dvQeEpzmgTBCTjoWLAkHAc2H8wg1z6Tftjr7YJFb7rUKnMZSTZb1pRXdUw3Y",
  "key14": "23xA9PYtAgfar6vZwzJ8T1gdTmLpRyeZ7WCK6zNAQURrR6eDy7DonakJVKRJRYoVKGLBFxGUpaQDAFrS6z7wWtzo",
  "key15": "3d3pk39vjbfnCjaRvRq1EaYjRC3TmNR68EyGxSjoVW8UQrNUauRmmipZ7VsEw3k1p2cKTfPhBTcige9fojKT3ZG",
  "key16": "5dHaHxd43VLWwCs8nAcADofHZ3i8E5boCyFL4vikYnh1ATKUUNmN9BziDFBUMSFm2hTjiQXqErvYhdH5NiTZcVDi",
  "key17": "4b55DnRQEJa6YWBVamM9zLXkK2pnFHqFY8eQ43GPyHeg5aa6Q8mK6x7cALwzBVEaDcsKtyC61VLyuTqcW9SwXfHk",
  "key18": "5Hd2aCwgMgVXnTr4Ty8z7WsvBdaLtzVNLcW4HwcDsGM3Fny1m1Dkx2SRm4dWV3iJPNtA4yjgXoadTmwy2jBF9TVq",
  "key19": "5pDZjwMAtf5j8kmjsgegk1Gs1TB4E5K8sbD3PBQ2bXHPRybBeSHWMeNGH5RbLY8nz3mMeorFNCZ61keCxrBUQhdF",
  "key20": "3CZPAihP3wDXHqk7yvRzHdjPuBToDf9javo1EqCu1HFhQzj7TpePpQz2gzCKfzYmiv1gMgEyZYSm8XaxowRG1qq",
  "key21": "5aY6qmntFdDGdhDRQP4TQgn1vPMaqjoKu1PG3RR3AVKY3CRxYnUCoq3vwiEGcs58eGvsmQgmDoe7MJJthV15cvuQ",
  "key22": "2ZdZHfqeYH6ouw5b3zhTdAmyVksKqsmLrCGYNjbyjLEMst5sBh6pQiZgktfndiQ6QRo2KvG17M1XvLQDKr3wRKP",
  "key23": "4UP4uQqYZ2gA6EnyZMFYnAhwbnDFuj8B2cGeJLirzAUK1xG7cje6qAJy2mwQNZMpsdfcHPXrmPLeSkXCDUjgnVYV",
  "key24": "zYoUpupmry3Hm1Z984NPTgS7WB18VuQiKKRCHxzJiEHuZVrXe516NwEQskwV7ttskPTdZ98UTPqWAUPmigZJTuk",
  "key25": "2797TrixGKxYM1s7Juybsv5JXPYtN8QqtVyfdoRN6m5nZneMs62FcvzKKYps6qQ3wGCxeP372G5TjfhukeUDotR2",
  "key26": "3aA9gFrHdqUUH1trjzERcfKpuNDrXpsGA7RRYKouAy56c3dvNYe6HBMJjvne7qB3mz7HiRBx4Eew8iM3gCUrQ4BS",
  "key27": "3TwFUeM3u1KcsBfLWtTSfVKt9UQQEyXuLZPaRp9RXeFkRcPjnUw8Qr7i1PDrfUFWoRzoYa1PQvvk2ohDKKrw9o5a",
  "key28": "2B6D3CgkmR6LAqYgRB5gxChhVKHCTMoXrqTgndFQmNTPPZQoynhPnxNUdMLYAeMSnUMFQkuF7gyU7Eh3fiU9zEDC",
  "key29": "4MzcfV5vwuDydGBZ8MTq4FnDs2yLR4BgpXaiujqedDxhgNbP27uhaB8QvmNefCYZEoAB3jfRFTwhjiSXME4Dp64C",
  "key30": "Tfcjqkq5jPo88CvcFPiJu53t1aj229QZrhXs8Q4kgXwr4iYTmBjRXHgFkuKZecKDJHDY3M2uexc4QTiy7ucTyKz",
  "key31": "5D67W9j75CbwzmPnKb3FBYUjkKCAymm9Yugv527q8Bb8KyBUdQuaekCZY68T9dyaDhizs4eWpy25bp7aFEudaqwZ",
  "key32": "2khR1aqWbVZEUzLExTC6qJvL4P38A3GmYvKQbqKnpHJQjQc6CEk9jQGyn5JGn4foddzcCx4xKAgaV4h2WgbvUp9A",
  "key33": "EzEvMnZhagPMZsEM5hitNvqZ9cuXTbtLuoGS1zDuBCKaPt1j6NdL8xKU5BdBuBQoiLN5vEfb7forKnKNVBjcjry",
  "key34": "3iTvUG1ZrDf1jfTRQB9t7UJs4vpTxS2ibNELqma1VTdVxJwWCoxrwCKnwXEagsz3CXfDk5Nh1JpdidVsw32v9TA6",
  "key35": "x1festgBTVhkbCgxnL4ppaRnXzfq7rQYW6sSHXp87qkjMY7EQ3PedyHiBrCwUe9zkNdaosDYrQtFxQp2HQ159dg"
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
