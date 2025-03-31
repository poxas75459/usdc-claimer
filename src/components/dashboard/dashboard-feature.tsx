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
    "2bMx1dXqZqTnA1X1RN7DptJhL33SuWA4gd8usEtSAiB9XjKGj1e98iH4bJQ24uvVvZ7DgFaYktENPEdZzPuCDxnp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nNVMm4QgJJdHKsBJxdafdceTQxYVaieok8W3vN3iqwFWP95kh7GniUff8KRMzWwkAddUdvkzjWs1cXozaLe9c2G",
  "key1": "3eNQj3BE9L6A4u2CmRsfpKbLW32XqiNgZmgfWURHsPMUzMfErYLtLQ9sV4TLMdbDYoyxRrUCbuJ4LgZ19HMzYC2r",
  "key2": "3ZGqpBRZf7scjkUpda2855h5CFppEXmgUqEtBor7NyeGwc2hcH6Cq5pmEq6uNfbC9Au6ys3NUef6JmTQaXEV36jr",
  "key3": "3hhjHAuyvswecuANZeQycn8mjF3argeF2MgHGUdtHvM4WnmrfYhV16m3qkCobTatSLZVdaDnNFKKE3rysEopZLSV",
  "key4": "3L5vhoLcFCYaEmhwA4GD8g8BPLegaZ2qtwWRURagFaj9e6TBNRpzqysCKAQPBzEt1t6t97i4BFAv8Cp9SExKuKir",
  "key5": "2sAzcZKRA29AL8DtxG4hBwif8nDTcjakb5B92Af8cECusx28qMeFxfsYGw9BpSjmpPc4C8v6EtsbX1Ug4a5NX23r",
  "key6": "5hAU9pKd2XsaREFoRPj9jK3iVNRz21JpQcjsazUs5upJwH6Jzj5qxCw1fMnydn2Fzo9UfG8MLDLvwxNTtu5Kg3BZ",
  "key7": "5nn169RY9sWMZG9AobQpUrDTrM4eXvY5aGPqgyaP8EEpDxg3RRSpGvXNGAZ7fq1AyTd1GZ8dsgBkHd4ZJ6hKeir5",
  "key8": "2wgynC3NGk16xLpd9mS3spQLAm5bUTj7QSxVCbBQHa4m95toQC5S6vmwKZqgNLzBor94HugtW8aVFhADhg7V5mjn",
  "key9": "2kHJo3mV8118BLKZuLkFXJ5zrkKGEs247ocKriuktW55XZ7CJxQZehbJy5C65Tix3RN4mdygU6GhbDnXrYNyVnpR",
  "key10": "4h1ppWMRuL15zZbnCt4eJtuwqiPaC4GvseiRY1S8FZRLAbezQHEz3fwzTXLX7YRzEG4yMuZgvmZEaaUBZahv26he",
  "key11": "44SA2rMqW3L7CPEASJNEa7QHDjo5AGx56w4Jvjv5WeRBiLSb765znPUgaj34AdnRi85RZJnrdWCvcFt7r4ZZgpPd",
  "key12": "2XrW2AgghbfFofYhKm2WKACEjBEtZvAsB42ihf4HVBbAaHCvPxp42z3Vawpcpu6Te2m8nsqwPVjtk2kNQh2Pdvtx",
  "key13": "4x2fR3ztzD8bN7bLjTGMZKD9VH8ceS64kDVM5b6Dy7fqbegoKkfTRwtFhESPEbkmEx4nqmNNz1smfX1BD5o6BqFK",
  "key14": "UZddHMhPWCVPMP2vZ8rFxJEWM1awDfeQ2pFGj3wnoHWUKPBMoffE3pzrPmhdh9sHmW6RQLhGtNNXUveqLuBjdEd",
  "key15": "57XR3HfaxUCDuJLqTaLhDFin9MbtrTVY2CoDgeGLCR9oxXsMwgJ8Se1J2vj85L7dnBm3VknizkMi6fox8tGqGdFH",
  "key16": "64ASLRMpmP2dTK6NboeTGdgTykWvYV5ztZBDP97Sb9v5TxxcKGomTq1aJ9VMSoRaYcHVDeYwckNvbp6BJdsXLZCd",
  "key17": "5E5FMjZJjaPo7sCktmkT8LuocU3UyvcrYhNNfxffaDq9EReSpZRxC2jwxkWwDz5snSke41wga4Vj5dU4LM9gjtaG",
  "key18": "33AtTjiGFWN45TMptRfMJn37HwKqDb315QqopiQhfyY8vnyw8SwrNxasxTyDv3EfX74o9Uf3zwv2by5iMjBiDZ9w",
  "key19": "LNPX2HYFUrvvMyeGSHsW38d3yXXHeF7qM3jRsbreQ34wncjMb7JQaeR73sCeYt81uWc9CciNG3hAcaCFQxS5o2w",
  "key20": "4Jdoiw6vovjvVB5eSAH97oG4QpSJhj8Mk8B1Exfq4s7aueG7HM6XrAdPaKkZTjHgDBL4XTczaUVCt2jjkb69MFg3",
  "key21": "45amT8PiSpoyfmmwxuuWqnGdEJfCuEHH3wjUKfBDp2bqTiLBJEQfycEcSUh4hWdCgCB7TeZZrPMVS7wiauTBVgTe",
  "key22": "2GYRThwh9J5QzwLs7LbxVg6TGFfKd5dAw4J626xeLYTKSTYUZuM5MMmoCyrQBQcajtgWzenET16TxzWxthhprsGU",
  "key23": "5UTvRcPuvHhagcXbi5S3LfyA39MX25UqF9kGRLoYHkbhZKJHt6qXcP8H7ZosERJ744HdV1w4jjjnq7Fm7KJd4EFh",
  "key24": "3YhamCfYzWamisFrC412vvJjG86GKRWpdBSzLwTCj1mF6hFpqdJ8DgR8iU8zoY3nZcAnWax4mETar7hrZPfb9QUf",
  "key25": "38wbCoHoF9VNmkwgr97mZW39VXn3iQ2T1i7PmpaygiRnrNXxJU2FviuYVpVY1Pb8pgJEh4zt6Wm2RND9dCmrS1P7",
  "key26": "2aqP4gEKd1u5UYanfwxGazs46bU2WMvb9NTmzDqHqZCAoUby2x41WKvhjepMHA1tRKNj7FLM1Le6rdBYt4nMeHXN",
  "key27": "2bjvXqUNpbbNf34KHkm2MPcBdhHLWLe7CPR23YFd2YcNaTZn8YApdbWiwCgBq9wtzAp8bTp2MqpqfLAXq5asYPgE",
  "key28": "kZuD6D8o6qyZtzPEpCRRwCQcrBaKkj14RFe3W1JVrYE6mdrQGQqUNxKNuERDonZj2b12bnyToTyG78bh5dbZe7o",
  "key29": "4D6cFpQFP22XRo7Dti9aH3e2KrY3AvjNcoUvVD7Jr3ULAd594hskhzmmugnC6Srp7Fe645WLnrAHf7MwUz6dWTJk",
  "key30": "3Y7iDH1zDqm3miGXghhtokHkctJpvpmRqjRNgdeRUqxKSq8xLwxqAXXDAgZM7wTFLM3YFRFeKMispk4fCcRa3zFD",
  "key31": "2V6sJ9F1phULCgfQ3vhouAZraJJ6ne3uZNVnSgmSPmBk1uPxTSh7wXfNrBT5RAp7LJNmMGXpjHJPYkXQNahVJAw4"
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
