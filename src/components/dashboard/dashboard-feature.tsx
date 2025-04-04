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
    "4mK5KsMrRM8Ux413ABydz8GufeCRegEYgjGDBDoRCfBU8KRrfGHr9ArCFf63283Btacpp3wBc161ajAEtTV3jfv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i2PowfeXkghubkjoYnw2oDnBoBf6ehvH9auhzJn9qZgLDvEZoiq8WRYFfECrKTfLDod3sjPGopn4b4uA7FnmBHV",
  "key1": "Zy8iutTKWGhMA9WBBDDyZAZSxsPCTLXaEYRusVEyoBNs9iVD1D8YQmtP5URwvfRfK9SvXk8D1TDqoaJarp3zZAw",
  "key2": "4x5a5cQSjQR43i7nAwEPY8QoyvCmFvAuXbPyXL6G4wbhoSP9Q12YGQ7K7HbV27pZn9NPsQwf7tWw7RNw4aRVi5A8",
  "key3": "5LsaRb7gheLRdeYCwkvikxHHhgXzpmeyjmAiiMercqzt9hYqe6FbT4nyLBPVHuAfmG9okBLzDBf9kGYU6diunnPG",
  "key4": "2PzbmUeWqGpjuNZqrRJmcS8ryKcd8snwmMmXWhTAFFdAoLFTXMLtUEQYZHBu5qqmfuPgk2aVJxTqx5dCEUjERXGH",
  "key5": "3F68TeSpDBnbcmtYGxcHJ2QzqzBPnynKrdpaLLB5cMAAxM7Qo6KpyBsyTgyGtGfsLnxvcasM2C3AjyQQyhmsBE1v",
  "key6": "AexktxjrHQ3HivwRqeDrozywEtZZWLudV82zwqehX6UpyrFV3FXARTsgGXQJWzKv4ZTLoqnv4uDZYPkevkZddzC",
  "key7": "3MEXK1gRk1C3c6o5hu3zzKTMdRNm7Rcvx8gXwy9kkGKvaEE8WW7XvkLaPhRTGtpwsh9AXtX5SGU6d6wsDZMfNat8",
  "key8": "51aaC7oSmC82LWUYMiPjjanpxtkH9DpXfz1RVFNXkXJkicYvezWtYkw2bgWb9G3UMqMqCA27x2RaLxGtVMPrnexQ",
  "key9": "4AkSZHR98hcbCvrbM9CmfRPJFXkaHJBMihaeePQbuJqftAptqEyamkg6fwbmQUP52Bp2gxNYMGTHJGmqvef5ebbz",
  "key10": "5oTU75YT3Qa8YrnxYXdjfEUEvH6NzS5q2L1SVEcmepZqYSkD55F7prJWXpUx9KrRPUyDWqvvK3cwnfwXv4bCBkPd",
  "key11": "3ssvachXH25nDYNefhzNvMiDFfdKWyQV8sjxfuNSHmpw3pvefVsEWvaFaMD7CHAiGc12wR2zjtuebTVNkBctya3s",
  "key12": "2RSwrw8bbMwpjKmCHAp9BcgESYDY7CFhw98G2qa56exz8oiYiTdoZPhWcoGKV3YyCdSymUq8nvqKypXAT5n74aL2",
  "key13": "4y8ij38XYNQc1C8KMEEUR3ZXJAus4nuVZAoasfqDySLcwcqGBLZMeGe1BRNyQ8wsWc54i4fKWXtDnDRYqewWLkPa",
  "key14": "xpaTGdhudzZ4eodUK3sPESRGE538ErDFTpjjmHbsTgnRLdtHkQVDAWQzV4yQS3kQyiT5kAdGp6B1UaDYjDQCvxr",
  "key15": "5cYouoRyKDGCU7MXBp1UhfSUsTgAhrbsnTWKUwqgZBB7WsoLs8TydGSXt8pWxG9VhL5NAAtLm2u9jj3Hb1BQzkiR",
  "key16": "4UF2mUqEBfNH4VoCiFs8GSossXHtBZeE6hAgQmNCQSJuqQLbDCFSQjP4nPz1gNimrgyktFnCgKaT9XmobjRuq7TF",
  "key17": "5ZsKYBTxhCMoggpQ5R4Q7tPbTAS749B6hrtRKH21KVhD4yC1GabKeymzRShPPZ14rrSzuCsZieGasL9WymQYyEek",
  "key18": "3vTAvjqnHapnyGz4AfWToZvkFDK5RHEzCP5XWdWoM5EeR2SsbSCrMvKw5xykh7ypRFgo8wWrgmGSh6MEahFXywpQ",
  "key19": "5uG5hoVxc6LULoVEnJGdktUKxH482oPkZ1umcQkHnBKnL4V4bpuYbBpe4D9cxk3zDcxuKD9KUnp9EDUFZHqe3UqT",
  "key20": "31qi8JUh7icgN85PUrrhqwBdWeYNmrAmqBns3LoXJ6jooAmtwYosyxJDbrcSXfWRJJBcMgvMW1vguhHo8cQBzyGF",
  "key21": "4yFw7VD72LWxs3N2wJ1wEdGpvV4VcZCQijKKoPmQPDckZRtATtGcND4q3z8F3Vh14Gbs28eEKTCb7WiDjTYgQth2",
  "key22": "XF2SFA6epdx6GA3HvuAmevkHneeup6RkfNirWKgHrFeQKYTCG8t2kRv4EBXdGVmwznLzEqeYvyRjuSvH9N5DZoo",
  "key23": "4YqfqjixJn1vmQCKhNGzPjVNANkyuv38jHgynrHr48DugT2vzvxQHKS2VsMdudftYBwsca5m1nLiBPD3dNtYMdhh",
  "key24": "5e4W58RimiU2zt88xkQUDDBJp4hi1yWsCCNxZRKj88mWhTD5TgDQXtcp8XFZKvShQVKi5bQQB73TpeJrirx6AdPW",
  "key25": "9zXBKb2DVrFhUhLxxjAwQoaEe64xzAcM4FppkjQRci5CCw9Y5XUSfumHbq9NV5u9nQ63CBuTej7684hfrimmEqX",
  "key26": "Vdo2MeY8YKvVLxCNJ98Q1aJMh8q7TF9jFyuCddfbjg4T7Sg74mMFzugRz7ZWJVPJs1FRyixf7AjwrJTDpXTZWyN",
  "key27": "3utJ2iYbPwsC9xMnyGsgdAUaHmyUiJpepUS78JrQCTwEona2UhGs8LEnVNDocJ6RUEMz3H3jSw8oHeA5LEgdhnwY",
  "key28": "PoXJqtj6Ae8aMQFzbjWZQqvCcp2hqfYJ14FZUaj5tMduzx3PGeCMCN31F1CV6Gmbbv3xwfbdQEzv923gLUDheHw",
  "key29": "5axkspC4NGHbbtd3qbT8T14DVGzsVJsaPRFwhc3SstXH2HTUERYh12vb8s8jnX9QVyGrusNJG3dEmz3t2zWfLMxc",
  "key30": "3nrqT2X5m92Yr1WdUgwqFXnvhiM7NbiBumXgKep9KPnAu7QYmWposMxFedjBN7ntjbqfDC8adU3LS6RDjhqhSaS",
  "key31": "KeEGXDn9mcndxV8HxTWxq3eWfih2jJgNSrxMCvn2w1AfpXkBwsznbCKEcCJbnNzFUbS8r7NbkscTJtyAkzaiLeb",
  "key32": "4UgesQ4XCrqhWSfkR1ySuGADcKACdJF8ZCPpgoqRQo13c5QCBacjtjQg3UhUAuQyofjQyVnqAnQ41dYTjYcrhVVF",
  "key33": "2abitexRNdnHAKfgD4vPBMyWSAMQ4JvBTNGVdUwDY31778QBBXYsYAR4KUVgFyzXUZ94xZZq1QxtCvpK8i7vYJLB",
  "key34": "4s7MZ5AWRmgrVnspcfFHx5GuDuqMZdF7SNocXpVFk1gXwYx1jqN8iawxecMEmfiPRmoEqosspsrgHMyeMHWuaWk",
  "key35": "2e8fgQhjJWeNPGLftH6heLJw87WcT8symYoJeaHGQjuJjcJ4jEffMJuSjMN5uvwc5s6eyp55jEhsF5FDZgXMaWSX",
  "key36": "5ruUTrdD3FzvMHoPkdiKv2qQ2ZGW8FRXDvCBYxBoaErm2BvqAszXxByM7V1PThcx3vH8iM9LHZtpQ9nQRUvgoV5Z",
  "key37": "3dCKwHETuCW8q2jsQuZctNfKNvFXExzNn1xfS4W26zbDEeZhnp1bTUG9YghH7qHdwop7hi7BDMfPixwnhJUGaWTw",
  "key38": "2Ex8fFEjZ5QGLiuLxHitVAdEKbuoDzBzDHiEGkKM4Ww2vBJhoRnR82193M4Fm2hNEEsimAdQYt9UwF9pLo34kybL",
  "key39": "3VQpfkdb5JWzXqRHp9Sssrh7ytnLwR9w5xQgLg6SxZYFt7a3ivEuaCaajjn5RVjoSHkkBP23ZToFzhxpTVV6z1s1",
  "key40": "3tQktQ4pjtysqPH3WyrCqUJCEADD8J5BYnteTeBNwrcJoPtVVB67SH7iVHgttVX4vwPYQ3rYZbbVzmYW7ii2KrNp",
  "key41": "7i9bGkwC5ih7VC6R4R1aA2456Pxh9m2q33hqGFo87ERhaDjiqmKDKivTBKPWqrrYtbmExVXpdD96r9FyAZUpCbS"
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
