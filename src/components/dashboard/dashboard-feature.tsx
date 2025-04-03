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
    "5WuWJSwUZiXxxxTjBdDkAr5r8BDYQPNjyRxnbaYFyecdvLQi4fraLCYUYQX7sKHiNYkBbxBkC2BvNKkWgQcQmGbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g2QBasthfYGyeD4jY1yok82zUweQaW6G7mze4Hc6mP6R8B49Uy9KKWwmyNWKQEDf2FNWYDxCSK7p1HuR2uJou4g",
  "key1": "5Q4BhqAXsZaT8WMGAYA5h1nvU5nD1WYNhZqL3re3SVZwHRs6qmZS7T7xQg77qjXTEf1n2huJpppY9VFbXXyvQWts",
  "key2": "2zJCPTq6LJuKhU4vTVgbAzCN1TKysNTrb5U6z8g2PthJ938JzkAGfZgALXEb9TsEG9nsQ9gHgG1X8Exq8NEnft6J",
  "key3": "55Ca6HSXVJV4VeXnkUsGHkkXNVAcL4FRQnDWgmrryRNVLE55tinH66epNKXrTbDvXAUXxAdEPzEMBdEgKbQsWfWP",
  "key4": "4nCyDVBwYH8yRzv5aiu6FPipdrcFqEPy6ASYvZtMDusAqcFUgn6XeEeZo27mrmESUkRSuc1GgvhTWTbZ6NkpH1st",
  "key5": "2Y6zRZGQzBEpSo7XeqmMFEML9V522Q9gH6F85GEmLRMh9hr5cQpCXS5GihJEWyxZFG6i5c91HuyeAtg1GCNYPxT3",
  "key6": "588252FQ3jKwooG2h4E5qVsJheyiu9emdpKWeNrhDNFYbviwQjNycNRmYYZRZ2VxN7JvtfRck4v7Emxz1gR1KURQ",
  "key7": "5xmd2gVkiK8YQ4Tgsgy4C3Kc7HEAUgxozMfLqQGH38PCGxpJmNNpfFyKbJUo5RfqtEzenuDQUjbYizy8CwTyqLNv",
  "key8": "2u3DqY8N2qDjXZMeLoPdGir2hpWHYr3nHNUBrP92kctiVRPBt1LvjJoWLAFQdANjf4r8NbAGE7uBuxhP9bZxybbe",
  "key9": "FZksMb51hfbAvySqpA7AWU53rr8cikT9zkxhiudpd5U5gvK4nKrMkKPgmk9xCgHiFugjiugqkwoaVGcvDbxnAPc",
  "key10": "3sKiPDxYm36nYUxKJT1eshxZAjEHBYnyjow5H5yKMA9Jhzw9cepRPAJv6rz5wdqj2pxSTbgioF3v64c6p9rQJ2AK",
  "key11": "4CKxEkMcPXg7HQCriaE9vbykRcoZ6pz2prUXNoEHUkXxgXZkNen8UTwbaVpQEN874iMNWyRN4DzdgfkFwc1QqHNr",
  "key12": "4D5NqXktzzskHA63f9HVx8bbnf52Mh9A5Dk41mMHzGs1VCfw2yacGXr1vu57FL9iuKW4NwwMtb8hNc2dxThKH1Vz",
  "key13": "5Qm7GctigHGoBAnAQShyk888TrbvR4dhwVRUPFk9PDR45B6UN9hJjFrZCdG2zmy2nuuCnfuQMQ91JFw46Esfb2iW",
  "key14": "CxiAtXcZrEPhPftvp7EaAxQq8nPczQ2L2VF2hqNTaGKQN2B9543CdXGgi48VdcmcXGdEUSUu7W3oiaSzYDAfBLW",
  "key15": "2MHFVWKJbiTjwoKZMYXvJQffgnKwaL8GsZ9Qe77gqAKyMLrdTrQFgRLgKVqvQUtLUy3CkUerfznSBwjL5avixp4m",
  "key16": "66spxCq4rykd8cT7Cspb6GDSJP1FXcKQLVWJhj6Suix67AtE42fvjx3kYDjDHzom7HmcqBAk4mucf6N5rLHv3koV",
  "key17": "22PSp5ZEgnePu1MXFPQmM3kteQHL6JVqNBF4MMYBMAcNy3WkxArUpkkVTaDjTKbnjkMkgG8SYJEts2cJ4dgCSYew",
  "key18": "4y4rxvywBoAejhS8ShnzL5fqenPbMCQR4oDRuLkkbhDgNTMiBvB832JgS77tP79LnYmJnpAohAEyoNSHZsz3L6QA",
  "key19": "44TFYrbCuP1n3qCmeJWBfS9LnKyqe9eE1ftk6TJq4ckb8VjvJF2mjpEdc9d9wTmVKJKNJi6BWsDmb72kDdpLn3zb",
  "key20": "QTeDAe6Dhj7su8N8qafeoWeYA3kT1paGXWSxos3AbvGW45SRbsCfQ43vEUrgDhracG64K8CTxfpvr9WnM4nrUw7",
  "key21": "4o8jGMk47JTbTDqpoPSdjGt3sruFUzmoet1orSPincj3UvDsKrve9qdHinLQze4Y9gxAVsDwGM4KpRrdRN4yxA2k",
  "key22": "v1EAmgcP4dpzyH1ZNybT1SnGhEAnrztp7KrXDSFgXZQwmZzrjZSjo6AVcXBdq9dgffpdZfbDK8bYNLpvywfFKJc",
  "key23": "5vX5DZq69RQZp8wK8dK7XKwt2k5zjLnaqWiVTyj4zX1CKt8EKjr3HPDQZkVB7egANp5g4mfbT9nReqZ8DTFrdfWq",
  "key24": "3nw4KXgfstZ4xp1PXC5Lsgk6yi7awJwsujyZAFPs1qV4g9hZpSf31a9kDRyRqyuHvH3ie9LY5h4vDjfWtsbocUdR",
  "key25": "3fFWhLniM5x9PhMgyJ95diuCmKdLRdCEVuNmWQ19dXNScZxTp1xtgPoehaPi6UhJQd8bz37oy1uFaa6E9h9v9Z9q",
  "key26": "46RQGDhzhdQfAqs8VaKXikxwq4uQaaa6fkqtucq7MgXPYvw5KirbcVkWt7e98ZwtWwqRx11fko3xHDqVPLoGBowZ",
  "key27": "4ErLEfrMD2uVDMRWk5wXwMvPogGGHPj3U9oyphjpxuAWsSxf4XMxeCy3LSzk6taypzB9bAVJkWKAkuoBVR6fCCE7",
  "key28": "3jRT112TbGKRf2bCGc29SDMGkPDkovkgpyNEohgwzax7DW7LSjiknJx65L9PfqxxUedmYMrB4riZwn22x2YegPPC",
  "key29": "46iSs23WHrHfVkvNNywEEYNDmdEfr6WhGvP2K5dHJGsPajfU46CiVU3EL6FJWxPKiNDXjfjs7ppZdSEsLwFtL5ZA",
  "key30": "3PeiHhAN4JjeDiJF5L5wFDXoKNBUqdF3CdVMXhZ6fhuvxwr2RGJ5LeNoEX5kHQH6yAVUTAQ7MiD55msAfu8QDLC3",
  "key31": "4d7KqNciautfBT2XxN99xVpJvJNfJz6PNNEr3uYANBNbfUGpu81E9137wMp6WQtzDTqNw9YCNXRZiCs48ZZkhQJ3",
  "key32": "2A4JDJwco31o7tx3USS6iBjMoYePSLNj6JrtbKAjttLaXyG1DZvfifh8KUpCwgju47n3AtoqYHYsAMqtLydRmtsM",
  "key33": "4h1EcFixiNUuWRs371r6xHFbNAtEgr29oQe39s4xWmwvXPMXveC3J1V7j7zmatQH4iWs2RX4GpA77eJgDqyGA9A8",
  "key34": "2K3JFzPMPAyrUj4GaeW1jt8gebYwsfTkpPqA3Ltru1pro2fzhDSa7zNqirNkNmATk23qZPY8LcCbZnMjgAePCoG",
  "key35": "5cgTfLg37fVCJsrG9x98eTdsCqkxqoBMYrem21zDZL7gd6xEbujAcWhwQ2CXzXKUxSBjks6qu12UzF2ja6tYSqVU",
  "key36": "23otiYxKCZ85QPGq4oY84eiDBHuQdNsJZMZpaFv9mYJd5bxWLHqHQ3yHGj798fvj6Um63whufXhjckXydViBsvkm",
  "key37": "3najFqUFWsQJ7zQLxQUxNFmewuWveBR6sLQvkb6iw3r9VNJ6Hs3Vg6W3fMp9tdbAS96MiB9RoXUacRQUkZqj9UDx",
  "key38": "3qE2vNTmTH1x6mVVRbWYw84oBrixfafoFNVdXUnVs4BDqBoNmJ6SinHSQRcUiq41faEV3e6Lcg5q4dkn2TJJXoaB",
  "key39": "44HRk3XofCLERxLMFo9WT6Spz3NvaruUMESiNrwjqi7VTcurxf7DK7yFg5hz3RCdpKXPEssxVgmNHc579Exfn8SX",
  "key40": "FnTowZVdsqwBbLk9WgjmasgUxKPygj4Xs9K1BQyJWD3Z95YxQ8J1bmpccsSmWTTbyMFB31D3aZgWDrrmwuJ6Fzk",
  "key41": "4pd2CPaaqGpB8foFKjTVuHvY6mSzAGTcYRtQ6U8e83xCBoxe1f9EoCS4sCMmgscccpC5bQdN2yXg4eZGwoM37S5D",
  "key42": "61qB4iAS4jqEsowqyWt9U51rPVmwqzv3RGVP675BFxUr9DcbHk7C6FTR55ZsXEzY9E3dDnsQXT6WvW61qjRDkL6Q"
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
