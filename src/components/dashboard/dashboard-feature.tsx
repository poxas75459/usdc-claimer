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
    "2yd4EMkFbv6vsAPggDCwJYhNTfYVHN21xgGrNuwgdWZgKZDpmkbKb4V5CtuGUyAB3yMgUbqR45wRP6dzN7pQx1W1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o16dCHMt2FMqoforSkUsCkEJsT4yfQipzqNygvHHviuTiRVdnskaGMDdx8tGbvEvfiNfUeAczZ8YMkwGNxjzTXR",
  "key1": "218saUY2pTwxuHuNSBRmMd73i9uG4Mc5U48vLEDgyC4moQgCafVZ3r1UYqCWtvViM1TVvrTW39WEXZqtoyriTGkR",
  "key2": "3mxcZ2XBupHn7LiHptvhBc6tHtMqteX5gx6xSQEsWTUorybUBPtn1tqb24iNEerQqiLibKiy3msKhM4fdiy3itHc",
  "key3": "2tCArCskqjW8tKfFWsVEL8tit3pCx4T9nq3cWzCdjwwRbwZmUHHgv1cGC2PqX9fTXpPKvBzHRGMRoRMmw8kwz4cZ",
  "key4": "3LAV23NFhnYRkhN9jUVWoojBwi2kS6Sh5FkUDLTPSdpxw2pFREdzcAA8ecEn6SJuyaseFXUyURt7hrpvPufkPNvd",
  "key5": "3KPJMkiVniQbWr1jH7SHA4nvRfPnrTiQjdM4KKpQwfQRsy54tvpsndftjWUybnwavStZnme8m5QkdYvAYQS2SjTZ",
  "key6": "Zb6quTArrsgFG3PUJ6qdsvLCiUnAxzJ7pTedTfkKcn3aDqUgRXsmxB8fbki6ep4feYwdmkxHcZaxwjsnJSF7JqN",
  "key7": "4PT4vpA1iq5Gd9thQB7yfXWZnYX6yo8Ljov59oqgJ1fbqpKyda1GzmyZsLbLbPzrPRXuP1Y1MEJTfMWGKg8PcDsh",
  "key8": "79SP4f8vj8mrt2bfx6731ErahMz3DStDHHicuePUxCnY5uSwczK4yvw3ftnnDpWEU2WY3k7GWPXKxnVLV3Funa6",
  "key9": "5T6mNPpquDrh2WgJSsx24hoRjcjZPoq9b1CYReLEw6Rof4oZfSfCfMsBQyic4JZoPPtszRV6zEhEpxxni3NRRNoc",
  "key10": "4Au8V1NssqekGsS4j7JoeAnxK6FJBMV9Pk1Zjfh5nPPUrxTcxwCntea8d5u65v31uozCAjd6zkFQMyG9eaWuLhsh",
  "key11": "5xXWWUsZCumhrh3jsxR8dbPB3c988qpECpWRQvAXYFsGF4mh5JdE749QREnH8J6Y8YRWdBd5KM9TipzV88PLykW7",
  "key12": "4QFjZkvap5psSz7H625SfS8aa4FoZaGeszNgNWsDaHHf4VjnmU6LK9FXNRYto32GqGcLKnANYcFX2tkEbdhxdJzn",
  "key13": "4fVhX3cgakfcHX7N5n2ioGgAMcAoZYsWCE7K9x1h3pYbAyJVVHNwC6rrZPYfsrPGXtSBeM7Na2hjnELAeTSPYums",
  "key14": "nKUcJvqb3aRaJvLVZbeXCjiFMW1gp6WCi9Asn4mrnTTcyQboE3r8irYnNP4x8mWKUEGQzJ8LX2fxPMHqzE27vR3",
  "key15": "5orXuh12UHQfC3BvQyV2RugdaxjGbjF12ZMbVTe1DL1CyL9bhkgNfyju3KfqNomgE44wFS9b1QyiFSB38U6JhZD1",
  "key16": "59aupsYU4XCfCcrsLjwDXAWvRPfngJFmv2PcWewwzAZozpq4n3JqJJHpouExsNsJ2TnPD8RqB5FjjpKHQT5C3cfJ",
  "key17": "48zT1RgtUSuqfm6iA6nrgvcyvwAuYJf87fkAK52RMmgjVDYid5eNsSatRyKeatnvLKfkFrJkGBgvaDmFxbWd6bX1",
  "key18": "4d1ndjue7fey2cUfYAAyDuqeXNaLQb7MdsE2p5r3Z7bS8uANhJstXRLYTKfFJuvbNjcsWbPjVEXedckk4TinoFEX",
  "key19": "2Zf4Vgh8phk1zKsKW8XNVhAnatEZjdbhzPD1FZpXwo7QXrUaWXRNdGvecsb4ppewbov8VwqoKyoKR34ne4VXYbee",
  "key20": "3XnB6fTiYKvLt1FcjTYy9W7NPB3T7qS1gAXSJKztjmCjiUB9pYLxZfiTUiDEy8wxLxKk3x9vdE7XzCSYrFvdA6Ep",
  "key21": "Lskv7horPAXG9Qm34USQxkCRhkFL6TbtMZDTpaK8QRrUcL5sKAKGcnCMevnDZ1cLJ3UFwJ8aQswunWZV1sDu2he",
  "key22": "3W3DSTnz2d9id4KYg24DHRHBuDDtrwudqeBp421aLhFCZtYqtfSnXiMWxp72AuKqnQS6bF16w538JdP2geJxpymV",
  "key23": "XanvLtWretekpb6B4duYVz7uErkinRTBeT2gSHFrbwXhsoGrsXJaWMx63GthCud4KsDNjNadZUEMVZpMcwyP7KU",
  "key24": "3bSpNHiMkCNsFZJ3yqujpk9nWBR868aXDQU5tp5YS5Q4o2FcjTQgnJSPmGFqD3xRoo3JrQEudNiLTcjNjQHs1HMx",
  "key25": "4eyJ3zys2gAGvWjZ3YgZfNzFEr5ZtFt97USXX44XceJis4ZeDCM7iKybAJSfQYo8n6GzWUzZQBS5UVMAyPa7KnRK",
  "key26": "22Pr2UYXTtAzJ2gnz9FDd7VxZqwZJP1VwGWwnXgU8eHHUhfFFWxxAv1pwVQ2VELCQSuW4wvPyirrjTQagXFg9zWF",
  "key27": "4v3cCcXkk36DqPV7UeEgSiDduSYXNG4ipoGNScvBsSpTMd9xzbejsVcMX3zWrE2XeUEphTSKBTTEot8e94UELoiC",
  "key28": "4frcnvro4XQA2ZBogE8XQ25tBgME23EcXyy1ynmUPUBZBa2Sj2wA8ZoNSQXRooHuTJ5MSET1nLxrzSwkthgTFoqS"
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
