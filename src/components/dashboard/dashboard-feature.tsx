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
    "4oRmeKj4jJBXfdAsisNBeWgB5t53UBqBwtPxSN7KMmtRa2AVSV6Hbw5qRcX5pQEvGd9aWKZwaS2FenyZb5oBbLor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q5PFTHE53aDZCKkQ5GcpWKW3Hwdc3xTcxSU5qvQU95TJFHqxyVUY9q8yJZPkjPaKijN1tU3rpM5k3PPNKrb3Sj5",
  "key1": "wQr3qjuRPzeE2fxHaiXXXNbCzKcUEGpnhCUfUrcEPtQiKgreNNaFzP4HeTaLDbGPnkKf7yVwVRdMSoXrShcBe9A",
  "key2": "3bdMkaYfkC1TNvhUgyrdsjDYKyySRWzqAR2jjVkWK3mp6oaZTYqoF8DNaWq2aDT6TkUgEqTWuxw2zNqCZuBQrSfC",
  "key3": "4ktrTtrbXh2a6FqqwhRL5TNHVxyqYTWWrcpCxLQYvReJ8SF7DxBYPUQYHUCK9rfYyPbqaDRDVUaAmPvgcacDrdgX",
  "key4": "57CVbSJ7mP6ZoQncLQXyz7XdAMdQhmCo6wdr1phuKeUQ8ZZyoV1r7S66u785tNuVNHnxm78Nd43dM7cByYakvkvb",
  "key5": "E3ti2A4faVz7hPaCB3erkFLoU1KrKkeHi3VAYsveWvNctwvSvuhyS2jBncAGViKUJoFuKxq5cHG9zpuChP2LNTa",
  "key6": "4u7iEMRRTg3uBa2B1p22XVhctvGMQojY3Ke3ys1Zn4vRwvHhZtJeePcRTdypRtARuT74Mzjs4rvopmPKFgUkEtRP",
  "key7": "2D1zLGjA5dmyxmkQpNwtWYoWNC5P9aspgzrChgfWoAf12H9JWg51gzr9N1q4Xii5GcxT35fZ8VMRPS2zucYzmzKd",
  "key8": "5rs5bZFzLLg14zNQShGHmtktaUgDmyDr3UwgGTfGERV3wyn3qKW6JeyPW7auJdSBrYzdp2AreRNv464fSCUfWkfo",
  "key9": "2cYGBAu5BN8ViThCjLvtjKx9WjUQ43dCHidLeR2m8SVm349PFGhjGNJWh6JLBtdtBVGcbBUYjMhAQHLFfR2kBTzC",
  "key10": "HJhSp7bM1VuxaW12eQ5FDMWotnKYGJP84NZDwPUhd3GAUJqWoySGrGN6irtVUxzK4z3hPsptn4JHHCk4GkVkdAT",
  "key11": "2h9pDvdGamJPUYhKYuNYo5JoLxy2EPDWx77YYLJnJzJtLBXK8CdYDgvfuQdure1SvaRJ69yFz8P2rjNvtEiKaaWC",
  "key12": "4DYYN3AHmiU4jnh5cLvqZ2DptBf3fZduisZpF7i7LuCeNX34KpyPdPoGoUDyZ7zD1q7ULMAXRzCC9UL37Zh2Kc8o",
  "key13": "6mXd9PjzYyGrUskAs12yeo3QkqQGGKj6Lejzyz8oejV8RGpQUoK25nuPXfE3jQ2257nJQ9B6e2Hh3Lk8FF2Mekb",
  "key14": "S2PwL5ozSAoFosuNEubab9KcKcq6RSiAYH9TTzGpemJSBWxu2RqpvbRRvpx7UwgNki581gyZruf5a9r3kZXKFKi",
  "key15": "2ag5nXN13a5zoGCuRahXbcWZsbXe6gmyFMnVfMTEgtNnnZAXc8NFrHeeVK8LNzFKiY7miwgCBLaLi1CW5japh3sf",
  "key16": "22vWBAJ9XW9Sbg3z6SvkqBfXVF4sVag5Y88JtB7KVXwQSusRgaADhTa3nCRdr7rbqjaRzXxaDoqFELPzBgytVgMQ",
  "key17": "hRiFjd8zhJLcvDDfYxMhQUQfQzNLfeG3GSbFGpVazQdryN33jGZ23RKa7gRvJrcNMBzUctwYetVcpx9J7S6TYKP",
  "key18": "3PnNin2SgRrs1npAePMR8QqRZdhRt81oXcnZojN3x6C7fxEPxaux9A92iTxirGVEJ6ZdYXDcoRTVCD6P8TvT57cR",
  "key19": "33kSuLsmhT4szSKQNneAUQm6Ye6iLvZN1VcFAnQKWRvNgBDRwAcZ3LAEcVdoRs5snZqHzdqvuHydg7Muobb2ZnmD",
  "key20": "2jcbvswiEfxJG8Dg56o5dPiEJZBUE2BNnzZGi41MDYYqnTtiNjyiZknoX9tGipcuFFd7SEbX93b1reMN2A6Dy4Nh",
  "key21": "5iphoj2cUgjGKa263iAu7NSr3SoQ4sCkiCgAVgvXhxRAD7HkidiijSRMLFzFmVkAycEjsKvny2aPb1bTuJUjMeCk",
  "key22": "2dzJBdmiLh1QFsU3e6tTZBhiZT6VgC8D7aPN9YtfgVHQK1vgFMRBpw6FjeYPtiDYo5zzrYMN2oSvoRcKrez1cVMD",
  "key23": "4fUnykbkVJnvb5S2mGFHFFTyeB7A3MbMYrkDnkHgw8Nb482CXF8iVhz8jNeY4uLdu6Aa6VPeHLNAz7PDM49FAL31",
  "key24": "2KRRUoFkNRg3kooxrDxtggCyrPRh5MKCmTgpBBJij7SsRfR456fuGgmghovQyuk3GbSguwEcmR1FgraKiDkBAjCd",
  "key25": "5bwxH1PHRU668Luh2pEyQaGurvizu5zwAaKhecZPG5oxhEn1HsHX5nQ5HkLTJmM9GFBB4NVQpiSDTTp8MJUVFP9F",
  "key26": "373x9BFM8Lxx9q3q6RyDHgThyXPMyQHKXnFKmX5DUj6pCQj9uSXwh7wc7BCptqNSCt7B16hWJ9qjTnau9xU5Me7b",
  "key27": "452EiZbyqXzzfBMWrwikQJgEGWSFp1VQSDsGBfKwNKHdG3zeMtVJWbFAoUEnUq2Nu9rof3uo44eqRLX6Bk5C48Xv",
  "key28": "64piTkE8fm4oCXWDKe8g5krTnzCNH3yYhJz1tWXnJxRBfePWtek7DVvJJTKcBmTy6JTyVPhFLoG7whTpDoeYp2TE",
  "key29": "2sG3qCjAcbT9g6q9pouNmxUYLAJx52XoFETswkgErWLwRF2rG3JweXgvJJsKvMbrZRYinJLmaeqKQsZEwzPp2hxX",
  "key30": "3LtNQWhDL5YQ9oViEfwF1tFoAKZAoTjqhNCnnDXrw5w9v4pXjPiBCdxi6SUZxSrwejw616WLa77zY2T5S2HBTZZr",
  "key31": "3r73siWRfsBz9CZmvo2CUoq49BtYpSDsZR5coaWnis8uXxSGMBdzpnYrGC2VsbzwtwqmDg2Nht8C8Zmcz6EgTDC5"
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
