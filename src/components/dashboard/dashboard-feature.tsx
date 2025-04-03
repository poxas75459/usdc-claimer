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
    "5NA5TdpojrahN4stTZkd28kxTFWkBidkDovaxv8s7Yhs61aXcxF9iUaJsnD3XDSJLSsUsWEQP2n2JnQaXFfYzkvV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TRJkUMAxM4NcvBEHhaUud88fSPfkMo6hboXFBPT7kjkgihegf6ZPByNapx2AAk4wHnYXgL1bieYvYxb6cYV8YGm",
  "key1": "4Gr7RRPVyJqgvKRphzRh4YDeTs3idQKUtf6hhjBueD7xcpygM49uGeou6utvLzztxq5o4wJfaPrqyj7NxnT9TEGH",
  "key2": "SuKy5JYnjeTcbMLFvGdq6FKBMTnqfxMS7Bi73Qa8S4gCfMbEzgH5AjVnaAQXkX1vxx9XmZKCB8UYZoZCDVnUfJK",
  "key3": "4Rh1SGBULHyqpTL7F3YGnKUK8umJcXH3fz874ApmmorryqvTUj5XFCByEYn2n28b6cqWVKKX6F5x79vmo8PzNmCB",
  "key4": "2o4Avrz1ZExzNvdZrXqqpiofEPK33NUay1oqmJK7DVcBAyAbHf1RQeYw5N5zrqXX7s76UchveBqF9Rxe8qwrG2DG",
  "key5": "5Mj6AJq8P4wYBWN1Fqu7398gKYxeMpULuA5x3hsu8zb7EdsbAwiLVhpnKFKREbeMiZSMGgwjxBLzEks5JiXaC6r3",
  "key6": "4VC7Xr5RyAp3JVzsQE7mvvf877eWA1RxBBqYW7DpQ5E1aeX6mCzf3K94oLu4WAF4Vs9YT91KdnxseNZMF72pkpiN",
  "key7": "3E7vxPnG1EGYFkfWmsYCE8R6TqNi7KutopnHuwdHEZaiyLx2TKTFCqvU9gpueTX5nbJEn6macpWVk8VXd2qVp5Cm",
  "key8": "5ZszVAGZ6U25ERSwxktzWwe6YiD7pCYP6iLsy7ZDqwq8mKdu9wu4cVgoXxARSmzDEyWmqc7UG3JzjSRs3K69CTwS",
  "key9": "3qfumTyJiN1iXQxC5JuKUmAxmhPgXxjRshQFQMBLgwsduGSLCKUQzffH41R7X1pkXfELhB3NSQU3tMgb69kNXqqz",
  "key10": "5fcg66r84u6tYsdAy5wJJnsSuLZHCiddE4AdBVSAnbKYsuzRmnYPhJpoqGc6Uey2MQFQrE49dnazstshKgnWpsoa",
  "key11": "7zYuw2y9srbVJFFMqevWTrzpreB5Y1idBwvNiga8MzgyULwzLRCoZuFoGKwXDMEppSfUncwAXGg5hVJ6eP4wAcX",
  "key12": "4M7ozQ2YX3rDQTGbvgoaBftjza2UcozBGMMHeSVVigyzXq42tv8SSGMN6kByFHqANLQCJzvTVmMDQTFnomUY96P5",
  "key13": "3vbJqjwVbpmQuMTHcHNfJELy1aTywf4yzZjzgowqV2hkZwnBy32P16e7VRH5pB26rGZsNHfYxwAsSRPxKjdPUg5e",
  "key14": "bTz4oxKga6JttymCj8wnMmL476Z2C21D8QdxJCqkkntZLGb9c6wqbihzi61yKsJHHvS6pY9k2jbNQWUx8rKbPVS",
  "key15": "n3aN3yQdwxiER9RCmVZZgQ7yfu2pUPS1Y6djjyYmnBZNsA3uS4Zo1GkRB7pbkAv7mLTqgkyrpuXc9bxMEhETDiL",
  "key16": "51QYMuAJ6eL47Yi2S9zchu1TBbrZwcduZ3ZsyuWffbYSeEweAE7EPaDv5anmjw77fWCcHzhLA2hiDoBh3BuGeyAb",
  "key17": "4wo51ajNguus4mhNudE4PXoPKQJpRiZ89Z3Ps9mVW43EeTp8dhos22C6pfe8GSwRfk5SVMbpdN9XTuBteuopqa1s",
  "key18": "3ErhYDfTFvwcYXTtXxyccdHfT1D7Zb6bkFSetxj5bq6CmidH5svAqabBWX5zfZL9tKATbWprF3z97v7kC1DpVSRU",
  "key19": "3dxGKBkTqnmqP4A7XGFgo4L3fsqr79FMtYQsUdsCA83vV1aGoaeG9HgjuidkPRBLqaeN5uMFKWENcdzQChoM5Z12",
  "key20": "3eF8MkANQqwoLtsFm6s2qBeZJPDccoD4cM54gTEo2muvpunHwjSsnfvFaAh8ywHyqDUKmi5AZAE8Q9NA55aQGHRL",
  "key21": "eDt8K2VCRRbzSBSXsT3wDX2tJpYTKUvoYfzEMLFF4a4RM7GsXowWyQhYtyQrX9r1Q8YmkY7sWfKj5YijKySensB",
  "key22": "3URqqjUbwcq81uYxjwEj8fkkk1WV5c1FgpeYpFkqfibSHtUPU71h1KHjLJqeq8HdGyxqjWutgNCMMjHCjGvopoRn",
  "key23": "576WgS59ar2RAriRX7NS9zHoB3Y1XusrrgpMQFC5dNUCYATP3dJE1TAbbzUGBnv1u9rBgg2TeMq2f3g7K3oLPsyE",
  "key24": "4ZWUqeQgN3Wxxz7USpvg2C1FfYaDxEu75xue3LAS4cXstSBfjTvEEJ4FE7z5YUs9LPLkN6N82GZa9sVSRR98eae5",
  "key25": "4xtogzAmkhAKg3uPyx8LXuxpvgUDZzwHMfgw1fXfRQbovYbZz7unGZbUvuPdwuo4TdRcXxxJq6cQJ9WMw6bDZXBB"
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
