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
    "zrc979cxj1AbARBXPHQ4F51qnhfiyo3TLDxEAmQipwDD9na3KD21myLH27dUspMW7hTYdjzinMh2WeAeu7HktkS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JMCCBfu3NuhJEyrPvFGCbEkrGdZuc3HyViNAGxHrLa4g2ZUnWJs2tPfJZHuJ2hXH7kr2qWHNZzHf2As2poAGCKQ",
  "key1": "4stSPdZoPtdC6oEJzV5TZ8zZGsZzWLR6CPTQUEaduod1Zib23mrunQ3BqWrjMeCp1sG8XVGCkydC6MmGTaGnaLhX",
  "key2": "3PGARdJ6uwaW2AzWmyaTj22pwHN4Y5oVtZaUhrZUbva47nrx5PgZ5LeNo3XT6kRruRp1H8AvXuJPpACJKLvm2mrm",
  "key3": "2hiwe7z322PrjpysEm2W3e8onRVZUzEmCEZhTUUUdKKSr7nQ9e12CKq3h2sRqGfVB8F4Kg8fjXZNAHpM9X2hbc8a",
  "key4": "4iT4vDeSqwVWLCZmdvcDpS9bP3jzhMBXYSJArkQL8tGAAqfg44yKE1qJqSrcqvknF9g8nSVwKd8ZpyxLqcMFnM9p",
  "key5": "4j9NQNjLMAukZEmyf3KUUEEoemZdki3W1i34MQC6z2xU3oEqnKCMVo7zJqR26E4fdXAKtXJpzauWRg8WkvMv1f7D",
  "key6": "jHLVQ7ZJmVZLCr1uNrCwcP4EKyMb5JdgtZtei3znLhSVyqsxmA22ZyFq8x3PLLBEtJMZ7wg9bVbPS2JeQhLZRR8",
  "key7": "3RhuV5zc8hM2ccqDkH7YKNPj5K8bKq38eYdVve6WNxHjdcK2FHG9A7MEVPJ6PP7v5XxdJdjEQUzA9VeMF2RTqceq",
  "key8": "5EFL4HgjJtfFXVV1Y2t8qWgnMFdp2cBAMGGkJvRKd4oBvvFkU9x8uweoSmqQW8dahZP3MuscdJU8bBpqXVwVEPWu",
  "key9": "4ZZNM7i7AWcMWQ4BhRsArwLNYw9KLhtXyG7SkMu26jX74JZaVwnnx9u8QZ7thLhp3daFyW6wvA63VW6fkGLyiBvH",
  "key10": "3GnRccqEVi8fcauscH7Nzij24rcn4HyWMndhBeBDiCqKCFganD5w64bGKcSFzbQAABN7WbcjPfvWoyQzN7wQ97k9",
  "key11": "3Pnq3UCziT3gZ3U3qPTQzzvpbogeYX9UeXQnJg7jVbbsWbRjGsiix7tvVUNQHQMUmhVmoCj7PWyUdWirF7hNe84b",
  "key12": "3Fu9gdvK9yMLjW212bvYNwME9zM5UKZJRbHg9gv7kEMModtAKnuQxeVd2ZWrej1cuw9VB7gGFdx7xmUKdTwAhXQ6",
  "key13": "29QQsPz5esXwtxetG5ApeaHcyoik4QGMpe3NGyK27szQHMDD4ymTj91bFpQ58ALm57oeLpWcoDJMJwe8UwFnCAu3",
  "key14": "3ZqGnSchErrw535k4SQPmgQGENQB3fbrjY1t2QQgABuSjvBLXrHLbZhQqtjq8psPCpUTGAS4VFx4raiamt3giyzE",
  "key15": "2MiJeDuiD8Vamc6e1fzhMYFjJ46bLv1FS3j2urBqbtb32dp1TJARWysxaqKriwiWKfJrfQWE5oqHsUF7PMeCwTYV",
  "key16": "6j11z57Sif9vZCHFaBuUDQ5MCNoG64qNPLAGXgSEnNBMyPj6RG6KneqztMutJwNasDBKWinygDuNxXB2WWBh2Nn",
  "key17": "2Mq53GA4pn5DeAFbmwbsGBMdneKFivKW1Z57uK4mbFsHQvCtbspjaja3S4EdKnpG6By7vmRRRbV9dgrBuSkC2GQq",
  "key18": "2tWiHMqb9Dh9ParW7L9tTeYhqa9t6dDu28Af9xiVVFqPwpRkGeb6qpaN3ooH9zcUhNPj4UwtjGz3X6khRmVdAfqG",
  "key19": "4WMjLqwtH2e7wpkt5HCzGWfkk44vUqjYfbrsz99Xhvs5yRPN2HicFxVSyLyPGFFLdCWAFyX2t79x7QgyGnpA8Ac",
  "key20": "3SPFkdXQiMD3ZJjcEVKCmV1t6z2GyAgmVhFYB3VANEvXFWSMCMPuXUXhZa4GwJMARirhbBYA7T3fW1TEefpfKqxr",
  "key21": "5mi8jsHW13fpWUQxnbQVY9CTyk3557PMsN1CB3epPHRqKEeUZVpWPVrrM1w9fz9LSUQeBLuWAtkRyoY8KpESGn9c",
  "key22": "4DmvKi2wu9KQeT2SaktvENdRtLXFhZuWBzJ4DoFMxwNN4MRRSjWWfcBvVx9CYdr7Bpsskk69YGbrrx6ziXwy4CEP",
  "key23": "5hqUdbFZFvn9vjm5A3ifgwM5AeuN4Fou9hLR7XHFCWfkHYDA9CYxseBnQoVgZQ7dzVoqkNQzE8kNV11RZYsbPVed",
  "key24": "2RhxCEwc9hbfyPxhUMEgwugDysP7h1XCGyT1yNjb9F6bNgxQi3PbhheVUyz8mDtmc6StvzuF2VDtaxzTbJTKAPtM",
  "key25": "2PkdHnP5qP9nAatjqbWxiXn72Pn2NPPH8UhgtZXPftL7K5Yzi1gk5ihtfjfZP7WnrzCGAZA9BgcRVNLwr6q1Axu7",
  "key26": "2zdWwVwSfJXCVEhCvyhvttPoJFJXByphhC32fkA769cpvQQhSuQBHF936hVHh7NJypfMmzri8CQ9wwRY9573ESEA",
  "key27": "s6VJ1QZt57vtXmXX7tE2jUvHhGDujQ7BZWdyUSxLeVySpriPP2NmHoyvC8svhFcdajRtAdXMvUpiE345jtwNHEN",
  "key28": "561y9v8X3CATz75tRXTZh4ZTDnmTzqu3udpTR83LhYKgooejMMCN9VbN2sLNbxCVZeg8fdDf2VqR6iaHyjqGuDeJ",
  "key29": "4X9vqXoJTXbzVQEhQtR2nL4YwQz9yr8a7xJtr3cXbdud86XbGqNWgbLirFDQhdAsQJ7PEq6odCKqc1Xr8TDARahV",
  "key30": "3DfpocgH48SYRkn7vJF4pdjKjMXb67t3QnF7MCMDnt3pGKkrNNqauB86fUH6TV7h3xgKBV2Yy9dissbeUAk4np4x",
  "key31": "KcsQXBJ4UbQw6mRKeEjrE3t2BMhW3ncj43nNebaZhg2gwQcV9F8sbZNoURa7ow9Djpa3kXYLt2WxQbFARMZcPXv",
  "key32": "5L8r9icvacQYGwhq1Pdx2YPX7hTb1C2mUNPCGUxWTPppgVgtqfP2bckrn8X2tsK3mCsHCRyQNxyWEwp4zZwNqCSQ",
  "key33": "2tC5BQpC18RRu7vzPPhos6o8HMeKjowE4B72ADVaPJXiMDwC7A6yTKgT9R19rgT2yQts4foLD7XTKbFbB2JLMzVQ",
  "key34": "4bxvhpzk4wzxwK9M88XQZdPgdSwh1C7YrQpkyV1yv8h6N8JsYAZCc9XUDcUwKGDVRQCXVezrw8YMBBQ57DcwH5Kx"
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
