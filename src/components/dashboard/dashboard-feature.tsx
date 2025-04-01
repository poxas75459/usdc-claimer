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
    "3bgCCu9zA8CZk8idED6QP4SS2A59awYma9EGmzbpBATT6yHDpeHYQ2xu7j2KChBwTfPK7C57iwvZps6vun1a4nLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EtM8vdHzDNHqQXgzuWyR1QXJaShUGugSeQX865c8vtz9TatK4PzVM45J6jn1XSAbtiy9gHnecwQkvW5FLYfrVku",
  "key1": "5mUSTVBN57HhyvrCcqQCUjM2Q6uQRugLwYAEq3yLM5SZBK7t8XgxtEERgdETbtCvrrNnMCk4uwjgKS4qdZEc1aXn",
  "key2": "4EMvyGSuQ3cdivUyAsry7G2xMqF2FMX4YBnq8X6XW8CQDi3iVrJHSyNVHkqq9cxt75DNgsBx9vjSBwFDerXBd7CN",
  "key3": "5J9meZNRav3DU9GXLkfG8cvqpGTq3kFZv5b8zHdGcfQRPMXCDVoY6aP2B5duvFpqSXo1pgEP1CdYanpRUaYR3Bm2",
  "key4": "4bjmsqBbvM8z1yw4EWLS6DQoYFF8rtt9d2o1gkpntfHoVnb648NV7B1jQRL7BjtJDrSxJ9WDCrnv4MeH9ZBdgwkF",
  "key5": "SSWiJnKvz5mYCwwxb19Lkx7TepJKPQXDwXzGDUd3EJj7cuGQpEHziWuQ8MQ3zYdMwKJ2vyvbKHKQr9A4SftB86u",
  "key6": "2dDWnKRNquCmaM3t3hzuavfDf2KHBZniKgLJQiJM5jJ1rqC9Thvr15gPhuRJRUcRoNaEhLfwEvVXpJpUqycEnNnh",
  "key7": "aNtXmvWankK6JnBe9FzX1o9nmNGyPkP4vnrsjMx82ew2qm4HbTDtzwFxFY6k758YiTwhTprgsqoTAsmye13X9Rq",
  "key8": "3JE1Jg4PdEZDL9FWwmLpb59jB9zAy6DKo3CyD9Fyrc8W2qiUJVPZmpErLnpJP1CsYfMqGc1Axf6KKLZ17EpgtMsb",
  "key9": "5RK5Gt1NGVQayMSaYMik1LHwohPQ7ShADumqtMoXd7MtyyAaKNFdLp4GXSMWDp96sShxA1FtwJhd67T5acgCoaQb",
  "key10": "5UmpU8j9xWqNL2EEt3gmEiZSYCsCppB7Z7w93dMZPYJyBmzMBAtryRDe1g2wtehxyc5paaox5SH4ySWAHGiDtyuf",
  "key11": "2H34TBScoofhkFr7xrRAi6SasHFx4Jy7wATfUEW3P4yMojWxfqQGqt5gYfWn46pQu5uAG2XN93CykabDg4WywiDh",
  "key12": "2uSZZSNCApSaahF1A9RQS4ZawGBWX9BGXTNKLq6zFtyMPekJWBhZ591ZzJu3bxFCDFDJxQwYFgz5bfHeMGrBBzq8",
  "key13": "9t1BacztPgcn76GJTXJYwVL3JJQK2aRGTgSLMi1CmKnAaah32YrC2WpcZgPUSgqppPFwvesnVJuDytRu1NrpqMW",
  "key14": "veWZF4Az3fWcy7zLPepuiad8dtmXh5R8KqZNeXYyNmaVQkYM8EuZpZz4Ud5L36mauXL2NLuj85mvnGLG8APpmwW",
  "key15": "QMqs8PtVWvLN4n1Q2qyqBvWvG9nYymtoau52HqMLy4c3HZowxeigKPfVrqZ9Th89EeY8KjccErmsJhsVLDht9qe",
  "key16": "4oSrFbx4sVjb1BQx7GGJPtZBqL7BuuDCJWnAgLvAbDhsRVdMFXmYPiKQJAea97La4kVThJCZgeeDpP6cZrKLhVvt",
  "key17": "43nSDgpsxEEaERFLQVBphwzpYwjbx3MuXNKemTkH24aqrtpWe3jgxXrC8vrtEsytcLej7RbRYMBM86BpaETfz5ep",
  "key18": "wEH41rV6Uoy2LgN2oPLzyg5Sb2wnm46cY65F2WvBcNDwLMAPeRh5Mbb9NprbCHA9YehEfvdc7s9awbiKG3mZYhr",
  "key19": "265tQbZMXVkfFrL3MtJNdLDChwnf66v4s4XWbvqRbAFAWK8RDt5xZH61J5gYJHn2ve8a7AfvvCPiDgWPmD2zUJ49",
  "key20": "RYnQ2uYhyyUJ6KTVq1gzJYYsG17mz3HBkzMUDwxLKqSBKuPT5d5F1U2iQCjeS8QaWqZzuB6zuwUYfM3S4m7BjCT",
  "key21": "4CXMGHp45sh1Xms4rvRcuBF4gdxbFy1J7Mee7rnJxQUj5FaCqxqpYcjN2H29dn3vJyhVzajPCYk9NDodUep1Gq21",
  "key22": "2wcka3RYfmnAkMBDj1CY1HgnjsWYQgpkHmvmxVtQicd9skoyyNvh95gTCjghKLmYPPErNC8xUqRQ3Qp7ntyBte7K",
  "key23": "KyVuWYmKsKqKDqPyodraGdjXTTRGFXGfxQHueSuihR66SMpr7QbNhUtETen39D3QQJMQXcfkyDZnNhLkAmkGaW3",
  "key24": "3ypZSvKY6PwPiiZ5vhAi3aqE16wHhYm64r7QB3cL9BoAfsSRgt8G7gvrRD2vsBb6vcbGRzohVWYnpFHJHt1CTU2a",
  "key25": "3M8ebG8g8vqh8oaikD5dngFMDkcZTrQQFu35RRwgzTSU5aqqUM5uogn4j7Z3Yv2ABtKCaA3r2zdb9cgRKYfR5zG3",
  "key26": "62wmWeW5WJr9juy3SMGoqZMsKws2ysziNuqhmST5edpwmvHDLHTDjJorBNhukk4QuV6EWCSSTxfxAxpQmPZzB727",
  "key27": "5ViunT4nrdJApWYV929BfFLdj1DCqUzy8oHcegZ7dzRgxLc5joKzXGztGJRcccTn15kGuHQv6DkAWv3ujFd32fKZ",
  "key28": "5tGV5Wz6tDQvWJJSbCoBNxAZkcs4Ubt7bz2qrHuiLQCGTYKMTkCey9StyPd3ipBbLeJmbKGPSZ9CKaahAY12iSzq",
  "key29": "2gYAvptWu9NFER6YGK9iNuvcaqBAEeNqS9yE5CYWtVZN6oQho5PHyG2MxKLne2Y7AC7bekwu1yJAwXxDM2FjwSSi"
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
