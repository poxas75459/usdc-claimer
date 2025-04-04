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
    "32tVofrZo1dxKswtz3MwEuf8sqMooWtS911JaiyuWpc7e4BvpVWuGWqDFbsKCFd37kCDwnaTdF99Hw12B41q8eRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qLCfjeYz4PF2TNTjtvQpfS4K4tBL5FvFbVq9HPHakaBVqNLMcGHyDzhLQj7kX4JXS1dToLEvKGcau5jdNvx3AUK",
  "key1": "4hx1sQJBMPT6vPRZBq7DKaHYMRUihVQYGA3cwxAzNmUY9HBUeXobBy6k8oN4MRWTDds8jsArigC7ZSP5esEwMr7Z",
  "key2": "2dYZnWR37JKpMF3ob4usmAsY63NqhjjdBhFzoHqGrhSCo1VJtuF3jujJXnDRRiwMjvTsFsENY34xoeNJQ9tMQdEi",
  "key3": "3rQBS9ZPMtGrdV1LZkmQNmontzM82vXKx5QtwrTfk1Ge9H8S1rF2cmE9uWhoun2tssjyrmEtAnk6NqXkxWdcg3Qd",
  "key4": "4djhUKuDXmzRabiyXrAJXngvnTC4CWWKAh123j4EGD8WzB7299zgRa9t81m8ZE6qif7PxLpFS7t5Kn1miQMU1t6k",
  "key5": "26ZzJNKZ5gCkQFQDiQVeGL8Koe75Pyo5ghnjiv5rzBPxz3WCoRAj2fv4aG9h7UV7PhYuEeVYgVTj6P9gvLUPq7L9",
  "key6": "4DBAVVksX2qHJRXMEfTcYfy4wqptWvwbvr9KzzLALSL4cq8isuVC4wDvho4c22CYqtvhc2FDFUfHfXZXxWAjSf6h",
  "key7": "3LrTFhtoi8r8YCyJsuTc9ypX3nh4AVXgFmYNa9ugCcMBAVqPjJCytvij2uS1FhR2PiuUW5t4EjkC6EgADVgKHsj9",
  "key8": "2w4p9Np1iPpbykaBUuvnSiknV9wwyPz4kTc4DNU2TBuZJePRtjNUPkzA5BwKVHNsMGaF8HUKuS7xpHTnwJ5zEjRB",
  "key9": "2ViPtTKDDgZx8g1AUQdwko1LP64hYwRTUDBjcxayKyQeaTfcG95guJc4GeLRDsGvrujaNA5eCVVE8NyDN4dHV58z",
  "key10": "oCdEN9KLnJH7kNekEuKbxbBSm15rRsyYubiRrJbAiT4Zpe7t5ss9FRNfcY6Nh6K7gU4S4Uto89VbuCEp217eURq",
  "key11": "25waiJcSyDNEevJpiPkfCQvzTN5z4VUtAHF3eEoeFY5VRjCjhXvtUFGVjSVzMbDUonMBU7b1HrrN33ktHD84VsKc",
  "key12": "4EWpcocVEgmS6VtgfspaSCbpuoEbsvPzToPP1nUsiWvHbUTBKeKESSzpBPecYFqeTVzyoQcMVM5ekYqgwbJwPqeg",
  "key13": "XuDBtWHUCrii2jjwYQa2apkcMk1Fr2Y7iTbeAt38GP6FQxELXxgMzBuCdeiteQzMYVbXEaBypVL1E7Wh5c7QLGp",
  "key14": "3v9terStPQ98HVyMrnoAGeuHCL5XXUuqwmr7EzCYNT1cCXnXePELLyNMedGUeJtV7PhxvqS7wogcTfpKxJAvqoW4",
  "key15": "46NkCyAFp5r9MFqJ6Jk4HH3Lty24wyEGwKM4PJvtgVejG6xSK3SJtTtj5Tn4iBXuEyASQNENkAuu9w7sBe3FXUnE",
  "key16": "2DHE36gKCAUJCivn6xS5QN3U3JTCMxgf8kPN7cmLJkmrZz6FFdYWmLipG83X77uzuDnsvvEJ2K5L4wxJMx1ykte9",
  "key17": "SW7xTPUZwi8gecqy7ePwhYavg3uLJtMnpdUjUQuX6trSbZFQSpAYVhcZgqjjfPVHrtRVDSfD6sv2TfGRx9DDiCm",
  "key18": "289M8hHEYGiS92rNde4frYmkeXuuzwDvVyBeWwnTUBk4KH24d8PiavfNCdJpeqUXTP4WH7aLKLTreLMxEph1s7MT",
  "key19": "3rNMgmxeR6AeUm636yzVMxZQJEpHtcmt2PGmjbSd2skqzNuVskcG34trqy69ya3KsjP3sLRuHJrKwYD3iaXzizUW",
  "key20": "41LigRLUgstxSz944WwMDYWS5GxTtzkU4RXHJU4MrRLkL9VnUr9n5N9P6NhqETxJZW5d9Gs4qN5XVFtcPPKLcA24",
  "key21": "5m2HH1jUyaYHv7qPNnwTh3AXu85t9CcszjiLmMNwcvj43JQ7RDLKmTYNuh6d8QecJJ3NspsJ8vRaMCYJYE8x8Vjo",
  "key22": "56GzduqWYfniJHgPsozsqyWeF8kswBjttKZLfxz3pfSmWgCvTDmPBAFiPG6DdST7AKyN42UWWGAzmGBxagHmdQzW",
  "key23": "5gq1CnCSQSEQQXMh7GYby7C5G9rufw8LeekexC18hegXJ6vXBQxZ56o3zxGrnNBgSYAHNzGKTs4RCzc7ovCqFwrZ",
  "key24": "53vJgp3H3XSSHbfaE5EwQgJcAzJZ5UZ1ompHKGx1xfCaK9itAGSHia7GEA16V1a3dx2jdeMjGjfU18QUWo817HYA",
  "key25": "fCyacdbe2MFzFzFMAojATWUZLdZE2pyovc5ceEVide2QH6yAHSvKL1H5KkZbdTED17ZmcT48L2ip9EVZkthuWn2",
  "key26": "2VDxFpgsyaHdykLsA8RTVLhBXucN9D9DDZAamRkc8Wsoh839sgs3PLCiPtdgVVMCm4X28xuHY4fNdnHzxbpXoSkP",
  "key27": "4kxK83vY1gQytR3ewXfMbAbvXzfuLjeZwA65KNV5dfkQhxx854YBMLYefnAapyhmeq8CJJ7N6qPTaMQJLQUqc1EJ",
  "key28": "zSqQBk8SsY6y5Zf8F4G6WbMaaKaLEyDjKjNhn77aM45XacacCR28H9CMWbrdSaLZXzApAmVpU836ciEsqAm1jKk",
  "key29": "5MebXN4Ambh2VC4BMkYFkv6Qg7ioNkGdeD56SDpPUvCK8sHgwz75Lv7Uskazo6ivcbCS5ZpbyHZ6NEZrh1XvUHaQ"
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
