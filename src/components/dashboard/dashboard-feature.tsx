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
    "62NXJAw5p3eaWMGW7YPKNgGciChcaYfHFgvyQjVp4ziqWSPgLdV1HvvmWx7wtMp1EGWk8hjBTUnWpsV4Fo9tYMWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e9WcbizwvoVXkTd1eFQVQeFt8tebPZtuJQKBcDomZxAHDMcTGqySayThcuD73wBY7GRLznxs7bEef4i1Mf7ep1t",
  "key1": "UgmqLCpWG6kr21PaYVPhwxitioNhj7cGGEQg9GuE8Hd1GjsxKkGqa1chnbVjHVbuGUAh2SZ6J7fnydzykQDv29Z",
  "key2": "48duWRxp3DvdhvM9GYiiiAp4KZ8svPd4BqEjNLAT5xar2dcGzZ59VNoDwTW6dPDNN8CSSfvkb1cd1z5igm8cZ83u",
  "key3": "sTgZARTYz9jcEPgiKY82yHQkqfpYdGwBZSPMxCtjKhBNRNgUFyCUypxEDp6ScvcshkGwATk77YrpVVKyNvsLrvC",
  "key4": "xBB1GEaXXpPoxNwYHXGsHz3MZvqFeCDoqakvNdeRa8xGa9uzUsDT3Z1zwa96CoSTh5BK8zgN4UQVNk7iy9BhEUm",
  "key5": "4sGLpbvWx71VNbVemBKbJZ2vv2JzGspWqpd1ZKvg4UVeLrRYZFpD2vvJBapGLfdS6H8TW9Qyigh4txMfD2XJLCzU",
  "key6": "4QRGMLdnP6mcpXR5cexzdXi5gb1mwtyjS5fiEAViU66vgv2fPGT616DXxB5tinp3d5bTLXPydhbiJcoKCvUydF8L",
  "key7": "2kfrZu4vGC83Xvq2L49MQBy9zDuAYB1EcXKD7G1T7vcwty2PvCLv5nSUf4v6wykVB1aYqqEAjJ5h7R6NKu9jePcs",
  "key8": "3uSsWjJ99Hpk5ZUKDgZHx5bHdCuS9jnSQ7fVF49Z7dNyWWAjdodqnH2VhhLkBVLn15uo8J49RXH2Gwh2xQ6whkJU",
  "key9": "3NJtNuX218vLCCHkb28eWNWRYTxaH2LRu1bsMCiSyQdfS6wYurbx1tFRKswQVSMB82eAJVkG8ocx2N2i6y1FnZGY",
  "key10": "2Vd8eoJbCBRGpc7LcuJrCQWXkmuDwQJx9zcoBwdhbMcHNDkv5zpPeNzNhzH1s3f9FhgEKoF3evWTg5FHX8h6ztAd",
  "key11": "E6pER42mUQk9v3niLrjvvzgHMXH18JaH8Sh1ysbKmAt5pwj4zkqWTXiqCDd7yKR2n8iqB6hrDzpuiTzokRpPjEH",
  "key12": "2Z5VTW8Cw9gEEuKCSzRVaSgHRyhPkNCwHzEGPzpdWuSFfh5k7o3WgSPzNX6BV8bW6Lx1d5YF7yCSgooftGg9V56c",
  "key13": "2zRd8KT3vQCEGRYJK5CD5qJGnSM2gvgbk35ZPbigxC9MAgr2KKSmfHLxa17XC8hbBZzgd5arMdUygBUQLJCAwvWa",
  "key14": "21GMyg7RF5GCys25ZHxbZrHnhjxrMB4eBfhTj9fZmiUrHP1N3GoAaTrPY9iiVD6HBvPzdah7qgYNYVkudfv67oxp",
  "key15": "5uZxxgyMYQCB77aQVDWmxSZETgvv4z7oLVJdC4dYHJ7vkY1b9VqBqozHFBjFJR2WyiE7xYdsQRRV44m3RKC7jVp1",
  "key16": "2adCDrdZQAVMtpuSo34RCzztPJzTn4Aw146fXGmyvXWNPDBbFAg7nAmrdKfhmdNa8TryJtyoQEWbHXSGnB33Jeh",
  "key17": "47Nyh7oTSwwpJaNBtChBCxZkNjbSZPEniAEwoaZQ9tzJxPurZdimS8LD2tj7SueGqq1cNrWjkZNtHSL78hbccvoe",
  "key18": "3WPCqhQdSbLia9DVVPDNUL4WPKTSELSon7QJ4XPn2i6a4rcNh1i2Usf4UgZ4hEefUTpsMsCeauxBFzt5JD4xw2Jr",
  "key19": "64LPqSUc5TztB6WAS97QKXdS8GZvfqM3MwwytYGLHgHSNyw82f3C7F5B4fj5KRPUFR7jvoALXAdJD3qq3xhAKjuE",
  "key20": "3Bi5BhxBAjNmrvMrwT6Fj5XgHuPVhMtMqZakkid5gzhMHPpAdDgjRa7ATcGTfV9mm2rb4J6DVVstD9YUiQj9pLsK",
  "key21": "QyRDPoFJzFQXN84A7rSQ9FXjgpdWNhCaDd2KV6DfBdqrtfKXP6VBAZC5WhLqcaX1aUuxKToLftPnWY4c1HJ4gP7",
  "key22": "QQUMSRrEFbRDWZjkYeEaNXWP4myn4HfvEucnPUPrnVHu74Sh25S8nBfNdQWWGwFz7GdWfZKnzERe3nFs2sEx395",
  "key23": "2LLAdvS2Ms8xhu5KaUnhJ2YHh7i62VzHBjy6v1H9komCjXnHWQaimGaLZcXKhjunn2WP6cdzCwWhXPDZGnTTjmdV",
  "key24": "5gPC6EHpYDgsMnpQxMwyFizCUqCJMrdPsESFaVDA7tLv21rtrgyKn6RjZ6e5xf7g4a4jZ6ZDU1Y42CKWoGnfRtfG",
  "key25": "2UhQPJryCdca3Wg9AtZB98UvNEcLnikR9fvEASNbaC3JR8tinJnCJ4fGqtEKEkQ9hPjcqh4gTRn8KUdwPfgpFcFZ",
  "key26": "4pUEgLhr8NKukWFDMtexwAaDtL8gUTo5KgpdfqZFU1x2vVVNG6w7FL46c4UGSEyhN4kNJqYBKMXC2afvxLVGgqes",
  "key27": "3BH7o18rZrsYmguJm8u5DAbLYM8895vdYQawVMALjFuaej5sRwQhVW7x6UCBJxpYJjunhGzSbwEu3mP8yV7Ejt8c",
  "key28": "3qC6GscWUN3Bq7dKoGk4rELkJSrZRkv1q8XQpvmwqBibfqPdz6WJZ3dGQrVFdsuTxEGyMCYjdYfmAUnx46HqZXdK",
  "key29": "2WnyRzMMohYVtnBRYKvgSLkgGVFh1oakZiYtEBAWQ4MZ9Cippbr8HW6vbY4jkZrXBEoUFA8x3NoUjqnaho2SFLr2",
  "key30": "5FsW7zxCqvCqhg3ECqkAb7DPoB6Q1b1m2UXvUPPtTiYFoKMKoCo4WttRoQY2gLZnqEaqKcjbWAPu1H98vSK9EeBf",
  "key31": "5fXS6RGcraWfXyQT1WCHBaEFzTUEcwZeEkvqQcaMK6zSMZ8TirgSD4ji6qJ9NHKfFx6MRFAB1bSr7nmXNzpVBVMk"
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
