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
    "4FQtCtxGcMfs8j7kq9JSeeFmWzySqtxhXx6QSyRuscKxJouUveTcxrERvokHbfZ2dUFS7x2mkFSwGs1qEmjNeoLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aa19dP98HQA6g82L3pvh9ARZ3FnpjqSz2T4iH4xeZ7heNot6H9pgqUNRtB7i1ECYAFZtQ7eByTihPW1EvFJRvN7",
  "key1": "UKbZbhg5b2FELWC5iDPaPbYq3nSz4zqKNiKb4rYvS7uqN9yFkdhwk41X94tqeCPTpovf81dri2SWZDeZt7miDVV",
  "key2": "3x5oKVvLfT9Eu4zxfwMTC5BKkzeQ5kY5SypFjaPE6jYwKw9XjtVE7AAYiX6RT9J72dteoF8mB5wepQj9YWTgGv7B",
  "key3": "28NZ5emE2373KwUovhgtFqnd6apSPqoP1e8eneZYtebfaqMSXUkwcufNrwhdQcW5avbJnH4RWq1FdmfFiLmS3v1o",
  "key4": "35cavTrmdUev5uWKrNv3kRDaDMsMhorimrXbyS8Pfqvrm8eQbjwmGpm4NoMXgDzHwk9cpoygSQAbZ3tY7tMuZvRF",
  "key5": "YVS7BMbJdVkoopg2s2oeL8wJr5bTu2VQBQhzw2vWXRLAHDjTjHeJCqN4e38eC7ByB8NpRkim2NorjRprziaZP4E",
  "key6": "4Kv9gH2Fut3sHZmS3ndUy5ASP73VZJ4Zn4cZ2gu9gzEzvwsGPCamWJpBhnSvDifvtSaXkdyXvSctRnacYYq4jPzz",
  "key7": "48qwpQdNCNAzJmz9aG6Tjqw1C3SdLDXZ4bGJwb68tSj9ypKfbHq8mZeufMXAeiMKabTHbw7KcEzxo2PzWSdENTw3",
  "key8": "2NDyf7Z3shsctyGxnKr71SSdAmLPqfVhhGmDFozosnJ9AHy5Mt7MNUazpC4WjxgYgHk8TEcFyzY4AH7MMLUgUQYS",
  "key9": "5y1eCaGdjXMvAkQfSBQYpkPmSGxgWp3hPR6yoGF5Vejfn2ZvDHW2Zs3kMtqikDrYaikNE7QNiHk11Z9JRvRpr8s8",
  "key10": "5i4f5TiP9qC3YXHFf24PPTtCPnbrrPkSXmGU2vjwsUXXLZVaqbz64R1EyYqrD1YAPoCpYPyQWN7Mm9Hk9gYrdbpV",
  "key11": "9E1NpQnWfqTdCSLq1Wx7hBmGj7LcLnsLoMLeasTzaqrGmr26HkHgXxKjTjUY8CCvrqJAHS7k49Ev4r33a3gWxuN",
  "key12": "2QBRsKaQNVoonmwB6oiEdv4Vmu1taWgqgFMM4QfFesMxmFXrMdW9oWBydf2wHJgbZkfb1yZYp5jGmLPjNXUZetiz",
  "key13": "23gjH2axva2gBVVPUGjWDBztaWWJkxiVPsM4UKdQgeXno1DjHcJjqGWehg8EcKKnD1rdjH85Biq71Mw2r7jhe8UX",
  "key14": "52dqbwz5mdLTQNk1Q7zqrThK8QTcFWznsrgyxW9fjhfJ8Wdfs2YB3s2y9qCeyhpxXTRwE1pup3ANCFMSa9RYyoE6",
  "key15": "58p75iNKVi5323bWAHdMjiNjtuPySFupTWRU61Ec4uXFhGH7XTxvd4Pgj8KyXZqfu1S8XEvJBZpakM29yZidBW1v",
  "key16": "3EuBuS3cefpVJu8KDGEhUhToisKv5BAE4gtgarH6629GZgBAHk7MV4vT1j5NYvRcRASjAaR6Aw7JvTxBUPTBCsNT",
  "key17": "27pztHQCZ7CfKaQKYXcXQCGeSqDtKJARrtWt3WXrLM158qVuWCLXk3ddFHNe8vvqYQBGn2ZtiuHVpZYjunMsCwB3",
  "key18": "3xHLBFDmL8ZotTH4VEMQPUTa946ygKgHGzHRGJh1Qt7hQa3jxfvHkRH3Ug5pdV7iU3Gfm2fWhNJKrqb9zJbgJu2u",
  "key19": "5GZCZyHYRvtPMVDJDKJGr4wVdMqPyZBqAubC6EXqbnZ3VcxRL4GGAnuSV2g2qCyQz3LrXFcVHkkJD9dJZc2aEn3E",
  "key20": "41j2hGFLYFnCAxGWG48TGUDwMf8iA6tYC2WhD1bqWgDeSE9xYWW3iECz3x7VCA8wjPR6qDyHtzydsHhZPsptp6Ty",
  "key21": "2m4pwAUQcFLZY4tutxtUN2Phd5dpjhk6vUPzKcuLHxJvVeuFFZUDdC9S9uPDHREjuHoTdvepTfx1HvuG4XDKeEni",
  "key22": "2JL7MP6XCp7TxwMSWZkDY4ximLBb7Jgaba5Tt3mpjbejTqkq2n7q9PoqPmqoVPnc4AdJuWJzJZCnPtWSDf2Cohtk",
  "key23": "5Yq24HpFrrJmtp9VWGCXuv9J7KsTfTBAqP19npTVSG2kQVgKJzSHeNTLKQHF7sy465GrGayo11NW6kcWoaCZ9zdN",
  "key24": "5QH9ig5QuLq9yxPD7TDRg2jpD9week71i7rmAgU2FtBbGt6mgR1GeEFkTqxThzje2urfoEgKaymgXHpSoJjbB78n",
  "key25": "3H1dtNA7dd2pRYBqN4C3CgG5GV2iMZ3BedLZsqsb5HLT54kpd4W94hZhW6gUu14wK3fB2hu9jhcF6TH9uC8t7x5G",
  "key26": "AfvsxQixmFdiYcGQxbPgPGSSKRRgyfNBi6GAsV8fCRZziChBenYVFEF7Mv7hAxu5Goybsvstrh3KvHHcxcU7nyT",
  "key27": "2j3Mn5u8jQr5J8h3LeBpyvtwRFNeqGDuxMTPTniDL1Jz9hB2E4Xga7EybXSZRASWQAL2WxRaQy8RqxuY6ZLczdgi"
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
