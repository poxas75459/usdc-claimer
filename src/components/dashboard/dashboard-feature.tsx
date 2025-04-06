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
    "LkV8gTmcFCcSkqDawtwwrv7CdGkazB4uNj34eXHzokn51yL2RHuMtVJhm722s2Zawxo1DWUysb2HeDYLP9vrhYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59zYbDRKSQ7HBXj7GGs8Za7ec5qEzrRdg7d12grhqJNUBurbGjXyaeE9YBZEsDNYoh5KXancSymB9d6TjAWFgRBx",
  "key1": "iL4vQsHq6yAX6X7mzwzNYAApJ65qA2ht38WFzDaS8EmnSLwhQ3fd7vaYRWMpJNsUs4GwNpVzBMeVPinaRDeQhPR",
  "key2": "4hQvH9WNnjhg5QZkJkDw6Xq6tU1HkAqxubEamwyDivxX3JyJ9KrfRzt1WYUAkoX8M56w5HNiTNfpdtJt2vXuhR3u",
  "key3": "3UR8MZPyDjLrZsn65NGXefsv4nHgAxNhPeeH8cntFbscTqvouQEu65B4KXLzxFj8jn7q8N9msvmU7y9xXv1fHxWW",
  "key4": "4EF4RA71ecSY1Vo3b2uMjEq2j3jgN6ehwHhpyhE4MNJzg6RMGnNYaiuPD2rAZfuoM3PXSMo7nYy5cSyoZofbEnxC",
  "key5": "4o9oCowDmTJQAsArfxX4dwTdRhiUYvYiYn7LaEskirfdDvR15uiHngvQMr4Q1LK2wqZYKXUtYnbzXjgRGzHK2tea",
  "key6": "3nPtxT171rbKQWMnVVPLAvucLxdKwK94ByFNXjyECdpvCmqswFU4tZFtaPJiKMQfVyisVSKNZUepPhVrU7j5o4U2",
  "key7": "5wZJrXaevwYaZPdFnVaPpXdvtWmphkAQVh5C2RVTiLdxvEVZZdvoBocVNFSsLSAuGwXeTsTCP5j1oj3WzQv512L1",
  "key8": "Cp87vdewrFhH5wZn1wN5EcxyBFg5WrQYwQQXhYG9ihUeXEt4Bv2W4fUEtJ63o1d7KfxdwCrG6i984pwZQQfKtGd",
  "key9": "39zPfLqdTUnNzYHRRSf6EZ9kdMjHztDXNxvQ3P8FFBMDeXooVEipbQeScdx8GCbGUKDFzdXmu1mdo3Yo9GZQrzpS",
  "key10": "5BHTBqPMFKz3G55kjWbXAp1Ar7HgbTx7GXSQk2aGsD1TQMsri6f9PTXdrDgmrDyvuKPW71F65kNKBYe7GTrSWGF",
  "key11": "2QnUcosRPayJVv4iGHZTGKBufDrmNVAa2Bo8C2CtyHyG9DZ7spbFb21rGhvqh3ewM6e8gnNVzVFUqbqFsUHxnFoE",
  "key12": "3o2YB7nfxVb4ZiNc8SJXaSQEWjWfLrBDUTwGiN5wJ7bZQCLuv3PZfMKpod6sJpFb15etDzUL2ENFmHwmbHwoXYp8",
  "key13": "3fBJLBDbN2HhdSJZsGb9dLKMENCyhRZJpBWF7G22uKb8uNTz2gnjAxD687EHa48qGnZgbN1mMGPZ6rg9rzjkPxPs",
  "key14": "66sD4yLJjWWT3cDt9KNnYPq4hNnrQd5qir9Xh8CDWttGHBxhstKc9WNotDaxcbXbZYhrLs4jkabTcNeekxtE5imC",
  "key15": "4FWn7U5ydREXAyH6VKMxSESsEh5HBQkqx6aeLwy41qQTL67oY8BVH256F8Vg1FZT5b4sschKpbcjknMTTT8ZGCiU",
  "key16": "1oEjokfAbTut9YLWprLLmhvDxXEhVxtXzNHoeQVCrXg2HFXosA1E18irsBuTYjVT3pxdNKcEiPVdiv6boeMqyaL",
  "key17": "2noKHNtUHYoYhJ7FvYAnxvShn1xF9Rwh2yvdPmpuWEebWvBbAAZHZ3tvc2641fQSG2gE3iV4RKw9jLjMZX9BnDeA",
  "key18": "ZoewohWeSkUzZk39NxhChpeLBYqoojKH6odifTHu71N5F7AqcGRkJEGTQkLS1pjy9pmqtEZndsb3phPNhL6m2tH",
  "key19": "67Z2yzju4VFNXMMjozWRK1x7o2MUU8ugN8zEea7ncsosTjBdahprqQivFKQYwyTpm1UKpJtX5z2MhwEmXVqMosE3",
  "key20": "4j23N16ELtUG3bx1Sj4uLeJzAr2YFRhmP6X86kThfDEmWQC5hrwAiPtc7m65yUB3QDGWEYTUCkgcrdZ6WBTRrVQ2",
  "key21": "3LhAZnD98p4jpzY284huU8z3jdacEkwNa9KyYd5yzN9rFqaoFqdajpidjP7Bn1SpBfiphLT9cU2T3Y8V9zNY3UP7",
  "key22": "31W92DDmSqTQevnvtrscDETXAEdZigpT2EkRCbvzAQU87kVhj7tEJUDyvBEuGbgzXsmLoAXtTBhwDChDhJAXWfgs",
  "key23": "4uwjHCVYHXi21mZqBiBrPi2R9qwyZ9jH5YCABcprynKhNg9fMLKHQbRMcJpr4mq3AznaAt1QVx1xJGMAaadkyruz",
  "key24": "KLkKb3DuS797brwYG61xF5xoTBfDrs5Jhbzzp3eBSj8Ltpib8T7zXYfjzkkQ2hfCCodJuGcdskEbEKLoHJuwYfE",
  "key25": "5KA8PERBDNyAbutTNsu7wEHE8mtiCNfxNwcVGY2Nwsjo5pjnsP5U5GgtPisfrPruTYvTEN4wEGVncmiRqvhTL4bx",
  "key26": "AsKX2Ge3rVYSsabKKQEdrgcGqmhPTodiBdUCC8Z4ZKm4mbMZsJzFayT3RTzzEUJ1MaqcV8U1pdxFptsyWiyTSpb",
  "key27": "61G9NFTL6JTT293EicGzzE47CzS2V1MoqX2sxFJtasdxB8d7NhYfXemikRivbSmnw8kzh4WJW4GCxCRQnPw2QZrT"
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
