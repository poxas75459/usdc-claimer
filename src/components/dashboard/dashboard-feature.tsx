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
    "571thC1b11V8rWzzHPG69FntSfWTaW5Etq494adoHcM2Gx56LZ6FUjm2K1JMEwxdFkTy63321kkZn3nxQjL7z6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tdTQ4ZwVRV4FgGPQkswhnShpCbQ3P57E4EVtY7AadLMav9Y5AxtZTqSohrD5LjzAg8XHizGTeZYe7UU6pDoHMp5",
  "key1": "34M3y5aZzBTFVKV7yMThRaLeQJWuLbNBSpLUnMgSNiafN5WyrVWbRaduqhHwXK27eAUqYkm5Xi58Kbxpn83gAH2M",
  "key2": "5FPQuGMN1f2FjUPiPiiP2GPCCXgjLzVfL2VP3HRcaXUkpf2YPY5JQ47wxwwF169mWYynkRthnogEAoodx6uf7G21",
  "key3": "2bE7YP9rKERhPReaNKKMMvNxPHntbb2b6VPvn6tUAEnSZy92S5y2uNScfR4N1hC9T19WsXAzhYtZGehgvXqyYbU5",
  "key4": "3Cqq8pXYRJVU7iEZdRJusmtM4qFioeabMGnvWqkBKKMccwaGDqsmrULCRcKcvKqfy8Jwn3rnHjARd5vHEhQsiacd",
  "key5": "5SXYJRxBxVgkzMiiD61wwMWk3P72nQoK48d17VKPQGM8a87ut5CD3DQqAcT67sfFVNAHnvJNcudrfju5DqW6DAt5",
  "key6": "44FQyfhaNqfo8z79DKqFnppn7Df6KZWng3uEeTrNPLyn6KH99mEmc5XCYysBtXkgrFHYWHT7uNrX1V4yrQddqEnx",
  "key7": "4kAb4DConiGzCMUc49Wg3ZvfG7rUzRdMcZdYB4ZKvZk4nm9cDEcXZZA6jXhc5VLoU6L4qiCVsi9vyf3nGLUVNziF",
  "key8": "2vbyZCTsE2WpainvsiR4eH4hKPfA9pU7L7EykGvchKzytAQiWPHyUfW3SNLHxf9BMQeqgnRHB4ACYtLMxhmWG9m6",
  "key9": "3XdCrPMxwT1zsrGVn5kcjN9AdrLUQdMb84tp5Y2XdZNGspp4LBomdwNkd5V21r52vEqZ5UUe8fBd1ytLaH1kYCYR",
  "key10": "2LfqT8hB5i4XA4818ESaXH4hUDeT4H4rue54EGyPDH3GRW85yBaV6tYC4FX3aMR3BSNwy9oikv28vvGq39hcFCXH",
  "key11": "2ZDoCbQ8Qpvv8s9NeNy1RmiqHQmsMvoUUdUejjdDdYJiRNd1uovef5Y8JriEoWBjMx87UGq2nqKthbqCx9zBFGZo",
  "key12": "EpHUBe6m64bGN5nEP2wDmVHmGsZhBmAu1KVB4JojAStsd8VQyRWa2vT69pxEryYG5JG4e2AhCTKbhjcdhEkmK8X",
  "key13": "2JMiiXJBriHH2CZVJzj5sRak2hsa4AUq2JmmryZEd8DjLa7jqffMpe22kMhVbkATeWxwJRKDkJqxggqvtwZBedjN",
  "key14": "2CeRfD7JTSST1t2dpg1PNsCyxbGgxnrDzEomRgxmKz8GR2MqRJkVfnMy9JM849oCsjb4sg6nMsp4CFFo6PUkcANQ",
  "key15": "3mVEE4kLdPDimnr5VbkYJgZjvcZ6A66mAEPxvKr8inFk5tN2VU3pPyRphaSog1gUNu1cefy2ocf22aa9nPBHdTJR",
  "key16": "2S8Xw2y1cQ5bFuU42SeMutvEFEa5YYdNaurFwrM2pkED1UUFZNTbdDQRw8S3sJFuC3xKeEk29SJZRxVnBwy78Kez",
  "key17": "22ighHf839kWJxU1fytRnjB4MLjcuT3RshqsRytkfwhQuktEk8mQEVAgswqJf2BurUZCiBPCfHW78FDm8tZx9aYL",
  "key18": "5skachnVPYiu6fumS5QVu1EXEr2LcErrg16awP5tU2emfe7KpMyBvd8Qw2uaj4cDMDNFBzjGcoFjWNoy6TeSzTnH",
  "key19": "3oDykQMMxojSFp2WRrPwkJoZAxJJiwNEM9ESHtVJt2Duorf6krC19yfEVMSQxgwkXjLT837FrzMTcBGJUjBx57ZF",
  "key20": "57vfhf2EXU65bEkCSt1dhtpuNuDHEstK9dh6hYZexQFDgYjWqfRn1Lh8S2EA81cHmFdYAkPxQYYkFx8P8dagVPJe",
  "key21": "2LAjXDEzhW1Hnia56cE4MVNxyLF2c5sQWXdYmEyzmPMtswta2Lp6BANB96MQwoYCTnFVjWhE8g7UoCsatGaYtda2",
  "key22": "36uKWbcwqxHV2VzLF4QhUzQjCsbYGevX3HFxy4pQKyPwqJtAtzEYtu71uF3PmKVUyH9dLhWvQLsQ5wm5uu4U4cQm",
  "key23": "3NMx2nvdzZut6oG4MujtBLNXq8xvFkvN6DtBfXtErFSBArqAjeTi7iTEDFobEaAokkwBztHDQbyjGBzGhuLPgedN",
  "key24": "5naLWJsK5jAtNcZkXuMiFoDuzc5sBWB7SPA5ix7W966eifWq16MayrYjwtowWqCDJGA75BAZ7vmnFUUYWugVtce1",
  "key25": "29woQE3efktnFoBhBqvUa5jFVXoDmY8GD9js6hcEWHNuCEk3u9pchHnJSm1Zzq7CDqpdzdUGmruZYQR257t3Kz1K"
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
