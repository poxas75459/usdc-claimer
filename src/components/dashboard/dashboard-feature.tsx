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
    "4c1zKzCCnzaYUj5hn8PyJJmbX1odjJNB4619X93e4J1xujg1ZXU5kr5VUVtkAWeytptz1yYxVXU4xjpKBgXXDcNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N7UeeB2QadzXbBE8rarpCcBgNHgkFjgBgoHtUBfk6q69vYJSZWGkq7F5foeyGfVvwD5Gx2xu9inn1qTQva7HauV",
  "key1": "44bqLK3NukYpPzHW6WbWcZ71BLsFCgDm9fEMwxt5XdKZHKkQQ5zRVKWprfZgEfcKATXaVrGwTF4tHqMhZQZRwoKw",
  "key2": "5hBAu574bgtraL6iAtdotk5CkVRJ9TqNi7mLSUEDwgUb6MmB1YsjFSCyL9hFDFX6rtwi9DJhrtAGbB6RH5vKwUQD",
  "key3": "5RBUqaMNvJiM3ZnTZhm79Ua9dsMecBo4KygeRo7haeXjEDn8UNhHmHeZ1GbyfrsYfiXzdzDpvsSWFN1CFpwr4fzE",
  "key4": "4q8HcfbxhSCLuiWnsp9q4VM6CVEoqoPdy7GEJYqaa5ayhc5mzbDYSEM5xZu7KvEZHeDrZRQjHZWB3NHQPnNfdMPd",
  "key5": "47mpTdzSmC8u525Txwge8pB5vzbRkS5gH777wvT2kL2TVukMoS9HczmyYTJvoa98woNKPkjWiu6yRKeWF6JoMTtu",
  "key6": "Uq3xv56jUrdKuQDAwVXNueYJmGCEUSR2g4P7V1KtNCLSqCZLnnFc6dZ8WLKRGkurZQNQ4wgdc6Y6qdZnnH33RKR",
  "key7": "4gH8D88MsK9ukqWKokDqfF8Ak8Si6jgUEqZdTh9ZaJ356F9z1DV3L6bJNDfww675WzxBkpNWD7pLhvBWwoKr13HT",
  "key8": "2J93s9Js5Zc25Zn5irduGzuBxMpKQobDYLKZD94tvVmGx6ibHDRchuxYdSAgC2JA8jknAY2zyuVKWfeZ3Ze2A4E6",
  "key9": "26FoSBC8iDuU9JQyU3uwcE2haKGreZikczCkE3wnECpwzTHgSsgq8S7ErSNbiELdQ9d8mNuD5k5x3stwCe2mzF99",
  "key10": "2z4K8Pzwky6TqhGYSWjP7EAHq3ds3vHe2FKDR5Xqx8gGCJvare7DFGE3JqXSNVgMswLxzDguRxygXcZrHgZ3m8wD",
  "key11": "294JF9z4NkJMz1FKpb64XTtW1NQJzNxWUoxBtt61wP8wvFriZLd6S4hHH5fqDAANBH3WtxA6zjJUeA4ZJRcbwKUh",
  "key12": "3BT6LaqXSqFu5Zjm4vYEmPPXa3fzCNuY7Lp6UBfYavcDHh4c2ejMGA68X9yRbwdbnDcP3FLVdPybsob1ciPUD9nU",
  "key13": "ietKfF4gk3Hwy9dDfE7jBvDrTUTpW1hMGdAShPfAdworgruGZvgUsrRcvcPAeWLMccMM8gAaVQ6F1UyJyWK8qSP",
  "key14": "jSWGBNkF7b9no3essLYkmz8b5TdSXbwKsvGfe4SuXkzpgEYbTa8LCDw4zmrUwVEmrr6Z4diA2jJ82oZfcgr6obe",
  "key15": "5WvRaHpqNKvhM4e2DFMbcT7FSosn1zbtJgy51JAezpKWUBCXXX6gDay6aJsfzZ5d6twrvifC3GXRiyzWwmxn3Stx",
  "key16": "4CfY7cCeqmaXYEB9hYVEF2UUsqJnTC6VNKHCY6n2z4oJXwM2T4pQzoMa7qiLhDMhGuW6KTxGuYT3yoGJBRVSEXez",
  "key17": "1EFeq1cXNQns4QkYHvXAfxDTTh5PbHZqLWi1UmmH5GmVqmaXJVUWReW65bHEi5NL81LU61iJEgKrp7z6QfXkcUP",
  "key18": "aXTHSd5EpkZq2CcDToURrHTKSFK9Bgg5n54E76kpjP3WzYxQqogtVJ7ubEa4JUXTDDknBewpEXxDFZwHFQ8dtzy",
  "key19": "49A3BnJnjt5DHZDuM5xT53qEbyw1BgyXkWfhA2J1W3on8bHqX6Cr9qKz16bhALDV2fQzz67h1Xwqp5kLRU76jJSW",
  "key20": "sVRKQkj92ishfjXqjKHEdvAaZGmKdvwULFLjK1x66TeDKoe3FrcSXRVfEUDHtTaWTimBxH3fuiFAjvHsBjTwkfL",
  "key21": "iozKrMXcyuxbUnaWPbf1bbAf22Mcn13upAFVv9kpLwU5FXoJSvEiL5FUL6LbgAaJVGN9kL5dWSP1vLKMDjmrWun",
  "key22": "3U1rVskqk3gvf3a7ZEZyhTKUL8oKUzVwAjLVYaBRnMj6uA9BkBGyJHxYPuSPi2s2X7RqPZ9vr5oB7U6pAChpWVCc",
  "key23": "2bV5b5Uw6qXpREVsKiYYyVHR6oEYdAcfQvayjjGjvMPsHZooi1zQbnyWXQ6qdF5DEXFTEJgMjMU6n9oB9aYmGtos",
  "key24": "5yU8Qyjd4J6QsqDXMEC3whyr4eX3rspYNQW2aY6UkPHLbJQYeTAYUs95apdgW6MrNk68FKSTiWQti2ghCpg1eMM",
  "key25": "26Fwc2iBacmSMY4xsy3bSNc2eAH8kqPYBR6CJcU8Cn2sM4BAagbb7NBMMF9bC2ADxgdCJdFpDb4DbzhNpQwvV4PG",
  "key26": "3aGFBVozqgaUpDJVN9diYbDQyH9hBXJSBhJfpjDApDG5HoYPNGJ5nAXJBUVcSBQGnLGiJrpG8ZKZ7EfDAd2NqkbJ",
  "key27": "5njJ6dMb5864YVEpVwDKzokKUrY93sfNrEnfDkY9A8r8fnsABLZGoxNrrAsPzkHfM2QayvY3vojPQKLRd1VgNyFd",
  "key28": "2dkgLnfB2X8hgstDyFNhZnRFpbkF4x9cwx3xBnpue3ikXU2eqGd5dNE2wVnWgkh1FDQgf2Ji9fEa5zh2cQk5yUrV",
  "key29": "3GDa8UgEAAtkgop7GuuWV6QCvGVMb7a6T933rGn5D11jVRcAE5AA9H4FjWNL6hfMSu6vtWmfaV2mb6cLTezXBpFf"
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
