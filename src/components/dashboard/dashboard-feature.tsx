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
    "5qtYsiWVGWAryVLtnAmJwDRCEixzvmmNKEwhb33Qxks1XRAH9H8RyC6MzrnFGcR5xp5V85shsAsAu62Uw491bJct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GN8bJAHMUxd9Cpi4R1Kghafc9MFEEFG6eQiYXJvDer1QS6cghuRTPjgb9dUrXvqmPv9iTyKVZ6rBpGcSTkBu46q",
  "key1": "3HjwdXgTo2Wh9y3KP14gPcX7pRJo5LRvaoi929dTA393x4rcZaFjHi8GjejdwJzcp1CMbT93wytXPcDdhGMPFoGy",
  "key2": "5nL9CYfpAU7dWKZipjNTdJN6Dpvz1Xqo6wedgq826cHibtAE2QwX1RV5u6kQGujS3UzXoHsBD6J1c49Cx6qCcsPv",
  "key3": "6LpnoGRGa7kVNt1Pg9VrjspEgjTtf9yX8v1zgwMHcR1SVn97SLrsFW3RFYFBDuCR8zNUzyv4K3cnqmaChVv6ZdM",
  "key4": "4RXtNmt5DS4F4ZhMp1yZPnqMgcGvG8nWfGy66vTqbTh8mCHu4cVEr4k2jCS74XTmES5g74ouxxd7rHRnZ48bxjDr",
  "key5": "h6qFo6gEZE3qnA8fRx2WAcb5m3R5ZJzDjg3WVUZqta4beRsnR55jBqY2B1UvVt5XfTzXFaCBa9QvJXnVhJwJrsD",
  "key6": "1EMkcxAhvrRgVAVNhpy7fg6VZUirJoAguRHkzyKFd7k67pXyTRCm39bMHSQPWrUmVsdYAgKAqVPVvcyJKy1pdEg",
  "key7": "4fDamtepdAQg7N9aci1gGku5CDV8hbhwShMdL6aD996pz3ec1dxfzH8hWS3r8zZZthza8WUZvv8FWnuG9nvkjTff",
  "key8": "itcyP4PiUPa5EkuRUvvsj3XXyBKWTqc82v1CYhPfzsT1Atnr1uZ5mYDFj2yn4wxG5WfR841WbEAc8oe9atTWHM9",
  "key9": "4vtSHAQZgg6EMdLhGMbq5R4XsRZDeZXyACN8QMzbxA17y5iYKDur1EQHryksd19KgkxpmLxdPv7XtHRz9UcH9UGr",
  "key10": "48Xdky3GvpGNDdY8Wxzych6JHibSrfw28de3Nfqck62LvuniosthA6w78eQBtDJqswV6ZecvtGeisHgFSBuAk1GB",
  "key11": "5FYuBUuqCzsSp3SsL3N7ogdkWSL6yD7k9kEmgw4pXC1TqcmpnJpuenZsJe6CmUR384J3SrtT9qC3azyehGwB5Pg5",
  "key12": "4qzEf7R6jo4saJUZrt7R7LcXPs8jMgeZkLUeNirKCjKakKwAChcSzTdhepordNyYwYHe4xmQXSr1S3zBN2bLLQbF",
  "key13": "3Lx9pdLrDzQYv7AYpkHdurnytBUMwA73KBKyi33Da4ngMnC9vMUA29Chu6FARn3BgaFuFDJKbPrTeV6FfYdgdGUK",
  "key14": "25wveUpFMjR34ZvpwCdncfkKuo4gm8c5MCBUfsKTHXnQn1yGpmWLbRGPa8Ybuei7pU7YVeW7GfMzhhC72H67kmNJ",
  "key15": "3MwjLjG54AgAeNNUwUem6JUgpSabdEmscb4VTYTYmEukvoc6gY6tA8Y8xFcDAUVMkTY5qnVKuzJ4tM8UaXT5VrDn",
  "key16": "HgDQdN9EdwyF9zHGJqx3VyMtTsKxRtnYMi4DbuU8piFb6a3cncb63rWLfDk56omXZH4eWkF87WX2ky2o93LB3kc",
  "key17": "4745GafABM6uuuKAXshLS1tq8h91pfWtacmo9cB77g6unBTJE8LkQL4EUcJ5qWuFdm2mDbdmY8tE8tA7WCeYgaat",
  "key18": "523phtxRGazb8TdApx9QiYerKx5kv1JZpsPTH9X8hhvEwnAQ7P4rAJNknXmrQ5gza4XKLogu83zXrvzgvq2VWvDw",
  "key19": "wG798hvjhNoRxdKFnHFMpEGxExWiPykMLEZ8JPNX5JiygbMQ4KthjMQurZevmme8e6VQX2qsV3j2aTC1iLfXVqh",
  "key20": "2SDUpN4LfxsoRJZjHv3PCX7StxLdfMbGpd2EuQ1R4RwzHFbioP2eFSofg83ZSgHzb4egcRZSVVDuZfzZrPjWdoLf",
  "key21": "4ZMEXsCZmaEqiNS6xHpLAvKzU4TrdUTWY4JPPqtEpryUJ9PuhX7KCdgBqg9oxAn8afQtZSSArJn5onjFa9DKw8gJ",
  "key22": "ouG2UQkhbDi9RD7gTfigVs4CF9y9UVnQ9CV2buUck2ykAEDCUHHpNbLMve3GcByoPe9pXtwXSxgWynTvrKHHwf5",
  "key23": "3pMqpz4Q68bX5YBY6B9zkXuuscmDK7Wj8iJ3gymoRs6C7csrEtCNJVZP3WPFLtRoRqakLrSeuYW7YismK944ECY7",
  "key24": "2xcrZ9tb6bfLq28N6MVDWo7kbx9WoeHmNPFq8p41iz2FmLBmdu5ZwdU3uE4MojzDeAr21J4sAVgMrcRAvSAXNk5o",
  "key25": "2SwfSDdYx2nEtqcJzAymUrfqCTvwaVvcN5fRbvT7BWJtr8gbiCy8RBtqZe9hRjhodEL8m9Sj6QfjebpawPAdjqkk",
  "key26": "3rT4K5bnAxqSKVDwtDkxhKQ7Upg92RiRiQK1VHMFn7rdiq5M5iGyfDVY1RkCT6zVSFGpmu47BR7DAeH5TcUu9R5X",
  "key27": "3PuUdC7xBX2zi7oBWUcRjp3v5y3nQEgSC7tqcQXvefRzPqP9ZNjaKvEbtNDB7aaaRoBMX1KH6Yz9uDA9yPK8U6os",
  "key28": "2nk7aHHRS4HVHjnmgLv8cw4oa94VkdqfHqBxARkY2TWEEUjZtYa9yFx2x3HM5udU8ofkY9BFpnQABuhTWUbvvaTR",
  "key29": "41Zw3fhRCEGjzvw3C86xqsVDCGDToCjPBpRXQ3b3Xi68LDgAMUGwvNPFdKA4WSosenyCwohg7eG8Xoc8jNWDNZGX",
  "key30": "3Xuq8MCTjCQ8meXTqQv5FTgSwM3DBVKURHUUxuJ7ZocacQqkPKWjWTmD4dP11SYL5vTr8BMaUxaXuKXWT2kSuHjy",
  "key31": "4yW8aPC5dkeA2Dr85DDyvZBUc4NwqptdTEjCuFeYReLhqc7ZnK3AC2gXJ81ftwQ3p92r7JDFDacUfXLy7qxedgxW",
  "key32": "4HbPiFJarPq8FPhqPxmSJBExBVUHihCUtonZJx1dUyeQKKNmWqa2QamRNsFsLZLjhsq1rdTLe923j79S3B2SzwJ2",
  "key33": "657eRbStstNqQ1MWd6WamQGjgKjecmHvNkoFA3gUXFckXG9cQ6FefAsx4ULoCsMne7f2HA96epi68svZdKVVEooE",
  "key34": "3b8v6cUmvUY7o7aBkipDgpFx1xSbeeuKLM2jEAJMLtbVM6xM5WZaK7rVaRZWtYw8rZ7neFoKKyCt1pkrC931EDw1",
  "key35": "4Vxkw6wJdrttEZXottoPZQVkR9QZDeqaSiq1wrGtQh1BdKVehv6ZLZA4vUEEuBmDLC8LsRLv89aeP8NqL5NGYdEM"
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
