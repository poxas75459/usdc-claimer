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
    "pH8UqWppp53sjNgUpGujfzgDYhiwnUpwcARpAi8RhuaR2NN7KosiMrdkUVyLm3bjSsNwV9yDw8WHyrqL9ycecH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eHJ2hMpdAbEbyJVdKW6KiW8ansnufnYoBwcW8x4hwR5wJmYJYd5qyxrxg6tMTk7eWeVCZB4TMTy9KXhsZvAu7pg",
  "key1": "3h57qdnJDNopUTvf4CsvJyyyH1VGXqX8aFv8dUMetpYePNTtHFU2w8zerVT5H3m8XFHY9hVHy9GTkNGo9FZeNb5P",
  "key2": "4WHnczowcy4nGnEhi5FadeqekufwKVsCAxqces1xsYk9DMvjX3KdH9pE62ZKUvh4HTdPnwLPByv7yajDdoZgBSRZ",
  "key3": "4j2ECTSZ3U6FmZxu9DhmHjBVkcwEgrKJ6sZruDToJgqjq6BWbimLoX78c7sFECzgFz8mnMc3kGtkxXQZpKup9udH",
  "key4": "2nFZPHE9CcX8YYQzWUGXQPXecB7f5ThFuzCSyNibvuDTLqwGQZ9qLJUSC7GjSKcjg19wzhTBssTftTiAtEN8aaNF",
  "key5": "4pgpvJq8Be8hAkSJF6k7kgGWMsdffFSBheKQBgiH4rFUriQC8ub4KcCGsebGdXdncGV9yLE4VS9xRYYSkfsAFF51",
  "key6": "56a6btqmdmjcyC9r8TaeWcEyYrBMNR1p4usu4DTk7cZfW2hTeQXyxMd3pcouHJiCzv5k7Ye6BS6b3UNFRZYRQhbb",
  "key7": "3TtjaKRPWceJTBD8q5kAM5h42e17jPcACRXeWwJvxyUT4M3DsoNDjirFUuLiBHEgweez57rydE1oqajWq1r8EyHr",
  "key8": "2MEe8PfAZUacCL5WUSVWVniU6w9wt4UfemKYzMcRETAiC4LrLBn1xAWnTPkKnK3n1wcLdurunAQ5ZXU1dFwbjPCL",
  "key9": "9k8tWYk9pM6goWMWqu2Z6uvspAd3U4KuZcdUuAPyvLfM9e2H59fdvRQAZNv7CiN5iH6KRS4PpKERj59w3P9usrH",
  "key10": "2AqGvtwZzGSPj7rzsyZNFu8dKQiZ66rFND7bAcdigUjLZzvgHkZgNnDjqwADTMAduFgD2uYYSwZTBjVBxSGVF7sz",
  "key11": "LCm1J2v9ay8v74JuxSyXmcWU8WzcjzWrhvQ6Bdzd7x9XUxXxX3XLQVcXpR9Sj8UmeypqsjxVVXjncT8ERHd28SA",
  "key12": "2QNkDvqHscqpUPze4RN5Fks7nJLMTCQma6MDt1LVPW42huivMwZRjLRpbnBfhusjx91tW7Ln4SAK1q6R2ZEUsc9p",
  "key13": "5MzGuJMpo7F3gpNPXBwBNrB5dy3pUdE8ojSWsjpLBxYGNq5v48d8XYSLgBzrJ6V675cNHRUCn6hn8Qua89KjXbsw",
  "key14": "4VbCpctbrhVhMjD1BobDUCCzJxvq21m1y1BdmSLtqzZ5YLTEWRjKbEJvuLk5x8JCb92vXWsustvhj9YrEbSdbZrD",
  "key15": "zrN3zF9FnUhS7pyRkKMR5WhZ948cv99vV6SBdHz9SooANEmLke28EtQ5HveLL15pmsnd1FFnn5epdy8teciohyC",
  "key16": "QomqmT8xJBN4ipBjgKRw9GwTnRUMsfjzKnYvkc8a9v7TDnPTWKu5JxxcWUn1MjbrxugFAHvTQ49edh69thsqdm7",
  "key17": "5ffkmR3uaDonTZhZxBzvc6fg6TUfHwJ7qYTrHe1JZtZyJYProA2BKeNTbgU9TdvFSGr7gyn8wLti58ngfghiZqAi",
  "key18": "2RFQ5NjeNTVbPnWR3ZJy6ZH3k8cMM3BQjX3vnbk7mp286eZWe1Rs3fVUL7tGBA4uXJBWuHN7Pm7Sh4JhQZHmewEb",
  "key19": "m2cGg2U9PR1JscG2NoiJL8NEvYDqJPYMnqXJyFi926keK8RvdpsvFkYHDZ1m3Ddw9XJYPpd2fg29BVEHXvPHuHs",
  "key20": "5xTGC13PneQ2YBgJpthVXLKHkbbhm8FxQAQiJ3dbUSGZsd1J6ofyx6yaziDLbqwWo5uj6XmxavBbgJa84HscR3bo",
  "key21": "4dpuhWSSC8JCNxxxohuTjNB55pETJ6UJwqpPFnMKtc2rxHAFpBgsBYxKhptKSg64PvxAt1gpgqDAvfje32U3Rmit",
  "key22": "2DtsJfqVKjjVnpwHojLsqzDKLJeBiDi2jqrCVDXKSpxekA66vGDV4aX6UEFPdYec78MUjwbC4qkv6zofDYWrJA7j",
  "key23": "2Rs23i718BhxgzX2ypy6Qy5xQLHmdKr1TXdw2ikhQqCTqTbEK7Zm5K6FPThREZoYgFLAXBsHm7fMgFYFmaUxxtWW",
  "key24": "2CeJYn9Y9pJWmjvv8kitV88BptbeTQUBey6ErLD7gn6B7ucQVWnD8et16tHL7R8K8qaupohsdmhBot7jjmzFgdox"
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
