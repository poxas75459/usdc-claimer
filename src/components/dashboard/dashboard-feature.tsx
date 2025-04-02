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
    "57QBtEkcyThttGrpa6G9DyexU9mFLK1UTKeDFSUChnMPEseBQFezVkGNvC87TCqLzVX41WQLh3dSFGm36ovrD9ij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kTsbX8uAZazF2LLuNXtbfeBjwQokbHFvkiGq8BDm828AX3Vh18ApbXjc7Rr2mRLrKrFVhNx7nLGPMJ253zZgaFv",
  "key1": "5wxhed9sRAujnG1zDh7P8eQwXLg44jFqmAAkQandQqZ8PJk2QowNJNnrW4y6sZ5RwT9q27xYTvwnog7SnFU7Zqn",
  "key2": "SSDN6hWSLvtcX5zNYFASgT2cYZyt9EDVjFiw8GSpR3PQipL5QuzoEy8UNVwSpiMyN9thgR7MQr13qMabMHcuhxq",
  "key3": "2Br7H91vivMFwNaeuKQpjMiGoBJa9pw8BpgjZPiTQr4ramLVubrA8LtrPcob8u3xY4dZyJmgunPkn4DaAdtcWDge",
  "key4": "5s3GMCwX5MXN49oE9RUgKSxFA79PNDovpfHujtDtJ4oHBhbacKRVvFDa1wZVcbhBNyMQVydAG8HhGQLKjMP7EsvF",
  "key5": "4ZxnfE2L44jiN2R7taDPGcfz9ViZyRMDNKN4GSA9e3cUPMqYBkJEjtdhbk3KE2ryaUvycVWmQgttadZvMLBZBCS4",
  "key6": "23j3cwSqjJsScJPDysPsBxDNNNwp9F6VsttM2L2j1sEWG6eTswqH4PDgZ87wqENHsgp9b3aMiu92bAnT9JdHy5eA",
  "key7": "4WdMDmY31yyUVd8FNXXxpRG7e38rJDmfJLfBL4N3tg813hoDx5QuSLLnhqXRADt8tA6vcuzJPir4PUWYgnUsEVUZ",
  "key8": "3Q7vYXfZuvjUKctDyjMbLdvGyCqzpCeSdsdLj8yUgMTcJyhTauBdYyQuD2rDdaXapSAR218fMbLQfk784XME8JfG",
  "key9": "5ADkPds3tjHFips2esepBNk12bit8ek2Cc32hqNBN25dv5VTsKBBoZLgfnsF8vBci8b6eSQdVenoSk9mcuf8L4h3",
  "key10": "SX6coYnzCx6CaAtXdMJGseYrLc8m9Gj7jcSgYrFGZJ8DhxqCnDa5nkKC1GfTPM9XaTssKH22mkFcYGGDXEnR68G",
  "key11": "3U2iYrYeD9H5z1cdhQefSfisTEfui3rKQUsq1rarirdZDHqJgoEtTcRVq8wUgPXnR6PmV5jRZAsPMogqn1eMVp7P",
  "key12": "2TESuWKTmjirxwZ3QFAdrhHZmzJpc1fMXMqnGdwyLQwMbUDuZ5Bqm9vy1oJ8FGbvWdtggqEC52JJpQVkK6abhpzy",
  "key13": "3q14SZAjiyomYeCu9tfyUEeeN8tmob1PRWgw4UTaZzLSpt9gZjZKYY48F6Qxtj71PWHTNupa11MJPQw63xAGvWP8",
  "key14": "2iMZD76QFhddNWY1zHqQxh9H9oveNAGZjQqDpHn4LVFqysVEV2gnnXLSMvjYTMDWgoEvfZ5KhXAHGHc7kr7tVGDg",
  "key15": "4Z3ysrdg8FwSijG4zR3zaEzj2PwQjG7JRKd2izyEJjaAK7Qsbt2x9NUYTLEqoGMgRhFefoNUsoAUP1gAYxg9Lje6",
  "key16": "4HoUd94LoAshy69S3sLoShCDrLJ786N6kBmkt442iKCFHjJGQ9QAyGLEbnREPG5WM6xNc5wpDUHPYSjTJQjMzWrd",
  "key17": "2n5gDxU2CrVSamaU1ZU8mWeAVwJT8Q9S9NmkX6Qm5mgbMN82xyYSPcqTkvoF5KVMkvE2ntfSbk1P2o3wqD4Emmp5",
  "key18": "2wGXhpZztHxNDKXGU8N75zLC1q2APCGjszifjJ4F3u9QbAcfSYYrciMY8zD9jsm8ThDi2z8dunZx6H7bbsA78S3x",
  "key19": "4kez7nubUBmUkfNrKcMxLsiNjzsBXgwG6A8Eh4Q1WdEVM9tNToZZndhZWQEtVSKns21AWwvAQqR9hicmyyeKafZd",
  "key20": "qcpWqAhiECesYfDKekAAG8bqGYAs4yq1NW8mgsdTdyf2kZqE9nHUnShFZKQmf7KXerLs6URveK2kaU1JiaovzjL",
  "key21": "5wihYVYcdempKF1xKxkSFQh4sXJtdWdyfxvXASkaAtAgT2SmuLLjrTP9prYSQFHi19hGK1ugsd8rW7kY8KjnYtPn",
  "key22": "2o7dWWpXUw7qaERTmva4ZQ7SxB3D6DvVyKa4DmYkjkDMoMXuo73bBmGDiMxpgfC4RVQKXTAK8nVvuVWqKv95rRBK",
  "key23": "4ynoYnPbyGunQRBVqU2k81XWi3cFtz453ib6WyRmCb1tvJ1yRBTztMdnQn21uRGXHhQbkDQyxBzZ32gXwnGqaaZT",
  "key24": "22Fu1w7dfrCYGGyfDjXPyqkbVrpTUd6oX9Y4AT73W1csmbmZGe6rJNBhpvBLNJ6ekj6opyoyiyyV8Evz7tAuYQqU",
  "key25": "3pn9msU8iSVYMeTuYbaDtkoF3dfrikwNmLeY3V7HXRErjyPshfLxBq1ehj1eH3MaMBhL7dL3LuyUN93UUk873p5D",
  "key26": "67MMF3fbvXo7VwQZsBy2ZPoWRfEocAULkor4zUrjjGK5fMYKhxjaCZbNj2aYcny1xmYLVKKM14LFv1etjf94hzUH",
  "key27": "5MSKNo8SkRjtpje8GASoXGd9tcN1i8AjFEvih6occYgwoWLv2p8Zvb2E6qaUNmqJY46rPWfNWjULN948d6K11qhm",
  "key28": "4KfRYaJh8gpGnkkRMKpdyUwwa54ZwyMVcU2mk87sdZkY3om1EW26VLsCz7Bh9gRSPurmdMkZuj7WGzB8fMeSLm3K",
  "key29": "3LsZysfX8jGKA4MDoJYH4WgZHagwkQC2xyc5prYgMyUrV2UX2sc1XdnjxnG6JBS4N5kdLo2EwKEo2JGzmyLxqQzu",
  "key30": "5Gz4xKLEWoUWEiZuqMzNXrmcKLvfHpekW5chQfb6yvNF2EzSZFDGLGT1MxNs4hg9J3VNM9o6wh89Pr2EzLSJi9Jo",
  "key31": "5hUpSbBk1M8SsKS1fdZxecKvg7LRY7GZ3qC44W6VDoJh3nN6bNWwB56xW6eWcXTdDUPkRKkjfwytLLwubX5LghmA",
  "key32": "2GPTzxX4Z1scn8i2FKrp5uoa46EqE8c6YVtiqH5Afu85ycaB845cqwDBHPL7gJXeUnGYtUX4EwAPuuSUUpMrm6jS"
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
