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
    "5A4bwyrjAwsah3FB1bJSiyjouonBQNacUh7Y94HUfRCJAVCiU4PHxeV7V6MGQvkeePYVR5vDSzca3hq7h3esKzav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "213UkJ6xTd3RP7x34phyxZ7E3mHEqGwW1de9aaQnG6tKnQ8JKk8GPDQNEChbnmVCi7J7ah2X1pNJRgkxjMZDAhVe",
  "key1": "2g7jEW4CHHCbgortDVrBaVyRE89DJtTyAYcmwK21ugcnjetVAkS1HL9Jb9Kt71UAHNYwKhitiWQ2QKZCYXefEgkh",
  "key2": "5YAt5e6f38jYPprEkJKQc18etVJt4Swu8B6e6HSC8RG7MRCqiPXPrLk2XUw82RiCif35Mk2mh6pVWagtumPZkJGx",
  "key3": "5TviEeddiFXjwopQDdkYzMMTFCQd4Q3VjVLNzhpEidvpKfiJpyb77L67XBnYfU5LAXuDZPY8znQSUkW3oiXwGd9o",
  "key4": "3DPcyCh6LcxzXsybisrSwKZYJ7xNNYDsEpXKUWyWD2hTJWHeTVJTNBuE1LyxQ7kWoXgmo7BwrUMuwPCco3WSccdo",
  "key5": "5T5i1xdwbida9Z7Af1G1fr5dCZimjyqgA9Nris4KtyjSVoDTHNTYKapGC17X1pGkVSbwhbTdnuVPvRyQn1y4HwUC",
  "key6": "4pTmVYm3eDaZ6NiohPz2sz5wE73Jqgxb1XLF5qeAbGCj4ZEByWJgQpMVWyiyVMsvUiS1dcwaE4sxC8ovSksiwNSN",
  "key7": "3BUUeQZBFXBRUVu3uTHTqv1a4LntnDS9aqaXcEDKDRrVPhcdd5gjA9nnWScmhBZMgKRZdZ69JnQQYy1guWPRaA6T",
  "key8": "4DARpDMQKpfUhiQVJ6WgNu7a8936nq2HHYvRX4nk8yePcTCASdiGH2RqUqkA4pZhBYpKba8E7bSvR2T91HQJn8B",
  "key9": "3xDJqjmF3Yx7NBSfgmRLDJBYhod71YZrkWng5k5Dez1W19xJcGct4jGvYKptqBzt8Xssg2o4Kbs23j3eCyNEATQ4",
  "key10": "3R9KHNfC62PbDP67LxtCdJAmQ3rLxHM8aammRd1DxVcvg7G6LXxGJketj9AZg77RhPS5MLjB8ajYLGvrGcnRaHXv",
  "key11": "5RjjFnoU5U8eC7T8Rrbe9eWz2YV8BogV9LqR8hoToTVcDM91jijyyNGYA1rDQaPRNDu3ncdwaB1Gi3bd8Q7wWdZX",
  "key12": "5k5EKLzxxrLppiSknRjCz6ktNhVzmZ2FMWFPudLx5F7BauLfmtQup2YZUTihZriHCZyZqFCRuhTAVwqEEJjDWJF6",
  "key13": "3DSEzCsEKhAvPdnyXnWTDW7ibwYQSDgnYF2HRaVVHsqL8zgXSXCgB7RPxDkswh2PCJDe4h2mnwTe3GefMeHxsbR3",
  "key14": "5T3sEzLrPeNsRN6BUxmctvGnifUsVMCoXBVuGLFiS9fLEBYKStS3qnH8pjACK6CxgDxo7ByAWFmEGwDE7rUwaVy4",
  "key15": "615wTKSf29APWEH6meJTc3GQTx5r4VGnifCQpGjCVHP8At5efZbYxG9zX1g2orGpyY73oQenWswp5GfmPA4rfA8w",
  "key16": "3k9CEF4f2WxSgetXZUMnVFKQsJz8ntD7vKzLmVRPRynL9wia1mCX98kUZWCxyRBB83NqMWW9ZYdmYwZk1BFhNVNW",
  "key17": "32w39sCXGmGfXn18gbsbHuHULBbEBnsqkYD8ZxRQfpgQzgepVdbemgekDHNaqpTadEYyjfRaVgDwGGzDFinvTap6",
  "key18": "aLN24njASLp3BNeKJmaQ3DkF4aXFHp6rJN9NApgHYxuqLgrvnn1AtK4M6HoPaoTLjqPLegt6cnbR79oL6RmKxcQ",
  "key19": "2FxKW6ENFq6PpnYjqg5u8rVt7Kvs451n1QTRu75qqkgagn7M5Hcdtp6GVpFxuQYbQmfKatrQHGSvVZRoXWvMB1ed",
  "key20": "38gqCZybiG5AovnKfwyky8nwtR6GBU2Yj4cZdmrVcfn6cHmdshrZf3ePGi1g1RZNH5Q38Hv4Hk4EWJGPbMm2t67c",
  "key21": "5aPHWkBoSV6wkXacMkz4dXmrdVgkQGgorjyMS8RAtxf3wwTuetBJ6haquoLiGNTZ61k3i8mzidJe8s4EsCyZWf8N",
  "key22": "3JunmuaFB1eQ2HjYW73cDFkxPHeDZi5kRQJyVQ5H9rEyNqvYrnhq7VQ8Mhzif6Pci8jLT2TLnAdhBTuUUSCsKw3w",
  "key23": "4UYx59EUY4JQrBMAtkeU9fZMaeF9acr3qyqHssFXCiHRSmYo6VqSzMdHrDTQPzfxNQa8gREnVEBYq1hXoUerhQkf",
  "key24": "EbU2gvcnd4kd9hio4dRbvN24NSbkncwTpnX7Kn8Gf8cHfTmPoWirCzv398dJ2JhzkjEgUYt5unnnuddbWkMYVHs",
  "key25": "2z4amifqhKxiP8r1Yvs4HwZzAeEvHtm6GDirxmNekBkt3m4P4AkAUWtgFGnaKouzKk5Kzubr24iEd4y213Pmi5ik",
  "key26": "2JtTsoi4n3hGRkUHbAWm5YXkx6GC6P9AjzXMcadWR3ftEP9PUsYfTwUn3Djtv6zowxV8HzGJU3s4NA7i7RGHWieL",
  "key27": "4j1s8UeNbTxxKXkf5iKbdt3tAtSaEvPK74xGuyXAs7Zc1Jcjn3gsHKTDFaFSmnxsqZxv5hR1ytW41AZpdpMN8XFW",
  "key28": "21r84f5d6zzU6NxTvkfMdnewNJQneZhbbXWry5RXHCtAk9H76pAoyMtQZdB7Ld2wub7s6E2NmzouHCCvvrvY5pvX",
  "key29": "4DCHn5hG85P2xUU1rCb2Pc5frVYPoCzHAPQwANunvDxwhuGVfZecAAurhhsJkMEcRFViCiTAEUnXxxh1AgK8wNEB",
  "key30": "5jGE1qaHDFNyRd1iKK4x28YdPE4B5rEvdSuPUudFji6dHWeyDKmQAU7wcc4irJhRKj6f4BKQsXhJ9UjsSQqPyzG",
  "key31": "3tfuzEjcriHsntBUH3AgbBdZZdAcZZVCkmRm7ccWaogqGavDPuZrsY9WyA8MZTveSYp8KZrw2HmbAaJd5BjbaHVn",
  "key32": "54mmZDVvwjxcJDL5Mkvjv8nxKpCnPQYz32vEuQyPZiptCQFxptfdfdPhxt5Ro5pwCQZxWEm5BZiv1U3wp9z8SyE2",
  "key33": "232B7tFXoXuugCgZryawcQBZTBh8nrYn2yJwHeHetKKSDbzv4YPQjhGSdMBZ3dK5Lr33NNdQ8k4iGcisqKNa8kBL",
  "key34": "64Nj6ngJw1iH3MNDA7R7d9HEg1KeZxFDXJmePuAmSXxcF3EYjW7rtHW8cKYwLgajSSEx11tnQJNGg2k8oqrNYNFZ",
  "key35": "cUikQGB96YBLR8ddT8bZNdhbUDF7jiF3PnfH6b82baM4GpEQM4uRT6mJH2iqzkNjYBJhZLTZeaTYWfv8fJjXVWi",
  "key36": "5x3L4yswMtrJSspFre3wtvZrEjX24eWU9cQHLu38yvyDMsEJSehBh4gPnyHTS4TztrcDKSUmT42qRCPaUwXZEmTh"
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
